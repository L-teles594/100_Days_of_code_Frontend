
// Generating a random number between 0 and 1000000
const multiplier = [10, 100, 1000, 10000, 100000, 100000];

// getting teh elements from the DOM
const buttonGenerate = document.querySelector(".generate-number");
const counter = document.querySelector('.count');

buttonGenerate.addEventListener('click', () => {
    const choosen = multiplier[Math.floor(Math.random() * 5)];
    const randomNumber = Math.floor(Math.random() * choosen + 1);
    counter.innerHTML = randomNumber;
});

