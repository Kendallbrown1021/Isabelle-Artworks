import React, { Fragment } from "react";
import styles from "./layout.module.css";
import NavBar from "./navbar";
import Footer from "../../components/layout/footer";
const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />

      <main className={styles.main}>{props.children}</main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
