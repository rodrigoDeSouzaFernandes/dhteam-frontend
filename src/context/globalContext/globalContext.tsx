import { createContext } from 'react';

import { type Size } from 'types/windowSizeInterfaces';

interface IGlobalContext {
  windowSize: Size;
}

const windowSize: Size = { isMobile: false, width: 0, height: 0 };

const GlobalContext = createContext<IGlobalContext>({
  windowSize,
});

export default GlobalContext;
