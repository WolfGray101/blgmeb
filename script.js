const modalCb = document.querySelector(".modal-cb");
const cbOpenBtn = document.querySelectorAll(".cb-open");
const menuBtn = document.querySelectorAll(".burger-menu");
const cbClose = document.querySelector(".close");
const openModal = document.querySelectorAll(".modal-container");
const modalMenu = document.querySelector(".modal-menu");
const submitBtn = document.querySelector(".btn-submit-form");
const successSubmit = document.querySelector(".success-submit");
const formBody = document.querySelector(".form-body");







submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formBody.classList.add("dn-form");
  successSubmit.hidden = false;

  setTimeout(() => {
    for (let el of openModal) el.classList.remove("open");
    formBody.classList.remove("dn-form");
    successSubmit.hidden = true;
  }, 1000);
});


for (let el of cbOpenBtn) {
  el.addEventListener("click", () => {
    modalCb.classList.add("open");
  });
}

for (let el of menuBtn) {
  el.addEventListener("click", () => {
    modalMenu.classList.toggle("open");
  });
}
cbClose.addEventListener("click", () => {
  for (let el of openModal) el.classList.remove("open");
});
