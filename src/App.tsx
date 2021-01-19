import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import './App.css'
import { Services } from './components/Services';

function App() {
  return (
    <div>
     <Header />
     <Services />
    </div>
  );
}

export default App;
