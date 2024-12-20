module.exports = {
  collectCoverageFrom: [
    "Samples-Typescript/Dashboard/PdfViewer/*.{js,jsx,ts,tsx}",
    "!Samples-Typescript/Dashboard/PdfViewer/*.test.{js,jsx,ts,tsx}",
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};
