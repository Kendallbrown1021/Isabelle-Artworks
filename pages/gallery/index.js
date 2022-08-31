import React from "react";
import { createClient } from "contentful";
import GalleryList from "../../components/gallery/gallery-list";
import CollectionList from "../../components/collection/collection-list";
import Section from "../../components/layout/section";
const GalleryHomePage = (collections) => {
  const { items } = collections.collections;
  const art = [
    items.filter((item) => item.metadata.tags[0].sys.id !== "collection"),
  ];
  const artCollection = art;
  console.log(art, "hey");
  return (
    <div>
      <Section></Section>
      <GalleryList posts={artCollection} />
    </div>
  );
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const data = await client.getEntries("artwork");

  console.log(data.items);

  return {
    props: {
      collections: data,
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
