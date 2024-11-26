import {
  modalTitleError,
  modalTextError,
  modalTitleSuccess,
  modalTextSuccess,
  inputEmail,
  inputPhone,
  inputName,
  inputMessage,
} from "./consts.js";

export function onSuccess() {
  modalTitleError.classList.add("modal__hide-text");
  modalTextError.classList.add("modal__hide-text");
  modalTitleSuccess.classList.remove("modal__hide-text");
  modalTextSuccess.classList.remove("modal__hide-text");

  inputEmail.value = "";
  inputPhone.value = "";
  inputName.value = "";
  inputMessage.value = "";
}
