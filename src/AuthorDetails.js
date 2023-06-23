import React from 'react';
import { useParams, Link } from "react-router-dom";
import { IMAGES } from './data';


const AuthorDetails = () => {
  let { id } = useParams(); // Pobieramy id z adresu URL
  const author = IMAGES.find(image => image.id === parseInt(id)).author;

  return (
    <div>
      <h2>Informacje o autorze</h2>
      <p>{author}</p>
      <Link to="/">Powrót do galerii</Link>
    </div>
  );
};


export default AuthorDetails