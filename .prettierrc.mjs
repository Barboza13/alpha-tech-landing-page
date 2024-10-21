/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        semi: false,
        singleQuote: true,
        tabWidth: 4,
      },
    },
    {
      files: "*.ts",
      options: {
        semi: false,
        singleQuote: true,
      },
    },
  ],
};
