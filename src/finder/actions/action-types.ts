import { FootballPlayer, FootballPlayerFilter } from "../store/finder-state"

export const FETCH_FOOTBALL_PLAYERS_PENDING = 'FETCH_FOOTBALL_PLAYERS_PENDING'
export const FETCH_FOOTBALL_PLAYERS_SUCCESS = 'FETCH_FOOTBALL_PLAYERS_SUCCESS'
export const FETCH_FOOTBALL_PLAYERS_FAIL = 'FETCH_FOOTBALL_PLAYERS_FAIL'
export const FILTER_FOOTBALL_PLAYERS = 'FILTER_FOOTBALL_PLAYERS'

export interface FetchFootballPlayersPendingAction {
  type: typeof FETCH_FOOTBALL_PLAYERS_PENDING,
}

export interface FetchFootballPlayersSuccessAction {
  type: typeof FETCH_FOOTBALL_PLAYERS_SUCCESS,
  payload: Array<FootballPlayer>,
}

export interface FetchFootballPlayersFailAction {
  type: typeof FETCH_FOOTBALL_PLAYERS_FAIL,
  payload: any,
}

export interface FilterFootballPlayersAction {
  type: typeof FILTER_FOOTBALL_PLAYERS,
  payload: FootballPlayerFilter,
}

export type FinderActionTypes = FetchFootballPlayersPendingAction | FetchFootballPlayersSuccessAction | FetchFootballPlayersFailAction | FilterFootballPlayersAction;
