import { FinderState } from './finder-state'
import availablePositions from './positions.json';
import { FinderActionTypes, FETCH_FOOTBALL_PLAYERS_PENDING, FETCH_FOOTBALL_PLAYERS_SUCCESS, FETCH_FOOTBALL_PLAYERS_FAIL, FILTER_FOOTBALL_PLAYERS } from '../actions/action-types';

const positions = availablePositions as Array<string>;
const initialState: FinderState = {
  activeFilter: {},
  footballPlayers: [],
  positions,
  isLoading: false,
}

export default function finderReducer(
  state = initialState,
  action?: FinderActionTypes
): FinderState {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case FETCH_FOOTBALL_PLAYERS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case FETCH_FOOTBALL_PLAYERS_SUCCESS:
      return {
        ...state,
        footballPlayers: action.payload,
        isLoading: false,
        error: null,
      }
    case FETCH_FOOTBALL_PLAYERS_FAIL:
      return {
        ...state,
        footballPlayers: [],
        isLoading: false,
        error: action.payload,
      }
    case FILTER_FOOTBALL_PLAYERS:
      return {
        ...state,
        activeFilter: action.payload,
      }
    default:
      return state
  }
}