import React from "react";
import Image from "next/image";
import styles from "./gallery-item.module.css";
const GalleryItem = (props) => {
  const { posts } = props;
  console.log(props);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageCont}>
        {" "}
        <Image
          src={`http:${posts.fields.image.fields.file.url}`}
          alt={posts.fields.title}
          layout="responsive"
          width={350}
          height={350}
        />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{posts.fields.title}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
