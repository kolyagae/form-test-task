import IMask from "imask";
import { maskOptions } from "../constants/phoneMasks.js";

export const initPhoneMask = (inputId) => {
  const phoneInput = document.getElementById(inputId);

  if (!phoneInput) {
    console.error(`Элемент с ID "${inputId}" не найден.`);
    return;
  }

  IMask(phoneInput, {
    ...maskOptions,
    dispatch: (appended, dynamicMasked) => {
      const number = (dynamicMasked.value + appended).replace(/\D/g, "");
      return dynamicMasked.compiledMasks.find(
        (m) => number.indexOf(m.startsWith) === 0
      );
    },
  });
};
