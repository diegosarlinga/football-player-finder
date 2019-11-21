import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ErrorMessage from './Error-message';

describe('ErrorMessage component tests', () => {
  let wrapper: ShallowWrapper;

  describe('when rendered with no props', () => {
    beforeEach(() => {
      wrapper = shallow(<ErrorMessage/>);
    });
  
    it('should match default snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('when rendered with props', () => {
    beforeEach(() => {
      const props = {
        title: 'Error title',
        text: 'Ups, something went really wrong'
      };
      wrapper = shallow(<ErrorMessage {...props}/>);
    });
  
    it('should match custom text snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});
