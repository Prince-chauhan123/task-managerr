import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetail from "./components/TaskDetail";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleViewTask = (taskId) => {
    setCurrentTask(tasks.find((task) => task.id === taskId));
  };

  const handleCloseDetail = () => {
    setCurrentTask(null);
  };

  const handleEditTask = (taskId) => {
    setTaskToEdit(tasks.find((task) => task.id === taskId));
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, ...updatedTask } : task
      )
    );
    setTaskToEdit(null);
  };

  return (
    <div className="app">
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onView={handleViewTask}
        onEdit={handleEditTask}
      />
      <TaskForm
        onSubmit={taskToEdit ? handleUpdateTask : handleAddTask}
        taskToEdit={taskToEdit}
      />
      <TaskDetail task={currentTask} onClose={handleCloseDetail} />
    </div>
  );
};

export default App;
