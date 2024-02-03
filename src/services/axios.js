import axios from 'axios';

import { GO_ZAYAN_BE_SERVER } from '../configs/api';

const getBaseUrl = () => {
  return GO_ZAYAN_BE_SERVER;
  // return 'https://g4oqpybbm5an7j52oeycm6ziwi.appsync-api.eu-west-1.amazonaws.com/graphql';
}

const $axios = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

$axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error interceptors: ', error.response?.config);
    return error;
  },
);

export const setIdTokenInAxiosHeader = idToken => {
  $axios.defaults.headers.common['authorization'] = idToken;
};

export default $axios;
