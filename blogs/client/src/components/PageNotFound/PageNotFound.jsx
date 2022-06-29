import React from "react";
import error from "../../page-not-found1.png";
import styles from "./style.module.css";
const PageNotFound = () => {
  return <img src={error} className={styles.img} alt="404-page" />;
};

export default PageNotFound;
