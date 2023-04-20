const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

const toggleOpenPopup = () => {
    popup.classList.toggle('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent ;
}

const handleEditButtonClick = () => {
    toggleOpenPopup();
}

const handleCloseButtonClick = () => {
    toggleOpenPopup();
}

const handleOverlayClick = () => {
    if (event.target === event.currentTarget) {
        toggleOpenPopup();
    }
    
}

editButton.addEventListener('click', handleEditButtonClick );
closeButton.addEventListener('click', handleCloseButtonClick );
popup.addEventListener('click',handleOverlayClick );


const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const saveButton = document.querySelector('.popup__save');

function handleFormSubmit (evt) {
    evt.preventDefault();
nameProfile.textContent = nameInput.value ;
jobProfile.textContent = jobInput.value ;
popup.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);
saveButton.addEventListener('click', handleFormSubmit);