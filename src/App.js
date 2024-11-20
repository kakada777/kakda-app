/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Read2 from './pages/Read2';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shoes from './pages/Shoes';
import Contact from './pages/Contact';



function App() {
  return (
    <>  
    <Navbar/>
      <Routes>
        <Route path='./' element={<Home/>} />
        <Route path='./home' element={<Home/>} />
        <Route path='./read/:id' element={<Read2/>}/>
        <Route path='./about-us' element={<About/>}/>
        <Route path='./contact' element={<Contact/>}/>
        <Route path='./shoes' element={<Shoes/>}/>
      </Routes>   
    <Footer/> 
    
    </>   
  );
}

export default App;
