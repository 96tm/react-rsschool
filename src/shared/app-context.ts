import React, { MouseEvent } from 'react';
import IPhoto from './models/photo';

interface IAppContext {
  total: number;
  photos: IPhoto[];
  handleSearchClick?: (
    text: string,
    event: MouseEvent<HTMLButtonElement>
  ) => void;
  // handleSettingsClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const AppContext = React.createContext<IAppContext>({
  total: 0,
  photos: [],
});

export default AppContext;
