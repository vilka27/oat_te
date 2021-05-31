export default function fetchData(baseUrl, params) {
  const url = new URL(baseUrl);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  return fetch(url)
    .then((response) => response.json());
}
