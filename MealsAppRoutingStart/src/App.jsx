import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

import './App.css'
import Meal from './pages/Meal';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import MealDetails from './components/MealDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={(<Home/>)}/>
        <Route path='*' element={(<NotFound/>)}/>
        <Route path='/Meal/:id' element={(<MealDetails/>)}/>

        <Route path='/Admin' element={
          <ProtectedRoute>
          <Admin />
         </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;