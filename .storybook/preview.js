import { addDecorator } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>);
