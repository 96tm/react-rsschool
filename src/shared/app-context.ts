import React, { MouseEvent } from 'react';

interface IAppContext {
  total: number;
  handleSearchClick?: (
    text: string,
    event: MouseEvent<HTMLButtonElement>
  ) => void;
}

const AppContext = React.createContext<IAppContext>({
  total: 0,
});

export default AppContext;
