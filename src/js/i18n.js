import { translations } from "./translations.js";
import { I18n } from "i18n-js";
import { changeFormErrorText } from "./validateForm.js";

export const i18n = new I18n(translations);
i18n.defaultLocale = "UA";

const reverseDropdown = (lang) => {
  if (lang === "EN") {
    document
      .querySelector(".header__language-dropdown")
      .classList.add("header__language-dropdown--reverse");
  } else {
    document
      .querySelector(".header__language-dropdown")
      .classList.remove("header__language-dropdown--reverse");
  }
};

export const changeLanguage = (lang) => {
  i18n.locale = lang;
  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  const elements = document.querySelectorAll("[data-i18n]");
  const modal = document.querySelectorAll("[data-i18n-modal]");

  placeholders.forEach((element) => {
    element.placeholder = i18n.t(element.getAttribute("data-i18n-placeholder"));
  });

  elements.forEach((element) => {
    element.innerHTML = i18n.t(element.getAttribute("data-i18n"));
  });

  modal.forEach((element) => {
    element.innerHTML = i18n.t(element.getAttribute("data-i18n-modal"));
  });

  reverseDropdown(lang);
  changeFormErrorText(lang);
};
