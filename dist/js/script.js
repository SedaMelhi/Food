/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/browserslist/browser.js":
/*!**********************************************!*\
  !*** ./node_modules/browserslist/browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BrowserslistError = __webpack_require__(/*! ./error */ "./node_modules/browserslist/error.js")

function noop() {}

module.exports = {
  loadQueries: function loadQueries() {
    throw new BrowserslistError(
      'Sharable configs are not supported in client-side build of Browserslist'
    )
  },

  getStat: function getStat(opts) {
    return opts.stats
  },

  loadConfig: function loadConfig(opts) {
    if (opts.config) {
      throw new BrowserslistError(
        'Browserslist config are not supported in client-side build'
      )
    }
  },

  loadCountry: function loadCountry() {
    throw new BrowserslistError(
      'Country statistics are not supported ' +
        'in client-side build of Browserslist'
    )
  },

  loadFeature: function loadFeature() {
    throw new BrowserslistError(
      'Supports queries are not available in client-side build of Browserslist'
    )
  },

  currentNode: function currentNode(resolve, context) {
    return resolve(['maintained node versions'], context)[0]
  },

  parseConfig: noop,

  readConfig: noop,

  findConfig: noop,

  clearCaches: noop,

  oldDataWarning: noop
}


/***/ }),

/***/ "./node_modules/browserslist/error.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/error.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function BrowserslistError(message) {
  this.name = 'BrowserslistError'
  this.message = message
  this.browserslist = true
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, BrowserslistError)
  }
}

BrowserslistError.prototype = Error.prototype

module.exports = BrowserslistError


/***/ }),

/***/ "./node_modules/browserslist/index.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var jsReleases = __webpack_require__(/*! node-releases/data/processed/envs.json */ "./node_modules/node-releases/data/processed/envs.json")
var agents = __webpack_require__(/*! caniuse-lite/dist/unpacker/agents */ "./node_modules/caniuse-lite/dist/unpacker/agents.js").agents
var jsEOL = __webpack_require__(/*! node-releases/data/release-schedule/release-schedule.json */ "./node_modules/node-releases/data/release-schedule/release-schedule.json")
var path = __webpack_require__(/*! path */ 0)
var e2c = __webpack_require__(/*! electron-to-chromium/versions */ "./node_modules/electron-to-chromium/versions.js")

var BrowserslistError = __webpack_require__(/*! ./error */ "./node_modules/browserslist/error.js")
var parse = __webpack_require__(/*! ./parse */ "./node_modules/browserslist/parse.js")
var env = __webpack_require__(/*! ./node */ "./node_modules/browserslist/browser.js") // Will load browser.js in webpack

var YEAR = 365.259641 * 24 * 60 * 60 * 1000
var ANDROID_EVERGREEN_FIRST = 37

// Helpers

function isVersionsMatch(versionA, versionB) {
  return (versionA + '.').indexOf(versionB + '.') === 0
}

function isEolReleased(name) {
  var version = name.slice(1)
  return browserslist.nodeVersions.some(function (i) {
    return isVersionsMatch(i, version)
  })
}

function normalize(versions) {
  return versions.filter(function (version) {
    return typeof version === 'string'
  })
}

function normalizeElectron(version) {
  var versionToUse = version
  if (version.split('.').length === 3) {
    versionToUse = version.split('.').slice(0, -1).join('.')
  }
  return versionToUse
}

function nameMapper(name) {
  return function mapName(version) {
    return name + ' ' + version
  }
}

function getMajor(version) {
  return parseInt(version.split('.')[0])
}

function getMajorVersions(released, number) {
  if (released.length === 0) return []
  var majorVersions = uniq(released.map(getMajor))
  var minimum = majorVersions[majorVersions.length - number]
  if (!minimum) {
    return released
  }
  var selected = []
  for (var i = released.length - 1; i >= 0; i--) {
    if (minimum > getMajor(released[i])) break
    selected.unshift(released[i])
  }
  return selected
}

function uniq(array) {
  var filtered = []
  for (var i = 0; i < array.length; i++) {
    if (filtered.indexOf(array[i]) === -1) filtered.push(array[i])
  }
  return filtered
}

function fillUsage(result, name, data) {
  for (var i in data) {
    result[name + ' ' + i] = data[i]
  }
}

function generateFilter(sign, version) {
  version = parseFloat(version)
  if (sign === '>') {
    return function (v) {
      return parseFloat(v) > version
    }
  } else if (sign === '>=') {
    return function (v) {
      return parseFloat(v) >= version
    }
  } else if (sign === '<') {
    return function (v) {
      return parseFloat(v) < version
    }
  } else {
    return function (v) {
      return parseFloat(v) <= version
    }
  }
}

function generateSemverFilter(sign, version) {
  version = version.split('.').map(parseSimpleInt)
  version[1] = version[1] || 0
  version[2] = version[2] || 0
  if (sign === '>') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) > 0
    }
  } else if (sign === '>=') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) >= 0
    }
  } else if (sign === '<') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) > 0
    }
  } else {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) >= 0
    }
  }
}

function parseSimpleInt(x) {
  return parseInt(x)
}

function compare(a, b) {
  if (a < b) return -1
  if (a > b) return +1
  return 0
}

function compareSemver(a, b) {
  return (
    compare(parseInt(a[0]), parseInt(b[0])) ||
    compare(parseInt(a[1] || '0'), parseInt(b[1] || '0')) ||
    compare(parseInt(a[2] || '0'), parseInt(b[2] || '0'))
  )
}

// this follows the npm-like semver behavior
function semverFilterLoose(operator, range) {
  range = range.split('.').map(parseSimpleInt)
  if (typeof range[1] === 'undefined') {
    range[1] = 'x'
  }
  // ignore any patch version because we only return minor versions
  // range[2] = 'x'
  switch (operator) {
    case '<=':
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) <= 0
      }
    case '>=':
    default:
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) >= 0
      }
  }
}

// this follows the npm-like semver behavior
function compareSemverLoose(version, range) {
  if (version[0] !== range[0]) {
    return version[0] < range[0] ? -1 : +1
  }
  if (range[1] === 'x') {
    return 0
  }
  if (version[1] !== range[1]) {
    return version[1] < range[1] ? -1 : +1
  }
  return 0
}

function resolveVersion(data, version) {
  if (data.versions.indexOf(version) !== -1) {
    return version
  } else if (browserslist.versionAliases[data.name][version]) {
    return browserslist.versionAliases[data.name][version]
  } else {
    return false
  }
}

function normalizeVersion(data, version) {
  var resolved = resolveVersion(data, version)
  if (resolved) {
    return resolved
  } else if (data.versions.length === 1) {
    return data.versions[0]
  } else {
    return false
  }
}

function filterByYear(since, context) {
  since = since / 1000
  return Object.keys(agents).reduce(function (selected, name) {
    var data = byName(name, context)
    if (!data) return selected
    var versions = Object.keys(data.releaseDate).filter(function (v) {
      var date = data.releaseDate[v]
      return date !== null && date >= since
    })
    return selected.concat(versions.map(nameMapper(data.name)))
  }, [])
}

function cloneData(data) {
  return {
    name: data.name,
    versions: data.versions,
    released: data.released,
    releaseDate: data.releaseDate
  }
}

function mapVersions(data, map) {
  data.versions = data.versions.map(function (i) {
    return map[i] || i
  })
  data.released = data.released.map(function (i) {
    return map[i] || i
  })
  var fixedDate = {}
  for (var i in data.releaseDate) {
    fixedDate[map[i] || i] = data.releaseDate[i]
  }
  data.releaseDate = fixedDate
  return data
}

function byName(name, context) {
  name = name.toLowerCase()
  name = browserslist.aliases[name] || name
  if (context.mobileToDesktop && browserslist.desktopNames[name]) {
    var desktop = browserslist.data[browserslist.desktopNames[name]]
    if (name === 'android') {
      return normalizeAndroidData(cloneData(browserslist.data[name]), desktop)
    } else {
      var cloned = cloneData(desktop)
      cloned.name = name
      if (name === 'op_mob') {
        cloned = mapVersions(cloned, { '10.0-10.1': '10' })
      }
      return cloned
    }
  }
  return browserslist.data[name]
}

function normalizeAndroidVersions(androidVersions, chromeVersions) {
  var firstEvergreen = ANDROID_EVERGREEN_FIRST
  var last = chromeVersions[chromeVersions.length - 1]
  return androidVersions
    .filter(function (version) {
      return /^(?:[2-4]\.|[34]$)/.test(version)
    })
    .concat(chromeVersions.slice(firstEvergreen - last - 1))
}

function normalizeAndroidData(android, chrome) {
  android.released = normalizeAndroidVersions(android.released, chrome.released)
  android.versions = normalizeAndroidVersions(android.versions, chrome.versions)
  return android
}

function checkName(name, context) {
  var data = byName(name, context)
  if (!data) throw new BrowserslistError('Unknown browser ' + name)
  return data
}

function unknownQuery(query) {
  return new BrowserslistError(
    'Unknown browser query `' +
      query +
      '`. ' +
      'Maybe you are using old Browserslist or made typo in query.'
  )
}

function filterAndroid(list, versions, context) {
  if (context.mobileToDesktop) return list
  var released = browserslist.data.android.released
  var last = released[released.length - 1]
  var diff = last - ANDROID_EVERGREEN_FIRST - versions
  if (diff > 0) {
    return list.slice(-1)
  } else {
    return list.slice(diff - 1)
  }
}

function resolve(queries, context) {
  return parse(QUERIES, queries).reduce(function (result, node, index) {
    if (node.not && index === 0) {
      throw new BrowserslistError(
        'Write any browsers query (for instance, `defaults`) ' +
          'before `' +
          node.query +
          '`'
      )
    }
    var type = QUERIES[node.type]
    var array = type.select.call(browserslist, context, node).map(function (j) {
      var parts = j.split(' ')
      if (parts[1] === '0') {
        return parts[0] + ' ' + byName(parts[0], context).versions[0]
      } else {
        return j
      }
    })

    if (node.compose === 'and') {
      if (node.not) {
        return result.filter(function (j) {
          return array.indexOf(j) === -1
        })
      } else {
        return result.filter(function (j) {
          return array.indexOf(j) !== -1
        })
      }
    } else {
      if (node.not) {
        var filter = {}
        array.forEach(function (j) {
          filter[j] = true
        })
        return result.filter(function (j) {
          return !filter[j]
        })
      }
      return result.concat(array)
    }
  }, [])
}

function prepareOpts(opts) {
  if (typeof opts === 'undefined') opts = {}

  if (typeof opts.path === 'undefined') {
    opts.path = path.resolve ? path.resolve('.') : '.'
  }

  return opts
}

function prepareQueries(queries, opts) {
  if (typeof queries === 'undefined' || queries === null) {
    var config = browserslist.loadConfig(opts)
    if (config) {
      queries = config
    } else {
      queries = browserslist.defaults
    }
  }

  return queries
}

function checkQueries(queries) {
  if (!(typeof queries === 'string' || Array.isArray(queries))) {
    throw new BrowserslistError(
      'Browser queries must be an array or string. Got ' + typeof queries + '.'
    )
  }
}

var cache = {}

function browserslist(queries, opts) {
  opts = prepareOpts(opts)
  queries = prepareQueries(queries, opts)
  checkQueries(queries)

  var context = {
    ignoreUnknownVersions: opts.ignoreUnknownVersions,
    dangerousExtend: opts.dangerousExtend,
    mobileToDesktop: opts.mobileToDesktop,
    path: opts.path,
    env: opts.env
  }

  env.oldDataWarning(browserslist.data)
  var stats = env.getStat(opts, browserslist.data)
  if (stats) {
    context.customUsage = {}
    for (var browser in stats) {
      fillUsage(context.customUsage, browser, stats[browser])
    }
  }

  var cacheKey = JSON.stringify([queries, context])
  if (cache[cacheKey]) return cache[cacheKey]

  var result = uniq(resolve(queries, context)).sort(function (name1, name2) {
    name1 = name1.split(' ')
    name2 = name2.split(' ')
    if (name1[0] === name2[0]) {
      // assumptions on caniuse data
      // 1) version ranges never overlaps
      // 2) if version is not a range, it never contains `-`
      var version1 = name1[1].split('-')[0]
      var version2 = name2[1].split('-')[0]
      return compareSemver(version2.split('.'), version1.split('.'))
    } else {
      return compare(name1[0], name2[0])
    }
  })
  if (!process.env.BROWSERSLIST_DISABLE_CACHE) {
    cache[cacheKey] = result
  }
  return result
}

browserslist.parse = function (queries, opts) {
  opts = prepareOpts(opts)
  queries = prepareQueries(queries, opts)
  checkQueries(queries)
  return parse(QUERIES, queries)
}

// Will be filled by Can I Use data below
browserslist.cache = {}
browserslist.data = {}
browserslist.usage = {
  global: {},
  custom: null
}

// Default browsers query
browserslist.defaults = ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']

// Browser names aliases
browserslist.aliases = {
  fx: 'firefox',
  ff: 'firefox',
  ios: 'ios_saf',
  explorer: 'ie',
  blackberry: 'bb',
  explorermobile: 'ie_mob',
  operamini: 'op_mini',
  operamobile: 'op_mob',
  chromeandroid: 'and_chr',
  firefoxandroid: 'and_ff',
  ucandroid: 'and_uc',
  qqandroid: 'and_qq'
}

// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
browserslist.desktopNames = {
  and_chr: 'chrome',
  and_ff: 'firefox',
  ie_mob: 'ie',
  op_mob: 'opera',
  android: 'chrome' // has extra processing logic
}

// Aliases to work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = {}

browserslist.clearCaches = env.clearCaches
browserslist.parseConfig = env.parseConfig
browserslist.readConfig = env.readConfig
browserslist.findConfig = env.findConfig
browserslist.loadConfig = env.loadConfig

browserslist.coverage = function (browsers, stats) {
  var data
  if (typeof stats === 'undefined') {
    data = browserslist.usage.global
  } else if (stats === 'my stats') {
    var opts = {}
    opts.path = path.resolve ? path.resolve('.') : '.'
    var customStats = env.getStat(opts)
    if (!customStats) {
      throw new BrowserslistError('Custom usage statistics was not provided')
    }
    data = {}
    for (var browser in customStats) {
      fillUsage(data, browser, customStats[browser])
    }
  } else if (typeof stats === 'string') {
    if (stats.length > 2) {
      stats = stats.toLowerCase()
    } else {
      stats = stats.toUpperCase()
    }
    env.loadCountry(browserslist.usage, stats, browserslist.data)
    data = browserslist.usage[stats]
  } else {
    if ('dataByBrowser' in stats) {
      stats = stats.dataByBrowser
    }
    data = {}
    for (var name in stats) {
      for (var version in stats[name]) {
        data[name + ' ' + version] = stats[name][version]
      }
    }
  }

  return browsers.reduce(function (all, i) {
    var usage = data[i]
    if (usage === undefined) {
      usage = data[i.replace(/ \S+$/, ' 0')]
    }
    return all + (usage || 0)
  }, 0)
}

function nodeQuery(context, node) {
  var matched = browserslist.nodeVersions.filter(function (i) {
    return isVersionsMatch(i, node.version)
  })
  if (matched.length === 0) {
    if (context.ignoreUnknownVersions) {
      return []
    } else {
      throw new BrowserslistError(
        'Unknown version ' + node.version + ' of Node.js'
      )
    }
  }
  return ['node ' + matched[matched.length - 1]]
}

function sinceQuery(context, node) {
  var year = parseInt(node.year)
  var month = parseInt(node.month || '01') - 1
  var day = parseInt(node.day || '01')
  return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context)
}

function coverQuery(context, node) {
  var coverage = parseFloat(node.coverage)
  var usage = browserslist.usage.global
  if (node.place) {
    if (node.place.match(/^my\s+stats$/i)) {
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      usage = context.customUsage
    } else {
      var place
      if (node.place.length === 2) {
        place = node.place.toUpperCase()
      } else {
        place = node.place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      usage = browserslist.usage[place]
    }
  }
  var versions = Object.keys(usage).sort(function (a, b) {
    return usage[b] - usage[a]
  })
  var coveraged = 0
  var result = []
  var version
  for (var i = 0; i < versions.length; i++) {
    version = versions[i]
    if (usage[version] === 0) break
    coveraged += usage[version]
    result.push(version)
    if (coveraged >= coverage) break
  }
  return result
}

var QUERIES = {
  last_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = getMajorVersions(data.released, node.versions)
        list = list.map(nameMapper(data.name))
        if (data.name === 'android') {
          list = filterAndroid(list, node.versions, context)
        }
        return selected.concat(list)
      }, [])
    }
  },
  last_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.released.slice(-node.versions)
        list = list.map(nameMapper(data.name))
        if (data.name === 'android') {
          list = filterAndroid(list, node.versions, context)
        }
        return selected.concat(list)
      }, [])
    }
  },
  last_electron_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
    select: function (context, node) {
      var validVersions = getMajorVersions(Object.keys(e2c), node.versions)
      return validVersions.map(function (i) {
        return 'chrome ' + e2c[i]
      })
    }
  },
  last_node_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
    select: function (context, node) {
      return getMajorVersions(browserslist.nodeVersions, node.versions).map(
        function (version) {
          return 'node ' + version
        }
      )
    }
  },
  last_browser_major_versions: {
    matches: ['versions', 'browser'],
    regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var validVersions = getMajorVersions(data.released, node.versions)
      var list = validVersions.map(nameMapper(data.name))
      if (data.name === 'android') {
        list = filterAndroid(list, node.versions, context)
      }
      return list
    }
  },
  last_electron_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(e2c)
        .slice(-node.versions)
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  last_node_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .slice(-node.versions)
        .map(function (version) {
          return 'node ' + version
        })
    }
  },
  last_browser_versions: {
    matches: ['versions', 'browser'],
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var list = data.released.slice(-node.versions).map(nameMapper(data.name))
      if (data.name === 'android') {
        list = filterAndroid(list, node.versions, context)
      }
      return list
    }
  },
  unreleased_versions: {
    matches: [],
    regexp: /^unreleased\s+versions$/i,
    select: function (context) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.versions.filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        list = list.map(nameMapper(data.name))
        return selected.concat(list)
      }, [])
    }
  },
  unreleased_electron_versions: {
    matches: [],
    regexp: /^unreleased\s+electron\s+versions?$/i,
    select: function () {
      return []
    }
  },
  unreleased_browser_versions: {
    matches: ['browser'],
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      return data.versions
        .filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        .map(nameMapper(data.name))
    }
  },
  last_years: {
    matches: ['years'],
    regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
    select: function (context, node) {
      return filterByYear(Date.now() - YEAR * node.years, context)
    }
  },
  since_y: {
    matches: ['year'],
    regexp: /^since (\d+)$/i,
    select: sinceQuery
  },
  since_y_m: {
    matches: ['year', 'month'],
    regexp: /^since (\d+)-(\d+)$/i,
    select: sinceQuery
  },
  since_y_m_d: {
    matches: ['year', 'month', 'day'],
    regexp: /^since (\d+)-(\d+)-(\d+)$/i,
    select: sinceQuery
  },
  popularity: {
    matches: ['sign', 'popularity'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var usage = browserslist.usage.global
      return Object.keys(usage).reduce(function (result, version) {
        if (node.sign === '>') {
          if (usage[version] > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (usage[version] < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (usage[version] <= popularity) {
            result.push(version)
          }
        } else if (usage[version] >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_my_stats: {
    matches: ['sign', 'popularity'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_config_stats: {
    matches: ['sign', 'popularity', 'config'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var stats = env.loadStat(context, node.config, browserslist.data)
      if (stats) {
        context.customUsage = {}
        for (var browser in stats) {
          fillUsage(context.customUsage, browser, stats[browser])
        }
      }
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_place: {
    matches: ['sign', 'popularity', 'place'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var place = node.place
      if (place.length === 2) {
        place = place.toUpperCase()
      } else {
        place = place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      var usage = browserslist.usage[place]
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  cover: {
    matches: ['coverage'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
    select: coverQuery
  },
  cover_in: {
    matches: ['coverage', 'place'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
    select: coverQuery
  },
  supports: {
    matches: ['feature'],
    regexp: /^supports\s+([\w-]+)$/,
    select: function (context, node) {
      env.loadFeature(browserslist.cache, node.feature)
      var features = browserslist.cache[node.feature]
      return Object.keys(features).reduce(function (result, version) {
        var flags = features[version]
        if (flags.indexOf('y') >= 0 || flags.indexOf('a') >= 0) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  electron_range: {
    matches: ['from', 'to'],
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      var fromToUse = normalizeElectron(node.from)
      var toToUse = normalizeElectron(node.to)
      var from = parseFloat(node.from)
      var to = parseFloat(node.to)
      if (!e2c[fromToUse]) {
        throw new BrowserslistError('Unknown version ' + from + ' of electron')
      }
      if (!e2c[toToUse]) {
        throw new BrowserslistError('Unknown version ' + to + ' of electron')
      }
      return Object.keys(e2c)
        .filter(function (i) {
          var parsed = parseFloat(i)
          return parsed >= from && parsed <= to
        })
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  node_range: {
    matches: ['from', 'to'],
    regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .filter(semverFilterLoose('>=', node.from))
        .filter(semverFilterLoose('<=', node.to))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  browser_range: {
    matches: ['browser', 'from', 'to'],
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var from = parseFloat(normalizeVersion(data, node.from) || node.from)
      var to = parseFloat(normalizeVersion(data, node.to) || node.to)
      function filter(v) {
        var parsed = parseFloat(v)
        return parsed >= from && parsed <= to
      }
      return data.released.filter(filter).map(nameMapper(data.name))
    }
  },
  electron_ray: {
    matches: ['sign', 'version'],
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, node) {
      var versionToUse = normalizeElectron(node.version)
      return Object.keys(e2c)
        .filter(generateFilter(node.sign, versionToUse))
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  node_ray: {
    matches: ['sign', 'version'],
    regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .filter(generateSemverFilter(node.sign, node.version))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  browser_ray: {
    matches: ['browser', 'sign', 'version'],
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
    select: function (context, node) {
      var version = node.version
      var data = checkName(node.browser, context)
      var alias = browserslist.versionAliases[data.name][version]
      if (alias) version = alias
      return data.released
        .filter(generateFilter(node.sign, version))
        .map(function (v) {
          return data.name + ' ' + v
        })
    }
  },
  firefox_esr: {
    matches: [],
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function () {
      return ['firefox 102']
    }
  },
  opera_mini_all: {
    matches: [],
    regexp: /(operamini|op_mini)\s+all/i,
    select: function () {
      return ['op_mini all']
    }
  },
  electron_version: {
    matches: ['version'],
    regexp: /^electron\s+([\d.]+)$/i,
    select: function (context, node) {
      var versionToUse = normalizeElectron(node.version)
      var chrome = e2c[versionToUse]
      if (!chrome) {
        throw new BrowserslistError(
          'Unknown version ' + node.version + ' of electron'
        )
      }
      return ['chrome ' + chrome]
    }
  },
  node_major_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+)$/i,
    select: nodeQuery
  },
  node_minor_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+\.\d+)$/i,
    select: nodeQuery
  },
  node_patch_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
    select: nodeQuery
  },
  current_node: {
    matches: [],
    regexp: /^current\s+node$/i,
    select: function (context) {
      return [env.currentNode(resolve, context)]
    }
  },
  maintained_node: {
    matches: [],
    regexp: /^maintained\s+node\s+versions$/i,
    select: function (context) {
      var now = Date.now()
      var queries = Object.keys(jsEOL)
        .filter(function (key) {
          return (
            now < Date.parse(jsEOL[key].end) &&
            now > Date.parse(jsEOL[key].start) &&
            isEolReleased(key)
          )
        })
        .map(function (key) {
          return 'node ' + key.slice(1)
        })
      return resolve(queries, context)
    }
  },
  phantomjs_1_9: {
    matches: [],
    regexp: /^phantomjs\s+1.9$/i,
    select: function () {
      return ['safari 5']
    }
  },
  phantomjs_2_1: {
    matches: [],
    regexp: /^phantomjs\s+2.1$/i,
    select: function () {
      return ['safari 6']
    }
  },
  browser_version: {
    matches: ['browser', 'version'],
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function (context, node) {
      var version = node.version
      if (/^tp$/i.test(version)) version = 'TP'
      var data = checkName(node.browser, context)
      var alias = normalizeVersion(data, version)
      if (alias) {
        version = alias
      } else {
        if (version.indexOf('.') === -1) {
          alias = version + '.0'
        } else {
          alias = version.replace(/\.0$/, '')
        }
        alias = normalizeVersion(data, alias)
        if (alias) {
          version = alias
        } else if (context.ignoreUnknownVersions) {
          return []
        } else {
          throw new BrowserslistError(
            'Unknown version ' + version + ' of ' + node.browser
          )
        }
      }
      return [data.name + ' ' + version]
    }
  },
  browserslist_config: {
    matches: [],
    regexp: /^browserslist config$/i,
    select: function (context) {
      return browserslist(undefined, context)
    }
  },
  extends: {
    matches: ['config'],
    regexp: /^extends (.+)$/i,
    select: function (context, node) {
      return resolve(env.loadQueries(context, node.config), context)
    }
  },
  defaults: {
    matches: [],
    regexp: /^defaults$/i,
    select: function (context) {
      return resolve(browserslist.defaults, context)
    }
  },
  dead: {
    matches: [],
    regexp: /^dead$/i,
    select: function (context) {
      var dead = [
        'Baidu >= 0',
        'ie <= 11',
        'ie_mob <= 11',
        'bb <= 10',
        'op_mob <= 12.1',
        'samsung 4'
      ]
      return resolve(dead, context)
    }
  },
  unknown: {
    matches: [],
    regexp: /^(\w+)$/i,
    select: function (context, node) {
      if (byName(node.query, context)) {
        throw new BrowserslistError(
          'Specify versions in Browserslist query for browser ' + node.query
        )
      } else {
        throw unknownQuery(node.query)
      }
    }
  }
}

// Get and convert Can I Use data

;(function () {
  for (var name in agents) {
    var browser = agents[name]
    browserslist.data[name] = {
      name: name,
      versions: normalize(agents[name].versions),
      released: normalize(agents[name].versions.slice(0, -3)),
      releaseDate: agents[name].release_date
    }
    fillUsage(browserslist.usage.global, name, browser.usage_global)

    browserslist.versionAliases[name] = {}
    for (var i = 0; i < browser.versions.length; i++) {
      var full = browser.versions[i]
      if (!full) continue

      if (full.indexOf('-') !== -1) {
        var interval = full.split('-')
        for (var j = 0; j < interval.length; j++) {
          browserslist.versionAliases[name][interval[j]] = full
        }
      }
    }
  }

  browserslist.versionAliases.op_mob['59'] = '58'

  browserslist.nodeVersions = jsReleases.map(function (release) {
    return release.version
  })
})()

module.exports = browserslist

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/browserslist/parse.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/parse.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var AND_REGEXP = /^\s+and\s+(.*)/i
var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i

function flatten(array) {
  if (!Array.isArray(array)) return [array]
  return array.reduce(function (a, b) {
    return a.concat(flatten(b))
  }, [])
}

function find(string, predicate) {
  for (var n = 1, max = string.length; n <= max; n++) {
    var parsed = string.substr(-n, n)
    if (predicate(parsed, n, max)) {
      return string.slice(0, -n)
    }
  }
  return ''
}

function matchQuery(all, query) {
  var node = { query: query }
  if (query.indexOf('not ') === 0) {
    node.not = true
    query = query.slice(4)
  }

  for (var name in all) {
    var type = all[name]
    var match = query.match(type.regexp)
    if (match) {
      node.type = name
      for (var i = 0; i < type.matches.length; i++) {
        node[type.matches[i]] = match[i + 1]
      }
      return node
    }
  }

  node.type = 'unknown'
  return node
}

function matchBlock(all, string, qs) {
  var node
  return find(string, function (parsed, n, max) {
    if (AND_REGEXP.test(parsed)) {
      node = matchQuery(all, parsed.match(AND_REGEXP)[1])
      node.compose = 'and'
      qs.unshift(node)
      return true
    } else if (OR_REGEXP.test(parsed)) {
      node = matchQuery(all, parsed.match(OR_REGEXP)[1])
      node.compose = 'or'
      qs.unshift(node)
      return true
    } else if (n === max) {
      node = matchQuery(all, parsed.trim())
      node.compose = 'or'
      qs.unshift(node)
      return true
    }
    return false
  })
}

module.exports = function parse(all, queries) {
  if (!Array.isArray(queries)) queries = [queries]
  return flatten(
    queries.map(function (block) {
      var qs = []
      do {
        block = matchBlock(all, block, qs)
      } while (block)
      return qs
    })
  )
}


/***/ }),

/***/ "./node_modules/caniuse-lite/data/agents.js":
/*!**************************************************!*\
  !*** ./node_modules/caniuse-lite/data/agents.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={A:{A:{J:0.0131217,D:0.00621152,E:0.0581246,F:0.0774995,A:0.00968743,B:0.571559,"9B":0.009298},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","9B","J","D","E","F","A","B","","",""],E:"IE",F:{"9B":962323200,J:998870400,D:1161129600,E:1237420800,F:1300060800,A:1346716800,B:1381968000}},B:{A:{C:0.003773,K:0.004267,L:0.004268,G:0.003773,M:0.003702,N:0.003773,O:0.015092,P:0,Q:0.004298,R:0.00944,S:0.004043,T:0.003773,U:0.003773,V:0.003974,W:0.003901,X:0.004318,Y:0.003773,Z:0.004118,a:0.003939,b:0.007546,e:0.004118,f:0.003939,g:0.003801,h:0.003901,i:0.003855,j:0.003929,k:0.003901,l:0.003773,m:0.007546,n:0.003773,o:0.011319,p:0.011319,q:0.018865,r:0.033957,c:1.13945,H:2.85239},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","C","K","L","G","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","e","f","g","h","i","j","k","l","m","n","o","p","q","r","c","H","","",""],E:"Edge",F:{C:1438128000,K:1447286400,L:1470096000,G:1491868800,M:1508198400,N:1525046400,O:1542067200,P:1579046400,Q:1581033600,R:1586736000,S:1590019200,T:1594857600,U:1598486400,V:1602201600,W:1605830400,X:1611360000,Y:1614816000,Z:1618358400,a:1622073600,b:1626912000,e:1630627200,f:1632441600,g:1634774400,h:1637539200,i:1641427200,j:1643932800,k:1646265600,l:1649635200,m:1651190400,n:1653955200,o:1655942400,p:1659657600,q:1661990400,r:1664755200,c:1666915200,H:1670198400},D:{C:"ms",K:"ms",L:"ms",G:"ms",M:"ms",N:"ms",O:"ms"}},C:{A:{"0":0.004317,"1":0.004393,"2":0.004418,"3":0.008834,"4":0.008322,"5":0.008928,"6":0.004471,"7":0.009284,"8":0.004707,"9":0.009076,AC:0.004118,rB:0.004271,I:0.011703,s:0.004879,J:0.020136,D:0.005725,E:0.004525,F:0.00533,A:0.004283,B:0.007546,C:0.004471,K:0.004486,L:0.00453,G:0.008322,M:0.004417,N:0.004425,O:0.004161,t:0.004443,u:0.004283,v:0.008322,w:0.013698,x:0.004161,y:0.008786,z:0.004118,AB:0.007546,BB:0.004783,CB:0.003929,DB:0.004783,EB:0.00487,FB:0.005029,GB:0.0047,HB:0.094325,IB:0.007546,JB:0.003867,KB:0.004525,LB:0.004293,MB:0.003773,NB:0.004538,OB:0.008282,PB:0.011601,QB:0.052822,RB:0.011601,SB:0.003929,TB:0.003974,UB:0.007546,VB:0.011601,WB:0.003939,sB:0.003773,XB:0.003929,tB:0.004356,YB:0.004425,ZB:0.008322,aB:0.00415,bB:0.004267,cB:0.003801,dB:0.004267,eB:0.003773,fB:0.00415,gB:0.004293,hB:0.004425,d:0.003773,iB:0.00415,jB:0.00415,kB:0.004318,lB:0.004356,mB:0.003974,nB:0.033957,P:0.003773,Q:0.003773,R:0.003773,uB:0.003773,S:0.003773,T:0.003929,U:0.004268,V:0.003801,W:0.011319,X:0.007546,Y:0.003773,Z:0.003773,a:0.018865,b:0.003801,e:0.003855,f:0.018865,g:0.003773,h:0.003773,i:0.003901,j:0.003901,k:0.007546,l:0.007546,m:0.007546,n:0.083006,o:0.030184,p:0.015092,q:0.030184,r:0.049049,c:1.12058,H:0.939477,vB:0.011319,wB:0,BC:0.008786,CC:0.00487},B:"moz",C:["AC","rB","BC","CC","I","s","J","D","E","F","A","B","C","K","L","G","M","N","O","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","sB","XB","tB","YB","ZB","aB","bB","cB","dB","eB","fB","gB","hB","d","iB","jB","kB","lB","mB","nB","P","Q","R","uB","S","T","U","V","W","X","Y","Z","a","b","e","f","g","h","i","j","k","l","m","n","o","p","q","r","c","H","vB","wB",""],E:"Firefox",F:{"0":1386633600,"1":1391472000,"2":1395100800,"3":1398729600,"4":1402358400,"5":1405987200,"6":1409616000,"7":1413244800,"8":1417392000,"9":1421107200,AC:1161648000,rB:1213660800,BC:1246320000,CC:1264032000,I:1300752000,s:1308614400,J:1313452800,D:1317081600,E:1317081600,F:1320710400,A:1324339200,B:1327968000,C:1331596800,K:1335225600,L:1338854400,G:1342483200,M:1346112000,N:1349740800,O:1353628800,t:1357603200,u:1361232000,v:1364860800,w:1368489600,x:1372118400,y:1375747200,z:1379376000,AB:1424736000,BB:1428278400,CB:1431475200,DB:1435881600,EB:1439251200,FB:1442880000,GB:1446508800,HB:1450137600,IB:1453852800,JB:1457395200,KB:1461628800,LB:1465257600,MB:1470096000,NB:1474329600,OB:1479168000,PB:1485216000,QB:1488844800,RB:1492560000,SB:1497312000,TB:1502150400,UB:1506556800,VB:1510617600,WB:1516665600,sB:1520985600,XB:1525824000,tB:1529971200,YB:1536105600,ZB:1540252800,aB:1544486400,bB:1548720000,cB:1552953600,dB:1558396800,eB:1562630400,fB:1567468800,gB:1571788800,hB:1575331200,d:1578355200,iB:1581379200,jB:1583798400,kB:1586304000,lB:1588636800,mB:1591056000,nB:1593475200,P:1595894400,Q:1598313600,R:1600732800,uB:1603152000,S:1605571200,T:1607990400,U:1611619200,V:1614038400,W:1616457600,X:1618790400,Y:1622505600,Z:1626134400,a:1628553600,b:1630972800,e:1633392000,f:1635811200,g:1638835200,h:1641859200,i:1644364800,j:1646697600,k:1649116800,l:1651536000,m:1653955200,n:1656374400,o:1658793600,p:1661212800,q:1663632000,r:1666051200,c:1668470400,H:1670889600,vB:null,wB:null}},D:{A:{"0":0.004141,"1":0.004326,"2":0.0047,"3":0.004538,"4":0.008322,"5":0.008596,"6":0.004566,"7":0.004118,"8":0.007546,"9":0.003901,I:0.004706,s:0.004879,J:0.004879,D:0.005591,E:0.005591,F:0.005591,A:0.004534,B:0.004464,C:0.010424,K:0.0083,L:0.004706,G:0.015087,M:0.004393,N:0.004393,O:0.008652,t:0.008322,u:0.004393,v:0.004317,w:0.003901,x:0.008786,y:0.003939,z:0.004461,AB:0.004335,BB:0.004464,CB:0.015092,DB:0.003867,EB:0.015092,FB:0.003773,GB:0.003974,HB:0.007546,IB:0.007948,JB:0.003974,KB:0.003867,LB:0.007546,MB:0.022638,NB:0.049049,OB:0.003867,PB:0.003929,QB:0.007546,RB:0.011319,SB:0.003867,TB:0.007546,UB:0.045276,VB:0.003773,WB:0.003773,sB:0.003773,XB:0.011319,tB:0.011319,YB:0.003773,ZB:0.015092,aB:0.003773,bB:0.011319,cB:0.030184,dB:0.007546,eB:0.007546,fB:0.079233,gB:0.026411,hB:0.011319,d:0.03773,iB:0.011319,jB:0.045276,kB:0.041503,lB:0.026411,mB:0.011319,nB:0.033957,P:0.120736,Q:0.041503,R:0.041503,S:0.07546,T:0.045276,U:0.094325,V:0.07546,W:0.079233,X:0.018865,Y:0.033957,Z:0.026411,a:0.056595,b:0.041503,e:0.049049,f:0.033957,g:0.022638,h:0.041503,i:0.056595,j:0.098098,k:0.049049,l:0.079233,m:0.060368,n:0.098098,o:0.279202,p:0.124509,q:0.192423,r:0.286748,c:3.64849,H:16.8389,vB:0.033957,wB:0.018865,DC:0.011319},B:"webkit",C:["","","","","","I","s","J","D","E","F","A","B","C","K","L","G","M","N","O","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","sB","XB","tB","YB","ZB","aB","bB","cB","dB","eB","fB","gB","hB","d","iB","jB","kB","lB","mB","nB","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","e","f","g","h","i","j","k","l","m","n","o","p","q","r","c","H","vB","wB","DC"],E:"Chrome",F:{"0":1361404800,"1":1364428800,"2":1369094400,"3":1374105600,"4":1376956800,"5":1384214400,"6":1389657600,"7":1392940800,"8":1397001600,"9":1400544000,I:1264377600,s:1274745600,J:1283385600,D:1287619200,E:1291248000,F:1296777600,A:1299542400,B:1303862400,C:1307404800,K:1312243200,L:1316131200,G:1316131200,M:1319500800,N:1323734400,O:1328659200,t:1332892800,u:1337040000,v:1340668800,w:1343692800,x:1348531200,y:1352246400,z:1357862400,AB:1405468800,BB:1409011200,CB:1412640000,DB:1416268800,EB:1421798400,FB:1425513600,GB:1429401600,HB:1432080000,IB:1437523200,JB:1441152000,KB:1444780800,LB:1449014400,MB:1453248000,NB:1456963200,OB:1460592000,PB:1464134400,QB:1469059200,RB:1472601600,SB:1476230400,TB:1480550400,UB:1485302400,VB:1489017600,WB:1492560000,sB:1496707200,XB:1500940800,tB:1504569600,YB:1508198400,ZB:1512518400,aB:1516752000,bB:1520294400,cB:1523923200,dB:1527552000,eB:1532390400,fB:1536019200,gB:1539648000,hB:1543968000,d:1548720000,iB:1552348800,jB:1555977600,kB:1559606400,lB:1564444800,mB:1568073600,nB:1571702400,P:1575936000,Q:1580860800,R:1586304000,S:1589846400,T:1594684800,U:1598313600,V:1601942400,W:1605571200,X:1611014400,Y:1614556800,Z:1618272000,a:1621987200,b:1626739200,e:1630368000,f:1632268800,g:1634601600,h:1637020800,i:1641340800,j:1643673600,k:1646092800,l:1648512000,m:1650931200,n:1653350400,o:1655769600,p:1659398400,q:1661817600,r:1664236800,c:1666656000,H:1669680000,vB:null,wB:null,DC:null}},E:{A:{I:0,s:0.008322,J:0.004656,D:0.004465,E:0.003974,F:0.003929,A:0.004425,B:0.004318,C:0.003801,K:0.018865,L:0.094325,G:0.022638,EC:0,xB:0.008692,FC:0.011319,GC:0.00456,HC:0.004283,IC:0.022638,yB:0.007802,oB:0.007546,pB:0.033957,zB:0.18865,JC:0.256564,KC:0.041503,"0B":0.03773,"1B":0.094325,"2B":0.192423,"3B":1.313,qB:0.162239,"4B":0.64141,"5B":0.143374,"6B":0,LC:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","EC","xB","I","s","FC","J","GC","D","HC","E","F","IC","A","yB","B","oB","C","pB","K","zB","L","JC","G","KC","0B","1B","2B","3B","qB","4B","5B","6B","LC",""],E:"Safari",F:{EC:1205798400,xB:1226534400,I:1244419200,s:1275868800,FC:1311120000,J:1343174400,GC:1382400000,D:1382400000,HC:1410998400,E:1413417600,F:1443657600,IC:1458518400,A:1474329600,yB:1490572800,B:1505779200,oB:1522281600,C:1537142400,pB:1553472000,K:1568851200,zB:1585008000,L:1600214400,JC:1619395200,G:1632096000,KC:1635292800,"0B":1639353600,"1B":1647216000,"2B":1652745600,"3B":1658275200,qB:1662940800,"4B":1666569600,"5B":1670889600,"6B":null,LC:null}},F:{A:{"0":0.005595,"1":0.004393,"2":0.007546,"3":0.004879,"4":0.004879,"5":0.003773,"6":0.005152,"7":0.005014,"8":0.009758,"9":0.004879,F:0.0082,B:0.016581,C:0.004317,G:0.00685,M:0.00685,N:0.00685,O:0.005014,t:0.006015,u:0.004879,v:0.006597,w:0.006597,x:0.013434,y:0.006702,z:0.006015,AB:0.003773,BB:0.004283,CB:0.004367,DB:0.004534,EB:0.007546,FB:0.004227,GB:0.004418,HB:0.004161,IB:0.004227,JB:0.004725,KB:0.015092,LB:0.008942,MB:0.004707,NB:0.004827,OB:0.004707,PB:0.004707,QB:0.004326,RB:0.008922,SB:0.014349,TB:0.004425,UB:0.00472,VB:0.004425,WB:0.004425,XB:0.00472,YB:0.004532,ZB:0.004566,aB:0.02283,bB:0.00867,cB:0.004656,dB:0.004642,eB:0.003929,fB:0.00944,gB:0.004293,hB:0.003929,d:0.004298,iB:0.096692,jB:0.004201,kB:0.004141,lB:0.004257,mB:0.003939,nB:0.008236,P:0.003855,Q:0.003939,R:0.008514,uB:0.003939,S:0.003939,T:0.003702,U:0.007546,V:0.003855,W:0.003855,X:0.003929,Y:0.007802,Z:0.011703,a:0.007546,b:0.207515,MC:0.00685,NC:0,OC:0.008392,PC:0.004706,oB:0.006229,"7B":0.004879,QC:0.008786,pB:0.00472},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","F","MC","NC","OC","PC","B","oB","7B","QC","C","pB","G","M","N","O","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","ZB","aB","bB","cB","dB","eB","fB","gB","hB","d","iB","jB","kB","lB","mB","nB","P","Q","R","uB","S","T","U","V","W","X","Y","Z","a","b","","",""],E:"Opera",F:{"0":1417132800,"1":1422316800,"2":1425945600,"3":1430179200,"4":1433808000,"5":1438646400,"6":1442448000,"7":1445904000,"8":1449100800,"9":1454371200,F:1150761600,MC:1223424000,NC:1251763200,OC:1267488000,PC:1277942400,B:1292457600,oB:1302566400,"7B":1309219200,QC:1323129600,C:1323129600,pB:1352073600,G:1372723200,M:1377561600,N:1381104000,O:1386288000,t:1390867200,u:1393891200,v:1399334400,w:1401753600,x:1405987200,y:1409616000,z:1413331200,AB:1457308800,BB:1462320000,CB:1465344000,DB:1470096000,EB:1474329600,FB:1477267200,GB:1481587200,HB:1486425600,IB:1490054400,JB:1494374400,KB:1498003200,LB:1502236800,MB:1506470400,NB:1510099200,OB:1515024000,PB:1517961600,QB:1521676800,RB:1525910400,SB:1530144000,TB:1534982400,UB:1537833600,VB:1543363200,WB:1548201600,XB:1554768000,YB:1561593600,ZB:1566259200,aB:1570406400,bB:1573689600,cB:1578441600,dB:1583971200,eB:1587513600,fB:1592956800,gB:1595894400,hB:1600128000,d:1603238400,iB:1613520000,jB:1612224000,kB:1616544000,lB:1619568000,mB:1623715200,nB:1627948800,P:1631577600,Q:1633392000,R:1635984000,uB:1638403200,S:1642550400,T:1644969600,U:1647993600,V:1650412800,W:1652745600,X:1654646400,Y:1657152000,Z:1660780800,a:1663113600,b:1668816000},D:{F:"o",B:"o",C:"o",MC:"o",NC:"o",OC:"o",PC:"o",oB:"o","7B":"o",QC:"o",pB:"o"}},G:{A:{E:0,xB:0,RC:0,"8B":0.00470195,SC:0.00470195,TC:0.00313463,UC:0.0141058,VC:0.00626926,WC:0.0188078,XC:0.0611253,YC:0.00783658,ZC:0.106577,aC:0.0282117,bC:0.0266444,cC:0.0250771,dC:0.405935,eC:0.0423175,fC:0.0109712,gC:0.0391829,hC:0.141058,iC:0.340108,jC:0.647301,kC:0.186511,"0B":0.239799,"1B":0.304059,"2B":0.546993,"3B":2.31493,qB:2.09864,"4B":6.33196,"5B":0.694321,"6B":0.0156732},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","xB","RC","8B","SC","TC","UC","E","VC","WC","XC","YC","ZC","aC","bC","cC","dC","eC","fC","gC","hC","iC","jC","kC","0B","1B","2B","3B","qB","4B","5B","6B","",""],E:"Safari on iOS",F:{xB:1270252800,RC:1283904000,"8B":1299628800,SC:1331078400,TC:1359331200,UC:1394409600,E:1410912000,VC:1413763200,WC:1442361600,XC:1458518400,YC:1473724800,ZC:1490572800,aC:1505779200,bC:1522281600,cC:1537142400,dC:1553472000,eC:1568851200,fC:1572220800,gC:1580169600,hC:1585008000,iC:1600214400,jC:1619395200,kC:1632096000,"0B":1639353600,"1B":1647216000,"2B":1652659200,"3B":1658275200,qB:1662940800,"4B":1666569600,"5B":1670889600,"6B":null}},H:{A:{lC:0.966988},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","lC","","",""],E:"Opera Mini",F:{lC:1426464000}},I:{A:{rB:0,I:0.0306951,H:0,mC:0,nC:0.0204634,oC:0,pC:0.0204634,"8B":0.0818537,qC:0,rC:0.4195},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","mC","nC","oC","rB","I","pC","8B","qC","rC","H","","",""],E:"Android Browser",F:{mC:1256515200,nC:1274313600,oC:1291593600,rB:1298332800,I:1318896000,pC:1341792000,"8B":1374624000,qC:1386547200,rC:1401667200,H:1669939200}},J:{A:{D:0,A:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","D","A","","",""],E:"Blackberry Browser",F:{D:1325376000,A:1359504000}},K:{A:{A:0,B:0,C:0,d:0.0111391,oB:0,"7B":0,pB:0},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","oB","7B","C","pB","d","","",""],E:"Opera Mobile",F:{A:1287100800,B:1300752000,oB:1314835200,"7B":1318291200,C:1330300800,pB:1349740800,d:1666828800},D:{d:"webkit"}},L:{A:{H:41.5426},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","H","","",""],E:"Chrome for Android",F:{H:1669939200}},M:{A:{c:0.292716},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","c","","",""],E:"Firefox for Android",F:{c:1668470400}},N:{A:{A:0.0115934,B:0.022664},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","","",""],E:"IE Mobile",F:{A:1340150400,B:1353456000}},O:{A:{sC:1.75007},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","sC","","",""],E:"UC Browser for Android",F:{sC:1634688000},D:{sC:"webkit"}},P:{A:{I:0.166409,tC:0.0103543,uC:0.010304,vC:0.0520028,wC:0.0103584,xC:0.0104443,yB:0.0105043,yC:0.0312017,zC:0.0104006,"0C":0.0520028,"1C":0.0624033,"2C":0.0312017,qB:0.114406,"3C":0.124807,"4C":0.249613,"5C":2.25692},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","I","tC","uC","vC","wC","xC","yB","yC","zC","0C","1C","2C","qB","3C","4C","5C","","",""],E:"Samsung Internet",F:{I:1461024000,tC:1481846400,uC:1509408000,vC:1528329600,wC:1546128000,xC:1554163200,yB:1567900800,yC:1582588800,zC:1593475200,"0C":1605657600,"1C":1618531200,"2C":1629072000,qB:1640736000,"3C":1651708800,"4C":1659657600,"5C":1667260800}},Q:{A:{zB:0.199296},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","zB","","",""],E:"QQ Browser",F:{zB:1663718400}},R:{A:{"6C":0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","6C","","",""],E:"Baidu Browser",F:{"6C":1663027200}},S:{A:{"7C":0.068508},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","7C","","",""],E:"KaiOS Browser",F:{"7C":1527811200}}};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/browserVersions.js":
/*!***********************************************************!*\
  !*** ./node_modules/caniuse-lite/data/browserVersions.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={"0":"26","1":"27","2":"28","3":"29","4":"30","5":"31","6":"32","7":"33","8":"34","9":"35",A:"10",B:"11",C:"12",D:"7",E:"8",F:"9",G:"15",H:"108",I:"4",J:"6",K:"13",L:"14",M:"16",N:"17",O:"18",P:"79",Q:"80",R:"81",S:"83",T:"84",U:"85",V:"86",W:"87",X:"88",Y:"89",Z:"90",a:"91",b:"92",c:"107",d:"72",e:"93",f:"94",g:"95",h:"96",i:"97",j:"98",k:"99",l:"100",m:"101",n:"102",o:"103",p:"104",q:"105",r:"106",s:"5",t:"19",u:"20",v:"21",w:"22",x:"23",y:"24",z:"25",AB:"36",BB:"37",CB:"38",DB:"39",EB:"40",FB:"41",GB:"42",HB:"43",IB:"44",JB:"45",KB:"46",LB:"47",MB:"48",NB:"49",OB:"50",PB:"51",QB:"52",RB:"53",SB:"54",TB:"55",UB:"56",VB:"57",WB:"58",XB:"60",YB:"62",ZB:"63",aB:"64",bB:"65",cB:"66",dB:"67",eB:"68",fB:"69",gB:"70",hB:"71",iB:"73",jB:"74",kB:"75",lB:"76",mB:"77",nB:"78",oB:"11.1",pB:"12.1",qB:"16.0",rB:"3",sB:"59",tB:"61",uB:"82",vB:"109",wB:"110",xB:"3.2",yB:"10.1",zB:"13.1","0B":"15.2-15.3","1B":"15.4","2B":"15.5","3B":"15.6","4B":"16.1","5B":"16.2","6B":"16.3","7B":"11.5","8B":"4.2-4.3","9B":"5.5",AC:"2",BC:"3.5",CC:"3.6",DC:"111",EC:"3.1",FC:"5.1",GC:"6.1",HC:"7.1",IC:"9.1",JC:"14.1",KC:"15.1",LC:"TP",MC:"9.5-9.6",NC:"10.0-10.1",OC:"10.5",PC:"10.6",QC:"11.6",RC:"4.0-4.1",SC:"5.0-5.1",TC:"6.0-6.1",UC:"7.0-7.1",VC:"8.1-8.4",WC:"9.0-9.2",XC:"9.3",YC:"10.0-10.2",ZC:"10.3",aC:"11.0-11.2",bC:"11.3-11.4",cC:"12.0-12.1",dC:"12.2-12.5",eC:"13.0-13.1",fC:"13.2",gC:"13.3",hC:"13.4-13.7",iC:"14.0-14.4",jC:"14.5-14.8",kC:"15.0-15.1",lC:"all",mC:"2.1",nC:"2.2",oC:"2.3",pC:"4.1",qC:"4.4",rC:"4.4.3-4.4.4",sC:"13.4",tC:"5.0-5.4",uC:"6.2-6.4",vC:"7.2-7.4",wC:"8.2",xC:"9.2",yC:"11.1-11.2",zC:"12.0","0C":"13.0","1C":"14.0","2C":"15.0","3C":"17.0","4C":"18.0","5C":"19.0","6C":"13.18","7C":"2.5"};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/browsers.js":
/*!****************************************************!*\
  !*** ./node_modules/caniuse-lite/data/browsers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={A:"ie",B:"edge",C:"firefox",D:"chrome",E:"safari",F:"opera",G:"ios_saf",H:"op_mini",I:"android",J:"bb",K:"op_mob",L:"and_chr",M:"and_ff",N:"ie_mob",O:"and_uc",P:"samsung",Q:"and_qq",R:"baidu",S:"kaios"};


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/agents.js":
/*!***********************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/agents.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const browsers = __webpack_require__(/*! ./browsers */ "./node_modules/caniuse-lite/dist/unpacker/browsers.js").browsers
const versions = __webpack_require__(/*! ./browserVersions */ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js").browserVersions
const agentsData = __webpack_require__(/*! ../../data/agents */ "./node_modules/caniuse-lite/data/agents.js")

function unpackBrowserVersions(versionsData) {
  return Object.keys(versionsData).reduce((usage, version) => {
    usage[versions[version]] = versionsData[version]
    return usage
  }, {})
}

module.exports.agents = Object.keys(agentsData).reduce((map, key) => {
  let versionsData = agentsData[key]
  map[browsers[key]] = Object.keys(versionsData).reduce((data, entry) => {
    if (entry === 'A') {
      data.usage_global = unpackBrowserVersions(versionsData[entry])
    } else if (entry === 'C') {
      data.versions = versionsData[entry].reduce((list, version) => {
        if (version === '') {
          list.push(null)
        } else {
          list.push(versions[version])
        }
        return list
      }, [])
    } else if (entry === 'D') {
      data.prefix_exceptions = unpackBrowserVersions(versionsData[entry])
    } else if (entry === 'E') {
      data.browser = versionsData[entry]
    } else if (entry === 'F') {
      data.release_date = Object.keys(versionsData[entry]).reduce(
        (map2, key2) => {
          map2[versions[key2]] = versionsData[entry][key2]
          return map2
        },
        {}
      )
    } else {
      // entry is B
      data.prefix = versionsData[entry]
    }
    return data
  }, {})
  return map
}, {})


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/browserVersions.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.browserVersions = __webpack_require__(/*! ../../data/browserVersions */ "./node_modules/caniuse-lite/data/browserVersions.js")


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/browsers.js":
/*!*************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/browsers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.browsers = __webpack_require__(/*! ../../data/browsers */ "./node_modules/caniuse-lite/data/browsers.js")


/***/ }),

/***/ "./node_modules/electron-to-chromium/versions.js":
/*!*******************************************************!*\
  !*** ./node_modules/electron-to-chromium/versions.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"0.20": "39",
	"0.21": "41",
	"0.22": "41",
	"0.23": "41",
	"0.24": "41",
	"0.25": "42",
	"0.26": "42",
	"0.27": "43",
	"0.28": "43",
	"0.29": "43",
	"0.30": "44",
	"0.31": "45",
	"0.32": "45",
	"0.33": "45",
	"0.34": "45",
	"0.35": "45",
	"0.36": "47",
	"0.37": "49",
	"1.0": "49",
	"1.1": "50",
	"1.2": "51",
	"1.3": "52",
	"1.4": "53",
	"1.5": "54",
	"1.6": "56",
	"1.7": "58",
	"1.8": "59",
	"2.0": "61",
	"2.1": "61",
	"3.0": "66",
	"3.1": "66",
	"4.0": "69",
	"4.1": "69",
	"4.2": "69",
	"5.0": "73",
	"6.0": "76",
	"6.1": "76",
	"7.0": "78",
	"7.1": "78",
	"7.2": "78",
	"7.3": "78",
	"8.0": "80",
	"8.1": "80",
	"8.2": "80",
	"8.3": "80",
	"8.4": "80",
	"8.5": "80",
	"9.0": "83",
	"9.1": "83",
	"9.2": "83",
	"9.3": "83",
	"9.4": "83",
	"10.0": "85",
	"10.1": "85",
	"10.2": "85",
	"10.3": "85",
	"10.4": "85",
	"11.0": "87",
	"11.1": "87",
	"11.2": "87",
	"11.3": "87",
	"11.4": "87",
	"11.5": "87",
	"12.0": "89",
	"12.1": "89",
	"12.2": "89",
	"13.0": "91",
	"13.1": "91",
	"13.2": "91",
	"13.3": "91",
	"13.4": "91",
	"13.5": "91",
	"13.6": "91",
	"14.0": "93",
	"14.1": "93",
	"14.2": "93",
	"15.0": "94",
	"15.1": "94",
	"15.2": "94",
	"15.3": "94",
	"15.4": "94",
	"15.5": "94",
	"16.0": "96",
	"16.1": "96",
	"16.2": "96",
	"17.0": "98",
	"17.1": "98",
	"17.2": "98",
	"17.3": "98",
	"17.4": "98",
	"18.0": "100",
	"18.1": "100",
	"18.2": "100",
	"18.3": "100",
	"19.0": "102",
	"19.1": "102",
	"20.0": "104",
	"20.1": "104",
	"20.2": "104",
	"20.3": "104",
	"21.0": "106",
	"21.1": "106",
	"22.0": "108"
};

/***/ }),

/***/ "./node_modules/node-releases/data/processed/envs.json":
/*!*************************************************************!*\
  !*** ./node_modules/node-releases/data/processed/envs.json ***!
  \*************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"nodejs\",\"version\":\"0.2.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.3.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.4.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.5.0\",\"date\":\"2011-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.6.0\",\"date\":\"2011-11-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.7.0\",\"date\":\"2012-01-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.8.0\",\"date\":\"2012-06-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.9.0\",\"date\":\"2012-07-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.10.0\",\"date\":\"2013-03-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.11.0\",\"date\":\"2013-03-28\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"0.12.0\",\"date\":\"2015-02-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.0.0\",\"date\":\"2015-09-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.1.0\",\"date\":\"2015-09-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.2.0\",\"date\":\"2015-10-12\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.3.0\",\"date\":\"2016-02-09\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.4.0\",\"date\":\"2016-03-08\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.5.0\",\"date\":\"2016-08-16\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.6.0\",\"date\":\"2016-09-27\",\"lts\":\"Argon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"4.7.0\",\"date\":\"2016-12-06\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.8.0\",\"date\":\"2017-02-21\",\"lts\":\"Argon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"4.9.0\",\"date\":\"2018-03-28\",\"lts\":\"Argon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"5.0.0\",\"date\":\"2015-10-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.1.0\",\"date\":\"2015-11-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.2.0\",\"date\":\"2015-12-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.3.0\",\"date\":\"2015-12-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.4.0\",\"date\":\"2016-01-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.5.0\",\"date\":\"2016-01-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.6.0\",\"date\":\"2016-02-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.7.0\",\"date\":\"2016-02-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.8.0\",\"date\":\"2016-03-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.9.0\",\"date\":\"2016-03-16\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.10.0\",\"date\":\"2016-04-01\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.11.0\",\"date\":\"2016-04-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"5.12.0\",\"date\":\"2016-06-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.0.0\",\"date\":\"2016-04-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.1.0\",\"date\":\"2016-05-05\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.2.0\",\"date\":\"2016-05-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.3.0\",\"date\":\"2016-07-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.4.0\",\"date\":\"2016-08-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.5.0\",\"date\":\"2016-08-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.6.0\",\"date\":\"2016-09-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.7.0\",\"date\":\"2016-09-27\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"6.8.0\",\"date\":\"2016-10-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.9.0\",\"date\":\"2016-10-18\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.10.0\",\"date\":\"2017-02-21\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.11.0\",\"date\":\"2017-06-06\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.12.0\",\"date\":\"2017-11-06\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.13.0\",\"date\":\"2018-02-10\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.14.0\",\"date\":\"2018-03-28\",\"lts\":\"Boron\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"6.15.0\",\"date\":\"2018-11-27\",\"lts\":\"Boron\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"6.16.0\",\"date\":\"2018-12-26\",\"lts\":\"Boron\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"6.17.0\",\"date\":\"2019-02-28\",\"lts\":\"Boron\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"7.0.0\",\"date\":\"2016-10-25\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.1.0\",\"date\":\"2016-11-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.2.0\",\"date\":\"2016-11-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.3.0\",\"date\":\"2016-12-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.4.0\",\"date\":\"2017-01-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.5.0\",\"date\":\"2017-01-31\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.6.0\",\"date\":\"2017-02-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.7.0\",\"date\":\"2017-02-28\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.8.0\",\"date\":\"2017-03-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.9.0\",\"date\":\"2017-04-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"7.10.0\",\"date\":\"2017-05-02\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.0.0\",\"date\":\"2017-05-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.1.0\",\"date\":\"2017-06-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.2.0\",\"date\":\"2017-07-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.3.0\",\"date\":\"2017-08-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.4.0\",\"date\":\"2017-08-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.5.0\",\"date\":\"2017-09-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.6.0\",\"date\":\"2017-09-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.7.0\",\"date\":\"2017-10-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.8.0\",\"date\":\"2017-10-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.9.0\",\"date\":\"2017-10-31\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.10.0\",\"date\":\"2018-03-06\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.11.0\",\"date\":\"2018-03-28\",\"lts\":\"Carbon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"8.12.0\",\"date\":\"2018-09-10\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.13.0\",\"date\":\"2018-11-20\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.14.0\",\"date\":\"2018-11-27\",\"lts\":\"Carbon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"8.15.0\",\"date\":\"2018-12-26\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.16.0\",\"date\":\"2019-04-16\",\"lts\":\"Carbon\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"8.17.0\",\"date\":\"2019-12-17\",\"lts\":\"Carbon\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"9.0.0\",\"date\":\"2017-10-31\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.1.0\",\"date\":\"2017-11-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.2.0\",\"date\":\"2017-11-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.3.0\",\"date\":\"2017-12-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.4.0\",\"date\":\"2018-01-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.5.0\",\"date\":\"2018-01-31\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.6.0\",\"date\":\"2018-02-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.7.0\",\"date\":\"2018-03-01\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.8.0\",\"date\":\"2018-03-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.9.0\",\"date\":\"2018-03-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"9.10.0\",\"date\":\"2018-03-28\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"9.11.0\",\"date\":\"2018-04-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.0.0\",\"date\":\"2018-04-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.1.0\",\"date\":\"2018-05-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.2.0\",\"date\":\"2018-05-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.3.0\",\"date\":\"2018-05-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.4.0\",\"date\":\"2018-06-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.5.0\",\"date\":\"2018-06-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.6.0\",\"date\":\"2018-07-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.7.0\",\"date\":\"2018-07-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.8.0\",\"date\":\"2018-08-01\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.9.0\",\"date\":\"2018-08-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.10.0\",\"date\":\"2018-09-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.11.0\",\"date\":\"2018-09-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.12.0\",\"date\":\"2018-10-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.13.0\",\"date\":\"2018-10-30\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.14.0\",\"date\":\"2018-11-27\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"10.15.0\",\"date\":\"2018-12-26\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.16.0\",\"date\":\"2019-05-28\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.17.0\",\"date\":\"2019-10-22\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.18.0\",\"date\":\"2019-12-17\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"10.19.0\",\"date\":\"2020-02-05\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"10.20.0\",\"date\":\"2020-03-26\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.21.0\",\"date\":\"2020-06-02\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"10.22.0\",\"date\":\"2020-07-21\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.23.0\",\"date\":\"2020-10-27\",\"lts\":\"Dubnium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"10.24.0\",\"date\":\"2021-02-23\",\"lts\":\"Dubnium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"11.0.0\",\"date\":\"2018-10-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.1.0\",\"date\":\"2018-10-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.2.0\",\"date\":\"2018-11-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.3.0\",\"date\":\"2018-11-27\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"11.4.0\",\"date\":\"2018-12-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.5.0\",\"date\":\"2018-12-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.6.0\",\"date\":\"2018-12-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.7.0\",\"date\":\"2019-01-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.8.0\",\"date\":\"2019-01-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.9.0\",\"date\":\"2019-01-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.10.0\",\"date\":\"2019-02-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.11.0\",\"date\":\"2019-03-05\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.12.0\",\"date\":\"2019-03-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.13.0\",\"date\":\"2019-03-28\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.14.0\",\"date\":\"2019-04-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"11.15.0\",\"date\":\"2019-04-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.0.0\",\"date\":\"2019-04-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.1.0\",\"date\":\"2019-04-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.2.0\",\"date\":\"2019-05-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.3.0\",\"date\":\"2019-05-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.4.0\",\"date\":\"2019-06-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.5.0\",\"date\":\"2019-06-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.6.0\",\"date\":\"2019-07-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.7.0\",\"date\":\"2019-07-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.8.0\",\"date\":\"2019-08-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.9.0\",\"date\":\"2019-08-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.10.0\",\"date\":\"2019-09-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.11.0\",\"date\":\"2019-09-25\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.12.0\",\"date\":\"2019-10-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.13.0\",\"date\":\"2019-10-21\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.14.0\",\"date\":\"2019-12-17\",\"lts\":\"Erbium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"12.15.0\",\"date\":\"2020-02-05\",\"lts\":\"Erbium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"12.16.0\",\"date\":\"2020-02-11\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.17.0\",\"date\":\"2020-05-26\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.18.0\",\"date\":\"2020-06-02\",\"lts\":\"Erbium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"12.19.0\",\"date\":\"2020-10-06\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.20.0\",\"date\":\"2020-11-24\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"12.21.0\",\"date\":\"2021-02-23\",\"lts\":\"Erbium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"12.22.0\",\"date\":\"2021-03-30\",\"lts\":\"Erbium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.0.0\",\"date\":\"2019-10-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.1.0\",\"date\":\"2019-11-05\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.2.0\",\"date\":\"2019-11-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.3.0\",\"date\":\"2019-12-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.4.0\",\"date\":\"2019-12-17\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"13.5.0\",\"date\":\"2019-12-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.6.0\",\"date\":\"2020-01-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.7.0\",\"date\":\"2020-01-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.8.0\",\"date\":\"2020-02-05\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"13.9.0\",\"date\":\"2020-02-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.10.0\",\"date\":\"2020-03-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.11.0\",\"date\":\"2020-03-12\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.12.0\",\"date\":\"2020-03-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.13.0\",\"date\":\"2020-04-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"13.14.0\",\"date\":\"2020-04-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.0.0\",\"date\":\"2020-04-21\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.1.0\",\"date\":\"2020-04-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.2.0\",\"date\":\"2020-05-05\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.3.0\",\"date\":\"2020-05-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.4.0\",\"date\":\"2020-06-02\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"14.5.0\",\"date\":\"2020-06-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.6.0\",\"date\":\"2020-07-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.7.0\",\"date\":\"2020-07-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.8.0\",\"date\":\"2020-08-11\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.9.0\",\"date\":\"2020-08-27\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.10.0\",\"date\":\"2020-09-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.11.0\",\"date\":\"2020-09-15\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"14.12.0\",\"date\":\"2020-09-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.13.0\",\"date\":\"2020-09-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.14.0\",\"date\":\"2020-10-15\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.15.0\",\"date\":\"2020-10-27\",\"lts\":\"Fermium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.16.0\",\"date\":\"2021-02-23\",\"lts\":\"Fermium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"14.17.0\",\"date\":\"2021-05-11\",\"lts\":\"Fermium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.18.0\",\"date\":\"2021-09-28\",\"lts\":\"Fermium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.19.0\",\"date\":\"2022-02-01\",\"lts\":\"Fermium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"14.20.0\",\"date\":\"2022-07-07\",\"lts\":\"Fermium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"14.21.0\",\"date\":\"2022-11-01\",\"lts\":\"Fermium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.0.0\",\"date\":\"2020-10-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.1.0\",\"date\":\"2020-11-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.2.0\",\"date\":\"2020-11-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.3.0\",\"date\":\"2020-11-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.4.0\",\"date\":\"2020-12-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.5.0\",\"date\":\"2020-12-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.6.0\",\"date\":\"2021-01-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.7.0\",\"date\":\"2021-01-25\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.8.0\",\"date\":\"2021-02-02\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.9.0\",\"date\":\"2021-02-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.10.0\",\"date\":\"2021-02-23\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"15.11.0\",\"date\":\"2021-03-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.12.0\",\"date\":\"2021-03-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.13.0\",\"date\":\"2021-03-31\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"15.14.0\",\"date\":\"2021-04-06\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.0.0\",\"date\":\"2021-04-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.1.0\",\"date\":\"2021-05-04\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.2.0\",\"date\":\"2021-05-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.3.0\",\"date\":\"2021-06-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.4.0\",\"date\":\"2021-06-23\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.5.0\",\"date\":\"2021-07-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.6.0\",\"date\":\"2021-07-29\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"16.7.0\",\"date\":\"2021-08-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.8.0\",\"date\":\"2021-08-25\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.9.0\",\"date\":\"2021-09-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.10.0\",\"date\":\"2021-09-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.11.0\",\"date\":\"2021-10-08\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.12.0\",\"date\":\"2021-10-20\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.13.0\",\"date\":\"2021-10-26\",\"lts\":\"Gallium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.14.0\",\"date\":\"2022-02-08\",\"lts\":\"Gallium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.15.0\",\"date\":\"2022-04-26\",\"lts\":\"Gallium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.16.0\",\"date\":\"2022-07-07\",\"lts\":\"Gallium\",\"security\":true},{\"name\":\"nodejs\",\"version\":\"16.17.0\",\"date\":\"2022-08-16\",\"lts\":\"Gallium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.18.0\",\"date\":\"2022-10-12\",\"lts\":\"Gallium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"16.19.0\",\"date\":\"2022-12-13\",\"lts\":\"Gallium\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.0.0\",\"date\":\"2021-10-19\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.1.0\",\"date\":\"2021-11-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.2.0\",\"date\":\"2021-11-30\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.3.0\",\"date\":\"2021-12-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.4.0\",\"date\":\"2022-01-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.5.0\",\"date\":\"2022-02-10\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.6.0\",\"date\":\"2022-02-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.7.0\",\"date\":\"2022-03-09\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.8.0\",\"date\":\"2022-03-22\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"17.9.0\",\"date\":\"2022-04-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.0.0\",\"date\":\"2022-04-18\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.1.0\",\"date\":\"2022-05-03\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.2.0\",\"date\":\"2022-05-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.3.0\",\"date\":\"2022-06-02\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.4.0\",\"date\":\"2022-06-16\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.5.0\",\"date\":\"2022-07-06\",\"lts\":false,\"security\":true},{\"name\":\"nodejs\",\"version\":\"18.6.0\",\"date\":\"2022-07-13\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.7.0\",\"date\":\"2022-07-26\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.8.0\",\"date\":\"2022-08-24\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.9.0\",\"date\":\"2022-09-07\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.10.0\",\"date\":\"2022-09-28\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.11.0\",\"date\":\"2022-10-13\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"18.12.0\",\"date\":\"2022-10-25\",\"lts\":\"Hydrogen\",\"security\":false},{\"name\":\"nodejs\",\"version\":\"19.0.0\",\"date\":\"2022-10-17\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"19.1.0\",\"date\":\"2022-11-14\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"19.2.0\",\"date\":\"2022-11-29\",\"lts\":false,\"security\":false},{\"name\":\"nodejs\",\"version\":\"19.3.0\",\"date\":\"2022-12-14\",\"lts\":false,\"security\":false}]");

/***/ }),

/***/ "./node_modules/node-releases/data/release-schedule/release-schedule.json":
/*!********************************************************************************!*\
  !*** ./node_modules/node-releases/data/release-schedule/release-schedule.json ***!
  \********************************************************************************/
/*! exports provided: v0.8, v0.10, v0.12, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v0.8\":{\"start\":\"2012-06-25\",\"end\":\"2014-07-31\"},\"v0.10\":{\"start\":\"2013-03-11\",\"end\":\"2016-10-31\"},\"v0.12\":{\"start\":\"2015-02-06\",\"end\":\"2016-12-31\"},\"v4\":{\"start\":\"2015-09-08\",\"lts\":\"2015-10-12\",\"maintenance\":\"2017-04-01\",\"end\":\"2018-04-30\",\"codename\":\"Argon\"},\"v5\":{\"start\":\"2015-10-29\",\"maintenance\":\"2016-04-30\",\"end\":\"2016-06-30\"},\"v6\":{\"start\":\"2016-04-26\",\"lts\":\"2016-10-18\",\"maintenance\":\"2018-04-30\",\"end\":\"2019-04-30\",\"codename\":\"Boron\"},\"v7\":{\"start\":\"2016-10-25\",\"maintenance\":\"2017-04-30\",\"end\":\"2017-06-30\"},\"v8\":{\"start\":\"2017-05-30\",\"lts\":\"2017-10-31\",\"maintenance\":\"2019-01-01\",\"end\":\"2019-12-31\",\"codename\":\"Carbon\"},\"v9\":{\"start\":\"2017-10-01\",\"maintenance\":\"2018-04-01\",\"end\":\"2018-06-30\"},\"v10\":{\"start\":\"2018-04-24\",\"lts\":\"2018-10-30\",\"maintenance\":\"2020-05-19\",\"end\":\"2021-04-30\",\"codename\":\"Dubnium\"},\"v11\":{\"start\":\"2018-10-23\",\"maintenance\":\"2019-04-22\",\"end\":\"2019-06-01\"},\"v12\":{\"start\":\"2019-04-23\",\"lts\":\"2019-10-21\",\"maintenance\":\"2020-11-30\",\"end\":\"2022-04-30\",\"codename\":\"Erbium\"},\"v13\":{\"start\":\"2019-10-22\",\"maintenance\":\"2020-04-01\",\"end\":\"2020-06-01\"},\"v14\":{\"start\":\"2020-04-21\",\"lts\":\"2020-10-27\",\"maintenance\":\"2021-10-19\",\"end\":\"2023-04-30\",\"codename\":\"Fermium\"},\"v15\":{\"start\":\"2020-10-20\",\"maintenance\":\"2021-04-01\",\"end\":\"2021-06-01\"},\"v16\":{\"start\":\"2021-04-20\",\"lts\":\"2021-10-26\",\"maintenance\":\"2022-10-18\",\"end\":\"2023-09-11\",\"codename\":\"Gallium\"},\"v17\":{\"start\":\"2021-10-19\",\"maintenance\":\"2022-04-01\",\"end\":\"2022-06-01\"},\"v18\":{\"start\":\"2022-04-19\",\"lts\":\"2022-10-25\",\"maintenance\":\"2023-10-18\",\"end\":\"2025-04-30\",\"codename\":\"Hydrogen\"},\"v19\":{\"start\":\"2022-10-18\",\"maintenance\":\"2023-04-01\",\"end\":\"2023-06-01\"},\"v20\":{\"start\":\"2023-04-18\",\"lts\":\"2023-10-24\",\"maintenance\":\"2024-10-22\",\"end\":\"2026-04-30\",\"codename\":\"\"}}");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  data
} = __webpack_require__(/*! browserslist */ "./node_modules/browserslist/index.js");

document.addEventListener('DOMContentLoaded', () => {
  const tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js"),
        calc = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js"),
        cards = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js"),
        carousel = __webpack_require__(/*! ./modules/carousel */ "./src/js/modules/carousel.js"),
        form = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");

  tabs();
  timer();
  calc();
  cards();
  carousel();
  form();
  modal();
});

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  const result = document.querySelector('.calculating__result span'),
        genderBtns = document.querySelector('#gender'),
        ratioBtns = document.querySelector('#ratio'),
        calcInput = document.querySelectorAll('.calculating__choose_medium input'),
        calcData = JSON.parse(localStorage.getItem('dataCalc'));
  let gender = calcData ? calcData.gender : 'woman',
      height = calcData ? calcData.height : '',
      weight = calcData ? calcData.weight : '',
      age = calcData ? calcData.age : '',
      ratio = calcData ? calcData.ratio : 1.375;

  function calcTotal() {
    weight = +document.getElementById('weight').value.trim();
    height = +document.getElementById('height').value.trim();
    age = +document.getElementById('age').value.trim();
    localStorage.setItem('dataCalc', JSON.stringify({
      weight,
      height,
      age,
      gender,
      ratio
    }));

    if (!gender || !height || !weight || !age || !ratio) {
      result.innerText = '_____';
      return false;
    }

    if (gender == 'woman') {
      result.innerText = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.innerText = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  }

  function getStaticInformation(parentSelector, activeClass) {
    const btns = document.querySelectorAll(`${parentSelector} div`),
          activeBtn = document.querySelector(`${parentSelector} ${activeClass}`);
    btns.forEach(item => {
      item.classList.remove('calculating__choose-item_active');
    });
    activeBtn.classList.add('calculating__choose-item_active');

    if (activeBtn.dataset.ratio) {
      ratio = +activeBtn.dataset.ratio;
    } else {
      gender = activeBtn.id;
    }

    calcTotal();
  }

  genderBtns.addEventListener('click', e => {
    if (e.target.classList.contains('calculating__choose-item')) {
      getStaticInformation('#gender', `#${e.target.id}`);
    }
  });
  ratioBtns.addEventListener('click', e => {
    if (e.target.classList.contains('calculating__choose-item')) {
      getStaticInformation('#ratio', `#${e.target.id}`);
    }
  });
  calcInput.forEach(item => {
    item.value = calcData ? calcData[item.id] == 0 ? '' : calcData[item.id] : '';
    item.addEventListener('input', e => {
      const el = e.target;

      if (el.value.match(/\D/g)) {
        el.style.border = '1px solid red';
      } else {
        el.style.border = 'none';
      }

      calcTotal();
    });
  });

  if (calcData) {
    getStaticInformation('#gender', `#${calcData.gender}`);
    getStaticInformation('#ratio', `#${document.querySelector(`[data-ratio='${calcData.ratio}']`).id}`);
  }

  calcTotal();
}

module.exports = calc;

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cards() {
  const getData = async url => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  getData('http://localhost:3000/menu').then(data => {
    data.forEach((_ref) => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
      new menuItem(img, altimg, title, descr, price, '.menu .container').render();
    });
  });

  class menuItem {
    constructor(img, alt, title, description, price, parent) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.price = price;
      this.parent = document.querySelector(parent);
    }

    render() {
      const element = document.createElement('div');
      element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.img}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
      this.parent.append(element);
    }

  }
}

module.exports = cards;

/***/ }),

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function carousel() {
  const slides = document.querySelectorAll('.offer__slide'),
        slidesWrap = document.querySelector('.offer__slider-inner');
  sliderPrev = document.querySelector('.offer__slider-prev'), sliderNext = document.querySelector('.offer__slider-next');
  document.getElementById('total').innerText = slides.length < 10 ? `0${slides.length}` : slides.length;
  let startX = 0;
  let activeNum = 0;
  sliderPrev.addEventListener('click', () => {
    updateActiveSlide('left');
  });
  sliderNext.addEventListener('click', () => {
    updateActiveSlide('right');
  });

  function updateActiveNum(i) {
    const activeNumTag = document.getElementById('current');
    activeNumTag.innerText = i + 1 < 10 ? `0${i + 1}` : i + 1;
  }

  const updateActiveSlide = arrow => {
    const width = slides[0].scrollWidth;

    if (arrow == 'right') {
      startX -= width;
      startX = startX % (width * slides.length);
      slidesWrap.style.transform = `translateX(${startX}px)`;
      activeNum = (activeNum + 1) % slides.length;
      updateActiveNum(activeNum);
    }

    if (arrow == 'left') {
      startX += width;
      startX = startX % (width * slides.length) - width * slides.length;
      slidesWrap.style.transform = `translateX(${startX % (width * slides.length)}px)`;
      activeNum = (activeNum + 3) % slides.length;
      updateActiveNum(activeNum);
    }
  };

  setInterval(() => {
    updateActiveSlide('right');
  }, 2500);
}

module.exports = carousel;

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 15px auto 0;
            `;
      statusMessage.textContent = message.loading;
      form.insertAdjacentElement('afterend', statusMessage);
      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      postData('http://localhost:3000/requests', JSON.stringify(object)).then(data => {
        console.log(data);
        showThanksModal(message.success);
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      }).catch(() => showThanksModal(message.failure)).finally(() => {
        form.reset();
      });
    });
  }

  forms.forEach(item => bindPostData(item));
}

module.exports = form;

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
  modalTrigger.forEach(item => {
    item.addEventListener('click', () => {
      openModal();
    });
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target === modalCloseBtn) {
      closeModal(modal);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && !modal.classList.contains('hide')) {
      closeModal(modal);
    }
  });

  function closeModal(modal) {
    modal.classList.toggle('hide');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal();
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal(modal);
    }, 4000);
  }
}

module.exports = modal;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  const tabContents = document.querySelectorAll('.tabcontent'),
        tabHeader = document.querySelector('.tabheader__items'),
        tabheaderItem = document.querySelectorAll('.tabheader__item');

  const showTabContent = function () {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let tabs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : tabheaderItem;
    tabContents[i].classList.remove('hide');
    tabContents[i].classList.add('show', 'fade');
    tabs[i].classList.add('tabheader__item_active');
  };

  const hideTabContent = function () {
    let tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tabheaderItem;
    tabs.forEach(item => {
      if (item.classList.contains('tabheader__item_active')) {
        item.classList.remove('tabheader__item_active');
      }
    });
    tabContents.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
  };

  tabHeader.addEventListener('click', event => {
    const tabheaderItem = document.querySelectorAll('.tabheader__item'),
          target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabheaderItem.forEach((item, i) => {
        if (item === target) {
          hideTabContent(tabheaderItem);
          showTabContent(i, tabheaderItem);
        }
      });
    }
  });
  hideTabContent();
  showTabContent();
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  setClock('.timer');

  function getTimeRemaining(deadline, now) {
    const total = deadline - now,
          days = Math.floor(total / (1000 * 60 * 60 * 24)),
          hours = Math.floor(total / (1000 * 60 * 60) % 24),
          minutes = Math.floor(total / (1000 * 60) % 60),
          seconds = Math.floor(total / 1000 % 60);
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function setClock(selector) {
    const timer = document.querySelector(selector),
          timeInterval = setInterval(() => updateClock('.timer'), 1000);
    updateClock();

    function updateClock() {
      const deadline = new Date(2023, 2, 20),
            //'20.03.2023'
      now = new Date(),
            t = getTimeRemaining(deadline, now);

      if (t.total <= 500) {
        clearInterval(timeInterval);
      } else {
        timer.querySelector('#days').innerText = t.days > 9 ? t.days : '0' + t.days;
        timer.querySelector('#hours').innerText = t.hours > 9 ? t.hours : '0' + t.hours;
        timer.querySelector('#minutes').innerText = t.minutes > 9 ? t.minutes : '0' + t.minutes;
        timer.querySelector('#seconds').innerText = t.seconds > 9 ? t.seconds : '0' + t.seconds;
      }
    }
  }
}

module.exports = timer;

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=script.js.map