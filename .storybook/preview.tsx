import { Theme } from "../src/app/providers/ThemeProvider/ThemeContext";
import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../src/shared/config/storybook/ThemeDecorator";
import "./../src/app/style/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default preview;
