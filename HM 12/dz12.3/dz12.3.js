
// Отримуємо елементи
const todoList = document.getElementById('todoList');
const newTaskInput = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');

// Додаємо обробник подій до кнопки додавання завдання
addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        newTaskInput.value = ''; // Очистити поле вводу після додавання завдання
    }
});

// Функція для додавання нового завдання до списку
function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;
    todoList.appendChild(li);
}

// Додаємо обробник подій до списку завдань за допомогою делегування подій
todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentElement;
        todoList.removeChild(li);
    }
});
