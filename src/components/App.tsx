import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import DonationForm from './donation-form/DonationForm';

function App() {
  return (
    <div className="App">
      <DonationForm />
    </div>
  );
}

export default hot(module)(App);
