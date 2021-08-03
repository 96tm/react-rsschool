import React from 'react';
import standardSearchType from 'public/assets/icons/standard.png';
import documentSearchType from 'public/assets/icons/document.png';
import imageSearchType from 'public/assets/icons/image.png';
import videoSearchType from 'public/assets/icons/video.png';
import './SearchOptions.css';
import SearchLocation from '../search-location/SearchLocation';
import SearchType from '../search-type/SearchType';

export default function SearchOptions(): JSX.Element {
  const searchLocations = [
    {
      id: 'local',
      value: 'local',
      text: 'Search here',
    },
    { id: 'web', value: 'web', text: 'Search the Web' },
  ];
  const searchTypes = [
    {
      id: 'SearchType__SearchType-standard',
      value: 'standard',
      icon: standardSearchType,
    },
    {
      id: 'SearchType__SearchType-image',
      value: 'image',
      icon: imageSearchType,
    },
    {
      id: 'SearchType__SearchType-document',
      value: 'document',
      icon: documentSearchType,
    },
    {
      id: 'SearchType__SearchType-video',
      value: 'video',
      icon: videoSearchType,
    },
  ];
  return (
    <div className="SearchBar__SearchOptions">
      <SearchLocation searchLocations={searchLocations} />
      <SearchType searchTypes={searchTypes} />
    </div>
  );
}
