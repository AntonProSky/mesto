
export class Card {
    constructor({data, handleCardClick, handleClickLike,handleClickRemove, userId}, templateSelector) {
      this.id = data._id;
      this._title = data.name;
      this._link = data.link;
      this._owner = data.owner._id === userId;
      this._likes = data.likes.length;
      this._arrayLikes = data.likes;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._handleClickLike = handleClickLike;
      this._handleClickRemove = handleClickRemove;

      this._isLiked = false;
    data.likes.forEach(obj => {
      if (obj._id === userId) {
        this._isLiked = true;
      }
    });
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector(".elements__element")
          .cloneNode(true);
          if (!this._owner) {
            cardElement
              .querySelector('.elements__delete-button')
              .classList.remove('element__delete-button_active');
          }
        return cardElement;
      }

      generateCard() {
        this._element = this._getTemplate();
        this._imageCard = this._element.querySelector(".elements__mask-group");
        this._imageCard.src = this._link;
        this._imageCard.alt = this._title;
        this._element.querySelector(".elements__title").textContent = this._title;
        this._usersLikes = this._element.querySelector('.elements__likes-counter');
        this._usersLikes.textContent = this._likes;
        this._likeButton = this._element.querySelector(".elements__button-like");
        if (this._isLiked) {
          this._likeButton.classList.add('elements__button-like_active');
        }
        this._setEventListeners();
    
        return this._element;
      }

      _setEventListeners() {
        this._imageCard.addEventListener('click', () => {
          this._handleCardClick();
        });

        this._likeButton.addEventListener('click', evt => {
          this._handleClickLike(evt);
        });
        this._element.querySelector(".elements__delete-button").addEventListener('click', () => {
          this._handleClickRemove(this);
        });
      }

      _handleLike(evt) {
        evt.target.classList.toggle("elements__button-like_active");
        this._handleClickLike();
      }
      handleDelete() {
        this._element.remove();
        this._element = null;
      }

      setLikes(sumLikes) {
        this._likes = sumLikes;
        this._usersLikes.textContent = this._likes;
      }
    
      statusLikes() {
        this._isLiked = !this._isLiked;
      }
    }
  