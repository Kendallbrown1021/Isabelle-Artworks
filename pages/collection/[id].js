import React from "react";
import CollectionSection from "../../components/layout/collection-section";
import GalleryList from "../../components/gallery/gallery-list";
import GalleryItem from "../../components/gallery/gallery-item";
import { createClient } from "contentful";
const Collection = ({ collections }) => {
  // const items = collections.fields.description?.content;
  const posts = collections.fields.item;
  // console.log(items);
  return (
    <div>
      <CollectionSection collection={collections} />
      <GalleryList posts={posts} />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=collections`
  );

  const collection = await res.json();
  // console.log(collection.items);

  // const client = createClient({
  //   space: process.env.SPACE_ID,
  //   accessToken: process.env.ACCESS_TOKEN,
  // });

  // const collection = await client.getEntries("collections");

  const paths = collection.items.map((item) => ({
    params: { id: item.sys.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });
  console.log(context.params.id, "hello");
  const data = await client.getEntry(`${context.params.id}`);

  console.log(data);

  return {
    props: {
      collections: data,
    },
  };
}

export default Collection;
