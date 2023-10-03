const body = document.body;

// imprint modal
const imprintButton = document.querySelector("#legal a:first-child");
const imprintModal = document.querySelector("#modal-imprint");
const imprintClose = document.querySelector("#close-imprint");

imprintButton.addEventListener("click", () => {
  imprintModal.style.display = "block";
  body.style.overflow = "hidden";
});

imprintClose.addEventListener("click", () => {
  imprintModal.style.display = "none";
  body.style.overflow = "auto";
});

// close modal window on click outside of it
window.addEventListener("click", (event) => {
  if (event.target === imprintModal) {
    imprintModal.style.display = "none";
    body.style.overflow = "auto";
  }
});

// privacy modal
const privacyButton = document.querySelector("#legal a:last-child");
const privacyModal = document.querySelector("#modal-privacy");
const privacyClose = document.querySelector("#close-privacy");

privacyButton.addEventListener("click", () => {
  privacyModal.style.display = "block";
  body.style.overflow = "hidden";
});

privacyClose.addEventListener("click", () => {
  privacyModal.style.display = "none";
  body.style.overflow = "auto";
});

// close modal window on click outside of it
window.addEventListener("click", (event) => {
  if (event.target === privacyModal) {
    privacyModal.style.display = "none";
    body.style.overflow = "auto";
  }
});
