import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import SearchBar from './search-bar/SearchBar';
import RealEstateCard from './real-estate-card/RealEstateCard';
import { IRealEstateCardProps } from './real-estate-card/interfaces/IRealEstateCardProps';

interface IAppState {
  cards: IRealEstateCardProps[];
}

function App() {
  const [state, setState] = useState<IAppState>({ cards: [] });
  useEffect(() => {
    fetch('/public/cards.json')
      .then((response) => response.json())
      .then((cards) => setState({ cards }));
  });
  return (
    <div className="App">
      <SearchBar />
      <div className="cards">
        {state.cards.map((card) => (
          <RealEstateCard
            image={card.image}
            price={card.price}
            comment={card.comment}
            descriptionTitle={card.descriptionTitle}
            descriptionText={card.descriptionText}
            agentLogo={card.agentLogo}
            id={card.id}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
}

export default hot(module)(App);
