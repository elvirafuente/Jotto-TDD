import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//install Enzyme
// npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
