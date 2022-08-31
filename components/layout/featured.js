import React from "react";
import styles from "./featured.module.css";
import FeaturedItem from "../layout/featured-item";

const Featured = (props) => {
  const { art } = props;
  console.log(art);
  return (
    <section className={styles.featured}>
      <div className={styles.featuredContainer}>
        {art.map((pic, index) => {
          return <FeaturedItem key={index} art={art[index]} />;
        })}
      </div>
    </section>
  );
};

export default Featured;
