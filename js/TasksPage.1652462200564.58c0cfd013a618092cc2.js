"use strict";
(self["webpackChunktasks_frontend"] = self["webpackChunktasks_frontend"] || []).push([["TasksPage"],{

/***/ "./src/PresentationalComponents/TasksTabs/TasksTabs.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/TasksTabs/TasksTabs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _PresentationalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PresentationalComponents */ "./src/PresentationalComponents/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _Utilities_hooks_useTableTools_Components_FlexibleFlex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utilities/hooks/useTableTools/Components/FlexibleFlex */ "./src/Utilities/hooks/useTableTools/Components/FlexibleFlex.js");
/* harmony import */ var _tasks_page_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks-page.scss */ "./src/SmartComponents/TasksPage/tasks-page.scss");










var AvailableTasksTable = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_SmartComponents_AvailableTasksTable_AvailableTasksTable_js").then(__webpack_require__.bind(__webpack_require__, /*! ../AvailableTasksTable/AvailableTasksTable */ "./src/SmartComponents/AvailableTasksTable/AvailableTasksTable.js"));
});
var CompletedTasksTable = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_lodash__baseIsEqual_js"), __webpack_require__.e("vendors-node_modules_lodash__cloneBuffer_js-node_modules_lodash__cloneTypedArray_js-node_modu-f592f7"), __webpack_require__.e("vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_redhat-cloud-services_fr-93ee7c"), __webpack_require__.e("src_Utilities_hooks_useTableTools_Components_TasksTables_js-src_Utilities_hooks_useTableTools-2a4615"), __webpack_require__.e("src_SmartComponents_CompletedTasksTable_CompletedTasksTable_js-node_modules_redhat-cloud-serv-06c28c")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../SmartComponents/CompletedTasksTable/CompletedTasksTable */ "./src/SmartComponents/CompletedTasksTable/CompletedTasksTable.js"));
});


var TasksPage = function TasksPage(_ref) {
  var tab = _ref.tab;
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tab),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      tabIndex = _useState2[0],
      setTab = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (tab === 0) {
      history.push('available');
    }
  }, []);

  var updateTab = function updateTab(event, index) {
    history.push(index ? 'executed' : 'available');
    setTab(index);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Utilities_hooks_useTableTools_Components_FlexibleFlex__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flexContents: _constants__WEBPACK_IMPORTED_MODULE_5__.TASKS_PAGE_HEADER,
    flexProps: _constants__WEBPACK_IMPORTED_MODULE_5__.TASKS_PAGE_HEADER_FLEX_PROPS
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PresentationalComponents__WEBPACK_IMPORTED_MODULE_4__.TasksTabs, {
    className: "tabs-background",
    tabIndex: tabIndex,
    updateTab: updateTab,
    tabsList: _constants__WEBPACK_IMPORTED_MODULE_5__.TASKS_PAGE_TABS
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)
  }, tabIndex === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AvailableTasksTable, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CompletedTasksTable, null))))));
};

TasksPage.propTypes = {
  tab: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksPage);

/***/ }),

/***/ "./src/SmartComponents/TasksPage/tasks-page.scss":
/*!*******************************************************!*\
  !*** ./src/SmartComponents/TasksPage/tasks-page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/TasksPage.22aeb1261eb8eb56534eeb4419989136.js.map