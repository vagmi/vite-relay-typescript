module.exports = {
  roots: ["<rootDir>/src"],
  verbose: true,
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "\\.[jt]sx?$":  [ 'esbuild-jest', { 
        loaders: {
          '.test.js': 'jsx',
          '.js': 'jsx'
        }
      }
    ]
  },
  testEnvironment: "jsdom"
}