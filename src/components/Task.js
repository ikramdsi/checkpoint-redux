// src/components/Task.js
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../js/actions/taskActions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      <span>{task.description}</span>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;
