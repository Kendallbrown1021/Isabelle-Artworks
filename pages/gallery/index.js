import React from "react";
import { createClient } from "contentful";
import GalleryList from "../../components/gallery/gallery-list";
const GalleryHomePage = (posts, dolls) => {
  console.log(dolls);
  return (
    <div>
      <GalleryList posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const data = await client.getEntries({
    content_type: "artwork",
  });

  console.log(data.items);

  return {
    props: {
      posts: data.items,
    },
  };
}
// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.SPACE_ID,
//     accessToken: process.env.ACCESS_TOKEN,
//   });

//   const data = await client.getTags({
//     tag_id: "dolls",
//   });
//   console.log(data.items);
//   return {
//     props: {
//       dolls: data.items,
//     },
//   };
// }
export default GalleryHomePage;
