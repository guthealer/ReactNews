import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

import Navbar from './components/AppBar';
import { Route, Routes } from 'react-router';


import Home from './pages/Home';
import Entertainment from './pages/Entertainment';
import Health from './pages/Health';
import Sport from './pages/Sport';
import Technology from './pages/Technology';
import Science from './pages/Science';
import General from './pages/General';




function App() {

  const [name, setName] = useState("phone");

  // fetch('https://dummyjson.com/products/search?q=phone')
  // .then(res => res.json())
  // .then(console.log);

  const q = 'phone'
    async function fetchdata(q){
      const x = name;
      console.log(x)
      try{
       
        fetch("https://dummyjson.com/products/search?q="+ x)
        .then(res => res.json())
   .then(console.log);
   console.log(name)
      }

      catch(error){
        console.log(error)
      }
    }


  return (
    <div className="App">

      <Navbar/>
      <br/>

      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='Entertainment' element={<Entertainment/>}/>
         <Route path='Health' element={<Health/>}/>
         <Route path='sport' element={<Sport/>}/>
         <Route path='Technology' element={<Technology/>}/>
         <Route path='Science' element={<Science/>}/>
         <Route path='General' element={<General/>}/>
      </Routes>
  
  <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="button" onClick={(e)=>fetchdata(e)}>click</button>
{name}
   
    </div>
  );
}

export default App;
