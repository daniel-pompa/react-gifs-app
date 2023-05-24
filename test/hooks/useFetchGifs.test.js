import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests in custom Hook useFetchGifs', () => {
  test('Should return inital state', () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Should return an array of images and the variable isLoading with a value of false', async () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(12);
    expect(isLoading).toBeFalsy();
  });
});
