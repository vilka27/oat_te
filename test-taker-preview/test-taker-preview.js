import T from '../T.js';
import testTakerDetails from '../test-taker-details/test-taker-details.js';
/**
 *
 * @param {Object} data
 * @param {Element} detailsBox
 */
function renderDetails(data, detailsBox) {
  if (detailsBox.dataset.loaded === 'false') {
    detailsBox.appendChild(testTakerDetails(data));
    detailsBox.dataset.loaded = 'true';
  }
}

function loadDetails(userId, detailsBox, url) {
  const baseUrl = [url, userId].join('');
  fetch(new URL(baseUrl))
    .then((response) => response.json())
    .then((response) => {
      renderDetails(response, detailsBox);
    });
}

/**
 *
 * @param {Object} data
 * @param {String} data.firstName
 * @param {String} data.lastName
 * @param {Number} data.userId
 */
function testTakerPreview(data, url) {
  const detailsBox = T.div({ class: 'test-taker-preview__details-box test-taker-preview__details-box_hidden', 'data-loaded': 'false' });
  const box = T.div({ class: 'test-taker-preview__details' }, [
    T.button({ class: 'test-taker-preview__show-details' }, [], {
      click: (event) => {
        if (detailsBox.dataset && detailsBox.dataset.loaded === 'false') {
          loadDetails(data.userId, detailsBox, url);
        }
        detailsBox.classList.toggle('test-taker-preview__details-box_hidden');
        event.currentTarget.classList.toggle('test-taker-preview__show-details_opened');
      },
    }),
    detailsBox,
  ]);
  return T.div(
    { class: 'test-taker-preview' },
    [
      T.span({ class: 'test-taker-preview__first-name' }, [data.firstName]),
      T.span({ class: 'test-taker-preview__last-name' }, [data.lastName]),
      T.div({ class: 'test-taker-preview__id' }, [data.userId]),
      box,
    ],
  );
}

export default testTakerPreview;
