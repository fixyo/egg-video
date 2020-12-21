"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/main.js?{"page":"pages%2Fdetail-video%2FsubNVue%2Fvideo"} ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detail-video/subNVue/video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/detail-video/subNVue/video'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMEZBQUc7QUFDWCxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLGdCQUFnQiwwRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2RldGFpbC12aWRlby9zdWJOVnVlL3ZpZGVvJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/main.js?{"type":"appStyle"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.5,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.5,
    "color": "#0E151D"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "marginLeft": "750rpx"
  },
  "col-offset-11": {
    "marginLeft": "687.5rpx"
  },
  "col-offset-10": {
    "marginLeft": "625rpx"
  },
  "col-offset-9": {
    "marginLeft": "562.5rpx"
  },
  "col-offset-8": {
    "marginLeft": "500rpx"
  },
  "col-offset-7": {
    "marginLeft": "437.5rpx"
  },
  "col-offset-6": {
    "marginLeft": "375rpx"
  },
  "col-offset-5": {
    "marginLeft": "312.5rpx"
  },
  "col-offset-4": {
    "marginLeft": "250rpx"
  },
  "col-offset-3": {
    "marginLeft": "187.5rpx"
  },
  "col-offset-2": {
    "marginLeft": "125rpx"
  },
  "col-offset-1": {
    "marginLeft": "62.5rpx"
  },
  "col-offset-0": {
    "marginLeft": 0
  },
  "flex": {
    "flexDirection": "row"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p": {
    "paddingTop": "5rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "5rpx"
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "font-smaller": {
    "fontSize": "15rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "font-italic": {
    "fontStyle": "italic"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-hover-secondary": {
    "color": "#494f54"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-green": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#09BB07"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#E9E8E5"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-lg": {
    "borderRadius": "14rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-top-lg": {
    "borderTopLeftRadius": "14rpx",
    "borderTopRightRadius": "14rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-bottom-lg": {
    "borderBottomRightRadius": "14rpx",
    "borderBottomLeftRadius": "14rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "mask": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 100
  },
  "text-main": {
    "color": "#FB7299"
  },
  "text-main-hover": {
    "color": "#FB85A7"
  },
  "text-main-disabled": {
    "color": "#FB85A7"
  },
  "bg-main": {
    "backgroundColor": "#FB7299"
  },
  "bg-main-hover": {
    "backgroundColor": "#FB85A7"
  },
  "bg-main-disabled": {
    "backgroundColor": "#FB85A7"
  },
  "border-main": {
    "borderColor": "#FB7299"
  },
  "line-h": {
    "lineHeight": 1.2
  },
  "f-divider": {
    "height": "18rpx",
    "backgroundColor": "#F5F5F4"
  }
}

/***/ }),
/* 4 */
/*!*********************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/video.nvue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=466e0921&mpType=page */ 5);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 23).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 23).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"298e19d9\",\n  false,\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ3VMO0FBQ3ZMLGdCQUFnQiw4TEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NmUwOTIxJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIyOThlMTlkOVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/video.nvue?vue&type=template&id=466e0921&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=466e0921&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/video.nvue?vue&type=template&id=466e0921&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["bg-dark"] },
    [
      _c(
        "u-video",
        {
          ref: "video",
          staticStyle: { width: "750rpx", height: "225px" },
          attrs: {
            id: "video",
            src: _vm.src,
            poster: _vm.poster,
            controls: false,
            showCenterPlayBtn: false,
            showFullscreenBtn: false,
            showProgress: false,
            enableProgressGesture: false
          },
          on: {
            fullscreenchange: _vm.fullscreenchange,
            timeupdate: _vm.timeupdate,
            play: function($event) {
              _vm.isplay = true
            },
            pause: function($event) {
              _vm.isplay = false
            }
          }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: [
                    "position-absolute",
                    "flex",
                    "align-center",
                    "justify-center"
                  ],
                  style: _vm.videoBox
                },
                [
                  _c("view", {
                    staticClass: [
                      "position-absolute",
                      "left-0",
                      "right-0",
                      "top-0",
                      "bottom-0"
                    ],
                    on: {
                      touchstart: _vm.touchStart,
                      touchmove: _vm.touchMove,
                      touchend: _vm.touchEnd
                    }
                  }),
                  _vm.fullScreenStatus &&
                  (_vm.showStatusBarStatus || _vm.lockScreenStatus)
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "align-center",
                            "justify-center"
                          ],
                          staticStyle: { width: "80px" }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "rounded",
                                "flex",
                                "align-center",
                                "justify-center"
                              ],
                              staticStyle: {
                                width: "60px",
                                height: "60px",
                                backgroundColor: "rgba(0,0,0,0.4)"
                              },
                              on: { click: _vm.lockScreen }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["iconfont"],
                                  class: _vm.lockScreenStatus
                                    ? "text-main"
                                    : "text-white"
                                },
                                [_vm._v("")]
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm.showToastStatus
                    ? _c(
                        "view",
                        {
                          staticClass: ["p-2", "rounded"],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.3)" }
                        },
                        [
                          _vm.toast.type === "progress"
                            ? _c(
                                "u-text",
                                { staticClass: ["font", "text-white"] },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatTime")(_vm.currentTime)
                                    ) +
                                      "/" +
                                      _vm._s(_vm._f("formatTime")(_vm.duration))
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.toast.type === "msg"
                            ? _c(
                                "u-text",
                                { staticClass: ["font", "text-white"] },
                                [_vm._v(_vm._s(_vm.toast.msg))]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm.showStatusBarStatus && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "video-bg-top",
                            "position-absolute",
                            "top-0",
                            "left-0",
                            "right-0",
                            "flex",
                            "justify-between",
                            "align-center"
                          ],
                          staticStyle: { height: "44px" }
                        },
                        [
                          _c(
                            "view",
                            { staticClass: ["flex", "align-center"] },
                            [
                              _c(
                                "view",
                                { staticClass: ["flex", "align-center"] },
                                [
                                  _c("f-icon-btn", {
                                    attrs: { icon: "\ue612" },
                                    on: { click: _vm.fullOrExitScreen }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["flex", "align-center", "px-2"]
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white"],
                                      staticStyle: {
                                        fontSize: "15px",
                                        lines: "1"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.title))]
                                  )
                                ]
                              )
                            ]
                          ),
                          _c(
                            "view",
                            { staticClass: ["flex", "align-center"] },
                            [_c("f-icon-btn", { attrs: { icon: "\ue612" } })],
                            1
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm.showStatusBarStatus && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "video-bg-bottom",
                            "position-absolute",
                            "bottom-0",
                            "left-0",
                            "right-0"
                          ]
                        },
                        [
                          _c("view", { staticStyle: { height: "88px" } }, [
                            _c(
                              "view",
                              {
                                staticClass: ["flex-1"],
                                staticStyle: {
                                  paddingLeft: "15px",
                                  paddingRight: "15px"
                                }
                              },
                              [
                                _c("f-slider", {
                                  attrs: {
                                    duration: _vm.duration,
                                    currentTime: _vm.currentTime
                                  },
                                  on: {
                                    change: _vm.sliderChange,
                                    update: _vm.sliderUpdate
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "view",
                              {
                                staticClass: [
                                  "flex",
                                  "align-stretch",
                                  "justify-between"
                                ],
                                staticStyle: { height: "44px" }
                              },
                              [
                                _c(
                                  "view",
                                  { staticClass: ["flex"] },
                                  [
                                    !_vm.isplay
                                      ? _c("f-icon-btn", {
                                          attrs: { icon: "\ue63a", size: "22" },
                                          on: { click: _vm.playOrPause }
                                        })
                                      : _c("f-icon-btn", {
                                          attrs: { icon: "\ue605", size: "22" },
                                          on: { click: _vm.playOrPause }
                                        }),
                                    _c(
                                      "view",
                                      {
                                        staticClass: [
                                          "flex",
                                          "align-center",
                                          "justify-center"
                                        ],
                                        staticStyle: { width: "80px" }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: [
                                              "font-sm",
                                              "text-white"
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("formatTime")(
                                                  _vm.currentTime
                                                )
                                              ) +
                                                "/" +
                                                _vm._s(
                                                  _vm._f("formatTime")(
                                                    _vm.duration
                                                  )
                                                )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _c("f-icon-btn", {
                                      attrs: { icon: "\ue697", size: "22" }
                                    })
                                  ],
                                  1
                                ),
                                _c("view", { staticClass: ["flex"] }, [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("speed")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [_vm._v(_vm._s(_vm.rate) + "X")]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("quality")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatQuality")(
                                                _vm.quality
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("video")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [_vm._v("选集")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm.fullScreenStatus && _vm.showDrawer
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "flex-column"
                          ],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.8)" }
                        },
                        [
                          _vm.drawerType === "speed"
                            ? _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.rateList, function(item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex-1",
                                        "flex",
                                        "align-center",
                                        "justify-center"
                                      ],
                                      on: {
                                        click: function($event) {
                                          _vm.changeRate(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class:
                                            item === _vm.rate
                                              ? "text-main"
                                              : "text-white"
                                        },
                                        [_vm._v(_vm._s(item))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm.drawerType === "video"
                            ? _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "300px" }
                                },
                                [
                                  _c(
                                    "scroll-view",
                                    {
                                      staticClass: ["flex-1", "p-2"],
                                      attrs: { scrollY: "true" }
                                    },
                                    _vm._l(_vm.videoList, function(
                                      item,
                                      index
                                    ) {
                                      return _c(
                                        "view",
                                        {
                                          key: index,
                                          staticClass: [
                                            "border",
                                            "p-2",
                                            "flex",
                                            "rounded",
                                            "mb-2"
                                          ],
                                          on: {
                                            click: function($event) {
                                              _vm.changeVideo(item, index)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: ["text-white"],
                                              class:
                                                _vm.videoIndex === index
                                                  ? "text-main"
                                                  : "text-white",
                                              staticStyle: {
                                                fontSize: "14px",
                                                lines: "1"
                                              }
                                            },
                                            [_vm._v(_vm._s(item.title))]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            : _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.qualityList, function(item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex-1",
                                        "flex",
                                        "align-center",
                                        "justify-center"
                                      ],
                                      on: {
                                        click: function($event) {
                                          _vm.changeQuality(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class:
                                            item.value === _vm.quality
                                              ? "text-main"
                                              : "text-white"
                                        },
                                        [_vm._v(_vm._s(item.name))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                        ]
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm.showStatusBarStatus && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-bg-top",
                "position-fixed",
                "top-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c("view", {
                staticClass: ["border"],
                style: "height: " + _vm.statusBarHeight + "px;"
              }),
              _c(
                "view",
                {
                  staticClass: ["flex", "align-center"],
                  staticStyle: { height: "44px" }
                },
                [
                  _c("f-icon-btn", {
                    attrs: { icon: "\ue612" },
                    on: { click: _vm.back }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm.showStatusBarStatus && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-bg-bottom",
                "position-fixed",
                "bottom-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c(
                "view",
                {
                  staticClass: ["flex", "align-stretch"],
                  staticStyle: { height: "44px" }
                },
                [
                  !_vm.isplay
                    ? _c("f-icon-btn", {
                        attrs: { icon: "\ue63a", size: "22" },
                        on: { click: _vm.playOrPause }
                      })
                    : _c("f-icon-btn", {
                        attrs: { icon: "\ue605", size: "22" },
                        on: { click: _vm.playOrPause }
                      }),
                  _c(
                    "view",
                    { staticClass: ["flex-1"] },
                    [
                      _c("f-slider", {
                        attrs: {
                          duration: _vm.duration,
                          currentTime: _vm.currentTime
                        },
                        on: {
                          change: _vm.sliderChange,
                          update: _vm.sliderUpdate
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["flex", "align-center", "justify-center"],
                      staticStyle: { width: "80px" }
                    },
                    [
                      _c("u-text", { staticClass: ["font-sm", "text-white"] }, [
                        _vm._v(
                          _vm._s(_vm._f("formatTime")(_vm.currentTime)) +
                            "/" +
                            _vm._s(_vm._f("formatTime")(_vm.duration))
                        )
                      ])
                    ]
                  ),
                  _c("f-icon-btn", {
                    attrs: { icon: "\ue800", size: "22" },
                    on: { click: _vm.fullOrExitScreen }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*********************************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFlLENBQWdCLHdnQkFBRyxFQUFDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhQzpcXFxcVXNlcnNcXFxcRUNcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhQzpcXFxcVXNlcnNcXFxcRUNcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _fIconBtn = _interopRequireDefault(__webpack_require__(/*! ./components/f-icon-btn.vue */ 10));\nvar _fSlider = _interopRequireDefault(__webpack_require__(/*! ./components/f-slider.vue */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar d = weex.requireModule('dom');var videoCTX = null;var showToastTimer = null;var timer = null;var _default = { components: { fIconBtn: _fIconBtn.default, fSlider: _fSlider.default }, data: function data() {return { title: \"\", src: \"http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4\", poster: \"\", // 播放状态\n      isplay: false, statusBarHeight: 0, currentTime: 0, duration: 0, windowWidth: 0, windowHeight: 0, fullScreenStatus: false, showToastStatus: false, toast: { type: \"msg\", msg: \"提示\" }, showStatusBarStatus: true, oldTouchs: {}, oldValue: {}, dbCount: 0, touchType: null, platform: \"android\", showDrawer: false, drawerType: \"speed\", // 当前速度\n      rate: \"1.0\", // 速度选择\n      rateList: ['2.0', '1.5', '1.25', '1.0', '0.8', '0.5'], videoIndex: 0, videoList: [], quality: \"HD\", lockScreenStatus: false };}, created: function created() {var res = uni.getSystemInfoSync();this.statusBarHeight = res.statusBarHeight;this.windowHeight = res.windowHeight;this.windowWidth = res.windowWidth;this.platform = res.platform; // 引入图标\n    d.addRule('fontFace', { 'fontFamily': \"iconfont\", 'src': \"url('https://at.alicdn.com/t/font_1419176_mzo8rsjxi4c.ttf')\" });uni.$on('video', this.handleVideoEvent); // this.videoList = demoList\n  }, destroyed: function destroyed() {uni.$off('video', this.handleVideoEvent);}, mounted: function mounted() {videoCTX = this.$refs.video;}, computed: { videoBox: function videoBox() {return this.fullScreenStatus ? \"width:\".concat(this.windowHeight, \"px;height:\").concat(this.windowWidth, \";\") : 'width:750rpx;height:225px;';}, modalStyle: function modalStyle() {var top = this.statusBarHeight + 44;return \"top:\".concat(top, \"px;bottom:44px;\");}, qualityList: function qualityList() {return this.videoList[this.videoIndex] ? this.videoList[this.videoIndex].list : [];} }, methods: { handleVideoEvent: function handleVideoEvent(e) {switch (e.event) {case 'init':this.videoIndex = e.params.activeIndex;this.videoList = e.params.videos.map(function (item) {return { index: 0, title: item.title, list: [{ name: \"高清\", value: \"HD\", url: item.url }] };});this.poster = e.params.poster;var v = this.videoList[this.videoIndex];if (v) {this.src = v.list[v.index].url;}break;case 'change':videoCTX.pause();this.videoIndex = e.params.activeIndex;var o = this.videoList[this.videoIndex];if (o) {this.src = o.list[o.index].url;}setTimeout(function () {videoCTX.play();}, 300);break;}}, // 锁屏或解除锁屏\n    lockScreen: function lockScreen() {this.lockScreenStatus = !this.lockScreenStatus;if (this.lockScreenStatus) {this.hideStatusBar();} else {this.showStatusBar();}}, // 修改清晰度\n    changeQuality: function changeQuality(item) {videoCTX.pause();if (!item.url) {return uni.showToast({ title: '视频链接不存在', icon: 'none' });}this.src = item.url;this.quality = item.value;uni.showToast({ title: '清晰度切换为：' + item.name, icon: 'none' });\n\n      setTimeout(function () {\n        videoCTX.play();\n      }, 300);\n    },\n    // 选集\n    changeVideo: function changeVideo(item, index) {var _this = this;\n      this.videoIndex = index;\n      videoCTX.stop();\n\n      var list = this.videoList[index].list;\n      var i = list.findIndex(function (v) {return v.value === _this.quality;});\n      if (i === -1) {\n        if (list.length > 0) {\n          this.src = list[0].url;\n        } else {\n          return uni.showToast({\n            title: '视频链接不存在',\n            icon: 'none' });\n\n        }\n      } else {\n        this.src = list[i].url;\n      }\n\n      uni.showToast({\n        title: '切换到：' + item.title,\n        icon: 'none' });\n\n\n      setTimeout(function () {\n        videoCTX.seek(0);\n        videoCTX.play();\n      }, 300);\n\n      this.showDrawer = false;\n    },\n    // 修改播放速度\n    changeRate: function changeRate(item) {\n      this.rate = item;\n      videoCTX.playbackRate(this.rate);\n      uni.showToast({\n        title: '当前速度修改为：' + this.rate,\n        icon: 'none' });\n\n      this.showDrawer = false;\n    },\n    openDrawer: function openDrawer(type) {\n      this.drawerType = type;\n      this.showDrawer = true;\n    },\n    // 全屏/退出全屏\n    fullOrExitScreen: function fullOrExitScreen() {\n      if (this.fullScreenStatus) {\n        videoCTX.exitFullScreen();\n      } else {\n        videoCTX.requestFullScreen();\n      }\n    },\n    // 显示或隐藏控制条\n    showOrHideStatusBar: function showOrHideStatusBar() {\n      this.showStatusBarStatus ? this.hideStatusBar() : this.showStatusBar();\n    },\n    // 显示控制条\n    showStatusBar: function showStatusBar() {var _this2 = this;\n      this.showStatusBarStatus = true;\n      timer = timer ? clearTimeout(timer) : null;\n      timer = setTimeout(function () {\n        _this2.hideStatusBar();\n        timer = null;\n      }, 3000);\n    },\n    // 隐藏控制条\n    hideStatusBar: function hideStatusBar() {\n      this.showStatusBarStatus = false;\n    },\n    back: function back() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    // 播放/暂停\n    playOrPause: function playOrPause() {\n      this.showToast({\n        msg: this.isplay ? '暂停' : '播放' });\n\n      if (this.isplay) {\n        videoCTX.pause();\n      } else {\n        this.showStatusBar();\n        videoCTX.play();\n      }\n    },\n    fullscreenchange: function fullscreenchange(e) {\n      this.fullScreenStatus = e.detail.fullScreen;\n      if (!this.fullScreenStatus) {\n        this.lockScreenStatus = false;\n      }\n    },\n    timeupdate: function timeupdate(e) {\n      if (!this.showToastStatus) {\n        this.currentTime = parseInt(e.detail.currentTime);\n      }\n      this.duration = parseInt(e.detail.duration);\n    },\n    // 进度条变化\n    sliderChange: function sliderChange(e) {\n      videoCTX.seek(e);\n      this.showToastStatus = false;\n      videoCTX.play();\n    },\n    sliderUpdate: function sliderUpdate(e) {\n      this.showStatusBar();\n      videoCTX.pause();\n      this.showToastStatus = true;\n      this.showToast({\n        type: \"progress\",\n        autoClose: false });\n\n      this.currentTime = e;\n    },\n    showToast: function showToast(options) {var _this3 = this;\n      this.toast.type = options.type || 'msg';\n      this.toast.msg = options.msg || '提示';\n      this.showToastStatus = true;\n      if (options.autoClose !== false) {\n        if (showToastTimer) {\n          clearTimeout(showToastTimer);\n        }\n        showToastTimer = setTimeout(function () {\n          _this3.showToastStatus = false;\n          showToastTimer = null;\n        }, 500);\n      }\n    },\n    touchStart: function touchStart(e) {\n      __f__(\"log\", 'touch start', \" at pages/detail-video/subNVue/video.nvue:429\");\n\n      this.oldTouchs = e.changedTouches[0];\n\n      this.oldValue = {\n        currentTime: this.currentTime };\n\n    },\n    touchMove: function touchMove(e) {\n      __f__(\"log\", 'touch move', \" at pages/detail-video/subNVue/video.nvue:438\");\n\n      if (this.lockScreenStatus) return;\n      var newTouchs = e.changedTouches[0];\n      if (!this.touchType) {\n        this.touchType = Math.abs(newTouchs.pageX - this.oldTouchs.pageX) > 20 ? 'currentTime' : null;\n        if (this.fullScreenStatus && this.platform === 'ios') {\n          this.touchType = Math.abs(newTouchs.pageY - this.oldTouchs.pageY) > 20 ? 'currentTime' : null;\n        }\n        if (this.touchType === 'currentTime') {\n          videoCTX.pause();\n        }\n      } else if (this.touchType === 'currentTime') {\n        this.showToast({\n          type: \"progress\",\n          autoClose: false });\n\n        this.showStatusBar();\n        var newCurrentTime = (newTouchs.pageX - this.oldTouchs.pageX) / 250 * this.duration * 2 + this.oldValue.currentTime * 1;\n        if (this.fullScreenStatus && this.platform === 'ios') {\n          newCurrentTime = (newTouchs.pageY - this.oldTouchs.pageY) / 250 * this.duration * 2 + this.oldValue.currentTime * 1;\n        }\n        newCurrentTime = newCurrentTime > this.duration ? this.duration : newCurrentTime;\n        newCurrentTime = newCurrentTime < 0 ? 0 : newCurrentTime;\n        this.currentTime = newCurrentTime;\n      }\n    },\n    touchEnd: function touchEnd(e) {var _this4 = this;\n      if (this.lockScreenStatus) return;\n      if (this.touchType === 'currentTime') {\n        videoCTX.seek(this.currentTime);\n        videoCTX.play();\n      } else {\n        __f__(\"log\", 'herer', \" at pages/detail-video/subNVue/video.nvue:471\");\n        if (this.dbCount === 1 || this.dbCount === 0) {\n          this.dbCount++;\n        }\n        if (this.dbCount > 0) {\n          setTimeout(function () {\n            // 单击\n            if (_this4.dbCount === 1) {\n              _this4.showOrHideStatusBar();\n              _this4.showDrawer = false;\n            }\n            // 双击\n            if (_this4.dbCount === 2) {\n              _this4.playOrPause();\n            }\n            _this4.dbCount = 0;\n          }, 250);\n        }\n      }\n      this.touchType = null;\n      this.showToastStatus = false;\n    } },\n\n  filters: {\n    formatTime: function formatTime(result) {\n      var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n      var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);\n      var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n      return result = result > 3600 ? h + \":\" + m + \":\" + s : m + \":\" + s;\n    },\n    formatQuality: function formatQuality(val) {\n      var arr = {\n        SD: \"标清\",\n        HD: \"高清\",\n        FHD: \"超清\" };\n\n      return arr[val];\n    } },\n\n  provide: function provide() {\n    return {\n      v: this };\n\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnSkE7QUFDQSxnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxBLGtDQUNBLG9CQUNBLDBCQUNBLGlCLGVBSUEsRUFDQSxjQUNBLDJCQURBLEVBRUEseUJBRkEsRUFEQSxFQUtBLElBTEEsa0JBS0EsQ0FDQSxTQUNBLFNBREEsRUFFQSw2REFGQSxFQUdBLFVBSEEsRUFJQTtBQUNBLG1CQUxBLEVBT0Esa0JBUEEsRUFTQSxjQVRBLEVBVUEsV0FWQSxFQVlBLGNBWkEsRUFhQSxlQWJBLEVBZUEsdUJBZkEsRUFpQkEsc0JBakJBLEVBa0JBLFNBQ0EsV0FEQSxFQUVBLFNBRkEsRUFsQkEsRUF1QkEseUJBdkJBLEVBeUJBLGFBekJBLEVBMEJBLFlBMUJBLEVBMkJBLFVBM0JBLEVBNEJBLGVBNUJBLEVBNkJBLG1CQTdCQSxFQStCQSxpQkEvQkEsRUFnQ0EsbUJBaENBLEVBa0NBO0FBQ0EsaUJBbkNBLEVBb0NBO0FBQ0EsMkRBckNBLEVBdUNBLGFBdkNBLEVBd0NBLGFBeENBLEVBMENBLGFBMUNBLEVBNENBLHVCQTVDQSxHQThDQSxDQXBEQSxFQXFEQSxPQXJEQSxxQkFxREEsQ0FDQSxrQ0FDQSwyQ0FDQSxxQ0FDQSxtQ0FDQSw2QkFMQSxDQU1BO0FBQ0EsNEJBQ0Esd0JBREEsRUFFQSxvRUFGQSxJQUtBLHdDQVpBLENBY0E7QUFDQSxHQXBFQSxFQXFFQSxTQXJFQSx1QkFxRUEsQ0FDQSx5Q0FDQSxDQXZFQSxFQXdFQSxPQXhFQSxxQkF3RUEsQ0FDQSw0QkFDQSxDQTFFQSxFQTJFQSxZQUNBLFFBREEsc0JBQ0EsQ0FDQSw2SUFDQSxDQUhBLEVBSUEsVUFKQSx3QkFJQSxDQUNBLG9DQUNBLDZDQUNBLENBUEEsRUFRQSxXQVJBLHlCQVFBLENBQ0EsbUZBQ0EsQ0FWQSxFQTNFQSxFQXVGQSxXQUNBLGdCQURBLDRCQUNBLENBREEsRUFDQSxDQUNBLGtCQUNBLFlBQ0EsdUNBQ0Esc0RBQ0EsU0FDQSxRQURBLEVBRUEsaUJBRkEsRUFHQSxTQUNBLFVBREEsRUFFQSxXQUZBLEVBR0EsYUFIQSxHQUhBLEdBU0EsQ0FWQSxFQVdBLDhCQUNBLHdDQUNBLFFBQ0EsK0JBQ0EsQ0FDQSxNQUNBLGNBQ0EsaUJBQ0EsdUNBQ0Esd0NBQ0EsUUFDQSwrQkFDQSxDQUNBLHdCQUNBLGdCQUNBLENBRkEsRUFFQSxHQUZBLEVBR0EsTUE5QkEsQ0FnQ0EsQ0FsQ0EsRUFtQ0E7QUFDQSxjQXBDQSx3QkFvQ0EsQ0FDQSwrQ0FDQSw0QkFDQSxxQkFDQSxDQUZBLE1BRUEsQ0FDQSxxQkFDQSxDQUNBLENBM0NBLEVBNENBO0FBQ0EsaUJBN0NBLHlCQTZDQSxJQTdDQSxFQTZDQSxDQUNBLGlCQUNBLGdCQUNBLHVCQUNBLGdCQURBLEVBRUEsWUFGQSxJQUlBLENBQ0Esb0JBQ0EsMEJBQ0EsZ0JBQ0EsNEJBREEsRUFFQSxZQUZBOztBQUlBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBOURBO0FBK0RBO0FBQ0EsZUFoRUEsdUJBZ0VBLElBaEVBLEVBZ0VBLEtBaEVBLEVBZ0VBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0EsT0FUQSxNQVNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQURBO0FBRUEsb0JBRkE7OztBQUtBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsRUFHQSxHQUhBOztBQUtBO0FBQ0EsS0E5RkE7QUErRkE7QUFDQSxjQWhHQSxzQkFnR0EsSUFoR0EsRUFnR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0EsS0F4R0E7QUF5R0EsY0F6R0Esc0JBeUdBLElBekdBLEVBeUdBO0FBQ0E7QUFDQTtBQUNBLEtBNUdBO0FBNkdBO0FBQ0Esb0JBOUdBLDhCQThHQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FwSEE7QUFxSEE7QUFDQSx1QkF0SEEsaUNBc0hBO0FBQ0E7QUFDQSxLQXhIQTtBQXlIQTtBQUNBLGlCQTFIQSwyQkEwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLElBSEE7QUFJQSxLQWpJQTtBQWtJQTtBQUNBLGlCQW5JQSwyQkFtSUE7QUFDQTtBQUNBLEtBcklBO0FBc0lBLFFBdElBLGtCQXNJQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0ExSUE7QUEySUE7QUFDQSxlQTVJQSx5QkE0SUE7QUFDQTtBQUNBLHNDQURBOztBQUdBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRKQTtBQXVKQSxvQkF2SkEsNEJBdUpBLENBdkpBLEVBdUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVKQTtBQTZKQSxjQTdKQSxzQkE2SkEsQ0E3SkEsRUE2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbEtBO0FBbUtBO0FBQ0EsZ0JBcEtBLHdCQW9LQSxDQXBLQSxFQW9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEtBO0FBeUtBLGdCQXpLQSx3QkF5S0EsQ0F6S0EsRUF5S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQSxLQWxMQTtBQW1MQSxhQW5MQSxxQkFtTEEsT0FuTEEsRUFtTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsRUFHQSxHQUhBO0FBSUE7QUFDQSxLQWhNQTtBQWlNQSxjQWpNQSxzQkFpTUEsQ0FqTUEsRUFpTUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQURBOztBQUdBLEtBek1BO0FBME1BLGFBMU1BLHFCQTBNQSxDQTFNQSxFQTBNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxNQVFBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBck9BO0FBc09BLFlBdE9BLG9CQXNPQSxDQXRPQSxFQXNPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQVhBLEVBV0EsR0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqUUEsRUF2RkE7O0FBMFZBO0FBQ0EsY0FEQSxzQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTkE7QUFPQSxpQkFQQSx5QkFPQSxHQVBBLEVBT0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsZ0JBRkE7QUFHQSxpQkFIQTs7QUFLQTtBQUNBLEtBZEEsRUExVkE7O0FBMFdBLFNBMVdBLHFCQTBXQTtBQUNBO0FBQ0EsYUFEQTs7QUFHQSxHQTlXQSxFIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwiYmctZGFya1wiPlxuXHRcdDx2aWRlbyBcclxuXHRcdFx0aWQ9XCJ2aWRlb1wiIFxyXG5cdFx0XHRyZWY9XCJ2aWRlb1wiXG5cdFx0XHQ6c3JjPVwic3JjXCJcblx0XHRcdDpwb3N0ZXI9XCJwb3N0ZXJcIiBcblx0XHRcdDpjb250cm9scz1cImZhbHNlXCJcblx0XHRcdDpzaG93LWNlbnRlci1wbGF5LWJ0bj1cImZhbHNlXCJcblx0XHRcdDpzaG93LWZ1bGxzY3JlZW4tYnRuPVwiZmFsc2VcIiBcblx0XHRcdDpzaG93LXByb2dyZXNzPVwiZmFsc2VcIiBcblx0XHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCIgXG5cdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiAyMjVweDtcIlxuXHRcdFx0QGZ1bGxzY3JlZW5jaGFuZ2U9XCJmdWxsc2NyZWVuY2hhbmdlXCJcblx0XHRcdEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZVwiXG5cdFx0XHRAcGxheT1cImlzcGxheSA9IHRydWVcIiBcblx0XHRcdEBwYXVzZT1cImlzcGxheSA9IGZhbHNlXCJcblx0XHQ+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgOnN0eWxlPVwidmlkZW9Cb3hcIj5cblx0XHRcdFx0PCEtLSDokpnniYggLS0+XG5cdFx0XHRcdDx2aWV3IFxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCB0b3AtMCBib3R0b20tMFwiIFxyXG5cdFx0XHRcdFx0QHRvdWNoc3RhcnQ9XCJ0b3VjaFN0YXJ0XCIgXHJcblx0XHRcdFx0XHRAdG91Y2htb3ZlPVwidG91Y2hNb3ZlXCIgXHJcblx0XHRcdFx0XHRAdG91Y2hlbmQ9XCJ0b3VjaEVuZFwiXHJcblx0XHRcdFx0Pjwvdmlldz5cblx0XHRcdFx0PCEtLSDkvqfovrkgLS0+XG5cdFx0XHRcdDx2aWV3IFxyXG5cdFx0XHRcdFx0di1pZj1cImZ1bGxTY3JlZW5TdGF0dXMgJiYgKHNob3dTdGF0dXNCYXJTdGF0dXMgfHwgbG9ja1NjcmVlblN0YXR1cylcIiBcclxuXHRcdFx0XHRcdGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3VuZGVkIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1wiIEBjbGljaz1cImxvY2tTY3JlZW5cIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiA6Y2xhc3M9XCJsb2NrU2NyZWVuU3RhdHVzID8gJ3RleHQtbWFpbicgOiAndGV4dC13aGl0ZSdcIj4mI3hlNjIwOzwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDwhLS0g5o+Q56S65qGGIC0tPlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd1RvYXN0U3RhdHVzXCIgY2xhc3M9XCJwLTIgcm91bmRlZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1wiPlxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0b2FzdC50eXBlID09PSAncHJvZ3Jlc3MnXCIgY2xhc3M9XCJmb250IHRleHQtd2hpdGVcIj57e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fTwvdGV4dD5cblx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwidG9hc3QudHlwZSA9PT0gJ21zZydcIiBjbGFzcz1cImZvbnQgdGV4dC13aGl0ZVwiPnt7dG9hc3QubXNnfX08L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PCEtLSDlhajlsY/mjqfliLbmnaEgLS0+XG5cdFx0XHRcdDwhLS0g6aG26YOoIC0tPlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd1N0YXR1c0JhclN0YXR1cyAmJiBmdWxsU2NyZWVuU3RhdHVzXCIgY2xhc3M9XCJ2aWRlby1iZy10b3AgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlNjEyJ1wiIEBjbGljaz1cImZ1bGxPckV4aXRTY3JlZW5cIj48L2YtaWNvbi1idG4+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyIHB4LTJcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7bGluZXM6IDE7XCI+e3sgdGl0bGUgfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxmLWljb24tYnRuIDppY29uPVwiJ1xcdWU2MTInXCI+PC9mLWljb24tYnRuPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIOW6lemDqCAtLT5cblx0XHRcdFx0PHZpZXcgdi1pZj1cInNob3dTdGF0dXNCYXJTdGF0dXMgJiYgZnVsbFNjcmVlblN0YXR1c1wiIGNsYXNzPVwidmlkZW8tYmctYm90dG9tIHBvc2l0aW9uLWFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wXCI+XG5cdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDg4cHg7XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMVwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxNXB4O3BhZGRpbmctcmlnaHQ6IDE1cHg7XCI+XG5cdFx0XHRcdFx0XHRcdDxmLXNsaWRlciA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpjdXJyZW50VGltZT1cImN1cnJlbnRUaW1lXCIgQGNoYW5nZT1cInNsaWRlckNoYW5nZVwiIEB1cGRhdGU9XCJzbGlkZXJVcGRhdGVcIj48L2Ytc2xpZGVyPlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7XCIgY2xhc3M9XCJmbGV4IGFsaWduLXN0cmV0Y2gganVzdGlmeS1iZXR3ZWVuXCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxmLWljb24tYnRuIHYtaWY9XCIhaXNwbGF5XCIgOmljb249XCInXFx1ZTYzYSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cblx0XHRcdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biB2LWVsc2UgOmljb249XCInXFx1ZTYwNSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogODBweDtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC1zbSB0ZXh0LXdoaXRlXCI+e3tjdXJyZW50VGltZXxmb3JtYXRUaW1lfX0ve3tkdXJhdGlvbnxmb3JtYXRUaW1lfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDxmLWljb24tYnRuIDppY29uPVwiJ1xcdWU2OTcnXCIgc2l6ZT1cIjIyXCI+PC9mLWljb24tYnRuPlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogNDRweDtwYWRkaW5nLWxlZnQ6IDE1cHg7cGFkZGluZy1yaWdodDogMTVweDtcIiBAY2xpY2s9XCJvcGVuRHJhd2VyKCdzcGVlZCcpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtcIj57e3JhdGV9fVg8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogNDRweDtwYWRkaW5nLWxlZnQ6IDE1cHg7cGFkZGluZy1yaWdodDogMTVweDtcIiBAY2xpY2s9XCJvcGVuRHJhd2VyKCdxdWFsaXR5JylcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O1wiPnt7cXVhbGl0eXxmb3JtYXRRdWFsaXR5fX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogNDRweDtwYWRkaW5nLWxlZnQ6IDE1cHg7cGFkZGluZy1yaWdodDogMTVweDtcIiBAY2xpY2s9XCJvcGVuRHJhd2VyKCd2aWRlbycpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtcIj7pgInpm4Y8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8IS0tIOW8ueahhiAtLT5cblx0XHRcdFx0PHZpZXcgdi1pZj1cImZ1bGxTY3JlZW5TdGF0dXMgJiYgc2hvd0RyYXdlclwiIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBmbGV4IGZsZXgtY29sdW1uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XCI+XG5cdFx0XHRcdFx0PCEtLSDpgJ/luqYgLS0+XG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cImRyYXdlclR5cGUgPT09ICdzcGVlZCdcIiBjbGFzcz1cImZsZXgtMSBmbGV4IGZsZXgtY29sdW1uXCIgc3R5bGU9XCJ3aWR0aDogMTAwcHg7XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHJhdGVMaXN0XCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwiY2hhbmdlUmF0ZShpdGVtKVwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJpdGVtID09PSByYXRlID8gJ3RleHQtbWFpbicgOiAndGV4dC13aGl0ZSdcIj57e2l0ZW19fTwvdGV4dD5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PCEtLSDpgInpm4YgLS0+XG5cdFx0XHRcdFx0PHZpZXcgdi1lbHNlLWlmPVwiZHJhd2VyVHlwZSA9PT0gJ3ZpZGVvJ1wiIGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2x1bW5cIiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj5cblx0XHRcdFx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteT1cInRydWVcIiBjbGFzcz1cImZsZXgtMSBwLTJcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3JkZXIgcC0yIGZsZXggcm91bmRlZCBtYi0yXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gdmlkZW9MaXN0XCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwiY2hhbmdlVmlkZW8oaXRlbSxpbmRleClcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDtsaW5lczogMTtcIiA6Y2xhc3M9XCJ2aWRlb0luZGV4ID09PSBpbmRleCA/ICd0ZXh0LW1haW4nIDogJ3RleHQtd2hpdGUnXCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwhLS0g5riF5pmw5bqmIC0tPlxuXHRcdFx0XHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cImZsZXgtMSBmbGV4IGZsZXgtY29sdW1uXCIgc3R5bGU9XCJ3aWR0aDogMTAwcHg7XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHF1YWxpdHlMaXN0XCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwiY2hhbmdlUXVhbGl0eShpdGVtKVwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJpdGVtLnZhbHVlID09PSBxdWFsaXR5ID8gJ3RleHQtbWFpbicgOiAndGV4dC13aGl0ZSdcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZGVvPlxuXHRcdDwhLS0g6Z2e5YWo5bGPIC0tPlxuXHRcdDwhLS0g6aG26YOoIC0tPlxuXHRcdDx2aWV3IHYtaWY9XCJzaG93U3RhdHVzQmFyU3RhdHVzICYmICFmdWxsU2NyZWVuU3RhdHVzXCIgY2xhc3M9XCJ2aWRlby1iZy10b3AgcG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIj5cblx0XHRcdDx2aWV3IDpzdHlsZT1cIidoZWlnaHQ6ICcrc3RhdHVzQmFySGVpZ2h0KydweDsnXCIgY2xhc3M9XCJib3JkZXJcIj48L3ZpZXc+XG5cdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogNDRweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XG5cdFx0XHRcdDxmLWljb24tYnRuIDppY29uPVwiJ1xcdWU2MTInXCIgQGNsaWNrPVwiYmFja1wiPjwvZi1pY29uLWJ0bj5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSDlupXpg6jmjqfliLbmnaEgLS0+XG5cdFx0PHZpZXcgdi1pZj1cInNob3dTdGF0dXNCYXJTdGF0dXMgJiYgIWZ1bGxTY3JlZW5TdGF0dXNcIiBjbGFzcz1cInZpZGVvLWJnLWJvdHRvbSBwb3NpdGlvbi1maXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMFwiPlxuXHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7XCIgY2xhc3M9XCJmbGV4IGFsaWduLXN0cmV0Y2hcIj5cblx0XHRcdFx0PGYtaWNvbi1idG4gdi1pZj1cIiFpc3BsYXlcIiA6aWNvbj1cIidcXHVlNjNhJ1wiIHNpemU9XCIyMlwiIEBjbGljaz1cInBsYXlPclBhdXNlXCI+PC9mLWljb24tYnRuPlxuXHRcdFx0XHQ8Zi1pY29uLWJ0biB2LWVsc2UgOmljb249XCInXFx1ZTYwNSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTFcIj5cblx0XHRcdFx0XHQ8Zi1zbGlkZXIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIiA6Y3VycmVudFRpbWU9XCJjdXJyZW50VGltZVwiIEBjaGFuZ2U9XCJzbGlkZXJDaGFuZ2VcIiBAdXBkYXRlPVwic2xpZGVyVXBkYXRlXCI+PC9mLXNsaWRlcj5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogODBweDtcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtc20gdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDxmLWljb24tYnRuIDppY29uPVwiJ1xcdWU4MDAnXCIgc2l6ZT1cIjIyXCIgQGNsaWNrPVwiZnVsbE9yRXhpdFNjcmVlblwiPjwvZi1pY29uLWJ0bj5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGNvbnN0IGQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xuXHRsZXQgdmlkZW9DVFggPSBudWxsXG5cdGxldCBzaG93VG9hc3RUaW1lciA9IG51bGxcblx0bGV0IHRpbWVyID0gbnVsbFxuXHRpbXBvcnQgZkljb25CdG4gZnJvbSAnLi9jb21wb25lbnRzL2YtaWNvbi1idG4udnVlJztcblx0aW1wb3J0IGZTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2Ytc2xpZGVyLnZ1ZSc7XG5cdFxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0Zkljb25CdG4sXG5cdFx0XHRmU2xpZGVyXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGl0bGU6XCJcIixcblx0XHRcdFx0c3JjOiBcImh0dHA6Ly9pbWcuY2RuLnFpbml1LmRjbG91ZC5uZXQuY24vd2FwMmFwcHZzbmF0aXZlLm1wNFwiLFxuXHRcdFx0XHRwb3N0ZXI6XCJcIixcblx0XHRcdFx0Ly8g5pKt5pS+54q25oCBXG5cdFx0XHRcdGlzcGxheTpmYWxzZSxcblx0XHRcdFx0XG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDowLFxuXHRcdFx0XHRcblx0XHRcdFx0Y3VycmVudFRpbWU6MCxcblx0XHRcdFx0ZHVyYXRpb246MCxcblx0XHRcdFx0XG5cdFx0XHRcdHdpbmRvd1dpZHRoOjAsXG5cdFx0XHRcdHdpbmRvd0hlaWdodDowLFxuXHRcdFx0XHRcblx0XHRcdFx0ZnVsbFNjcmVlblN0YXR1czpmYWxzZSxcblx0XHRcdFx0XG5cdFx0XHRcdHNob3dUb2FzdFN0YXR1czpmYWxzZSxcblx0XHRcdFx0dG9hc3Q6e1xuXHRcdFx0XHRcdHR5cGU6XCJtc2dcIixcblx0XHRcdFx0XHRtc2c6XCLmj5DnpLpcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcblx0XHRcdFx0c2hvd1N0YXR1c0JhclN0YXR1czp0cnVlLFxuXHRcdFx0XHRcblx0XHRcdFx0b2xkVG91Y2hzOnt9LFxuXHRcdFx0XHRvbGRWYWx1ZTp7fSxcblx0XHRcdFx0ZGJDb3VudDowLFxuXHRcdFx0XHR0b3VjaFR5cGU6bnVsbCxcblx0XHRcdFx0cGxhdGZvcm06XCJhbmRyb2lkXCIsXG5cdFx0XHRcdFxuXHRcdFx0XHRzaG93RHJhd2VyOmZhbHNlLFxuXHRcdFx0XHRkcmF3ZXJUeXBlOlwic3BlZWRcIixcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOW9k+WJjemAn+W6plxuXHRcdFx0XHRyYXRlOlwiMS4wXCIsXG5cdFx0XHRcdC8vIOmAn+W6pumAieaLqVxuXHRcdFx0XHRyYXRlTGlzdDpbJzIuMCcsJzEuNScsJzEuMjUnLCcxLjAnLCcwLjgnLCcwLjUnXSxcblx0XHRcdFx0XG5cdFx0XHRcdHZpZGVvSW5kZXg6MCxcblx0XHRcdFx0dmlkZW9MaXN0OltdLFxuXHRcdFx0XHRcblx0XHRcdFx0cXVhbGl0eTpcIkhEXCIsXG5cdFx0XHRcdFxuXHRcdFx0XHRsb2NrU2NyZWVuU3RhdHVzOmZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0bGV0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHJlcy5zdGF0dXNCYXJIZWlnaHRcblx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuXHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuXHRcdFx0dGhpcy5wbGF0Zm9ybSA9IHJlcy5wbGF0Zm9ybVxuXHRcdFx0Ly8g5byV5YWl5Zu+5qCHXG5cdFx0XHRkLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xuXHRcdFx0XHQnZm9udEZhbWlseSc6IFwiaWNvbmZvbnRcIixcblx0XHRcdFx0J3NyYyc6IFwidXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzE0MTkxNzZfbXpvOHJzanhpNGMudHRmJylcIlxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdHVuaS4kb24oJ3ZpZGVvJyx0aGlzLmhhbmRsZVZpZGVvRXZlbnQpXG5cdFx0XHRcblx0XHRcdC8vIHRoaXMudmlkZW9MaXN0ID0gZGVtb0xpc3Rcblx0XHR9LFxuXHRcdGRlc3Ryb3llZCgpIHtcblx0XHRcdHVuaS4kb2ZmKCd2aWRlbycsdGhpcy5oYW5kbGVWaWRlb0V2ZW50KVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpIHtcblx0XHRcdHZpZGVvQ1RYID0gdGhpcy4kcmVmcy52aWRlb1xuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHZpZGVvQm94KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdWxsU2NyZWVuU3RhdHVzID8gYHdpZHRoOiR7dGhpcy53aW5kb3dIZWlnaHR9cHg7aGVpZ2h0OiR7dGhpcy53aW5kb3dXaWR0aH07YCA6ICd3aWR0aDo3NTBycHg7aGVpZ2h0OjIyNXB4Oydcblx0XHRcdH0sXG5cdFx0XHRtb2RhbFN0eWxlKCl7XG5cdFx0XHRcdGxldCB0b3AgPSB0aGlzLnN0YXR1c0JhckhlaWdodCArIDQ0XG5cdFx0XHRcdHJldHVybiBgdG9wOiR7dG9wfXB4O2JvdHRvbTo0NHB4O2Bcblx0XHRcdH0sXG5cdFx0XHRxdWFsaXR5TGlzdCgpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XSA/IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF0ubGlzdCA6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRoYW5kbGVWaWRlb0V2ZW50KGUpe1xuXHRcdFx0XHRzd2l0Y2ggKGUuZXZlbnQpe1xuXHRcdFx0XHRcdGNhc2UgJ2luaXQnOlxuXHRcdFx0XHRcdHRoaXMudmlkZW9JbmRleCA9IGUucGFyYW1zLmFjdGl2ZUluZGV4XG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBlLnBhcmFtcy52aWRlb3MubWFwKGl0ZW09Pntcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdGluZGV4OjAsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOml0ZW0udGl0bGUsXG5cdFx0XHRcdFx0XHRcdGxpc3Q6W3tcblx0XHRcdFx0XHRcdFx0XHRuYW1lOlwi6auY5riFXCIsXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6XCJIRFwiLFxuXHRcdFx0XHRcdFx0XHRcdHVybDppdGVtLnVybFxuXHRcdFx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMucG9zdGVyID0gZS5wYXJhbXMucG9zdGVyXG5cdFx0XHRcdFx0bGV0IHYgPSB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdXG5cdFx0XHRcdFx0aWYodil7XG5cdFx0XHRcdFx0XHR0aGlzLnNyYyA9IHYubGlzdFt2LmluZGV4XS51cmxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdjaGFuZ2UnOlxuXHRcdFx0XHRcdHZpZGVvQ1RYLnBhdXNlKClcblx0XHRcdFx0XHR0aGlzLnZpZGVvSW5kZXggPSBlLnBhcmFtcy5hY3RpdmVJbmRleFxuXHRcdFx0XHRcdGxldCBvID0gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XVxuXHRcdFx0XHRcdGlmKG8pe1xuXHRcdFx0XHRcdFx0dGhpcy5zcmMgPSBvLmxpc3Rbby5pbmRleF0udXJsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRcdHZpZGVvQ1RYLnBsYXkoKVxuXHRcdFx0XHRcdH0sMzAwKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvLyDplIHlsY/miJbop6PpmaTplIHlsY9cblx0XHRcdGxvY2tTY3JlZW4oKXtcblx0XHRcdFx0dGhpcy5sb2NrU2NyZWVuU3RhdHVzID0gIXRoaXMubG9ja1NjcmVlblN0YXR1c1xuXHRcdFx0XHRpZih0aGlzLmxvY2tTY3JlZW5TdGF0dXMpe1xuXHRcdFx0XHRcdHRoaXMuaGlkZVN0YXR1c0JhcigpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyKClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8vIOS/ruaUuea4heaZsOW6plxuXHRcdFx0Y2hhbmdlUXVhbGl0eShpdGVtKXtcblx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxuXHRcdFx0XHRpZighaXRlbS51cmwpe1xuXHRcdFx0XHRcdHJldHVybiB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn6KeG6aKR6ZO+5o6l5LiN5a2Y5ZyoJyxcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3JjID0gaXRlbS51cmxcblx0XHRcdFx0dGhpcy5xdWFsaXR5ID0gaXRlbS52YWx1ZVxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+a4heaZsOW6puWIh+aNouS4uu+8micraXRlbS5uYW1lLFxuXHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdHZpZGVvQ1RYLnBsYXkoKVxuXHRcdFx0XHR9LDMwMClcblx0XHRcdH0sXG5cdFx0XHQvLyDpgInpm4Zcblx0XHRcdGNoYW5nZVZpZGVvKGl0ZW0saW5kZXgpe1xuXHRcdFx0XHR0aGlzLnZpZGVvSW5kZXggPSBpbmRleFxuXHRcdFx0XHR2aWRlb0NUWC5zdG9wKClcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBsaXN0ID0gdGhpcy52aWRlb0xpc3RbaW5kZXhdLmxpc3Rcblx0XHRcdFx0bGV0IGkgPSBsaXN0LmZpbmRJbmRleCh2PT52LnZhbHVlID09PSB0aGlzLnF1YWxpdHkpXG5cdFx0XHRcdGlmKGkgPT09IC0xKXtcblx0XHRcdFx0XHRpZihsaXN0Lmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdFx0dGhpcy5zcmMgPSBsaXN0WzBdLnVybFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6KeG6aKR6ZO+5o6l5LiN5a2Y5ZyoJyxcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zcmMgPSBsaXN0W2ldLnVybFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+WIh+aNouWIsO+8micrIGl0ZW0udGl0bGUsXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdHZpZGVvQ1RYLnNlZWsoMClcblx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcblx0XHRcdFx0fSwzMDApXG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnNob3dEcmF3ZXIgPSBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdC8vIOS/ruaUueaSreaUvumAn+W6plxuXHRcdFx0Y2hhbmdlUmF0ZShpdGVtKXtcblx0XHRcdFx0dGhpcy5yYXRlID0gaXRlbVxuXHRcdFx0XHR2aWRlb0NUWC5wbGF5YmFja1JhdGUodGhpcy5yYXRlKVxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+W9k+WJjemAn+W6puS/ruaUueS4uu+8micrdGhpcy5yYXRlLFxuXHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRvcGVuRHJhd2VyKHR5cGUpe1xuXHRcdFx0XHR0aGlzLmRyYXdlclR5cGUgPSB0eXBlXG5cdFx0XHRcdHRoaXMuc2hvd0RyYXdlciA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvLyDlhajlsY8v6YCA5Ye65YWo5bGPXG5cdFx0XHRmdWxsT3JFeGl0U2NyZWVuKCl7XG5cdFx0XHRcdGlmKHRoaXMuZnVsbFNjcmVlblN0YXR1cyl7XG5cdFx0XHRcdFx0dmlkZW9DVFguZXhpdEZ1bGxTY3JlZW4oKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZpZGVvQ1RYLnJlcXVlc3RGdWxsU2NyZWVuKClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8vIOaYvuekuuaIlumakOiXj+aOp+WItuadoVxuXHRcdFx0c2hvd09ySGlkZVN0YXR1c0Jhcigpe1xuXHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXJTdGF0dXMgPyB0aGlzLmhpZGVTdGF0dXNCYXIoKSA6IHRoaXMuc2hvd1N0YXR1c0JhcigpXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5pi+56S65o6n5Yi25p2hXG5cdFx0XHRzaG93U3RhdHVzQmFyKCl7XG5cdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhclN0YXR1cyA9IHRydWVcblx0XHRcdFx0dGltZXIgPSB0aW1lciA/IGNsZWFyVGltZW91dCh0aW1lcikgOiBudWxsXG5cdFx0XHRcdHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdHRoaXMuaGlkZVN0YXR1c0JhcigpXG5cdFx0XHRcdFx0dGltZXIgPSBudWxsXG5cdFx0XHRcdH0sMzAwMClcblx0XHRcdH0sXG5cdFx0XHQvLyDpmpDol4/mjqfliLbmnaFcblx0XHRcdGhpZGVTdGF0dXNCYXIoKXtcblx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyU3RhdHVzID0gZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRiYWNrKCl7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xuXHRcdFx0XHRcdGRlbHRhOiAxXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdC8vIOaSreaUvi/mmoLlgZxcblx0XHRcdHBsYXlPclBhdXNlKCl7XG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRtc2c6dGhpcy5pc3BsYXkgPyAn5pqC5YGcJyA6ICfmkq3mlL4nXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGlmKHRoaXMuaXNwbGF5KXtcblx0XHRcdFx0XHR2aWRlb0NUWC5wYXVzZSgpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyKClcblx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZ1bGxzY3JlZW5jaGFuZ2UoZSkge1xuXHRcdFx0XHR0aGlzLmZ1bGxTY3JlZW5TdGF0dXMgPSBlLmRldGFpbC5mdWxsU2NyZWVuXG5cdFx0XHRcdGlmKCF0aGlzLmZ1bGxTY3JlZW5TdGF0dXMpe1xuXHRcdFx0XHRcdHRoaXMubG9ja1NjcmVlblN0YXR1cyA9IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0aW1ldXBkYXRlKGUpe1xuXHRcdFx0XHRpZighdGhpcy5zaG93VG9hc3RTdGF0dXMpe1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSBwYXJzZUludChlLmRldGFpbC5jdXJyZW50VGltZSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gcGFyc2VJbnQoZS5kZXRhaWwuZHVyYXRpb24pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g6L+b5bqm5p2h5Y+Y5YyWXG5cdFx0XHRzbGlkZXJDaGFuZ2UoZSl7XG5cdFx0XHRcdHZpZGVvQ1RYLnNlZWsoZSlcblx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSBmYWxzZVxuXHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcblx0XHRcdH0sXG5cdFx0XHRzbGlkZXJVcGRhdGUoZSl7XG5cdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXG5cdFx0XHRcdHZpZGVvQ1RYLnBhdXNlKClcblx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSB0cnVlXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0eXBlOlwicHJvZ3Jlc3NcIixcblx0XHRcdFx0XHRhdXRvQ2xvc2U6ZmFsc2Vcblx0XHRcdFx0fSlcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IGVcblx0XHRcdH0sXG5cdFx0XHRzaG93VG9hc3Qob3B0aW9ucyl7XG5cdFx0XHRcdHRoaXMudG9hc3QudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnbXNnJ1xuXHRcdFx0XHR0aGlzLnRvYXN0Lm1zZyA9IG9wdGlvbnMubXNnIHx8ICfmj5DnpLonXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gdHJ1ZVxuXHRcdFx0XHRpZihvcHRpb25zLmF1dG9DbG9zZSAhPT0gZmFsc2Upe1xuXHRcdFx0XHRcdGlmKHNob3dUb2FzdFRpbWVyKXtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dChzaG93VG9hc3RUaW1lcilcblx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdHNob3dUb2FzdFRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSBmYWxzZVxuXHRcdFx0XHRcdFx0c2hvd1RvYXN0VGltZXIgPSBudWxsXG5cdFx0XHRcdFx0fSw1MDApXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0b3VjaFN0YXJ0KGUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0b3VjaCBzdGFydCcpXHJcblxuXHRcdFx0XHR0aGlzLm9sZFRvdWNocyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMub2xkVmFsdWUgPSB7XG5cdFx0XHRcdFx0Y3VycmVudFRpbWU6dGhpcy5jdXJyZW50VGltZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dG91Y2hNb3ZlKGUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0b3VjaCBtb3ZlJylcclxuXG5cdFx0XHRcdGlmKHRoaXMubG9ja1NjcmVlblN0YXR1cykgcmV0dXJuXG5cdFx0XHRcdGxldCBuZXdUb3VjaHMgPSBlLmNoYW5nZWRUb3VjaGVzWzBdXG5cdFx0XHRcdGlmKCF0aGlzLnRvdWNoVHlwZSl7XG5cdFx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBNYXRoLmFicyggbmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVggKSA+IDIwID8gJ2N1cnJlbnRUaW1lJyA6IG51bGxcblx0XHRcdFx0XHRpZih0aGlzLmZ1bGxTY3JlZW5TdGF0dXMgJiYgdGhpcy5wbGF0Zm9ybSA9PT0gJ2lvcycpe1xuXHRcdFx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBNYXRoLmFicyggbmV3VG91Y2hzLnBhZ2VZIC0gdGhpcy5vbGRUb3VjaHMucGFnZVkgKSA+IDIwID8gJ2N1cnJlbnRUaW1lJyA6IG51bGxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYodGhpcy50b3VjaFR5cGUgPT09ICdjdXJyZW50VGltZScpe1xuXHRcdFx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKHRoaXMudG91Y2hUeXBlID09PSAnY3VycmVudFRpbWUnKXtcblx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0eXBlOlwicHJvZ3Jlc3NcIixcblx0XHRcdFx0XHRcdGF1dG9DbG9zZTpmYWxzZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyKClcblx0XHRcdFx0XHRsZXQgbmV3Q3VycmVudFRpbWUgPSAobmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVgpLzI1MCAqIHRoaXMuZHVyYXRpb24gKjIgKyB0aGlzLm9sZFZhbHVlLmN1cnJlbnRUaW1lICogMVxuXHRcdFx0XHRcdGlmKHRoaXMuZnVsbFNjcmVlblN0YXR1cyAmJiB0aGlzLnBsYXRmb3JtID09PSAnaW9zJyl7XG5cdFx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IChuZXdUb3VjaHMucGFnZVkgLSB0aGlzLm9sZFRvdWNocy5wYWdlWSkvMjUwICogdGhpcy5kdXJhdGlvbiAqMiArIHRoaXMub2xkVmFsdWUuY3VycmVudFRpbWUgKiAxXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld0N1cnJlbnRUaW1lID0gbmV3Q3VycmVudFRpbWUgPiB0aGlzLmR1cmF0aW9uID8gdGhpcy5kdXJhdGlvbiA6IG5ld0N1cnJlbnRUaW1lXG5cdFx0XHRcdFx0bmV3Q3VycmVudFRpbWUgPSBuZXdDdXJyZW50VGltZSA8IDAgPyAwIDogbmV3Q3VycmVudFRpbWVcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gbmV3Q3VycmVudFRpbWVcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRvdWNoRW5kKGUpe1xuXHRcdFx0XHRpZih0aGlzLmxvY2tTY3JlZW5TdGF0dXMpIHJldHVyblxuXHRcdFx0XHRpZih0aGlzLnRvdWNoVHlwZSA9PT0gJ2N1cnJlbnRUaW1lJyl7XG5cdFx0XHRcdFx0dmlkZW9DVFguc2Vlayh0aGlzLmN1cnJlbnRUaW1lKVxuXHRcdFx0XHRcdHZpZGVvQ1RYLnBsYXkoKVxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2hlcmVyJylcblx0XHRcdFx0XHRpZih0aGlzLmRiQ291bnQgPT09IDEgfHwgdGhpcy5kYkNvdW50ID09PSAwICl7XG5cdFx0XHRcdFx0XHR0aGlzLmRiQ291bnQrK1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0aGlzLmRiQ291bnQgPiAwKXtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRcdFx0Ly8g5Y2V5Ye7XG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMuZGJDb3VudCA9PT0gMSl7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93T3JIaWRlU3RhdHVzQmFyKClcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dEcmF3ZXIgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vIOWPjOWHu1xuXHRcdFx0XHRcdFx0XHRpZih0aGlzLmRiQ291bnQgPT09IDIpe1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheU9yUGF1c2UoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRoaXMuZGJDb3VudCA9IDBcblx0XHRcdFx0XHRcdH0sMjUwKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9IG51bGxcblx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZmlsdGVyczoge1xuXHRcdFx0Zm9ybWF0VGltZShyZXN1bHQpIHtcblx0XHRcdCAgIHZhciBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnK01hdGguZmxvb3IocmVzdWx0IC8gMzYwMCkgOiBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApO1xuXHRcdFx0ICAgdmFyIG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKTtcblx0XHRcdCAgIHZhciBzID0gTWF0aC5mbG9vcigocmVzdWx0ICUgNjApKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcigocmVzdWx0ICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSk7XG5cdFx0XHQgICByZXR1cm4gcmVzdWx0ID0gcmVzdWx0ID4gMzYwMCA/IChoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzKSA6IG0gKyBcIjpcIiArIHM7XG5cdFx0XHR9LFxuXHRcdFx0Zm9ybWF0UXVhbGl0eSh2YWwpe1xuXHRcdFx0XHRsZXQgYXJyID0ge1xuXHRcdFx0XHRcdFNEOlwi5qCH5riFXCIsXG5cdFx0XHRcdFx0SEQ6XCLpq5jmuIVcIixcblx0XHRcdFx0XHRGSEQ6XCLotoXmuIVcIlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBhcnJbdmFsXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cHJvdmlkZSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0djp0aGlzXG5cdFx0XHR9XG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi52aWRlby1iZy10b3B7XG5cdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCAsIHJnYmEoMCwwLDAsMCkgLCByZ2JhKDAsMCwwLDAuNSkpO1xufVxuLnZpZGVvLWJnLWJvdHRvbXtcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tICwgcmdiYSgwLDAsMCwwKSAsIHJnYmEoMCwwLDAsMC41KSk7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-icon-btn.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-icon-btn.vue?vue&type=template&id=afaffccc& */ 11);\n/* harmony import */ var _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-icon-btn.vue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 15).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 15).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"4433434f\",\n  false,\n  _f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/components/f-icon-btn.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUg7QUFDdkg7QUFDOEQ7QUFDTDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQ3VMO0FBQ3ZMLGdCQUFnQiw4TEFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZi1pY29uLWJ0bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWZhZmZjY2MmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZi1pY29uLWJ0bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhQzpcXFxcVXNlcnNcXFxcRUNcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjQ0MzM0MzRmXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2RldGFpbC12aWRlby9zdWJOVnVlL2NvbXBvbmVudHMvZi1pY29uLWJ0bi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*******************************************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=template&id=afaffccc& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=template&id=afaffccc& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=template&id=afaffccc& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["video-btn"],
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "u-text",
        {
          staticClass: ["iconfont", "text-white"],
          style: "font-size:" + _vm.size + "px;"
        },
        [_vm._v(_vm._s(_vm.icon))]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!*************************************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThkLENBQWdCLGlnQkFBRyxFQUFDIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxFQ1xcXFx0b29sc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFDOlxcXFxVc2Vyc1xcXFxFQ1xcXFx0b29sc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhQzpcXFxcVXNlcnNcXFxcRUNcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1pY29uLWJ0bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    icon: {\n      type: String,\n      default: '' },\n\n    size: {\n      type: [String, Number],\n      default: 20 } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLWljb24tYnRuLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFEQTs7QUFLQTtBQUNBLDRCQURBO0FBRUEsaUJBRkEsRUFMQSxFQURBLEUiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwidmlkZW8tYnRuXCIgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJylcIj5cblx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHRleHQtd2hpdGVcIlxuXHRcdDpzdHlsZT1cIidmb250LXNpemU6JytzaXplKydweDsnXCI+e3tpY29ufX08L3RleHQ+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0aWNvbjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0c2l6ZTp7XG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsTnVtYmVyXSxcblx0XHRcdFx0ZGVmYXVsdDogMjBcblx0XHRcdH1cblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQudmlkZW8tYnRue1xuXHRcdHdpZHRoOiA0NHB4O1xuXHRcdGhlaWdodDogNDRweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*********************************************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=style&index=0&lang=css& */ 16);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video-btn": {
    "width": "44",
    "height": "44",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!**********************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-slider.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-slider.vue?vue&type=template&id=040f5173& */ 19);\n/* harmony import */ var _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-slider.vue?vue&type=script&lang=js& */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"71f97c68\",\n  false,\n  _f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/components/f-slider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDdUw7QUFDdkwsZ0JBQWdCLDhMQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLXNsaWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQwZjUxNzMmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mLXNsaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Ytc2xpZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI3MWY5N2M2OFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS9jb21wb25lbnRzL2Ytc2xpZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*****************************************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-slider.vue?vue&type=template&id=040f5173& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.vue?vue&type=template&id=040f5173& */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_template_id_040f5173___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-slider.vue?vue&type=template&id=040f5173& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["flex", "align-center", "position-relative"],
      staticStyle: { height: "44px" },
      on: {
        touchstart: _vm.touchstart,
        touchmove: _vm.touchmove,
        touchend: _vm.touchend,
        touchcancel: _vm.touchcancel
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["flex-1", "rounded"],
          staticStyle: {
            height: "3px",
            backgroundColor: "rgba(255,255,255,0.5)"
          }
        },
        [
          _c("view", {
            staticClass: ["bg-main"],
            staticStyle: { height: "3px" },
            style: _vm.activeStyle
          })
        ]
      ),
      _c("view", {
        staticClass: ["position-absolute", "rounded-circle", "bg-main-hover"],
        staticStyle: { width: "15px", height: "15px" },
        style: _vm.activeDotStyle
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 21 */
/*!***********************************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-slider.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.vue?vue&type=script&lang=js& */ 22);\n/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRkLENBQWdCLCtmQUFHLEVBQUMiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhQzpcXFxcVXNlcnNcXFxcRUNcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1zbGlkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUM6XFxcXFVzZXJzXFxcXEVDXFxcXHRvb2xzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhQzpcXFxcVXNlcnNcXFxcRUNcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1zbGlkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/components/f-slider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  inject: ['v'],\n  props: {\n    currentTime: {\n      type: Number,\n      default: 0 },\n\n    duration: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      activeWidth: 0,\n      width: 0,\n      moveStatus: false,\n      left: 0 };\n\n  },\n  created: function created() {\n    if (!this.v.fullScreenStatus) {\n      this.width = this.v.windowWidth - 44 - 44 - 80 - 15;\n      this.left = 44;\n    } else {\n      this.width = this.v.windowHeight - 30 - 15;\n      this.left = 15;\n    }\n    this.active();\n  },\n  computed: {\n    activeStyle: function activeStyle() {\n      return \"width:\".concat(this.activeWidth, \"px;\");\n    },\n    activeDotStyle: function activeDotStyle() {\n      return \"left:\".concat(this.activeWidth, \"px;\");\n    },\n    current: function current() {\n      return this.width == 0 ? 0 : this.activeWidth / this.width * this.duration;\n    } },\n\n  watch: {\n    currentTime: function currentTime(newValue, oldValue) {\n      if (!this.moveStatus) {\n        this.active();\n      }\n    } },\n\n  methods: {\n    active: function active() {\n      this.activeWidth = this.duration == 0 ? 0 : this.currentTime / this.duration * this.width;\n    },\n    touchstart: function touchstart(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = true;\n      this.activeWidth = e.changedTouches[0].screenX - this.left;\n    },\n    touchmove: function touchmove(e) {\n      if (this.duration === 0) return;\n      var d = e.changedTouches[0].screenX - this.left;\n      if (d <= 0) {\n        this.activeWidth = 0;\n      } else if (d >= this.width) {\n        this.activeWidth = this.width;\n      } else {\n        this.activeWidth = d;\n      }\n      this.$emit('update', this.current);\n    },\n    touchend: function touchend(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = false;\n      this.$emit('change', this.current);\n    },\n    touchcancel: function touchcancel(e) {\n      this.touchend(e);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLXNsaWRlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBTEEsRUFGQTs7O0FBWUEsTUFaQSxrQkFZQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxjQUZBO0FBR0EsdUJBSEE7QUFJQSxhQUpBOztBQU1BLEdBbkJBO0FBb0JBLFNBcEJBLHFCQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E3QkE7QUE4QkE7QUFDQSxlQURBLHlCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsa0JBSkEsNEJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxXQVBBLHFCQU9BO0FBQ0E7QUFDQSxLQVRBLEVBOUJBOztBQXlDQTtBQUNBLGVBREEsdUJBQ0EsUUFEQSxFQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUF6Q0E7O0FBZ0RBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGNBSkEsc0JBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLGFBVEEscUJBU0EsQ0FUQSxFQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEJBO0FBcUJBLFlBckJBLG9CQXFCQSxDQXJCQSxFQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBekJBO0FBMEJBLGVBMUJBLHVCQTBCQSxDQTFCQSxFQTBCQTtBQUNBO0FBQ0EsS0E1QkEsRUFoREEsRSIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7XCIgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiIEB0b3VjaG1vdmU9XCJ0b3VjaG1vdmVcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZFwiIEB0b3VjaGNhbmNlbD1cInRvdWNoY2FuY2VsXCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgcm91bmRlZFwiIHN0eWxlPVwiaGVpZ2h0OiAzcHg7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1wiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiZy1tYWluXCIgc3R5bGU9XCJoZWlnaHQ6IDNweDtcIiA6c3R5bGU9XCJhY3RpdmVTdHlsZVwiPjwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSByb3VuZGVkLWNpcmNsZSBiZy1tYWluLWhvdmVyXCIgc3R5bGU9XCJ3aWR0aDogMTVweDtoZWlnaHQ6IDE1cHg7XCIgOnN0eWxlPVwiYWN0aXZlRG90U3R5bGVcIj48L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRpbmplY3Q6Wyd2J10sXG5cdFx0cHJvcHM6IHtcblx0XHRcdGN1cnJlbnRUaW1lOiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDogMFxuXHRcdFx0fSxcblx0XHRcdGR1cmF0aW9uOntcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiAwXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0YWN0aXZlV2lkdGg6MCxcblx0XHRcdFx0d2lkdGg6MCxcblx0XHRcdFx0bW92ZVN0YXR1czpmYWxzZSxcblx0XHRcdFx0bGVmdDowXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0aWYoIXRoaXMudi5mdWxsU2NyZWVuU3RhdHVzKXtcblx0XHRcdFx0dGhpcy53aWR0aCA9IHRoaXMudi53aW5kb3dXaWR0aCAtIDQ0IC0gNDQgLSA4MCAtIDE1XG5cdFx0XHRcdHRoaXMubGVmdCA9IDQ0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLndpZHRoID0gdGhpcy52LndpbmRvd0hlaWdodCAtIDMwIC0gMTVcblx0XHRcdFx0dGhpcy5sZWZ0ID0gMTVcblx0XHRcdH1cblx0XHRcdHRoaXMuYWN0aXZlKClcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRhY3RpdmVTdHlsZSgpIHtcblx0XHRcdFx0cmV0dXJuIGB3aWR0aDoke3RoaXMuYWN0aXZlV2lkdGh9cHg7YFxuXHRcdFx0fSxcblx0XHRcdGFjdGl2ZURvdFN0eWxlKCl7XG5cdFx0XHRcdHJldHVybiBgbGVmdDoke3RoaXMuYWN0aXZlV2lkdGh9cHg7YFxuXHRcdFx0fSxcblx0XHRcdGN1cnJlbnQoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMud2lkdGggPT0gMCA/IDAgOiAodGhpcy5hY3RpdmVXaWR0aC90aGlzLndpZHRoKSp0aGlzLmR1cmF0aW9uXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR3YXRjaDoge1xuXHRcdFx0Y3VycmVudFRpbWUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG5cdFx0XHRcdGlmKCF0aGlzLm1vdmVTdGF0dXMpe1xuXHRcdFx0XHRcdHRoaXMuYWN0aXZlKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YWN0aXZlKCkge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZVdpZHRoID0gdGhpcy5kdXJhdGlvbiA9PSAwID8gMCA6ICh0aGlzLmN1cnJlbnRUaW1lL3RoaXMuZHVyYXRpb24pICogdGhpcy53aWR0aFxuXHRcdFx0fSxcblx0XHRcdHRvdWNoc3RhcnQoZSl7XG5cdFx0XHRcdGlmKHRoaXMuZHVyYXRpb24gPT09IDApIHJldHVyblxuXHRcdFx0XHR0aGlzLm1vdmVTdGF0dXMgPSB0cnVlXG5cdFx0XHRcdHRoaXMuYWN0aXZlV2lkdGggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSB0aGlzLmxlZnRcblx0XHRcdH0sXG5cdFx0XHR0b3VjaG1vdmUoZSl7XG5cdFx0XHRcdGlmKHRoaXMuZHVyYXRpb24gPT09IDApIHJldHVyblxuXHRcdFx0XHRsZXQgZCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWCAtIHRoaXMubGVmdFxuXHRcdFx0XHRpZihkIDw9IDApe1xuXHRcdFx0XHRcdHRoaXMuYWN0aXZlV2lkdGggPSAwXG5cdFx0XHRcdH0gZWxzZSBpZihkID49IHRoaXMud2lkdGgpe1xuXHRcdFx0XHRcdHRoaXMuYWN0aXZlV2lkdGggPSB0aGlzLndpZHRoXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXaWR0aCA9IGRcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGUnLHRoaXMuY3VycmVudClcblx0XHRcdH0sXG5cdFx0XHR0b3VjaGVuZChlKXtcblx0XHRcdFx0aWYodGhpcy5kdXJhdGlvbiA9PT0gMCkgcmV0dXJuXG5cdFx0XHRcdHRoaXMubW92ZVN0YXR1cyA9IGZhbHNlXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsdGhpcy5jdXJyZW50KVxuXHRcdFx0fSxcblx0XHRcdHRvdWNoY2FuY2VsKGUpe1xuXHRcdFx0XHR0aGlzLnRvdWNoZW5kKGUpXG5cdFx0XHR9XG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*****************************************************************************************************************************!*\
  !*** D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 24);
/* harmony import */ var _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_C_Users_EC_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/EcsCode/uni-video/uniVideoClient/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video-bg-top": {
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0) , rgba(0,0,0,0.5))"
  },
  "video-bg-bottom": {
    "backgroundImage": "linear-gradient(to bottom , rgba(0,0,0,0) , rgba(0,0,0,0.5))"
  }
}

/***/ })
/******/ ]);