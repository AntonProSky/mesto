export class FormValidator{
  constructor(options, formElement) {
    this._options = options;
    this._formElement = formElement;
    this._inputList = Array.from(
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
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        this._toggleInputState(inputElement,errorElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidationState() {
    this._toggleButtonState();
    this._inputList.forEach(inputElement => {
      const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
      this._hideError(errorElement);
    });
  };

  disabledButton() {
    this._buttonSubmit.setAttribute('disabled', 'true');
    this._buttonSubmit.classList.add(this._options.disabledButtonClass);
  };


  _hideError = (errorElement) => {
  errorElement.textContent = "";
  errorElement.classList.remove(this._options.inputErrorClass);
};

  _showError = (errorElement, message) => {
  errorElement.innerText = message;
  errorElement.classList.add(this._options.inputErrorClass);
};

_toggleInputState(inputElement,errorElement) {
  if (inputElement.validity.valid) {
    this._hideError(errorElement);
  } else {
    this._showError(errorElement, inputElement.validationMessage);
  }
};

_hasInvalidInput() {
  return this._inputList.some(inputElement => {
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














