import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import './App.css'
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';

function App() {
  return (
    <div>
     <Header />
     <Services />
     <Portfolio />
     <Team />
    </div>
  );
}

export default App;
