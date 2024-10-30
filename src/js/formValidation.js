export function validateForm(form) {
    let isValid = true;

    clearErrors(form);

    const nameInput = form.querySelector('.form__input--name');
    if (!nameInput.value.trim()) {
        showError(nameInput, 'Пожалуйста, введите ваше имя');
        isValid = false;
    } else if (nameInput.value.length < 6 || nameInput.value.length > 30) {
        showError(nameInput, 'Имя должно содержать от 6 до 30 символов');
        isValid = false;
    }

    const emailInput = form.querySelector('.form__input--email');
    if (!emailInput.value.trim()) {
        showError(emailInput, 'Пожалуйста, введите ваш email');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Введите корректный email');
        isValid = false;
    }

    const phoneInput = form.querySelector('.form__input--phone');
    const phoneNumberDigits = phoneInput.value.replace(/\D/g, '');
    
    if (!phoneNumberDigits) {
        showError(phoneInput, 'Пожалуйста, введите ваш номер телефона');
        isValid = false;
    } else if (phoneNumberDigits.length < 12) { 
        showError(phoneInput, 'Номер телефона должен быть полным');
        isValid = false;
    }


    const messageInput = form.querySelector('.form__textarea');
    if (!messageInput.value.trim()) {
        showError(messageInput, 'Пожалуйста, напишите ваше сообщение');
        isValid = false;
    }
    else if (messageInput.value.length < 10 || messageInput.value.length > 500) {
        showError(messageInput, 'Сообщение должно содержать от 10 до 500 символов');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showError(input, message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('form__error');
    errorElement.innerText = message;
    input.classList.add('form__input--error');

    const fieldContainer = input.closest('.form__field');
    fieldContainer.prepend(errorElement);
}

function clearErrors(form) {
    const errorMessages = form.querySelectorAll('.form__error');
    errorMessages.forEach(error => error.remove());

    const errorInputs = form.querySelectorAll('.form__input--error');
    errorInputs.forEach(input => input.classList.remove('form__input--error'));
}
