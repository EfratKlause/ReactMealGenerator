import React from 'react';
import Header from '../src/Header';
import Menu from '../src/Menu';
import Filter from '../src/Filter';
import CardList from '../src/CardList';
import Footer from '../src/Footer';
import './App.css';

function App() {
  return (
    <div>
       <Header />
       <Menu />
       <CardList />
       <Footer />
    </div>
  );
}

export default App;
