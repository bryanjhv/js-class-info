const assert = require('assert'),
      info   = require('..');

const ES5PointInfo = info(require('./es5-point')),
      ES6PointInfo = info(require('./es6-point'));


describe('Any class', () => {

  describe('can have', () => {

    it('static methods', () => {
      let result = ['make'];
      assert.deepEqual(ES5PointInfo.staticMethods, result);
      assert.deepEqual(ES6PointInfo.staticMethods, result);
    });

    it('instance methods', () => {
      let result = ['distance', 'toString'];
      assert.deepEqual(ES5PointInfo.instanceMethods, result);
      assert.deepEqual(ES6PointInfo.instanceMethods, result);
    });

    it('static properties', () => {
      let result = ['ORIGIN'];
      assert.deepEqual(ES5PointInfo.staticProperties, result);
      assert.deepEqual(ES6PointInfo.staticProperties, result);
    });

    it('unknown instance properties', () => {
      let notResult = ['x', 'y'];
      assert.notDeepEqual(ES5PointInfo.instanceProperties, notResult);
      assert.notDeepEqual(ES6PointInfo.instanceProperties, notResult);
    });

  });

  describe('is not', () => {

    it('a number', () => {
      assert(info(42) === null);
      assert(info(3.14) === null);
    });

    it('a string', () => {
      assert(info('hello world') === null);
    });

    it('an object', () => {
      let obj = {
        toString() {}
      };

      assert(info(obj) === null);
    });

    it('a Date', () => {
      assert(info(new Date()) === null);
    });

  });

});
