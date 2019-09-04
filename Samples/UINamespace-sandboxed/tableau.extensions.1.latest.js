window["tableau"] =
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
/******/ 	__webpack_require__.p = "/dist-extensions/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The tableau namespace exists for organization and to avoid polluting
 * the global namespace. It contains no constructs other than sub-namespaces and the Tableau enumerations.
 */
var Tableau;
(function (Tableau) {
    /**
     * The context in which the Extensions is currently running.
     */
    var ExtensionContext;
    (function (ExtensionContext) {
        ExtensionContext["Desktop"] = "desktop";
        ExtensionContext["Server"] = "server";
    })(ExtensionContext = Tableau.ExtensionContext || (Tableau.ExtensionContext = {}));
    /**
     * The mode in which the Extensions is currently running.
     */
    var ExtensionMode;
    (function (ExtensionMode) {
        ExtensionMode["Authoring"] = "authoring";
        ExtensionMode["Viewing"] = "viewing";
    })(ExtensionMode = Tableau.ExtensionMode || (Tableau.ExtensionMode = {}));
    var AnalyticsObjectType;
    (function (AnalyticsObjectType) {
        AnalyticsObjectType["Cluster"] = "cluster";
        AnalyticsObjectType["Forecast"] = "forecast";
        AnalyticsObjectType["TrendLine"] = "trend-line";
    })(AnalyticsObjectType = Tableau.AnalyticsObjectType || (Tableau.AnalyticsObjectType = {}));
    var ColumnType;
    (function (ColumnType) {
        ColumnType["Discrete"] = "discrete";
        ColumnType["Continuous"] = "continuous";
    })(ColumnType = Tableau.ColumnType || (Tableau.ColumnType = {}));
    /**
     * What the object represents in a dashboard.
     */
    var DashboardObjectType;
    (function (DashboardObjectType) {
        DashboardObjectType["Blank"] = "blank";
        DashboardObjectType["Worksheet"] = "worksheet";
        DashboardObjectType["QuickFilter"] = "quick-filter";
        DashboardObjectType["ParameterControl"] = "parameter-control";
        DashboardObjectType["PageFilter"] = "page-filter";
        DashboardObjectType["Legend"] = "legend";
        DashboardObjectType["Title"] = "title";
        DashboardObjectType["Text"] = "text";
        DashboardObjectType["Image"] = "image";
        DashboardObjectType["WebPage"] = "web-page";
        DashboardObjectType["Extension"] = "extension";
    })(DashboardObjectType = Tableau.DashboardObjectType || (Tableau.DashboardObjectType = {}));
    /**
     * The different types of data a value can have
     */
    var DataType;
    (function (DataType) {
        DataType["String"] = "string";
        DataType["Int"] = "int";
        DataType["Float"] = "float";
        DataType["Bool"] = "bool";
        DataType["Date"] = "date";
        DataType["DateTime"] = "date-time";
        DataType["Spatial"] = "spatial";
    })(DataType = Tableau.DataType || (Tableau.DataType = {}));
    /**
     * Valid date ranges for a relative date filter.
     */
    var DateRangeType;
    (function (DateRangeType) {
        DateRangeType["Last"] = "last";
        DateRangeType["LastN"] = "last-n";
        DateRangeType["Next"] = "next";
        DateRangeType["NextN"] = "next-n";
        DateRangeType["Current"] = "current";
        DateRangeType["ToDate"] = "to-date";
    })(DateRangeType = Tableau.DateRangeType || (Tableau.DateRangeType = {}));
    var EncodingType;
    (function (EncodingType) {
        EncodingType["Column"] = "column";
        EncodingType["Row"] = "row";
        EncodingType["Page"] = "page";
        EncodingType["Filter"] = "filter";
        EncodingType["MarksType"] = "marks-type";
        EncodingType["MeasureValues"] = "measure-values";
        EncodingType["Color"] = "color";
        EncodingType["Size"] = "size";
        EncodingType["Label"] = "label";
        EncodingType["Detail"] = "detail";
        EncodingType["Tooltip"] = "tooltip";
        EncodingType["Shape"] = "shape";
        EncodingType["Path"] = "path";
        EncodingType["Angle"] = "angle";
    })(EncodingType = Tableau.EncodingType || (Tableau.EncodingType = {}));
    /**
     * All error codes used by the Extensions API.
     */
    var ErrorCodes;
    (function (ErrorCodes) {
        /**
         * Thrown when caller attempts to execute command before initialization has completed.
         */
        ErrorCodes["APINotInitialized"] = "api-not-initialized";
        /**
         * Thrown when caller attempts to execute command while extension is not visible.
         */
        ErrorCodes["VisibilityError"] = "visibility-error";
        /**
         * Only one dialog can be opened at time with the UI namespace functionality.
         */
        ErrorCodes["DialogAlreadyOpen"] = "dialog-already-open";
        /**
         * The open dialog was closed by the user.
         */
        ErrorCodes["DialogClosedByUser"] = "dialog-closed-by-user";
        /**
         * An error occurred within the Tableau Extensions API. Contact Tableau Support.
         */
        ErrorCodes["InternalError"] = "internal-error";
        /**
         * A dialog must start on the same domain as the parent extenion.
         */
        ErrorCodes["InvalidDomainDialog"] = "invalid-dialog-domain";
        /**
         * A parameter is not the correct data type or format. The name of the parameter is specified in the Error.message field.
         */
        ErrorCodes["InvalidParameter"] = "invalid-parameter";
        /**
         * Can occur if the extension interacts with a filter that has been removed from the worksheet.
         */
        ErrorCodes["MissingFilter"] = "missing-filter";
        /**
         * Can occur if the extension interacts with a parameter that has been removed from the worksheet.
         */
        ErrorCodes["MissingParameter"] = "missing-parameter";
        /**
         * Internal Server Error
         */
        ErrorCodes["ServerError"] = "server-error";
        /**
         * Developer cannot save settings while another save is still in progress.
         */
        ErrorCodes["SettingSaveInProgress"] = "setting-save-in-progress";
        /**
         * An unknown event name was specified in the call to `addEventListener` or `removeEventListener`.
         */
        ErrorCodes["UnsupportedEventName"] = "unsupported-event-name";
        /**
         * A method was used for a type of data source that doesn't support that method (see getActiveTablesAsync for an example)
         */
        ErrorCodes["UnsupportedMethodForDataSourceType"] = "unsupported-method-for-data-source-type";
    })(ErrorCodes = Tableau.ErrorCodes || (Tableau.ErrorCodes = {}));
    /**
     *  Type of aggregation on a field.
     */
    var FieldAggregationType;
    (function (FieldAggregationType) {
        FieldAggregationType["Sum"] = "sum";
        FieldAggregationType["Avg"] = "avg";
        FieldAggregationType["Min"] = "min";
        FieldAggregationType["Max"] = "max";
        FieldAggregationType["Stdev"] = "stdev";
        FieldAggregationType["Stdevp"] = "stdevp";
        FieldAggregationType["Var"] = "var";
        FieldAggregationType["Varp"] = "varp";
        FieldAggregationType["Count"] = "count";
        FieldAggregationType["Countd"] = "countd";
        FieldAggregationType["Median"] = "median";
        FieldAggregationType["Attr"] = "attr";
        FieldAggregationType["None"] = "none";
        FieldAggregationType["Year"] = "year";
        FieldAggregationType["Qtr"] = "qtr";
        FieldAggregationType["Month"] = "month";
        FieldAggregationType["Day"] = "day";
        FieldAggregationType["Hour"] = "hour";
        FieldAggregationType["Minute"] = "minute";
        FieldAggregationType["Second"] = "second";
        FieldAggregationType["Week"] = "week";
        FieldAggregationType["Weekday"] = "weekday";
        FieldAggregationType["MonthYear"] = "month-year";
        FieldAggregationType["Mdy"] = "mdy";
        FieldAggregationType["End"] = "end";
        FieldAggregationType["TruncYear"] = "trunc-year";
        FieldAggregationType["TruncQtr"] = "trunc-qtr";
        FieldAggregationType["TruncMonth"] = "trunc-month";
        FieldAggregationType["TruncWeek"] = "trunc-week";
        FieldAggregationType["TruncDay"] = "trunc-day";
        FieldAggregationType["TruncHour"] = "trunc-hour";
        FieldAggregationType["TruncMinute"] = "trunc-minute";
        FieldAggregationType["TruncSecond"] = "trunc-second";
        FieldAggregationType["Quart1"] = "quart1";
        FieldAggregationType["Quart3"] = "quart3";
        FieldAggregationType["Skewness"] = "skewness";
        FieldAggregationType["Kurtosis"] = "kurtosis";
        FieldAggregationType["InOut"] = "in-out";
        FieldAggregationType["User"] = "user";
    })(FieldAggregationType = Tableau.FieldAggregationType || (Tableau.FieldAggregationType = {}));
    /**
     * Role of a field.
     */
    var FieldRoleType;
    (function (FieldRoleType) {
        FieldRoleType["Dimension"] = "dimension";
        FieldRoleType["Measure"] = "measure";
        FieldRoleType["Unknown"] = "unknown";
    })(FieldRoleType = Tableau.FieldRoleType || (Tableau.FieldRoleType = {}));
    /**
     * An enumeration of the valid types of filters that can be applied.
     */
    var FilterType;
    (function (FilterType) {
        FilterType["Categorical"] = "categorical";
        FilterType["Range"] = "range";
        FilterType["Hierarchical"] = "hierarchical";
        FilterType["RelativeDate"] = "relative-date";
    })(FilterType = Tableau.FilterType || (Tableau.FilterType = {}));
    /**
     * The different update types for applying filter
     */
    var FilterUpdateType;
    (function (FilterUpdateType) {
        FilterUpdateType["Add"] = "add";
        FilterUpdateType["All"] = "all";
        FilterUpdateType["Replace"] = "replace";
        FilterUpdateType["Remove"] = "remove";
    })(FilterUpdateType = Tableau.FilterUpdateType || (Tableau.FilterUpdateType = {}));
    /**
     * The domain type for a filter
     */
    var FilterDomainType;
    (function (FilterDomainType) {
        /**
         * The domain values that are relevant to the specified filter
         * i.e. the domain is restricted by a previous filter
         */
        FilterDomainType["Relevant"] = "relevant";
        /**
         * list of all possible domain values from database
         */
        FilterDomainType["Database"] = "database";
    })(FilterDomainType = Tableau.FilterDomainType || (Tableau.FilterDomainType = {}));
    /**
     * The option for specifying which values to include for filtering
     * Indicates what to do with null values for a given filter or mark selection call.
     */
    var FilterNullOption;
    (function (FilterNullOption) {
        FilterNullOption["NullValues"] = "null-values";
        FilterNullOption["NonNullValues"] = "non-null-values";
        FilterNullOption["AllValues"] = "all-values";
    })(FilterNullOption = Tableau.FilterNullOption || (Tableau.FilterNullOption = {}));
    /**
     * Type of mark for a given marks card in a viz.
     */
    var MarkType;
    (function (MarkType) {
        MarkType["Bar"] = "bar";
        MarkType["Line"] = "line";
        MarkType["Area"] = "area";
        MarkType["Square"] = "square";
        MarkType["Circle"] = "circle";
        MarkType["Shape"] = "shape";
        MarkType["Text"] = "text";
        MarkType["Map"] = "map";
        MarkType["Pie"] = "pie";
        MarkType["GanttBar"] = "gantt-bar";
        MarkType["Polygon"] = "polygon";
    })(MarkType = Tableau.MarkType || (Tableau.MarkType = {}));
    /**
     * An enumeration describing the different types of allowable values.
     * This is used for restricting the domain of a parameter
     */
    var ParameterValueType;
    (function (ParameterValueType) {
        ParameterValueType["All"] = "all";
        ParameterValueType["List"] = "list";
        ParameterValueType["Range"] = "range";
    })(ParameterValueType = Tableau.ParameterValueType || (Tableau.ParameterValueType = {}));
    /**
     * Date period used in filters and in parameters.
     */
    var PeriodType;
    (function (PeriodType) {
        PeriodType["Years"] = "years";
        PeriodType["Quarters"] = "quarters";
        PeriodType["Months"] = "months";
        PeriodType["Weeks"] = "weeks";
        PeriodType["Days"] = "days";
        PeriodType["Hours"] = "hours";
        PeriodType["Minutes"] = "minutes";
        PeriodType["Seconds"] = "seconds";
    })(PeriodType = Tableau.PeriodType || (Tableau.PeriodType = {}));
    var QuickTableCalcType;
    (function (QuickTableCalcType) {
        QuickTableCalcType["RunningTotal"] = "running-total";
        QuickTableCalcType["Difference"] = "difference";
        QuickTableCalcType["PercentDifference"] = "percent-difference";
        QuickTableCalcType["PercentOfTotal"] = "percent-of-total";
        QuickTableCalcType["Rank"] = "rank";
        QuickTableCalcType["Percentile"] = "percentile";
        QuickTableCalcType["MovingAverage"] = "moving-average";
        QuickTableCalcType["YTDTotal"] = "ytd-total";
        QuickTableCalcType["CompoundGrowthRate"] = "compound-growth-rate";
        QuickTableCalcType["YearOverYearGrowth"] = "year-over-year-growth";
        QuickTableCalcType["YTDGrowth"] = "ytd-growth";
        QuickTableCalcType["Undefined"] = "undefined";
    })(QuickTableCalcType = Tableau.QuickTableCalcType || (Tableau.QuickTableCalcType = {}));
    /**
     * Enum for specifying the selection type for select marks api.
     */
    var SelectionUpdateType;
    (function (SelectionUpdateType) {
        SelectionUpdateType["Replace"] = "select-replace";
        SelectionUpdateType["Add"] = "select-add";
        SelectionUpdateType["Remove"] = "select-remove";
    })(SelectionUpdateType = Tableau.SelectionUpdateType || (Tableau.SelectionUpdateType = {}));
    /**
     * The type of sheet a [[Sheet]] object represents
     */
    var SheetType;
    (function (SheetType) {
        SheetType["Dashboard"] = "dashboard";
        SheetType["Story"] = "story";
        SheetType["Worksheet"] = "worksheet";
    })(SheetType = Tableau.SheetType || (Tableau.SheetType = {}));
    var SortDirection;
    (function (SortDirection) {
        SortDirection["Increasing"] = "increasing";
        SortDirection["Decreasing"] = "decreasing";
    })(SortDirection = Tableau.SortDirection || (Tableau.SortDirection = {}));
    /**
     * Represents the type of event that can be listened for.
     */
    var TableauEventType;
    (function (TableauEventType) {
        /** Raised when any filter has changed state. You can use this event type with [[Worksheet]] objects.*/
        TableauEventType["FilterChanged"] = "filter-changed";
        /** The selected marks on a visualization has changed. You can use this event type with [[Worksheet]] objects. */
        TableauEventType["MarkSelectionChanged"] = "mark-selection-changed";
        /** A parameter has had its value modified. You can use this event type with [[Parameter]] objects. */
        TableauEventType["ParameterChanged"] = "parameter-changed";
        /** Settings have been changed for this extension. You can use this event type with [[Settings]] objects. */
        TableauEventType["SettingsChanged"] = "settings-changed";
    })(TableauEventType = Tableau.TableauEventType || (Tableau.TableauEventType = {}));
    var TrendLineModelType;
    (function (TrendLineModelType) {
        TrendLineModelType["Linear"] = "linear";
        TrendLineModelType["Logarithmic"] = "logarithmic";
        TrendLineModelType["Exponential"] = "exponential";
        TrendLineModelType["Polynomial"] = "polynomial";
    })(TrendLineModelType = Tableau.TrendLineModelType || (Tableau.TrendLineModelType = {}));
    /**
     * Enum that represents the visibility state of a zone.
     * @since 1.1.0
     */
    var ZoneVisibilityType;
    (function (ZoneVisibilityType) {
        /** Used for turning on the visibility of a zone in the dashboard.*/
        ZoneVisibilityType["Show"] = "show";
        /** Used for turning off the visibility of a zone in the dashboard.*/
        ZoneVisibilityType["Hide"] = "hide";
    })(ZoneVisibilityType = Tableau.ZoneVisibilityType || (Tableau.ZoneVisibilityType = {}));
})(Tableau || (Tableau = {}));
module.exports = Tableau;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(54);
__webpack_require__(115);
__export(__webpack_require__(118));
__export(__webpack_require__(57));
__export(__webpack_require__(119));
__export(__webpack_require__(120));
__export(__webpack_require__(58));
__export(__webpack_require__(124));
__export(__webpack_require__(59));
// These are the exports from the messaging stuff
__export(__webpack_require__(127));
__export(__webpack_require__(40));
// Export a hardcoded version of the internal contract. This should match what's in package.json.
// Normally, we'd use some sort of webpack replacement to inject this into code, but that doesn't
// work with the module-dev-scripts and this isn't too much work.
// If you forget to keep this in sync with package.json, a test will fail so we should be ok.
exports.INTERNAL_CONTRACT_VERSION = {
    major: 1,
    minor: 12,
    fix: 0
};
// Export the version number of messaging for consumers to use.
// Be very careful making any updates to this contract which break version compatibility.
exports.MESSAGING_VERSION = {
    major: 1,
    minor: 0,
    fix: 0
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(44)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Export everything which had been previously in the api-shared module
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Dashboard_1 = __webpack_require__(113);
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(39);
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(5);
exports.TableauError = TableauError_1.TableauError;
var ApiVersion_1 = __webpack_require__(56);
exports.ApiVersion = ApiVersion_1.ApiVersion;
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(61);
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(42);
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(130);
exports.DashboardImpl = DashboardImpl_1.DashboardImpl;
var ServiceImplBase_1 = __webpack_require__(12);
exports.ServiceImplBase = ServiceImplBase_1.ServiceImplBase;
var ErrorHelpers_1 = __webpack_require__(8);
exports.ErrorHelpers = ErrorHelpers_1.ErrorHelpers;
__export(__webpack_require__(141));
__export(__webpack_require__(143));
__export(__webpack_require__(7));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Custom error class that extends the default JavaScript Error object.
 * This allows us to provide a field with a specific error code
 * so that developers can more easily programmatically respond
 * to error scenarios.
 */
var TableauError = /** @class */ (function (_super) {
    __extends(TableauError, _super);
    function TableauError(_errorCode, message) {
        var _this = _super.call(this, _errorCode + ": " + message) || this;
        _this._errorCode = _errorCode;
        /*tslint:disable-next-line */
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Error inheritance does not work propertly when compiling to ES5, this is a workaround to force
        // the proto chain to be built correctly.  See the github link above for details.
        Object.setPrototypeOf(_this, TableauError.prototype);
        return _this;
    }
    Object.defineProperty(TableauError.prototype, "errorCode", {
        get: function () {
            return this._errorCode;
        },
        enumerable: true,
        configurable: true
    });
    return TableauError;
}(Error));
exports.TableauError = TableauError;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(5);
var ServiceRegistryImpl = /** @class */ (function () {
    function ServiceRegistryImpl() {
        this._services = {};
    }
    ServiceRegistryImpl.prototype.registerService = function (service) {
        this._services[service.serviceName] = service;
    };
    ServiceRegistryImpl.prototype.getService = function (serviceName) {
        if (!this._services.hasOwnProperty(serviceName)) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, "Service not registered: " + serviceName);
        }
        return this._services[serviceName];
    };
    return ServiceRegistryImpl;
}());
/**
 * static class used for getting access to the single instance
 * of the ApiServiceRegistry
 */
var ApiServiceRegistry = /** @class */ (function () {
    // Private to avoid anyone constructing this
    function ApiServiceRegistry() {
    }
    Object.defineProperty(ApiServiceRegistry, "instance", {
        /**
         * Gets the singleton instance of the ServiceRegistry
         */
        get: function () {
            if (!window.__tableauApiServiceRegistry) {
                ApiServiceRegistry.setInstance(new ServiceRegistryImpl());
            }
            if (!window.__tableauApiServiceRegistry) {
                throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, 'Service registry failed');
            }
            return window.__tableauApiServiceRegistry;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method to override the registry instance. Can be used by unit tests
     *
     * @param {ServiceRegistry} serviceRegistry The new registry
     */
    ApiServiceRegistry.setInstance = function (serviceRegistry) {
        window.__tableauApiServiceRegistry = serviceRegistry;
    };
    return ApiServiceRegistry;
}());
exports.ApiServiceRegistry = ApiServiceRegistry;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var Param_1 = __webpack_require__(23);
var TableauError_1 = __webpack_require__(5);
/**
 * This class is used to construct common errors throughout the external
 * projects (api-shared, extensions-api, etc.).  It has some duplication with
 * the ErrorHelpers class in api-core, but is separate due to the need to throw
 * an external TableauError vs. an InternalTableauError.
 */
var ErrorHelpers = /** @class */ (function () {
    function ErrorHelpers() {
    }
    /**
     * Throws with code InternalError.
     *
     * @param apiName name of api that was called.
     */
    ErrorHelpers.apiNotImplemented = function (apiName) {
        return new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, apiName + " API not yet implemented.");
    };
    /**
     * Throws an internal error if argument is null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyInternalValue = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, argumentValue + " is invalid value for: " + argumentName);
        }
    };
    /**
     * Throws an InvalidParameter error if argument is null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyParameter = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
        }
    };
    /**
     * Throws an InvalidParameter error if argument is empty string, null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyStringParameter = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined || argumentValue === '') {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
        }
    };
    /**
     * Verifies passed value is a valid value for that enum.
     * Throws an InvalidParameter error if the enum value is not valid.
     *
     * String enums are {string : string} dictionaries which are not reverse mappable
     * This is an ugly workaround
     *
     * @param enumValue value to verify
     * @param enumType enum to verify against
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyEnumValue = function (enumValue, enumType) {
        var isValid = false;
        Object.keys(enumType).forEach(function (enumKey) {
            if (enumType[enumKey] === enumValue.toString()) {
                isValid = true;
            }
        });
        if (!isValid) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, enumValue + " is invalid value for enum: " + enumType);
        }
    };
    /**
     * Verifies the params min and max for applying range filter.
     * Throws with error code InvalidParameter if range is invalid.
     *
     * @param min range min
     * @param max range max
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyRangeParamType = function (min, max) {
        if (!min && !max) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, at least one of min or max is required.');
        }
        if (min && !Param_1.Param.isTypeNumber(min) && !Param_1.Param.isTypeDate(min)) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter min.');
        }
        if (max && !Param_1.Param.isTypeNumber(max) && !Param_1.Param.isTypeDate(max)) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter max.');
        }
        if (min && max && typeof (min) !== typeof (max)) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, parameters min and max should be of the same type.');
        }
    };
    /**
     * Verifies that the zoneId is present in the current dashboard and is Floating.
     * Throws with error code InvalidParameter if either condition is false.
     *
     * @param dashboardObjects An array of all DashboardObjects in the current dashboard
     * @param zoneID ZoneId to be validated
     */
    ErrorHelpers.verifyZoneIsValid = function (dashboardObjects, zoneID) {
        var isValid = dashboardObjects.some(function (dashboardObject) {
            return dashboardObject.id === zoneID && dashboardObject.isFloating;
        });
        if (!isValid) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, "Unexpected invalid param value, Zone Id: " + zoneID + " is either not present or is a fixed zone.");
        }
    };
    return ErrorHelpers;
}());
exports.ErrorHelpers = ErrorHelpers;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(6);
var hide = __webpack_require__(13);
var redefine = __webpack_require__(16);
var ctx = __webpack_require__(18);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var TableauError_1 = __webpack_require__(5);
var EnumConverter_1 = __webpack_require__(41);
/**
 * Each ServceImpl should extend this base class for the sake of
 * proper error handling.  This base handles the conversion
 * from internal errors to external errors that we throw to developers
 */
var ServiceImplBase = /** @class */ (function () {
    function ServiceImplBase(_dispatcher) {
        this._dispatcher = _dispatcher;
    }
    ServiceImplBase.prototype.execute = function (verb, params) {
        return this._dispatcher.execute(verb, params).catch(function (error) {
            // Any internal error that comes from the dispatcher should be converted
            // to an external error using the enum mapper for error codes.
            var internalError = error;
            var externalErrorCode = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.errorCode.convert(internalError.errorCode, EnumConverter_1.ShouldThrow.No);
            throw new TableauError_1.TableauError(externalErrorCode, internalError.message);
        });
    };
    return ServiceImplBase;
}());
exports.ServiceImplBase = ServiceImplBase;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(20);
var createDesc = __webpack_require__(45);
module.exports = __webpack_require__(17) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var EnumConverter_1 = __webpack_require__(41);
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the internal-api-contract to the enums used
 * in the external-api-contract, which developers code against.
 */
var InternalToExternalEnumMappings = /** @class */ (function () {
    function InternalToExternalEnumMappings() {
    }
    InternalToExternalEnumMappings.extensionContext = new EnumConverter_1.EnumConverter((_a = {},
        _a[api_internal_contract_js_1.ExtensionContext.Desktop] = Tableau_1.ExtensionContext.Desktop,
        _a[api_internal_contract_js_1.ExtensionContext.Server] = Tableau_1.ExtensionContext.Server,
        _a));
    InternalToExternalEnumMappings.extensionMode = new EnumConverter_1.EnumConverter((_b = {},
        _b[api_internal_contract_js_1.ExtensionMode.Authoring] = Tableau_1.ExtensionMode.Authoring,
        _b[api_internal_contract_js_1.ExtensionMode.Viewing] = Tableau_1.ExtensionMode.Viewing,
        _b));
    InternalToExternalEnumMappings.columnType = new EnumConverter_1.EnumConverter((_c = {},
        _c[api_internal_contract_js_1.ColumnType.Continuous] = Tableau_1.ColumnType.Continuous,
        _c[api_internal_contract_js_1.ColumnType.Discrete] = Tableau_1.ColumnType.Discrete,
        _c));
    InternalToExternalEnumMappings.fieldAggregationType = new EnumConverter_1.EnumConverter((_d = {},
        _d[api_internal_contract_js_1.FieldAggregationType.Attr] = Tableau_1.FieldAggregationType.Attr,
        _d[api_internal_contract_js_1.FieldAggregationType.Avg] = Tableau_1.FieldAggregationType.Avg,
        _d[api_internal_contract_js_1.FieldAggregationType.Count] = Tableau_1.FieldAggregationType.Count,
        _d[api_internal_contract_js_1.FieldAggregationType.Countd] = Tableau_1.FieldAggregationType.Countd,
        _d[api_internal_contract_js_1.FieldAggregationType.Day] = Tableau_1.FieldAggregationType.Day,
        _d[api_internal_contract_js_1.FieldAggregationType.End] = Tableau_1.FieldAggregationType.End,
        _d[api_internal_contract_js_1.FieldAggregationType.Hour] = Tableau_1.FieldAggregationType.Hour,
        _d[api_internal_contract_js_1.FieldAggregationType.InOut] = Tableau_1.FieldAggregationType.InOut,
        _d[api_internal_contract_js_1.FieldAggregationType.Kurtosis] = Tableau_1.FieldAggregationType.Kurtosis,
        _d[api_internal_contract_js_1.FieldAggregationType.Max] = Tableau_1.FieldAggregationType.Max,
        _d[api_internal_contract_js_1.FieldAggregationType.Mdy] = Tableau_1.FieldAggregationType.Mdy,
        _d[api_internal_contract_js_1.FieldAggregationType.Median] = Tableau_1.FieldAggregationType.Median,
        _d[api_internal_contract_js_1.FieldAggregationType.Min] = Tableau_1.FieldAggregationType.Min,
        _d[api_internal_contract_js_1.FieldAggregationType.Minute] = Tableau_1.FieldAggregationType.Minute,
        _d[api_internal_contract_js_1.FieldAggregationType.MonthYear] = Tableau_1.FieldAggregationType.MonthYear,
        _d[api_internal_contract_js_1.FieldAggregationType.None] = Tableau_1.FieldAggregationType.None,
        _d[api_internal_contract_js_1.FieldAggregationType.Qtr] = Tableau_1.FieldAggregationType.Qtr,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart1] = Tableau_1.FieldAggregationType.Quart1,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart3] = Tableau_1.FieldAggregationType.Quart3,
        _d[api_internal_contract_js_1.FieldAggregationType.Second] = Tableau_1.FieldAggregationType.Second,
        _d[api_internal_contract_js_1.FieldAggregationType.Skewness] = Tableau_1.FieldAggregationType.Skewness,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdev] = Tableau_1.FieldAggregationType.Stdev,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdevp] = Tableau_1.FieldAggregationType.Stdevp,
        _d[api_internal_contract_js_1.FieldAggregationType.Sum] = Tableau_1.FieldAggregationType.Sum,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncDay] = Tableau_1.FieldAggregationType.TruncDay,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncHour] = Tableau_1.FieldAggregationType.TruncHour,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMinute] = Tableau_1.FieldAggregationType.TruncMinute,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMonth] = Tableau_1.FieldAggregationType.TruncMonth,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncQtr] = Tableau_1.FieldAggregationType.TruncQtr,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncSecond] = Tableau_1.FieldAggregationType.TruncSecond,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncWeek] = Tableau_1.FieldAggregationType.TruncWeek,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncYear] = Tableau_1.FieldAggregationType.TruncYear,
        _d[api_internal_contract_js_1.FieldAggregationType.User] = Tableau_1.FieldAggregationType.User,
        _d[api_internal_contract_js_1.FieldAggregationType.Var] = Tableau_1.FieldAggregationType.Var,
        _d[api_internal_contract_js_1.FieldAggregationType.Varp] = Tableau_1.FieldAggregationType.Varp,
        _d[api_internal_contract_js_1.FieldAggregationType.Week] = Tableau_1.FieldAggregationType.Week,
        _d[api_internal_contract_js_1.FieldAggregationType.Weekday] = Tableau_1.FieldAggregationType.Weekday,
        _d[api_internal_contract_js_1.FieldAggregationType.Year] = Tableau_1.FieldAggregationType.Year,
        _d));
    InternalToExternalEnumMappings.fieldRoleType = new EnumConverter_1.EnumConverter((_e = {},
        _e[api_internal_contract_js_1.FieldRoleType.Dimension] = Tableau_1.FieldRoleType.Dimension,
        _e[api_internal_contract_js_1.FieldRoleType.Measure] = Tableau_1.FieldRoleType.Measure,
        _e[api_internal_contract_js_1.FieldRoleType.Unknown] = Tableau_1.FieldRoleType.Unknown,
        _e));
    InternalToExternalEnumMappings.sheetType = new EnumConverter_1.EnumConverter((_f = {},
        _f[api_internal_contract_js_1.SheetType.Dashboard] = Tableau_1.SheetType.Dashboard,
        _f[api_internal_contract_js_1.SheetType.Story] = Tableau_1.SheetType.Story,
        _f[api_internal_contract_js_1.SheetType.Worksheet] = Tableau_1.SheetType.Worksheet,
        _f));
    InternalToExternalEnumMappings.dashboardObjectType = new EnumConverter_1.EnumConverter((_g = {},
        _g[api_internal_contract_js_1.DashboardObjectType.Extension] = Tableau_1.DashboardObjectType.Extension,
        _g[api_internal_contract_js_1.DashboardObjectType.Blank] = Tableau_1.DashboardObjectType.Blank,
        _g[api_internal_contract_js_1.DashboardObjectType.Image] = Tableau_1.DashboardObjectType.Image,
        _g[api_internal_contract_js_1.DashboardObjectType.Legend] = Tableau_1.DashboardObjectType.Legend,
        _g[api_internal_contract_js_1.DashboardObjectType.PageFilter] = Tableau_1.DashboardObjectType.PageFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.ParameterControl] = Tableau_1.DashboardObjectType.ParameterControl,
        _g[api_internal_contract_js_1.DashboardObjectType.QuickFilter] = Tableau_1.DashboardObjectType.QuickFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.Text] = Tableau_1.DashboardObjectType.Text,
        _g[api_internal_contract_js_1.DashboardObjectType.Title] = Tableau_1.DashboardObjectType.Title,
        _g[api_internal_contract_js_1.DashboardObjectType.WebPage] = Tableau_1.DashboardObjectType.WebPage,
        _g[api_internal_contract_js_1.DashboardObjectType.Worksheet] = Tableau_1.DashboardObjectType.Worksheet,
        _g));
    InternalToExternalEnumMappings.dataType = new EnumConverter_1.EnumConverter((_h = {},
        _h[api_internal_contract_js_1.DataType.Bool] = Tableau_1.DataType.Bool,
        _h[api_internal_contract_js_1.DataType.Date] = Tableau_1.DataType.Date,
        _h[api_internal_contract_js_1.DataType.DateTime] = Tableau_1.DataType.DateTime,
        _h[api_internal_contract_js_1.DataType.Float] = Tableau_1.DataType.Float,
        _h[api_internal_contract_js_1.DataType.Int] = Tableau_1.DataType.Int,
        _h[api_internal_contract_js_1.DataType.String] = Tableau_1.DataType.String,
        _h));
    InternalToExternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_j = {},
        _j[api_internal_contract_js_1.FilterUpdateType.Add] = Tableau_1.FilterUpdateType.Add,
        _j[api_internal_contract_js_1.FilterUpdateType.All] = Tableau_1.FilterUpdateType.All,
        _j[api_internal_contract_js_1.FilterUpdateType.Remove] = Tableau_1.FilterUpdateType.Remove,
        _j[api_internal_contract_js_1.FilterUpdateType.Replace] = Tableau_1.FilterUpdateType.Replace,
        _j));
    InternalToExternalEnumMappings.allowableValues = new EnumConverter_1.EnumConverter((_k = {},
        _k[api_internal_contract_js_1.DomainRestrictionType.All] = Tableau_1.ParameterValueType.All,
        _k[api_internal_contract_js_1.DomainRestrictionType.List] = Tableau_1.ParameterValueType.List,
        _k[api_internal_contract_js_1.DomainRestrictionType.Range] = Tableau_1.ParameterValueType.Range,
        _k));
    InternalToExternalEnumMappings.dateStepPeriod = new EnumConverter_1.EnumConverter((_l = {},
        _l[api_internal_contract_js_1.DateStepPeriod.Years] = Tableau_1.PeriodType.Years,
        _l[api_internal_contract_js_1.DateStepPeriod.Quarters] = Tableau_1.PeriodType.Quarters,
        _l[api_internal_contract_js_1.DateStepPeriod.Months] = Tableau_1.PeriodType.Months,
        _l[api_internal_contract_js_1.DateStepPeriod.Weeks] = Tableau_1.PeriodType.Weeks,
        _l[api_internal_contract_js_1.DateStepPeriod.Days] = Tableau_1.PeriodType.Days,
        _l[api_internal_contract_js_1.DateStepPeriod.Hours] = Tableau_1.PeriodType.Hours,
        _l[api_internal_contract_js_1.DateStepPeriod.Minutes] = Tableau_1.PeriodType.Minutes,
        _l[api_internal_contract_js_1.DateStepPeriod.Seconds] = Tableau_1.PeriodType.Seconds,
        _l));
    InternalToExternalEnumMappings.dateRangeType = new EnumConverter_1.EnumConverter((_m = {},
        _m[api_internal_contract_js_1.DateRangeType.Current] = Tableau_1.DateRangeType.Current,
        _m[api_internal_contract_js_1.DateRangeType.Last] = Tableau_1.DateRangeType.Last,
        _m[api_internal_contract_js_1.DateRangeType.LastN] = Tableau_1.DateRangeType.LastN,
        _m[api_internal_contract_js_1.DateRangeType.Next] = Tableau_1.DateRangeType.Next,
        _m[api_internal_contract_js_1.DateRangeType.NextN] = Tableau_1.DateRangeType.NextN,
        _m[api_internal_contract_js_1.DateRangeType.ToDate] = Tableau_1.DateRangeType.ToDate,
        _m));
    InternalToExternalEnumMappings.errorCode = new EnumConverter_1.EnumConverter((_o = {},
        _o[api_internal_contract_js_1.ErrorCodes.INITIALIZATION_ERROR] = Tableau_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.INTERNAL_ERROR] = Tableau_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_ENUM_MAPPING] = Tableau_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_PARAMETER] = Tableau_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PERMISSION_DENIED] = Tableau_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PRES_MODEL_PARSING_ERROR] = Tableau_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.UNKNOWN_VERB_ID] = Tableau_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.VERSION_NOT_CONFIGURED] = Tableau_1.ErrorCodes.APINotInitialized,
        _o[api_internal_contract_js_1.ErrorCodes.VISIBILITY_ERROR] = Tableau_1.ErrorCodes.VisibilityError,
        _o), Tableau_1.ErrorCodes.InternalError);
    InternalToExternalEnumMappings.filterType = new EnumConverter_1.EnumConverter((_p = {},
        _p[api_internal_contract_js_1.FilterType.Categorical] = Tableau_1.FilterType.Categorical,
        _p[api_internal_contract_js_1.FilterType.Range] = Tableau_1.FilterType.Range,
        _p[api_internal_contract_js_1.FilterType.RelativeDate] = Tableau_1.FilterType.RelativeDate,
        _p[api_internal_contract_js_1.FilterType.Hierarchical] = Tableau_1.FilterType.Hierarchical,
        _p));
    return InternalToExternalEnumMappings;
}());
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings;
/* tslint:enable:typedef */


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(13);
var has = __webpack_require__(21);
var SRC = __webpack_require__(26)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(6).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(27)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(74);
var toPrimitive = __webpack_require__(75);
var dP = Object.defineProperty;

exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(5);
var Param = /** @class */ (function () {
    function Param() {
    }
    /**
     * serializes the date into the format that the server expects.
     * @param date the date to serialize
     */
    Param.serializeDateForPlatform = function (date) {
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var sec = date.getUTCSeconds();
        return year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + sec;
    };
    Param.serializeBooleanForPlatform = function (bool) {
        return bool ? 'true' : 'false';
    };
    Param.serializeNumberForPlatform = function (num) {
        return num.toString(10);
    };
    /**
     * Verifies the input is a number
     */
    /* tslint:disable:no-any */
    Param.isTypeNumber = function (input) {
        return typeof (input) === 'number' || input instanceof Number;
    };
    /* tslint:enable:no-any */
    /**
     * Verifies the input is a Date
     */
    /* tslint:disable:no-any */
    Param.isTypeDate = function (input) {
        return input instanceof Date;
    };
    /* tslint:enable:no-any */
    /* tslint:disable-next-line:no-any */
    Param.isTypeString = function (input) {
        return typeof (input) === 'string' || input instanceof String;
    };
    /* tslint:disable-next-line:no-any */
    Param.isTypeBool = function (input) {
        return typeof (input) === 'boolean' || input instanceof Boolean;
    };
    /* tslint:disable-next-line:no-any */
    Param.serializeParameterValue = function (value) {
        if (Param.isTypeNumber(value)) {
            return Param.serializeNumberForPlatform(value);
        }
        else if (Param.isTypeDate(value)) {
            return Param.serializeDateForPlatform(value);
        }
        else if (Param.isTypeBool(value)) {
            return Param.serializeBooleanForPlatform(value);
        }
        else if (Param.isTypeString(value)) {
            return value;
        }
        else {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, "Unexpected invalid value for: " + value);
        }
    };
    return Param;
}());
exports.Param = Param;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(81);
var enumBugKeys = __webpack_require__(47);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(33);
var defined = __webpack_require__(30);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(29);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(44)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(20).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(30);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(22);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(5);
/**
 * Class designed to register and unregister handlers from a user. Only those events
 * which are added via AddNewEventType will be supported by this instance
 */
var EventListenerManager = /** @class */ (function () {
    function EventListenerManager() {
        this._eventListenerManagers = {};
    }
    EventListenerManager.prototype.addEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.UnsupportedEventName, "Cannot add event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].addEventListener(handler);
    };
    EventListenerManager.prototype.removeEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.UnsupportedEventName, "Cannot remove event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].removeEventListener(handler);
    };
    EventListenerManager.prototype.addNewEventType = function (eventManager) {
        this._eventListenerManagers[eventManager.eventType] = eventManager;
    };
    return EventListenerManager;
}());
exports.EventListenerManager = EventListenerManager;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum defining the 4 different types of messages we have defined
 */
var MessageType;
(function (MessageType) {
    MessageType["Initialize"] = "initialize";
    MessageType["Notification"] = "notification";
    MessageType["Command"] = "command";
    MessageType["CommandResponse"] = "command-response";
    MessageType["Handshake"] = "v-handshake";
    MessageType["Ack"] = "v-ack";
})(MessageType = exports.MessageType || (exports.MessageType = {}));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(5);
/**
 * This class converts from a source enum value to destination enum
 * value given a mapping from source to destination when constructed.
 *
 * Note: This exact same class is defined in api-core.  Given its small
 * nature, it is not worth having in a separate project to share this between
 * api-core and api-shared.  If more utility functionality is added that is used by api-core
 * and api-shared but has no other dependecies, a utiltity project might be merited,
 * and this class could be moved.
 */
var EnumConverter = /** @class */ (function () {
    function EnumConverter(_mappings, _defaultVal) {
        this._mappings = _mappings;
        this._defaultVal = _defaultVal;
    }
    EnumConverter.prototype.convert = function (enumVal, throwIfMissing) {
        if (throwIfMissing === void 0) { throwIfMissing = ShouldThrow.Yes; }
        if (this._mappings.hasOwnProperty(enumVal)) {
            return this._mappings[enumVal];
        }
        if (this._defaultVal !== undefined && throwIfMissing !== ShouldThrow.Yes) {
            return this._defaultVal;
        }
        throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, "Enum Mapping not found for: " + enumVal);
    };
    return EnumConverter;
}());
exports.EnumConverter = EnumConverter;
var ShouldThrow;
(function (ShouldThrow) {
    ShouldThrow["Yes"] = "yes";
    ShouldThrow["No"] = "no";
})(ShouldThrow = exports.ShouldThrow || (exports.ShouldThrow = {}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class implements the SingleEventManager interface for a single type of Tableau event
 *
 * @template TEventType The Tableau event type this class specializes
 */
var SingleEventManagerImpl = /** @class */ (function () {
    function SingleEventManagerImpl(eventType) {
        this._eventType = eventType;
        this._handlers = [];
    }
    Object.defineProperty(SingleEventManagerImpl.prototype, "eventType", {
        get: function () {
            return this._eventType;
        },
        enumerable: true,
        configurable: true
    });
    SingleEventManagerImpl.prototype.addEventListener = function (handler) {
        var _this = this;
        this._handlers.push(handler);
        return function () { return _this.removeEventListener(handler); };
    };
    SingleEventManagerImpl.prototype.removeEventListener = function (handler) {
        var beforeCount = this._handlers.length;
        this._handlers = this._handlers.filter(function (h) { return h !== handler; });
        return beforeCount > this._handlers.length;
    };
    SingleEventManagerImpl.prototype.triggerEvent = function (eventGenerator) {
        for (var _i = 0, _a = this._handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            try {
                var eventModel = eventGenerator();
                handler(eventModel);
            }
            catch (e) {
                // Since this handler could be outside our control, just catch anything it throws and continue on
                continue;
            }
        }
    };
    return SingleEventManagerImpl;
}());
exports.SingleEventManagerImpl = SingleEventManagerImpl;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataTable = /** @class */ (function () {
    function DataTable(_data, _columns, _totalRowCount, _isTotalRowCountLimited, _isSummaryData, _marksInfo) {
        this._data = _data;
        this._columns = _columns;
        this._totalRowCount = _totalRowCount;
        this._isTotalRowCountLimited = _isTotalRowCountLimited;
        this._isSummaryData = _isSummaryData;
        this._marksInfo = _marksInfo;
        // TODO: get rid of this in redesign.
        this._name = _isSummaryData ? 'Summary Data Table' : 'Underlying Data Table';
    }
    Object.defineProperty(DataTable.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "marksInfo", {
        get: function () {
            return this._marksInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "totalRowCount", {
        get: function () {
            return this._totalRowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "isTotalRowCountLimited", {
        get: function () {
            return this._isTotalRowCountLimited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "isSummaryData", {
        get: function () {
            return this._isSummaryData;
        },
        enumerable: true,
        configurable: true
    });
    return DataTable;
}());
exports.DataTable = DataTable;
var MarkInfo = /** @class */ (function () {
    function MarkInfo(_type, _color, _tupleId) {
        this._type = _type;
        this._color = _color;
        this._tupleId = _tupleId;
    }
    Object.defineProperty(MarkInfo.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkInfo.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkInfo.prototype, "tupleId", {
        get: function () {
            return this._tupleId;
        },
        enumerable: true,
        configurable: true
    });
    return MarkInfo;
}());
exports.MarkInfo = MarkInfo;
var Column = /** @class */ (function () {
    function Column(_fieldName, _dataType, // TODO: this shoudl be an enum type
    _isReferenced, _index) {
        this._fieldName = _fieldName;
        this._dataType = _dataType;
        this._isReferenced = _isReferenced;
        this._index = _index;
    }
    Object.defineProperty(Column.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "dataType", {
        get: function () {
            return this._dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isReferenced", {
        get: function () {
            return this._isReferenced;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    return Column;
}());
exports.Column = Column;
var DataValue = /** @class */ (function () {
    /* tslint:disable:no-any */
    function DataValue(_value, _formattedValue) {
        this._value = _value;
        this._formattedValue = _formattedValue;
    }
    Object.defineProperty(DataValue.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataValue.prototype, "formattedValue", {
        get: function () {
            return this._formattedValue;
        },
        enumerable: true,
        configurable: true
    });
    return DataValue;
}());
exports.DataValue = DataValue;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(25) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(16);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(19);
var $iterCreate = __webpack_require__(78);
var setToStringTag = __webpack_require__(36);
var getPrototypeOf = __webpack_require__(84);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(2)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(22);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var invoke = __webpack_require__(94);
var html = __webpack_require__(48);
var cel = __webpack_require__(28);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(38);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(39);
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet(_sheetImpl) {
        var _this = _super.call(this) || this;
        _this._sheetImpl = _sheetImpl;
        return _this;
    }
    Object.defineProperty(Sheet.prototype, "name", {
        get: function () {
            return this._sheetImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "sheetType", {
        get: function () {
            return this._sheetImpl.sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "size", {
        get: function () {
            return this._sheetImpl.size;
        },
        enumerable: true,
        configurable: true
    });
    Sheet.prototype.findParameterAsync = function (parameterName) {
        return this._sheetImpl.findParameterAsync(parameterName, this);
    };
    Sheet.prototype.getParametersAsync = function () {
        return this._sheetImpl.getParametersAsync(this);
    };
    return Sheet;
}(EventListenerManager_1.EventListenerManager));
exports.Sheet = Sheet;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VersionNumber_1 = __webpack_require__(114);
/**
 * This is the singleton wrapper of VersionNumber
 */
var ApiVersion = /** @class */ (function () {
    function ApiVersion() {
    }
    Object.defineProperty(ApiVersion, "Instance", {
        /**
         * Gets the singleton instance of the version number.
         */
        get: function () {
            return ApiVersion._instance;
        },
        enumerable: true,
        configurable: true
    });
    ApiVersion.SetVersionNumber = function (numString, isAlpha) {
        ApiVersion._instance = new VersionNumber_1.VersionNumber(numString, isAlpha);
    };
    return ApiVersion;
}());
exports.ApiVersion = ApiVersion;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NotificationId;
(function (NotificationId) {
    NotificationId["SelectedMarksChanged"] = "selected-marks-changed";
    NotificationId["ParameterChanged"] = "parameter-changed";
    NotificationId["FilterChanged"] = "filter-changed";
    NotificationId["ExtensionDialogUpdate"] = "extension-dialog-update";
    NotificationId["SettingsChanged"] = "settings-changed";
    NotificationId["ContextMenuClick"] = "context-menu-click";
    NotificationId["TestConversionNotification"] = "test-conversion-notification";
})(NotificationId = exports.NotificationId || (exports.NotificationId = {}));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(121);
var IdentityVersionConverter_1 = __webpack_require__(122);
var VersionTranslations_1 = __webpack_require__(123);
/**
 * @returns true if lhs < rhs (ignoring fix number)
 * @param lhs
 * @param rhs
 */
function VersionLessThan(lhs, rhs) {
    if (lhs.major > rhs.major) {
        return false;
    }
    if (lhs.major < rhs.major) {
        return true;
    }
    return (lhs.minor < rhs.minor);
}
exports.VersionLessThan = VersionLessThan;
/**
 * @returns true if lhs == rhs (ignoring fix number)
 * @param lhs
 * @param rhs
 */
function VersionEqualTo(lhs, rhs) {
    return (lhs.major === rhs.major) && (lhs.minor === rhs.minor);
}
exports.VersionEqualTo = VersionEqualTo;
/**
 * @deprecated This function is deprecated, and will not be called from api-platform in 2019.2+.
 *
 * Creates a new InternalContractVersionConverter which has the ability to upgrade and downgrade the contract between the two versions
 * which are specified. If externalMajorVersion is greater than platformMajorVersion, an error will be thrown because
 * we won't know how to do those conversions.
 *
 * @see CreateCompatibleVersionConverter
 *
 * @param externalMajorVersion The version of the internal api which the external module is using
 * @param platformMajorVersion The version of the internal api which the platform is using
 */
function CreateVersionConverter(externalMajorVersion, platformMajorVersion) {
    // A mapping from the source version of a model -> the next version of the model. Each major
    // version bump can have an array of conversions to perform in order
    var executeUpgrades = {
        0: []
    };
    var executeDowngrades = {
        0: [],
        1: [VersionTranslations_1.DowngradeV2WorksheetNames]
    };
    var notificationDowngrades = {
        0: []
    };
    if (!Number.isInteger(externalMajorVersion) ||
        !Number.isInteger(platformMajorVersion) ||
        externalMajorVersion < 0 ||
        platformMajorVersion < 0) {
        throw new Error("Versions must be positive integers:\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    if (externalMajorVersion > platformMajorVersion) {
        throw new Error("External version must be less than or equal to platform version.\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    if (externalMajorVersion === platformMajorVersion) {
        // If we are using the exact same versions, just use the identity converter
        return new IdentityVersionConverter_1.IdentityVersionConverter();
    }
    // Walk the span between the versions we have here and collect the upgrade and downgrades necessary
    var neededExecuteUpgrades = [];
    for (var i = externalMajorVersion; i < platformMajorVersion; i++) {
        if (i in executeUpgrades) {
            neededExecuteUpgrades.push.apply(neededExecuteUpgrades, executeUpgrades[i]);
        }
    }
    // Walk the span between them backwards to get the necessary downgrades
    var neededExecuteDowngrades = [];
    var neededNotificationDowngrades = [];
    for (var i = platformMajorVersion - 1; i >= externalMajorVersion; i--) {
        if (i in executeDowngrades) {
            neededExecuteDowngrades.push.apply(neededExecuteDowngrades, executeDowngrades[i]);
        }
        if (i in notificationDowngrades) {
            neededNotificationDowngrades.push.apply(neededNotificationDowngrades, notificationDowngrades[i]);
        }
    }
    return new StackingVersionConverter_1.StackingVersionConverter(externalMajorVersion, platformMajorVersion, neededExecuteUpgrades, neededExecuteDowngrades, neededNotificationDowngrades);
}
exports.CreateVersionConverter = CreateVersionConverter;
// A mapping from an older client version of internal-contract to the current platform version of this contract.
// Each version bump can have an array of translations to perform in order. Notice that this is
// different than the major upgrades/downgrades above because it handles both major and minor version changes.
// Also please note: downgradeExecuteCall is handled on the client/external side rather than platform side.
// When updating the major or minor version of our internal-contract, you will need to update these data structures.
// * If there are translations to add, add them to the version to "upgrade from" or "downgrade to".
exports.ExecuteMinorUpgrades = {
    1: {
        9: [],
    }
};
exports.ExecuteMinorDowngrades = {
    1: {
        9: [],
    }
};
exports.NotificationMinorDowngrades = {
    1: {
        9: [],
        10: [VersionTranslations_1.DowngradeFlipboardZoneID]
    }
};
/**
 * Creates a new InternalContractVersionConverter which has the ability to upgrade and downgrade the contract between the two versions
 * which are specified. If externalMajorVersion is greater than platformMajorVersion, an error will be thrown because
 * we won't know how to do those conversions. As compared to CreateVersionConverter, this converter can also handle
 * minor updates, with upgrade/downgrade for both major and minor updates.
 *
 * @param externalVersion VersionNumber of the internal api which the external module is using
 * @param platformVersion VersionNumber of the internal api which the platform is using
 */
function CreateCompatibleVersionConverter(externalVersion, platformVersion) {
    return CreateCompatibleVersionConverterWithTranslators(externalVersion, platformVersion, exports.ExecuteMinorUpgrades, exports.ExecuteMinorDowngrades, exports.NotificationMinorDowngrades);
}
exports.CreateCompatibleVersionConverter = CreateCompatibleVersionConverter;
/**
 * Implementation of CreateCompatibleVersionConverter. This function takes the upgrade, downgrade, and
 * notification arrays so that all the logic can be tested.
 *
 * @param externalVersion VersionNumber of the internal api which the external module is using
 * @param platformVersion VersionNumber of the internal api which the platform is using
 * @param upgrades MajorMinorTranslators for upgrades
 * @param downgrades MajorMinorTranslators for downgrades
 * @param notificationDowngrades MajorMinorTranslators for notification downgrades
 */
function CreateCompatibleVersionConverterWithTranslators(externalVersion, platformVersion, upgrades, downgrades, notificationDowngrades) {
    var externalMajorVersion = externalVersion.major;
    var externalMinorVersion = externalVersion.minor;
    var platformMajorVersion = platformVersion.major;
    if (externalMajorVersion > platformMajorVersion) {
        throw new Error("External version must be less than or equal to platform version.\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    // If we are using the exact same versions (major.minor), just use the identity converter
    if (VersionEqualTo(externalVersion, platformVersion)) {
        return new IdentityVersionConverter_1.IdentityVersionConverter();
    }
    // Walk the span between the versions we have here and collect the upgrade and downgrades necessary
    var neededExecuteUpgrades = GetNeededTranslations(externalMajorVersion, platformMajorVersion, externalMinorVersion, upgrades);
    var neededExecuteDowngrades = GetNeededTranslations(externalMajorVersion, platformMajorVersion, externalMinorVersion, downgrades);
    var neededNotificationDowngrades = GetNeededTranslations(externalMajorVersion, platformMajorVersion, externalMinorVersion, notificationDowngrades);
    // We want to apply the downgrades in reverse order in case of dependencies between them
    neededExecuteDowngrades.reverse();
    neededNotificationDowngrades.reverse();
    return StackingVersionConverter_1.StackingVersionConverter.fromData(externalVersion, platformVersion, neededExecuteUpgrades, neededExecuteDowngrades, neededNotificationDowngrades);
}
exports.CreateCompatibleVersionConverterWithTranslators = CreateCompatibleVersionConverterWithTranslators;
function GetNeededTranslations(externalMajorVersion, platformMajorVersion, externalMinorVersion, majorMinorTranslators) {
    var neededTranslations = [];
    for (var major = externalMajorVersion; major <= platformMajorVersion; major++) {
        if (major in majorMinorTranslators) {
            var start = (major === externalMajorVersion) ? externalMinorVersion : 0;
            var maximumMinorVersion = GetMaximumMinorIndex(Object.keys(majorMinorTranslators[major]));
            for (var minor = start; minor <= maximumMinorVersion; minor++) {
                if (minor in majorMinorTranslators[major]) {
                    neededTranslations.push.apply(neededTranslations, majorMinorTranslators[major][minor]);
                }
            }
        }
    }
    return neededTranslations;
}
function GetMaximumMinorIndex(minorVersions) {
    return minorVersions.map(function (a) { return Number(a); }).reduce(function (a, b) { return a > b ? a : b; });
}
exports.GetMaximumMinorIndex = GetMaximumMinorIndex;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * This version converter doesn't actually do anything but is useful for testing or when we have
 * a matching platform and external version number
*/
var ExternalIdentityVersionConverter = /** @class */ (function () {
    function ExternalIdentityVersionConverter() {
    }
    ExternalIdentityVersionConverter.prototype.downgradeExecuteCall = function (verb, parameters) {
        return {
            verb: verb,
            parameters: parameters
        };
    };
    ExternalIdentityVersionConverter.prototype.upgradeExecuteReturn = function (executeResponse) {
        return executeResponse;
    };
    ExternalIdentityVersionConverter.prototype.upgradeNotification = function (notification) {
        return notification;
    };
    return ExternalIdentityVersionConverter;
}());
exports.ExternalIdentityVersionConverter = ExternalIdentityVersionConverter;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

(function () {
  var validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

  function gen(count) {
    var out = "";
    for (var i=0; i<count; i++) {
      out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return out;
  }

  function Guid(guid) {
    if (!guid) throw new TypeError("Invalid argument; `value` has no value.");
      
    this.value = Guid.EMPTY;
    
    if (guid && guid instanceof Guid) {
      this.value = guid.toString();

    } else if (guid && Object.prototype.toString.call(guid) === "[object String]" && Guid.isGuid(guid)) {
      this.value = guid;
    }
    
    this.equals = function(other) {
      // Comparing string `value` against provided `guid` will auto-call
      // toString on `guid` for comparison
      return Guid.isGuid(other) && this.value == other;
    };

    this.isEmpty = function() {
      return this.value === Guid.EMPTY;
    };
    
    this.toString = function() {
      return this.value;
    };
    
    this.toJSON = function() {
      return this.value;
    };
  };

  Guid.EMPTY = "00000000-0000-0000-0000-000000000000";

  Guid.isGuid = function(value) {
    return value && (value instanceof Guid || validator.test(value.toString()));
  };

  Guid.create = function() {
    return new Guid([gen(2), gen(1), gen(1), gen(1), gen(3)].join("-"));
  };

  Guid.raw = function() {
    return [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
  };

  if(typeof module != 'undefined' && module.exports) {
    module.exports = Guid;
  }
  else if (typeof window != 'undefined') {
    window.Guid = Guid;
  }
})();


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent = /** @class */ (function () {
    function TableauEvent(type) {
        this._type = type;
    }
    Object.defineProperty(TableauEvent.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return TableauEvent;
}());
exports.TableauEvent = TableauEvent;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
var SheetImpl = /** @class */ (function () {
    function SheetImpl(_sheetInfoImpl) {
        this._sheetInfoImpl = _sheetInfoImpl;
    }
    Object.defineProperty(SheetImpl.prototype, "name", {
        get: function () {
            return this._sheetInfoImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "sheetType", {
        get: function () {
            return this._sheetInfoImpl.sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "sheetPath", {
        get: function () {
            return this._sheetInfoImpl.sheetPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "size", {
        get: function () {
            return this._sheetInfoImpl.sheetSize;
        },
        enumerable: true,
        configurable: true
    });
    SheetImpl.prototype.findParameterAsync = function (parameterName, sheet) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(parameterName, 'parameterName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(sheet, 'sheet');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByNameAsync(parameterName, sheet);
    };
    SheetImpl.prototype.getParametersAsync = function (sheet) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(sheet, 'sheet');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.getParametersForSheetAsync(this.sheetPath, sheet);
    };
    return SheetImpl;
}());
exports.SheetImpl = SheetImpl;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataSource = /** @class */ (function () {
    function DataSource(_dataSourceImpl) {
        this._dataSourceImpl = _dataSourceImpl;
    }
    Object.defineProperty(DataSource.prototype, "name", {
        get: function () {
            return this._dataSourceImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "id", {
        get: function () {
            return this._dataSourceImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "fields", {
        get: function () {
            return this._dataSourceImpl.fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "extractUpdateTime", {
        get: function () {
            return this._dataSourceImpl.extractUpdateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "isExtract", {
        get: function () {
            return this._dataSourceImpl.isExtract;
        },
        enumerable: true,
        configurable: true
    });
    DataSource.prototype.refreshAsync = function () {
        return this._dataSourceImpl.refreshAsync();
    };
    DataSource.prototype.getActiveTablesAsync = function () {
        return this._dataSourceImpl.getActiveTablesAsync();
    };
    DataSource.prototype.getConnectionSummariesAsync = function () {
        return this._dataSourceImpl.getConnectionSummariesAsync();
    };
    DataSource.prototype.getUnderlyingDataAsync = function (options) {
        return this._dataSourceImpl.getUnderlyingDataAsync(options);
    };
    return DataSource;
}());
exports.DataSource = DataSource;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(65);
var ConnectionSummary_1 = __webpack_require__(137);
var Field_1 = __webpack_require__(66);
var TableSummary_1 = __webpack_require__(138);
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
var DataSourceImpl = /** @class */ (function () {
    function DataSourceImpl(_dataSourceInfo) {
        var _this = this;
        this._dataSourceInfo = _dataSourceInfo;
        this._fields = _dataSourceInfo.fields.map(function (fieldModel) {
            var fieldImpl = new FieldImpl_1.FieldImpl(fieldModel, _this);
            return new Field_1.Field(fieldImpl);
        });
    }
    Object.defineProperty(DataSourceImpl.prototype, "name", {
        get: function () {
            return this._dataSourceInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "id", {
        get: function () {
            return this._dataSourceInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "extractUpdateTime", {
        get: function () {
            return this._dataSourceInfo.extractUpdateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "isExtract", {
        get: function () {
            return this._dataSourceInfo.isExtract;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceImpl.prototype.refreshAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.refreshAsync(this._dataSourceInfo.id);
    };
    DataSourceImpl.prototype.getConnectionSummariesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getConnectionSummariesAsync(this._dataSourceInfo.id).then(function (summaries) {
            return summaries.map(function (summary) { return new ConnectionSummary_1.ConnectionSummary(summary); });
        });
    };
    DataSourceImpl.prototype.getActiveTablesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getActiveTablesAsync(this._dataSourceInfo.id).then(function (tableInfos) {
            return tableInfos.map(function (tableInfo) { return new TableSummary_1.TableSummary(tableInfo); });
        });
    };
    DataSourceImpl.prototype.getUnderlyingDataAsync = function (options) {
        var getDataService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return getDataService.getDataSourceDataAsync(this.id, !!options.ignoreAliases, options.maxRows || 0, // 0 and [] are defaults
        options.columnsToInclude || []);
    };
    DataSourceImpl.prototype.initializeWithPublicInterfaces = function (dataSource) {
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(dataSource, 'dataSource');
        this._fields = this._dataSourceInfo.fields.map(function (fieldModel) {
            var fieldImpl = new FieldImpl_1.FieldImpl(fieldModel, dataSource);
            return new Field_1.Field(fieldImpl);
        });
    };
    return DataSourceImpl;
}());
exports.DataSourceImpl = DataSourceImpl;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var FieldImpl = /** @class */ (function () {
    function FieldImpl(_fieldInfo, _parentDataSource) {
        this._fieldInfo = _fieldInfo;
        this._parentDataSource = _parentDataSource;
    }
    Object.defineProperty(FieldImpl.prototype, "name", {
        get: function () {
            return this._fieldInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "id", {
        get: function () {
            return this._fieldInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "description", {
        get: function () {
            return this._fieldInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "aggregation", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.fieldAggregationType.convert(this._fieldInfo.aggregation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "dataSource", {
        get: function () {
            return this._parentDataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "role", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.fieldRoleType.convert(this._fieldInfo.role);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isHidden", {
        get: function () {
            return this._fieldInfo.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isGenerated", {
        get: function () {
            return this._fieldInfo.isGenerated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isCalculatedField", {
        get: function () {
            return this._fieldInfo.isCalculatedField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isCombinedField", {
        get: function () {
            return this._fieldInfo.isCombinedField;
        },
        enumerable: true,
        configurable: true
    });
    return FieldImpl;
}());
exports.FieldImpl = FieldImpl;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHelpers_1 = __webpack_require__(8);
var Field = /** @class */ (function () {
    function Field(_fieldImpl) {
        this._fieldImpl = _fieldImpl;
    }
    Object.defineProperty(Field.prototype, "name", {
        get: function () {
            return this._fieldImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "id", {
        get: function () {
            return this._fieldImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "description", {
        get: function () {
            return this._fieldImpl.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "aggregation", {
        get: function () {
            return this._fieldImpl.aggregation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "dataSource", {
        get: function () {
            return this._fieldImpl.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "role", {
        get: function () {
            return this._fieldImpl.role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isHidden", {
        get: function () {
            return this._fieldImpl.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isGenerated", {
        get: function () {
            return this._fieldImpl.isGenerated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isCalculatedField", {
        get: function () {
            return this._fieldImpl.isCalculatedField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "columnType", {
        get: function () {
            throw ErrorHelpers_1.ErrorHelpers.apiNotImplemented('Field.columnType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isCombinedField", {
        get: function () {
            return this._fieldImpl.isCombinedField;
        },
        enumerable: true,
        configurable: true
    });
    return Field;
}());
exports.Field = Field;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauSheetEvent_1 = __webpack_require__(68);
var TableauWorksheetEvent = /** @class */ (function (_super) {
    __extends(TableauWorksheetEvent, _super);
    function TableauWorksheetEvent(type, _worksheet) {
        var _this = _super.call(this, type, _worksheet) || this;
        _this._worksheet = _worksheet;
        return _this;
    }
    Object.defineProperty(TableauWorksheetEvent.prototype, "worksheet", {
        get: function () {
            return this._worksheet;
        },
        enumerable: true,
        configurable: true
    });
    return TableauWorksheetEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.TableauWorksheetEvent = TableauWorksheetEvent;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent_1 = __webpack_require__(61);
var TableauSheetEvent = /** @class */ (function (_super) {
    __extends(TableauSheetEvent, _super);
    function TableauSheetEvent(type, sheet) {
        var _this = _super.call(this, type) || this;
        _this._sheet = sheet;
        return _this;
    }
    Object.defineProperty(TableauSheetEvent.prototype, "sheet", {
        get: function () {
            return this._sheet;
        },
        enumerable: true,
        configurable: true
    });
    return TableauSheetEvent;
}(TableauEvent_1.TableauEvent));
exports.TableauSheetEvent = TableauSheetEvent;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines which type of getData call to make.
 */
var GetDataType;
(function (GetDataType) {
    GetDataType["Summary"] = "summary";
    GetDataType["Underlying"] = "underlying";
})(GetDataType = exports.GetDataType || (exports.GetDataType = {}));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b, _c, _d;
var EnumConverter_1 = __webpack_require__(41);
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the external-api-contract to the enums used
 * in the internal-api-contract, which developers code against.
 */
var ExternalToInternalEnumMappings = /** @class */ (function () {
    function ExternalToInternalEnumMappings() {
    }
    ExternalToInternalEnumMappings.filterDomainType = new EnumConverter_1.EnumConverter((_a = {},
        _a[Tableau_1.FilterDomainType.Relevant] = api_internal_contract_js_1.FilterDomainType.Relevant,
        _a[Tableau_1.FilterDomainType.Database] = api_internal_contract_js_1.FilterDomainType.Database,
        _a));
    ExternalToInternalEnumMappings.nullOptions = new EnumConverter_1.EnumConverter((_b = {},
        _b[Tableau_1.FilterNullOption.AllValues] = api_internal_contract_js_1.FilterNullOption.AllValues,
        _b[Tableau_1.FilterNullOption.NonNullValues] = api_internal_contract_js_1.FilterNullOption.NonNullValues,
        _b[Tableau_1.FilterNullOption.NullValues] = api_internal_contract_js_1.FilterNullOption.NullValues,
        _b));
    ExternalToInternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_c = {},
        _c[Tableau_1.FilterUpdateType.Add] = api_internal_contract_js_1.FilterUpdateType.Add,
        _c[Tableau_1.FilterUpdateType.All] = api_internal_contract_js_1.FilterUpdateType.All,
        _c[Tableau_1.FilterUpdateType.Remove] = api_internal_contract_js_1.FilterUpdateType.Remove,
        _c[Tableau_1.FilterUpdateType.Replace] = api_internal_contract_js_1.FilterUpdateType.Replace,
        _c));
    ExternalToInternalEnumMappings.setVisibilityType = new EnumConverter_1.EnumConverter((_d = {},
        _d[Tableau_1.ZoneVisibilityType.Show] = true,
        _d[Tableau_1.ZoneVisibilityType.Hide] = false,
        _d));
    return ExternalToInternalEnumMappings;
}());
exports.ExternalToInternalEnumMappings = ExternalToInternalEnumMappings;
/* tslint:enable:typedef */


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(72);
__webpack_require__(102);
__webpack_require__(54);
// Due to the way we configured webpack, we should be exporting things which will be under
// a global variable called "tableau". Export everything we want to be visible under tableau
// from this file.
var ExtensionsImpl_1 = __webpack_require__(112);
var Extensions_1 = __webpack_require__(168);
var ApiShared_1 = __webpack_require__(4);
var isAlpha = typeof EXTENSION_VERSION_IS_ALPHA !== 'undefined' ? EXTENSION_VERSION_IS_ALPHA : false;
ApiShared_1.ApiVersion.SetVersionNumber( true ? "1.3.0-pre.8" : '0.0.0', isAlpha);
var extensionImpl = new ExtensionsImpl_1.ExtensionsImpl();
exports.extensions = new Extensions_1.Extensions(extensionImpl);
// Export Enums
// These show up under the tableau object. I.e. tableau.ExtensionContext.Server
var Tableau_1 = __webpack_require__(0);
exports.ExtensionContext = Tableau_1.ExtensionContext;
exports.ExtensionMode = Tableau_1.ExtensionMode;
exports.AnalyticsObjectType = Tableau_1.AnalyticsObjectType;
exports.ColumnType = Tableau_1.ColumnType;
exports.DashboardObjectType = Tableau_1.DashboardObjectType;
exports.DataType = Tableau_1.DataType;
exports.DateRangeType = Tableau_1.DateRangeType;
exports.EncodingType = Tableau_1.EncodingType;
exports.ErrorCodes = Tableau_1.ErrorCodes;
exports.FieldAggregationType = Tableau_1.FieldAggregationType;
exports.FieldRoleType = Tableau_1.FieldRoleType;
exports.FilterDomainType = Tableau_1.FilterDomainType;
exports.FilterType = Tableau_1.FilterType;
exports.FilterUpdateType = Tableau_1.FilterUpdateType;
exports.FilterNullOption = Tableau_1.FilterNullOption;
exports.MarkType = Tableau_1.MarkType;
exports.ParameterValueType = Tableau_1.ParameterValueType;
exports.PeriodType = Tableau_1.PeriodType;
exports.QuickTableCalcType = Tableau_1.QuickTableCalcType;
exports.SelectionUpdateType = Tableau_1.SelectionUpdateType;
exports.SheetType = Tableau_1.SheetType;
exports.SortDirection = Tableau_1.SortDirection;
exports.TableauEventType = Tableau_1.TableauEventType;
exports.TrendLineModelType = Tableau_1.TrendLineModelType;
exports.ZoneVisibilityType = Tableau_1.ZoneVisibilityType;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
__webpack_require__(76);
__webpack_require__(85);
__webpack_require__(88);
__webpack_require__(100);
__webpack_require__(101);
module.exports = __webpack_require__(6).Promise;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(24);
var test = {};
test[__webpack_require__(2)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(16)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(17) && !__webpack_require__(27)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(77)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(46)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var defined = __webpack_require__(30);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(79);
var descriptor = __webpack_require__(45);
var setToStringTag = __webpack_require__(36);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(80);
var enumBugKeys = __webpack_require__(47);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(48).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(20);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(32);
var arrayIndexOf = __webpack_require__(82)(false);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(32);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(83);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(86);
var getKeys = __webpack_require__(31);
var redefine = __webpack_require__(16);
var global = __webpack_require__(3);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(19);
var wks = __webpack_require__(2);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(49);
var step = __webpack_require__(87);
var Iterators = __webpack_require__(19);
var toIObject = __webpack_require__(32);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(46)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var global = __webpack_require__(3);
var ctx = __webpack_require__(18);
var classof = __webpack_require__(24);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(22);
var anInstance = __webpack_require__(89);
var forOf = __webpack_require__(90);
var speciesConstructor = __webpack_require__(50);
var task = __webpack_require__(51).set;
var microtask = __webpack_require__(95)();
var newPromiseCapabilityModule = __webpack_require__(38);
var perform = __webpack_require__(52);
var userAgent = __webpack_require__(96);
var promiseResolve = __webpack_require__(53);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(97)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(36)($Promise, PROMISE);
__webpack_require__(98)(PROMISE);
Wrapper = __webpack_require__(6)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(99)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var call = __webpack_require__(91);
var isArrayIter = __webpack_require__(92);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(34);
var getIterFn = __webpack_require__(93);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(19);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(24);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(19);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(51).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var dP = __webpack_require__(20);
var DESCRIPTORS = __webpack_require__(17);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(11);
var core = __webpack_require__(6);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(50);
var promiseResolve = __webpack_require__(53);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(38);
var perform = __webpack_require__(52);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(6).Array.find;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(11);
var $find = __webpack_require__(104)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(49)(KEY);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(18);
var IObject = __webpack_require__(33);
var toObject = __webpack_require__(37);
var toLength = __webpack_require__(34);
var asc = __webpack_require__(105);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(106);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(107);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(15);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(109) });


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(110);
var pIE = __webpack_require__(111);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(33);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(27)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var ApiShared_1 = __webpack_require__(4);
var DashboardContent_1 = __webpack_require__(156);
var Environment_1 = __webpack_require__(157);
var RegisterAllExtensionsServices_1 = __webpack_require__(158);
var Settings_1 = __webpack_require__(162);
var SettingsImpl_1 = __webpack_require__(163);
var ApiShared_2 = __webpack_require__(4);
var UI_1 = __webpack_require__(164);
var UIImpl_1 = __webpack_require__(165);
var ApiVersion_1 = __webpack_require__(56);
var VersionedExternalApiDispatcher_1 = __webpack_require__(166);
var api_internal_contract_js_1 = __webpack_require__(1);
var LegacyInternalApiDispatcherHolder_1 = __webpack_require__(167);
var ExtensionsImpl = /** @class */ (function () {
    function ExtensionsImpl() {
    }
    ExtensionsImpl.prototype.initializeAsync = function (isExtensionDialog, contextMenuCallbacks) {
        var _this = this;
        if (!this._initializationPromise) {
            this._initializationPromise = new Promise(function (resolve, reject) {
                var initOptions = { isAlpha: ApiVersion_1.ApiVersion.Instance.isAlpha };
                // First thing we want to do is check to see if there is a desktop dispatcher already registered for us
                if (LegacyInternalApiDispatcherHolder_1.LegacyInternalApiDispatcherHolder.hasDesktopApiDispatcherPromise(initOptions)) {
                    // Running in a pre-2019.3 desktop, use our legacy dispatcher promise
                    var desktopDispatcherPromise = LegacyInternalApiDispatcherHolder_1.LegacyInternalApiDispatcherHolder.getDesktopDispatcherPromise(initOptions);
                    desktopDispatcherPromise.then(function (dispatcherFactory) {
                        return _this.onDispatcherReceived(dispatcherFactory, isExtensionDialog, contextMenuCallbacks);
                    })
                        .then(function (openPayload) {
                        resolve(openPayload);
                    }).catch(function (error) {
                        reject(error);
                    });
                }
                else {
                    // We must be running in server, so we should try to kick of the server dispatcher bootstrapping
                    var onDispatcherReceivedCallback_1 = _this.onDispatcherReceived.bind(_this);
                    ApiShared_1.doCrossFrameBootstrap(window, api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION, initOptions).then(function (factory) {
                        return onDispatcherReceivedCallback_1(factory, isExtensionDialog, contextMenuCallbacks);
                    }).then(function (openPayload) {
                        resolve(openPayload);
                    }).catch(function (error) {
                        reject(error);
                    });
                }
            });
        }
        return this._initializationPromise;
    };
    ExtensionsImpl.prototype.onDispatcherReceived = function (dispatcherFactory, isExtensionDialog, contextMenuFunctions) {
        var _this = this;
        var dispatcher = dispatcherFactory(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
        // Call to register all the services which will use the newly initialized dispatcher
        RegisterAllExtensionsServices_1.registerInitializationExtensionsServices(dispatcher);
        // Get the initialization service and initialize this extension
        var initializationService = ApiShared_1.ApiServiceRegistry.instance.getService("InitializationService" /* InitializationService */);
        var callbackMapKeys = (contextMenuFunctions) ? Object.keys(contextMenuFunctions) : [];
        return initializationService.initializeDashboardExtensionsAsync(isExtensionDialog, callbackMapKeys).then(function (result) {
            if (!result.extensionInstance.locator.dashboardPath) {
                throw new ApiShared_2.TableauError(Tableau_1.ErrorCodes.InternalError, 'Unexpected error during initialization.');
            }
            // If we receive an invalid plaform version, this means that platform is runnning 1.4 or 2.1 and
            // doesn't pass the platform version to external. In this case we assume the platform version to be 1.9
            var platformVersion = result.extensionEnvironment.platformVersion
                ? result.extensionEnvironment.platformVersion
                : { major: 1, minor: 9, fix: 0 };
            // Wrap our existing dispatcher in a dispatcher that can downgrade/upgrade for an older platform.
            if (VersionedExternalApiDispatcher_1.VersionedExternalApiDispatcher.needsVersionConverter(platformVersion)) {
                dispatcher = new VersionedExternalApiDispatcher_1.VersionedExternalApiDispatcher(dispatcher, platformVersion);
            }
            // Registration of services must happen before initializing content and environment
            ApiShared_1.registerAllSharedServices(dispatcher);
            RegisterAllExtensionsServices_1.registerAllExtensionsServices(dispatcher);
            _this.dashboardContent = _this.initializeDashboardContent(result.extensionDashboardInfo, result.extensionInstance.locator.dashboardPath);
            _this.environment = new Environment_1.Environment(result.extensionEnvironment);
            _this.settings = _this.initializeSettings(result.extensionSettingsInfo);
            _this.ui = new UI_1.UI(new UIImpl_1.UIImpl());
            // After initialization has completed, setup listeners for the callback functions that
            // are meant to be triggered whenever a context menu item is clicked.
            _this.initializeContextMenuCallbacks(contextMenuFunctions);
            // In the normal initialization case, this will be an empty string.  When returning from initializeAsync to the
            // developer, we just ingore that string.  In the case of initializing from an extension dialog, this string
            // is an optional payload sent from the parent extension.
            return result.extensionDialogPayload;
        });
    };
    ExtensionsImpl.prototype.initializeDashboardContent = function (info, sheetPath) {
        var dashboardImpl = new ApiShared_1.DashboardImpl(info, sheetPath);
        var dashboard = new ApiShared_1.Dashboard(dashboardImpl);
        return new DashboardContent_1.DashboardContent(dashboard);
    };
    ExtensionsImpl.prototype.initializeSettings = function (settingsInfo) {
        var settingsImpl = new SettingsImpl_1.SettingsImpl(settingsInfo);
        return new Settings_1.Settings(settingsImpl);
    };
    ExtensionsImpl.prototype.initializeContextMenuCallbacks = function (contextMenuFunctions) {
        var notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        // Unregister function not used since these notifications should be
        // observed for the full lifetime of the extension.
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ContextMenuClick, function (model) {
            // Let through any context menu event, these are already filtered on api-core
            // based on the extension locator.
            return true;
        }, function (event) {
            // Execute the function associated with this context menu ID
            if (contextMenuFunctions) {
                if (!contextMenuFunctions[event.id]) {
                    throw new ApiShared_2.TableauError(Tableau_1.ErrorCodes.InternalError, "Received unexpected context menu Id from event: " + event.id);
                }
                contextMenuFunctions[event.id]();
            }
        });
    };
    return ExtensionsImpl;
}());
exports.ExtensionsImpl = ExtensionsImpl;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(55);
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(_dashboardImpl) {
        var _this = _super.call(this, _dashboardImpl) || this;
        _this._dashboardImpl = _dashboardImpl;
        _dashboardImpl.initializeWithPublicInterfaces(_this);
        return _this;
    }
    Object.defineProperty(Dashboard.prototype, "worksheets", {
        get: function () {
            return this._dashboardImpl.worksheets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "objects", {
        get: function () {
            return this._dashboardImpl.objects;
        },
        enumerable: true,
        configurable: true
    });
    Dashboard.prototype.setZoneVisibilityAsync = function (zoneVisibilityMap) {
        return this._dashboardImpl.setZoneVisibilityAsync(zoneVisibilityMap);
    };
    return Dashboard;
}(Sheet_1.Sheet));
exports.Dashboard = Dashboard;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(5);
/**
 * Represents the current version of the extensions library
 * and extensions-api-types library
 */
var VersionNumber = /** @class */ (function () {
    // private constructor so everyone uses the singleton instance
    // build numbers have this form: M.m.f-pre.N
    function VersionNumber(versionString, isAlpha) {
        var partStr = versionString.split('-');
        this.build = this.getBuildNumber(partStr[1]);
        versionString = partStr[0];
        var parts = versionString.split('.').map(function (p) { return parseInt(p, 10); });
        if (parts.length !== 3) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, "Invalid version number: " + versionString);
        }
        this.major = parts[0];
        this.minor = parts[1];
        this.fix = parts[2];
        this.isAlpha = isAlpha;
    }
    VersionNumber.prototype.getBuildNumber = function (preReleaseString) {
        var noBuildNumber = -1;
        if (!preReleaseString) {
            return noBuildNumber;
        }
        // The preRelease string has this form: pre.N, but we don't depend on the actual string being 'pre'
        var partStr = preReleaseString.split('.');
        return partStr[1] ? parseInt(partStr[1], 10) : noBuildNumber;
    };
    Object.defineProperty(VersionNumber.prototype, "formattedValue", {
        get: function () {
            return this.major + "." + this.minor + "." + this.fix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VersionNumber.prototype, "fullFormattedValue", {
        get: function () {
            return this.major + "." + this.minor + "." + this.fix + "-pre." + this.build;
        },
        enumerable: true,
        configurable: true
    });
    return VersionNumber;
}());
exports.VersionNumber = VersionNumber;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
module.exports = __webpack_require__(6).Number.isInteger;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(11);

$export($export.S, 'Number', { isInteger: __webpack_require__(117) });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(10);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionContext;
(function (ExtensionContext) {
    ExtensionContext["Desktop"] = "desktop";
    ExtensionContext["Server"] = "server";
    ExtensionContext["Unknown"] = "unknown";
})(ExtensionContext = exports.ExtensionContext || (exports.ExtensionContext = {}));
var ExtensionMode;
(function (ExtensionMode) {
    ExtensionMode["Authoring"] = "authoring";
    ExtensionMode["Viewing"] = "viewing";
    ExtensionMode["Unknown"] = "unknown";
})(ExtensionMode = exports.ExtensionMode || (exports.ExtensionMode = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["Discrete"] = "discrete";
    ColumnType["Continuous"] = "continuous";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
var DashboardObjectType;
(function (DashboardObjectType) {
    DashboardObjectType["Blank"] = "blank";
    DashboardObjectType["Worksheet"] = "worksheet";
    DashboardObjectType["QuickFilter"] = "quick-filter";
    DashboardObjectType["ParameterControl"] = "parameter-control";
    DashboardObjectType["PageFilter"] = "page-filter";
    DashboardObjectType["Legend"] = "legend";
    DashboardObjectType["Title"] = "title";
    DashboardObjectType["Text"] = "text";
    DashboardObjectType["Image"] = "image";
    DashboardObjectType["WebPage"] = "web-page";
    DashboardObjectType["Extension"] = "extension";
})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
var DataType;
(function (DataType) {
    DataType["String"] = "string";
    DataType["Int"] = "int";
    DataType["Float"] = "float";
    DataType["Bool"] = "bool";
    DataType["Date"] = "date";
    DataType["DateTime"] = "date-time";
    DataType["Spatial"] = "spatial";
})(DataType = exports.DataType || (exports.DataType = {}));
var EncodedDataType;
(function (EncodedDataType) {
    EncodedDataType["Number"] = "number";
    EncodedDataType["String"] = "string";
    EncodedDataType["Date"] = "date";
    EncodedDataType["Boolean"] = "boolean";
})(EncodedDataType = exports.EncodedDataType || (exports.EncodedDataType = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["INITIALIZATION_ERROR"] = "initialization-error";
    ErrorCodes["INTERNAL_ERROR"] = "internal-error";
    ErrorCodes["MISSING_ENUM_MAPPING"] = "missing-enum-mapping";
    ErrorCodes["MISSING_PARAMETER"] = "missing-parameter";
    ErrorCodes["PERMISSION_DENIED"] = "permission-denied";
    ErrorCodes["PRES_MODEL_PARSING_ERROR"] = "pres-model-parsing-error";
    ErrorCodes["VERSION_NOT_CONFIGURED"] = "version-not-configured";
    ErrorCodes["VISIBILITY_ERROR"] = "visibility-error";
    ErrorCodes["UNKNOWN_VERB_ID"] = "unknown-verb-id";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var FieldAggregationType;
(function (FieldAggregationType) {
    FieldAggregationType["Sum"] = "sum";
    FieldAggregationType["Avg"] = "avg";
    FieldAggregationType["Min"] = "min";
    FieldAggregationType["Max"] = "max";
    FieldAggregationType["Stdev"] = "stdev";
    FieldAggregationType["Stdevp"] = "stdevp";
    FieldAggregationType["Var"] = "var";
    FieldAggregationType["Varp"] = "varp";
    FieldAggregationType["Count"] = "count";
    FieldAggregationType["Countd"] = "countd";
    FieldAggregationType["Median"] = "median";
    FieldAggregationType["Attr"] = "attr";
    FieldAggregationType["None"] = "none";
    FieldAggregationType["Year"] = "year";
    FieldAggregationType["Qtr"] = "qtr";
    FieldAggregationType["Month"] = "month";
    FieldAggregationType["Day"] = "day";
    FieldAggregationType["Hour"] = "hour";
    FieldAggregationType["Minute"] = "minute";
    FieldAggregationType["Second"] = "second";
    FieldAggregationType["Week"] = "week";
    FieldAggregationType["Weekday"] = "weekday";
    FieldAggregationType["MonthYear"] = "month-year";
    FieldAggregationType["Mdy"] = "mdy";
    FieldAggregationType["End"] = "end";
    FieldAggregationType["TruncYear"] = "trunc-year";
    FieldAggregationType["TruncQtr"] = "trunc-qtr";
    FieldAggregationType["TruncMonth"] = "trunc-month";
    FieldAggregationType["TruncWeek"] = "trunc-week";
    FieldAggregationType["TruncDay"] = "trunc-day";
    FieldAggregationType["TruncHour"] = "trunc-hour";
    FieldAggregationType["TruncMinute"] = "trunc-minute";
    FieldAggregationType["TruncSecond"] = "trunc-second";
    FieldAggregationType["Quart1"] = "quart1";
    FieldAggregationType["Quart3"] = "quart3";
    FieldAggregationType["Skewness"] = "skewness";
    FieldAggregationType["Kurtosis"] = "kurtosis";
    FieldAggregationType["InOut"] = "in-out";
    FieldAggregationType["User"] = "user";
})(FieldAggregationType = exports.FieldAggregationType || (exports.FieldAggregationType = {}));
var FieldRoleType;
(function (FieldRoleType) {
    FieldRoleType["Dimension"] = "dimension";
    FieldRoleType["Measure"] = "measure";
    FieldRoleType["Unknown"] = "unknown";
})(FieldRoleType = exports.FieldRoleType || (exports.FieldRoleType = {}));
/**
 *  The different update types for applying filter.
 */
var FilterUpdateType;
(function (FilterUpdateType) {
    FilterUpdateType["Add"] = "add";
    FilterUpdateType["All"] = "all";
    FilterUpdateType["Replace"] = "replace";
    FilterUpdateType["Remove"] = "remove";
})(FilterUpdateType = exports.FilterUpdateType || (exports.FilterUpdateType = {}));
var SheetType;
(function (SheetType) {
    SheetType["Dashboard"] = "dashboard";
    SheetType["Story"] = "story";
    SheetType["Worksheet"] = "worksheet";
})(SheetType = exports.SheetType || (exports.SheetType = {}));
var DomainRestrictionType;
(function (DomainRestrictionType) {
    DomainRestrictionType["All"] = "all";
    DomainRestrictionType["List"] = "list";
    DomainRestrictionType["Range"] = "range";
})(DomainRestrictionType = exports.DomainRestrictionType || (exports.DomainRestrictionType = {}));
var DateStepPeriod;
(function (DateStepPeriod) {
    DateStepPeriod["Years"] = "years";
    DateStepPeriod["Quarters"] = "quarters";
    DateStepPeriod["Months"] = "months";
    DateStepPeriod["Weeks"] = "weeks";
    DateStepPeriod["Days"] = "days";
    DateStepPeriod["Hours"] = "hours";
    DateStepPeriod["Minutes"] = "minutes";
    DateStepPeriod["Seconds"] = "seconds";
})(DateStepPeriod = exports.DateStepPeriod || (exports.DateStepPeriod = {}));
/**
 * The option for specifying which values to include for filtering.
 */
var FilterNullOption;
(function (FilterNullOption) {
    FilterNullOption["NullValues"] = "nullvalues";
    FilterNullOption["NonNullValues"] = "nonnullvalues";
    FilterNullOption["AllValues"] = "allvalues";
})(FilterNullOption = exports.FilterNullOption || (exports.FilterNullOption = {}));
/**
 * The type of filter domain
 */
var FilterDomainType;
(function (FilterDomainType) {
    FilterDomainType["Relevant"] = "relevant";
    FilterDomainType["Database"] = "database";
})(FilterDomainType = exports.FilterDomainType || (exports.FilterDomainType = {}));
/**
 * Internal enum for specifying the selection type for select marks api.
 */
var SelectionUpdateType;
(function (SelectionUpdateType) {
    SelectionUpdateType["Replace"] = "select-replace";
    SelectionUpdateType["Add"] = "select-add";
    SelectionUpdateType["Remove"] = "select-remove";
})(SelectionUpdateType = exports.SelectionUpdateType || (exports.SelectionUpdateType = {}));
/**
 * Internal enum for specifying the included values type for range selection.
 */
var QuantitativeIncludedValues;
(function (QuantitativeIncludedValues) {
    QuantitativeIncludedValues["IncludeNull"] = "include-null";
    QuantitativeIncludedValues["IncludeNonNull"] = "include-non-null";
    QuantitativeIncludedValues["IncludeAll"] = "include-all";
})(QuantitativeIncludedValues = exports.QuantitativeIncludedValues || (exports.QuantitativeIncludedValues = {}));
/**
 * Type of mark for a given marks card in a viz.
 */
var MarkType;
(function (MarkType) {
    MarkType["Bar"] = "bar";
    MarkType["Line"] = "line";
    MarkType["Area"] = "area";
    MarkType["Square"] = "square";
    MarkType["Circle"] = "circle";
    MarkType["Shape"] = "shape";
    MarkType["Text"] = "text";
    MarkType["Map"] = "map";
    MarkType["Pie"] = "pie";
    MarkType["GanttBar"] = "gantt-bar";
    MarkType["Polygon"] = "polygon";
})(MarkType = exports.MarkType || (exports.MarkType = {}));
/**
 * Internal enum for specifying the type of filter
 */
var FilterType;
(function (FilterType) {
    FilterType["Categorical"] = "categorical";
    FilterType["Range"] = "range";
    FilterType["RelativeDate"] = "relativeDate";
    FilterType["Hierarchical"] = "hierarchical";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
/**
 * Internal enum for specifying the DateRangeType of a relative date filter
 */
var DateRangeType;
(function (DateRangeType) {
    /**
     * Refers to the last day, week, month, etc. of the date period.
     */
    DateRangeType["Last"] = "last";
    /**
     * Refers to the last N days, weeks, months, etc. of the date period.
     */
    DateRangeType["LastN"] = "lastN";
    /**
     * Refers to the next day, week, month, etc. of the date period.
     */
    DateRangeType["Next"] = "next";
    /**
     * Refers to the next N days, weeks, months, etc. of the date period.
     */
    DateRangeType["NextN"] = "nextN";
    /**
     * Refers to the current day, week, month, etc. of the date period.
     */
    DateRangeType["Current"] = "current";
    /**
     * Refers to everything up to and including the current day, week, month, etc. of the date period.
     */
    DateRangeType["ToDate"] = "toDate";
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
/**
 * Used to determine if the launching of an extension dialog succeeded or failed.
 */
var ExtensionDialogResult;
(function (ExtensionDialogResult) {
    ExtensionDialogResult["DialogAlreadyOpen"] = "dialog-already-open";
    ExtensionDialogResult["InvalidDomain"] = "invalid-domain";
    ExtensionDialogResult["Success"] = "success";
})(ExtensionDialogResult = exports.ExtensionDialogResult || (exports.ExtensionDialogResult = {}));


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ParameterId;
(function (ParameterId) {
    ParameterId["ExtensionLocator"] = "extension-locator";
    ParameterId["ExtensionBootstrapInfo"] = "extension-bootstrap-info";
    ParameterId["ExtensionSettingsInfo"] = "extension-settings-info";
    ParameterId["VisualId"] = "visual-id";
    ParameterId["SheetPath"] = "sheet-path";
    ParameterId["IgnoreAliases"] = "ignore-aliases";
    ParameterId["IgnoreSelection"] = "ignore-selection";
    ParameterId["IncludeAllColumns"] = "include-all-columns";
    ParameterId["MaxRows"] = "max-rows";
    ParameterId["UnderlyingDataTable"] = "underlying-data-table";
    ParameterId["UnderlyingSummaryDataTable"] = "underlying-summary-data-table";
    ParameterId["DataSourceDataTable"] = "data-source-data-table";
    ParameterId["SettingsValues"] = "settings-values";
    ParameterId["SelectedData"] = "selected-data";
    ParameterId["HighlightedData"] = "highlighted-data";
    // Filter Params
    ParameterId["FieldName"] = "field-name";
    ParameterId["FilterValues"] = "filter-values";
    ParameterId["FilterUpdateType"] = "filter-update-type";
    ParameterId["IsExcludeMode"] = "is-exclude";
    ParameterId["FilterRangeMin"] = "filter-range-min";
    ParameterId["FilterRangeMax"] = "filter-range-max";
    ParameterId["FilterRangeNullOption"] = "filter-range-null-option";
    ParameterId["WorksheetFilters"] = "worksheet-filters";
    ParameterId["FieldId"] = "field-id";
    ParameterId["DomainType"] = "domain-type";
    ParameterId["CategoricalDomain"] = "categorical-domain";
    ParameterId["QuantitativeDomain"] = "quantitative-dmain";
    ParameterId["Field"] = "field";
    ParameterId["WorksheetName"] = "worksheet-name";
    ParameterId["DashboardName"] = "dashboard";
    ParameterId["ParameterInfo"] = "parameter-info";
    ParameterId["ParameterInfos"] = "parameter-infos";
    ParameterId["ParameterCaption"] = "paremeter-caption";
    ParameterId["ParameterFieldName"] = "parameter-field-name";
    ParameterId["ParameterValue"] = "parameter-value";
    ParameterId["Selection"] = "selection";
    ParameterId["SelectionUpdateType"] = "selectionUpdateType";
    ParameterId["HierValSelectionModels"] = "hierarchicalValueSelectionModels";
    ParameterId["QuantRangeSelectionModels"] = "quantativeRangeSelectionModels";
    ParameterId["DimValSelectionModels"] = "dimensionValueSelectionModels";
    ParameterId["ActiveTablesInfo"] = "active-tables-info";
    ParameterId["DataSource"] = "data-source";
    ParameterId["DataSourceId"] = "data-source-id";
    ParameterId["DeltaTimeMs"] = "delta-time-ms";
    ParameterId["ShouldRefreshDS"] = "should-refresh-ds";
    ParameterId["DataSchema"] = "data-schema";
    ParameterId["DataSourceName"] = "data-source-name";
    ParameterId["ColumnsToInclude"] = "columns-to-include";
    ParameterId["JoinDescription"] = "join-description";
    ParameterId["ConnectionDescriptionSummaries"] = "connection-description-summaries";
    ParameterId["ExtensionDialogUrl"] = "extension-dialog-url";
    ParameterId["ExtensionDialogPayload"] = "extension-dialog-payload";
    ParameterId["IsExtensionDialog"] = "is-extension-dialog";
    ParameterId["ExtensionDialogH"] = "extension-dialog-height";
    ParameterId["ExtensionDialogW"] = "extension-dialog-width";
    ParameterId["ExtensionDialogResult"] = "extension-dialog-result";
    ParameterId["ExtensionContextMenuIds"] = "extension-context-menu-ids";
    ParameterId["TestConversionParameter"] = "test-conversion-parameter";
    ParameterId["Dashboard"] = "dashboard";
    ParameterId["ZoneIdsVisibilityMap"] = "zone-ids-visibility-map";
})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Declare this key type and export the NotificationId to make this behave like a string enum
var VerbId;
(function (VerbId) {
    VerbId["ApplyCategoricalFilter"] = "categorical-filter";
    VerbId["ApplyRangeFilter"] = "range-filter";
    VerbId["ClearFilter"] = "clear-filter";
    VerbId["InitializeExtension"] = "initialize-extension";
    VerbId["GetDataSummaryData"] = "get-summary-data";
    VerbId["GetUnderlyingData"] = "get-underlying-data";
    VerbId["GetDataSourceData"] = "get-datasource-data";
    VerbId["SaveExtensionSettings"] = "save-extension-settings";
    VerbId["GetSelectedMarks"] = "get-selected-marks";
    VerbId["GetHighlightedMarks"] = "get-highlighted-marks";
    VerbId["GetParametersForSheet"] = "get-parameters-for-sheet";
    VerbId["FindParameter"] = "find-parameter";
    VerbId["ChangeParameterValue"] = "change-parameter-value";
    VerbId["ClearSelectedMarks"] = "clear-selected-marks";
    VerbId["SelectByValue"] = "select-by-value";
    VerbId["GetDataSources"] = "get-data-sources";
    VerbId["RefreshDataSource"] = "refresh-data-source";
    VerbId["GetFilters"] = "get-filters";
    VerbId["GetFieldAndDataSource"] = "get-field-and-datasource";
    VerbId["GetCategoricalDomain"] = "get-categorical-domain";
    VerbId["GetRangeDomain"] = "get-range-domain";
    VerbId["GetJoinDescription"] = "get-join-description";
    VerbId["GetConnectionDescriptionSummaries"] = "get-connection-description-summaries";
    VerbId["DisplayDialog"] = "display-dialog";
    VerbId["CloseDialog"] = "close-dialog";
    VerbId["TestConversionVerb"] = "test-conversion-verb";
    VerbId["GetField"] = "get-field";
    VerbId["GetDataSource"] = "get-datasource";
    VerbId["GetActiveTables"] = "get-active-tables";
    VerbId["SetZoneVisibility"] = "set-zone-visibility";
    VerbId["BlockExtension"] = "block-extension";
})(VerbId = exports.VerbId || (exports.VerbId = {}));


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * The version converter is designed to allow the platform and external modules
 * to seemlessly communicate over two different versions of the internal API. The only
 * mode it supports is external's version <= platform's version. When executing
 * commands, it is used to upgrade the external representation to what platform knows on the way in
 * and downgrade the representations on the way out. Similarly for notifications, it can
 * downgrade those on the way from platform to external.
 */
var StackingVersionConverter = /** @class */ (function () {
    /**
     * Creates a new instance of the StackingVersionConverter
     *
     * @param _externalMajorVersion The major version of the internal contract api-external-js is using
     * @param _platformMajorVersion The major version of the internal contract the api-platform-js is using
     * @param _upgradeExecuteTranslations Ordered list of the translations to perform when upgrading cmd parameters
     * @param _downgradeExecuteTranslations Ordered list of downgrade translations to perform after a cmd
     * @param _downgradeNotificationTranslations Ordered list of downgrade translations to perform on a notification
     */
    function StackingVersionConverter(_externalMajorVersion, _platformMajorVersion, _upgradeExecuteTranslations, _downgradeExecuteTranslations, _downgradeNotificationTranslations) {
        this._externalMajorVersion = _externalMajorVersion;
        this._platformMajorVersion = _platformMajorVersion;
        this._upgradeExecuteTranslations = _upgradeExecuteTranslations;
        this._downgradeExecuteTranslations = _downgradeExecuteTranslations;
        this._downgradeNotificationTranslations = _downgradeNotificationTranslations;
        if (this._externalMajorVersion > this._platformMajorVersion) {
            throw new Error("Cannot convert between external version " + this._externalMajorVersion + " and " + this._platformMajorVersion);
        }
    }
    /**
      * Creates a new instance of the StackingVersionConverter
      *
      * @param _externalVersion The version of the internal contract api-external-js is using
      * @param _platformVersion The version of the internal contract the api-platform-js is using
      * @param _upgradeExecuteTranslations Ordered list of the translations to perform when upgrading cmd parameters
      * @param _downgradeExecuteTranslations Ordered list of downgrade translations to perform after a cmd
      * @param _downgradeNotificationTranslations Ordered list of downgrade translations to perform on a notification
      */
    StackingVersionConverter.fromData = function (externalVersion, platformVersion, upgradeExecuteTranslations, downgradeExecuteTranslations, downgradeNotificationTranslations) {
        return new this(externalVersion.major, platformVersion.major, upgradeExecuteTranslations, downgradeExecuteTranslations, downgradeNotificationTranslations);
    };
    StackingVersionConverter.prototype.upgradeExecuteCall = function (verb, parameters) {
        // Perform the upgrade of the verb and parameters to the level that platform is using
        var upgraded = { verb: verb, parameters: parameters };
        for (var _i = 0, _a = this._upgradeExecuteTranslations; _i < _a.length; _i++) {
            var upgradeTranslation = _a[_i];
            upgraded = upgradeTranslation(upgraded.verb, upgraded.parameters);
        }
        return upgraded;
    };
    StackingVersionConverter.prototype.downgradeExecuteReturn = function (executeResponse) {
        // Downgrade the response to what the external module is expecting
        var downgraded = executeResponse;
        for (var _i = 0, _a = this._downgradeExecuteTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded);
        }
        return downgraded;
    };
    StackingVersionConverter.prototype.downgradeNotification = function (notification) {
        // Downgrade the notification to what the external module is expecting
        var downgraded = notification;
        for (var _i = 0, _a = this._downgradeNotificationTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded);
        }
        return downgraded;
    };
    return StackingVersionConverter;
}());
exports.StackingVersionConverter = StackingVersionConverter;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * This version converter doesn't actually do anything but is useful for testing or when we have
 * a matching platform and internal version number
*/
var IdentityVersionConverter = /** @class */ (function () {
    function IdentityVersionConverter() {
    }
    IdentityVersionConverter.prototype.upgradeExecuteCall = function (verb, parameters) {
        return {
            verb: verb,
            parameters: parameters
        };
    };
    IdentityVersionConverter.prototype.downgradeExecuteReturn = function (executeResponse) {
        return executeResponse;
    };
    IdentityVersionConverter.prototype.downgradeNotification = function (notification) {
        return notification;
    };
    return IdentityVersionConverter;
}());
exports.IdentityVersionConverter = IdentityVersionConverter;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Notifications_1 = __webpack_require__(57);
// This is where we will start to define some of these translations.
// When modifying existing models, add the requisite conversion functions here, then use them
// in the VersionConverterFactory implementation. Import old versions as you would any other module
// 0 <-> Translations
// Uncomment this line to import from the V0 definition of the API
// import * as V0 from '@tableau-api-internal-contract-js_v0';
// 1 <-> 2 Translations
// Uncomment this line to import from the V1 definition of the API
// import * as V1 from '@tableau-api-internal-contract-js_v1';
function DowngradeV2WorksheetNames(executeResponse) {
    // Fix the dashboard friendly name issue. The structures are compatible,
    // so we still return the original reply, but we copy the SheetInfo.name
    // into the DashboardZone.name, where v1 wants to find it.
    var bootstrapInfo = executeResponse.result;
    if (bootstrapInfo.extensionDashboardInfo !== undefined) {
        bootstrapInfo.extensionDashboardInfo.zones.forEach(function (zone) {
            if (zone.sheetInfo) {
                zone.name = zone.sheetInfo.name;
            }
        });
    }
    return executeResponse;
}
exports.DowngradeV2WorksheetNames = DowngradeV2WorksheetNames;
function DowngradeFlipboardZoneID(notification) {
    // Fix the FlipboardZoneId issue. Older external versions still check for flipboardZoneIDs.
    // When running against a newer server, if flipboardZoneId is absent, set it to default(0).
    if (notification.notificationId === Notifications_1.NotificationId.SelectedMarksChanged) {
        var visualModel = notification.data;
        if (visualModel.flipboardZoneID === undefined) {
            visualModel.flipboardZoneID = 0;
        }
    }
    return notification;
}
exports.DowngradeFlipboardZoneID = DowngradeFlipboardZoneID;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VersionConverterFactory_1 = __webpack_require__(58);
var ExternalIdentityVersionConverter_1 = __webpack_require__(59);
var ExternalStackingVersionConverter_1 = __webpack_require__(125);
var ExternalVersionTranslations_1 = __webpack_require__(126);
// A mapping from the current client version of internal-contract to an older platform version of the contract.
// Each version bump can have an array of translations to perform in order.
// These translations handle downgradeExecuteCall and upgradeExecuteReturn and are meant to be called on the
// client/external side.
// When updating the major or minor version of our internal-contract, you will need to update these data structures.
// * If there are translations to add, add them to the version to 'upgrade from' or 'downgrade to'.
exports.ExecuteMinorDowngradeCallExternal = {
    1: {
        9: [] // Note that we put downgrades from 1.10 to 1.9 in the [1][9] bucket
    }
};
exports.ExecuteMinorUpgradeReturnExternal = {
    1: {
        9: [ExternalVersionTranslations_1.UpgradeDataTableTypes] // Note that we put upgrades from 1.9 to 1.10 in the [1][9] bucket
    }
};
exports.ExecuteMinorUpgradeNotification = {
    1: {
        9: [] // Note that we put upgrades from 1.9 to 1.10 in the [1][9] bucket
    }
};
/**
 * Creates a new ExternalContractVersionConverter which has the ability to upgrade and downgrade
 * the contract between the two versions which are specified. If externalMajorVersion is less than
 * platformMajorVersion, an ExternalIdentityVersionConverter will be returned.
 * Handles upgrade/downgrade for both major and minor updates.
 *
 * @param externalVersion VersionNumber of the internal api which the external module is using
 * @param platformVersion VersionNumber of the internal api which the platform is using
 */
function CreateExternalCompatibleVersionConverter(externalVersion, platformVersion) {
    return CreateExternalCompatibleVersionConverterWithTranslators(externalVersion, platformVersion, exports.ExecuteMinorDowngradeCallExternal, exports.ExecuteMinorUpgradeReturnExternal, exports.ExecuteMinorUpgradeNotification);
}
exports.CreateExternalCompatibleVersionConverter = CreateExternalCompatibleVersionConverter;
/**
 * Implementation of CreateExternalCompatibleVersionConverterWithTranslators.
 * This function takes the upgrade, downgrade arrays so that all the logic can be tested.
 *
 * @param externalVersion VersionNumber of the internal contract which the external module is using
 * @param platformVersion VersionNumber of the internal contract which the platform is using
 * @param upgrades MajorMinorTranslators for response upgrades
 * @param downgrades MajorMinorTranslators for execute call downgrades
 */
function CreateExternalCompatibleVersionConverterWithTranslators(externalVersion, platformVersion, downgrades, upgrades, upgradeNotifications) {
    var externalMajorVersion = externalVersion.major;
    var platformMajorVersion = platformVersion.major;
    var platformMinorVersion = platformVersion.minor;
    // This check is present in VersionConverterFactory. We throw the same error here as well.
    // Hence we only need to check the minor versions for translations.
    if (externalMajorVersion > platformMajorVersion) {
        throw new Error("External version must be less than or equal to platform version.\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    if (externalMajorVersion < platformMajorVersion || VersionConverterFactory_1.VersionEqualTo(externalVersion, platformVersion)) {
        return new ExternalIdentityVersionConverter_1.ExternalIdentityVersionConverter();
    }
    // Walk the span between the versions we have here and collect the upgrade and downgrades necessary
    var neededExecuteCallDowngrade = GetNeededExternalTranslations(platformMajorVersion, platformMinorVersion, downgrades);
    var neededExecuteReturnUpgrades = GetNeededExternalTranslations(platformMajorVersion, platformMinorVersion, upgrades);
    var neededNotificationUpgrades = GetNeededExternalTranslations(platformMajorVersion, platformMinorVersion, upgradeNotifications);
    // Reverse the downgrade calls, so that we start the downgrade from the external version to the platform version
    neededExecuteCallDowngrade.reverse();
    return new ExternalStackingVersionConverter_1.ExternalStackingVersionConverter(externalVersion, platformVersion, neededExecuteCallDowngrade, neededExecuteReturnUpgrades, neededNotificationUpgrades);
}
exports.CreateExternalCompatibleVersionConverterWithTranslators = CreateExternalCompatibleVersionConverterWithTranslators;
function GetNeededExternalTranslations(platformMajorVersion, platformMinorVersion, majorMinorTranslators) {
    var neededTranslations = [];
    if (platformMajorVersion in majorMinorTranslators) {
        var start = platformMinorVersion;
        var maximumMinorVersion = VersionConverterFactory_1.GetMaximumMinorIndex(Object.keys(majorMinorTranslators[platformMajorVersion]));
        for (var minor = start; minor <= maximumMinorVersion; minor++) {
            if (minor in majorMinorTranslators[platformMajorVersion]) {
                neededTranslations.push.apply(neededTranslations, majorMinorTranslators[platformMajorVersion][minor]);
            }
        }
    }
    return neededTranslations;
}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * The version converter is designed to allow the platform and external modules
 * to seemlessly communicate over two different versions of the internal API. This converter
 * supports external's version(minor) >= platform's version(minor). When executing
 * commands, it is used to downgrade the external representation to what platform knows on the way in
 * and upgrade the representations on the way out.
 */
var ExternalStackingVersionConverter = /** @class */ (function () {
    /**
     * Creates a new instance of the StackingVersionConverter
     *
     * @param _externalVersion The version of the internal contract api-external-js is using
     * @param _platformVersion The version of the internal contract the api-platform-js is using
     * @param _downgradeExecuteCallTranslations Ordered list of the translations to perform when downgrading cmd parameters
     * @param _upgradeExecuteReturnTranslations Ordered list of upgrade translations to perform after a cmd is executed
     * @param _upgradeNotificationTranslations Ordered list of upgrade notfications to perform on events
     */
    function ExternalStackingVersionConverter(_externalVersion, _platformVersion, _downgradeExecuteCallTranslations, _upgradeExecuteReturnTranslations, _upgradeNotificationTranslations) {
        this._externalVersion = _externalVersion;
        this._platformVersion = _platformVersion;
        this._downgradeExecuteCallTranslations = _downgradeExecuteCallTranslations;
        this._upgradeExecuteReturnTranslations = _upgradeExecuteReturnTranslations;
        this._upgradeNotificationTranslations = _upgradeNotificationTranslations;
        if (this._externalVersion.major > this._platformVersion.major) {
            throw new Error("Cannot convert between external version " + this._externalVersion.major + "\n      and " + this._platformVersion.major);
        }
    }
    ExternalStackingVersionConverter.prototype.downgradeExecuteCall = function (verb, parameters) {
        // Perform the downgrade of the verb and parameters to the level that platform is using
        var downgraded = { verb: verb, parameters: parameters };
        for (var _i = 0, _a = this._downgradeExecuteCallTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded.verb, downgraded.parameters);
        }
        return downgraded;
    };
    ExternalStackingVersionConverter.prototype.upgradeExecuteReturn = function (executeResponse) {
        // Perform the upgrade of the response to what the external module is expecting
        var upgraded = executeResponse;
        for (var _i = 0, _a = this._upgradeExecuteReturnTranslations; _i < _a.length; _i++) {
            var upgradeTranslation = _a[_i];
            upgraded = upgradeTranslation(upgraded);
        }
        return upgraded;
    };
    ExternalStackingVersionConverter.prototype.upgradeNotification = function (notification) {
        // Perform the upgrade of notification to what the external module is expecting
        var upgraded = notification;
        for (var _i = 0, _a = this._upgradeNotificationTranslations; _i < _a.length; _i++) {
            var upgradeNotification = _a[_i];
            upgraded = upgradeNotification(upgraded);
        }
        return upgraded;
    };
    return ExternalStackingVersionConverter;
}());
exports.ExternalStackingVersionConverter = ExternalStackingVersionConverter;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JsApiInternalContract_1 = __webpack_require__(1);
// 1.2 -> 1.0 Translations
// Uncomment this line to import from the V1 definition of the API
// import * as V1 from '@tableau-api-internal-contract-js_v1';
/**
 * Prior to 2019.2 (internal-contract v1.9), DataValue.value were all strings.
 * Go through all DataValue objects. If we have a string, but the type should not be a string,
 * convert it to the correct type. The type of DataValue.value is 'any' in the contract, so
 * this change doesn't need any updates to classes or types.
*/
function UpgradeDataTableTypes(executeResponse) {
    if (!executeResponse) {
        return executeResponse;
    }
    var oldUnderlyingDataTable = executeResponse.result;
    if (oldUnderlyingDataTable.data !== undefined && oldUnderlyingDataTable.isSummary !== undefined) {
        convertDataValues(oldUnderlyingDataTable.data);
        return executeResponse;
    }
    var oldSelectedMarksTable = executeResponse.result;
    if (oldSelectedMarksTable.data !== undefined && Array.isArray(oldSelectedMarksTable.data)) {
        oldSelectedMarksTable.data.forEach(function (marksTable) {
            convertDataValues(marksTable);
        });
        return executeResponse;
    }
    return executeResponse;
}
exports.UpgradeDataTableTypes = UpgradeDataTableTypes;
function convertDataValues(table) {
    // dataTable is a two-dimensional array of data. First index is the row, second is the column.
    if (table === undefined || table.dataTable === undefined || !Array.isArray(table.dataTable)) {
        return;
    }
    table.dataTable.forEach(function (row) {
        row.forEach(function (dataValue, columnIndex) {
            var value = dataValue.value;
            if (value !== null) {
                dataValue.value = convertToType(value, table.headers[columnIndex].dataType);
            }
        });
    });
}
function convertToType(valueAsString, type) {
    switch (type) {
        case JsApiInternalContract_1.DataType.Bool:
            return isSpecial(valueAsString) ? valueAsString : valueAsString.toLowerCase() === 'true';
        case JsApiInternalContract_1.DataType.Int:
        case JsApiInternalContract_1.DataType.Float:
            return isSpecial(valueAsString) ? valueAsString : Number(valueAsString);
        case JsApiInternalContract_1.DataType.Date:
        case JsApiInternalContract_1.DataType.DateTime:
        // Discrete dates are type DataType.Int, and handled above.
        // Continuous dates are just strings in this format: "YYYY-MM-DD [HH:MM:SS]"
        // fallthrough...
        case JsApiInternalContract_1.DataType.Spatial:
        case JsApiInternalContract_1.DataType.String:
        default:
            return valueAsString;
    }
}
function isSpecial(valueAsString) {
    // Special values come to us as '%null%', '%all%', '%wildcard%', '%missing%'...
    // (See DataValueFormatter.cpp)
    if (valueAsString.length > 0 && valueAsString[0] === '%' && valueAsString[valueAsString.length - 1] === '%') {
        return true;
    }
    return false;
}


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(60);
var CrossFramePreparedMessage_1 = __webpack_require__(128);
var MessageTypes_1 = __webpack_require__(40);
var MessageTypeChecks_1 = __webpack_require__(129);
/**
 * The CrossFrameMessenger is the primary export from the api-messaging module. An instance of
 * this class can be instantiated on both sides of a frame boundary to facilitate communication
 * in both directions between the frames. This class implements both the dispatcher and the listener
 * portions, but doesn't require callers to care about both.
 */
var CrossFrameMessenger = /** @class */ (function () {
    /**
     * Creates an instance of CrossFrameMessenger. If you would like to use the CrossFrameMessenger as a MessageListener,
     * be sure to call StartListening and register message handlers.
     * @param thisWindow The window object which the CrossFrameMessenger lives. An onMessage listener will be added here.
     * @param [otherWindow] Optional otherWindow which messages will be posted to.
     *                      If defined, incoming messages must originate from otherWindow to be passed on
     * @param [otherWindowOrigin] The target origin which otherWindow must have in order to receive dispatched messages.
     *                            This value will be sent as the targetOrigin of a postMessage
     *                            (https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
     */
    function CrossFrameMessenger(thisWindow, otherWindow, otherWindowOrigin) {
        this.thisWindow = thisWindow;
        this.otherWindow = otherWindow;
        this.otherWindowOrigin = otherWindowOrigin;
        // Make sure to call StartListening
    }
    ///// MessageListener Implementation
    CrossFrameMessenger.prototype.startListening = function () {
        var _this = this;
        // Check if we already are listening, if not, hook up a message listener
        if (!this.unregisterFunction) {
            var boundHandler_1 = this.onMessageReceived.bind(this);
            this.thisWindow.addEventListener('message', boundHandler_1, true);
            this.unregisterFunction = function () { return _this.thisWindow.removeEventListener('message', boundHandler_1, true); };
        }
    };
    CrossFrameMessenger.prototype.stopListening = function () {
        // Stop listening if we have started listening
        if (this.unregisterFunction) {
            this.unregisterFunction();
            this.unregisterFunction = undefined;
        }
    };
    CrossFrameMessenger.prototype.setInitializeMessageHandler = function (handler) {
        this.initializeMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setCommandResponseMessageHandler = function (handler) {
        this.commandResponseMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setCommandMessageHandler = function (handler) {
        this.commandMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setNotificationMessageHandler = function (handler) {
        this.notificationMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setHandshakeMessageHandler = function (handler) {
        this.handshakeMessageHandler = handler;
    };
    ///// MessageDispatcher Implementation
    /**
     * @param apiVersion api-internal-contract-js version (exported in JsApiInternalConntract)
     * @param crossFrameVersion crossframe messaging version (exported in JsApiInternalConntract)
     * @param options additional options that can be passed at initialization (information about the version of
     *                external being used for example)
     */
    CrossFrameMessenger.prototype.prepareInitializationMessage = function (apiVersion, crossFrameVersion, options) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Initialize,
            crossFrameVersion: crossFrameVersion,
            apiVersion: apiVersion,
            options: options
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareCommandMessage = function (verbId, parameters) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Command,
            verbId: verbId,
            parameters: parameters
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareCommandResponseMessage = function (commandGuid, data, error) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.CommandResponse,
            commandGuid: commandGuid,
            data: data,
            error: error
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareNotificationMessage = function (notificationId, data) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Notification,
            notificationId: notificationId,
            data: data
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareAckMessage = function () {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Ack
        };
        return this.prepareMessage(message);
    };
    /**
     * Prepares a pending message for sending and returns the prepared message
     *
     * @param msg The message to be sent to this.otherWindow
     * @returns The prepared message
     */
    CrossFrameMessenger.prototype.prepareMessage = function (msg) {
        if (!this.otherWindow || !this.otherWindowOrigin) {
            throw 'Other window not initialized, cannot dispatch messages';
        }
        var preparedMessage = new CrossFramePreparedMessage_1.CrossFramePreparedMessage(msg, this.otherWindow, this.otherWindowOrigin);
        return preparedMessage;
    };
    /**
     * Called when a message is received. Does some validation of the message, and then
     * calls an appropriate message handler if one is defined
     *
     * @param event The incoming MessageEvent
     */
    CrossFrameMessenger.prototype.onMessageReceived = function (event) {
        // If we have an otherWindow defined, make sure the message is coming from there
        if (this.otherWindow && event.source !== this.otherWindow) {
            return;
        }
        // Do some validation on event.data to make sure that we have received a real message
        if (!event.data) {
            return;
        }
        var message = event.data;
        if (!MessageTypeChecks_1.isMessage(message)) {
            return;
        }
        // Check the declared message type, validate the message, and call an appropriate hander if one exists
        switch (message.msgType) {
            case MessageTypes_1.MessageType.Initialize: {
                if (!MessageTypeChecks_1.isInitMessage(message) || !this.initializeMessageHandler) {
                    return;
                }
                this.initializeMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.CommandResponse: {
                if (!MessageTypeChecks_1.isCommandResponseMessage(message) || !this.commandResponseMessageHandler) {
                    return;
                }
                this.commandResponseMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Command: {
                if (!MessageTypeChecks_1.isCommandMessage(message) || !this.commandMessageHandler) {
                    return;
                }
                this.commandMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Notification: {
                if (!MessageTypeChecks_1.isNotificationMessage(message) || !this.notificationMessageHandler) {
                    return;
                }
                this.notificationMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Handshake: {
                if (!MessageTypeChecks_1.isHandshakeMessage(message) || !this.handshakeMessageHandler) {
                    return;
                }
                this.handshakeMessageHandler(message, event.source);
                break;
            }
            default:
        }
    };
    CrossFrameMessenger.prototype.setOtherWindow = function (otherWindow) {
        this.otherWindow = otherWindow;
    };
    CrossFrameMessenger.prototype.setOtherWindowOrigin = function (origin) {
        this.otherWindowOrigin = origin;
    };
    return CrossFrameMessenger;
}());
exports.CrossFrameMessenger = CrossFrameMessenger;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the PreparedMessage interface used to post messages between
 * two frames using window.postMessage
 */
var CrossFramePreparedMessage = /** @class */ (function () {
    /**
     * Creates an instance of CrossFramePreparedMessage.
     * @param _message The message to be sent
     * @param _target The target window where the message will be sent
     * @param _origin The targetOrigin where this message can be received
     */
    function CrossFramePreparedMessage(_message, _target, _origin) {
        this._message = _message;
        this._target = _target;
        this._origin = _origin;
    }
    Object.defineProperty(CrossFramePreparedMessage.prototype, "messageGuid", {
        get: function () { return this._message.msgGuid; },
        enumerable: true,
        configurable: true
    });
    CrossFramePreparedMessage.prototype.send = function () {
        this._target.postMessage(this._message, this._origin);
        return this;
    };
    return CrossFramePreparedMessage;
}());
exports.CrossFramePreparedMessage = CrossFramePreparedMessage;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(60);
var MessageTypes_1 = __webpack_require__(40);
/* tslint:disable no-any */
function isMessage(data) {
    if (!data) {
        return false;
    }
    var message = data;
    if (!message || !message.msgGuid || !message.msgType) {
        return false;
    }
    if (!guid.isGuid(message.msgGuid)) {
        return false;
    }
    if (typeof message.msgType !== 'string') {
        return false;
    }
    var messageTypes = [MessageTypes_1.MessageType.Command, MessageTypes_1.MessageType.CommandResponse, MessageTypes_1.MessageType.Initialize, MessageTypes_1.MessageType.Notification, MessageTypes_1.MessageType.Handshake];
    if (messageTypes.indexOf(message.msgType) < 0) {
        return false;
    }
    return true;
}
exports.isMessage = isMessage;
function isVersion(versionNumber) {
    if (!versionNumber) {
        return false;
    }
    var v = versionNumber;
    if (typeof v !== 'object') {
        return false;
    }
    if (typeof v.fix !== 'number' || typeof v.minor !== 'number' || typeof v.major !== 'number') {
        return false;
    }
    return true;
}
exports.isVersion = isVersion;
function isInitMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var initMessage = message;
    if (initMessage.msgType !== MessageTypes_1.MessageType.Initialize) {
        return false;
    }
    if (!initMessage.apiVersion || !isVersion(initMessage.apiVersion)) {
        return false;
    }
    if (!initMessage.crossFrameVersion || !isVersion(initMessage.crossFrameVersion)) {
        return false;
    }
    return true;
}
exports.isInitMessage = isInitMessage;
function isCommandResponseMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var crMessage = message;
    if (crMessage.msgType !== MessageTypes_1.MessageType.CommandResponse) {
        return false;
    }
    if (!guid.isGuid(crMessage.commandGuid)) {
        return false;
    }
    if (!crMessage.data && !crMessage.error) {
        return false;
    }
    return true;
}
exports.isCommandResponseMessage = isCommandResponseMessage;
function isCommandMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var commandMessage = message;
    if (commandMessage.msgType !== MessageTypes_1.MessageType.Command) {
        return false;
    }
    if (!commandMessage.parameters || typeof commandMessage.parameters !== 'object') {
        return false;
    }
    if (!commandMessage.verbId || typeof commandMessage.verbId !== 'string') {
        return false;
    }
    return true;
}
exports.isCommandMessage = isCommandMessage;
function isNotificationMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var notificationMessage = message;
    if (notificationMessage.msgType !== MessageTypes_1.MessageType.Notification) {
        return false;
    }
    if (!notificationMessage.data) {
        return false;
    }
    if (!notificationMessage.notificationId || typeof notificationMessage.notificationId !== 'string') {
        return false;
    }
    return true;
}
exports.isNotificationMessage = isNotificationMessage;
function isHandshakeMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var handshakeMessage = message;
    if (handshakeMessage.msgType !== MessageTypes_1.MessageType.Handshake) {
        return false;
    }
    return true;
}
exports.isHandshakeMessage = isHandshakeMessage;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var DashboardObject_1 = __webpack_require__(131);
var api_internal_contract_js_1 = __webpack_require__(1);
var ErrorHelpers_1 = __webpack_require__(8);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var Point_1 = __webpack_require__(132);
var SheetImpl_1 = __webpack_require__(62);
var SheetInfoImpl_1 = __webpack_require__(133);
var Size_1 = __webpack_require__(134);
var Worksheet_1 = __webpack_require__(135);
var WorksheetImpl_1 = __webpack_require__(136);
var DashboardImpl = /** @class */ (function (_super) {
    __extends(DashboardImpl, _super);
    function DashboardImpl(_info, _sheetPath) {
        var _this = _super.call(this, new SheetInfoImpl_1.SheetInfoImpl(_info.name, Tableau_1.SheetType.Dashboard, new Size_1.Size(_info.size.h, _info.size.w))) || this;
        _this._info = _info;
        _this._sheetPath = _sheetPath;
        return _this;
    }
    Object.defineProperty(DashboardImpl.prototype, "worksheets", {
        get: function () {
            return this._worksheets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardImpl.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: true,
        configurable: true
    });
    DashboardImpl.prototype.initializeWithPublicInterfaces = function (dashboard) {
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(dashboard, 'dashboard');
        this._worksheets = new Array();
        this._objects = new Array();
        // Process all the zones which are contained in this dashboard
        for (var _i = 0, _a = this._info.zones; _i < _a.length; _i++) {
            var zone = _a[_i];
            var worksheet = undefined;
            var zoneSize = new Size_1.Size(zone.height, zone.width);
            if (zone.zoneType === api_internal_contract_js_1.DashboardObjectType.Worksheet) {
                // zone.sheetInfo was not initialized prior to internal-contract 1.6.0
                var worksheetName = zone.sheetInfo ? zone.sheetInfo.name : zone.name;
                var sheetInfo = new SheetInfoImpl_1.SheetInfoImpl(worksheetName, Tableau_1.SheetType.Worksheet, zoneSize);
                var vizId = {
                    worksheet: worksheetName,
                    dashboard: this._info.name,
                    storyboard: this._sheetPath.storyboard,
                    flipboardZoneID: this._sheetPath.flipboardZoneID,
                    storyPointID: this._sheetPath.storyPointID
                };
                var worksheetImpl = new WorksheetImpl_1.WorksheetImpl(sheetInfo, vizId, dashboard);
                worksheet = new Worksheet_1.Worksheet(worksheetImpl);
                this._worksheets.push(worksheet);
            }
            var zonePoint = new Point_1.Point(zone.x, zone.y);
            var dashboardObject = new DashboardObject_1.DashboardObject(dashboard, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dashboardObjectType.convert(zone.zoneType), zonePoint, zoneSize, worksheet, zone.name, zone.isFloating || false, // before 1.6.0 we didn't have isFloating, so we assume false
            zone.isVisible || true, // before 1.6.0 we didn't have isVisible, so we assume true
            zone.zoneId);
            this._objects.push(dashboardObject);
        }
    };
    DashboardImpl.prototype.setZoneVisibilityAsync = function (zoneVisibilityMap) {
        var zoneService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("zone-service" /* Zone */);
        return zoneService.setVisibilityAsync(/*Dashboard Name*/ this.name, this.objects, zoneVisibilityMap);
    };
    return DashboardImpl;
}(SheetImpl_1.SheetImpl));
exports.DashboardImpl = DashboardImpl;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the dashboard objects - the zones in a dashboard.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var DashboardObject = /** @class */ (function () {
    function DashboardObject(_dashboard, _type, _position, _size, _worksheet, _name, _isFloating, _isVisible, _id) {
        this._dashboard = _dashboard;
        this._type = _type;
        this._position = _position;
        this._size = _size;
        this._worksheet = _worksheet;
        this._name = _name;
        this._isFloating = _isFloating;
        this._isVisible = _isVisible;
        this._id = _id;
    }
    Object.defineProperty(DashboardObject.prototype, "dashboard", {
        get: function () {
            return this._dashboard;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "worksheet", {
        get: function () {
            return this._worksheet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "isFloating", {
        get: function () {
            return this._isFloating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardObject;
}());
exports.DashboardObject = DashboardObject;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var SheetInfoImpl = /** @class */ (function () {
    function SheetInfoImpl(_name, _sheetType, _sheetSize) {
        this._name = _name;
        this._sheetType = _sheetType;
        this._sheetSize = _sheetSize;
    }
    Object.defineProperty(SheetInfoImpl.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetSize", {
        get: function () {
            return this._sheetSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetType", {
        get: function () {
            return this._sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetPath", {
        get: function () {
            return {
                sheetName: this.name,
                isDashboard: this.sheetType === Tableau_1.SheetType.Dashboard
                // TODO - Stories
            };
        },
        enumerable: true,
        configurable: true
    });
    return SheetInfoImpl;
}());
exports.SheetInfoImpl = SheetInfoImpl;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Size = /** @class */ (function () {
    function Size(_height, _width) {
        this._height = _height;
        this._width = _width;
    }
    Object.defineProperty(Size.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    return Size;
}());
exports.Size = Size;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(55);
var Worksheet = /** @class */ (function (_super) {
    __extends(Worksheet, _super);
    function Worksheet(_worksheetImpl) {
        var _this = _super.call(this, _worksheetImpl) || this;
        _this._worksheetImpl = _worksheetImpl;
        // Call to initialize events and then call down to the event listener manager to handle things
        _this._worksheetImpl.initializeEvents(_this).forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Object.defineProperty(Worksheet.prototype, "parentDashboard", {
        get: function () {
            return this._worksheetImpl.parentDashboard;
        },
        enumerable: true,
        configurable: true
    });
    Worksheet.prototype.applyFilterAsync = function (fieldName, values, updateType, options) {
        return this._worksheetImpl.applyFilterAsync(fieldName, values, updateType, options);
    };
    Worksheet.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        return this._worksheetImpl.applyRangeFilterAsync(fieldName, filterOptions);
    };
    Worksheet.prototype.clearFilterAsync = function (fieldName) {
        return this._worksheetImpl.clearFilterAsync(fieldName);
    };
    Worksheet.prototype.getDataSourcesAsync = function () {
        return this._worksheetImpl.getDataSourcesAsync();
    };
    Worksheet.prototype.getFiltersAsync = function () {
        return this._worksheetImpl.getFiltersAsync();
    };
    Worksheet.prototype.getSelectedMarksAsync = function () {
        return this._worksheetImpl.getSelectedMarksAsync();
    };
    Worksheet.prototype.getHighlightedMarksAsync = function () {
        return this._worksheetImpl.getHighlightedMarksAsync();
    };
    Worksheet.prototype.getSummaryDataAsync = function (options) {
        return this._worksheetImpl.getSummaryDataAsync(options);
    };
    Worksheet.prototype.getUnderlyingDataAsync = function (options) {
        return this._worksheetImpl.getUnderlyingDataAsync(options);
    };
    Worksheet.prototype.clearSelectedMarksAsync = function () {
        return this._worksheetImpl.clearSelectedMarksAsync();
    };
    Worksheet.prototype.selectMarksByIDAsync = function (marksInfo, updateType) {
        return this._worksheetImpl.selectMarksByIdAsync(marksInfo, updateType);
    };
    Worksheet.prototype.selectMarksByValueAsync = function (selections, selectionUpdateType) {
        return this._worksheetImpl.selectMarksByValueAsync(selections, selectionUpdateType);
    };
    Worksheet.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        return this._worksheetImpl.selectMarksByIdAsync(selections, selectionUpdateType);
    };
    return Worksheet;
}(Sheet_1.Sheet));
exports.Worksheet = Worksheet;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var DataSource_1 = __webpack_require__(63);
var DataSourceImpl_1 = __webpack_require__(64);
var SheetImpl_1 = __webpack_require__(62);
var SingleEventManagerImpl_1 = __webpack_require__(42);
var FilterChangedEvent_1 = __webpack_require__(139);
var MarksSelectedEvent_1 = __webpack_require__(140);
var GetDataService_1 = __webpack_require__(69);
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
var visualIdsAreEqual = function (a, b) {
    return a && b &&
        a.worksheet === b.worksheet &&
        a.dashboard === b.dashboard &&
        a.storyboard === b.storyboard &&
        a.storyPointID === b.storyPointID;
};
var WorksheetImpl = /** @class */ (function (_super) {
    __extends(WorksheetImpl, _super);
    function WorksheetImpl(sheetInfoImpl, _visualId, _parentDashboard) {
        var _this = _super.call(this, sheetInfoImpl) || this;
        _this._visualId = _visualId;
        _this._parentDashboard = _parentDashboard;
        return _this;
    }
    Object.defineProperty(WorksheetImpl.prototype, "parentDashboard", {
        get: function () {
            return this._parentDashboard;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method which goes through and registers each event type this impl knows about
     * with the NotificationService. It returns an array of SingleEventManager objects which
     * can then be passed to an EventListenerManager to handle user registration / unregistration.
     *
     * @param {Worksheet} worksheet The worksheet object which will be included with the event notifications
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
     */
    WorksheetImpl.prototype.initializeEvents = function (worksheet) {
        var _this = this;
        var results = new Array();
        var notificationService;
        try {
            notificationService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        // Initialize all of the event managers we'll need (one for each event type)
        var marksEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Tableau_1.TableauEventType.MarkSelectionChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SelectedMarksChanged, function (model) {
            var visualId = model;
            return visualIdsAreEqual(visualId, _this.visualId);
        }, function (viz) {
            marksEvent.triggerEvent(function () { return new MarksSelectedEvent_1.MarksSelectedEvent(worksheet); });
        });
        var filterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Tableau_1.TableauEventType.FilterChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.FilterChanged, function (model) {
            var filterEventResponse = model;
            return _this.visualId.worksheet === filterEventResponse.visualId.worksheet;
        }, function (event) {
            filterEvent.triggerEvent(function () { return new FilterChangedEvent_1.FilterChangedEvent(worksheet, event.fieldName); });
        });
        results.push(marksEvent);
        results.push(filterEvent);
        // TODO - other event types
        return results;
    };
    Object.defineProperty(WorksheetImpl.prototype, "visualId", {
        get: function () {
            return this._visualId;
        },
        enumerable: true,
        configurable: true
    });
    WorksheetImpl.prototype.applyFilterAsync = function (fieldName, values, updateType, options) {
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(updateType, Tableau_1.FilterUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyFilterAsync(this.visualId, fieldName, values, updateType, options);
    };
    WorksheetImpl.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(filterOptions, 'filterOptions');
        if (filterOptions.nullOption) {
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(filterOptions.nullOption, Tableau_1.FilterNullOption);
        }
        else {
            ErrorHelpers_1.ErrorHelpers.verifyRangeParamType(filterOptions.min, filterOptions.max);
        }
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyRangeFilterAsync(this.visualId, fieldName, filterOptions);
    };
    WorksheetImpl.prototype.clearFilterAsync = function (fieldName) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.clearFilterAsync(this.visualId, fieldName);
    };
    WorksheetImpl.prototype.getDataSourcesAsync = function () {
        var _this = this;
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return service.getDataSourcesAsync(this.visualId).then(function (result) {
            var dataSchema = result;
            var worksheetDataSourceInfo = dataSchema.worksheetDataSchemaMap[_this.name];
            var dataSources = [];
            // First, add the primary datasource.  By convention, it comes first in the returned array.
            var primaryId = worksheetDataSourceInfo.primaryDataSource;
            dataSources.push(_this.createDataSourceFromInfo(dataSchema.dataSources[primaryId]));
            // Then, loop through any secondary data sources and add them.
            for (var _i = 0, _a = worksheetDataSourceInfo.referencedDataSourceList; _i < _a.length; _i++) {
                var secondaryId = _a[_i];
                if (secondaryId !== primaryId) {
                    dataSources.push(_this.createDataSourceFromInfo(dataSchema.dataSources[secondaryId]));
                }
            }
            return dataSources;
        });
    };
    WorksheetImpl.prototype.getFiltersAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.getFiltersAsync(this.visualId);
    };
    WorksheetImpl.prototype.getSelectedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getSelectedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.getHighlightedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getHighlightedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.getSummaryDataAsync = function (options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingDataAsync(this.visualId, GetDataService_1.GetDataType.Summary, !!options.ignoreAliases, !!options.ignoreSelection, true, 0);
    };
    WorksheetImpl.prototype.getUnderlyingDataAsync = function (options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingDataAsync(this.visualId, GetDataService_1.GetDataType.Underlying, !!options.ignoreAliases, !!options.ignoreSelection, !!options.includeAllColumns, options.maxRows || 0);
    };
    WorksheetImpl.prototype.clearSelectedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.clearSelectedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.selectMarksByValueAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, Tableau_1.SelectionUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByValueAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, Tableau_1.SelectionUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByIdAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.createDataSourceFromInfo = function (dataSourceInfo) {
        var dataSourceImpl = new DataSourceImpl_1.DataSourceImpl(dataSourceInfo);
        var dataSource = new DataSource_1.DataSource(dataSourceImpl);
        dataSourceImpl.initializeWithPublicInterfaces(dataSource);
        return dataSource;
    };
    return WorksheetImpl;
}(SheetImpl_1.SheetImpl));
exports.WorksheetImpl = WorksheetImpl;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a connection summary.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var ConnectionSummary = /** @class */ (function () {
    function ConnectionSummary(_connectionInfo) {
        this._connectionInfo = _connectionInfo;
    }
    Object.defineProperty(ConnectionSummary.prototype, "name", {
        get: function () {
            return this._connectionInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "id", {
        get: function () {
            return this._connectionInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "serverURI", {
        get: function () {
            return this._connectionInfo.serverURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "type", {
        get: function () {
            return this._connectionInfo.type;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionSummary;
}());
exports.ConnectionSummary = ConnectionSummary;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a table summary.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var TableSummary = /** @class */ (function () {
    function TableSummary(_tableInfo) {
        this._tableInfo = _tableInfo;
    }
    Object.defineProperty(TableSummary.prototype, "name", {
        get: function () {
            return this._tableInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "id", {
        get: function () {
            return this._tableInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "connectionId", {
        get: function () {
            return this._tableInfo.connectionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "customSQL", {
        get: function () {
            return this._tableInfo.customSQL;
        },
        enumerable: true,
        configurable: true
    });
    return TableSummary;
}());
exports.TableSummary = TableSummary;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(5);
var TableauWorksheetEvent_1 = __webpack_require__(67);
var FilterChangedEvent = /** @class */ (function (_super) {
    __extends(FilterChangedEvent, _super);
    function FilterChangedEvent(worksheet, _fieldName) {
        var _this = _super.call(this, Tableau_1.TableauEventType.FilterChanged, worksheet) || this;
        _this._fieldName = _fieldName;
        return _this;
    }
    Object.defineProperty(FilterChangedEvent.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    FilterChangedEvent.prototype.getFilterAsync = function () {
        var _this = this;
        return this._worksheet.getFiltersAsync().then(function (filters) {
            // TODO: Filtering of the filters should eventually be done platform side.
            var eventedFilter = filters.find(function (filter) { return (filter.fieldName === _this._fieldName); });
            if (!eventedFilter) {
                // We shouldn't hit this unless the filter was removed from the worksheet
                // after the event was raised.
                throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.MissingFilter, "cannot find filter: " + _this._fieldName);
            }
            return eventedFilter;
        });
    };
    return FilterChangedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.FilterChangedEvent = FilterChangedEvent;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var TableauWorksheetEvent_1 = __webpack_require__(67);
var MarksSelectedEvent = /** @class */ (function (_super) {
    __extends(MarksSelectedEvent, _super);
    function MarksSelectedEvent(worksheet) {
        return _super.call(this, Tableau_1.TableauEventType.MarkSelectionChanged, worksheet) || this;
    }
    MarksSelectedEvent.prototype.getMarksAsync = function () {
        return this.worksheet.getSelectedMarksAsync();
    };
    return MarksSelectedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.MarksSelectedEvent = MarksSelectedEvent;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var CrossFrameDispatcher_1 = __webpack_require__(142);
// Checks to see if we are running in an iframe currently: https://stackoverflow.com/a/326076/8821153
function inIframe(thisWindow) {
    try {
        return thisWindow.self !== thisWindow.parent;
    }
    catch (e) {
        return true;
    }
}
/**
 * Attempts to bootstrap the extension with a cross-frame parent where Tableau is running
 *
 * @param thisWindow The window which we are running in (injected for unit testing purposes)
 * @param internalContractVersion The version number of the internal contract we are using
 * @returns A promise which is doing the actual bootstrapping
 */
function doCrossFrameBootstrap(thisWindow, internalContractVersion, options) {
    return new Promise(function (resolve, reject) {
        var parent;
        // Normally, we are running inside an iframe.  The exception to this is
        // when we are running as an extension inside a dialog as part of the UINamespace
        // functionality.  In that case, we want the opener of this window rather than the parent.
        if (!inIframe(thisWindow)) {
            parent = thisWindow.opener;
        }
        else {
            parent = thisWindow.parent;
        }
        if (!parent) {
            reject('This extension is not running inside an iframe, desktop, or popup window. Initialization failed.');
        }
        // Create the messenger which will do he communication between this window and our parent
        // Since we don't know where we are running yet, we have to make this initial origin '*'. Once
        // we have successfully initialized our extension, we will limit where we send messages
        var messenger = new api_internal_contract_js_1.CrossFrameMessenger(thisWindow, parent, '*');
        // Prepare to send an initialization message to the parent frame
        var initializationMessage = messenger.prepareInitializationMessage(internalContractVersion, api_internal_contract_js_1.MESSAGING_VERSION, options);
        // When we receive a response back from the parent, we check to make sure the guids match and then we know
        // that the parent is aware of us and we can start communicating
        messenger.setCommandResponseMessageHandler(function (msg) {
            // Verify we are getting a response from our initialize message
            if (msg.commandGuid === initializationMessage.messageGuid) {
                // The versioning of the dispatcher happens on the other side of our frame, and
                // in a wrapper on this side. This one doesn't have any version knowledge.
                var dispatcherFactory = function () { return new CrossFrameDispatcher_1.CrossFrameDispatcher(messenger); };
                resolve(dispatcherFactory);
            }
        });
        // Now that our handlers are ready, start listening and send our initialization message
        messenger.startListening();
        initializationMessage.send();
    });
}
exports.doCrossFrameBootstrap = doCrossFrameBootstrap;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is an implementation of the InternalApiDispatcher interface which functions by passing messages
 * across a frame boundary. This is usually between the code where our javscript library has been included
 * by a 3rd party dev and another frame where Tableau server has content.
 */
var CrossFrameDispatcher = /** @class */ (function () {
    /**
     * Creates an instance of CrossFrameDispatcher which will use the given messenger to communicate
     * @param _messenger an instantiated and listening messenger object
     */
    function CrossFrameDispatcher(_messenger) {
        this._messenger = _messenger;
        // Collection of pending promises which are waiting to be resolved. When we receive a response back from the other frame,
        // these promises can be either resolved or rejected
        this._pendingPromises = {};
        // The collection of notification handlers which have been registered with this dispatcher
        this._notificationHandlers = [];
        if (!this._messenger) {
            throw 'Missing messenger object';
        }
        // Set up our message handlers. We only care about incoming notifications and command responses
        this._messenger.setCommandResponseMessageHandler(this.onCommandResponse.bind(this));
        this._messenger.setNotificationMessageHandler(this.onNotification.bind(this));
    }
    ////// Start InternalApiDispatcher implementation
    CrossFrameDispatcher.prototype.execute = function (verb, parameters) {
        var _this = this;
        // To execute a verb, we first prepare a command message and then define a promise.
        var preparedMessage = this._messenger.prepareCommandMessage(verb, parameters);
        var promise = new Promise(function (resolve, reject) {
            // Save off the pending promise by the messageGuid we are about to send. When a response is
            // received, we'll be able to resolve this promise with the result
            _this._pendingPromises[preparedMessage.messageGuid] = { resolve: resolve, reject: reject };
        });
        // Actually send the message and return the promise
        preparedMessage.send();
        return promise;
    };
    CrossFrameDispatcher.prototype.registerNotificationHandler = function (handler) {
        this._notificationHandlers.push(handler);
    };
    CrossFrameDispatcher.prototype.unregisterNotificationHandler = function (handler) {
        this._notificationHandlers = this._notificationHandlers.filter(function (h) { return h !== handler; });
    };
    ////// End InternalApiDispatcher implementation
    CrossFrameDispatcher.prototype.onCommandResponse = function (response) {
        // We got a command response, look through the pending promises and resolve
        if (Object.keys(this._pendingPromises).indexOf(response.commandGuid) < 0) {
            return; // We don't have any reference to this command, just return
        }
        var pendingPromise = this._pendingPromises[response.commandGuid];
        // If we have an error defined, reject the promise
        if (response.error) {
            pendingPromise.reject(response.error);
        }
        // If we have data defined, resolve the promise
        if (response.data) {
            pendingPromise.resolve({ result: response.data });
        }
        // Clean up our pending promises object
        delete this._pendingPromises[response.commandGuid];
    };
    CrossFrameDispatcher.prototype.onNotification = function (notificationMessage) {
        // Go through each notification handler we have registered and let them know a notification came in
        for (var _i = 0, _a = this._notificationHandlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            try {
                handler({ notificationId: notificationMessage.notificationId, data: notificationMessage.data });
            }
            catch (e) {
                // Ignore this. Wrap in try/catch so if one handler errors, the other still get the message
            }
        }
    };
    return CrossFrameDispatcher;
}());
exports.CrossFrameDispatcher = CrossFrameDispatcher;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(7);
var DataSourceServiceImpl_1 = __webpack_require__(144);
var FilterServiceImpl_1 = __webpack_require__(145);
var GetDataServiceImpl_1 = __webpack_require__(147);
var NotificationServiceImpl_1 = __webpack_require__(148);
var ParametersServiceImpl_1 = __webpack_require__(149);
var SelectionServiceImpl_1 = __webpack_require__(153);
var ZoneServiceImpl_1 = __webpack_require__(155);
function registerAllSharedServices(dispatcher) {
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new DataSourceServiceImpl_1.DataSourceServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new GetDataServiceImpl_1.GetDataServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new FilterServiceImpl_1.FilterServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new NotificationServiceImpl_1.NotificationServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new ParametersServiceImpl_1.ParametersServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new SelectionServiceImpl_1.SelectionServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new ZoneServiceImpl_1.ZoneServiceImpl(dispatcher));
}
exports.registerAllSharedServices = registerAllSharedServices;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var TableauError_1 = __webpack_require__(5);
var Field_1 = __webpack_require__(66);
var FieldImpl_1 = __webpack_require__(65);
var DataSource_1 = __webpack_require__(63);
var DataSourceImpl_1 = __webpack_require__(64);
var DataSourceServiceImpl = /** @class */ (function (_super) {
    __extends(DataSourceServiceImpl, _super);
    function DataSourceServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataSourceServiceImpl.prototype, "serviceName", {
        get: function () {
            return "data-source-service" /* DataSourceService */;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceServiceImpl.prototype.refreshAsync = function (dataSourceId) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.DeltaTimeMs] = 0,
            _a[api_internal_contract_js_1.ParameterId.ShouldRefreshDS] = true,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.RefreshDataSource, parameters).then(function (response) {
            return;
        });
    };
    DataSourceServiceImpl.prototype.getActiveTablesAsync = function (dataSourceId) {
        var _a;
        var joinParameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetActiveTables, joinParameters).then(function (joinResponse) {
            var tableInfos = joinResponse.result;
            // getActiveTables is unsupported for cubes and GA. We do not have a connection type property
            // available from the platform (intentionally, to reduce code churn as new connections are added).
            // Instead,just check if any tables are returned. This array will be empty for any non-table based datasource.
            if (tableInfos.tables.length === 0) {
                throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.UnsupportedMethodForDataSourceType, "getActiveTables is not supported for: " + dataSourceId);
            }
            return tableInfos.tables;
        });
    };
    DataSourceServiceImpl.prototype.getDataSourcesAsync = function (visualId) {
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSources, parameters).then(function (response) {
            var dataSchema = response.result;
            return dataSchema;
        });
    };
    DataSourceServiceImpl.prototype.getConnectionSummariesAsync = function (dataSourceId) {
        var _a;
        var params = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetConnectionDescriptionSummaries, params).then(function (response) {
            var descriptionSummaries = response.result;
            return descriptionSummaries;
        });
    };
    DataSourceServiceImpl.prototype.getFieldAsync = function (fieldId) {
        var _this = this;
        var _a;
        var fieldIdComponents = this.parseFieldId(fieldId);
        var dataSourceId = fieldIdComponents[1];
        var fieldName = fieldIdComponents[2];
        var verb = api_internal_contract_js_1.VerbId.GetDataSource;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        return this.execute(verb, parameters).then(function (response) {
            var dataSource = response.result;
            var field = dataSource.fields.find(function (f) {
                return f.name === fieldName;
            });
            if (field === undefined) {
                throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, "Unable to find field with id '" + fieldId + "'");
            }
            return _this.convertField(field, _this.convertDataSource(dataSource));
        });
    };
    DataSourceServiceImpl.prototype.convertField = function (field, dataSource) {
        return new Field_1.Field(new FieldImpl_1.FieldImpl(field, dataSource));
    };
    DataSourceServiceImpl.prototype.convertDataSource = function (dataSource) {
        return new DataSource_1.DataSource(new DataSourceImpl_1.DataSourceImpl(dataSource));
    };
    DataSourceServiceImpl.prototype.parseFieldId = function (fieldId) {
        // we can expect exec to return a match to the entire field id at element 0, the datasource id at element 1
        // and the field name at element 2. Field id format is [dataSoucreId].[fieldName]
        return /^\[(.+)\]\.\[(.+)\]$/.exec(fieldId);
    };
    return DataSourceServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.DataSourceServiceImpl = DataSourceServiceImpl;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var ApiShared_1 = __webpack_require__(4);
var api_internal_contract_js_1 = __webpack_require__(1);
var ExternalToInternalEnumMappings_1 = __webpack_require__(70);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var FilterModels_1 = __webpack_require__(146);
var ServiceImplBase_1 = __webpack_require__(12);
var GetDataModels_1 = __webpack_require__(43);
var Param_1 = __webpack_require__(23);
var FilterServiceImpl = /** @class */ (function (_super) {
    __extends(FilterServiceImpl, _super);
    function FilterServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterServiceImpl.prototype, "serviceName", {
        get: function () {
            return "filter-service" /* Filter */;
        },
        enumerable: true,
        configurable: true
    });
    FilterServiceImpl.prototype.applyFilterAsync = function (visualId, fieldName, values, updateType, filterOptions) {
        var verb = api_internal_contract_js_1.VerbId.ApplyCategoricalFilter;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        if (!Array.isArray(values)) {
            throw new ApiShared_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'values parameter for applyFilterAsync must be an array');
        }
        parameters[api_internal_contract_js_1.ParameterId.FilterValues] = values;
        parameters[api_internal_contract_js_1.ParameterId.FilterUpdateType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterUpdateType.convert(updateType);
        parameters[api_internal_contract_js_1.ParameterId.IsExcludeMode] =
            (filterOptions === undefined || filterOptions.isExcludeMode === undefined) ? false : filterOptions.isExcludeMode;
        return this.execute(verb, parameters).then(function (response) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.applyRangeFilterAsync = function (visualId, fieldName, filterOptions) {
        var verb = api_internal_contract_js_1.VerbId.ApplyRangeFilter;
        var parameters = {};
        if (filterOptions.min) {
            var min = void 0;
            if (filterOptions.min instanceof Date) {
                min = Param_1.Param.serializeDateForPlatform(filterOptions.min);
            }
            else {
                min = filterOptions.min;
            }
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeMin] = min;
        }
        if (filterOptions.max) {
            var max = void 0;
            if (filterOptions.max instanceof Date) {
                max = Param_1.Param.serializeDateForPlatform(filterOptions.max);
            }
            else {
                max = filterOptions.max;
            }
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeMax] = max;
        }
        // The null option is used with min+max for 'include-range' or 'include-range-or-null'
        if (filterOptions.nullOption) {
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeNullOption] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.nullOptions.convert(filterOptions.nullOption);
        }
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        return this.execute(verb, parameters).then(function (response) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.clearFilterAsync = function (visualId, fieldName) {
        var verb = api_internal_contract_js_1.VerbId.ClearFilter;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        return this.execute(verb, parameters).then(function (resposne) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.getFiltersAsync = function (visualId) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetFilters;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        return this.execute(verb, parameters).then(function (response) {
            var filters = response.result;
            return _this.convertDomainFilters(filters);
        });
    };
    FilterServiceImpl.prototype.getCategoricalDomainAsync = function (worksheetName, fieldId, domainType) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetCategoricalDomain;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = {
            worksheet: worksheetName
        };
        parameters[api_internal_contract_js_1.ParameterId.FieldId] = fieldId;
        parameters[api_internal_contract_js_1.ParameterId.DomainType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterDomainType.convert(domainType);
        return this.execute(verb, parameters).then(function (response) {
            var domain = response.result;
            return _this.convertCategoricalDomain(domain, domainType);
        });
    };
    FilterServiceImpl.prototype.getRangeDomainAsync = function (worksheetName, fieldId, domainType) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetRangeDomain;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = {
            worksheet: worksheetName
        };
        parameters[api_internal_contract_js_1.ParameterId.FieldId] = fieldId;
        parameters[api_internal_contract_js_1.ParameterId.DomainType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterDomainType.convert(domainType);
        return this.execute(verb, parameters).then(function (response) {
            var domain = response.result;
            return _this.convertRangeDomain(domain, domainType);
        });
    };
    // Helper Methods
    FilterServiceImpl.prototype.convertDomainFilters = function (domainFilters) {
        var _this = this;
        var filters = [];
        domainFilters.forEach(function (domainFilter) {
            switch (domainFilter.filterType) {
                case api_internal_contract_js_1.FilterType.Categorical: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertCategoricalFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Categorical Filter');
                    }
                    break;
                }
                case api_internal_contract_js_1.FilterType.Range: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertRangeFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Range Filter');
                    }
                    break;
                }
                case api_internal_contract_js_1.FilterType.RelativeDate: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertRelativeDateFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Relative Date Filter');
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        });
        return filters;
    };
    FilterServiceImpl.prototype.convertCategoricalFilter = function (domainFilter) {
        var appliedValues = domainFilter.values.map(function (dv) {
            return new GetDataModels_1.DataValue(dv.value, dv.formattedValue);
        });
        return new FilterModels_1.CategoricalFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, api_internal_contract_js_1.FilterType.Categorical, appliedValues, domainFilter.isExclude, domainFilter.isAllSelected);
    };
    FilterServiceImpl.prototype.convertRangeFilter = function (domainFilter) {
        var minValue = new GetDataModels_1.DataValue(domainFilter.min.value, domainFilter.min.formattedValue);
        var maxValue = new GetDataModels_1.DataValue(domainFilter.max.value, domainFilter.max.formattedValue);
        return new FilterModels_1.RangeFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, api_internal_contract_js_1.FilterType.Range, minValue, maxValue, domainFilter.includeNullValues);
    };
    FilterServiceImpl.prototype.convertRelativeDateFilter = function (domainFilter) {
        var anchorDateValue = new GetDataModels_1.DataValue(domainFilter.anchorDate.value, domainFilter.anchorDate.formattedValue);
        return new FilterModels_1.RelativeDateFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Tableau_1.FilterType.RelativeDate, anchorDateValue, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(domainFilter.periodType), InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateRangeType.convert(domainFilter.rangeType), domainFilter.rangeN);
    };
    FilterServiceImpl.prototype.convertCategoricalDomain = function (domain, domainType) {
        var values = domain.values.map(function (domainDv) {
            return new GetDataModels_1.DataValue(domainDv.value, domainDv.formattedValue);
        });
        return new FilterModels_1.CategoricalDomain(values, domainType);
    };
    FilterServiceImpl.prototype.convertRangeDomain = function (domain, domainType) {
        var min = new GetDataModels_1.DataValue(domain.min.value, domain.min.formattedValue);
        var max = new GetDataModels_1.DataValue(domain.max.value, domain.max.formattedValue);
        return new FilterModels_1.RangeDomain(min, max, domainType);
    };
    return FilterServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.FilterServiceImpl = FilterServiceImpl;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
var Filter = /** @class */ (function () {
    function Filter(_worksheetName, _fieldName, _filterType, _fieldId) {
        this._worksheetName = _worksheetName;
        this._fieldName = _fieldName;
        this._filterType = _filterType;
        this._fieldId = _fieldId;
    }
    Object.defineProperty(Filter.prototype, "worksheetName", {
        get: function () {
            return this._worksheetName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "fieldId", {
        get: function () {
            return this._fieldId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "filterType", {
        get: function () {
            return this._filterType;
        },
        enumerable: true,
        configurable: true
    });
    Filter.prototype.getFieldAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return service.getFieldAsync(this._fieldId);
    };
    return Filter;
}());
exports.Filter = Filter;
var CategoricalFilter = /** @class */ (function (_super) {
    __extends(CategoricalFilter, _super);
    function CategoricalFilter(worksheetName, fieldName, fieldId, filterType, _appliedValues, _isExcludeMode, _isAllSelected) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._appliedValues = _appliedValues;
        _this._isExcludeMode = _isExcludeMode;
        _this._isAllSelected = _isAllSelected;
        return _this;
    }
    Object.defineProperty(CategoricalFilter.prototype, "isAllSelected", {
        get: function () {
            return this._isAllSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalFilter.prototype, "appliedValues", {
        get: function () {
            return this._appliedValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalFilter.prototype, "isExcludeMode", {
        get: function () {
            return this._isExcludeMode;
        },
        enumerable: true,
        configurable: true
    });
    CategoricalFilter.prototype.getDomainAsync = function (domainType) {
        if (!domainType) {
            domainType = Tableau_1.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, Tableau_1.FilterDomainType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.getCategoricalDomainAsync(this._worksheetName, this._fieldId, domainType);
    };
    return CategoricalFilter;
}(Filter));
exports.CategoricalFilter = CategoricalFilter;
var RangeFilter = /** @class */ (function (_super) {
    __extends(RangeFilter, _super);
    function RangeFilter(worksheetName, fieldName, fieldId, filterType, _min, _max, _includeNullValues) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._min = _min;
        _this._max = _max;
        _this._includeNullValues = _includeNullValues;
        return _this;
    }
    Object.defineProperty(RangeFilter.prototype, "minValue", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeFilter.prototype, "maxValue", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeFilter.prototype, "includeNullValues", {
        get: function () {
            return this._includeNullValues;
        },
        enumerable: true,
        configurable: true
    });
    RangeFilter.prototype.getDomainAsync = function (domainType) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        if (!domainType) {
            domainType = Tableau_1.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, Tableau_1.FilterDomainType);
        return service.getRangeDomainAsync(this._worksheetName, this._fieldId, domainType);
    };
    return RangeFilter;
}(Filter));
exports.RangeFilter = RangeFilter;
var RelativeDateFilter = /** @class */ (function (_super) {
    __extends(RelativeDateFilter, _super);
    function RelativeDateFilter(worksheetName, fieldName, fieldId, filterType, _anchorDate, _periodType, _rangeType, _rangeN) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._anchorDate = _anchorDate;
        _this._periodType = _periodType;
        _this._rangeType = _rangeType;
        _this._rangeN = _rangeN;
        return _this;
    }
    Object.defineProperty(RelativeDateFilter.prototype, "anchorDate", {
        get: function () {
            return this._anchorDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "periodType", {
        get: function () {
            return this._periodType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "rangeType", {
        get: function () {
            return this._rangeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "rangeN", {
        get: function () {
            return this._rangeN;
        },
        enumerable: true,
        configurable: true
    });
    return RelativeDateFilter;
}(Filter));
exports.RelativeDateFilter = RelativeDateFilter;
var CategoricalDomain = /** @class */ (function () {
    function CategoricalDomain(_values, _domainType) {
        this._values = _values;
        this._domainType = _domainType;
    }
    Object.defineProperty(CategoricalDomain.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalDomain.prototype, "type", {
        get: function () {
            return this._domainType;
        },
        enumerable: true,
        configurable: true
    });
    return CategoricalDomain;
}());
exports.CategoricalDomain = CategoricalDomain;
var RangeDomain = /** @class */ (function () {
    function RangeDomain(_min, _max, _domainType) {
        this._min = _min;
        this._max = _max;
        this._domainType = _domainType;
    }
    Object.defineProperty(RangeDomain.prototype, "type", {
        get: function () {
            return this._domainType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeDomain.prototype, "min", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeDomain.prototype, "max", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    return RangeDomain;
}());
exports.RangeDomain = RangeDomain;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var GetDataModels_1 = __webpack_require__(43);
var GetDataService_1 = __webpack_require__(69);
var GetDataServiceImpl = /** @class */ (function (_super) {
    __extends(GetDataServiceImpl, _super);
    function GetDataServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetDataServiceImpl.prototype, "serviceName", {
        get: function () {
            return "get-data-service" /* GetData */;
        },
        enumerable: true,
        configurable: true
    });
    GetDataServiceImpl.prototype.getMaxRowLimit = function () {
        return 10000;
    };
    GetDataServiceImpl.prototype.getLimitedMaxRows = function (requestedRows) {
        var rowCountLimit = this.getMaxRowLimit() + 1;
        return (requestedRows > 0 && requestedRows < rowCountLimit) ? requestedRows : rowCountLimit;
    };
    GetDataServiceImpl.prototype.getUnderlyingDataAsync = function (visualId, getType, ignoreAliases, ignoreSelection, includeAllColumns, maxRows) {
        var _this = this;
        // Create all of our parameters
        var verb = getType === GetDataService_1.GetDataType.Summary ? api_internal_contract_js_1.VerbId.GetDataSummaryData : api_internal_contract_js_1.VerbId.GetUnderlyingData;
        var requestMaxRows = verb === api_internal_contract_js_1.VerbId.GetUnderlyingData ? this.getLimitedMaxRows(maxRows) : maxRows;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreSelection] = ignoreSelection;
        parameters[api_internal_contract_js_1.ParameterId.IncludeAllColumns] = includeAllColumns;
        parameters[api_internal_contract_js_1.ParameterId.MaxRows] = requestMaxRows;
        return this.execute(verb, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, responseData.isSummary);
        });
    };
    GetDataServiceImpl.prototype.getSelectedMarksAsync = function (visualId) {
        var _this = this;
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetSelectedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
    };
    GetDataServiceImpl.prototype.getHighlightedMarksAsync = function (visualId) {
        var _this = this;
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetHighlightedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
    };
    GetDataServiceImpl.prototype.getDataSourceDataAsync = function (dataSourceId, ignoreAliases, maxRows, columnsToInclude) {
        var _this = this;
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases,
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = this.getLimitedMaxRows(maxRows),
            _a[api_internal_contract_js_1.ParameterId.ColumnsToInclude] = columnsToInclude,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSourceData, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, false);
        });
    };
    GetDataServiceImpl.prototype.processResultsTable = function (responseData, isSummary) {
        var headers = responseData.headers.map(function (h) { return new GetDataModels_1.Column(h.fieldCaption, h.dataType, h.isReferenced, h.index); });
        // TODO This should be controlled by a flag indicating whether this api will respond marks info or not
        var marks;
        if (responseData.marks) {
            marks = responseData.marks.map(function (h) { return new GetDataModels_1.MarkInfo(h.type, h.color, h.tupleId); });
        }
        // Limit+1 is our sentinal that underlying data contains more rows than user is allowed to fetch.
        // Remove the last element so we always return MaxRowLimit
        var isTotalRowCountLimited = isSummary === false && responseData.dataTable.length === this.getMaxRowLimit() + 1;
        if (isTotalRowCountLimited) {
            responseData.dataTable.length -= 1;
        }
        var table = responseData.dataTable.map(function (row) {
            return row.map(function (cell) {
                return new GetDataModels_1.DataValue(cell.value, cell.formattedValue);
            });
        });
        if (marks) {
            return new GetDataModels_1.DataTable(table, headers, table.length, isTotalRowCountLimited, isSummary, marks);
        }
        return new GetDataModels_1.DataTable(table, headers, table.length, isTotalRowCountLimited, isSummary);
    };
    return GetDataServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.GetDataServiceImpl = GetDataServiceImpl;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registration = /** @class */ (function () {
    function Registration(_filterFn, _callbackFn) {
        this._filterFn = _filterFn;
        this._callbackFn = _callbackFn;
        // Nothing Here
    }
    Registration.prototype.onNotification = function (notificationModel) {
        if (this._filterFn(notificationModel)) {
            this._callbackFn(notificationModel);
        }
    };
    return Registration;
}());
var NotificationServiceImpl = /** @class */ (function () {
    function NotificationServiceImpl(dispatcher) {
        this.dispatcher = dispatcher;
        this._handlers = {};
        this.dispatcher.registerNotificationHandler(this.onNotification.bind(this));
    }
    Object.defineProperty(NotificationServiceImpl.prototype, "serviceName", {
        get: function () {
            return "notification-service" /* Notification */;
        },
        enumerable: true,
        configurable: true
    });
    NotificationServiceImpl.prototype.registerHandler = function (id, filterFn, handler) {
        var _this = this;
        var handlers = this._handlers[id] || new Array();
        var registration = new Registration(filterFn, handler);
        handlers.push(registration);
        this._handlers[id] = handlers;
        return function () { return _this.removeRegistration(id, registration); };
    };
    NotificationServiceImpl.prototype.hasHandlersForNotificationType = function (id) {
        return this._handlers.hasOwnProperty(id);
    };
    NotificationServiceImpl.prototype.onNotification = function (notification) {
        if (!this.hasHandlersForNotificationType(notification.notificationId)) {
            return;
        }
        // Go through and check for all the handlers of this particular notification
        this._handlers[notification.notificationId].forEach(function (h) { return h.onNotification(notification.data); });
    };
    NotificationServiceImpl.prototype.removeRegistration = function (id, registration) {
        if (!this.hasHandlersForNotificationType(id)) {
            return;
        }
        this._handlers[id] = this._handlers[id].filter(function (reg) { return reg !== registration; });
    };
    return NotificationServiceImpl;
}());
exports.NotificationServiceImpl = NotificationServiceImpl;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var ParameterImpl_1 = __webpack_require__(150);
var Parameter_1 = __webpack_require__(152);
var TableauError_1 = __webpack_require__(5);
var ParametersServiceImpl = /** @class */ (function (_super) {
    __extends(ParametersServiceImpl, _super);
    function ParametersServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ParametersServiceImpl.prototype, "serviceName", {
        get: function () {
            return "parameters-service" /* Parameters */;
        },
        enumerable: true,
        configurable: true
    });
    ParametersServiceImpl.prototype.getParametersForSheetAsync = function (sheetPath, sheet) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.SheetPath] = sheetPath,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetParametersForSheet, parameters).then(function (response) {
            // TODO - Check for error
            var result = response.result;
            return result.map(function (parameterInfo) {
                var impl = new ParameterImpl_1.ParameterImpl(parameterInfo);
                return new Parameter_1.Parameter(impl, sheet);
            });
        });
    };
    ParametersServiceImpl.prototype.changeParameterValueAsync = function (fieldName, newValue) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName,
            _a[api_internal_contract_js_1.ParameterId.ParameterValue] = newValue,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.ChangeParameterValue, parameters).then(function (response) {
            var result = response.result;
            return result;
        });
    };
    ParametersServiceImpl.prototype.findParameterByNameAsync = function (name, sheet) {
        return this.findParameterAsync(sheet, name, undefined);
    };
    ParametersServiceImpl.prototype.findParameterByGlobalFieldNameAsync = function (fieldName, sheet) {
        return this.findParameterAsync(sheet, undefined, fieldName);
    };
    ParametersServiceImpl.prototype.findParameterAsync = function (sheet, name, fieldName) {
        var parameters = {};
        if (name !== undefined) {
            parameters[api_internal_contract_js_1.ParameterId.ParameterCaption] = name;
        }
        else if (fieldName !== undefined) {
            parameters[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName;
        }
        else {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'name or fieldName must be provided to find parameter');
        }
        return this.execute(api_internal_contract_js_1.VerbId.FindParameter, parameters).then(function (response) {
            var instanceOfParameterInfo = function (object) {
                return 'fieldName' in object;
            };
            // We need to check to see if we got a valid response back again
            if (instanceOfParameterInfo(response.result)) {
                var result = response.result;
                var impl = new ParameterImpl_1.ParameterImpl(result);
                return new Parameter_1.Parameter(impl, sheet);
            }
            else {
                return undefined;
            }
        });
    };
    return ParametersServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.ParametersServiceImpl = ParametersServiceImpl;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var ParameterChangedEvent_1 = __webpack_require__(151);
var GetDataModels_1 = __webpack_require__(43);
var ServiceRegistry_1 = __webpack_require__(7);
var SingleEventManagerImpl_1 = __webpack_require__(42);
var ErrorHelpers_1 = __webpack_require__(8);
var Param_1 = __webpack_require__(23);
var ParameterImpl = /** @class */ (function () {
    function ParameterImpl(parameterInfo) {
        this.setParameterInfo(parameterInfo);
    }
    Object.defineProperty(ParameterImpl.prototype, "name", {
        get: function () {
            return this._parameterInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "currentValue", {
        get: function () {
            return new GetDataModels_1.DataValue(this._parameterInfo.currentValue.value, this._parameterInfo.currentValue.formattedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "dataType", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dataType.convert(this._parameterInfo.dataType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "id", {
        get: function () {
            return this._globalFieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "allowableValues", {
        get: function () {
            return this._allowableValues;
        },
        enumerable: true,
        configurable: true
    });
    ParameterImpl.prototype.changeValueAsync = function (newValue) {
        var _this = this;
        ErrorHelpers_1.ErrorHelpers.verifyParameter(newValue, 'newValue');
        var coercedValue = Param_1.Param.serializeParameterValue(newValue);
        var parametersService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return parametersService.changeParameterValueAsync(this._globalFieldName, coercedValue).then(function (parameterInfo) {
            _this.setParameterInfo(parameterInfo);
            return _this.currentValue;
        });
    };
    /**
     * Helper method which goes through and registers each event type this impl knows about
     * with the NotificationService. It returns an array of SingleEventManager objects which
     * can then be passed to an EventListenerManager to handle user registration / unregistration.
     *
     * @param sheet The sheet object which will be included with the event notifications
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
     */
    ParameterImpl.prototype.initializeEvents = function (sheet) {
        var _this = this;
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(sheet, 'sheet');
        var results = new Array();
        var notificationService;
        try {
            notificationService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        // Initialize all of the event managers we'll need (one for each event type)
        var parameterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Tableau_1.TableauEventType.ParameterChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ParameterChanged, function (model) {
            var fieldName = model;
            return fieldName === _this._globalFieldName;
        }, function (fieldName) {
            parameterEvent.triggerEvent(function () { return new ParameterChangedEvent_1.ParameterChangedEvent(fieldName, sheet); });
        });
        results.push(parameterEvent);
        return results;
    };
    ParameterImpl.prototype.setParameterInfo = function (parameterInfo) {
        this._parameterInfo = parameterInfo;
        this._globalFieldName = parameterInfo.fieldName;
        var type = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.allowableValues.convert(parameterInfo.allowableValuesType);
        var listValues;
        var minValue;
        var maxValue;
        var stepSize;
        var dateStepPeriod;
        if (type === Tableau_1.ParameterValueType.List) {
            var values = parameterInfo.allowableValues || [];
            listValues = values.map(function (val) { return new GetDataModels_1.DataValue(val.value, val.formattedValue); });
        }
        else if (type === Tableau_1.ParameterValueType.Range) {
            minValue = parameterInfo.minValue && new GetDataModels_1.DataValue(parameterInfo.minValue.value, parameterInfo.minValue.formattedValue);
            maxValue = parameterInfo.maxValue && new GetDataModels_1.DataValue(parameterInfo.maxValue.value, parameterInfo.maxValue.formattedValue);
            stepSize = parameterInfo.stepSize;
            dateStepPeriod = parameterInfo.dateStepPeriod &&
                InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(parameterInfo.dateStepPeriod);
        }
        this._allowableValues = {
            type: type,
            allowableValues: listValues,
            minValue: minValue,
            maxValue: maxValue,
            stepSize: stepSize,
            dateStepPeriod: dateStepPeriod
        };
    };
    return ParameterImpl;
}());
exports.ParameterImpl = ParameterImpl;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var TableauError_1 = __webpack_require__(5);
var TableauSheetEvent_1 = __webpack_require__(68);
var ParameterChangedEvent = /** @class */ (function (_super) {
    __extends(ParameterChangedEvent, _super);
    function ParameterChangedEvent(_globalFieldName, sheet) {
        var _this = _super.call(this, Tableau_1.TableauEventType.ParameterChanged, sheet) || this;
        _this._globalFieldName = _globalFieldName;
        return _this;
    }
    ParameterChangedEvent.prototype.getParameterAsync = function () {
        var _this = this;
        // Call down to our service to get the parameter back via its field name
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByGlobalFieldNameAsync(this._globalFieldName, this.sheet).then(function (parameter) {
            if (parameter === undefined) {
                throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.MissingParameter, "Cannot find parameter: " + _this._globalFieldName);
            }
            return parameter;
        });
    };
    return ParameterChangedEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.ParameterChangedEvent = ParameterChangedEvent;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(39);
/**
 * Implementation of the Parameter contract. Calls down to the impl
 * class for almost all of the work it does.
 */
var Parameter = /** @class */ (function (_super) {
    __extends(Parameter, _super);
    function Parameter(parameterImpl, sheet) {
        var _this = _super.call(this) || this;
        _this.parameterImpl = parameterImpl;
        // Initialize our event handling for this class
        _this.parameterImpl.initializeEvents(sheet).forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Object.defineProperty(Parameter.prototype, "name", {
        get: function () {
            return this.parameterImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "currentValue", {
        get: function () {
            return this.parameterImpl.currentValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "dataType", {
        get: function () {
            return this.parameterImpl.dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "allowableValues", {
        get: function () {
            return this.parameterImpl.allowableValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "id", {
        get: function () {
            return this.parameterImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Parameter.prototype.changeValueAsync = function (newValue) {
        return this.parameterImpl.changeValueAsync(newValue);
    };
    return Parameter;
}(EventListenerManager_1.EventListenerManager));
exports.Parameter = Parameter;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionModels_1 = __webpack_require__(154);
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var Param_1 = __webpack_require__(23);
var ServiceImplBase_1 = __webpack_require__(12);
var TableauError_1 = __webpack_require__(5);
var SelectionServiceImpl = /** @class */ (function (_super) {
    __extends(SelectionServiceImpl, _super);
    function SelectionServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SelectionServiceImpl.prototype, "serviceName", {
        get: function () {
            return "selection-service" /* Selection */;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to clear all the selected marks for the given worksheet.
     *
     * @param visualId
     */
    SelectionServiceImpl.prototype.clearSelectedMarksAsync = function (visualId) {
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.ClearSelectedMarks, parameters).then(function (response) {
            return; // Expecting an empty model and hence the void response.
        });
    };
    /**
     * Method to select marks for the given worksheet.
     *
     * @param visualId
     * @param selectionCriteria
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.selectMarksByValueAsync = function (visualId, selectionCriterias, selectionUpdateType) {
        var _a;
        if (selectionCriterias.length === 0) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'Selection criteria missing for selecting marks by value');
        }
        var selectionType = this.validateSelectionUpdateType(selectionUpdateType);
        var selectionCriteriaType = this.validateSelectionCriteria(selectionCriterias[0]);
        var selectionModelContainer = this.parseSelectionMarks(selectionCriterias, selectionCriteriaType);
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.SelectionUpdateType] = selectionType,
            _a);
        switch (selectionCriteriaType) {
            case SelectionCriteriaType.HierarchicalType: {
                parameters[api_internal_contract_js_1.ParameterId.HierValSelectionModels] = selectionModelContainer.hierModelArr;
                break;
            }
            case SelectionCriteriaType.RangeType: {
                parameters[api_internal_contract_js_1.ParameterId.QuantRangeSelectionModels] = selectionModelContainer.quantModelArr;
                break;
            }
            case SelectionCriteriaType.DimensionType: {
                parameters[api_internal_contract_js_1.ParameterId.DimValSelectionModels] = selectionModelContainer.dimModelArr;
                break;
            }
            default:
                break;
        }
        return this.execute(api_internal_contract_js_1.VerbId.SelectByValue, parameters).then(function (response) {
            // Expecting an empty model and hence the void response.
            return;
            // TODO Investigate the error response with multiple output params and throw error accordingly.
        });
    };
    /**
   * Method to select marks for the given worksheet.
   *
   * @param visualId
   * @param MarkInfo
   * @param selectionUpdateType
   */
    SelectionServiceImpl.prototype.selectMarksByIdAsync = function (visualId, marks, selectionUpdateType) {
        var _a;
        if (marks.length === 0) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'Marks info missing for selecting marks by Id');
        }
        var selectionType = this.validateSelectionUpdateType(selectionUpdateType);
        var selectionModelContainer = this.parseSelectionIds(marks);
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.SelectionUpdateType] = selectionType,
            _a[api_internal_contract_js_1.ParameterId.Selection] = selectionModelContainer.selection,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.SelectByValue, parameters).then(function (response) {
            // Expecting an empty model and hence the void response.
            return;
            // TODO Investigate the error response with multiple output params and throw error accordingly.
        });
    };
    /**
     * Method to prepare the pres models for selection by MarksInfo
     * @param marks
     */
    SelectionServiceImpl.prototype.parseSelectionIds = function (marks) {
        var ids = [];
        var selectionModelContainer = new SelectionModels_1.SelectionModelsContainer();
        for (var i = 0; i < marks.length; i++) {
            var tupleId = marks[i].tupleId;
            if (tupleId !== undefined && tupleId !== null) { // If tuple id is provided use that instead of pair
                ids.push(tupleId.toString()); // collect the tuple ids
            }
            else {
                throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, 'tupleId parsing error');
            }
        }
        if (ids.length !== 0) { // tuple ids based selection
            var tupleSelectionModel = new SelectionModels_1.TupleSelectionModel();
            tupleSelectionModel.selectionType = 'tuples';
            tupleSelectionModel.objectIds = ids;
            selectionModelContainer.selection = tupleSelectionModel;
        }
        return selectionModelContainer;
    };
    /**
     * Method to prepare the pres models for selection by values.
     *
     * Supports 3 types for selection:
     * 1) hierarchical value based selection
     * 2) range value based selection
     * 3) Dimension value based selection
     *
     * @param marks
     * @param hierModelArr
     * @param dimModelArr
     * @param quantModelArr
     * @param selection
     */
    SelectionServiceImpl.prototype.parseSelectionMarks = function (selectionCriterias, selectionType) {
        var selectionModelContainer = new SelectionModels_1.SelectionModelsContainer();
        var mixedSelectionsError = false;
        for (var i = 0; i < selectionCriterias.length; i++) {
            var st = selectionCriterias[i];
            if (st.fieldName && (st.value !== undefined && st.value !== null)) {
                var catRegex = new RegExp('(\[[A-Za-z0-9]+]).*', 'g');
                var rangeOption = st.value;
                if (catRegex.test(st.fieldName)) { // Hierarchical value selection
                    if (selectionType === SelectionCriteriaType.HierarchicalType) {
                        var hierModel = this.addToParamsList(st.fieldName, st.value);
                        selectionModelContainer.hierModelArr.push(hierModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
                else if (rangeOption.min !== undefined
                    && rangeOption.max !== undefined) { // Range value selection
                    if (selectionType === SelectionCriteriaType.RangeType) {
                        var quantModel = this.addToRangeParamsList(st.fieldName, rangeOption);
                        selectionModelContainer.quantModelArr.push(quantModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
                else { // Dimension value selection
                    if (selectionType === SelectionCriteriaType.DimensionType) {
                        var dimModel = this.addToParamsList(st.fieldName, st.value);
                        selectionModelContainer.dimModelArr.push(dimModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
            }
        }
        if (mixedSelectionsError) {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, 'Selection Criteria parsing error');
        }
        return selectionModelContainer;
    };
    /**
     *
     * @param selectionCriterias Validate and determine the selection criterias type.
     */
    SelectionServiceImpl.prototype.validateSelectionCriteria = function (selectionCriteria) {
        var selectionType;
        // Determine the type of selection, this command is by looking at the first selection
        var crit = selectionCriteria;
        var catRegex = new RegExp('(\[[A-Za-z0-9]+]).*', 'g');
        var rangeOption = crit.value;
        if (crit.fieldName && (crit.value !== undefined && crit.value !== null)) {
            if (catRegex.test(crit.fieldName)) { // Hierarchical value selection
                selectionType = SelectionCriteriaType.HierarchicalType;
            }
            else if (rangeOption.min !== undefined
                && rangeOption.max !== undefined) { // Range value selection
                selectionType = SelectionCriteriaType.RangeType;
            }
            else { // Dimersion value selection
                selectionType = SelectionCriteriaType.DimensionType;
            }
        }
        else {
            throw new TableauError_1.TableauError(Tableau_1.ErrorCodes.InternalError, 'Selection Criteria parsing error');
        }
        return selectionType;
    };
    /**
     * Method to transform the key value pair into value based pres model object.
     *
     * @param valueSelectionModel
     * @param fieldName
     * @param value
     */
    SelectionServiceImpl.prototype.addToParamsList = function (fieldName, value) {
        var valueSelectionModel = new SelectionModels_1.ValueSelectionModel();
        var markValues = [];
        if (value instanceof Array) {
            var valueArr = value;
            for (var i = 0; i < valueArr.length; i++) {
                markValues.push(Param_1.Param.serializeParameterValue(valueArr[i]));
            }
        }
        else {
            markValues.push(Param_1.Param.serializeParameterValue(value));
        }
        valueSelectionModel.qualifiedFieldCaption = fieldName;
        valueSelectionModel.selectValues = markValues;
        return valueSelectionModel;
    };
    /**
     * Method to transform the key value pair into range based selection pres model.
     *
     * TODO: Need to handle the parsing of date type values.
     *
     * @param valueSelectionModel
     * @param fieldName
     * @param value
     */
    SelectionServiceImpl.prototype.addToRangeParamsList = function (fieldName, value) {
        var rangeSelectionModel = new SelectionModels_1.RangeSelectionModel();
        rangeSelectionModel.qualifiedFieldCaption = fieldName;
        if (value.max !== undefined && value.max !== null) {
            rangeSelectionModel.maxValue = Param_1.Param.serializeParameterValue(value.max);
        }
        if (value.min !== undefined && value.min !== null) {
            rangeSelectionModel.minValue = Param_1.Param.serializeParameterValue(value.min);
        }
        rangeSelectionModel.included = this.validateNullOptionType(value.nullOption);
        return rangeSelectionModel;
    };
    /**
     * Method to validate the selection update type.
     *
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.validateSelectionUpdateType = function (selectionUpdateType) {
        if (selectionUpdateType === Tableau_1.SelectionUpdateType.Replace) {
            return api_internal_contract_js_1.SelectionUpdateType.Replace;
        }
        else if (selectionUpdateType === Tableau_1.SelectionUpdateType.Add) {
            return api_internal_contract_js_1.SelectionUpdateType.Add;
        }
        else if (selectionUpdateType === Tableau_1.SelectionUpdateType.Remove) {
            return api_internal_contract_js_1.SelectionUpdateType.Remove;
        }
        return api_internal_contract_js_1.SelectionUpdateType.Replace;
    };
    /**
     * Method to validate the include type for range selection.
     *
     * @param nullOption
     */
    SelectionServiceImpl.prototype.validateNullOptionType = function (nullOption) {
        if (nullOption) {
            if (nullOption === Tableau_1.FilterNullOption.NullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNull;
            }
            else if (nullOption === Tableau_1.FilterNullOption.NonNullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNonNull;
            }
            else if (nullOption === Tableau_1.FilterNullOption.AllValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeAll;
            }
        }
        return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeAll;
    };
    return SelectionServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.SelectionServiceImpl = SelectionServiceImpl;
/**
 * Enum for the different selection criteria types.
 */
var SelectionCriteriaType;
(function (SelectionCriteriaType) {
    SelectionCriteriaType[SelectionCriteriaType["HierarchicalType"] = 1] = "HierarchicalType";
    SelectionCriteriaType[SelectionCriteriaType["RangeType"] = 2] = "RangeType";
    SelectionCriteriaType[SelectionCriteriaType["DimensionType"] = 3] = "DimensionType";
    SelectionCriteriaType[SelectionCriteriaType["TuplesType"] = 4] = "TuplesType";
})(SelectionCriteriaType || (SelectionCriteriaType = {}));


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Selection Model.
 */
var SelectionModel = /** @class */ (function () {
    function SelectionModel() {
    }
    return SelectionModel;
}());
exports.SelectionModel = SelectionModel;
/**
 * Value based selection model. Meant for hierarchical, range and categorical selections.
 */
var ValueSelectionModel = /** @class */ (function (_super) {
    __extends(ValueSelectionModel, _super);
    function ValueSelectionModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectValues = [];
        return _this;
    }
    return ValueSelectionModel;
}(SelectionModel));
exports.ValueSelectionModel = ValueSelectionModel;
/**
 * Hierarchical value selection model
 */
var HierarchicalSelectionModel = /** @class */ (function (_super) {
    __extends(HierarchicalSelectionModel, _super);
    function HierarchicalSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HierarchicalSelectionModel;
}(ValueSelectionModel));
exports.HierarchicalSelectionModel = HierarchicalSelectionModel;
/**
 * Range based value selection model
 */
var RangeSelectionModel = /** @class */ (function (_super) {
    __extends(RangeSelectionModel, _super);
    function RangeSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RangeSelectionModel;
}(SelectionModel));
exports.RangeSelectionModel = RangeSelectionModel;
/**
 * Dimension value selection model
 */
var DimensionSelectionModel = /** @class */ (function (_super) {
    __extends(DimensionSelectionModel, _super);
    function DimensionSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DimensionSelectionModel;
}(ValueSelectionModel));
exports.DimensionSelectionModel = DimensionSelectionModel;
/**
 * Tuple based selection model
 */
var TupleSelectionModel = /** @class */ (function () {
    function TupleSelectionModel() {
        this.objectIds = [];
    }
    return TupleSelectionModel;
}());
exports.TupleSelectionModel = TupleSelectionModel;
/**
 * Container class to populate all the selection models when parsing input
 */
var SelectionModelsContainer = /** @class */ (function () {
    function SelectionModelsContainer() {
        this.hierModelArr = [];
        this.dimModelArr = [];
        this.quantModelArr = [];
    }
    return SelectionModelsContainer;
}());
exports.SelectionModelsContainer = SelectionModelsContainer;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var ErrorHelpers_1 = __webpack_require__(8);
var ExternalToInternalEnumMappings_1 = __webpack_require__(70);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var ZoneServiceImpl = /** @class */ (function (_super) {
    __extends(ZoneServiceImpl, _super);
    function ZoneServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ZoneServiceImpl.prototype, "serviceName", {
        get: function () {
            return "zone-service" /* Zone */;
        },
        enumerable: true,
        configurable: true
    });
    ZoneServiceImpl.prototype.setVisibilityAsync = function (dashboard, dashboardObjects, zoneVisibilityMap) {
        var _a;
        Object.keys(zoneVisibilityMap).forEach(function (key) {
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(zoneVisibilityMap[key], Tableau_1.ZoneVisibilityType);
            ErrorHelpers_1.ErrorHelpers.verifyZoneIsValid(dashboardObjects, Number.parseInt(key, 10));
        });
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.Dashboard] = dashboard,
            _a[api_internal_contract_js_1.ParameterId.ZoneIdsVisibilityMap] = {},
            _a);
        Object.keys(zoneVisibilityMap).forEach(function (key) {
            parameters[api_internal_contract_js_1.ParameterId.ZoneIdsVisibilityMap][key] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.setVisibilityType.convert(zoneVisibilityMap[key]);
        });
        return this.execute(api_internal_contract_js_1.VerbId.SetZoneVisibility, parameters).then(function (response) {
            return;
        });
    };
    return ZoneServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.ZoneServiceImpl = ZoneServiceImpl;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external DashboardContent namespace.
 * This does not follow the Impl pattern as DashboardContent is
 * currently just a (single) property bag.
 */
var DashboardContent = /** @class */ (function () {
    function DashboardContent(_dashboard) {
        this._dashboard = _dashboard;
    }
    Object.defineProperty(DashboardContent.prototype, "dashboard", {
        get: function () {
            return this._dashboard;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardContent;
}());
exports.DashboardContent = DashboardContent;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(4);
/**
 * Implementation of the external environment namespace.
 * Environment does not follow the Impl pattern as it is
 * just a property bag.
 */
var Environment = /** @class */ (function () {
    function Environment(extensionEnvironment) {
        this._apiVersion = ApiShared_1.ApiVersion.Instance && ApiShared_1.ApiVersion.Instance.formattedValue; // maj.min.fix (no build)
        this._context = ApiShared_1.InternalToExternalEnumMappings.extensionContext.convert(extensionEnvironment.extensionContext);
        this._language = extensionEnvironment.extensionLanguage;
        this._locale = extensionEnvironment.extensionLocale;
        this._mode = ApiShared_1.InternalToExternalEnumMappings.extensionMode.convert(extensionEnvironment.extensionMode);
        this._operatingSystem = extensionEnvironment.operatingSystem;
        this._tableauVersion = extensionEnvironment.tableauVersion;
    }
    Object.defineProperty(Environment.prototype, "apiVersion", {
        get: function () {
            return this._apiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "language", {
        get: function () {
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "operatingSystem", {
        get: function () {
            return this._operatingSystem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "tableauVersion", {
        get: function () {
            return this._tableauVersion;
        },
        enumerable: true,
        configurable: true
    });
    return Environment;
}());
exports.Environment = Environment;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(4);
var InitializationServiceImpl_1 = __webpack_require__(159);
var SettingsServiceImpl_1 = __webpack_require__(160);
var UIServiceImpl_1 = __webpack_require__(161);
function registerAllExtensionsServices(dispatcher) {
    ApiShared_1.ApiServiceRegistry.instance.registerService(new SettingsServiceImpl_1.SettingsServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new UIServiceImpl_1.UIServiceImpl(dispatcher));
}
exports.registerAllExtensionsServices = registerAllExtensionsServices;
function registerInitializationExtensionsServices(dispatcher) {
    ApiShared_1.ApiServiceRegistry.instance.registerService(new InitializationServiceImpl_1.InitializationServiceImpl(dispatcher));
}
exports.registerInitializationExtensionsServices = registerInitializationExtensionsServices;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(4);
var api_internal_contract_js_1 = __webpack_require__(1);
var InitializationServiceImpl = /** @class */ (function (_super) {
    __extends(InitializationServiceImpl, _super);
    function InitializationServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InitializationServiceImpl.prototype, "serviceName", {
        get: function () {
            return "InitializationService" /* InitializationService */;
        },
        enumerable: true,
        configurable: true
    });
    InitializationServiceImpl.prototype.initializeDashboardExtensionsAsync = function (isExtensionDialog, contextMenuIds) {
        var _a;
        var params = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionContextMenuIds] = contextMenuIds,
            _a[api_internal_contract_js_1.ParameterId.IsExtensionDialog] = isExtensionDialog,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.InitializeExtension, params).then(function (response) {
            // TODO - Validate return value
            var result = response.result;
            return result;
        });
    };
    return InitializationServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.InitializationServiceImpl = InitializationServiceImpl;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var ApiShared_1 = __webpack_require__(4);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_2 = __webpack_require__(4);
var SettingsServiceImpl = /** @class */ (function (_super) {
    __extends(SettingsServiceImpl, _super);
    function SettingsServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SettingsServiceImpl.prototype, "serviceName", {
        get: function () {
            return "SettingsService" /* SettingsService */;
        },
        enumerable: true,
        configurable: true
    });
    SettingsServiceImpl.prototype.saveSettingsAsync = function (settings) {
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.SettingsValues] = settings, _a);
        return this.execute(api_internal_contract_js_1.VerbId.SaveExtensionSettings, parameters).then(function (value) {
            var result = value.result;
            if (!result || !result.settingsValues) {
                throw new ApiShared_2.TableauError(Tableau_1.ErrorCodes.InternalError, 'Unexpected error savings settings.');
            }
            return (result.settingsValues);
        });
    };
    return SettingsServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.SettingsServiceImpl = SettingsServiceImpl;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(4);
var DEFAULT_DIALOG_HEIGHT = 400; // in pixels
var DEFAULT_DIALOG_WIDTH = 600; // in pixels
var UIServiceImpl = /** @class */ (function (_super) {
    __extends(UIServiceImpl, _super);
    function UIServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UIServiceImpl.prototype, "serviceName", {
        get: function () {
            return "UIService" /* UIService */;
        },
        enumerable: true,
        configurable: true
    });
    UIServiceImpl.prototype.displayDialogAsync = function (url, payload, options) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionDialogUrl] = url,
            _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload,
            _a);
        var h = ((options) && (options.height)) ? options.height : DEFAULT_DIALOG_HEIGHT;
        var w = ((options) && (options.width)) ? options.width : DEFAULT_DIALOG_WIDTH;
        // On the platform side, we do something reasonable regardess of whether the passed
        // height and width are too large or too small.  But this likely indicates a developer error,
        // so we throw an error here to help with debugging.
        if (h <= 0 || w <= 0) {
            throw new ApiShared_1.TableauError(Tableau_1.ErrorCodes.InvalidParameter, 'Size parameters for displayDialogAsync must be positive');
        }
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogH] = h;
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogW] = w;
        return this.execute(api_internal_contract_js_1.VerbId.DisplayDialog, parameters).then(function (response) {
            var dialogResult = response.result;
            switch (dialogResult) {
                case api_internal_contract_js_1.ExtensionDialogResult.DialogAlreadyOpen:
                    throw new ApiShared_1.TableauError(Tableau_1.ErrorCodes.DialogAlreadyOpen, 'There already exists an open dialog for this extension.');
                case api_internal_contract_js_1.ExtensionDialogResult.InvalidDomain:
                    throw new ApiShared_1.TableauError(Tableau_1.ErrorCodes.InvalidDomainDialog, 'The url of an extension dialog must match the domain of the parent extension.');
                default: // Success case
                    return;
            }
        });
    };
    UIServiceImpl.prototype.closeDialog = function (payload) {
        var _a;
        var parameters = (payload) ? (_a = {}, _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload, _a) : {};
        return this.execute(api_internal_contract_js_1.VerbId.CloseDialog, parameters).then(function (response) {
            return;
        });
    };
    return UIServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.UIServiceImpl = UIServiceImpl;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(4);
/**
 * Implementation of the external settings namespace.
 */
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings(_settingsImpl) {
        var _this = _super.call(this) || this;
        _this._settingsImpl = _settingsImpl;
        // Initialize our event handling for this class
        _this._settingsImpl.initializeEvents().forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Settings.prototype.erase = function (key) {
        this._settingsImpl.erase(key);
    };
    Settings.prototype.get = function (key) {
        return this._settingsImpl.get(key);
    };
    Settings.prototype.getAll = function () {
        return this._settingsImpl.getAll();
    };
    Object.defineProperty(Settings.prototype, "isModified", {
        get: function () {
            return this._settingsImpl.isModified;
        },
        enumerable: true,
        configurable: true
    });
    Settings.prototype.saveAsync = function () {
        return this._settingsImpl.saveAsync();
    };
    Settings.prototype.set = function (key, value) {
        this._settingsImpl.set(key, value);
    };
    return Settings;
}(ApiShared_1.EventListenerManager));
exports.Settings = Settings;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(4);
var SettingsChangedEvent = /** @class */ (function (_super) {
    __extends(SettingsChangedEvent, _super);
    function SettingsChangedEvent(_newSettings) {
        var _this = _super.call(this, Tableau_1.TableauEventType.SettingsChanged) || this;
        _this._newSettings = _newSettings;
        return _this;
    }
    Object.defineProperty(SettingsChangedEvent.prototype, "newSettings", {
        get: function () {
            return this._newSettings;
        },
        enumerable: true,
        configurable: true
    });
    return SettingsChangedEvent;
}(ApiShared_1.TableauEvent));
var SettingsImpl = /** @class */ (function () {
    function SettingsImpl(settingsInfo) {
        // Since promises can't be introspected for state, keep a variable that
        // indicates a save is in progress, so that set/erase can't be called during a save.
        this._saveInProgress = false;
        this.initializeSettings(settingsInfo);
    }
    SettingsImpl.prototype.erase = function (key) {
        ApiShared_1.ErrorHelpers.verifyParameter(key, 'key');
        // Only make a modification if we have the key already
        if (this._currentSettings[key]) {
            this.verifySettingsAreUnlocked();
            delete this._currentSettings[key];
            this._isModified = true;
        }
    };
    SettingsImpl.prototype.get = function (key) {
        ApiShared_1.ErrorHelpers.verifyParameter(key, 'key');
        return this._currentSettings[key];
    };
    SettingsImpl.prototype.getAll = function () {
        // Returns a mutable copy of the settings
        return Object.assign({}, this._currentSettings);
    };
    Object.defineProperty(SettingsImpl.prototype, "isModified", {
        get: function () {
            return this._isModified;
        },
        enumerable: true,
        configurable: true
    });
    SettingsImpl.prototype.saveAsync = function () {
        var _this = this;
        this.verifySettingsAreUnlocked();
        // Just resolve immediately if settings are unchanged
        if (!this._isModified) {
            return Promise.resolve(this._currentSettings);
        }
        this._saveInProgress = true;
        // Use the settings service to save settings to twb
        var settingsService = ApiShared_1.ApiServiceRegistry.instance.getService("SettingsService" /* SettingsService */);
        return settingsService.saveSettingsAsync(this._currentSettings).then(function (newSettings) {
            _this._saveInProgress = false;
            _this._isModified = false;
            if (_this._currentSettings === undefined) {
                _this._currentSettings = newSettings;
            }
            else {
                Object.assign(_this._currentSettings, newSettings);
            }
            return newSettings;
        });
    };
    SettingsImpl.prototype.set = function (key, value) {
        ApiShared_1.ErrorHelpers.verifyStringParameter(key, 'key'); // Key shouldn't be an empty string.
        ApiShared_1.ErrorHelpers.verifyParameter(value, 'value'); // Empty string value is allowed.
        this.verifySettingsAreUnlocked();
        this._currentSettings[key] = value;
        this._isModified = true;
    };
    /**
     * Initializes all events relevant to settings object.  This is only a settingsUpdate event currently.
     *
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager.
     */
    SettingsImpl.prototype.initializeEvents = function () {
        var _this = this;
        var results = new Array();
        var notificationService;
        try {
            notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        var settingsChangedEvent = new ApiShared_1.SingleEventManagerImpl(Tableau_1.TableauEventType.SettingsChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SettingsChanged, function (model) {
            return true;
        }, function (event) {
            _this._currentSettings = event.newSettings;
            settingsChangedEvent.triggerEvent(function () { return new SettingsChangedEvent(event.newSettings); });
        });
        results.push(settingsChangedEvent);
        return results;
    };
    SettingsImpl.prototype.initializeSettings = function (settingsInfo) {
        ApiShared_1.ErrorHelpers.verifyParameter(settingsInfo, 'settingsInfo');
        ApiShared_1.ErrorHelpers.verifyParameter(settingsInfo.settingsValues, 'settingsInfo.SettingsValues');
        this._currentSettings = settingsInfo.settingsValues;
        // Reset the isModified flag
        this._isModified = false;
    };
    /**
     * This helper should be called before any local update to this.currentSettings.
     * Checks if a current save call is still in progress and throws an error if so.
     */
    SettingsImpl.prototype.verifySettingsAreUnlocked = function () {
        if (this._saveInProgress) {
            throw new ApiShared_1.TableauError(Tableau_1.ErrorCodes.SettingSaveInProgress, SettingsImpl.ASYNC_SAVE_IN_PROGRESS);
        }
    };
    SettingsImpl.ASYNC_SAVE_IN_PROGRESS = 'Async Save is in progress, updating settings is not allowed.';
    return SettingsImpl;
}());
exports.SettingsImpl = SettingsImpl;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external UI namespace.
 */
var UI = /** @class */ (function () {
    function UI(_impl) {
        this._impl = _impl;
    }
    UI.prototype.displayDialogAsync = function (url, payload, options) {
        return this._impl.displayDialogAsync(url, payload, options);
    };
    UI.prototype.closeDialog = function (payload) {
        this._impl.closeDialog(payload);
    };
    return UI;
}());
exports.UI = UI;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(4);
var UIImpl = /** @class */ (function () {
    function UIImpl() {
    }
    UIImpl.prototype.displayDialogAsync = function (url, payload, options) {
        var uiService = ApiShared_1.ApiServiceRegistry.instance.getService("UIService" /* UIService */);
        var notificationService = ApiShared_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        return new Promise(function (resolve, reject) {
            uiService.displayDialogAsync(url, payload || '', options).then(function () {
                var unregisterFn = notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ExtensionDialogUpdate, function (model) {
                    return true; // Let through any dialog update event
                }, function (event) {
                    if (event.isCloseEvent) {
                        resolve(event.closePayload);
                    }
                    else {
                        reject(new ApiShared_1.TableauError(Tableau_1.ErrorCodes.DialogClosedByUser, 'Extension dialog closed by user.'));
                    }
                    unregisterFn();
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    UIImpl.prototype.closeDialog = function (payload) {
        var uiService = ApiShared_1.ApiServiceRegistry.instance.getService("UIService" /* UIService */);
        uiService.closeDialog(payload);
    };
    return UIImpl;
}());
exports.UIImpl = UIImpl;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
/**
 * Implementation of the InternalApiDispatcher which supports upgrading and downgrading the input
 * internal contract to the version that this module is built against
 *
 * @class VersionedExternalApiDispatcher
 * @implements {InternalApiDispatcher}
 */
var VersionedExternalApiDispatcher = /** @class */ (function () {
    /**
     * Creates a new instance of the VersionedExternalApiDispatcher
     * We have multiple version converting dispatchers that work together.
     * If needed, the VersionedExternalApiDispatcher wraps either the InternalApiDispatcher (desktop)
     * or the CrossFrameDispatcher (server).
     * The Internal/CrossFrame dispatchers handle an updated platform with an older external library.
     * (The CrossFrameDispatcher sends messages across the frame, and it is handled by the PresLayerHandler.)
     * Meanwhile, the VersionedExternalApiDispatcher handles an updated external library with an older platform.
  
     * @param _apiDelegateDispatcher The delegate that does the actual work.
     * @param platformVersionNumber The version of the internal contract which the platform module is using.
     * This number will be used to figure out how to downgrade incoming commands and upgrade the results
     */
    function VersionedExternalApiDispatcher(_apiDelegateDispatcher, platformVersionNumber) {
        var _this = this;
        this._apiDelegateDispatcher = _apiDelegateDispatcher;
        this._versionConverter = api_internal_contract_js_1.CreateExternalCompatibleVersionConverter(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION, platformVersionNumber);
        this._notificationHandlers = [];
        _apiDelegateDispatcher.registerNotificationHandler(function (notification) {
            if (_this._notificationHandlers.length === 0) {
                return;
            }
            var upgradedNotification = _this._versionConverter.upgradeNotification(notification);
            _this._notificationHandlers.forEach(function (handler) {
                handler(upgradedNotification);
            });
        });
    }
    VersionedExternalApiDispatcher.needsVersionConverter = function (platformVersion) {
        // If our platform is less than external library version, then we need a converter
        return api_internal_contract_js_1.VersionLessThan(platformVersion, api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
    };
    VersionedExternalApiDispatcher.prototype.execute = function (verb, parameters) {
        var _this = this;
        var downgradeParameters = this._versionConverter.downgradeExecuteCall(verb, parameters);
        return this._apiDelegateDispatcher.execute(downgradeParameters.verb, downgradeParameters.parameters).then(function (response) {
            var upgradeResponse = _this._versionConverter.upgradeExecuteReturn(response);
            return upgradeResponse;
        });
    };
    VersionedExternalApiDispatcher.prototype.registerNotificationHandler = function (handler) {
        this._notificationHandlers.push(handler);
    };
    VersionedExternalApiDispatcher.prototype.unregisterNotificationHandler = function (handler) {
        this._notificationHandlers = this._notificationHandlers.filter(function (h) { return h !== handler; });
    };
    return VersionedExternalApiDispatcher;
}());
exports.VersionedExternalApiDispatcher = VersionedExternalApiDispatcher;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
/**
 * LegacyInternalApiDispatcherHolder has been moved (and renamed) from api-internal-contract.
 * It supports running a newer external library against a pre 2019.3 desktop.
 * Starting in 2019.3, we have a merged bootstrap style for both desktop and server.
 * @deprecated
 */
var LegacyInternalApiDispatcherHolder;
(function (LegacyInternalApiDispatcherHolder) {
    /**
     * @param options
     */
    function getDesktopDispatcherPromise(options) {
        if ((!options || typeof options.isAlpha === 'undefined') && !window.__warningIssued) {
            // tslint:disable-next-line:no-console
            console.warn('This is an alpha version of the Extensions API. Please upgrade to an official release.');
            window.__warningIssued = true;
        }
        else if (options && options.isAlpha && window.__platformIsOfficialRelease) {
            window.__tableauDesktopDispatcher.then(function (dispatcherFactory) {
                var dispatcher = dispatcherFactory(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
                dispatcher.execute(api_internal_contract_js_1.VerbId.BlockExtension, {}).catch();
            }).catch();
        }
        // this will be undefined if promise is rejected or throws
        return window.__tableauDesktopDispatcher;
    }
    LegacyInternalApiDispatcherHolder.getDesktopDispatcherPromise = getDesktopDispatcherPromise;
    /**
     * @param options
     */
    function hasDesktopApiDispatcherPromise(options) {
        return !!getDesktopDispatcherPromise(options);
    }
    LegacyInternalApiDispatcherHolder.hasDesktopApiDispatcherPromise = hasDesktopApiDispatcherPromise;
})(LegacyInternalApiDispatcherHolder = exports.LegacyInternalApiDispatcherHolder || (exports.LegacyInternalApiDispatcherHolder = {}));


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external Extensions namespace.
 */
var Extensions = /** @class */ (function () {
    function Extensions(extensionImpl) {
        this.extensionImpl = extensionImpl;
        this.extensionImpl = extensionImpl;
    }
    Object.defineProperty(Extensions.prototype, "dashboardContent", {
        get: function () {
            return this.extensionImpl.dashboardContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "environment", {
        get: function () {
            return this.extensionImpl.environment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "settings", {
        get: function () {
            return this.extensionImpl.settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "ui", {
        get: function () {
            return this.extensionImpl.ui;
        },
        enumerable: true,
        configurable: true
    });
    Extensions.prototype.initializeAsync = function (contextMenuCallbacks) {
        return this.extensionImpl.initializeAsync(false, contextMenuCallbacks).then();
    };
    Extensions.prototype.initializeDialogAsync = function () {
        return this.extensionImpl.initializeAsync(true);
    };
    return Extensions;
}());
exports.Extensions = Extensions;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmRmYjY3NWJmY2E0ODA3MWYzY2YiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL0pzQXBpSW50ZXJuYWxDb250cmFjdC50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9BcGlTaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVGFibGVhdUVycm9yLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FcnJvckhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZXJ2aWNlSW1wbEJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9QYXJhbS50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudExpc3RlbmVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0VudW1Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaW5nbGVFdmVudE1hbmFnZXJJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9HZXREYXRhTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaGVldC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9BcGlWZXJzaW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvVmVyc2lvbkNvbnZlcnRlckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZ3VpZC9ndWlkLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGF0YVNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0RhdGFTb3VyY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRmllbGRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ZpZWxkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1V29ya3NoZWV0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVTaGVldEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL0dldERhdGFTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0VudW1NYXBwaW5ncy9FeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9hcnJheS9maW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9WZXJzaW9uTnVtYmVyLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9udW1iZXIvaXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9FbnVtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1BhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9WZXJicy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25UcmFuc2xhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsVmVyc2lvbkNvbnZlcnRlckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9leHRlcm5hbC9FeHRlcm5hbFZlcnNpb25UcmFuc2xhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZU1lc3Nlbmdlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VUeXBlQ2hlY2tzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGFzaGJvYXJkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEluZm9JbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NpemUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvV29ya3NoZWV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvV29ya3NoZWV0SW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZVN1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvRmlsdGVyTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9QYXJhbWV0ZXJzU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9QYXJhbWV0ZXJJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUGFyYW1ldGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VsZWN0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL1NlbGVjdGlvbk1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1pvbmVTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvVUlTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9TZXR0aW5nc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvVUlJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvVmVyc2lvbmVkRXh0ZXJuYWxBcGlEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0xlZ2FjeUludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FeHRlbnNpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBO0lBRU0sb0NBQWUsR0FBdEIsVUFBdUIsb0JBQWtDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUMsSUFBSSxFQUFRLENBQUM7SUFDdEYsQ0FBQztJQUVNLDBDQUFxQixHQUE1QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQztBQTVCWSxnQ0FBVSIsImZpbGUiOiJ0YWJsZWF1LmV4dGVuc2lvbnMuMS4zLjAtcHJlLjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC1leHRlbnNpb25zL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZGZiNjc1YmZjYTQ4MDcxZjNjZiIsImltcG9ydCB7IEV4dGVuc2lvbnMgfSBmcm9tICcuL0V4dGVuc2lvbnMnO1xuXG4vKipcbiAqIFRoZSB0YWJsZWF1IG5hbWVzcGFjZSBleGlzdHMgZm9yIG9yZ2FuaXphdGlvbiBhbmQgdG8gYXZvaWQgcG9sbHV0aW5nXG4gKiB0aGUgZ2xvYmFsIG5hbWVzcGFjZS4gSXQgY29udGFpbnMgbm8gY29uc3RydWN0cyBvdGhlciB0aGFuIHN1Yi1uYW1lc3BhY2VzIGFuZCB0aGUgVGFibGVhdSBlbnVtZXJhdGlvbnMuXG4gKi9cbm5hbWVzcGFjZSBUYWJsZWF1IHtcbiAgZXhwb3J0IGxldCBleHRlbnNpb25zOiBFeHRlbnNpb25zO1xuICAvKipcbiAgICogVGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIEV4dGVuc2lvbnMgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAqL1xuICBleHBvcnQgZW51bSBFeHRlbnNpb25Db250ZXh0IHtcbiAgICBEZXNrdG9wID0gJ2Rlc2t0b3AnLFxuICAgIFNlcnZlciA9ICdzZXJ2ZXInXG4gIH1cblxuICAvKipcbiAgICogVGhlIG1vZGUgaW4gd2hpY2ggdGhlIEV4dGVuc2lvbnMgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAqL1xuICBleHBvcnQgZW51bSBFeHRlbnNpb25Nb2RlIHtcbiAgICBBdXRob3JpbmcgPSAnYXV0aG9yaW5nJyxcbiAgICBWaWV3aW5nID0gJ3ZpZXdpbmcnXG4gIH1cblxuICBleHBvcnQgZW51bSBBbmFseXRpY3NPYmplY3RUeXBlIHtcbiAgICBDbHVzdGVyID0gJ2NsdXN0ZXInLFxuICAgIEZvcmVjYXN0ID0gJ2ZvcmVjYXN0JyxcbiAgICBUcmVuZExpbmUgPSAndHJlbmQtbGluZSdcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICAgIERpc2NyZXRlID0gJ2Rpc2NyZXRlJyxcbiAgICBDb250aW51b3VzID0gJ2NvbnRpbnVvdXMnXG4gIH1cblxuICAvKipcbiAgICogV2hhdCB0aGUgb2JqZWN0IHJlcHJlc2VudHMgaW4gYSBkYXNoYm9hcmQuXG4gICAqL1xuICBleHBvcnQgZW51bSBEYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgICBCbGFuayA9ICdibGFuaycsXG4gICAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCcsXG4gICAgUXVpY2tGaWx0ZXIgPSAncXVpY2stZmlsdGVyJyxcbiAgICBQYXJhbWV0ZXJDb250cm9sID0gJ3BhcmFtZXRlci1jb250cm9sJyxcbiAgICBQYWdlRmlsdGVyID0gJ3BhZ2UtZmlsdGVyJyxcbiAgICBMZWdlbmQgPSAnbGVnZW5kJyxcbiAgICBUaXRsZSA9ICd0aXRsZScsXG4gICAgVGV4dCA9ICd0ZXh0JyxcbiAgICBJbWFnZSA9ICdpbWFnZScsXG4gICAgV2ViUGFnZSA9ICd3ZWItcGFnZScsXG4gICAgRXh0ZW5zaW9uID0gJ2V4dGVuc2lvbidcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGlmZmVyZW50IHR5cGVzIG9mIGRhdGEgYSB2YWx1ZSBjYW4gaGF2ZVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICAgIFN0cmluZyA9ICdzdHJpbmcnLFxuICAgIEludCA9ICdpbnQnLFxuICAgIEZsb2F0ID0gJ2Zsb2F0JyxcbiAgICBCb29sID0gJ2Jvb2wnLFxuICAgIERhdGUgPSAnZGF0ZScsXG4gICAgRGF0ZVRpbWUgPSAnZGF0ZS10aW1lJyxcbiAgICBTcGF0aWFsID0gJ3NwYXRpYWwnXG4gIH1cblxuICAvKipcbiAgICogVmFsaWQgZGF0ZSByYW5nZXMgZm9yIGEgcmVsYXRpdmUgZGF0ZSBmaWx0ZXIuXG4gICAqL1xuICBleHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgICBMYXN0ID0gJ2xhc3QnLFxuICAgIExhc3ROID0gJ2xhc3QtbicsXG4gICAgTmV4dCA9ICduZXh0JyxcbiAgICBOZXh0TiA9ICduZXh0LW4nLFxuICAgIEN1cnJlbnQgPSAnY3VycmVudCcsXG4gICAgVG9EYXRlID0gJ3RvLWRhdGUnXG4gIH1cblxuICBleHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICAgIENvbHVtbiA9ICdjb2x1bW4nLFxuICAgIFJvdyA9ICdyb3cnLFxuICAgIFBhZ2UgPSAncGFnZScsXG4gICAgRmlsdGVyID0gJ2ZpbHRlcicsXG4gICAgTWFya3NUeXBlID0gJ21hcmtzLXR5cGUnLFxuICAgIE1lYXN1cmVWYWx1ZXMgPSAnbWVhc3VyZS12YWx1ZXMnLFxuICAgIENvbG9yID0gJ2NvbG9yJyxcbiAgICBTaXplID0gJ3NpemUnLFxuICAgIExhYmVsID0gJ2xhYmVsJyxcbiAgICBEZXRhaWwgPSAnZGV0YWlsJyxcbiAgICBUb29sdGlwID0gJ3Rvb2x0aXAnLFxuICAgIFNoYXBlID0gJ3NoYXBlJyxcbiAgICBQYXRoID0gJ3BhdGgnLFxuICAgIEFuZ2xlID0gJ2FuZ2xlJ1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBlcnJvciBjb2RlcyB1c2VkIGJ5IHRoZSBFeHRlbnNpb25zIEFQSS5cbiAgICovXG4gIGV4cG9ydCBlbnVtIEVycm9yQ29kZXMge1xuICAgIC8qKlxuICAgICAqIFRocm93biB3aGVuIGNhbGxlciBhdHRlbXB0cyB0byBleGVjdXRlIGNvbW1hbmQgYmVmb3JlIGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICovXG4gICAgQVBJTm90SW5pdGlhbGl6ZWQgPSAnYXBpLW5vdC1pbml0aWFsaXplZCcsXG4gICAgLyoqXG4gICAgICogVGhyb3duIHdoZW4gY2FsbGVyIGF0dGVtcHRzIHRvIGV4ZWN1dGUgY29tbWFuZCB3aGlsZSBleHRlbnNpb24gaXMgbm90IHZpc2libGUuXG4gICAgICovXG4gICAgVmlzaWJpbGl0eUVycm9yID0gJ3Zpc2liaWxpdHktZXJyb3InLFxuICAgIC8qKlxuICAgICAqIE9ubHkgb25lIGRpYWxvZyBjYW4gYmUgb3BlbmVkIGF0IHRpbWUgd2l0aCB0aGUgVUkgbmFtZXNwYWNlIGZ1bmN0aW9uYWxpdHkuXG4gICAgICovXG4gICAgRGlhbG9nQWxyZWFkeU9wZW4gPSAnZGlhbG9nLWFscmVhZHktb3BlbicsXG4gICAgLyoqXG4gICAgICogVGhlIG9wZW4gZGlhbG9nIHdhcyBjbG9zZWQgYnkgdGhlIHVzZXIuXG4gICAgICovXG4gICAgRGlhbG9nQ2xvc2VkQnlVc2VyID0gJ2RpYWxvZy1jbG9zZWQtYnktdXNlcicsXG4gICAgLyoqXG4gICAgICogQW4gZXJyb3Igb2NjdXJyZWQgd2l0aGluIHRoZSBUYWJsZWF1IEV4dGVuc2lvbnMgQVBJLiBDb250YWN0IFRhYmxlYXUgU3VwcG9ydC5cbiAgICAgKi9cbiAgICBJbnRlcm5hbEVycm9yID0gJ2ludGVybmFsLWVycm9yJyxcbiAgICAvKipcbiAgICAgKiBBIGRpYWxvZyBtdXN0IHN0YXJ0IG9uIHRoZSBzYW1lIGRvbWFpbiBhcyB0aGUgcGFyZW50IGV4dGVuaW9uLlxuICAgICAqL1xuICAgIEludmFsaWREb21haW5EaWFsb2cgPSAnaW52YWxpZC1kaWFsb2ctZG9tYWluJyxcbiAgICAvKipcbiAgICAgKiBBIHBhcmFtZXRlciBpcyBub3QgdGhlIGNvcnJlY3QgZGF0YSB0eXBlIG9yIGZvcm1hdC4gVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgaW4gdGhlIEVycm9yLm1lc3NhZ2UgZmllbGQuXG4gICAgICovXG4gICAgSW52YWxpZFBhcmFtZXRlciA9ICdpbnZhbGlkLXBhcmFtZXRlcicsXG4gICAgLyoqXG4gICAgICogQ2FuIG9jY3VyIGlmIHRoZSBleHRlbnNpb24gaW50ZXJhY3RzIHdpdGggYSBmaWx0ZXIgdGhhdCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldC5cbiAgICAgKi9cbiAgICBNaXNzaW5nRmlsdGVyID0gJ21pc3NpbmctZmlsdGVyJyxcbiAgICAvKipcbiAgICAgKiBDYW4gb2NjdXIgaWYgdGhlIGV4dGVuc2lvbiBpbnRlcmFjdHMgd2l0aCBhIHBhcmFtZXRlciB0aGF0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0LlxuICAgICAqL1xuICAgIE1pc3NpbmdQYXJhbWV0ZXIgPSAnbWlzc2luZy1wYXJhbWV0ZXInLFxuICAgIC8qKlxuICAgICAqIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgICAqL1xuICAgIFNlcnZlckVycm9yID0gJ3NlcnZlci1lcnJvcicsXG4gICAgLyoqXG4gICAgICogRGV2ZWxvcGVyIGNhbm5vdCBzYXZlIHNldHRpbmdzIHdoaWxlIGFub3RoZXIgc2F2ZSBpcyBzdGlsbCBpbiBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBTZXR0aW5nU2F2ZUluUHJvZ3Jlc3MgPSAnc2V0dGluZy1zYXZlLWluLXByb2dyZXNzJyxcbiAgICAvKipcbiAgICAgKiBBbiB1bmtub3duIGV2ZW50IG5hbWUgd2FzIHNwZWNpZmllZCBpbiB0aGUgY2FsbCB0byBgYWRkRXZlbnRMaXN0ZW5lcmAgb3IgYHJlbW92ZUV2ZW50TGlzdGVuZXJgLlxuICAgICAqL1xuICAgIFVuc3VwcG9ydGVkRXZlbnROYW1lID0gJ3Vuc3VwcG9ydGVkLWV2ZW50LW5hbWUnLFxuICAgIC8qKlxuICAgICAqIEEgbWV0aG9kIHdhcyB1c2VkIGZvciBhIHR5cGUgb2YgZGF0YSBzb3VyY2UgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhhdCBtZXRob2QgKHNlZSBnZXRBY3RpdmVUYWJsZXNBc3luYyBmb3IgYW4gZXhhbXBsZSlcbiAgICAgKi9cbiAgICBVbnN1cHBvcnRlZE1ldGhvZEZvckRhdGFTb3VyY2VUeXBlID0gJ3Vuc3VwcG9ydGVkLW1ldGhvZC1mb3ItZGF0YS1zb3VyY2UtdHlwZSdcbiAgfVxuXG4gIC8qKlxuICAgKiAgVHlwZSBvZiBhZ2dyZWdhdGlvbiBvbiBhIGZpZWxkLlxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICAgIFN1bSA9ICdzdW0nLFxuICAgIEF2ZyA9ICdhdmcnLFxuICAgIE1pbiA9ICdtaW4nLFxuICAgIE1heCA9ICdtYXgnLFxuICAgIFN0ZGV2ID0gJ3N0ZGV2JyxcbiAgICBTdGRldnAgPSAnc3RkZXZwJyxcbiAgICBWYXIgPSAndmFyJyxcbiAgICBWYXJwID0gJ3ZhcnAnLFxuICAgIENvdW50ID0gJ2NvdW50JyxcbiAgICBDb3VudGQgPSAnY291bnRkJyxcbiAgICBNZWRpYW4gPSAnbWVkaWFuJyxcbiAgICBBdHRyID0gJ2F0dHInLFxuICAgIE5vbmUgPSAnbm9uZScsXG4gICAgWWVhciA9ICd5ZWFyJyxcbiAgICBRdHIgPSAncXRyJyxcbiAgICBNb250aCA9ICdtb250aCcsXG4gICAgRGF5ID0gJ2RheScsXG4gICAgSG91ciA9ICdob3VyJyxcbiAgICBNaW51dGUgPSAnbWludXRlJyxcbiAgICBTZWNvbmQgPSAnc2Vjb25kJyxcbiAgICBXZWVrID0gJ3dlZWsnLFxuICAgIFdlZWtkYXkgPSAnd2Vla2RheScsXG4gICAgTW9udGhZZWFyID0gJ21vbnRoLXllYXInLFxuICAgIE1keSA9ICdtZHknLFxuICAgIEVuZCA9ICdlbmQnLFxuICAgIFRydW5jWWVhciA9ICd0cnVuYy15ZWFyJyxcbiAgICBUcnVuY1F0ciA9ICd0cnVuYy1xdHInLFxuICAgIFRydW5jTW9udGggPSAndHJ1bmMtbW9udGgnLFxuICAgIFRydW5jV2VlayA9ICd0cnVuYy13ZWVrJyxcbiAgICBUcnVuY0RheSA9ICd0cnVuYy1kYXknLFxuICAgIFRydW5jSG91ciA9ICd0cnVuYy1ob3VyJyxcbiAgICBUcnVuY01pbnV0ZSA9ICd0cnVuYy1taW51dGUnLFxuICAgIFRydW5jU2Vjb25kID0gJ3RydW5jLXNlY29uZCcsXG4gICAgUXVhcnQxID0gJ3F1YXJ0MScsXG4gICAgUXVhcnQzID0gJ3F1YXJ0MycsXG4gICAgU2tld25lc3MgPSAnc2tld25lc3MnLFxuICAgIEt1cnRvc2lzID0gJ2t1cnRvc2lzJyxcbiAgICBJbk91dCA9ICdpbi1vdXQnLFxuICAgIFVzZXIgPSAndXNlcidcbiAgfVxuXG4gIC8qKlxuICAgKiBSb2xlIG9mIGEgZmllbGQuXG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZFJvbGVUeXBlIHtcbiAgICBEaW1lbnNpb24gPSAnZGltZW5zaW9uJyxcbiAgICBNZWFzdXJlID0gJ21lYXN1cmUnLFxuICAgIFVua25vd24gPSAndW5rbm93bidcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBlbnVtZXJhdGlvbiBvZiB0aGUgdmFsaWQgdHlwZXMgb2YgZmlsdGVycyB0aGF0IGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmlsdGVyVHlwZSB7XG4gICAgQ2F0ZWdvcmljYWwgPSAnY2F0ZWdvcmljYWwnLFxuICAgIFJhbmdlID0gJ3JhbmdlJyxcbiAgICBIaWVyYXJjaGljYWwgPSAnaGllcmFyY2hpY2FsJyxcbiAgICBSZWxhdGl2ZURhdGUgPSAncmVsYXRpdmUtZGF0ZSdcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGlmZmVyZW50IHVwZGF0ZSB0eXBlcyBmb3IgYXBwbHlpbmcgZmlsdGVyXG4gICAqL1xuICBleHBvcnQgZW51bSBGaWx0ZXJVcGRhdGVUeXBlIHtcbiAgICBBZGQgPSAnYWRkJyxcbiAgICBBbGwgPSAnYWxsJyxcbiAgICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxuICAgIFJlbW92ZSA9ICdyZW1vdmUnXG4gIH1cblxuICAvKipcbiAgICogVGhlIGRvbWFpbiB0eXBlIGZvciBhIGZpbHRlclxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmlsdGVyRG9tYWluVHlwZSB7XG4gICAgLyoqXG4gICAgICogVGhlIGRvbWFpbiB2YWx1ZXMgdGhhdCBhcmUgcmVsZXZhbnQgdG8gdGhlIHNwZWNpZmllZCBmaWx0ZXJcbiAgICAgKiBpLmUuIHRoZSBkb21haW4gaXMgcmVzdHJpY3RlZCBieSBhIHByZXZpb3VzIGZpbHRlclxuICAgICAqL1xuICAgIFJlbGV2YW50ID0gJ3JlbGV2YW50JyxcbiAgICAvKipcbiAgICAgKiBsaXN0IG9mIGFsbCBwb3NzaWJsZSBkb21haW4gdmFsdWVzIGZyb20gZGF0YWJhc2VcbiAgICAgKi9cbiAgICBEYXRhYmFzZSA9ICdkYXRhYmFzZSdcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGZvciBzcGVjaWZ5aW5nIHdoaWNoIHZhbHVlcyB0byBpbmNsdWRlIGZvciBmaWx0ZXJpbmdcbiAgICogSW5kaWNhdGVzIHdoYXQgdG8gZG8gd2l0aCBudWxsIHZhbHVlcyBmb3IgYSBnaXZlbiBmaWx0ZXIgb3IgbWFyayBzZWxlY3Rpb24gY2FsbC5cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpbHRlck51bGxPcHRpb24ge1xuICAgIE51bGxWYWx1ZXMgPSAnbnVsbC12YWx1ZXMnLFxuICAgIE5vbk51bGxWYWx1ZXMgPSAnbm9uLW51bGwtdmFsdWVzJyxcbiAgICBBbGxWYWx1ZXMgPSAnYWxsLXZhbHVlcydcbiAgfVxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIG1hcmsgZm9yIGEgZ2l2ZW4gbWFya3MgY2FyZCBpbiBhIHZpei5cbiAgICovXG4gIGV4cG9ydCBlbnVtIE1hcmtUeXBlIHtcbiAgICBCYXIgPSAnYmFyJyxcbiAgICBMaW5lID0gJ2xpbmUnLFxuICAgIEFyZWEgPSAnYXJlYScsXG4gICAgU3F1YXJlID0gJ3NxdWFyZScsXG4gICAgQ2lyY2xlID0gJ2NpcmNsZScsXG4gICAgU2hhcGUgPSAnc2hhcGUnLFxuICAgIFRleHQgPSAndGV4dCcsXG4gICAgTWFwID0gJ21hcCcsXG4gICAgUGllID0gJ3BpZScsXG4gICAgR2FudHRCYXIgPSAnZ2FudHQtYmFyJyxcbiAgICBQb2x5Z29uID0gJ3BvbHlnb24nXG4gIH1cblxuICAvKipcbiAgICogQW4gZW51bWVyYXRpb24gZGVzY3JpYmluZyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGFsbG93YWJsZSB2YWx1ZXMuXG4gICAqIFRoaXMgaXMgdXNlZCBmb3IgcmVzdHJpY3RpbmcgdGhlIGRvbWFpbiBvZiBhIHBhcmFtZXRlclxuICAgKi9cbiAgZXhwb3J0IGVudW0gUGFyYW1ldGVyVmFsdWVUeXBlIHtcbiAgICBBbGwgPSAnYWxsJyxcbiAgICBMaXN0ID0gJ2xpc3QnLFxuICAgIFJhbmdlID0gJ3JhbmdlJ1xuICB9XG5cbiAgLyoqXG4gICAqIERhdGUgcGVyaW9kIHVzZWQgaW4gZmlsdGVycyBhbmQgaW4gcGFyYW1ldGVycy5cbiAgICovXG4gIGV4cG9ydCBlbnVtIFBlcmlvZFR5cGUge1xuICAgIFllYXJzID0gJ3llYXJzJyxcbiAgICBRdWFydGVycyA9ICdxdWFydGVycycsXG4gICAgTW9udGhzID0gJ21vbnRocycsXG4gICAgV2Vla3MgPSAnd2Vla3MnLFxuICAgIERheXMgPSAnZGF5cycsXG4gICAgSG91cnMgPSAnaG91cnMnLFxuICAgIE1pbnV0ZXMgPSAnbWludXRlcycsXG4gICAgU2Vjb25kcyA9ICdzZWNvbmRzJ1xuICB9XG5cbiAgZXhwb3J0IGVudW0gUXVpY2tUYWJsZUNhbGNUeXBlIHtcbiAgICBSdW5uaW5nVG90YWwgPSAncnVubmluZy10b3RhbCcsXG4gICAgRGlmZmVyZW5jZSA9ICdkaWZmZXJlbmNlJyxcbiAgICBQZXJjZW50RGlmZmVyZW5jZSA9ICdwZXJjZW50LWRpZmZlcmVuY2UnLFxuICAgIFBlcmNlbnRPZlRvdGFsID0gJ3BlcmNlbnQtb2YtdG90YWwnLFxuICAgIFJhbmsgPSAncmFuaycsXG4gICAgUGVyY2VudGlsZSA9ICdwZXJjZW50aWxlJyxcbiAgICBNb3ZpbmdBdmVyYWdlID0gJ21vdmluZy1hdmVyYWdlJyxcbiAgICBZVERUb3RhbCA9ICd5dGQtdG90YWwnLFxuICAgIENvbXBvdW5kR3Jvd3RoUmF0ZSA9ICdjb21wb3VuZC1ncm93dGgtcmF0ZScsXG4gICAgWWVhck92ZXJZZWFyR3Jvd3RoID0gJ3llYXItb3Zlci15ZWFyLWdyb3d0aCcsXG4gICAgWVRER3Jvd3RoID0gJ3l0ZC1ncm93dGgnLFxuICAgIFVuZGVmaW5lZCA9ICd1bmRlZmluZWQnXG4gIH1cblxuICAvKipcbiAgICogRW51bSBmb3Igc3BlY2lmeWluZyB0aGUgc2VsZWN0aW9uIHR5cGUgZm9yIHNlbGVjdCBtYXJrcyBhcGkuXG4gICAqL1xuICBleHBvcnQgZW51bSBTZWxlY3Rpb25VcGRhdGVUeXBlIHtcbiAgICBSZXBsYWNlID0gJ3NlbGVjdC1yZXBsYWNlJyxcbiAgICBBZGQgPSAnc2VsZWN0LWFkZCcsXG4gICAgUmVtb3ZlID0gJ3NlbGVjdC1yZW1vdmUnXG4gIH1cblxuICAvKipcbiAgICogVGhlIHR5cGUgb2Ygc2hlZXQgYSBbW1NoZWV0XV0gb2JqZWN0IHJlcHJlc2VudHNcbiAgICovXG4gIGV4cG9ydCBlbnVtIFNoZWV0VHlwZSB7XG4gICAgRGFzaGJvYXJkID0gJ2Rhc2hib2FyZCcsXG4gICAgU3RvcnkgPSAnc3RvcnknLFxuICAgIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnXG4gIH1cblxuICBleHBvcnQgZW51bSBTb3J0RGlyZWN0aW9uIHtcbiAgICBJbmNyZWFzaW5nID0gJ2luY3JlYXNpbmcnLFxuICAgIERlY3JlYXNpbmcgPSAnZGVjcmVhc2luZydcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSB0eXBlIG9mIGV2ZW50IHRoYXQgY2FuIGJlIGxpc3RlbmVkIGZvci5cbiAgICovXG4gIGV4cG9ydCBlbnVtIFRhYmxlYXVFdmVudFR5cGUge1xuICAgIC8qKiBSYWlzZWQgd2hlbiBhbnkgZmlsdGVyIGhhcyBjaGFuZ2VkIHN0YXRlLiBZb3UgY2FuIHVzZSB0aGlzIGV2ZW50IHR5cGUgd2l0aCBbW1dvcmtzaGVldF1dIG9iamVjdHMuKi9cbiAgICBGaWx0ZXJDaGFuZ2VkID0gJ2ZpbHRlci1jaGFuZ2VkJyxcblxuICAgIC8qKiBUaGUgc2VsZWN0ZWQgbWFya3Mgb24gYSB2aXN1YWxpemF0aW9uIGhhcyBjaGFuZ2VkLiBZb3UgY2FuIHVzZSB0aGlzIGV2ZW50IHR5cGUgd2l0aCBbW1dvcmtzaGVldF1dIG9iamVjdHMuICovXG4gICAgTWFya1NlbGVjdGlvbkNoYW5nZWQgPSAnbWFyay1zZWxlY3Rpb24tY2hhbmdlZCcsXG5cbiAgICAvKiogQSBwYXJhbWV0ZXIgaGFzIGhhZCBpdHMgdmFsdWUgbW9kaWZpZWQuIFlvdSBjYW4gdXNlIHRoaXMgZXZlbnQgdHlwZSB3aXRoIFtbUGFyYW1ldGVyXV0gb2JqZWN0cy4gKi9cbiAgICBQYXJhbWV0ZXJDaGFuZ2VkID0gJ3BhcmFtZXRlci1jaGFuZ2VkJyxcblxuICAgIC8qKiBTZXR0aW5ncyBoYXZlIGJlZW4gY2hhbmdlZCBmb3IgdGhpcyBleHRlbnNpb24uIFlvdSBjYW4gdXNlIHRoaXMgZXZlbnQgdHlwZSB3aXRoIFtbU2V0dGluZ3NdXSBvYmplY3RzLiAqL1xuICAgIFNldHRpbmdzQ2hhbmdlZCA9ICdzZXR0aW5ncy1jaGFuZ2VkJ1xuICB9XG5cbiAgZXhwb3J0IGVudW0gVHJlbmRMaW5lTW9kZWxUeXBlIHtcbiAgICBMaW5lYXIgPSAnbGluZWFyJyxcbiAgICBMb2dhcml0aG1pYyA9ICdsb2dhcml0aG1pYycsXG4gICAgRXhwb25lbnRpYWwgPSAnZXhwb25lbnRpYWwnLFxuICAgIFBvbHlub21pYWwgPSAncG9seW5vbWlhbCdcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnVtIHRoYXQgcmVwcmVzZW50cyB0aGUgdmlzaWJpbGl0eSBzdGF0ZSBvZiBhIHpvbmUuXG4gICAqIEBzaW5jZSAxLjEuMFxuICAgKi9cbiAgZXhwb3J0IGVudW0gWm9uZVZpc2liaWxpdHlUeXBlIHtcbiAgICAvKiogVXNlZCBmb3IgdHVybmluZyBvbiB0aGUgdmlzaWJpbGl0eSBvZiBhIHpvbmUgaW4gdGhlIGRhc2hib2FyZC4qL1xuICAgIFNob3cgPSAnc2hvdycsXG5cbiAgICAvKiogVXNlZCBmb3IgdHVybmluZyBvZmYgdGhlIHZpc2liaWxpdHkgb2YgYSB6b25lIGluIHRoZSBkYXNoYm9hcmQuKi9cbiAgICBIaWRlID0gJ2hpZGUnLFxuICB9XG59XG5leHBvcnQgPSBUYWJsZWF1O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1LnRzIiwiLyoqXG4gKiBUaGlzIGlzIHlvdXIgbWFpbi4gVGhpcyBpcyB3aGVyZSB5b3UgcmUtZXhwb3J0IGV2ZXJ5dGhpbmcgeW91IHdhbnQgdG8gYmUgcHVibGljbHkgYXZhaWxhYmxlLlxuICpcbiAqIFRoZSBidWlsZCBlbmZvcmNlcyB0aGF0IHRoZSBmaWxlIGhhcyB0aGUgc2FtZSBuYW1lIGFzIHRoZSBnbG9iYWwgdmFyaWFibGUgdGhhdCBpcyBleHBvcnRlZC5cbiAqL1xuXG4vLyBUaGUgZm9sbG93aW5nIHBvbHlmaWxscyBhcmUgbmVlZGVkIGZvciBJRTExXG5pbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbic7XG5pbXBvcnQgJ2NvcmUtanMvZm4vbnVtYmVyL2lzLWludGVnZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L0VudW1zJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L01vZGVscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9QYXJhbWV0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvVmVyYnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvSW5pdGlhbGl6YXRpb25PcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL1ZlcnNpb25OdW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL1ZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbmluZy9leHRlcm5hbC9FeHRlcm5hbFZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbmluZy9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb25pbmcvZXh0ZXJuYWwvRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyJztcblxuLy8gVGhlc2UgYXJlIHRoZSBleHBvcnRzIGZyb20gdGhlIG1lc3NhZ2luZyBzdHVmZlxuXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlRGlzcGF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZUxpc3RlbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3Nlbmdlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcblxuLy8gRXhwb3J0IGEgaGFyZGNvZGVkIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0LiBUaGlzIHNob3VsZCBtYXRjaCB3aGF0J3MgaW4gcGFja2FnZS5qc29uLlxuLy8gTm9ybWFsbHksIHdlJ2QgdXNlIHNvbWUgc29ydCBvZiB3ZWJwYWNrIHJlcGxhY2VtZW50IHRvIGluamVjdCB0aGlzIGludG8gY29kZSwgYnV0IHRoYXQgZG9lc24ndFxuLy8gd29yayB3aXRoIHRoZSBtb2R1bGUtZGV2LXNjcmlwdHMgYW5kIHRoaXMgaXNuJ3QgdG9vIG11Y2ggd29yay5cbi8vIElmIHlvdSBmb3JnZXQgdG8ga2VlcCB0aGlzIGluIHN5bmMgd2l0aCBwYWNrYWdlLmpzb24sIGEgdGVzdCB3aWxsIGZhaWwgc28gd2Ugc2hvdWxkIGJlIG9rLlxuZXhwb3J0IGNvbnN0IElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04gPSB7XG4gIG1ham9yOiAxLFxuICBtaW5vcjogMTIsXG4gIGZpeDogMFxufTtcblxuLy8gRXhwb3J0IHRoZSB2ZXJzaW9uIG51bWJlciBvZiBtZXNzYWdpbmcgZm9yIGNvbnN1bWVycyB0byB1c2UuXG4vLyBCZSB2ZXJ5IGNhcmVmdWwgbWFraW5nIGFueSB1cGRhdGVzIHRvIHRoaXMgY29udHJhY3Qgd2hpY2ggYnJlYWsgdmVyc2lvbiBjb21wYXRpYmlsaXR5LlxuZXhwb3J0IGNvbnN0IE1FU1NBR0lOR19WRVJTSU9OID0ge1xuICBtYWpvcjogMSxcbiAgbWlub3I6IDAsXG4gIGZpeDogMFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBFeHBvcnQgZXZlcnl0aGluZyB3aGljaCBoYWQgYmVlbiBwcmV2aW91c2x5IGluIHRoZSBhcGktc2hhcmVkIG1vZHVsZVxuXG5leHBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL0FwaVNoYXJlZC9EYXNoYm9hcmQnO1xuZXhwb3J0IHsgRXZlbnRMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0FwaVNoYXJlZC9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5leHBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuL0FwaVNoYXJlZC9TaW5nbGVFdmVudE1hbmFnZXInO1xuZXhwb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9BcGlTaGFyZWQvVGFibGVhdUVycm9yJztcbmV4cG9ydCB7IEFwaVZlcnNpb24gfSBmcm9tICcuL0FwaVNoYXJlZC9BcGlWZXJzaW9uJztcblxuZXhwb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5leHBvcnQgeyBUYWJsZWF1RXZlbnQgfSBmcm9tICcuL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdUV2ZW50JztcbmV4cG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL0FwaVNoYXJlZC9JbXBsL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuZXhwb3J0IHsgRGFzaGJvYXJkSW1wbCB9IGZyb20gJy4vQXBpU2hhcmVkL0ltcGwvRGFzaGJvYXJkSW1wbCc7XG5leHBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZSc7XG5leHBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuL0FwaVNoYXJlZC9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgKiBmcm9tICcuL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVCb290c3RyYXAnO1xuZXhwb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0FwaVNoYXJlZC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5cbi8qKlxuICogQ3VzdG9tIGVycm9yIGNsYXNzIHRoYXQgZXh0ZW5kcyB0aGUgZGVmYXVsdCBKYXZhU2NyaXB0IEVycm9yIG9iamVjdC5cbiAqIFRoaXMgYWxsb3dzIHVzIHRvIHByb3ZpZGUgYSBmaWVsZCB3aXRoIGEgc3BlY2lmaWMgZXJyb3IgY29kZVxuICogc28gdGhhdCBkZXZlbG9wZXJzIGNhbiBtb3JlIGVhc2lseSBwcm9ncmFtbWF0aWNhbGx5IHJlc3BvbmRcbiAqIHRvIGVycm9yIHNjZW5hcmlvcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlYXVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Vycm9yQ29kZTogRXJyb3JDb2RlcywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYCR7X2Vycm9yQ29kZX06ICR7bWVzc2FnZX1gKTtcblxuICAgIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0LXdpa2kvYmxvYi9tYXN0ZXIvQnJlYWtpbmctQ2hhbmdlcy5tZCNleHRlbmRpbmctYnVpbHQtaW5zLWxpa2UtZXJyb3ItYXJyYXktYW5kLW1hcC1tYXktbm8tbG9uZ2VyLXdvcmtcbiAgICAvLyBFcnJvciBpbmhlcml0YW5jZSBkb2VzIG5vdCB3b3JrIHByb3BlcnRseSB3aGVuIGNvbXBpbGluZyB0byBFUzUsIHRoaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGZvcmNlXG4gICAgLy8gdGhlIHByb3RvIGNoYWluIHRvIGJlIGJ1aWx0IGNvcnJlY3RseS4gIFNlZSB0aGUgZ2l0aHViIGxpbmsgYWJvdmUgZm9yIGRldGFpbHMuXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFRhYmxlYXVFcnJvci5wcm90b3R5cGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBlcnJvckNvZGUoKTogRXJyb3JDb2RlcyB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yQ29kZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVGFibGVhdUVycm9yLnRzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogQmFzZSBpbnRlcmZhY2UgZm9yIGFuIGFwaSBzZXJ2aWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBpU2VydmljZSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBuYW1lIGZvciB0aGlzIHNlcnZpY2UuXG4gICAqL1xuICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIENvbGxlY3Rpb24gb2Ygc2VydmljZSBuYW1lIHdoaWNoIHdpbGwgYmUgcmVnaXN0ZXJlZCBpbiB0aGUgYXBpLXNoYXJlZCBwcm9qZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIFNlcnZpY2VOYW1lcyB7XG4gIERhdGFTb3VyY2VTZXJ2aWNlID0gJ2RhdGEtc291cmNlLXNlcnZpY2UnLFxuICBHZXREYXRhID0gJ2dldC1kYXRhLXNlcnZpY2UnLFxuICBGaWx0ZXIgPSAnZmlsdGVyLXNlcnZpY2UnLFxuICBOb3RpZmljYXRpb24gPSAnbm90aWZpY2F0aW9uLXNlcnZpY2UnLFxuICBQYXJhbWV0ZXJzID0gJ3BhcmFtZXRlcnMtc2VydmljZScsXG4gIFNlbGVjdGlvbiA9ICdzZWxlY3Rpb24tc2VydmljZScsXG4gIFpvbmUgPSAnem9uZS1zZXJ2aWNlJ1xufVxuXG4vKipcbiAqIERvIHNvbWUgZ2xvYmFibCBkZWNsYXJhdGlvbnMgc28gd2UgY2FuIGNyZWF0ZSBhIHNpbmdsZXRvbiBvbiB0aGUgd2luZG93IG9iamVjdFxuICovXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBfX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnk6IFNlcnZpY2VSZWdpc3RyeSB8IHVuZGVmaW5lZDsgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VSZWdpc3RyeSB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBuZXcgc2VydmljZSBpbnRvIHRoZSBzZXJ2aWNlIHJlZ2lzdHJ5LiBBbnkgZXhpc3Rpbmcgb25lIHdpbGxcbiAgICogYmUgb3ZlcndyaXR0ZW4uIHRoZSBzZXJ2aWNlIGlzIHJlZ2lzdGVyZWQgdW5kZXIgc2VydmljZS5zZXJ2aWNlTmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0FwaVNlcnZpY2V9IHNlcnZpY2UgVGhlIHNlcnZpdmUgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyU2VydmljZShzZXJ2aWNlOiBBcGlTZXJ2aWNlKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBnaXZlbiBzZXJ2aWNlIGZyb20gdGhlIHJlZ2lzdHJ5LiBJZiB0aGVyZSBpcyBub3QgYVxuICAgKiBzZXJ2aWNlIHJlZ2lzdGVyZWQgdW5kZXIgdGhhdCBuYW1lLCB0aHJvd3MgYW5kIGVycm9yXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSBUIFRoZSB0eXBlIG9mIHRoZSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc2VydmljZS5cbiAgICogQHJldHVybnMge1R9IFRoZSByZXF1ZXN0ZWQgc2VydmljZVxuICAgKi9cbiAgZ2V0U2VydmljZTxUIGV4dGVuZHMgQXBpU2VydmljZT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQ7XG59XG5cbmNsYXNzIFNlcnZpY2VSZWdpc3RyeUltcGwgaW1wbGVtZW50cyBTZXJ2aWNlUmVnaXN0cnkge1xuICBwcml2YXRlIF9zZXJ2aWNlczogeyBbc2VydmljZU5hbWU6IHN0cmluZ106IEFwaVNlcnZpY2U7IH07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3NlcnZpY2VzID0ge307XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJTZXJ2aWNlKHNlcnZpY2U6IEFwaVNlcnZpY2UpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJ2aWNlc1tzZXJ2aWNlLnNlcnZpY2VOYW1lXSA9IHNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VydmljZTxUIGV4dGVuZHMgQXBpU2VydmljZT4oc2VydmljZU5hbWU6IHN0cmluZyk6IFQge1xuICAgIGlmICghdGhpcy5fc2VydmljZXMuaGFzT3duUHJvcGVydHkoc2VydmljZU5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYFNlcnZpY2Ugbm90IHJlZ2lzdGVyZWQ6ICR7c2VydmljZU5hbWV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VzW3NlcnZpY2VOYW1lXSBhcyBUO1xuICB9XG59XG5cbi8qKlxuICogc3RhdGljIGNsYXNzIHVzZWQgZm9yIGdldHRpbmcgYWNjZXNzIHRvIHRoZSBzaW5nbGUgaW5zdGFuY2VcbiAqIG9mIHRoZSBBcGlTZXJ2aWNlUmVnaXN0cnlcbiAqL1xuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2VSZWdpc3RyeSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFNlcnZpY2VSZWdpc3RyeVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogU2VydmljZVJlZ2lzdHJ5IHtcbiAgICBpZiAoIXdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICAgIEFwaVNlcnZpY2VSZWdpc3RyeS5zZXRJbnN0YW5jZShuZXcgU2VydmljZVJlZ2lzdHJ5SW1wbCgpKTtcbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnU2VydmljZSByZWdpc3RyeSBmYWlsZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIG92ZXJyaWRlIHRoZSByZWdpc3RyeSBpbnN0YW5jZS4gQ2FuIGJlIHVzZWQgYnkgdW5pdCB0ZXN0c1xuICAgKlxuICAgKiBAcGFyYW0ge1NlcnZpY2VSZWdpc3RyeX0gc2VydmljZVJlZ2lzdHJ5IFRoZSBuZXcgcmVnaXN0cnlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2Uoc2VydmljZVJlZ2lzdHJ5PzogU2VydmljZVJlZ2lzdHJ5KTogdm9pZCB7XG4gICAgd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeSA9IHNlcnZpY2VSZWdpc3RyeTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgdG8gYXZvaWQgYW55b25lIGNvbnN0cnVjdGluZyB0aGlzXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeS50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5cbmltcG9ydCB7IFBhcmFtIH0gZnJvbSAnLi9QYXJhbSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBEYXNoYm9hcmRPYmplY3QgfSBmcm9tICcuLi9EYXNoYm9hcmRPYmplY3QnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb25zdHJ1Y3QgY29tbW9uIGVycm9ycyB0aHJvdWdob3V0IHRoZSBleHRlcm5hbFxuICogcHJvamVjdHMgKGFwaS1zaGFyZWQsIGV4dGVuc2lvbnMtYXBpLCBldGMuKS4gIEl0IGhhcyBzb21lIGR1cGxpY2F0aW9uIHdpdGhcbiAqIHRoZSBFcnJvckhlbHBlcnMgY2xhc3MgaW4gYXBpLWNvcmUsIGJ1dCBpcyBzZXBhcmF0ZSBkdWUgdG8gdGhlIG5lZWQgdG8gdGhyb3dcbiAqIGFuIGV4dGVybmFsIFRhYmxlYXVFcnJvciB2cy4gYW4gSW50ZXJuYWxUYWJsZWF1RXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckhlbHBlcnMge1xuICAvKipcbiAgICogVGhyb3dzIHdpdGggY29kZSBJbnRlcm5hbEVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gYXBpTmFtZSBuYW1lIG9mIGFwaSB0aGF0IHdhcyBjYWxsZWQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwaU5vdEltcGxlbWVudGVkKGFwaU5hbWU6IHN0cmluZyk6IFRhYmxlYXVFcnJvciB7XG4gICAgcmV0dXJuIG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgJHthcGlOYW1lfSBBUEkgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gaW50ZXJuYWwgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeUludGVybmFsVmFsdWUoYXJndW1lbnRWYWx1ZTogYW55LCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeVBhcmFtZXRlcihhcmd1bWVudFZhbHVlOiBhbnksIGFyZ3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZ3VtZW50VmFsdWUgPT09IG51bGwgfHwgYXJndW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgYCR7YXJndW1lbnRWYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgcGFyYW10ZXI6ICR7YXJndW1lbnROYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gSW52YWxpZFBhcmFtZXRlciBlcnJvciBpZiBhcmd1bWVudCBpcyBlbXB0eSBzdHJpbmcsIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYXJndW1lbnRWYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGFyZ3VtZW50TmFtZSBuYW1lIG9mIGFyZ3VtZW50IHRvIHZlcmlmeVxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlTdHJpbmdQYXJhbWV0ZXIoYXJndW1lbnRWYWx1ZTogc3RyaW5nLCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBhcmd1bWVudFZhbHVlID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yIHBhcmFtdGVyOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgcGFzc2VkIHZhbHVlIGlzIGEgdmFsaWQgdmFsdWUgZm9yIHRoYXQgZW51bS5cbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgdGhlIGVudW0gdmFsdWUgaXMgbm90IHZhbGlkLlxuICAgKlxuICAgKiBTdHJpbmcgZW51bXMgYXJlIHtzdHJpbmcgOiBzdHJpbmd9IGRpY3Rpb25hcmllcyB3aGljaCBhcmUgbm90IHJldmVyc2UgbWFwcGFibGVcbiAgICogVGhpcyBpcyBhbiB1Z2x5IHdvcmthcm91bmRcbiAgICpcbiAgICogQHBhcmFtIGVudW1WYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGVudW1UeXBlIGVudW0gdG8gdmVyaWZ5IGFnYWluc3RcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5RW51bVZhbHVlPEVudW1UeXBlPihlbnVtVmFsdWU6IEVudW1UeXBlLCBlbnVtVHlwZTogYW55KSB7XG4gICAgbGV0IGlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZm9yRWFjaCgoZW51bUtleSkgPT4ge1xuICAgICAgaWYgKGVudW1UeXBlW2VudW1LZXldID09PSBlbnVtVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2VudW1WYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgZW51bTogJHtlbnVtVHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIHBhcmFtcyBtaW4gYW5kIG1heCBmb3IgYXBwbHlpbmcgcmFuZ2UgZmlsdGVyLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICpcbiAgICogQHBhcmFtIG1pbiByYW5nZSBtaW5cbiAgICogQHBhcmFtIG1heCByYW5nZSBtYXhcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5UmFuZ2VQYXJhbVR5cGUobWluOiBhbnksIG1heDogYW55KTogdm9pZCB7XG4gICAgaWYgKCFtaW4gJiYgIW1heCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIGF0IGxlYXN0IG9uZSBvZiBtaW4gb3IgbWF4IGlzIHJlcXVpcmVkLicpO1xuICAgIH1cblxuICAgIGlmIChtaW4gJiYgIVBhcmFtLmlzVHlwZU51bWJlcihtaW4pICYmICFQYXJhbS5pc1R5cGVEYXRlKG1pbikpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBvbmx5IERhdGUgYW5kIG51bWJlciBhcmUgYWxsb3dlZCBmb3IgcGFyYW1ldGVyIG1pbi4nKTtcbiAgICB9XG5cbiAgICBpZiAobWF4ICYmICFQYXJhbS5pc1R5cGVOdW1iZXIobWF4KSAmJiAhUGFyYW0uaXNUeXBlRGF0ZShtYXgpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgb25seSBEYXRlIGFuZCBudW1iZXIgYXJlIGFsbG93ZWQgZm9yIHBhcmFtZXRlciBtYXguJyk7XG4gICAgfVxuXG4gICAgaWYgKG1pbiAmJiBtYXggJiYgdHlwZW9mIChtaW4pICE9PSB0eXBlb2YgKG1heCkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IHNob3VsZCBiZSBvZiB0aGUgc2FtZSB0eXBlLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IHRoZSB6b25lSWQgaXMgcHJlc2VudCBpbiB0aGUgY3VycmVudCBkYXNoYm9hcmQgYW5kIGlzIEZsb2F0aW5nLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgZWl0aGVyIGNvbmRpdGlvbiBpcyBmYWxzZS5cbiAgICpcbiAgICogQHBhcmFtIGRhc2hib2FyZE9iamVjdHMgQW4gYXJyYXkgb2YgYWxsIERhc2hib2FyZE9iamVjdHMgaW4gdGhlIGN1cnJlbnQgZGFzaGJvYXJkXG4gICAqIEBwYXJhbSB6b25lSUQgWm9uZUlkIHRvIGJlIHZhbGlkYXRlZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlab25lSXNWYWxpZChkYXNoYm9hcmRPYmplY3RzOiBBcnJheTxEYXNoYm9hcmRPYmplY3Q+LCB6b25lSUQ6IG51bWJlcik6IHZvaWQge1xuXG4gICAgbGV0IGlzVmFsaWQgPSBkYXNoYm9hcmRPYmplY3RzLnNvbWUoKGRhc2hib2FyZE9iamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIGRhc2hib2FyZE9iamVjdC5pZCA9PT0gem9uZUlEICYmIGRhc2hib2FyZE9iamVjdC5pc0Zsb2F0aW5nO1xuICAgIH0pO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgYFVuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgWm9uZSBJZDogJHt6b25lSUR9IGlzIGVpdGhlciBub3QgcHJlc2VudCBvciBpcyBhIGZpeGVkIHpvbmUuYCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FcnJvckhlbHBlcnMudHMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4ZWN1dGVSZXNwb25zZSxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxuICBJbnRlcm5hbFRhYmxlYXVFcnJvcixcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uLy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcbmltcG9ydCB7IFNob3VsZFRocm93IH0gZnJvbSAnLi4vLi4vVXRpbHMvRW51bUNvbnZlcnRlcic7XG5cbi8qKlxuICogRWFjaCBTZXJ2Y2VJbXBsIHNob3VsZCBleHRlbmQgdGhpcyBiYXNlIGNsYXNzIGZvciB0aGUgc2FrZSBvZlxuICogcHJvcGVyIGVycm9yIGhhbmRsaW5nLiAgVGhpcyBiYXNlIGhhbmRsZXMgdGhlIGNvbnZlcnNpb25cbiAqIGZyb20gaW50ZXJuYWwgZXJyb3JzIHRvIGV4dGVybmFsIGVycm9ycyB0aGF0IHdlIHRocm93IHRvIGRldmVsb3BlcnNcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZpY2VJbXBsQmFzZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpIHsgfVxuXG4gIHByb3RlY3RlZCBleGVjdXRlKHZlcmI6IFZlcmJJZCwgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BhdGNoZXIuZXhlY3V0ZSh2ZXJiLCBwYXJhbXMpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgLy8gQW55IGludGVybmFsIGVycm9yIHRoYXQgY29tZXMgZnJvbSB0aGUgZGlzcGF0Y2hlciBzaG91bGQgYmUgY29udmVydGVkXG4gICAgICAvLyB0byBhbiBleHRlcm5hbCBlcnJvciB1c2luZyB0aGUgZW51bSBtYXBwZXIgZm9yIGVycm9yIGNvZGVzLlxuICAgICAgY29uc3QgaW50ZXJuYWxFcnJvciA9IGVycm9yIGFzIEludGVybmFsVGFibGVhdUVycm9yO1xuICAgICAgY29uc3QgZXh0ZXJuYWxFcnJvckNvZGU6IEVycm9yQ29kZXMgPSBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZXJyb3JDb2RlLmNvbnZlcnQoaW50ZXJuYWxFcnJvci5lcnJvckNvZGUsIFNob3VsZFRocm93Lk5vKTtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoZXh0ZXJuYWxFcnJvckNvZGUsIGludGVybmFsRXJyb3IubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlLnRzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgQ29sdW1uVHlwZSBhcyBFeHRlcm5hbENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUgYXMgRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLFxuICBEYXRhVHlwZSBhcyBFeHRlcm5hbERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlIGFzIEV4dGVybmFsRGF0ZVJhbmdlVHlwZSxcbiAgRXJyb3JDb2RlcyBhcyBFeHRlcm5hbEVycm9yQ29kZXMsXG4gIEV4dGVuc2lvbkNvbnRleHQgYXMgRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSBhcyBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlLFxuICBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSBhcyBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlIGFzIEV4dGVybmFsRmllbGRSb2xlVHlwZSxcbiAgRmlsdGVyVHlwZSBhcyBFeHRlcm5hbEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLFxuICBQYXJhbWV0ZXJWYWx1ZVR5cGUgYXMgRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUsXG4gIFBlcmlvZFR5cGUgYXMgRXh0ZXJuYWxEYXRlUGVyaW9kLFxuICBTaGVldFR5cGUgYXMgRXh0ZXJuYWxTaGVldFR5cGUsXG59IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcblxuaW1wb3J0IHtcbiAgQ29sdW1uVHlwZSBhcyBJbnRlcm5hbENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUgYXMgSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLFxuICBEYXRhVHlwZSBhcyBJbnRlcm5hbERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlIGFzIEludGVybmFsRGF0ZVJhbmdlVHlwZSxcbiAgRGF0ZVN0ZXBQZXJpb2QgYXMgSW50ZXJuYWxEYXRlU3RlcFBlcmlvZCxcbiAgRG9tYWluUmVzdHJpY3Rpb25UeXBlIGFzIEludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLFxuICBFcnJvckNvZGVzIGFzIEludGVybmFsRXJyb3JDb2RlcyxcbiAgRXh0ZW5zaW9uQ29udGV4dCBhcyBJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LFxuICBFeHRlbnNpb25Nb2RlIGFzIEludGVybmFsRXh0ZW5zaW9uc01vZGUsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlIGFzIEludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUgYXMgSW50ZXJuYWxGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJUeXBlIGFzIEludGVybmFsRmlsdGVyVHlwZSxcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFNoZWV0VHlwZSBhcyBJbnRlcm5hbFNoZWV0VHlwZSxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRW51bUNvbnZlcnRlciB9IGZyb20gJy4uL1V0aWxzL0VudW1Db252ZXJ0ZXInO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp0eXBlZGVmIC0gRGlzYWJsZSB0aGlzIHRvIG1ha2UgZGVjbGFyaW5nIHRoZXNlIGNsYXNzZXMgYSBiaXQgZWFzaWVyICovXG4vKipcbiAqIE1hcHMgZW51bXMgdXNlZCBieSB0aGUgaW50ZXJuYWwtYXBpLWNvbnRyYWN0IHRvIHRoZSBlbnVtcyB1c2VkXG4gKiBpbiB0aGUgZXh0ZXJuYWwtYXBpLWNvbnRyYWN0LCB3aGljaCBkZXZlbG9wZXJzIGNvZGUgYWdhaW5zdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB7XG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5zaW9uQ29udGV4dCA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQsIEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQ+KHtcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5EZXNrdG9wXTogRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5EZXNrdG9wLFxuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LlNlcnZlcl06IEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuU2VydmVyXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5zaW9uTW9kZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXh0ZW5zaW9uc01vZGUsIEV4dGVybmFsRXh0ZW5zaW9uc01vZGU+KHtcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zTW9kZS5BdXRob3JpbmddOiBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlLkF1dGhvcmluZyxcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zTW9kZS5WaWV3aW5nXTogRXh0ZXJuYWxFeHRlbnNpb25zTW9kZS5WaWV3aW5nXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgY29sdW1uVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsQ29sdW1uVHlwZSwgRXh0ZXJuYWxDb2x1bW5UeXBlPih7XG4gICAgW0ludGVybmFsQ29sdW1uVHlwZS5Db250aW51b3VzXTogRXh0ZXJuYWxDb2x1bW5UeXBlLkNvbnRpbnVvdXMsXG4gICAgW0ludGVybmFsQ29sdW1uVHlwZS5EaXNjcmV0ZV06IEV4dGVybmFsQ29sdW1uVHlwZS5EaXNjcmV0ZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpZWxkQWdncmVnYXRpb25UeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZSwgRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF0dHJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF0dHIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXZnXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdmcsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50ZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnRkLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkRheV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRGF5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkVuZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRW5kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkhvdXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkhvdXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSW5PdXRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkluT3V0LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkt1cnRvc2lzXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5LdXJ0b3NpcyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NYXhdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1heCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZHldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1keSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZWRpYW5dOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1lZGlhbixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW5dOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW51dGVdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbnV0ZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Nb250aFllYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1vbnRoWWVhcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ob25lXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ob25lLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF0cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXRyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQxLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0M106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQzLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNlY29uZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2Vjb25kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNrZXduZXNzXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ta2V3bmVzcyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXYsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZwXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldnAsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3VtXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdW0sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNEYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jRGF5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jSG91cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNIb3VyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTWludXRlXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01pbnV0ZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01vbnRoXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01vbnRoLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jUXRyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1F0cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1NlY29uZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNTZWNvbmQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNXZWVrXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1dlZWssXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1llYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVXNlcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVXNlcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJwXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJwLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWssXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2Vla2RheV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2Vla2RheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5ZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5ZZWFyLFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpZWxkUm9sZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpZWxkUm9sZVR5cGUsIEV4dGVybmFsRmllbGRSb2xlVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpZWxkUm9sZVR5cGUuRGltZW5zaW9uXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLkRpbWVuc2lvbixcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLk1lYXN1cmVdOiBFeHRlcm5hbEZpZWxkUm9sZVR5cGUuTWVhc3VyZSxcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLlVua25vd25dOiBFeHRlcm5hbEZpZWxkUm9sZVR5cGUuVW5rbm93bixcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBzaGVldFR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbFNoZWV0VHlwZSwgRXh0ZXJuYWxTaGVldFR5cGU+KHtcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuRGFzaGJvYXJkXTogRXh0ZXJuYWxTaGVldFR5cGUuRGFzaGJvYXJkLFxuICAgIFtJbnRlcm5hbFNoZWV0VHlwZS5TdG9yeV06IEV4dGVybmFsU2hlZXRUeXBlLlN0b3J5LFxuICAgIFtJbnRlcm5hbFNoZWV0VHlwZS5Xb3Jrc2hlZXRdOiBFeHRlcm5hbFNoZWV0VHlwZS5Xb3Jrc2hlZXRcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXNoYm9hcmRPYmplY3RUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLCBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGU+KHtcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkV4dGVuc2lvbl06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5FeHRlbnNpb24sXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5CbGFua106IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5CbGFuayxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkltYWdlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkltYWdlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuTGVnZW5kXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkxlZ2VuZCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhZ2VGaWx0ZXJdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFnZUZpbHRlcixcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhcmFtZXRlckNvbnRyb2xdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFyYW1ldGVyQ29udHJvbCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlF1aWNrRmlsdGVyXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlF1aWNrRmlsdGVyLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGV4dF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UZXh0LFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGl0bGVdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGl0bGUsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5XZWJQYWdlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldlYlBhZ2UsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5Xb3Jrc2hlZXRdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0XG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0YVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGFUeXBlLCBFeHRlcm5hbERhdGFUeXBlPih7XG4gICAgW0ludGVybmFsRGF0YVR5cGUuQm9vbF06IEV4dGVybmFsRGF0YVR5cGUuQm9vbCxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5EYXRlXTogRXh0ZXJuYWxEYXRhVHlwZS5EYXRlLFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkRhdGVUaW1lXTogRXh0ZXJuYWxEYXRhVHlwZS5EYXRlVGltZSxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5GbG9hdF06IEV4dGVybmFsRGF0YVR5cGUuRmxvYXQsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuSW50XTogRXh0ZXJuYWxEYXRhVHlwZS5JbnQsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuU3RyaW5nXTogRXh0ZXJuYWxEYXRhVHlwZS5TdHJpbmdcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJVcGRhdGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLCBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZF06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGQsXG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGxdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsLFxuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZSxcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGFsbG93YWJsZVZhbHVlcyA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLCBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZT4oe1xuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5BbGxdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5BbGwsXG4gICAgW0ludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLkxpc3RdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5MaXN0LFxuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5SYW5nZV06IEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLlJhbmdlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0ZVN0ZXBQZXJpb2QgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGVTdGVwUGVyaW9kLCBFeHRlcm5hbERhdGVQZXJpb2Q+KHtcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5ZZWFyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5ZZWFycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5RdWFydGVyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5RdWFydGVycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5Nb250aHNdOiBFeHRlcm5hbERhdGVQZXJpb2QuTW9udGhzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLldlZWtzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLldlZWtzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLkRheXNdOiBFeHRlcm5hbERhdGVQZXJpb2QuRGF5cyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5Ib3Vyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5Ib3VycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5NaW51dGVzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLk1pbnV0ZXMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuU2Vjb25kc106IEV4dGVybmFsRGF0ZVBlcmlvZC5TZWNvbmRzXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0ZVJhbmdlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGF0ZVJhbmdlVHlwZSwgRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlPih7XG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5DdXJyZW50XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLkN1cnJlbnQsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3QsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0Tl06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0TixcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHRdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dCxcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHROXTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHROLFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuVG9EYXRlXTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLlRvRGF0ZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGVycm9yQ29kZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXJyb3JDb2RlcywgRXh0ZXJuYWxFcnJvckNvZGVzPih7XG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5JTklUSUFMSVpBVElPTl9FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuSU5URVJOQUxfRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLk1JU1NJTkdfRU5VTV9NQVBQSU5HXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5NSVNTSU5HX1BBUkFNRVRFUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuUEVSTUlTU0lPTl9ERU5JRURdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlBSRVNfTU9ERUxfUEFSU0lOR19FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuVU5LTk9XTl9WRVJCX0lEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5WRVJTSU9OX05PVF9DT05GSUdVUkVEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkFQSU5vdEluaXRpYWxpemVkLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuVklTSUJJTElUWV9FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5WaXNpYmlsaXR5RXJyb3IsXG4gIH0sIEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yKTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpbHRlclR5cGUsIEV4dGVybmFsRmlsdGVyVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuQ2F0ZWdvcmljYWxdOiBFeHRlcm5hbEZpbHRlclR5cGUuQ2F0ZWdvcmljYWwsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5SYW5nZV06IEV4dGVybmFsRmlsdGVyVHlwZS5SYW5nZSxcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZV06IEV4dGVybmFsRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGUsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5IaWVyYXJjaGljYWxdOiBFeHRlcm5hbEZpbHRlclR5cGUuSGllcmFyY2hpY2FsXG4gIH0pO1xufVxuLyogdHNsaW50OmVuYWJsZTp0eXBlZGVmICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLnRzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUGFyYW0ge1xuICAvKipcbiAgICogc2VyaWFsaXplcyB0aGUgZGF0ZSBpbnRvIHRoZSBmb3JtYXQgdGhhdCB0aGUgc2VydmVyIGV4cGVjdHMuXG4gICAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIHNlcmlhbGl6ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgeWVhcjogbnVtYmVyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBkYXRlLmdldFVUQ01vbnRoKCkgKyAxO1xuICAgIGNvbnN0IGRheTogbnVtYmVyID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgY29uc3QgaGg6IG51bWJlciA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBjb25zdCBtbTogbnVtYmVyID0gZGF0ZS5nZXRVVENNaW51dGVzKCk7XG4gICAgY29uc3Qgc2VjOiBudW1iZXIgPSBkYXRlLmdldFVUQ1NlY29uZHMoKTtcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9ICR7aGh9OiR7bW19OiR7c2VjfWA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZUJvb2xlYW5Gb3JQbGF0Zm9ybShib29sOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYm9vbCA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZU51bWJlckZvclBsYXRmb3JtKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgaW5wdXQgaXMgYSBudW1iZXJcbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZU51bWJlcihpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoaW5wdXQpID09PSAnbnVtYmVyJyB8fCBpbnB1dCBpbnN0YW5jZW9mIE51bWJlcjtcbiAgfVxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgaW5wdXQgaXMgYSBEYXRlXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVEYXRlKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBEYXRlO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZVN0cmluZyhpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoaW5wdXQpID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZztcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVCb29sKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdib29sZWFuJyB8fCBpbnB1dCBpbnN0YW5jZW9mIEJvb2xlYW47XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplUGFyYW1ldGVyVmFsdWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKFBhcmFtLmlzVHlwZU51bWJlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVOdW1iZXJGb3JQbGF0Zm9ybSh2YWx1ZSBhcyBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAoUGFyYW0uaXNUeXBlRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0odmFsdWUgYXMgRGF0ZSk7XG4gICAgfSBlbHNlIGlmIChQYXJhbS5pc1R5cGVCb29sKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFBhcmFtLnNlcmlhbGl6ZUJvb2xlYW5Gb3JQbGF0Zm9ybSh2YWx1ZSBhcyBib29sZWFuKTtcbiAgICB9IGVsc2UgaWYgKFBhcmFtLmlzVHlwZVN0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBVbmV4cGVjdGVkIGludmFsaWQgdmFsdWUgZm9yOiAke3ZhbHVlfWApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvUGFyYW0udHMiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVGFibGVhdUV2ZW50VHlwZSwgRXJyb3JDb2RlcyB9IGZyb20gJy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogQ2xhc3MgZGVzaWduZWQgdG8gcmVnaXN0ZXIgYW5kIHVucmVnaXN0ZXIgaGFuZGxlcnMgZnJvbSBhIHVzZXIuIE9ubHkgdGhvc2UgZXZlbnRzXG4gKiB3aGljaCBhcmUgYWRkZWQgdmlhIEFkZE5ld0V2ZW50VHlwZSB3aWxsIGJlIHN1cHBvcnRlZCBieSB0aGlzIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LkV2ZW50TGlzdGVuZXJNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lck1hbmFnZXJzOiB7IFt0YWJsZWF1RXZlbnRUeXBlOiBzdHJpbmddOiBTaW5nbGVFdmVudE1hbmFnZXI7IH07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2VycyA9IHt9O1xuICB9XG5cbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBUYWJsZWF1RXZlbnRUeXBlLFxuICAgIGhhbmRsZXI6IENvbnRyYWN0LlRhYmxlYXVFdmVudEhhbmRsZXJGbik6IENvbnRyYWN0LlRhYmxlYXVFdmVudFVucmVnaXN0ZXJGbiB7XG4gICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnMuaGFzT3duUHJvcGVydHkoZXZlbnRUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLlVuc3VwcG9ydGVkRXZlbnROYW1lLCBgQ2Fubm90IGFkZCBldmVudCwgdW5zdXBwb3J0ZWQgZXZlbnQgdHlwZTogJHtldmVudFR5cGV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vyc1tldmVudFR5cGVdLmFkZEV2ZW50TGlzdGVuZXIoaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IFRhYmxlYXVFdmVudFR5cGUsIGhhbmRsZXI6IENvbnRyYWN0LlRhYmxlYXVFdmVudEhhbmRsZXJGbik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzLmhhc093blByb3BlcnR5KGV2ZW50VHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5VbnN1cHBvcnRlZEV2ZW50TmFtZSwgYENhbm5vdCByZW1vdmUgZXZlbnQsIHVuc3VwcG9ydGVkIGV2ZW50IHR5cGU6ICR7ZXZlbnRUeXBlfWApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnNbZXZlbnRUeXBlXS5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZE5ld0V2ZW50VHlwZShldmVudE1hbmFnZXI6IFNpbmdsZUV2ZW50TWFuYWdlcik6IHZvaWQge1xuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vyc1tldmVudE1hbmFnZXIuZXZlbnRUeXBlXSA9IGV2ZW50TWFuYWdlcjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRMaXN0ZW5lck1hbmFnZXIudHMiLCJpbXBvcnQgeyBWZXJzaW9uTnVtYmVyLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzLCBNb2RlbCwgTm90aWZpY2F0aW9uSWQgfSBmcm9tICcuLi8uLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0luaXRpYWxpemF0aW9uT3B0aW9ucyc7XG5cbi8qKlxuICogRW51bSBkZWZpbmluZyB0aGUgNCBkaWZmZXJlbnQgdHlwZXMgb2YgbWVzc2FnZXMgd2UgaGF2ZSBkZWZpbmVkXG4gKi9cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgSW5pdGlhbGl6ZSA9ICdpbml0aWFsaXplJyxcbiAgTm90aWZpY2F0aW9uID0gJ25vdGlmaWNhdGlvbicsXG4gIENvbW1hbmQgPSAnY29tbWFuZCcsXG4gIENvbW1hbmRSZXNwb25zZSA9ICdjb21tYW5kLXJlc3BvbnNlJyxcbiAgSGFuZHNoYWtlID0gJ3YtaGFuZHNoYWtlJyxcbiAgQWNrID0gJ3YtYWNrJ1xufVxuXG4vKipcbiAqIFRoZSBNZXNzYWdlIGludGVyZmFjZSBpcyB0aGUgYmFzZSBpbnRlcmZhY2UgZm9yIGFsbCB0aGUgb3RoZXJcbiAqIG1lc3NhZ2UgdHlwZSBpbnRlcmZhY2VzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAvKipcbiAgICogQSB1bmlxdWUgaWQgZm9yIHRoaXMgbWVzc2FnZVxuICAgKi9cbiAgbXNnR3VpZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGlzIG1lc3NhZ2VcbiAgICovXG4gIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlO1xufVxuXG4vKipcbiAqIFRoZSBpbml0aWFsaXplIG1lc3NhZ2UgaXMgdGhlIGZpcnN0IG1lc3NhZ2Ugd2hpY2ggd2lsbCBiZSBzZW50XG4gKiBmcm9tIHRoZSBqYXZhc2NyaXB0IHRvIHNldCB1cCBjb21tdW5pY2F0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEluaXRpYWxpemVNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgYXBpIHdoaWNoIHRoZSBzZW5kZXIgd2FudHMgdG8gdXNlXG4gICAqL1xuICBhcGlWZXJzaW9uOiBWZXJzaW9uTnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGlzIG1lc3NhZ2luZyBjb250cmFjdCB0byBiZSB1c2VkLiBGb3Igbm93LCB0aGVyZVxuICAgKiBzaG91bGQgb25seSBiZSBhIHNpbmdsZSB2ZXJzaW9uIGJ1dCBzZW5kaW5nIHRoaXMgYWxvbmcgc2hvdWxkIGhlbHBcbiAgICogaWYgd2UgbmVlZCB0byBhZGQgYSBuZXcgdmVyc2lvbiBpbiBhIGZ1dHVyZSByZWxlYXNlXG4gICAqL1xuICBjcm9zc0ZyYW1lVmVyc2lvbjogVmVyc2lvbk51bWJlcjtcblxuICAvKipcbiAgICogQWRkaXRpb25hbCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZCBhdCB0aGUgdGltZSBvZiBpbml0aWFsaXphdGlvblxuICAgKi9cbiAgb3B0aW9ucz86IEluaXRpYWxpemF0aW9uT3B0aW9ucztcbn1cblxuLyoqXG4gKiBUaGlzIG1lc3NhZ2UgaXMgc2VudCB3aGVuIGEgbm90aWZpY2F0aW9uIG9jY3VycyBmcm9tIHRoZSBwcmVzbGF5ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25NZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgaWQgZm9yIHRoaXMgdHlwZSBvZiBub3RpZmljYXRpb25cbiAgICovXG4gIG5vdGlmaWNhdGlvbklkOiBOb3RpZmljYXRpb25JZDtcblxuICAvKipcbiAgICogVGhlIGRhdGEgd2hpY2ggY2FtZSBhbG9uZyB3aXRoIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIGRhdGE6IE1vZGVsO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgY2FsbGluZyBhbiBpbnRlcm5hbCBjb250cmFjdCBjb21tYW5kXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZE1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgY29tbWFuZCB3aGljaCBzaG91bGQgYmUgZXhlY3V0ZWRcbiAgICovXG4gIHZlcmJJZDogVmVyYklkO1xuXG4gIC8qKlxuICAgKiBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGFyYW1ldGVycyBmb3IgdGhlIGNvbW1hbmRcbiAgICovXG4gIHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzO1xufVxuXG4vKipcbiAqIFRoaXMgbWVzc2FnZSBpcyBzZW50IGluIHJlc3BvbnNlIHRvIGEgQ29tbWFuZE1lc3NhZ2Ugd2l0aCB0aGVcbiAqIHJlc3VsdCBvZiB0aGF0IGNvbW1hbmRzIGludm9jYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kUmVzcG9uc2VNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBHdWlkIG9mIHRoZSBDb21tYW5kTWVzc2FnZSB3aGljaCB0aGlzIGlzIGluIHJlc3BvbnNlIHRvXG4gICAqL1xuICBjb21tYW5kR3VpZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiB0aGVyZSB3YXMgYW4gZXJyb3IgcmV0dXJuZWQgZnJvbSB0aGUgY29tbWFuZCwgdGhpcyB3aWxsIGJlIGRlZmluZWRcbiAgICogYW5kIGNvbnRhaW4gdGhlIGVycm9yXG4gICAqL1xuICBlcnJvcj86IE1vZGVsO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgY29tbWFuZCBleGVjdXRlZCBzdWNjZXNzZnVsbHksIHRoaXMgd2lsbCBjb250YWluIHRoZSBjb21tYW5kIHJlc3VsdFxuICAgKi9cbiAgZGF0YT86IE1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRzaGFrZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VUeXBlcy50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjb252ZXJ0cyBmcm9tIGEgc291cmNlIGVudW0gdmFsdWUgdG8gZGVzdGluYXRpb24gZW51bVxuICogdmFsdWUgZ2l2ZW4gYSBtYXBwaW5nIGZyb20gc291cmNlIHRvIGRlc3RpbmF0aW9uIHdoZW4gY29uc3RydWN0ZWQuXG4gKlxuICogTm90ZTogVGhpcyBleGFjdCBzYW1lIGNsYXNzIGlzIGRlZmluZWQgaW4gYXBpLWNvcmUuICBHaXZlbiBpdHMgc21hbGxcbiAqIG5hdHVyZSwgaXQgaXMgbm90IHdvcnRoIGhhdmluZyBpbiBhIHNlcGFyYXRlIHByb2plY3QgdG8gc2hhcmUgdGhpcyBiZXR3ZWVuXG4gKiBhcGktY29yZSBhbmQgYXBpLXNoYXJlZC4gIElmIG1vcmUgdXRpbGl0eSBmdW5jdGlvbmFsaXR5IGlzIGFkZGVkIHRoYXQgaXMgdXNlZCBieSBhcGktY29yZVxuICogYW5kIGFwaS1zaGFyZWQgYnV0IGhhcyBubyBvdGhlciBkZXBlbmRlY2llcywgYSB1dGlsdGl0eSBwcm9qZWN0IG1pZ2h0IGJlIG1lcml0ZWQsXG4gKiBhbmQgdGhpcyBjbGFzcyBjb3VsZCBiZSBtb3ZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudW1Db252ZXJ0ZXI8VFNvdXJjZVR5cGUgZXh0ZW5kcyBzdHJpbmcsIFREZXN0aW5hdGlvblR5cGU+IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21hcHBpbmdzOiB7IFtlbnVtVmFsOiBzdHJpbmddOiBURGVzdGluYXRpb25UeXBlOyB9LFxuICAgIHByaXZhdGUgX2RlZmF1bHRWYWw/OiBURGVzdGluYXRpb25UeXBlKSB7IH1cblxuICBwdWJsaWMgY29udmVydChlbnVtVmFsOiBUU291cmNlVHlwZSwgdGhyb3dJZk1pc3Npbmc6IFNob3VsZFRocm93ID0gU2hvdWxkVGhyb3cuWWVzKTogVERlc3RpbmF0aW9uVHlwZSB7XG4gICAgaWYgKHRoaXMuX21hcHBpbmdzLmhhc093blByb3BlcnR5KGVudW1WYWwpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwcGluZ3NbZW51bVZhbCBhcyBzdHJpbmddO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZWZhdWx0VmFsICE9PSB1bmRlZmluZWQgJiYgdGhyb3dJZk1pc3NpbmcgIT09IFNob3VsZFRocm93Llllcykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWYWw7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBFbnVtIE1hcHBpbmcgbm90IGZvdW5kIGZvcjogJHtlbnVtVmFsfWApO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFNob3VsZFRocm93IHtcbiAgWWVzID0gJ3llcycsXG4gIE5vID0gJ25vJyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0VudW1Db252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBUYWJsZWF1RXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4uL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIHRoZSBTaW5nbGVFdmVudE1hbmFnZXIgaW50ZXJmYWNlIGZvciBhIHNpbmdsZSB0eXBlIG9mIFRhYmxlYXUgZXZlbnRcbiAqXG4gKiBAdGVtcGxhdGUgVEV2ZW50VHlwZSBUaGUgVGFibGVhdSBldmVudCB0eXBlIHRoaXMgY2xhc3Mgc3BlY2lhbGl6ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbmdsZUV2ZW50TWFuYWdlckltcGw8VEV2ZW50VHlwZSBleHRlbmRzIENvbnRyYWN0LlRhYmxlYXVFdmVudD4gaW1wbGVtZW50cyBTaW5nbGVFdmVudE1hbmFnZXIge1xuICBwcml2YXRlIF9ldmVudFR5cGU6IFRhYmxlYXVFdmVudFR5cGU7XG4gIHByaXZhdGUgX2hhbmRsZXJzOiBBcnJheTwoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQ+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihldmVudFR5cGU6IFRhYmxlYXVFdmVudFR5cGUpIHtcbiAgICB0aGlzLl9ldmVudFR5cGUgPSBldmVudFR5cGU7XG4gICAgdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXZlbnRUeXBlKCk6IFRhYmxlYXVFdmVudFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9ldmVudFR5cGU7XG4gIH1cblxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihoYW5kbGVyOiAoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQpOiBDb250cmFjdC5UYWJsZWF1RXZlbnRVbnJlZ2lzdGVyRm4ge1xuICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXI6IChldmVudE9iajogVEV2ZW50VHlwZSkgPT4gdm9pZCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGJlZm9yZUNvdW50ID0gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xuICAgIHRoaXMuX2hhbmRsZXJzID0gdGhpcy5faGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XG4gICAgcmV0dXJuIGJlZm9yZUNvdW50ID4gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJFdmVudChldmVudEdlbmVyYXRvcjogKCkgPT4gVEV2ZW50VHlwZSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLl9oYW5kbGVycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXZlbnRNb2RlbCA9IGV2ZW50R2VuZXJhdG9yKCk7XG4gICAgICAgIGhhbmRsZXIoZXZlbnRNb2RlbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFNpbmNlIHRoaXMgaGFuZGxlciBjb3VsZCBiZSBvdXRzaWRlIG91ciBjb250cm9sLCBqdXN0IGNhdGNoIGFueXRoaW5nIGl0IHRocm93cyBhbmQgY29udGludWUgb25cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NpbmdsZUV2ZW50TWFuYWdlckltcGwudHMiLCJpbXBvcnQgeyBNYXJrVHlwZSwgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFUYWJsZSB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8QXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPj4sXG4gICAgcHJpdmF0ZSBfY29sdW1uczogQXJyYXk8Q29udHJhY3QuQ29sdW1uPixcbiAgICBwcml2YXRlIF90b3RhbFJvd0NvdW50OiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfaXNUb3RhbFJvd0NvdW50TGltaXRlZDogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pc1N1bW1hcnlEYXRhOiBib29sZWFuLFxuICAgIHByaXZhdGUgX21hcmtzSW5mbz86IEFycmF5PE1hcmtJbmZvPikge1xuICAgIC8vIFRPRE86IGdldCByaWQgb2YgdGhpcyBpbiByZWRlc2lnbi5cbiAgICB0aGlzLl9uYW1lID0gX2lzU3VtbWFyeURhdGEgPyAnU3VtbWFyeSBEYXRhIFRhYmxlJyA6ICdVbmRlcmx5aW5nIERhdGEgVGFibGUnO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKTogQXJyYXk8QXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCk6IEFycmF5PENvbnRyYWN0LkNvbHVtbj4ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXJrc0luZm8oKTogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWFya3NJbmZvO1xuICB9XG5cbiAgcHVibGljIGdldCB0b3RhbFJvd0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUm93Q291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzVG90YWxSb3dDb3VudExpbWl0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVG90YWxSb3dDb3VudExpbWl0ZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU3VtbWFyeURhdGEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3VtbWFyeURhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtJbmZvIGltcGxlbWVudHMgQ29udHJhY3QuTWFya0luZm8ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdHlwZTogTWFya1R5cGUsXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyxcbiAgICBwcml2YXRlIF90dXBsZUlkPzogTnVtYmVyXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IE1hcmtUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR1cGxlSWQoKTogTnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHVwbGVJZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uIGltcGxlbWVudHMgQ29udHJhY3QuQ29sdW1uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpZWxkTmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2RhdGFUeXBlOiBEYXRhVHlwZSwgLy8gVE9ETzogdGhpcyBzaG91ZGwgYmUgYW4gZW51bSB0eXBlXG4gICAgcHJpdmF0ZSBfaXNSZWZlcmVuY2VkOiBib29sZWFuLFxuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXIpIHsgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGUoKTogRGF0YVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9kYXRhVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZWZlcmVuY2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1JlZmVyZW5jZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVmFsdWUgaW1wbGVtZW50cyBDb250cmFjdC5EYXRhVmFsdWUge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnksXG4gICAgcHJpdmF0ZSBfZm9ybWF0dGVkVmFsdWU6IHN0cmluZykgeyB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0dGVkVmFsdWU7XG4gIH1cbiAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9HZXREYXRhTW9kZWxzLnRzIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2hlZXRUeXBlIH0gZnJvbSAnLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5cbmltcG9ydCB7IFNoZWV0SW1wbCB9IGZyb20gJy4vSW1wbC9TaGVldEltcGwnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXQgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LlNoZWV0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NoZWV0SW1wbDogU2hlZXRJbXBsKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRUeXBlKCk6IFNoZWV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5zaGVldFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5zaXplO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuZmluZFBhcmFtZXRlckFzeW5jKHBhcmFtZXRlck5hbWUsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlcnNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LlBhcmFtZXRlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLmdldFBhcmFtZXRlcnNBc3luYyh0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2hlZXQudHMiLCJpbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi9WZXJzaW9uTnVtYmVyJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXJDb250cmFjdCB9IGZyb20gJy4vVmVyc2lvbk51bWJlckNvbnRyYWN0JztcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBzaW5nbGV0b24gd3JhcHBlciBvZiBWZXJzaW9uTnVtYmVyXG4gKi9cbmV4cG9ydCBjbGFzcyBBcGlWZXJzaW9uIHtcblxuICAvLyBVc2luZyBzb21lIHdlYnBhY2sgdHJpY2tzLCB3ZSBjYW4gaW5qZWN0IHRoaXMgdmVyc2lvbiBpbnRvIG91ciBjb2RlIChraW5kYSBsaWtlIGMrKyBwcmVwcm9jZXNzb3Igc3R1ZmYpXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVmVyc2lvbk51bWJlckNvbnRyYWN0O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIHZlcnNpb24gbnVtYmVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogVmVyc2lvbk51bWJlckNvbnRyYWN0IHtcbiAgICByZXR1cm4gQXBpVmVyc2lvbi5faW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFNldFZlcnNpb25OdW1iZXIobnVtU3RyaW5nOiBzdHJpbmcsIGlzQWxwaGE6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBBcGlWZXJzaW9uLl9pbnN0YW5jZSA9IG5ldyBWZXJzaW9uTnVtYmVyKG51bVN0cmluZywgaXNBbHBoYSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0FwaVZlcnNpb24udHMiLCJleHBvcnQgZW51bSBOb3RpZmljYXRpb25JZCB7XG4gIFNlbGVjdGVkTWFya3NDaGFuZ2VkID0gJ3NlbGVjdGVkLW1hcmtzLWNoYW5nZWQnLFxuICBQYXJhbWV0ZXJDaGFuZ2VkID0gJ3BhcmFtZXRlci1jaGFuZ2VkJyxcbiAgRmlsdGVyQ2hhbmdlZCA9ICdmaWx0ZXItY2hhbmdlZCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1VwZGF0ZSA9ICdleHRlbnNpb24tZGlhbG9nLXVwZGF0ZScsXG4gIFNldHRpbmdzQ2hhbmdlZCA9ICdzZXR0aW5ncy1jaGFuZ2VkJyxcbiAgQ29udGV4dE1lbnVDbGljayA9ICdjb250ZXh0LW1lbnUtY2xpY2snLFxuICBUZXN0Q29udmVyc2lvbk5vdGlmaWNhdGlvbiA9ICd0ZXN0LWNvbnZlcnNpb24tbm90aWZpY2F0aW9uJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9Ob3RpZmljYXRpb25zLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9ucyBmcm9tICcuL1ZlcnNpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgRG93bmdyYWRlVjJXb3Jrc2hlZXROYW1lcywgRG93bmdyYWRlRmxpcGJvYXJkWm9uZUlEIH0gZnJvbSAnLi9WZXJzaW9uVHJhbnNsYXRpb25zJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEByZXR1cm5zIHRydWUgaWYgbGhzIDwgcmhzIChpZ25vcmluZyBmaXggbnVtYmVyKVxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICovXG5leHBvcnQgZnVuY3Rpb24gVmVyc2lvbkxlc3NUaGFuKGxoczogVmVyc2lvbk51bWJlciwgcmhzOiBWZXJzaW9uTnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChsaHMubWFqb3IgPiByaHMubWFqb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGxocy5tYWpvciA8IHJocy5tYWpvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiAobGhzLm1pbm9yIDwgcmhzLm1pbm9yKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB0cnVlIGlmIGxocyA9PSByaHMgKGlnbm9yaW5nIGZpeCBudW1iZXIpXG4gKiBAcGFyYW0gbGhzXG4gKiBAcGFyYW0gcmhzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBWZXJzaW9uRXF1YWxUbyhsaHM6IFZlcnNpb25OdW1iZXIsIHJoczogVmVyc2lvbk51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGxocy5tYWpvciA9PT0gcmhzLm1ham9yKSAmJiAobGhzLm1pbm9yID09PSByaHMubWlub3IpO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFRoaXMgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZCwgYW5kIHdpbGwgbm90IGJlIGNhbGxlZCBmcm9tIGFwaS1wbGF0Zm9ybSBpbiAyMDE5LjIrLlxuICpcbiAqIENyZWF0ZXMgYSBuZXcgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgd2hpY2ggaGFzIHRoZSBhYmlsaXR5IHRvIHVwZ3JhZGUgYW5kIGRvd25ncmFkZSB0aGUgY29udHJhY3QgYmV0d2VlbiB0aGUgdHdvIHZlcnNpb25zXG4gKiB3aGljaCBhcmUgc3BlY2lmaWVkLiBJZiBleHRlcm5hbE1ham9yVmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gcGxhdGZvcm1NYWpvclZlcnNpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGJlY2F1c2VcbiAqIHdlIHdvbid0IGtub3cgaG93IHRvIGRvIHRob3NlIGNvbnZlcnNpb25zLlxuICpcbiAqIEBzZWUgQ3JlYXRlQ29tcGF0aWJsZVZlcnNpb25Db252ZXJ0ZXJcbiAqXG4gKiBAcGFyYW0gZXh0ZXJuYWxNYWpvclZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIHVzaW5nXG4gKiBAcGFyYW0gcGxhdGZvcm1NYWpvclZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgcGxhdGZvcm0gaXMgdXNpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVZlcnNpb25Db252ZXJ0ZXIoZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlciwgcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcik6IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICAvLyBBIG1hcHBpbmcgZnJvbSB0aGUgc291cmNlIHZlcnNpb24gb2YgYSBtb2RlbCAtPiB0aGUgbmV4dCB2ZXJzaW9uIG9mIHRoZSBtb2RlbC4gRWFjaCBtYWpvclxuICAvLyB2ZXJzaW9uIGJ1bXAgY2FuIGhhdmUgYW4gYXJyYXkgb2YgY29udmVyc2lvbnMgdG8gcGVyZm9ybSBpbiBvcmRlclxuICBjb25zdCBleGVjdXRlVXBncmFkZXM6IHsgW3ZlcnNpb246IG51bWJlcl06IEFycmF5PFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+IH0gPSB7XG4gICAgMDogW11cbiAgfTtcblxuICBjb25zdCBleGVjdXRlRG93bmdyYWRlczogeyBbdmVyc2lvbjogbnVtYmVyXTogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+IH0gPSB7XG4gICAgMDogW10sXG4gICAgMTogW0Rvd25ncmFkZVYyV29ya3NoZWV0TmFtZXNdXG4gIH07XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uRG93bmdyYWRlczogeyBbdmVyc2lvbjogbnVtYmVyXTogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4gfSA9IHtcbiAgICAwOiBbXVxuICB9O1xuXG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihleHRlcm5hbE1ham9yVmVyc2lvbikgfHxcbiAgICAhTnVtYmVyLmlzSW50ZWdlcihwbGF0Zm9ybU1ham9yVmVyc2lvbikgfHxcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbiA8IDAgfHxcbiAgICBwbGF0Zm9ybU1ham9yVmVyc2lvbiA8IDApIHtcblxuICAgIHRocm93IG5ldyBFcnJvcihgVmVyc2lvbnMgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyczpcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbj0ke2V4dGVybmFsTWFqb3JWZXJzaW9ufSBwbGF0Zm9ybU1ham9yVmVyc2lvbj0ke3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICB9XG5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uID4gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4dGVybmFsIHZlcnNpb24gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gcGxhdGZvcm0gdmVyc2lvbi5cbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbj0ke2V4dGVybmFsTWFqb3JWZXJzaW9ufSBwbGF0Zm9ybU1ham9yVmVyc2lvbj0ke3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICB9XG5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uID09PSBwbGF0Zm9ybU1ham9yVmVyc2lvbikge1xuICAgIC8vIElmIHdlIGFyZSB1c2luZyB0aGUgZXhhY3Qgc2FtZSB2ZXJzaW9ucywganVzdCB1c2UgdGhlIGlkZW50aXR5IGNvbnZlcnRlclxuICAgIHJldHVybiBuZXcgSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyKCk7XG4gIH1cblxuICAvLyBXYWxrIHRoZSBzcGFuIGJldHdlZW4gdGhlIHZlcnNpb25zIHdlIGhhdmUgaGVyZSBhbmQgY29sbGVjdCB0aGUgdXBncmFkZSBhbmQgZG93bmdyYWRlcyBuZWNlc3NhcnlcbiAgbGV0IG5lZWRlZEV4ZWN1dGVVcGdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IGV4dGVybmFsTWFqb3JWZXJzaW9uOyBpIDwgcGxhdGZvcm1NYWpvclZlcnNpb247IGkrKykge1xuICAgIGlmIChpIGluIGV4ZWN1dGVVcGdyYWRlcykge1xuICAgICAgbmVlZGVkRXhlY3V0ZVVwZ3JhZGVzLnB1c2goLi4uZXhlY3V0ZVVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBXYWxrIHRoZSBzcGFuIGJldHdlZW4gdGhlbSBiYWNrd2FyZHMgdG8gZ2V0IHRoZSBuZWNlc3NhcnkgZG93bmdyYWRlc1xuICBsZXQgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiA9IFtdO1xuICBsZXQgbmVlZGVkTm90aWZpY2F0aW9uRG93bmdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IHBsYXRmb3JtTWFqb3JWZXJzaW9uIC0gMTsgaSA+PSBleHRlcm5hbE1ham9yVmVyc2lvbjsgaS0tKSB7XG4gICAgaWYgKGkgaW4gZXhlY3V0ZURvd25ncmFkZXMpIHtcbiAgICAgIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLnB1c2goLi4uZXhlY3V0ZURvd25ncmFkZXNbaV0pO1xuICAgIH1cblxuICAgIGlmIChpIGluIG5vdGlmaWNhdGlvbkRvd25ncmFkZXMpIHtcbiAgICAgIG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXMucHVzaCguLi5ub3RpZmljYXRpb25Eb3duZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlcihcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbiwgcGxhdGZvcm1NYWpvclZlcnNpb24sIG5lZWRlZEV4ZWN1dGVVcGdyYWRlcywgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXMsIG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXMpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ham9yTWlub3JUcmFuc2xhdG9yczxUPiB7IFttYWpvcjogbnVtYmVyXTogeyBbbWlub3I6IG51bWJlcl06IEFycmF5PFQ+IH07IH1cblxuLy8gQSBtYXBwaW5nIGZyb20gYW4gb2xkZXIgY2xpZW50IHZlcnNpb24gb2YgaW50ZXJuYWwtY29udHJhY3QgdG8gdGhlIGN1cnJlbnQgcGxhdGZvcm0gdmVyc2lvbiBvZiB0aGlzIGNvbnRyYWN0LlxuLy8gRWFjaCB2ZXJzaW9uIGJ1bXAgY2FuIGhhdmUgYW4gYXJyYXkgb2YgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gaW4gb3JkZXIuIE5vdGljZSB0aGF0IHRoaXMgaXNcbi8vIGRpZmZlcmVudCB0aGFuIHRoZSBtYWpvciB1cGdyYWRlcy9kb3duZ3JhZGVzIGFib3ZlIGJlY2F1c2UgaXQgaGFuZGxlcyBib3RoIG1ham9yIGFuZCBtaW5vciB2ZXJzaW9uIGNoYW5nZXMuXG4vLyBBbHNvIHBsZWFzZSBub3RlOiBkb3duZ3JhZGVFeGVjdXRlQ2FsbCBpcyBoYW5kbGVkIG9uIHRoZSBjbGllbnQvZXh0ZXJuYWwgc2lkZSByYXRoZXIgdGhhbiBwbGF0Zm9ybSBzaWRlLlxuLy8gV2hlbiB1cGRhdGluZyB0aGUgbWFqb3Igb3IgbWlub3IgdmVyc2lvbiBvZiBvdXIgaW50ZXJuYWwtY29udHJhY3QsIHlvdSB3aWxsIG5lZWQgdG8gdXBkYXRlIHRoZXNlIGRhdGEgc3RydWN0dXJlcy5cbi8vICogSWYgdGhlcmUgYXJlIHRyYW5zbGF0aW9ucyB0byBhZGQsIGFkZCB0aGVtIHRvIHRoZSB2ZXJzaW9uIHRvIFwidXBncmFkZSBmcm9tXCIgb3IgXCJkb3duZ3JhZGUgdG9cIi5cbmV4cG9ydCBjb25zdCBFeGVjdXRlTWlub3JVcGdyYWRlczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+ID0ge1xuICAxOiB7XG4gICAgOTogW10sICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgd2UgcHV0IHVwZ3JhZGVzIGZyb20gMS45IHRvIDEuMTAgaW4gdGhlIFsxXVs5XSBidWNrZXRcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEV4ZWN1dGVNaW5vckRvd25ncmFkZXM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4gPSB7XG4gIDE6IHtcbiAgICA5OiBbXSxcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbk1pbm9yRG93bmdyYWRlczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+ID0ge1xuICAxOiB7XG4gICAgOTogW10sXG4gICAgMTA6IFtEb3duZ3JhZGVGbGlwYm9hcmRab25lSURdXG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB3aGljaCBoYXMgdGhlIGFiaWxpdHkgdG8gdXBncmFkZSBhbmQgZG93bmdyYWRlIHRoZSBjb250cmFjdCBiZXR3ZWVuIHRoZSB0d28gdmVyc2lvbnNcbiAqIHdoaWNoIGFyZSBzcGVjaWZpZWQuIElmIGV4dGVybmFsTWFqb3JWZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBwbGF0Zm9ybU1ham9yVmVyc2lvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gYmVjYXVzZVxuICogd2Ugd29uJ3Qga25vdyBob3cgdG8gZG8gdGhvc2UgY29udmVyc2lvbnMuIEFzIGNvbXBhcmVkIHRvIENyZWF0ZVZlcnNpb25Db252ZXJ0ZXIsIHRoaXMgY29udmVydGVyIGNhbiBhbHNvIGhhbmRsZVxuICogbWlub3IgdXBkYXRlcywgd2l0aCB1cGdyYWRlL2Rvd25ncmFkZSBmb3IgYm90aCBtYWpvciBhbmQgbWlub3IgdXBkYXRlcy5cbiAqXG4gKiBAcGFyYW0gZXh0ZXJuYWxWZXJzaW9uIFZlcnNpb25OdW1iZXIgb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIHVzaW5nXG4gKiBAcGFyYW0gcGxhdGZvcm1WZXJzaW9uIFZlcnNpb25OdW1iZXIgb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgcGxhdGZvcm0gaXMgdXNpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyKFxuICBleHRlcm5hbFZlcnNpb246IFZlcnNpb25OdW1iZXIsXG4gIHBsYXRmb3JtVmVyc2lvbjogVmVyc2lvbk51bWJlcik6IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICByZXR1cm4gQ3JlYXRlQ29tcGF0aWJsZVZlcnNpb25Db252ZXJ0ZXJXaXRoVHJhbnNsYXRvcnMoXG4gICAgZXh0ZXJuYWxWZXJzaW9uLFxuICAgIHBsYXRmb3JtVmVyc2lvbixcbiAgICBFeGVjdXRlTWlub3JVcGdyYWRlcyxcbiAgICBFeGVjdXRlTWlub3JEb3duZ3JhZGVzLFxuICAgIE5vdGlmaWNhdGlvbk1pbm9yRG93bmdyYWRlcyk7XG59XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgQ3JlYXRlQ29tcGF0aWJsZVZlcnNpb25Db252ZXJ0ZXIuIFRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIHVwZ3JhZGUsIGRvd25ncmFkZSwgYW5kXG4gKiBub3RpZmljYXRpb24gYXJyYXlzIHNvIHRoYXQgYWxsIHRoZSBsb2dpYyBjYW4gYmUgdGVzdGVkLlxuICpcbiAqIEBwYXJhbSBleHRlcm5hbFZlcnNpb24gVmVyc2lvbk51bWJlciBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBleHRlcm5hbCBtb2R1bGUgaXMgdXNpbmdcbiAqIEBwYXJhbSBwbGF0Zm9ybVZlcnNpb24gVmVyc2lvbk51bWJlciBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBwbGF0Zm9ybSBpcyB1c2luZ1xuICogQHBhcmFtIHVwZ3JhZGVzIE1ham9yTWlub3JUcmFuc2xhdG9ycyBmb3IgdXBncmFkZXNcbiAqIEBwYXJhbSBkb3duZ3JhZGVzIE1ham9yTWlub3JUcmFuc2xhdG9ycyBmb3IgZG93bmdyYWRlc1xuICogQHBhcmFtIG5vdGlmaWNhdGlvbkRvd25ncmFkZXMgTWFqb3JNaW5vclRyYW5zbGF0b3JzIGZvciBub3RpZmljYXRpb24gZG93bmdyYWRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ29tcGF0aWJsZVZlcnNpb25Db252ZXJ0ZXJXaXRoVHJhbnNsYXRvcnMoXG4gIGV4dGVybmFsVmVyc2lvbjogVmVyc2lvbk51bWJlcixcbiAgcGxhdGZvcm1WZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICB1cGdyYWRlczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+LFxuICBkb3duZ3JhZGVzOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICBub3RpZmljYXRpb25Eb3duZ3JhZGVzOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4pOiBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG5cbiAgY29uc3QgZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlciA9IGV4dGVybmFsVmVyc2lvbi5tYWpvcjtcbiAgY29uc3QgZXh0ZXJuYWxNaW5vclZlcnNpb246IG51bWJlciA9IGV4dGVybmFsVmVyc2lvbi5taW5vcjtcbiAgY29uc3QgcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlciA9IHBsYXRmb3JtVmVyc2lvbi5tYWpvcjtcblxuICBpZiAoZXh0ZXJuYWxNYWpvclZlcnNpb24gPiBwbGF0Zm9ybU1ham9yVmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXh0ZXJuYWwgdmVyc2lvbiBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBwbGF0Zm9ybSB2ZXJzaW9uLlxuICAgIGV4dGVybmFsTWFqb3JWZXJzaW9uPSR7ZXh0ZXJuYWxNYWpvclZlcnNpb259IHBsYXRmb3JtTWFqb3JWZXJzaW9uPSR7cGxhdGZvcm1NYWpvclZlcnNpb259YCk7XG4gIH1cblxuICAvLyBJZiB3ZSBhcmUgdXNpbmcgdGhlIGV4YWN0IHNhbWUgdmVyc2lvbnMgKG1ham9yLm1pbm9yKSwganVzdCB1c2UgdGhlIGlkZW50aXR5IGNvbnZlcnRlclxuICBpZiAoVmVyc2lvbkVxdWFsVG8oZXh0ZXJuYWxWZXJzaW9uLCBwbGF0Zm9ybVZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIoKTtcbiAgfVxuXG4gIC8vIFdhbGsgdGhlIHNwYW4gYmV0d2VlbiB0aGUgdmVyc2lvbnMgd2UgaGF2ZSBoZXJlIGFuZCBjb2xsZWN0IHRoZSB1cGdyYWRlIGFuZCBkb3duZ3JhZGVzIG5lY2Vzc2FyeVxuICBsZXQgbmVlZGVkRXhlY3V0ZVVwZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPiA9XG4gICAgR2V0TmVlZGVkVHJhbnNsYXRpb25zKGV4dGVybmFsTWFqb3JWZXJzaW9uLCBwbGF0Zm9ybU1ham9yVmVyc2lvbiwgZXh0ZXJuYWxNaW5vclZlcnNpb24sIHVwZ3JhZGVzKTtcblxuICBsZXQgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiA9XG4gICAgR2V0TmVlZGVkVHJhbnNsYXRpb25zKGV4dGVybmFsTWFqb3JWZXJzaW9uLCBwbGF0Zm9ybU1ham9yVmVyc2lvbiwgZXh0ZXJuYWxNaW5vclZlcnNpb24sIGRvd25ncmFkZXMpO1xuXG4gIGxldCBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPiA9XG4gICAgR2V0TmVlZGVkVHJhbnNsYXRpb25zKGV4dGVybmFsTWFqb3JWZXJzaW9uLCBwbGF0Zm9ybU1ham9yVmVyc2lvbiwgZXh0ZXJuYWxNaW5vclZlcnNpb24sIG5vdGlmaWNhdGlvbkRvd25ncmFkZXMpO1xuXG4gIC8vIFdlIHdhbnQgdG8gYXBwbHkgdGhlIGRvd25ncmFkZXMgaW4gcmV2ZXJzZSBvcmRlciBpbiBjYXNlIG9mIGRlcGVuZGVuY2llcyBiZXR3ZWVuIHRoZW1cbiAgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXMucmV2ZXJzZSgpO1xuICBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzLnJldmVyc2UoKTtcblxuICByZXR1cm4gU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLmZyb21EYXRhKFxuICAgIGV4dGVybmFsVmVyc2lvbiwgcGxhdGZvcm1WZXJzaW9uLCBuZWVkZWRFeGVjdXRlVXBncmFkZXMsIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLCBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzKTtcbn1cblxuZnVuY3Rpb24gR2V0TmVlZGVkVHJhbnNsYXRpb25zPFQ+KFxuICBleHRlcm5hbE1ham9yVmVyc2lvbjogbnVtYmVyLFxuICBwbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyLFxuICBleHRlcm5hbE1pbm9yVmVyc2lvbjogbnVtYmVyLFxuICBtYWpvck1pbm9yVHJhbnNsYXRvcnM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUPik6IEFycmF5PFQ+IHtcblxuICBsZXQgbmVlZGVkVHJhbnNsYXRpb25zOiBBcnJheTxUPiA9IFtdO1xuXG4gIGZvciAobGV0IG1ham9yID0gZXh0ZXJuYWxNYWpvclZlcnNpb247IG1ham9yIDw9IHBsYXRmb3JtTWFqb3JWZXJzaW9uOyBtYWpvcisrKSB7XG4gICAgaWYgKG1ham9yIGluIG1ham9yTWlub3JUcmFuc2xhdG9ycykge1xuICAgICAgbGV0IHN0YXJ0ID0gKG1ham9yID09PSBleHRlcm5hbE1ham9yVmVyc2lvbikgPyBleHRlcm5hbE1pbm9yVmVyc2lvbiA6IDA7XG4gICAgICBsZXQgbWF4aW11bU1pbm9yVmVyc2lvbiA9IEdldE1heGltdW1NaW5vckluZGV4KE9iamVjdC5rZXlzKG1ham9yTWlub3JUcmFuc2xhdG9yc1ttYWpvcl0pKTtcbiAgICAgIGZvciAobGV0IG1pbm9yID0gc3RhcnQ7IG1pbm9yIDw9IG1heGltdW1NaW5vclZlcnNpb247IG1pbm9yKyspIHtcbiAgICAgICAgaWYgKG1pbm9yIGluIG1ham9yTWlub3JUcmFuc2xhdG9yc1ttYWpvcl0pIHtcbiAgICAgICAgICBuZWVkZWRUcmFuc2xhdGlvbnMucHVzaCguLi5tYWpvck1pbm9yVHJhbnNsYXRvcnNbbWFqb3JdW21pbm9yXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmVlZGVkVHJhbnNsYXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR2V0TWF4aW11bU1pbm9ySW5kZXgobWlub3JWZXJzaW9uczogQXJyYXk8c3RyaW5nPik6IG51bWJlciB7XG4gIHJldHVybiBtaW5vclZlcnNpb25zLm1hcCgoYSkgPT4gTnVtYmVyKGEpKS5yZWR1Y2UoKGEsIGIpID0+IGEgPiBiID8gYSA6IGIpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5LnRzIiwiaW1wb3J0IHsgRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVQYXJhbWV0ZXJzLCBFeGVjdXRlUmVzcG9uc2UsIE5vdGlmaWNhdGlvbiwgVmVyYklkIH0gZnJvbSAnLi4vLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhpcyB2ZXJzaW9uIGNvbnZlcnRlciBkb2Vzbid0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGJ1dCBpcyB1c2VmdWwgZm9yIHRlc3Rpbmcgb3Igd2hlbiB3ZSBoYXZlXG4gKiBhIG1hdGNoaW5nIHBsYXRmb3JtIGFuZCBleHRlcm5hbCB2ZXJzaW9uIG51bWJlclxuKi9cbmV4cG9ydCBjbGFzcyBFeHRlcm5hbElkZW50aXR5VmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEV4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVDYWxsKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KTogeyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzOyB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmVyYjogdmVyYiBhcyBWZXJiSWQsXG4gICAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIGFzIEV4ZWN1dGVQYXJhbWV0ZXJzXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZVJldHVybihleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSk6IEV4ZWN1dGVSZXNwb25zZSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGdyYWRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvZXh0ZXJuYWwvRXh0ZXJuYWxJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIudHMiLCIoZnVuY3Rpb24gKCkge1xuICB2YXIgdmFsaWRhdG9yID0gbmV3IFJlZ0V4cChcIl5bYS16MC05XXs4fS1bYS16MC05XXs0fS1bYS16MC05XXs0fS1bYS16MC05XXs0fS1bYS16MC05XXsxMn0kXCIsIFwiaVwiKTtcblxuICBmdW5jdGlvbiBnZW4oY291bnQpIHtcbiAgICB2YXIgb3V0ID0gXCJcIjtcbiAgICBmb3IgKHZhciBpPTA7IGk8Y291bnQ7IGkrKykge1xuICAgICAgb3V0ICs9ICgoKDErTWF0aC5yYW5kb20oKSkqMHgxMDAwMCl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEd1aWQoZ3VpZCkge1xuICAgIGlmICghZ3VpZCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXJndW1lbnQ7IGB2YWx1ZWAgaGFzIG5vIHZhbHVlLlwiKTtcbiAgICAgIFxuICAgIHRoaXMudmFsdWUgPSBHdWlkLkVNUFRZO1xuICAgIFxuICAgIGlmIChndWlkICYmIGd1aWQgaW5zdGFuY2VvZiBHdWlkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZ3VpZC50b1N0cmluZygpO1xuXG4gICAgfSBlbHNlIGlmIChndWlkICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChndWlkKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIiAmJiBHdWlkLmlzR3VpZChndWlkKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGd1aWQ7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIC8vIENvbXBhcmluZyBzdHJpbmcgYHZhbHVlYCBhZ2FpbnN0IHByb3ZpZGVkIGBndWlkYCB3aWxsIGF1dG8tY2FsbFxuICAgICAgLy8gdG9TdHJpbmcgb24gYGd1aWRgIGZvciBjb21wYXJpc29uXG4gICAgICByZXR1cm4gR3VpZC5pc0d1aWQob3RoZXIpICYmIHRoaXMudmFsdWUgPT0gb3RoZXI7XG4gICAgfTtcblxuICAgIHRoaXMuaXNFbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IEd1aWQuRU1QVFk7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIFxuICAgIHRoaXMudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIEd1aWQuRU1QVFkgPSBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiO1xuXG4gIEd1aWQuaXNHdWlkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlIGluc3RhbmNlb2YgR3VpZCB8fCB2YWxpZGF0b3IudGVzdCh2YWx1ZS50b1N0cmluZygpKSk7XG4gIH07XG5cbiAgR3VpZC5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEd1aWQoW2dlbigyKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigxKSwgZ2VuKDMpXS5qb2luKFwiLVwiKSk7XG4gIH07XG5cbiAgR3VpZC5yYXcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW2dlbigyKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigxKSwgZ2VuKDMpXS5qb2luKFwiLVwiKTtcbiAgfTtcblxuICBpZih0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBHdWlkO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuR3VpZCA9IEd1aWQ7XG4gIH1cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZ3VpZC9ndWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBUYWJsZWF1RXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1RXZlbnQge1xuICBwcml2YXRlIF90eXBlOiBUYWJsZWF1RXZlbnRUeXBlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBUYWJsZWF1RXZlbnRUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogVGFibGVhdUV2ZW50VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJpbXBvcnQgeyBTaGVldFR5cGUgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNoZWV0UGF0aCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1BhcmFtZXRlcnNTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hlZXRJbmZvSW1wbDogU2hlZXRJbmZvSW1wbCkge1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRUeXBlKCk6IFNoZWV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbmZvSW1wbC5zaGVldFBhdGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihwYXJhbWV0ZXJOYW1lLCAncGFyYW1ldGVyTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZmluZFBhcmFtZXRlckJ5TmFtZUFzeW5jKHBhcmFtZXRlck5hbWUsIHNoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzQXN5bmMoc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5QYXJhbWV0ZXI+PiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzaGVldCwgJ3NoZWV0Jyk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8UGFyYW1ldGVyc1NlcnZpY2U+KFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRQYXJhbWV0ZXJzRm9yU2hlZXRBc3luYyh0aGlzLnNoZWV0UGF0aCwgc2hlZXQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4vSW1wbC9EYXRhU291cmNlSW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlIGltcGxlbWVudHMgQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU291cmNlSW1wbDogRGF0YVNvdXJjZUltcGwpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRzKCk6IEFycmF5PENvbnRyYWN0LkZpZWxkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmZpZWxkcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXh0cmFjdFVwZGF0ZVRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuZXh0cmFjdFVwZGF0ZVRpbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXh0cmFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuaXNFeHRyYWN0O1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwucmVmcmVzaEFzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVGFibGVzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldEFjdGl2ZVRhYmxlc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucz86IENvbnRyYWN0LkRhdGFTb3VyY2VVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOlxuICAgIFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0RhdGFTb3VyY2UudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRmllbGRJbXBsIH0gZnJvbSAnLi9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uU3VtbWFyeSB9IGZyb20gJy4uL0Nvbm5lY3Rpb25TdW1tYXJ5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vRmllbGQnO1xuaW1wb3J0IHsgVGFibGVTdW1tYXJ5IH0gZnJvbSAnLi4vVGFibGVTdW1tYXJ5JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0dldERhdGFTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlSW1wbCB7XG4gIHByaXZhdGUgX2ZpZWxkczogQXJyYXk8RmllbGQ+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU291cmNlSW5mbzogSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlKSB7XG4gICAgdGhpcy5fZmllbGRzID0gX2RhdGFTb3VyY2VJbmZvLmZpZWxkcy5tYXAoZmllbGRNb2RlbCA9PiB7XG4gICAgICBjb25zdCBmaWVsZEltcGwgPSBuZXcgRmllbGRJbXBsKGZpZWxkTW9kZWwsIHRoaXMpO1xuICAgICAgcmV0dXJuIG5ldyBGaWVsZChmaWVsZEltcGwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBleHRyYWN0VXBkYXRlVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5leHRyYWN0VXBkYXRlVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRzKCk6IEFycmF5PENvbnRyYWN0LkZpZWxkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNFeHRyYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5pc0V4dHJhY3Q7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaEFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBkYXRhU291cmNlU2VydmljZS5yZWZyZXNoQXN5bmModGhpcy5fZGF0YVNvdXJjZUluZm8uaWQpO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5W10+IHtcbiAgICBjb25zdCBkYXRhU291cmNlU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVNlcnZpY2UuZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKS50aGVuPENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5W10+KHN1bW1hcmllcyA9PiB7XG4gICAgICByZXR1cm4gc3VtbWFyaWVzLm1hcChzdW1tYXJ5ID0+IG5ldyBDb25uZWN0aW9uU3VtbWFyeShzdW1tYXJ5KSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVGFibGVzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oXG4gICAgICBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VTZXJ2aWNlLmdldEFjdGl2ZVRhYmxlc0FzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKS50aGVuPEFycmF5PENvbnRyYWN0LlRhYmxlU3VtbWFyeT4+KHRhYmxlSW5mb3MgPT4ge1xuICAgICAgcmV0dXJuIHRhYmxlSW5mb3MubWFwKHRhYmxlSW5mbyA9PiBuZXcgVGFibGVTdW1tYXJ5KHRhYmxlSW5mbykpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucz86IENvbnRyYWN0LkRhdGFTb3VyY2VVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOlxuICAgIFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG5cbiAgICBjb25zdCBnZXREYXRhU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICByZXR1cm4gZ2V0RGF0YVNlcnZpY2UuZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICAgIHRoaXMuaWQsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCAwLCAgICAgICAvLyAwIGFuZCBbXSBhcmUgZGVmYXVsdHNcbiAgICAgIG9wdGlvbnMuY29sdW1uc1RvSW5jbHVkZSB8fCBbXSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhdGFTb3VyY2U6IENvbnRyYWN0LkRhdGFTb3VyY2UpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5SW50ZXJuYWxWYWx1ZShkYXRhU291cmNlLCAnZGF0YVNvdXJjZScpO1xuXG4gICAgdGhpcy5fZmllbGRzID0gdGhpcy5fZGF0YVNvdXJjZUluZm8uZmllbGRzLm1hcChmaWVsZE1vZGVsID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkSW1wbCA9IG5ldyBGaWVsZEltcGwoZmllbGRNb2RlbCwgZGF0YVNvdXJjZSk7XG4gICAgICByZXR1cm4gbmV3IEZpZWxkKGZpZWxkSW1wbCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGF0YVNvdXJjZUltcGwudHMiLCJpbXBvcnQgeyBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSwgRmllbGRSb2xlVHlwZSB9IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0ICogYXMgSW50ZXJuYWxDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkSW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWVsZEluZm86IEludGVybmFsQ29udHJhY3QuRmllbGQsXG4gICAgcHJpdmF0ZSBfcGFyZW50RGF0YVNvdXJjZTogQ29udHJhY3QuRGF0YVNvdXJjZSkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWdncmVnYXRpb24oKTogRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICAgIHJldHVybiBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZmllbGRBZ2dyZWdhdGlvblR5cGUuY29udmVydCh0aGlzLl9maWVsZEluZm8uYWdncmVnYXRpb24pO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhU291cmNlKCk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnREYXRhU291cmNlO1xuICB9XG5cbiAgcHVibGljIGdldCByb2xlKCk6IEZpZWxkUm9sZVR5cGUge1xuICAgIHJldHVybiBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZmllbGRSb2xlVHlwZS5jb252ZXJ0KHRoaXMuX2ZpZWxkSW5mby5yb2xlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0hpZGRlbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNHZW5lcmF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0dlbmVyYXRlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNDYWxjdWxhdGVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0NhbGN1bGF0ZWRGaWVsZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNDb21iaW5lZEZpZWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaXNDb21iaW5lZEZpZWxkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0ZpZWxkSW1wbC50cyIsImltcG9ydCB7IEZpZWxkQWdncmVnYXRpb25UeXBlLCBGaWVsZFJvbGVUeXBlLCBDb2x1bW5UeXBlIH0gZnJvbSAnLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4vSW1wbC9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIENvbnRyYWN0LkZpZWxkIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpZWxkSW1wbDogRmllbGRJbXBsKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvbigpOiBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5hZ2dyZWdhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmRhdGFTb3VyY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGUoKTogRmllbGRSb2xlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5yb2xlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzSGlkZGVuO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0dlbmVyYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzR2VuZXJhdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbGN1bGF0ZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzQ2FsY3VsYXRlZEZpZWxkO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5UeXBlKCk6IENvbHVtblR5cGUge1xuICAgIHRocm93IEVycm9ySGVscGVycy5hcGlOb3RJbXBsZW1lbnRlZCgnRmllbGQuY29sdW1uVHlwZScpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbWJpbmVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pc0NvbWJpbmVkRmllbGQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ZpZWxkLnRzIiwiaW1wb3J0IHsgVGFibGVhdUV2ZW50VHlwZSB9IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1U2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVNoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdVdvcmtzaGVldEV2ZW50IGV4dGVuZHMgVGFibGVhdVNoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1V29ya3NoZWV0RXZlbnQge1xuICBwdWJsaWMgZ2V0IHdvcmtzaGVldCgpOiBDb250cmFjdC5Xb3Jrc2hlZXQge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQ7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogVGFibGVhdUV2ZW50VHlwZSwgcHJvdGVjdGVkIF93b3Jrc2hlZXQ6IENvbnRyYWN0LldvcmtzaGVldCkge1xuICAgIHN1cGVyKHR5cGUsIF93b3Jrc2hlZXQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVdvcmtzaGVldEV2ZW50LnRzIiwiaW1wb3J0IHsgVGFibGVhdUV2ZW50VHlwZSB9IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1U2hlZXRFdmVudCBleHRlbmRzIFRhYmxlYXVFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlYXVTaGVldEV2ZW50IHtcbiAgcHJpdmF0ZSBfc2hlZXQ6IENvbnRyYWN0LlNoZWV0O1xuXG4gIHB1YmxpYyBnZXQgc2hlZXQoKTogQ29udHJhY3QuU2hlZXQge1xuICAgIHJldHVybiB0aGlzLl9zaGVldDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBUYWJsZWF1RXZlbnRUeXBlLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMuX3NoZWV0ID0gc2hlZXQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1U2hlZXRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVmlzdWFsSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG4vKipcbiAqIERlZmluZXMgd2hpY2ggdHlwZSBvZiBnZXREYXRhIGNhbGwgdG8gbWFrZS5cbiAqL1xuZXhwb3J0IGVudW0gR2V0RGF0YVR5cGUge1xuICBTdW1tYXJ5ID0gJ3N1bW1hcnknLFxuICBVbmRlcmx5aW5nID0gJ3VuZGVybHlpbmcnXG59XG5cbi8qKlxuICogU2VydmljZSBmb3IgaW1wbGVtZW50aW5nIHRoZSBsb2dpYyBmb3IgdmFyaW91cyBnZXREYXRhIGNhbGxzXG4gKlxuICogQGludGVyZmFjZSBHZXREYXRhU2VydmljZVxuICogQGV4dGVuZHMge0FwaVNlcnZpY2V9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0RGF0YVNlcnZpY2UgZXh0ZW5kcyBBcGlTZXJ2aWNlIHtcblxuICAvKipcbiAgICogR2V0cyB0aGUgbGltaXQgb2Ygcm93cyBmb3IgZ2V0VW5kZXJseWluZ0RhdGFBc3luY1xuICAgKi9cbiAgZ2V0TWF4Um93TGltaXQoKTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRhdGEgZm9yIGEgcGFydGljdWxhciB2aXN1YWxcbiAgICpcbiAgICogQHBhcmFtIHtWaXN1YWxJZH0gdmlzdWFsSWQgIFRoZSB2aXN1YWwgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7R2V0RGF0YVR5cGV9IGdldFR5cGUgIFRoZSB0eXBlIG9mIGdldERhdGEgY2FsbCB0byBtYWtlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBvciBub3QgYWxpYXNlcyBzaG91bGQgYmUgaWdub3JlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZVNlbGVjdGlvbiAgV2hldGhlciBvciBub3Qgc2VsZWN0aW9uIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUFsbENvbHVtbnMgIFNob3VsZCBhbGwgY29sdW1ucyBiZSBpbmNsdWRlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Um93cyAgTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byByZXR1cm5cbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPn0gIERhdGEgdGFibGUgd2l0aCB0aGUgcmVxdWVzdGVkIGRhdGFcbiAgICovXG4gIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG1hcmtzIGZvciBhIGdpdmVuIHZpc3VhbFxuICAgKlxuICAqIEBwYXJhbSB7VmlzdWFsSWR9IHZpc3VhbElkICBUaGUgdmlzdWFsIHRvIGdldCBkYXRhIGZvclxuICAqIEByZXR1cm5zIHtQcm9taXNlPEFjdGl2ZU1hcmtzPn0gIENvbGxlY3Rpb24gb2YgZGF0YSB0YWJsZXMgd2l0aCB0aGUgYWN0aXZlIG1hcmtzXG4gICovXG4gIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXJrcyBmb3IgYSBnaXZlbiB2aXN1YWxcbiAgICpcbiAgKiBAcGFyYW0ge1Zpc3VhbElkfSB2aXN1YWxJZCAgVGhlIHZpc3VhbCB0byBnZXQgZGF0YSBmb3JcbiAgKiBAcmV0dXJucyB7UHJvbWlzZTxBY3RpdmVNYXJrcz59ICBDb2xsZWN0aW9uIG9mIGRhdGEgdGFibGVzIHdpdGggdGhlIGFjdGl2ZSBtYXJrc1xuICAqL1xuICBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNvdXJjZUlkICBUaGUgaWQgb2YgdGhlIGRhdGFzb3VyY2UgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBhbGlhcyB2YWx1ZXMgc2hvdWxkIGJlIGlnbm9yZWQgaW4gdGhlIHJldHVybmVkIGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFJvd3MgVGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBjb2x1bW5zVG9JbmNsdWRlICBDb2xsZWN0aW9uIG9mIGNvbHVtbiBjYXB0aW9ucyB3aGljaCBzaG91bGQgYmUgcmV0dXJuZWQuIEVtcHR5IG1lYW5zIGFsbCBjb2x1bW5zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT59ICBEYXRhIHRhYmxlIHdpdGggdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqL1xuICBnZXREYXRhU291cmNlRGF0YUFzeW5jKFxuICAgIGRhdGFzb3VyY2VJZDogc3RyaW5nLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgbWF4Um93czogbnVtYmVyLFxuICAgIGNvbHVtbnNUb0luY2x1ZGU6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9HZXREYXRhU2VydmljZS50cyIsImltcG9ydCB7IEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi9VdGlscy9FbnVtQ29udmVydGVyJztcbmltcG9ydCB7XG4gIEZpbHRlckRvbWFpblR5cGUgYXMgRXh0ZXJuYWxEb21haW5UeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uIGFzIEV4dGVybmFsTnVsbE9wdGlvbixcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFpvbmVWaXNpYmlsaXR5VHlwZVxufSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5cbmltcG9ydCB7XG4gIEZpbHRlckRvbWFpblR5cGUgYXMgSW50ZXJuYWxEb21haW5UeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uIGFzIEludGVybmFsTnVsbE9wdGlvbixcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGVcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp0eXBlZGVmIC0gRGlzYWJsZSB0aGlzIHRvIG1ha2UgZGVjbGFyaW5nIHRoZXNlIGNsYXNzZXMgYSBiaXQgZWFzaWVyICovXG4vKipcbiAqIE1hcHMgZW51bXMgdXNlZCBieSB0aGUgZXh0ZXJuYWwtYXBpLWNvbnRyYWN0IHRvIHRoZSBlbnVtcyB1c2VkXG4gKiBpbiB0aGUgaW50ZXJuYWwtYXBpLWNvbnRyYWN0LCB3aGljaCBkZXZlbG9wZXJzIGNvZGUgYWdhaW5zdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyB7XG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyRG9tYWluVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEV4dGVybmFsRG9tYWluVHlwZSwgSW50ZXJuYWxEb21haW5UeXBlPih7XG4gICAgW0V4dGVybmFsRG9tYWluVHlwZS5SZWxldmFudF06IEludGVybmFsRG9tYWluVHlwZS5SZWxldmFudCxcbiAgICBbRXh0ZXJuYWxEb21haW5UeXBlLkRhdGFiYXNlXTogSW50ZXJuYWxEb21haW5UeXBlLkRhdGFiYXNlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgbnVsbE9wdGlvbnMgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbE51bGxPcHRpb24sIEludGVybmFsTnVsbE9wdGlvbj4oe1xuICAgIFtFeHRlcm5hbE51bGxPcHRpb24uQWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLkFsbFZhbHVlcyxcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXNdOiBJbnRlcm5hbE51bGxPcHRpb24uTm9uTnVsbFZhbHVlcyxcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLk51bGxWYWx1ZXNdOiBJbnRlcm5hbE51bGxPcHRpb24uTnVsbFZhbHVlc1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclVwZGF0ZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsIEludGVybmFsRmlsdGVyVXBkYXRlVHlwZT4oe1xuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZCxcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbF06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGwsXG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmVdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlLFxuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZV06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgc2V0VmlzaWJpbGl0eVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxab25lVmlzaWJpbGl0eVR5cGUsIEJvb2xlYW4+KHtcbiAgICBbWm9uZVZpc2liaWxpdHlUeXBlLlNob3ddOiB0cnVlLFxuICAgIFtab25lVmlzaWJpbGl0eVR5cGUuSGlkZV06IGZhbHNlXG4gIH0pO1xufVxuLyogdHNsaW50OmVuYWJsZTp0eXBlZGVmICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzLnRzIiwiLyoqXG4gKiBUaGlzIGlzIHlvdXIgbWFpbi4gVGhpcyBpcyB3aGVyZSB5b3UgcmUtZXhwb3J0IGV2ZXJ5dGhpbmcgeW91IHdhbnQgdG8gYmUgcHVibGljbHkgYXZhaWxhYmxlLlxuICpcbiAqIFRoZSBidWlsZCBlbmZvcmNlcyB0aGF0IHRoZSBmaWxlIGhhcyB0aGUgc2FtZSBuYW1lIGFzIHRoZSBnbG9iYWwgdmFyaWFibGUgdGhhdCBpcyBleHBvcnRlZC5cbiAqL1xuXG4vLyBUaGUgZm9sbG93aW5nIHBvbHlmaWxscyBhcmUgbmVlZGVkIGZvciBJRTExXG5pbXBvcnQgJ2NvcmUtanMvZm4vcHJvbWlzZSc7XG5pbXBvcnQgJ2NvcmUtanMvZm4vYXJyYXkvZmluZCc7XG5pbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbic7XG5cbi8vIER1ZSB0byB0aGUgd2F5IHdlIGNvbmZpZ3VyZWQgd2VicGFjaywgd2Ugc2hvdWxkIGJlIGV4cG9ydGluZyB0aGluZ3Mgd2hpY2ggd2lsbCBiZSB1bmRlclxuLy8gYSBnbG9iYWwgdmFyaWFibGUgY2FsbGVkIFwidGFibGVhdVwiLiBFeHBvcnQgZXZlcnl0aGluZyB3ZSB3YW50IHRvIGJlIHZpc2libGUgdW5kZXIgdGFibGVhdVxuLy8gZnJvbSB0aGlzIGZpbGUuXG5cbmltcG9ydCB7IEV4dGVuc2lvbnNJbXBsIH0gZnJvbSAnLi9FeHRlbnNpb25zQXBpL0ltcGwvRXh0ZW5zaW9uc0ltcGwnO1xuaW1wb3J0IHsgRXh0ZW5zaW9ucyB9IGZyb20gJy4vRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMnO1xuaW1wb3J0IHsgQXBpVmVyc2lvbiB9IGZyb20gJy4vQXBpU2hhcmVkJztcblxuZGVjbGFyZSB2YXIgRVhURU5TSU9OX1ZFUlNJT05fSVNfQUxQSEE6IGJvb2xlYW47XG5jb25zdCBpc0FscGhhOiBib29sZWFuID0gdHlwZW9mIEVYVEVOU0lPTl9WRVJTSU9OX0lTX0FMUEhBICE9PSAndW5kZWZpbmVkJyA/IEVYVEVOU0lPTl9WRVJTSU9OX0lTX0FMUEhBIDogZmFsc2U7XG5cbmRlY2xhcmUgdmFyIEVYVEVOU0lPTl9BUElfVkVSU0lPTl9OVU1CRVI6IHN0cmluZztcbkFwaVZlcnNpb24uU2V0VmVyc2lvbk51bWJlcih0eXBlb2YgRVhURU5TSU9OX0FQSV9WRVJTSU9OX05VTUJFUiAhPT0gJ3VuZGVmaW5lZCcgPyBFWFRFTlNJT05fQVBJX1ZFUlNJT05fTlVNQkVSIDogJzAuMC4wJywgaXNBbHBoYSk7XG5cbmNvbnN0IGV4dGVuc2lvbkltcGwgPSBuZXcgRXh0ZW5zaW9uc0ltcGwoKTtcbmV4cG9ydCBjb25zdCBleHRlbnNpb25zID0gbmV3IEV4dGVuc2lvbnMoZXh0ZW5zaW9uSW1wbCk7XG5cbi8vIEV4cG9ydCBFbnVtc1xuLy8gVGhlc2Ugc2hvdyB1cCB1bmRlciB0aGUgdGFibGVhdSBvYmplY3QuIEkuZS4gdGFibGVhdS5FeHRlbnNpb25Db250ZXh0LlNlcnZlclxuZXhwb3J0IHtcbiAgRXh0ZW5zaW9uQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSxcbiAgQW5hbHl0aWNzT2JqZWN0VHlwZSxcbiAgQ29sdW1uVHlwZSxcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRGF0YVR5cGUsXG4gIERhdGVSYW5nZVR5cGUsXG4gIEVuY29kaW5nVHlwZSxcbiAgRXJyb3JDb2RlcyxcbiAgRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUsXG4gIEZpbHRlckRvbWFpblR5cGUsXG4gIEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUsXG4gIEZpbHRlck51bGxPcHRpb24sXG4gIE1hcmtUeXBlLFxuICBQYXJhbWV0ZXJWYWx1ZVR5cGUsXG4gIFBlcmlvZFR5cGUsXG4gIFF1aWNrVGFibGVDYWxjVHlwZSxcbiAgU2VsZWN0aW9uVXBkYXRlVHlwZSxcbiAgU2hlZXRUeXBlLFxuICBTb3J0RGlyZWN0aW9uLFxuICBUYWJsZWF1RXZlbnRUeXBlLFxuICBUcmVuZExpbmVNb2RlbFR5cGUsXG4gIFpvbmVWaXNpYmlsaXR5VHlwZVxufSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS50cyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5maW5kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vYXJyYXkvZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSk7XG52YXIgS0VZID0gJ2ZpbmQnO1xudmFyIGZvcmNlZCA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeSxcbiAgRGFzaGJvYXJkLFxuICBEYXNoYm9hcmRJbXBsLFxuICBkb0Nyb3NzRnJhbWVCb290c3RyYXAsXG4gIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMsXG4gIFNlcnZpY2VOYW1lc1xufSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGVudCB9IGZyb20gJy4uL05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4uL05hbWVzcGFjZXMvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvSW5pdGlhbGl6YXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IHJlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzLCByZWdpc3RlckluaXRpYWxpemF0aW9uRXh0ZW5zaW9uc1NlcnZpY2VzIH0gZnJvbSAnLi4vU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi9OYW1lc3BhY2VzL1NldHRpbmdzJztcbmltcG9ydCB7IFNldHRpbmdzSW1wbCB9IGZyb20gJy4vU2V0dGluZ3NJbXBsJztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL05hbWVzcGFjZXMvVUknO1xuaW1wb3J0IHsgVUlJbXBsIH0gZnJvbSAnLi9VSUltcGwnO1xuaW1wb3J0IHsgQXBpVmVyc2lvbiB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZC9BcGlWZXJzaW9uJztcbmltcG9ydCB7IFZlcnNpb25lZEV4dGVybmFsQXBpRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL1ZlcnNpb25lZEV4dGVybmFsQXBpRGlzcGF0Y2hlcic7XG5cbmltcG9ydCB7XG4gIENvbnRleHRNZW51RXZlbnQsXG4gIEV4dGVuc2lvbkRhc2hib2FyZEluZm8sXG4gIEV4dGVuc2lvblNldHRpbmdzSW5mbyxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSxcbiAgTm90aWZpY2F0aW9uSWQsXG4gIFNoZWV0UGF0aCxcbiAgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTixcbiAgSW5pdGlhbGl6YXRpb25PcHRpb25zLFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXIsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBMZWdhY3lJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIgfSBmcm9tICcuL0xlZ2FjeUludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlcic7XG5cblxuZXhwb3J0IHR5cGUgQ2FsbGJhY2tNYXAgPSB7IFtrZXk6IHN0cmluZ106ICgpID0+IHt9IH07XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb25zSW1wbCB7XG4gIHByaXZhdGUgX2luaXRpYWxpemF0aW9uUHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+O1xuXG4gIHB1YmxpYyBkYXNoYm9hcmRDb250ZW50OiBEYXNoYm9hcmRDb250ZW50O1xuICBwdWJsaWMgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzO1xuICBwdWJsaWMgdWk6IFVJO1xuXG4gIHB1YmxpYyBpbml0aWFsaXplQXN5bmMoaXNFeHRlbnNpb25EaWFsb2c6IGJvb2xlYW4sIGNvbnRleHRNZW51Q2FsbGJhY2tzPzogQ2FsbGJhY2tNYXApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6YXRpb25Qcm9taXNlKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXphdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW5pdE9wdGlvbnM6IEluaXRpYWxpemF0aW9uT3B0aW9ucyA9IHsgaXNBbHBoYTogQXBpVmVyc2lvbi5JbnN0YW5jZS5pc0FscGhhIH07XG4gICAgICAgIC8vIEZpcnN0IHRoaW5nIHdlIHdhbnQgdG8gZG8gaXMgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGlzIGEgZGVza3RvcCBkaXNwYXRjaGVyIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgdXNcbiAgICAgICAgaWYgKExlZ2FjeUludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5oYXNEZXNrdG9wQXBpRGlzcGF0Y2hlclByb21pc2UoaW5pdE9wdGlvbnMpKSB7XG4gICAgICAgICAgLy8gUnVubmluZyBpbiBhIHByZS0yMDE5LjMgZGVza3RvcCwgdXNlIG91ciBsZWdhY3kgZGlzcGF0Y2hlciBwcm9taXNlXG4gICAgICAgICAgY29uc3QgZGVza3RvcERpc3BhdGNoZXJQcm9taXNlID0gTGVnYWN5SW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyLmdldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZShpbml0T3B0aW9ucyk7XG4gICAgICAgICAgZGVza3RvcERpc3BhdGNoZXJQcm9taXNlIS50aGVuKChkaXNwYXRjaGVyRmFjdG9yeSkgPT5cbiAgICAgICAgICAgIHRoaXMub25EaXNwYXRjaGVyUmVjZWl2ZWQoZGlzcGF0Y2hlckZhY3RvcnksIGlzRXh0ZW5zaW9uRGlhbG9nLCBjb250ZXh0TWVudUNhbGxiYWNrcykpXG4gICAgICAgICAgICAudGhlbigob3BlblBheWxvYWQpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShvcGVuUGF5bG9hZCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdlIG11c3QgYmUgcnVubmluZyBpbiBzZXJ2ZXIsIHNvIHdlIHNob3VsZCB0cnkgdG8ga2ljayBvZiB0aGUgc2VydmVyIGRpc3BhdGNoZXIgYm9vdHN0cmFwcGluZ1xuICAgICAgICAgIGNvbnN0IG9uRGlzcGF0Y2hlclJlY2VpdmVkQ2FsbGJhY2sgPSB0aGlzLm9uRGlzcGF0Y2hlclJlY2VpdmVkLmJpbmQodGhpcyk7XG4gICAgICAgICAgZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwKHdpbmRvdywgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTiwgaW5pdE9wdGlvbnMpLnRoZW4oKGZhY3Rvcnk6IEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvbkRpc3BhdGNoZXJSZWNlaXZlZENhbGxiYWNrKGZhY3RvcnksIGlzRXh0ZW5zaW9uRGlhbG9nLCBjb250ZXh0TWVudUNhbGxiYWNrcyk7XG4gICAgICAgICAgfSkudGhlbigob3BlblBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUob3BlblBheWxvYWQpO1xuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25EaXNwYXRjaGVyUmVjZWl2ZWQoXG4gICAgZGlzcGF0Y2hlckZhY3Rvcnk6IEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnksXG4gICAgaXNFeHRlbnNpb25EaWFsb2c6IGJvb2xlYW4sXG4gICAgY29udGV4dE1lbnVGdW5jdGlvbnM/OiBDYWxsYmFja01hcCk6IFByb21pc2U8c3RyaW5nPiB7XG5cbiAgICBsZXQgZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyID0gZGlzcGF0Y2hlckZhY3RvcnkoSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTik7XG5cbiAgICAvLyBDYWxsIHRvIHJlZ2lzdGVyIGFsbCB0aGUgc2VydmljZXMgd2hpY2ggd2lsbCB1c2UgdGhlIG5ld2x5IGluaXRpYWxpemVkIGRpc3BhdGNoZXJcbiAgICByZWdpc3RlckluaXRpYWxpemF0aW9uRXh0ZW5zaW9uc1NlcnZpY2VzKGRpc3BhdGNoZXIpO1xuXG4gICAgLy8gR2V0IHRoZSBpbml0aWFsaXphdGlvbiBzZXJ2aWNlIGFuZCBpbml0aWFsaXplIHRoaXMgZXh0ZW5zaW9uXG4gICAgY29uc3QgaW5pdGlhbGl6YXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8SW5pdGlhbGl6YXRpb25TZXJ2aWNlPihcbiAgICAgIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuSW5pdGlhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrTWFwS2V5cyA9IChjb250ZXh0TWVudUZ1bmN0aW9ucykgPyBPYmplY3Qua2V5cyhjb250ZXh0TWVudUZ1bmN0aW9ucykgOiBbXTtcbiAgICByZXR1cm4gaW5pdGlhbGl6YXRpb25TZXJ2aWNlLmluaXRpYWxpemVEYXNoYm9hcmRFeHRlbnNpb25zQXN5bmMoaXNFeHRlbnNpb25EaWFsb2csIGNhbGxiYWNrTWFwS2V5cykudGhlbjxzdHJpbmc+KHJlc3VsdCA9PiB7XG4gICAgICBpZiAoIXJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdVbmV4cGVjdGVkIGVycm9yIGR1cmluZyBpbml0aWFsaXphdGlvbi4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UgcmVjZWl2ZSBhbiBpbnZhbGlkIHBsYWZvcm0gdmVyc2lvbiwgdGhpcyBtZWFucyB0aGF0IHBsYXRmb3JtIGlzIHJ1bm5uaW5nIDEuNCBvciAyLjEgYW5kXG4gICAgICAvLyBkb2Vzbid0IHBhc3MgdGhlIHBsYXRmb3JtIHZlcnNpb24gdG8gZXh0ZXJuYWwuIEluIHRoaXMgY2FzZSB3ZSBhc3N1bWUgdGhlIHBsYXRmb3JtIHZlcnNpb24gdG8gYmUgMS45XG4gICAgICBsZXQgcGxhdGZvcm1WZXJzaW9uID0gcmVzdWx0LmV4dGVuc2lvbkVudmlyb25tZW50LnBsYXRmb3JtVmVyc2lvblxuICAgICAgICA/IHJlc3VsdC5leHRlbnNpb25FbnZpcm9ubWVudC5wbGF0Zm9ybVZlcnNpb25cbiAgICAgICAgOiB7IG1ham9yOiAxLCBtaW5vcjogOSwgZml4OiAwIH07XG5cbiAgICAgIC8vIFdyYXAgb3VyIGV4aXN0aW5nIGRpc3BhdGNoZXIgaW4gYSBkaXNwYXRjaGVyIHRoYXQgY2FuIGRvd25ncmFkZS91cGdyYWRlIGZvciBhbiBvbGRlciBwbGF0Zm9ybS5cbiAgICAgIGlmIChWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXIubmVlZHNWZXJzaW9uQ29udmVydGVyKHBsYXRmb3JtVmVyc2lvbikpIHtcbiAgICAgICAgZGlzcGF0Y2hlciA9IG5ldyBWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXIoZGlzcGF0Y2hlciwgcGxhdGZvcm1WZXJzaW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVnaXN0cmF0aW9uIG9mIHNlcnZpY2VzIG11c3QgaGFwcGVuIGJlZm9yZSBpbml0aWFsaXppbmcgY29udGVudCBhbmQgZW52aXJvbm1lbnRcbiAgICAgIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMoZGlzcGF0Y2hlcik7XG4gICAgICByZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyhkaXNwYXRjaGVyKTtcblxuICAgICAgdGhpcy5kYXNoYm9hcmRDb250ZW50ID0gdGhpcy5pbml0aWFsaXplRGFzaGJvYXJkQ29udGVudChcbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbkRhc2hib2FyZEluZm8sXG4gICAgICAgIHJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpO1xuXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHJlc3VsdC5leHRlbnNpb25FbnZpcm9ubWVudCk7XG4gICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5pbml0aWFsaXplU2V0dGluZ3MocmVzdWx0LmV4dGVuc2lvblNldHRpbmdzSW5mbyk7XG4gICAgICB0aGlzLnVpID0gbmV3IFVJKG5ldyBVSUltcGwoKSk7XG5cbiAgICAgIC8vIEFmdGVyIGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQsIHNldHVwIGxpc3RlbmVycyBmb3IgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0XG4gICAgICAvLyBhcmUgbWVhbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW5ldmVyIGEgY29udGV4dCBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRleHRNZW51Q2FsbGJhY2tzKGNvbnRleHRNZW51RnVuY3Rpb25zKTtcblxuICAgICAgLy8gSW4gdGhlIG5vcm1hbCBpbml0aWFsaXphdGlvbiBjYXNlLCB0aGlzIHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nLiAgV2hlbiByZXR1cm5pbmcgZnJvbSBpbml0aWFsaXplQXN5bmMgdG8gdGhlXG4gICAgICAvLyBkZXZlbG9wZXIsIHdlIGp1c3QgaW5nb3JlIHRoYXQgc3RyaW5nLiAgSW4gdGhlIGNhc2Ugb2YgaW5pdGlhbGl6aW5nIGZyb20gYW4gZXh0ZW5zaW9uIGRpYWxvZywgdGhpcyBzdHJpbmdcbiAgICAgIC8vIGlzIGFuIG9wdGlvbmFsIHBheWxvYWQgc2VudCBmcm9tIHRoZSBwYXJlbnQgZXh0ZW5zaW9uLlxuICAgICAgcmV0dXJuIHJlc3VsdC5leHRlbnNpb25EaWFsb2dQYXlsb2FkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRGFzaGJvYXJkQ29udGVudChpbmZvOiBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLCBzaGVldFBhdGg6IFNoZWV0UGF0aCk6IERhc2hib2FyZENvbnRlbnQge1xuICAgIGNvbnN0IGRhc2hib2FyZEltcGwgPSBuZXcgRGFzaGJvYXJkSW1wbChpbmZvLCBzaGVldFBhdGgpO1xuICAgIGNvbnN0IGRhc2hib2FyZCA9IG5ldyBEYXNoYm9hcmQoZGFzaGJvYXJkSW1wbCk7XG4gICAgcmV0dXJuIG5ldyBEYXNoYm9hcmRDb250ZW50KGRhc2hib2FyZCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IFNldHRpbmdzIHtcbiAgICBjb25zdCBzZXR0aW5nc0ltcGwgPSBuZXcgU2V0dGluZ3NJbXBsKHNldHRpbmdzSW5mbyk7XG4gICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhzZXR0aW5nc0ltcGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplQ29udGV4dE1lbnVDYWxsYmFja3MoY29udGV4dE1lbnVGdW5jdGlvbnM/OiBDYWxsYmFja01hcCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcblxuICAgIC8vIFVucmVnaXN0ZXIgZnVuY3Rpb24gbm90IHVzZWQgc2luY2UgdGhlc2Ugbm90aWZpY2F0aW9ucyBzaG91bGQgYmVcbiAgICAvLyBvYnNlcnZlZCBmb3IgdGhlIGZ1bGwgbGlmZXRpbWUgb2YgdGhlIGV4dGVuc2lvbi5cbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5Db250ZXh0TWVudUNsaWNrLCAobW9kZWwpID0+IHtcbiAgICAgIC8vIExldCB0aHJvdWdoIGFueSBjb250ZXh0IG1lbnUgZXZlbnQsIHRoZXNlIGFyZSBhbHJlYWR5IGZpbHRlcmVkIG9uIGFwaS1jb3JlXG4gICAgICAvLyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uIGxvY2F0b3IuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAoZXZlbnQ6IENvbnRleHRNZW51RXZlbnQpID0+IHtcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIGZ1bmN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnRleHQgbWVudSBJRFxuICAgICAgaWYgKGNvbnRleHRNZW51RnVuY3Rpb25zKSB7XG4gICAgICAgIGlmICghY29udGV4dE1lbnVGdW5jdGlvbnNbZXZlbnQuaWRdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBSZWNlaXZlZCB1bmV4cGVjdGVkIGNvbnRleHQgbWVudSBJZCBmcm9tIGV2ZW50OiAke2V2ZW50LmlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dE1lbnVGdW5jdGlvbnNbZXZlbnQuaWRdKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwiaW1wb3J0IHsgWm9uZVZpc2liaWxpdHlUeXBlIH0gZnJvbSAnLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IERhc2hib2FyZEltcGwgfSBmcm9tICcuL0ltcGwvRGFzaGJvYXJkSW1wbCc7XG5pbXBvcnQgeyBTaGVldCB9IGZyb20gJy4vU2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgU2hlZXQgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGFzaGJvYXJkSW1wbDogRGFzaGJvYXJkSW1wbCkge1xuICAgIHN1cGVyKF9kYXNoYm9hcmRJbXBsKTtcbiAgICBfZGFzaGJvYXJkSW1wbC5pbml0aWFsaXplV2l0aFB1YmxpY0ludGVyZmFjZXModGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldHMoKTogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZEltcGwud29ya3NoZWV0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2JqZWN0cygpOiBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+IHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkSW1wbC5vYmplY3RzO1xuICB9XG5cbiAgcHVibGljIHNldFpvbmVWaXNpYmlsaXR5QXN5bmMoem9uZVZpc2liaWxpdHlNYXA6IE1hcDxudW1iZXIsIFpvbmVWaXNpYmlsaXR5VHlwZT4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkSW1wbC5zZXRab25lVmlzaWJpbGl0eUFzeW5jKHpvbmVWaXNpYmlsaXR5TWFwKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4vVGFibGVhdUVycm9yJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXJDb250cmFjdCB9IGZyb20gJy4vVmVyc2lvbk51bWJlckNvbnRyYWN0JztcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgZXh0ZW5zaW9ucyBsaWJyYXJ5XG4gKiBhbmQgZXh0ZW5zaW9ucy1hcGktdHlwZXMgbGlicmFyeVxuICovXG5leHBvcnQgY2xhc3MgVmVyc2lvbk51bWJlciBpbXBsZW1lbnRzIFZlcnNpb25OdW1iZXJDb250cmFjdCB7XG5cbiAgcHVibGljIG1ham9yOiBudW1iZXI7XG4gIHB1YmxpYyBtaW5vcjogbnVtYmVyO1xuICBwdWJsaWMgZml4OiBudW1iZXI7XG4gIHB1YmxpYyBidWlsZDogbnVtYmVyO1xuICBwdWJsaWMgaXNBbHBoYTogYm9vbGVhbjtcblxuICAvLyBwcml2YXRlIGNvbnN0cnVjdG9yIHNvIGV2ZXJ5b25lIHVzZXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICAvLyBidWlsZCBudW1iZXJzIGhhdmUgdGhpcyBmb3JtOiBNLm0uZi1wcmUuTlxuICBwdWJsaWMgY29uc3RydWN0b3IodmVyc2lvblN0cmluZzogc3RyaW5nLCBpc0FscGhhOiBib29sZWFuKSB7XG4gICAgbGV0IHBhcnRTdHIgPSB2ZXJzaW9uU3RyaW5nLnNwbGl0KCctJyk7XG4gICAgdGhpcy5idWlsZCA9IHRoaXMuZ2V0QnVpbGROdW1iZXIocGFydFN0clsxXSk7XG4gICAgdmVyc2lvblN0cmluZyA9IHBhcnRTdHJbMF07XG5cbiAgICBjb25zdCBwYXJ0cyA9IHZlcnNpb25TdHJpbmcuc3BsaXQoJy4nKS5tYXAocCA9PiBwYXJzZUludChwLCAxMCkpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgSW52YWxpZCB2ZXJzaW9uIG51bWJlcjogJHt2ZXJzaW9uU3RyaW5nfWApO1xuICAgIH1cblxuICAgIHRoaXMubWFqb3IgPSBwYXJ0c1swXTtcbiAgICB0aGlzLm1pbm9yID0gcGFydHNbMV07XG4gICAgdGhpcy5maXggPSBwYXJ0c1syXTtcbiAgICB0aGlzLmlzQWxwaGEgPSBpc0FscGhhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCdWlsZE51bWJlcihwcmVSZWxlYXNlU3RyaW5nOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IG5vQnVpbGROdW1iZXI6IG51bWJlciA9IC0xO1xuICAgIGlmICghcHJlUmVsZWFzZVN0cmluZykge1xuICAgICAgcmV0dXJuIG5vQnVpbGROdW1iZXI7XG4gICAgfVxuXG4gICAgLy8gVGhlIHByZVJlbGVhc2Ugc3RyaW5nIGhhcyB0aGlzIGZvcm06IHByZS5OLCBidXQgd2UgZG9uJ3QgZGVwZW5kIG9uIHRoZSBhY3R1YWwgc3RyaW5nIGJlaW5nICdwcmUnXG4gICAgbGV0IHBhcnRTdHIgPSBwcmVSZWxlYXNlU3RyaW5nLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIHBhcnRTdHJbMV0gPyBwYXJzZUludChwYXJ0U3RyWzFdLCAxMCkgOiBub0J1aWxkTnVtYmVyO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLm1ham9yfS4ke3RoaXMubWlub3J9LiR7dGhpcy5maXh9YDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZnVsbEZvcm1hdHRlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMubWFqb3J9LiR7dGhpcy5taW5vcn0uJHt0aGlzLmZpeH0tcHJlLiR7dGhpcy5idWlsZH1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9WZXJzaW9uTnVtYmVyLnRzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXInKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk51bWJlci5pc0ludGVnZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9udW1iZXIvaXMtaW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7IGlzSW50ZWdlcjogcmVxdWlyZSgnLi9faXMtaW50ZWdlcicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KSB7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZW51bSBFeHRlbnNpb25Db250ZXh0IHtcbiAgRGVza3RvcCA9ICdkZXNrdG9wJyxcbiAgU2VydmVyID0gJ3NlcnZlcicsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGVudW0gRXh0ZW5zaW9uTW9kZSB7XG4gIEF1dGhvcmluZyA9ICdhdXRob3JpbmcnLFxuICBWaWV3aW5nID0gJ3ZpZXdpbmcnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICBEaXNjcmV0ZSA9ICdkaXNjcmV0ZScsXG4gIENvbnRpbnVvdXMgPSAnY29udGludW91cydcbn1cblxuZXhwb3J0IGVudW0gRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gIEJsYW5rID0gJ2JsYW5rJyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCcsXG4gIFF1aWNrRmlsdGVyID0gJ3F1aWNrLWZpbHRlcicsXG4gIFBhcmFtZXRlckNvbnRyb2wgPSAncGFyYW1ldGVyLWNvbnRyb2wnLFxuICBQYWdlRmlsdGVyID0gJ3BhZ2UtZmlsdGVyJyxcbiAgTGVnZW5kID0gJ2xlZ2VuZCcsXG4gIFRpdGxlID0gJ3RpdGxlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgSW1hZ2UgPSAnaW1hZ2UnLFxuICBXZWJQYWdlID0gJ3dlYi1wYWdlJyxcbiAgRXh0ZW5zaW9uID0gJ2V4dGVuc2lvbidcbn1cblxuZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgSW50ID0gJ2ludCcsXG4gIEZsb2F0ID0gJ2Zsb2F0JyxcbiAgQm9vbCA9ICdib29sJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgRGF0ZVRpbWUgPSAnZGF0ZS10aW1lJyxcbiAgU3BhdGlhbCA9ICdzcGF0aWFsJ1xufVxuXG5leHBvcnQgZW51bSBFbmNvZGVkRGF0YVR5cGUge1xuICBOdW1iZXIgPSAnbnVtYmVyJyxcbiAgU3RyaW5nID0gJ3N0cmluZycsXG4gIERhdGUgPSAnZGF0ZScsXG4gIEJvb2xlYW4gPSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIElOSVRJQUxJWkFUSU9OX0VSUk9SID0gJ2luaXRpYWxpemF0aW9uLWVycm9yJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnaW50ZXJuYWwtZXJyb3InLFxuICBNSVNTSU5HX0VOVU1fTUFQUElORyA9ICdtaXNzaW5nLWVudW0tbWFwcGluZycsXG4gIE1JU1NJTkdfUEFSQU1FVEVSID0gJ21pc3NpbmctcGFyYW1ldGVyJyxcbiAgUEVSTUlTU0lPTl9ERU5JRUQgPSAncGVybWlzc2lvbi1kZW5pZWQnLFxuICBQUkVTX01PREVMX1BBUlNJTkdfRVJST1IgPSAncHJlcy1tb2RlbC1wYXJzaW5nLWVycm9yJyxcbiAgVkVSU0lPTl9OT1RfQ09ORklHVVJFRCA9ICd2ZXJzaW9uLW5vdC1jb25maWd1cmVkJyxcbiAgVklTSUJJTElUWV9FUlJPUiA9ICd2aXNpYmlsaXR5LWVycm9yJyxcbiAgVU5LTk9XTl9WRVJCX0lEID0gJ3Vua25vd24tdmVyYi1pZCdcbn1cblxuZXhwb3J0IGVudW0gRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICBTdW0gPSAnc3VtJyxcbiAgQXZnID0gJ2F2ZycsXG4gIE1pbiA9ICdtaW4nLFxuICBNYXggPSAnbWF4JyxcbiAgU3RkZXYgPSAnc3RkZXYnLFxuICBTdGRldnAgPSAnc3RkZXZwJyxcbiAgVmFyID0gJ3ZhcicsXG4gIFZhcnAgPSAndmFycCcsXG4gIENvdW50ID0gJ2NvdW50JyxcbiAgQ291bnRkID0gJ2NvdW50ZCcsXG4gIE1lZGlhbiA9ICdtZWRpYW4nLFxuICBBdHRyID0gJ2F0dHInLFxuICBOb25lID0gJ25vbmUnLFxuICBZZWFyID0gJ3llYXInLFxuICBRdHIgPSAncXRyJyxcbiAgTW9udGggPSAnbW9udGgnLFxuICBEYXkgPSAnZGF5JyxcbiAgSG91ciA9ICdob3VyJyxcbiAgTWludXRlID0gJ21pbnV0ZScsXG4gIFNlY29uZCA9ICdzZWNvbmQnLFxuICBXZWVrID0gJ3dlZWsnLFxuICBXZWVrZGF5ID0gJ3dlZWtkYXknLFxuICBNb250aFllYXIgPSAnbW9udGgteWVhcicsXG4gIE1keSA9ICdtZHknLFxuICBFbmQgPSAnZW5kJyxcbiAgVHJ1bmNZZWFyID0gJ3RydW5jLXllYXInLFxuICBUcnVuY1F0ciA9ICd0cnVuYy1xdHInLFxuICBUcnVuY01vbnRoID0gJ3RydW5jLW1vbnRoJyxcbiAgVHJ1bmNXZWVrID0gJ3RydW5jLXdlZWsnLFxuICBUcnVuY0RheSA9ICd0cnVuYy1kYXknLFxuICBUcnVuY0hvdXIgPSAndHJ1bmMtaG91cicsXG4gIFRydW5jTWludXRlID0gJ3RydW5jLW1pbnV0ZScsXG4gIFRydW5jU2Vjb25kID0gJ3RydW5jLXNlY29uZCcsXG4gIFF1YXJ0MSA9ICdxdWFydDEnLFxuICBRdWFydDMgPSAncXVhcnQzJyxcbiAgU2tld25lc3MgPSAnc2tld25lc3MnLFxuICBLdXJ0b3NpcyA9ICdrdXJ0b3NpcycsXG4gIEluT3V0ID0gJ2luLW91dCcsXG4gIFVzZXIgPSAndXNlcidcbn1cblxuZXhwb3J0IGVudW0gRmllbGRSb2xlVHlwZSB7XG4gIERpbWVuc2lvbiA9ICdkaW1lbnNpb24nLFxuICBNZWFzdXJlID0gJ21lYXN1cmUnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbi8qKlxuICogIFRoZSBkaWZmZXJlbnQgdXBkYXRlIHR5cGVzIGZvciBhcHBseWluZyBmaWx0ZXIuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclVwZGF0ZVR5cGUge1xuICBBZGQgPSAnYWRkJyxcbiAgQWxsID0gJ2FsbCcsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG4gIFJlbW92ZSA9ICdyZW1vdmUnXG59XG5cbmV4cG9ydCBlbnVtIFNoZWV0VHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBTdG9yeSA9ICdzdG9yeScsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnXG59XG5cbmV4cG9ydCBlbnVtIERvbWFpblJlc3RyaWN0aW9uVHlwZSB7XG4gIEFsbCA9ICdhbGwnLFxuICBMaXN0ID0gJ2xpc3QnLFxuICBSYW5nZSA9ICdyYW5nZSdcbn1cblxuZXhwb3J0IGVudW0gRGF0ZVN0ZXBQZXJpb2Qge1xuICBZZWFycyA9ICd5ZWFycycsXG4gIFF1YXJ0ZXJzID0gJ3F1YXJ0ZXJzJyxcbiAgTW9udGhzID0gJ21vbnRocycsXG4gIFdlZWtzID0gJ3dlZWtzJyxcbiAgRGF5cyA9ICdkYXlzJyxcbiAgSG91cnMgPSAnaG91cnMnLFxuICBNaW51dGVzID0gJ21pbnV0ZXMnLFxuICBTZWNvbmRzID0gJ3NlY29uZHMnXG59XG5cbi8qKlxuICogVGhlIG9wdGlvbiBmb3Igc3BlY2lmeWluZyB3aGljaCB2YWx1ZXMgdG8gaW5jbHVkZSBmb3IgZmlsdGVyaW5nLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJOdWxsT3B0aW9uIHtcbiAgTnVsbFZhbHVlcyA9ICdudWxsdmFsdWVzJyxcbiAgTm9uTnVsbFZhbHVlcyA9ICdub25udWxsdmFsdWVzJyxcbiAgQWxsVmFsdWVzID0gJ2FsbHZhbHVlcydcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBmaWx0ZXIgZG9tYWluXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlckRvbWFpblR5cGUge1xuICBSZWxldmFudCA9ICdyZWxldmFudCcsXG4gIERhdGFiYXNlID0gJ2RhdGFiYXNlJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHNlbGVjdGlvbiB0eXBlIGZvciBzZWxlY3QgbWFya3MgYXBpLlxuICovXG5leHBvcnQgZW51bSBTZWxlY3Rpb25VcGRhdGVUeXBlIHtcbiAgUmVwbGFjZSA9ICdzZWxlY3QtcmVwbGFjZScsXG4gIEFkZCA9ICdzZWxlY3QtYWRkJyxcbiAgUmVtb3ZlID0gJ3NlbGVjdC1yZW1vdmUnXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgaW5jbHVkZWQgdmFsdWVzIHR5cGUgZm9yIHJhbmdlIHNlbGVjdGlvbi5cbiAqL1xuZXhwb3J0IGVudW0gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMge1xuICBJbmNsdWRlTnVsbCA9ICdpbmNsdWRlLW51bGwnLFxuICBJbmNsdWRlTm9uTnVsbCA9ICdpbmNsdWRlLW5vbi1udWxsJyxcbiAgSW5jbHVkZUFsbCA9ICdpbmNsdWRlLWFsbCdcbn1cblxuLyoqXG4gKiBUeXBlIG9mIG1hcmsgZm9yIGEgZ2l2ZW4gbWFya3MgY2FyZCBpbiBhIHZpei5cbiAqL1xuZXhwb3J0IGVudW0gTWFya1R5cGUge1xuICBCYXIgPSAnYmFyJyxcbiAgTGluZSA9ICdsaW5lJyxcbiAgQXJlYSA9ICdhcmVhJyxcbiAgU3F1YXJlID0gJ3NxdWFyZScsXG4gIENpcmNsZSA9ICdjaXJjbGUnLFxuICBTaGFwZSA9ICdzaGFwZScsXG4gIFRleHQgPSAndGV4dCcsXG4gIE1hcCA9ICdtYXAnLFxuICBQaWUgPSAncGllJyxcbiAgR2FudHRCYXIgPSAnZ2FudHQtYmFyJyxcbiAgUG9seWdvbiA9ICdwb2x5Z29uJyxcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSB0eXBlIG9mIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJUeXBlIHtcbiAgQ2F0ZWdvcmljYWwgPSAnY2F0ZWdvcmljYWwnLFxuICBSYW5nZSA9ICdyYW5nZScsXG4gIFJlbGF0aXZlRGF0ZSA9ICdyZWxhdGl2ZURhdGUnLFxuICBIaWVyYXJjaGljYWwgPSAnaGllcmFyY2hpY2FsJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIERhdGVSYW5nZVR5cGUgb2YgYSByZWxhdGl2ZSBkYXRlIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbGFzdCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIExhc3QgPSAnbGFzdCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGxhc3QgTiBkYXlzLCB3ZWVrcywgbW9udGhzLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIExhc3ROID0gJ2xhc3ROJyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbmV4dCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIE5leHQgPSAnbmV4dCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIG5leHQgTiBkYXlzLCB3ZWVrcywgbW9udGhzLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIE5leHROID0gJ25leHROJyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgY3VycmVudCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIEN1cnJlbnQgPSAnY3VycmVudCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gZXZlcnl0aGluZyB1cCB0byBhbmQgaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSwgd2VlaywgbW9udGgsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgVG9EYXRlID0gJ3RvRGF0ZSdcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGRldGVybWluZSBpZiB0aGUgbGF1bmNoaW5nIG9mIGFuIGV4dGVuc2lvbiBkaWFsb2cgc3VjY2VlZGVkIG9yIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5zaW9uRGlhbG9nUmVzdWx0IHtcbiAgRGlhbG9nQWxyZWFkeU9wZW4gPSAnZGlhbG9nLWFscmVhZHktb3BlbicsXG4gIEludmFsaWREb21haW4gPSAnaW52YWxpZC1kb21haW4nLFxuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L0VudW1zLnRzIiwiZXhwb3J0IGVudW0gUGFyYW1ldGVySWQge1xuICBFeHRlbnNpb25Mb2NhdG9yID0gJ2V4dGVuc2lvbi1sb2NhdG9yJyxcbiAgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyA9ICdleHRlbnNpb24tYm9vdHN0cmFwLWluZm8nLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8gPSAnZXh0ZW5zaW9uLXNldHRpbmdzLWluZm8nLFxuICBWaXN1YWxJZCA9ICd2aXN1YWwtaWQnLFxuICBTaGVldFBhdGggPSAnc2hlZXQtcGF0aCcsXG4gIElnbm9yZUFsaWFzZXMgPSAnaWdub3JlLWFsaWFzZXMnLFxuICBJZ25vcmVTZWxlY3Rpb24gPSAnaWdub3JlLXNlbGVjdGlvbicsXG4gIEluY2x1ZGVBbGxDb2x1bW5zID0gJ2luY2x1ZGUtYWxsLWNvbHVtbnMnLFxuICBNYXhSb3dzID0gJ21heC1yb3dzJyxcbiAgVW5kZXJseWluZ0RhdGFUYWJsZSA9ICd1bmRlcmx5aW5nLWRhdGEtdGFibGUnLFxuICBVbmRlcmx5aW5nU3VtbWFyeURhdGFUYWJsZSA9ICd1bmRlcmx5aW5nLXN1bW1hcnktZGF0YS10YWJsZScsXG4gIERhdGFTb3VyY2VEYXRhVGFibGUgPSAnZGF0YS1zb3VyY2UtZGF0YS10YWJsZScsXG4gIFNldHRpbmdzVmFsdWVzID0gJ3NldHRpbmdzLXZhbHVlcycsXG4gIFNlbGVjdGVkRGF0YSA9ICdzZWxlY3RlZC1kYXRhJyxcbiAgSGlnaGxpZ2h0ZWREYXRhID0gJ2hpZ2hsaWdodGVkLWRhdGEnLFxuXG4gIC8vIEZpbHRlciBQYXJhbXNcbiAgRmllbGROYW1lID0gJ2ZpZWxkLW5hbWUnLFxuICBGaWx0ZXJWYWx1ZXMgPSAnZmlsdGVyLXZhbHVlcycsXG4gIEZpbHRlclVwZGF0ZVR5cGUgPSAnZmlsdGVyLXVwZGF0ZS10eXBlJyxcbiAgSXNFeGNsdWRlTW9kZSA9ICdpcy1leGNsdWRlJyxcbiAgRmlsdGVyUmFuZ2VNaW4gPSAnZmlsdGVyLXJhbmdlLW1pbicsXG4gIEZpbHRlclJhbmdlTWF4ID0gJ2ZpbHRlci1yYW5nZS1tYXgnLFxuICBGaWx0ZXJSYW5nZU51bGxPcHRpb24gPSAnZmlsdGVyLXJhbmdlLW51bGwtb3B0aW9uJyxcbiAgV29ya3NoZWV0RmlsdGVycyA9ICd3b3Jrc2hlZXQtZmlsdGVycycsXG4gIEZpZWxkSWQgPSAnZmllbGQtaWQnLFxuICBEb21haW5UeXBlID0gJ2RvbWFpbi10eXBlJyxcbiAgQ2F0ZWdvcmljYWxEb21haW4gPSAnY2F0ZWdvcmljYWwtZG9tYWluJyxcbiAgUXVhbnRpdGF0aXZlRG9tYWluID0gJ3F1YW50aXRhdGl2ZS1kbWFpbicsXG4gIEZpZWxkID0gJ2ZpZWxkJyxcblxuICBXb3Jrc2hlZXROYW1lID0gJ3dvcmtzaGVldC1uYW1lJyxcbiAgRGFzaGJvYXJkTmFtZSA9ICdkYXNoYm9hcmQnLFxuXG4gIFBhcmFtZXRlckluZm8gPSAncGFyYW1ldGVyLWluZm8nLFxuICBQYXJhbWV0ZXJJbmZvcyA9ICdwYXJhbWV0ZXItaW5mb3MnLFxuICBQYXJhbWV0ZXJDYXB0aW9uID0gJ3BhcmVtZXRlci1jYXB0aW9uJyxcbiAgUGFyYW1ldGVyRmllbGROYW1lID0gJ3BhcmFtZXRlci1maWVsZC1uYW1lJyxcbiAgUGFyYW1ldGVyVmFsdWUgPSAncGFyYW1ldGVyLXZhbHVlJyxcbiAgU2VsZWN0aW9uID0gJ3NlbGVjdGlvbicsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUgPSAnc2VsZWN0aW9uVXBkYXRlVHlwZScsXG4gIEhpZXJWYWxTZWxlY3Rpb25Nb2RlbHMgPSAnaGllcmFyY2hpY2FsVmFsdWVTZWxlY3Rpb25Nb2RlbHMnLFxuICBRdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzID0gJ3F1YW50YXRpdmVSYW5nZVNlbGVjdGlvbk1vZGVscycsXG4gIERpbVZhbFNlbGVjdGlvbk1vZGVscyA9ICdkaW1lbnNpb25WYWx1ZVNlbGVjdGlvbk1vZGVscycsXG5cbiAgQWN0aXZlVGFibGVzSW5mbyA9ICdhY3RpdmUtdGFibGVzLWluZm8nLFxuICBEYXRhU291cmNlID0gJ2RhdGEtc291cmNlJyxcbiAgRGF0YVNvdXJjZUlkID0gJ2RhdGEtc291cmNlLWlkJyxcbiAgRGVsdGFUaW1lTXMgPSAnZGVsdGEtdGltZS1tcycsXG4gIFNob3VsZFJlZnJlc2hEUyA9ICdzaG91bGQtcmVmcmVzaC1kcycsXG4gIERhdGFTY2hlbWEgPSAnZGF0YS1zY2hlbWEnLFxuICBEYXRhU291cmNlTmFtZSA9ICdkYXRhLXNvdXJjZS1uYW1lJyxcbiAgQ29sdW1uc1RvSW5jbHVkZSA9ICdjb2x1bW5zLXRvLWluY2x1ZGUnLFxuICBKb2luRGVzY3JpcHRpb24gPSAnam9pbi1kZXNjcmlwdGlvbicsXG4gIENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcyA9ICdjb25uZWN0aW9uLWRlc2NyaXB0aW9uLXN1bW1hcmllcycsXG5cbiAgRXh0ZW5zaW9uRGlhbG9nVXJsID0gJ2V4dGVuc2lvbi1kaWFsb2ctdXJsJyxcbiAgRXh0ZW5zaW9uRGlhbG9nUGF5bG9hZCA9ICdleHRlbnNpb24tZGlhbG9nLXBheWxvYWQnLFxuICBJc0V4dGVuc2lvbkRpYWxvZyA9ICdpcy1leHRlbnNpb24tZGlhbG9nJyxcbiAgRXh0ZW5zaW9uRGlhbG9nSCA9ICdleHRlbnNpb24tZGlhbG9nLWhlaWdodCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1cgPSAnZXh0ZW5zaW9uLWRpYWxvZy13aWR0aCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCA9ICdleHRlbnNpb24tZGlhbG9nLXJlc3VsdCcsXG5cbiAgRXh0ZW5zaW9uQ29udGV4dE1lbnVJZHMgPSAnZXh0ZW5zaW9uLWNvbnRleHQtbWVudS1pZHMnLFxuXG4gIFRlc3RDb252ZXJzaW9uUGFyYW1ldGVyID0gJ3Rlc3QtY29udmVyc2lvbi1wYXJhbWV0ZXInLFxuXG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBab25lSWRzVmlzaWJpbGl0eU1hcCA9ICd6b25lLWlkcy12aXNpYmlsaXR5LW1hcCdcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9QYXJhbWV0ZXJzLnRzIiwiLy8gRGVjbGFyZSB0aGlzIGtleSB0eXBlIGFuZCBleHBvcnQgdGhlIE5vdGlmaWNhdGlvbklkIHRvIG1ha2UgdGhpcyBiZWhhdmUgbGlrZSBhIHN0cmluZyBlbnVtXG5leHBvcnQgZW51bSBWZXJiSWQge1xuICBBcHBseUNhdGVnb3JpY2FsRmlsdGVyID0gJ2NhdGVnb3JpY2FsLWZpbHRlcicsXG4gIEFwcGx5UmFuZ2VGaWx0ZXIgPSAncmFuZ2UtZmlsdGVyJyxcbiAgQ2xlYXJGaWx0ZXIgPSAnY2xlYXItZmlsdGVyJyxcbiAgSW5pdGlhbGl6ZUV4dGVuc2lvbiA9ICdpbml0aWFsaXplLWV4dGVuc2lvbicsXG4gIEdldERhdGFTdW1tYXJ5RGF0YSA9ICdnZXQtc3VtbWFyeS1kYXRhJyxcbiAgR2V0VW5kZXJseWluZ0RhdGEgPSAnZ2V0LXVuZGVybHlpbmctZGF0YScsXG4gIEdldERhdGFTb3VyY2VEYXRhID0gJ2dldC1kYXRhc291cmNlLWRhdGEnLFxuICBTYXZlRXh0ZW5zaW9uU2V0dGluZ3MgPSAnc2F2ZS1leHRlbnNpb24tc2V0dGluZ3MnLFxuICBHZXRTZWxlY3RlZE1hcmtzID0gJ2dldC1zZWxlY3RlZC1tYXJrcycsXG4gIEdldEhpZ2hsaWdodGVkTWFya3MgPSAnZ2V0LWhpZ2hsaWdodGVkLW1hcmtzJyxcbiAgR2V0UGFyYW1ldGVyc0ZvclNoZWV0ID0gJ2dldC1wYXJhbWV0ZXJzLWZvci1zaGVldCcsXG4gIEZpbmRQYXJhbWV0ZXIgPSAnZmluZC1wYXJhbWV0ZXInLFxuICBDaGFuZ2VQYXJhbWV0ZXJWYWx1ZSA9ICdjaGFuZ2UtcGFyYW1ldGVyLXZhbHVlJyxcbiAgQ2xlYXJTZWxlY3RlZE1hcmtzID0gJ2NsZWFyLXNlbGVjdGVkLW1hcmtzJyxcbiAgU2VsZWN0QnlWYWx1ZSA9ICdzZWxlY3QtYnktdmFsdWUnLFxuICBHZXREYXRhU291cmNlcyA9ICdnZXQtZGF0YS1zb3VyY2VzJyxcbiAgUmVmcmVzaERhdGFTb3VyY2UgPSAncmVmcmVzaC1kYXRhLXNvdXJjZScsXG4gIEdldEZpbHRlcnMgPSAnZ2V0LWZpbHRlcnMnLFxuICBHZXRGaWVsZEFuZERhdGFTb3VyY2UgPSAnZ2V0LWZpZWxkLWFuZC1kYXRhc291cmNlJyxcbiAgR2V0Q2F0ZWdvcmljYWxEb21haW4gPSAnZ2V0LWNhdGVnb3JpY2FsLWRvbWFpbicsXG4gIEdldFJhbmdlRG9tYWluID0gJ2dldC1yYW5nZS1kb21haW4nLFxuICBHZXRKb2luRGVzY3JpcHRpb24gPSAnZ2V0LWpvaW4tZGVzY3JpcHRpb24nLFxuICBHZXRDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMgPSAnZ2V0LWNvbm5lY3Rpb24tZGVzY3JpcHRpb24tc3VtbWFyaWVzJyxcbiAgRGlzcGxheURpYWxvZyA9ICdkaXNwbGF5LWRpYWxvZycsXG4gIENsb3NlRGlhbG9nID0gJ2Nsb3NlLWRpYWxvZycsXG4gIFRlc3RDb252ZXJzaW9uVmVyYiA9ICd0ZXN0LWNvbnZlcnNpb24tdmVyYicsXG4gIEdldEZpZWxkID0gJ2dldC1maWVsZCcsXG4gIEdldERhdGFTb3VyY2UgPSAnZ2V0LWRhdGFzb3VyY2UnLFxuICBHZXRBY3RpdmVUYWJsZXMgPSAnZ2V0LWFjdGl2ZS10YWJsZXMnLFxuICBTZXRab25lVmlzaWJpbGl0eSA9ICdzZXQtem9uZS12aXNpYmlsaXR5JyxcbiAgQmxvY2tFeHRlbnNpb24gPSAnYmxvY2stZXh0ZW5zaW9uJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9WZXJicy50cyIsImltcG9ydCB7IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBFeGVjdXRlUmVzcG9uc2UsIE5vdGlmaWNhdGlvbiwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBUcmFuc2xhdGlvbnMgZnJvbSAnLi9WZXJzaW9uVHJhbnNsYXRpb25zJztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhlIHZlcnNpb24gY29udmVydGVyIGlzIGRlc2lnbmVkIHRvIGFsbG93IHRoZSBwbGF0Zm9ybSBhbmQgZXh0ZXJuYWwgbW9kdWxlc1xuICogdG8gc2VlbWxlc3NseSBjb21tdW5pY2F0ZSBvdmVyIHR3byBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgdGhlIGludGVybmFsIEFQSS4gVGhlIG9ubHlcbiAqIG1vZGUgaXQgc3VwcG9ydHMgaXMgZXh0ZXJuYWwncyB2ZXJzaW9uIDw9IHBsYXRmb3JtJ3MgdmVyc2lvbi4gV2hlbiBleGVjdXRpbmdcbiAqIGNvbW1hbmRzLCBpdCBpcyB1c2VkIHRvIHVwZ3JhZGUgdGhlIGV4dGVybmFsIHJlcHJlc2VudGF0aW9uIHRvIHdoYXQgcGxhdGZvcm0ga25vd3Mgb24gdGhlIHdheSBpblxuICogYW5kIGRvd25ncmFkZSB0aGUgcmVwcmVzZW50YXRpb25zIG9uIHRoZSB3YXkgb3V0LiBTaW1pbGFybHkgZm9yIG5vdGlmaWNhdGlvbnMsIGl0IGNhblxuICogZG93bmdyYWRlIHRob3NlIG9uIHRoZSB3YXkgZnJvbSBwbGF0Zm9ybSB0byBleHRlcm5hbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXJcbiAgICAqXG4gICAgKiBAcGFyYW0gX2V4dGVybmFsVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgYXBpLWV4dGVybmFsLWpzIGlzIHVzaW5nXG4gICAgKiBAcGFyYW0gX3BsYXRmb3JtVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgdGhlIGFwaS1wbGF0Zm9ybS1qcyBpcyB1c2luZ1xuICAgICogQHBhcmFtIF91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgdGhlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIHdoZW4gdXBncmFkaW5nIGNtZCBwYXJhbWV0ZXJzXG4gICAgKiBAcGFyYW0gX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBhZnRlciBhIGNtZFxuICAgICogQHBhcmFtIF9kb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBvbiBhIG5vdGlmaWNhdGlvblxuICAgICovXG4gIHB1YmxpYyBzdGF0aWMgZnJvbURhdGEoXG4gICAgZXh0ZXJuYWxWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICAgIHBsYXRmb3JtVmVyc2lvbjogVmVyc2lvbk51bWJlcixcbiAgICB1cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gICAgZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICAgIGRvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj5cbiAgKTogU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIHtcbiAgICByZXR1cm4gbmV3IHRoaXMoXG4gICAgICBleHRlcm5hbFZlcnNpb24ubWFqb3IsXG4gICAgICBwbGF0Zm9ybVZlcnNpb24ubWFqb3IsXG4gICAgICB1cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucyxcbiAgICAgIGRvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMsXG4gICAgICBkb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlclxuICAgKlxuICAgKiBAcGFyYW0gX2V4dGVybmFsTWFqb3JWZXJzaW9uIFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCBhcGktZXh0ZXJuYWwtanMgaXMgdXNpbmdcbiAgICogQHBhcmFtIF9wbGF0Zm9ybU1ham9yVmVyc2lvbiBUaGUgbWFqb3IgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgdGhlIGFwaS1wbGF0Zm9ybS1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiB0aGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gd2hlbiB1cGdyYWRpbmcgY21kIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiBkb3duZ3JhZGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gYWZ0ZXIgYSBjbWRcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBvbiBhIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2V4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcixcbiAgICBwcml2YXRlIF91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gICAgcHJpdmF0ZSBfZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICAgIHByaXZhdGUgX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4pIHtcblxuICAgIGlmICh0aGlzLl9leHRlcm5hbE1ham9yVmVyc2lvbiA+IHRoaXMuX3BsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb252ZXJ0IGJldHdlZW4gZXh0ZXJuYWwgdmVyc2lvbiAke3RoaXMuX2V4dGVybmFsTWFqb3JWZXJzaW9ufSBhbmQgJHt0aGlzLl9wbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZUV4ZWN1dGVDYWxsKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KTogeyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzOyB9IHtcbiAgICAvLyBQZXJmb3JtIHRoZSB1cGdyYWRlIG9mIHRoZSB2ZXJiIGFuZCBwYXJhbWV0ZXJzIHRvIHRoZSBsZXZlbCB0aGF0IHBsYXRmb3JtIGlzIHVzaW5nXG4gICAgbGV0IHVwZ3JhZGVkID0geyB2ZXJiOiB2ZXJiLCBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIH07XG4gICAgZm9yIChjb25zdCB1cGdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fdXBncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIHVwZ3JhZGVkID0gdXBncmFkZVRyYW5zbGF0aW9uKHVwZ3JhZGVkLnZlcmIsIHVwZ3JhZGVkLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVFeGVjdXRlUmV0dXJuKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKTogRXhlY3V0ZVJlc3BvbnNlIHtcbiAgICAvLyBEb3duZ3JhZGUgdGhlIHJlc3BvbnNlIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IGV4ZWN1dGVSZXNwb25zZTtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIGRvd25ncmFkZWQgPSBkb3duZ3JhZGVUcmFuc2xhdGlvbihkb3duZ3JhZGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG93bmdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAgIC8vIERvd25ncmFkZSB0aGUgbm90aWZpY2F0aW9uIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IG5vdGlmaWNhdGlvbjtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb3duZ3JhZGVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgTm90aWZpY2F0aW9uLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhpcyB2ZXJzaW9uIGNvbnZlcnRlciBkb2Vzbid0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGJ1dCBpcyB1c2VmdWwgZm9yIHRlc3Rpbmcgb3Igd2hlbiB3ZSBoYXZlXG4gKiBhIG1hdGNoaW5nIHBsYXRmb3JtIGFuZCBpbnRlcm5hbCB2ZXJzaW9uIG51bWJlclxuKi9cbmV4cG9ydCBjbGFzcyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgaW1wbGVtZW50cyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJiOiB2ZXJiIGFzIFZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMgYXMgRXhlY3V0ZVBhcmFtZXRlcnNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIHJldHVybiBleGVjdXRlUmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlLCBOb3RpZmljYXRpb24sIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMsIEV4dGVuc2lvbkJvb3RzdHJhcEluZm8gfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVmlzdWFsSWQgfSBmcm9tICcuLi9jb250cmFjdC9Nb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQgfSBmcm9tICcuLi9jb250cmFjdC9Ob3RpZmljYXRpb25zJztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHdlIHJlY2VpdmUgb2xkIHZlcnMgYW5kIHBhcmFtZXRlcnMgZnJvbSB0aGUgZXh0ZXJuYWwgYmVmb3JlIHdlIHNlbmQgaXQgdG8gcGxhdGZvcm0gKi9cbmV4cG9ydCB0eXBlIFVwZ3JhZGVFeGVjdXRlQ2FsbCA9XG4gICh2ZXJiOiBhbnksIHBhcmFtZXRlcnM6IGFueSkgPT4geyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzIH07XG5cbi8qKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHdlIHJlY2VpdmVkIGEgcmVzcG9uc2UgYmFjayBmcm9tIHBsYXRmb3JtIGFuZCB3ZSBuZWVkIHRvIGRvd25ncmFkZSBpdCB0byBleHRlcm5hbCdzIHZlcnNpb24gKi9cbmV4cG9ydCB0eXBlIERvd25ncmFkZUV4ZWN1dGVSZXR1cm4gPVxuICAoZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpID0+IEV4ZWN1dGVSZXNwb25zZTtcblxuLyoqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gd2UgcmVjZWl2ZSBhIG5vdGlmaWNhdGlvbiBmcm9tIHBsYXRmb3JtIGFuZCB3ZSBuZWVkIHRvIGRvd25ncmFkZSBpdCB0byBleHRlcm5hbCdzIHZlcnNpb24gKi9cbmV4cG9ydCB0eXBlIERvd25ncmFkZU5vdGlmaWNhdGlvbiA9XG4gIChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbikgPT4gTm90aWZpY2F0aW9uO1xuXG5cbi8vIFRoaXMgaXMgd2hlcmUgd2Ugd2lsbCBzdGFydCB0byBkZWZpbmUgc29tZSBvZiB0aGVzZSB0cmFuc2xhdGlvbnMuXG4vLyBXaGVuIG1vZGlmeWluZyBleGlzdGluZyBtb2RlbHMsIGFkZCB0aGUgcmVxdWlzaXRlIGNvbnZlcnNpb24gZnVuY3Rpb25zIGhlcmUsIHRoZW4gdXNlIHRoZW1cbi8vIGluIHRoZSBWZXJzaW9uQ29udmVydGVyRmFjdG9yeSBpbXBsZW1lbnRhdGlvbi4gSW1wb3J0IG9sZCB2ZXJzaW9ucyBhcyB5b3Ugd291bGQgYW55IG90aGVyIG1vZHVsZVxuXG4vLyAwIDwtPiBUcmFuc2xhdGlvbnNcbi8vIFVuY29tbWVudCB0aGlzIGxpbmUgdG8gaW1wb3J0IGZyb20gdGhlIFYwIGRlZmluaXRpb24gb2YgdGhlIEFQSVxuLy8gaW1wb3J0ICogYXMgVjAgZnJvbSAnQHRhYmxlYXUtYXBpLWludGVybmFsLWNvbnRyYWN0LWpzX3YwJztcblxuLy8gMSA8LT4gMiBUcmFuc2xhdGlvbnNcbi8vIFVuY29tbWVudCB0aGlzIGxpbmUgdG8gaW1wb3J0IGZyb20gdGhlIFYxIGRlZmluaXRpb24gb2YgdGhlIEFQSVxuLy8gaW1wb3J0ICogYXMgVjEgZnJvbSAnQHRhYmxlYXUtYXBpLWludGVybmFsLWNvbnRyYWN0LWpzX3YxJztcblxuZXhwb3J0IGZ1bmN0aW9uIERvd25ncmFkZVYyV29ya3NoZWV0TmFtZXMoZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuXG4gIC8vIEZpeCB0aGUgZGFzaGJvYXJkIGZyaWVuZGx5IG5hbWUgaXNzdWUuIFRoZSBzdHJ1Y3R1cmVzIGFyZSBjb21wYXRpYmxlLFxuICAvLyBzbyB3ZSBzdGlsbCByZXR1cm4gdGhlIG9yaWdpbmFsIHJlcGx5LCBidXQgd2UgY29weSB0aGUgU2hlZXRJbmZvLm5hbWVcbiAgLy8gaW50byB0aGUgRGFzaGJvYXJkWm9uZS5uYW1lLCB3aGVyZSB2MSB3YW50cyB0byBmaW5kIGl0LlxuXG4gIGxldCBib290c3RyYXBJbmZvID0gZXhlY3V0ZVJlc3BvbnNlLnJlc3VsdCBhcyBFeHRlbnNpb25Cb290c3RyYXBJbmZvO1xuICBpZiAoYm9vdHN0cmFwSW5mby5leHRlbnNpb25EYXNoYm9hcmRJbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICBib290c3RyYXBJbmZvLmV4dGVuc2lvbkRhc2hib2FyZEluZm8uem9uZXMuZm9yRWFjaCh6b25lID0+IHtcbiAgICAgIGlmICh6b25lLnNoZWV0SW5mbykge1xuICAgICAgICB6b25lLm5hbWUgPSB6b25lLnNoZWV0SW5mby5uYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERvd25ncmFkZUZsaXBib2FyZFpvbmVJRChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IE5vdGlmaWNhdGlvbiB7XG5cbiAgLy8gRml4IHRoZSBGbGlwYm9hcmRab25lSWQgaXNzdWUuIE9sZGVyIGV4dGVybmFsIHZlcnNpb25zIHN0aWxsIGNoZWNrIGZvciBmbGlwYm9hcmRab25lSURzLlxuICAvLyBXaGVuIHJ1bm5pbmcgYWdhaW5zdCBhIG5ld2VyIHNlcnZlciwgaWYgZmxpcGJvYXJkWm9uZUlkIGlzIGFic2VudCwgc2V0IGl0IHRvIGRlZmF1bHQoMCkuXG5cbiAgaWYgKG5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb25JZCA9PT0gTm90aWZpY2F0aW9uSWQuU2VsZWN0ZWRNYXJrc0NoYW5nZWQpIHtcbiAgICBsZXQgdmlzdWFsTW9kZWwgPSBub3RpZmljYXRpb24uZGF0YSBhcyBWaXN1YWxJZDtcbiAgICBpZiAodmlzdWFsTW9kZWwuZmxpcGJvYXJkWm9uZUlEID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZpc3VhbE1vZGVsLmZsaXBib2FyZFpvbmVJRCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vdGlmaWNhdGlvbjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uVHJhbnNsYXRpb25zLnRzIiwiaW1wb3J0IHsgTWFqb3JNaW5vclRyYW5zbGF0b3JzLCBHZXRNYXhpbXVtTWlub3JJbmRleCwgVmVyc2lvbkVxdWFsVG8gfSBmcm9tICcuLi9WZXJzaW9uQ29udmVydGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBFeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0ICogYXMgVHJhbnNsYXRpb25zRXh0ZXJuYWwgZnJvbSAnLi9FeHRlcm5hbFZlcnNpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uLy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBFeHRlcm5hbElkZW50aXR5VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vRXh0ZXJuYWxJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgRXh0ZXJuYWxTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0V4dGVybmFsU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IFVwZ3JhZGVEYXRhVGFibGVUeXBlcyB9IGZyb20gJy4vRXh0ZXJuYWxWZXJzaW9uVHJhbnNsYXRpb25zJztcblxuXG4vLyBBIG1hcHBpbmcgZnJvbSB0aGUgY3VycmVudCBjbGllbnQgdmVyc2lvbiBvZiBpbnRlcm5hbC1jb250cmFjdCB0byBhbiBvbGRlciBwbGF0Zm9ybSB2ZXJzaW9uIG9mIHRoZSBjb250cmFjdC5cbi8vIEVhY2ggdmVyc2lvbiBidW1wIGNhbiBoYXZlIGFuIGFycmF5IG9mIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIGluIG9yZGVyLlxuLy8gVGhlc2UgdHJhbnNsYXRpb25zIGhhbmRsZSBkb3duZ3JhZGVFeGVjdXRlQ2FsbCBhbmQgdXBncmFkZUV4ZWN1dGVSZXR1cm4gYW5kIGFyZSBtZWFudCB0byBiZSBjYWxsZWQgb24gdGhlXG4vLyBjbGllbnQvZXh0ZXJuYWwgc2lkZS5cbi8vIFdoZW4gdXBkYXRpbmcgdGhlIG1ham9yIG9yIG1pbm9yIHZlcnNpb24gb2Ygb3VyIGludGVybmFsLWNvbnRyYWN0LCB5b3Ugd2lsbCBuZWVkIHRvIHVwZGF0ZSB0aGVzZSBkYXRhIHN0cnVjdHVyZXMuXG4vLyAqIElmIHRoZXJlIGFyZSB0cmFuc2xhdGlvbnMgdG8gYWRkLCBhZGQgdGhlbSB0byB0aGUgdmVyc2lvbiB0byAndXBncmFkZSBmcm9tJyBvciAnZG93bmdyYWRlIHRvJy5cbmV4cG9ydCBjb25zdCBFeGVjdXRlTWlub3JEb3duZ3JhZGVDYWxsRXh0ZXJuYWw6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnNFeHRlcm5hbC5Eb3duZ3JhZGVFeGVjdXRlQ2FsbD4gPSB7XG4gIDE6IHtcbiAgICA5OiBbXSAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHdlIHB1dCBkb3duZ3JhZGVzIGZyb20gMS4xMCB0byAxLjkgaW4gdGhlIFsxXVs5XSBidWNrZXRcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEV4ZWN1dGVNaW5vclVwZ3JhZGVSZXR1cm5FeHRlcm5hbDogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9uc0V4dGVybmFsLlVwZ3JhZGVFeGVjdXRlUmV0dXJuPiA9IHtcbiAgMToge1xuICAgIDk6IFtVcGdyYWRlRGF0YVRhYmxlVHlwZXNdICAvLyBOb3RlIHRoYXQgd2UgcHV0IHVwZ3JhZGVzIGZyb20gMS45IHRvIDEuMTAgaW4gdGhlIFsxXVs5XSBidWNrZXRcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEV4ZWN1dGVNaW5vclVwZ3JhZGVOb3RpZmljYXRpb246IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnNFeHRlcm5hbC5VcGdyYWRlTm90aWZpY2F0aW9uPiA9IHtcbiAgMToge1xuICAgIDk6IFtdICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgd2UgcHV0IHVwZ3JhZGVzIGZyb20gMS45IHRvIDEuMTAgaW4gdGhlIFsxXVs5XSBidWNrZXRcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEV4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHdoaWNoIGhhcyB0aGUgYWJpbGl0eSB0byB1cGdyYWRlIGFuZCBkb3duZ3JhZGVcbiAqIHRoZSBjb250cmFjdCBiZXR3ZWVuIHRoZSB0d28gdmVyc2lvbnMgd2hpY2ggYXJlIHNwZWNpZmllZC4gSWYgZXh0ZXJuYWxNYWpvclZlcnNpb24gaXMgbGVzcyB0aGFuXG4gKiBwbGF0Zm9ybU1ham9yVmVyc2lvbiwgYW4gRXh0ZXJuYWxJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEhhbmRsZXMgdXBncmFkZS9kb3duZ3JhZGUgZm9yIGJvdGggbWFqb3IgYW5kIG1pbm9yIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIGV4dGVybmFsVmVyc2lvbiBWZXJzaW9uTnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBhcGkgd2hpY2ggdGhlIGV4dGVybmFsIG1vZHVsZSBpcyB1c2luZ1xuICogQHBhcmFtIHBsYXRmb3JtVmVyc2lvbiBWZXJzaW9uTnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBhcGkgd2hpY2ggdGhlIHBsYXRmb3JtIGlzIHVzaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVFeHRlcm5hbENvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyKFxuICBleHRlcm5hbFZlcnNpb246IFZlcnNpb25OdW1iZXIsXG4gIHBsYXRmb3JtVmVyc2lvbjogVmVyc2lvbk51bWJlcik6IEV4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICByZXR1cm4gQ3JlYXRlRXh0ZXJuYWxDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlcldpdGhUcmFuc2xhdG9ycyhcbiAgICBleHRlcm5hbFZlcnNpb24sXG4gICAgcGxhdGZvcm1WZXJzaW9uLFxuICAgIEV4ZWN1dGVNaW5vckRvd25ncmFkZUNhbGxFeHRlcm5hbCxcbiAgICBFeGVjdXRlTWlub3JVcGdyYWRlUmV0dXJuRXh0ZXJuYWwsXG4gICAgRXhlY3V0ZU1pbm9yVXBncmFkZU5vdGlmaWNhdGlvblxuICApO1xufVxuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIENyZWF0ZUV4dGVybmFsQ29tcGF0aWJsZVZlcnNpb25Db252ZXJ0ZXJXaXRoVHJhbnNsYXRvcnMuXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIHRoZSB1cGdyYWRlLCBkb3duZ3JhZGUgYXJyYXlzIHNvIHRoYXQgYWxsIHRoZSBsb2dpYyBjYW4gYmUgdGVzdGVkLlxuICpcbiAqIEBwYXJhbSBleHRlcm5hbFZlcnNpb24gVmVyc2lvbk51bWJlciBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3Qgd2hpY2ggdGhlIGV4dGVybmFsIG1vZHVsZSBpcyB1c2luZ1xuICogQHBhcmFtIHBsYXRmb3JtVmVyc2lvbiBWZXJzaW9uTnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCB3aGljaCB0aGUgcGxhdGZvcm0gaXMgdXNpbmdcbiAqIEBwYXJhbSB1cGdyYWRlcyBNYWpvck1pbm9yVHJhbnNsYXRvcnMgZm9yIHJlc3BvbnNlIHVwZ3JhZGVzXG4gKiBAcGFyYW0gZG93bmdyYWRlcyBNYWpvck1pbm9yVHJhbnNsYXRvcnMgZm9yIGV4ZWN1dGUgY2FsbCBkb3duZ3JhZGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVFeHRlcm5hbENvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyV2l0aFRyYW5zbGF0b3JzKFxuICBleHRlcm5hbFZlcnNpb246IFZlcnNpb25OdW1iZXIsXG4gIHBsYXRmb3JtVmVyc2lvbjogVmVyc2lvbk51bWJlcixcbiAgZG93bmdyYWRlczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9uc0V4dGVybmFsLkRvd25ncmFkZUV4ZWN1dGVDYWxsPixcbiAgdXBncmFkZXM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnNFeHRlcm5hbC5VcGdyYWRlRXhlY3V0ZVJldHVybj4sXG4gIHVwZ3JhZGVOb3RpZmljYXRpb25zOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zRXh0ZXJuYWwuVXBncmFkZU5vdGlmaWNhdGlvbj4pXG4gIDogRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuXG4gIGNvbnN0IGV4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIgPSBleHRlcm5hbFZlcnNpb24ubWFqb3I7XG4gIGNvbnN0IHBsYXRmb3JtTWFqb3JWZXJzaW9uOiBudW1iZXIgPSBwbGF0Zm9ybVZlcnNpb24ubWFqb3I7XG4gIGNvbnN0IHBsYXRmb3JtTWlub3JWZXJzaW9uOiBudW1iZXIgPSBwbGF0Zm9ybVZlcnNpb24ubWlub3I7XG5cbiAgLy8gVGhpcyBjaGVjayBpcyBwcmVzZW50IGluIFZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5LiBXZSB0aHJvdyB0aGUgc2FtZSBlcnJvciBoZXJlIGFzIHdlbGwuXG4gIC8vIEhlbmNlIHdlIG9ubHkgbmVlZCB0byBjaGVjayB0aGUgbWlub3IgdmVyc2lvbnMgZm9yIHRyYW5zbGF0aW9ucy5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uID4gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4dGVybmFsIHZlcnNpb24gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gcGxhdGZvcm0gdmVyc2lvbi5cbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbj0ke2V4dGVybmFsTWFqb3JWZXJzaW9ufSBwbGF0Zm9ybU1ham9yVmVyc2lvbj0ke3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICB9XG5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uIDwgcGxhdGZvcm1NYWpvclZlcnNpb24gfHwgVmVyc2lvbkVxdWFsVG8oZXh0ZXJuYWxWZXJzaW9uLCBwbGF0Zm9ybVZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBFeHRlcm5hbElkZW50aXR5VmVyc2lvbkNvbnZlcnRlcigpO1xuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZSB2ZXJzaW9ucyB3ZSBoYXZlIGhlcmUgYW5kIGNvbGxlY3QgdGhlIHVwZ3JhZGUgYW5kIGRvd25ncmFkZXMgbmVjZXNzYXJ5XG4gIGxldCBuZWVkZWRFeGVjdXRlQ2FsbERvd25ncmFkZTogQXJyYXk8VHJhbnNsYXRpb25zRXh0ZXJuYWwuRG93bmdyYWRlRXhlY3V0ZUNhbGw+ID1cbiAgICBHZXROZWVkZWRFeHRlcm5hbFRyYW5zbGF0aW9ucyhwbGF0Zm9ybU1ham9yVmVyc2lvbiwgcGxhdGZvcm1NaW5vclZlcnNpb24sIGRvd25ncmFkZXMpO1xuXG4gIGxldCBuZWVkZWRFeGVjdXRlUmV0dXJuVXBncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9uc0V4dGVybmFsLlVwZ3JhZGVFeGVjdXRlUmV0dXJuPiA9XG4gICAgR2V0TmVlZGVkRXh0ZXJuYWxUcmFuc2xhdGlvbnMocGxhdGZvcm1NYWpvclZlcnNpb24sIHBsYXRmb3JtTWlub3JWZXJzaW9uLCB1cGdyYWRlcyk7XG5cbiAgbGV0IG5lZWRlZE5vdGlmaWNhdGlvblVwZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnNFeHRlcm5hbC5VcGdyYWRlTm90aWZpY2F0aW9uPiA9XG4gICAgR2V0TmVlZGVkRXh0ZXJuYWxUcmFuc2xhdGlvbnMocGxhdGZvcm1NYWpvclZlcnNpb24sIHBsYXRmb3JtTWlub3JWZXJzaW9uLCB1cGdyYWRlTm90aWZpY2F0aW9ucyk7XG5cbiAgLy8gUmV2ZXJzZSB0aGUgZG93bmdyYWRlIGNhbGxzLCBzbyB0aGF0IHdlIHN0YXJ0IHRoZSBkb3duZ3JhZGUgZnJvbSB0aGUgZXh0ZXJuYWwgdmVyc2lvbiB0byB0aGUgcGxhdGZvcm0gdmVyc2lvblxuICBuZWVkZWRFeGVjdXRlQ2FsbERvd25ncmFkZS5yZXZlcnNlKCk7XG4gIHJldHVybiBuZXcgRXh0ZXJuYWxTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIoXG4gICAgZXh0ZXJuYWxWZXJzaW9uLCBwbGF0Zm9ybVZlcnNpb24sIG5lZWRlZEV4ZWN1dGVDYWxsRG93bmdyYWRlLCBuZWVkZWRFeGVjdXRlUmV0dXJuVXBncmFkZXMsIG5lZWRlZE5vdGlmaWNhdGlvblVwZ3JhZGVzKTtcbn1cblxuZnVuY3Rpb24gR2V0TmVlZGVkRXh0ZXJuYWxUcmFuc2xhdGlvbnM8VD4oXG4gIHBsYXRmb3JtTWFqb3JWZXJzaW9uOiBudW1iZXIsXG4gIHBsYXRmb3JtTWlub3JWZXJzaW9uOiBudW1iZXIsXG4gIG1ham9yTWlub3JUcmFuc2xhdG9yczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFQ+KTogQXJyYXk8VD4ge1xuXG4gIGxldCBuZWVkZWRUcmFuc2xhdGlvbnM6IEFycmF5PFQ+ID0gW107XG5cbiAgaWYgKHBsYXRmb3JtTWFqb3JWZXJzaW9uIGluIG1ham9yTWlub3JUcmFuc2xhdG9ycykge1xuICAgIGxldCBzdGFydCA9IHBsYXRmb3JtTWlub3JWZXJzaW9uO1xuICAgIGxldCBtYXhpbXVtTWlub3JWZXJzaW9uID0gR2V0TWF4aW11bU1pbm9ySW5kZXgoT2JqZWN0LmtleXMobWFqb3JNaW5vclRyYW5zbGF0b3JzW3BsYXRmb3JtTWFqb3JWZXJzaW9uXSkpO1xuICAgIGZvciAobGV0IG1pbm9yID0gc3RhcnQ7IG1pbm9yIDw9IG1heGltdW1NaW5vclZlcnNpb247IG1pbm9yKyspIHtcbiAgICAgIGlmIChtaW5vciBpbiBtYWpvck1pbm9yVHJhbnNsYXRvcnNbcGxhdGZvcm1NYWpvclZlcnNpb25dKSB7XG4gICAgICAgIG5lZWRlZFRyYW5zbGF0aW9ucy5wdXNoKC4uLm1ham9yTWlub3JUcmFuc2xhdG9yc1twbGF0Zm9ybU1ham9yVmVyc2lvbl1bbWlub3JdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmVlZGVkVHJhbnNsYXRpb25zO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsVmVyc2lvbkNvbnZlcnRlckZhY3RvcnkudHMiLCJpbXBvcnQgeyBFeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlLCBFeGVjdXRlUGFyYW1ldGVycywgTm90aWZpY2F0aW9uLCBWZXJiSWQsIFZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi8uLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuaW1wb3J0ICogYXMgVHJhbnNsYXRpb25zIGZyb20gJy4vRXh0ZXJuYWxWZXJzaW9uVHJhbnNsYXRpb25zJztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4vKipcbiAqIFRoZSB2ZXJzaW9uIGNvbnZlcnRlciBpcyBkZXNpZ25lZCB0byBhbGxvdyB0aGUgcGxhdGZvcm0gYW5kIGV4dGVybmFsIG1vZHVsZXNcbiAqIHRvIHNlZW1sZXNzbHkgY29tbXVuaWNhdGUgb3ZlciB0d28gZGlmZmVyZW50IHZlcnNpb25zIG9mIHRoZSBpbnRlcm5hbCBBUEkuIFRoaXMgY29udmVydGVyXG4gKiBzdXBwb3J0cyBleHRlcm5hbCdzIHZlcnNpb24obWlub3IpID49IHBsYXRmb3JtJ3MgdmVyc2lvbihtaW5vcikuIFdoZW4gZXhlY3V0aW5nXG4gKiBjb21tYW5kcywgaXQgaXMgdXNlZCB0byBkb3duZ3JhZGUgdGhlIGV4dGVybmFsIHJlcHJlc2VudGF0aW9uIHRvIHdoYXQgcGxhdGZvcm0ga25vd3Mgb24gdGhlIHdheSBpblxuICogYW5kIHVwZ3JhZGUgdGhlIHJlcHJlc2VudGF0aW9ucyBvbiB0aGUgd2F5IG91dC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVybmFsU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIGltcGxlbWVudHMgRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXJcbiAgICpcbiAgICogQHBhcmFtIF9leHRlcm5hbFZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IGFwaS1leHRlcm5hbC1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3BsYXRmb3JtVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgdGhlIGFwaS1wbGF0Zm9ybS1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX2Rvd25ncmFkZUV4ZWN1dGVDYWxsVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiB0aGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gd2hlbiBkb3duZ3JhZGluZyBjbWQgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gX3VwZ3JhZGVFeGVjdXRlUmV0dXJuVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiB1cGdyYWRlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIGFmdGVyIGEgY21kIGlzIGV4ZWN1dGVkXG4gICAqIEBwYXJhbSBfdXBncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgdXBncmFkZSBub3RmaWNhdGlvbnMgdG8gcGVyZm9ybSBvbiBldmVudHNcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9leHRlcm5hbFZlcnNpb246IFZlcnNpb25OdW1iZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1WZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICAgIHByaXZhdGUgX2Rvd25ncmFkZUV4ZWN1dGVDYWxsVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZUNhbGw+LFxuICAgIHByaXZhdGUgX3VwZ3JhZGVFeGVjdXRlUmV0dXJuVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICAgIHByaXZhdGUgX3VwZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnM6IEFycmF5PFRyYW5zbGF0aW9ucy5VcGdyYWRlTm90aWZpY2F0aW9uPikge1xuXG5cbiAgICBpZiAodGhpcy5fZXh0ZXJuYWxWZXJzaW9uLm1ham9yID4gdGhpcy5fcGxhdGZvcm1WZXJzaW9uLm1ham9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb252ZXJ0IGJldHdlZW4gZXh0ZXJuYWwgdmVyc2lvbiAke3RoaXMuX2V4dGVybmFsVmVyc2lvbi5tYWpvcn1cbiAgICAgIGFuZCAke3RoaXMuX3BsYXRmb3JtVmVyc2lvbi5tYWpvcn1gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIC8vIFBlcmZvcm0gdGhlIGRvd25ncmFkZSBvZiB0aGUgdmVyYiBhbmQgcGFyYW1ldGVycyB0byB0aGUgbGV2ZWwgdGhhdCBwbGF0Zm9ybSBpcyB1c2luZ1xuICAgIGxldCBkb3duZ3JhZGVkID0geyB2ZXJiOiB2ZXJiLCBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIH07XG4gICAgZm9yIChjb25zdCBkb3duZ3JhZGVUcmFuc2xhdGlvbiBvZiB0aGlzLl9kb3duZ3JhZGVFeGVjdXRlQ2FsbFRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQudmVyYiwgZG93bmdyYWRlZC5wYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG93bmdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZVJldHVybihleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSk6IEV4ZWN1dGVSZXNwb25zZSB7XG4gICAgLy8gUGVyZm9ybSB0aGUgdXBncmFkZSBvZiB0aGUgcmVzcG9uc2UgdG8gd2hhdCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIGV4cGVjdGluZ1xuICAgIGxldCB1cGdyYWRlZCA9IGV4ZWN1dGVSZXNwb25zZTtcbiAgICBmb3IgKGNvbnN0IHVwZ3JhZGVUcmFuc2xhdGlvbiBvZiB0aGlzLl91cGdyYWRlRXhlY3V0ZVJldHVyblRyYW5zbGF0aW9ucykge1xuICAgICAgdXBncmFkZWQgPSB1cGdyYWRlVHJhbnNsYXRpb24odXBncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyB1cGdyYWRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogTm90aWZpY2F0aW9uIHtcbiAgICAvLyBQZXJmb3JtIHRoZSB1cGdyYWRlIG9mIG5vdGlmaWNhdGlvbiB0byB3aGF0IHRoZSBleHRlcm5hbCBtb2R1bGUgaXMgZXhwZWN0aW5nXG4gICAgbGV0IHVwZ3JhZGVkID0gbm90aWZpY2F0aW9uO1xuICAgIGZvciAoY29uc3QgdXBncmFkZU5vdGlmaWNhdGlvbiBvZiB0aGlzLl91cGdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zKSB7XG4gICAgICB1cGdyYWRlZCA9IHVwZ3JhZGVOb3RpZmljYXRpb24odXBncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGdyYWRlZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHtcbiAgRGF0YVRhYmxlLFxuICBEYXRhVHlwZSxcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4ZWN1dGVSZXNwb25zZSxcbiAgTm90aWZpY2F0aW9uLFxuICBTZWxlY3RlZE1hcmtzVGFibGUsXG4gIFVuZGVybHlpbmdEYXRhVGFibGUsXG4gIFZlcmJJZFxufSBmcm9tICcuLi8uLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gd2UgcmVjZWl2ZSBuZXdlciB2ZXJzaW9uIGFuZCBwYXJhbWV0ZXJzIGZyb20gdGhlIGV4dGVybmFsIGJlZm9yZSB3ZSBzZW5kIGl0IHRvIHBsYXRmb3JtICovXG5leHBvcnQgdHlwZSBEb3duZ3JhZGVFeGVjdXRlQ2FsbCA9XG4gICh2ZXJiOiBWZXJiSWQsIHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzKSA9PiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgfTtcblxuLyoqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gd2UgcmVjZWl2ZSBhIHJlc3BvbnNlIGJhY2sgZnJvbSBwbGF0Zm9ybSBhbmQgd2UgbmVlZCB0byB1cGdyYWRlIGl0IHRvIGV4dGVybmFsJ3MgdmVyc2lvbiAqL1xuZXhwb3J0IHR5cGUgVXBncmFkZUV4ZWN1dGVSZXR1cm4gPVxuICAoZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpID0+IEV4ZWN1dGVSZXNwb25zZTtcblxuLyoqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gd2UgcmVjZWl2ZSBhIG5vdGlmaWNhdGlvbiBmcm9tIHBsYXRmb3JtIGFuZCB3ZSBuZWVkIHRvIHVwZ3JhZGUgaXQgdG8gZXh0ZXJuYWwncyB2ZXJzaW9uICovXG5leHBvcnQgdHlwZSBVcGdyYWRlTm90aWZpY2F0aW9uID1cbiAgKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiBOb3RpZmljYXRpb247XG5cbi8vIDEuMiAtPiAxLjAgVHJhbnNsYXRpb25zXG4vLyBVbmNvbW1lbnQgdGhpcyBsaW5lIHRvIGltcG9ydCBmcm9tIHRoZSBWMSBkZWZpbml0aW9uIG9mIHRoZSBBUElcbi8vIGltcG9ydCAqIGFzIFYxIGZyb20gJ0B0YWJsZWF1LWFwaS1pbnRlcm5hbC1jb250cmFjdC1qc192MSc7XG5cbi8qKlxuICogUHJpb3IgdG8gMjAxOS4yIChpbnRlcm5hbC1jb250cmFjdCB2MS45KSwgRGF0YVZhbHVlLnZhbHVlIHdlcmUgYWxsIHN0cmluZ3MuXG4gKiBHbyB0aHJvdWdoIGFsbCBEYXRhVmFsdWUgb2JqZWN0cy4gSWYgd2UgaGF2ZSBhIHN0cmluZywgYnV0IHRoZSB0eXBlIHNob3VsZCBub3QgYmUgYSBzdHJpbmcsXG4gKiBjb252ZXJ0IGl0IHRvIHRoZSBjb3JyZWN0IHR5cGUuIFRoZSB0eXBlIG9mIERhdGFWYWx1ZS52YWx1ZSBpcyAnYW55JyBpbiB0aGUgY29udHJhY3QsIHNvXG4gKiB0aGlzIGNoYW5nZSBkb2Vzbid0IG5lZWQgYW55IHVwZGF0ZXMgdG8gY2xhc3NlcyBvciB0eXBlcy5cbiovXG5leHBvcnQgZnVuY3Rpb24gVXBncmFkZURhdGFUYWJsZVR5cGVzKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKTogRXhlY3V0ZVJlc3BvbnNlIHtcbiAgaWYgKCFleGVjdXRlUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gZXhlY3V0ZVJlc3BvbnNlO1xuICB9XG5cbiAgbGV0IG9sZFVuZGVybHlpbmdEYXRhVGFibGUgPSBleGVjdXRlUmVzcG9uc2UucmVzdWx0IGFzIFVuZGVybHlpbmdEYXRhVGFibGU7XG4gIGlmIChvbGRVbmRlcmx5aW5nRGF0YVRhYmxlLmRhdGEgIT09IHVuZGVmaW5lZCAmJiBvbGRVbmRlcmx5aW5nRGF0YVRhYmxlLmlzU3VtbWFyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29udmVydERhdGFWYWx1ZXMob2xkVW5kZXJseWluZ0RhdGFUYWJsZS5kYXRhKTtcbiAgICByZXR1cm4gZXhlY3V0ZVJlc3BvbnNlO1xuICB9XG5cbiAgbGV0IG9sZFNlbGVjdGVkTWFya3NUYWJsZSA9IGV4ZWN1dGVSZXNwb25zZS5yZXN1bHQgYXMgU2VsZWN0ZWRNYXJrc1RhYmxlO1xuICBpZiAob2xkU2VsZWN0ZWRNYXJrc1RhYmxlLmRhdGEgIT09IHVuZGVmaW5lZCAmJiBBcnJheS5pc0FycmF5KG9sZFNlbGVjdGVkTWFya3NUYWJsZS5kYXRhKSkge1xuICAgIG9sZFNlbGVjdGVkTWFya3NUYWJsZS5kYXRhLmZvckVhY2gobWFya3NUYWJsZSA9PiB7XG4gICAgICBjb252ZXJ0RGF0YVZhbHVlcyhtYXJrc1RhYmxlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXhlY3V0ZVJlc3BvbnNlO1xuICB9XG5cbiAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gY29udmVydERhdGFWYWx1ZXModGFibGU6IERhdGFUYWJsZSk6IHZvaWQge1xuICAvLyBkYXRhVGFibGUgaXMgYSB0d28tZGltZW5zaW9uYWwgYXJyYXkgb2YgZGF0YS4gRmlyc3QgaW5kZXggaXMgdGhlIHJvdywgc2Vjb25kIGlzIHRoZSBjb2x1bW4uXG4gIGlmICh0YWJsZSA9PT0gdW5kZWZpbmVkIHx8IHRhYmxlLmRhdGFUYWJsZSA9PT0gdW5kZWZpbmVkIHx8ICFBcnJheS5pc0FycmF5KHRhYmxlLmRhdGFUYWJsZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0YWJsZS5kYXRhVGFibGUuZm9yRWFjaChyb3cgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChkYXRhVmFsdWUsIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkYXRhVmFsdWUudmFsdWU7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YVZhbHVlLnZhbHVlID0gY29udmVydFRvVHlwZSh2YWx1ZSwgdGFibGUuaGVhZGVyc1tjb2x1bW5JbmRleF0uZGF0YVR5cGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvVHlwZSh2YWx1ZUFzU3RyaW5nOiBzdHJpbmcsIHR5cGU6IERhdGFUeXBlKTogYW55IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBEYXRhVHlwZS5Cb29sOlxuICAgICAgcmV0dXJuIGlzU3BlY2lhbCh2YWx1ZUFzU3RyaW5nKSA/IHZhbHVlQXNTdHJpbmcgOiB2YWx1ZUFzU3RyaW5nLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcblxuICAgIGNhc2UgRGF0YVR5cGUuSW50OlxuICAgIGNhc2UgRGF0YVR5cGUuRmxvYXQ6XG4gICAgICByZXR1cm4gaXNTcGVjaWFsKHZhbHVlQXNTdHJpbmcpID8gdmFsdWVBc1N0cmluZyA6IE51bWJlcih2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGNhc2UgRGF0YVR5cGUuRGF0ZTpcbiAgICBjYXNlIERhdGFUeXBlLkRhdGVUaW1lOlxuICAgIC8vIERpc2NyZXRlIGRhdGVzIGFyZSB0eXBlIERhdGFUeXBlLkludCwgYW5kIGhhbmRsZWQgYWJvdmUuXG4gICAgLy8gQ29udGludW91cyBkYXRlcyBhcmUganVzdCBzdHJpbmdzIGluIHRoaXMgZm9ybWF0OiBcIllZWVktTU0tREQgW0hIOk1NOlNTXVwiXG4gICAgLy8gZmFsbHRocm91Z2guLi5cbiAgICBjYXNlIERhdGFUeXBlLlNwYXRpYWw6XG4gICAgY2FzZSBEYXRhVHlwZS5TdHJpbmc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB2YWx1ZUFzU3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZUFzU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gU3BlY2lhbCB2YWx1ZXMgY29tZSB0byB1cyBhcyAnJW51bGwlJywgJyVhbGwlJywgJyV3aWxkY2FyZCUnLCAnJW1pc3NpbmclJy4uLlxuICAvLyAoU2VlIERhdGFWYWx1ZUZvcm1hdHRlci5jcHApXG5cbiAgaWYgKHZhbHVlQXNTdHJpbmcubGVuZ3RoID4gMCAmJiB2YWx1ZUFzU3RyaW5nWzBdID09PSAnJScgJiYgdmFsdWVBc1N0cmluZ1t2YWx1ZUFzU3RyaW5nLmxlbmd0aCAtIDFdID09PSAnJScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvZXh0ZXJuYWwvRXh0ZXJuYWxWZXJzaW9uVHJhbnNsYXRpb25zLnRzIiwiaW1wb3J0ICogYXMgZ3VpZCBmcm9tICdndWlkJztcblxuaW1wb3J0IHsgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSc7XG5pbXBvcnQge1xuICBDb21tYW5kTWVzc2FnZSxcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgSW5pdGlhbGl6ZU1lc3NhZ2UsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBOb3RpZmljYXRpb25NZXNzYWdlLFxuICBIYW5kc2hha2VNZXNzYWdlXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL2ludGVyZmFjZS9NZXNzZW5nZXInO1xuaW1wb3J0IHsgUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIGlzQ29tbWFuZE1lc3NhZ2UsXG4gIGlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgaXNJbml0TWVzc2FnZSxcbiAgaXNNZXNzYWdlLFxuICBpc05vdGlmaWNhdGlvbk1lc3NhZ2UsXG4gIGlzSGFuZHNoYWtlTWVzc2FnZVxufSBmcm9tICcuL01lc3NhZ2VUeXBlQ2hlY2tzJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIsIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMsIE1vZGVsLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2UvSW5pdGlhbGl6YXRpb25PcHRpb25zJztcblxuLyoqXG4gKiBUaGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBpcyB0aGUgcHJpbWFyeSBleHBvcnQgZnJvbSB0aGUgYXBpLW1lc3NhZ2luZyBtb2R1bGUuIEFuIGluc3RhbmNlIG9mXG4gKiB0aGlzIGNsYXNzIGNhbiBiZSBpbnN0YW50aWF0ZWQgb24gYm90aCBzaWRlcyBvZiBhIGZyYW1lIGJvdW5kYXJ5IHRvIGZhY2lsaXRhdGUgY29tbXVuaWNhdGlvblxuICogaW4gYm90aCBkaXJlY3Rpb25zIGJldHdlZW4gdGhlIGZyYW1lcy4gVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGJvdGggdGhlIGRpc3BhdGNoZXIgYW5kIHRoZSBsaXN0ZW5lclxuICogcG9ydGlvbnMsIGJ1dCBkb2Vzbid0IHJlcXVpcmUgY2FsbGVycyB0byBjYXJlIGFib3V0IGJvdGguXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGltcGxlbWVudHMgTWVzc2VuZ2VyIHtcbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyRnVuY3Rpb246IHVuZGVmaW5lZCB8ICgoKSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBpbml0aWFsaXplTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBJbml0aWFsaXplTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIGNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIGNvbW1hbmRNZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IENvbW1hbmRNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG4gIHByaXZhdGUgbm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBOb3RpZmljYXRpb25NZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG4gIHByaXZhdGUgaGFuZHNoYWtlTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBIYW5kc2hha2VNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZU1lc3Nlbmdlci4gSWYgeW91IHdvdWxkIGxpa2UgdG8gdXNlIHRoZSBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGFzIGEgTWVzc2FnZUxpc3RlbmVyLFxuICAgKiBiZSBzdXJlIHRvIGNhbGwgU3RhcnRMaXN0ZW5pbmcgYW5kIHJlZ2lzdGVyIG1lc3NhZ2UgaGFuZGxlcnMuXG4gICAqIEBwYXJhbSB0aGlzV2luZG93IFRoZSB3aW5kb3cgb2JqZWN0IHdoaWNoIHRoZSBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGxpdmVzLiBBbiBvbk1lc3NhZ2UgbGlzdGVuZXIgd2lsbCBiZSBhZGRlZCBoZXJlLlxuICAgKiBAcGFyYW0gW290aGVyV2luZG93XSBPcHRpb25hbCBvdGhlcldpbmRvdyB3aGljaCBtZXNzYWdlcyB3aWxsIGJlIHBvc3RlZCB0by5cbiAgICogICAgICAgICAgICAgICAgICAgICAgSWYgZGVmaW5lZCwgaW5jb21pbmcgbWVzc2FnZXMgbXVzdCBvcmlnaW5hdGUgZnJvbSBvdGhlcldpbmRvdyB0byBiZSBwYXNzZWQgb25cbiAgICogQHBhcmFtIFtvdGhlcldpbmRvd09yaWdpbl0gVGhlIHRhcmdldCBvcmlnaW4gd2hpY2ggb3RoZXJXaW5kb3cgbXVzdCBoYXZlIGluIG9yZGVyIHRvIHJlY2VpdmUgZGlzcGF0Y2hlZCBtZXNzYWdlcy5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB2YWx1ZSB3aWxsIGJlIHNlbnQgYXMgdGhlIHRhcmdldE9yaWdpbiBvZiBhIHBvc3RNZXNzYWdlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Bvc3RNZXNzYWdlKVxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhpc1dpbmRvdzogV2luZG93LCBwcml2YXRlIG90aGVyV2luZG93PzogV2luZG93LCBwcml2YXRlIG90aGVyV2luZG93T3JpZ2luPzogc3RyaW5nKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNhbGwgU3RhcnRMaXN0ZW5pbmdcbiAgfVxuXG4gIC8vLy8vIE1lc3NhZ2VMaXN0ZW5lciBJbXBsZW1lbnRhdGlvblxuXG4gIHB1YmxpYyBzdGFydExpc3RlbmluZygpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGFyZSBsaXN0ZW5pbmcsIGlmIG5vdCwgaG9vayB1cCBhIG1lc3NhZ2UgbGlzdGVuZXJcbiAgICBpZiAoIXRoaXMudW5yZWdpc3RlckZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBib3VuZEhhbmRsZXIgPSB0aGlzLm9uTWVzc2FnZVJlY2VpdmVkLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnRoaXNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGJvdW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbiA9ICgpID0+IHRoaXMudGhpc1dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgYm91bmRIYW5kbGVyLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RvcExpc3RlbmluZygpOiB2b2lkIHtcbiAgICAvLyBTdG9wIGxpc3RlbmluZyBpZiB3ZSBoYXZlIHN0YXJ0ZWQgbGlzdGVuaW5nXG4gICAgaWYgKHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbigpO1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEluaXRpYWxpemVNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogSW5pdGlhbGl6ZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsaXplTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldENvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldENvbW1hbmRNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogQ29tbWFuZE1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldE5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBOb3RpZmljYXRpb25NZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldEhhbmRzaGFrZU1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAoKG1zZzogSGFuZHNoYWtlTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kc2hha2VNZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICAvLy8vLyBNZXNzYWdlRGlzcGF0Y2hlciBJbXBsZW1lbnRhdGlvblxuXG4gIC8qKlxuICAgKiBAcGFyYW0gYXBpVmVyc2lvbiBhcGktaW50ZXJuYWwtY29udHJhY3QtanMgdmVyc2lvbiAoZXhwb3J0ZWQgaW4gSnNBcGlJbnRlcm5hbENvbm50cmFjdClcbiAgICogQHBhcmFtIGNyb3NzRnJhbWVWZXJzaW9uIGNyb3NzZnJhbWUgbWVzc2FnaW5nIHZlcnNpb24gKGV4cG9ydGVkIGluIEpzQXBpSW50ZXJuYWxDb25udHJhY3QpXG4gICAqIEBwYXJhbSBvcHRpb25zIGFkZGl0aW9uYWwgb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgYXQgaW5pdGlhbGl6YXRpb24gKGluZm9ybWF0aW9uIGFib3V0IHRoZSB2ZXJzaW9uIG9mXG4gICAqICAgICAgICAgICAgICAgIGV4dGVybmFsIGJlaW5nIHVzZWQgZm9yIGV4YW1wbGUpXG4gICAqL1xuICBwdWJsaWMgcHJlcGFyZUluaXRpYWxpemF0aW9uTWVzc2FnZShcbiAgICBhcGlWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLCBjcm9zc0ZyYW1lVmVyc2lvbjogVmVyc2lvbk51bWJlciwgb3B0aW9ucz86IEluaXRpYWxpemF0aW9uT3B0aW9ucyk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSxcbiAgICAgIGNyb3NzRnJhbWVWZXJzaW9uOiBjcm9zc0ZyYW1lVmVyc2lvbixcbiAgICAgIGFwaVZlcnNpb246IGFwaVZlcnNpb24sXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVDb21tYW5kTWVzc2FnZSh2ZXJiSWQ6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IENvbW1hbmRNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkNvbW1hbmQsXG4gICAgICB2ZXJiSWQ6IHZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUNvbW1hbmRSZXNwb25zZU1lc3NhZ2UoY29tbWFuZEd1aWQ6IHN0cmluZywgZGF0YTogTW9kZWwgfCB1bmRlZmluZWQsIGVycm9yOiBNb2RlbCB8IHVuZGVmaW5lZCk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsXG4gICAgICBjb21tYW5kR3VpZDogY29tbWFuZEd1aWQsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVOb3RpZmljYXRpb25NZXNzYWdlKG5vdGlmaWNhdGlvbklkOiBOb3RpZmljYXRpb25JZCwgZGF0YTogTW9kZWwpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLFxuICAgICAgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbklkLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlQWNrTWVzc2FnZSgpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IEhhbmRzaGFrZU1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuQWNrXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmVzIGEgcGVuZGluZyBtZXNzYWdlIGZvciBzZW5kaW5nIGFuZCByZXR1cm5zIHRoZSBwcmVwYXJlZCBtZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gYmUgc2VudCB0byB0aGlzLm90aGVyV2luZG93XG4gICAqIEByZXR1cm5zIFRoZSBwcmVwYXJlZCBtZXNzYWdlXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVNZXNzYWdlKG1zZzogTWVzc2FnZSk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgaWYgKCF0aGlzLm90aGVyV2luZG93IHx8ICF0aGlzLm90aGVyV2luZG93T3JpZ2luKSB7XG4gICAgICB0aHJvdyAnT3RoZXIgd2luZG93IG5vdCBpbml0aWFsaXplZCwgY2Fubm90IGRpc3BhdGNoIG1lc3NhZ2VzJztcbiAgICB9XG5cbiAgICBjb25zdCBwcmVwYXJlZE1lc3NhZ2UgPSBuZXcgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZShtc2csIHRoaXMub3RoZXJXaW5kb3csIHRoaXMub3RoZXJXaW5kb3dPcmlnaW4pO1xuICAgIHJldHVybiBwcmVwYXJlZE1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkLiBEb2VzIHNvbWUgdmFsaWRhdGlvbiBvZiB0aGUgbWVzc2FnZSwgYW5kIHRoZW5cbiAgICogY2FsbHMgYW4gYXBwcm9wcmlhdGUgbWVzc2FnZSBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBUaGUgaW5jb21pbmcgTWVzc2FnZUV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50OiBNZXNzYWdlRXZlbnQpOiB2b2lkIHtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gb3RoZXJXaW5kb3cgZGVmaW5lZCwgbWFrZSBzdXJlIHRoZSBtZXNzYWdlIGlzIGNvbWluZyBmcm9tIHRoZXJlXG4gICAgaWYgKHRoaXMub3RoZXJXaW5kb3cgJiYgZXZlbnQuc291cmNlICE9PSB0aGlzLm90aGVyV2luZG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gc29tZSB2YWxpZGF0aW9uIG9uIGV2ZW50LmRhdGEgdG8gbWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSByZWNlaXZlZCBhIHJlYWwgbWVzc2FnZVxuICAgIGlmICghZXZlbnQuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIGRlY2xhcmVkIG1lc3NhZ2UgdHlwZSwgdmFsaWRhdGUgdGhlIG1lc3NhZ2UsIGFuZCBjYWxsIGFuIGFwcHJvcHJpYXRlIGhhbmRlciBpZiBvbmUgZXhpc3RzXG4gICAgc3dpdGNoIChtZXNzYWdlLm1zZ1R5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZToge1xuICAgICAgICBpZiAoIWlzSW5pdE1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgZXZlbnQuc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZToge1xuICAgICAgICBpZiAoIWlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShtZXNzYWdlKSB8fCAhdGhpcy5jb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgZXZlbnQuc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbW1hbmQ6IHtcbiAgICAgICAgaWYgKCFpc0NvbW1hbmRNZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWFuZE1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb246IHtcbiAgICAgICAgaWYgKCFpc05vdGlmaWNhdGlvbk1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMubm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5IYW5kc2hha2U6IHtcbiAgICAgICAgaWYgKCFpc0hhbmRzaGFrZU1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuaGFuZHNoYWtlTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRzaGFrZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIEp1c3QgaWdub3JlIHRoaXMgc2luY2Ugd2UgZG9uJ3Qga25vdyBob3cgdG8gaGFuZGxlIHRoZSBtZXNzYWdlIHR5cGVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0T3RoZXJXaW5kb3cob3RoZXJXaW5kb3c6IFdpbmRvdyk6IHZvaWQge1xuICAgIHRoaXMub3RoZXJXaW5kb3cgPSBvdGhlcldpbmRvdztcbiAgfVxuXG4gIHB1YmxpYyBzZXRPdGhlcldpbmRvd09yaWdpbihvcmlnaW46IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub3RoZXJXaW5kb3dPcmlnaW4gPSBvcmlnaW47XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXIudHMiLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzJztcbmltcG9ydCB7IFByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL1ByZXBhcmVkTWVzc2FnZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFByZXBhcmVkTWVzc2FnZSBpbnRlcmZhY2UgdXNlZCB0byBwb3N0IG1lc3NhZ2VzIGJldHdlZW5cbiAqIHR3byBmcmFtZXMgdXNpbmcgd2luZG93LnBvc3RNZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlIGltcGxlbWVudHMgUHJlcGFyZWRNZXNzYWdlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS5cbiAgICogQHBhcmFtIF9tZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHNlbnRcbiAgICogQHBhcmFtIF90YXJnZXQgVGhlIHRhcmdldCB3aW5kb3cgd2hlcmUgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBzZW50XG4gICAqIEBwYXJhbSBfb3JpZ2luIFRoZSB0YXJnZXRPcmlnaW4gd2hlcmUgdGhpcyBtZXNzYWdlIGNhbiBiZSByZWNlaXZlZFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2U6IE1lc3NhZ2UsIHByaXZhdGUgX3RhcmdldDogV2luZG93LCBwcml2YXRlIF9vcmlnaW46IHN0cmluZykge1xuXG4gIH1cblxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VHdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9tZXNzYWdlLm1zZ0d1aWQ7IH1cblxuICBwdWJsaWMgc2VuZCgpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIHRoaXMuX3RhcmdldC5wb3N0TWVzc2FnZSh0aGlzLl9tZXNzYWdlLCB0aGlzLl9vcmlnaW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlLnRzIiwiaW1wb3J0ICogYXMgZ3VpZCBmcm9tICdndWlkJztcblxuaW1wb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uL2ludGVyZmFjZS9WZXJzaW9uTnVtYmVyJztcbmltcG9ydCB7XG4gIENvbW1hbmRNZXNzYWdlLFxuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBJbml0aWFsaXplTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE5vdGlmaWNhdGlvbk1lc3NhZ2UsXG4gIEhhbmRzaGFrZU1lc3NhZ2UsXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlIG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZShkYXRhOiBNZXNzYWdlIHwgYW55KTogZGF0YSBpcyBNZXNzYWdlIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRhdGEgYXMgTWVzc2FnZTtcbiAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLm1zZ0d1aWQgfHwgIW1lc3NhZ2UubXNnVHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghZ3VpZC5pc0d1aWQobWVzc2FnZS5tc2dHdWlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWVzc2FnZS5tc2dUeXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VUeXBlczogQXJyYXk8c3RyaW5nPiA9XG4gICAgW01lc3NhZ2VUeXBlLkNvbW1hbmQsIE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSwgTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSwgTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLCBNZXNzYWdlVHlwZS5IYW5kc2hha2VdO1xuXG4gIGlmIChtZXNzYWdlVHlwZXMuaW5kZXhPZihtZXNzYWdlLm1zZ1R5cGUpIDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWZXJzaW9uKHZlcnNpb25OdW1iZXI6IFZlcnNpb25OdW1iZXIgfCBhbnkpOiB2ZXJzaW9uTnVtYmVyIGlzIFZlcnNpb25OdW1iZXIge1xuICBpZiAoIXZlcnNpb25OdW1iZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB2ID0gdmVyc2lvbk51bWJlciBhcyBWZXJzaW9uTnVtYmVyO1xuXG4gIGlmICh0eXBlb2YgdiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHYuZml4ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygdi5taW5vciAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHYubWFqb3IgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luaXRNZXNzYWdlKG1lc3NhZ2U6IEluaXRpYWxpemVNZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBJbml0aWFsaXplTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaW5pdE1lc3NhZ2UgPSBtZXNzYWdlIGFzIEluaXRpYWxpemVNZXNzYWdlO1xuICBpZiAoaW5pdE1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghaW5pdE1lc3NhZ2UuYXBpVmVyc2lvbiB8fCAhaXNWZXJzaW9uKGluaXRNZXNzYWdlLmFwaVZlcnNpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpbml0TWVzc2FnZS5jcm9zc0ZyYW1lVmVyc2lvbiB8fCAhaXNWZXJzaW9uKGluaXRNZXNzYWdlLmNyb3NzRnJhbWVWZXJzaW9uKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kUmVzcG9uc2VNZXNzYWdlKG1lc3NhZ2U6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIENvbW1hbmRSZXNwb25zZU1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNyTWVzc2FnZSA9IG1lc3NhZ2UgYXMgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZTtcbiAgaWYgKGNyTWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWd1aWQuaXNHdWlkKGNyTWVzc2FnZS5jb21tYW5kR3VpZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNyTWVzc2FnZS5kYXRhICYmICFjck1lc3NhZ2UuZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZE1lc3NhZ2UobWVzc2FnZTogQ29tbWFuZE1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIENvbW1hbmRNZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjb21tYW5kTWVzc2FnZSA9IG1lc3NhZ2UgYXMgQ29tbWFuZE1lc3NhZ2U7XG4gIGlmIChjb21tYW5kTWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Db21tYW5kKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFjb21tYW5kTWVzc2FnZS5wYXJhbWV0ZXJzIHx8IHR5cGVvZiBjb21tYW5kTWVzc2FnZS5wYXJhbWV0ZXJzICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghY29tbWFuZE1lc3NhZ2UudmVyYklkIHx8IHR5cGVvZiBjb21tYW5kTWVzc2FnZS52ZXJiSWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vdGlmaWNhdGlvbk1lc3NhZ2UobWVzc2FnZTogTm90aWZpY2F0aW9uTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgTm90aWZpY2F0aW9uTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uTWVzc2FnZSA9IG1lc3NhZ2UgYXMgTm90aWZpY2F0aW9uTWVzc2FnZTtcbiAgaWYgKG5vdGlmaWNhdGlvbk1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFub3RpZmljYXRpb25NZXNzYWdlLmRhdGEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5vdGlmaWNhdGlvbk1lc3NhZ2Uubm90aWZpY2F0aW9uSWQgfHwgdHlwZW9mIG5vdGlmaWNhdGlvbk1lc3NhZ2Uubm90aWZpY2F0aW9uSWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hhbmRzaGFrZU1lc3NhZ2UobWVzc2FnZTogSGFuZHNoYWtlTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgSGFuZHNoYWtlTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaGFuZHNoYWtlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgSGFuZHNoYWtlTWVzc2FnZTtcbiAgaWYgKGhhbmRzaGFrZU1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuSGFuZHNoYWtlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9NZXNzYWdlVHlwZUNoZWNrcy50cyIsImltcG9ydCB7IFNoZWV0VHlwZSwgWm9uZVZpc2liaWxpdHlUeXBlIH0gZnJvbSAnLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRPYmplY3QgfSBmcm9tICcuLi9EYXNoYm9hcmRPYmplY3QnO1xuaW1wb3J0IHtcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbyxcbiAgU2hlZXRQYXRoLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9Qb2ludCc7XG5pbXBvcnQgeyBTaGVldEltcGwgfSBmcm9tICcuL1NoZWV0SW1wbCc7XG5pbXBvcnQgeyBTaGVldEluZm9JbXBsIH0gZnJvbSAnLi9TaGVldEluZm9JbXBsJztcbmltcG9ydCB7IFpvbmVTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvWm9uZVNlcnZpY2UnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4uL1NpemUnO1xuaW1wb3J0IHsgV29ya3NoZWV0IH0gZnJvbSAnLi4vV29ya3NoZWV0JztcbmltcG9ydCB7IFdvcmtzaGVldEltcGwgfSBmcm9tICcuL1dvcmtzaGVldEltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkSW1wbCBleHRlbmRzIFNoZWV0SW1wbCB7XG4gIHByaXZhdGUgX3dvcmtzaGVldHM6IEFycmF5PENvbnRyYWN0LldvcmtzaGVldD47XG4gIHByaXZhdGUgX29iamVjdHM6IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luZm86IEV4dGVuc2lvbkRhc2hib2FyZEluZm8sIHByaXZhdGUgX3NoZWV0UGF0aDogU2hlZXRQYXRoKSB7XG4gICAgc3VwZXIobmV3IFNoZWV0SW5mb0ltcGwoX2luZm8ubmFtZSwgU2hlZXRUeXBlLkRhc2hib2FyZCwgbmV3IFNpemUoX2luZm8uc2l6ZS5oLCBfaW5mby5zaXplLncpKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldHMoKTogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9iamVjdHMoKTogQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoZGFzaGJvYXJkLCAnZGFzaGJvYXJkJyk7XG5cbiAgICB0aGlzLl93b3Jrc2hlZXRzID0gbmV3IEFycmF5PFdvcmtzaGVldD4oKTtcbiAgICB0aGlzLl9vYmplY3RzID0gbmV3IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD4oKTtcblxuICAgIC8vIFByb2Nlc3MgYWxsIHRoZSB6b25lcyB3aGljaCBhcmUgY29udGFpbmVkIGluIHRoaXMgZGFzaGJvYXJkXG4gICAgZm9yIChjb25zdCB6b25lIG9mIHRoaXMuX2luZm8uem9uZXMpIHtcbiAgICAgIGxldCB3b3Jrc2hlZXQ6IFdvcmtzaGVldCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgICAgY29uc3Qgem9uZVNpemUgPSBuZXcgU2l6ZSh6b25lLmhlaWdodCwgem9uZS53aWR0aCk7XG5cbiAgICAgIGlmICh6b25lLnpvbmVUeXBlID09PSBEYXNoYm9hcmRPYmplY3RUeXBlLldvcmtzaGVldCkge1xuICAgICAgICAvLyB6b25lLnNoZWV0SW5mbyB3YXMgbm90IGluaXRpYWxpemVkIHByaW9yIHRvIGludGVybmFsLWNvbnRyYWN0IDEuNi4wXG4gICAgICAgIGxldCB3b3Jrc2hlZXROYW1lID0gem9uZS5zaGVldEluZm8gPyB6b25lLnNoZWV0SW5mby5uYW1lIDogem9uZS5uYW1lO1xuICAgICAgICBjb25zdCBzaGVldEluZm8gPSBuZXcgU2hlZXRJbmZvSW1wbCh3b3Jrc2hlZXROYW1lLCBTaGVldFR5cGUuV29ya3NoZWV0LCB6b25lU2l6ZSk7XG4gICAgICAgIGNvbnN0IHZpeklkOiBWaXN1YWxJZCA9IHtcbiAgICAgICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWUsXG4gICAgICAgICAgZGFzaGJvYXJkOiB0aGlzLl9pbmZvLm5hbWUsXG4gICAgICAgICAgc3Rvcnlib2FyZDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5Ym9hcmQsXG4gICAgICAgICAgZmxpcGJvYXJkWm9uZUlEOiB0aGlzLl9zaGVldFBhdGguZmxpcGJvYXJkWm9uZUlELFxuICAgICAgICAgIHN0b3J5UG9pbnRJRDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5UG9pbnRJRFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldEltcGwgPSBuZXcgV29ya3NoZWV0SW1wbChzaGVldEluZm8sIHZpeklkLCBkYXNoYm9hcmQpO1xuICAgICAgICB3b3Jrc2hlZXQgPSBuZXcgV29ya3NoZWV0KHdvcmtzaGVldEltcGwpO1xuICAgICAgICB0aGlzLl93b3Jrc2hlZXRzLnB1c2god29ya3NoZWV0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgem9uZVBvaW50ID0gbmV3IFBvaW50KHpvbmUueCwgem9uZS55KTtcblxuICAgICAgY29uc3QgZGFzaGJvYXJkT2JqZWN0ID0gbmV3IERhc2hib2FyZE9iamVjdChcbiAgICAgICAgZGFzaGJvYXJkLFxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGFzaGJvYXJkT2JqZWN0VHlwZS5jb252ZXJ0KHpvbmUuem9uZVR5cGUpLFxuICAgICAgICB6b25lUG9pbnQsXG4gICAgICAgIHpvbmVTaXplLFxuICAgICAgICB3b3Jrc2hlZXQsXG4gICAgICAgIHpvbmUubmFtZSxcbiAgICAgICAgem9uZS5pc0Zsb2F0aW5nIHx8IGZhbHNlLCAgIC8vIGJlZm9yZSAxLjYuMCB3ZSBkaWRuJ3QgaGF2ZSBpc0Zsb2F0aW5nLCBzbyB3ZSBhc3N1bWUgZmFsc2VcbiAgICAgICAgem9uZS5pc1Zpc2libGUgfHwgdHJ1ZSwgICAgICAvLyBiZWZvcmUgMS42LjAgd2UgZGlkbid0IGhhdmUgaXNWaXNpYmxlLCBzbyB3ZSBhc3N1bWUgdHJ1ZVxuICAgICAgICB6b25lLnpvbmVJZFxuICAgICAgKTtcblxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKGRhc2hib2FyZE9iamVjdCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFpvbmVWaXNpYmlsaXR5QXN5bmMoem9uZVZpc2liaWxpdHlNYXA6IE1hcDxudW1iZXIsIFpvbmVWaXNpYmlsaXR5VHlwZT4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB6b25lU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFpvbmVTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5ab25lKTtcblxuICAgIHJldHVybiB6b25lU2VydmljZS5zZXRWaXNpYmlsaXR5QXN5bmMoLypEYXNoYm9hcmQgTmFtZSovIHRoaXMubmFtZSwgdGhpcy5vYmplY3RzLCB6b25lVmlzaWJpbGl0eU1hcCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGFzaGJvYXJkSW1wbC50cyIsImltcG9ydCB7IERhc2hib2FyZE9iamVjdFR5cGUgfSBmcm9tICcuLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZGFzaGJvYXJkIG9iamVjdHMgLSB0aGUgem9uZXMgaW4gYSBkYXNoYm9hcmQuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRPYmplY3QgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmRPYmplY3Qge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQsXG4gICAgcHJpdmF0ZSBfdHlwZTogRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgICBwcml2YXRlIF9wb3NpdGlvbjogQ29udHJhY3QuUG9pbnQsXG4gICAgcHJpdmF0ZSBfc2l6ZTogQ29udHJhY3QuU2l6ZSxcbiAgICBwcml2YXRlIF93b3Jrc2hlZXQ6IENvbnRyYWN0LldvcmtzaGVldCB8IHVuZGVmaW5lZCxcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfaXNGbG9hdGluZzogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pc1Zpc2libGU6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfaWQ6IG51bWJlclxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBEYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcG9zaXRpb24oKTogQ29udHJhY3QuUG9pbnQge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBDb250cmFjdC5TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0KCk6IENvbnRyYWN0LldvcmtzaGVldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0Zsb2F0aW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0Zsb2F0aW5nO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmlzaWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZE9iamVjdC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgUG9pbnQgaW1wbGVtZW50cyBDb250cmFjdC5Qb2ludCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF94OiBudW1iZXIsIHByaXZhdGUgX3k6IG51bWJlcikgeyB9XG5cbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUG9pbnQudHMiLCJpbXBvcnQgeyBTaGVldFR5cGUgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTaGVldFBhdGggfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXRJbmZvSW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfc2hlZXRUeXBlOiBTaGVldFR5cGUsXG4gICAgcHJpdmF0ZSBfc2hlZXRTaXplOiBTaXplXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0U2l6ZSgpOiBTaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hlZXROYW1lOiB0aGlzLm5hbWUsXG4gICAgICBpc0Rhc2hib2FyZDogdGhpcy5zaGVldFR5cGUgPT09IFNoZWV0VHlwZS5EYXNoYm9hcmRcbiAgICAgIC8vIFRPRE8gLSBTdG9yaWVzXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEluZm9JbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBTaXplIGltcGxlbWVudHMgQ29udHJhY3QuU2l6ZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9oZWlnaHQ6IG51bWJlciwgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcikgeyB9XG5cbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2l6ZS50cyIsImltcG9ydCB7IEZpbHRlclVwZGF0ZVR5cGUsIFNlbGVjdGlvblVwZGF0ZVR5cGUgfSBmcm9tICcuLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2hlZXQgfSBmcm9tICcuL1NoZWV0JztcbmltcG9ydCB7IFdvcmtzaGVldEltcGwgfSBmcm9tICcuL0ltcGwvV29ya3NoZWV0SW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXQgZXh0ZW5kcyBTaGVldCBpbXBsZW1lbnRzIENvbnRyYWN0LldvcmtzaGVldCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3Jrc2hlZXRJbXBsOiBXb3Jrc2hlZXRJbXBsKSB7XG4gICAgc3VwZXIoX3dvcmtzaGVldEltcGwpO1xuXG4gICAgLy8gQ2FsbCB0byBpbml0aWFsaXplIGV2ZW50cyBhbmQgdGhlbiBjYWxsIGRvd24gdG8gdGhlIGV2ZW50IGxpc3RlbmVyIG1hbmFnZXIgdG8gaGFuZGxlIHRoaW5nc1xuICAgIHRoaXMuX3dvcmtzaGVldEltcGwuaW5pdGlhbGl6ZUV2ZW50cyh0aGlzKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnREYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5wYXJlbnREYXNoYm9hcmQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICBmaWVsZE5hbWU6IHN0cmluZywgdmFsdWVzOiBBcnJheTxzdHJpbmc+LCB1cGRhdGVUeXBlOiBGaWx0ZXJVcGRhdGVUeXBlLCBvcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5hcHBseUZpbHRlckFzeW5jKGZpZWxkTmFtZSwgdmFsdWVzLCB1cGRhdGVUeXBlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5EYXRhU291cmNlPj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldERhdGFTb3VyY2VzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0RmlsdGVyc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRTdW1tYXJ5RGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SURBc3luYyhtYXJrc0luZm86IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPiwgdXBkYXRlVHlwZTogU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlJZEFzeW5jKG1hcmtzSW5mbywgdXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWE+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IFNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5zZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SWRBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Xb3Jrc2hlZXQudHMiLCJpbXBvcnQgeyBTZWxlY3Rpb25VcGRhdGVUeXBlLCBUYWJsZWF1RXZlbnRUeXBlLCBGaWx0ZXJVcGRhdGVUeXBlLCBGaWx0ZXJOdWxsT3B0aW9uIH0gZnJvbSAnLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQge1xuICBEYXRhU2NoZW1hLFxuICBEYXRhU291cmNlIGFzIERhdGFTb3VyY2VJbmZvLFxuICBGaWx0ZXJFdmVudCwgTm90aWZpY2F0aW9uSWQsXG4gIFZpc3VhbElkLFxuICBXb3Jrc2hlZXREYXRhU291cmNlSW5mb1xufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vRGF0YVNvdXJjZSc7XG5pbXBvcnQgeyBXb3Jrc2hlZXQgfSBmcm9tICcuLi9Xb3Jrc2hlZXQnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4vRGF0YVNvdXJjZUltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9TaGVldEltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbmZvSW1wbCB9IGZyb20gJy4vU2hlZXRJbmZvSW1wbCc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsIH0gZnJvbSAnLi9TaW5nbGVFdmVudE1hbmFnZXJJbXBsJztcblxuaW1wb3J0IHsgRmlsdGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudCc7XG5pbXBvcnQgeyBNYXJrc1NlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50JztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4uL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UsIEdldERhdGFUeXBlIH0gZnJvbSAnLi4vU2VydmljZXMvR2V0RGF0YVNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1NlbGVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuY29uc3QgdmlzdWFsSWRzQXJlRXF1YWwgPSBmdW5jdGlvbiAoYTogVmlzdWFsSWQsIGI6IFZpc3VhbElkKTogYm9vbGVhbiB7XG4gIHJldHVybiBhICYmIGIgJiZcbiAgICBhLndvcmtzaGVldCA9PT0gYi53b3Jrc2hlZXQgJiZcbiAgICBhLmRhc2hib2FyZCA9PT0gYi5kYXNoYm9hcmQgJiZcbiAgICBhLnN0b3J5Ym9hcmQgPT09IGIuc3Rvcnlib2FyZCAmJlxuICAgIGEuc3RvcnlQb2ludElEID09PSBiLnN0b3J5UG9pbnRJRDtcbn07XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXRJbXBsIGV4dGVuZHMgU2hlZXRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNoZWV0SW5mb0ltcGw6IFNoZWV0SW5mb0ltcGwsXG4gICAgcHJpdmF0ZSBfdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIHByaXZhdGUgX3BhcmVudERhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKSB7XG4gICAgc3VwZXIoc2hlZXRJbmZvSW1wbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudERhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnREYXNoYm9hcmQ7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCBnb2VzIHRocm91Z2ggYW5kIHJlZ2lzdGVycyBlYWNoIGV2ZW50IHR5cGUgdGhpcyBpbXBsIGtub3dzIGFib3V0XG4gICAqIHdpdGggdGhlIE5vdGlmaWNhdGlvblNlcnZpY2UuIEl0IHJldHVybnMgYW4gYXJyYXkgb2YgU2luZ2xlRXZlbnRNYW5hZ2VyIG9iamVjdHMgd2hpY2hcbiAgICogY2FuIHRoZW4gYmUgcGFzc2VkIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIHRvIGhhbmRsZSB1c2VyIHJlZ2lzdHJhdGlvbiAvIHVucmVnaXN0cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1dvcmtzaGVldH0gd29ya3NoZWV0IFRoZSB3b3Jrc2hlZXQgb2JqZWN0IHdoaWNoIHdpbGwgYmUgaW5jbHVkZWQgd2l0aCB0aGUgZXZlbnQgbm90aWZpY2F0aW9uc1xuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUV2ZW50cyh3b3Jrc2hlZXQ6IFdvcmtzaGVldCk6IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPigpO1xuICAgIGxldCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIHRoaXMgc2VydmljZSByZWdpc3RlcmVkLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIGV2ZW50IG1hbmFnZXJzIHdlJ2xsIG5lZWQgKG9uZSBmb3IgZWFjaCBldmVudCB0eXBlKVxuICAgIGNvbnN0IG1hcmtzRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxNYXJrc1NlbGVjdGVkRXZlbnQ+KFRhYmxlYXVFdmVudFR5cGUuTWFya1NlbGVjdGlvbkNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLlNlbGVjdGVkTWFya3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIGNvbnN0IHZpc3VhbElkID0gbW9kZWwgYXMgVmlzdWFsSWQ7XG4gICAgICByZXR1cm4gdmlzdWFsSWRzQXJlRXF1YWwodmlzdWFsSWQsIHRoaXMudmlzdWFsSWQpO1xuICAgIH0sICh2aXo6IFZpc3VhbElkKSA9PiB7XG4gICAgICBtYXJrc0V2ZW50LnRyaWdnZXJFdmVudCgoKSA9PiBuZXcgTWFya3NTZWxlY3RlZEV2ZW50KHdvcmtzaGVldCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdGVyRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxGaWx0ZXJDaGFuZ2VkRXZlbnQ+KFRhYmxlYXVFdmVudFR5cGUuRmlsdGVyQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuRmlsdGVyQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJFdmVudFJlc3BvbnNlID0gbW9kZWwgYXMgRmlsdGVyRXZlbnQ7XG4gICAgICByZXR1cm4gdGhpcy52aXN1YWxJZC53b3Jrc2hlZXQgPT09IGZpbHRlckV2ZW50UmVzcG9uc2UudmlzdWFsSWQud29ya3NoZWV0O1xuICAgIH0sIChldmVudDogRmlsdGVyRXZlbnQpID0+IHtcbiAgICAgIGZpbHRlckV2ZW50LnRyaWdnZXJFdmVudCgoKSA9PiBuZXcgRmlsdGVyQ2hhbmdlZEV2ZW50KHdvcmtzaGVldCwgZXZlbnQuZmllbGROYW1lKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2gobWFya3NFdmVudCk7XG4gICAgcmVzdWx0cy5wdXNoKGZpbHRlckV2ZW50KTtcblxuICAgIC8vIFRPRE8gLSBvdGhlciBldmVudCB0eXBlc1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZpc3VhbElkKCk6IFZpc3VhbElkIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzdWFsSWQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICBmaWVsZE5hbWU6IHN0cmluZywgdmFsdWVzOiBBcnJheTxzdHJpbmc+LCB1cGRhdGVUeXBlOiBGaWx0ZXJVcGRhdGVUeXBlLCBvcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPEZpbHRlclVwZGF0ZVR5cGU+KHVwZGF0ZVR5cGUsIEZpbHRlclVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmFwcGx5RmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lLCB2YWx1ZXMsIHVwZGF0ZVR5cGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5UmFuZ2VGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuUmFuZ2VGaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGZpZWxkTmFtZSwgJ2ZpZWxkTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoZmlsdGVyT3B0aW9ucywgJ2ZpbHRlck9wdGlvbnMnKTtcblxuICAgIGlmIChmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24pIHtcbiAgICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8RmlsdGVyTnVsbE9wdGlvbj4oZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uLCBGaWx0ZXJOdWxsT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRXJyb3JIZWxwZXJzLnZlcmlmeVJhbmdlUGFyYW1UeXBlKGZpbHRlck9wdGlvbnMubWluLCBmaWx0ZXJPcHRpb25zLm1heCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmFwcGx5UmFuZ2VGaWx0ZXJBc3luYyh0aGlzLnZpc3VhbElkLCBmaWVsZE5hbWUsIGZpbHRlck9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoZmllbGROYW1lLCAnZmllbGROYW1lJyk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuY2xlYXJGaWx0ZXJBc3luYyh0aGlzLnZpc3VhbElkLCBmaWVsZE5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5EYXRhU291cmNlPj4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldERhdGFTb3VyY2VzQXN5bmModGhpcy52aXN1YWxJZCkudGhlbjxBcnJheTxDb250cmFjdC5EYXRhU291cmNlPj4ocmVzdWx0ID0+IHtcbiAgICAgIGNvbnN0IGRhdGFTY2hlbWE6IERhdGFTY2hlbWEgPSByZXN1bHQgYXMgRGF0YVNjaGVtYTtcbiAgICAgIGNvbnN0IHdvcmtzaGVldERhdGFTb3VyY2VJbmZvOiBXb3Jrc2hlZXREYXRhU291cmNlSW5mbyA9IGRhdGFTY2hlbWEud29ya3NoZWV0RGF0YVNjaGVtYU1hcFt0aGlzLm5hbWVdO1xuXG4gICAgICBsZXQgZGF0YVNvdXJjZXM6IEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+ID0gW107XG5cbiAgICAgIC8vIEZpcnN0LCBhZGQgdGhlIHByaW1hcnkgZGF0YXNvdXJjZS4gIEJ5IGNvbnZlbnRpb24sIGl0IGNvbWVzIGZpcnN0IGluIHRoZSByZXR1cm5lZCBhcnJheS5cbiAgICAgIGxldCBwcmltYXJ5SWQ6IHN0cmluZyA9IHdvcmtzaGVldERhdGFTb3VyY2VJbmZvLnByaW1hcnlEYXRhU291cmNlO1xuICAgICAgZGF0YVNvdXJjZXMucHVzaCh0aGlzLmNyZWF0ZURhdGFTb3VyY2VGcm9tSW5mbyhkYXRhU2NoZW1hLmRhdGFTb3VyY2VzW3ByaW1hcnlJZF0pKTtcblxuICAgICAgLy8gVGhlbiwgbG9vcCB0aHJvdWdoIGFueSBzZWNvbmRhcnkgZGF0YSBzb3VyY2VzIGFuZCBhZGQgdGhlbS5cbiAgICAgIGZvciAobGV0IHNlY29uZGFyeUlkIG9mIHdvcmtzaGVldERhdGFTb3VyY2VJbmZvLnJlZmVyZW5jZWREYXRhU291cmNlTGlzdCkge1xuICAgICAgICBpZiAoc2Vjb25kYXJ5SWQgIT09IHByaW1hcnlJZCkge1xuICAgICAgICAgIGRhdGFTb3VyY2VzLnB1c2godGhpcy5jcmVhdGVEYXRhU291cmNlRnJvbUluZm8oZGF0YVNjaGVtYS5kYXRhU291cmNlc1tzZWNvbmRhcnlJZF0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVNvdXJjZXM7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRmlsdGVyPj4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRGaWx0ZXJzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIGdldEhpZ2hsaWdodGVkTWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldEhpZ2hsaWdodGVkTWFya3NBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdW1tYXJ5RGF0YUFzeW5jKG9wdGlvbnM6IENvbnRyYWN0LkdldFN1bW1hcnlEYXRhT3B0aW9ucyk6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICByZXR1cm4gc2VydmljZS5nZXRVbmRlcmx5aW5nRGF0YUFzeW5jKFxuICAgICAgdGhpcy52aXN1YWxJZCwgR2V0RGF0YVR5cGUuU3VtbWFyeSwgISFvcHRpb25zLmlnbm9yZUFsaWFzZXMsICEhb3B0aW9ucy5pZ25vcmVTZWxlY3Rpb24sIHRydWUsIDApO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0VW5kZXJseWluZ0RhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRVbmRlcmx5aW5nRGF0YUFzeW5jKFxuICAgICAgdGhpcy52aXN1YWxJZCxcbiAgICAgIEdldERhdGFUeXBlLlVuZGVybHlpbmcsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcyxcbiAgICAgICEhb3B0aW9ucy5pZ25vcmVTZWxlY3Rpb24sXG4gICAgICAhIW9wdGlvbnMuaW5jbHVkZUFsbENvbHVtbnMsXG4gICAgICBvcHRpb25zLm1heFJvd3MgfHwgMCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNlbGVjdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5TZWxlY3Rpb24pO1xuICAgIHJldHVybiBzZXJ2aWNlLmNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBTZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZWxlY3Rpb25zLCAnZmllbGROYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxTZWxlY3Rpb25VcGRhdGVUeXBlPihzZWxlY3Rpb25VcGRhdGVUeXBlLCBTZWxlY3Rpb25VcGRhdGVUeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZWxlY3Rpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uKTtcbiAgICByZXR1cm4gc2VydmljZS5zZWxlY3RNYXJrc0J5VmFsdWVBc3luYyh0aGlzLnZpc3VhbElkLCBzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SWRBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2VsZWN0aW9ucywgJ2ZpZWxkTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8U2VsZWN0aW9uVXBkYXRlVHlwZT4oc2VsZWN0aW9uVXBkYXRlVHlwZSwgU2VsZWN0aW9uVXBkYXRlVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2VsZWN0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLlNlbGVjdGlvbik7XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2VsZWN0TWFya3NCeUlkQXN5bmModGhpcy52aXN1YWxJZCwgc2VsZWN0aW9ucywgc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZURhdGFTb3VyY2VGcm9tSW5mbyhkYXRhU291cmNlSW5mbzogRGF0YVNvdXJjZUluZm8pOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICBjb25zdCBkYXRhU291cmNlSW1wbCA9IG5ldyBEYXRhU291cmNlSW1wbChkYXRhU291cmNlSW5mbyk7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IG5ldyBEYXRhU291cmNlKGRhdGFTb3VyY2VJbXBsKTtcbiAgICBkYXRhU291cmNlSW1wbC5pbml0aWFsaXplV2l0aFB1YmxpY0ludGVyZmFjZXMoZGF0YVNvdXJjZSk7XG4gICAgcmV0dXJuIGRhdGFTb3VyY2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvV29ya3NoZWV0SW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeSB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgYSBjb25uZWN0aW9uIHN1bW1hcnkuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uU3VtbWFyeSBpbXBsZW1lbnRzIENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Nvbm5lY3Rpb25JbmZvOiBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5KSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkluZm8uaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNlcnZlclVSSSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5zZXJ2ZXJVUkk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkluZm8udHlwZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ29ubmVjdGlvblN1bW1hcnkudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFRhYmxlSW5mbyB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgYSB0YWJsZSBzdW1tYXJ5LlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpcyBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgVGFibGVTdW1tYXJ5IGltcGxlbWVudHMgQ29udHJhY3QuVGFibGVTdW1tYXJ5IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYmxlSW5mbzogVGFibGVJbmZvKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5jb25uZWN0aW9uSWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1c3RvbVNRTCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8uY3VzdG9tU1FMO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZVN1bW1hcnkudHMiLCJpbXBvcnQgeyBUYWJsZWF1RXZlbnRUeXBlLCBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVXb3Jrc2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5GaWx0ZXJDaGFuZ2VkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3Iod29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQsIHByaXZhdGUgX2ZpZWxkTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoVGFibGVhdUV2ZW50VHlwZS5GaWx0ZXJDaGFuZ2VkLCB3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlckFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuRmlsdGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldC5nZXRGaWx0ZXJzQXN5bmMoKS50aGVuPENvbnRyYWN0LkZpbHRlcj4oZmlsdGVycyA9PiB7XG4gICAgICAvLyBUT0RPOiBGaWx0ZXJpbmcgb2YgdGhlIGZpbHRlcnMgc2hvdWxkIGV2ZW50dWFsbHkgYmUgZG9uZSBwbGF0Zm9ybSBzaWRlLlxuICAgICAgY29uc3QgZXZlbnRlZEZpbHRlciA9IGZpbHRlcnMuZmluZCgoZmlsdGVyKSA9PiAoZmlsdGVyLmZpZWxkTmFtZSA9PT0gdGhpcy5fZmllbGROYW1lKSk7XG5cbiAgICAgIGlmICghZXZlbnRlZEZpbHRlcikge1xuICAgICAgICAvLyBXZSBzaG91bGRuJ3QgaGl0IHRoaXMgdW5sZXNzIHRoZSBmaWx0ZXIgd2FzIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0XG4gICAgICAgIC8vIGFmdGVyIHRoZSBldmVudCB3YXMgcmFpc2VkLlxuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuTWlzc2luZ0ZpbHRlciwgYGNhbm5vdCBmaW5kIGZpbHRlcjogJHt0aGlzLl9maWVsZE5hbWV9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudGVkRmlsdGVyO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvRmlsdGVyQ2hhbmdlZEV2ZW50LnRzIiwiaW1wb3J0IHsgVGFibGVhdUV2ZW50VHlwZSB9IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVXb3Jrc2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBNYXJrc1NlbGVjdGVkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5NYXJrc1NlbGVjdGVkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3Iod29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQpIHtcbiAgICBzdXBlcihUYWJsZWF1RXZlbnRUeXBlLk1hcmtTZWxlY3Rpb25DaGFuZ2VkLCB3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy53b3Jrc2hlZXQuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHtcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgQ3Jvc3NGcmFtZU1lc3NlbmdlcixcbiAgTUVTU0FHSU5HX1ZFUlNJT04gYXMgQXBpTWVzc2FnaW5nVmVyc2lvbixcbiAgSW5pdGlhbGl6YXRpb25PcHRpb25zLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBDcm9zc0ZyYW1lRGlzcGF0Y2hlciB9IGZyb20gJy4vQ3Jvc3NGcmFtZURpc3BhdGNoZXInO1xuXG4vLyBDaGVja3MgdG8gc2VlIGlmIHdlIGFyZSBydW5uaW5nIGluIGFuIGlmcmFtZSBjdXJyZW50bHk6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMjYwNzYvODgyMTE1M1xuZnVuY3Rpb24gaW5JZnJhbWUodGhpc1dpbmRvdzogV2luZG93KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHRoaXNXaW5kb3cuc2VsZiAhPT0gdGhpc1dpbmRvdy5wYXJlbnQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGJvb3RzdHJhcCB0aGUgZXh0ZW5zaW9uIHdpdGggYSBjcm9zcy1mcmFtZSBwYXJlbnQgd2hlcmUgVGFibGVhdSBpcyBydW5uaW5nXG4gKlxuICogQHBhcmFtIHRoaXNXaW5kb3cgVGhlIHdpbmRvdyB3aGljaCB3ZSBhcmUgcnVubmluZyBpbiAoaW5qZWN0ZWQgZm9yIHVuaXQgdGVzdGluZyBwdXJwb3NlcylcbiAqIEBwYXJhbSBpbnRlcm5hbENvbnRyYWN0VmVyc2lvbiBUaGUgdmVyc2lvbiBudW1iZXIgb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IHdlIGFyZSB1c2luZ1xuICogQHJldHVybnMgQSBwcm9taXNlIHdoaWNoIGlzIGRvaW5nIHRoZSBhY3R1YWwgYm9vdHN0cmFwcGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwKFxuICB0aGlzV2luZG93OiBXaW5kb3csIGludGVybmFsQ29udHJhY3RWZXJzaW9uOiBDb250cmFjdC5WZXJzaW9uTnVtYmVyLCBvcHRpb25zOiBJbml0aWFsaXphdGlvbk9wdGlvbnMpXG4gIDogUHJvbWlzZTxDb250cmFjdC5JbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlPENvbnRyYWN0LkludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgIGxldCBwYXJlbnQ6IFdpbmRvdztcblxuICAgIC8vIE5vcm1hbGx5LCB3ZSBhcmUgcnVubmluZyBpbnNpZGUgYW4gaWZyYW1lLiAgVGhlIGV4Y2VwdGlvbiB0byB0aGlzIGlzXG4gICAgLy8gd2hlbiB3ZSBhcmUgcnVubmluZyBhcyBhbiBleHRlbnNpb24gaW5zaWRlIGEgZGlhbG9nIGFzIHBhcnQgb2YgdGhlIFVJTmFtZXNwYWNlXG4gICAgLy8gZnVuY3Rpb25hbGl0eS4gIEluIHRoYXQgY2FzZSwgd2Ugd2FudCB0aGUgb3BlbmVyIG9mIHRoaXMgd2luZG93IHJhdGhlciB0aGFuIHRoZSBwYXJlbnQuXG4gICAgaWYgKCFpbklmcmFtZSh0aGlzV2luZG93KSkge1xuICAgICAgcGFyZW50ID0gdGhpc1dpbmRvdy5vcGVuZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IHRoaXNXaW5kb3cucGFyZW50O1xuICAgIH1cblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICByZWplY3QoJ1RoaXMgZXh0ZW5zaW9uIGlzIG5vdCBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUsIGRlc2t0b3AsIG9yIHBvcHVwIHdpbmRvdy4gSW5pdGlhbGl6YXRpb24gZmFpbGVkLicpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgbWVzc2VuZ2VyIHdoaWNoIHdpbGwgZG8gaGUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoaXMgd2luZG93IGFuZCBvdXIgcGFyZW50XG4gICAgLy8gU2luY2Ugd2UgZG9uJ3Qga25vdyB3aGVyZSB3ZSBhcmUgcnVubmluZyB5ZXQsIHdlIGhhdmUgdG8gbWFrZSB0aGlzIGluaXRpYWwgb3JpZ2luICcqJy4gT25jZVxuICAgIC8vIHdlIGhhdmUgc3VjY2Vzc2Z1bGx5IGluaXRpYWxpemVkIG91ciBleHRlbnNpb24sIHdlIHdpbGwgbGltaXQgd2hlcmUgd2Ugc2VuZCBtZXNzYWdlc1xuICAgIGNvbnN0IG1lc3NlbmdlciA9IG5ldyBDcm9zc0ZyYW1lTWVzc2VuZ2VyKHRoaXNXaW5kb3csIHBhcmVudCwgJyonKTtcblxuICAgIC8vIFByZXBhcmUgdG8gc2VuZCBhbiBpbml0aWFsaXphdGlvbiBtZXNzYWdlIHRvIHRoZSBwYXJlbnQgZnJhbWVcbiAgICBjb25zdCBpbml0aWFsaXphdGlvbk1lc3NhZ2UgPVxuICAgICAgbWVzc2VuZ2VyLnByZXBhcmVJbml0aWFsaXphdGlvbk1lc3NhZ2UoaW50ZXJuYWxDb250cmFjdFZlcnNpb24sIEFwaU1lc3NhZ2luZ1ZlcnNpb24sIG9wdGlvbnMpO1xuXG4gICAgLy8gV2hlbiB3ZSByZWNlaXZlIGEgcmVzcG9uc2UgYmFjayBmcm9tIHRoZSBwYXJlbnQsIHdlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgZ3VpZHMgbWF0Y2ggYW5kIHRoZW4gd2Uga25vd1xuICAgIC8vIHRoYXQgdGhlIHBhcmVudCBpcyBhd2FyZSBvZiB1cyBhbmQgd2UgY2FuIHN0YXJ0IGNvbW11bmljYXRpbmdcbiAgICBtZXNzZW5nZXIuc2V0Q29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIoZnVuY3Rpb24gKG1zZzogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSk6IHZvaWQge1xuXG4gICAgICAvLyBWZXJpZnkgd2UgYXJlIGdldHRpbmcgYSByZXNwb25zZSBmcm9tIG91ciBpbml0aWFsaXplIG1lc3NhZ2VcbiAgICAgIGlmIChtc2cuY29tbWFuZEd1aWQgPT09IGluaXRpYWxpemF0aW9uTWVzc2FnZS5tZXNzYWdlR3VpZCkge1xuXG4gICAgICAgIC8vIFRoZSB2ZXJzaW9uaW5nIG9mIHRoZSBkaXNwYXRjaGVyIGhhcHBlbnMgb24gdGhlIG90aGVyIHNpZGUgb2Ygb3VyIGZyYW1lLCBhbmRcbiAgICAgICAgLy8gaW4gYSB3cmFwcGVyIG9uIHRoaXMgc2lkZS4gVGhpcyBvbmUgZG9lc24ndCBoYXZlIGFueSB2ZXJzaW9uIGtub3dsZWRnZS5cbiAgICAgICAgY29uc3QgZGlzcGF0Y2hlckZhY3RvcnkgPSAoKSA9PiBuZXcgQ3Jvc3NGcmFtZURpc3BhdGNoZXIobWVzc2VuZ2VyKTtcbiAgICAgICAgcmVzb2x2ZShkaXNwYXRjaGVyRmFjdG9yeSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBOb3cgdGhhdCBvdXIgaGFuZGxlcnMgYXJlIHJlYWR5LCBzdGFydCBsaXN0ZW5pbmcgYW5kIHNlbmQgb3VyIGluaXRpYWxpemF0aW9uIG1lc3NhZ2VcbiAgICBtZXNzZW5nZXIuc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICBpbml0aWFsaXphdGlvbk1lc3NhZ2Uuc2VuZCgpO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsImltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeGVjdXRlUmVzcG9uc2UsXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlcixcbiAgTW9kZWwsXG4gIE5vdGlmaWNhdGlvbkhhbmRsZXIsXG4gIFZlcmJJZCxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIE1lc3NlbmdlciwgTm90aWZpY2F0aW9uTWVzc2FnZSB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIGludGVyZmFjZSB3aGljaCBmdW5jdGlvbnMgYnkgcGFzc2luZyBtZXNzYWdlc1xuICogYWNyb3NzIGEgZnJhbWUgYm91bmRhcnkuIFRoaXMgaXMgdXN1YWxseSBiZXR3ZWVuIHRoZSBjb2RlIHdoZXJlIG91ciBqYXZzY3JpcHQgbGlicmFyeSBoYXMgYmVlbiBpbmNsdWRlZFxuICogYnkgYSAzcmQgcGFydHkgZGV2IGFuZCBhbm90aGVyIGZyYW1lIHdoZXJlIFRhYmxlYXUgc2VydmVyIGhhcyBjb250ZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgaW1wbGVtZW50cyBJbnRlcm5hbEFwaURpc3BhdGNoZXIge1xuXG4gIC8vIENvbGxlY3Rpb24gb2YgcGVuZGluZyBwcm9taXNlcyB3aGljaCBhcmUgd2FpdGluZyB0byBiZSByZXNvbHZlZC4gV2hlbiB3ZSByZWNlaXZlIGEgcmVzcG9uc2UgYmFjayBmcm9tIHRoZSBvdGhlciBmcmFtZSxcbiAgLy8gdGhlc2UgcHJvbWlzZXMgY2FuIGJlIGVpdGhlciByZXNvbHZlZCBvciByZWplY3RlZFxuICBwcml2YXRlIF9wZW5kaW5nUHJvbWlzZXM6XG4gICAgeyBbbWVzc2FnZUd1aWQ6IHN0cmluZ106IHsgcmVzb2x2ZTogKHJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpID0+IHZvaWQsIHJlamVjdDogKGVycm9yOiBNb2RlbCkgPT4gdm9pZCB9IH0gPSB7fTtcblxuICAvLyBUaGUgY29sbGVjdGlvbiBvZiBub3RpZmljYXRpb24gaGFuZGxlcnMgd2hpY2ggaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uSGFuZGxlcnM6IEFycmF5PE5vdGlmaWNhdGlvbkhhbmRsZXI+ID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgd2hpY2ggd2lsbCB1c2UgdGhlIGdpdmVuIG1lc3NlbmdlciB0byBjb21tdW5pY2F0ZVxuICAgKiBAcGFyYW0gX21lc3NlbmdlciBhbiBpbnN0YW50aWF0ZWQgYW5kIGxpc3RlbmluZyBtZXNzZW5nZXIgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2VuZ2VyOiBNZXNzZW5nZXIpIHtcbiAgICBpZiAoIXRoaXMuX21lc3Nlbmdlcikge1xuICAgICAgdGhyb3cgJ01pc3NpbmcgbWVzc2VuZ2VyIG9iamVjdCc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIG91ciBtZXNzYWdlIGhhbmRsZXJzLiBXZSBvbmx5IGNhcmUgYWJvdXQgaW5jb21pbmcgbm90aWZpY2F0aW9ucyBhbmQgY29tbWFuZCByZXNwb25zZXNcbiAgICB0aGlzLl9tZXNzZW5nZXIuc2V0Q29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIodGhpcy5vbkNvbW1hbmRSZXNwb25zZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9tZXNzZW5nZXIuc2V0Tm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIodGhpcy5vbk5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8vLy8vLyBTdGFydCBJbnRlcm5hbEFwaURpc3BhdGNoZXIgaW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgZXhlY3V0ZSh2ZXJiOiBWZXJiSWQsIHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcbiAgICAvLyBUbyBleGVjdXRlIGEgdmVyYiwgd2UgZmlyc3QgcHJlcGFyZSBhIGNvbW1hbmQgbWVzc2FnZSBhbmQgdGhlbiBkZWZpbmUgYSBwcm9taXNlLlxuICAgIGNvbnN0IHByZXBhcmVkTWVzc2FnZSA9IHRoaXMuX21lc3Nlbmdlci5wcmVwYXJlQ29tbWFuZE1lc3NhZ2UodmVyYiwgcGFyYW1ldGVycyk7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvLyBTYXZlIG9mZiB0aGUgcGVuZGluZyBwcm9taXNlIGJ5IHRoZSBtZXNzYWdlR3VpZCB3ZSBhcmUgYWJvdXQgdG8gc2VuZC4gV2hlbiBhIHJlc3BvbnNlIGlzXG4gICAgICAvLyByZWNlaXZlZCwgd2UnbGwgYmUgYWJsZSB0byByZXNvbHZlIHRoaXMgcHJvbWlzZSB3aXRoIHRoZSByZXN1bHRcbiAgICAgIHRoaXMuX3BlbmRpbmdQcm9taXNlc1twcmVwYXJlZE1lc3NhZ2UubWVzc2FnZUd1aWRdID0geyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9O1xuICAgIH0pO1xuXG4gICAgLy8gQWN0dWFsbHkgc2VuZCB0aGUgbWVzc2FnZSBhbmQgcmV0dXJuIHRoZSBwcm9taXNlXG4gICAgcHJlcGFyZWRNZXNzYWdlLnNlbmQoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzID0gdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XG4gIH1cblxuICAvLy8vLy8gRW5kIEludGVybmFsQXBpRGlzcGF0Y2hlciBpbXBsZW1lbnRhdGlvblxuXG4gIHByaXZhdGUgb25Db21tYW5kUmVzcG9uc2UocmVzcG9uc2U6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UpOiB2b2lkIHtcbiAgICAvLyBXZSBnb3QgYSBjb21tYW5kIHJlc3BvbnNlLCBsb29rIHRocm91Z2ggdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmVcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcGVuZGluZ1Byb21pc2VzKS5pbmRleE9mKHJlc3BvbnNlLmNvbW1hbmRHdWlkKSA8IDApIHtcbiAgICAgIHJldHVybjsgLy8gV2UgZG9uJ3QgaGF2ZSBhbnkgcmVmZXJlbmNlIHRvIHRoaXMgY29tbWFuZCwganVzdCByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwZW5kaW5nUHJvbWlzZSA9IHRoaXMuX3BlbmRpbmdQcm9taXNlc1tyZXNwb25zZS5jb21tYW5kR3VpZF07XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGVycm9yIGRlZmluZWQsIHJlamVjdCB0aGUgcHJvbWlzZVxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgcGVuZGluZ1Byb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGRhdGEgZGVmaW5lZCwgcmVzb2x2ZSB0aGUgcHJvbWlzZVxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICBwZW5kaW5nUHJvbWlzZS5yZXNvbHZlKHsgcmVzdWx0OiByZXNwb25zZS5kYXRhIH0pO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIG91ciBwZW5kaW5nIHByb21pc2VzIG9iamVjdFxuICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUHJvbWlzZXNbcmVzcG9uc2UuY29tbWFuZEd1aWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25NZXNzYWdlOiBOb3RpZmljYXRpb25NZXNzYWdlKTogdm9pZCB7XG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIG5vdGlmaWNhdGlvbiBoYW5kbGVyIHdlIGhhdmUgcmVnaXN0ZXJlZCBhbmQgbGV0IHRoZW0ga25vdyBhIG5vdGlmaWNhdGlvbiBjYW1lIGluXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBoYW5kbGVyKHsgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbk1lc3NhZ2Uubm90aWZpY2F0aW9uSWQsIGRhdGE6IG5vdGlmaWNhdGlvbk1lc3NhZ2UuZGF0YSB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoaXMuIFdyYXAgaW4gdHJ5L2NhdGNoIHNvIGlmIG9uZSBoYW5kbGVyIGVycm9ycywgdGhlIG90aGVyIHN0aWxsIGdldCB0aGUgbWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lRGlzcGF0Y2hlci50cyIsImltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSB9IGZyb20gJy4vU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvRmlsdGVyU2VydmljZUltcGwnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBJbnRlcm5hbEFwaURpc3BhdGNoZXIgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwnO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBab25lU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvWm9uZVNlcnZpY2VJbXBsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IERhdGFTb3VyY2VTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEdldERhdGFTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEZpbHRlclNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgTm90aWZpY2F0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBQYXJhbWV0ZXJzU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZWxlY3Rpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFpvbmVTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcblxuaW1wb3J0IHtcbiAgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeSxcbiAgRGF0YVNjaGVtYSxcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIFBhcmFtZXRlcklkLFxuICBUYWJsZUluZm8sXG4gIFRhYmxlSW5mb3MsXG4gIFZlcmJJZCxcbiAgVmlzdWFsSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSB9IGZyb20gJy4uL0RhdGFTb3VyY2VTZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0ICogYXMgSW50ZXJuYWxDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL0ZpZWxkJztcbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4uLy4uL0ltcGwvRmllbGRJbXBsJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL0RhdGFTb3VyY2UnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuLi8uLi9JbXBsL0RhdGFTb3VyY2VJbXBsJztcblxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIERhdGFTb3VyY2VTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaEFzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkLFxuICAgICAgW1BhcmFtZXRlcklkLkRlbHRhVGltZU1zXTogMCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TaG91bGRSZWZyZXNoRFNdOiB0cnVlXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlJlZnJlc2hEYXRhU291cmNlLCBwYXJhbWV0ZXJzKS50aGVuPHZvaWQ+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVUYWJsZXNBc3luYyhkYXRhU291cmNlSWQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8VGFibGVJbmZvPj4ge1xuICAgIGNvbnN0IGpvaW5QYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCB9O1xuXG4gICAgLy8gR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFibGVzIHVzZWQgYnkgdGhpcyBjb25uZWN0aW9uXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0QWN0aXZlVGFibGVzLCBqb2luUGFyYW1ldGVycykudGhlbjxBcnJheTxUYWJsZUluZm8+Pihqb2luUmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgdGFibGVJbmZvcyA9IGpvaW5SZXNwb25zZS5yZXN1bHQgYXMgVGFibGVJbmZvcztcblxuICAgICAgLy8gZ2V0QWN0aXZlVGFibGVzIGlzIHVuc3VwcG9ydGVkIGZvciBjdWJlcyBhbmQgR0EuIFdlIGRvIG5vdCBoYXZlIGEgY29ubmVjdGlvbiB0eXBlIHByb3BlcnR5XG4gICAgICAvLyBhdmFpbGFibGUgZnJvbSB0aGUgcGxhdGZvcm0gKGludGVudGlvbmFsbHksIHRvIHJlZHVjZSBjb2RlIGNodXJuIGFzIG5ldyBjb25uZWN0aW9ucyBhcmUgYWRkZWQpLlxuICAgICAgLy8gSW5zdGVhZCxqdXN0IGNoZWNrIGlmIGFueSB0YWJsZXMgYXJlIHJldHVybmVkLiBUaGlzIGFycmF5IHdpbGwgYmUgZW1wdHkgZm9yIGFueSBub24tdGFibGUgYmFzZWQgZGF0YXNvdXJjZS5cbiAgICAgIGlmICh0YWJsZUluZm9zLnRhYmxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLlVuc3VwcG9ydGVkTWV0aG9kRm9yRGF0YVNvdXJjZVR5cGUsXG4gICAgICAgICAgYGdldEFjdGl2ZVRhYmxlcyBpcyBub3Qgc3VwcG9ydGVkIGZvcjogJHtkYXRhU291cmNlSWR9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YWJsZUluZm9zLnRhYmxlcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhU291cmNlc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8RGF0YVNjaGVtYT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldERhdGFTb3VyY2VzLCBwYXJhbWV0ZXJzKS50aGVuPERhdGFTY2hlbWE+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRhdGFTY2hlbWEgPSByZXNwb25zZS5yZXN1bHQgYXMgRGF0YVNjaGVtYTtcbiAgICAgIHJldHVybiBkYXRhU2NoZW1hO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYyhkYXRhU291cmNlSWQ6IHN0cmluZyk6IFByb21pc2U8Q29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeVtdPiB7XG4gICAgY29uc3QgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCB9O1xuXG4gICAgLy8gR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFibGVzIHVzZWQgYnkgdGhpcyBjb25uZWN0aW9uXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0Q29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyaWVzLCBwYXJhbXMpLnRoZW48Q29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeVtdPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvblN1bW1hcmllcyA9IHJlc3BvbnNlLnJlc3VsdCBhcyBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5W107XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25TdW1tYXJpZXM7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRBc3luYyhmaWVsZElkOiBzdHJpbmcpOiBQcm9taXNlPENvbnRyYWN0LkZpZWxkPiB7XG4gICAgY29uc3QgZmllbGRJZENvbXBvbmVudHM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnBhcnNlRmllbGRJZChmaWVsZElkKTtcbiAgICBjb25zdCBkYXRhU291cmNlSWQ6IHN0cmluZyA9IGZpZWxkSWRDb21wb25lbnRzWzFdO1xuICAgIGNvbnN0IGZpZWxkTmFtZTogc3RyaW5nID0gZmllbGRJZENvbXBvbmVudHNbMl07XG5cbiAgICBjb25zdCB2ZXJiOiBWZXJiSWQgPSBWZXJiSWQuR2V0RGF0YVNvdXJjZTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LkZpZWxkPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkYXRhU291cmNlOiBJbnRlcm5hbENvbnRyYWN0LkRhdGFTb3VyY2UgPSByZXNwb25zZS5yZXN1bHQgYXMgSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlO1xuICAgICAgY29uc3QgZmllbGQ6IEludGVybmFsQ29udHJhY3QuRmllbGQgfCB1bmRlZmluZWQgPSBkYXRhU291cmNlLmZpZWxkcy5maW5kKChmKSA9PiB7XG4gICAgICAgIHJldHVybiBmLm5hbWUgPT09IGZpZWxkTmFtZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGZpZWxkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBVbmFibGUgdG8gZmluZCBmaWVsZCB3aXRoIGlkICcke2ZpZWxkSWR9J2ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY29udmVydEZpZWxkKGZpZWxkLCB0aGlzLmNvbnZlcnREYXRhU291cmNlKGRhdGFTb3VyY2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEZpZWxkKGZpZWxkOiBJbnRlcm5hbENvbnRyYWN0LkZpZWxkLCBkYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKTogQ29udHJhY3QuRmllbGQge1xuICAgIHJldHVybiBuZXcgRmllbGQobmV3IEZpZWxkSW1wbChmaWVsZCwgZGF0YVNvdXJjZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RGF0YVNvdXJjZShkYXRhU291cmNlOiBJbnRlcm5hbENvbnRyYWN0LkRhdGFTb3VyY2UpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gbmV3IERhdGFTb3VyY2UobmV3IERhdGFTb3VyY2VJbXBsKGRhdGFTb3VyY2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VGaWVsZElkKGZpZWxkSWQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIC8vIHdlIGNhbiBleHBlY3QgZXhlYyB0byByZXR1cm4gYSBtYXRjaCB0byB0aGUgZW50aXJlIGZpZWxkIGlkIGF0IGVsZW1lbnQgMCwgdGhlIGRhdGFzb3VyY2UgaWQgYXQgZWxlbWVudCAxXG4gICAgLy8gYW5kIHRoZSBmaWVsZCBuYW1lIGF0IGVsZW1lbnQgMi4gRmllbGQgaWQgZm9ybWF0IGlzIFtkYXRhU291Y3JlSWRdLltmaWVsZE5hbWVdXG4gICAgcmV0dXJuIC9eXFxbKC4rKVxcXVxcLlxcWyguKylcXF0kLy5leGVjKGZpZWxkSWQpITtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJpbXBvcnQge1xuICBGaWx0ZXJVcGRhdGVUeXBlLFxuICBGaWx0ZXJEb21haW5UeXBlLFxuICBGaWx0ZXJUeXBlIGFzIEV4dGVybmFsRmlsdGVyVHlwZSxcbiAgRXJyb3JDb2Rlc1xufSBmcm9tICcuLi8uLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBGaWx0ZXJUeXBlLFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRXh0ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgYXMgSW50ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5cbmltcG9ydCB7XG4gIENhdGVnb3JpY2FsRG9tYWluLFxuICBDYXRlZ29yaWNhbEZpbHRlcixcbiAgUmFuZ2VEb21haW4sXG4gIFJhbmdlRmlsdGVyLFxuICBSZWxhdGl2ZURhdGVGaWx0ZXJcbn0gZnJvbSAnLi4vLi4vTW9kZWxzL0ZpbHRlck1vZGVscyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuLi8uLi9VdGlscy9QYXJhbSc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEZpbHRlclNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5GaWx0ZXI7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICB2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgdmFsdWVzOiBBcnJheTxzdHJpbmc+LFxuICAgIHVwZGF0ZVR5cGU6IEZpbHRlclVwZGF0ZVR5cGUsXG4gICAgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5BcHBseUNhdGVnb3JpY2FsRmlsdGVyO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAndmFsdWVzIHBhcmFtZXRlciBmb3IgYXBwbHlGaWx0ZXJBc3luYyBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgfVxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmlsdGVyVmFsdWVzXSA9IHZhbHVlcztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclVwZGF0ZVR5cGVdID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLmZpbHRlclVwZGF0ZVR5cGUuY29udmVydCh1cGRhdGVUeXBlKTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklzRXhjbHVkZU1vZGVdID1cbiAgICAgIChmaWx0ZXJPcHRpb25zID09PSB1bmRlZmluZWQgfHwgZmlsdGVyT3B0aW9ucy5pc0V4Y2x1ZGVNb2RlID09PSB1bmRlZmluZWQpID8gZmFsc2UgOiBmaWx0ZXJPcHRpb25zLmlzRXhjbHVkZU1vZGU7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48c3RyaW5nPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gZmllbGROYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFwcGx5UmFuZ2VGaWx0ZXJBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQsIGZpZWxkTmFtZTogc3RyaW5nLCBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5SYW5nZUZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuQXBwbHlSYW5nZUZpbHRlcjtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuXG5cbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5taW4pIHtcbiAgICAgIGxldCBtaW46IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGlmIChmaWx0ZXJPcHRpb25zLm1pbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgbWluID0gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKGZpbHRlck9wdGlvbnMubWluKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbiA9IGZpbHRlck9wdGlvbnMubWluO1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU1pbl0gPSBtaW47XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubWF4KSB7XG4gICAgICBsZXQgbWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBpZiAoZmlsdGVyT3B0aW9ucy5tYXggaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG1heCA9IFBhcmFtLnNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybShmaWx0ZXJPcHRpb25zLm1heCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXggPSBmaWx0ZXJPcHRpb25zLm1heDtcbiAgICAgIH1cbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmlsdGVyUmFuZ2VNYXhdID0gbWF4O1xuICAgIH1cblxuICAgIC8vIFRoZSBudWxsIG9wdGlvbiBpcyB1c2VkIHdpdGggbWluK21heCBmb3IgJ2luY2x1ZGUtcmFuZ2UnIG9yICdpbmNsdWRlLXJhbmdlLW9yLW51bGwnXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbikge1xuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU51bGxPcHRpb25dID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLm51bGxPcHRpb25zLmNvbnZlcnQoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKTtcbiAgICB9XG5cbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQsIGZpZWxkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkNsZWFyRmlsdGVyO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZE5hbWVdID0gZmllbGROYW1lO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3Bvc25lID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRmlsdGVyPj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0RmlsdGVycztcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxBcnJheTxDb250cmFjdC5GaWx0ZXI+PihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZmlsdGVycyA9IHJlc3BvbnNlLnJlc3VsdCBhcyBBcnJheTxJbnRlcm5hbENvbnRyYWN0LkZpbHRlcj47XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RG9tYWluRmlsdGVycyhmaWx0ZXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXRlZ29yaWNhbERvbWFpbkFzeW5jKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZG9tYWluVHlwZTogRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkdldENhdGVnb3JpY2FsRG9tYWluO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0ge1xuICAgICAgd29ya3NoZWV0OiB3b3Jrc2hlZXROYW1lXG4gICAgfTtcblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGRJZF0gPSBmaWVsZElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRG9tYWluVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyRG9tYWluVHlwZS5jb252ZXJ0KGRvbWFpblR5cGUpO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRvbWFpbiA9IHJlc3BvbnNlLnJlc3VsdCBhcyBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluO1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydENhdGVnb3JpY2FsRG9tYWluKGRvbWFpbiwgZG9tYWluVHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmFuZ2VEb21haW5Bc3luYyh3b3Jrc2hlZXROYW1lOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgZG9tYWluVHlwZTogRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuUmFuZ2VEb21haW4+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkdldFJhbmdlRG9tYWluO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0ge1xuICAgICAgd29ya3NoZWV0OiB3b3Jrc2hlZXROYW1lXG4gICAgfTtcblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGRJZF0gPSBmaWVsZElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRG9tYWluVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyRG9tYWluVHlwZS5jb252ZXJ0KGRvbWFpblR5cGUpO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5SYW5nZURvbWFpbj4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRvbWFpbiA9IHJlc3BvbnNlLnJlc3VsdCBhcyBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRG9tYWluO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UmFuZ2VEb21haW4oZG9tYWluLCBkb21haW5UeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEhlbHBlciBNZXRob2RzXG4gIHByaXZhdGUgY29udmVydERvbWFpbkZpbHRlcnMoZG9tYWluRmlsdGVyczogQXJyYXk8SW50ZXJuYWxDb250cmFjdC5GaWx0ZXI+KTogQXJyYXk8Q29udHJhY3QuRmlsdGVyPiB7XG4gICAgbGV0IGZpbHRlcnM6IEFycmF5PENvbnRyYWN0LkZpbHRlcj4gPSBbXTtcbiAgICBkb21haW5GaWx0ZXJzLmZvckVhY2goZG9tYWluRmlsdGVyID0+IHtcbiAgICAgIHN3aXRjaCAoZG9tYWluRmlsdGVyLmZpbHRlclR5cGUpIHtcbiAgICAgICAgY2FzZSBGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRDYXRlZ29yaWNhbEZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENhdGVnb3JpY2FsIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRmlsdGVyVHlwZS5SYW5nZToge1xuICAgICAgICAgIGxldCBmaWx0ZXIgPSBkb21haW5GaWx0ZXIgYXMgSW50ZXJuYWxDb250cmFjdC5SYW5nZUZpbHRlcjtcbiAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2godGhpcy5jb252ZXJ0UmFuZ2VGaWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBSYW5nZSBGaWx0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEZpbHRlclR5cGUuUmVsYXRpdmVEYXRlOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlcjtcbiAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2godGhpcy5jb252ZXJ0UmVsYXRpdmVEYXRlRmlsdGVyKGZpbHRlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUmVsYXRpdmUgRGF0ZSBGaWx0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydENhdGVnb3JpY2FsRmlsdGVyKGRvbWFpbkZpbHRlcjogSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbEZpbHRlcik6IENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyIHtcbiAgICBsZXQgYXBwbGllZFZhbHVlczogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiA9IGRvbWFpbkZpbHRlci52YWx1ZXMubWFwKGR2ID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGR2LnZhbHVlLCBkdi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IENhdGVnb3JpY2FsRmlsdGVyKFxuICAgICAgZG9tYWluRmlsdGVyLnZpc3VhbElkLndvcmtzaGVldCxcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZENhcHRpb24sXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGROYW1lLFxuICAgICAgRmlsdGVyVHlwZS5DYXRlZ29yaWNhbCxcbiAgICAgIGFwcGxpZWRWYWx1ZXMsXG4gICAgICBkb21haW5GaWx0ZXIuaXNFeGNsdWRlLFxuICAgICAgZG9tYWluRmlsdGVyLmlzQWxsU2VsZWN0ZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyKTogQ29udHJhY3QuUmFuZ2VGaWx0ZXIge1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW5GaWx0ZXIubWluLnZhbHVlLCBkb21haW5GaWx0ZXIubWluLmZvcm1hdHRlZFZhbHVlKTtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluRmlsdGVyLm1heC52YWx1ZSwgZG9tYWluRmlsdGVyLm1heC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUZpbHRlcihcbiAgICAgIGRvbWFpbkZpbHRlci52aXN1YWxJZC53b3Jrc2hlZXQsXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGRDYXB0aW9uLFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkTmFtZSxcbiAgICAgIEZpbHRlclR5cGUuUmFuZ2UsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIG1heFZhbHVlLFxuICAgICAgZG9tYWluRmlsdGVyLmluY2x1ZGVOdWxsVmFsdWVzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJlbGF0aXZlRGF0ZUZpbHRlcihkb21haW5GaWx0ZXI6IEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyKTogQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyIHtcbiAgICBsZXQgYW5jaG9yRGF0ZVZhbHVlOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbkZpbHRlci5hbmNob3JEYXRlLnZhbHVlLCBkb21haW5GaWx0ZXIuYW5jaG9yRGF0ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSZWxhdGl2ZURhdGVGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBFeHRlcm5hbEZpbHRlclR5cGUuUmVsYXRpdmVEYXRlLFxuICAgICAgYW5jaG9yRGF0ZVZhbHVlLFxuICAgICAgSW50ZXJuYWxFbnVtQ29udmVydGVyLmRhdGVTdGVwUGVyaW9kLmNvbnZlcnQoZG9tYWluRmlsdGVyLnBlcmlvZFR5cGUpLFxuICAgICAgSW50ZXJuYWxFbnVtQ29udmVydGVyLmRhdGVSYW5nZVR5cGUuY29udmVydChkb21haW5GaWx0ZXIucmFuZ2VUeXBlKSxcbiAgICAgIGRvbWFpbkZpbHRlci5yYW5nZU5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0Q2F0ZWdvcmljYWxEb21haW4oXG4gICAgZG9tYWluOiBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluLFxuICAgIGRvbWFpblR5cGU6IEZpbHRlckRvbWFpblR5cGUpOiBDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbiB7XG4gICAgbGV0IHZhbHVlczogQXJyYXk8RGF0YVZhbHVlPiA9IGRvbWFpbi52YWx1ZXMubWFwKChkb21haW5EdikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoZG9tYWluRHYudmFsdWUsIGRvbWFpbkR2LmZvcm1hdHRlZFZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IENhdGVnb3JpY2FsRG9tYWluKHZhbHVlcywgZG9tYWluVHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSYW5nZURvbWFpbihkb21haW46IEludGVybmFsQ29udHJhY3QuUmFuZ2VEb21haW4sIGRvbWFpblR5cGU6IEZpbHRlckRvbWFpblR5cGUpOiBDb250cmFjdC5SYW5nZURvbWFpbiB7XG4gICAgbGV0IG1pbjogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW4ubWluLnZhbHVlLCBkb21haW4ubWluLmZvcm1hdHRlZFZhbHVlKTtcbiAgICBsZXQgbWF4OiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbi5tYXgudmFsdWUsIGRvbWFpbi5tYXguZm9ybWF0dGVkVmFsdWUpO1xuICAgIHJldHVybiBuZXcgUmFuZ2VEb21haW4oXG4gICAgICBtaW4sXG4gICAgICBtYXgsXG4gICAgICBkb21haW5UeXBlXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IEZpbHRlclR5cGUsIEZpbHRlckRvbWFpblR5cGUsIFBlcmlvZFR5cGUsIERhdGVSYW5nZVR5cGUgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIHByb3RlY3RlZCBfZmllbGROYW1lOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIF9maWx0ZXJUeXBlOiBGaWx0ZXJUeXBlLFxuICAgIHByb3RlY3RlZCBfZmllbGRJZDogc3RyaW5nKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0TmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZElkO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWx0ZXJUeXBlKCk6IEZpbHRlclR5cGUge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldEZpZWxkQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5GaWVsZD4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRGaWVsZEFzeW5jKHRoaXMuX2ZpZWxkSWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWNhbEZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9hcHBsaWVkVmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+LFxuICAgIHByaXZhdGUgX2lzRXhjbHVkZU1vZGU6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfaXNBbGxTZWxlY3RlZD86IGJvb2xlYW4pIHtcbiAgICBzdXBlcih3b3Jrc2hlZXROYW1lLCBmaWVsZE5hbWUsIGZpbHRlclR5cGUsIGZpZWxkSWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pc0FsbFNlbGVjdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBhcHBsaWVkVmFsdWVzKCk6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWVkVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4Y2x1ZGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0V4Y2x1ZGVNb2RlO1xuICB9XG5cbiAgcHVibGljIGdldERvbWFpbkFzeW5jKGRvbWFpblR5cGU/OiBGaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ge1xuICAgIGlmICghZG9tYWluVHlwZSkge1xuICAgICAgZG9tYWluVHlwZSA9IEZpbHRlckRvbWFpblR5cGUuUmVsZXZhbnQ7XG4gICAgfVxuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxGaWx0ZXJEb21haW5UeXBlPihkb21haW5UeXBlLCBGaWx0ZXJEb21haW5UeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRDYXRlZ29yaWNhbERvbWFpbkFzeW5jKHRoaXMuX3dvcmtzaGVldE5hbWUsIHRoaXMuX2ZpZWxkSWQsIGRvbWFpblR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZUZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LlJhbmdlRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9taW46IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9tYXg6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9pbmNsdWRlTnVsbFZhbHVlczogYm9vbGVhbikge1xuICAgIHN1cGVyKHdvcmtzaGVldE5hbWUsIGZpZWxkTmFtZSwgZmlsdGVyVHlwZSwgZmllbGRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pblZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4VmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgcHVibGljIGdldCBpbmNsdWRlTnVsbFZhbHVlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU51bGxWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RG9tYWluQXN5bmMoZG9tYWluVHlwZT86IEZpbHRlckRvbWFpblR5cGUpOiBQcm9taXNlPENvbnRyYWN0LlJhbmdlRG9tYWluPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIGlmICghZG9tYWluVHlwZSkge1xuICAgICAgZG9tYWluVHlwZSA9IEZpbHRlckRvbWFpblR5cGUuUmVsZXZhbnQ7XG4gICAgfVxuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxGaWx0ZXJEb21haW5UeXBlPihkb21haW5UeXBlLCBGaWx0ZXJEb21haW5UeXBlKTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldFJhbmdlRG9tYWluQXN5bmModGhpcy5fd29ya3NoZWV0TmFtZSwgdGhpcy5fZmllbGRJZCwgZG9tYWluVHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbGF0aXZlRGF0ZUZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IEZpbHRlclR5cGUsXG4gICAgcHJpdmF0ZSBfYW5jaG9yRGF0ZTogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX3BlcmlvZFR5cGU6IFBlcmlvZFR5cGUsXG4gICAgcHJpdmF0ZSBfcmFuZ2VUeXBlOiBEYXRlUmFuZ2VUeXBlLFxuICAgIHByaXZhdGUgX3JhbmdlTjogbnVtYmVyKSB7XG4gICAgc3VwZXIod29ya3NoZWV0TmFtZSwgZmllbGROYW1lLCBmaWx0ZXJUeXBlLCBmaWVsZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYW5jaG9yRGF0ZSgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9hbmNob3JEYXRlO1xuICB9XG5cbiAgcHVibGljIGdldCBwZXJpb2RUeXBlKCk6IFBlcmlvZFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9wZXJpb2RUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCByYW5nZVR5cGUoKTogRGF0ZVJhbmdlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFuZ2VOKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlTjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmljYWxEb21haW4gaW1wbGVtZW50cyBDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92YWx1ZXM6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4sXG4gICAgcHJpdmF0ZSBfZG9tYWluVHlwZTogRmlsdGVyRG9tYWluVHlwZSkge1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZXMoKTogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBGaWx0ZXJEb21haW5UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmFuZ2VEb21haW4gaW1wbGVtZW50cyBDb250cmFjdC5SYW5nZURvbWFpbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9taW46IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9tYXg6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9kb21haW5UeXBlOiBGaWx0ZXJEb21haW5UeXBlKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogRmlsdGVyRG9tYWluVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpblR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbigpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1heCgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9GaWx0ZXJNb2RlbHMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIERhdGFUYWJsZSBhcyBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LFxuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlLFxuICBQYXJhbWV0ZXJJZCxcbiAgU2VsZWN0ZWRNYXJrc1RhYmxlLFxuICBVbmRlcmx5aW5nRGF0YVRhYmxlLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IENvbHVtbiwgRGF0YVRhYmxlLCBEYXRhVmFsdWUsIE1hcmtJbmZvIH0gZnJvbSAnLi4vLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UsIEdldERhdGFUeXBlIH0gZnJvbSAnLi4vR2V0RGF0YVNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuZXhwb3J0IGNsYXNzIEdldERhdGFTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEdldERhdGFTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuR2V0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhSb3dMaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiAxMDAwMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGltaXRlZE1heFJvd3MocmVxdWVzdGVkUm93czogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCByb3dDb3VudExpbWl0ID0gdGhpcy5nZXRNYXhSb3dMaW1pdCgpICsgMTtcbiAgICByZXR1cm4gKHJlcXVlc3RlZFJvd3MgPiAwICYmIHJlcXVlc3RlZFJvd3MgPCByb3dDb3VudExpbWl0KSA/IHJlcXVlc3RlZFJvd3MgOiByb3dDb3VudExpbWl0O1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgLy8gQ3JlYXRlIGFsbCBvZiBvdXIgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHZlcmIgPSBnZXRUeXBlID09PSBHZXREYXRhVHlwZS5TdW1tYXJ5ID8gVmVyYklkLkdldERhdGFTdW1tYXJ5RGF0YSA6IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YTtcbiAgICBjb25zdCByZXF1ZXN0TWF4Um93cyA9IHZlcmIgPT09IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YSA/IHRoaXMuZ2V0TGltaXRlZE1heFJvd3MobWF4Um93cykgOiBtYXhSb3dzO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdID0gaWdub3JlQWxpYXNlcztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZVNlbGVjdGlvbl0gPSBpZ25vcmVTZWxlY3Rpb247XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5JbmNsdWRlQWxsQ29sdW1uc10gPSBpbmNsdWRlQWxsQ29sdW1ucztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLk1heFJvd3NdID0gcmVxdWVzdE1heFJvd3M7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48RGF0YVRhYmxlPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgVW5kZXJseWluZ0RhdGFUYWJsZTtcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhLmRhdGEsIHJlc3BvbnNlRGF0YS5pc1N1bW1hcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldFNlbGVjdGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgU2VsZWN0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEhpZ2hsaWdodGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldEhpZ2hsaWdodGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VEYXRhQXN5bmMoXG4gICAgZGF0YVNvdXJjZUlkOiBzdHJpbmcsXG4gICAgaWdub3JlQWxpYXNlczogYm9vbGVhbixcbiAgICBtYXhSb3dzOiBudW1iZXIsXG4gICAgY29sdW1uc1RvSW5jbHVkZTogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkLFxuICAgICAgW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdOiBpZ25vcmVBbGlhc2VzLFxuICAgICAgW1BhcmFtZXRlcklkLk1heFJvd3NdOiB0aGlzLmdldExpbWl0ZWRNYXhSb3dzKG1heFJvd3MpLFxuICAgICAgW1BhcmFtZXRlcklkLkNvbHVtbnNUb0luY2x1ZGVdOiBjb2x1bW5zVG9JbmNsdWRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXREYXRhU291cmNlRGF0YSwgcGFyYW1ldGVycykudGhlbjxEYXRhVGFibGU+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGEuZGF0YSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhOiBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LCBpc1N1bW1hcnk6IGJvb2xlYW4pOiBEYXRhVGFibGUge1xuICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZURhdGEuaGVhZGVycy5tYXAoaCA9PiBuZXcgQ29sdW1uKGguZmllbGRDYXB0aW9uLFxuICAgICAgaC5kYXRhVHlwZSxcbiAgICAgIGguaXNSZWZlcmVuY2VkLFxuICAgICAgaC5pbmRleCkpO1xuXG4gICAgLy8gVE9ETyBUaGlzIHNob3VsZCBiZSBjb250cm9sbGVkIGJ5IGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBhcGkgd2lsbCByZXNwb25kIG1hcmtzIGluZm8gb3Igbm90XG4gICAgbGV0IG1hcmtzO1xuICAgIGlmIChyZXNwb25zZURhdGEubWFya3MpIHtcbiAgICAgIG1hcmtzID0gcmVzcG9uc2VEYXRhLm1hcmtzLm1hcChoID0+IG5ldyBNYXJrSW5mbyhoLnR5cGUsXG4gICAgICAgIGguY29sb3IsXG4gICAgICAgIGgudHVwbGVJZCkpO1xuICAgIH1cblxuICAgIC8vIExpbWl0KzEgaXMgb3VyIHNlbnRpbmFsIHRoYXQgdW5kZXJseWluZyBkYXRhIGNvbnRhaW5zIG1vcmUgcm93cyB0aGFuIHVzZXIgaXMgYWxsb3dlZCB0byBmZXRjaC5cbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBzbyB3ZSBhbHdheXMgcmV0dXJuIE1heFJvd0xpbWl0XG4gICAgY29uc3QgaXNUb3RhbFJvd0NvdW50TGltaXRlZCA9IGlzU3VtbWFyeSA9PT0gZmFsc2UgJiYgcmVzcG9uc2VEYXRhLmRhdGFUYWJsZS5sZW5ndGggPT09IHRoaXMuZ2V0TWF4Um93TGltaXQoKSArIDE7XG4gICAgaWYgKGlzVG90YWxSb3dDb3VudExpbWl0ZWQpIHtcbiAgICAgIHJlc3BvbnNlRGF0YS5kYXRhVGFibGUubGVuZ3RoIC09IDE7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGUgPSByZXNwb25zZURhdGEuZGF0YVRhYmxlLm1hcChyb3cgPT4ge1xuICAgICAgcmV0dXJuIHJvdy5tYXAoY2VsbCA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGNlbGwudmFsdWUsIGNlbGwuZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAobWFya3MpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVRhYmxlKHRhYmxlLCBoZWFkZXJzLCB0YWJsZS5sZW5ndGgsIGlzVG90YWxSb3dDb3VudExpbWl0ZWQsIGlzU3VtbWFyeSwgbWFya3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGFUYWJsZSh0YWJsZSwgaGVhZGVycywgdGFibGUubGVuZ3RoLCBpc1RvdGFsUm93Q291bnRMaW1pdGVkLCBpc1N1bW1hcnkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciwgTW9kZWwsIE5vdGlmaWNhdGlvbiwgTm90aWZpY2F0aW9uSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlLCBVbnJlZ2lzdGVyRm4gfSBmcm9tICcuLi9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmNsYXNzIFJlZ2lzdHJhdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWx0ZXJGbjogKG5vdGlmaWNhdGlvbk1vZGVsOiBNb2RlbCkgPT4gYm9vbGVhbixcbiAgICBwcml2YXRlIF9jYWxsYmFja0ZuOiAobm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKSA9PiB2b2lkKSB7XG4gICAgLy8gTm90aGluZyBIZXJlXG4gIH1cblxuICBwdWJsaWMgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckZuKG5vdGlmaWNhdGlvbk1vZGVsKSkge1xuICAgICAgdGhpcy5fY2FsbGJhY2tGbihub3RpZmljYXRpb25Nb2RlbCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9oYW5kbGVyczogeyBbbm90aWZpY2F0aW9uSWQ6IHN0cmluZ106IEFycmF5PFJlZ2lzdHJhdGlvbj4gfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpIHtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHt9O1xuICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIodGhpcy5vbk5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoaWQ6IE5vdGlmaWNhdGlvbklkLCBmaWx0ZXJGbjogKG1vZGVsOiBNb2RlbCkgPT4gYm9vbGVhbiwgaGFuZGxlcjogKG1vZGVsOiBNb2RlbCkgPT4gdm9pZCk6IFVucmVnaXN0ZXJGbiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tpZF0gfHwgbmV3IEFycmF5PFJlZ2lzdHJhdGlvbj4oKTtcbiAgICBjb25zdCByZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uKGZpbHRlckZuLCBoYW5kbGVyKTtcbiAgICBoYW5kbGVycy5wdXNoKHJlZ2lzdHJhdGlvbik7XG4gICAgdGhpcy5faGFuZGxlcnNbaWRdID0gaGFuZGxlcnM7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlUmVnaXN0cmF0aW9uKGlkLCByZWdpc3RyYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUoaWQ6IE5vdGlmaWNhdGlvbklkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLmhhc093blByb3BlcnR5KGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzSGFuZGxlcnNGb3JOb3RpZmljYXRpb25UeXBlKG5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb25JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHbyB0aHJvdWdoIGFuZCBjaGVjayBmb3IgYWxsIHRoZSBoYW5kbGVycyBvZiB0aGlzIHBhcnRpY3VsYXIgbm90aWZpY2F0aW9uXG4gICAgdGhpcy5faGFuZGxlcnNbbm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbklkXS5mb3JFYWNoKGggPT4gaC5vbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVSZWdpc3RyYXRpb24oaWQ6IE5vdGlmaWNhdGlvbklkLCByZWdpc3RyYXRpb246IFJlZ2lzdHJhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUoaWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlcnNbaWRdID0gdGhpcy5faGFuZGxlcnNbaWRdLmZpbHRlcihyZWcgPT4gcmVnICE9PSByZWdpc3RyYXRpb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL05vdGlmaWNhdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgTW9kZWwsXG4gIFBhcmFtZXRlcklkLFxuICBQYXJhbWV0ZXJJbmZvLFxuICBTaGVldFBhdGgsXG4gIFZlcmJJZCxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJJbXBsIH0gZnJvbSAnLi4vLi4vSW1wbC9QYXJhbWV0ZXJJbXBsJztcbmltcG9ydCB7IFBhcmFtZXRlciB9IGZyb20gJy4uLy4uL1BhcmFtZXRlcic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZSB9IGZyb20gJy4uL1BhcmFtZXRlcnNTZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJzU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBQYXJhbWV0ZXJzU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLlBhcmFtZXRlcnM7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyYW1ldGVyc0ZvclNoZWV0QXN5bmMoc2hlZXRQYXRoOiBTaGVldFBhdGgsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8QXJyYXk8UGFyYW1ldGVyPj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuU2hlZXRQYXRoXTogc2hlZXRQYXRoXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldFBhcmFtZXRlcnNGb3JTaGVldCwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBUT0RPIC0gQ2hlY2sgZm9yIGVycm9yXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBBcnJheTxQYXJhbWV0ZXJJbmZvPjtcbiAgICAgIHJldHVybiByZXN1bHQubWFwKHBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgICBjb25zdCBpbXBsID0gbmV3IFBhcmFtZXRlckltcGwocGFyYW1ldGVySW5mbyk7XG4gICAgICAgIHJldHVybiBuZXcgUGFyYW1ldGVyKGltcGwsIHNoZWV0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhcmFtZXRlclZhbHVlQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFBhcmFtZXRlckluZm8+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlBhcmFtZXRlckZpZWxkTmFtZV06IGZpZWxkTmFtZSxcbiAgICAgIFtQYXJhbWV0ZXJJZC5QYXJhbWV0ZXJWYWx1ZV06IG5ld1ZhbHVlXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkNoYW5nZVBhcmFtZXRlclZhbHVlLCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBQYXJhbWV0ZXJJbmZvO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUGFyYW1ldGVyQnlOYW1lQXN5bmMobmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPFBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRQYXJhbWV0ZXJBc3luYyhzaGVldCwgbmFtZSwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUGFyYW1ldGVyQnlHbG9iYWxGaWVsZE5hbWVBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5maW5kUGFyYW1ldGVyQXN5bmMoc2hlZXQsIHVuZGVmaW5lZCwgZmllbGROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhcmFtZXRlckFzeW5jKFxuICAgIHNoZWV0OiBDb250cmFjdC5TaGVldCxcbiAgICBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZmllbGROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBQcm9taXNlPFBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5QYXJhbWV0ZXJDYXB0aW9uXSA9IG5hbWU7XG4gICAgfSBlbHNlIGlmIChmaWVsZE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5QYXJhbWV0ZXJGaWVsZE5hbWVdID0gZmllbGROYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgJ25hbWUgb3IgZmllbGROYW1lIG11c3QgYmUgcHJvdmlkZWQgdG8gZmluZCBwYXJhbWV0ZXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5GaW5kUGFyYW1ldGVyLCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlT2ZQYXJhbWV0ZXJJbmZvID0gKG9iamVjdDogTW9kZWwpOiBvYmplY3QgaXMgUGFyYW1ldGVySW5mbyA9PiB7XG4gICAgICAgIHJldHVybiAnZmllbGROYW1lJyBpbiBvYmplY3Q7XG4gICAgICB9O1xuXG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRvIHNlZSBpZiB3ZSBnb3QgYSB2YWxpZCByZXNwb25zZSBiYWNrIGFnYWluXG4gICAgICBpZiAoaW5zdGFuY2VPZlBhcmFtZXRlckluZm8ocmVzcG9uc2UucmVzdWx0KSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgUGFyYW1ldGVySW5mbztcbiAgICAgICAgY29uc3QgaW1wbCA9IG5ldyBQYXJhbWV0ZXJJbXBsKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiBuZXcgUGFyYW1ldGVyKGltcGwsIHNoZWV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvUGFyYW1ldGVyc1NlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRGF0YVR5cGUsIFRhYmxlYXVFdmVudFR5cGUsIFBlcmlvZFR5cGUsIFBhcmFtZXRlclZhbHVlVHlwZSB9IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQsIFBhcmFtZXRlckluZm8gfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFBhcmFtZXRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQnO1xuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4uL1V0aWxzL1BhcmFtJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckltcGwge1xuICBwcml2YXRlIF9hbGxvd2FibGVWYWx1ZXM6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uO1xuICBwcml2YXRlIF9nbG9iYWxGaWVsZE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbykge1xuICAgIHRoaXMuc2V0UGFyYW1ldGVySW5mbyhwYXJhbWV0ZXJJbmZvKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRWYWx1ZSgpOiBEYXRhVmFsdWUge1xuICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKHRoaXMuX3BhcmFtZXRlckluZm8uY3VycmVudFZhbHVlLnZhbHVlLCB0aGlzLl9wYXJhbWV0ZXJJbmZvLmN1cnJlbnRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IERhdGFUeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmRhdGFUeXBlLmNvbnZlcnQodGhpcy5fcGFyYW1ldGVySW5mby5kYXRhVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbEZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxsb3dhYmxlVmFsdWVzKCk6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVZhbHVlQXN5bmMobmV3VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBEYXRlKTogUHJvbWlzZTxEYXRhVmFsdWU+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKG5ld1ZhbHVlLCAnbmV3VmFsdWUnKTtcblxuICAgIGxldCBjb2VyY2VkVmFsdWUgPSBQYXJhbS5zZXJpYWxpemVQYXJhbWV0ZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgY29uc3QgcGFyYW1ldGVyc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBwYXJhbWV0ZXJzU2VydmljZS5jaGFuZ2VQYXJhbWV0ZXJWYWx1ZUFzeW5jKHRoaXMuX2dsb2JhbEZpZWxkTmFtZSwgY29lcmNlZFZhbHVlKS50aGVuKHBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJJbmZvKHBhcmFtZXRlckluZm8pO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2hpY2ggZ29lcyB0aHJvdWdoIGFuZCByZWdpc3RlcnMgZWFjaCBldmVudCB0eXBlIHRoaXMgaW1wbCBrbm93cyBhYm91dFxuICAgKiB3aXRoIHRoZSBOb3RpZmljYXRpb25TZXJ2aWNlLiBJdCByZXR1cm5zIGFuIGFycmF5IG9mIFNpbmdsZUV2ZW50TWFuYWdlciBvYmplY3RzIHdoaWNoXG4gICAqIGNhbiB0aGVuIGJlIHBhc3NlZCB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlciB0byBoYW5kbGUgdXNlciByZWdpc3RyYXRpb24gLyB1bnJlZ2lzdHJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHNoZWV0IFRoZSBzaGVldCBvYmplY3Qgd2hpY2ggd2lsbCBiZSBpbmNsdWRlZCB3aXRoIHRoZSBldmVudCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+fSBDb2xsZWN0aW9uIG9mIGV2ZW50IG1hbmFnZXJzIHRvIHBhc3MgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplRXZlbnRzKHNoZWV0OiBDb250cmFjdC5TaGVldCk6IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlJbnRlcm5hbFZhbHVlKHNoZWV0LCAnc2hlZXQnKTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPigpO1xuICAgIGxldCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIHRoaXMgc2VydmljZSByZWdpc3RlcmVkLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIGV2ZW50IG1hbmFnZXJzIHdlJ2xsIG5lZWQgKG9uZSBmb3IgZWFjaCBldmVudCB0eXBlKVxuICAgIGNvbnN0IHBhcmFtZXRlckV2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8UGFyYW1ldGVyQ2hhbmdlZEV2ZW50PihUYWJsZWF1RXZlbnRUeXBlLlBhcmFtZXRlckNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLlBhcmFtZXRlckNoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gbW9kZWwgYXMgc3RyaW5nO1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gdGhpcy5fZ2xvYmFsRmllbGROYW1lO1xuICAgIH0sIChmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcGFyYW1ldGVyRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQoZmllbGROYW1lLCBzaGVldCkpO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0cy5wdXNoKHBhcmFtZXRlckV2ZW50KTtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYXJhbWV0ZXJJbmZvKHBhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm8pOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJJbmZvID0gcGFyYW1ldGVySW5mbztcbiAgICB0aGlzLl9nbG9iYWxGaWVsZE5hbWUgPSBwYXJhbWV0ZXJJbmZvLmZpZWxkTmFtZTtcblxuICAgIGNvbnN0IHR5cGUgPSBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuYWxsb3dhYmxlVmFsdWVzLmNvbnZlcnQocGFyYW1ldGVySW5mby5hbGxvd2FibGVWYWx1ZXNUeXBlKTtcbiAgICBsZXQgbGlzdFZhbHVlczogQXJyYXk8RGF0YVZhbHVlPiB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWluVmFsdWU6IERhdGFWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBsZXQgc3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBsZXQgZGF0ZVN0ZXBQZXJpb2Q6IFBlcmlvZFR5cGUgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZSA9PT0gUGFyYW1ldGVyVmFsdWVUeXBlLkxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHBhcmFtZXRlckluZm8uYWxsb3dhYmxlVmFsdWVzIHx8IFtdO1xuICAgICAgbGlzdFZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+IG5ldyBEYXRhVmFsdWUodmFsLnZhbHVlLCB2YWwuZm9ybWF0dGVkVmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFBhcmFtZXRlclZhbHVlVHlwZS5SYW5nZSkge1xuICAgICAgbWluVmFsdWUgPSBwYXJhbWV0ZXJJbmZvLm1pblZhbHVlICYmIG5ldyBEYXRhVmFsdWUocGFyYW1ldGVySW5mby5taW5WYWx1ZS52YWx1ZSwgcGFyYW1ldGVySW5mby5taW5WYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICBtYXhWYWx1ZSA9IHBhcmFtZXRlckluZm8ubWF4VmFsdWUgJiYgbmV3IERhdGFWYWx1ZShwYXJhbWV0ZXJJbmZvLm1heFZhbHVlLnZhbHVlLCBwYXJhbWV0ZXJJbmZvLm1heFZhbHVlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIHN0ZXBTaXplID0gcGFyYW1ldGVySW5mby5zdGVwU2l6ZTtcbiAgICAgIGRhdGVTdGVwUGVyaW9kID0gcGFyYW1ldGVySW5mby5kYXRlU3RlcFBlcmlvZCAmJlxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGF0ZVN0ZXBQZXJpb2QuY29udmVydChwYXJhbWV0ZXJJbmZvLmRhdGVTdGVwUGVyaW9kKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hbGxvd2FibGVWYWx1ZXMgPSB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgYWxsb3dhYmxlVmFsdWVzOiBsaXN0VmFsdWVzLFxuICAgICAgbWluVmFsdWU6IG1pblZhbHVlLFxuICAgICAgbWF4VmFsdWU6IG1heFZhbHVlLFxuICAgICAgc3RlcFNpemU6IHN0ZXBTaXplLFxuICAgICAgZGF0ZVN0ZXBQZXJpb2Q6IGRhdGVTdGVwUGVyaW9kXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9QYXJhbWV0ZXJJbXBsLnRzIiwiaW1wb3J0IHsgVGFibGVhdUV2ZW50VHlwZSwgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1BhcmFtZXRlcnNTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcbmltcG9ydCB7IFRhYmxlYXVTaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1U2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1U2hlZXRFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlBhcmFtZXRlckNoYW5nZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9nbG9iYWxGaWVsZE5hbWU6IHN0cmluZywgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KSB7XG4gICAgc3VwZXIoVGFibGVhdUV2ZW50VHlwZS5QYXJhbWV0ZXJDaGFuZ2VkLCBzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyYW1ldGVyQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5QYXJhbWV0ZXI+IHtcbiAgICAvLyBDYWxsIGRvd24gdG8gb3VyIHNlcnZpY2UgdG8gZ2V0IHRoZSBwYXJhbWV0ZXIgYmFjayB2aWEgaXRzIGZpZWxkIG5hbWVcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8UGFyYW1ldGVyc1NlcnZpY2U+KFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzKTtcbiAgICByZXR1cm4gc2VydmljZS5maW5kUGFyYW1ldGVyQnlHbG9iYWxGaWVsZE5hbWVBc3luYyh0aGlzLl9nbG9iYWxGaWVsZE5hbWUsIHRoaXMuc2hlZXQpLnRoZW4ocGFyYW1ldGVyID0+IHtcbiAgICAgIGlmIChwYXJhbWV0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuTWlzc2luZ1BhcmFtZXRlciwgYENhbm5vdCBmaW5kIHBhcmFtZXRlcjogJHt0aGlzLl9nbG9iYWxGaWVsZE5hbWV9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQudHMiLCJpbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vRXZlbnRMaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVySW1wbCB9IGZyb20gJy4vSW1wbC9QYXJhbWV0ZXJJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgUGFyYW1ldGVyIGNvbnRyYWN0LiBDYWxscyBkb3duIHRvIHRoZSBpbXBsXG4gKiBjbGFzcyBmb3IgYWxtb3N0IGFsbCBvZiB0aGUgd29yayBpdCBkb2VzLlxuICovXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5QYXJhbWV0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbWV0ZXJJbXBsOiBQYXJhbWV0ZXJJbXBsLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBvdXIgZXZlbnQgaGFuZGxpbmcgZm9yIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhcmFtZXRlckltcGwuaW5pdGlhbGl6ZUV2ZW50cyhzaGVldCkuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3RXZlbnRUeXBlKGUpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudFZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IERhdGFUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbXBsLmRhdGFUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGxvd2FibGVWYWx1ZXMoKTogQ29udHJhY3QuUGFyYW1ldGVyRG9tYWluUmVzdHJpY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlVmFsdWVBc3luYyhuZXdWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IERhdGUpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuY2hhbmdlVmFsdWVBc3luYyhuZXdWYWx1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BhcmFtZXRlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHtcbiAgRGltZW5zaW9uU2VsZWN0aW9uTW9kZWwsXG4gIEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsLFxuICBSYW5nZVNlbGVjdGlvbk1vZGVsLFxuICBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIsXG4gIFR1cGxlU2VsZWN0aW9uTW9kZWwsXG4gIFZhbHVlU2VsZWN0aW9uTW9kZWxcbn0gZnJvbSAnLi4vLi4vTW9kZWxzL1NlbGVjdGlvbk1vZGVscyc7XG5pbXBvcnQgeyBFcnJvckNvZGVzLCBGaWx0ZXJOdWxsT3B0aW9uLCBTZWxlY3Rpb25VcGRhdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIFBhcmFtZXRlcklkLFxuICBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcyxcbiAgU2VsZWN0aW9uVXBkYXRlVHlwZSBhcyBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwsXG4gIFZlcmJJZCxcbiAgVmlzdWFsSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IFBhcmFtIH0gZnJvbSAnLi4vLi4vVXRpbHMvUGFyYW0nO1xuaW1wb3J0IHsgU2VsZWN0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlbGVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNlbGVjdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5TZWxlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNsZWFyIGFsbCB0aGUgc2VsZWN0ZWQgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB2aXN1YWxJZFxuICAgKi9cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkNsZWFyU2VsZWN0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47IC8vIEV4cGVjdGluZyBhbiBlbXB0eSBtb2RlbCBhbmQgaGVuY2UgdGhlIHZvaWQgcmVzcG9uc2UuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAgICpcbiAgICogQHBhcmFtIHZpc3VhbElkXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYVxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBTZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHNlbGVjdGlvbkNyaXRlcmlhcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnU2VsZWN0aW9uIGNyaXRlcmlhIG1pc3NpbmcgZm9yIHNlbGVjdGluZyBtYXJrcyBieSB2YWx1ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvblR5cGU6IHN0cmluZyA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICAgIGxldCBzZWxlY3Rpb25Dcml0ZXJpYVR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25Dcml0ZXJpYShzZWxlY3Rpb25Dcml0ZXJpYXNbMF0pO1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gdGhpcy5wYXJzZVNlbGVjdGlvbk1hcmtzKHNlbGVjdGlvbkNyaXRlcmlhcywgc2VsZWN0aW9uQ3JpdGVyaWFUeXBlKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uVXBkYXRlVHlwZV06IHNlbGVjdGlvblR5cGVcbiAgICB9O1xuXG4gICAgc3dpdGNoIChzZWxlY3Rpb25Dcml0ZXJpYVR5cGUpIHtcbiAgICAgIGNhc2UgU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5IaWVyVmFsU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmhpZXJNb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5RdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnF1YW50TW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZToge1xuICAgICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRpbVZhbFNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5kaW1Nb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuU2VsZWN0QnlWYWx1ZSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBFeHBlY3RpbmcgYW4gZW1wdHkgbW9kZWwgYW5kIGhlbmNlIHRoZSB2b2lkIHJlc3BvbnNlLlxuICAgICAgcmV0dXJuO1xuICAgICAgLy8gVE9ETyBJbnZlc3RpZ2F0ZSB0aGUgZXJyb3IgcmVzcG9uc2Ugd2l0aCBtdWx0aXBsZSBvdXRwdXQgcGFyYW1zIGFuZCB0aHJvdyBlcnJvciBhY2NvcmRpbmdseS5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAqXG4gKiBAcGFyYW0gdmlzdWFsSWRcbiAqIEBwYXJhbSBNYXJrSW5mb1xuICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAqL1xuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIG1hcmtzOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChtYXJrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnTWFya3MgaW5mbyBtaXNzaW5nIGZvciBzZWxlY3RpbmcgbWFya3MgYnkgSWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlOiBzdHJpbmcgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uVXBkYXRlVHlwZShzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IHRoaXMucGFyc2VTZWxlY3Rpb25JZHMobWFya3MpO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25VcGRhdGVUeXBlXTogc2VsZWN0aW9uVHlwZSxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25dOiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5zZWxlY3Rpb25cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNlbGVjdEJ5VmFsdWUsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRXhwZWN0aW5nIGFuIGVtcHR5IG1vZGVsIGFuZCBoZW5jZSB0aGUgdm9pZCByZXNwb25zZS5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgdGhlIGVycm9yIHJlc3BvbnNlIHdpdGggbXVsdGlwbGUgb3V0cHV0IHBhcmFtcyBhbmQgdGhyb3cgZXJyb3IgYWNjb3JkaW5nbHkuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgTWFya3NJbmZvXG4gICAqIEBwYXJhbSBtYXJrc1xuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZVNlbGVjdGlvbklkcyhtYXJrczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+KTogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyIHtcbiAgICBsZXQgaWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgbGV0IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIgPSBuZXcgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHR1cGxlSWQ6IE51bWJlciB8IHVuZGVmaW5lZCA9IG1hcmtzW2ldLnR1cGxlSWQ7XG4gICAgICBpZiAodHVwbGVJZCAhPT0gdW5kZWZpbmVkICYmIHR1cGxlSWQgIT09IG51bGwpIHsgLy8gSWYgdHVwbGUgaWQgaXMgcHJvdmlkZWQgdXNlIHRoYXQgaW5zdGVhZCBvZiBwYWlyXG4gICAgICAgIGlkcy5wdXNoKHR1cGxlSWQudG9TdHJpbmcoKSk7IC8vIGNvbGxlY3QgdGhlIHR1cGxlIGlkc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICd0dXBsZUlkIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkcy5sZW5ndGggIT09IDApIHsgLy8gdHVwbGUgaWRzIGJhc2VkIHNlbGVjdGlvblxuICAgICAgbGV0IHR1cGxlU2VsZWN0aW9uTW9kZWw6IFR1cGxlU2VsZWN0aW9uTW9kZWwgPSBuZXcgVHVwbGVTZWxlY3Rpb25Nb2RlbCgpO1xuICAgICAgdHVwbGVTZWxlY3Rpb25Nb2RlbC5zZWxlY3Rpb25UeXBlID0gJ3R1cGxlcyc7XG4gICAgICB0dXBsZVNlbGVjdGlvbk1vZGVsLm9iamVjdElkcyA9IGlkcztcbiAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnNlbGVjdGlvbiA9IHR1cGxlU2VsZWN0aW9uTW9kZWw7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjtcbiAgfVxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgdmFsdWVzLlxuICAgKlxuICAgKiBTdXBwb3J0cyAzIHR5cGVzIGZvciBzZWxlY3Rpb246XG4gICAqIDEpIGhpZXJhcmNoaWNhbCB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICogMikgcmFuZ2UgdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqIDMpIERpbWVuc2lvbiB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIG1hcmtzXG4gICAqIEBwYXJhbSBoaWVyTW9kZWxBcnJcbiAgICogQHBhcmFtIGRpbU1vZGVsQXJyXG4gICAqIEBwYXJhbSBxdWFudE1vZGVsQXJyXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25cbiAgICovXG4gIHByaXZhdGUgcGFyc2VTZWxlY3Rpb25NYXJrcyhzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUpOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gbmV3IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcigpO1xuICAgIGxldCBtaXhlZFNlbGVjdGlvbnNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25Dcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0ID0gc2VsZWN0aW9uQ3JpdGVyaWFzW2ldO1xuICAgICAgaWYgKHN0LmZpZWxkTmFtZSAmJiAoc3QudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGNhdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnKFxcW1tBLVphLXowLTldK10pLionLCAnZycpO1xuICAgICAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBzdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuICAgICAgICBpZiAoY2F0UmVnZXgudGVzdChzdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGUpIHtcbiAgICAgICAgICAgIGxldCBoaWVyTW9kZWw6IEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsID1cbiAgICAgICAgICAgICAgdGhpcy5hZGRUb1BhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCBzdC52YWx1ZSBhcyBDb250cmFjdC5DYXRlZ29yaWNhbFZhbHVlKSBhcyBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbDtcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmhpZXJNb2RlbEFyci5wdXNoKGhpZXJNb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgocmFuZ2VPcHRpb24gYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZSkubWluICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAmJiAocmFuZ2VPcHRpb24gYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZSkubWF4ICE9PSB1bmRlZmluZWQpIHsgLy8gUmFuZ2UgdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgICAgaWYgKHNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGUpIHtcbiAgICAgICAgICAgIGxldCBxdWFudE1vZGVsOiBSYW5nZVNlbGVjdGlvbk1vZGVsID0gdGhpcy5hZGRUb1JhbmdlUGFyYW1zTGlzdChzdC5maWVsZE5hbWUsIHJhbmdlT3B0aW9uKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnF1YW50TW9kZWxBcnIucHVzaChxdWFudE1vZGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWl4ZWRTZWxlY3Rpb25zRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgeyAvLyBEaW1lbnNpb24gdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgICAgaWYgKHNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5EaW1lbnNpb25UeXBlKSB7XG4gICAgICAgICAgICBsZXQgZGltTW9kZWw6IERpbWVuc2lvblNlbGVjdGlvbk1vZGVsID1cbiAgICAgICAgICAgICAgdGhpcy5hZGRUb1BhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCBzdC52YWx1ZSBhcyBDb250cmFjdC5DYXRlZ29yaWNhbFZhbHVlKSBhcyBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbDtcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmRpbU1vZGVsQXJyLnB1c2goZGltTW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWl4ZWRTZWxlY3Rpb25zRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnU2VsZWN0aW9uIENyaXRlcmlhIHBhcnNpbmcgZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYXMgVmFsaWRhdGUgYW5kIGRldGVybWluZSB0aGUgc2VsZWN0aW9uIGNyaXRlcmlhcyB0eXBlLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlbGVjdGlvbkNyaXRlcmlhKHNlbGVjdGlvbkNyaXRlcmlhOiBDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYSk6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSB7XG4gICAgbGV0IHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZTtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHR5cGUgb2Ygc2VsZWN0aW9uLCB0aGlzIGNvbW1hbmQgaXMgYnkgbG9va2luZyBhdCB0aGUgZmlyc3Qgc2VsZWN0aW9uXG4gICAgbGV0IGNyaXQ6IENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhID0gc2VsZWN0aW9uQ3JpdGVyaWE7XG5cbiAgICBsZXQgY2F0UmVnZXggPSBuZXcgUmVnRXhwKCcoXFxbW0EtWmEtejAtOV0rXSkuKicsICdnJyk7XG4gICAgbGV0IHJhbmdlT3B0aW9uOiBDb250cmFjdC5SYW5nZVZhbHVlID0gY3JpdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuXG4gICAgaWYgKGNyaXQuZmllbGROYW1lICYmIChjcml0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgY3JpdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgIGlmIChjYXRSZWdleC50ZXN0KGNyaXQuZmllbGROYW1lKSkgeyAvLyBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuSGllcmFyY2hpY2FsVHlwZTtcbiAgICAgIH0gZWxzZSBpZiAoKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5tYXggIT09IHVuZGVmaW5lZCkgeyAvLyBSYW5nZSB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU7XG4gICAgICB9IGVsc2UgeyAvLyBEaW1lcnNpb24gdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZWxlY3Rpb24gQ3JpdGVyaWEgcGFyc2luZyBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdHJhbnNmb3JtIHRoZSBrZXkgdmFsdWUgcGFpciBpbnRvIHZhbHVlIGJhc2VkIHByZXMgbW9kZWwgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVTZWxlY3Rpb25Nb2RlbFxuICAgKiBAcGFyYW0gZmllbGROYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBhZGRUb1BhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBDb250cmFjdC5DYXRlZ29yaWNhbFZhbHVlKTogVmFsdWVTZWxlY3Rpb25Nb2RlbCB7XG4gICAgbGV0IHZhbHVlU2VsZWN0aW9uTW9kZWw6IFZhbHVlU2VsZWN0aW9uTW9kZWwgPSBuZXcgVmFsdWVTZWxlY3Rpb25Nb2RlbCgpO1xuICAgIGxldCBtYXJrVmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbGV0IHZhbHVlQXJyOiBBcnJheTxzdHJpbmc+ID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcmtWYWx1ZXMucHVzaChQYXJhbS5zZXJpYWxpemVQYXJhbWV0ZXJWYWx1ZSh2YWx1ZUFycltpXSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrVmFsdWVzLnB1c2goUGFyYW0uc2VyaWFsaXplUGFyYW1ldGVyVmFsdWUodmFsdWUpKTtcbiAgICB9XG5cbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnF1YWxpZmllZEZpZWxkQ2FwdGlvbiA9IGZpZWxkTmFtZTtcbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnNlbGVjdFZhbHVlcyA9IG1hcmtWYWx1ZXM7XG4gICAgcmV0dXJuIHZhbHVlU2VsZWN0aW9uTW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHRyYW5zZm9ybSB0aGUga2V5IHZhbHVlIHBhaXIgaW50byByYW5nZSBiYXNlZCBzZWxlY3Rpb24gcHJlcyBtb2RlbC5cbiAgICpcbiAgICogVE9ETzogTmVlZCB0byBoYW5kbGUgdGhlIHBhcnNpbmcgb2YgZGF0ZSB0eXBlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlU2VsZWN0aW9uTW9kZWxcbiAgICogQHBhcmFtIGZpZWxkTmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHByaXZhdGUgYWRkVG9SYW5nZVBhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBDb250cmFjdC5SYW5nZVZhbHVlKTogUmFuZ2VTZWxlY3Rpb25Nb2RlbCB7XG4gICAgbGV0IHJhbmdlU2VsZWN0aW9uTW9kZWw6IFJhbmdlU2VsZWN0aW9uTW9kZWwgPSBuZXcgUmFuZ2VTZWxlY3Rpb25Nb2RlbCgpO1xuICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwucXVhbGlmaWVkRmllbGRDYXB0aW9uID0gZmllbGROYW1lO1xuICAgIGlmICh2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5tYXggIT09IG51bGwpIHtcbiAgICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwubWF4VmFsdWUgPSBQYXJhbS5zZXJpYWxpemVQYXJhbWV0ZXJWYWx1ZSh2YWx1ZS5tYXgpO1xuICAgIH1cbiAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUubWluICE9PSBudWxsKSB7XG4gICAgICByYW5nZVNlbGVjdGlvbk1vZGVsLm1pblZhbHVlID0gUGFyYW0uc2VyaWFsaXplUGFyYW1ldGVyVmFsdWUodmFsdWUubWluKTtcbiAgICB9XG4gICAgcmFuZ2VTZWxlY3Rpb25Nb2RlbC5pbmNsdWRlZCA9IHRoaXMudmFsaWRhdGVOdWxsT3B0aW9uVHlwZSh2YWx1ZS5udWxsT3B0aW9uKTtcbiAgICByZXR1cm4gcmFuZ2VTZWxlY3Rpb25Nb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdmFsaWRhdGUgdGhlIHNlbGVjdGlvbiB1cGRhdGUgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGU6IFNlbGVjdGlvblVwZGF0ZVR5cGUpOiBzdHJpbmcge1xuICAgIGlmIChzZWxlY3Rpb25VcGRhdGVUeXBlID09PSBTZWxlY3Rpb25VcGRhdGVUeXBlLlJlcGxhY2UpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuUmVwbGFjZTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IFNlbGVjdGlvblVwZGF0ZVR5cGUuQWRkKSB7XG4gICAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLkFkZDtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IFNlbGVjdGlvblVwZGF0ZVR5cGUuUmVtb3ZlKSB7XG4gICAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLlJlbW92ZTtcbiAgICB9XG4gICAgcmV0dXJuIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbC5SZXBsYWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgaW5jbHVkZSB0eXBlIGZvciByYW5nZSBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBudWxsT3B0aW9uXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlTnVsbE9wdGlvblR5cGUobnVsbE9wdGlvbjogRmlsdGVyTnVsbE9wdGlvbiB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gICAgaWYgKG51bGxPcHRpb24pIHtcbiAgICAgIGlmIChudWxsT3B0aW9uID09PSBGaWx0ZXJOdWxsT3B0aW9uLk51bGxWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLkluY2x1ZGVOdWxsO1xuICAgICAgfSBlbHNlIGlmIChudWxsT3B0aW9uID09PSBGaWx0ZXJOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLkluY2x1ZGVOb25OdWxsO1xuICAgICAgfSBlbHNlIGlmIChudWxsT3B0aW9uID09PSBGaWx0ZXJOdWxsT3B0aW9uLkFsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZUFsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZUFsbDtcbiAgfVxuXG59XG5cbi8qKlxuICogRW51bSBmb3IgdGhlIGRpZmZlcmVudCBzZWxlY3Rpb24gY3JpdGVyaWEgdHlwZXMuXG4gKi9cbmVudW0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlIHtcbiAgSGllcmFyY2hpY2FsVHlwZSA9IDEsXG4gIFJhbmdlVHlwZSA9IDIsXG4gIERpbWVuc2lvblR5cGUgPSAzLFxuICBUdXBsZXNUeXBlID0gNCxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VsZWN0aW9uU2VydmljZUltcGwudHMiLCIvKipcbiAqIFNlbGVjdGlvbiBNb2RlbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIHF1YWxpZmllZEZpZWxkQ2FwdGlvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIFZhbHVlIGJhc2VkIHNlbGVjdGlvbiBtb2RlbC4gTWVhbnQgZm9yIGhpZXJhcmNoaWNhbCwgcmFuZ2UgYW5kIGNhdGVnb3JpY2FsIHNlbGVjdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIGV4dGVuZHMgU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgc2VsZWN0VmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG59XG5cbi8qKlxuICogSGllcmFyY2hpY2FsIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbn1cblxuLyoqXG4gKiBSYW5nZSBiYXNlZCB2YWx1ZSBzZWxlY3Rpb24gbW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFJhbmdlU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBTZWxlY3Rpb25Nb2RlbCB7XG4gIHB1YmxpYyBtaW5WYWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgbWF4VmFsdWU6IHN0cmluZztcbiAgcHVibGljIGluY2x1ZGVkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGltZW5zaW9uIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbn1cbi8qKlxuICogVHVwbGUgYmFzZWQgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBUdXBsZVNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IHN0cmluZztcbiAgcHVibGljIG9iamVjdElkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xufVxuXG4vKipcbiAqIENvbnRhaW5lciBjbGFzcyB0byBwb3B1bGF0ZSBhbGwgdGhlIHNlbGVjdGlvbiBtb2RlbHMgd2hlbiBwYXJzaW5nIGlucHV0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICBwdWJsaWMgaGllck1vZGVsQXJyOiBBcnJheTxIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIGRpbU1vZGVsQXJyOiBBcnJheTxEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIHF1YW50TW9kZWxBcnI6IEFycmF5PFJhbmdlU2VsZWN0aW9uTW9kZWw+ID0gW107XG4gIHB1YmxpYyBzZWxlY3Rpb246IFR1cGxlU2VsZWN0aW9uTW9kZWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzLnRzIiwiaW1wb3J0IHsgWm9uZVZpc2liaWxpdHlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkT2JqZWN0IH0gZnJvbSAnLi4vLi4vRGFzaGJvYXJkT2JqZWN0JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uLy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRXh0ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJJZCwgVmVyYklkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBab25lU2VydmljZSB9IGZyb20gJy4uL1pvbmVTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFpvbmVTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFpvbmVTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuWm9uZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRWaXNpYmlsaXR5QXN5bmMoXG4gICAgZGFzaGJvYXJkOiBTdHJpbmcsXG4gICAgZGFzaGJvYXJkT2JqZWN0czogQXJyYXk8RGFzaGJvYXJkT2JqZWN0PixcbiAgICB6b25lVmlzaWJpbGl0eU1hcDogTWFwPG51bWJlciwgWm9uZVZpc2liaWxpdHlUeXBlPik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgT2JqZWN0LmtleXMoem9uZVZpc2liaWxpdHlNYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxab25lVmlzaWJpbGl0eVR5cGU+KHpvbmVWaXNpYmlsaXR5TWFwW2tleV0sIFpvbmVWaXNpYmlsaXR5VHlwZSk7XG4gICAgICBFcnJvckhlbHBlcnMudmVyaWZ5Wm9uZUlzVmFsaWQoZGFzaGJvYXJkT2JqZWN0cywgTnVtYmVyLnBhcnNlSW50KGtleSwgMTApKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRGFzaGJvYXJkXTogZGFzaGJvYXJkLFxuICAgICAgW1BhcmFtZXRlcklkLlpvbmVJZHNWaXNpYmlsaXR5TWFwXToge31cbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoem9uZVZpc2liaWxpdHlNYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5ab25lSWRzVmlzaWJpbGl0eU1hcF1ba2V5XSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5zZXRWaXNpYmlsaXR5VHlwZS5jb252ZXJ0KHpvbmVWaXNpYmlsaXR5TWFwW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuU2V0Wm9uZVZpc2liaWxpdHksIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1pvbmVTZXJ2aWNlSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgRGFzaGJvYXJkQ29udGVudCBuYW1lc3BhY2UuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIERhc2hib2FyZENvbnRlbnQgaXNcbiAqIGN1cnJlbnRseSBqdXN0IGEgKHNpbmdsZSkgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udGVudCBpbXBsZW1lbnRzIENvbnRyYWN0LkRhc2hib2FyZENvbnRlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQpIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudC50cyIsImltcG9ydCB7IEV4dGVuc2lvbkNvbnRleHQsIEV4dGVuc2lvbk1vZGUgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbkVudmlyb25tZW50IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyBhcyBFbnVtTWFwcGluZ3MsIEFwaVZlcnNpb24gfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBlbnZpcm9ubWVudCBuYW1lc3BhY2UuXG4gKiBFbnZpcm9ubWVudCBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpc1xuICoganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IGltcGxlbWVudHMgQ29udHJhY3QuRW52aXJvbm1lbnQge1xuICBwcml2YXRlIF9hcGlWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRleHQ6IEV4dGVuc2lvbkNvbnRleHQ7XG4gIHByaXZhdGUgX2xhbmd1YWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlOiBFeHRlbnNpb25Nb2RlO1xuICBwcml2YXRlIF9vcGVyYXRpbmdTeXN0ZW06IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFibGVhdVZlcnNpb246IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXh0ZW5zaW9uRW52aXJvbm1lbnQ6IEV4dGVuc2lvbkVudmlyb25tZW50KSB7XG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IEFwaVZlcnNpb24uSW5zdGFuY2UgJiYgQXBpVmVyc2lvbi5JbnN0YW5jZS5mb3JtYXR0ZWRWYWx1ZTsgLy8gbWFqLm1pbi5maXggKG5vIGJ1aWxkKVxuICAgIHRoaXMuX2NvbnRleHQgPSBFbnVtTWFwcGluZ3MuZXh0ZW5zaW9uQ29udGV4dC5jb252ZXJ0KGV4dGVuc2lvbkVudmlyb25tZW50LmV4dGVuc2lvbkNvbnRleHQpO1xuICAgIHRoaXMuX2xhbmd1YWdlID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTGFuZ3VhZ2U7XG4gICAgdGhpcy5fbG9jYWxlID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTG9jYWxlO1xuICAgIHRoaXMuX21vZGUgPSBFbnVtTWFwcGluZ3MuZXh0ZW5zaW9uTW9kZS5jb252ZXJ0KGV4dGVuc2lvbkVudmlyb25tZW50LmV4dGVuc2lvbk1vZGUpO1xuICAgIHRoaXMuX29wZXJhdGluZ1N5c3RlbSA9IGV4dGVuc2lvbkVudmlyb25tZW50Lm9wZXJhdGluZ1N5c3RlbTtcbiAgICB0aGlzLl90YWJsZWF1VmVyc2lvbiA9IGV4dGVuc2lvbkVudmlyb25tZW50LnRhYmxlYXVWZXJzaW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhcGlWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaVZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbnRleHQoKTogRXh0ZW5zaW9uQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICB9XG5cbiAgcHVibGljIGdldCBsb2NhbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgcHVibGljIGdldCBtb2RlKCk6IEV4dGVuc2lvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgcHVibGljIGdldCBvcGVyYXRpbmdTeXN0ZW0oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW5nU3lzdGVtO1xuICB9XG5cbiAgcHVibGljIGdldCB0YWJsZWF1VmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZWF1VmVyc2lvbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRW52aXJvbm1lbnQudHMiLCJpbXBvcnQge1xuICBJbnRlcm5hbEFwaURpc3BhdGNoZXIsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnkgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2VJbXBsIH0gZnJvbSAnLi9JbXBsL0luaXRpYWxpemF0aW9uU2VydmljZUltcGwnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlSW1wbCB9IGZyb20gJy4vSW1wbC9TZXR0aW5nc1NlcnZpY2VJbXBsJztcbmltcG9ydCB7IFVJU2VydmljZUltcGwgfSBmcm9tICcuL0ltcGwvVUlTZXJ2aWNlSW1wbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyhkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpOiB2b2lkIHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgU2V0dGluZ3NTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFVJU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJJbml0aWFsaXphdGlvbkV4dGVuc2lvbnNTZXJ2aWNlcyhkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpOiB2b2lkIHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMudHMiLCJpbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEluaXRpYWxpemF0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5Jbml0aWFsaXphdGlvblNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURhc2hib2FyZEV4dGVuc2lvbnNBc3luYyhpc0V4dGVuc2lvbkRpYWxvZzogYm9vbGVhbiwgY29udGV4dE1lbnVJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxFeHRlbnNpb25Cb290c3RyYXBJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25Db250ZXh0TWVudUlkc106IGNvbnRleHRNZW51SWRzLFxuICAgICAgW1BhcmFtZXRlcklkLklzRXh0ZW5zaW9uRGlhbG9nXTogaXNFeHRlbnNpb25EaWFsb2dcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuSW5pdGlhbGl6ZUV4dGVuc2lvbiwgcGFyYW1zKS50aGVuPEV4dGVuc2lvbkJvb3RzdHJhcEluZm8+KHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFRPRE8gLSBWYWxpZGF0ZSByZXR1cm4gdmFsdWVcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEV4dGVuc2lvbkJvb3RzdHJhcEluZm87XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb2xsZWN0aW9uLCBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9TZXR0aW5nc1NlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNldHRpbmdzU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgc2F2ZVNldHRpbmdzQXN5bmMoc2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbik6IFByb21pc2U8U2V0dGluZ3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5TZXR0aW5nc1ZhbHVlc106IHNldHRpbmdzIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TYXZlRXh0ZW5zaW9uU2V0dGluZ3MsIHBhcmFtZXRlcnMpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPih2YWx1ZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5yZXN1bHQgYXMgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvO1xuXG4gICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnNldHRpbmdzVmFsdWVzKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnVW5leHBlY3RlZCBlcnJvciBzYXZpbmdzIHNldHRpbmdzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKHJlc3VsdC5zZXR0aW5nc1ZhbHVlcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuaW1wb3J0IHsgRGlhbG9nT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UsIFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4uL1VJU2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfRElBTE9HX0hFSUdIVDogbnVtYmVyID0gNDAwOyAvLyBpbiBwaXhlbHNcbmNvbnN0IERFRkFVTFRfRElBTE9HX1dJRFRIOiBudW1iZXIgPSA2MDA7IC8vIGluIHBpeGVsc1xuXG5leHBvcnQgY2xhc3MgVUlTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFVJU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5VSVNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheURpYWxvZ0FzeW5jKHVybDogc3RyaW5nLCBwYXlsb2FkOiBzdHJpbmcsIG9wdGlvbnM/OiBEaWFsb2dPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1VybF06IHVybCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dQYXlsb2FkXTogcGF5bG9hZFxuICAgIH07XG5cbiAgICBjb25zdCBoOiBudW1iZXIgPSAoKG9wdGlvbnMpICYmIChvcHRpb25zLmhlaWdodCkpID8gb3B0aW9ucy5oZWlnaHQgOiBERUZBVUxUX0RJQUxPR19IRUlHSFQ7XG4gICAgY29uc3QgdzogbnVtYmVyID0gKChvcHRpb25zKSAmJiAob3B0aW9ucy53aWR0aCkpID8gb3B0aW9ucy53aWR0aCA6IERFRkFVTFRfRElBTE9HX1dJRFRIO1xuXG4gICAgLy8gT24gdGhlIHBsYXRmb3JtIHNpZGUsIHdlIGRvIHNvbWV0aGluZyByZWFzb25hYmxlIHJlZ2FyZGVzcyBvZiB3aGV0aGVyIHRoZSBwYXNzZWRcbiAgICAvLyBoZWlnaHQgYW5kIHdpZHRoIGFyZSB0b28gbGFyZ2Ugb3IgdG9vIHNtYWxsLiAgQnV0IHRoaXMgbGlrZWx5IGluZGljYXRlcyBhIGRldmVsb3BlciBlcnJvcixcbiAgICAvLyBzbyB3ZSB0aHJvdyBhbiBlcnJvciBoZXJlIHRvIGhlbHAgd2l0aCBkZWJ1Z2dpbmcuXG4gICAgaWYgKGggPD0gMCB8fCB3IDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnU2l6ZSBwYXJhbWV0ZXJzIGZvciBkaXNwbGF5RGlhbG9nQXN5bmMgbXVzdCBiZSBwb3NpdGl2ZScpO1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nSF0gPSBoO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nV10gPSB3O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuRGlzcGxheURpYWxvZywgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkaWFsb2dSZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0O1xuICAgICAgc3dpdGNoIChkaWFsb2dSZXN1bHQpIHtcbiAgICAgICAgY2FzZSBFeHRlbnNpb25EaWFsb2dSZXN1bHQuRGlhbG9nQWxyZWFkeU9wZW46XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkRpYWxvZ0FscmVhZHlPcGVuLCAnVGhlcmUgYWxyZWFkeSBleGlzdHMgYW4gb3BlbiBkaWFsb2cgZm9yIHRoaXMgZXh0ZW5zaW9uLicpO1xuICAgICAgICBjYXNlIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdC5JbnZhbGlkRG9tYWluOlxuICAgICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkRG9tYWluRGlhbG9nLFxuICAgICAgICAgICAgJ1RoZSB1cmwgb2YgYW4gZXh0ZW5zaW9uIGRpYWxvZyBtdXN0IG1hdGNoIHRoZSBkb21haW4gb2YgdGhlIHBhcmVudCBleHRlbnNpb24uJyk7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFN1Y2Nlc3MgY2FzZVxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZyhwYXlsb2FkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0gKHBheWxvYWQpID8geyBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nUGF5bG9hZF06IHBheWxvYWQgfSA6IHt9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuQ2xvc2VEaWFsb2csIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9VSVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgU2V0dGluZ3MgYXMgU2V0dGluZ3NDb250cmFjdCB9IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgU2V0dGluZ3NJbXBsIH0gZnJvbSAnLi4vSW1wbC9TZXR0aW5nc0ltcGwnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb2xsZWN0aW9uIH0gZnJvbSAnLi4vU2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgc2V0dGluZ3MgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIFNldHRpbmdzQ29udHJhY3Qge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2V0dGluZ3NJbXBsOiBTZXR0aW5nc0ltcGwpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBvdXIgZXZlbnQgaGFuZGxpbmcgZm9yIHRoaXMgY2xhc3NcbiAgICB0aGlzLl9zZXR0aW5nc0ltcGwuaW5pdGlhbGl6ZUV2ZW50cygpLmZvckVhY2goZSA9PiB0aGlzLmFkZE5ld0V2ZW50VHlwZShlKSk7XG4gIH1cblxuICBwdWJsaWMgZXJhc2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXR0aW5nc0ltcGwuZXJhc2Uoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuZ2V0KGtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5nZXRBbGwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNb2RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLmlzTW9kaWZpZWQ7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUFzeW5jKCk6IFByb21pc2U8U2V0dGluZ3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5zYXZlQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXR0aW5nc0ltcGwuc2V0KGtleSwgdmFsdWUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9TZXR0aW5ncy50cyIsImltcG9ydCB7IFRhYmxlYXVFdmVudFR5cGUsIEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvblNldHRpbmdzSW5mbywgTm90aWZpY2F0aW9uSWQsIFNldHRpbmdzRXZlbnQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIEVycm9ySGVscGVycyxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBTaW5nbGVFdmVudE1hbmFnZXIsXG4gIFNpbmdsZUV2ZW50TWFuYWdlckltcGwsXG4gIFRhYmxlYXVFcnJvcixcbiAgVGFibGVhdUV2ZW50XG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlJztcblxuY2xhc3MgU2V0dGluZ3NDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5TZXR0aW5nc0NoYW5nZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZXdTZXR0aW5nczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKFRhYmxlYXVFdmVudFR5cGUuU2V0dGluZ3NDaGFuZ2VkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3U2V0dGluZ3MoKTogU2V0dGluZ3NDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fbmV3U2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW1wbCB7XG4gIHByaXZhdGUgc3RhdGljIEFTWU5DX1NBVkVfSU5fUFJPR1JFU1M6IHN0cmluZyA9ICdBc3luYyBTYXZlIGlzIGluIHByb2dyZXNzLCB1cGRhdGluZyBzZXR0aW5ncyBpcyBub3QgYWxsb3dlZC4nO1xuICBwcml2YXRlIF9pc01vZGlmaWVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jdXJyZW50U2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbjtcblxuICAvLyBTaW5jZSBwcm9taXNlcyBjYW4ndCBiZSBpbnRyb3NwZWN0ZWQgZm9yIHN0YXRlLCBrZWVwIGEgdmFyaWFibGUgdGhhdFxuICAvLyBpbmRpY2F0ZXMgYSBzYXZlIGlzIGluIHByb2dyZXNzLCBzbyB0aGF0IHNldC9lcmFzZSBjYW4ndCBiZSBjYWxsZWQgZHVyaW5nIGEgc2F2ZS5cbiAgcHJpdmF0ZSBfc2F2ZUluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pIHtcbiAgICB0aGlzLmluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm8pO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihrZXksICdrZXknKTtcblxuICAgIC8vIE9ubHkgbWFrZSBhIG1vZGlmaWNhdGlvbiBpZiB3ZSBoYXZlIHRoZSBrZXkgYWxyZWFkeVxuICAgIGlmICh0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSkge1xuICAgICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XTtcbiAgICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoa2V5LCAna2V5Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFNldHRpbmdzW2tleV07XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgLy8gUmV0dXJucyBhIG11dGFibGUgY29weSBvZiB0aGUgc2V0dGluZ3NcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNb2RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb2RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlQXN5bmMoKTogUHJvbWlzZTxTZXR0aW5nc0NvbGxlY3Rpb24+IHtcbiAgICB0aGlzLnZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTtcblxuICAgIC8vIEp1c3QgcmVzb2x2ZSBpbW1lZGlhdGVseSBpZiBzZXR0aW5ncyBhcmUgdW5jaGFuZ2VkXG4gICAgaWYgKCF0aGlzLl9pc01vZGlmaWVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlPFNldHRpbmdzQ29sbGVjdGlvbj4odGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICAvLyBVc2UgdGhlIHNldHRpbmdzIHNlcnZpY2UgdG8gc2F2ZSBzZXR0aW5ncyB0byB0d2JcbiAgICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZXR0aW5nc1NlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNldHRpbmdzU2VydmljZS5zYXZlU2V0dGluZ3NBc3luYyh0aGlzLl9jdXJyZW50U2V0dGluZ3MpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPihuZXdTZXR0aW5ncyA9PiB7XG4gICAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNNb2RpZmllZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IG5ld1NldHRpbmdzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jdXJyZW50U2V0dGluZ3MsIG5ld1NldHRpbmdzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdTZXR0aW5ncztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5U3RyaW5nUGFyYW1ldGVyKGtleSwgJ2tleScpOyAvLyBLZXkgc2hvdWxkbid0IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHZhbHVlLCAndmFsdWUnKTsgLy8gRW1wdHkgc3RyaW5nIHZhbHVlIGlzIGFsbG93ZWQuXG4gICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFsbCBldmVudHMgcmVsZXZhbnQgdG8gc2V0dGluZ3Mgb2JqZWN0LiAgVGhpcyBpcyBvbmx5IGEgc2V0dGluZ3NVcGRhdGUgZXZlbnQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoKTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5nc0NoYW5nZWRFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPFNldHRpbmdzQ2hhbmdlZEV2ZW50PihUYWJsZWF1RXZlbnRUeXBlLlNldHRpbmdzQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2V0dGluZ3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIChldmVudDogU2V0dGluZ3NFdmVudCkgPT4ge1xuICAgICAgdGhpcy5fY3VycmVudFNldHRpbmdzID0gZXZlbnQubmV3U2V0dGluZ3M7XG4gICAgICBzZXR0aW5nc0NoYW5nZWRFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFNldHRpbmdzQ2hhbmdlZEV2ZW50KGV2ZW50Lm5ld1NldHRpbmdzKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2goc2V0dGluZ3NDaGFuZ2VkRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2V0dGluZ3NJbmZvLCAnc2V0dGluZ3NJbmZvJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZXR0aW5nc0luZm8uc2V0dGluZ3NWYWx1ZXMsICdzZXR0aW5nc0luZm8uU2V0dGluZ3NWYWx1ZXMnKTtcblxuICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IHNldHRpbmdzSW5mby5zZXR0aW5nc1ZhbHVlcztcblxuICAgIC8vIFJlc2V0IHRoZSBpc01vZGlmaWVkIGZsYWdcbiAgICB0aGlzLl9pc01vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoZWxwZXIgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgYW55IGxvY2FsIHVwZGF0ZSB0byB0aGlzLmN1cnJlbnRTZXR0aW5ncy5cbiAgICogQ2hlY2tzIGlmIGEgY3VycmVudCBzYXZlIGNhbGwgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MgYW5kIHRocm93cyBhbiBlcnJvciBpZiBzby5cbiAgICovXG4gIHByaXZhdGUgdmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2F2ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5TZXR0aW5nU2F2ZUluUHJvZ3Jlc3MsIFNldHRpbmdzSW1wbC5BU1lOQ19TQVZFX0lOX1BST0dSRVNTKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVUlJbXBsIH0gZnJvbSAnLi4vSW1wbC9VSUltcGwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBVSSBuYW1lc3BhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBVSSBpbXBsZW1lbnRzIENvbnRyYWN0LlVJIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ltcGw6IFVJSW1wbCkgeyB9XG5cbiAgcHVibGljIGRpc3BsYXlEaWFsb2dBc3luYyh1cmw6IHN0cmluZywgcGF5bG9hZD86IHN0cmluZywgb3B0aW9ucz86IENvbnRyYWN0LkRpYWxvZ09wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9pbXBsLmRpc3BsYXlEaWFsb2dBc3luYyh1cmwsIHBheWxvYWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKHBheWxvYWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9pbXBsLmNsb3NlRGlhbG9nKHBheWxvYWQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9VSS50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IERpYWxvZ1VwZGF0ZUV2ZW50LCBOb3RpZmljYXRpb25JZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gIFNlcnZpY2VOYW1lcyxcbiAgVGFibGVhdUVycm9yXG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1VJU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBVSUltcGwge1xuICBwdWJsaWMgZGlzcGxheURpYWxvZ0FzeW5jKHVybDogc3RyaW5nLCBwYXlsb2FkPzogc3RyaW5nLCBvcHRpb25zPzogQ29udHJhY3QuRGlhbG9nT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdWlTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8VUlTZXJ2aWNlPihFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZSk7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHVpU2VydmljZS5kaXNwbGF5RGlhbG9nQXN5bmModXJsLCBwYXlsb2FkIHx8ICcnLCBvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgdW5yZWdpc3RlckZuID0gbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuRXh0ZW5zaW9uRGlhbG9nVXBkYXRlLCAobW9kZWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gTGV0IHRocm91Z2ggYW55IGRpYWxvZyB1cGRhdGUgZXZlbnRcbiAgICAgICAgfSwgKGV2ZW50OiBEaWFsb2dVcGRhdGVFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5pc0Nsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuY2xvc2VQYXlsb2FkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5EaWFsb2dDbG9zZWRCeVVzZXIsICdFeHRlbnNpb24gZGlhbG9nIGNsb3NlZCBieSB1c2VyLicpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bnJlZ2lzdGVyRm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKHBheWxvYWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1aVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxVSVNlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5VSVNlcnZpY2UpO1xuXG4gICAgdWlTZXJ2aWNlLmNsb3NlRGlhbG9nKHBheWxvYWQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9VSUltcGwudHMiLCJpbXBvcnQge1xuICBDcmVhdGVFeHRlcm5hbENvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyLFxuICBJTlRFUk5BTF9DT05UUkFDVF9WRVJTSU9OLFxuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXhlY3V0ZVJlc3BvbnNlLFxuICBFeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcixcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxuICBOb3RpZmljYXRpb24sXG4gIE5vdGlmaWNhdGlvbkhhbmRsZXIsXG4gIFZlcmJJZCxcbiAgVmVyc2lvbkxlc3NUaGFuLFxuICBWZXJzaW9uTnVtYmVyXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIEludGVybmFsQXBpRGlzcGF0Y2hlciB3aGljaCBzdXBwb3J0cyB1cGdyYWRpbmcgYW5kIGRvd25ncmFkaW5nIHRoZSBpbnB1dFxuICogaW50ZXJuYWwgY29udHJhY3QgdG8gdGhlIHZlcnNpb24gdGhhdCB0aGlzIG1vZHVsZSBpcyBidWlsdCBhZ2FpbnN0XG4gKlxuICogQGNsYXNzIFZlcnNpb25lZEV4dGVybmFsQXBpRGlzcGF0Y2hlclxuICogQGltcGxlbWVudHMge0ludGVybmFsQXBpRGlzcGF0Y2hlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFZlcnNpb25lZEV4dGVybmFsQXBpRGlzcGF0Y2hlciBpbXBsZW1lbnRzIEludGVybmFsQXBpRGlzcGF0Y2hlciB7XG4gIHByaXZhdGUgX3ZlcnNpb25Db252ZXJ0ZXI6IEV4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyO1xuICBwcml2YXRlIF9ub3RpZmljYXRpb25IYW5kbGVyczogQXJyYXk8Tm90aWZpY2F0aW9uSGFuZGxlcj47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFZlcnNpb25lZEV4dGVybmFsQXBpRGlzcGF0Y2hlclxuICAgKiBXZSBoYXZlIG11bHRpcGxlIHZlcnNpb24gY29udmVydGluZyBkaXNwYXRjaGVycyB0aGF0IHdvcmsgdG9nZXRoZXIuXG4gICAqIElmIG5lZWRlZCwgdGhlIFZlcnNpb25lZEV4dGVybmFsQXBpRGlzcGF0Y2hlciB3cmFwcyBlaXRoZXIgdGhlIEludGVybmFsQXBpRGlzcGF0Y2hlciAoZGVza3RvcClcbiAgICogb3IgdGhlIENyb3NzRnJhbWVEaXNwYXRjaGVyIChzZXJ2ZXIpLlxuICAgKiBUaGUgSW50ZXJuYWwvQ3Jvc3NGcmFtZSBkaXNwYXRjaGVycyBoYW5kbGUgYW4gdXBkYXRlZCBwbGF0Zm9ybSB3aXRoIGFuIG9sZGVyIGV4dGVybmFsIGxpYnJhcnkuXG4gICAqIChUaGUgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgc2VuZHMgbWVzc2FnZXMgYWNyb3NzIHRoZSBmcmFtZSwgYW5kIGl0IGlzIGhhbmRsZWQgYnkgdGhlIFByZXNMYXllckhhbmRsZXIuKVxuICAgKiBNZWFud2hpbGUsIHRoZSBWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXIgaGFuZGxlcyBhbiB1cGRhdGVkIGV4dGVybmFsIGxpYnJhcnkgd2l0aCBhbiBvbGRlciBwbGF0Zm9ybS5cblxuICAgKiBAcGFyYW0gX2FwaURlbGVnYXRlRGlzcGF0Y2hlciBUaGUgZGVsZWdhdGUgdGhhdCBkb2VzIHRoZSBhY3R1YWwgd29yay5cbiAgICogQHBhcmFtIHBsYXRmb3JtVmVyc2lvbk51bWJlciBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3Qgd2hpY2ggdGhlIHBsYXRmb3JtIG1vZHVsZSBpcyB1c2luZy5cbiAgICogVGhpcyBudW1iZXIgd2lsbCBiZSB1c2VkIHRvIGZpZ3VyZSBvdXQgaG93IHRvIGRvd25ncmFkZSBpbmNvbWluZyBjb21tYW5kcyBhbmQgdXBncmFkZSB0aGUgcmVzdWx0c1xuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2FwaURlbGVnYXRlRGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxuICAgIHBsYXRmb3JtVmVyc2lvbk51bWJlcjogVmVyc2lvbk51bWJlcikge1xuXG4gICAgdGhpcy5fdmVyc2lvbkNvbnZlcnRlciA9IENyZWF0ZUV4dGVybmFsQ29tcGF0aWJsZVZlcnNpb25Db252ZXJ0ZXIoSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTiwgcGxhdGZvcm1WZXJzaW9uTnVtYmVyKTtcblxuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzID0gW107XG4gICAgX2FwaURlbGVnYXRlRGlzcGF0Y2hlci5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVwZ3JhZGVkTm90aWZpY2F0aW9uID0gdGhpcy5fdmVyc2lvbkNvbnZlcnRlci51cGdyYWRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICBoYW5kbGVyKHVwZ3JhZGVkTm90aWZpY2F0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBuZWVkc1ZlcnNpb25Db252ZXJ0ZXIocGxhdGZvcm1WZXJzaW9uOiBWZXJzaW9uTnVtYmVyKTogYm9vbGVhbiB7XG4gICAgLy8gSWYgb3VyIHBsYXRmb3JtIGlzIGxlc3MgdGhhbiBleHRlcm5hbCBsaWJyYXJ5IHZlcnNpb24sIHRoZW4gd2UgbmVlZCBhIGNvbnZlcnRlclxuICAgIHJldHVybiBWZXJzaW9uTGVzc1RoYW4ocGxhdGZvcm1WZXJzaW9uLCBJTlRFUk5BTF9DT05UUkFDVF9WRVJTSU9OKTtcbiAgfVxuXG4gIHB1YmxpYyBleGVjdXRlKHZlcmI6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRvd25ncmFkZVBhcmFtZXRlcnMgPSB0aGlzLl92ZXJzaW9uQ29udmVydGVyLmRvd25ncmFkZUV4ZWN1dGVDYWxsKHZlcmIsIHBhcmFtZXRlcnMpO1xuICAgIHJldHVybiB0aGlzLl9hcGlEZWxlZ2F0ZURpc3BhdGNoZXIuZXhlY3V0ZShkb3duZ3JhZGVQYXJhbWV0ZXJzLnZlcmIsIGRvd25ncmFkZVBhcmFtZXRlcnMucGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCB1cGdyYWRlUmVzcG9uc2UgPSB0aGlzLl92ZXJzaW9uQ29udmVydGVyLnVwZ3JhZGVFeGVjdXRlUmV0dXJuKHJlc3BvbnNlKTtcbiAgICAgIHJldHVybiB1cGdyYWRlUmVzcG9uc2U7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHVucmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycyA9IHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzLmZpbHRlcihoID0+IGggIT09IGhhbmRsZXIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL1ZlcnNpb25lZEV4dGVybmFsQXBpRGlzcGF0Y2hlci50cyIsImltcG9ydCB7XG4gIEluaXRpYWxpemF0aW9uT3B0aW9ucyxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSxcbiAgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTixcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogTGVnYWN5SW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyIGhhcyBiZWVuIG1vdmVkIChhbmQgcmVuYW1lZCkgZnJvbSBhcGktaW50ZXJuYWwtY29udHJhY3QuXG4gKiBJdCBzdXBwb3J0cyBydW5uaW5nIGEgbmV3ZXIgZXh0ZXJuYWwgbGlicmFyeSBhZ2FpbnN0IGEgcHJlIDIwMTkuMyBkZXNrdG9wLlxuICogU3RhcnRpbmcgaW4gMjAxOS4zLCB3ZSBoYXZlIGEgbWVyZ2VkIGJvb3RzdHJhcCBzdHlsZSBmb3IgYm90aCBkZXNrdG9wIGFuZCBzZXJ2ZXIuXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgbmFtZXNwYWNlIExlZ2FjeUludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZShvcHRpb25zPzogSW5pdGlhbGl6YXRpb25PcHRpb25zKTogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucy5pc0FscGhhID09PSAndW5kZWZpbmVkJykgJiYgIXdpbmRvdy5fX3dhcm5pbmdJc3N1ZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oJ1RoaXMgaXMgYW4gYWxwaGEgdmVyc2lvbiBvZiB0aGUgRXh0ZW5zaW9ucyBBUEkuIFBsZWFzZSB1cGdyYWRlIHRvIGFuIG9mZmljaWFsIHJlbGVhc2UuJyk7XG4gICAgICB3aW5kb3cuX193YXJuaW5nSXNzdWVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pc0FscGhhISAmJiB3aW5kb3cuX19wbGF0Zm9ybUlzT2ZmaWNpYWxSZWxlYXNlKSB7XG4gICAgICB3aW5kb3cuX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXIudGhlbigoZGlzcGF0Y2hlckZhY3RvcnkpID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXJGYWN0b3J5KElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04pO1xuICAgICAgICBkaXNwYXRjaGVyLmV4ZWN1dGUoVmVyYklkLkJsb2NrRXh0ZW5zaW9uLCB7fSkuY2F0Y2goKTtcbiAgICAgIH0pLmNhdGNoKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyB3aWxsIGJlIHVuZGVmaW5lZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkIG9yIHRocm93c1xuICAgIHJldHVybiB3aW5kb3cuX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBoYXNEZXNrdG9wQXBpRGlzcGF0Y2hlclByb21pc2Uob3B0aW9ucz86IEluaXRpYWxpemF0aW9uT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWdldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZShvcHRpb25zKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fdGFibGVhdURlc2t0b3BEaXNwYXRjaGVyOiBQcm9taXNlPEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+O1xuICAgIF9fcGxhdGZvcm1Jc09mZmljaWFsUmVsZWFzZTogYm9vbGVhbjtcbiAgICBfX3dhcm5pbmdJc3N1ZWQ6IGJvb2xlYW47XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvTGVnYWN5SW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBDYWxsYmFja01hcCwgRXh0ZW5zaW9uc0ltcGwgfSBmcm9tICcuLi9JbXBsL0V4dGVuc2lvbnNJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgRXh0ZW5zaW9ucyBuYW1lc3BhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb25zIGltcGxlbWVudHMgQ29udHJhY3QuRXh0ZW5zaW9ucyB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4dGVuc2lvbkltcGw6IEV4dGVuc2lvbnNJbXBsKSB7XG4gICAgdGhpcy5leHRlbnNpb25JbXBsID0gZXh0ZW5zaW9uSW1wbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkQ29udGVudCgpOiBDb250cmFjdC5EYXNoYm9hcmRDb250ZW50IHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLmRhc2hib2FyZENvbnRlbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50KCk6IENvbnRyYWN0LkVudmlyb25tZW50IHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLmVudmlyb25tZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBzZXR0aW5ncygpOiBDb250cmFjdC5TZXR0aW5ncyB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5zZXR0aW5ncztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdWkoKTogQ29udHJhY3QuVUkge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwudWk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUFzeW5jKGNvbnRleHRNZW51Q2FsbGJhY2tzPzogQ2FsbGJhY2tNYXApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLmluaXRpYWxpemVBc3luYyhmYWxzZSwgY29udGV4dE1lbnVDYWxsYmFja3MpLnRoZW48dm9pZD4oKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplRGlhbG9nQXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLmluaXRpYWxpemVBc3luYyh0cnVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRXh0ZW5zaW9ucy50cyJdLCJzb3VyY2VSb290IjoiIn0=