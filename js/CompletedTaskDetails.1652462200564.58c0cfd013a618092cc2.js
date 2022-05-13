"use strict";
(self["webpackChunktasks_frontend"] = self["webpackChunktasks_frontend"] || []).push([["CompletedTaskDetails"],{

/***/ "./src/SmartComponents/CompletedTaskDetails/Columns.js":
/*!*************************************************************!*\
  !*** ./src/SmartComponents/CompletedTaskDetails/Columns.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemColumn": () => (/* binding */ SystemColumn),
/* harmony export */   "ResultColumn": () => (/* binding */ ResultColumn),
/* harmony export */   "MessageColumn": () => (/* binding */ MessageColumn),
/* harmony export */   "exportableColumns": () => (/* binding */ exportableColumns),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/helpers */ "./src/Utilities/helpers.js");





var SystemNameCell = function SystemNameCell(_ref, index) {
  var display_name = _ref.display_name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    key: "system-title-".concat(index) //to={`/executed/${id}`}
    ,
    to: "/"
  }, display_name);
};

SystemNameCell.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  display_name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
var SystemColumn = {
  title: 'System name',
  props: {
    width: 35
  },
  sortByProp: 'display_name',
  renderExport: function renderExport(job) {
    return job.display_name;
  },
  renderFunc: (0,_Utilities_helpers__WEBPACK_IMPORTED_MODULE_2__.renderColumnComponent)(SystemNameCell)
};
var ResultColumn = {
  title: 'Result',
  props: {
    width: 20
  },
  sortByProp: 'status',
  renderExport: function renderExport(job) {
    return job.status;
  }
};
var MessageColumn = {
  title: 'Message',
  props: {
    width: 20
  },
  sortByProp: 'message',
  renderExport: function renderExport(job) {
    return job.message;
  }
};
var exportableColumns = [SystemColumn, ResultColumn, MessageColumn];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([SystemColumn, ResultColumn, MessageColumn]);

/***/ }),

/***/ "./src/SmartComponents/CompletedTaskDetails/CompletedTaskDetails.js":
/*!**************************************************************************!*\
  !*** ./src/SmartComponents/CompletedTaskDetails/CompletedTaskDetails.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utilities_hooks_useTableTools_Components_TasksTables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities/hooks/useTableTools/Components/TasksTables */ "./src/Utilities/hooks/useTableTools/Components/TasksTables.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Columns */ "./src/SmartComponents/CompletedTaskDetails/Columns.js");
/* harmony import */ var _Utilities_hooks_useTableTools_Components_tests_TasksTable_fixtures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Utilities/hooks/useTableTools/Components/__tests__/TasksTable.fixtures */ "./src/Utilities/hooks/useTableTools/Components/__tests__/TasksTable.fixtures.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Filters */ "./src/SmartComponents/CompletedTaskDetails/Filters.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _tests_fixtures_completedTasksDetails_fixtures__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./__tests__/__fixtures__/completedTasksDetails.fixtures */ "./src/SmartComponents/CompletedTaskDetails/__tests__/__fixtures__/completedTasksDetails.fixtures.js");
/* harmony import */ var _Utilities_hooks_useTableTools_Components_FlexibleFlex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Utilities/hooks/useTableTools/Components/FlexibleFlex */ "./src/Utilities/hooks/useTableTools/Components/FlexibleFlex.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







 //import { fetchExecutedTask, fetchExecutedTaskJobs } from '../../../api';







var CompletedTaskDetails = function CompletedTaskDetails() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
      id = _useParams.id;

  var filters = Object.values(_Filters__WEBPACK_IMPORTED_MODULE_8__); //const filters = Object.values(Filters);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      completedTaskDetails = _useState2[0],
      setCompletedTaskDetails = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var fetchData = function fetchData() {
      var taskDetails; //const taskDetails = fetchExecutedTask(id);
      //const taskJobs = fetchExecutedTaskJobs(id);

      if (id == 1) {
        taskDetails = _tests_fixtures_completedTasksDetails_fixtures__WEBPACK_IMPORTED_MODULE_10__.log4j_task;
      } else {
        taskDetails = _tests_fixtures_completedTasksDetails_fixtures__WEBPACK_IMPORTED_MODULE_10__.upgrade_leap_task;
      }

      taskDetails.messages_count = _Utilities_hooks_useTableTools_Components_tests_TasksTable_fixtures__WEBPACK_IMPORTED_MODULE_7__.completedTaskJobsItems.filter(function (item) {
        return item.message !== 'No vulnerability found.';
      }).length;
      setCompletedTaskDetails(taskDetails);
    };

    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Breadcrumb, {
    ouiaId: "completed-tasks-details-breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbItem, {
    to: "/beta/insights/tasks/executed"
  }, "Tasks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbItem, {
    isActive: true
  }, completedTaskDetails.task_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    direction: {
      "default": 'column',
      md: 'row'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    direction: {
      "default": 'column'
    },
    flex: {
      "default": 'flex_1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: completedTaskDetails.task_title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FlexItem, null, completedTaskDetails.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Utilities_hooks_useTableTools_Components_FlexibleFlex__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: completedTaskDetails,
    flexContents: _constants__WEBPACK_IMPORTED_MODULE_9__.COMPLETED_INFO_BUTTONS,
    flexProps: _constants__WEBPACK_IMPORTED_MODULE_9__.COMPLETED_INFO_BUTTONS_FLEX_PROPS
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    className: "completed-task-details-info-border",
    justifyContent: {
      "default": 'justifyContentSpaceBetween'
    },
    direction: {
      "default": 'column',
      md: 'row'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Utilities_hooks_useTableTools_Components_FlexibleFlex__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: completedTaskDetails,
    flexContents: _constants__WEBPACK_IMPORTED_MODULE_9__.COMPLETED_INFO_PANEL,
    flexProps: _constants__WEBPACK_IMPORTED_MODULE_9__.COMPLETED_INFO_PANEL_FLEX_PROPS
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Utilities_hooks_useTableTools_Components_TasksTables__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "".concat(completedTaskDetails.id, "-completed-jobs"),
    ouiaId: "".concat(completedTaskDetails.id, "-completed-jobs-table"),
    columns: _Columns__WEBPACK_IMPORTED_MODULE_6__["default"],
    items: _Utilities_hooks_useTableTools_Components_tests_TasksTable_fixtures__WEBPACK_IMPORTED_MODULE_7__.completedTaskJobsItems,
    filters: {
      filterConfig: filters
    },
    options: _objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_9__.TASKS_TABLE_DEFAULTS), {}, {
      exportable: _objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_9__.TASKS_TABLE_DEFAULTS.exportable), {}, {
        columns: _Columns__WEBPACK_IMPORTED_MODULE_6__.exportableColumns
      })
    }) //items={completedTasks}
    //emptyRows={emptyRows}
    ,
    isStickyHeader: true
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompletedTaskDetails);

/***/ }),

/***/ "./src/SmartComponents/CompletedTaskDetails/Filters.js":
/*!*************************************************************!*\
  !*** ./src/SmartComponents/CompletedTaskDetails/Filters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "systemFilter": () => (/* binding */ systemFilter)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/conditionalFilterConstants.js");

var systemFilter = {
  type: _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_0__.conditionalFilterType.text,
  label: 'System',
  filter: function filter(jobs, value) {
    return jobs.filter(function (job) {
      return job.display_name.toLowerCase().includes(value.toLowerCase());
    });
  }
};

/***/ }),

/***/ "./src/SmartComponents/CompletedTaskDetails/__tests__/__fixtures__/completedTasksDetails.fixtures.js":
/*!***********************************************************************************************************!*\
  !*** ./src/SmartComponents/CompletedTaskDetails/__tests__/__fixtures__/completedTasksDetails.fixtures.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log4j_task": () => (/* binding */ log4j_task),
/* harmony export */   "upgrade_leap_task": () => (/* binding */ upgrade_leap_task)
/* harmony export */ });
var log4j_task = {
  id: 42,
  task_title: 'Log4J Detection',
  description: 'Uses the insights-client to determine if systems are affected by the LogShell vulnerability. Resource intensive scan',
  task_url: 'https://console.redhat.com/api/tasks/v1/task/log4J',
  start: '2022-04-21T10:10:00',
  end: null,
  initiated_by: 'UserX',
  status: 'running',
  system_count: 10,
  jobs: [{
    display_name: 'host01.example.com',
    host_id: '00112233-4455-6677-8899aabbccddeeff',
    status: 'completed' //results: {'JSON structure'}

  }]
};
var upgrade_leap_task = {
  id: 43,
  task_title: 'Upgrade RHEL version with LEAP tool',
  description: 'Uses the insights-client to determine if RHEL version can be upgraded with LEAP tool. Resource intensive scan',
  task_url: 'https://console.redhat.com/api/tasks/v1/task/leap',
  start: '2022-04-21T10:10:00',
  end: '2022-04-23T11:10:00',
  initiated_by: 'Michael',
  status: 'running',
  system_count: 5,
  jobs: [{
    display_name: 'host01.example.com',
    host_id: '00112233-4455-6677-8899aabbccddeeff',
    status: 'completed' //results: {'JSON structure'}

  }]
};

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/CompletedTaskDetails.11492034091faa0db4bb08f96a7a576d.js.map