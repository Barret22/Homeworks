

let accountsInfo = {
    contacts: [
        {firstName: 'Jon', email: 'jon@example.com', phone: '+38 234 567 890'},
        {firstName: 'Anna', email: 'anna@example.com', phone: '+38 234 652 893'},
        {firstName: 'Maks', email: 'maks@example.com', phone: '+38 234 664 754'},
        {firstName: 'Helen', email: 'helen@example.com', phone: '+38 234 908 231'},
    ],
    addContact: function (firstName, email, phone) {
        this.contacts.push({firstName, email, phone});
    },
    findContactByName: function (name) {
        return this.contacts.find(contact => contact.firstName.toLowerCase() === name.toLowerCase());
    }
};
accountsInfo.addContact('Bob', 'bob@example.com', '+38 234 987 654');
console.log('Новий контакт додано:');
console.log(accountsInfo.contacts);

let foundContact = accountsInfo.findContactByName('Anna');
console.log('Знайдено контакт:');
console.log(foundContact);


