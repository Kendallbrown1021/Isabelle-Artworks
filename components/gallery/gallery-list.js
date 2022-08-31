import React from "react";
import styles from "./gallery-list.module.css";
import GalleryItem from "./gallery-item";

const GalleryList = (props) => {
  const { posts } = props;
  // console.log(posts)
  const post = posts[0];
  console.log(post);
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryContainer}>
        {post.map((post, index) => {
          console.log(post);
          return <GalleryItem key={index} posts={post} />;
        })}
      </div>
    </section>
  );
};

export default GalleryList;
