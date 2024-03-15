// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('true is truthy and false is falsy', () => {
  test('true is truthy', ()=>{
    expect(true).toBeTruthy();
  })
  
  test('false is falsy', () => {
    expect(false).toBeFalsy();
  })
})


test('1.35351322 + 2.0000123512 = 3.35352322', () => {
  expect(1.35351322+2.0000123512).toBeCloseTo(3.35352322);
})
