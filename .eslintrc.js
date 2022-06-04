/* eslint-disable linebreak-style */
module.exports = {
  parserOptions: {
    "ecmaVersion": 8,
    sourceType:"module"
},
  env: {
    "es6": true,
    browser: true,
    node: true
  },
  rules:{
     "semi":"off",
     "arrow-parens":"off",
     "comma-dangle":"off",
     "require-jsdoc" : "off", 
     "key-spacing": "off",
     "quotes": "off",
     "indent":"off",
     "quote-props":"off",
     "no-trailing-spaces":"off",
     "linebreak-style":"off",
     "eol-last":"off",
     "space-before-blocks":"off",
     "block-spacing":"off",
     "brace-style":"off",
     "max-len":"off",
  },
  extends: ["eslint:recommended", "google"]
}
