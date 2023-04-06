import { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [currentCheckedList, setCurrentCheckedList] = useState(null);
  const [currentCheckedItemList, setCurrentCheckedItemList] = useState(null);
  const [currentCheckedItem, setCurrentCheckedItem] = useState(null);
  // console.log(todoList);

  useEffect(() => {
    // Save tasks to local storage whenever they change
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const deleteItemById = (itemId) => {
    const listIndex = todoList.findIndex((list) =>
      list.todoItems.some((item) => item.id === itemId)
    );

    const itemIndex = todoList[listIndex].todoItems.findIndex(
      (item) => item.id === itemId
    );

    if (itemIndex !== -1) {
      const updatedTodoList = [...todoList];
      updatedTodoList[listIndex].todoItems.splice(itemIndex, 1);
      setTodoList(updatedTodoList);
    }
  };

  const updateItemById = (itemId, newObject) => {
    const listIndex = todoList.findIndex((list) =>
      list.todoItems.some((item) => item.id === itemId)
    );

    const itemIndex = todoList[listIndex].todoItems.findIndex(
      (item) => item.id === itemId
    );

    if (itemIndex !== -1) {
      const updatedTodoList = [...todoList];
      updatedTodoList[listIndex].todoItems[itemIndex] = {
        ...updatedTodoList[listIndex].todoItems[itemIndex],
        ...newObject,
      };
      return updatedTodoList;
    }

    return todoList;
  };

  const updateCurrentCheckedItemAndList = (itemId, listId, boolean) => {
    const updatedTodoList = todoList.map((list) => {
      if (list.id === listId) {
        const updatedTodoItems = list.todoItems.map((item) => {
          if (item.id === itemId) {
            item.checked = boolean;
          } else {
            item.checked = false;
          }
          return item;
        });
        return {
          ...list,
          todoItems: updatedTodoItems,
        };
      } else {
        return {
          ...list,
          todoItems: list.todoItems.map((item) => {
            return {
              ...item,
              checked: false,
            };
          }),
        };
      }
    });

    const updatedItem = updatedTodoList
      .flatMap((list) => list.todoItems)
      .find((item) => item.id === itemId && item.checked === true);

    const updatedList = updatedTodoList.find((list) => list.id === listId);

    setCurrentCheckedItemList(updatedList || null);
    setCurrentCheckedItem(updatedItem || null);
  };

  const createItem = (id, object) => {
    const index = todoList.findIndex((list) => list.id === id);

    if (index !== -1) {
      const updatedTodoList = [
        ...todoList.slice(0, index),
        {
          ...todoList[index],
          todoItems: [
            ...todoList[index].todoItems,
            {
              id: self.crypto.randomUUID(),
              checked: false,
              completed: false,
              ...object,
            },
          ],
        },
        ...todoList.slice(index + 1),
      ];
      setTodoList(updatedTodoList);
    }
  };

  const createList = (object) => {
    const updatedList = [
      ...todoList,
      {
        ...object,
        id: self.crypto.randomUUID(),
        checked: false,
        completed: false,
        todoItems: [],
      },
    ];

    setTodoList(updatedList);
  };

  const deleteListById = (id) => {
    const updatedList = todoList.filter((list) => list.id !== id);

    setTodoList(updatedList);
  };

  const updateListById = (id, object) => {
    const updatedList = todoList.map((list) => {
      if (list.id === id) {
        setCurrentCheckedList({ ...list, ...object });
        return { ...list, ...object };
      }
      return list;
    });
    setTodoList(updatedList);
  };

  const updateCurrentCheckedList = (id, boolean) => {
    const updatedList = todoList.map((list) => {
      if (list.id === id) {
        if (list.checked === false) setCurrentCheckedList(list);
        else setCurrentCheckedList(null);
        return { ...list, checked: boolean };
      }
      return { ...list, checked: false };
    });

    setTodoList(updatedList);
  };

  const valueToShare = {
    todoList,
    createList,
    updateListById,
    deleteListById,
    updateCurrentCheckedList,
    updateCurrentCheckedItemAndList,
    updateItemById,
    deleteItemById,
    currentCheckedList,
    currentCheckedItem,
    currentCheckedItemList,
    createItem,
  };

  return (
    <TodoContext.Provider value={valueToShare}>{children}</TodoContext.Provider>
  );
}

export default TodoContext;
export { TodoProvider };
