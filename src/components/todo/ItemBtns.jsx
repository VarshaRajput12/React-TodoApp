// icons
import { CgAddR } from 'react-icons/cg';
import { BiEdit } from 'react-icons/bi';
import { TbSquareMinus } from 'react-icons/tb';
import '../TodoStyles/style.css'

//custom hooks
import useTodoContext from '../../hooks/useTodoContext';

function ItemBtns({ onCreateOpen, onUpdateOpen }) {
  const { currentCheckedItem, deleteItemById } = useTodoContext();

  const handleItemDelete = () => {
    if (!currentCheckedItem) {
      alert('No item checked');
      return;
    } else {
      deleteItemById(currentCheckedItem.id);
      alert('Deleted a item');
    }
  };
  return (
    <div>
      <div className="flex text-white text-2xl">
        <button onClick={onCreateOpen} className="list-add-btn">
          <CgAddR />
        </button>
        <button
          onClick={onUpdateOpen}
          className="list-update-btn"
        >
          <BiEdit />
        </button>
        <button
          onClick={handleItemDelete}
          className="list-remove-btn"
        >
          <TbSquareMinus />
        </button>
      </div>
    </div>
  );
}

export default ItemBtns;
