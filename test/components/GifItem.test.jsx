import { render, screen } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('Tests on the <GifItem /> component', () => {
  const title = 'Dragon Ball';
  const url = 'https://drgon-ball.com/goku.jpg';

  test('Should match the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Should display the image with the url and alt', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should mostrar el título en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
