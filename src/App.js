import React from 'react';
import Header from './components/header.js';
import './style.css';
import Main from './pages/main.js'
import Routes from './routes'


function App() {
  return (
    <div className="App">
    < Header />
    < Routes />
    </div>
  );
}

export default App;
