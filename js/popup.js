const contactLink = document.querySelector(".contacts-button");
const contactPopup = document.querySelector(".modal-feedback");
const contactClose = contactPopup.querySelector(".modal-close");
const contactName = contactPopup.querySelector(".name");
const contactForm = contactPopup.querySelector(".feedback-form");
const contactEmail = contactPopup.querySelector(".email");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
  if (storage) {
    contactName.value = storage;
    contactEmail.focus();
  } else {
    contactName.focus();
  }
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
    }
  }
});
