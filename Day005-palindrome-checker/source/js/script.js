const checkButton = document.querySelector('.button')
let result = document.querySelector('.result');

checkButton.addEventListener('click', palindrome);

// Minha solução
// function palindrome() {
//     const inputText = document.querySelector('.input-text').value.toLowerCase();
//     console.log(inputText)
//     const myArray = inputText.split('');
//     const backwardArray = [];

//     for (let i = myArray.length; i >= 1; i--) {
//     backwardArray.push(myArray[i-1]);
//     };

//     let lastText = backwardArray.join('');

//     if (inputText === lastText) {
//     result.innerHTML = `${inputText.toUpperCase() is a Palindrome`
//     } else {
//     result.innerHTML = `${inputText.toUpperCase()} is not a palindrome'
//     };
// }

// Solução do professor
function palindrome() {
    const word = document.querySelector('.input-text').value;
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

    // let flip = end.split('').reverse().join('');
    let flip = [...end].reverse().join('');
    if (start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`
    } else {
        result.innerHTML = `${word.toUpperCase()} is not palindrome`
    }
}