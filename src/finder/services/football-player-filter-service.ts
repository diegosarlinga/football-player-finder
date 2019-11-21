import 'whatwg-fetch';
import { FootballPlayer } from '../store/finder-state';

export function footballPlayerFilterPredicate(player: FootballPlayer, name?: string, position?: string, age?: number): boolean {
  if (name && !player.name.toLowerCase().includes(name)) {
    return false;
  }

  if (position && player.position !== position) {
    return false;
  }

  if (age && player.age !== age) {
    return false;
  }

  return true;
}
