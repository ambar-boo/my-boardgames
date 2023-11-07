import {IGames} from "@/types/gamesType";

export const gamesReducer = (state:IGames[], action: any) => {
  switch (action.type) {
    case 'INITIAL_GAME':
      return [
        ...action.games,
      ]
    case 'ADD_GAME':
      return [
        ...state,
        action.game
      ]
    case 'REMOVE_GAME':
      return state.filter(game => game.alias !== action.alias)
    default:
      return state;
  }
}