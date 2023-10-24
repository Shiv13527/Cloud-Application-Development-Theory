import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './VideoCard.css'
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import { database } from './firebase';

function App() {
  return (<div >

    <Routes>
      <Route path="/" element={<Auth />} />
      <Route
        path="/home"
        element={<Home className="app" database={database} />}
      >
      </Route>
    </Routes>
  </div>
  );
}
//a
export default App;