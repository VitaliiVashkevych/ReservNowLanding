import { dropdown } from "./consts.js";
import { changeLanguage } from "./i18n.js";

export function activeDropdown(event) {
  if (dropdown.classList.contains("dropdown__active")) {
    dropdown.classList.remove("dropdown__active");
  } else {
    dropdown.classList.add("dropdown__active");
  }

  if (event.target.id === "languageUA") {
    changeLanguage("UA");
  }
  if (event.target.id === "languageEN") {
    changeLanguage("EN");
  }
}
