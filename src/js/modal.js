export function showModal(message) {
    const modal = document.getElementById('responseModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.style.display = 'block';

    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
