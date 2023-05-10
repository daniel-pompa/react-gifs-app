/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import GifItem from './GifItem';
import PropTypes from 'prop-types';
import { getGifs } from '../helpers';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h2>{category}</h2>
      <div className='card-grid'>
        {images.map(image => (
          <GifItem key={image.id} title={image.title} url={image.url} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
