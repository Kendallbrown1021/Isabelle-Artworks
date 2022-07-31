import React from "react";
import Image from "next/image";
import styles from "./section.module.css";
const Section = (props) => {
  const { art } = props;
  console.log(art);
  return (
    <section className={styles.featured}>
      <Image
        src={`http://images.ctfassets.net/r874ru59pzq9/2Nnd6oLxJO0juf2Oz43Uof/88abd8c5e048dbe2f4cf034061e699ed/dreaming_underwater-min.jpg`}
        // alt={`${art[0].fields.title} collection`}
        layout="responsive"
        width={2552}
        height={750}
      />
      <h1 className={styles.mainText}>Isabelle Artwork Collections</h1>
    </section>
  );
};

export default Section;
