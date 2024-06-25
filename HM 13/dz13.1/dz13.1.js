

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Очищаємо повідомлення про помилки
    document.getElementById('nameError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('emailError').innerText = '';

    let isValid = true;

    // Перевірка Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    }

    // Перевірка Message
    const message = document.getElementById('message').value;
    if (message.trim().length < 5) {
        document.getElementById('messageError').innerText = 'Message must be at least 5 characters long';
        isValid = false;
    }

    // Перевірка Phone number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must start with +380 and be 12 digits long';
        isValid = false;
    }

    // Перевірка Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Email must contain @ and a dot';
        isValid = false;
    }

    // Якщо всі поля валідні, вивести дані в консоль
    if (isValid) {
        const formData = {
            name: name,
            message: message,
            phone: phone,
            email: email
        };
        console.log(formData);
    }
});
