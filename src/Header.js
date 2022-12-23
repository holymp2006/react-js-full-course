import React from "react";
import styles from "./Header.module.scss";

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
