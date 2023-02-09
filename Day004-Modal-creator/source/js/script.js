const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal-button');
const closeModal = document.querySelector('.close-button');

modalButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

modal.addEventListener('click', () => {
    modal.style.display = 'none'
})