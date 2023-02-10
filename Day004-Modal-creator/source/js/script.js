const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal-button');
const closeButton = document.querySelector('.close-button');
const modalContent = document.querySelector('.modal-content');

modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)
closeButton.addEventListener('click',closeModal )

function closeModal () {
    modalContent.classList.add('slide-up');
    setTimeout(() => {
        modal.style.display = 'none';
        modalContent.classList.remove('slide-up');
    }, 500);
}


function openModal (e) {
    e.preventDefault();
    modal.style.display = 'block';
}