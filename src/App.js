import React from 'react';
import './App.css';
import Header from './components/topPage/Header';
import DashBoard from './components/centerPage/DashBoard';
import FloatingBar from './components/rightPage/FloatingBar';

function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <FloatingBar />
    </>
  );
}

export default App;
