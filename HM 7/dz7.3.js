

function askNumber() {
    let input;
    let iterations = 0;
    while (iterations < 10) {
        input = prompt("Введіть число більше 100:");
        if (input === null) {
            console.log("Ви скасували ввід.");
            return;
        }
        input = Number(input);
        if (input > 100) {
            console.log(`Останнє введене число: ${input}`);
            return;
        }
        iterations++;
    }
    console.log(`Останнє введене число: ${input}`);
}
askNumber();
