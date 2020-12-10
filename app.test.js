import {render, screen} from '@testing-library/react';
import App from './src/client/js/app';
const React = require('react');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
