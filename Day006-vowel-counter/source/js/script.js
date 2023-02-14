const word = document.querySelector('.input-text'), 
    checkButton = document.querySelector('.check-button'), 
    result = document.querySelector('.result');

checkButton.addEventListener('click', countVowels);


function countVowels() {
    let vowelCount = 0;
    let wordValue = word.value.toLocaleLowerCase();

    for (let i = 0; i < wordValue.length; i++) {
        let letter = wordValue[i]

        if(letter.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }

    result.innerHTML = `The word ${wordValue} has ${vowelCount} vowels`
}