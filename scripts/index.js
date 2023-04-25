const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const saveButton = document.querySelector('.popup__save')

const handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent ;
}

const handleCloseButtonClick = () => {
    popup.classList.remove('popup_opened')
}
const handleSaveButtonClick = () => {
    popup.classList.remove('popup_opened')
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value ;
    jobProfile.textContent = jobInput.value ;
}

formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', handleEditButtonClick );
closeButton.addEventListener('click', handleCloseButtonClick );
saveButton.addEventListener('click', handleSaveButtonClick);