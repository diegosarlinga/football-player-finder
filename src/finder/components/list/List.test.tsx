import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import List from './List';

describe('List component tests', () => {
  let wrapper: ReactWrapper;

  describe('when rendered with elements', () => {
    beforeEach(() => {
      const props = {
        footballPlayers: [{
          contractUntil: "2020-06-30",
          dateOfBirth: "1997-02-02",
          jerseyNumber: 43,
          name: "Cameron Borthwick-Jackson",
          nationality: "England",
          position: "Left-Back",
          age: 29,
        }, {
          contractUntil: "2020-06-30",
          dateOfBirth: "1997-02-02",
          jerseyNumber: 43,
          name: "Cameron Borthwick-Jackson",
          nationality: "England",
          position: "Left-Back",
          age: 29,
        }, {
          contractUntil: "2020-06-30",
          dateOfBirth: "1997-02-02",
          jerseyNumber: 43,
          name: "Cameron Borthwick-Jackson",
          nationality: "England",
          position: "Left-Back",
          age: 29,
        }]
      };
      wrapper = mount(<List {...props}/>);
    });
  
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when rendered with no elements', () => {
    beforeEach(() => {
      const props = {
        footballPlayers: []
      };
      wrapper = mount(<List {...props}/>);
    });
  
    it('should match empty state snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});
