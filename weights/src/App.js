import React from 'react';
import Navbar from './components/navbar'
import Shell from './components/shell'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shell />
    </div>
  );
}

export default App;
