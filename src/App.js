import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login/Login';
import Main from './views/Main/Main';

const logedIn = ()=>{

  let user = localStorage.getItem('user')

  return user ? true : false;
}

export default function App() {
  // console.log(logedIn())
  return logedIn() ? (<><Main /></>) : (<><Login /></>); 
}