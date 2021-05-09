// UI
import { Box, Image, Link } from "@chakra-ui/react";

const PostCard = ({ post }) => {
  const { title, poster, slug } = post;
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height="300px">
      <Image
        src={poster}
        alt={title}
        width="100%"
        maxHeight="250px"
        objectFit="cover"
      />

      <Link href={`/post/${slug}`}>
        <Box
          as="h4"
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated="true"
        >
          {title}
        </Box>
      </Link>
    </Box>
  );
};

export default PostCard;
