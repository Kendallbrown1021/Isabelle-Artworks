import React from "react";
import Image from "next/image";
import styles from "./section.module.css";
const Section = (props) => {
  const { art } = props;

  return (
    <section className={styles.featured}>
      <Image
        src={`http://images.ctfassets.net/r874ru59pzq9/2Nnd6oLxJO0juf2Oz43Uof/88abd8c5e048dbe2f4cf034061e699ed/dreaming_underwater-min.jpg`}
        alt={`Dreaming Underwater`}
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: "2" }}
      />
      <div className={styles.mainTextCont}>
        <p className={styles.mainText}>
          Isabelle Artwork <br />
          Collection
        </p>
      </div>
    </section>
  );
};

export default Section;
