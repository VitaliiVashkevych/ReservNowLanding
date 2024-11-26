import {
  modalTextError,
  modalTextSuccess,
  modalTitleError,
  modalTitleSuccess,
} from "./consts.js";

export function onError() {
  modalTitleSuccess.classList.add("modal__hide-text");
  modalTextSuccess.classList.add("modal__hide-text");
  modalTitleError.classList.remove("modal__hide-text");
  modalTextError.classList.remove("modal__hide-text");
}
