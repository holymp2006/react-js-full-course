import React from "react";
import styles from "./Button.module.scss";

const Button = ({ onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      Click me!
    </button>
  );
};

export default Button;
