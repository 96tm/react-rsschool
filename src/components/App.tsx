import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import DonationForm from './donation-form/DonationForm';
import IDonationFormState from '../models/IDonationFormState';
import Cards from './cards/Cards';
import IAddCard from '../models/IAddCard';

function App() {
  const [state, setState] = useState<{ cards: IDonationFormState[] }>({
    cards: [],
  });

  const addCard: IAddCard = (card) => {
    setState((previousState) => ({
      cards: previousState.cards.concat([card]),
    }));
  };

  return (
    <div className="App">
      <DonationForm addCard={addCard} />
      <Cards cards={state.cards} />
    </div>
  );
}

export default hot(module)(App);
