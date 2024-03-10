module.exports = {
  transform: { 
    "^.+\\.ts?$": [ "ts-jest", {
      tsconfig: './tsconfig.base.json'
    }]
  },
  testEnvironment: "node",
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
