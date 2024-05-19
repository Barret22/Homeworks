


let uzerYears = prompt("Скільки тобі років?");
if (uzerYears) {
    alert(uzerYears);
}
else {
    alert(
        "Шкода, що не вказав свій вік"
    )
}
let uzerCity = prompt("В якому місті ти живеш?");
if (!uzerCity) {
    alert("Шкода, що не захотіли вказати місце проживання!");
}
else {
    alert(`Ти живеш у місті ${uzerCity}.`)
}