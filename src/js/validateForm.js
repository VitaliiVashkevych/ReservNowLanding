import {
  inputName,
  inputPhone,
  inputEmail,
  inputMessage,
  labelName,
  labelEmail,
  labelPhone,
  labelMessage,
  REG_EX_NAME,
} from "./consts.js";
import * as yup from "yup";

export function changeFormErrorText(lang) {
  const formErrorText = `form__error--text-${lang}`;

  const labels = [labelName, labelEmail, labelPhone, labelMessage];

  labels.forEach((label) => {
    label.classList.replace("form__error--text-UA", formErrorText);
    label.classList.replace("form__error--text-EN", formErrorText);
  });

  return formErrorText;
}

const schema = yup.object().shape({
  name: yup.string().trim().matches(REG_EX_NAME, "name").required(),
  email: yup.string().email().required(),
  phone: yup.string().length(19).required(),
  message: yup.string().required(),
});

export async function validateForm(data, lang) {
  try {
    await schema.validate(data, { abortEarly: false });

    return true;
  } catch (err) {
    addErrors(lang, err.errors);

    return false;
  }
}

export function addErrors(lang, errors) {
  const inputs = [];
  const labels = [];

  errors.forEach((error) => {
    const errorName = error.split(" ")[0];
    switch (errorName) {
      case "name":
        inputs.push(inputName);
        labels.push(labelName);
        break;
      case "email":
        inputs.push(inputEmail);
        labels.push(labelEmail);
        break;
      case "phone":
        inputs.push(inputPhone);
        labels.push(labelPhone);
        break;
      case "message":
        inputs.push(inputMessage);
        labels.push(labelMessage);
        break;
    }
  });

  const formErrorBorder = "form__error--border";
  const formErrorText = `form__error--text-${lang}`;

  inputs.forEach((input, index) => {
    input.classList.add(formErrorBorder);
    labels[index].classList.add(formErrorText);
  });
}

export function removeErrors(target) {
  const label = target.labels[0];

  target.classList.remove("form__error--border");
  label.classList.remove("form__error--text-UA");
  label.classList.remove("form__error--text-EN");
}
