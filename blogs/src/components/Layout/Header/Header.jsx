import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <Link to="/home" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blogs" className={styles.link}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
      <button className={styles.btn}>Logout</button>
    </header>
  );
};

export default Header;
