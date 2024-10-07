import './App.css'
import Navbar from './navbar/navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './home/home'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no';

    document.head.appendChild(viewportMeta);

    return () => {
      document.head.removeChild(viewportMeta);
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
