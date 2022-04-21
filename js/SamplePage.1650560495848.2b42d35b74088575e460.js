(self["webpackChunktasks_frontend"] = self["webpackChunktasks_frontend"] || []).push([["SamplePage"],{

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/Dark/DarkContext.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/Dark/DarkContext.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DarkContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext('light');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkContext);
//# sourceMappingURL=DarkContext.js.map

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternalMain": () => (/* binding */ InternalMain),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dark */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Dark/DarkContext.js");
/* harmony import */ var _Main_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Main/main.css */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/main.css");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var toKebab = function (text) { return text.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(); };
var InternalMain = function (_a) {
    var path = _a.path, _b = _a.params, params = _b === void 0 ? {} : _b, children = _a.children, className = _a.className, props = __rest(_a, ["path", "params", "children", "className"]);
    var calculateLocation = function () {
        var _a, _b, _c;
        if ((_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.insights) === null || _a === void 0 ? void 0 : _a.chrome) === null || _b === void 0 ? void 0 : _b.$internal) === null || _c === void 0 ? void 0 : _c.store) {
            var chromeState = window.insights.chrome.$internal.store.getState();
            if (path && chromeState) {
                return path.split('/').reduce(function (acc, curr) {
                    var _a;
                    if (curr.indexOf(':') === 0) {
                        acc.dynamic = __assign(__assign({}, acc.dynamic), (_a = {}, _a["data-".concat(toKebab(curr.substr(1)))] = params[curr.substr(1)], _a));
                    }
                    else {
                        acc.staticPart = __spreadArray(__spreadArray([], acc.staticPart, true), (curr !== '' ? [curr] : []), true);
                    }
                    return acc;
                }, { staticPart: [chromeState.chrome.appId], dynamic: {} });
            }
        }
        return {
            staticPart: [],
            dynamic: undefined,
        };
    };
    var _c = calculateLocation(), dynamic = _c.dynamic, staticPart = _c.staticPart;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dark__WEBPACK_IMPORTED_MODULE_4__["default"].Consumer, null, function (theme) {
        var _a;
        if (theme === void 0) { theme = 'light'; }
        var themeClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_a = {}, _a["pf-m-".concat(theme)] = theme === 'dark', _a));
        return {
            dark: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", __assign({}, props, dynamic, { "page-type": staticPart.join('-'), className: "".concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'pf-l-page__main-section pf-c-page__main-section'), " ").concat(themeClasses) }), react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
                return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
                    className: 'pf-m-dark',
                });
            }))),
            light: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", __assign({}, props, dynamic, { "page-type": staticPart.join('-'), className: "".concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'pf-l-page__main-section pf-c-page__main-section')) }), children)),
        }[theme];
    }));
};
var mapStateToProps = function (_a) {
    var routerData = _a.routerData;
    return ({
        params: routerData && routerData.params,
        path: routerData && routerData.path,
    });
};
var Main = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, function () { return ({}); })(InternalMain);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
//# sourceMappingURL=Main.js.map

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dark */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Dark/DarkContext.js");
/* harmony import */ var _PageHeader_page_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PageHeader/page-header.css */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/page-header.css");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var PageHeader = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var pageHeaderClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'pf-l-page-header', 'pf-c-page-header', 'pf-l-page__main-section', 'pf-c-page__main-section');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dark__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, null, function (theme) {
        var _a, _b;
        if (theme === void 0) { theme = 'light'; }
        var themeClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_a = {}, _a["pf-m-".concat(theme, "-200")] = theme === 'dark', _a), (_b = {}, _b["pf-m-light"] = theme === 'light', _b));
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", __assign({}, props, { className: "".concat(pageHeaderClasses, " ").concat(themeClasses), "widget-type": "InsightsPageHeader" }), children));
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);
//# sourceMappingURL=PageHeader.js.map

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);



var PageHeaderTitle = function (_a) {
    var className = _a.className, title = _a.title;
    var pageHeaderTitleClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Title, { headingLevel: "h1", size: "2xl", className: pageHeaderTitleClasses, "widget-type": "InsightsPageHeaderTitle" }, title));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeaderTitle);
//# sourceMappingURL=PageHeaderTitle.js.map

/***/ }),

/***/ "./src/PresentationalComponents/TasksTabs/TasksTabs.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/TasksTabs/TasksTabs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);




var TasksTabs = function TasksTabs(_ref) {
  var className = _ref.className,
      tabIndex = _ref.tabIndex,
      tabsList = _ref.tabsList,
      updateTab = _ref.updateTab;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    className: className,
    activeKey: tabIndex,
    onSelect: updateTab
  }, tabsList.map(function (tabName, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, {
      id: "tabs-page-".concat(index),
      key: "tabs-page-".concat(index),
      eventKey: index,
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TabTitleText, null, tabName)
    });
  }));
};

TasksTabs.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  tabsList: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  updateTab: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksTabs);

/***/ }),

/***/ "./src/PresentationalComponents/index.js":
/*!***********************************************!*\
  !*** ./src/PresentationalComponents/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksTabs": () => (/* reexport safe */ _TasksTabs_TasksTabs__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TasksTabs_TasksTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksTabs/TasksTabs */ "./src/PresentationalComponents/TasksTabs/TasksTabs.js");


/***/ }),

/***/ "./src/SmartComponents/TasksPage/TasksPage.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/TasksPage/TasksPage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _PresentationalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PresentationalComponents */ "./src/PresentationalComponents/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _tasks_page_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks-page.scss */ "./src/SmartComponents/TasksPage/tasks-page.scss");







var AvailableTasks = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_SmartComponents_AvailableTasks_AvailableTasks_js").then(__webpack_require__.bind(__webpack_require__, /*! ../AvailableTasks/AvailableTasks */ "./src/SmartComponents/AvailableTasks/AvailableTasks.js"));
});
var CompletedTasks = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_SmartComponents_CompletedTasks_CompletedTasks_js").then(__webpack_require__.bind(__webpack_require__, /*! ../CompletedTasks/CompletedTasks */ "./src/SmartComponents/CompletedTasks/CompletedTasks.js"));
});


var TasksPage = function TasksPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      tabIndex = _useState2[0],
      setTab = _useState2[1];

  var updateTab = function updateTab(event, index) {
    setTab(index);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Tasks"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PresentationalComponents__WEBPACK_IMPORTED_MODULE_3__.TasksTabs, {
    className: "tabs-background",
    tabIndex: tabIndex,
    updateTab: updateTab,
    tabsList: _constants__WEBPACK_IMPORTED_MODULE_4__.TASKS_PAGE_TABS
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Spinner, null)
  }, tabIndex === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AvailableTasks, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CompletedTasks, null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksPage);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TASKS_PAGE_TABS": () => (/* binding */ TASKS_PAGE_TABS)
/* harmony export */ });
var TASKS_PAGE_TABS = ['Available tasks', 'Completed tasks'];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/main.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/Main/main.css ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/page-header.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/page-header.css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/SmartComponents/TasksPage/tasks-page.scss":
/*!*******************************************************!*\
  !*** ./src/SmartComponents/TasksPage/tasks-page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/SamplePage.0970f519fcee7d1de2482b6ebd2df373.js.map