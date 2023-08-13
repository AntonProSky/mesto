
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
        const elementCard = document
          .querySelector(this._templateSelector)
          .content
          .querySelector(".elements__element")
          .cloneNode(true);
          if (!this._owner) {
            elementCard
              .querySelector('.elements__delete-button')
              .classList.remove('element__delete-button_active');
          }
        return elementCard;
      }

      generateCard() {
        this._elementCard = this._getTemplate();
        this._imageCard = this._elementCard.querySelector(".elements__mask-group");
        this._imageCard.src = this._link;
        this._imageCard.alt = this._title;
        this._usersLikes = this._elementCard.querySelector('.elements__likes-counter');
        this._usersLikes.textContent = this._likes;
        this._likeButton = this._elementCard.querySelector(".elements__button-like");
        if (this._isLiked) {
          this._likeButton.classList.add('elements__button-like_active');
        }
        this._elementCard.querySelector(".elements__title").textContent = this._title;
        this._setEventListeners();
    
        return this._elementCard;
      }

      _setEventListeners() {
        this._imageCard.addEventListener('click', () => {
          this._handleCardClick();
        });

        this._likeButton.addEventListener('click', evt => {
          this._handleLike(evt);
        });
        this._elementCard.querySelector(".elements__delete-button").addEventListener('click', () => {
          this._handleClickRemove(this);
        });
      }

      handleLike(evt) {
        evt.target.classList.toggle("elements__button-like_active");
        this._handleClickLike();
      }
      handleDelete() {
        this._elementCard.remove();
        this._elementCard = null;
      }

      setLikes(sumLikes) {
        this._likes = sumLikes;
        this._usersLikes.textContent = this._likes;
      }
    
      statusLikes() {
        this._isLiked = !this._isLiked;
      }
    }
  