"use strict";

$(document).ready(function () {
  var tasks = [];
  function renderTasks() {
    $('#todo-list').empty();
    tasks.forEach(function (task, index) {
      $('#todo-list').append("\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\" data-index=\"".concat(index, "\">\n                        ").concat(task, "\n                        <div>\n                            <button class=\"btn btn-success btn-sm complete-task-btn\">\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u043E</button>\n                            <button class=\"btn btn-danger btn-sm delete-task-btn\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n                        </div>\n                    </li>\n                "));
    });
  }
  $('#add-task-btn').click(function () {
    var newTask = prompt('Введіть нове завдання:');
    if (newTask) {
      tasks.push(newTask);
      renderTasks();
    }
  });
  $(document).on('click', '.list-group-item', function () {
    var index = $(this).data('index');
    $('#task-text').text(tasks[index]);
    $('#taskModal').modal('show');
  });
  $(document).on('click', '.complete-task-btn', function (e) {
    e.stopPropagation();
    var index = $(this).closest('.list-group-item').data('index');
    tasks[index] = "\u2714\uFE0F ".concat(tasks[index]);
    renderTasks();
  });
  $(document).on('click', '.delete-task-btn', function (e) {
    e.stopPropagation();
    var index = $(this).closest('.list-group-item').data('index');
    tasks.splice(index, 1);
    renderTasks();
  });
});
