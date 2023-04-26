const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

const handleOpenPopup = () => {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent ;
}

const handleClosePopup = () => {
    popup.classList.remove('popup_opened');
}
function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value ;
    jobProfile.textContent = jobInput.value ;
    handleClosePopup();
   
}

formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', handleOpenPopup );
closeButton.addEventListener('click', handleClosePopup );