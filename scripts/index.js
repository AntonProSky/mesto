new Card(initialCards,templateCard);
import { Card } from "./Card";
import { FormValidator } from "./FormValidator";
import{initialCards} from "./constants";
new FormValidator (options, formChangeProfile);
new FormValidator (options, formCreateCard);

const gridElement = document.querySelector(".elements");
const templateCard = document.querySelector("#template-card"); 
const popupAll = document.querySelectorAll(".popup");
const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-profile");
const closeButtonProfile = document.querySelector("#popup__close_profile");
const formChangeProfile = document.querySelector("#popup__form_create-profile");
const formCreateCard = document.querySelector("#popup__form_create-card");
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

export const popupImage = document.querySelector("#popup-image");
const closeButtonImage = document.querySelector("#popup__close_image");

const createButton = document.querySelector("#popup__create_card")
const profileButton = document.querySelector('#popup__save_profile')

const renderCard = (element, card) => {
  element.prepend(createCard(card));
};

initialCards.forEach((card) => {
  renderCard(gridElement, card);
});

// открытие, закрытие и отправка формы попапа создания карточек
formAddCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = { name: titleInput.value, link: imageInput.value };
  renderCard(gridElement, data);

  titleInput.value = "";
  imageInput.value = "";
  disabledButton(createButton, options.disabledButtonClass);
  closePopup(popupCard);

});

const handleOpenPopupCard = () => {
  openPopup(popupCard);
  imageInput.value = "";
  titleInput.value = "";
  clearCardFormInput();
  
};

const handleClosePopupCard = () => {
  closePopup(popupCard);
};

// открытие, закрытие и отправка формы попапа профиля
const handleOpenPopup = () => {
  openPopup(popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  enableButton(profileButton,options.disabledButtonClass)
  checkChangeFormInput();

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
handleCloseImagePopup = () => {
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

const checkChangeFormInput = () =>{
  const  inputs = Array.from(formChangeProfile.querySelectorAll('.popup__input'))
  inputs.forEach(input => {
    toggleInputState(input, options);
  });
};

const clearCardFormInput = () =>{
  const inputs = Array.from(formAddCard.querySelectorAll('.popup__input'))
  inputs.forEach(input => {
    hiddenErrorForInput(input, options);
  });
};


formChangeProfile.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", handleOpenPopup);
closeButtonProfile.addEventListener("click", handleclosePopup);

addButton.addEventListener("click", handleOpenPopupCard);
closeButtonCard.addEventListener("click", handleClosePopupCard);

closeButtonImage.addEventListener("click", handleCloseImagePopup);

const options = {
  formSelector: ".popup__form",
  buttonSelector: ".popup__save",
  inputSelector: ".popup__input",
  inputSectionSelector: ".popup__section",
  inputErrorSelector: ".popup__input-error",
  disabledButtonClass: "popup__save_inactive",
  inputErrorClass: "popup__input-error_active",
};

enableValidation(options);








