import { footballPlayerFilterPredicate } from "./football-player-filter-service";

describe('Football player filter service tests', () => {
  const testCases = [{
    caseName: 'match name start',
    expectedResult: true,
    player: {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
      age: 25
    },
    filter: {
      name: 'camer',
      position: '',
      age: undefined,
    }
  }, {
    caseName: 'match name end',
    expectedResult: true,
    player: {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
      age: 25
    },
    filter: {
      name: 'ckson',
      position: '',
      age: undefined,
    }
  }, {
    caseName: 'match name includes',
    expectedResult: true,
    player: {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
      age: 25
    },
    filter: {
      name: 'rthwi',
      position: '',
      age: undefined,
    }
  }, {
    caseName: 'do not match name',
    expectedResult: false,
    player: {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
      age: 25
    },
    filter: {
      name: 'asdf',
      position: '',
      age: undefined,
    }
  }, {
    caseName: 'match position',
    expectedResult: true,
    player: {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
      age: 25
    },
    filter: {
      name: '',
      position: 'Left-Back',
      age: undefined,
    }
  }, {
    caseName: 'match name but not position',
    expectedResult: false,
    player: {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
      age: 25
    },
    filter: {
      name: 'rthwi',
      position: 'Right-Back',
      age: undefined,
    }
  }, {
    caseName: 'match age',
    expectedResult: true,
    player: {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
      age: 25
    },
    filter: {
      name: '',
      position: '',
      age: 25,
    }
  }, {
    caseName: 'do not match age',
    expectedResult: false,
    player: {
      contractUntil: "2020-06-30",
      dateOfBirth: "1997-02-02",
      jerseyNumber: 43,
      name: "Cameron Borthwick-Jackson",
      nationality: "England",
      position: "Left-Back",
      age: 25
    },
    filter: {
      name: '',
      position: '',
      age: 30,
    }
  }];

  testCases.forEach((testCase) => {
    const { player, caseName, expectedResult } = testCase;
    const { name, position, age } = testCase.filter;
    it(`should return ${expectedResult} when ${caseName}`, () => {
      const result = footballPlayerFilterPredicate(player, name, position, age);

      expect(result).toBe(expectedResult);
    });

  });
});