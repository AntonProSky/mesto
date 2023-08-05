export class FormValidator{
  constructor(options, formElement) {
    this._options = options;
    this._formElement = formElement;
    this._formList = Array.from(
      this._formElement.querySelectorAll(this._options.inputSelector)
    );
    this._errorMessage = this._formElement.querySelector(this._options.inputErrorSelector);
    this._buttonSubmit = this._formElement.querySelector(this._options.buttonSelector);
  }

  enableValidation() {
    this._formElement.addEventListener('submit', event => event.preventDefault());
    this._setEventListeners();
  }

  _setEventListeners() {
    this._formList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState();
      });
    });
  }

  hideErrorForInput() {
    this._toggleButtonState();
    this._formList.forEach(inputElement => {
      this._inputElement = inputElement;
      this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      this._hideError();
    });
  }

  disabledButton() {
    this._buttonSubmit.setAttribute('disabled', 'true');
    this._buttonSubmit.classList.add(this._options.disabledButtonClass);
  }

  _hideError = (errorElement, inputErrorClass) => {
  errorElement.textContent = "";
  errorElement.classList.remove(inputErrorClass);
};

  _showError = (errorElement, message, inputErrorClass) => {
  errorElement.innerText = message;
  errorElement.classList.add(inputErrorClass);
};

_toggleInputState(inputElement,errorElement, inputErrorClass) {
  if (!inputElement.validity.valid) {
    this._hideError(inputElement, errorElement,inputErrorClass);
  } else {
    this._showError(inputElement, errorElement,inputErrorClass);
  }
};

_hasInvalidInput() {
  return this._formList.some(inputElement => {
    return !inputElement.validity.valid;
  });
}


_toggleButtonState (){
  if (this._hasInvalidInput()) {
    this._buttonSubmit.classList.add(this._options.disabledButtonClass);
    this._buttonSubmit.setAttribute('disabled', 'true');
  } else {
    this._buttonSubmit.classList.remove(this._options.disabledButtonClass);
    this._buttonSubmit.removeAttribute('disabled');
  }
};
}














