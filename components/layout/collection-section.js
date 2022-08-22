import React from "react";
import styles from "../layout/collection-section.module.css";
const CollectionSection = ({ collection }) => {
  const items = collection.fields.description?.content;

  console.log(items);

  return (
    <div>
      <h1 className={styles.contentHeader}>{collection.fields.title}</h1>

      {items ? (
        <div className={styles.contentContainer}>
          {items.map((item, index) => {
            console.log(item);
            return (
              <p className={styles.content} key={index}>
                {item.content[0].value}
              </p>
            );
          })}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CollectionSection;
