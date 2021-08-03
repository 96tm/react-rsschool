import React from 'react';
import './Content.css';
import Description from './description/Description';
import Agent from './agent/Agent';

interface IContentProps {
  descriptionTitle: string;
  descriptionText: string;
  agentLogo: string;
}

export default function Content({
  descriptionTitle,
  descriptionText,
  agentLogo,
}: IContentProps): JSX.Element {
  return (
    <div className="RealEstateCard__Content">
      <Description title={descriptionTitle} text={descriptionText} />
      <Agent src={agentLogo} />
    </div>
  );
}
