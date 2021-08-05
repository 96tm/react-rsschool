import React from 'react';
import './StepPerson.css';
import PersonInfo from '../person-info/PersonInfo';

export default function StepPerson(): JSX.Element {
  return (
    <div className="StepPerson">
      <PersonInfo />
    </div>
  );
}
