import React, { useState } from 'react';
import './App.css';
import Navbar from "./navbar";
import Book from './components/Book.jsx';
import Update from './components/Change.jsx';
import Add from './components/Post.jsx';
import Onebook from './components/Onebook.jsx';
import Footer from './components/Footerr.jsx'
import About from './components/About us.jsx';
import Privace from "./components/Privacy.jsx"
import {Route,Routes} from "react-router-dom"




function App() {
  const [query,setquery]=useState({})
 
  return (
    <div className='App'>
    <Navbar/>
  <div className='container'>
<Routes>
<Route path='/' element={<Book setquery={setquery}/>}/>
<Route path='/update' element={<Update/>}/>
<Route path='/add' element={<Add/>}/>
<Route path='/onebook' element={<Onebook query={query}/>}/>
<Route path='/footer' element={<Footer/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/privace' element={<Privace/>}/>



</Routes>
    </div>

 </div>
  )
}

export default App;
