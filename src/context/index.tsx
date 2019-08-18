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
      return { ...prevState, data: { ...prevState.data, ...data } };
    });
  };

  let cacheData = {};
  try {
    cacheData = JSON.parse(localStorage.getItem('ffs_data') || '{}');
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.warn(`[WARN]:获取缓存的FFS 表单数据失败`, error);
  }

  const initAppState: IAppContext = {
    data: cacheData,
    setData,
  };
  const [state, setState] = useState(initAppState);
  window.ffsData = state;

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
