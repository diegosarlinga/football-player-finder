import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LoadingIndicator from './Loading-indicator';

describe('LoadingIndicator component tests', () => {
  let wrapper: ShallowWrapper;

  describe('when rendered', () => {
    beforeEach(() => {
      wrapper = shallow(<LoadingIndicator/>);
    });
  
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });
});
