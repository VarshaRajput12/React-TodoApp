// library imports
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import useTodoContext from '../../hooks/useTodoContext';

import '../TodoStyles/style.css'


function SingleTodoItem({
  title,
  date,
  id,
  todoItems,
  checked,
  completed,
  listId,
}) {
  const { updateCurrentCheckedItemAndList } = useTodoContext();

  const handleCurrentCheckedItemAndList = () => {
    updateCurrentCheckedItemAndList(id, listId, !checked);
  };

  return (
    <div
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        backgroundColor: "#ffffff",
        borderColor: "#D1D5DB",
      }}
    >
      <div className="single-todo-item">
        <Checkbox
          checked={checked}
          onChange={handleCurrentCheckedItemAndList}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div
          style={{
            display: "flex",
            paddingLeft: "0.5rem",
            backgroundColor: "#ffffff",
            alignItems: "center",
            justifyContent:"center",
            width: "100%",
            height: "100%",
          }}
          className=""
        >
          <span className="text-md">{title}</span>
        </div>
        <Switch
          checked={completed}
          // onChange={handleSwitchChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  );
}

export default SingleTodoItem;
