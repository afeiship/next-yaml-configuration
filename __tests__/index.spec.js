(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxYamlConfiguration = require('../src/next-yaml-configuration');
  var path = require('path');

  describe('api get/set', function () {
    test('init', function () {
      var filename = path.join(__dirname, './pkg.yml');
      var config = new NxYamlConfiguration({
        path: filename,
      });
      expect(config.get('scripts.build')).toBe('gulp');
      config.set('scripts.dev', "nodemon src.js");
      config.save();
    });
  });
})();
