export const gridElement = document.querySelector(".elements");
export const templateCard = document.querySelector("#template-card");
export const formChangeProfile = document.querySelector("#popup__form_create-profile");
export const formCreateCard = document.querySelector("#popup__form_create-card");
export const editButton = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector("#popup-profile");
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_job");
export const nameProfile = document.querySelector(".profile__title");
export const jobProfile = document.querySelector(".profile__subtitle");
export const titleInput = document.querySelector("#popup__input_type_placename");
export const imageInput = document.querySelector("#popup__input_type_href");

export const addButton = document.querySelector(".profile__add-button");
export const popupCard = document.querySelector("#popup-card");
export const formAddCard = document.querySelector("#popup__form_create-card");

export const popupImage = document.querySelector("#popup-image");

export const containerImage = document.querySelector(".popup__image");
export const titleImage = document.querySelector("#popup__title");


//                         Кнопки закрытия попапов                   //
export const closeButtons = document.querySelectorAll('.popup__close');



//  Массив для рендера карточек  //
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
  
  
  //  Опции для валидации  //
  export const options = {
      formSelector: ".popup__form",
      buttonSelector: ".popup__save",
      inputSelector: ".popup__input",
      inputSectionSelector: ".popup__section",
      inputErrorSelector: ".popup__input-error",
      disabledButtonClass: "popup__save_inactive",
      inputErrorClass: "popup__input-error_active",
    };
  