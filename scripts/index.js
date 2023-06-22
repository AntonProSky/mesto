const templateCard = document.querySelector("#template-card");
const gridElement = document.querySelector(".elements");

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

const popupImage = document.querySelector("#popup-image");
const closeButtonImage = document.querySelector("#popup__close_image");
const containerImage = document.querySelector(".popup__image");
const titleImage = document.querySelector("#popup__title");

const createButton = document.querySelector("#popup__create_card")
const profileButton = document.querySelector('#popup__save_profile')
// отрисовка массива + кнопка удаления и лайка карточки
const createCard = (card) => {
  const elementCard = templateCard.content
    .querySelector(".elements__element")
    .cloneNode(true);

  const imageCard = elementCard.querySelector(".elements__mask-group");
  const titleCard = elementCard.querySelector(".elements__title");
  const likeButton = elementCard.querySelector(".elements__button-like");
  const deleteButton = elementCard.querySelector(".elements__delete-button");

  const handleDelete = () => {
    elementCard.remove();
  };

  const handleLike = (evt) => {
    evt.target.classList.toggle("elements__button-like_active");
  };

  // Открытие попап картинки
  const handleClickImagePopup = () => {
    containerImage.src = imageCard.src;
    containerImage.alt = titleCard.textContent;
    titleImage.textContent = titleCard.textContent;
    openPopup(popupImage);
  };

  likeButton.addEventListener("click", handleLike);
  deleteButton.addEventListener("click", handleDelete);
  imageCard.addEventListener("click", handleClickImagePopup);

  titleCard.textContent = card.name;
  imageCard.src = card.link;
  imageCard.alt = card.name;

  return elementCard;
};

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
  checkAllInput();

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
const openPopup = (popup) => {
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
const closePopupEsc = () =>{
popupAll.forEach((popup) => { 
  document.addEventListener("keydown", function (event) { 
    if (event.key === "Escape") { 
      closePopup(popup); 
    } 
  }); 
}); 
};
//Закрытие всех попапов нажатием на Overlay
const closePopupOverlay = () =>{
popupAll.forEach((popup) => { 
  popup.addEventListener("mousedown", function (event) { 
    if (event.target === event.currentTarget) { 
      closePopup(popup); 
    } 
  }); 
}); 
}
const checkAllInput = () =>{
  const  inputs = Array.from(document.querySelectorAll('.popup__input'))
  inputs.forEach(input => {
    toggleInputState(input, options);
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








