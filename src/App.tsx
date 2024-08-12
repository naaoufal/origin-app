import React from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <h1>
        Home Page
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default App;
