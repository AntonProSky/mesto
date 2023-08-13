import { Popup } from './Popup.js';

export class PopupDelete extends Popup {
  constructor(popupSelector, handleCardClick) {
    super(popupSelector);
    this._saveButton = this._popup.querySelector('.popup__save');
    this._handleCardClick = handleCardClick;
  }

  open(card) {
    this._card = card;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._saveButton.addEventListener('click', evt => {
      this._handleCardClick(evt, this._card);
    });
  }
}
