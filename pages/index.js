// api
import { getConfig, getAllPosts } from "@api";

// chakra-ui
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

// Components
import TextHighlight from "@components/TextHeighlight";
import PostGrid from "@components/PostsGrid";

const Home = ({ posts }) => (
  <>
    <Flex height="70vh" flexDirection="column" justify="center">
      <Text
        fontSize={["3xl", "3xl", "6xl"]}
        fontWeight="bold"
        color="brand.highlight"
      >
        Hello.
      </Text>
      <Text fontSize={["lg", "xl", "2xl"]}>
        I'm a Software Engineer living in Dubai (UAE), passionate about all
        things web from{" "}
        <TextHighlight color="brand.highlight2" weight="bold">
          performance{" "}
        </TextHighlight>
        to{" "}
        <TextHighlight color="brand.highlight3" weight="bold">
          pixel-perfection
        </TextHighlight>
        ! Currently coding as a backend engineer at uDroppy, previously Senior
        Software Engineer at BBC World Service
      </Text>
    </Flex>

    <PostGrid posts={posts} />
  </>
);

export async function getStaticProps() {
  const config = await getConfig();
  const posts = await getAllPosts();
  console.log(posts);

  return {
    props: {
      title: config.title,
      description: config.description,
      posts,
    },
  };
}

Home.defaultProps = {
  posts: [],
};

export default Home;
