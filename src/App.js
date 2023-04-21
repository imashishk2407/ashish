
import Home from './pages/home';
import Header from './include/header';
import Footer from './include/footer';
import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Admin from './admin/admin';
// import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<Header />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
<Footer/>
     
    </div>
  );
}



export default App;

