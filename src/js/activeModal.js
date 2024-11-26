import { container, modalIcon, root } from "./consts.js";

export function activeModal(result) {
  root.classList.add("modal-active");
  modalIcon.classList.remove("modal__icon-success", "modal__icon-error");
  modalIcon.classList.add(`modal__icon-${result}`);

  container.classList.remove("modal-container-inactive");
  container.classList.add("modal-container-active");
}
