(function () {
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

      expect(config.get('env.home')).toBe(process.env.HOME);
    });

    test('deepAssign multiple yml files:', () => {
      var config = new NxYamlConfiguration({
        path: [path.join(__dirname, './1.yml'), path.join(__dirname, './2.yml')]
      });

      expect(config.gets()).toEqual({
        commands: {
          c1: ['ls', 'pwd'],
          c2: ['ls -alh']
        }
      });
    });
  });
})();
