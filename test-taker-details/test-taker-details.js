import T from '../T.js';

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
 * @returns {Element}
 */
function testTakerDetails(data) {
  return T.div(
    { class: 'test-taker-details' },
    [

      T.span({ class: 'test-taker-details__field-name' }, ['title']),
      T.span({ class: 'test-taker-details__title' }, [data.title]),
      T.span({ class: 'test-taker-details__field-name' }, ['lastName']),
      T.span({ class: 'test-taker-details__last-name' }, [data.lastName]),
      T.span({ class: 'test-taker-details__field-name' }, ['firstName']),
      T.span({ class: 'test-taker-details__first-name' }, [data.firstName]),
      T.span({ class: 'test-taker-details__field-name' }, ['gender']),
      T.span({ class: 'test-taker-details__gender' }, [data.gender]),
      T.span({ class: 'test-taker-details__field-name' }, ['email']),
      T.span({ class: 'test-taker-details__email' }, [data.email]),
      T.span({ class: 'test-taker-details__field-name' }, ['address']),
      T.span({ class: 'test-taker-details__address' }, [data.address]),
      T.span({ class: 'test-taker-details__field-name' }, ['userId']),
      T.span({ class: 'test-taker-details__id' }, [data.userId]),
      T.span({ class: 'test-taker-details__field-name' }, ['login']),
      T.span({ class: 'test-taker-details__login' }, [data.login]),
      T.span({ class: 'test-taker-details__field-name' }, ['password']),
      T.span({ class: 'test-taker-details__password' }, [data.password]),
    ],
  );
}

export default testTakerDetails;
