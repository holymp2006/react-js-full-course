import React from "react";
import styles from "./Content.module.scss";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className={styles.main}>
      {!items.length ? (
        <p color="green">Your list is empty</p>
      ) : (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
    </main>
  );
};

export default Content;
