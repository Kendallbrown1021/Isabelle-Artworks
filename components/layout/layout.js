import React, { Fragment } from "react";
import styles from "./layout.module.css";
import NavBar from "./navbar";
import Footer from "../../footer";
const Layout = (props) => {
  return (
    <>
      <NavBar />

      <main>{props.children}</main>

      <Footer />
    </>
  );
};

export default Layout;
