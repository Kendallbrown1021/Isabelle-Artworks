import React, { Fragment } from "react";
import styles from "./layout.module.css";
import NavBar from "./navbar";
const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
