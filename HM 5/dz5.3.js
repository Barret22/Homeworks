

let userInput = prompt("Введіть число");
let N = parseInt(userInput);
if (isNaN(N)) {
    console.log("Введіть число");
} else {
    console.log(` ${N}`);
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        } else {
            break;
        }
    }
}
