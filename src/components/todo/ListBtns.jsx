// icons
// library imports
import { CgAddR } from 'react-icons/cg';
import { BiEdit } from 'react-icons/bi';
import { TbSquareMinus } from 'react-icons/tb';
import "../TodoStyles/style.css";
// import '../T'

// custom hooks
import useTodoContext from '../../hooks/useTodoContext';

function ListBtns({ onCreateOpen, onUpdateOpen }) {
  const { currentCheckedList, deleteListById } = useTodoContext();

  const handleListDelete = () => {
    if (!currentCheckedList) {
      alert('No list checked');
      return;
    } else {
      deleteListById(currentCheckedList.id);
      // alert('Deleted a list');
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          color: "#ffffff",
          fontSize: "1.5rem",
          linehHeight: "2rem",
        }}
      >
        <button onClick={onCreateOpen} className="global-add-btn">
          <CgAddR />
        </button>
        <button
          onClick={onUpdateOpen}
          className="global-update-btn"
        >
          <BiEdit />
        </button>
        <button
          onClick={handleListDelete}
          className="global-remove-btn"
        >
          <TbSquareMinus />
        </button>
      </div>
    </div>
  );
}

export default ListBtns;
