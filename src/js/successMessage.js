export const showSuccessMessage = (message) => {
  const successMessageBlock = document.getElementById("success-message");
  successMessageBlock.innerText = message;
};
