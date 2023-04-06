import { useState } from 'react';
import ReactDOM from 'react-dom';
import { RxCross1 } from 'react-icons/rx';

import useTodoContext from '../../hooks/useTodoContext';

import '../modalStyles/style.css'

function CreateTodoList({ onCreateOpen }) {
  const { createList } = useTodoContext();
  const [values, setValues] = useState({ title: '', dueDate: '' });

  const handleToggle = () => {
    onCreateOpen();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!values.title || !values.dueDate) {
      alert("Fill the empty input fields");
      return;
    } else {
      createList(values);
      onCreateOpen();
      // alert('Created a list');
    }
  };

  return ReactDOM.createPortal(
    <div>
      <div onClick={handleToggle} className="container-todoItem"></div>
      <div className="innerContainer">
        <form onSubmit={handleSubmit} className="form-create-todo-list">
          <div className="todo-list-title">
            <h1 style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
              Add Todo List
            </h1>
            <RxCross1
              onClick={handleToggle}
              style={{
                color: "#4B5563",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="todo-list">
            <span
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              Title
            </span>
            <input
              value={values.title}
              onChange={handleChange}
              name="title"
              type="text"
              className="todo-list-input"
            />
            <span
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              Due Date
            </span>
            <input
              value={values.dueDate}
              onChange={handleChange}
              name="dueDate"
              type="text"
              placeholder="Select Due Date"
              className="due-date-input"
            />
            <button
              type="submit"
              className="create-btn-todolist"
              id="create-list"
            >
              Create
            </button>
          </div>
          <div className="p-4 flex justify-end">
            <button onClick={handleToggle} className="close-btn-todo-list">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default CreateTodoList;
