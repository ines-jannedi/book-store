import React,{ useEffect, useState } from 'react';
import './App.css';
import Navbar from "./navbar";
import Book from './components/Book.jsx';
import Update from './components/Change.jsx';
import Add from './components/Edit.jsx';
import Search from './components/Find.jsx';
import {Route,Routes} from "react-router-dom"



function App() {
 
  return (
    <div className='App'>
    <Navbar/>
  <div className='container'>
<Routes>
<Route path='/' element={<Book/>}/>
<Route path='/update' element={<Update/>}/>
<Route path='/add' element={<Add/>}/>
<Route path='/search' element={<Search/>}/>


</Routes>
    </div>

 </div>
  )
}

export default App;
