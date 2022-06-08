import { createClient } from "contentful";
import Head from "next/head";
export default function Home(props) {
  const { posts } = props;

  return (
    <div className="container">
      <Head>
        <title>Isabelle Artwork</title>
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const data = await client.getEntries({ content_type: "galleryPhoto" });

  return {
    props: {
      posts: data.items,
    },
  };
}
