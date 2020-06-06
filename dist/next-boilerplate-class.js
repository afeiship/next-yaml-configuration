/*!
 * name: @feizheng/next-yaml-configuration
 * description: Yaml configuration for next.
 * url: https://github.com/afeiship/next-yaml-configuration
 * version: 1.0.0
 * date: 2020-03-28 12:58:30
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NxYamlConfiguration = nx.declare('nx.YamlConfiguration', {});

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxYamlConfiguration;
  }
})();

//# sourceMappingURL=next-yaml-configuration.js.map
