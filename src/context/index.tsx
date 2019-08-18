import React, { useState } from 'react';

export const AppContext = React.createContext({});

export interface IAppContext {
  data: any;
  setData: Function;
}

export const AppContextProvider = ({ children }: any) => {
  // 修改状态
  const setData = (data: any) => {
    setState(prevState => {
      return { ...prevState, data };
    });
  };

  const initAppState: IAppContext = {
    data: {},
    setData,
  };
  const [state, setState] = useState(initAppState);
  window.ffsData = state;

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
