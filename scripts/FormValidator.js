export class FormValidator{
  constructor(validators,form){
    this.validators = validators;
    this.form = form;
    this.formList = Array.from(document.querySelector(this.validators.inputSelector));
    this.buttonElement = this.form.querySelector(this.validators.buttonSelector);
  }

  enableValidation(){
    this.form.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListener();
  
  };

  disabledButton () {
    this.buttonElement.setAttribute("disabled", "true");
    this.buttonElement.classList.add(disabledButtonClass);
  };

  enableButton() {
    this.buttonSubmit.removeAttribute("disabled");
    this.buttonSubmit.classList.remove(disabledButtonClass);
  };

  _setEventListener() {

    this.formList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState();
      });
    });
  };

  toggleInputState (inputElement) {
    if (isValid) {
     this._hiddenError(inputElement);
    } else {
      this._showError(inputElement,inputElement.validationMessage);
    }
  };

 toggleButtonState = (buttonSubmit) => {
    if (formIsValid) {
      this.enableButton(buttonSubmit, disabledButtonClass);
    } else {
      this.disabledButton(buttonSubmit, disabledButtonClass);
    }
  };

  _hiddenError (errorElement) {
    errorElement.textContent = "";
    errorElement.classList.remove(this.validators.inputErrorClass);
  };
  
  _showError = (errorElement, message) => {
    errorElement.innerText = message;
    errorElement.classList.add(this.validators.inputErrorClass);
  };
  
  
  
  hiddenErrorForInput(inputElement, options) {
    const {inputSectionSelector, inputErrorSelector, inputErrorClass} = options;
    const inputSectionElement = inputElement.closest(inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(inputErrorSelector);
    hiddenError(errorElement,inputErrorClass);
  }
  
  
  

  
 
  
  
   
}






