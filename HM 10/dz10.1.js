

const account = {
    firstName: 'John',
    lastName: 'Doe',
    age: '25',
    cityLive: 'Lviv',
    phone: '+38746465132',
    email: 'john@doe.com',
    accountInfo() {
        return `Name: ${this.firstName} ${this.lastName}\nAge: ${this.age}\nCity: ${this.cityLive}\nPhone: ${this.phone}\nEmail: ${this.email}`;
    }
};
console.log(account.accountInfo());
