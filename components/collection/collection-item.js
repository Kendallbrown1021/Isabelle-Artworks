import React from "react";
import styles from "./collection-item.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const CollectionItem = (props) => {
  const router = useRouter();
  const { art } = props;
  const urlParam = art.sys.id;
  console.log(art);
  return (
    <div
      className={styles.collectionItemContainer}
      onClick={() => router.push(`/collection/${urlParam}`)}
    >
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
