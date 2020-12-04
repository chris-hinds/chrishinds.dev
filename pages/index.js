import Head from "next/head";

// api
import { getConfig } from "@api";

// chakra-ui
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const Home = ({ title, description }) => (
  <>
    {/* <Head>
      <title>title</title>
      <meta name="description" content="description" />
    </Head> */}
    <Flex height="100vh" flexDirection="column" justify="center">
      <Text fontSize={["m", "xl", "3xl"]}>
        Welcome to the ramblings of Chris
      </Text>
      <Heading fontSize={["2xl", "5xl"]}>
        A Software Engineer @BBC-News.
      </Heading>
      <Text fontSize={["m", "xl", "2xl"]}>
        Passionate about all things web from performance to pixel-perfection!
      </Text>
    </Flex>
  </>
);

export async function getStaticProps() {
  const config = await getConfig();
  //   const allPosts = await getAllPosts();
  //   console.log(config);

  return {
    props: {
      title: config.title,
      description: config.description,
    },
  };
}

export default Home;
