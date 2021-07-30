import React from 'react';
import standardSearchType from 'public/assets/icons/standard.png';
import documentSearchType from 'public/assets/icons/document.png';
import imageSearchType from 'public/assets/icons/image.png';
import videoSearchType from 'public/assets/icons/video.png';
import './SearchForm.css';
import SearchInput from '../search-input/SearchInput';
import SearchButton from '../search-button/SearchButton';
import SearchOptions from '../search-location/SearchLocation';
import SearchType from '../search-type/SearchType';

// interface ISearchFormState {
//   searchType: 'standard' | 'image' | 'video' | 'document';
//   searchOption: 'local' | 'web';
// }

export default function SearchForm(): JSX.Element {
  // const [state, setState] = useState<ISearchFormState>({
  //   searchType: 'standard',
  //   searchOption: 'local',
  // });
  // const handleSearchTypeClick = (event: MouseEvent) => {
  //   console.log('asd');
  // };
  const searchOptions = [
    {
      id: 'SearchBar__SearchOption-local',
      value: 'local',
      text: 'Search here',
    },
    { id: 'SearchBar__SearchOption-web', value: 'web', text: 'Search The Web' },
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
    <div className="SearchBar__SearchForm">
      <SearchInput />
      <SearchButton text="Search" />
      <SearchOptions options={searchOptions} />
      <SearchType searchTypes={searchTypes} />
    </div>
  );
}
