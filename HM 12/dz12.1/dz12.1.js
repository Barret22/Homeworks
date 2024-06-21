

let userLink = '';
document.getElementById('linkButton').addEventListener('click', function() {
    userLink = prompt('Введіть посилання:');
});
document.getElementById('sendButton').addEventListener('click', function() {
    if (userLink) {
        window.location.href = userLink;
    }
});