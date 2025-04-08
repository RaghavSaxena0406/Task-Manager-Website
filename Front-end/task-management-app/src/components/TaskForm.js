import React, { useState, useEffect } from "react";

const TaskForm = ({ onSave, editingTask }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) setTitle(editingTask.title);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSave({ title, id: editingTask?.id });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          {editingTask ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
