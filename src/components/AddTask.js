// src/components/AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../js/actions/taskActions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description) {
      dispatch(addTask({ id: Math.random(), description, isDone: false }));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
