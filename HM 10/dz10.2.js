

const listNumbers = [1, 22, 3, 22, 4, 5, 6, 77, 8, 9, 77];

const duplicateNumbers = listNumbers.filter((item, index, arr) => arr.indexOf(item) !== arr.lastIndexOf(item) && arr.indexOf(item) === index);

console.log(duplicateNumbers);