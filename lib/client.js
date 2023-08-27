import axios from 'axios';

const client = axios.create({
  // headers: {
  //   'Access-Control-Allow-Origin': `https://localhost:10443, https://localhost:9443, https://localhost`,
  // },
  baseURL:
    import.meta.env.NODE_ENV === 'development'
      ? import.meta.env.REACT_APP_DEVELOPMENT_API_ADDRESS
      : import.meta.env.REACT_APP_PRODUCTION_API_ADDRESS,
  withCredentials: true,
});

export default client;
