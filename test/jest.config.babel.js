module.exports = {
  rootDir: '../',
  collectCoverageFrom: ['packages/babel-plugin-jsx-sfc/src/**/*.{js,jsx,ts,tsx}'],
  testMatch: ['<rootDir>/packages/babel-plugin-jsx-sfc/**/__tests__/**/*.(spec|test).{js,jsx,ts,tsx}'],
  testEnvironment: 'enzyme',
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': ['<rootDir>/node_modules/babel-jest', { configFile: './test/jest.babelrc' }],
    '^.+\\.m\\.(less|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    '^.+\\.(css|less|scss)$': '<rootDir>/test/transforms/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|less|scss|json)$)': '<rootDir>/test/transforms/fileTransform.js'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/).+(js|jsx|ts|tsx|mjs)$'],
  coverageDirectory: '<rootDir>/test/coverage',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
};
