import T from '../utils/T.js';
/**
 *
 * @param {Array} dataList
 * @param {Function} [renderer] Receives single data entity from datalist and returns Element|String
 * @param {String} [noItemsMessage]
 * @returns {Element}
 * @example
 * // returns Element:
 * // <ul class="list">
 * //   <li class="list__item">count: 5 type: cat</li>
 * //   <li class="list__item">count: 1 type: mouse</li>
 * // </ul>
 *
 * list([
 *  { type: 'cat', count: 5 },
 *  { type: 'mouse', count: 1 },
 * ], (data) => `count: ${data.count} type: ${data.type}`)
 *
 */

function list(dataList, renderer = (data) => data.toString(), noItemsMessage) {
  if (!dataList || dataList.length === 0) {
    return T.div({ class: 'list' }, [
      T.div({ class: 'list__no-items-message' }, [
        noItemsMessage,
      ]),
    ]);
  }

  const items = dataList
    .map(renderer)
    .map((childElem) => T.li({ class: 'list__item' }, [childElem]));

  return T.ul({ class: 'list' }, items);
}

export default list;
