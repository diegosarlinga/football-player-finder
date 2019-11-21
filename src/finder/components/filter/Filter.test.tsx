import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Filter from './Filter';

describe('Filter component tests', () => {
  let wrapper: ShallowWrapper;
  let onFilterSpy: jest.Mock;
  beforeEach(() => {
    onFilterSpy = jest.fn();
    const props = {
      activeFilter: {
        name: 'qwe',
        position: 'Central Midfield',
        age: 12
      },
      positions: [ 'Attacking Midfield', 'Central Midfield', 'Centre-Back' ],
      onFilter: onFilterSpy
    };
    wrapper = shallow(<Filter {...props}/>);
  });

  it('renders with given filters', () => {
    expect(wrapper.find('[name="nameCriteria"]').prop('value')).toBe('qwe');
    expect(wrapper.find('[name="position"]').prop('value')).toBe('Central Midfield');
    expect(wrapper.find('[name="age"]').prop('value')).toBe('12');
  });

  describe('when filters changed and search is clicked', () => {
    beforeEach(() => {
      wrapper.find('[name="nameCriteria"]').simulate('change', { target: { value: 'new', name: 'nameCriteria' }});
      wrapper.find('[name="position"]').simulate('change', { target: { value: 'Centre-Back', name: 'position' }});
      wrapper.find('[name="age"]').simulate('change', { target: { value: '24', name: 'age' }});
      wrapper.find('form').simulate('submit', { preventDefault: () => {} });
      
    });

    it('should emit onFilter', () => {
      expect(onFilterSpy).toHaveBeenCalledTimes(1);
      expect(onFilterSpy).toHaveBeenCalledWith({
        name: 'new',
        position: 'Centre-Back',
        age: 24
      });
    });
  });
});
