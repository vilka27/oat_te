import T from '../T.js';
/**
 *
 * @param {Object} data
 * @param {String} data.firstName
 * @param {String} data.lastName
 * @param {Number} data.userId
 */
function testTakerPreview(data) {
  return T.div(
    { class: 'test-taker-preview' },
    [
      T.span({ class: 'test-taker-preview__first-name' }, [data.firstName]),
      T.span({ class: 'test-taker-preview__last-name' }, [data.lastName]),
      T.span({ class: 'test-taker-preview__id' }, [data.userId]),
    ],
  );
}

export default testTakerPreview;
