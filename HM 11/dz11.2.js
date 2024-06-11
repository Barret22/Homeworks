


const textElement = document.querySelector('.textColor');
const button = document.querySelector('.buttonText');

let isOriginalColor = true;
const originalColor = 'green';
const newColor = 'red';

button.addEventListener('click', function() {
    if (isOriginalColor) {
        textElement.style.color = newColor;
    } else {
        textElement.style.color = originalColor;
    }
    isOriginalColor = !isOriginalColor;
});
