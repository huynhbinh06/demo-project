import axios from 'axios';
import queryString from 'query-string';
import {API_BASE_URL} from '../configs/BaseValue';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOTY0LCJpc3MiOiJodHRwOi8vZGVtby5lZHV0by5uZXQvbG9naW4iLCJpYXQiOjE2MzExOTIyNjYsImV4cCI6MTYzMTc5NzA2NiwibmJmIjoxNjMxMTkyMjY2LCJqdGkiOiJhVEFWSE5kMWRWMThKM1pLIn0.2Vnr6GeCwMlHo7BKhWz-PcoJPbvRiptUbl-jpEbaTuw';

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  response => {
    if (response?.data) {
      return response.data;
    }

    return response;
  },
  error => {
    // Handle errors

    throw error;
  },
);
