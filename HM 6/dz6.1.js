

function removeCharacters(str, charsToRemove) {
    let regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    return str.replace(regex, '');
}
let inputString = prompt("Введіть символи");
let charsInput = prompt("Введіть символи для видалення");
let charsToRemove = charsInput.split(',').map(char => char.trim());
let resultString = removeCharacters(inputString, charsToRemove);
console.log(resultString);
