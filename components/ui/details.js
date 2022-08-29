import React from "react";
import styles from "./details.module.css";
const Details = () => {
  return (
    <section className={styles.detailSection}>
      <div className={styles.detailParentContainer}>
        <h3 className={styles.detailHeader}>Extra Information</h3>
        <div className={styles.detailCotainer}>
          <p className={styles.detailInfo}>
            <span className={styles.detailBullet}>&bull;</span>&nbsp; You will
            recieve a full watercolor or mixed media rendition for this price
          </p>
          <p className={styles.detailInfo}>
            <span className={styles.detailBullet}>&bull;</span>&nbsp; However if
            you want more detail the price may change.
          </p>
          <p className={styles.detailInfo}>
            <span className={styles.detailBullet}>&bull;</span>&nbsp;For
            portraits with more than one face prices may vary.
          </p>
          <p className={styles.detailInfo}>
            <span className={styles.detailBullet}>&bull;</span> &nbsp;If you
            would like a larger peice don't be afraid to send me a message!
          </p>
          <p className={styles.detailInfo}>
            <span className={styles.detailBullet}>&bull; </span>&nbsp;The price
            of shipping is not includeds
          </p>
        </div>
        <div className={styles.detail}>
          <h4 className={styles.detailHeader}>Payment</h4>
          <p className={styles.detailInfo}>
            Send me a message for payment options!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
