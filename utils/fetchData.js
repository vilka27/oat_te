/**
 *
 * @param {String} baseUrl
 * @param {Object} params
 * @returns {Promise}
 */
export default function fetchData(baseUrl, params) {
  const url = new URL(baseUrl);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw (new Error(`fetch error: ${response.status}: ${response.statusText}`));
    });
}
