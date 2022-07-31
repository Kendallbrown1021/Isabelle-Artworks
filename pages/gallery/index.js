import React from "react";
import { createClient } from "contentful";
import CollectionList from "../../components/collection/collection-list";
import Section from "../../components/layout/section";
const GalleryHomePage = (collections) => {
  const { items } = collections.collections;
  const art = [
    items.filter((item) => item.metadata.tags[0].sys.id === "collection"),
  ];
  const artCollection = art[0];
  console.log(artCollection);
  return (
    <div>
      <Section art={art}></Section>
      <CollectionList art={artCollection} />
    </div>
  );
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const data = await client.getEntries("collections");

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
