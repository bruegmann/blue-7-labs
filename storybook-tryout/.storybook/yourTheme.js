import { create } from "@storybook/theming/create";

export default create({
    base: "light",

    colorPrimary: "#4f1eff",
    colorSecondary: "#4f1eff",

    // UI
    appBg: "#eee",
    appContentBg: "white",
    appBorderColor: "#ddd",
    appBorderRadius: 4,

    // Typography
    fontBase: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    fontCode: "monospace",

    // Text colors
    textColor: "black",
    textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    barTextColor: "#212529",
    barSelectedColor: "#4f1eff",
    barBg: "#f6f6f6",

    // Form colors
    inputBg: "white",
    inputBorder: "silver",
    inputTextColor: "black",
    inputBorderRadius: 4,

    brandTitle: "My custom storybook",
    // brandUrl: "https://example.com",
    brandImage: "https://placehold.it/350x150",
});