import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._popupImagePhoto = this._popup.querySelector('.popup__image');
      this._popupImageTitle = this._popup.querySelector('#popup__title');
    }

    open = (name, link) => {
        this._popupImagePhoto.src = link;
        this._popupImagePhoto.alt = name;
        this._popupImageTitle.textContent = name;
        super.open();
      };
    
}