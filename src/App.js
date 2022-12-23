import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      checked: true,
      item: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      checked: false,
      item: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 4,
      checked: false,
      item: "Item 4",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(listItems);
    localStorage.setItem("shopping_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopping_list", JSON.stringify(listItems));
  };

  return (
    <div className={styles.app}>
      <Header title="Groceries" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
