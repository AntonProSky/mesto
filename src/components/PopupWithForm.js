import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
      super(popupSelector);
      this._submitCallback = submitCallback;
      this._form = this._popup.querySelector('.popup__form');
      this._inputList = this._form.querySelectorAll('.popup__input');
      this._buttonSave = this._form.querySelector('.popup__save');
    }
    _getInputValues() {
      this._formValues = {};
      this._inputList.forEach(input => {
        this._formValues[input.name] = input.value;
      });
      return this._formValues;
    }
    
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', evt => {
        this._submitCallback(evt, this._getInputValues());
      });
    }

      close() {
        super.close();
        this._form.reset();
      }

      saveLoading(isLoading) {
        if (isLoading) {
          this._buttonSave .innerText = 'Сохранение...';
        } else {
          this._buttonSave .innerText = 'Сохранить';
        }
      }
    }