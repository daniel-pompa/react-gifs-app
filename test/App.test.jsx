import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Tests on <App />', () => {
  const inputValue = 'Dragon Ball';

  test('Should match the snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('Should display the application title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toEqual('Gif App');
  });

  test('Should change the text box value', () => {
    render(<App />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe('Dragon Ball');
  });

  test('Should contain the category entered', () => {
    render(<App />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toEqual('Dragon Ball');
  });

  test('Should not add the category twice', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: 'dragon ball' } });
    fireEvent.submit(form);

    expect(screen.getAllByText('Dragon Ball').length).toBe(1);
  });

  test('Should add a new category and render titles', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: 'Los Simpsons' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(2);
  });
});
