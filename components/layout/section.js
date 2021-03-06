import React from "react";
import styles from "./section.module.css";
const Section = (props) => {
  return <section className={styles.featured}>{props.children}</section>;
};

export default Section;
