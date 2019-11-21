import React from 'react';
import './List.scss';
import { FootballPlayer } from '../../store/finder-state';

interface ListProps {
  footballPlayers: Array<FootballPlayer>;
}
const ListHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Player</th>
        <th scope="col">Position</th>
        <th scope="col" className="d-none d-sm-table-cell">Nationality</th>
        <th scope="col">Age</th>
      </tr>
    </thead>
  );
}

const ListRow: React.FC<FootballPlayer> = (props: FootballPlayer) => {
  return (
    <tr>
      <td key="1">
        {props.name}
        <br className="d-sm-none"></br>
        <span className="d-sm-none text-secondary">{`(${props.nationality})`}</span>
      </td>
      <td key="2">{props.position}</td>
      <td key="3" className="d-none d-sm-table-cell">{props.nationality}</td>
      <td key="4">{props.age}</td>
    </tr>
  );
}

const ListBody: React.FC<{footballPlayers: Array<FootballPlayer>}> = ({ footballPlayers }) => {
  return (
    <tbody>
      { footballPlayers.map((player, ix) => <ListRow {...player} key={ix}></ListRow>) }
    </tbody>
  );
}

const ListEmpty: React.FC = () => {
  return (
    <caption className="text-center">{'No data found for the given filters'}</caption>
  );
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const hasRows = props.footballPlayers && props.footballPlayers.length;

  return (
    <table className="table table-striped">
      <ListHeader></ListHeader>
      { hasRows ? <ListBody footballPlayers={props.footballPlayers}></ListBody> : <ListEmpty></ListEmpty>}
    </table>
  );
}

export default List;
