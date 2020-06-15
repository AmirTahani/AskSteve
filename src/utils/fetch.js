import { baseUrl } from '../config';

export default async function (url, options) {
  const response = await fetch(`${baseUrl}${url}`, {
    ...options
  });
  const result = await response.json();
  if (response.status >= 200 && response.status <= 300) {
    return result;
  }
  return Promise.reject(result);
}
