import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
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
