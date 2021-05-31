/* eslint-disable no-param-reassign */
import T from '../T.js';
import testTakerDetails from '../test-taker-details/test-taker-details.js';
import fetchData from '../utils/fetchData.js';
import colorHash from '../utils/colorHash.js';
/**
 *
 * @param {Object} data
 * @param {Number} data.userId
 * @param {String} data.login
 * @param {String} data.password
 * @param {String} data.title
 * @param {String} data.lastName
 * @param {String} data.firstName
 * @param {String} data.gender
 * @param {String} data.email
 * @param {String} data.picture
 * @param {String} data.address
 * @param {Element} detailsBox
 */
function renderDetails(data, detailsBox) {
  if (detailsBox.dataset.loaded === 'false') {
    detailsBox.appendChild(testTakerDetails(data));
    detailsBox.dataset.loaded = 'true';
  }
}
/**
 *
 * @param {String} url
 * @param {Element} pictureBox
 */
function changePicture(url, pictureBox) {
  pictureBox.innerHTML = '';
  pictureBox.appendChild(T.img({ class: 'test-taker-preview__picture', src: url }));
}
/**
 *
 * @param {String} userId
 * @param {Element} detailsBox
 * @param {String} url
 * @param {Function} responseToModel
 */
function loadDetails(userId, detailsBox, url, responseToModel = (r) => r, pictureBox) {
  fetchData([url, userId].join(''), {})
    .then(responseToModel)
    .then((response) => {
      renderDetails(response, detailsBox);
      if (response.picture) {
        changePicture(response.picture, pictureBox);
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
}

/**
 *
 * @param {Object} data
 * @param {String} data.firstName
 * @param {String} data.lastName
 * @param {Number} data.userId
 * @param {String} url
 * @param {Function} responseToModel
 * @returns {Element}
 */
function testTakerPreview(data, url, responseToModel) {
  const pictureBox = T.div({ class: 'test-taker-preview__picture', style: `background-color:${colorHash(data.lastName)}` }, [data.firstName[0], data.lastName[0]]);
  const detailsBox = T.div({ class: 'test-taker-preview__details-box test-taker-preview__details-box_hidden', 'data-loaded': 'false' });
  const box = T.div({ class: 'test-taker-preview__details' }, [
    T.button({ class: 'test-taker-preview__show-details' }, [], {
      click: (event) => {
        if (detailsBox.dataset && detailsBox.dataset.loaded === 'false') {
          loadDetails(data.userId, detailsBox, url, responseToModel, pictureBox);
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
      pictureBox,
      T.span({ class: 'test-taker-preview__name' }, [[data.firstName, data.lastName].join(' ')]),
      T.div({ class: 'test-taker-preview__id' }, [data.userId]),
      box,
    ],
  );
}

export default testTakerPreview;
