export const url = (endpoint, query) => `https://pokeapi.co/api/v2/${endpoint}/${query ? `?${query}` : ''}`;
