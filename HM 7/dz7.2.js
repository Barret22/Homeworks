

function multiply(a) {
    return function(b) {
        return a * b;
    };
}
const result = multiply(15)(10);
console.log(result);
