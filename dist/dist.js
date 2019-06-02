module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(15);

var assertThisInitialized = __webpack_require__(7);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(16);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesafeManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);




var FilesafeManager =
/*#__PURE__*/
function () {
  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(FilesafeManager, null, [{
    key: "get",

    /*
      Singleton. `instance` is nulled in the unload function.
     */
    value: function get() {
      if (this.instance == null) {
        this.instance = new FilesafeManager();
      }

      return this.instance;
    }
  }]);

  function FilesafeManager() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, FilesafeManager);

    this.unloadHandlers = [];
    this.dataChangeObservers = [];
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(FilesafeManager, [{
    key: "setFilesafeInstance",
    value: function setFilesafeInstance(filesafe) {
      var _this = this;

      this.filesafe = filesafe;
      this.fsObserver = filesafe.addDataChangeObserver(function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.dataChangeObservers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var observer = _step.value;
            observer();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    }
  }, {
    key: "setDelegate",
    value: function setDelegate(delegate) {
      this.delegate = delegate;
    }
  }, {
    key: "getDelegate",
    value: function getDelegate() {
      return this.delegate || {};
    }
  }, {
    key: "addDataChangeObserver",
    value: function addDataChangeObserver(observer) {
      this.dataChangeObservers.push(observer);
    }
  }, {
    key: "addUnloadHandler",
    value: function addUnloadHandler(handler) {
      this.unloadHandlers.push(handler);
    }
  }, {
    key: "unload",
    value: function unload() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.unloadHandlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var handler = _step2.value;
          handler();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.dataChangeObservers = [];

      if (this.filesafe) {
        this.filesafe.removeDataChangeObserver(this.fsObserver);
      }

      FilesafeManager.instance = null;
    }
  }, {
    key: "defaultRelayServerUrl",
    value: function defaultRelayServerUrl() {
      return window.default_fs_relay_server_url || "https://filesafe.standardnotes.org";
    }
  }]);

  return FilesafeManager;
}();

__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()(FilesafeManager, "instance", null);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__ = __webpack_require__(6);












var FilesView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(FilesView, _React$Component);

  function FilesView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, FilesView);

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(FilesView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "setStatusForFile", function (file, status, hasSpinner) {
      _this.setState({
        fileStatusFile: file,
        fileStatus: status,
        hasStatusSpinner: hasSpinner
      });
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "decryptFile",
    /*#__PURE__*/
    function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(fileDescriptor) {
        var integration, name;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                integration = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationForFileDescriptor(fileDescriptor);

                if (integration) {
                  _context.next = 4;
                  break;
                }

                alert("Unable to find integration for file. If you have deleted the integration, please re-add it and try again.");
                return _context.abrupt("return");

              case 4:
                name = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);

                _this.setStatusForFile(fileDescriptor, "Downloading from ".concat(name, "..."), true);

                return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadFileFromDescriptor(fileDescriptor).then(function (item) {
                  _this.setStatusForFile(fileDescriptor, "Decrypting...", true);

                  return __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.decryptFile({
                    fileDescriptor: fileDescriptor,
                    fileItem: item
                  }).then(function (data) {
                    return {
                      base64Data: data.decryptedData,
                      fileName: fileDescriptor.content.fileName,
                      fileType: fileDescriptor.content.fileType
                    };
                  })["catch"](function (decryptionError) {
                    console.error("filesafe-embed | error decrypting file:", decryptionError);

                    _this.flashError("Error decrypting file.");
                  });
                })["catch"](function (downloadError) {
                  console.log("Error downloading file", downloadError);

                  _this.flashError("Error downloading file.");
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "downloadFile",
    /*#__PURE__*/
    function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(fileDescriptor) {
        var platform, display, fileData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this.isMobile) {
                  _context2.next = 5;
                  break;
                }

                platform = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.getPlatform();
                display = platform == "ios" ? "iOS" : "Android";
                alert("Downloading files is not currently supported on ".concat(display, "."));
                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return _this.decryptFile(fileDescriptor);

              case 7:
                fileData = _context2.sent;
                __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data(fileData);

                _this.setStatusForFile(fileDescriptor, null);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "previewFile",
    /*#__PURE__*/
    function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(fileDescriptor) {
        var fileData, url;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.decryptFile(fileDescriptor);

              case 2:
                fileData = _context3.sent;
                url = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.createTemporaryFileUrl({
                  base64Data: fileData.base64Data,
                  dataType: fileData.fileType
                });

                _this.setStatusForFile(fileDescriptor, null);

                _this.setState({
                  previewUrl: url,
                  previewingFile: fileDescriptor
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "onClickPreview", function () {
      // We'll try revoking here in a timeout, but in browsers, since it opens in another tab, this code may not execute.
      // In that case, we'll revoke again when the current file is collapsed or another is selected.
      // Actually I've found that with a timeout of 100, it doesn't execute, but if you increase to 250-500, it does.
      setTimeout(function () {
        _this.revokePreview();
      }, 500);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "selectFile", function (event, metadata) {
      var element = event.target;
      element.focus();

      if (_this.state.selectedFile == metadata) {
        _this.setState({
          selectedFile: null
        });

        _this.delegate.onSelectFile && _this.delegate.onSelectFile(null);
      } else {
        _this.setState({
          selectedFile: metadata
        });

        _this.delegate.onSelectFile && _this.delegate.onSelectFile(metadata);
      } // We want to release previews after another file is selected or when the current file is collapsed.


      _this.revokePreview();
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "deleteFile", function (fileDescriptor) {
      __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteFileFromDescriptor(fileDescriptor);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "copyInsertionLink", function (fileDescriptor) {
      var text = "[FileSafe:".concat(fileDescriptor.uuid, ":").concat(fileDescriptor.content.fileName, "]");
      __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.copyTextToClipboard(text);

      _this.setState({
        copiedLink: fileDescriptor
      });

      setTimeout(function () {
        _this.setState({
          copiedLink: null
        });
      }, 1000);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "isFileSelected", function (metadata) {
      return _this.state.selectedFile == metadata;
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "elementForFile", function (file) {
      var integration = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationForFileDescriptor(file);
      var integrationName;

      if (integration) {
        integrationName = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);
      } else {
        integrationName = "Integration Not Found";
      }

      var path = file.content.serverMetadata.file_path;
      var previewReady = _this.state.previewUrl && _this.state.previewingFile == file; // We should make Files their own component and have their own state but for now we're doing it this way.

      var hasStatus = _this.state.fileStatusFile == file && _this.state.fileStatus;
      var hasSpinner = _this.state.hasStatusSpinner;
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-item-container " + (_this.isFileSelected(file) ? "expanded" : "")
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(event) {
          _this.selectFile(event, file);
        },
        className: "file-item-button sk-button info " + (_this.isFileSelected(file) ? "selected" : undefined)
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label"
      }, file.content.fileName), hasStatus && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-download-status sk-horizontal-group"
      }, hasSpinner && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-spinner x-small"
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-status-label"
      }, _this.state.fileStatus)), _this.isFileSelected(file) && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-item-options-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        className: "sk-app-bar file-item-options"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "center"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.downloadFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast " + (_this.isMobile ? "disabled" : "")
      }, "Download")), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), _this.supportsPreviews && previewReady && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("a", {
        className: "sk-app-bar-item",
        href: _this.state.previewUrl,
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.onClickPreview();
        },
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, "Open Preview")), _this.supportsPreviews && !previewReady && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.previewFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast " + (_this.isMobile ? "disabled" : "")
      }, "Preview")), _this.supportsPreviews && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.copyInsertionLink(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, _this.state.copiedLink == file ? "Copied" : "Copy Insert Link")), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.deleteFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, "Delete")))), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file-location"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("strong", null, integrationName), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", null, " ", path)))));
    });

    _this.state = {};
    _this.delegate = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().getDelegate();
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(FilesView, [{
    key: "revokePreview",
    value: function revokePreview() {
      if (this.state.previewUrl) {
        __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.revokeTempUrl(this.state.previewUrl);
      }

      this.setState({
        previewUrl: null,
        previewingFile: null
      });
    }
  }, {
    key: "flashError",
    value: function flashError(error) {
      var _this2 = this;

      this.setStatusForFile(error, false);
      setTimeout(function () {
        _this2.setStatusForFile(null);
      }, 2500);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.props.files.map(function (file) {
        return _this3.elementForFile(file);
      });
    }
  }, {
    key: "supportsPreviews",
    get: function get() {
      if (this._supportsPreview !== undefined) {
        return this._supportsPreview;
      }

      var env = __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.getEnvironment(); // May be undefined if bridge hasn't been established yet.

      if (env == undefined) {
        return false;
      } // Only the web app supports previews, as temporary object urls are created for previews,
      // and temp urls only live in the same browser scope as client. In desktop, the electron scope
      // is different from the the browser scope, and on mobile, the web view scope will be different than
      // the user's browser. On web, since we open the preview in the same browser, it will work.


      this._supportsPreview = env == "web";
    }
  }, {
    key: "isMobile",
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__["a" /* default */].get().filesafe.isMobile();
    }
  }]);

  return FilesView;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FilesafeEmbed__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["default"] = ({
  FilesafeEmbed: __WEBPACK_IMPORTED_MODULE_2__FilesafeEmbed__["a" /* default */],
  React: __WEBPACK_IMPORTED_MODULE_0_react___default.a,
  ReactDOM: __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesafeEmbed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Root__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__ = __webpack_require__(6);










var FilesafeEmbed =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(FilesafeEmbed, _React$Component);

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(FilesafeEmbed, null, [{
    key: "renderInElement",
    // Called by consumer
    value: function renderInElement(element, filesafe, delegate) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().setFilesafeInstance(filesafe);
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().setDelegate(delegate);
      __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(FilesafeEmbed), element);
    } // Called by consumer. Required if embed will appear and disappear multiple times
    // This function will clean up window observers

  }, {
    key: "unload",
    value: function unload(element) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().unload();
      __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.unmountComponentAtNode(element);
    }
  }]);

  function FilesafeEmbed(props) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, FilesafeEmbed);

    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf___default()(FilesafeEmbed).call(this, props));
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(FilesafeEmbed, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        id: "filesafe-embed"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sn-component"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Root__["a" /* default */], null)));
    }
  }]);

  return FilesafeEmbed;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);



/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__KeysView__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__UploadFilesView_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AllFilesView__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__IntegrationsView__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_FilesafeManager__ = __webpack_require__(6);












var Root =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(Root, _React$Component);

  function Root(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Root);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(Root).call(this, props));
    _this.state = {
      messages: []
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Root, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        id: "home",
        className: "sk-panel static"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        id: "main-content",
        className: "sk-panel-content"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__UploadFilesView_js__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__IntegrationsView__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__KeysView__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__AllFilesView__["a" /* default */], null))));
    }
  }]);

  return Root;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__ = __webpack_require__(6);










var KeysView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(KeysView, _React$Component);

  function KeysView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, KeysView);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(KeysView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "exportCredential", function (credential) {
      var base64Data = btoa(JSON.stringify(credential, null, 2));
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data({
        base64Data: base64Data,
        fileName: "sn-filesafe-keys-".concat(credential.created_at.toISOString(), ".json"),
        fileType: 'text/json'
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "deleteCredential", function (credential) {
      if (_this.numFilesForCredential(credential) != 0) {
        alert("This key has files encrypted with it and cannot be deleted. First delete any associated files, then try again.");
        return;
      }

      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteCredential(credential);
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "createNewKeys", function () {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.createNewCredentials();
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "labelForCredential", function (credential) {
      return credential.created_at.toLocaleString();
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "numFilesForCredential", function (credential) {
      return __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.numberOfFilesEncryptedWithCredential(credential);
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "setCredentialAsDefault", function (credential) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.setCredentialAsDefault(credential);
    });

    _this.state = {
      credentials: __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials() || []
    };
    __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.setState({
        credentials: __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials()
      });
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(KeysView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-h2 sk-bold"
      }, "Keys"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button info no-border",
        onClick: this.createNewKeys
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-label"
      }, "Create New"))), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "list-container"
      }, this.state.credentials.map(function (credential) {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "list-item sk-horizontal-group top"
        }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-circle x-small " + (credential.content.isDefault ? "info" : "sk-secondary-contrast")
        }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-panel-row condensed sk-bold"
        }, _this2.labelForCredential(credential)), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          style: {
            marginTop: 3
          },
          className: "sk-panel-row condensed"
        }, _this2.numFilesForCredential(credential), " encrypted files"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-panel-row condensed"
        }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-horizontal-group"
        }, _this2.state.credentials.length > 1 && !credential.content.isDefault && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.setCredentialAsDefault(credential);
          }
        }, "Make Default"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.exportCredential(credential);
          }
        }, "Export"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "danger",
          onClick: function onClick() {
            _this2.deleteCredential(credential);
          }
        }, "Delete")))));
      })));
    }
  }]);

  return KeysView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_MessagesManager__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__MessagesView_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FilesView__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__ = __webpack_require__(6);















var UploadFilesView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(UploadFilesView, _React$Component);

  function UploadFilesView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, UploadFilesView);

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(UploadFilesView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "event_preventDefaults", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "event_highlight", function (e) {
      _this.event_preventDefaults(e);

      _this.rootElement.classList.add('highlight');
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "event_unhighlight", function (e) {
      _this.event_preventDefaults(e);

      _this.rootElement.classList.remove('highlight');
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "event_drop", function (e) {
      _this.event_unhighlight(e);

      _this.event_preventDefaults(e);

      var dt = e.dataTransfer;
      var files = dt.files;

      _this.handleDroppedFiles(files);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleDroppedFiles",
    /*#__PURE__*/
    function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(files) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(__WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations().length == 0)) {
                  _context.next = 3;
                  break;
                }

                alert("Please set up at least one integration before attempting to upload a file. To do this, press Expand, and select Add New in the Integrations section.");
                return _context.abrupt("return");

              case 3:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;
                _iterator = files[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 17;
                  break;
                }

                file = _step.value;

                if (file) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("continue", 14);

              case 12:
                _context.next = 14;
                return _this.readFile(file);

              case 14:
                _iteratorNormalCompletion = true;
                _context.next = 8;
                break;

              case 17:
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](6);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 23:
                _context.prev = 23;
                _context.prev = 24;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 26:
                _context.prev = 26;

                if (!_didIteratorError) {
                  _context.next = 29;
                  break;
                }

                throw _iteratorError;

              case 29:
                return _context.finish(26);

              case 30:
                return _context.finish(23);

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 19, 23, 31], [24,, 26, 30]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.messagesManager = new __WEBPACK_IMPORTED_MODULE_10__lib_MessagesManager__["a" /* default */]({
      credentialManager: __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.credentialManager,
      integrationManager: __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationManager
    });

    _this.messagesManager.getMessages().then(function (messages) {
      _this.setState({
        messages: messages
      });
    });

    _this.state = {
      noteFiles: __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.fileDescriptorsForCurrentNote(),
      messages: []
    };
    __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.reload();
    });
    __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().addUnloadHandler(function () {
      window.removeEventListener('dragenter', _this.event_highlight, false);
      window.removeEventListener('dragover', _this.event_highlight, false);
      window.removeEventListener('dragleave', _this.event_unhighlight, false);
      window.removeEventListener('drop', _this.event_drop, false);
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(UploadFilesView, [{
    key: "reload",
    value: function () {
      var _reload = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var messages;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.messagesManager.getMessages();

              case 2:
                messages = _context2.sent;
                this.setState({
                  noteFiles: __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.fileDescriptorsForCurrentNote(),
                  messages: messages
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function reload() {
        return _reload.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.configureFileForm();
      window.addEventListener('dragenter', this.event_highlight, false);
      window.addEventListener('dragover', this.event_highlight, false);
      window.addEventListener('dragleave', this.event_unhighlight, false);
      window.addEventListener('drop', this.event_drop, false);
    }
  }, {
    key: "configureFileForm",
    value: function configureFileForm() {
      var _this2 = this;

      var fileInput = this.fileInput;
      var dropContainer = this.dropContainer;

      if (!fileInput) {
        return;
      }

      fileInput.onchange = function (event) {
        // On firefox, this event doesnt get triggered. INstead we handle it on window.addEventListener("drop")
        // Which gets called on all browsers
        var files = event.target.files;

        if (!_this2.handledFiles) {
          _this2.handleDroppedFiles(files);
        }
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        rawData: null,
        decryptedItems: null,
        requestPassword: false
      });
    }
  }, {
    key: "readFile",
    value: function () {
      var _readFile = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(file) {
        var _this3 = this;

        var MegabyteLimit, BytesInMegabyte, ByteLimit;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                MegabyteLimit = 50;
                BytesInMegabyte = 1000000; // 50mb

                ByteLimit = MegabyteLimit * BytesInMegabyte;
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  var reader = new FileReader();
                  var decrypt = false;

                  reader.onload =
                  /*#__PURE__*/
                  function () {
                    var _ref2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
                    /*#__PURE__*/
                    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(e) {
                      var data, item, arrayBuffer, bytes, string;
                      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              data = e.target.result;

                              if (!decrypt) {
                                _context3.next = 7;
                                break;
                              }

                              data = JSON.parse(data);
                              item = data.items[0];

                              _this3.decryptDraggedFile(item).then(resolve);

                              _context3.next = 20;
                              break;

                            case 7:
                              arrayBuffer = data;
                              bytes = arrayBuffer.byteLength;

                              if (!(bytes > ByteLimit)) {
                                _context3.next = 14;
                                break;
                              }

                              alert("The maximum upload size is ".concat(MegabyteLimit, " megabytes per file."));

                              _this3.setState({
                                status: null
                              });

                              resolve();
                              return _context3.abrupt("return");

                            case 14:
                              _context3.next = 16;
                              return SFJS.crypto.arrayBufferToBase64(arrayBuffer);

                            case 16:
                              string = _context3.sent;
                              _context3.next = 19;
                              return _this3.encryptFile(string, file.name, file.type);

                            case 19:
                              resolve();

                            case 20:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }();

                  _this3.setState({
                    status: "Reading file..."
                  });

                  if (file.name.endsWith(".sf") || file.name.endsWith(".json")) {
                    decrypt = true;
                    reader.readAsText(file);
                  } else {
                    reader.readAsArrayBuffer(file);
                  }
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function readFile(_x2) {
        return _readFile.apply(this, arguments);
      }

      return readFile;
    }()
  }, {
    key: "decryptDraggedFile",
    value: function () {
      var _decryptDraggedFile = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(fileDescriptor) {
        var _this4 = this;

        var credentials, decryptWithCredential, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, credential, success;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.setState({
                  status: "Decrypting..."
                });
                credentials = __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials();

                decryptWithCredential =
                /*#__PURE__*/
                function () {
                  var _ref3 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(credential) {
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            return _context5.abrupt("return", new Promise(function (resolve, reject) {
                              __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.decryptFile({
                                fileDescriptor: fileDescriptor,
                                credential: credential
                              }).then(function (data) {
                                var item = data.decryptedItem;
                                __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data({
                                  base64Data: data.decryptedData,
                                  fileName: item.content.fileName,
                                  fileType: item.content.fileType
                                });

                                _this4.setState({
                                  status: null
                                });

                                resolve(true);
                              })["catch"](function (decryptionError) {
                                console.error("Error decrypting:", decryptionError);

                                _this4.flashError("Error decrypting file.");

                                reject(false);
                              });
                            }));

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function decryptWithCredential(_x5) {
                    return _ref3.apply(this, arguments);
                  };
                }(); // Try all credentials until one succeeds


                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context6.prev = 6;
                _iterator2 = credentials[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context6.next = 18;
                  break;
                }

                credential = _step2.value;
                _context6.next = 12;
                return decryptWithCredential(credential);

              case 12:
                success = _context6.sent;

                if (!success) {
                  _context6.next = 15;
                  break;
                }

                return _context6.abrupt("return");

              case 15:
                _iteratorNormalCompletion2 = true;
                _context6.next = 8;
                break;

              case 18:
                _context6.next = 24;
                break;

              case 20:
                _context6.prev = 20;
                _context6.t0 = _context6["catch"](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context6.t0;

              case 24:
                _context6.prev = 24;
                _context6.prev = 25;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 27:
                _context6.prev = 27;

                if (!_didIteratorError2) {
                  _context6.next = 30;
                  break;
                }

                throw _iteratorError2;

              case 30:
                return _context6.finish(27);

              case 31:
                return _context6.finish(24);

              case 32:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[6, 20, 24, 32], [25,, 27, 31]]);
      }));

      function decryptDraggedFile(_x4) {
        return _decryptDraggedFile.apply(this, arguments);
      }

      return decryptDraggedFile;
    }()
  }, {
    key: "wait",
    value: function () {
      var _wait = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(seconds) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    resolve();
                  }, seconds * 1000.0);
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function wait(_x6) {
        return _wait.apply(this, arguments);
      }

      return wait;
    }()
  }, {
    key: "encryptFile",
    value: function () {
      var _encryptFile = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee9(data, inputFileName, fileType) {
        var _this5 = this;

        var credential, integration;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                credential = __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.getDefaultCredentials();

                if (credential) {
                  _context9.next = 5;
                  break;
                }

                this.setState({
                  status: null
                });
                alert("Please set up at least one key before attempting to upload a file. To do this, press Expand, and select Create New in the Keys section.");
                return _context9.abrupt("return");

              case 5:
                integration = __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.getDefaultIntegration();

                if (integration) {
                  _context9.next = 10;
                  break;
                }

                this.setState({
                  status: null
                });
                alert("Please set up at least one integration before attempting to upload a file. To do this, press Expand, and select Add New in the Integrations section.");
                return _context9.abrupt("return");

              case 10:
                this.setState({
                  status: "Encrypting..."
                });
                return _context9.abrupt("return", __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.encryptFile({
                  data: data,
                  inputFileName: inputFileName,
                  fileType: fileType,
                  credential: credential
                }).then(
                /*#__PURE__*/
                function () {
                  var _ref4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8(fileItem) {
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _this5.setState({
                              status: "Uploading to ".concat(__WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration), "...")
                            });

                            _context8.next = 3;
                            return _this5.wait(0.5);

                          case 3:
                            return _context8.abrupt("return", __WEBPACK_IMPORTED_MODULE_13__lib_FilesafeManager__["a" /* default */].get().filesafe.uploadFile({
                              fileItem: fileItem,
                              inputFileName: inputFileName,
                              fileType: fileType,
                              credential: credential
                            }).then(function () {
                              _this5.setState({
                                status: "Upload Success."
                              });

                              setTimeout(function () {
                                _this5.setState({
                                  status: null
                                });
                              }, 2000);
                            })["catch"](function (uploadError) {
                              console.error("fs-embed | error uploading file:", uploadError);

                              _this5.flashError("Error uploading file.");
                            }));

                          case 4:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x10) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function encryptFile(_x7, _x8, _x9) {
        return _encryptFile.apply(this, arguments);
      }

      return encryptFile;
    }()
  }, {
    key: "flashError",
    value: function flashError(error) {
      var _this6 = this;

      this.setState({
        status: error,
        statusClass: "danger"
      });
      setTimeout(function () {
        _this6.setState({
          status: null,
          statusClass: null
        });
      }, 2500);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var statusClass = this.state.statusClass ? this.state.statusClass : "info";
      var hasSpinner = statusClass == "info";
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sn-component files-view"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-panel-row align-top"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "files"
      }, this.state.messages.length > 0 && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        id: "messages-container",
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__MessagesView_js__["a" /* default */], {
        messages: this.state.messages
      })), this.state.status && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        id: "file-upload-status",
        className: "sk-horizontal-group"
      }, hasSpinner && __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "sk-spinner info small"
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: statusClass
      }, this.state.status)), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        id: "add-file-button-container"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "file sk-button info"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("label", {
        className: "no-style"
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("input", {
        type: "file",
        style: {
          display: "none"
        },
        onChange: function onChange(event) {
          _this7.handleDroppedFiles(event.target.files);
        }
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        id: "attach-file-button-label",
        className: "sk-label"
      }, "Attach File")))), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__FilesView__["a" /* default */], {
        files: this.state.noteFiles
      }))));
    }
  }, {
    key: "rootElement",
    get: function get() {
      return document.getElementById("filesafe-embed");
    }
  }, {
    key: "dropContainer",
    get: function get() {
      return document.getElementById("files-view");
    }
  }, {
    key: "fileInput",
    get: function get() {
      return document.getElementById("file-input");
    }
  }]);

  return UploadFilesView;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);





var MessagesManager =
/*#__PURE__*/
function () {
  function MessagesManager(_ref) {
    var credentialManager = _ref.credentialManager,
        integrationManager = _ref.integrationManager;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, MessagesManager);

    this.credentialManager = credentialManager;
    this.integrationManager = integrationManager;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(MessagesManager, [{
    key: "getMessages",
    value: function () {
      var _getMessages = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_asyncToGenerator___default()(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var messages, credentials, integrations;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messages = [];
                /*
                Display messages if:
                No keys
                No integrations
                */

                _context.next = 3;
                return this.credentialManager.getDefaultCredentials();

              case 3:
                credentials = _context.sent;

                if (!credentials) {
                  messages.push({
                    message: "Create keys by selecting <strong>Create New</strong> under <i>Keys</i>.",
                    css: "sk-base"
                  });
                }

                integrations = this.integrationManager.integrations;

                if (!integrations || integrations.length == 0) {
                  messages.push({
                    message: "Add a new integration by selecting <strong>Add New</strong> under <i>Integrations</i>",
                    css: "sk-base"
                  });
                }

                return _context.abrupt("return", messages);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMessages() {
        return _getMessages.apply(this, arguments);
      }

      return getMessages;
    }()
  }]);

  return MessagesManager;
}();



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);







var MessagesView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(MessagesView, _React$Component);

  function MessagesView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, MessagesView);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(MessagesView).call(this, props));
    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(MessagesView, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        id: "messages"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "title"
      }, "Complete the following steps before uploading your first file:"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("ul", null, this.props.messages.map(function (message) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
          dangerouslySetInnerHTML: {
            __html: message.message
          },
          className: message.css
        });
      })));
    }
  }]);

  return MessagesView;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllFilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FilesView__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_FilesafeManager__ = __webpack_require__(6);











var AllFilesView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(AllFilesView, _React$Component);

  function AllFilesView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, AllFilesView);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(AllFilesView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "toggleVisibility", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });

    _this.state = {
      expanded: false,
      files: __WEBPACK_IMPORTED_MODULE_9__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllFileDescriptors() || []
    };
    __WEBPACK_IMPORTED_MODULE_9__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.setState({
        files: __WEBPACK_IMPORTED_MODULE_9__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllFileDescriptors()
      });
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(AllFilesView, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "files-view"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row justify-left"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-horizontal-group"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-section-title"
      }, "All Files ", __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", {
        style: {
          fontWeight: "normal"
        }
      }, "(", this.state.files.length, ")")), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
        className: "info",
        onClick: this.toggleVisibility
      }, this.state.expanded ? "Hide" : "Show"))), this.state.expanded && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "files"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__FilesView__["a" /* default */], {
        files: this.state.files
      }))));
    }
  }]);

  return AllFilesView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__ = __webpack_require__(6);










var IntegrationsView =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(IntegrationsView, _React$Component);

  function IntegrationsView(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, IntegrationsView);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(IntegrationsView).call(this, props));

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter') {
        _this.submitIntegrationCode();
      }
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "handleTextChange", function (event) {
      var text = event.target.value;

      _this.setState({
        integrationCode: text
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "submitIntegrationCode", function () {
      var code = _this.state.integrationCode;

      if (!code || code.length == 0) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.saveIntegrationFromCode(code).then(function () {
        _this.setState({
          integrationCode: null,
          showInputForm: false
        });

        _this.reloadIntegrations();
      })["catch"](function () {
        alert("Invalid integration code. Ensure the correct value is copied and try again.");
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "addNewIntegrationClicked", function () {
      window.open(__WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().defaultRelayServerUrl(), "_blank");

      _this.setState({
        showInputForm: true
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "cancelIntegrationForm", function () {
      _this.setState({
        showInputForm: false
      });
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "deleteIntegration", function (integration) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteIntegration(integration);
    });

    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_assertThisInitialized___default()(_this), "setIntegrationAsDefaultUploadSource", function (integration) {
      __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.setIntegrationAsDefault(integration);
    });

    _this.state = {
      integrations: __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations() || []
    };
    __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.reloadIntegrations();
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(IntegrationsView, [{
    key: "reloadIntegrations",
    value: function reloadIntegrations() {
      var integrations = __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations();
      this.setState({
        integrations: integrations
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "displayStringForIntegration",
    value: function displayStringForIntegration(integration) {
      return __WEBPACK_IMPORTED_MODULE_8__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hasMultipleIntegrations = this.state.integrations.length > 1;
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-h2 sk-bold"
      }, "Integrations"), !this.state.showInputForm && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button info no-border",
        onClick: this.addNewIntegrationClicked
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-label"
      }, "Add New"))), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        id: "integrations"
      }, this.state.showInputForm && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-notification info"
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("strong", null, "New Integration"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("p", {
        className: "sk-p"
      }, "A new tab has opened. After you complete the authentication flow, enter the code you receive below."), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("input", {
        className: "title sk-input contrast",
        type: "text",
        placeholder: "Enter integration code",
        value: this.state.integrationCode,
        onChange: this.handleTextChange,
        onKeyPress: this.handleKeyPress
      }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button-group",
        style: {
          marginTop: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button neutral",
        onClick: this.cancelIntegrationForm
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
        className: "sk-label"
      }, "Cancel")), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "sk-button sk-base",
        onClick: this.submitIntegrationCode
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
        className: "sk-label"
      }, "Submit"))))), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "list-container"
      }, this.state.integrations.map(function (integration) {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "list-item sk-horizontal-group top"
        }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-circle x-small " + (integration.content.isDefaultUploadSource ? "info" : "sk-secondary-contrast")
        }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-panel-row condensed sk-bold"
        }, _this2.displayStringForIntegration(integration)), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-panel-row condensed"
        }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
          className: "sk-horizontal-group"
        }, hasMultipleIntegrations && !integration.content.isDefaultUploadSource && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.setIntegrationAsDefaultUploadSource(integration);
          }
        }, "Make Default"), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          className: "danger",
          onClick: function onClick() {
            _this2.deleteIntegration(integration);
          }
        }, "Delete")))));
      })));
    }
  }]);

  return IntegrationsView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);



/***/ })
/******/ ]);