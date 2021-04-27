import React from 'react';

const GifGridCard = ({ title, url }) => {
  return (
    <>
      <div className="card animate__animated animate__fadeIn animate__delay-1s">
        <img  src={url} alt={title}/>
        <p>{title}</p>
      </div>
    </>
  );
};

export default GifGridCard;
