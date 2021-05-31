import T from '../T.js';
/**
 *
 * @param {Object} attributes
 * @param {Array} dataList
 * @param {Function} renderer Receives single data entity from datalist and returns Element
 * @returns {Element}
 */
function list(attributes, dataList, renderer) {
  const children = renderer ? dataList.map(renderer) : [];
  return T.ul(attributes, children);
}

export default list;
