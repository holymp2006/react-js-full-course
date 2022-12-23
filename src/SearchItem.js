import React from "react";
import styles from "./SearchItem.module.scss";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className={styles["search-form"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Items"
      />
    </form>
  );
};

export default SearchItem;
