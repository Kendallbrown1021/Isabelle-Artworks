import React from "react";
import styles from "./featured.module.css";
import CollectionItem from "../collection/collection-item";

const Featured = (props) => {
  const { art } = props;

  return (
    <section className={styles.featured}>
      <div className={styles.featuredContainer}>
        {art.map((pic, index) => {
          return <CollectionItem key={index} art={art[index]} />;
        })}
      </div>
    </section>
  );
};

export default Featured;
