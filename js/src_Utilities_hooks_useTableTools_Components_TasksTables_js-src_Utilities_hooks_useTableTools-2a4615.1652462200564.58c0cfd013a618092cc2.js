"use strict";
(self["webpackChunktasks_frontend"] = self["webpackChunktasks_frontend"] || []).push([["src_Utilities_hooks_useTableTools_Components_TasksTables_js-src_Utilities_hooks_useTableTools-2a4615"],{

/***/ "./src/Utilities/hooks/useTableTools/Components/SelectedFilterSwitch.js":
/*!******************************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/Components/SelectedFilterSwitch.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var SelectedFilterSwitch = function SelectedFilterSwitch(_ref) {
  var isChecked = _ref.isChecked,
      setActiveFilter = _ref.setActiveFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Switch, {
    "aria-label": "selected-filter-swtich",
    id: "selected-filter-swtich",
    label: "Selected only",
    isChecked: isChecked,
    onChange: function onChange() {
      return setActiveFilter('selected', !isChecked);
    }
  });
};

SelectedFilterSwitch.propTypes = {
  isChecked: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  setActiveFilter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedFilterSwitch);

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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PrimaryToolbar/PrimaryToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/TableToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js");
/* harmony import */ var _useTableTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useTableTools */ "./src/Utilities/hooks/useTableTools/useTableTools.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var TasksTables = function TasksTables(_ref) {
  var label = _ref.label,
      ouiaId = _ref.ouiaId,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? [] : _ref$filters,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;

  var _useTableTools = (0,_useTableTools__WEBPACK_IMPORTED_MODULE_5__["default"])(items, columns, _objectSpread({
    filters: filters
  }, options)),
      toolbarProps = _useTableTools.toolbarProps,
      tableProps = _useTableTools.tableProps;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_6__["default"], toolbarProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.Table, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": label,
    ouiaId: ouiaId
    /*rows={rows}
    cells={columns}*/

  }, tableProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.TableBody, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isFooter: true,
    results: -1,
    selected: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.PaginationVariant.bottom
    /*{...toolbarProps.pagination}*/

  })));
};

TasksTables.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  ouiaId: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  items: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array.isRequired),

  /*columns: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.node,
      transforms: propTypes.array,
      sortByProperty: propTypes.string,
      sortByFunction: propTypes.func,
      renderFunc: propTypes.func,
    })
  ).isRequired,*/
  columns: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array.isRequired),
  filters: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  toolbarProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
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
/* harmony export */   "completedTasksTableItems": () => (/* binding */ completedTasksTableItems),
/* harmony export */   "completedTaskJobsItems": () => (/* binding */ completedTaskJobsItems)
/* harmony export */ });
var completedTasksTableItems = [{
  title: 'taskA',
  id: 1,
  start: '2022-04-21T10:10:00',
  end: 'null',
  run_date_time: 'Running',
  initiated_by: 'Michael',
  status: 'running',
  system_count: 10
}, {
  title: 'taskB',
  id: 2,
  start: '2022-04-20T10:10:00',
  end: '2022-04-20T11:10:00',
  run_date_time: '20 Apr 2022, 11:10 UTC',
  initiated_by: 'Michael',
  status: 'complete',
  system_count: 5
}];
var completedTaskJobsItems = [{
  id: 82,
  display_name: 'host01.example.com',
  host_id: '00112233-4455-6677-8899aabbccddeeff',
  message: 'Vulnerability found.',
  status: 'completed'
}, {
  id: 83,
  display_name: 'host02.example.com',
  host_id: '00112233-4455-6677-8899aabbccddeefg',
  message: 'No vulnerability found.',
  status: 'completed'
}, {
  id: 84,
  display_name: 'host03.example.com',
  host_id: '00112233-4455-6677-8899aabbccddeefh',
  message: 'No vulnerability found.',
  status: 'completed'
}, {
  id: 85,
  display_name: 'host04.example.com',
  host_id: '00112233-4455-6677-8899aabbccddeefi',
  message: 'Vulnerability found.',
  status: 'completed'
}, {
  id: 86,
  display_name: 'host05.example.com',
  host_id: '00112233-4455-6677-8899aabbccddeefj',
  message: 'Vulnerability found.',
  status: 'completed'
}, {
  id: 87,
  display_name: 'host06.example.com',
  host_id: '00112233-4455-6677-8899aabbccddeefk',
  message: 'No vulnerability found.',
  status: 'completed'
}];

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/ChipBuilder.js":
/*!******************************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/FilterConfigBuilder/ChipBuilder.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/conditionalFilterConstants.js");






var findWithString = function findWithString(value) {
  return function (item) {
    return String(item.value) === String(value);
  };
};

var ChipBuilder = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function ChipBuilder(filterConfig) {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ChipBuilder);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "textFilterChip", function (category, currentValue) {
    return currentValue && currentValue !== '' ? {
      category: category,
      chips: [{
        name: currentValue
      }]
    } : null;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "checkboxFilterChip", function (category, currentValue) {
    return currentValue && currentValue.length > 0 ? {
      category: category,
      chips: currentValue.map(function (value) {
        return {
          name: _this.filterConfig.labelForValue(value, category)
        };
      })
    } : null;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "radioFilterChip", function (category, currentValue) {
    return currentValue && currentValue !== '' ? {
      category: category,
      chips: [{
        name: _this.filterConfig.labelForValue(currentValue, category)
      }]
    } : null;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "groupFilterChip", function (category) {
    var currentValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var categoryConfig = arguments.length > 2 ? arguments[2] : undefined;
    var items = Object.keys(currentValue).flatMap(function (groupValue) {
      var group = categoryConfig.items.find(findWithString(groupValue));
      return Object.keys(currentValue[groupValue]).map(function (itemValue) {
        return currentValue[groupValue][itemValue] ? [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(group.groupSelectable ? [{
          label: group.label,
          value: group.value
        }] : []), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((group === null || group === void 0 ? void 0 : group.items) || [])).find(findWithString(itemValue)) : null;
      });
    }).filter(function (v) {
      return !!v;
    });
    return currentValue && items.length > 0 ? {
      category: category,
      chips: items.map(function (item) {
        return {
          name: item.label
        };
      })
    } : null;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "chipFor", function (filter, currentValue) {
    var categoryConfig = _this.filterConfig.getCategoryForLabel(filter);

    var _ref = categoryConfig ? categoryConfig : {
      label: filter,
      type: null
    },
        label = _ref.label,
        type = _ref.type;

    switch (type) {
      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__.conditionalFilterType.text:
        return _this.textFilterChip(label, currentValue);

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__.conditionalFilterType.checkbox:
        return _this.checkboxFilterChip(label, currentValue);

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__.conditionalFilterType.radio:
        return _this.radioFilterChip(label, currentValue);

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__.conditionalFilterType.group:
        return _this.groupFilterChip(label, currentValue, categoryConfig);

      default:
        return null;
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "chipsFor", function (filters) {
    return Object.keys(filters).map(function (filter) {
      return _this.chipFor(filter, filters[filter]);
    }).filter(function (f) {
      return !!f;
    });
  });

  this.filterConfig = filterConfig;
  this.config = this.filterConfig.config;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChipBuilder);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/FilterBuilder.js":
/*!********************************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/FilterConfigBuilder/FilterBuilder.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/conditionalFilterConstants.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Helpers */ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/Helpers.js");






var FilterBuilder = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function FilterBuilder(filterConfig) {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FilterBuilder);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "buildFilterFilterString", function (configItem, value) {
    var type = configItem.type,
        filterString = configItem.filterString;

    if (type !== 'hidden' && !value) {
      return [];
    }

    switch (type) {
      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__.conditionalFilterType.text:
        return [filterString(value)];

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__.conditionalFilterType.checkbox:
        return value.map(function (filter) {
          return filterString(filter);
        });

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_4__.conditionalFilterType.group:
        return filterString(value);

      case 'hidden':
        return filterString();

      default:
        return [];
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "combineFilterStrings", function (filterStringArray) {
    var moreThanTwo = filterStringArray.map(function (f) {
      return f.length;
    }).filter(function (fl) {
      return fl > 0;
    }).length >= 2;
    return filterStringArray.map(function (fs) {
      return fs.join(' or ');
    }).join(moreThanTwo ? ' and ' : '');
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "buildFilterString", function (filters) {
    var filterStringArray = _this.config.map(function (configItem) {
      return _this.buildFilterFilterString(configItem, filters[(0,_Helpers__WEBPACK_IMPORTED_MODULE_3__.stringToId)(configItem.label)]);
    }).filter(function (f) {
      return f.length > 0;
    });

    return _this.combineFilterStrings(filterStringArray);
  });

  this.filterConfig = filterConfig;
  this.config = this.filterConfig.config;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterBuilder);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/FilterConfigBuilder.js":
/*!**************************************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/FilterConfigBuilder/FilterConfigBuilder.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/conditionalFilterConstants.js");
/* harmony import */ var _FilterBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBuilder */ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/FilterBuilder.js");
/* harmony import */ var _ChipBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChipBuilder */ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/ChipBuilder.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Helpers */ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/Helpers.js");







function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var defaultPlaceholder = function defaultPlaceholder(label) {
  return "Filter by ".concat(label.toLowerCase());
};

var FilterConfigBuilder = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(function FilterConfigBuilder(_config) {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, FilterConfigBuilder);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "chipBuilder", null);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "filterBuilder", null);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "addConfigItem", function (item) {
    return _this.config = _this.config.filter(function (i) {
      return i.label !== item.label;
    }).concat(item);
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "getChipBuilder", function (config) {
    if (config) {
      _this.config = config;
    }

    return _this.chipBuilder = _this.chipBuilder ? _this.chipBuilder : new _ChipBuilder__WEBPACK_IMPORTED_MODULE_7__["default"](_this);
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "getFilterBuilder", function (config) {
    if (config) {
      _this.config = config;
    }

    return _this.filterBuilder = _this.filterBuilder ? _this.filterBuilder : new _FilterBuilder__WEBPACK_IMPORTED_MODULE_6__["default"](_this);
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "toTextFilterConfig", function (item, handler, value) {
    return {
      type: _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.text,
      label: item.label,
      placeholder: defaultPlaceholder(item.label),
      id: (0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label),
      filterValues: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
        value: value
      }, item.event || 'onChange', function (_event, selectedValues) {
        handler((0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label), selectedValues);
      })
    };
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "toCheckboxFilterConfig", function (item, handler, value) {
    return {
      type: _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.checkbox,
      label: item.label,
      placeholder: defaultPlaceholder(item.label),
      id: (0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label),
      filterValues: {
        value: value,
        items: item.items,
        onChange: function onChange(_event, selectedValues) {
          handler((0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label), selectedValues);
        }
      }
    };
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "toRadioFilterConfig", function (item, handler, value) {
    return {
      type: _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.radio,
      label: item.label,
      placeholder: defaultPlaceholder(item.label),
      id: (0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label),
      filterValues: {
        value: value,
        items: item.items,
        onChange: function onChange(_event, selectedValues) {
          handler((0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label), selectedValues);
        }
      }
    };
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "toGroupedFilterConfig", function (item, handler, value) {
    return {
      type: _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.group,
      label: item.label,
      id: (0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label),
      className: item.className,
      filterValues: {
        selected: value,
        onChange: function onChange(_event, selectedValues) {
          handler((0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label), selectedValues);
        },
        groups: item.items.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            type: 'checkbox',
            items: item.items.map(function (subItem) {
              return _objectSpread(_objectSpread({}, subItem), {}, {
                type: 'checkbox'
              });
            })
          });
        })
      }
    };
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "toFilterConfigItem", function (item, handler, value) {
    switch (item.type) {
      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.text:
        return _this.toTextFilterConfig(item, handler, value);

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.checkbox:
        return _this.toCheckboxFilterConfig(item, handler, value);

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.radio:
        return _this.toRadioFilterConfig(item, handler, value);

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.group:
        return _this.toGroupedFilterConfig(item, handler, value);

      default:
        return null;
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "buildConfiguration", function (handler, states) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var initConfig = arguments.length > 3 ? arguments[3] : undefined;
    return _objectSpread(_objectSpread({}, props), {}, {
      items: (initConfig || _this.config).map(function (item) {
        return _this.toFilterConfigItem(item, handler, states[(0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.label)]);
      }).filter(function (v) {
        return !!v;
      })
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "defaultValueForFilter", function (filter) {
    switch (filter.type) {
      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.text:
        return '';

      case _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.checkbox:
        return [];

      case 'hidden':
        return filter["default"] || false;

      default:
        return;
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "initialDefaultState", function () {
    var defaultStates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var initConfig = arguments.length > 1 ? arguments[1] : undefined;
    return (initConfig || _this.config).reduce(function (acc, filter) {
      var filterStateName = (0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(filter.key || filter.label);

      var state = defaultStates[filterStateName] || _this.defaultValueForFilter(filter);

      acc[filterStateName] = state ? state : undefined;
      return acc;
    }, {});
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "categoryLabelForValue", function (value) {
    var category = _this.config.filter(function (category) {
      return category.items ? category.items.map(function (item) {
        return item.value;
      }).includes(value) : false;
    })[0];

    return category ? category.label : value;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "getCategoryForLabel", function (query) {
    return _this.config.filter(function (item) {
      return (0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(item.key || item.label) === (0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(query);
    })[0] || {};
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "getItemByLabelOrValue", function (query, category) {
    var categoryConfig = _this.getCategoryForLabel(category);

    var items = categoryConfig.type !== _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.group ? categoryConfig.items : categoryConfig.items.flatMap(function (item) {
      return item.items.map(function (subItem) {
        return _objectSpread(_objectSpread({}, subItem), {}, {
          parentValue: item.value
        });
      });
    });
    var results = (items || []).filter(function (item) {
      return item.value === query || item.label === query;
    });

    if (results.length === 1) {
      return results[0];
    } else if (results.length > 1) {
      // eslint-disable-next-line no-console
      console.info("Multiple items found for ".concat(query, " in ").concat(category, "! Returning first one."));
      return results[0];
    } else {
      // eslint-disable-next-line no-console
      console.info('No item found for ' + query + ' in ', category);
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "labelForValue", function (value, category) {
    var item = _this.getItemByLabelOrValue(value, category);

    return item ? item.label : value;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "valueForLabel", function (label, category) {
    var item = _this.getItemByLabelOrValue(label, category);

    return item ? item.value : label;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "applyFilterToObjectArray", function (objects, activeFilters) {
    var filteredObjects = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(objects);

    Object.keys(activeFilters).forEach(function (filter) {
      var category = _this.getCategoryForLabel(filter);

      var value = activeFilters[filter];

      if (!category || !value) {
        return;
      }

      if (value.length > 0 || category.type === 'hidden' && typeof value === 'boolean') {
        filteredObjects = category.filter(filteredObjects, value);
      }
    });
    return filteredObjects;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "removeFilterFromFilterState", function (currentState, filter) {
    return typeof currentState === 'string' ? '' : currentState.filter(function (value) {
      return value !== filter;
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "removeFilterFromGroupFilterState", function (currentState, filter, chipItem) {
    // eslint-disable-next-line
    var _currentState$chipIte = currentState[chipItem.parentValue],
        _chipItem$value = chipItem.value,
        _remove = _currentState$chipIte[_chipItem$value],
        newGroupState = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_currentState$chipIte, [_chipItem$value].map(_toPropertyKey));

    return _objectSpread(_objectSpread({}, currentState), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, chipItem.parentValue, newGroupState));
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "removeFilterWithChip", function (chips, activeFilters) {
    var chipCategory = chips.category;
    var chipLabel = chips.chips[0].name;

    var chipItem = _this.getItemByLabelOrValue(chipLabel, chipCategory);

    var chipValue = chipItem ? chipItem.value : chipLabel;
    var stateProp = (0,_Helpers__WEBPACK_IMPORTED_MODULE_8__.stringToId)(chipCategory);
    var currentState = activeFilters[stateProp];

    var categoryConfig = _this.getCategoryForLabel(chipCategory);

    var isGroup = categoryConfig.type === _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_9__.conditionalFilterType.group;
    var newFilterState = (isGroup ? _this.removeFilterFromGroupFilterState : _this.removeFilterFromFilterState)(currentState, chipValue, chipItem);
    return _objectSpread(_objectSpread({}, activeFilters), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, stateProp, newFilterState));
  });

  this.config = _config;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterConfigBuilder);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/Helpers.js":
/*!**************************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/FilterConfigBuilder/Helpers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringToId": () => (/* binding */ stringToId)
/* harmony export */ });
var stringToId = function stringToId(string) {
  return string.split(' ').join('').toLowerCase();
};

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/useExport.js":
/*!********************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/useExport.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkAndDownload": () => (/* binding */ linkAndDownload),
/* harmony export */   "csvForItems": () => (/* binding */ csvForItems),
/* harmony export */   "jsonForItems": () => (/* binding */ jsonForItems),
/* harmony export */   "useExportWithItems": () => (/* binding */ useExportWithItems),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/Utilities/helpers.js");





var CSV_FILE_PREFIX = 'compliance-export';
var CSV_DELIMITER = ',';
var ENCODINGS = {
  csv: 'text/csv',
  json: 'application/json'
};

var filename = function filename(format) {
  return CSV_FILE_PREFIX + '-' + new Date().toISOString() + '.' + format;
};

var encoding = function encoding(format) {
  return "data:".concat(ENCODINGS[format], ";charset=utf-8");
};

var linkAndDownload = function linkAndDownload(data, filename) {
  var link = document.createElement('a');
  link.href = data;
  link.download = filename;
  link.click();
};

var textForCell = function textForCell(row, column) {
  var exportKey = column.exportKey,
      renderExport = column.renderExport;
  var cell = exportKey ? (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getProperty)(row, exportKey) : row;

  if (renderExport) {
    return renderExport(cell);
  } else {
    return cell;
  }
};

var csvForItems = function csvForItems(_ref) {
  var items = _ref.items,
      columns = _ref.columns;
  var header = columns.map(function (column) {
    return column.original || column.title;
  }).join(CSV_DELIMITER);
  var csvRows = [header].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(items.map(function (row) {
    return columns.map(function (column) {
      return "\"".concat(textForCell(row, column), "\"");
    }).join(CSV_DELIMITER);
  })));
  return encodeURI("".concat(encoding('csv'), ",").concat(csvRows.join('\n')));
};
var jsonForItems = function jsonForItems(_ref2) {
  var items = _ref2.items,
      columns = _ref2.columns;
  var result = items.map(function (row) {
    return columns.reduce(function (object, column) {
      var key = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.camelCase)(column.original || column.title);
      var value = textForCell(row, column);
      object[key] = value;
      return object;
    }, {});
  });
  return encodeURI("".concat(encoding('json'), ",").concat(JSON.stringify(result)));
};

var callCallback = function callCallback(callback) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return callback && callback.apply(void 0, args);
};

var useExport = function useExport(_ref3) {
  var exporter = _ref3.exporter,
      _ref3$columns = _ref3.columns,
      columns = _ref3$columns === void 0 ? [] : _ref3$columns,
      _ref3$isDisabled = _ref3.isDisabled,
      isDisabled = _ref3$isDisabled === void 0 ? false : _ref3$isDisabled,
      onStart = _ref3.onStart,
      onComplete = _ref3.onComplete,
      onError = _ref3.onError;
  var exportableColumns = columns.filter(function (column) {
    return column["export"] !== false && (column.exportKey || column.renderExport);
  });

  var exportWithFormat = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(format) {
      var items, formater;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              callCallback(onStart);
              _context.next = 3;
              return exporter().then(function (items) {
                callCallback(onComplete, items);
                return items;
              })["catch"](function (error) {
                return callCallback(onError, error);
              });

            case 3:
              items = _context.sent;
              formater = format === 'csv' ? csvForItems : jsonForItems;

              if (!items) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", linkAndDownload(formater({
                items: items,
                columns: exportableColumns
              }), filename(format)));

            case 9:
              console.info('No items returned for export');
              return _context.abrupt("return");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function exportWithFormat(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return {
    toolbarProps: {
      exportConfig: {
        isDisabled: isDisabled,
        onSelect: function onSelect(_, format) {
          return exportWithFormat(format);
        }
      }
    }
  };
};

var useExportWithItems = function useExportWithItems(items, columns) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var exportEnabled = options === null || options === void 0 ? void 0 : options.exportable;

  var _ref5 = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(options.exportable) === 'object' ? options.exportable : {},
      exportableColumns = _ref5.columns,
      onStart = _ref5.onStart,
      onComplete = _ref5.onComplete;

  var exportableSelectedColumns = (exportableColumns || columns).filter(function (column) {
    return columns.includes(column);
  });
  var exportProps = useExport({
    exporter: function exporter() {
      return Promise.resolve(items);
    },
    columns: exportableSelectedColumns,
    isDisabled: items.length === 0,
    onStart: onStart,
    onComplete: onComplete
  });
  return exportEnabled ? exportProps : {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useExport);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/useFilterConfig.js":
/*!**************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/useFilterConfig.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FilterConfigBuilder_FilterConfigBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilterConfigBuilder/FilterConfigBuilder */ "./src/Utilities/hooks/useTableTools/FilterConfigBuilder/FilterConfigBuilder.js");
/* harmony import */ var _useSelectedFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useSelectedFilter */ "./src/Utilities/hooks/useTableTools/useSelectedFilter.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var filterValues = function filterValues(activeFilters) {
  return Object.values(activeFilters).filter(function (value) {
    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(value) === Object) {
      return Object.values(value).length > 0;
    }

    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(value) === Array) {
      return value.length > 0;
    }

    return !!value;
  });
};

var filterConfigBuilder = new _FilterConfigBuilder_FilterConfigBuilder__WEBPACK_IMPORTED_MODULE_7__["default"]([]);

var perpareInitialActiveFilters = function perpareInitialActiveFilters(initialActiveFiltersRaw, activeFilters) {
  if (typeof initialActiveFiltersRaw === 'function') {
    return initialActiveFiltersRaw(activeFilters);
  } else {
    return initialActiveFiltersRaw;
  }
};

var useFilterConfig = function useFilterConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var filters = options.filters,
      selectedFilter = options.selectedFilter,
      onDeleteFilter = options.onDeleteFilter;
  var enableFilters = !!filters;

  var _ref = filters || {},
      _ref$filterConfig = _ref.filterConfig,
      filterConfig = _ref$filterConfig === void 0 ? [] : _ref$filterConfig,
      initialActiveFiltersRaw = _ref.activeFilters;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({}),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      activeFilters = _useState2[0],
      setActiveFilters = _useState2[1];

  var initialActiveFilters = perpareInitialActiveFilters(initialActiveFiltersRaw, activeFilters);

  var onFilterUpdate = function onFilterUpdate(filter, value) {
    setActiveFilters(function (prevFilters) {
      return _objectSpread(_objectSpread({}, prevFilters), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, filter, value));
    }); //setPage && setPage(1);
  };

  var addConfigItem = function addConfigItem(item) {
    filterConfigBuilder.addConfigItem(item);
    setActiveFilters(filterConfigBuilder.initialDefaultState(activeFilters));
  };

  var clearAllFilter = function clearAllFilter() {
    return setActiveFilters(filterConfigBuilder.initialDefaultState());
  };

  var deleteFilter = function deleteFilter(chips) {
    return setActiveFilters(filterConfigBuilder.removeFilterWithChip(chips, activeFilters));
  };

  var onFilterDelete = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(_event, chips) {
      var clearAll,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              clearAll = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
              _context.next = 3;
              return clearAll;

            case 3:
              if (!_context.sent) {
                _context.next = 7;
                break;
              }

              clearAllFilter();
              _context.next = 8;
              break;

            case 7:
              deleteFilter(chips[0]);

            case 8:
              onDeleteFilter && onDeleteFilter(chips, clearAll);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onFilterDelete(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var filter = function filter(items) {
    return filterConfigBuilder.applyFilterToObjectArray(items, activeFilters);
  };

  var _useSelectedFilter = (0,_useSelectedFilter__WEBPACK_IMPORTED_MODULE_8__["default"])({
    activeFilters: activeFilters,
    setActiveFilter: onFilterUpdate,
    selectedFilter: selectedFilter
  }),
      selectedFilterToolbarProps = _useSelectedFilter.toolbarProps,
      selectFilterItem = _useSelectedFilter.filterItem;

  var activeFilterValues = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return filterValues(activeFilters);
  }, [activeFilters]);
  var filterConfigWithSelected = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filterConfig), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectFilterItem ? [selectFilterItem] : []));
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    filterConfigBuilder.config = [];
    filterConfigWithSelected.filter(function (v) {
      return !!v;
    }).forEach(addConfigItem);
    setActiveFilters(filterConfigBuilder.initialDefaultState(initialActiveFilters || []), filterConfig);
    return function () {
      filterConfigBuilder.config = [];
    };
  }, [JSON.stringify(initialActiveFilters)]);
  return enableFilters ? {
    filter: filter,
    selectedFilterToolbarProps: selectedFilterToolbarProps,
    toolbarProps: {
      filterConfig: filterConfigBuilder.buildConfiguration(onFilterUpdate, activeFilters, {}, filterConfigWithSelected),
      activeFiltersConfig: {
        filters: filterConfigBuilder.getChipBuilder(filterConfigWithSelected).chipsFor(activeFilters),
        onDelete: onFilterDelete
      }
    },
    setActiveFilter: onFilterUpdate,
    activeFilters: activeFilters,
    activeFilterValues: activeFilterValues,
    addConfigItem: addConfigItem,
    filterConfigBuilder: filterConfigBuilder,
    filterString: function filterString() {
      return filterConfigBuilder.getFilterBuilder(filterConfigWithSelected).buildFilterString(activeFilters);
    }
  } : {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFilterConfig);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/usePaginate.js":
/*!**********************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/usePaginate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var usePaginate = function usePaginate() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$perPage = options.perPage,
      perPage = _options$perPage === void 0 ? 10 : _options$perPage;
  var enablePagination = (options === null || options === void 0 ? void 0 : options.pagination) !== false;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    perPage: perPage,
    page: 1
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      paginationState = _useState2[0],
      setPaginationState = _useState2[1];

  var setPagination = function setPagination(newState) {
    return setPaginationState(_objectSpread(_objectSpread({}, paginationState), newState));
  };

  var onSetPage = function onSetPage(_, page) {
    return setPagination(_objectSpread(_objectSpread({}, paginationState), {}, {
      page: page
    }));
  };

  var onPerPageSelect = function onPerPageSelect(_, perPage) {
    return setPagination({
      page: 1,
      perPage: perPage
    });
  };

  var paginator = function paginator(items) {
    var page = paginationState.page,
        perPage = paginationState.perPage;
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return items.slice(start, end);
  };

  var setPage = function setPage(page) {
    var nextPage = page < 0 ? paginationState.page + page : page;
    setPagination({
      page: nextPage > 0 ? nextPage : 1
    });
  };

  return enablePagination ? {
    paginator: paginator,
    setPage: setPage,
    toolbarProps: {
      pagination: _objectSpread(_objectSpread({}, paginationState), {}, {
        onSetPage: onSetPage,
        onPerPageSelect: onPerPageSelect
      })
    }
  } : {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePaginate);

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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var columnProp = function columnProp(column) {
  var _column$original, _column$sortByProp;

  return column.key || ((_column$original = column.original) === null || _column$original === void 0 ? void 0 : _column$original.toLowerCase()) || ((_column$sortByProp = column.sortByProp) === null || _column$sortByProp === void 0 ? void 0 : _column$sortByProp.toLowerCase());
};

var buildRow = function buildRow(item, columns, index) {
  return columns.map(function (column) {
    return {
      title: column.renderFunc ? column.renderFunc(undefined, undefined, item, index) : item[columnProp(column)]
    };
  });
};

var useRowsBuilder = function useRowsBuilder(items, columns) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var filteredItems = options !== null && options !== void 0 && options.filter ? options.filter(items) : items;
  var sortedItems = options !== null && options !== void 0 && options.sorter ? options.sorter(filteredItems) : filteredItems;
  var paginatedItems = options !== null && options !== void 0 && options.paginator ? options === null || options === void 0 ? void 0 : options.paginator(filteredItems) : sortedItems;
  var rows = paginatedItems.map(function (item, index) {
    return buildRow(item, columns, index);
  });
  var pagination = options !== null && options !== void 0 && options.pagination ? _objectSpread(_objectSpread({}, options.pagination), {}, {
    itemCount: filteredItems.length
  }) : undefined;
  return {
    tableProps: {
      rows: rows
    },
    toolbarProps: {
      pagination: pagination
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRowsBuilder);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/useSelectedFilter.js":
/*!****************************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/useSelectedFilter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_SelectedFilterSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/SelectedFilterSwitch */ "./src/Utilities/hooks/useTableTools/Components/SelectedFilterSwitch.js");



var useSelectedFilter = function useSelectedFilter(_ref) {
  var setActiveFilter = _ref.setActiveFilter,
      activeFilters = _ref.activeFilters,
      selectedFilter = _ref.selectedFilter;
  var enableSelectedFilter = !!selectedFilter;
  var filterKey = 'selected';
  var filterItem = {
    type: 'hidden',
    label: 'selectFilter',
    key: filterKey,
    "default": true,
    filter: function filter(items, value) {
      return items.filter(function (item) {
        var _item$rowProps;

        return (item === null || item === void 0 ? void 0 : (_item$rowProps = item.rowProps) === null || _item$rowProps === void 0 ? void 0 : _item$rowProps.selected) === value;
      });
    }
  };
  var isChecked = activeFilters[filterKey] === true;
  var selectedToggle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_SelectedFilterSwitch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setActiveFilter: setActiveFilter,
    isChecked: isChecked
  });
  return enableSelectedFilter ? {
    filterItem: filterItem,
    toolbarProps: {
      dedicatedAction: selectedToggle
    }
  } : {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSelectedFilter);

/***/ }),

/***/ "./src/Utilities/hooks/useTableTools/useTableSort.js":
/*!***********************************************************!*\
  !*** ./src/Utilities/hooks/useTableTools/useTableSort.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTableSortWithItems": () => (/* binding */ useTableSortWithItems),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./src/Utilities/helpers.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var isSortable = function isSortable(column) {
  return column.sortByProp || column.sortByFunction;
};

var addSortableTransform = function addSortableTransform(columns) {
  return columns.map(function (column) {
    return _objectSpread(_objectSpread({}, column), isSortable(column) ? {
      transforms: (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.uniq)([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])((column === null || column === void 0 ? void 0 : column.transforms) || []), [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.sortable]))
    } : {});
  });
};

var columnOffset = function columnOffset() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (typeof options.onSelect === 'function' || options.hasRadioSelect ? 1 : 0) + (typeof options.detailsComponent !== 'undefined');
};

var useTableSort = function useTableSort(columns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(options.sortBy || {
    index: 0,
    direction: 'asc'
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      sortBy = _useState2[0],
      setSortBy = _useState2[1];

  var onSort = function onSort(_, index, direction) {
    setSortBy({
      index: index,
      direction: direction
    });
  };

  var currentSortableColumn = columns[sortBy.index - columnOffset(options)];

  var sorter = function sorter(items) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.orderArrayByProp)((currentSortableColumn === null || currentSortableColumn === void 0 ? void 0 : currentSortableColumn.sortByProp) || (currentSortableColumn === null || currentSortableColumn === void 0 ? void 0 : currentSortableColumn.sortByFunction), items, sortBy.direction);
  };

  return {
    sorter: sorter,
    tableProps: {
      onSort: onSort,
      sortBy: sortBy,
      cells: addSortableTransform(columns)
    }
  };
};

var useTableSortWithItems = function useTableSortWithItems(items, columns, options) {
  var _useTableSort = useTableSort(columns, options),
      tableProps = _useTableSort.tableProps,
      sorter = _useTableSort.sorter;

  return {
    tableProps: _objectSpread(_objectSpread({}, tableProps), {}, {
      sortBy: items.length > 0 ? tableProps.sortBy : undefined
    }),
    sorter: sorter
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTableSort);

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
/* harmony import */ var _useFilterConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useFilterConfig */ "./src/Utilities/hooks/useTableTools/useFilterConfig.js");
/* harmony import */ var _usePaginate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePaginate */ "./src/Utilities/hooks/useTableTools/usePaginate.js");
/* harmony import */ var _useExport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useExport */ "./src/Utilities/hooks/useTableTools/useExport.js");
/* harmony import */ var _useTableSort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useTableSort */ "./src/Utilities/hooks/useTableTools/useTableSort.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var filteredAndSortedItems = function filteredAndSortedItems(items, filter, sorter) {
  var filtered = filter ? filter(items) : items;
  return sorter ? sorter(filtered) : filtered;
};

var useTableTools = function useTableTools() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _usePaginate = (0,_usePaginate__WEBPACK_IMPORTED_MODULE_3__["default"])(options),
      paginationToolbarProps = _usePaginate.toolbarProps,
      setPage = _usePaginate.setPage,
      paginator = _usePaginate.paginator;

  var _useFilterConfig = (0,_useFilterConfig__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread(_objectSpread({}, options), {}, {
    setPage: setPage
  })),
      conditionalFilterProps = _useFilterConfig.toolbarProps,
      filter = _useFilterConfig.filter,
      selectedFilterToolbarProps = _useFilterConfig.selectedFilterToolbarProps;

  var _useTableSortWithItem = (0,_useTableSort__WEBPACK_IMPORTED_MODULE_5__.useTableSortWithItems)(items, columns, options),
      sortableTableProps = _useTableSortWithItem.tableProps,
      sorter = _useTableSortWithItem.sorter;

  var _useExportWithItems = (0,_useExport__WEBPACK_IMPORTED_MODULE_4__.useExportWithItems)(filteredAndSortedItems(items, filter, sorter), columns, options),
      exportToolbarProps = _useExportWithItems.toolbarProps;

  var _useRowsBuilder = (0,_useRowsBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(items, columns, {
    pagination: paginationToolbarProps === null || paginationToolbarProps === void 0 ? void 0 : paginationToolbarProps.pagination,
    paginator: paginator,
    filter: filter,
    sorter: sorter
  }),
      rowBuilderToolbarProps = _useRowsBuilder.toolbarProps,
      rowBuilderTableProps = _useRowsBuilder.tableProps;

  var toolbarProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, paginationToolbarProps), conditionalFilterProps), selectedFilterToolbarProps), rowBuilderToolbarProps), exportToolbarProps);

  var tableProps = _objectSpread(_objectSpread({
    cells: columns
  }, rowBuilderTableProps), sortableTableProps);

  return {
    toolbarProps: toolbarProps,
    tableProps: tableProps
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTableTools);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_Utilities_hooks_useTableTools_Components_TasksTables_js-src_Utilities_hooks_useTableTools-2a4615.7e784ac45f4067348b6bb94d05a50695.js.map