module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ],
};
