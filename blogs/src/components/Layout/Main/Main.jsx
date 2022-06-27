import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./style.module.css";
import { Outlet } from "react-router";
const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
