

document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById('multiplicationTable');
    for (let i = 7; i <= 16; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            const td = document.createElement('td');
            td.textContent = `${j} × ${i} = ${j * i}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});
