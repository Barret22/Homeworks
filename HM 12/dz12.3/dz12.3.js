document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    let tasks = ['Завдання 1', 'Завдання 2', 'Завдання 3'];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${task} <button class="delete-btn" data-index="${index}">Видалити</button>`;
            taskList.appendChild(li);
        });
    }

    function addTask(task) {
        tasks.push(task);
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            deleteTask(index);
        }
    });

    addTaskButton.addEventListener('click', () => {
        const task = newTaskInput.value.trim();
        if (task) {
            addTask(task);
            newTaskInput.value = '';
        }
    });

    renderTasks();
});
