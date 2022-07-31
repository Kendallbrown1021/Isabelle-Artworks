import { createClient } from "contentful";
import Head from "next/head";
import HeroSection from "../components/layout/hero-section";
import Section from "../components/layout/section";
import Featured from "../components/layout/featured";
export default function Home(props) {
  const { posts } = props;
  // console.log(posts);
  const post = posts[0];
  console.log(post);
  return (
    <div className="container">
      <Head>
        <title>Isabelle Artwork</title>
      </Head>
      <HeroSection />

      {/* <Featured /> */}
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const data = await client.getEntries();
  console.log(data.items);
  return {
    props: {
      posts: data.items,
    },
  };
}
