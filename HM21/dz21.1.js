


$(document).ready(function() {
    let tasks = [];
    function renderTasks() {
        $('#todo-list').empty();
        tasks.forEach((task, index) => {
            $('#todo-list').append(`
                    <li class="list-group-item d-flex justify-content-between align-items-center" data-index="${index}">
                        ${task}
                        <div>
                            <button class="btn btn-success btn-sm complete-task-btn">Виконано</button>
                            <button class="btn btn-danger btn-sm delete-task-btn">Видалити</button>
                        </div>
                    </li>
                `);
        });
    }

    $('#add-task-btn').click(function() {
        const newTask = prompt('Введіть нове завдання:');
        if (newTask) {
            tasks.push(newTask);
            renderTasks();
        }
    });

    $(document).on('click', '.list-group-item', function() {
        const index = $(this).data('index');
        $('#task-text').text(tasks[index]);
        $('#taskModal').modal('show');
    });

    $(document).on('click', '.complete-task-btn', function(e) {
        e.stopPropagation();
        const index = $(this).closest('.list-group-item').data('index');
        tasks[index] = `✔️ ${tasks[index]}`;
        renderTasks();
    });

    $(document).on('click', '.delete-task-btn', function(e) {
        e.stopPropagation();
        const index = $(this).closest('.list-group-item').data('index');
        tasks.splice(index, 1);
        renderTasks();
    });
});

