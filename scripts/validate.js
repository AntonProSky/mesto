const hiddenError = (errorElement, inputErrorClass) => {
  errorElement.textContent = "";
  errorElement.classList.remove(inputErrorClass);
};

const showError = (errorElement, message, inputErrorClass) => {
  errorElement.innerText = message;
  errorElement.classList.add(inputErrorClass);
};

const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  const inputSectionElement = inputElement.closest( options.inputSectionSelector);
  const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);
  if (isValid) {
    hiddenError(errorElement, options.inputErrorClass);
  } else {
    showError(errorElement,inputElement.validationMessage,options.inputErrorClass);
  }
};

const hiddenErrorForInput = (inputElement,inputErrorClass) => {
  const inputSectionElement = inputElement.closest( options.inputSectionSelector);
  const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);
  hiddenError(errorElement,inputErrorClass);
}

const enableButton = (buttonSubmit, disabledButtonClass) => {
  buttonSubmit.removeAttribute("disabled");
  buttonSubmit.classList.remove(disabledButtonClass);
};

const disabledButton = (buttonSubmit, disabledButtonClass) => {
  buttonSubmit.setAttribute("disabled", "true");
  buttonSubmit.classList.add(disabledButtonClass);
};

const toggleButtonState = (inputs, buttonSubmit, disabledButtonClass) => {
  const formIsValid = inputs.every(
    (inputElement) => inputElement.validity.valid
  );

  if (formIsValid) {
    enableButton(buttonSubmit, disabledButtonClass);
  } else {
    disabledButton(buttonSubmit, disabledButtonClass);
  }
};

const setEventListener = (form, options) => {
  const buttonSubmit = form.querySelector(options.buttonSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));

  inputs.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      toggleInputState(inputElement, options);
      toggleButtonState(inputs, buttonSubmit, options.disabledButtonClass);
    });
  });

  toggleButtonState(inputs, buttonSubmit, options.disabledButtonClass);
};

const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach((form) => {
    setEventListener(form, options);
  });
};



