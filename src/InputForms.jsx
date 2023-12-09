// InputForms.js
import React, { useState, useEffect } from 'react';

function InputForms({ onAddTodo, editedTodo, onEditTodo }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editedTodo) {
      setName(editedTodo.name);
      setDescription(editedTodo.description);
    } else {
      // Reset form fields if there is no editedTodo
      setName('');
      setDescription('');
    }
  }, [editedTodo]);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      alert('Name and description are required!');
      return;
    }

    if (editedTodo) {
      // If in edit mode, call the onEditTodo function
      onEditTodo({
        ...editedTodo,
        name,
        description,
      });
    } else {
      // If not in edit mode, call the onAddTodo function
      onAddTodo({
        id: Date.now(), // Generate a unique id for new todos
        name,
        description,
        status: 'Not Completed',
      });
    }

    // Clear form fields
    setName('');
    setDescription('');
  };

  return (
    <form className="user-input-form">
      <div className="row mb-5">
        <div className="col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Name"
            value={name}
            onChange={updateName}
          />
        </div>

        <div className="col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Desc"
            value={description}
            onChange={updateDescription}
          />
        </div>

        <div className="col-lg-4">
          <button type="submit" className="btn btn-primary mb-3" onClick={add}>
            {editedTodo ? 'Update todo' : 'Add todo'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default InputForms;
