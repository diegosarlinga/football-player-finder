import { createSelector } from 'reselect';
import { AppState } from '../../store'
import { FootballPlayerFilter, FootballPlayer } from './finder-state';
import { footballPlayerFilterPredicate } from '../services/football-player-filter-service';

export const filteredFootballPlayerListSelector = createSelector<AppState, FootballPlayerFilter, Array<FootballPlayer> | undefined, Array<FootballPlayer>>(
  state => state.finder.activeFilter,
  state => state.finder.footballPlayers,
  (activeFilter, footballPlayers) => {
    const { position, age } = activeFilter;
    const name = activeFilter.name && activeFilter.name.toLowerCase();
    if (!footballPlayers) {
      return [];
    }
    if (name || position || age) {
      return footballPlayers.filter((player) => footballPlayerFilterPredicate(player, name, position, age));
    }

    return footballPlayers;
  }
);
