import React from 'react';

const CardComponent = ({ imageUrl, altText, cardTitle }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={altText} />
      <div className="card-body">
        <p className="card-text">{cardTitle}</p>
      </div>
    </div>
    
  );
}

export default CardComponent;
