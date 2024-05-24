

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let userInput = prompt("Введіть число:");
let number = parseInt(userInput);

if (isNaN(number)) {
    console.log("Введіть число.");
} else {
    if (isPrime(number)) {
        console.log(`${number} Так, просте число.`);
    } else {
        console.log(`${number} Ні, просте число.`);
    }
}