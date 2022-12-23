import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./LineItem.module.scss";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        id={item.id}
        checked={item.checked}
      />
      <label
        className={item.checked ? styles.checked : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
