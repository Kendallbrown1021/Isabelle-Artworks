import React from "react";
import styles from "./commissions-info.module.css";

const CommissionInfo = () => {
  return (
    <section className={styles.commissionInfoSec}>
      <div className={styles.commissionsParentContainer}>
        <div className={`${styles.commissionInfoCont} ${styles.infoOdd}`}>
          <p className={styles.commissionInfo}>
            <span className={styles.number}>01.</span> &nbsp;Send in your
            picture or create an art petition and send it in to:&nbsp;&nbsp;
            <span className={styles.spanEmail}>isabell.art@gmail.com</span>
          </p>
        </div>
        <div className={`${styles.commissionInfoCont} ${styles.infoEven}`}>
          <p className={styles.commissionInfo}>
            <span className={styles.number}>02.</span>&nbsp;Schedule your order
            and make 50% deposit to begin work on your peice.
          </p>
        </div>
        <div className={`${styles.commissionInfoCont} ${styles.infoOdd}`}>
          <p className={styles.commissionInfo}>
            <span className={styles.number}>03.</span>&nbsp;Pay your balance.
          </p>
        </div>
        <div className={`${styles.commissionInfoCont} ${styles.infoEven}`}>
          <p className={styles.commissionInfo}>
            <span className={styles.number}>04.</span>&nbsp;Enjoy your custom
            artwork!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommissionInfo;
