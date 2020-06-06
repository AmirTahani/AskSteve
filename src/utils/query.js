export function stringifyQuery(query) {
  const queryString = Object.keys(query).map(key => {
    return `${key}=${query[key]}`
  }).join('&');
  return `?${queryString}`;
}
