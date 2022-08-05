import { createClient } from "contentful";
import Head from "next/head";
import HeroSection from "../components/layout/hero-section";
import Section from "../components/layout/section";
import Featured from "../components/layout/featured";

export default function Home(collections) {
  const { items } = collections.collections;
  const art = [
    items.filter((item) => item.metadata.tags[0].sys.id === "collection"),
  ];
  const artCollection = art[0];
  console.log(artCollection);
  // console.log(posts);
  // const post = posts[0];

  return (
    <div className="container">
      <Head>
        <title>Isabelle Artwork</title>
      </Head>
      <HeroSection />

      <Featured art={artCollection} />
    </div>
  );
}

export async function getStaticProps() {
  // const client = createClient({
  //   space: process.env.SPACE_ID,
  //   accessToken: process.env.ACCESS_TOKEN,
  // });

  // const data = await client.getEntries();
  // console.log(data.items);
  // return {
  //   props: {
  //     posts: data.items,
  //   },
  // };
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
