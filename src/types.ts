export type City = string[];

export type State = {
  initial: string;
  name: string;
  cities: City;
};

export type Database = {
  states: State[];
};
