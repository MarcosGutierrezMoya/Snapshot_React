import './App.css';
import React from 'react';
import Buttons from './components/Buttons';
import PhotoContextProvider from './context/PhotoContext';
import InputSearch from './components/Input';
import Images from './components/Img';
import ImgTitle from './components/ImgTitle';
import { 
	BrowserRouter as Router, 
	Route
} from "react-router-dom";

function App() {

  return (
    <PhotoContextProvider>
        <Router>
          <div className="App">
          <h1 id="title">Snapshot</h1>
          <InputSearch />
          <Buttons />
          <ImgTitle />
          <Images />
          </div>
        </Router>
    </PhotoContextProvider>
  );
}

export default App;
