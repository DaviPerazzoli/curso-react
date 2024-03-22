import * as React from 'react';
import { fireEvent, render , screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
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
  
  test('Renderiza e muda o componente', async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript'}
    });

    expect(screen.getByText(/JavaScript/)).toBeInTheDocument()
  })

  // test('Renderiza e muda o componente', () => {
  //   render(<App />);

  //   expect(screen.queryByText(/JavaScript/)).toBeNull();

  //   fireEvent.change(screen.getByRole('textbox'), {
  //     target: { value: 'JavaScript'}
  //   });

  //   waitFor(
  //     () => expect(
  //         screen.getByText('#')
  //         ).toBeInTheDocument()
  //   )
    
  // })
})
