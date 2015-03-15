module.exports = {
  run: function () {
    var deps = requireArr('./files/**/*.js', '!./files/test1.js');
  }
};