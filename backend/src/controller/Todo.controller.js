const Todo = require('../model/todo.model.js');
class TodoController {
  async getAllTodos(req, res) {
    const { search, completed, page } = req.query;
    try {
      const filter = {};
      if (search && search.length > 0) {
        filter.title = { $regex: search, $options: 'i' };
      }
      if (typeof completed !== 'undefined') {
        if (completed === 'true') filter.completed = true;
        else if (completed === 'false') filter.completed = false;
      }

      const pageSize = 10;
      let pageNumber = 1;
      if (page && !isNaN(page)) {
        pageNumber = parseInt(page, 10);
      }

      const total = await Todo.countDocuments(filter);
      const todos = await Todo.find(filter)
        .sort({ createdAt: -1 })
        .skip((pageNumber - 1) * pageSize)
        .limit(page ? pageSize : 0);

      if (page) {
        return res.status(200).json({ todos, total , page:pageNumber, pageSize });
      } else {
        return res.status(200).json(todos);
      }
    } catch (error) {
      return res.status(500).send({ error: 'Error fetching todos' });
    }
  }

  async getTodoById(req, res) {
    try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        return res.status(404).send({ error: 'Todo not found' });
      }
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).send({ error: 'Error fetching todo' });
    }
  }

  async createTodo(req, res) {
    const { title } = req.body;
    try {
      if (!title) {
        return res.status(400).send({ error: 'Title is required' });
      }
      const newTodo = new Todo({
        title,
        completed: false,
      });
      await newTodo.save();
      return res.status(201).json(newTodo);
    } catch (error) {
      return res.status(400).send({ error: 'Error creating todo' });
    }
  }

  async updateTodo(req, res) {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;
      const updatedFields = {};

      const oldTodo = await Todo.findById(id);
      if (!oldTodo) {
        return res.status(404).send({ error: 'Todo not found' });
      }

      if (typeof title !== 'undefined' && title !== oldTodo.title) {
        updatedFields.title = title;
      }

      if (typeof completed !== 'undefined' && completed !== oldTodo.completed) {
        updatedFields.completed = completed;
      }

      if (Object.keys(updatedFields).length === 0) {
        return res.status(400).send({ error: 'No fields to update' });
      }

      const todo = await Todo.findByIdAndUpdate(id, updatedFields, {
        new: true,
      });
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).send({ error: 'Error updating todo' });
    }
  }

  async deleteTodo(req, res) {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).send({ error: 'Todo not found' });
    }
    return res.status(200).json({ message: 'Todo deleted successfully' });
  }

  async createManyTodos(req, res) {
    const { todos } = req.body;
    if (!Array.isArray(todos) || todos.length === 0) {
      return res.status(400).send({ error: 'Invalid todos array' });
    }
    const newTodos = await Todo.insertMany(
      todos
        .filter((todo) => todo.title && todo.title.length > 0)
        .map((todo) => ({
          title: todo.title,
          completed: todo.completed || false,
        }))
    );
    return res.status(201).json(newTodos);
  }
}

module.exports = new TodoController();
