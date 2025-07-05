const express = require("express");
const TodoController = require("../controller/Todo.controller.js");

const router = express.Router();

router.get("/", TodoController.getAllTodos);
router.get("/:id", TodoController.getTodoById);
router.post("/", TodoController.createTodo);
router.post("/many", TodoController.createManyTodos);
router.put("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;