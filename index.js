import page from './page/page.js';
import { usersUrl, userUrl } from './urls.js';
import testTakerPreview from './test-taker-preview/test-taker-preview.js';

const mainElement = document.querySelector('.content');
const itemsPerPage = 10;

mainElement.appendChild(
  page(
    usersUrl,
    itemsPerPage,
    (data) => testTakerPreview(data, userUrl),
  ),
);
