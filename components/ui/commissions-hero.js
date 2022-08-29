import React from "react";
import styles from "./commissions-hero.module.css";

const CommissionHero = () => {
  return (
    <section className={styles.commissionHero}>
      <div className={styles.commissionTextCont}>
        <h1 className={styles.commissionText}>Commission Process</h1>
      </div>
    </section>
  );
};

export default CommissionHero;
