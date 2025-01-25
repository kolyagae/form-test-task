import { displayErrors, removeAllErrors } from "./errorHandler.js";
import { simulateServerValidation } from "./simulateServerValidation.js";
import { showSuccessMessage } from "./successMessage.js";

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const contactForm = event.target;
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  try {
    const responseData = await simulateServerValidation(data);

    if (responseData.status === "error") {
      displayErrors(responseData.fields);
    } else if (responseData.status === "success") {
      showSuccessMessage(responseData.msg);
      contactForm.reset();
      removeAllErrors();
    }
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
  }
};

export const initForm = () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }
};
