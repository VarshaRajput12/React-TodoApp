// components
import CreateTodoList from "../components/modals/CreateTodoList";
import UpdateTodoList from "../components/modals/UpdateTodoList";
import Footer from "../components/todo/Footer";
import SingleTodoList from "../components/todo/SingleTodoList";
import '../components/TodoStyles/style.css'

// hooks
import { useState } from "react";

// custom hooks
import useTodoContext from "../hooks/useTodoContext";

const styelObj = {
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  marginBottom: "1.25rem",
  backgroundColor: "#FBBF24",
  color: "#111827",
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
  textAlign: "center",
};


function TodoDashboard() {
  const { todoList, createList, updateListById, currentCheckedList } =
    useTodoContext();
  const [createTodoListOpen, setCreateTodoListOpen] = useState(false);
  const [updateTodoListOpen, setUpdateTodoListOpen] = useState(false);

  const handleCreateTodoListOpen = () => {
    setCreateTodoListOpen(!createTodoListOpen);
  };

  const handleUpdateTodoListOpen = () => {
    if (!currentCheckedList) {
      alert("No list checked");
      return;
    }

    setUpdateTodoListOpen(!updateTodoListOpen);
  };

  const renderedTodoList = todoList?.map((list) => (
    <SingleTodoList key={list.id} {...list} />
  ));

  return (
    <section>
      <nav style={styelObj}>Todo List</nav>
      <div className="body-container">
        {todoList && renderedTodoList}
      </div>
      <Footer
        onCreate={createList}
        onUpdate={updateListById}
        onCreateOpen={handleCreateTodoListOpen}
        onUpdateOpen={handleUpdateTodoListOpen}
      />
      {createTodoListOpen && (
        <CreateTodoList onCreateOpen={handleCreateTodoListOpen} />
      )}
      {updateTodoListOpen && (
        <UpdateTodoList onUpdateOpen={handleUpdateTodoListOpen} />
      )}
    </section>
  );
}

export default TodoDashboard;
