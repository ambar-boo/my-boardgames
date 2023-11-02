import React, { createContext, useEffect, useReducer } from 'react';
import {IGames} from '@/types/gamesType'
import { gamesReducer } from './AppReducers';

type InitialStateType = {
  myGames: IGames[];
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
    if(localStorage?.getItem("localMyGames")) {
      const games = JSON.parse(localStorage.getItem("localMyGames"))?.myGames.length > 0 ? JSON.parse(localStorage.getItem("localMyGames")).myGames : [];
      dispatch({
        type: 'INITIAL_GAME',
        games
      })
      console.log(JSON.parse(localStorage.getItem("localMyGames")));
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