import React from 'react'
import Header from "./components/Header"
import MainBody from './components/MainBody';
import './App.css'
import Sell from './components/Sell';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Register from './components/Register';

export default function App() {

  return (
    <div>
      <Header />
       {/* <MainBody /> */}
      <Sell/>
      {/* <Register/> */}
    </div>
  );
}
