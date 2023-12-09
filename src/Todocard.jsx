// Todocard.js
import React, { useState, useEffect } from 'react';

function Todocard({ details, onEditTodo, onDeleteTodo, onUpdateTodo }) {
  const [editedValues, setEditedValues] = useState({
    name: details.name,
    description: details.description,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditedValues({
      name: details.name,
      description: details.description,
    });
  }, [details]);

  const handleStatusChange = (e) => {
    const updatedTodo = { ...details, status: e.target.value };
    onUpdateTodo(updatedTodo);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onDeleteTodo(details.id);
  };

  const handleUpdate = () => {
    onUpdateTodo({
      ...details,
      name: editedValues.name,
      description: editedValues.description,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChangeName = (e) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      name: e.target.value,
    }));
  };

  const handleChangeDescription = (e) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      description: e.target.value,
    }));
  };

  return (
    <div className="col-lg-4">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body bg-success">
          <h5 className="card-title">Card title</h5>
          {isEditing ? (
            <>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                value={editedValues.name}
                onChange={handleChangeName}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Description"
                value={editedValues.description}
                onChange={handleChangeDescription}
              />
            </>
          ) : (
            <>
              <p className="card-text">Name: {details.name}</p>
              <p className="card-text">Description: {details.description}</p>
            </>
          )}
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            className="form-select form-select-sm mb-3"
            value={details.status}
            onChange={handleStatusChange}
            aria-label=".form-select-sm example"
          >
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
          {isEditing ? (
            <>
              <button className="btn btn-success" onClick={handleUpdate}>
                Update
              </button>
              <button className="btn btn-secondary ms-2" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className="btn btn-danger ms-2" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todocard;
