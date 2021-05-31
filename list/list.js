import T from '../T.js';
/**
 *
 * @param {Array} dataList
 * @param {Function} renderer Receives single data entity from datalist and returns Element
 * @returns {Element}
 */
function list(dataList, renderer) {
  const children = renderer ? dataList.map(renderer) : [];
  const items = children.map((childElem) => T.li({ class: 'list__item' }, [childElem]));

  return T.ul({ class: 'list' }, items);
}

export default list;
