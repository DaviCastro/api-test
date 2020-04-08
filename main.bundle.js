(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BaseFlowItem.js":
/*!*****************************!*\
  !*** ./src/BaseFlowItem.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseFlowItem; });\n/* harmony import */ var _PayloadWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PayloadWrapper.js */ \"./src/PayloadWrapper.js\");\n\nclass BaseFlowItem {\n  constructor() {\n    this._outputId = null;\n    this._inputId = null;\n  }\n\n  get inputId() {\n    return this._inputId;\n  }\n\n  set inputId(inputId) {\n    this._inputId = inputId;\n  }\n\n  get outputId() {\n    return this._outputId;\n  }\n\n  set outputId(outputId) {\n    this._outputId = outputId;\n  }\n\n  execute(input, flowContext) {\n    let output = this.doExecute(input.getRawPayload(), flowContext);\n\n    if (output instanceof _PayloadWrapper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      if (this._outputId != null) output.setKey(this._outputId);\n      return output;\n    }\n\n    return _PayloadWrapper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrapPayload(this._outputId != null ? this._outputId : this.constructor.name, output);\n  }\n\n  doExecute(input, flowContext) {\n    console.log(\"doExecute\");\n  }\n\n}\n\n//# sourceURL=webpack:///./src/BaseFlowItem.js?");

/***/ }),

/***/ "./src/FlowContext.js":
/*!****************************!*\
  !*** ./src/FlowContext.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlowContext; });\nclass FlowContext {\n  constructor(inputWrapper) {\n    this._payloadMap = new Map();\n    this._currentPayloadState = inputWrapper;\n\n    this._payloadMap.set(inputWrapper.key, inputWrapper);\n  }\n\n  addPayloadEntry(inputWrapper) {\n    if (inputWrapper != null) {\n      this._payloadMap.set(inputWrapper.key, inputWrapper);\n\n      this._currentPayloadState = inputWrapper;\n    }\n  }\n\n  get currentPayloadState() {\n    return this._currentPayloadState;\n  }\n\n  getPayloadState(state) {\n    return this._payloadMap.get(state);\n  }\n\n  getRawPayloadState(state) {\n    return this.getPayloadState(state).getRawPayload();\n  }\n\n  getFlowInputParam() {\n    return this.getRawPayloadState(\"FLOW_INPUT\");\n  }\n\n  getGlobalFlowInputParam() {\n    return this.getRawPayloadState(\"FLOW_INPUT\");\n  }\n\n  getSuitablePayload(inputId) {\n    if (inputId != null) {\n      return this.getPayloadState(inputId);\n    } else return this.currentPayloadState;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/FlowContext.js?");

/***/ }),

/***/ "./src/FlowProcessor.js":
/*!******************************!*\
  !*** ./src/FlowProcessor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlowProcessor; });\n/* harmony import */ var _BaseFlowItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseFlowItem.js */ \"./src/BaseFlowItem.js\");\n/* harmony import */ var _FlowContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlowContext.js */ \"./src/FlowContext.js\");\n/* harmony import */ var _PayloadWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PayloadWrapper.js */ \"./src/PayloadWrapper.js\");\n\n\n\nclass FlowProcessor extends _BaseFlowItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(flowItens) {\n    super();\n    this._itens = flowItens;\n  }\n\n  get itens() {\n    return this._itens;\n  }\n\n  set itens(newItens) {\n    this._itens = newItens;\n  }\n\n  execute(input) {\n    let payloadWrapper = _PayloadWrapper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].wrapPayload(\"FLOW_INPUT\", input);\n    let flowContext = new _FlowContext_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](payloadWrapper);\n    return super.execute(payloadWrapper, flowContext).getRawPayload();\n  }\n\n  doExecute(input, flowContext) {\n    if (Array.isArray(this._itens) && this._itens !== 0) {\n      //Executa o primeiro item sempre com o input injetado no fluxo\n      this.executeItem(this._itens[0], _PayloadWrapper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].wrapPayloadDefaultKey(input), flowContext);\n\n      for (let index = 1; index < this._itens.length; index++) {\n        let item = this._itens[index];\n        let input = flowContext.getSuitablePayload(item.inputId);\n        this.executeItem(item, input, flowContext);\n      } // Retorna ultimo estado do payload\n\n\n      return this.getSuitableFlowOutput(flowContext);\n    }\n\n    return null;\n  }\n\n  executeItem(item, input, flowContext) {\n    let payloadWrapper = item.execute(input, flowContext);\n    this.addPayloadEntry(flowContext, payloadWrapper);\n  }\n\n  addPayloadEntry(flowContext, payload) {\n    flowContext.addPayloadEntry(payload);\n  }\n\n  getSuitableFlowOutput(flowContext) {\n    if (super.outputId != null) return flowContext.getPayloadState(super.outputId);\n    return flowContext.currentPayloadState;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/FlowProcessor.js?");

/***/ }),

/***/ "./src/PayloadWrapper.js":
/*!*******************************!*\
  !*** ./src/PayloadWrapper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PayloadWrapper; });\nclass PayloadWrapper {\n  constructor(key, payload) {\n    this._key = key;\n    this._payload = payload;\n    this._defaultKey = \"DEFAULT_KEY\";\n  }\n\n  get key() {\n    return this._key;\n  }\n\n  set key(newKey) {\n    this._key = newKey;\n  }\n\n  getRawPayload() {\n    return this._payload;\n  }\n\n  set payload(payload) {\n    this._payload = payload;\n  }\n\n  static wrapPayloadDefaultKey(output) {\n    return PayloadWrapper.wrapPayload(this._defaultKey, output);\n  }\n\n  static wrapPayload(identifier, output) {\n    return new PayloadWrapper(identifier, output);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/PayloadWrapper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: BaseFlowItem, FlowContext, PayloadWrapper, FlowProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseFlowItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseFlowItem.js */ \"./src/BaseFlowItem.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BaseFlowItem\", function() { return _BaseFlowItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _FlowContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlowContext.js */ \"./src/FlowContext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FlowContext\", function() { return _FlowContext_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _PayloadWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PayloadWrapper.js */ \"./src/PayloadWrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PayloadWrapper\", function() { return _PayloadWrapper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _FlowProcessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FlowProcessor.js */ \"./src/FlowProcessor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FlowProcessor\", function() { return _FlowProcessor_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ })));