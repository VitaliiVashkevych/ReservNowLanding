const REG_EX_NAME =
  /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
const REG_EX_EMAIL =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const root = document.getElementById("root");

const inputName = document.getElementById("Name");
const inputPhone = document.getElementById("Phone");
const inputEmail = document.getElementById("Email");
const inputMessage = document.getElementById("Description");

const labelName = document.querySelector(".form__label-name");
const labelEmail = document.querySelector(".form__label-email");
const labelPhone = document.querySelector(".form__label-phone");
const labelMessage = document.querySelector(".form__label-description");

const submit = document.getElementById("submit");
const modalIcon = document.querySelector(".modal__icon");
const modalTitleSuccess = document.querySelector(".modal__title-success");
const modalTitleError = document.querySelector(".modal__title-error");
const modalTextSuccess = document.querySelector(".modal__text-success");
const modalTextError = document.querySelector(".modal__text-error");

const container = document.getElementById("modal-container");
const modal = document.querySelector(".modal");

const dropdown = document.getElementById("dropdown");

export {
  REG_EX_NAME,
  REG_EX_EMAIL,
  root,
  inputName,
  inputPhone,
  inputEmail,
  inputMessage,
  labelName,
  labelEmail,
  labelPhone,
  labelMessage,
  submit,
  modalIcon,
  modalTitleSuccess,
  modalTitleError,
  modalTextSuccess,
  modalTextError,
  container,
  modal,
  dropdown,
};
