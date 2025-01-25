import { validateForm } from "./validation.js";

export const simulateServerValidation = (data) => {
  return new Promise((resolve) => {
    const errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      resolve({
        status: "error",
        fields: errors,
      });
    } else {
      resolve({
        status: "success",
        msg: "Ваша заявка успешно отправлена",
      });
    }
  });
};
