/**
 *
 * @param {any} obj
 * @returns {Boolean}
 */
function isNode(obj) {
  return typeof obj === 'object' && !!obj.nodeType;
}

/**
   *
   * @param {String} tagName
   * @param {Object} attributes
   * @param {Array<Element>} children
   * @param {Object} eventListeners
   * @returns {Element}
   */

function createElement(
  tagName,
  attributes = {},
  children = [],
  eventListeners = {},
) {
  const element = document.createElement(tagName);

  Object.entries(attributes).forEach((entry) => {
    element.setAttribute(...entry);
  });

  children
    .filter((child) => child !== undefined && child !== null)
    .forEach((child) => {
      if (isNode(child)) {
        element.appendChild(child);
      } else {
        const node = document.createTextNode(child.toString());
        element.appendChild(node);
      }
    });

  Object.entries(eventListeners).forEach((entry) => {
    element.addEventListener(...entry);
  });
  return element;
}
/**
 *
 * @param {String} tag
 * @returns {Function}
 */
function elementCreator(tag) {
  /**
   *
   * @param {Object} attributes
   * @param {Array<Element>} children
   * @param {Object} eventListeners
   */
  function createTagElement(attributes, children, eventListeners) {
    return createElement(tag, attributes, children, eventListeners);
  }
  return createTagElement;
}

const tags = ['div', 'span', 'ul', 'li', 'button', 'nav'];
const entries = tags.map((tagName) => [tagName, elementCreator(tagName)]);
const T = Object.fromEntries(entries);
export default T;
