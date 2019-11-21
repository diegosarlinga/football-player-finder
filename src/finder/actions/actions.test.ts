import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { filterFootballPlayers, fetchFootballPlayers } from './actions';
import { FootballPlayerFilter } from '../store/finder-state';
import { FILTER_FOOTBALL_PLAYERS, FETCH_FOOTBALL_PLAYERS_PENDING, FETCH_FOOTBALL_PLAYERS_SUCCESS, FETCH_FOOTBALL_PLAYERS_FAIL } from './action-types';
import { getFootballPlayersRequest } from '../services/football-player-service';

jest.mock('../services/football-player-service');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockedGetFootballPlayersRequest = getFootballPlayersRequest as jest.Mock<ReturnType<typeof getFootballPlayersRequest>>;

describe('Actions tests', () => {
  describe('filterFootballPlayers action', () => {
    it('should create filter action', () => {
      const store = mockStore({});
      const mockFilter: FootballPlayerFilter = {
        name: 'john',
        position: 'Keeper',
        age: 12,
      };

      store.dispatch(filterFootballPlayers(mockFilter));

      expect(store.getActions()).toEqual([{
        type: FILTER_FOOTBALL_PLAYERS,
        payload: mockFilter,
      }]);
    });
  });

  describe('fetchFootballPlayers action', () => {
    afterEach(() => {
      mockedGetFootballPlayersRequest.mockRestore();
    });

    test('should dispatch loading action', () => {
      const store = mockStore({});
      mockedGetFootballPlayersRequest.mockReturnValue(new Promise(() => {}));

      store.dispatch(fetchFootballPlayers());

      expect(store.getActions()).toEqual([{
        type: FETCH_FOOTBALL_PLAYERS_PENDING,
      }]);
    });

    test('should dispatch loading and success action when get billing info success', (done) => {
      const store = mockStore({});
      const mockPlayers= [{
        contractUntil: "2020-06-30",
        dateOfBirth: "1997-02-02",
        jerseyNumber: 43,
        name: "Cameron Borthwick-Jackson",
        nationality: "England",
        position: "Left-Back",
        age: 25
      }, {
        contractUntil: "2021-06-30",
        dateOfBirth: "1996-12-08",
        jerseyNumber: 39,
        name: "Scott McTominay",
        nationality: "Scotland",
        position: "Attacking Midfield",
        age: 25
      }];
      mockedGetFootballPlayersRequest.mockResolvedValue(mockPlayers);

      store.dispatch(fetchFootballPlayers()).then(() => {
        expect(store.getActions()).toEqual([{
          type: FETCH_FOOTBALL_PLAYERS_PENDING
        }, {
          type: FETCH_FOOTBALL_PLAYERS_SUCCESS,
          payload: mockPlayers
        }]);

        done();
      });
    });

    test('should dispatch loading and failed action when get billing info fails', (done) => {
      const store = mockStore({});
      const mockError = 'error message';
      mockedGetFootballPlayersRequest.mockRejectedValue(mockError);

      store.dispatch(fetchFootballPlayers()).then(() => {
        expect(store.getActions()).toEqual([{
          type: FETCH_FOOTBALL_PLAYERS_PENDING,
        }, {
          type: FETCH_FOOTBALL_PLAYERS_FAIL,
          payload: mockError
        }]);

        done();
      });
    });

  });
});