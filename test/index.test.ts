import { getCitiesByState, getStates, getStatesByCity } from '../src';

describe('states and cities', () => {
  it('should return array with 27 states', () => {
    const states = getStates();
    expect(states.length).toEqual(27);
  });

  it('should return cities with state name SC', () => {
    const cities = getCitiesByState('SC');
    expect(cities?.initial).toBe('SC');
    expect(cities?.name).toBe('Santa Catarina');
    expect(cities?.cities.length).toEqual(293);
  });

  it('should return cities with state name SP', () => {
    const cities = getCitiesByState('SP');
    expect(cities?.initial).toBe('SP');
    expect(cities?.name).toBe('São Paulo');
    expect(cities?.cities.length).toEqual(645);
  });

  it('should return undefined with state name ABC123', () => {
    const cities = getCitiesByState('ABC123');
    expect(cities).toBe(undefined);
  });

  it('should return array state "Santa Catarina" at first position with city name "Joinville"', () => {
    const states = getStatesByCity('Joinville');
    expect(states?.length).toBe(1);
    expect(states?.at(0)?.initial).toBe('SC');
    expect(states?.at(0)?.name).toBe('Santa Catarina');
  });

  it('should return state empty with city name "ABC123"', () => {
    const states = getStatesByCity('ABC123');
    expect(states).toStrictEqual([]);
  });

  it('should return 5 states "homonyms" with city name "Bom Jesus"', () => {
    const cities = [
      {
        initial: 'PB',
        name: 'Paraíba',
      },
      {
        initial: 'PI',
        name: 'Piauí',
      },
      {
        initial: 'RN',
        name: 'Rio Grande do Norte',
      },
      {
        initial: 'RS',
        name: 'Rio Grande do Sul',
      },
      {
        initial: 'SC',
        name: 'Santa Catarina',
      },
    ];
    const states = getStatesByCity('Bom Jesus');
    expect(states.length).toBe(5);
    cities.forEach((c, index) => {
      expect(states.at(index)?.initial).toBe(c.initial);
      expect(states.at(index)?.name).toBe(c.name);
    });
  });
});
