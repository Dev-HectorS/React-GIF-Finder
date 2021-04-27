import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifSearchApp = () => {
  const [categories, setCategories] = useState(['One punch']);

  return (
    <>
      <div id="navbar">
        <h2>Gif Search App</h2>
        <AddCategory setCategories={setCategories} />
      </div>
      <hr />

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  );
};

export default GifSearchApp;
