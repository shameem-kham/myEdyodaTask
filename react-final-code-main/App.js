
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accounted from './component-1/Accounted';
import Dashboard from './component-1/Dashboard';
import Footpart from './component-1/Foot';
import Login from './component-1/Login';
import Navigated from './component-1/Navigate';
import Product from './component-1/Product';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navigated header="Contact Admin" color="#567086"/>
    <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='/contactproduct' element={<Product/>}/>
       <Route path='/account' element={<Accounted/>}/>
       <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footpart footing="Copyright © 2018 All rights reserved. Design: Template Mo" color="#567086"/>
    </BrowserRouter>
    </>
  );
}

export default App;
