export interface FinderState {
  activeFilter: FootballPlayerFilter;
  footballPlayers: Array<FootballPlayer>;
  positions: Array<string>;
  isLoading: boolean;
  error?: any;
};

export interface FootballPlayer {
  contractUntil: string;
  dateOfBirth: string;
  jerseyNumber: number;
  name: string;
  nationality: string;
  position: string;
  age?: number;
};

export interface FootballPlayerFilter {
  name?: string;
  position?: string;
  age?: number;
};
