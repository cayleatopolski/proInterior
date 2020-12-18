import React from 'react';
import Nav from './components/navigation/Nav';
import Header from './components/header/Header';
import Tiles from './components/tiles/Tiles';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <Tiles />
      <Footer />
    </div>
  );
}

export default App;
