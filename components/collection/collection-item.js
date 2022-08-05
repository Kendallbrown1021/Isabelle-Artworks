import React from "react";
import styles from "./collection-item.module.css";
import Image from "next/image";
const CollectionItem = (props) => {
  const { art } = props;
  console.log(props);
  return (
    <div className={styles.collectionItemContainer}>
      <div className={styles.collectionImageCont}>
        <Image
          src={`http:${art.fields.mainImage.fields.file.url}`}
          alt={`${art.fields.title} collection`}
          layout="fill"
          className={styles.image}
        />
      </div>
      <div className={styles.cardContent}></div>
    </div>
  );
};

export default CollectionItem;
