import { calculateAge } from './date-utils';

describe('date utils tests', () => {
  let formerNow: () => number;
  beforeEach(() => {
    formerNow = Date.now;
    Date.now = () => 1487076708000 //14.02.2017
  });

  afterEach(() => {
    Date.now = formerNow;
  });

  const testCases = [{
    caseName: 'is the day before bithday',
    birthDate: '1996-02-15',
    expectedAge: 20,
  },{
    caseName: 'is the day after bithday',
    birthDate: '1996-02-13',
    expectedAge: 21,
  },{
    caseName: 'is the bithday',
    birthDate: '1996-02-14',
    expectedAge: 21,
  }];

  testCases.forEach((testCase) => {
    const { birthDate, caseName, expectedAge } = testCase;
    it(`should return ${expectedAge} when ${caseName}`, () => {
      const age = calculateAge(birthDate);

      expect(age).toBe(expectedAge);
    });

  });

});