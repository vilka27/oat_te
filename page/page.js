/* eslint-disable no-use-before-define */
import list from '../list/list.js';
import fetchData from '../utils/fetchData.js';
import T from '../T.js';
/**
 *
 * @param {String} usersUrl
 * @param {Number} perPage
 * @param {Function} [itemRenderer]
 * @param {Function} [responseToModel]
 * @returns {Element}
 */
export default function page(
  usersUrl,
  perPage = 20,
  itemRenderer = (data) => data.toString(),
  responseToModel = (r) => r,
) {
  let offset = 0;
  let totalItems;

  function loadNext() {
    fetchListData(offset + perPage);
  }
  function loadPrev() {
    fetchListData(offset - perPage);
  }

  /**
   *
   * @param {Array} listData
   * @returns {Element}
   */
  function pageInner(listData) {
    const prevButton = offset >= perPage ? T.button({ class: 'page__prev' }, [
      '< Previous',
    ], { click: loadPrev }) : null;

    const showNext = totalItems === undefined || offset + perPage < totalItems;
    const nextButton = showNext ? T.button({ class: 'page__next' }, [
      'Next >',
    ], { click: loadNext }) : null;

    return T.div({ class: 'page' }, [
      list(listData, itemRenderer, 'Ooops no more items left, click "Previous"'),
      T.nav({ class: 'page__navigation' }, [
        prevButton,
        nextButton,
      ]),
    ]);
  }

  const resultElement = T.div({}, [
    pageInner([]),
  ]);

  /**
   *
   * @param {Array} listData
   */
  function renderPage(listData) {
    resultElement.innerHTML = '';
    resultElement.appendChild(pageInner(listData));
  }
  /**
   * Fetch new data and update page
   */
  function fetchListData(newOffset) {
    fetchData(usersUrl, { limit: perPage, offset: newOffset })
      .then(responseToModel)
      .then((listData) => {
        if (!listData) {
          throw (new Error('Something went wrong during fetch'));
        }
        if (listData.length < perPage) {
          totalItems = newOffset + listData.length;
        }
        offset = newOffset;
        renderPage(listData);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }

  fetchListData(offset);
  return resultElement;
}
