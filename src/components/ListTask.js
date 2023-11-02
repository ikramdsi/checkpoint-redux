// src/components/ListTask.js
import React from "react";
import { useSelector } from "react-redux";
import Task from "../components/Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div>
      <h3>Task List</h3>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
