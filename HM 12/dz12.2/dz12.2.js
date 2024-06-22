

document.getElementById('container').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('trackButton')) {
        const buttonNumber = event.target.getAttribute('data-button');
        console.log(`Кнопка ${buttonNumber}`);
    }
});
