import React from "react";
import styles from "./collection-item.module.css";
import Image from "next/image";
const CollectionItem = (props) => {
  const { art } = props;
  console.log(art);
  return (
    <div className={styles.collectionItemContainer}>
      <div className={styles.collectionImageCont}>
        <Image
          src={`http:${art.fields.mainImage.fields.file.url}`}
          alt={`${art.fields.title} collection`}
          layout="responsive"
          width={350}
          height={350}
          className={styles.image}
        />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.collectionTitle}>{art.fields.title} Collection</p>
      </div>
    </div>
  );
};

export default CollectionItem;
