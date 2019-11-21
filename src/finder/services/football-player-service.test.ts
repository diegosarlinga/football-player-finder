import { getFootballPlayersRequest } from './football-player-service';
import { calculateAge } from '../../shared/utils';

jest.mock('../../shared/utils');
const mockedCalculateAge = calculateAge as jest.Mock<ReturnType<typeof calculateAge>>;

describe('Futbol player service tests', () => {
  let fetchMock: jest.Mock;
  let formerFetch: typeof window.fetch;

  beforeEach(() => {
    formerFetch = window.fetch;
    window.fetch = fetchMock = jest.fn().mockResolvedValue({});
    mockedCalculateAge.mockReturnValue(23);
  });

  afterEach(() => {
    window.fetch = formerFetch;
  });
  test('getFootballPlayersRequest() returns expected value', async () => {
    const mockData = [{
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
    }];

    fetchMock.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData)
    });

    const result = await getFootballPlayersRequest();
    expect(result).toEqual([{
      ...mockData[0],
      age: 23,
    }]);
  });

  test('getFootballPlayersRequest() should fail when fetch fails', (done) => {
    fetchMock.mockResolvedValue({
      ok: false,
      statusText: 'not found'
    });

    getFootballPlayersRequest().then(
      () => {},
      (responseError) => {
        expect(responseError.message).toEqual('not found');
        done();
      }
    );
    
  });

  test('getFootballPlayersRequest() should fail when fetch fails', (done) => {
    const mockError = {
      someMessage: 'test error'
    };
    fetchMock.mockRejectedValue(mockError);

    getFootballPlayersRequest().then(
      () => {},
      (responseError) => {
        expect(responseError).toEqual(mockError);
        done();
      }
    );
    
  });

});