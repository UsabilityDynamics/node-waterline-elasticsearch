/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['utility.js']) {
  _$jscoverage['utility.js'] = [];
  _$jscoverage['utility.js'][11] = 0;
  _$jscoverage['utility.js'][12] = 0;
  _$jscoverage['utility.js'][20] = 0;
  _$jscoverage['utility.js'][31] = 0;
  _$jscoverage['utility.js'][33] = 0;
  _$jscoverage['utility.js'][34] = 0;
  _$jscoverage['utility.js'][35] = 0;
  _$jscoverage['utility.js'][37] = 0;
  _$jscoverage['utility.js'][38] = 0;
  _$jscoverage['utility.js'][40] = 0;
  _$jscoverage['utility.js'][41] = 0;
  _$jscoverage['utility.js'][42] = 0;
  _$jscoverage['utility.js'][43] = 0;
  _$jscoverage['utility.js'][44] = 0;
  _$jscoverage['utility.js'][46] = 0;
  _$jscoverage['utility.js'][47] = 0;
  _$jscoverage['utility.js'][49] = 0;
  _$jscoverage['utility.js'][50] = 0;
  _$jscoverage['utility.js'][51] = 0;
  _$jscoverage['utility.js'][52] = 0;
  _$jscoverage['utility.js'][53] = 0;
  _$jscoverage['utility.js'][57] = 0;
  _$jscoverage['utility.js'][60] = 0;
  _$jscoverage['utility.js'][61] = 0;
  _$jscoverage['utility.js'][62] = 0;
  _$jscoverage['utility.js'][63] = 0;
  _$jscoverage['utility.js'][64] = 0;
  _$jscoverage['utility.js'][67] = 0;
  _$jscoverage['utility.js'][85] = 0;
  _$jscoverage['utility.js'][86] = 0;
  _$jscoverage['utility.js'][87] = 0;
  _$jscoverage['utility.js'][88] = 0;
  _$jscoverage['utility.js'][89] = 0;
  _$jscoverage['utility.js'][91] = 0;
  _$jscoverage['utility.js'][92] = 0;
  _$jscoverage['utility.js'][93] = 0;
  _$jscoverage['utility.js'][94] = 0;
  _$jscoverage['utility.js'][100] = 0;
  _$jscoverage['utility.js'][101] = 0;
  _$jscoverage['utility.js'][102] = 0;
  _$jscoverage['utility.js'][103] = 0;
  _$jscoverage['utility.js'][104] = 0;
  _$jscoverage['utility.js'][105] = 0;
  _$jscoverage['utility.js'][106] = 0;
  _$jscoverage['utility.js'][107] = 0;
  _$jscoverage['utility.js'][108] = 0;
  _$jscoverage['utility.js'][110] = 0;
  _$jscoverage['utility.js'][127] = 0;
  _$jscoverage['utility.js'][128] = 0;
  _$jscoverage['utility.js'][129] = 0;
  _$jscoverage['utility.js'][132] = 0;
  _$jscoverage['utility.js'][141] = 0;
  _$jscoverage['utility.js'][142] = 0;
  _$jscoverage['utility.js'][145] = 0;
  _$jscoverage['utility.js'][147] = 0;
  _$jscoverage['utility.js'][148] = 0;
  _$jscoverage['utility.js'][150] = 0;
  _$jscoverage['utility.js'][151] = 0;
  _$jscoverage['utility.js'][154] = 0;
  _$jscoverage['utility.js'][155] = 0;
  _$jscoverage['utility.js'][156] = 0;
  _$jscoverage['utility.js'][159] = 0;
}
_$jscoverage['utility.js'][11]++;
function Utility() {
  _$jscoverage['utility.js'][12]++;
  return Object.keys(arguments)? require("lodash").pick.apply(null, [Utility, Array.prototype.slice.call(arguments)]): Utility;
}
_$jscoverage['utility.js'][20]++;
Object.defineProperties(module.exports = Utility, {convert_to_elastic: {value: (function convert_to_elastic(values, collection, db, cb) {
  _$jscoverage['utility.js'][31]++;
  var schema = collection.schema;
  _$jscoverage['utility.js'][33]++;
  async.forEach(Object.keys(schema), (function (key, callback) {
  _$jscoverage['utility.js'][34]++;
  if (! values[key]) {
    _$jscoverage['utility.js'][35]++;
    return callback();
  }
  else {
    _$jscoverage['utility.js'][37]++;
    if (schema[key].required) {
      _$jscoverage['utility.js'][38]++;
      return callback("Required field missing");
    }
    else {
      _$jscoverage['utility.js'][40]++;
      if (schema[key].type === "date") {
        _$jscoverage['utility.js'][41]++;
        var date = new Date(values[key]).toISOString().split("T");
        _$jscoverage['utility.js'][42]++;
        date = date[0].split("-").concat(date[1].split(":"));
        _$jscoverage['utility.js'][43]++;
        for (var i = 0; i < date.length; ++i) {
          _$jscoverage['utility.js'][44]++;
          date[i] = parseInt(date[i]);
}
        _$jscoverage['utility.js'][46]++;
        values[key] = date;
        _$jscoverage['utility.js'][47]++;
        return callback();
      }
      else {
        _$jscoverage['utility.js'][49]++;
        if (schema[key].autoIncrement === true && key != "id") {
          _$jscoverage['utility.js'][50]++;
          exports.getAutoIncrement(collection.identity, key, db, (function (err, value) {
  _$jscoverage['utility.js'][51]++;
  if (err) {
    _$jscoverage['utility.js'][51]++;
    return callback(err);
  }
  _$jscoverage['utility.js'][52]++;
  values[key] = value;
  _$jscoverage['utility.js'][53]++;
  return callback();
}));
        }
        else {
          _$jscoverage['utility.js'][57]++;
          return callback();
        }
      }
    }
  }
}), (function (err) {
  _$jscoverage['utility.js'][60]++;
  if (values.id && values.rev) {
    _$jscoverage['utility.js'][61]++;
    values._id = values.id.toString();
    _$jscoverage['utility.js'][62]++;
    values._rev = values.rev.toString();
    _$jscoverage['utility.js'][63]++;
    delete values.id;
    _$jscoverage['utility.js'][64]++;
    delete values.rev;
  }
  _$jscoverage['utility.js'][67]++;
  return cb(err, values);
}));
}), enumerable: true, writable: true, configurable: true}, from_elastic: {value: (function from_elastic(models, schema) {
  _$jscoverage['utility.js'][85]++;
  var results = [];
  _$jscoverage['utility.js'][86]++;
  _.each(Object.keys(schema), (function (key) {
  _$jscoverage['utility.js'][87]++;
  if (typeof schema[key] === "function") {
    _$jscoverage['utility.js'][88]++;
    _.each(models, (function (model) {
  _$jscoverage['utility.js'][89]++;
  model[key] = schema[key];
}));
  }
  else {
    _$jscoverage['utility.js'][91]++;
    if (schema[key].type === "date") {
      _$jscoverage['utility.js'][92]++;
      _.each(models, (function (model) {
  _$jscoverage['utility.js'][93]++;
  if (model.doc[key]) {
    _$jscoverage['utility.js'][94]++;
    model.doc[key] = new Date(Date.UTC(model.doc[key][0], model.doc[key][1] - 1, model.doc[key][2], model.doc[key][3], model.doc[key][4], model.doc[key][5]));
  }
}));
    }
  }
}));
  _$jscoverage['utility.js'][100]++;
  _.each(models, (function (model) {
  _$jscoverage['utility.js'][101]++;
  var result = model.doc;
  _$jscoverage['utility.js'][102]++;
  result.id = result._id;
  _$jscoverage['utility.js'][103]++;
  delete result._id;
  _$jscoverage['utility.js'][104]++;
  result.rev = result._rev;
  _$jscoverage['utility.js'][105]++;
  delete result._rev;
  _$jscoverage['utility.js'][106]++;
  result.createdAt = new Date(result.createdAt);
  _$jscoverage['utility.js'][107]++;
  result.updatedAt = new Date(result.updatedAt);
  _$jscoverage['utility.js'][108]++;
  results.push(result);
}));
  _$jscoverage['utility.js'][110]++;
  return results;
}), enumerable: true, writable: true, configurable: true}, merge: {value: (function merge(a, b) {
  _$jscoverage['utility.js'][127]++;
  if (a && b) {
    _$jscoverage['utility.js'][128]++;
    for (var key in b) {
      _$jscoverage['utility.js'][129]++;
      a[key] = b[key];
}
  }
  _$jscoverage['utility.js'][132]++;
  return a;
}), enumerable: true, writable: true, configurable: true}, parse_url: {value: (function parse_url(config) {
  _$jscoverage['utility.js'][141]++;
  if (! Utility.isString(config.url)) {
    _$jscoverage['utility.js'][142]++;
    return config;
  }
  _$jscoverage['utility.js'][145]++;
  var obj = url.parse(config.url);
  _$jscoverage['utility.js'][147]++;
  config.host = obj.hostname || config.host;
  _$jscoverage['utility.js'][148]++;
  config.port = obj.port || config.port;
  _$jscoverage['utility.js'][150]++;
  if (Utility.isString(obj.path)) {
    _$jscoverage['utility.js'][151]++;
    config.database = obj.path.split("/")[1] || config.database;
  }
  _$jscoverage['utility.js'][154]++;
  if (Utility.isString(obj.auth)) {
    _$jscoverage['utility.js'][155]++;
    config.user = obj.auth.split(":")[0] || config.user;
    _$jscoverage['utility.js'][156]++;
    config.password = obj.auth.split(":")[1] || config.password;
  }
  _$jscoverage['utility.js'][159]++;
  return config;
}), enumerable: true, writable: true, configurable: true}, extend: {value: require("lodash").extend, enumerable: false, writable: true, configurable: true}, isString: {value: require("lodash").isString, enumerable: false, writable: true, configurable: true}, pluck: {value: require("lodash").pluck, enumerable: true, configurable: true, writable: true}});
_$jscoverage['utility.js'].source = ["/**"," * Helper Utility Collection"," *"," * @class Utility"," * @constructor"," * @method Utility"," *"," * @author potanin@UD"," * @date 6/17/13"," */","function Utility() {","  return Object.keys( arguments ) ? require( 'lodash' ).pick.apply( null, [ Utility, Array.prototype.slice.call( arguments ) ] ) : Utility;","}","","/**"," * Utility Properties"," *"," * @for Utility"," */","Object.defineProperties( module.exports = Utility, {","  convert_to_elastic: {","    /**","     * Converts a Waterline model to ElasticSearch document.","     *","     * @param values","     * @param collection","     * @param db","     * @param cb","     */","    value: function convert_to_elastic( values,collection,db,cb ){","      var schema = collection.schema;","","      async.forEach(Object.keys(schema), function(key,callback){","          if (!values[key]){","            return callback();","          }","          else if (schema[key].required){","            return callback(\"Required field missing\");","          }","          else if (schema[key].type === 'date'){","            var date = new Date(values[key]).toISOString().split(\"T\");","            date = date[0].split(\"-\").concat(date[1].split(\":\"));","            for (var i = 0; i &lt; date.length; ++i){","              date[i] = parseInt(date[i]);","            }","            values[key] = date;","            return callback();","          }","          else if (schema[key].autoIncrement === true &amp;&amp; key != \"id\"){","            exports.getAutoIncrement(collection.identity,key,db,function(err,value){","              if (err) return callback(err);","              values[key] = value;","              return callback();","            });","          }","          else{","            return callback();","          }","        },function(err){","        if (values.id &amp;&amp; values.rev){","          values._id = values.id.toString();","          values._rev = values.rev.toString();","          delete values.id;","          delete values.rev;","        }","","        return cb(err,values);","      });","","    },","    enumerable: true,","    writable: true,","    configurable: true","  },","  from_elastic: {","    /**","     * Converts ElasticSearch document to Waterline Model","     *","     * @param models","     * @param schema","     * @returns {Array}","     */","    value: function from_elastic( models, schema ){","","      var results = [];","      _.each(Object.keys(schema),function(key){","        if (typeof schema[key] === 'function'){","          _.each(models,function(model){","            model[key] = schema[key];","          });","        }else if (schema[key].type === 'date'){","          _.each(models,function(model){","            if (model.doc[key]){","              model.doc[key] = new Date( Date.UTC( model.doc[key][0], model.doc[key][1] - 1, model.doc[key][2],","                model.doc[key][3],model.doc[key][4],model.doc[key][5]));","            }","          });","        }","      });","      _.each(models,function(model){","        var result = model.doc;","        result.id = result._id;","        delete result._id;","        result.rev = result._rev;","        delete result._rev;","        result.createdAt = new Date(result.createdAt);","        result.updatedAt = new Date(result.updatedAt);","        results.push(result);","      });","      return results;","","","    },","    enumerable: true,","    writable: true,","    configurable: true","  },","  merge: {","    /**","     * Simple Merge (not deep)","     *","     * @param a","     * @param b","     * @returns {*}","     */","    value: function merge (a, b){","      if (a &amp;&amp; b) {","        for (var key in b) {","          a[key] = b[key];","        }","      }","      return a;","    },","    enumerable: true,","    writable: true,","    configurable: true","  },","  parse_url: {","    value: function parse_url( config ) {","","      if( !Utility.isString( config.url ) ) {","        return config;","      }","","      var obj = url.parse(config.url);","","      config.host = obj.hostname || config.host;","      config.port = obj.port || config.port;","","      if( Utility.isString( obj.path ) ) {","        config.database = obj.path.split(\"/\")[1] || config.database;","      }","","      if( Utility.isString( obj.auth ) ) {","        config.user = obj.auth.split(\":\")[0] || config.user;","        config.password = obj.auth.split(\":\")[1] || config.password;","      }","","      return config;","","    },","    enumerable: true,","    writable: true,","    configurable: true","  },","  extend: {","    value: require( 'lodash' ).extend,","    enumerable: false,","    writable: true,","    configurable: true","  },","  isString: {","    value: require( 'lodash' ).isString,","    enumerable: false,","    writable: true,","    configurable: true","  },","  pluck: {","    value: require( 'lodash' ).pluck,","    enumerable: true,","    configurable: true,","    writable: true","  }","});"];
