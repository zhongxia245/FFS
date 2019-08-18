import React from 'react';
import { AppContextProvider } from '../context';

export default ({ children }: any) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};
