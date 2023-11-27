import {GameInfo} from "@/types/gamesType";

export const gamesReducer = (state:GameInfo[], action: any) => {
  console.log('myGames', state, action);
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
    case 'ADD_STATISTICS_GAME':
      return state.map(game => {
        if (game.alias === action.info.alias) {
          game.statistics = action.info.statistics.dates;
        }
        return game;
      })
    case 'REMOVE_GAME':
      return state.filter(game => game.alias !== action.alias)
    default:
      return state;
  }
}