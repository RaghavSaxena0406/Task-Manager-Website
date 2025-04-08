import React from "react";

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task)}
              className="form-check-input me-2"
            />
            <span
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
              {task.title}
            </span>
            <br />
            <small className="text-muted">
              Added on: {new Date(task.createdAt).toLocaleString()}
            </small>
          </div>
          <div>
            <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(task)}>
              <i className="bi bi-pencil"></i>
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
