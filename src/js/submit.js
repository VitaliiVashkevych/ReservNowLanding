import { i18n } from "./i18n.js";
import { validateForm } from "./validateForm.js";
import { onError } from "./onError.js";
import { onSuccess } from "./onSuccess.js";

import { inputName, inputPhone, inputEmail, inputMessage } from "./consts.js";
import { activeModal } from "./activeModal.js";

export async function handleSubmit(event) {
  event.preventDefault();

  const data = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    message: inputMessage.value,
  };

  const response = await validateForm(data, i18n.locale);

  if (response) {
    const randomResult = Math.random() > 0.5 ? "success" : "error";
    activeModal(randomResult);

    if (randomResult === "success") {
      onSuccess();
    } else {
      onError();
    }
  }
}
