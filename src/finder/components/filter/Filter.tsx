import React from 'react';
import './Filter.scss';
import { FootballPlayerFilter } from '../../store/finder-state';
import { FormInput, FormSelect } from '../../../shared/components';

interface FilterProps {
  activeFilter: FootballPlayerFilter;
  positions: Array<string>;
  onFilter?: (filter: FootballPlayerFilter) => void;
}

function numberToString(value?: number): string {
  if (value !== undefined) {
    return value.toString();
  }
  return '';
}

function stringToNumber(value?: string): number | undefined {
  if (value) {
    return parseInt(value, 10);
  }
  return undefined;
}

class Filter extends React.Component<FilterProps, Record<string, string | undefined>> {
  constructor(props: FilterProps) {
    super(props);
    this.state = {
      nameCriteria: props.activeFilter.name,
      position: props.activeFilter.position,
      age: numberToString(props.activeFilter.age),
    };
  }

  onSearch(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { nameCriteria, position, age } = this.state;
    const filter: FootballPlayerFilter = {
      name: nameCriteria,
      position,
      age: stringToNumber(age),
    }

    this.props.onFilter && this.props.onFilter(filter);
  }

  onInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="d-flex flex-column flex-sm-row align-items-center" autoComplete="off" onSubmit={(e) => this.onSearch(e)}>
        <FormInput className="flex-grow-1" label="Name" type="text" pattern="[A-Za-z]*" name="nameCriteria" value={this.state.nameCriteria} onChange={(e) => this.onInputChange(e)}></FormInput>
        <FormSelect className="flex-grow-1" label="Position" name="position" value={this.state.position} onChange={(e) => this.onInputChange(e)} options={this.props.positions}></FormSelect>
        <FormInput className="flex-grow-1" label="Age" type="number" name="age" min="18" max="40" value={this.state.age} onChange={(e) => this.onInputChange(e)}></FormInput>
        <div className="Filter-submit-container w-100">
          <input type="submit" value="Search" className="btn btn-primary flex-grow-1 w-100"></input>
        </div>
      </form>
    );
  }
}

export default Filter;
