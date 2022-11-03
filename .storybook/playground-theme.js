import { create } from "@storybook/theming";

export default create({
  base: "light",
  brandTitle: "Playground storybook",
  brandUrl: "https://material.angular.io",
  brandImage: "assets/material.svg",
  brandTarget: "_blank",
  fontBase: '"Roboto", sans-serif',

  colorPrimary: "#f1881f",
  colorSecondary: '#f1881f',
  barSelectedColor: '#f1881f',

  appBg: "white",
  appBorderColor: "#f1881f",
  appBorderRadius: 4,
});
