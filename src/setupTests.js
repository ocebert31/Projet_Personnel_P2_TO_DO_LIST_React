// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const sum = require('./components/ex');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});