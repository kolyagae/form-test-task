import IMask from "imask";
import { maskOptions } from "../constants/phoneMasks.js";

const validateName = (name) => {
  const trimmedName = name.trim();

  if (!trimmedName) return "Введите ваше имя";
  const nameLength = trimmedName.length;

  if (nameLength < 2) {
    return "Имя должно быть не менее 2 символов";
  }

  if (nameLength > 14) {
    return "Имя должно быть не более 14 символов";
  }

  return null;
};

const validateEmail = (email) => {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) return "Введите ваш e-mail";
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!emailRegex.test(trimmedEmail)) {
    return "Введите корректный e-mail";
  }

  return null;
};

const validatePhone = (phone) => {
  const trimmedPhone = phone.trim();

  if (!trimmedPhone) {
    return "Введите номер телефона";
  }

  const sanitizedPhone = phone.replace(/\D/g, "");
  let matchedMask = null;

  for (const maskOption of maskOptions.mask) {
    const mask = IMask.createMask({ mask: maskOption.mask });
    mask.resolve(phone);

    if (
      sanitizedPhone.startsWith(maskOption.startsWith) &&
      phone.length === mask.mask.length
    ) {
      matchedMask = maskOption;
      break;
    }
  }

  if (!matchedMask) {
    return "Введите корректный номер телефона";
  }

  return null;
};

const validateMessage = (message = "") => {
  const trimmedMessage = message.trim();
  if (!trimmedMessage) return "Введите сообщение";

  return null;
};

export const validateForm = (form) => {
  const errors = {};

  const nameError = validateName(form.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(form.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(form.phone);
  if (phoneError) errors.phone = phoneError;

  const messageError = validateMessage(form.message);
  if (messageError) errors.message = messageError;

  return errors;
};
