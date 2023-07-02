import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Chooser from './Components/Chooser';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Dashboard from './Components/Pages/Dashboard';
import Categories from './Components/Pages/Categories';
import Products from './Components/Pages/Products';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chooser' element={<Chooser/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/stocks' element={<Products/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
