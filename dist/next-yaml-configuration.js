/*!
 * name: @feizheng/next-yaml-configuration
 * description: Yaml configuration for next.
 * homepage: https://github.com/afeiship/next-yaml-configuration
 * version: 1.0.1
 * date: 2020-06-06T03:53:00.219Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractConfiguration = nx.AbstractConfiguration || require('@feizheng/next-abstract-configuration')
  var fs = require('fs');
  var yaml = require('js-yaml');
  var DEFALUT_OPTIONS = { path: null, charset: 'utf8' };

  var NxYamlConfiguration = nx.declare('nx.YamlConfiguration', {
    extends: NxAbstractConfiguration,
    methods: {
      initOptions: function (inOptions) {
        this.options = nx.mix(null, DEFALUT_OPTIONS, inOptions);
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
