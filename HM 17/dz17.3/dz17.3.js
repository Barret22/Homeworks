class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            return "Сума депозиту повинна бути більше нуля.";
        }
        this.balance += amount;
        return `Внесено: ${amount}. Новий баланс: $${this.balance.toFixed(2)}`;
    }
    withdraw(amount) {
        if (amount <= 0) {
            return "Сума для зняття повинна бути більше нуля.";
        }
        if (amount > this.balance) {
            return "Недостатній баланс.";
        }
        this.balance -= amount;
        return `Знято з рахунку: ${amount}. Новий баланс: $${this.balance.toFixed(2)}`;
    }
    getBalance() {
        return this.balance.toFixed(2);
    }
}
const myAccount = new BankAccount(0);
function updateBalance() {
    document.getElementById('balance').innerText = myAccount.getBalance();
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    setTimeout(() => messageDiv.innerText = '', 3000);
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const message = myAccount.deposit(amount);
    updateBalance();
    showMessage(message);
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    const message = myAccount.withdraw(amount);
    updateBalance();
    showMessage(message);
}

document.addEventListener('DOMContentLoaded', updateBalance);


