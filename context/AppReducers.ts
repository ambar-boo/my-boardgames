import {IGames} from "@/types/gamesType";

export const gamesReducer = (state:IGames[], action: any) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.game
      ]
    // case 'DELETE_PRODUCT':
    //   return [
    //     ...state.filter(product => product.id !== action.payload.id),
    //   ]
    default:
      return state;
  }
}