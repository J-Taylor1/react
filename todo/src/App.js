// import logo from './logo.svg';
import React, {useState} from 'react';

import logo from './tek_logo.png';
import './App.css';
import  {Todo}  from './Components/Todo';
import {TodoForm} from './Components/TodoForm';
import End from './Components/End';

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Sleep",
      isCompleted: false,
    },
    {
      text: "Code",
      isCompleted: false,
    },
    {
      text: "Eat",
      isCompleted: false,
    },
  ]);  //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const clearList = () => {
    const newTodos = [...todos];
    newTodos.splice(0,newTodos.length);
    setTodos(newTodos);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <div>
         <br/>
         <End clearList={clearList}/>
          <p>What I need Todo!</p>
          {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      </header>
      </div>

  );
}

export default App;
