import React from "react";
import CollectionItem from "./collection-item";
import styles from "./collection-list.module.css";
const CollectionList = (props) => {
  const { art } = props;
  console.log(props);
  return (
    <div className={styles.collectionList}>
      {/* {art.map((art, index) => {
        return <CollectionItem key={index} art={art} />;
      })} */}
    </div>
  );
};

export default CollectionList;
