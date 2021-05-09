// UI
import { Grid, GridItem } from "@chakra-ui/react";

// Components
import PostCard from "@components/PostCard";

const PostItem = ({ post }) => (
  <GridItem colSpan={{ base: 12, md: 6, lg: 4 }}>
    <PostCard post={post} />
  </GridItem>
);

const PostsGrid = ({ posts }) => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap="8">
      {posts.map((post, index) => (
        <PostItem key={`${index}-${post.title}`} post={post} />
      ))}
    </Grid>
  );
};

export default PostsGrid;
