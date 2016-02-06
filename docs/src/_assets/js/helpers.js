/**
 * Helper functions.
 */


/**
 * Set multiple attributes to an element as the `setAttribute` built-in method
 * only excepts 2 parameters.
 *
 * @param {string} element - The element to target
 * @param {Object} attributes - The attributes to be applied to the element
 * @param {string} attributes.type - An attribute type e.g. `id`
 * @param {string} attributes.value - The value for an attribute type
 * @returns {Object}
 * @example
   var anchor = document.createElement("a");
   setAttributes(anchor, {
     href: "some/url",
     id: "some/id"
   })
 */

function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function(name) {
        element.setAttribute(name, attributes[name]);
    })
}


/**
 * jQuery style function to make it easier to apply: `document.querySelector`.
 *
 * @param {string} selector - The selector to target
 * @returns {Object}
 * @example
   var main = $(".js-main");
 */

function $(selector) {
    return document.querySelector(selector);
}
