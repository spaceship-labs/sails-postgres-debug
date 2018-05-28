function initialize(cb) {
  var env = process.env.NODE_ENV || 'development';
  if (env === 'development') {
    require('pg-debug');
  }
  return cb();
}

module.exports = function() {
  return { initialize: initialize };
};
