var parseNull = require("./lib/parse");

module.exports = function() {
  return function(req, res, next) {
    req.query = parseNull(req.query);
    next();
  };
};
