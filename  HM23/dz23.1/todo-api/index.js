

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Модель для задач
const Todo = mongoose.model('Todo', new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false }
}));

// CRUD маршруты
// Create
app.post('/api/todos', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description
    });
    await todo.save();
    res.status(201).send(todo);
});

// Read
app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});

app.get('/api/todos/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).send('Задача не найдена');
    res.send(todo);
});

// Update
app.put('/api/todos/:id', async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!todo) return res.status(404).send('Задача не найдена');
    res.send(todo);
});

// Delete
app.delete('/api/todos/:id', async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).send('Задача не найдена');
    res.send(todo);
});

// Запуск сервера
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));
