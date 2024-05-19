


let strike = prompt("Введіть трьохзначне число")
console.log(strike[0], strike[1], strike[2]);
console.log(strike.split(''));
if (strike[0] === strike[1] && strike[1] === strike[2]) {
    console.log("Так, всі цифри однакові")
}
else if (strike[0] === strike[1] || strike[1] === strike[2] || strike[0] === strike[2]) {
    console.log("Так, 2 цифри однакові")
}
else{
    console.log("Ні, цифри неоднакові")
}