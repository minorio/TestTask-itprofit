import IMask from 'imask';

export function applyPhoneMask() {
    const phoneInput = document.querySelector('.form__input--phone');

    if (phoneInput) {
        IMask(phoneInput, {
            mask: '+{375} (00) 000-00-00' 
        });
    }
}