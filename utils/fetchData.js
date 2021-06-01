const simpleCache = {};
/**
 *
 * @param {String} baseUrl
 * @param {Object} params
 * @returns {Promise}
 */
export default function fetchData(baseUrl, params) {
  if (simpleCache[baseUrl]) {
    return Promise.resolve(simpleCache[baseUrl]);
  }
  const url = new URL(baseUrl);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  if (simpleCache[url.toString()]) {
    return Promise.resolve(simpleCache[url.toString()]);
  }
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw (new Error(`fetch error: ${response.status}: ${response.statusText}`));
    })
    .then((response) => {
      simpleCache[url.toString()] = response;
      return response;
    });
}
