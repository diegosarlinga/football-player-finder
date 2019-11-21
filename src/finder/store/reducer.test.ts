import reducer from './reducer';
import {
  FETCH_FOOTBALL_PLAYERS_PENDING,
  FETCH_FOOTBALL_PLAYERS_SUCCESS,
  FETCH_FOOTBALL_PLAYERS_FAIL,
  FILTER_FOOTBALL_PLAYERS,
  FetchFootballPlayersPendingAction,
  FetchFootballPlayersSuccessAction,
  FetchFootballPlayersFailAction,
  FilterFootballPlayersAction,
} from '../actions/action-types';
import availablePositions from './positions.json';
import { FinderState, FootballPlayerFilter } from './finder-state';

describe('Finder reducer tests', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual({
      activeFilter: {},
      footballPlayers: [],
      positions: availablePositions,
      isLoading: false,
    });
  });

  test('should handle FETCH_FOOTBALL_PLAYERS_PENDING', () => {
    const initialState: FinderState = {
      activeFilter: {},
      footballPlayers: [],
      positions: availablePositions,
      isLoading: false,
    };
    const action: FetchFootballPlayersPendingAction = {
      type: FETCH_FOOTBALL_PLAYERS_PENDING,
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: true,
      error: null,
    });
  });

  test('should handle FETCH_FOOTBALL_PLAYERS_SUCCESS', () => {
    const initialState: FinderState = {
      activeFilter: {},
      footballPlayers: [],
      positions: availablePositions,
      isLoading: true,
      error: false,
    };
    const mockData = [{
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
    }, {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
    }];
    const action: FetchFootballPlayersSuccessAction = {
      type: FETCH_FOOTBALL_PLAYERS_SUCCESS,
      payload: mockData
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: false,
      error: null,
      footballPlayers: mockData
    });
  });

  test('should handle FETCH_FOOTBALL_PLAYERS_FAIL', () => {
    const initialState: FinderState = {
      activeFilter: {},
      footballPlayers: [],
      positions: availablePositions,
      isLoading: true,
      error: false,
    };
    const mockError = 'some error';
    const action: FetchFootballPlayersFailAction = {
      type: FETCH_FOOTBALL_PLAYERS_FAIL,
      payload: mockError
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: false,
      error: mockError
    });
  });

  test('should handle FILTER_FOOTBALL_PLAYERS', () => {
    const initialState: FinderState = {
      activeFilter: {},
      footballPlayers: [],
      positions: availablePositions,
      isLoading: false,
      error: null,
    };
    const mockFilter: FootballPlayerFilter = {
      name: 'some',
      position: '',
      age: 12
    };
    const action: FilterFootballPlayersAction = {
      type: FILTER_FOOTBALL_PLAYERS,
      payload: mockFilter
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: false,
      error: null,
      activeFilter: mockFilter
    });
  });
})