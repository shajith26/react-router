import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import About from './About';
import { BrowserRouter,Routes,Route   } from  "react-router-dom";
import Profile from './Profile';

function Routercomponent(){
  return<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='About' element={<About/>}></Route>
    <Route path='Profile' element={<Profile/>}></Route>
    <Route path='*' element={<div>Not found</div>}></Route>

    <Route></Route>
  </Routes>
  </BrowserRouter> 
    }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routercomponent/>);
