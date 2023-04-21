import React, { type PropsWithChildren } from 'react';
import GlobalContext from './globalContext';
import useWindowSize from 'helpers/customHooks/useWindowSize';

function GlobalProvider({ children }: PropsWithChildren): JSX.Element {
  const windowSize = useWindowSize();

  const context = { windowSize };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
