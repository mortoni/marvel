import axios from 'axios';
import { Secret } from './Secret'

const API_URL = 'http://gateway.marvel.com/v1/public/';
const { ts, publicKey, hash } = Secret;

export const getCharacters = (offset) => {
  const o = offset || '0';
  return axios.get(`${API_URL}characters`, {
    params: {
      'ts': ts,
      'apikey': publicKey,
      'hash': hash,
      'offset': o,
      'limit': '20'
    }
  })
  .then((response) => {
    const data = response.data.data;
    return data;
  })
  .catch((err) => err);
};
