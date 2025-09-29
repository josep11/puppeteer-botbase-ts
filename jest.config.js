module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  transform: {
    "^.+\\.ts?$": ["ts-jest", {
      tsconfig: './tsconfig.base.json'
    }]
  },
  // reporters: [
  //   "default",
  //   [
  //     "jest-junit",
  //     {
  //       "outputDirectory": "./test-results/junit",
  //       "outputName": "results.xml"
  //     }
  //   ]
  // ],
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
