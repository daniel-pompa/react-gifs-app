import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  // Function to capture the value of what the user types in the form.
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  /* Function that executes when the user submits the form.
  Update the main state in App.jsx by adding the category */
  const handleSubmit = e => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    onNewCategory(newInputValue); // Emit event to the parent component App.jsx
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;
