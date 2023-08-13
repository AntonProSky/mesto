import './index.css';

import { Card } from "../components/Card.js";
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupDelete } from '../components/PopupDelete';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api} from '../components/Api.js';

import { 
  options, 
  nameInput, 
  jobInput,   
  editButton, 
  addButton,
  buttonAvatar,
  popupProfile,
  popupCard,
  popupAvatar,
  token,} from "../utils/constants";

  function openPopupProfile() {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.about;
    popupEditProfile.open();
  }
  
  function openPopupAddCard() {
    formAddNewCardValid.disabledButton();
    popupAddCard.open();
  }
  
  function openPopupAvatar() {
    popupAvatarValid.disabledButton();
    popupEditAvatar.open();
  }


 const formProfileValid = new FormValidator(options, popupProfile);
 formProfileValid.enableValidation();
 formProfileValid.disabledButton();
 const formAddNewCardValid = new FormValidator(options, popupCard);
 formAddNewCardValid.enableValidation();
 formAddNewCardValid.disabledButton();
 const popupAvatarValid = new FormValidator(options, popupAvatar);
 popupAvatarValid.enableValidation();
 popupAvatarValid.disabledButton();

 const popupWithImage = new PopupWithImage('#popup-image');
 popupWithImage.setEventListeners();

 const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

const popupAddCard = new PopupWithForm('#popup-card', (evt, fields) => {
  evt.preventDefault();
  popupAddCard.saveLoading(true);
  api
    .postCard(fields['placename'], fields['href'])
    .then(res => {
      elementList.addItem(createNewCard(res));
      popupAddCard.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.saveLoading(false);
    });
});
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm('#popup-profile', (evt, fields) => {
  evt.preventDefault();
  popupEditProfile.saveLoading(true);
  api
    .setProfile(fields['name'], fields['job'])
    .then(result => {
      userInfo.setUserInfo(result.name, result.about);
      popupEditProfile.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.saveLoading(false);
    });
});

const popupEditAvatar = new PopupWithForm('#popup-avatar', (evt, fields) => {
  evt.preventDefault();
  popupEditAvatar.saveLoading(true);
  api
    .setAvatar(fields['avatar'])
    .then(result => {
      userInfo.setUserAvatar(result.avatar);
      popupEditAvatar.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.saveLoading(false);
    });
});
popupEditAvatar.setEventListeners();

const popupDeleteCard = new PopupDelete('.popup_delete-card', (evt, card) => {
  evt.preventDefault();
  api
    .deleteCard(card.id)
    .then(() => {
      card.deleteCard();
      popupDeleteCard.close();
    })
    .catch(err => {
      console.log(err);
    });
});
popupDeleteCard.setEventListeners();

const elementList = new Section(
  {
    items: data => {
      cardList.addItem(createNewCard(data));
    }
  },
  '.elements__element'
);
popupEditProfile.setEventListeners();


function createNewCard(cardItem) {
  const myId = userInfo.getUserInfo().id;
  const card = new Card(
    {
      data: cardItem,
      userId: myId,
      handleClickRemove: card => {
        popupDeleteCard.open(card);
      },
      handleClickCard: () => {
        popupWithImage.open({ name: cardItem.name, link: cardItem.link });
      },
      handleClickLike: () => {
        if (!card._isLiked) {
          api
            .setLike(card.id)
            .then(res => {
              card.setLikes(res.likes.length);
              card.statusLikes();
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          api
            .deleteLike(card.id)
            .then(res => {
              card.setLikes(res.likes.length);
              card.statusLikes();
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    },
    '#template-card'
  );

  return card.generateCard();
}

buttonAvatar.addEventListener('click', openPopupAvatar);
editButton.addEventListener('click', openPopupProfile);
addButton.addEventListener('click', openPopupAddCard);


const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/',
  token: token,
  groupId: 'cohort-72'
});

let userId;

api
  .getUserInfo()
  .then(resApi => {
    userId = resApi._id;
    userInfo.setUserInfo(resApi.name, resApi.about, userId);
    userInfo.setUserAvatar(resApi.avatar);
  })
  .then(() => {
    api
      .getCards()
      .then(res => {
        elementList.renderItems(res, userId);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });

