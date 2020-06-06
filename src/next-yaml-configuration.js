(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fs = require('fs');
  var yaml = require('js-yaml');
  var DEFALUT_OPTIONS = { path: null, indent: 2, charset: 'utf8' };

  var NxYamlConfiguration = nx.declare('nx.YamlConfiguration', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, DEFALUT_OPTIONS, inOptions);
        this.data = yaml.safeLoad(
          fs.readFileSync(
            this.options.path,
            this.options.charset
          )
        );
      },
      set: function (inPath, inValue) {
        nx.set(this.data, inPath, inValue);
      },
      sets: function (inObject) {
        nx.forIn(
          inObject,
          function (key, value) {
            nx.set(this.data, key, value);
          },
          this
        );
      },
      get: function (inPath) {
        return nx.get(this.data, inPath);
      },
      gets: function () {
        return this.data;
      },
      update: function (inObject) {
        this.sets(inObject);
        this.save();
      },
      save: function () {
        var str = yaml.safeDump(this.data);
        fs.writeFileSync(this.options.path, str);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxYamlConfiguration;
  }
})();
