module.exports = {
  roots: ["<rootDir>/src"],
  verbose: true,
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "\\.[jt]sx?$":  'babel-jest'
  },
  testEnvironment: "jsdom",
  globals: { // if necessary
    'babel-jest': { // don't forget to change `ts-jest` to `jest` here
      babelConfig: true
    }
  }
  // globals: {
  //   "ts-jest": {
  //     "babelConfig": {
  //       plugins: ["relay"]
  //     }
  //   }
  // }
  // transform: {
  //   "\\.[jt]sx?$":  [ 'esbuild-jest', { 
  //       loaders: {
  //         '.spec.js': 'jsx',
  //         '.js': 'jsx'
  //       }
  //     }
  //   ]
  // },
}