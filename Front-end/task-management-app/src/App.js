import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import * as api from "./api";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setError(null);
      const res = await api.getTasks();
      setTasks(res.data);
    } catch (error) {
      setError("Failed to fetch tasks. Please try again later.");
      console.error("Error fetching tasks:", error.message);
    }
  };

  const handleSave = async (task) => {
    try {
      setError(null);
      if (task.id) {
        await api.updateTask(task.id, task);
      } else {
        await api.createTask(task);
      }
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      setError("Failed to save task. Please try again.");
      console.error("Error saving task:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      setError(null);
      await api.deleteTask(id);
      fetchTasks();
    } catch (error) {
      setError("Failed to delete task. Please try again.");
      console.error("Error deleting task:", error.message);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      setError(null);
      const updatedTask = { ...task, completed: !task.completed };
      await api.updateTask(task.id, updatedTask);
      fetchTasks();
    } catch (error) {
      setError("Failed to update task. Please try again.");
      console.error("Error toggling completion:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
     
      <div className="container mt-5 mb-4">
      <h1 className="text-left mt-3 mb-1">Task Manager</h1>
<p className="text-left text-muted mb-4" style={{ fontSize: "1rem" }}>by Raghav</p>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <TaskForm onSave={handleSave} editingTask={editingTask} />
        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={handleDelete}
          onToggleComplete={handleToggleComplete}
        />
      </div>
      
    </div>
  );
};

export default App;
