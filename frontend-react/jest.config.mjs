import nextJest from "next/jest.js";
// sets up the directory
const createJestConfig = nextJest({
  dir: "./",
});

// any custom configs in here
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
