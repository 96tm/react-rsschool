import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import DonationForm from './donation-form/DonationForm';
import IDonationFormState from '../models/IDonationFormState';
import Cards from './cards/Cards';
import IAddCard from '../models/IAddCard';
import Message from './message/Message';

function App() {
  const [state, setState] = useState<{
    cards: IDonationFormState[];
    showNotification: boolean;
  }>({
    cards: [],
    showNotification: false,
  });

  const removeNotification = () => {
    setState((previousState) => ({
      ...previousState,
      showNotification: false,
    }));
  };

  const addCard: IAddCard = (card) => {
    setState((previousState) => ({
      cards: previousState.cards.concat([card]),
      showNotification: true,
    }));
  };

  return (
    <div className="App">
      {state.showNotification ? (
        <Message text="Information saved" remove={removeNotification} />
      ) : null}
      <DonationForm addCard={addCard} />
      <Cards cards={state.cards} />
    </div>
  );
}

export default hot(module)(App);
