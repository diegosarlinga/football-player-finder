import React from 'react';
import { connect } from 'react-redux';
import { LoadingIndicator, ErrorMessage, Content } from '../shared/components';
import Filter from './components/filter/Filter';
import List from './components/list/List';
import './Finder.scss';
import { AppState } from '../store';
import { fetchFootballPlayers, filterFootballPlayers } from './actions/actions';
import { FootballPlayer, FootballPlayerFilter } from './store/finder-state';
import { filteredFootballPlayerListSelector } from './store/selectors';

interface FinderProps {
  fetchFootballPlayers: () => void;
  filterFootballPlayers: (filter: FootballPlayerFilter) => void;
  isLoading: boolean;
  error: boolean;
  footballPlayers: Array<FootballPlayer>;
  positions: Array<string>;
  activeFilter: FootballPlayerFilter;
}

export class Finder extends React.Component<FinderProps> {

  componentDidMount() {
    this.props.fetchFootballPlayers();
  }

  renderContent() {
    return (
      <React.Fragment>
        <Filter
          positions={this.props.positions}
          activeFilter={this.props.activeFilter}
          onFilter={this.props.filterFootballPlayers}></Filter>
        <List footballPlayers={this.props.footballPlayers}></List>
      </React.Fragment>
    );
  }

  render() {
    const className = this.props.isLoading ? '--loading' : '';
    return (
      <Content title={'Football Player Finder'} className={className}>
        { this.props.isLoading && <LoadingIndicator/>}
        { this.props.error && <ErrorMessage/> }
        { !this.props.error && this.renderContent() }
      </Content>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.finder.isLoading,
  error: state.finder.error,
  footballPlayers: filteredFootballPlayerListSelector(state),
  positions: state.finder.positions,
  activeFilter: state.finder.activeFilter,
});

const mapDispatchToProps = {
  fetchFootballPlayers: fetchFootballPlayers,
  filterFootballPlayers: filterFootballPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
