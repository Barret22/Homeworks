

function createSum() {
    let total = 7;
    return function(value) {
        total += value;
        return total;
    };
}
const sum = createSum();

console.log(sum(5));
console.log(sum(8));
console.log(sum(11));
console.log(sum(27));
