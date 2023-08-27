import client from '../client';

export function loginApi() {
  const clientRes = client.get('https://localhost:3000/anyApi');
  return clientRes;
}
