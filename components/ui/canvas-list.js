import React from "react";
import styles from "./canvas-list.module.css";
import Image from "next/image";
import Canvas from "../../public/images/canvas.png";
const CanvasList = () => {
  return (
    <section className={styles.canvasSection}>
      <h2 className={styles.canvasHeader}>
        Prices <span>&</span> Information
      </h2>
      <h3 className={styles.canvasSubHeader}>Range of Prices</h3>
      <div className={styles.canvasListContainer}>
        <div className={styles.canvasCard}>
          <div className={styles.canvasSpacing}>
            <div className={styles.canvasLogoContainerSmall}>
              <Image
                src={Canvas}
                alt="canvas icon"
                layout="responsive"
                height={75}
                width={75}
                quality={100}
              />
            </div>
          </div>

          <p className={styles.canvasSize}>8 x 11 in</p>
          <p className={styles.canvasPrice}>$40</p>
        </div>
        <div className={styles.canvasCard}>
          <div className={styles.canvasSpacing}>
            <div className={styles.canvasLogoContainerMed}>
              <Image
                src={Canvas}
                alt="canvas icon"
                layout="responsive"
                height={75}
                width={75}
                quality={100}
              />
            </div>
          </div>

          <p className={styles.canvasSize}>12 x 18 in</p>
          <p className={styles.canvasPrice}>$80</p>
        </div>
        <div className={styles.canvasCard}>
          <div className={styles.canvasSpacing}>
            <div className={styles.canvasLogoContainerLarge}>
              <Image
                src={Canvas}
                alt="canvas icon"
                layout="responsive"
                height={75}
                width={75}
                quality={100}
              />
            </div>
          </div>

          <p className={styles.canvasSize}>18 x 24 in</p>
          <p className={styles.canvasPrice}>$120</p>
        </div>
      </div>
    </section>
  );
};

export default CanvasList;
