import { Theme } from "@/app/providers/ThemeProvider/ThemeContext";
import { Story } from "@storybook/react";
export const ThemeDecorator = (theme: Theme) => (Story: Story) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
