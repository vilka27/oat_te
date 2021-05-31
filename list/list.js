import T from '../T.js';
/**
 *
 * @param {Array} dataList
 * @param {Function} renderer Receives single data entity from datalist and returns Element
 * @param {String} noItemsMessage
 * @returns {Element}
 */
function list(dataList, renderer, noItemsMessage) {
  if (dataList.length === 0) {
    return T.div(
      { class: 'list' },
      [T.div({ class: 'list__no-items-message' }, [noItemsMessage])],
    );
  }
  const children = renderer ? dataList.map(renderer) : [];
  const items = children.map((childElem) => T.li({ class: 'list__item' }, [childElem]));

  return T.ul({ class: 'list' }, items);
}

export default list;
