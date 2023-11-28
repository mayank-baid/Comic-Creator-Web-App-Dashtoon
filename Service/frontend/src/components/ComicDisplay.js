import React from 'react';

const ComicDisplay = ({ images }) => (
  <div className="comic-images">
    {images.map((image, index) => (
      <img key={index} src={`data:image/png;base64,${image}`} alt={`Comic Panel ${index + 1}`} />
    ))}
  </div>
);

export default ComicDisplay;
