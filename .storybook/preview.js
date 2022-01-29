export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
import React from "react";
import {withA11y} from "@storybook/addon-a11y"
import { ChakraProvider, theme, Box } from "@chakra-ui/react";
// import { Theme } from "@chakra-ui/theme";
import Center from "../src/components/Center/Center";

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Box m="4">
        <Story />
      </Box>
    </ChakraProvider>
  ),
  withA11y
];
