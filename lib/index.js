const isClass    = require('is-class'),
      isFunction = require('is-function');


/**
 * Reserved static properties.
 *
 * @type {string[]}
 */
const RESERVED_STATIC = 'name length arguments prototype caller'.split(' ');

/**
 * Reserved instance properties.
 *
 * @type {string[]}
 */
const RESERVED_INSTANCE = 'constructor'.split(' ');


/**
 * @typedef {object} ClassInfo
 * @property {string[]} staticMethods
 * @property {string[]} instanceMethods
 * @property {string[]} staticProperties
 * @property {string[]} instanceProperties
 * @property {(function|null)} parentClass
 */

/**
 * Get information about your ES5/ES6 class.
 *
 * @param {function} ctor The class constructor.
 * @returns {ClassInfo} The information of given class.
 */
module.exports = function classInfo(ctor) {
  if (!isFunction(ctor) && !isClass(ctor)) return null;


  let sm = [],
      im = [],
      sp = [],
      ip = [],
      pc;


  // Sniff static methods/properties
  Object.getOwnPropertyNames(ctor).
  forEach(prop => {
    if (RESERVED_STATIC.indexOf(prop) >= 0) return;

    let desc = Object.getOwnPropertyDescriptor(ctor, prop);
    if (isFunction(desc.value)) {
      sm.push(prop);
    } else {
      sp.push(prop);
    }
  });


  // Sniff instance methods (no properties)
  let proto = ctor.prototype;
  Object.getOwnPropertyNames(proto).
  forEach(prop => {
    if (RESERVED_INSTANCE.indexOf(prop) >= 0) return;

    let desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (isFunction(desc.value)) {
      im.push(prop);
    }
  });


  // Sniff parent class (ES6)
  pc = Object.getPrototypeOf(ctor);
  if (pc.name === '') pc = null;

  // Sniff parent class (ES5)
  if (!pc) pc = ctor.prototype.__proto__.constructor;
  if (pc.name === '') pc = null;
  if (pc && pc.name === 'Object') pc = null;


  return {
    staticMethods: sm,
    instanceMethods: im,
    staticProperties: sp,
    instanceProperties: ip,
    parentClass: pc
  };
};
