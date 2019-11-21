import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FormSelect from './Form-select';

describe('FormSelect component tests', () => {
  let wrapper: ShallowWrapper;

  describe('when rendered with no props', () => {
    beforeEach(() => {
      wrapper = shallow(<FormSelect/>);
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
        options: ['opt 1', 'opt 2'],
        className: 'test-class',
        onChange: onChangeSpy,
      };
      wrapper = shallow(<FormSelect {...props}/>);
    });
  
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should emit when select change', () => {
      wrapper.find('select').simulate('change');

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
    });

  });
});
