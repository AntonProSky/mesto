const templateCard = document.getElementById("template-card");
const gridElement = document.querySelector(".elements");

const popupAll = document.querySelectorAll(".popup");
const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.getElementById("popup-profile");
const closeButtonProfile = document.getElementById("popup__close_profile");
const formChangeProfile = document.getElementById("popup__form_create-profile");
const formCreateCard = document.getElementById("popup__form_create-card");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__subtitle");
const titleInput = document.getElementById("popup__input_type_placename");
const imageInput = document.getElementById("popup__input_type_href");

const addButton = document.querySelector(".profile__add-button");
const closeButtonCard = document.getElementById("popup__close_card");
const popupCard = document.getElementById("popup-card");
const formAddCard = document.getElementById("popup__form_create-card");

const popupImage = document.getElementById("popup-image");
const closeButtonImage = document.getElementById("popup__close_image");
const containerImage = document.querySelector(".popup__image");
const titleImage = document.getElementById("popup__title");

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

  closePopup(popupCard);
});

const handleOpenPopupCard = () => {
  openPopup(popupCard);
};

const handleClosePopupCard = () => {
  closePopup(popupCard);
};

// открытие, закрытие и отправка формы попапа профиля
const handleOpenPopup = () => {
  openPopup(popupProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
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
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};

//Закрытие попапа картинки
handleCloseImagePopup = () => {
  closePopup(popupImage);
};

//Закрытие всех попапов нажатием на оверлей
popupAll.forEach((popup) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup(popup);
    }
  });
});

popupAll.forEach((popup) => {
  popup.addEventListener("mousedown", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

formChangeProfile.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", handleOpenPopup);
closeButtonProfile.addEventListener("click", handleclosePopup);

addButton.addEventListener("click", handleOpenPopupCard);
closeButtonCard.addEventListener("click", handleClosePopupCard);

closeButtonImage.addEventListener("click", handleCloseImagePopup);
