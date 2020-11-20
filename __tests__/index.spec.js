(function() {
  const NxYamlConfiguration = require('../src');

  var path = require('path');

  describe('api get/set', function () {
    test('basic config test', function () {
      var filename = path.join(__dirname, './pkg.yml');
      var config = new NxYamlConfiguration({
        path: filename
      });
      expect(config.get('scripts.build')).toBe('gulp');
      config.set('scripts.dev', 'nodemon src.js');
      config.save();
    });

    test('${{ var }} support should work fine', () => {
      var filename = path.join(__dirname, './org.yml');
      var config = new NxYamlConfiguration({
        path: filename
      });

      // console.log(config.gets());
      expect(config.get('env.home')).toBe('/Users/feizheng');
    });
  });

})();
