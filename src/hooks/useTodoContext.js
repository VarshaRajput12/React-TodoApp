// hooks
import { useContext } from 'react';
import TodoContext from '../context/todo/TodoContext';

const useTodoContext = () => {
  return useContext(TodoContext);
};

export default useTodoContext;
