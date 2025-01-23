/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // Вказуємо, що використовуємо ts-jest
  testEnvironment: 'jsdom', // Середовище для тестів (браузер)
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Налаштування Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Маппінг alias для імпортів
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Трансформуємо TypeScript
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ігноруємо node_modules
};
