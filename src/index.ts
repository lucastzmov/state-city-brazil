import { database } from './database';
import { State } from './types';

export const getStates = (): State[] => {
  return database.states;
};

export const getCitiesByState = (initial: string): State | undefined => {
  return database.states.find(state => state.initial === initial);
};

export const getStatesByCity = (city: string): State[] | [] => {
  return database.states.filter(state => {
    if (state.cities.includes(city)) {
      return state;
    }
    return;
  });
};
