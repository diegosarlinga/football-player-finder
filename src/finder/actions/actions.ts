import {
  FETCH_FOOTBALL_PLAYERS_PENDING,
  FetchFootballPlayersPendingAction,
  FetchFootballPlayersSuccessAction,
  FetchFootballPlayersFailAction,
  FETCH_FOOTBALL_PLAYERS_SUCCESS,
  FETCH_FOOTBALL_PLAYERS_FAIL,
  FilterFootballPlayersAction,
  FILTER_FOOTBALL_PLAYERS,
} from './action-types';
import { getFootballPlayersRequest } from '../services';
import { FootballPlayer, FootballPlayerFilter } from '../store/finder-state';

export function fetchFootballPlayers() {
  return (dispatch: (action: any) => void) => {
    dispatch(fetchFootballPlayersPending());

    return getFootballPlayersRequest().then(
      (response: any) => dispatch(fetchFootballPlayersSuccess(response)),
      (error: any) => dispatch(fetchFootballPlayersFail(error))
    );
  };
}

function fetchFootballPlayersPending(): FetchFootballPlayersPendingAction {
  return {
    type: FETCH_FOOTBALL_PLAYERS_PENDING,
  }
}

function fetchFootballPlayersSuccess(footballPlayers: Array<FootballPlayer>): FetchFootballPlayersSuccessAction {
  return {
    type: FETCH_FOOTBALL_PLAYERS_SUCCESS,
    payload: footballPlayers,
  };
}

function fetchFootballPlayersFail(error: any): FetchFootballPlayersFailAction {
  return {
    type: FETCH_FOOTBALL_PLAYERS_FAIL,
    payload: error,
  };
}

export function filterFootballPlayers(filter: FootballPlayerFilter): FilterFootballPlayersAction {
  return {
    type: FILTER_FOOTBALL_PLAYERS,
    payload: filter,
  };
}