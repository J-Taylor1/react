import React, { useState } from "react";

export function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value)
      return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add todos.."
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)} />
    </form>
  );
}
