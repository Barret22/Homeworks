

let company = {
    sales: [{name: 'John', salary: 1000},{name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 3000}, {name: 'Bred', salary: 2800}],
        salesProduction: {
            managers: [{name: 'Sofia', salary: 2200}, {name: 'Natalie', salary: 2100}],
            logistics: [{name: 'Albert', salary: 3200}],
            support: [{name: 'Silva', salary: 3800}],
        }
    }

};

function sumSalaries(department) {
    let total = 0;
    for (let key in department) {
        let value = department[key];
        if (Array.isArray(value)) {
            for (let employee of value) {
                total += employee.salary;
            }
        } else if (typeof value === 'object') {
            total += sumSalaries(value);
        }
    }
    return total;
}
console.log(sumSalaries(company));