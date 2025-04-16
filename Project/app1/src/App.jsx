import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
<Router>
  <div>
      <Navbar />

      <main>
          <Routes>
      
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie-details" element={<MovieDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />

         </Routes>
      </main>

      <Footer />

  </div>
</Router>

  );
}

export default App;
