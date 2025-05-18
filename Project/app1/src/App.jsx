import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; 
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePages";
import ProfileSettings from "./pages/ProfileSetting";
import Admin from "./pages/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import FavoritesPage from "./pages/FavoritesPage";


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="main-content">

        <main>
        <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />

            <Route path="/movie-details" element={<MovieDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/profile" element={<ProfilePage />}>
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
         <Route path="*" element={<NotFoundPage />} />
         <Route path="/favorites" element={<FavoritesPage />} />

          </Routes>
        </main>

        <Footer />
      </div>
      </div>
  </Router>
  );
}

export default App;
