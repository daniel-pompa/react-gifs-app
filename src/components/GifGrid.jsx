import PropTypes from 'prop-types';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {isLoading && <h3>Cargando...</h3>}

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
