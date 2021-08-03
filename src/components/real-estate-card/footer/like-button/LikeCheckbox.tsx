import React from 'react';
import './LikeCheckbox.css';

export default function LikeCheckbox({
  cardId,
}: {
  cardId: string;
}): JSX.Element {
  const checkbox: React.RefObject<HTMLInputElement> = React.createRef();
  return (
    <label
      htmlFor={`RealEstateCard__LikeCheckbox${cardId}`}
      className="RealEstateCard__LikeCheckboxLabel"
    >
      <input
        type="checkbox"
        className="RealEstateCard__LikeCheckbox"
        id={`RealEstateCard__LikeCheckbox${cardId}`}
        ref={checkbox}
      />
      <span className="RealEstateCard__LikeCheckboxIcon" />
    </label>
  );
}
