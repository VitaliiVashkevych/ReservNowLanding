import { container, root } from "./consts.js";

export function closeModal() {
  container.classList.remove("modal-container-active");
  container.classList.add("modal-container-inactive");
  root.classList.remove("modal-active");
}
