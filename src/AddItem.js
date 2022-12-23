import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./AddItem.module.scss";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className={styles["add-item-form"]} onSubmit={handleSubmit}>
      <label htmlFor="add-item">Add Item</label>
      <input
        type="text"
        ref={inputRef}
        autoFocus
        id="add-item"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
