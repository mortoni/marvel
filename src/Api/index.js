import axios from 'axios';
import { Secret } from './Secret'

const API_URL = 'http://gateway.marvel.com/v1/public/';
const { ts, publicKey, hash } = Secret;
let params = {
    'ts': ts,
    'apikey': publicKey,
    'hash': hash,
    'limit': '20',
    'nameStartsWith': ''
}

export const getCharacters = (name) => {
    params.nameStartsWith = name;

    return axios.get(`${API_URL}characters`, { params })
        .then((response) => response.data.data)
        .catch((err) => err);
};
