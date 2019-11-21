import { filteredFootballPlayerListSelector } from './selectors';
import { FootballPlayerFilter } from './finder-state';

describe('Finder selectors tests', () => {
  describe('filteredFootballPlayerListSelector', () => {
    test('should return empty when list is undefined', () => {
      const list = undefined;
      const filter: FootballPlayerFilter = {
        name: '',
        position: '',
        age: undefined
      };
      const result = filteredFootballPlayerListSelector.resultFunc(filter, list);
      expect(result).toEqual([]);
    });

    test('should return empty when not matching elements', () => {
      const list = [{
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
      }, {
        contractUntil: "2020-06-30",
        dateOfBirth: "1997-02-02",
        jerseyNumber: 43,
        name: "Cameron Borthwick-Jackson",
        nationality: "England",
        position: "Left-Back",
      }];
      const filter: FootballPlayerFilter = {
        name: 'asdf',
        position: '',
        age: undefined
      };
      const result = filteredFootballPlayerListSelector.resultFunc(filter, list);
      expect(result).toEqual([]);
    });

    test('should return all elements when filter are empty', () => {
      const list = [{
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
      }, {
        contractUntil: "2020-06-30",
        dateOfBirth: "1997-02-02",
        jerseyNumber: 43,
        name: "Cameron Borthwick-Jackson",
        nationality: "England",
        position: "Left-Back",
      }];
      const filter: FootballPlayerFilter = {
        name: '',
        position: '',
        age: undefined
      };
      const result = filteredFootballPlayerListSelector.resultFunc(filter, list);
      expect(result).toEqual(list);
    });

  });
});
