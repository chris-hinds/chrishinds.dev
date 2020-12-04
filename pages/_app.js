// chakra-ui
import { ChakraProvider, GlobalStyle, extendTheme } from "@chakra-ui/react";

// styles
import customTheme from "@styles/theme";
import customFonts from "@styles/font-face";

// components
import DefaultLayout from "@layouts/default";

const theme = extendTheme(customTheme);

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle styles={customFonts} />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
};

export default App;
