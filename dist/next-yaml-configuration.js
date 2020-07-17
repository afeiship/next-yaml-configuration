/*!
 * name: @feizheng/next-yaml-configuration
 * description: Yaml configuration for next.
 * homepage: https://github.com/afeiship/next-yaml-configuration
 * version: 1.1.1
 * date: 2020-07-17T03:44:27.003Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractConfiguration = nx.AbstractConfiguration || require('@feizheng/next-abstract-configuration');
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
        return yaml.safeLoad(
          fs.readFileSync(
            this.options.path,
            this.options.charset
          )
        )
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

//# sourceMappingURL=next-yaml-configuration.js.map
