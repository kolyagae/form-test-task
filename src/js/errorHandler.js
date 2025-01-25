export const removeAllErrors = () => {
  const errorLabelList = document.querySelectorAll(".error-message");

  errorLabelList.forEach((errorLabel) => {
    errorLabel.previousElementSibling.classList.remove("input-error");
    errorLabel.textContent = "";
  });
};

export const removeResolvedErrors = (errors) => {
  const errorLabelList = document.querySelectorAll(".error-message");

  errorLabelList.forEach((errorLabel) => {
    const input = errorLabel.previousElementSibling;

    if (input && !errors[input.id]) {
      input.classList.remove("input-error");
      errorLabel.textContent = "";
    }
  });
};

export const displayErrors = (errors) => {
  for (const [field, message] of Object.entries(errors)) {
    removeResolvedErrors(errors);

    const input = document.getElementById(field);

    if (input) {
      const errorLabel = input.nextElementSibling;
      errorLabel.textContent = message;
      input.classList.add("input-error");
    }
  }
};
