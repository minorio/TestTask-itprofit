import '../styles/main.scss';

import { applyPhoneMask } from './maskPhone';
import { validateForm  } from './formValidation';
import { submitForm } from './formSubmit';


document.addEventListener('DOMContentLoaded', () => {
    applyPhoneMask();

    const form = document.querySelector('.form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); 
    
        if (validateForm(form)) {
            await submitForm(event);
        }
    });
});
