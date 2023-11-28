import React, { createContext, useEffect, useReducer } from 'react';
import {GameInfo} from '@/types/gamesType'
import { gamesReducer } from './AppReducers';

let intialState :GameInfo[] = [];

const AppContext = createContext<{
  myGames: GameInfo[];
  dispatch: React.Dispatch<any>;
}>({
  myGames: intialState,
  dispatch: () => null
});

const mainReducer = (myGames:GameInfo[], action: any) => gamesReducer(myGames, action);
const AppProvider = ({ children }: any) => {
  const [myGames, dispatch] = useReducer(mainReducer, intialState);

  useEffect(() => {
    const localMyGames = localStorage?.getItem('localMyGames') || null;
    if(localMyGames && JSON.parse(localMyGames)?.length > 0) {
      const games = JSON.parse(localMyGames);
      dispatch({
        type: 'INITIAL_GAME',
        games
      })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localMyGames", JSON.stringify(myGames));
  }, [myGames]);

  return (
      <AppContext.Provider value={{myGames, dispatch}}>
        {children}
      </AppContext.Provider>
  )
}

export { AppContext, AppProvider };