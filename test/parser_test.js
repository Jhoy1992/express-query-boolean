"use strict";

var parser = require("../lib/parse");

exports.parser = {
  setUp: function(done) {
    this.options = {};

    done();
  },

  null: function(test) {
    test.deepEqual(
      parser({
        a: "null"
      }),
      {
        a: null
      },
      "Converts 'null' string."
    );

    test.done();
  },

  empty: function(test) {
    test.deepEqual(
      parser({
        a: ""
      }),
      {
        a: ""
      },
      "Doesn't convert empty string."
    );

    test.done();
  },

  recursive: function(test) {
    test.deepEqual(
      parser({
        a: {
          b: "null"
        }
      }),
      {
        a: {
          b: null
        }
      },
      "Recursively parses object."
    );

    test.done();
  },

  array: function(test) {
    test.deepEqual(
      parser({
        array: [{ a: "null" }, { c: "test" }]
      }),
      {
        array: [{ a: null }, { c: "test" }]
      },
      "Recursively parses array."
    );

    test.done();
  }
};
