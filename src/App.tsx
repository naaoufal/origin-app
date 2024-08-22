import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import NavbarComp from './components/NavBarComp';

function App() {
  return (
    <>
      <NavbarComp />
      <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomeScreen} /> {/* 👈 Renders at /app/ */}
            {/* <Route path="/comment" Component={CommentScreen} />
            <Route path="/product" Component={ProductScreen} /> */}
            {/* <Route path="/courses" Component={CoursesScreen} />
            <Route path="/logIn" Component={RegisterScreen} /> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
