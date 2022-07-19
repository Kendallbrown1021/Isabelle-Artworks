import React from "react";
import styles from "./gallery-list.module.css";
import GalleryItem from "./gallery-item";

const GalleryList = (props) => {
  const { posts } = props.posts;
  const post = posts[0];
  console.log(posts);
  return (
    <section className={styles.gallerySection}>
      {/* <h2 className={styles.collectionHeader}>Trees Of Justice</h2> */}
      <div className={styles.galleryContainer}>
        {posts.map((post, index) => {
          return <GalleryItem key={index} posts={posts[index]} />;
        })}
      </div>
    </section>
  );
};

export default GalleryList;
