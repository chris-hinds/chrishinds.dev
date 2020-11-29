import DefaultLayout from "@layouts/default";

// api
import { getAllPosts, getConfig } from "@api";

const Home = ({ title, description }) => (
  <DefaultLayout title={title} description={description}>
    Welcome to my site!
  </DefaultLayout>
);

export async function getStaticProps() {
  const config = await getConfig();
  //   const allPosts = await getAllPosts();

  return {
    props: {
      title: config.title,
      description: config.description,
    },
  };
}

export default Home;
