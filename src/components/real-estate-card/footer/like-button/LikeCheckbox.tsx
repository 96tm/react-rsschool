import React from 'react';
import './LikeCheckbox.css';

export default function LikeCheckbox(): JSX.Element {
  return (
    <label
      htmlFor="RealEstateCard__LikeCheckbox"
      className="RealEstateCard__LikeCheckboxLabel"
    >
      <input
        type="checkbox"
        className="RealEstateCard__LikeCheckbox"
        id="RealEstateCard__LikeCheckbox"
      />
      <span className="RealEstateCard__LikeCheckboxIcon" />
    </label>
  );
}
