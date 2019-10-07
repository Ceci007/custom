import React, { Fragment } from 'react';
import Navbar from './components/navbar';
import MainContent from './components/mainContent';
import './App.scss';

function App() {
  return (
    <Fragment>
      <Navbar />
      <MainContent />
    </Fragment>
  );
}

export default App;
