const text = 'madam'
const myArray = text.split('')
const backwardArray = []

for (let i = myArray.length; i >= 1; i--) {
    console.log(i);
    backwardArray.push(myArray[i-1])
    console.log(backwardArray)
 }

 let lastText = backwardArray.join('')

 if (text === lastText) {
    console.log('Palindromo')
 } else {
    console.log('Não é palindromo')
 }