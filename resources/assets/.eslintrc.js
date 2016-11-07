module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module"
    },
    extends: "standard",
    plugins: [
        "html"
    ],
    rules: {
        "arrow-parens": 0,
        "eol-last": 0,
        "generator-star-spacing": 0,
        "indent": ["error", 4],
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "quotes": ["error", "double", {"allowTemplateLiterals": true}],
        "semi": ["error", "always"]
    }
}