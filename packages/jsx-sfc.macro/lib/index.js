"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helperModuleImports = require("@babel/helper-module-imports");

var _traverse = _interopRequireDefault(require("@babel/traverse"));

var _babelPluginMacros = require("babel-plugin-macros");

var _babelPluginJsxSfc = _interopRequireDefault(require("babel-plugin-jsx-sfc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function jsxSfcMacro(_ref) {
  var references = _ref.references,
      state = _ref.state,
      t = _ref.babel.types,
      _ref$config = _ref.config;
  _ref$config = _ref$config === void 0 ? {} : _ref$config;

  var _ref$config$importMod = _ref$config.importModuleName,
      importModuleName = _ref$config$importMod === void 0 ? 'jsx-sfc' : _ref$config$importMod,
      config = _objectWithoutProperties(_ref$config, ["importModuleName"]);

  var program = state.file.path; // FIRST STEP : replace `jsx-sfc.macro` by `jsx-sfc
  // references looks like this
  // { default: [path, path], css: [path], ... }

  var customImportName;
  Object.keys(references).forEach(function (refName) {
    // generate new identifier
    var id;

    if (refName === 'default') {
      id = (0, _helperModuleImports.addDefault)(program, importModuleName, {
        nameHint: 'sfc'
      });
      customImportName = id;
    } else {
      id = (0, _helperModuleImports.addNamed)(program, refName, importModuleName, {
        nameHint: refName
      });
    } // update references with the new identifiers


    references[refName].forEach(function (referencePath) {
      // eslint-disable-next-line no-param-reassign
      referencePath.node.name = id.name;
    });
  }); // SECOND STEP : apply babel-plugin-jsx-sfc to the file

  var stateWithOpts = _objectSpread(_objectSpread({}, state), {}, {
    opts: _objectSpread(_objectSpread({}, config), {}, {
      topLevelImportPaths: (config.topLevelImportPaths || []).concat(importModuleName)
    }),
    customImportName: customImportName
  });

  (0, _traverse["default"])(program.parent, (0, _babelPluginJsxSfc["default"])().visitor, undefined, stateWithOpts);
}

var _default = (0, _babelPluginMacros.createMacro)(jsxSfcMacro, {
  configName: 'jsxSfc'
});

exports["default"] = _default;