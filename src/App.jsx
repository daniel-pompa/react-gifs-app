import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

function App() {
  /* Create categories state.
  It starts as an empty array and will be filled with what the user types in the form */
  const [categories, setCategories] = useState(['Dragon Ball']);

  const handleAddCategory = newCategory => {
    // Validate that categories are not repeated
    const categoryExists = categories.find(element => {
      return element.toLowerCase() === newCategory.toLowerCase();
    });

    if (categoryExists) return;

    // Update the state of categories with the new category
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif App</h1>

      {/* Form */}
      <AddCategory onNewCategory={e => handleAddCategory(e)} />

      {/* Gifs List */}
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default App;
