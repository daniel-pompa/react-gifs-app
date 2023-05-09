import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGifs } from '../helpers';

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, [category]);

  return (
    <>
      <h2>{category}</h2>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
