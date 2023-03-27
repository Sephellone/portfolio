const form = document.querySelector('#contacts-form');
const submitButton = document.querySelector('[type="submit"]');

const disableSubmitButton = () => {
  if (submitButton) {
    submitButton.disabled = true;
  };
};

const enableSubmitButton = () => {
  if (submitButton) {
    submitButton.disabled = false;
  }
};

const onSuccess = () => {
  form.reset();
  const successMessage = document.createElement("div");
  successMessage.classList.add('form__submit-message');
  successMessage.classList.add('success');
  successMessage.textContent = 'Сообщение отправлено';
  form.append(successMessage);
  setTimeout(() => {
    successMessage.remove();
    enableSubmitButton();
  }, 2000);
};

const onFail = () => {
  const failMessage = document.createElement("div");
  failMessage.classList.add('form__submit-message');
  failMessage.classList.add('fail');
  failMessage.textContent = 'Что-то пошло не так, попробуйте еще раз';
  form.append(failMessage);
  setTimeout(() => {
    enableSubmitButton();
    failMessage.remove();
  }, 2000);
};

const sendData = async (evt, body, successCb, failCb) => {
  try {
    const response = await fetch (
      evt.target.action,
      {
        method: form.method,
        body: body,
        headers: {
          'Accept': 'application/json'
        }
      },
    );

    if (response.ok) {
      successCb();
    }
  } catch (err) {
    failCb();
  }
};

const setFormSubmit = () => {
  if (form) {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      disableSubmitButton();
      const payload = new FormData(evt.target);

      sendData(evt, payload, onSuccess, onFail);
    });
  }
};

export {setFormSubmit};
