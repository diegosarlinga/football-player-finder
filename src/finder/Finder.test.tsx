import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Finder } from './Finder';

const defaultProps = {
  fetchFootballPlayers: jest.fn(),
  filterFootballPlayers: jest.fn(),
  isLoading: false,
  error: false,
  footballPlayers: [],
  positions: [],
  activeFilter: {}
}
describe('Finder component tests', () => {
  let wrapper: ShallowWrapper;

  describe('when rendered with default props', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
      };
      wrapper = shallow(<Finder {...props}></Finder>)
    });

    it('should fetch players', () => {
      expect(defaultProps.fetchFootballPlayers).toHaveBeenCalledTimes(1);
    });
  });

  describe('when rendered with players and filter', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        positions: ['Pos 1', 'Pos 2'],
        activeFilter: {
          name: 'Pos',
          positions: 'Pos 1',
          age: 29
        },
        footballPlayers: [{
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
        }]
      };
      wrapper = shallow(<Finder {...props}></Finder>)
    });

    it('should match normal state snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when rendered and is loading', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        isLoading: true,
      };
      wrapper = shallow(<Finder {...props}></Finder>)
    });

    it('should match loading state snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when rendered error state', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        error: true,
      };
      wrapper = shallow(<Finder {...props}></Finder>);
    });

    it('should match error state snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
