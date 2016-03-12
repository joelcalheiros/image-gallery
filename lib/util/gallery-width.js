'use strict';

/**
 * Return width of gallery.
 *
 * @param {Gallery} gallery
 * @return {Number}
 */
module.exports = function getGalleryWidth(gallery) {
  return gallery.element.offsetWidth;
}