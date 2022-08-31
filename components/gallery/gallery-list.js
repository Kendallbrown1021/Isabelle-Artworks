import React from "react";
import styles from "./gallery-list.module.css";
import GalleryItem from "./gallery-item";

const GalleryList = (props) => {
  const { posts } = props;
  // console.log(posts)
  const post = posts[0];
  console.log(posts);
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryContainer}>
        {post.map((item, index) => {
          console.log(post);
          return <GalleryItem key={index} posts={post[index]} />;
        })}
      </div>
    </section>
  );
};

export default GalleryList;
