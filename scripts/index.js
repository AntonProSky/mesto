import {Card} from "./Card.js";
import { initialCards } from "./constants.js";
import { gridElement,templateCard,options, formChangeProfile, formCreateCard} from "./utils.js";
import { FormValidator } from './FormValidator.js';



 initialCards.forEach(item => { 
  const cardElement = createNewCard(item); 
  gridElement.prepend(cardElement); 
});



 const formProfileValid = new FormValidator(options, formChangeProfile);
 formProfileValid.enableValidation();
 formProfileValid.disabledButton();
 const formAddNewCardValid = new FormValidator(options, formCreateCard);
 formAddNewCardValid.enableValidation();
 formAddNewCardValid.disabledButton();


const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-profile");
const closeButtonProfile = document.querySelector("#popup__close_profile");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__subtitle");
const titleInput = document.querySelector("#popup__input_type_placename");
const imageInput = document.querySelector("#popup__input_type_href");

const addButton = document.querySelector(".profile__add-button");
const closeButtonCard = document.querySelector("#popup__close_card");
const popupCard = document.querySelector("#popup-card");
const formAddCard = document.querySelector("#popup__form_create-card");

const popupImage = document.querySelector("#popup-image");
const closeButtonImage = document.querySelector("#popup__close_image");

const containerImage = document.querySelector(".popup__image");
const titleImage = document.querySelector("#popup__title");
 
  // Открытие попап картинки
function handleClickImagePopup (name, link)  {
    containerImage.src = link;
    containerImage.alt = name;
    titleImage.textContent = name;
    openPopup(popupImage);
  };


// открытие, закрытие и отправка формы попапа создания карточек
formAddCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = { name: titleInput.value, link: imageInput.value };
  createNewCard(data);

  titleInput.value = "";
  imageInput.value = "";
  closePopup(popupCard);

});

const handleOpenPopupCard = () => {
  openPopup(popupCard);
  imageInput.value = "";
  titleInput.value = "";
  formAddNewCardValid.resetValidationState();
  
};

const handleClosePopupCard = () => {
  closePopup(popupCard);
};

// открытие, закрытие и отправка формы попапа профиля
const handleOpenPopup = () => {
  openPopup(popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  formProfileValid.resetValidationState();

};

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

const handleclosePopup = () => {
  closePopup(popupProfile);
};

//универсальные функции открытия и закрытия попапов
export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown",closePopupEsc);
  popup.addEventListener("mousedown", closePopupOverlay);

};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown",closePopupEsc);
  popup.removeEventListener("mousedown", closePopupOverlay);

};
//Закрытие попапа картинки
const handleCloseImagePopup = () => {
  closePopup(popupImage);
};

//Закрытие всех попапов нажатием на Esc 
function closePopupEsc (e) {
  if (e.key === "Escape"){
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

//Закрытие всех попапов нажатием на Overlay
function closePopupOverlay (e){
  if (e.target === e.currentTarget) { 
    const popup = document.querySelector(".popup_opened");
    closePopup(popup); 
  } 
}

function createNewCard(data) {
  const card = new Card(data, "#template-card", handleClickImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

formChangeProfile.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", handleOpenPopup);
closeButtonProfile.addEventListener("click", handleclosePopup);

addButton.addEventListener("click", handleOpenPopupCard);
closeButtonCard.addEventListener("click", handleClosePopupCard);

closeButtonImage.addEventListener("click", handleCloseImagePopup);









