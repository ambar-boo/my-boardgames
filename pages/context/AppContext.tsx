import React, { createContext, useContext, useReducer } from 'react';
import {IGames} from '../types/gamesType'
import { gamesReducer } from './AppReducers';

type InitialStateType = {
  myGames: IGames[];
}

const intialState = {
  myGames: [],
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: intialState,
  dispatch: () => null
});

const mainReducer = ({ myGames }: InitialStateType, action: any) => ({
  myGames: gamesReducer(myGames, action),
});
const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mainReducer, intialState);

  return (
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
  )
}

export { AppContext, AppProvider };