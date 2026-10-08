'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const cssArray = sourceString.split(';');

  for (const characteristic of cssArray) {
    const [key, value] = characteristic.split(':').map((item) => item.trim());

    if (value !== '' || value !== undefined) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
