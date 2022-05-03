"use strict";
(self["webpackChunktasks_frontend"] = self["webpackChunktasks_frontend"] || []).push([["src_PresentationalComponents_CompletedTasksTable_CompletedTasksTable_js"],{

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/ */ "./node_modules/@patternfly/react-core/dist/esm/helpers/OUIA/ouia.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TableToolbar_TableToolbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TableToolbar/TableToolbar.css */ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.css");
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





function generateCount(results) {
    if (results > 1 || results < 1) {
        return "".concat(results, " Results");
    }
    else {
        return "".concat(results, " Result");
    }
}
var TableToolbar = function (_a) {
    var _b;
    var _c = _a.isFooter, isFooter = _c === void 0 ? false : _c, results = _a.results, className = _a.className, selected = _a.selected, children = _a.children, ouiaId = _a.ouiaId, _d = _a.ouiaSafe, ouiaSafe = _d === void 0 ? true : _d, props = __rest(_a, ["isFooter", "results", "className", "selected", "children", "ouiaId", "ouiaSafe"]);
    var tableToolbarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ins-c-table__toolbar', (_b = {}, _b["ins-m-footer"] = isFooter, _b), className);
    var ouiaComponentType = 'RHI/TableToolbar';
    var ouiaFinalId = (0,_patternfly_react_core___WEBPACK_IMPORTED_MODULE_4__.useOUIAId)(ouiaComponentType, ouiaId, ouiaSafe);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar, __assign({ className: tableToolbarClasses, "data-ouia-component-type": ouiaComponentType, "data-ouia-component-id": ouiaFinalId, "data-ouia-safe": ouiaSafe }, props), children),
        ((results && results >= 0) || (selected && selected >= 0)) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ins-c-table__toolbar-results" },
            results && results >= 0 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ins-c-table__toolbar-results-count" },
                " ",
                generateCount(results),
                " "),
            selected && selected >= 0 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ins-c-table__toolbar-results-selected" },
                " ",
                selected,
                " Selected ")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableToolbar);
//# sourceMappingURL=TableToolbar.js.map

/***/ }),

/***/ "./src/PresentationalComponents/CompletedTasksTable/Columns.js":
/*!*********************************************************************!*\
  !*** ./src/PresentationalComponents/CompletedTasksTable/Columns.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "Systems": () => (/* binding */ Systems),
/* harmony export */   "RunDateTime": () => (/* binding */ RunDateTime),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Task = {
  title: 'Task',
  props: {
    width: 35
  },
  sortByProp: 'title' //renderExport: (task) => task.title,

};
var Systems = {
  title: 'Systems',
  props: {
    width: 20
  },
  sortByProp: 'system_count' //renderExport: (task) => task.totalSystemCount,

};
var RunDateTime = {
  title: 'Run date/time',
  props: {
    width: 20
  },
  sortByProp: 'runDateTime' //renderExport: (task) => task.runDateTime,

}; //export const exportableColumns = [Task, Systems, RunDateTime];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([Task, Systems, RunDateTime]);

/***/ }),

/***/ "./src/PresentationalComponents/CompletedTasksTable/CompletedTasksTable.js":
/*!*********************************************************************************!*\
  !*** ./src/PresentationalComponents/CompletedTasksTable/CompletedTasksTable.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities_hooks_useTableTools_Components_TasksTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities/hooks/useTableTools/Components/TasksTables */ "./src/Utilities/hooks/useTableTools/Components/TasksTables.js");
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Columns */ "./src/PresentationalComponents/CompletedTasksTable/Columns.js");
/* harmony import */ var _Utilities_hooks_useTableTools_Components_tests_TasksTable_fixtures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/hooks/useTableTools/Components/__tests__/TasksTable.fixtures */ "./src/Utilities/hooks/useTableTools/Components/__tests__/TasksTable.fixtures.js");


 //import { fetchExecutedTasks } from '../../../api';



var CompletedTasksTable = function CompletedTasksTable() {
  //const [completedTasks, setCompletedTasks] = useState(items);

  /*useEffect(() => {
    const fetchData = () => {
      const result = fetchExecutedTasks();
       setCompletedTasks(result);
    };
     fetchData();
  }, []);*/
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Utilities_hooks_useTableTools_Components_TasksTables__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "completed-tasks",
    ouiaId: "completed-tasks-table",
    columns: _Columns__WEBPACK_IMPORTED_MODULE_2__["default"],
    items: _Utilities_hooks_useTableTools_Components_tests_TasksTable_fixtures__WEBPACK_IMPORTED_MODULE_3__.completedTasksTableItems //items={completedTasks}
    //emptyRows={emptyRows}
    ,
    isStickyHeader: true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompletedTasksTable);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/Components/TasksTables.js":
/*!*********************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/Components/TasksTables.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/TableToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js");
/* harmony import */ var _useTableTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useTableTools */ "./src/Utilities/hooks/useTableTools/useTableTools.js");




 //import PrimaryToolbar from '@redhat-cloud-services/frontend-components/PrimaryToolbar';




var TasksTables = function TasksTables(_ref) {
  var label = _ref.label,
      ouiaId = _ref.ouiaId,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns;

  var _useTableTools = (0,_useTableTools__WEBPACK_IMPORTED_MODULE_4__["default"])(items, columns),
      tableProps = _useTableTools.tableProps;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.Table, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": label,
    ouiaId: ouiaId
    /*rows={rows}
    cells={columns}*/

  }, tableProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.TableBody, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isFooter: true,
    results: -1,
    selected: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.PaginationVariant.bottom
    /*{...toolbarProps.pagination}*/

  })));
};

TasksTables.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  ouiaId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  items: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array.isRequired),

  /*columns: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.node,
      transforms: propTypes.array,
      sortByProperty: propTypes.string,
      sortByArray: propTypes.array,
      sortByFunction: propTypes.func,
      renderFunc: propTypes.func,
    })
  ).isRequired,*/
  columns: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array.isRequired),
  filters: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  toolbarProps: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksTables);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/Components/__tests__/TasksTable.fixtures.js":
/*!***************************************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/Components/__tests__/TasksTable.fixtures.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedTasksTableItems": () => (/* binding */ completedTasksTableItems)
/* harmony export */ });
var completedTasksTableItems = [{
  title: 'taskA',
  id: 1,
  start: '2022-04-21T10:10:00',
  end: 'null',
  initiated_by: 'Michael',
  status: 'running',
  system_count: 10
}, {
  title: 'taskB',
  id: 2,
  start: '2022-04-20T10:10:00',
  end: '2022-04-20T11:10:00',
  initiated_by: 'Michael',
  status: 'complete',
  system_count: 5
}];

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/useRowsBuilder.js":
/*!*************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/useRowsBuilder.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var buildRow = function buildRow(item, index) {
  return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: "task-title-".concat(index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "beta/insights/tasks"
  }, item.title)), item.system_count, item.start];
};

var useRowsBuilder = function useRowsBuilder(items) {
  var rows = items.map(function (item, index) {
    return buildRow(item, index);
  });
  return {
    tableProps: {
      rows: rows
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRowsBuilder);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/useTableTools.js":
/*!************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/useTableTools.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _useRowsBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRowsBuilder */ "./src/Utilities/hooks/useTableTools/useRowsBuilder.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var useTableTools = function useTableTools() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useRowsBuilder = (0,_useRowsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(items),
      rowBuilderTableProps = _useRowsBuilder.tableProps;

  var tableProps = _objectSpread({
    cells: columns
  }, rowBuilderTableProps);

  return {
    tableProps: tableProps
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTableTools);

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_PresentationalComponents_CompletedTasksTable_CompletedTasksTable_js.79f50cb7b57f3f61ac49b8c84e1fa635.js.map