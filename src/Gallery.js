import React, { useState } from 'react';
import { Link } from "react-router-dom";
import StarRating from './StarRating';
import { IMAGES } from './data';


const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(IMAGES[0]);
  const [rating, setRating] = useState(currentImage.score);
  
  const handleNext = () => {
    const currentIndex = IMAGES.indexOf(currentImage);
    const nextImage = IMAGES[currentIndex + 1];
    if (nextImage) {
      setCurrentImage(nextImage);
      setRating(nextImage.score);
    }
  };

  const handlePrevious = () => {
    const currentIndex = IMAGES.indexOf(currentImage);
    const prevImage = IMAGES[currentIndex - 1];
    if (prevImage) {
      setCurrentImage(prevImage);
      setRating(prevImage.score);
    }
  };
  
  const handleRate = (rate) => {
    currentImage.score = rate;
    setRating(rate);
  };

  return (
    <div className="App">
      <h1>Galeria zdjęć</h1>
      <img src={currentImage.link} alt="obraz" />
      <p>Autor: {currentImage.author}</p>
      <Link to={`/author/${currentImage.id}`}>Szczegóły autora</Link>
      <p>Data dodania: {currentImage.date}</p>
      <p>Średnia ocena: {rating.toFixed(2)}</p>
      <StarRating max={5} rating={rating} onRate={handleRate} />
      <a href={currentImage.link}>Szczegóły zdjęcia</a>
      {IMAGES.indexOf(currentImage) > 0 && <button onClick={handlePrevious}>{"<"}</button>}
      {IMAGES.indexOf(currentImage) < IMAGES.length - 1 && <button onClick={handleNext}>{">"}</button>}
    </div>
  );
};


export default Gallery