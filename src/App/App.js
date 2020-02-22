import React from 'react';
import Header from '../Container/Layout/Header'
import {BrowserRouter} from 'react-router-dom'
import Footer from '../Container/Layout/Footer'
import Routes from './Router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import '../Scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes></Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
