import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Content from './Content';

describe('Content component tests', () => {
  let wrapper: ShallowWrapper;

  describe('when rendered', () => {
    beforeEach(() => {
      const props = {
        title: 'Content title'
      };
      wrapper = shallow(<Content {...props}/>);
    });
  
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});
