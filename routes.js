const express = require("express");
const router = express.Router();
const taskController = require("./controllers");

// Retrieve all tasks
router.get("/", taskController.getAllTasks);

// Create a new task
router.post("/", taskController.createTask);

// Retrieve a single task by its ID
router.get("/:id", taskController.getTaskById);

// Update an existing task
router.put("/:id", taskController.updateTask);

// Delete a task
router.delete("/:id", taskController.deleteTask);

module.exports = router;
