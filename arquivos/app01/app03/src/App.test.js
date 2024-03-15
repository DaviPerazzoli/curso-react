import * as React from 'react';
import { render , screen } from '@testing-library/react';
import App from './App';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

test('renders App.js', () => {
  render(<App />);
  
  expect(screen.getByText('Search:')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  
});

test('ponei is not in the document', () => {
  render(<App />);
  expect(screen.queryByText('ponei')).not.toBeInTheDocument()


})

test('Robin is logged in', async () => {
  render(<App />);

  expect(screen.queryByText(/Signed in as/)).toBeNull(); // Antes dos dados da API

  expect(await screen.findByText(/Signed/)).toBeInTheDocument(); // Quando os dados chegam

})