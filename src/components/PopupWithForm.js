import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
      super(popupSelector);
      this._submitCallback = submitCallback;
      this._form = this._popup.querySelector('.popup__form');
      this._inputList = this._form.querySelectorAll('.popup__input');
    }
    _getInputValues() {
        const data = {};
        this._inputList.forEach(element => {
          data[element.name] = element.value;
        });
        return data;
      }
    
      setEventListeners() {
        this._form.addEventListener('submit', evt => {
          evt.preventDefault();
          this._submitCallback(this._getInputValues());
          this._form.reset();
        });
        super.setEventListeners();
      }
      close() {
        super.close();
      }
}