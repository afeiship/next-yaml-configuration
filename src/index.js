(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxAbstractConfiguration = nx.AbstractConfiguration || require('@jswork/next-abstract-configuration');
  var fs = require('fs');
  var yaml = require('js-yaml');
  var DEFALUT_OPTIONS = { path: null, charset: 'utf8' };

  var NxYamlConfiguration = nx.declare('nx.YamlConfiguration', {
    extends: NxAbstractConfiguration,
    methods: {
      defaults: function () {
        return DEFALUT_OPTIONS;
      },
      load: function () {
        return yaml.safeLoad(fs.readFileSync(this.options.path, this.options.charset));
      },
      dump: function () {
        return yaml.safeDump(this.data);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxYamlConfiguration;
  }
})();
