import React from "react";

export function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button style={{color: 'green'}} onClick={() => completeTodo(index)}>✓</button>
        <button style={{color: 'red'}} onClick={() => removeTodo(index)}>✗</button>
      </div>
    </div>
  );
}

