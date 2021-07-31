import React from 'react';
import './Agent.css';

export default function Agent({ src }: { src: string }): JSX.Element {
  return (
    <div className="RealEstateCard__AgentContainer">
      <img className="RealEstateCard__AgentLogo" src={src} alt="Agent logo" />
    </div>
  );
}
