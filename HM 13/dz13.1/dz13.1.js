document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Очищаємо повідомлення про помилки
    clearErrors();

    // Об'єкт для зберігання стану валідації полів
    const validationStatus = {
        name: validateName(),
        message: validateMessage(),
        phone: validatePhone(),
        email: validateEmail()
    };

    // Перевіряємо, чи всі поля валідні
    const isValid = Object.values(validationStatus).every(status => status);

    // Якщо всі поля валідні, вивести дані в консоль
    if (isValid) {
        const formData = {
            name: document.getElementById('name').value,
            message: document.getElementById('message').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        };
        console.log(formData);
    }
});

function clearErrors() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('emailError').innerText = '';
}

function validateName() {
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        return false;
    }
    return true;
}

function validateMessage() {
    const message = document.getElementById('message').value;
    if (message.trim().length < 5) {
        document.getElementById('messageError').innerText = 'Message must be at least 5 characters long';
        return false;
    }
    return true;
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must start with +380 and be 12 digits long';
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Email must contain @ and a dot';
        return false;
    }
    return true;
}
