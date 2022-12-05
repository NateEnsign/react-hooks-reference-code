import React from 'react'

import Header from './components/Header'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import ReferenceScreen from './screens/ReferenceScreen';

function App() {
  return (
    <div className="App col-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/Reference" element={<ReferenceScreen />}></Route>
        <Route path="/Details/:id" element={<DetailScreen />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
