import "../scss/main.scss";
import { initPhoneMask } from "./initPhoneMask.js";
import { initModal } from "./modal.js";
import { initForm } from "./formHandler.js";

const initApp = () => {
  initForm();
  initPhoneMask("phone");
  initModal();
};

initApp();
