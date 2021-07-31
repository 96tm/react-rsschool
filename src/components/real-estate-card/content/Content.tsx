import React from 'react';
import Description from './description/Description';
import Agent from './agent/Agent';
import Footer from '../footer/Footer';

export default function Content(): JSX.Element {
  return (
    <div className="RealEstateCardContent">
      <Description />
      <Agent />
      <Footer />
    </div>
  );
}
