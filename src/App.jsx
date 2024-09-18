import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header';
import Contenido from './components/Contenido';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import './estilo.css'; 


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
    <Contenido />
    <ImageGallery />
    <Footer />
  </div>
  )
}

export default App
