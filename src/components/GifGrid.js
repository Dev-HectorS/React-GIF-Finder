import React, { useEffect, useState } from 'react';

import GifGridCard from './GifGridCard';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data:gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      { loading && <p className="animate__animated animate__flash">Searching...</p> }

      <div className="card-grid">
        { 
          gifs.map((img) => (
            <GifGridCard key={img.id} {...img} />
          ))
        }
      </div>
    </>
  );
};

export default GifGrid;
