import 'whatwg-fetch';
import { FootballPlayer } from '../store/finder-state';
import { calculateAge } from '../../shared/utils';

export async function getFootballPlayersRequest() {
  let endpointUrl = 'https://football-players-b31f2.firebaseio.com/players.json';

  const res = await fetch(endpointUrl);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const list: Array<FootballPlayer> = await res.json();

  return list.map((player) => ({
    ...player,
    age: calculateAge(player.dateOfBirth),
  }));
}
