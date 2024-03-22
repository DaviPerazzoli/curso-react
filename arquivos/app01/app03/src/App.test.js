import * as React from 'react';
import { fireEvent, render , screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { Search } from './App';

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

  test('Renderiza e o usuário escreve Javascript', async () => {
    render(<App/>);

    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Serches for JavaScript/)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
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

describe('Search', () => {
  it('calls the onChange callback handler', () => {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    userEvent.type(screen.getByRole('textbox'), 'JavaScript')

    expect(onChange).toHaveBeenCalledTimes(10)
  })
})