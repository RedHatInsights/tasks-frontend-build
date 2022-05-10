(self["webpackChunktasks_frontend"] = self["webpackChunktasks_frontend"] || []).push([["CompletedTaskDetails"],{

/***/ "./src/SmartComponents/CompletedTaskDetails/Columns.js":
/*!*************************************************************!*\
  !*** ./src/SmartComponents/CompletedTaskDetails/Columns.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ }),

/***/ "./src/Utilities/Dispatcher.js":
/*!*************************************!*\
  !*** ./src/Utilities/Dispatcher.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dispatchAction": () => (/* binding */ dispatchAction),
/* harmony export */   "dispatchNotification": () => (/* binding */ dispatchNotification)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/redux */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/redux/index.js");


function dispatchAction(actionCreator) {
  var store = (0,_store__WEBPACK_IMPORTED_MODULE_0__.getStore)();
  return store.dispatch(actionCreator);
}
var dispatchNotification = function dispatchNotification(notification) {
  dispatchAction((0,_redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_1__.addNotification)(notification));
};

/***/ }),

/***/ "./src/Utilities/helpers.js":
/*!**********************************!*\
  !*** ./src/Utilities/helpers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderRunDateTime": () => (/* binding */ renderRunDateTime),
/* harmony export */   "getTimeDiff": () => (/* binding */ getTimeDiff),
/* harmony export */   "uniq": () => (/* binding */ uniq),
/* harmony export */   "renderColumnComponent": () => (/* binding */ renderColumnComponent),
/* harmony export */   "orderArrayByProp": () => (/* binding */ orderArrayByProp),
/* harmony export */   "getProperty": () => (/* binding */ getProperty),
/* harmony export */   "camelCase": () => (/* binding */ camelCase)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);






var renderRunning = function renderRunning(time) {
  return time === 'null' || !time ? 'Running' : false;
};

var renderRunDateTime = function renderRunDateTime(time) {
  return renderRunning(time) || moment__WEBPACK_IMPORTED_MODULE_4___default().utc(time).format('DD MMM YYYY, HH:mm UTC');
};
var getTimeDiff = function getTimeDiff(_ref) {
  var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
      start = _ref2[0],
      end = _ref2[1];

  return renderRunning(end) || "".concat(renderRunDateTime(end), " (").concat(moment__WEBPACK_IMPORTED_MODULE_4___default().duration(moment__WEBPACK_IMPORTED_MODULE_4___default()(renderRunDateTime(end), 'DD MMM YYYY, HH:mm').diff(moment__WEBPACK_IMPORTED_MODULE_4___default()(renderRunDateTime(start), 'DD MMM YYYY HH:mm'))).asHours(), " hours)");
};
var uniq = function uniq(collection) {
  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(collection));
};
/*eslint-disable react/display-name*/

var renderColumnComponent = function renderColumnComponent(Component, props) {
  return function (_data, _id, entity) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entity, props));
  };
};
/*eslint-enable react/display-name*/

var orderArrayByProp = function orderArrayByProp(property, objects, direction) {
  return objects.sort(function (a, b) {
    if (direction === 'asc') {
      if (typeof a[property] === 'number') {
        return a[property] - b[property];
      } else {
        return String(a[property]).localeCompare(String(b[property]));
      }
    } else {
      if (typeof a[property] === 'number') {
        return -a[property] + b[property];
      } else {
        return -String(a[property]).localeCompare(String(b[property]));
      }
    }
  });
};
var getProperty = function getProperty(obj, path, fallback) {
  var parts = path.split('.');
  var key = parts.shift();

  if (typeof obj[key] !== 'undefined') {
    return parts.length > 0 ? getProperty(obj[key], parts.join('.'), fallback) : obj[key];
  }

  return fallback;
};
var camelCase = function camelCase(string) {
  return string.split(/[-_\W]+/g).map(function (string) {
    return string.trim();
  }).map(function (string) {
    return string[0].toUpperCase() + string.substring(1);
  }).join('');
};

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/Components/FlexibleFlex.js":
/*!**********************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/Components/FlexibleFlex.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





var renderFlexItem = function renderFlexItem(display) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, display);
};

var FlexibleFlex = function FlexibleFlex(_ref) {
  var data = _ref.data,
      flexContents = _ref.flexContents,
      flexProps = _ref.flexProps;
  return flexContents.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Flex, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.match
    }, flexProps), renderFlexItem(item.contents), item.match ? item.renderFunc ? renderFlexItem(item.renderFunc(item.match.map(function (prop) {
      return data[prop];
    }))) : renderFlexItem(data[item.match]) : null);
  });
};

FlexibleFlex.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  flexContents: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  flexProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexibleFlex);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TASKS_API_ROOT": () => (/* binding */ TASKS_API_ROOT),
/* harmony export */   "EXECUTED_TASKS_ROOT": () => (/* binding */ EXECUTED_TASKS_ROOT),
/* harmony export */   "TASKS_PAGE_TABS": () => (/* binding */ TASKS_PAGE_TABS),
/* harmony export */   "COMPLETED_INFO_PANEL_FLEX_PROPS": () => (/* binding */ COMPLETED_INFO_PANEL_FLEX_PROPS),
/* harmony export */   "COMPLETED_INFO_PANEL": () => (/* binding */ COMPLETED_INFO_PANEL),
/* harmony export */   "COMPLETED_INFO_BUTTONS_FLEX_PROPS": () => (/* binding */ COMPLETED_INFO_BUTTONS_FLEX_PROPS),
/* harmony export */   "COMPLETED_INFO_BUTTONS": () => (/* binding */ COMPLETED_INFO_BUTTONS),
/* harmony export */   "TASKS_TABLE_DEFAULTS": () => (/* binding */ TASKS_TABLE_DEFAULTS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities_Dispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities/Dispatcher */ "./src/Utilities/Dispatcher.js");
/* harmony import */ var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilities/helpers */ "./src/Utilities/helpers.js");





var TASKS_API_ROOT = '/api/tasks/v1';
var EXECUTED_TASKS_ROOT = '/executed_tasks';
var TASKS_PAGE_TABS = ['Available tasks', 'Completed tasks'];
var COMPLETED_INFO_PANEL_FLEX_PROPS = {
  direction: {
    "default": 'column'
  }
};
var COMPLETED_INFO_PANEL = [{
  contents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "Systems"),
  match: ['system_count']
}, {
  contents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "Run start"),
  match: ['start'],
  renderFunc: function renderFunc(start) {
    return _Utilities_helpers__WEBPACK_IMPORTED_MODULE_4__.renderRunDateTime.apply(void 0, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(start));
  }
}, {
  contents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "Run end"),
  match: ['start', 'end'],
  renderFunc: function renderFunc(start, end) {
    return (0,_Utilities_helpers__WEBPACK_IMPORTED_MODULE_4__.getTimeDiff)(start, end);
  }
}, {
  contents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "Initiated by"),
  match: ['initiated_by']
}, {
  contents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "Systems with messages"),
  match: ['messages_count']
}];
var COMPLETED_INFO_BUTTONS_FLEX_PROPS = {
  align: {
    "default": 'alignRigt'
  }
};
var COMPLETED_INFO_BUTTONS = [{
  contents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    ouiaId: "run-this-task-again-button"
  }, "Run this task again")
}, {
  contents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    ouiaId: "download-report-button"
  }, "Download report")
}];
var TASKS_TABLE_DEFAULTS = {
  exportable: {
    onStart: function onStart() {
      (0,_Utilities_Dispatcher__WEBPACK_IMPORTED_MODULE_3__.dispatchNotification)({
        variant: 'info',
        title: 'Preparing export',
        description: 'Once complete, your download will start automatically.'
      });
    },
    onComplete: function onComplete() {
      (0,_Utilities_Dispatcher__WEBPACK_IMPORTED_MODULE_3__.dispatchNotification)({
        variant: 'success',
        title: 'Downloading export'
      });
    }
  }
};

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/CompletedTaskDetails.f6533fbd23c234d161725abbe82371a3.js.map