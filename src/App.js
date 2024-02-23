import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';

import './App.css';
import Login from './components/Login';
import TableBook from './components/TableBook';
import FullMenu from './components/FullMenu/FullMenu';


const App = () => (
  
 <div>
 <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/book-table' element={<TableBook />} />
        <Route exact path='/full-menu' element={<FullMenu />} />
        <Route exact path='/' element={[<Navbar />,<Header />,<AboutUs />,<SpecialMenu />,<Chef />,<Intro />,<Laurels />,<Gallery />,<FindUs />,<Footer />]}></Route> 
       
      </Routes>
   
  </BrowserRouter> 
 
 
</div>
);

export default App;
