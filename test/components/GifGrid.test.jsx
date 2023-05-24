import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GrifGrid />', () => {
  const category = 'Dragon Ball';

  test('Should display initial loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Should display items when images are loaded', () => {
    const gifs = [
      {
        id: '135518c7-8685-4def-a97f-9c8b0e8919cf',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
      {
        id: '035660a1-7873-4d7d-9f63-e516c1f2b88f',
        title: 'Vegeta',
        url: 'https://localhost/vegeta.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
