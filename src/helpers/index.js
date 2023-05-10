export const getGifs = async category => {
  const api_key = import.meta.env.VITE_API_KEY;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=12`;

  const response = await fetch(url);

  const { data } = await response.json();

  const gifs = data.map(image => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));

  return gifs;
};
