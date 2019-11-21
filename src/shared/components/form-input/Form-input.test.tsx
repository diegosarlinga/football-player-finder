import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FormInput from './Form-input';

describe('FormInput component tests', () => {
  let wrapper: ShallowWrapper;

  describe('when rendered with no props', () => {
    beforeEach(() => {
      wrapper = shallow(<FormInput/>);
    });
  
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when rendered with props', () => {
    let onChangeSpy: jest.Mock;
    beforeEach(() => {
      onChangeSpy = jest.fn();
      const props = {
        label: 'some label',
        value: 'some value',
        name: 'some name',
        type: 'text',
        pattern: '',
        min: '12',
        max: '98',
        className: 'test-class',
        onChange: onChangeSpy,
      };
      wrapper = shallow(<FormInput {...props}/>);
    });
  
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should emit when input change', () => {
      wrapper.find('input').simulate('change');

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
    });

  });
});
