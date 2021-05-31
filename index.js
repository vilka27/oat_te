import list from './list/list.js';
import T from './T.js';
import testTakerPreview from './test-taker-preview/test-taker-preview.js';

const page = T.div(
  { class: 'page' },
  [
    T.div({ class: 'header' }, ['headerContent']),
    list({ class: 'test-takers-list' }, [
      {
        userId: 0,
        firstName: 'firstnametest',
        lastName: 'lastname',
      },
      {
        userId: 0,
        firstName: 'firstnametest',
        lastName: 'lastname',
      },
      {
        userId: 0,
        firstName: 'firstnametest',
        lastName: 'lastname',
      },
    ], testTakerPreview),
    T.div({ class: 'footer' }, ['footerContent']),
  ],
  {
    click: () => {
      console.log('click');
    },
  },
);

document.body.appendChild(page);
