import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePages';
import ProfileSettings from './pages/ProfileSetting';
import AdminPage from './pages/AdminPage';





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
          <Route path="/admin" element={<AdminPage />} />


          <Route path="/profile" element={<ProfilePage />}>
             <Route path="settings" element={<ProfileSettings />} />
          </Route>


          <Route path="*" element={<NotFoundPage />} />

         </Routes>
      </main>

      <Footer />

  </div>
</Router>

  );
}

export default App;
