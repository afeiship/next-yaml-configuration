(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxAbstractConfiguration = nx.AbstractConfiguration || require('@jswork/next-abstract-configuration');
  var nxDeepAssign = nx.deepAssign || require('@jswork/next-deep-assign');
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
        var optPath = this.options.path;
        var charset = this.options.charset;
        if (typeof optPath === 'string') return yaml.safeLoad(fs.readFileSync(optPath, charset));
        var data = optPath.map(function (path) {
          return yaml.safeLoad(fs.readFileSync(path, charset));
        });
        return nxDeepAssign.apply(null, data);
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
