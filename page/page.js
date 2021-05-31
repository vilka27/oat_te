import list from '../list/list.js';
import T from '../T.js';

export default function page(usersUrl, perPage = 20, itemRenderer) {
  let offset = 0;
  let totalItems;
  function pageInner(listData) {
    const prevButton = offset >= perPage ? T.button({ class: 'page__prev' }, ['< Previous'], {
      click: () => {
        loadPrev();
      },
    }) : null;

    const showNext = totalItems === undefined
                || offset + perPage <= totalItems;

    const nextButton = showNext ? T.button(
      { class: 'page__next' }, ['Next >'], {
        click: () => {
          loadNext();
        },
      },
    ) : null;

    return T.div(
      { class: 'page' },
      [
        list(listData, itemRenderer),
        T.nav({ class: 'page__navigation' }, [prevButton, nextButton]),
      ],
    );
  }
  const mainElement = T.div({}, [pageInner([])]);
  function renderPage(listData) {
    mainElement.innerHTML = '';
    mainElement.appendChild(pageInner(listData));
  }
  function updateTestTakersList() {
    const url = new URL(usersUrl);
    const params = { perPage, offset };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.length < perPage) {
          totalItems = offset + response.length;
        }
        renderPage(response);
      });
  }
  function loadNext() {
    offset += perPage;
    updateTestTakersList();
  }
  function loadPrev() {
    offset -= perPage;
    updateTestTakersList();
  }

  updateTestTakersList();
  return mainElement;
}
