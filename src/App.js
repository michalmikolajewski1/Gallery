import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './Gallery';
import AuthorDetails from './AuthorDetails';
import { IMAGES } from './data';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/author/:id" element={<AuthorDetails />} />
      </Routes>
    </Router>
  );
};


export default App