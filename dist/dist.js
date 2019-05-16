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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesafeManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FilesafeManager =
/*#__PURE__*/
function () {
  _createClass(FilesafeManager, null, [{
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
    _classCallCheck(this, FilesafeManager);

    this.unloadHandlers = [];
    this.dataChangeObservers = [];
  }

  _createClass(FilesafeManager, [{
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

_defineProperty(FilesafeManager, "instance", null);



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FilesView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FilesView, _React$Component);

  function FilesView(props) {
    var _this;

    _classCallCheck(this, FilesView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilesView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setStatusForFile", function (file, status, hasSpinner) {
      _this.setState({
        fileStatusFile: file,
        fileStatus: status,
        hasStatusSpinner: hasSpinner
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decryptFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fileDescriptor) {
        var integration, name;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                integration = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationForFileDescriptor(fileDescriptor);
                name = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);

                _this.setStatusForFile(fileDescriptor, "Downloading from ".concat(name, "..."), true);

                return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadFileFromDescriptor(fileDescriptor).then(function (item) {
                  _this.setStatusForFile(fileDescriptor, "Decrypting...", true);

                  return __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.decryptFile({
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

              case 4:
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

    _defineProperty(_assertThisInitialized(_this), "downloadFile",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(fileDescriptor) {
        var platform, display, fileData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this.isMobile) {
                  _context2.next = 5;
                  break;
                }

                platform = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.getPlatform();
                display = platform == "ios" ? "iOS" : "Android";
                alert("Downloading files is not currently supported on ".concat(display, "."));
                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return _this.decryptFile(fileDescriptor);

              case 7:
                fileData = _context2.sent;
                __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data(fileData);

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

    _defineProperty(_assertThisInitialized(_this), "previewFile",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(fileDescriptor) {
        var fileData, url;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.decryptFile(fileDescriptor);

              case 2:
                fileData = _context3.sent;
                url = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.createTemporaryFileUrl({
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

    _defineProperty(_assertThisInitialized(_this), "onClickPreview", function () {
      // We'll try revoking here in a timeout, but in browsers, since it opens in another tab, this code may not execute.
      // In that case, we'll revoke again when the current file is collapsed or another is selected.
      // Actually I've found that with a timeout of 100, it doesn't execute, but if you increase to 250-500, it does.
      setTimeout(function () {
        _this.revokePreview();
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "selectFile", function (event, metadata) {
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

    _defineProperty(_assertThisInitialized(_this), "deleteFile", function (fileDescriptor) {
      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteFileFromDescriptor(fileDescriptor);
    });

    _defineProperty(_assertThisInitialized(_this), "copyInsertionLink", function (fileDescriptor) {
      var text = "[FileSafe:".concat(fileDescriptor.uuid, ":").concat(fileDescriptor.content.fileName, "]");
      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.copyTextToClipboard(text);

      _this.setState({
        copiedLink: fileDescriptor
      });

      setTimeout(function () {
        _this.setState({
          copiedLink: null
        });
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "isFileSelected", function (metadata) {
      return _this.state.selectedFile == metadata;
    });

    _defineProperty(_assertThisInitialized(_this), "elementForFile", function (file) {
      var integration = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationForFileDescriptor(file);
      var integrationName = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);
      var path = file.content.serverMetadata.file_path;
      var previewReady = _this.state.previewUrl && _this.state.previewingFile == file; // We should make Files their own component and have their own state but for now we're doing it this way.

      var hasStatus = _this.state.fileStatusFile == file && _this.state.fileStatus;
      var hasSpinner = _this.state.hasStatusSpinner;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "file-item-container " + (_this.isFileSelected(file) ? "expanded" : "")
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick(event) {
          _this.selectFile(event, file);
        },
        className: "file-item-button sk-button info " + (_this.isFileSelected(file) ? "selected" : undefined)
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label"
      }, file.content.fileName), hasStatus && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "file-download-status sk-horizontal-group"
      }, hasSpinner && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-spinner x-small"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "file-status-label"
      }, _this.state.fileStatus)), _this.isFileSelected(file) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "file-item-options-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        className: "sk-app-bar file-item-options"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.downloadFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label contrast " + (_this.isMobile ? "disabled" : "")
      }, "Download")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), _this.supportsPreviews && previewReady && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "sk-app-bar-item",
        href: _this.state.previewUrl,
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.onClickPreview();
        },
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, "Open Preview")), _this.supportsPreviews && !previewReady && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.previewFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label contrast " + (_this.isMobile ? "disabled" : "")
      }, "Preview")), _this.supportsPreviews && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.copyInsertionLink(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, _this.state.copiedLink == file ? "Copied" : "Copy Insert Link")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-app-bar-item border"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this.deleteFile(file);
        },
        className: "sk-app-bar-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label contrast"
      }, "Delete")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "file-location"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", null, integrationName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, " ", path)))));
    });

    _this.state = {};
    _this.delegate = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().getDelegate();
    return _this;
  }

  _createClass(FilesView, [{
    key: "revokePreview",
    value: function revokePreview() {
      if (this.state.previewUrl) {
        __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.revokeTempUrl(this.state.previewUrl);
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

      var env = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.getEnvironment(); // May be undefined if bridge hasn't been established yet.

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
      return __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.isMobile();
    }
  }]);

  return FilesView;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FilesafeEmbed__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["default"] = ({
  FilesafeEmbed: __WEBPACK_IMPORTED_MODULE_2__FilesafeEmbed__["a" /* default */],
  React: __WEBPACK_IMPORTED_MODULE_0_react___default.a,
  ReactDOM: __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesafeEmbed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Root__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_FilesafeManager__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var FilesafeEmbed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FilesafeEmbed, _React$Component);

  _createClass(FilesafeEmbed, null, [{
    key: "renderInElement",
    // Called by consumer
    value: function renderInElement(element, filesafe, delegate) {
      __WEBPACK_IMPORTED_MODULE_3__lib_FilesafeManager__["a" /* default */].get().setFilesafeInstance(filesafe);
      __WEBPACK_IMPORTED_MODULE_3__lib_FilesafeManager__["a" /* default */].get().setDelegate(delegate);
      __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FilesafeEmbed), element);
    } // Called by consumer. Required if embed will appear and disappear multiple times
    // This function will clean up window observers

  }, {
    key: "unload",
    value: function unload(element) {
      __WEBPACK_IMPORTED_MODULE_3__lib_FilesafeManager__["a" /* default */].get().unload();
      __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unmountComponentAtNode(element);
    }
  }]);

  function FilesafeEmbed(props) {
    _classCallCheck(this, FilesafeEmbed);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilesafeEmbed).call(this, props));
  }

  _createClass(FilesafeEmbed, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "filesafe-embed"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sn-component"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Root__["a" /* default */], null)));
    }
  }]);

  return FilesafeEmbed;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeysView__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UploadFilesView_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AllFilesView__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IntegrationsView__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_FilesafeManager__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Root =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this, props));
    _this.state = {
      messages: []
    };
    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "home",
        className: "sk-panel static"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "main-content",
        className: "sk-panel-content"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__UploadFilesView_js__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__IntegrationsView__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__KeysView__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__AllFilesView__["a" /* default */], null))));
    }
  }]);

  return Root;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var KeysView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(KeysView, _React$Component);

  function KeysView(props) {
    var _this;

    _classCallCheck(this, KeysView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KeysView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "exportCredential", function (credential) {
      var base64Data = btoa(JSON.stringify(credential, null, 2));
      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data({
        base64Data: base64Data,
        fileName: "sn-filesafe-keys-".concat(credential.created_at.toISOString(), ".json"),
        fileType: 'text/json'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteCredential", function (credential) {
      if (_this.numFilesForCredential(credential) != 0) {
        alert("This key has files encrypted with it and cannot be deleted. First delete any associated files, then try again.");
        return;
      }

      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteCredential(credential);
    });

    _defineProperty(_assertThisInitialized(_this), "createNewKeys", function () {
      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.createNewCredentials();
    });

    _defineProperty(_assertThisInitialized(_this), "labelForCredential", function (credential) {
      return credential.created_at.toLocaleString();
    });

    _defineProperty(_assertThisInitialized(_this), "numFilesForCredential", function (credential) {
      return __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.numberOfFilesEncryptedWithCredential(credential);
    });

    _defineProperty(_assertThisInitialized(_this), "setCredentialAsDefault", function (credential) {
      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.setCredentialAsDefault(credential);
    });

    _this.state = {
      credentials: __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials() || []
    };
    __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.setState({
        credentials: __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials()
      });
    });
    return _this;
  }

  _createClass(KeysView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-h2 sk-bold"
      }, "Keys"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-button info no-border",
        onClick: this.createNewKeys
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label"
      }, "Create New"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "list-container"
      }, this.state.credentials.map(function (credential) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "list-item sk-horizontal-group top"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "sk-circle x-small " + (credential.content.isDefault ? "info" : "sk-secondary-contrast")
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "sk-panel-row condensed sk-bold"
        }, _this2.labelForCredential(credential)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            marginTop: 3
          },
          className: "sk-panel-row condensed"
        }, _this2.numFilesForCredential(credential), " encrypted files"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "sk-panel-row condensed"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "sk-horizontal-group"
        }, _this2.state.credentials.length > 1 && !credential.content.isDefault && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.setCredentialAsDefault(credential);
          }
        }, "Make Default"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.exportCredential(credential);
          }
        }, "Export"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: "danger",
          onClick: function onClick() {
            _this2.deleteCredential(credential);
          }
        }, "Delete")))));
      })));
    }
  }]);

  return KeysView;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_MessagesManager__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MessagesView_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FilesView__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var UploadFilesView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UploadFilesView, _React$Component);

  function UploadFilesView(props) {
    var _this;

    _classCallCheck(this, UploadFilesView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadFilesView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "event_preventDefaults", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "event_highlight", function (e) {
      _this.event_preventDefaults(e);

      _this.rootElement.classList.add('highlight');
    });

    _defineProperty(_assertThisInitialized(_this), "event_unhighlight", function (e) {
      _this.event_preventDefaults(e);

      _this.rootElement.classList.remove('highlight');
    });

    _defineProperty(_assertThisInitialized(_this), "event_drop", function (e) {
      _this.event_unhighlight(e);

      _this.event_preventDefaults(e);

      var dt = e.dataTransfer;
      var files = dt.files;

      _this.handleDroppedFiles(files);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDroppedFiles",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(files) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(__WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations().length == 0)) {
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
                setTimeout(function () {
                  _this.setState({
                    status: null
                  });
                }, 2000);

              case 32:
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

    _this.messagesManager = new __WEBPACK_IMPORTED_MODULE_1__lib_MessagesManager__["a" /* default */]({
      credentialManager: __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.credentialManager,
      integrationManager: __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.integrationManager
    });

    _this.messagesManager.getMessages().then(function (messages) {
      _this.setState({
        messages: messages
      });
    });

    _this.state = {
      noteFiles: __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.fileDescriptorsForCurrentNote(),
      messages: []
    };
    __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.reload();
    });
    __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().addUnloadHandler(function () {
      window.removeEventListener('dragenter', _this.event_highlight, false);
      window.removeEventListener('dragover', _this.event_highlight, false);
      window.removeEventListener('dragleave', _this.event_unhighlight, false);
      window.removeEventListener('drop', _this.event_drop, false);
    });
    return _this;
  }

  _createClass(UploadFilesView, [{
    key: "reload",
    value: function () {
      var _reload = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var messages;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.messagesManager.getMessages();

              case 2:
                messages = _context2.sent;
                this.setState({
                  noteFiles: __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.fileDescriptorsForCurrentNote(),
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
      var _readFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(file) {
        var _this3 = this;

        var MegabyteLimit, BytesInMegabyte, ByteLimit;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
                    var _ref2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3(e) {
                      var data, item, arrayBuffer, bytes, string;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
      var _decryptDraggedFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(fileDescriptor) {
        var _this4 = this;

        var credentials, decryptWithCredential, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, credential, success;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.setState({
                  status: "Decrypting..."
                });
                credentials = __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllCredentials();

                decryptWithCredential =
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee5(credential) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            return _context5.abrupt("return", new Promise(function (resolve, reject) {
                              __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.decryptFile({
                                fileDescriptor: fileDescriptor,
                                credential: credential
                              }).then(function (data) {
                                var item = data.decryptedItem;
                                __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.downloadBase64Data({
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
      var _wait = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(seconds) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
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
      var _encryptFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(data, inputFileName, fileType) {
        var _this5 = this;

        var credential, integration;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.setState({
                  status: "Encrypting..."
                });
                credential = __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.getDefaultCredentials();
                integration = __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.getDefaultIntegration();
                return _context9.abrupt("return", __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.encryptFile({
                  data: data,
                  inputFileName: inputFileName,
                  fileType: fileType,
                  credential: credential
                }).then(
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee8(fileItem) {
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _this5.setState({
                              status: "Uploading to ".concat(__WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration), "...")
                            });

                            _context8.next = 3;
                            return _this5.wait(0.5);

                          case 3:
                            return _context8.abrupt("return", __WEBPACK_IMPORTED_MODULE_4__lib_FilesafeManager__["a" /* default */].get().filesafe.uploadFile({
                              fileItem: fileItem,
                              inputFileName: inputFileName,
                              fileType: fileType,
                              credential: credential
                            }).then(function () {
                              _this5.setState({
                                status: "Upload Success."
                              });
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

              case 4:
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sn-component files-view"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-row align-top"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "files"
      }, this.state.messages.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "messages-container",
        className: "sk-panel-section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MessagesView_js__["a" /* default */], {
        messages: this.state.messages
      })), this.state.status && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "file-upload-status",
        className: "sk-horizontal-group"
      }, hasSpinner && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-spinner info small"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: statusClass
      }, this.state.status)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "add-file-button-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "file sk-button info"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "no-style"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "file",
        style: {
          display: "none"
        },
        onChange: function onChange(event) {
          _this7.handleDroppedFiles(event.target.files);
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "attach-file-button-label",
        className: "sk-label"
      }, "Attach File")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FilesView__["a" /* default */], {
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
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesManager; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MessagesManager =
/*#__PURE__*/
function () {
  function MessagesManager(_ref) {
    var credentialManager = _ref.credentialManager,
        integrationManager = _ref.integrationManager;

    _classCallCheck(this, MessagesManager);

    this.credentialManager = credentialManager;
    this.integrationManager = integrationManager;
  }

  _createClass(MessagesManager, [{
    key: "getMessages",
    value: function () {
      var _getMessages = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var messages, credentials, integrations;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MessagesView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessagesView, _React$Component);

  function MessagesView(props) {
    var _this;

    _classCallCheck(this, MessagesView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessagesView).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(MessagesView, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "messages"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "title"
      }, "Complete the following steps before uploading your first file:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, this.props.messages.map(function (message) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          dangerouslySetInnerHTML: {
            __html: message.message
          },
          className: message.css
        });
      })));
    }
  }]);

  return MessagesView;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllFilesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FilesView__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_FilesafeManager__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var AllFilesView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllFilesView, _React$Component);

  function AllFilesView(props) {
    var _this;

    _classCallCheck(this, AllFilesView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AllFilesView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleVisibility", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });

    _this.state = {
      expanded: false,
      files: __WEBPACK_IMPORTED_MODULE_2__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllFileDescriptors() || []
    };
    __WEBPACK_IMPORTED_MODULE_2__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.setState({
        files: __WEBPACK_IMPORTED_MODULE_2__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllFileDescriptors()
      });
    });
    return _this;
  }

  _createClass(AllFilesView, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "files-view"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-row justify-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-horizontal-group"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-section-title"
      }, "All Files ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          fontWeight: "normal"
        }
      }, "(", this.state.files.length, ")")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "info",
        onClick: this.toggleVisibility
      }, this.state.expanded ? "Hide" : "Show"))), this.state.expanded && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "files"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FilesView__["a" /* default */], {
        files: this.state.files
      }))));
    }
  }]);

  return AllFilesView;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var IntegrationsView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IntegrationsView, _React$Component);

  function IntegrationsView(props) {
    var _this;

    _classCallCheck(this, IntegrationsView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IntegrationsView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter') {
        _this.submitIntegrationCode();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTextChange", function (event) {
      var text = event.target.value;

      _this.setState({
        integrationCode: text
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submitIntegrationCode", function () {
      var code = _this.state.integrationCode;

      if (!code || code.length == 0) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.saveIntegrationFromCode(code);

      _this.setState({
        integrationCode: null,
        showInputForm: false
      });

      _this.reloadIntegrations();
    });

    _defineProperty(_assertThisInitialized(_this), "addNewIntegrationClicked", function () {
      window.open(__WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().defaultRelayServerUrl(), "_blank");

      _this.setState({
        showInputForm: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cancelIntegrationForm", function () {
      _this.setState({
        showInputForm: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteIntegration", function (integration) {
      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.deleteIntegration(integration);
    });

    _defineProperty(_assertThisInitialized(_this), "setIntegrationAsDefaultUploadSource", function (integration) {
      __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.setIntegrationAsDefault(integration);
    });

    _this.state = {
      integrations: __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations() || []
    };
    __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().addDataChangeObserver(function () {
      _this.reloadIntegrations();
    });
    return _this;
  }

  _createClass(IntegrationsView, [{
    key: "reloadIntegrations",
    value: function reloadIntegrations() {
      var integrations = __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.getAllIntegrations();
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
      return __WEBPACK_IMPORTED_MODULE_1__lib_FilesafeManager__["a" /* default */].get().filesafe.displayStringForIntegration(integration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var hasMultipleIntegrations = this.state.integrations.length > 1;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-h2 sk-bold"
      }, "Integrations"), !this.state.showInputForm && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-button info no-border",
        onClick: this.addNewIntegrationClicked
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-label"
      }, "Add New"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "integrations"
      }, this.state.showInputForm && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-notification info"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", null, "New Integration"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "sk-p"
      }, "A new tab has opened. After you complete the authentication flow, enter the code you receive below."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-panel-row"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "title sk-input contrast",
        type: "text",
        placeholder: "Enter integration code",
        value: this.state.integrationCode,
        onChange: this.handleTextChange,
        onKeyPress: this.handleKeyPress
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-button-group",
        style: {
          marginTop: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-button neutral",
        onClick: this.cancelIntegrationForm
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "sk-label"
      }, "Cancel")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sk-button sk-base",
        onClick: this.submitIntegrationCode
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "sk-label"
      }, "Submit"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "list-container"
      }, this.state.integrations.map(function (integration) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "list-item sk-horizontal-group top"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "sk-circle x-small " + (integration.content.isDefaultUploadSource ? "info" : "sk-secondary-contrast")
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "sk-panel-row condensed sk-bold"
        }, _this2.displayStringForIntegration(integration)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "sk-panel-row condensed"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "sk-horizontal-group"
        }, hasMultipleIntegrations && !integration.content.isDefaultUploadSource && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: "info",
          onClick: function onClick() {
            _this2.setIntegrationAsDefaultUploadSource(integration);
          }
        }, "Make Default"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: "danger",
          onClick: function onClick() {
            _this2.deleteIntegration(integration);
          }
        }, "Delete")))));
      })));
    }
  }]);

  return IntegrationsView;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })
/******/ ]);