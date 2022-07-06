import React from "react";
import styles from "./hero-card.module.css";
const HeroCard = (props) => {
  return <div className={styles.heroCard}>{props.children}</div>;
};

export default HeroCard;
