import { changeLanguage } from "./i18n.js";
import IMask from "imask";
import { removeErrors } from "./validateForm.js";
import { closeModal } from "./closeModal.js";
import { activeDropdown } from "./styleDropdown.js";
import { handleSubmit } from "./submit.js";

import {
  inputPhone,
  inputEmail,
  inputName,
  inputMessage,
  modal,
  dropdown,
  submit,
} from "./consts.js";

changeLanguage("UA");

const phoneMask = IMask(inputPhone, {
  mask: "+{38\\0} (00) 000 00 00",
  lazy: true,
});

submit.addEventListener("click", handleSubmit);

modal.addEventListener("click", closeModal);

dropdown.addEventListener("click", activeDropdown);

inputName.addEventListener("focus", (e) => {
  removeErrors(e.target);
});
inputEmail.addEventListener("focus", (e) => {
  removeErrors(e.target);
});
inputMessage.addEventListener("focus", (e) => {
  removeErrors(e.target);
});
inputPhone.addEventListener("focus", (e) => {
  removeErrors(e.target);
  phoneMask.updateOptions({
    lazy: false,
  });
});
inputPhone.addEventListener("blur", () => {
  phoneMask.updateOptions({
    lazy: true,
  });
});
