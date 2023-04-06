import { useState } from 'react';
import ReactDOM from 'react-dom';
import { RxCross1 } from 'react-icons/rx';
import "../modalStyles/style.css";

// custom hooks
import useTodoContext from '../../hooks/useTodoContext';

function UpdateTodoItem({ onUpdateOpen }) {
  const { updateItemById, currentCheckedItem, currentCheckedItemList } =
    useTodoContext();
  const [values, setValues] = useState({
    id: currentCheckedItem.id,
    title: currentCheckedItem.title,
    dueDate: currentCheckedItem.dueDate,
  });
  console.log(values);

  const handleToggle = () => {
    onUpdateOpen();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!values.title || !values.dueDate || !values.id) {
      alert("Fill the empty input fields");
      return;
    } else {
      updateItemById(currentCheckedItem.id, values);
      onUpdateOpen();
      // alert('Updated a item');
    }
  };

  return ReactDOM.createPortal(
    <div>
      <div onClick={handleToggle} className="container-todoItem"></div>
      <div className="innerContainer">
        <form onSubmit={handleSubmit} className="form-create-todo-list">
          <div className="todo-list-title">
            <h1 style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
              New Todo List
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
              Todo Id
            </span>
            <input
              value={values.id}
              onChange={handleChange}
              name="id"
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
              id="update-item"
            >
              Update
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

export default UpdateTodoItem;
