// App.js
import React, { useState } from 'react';
import InputForms from './InputForms';
import Todocard from './Todocard';

function App() {
  const [editedTodo, setEditedTodo] = useState(null);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: 'Project 1',
      description: 'Desc1',
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Desc2',
      status: 'Not Completed',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'Desc3',
      status: 'Not Completed',
    },
  ]);

  const addTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    setEditedTodo(null);
  };

  const editTodo = (todo) => {
    setEditedTodo(todo);
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setEditedTodo(null);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">My Todo</h1>
      <InputForms onAddTodo={addTodo} editedTodo={editedTodo} onUpdateTodo={updateTodo} />
      <div className="row">
        {todoList.map((todo) => (
          <Todocard
            key={todo.id}
            details={todo}
            onEditTodo={editTodo}
            onDeleteTodo={deleteTodo}
            onUpdateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
