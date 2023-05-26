const templateCard = document.getElementById("template-card");
const gridElement = document.querySelector(".elements");

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

  const handleClickImagePopup = () => {
    containerImage.src = imageCard.src;
    containerImage.alt = titleCard.textContent
    titleImage.textContent = titleCard.textContent;
  };

  const handleOpenImagePopup = () =>{
    popupImage.classList.add("popup_opened");
  }

  likeButton.addEventListener("click", handleLike);
  deleteButton.addEventListener("click", handleDelete);
  imageCard.addEventListener("click", handleClickImagePopup);
  imageCard.addEventListener("click",handleOpenImagePopup)

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

formAddCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = { name: titleInput.value, link: imageInput.value };
    renderCard(gridElement, data);
  
  titleInput.value = "";
  imageInput.value = "";

  handleClosePopupCard();
});

// открытие, закрытие и отправка формы попапа профиля
const handleOpenPopup = () => {
  popupProfile.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

const handleClosePopup = () => {
  popupProfile.classList.remove("popup_opened");
};
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  handleClosePopup();
}

// открытие, закрытие и отправка формы попапа добавления карточек
const handleOpenPopupCard = () => {
  popupCard.classList.add("popup_opened");
};

const handleClosePopupCard = () => {
  popupCard.classList.remove("popup_opened");
};

const handleOpenImagePopup = () =>{
  popupImage.classList.add("popup_opened");
}

const handleCloseImagePopup = () => {
  popupImage.classList.remove("popup_opened");
};

formChangeProfile.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", handleOpenPopup);
closeButtonProfile.addEventListener("click", handleClosePopup);

addButton.addEventListener("click", handleOpenPopupCard);
closeButtonCard.addEventListener("click", handleClosePopupCard);

closeButtonImage.addEventListener("click", handleCloseImagePopup);
