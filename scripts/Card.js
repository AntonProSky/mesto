import { openPopup,popupImage } from "./index.js";



export class Card  {
constructor(name,link,template){
this.template = document.querySelector(template).content.querySelector(".elements__element");
this.name = name;
this.link = link;
this.containerImage = document.querySelector(".popup__image");
this.titleImage = document.querySelector("#popup__title");
};
  
createCard() {
    const elementCard = this.template.cloneNode(true);
    const _imageCard = elementCard.querySelector(".elements__mask-group");
    const _titleCard = elementCard.querySelector(".elements__title");

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
      this.containerImage.src = _imageCard.src;
      this.containerImage.alt = _titleCard.textContent;
      this.titleImage.textContent = _titleCard.textContent;
      openPopup(popupImage);
    };
  
    likeButton.addEventListener("click", handleLike);
    deleteButton.addEventListener("click", handleDelete);
    _imageCard.addEventListener("click", handleClickImagePopup);
  
    _titleCard.textContent = this.name;
    _imageCard.src = this.link;
    _imageCard.alt = this.name;
  
    return elementCard;
  };
};