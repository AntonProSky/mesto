import {initialCards} from './constants.js';
import {gridElement} from './utils.js';



export class Card {
    constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const elementCard = document
          .querySelector(this._templateSelector)
          .content.querySelector(".elements__element")
          .cloneNode(true);
    
        return elementCard;
      }

      generateCard() {
        this._elementCard = this._getTemplate();
    
        this._gridElement = this._elementCard.querySelector(".elements");
        this._imageCard = this._elementCard.querySelector(".elements__mask-group");
        this._imageCard.src = this._link;
        this._imageCard.alt = this._name;
        this._titleCard = this._elementCard.querySelector(".elements__title");
        this._titleCard.textContent = this._name;
        this._likeButton = this._elementCard.querySelector(".elements__button-like");
        this._deleteButton = this._elementCard.querySelector(".elements__delete-button");
        
    
        this._setEventListeners();
    
        return this._elementCard;
      }

      _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
          this._handleLike();
        });
        this._deleteButton.addEventListener('click', () => {
          this._handleDelete();
        });
      }

      _handleLike() {
        this._likeButton.classList.toggle("elements__button-like_active");
      }
      _handleDelete() {
        this._elementCard.remove();
      }
    }
  
function createCard (item) {
        const card = new Card(item, '.template');
        const cardElement = card.generateCard();
        return cardElement;
      }

      initialCards.forEach(item => {
        const cardElement = createCard(item);
        gridElement.prepend(cardElement);
      });