import React from "react";
import styles from "./collection-item.module.css";
import Image from "next/image";
const CollectionItem = (props) => {
  const { art } = props;
  console.log(art.fields);
  return (
    <div className={styles.collectionItemContainer}>
      <div className={styles.collectionImageCont}>
        <Image
          src={`http:${art.fields.mainImage.fields.file.url}`}
          alt={`${art.fields.title} collection`}
          layout="responsive"
          width={550}
          height={450}
        />
      </div>
    </div>
  );
};

export default CollectionItem;
