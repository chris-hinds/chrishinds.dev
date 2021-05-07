// UI
import { Text } from "@chakra-ui/react";

const TextHighlight = ({ children, color, weight, as }) => (
  <Text as={as} color={color} fontWeight={weight}>
    {children}
  </Text>
);

TextHighlight.defaultProps = {
  color: "brand",
  weight: "normal",
  as: "span",
};

export default TextHighlight;
