import './index.css';

import { Card } from "../components/Card.js";
import { FormValidator } from '../components/FormValidator.js';
import { Popup } from '../components/Popup';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { 
  initialCards, 
  options, 
  gridElement, 
  nameInput, 
  jobInput, 
  formChangeProfile, 
  formCreateCard, 
  editButton, 
  addButton,} from "../utils/constants";

 const formProfileValid = new FormValidator(options, formChangeProfile);
 formProfileValid.enableValidation();
 formProfileValid.disabledButton();
 const formAddNewCardValid = new FormValidator(options, formCreateCard);
 formAddNewCardValid.enableValidation();
 formAddNewCardValid.disabledButton();

 const popupWithImage = new PopupWithImage('#popup-image');
 popupWithImage.setEventListeners();

 const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  infoSelector: '.profile__subtitle'
});

const editProfile = new PopupWithForm('#popup-profile', data => {
  userInfo.setUserInfo({
    name: data['name'],
    info: data['job']
});
  editProfile.close();
});
editProfile.setEventListeners();

editButton.addEventListener('click', () => {
  editProfile.open();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
});

const addCard = new PopupWithForm('#popup-card', data => {
  const card = {
    name: data['placename'],
    link: data['href']
  };
  elementList.addItem(createNewCard(card));
  addCard.close();
});
addCard.setEventListeners();

addButton.addEventListener('click', () => {
  addCard.open();
  formAddNewCardValid.disabledButton();
});


const elementList = new Section(
  {
    items: initialCards,
    renderer: items => elementList.addItem(createNewCard(items))
  },
  gridElement
);
elementList.renderItems();

function handleClickImagePopup (name, link)  {
  popupWithImage.open(name, link)
  };

function createNewCard(data) {
  const card = new Card(data, "#template-card", handleClickImagePopup);
  return card.generateCard();
}








