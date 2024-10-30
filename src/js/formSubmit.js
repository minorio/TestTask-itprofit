import { showModal } from './modal';


export async function submitForm(form) {
    const formData = {
        name: form.target.elements.name.value,
        email: form.target.elements.email.value,
        phone: form.target.elements.phone.value,
        message: form.target.elements.message.value,
    }

    try {
        const response = await fetch("http://localhost:9090/api/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.status === "success") {
            showModal(result.message);
            document.querySelector(".form").reset();
        } else if (result.status === "error") {
            showModal(result.message);  
        }
    } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        showModal("Произошла ошибка отправки");
    }
}
