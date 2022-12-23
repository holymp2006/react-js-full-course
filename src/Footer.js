import React from "react";
import styles from "./Footer.module.scss";

const Footer = ({ length }) => {
  return (
    <footer className={styles.footer}>
      <p>
        {length} List {length === 1 ? "Item" : "Items"}
      </p>
    </footer>
  );
};

export default Footer;
