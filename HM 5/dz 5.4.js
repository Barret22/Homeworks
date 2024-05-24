

// Функція для перевірки, чи є число простим
function isPrime(num) {
    // Просте число має бути більше 1
    if (num <= 1) {
        return false;
    }
    // Перевіряємо дільники до квадратного кореня числа
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Запитуємо користувача ввести ціле число
let userInput = prompt("Введіть ціле число:");
let number = parseInt(userInput);

// Перевіряємо, чи введене значення є числом
if (isNaN(number)) {
    console.log("Будь ласка, введіть правильне ціле число.");
} else {
    // Викликаємо функцію для перевірки, чи є число простим
    if (isPrime(number)) {
        console.log(`${number} є простим числом.`);
    } else {
        console.log(`${number} не є простим числом.`);
    }
}