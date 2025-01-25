const showModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
};

const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
};

export const initModal = () => {
  const openModalButton = document.getElementById("openModal");
  openModalButton.addEventListener("click", showModal);

  const closeModalButton = document.getElementById("closeModal");
  closeModalButton.addEventListener("click", closeModal);
};
