import PropTypes from 'prop-types';

const GifItem = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title.toUpperCase()}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default GifItem;
