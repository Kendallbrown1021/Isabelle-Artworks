import "@styles/globals.css";
import Layout from "../components/layout/layout";
function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
