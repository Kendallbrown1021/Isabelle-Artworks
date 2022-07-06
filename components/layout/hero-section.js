import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./hero-section.module.css";
import eyesGlory from "../../public/eyes_glory.jpg";
import butterFly from "../../public/butterfliesgirl.jpg";
import blueLady from "../../public/pinkbluelady.jpg";
import HeroCard from "../ui/heroCard";

const HeroSection = (props) => {
  const images = [
    { id: 1, url: eyesGlory },
    { id: 2, url: blueLady },
    { id: 3, url: butterFly },
  ];

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <Image
          src={blueLady}
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.heroImage}
          style={{ zIndex: "0" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
