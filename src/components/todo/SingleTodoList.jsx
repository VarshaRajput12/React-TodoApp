// hooks
import { useState } from 'react';

// custom hooks
import useTodoContext from '../../hooks/useTodoContext';

import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

import "../TodoStyles/style.css";

// components
import ItemBtns from './ItemBtns';
import SingleTodoItem from './SingleTodoItem';
import CreateTodoItem from '../modals/CreateTodoItem';
import UpdateTodoItem from '../modals/UpdateTodoItem';

function SingleTodoList(props) {
  const {
    updateCurrentCheckedList,
    currentCheckedItem,
    currentCheckedItemList,
  } = useTodoContext();
  const { title, date, id, todoItems, checked, completed } = props;
  const [createTodoItemOpen, setCreateTodoItemOpen] = useState(false);
  const [updateTodoItemOpen, setUpdateTodoItemOpen] = useState(false);

  const handleCreateTodoItemOpen = () => {
    setCreateTodoItemOpen(!createTodoItemOpen);
  };

  const handleUpdateTodoItemOpen = () => {
    if (!currentCheckedItem) {
      alert('No item checked');
      return;
    }
    setUpdateTodoItemOpen(!updateTodoItemOpen);
  };

  const handleCheckboxChange = () => {
    updateCurrentCheckedList(id, !checked);
  };

  const renderedTodoItems = todoItems.map(item => (
    <SingleTodoItem key={item.id} listId={id} {...item} />
  ));

  return (
    <div className="single-todo-list">
      <div className="todo-list-header">
        <div className="list-inner-header">
          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <span className="text-lg">{title}</span>
          <Switch
            checked={completed}
            // onChange={}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${todoItems.length ? 'py-4' : ''}`}>
        {renderedTodoItems}
      </div>
      <div className="flex justify-center bg-gray-100 py-2">
        <ItemBtns
          onCreateOpen={handleCreateTodoItemOpen}
          onUpdateOpen={handleUpdateTodoItemOpen}
        />
      </div>
      {createTodoItemOpen && (
        <CreateTodoItem listId={id} onCreateOpen={handleCreateTodoItemOpen} />
      )}
      {updateTodoItemOpen && (
        <UpdateTodoItem onUpdateOpen={handleUpdateTodoItemOpen} />
      )}
    </div>
  );
}

export default SingleTodoList;
