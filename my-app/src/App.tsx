import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './Routes';
import Home from './components/pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS (includes Popper.js)
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';



function App() {
  return (
    <div style={{backgroundColor:"#f6f6f6"}}>
    <Header/>
    <Home />
    <Footer/>
    </div>
    
  );
}

export default App;
