
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => addTodoToDOM(todo));
    };

    const saveTodos = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getTodos = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const addTodoToDOM = (todo) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if (todo.checked) {
            li.classList.add('todo-item--checked');
        }
        li.innerHTML = `
            <input type="checkbox" ${todo.checked ? 'checked' : ''}>
            <span class="todo-item__description">${todo.description}</span>
            <button class="todo-item__delete">Видалити</button>
        `;
        todosWrapper.appendChild(li);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const description = input.value.trim();
        if (description !== '') {
            const todo = { description, checked: false };
            addTodoToDOM(todo);
            const todos = getTodos();
            todos.push(todo);
            saveTodos(todos);
            input.value = '';
        }
    };

    const handleTodoClick = (e) => {
        if (e.target.classList.contains('todo-item__delete')) {
            const todoItem = e.target.closest('.todo-item');
            const description = todoItem.querySelector('.todo-item__description').textContent;
            todoItem.remove();
            let todos = getTodos();
            todos = todos.filter(todo => todo.description !== description);
            saveTodos(todos);
        }

        if (e.target.type === 'checkbox') {
            const todoItem = e.target.closest('.todo-item');
            const description = todoItem.querySelector('.todo-item__description').textContent;
            let todos = getTodos();
            todos = todos.map(todo => {
                if (todo.description === description) {
                    todo.checked = e.target.checked;
                }
                return todo;
            });
            saveTodos(todos);
            todoItem.classList.toggle('todo-item--checked', e.target.checked);
        }
    };

    form.addEventListener('submit', handleFormSubmit);
    todosWrapper.addEventListener('click', handleTodoClick);

    loadTodos();
});
