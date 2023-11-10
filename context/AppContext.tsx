import React, { createContext, useEffect, useReducer } from 'react';
import {GameInfo} from '@/types/gamesType'
import { gamesReducer } from './AppReducers';

type InitialStateType = {
  myGames: GameInfo[];
}

let intialState = {
  myGames: []
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

  useEffect(() => {
    const localMyGames = localStorage?.getItem('localMyGames') || null;
    if(localMyGames && JSON.parse(localMyGames)?.myGames.length > 0) {
      const games = JSON.parse(localMyGames).myGames;
      dispatch({
        type: 'INITIAL_GAME',
        games
      })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localMyGames", JSON.stringify(state));
  }, [state]);

  return (
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
  )
}

export { AppContext, AppProvider };