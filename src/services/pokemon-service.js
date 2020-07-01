import axios from 'axios';
import { url } from './API';

const getPokemons = (query) => axios.get(url('pokemon', query)).then(res => res.data.results);

const getPokemonByUrl = (url) => axios.get(url).then(res => res.data);

const getPokemonByName = (name) => {
  return axios.get(url(`pokemon/${name}`, null)).then(res => res.data.results);
}

export { getPokemons, getPokemonByUrl, getPokemonByName }
