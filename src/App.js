import React from 'react';
import Header from './components/Header';
import Workspace from './components/Workspace';
import Footer from './components/Footer';

import './App.css'; // Stylesheet for projects is assigned in this file
import './Utilities.css';

const App = () => {
  return (
    <div>
      <Header header_title="Budget Buddy" />
      <Workspace />
      <Footer project_title="Budget Buddy" name="Jerrick Beard" year="2020" />
    </div>
  );
};

export default App;
