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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file re-exports everything which is part of the shared embedding api public interface
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(28));


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
__export(__webpack_require__(29));
__export(__webpack_require__(30));
__export(__webpack_require__(31));
__export(__webpack_require__(32));
__export(__webpack_require__(33));
__export(__webpack_require__(34));
// These are the exports from the messaging stuff
__export(__webpack_require__(37));
__export(__webpack_require__(9));
// Export a hardcoded version of the internal contract. This should match what's in package.json.
// Normally, we'd use some sort of webpack replacement to inject this into code, but that doesn't
// work with the module-dev-scripts and this isn't too much work.
// If you forget to keep this in sync with package.json, a test will fail so we should be ok.
exports.INTERNAL_CONTRACT_VERSION = {
    major: 1,
    minor: 4,
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

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Export everything which had been previously in the api-shared module
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Dashboard_1 = __webpack_require__(40);
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(10);
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(2);
exports.TableauError = TableauError_1.TableauError;
var VersionNumber_1 = __webpack_require__(41);
exports.VersionNumber = VersionNumber_1.VersionNumber;
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(17);
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(11);
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(42);
exports.DashboardImpl = DashboardImpl_1.DashboardImpl;
var ServiceImplBase_1 = __webpack_require__(8);
exports.ServiceImplBase = ServiceImplBase_1.ServiceImplBase;
var ErrorHelpers_1 = __webpack_require__(5);
exports.ErrorHelpers = ErrorHelpers_1.ErrorHelpers;
__export(__webpack_require__(53));
__export(__webpack_require__(55));
__export(__webpack_require__(4));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
var ServiceRegistryImpl = /** @class */ (function () {
    function ServiceRegistryImpl() {
        this._services = {};
    }
    ServiceRegistryImpl.prototype.registerService = function (service) {
        this._services[service.serviceName] = service;
    };
    ServiceRegistryImpl.prototype.getService = function (serviceName) {
        if (!this._services.hasOwnProperty(serviceName)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Service not registered: " + serviceName);
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
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, 'Service registry failed');
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var Param_1 = __webpack_require__(12);
var TableauError_1 = __webpack_require__(2);
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
        return new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, apiName + " API not yet implemented.");
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
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, argumentValue + " is invalid value for: " + argumentName);
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
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
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
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
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
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, enumValue + " is invalid value for enum: " + enumType);
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
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, at least one of min or max is required.');
        }
        if (min && !Param_1.Param.isTypeNumber(min) && !Param_1.Param.isTypeDate(min)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter min.');
        }
        if (max && !Param_1.Param.isTypeNumber(max) && !Param_1.Param.isTypeDate(max)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter max.');
        }
        if (min && max && typeof (min) !== typeof (max)) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, parameters min and max should be of the same type.');
        }
    };
    return ErrorHelpers;
}());
exports.ErrorHelpers = ErrorHelpers;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file re-exports everything which is part of the extensions api public interface
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Export everything from the shared file
__export(__webpack_require__(0));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var EnumConverter_1 = __webpack_require__(16);
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the internal-api-contract to the enums used
 * in the external-api-contract, which developers code against.
 */
var InternalToExternalEnumMappings = /** @class */ (function () {
    function InternalToExternalEnumMappings() {
    }
    InternalToExternalEnumMappings.extensionContext = new EnumConverter_1.EnumConverter((_a = {},
        _a[api_internal_contract_js_1.ExtensionContext.Desktop] = SharedApiExternalContract_1.ExtensionContext.Desktop,
        _a[api_internal_contract_js_1.ExtensionContext.Server] = SharedApiExternalContract_1.ExtensionContext.Server,
        _a));
    InternalToExternalEnumMappings.extensionMode = new EnumConverter_1.EnumConverter((_b = {},
        _b[api_internal_contract_js_1.ExtensionMode.Authoring] = SharedApiExternalContract_1.ExtensionMode.Authoring,
        _b[api_internal_contract_js_1.ExtensionMode.Viewing] = SharedApiExternalContract_1.ExtensionMode.Viewing,
        _b));
    InternalToExternalEnumMappings.columnType = new EnumConverter_1.EnumConverter((_c = {},
        _c[api_internal_contract_js_1.ColumnType.Continuous] = SharedApiExternalContract_1.ColumnType.Continuous,
        _c[api_internal_contract_js_1.ColumnType.Discrete] = SharedApiExternalContract_1.ColumnType.Discrete,
        _c));
    InternalToExternalEnumMappings.fieldAggregationType = new EnumConverter_1.EnumConverter((_d = {},
        _d[api_internal_contract_js_1.FieldAggregationType.Attr] = SharedApiExternalContract_1.FieldAggregationType.Attr,
        _d[api_internal_contract_js_1.FieldAggregationType.Avg] = SharedApiExternalContract_1.FieldAggregationType.Avg,
        _d[api_internal_contract_js_1.FieldAggregationType.Count] = SharedApiExternalContract_1.FieldAggregationType.Count,
        _d[api_internal_contract_js_1.FieldAggregationType.Countd] = SharedApiExternalContract_1.FieldAggregationType.Countd,
        _d[api_internal_contract_js_1.FieldAggregationType.Day] = SharedApiExternalContract_1.FieldAggregationType.Day,
        _d[api_internal_contract_js_1.FieldAggregationType.End] = SharedApiExternalContract_1.FieldAggregationType.End,
        _d[api_internal_contract_js_1.FieldAggregationType.Hour] = SharedApiExternalContract_1.FieldAggregationType.Hour,
        _d[api_internal_contract_js_1.FieldAggregationType.InOut] = SharedApiExternalContract_1.FieldAggregationType.InOut,
        _d[api_internal_contract_js_1.FieldAggregationType.Kurtosis] = SharedApiExternalContract_1.FieldAggregationType.Kurtosis,
        _d[api_internal_contract_js_1.FieldAggregationType.Max] = SharedApiExternalContract_1.FieldAggregationType.Max,
        _d[api_internal_contract_js_1.FieldAggregationType.Mdy] = SharedApiExternalContract_1.FieldAggregationType.Mdy,
        _d[api_internal_contract_js_1.FieldAggregationType.Median] = SharedApiExternalContract_1.FieldAggregationType.Median,
        _d[api_internal_contract_js_1.FieldAggregationType.Min] = SharedApiExternalContract_1.FieldAggregationType.Min,
        _d[api_internal_contract_js_1.FieldAggregationType.Minute] = SharedApiExternalContract_1.FieldAggregationType.Minute,
        _d[api_internal_contract_js_1.FieldAggregationType.MonthYear] = SharedApiExternalContract_1.FieldAggregationType.MonthYear,
        _d[api_internal_contract_js_1.FieldAggregationType.None] = SharedApiExternalContract_1.FieldAggregationType.None,
        _d[api_internal_contract_js_1.FieldAggregationType.Qtr] = SharedApiExternalContract_1.FieldAggregationType.Qtr,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart1] = SharedApiExternalContract_1.FieldAggregationType.Quart1,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart3] = SharedApiExternalContract_1.FieldAggregationType.Quart3,
        _d[api_internal_contract_js_1.FieldAggregationType.Second] = SharedApiExternalContract_1.FieldAggregationType.Second,
        _d[api_internal_contract_js_1.FieldAggregationType.Skewness] = SharedApiExternalContract_1.FieldAggregationType.Skewness,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdev] = SharedApiExternalContract_1.FieldAggregationType.Stdev,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdevp] = SharedApiExternalContract_1.FieldAggregationType.Stdevp,
        _d[api_internal_contract_js_1.FieldAggregationType.Sum] = SharedApiExternalContract_1.FieldAggregationType.Sum,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncDay] = SharedApiExternalContract_1.FieldAggregationType.TruncDay,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncHour] = SharedApiExternalContract_1.FieldAggregationType.TruncHour,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMinute] = SharedApiExternalContract_1.FieldAggregationType.TruncMinute,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMonth] = SharedApiExternalContract_1.FieldAggregationType.TruncMonth,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncQtr] = SharedApiExternalContract_1.FieldAggregationType.TruncQtr,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncSecond] = SharedApiExternalContract_1.FieldAggregationType.TruncSecond,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncWeek] = SharedApiExternalContract_1.FieldAggregationType.TruncWeek,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncYear] = SharedApiExternalContract_1.FieldAggregationType.TruncYear,
        _d[api_internal_contract_js_1.FieldAggregationType.User] = SharedApiExternalContract_1.FieldAggregationType.User,
        _d[api_internal_contract_js_1.FieldAggregationType.Var] = SharedApiExternalContract_1.FieldAggregationType.Var,
        _d[api_internal_contract_js_1.FieldAggregationType.Varp] = SharedApiExternalContract_1.FieldAggregationType.Varp,
        _d[api_internal_contract_js_1.FieldAggregationType.Week] = SharedApiExternalContract_1.FieldAggregationType.Week,
        _d[api_internal_contract_js_1.FieldAggregationType.Weekday] = SharedApiExternalContract_1.FieldAggregationType.Weekday,
        _d[api_internal_contract_js_1.FieldAggregationType.Year] = SharedApiExternalContract_1.FieldAggregationType.Year,
        _d));
    InternalToExternalEnumMappings.fieldRoleType = new EnumConverter_1.EnumConverter((_e = {},
        _e[api_internal_contract_js_1.FieldRoleType.Dimension] = SharedApiExternalContract_1.FieldRoleType.Dimension,
        _e[api_internal_contract_js_1.FieldRoleType.Measure] = SharedApiExternalContract_1.FieldRoleType.Measure,
        _e[api_internal_contract_js_1.FieldRoleType.Unknown] = SharedApiExternalContract_1.FieldRoleType.Unknown,
        _e));
    InternalToExternalEnumMappings.sheetType = new EnumConverter_1.EnumConverter((_f = {},
        _f[api_internal_contract_js_1.SheetType.Dashboard] = SharedApiExternalContract_1.SheetType.Dashboard,
        _f[api_internal_contract_js_1.SheetType.Story] = SharedApiExternalContract_1.SheetType.Story,
        _f[api_internal_contract_js_1.SheetType.Worksheet] = SharedApiExternalContract_1.SheetType.Worksheet,
        _f));
    InternalToExternalEnumMappings.dashboardObjectType = new EnumConverter_1.EnumConverter((_g = {},
        _g[api_internal_contract_js_1.DashboardObjectType.Extension] = SharedApiExternalContract_1.DashboardObjectType.Extension,
        _g[api_internal_contract_js_1.DashboardObjectType.Blank] = SharedApiExternalContract_1.DashboardObjectType.Blank,
        _g[api_internal_contract_js_1.DashboardObjectType.Image] = SharedApiExternalContract_1.DashboardObjectType.Image,
        _g[api_internal_contract_js_1.DashboardObjectType.Legend] = SharedApiExternalContract_1.DashboardObjectType.Legend,
        _g[api_internal_contract_js_1.DashboardObjectType.PageFilter] = SharedApiExternalContract_1.DashboardObjectType.PageFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.ParameterControl] = SharedApiExternalContract_1.DashboardObjectType.ParameterControl,
        _g[api_internal_contract_js_1.DashboardObjectType.QuickFilter] = SharedApiExternalContract_1.DashboardObjectType.QuickFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.Text] = SharedApiExternalContract_1.DashboardObjectType.Text,
        _g[api_internal_contract_js_1.DashboardObjectType.Title] = SharedApiExternalContract_1.DashboardObjectType.Title,
        _g[api_internal_contract_js_1.DashboardObjectType.WebPage] = SharedApiExternalContract_1.DashboardObjectType.WebPage,
        _g[api_internal_contract_js_1.DashboardObjectType.Worksheet] = SharedApiExternalContract_1.DashboardObjectType.Worksheet,
        _g));
    InternalToExternalEnumMappings.dataType = new EnumConverter_1.EnumConverter((_h = {},
        _h[api_internal_contract_js_1.DataType.Bool] = SharedApiExternalContract_1.DataType.Bool,
        _h[api_internal_contract_js_1.DataType.Date] = SharedApiExternalContract_1.DataType.Date,
        _h[api_internal_contract_js_1.DataType.DateTime] = SharedApiExternalContract_1.DataType.DateTime,
        _h[api_internal_contract_js_1.DataType.Float] = SharedApiExternalContract_1.DataType.Float,
        _h[api_internal_contract_js_1.DataType.Int] = SharedApiExternalContract_1.DataType.Int,
        _h[api_internal_contract_js_1.DataType.String] = SharedApiExternalContract_1.DataType.String,
        _h));
    InternalToExternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_j = {},
        _j[api_internal_contract_js_1.FilterUpdateType.Add] = SharedApiExternalContract_1.FilterUpdateType.Add,
        _j[api_internal_contract_js_1.FilterUpdateType.All] = SharedApiExternalContract_1.FilterUpdateType.All,
        _j[api_internal_contract_js_1.FilterUpdateType.Remove] = SharedApiExternalContract_1.FilterUpdateType.Remove,
        _j[api_internal_contract_js_1.FilterUpdateType.Replace] = SharedApiExternalContract_1.FilterUpdateType.Replace,
        _j));
    InternalToExternalEnumMappings.allowableValues = new EnumConverter_1.EnumConverter((_k = {},
        _k[api_internal_contract_js_1.DomainRestrictionType.All] = SharedApiExternalContract_1.ParameterValueType.All,
        _k[api_internal_contract_js_1.DomainRestrictionType.List] = SharedApiExternalContract_1.ParameterValueType.List,
        _k[api_internal_contract_js_1.DomainRestrictionType.Range] = SharedApiExternalContract_1.ParameterValueType.Range,
        _k));
    InternalToExternalEnumMappings.dateStepPeriod = new EnumConverter_1.EnumConverter((_l = {},
        _l[api_internal_contract_js_1.DateStepPeriod.Years] = SharedApiExternalContract_1.PeriodType.Years,
        _l[api_internal_contract_js_1.DateStepPeriod.Quarters] = SharedApiExternalContract_1.PeriodType.Quarters,
        _l[api_internal_contract_js_1.DateStepPeriod.Months] = SharedApiExternalContract_1.PeriodType.Months,
        _l[api_internal_contract_js_1.DateStepPeriod.Weeks] = SharedApiExternalContract_1.PeriodType.Weeks,
        _l[api_internal_contract_js_1.DateStepPeriod.Days] = SharedApiExternalContract_1.PeriodType.Days,
        _l[api_internal_contract_js_1.DateStepPeriod.Hours] = SharedApiExternalContract_1.PeriodType.Hours,
        _l[api_internal_contract_js_1.DateStepPeriod.Minutes] = SharedApiExternalContract_1.PeriodType.Minutes,
        _l[api_internal_contract_js_1.DateStepPeriod.Seconds] = SharedApiExternalContract_1.PeriodType.Seconds,
        _l));
    InternalToExternalEnumMappings.dateRangeType = new EnumConverter_1.EnumConverter((_m = {},
        _m[api_internal_contract_js_1.DateRangeType.Current] = SharedApiExternalContract_1.DateRangeType.Current,
        _m[api_internal_contract_js_1.DateRangeType.Last] = SharedApiExternalContract_1.DateRangeType.Last,
        _m[api_internal_contract_js_1.DateRangeType.LastN] = SharedApiExternalContract_1.DateRangeType.LastN,
        _m[api_internal_contract_js_1.DateRangeType.Next] = SharedApiExternalContract_1.DateRangeType.Next,
        _m[api_internal_contract_js_1.DateRangeType.NextN] = SharedApiExternalContract_1.DateRangeType.NextN,
        _m[api_internal_contract_js_1.DateRangeType.ToDate] = SharedApiExternalContract_1.DateRangeType.ToDate,
        _m));
    InternalToExternalEnumMappings.errorCode = new EnumConverter_1.EnumConverter((_o = {},
        _o[api_internal_contract_js_1.ErrorCodes.INITIALIZATION_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.INTERNAL_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_ENUM_MAPPING] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_PARAMETER] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PERMISSION_DENIED] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PRES_MODEL_PARSING_ERROR] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.UNKNOWN_VERB_ID] = SharedApiExternalContract_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.VERSION_NOT_CONFIGURED] = SharedApiExternalContract_1.ErrorCodes.APINotInitialized,
        _o));
    InternalToExternalEnumMappings.filterType = new EnumConverter_1.EnumConverter((_p = {},
        _p[api_internal_contract_js_1.FilterType.Categorical] = SharedApiExternalContract_1.FilterType.Categorical,
        _p[api_internal_contract_js_1.FilterType.Range] = SharedApiExternalContract_1.FilterType.Range,
        _p[api_internal_contract_js_1.FilterType.RelativeDate] = SharedApiExternalContract_1.FilterType.RelativeDate,
        _p[api_internal_contract_js_1.FilterType.Hierarchical] = SharedApiExternalContract_1.FilterType.Hierarchical,
        _p));
    return InternalToExternalEnumMappings;
}());
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
/* tslint:enable:typedef */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var TableauError_1 = __webpack_require__(2);
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
            var externalErrorCode = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.errorCode.convert(internalError.errorCode);
            throw new TableauError_1.TableauError(externalErrorCode, internalError.message);
        });
    };
    return ServiceImplBase;
}());
exports.ServiceImplBase = ServiceImplBase;


/***/ }),
/* 9 */
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
})(MessageType = exports.MessageType || (exports.MessageType = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
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
            throw new TableauError_1.TableauError(Contract.ErrorCodes.UnsupportedEventName, "Cannot add event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].addEventListener(handler);
    };
    EventListenerManager.prototype.removeEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.UnsupportedEventName, "Cannot remove event, unsupported event type: " + eventType);
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
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
    Param.serializeParamterValue = function (value) {
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
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Unexpected invalid value for: " + value);
        }
    };
    return Param;
}());
exports.Param = Param;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataTable = /** @class */ (function () {
    function DataTable(_data, _columns, _totalRowCount, _isSummaryData, _marksInfo) {
        this._data = _data;
        this._columns = _columns;
        this._totalRowCount = _totalRowCount;
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(10);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
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
        if (this._mappings.hasOwnProperty(enumVal)) {
            return this._mappings[enumVal];
        }
        if (this._defaultVal !== undefined && !throwIfMissing) {
            return this._defaultVal;
        }
        throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Enum Mapping not found for: " + enumVal);
    };
    return EnumConverter;
}());
exports.EnumConverter = EnumConverter;


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(4);
var ErrorHelpers_1 = __webpack_require__(5);
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(21);
var ConnectionSummary_1 = __webpack_require__(49);
var Field_1 = __webpack_require__(22);
var TableSummary_1 = __webpack_require__(50);
var ServiceRegistry_1 = __webpack_require__(4);
var ErrorHelpers_1 = __webpack_require__(5);
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
        var defaultOptions = {
            ignoreAliases: false,
            maxRows: 10000,
            columnsToInclude: [],
        };
        options = options || {};
        var getDataService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return getDataService.getDataSourceDataAsync(this.id, !!options.ignoreAliases, options.maxRows || defaultOptions.maxRows, options.columnsToInclude || defaultOptions.columnsToInclude);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHelpers_1 = __webpack_require__(5);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauSheetEvent_1 = __webpack_require__(24);
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent_1 = __webpack_require__(17);
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Due to the way we configured webpack, we should be exporting things which will be under
// a global variable called "tableau". Export everything we want to be visible under tableau
// from this file.
var ExtensionsImpl_1 = __webpack_require__(27);
var Extensions_1 = __webpack_require__(78);
var ApiShared_1 = __webpack_require__(3);
ApiShared_1.VersionNumber.SetVersionNumber( true ? "0.16.0" : '0.0.0');
var extensionImpl = new ExtensionsImpl_1.ExtensionsImpl();
exports.extensions = new Extensions_1.Extensions(extensionImpl);
// Export Enums
// These show up under the tableau object. I.e. tableau.ExtensionContext.Server
var ExtensionsApiExternalContract_1 = __webpack_require__(6);
exports.ExtensionContext = ExtensionsApiExternalContract_1.ExtensionContext;
exports.ExtensionMode = ExtensionsApiExternalContract_1.ExtensionMode;
exports.AnalyticsObjectType = ExtensionsApiExternalContract_1.AnalyticsObjectType;
exports.ColumnType = ExtensionsApiExternalContract_1.ColumnType;
exports.DashboardObjectType = ExtensionsApiExternalContract_1.DashboardObjectType;
exports.DataType = ExtensionsApiExternalContract_1.DataType;
exports.DateRangeType = ExtensionsApiExternalContract_1.DateRangeType;
exports.EncodingType = ExtensionsApiExternalContract_1.EncodingType;
exports.ErrorCodes = ExtensionsApiExternalContract_1.ErrorCodes;
exports.FieldAggregationType = ExtensionsApiExternalContract_1.FieldAggregationType;
exports.FieldRoleType = ExtensionsApiExternalContract_1.FieldRoleType;
exports.FilterDomainType = ExtensionsApiExternalContract_1.FilterDomainType;
exports.FilterType = ExtensionsApiExternalContract_1.FilterType;
exports.FilterUpdateType = ExtensionsApiExternalContract_1.FilterUpdateType;
exports.FilterNullOption = ExtensionsApiExternalContract_1.FilterNullOption;
exports.MarkType = ExtensionsApiExternalContract_1.MarkType;
exports.ParameterValueType = ExtensionsApiExternalContract_1.ParameterValueType;
exports.PeriodType = ExtensionsApiExternalContract_1.PeriodType;
exports.QuickTableCalcType = ExtensionsApiExternalContract_1.QuickTableCalcType;
exports.SelectionUpdateType = ExtensionsApiExternalContract_1.SelectionUpdateType;
exports.SheetType = ExtensionsApiExternalContract_1.SheetType;
exports.SortDirection = ExtensionsApiExternalContract_1.SortDirection;
exports.TableauEventType = ExtensionsApiExternalContract_1.TableauEventType;
exports.TrendLineModelType = ExtensionsApiExternalContract_1.TrendLineModelType;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(6);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(3);
var ApiShared_2 = __webpack_require__(3);
var DashboardContent_1 = __webpack_require__(68);
var Environment_1 = __webpack_require__(69);
var Settings_1 = __webpack_require__(70);
var UI_1 = __webpack_require__(71);
var RegisterAllExtensionsServices_1 = __webpack_require__(72);
var SettingsImpl_1 = __webpack_require__(76);
var UIImpl_1 = __webpack_require__(77);
var ExtensionsImpl = /** @class */ (function () {
    function ExtensionsImpl() {
    }
    ExtensionsImpl.prototype.initializeAsync = function (isExtensionDialog, contextMenuCallbacks) {
        var _this = this;
        if (!this._initializationPromise) {
            this._initializationPromise = new Promise(function (resolve, reject) {
                // First thing we want to do is check to see if there is a desktop dispatcher already registered for us
                if (api_internal_contract_js_1.InternalApiDispatcherHolder.hasDesktopApiDispatcherPromise()) {
                    // Running in desktop, use this promise
                    var desktopDispatcherPromise = api_internal_contract_js_1.InternalApiDispatcherHolder.getDesktopDispatcherPromise();
                    desktopDispatcherPromise.then(function (dipatcherFactory) {
                        return _this.onDispatcherReceived(dipatcherFactory, isExtensionDialog, contextMenuCallbacks);
                    })
                        .then(function (openPayload) {
                        resolve(openPayload);
                    });
                }
                else {
                    // We must be running in server, so we should try to kick of the server dispatcher bootstrapping
                    var onDispatcherReceivedCallback_1 = _this.onDispatcherReceived.bind(_this);
                    ApiShared_1.doCrossFrameBootstrap(window, api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION).then(function (factory) {
                        return onDispatcherReceivedCallback_1(factory, isExtensionDialog, contextMenuCallbacks);
                    }).then(function (openPayload) { resolve(openPayload); });
                }
            });
        }
        return this._initializationPromise;
    };
    ExtensionsImpl.prototype.onDispatcherReceived = function (dispatcherFactory, isExtensionDialog, contextMenuFunctions) {
        var _this = this;
        var dispatcher = dispatcherFactory(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
        // Call to register all the services which will use the newly initialized dispatcher
        ApiShared_1.registerAllSharedServices(dispatcher);
        RegisterAllExtensionsServices_1.registerAllExtensionsServices(dispatcher);
        // Get the initialization service and initialize this extension
        var initializationService = ApiShared_1.ApiServiceRegistry.instance.getService("InitializationService" /* InitializationService */);
        var callbackMapKeys = (contextMenuFunctions) ? Object.keys(contextMenuFunctions) : [];
        return initializationService.initializeDashboardExtensionsAsync(isExtensionDialog, callbackMapKeys).then(function (result) {
            if (!result.extensionInstance.locator.dashboardPath) {
                throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, 'Unexpected error during initialization.');
            }
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
                    throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, "Received unexpected context menu Id from event: " + event.id);
                }
                contextMenuFunctions[event.id]();
            }
        });
    };
    return ExtensionsImpl;
}());
exports.ExtensionsImpl = ExtensionsImpl;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// All enum values made available to Extensions developers.
// Enums should be kept in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The context in which the Extensions is currently running.
 */
var ExtensionContext;
(function (ExtensionContext) {
    ExtensionContext["Desktop"] = "desktop";
    ExtensionContext["Server"] = "server";
})(ExtensionContext = exports.ExtensionContext || (exports.ExtensionContext = {}));
/**
 * The mode in which the Extensions is currently running.
 */
var ExtensionMode;
(function (ExtensionMode) {
    ExtensionMode["Authoring"] = "authoring";
    ExtensionMode["Viewing"] = "viewing";
})(ExtensionMode = exports.ExtensionMode || (exports.ExtensionMode = {}));
var AnalyticsObjectType;
(function (AnalyticsObjectType) {
    AnalyticsObjectType["Cluster"] = "cluster";
    AnalyticsObjectType["Forecast"] = "forecast";
    AnalyticsObjectType["TrendLine"] = "trend-line";
})(AnalyticsObjectType = exports.AnalyticsObjectType || (exports.AnalyticsObjectType = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["Discrete"] = "discrete";
    ColumnType["Continuous"] = "continuous";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
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
})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
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
})(DataType = exports.DataType || (exports.DataType = {}));
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
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
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
})(EncodingType = exports.EncodingType || (exports.EncodingType = {}));
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
     * An unknown event name was specified in the call to Viz.addEventListeneror Viz.removeEventListener.
     */
    ErrorCodes["UnsupportedEventName"] = "unsupported-event-name";
    /**
     * A method was used for a type of datasource that doesn't support that method (see getActiveTablesAsync for an example)
     */
    ErrorCodes["UnsupportedMethodForDataSourceType"] = "unsupported-method-for-data-source-type";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
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
})(FieldAggregationType = exports.FieldAggregationType || (exports.FieldAggregationType = {}));
/**
 * Role of a field.
 */
var FieldRoleType;
(function (FieldRoleType) {
    FieldRoleType["Dimension"] = "dimension";
    FieldRoleType["Measure"] = "measure";
    FieldRoleType["Unknown"] = "unknown";
})(FieldRoleType = exports.FieldRoleType || (exports.FieldRoleType = {}));
/**
 * An enumeration of the valid types of filters that can be applied.
 */
var FilterType;
(function (FilterType) {
    FilterType["Categorical"] = "categorical";
    FilterType["Range"] = "range";
    FilterType["Hierarchical"] = "hierarchical";
    FilterType["RelativeDate"] = "relative-date";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
/**
 * The different update types for applying filter
 */
var FilterUpdateType;
(function (FilterUpdateType) {
    FilterUpdateType["Add"] = "add";
    FilterUpdateType["All"] = "all";
    FilterUpdateType["Replace"] = "replace";
    FilterUpdateType["Remove"] = "remove";
})(FilterUpdateType = exports.FilterUpdateType || (exports.FilterUpdateType = {}));
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
})(FilterDomainType = exports.FilterDomainType || (exports.FilterDomainType = {}));
/**
 * The option for specifying which values to include for filtering
 * Indicates what to do with null values for a given filter or mark selection call.
 */
var FilterNullOption;
(function (FilterNullOption) {
    FilterNullOption["NullValues"] = "null-values";
    FilterNullOption["NonNullValues"] = "non-null-values";
    FilterNullOption["AllValues"] = "all-values";
})(FilterNullOption = exports.FilterNullOption || (exports.FilterNullOption = {}));
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
 * An enumeration describing the different types of allowable values.
 * This is used for restricting the domain of a parameter
 */
var ParameterValueType;
(function (ParameterValueType) {
    ParameterValueType["All"] = "all";
    ParameterValueType["List"] = "list";
    ParameterValueType["Range"] = "range";
})(ParameterValueType = exports.ParameterValueType || (exports.ParameterValueType = {}));
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
})(PeriodType = exports.PeriodType || (exports.PeriodType = {}));
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
})(QuickTableCalcType = exports.QuickTableCalcType || (exports.QuickTableCalcType = {}));
/**
 * Enum for specifying the selection type for select marks api.
 */
var SelectionUpdateType;
(function (SelectionUpdateType) {
    SelectionUpdateType["Replace"] = "select-replace";
    SelectionUpdateType["Add"] = "select-add";
    SelectionUpdateType["Remove"] = "select-remove";
})(SelectionUpdateType = exports.SelectionUpdateType || (exports.SelectionUpdateType = {}));
/**
 * The type of sheet a Sheet object represents
 */
var SheetType;
(function (SheetType) {
    SheetType["Dashboard"] = "dashboard";
    SheetType["Story"] = "story";
    SheetType["Worksheet"] = "worksheet";
})(SheetType = exports.SheetType || (exports.SheetType = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["Increasing"] = "increasing";
    SortDirection["Decreasing"] = "decreasing";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
/**
 * Represents a certain type of event which can be listened for
 */
var TableauEventType;
(function (TableauEventType) {
    /** Raised when any filter has changed state.*/
    TableauEventType["FilterChanged"] = "filter-changed";
    /** The selected marks on a visualization has changed */
    TableauEventType["MarkSelectionChanged"] = "mark-selection-changed";
    /** A parameter has had its value modified */
    TableauEventType["ParameterChanged"] = "parameter-changed";
    /** Settings have been changed for this extension. */
    TableauEventType["SettingsChanged"] = "settings-changed";
})(TableauEventType = exports.TableauEventType || (exports.TableauEventType = {}));
var TrendLineModelType;
(function (TrendLineModelType) {
    TrendLineModelType["Linear"] = "linear";
    TrendLineModelType["Logarithmic"] = "logarithmic";
    TrendLineModelType["Exponential"] = "exponential";
    TrendLineModelType["Polynomial"] = "polynomial";
})(TrendLineModelType = exports.TrendLineModelType || (exports.TrendLineModelType = {}));


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalApiDispatcherHolder;
(function (InternalApiDispatcherHolder) {
    function getDesktopDispatcherPromise() {
        return window.__tableauDesktopDispatcher;
    }
    InternalApiDispatcherHolder.getDesktopDispatcherPromise = getDesktopDispatcherPromise;
    function hasDesktopApiDispatcherPromise() {
        return !!InternalApiDispatcherHolder.getDesktopDispatcherPromise();
    }
    InternalApiDispatcherHolder.hasDesktopApiDispatcherPromise = hasDesktopApiDispatcherPromise;
    function setDesktopDispatcherPromise(dispatcher) {
        window.__tableauDesktopDispatcher = dispatcher;
    }
    InternalApiDispatcherHolder.setDesktopDispatcherPromise = setDesktopDispatcherPromise;
})(InternalApiDispatcherHolder = exports.InternalApiDispatcherHolder || (exports.InternalApiDispatcherHolder = {}));


/***/ }),
/* 31 */
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
/* 32 */
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
})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ }),
/* 33 */
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
})(VerbId = exports.VerbId || (exports.VerbId = {}));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(35);
var IdentityVersionConverter_1 = __webpack_require__(36);
// A mapping from the source version of a model -> the next version of the model. Each major
// version bump can have an array of conversions to perform in order
var executeUpgrades = {
    0: []
};
var executeDowngrades = {
    0: []
};
var notificationDowngrades = {
    0: []
};
/**
 * Creates a new InternalContractVersionConverter which has the ability to upgrade and downgrade the contract between the two versions
 * which are specified. If externalMajorVersion is greater than platformMajorVersion, an error will be thrown because
 * we won't know how to do those conversions.
 *
 * @param externalMajorVersion The version of the internal api which the external module is using
 * @param platformMajorVersion The version of the internal api which the platform is using
 */
function CreateVersionConverter(externalMajorVersion, platformMajorVersion) {
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


/***/ }),
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(14);
var CrossFramePreparedMessage_1 = __webpack_require__(38);
var MessageTypes_1 = __webpack_require__(9);
var MessageTypeChecks_1 = __webpack_require__(39);
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
    ///// MessageDispatcher Implementation
    CrossFrameMessenger.prototype.prepareInitializationMessage = function (apiVersion, crossFrameVersion) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Initialize,
            crossFrameVersion: crossFrameVersion,
            apiVersion: apiVersion
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
            default:
        }
    };
    return CrossFrameMessenger;
}());
exports.CrossFrameMessenger = CrossFrameMessenger;


/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(14);
var MessageTypes_1 = __webpack_require__(9);
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
    var messageTypes = [MessageTypes_1.MessageType.Command, MessageTypes_1.MessageType.CommandResponse, MessageTypes_1.MessageType.Initialize, MessageTypes_1.MessageType.Notification];
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


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(15);
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
    return Dashboard;
}(Sheet_1.Sheet));
exports.Dashboard = Dashboard;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
/**
 * Represents the current version of the extensions library
 */
var VersionNumber = /** @class */ (function () {
    // private constructor so everyone uses the singleton instance
    function VersionNumber(versionString) {
        var parts = versionString.split('.').map(function (p) { return parseInt(p, 10); });
        if (parts.length !== 3) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Invalid version number: " + versionString);
        }
        this.major = parts[0];
        this.minor = parts[1];
        this.fix = parts[2];
    }
    Object.defineProperty(VersionNumber, "Instance", {
        /**
         * Gets the singleton instance of the version number.
         */
        get: function () {
            return VersionNumber._instance;
        },
        enumerable: true,
        configurable: true
    });
    VersionNumber.SetVersionNumber = function (numString) {
        VersionNumber._instance = new VersionNumber(numString);
    };
    Object.defineProperty(VersionNumber.prototype, "formattedValue", {
        get: function () {
            return this.major + "." + this.minor + "." + this.fix;
        },
        enumerable: true,
        configurable: true
    });
    return VersionNumber;
}());
exports.VersionNumber = VersionNumber;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var DashboardObject_1 = __webpack_require__(43);
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var Point_1 = __webpack_require__(44);
var Size_1 = __webpack_require__(45);
var Worksheet_1 = __webpack_require__(46);
var SheetImpl_1 = __webpack_require__(18);
var SheetInfoImpl_1 = __webpack_require__(47);
var WorksheetImpl_1 = __webpack_require__(48);
var ErrorHelpers_1 = __webpack_require__(5);
var DashboardImpl = /** @class */ (function (_super) {
    __extends(DashboardImpl, _super);
    function DashboardImpl(_info, _sheetPath) {
        var _this = _super.call(this, new SheetInfoImpl_1.SheetInfoImpl(_info.name, Contract.SheetType.Dashboard, new Size_1.Size(_info.size.h, _info.size.w))) || this;
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
                var sheetInfo = new SheetInfoImpl_1.SheetInfoImpl(zone.name, Contract.SheetType.Worksheet, zoneSize);
                var vizId = {
                    worksheet: zone.name,
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
            var dashboardObject = new DashboardObject_1.DashboardObject(dashboard, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dashboardObjectType.convert(zone.zoneType), zonePoint, zoneSize, worksheet);
            this._objects.push(dashboardObject);
        }
    };
    return DashboardImpl;
}(SheetImpl_1.SheetImpl));
exports.DashboardImpl = DashboardImpl;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the dashboard objects - the zones in a dashboard.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var DashboardObject = /** @class */ (function () {
    function DashboardObject(_dashboard, _type, _position, _size, _worksheet) {
        this._dashboard = _dashboard;
        this._type = _type;
        this._position = _position;
        this._size = _size;
        this._worksheet = _worksheet;
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
    return DashboardObject;
}());
exports.DashboardObject = DashboardObject;


/***/ }),
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(15);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
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
                isDashboard: this.sheetType === SharedApiExternalContract_1.SheetType.Dashboard
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var DataSource_1 = __webpack_require__(19);
var DataSourceImpl_1 = __webpack_require__(20);
var SheetImpl_1 = __webpack_require__(18);
var SingleEventManagerImpl_1 = __webpack_require__(11);
var FilterChangedEvent_1 = __webpack_require__(51);
var MarksSelectedEvent_1 = __webpack_require__(52);
var GetDataService_1 = __webpack_require__(25);
var ServiceRegistry_1 = __webpack_require__(4);
var ErrorHelpers_1 = __webpack_require__(5);
var visualIdsAreEqual = function (a, b) {
    return a && b &&
        a.worksheet === b.worksheet &&
        a.dashboard === b.dashboard &&
        a.storyboard === b.storyboard &&
        a.storyPointID === b.storyPointID &&
        a.flipboardZoneID === b.flipboardZoneID;
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
        var marksEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.MarkSelectionChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SelectedMarksChanged, function (model) {
            var visualId = model;
            return visualIdsAreEqual(visualId, _this.visualId);
        }, function (viz) {
            marksEvent.triggerEvent(function () { return new MarksSelectedEvent_1.MarksSelectedEvent(worksheet); });
        });
        var filterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.FilterChanged);
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
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(updateType, Contract.FilterUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyFilterAsync(this.visualId, fieldName, values, updateType, options);
    };
    WorksheetImpl.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(filterOptions, 'filterOptions');
        ErrorHelpers_1.ErrorHelpers.verifyRangeParamType(filterOptions.min, filterOptions.max);
        if (filterOptions.nullOption) {
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(filterOptions.nullOption, Contract.FilterNullOption);
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
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, Contract.SelectionUpdateType);
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByValueAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, Contract.SelectionUpdateType);
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
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauError_1 = __webpack_require__(2);
var TableauWorksheetEvent_1 = __webpack_require__(23);
var FilterChangedEvent = /** @class */ (function (_super) {
    __extends(FilterChangedEvent, _super);
    function FilterChangedEvent(worksheet, _fieldName) {
        var _this = _super.call(this, Contract.TableauEventType.FilterChanged, worksheet) || this;
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
                throw new TableauError_1.TableauError(Contract.ErrorCodes.MissingFilter, "cannot find filter: " + _this._fieldName);
            }
            return eventedFilter;
        });
    };
    return FilterChangedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.FilterChangedEvent = FilterChangedEvent;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauWorksheetEvent_1 = __webpack_require__(23);
var MarksSelectedEvent = /** @class */ (function (_super) {
    __extends(MarksSelectedEvent, _super);
    function MarksSelectedEvent(worksheet) {
        return _super.call(this, Contract.TableauEventType.MarkSelectionChanged, worksheet) || this;
    }
    MarksSelectedEvent.prototype.getMarksAsync = function () {
        return this.worksheet.getSelectedMarksAsync();
    };
    return MarksSelectedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.MarksSelectedEvent = MarksSelectedEvent;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var CrossFrameDispatcher_1 = __webpack_require__(54);
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
function doCrossFrameBootstrap(thisWindow, internalContractVersion) {
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
        var initializationMessage = messenger.prepareInitializationMessage(internalContractVersion, api_internal_contract_js_1.MESSAGING_VERSION);
        // When we receive a response back from the parent, we check to make sure the guids match and then we know
        // that the parent is aware of us and we can start communicating
        messenger.setCommandResponseMessageHandler(function (msg) {
            // Verify we are getting a response from our initialize message
            if (msg.commandGuid === initializationMessage.messageGuid) {
                // For server, the versioning of the factory is gonna happen on the other side of our frame, so just return the
                // one which doesn't have any version knowledge
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
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataSourceServiceImpl_1 = __webpack_require__(56);
var FilterServiceImpl_1 = __webpack_require__(57);
var GetDataServiceImpl_1 = __webpack_require__(60);
var NotificationServiceImpl_1 = __webpack_require__(61);
var ParametersServiceImpl_1 = __webpack_require__(62);
var SelectionServiceImpl_1 = __webpack_require__(66);
var ServiceRegistry_1 = __webpack_require__(4);
function registerAllSharedServices(dispatcher) {
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new DataSourceServiceImpl_1.DataSourceServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new GetDataServiceImpl_1.GetDataServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new FilterServiceImpl_1.FilterServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new NotificationServiceImpl_1.NotificationServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new ParametersServiceImpl_1.ParametersServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new SelectionServiceImpl_1.SelectionServiceImpl(dispatcher));
}
exports.registerAllSharedServices = registerAllSharedServices;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(8);
var TableauError_1 = __webpack_require__(2);
var Field_1 = __webpack_require__(22);
var FieldImpl_1 = __webpack_require__(21);
var DataSource_1 = __webpack_require__(19);
var DataSourceImpl_1 = __webpack_require__(20);
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
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.DeltaTimeMs] = 0,
            _a[api_internal_contract_js_1.ParameterId.ShouldRefreshDS] = true,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.RefreshDataSource, parameters).then(function (response) {
            return;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getActiveTablesAsync = function (dataSourceId) {
        var joinParameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetActiveTables, joinParameters).then(function (joinResponse) {
            var tableInfos = joinResponse.result;
            // getActiveTables is unsupported for cubes and GA. We do not have a connection type property
            // available from the platform (intentionally, to reduce code churn as new connections are added).
            // Instead,just check if any tables are returned. This array will be empty for any non-table based datasource.
            if (tableInfos.tables.length === 0) {
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.UnsupportedMethodForDataSourceType, "getActiveTables is not supported for: " + dataSourceId);
            }
            return tableInfos.tables;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getDataSourcesAsync = function (visualId) {
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSources, parameters).then(function (response) {
            var dataSchema = response.result;
            return dataSchema;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getConnectionSummariesAsync = function (dataSourceId) {
        var params = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetConnectionDescriptionSummaries, params).then(function (response) {
            var descriptionSummaries = response.result;
            return descriptionSummaries;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getFieldAsync = function (fieldId) {
        var _this = this;
        var fieldIdComponents = this.parseFieldId(fieldId);
        var dataSourceId = fieldIdComponents[1];
        var fieldName = fieldIdComponents[2];
        var verb = api_internal_contract_js_1.VerbId.GetDataSource;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId;
        return this.execute(verb, parameters).then(function (response) {
            var dataSource = response.result;
            var field = dataSource.fields.find(function (f) {
                return f.name === fieldName;
            });
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ExternalToInternalEnumMappings_1 = __webpack_require__(58);
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var FilterModels_1 = __webpack_require__(59);
var ServiceImplBase_1 = __webpack_require__(8);
var GetDataModels_1 = __webpack_require__(13);
var Param_1 = __webpack_require__(12);
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
        return new FilterModels_1.CategoricalFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.Categorical, appliedValues, domainFilter.isExclude);
    };
    FilterServiceImpl.prototype.convertRangeFilter = function (domainFilter) {
        var minValue = new GetDataModels_1.DataValue(domainFilter.min.value, domainFilter.min.formattedValue);
        var maxValue = new GetDataModels_1.DataValue(domainFilter.max.value, domainFilter.max.formattedValue);
        return new FilterModels_1.RangeFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.Range, minValue, maxValue, domainFilter.includeNullValues);
    };
    FilterServiceImpl.prototype.convertRelativeDateFilter = function (domainFilter) {
        var anchorDateValue = new GetDataModels_1.DataValue(domainFilter.anchorDate.value, domainFilter.anchorDate.formattedValue);
        return new FilterModels_1.RelativeDateFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, Contract.FilterType.RelativeDate, anchorDateValue, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(domainFilter.periodType), InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateRangeType.convert(domainFilter.rangeType), domainFilter.rangeN);
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var EnumConverter_1 = __webpack_require__(16);
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the external-api-contract to the enums used
 * in the internal-api-contract, which developers code against.
 */
var ExternalToInternalEnumMappings = /** @class */ (function () {
    function ExternalToInternalEnumMappings() {
    }
    ExternalToInternalEnumMappings.filterDomainType = new EnumConverter_1.EnumConverter((_a = {},
        _a[SharedApiExternalContract_1.FilterDomainType.Relevant] = api_internal_contract_js_1.FilterDomainType.Relevant,
        _a[SharedApiExternalContract_1.FilterDomainType.Database] = api_internal_contract_js_1.FilterDomainType.Database,
        _a));
    ExternalToInternalEnumMappings.nullOptions = new EnumConverter_1.EnumConverter((_b = {},
        _b[SharedApiExternalContract_1.FilterNullOption.AllValues] = api_internal_contract_js_1.FilterNullOption.AllValues,
        _b[SharedApiExternalContract_1.FilterNullOption.NonNullValues] = api_internal_contract_js_1.FilterNullOption.NonNullValues,
        _b[SharedApiExternalContract_1.FilterNullOption.NonNullValues] = api_internal_contract_js_1.FilterNullOption.NullValues,
        _b));
    ExternalToInternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_c = {},
        _c[SharedApiExternalContract_1.FilterUpdateType.Add] = api_internal_contract_js_1.FilterUpdateType.Add,
        _c[SharedApiExternalContract_1.FilterUpdateType.All] = api_internal_contract_js_1.FilterUpdateType.All,
        _c[SharedApiExternalContract_1.FilterUpdateType.Remove] = api_internal_contract_js_1.FilterUpdateType.Remove,
        _c[SharedApiExternalContract_1.FilterUpdateType.Replace] = api_internal_contract_js_1.FilterUpdateType.Replace,
        _c));
    return ExternalToInternalEnumMappings;
}());
exports.ExternalToInternalEnumMappings = ExternalToInternalEnumMappings;
var _a, _b, _c;
/* tslint:enable:typedef */


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(4);
var ErrorHelpers_1 = __webpack_require__(5);
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
    function CategoricalFilter(worksheetName, fieldName, fieldId, filterType, _appliedValues, _isExcludeMode) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._appliedValues = _appliedValues;
        _this._isExcludeMode = _isExcludeMode;
        return _this;
    }
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
            domainType = Contract.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, Contract.FilterDomainType);
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
            domainType = Contract.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, Contract.FilterDomainType);
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(8);
var GetDataModels_1 = __webpack_require__(13);
var GetDataService_1 = __webpack_require__(25);
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
    GetDataServiceImpl.prototype.getUnderlyingDataAsync = function (visualId, getType, ignoreAliases, ignoreSelection, includeAllColumns, maxRows) {
        var _this = this;
        // Create all of our parameters
        var verb = getType === GetDataService_1.GetDataType.Summary ? api_internal_contract_js_1.VerbId.GetDataSummaryData : api_internal_contract_js_1.VerbId.GetUnderlyingData;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreSelection] = ignoreSelection;
        parameters[api_internal_contract_js_1.ParameterId.IncludeAllColumns] = includeAllColumns;
        parameters[api_internal_contract_js_1.ParameterId.MaxRows] = maxRows;
        return this.execute(verb, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, responseData.isSummary);
        });
    };
    GetDataServiceImpl.prototype.getSelectedMarksAsync = function (visualId) {
        var _this = this;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetSelectedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
        var _a;
    };
    GetDataServiceImpl.prototype.getHighlightedMarksAsync = function (visualId) {
        var _this = this;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetHighlightedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
        var _a;
    };
    GetDataServiceImpl.prototype.getDataSourceDataAsync = function (dataSourceId, ignoreAliases, maxRows, columnsToInclude) {
        var _this = this;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases,
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = maxRows,
            _a[api_internal_contract_js_1.ParameterId.ColumnsToInclude] = columnsToInclude,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSourceData, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, false);
        });
        var _a;
    };
    GetDataServiceImpl.prototype.processResultsTable = function (responseData, isSummary) {
        var headers = responseData.headers.map(function (h) { return new GetDataModels_1.Column(h.fieldCaption, h.dataType, h.isReferenced, h.index); });
        // TODO This should be controlled by a flag indicating whether this api will respond marks info or not
        var marks;
        if (responseData.marks) {
            marks = responseData.marks.map(function (h) { return new GetDataModels_1.MarkInfo(h.type, h.color, h.tupleId); });
        }
        var table = responseData.dataTable.map(function (row) {
            return row.map(function (cell) {
                return new GetDataModels_1.DataValue(cell.value, cell.formattedValue);
            });
        });
        if (marks) {
            return new GetDataModels_1.DataTable(table, headers, table.length, isSummary, marks);
        }
        return new GetDataModels_1.DataTable(table, headers, table.length, isSummary);
    };
    return GetDataServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.GetDataServiceImpl = GetDataServiceImpl;


/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(8);
var ParameterImpl_1 = __webpack_require__(63);
var Parameter_1 = __webpack_require__(65);
var TableauError_1 = __webpack_require__(2);
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
        var _a;
    };
    ParametersServiceImpl.prototype.changeParameterValueAsync = function (fieldName, newValue) {
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName,
            _a[api_internal_contract_js_1.ParameterId.ParameterValue] = newValue,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.ChangeParameterValue, parameters).then(function (response) {
            var result = response.result;
            return result;
        });
        var _a;
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
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'name or fieldName must be provided to find parameter');
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var ParameterChangedEvent_1 = __webpack_require__(64);
var GetDataModels_1 = __webpack_require__(13);
var ServiceRegistry_1 = __webpack_require__(4);
var SingleEventManagerImpl_1 = __webpack_require__(11);
var ErrorHelpers_1 = __webpack_require__(5);
var Param_1 = __webpack_require__(12);
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
        var coercedValue = Param_1.Param.serializeParamterValue(newValue);
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
        var parameterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(Contract.TableauEventType.ParameterChanged);
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
        if (type === Contract.ParameterValueType.List) {
            var values = parameterInfo.allowableValues || [];
            listValues = values.map(function (val) { return new GetDataModels_1.DataValue(val.value, val.formattedValue); });
        }
        else if (type === Contract.ParameterValueType.Range) {
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(4);
var TableauError_1 = __webpack_require__(2);
var TableauSheetEvent_1 = __webpack_require__(24);
var ParameterChangedEvent = /** @class */ (function (_super) {
    __extends(ParameterChangedEvent, _super);
    function ParameterChangedEvent(_globalFieldName, sheet) {
        var _this = _super.call(this, Contract.TableauEventType.ParameterChanged, sheet) || this;
        _this._globalFieldName = _globalFieldName;
        return _this;
    }
    ParameterChangedEvent.prototype.getParameterAsync = function () {
        var _this = this;
        // Call down to our service to get the parameter back via its field name
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByGlobalFieldNameAsync(this._globalFieldName, this.sheet).then(function (parameter) {
            if (parameter === undefined) {
                throw new TableauError_1.TableauError(Contract.ErrorCodes.MissingParameter, "Cannot find parameter: " + _this._globalFieldName);
            }
            return parameter;
        });
    };
    return ParameterChangedEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.ParameterChangedEvent = ParameterChangedEvent;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(10);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var SelectionModels_1 = __webpack_require__(67);
var ServiceImplBase_1 = __webpack_require__(8);
var TableauError_1 = __webpack_require__(2);
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
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.ClearSelectedMarks, parameters).then(function (response) {
            return; // Expecting an empty model and hence the void response.
        });
        var _a;
    };
    /**
     * Method to select marks for the given worksheet.
     *
     * @param visualId
     * @param selectionCriteria
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.selectMarksByValueAsync = function (visualId, selectionCriterias, selectionUpdateType) {
        if (selectionCriterias.length === 0) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'Selection criteria missing for selecting marks by value');
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
        var _a;
    };
    /**
   * Method to select marks for the given worksheet.
   *
   * @param visualId
   * @param MarkInfo
   * @param selectionUpdateType
   */
    SelectionServiceImpl.prototype.selectMarksByIdAsync = function (visualId, marks, selectionUpdateType) {
        if (marks.length === 0) {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InvalidParameter, 'Marks info missing for selecting marks by Id');
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
        var _a;
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
            if (tupleId !== undefined && tupleId !== null) {
                ids.push(tupleId.toString()); // collect the tuple ids
            }
            else {
                throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'tupleId parsing error');
            }
        }
        if (ids.length !== 0) {
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
                if (catRegex.test(st.fieldName)) {
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
                    && rangeOption.max !== undefined) {
                    if (selectionType === SelectionCriteriaType.RangeType) {
                        var quantModel = this.addToRangeParamsList(st.fieldName, rangeOption);
                        selectionModelContainer.quantModelArr.push(quantModel);
                    }
                    else {
                        mixedSelectionsError = true;
                        break;
                    }
                }
                else {
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
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'Selection Criteria parsing error');
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
            if (catRegex.test(crit.fieldName)) {
                selectionType = SelectionCriteriaType.HierarchicalType;
            }
            else if (rangeOption.min !== undefined
                && rangeOption.max !== undefined) {
                selectionType = SelectionCriteriaType.RangeType;
            }
            else {
                selectionType = SelectionCriteriaType.DimensionType;
            }
        }
        else {
            throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'Selection Criteria parsing error');
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
                markValues.push(valueArr[i].toString());
            }
        }
        else {
            markValues.push(value.toString());
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
            rangeSelectionModel.maxValue = value.max.toString();
        }
        if (value.min !== undefined && value.min !== null) {
            rangeSelectionModel.minValue = value.min.toString();
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
        if (selectionUpdateType === Contract.SelectionUpdateType.Replace) {
            return api_internal_contract_js_1.SelectionUpdateType.Replace;
        }
        else if (selectionUpdateType === Contract.SelectionUpdateType.Add) {
            return api_internal_contract_js_1.SelectionUpdateType.Add;
        }
        else if (selectionUpdateType === Contract.SelectionUpdateType.Remove) {
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
            if (nullOption === Contract.FilterNullOption.NullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNull;
            }
            else if (nullOption === Contract.FilterNullOption.NonNullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNonNull;
            }
            else if (nullOption === Contract.FilterNullOption.AllValues) {
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(3);
/**
 * Implementation of the external environment namespace.
 * Environment does not follow the Impl pattern as it is
 * just a property bag.
 */
var Environment = /** @class */ (function () {
    function Environment(extensionEnvironment) {
        this._apiVersion = extensionEnvironment.apiVersion;
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(3);
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(3);
var InitializationServiceImpl_1 = __webpack_require__(73);
var SettingsServiceImpl_1 = __webpack_require__(74);
var UIServiceImpl_1 = __webpack_require__(75);
function registerAllExtensionsServices(dispatcher) {
    ApiShared_1.ApiServiceRegistry.instance.registerService(new InitializationServiceImpl_1.InitializationServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new SettingsServiceImpl_1.SettingsServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new UIServiceImpl_1.UIServiceImpl(dispatcher));
}
exports.registerAllExtensionsServices = registerAllExtensionsServices;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(3);
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
        var params = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionContextMenuIds] = contextMenuIds,
            _a[api_internal_contract_js_1.ParameterId.IsExtensionDialog] = isExtensionDialog,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.InitializeExtension, params).then(function (response) {
            // TODO - Validate return value
            var result = response.result;
            return result;
        });
        var _a;
    };
    return InitializationServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.InitializationServiceImpl = InitializationServiceImpl;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(6);
var ApiShared_1 = __webpack_require__(3);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_2 = __webpack_require__(3);
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
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.SettingsValues] = settings, _a);
        return this.execute(api_internal_contract_js_1.VerbId.SaveExtensionSettings, parameters).then(function (value) {
            var result = value.result;
            if (!result || !result.settingsValues) {
                throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, 'Unexpected error savings settings.');
            }
            return (result.settingsValues);
        });
        var _a;
    };
    return SettingsServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.SettingsServiceImpl = SettingsServiceImpl;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(6);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(3);
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
            throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InvalidParameter, 'Size parameters for displayDialogAsync must be positive');
        }
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogH] = h;
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogW] = w;
        return this.execute(api_internal_contract_js_1.VerbId.DisplayDialog, parameters).then(function (response) {
            var dialogResult = response.result;
            switch (dialogResult) {
                case api_internal_contract_js_1.ExtensionDialogResult.DialogAlreadyOpen:
                    throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.DialogAlreadyOpen, 'There already exists an open dialog for this extension.');
                case api_internal_contract_js_1.ExtensionDialogResult.InvalidDomain:
                    throw new ApiShared_1.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InvalidDomainDialog, 'The url of an extension dialog must match the domain of the parent extension.');
                default:// Success case
                    return;
            }
        });
        var _a;
    };
    UIServiceImpl.prototype.closeDialog = function (payload) {
        var parameters = (payload) ? (_a = {}, _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload, _a) : {};
        return this.execute(api_internal_contract_js_1.VerbId.CloseDialog, parameters).then(function (response) {
            return;
        });
        var _a;
    };
    return UIServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.UIServiceImpl = UIServiceImpl;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(6);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(3);
var SettingsChangedEvent = /** @class */ (function (_super) {
    __extends(SettingsChangedEvent, _super);
    function SettingsChangedEvent(_newSettings) {
        var _this = _super.call(this, Contract.TableauEventType.SettingsChanged) || this;
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
        var settingsChangedEvent = new ApiShared_1.SingleEventManagerImpl(Contract.TableauEventType.SettingsChanged);
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
            throw new ApiShared_1.TableauError(Contract.ErrorCodes.SettingSaveInProgress, SettingsImpl.ASYNC_SAVE_IN_PROGRESS);
        }
    };
    SettingsImpl.ASYNC_SAVE_IN_PROGRESS = 'Async Save is in progress, updating settings is not allowed.';
    return SettingsImpl;
}());
exports.SettingsImpl = SettingsImpl;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(6);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(3);
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
                        reject(new ApiShared_1.TableauError(Contract.ErrorCodes.DialogClosedByUser, 'Extension dialog closed by user.'));
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
/* 78 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2VlYzFjMTE1Y2RmYzFhYzI1MzIiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlYXVFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL0FwaVNoYXJlZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRXJyb3JIZWxwZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9QYXJhbS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvR2V0RGF0YU1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2d1aWQvZ3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaGVldC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FbnVtQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGF0YVNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0RhdGFTb3VyY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRmllbGRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ZpZWxkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1V29ya3NoZWV0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVTaGVldEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL0dldERhdGFTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9FeHRlbnNpb25zSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0V4dGVybmFsQ29udHJhY3QvRW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9FbnVtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVyZmFjZS9JbnRlcm5hbEFwaURpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9Ob3RpZmljYXRpb25zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvUGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1ZlcmJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZU1lc3Nlbmdlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VUeXBlQ2hlY2tzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9WZXJzaW9uTnVtYmVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGFzaGJvYXJkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2l6ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Xb3Jrc2hlZXQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEluZm9JbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvV29ya3NoZWV0SW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZVN1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9GaWx0ZXJNb2RlbHMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9HZXREYXRhU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1BhcmFtZXRlckltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1BhcmFtZXRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9QYXJhbWV0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL1JlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL0luaXRpYWxpemF0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9VSVNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9VSUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRXh0ZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3REEsNkZBQTZGOzs7OztBQUk3RixrQ0FBeUM7Ozs7Ozs7OztBQ0p6Qzs7OztHQUlH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QUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQztBQTVCWSxnQ0FBVSIsImZpbGUiOiJ0YWJsZWF1LmV4dGVuc2lvbnMuMC4xNi4wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QtZXh0ZW5zaW9ucy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2VlYzFjMTE1Y2RmYzFhYzI1MzIiLCIvLyBUaGlzIGZpbGUgcmUtZXhwb3J0cyBldmVyeXRoaW5nIHdoaWNoIGlzIHBhcnQgb2YgdGhlIHNoYXJlZCBlbWJlZGRpbmcgYXBpIHB1YmxpYyBpbnRlcmZhY2VcblxuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0RhdGFTb3VyY2VJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9EYXRhVGFibGVJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9FbnVtcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRXZlbnRJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9GaWx0ZXJJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TZWxlY3Rpb25JbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9QYXJhbWV0ZXJJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TZWxlY3Rpb25JbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TaGVldEludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L1RhYmxlYXVFcnJvcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QudHMiLCIvKipcbiAqIFRoaXMgaXMgeW91ciBtYWluLiBUaGlzIGlzIHdoZXJlIHlvdSByZS1leHBvcnQgZXZlcnl0aGluZyB5b3Ugd2FudCB0byBiZSBwdWJsaWNseSBhdmFpbGFibGUuXG4gKlxuICogVGhlIGJ1aWxkIGVuZm9yY2VzIHRoYXQgdGhlIGZpbGUgaGFzIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGdsb2JhbCB2YXJpYWJsZSB0aGF0IGlzIGV4cG9ydGVkLlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvRW51bXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvTW9kZWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvTm90aWZpY2F0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L1BhcmFtZXRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9WZXJicyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZS9WZXJzaW9uTnVtYmVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb25pbmcvSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuXG4vLyBUaGVzZSBhcmUgdGhlIGV4cG9ydHMgZnJvbSB0aGUgbWVzc2FnaW5nIHN0dWZmXG5cbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VEaXNwYXRjaGVyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlTGlzdGVuZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2VuZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9QcmVwYXJlZE1lc3NhZ2UnO1xuXG4vLyBFeHBvcnQgYSBoYXJkY29kZWQgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QuIFRoaXMgc2hvdWxkIG1hdGNoIHdoYXQncyBpbiBwYWNrYWdlLmpzb24uXG4vLyBOb3JtYWxseSwgd2UnZCB1c2Ugc29tZSBzb3J0IG9mIHdlYnBhY2sgcmVwbGFjZW1lbnQgdG8gaW5qZWN0IHRoaXMgaW50byBjb2RlLCBidXQgdGhhdCBkb2Vzbid0XG4vLyB3b3JrIHdpdGggdGhlIG1vZHVsZS1kZXYtc2NyaXB0cyBhbmQgdGhpcyBpc24ndCB0b28gbXVjaCB3b3JrLlxuLy8gSWYgeW91IGZvcmdldCB0byBrZWVwIHRoaXMgaW4gc3luYyB3aXRoIHBhY2thZ2UuanNvbiwgYSB0ZXN0IHdpbGwgZmFpbCBzbyB3ZSBzaG91bGQgYmUgb2suXG5leHBvcnQgY29uc3QgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTiA9IHtcbiAgbWFqb3I6IDEsXG4gIG1pbm9yOiA0LFxuICBmaXg6IDBcbn07XG5cbi8vIEV4cG9ydCB0aGUgdmVyc2lvbiBudW1iZXIgb2YgbWVzc2FnaW5nIGZvciBjb25zdW1lcnMgdG8gdXNlLlxuLy8gQmUgdmVyeSBjYXJlZnVsIG1ha2luZyBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbnRyYWN0IHdoaWNoIGJyZWFrIHZlcnNpb24gY29tcGF0aWJpbGl0eS5cbmV4cG9ydCBjb25zdCBNRVNTQUdJTkdfVkVSU0lPTiA9IHtcbiAgbWFqb3I6IDEsXG4gIG1pbm9yOiAwLFxuICBmaXg6IDBcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0pzQXBpSW50ZXJuYWxDb250cmFjdC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEN1c3RvbSBlcnJvciBjbGFzcyB0aGF0IGV4dGVuZHMgdGhlIGRlZmF1bHQgSmF2YVNjcmlwdCBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGFsbG93cyB1cyB0byBwcm92aWRlIGEgZmllbGQgd2l0aCBhIHNwZWNpZmljIGVycm9yIGNvZGVcbiAqIHNvIHRoYXQgZGV2ZWxvcGVycyBjYW4gbW9yZSBlYXNpbHkgcHJvZ3JhbW1hdGljYWxseSByZXNwb25kXG4gKiB0byBlcnJvciBzY2VuYXJpb3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZWF1RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lcnJvckNvZGU6IENvbnRyYWN0LkVycm9yQ29kZXMsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKGAke19lcnJvckNvZGV9OiAke21lc3NhZ2V9YCk7XG5cbiAgICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXG4gICAgLy8gRXJyb3IgaW5oZXJpdGFuY2UgZG9lcyBub3Qgd29yayBwcm9wZXJ0bHkgd2hlbiBjb21waWxpbmcgdG8gRVM1LCB0aGlzIGlzIGEgd29ya2Fyb3VuZCB0byBmb3JjZVxuICAgIC8vIHRoZSBwcm90byBjaGFpbiB0byBiZSBidWlsdCBjb3JyZWN0bHkuICBTZWUgdGhlIGdpdGh1YiBsaW5rIGFib3ZlIGZvciBkZXRhaWxzLlxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBUYWJsZWF1RXJyb3IucHJvdG90eXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3JDb2RlKCk6IENvbnRyYWN0LkVycm9yQ29kZXMge1xuICAgIHJldHVybiB0aGlzLl9lcnJvckNvZGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlYXVFcnJvci50cyIsIi8vIEV4cG9ydCBldmVyeXRoaW5nIHdoaWNoIGhhZCBiZWVuIHByZXZpb3VzbHkgaW4gdGhlIGFwaS1zaGFyZWQgbW9kdWxlXG5cbmV4cG9ydCB7IERhc2hib2FyZCB9IGZyb20gJy4vQXBpU2hhcmVkL0Rhc2hib2FyZCc7XG5leHBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyJztcbmV4cG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4vQXBpU2hhcmVkL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5leHBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3InO1xuZXhwb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4vQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXInO1xuXG5leHBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmV4cG9ydCB7IFRhYmxlYXVFdmVudCB9IGZyb20gJy4vQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQnO1xuZXhwb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5leHBvcnQgeyBEYXNoYm9hcmRJbXBsIH0gZnJvbSAnLi9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsJztcbmV4cG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlJztcbmV4cG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4vQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcCc7XG5leHBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvTm90aWZpY2F0aW9uU2VydmljZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvQXBpU2hhcmVkLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBhbiBhcGkgc2VydmljZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwaVNlcnZpY2Uge1xuICAvKipcbiAgICogR2V0cyB0aGUgbmFtZSBmb3IgdGhpcyBzZXJ2aWNlLlxuICAgKi9cbiAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIHNlcnZpY2UgbmFtZSB3aGljaCB3aWxsIGJlIHJlZ2lzdGVyZWQgaW4gdGhlIGFwaS1zaGFyZWQgcHJvamVjdFxuICovXG5leHBvcnQgY29uc3QgZW51bSBTZXJ2aWNlTmFtZXMge1xuICBEYXRhU291cmNlU2VydmljZSA9ICdkYXRhLXNvdXJjZS1zZXJ2aWNlJyxcbiAgR2V0RGF0YSA9ICdnZXQtZGF0YS1zZXJ2aWNlJyxcbiAgRmlsdGVyID0gJ2ZpbHRlci1zZXJ2aWNlJyxcbiAgTm90aWZpY2F0aW9uID0gJ25vdGlmaWNhdGlvbi1zZXJ2aWNlJyxcbiAgUGFyYW1ldGVycyA9ICdwYXJhbWV0ZXJzLXNlcnZpY2UnLFxuICBTZWxlY3Rpb24gPSAnc2VsZWN0aW9uLXNlcnZpY2UnXG59XG5cbi8qKlxuICogRG8gc29tZSBnbG9iYWJsIGRlY2xhcmF0aW9ucyBzbyB3ZSBjYW4gY3JlYXRlIGEgc2luZ2xldG9uIG9uIHRoZSB3aW5kb3cgb2JqZWN0XG4gKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IF9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeTogU2VydmljZVJlZ2lzdHJ5IHwgdW5kZWZpbmVkOyB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZVJlZ2lzdHJ5IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIG5ldyBzZXJ2aWNlIGludG8gdGhlIHNlcnZpY2UgcmVnaXN0cnkuIEFueSBleGlzdGluZyBvbmUgd2lsbFxuICAgKiBiZSBvdmVyd3JpdHRlbi4gdGhlIHNlcnZpY2UgaXMgcmVnaXN0ZXJlZCB1bmRlciBzZXJ2aWNlLnNlcnZpY2VOYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7QXBpU2VydmljZX0gc2VydmljZSBUaGUgc2Vydml2ZSB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXJTZXJ2aWNlKHNlcnZpY2U6IEFwaVNlcnZpY2UpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGdpdmVuIHNlcnZpY2UgZnJvbSB0aGUgcmVnaXN0cnkuIElmIHRoZXJlIGlzIG5vdCBhXG4gICAqIHNlcnZpY2UgcmVnaXN0ZXJlZCB1bmRlciB0aGF0IG5hbWUsIHRocm93cyBhbmQgZXJyb3JcbiAgICpcbiAgICogQHRlbXBsYXRlIFQgVGhlIHR5cGUgb2YgdGhlIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VOYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlLlxuICAgKiBAcmV0dXJucyB7VH0gVGhlIHJlcXVlc3RlZCBzZXJ2aWNlXG4gICAqL1xuICBnZXRTZXJ2aWNlPFQgZXh0ZW5kcyBBcGlTZXJ2aWNlPihzZXJ2aWNlTmFtZTogc3RyaW5nKTogVDtcbn1cblxuY2xhc3MgU2VydmljZVJlZ2lzdHJ5SW1wbCBpbXBsZW1lbnRzIFNlcnZpY2VSZWdpc3RyeSB7XG4gIHByaXZhdGUgX3NlcnZpY2VzOiB7IFtzZXJ2aWNlTmFtZTogc3RyaW5nXTogQXBpU2VydmljZTsgfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc2VydmljZXMgPSB7fTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlclNlcnZpY2Uoc2VydmljZTogQXBpU2VydmljZSk6IHZvaWQge1xuICAgIHRoaXMuX3NlcnZpY2VzW3NlcnZpY2Uuc2VydmljZU5hbWVdID0gc2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZXJ2aWNlPFQgZXh0ZW5kcyBBcGlTZXJ2aWNlPihzZXJ2aWNlTmFtZTogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLl9zZXJ2aWNlcy5oYXNPd25Qcm9wZXJ0eShzZXJ2aWNlTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgU2VydmljZSBub3QgcmVnaXN0ZXJlZDogJHtzZXJ2aWNlTmFtZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VydmljZXNbc2VydmljZU5hbWVdIGFzIFQ7XG4gIH1cbn1cblxuLyoqXG4gKiBzdGF0aWMgY2xhc3MgdXNlZCBmb3IgZ2V0dGluZyBhY2Nlc3MgdG8gdGhlIHNpbmdsZSBpbnN0YW5jZVxuICogb2YgdGhlIEFwaVNlcnZpY2VSZWdpc3RyeVxuICovXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZVJlZ2lzdHJ5IHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgU2VydmljZVJlZ2lzdHJ5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTZXJ2aWNlUmVnaXN0cnkge1xuICAgIGlmICghd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeSkge1xuICAgICAgQXBpU2VydmljZVJlZ2lzdHJ5LnNldEluc3RhbmNlKG5ldyBTZXJ2aWNlUmVnaXN0cnlJbXBsKCkpO1xuICAgIH1cblxuICAgIGlmICghd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZXJ2aWNlIHJlZ2lzdHJ5IGZhaWxlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gb3ZlcnJpZGUgdGhlIHJlZ2lzdHJ5IGluc3RhbmNlLiBDYW4gYmUgdXNlZCBieSB1bml0IHRlc3RzXG4gICAqXG4gICAqIEBwYXJhbSB7U2VydmljZVJlZ2lzdHJ5fSBzZXJ2aWNlUmVnaXN0cnkgVGhlIG5ldyByZWdpc3RyeVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZXRJbnN0YW5jZShzZXJ2aWNlUmVnaXN0cnk/OiBTZXJ2aWNlUmVnaXN0cnkpOiB2b2lkIHtcbiAgICB3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5ID0gc2VydmljZVJlZ2lzdHJ5O1xuICB9XG5cbiAgLy8gUHJpdmF0ZSB0byBhdm9pZCBhbnlvbmUgY29uc3RydWN0aW5nIHRoaXNcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5LnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4vUGFyYW0nO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb25zdHJ1Y3QgY29tbW9uIGVycm9ycyB0aHJvdWdob3V0IHRoZSBleHRlcm5hbFxuICogcHJvamVjdHMgKGFwaS1zaGFyZWQsIGV4dGVuc2lvbnMtYXBpLCBldGMuKS4gIEl0IGhhcyBzb21lIGR1cGxpY2F0aW9uIHdpdGhcbiAqIHRoZSBFcnJvckhlbHBlcnMgY2xhc3MgaW4gYXBpLWNvcmUsIGJ1dCBpcyBzZXBhcmF0ZSBkdWUgdG8gdGhlIG5lZWQgdG8gdGhyb3dcbiAqIGFuIGV4dGVybmFsIFRhYmxlYXVFcnJvciB2cy4gYW4gSW50ZXJuYWxUYWJsZWF1RXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckhlbHBlcnMge1xuICAvKipcbiAgICogVGhyb3dzIHdpdGggY29kZSBJbnRlcm5hbEVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gYXBpTmFtZSBuYW1lIG9mIGFwaSB0aGF0IHdhcyBjYWxsZWQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwaU5vdEltcGxlbWVudGVkKGFwaU5hbWU6IHN0cmluZyk6IFRhYmxlYXVFcnJvciB7XG4gICAgcmV0dXJuIG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgJHthcGlOYW1lfSBBUEkgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gaW50ZXJuYWwgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeUludGVybmFsVmFsdWUoYXJndW1lbnRWYWx1ZTogYW55LCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeVBhcmFtZXRlcihhcmd1bWVudFZhbHVlOiBhbnksIGFyZ3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZ3VtZW50VmFsdWUgPT09IG51bGwgfHwgYXJndW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgYCR7YXJndW1lbnRWYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgcGFyYW10ZXI6ICR7YXJndW1lbnROYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gSW52YWxpZFBhcmFtZXRlciBlcnJvciBpZiBhcmd1bWVudCBpcyBlbXB0eSBzdHJpbmcsIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYXJndW1lbnRWYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGFyZ3VtZW50TmFtZSBuYW1lIG9mIGFyZ3VtZW50IHRvIHZlcmlmeVxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlTdHJpbmdQYXJhbWV0ZXIoYXJndW1lbnRWYWx1ZTogc3RyaW5nLCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBhcmd1bWVudFZhbHVlID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yIHBhcmFtdGVyOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgcGFzc2VkIHZhbHVlIGlzIGEgdmFsaWQgdmFsdWUgZm9yIHRoYXQgZW51bS5cbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgdGhlIGVudW0gdmFsdWUgaXMgbm90IHZhbGlkLlxuICAgKlxuICAgKiBTdHJpbmcgZW51bXMgYXJlIHtzdHJpbmcgOiBzdHJpbmd9IGRpY3Rpb25hcmllcyB3aGljaCBhcmUgbm90IHJldmVyc2UgbWFwcGFibGVcbiAgICogVGhpcyBpcyBhbiB1Z2x5IHdvcmthcm91bmRcbiAgICpcbiAgICogQHBhcmFtIGVudW1WYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGVudW1UeXBlIGVudW0gdG8gdmVyaWZ5IGFnYWluc3RcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5RW51bVZhbHVlPEVudW1UeXBlPihlbnVtVmFsdWU6IEVudW1UeXBlLCBlbnVtVHlwZTogYW55KSB7XG4gICAgbGV0IGlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZm9yRWFjaCgoZW51bUtleSkgPT4ge1xuICAgICAgaWYgKGVudW1UeXBlW2VudW1LZXldID09PSBlbnVtVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2VudW1WYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgZW51bTogJHtlbnVtVHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIHBhcmFtcyBtaW4gYW5kIG1heCBmb3IgYXBwbHlpbmcgcmFuZ2UgZmlsdGVyLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICpcbiAgICogQHBhcmFtIG1pbiByYW5nZSBtaW5cbiAgICogQHBhcmFtIG1heCByYW5nZSBtYXhcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5UmFuZ2VQYXJhbVR5cGUobWluOiBhbnksIG1heDogYW55KTogdm9pZCB7XG4gICAgaWYgKCFtaW4gJiYgIW1heCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIGF0IGxlYXN0IG9uZSBvZiBtaW4gb3IgbWF4IGlzIHJlcXVpcmVkLicpO1xuICAgIH1cblxuICAgIGlmIChtaW4gJiYgIVBhcmFtLmlzVHlwZU51bWJlcihtaW4pICYmICFQYXJhbS5pc1R5cGVEYXRlKG1pbikpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBvbmx5IERhdGUgYW5kIG51bWJlciBhcmUgYWxsb3dlZCBmb3IgcGFyYW1ldGVyIG1pbi4nKTtcbiAgICB9XG5cbiAgICBpZiAobWF4ICYmICFQYXJhbS5pc1R5cGVOdW1iZXIobWF4KSAmJiAhUGFyYW0uaXNUeXBlRGF0ZShtYXgpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgb25seSBEYXRlIGFuZCBudW1iZXIgYXJlIGFsbG93ZWQgZm9yIHBhcmFtZXRlciBtYXguJyk7XG4gICAgfVxuXG4gICAgaWYgKG1pbiAmJiBtYXggJiYgdHlwZW9mIChtaW4pICE9PSB0eXBlb2YgKG1heCkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IHNob3VsZCBiZSBvZiB0aGUgc2FtZSB0eXBlLicpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRXJyb3JIZWxwZXJzLnRzIiwiLy8gVGhpcyBmaWxlIHJlLWV4cG9ydHMgZXZlcnl0aGluZyB3aGljaCBpcyBwYXJ0IG9mIHRoZSBleHRlbnNpb25zIGFwaSBwdWJsaWMgaW50ZXJmYWNlXG5cbi8vIEV4cG9ydCBldmVyeXRoaW5nIGZyb20gdGhlIHNoYXJlZCBmaWxlXG5leHBvcnQgKiBmcm9tICcuL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vLyBFeHBvcnQgdGhlIG5hbWVzcGFjZXMgd2hpY2ggYXJlIHNwZWNpZmljIHRvIGV4dGVuc2lvbnNcbmV4cG9ydCB7IEV4dGVuc2lvbnMgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9FeHRlbnNpb25zJztcbmV4cG9ydCB7IERhc2hib2FyZENvbnRlbnQgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50JztcbmV4cG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRW52aXJvbm1lbnQnO1xuZXhwb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9TZXR0aW5ncyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9VSSc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QudHMiLCJpbXBvcnQge1xuICBDb2x1bW5UeXBlIGFzIEV4dGVybmFsQ29sdW1uVHlwZSxcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSBhcyBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlIGFzIEV4dGVybmFsRGF0YVR5cGUsXG4gIERhdGVSYW5nZVR5cGUgYXMgRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLFxuICBFcnJvckNvZGVzIGFzIEV4dGVybmFsRXJyb3JDb2RlcyxcbiAgRXh0ZW5zaW9uQ29udGV4dCBhcyBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LFxuICBFeHRlbnNpb25Nb2RlIGFzIEV4dGVybmFsRXh0ZW5zaW9uc01vZGUsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlIGFzIEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUgYXMgRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJUeXBlIGFzIEV4dGVybmFsRmlsdGVyVHlwZSxcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFBhcmFtZXRlclZhbHVlVHlwZSBhcyBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZSxcbiAgUGVyaW9kVHlwZSBhcyBFeHRlcm5hbERhdGVQZXJpb2QsXG4gIFNoZWV0VHlwZSBhcyBFeHRlcm5hbFNoZWV0VHlwZSxcbn0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIENvbHVtblR5cGUgYXMgSW50ZXJuYWxDb2x1bW5UeXBlLFxuICBEYXNoYm9hcmRPYmplY3RUeXBlIGFzIEludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRGF0YVR5cGUgYXMgSW50ZXJuYWxEYXRhVHlwZSxcbiAgRGF0ZVJhbmdlVHlwZSBhcyBJbnRlcm5hbERhdGVSYW5nZVR5cGUsXG4gIERhdGVTdGVwUGVyaW9kIGFzIEludGVybmFsRGF0ZVN0ZXBQZXJpb2QsXG4gIERvbWFpblJlc3RyaWN0aW9uVHlwZSBhcyBJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZSxcbiAgRXJyb3JDb2RlcyBhcyBJbnRlcm5hbEVycm9yQ29kZXMsXG4gIEV4dGVuc2lvbkNvbnRleHQgYXMgSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSBhcyBJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLFxuICBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSBhcyBJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlIGFzIEludGVybmFsRmllbGRSb2xlVHlwZSxcbiAgRmlsdGVyVHlwZSBhcyBJbnRlcm5hbEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLFxuICBTaGVldFR5cGUgYXMgSW50ZXJuYWxTaGVldFR5cGUsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi9VdGlscy9FbnVtQ29udmVydGVyJztcblxuLyogdHNsaW50OmRpc2FibGU6dHlwZWRlZiAtIERpc2FibGUgdGhpcyB0byBtYWtlIGRlY2xhcmluZyB0aGVzZSBjbGFzc2VzIGEgYml0IGVhc2llciAqL1xuLyoqXG4gKiBNYXBzIGVudW1zIHVzZWQgYnkgdGhlIGludGVybmFsLWFwaS1jb250cmFjdCB0byB0aGUgZW51bXMgdXNlZFxuICogaW4gdGhlIGV4dGVybmFsLWFwaS1jb250cmFjdCwgd2hpY2ggZGV2ZWxvcGVycyBjb2RlIGFnYWluc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3Mge1xuICBwdWJsaWMgc3RhdGljIGV4dGVuc2lvbkNvbnRleHQgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LCBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0Pih7XG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuRGVza3RvcF06IEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuRGVza3RvcCxcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5TZXJ2ZXJdOiBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LlNlcnZlclxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGV4dGVuc2lvbk1vZGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLCBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlPih7XG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc01vZGUuQXV0aG9yaW5nXTogRXh0ZXJuYWxFeHRlbnNpb25zTW9kZS5BdXRob3JpbmcsXG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc01vZGUuVmlld2luZ106IEV4dGVybmFsRXh0ZW5zaW9uc01vZGUuVmlld2luZ1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGNvbHVtblR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbENvbHVtblR5cGUsIEV4dGVybmFsQ29sdW1uVHlwZT4oe1xuICAgIFtJbnRlcm5hbENvbHVtblR5cGUuQ29udGludW91c106IEV4dGVybmFsQ29sdW1uVHlwZS5Db250aW51b3VzLFxuICAgIFtJbnRlcm5hbENvbHVtblR5cGUuRGlzY3JldGVdOiBFeHRlcm5hbENvbHVtblR5cGUuRGlzY3JldGVcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWVsZEFnZ3JlZ2F0aW9uVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsIEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdHRyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdHRyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF2Z106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXZnLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudGRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50ZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5EYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkRheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5FbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkVuZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ib3VyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ib3VyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkluT3V0XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Jbk91dCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5LdXJ0b3Npc106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuS3VydG9zaXMsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWF4XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NYXgsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWR5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZHksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWVkaWFuXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZWRpYW4sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWluXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW4sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWludXRlXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW51dGUsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTW9udGhZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Nb250aFllYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTm9uZV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTm9uZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdHJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF0cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDFdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDNdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TZWNvbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNlY29uZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ta2V3bmVzc106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2tld25lc3MsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2cF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZwLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN1bV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3VtLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jRGF5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0RheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0hvdXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jSG91cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01pbnV0ZV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNaW51dGUsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNb250aF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNb250aCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1F0cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNRdHIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNTZWNvbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jU2Vjb25kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jV2Vla106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNXZWVrLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jWWVhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNZZWFyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlVzZXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlVzZXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFycF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFycCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtkYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtkYXksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuWWVhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuWWVhcixcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWVsZFJvbGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWVsZFJvbGVUeXBlLCBFeHRlcm5hbEZpZWxkUm9sZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLkRpbWVuc2lvbl06IEV4dGVybmFsRmllbGRSb2xlVHlwZS5EaW1lbnNpb24sXG4gICAgW0ludGVybmFsRmllbGRSb2xlVHlwZS5NZWFzdXJlXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLk1lYXN1cmUsXG4gICAgW0ludGVybmFsRmllbGRSb2xlVHlwZS5Vbmtub3duXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLlVua25vd24sXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgc2hlZXRUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxTaGVldFR5cGUsIEV4dGVybmFsU2hlZXRUeXBlPih7XG4gICAgW0ludGVybmFsU2hlZXRUeXBlLkRhc2hib2FyZF06IEV4dGVybmFsU2hlZXRUeXBlLkRhc2hib2FyZCxcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuU3RvcnldOiBFeHRlcm5hbFNoZWV0VHlwZS5TdG9yeSxcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuV29ya3NoZWV0XTogRXh0ZXJuYWxTaGVldFR5cGUuV29ya3NoZWV0XG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGFzaGJvYXJkT2JqZWN0VHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZSwgRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlPih7XG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5FeHRlbnNpb25dOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuRXh0ZW5zaW9uLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuQmxhbmtdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuQmxhbmssXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5JbWFnZV06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5JbWFnZSxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkxlZ2VuZF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5MZWdlbmQsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYWdlRmlsdGVyXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhZ2VGaWx0ZXIsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYXJhbWV0ZXJDb250cm9sXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhcmFtZXRlckNvbnRyb2wsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5RdWlja0ZpbHRlcl06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5RdWlja0ZpbHRlcixcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRleHRdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGV4dCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRpdGxlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRpdGxlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV2ViUGFnZV06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5XZWJQYWdlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0XTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldvcmtzaGVldFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGFUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXRhVHlwZSwgRXh0ZXJuYWxEYXRhVHlwZT4oe1xuICAgIFtJbnRlcm5hbERhdGFUeXBlLkJvb2xdOiBFeHRlcm5hbERhdGFUeXBlLkJvb2wsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuRGF0ZV06IEV4dGVybmFsRGF0YVR5cGUuRGF0ZSxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5EYXRlVGltZV06IEV4dGVybmFsRGF0YVR5cGUuRGF0ZVRpbWUsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuRmxvYXRdOiBFeHRlcm5hbERhdGFUeXBlLkZsb2F0LFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkludF06IEV4dGVybmFsRGF0YVR5cGUuSW50LFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLlN0cmluZ106IEV4dGVybmFsRGF0YVR5cGUuU3RyaW5nXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyVXBkYXRlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmlsdGVyVXBkYXRlVHlwZSwgRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlPih7XG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGRdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkLFxuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbCxcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZV06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmUsXG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBhbGxvd2FibGVWYWx1ZXMgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZSwgRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUuQWxsXTogRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUuQWxsLFxuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5MaXN0XTogRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUuTGlzdCxcbiAgICBbSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUuUmFuZ2VdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5SYW5nZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGVTdGVwUGVyaW9kID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXRlU3RlcFBlcmlvZCwgRXh0ZXJuYWxEYXRlUGVyaW9kPih7XG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuWWVhcnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuWWVhcnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuUXVhcnRlcnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuUXVhcnRlcnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuTW9udGhzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLk1vbnRocyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5XZWVrc106IEV4dGVybmFsRGF0ZVBlcmlvZC5XZWVrcyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5EYXlzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLkRheXMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuSG91cnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuSG91cnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuTWludXRlc106IEV4dGVybmFsRGF0ZVBlcmlvZC5NaW51dGVzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLlNlY29uZHNdOiBFeHRlcm5hbERhdGVQZXJpb2QuU2Vjb25kc1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGVSYW5nZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGVSYW5nZVR5cGUsIEV4dGVybmFsRGF0ZVJhbmdlVHlwZT4oe1xuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuQ3VycmVudF06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5DdXJyZW50LFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdF06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0LFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdE5dOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdE4sXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHQsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0Tl06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0TixcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLlRvRGF0ZV06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5Ub0RhdGVcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBlcnJvckNvZGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEVycm9yQ29kZXMsIEV4dGVybmFsRXJyb3JDb2Rlcz4oe1xuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuSU5JVElBTElaQVRJT05fRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLklOVEVSTkFMX0VSUk9SXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5NSVNTSU5HX0VOVU1fTUFQUElOR106IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuTUlTU0lOR19QQVJBTUVURVJdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlBFUk1JU1NJT05fREVOSUVEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5QUkVTX01PREVMX1BBUlNJTkdfRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlVOS05PV05fVkVSQl9JRF06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuVkVSU0lPTl9OT1RfQ09ORklHVVJFRF06IEV4dGVybmFsRXJyb3JDb2Rlcy5BUElOb3RJbml0aWFsaXplZFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpbHRlclR5cGUsIEV4dGVybmFsRmlsdGVyVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuQ2F0ZWdvcmljYWxdOiBFeHRlcm5hbEZpbHRlclR5cGUuQ2F0ZWdvcmljYWwsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5SYW5nZV06IEV4dGVybmFsRmlsdGVyVHlwZS5SYW5nZSxcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZV06IEV4dGVybmFsRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGUsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5IaWVyYXJjaGljYWxdOiBFeHRlcm5hbEZpbHRlclR5cGUuSGllcmFyY2hpY2FsXG4gIH0pO1xufVxuLyogdHNsaW50OmVuYWJsZTp0eXBlZGVmICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXhlY3V0ZVJlc3BvbnNlLFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXIsXG4gIEludGVybmFsVGFibGVhdUVycm9yLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIEVhY2ggU2VydmNlSW1wbCBzaG91bGQgZXh0ZW5kIHRoaXMgYmFzZSBjbGFzcyBmb3IgdGhlIHNha2Ugb2ZcbiAqIHByb3BlciBlcnJvciBoYW5kbGluZy4gIFRoaXMgYmFzZSBoYW5kbGVzIHRoZSBjb252ZXJzaW9uXG4gKiBmcm9tIGludGVybmFsIGVycm9ycyB0byBleHRlcm5hbCBlcnJvcnMgdGhhdCB3ZSB0aHJvdyB0byBkZXZlbG9wZXJzXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlSW1wbEJhc2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKSB7IH1cblxuICBwcm90ZWN0ZWQgZXhlY3V0ZSh2ZXJiOiBWZXJiSWQsIHBhcmFtczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BhdGNoZXIuZXhlY3V0ZSh2ZXJiLCBwYXJhbXMpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgLy8gQW55IGludGVybmFsIGVycm9yIHRoYXQgY29tZXMgZnJvbSB0aGUgZGlzcGF0Y2hlciBzaG91bGQgYmUgY29udmVydGVkXG4gICAgICAvLyB0byBhbiBleHRlcm5hbCBlcnJvciB1c2luZyB0aGUgZW51bSBtYXBwZXIgZm9yIGVycm9yIGNvZGVzLlxuICAgICAgY29uc3QgaW50ZXJuYWxFcnJvciA9IGVycm9yIGFzIEludGVybmFsVGFibGVhdUVycm9yO1xuICAgICAgY29uc3QgZXh0ZXJuYWxFcnJvckNvZGU6IEVycm9yQ29kZXMgPSBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZXJyb3JDb2RlLmNvbnZlcnQoaW50ZXJuYWxFcnJvci5lcnJvckNvZGUpO1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihleHRlcm5hbEVycm9yQ29kZSwgaW50ZXJuYWxFcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZXJ2aWNlSW1wbEJhc2UudHMiLCJpbXBvcnQgeyBWZXJzaW9uTnVtYmVyLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzLCBNb2RlbCwgTm90aWZpY2F0aW9uSWQgfSBmcm9tICcuLi8uLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEVudW0gZGVmaW5pbmcgdGhlIDQgZGlmZmVyZW50IHR5cGVzIG9mIG1lc3NhZ2VzIHdlIGhhdmUgZGVmaW5lZFxuICovXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gIEluaXRpYWxpemUgPSAnaW5pdGlhbGl6ZScsXG4gIE5vdGlmaWNhdGlvbiA9ICdub3RpZmljYXRpb24nLFxuICBDb21tYW5kID0gJ2NvbW1hbmQnLFxuICBDb21tYW5kUmVzcG9uc2UgPSAnY29tbWFuZC1yZXNwb25zZSdcbn1cblxuLyoqXG4gKiBUaGUgTWVzc2FnZSBpbnRlcmZhY2UgaXMgdGhlIGJhc2UgaW50ZXJmYWNlIGZvciBhbGwgdGhlIG90aGVyXG4gKiBtZXNzYWdlIHR5cGUgaW50ZXJmYWNlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIGlkIGZvciB0aGlzIG1lc3NhZ2VcbiAgICovXG4gIG1zZ0d1aWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhpcyBtZXNzYWdlXG4gICAqL1xuICBtc2dUeXBlOiBNZXNzYWdlVHlwZTtcbn1cblxuLyoqXG4gKiBUaGUgaW5pdGlhbGl6ZSBtZXNzYWdlIGlzIHRoZSBmaXJzdCBtZXNzYWdlIHdoaWNoIHdpbGwgYmUgc2VudFxuICogZnJvbSB0aGUgamF2YXNjcmlwdCB0byBzZXQgdXAgY29tbXVuaWNhdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbml0aWFsaXplTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgdGhlIGFwaSB3aGljaCB0aGUgc2VuZGVyIHdhbnRzIHRvIHVzZVxuICAgKi9cbiAgYXBpVmVyc2lvbjogVmVyc2lvbk51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgdGhpcyBtZXNzYWdpbmcgY29udHJhY3QgdG8gYmUgdXNlZC4gRm9yIG5vdywgdGhlcmVcbiAgICogc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgdmVyc2lvbiBidXQgc2VuZGluZyB0aGlzIGFsb25nIHNob3VsZCBoZWxwXG4gICAqIGlmIHdlIG5lZWQgdG8gYWRkIGEgbmV3IHZlcnNpb24gaW4gYSBmdXR1cmUgcmVsZWFzZVxuICAgKi9cbiAgY3Jvc3NGcmFtZVZlcnNpb246IFZlcnNpb25OdW1iZXI7XG59XG5cbi8qKlxuICogVGhpcyBtZXNzYWdlIGlzIHNlbnQgd2hlbiBhIG5vdGlmaWNhdGlvbiBvY2N1cnMgZnJvbSB0aGUgcHJlc2xheWVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIGlkIGZvciB0aGlzIHR5cGUgb2Ygbm90aWZpY2F0aW9uXG4gICAqL1xuICBub3RpZmljYXRpb25JZDogTm90aWZpY2F0aW9uSWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRhIHdoaWNoIGNhbWUgYWxvbmcgd2l0aCB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICBkYXRhOiBNb2RlbDtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGNhbGxpbmcgYW4gaW50ZXJuYWwgY29udHJhY3QgY29tbWFuZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGNvbW1hbmQgd2hpY2ggc2hvdWxkIGJlIGV4ZWN1dGVkXG4gICAqL1xuICB2ZXJiSWQ6IFZlcmJJZDtcblxuICAvKipcbiAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBjb21tYW5kXG4gICAqL1xuICBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycztcbn1cblxuLyoqXG4gKiBUaGlzIG1lc3NhZ2UgaXMgc2VudCBpbiByZXNwb25zZSB0byBhIENvbW1hbmRNZXNzYWdlIHdpdGggdGhlXG4gKiByZXN1bHQgb2YgdGhhdCBjb21tYW5kcyBpbnZvY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogR3VpZCBvZiB0aGUgQ29tbWFuZE1lc3NhZ2Ugd2hpY2ggdGhpcyBpcyBpbiByZXNwb25zZSB0b1xuICAgKi9cbiAgY29tbWFuZEd1aWQ6IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdGhlcmUgd2FzIGFuIGVycm9yIHJldHVybmVkIGZyb20gdGhlIGNvbW1hbmQsIHRoaXMgd2lsbCBiZSBkZWZpbmVkXG4gICAqIGFuZCBjb250YWluIHRoZSBlcnJvclxuICAgKi9cbiAgZXJyb3I/OiBNb2RlbDtcblxuICAvKipcbiAgICogSWYgdGhlIGNvbW1hbmQgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LCB0aGlzIHdpbGwgY29udGFpbiB0aGUgY29tbWFuZCByZXN1bHRcbiAgICovXG4gIGRhdGE/OiBNb2RlbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIENsYXNzIGRlc2lnbmVkIHRvIHJlZ2lzdGVyIGFuZCB1bnJlZ2lzdGVyIGhhbmRsZXJzIGZyb20gYSB1c2VyLiBPbmx5IHRob3NlIGV2ZW50c1xuICogd2hpY2ggYXJlIGFkZGVkIHZpYSBBZGROZXdFdmVudFR5cGUgd2lsbCBiZSBzdXBwb3J0ZWQgYnkgdGhpcyBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5FdmVudExpc3RlbmVyTWFuYWdlciB7XG4gIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJNYW5hZ2VyczogeyBbdGFibGVhdUV2ZW50VHlwZTogc3RyaW5nXTogU2luZ2xlRXZlbnRNYW5hZ2VyOyB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnMgPSB7fTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSxcbiAgICBoYW5kbGVyOiBDb250cmFjdC5UYWJsZWF1RXZlbnRIYW5kbGVyRm4pOiBDb250cmFjdC5UYWJsZWF1RXZlbnRVbnJlZ2lzdGVyRm4ge1xuICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzLmhhc093blByb3BlcnR5KGV2ZW50VHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5VbnN1cHBvcnRlZEV2ZW50TmFtZSwgYENhbm5vdCBhZGQgZXZlbnQsIHVuc3VwcG9ydGVkIGV2ZW50IHR5cGU6ICR7ZXZlbnRUeXBlfWApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnNbZXZlbnRUeXBlXS5hZGRFdmVudExpc3RlbmVyKGhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBoYW5kbGVyOiBDb250cmFjdC5UYWJsZWF1RXZlbnRIYW5kbGVyRm4pOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vycy5oYXNPd25Qcm9wZXJ0eShldmVudFR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuVW5zdXBwb3J0ZWRFdmVudE5hbWUsIGBDYW5ub3QgcmVtb3ZlIGV2ZW50LCB1bnN1cHBvcnRlZCBldmVudCB0eXBlOiAke2V2ZW50VHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50VHlwZV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGROZXdFdmVudFR5cGUoZXZlbnRNYW5hZ2VyOiBTaW5nbGVFdmVudE1hbmFnZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnNbZXZlbnRNYW5hZ2VyLmV2ZW50VHlwZV0gPSBldmVudE1hbmFnZXI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4uL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIHRoZSBTaW5nbGVFdmVudE1hbmFnZXIgaW50ZXJmYWNlIGZvciBhIHNpbmdsZSB0eXBlIG9mIFRhYmxlYXUgZXZlbnRcbiAqXG4gKiBAdGVtcGxhdGUgVEV2ZW50VHlwZSBUaGUgVGFibGVhdSBldmVudCB0eXBlIHRoaXMgY2xhc3Mgc3BlY2lhbGl6ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbmdsZUV2ZW50TWFuYWdlckltcGw8VEV2ZW50VHlwZSBleHRlbmRzIENvbnRyYWN0LlRhYmxlYXVFdmVudD4gaW1wbGVtZW50cyBTaW5nbGVFdmVudE1hbmFnZXIge1xuICBwcml2YXRlIF9ldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGU7XG4gIHByaXZhdGUgX2hhbmRsZXJzOiBBcnJheTwoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQ+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUpIHtcbiAgICB0aGlzLl9ldmVudFR5cGUgPSBldmVudFR5cGU7XG4gICAgdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXZlbnRUeXBlKCk6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9ldmVudFR5cGU7XG4gIH1cblxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihoYW5kbGVyOiAoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQpOiBDb250cmFjdC5UYWJsZWF1RXZlbnRVbnJlZ2lzdGVyRm4ge1xuICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXI6IChldmVudE9iajogVEV2ZW50VHlwZSkgPT4gdm9pZCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGJlZm9yZUNvdW50ID0gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xuICAgIHRoaXMuX2hhbmRsZXJzID0gdGhpcy5faGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XG4gICAgcmV0dXJuIGJlZm9yZUNvdW50ID4gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJFdmVudChldmVudEdlbmVyYXRvcjogKCkgPT4gVEV2ZW50VHlwZSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLl9oYW5kbGVycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXZlbnRNb2RlbCA9IGV2ZW50R2VuZXJhdG9yKCk7XG4gICAgICAgIGhhbmRsZXIoZXZlbnRNb2RlbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFNpbmNlIHRoaXMgaGFuZGxlciBjb3VsZCBiZSBvdXRzaWRlIG91ciBjb250cm9sLCBqdXN0IGNhdGNoIGFueXRoaW5nIGl0IHRocm93cyBhbmQgY29udGludWUgb25cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NpbmdsZUV2ZW50TWFuYWdlckltcGwudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBQYXJhbSB7XG4gIC8qKlxuICAgKiBzZXJpYWxpemVzIHRoZSBkYXRlIGludG8gdGhlIGZvcm1hdCB0aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cy5cbiAgICogQHBhcmFtIGRhdGUgdGhlIGRhdGUgdG8gc2VyaWFsaXplXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGg6IG51bWJlciA9IGRhdGUuZ2V0VVRDTW9udGgoKSArIDE7XG4gICAgY29uc3QgZGF5OiBudW1iZXIgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICBjb25zdCBoaDogbnVtYmVyID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGNvbnN0IG1tOiBudW1iZXIgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgICBjb25zdCBzZWM6IG51bWJlciA9IGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gJHtoaH06JHttbX06JHtzZWN9YDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplQm9vbGVhbkZvclBsYXRmb3JtKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBib29sID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplTnVtYmVyRm9yUGxhdGZvcm0obnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBpbnB1dCBpcyBhIG51bWJlclxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlTnVtYmVyKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdudW1iZXInIHx8IGlucHV0IGluc3RhbmNlb2YgTnVtYmVyO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBpbnB1dCBpcyBhIERhdGVcbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZURhdGUoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIERhdGU7XG4gIH1cbiAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlU3RyaW5nKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZUJvb2woaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgKGlucHV0KSA9PT0gJ2Jvb2xlYW4nIHx8IGlucHV0IGluc3RhbmNlb2YgQm9vbGVhbjtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVQYXJhbXRlclZhbHVlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChQYXJhbS5pc1R5cGVOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gUGFyYW0uc2VyaWFsaXplTnVtYmVyRm9yUGxhdGZvcm0odmFsdWUgYXMgbnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKFBhcmFtLmlzVHlwZURhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKHZhbHVlIGFzIERhdGUpO1xuICAgIH0gZWxzZSBpZiAoUGFyYW0uaXNUeXBlQm9vbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVCb29sZWFuRm9yUGxhdGZvcm0odmFsdWUgYXMgYm9vbGVhbik7XG4gICAgfSBlbHNlIGlmIChQYXJhbS5pc1R5cGVTdHJpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgVW5leHBlY3RlZCBpbnZhbGlkIHZhbHVlIGZvcjogJHt2YWx1ZX1gKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL1BhcmFtLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUgaW1wbGVtZW50cyBDb250cmFjdC5EYXRhVGFibGUge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RhdGE6IEFycmF5PEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4+LFxuICAgIHByaXZhdGUgX2NvbHVtbnM6IEFycmF5PENvbnRyYWN0LkNvbHVtbj4sXG4gICAgcHJpdmF0ZSBfdG90YWxSb3dDb3VudDogbnVtYmVyLFxuICAgIHByaXZhdGUgX2lzU3VtbWFyeURhdGE6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfbWFya3NJbmZvPzogQXJyYXk8TWFya0luZm8+KSB7XG4gICAgLy8gVE9ETzogZ2V0IHJpZCBvZiB0aGlzIGluIHJlZGVzaWduLlxuICAgIHRoaXMuX25hbWUgPSBfaXNTdW1tYXJ5RGF0YSA/ICdTdW1tYXJ5IERhdGEgVGFibGUnIDogJ1VuZGVybHlpbmcgRGF0YSBUYWJsZSc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBBcnJheTxBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKTogQXJyYXk8Q29udHJhY3QuQ29sdW1uPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hcmtzSW5mbygpOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXJrc0luZm87XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRvdGFsUm93Q291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxSb3dDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNTdW1tYXJ5RGF0YSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTdW1tYXJ5RGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFya0luZm8gaW1wbGVtZW50cyBDb250cmFjdC5NYXJrSW5mbyB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90eXBlOiBDb250cmFjdC5NYXJrVHlwZSxcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nLFxuICAgIHByaXZhdGUgX3R1cGxlSWQ/OiBOdW1iZXJcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuTWFya1R5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHVwbGVJZCgpOiBOdW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90dXBsZUlkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW4gaW1wbGVtZW50cyBDb250cmFjdC5Db2x1bW4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZmllbGROYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfZGF0YVR5cGU6IENvbnRyYWN0LkRhdGFUeXBlLCAvLyBUT0RPOiB0aGlzIHNob3VkbCBiZSBhbiBlbnVtIHR5cGVcbiAgICBwcml2YXRlIF9pc1JlZmVyZW5jZWQ6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlcikgeyB9XG5cbiAgcHVibGljIGdldCBmaWVsZE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhVHlwZSgpOiBDb250cmFjdC5EYXRhVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1JlZmVyZW5jZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVmZXJlbmNlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFWYWx1ZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueSxcbiAgICBwcml2YXRlIF9mb3JtYXR0ZWRWYWx1ZTogc3RyaW5nKSB7IH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXR0ZWRWYWx1ZTtcbiAgfVxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL0dldERhdGFNb2RlbHMudHMiLCIoZnVuY3Rpb24gKCkge1xuICB2YXIgdmFsaWRhdG9yID0gbmV3IFJlZ0V4cChcIl5bYS16MC05XXs4fS1bYS16MC05XXs0fS1bYS16MC05XXs0fS1bYS16MC05XXs0fS1bYS16MC05XXsxMn0kXCIsIFwiaVwiKTtcblxuICBmdW5jdGlvbiBnZW4oY291bnQpIHtcbiAgICB2YXIgb3V0ID0gXCJcIjtcbiAgICBmb3IgKHZhciBpPTA7IGk8Y291bnQ7IGkrKykge1xuICAgICAgb3V0ICs9ICgoKDErTWF0aC5yYW5kb20oKSkqMHgxMDAwMCl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEd1aWQoZ3VpZCkge1xuICAgIGlmICghZ3VpZCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXJndW1lbnQ7IGB2YWx1ZWAgaGFzIG5vIHZhbHVlLlwiKTtcbiAgICAgIFxuICAgIHRoaXMudmFsdWUgPSBHdWlkLkVNUFRZO1xuICAgIFxuICAgIGlmIChndWlkICYmIGd1aWQgaW5zdGFuY2VvZiBHdWlkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZ3VpZC50b1N0cmluZygpO1xuXG4gICAgfSBlbHNlIGlmIChndWlkICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChndWlkKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIiAmJiBHdWlkLmlzR3VpZChndWlkKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGd1aWQ7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIC8vIENvbXBhcmluZyBzdHJpbmcgYHZhbHVlYCBhZ2FpbnN0IHByb3ZpZGVkIGBndWlkYCB3aWxsIGF1dG8tY2FsbFxuICAgICAgLy8gdG9TdHJpbmcgb24gYGd1aWRgIGZvciBjb21wYXJpc29uXG4gICAgICByZXR1cm4gR3VpZC5pc0d1aWQob3RoZXIpICYmIHRoaXMudmFsdWUgPT0gb3RoZXI7XG4gICAgfTtcblxuICAgIHRoaXMuaXNFbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IEd1aWQuRU1QVFk7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIFxuICAgIHRoaXMudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIEd1aWQuRU1QVFkgPSBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiO1xuXG4gIEd1aWQuaXNHdWlkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlIGluc3RhbmNlb2YgR3VpZCB8fCB2YWxpZGF0b3IudGVzdCh2YWx1ZS50b1N0cmluZygpKSk7XG4gIH07XG5cbiAgR3VpZC5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEd1aWQoW2dlbigyKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigxKSwgZ2VuKDMpXS5qb2luKFwiLVwiKSk7XG4gIH07XG5cbiAgR3VpZC5yYXcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW2dlbigyKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigxKSwgZ2VuKDMpXS5qb2luKFwiLVwiKTtcbiAgfTtcblxuICBpZih0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBHdWlkO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuR3VpZCA9IEd1aWQ7XG4gIH1cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZ3VpZC9ndWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRXZlbnRMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0V2ZW50TGlzdGVuZXJNYW5hZ2VyJztcblxuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9JbXBsL1NoZWV0SW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldCBleHRlbmRzIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIGltcGxlbWVudHMgQ29udHJhY3QuU2hlZXQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hlZXRJbXBsOiBTaGVldEltcGwpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogQ29udHJhY3QuU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLnNoZWV0VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBDb250cmFjdC5TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLnNpemU7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckFzeW5jKHBhcmFtZXRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5maW5kUGFyYW1ldGVyQXN5bmMocGFyYW1ldGVyTmFtZSwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyYW1ldGVyc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuUGFyYW1ldGVyPj4ge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuZ2V0UGFyYW1ldGVyc0FzeW5jKHRoaXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaGVldC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnZlcnRzIGZyb20gYSBzb3VyY2UgZW51bSB2YWx1ZSB0byBkZXN0aW5hdGlvbiBlbnVtXG4gKiB2YWx1ZSBnaXZlbiBhIG1hcHBpbmcgZnJvbSBzb3VyY2UgdG8gZGVzdGluYXRpb24gd2hlbiBjb25zdHJ1Y3RlZC5cbiAqXG4gKiBOb3RlOiBUaGlzIGV4YWN0IHNhbWUgY2xhc3MgaXMgZGVmaW5lZCBpbiBhcGktY29yZS4gIEdpdmVuIGl0cyBzbWFsbFxuICogbmF0dXJlLCBpdCBpcyBub3Qgd29ydGggaGF2aW5nIGluIGEgc2VwYXJhdGUgcHJvamVjdCB0byBzaGFyZSB0aGlzIGJldHdlZW5cbiAqIGFwaS1jb3JlIGFuZCBhcGktc2hhcmVkLiAgSWYgbW9yZSB1dGlsaXR5IGZ1bmN0aW9uYWxpdHkgaXMgYWRkZWQgdGhhdCBpcyB1c2VkIGJ5IGFwaS1jb3JlXG4gKiBhbmQgYXBpLXNoYXJlZCBidXQgaGFzIG5vIG90aGVyIGRlcGVuZGVjaWVzLCBhIHV0aWx0aXR5IHByb2plY3QgbWlnaHQgYmUgbWVyaXRlZCxcbiAqIGFuZCB0aGlzIGNsYXNzIGNvdWxkIGJlIG1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgRW51bUNvbnZlcnRlcjxUU291cmNlVHlwZSBleHRlbmRzIHN0cmluZywgVERlc3RpbmF0aW9uVHlwZT4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbWFwcGluZ3M6IHsgW2VudW1WYWw6IHN0cmluZ106IFREZXN0aW5hdGlvblR5cGU7IH0sXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFZhbD86IFREZXN0aW5hdGlvblR5cGUpIHsgfVxuXG4gIHB1YmxpYyBjb252ZXJ0KGVudW1WYWw6IFRTb3VyY2VUeXBlLCB0aHJvd0lmTWlzc2luZz86IGJvb2xlYW4pOiBURGVzdGluYXRpb25UeXBlIHtcbiAgICBpZiAodGhpcy5fbWFwcGluZ3MuaGFzT3duUHJvcGVydHkoZW51bVZhbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXBwaW5nc1tlbnVtVmFsIGFzIHN0cmluZ107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlZmF1bHRWYWwgIT09IHVuZGVmaW5lZCAmJiAhdGhyb3dJZk1pc3NpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgRW51bSBNYXBwaW5nIG5vdCBmb3VuZCBmb3I6ICR7ZW51bVZhbH1gKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRW51bUNvbnZlcnRlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdUV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuVGFibGVhdUV2ZW50IHtcbiAgcHJpdmF0ZSBfdHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdUV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTaGVldFBhdGggfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTaGVldEluZm9JbXBsIH0gZnJvbSAnLi9TaGVldEluZm9JbXBsJztcblxuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NoZWV0SW5mb0ltcGw6IFNoZWV0SW5mb0ltcGwpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0VHlwZSgpOiBDb250cmFjdC5TaGVldFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLnNoZWV0VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRQYXRoKCk6IFNoZWV0UGF0aCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRQYXRoO1xuICB9XG5cbiAgcHVibGljIGdldCBzaXplKCk6IENvbnRyYWN0LlNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLnNoZWV0U2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUGFyYW1ldGVyQXN5bmMocGFyYW1ldGVyTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIocGFyYW1ldGVyTmFtZSwgJ3BhcmFtZXRlck5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNoZWV0LCAnc2hlZXQnKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlLmZpbmRQYXJhbWV0ZXJCeU5hbWVBc3luYyhwYXJhbWV0ZXJOYW1lLCBzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyYW1ldGVyc0FzeW5jKHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuUGFyYW1ldGVyPj4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0UGFyYW1ldGVyc0ZvclNoZWV0QXN5bmModGhpcy5zaGVldFBhdGgsIHNoZWV0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL0ltcGwvRGF0YVNvdXJjZUltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNvdXJjZUltcGw6IERhdGFTb3VyY2VJbXBsKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkcygpOiBBcnJheTxDb250cmFjdC5GaWVsZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5maWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV4dHJhY3RVcGRhdGVUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmV4dHJhY3RVcGRhdGVUaW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4dHJhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmlzRXh0cmFjdDtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLnJlZnJlc2hBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRBY3RpdmVUYWJsZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM/OiBDb250cmFjdC5EYXRhU291cmNlVW5kZXJseWluZ0RhdGFPcHRpb25zKTpcbiAgICBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXRhU291cmNlLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4vRmllbGRJbXBsJztcblxuaW1wb3J0IHsgQ29ubmVjdGlvblN1bW1hcnkgfSBmcm9tICcuLi9Db25uZWN0aW9uU3VtbWFyeSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL0ZpZWxkJztcbmltcG9ydCB7IFRhYmxlU3VtbWFyeSB9IGZyb20gJy4uL1RhYmxlU3VtbWFyeSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZUltcGwge1xuICBwcml2YXRlIF9maWVsZHM6IEFycmF5PEZpZWxkPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNvdXJjZUluZm86IEludGVybmFsQ29udHJhY3QuRGF0YVNvdXJjZSkge1xuICAgIHRoaXMuX2ZpZWxkcyA9IF9kYXRhU291cmNlSW5mby5maWVsZHMubWFwKGZpZWxkTW9kZWwgPT4ge1xuICAgICAgY29uc3QgZmllbGRJbXBsID0gbmV3IEZpZWxkSW1wbChmaWVsZE1vZGVsLCB0aGlzKTtcbiAgICAgIHJldHVybiBuZXcgRmllbGQoZmllbGRJbXBsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXh0cmFjdFVwZGF0ZVRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uZXh0cmFjdFVwZGF0ZVRpbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkcygpOiBBcnJheTxDb250cmFjdC5GaWVsZD4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXh0cmFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uaXNFeHRyYWN0O1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhU291cmNlU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVNlcnZpY2UucmVmcmVzaEFzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeVtdPiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oXG4gICAgICBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VTZXJ2aWNlLmdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCkudGhlbjxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeVtdPihzdW1tYXJpZXMgPT4ge1xuICAgICAgcmV0dXJuIHN1bW1hcmllcy5tYXAoc3VtbWFyeSA9PiBuZXcgQ29ubmVjdGlvblN1bW1hcnkoc3VtbWFyeSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBkYXRhU291cmNlU2VydmljZS5nZXRBY3RpdmVUYWJsZXNBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCkudGhlbjxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+Pih0YWJsZUluZm9zID0+IHtcbiAgICAgIHJldHVybiB0YWJsZUluZm9zLm1hcCh0YWJsZUluZm8gPT4gbmV3IFRhYmxlU3VtbWFyeSh0YWJsZUluZm8pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM/OiBDb250cmFjdC5EYXRhU291cmNlVW5kZXJseWluZ0RhdGFPcHRpb25zKTpcbiAgICBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgaWdub3JlQWxpYXNlczogZmFsc2UsXG4gICAgICBtYXhSb3dzOiAxMDAwMCxcbiAgICAgIGNvbHVtbnNUb0luY2x1ZGU6IFtdLFxuICAgIH07XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGNvbnN0IGdldERhdGFTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gZ2V0RGF0YVNlcnZpY2UuZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICAgIHRoaXMuaWQsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCBkZWZhdWx0T3B0aW9ucy5tYXhSb3dzLFxuICAgICAgb3B0aW9ucy5jb2x1bW5zVG9JbmNsdWRlIHx8IGRlZmF1bHRPcHRpb25zLmNvbHVtbnNUb0luY2x1ZGUpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoZGF0YVNvdXJjZSwgJ2RhdGFTb3VyY2UnKTtcblxuICAgIHRoaXMuX2ZpZWxkcyA9IHRoaXMuX2RhdGFTb3VyY2VJbmZvLmZpZWxkcy5tYXAoZmllbGRNb2RlbCA9PiB7XG4gICAgICBjb25zdCBmaWVsZEltcGwgPSBuZXcgRmllbGRJbXBsKGZpZWxkTW9kZWwsIGRhdGFTb3VyY2UpO1xuICAgICAgcmV0dXJuIG5ldyBGaWVsZChmaWVsZEltcGwpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0RhdGFTb3VyY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpZWxkSW5mbzogSW50ZXJuYWxDb250cmFjdC5GaWVsZCxcbiAgICBwcml2YXRlIF9wYXJlbnREYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvbigpOiBDb250cmFjdC5GaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5maWVsZEFnZ3JlZ2F0aW9uVHlwZS5jb252ZXJ0KHRoaXMuX2ZpZWxkSW5mby5hZ2dyZWdhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2UoKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERhdGFTb3VyY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGUoKTogQ29udHJhY3QuRmllbGRSb2xlVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5maWVsZFJvbGVUeXBlLmNvbnZlcnQodGhpcy5fZmllbGRJbmZvLnJvbGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzSGlkZGVuO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0dlbmVyYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzR2VuZXJhdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbGN1bGF0ZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzQ2FsY3VsYXRlZEZpZWxkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbWJpbmVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0NvbWJpbmVkRmllbGQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRmllbGRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4vSW1wbC9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIENvbnRyYWN0LkZpZWxkIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpZWxkSW1wbDogRmllbGRJbXBsKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvbigpOiBDb250cmFjdC5GaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5hZ2dyZWdhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmRhdGFTb3VyY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGUoKTogQ29udHJhY3QuRmllbGRSb2xlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5yb2xlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzSGlkZGVuO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0dlbmVyYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzR2VuZXJhdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbGN1bGF0ZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzQ2FsY3VsYXRlZEZpZWxkO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5UeXBlKCk6IENvbnRyYWN0LkNvbHVtblR5cGUge1xuICAgIHRocm93IEVycm9ySGVscGVycy5hcGlOb3RJbXBsZW1lbnRlZCgnRmllbGQuY29sdW1uVHlwZScpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbWJpbmVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pc0NvbWJpbmVkRmllbGQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ZpZWxkLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVTaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1U2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgZXh0ZW5kcyBUYWJsZWF1U2hlZXRFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlYXVXb3Jrc2hlZXRFdmVudCB7XG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0KCk6IENvbnRyYWN0LldvcmtzaGVldCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBwcm90ZWN0ZWQgX3dvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0KSB7XG4gICAgc3VwZXIodHlwZSwgX3dvcmtzaGVldCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1V29ya3NoZWV0RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdVNoZWV0RXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1U2hlZXRFdmVudCB7XG4gIHByaXZhdGUgX3NoZWV0OiBDb250cmFjdC5TaGVldDtcblxuICBwdWJsaWMgZ2V0IHNoZWV0KCk6IENvbnRyYWN0LlNoZWV0IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXQ7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSwgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLl9zaGVldCA9IHNoZWV0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFZpc3VhbElkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vU2VydmljZVJlZ2lzdHJ5JztcblxuLyoqXG4gKiBEZWZpbmVzIHdoaWNoIHR5cGUgb2YgZ2V0RGF0YSBjYWxsIHRvIG1ha2UuXG4gKi9cbmV4cG9ydCBlbnVtIEdldERhdGFUeXBlIHtcbiAgU3VtbWFyeSA9ICdzdW1tYXJ5JyxcbiAgVW5kZXJseWluZyA9ICd1bmRlcmx5aW5nJ1xufVxuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGltcGxlbWVudGluZyB0aGUgbG9naWMgZm9yIHZhcmlvdXMgZ2V0RGF0YSBjYWxsc1xuICpcbiAqIEBpbnRlcmZhY2UgR2V0RGF0YVNlcnZpY2VcbiAqIEBleHRlbmRzIHtBcGlTZXJ2aWNlfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdldERhdGFTZXJ2aWNlIGV4dGVuZHMgQXBpU2VydmljZSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRhdGEgZm9yIGEgcGFydGljdWxhciB2aXN1YWxcbiAgICpcbiAgICogQHBhcmFtIHtWaXN1YWxJZH0gdmlzdWFsSWQgIFRoZSB2aXN1YWwgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7R2V0RGF0YVR5cGV9IGdldFR5cGUgIFRoZSB0eXBlIG9mIGdldERhdGEgY2FsbCB0byBtYWtlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBvciBub3QgYWxpYXNlcyBzaG91bGQgYmUgaWdub3JlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZVNlbGVjdGlvbiAgV2hldGhlciBvciBub3Qgc2VsZWN0aW9uIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUFsbENvbHVtbnMgIFNob3VsZCBhbGwgY29sdW1ucyBiZSBpbmNsdWRlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Um93cyAgTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byByZXR1cm5cbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPn0gIERhdGEgdGFibGUgd2l0aCB0aGUgcmVxdWVzdGVkIGRhdGFcbiAgICovXG4gIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG1hcmtzIGZvciBhIGdpdmVuIHZpc3VhbFxuICAgKlxuICAqIEBwYXJhbSB7VmlzdWFsSWR9IHZpc3VhbElkICBUaGUgdmlzdWFsIHRvIGdldCBkYXRhIGZvclxuICAqIEByZXR1cm5zIHtQcm9taXNlPEFjdGl2ZU1hcmtzPn0gIENvbGxlY3Rpb24gb2YgZGF0YSB0YWJsZXMgd2l0aCB0aGUgYWN0aXZlIG1hcmtzXG4gICovXG4gIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXJrcyBmb3IgYSBnaXZlbiB2aXN1YWxcbiAgICpcbiAgKiBAcGFyYW0ge1Zpc3VhbElkfSB2aXN1YWxJZCAgVGhlIHZpc3VhbCB0byBnZXQgZGF0YSBmb3JcbiAgKiBAcmV0dXJucyB7UHJvbWlzZTxBY3RpdmVNYXJrcz59ICBDb2xsZWN0aW9uIG9mIGRhdGEgdGFibGVzIHdpdGggdGhlIGFjdGl2ZSBtYXJrc1xuICAqL1xuICBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNvdXJjZUlkICBUaGUgaWQgb2YgdGhlIGRhdGFzb3VyY2UgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBhbGlhcyB2YWx1ZXMgc2hvdWxkIGJlIGlnbm9yZWQgaW4gdGhlIHJldHVybmVkIGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFJvd3MgVGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBjb2x1bW5zVG9JbmNsdWRlICBDb2xsZWN0aW9uIG9mIGNvbHVtbiBjYXB0aW9ucyB3aGljaCBzaG91bGQgYmUgcmV0dXJuZWQuIEVtcHR5IG1lYW5zIGFsbCBjb2x1bW5zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT59ICBEYXRhIHRhYmxlIHdpdGggdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqL1xuICBnZXREYXRhU291cmNlRGF0YUFzeW5jKFxuICAgIGRhdGFzb3VyY2VJZDogc3RyaW5nLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgbWF4Um93czogbnVtYmVyLFxuICAgIGNvbHVtbnNUb0luY2x1ZGU6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9HZXREYXRhU2VydmljZS50cyIsIi8qKlxuICogVGhpcyBpcyB5b3VyIG1haW4uIFRoaXMgaXMgd2hlcmUgeW91IHJlLWV4cG9ydCBldmVyeXRoaW5nIHlvdSB3YW50IHRvIGJlIHB1YmxpY2x5IGF2YWlsYWJsZS5cbiAqXG4gKiBUaGUgYnVpbGQgZW5mb3JjZXMgdGhhdCB0aGUgZmlsZSBoYXMgdGhlIHNhbWUgbmFtZSBhcyB0aGUgZ2xvYmFsIHZhcmlhYmxlIHRoYXQgaXMgZXhwb3J0ZWQuXG4gKi9cblxuLy8gRHVlIHRvIHRoZSB3YXkgd2UgY29uZmlndXJlZCB3ZWJwYWNrLCB3ZSBzaG91bGQgYmUgZXhwb3J0aW5nIHRoaW5ncyB3aGljaCB3aWxsIGJlIHVuZGVyXG4vLyBhIGdsb2JhbCB2YXJpYWJsZSBjYWxsZWQgXCJ0YWJsZWF1XCIuIEV4cG9ydCBldmVyeXRoaW5nIHdlIHdhbnQgdG8gYmUgdmlzaWJsZSB1bmRlciB0YWJsZWF1XG4vLyBmcm9tIHRoaXMgZmlsZS5cblxuaW1wb3J0IHsgRXh0ZW5zaW9uc0ltcGwgfSBmcm9tICcuL0V4dGVuc2lvbnNBcGkvSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5pbXBvcnQgeyBFeHRlbnNpb25zIH0gZnJvbSAnLi9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRXh0ZW5zaW9ucyc7XG5cbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL0FwaVNoYXJlZCc7XG5cbmRlY2xhcmUgdmFyIEVYVEVOU0lPTl9BUElfVkVSU0lPTl9OVU1CRVI6IHN0cmluZztcblZlcnNpb25OdW1iZXIuU2V0VmVyc2lvbk51bWJlcih0eXBlb2YgRVhURU5TSU9OX0FQSV9WRVJTSU9OX05VTUJFUiAhPT0gJ3VuZGVmaW5lZCcgPyBFWFRFTlNJT05fQVBJX1ZFUlNJT05fTlVNQkVSIDogJzAuMC4wJyk7XG5cbmNvbnN0IGV4dGVuc2lvbkltcGwgPSBuZXcgRXh0ZW5zaW9uc0ltcGwoKTtcbmV4cG9ydCBjb25zdCBleHRlbnNpb25zID0gbmV3IEV4dGVuc2lvbnMoZXh0ZW5zaW9uSW1wbCk7XG5cbi8vIEV4cG9ydCBFbnVtc1xuLy8gVGhlc2Ugc2hvdyB1cCB1bmRlciB0aGUgdGFibGVhdSBvYmplY3QuIEkuZS4gdGFibGVhdS5FeHRlbnNpb25Db250ZXh0LlNlcnZlclxuZXhwb3J0IHtcbiAgRXh0ZW5zaW9uQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSxcbiAgQW5hbHl0aWNzT2JqZWN0VHlwZSxcbiAgQ29sdW1uVHlwZSxcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRGF0YVR5cGUsXG4gIERhdGVSYW5nZVR5cGUsXG4gIEVuY29kaW5nVHlwZSxcbiAgRXJyb3JDb2RlcyxcbiAgRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUsXG4gIEZpbHRlckRvbWFpblR5cGUsXG4gIEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUsXG4gIEZpbHRlck51bGxPcHRpb24sXG4gIE1hcmtUeXBlLFxuICBQYXJhbWV0ZXJWYWx1ZVR5cGUsXG4gIFBlcmlvZFR5cGUsXG4gIFF1aWNrVGFibGVDYWxjVHlwZSxcbiAgU2VsZWN0aW9uVXBkYXRlVHlwZSxcbiAgU2hlZXRUeXBlLFxuICBTb3J0RGlyZWN0aW9uLFxuICBUYWJsZWF1RXZlbnRUeXBlLFxuICBUcmVuZExpbmVNb2RlbFR5cGVcbn0gZnJvbSAnLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBDb250ZXh0TWVudUV2ZW50LFxuICBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnksXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlcixcbiAgTm90aWZpY2F0aW9uSWQsXG4gIFNoZWV0UGF0aCxcbiAgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTixcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5LFxuICBEYXNoYm9hcmQsXG4gIERhc2hib2FyZEltcGwsXG4gIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcCxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgcmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyxcbiAgU2VydmljZU5hbWVzXG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbnRlbnQgfSBmcm9tICcuLi9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi9OYW1lc3BhY2VzL0Vudmlyb25tZW50JztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vTmFtZXNwYWNlcy9TZXR0aW5ncyc7XG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL05hbWVzcGFjZXMvVUknO1xuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvSW5pdGlhbGl6YXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IHJlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzIH0gZnJvbSAnLi4vU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbXBsIH0gZnJvbSAnLi9TZXR0aW5nc0ltcGwnO1xuaW1wb3J0IHsgVUlJbXBsIH0gZnJvbSAnLi9VSUltcGwnO1xuXG5leHBvcnQgdHlwZSBDYWxsYmFja01hcCA9IHsgW2tleTogc3RyaW5nXTogKCkgPT4ge30gfTtcblxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbnNJbXBsIHtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6YXRpb25Qcm9taXNlOiBQcm9taXNlPHN0cmluZz47XG5cbiAgcHVibGljIGRhc2hib2FyZENvbnRlbnQ6IERhc2hib2FyZENvbnRlbnQ7XG4gIHB1YmxpYyBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG4gIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3M7XG4gIHB1YmxpYyB1aTogVUk7XG5cbiAgcHVibGljIGluaXRpYWxpemVBc3luYyhpc0V4dGVuc2lvbkRpYWxvZzogYm9vbGVhbiwgY29udGV4dE1lbnVDYWxsYmFja3M/OiBDYWxsYmFja01hcCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXphdGlvblByb21pc2UpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBGaXJzdCB0aGluZyB3ZSB3YW50IHRvIGRvIGlzIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBpcyBhIGRlc2t0b3AgZGlzcGF0Y2hlciBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHVzXG4gICAgICAgIGlmIChJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIuaGFzRGVza3RvcEFwaURpc3BhdGNoZXJQcm9taXNlKCkpIHtcbiAgICAgICAgICAvLyBSdW5uaW5nIGluIGRlc2t0b3AsIHVzZSB0aGlzIHByb21pc2VcbiAgICAgICAgICBjb25zdCBkZXNrdG9wRGlzcGF0Y2hlclByb21pc2UgPSBJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIuZ2V0RGVza3RvcERpc3BhdGNoZXJQcm9taXNlKCk7XG5cbiAgICAgICAgICBkZXNrdG9wRGlzcGF0Y2hlclByb21pc2UudGhlbigoZGlwYXRjaGVyRmFjdG9yeSkgPT5cbiAgICAgICAgICAgIHRoaXMub25EaXNwYXRjaGVyUmVjZWl2ZWQoZGlwYXRjaGVyRmFjdG9yeSwgaXNFeHRlbnNpb25EaWFsb2csIGNvbnRleHRNZW51Q2FsbGJhY2tzKSlcbiAgICAgICAgICAgIC50aGVuKChvcGVuUGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKG9wZW5QYXlsb2FkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdlIG11c3QgYmUgcnVubmluZyBpbiBzZXJ2ZXIsIHNvIHdlIHNob3VsZCB0cnkgdG8ga2ljayBvZiB0aGUgc2VydmVyIGRpc3BhdGNoZXIgYm9vdHN0cmFwcGluZ1xuICAgICAgICAgIGNvbnN0IG9uRGlzcGF0Y2hlclJlY2VpdmVkQ2FsbGJhY2sgPSB0aGlzLm9uRGlzcGF0Y2hlclJlY2VpdmVkLmJpbmQodGhpcyk7XG4gICAgICAgICAgZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwKHdpbmRvdywgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTikudGhlbigoZmFjdG9yeTogSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9uRGlzcGF0Y2hlclJlY2VpdmVkQ2FsbGJhY2soZmFjdG9yeSwgaXNFeHRlbnNpb25EaWFsb2csIGNvbnRleHRNZW51Q2FsbGJhY2tzKTtcbiAgICAgICAgICB9KS50aGVuKChvcGVuUGF5bG9hZCkgPT4geyByZXNvbHZlKG9wZW5QYXlsb2FkKTsgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXphdGlvblByb21pc2U7XG4gIH1cblxuICBwcml2YXRlIG9uRGlzcGF0Y2hlclJlY2VpdmVkKFxuICAgIGRpc3BhdGNoZXJGYWN0b3J5OiBJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5LFxuICAgIGlzRXh0ZW5zaW9uRGlhbG9nOiBib29sZWFuLFxuICAgIGNvbnRleHRNZW51RnVuY3Rpb25zPzogQ2FsbGJhY2tNYXApOiBQcm9taXNlPHN0cmluZz4ge1xuXG4gICAgY29uc3QgZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXJGYWN0b3J5KElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04pO1xuXG4gICAgLy8gQ2FsbCB0byByZWdpc3RlciBhbGwgdGhlIHNlcnZpY2VzIHdoaWNoIHdpbGwgdXNlIHRoZSBuZXdseSBpbml0aWFsaXplZCBkaXNwYXRjaGVyXG4gICAgcmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyhkaXNwYXRjaGVyKTtcbiAgICByZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyhkaXNwYXRjaGVyKTtcblxuICAgIC8vIEdldCB0aGUgaW5pdGlhbGl6YXRpb24gc2VydmljZSBhbmQgaW5pdGlhbGl6ZSB0aGlzIGV4dGVuc2lvblxuICAgIGNvbnN0IGluaXRpYWxpemF0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEluaXRpYWxpemF0aW9uU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLkluaXRpYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICBjb25zdCBjYWxsYmFja01hcEtleXMgPSAoY29udGV4dE1lbnVGdW5jdGlvbnMpID8gT2JqZWN0LmtleXMoY29udGV4dE1lbnVGdW5jdGlvbnMpIDogW107XG4gICAgcmV0dXJuIGluaXRpYWxpemF0aW9uU2VydmljZS5pbml0aWFsaXplRGFzaGJvYXJkRXh0ZW5zaW9uc0FzeW5jKGlzRXh0ZW5zaW9uRGlhbG9nLCBjYWxsYmFja01hcEtleXMpLnRoZW48c3RyaW5nPihyZXN1bHQgPT4ge1xuICAgICAgaWYgKCFyZXN1bHQuZXh0ZW5zaW9uSW5zdGFuY2UubG9jYXRvci5kYXNoYm9hcmRQYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnVW5leHBlY3RlZCBlcnJvciBkdXJpbmcgaW5pdGlhbGl6YXRpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFzaGJvYXJkQ29udGVudCA9IHRoaXMuaW5pdGlhbGl6ZURhc2hib2FyZENvbnRlbnQocmVzdWx0LmV4dGVuc2lvbkRhc2hib2FyZEluZm8sXG4gICAgICAgIHJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpO1xuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChyZXN1bHQuZXh0ZW5zaW9uRW52aXJvbm1lbnQpO1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuaW5pdGlhbGl6ZVNldHRpbmdzKHJlc3VsdC5leHRlbnNpb25TZXR0aW5nc0luZm8pO1xuICAgICAgdGhpcy51aSA9IG5ldyBVSShuZXcgVUlJbXBsKCkpO1xuXG4gICAgICAvLyBBZnRlciBpbml0aWFsaXphdGlvbiBoYXMgY29tcGxldGVkLCBzZXR1cCBsaXN0ZW5lcnMgZm9yIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdGhhdFxuICAgICAgLy8gYXJlIG1lYW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuZXZlciBhIGNvbnRleHQgbWVudSBpdGVtIGlzIGNsaWNrZWQuXG4gICAgICB0aGlzLmluaXRpYWxpemVDb250ZXh0TWVudUNhbGxiYWNrcyhjb250ZXh0TWVudUZ1bmN0aW9ucyk7XG5cbiAgICAgIC8vIEluIHRoZSBub3JtYWwgaW5pdGlhbGl6YXRpb24gY2FzZSwgdGhpcyB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZy4gIFdoZW4gcmV0dXJuaW5nIGZyb20gaW5pdGlhbGl6ZUFzeW5jIHRvIHRoZVxuICAgICAgLy8gZGV2ZWxvcGVyLCB3ZSBqdXN0IGluZ29yZSB0aGF0IHN0cmluZy4gIEluIHRoZSBjYXNlIG9mIGluaXRpYWxpemluZyBmcm9tIGFuIGV4dGVuc2lvbiBkaWFsb2csIHRoaXMgc3RyaW5nXG4gICAgICAvLyBpcyBhbiBvcHRpb25hbCBwYXlsb2FkIHNlbnQgZnJvbSB0aGUgcGFyZW50IGV4dGVuc2lvbi5cbiAgICAgIHJldHVybiByZXN1bHQuZXh0ZW5zaW9uRGlhbG9nUGF5bG9hZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZURhc2hib2FyZENvbnRlbnQoaW5mbzogRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbywgc2hlZXRQYXRoOiBTaGVldFBhdGgpOiBEYXNoYm9hcmRDb250ZW50IHtcbiAgICBjb25zdCBkYXNoYm9hcmRJbXBsID0gbmV3IERhc2hib2FyZEltcGwoaW5mbywgc2hlZXRQYXRoKTtcbiAgICBjb25zdCBkYXNoYm9hcmQgPSBuZXcgRGFzaGJvYXJkKGRhc2hib2FyZEltcGwpO1xuICAgIHJldHVybiBuZXcgRGFzaGJvYXJkQ29udGVudChkYXNoYm9hcmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplU2V0dGluZ3Moc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pOiBTZXR0aW5ncyB7XG4gICAgY29uc3Qgc2V0dGluZ3NJbXBsID0gbmV3IFNldHRpbmdzSW1wbChzZXR0aW5nc0luZm8pO1xuICAgIHJldHVybiBuZXcgU2V0dGluZ3Moc2V0dGluZ3NJbXBsKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUNvbnRleHRNZW51Q2FsbGJhY2tzKGNvbnRleHRNZW51RnVuY3Rpb25zPzogQ2FsbGJhY2tNYXApOiB2b2lkIHtcbiAgICBjb25zdCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG5cbiAgICAvLyBVbnJlZ2lzdGVyIGZ1bmN0aW9uIG5vdCB1c2VkIHNpbmNlIHRoZXNlIG5vdGlmaWNhdGlvbnMgc2hvdWxkIGJlXG4gICAgLy8gb2JzZXJ2ZWQgZm9yIHRoZSBmdWxsIGxpZmV0aW1lIG9mIHRoZSBleHRlbnNpb24uXG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuQ29udGV4dE1lbnVDbGljaywgKG1vZGVsKSA9PiB7XG4gICAgICAvLyBMZXQgdGhyb3VnaCBhbnkgY29udGV4dCBtZW51IGV2ZW50LCB0aGVzZSBhcmUgYWxyZWFkeSBmaWx0ZXJlZCBvbiBhcGktY29yZVxuICAgICAgLy8gYmFzZWQgb24gdGhlIGV4dGVuc2lvbiBsb2NhdG9yLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgKGV2ZW50OiBDb250ZXh0TWVudUV2ZW50KSA9PiB7XG4gICAgICAvLyBFeGVjdXRlIHRoZSBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb250ZXh0IG1lbnUgSURcbiAgICAgIGlmIChjb250ZXh0TWVudUZ1bmN0aW9ucykge1xuICAgICAgICBpZiAoIWNvbnRleHRNZW51RnVuY3Rpb25zW2V2ZW50LmlkXSkge1xuICAgICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgUmVjZWl2ZWQgdW5leHBlY3RlZCBjb250ZXh0IG1lbnUgSWQgZnJvbSBldmVudDogJHtldmVudC5pZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHRNZW51RnVuY3Rpb25zW2V2ZW50LmlkXSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9FeHRlbnNpb25zSW1wbC50cyIsIi8vIEFsbCBlbnVtIHZhbHVlcyBtYWRlIGF2YWlsYWJsZSB0byBFeHRlbnNpb25zIGRldmVsb3BlcnMuXG4vLyBFbnVtcyBzaG91bGQgYmUga2VwdCBpbiBhbHBoYWJldGljYWwgb3JkZXIuXG5cbi8qKlxuICogVGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIEV4dGVuc2lvbnMgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gKi9cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbkNvbnRleHQge1xuICBEZXNrdG9wID0gJ2Rlc2t0b3AnLFxuICBTZXJ2ZXIgPSAnc2VydmVyJ1xufVxuXG4vKipcbiAqIFRoZSBtb2RlIGluIHdoaWNoIHRoZSBFeHRlbnNpb25zIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICovXG5leHBvcnQgZW51bSBFeHRlbnNpb25Nb2RlIHtcbiAgQXV0aG9yaW5nID0gJ2F1dGhvcmluZycsXG4gIFZpZXdpbmcgPSAndmlld2luZydcbn1cblxuZXhwb3J0IGVudW0gQW5hbHl0aWNzT2JqZWN0VHlwZSB7XG4gIENsdXN0ZXIgPSAnY2x1c3RlcicsXG4gIEZvcmVjYXN0ID0gJ2ZvcmVjYXN0JyxcbiAgVHJlbmRMaW5lID0gJ3RyZW5kLWxpbmUnXG59XG5cbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICBEaXNjcmV0ZSA9ICdkaXNjcmV0ZScsXG4gIENvbnRpbnVvdXMgPSAnY29udGludW91cydcbn1cblxuLyoqXG4gKiBXaGF0IHRoZSBvYmplY3QgcmVwcmVzZW50cyBpbiBhIGRhc2hib2FyZC5cbiAqL1xuZXhwb3J0IGVudW0gRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gIEJsYW5rID0gJ2JsYW5rJyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCcsXG4gIFF1aWNrRmlsdGVyID0gJ3F1aWNrLWZpbHRlcicsXG4gIFBhcmFtZXRlckNvbnRyb2wgPSAncGFyYW1ldGVyLWNvbnRyb2wnLFxuICBQYWdlRmlsdGVyID0gJ3BhZ2UtZmlsdGVyJyxcbiAgTGVnZW5kID0gJ2xlZ2VuZCcsXG4gIFRpdGxlID0gJ3RpdGxlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgSW1hZ2UgPSAnaW1hZ2UnLFxuICBXZWJQYWdlID0gJ3dlYi1wYWdlJyxcbiAgRXh0ZW5zaW9uID0gJ2V4dGVuc2lvbidcbn1cblxuLyoqXG4gKiBUaGUgZGlmZmVyZW50IHR5cGVzIG9mIGRhdGEgYSB2YWx1ZSBjYW4gaGF2ZVxuICovXG5leHBvcnQgZW51bSBEYXRhVHlwZSB7XG4gIFN0cmluZyA9ICdzdHJpbmcnLFxuICBJbnQgPSAnaW50JyxcbiAgRmxvYXQgPSAnZmxvYXQnLFxuICBCb29sID0gJ2Jvb2wnLFxuICBEYXRlID0gJ2RhdGUnLFxuICBEYXRlVGltZSA9ICdkYXRlLXRpbWUnLFxuICBTcGF0aWFsID0gJ3NwYXRpYWwnXG59XG5cbi8qKlxuICogVmFsaWQgZGF0ZSByYW5nZXMgZm9yIGEgcmVsYXRpdmUgZGF0ZSBmaWx0ZXIuXG4gKi9cbmV4cG9ydCBlbnVtIERhdGVSYW5nZVR5cGUge1xuICBMYXN0ID0gJ2xhc3QnLFxuICBMYXN0TiA9ICdsYXN0LW4nLFxuICBOZXh0ID0gJ25leHQnLFxuICBOZXh0TiA9ICduZXh0LW4nLFxuICBDdXJyZW50ID0gJ2N1cnJlbnQnLFxuICBUb0RhdGUgPSAndG8tZGF0ZSdcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgQ29sdW1uID0gJ2NvbHVtbicsXG4gIFJvdyA9ICdyb3cnLFxuICBQYWdlID0gJ3BhZ2UnLFxuICBGaWx0ZXIgPSAnZmlsdGVyJyxcbiAgTWFya3NUeXBlID0gJ21hcmtzLXR5cGUnLFxuICBNZWFzdXJlVmFsdWVzID0gJ21lYXN1cmUtdmFsdWVzJyxcbiAgQ29sb3IgPSAnY29sb3InLFxuICBTaXplID0gJ3NpemUnLFxuICBMYWJlbCA9ICdsYWJlbCcsXG4gIERldGFpbCA9ICdkZXRhaWwnLFxuICBUb29sdGlwID0gJ3Rvb2x0aXAnLFxuICBTaGFwZSA9ICdzaGFwZScsXG4gIFBhdGggPSAncGF0aCcsXG4gIEFuZ2xlID0gJ2FuZ2xlJ1xufVxuXG4vKipcbiAqIEFsbCBlcnJvciBjb2RlcyB1c2VkIGJ5IHRoZSBFeHRlbnNpb25zIEFQSS5cbiAqL1xuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIC8qKlxuICAgKiBUaHJvd24gd2hlbiBjYWxsZXIgYXR0ZW1wdHMgdG8gZXhlY3V0ZSBjb21tYW5kIGJlZm9yZSBpbml0aWFsaXphdGlvbiBoYXMgY29tcGxldGVkLlxuICAgKi9cbiAgQVBJTm90SW5pdGlhbGl6ZWQgPSAnYXBpLW5vdC1pbml0aWFsaXplZCcsXG4gIC8qKlxuICAgKiBPbmx5IG9uZSBkaWFsb2cgY2FuIGJlIG9wZW5lZCBhdCB0aW1lIHdpdGggdGhlIFVJIG5hbWVzcGFjZSBmdW5jdGlvbmFsaXR5LlxuICAgKi9cbiAgRGlhbG9nQWxyZWFkeU9wZW4gPSAnZGlhbG9nLWFscmVhZHktb3BlbicsXG4gIC8qKlxuICAgKiBUaGUgb3BlbiBkaWFsb2cgd2FzIGNsb3NlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIERpYWxvZ0Nsb3NlZEJ5VXNlciA9ICdkaWFsb2ctY2xvc2VkLWJ5LXVzZXInLFxuICAvKipcbiAgICogQW4gZXJyb3Igb2NjdXJyZWQgd2l0aGluIHRoZSBUYWJsZWF1IEV4dGVuc2lvbnMgQVBJLiBDb250YWN0IFRhYmxlYXUgU3VwcG9ydC5cbiAgICovXG4gIEludGVybmFsRXJyb3IgPSAnaW50ZXJuYWwtZXJyb3InLFxuICAvKipcbiAgICogQSBkaWFsb2cgbXVzdCBzdGFydCBvbiB0aGUgc2FtZSBkb21haW4gYXMgdGhlIHBhcmVudCBleHRlbmlvbi5cbiAgICovXG4gIEludmFsaWREb21haW5EaWFsb2cgPSAnaW52YWxpZC1kaWFsb2ctZG9tYWluJyxcbiAgLyoqXG4gICAqIEEgcGFyYW1ldGVyIGlzIG5vdCB0aGUgY29ycmVjdCBkYXRhIHR5cGUgb3IgZm9ybWF0LiBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCBpbiB0aGUgRXJyb3IubWVzc2FnZSBmaWVsZC5cbiAgICovXG4gIEludmFsaWRQYXJhbWV0ZXIgPSAnaW52YWxpZC1wYXJhbWV0ZXInLFxuICAvKipcbiAgICogQ2FuIG9jY3VyIGlmIHRoZSBleHRlbnNpb24gaW50ZXJhY3RzIHdpdGggYSBmaWx0ZXIgdGhhdCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldC5cbiAgICovXG4gIE1pc3NpbmdGaWx0ZXIgPSAnbWlzc2luZy1maWx0ZXInLFxuICAvKipcbiAgICogQ2FuIG9jY3VyIGlmIHRoZSBleHRlbnNpb24gaW50ZXJhY3RzIHdpdGggYSBwYXJhbWV0ZXIgdGhhdCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldC5cbiAgICovXG4gIE1pc3NpbmdQYXJhbWV0ZXIgPSAnbWlzc2luZy1wYXJhbWV0ZXInLFxuICAvKipcbiAgICogSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuICBTZXJ2ZXJFcnJvciA9ICdzZXJ2ZXItZXJyb3InLFxuICAvKipcbiAgICogRGV2ZWxvcGVyIGNhbm5vdCBzYXZlIHNldHRpbmdzIHdoaWxlIGFub3RoZXIgc2F2ZSBpcyBzdGlsbCBpbiBwcm9ncmVzcy5cbiAgICovXG4gIFNldHRpbmdTYXZlSW5Qcm9ncmVzcyA9ICdzZXR0aW5nLXNhdmUtaW4tcHJvZ3Jlc3MnLFxuICAvKipcbiAgICogQW4gdW5rbm93biBldmVudCBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlIGNhbGwgdG8gVml6LmFkZEV2ZW50TGlzdGVuZXJvciBWaXoucmVtb3ZlRXZlbnRMaXN0ZW5lci5cbiAgICovXG4gIFVuc3VwcG9ydGVkRXZlbnROYW1lID0gJ3Vuc3VwcG9ydGVkLWV2ZW50LW5hbWUnLFxuICAvKipcbiAgICogQSBtZXRob2Qgd2FzIHVzZWQgZm9yIGEgdHlwZSBvZiBkYXRhc291cmNlIHRoYXQgZG9lc24ndCBzdXBwb3J0IHRoYXQgbWV0aG9kIChzZWUgZ2V0QWN0aXZlVGFibGVzQXN5bmMgZm9yIGFuIGV4YW1wbGUpXG4gICAqL1xuICBVbnN1cHBvcnRlZE1ldGhvZEZvckRhdGFTb3VyY2VUeXBlID0gJ3Vuc3VwcG9ydGVkLW1ldGhvZC1mb3ItZGF0YS1zb3VyY2UtdHlwZSdcbn1cblxuLyoqXG4gKiAgVHlwZSBvZiBhZ2dyZWdhdGlvbiBvbiBhIGZpZWxkLlxuICovXG5leHBvcnQgZW51bSBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gIFN1bSA9ICdzdW0nLFxuICBBdmcgPSAnYXZnJyxcbiAgTWluID0gJ21pbicsXG4gIE1heCA9ICdtYXgnLFxuICBTdGRldiA9ICdzdGRldicsXG4gIFN0ZGV2cCA9ICdzdGRldnAnLFxuICBWYXIgPSAndmFyJyxcbiAgVmFycCA9ICd2YXJwJyxcbiAgQ291bnQgPSAnY291bnQnLFxuICBDb3VudGQgPSAnY291bnRkJyxcbiAgTWVkaWFuID0gJ21lZGlhbicsXG4gIEF0dHIgPSAnYXR0cicsXG4gIE5vbmUgPSAnbm9uZScsXG4gIFllYXIgPSAneWVhcicsXG4gIFF0ciA9ICdxdHInLFxuICBNb250aCA9ICdtb250aCcsXG4gIERheSA9ICdkYXknLFxuICBIb3VyID0gJ2hvdXInLFxuICBNaW51dGUgPSAnbWludXRlJyxcbiAgU2Vjb25kID0gJ3NlY29uZCcsXG4gIFdlZWsgPSAnd2VlaycsXG4gIFdlZWtkYXkgPSAnd2Vla2RheScsXG4gIE1vbnRoWWVhciA9ICdtb250aC15ZWFyJyxcbiAgTWR5ID0gJ21keScsXG4gIEVuZCA9ICdlbmQnLFxuICBUcnVuY1llYXIgPSAndHJ1bmMteWVhcicsXG4gIFRydW5jUXRyID0gJ3RydW5jLXF0cicsXG4gIFRydW5jTW9udGggPSAndHJ1bmMtbW9udGgnLFxuICBUcnVuY1dlZWsgPSAndHJ1bmMtd2VlaycsXG4gIFRydW5jRGF5ID0gJ3RydW5jLWRheScsXG4gIFRydW5jSG91ciA9ICd0cnVuYy1ob3VyJyxcbiAgVHJ1bmNNaW51dGUgPSAndHJ1bmMtbWludXRlJyxcbiAgVHJ1bmNTZWNvbmQgPSAndHJ1bmMtc2Vjb25kJyxcbiAgUXVhcnQxID0gJ3F1YXJ0MScsXG4gIFF1YXJ0MyA9ICdxdWFydDMnLFxuICBTa2V3bmVzcyA9ICdza2V3bmVzcycsXG4gIEt1cnRvc2lzID0gJ2t1cnRvc2lzJyxcbiAgSW5PdXQgPSAnaW4tb3V0JyxcbiAgVXNlciA9ICd1c2VyJ1xufVxuXG4vKipcbiAqIFJvbGUgb2YgYSBmaWVsZC5cbiAqL1xuZXhwb3J0IGVudW0gRmllbGRSb2xlVHlwZSB7XG4gIERpbWVuc2lvbiA9ICdkaW1lbnNpb24nLFxuICBNZWFzdXJlID0gJ21lYXN1cmUnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbi8qKlxuICogQW4gZW51bWVyYXRpb24gb2YgdGhlIHZhbGlkIHR5cGVzIG9mIGZpbHRlcnMgdGhhdCBjYW4gYmUgYXBwbGllZC5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVHlwZSB7XG4gIENhdGVnb3JpY2FsID0gJ2NhdGVnb3JpY2FsJyxcbiAgUmFuZ2UgPSAncmFuZ2UnLFxuICBIaWVyYXJjaGljYWwgPSAnaGllcmFyY2hpY2FsJyxcbiAgUmVsYXRpdmVEYXRlID0gJ3JlbGF0aXZlLWRhdGUnXG59XG5cbi8qKlxuICogVGhlIGRpZmZlcmVudCB1cGRhdGUgdHlwZXMgZm9yIGFwcGx5aW5nIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJVcGRhdGVUeXBlIHtcbiAgQWRkID0gJ2FkZCcsXG4gIEFsbCA9ICdhbGwnLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxuICBSZW1vdmUgPSAncmVtb3ZlJ1xufVxuXG4vKipcbiAqIFRoZSBkb21haW4gdHlwZSBmb3IgYSBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyRG9tYWluVHlwZSB7XG4gIC8qKlxuICAgKiBUaGUgZG9tYWluIHZhbHVlcyB0aGF0IGFyZSByZWxldmFudCB0byB0aGUgc3BlY2lmaWVkIGZpbHRlclxuICAgKiBpLmUuIHRoZSBkb21haW4gaXMgcmVzdHJpY3RlZCBieSBhIHByZXZpb3VzIGZpbHRlclxuICAgKi9cbiAgUmVsZXZhbnQgPSAncmVsZXZhbnQnLFxuICAvKipcbiAgICogbGlzdCBvZiBhbGwgcG9zc2libGUgZG9tYWluIHZhbHVlcyBmcm9tIGRhdGFiYXNlXG4gICAqL1xuICBEYXRhYmFzZSA9ICdkYXRhYmFzZSdcbn1cblxuLyoqXG4gKiBUaGUgb3B0aW9uIGZvciBzcGVjaWZ5aW5nIHdoaWNoIHZhbHVlcyB0byBpbmNsdWRlIGZvciBmaWx0ZXJpbmdcbiAqIEluZGljYXRlcyB3aGF0IHRvIGRvIHdpdGggbnVsbCB2YWx1ZXMgZm9yIGEgZ2l2ZW4gZmlsdGVyIG9yIG1hcmsgc2VsZWN0aW9uIGNhbGwuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlck51bGxPcHRpb24ge1xuICBOdWxsVmFsdWVzID0gJ251bGwtdmFsdWVzJyxcbiAgTm9uTnVsbFZhbHVlcyA9ICdub24tbnVsbC12YWx1ZXMnLFxuICBBbGxWYWx1ZXMgPSAnYWxsLXZhbHVlcydcbn1cblxuLyoqXG4gKiBUeXBlIG9mIG1hcmsgZm9yIGEgZ2l2ZW4gbWFya3MgY2FyZCBpbiBhIHZpei5cbiAqL1xuZXhwb3J0IGVudW0gTWFya1R5cGUge1xuICBCYXIgPSAnYmFyJyxcbiAgTGluZSA9ICdsaW5lJyxcbiAgQXJlYSA9ICdhcmVhJyxcbiAgU3F1YXJlID0gJ3NxdWFyZScsXG4gIENpcmNsZSA9ICdjaXJjbGUnLFxuICBTaGFwZSA9ICdzaGFwZScsXG4gIFRleHQgPSAndGV4dCcsXG4gIE1hcCA9ICdtYXAnLFxuICBQaWUgPSAncGllJyxcbiAgR2FudHRCYXIgPSAnZ2FudHQtYmFyJyxcbiAgUG9seWdvbiA9ICdwb2x5Z29uJ1xufVxuXG4vKipcbiAqIEFuIGVudW1lcmF0aW9uIGRlc2NyaWJpbmcgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBhbGxvd2FibGUgdmFsdWVzLlxuICogVGhpcyBpcyB1c2VkIGZvciByZXN0cmljdGluZyB0aGUgZG9tYWluIG9mIGEgcGFyYW1ldGVyXG4gKi9cbmV4cG9ydCBlbnVtIFBhcmFtZXRlclZhbHVlVHlwZSB7XG4gIEFsbCA9ICdhbGwnLFxuICBMaXN0ID0gJ2xpc3QnLFxuICBSYW5nZSA9ICdyYW5nZSdcbn1cblxuLyoqXG4gKiBEYXRlIHBlcmlvZCB1c2VkIGluIGZpbHRlcnMgYW5kIGluIHBhcmFtZXRlcnMuXG4gKi9cbmV4cG9ydCBlbnVtIFBlcmlvZFR5cGUge1xuICBZZWFycyA9ICd5ZWFycycsXG4gIFF1YXJ0ZXJzID0gJ3F1YXJ0ZXJzJyxcbiAgTW9udGhzID0gJ21vbnRocycsXG4gIFdlZWtzID0gJ3dlZWtzJyxcbiAgRGF5cyA9ICdkYXlzJyxcbiAgSG91cnMgPSAnaG91cnMnLFxuICBNaW51dGVzID0gJ21pbnV0ZXMnLFxuICBTZWNvbmRzID0gJ3NlY29uZHMnXG59XG5cbmV4cG9ydCBlbnVtIFF1aWNrVGFibGVDYWxjVHlwZSB7XG4gIFJ1bm5pbmdUb3RhbCA9ICdydW5uaW5nLXRvdGFsJyxcbiAgRGlmZmVyZW5jZSA9ICdkaWZmZXJlbmNlJyxcbiAgUGVyY2VudERpZmZlcmVuY2UgPSAncGVyY2VudC1kaWZmZXJlbmNlJyxcbiAgUGVyY2VudE9mVG90YWwgPSAncGVyY2VudC1vZi10b3RhbCcsXG4gIFJhbmsgPSAncmFuaycsXG4gIFBlcmNlbnRpbGUgPSAncGVyY2VudGlsZScsXG4gIE1vdmluZ0F2ZXJhZ2UgPSAnbW92aW5nLWF2ZXJhZ2UnLFxuICBZVERUb3RhbCA9ICd5dGQtdG90YWwnLFxuICBDb21wb3VuZEdyb3d0aFJhdGUgPSAnY29tcG91bmQtZ3Jvd3RoLXJhdGUnLFxuICBZZWFyT3ZlclllYXJHcm93dGggPSAneWVhci1vdmVyLXllYXItZ3Jvd3RoJyxcbiAgWVRER3Jvd3RoID0gJ3l0ZC1ncm93dGgnLFxuICBVbmRlZmluZWQgPSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIEVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHNlbGVjdGlvbiB0eXBlIGZvciBzZWxlY3QgbWFya3MgYXBpLlxuICovXG5leHBvcnQgZW51bSBTZWxlY3Rpb25VcGRhdGVUeXBlIHtcbiAgUmVwbGFjZSA9ICdzZWxlY3QtcmVwbGFjZScsXG4gIEFkZCA9ICdzZWxlY3QtYWRkJyxcbiAgUmVtb3ZlID0gJ3NlbGVjdC1yZW1vdmUnXG59XG5cbi8qKlxuICogVGhlIHR5cGUgb2Ygc2hlZXQgYSBTaGVldCBvYmplY3QgcmVwcmVzZW50c1xuICovXG5leHBvcnQgZW51bSBTaGVldFR5cGUge1xuICBEYXNoYm9hcmQgPSAnZGFzaGJvYXJkJyxcbiAgU3RvcnkgPSAnc3RvcnknLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0J1xufVxuXG5leHBvcnQgZW51bSBTb3J0RGlyZWN0aW9uIHtcbiAgSW5jcmVhc2luZyA9ICdpbmNyZWFzaW5nJyxcbiAgRGVjcmVhc2luZyA9ICdkZWNyZWFzaW5nJ1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjZXJ0YWluIHR5cGUgb2YgZXZlbnQgd2hpY2ggY2FuIGJlIGxpc3RlbmVkIGZvclxuICovXG5leHBvcnQgZW51bSBUYWJsZWF1RXZlbnRUeXBlIHtcbiAgLyoqIFJhaXNlZCB3aGVuIGFueSBmaWx0ZXIgaGFzIGNoYW5nZWQgc3RhdGUuKi9cbiAgRmlsdGVyQ2hhbmdlZCA9ICdmaWx0ZXItY2hhbmdlZCcsXG5cbiAgLyoqIFRoZSBzZWxlY3RlZCBtYXJrcyBvbiBhIHZpc3VhbGl6YXRpb24gaGFzIGNoYW5nZWQgKi9cbiAgTWFya1NlbGVjdGlvbkNoYW5nZWQgPSAnbWFyay1zZWxlY3Rpb24tY2hhbmdlZCcsXG5cbiAgLyoqIEEgcGFyYW1ldGVyIGhhcyBoYWQgaXRzIHZhbHVlIG1vZGlmaWVkICovXG4gIFBhcmFtZXRlckNoYW5nZWQgPSAncGFyYW1ldGVyLWNoYW5nZWQnLFxuXG4gIC8qKiBTZXR0aW5ncyBoYXZlIGJlZW4gY2hhbmdlZCBmb3IgdGhpcyBleHRlbnNpb24uICovXG4gIFNldHRpbmdzQ2hhbmdlZCA9ICdzZXR0aW5ncy1jaGFuZ2VkJ1xufVxuXG5leHBvcnQgZW51bSBUcmVuZExpbmVNb2RlbFR5cGUge1xuICBMaW5lYXIgPSAnbGluZWFyJyxcbiAgTG9nYXJpdGhtaWMgPSAnbG9nYXJpdGhtaWMnLFxuICBFeHBvbmVudGlhbCA9ICdleHBvbmVudGlhbCcsXG4gIFBvbHlub21pYWwgPSAncG9seW5vbWlhbCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvRXh0ZXJuYWxDb250cmFjdC9FbnVtcy50cyIsImV4cG9ydCBlbnVtIEV4dGVuc2lvbkNvbnRleHQge1xuICBEZXNrdG9wID0gJ2Rlc2t0b3AnLFxuICBTZXJ2ZXIgPSAnc2VydmVyJyxcbiAgVW5rbm93biA9ICd1bmtub3duJ1xufVxuXG5leHBvcnQgZW51bSBFeHRlbnNpb25Nb2RlIHtcbiAgQXV0aG9yaW5nID0gJ2F1dGhvcmluZycsXG4gIFZpZXdpbmcgPSAndmlld2luZycsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGVudW0gQ29sdW1uVHlwZSB7XG4gIERpc2NyZXRlID0gJ2Rpc2NyZXRlJyxcbiAgQ29udGludW91cyA9ICdjb250aW51b3VzJ1xufVxuXG5leHBvcnQgZW51bSBEYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgQmxhbmsgPSAnYmxhbmsnLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0JyxcbiAgUXVpY2tGaWx0ZXIgPSAncXVpY2stZmlsdGVyJyxcbiAgUGFyYW1ldGVyQ29udHJvbCA9ICdwYXJhbWV0ZXItY29udHJvbCcsXG4gIFBhZ2VGaWx0ZXIgPSAncGFnZS1maWx0ZXInLFxuICBMZWdlbmQgPSAnbGVnZW5kJyxcbiAgVGl0bGUgPSAndGl0bGUnLFxuICBUZXh0ID0gJ3RleHQnLFxuICBJbWFnZSA9ICdpbWFnZScsXG4gIFdlYlBhZ2UgPSAnd2ViLXBhZ2UnLFxuICBFeHRlbnNpb24gPSAnZXh0ZW5zaW9uJ1xufVxuXG5leHBvcnQgZW51bSBEYXRhVHlwZSB7XG4gIFN0cmluZyA9ICdzdHJpbmcnLFxuICBJbnQgPSAnaW50JyxcbiAgRmxvYXQgPSAnZmxvYXQnLFxuICBCb29sID0gJ2Jvb2wnLFxuICBEYXRlID0gJ2RhdGUnLFxuICBEYXRlVGltZSA9ICdkYXRlLXRpbWUnLFxuICBTcGF0aWFsID0gJ3NwYXRpYWwnXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kZWREYXRhVHlwZSB7XG4gIE51bWJlciA9ICdudW1iZXInLFxuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgQm9vbGVhbiA9ICdib29sZWFuJ1xufVxuXG5leHBvcnQgZW51bSBFcnJvckNvZGVzIHtcbiAgSU5JVElBTElaQVRJT05fRVJST1IgPSAnaW5pdGlhbGl6YXRpb24tZXJyb3InLFxuICBJTlRFUk5BTF9FUlJPUiA9ICdpbnRlcm5hbC1lcnJvcicsXG4gIE1JU1NJTkdfRU5VTV9NQVBQSU5HID0gJ21pc3NpbmctZW51bS1tYXBwaW5nJyxcbiAgTUlTU0lOR19QQVJBTUVURVIgPSAnbWlzc2luZy1wYXJhbWV0ZXInLFxuICBQRVJNSVNTSU9OX0RFTklFRCA9ICdwZXJtaXNzaW9uLWRlbmllZCcsXG4gIFBSRVNfTU9ERUxfUEFSU0lOR19FUlJPUiA9ICdwcmVzLW1vZGVsLXBhcnNpbmctZXJyb3InLFxuICBWRVJTSU9OX05PVF9DT05GSUdVUkVEID0gJ3ZlcnNpb24tbm90LWNvbmZpZ3VyZWQnLFxuICBVTktOT1dOX1ZFUkJfSUQgPSAndW5rbm93bi12ZXJiLWlkJ1xufVxuXG5leHBvcnQgZW51bSBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gIFN1bSA9ICdzdW0nLFxuICBBdmcgPSAnYXZnJyxcbiAgTWluID0gJ21pbicsXG4gIE1heCA9ICdtYXgnLFxuICBTdGRldiA9ICdzdGRldicsXG4gIFN0ZGV2cCA9ICdzdGRldnAnLFxuICBWYXIgPSAndmFyJyxcbiAgVmFycCA9ICd2YXJwJyxcbiAgQ291bnQgPSAnY291bnQnLFxuICBDb3VudGQgPSAnY291bnRkJyxcbiAgTWVkaWFuID0gJ21lZGlhbicsXG4gIEF0dHIgPSAnYXR0cicsXG4gIE5vbmUgPSAnbm9uZScsXG4gIFllYXIgPSAneWVhcicsXG4gIFF0ciA9ICdxdHInLFxuICBNb250aCA9ICdtb250aCcsXG4gIERheSA9ICdkYXknLFxuICBIb3VyID0gJ2hvdXInLFxuICBNaW51dGUgPSAnbWludXRlJyxcbiAgU2Vjb25kID0gJ3NlY29uZCcsXG4gIFdlZWsgPSAnd2VlaycsXG4gIFdlZWtkYXkgPSAnd2Vla2RheScsXG4gIE1vbnRoWWVhciA9ICdtb250aC15ZWFyJyxcbiAgTWR5ID0gJ21keScsXG4gIEVuZCA9ICdlbmQnLFxuICBUcnVuY1llYXIgPSAndHJ1bmMteWVhcicsXG4gIFRydW5jUXRyID0gJ3RydW5jLXF0cicsXG4gIFRydW5jTW9udGggPSAndHJ1bmMtbW9udGgnLFxuICBUcnVuY1dlZWsgPSAndHJ1bmMtd2VlaycsXG4gIFRydW5jRGF5ID0gJ3RydW5jLWRheScsXG4gIFRydW5jSG91ciA9ICd0cnVuYy1ob3VyJyxcbiAgVHJ1bmNNaW51dGUgPSAndHJ1bmMtbWludXRlJyxcbiAgVHJ1bmNTZWNvbmQgPSAndHJ1bmMtc2Vjb25kJyxcbiAgUXVhcnQxID0gJ3F1YXJ0MScsXG4gIFF1YXJ0MyA9ICdxdWFydDMnLFxuICBTa2V3bmVzcyA9ICdza2V3bmVzcycsXG4gIEt1cnRvc2lzID0gJ2t1cnRvc2lzJyxcbiAgSW5PdXQgPSAnaW4tb3V0JyxcbiAgVXNlciA9ICd1c2VyJ1xufVxuXG5leHBvcnQgZW51bSBGaWVsZFJvbGVUeXBlIHtcbiAgRGltZW5zaW9uID0gJ2RpbWVuc2lvbicsXG4gIE1lYXN1cmUgPSAnbWVhc3VyZScsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuLyoqXG4gKiAgVGhlIGRpZmZlcmVudCB1cGRhdGUgdHlwZXMgZm9yIGFwcGx5aW5nIGZpbHRlci5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVXBkYXRlVHlwZSB7XG4gIEFkZCA9ICdhZGQnLFxuICBBbGwgPSAnYWxsJyxcbiAgUmVwbGFjZSA9ICdyZXBsYWNlJyxcbiAgUmVtb3ZlID0gJ3JlbW92ZSdcbn1cblxuZXhwb3J0IGVudW0gU2hlZXRUeXBlIHtcbiAgRGFzaGJvYXJkID0gJ2Rhc2hib2FyZCcsXG4gIFN0b3J5ID0gJ3N0b3J5JyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCdcbn1cblxuZXhwb3J0IGVudW0gRG9tYWluUmVzdHJpY3Rpb25UeXBlIHtcbiAgQWxsID0gJ2FsbCcsXG4gIExpc3QgPSAnbGlzdCcsXG4gIFJhbmdlID0gJ3JhbmdlJ1xufVxuXG5leHBvcnQgZW51bSBEYXRlU3RlcFBlcmlvZCB7XG4gIFllYXJzID0gJ3llYXJzJyxcbiAgUXVhcnRlcnMgPSAncXVhcnRlcnMnLFxuICBNb250aHMgPSAnbW9udGhzJyxcbiAgV2Vla3MgPSAnd2Vla3MnLFxuICBEYXlzID0gJ2RheXMnLFxuICBIb3VycyA9ICdob3VycycsXG4gIE1pbnV0ZXMgPSAnbWludXRlcycsXG4gIFNlY29uZHMgPSAnc2Vjb25kcydcbn1cblxuLyoqXG4gKiBUaGUgb3B0aW9uIGZvciBzcGVjaWZ5aW5nIHdoaWNoIHZhbHVlcyB0byBpbmNsdWRlIGZvciBmaWx0ZXJpbmcuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlck51bGxPcHRpb24ge1xuICBOdWxsVmFsdWVzID0gJ251bGx2YWx1ZXMnLFxuICBOb25OdWxsVmFsdWVzID0gJ25vbm51bGx2YWx1ZXMnLFxuICBBbGxWYWx1ZXMgPSAnYWxsdmFsdWVzJ1xufVxuXG4vKipcbiAqIFRoZSB0eXBlIG9mIGZpbHRlciBkb21haW5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyRG9tYWluVHlwZSB7XG4gIFJlbGV2YW50ID0gJ3JlbGV2YW50JyxcbiAgRGF0YWJhc2UgPSAnZGF0YWJhc2UnXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgc2VsZWN0aW9uIHR5cGUgZm9yIHNlbGVjdCBtYXJrcyBhcGkuXG4gKi9cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblVwZGF0ZVR5cGUge1xuICBSZXBsYWNlID0gJ3NlbGVjdC1yZXBsYWNlJyxcbiAgQWRkID0gJ3NlbGVjdC1hZGQnLFxuICBSZW1vdmUgPSAnc2VsZWN0LXJlbW92ZSdcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSBpbmNsdWRlZCB2YWx1ZXMgdHlwZSBmb3IgcmFuZ2Ugc2VsZWN0aW9uLlxuICovXG5leHBvcnQgZW51bSBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcyB7XG4gIEluY2x1ZGVOdWxsID0gJ2luY2x1ZGUtbnVsbCcsXG4gIEluY2x1ZGVOb25OdWxsID0gJ2luY2x1ZGUtbm9uLW51bGwnLFxuICBJbmNsdWRlQWxsID0gJ2luY2x1ZGUtYWxsJ1xufVxuXG4vKipcbiAqIFR5cGUgb2YgbWFyayBmb3IgYSBnaXZlbiBtYXJrcyBjYXJkIGluIGEgdml6LlxuICovXG5leHBvcnQgZW51bSBNYXJrVHlwZSB7XG4gICAgQmFyID0gJ2JhcicsXG4gICAgTGluZSA9ICdsaW5lJyxcbiAgICBBcmVhID0gJ2FyZWEnLFxuICAgIFNxdWFyZSA9ICdzcXVhcmUnLFxuICAgIENpcmNsZSA9ICdjaXJjbGUnLFxuICAgIFNoYXBlID0gJ3NoYXBlJyxcbiAgICBUZXh0ID0gJ3RleHQnLFxuICAgIE1hcCA9ICdtYXAnLFxuICAgIFBpZSA9ICdwaWUnLFxuICAgIEdhbnR0QmFyID0gJ2dhbnR0LWJhcicsXG4gICAgUG9seWdvbiA9ICdwb2x5Z29uJyxcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSB0eXBlIG9mIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJUeXBlIHtcbiAgQ2F0ZWdvcmljYWwgPSAnY2F0ZWdvcmljYWwnLFxuICBSYW5nZSA9ICdyYW5nZScsXG4gIFJlbGF0aXZlRGF0ZSA9ICdyZWxhdGl2ZURhdGUnLFxuICBIaWVyYXJjaGljYWwgPSAnaGllcmFyY2hpY2FsJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIERhdGVSYW5nZVR5cGUgb2YgYSByZWxhdGl2ZSBkYXRlIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbGFzdCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIExhc3QgPSAnbGFzdCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGxhc3QgTiBkYXlzLCB3ZWVrcywgbW9udGhzLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIExhc3ROID0gJ2xhc3ROJyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbmV4dCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIE5leHQgPSAnbmV4dCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIG5leHQgTiBkYXlzLCB3ZWVrcywgbW9udGhzLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIE5leHROID0gJ25leHROJyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgY3VycmVudCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIEN1cnJlbnQgPSAnY3VycmVudCcsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gZXZlcnl0aGluZyB1cCB0byBhbmQgaW5jbHVkaW5nIHRoZSBjdXJyZW50IGRheSwgd2VlaywgbW9udGgsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgVG9EYXRlID0gJ3RvRGF0ZSdcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGRldGVybWluZSBpZiB0aGUgbGF1bmNoaW5nIG9mIGFuIGV4dGVuc2lvbiBkaWFsb2cgc3VjY2VlZGVkIG9yIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5zaW9uRGlhbG9nUmVzdWx0IHtcbiAgRGlhbG9nQWxyZWFkeU9wZW4gPSAnZGlhbG9nLWFscmVhZHktb3BlbicsXG4gIEludmFsaWREb21haW4gPSAnaW52YWxpZC1kb21haW4nLFxuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L0VudW1zLnRzIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9jb250cmFjdC9Nb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQgfSBmcm9tICcuLi9jb250cmFjdC9Ob3RpZmljYXRpb25zJztcbmltcG9ydCB7IFZlcmJJZCB9IGZyb20gJy4uL2NvbnRyYWN0L1ZlcmJzJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL1ZlcnNpb25OdW1iZXInO1xuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25IYW5kbGVyID0gKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVQYXJhbWV0ZXJzIHtcbiAgW2tleTogc3RyaW5nXTogTW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZVJlc3BvbnNlIHtcbiAgcmVzdWx0OiBNb2RlbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICBub3RpZmljYXRpb25JZDogTm90aWZpY2F0aW9uSWQ7XG4gIGRhdGE6IE1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsQXBpRGlzcGF0Y2hlciB7XG4gIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPjtcbiAgcmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkO1xuICB1bnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZDtcbn1cblxuLy8gVGhpcyBmYWN0b3J5IGZ1bmN0aW9uIHdpbGwgZ2V0IGNhbGxlZCBmcm9tIHRoZSBleHRlcm5hbCBzaWRlIG9mIHRoaW5ncyB0byBpbnN0YW50aWF0ZSBhIHByb3Blcmx5XG4vLyB2ZXJzaW9uZWQgQVBJIGRpc3BhdGNoZXIgd2hpY2ggdGhpcyBwYXJ0aWN1bGFyIHZlcnNpb24gb2YgZXh0ZXJuYWwga25vd3MgaG93IHRvIHVzZVxuZXhwb3J0IHR5cGUgSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSA9XG4gIChpbnRlcm5hbENvbnRyYWN0VmVyc2lvbjogVmVyc2lvbk51bWJlcikgPT4gSW50ZXJuYWxBcGlEaXNwYXRjaGVyO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBfX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlcjogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PjsgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlciB7XG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoKTogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5fX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlcjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBoYXNEZXNrdG9wQXBpRGlzcGF0Y2hlclByb21pc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhSW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyLmdldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZSgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZShkaXNwYXRjaGVyOiBQcm9taXNlPEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+KTogdm9pZCB7XG4gICAgd2luZG93Ll9fdGFibGVhdURlc2t0b3BEaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyLnRzIiwiZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uSWQge1xuICBTZWxlY3RlZE1hcmtzQ2hhbmdlZCA9ICdzZWxlY3RlZC1tYXJrcy1jaGFuZ2VkJyxcbiAgUGFyYW1ldGVyQ2hhbmdlZCA9ICdwYXJhbWV0ZXItY2hhbmdlZCcsXG4gIEZpbHRlckNoYW5nZWQgPSAnZmlsdGVyLWNoYW5nZWQnLFxuICBFeHRlbnNpb25EaWFsb2dVcGRhdGUgPSAnZXh0ZW5zaW9uLWRpYWxvZy11cGRhdGUnLFxuICBTZXR0aW5nc0NoYW5nZWQgPSAnc2V0dGluZ3MtY2hhbmdlZCcsXG4gIENvbnRleHRNZW51Q2xpY2sgPSAnY29udGV4dC1tZW51LWNsaWNrJyxcbiAgVGVzdENvbnZlcnNpb25Ob3RpZmljYXRpb24gPSAndGVzdC1jb252ZXJzaW9uLW5vdGlmaWNhdGlvbidcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvTm90aWZpY2F0aW9ucy50cyIsImV4cG9ydCBlbnVtIFBhcmFtZXRlcklkIHtcbiAgRXh0ZW5zaW9uTG9jYXRvciA9ICdleHRlbnNpb24tbG9jYXRvcicsXG4gIEV4dGVuc2lvbkJvb3RzdHJhcEluZm8gPSAnZXh0ZW5zaW9uLWJvb3RzdHJhcC1pbmZvJyxcbiAgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvID0gJ2V4dGVuc2lvbi1zZXR0aW5ncy1pbmZvJyxcbiAgVmlzdWFsSWQgPSAndmlzdWFsLWlkJyxcbiAgU2hlZXRQYXRoID0gJ3NoZWV0LXBhdGgnLFxuICBJZ25vcmVBbGlhc2VzID0gJ2lnbm9yZS1hbGlhc2VzJyxcbiAgSWdub3JlU2VsZWN0aW9uID0gJ2lnbm9yZS1zZWxlY3Rpb24nLFxuICBJbmNsdWRlQWxsQ29sdW1ucyA9ICdpbmNsdWRlLWFsbC1jb2x1bW5zJyxcbiAgTWF4Um93cyA9ICdtYXgtcm93cycsXG4gIFVuZGVybHlpbmdEYXRhVGFibGUgPSAndW5kZXJseWluZy1kYXRhLXRhYmxlJyxcbiAgVW5kZXJseWluZ1N1bW1hcnlEYXRhVGFibGUgPSAndW5kZXJseWluZy1zdW1tYXJ5LWRhdGEtdGFibGUnLFxuICBEYXRhU291cmNlRGF0YVRhYmxlID0gJ2RhdGEtc291cmNlLWRhdGEtdGFibGUnLFxuICBTZXR0aW5nc1ZhbHVlcyA9ICdzZXR0aW5ncy12YWx1ZXMnLFxuICBTZWxlY3RlZERhdGEgPSAnc2VsZWN0ZWQtZGF0YScsXG4gIEhpZ2hsaWdodGVkRGF0YSA9ICdoaWdobGlnaHRlZC1kYXRhJyxcblxuICAvLyBGaWx0ZXIgUGFyYW1zXG4gIEZpZWxkTmFtZSA9ICdmaWVsZC1uYW1lJyxcbiAgRmlsdGVyVmFsdWVzID0gJ2ZpbHRlci12YWx1ZXMnLFxuICBGaWx0ZXJVcGRhdGVUeXBlID0gJ2ZpbHRlci11cGRhdGUtdHlwZScsXG4gIElzRXhjbHVkZU1vZGUgPSAnaXMtZXhjbHVkZScsXG4gIEZpbHRlclJhbmdlTWluID0gJ2ZpbHRlci1yYW5nZS1taW4nLFxuICBGaWx0ZXJSYW5nZU1heCA9ICdmaWx0ZXItcmFuZ2UtbWF4JyxcbiAgRmlsdGVyUmFuZ2VOdWxsT3B0aW9uID0gJ2ZpbHRlci1yYW5nZS1udWxsLW9wdGlvbicsXG4gIFdvcmtzaGVldEZpbHRlcnMgPSAnd29ya3NoZWV0LWZpbHRlcnMnLFxuICBGaWVsZElkID0gJ2ZpZWxkLWlkJyxcbiAgRG9tYWluVHlwZSA9ICdkb21haW4tdHlwZScsXG4gIENhdGVnb3JpY2FsRG9tYWluID0gJ2NhdGVnb3JpY2FsLWRvbWFpbicsXG4gIFF1YW50aXRhdGl2ZURvbWFpbiA9ICdxdWFudGl0YXRpdmUtZG1haW4nLFxuICBGaWVsZCA9ICdmaWVsZCcsXG5cbiAgV29ya3NoZWV0TmFtZSA9ICd3b3Jrc2hlZXQtbmFtZScsXG4gIERhc2hib2FyZE5hbWUgPSAnZGFzaGJvYXJkJyxcblxuICBQYXJhbWV0ZXJJbmZvID0gJ3BhcmFtZXRlci1pbmZvJyxcbiAgUGFyYW1ldGVySW5mb3MgPSAncGFyYW1ldGVyLWluZm9zJyxcbiAgUGFyYW1ldGVyQ2FwdGlvbiA9ICdwYXJlbWV0ZXItY2FwdGlvbicsXG4gIFBhcmFtZXRlckZpZWxkTmFtZSA9ICdwYXJhbWV0ZXItZmllbGQtbmFtZScsXG4gIFBhcmFtZXRlclZhbHVlID0gJ3BhcmFtZXRlci12YWx1ZScsXG4gIFNlbGVjdGlvbiA9ICdzZWxlY3Rpb24nLFxuICBTZWxlY3Rpb25VcGRhdGVUeXBlID0gJ3NlbGVjdGlvblVwZGF0ZVR5cGUnLFxuICBIaWVyVmFsU2VsZWN0aW9uTW9kZWxzID0gJ2hpZXJhcmNoaWNhbFZhbHVlU2VsZWN0aW9uTW9kZWxzJyxcbiAgUXVhbnRSYW5nZVNlbGVjdGlvbk1vZGVscyA9ICdxdWFudGF0aXZlUmFuZ2VTZWxlY3Rpb25Nb2RlbHMnLFxuICBEaW1WYWxTZWxlY3Rpb25Nb2RlbHMgPSAnZGltZW5zaW9uVmFsdWVTZWxlY3Rpb25Nb2RlbHMnLFxuXG4gIEFjdGl2ZVRhYmxlc0luZm8gPSAnYWN0aXZlLXRhYmxlcy1pbmZvJyxcbiAgRGF0YVNvdXJjZSA9ICdkYXRhLXNvdXJjZScsXG4gIERhdGFTb3VyY2VJZCA9ICdkYXRhLXNvdXJjZS1pZCcsXG4gIERlbHRhVGltZU1zID0gJ2RlbHRhLXRpbWUtbXMnLFxuICBTaG91bGRSZWZyZXNoRFMgPSAnc2hvdWxkLXJlZnJlc2gtZHMnLFxuICBEYXRhU2NoZW1hID0gJ2RhdGEtc2NoZW1hJyxcbiAgRGF0YVNvdXJjZU5hbWUgPSAnZGF0YS1zb3VyY2UtbmFtZScsXG4gIENvbHVtbnNUb0luY2x1ZGUgPSAnY29sdW1ucy10by1pbmNsdWRlJyxcbiAgSm9pbkRlc2NyaXB0aW9uID0gJ2pvaW4tZGVzY3JpcHRpb24nLFxuICBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMgPSAnY29ubmVjdGlvbi1kZXNjcmlwdGlvbi1zdW1tYXJpZXMnLFxuXG4gIEV4dGVuc2lvbkRpYWxvZ1VybCA9ICdleHRlbnNpb24tZGlhbG9nLXVybCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1BheWxvYWQgPSAnZXh0ZW5zaW9uLWRpYWxvZy1wYXlsb2FkJyxcbiAgSXNFeHRlbnNpb25EaWFsb2cgPSAnaXMtZXh0ZW5zaW9uLWRpYWxvZycsXG4gIEV4dGVuc2lvbkRpYWxvZ0ggPSAnZXh0ZW5zaW9uLWRpYWxvZy1oZWlnaHQnLFxuICBFeHRlbnNpb25EaWFsb2dXID0gJ2V4dGVuc2lvbi1kaWFsb2ctd2lkdGgnLFxuICBFeHRlbnNpb25EaWFsb2dSZXN1bHQgPSAnZXh0ZW5zaW9uLWRpYWxvZy1yZXN1bHQnLFxuXG4gIEV4dGVuc2lvbkNvbnRleHRNZW51SWRzID0gJ2V4dGVuc2lvbi1jb250ZXh0LW1lbnUtaWRzJyxcblxuICBUZXN0Q29udmVyc2lvblBhcmFtZXRlciA9ICd0ZXN0LWNvbnZlcnNpb24tcGFyYW1ldGVyJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9QYXJhbWV0ZXJzLnRzIiwiLy8gRGVjbGFyZSB0aGlzIGtleSB0eXBlIGFuZCBleHBvcnQgdGhlIE5vdGlmaWNhdGlvbklkIHRvIG1ha2UgdGhpcyBiZWhhdmUgbGlrZSBhIHN0cmluZyBlbnVtXG5leHBvcnQgZW51bSBWZXJiSWQge1xuICBBcHBseUNhdGVnb3JpY2FsRmlsdGVyID0gJ2NhdGVnb3JpY2FsLWZpbHRlcicsXG4gIEFwcGx5UmFuZ2VGaWx0ZXIgPSAncmFuZ2UtZmlsdGVyJyxcbiAgQ2xlYXJGaWx0ZXIgPSAnY2xlYXItZmlsdGVyJyxcbiAgSW5pdGlhbGl6ZUV4dGVuc2lvbiA9ICdpbml0aWFsaXplLWV4dGVuc2lvbicsXG4gIEdldERhdGFTdW1tYXJ5RGF0YSA9ICdnZXQtc3VtbWFyeS1kYXRhJyxcbiAgR2V0VW5kZXJseWluZ0RhdGEgPSAnZ2V0LXVuZGVybHlpbmctZGF0YScsXG4gIEdldERhdGFTb3VyY2VEYXRhID0gJ2dldC1kYXRhc291cmNlLWRhdGEnLFxuICBTYXZlRXh0ZW5zaW9uU2V0dGluZ3MgPSAnc2F2ZS1leHRlbnNpb24tc2V0dGluZ3MnLFxuICBHZXRTZWxlY3RlZE1hcmtzID0gJ2dldC1zZWxlY3RlZC1tYXJrcycsXG4gIEdldEhpZ2hsaWdodGVkTWFya3MgPSAnZ2V0LWhpZ2hsaWdodGVkLW1hcmtzJyxcbiAgR2V0UGFyYW1ldGVyc0ZvclNoZWV0ID0gJ2dldC1wYXJhbWV0ZXJzLWZvci1zaGVldCcsXG4gIEZpbmRQYXJhbWV0ZXIgPSAnZmluZC1wYXJhbWV0ZXInLFxuICBDaGFuZ2VQYXJhbWV0ZXJWYWx1ZSA9ICdjaGFuZ2UtcGFyYW1ldGVyLXZhbHVlJyxcbiAgQ2xlYXJTZWxlY3RlZE1hcmtzID0gJ2NsZWFyLXNlbGVjdGVkLW1hcmtzJyxcbiAgU2VsZWN0QnlWYWx1ZSA9ICdzZWxlY3QtYnktdmFsdWUnLFxuICBHZXREYXRhU291cmNlcyA9ICdnZXQtZGF0YS1zb3VyY2VzJyxcbiAgUmVmcmVzaERhdGFTb3VyY2UgPSAncmVmcmVzaC1kYXRhLXNvdXJjZScsXG4gIEdldEZpbHRlcnMgPSAnZ2V0LWZpbHRlcnMnLFxuICBHZXRDYXRlZ29yaWNhbERvbWFpbiA9ICdnZXQtY2F0ZWdvcmljYWwtZG9tYWluJyxcbiAgR2V0UmFuZ2VEb21haW4gPSAnZ2V0LXJhbmdlLWRvbWFpbicsXG4gIEdldEpvaW5EZXNjcmlwdGlvbiA9ICdnZXQtam9pbi1kZXNjcmlwdGlvbicsXG4gIEdldENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcyA9ICdnZXQtY29ubmVjdGlvbi1kZXNjcmlwdGlvbi1zdW1tYXJpZXMnLFxuICBEaXNwbGF5RGlhbG9nID0gJ2Rpc3BsYXktZGlhbG9nJyxcbiAgQ2xvc2VEaWFsb2cgPSAnY2xvc2UtZGlhbG9nJyxcbiAgVGVzdENvbnZlcnNpb25WZXJiID0gJ3Rlc3QtY29udmVyc2lvbi12ZXJiJyxcbiAgR2V0RmllbGQgPSAnZ2V0LWZpZWxkJyxcbiAgR2V0RGF0YVNvdXJjZSA9ICdnZXQtZGF0YXNvdXJjZScsXG4gIEdldEFjdGl2ZVRhYmxlcyA9ICdnZXQtYWN0aXZlLXRhYmxlcydcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvVmVyYnMudHMiLCJpbXBvcnQgeyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0ICogYXMgVHJhbnNsYXRpb25zIGZyb20gJy4vVmVyc2lvblRyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL1N0YWNraW5nVmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0lkZW50aXR5VmVyc2lvbkNvbnZlcnRlcic7XG5cbi8vIEEgbWFwcGluZyBmcm9tIHRoZSBzb3VyY2UgdmVyc2lvbiBvZiBhIG1vZGVsIC0+IHRoZSBuZXh0IHZlcnNpb24gb2YgdGhlIG1vZGVsLiBFYWNoIG1ham9yXG4vLyB2ZXJzaW9uIGJ1bXAgY2FuIGhhdmUgYW4gYXJyYXkgb2YgY29udmVyc2lvbnMgdG8gcGVyZm9ybSBpbiBvcmRlclxuY29uc3QgZXhlY3V0ZVVwZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPiB9ID0ge1xuICAwOiBbXVxufTtcblxuY29uc3QgZXhlY3V0ZURvd25ncmFkZXM6IHsgW3ZlcnNpb246IG51bWJlcl06IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiB9ID0ge1xuICAwOiBbXVxufTtcblxuY29uc3Qgbm90aWZpY2F0aW9uRG93bmdyYWRlczogeyBbdmVyc2lvbjogbnVtYmVyXTogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4gfSA9IHtcbiAgMDogW11cbn07XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHdoaWNoIGhhcyB0aGUgYWJpbGl0eSB0byB1cGdyYWRlIGFuZCBkb3duZ3JhZGUgdGhlIGNvbnRyYWN0IGJldHdlZW4gdGhlIHR3byB2ZXJzaW9uc1xuICogd2hpY2ggYXJlIHNwZWNpZmllZC4gSWYgZXh0ZXJuYWxNYWpvclZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBiZWNhdXNlXG4gKiB3ZSB3b24ndCBrbm93IGhvdyB0byBkbyB0aG9zZSBjb252ZXJzaW9ucy5cbiAqXG4gKiBAcGFyYW0gZXh0ZXJuYWxNYWpvclZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIHVzaW5nXG4gKiBAcGFyYW0gcGxhdGZvcm1NYWpvclZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgcGxhdGZvcm0gaXMgdXNpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVZlcnNpb25Db252ZXJ0ZXIoZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlciwgcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcik6IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICBpZiAoIU51bWJlci5pc0ludGVnZXIoZXh0ZXJuYWxNYWpvclZlcnNpb24pIHx8XG4gICAgIU51bWJlci5pc0ludGVnZXIocGxhdGZvcm1NYWpvclZlcnNpb24pIHx8XG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb24gPCAwIHx8XG4gICAgcGxhdGZvcm1NYWpvclZlcnNpb24gPCAwKSB7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFZlcnNpb25zIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlcnM6XG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA+IHBsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHRlcm5hbCB2ZXJzaW9uIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHBsYXRmb3JtIHZlcnNpb24uXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA9PT0gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgdGhlIGV4YWN0IHNhbWUgdmVyc2lvbnMsIGp1c3QgdXNlIHRoZSBpZGVudGl0eSBjb252ZXJ0ZXJcbiAgICByZXR1cm4gbmV3IElkZW50aXR5VmVyc2lvbkNvbnZlcnRlcigpO1xuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZSB2ZXJzaW9ucyB3ZSBoYXZlIGhlcmUgYW5kIGNvbGxlY3QgdGhlIHVwZ3JhZGUgYW5kIGRvd25ncmFkZXMgbmVjZXNzYXJ5XG4gIGxldCBuZWVkZWRFeGVjdXRlVXBncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+ID0gW107XG4gIGZvciAobGV0IGkgPSBleHRlcm5hbE1ham9yVmVyc2lvbjsgaSA8IHBsYXRmb3JtTWFqb3JWZXJzaW9uOyBpKyspIHtcbiAgICBpZiAoaSBpbiBleGVjdXRlVXBncmFkZXMpIHtcbiAgICAgIG5lZWRlZEV4ZWN1dGVVcGdyYWRlcy5wdXNoKC4uLmV4ZWN1dGVVcGdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZW0gYmFja3dhcmRzIHRvIGdldCB0aGUgbmVjZXNzYXJ5IGRvd25ncmFkZXNcbiAgbGV0IG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4gPSBbXTtcbiAgbGV0IG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+ID0gW107XG4gIGZvciAobGV0IGkgPSBwbGF0Zm9ybU1ham9yVmVyc2lvbiAtIDE7IGkgPj0gZXh0ZXJuYWxNYWpvclZlcnNpb247IGktLSkge1xuICAgIGlmIChpIGluIGV4ZWN1dGVEb3duZ3JhZGVzKSB7XG4gICAgICBuZWVkZWRFeGVjdXRlRG93bmdyYWRlcy5wdXNoKC4uLmV4ZWN1dGVEb3duZ3JhZGVzW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoaSBpbiBub3RpZmljYXRpb25Eb3duZ3JhZGVzKSB7XG4gICAgICBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzLnB1c2goLi4ubm90aWZpY2F0aW9uRG93bmdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIoXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb24sIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBuZWVkZWRFeGVjdXRlVXBncmFkZXMsIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLCBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeS50cyIsImltcG9ydCB7IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBFeGVjdXRlUmVzcG9uc2UsIE5vdGlmaWNhdGlvbiwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycyB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBUcmFuc2xhdGlvbnMgZnJvbSAnLi9WZXJzaW9uVHJhbnNsYXRpb25zJztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhlIHZlcnNpb24gY29udmVydGVyIGlzIGRlc2lnbmVkIHRvIGFsbG93IHRoZSBwbGF0Zm9ybSBhbmQgZXh0ZXJuYWwgbW9kdWxlc1xuICogdG8gc2VlbWxlc3NseSBjb21tdW5pY2F0ZSBvdmVyIHR3byBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgdGhlIGludGVybmFsIEFQSS4gVGhlIG9ubHlcbiAqIG1vZGUgaXQgc3VwcG9ydHMgaXMgZXh0ZXJuYWwncyB2ZXJzaW9uIDw9IHBsYXRmb3JtJ3MgdmVyc2lvbi4gV2hlbiBleGVjdXRpbmdcbiAqIGNvbW1hbmRzLCBpdCBpcyB1c2VkIHRvIHVwZ3JhZGUgdGhlIGV4dGVybmFsIHJlcHJlc2VudGF0aW9uIHRvIHdoYXQgcGxhdGZvcm0ga25vd3Mgb24gdGhlIHdheSBpblxuICogYW5kIGRvd25ncmFkZSB0aGUgcmVwcmVzZW50YXRpb25zIG9uIHRoZSB3YXkgb3V0LiBTaW1pbGFybHkgZm9yIG5vdGlmaWNhdGlvbnMsIGl0IGNhblxuICogZG93bmdyYWRlIHRob3NlIG9uIHRoZSB3YXkgZnJvbSBwbGF0Zm9ybSB0byBleHRlcm5hbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlclxuICAgKlxuICAgKiBAcGFyYW0gX2V4dGVybmFsTWFqb3JWZXJzaW9uIFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCBhcGktZXh0ZXJuYWwtanMgaXMgdXNpbmdcbiAgICogQHBhcmFtIF9wbGF0Zm9ybU1ham9yVmVyc2lvbiBUaGUgbWFqb3IgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgdGhlIGFwaS1wbGF0Zm9ybS1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiB0aGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gd2hlbiB1cGdyYWRpbmcgY21kIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiBkb3duZ3JhZGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gYWZ0ZXIgYSBjbWRcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBvbiBhIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2V4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcixcbiAgICBwcml2YXRlIF91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gICAgcHJpdmF0ZSBfZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICAgIHByaXZhdGUgX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4pIHtcblxuICAgIGlmICh0aGlzLl9leHRlcm5hbE1ham9yVmVyc2lvbiA+IHRoaXMuX3BsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb252ZXJ0IGJldHdlZW4gZXh0ZXJuYWwgdmVyc2lvbiAke3RoaXMuX2V4dGVybmFsTWFqb3JWZXJzaW9ufSBhbmQgJHt0aGlzLl9wbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZUV4ZWN1dGVDYWxsKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KTogeyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzOyB9IHtcbiAgICAvLyBQZXJmb3JtIHRoZSB1cGdyYWRlIG9mIHRoZSB2ZXJiIGFuZCBwYXJhbWV0ZXJzIHRvIHRoZSBsZXZlbCB0aGF0IHBsYXRmb3JtIGlzIHVzaW5nXG4gICAgbGV0IHVwZ3JhZGVkID0geyB2ZXJiOiB2ZXJiLCBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIH07XG4gICAgZm9yIChjb25zdCB1cGdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fdXBncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIHVwZ3JhZGVkID0gdXBncmFkZVRyYW5zbGF0aW9uKHVwZ3JhZGVkLnZlcmIsIHVwZ3JhZGVkLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVFeGVjdXRlUmV0dXJuKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKTogRXhlY3V0ZVJlc3BvbnNlIHtcbiAgICAvLyBEb3duZ3JhZGUgdGhlIHJlc3BvbnNlIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IGV4ZWN1dGVSZXNwb25zZTtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIGRvd25ncmFkZWQgPSBkb3duZ3JhZGVUcmFuc2xhdGlvbihkb3duZ3JhZGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG93bmdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAgIC8vIERvd25ncmFkZSB0aGUgbm90aWZpY2F0aW9uIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IG5vdGlmaWNhdGlvbjtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb3duZ3JhZGVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgTm90aWZpY2F0aW9uLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhpcyB2ZXJzaW9uIGNvbnZlcnRlciBkb2Vzbid0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGJ1dCBpcyB1c2VmdWwgZm9yIHRlc3Rpbmcgb3Igd2hlbiB3ZSBoYXZlXG4gKiBhIG1hdGNoaW5nIHBsYXRmb3JtIGFuZCBpbnRlcm5hbCB2ZXJzaW9uIG51bWJlclxuKi9cbmV4cG9ydCBjbGFzcyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgaW1wbGVtZW50cyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJiOiB2ZXJiIGFzIFZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMgYXMgRXhlY3V0ZVBhcmFtZXRlcnNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIHJldHVybiBleGVjdXRlUmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0ICogYXMgZ3VpZCBmcm9tICdndWlkJztcblxuaW1wb3J0IHsgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSc7XG5pbXBvcnQge1xuICBDb21tYW5kTWVzc2FnZSxcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgSW5pdGlhbGl6ZU1lc3NhZ2UsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBOb3RpZmljYXRpb25NZXNzYWdlLFxufSBmcm9tICcuL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi9pbnRlcmZhY2UvTWVzc2VuZ2VyJztcbmltcG9ydCB7IFByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL1ByZXBhcmVkTWVzc2FnZSc7XG5pbXBvcnQge1xuICBpc0NvbW1hbmRNZXNzYWdlLFxuICBpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UsXG4gIGlzSW5pdE1lc3NhZ2UsXG4gIGlzTWVzc2FnZSxcbiAgaXNOb3RpZmljYXRpb25NZXNzYWdlLFxufSBmcm9tICcuL01lc3NhZ2VUeXBlQ2hlY2tzJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIsIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMsIE1vZGVsLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogVGhlIENyb3NzRnJhbWVNZXNzZW5nZXIgaXMgdGhlIHByaW1hcnkgZXhwb3J0IGZyb20gdGhlIGFwaS1tZXNzYWdpbmcgbW9kdWxlLiBBbiBpbnN0YW5jZSBvZlxuICogdGhpcyBjbGFzcyBjYW4gYmUgaW5zdGFudGlhdGVkIG9uIGJvdGggc2lkZXMgb2YgYSBmcmFtZSBib3VuZGFyeSB0byBmYWNpbGl0YXRlIGNvbW11bmljYXRpb25cbiAqIGluIGJvdGggZGlyZWN0aW9ucyBiZXR3ZWVuIHRoZSBmcmFtZXMuIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBib3RoIHRoZSBkaXNwYXRjaGVyIGFuZCB0aGUgbGlzdGVuZXJcbiAqIHBvcnRpb25zLCBidXQgZG9lc24ndCByZXF1aXJlIGNhbGxlcnMgdG8gY2FyZSBhYm91dCBib3RoLlxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZU1lc3NlbmdlciBpbXBsZW1lbnRzIE1lc3NlbmdlciB7XG4gIHByaXZhdGUgdW5yZWdpc3RlckZ1bmN0aW9uOiB1bmRlZmluZWQgfCAoKCkgPT4gdm9pZCk7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogSW5pdGlhbGl6ZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBjb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBjb21tYW5kTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBDb21tYW5kTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIG5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogTm90aWZpY2F0aW9uTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVNZXNzZW5nZXIuIElmIHlvdSB3b3VsZCBsaWtlIHRvIHVzZSB0aGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBhcyBhIE1lc3NhZ2VMaXN0ZW5lcixcbiAgICogYmUgc3VyZSB0byBjYWxsIFN0YXJ0TGlzdGVuaW5nIGFuZCByZWdpc3RlciBtZXNzYWdlIGhhbmRsZXJzLlxuICAgKiBAcGFyYW0gdGhpc1dpbmRvdyBUaGUgd2luZG93IG9iamVjdCB3aGljaCB0aGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBsaXZlcy4gQW4gb25NZXNzYWdlIGxpc3RlbmVyIHdpbGwgYmUgYWRkZWQgaGVyZS5cbiAgICogQHBhcmFtIFtvdGhlcldpbmRvd10gT3B0aW9uYWwgb3RoZXJXaW5kb3cgd2hpY2ggbWVzc2FnZXMgd2lsbCBiZSBwb3N0ZWQgdG8uXG4gICAqICAgICAgICAgICAgICAgICAgICAgIElmIGRlZmluZWQsIGluY29taW5nIG1lc3NhZ2VzIG11c3Qgb3JpZ2luYXRlIGZyb20gb3RoZXJXaW5kb3cgdG8gYmUgcGFzc2VkIG9uXG4gICAqIEBwYXJhbSBbb3RoZXJXaW5kb3dPcmlnaW5dIFRoZSB0YXJnZXQgb3JpZ2luIHdoaWNoIG90aGVyV2luZG93IG11c3QgaGF2ZSBpbiBvcmRlciB0byByZWNlaXZlIGRpc3BhdGNoZWQgbWVzc2FnZXMuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgdmFsdWUgd2lsbCBiZSBzZW50IGFzIHRoZSB0YXJnZXRPcmlnaW4gb2YgYSBwb3N0TWVzc2FnZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9wb3N0TWVzc2FnZSlcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoaXNXaW5kb3c6IFdpbmRvdywgcHJpdmF0ZSBvdGhlcldpbmRvdz86IFdpbmRvdywgcHJpdmF0ZSBvdGhlcldpbmRvd09yaWdpbj86IHN0cmluZykge1xuICAgIC8vIE1ha2Ugc3VyZSB0byBjYWxsIFN0YXJ0TGlzdGVuaW5nXG4gIH1cblxuICAvLy8vLyBNZXNzYWdlTGlzdGVuZXIgSW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBhcmUgbGlzdGVuaW5nLCBpZiBub3QsIGhvb2sgdXAgYSBtZXNzYWdlIGxpc3RlbmVyXG4gICAgaWYgKCF0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbikge1xuICAgICAgY29uc3QgYm91bmRIYW5kbGVyID0gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50aGlzV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBib3VuZEhhbmRsZXIsIHRydWUpO1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24gPSAoKSA9PiB0aGlzLnRoaXNXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGJvdW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0b3BMaXN0ZW5pbmcoKTogdm9pZCB7XG4gICAgLy8gU3RvcCBsaXN0ZW5pbmcgaWYgd2UgaGF2ZSBzdGFydGVkIGxpc3RlbmluZ1xuICAgIGlmICh0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbikge1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24oKTtcbiAgICAgIHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0aWFsaXplTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IEluaXRpYWxpemVNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21tYW5kTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IENvbW1hbmRNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZE1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXROb3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogTm90aWZpY2F0aW9uTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIC8vLy8vIE1lc3NhZ2VEaXNwYXRjaGVyIEltcGxlbWVudGF0aW9uXG5cbiAgcHVibGljIHByZXBhcmVJbml0aWFsaXphdGlvbk1lc3NhZ2UoYXBpVmVyc2lvbjogVmVyc2lvbk51bWJlciwgY3Jvc3NGcmFtZVZlcnNpb246IFZlcnNpb25OdW1iZXIpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IEluaXRpYWxpemVNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkluaXRpYWxpemUsXG4gICAgICBjcm9zc0ZyYW1lVmVyc2lvbjogY3Jvc3NGcmFtZVZlcnNpb24sXG4gICAgICBhcGlWZXJzaW9uOiBhcGlWZXJzaW9uXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVDb21tYW5kTWVzc2FnZSh2ZXJiSWQ6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IENvbW1hbmRNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkNvbW1hbmQsXG4gICAgICB2ZXJiSWQ6IHZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUNvbW1hbmRSZXNwb25zZU1lc3NhZ2UoY29tbWFuZEd1aWQ6IHN0cmluZywgZGF0YTogTW9kZWwgfCB1bmRlZmluZWQsIGVycm9yOiBNb2RlbCB8IHVuZGVmaW5lZCk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsXG4gICAgICBjb21tYW5kR3VpZDogY29tbWFuZEd1aWQsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVOb3RpZmljYXRpb25NZXNzYWdlKG5vdGlmaWNhdGlvbklkOiBOb3RpZmljYXRpb25JZCwgZGF0YTogTW9kZWwpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLFxuICAgICAgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbklkLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyBhIHBlbmRpbmcgbWVzc2FnZSBmb3Igc2VuZGluZyBhbmQgcmV0dXJucyB0aGUgcHJlcGFyZWQgbWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIGJlIHNlbnQgdG8gdGhpcy5vdGhlcldpbmRvd1xuICAgKiBAcmV0dXJucyBUaGUgcHJlcGFyZWQgbWVzc2FnZVxuICAgKi9cbiAgcHJpdmF0ZSBwcmVwYXJlTWVzc2FnZShtc2c6IE1lc3NhZ2UpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGlmICghdGhpcy5vdGhlcldpbmRvdyB8fCAhdGhpcy5vdGhlcldpbmRvd09yaWdpbikge1xuICAgICAgdGhyb3cgJ090aGVyIHdpbmRvdyBub3QgaW5pdGlhbGl6ZWQsIGNhbm5vdCBkaXNwYXRjaCBtZXNzYWdlcyc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlcGFyZWRNZXNzYWdlID0gbmV3IENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UobXNnLCB0aGlzLm90aGVyV2luZG93LCB0aGlzLm90aGVyV2luZG93T3JpZ2luKTtcbiAgICByZXR1cm4gcHJlcGFyZWRNZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZC4gRG9lcyBzb21lIHZhbGlkYXRpb24gb2YgdGhlIG1lc3NhZ2UsIGFuZCB0aGVuXG4gICAqIGNhbGxzIGFuIGFwcHJvcHJpYXRlIG1lc3NhZ2UgaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGluY29taW5nIE1lc3NhZ2VFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZChldmVudDogTWVzc2FnZUV2ZW50KTogdm9pZCB7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIG90aGVyV2luZG93IGRlZmluZWQsIG1ha2Ugc3VyZSB0aGUgbWVzc2FnZSBpcyBjb21pbmcgZnJvbSB0aGVyZVxuICAgIGlmICh0aGlzLm90aGVyV2luZG93ICYmIGV2ZW50LnNvdXJjZSAhPT0gdGhpcy5vdGhlcldpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERvIHNvbWUgdmFsaWRhdGlvbiBvbiBldmVudC5kYXRhIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgcmVjZWl2ZWQgYSByZWFsIG1lc3NhZ2VcbiAgICBpZiAoIWV2ZW50LmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoZSBkZWNsYXJlZCBtZXNzYWdlIHR5cGUsIHZhbGlkYXRlIHRoZSBtZXNzYWdlLCBhbmQgY2FsbCBhbiBhcHByb3ByaWF0ZSBoYW5kZXIgaWYgb25lIGV4aXN0c1xuICAgIHN3aXRjaCAobWVzc2FnZS5tc2dUeXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkluaXRpYWxpemU6IHtcbiAgICAgICAgaWYgKCFpc0luaXRNZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLmluaXRpYWxpemVNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2U6IHtcbiAgICAgICAgaWYgKCFpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21tYW5kOiB7XG4gICAgICAgIGlmICghaXNDb21tYW5kTWVzc2FnZShtZXNzYWdlKSB8fCAhdGhpcy5jb21tYW5kTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBldmVudC5zb3VyY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uOiB7XG4gICAgICAgIGlmICghaXNOb3RpZmljYXRpb25NZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBldmVudC5zb3VyY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBKdXN0IGlnbm9yZSB0aGlzIHNpbmNlIHdlIGRvbid0IGtub3cgaG93IHRvIGhhbmRsZSB0aGUgbWVzc2FnZSB0eXBlXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyLnRzIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBQcmVwYXJlZE1lc3NhZ2UgfSBmcm9tICcuL2ludGVyZmFjZS9QcmVwYXJlZE1lc3NhZ2UnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBQcmVwYXJlZE1lc3NhZ2UgaW50ZXJmYWNlIHVzZWQgdG8gcG9zdCBtZXNzYWdlcyBiZXR3ZWVuXG4gKiB0d28gZnJhbWVzIHVzaW5nIHdpbmRvdy5wb3N0TWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSBpbXBsZW1lbnRzIFByZXBhcmVkTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UuXG4gICAqIEBwYXJhbSBfbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBzZW50XG4gICAqIEBwYXJhbSBfdGFyZ2V0IFRoZSB0YXJnZXQgd2luZG93IHdoZXJlIHRoZSBtZXNzYWdlIHdpbGwgYmUgc2VudFxuICAgKiBAcGFyYW0gX29yaWdpbiBUaGUgdGFyZ2V0T3JpZ2luIHdoZXJlIHRoaXMgbWVzc2FnZSBjYW4gYmUgcmVjZWl2ZWRcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlOiBNZXNzYWdlLCBwcml2YXRlIF90YXJnZXQ6IFdpbmRvdywgcHJpdmF0ZSBfb3JpZ2luOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgcHVibGljIGdldCBtZXNzYWdlR3VpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbWVzc2FnZS5tc2dHdWlkOyB9XG5cbiAgcHVibGljIHNlbmQoKTogUHJlcGFyZWRNZXNzYWdlIHtcbiAgICB0aGlzLl90YXJnZXQucG9zdE1lc3NhZ2UodGhpcy5fbWVzc2FnZSwgdGhpcy5fb3JpZ2luKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS50cyIsImltcG9ydCAqIGFzIGd1aWQgZnJvbSAnZ3VpZCc7XG5cbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvVmVyc2lvbk51bWJlcic7XG5pbXBvcnQge1xuICBDb21tYW5kTWVzc2FnZSxcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgSW5pdGlhbGl6ZU1lc3NhZ2UsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBOb3RpZmljYXRpb25NZXNzYWdlLFxufSBmcm9tICcuL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSBuby1hbnkgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01lc3NhZ2UoZGF0YTogTWVzc2FnZSB8IGFueSk6IGRhdGEgaXMgTWVzc2FnZSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkYXRhIGFzIE1lc3NhZ2U7XG4gIGlmICghbWVzc2FnZSB8fCAhbWVzc2FnZS5tc2dHdWlkIHx8ICFtZXNzYWdlLm1zZ1R5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWd1aWQuaXNHdWlkKG1lc3NhZ2UubXNnR3VpZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIG1lc3NhZ2UubXNnVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4gPVxuICAgIFtNZXNzYWdlVHlwZS5Db21tYW5kLCBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsIE1lc3NhZ2VUeXBlLkluaXRpYWxpemUsIE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbl07XG5cbiAgaWYgKG1lc3NhZ2VUeXBlcy5pbmRleE9mKG1lc3NhZ2UubXNnVHlwZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZlcnNpb24odmVyc2lvbk51bWJlcjogVmVyc2lvbk51bWJlciB8IGFueSk6IHZlcnNpb25OdW1iZXIgaXMgVmVyc2lvbk51bWJlciB7XG4gIGlmICghdmVyc2lvbk51bWJlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHYgPSB2ZXJzaW9uTnVtYmVyIGFzIFZlcnNpb25OdW1iZXI7XG5cbiAgaWYgKHR5cGVvZiB2ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygdi5maXggIT09ICdudW1iZXInIHx8IHR5cGVvZiB2Lm1pbm9yICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygdi5tYWpvciAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5pdE1lc3NhZ2UobWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIEluaXRpYWxpemVNZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpbml0TWVzc2FnZSA9IG1lc3NhZ2UgYXMgSW5pdGlhbGl6ZU1lc3NhZ2U7XG4gIGlmIChpbml0TWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Jbml0aWFsaXplKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpbml0TWVzc2FnZS5hcGlWZXJzaW9uIHx8ICFpc1ZlcnNpb24oaW5pdE1lc3NhZ2UuYXBpVmVyc2lvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWluaXRNZXNzYWdlLmNyb3NzRnJhbWVWZXJzaW9uIHx8ICFpc1ZlcnNpb24oaW5pdE1lc3NhZ2UuY3Jvc3NGcmFtZVZlcnNpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UobWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY3JNZXNzYWdlID0gbWVzc2FnZSBhcyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlO1xuICBpZiAoY3JNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghZ3VpZC5pc0d1aWQoY3JNZXNzYWdlLmNvbW1hbmRHdWlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghY3JNZXNzYWdlLmRhdGEgJiYgIWNyTWVzc2FnZS5lcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kTWVzc2FnZShtZXNzYWdlOiBDb21tYW5kTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgQ29tbWFuZE1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNvbW1hbmRNZXNzYWdlID0gbWVzc2FnZSBhcyBDb21tYW5kTWVzc2FnZTtcbiAgaWYgKGNvbW1hbmRNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkNvbW1hbmQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNvbW1hbmRNZXNzYWdlLnBhcmFtZXRlcnMgfHwgdHlwZW9mIGNvbW1hbmRNZXNzYWdlLnBhcmFtZXRlcnMgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFjb21tYW5kTWVzc2FnZS52ZXJiSWQgfHwgdHlwZW9mIGNvbW1hbmRNZXNzYWdlLnZlcmJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90aWZpY2F0aW9uTWVzc2FnZShtZXNzYWdlOiBOb3RpZmljYXRpb25NZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBOb3RpZmljYXRpb25NZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBub3RpZmljYXRpb25NZXNzYWdlID0gbWVzc2FnZSBhcyBOb3RpZmljYXRpb25NZXNzYWdlO1xuICBpZiAobm90aWZpY2F0aW9uTWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5vdGlmaWNhdGlvbk1lc3NhZ2UuZGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCB8fCB0eXBlb2Ygbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VUeXBlQ2hlY2tzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IERhc2hib2FyZEltcGwgfSBmcm9tICcuL0ltcGwvRGFzaGJvYXJkSW1wbCc7XG5pbXBvcnQgeyBTaGVldCB9IGZyb20gJy4vU2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgU2hlZXQgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGFzaGJvYXJkSW1wbDogRGFzaGJvYXJkSW1wbCkge1xuICAgIHN1cGVyKF9kYXNoYm9hcmRJbXBsKTtcbiAgICBfZGFzaGJvYXJkSW1wbC5pbml0aWFsaXplV2l0aFB1YmxpY0ludGVyZmFjZXModGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldHMoKTogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZEltcGwud29ya3NoZWV0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2JqZWN0cygpOiBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+IHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkSW1wbC5vYmplY3RzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmQudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIGFzIFZlcnNpb25OdW1iZXJDb250cmFjdCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGV4dGVuc2lvbnMgbGlicmFyeVxuICovXG5leHBvcnQgY2xhc3MgVmVyc2lvbk51bWJlciBpbXBsZW1lbnRzIFZlcnNpb25OdW1iZXJDb250cmFjdCB7XG4gIC8vIFVzaW5nIHNvbWUgd2VicGFjayB0cmlja3MsIHdlIGNhbiBpbmplY3QgdGhpcyB2ZXJzaW9uIGludG8gb3VyIGNvZGUgKGtpbmRhIGxpa2UgYysrIHByZXByb2Nlc3NvciBzdHVmZilcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBWZXJzaW9uTnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIHZlcnNpb24gbnVtYmVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogVmVyc2lvbk51bWJlciB7XG4gICAgcmV0dXJuIFZlcnNpb25OdW1iZXIuX2luc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBTZXRWZXJzaW9uTnVtYmVyKG51bVN0cmluZzogc3RyaW5nKTogdm9pZCB7XG4gICAgVmVyc2lvbk51bWJlci5faW5zdGFuY2UgPSBuZXcgVmVyc2lvbk51bWJlcihudW1TdHJpbmcpO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IG1ham9yOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBtaW5vcjogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgZml4OiBudW1iZXI7XG5cbiAgLy8gcHJpdmF0ZSBjb25zdHJ1Y3RvciBzbyBldmVyeW9uZSB1c2VzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih2ZXJzaW9uU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHZlcnNpb25TdHJpbmcuc3BsaXQoJy4nKS5tYXAocCA9PiBwYXJzZUludChwLCAxMCkpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgSW52YWxpZCB2ZXJzaW9uIG51bWJlcjogJHt2ZXJzaW9uU3RyaW5nfWApO1xuICAgIH1cblxuICAgIHRoaXMubWFqb3IgPSBwYXJ0c1swXTtcbiAgICB0aGlzLm1pbm9yID0gcGFydHNbMV07XG4gICAgdGhpcy5maXggPSBwYXJ0c1syXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5tYWpvcn0uJHt0aGlzLm1pbm9yfS4ke3RoaXMuZml4fWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXIudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IERhc2hib2FyZE9iamVjdFR5cGUsIEV4dGVuc2lvbkRhc2hib2FyZEluZm8sIFNoZWV0UGF0aCwgVmlzdWFsSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRPYmplY3QgfSBmcm9tICcuLi9EYXNoYm9hcmRPYmplY3QnO1xuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL1BvaW50JztcbmltcG9ydCB7IFNpemUgfSBmcm9tICcuLi9TaXplJztcbmltcG9ydCB7IFdvcmtzaGVldCB9IGZyb20gJy4uL1dvcmtzaGVldCc7XG5cbmltcG9ydCB7IFNoZWV0SW1wbCB9IGZyb20gJy4vU2hlZXRJbXBsJztcbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuaW1wb3J0IHsgV29ya3NoZWV0SW1wbCB9IGZyb20gJy4vV29ya3NoZWV0SW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRJbXBsIGV4dGVuZHMgU2hlZXRJbXBsIHtcbiAgcHJpdmF0ZSBfd29ya3NoZWV0czogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PjtcbiAgcHJpdmF0ZSBfb2JqZWN0czogQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5mbzogRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbywgcHJpdmF0ZSBfc2hlZXRQYXRoOiBTaGVldFBhdGgpIHtcbiAgICBzdXBlcihuZXcgU2hlZXRJbmZvSW1wbChfaW5mby5uYW1lLCBDb250cmFjdC5TaGVldFR5cGUuRGFzaGJvYXJkLCBuZXcgU2l6ZShfaW5mby5zaXplLmgsIF9pbmZvLnNpemUudykpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0cygpOiBBcnJheTxDb250cmFjdC5Xb3Jrc2hlZXQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2JqZWN0cygpOiBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+IHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplV2l0aFB1YmxpY0ludGVyZmFjZXMoZGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5SW50ZXJuYWxWYWx1ZShkYXNoYm9hcmQsICdkYXNoYm9hcmQnKTtcblxuICAgIHRoaXMuX3dvcmtzaGVldHMgPSBuZXcgQXJyYXk8V29ya3NoZWV0PigpO1xuICAgIHRoaXMuX29iamVjdHMgPSBuZXcgQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PigpO1xuXG4gICAgLy8gUHJvY2VzcyBhbGwgdGhlIHpvbmVzIHdoaWNoIGFyZSBjb250YWluZWQgaW4gdGhpcyBkYXNoYm9hcmRcbiAgICBmb3IgKGNvbnN0IHpvbmUgb2YgdGhpcy5faW5mby56b25lcykge1xuICAgICAgbGV0IHdvcmtzaGVldDogV29ya3NoZWV0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICBjb25zdCB6b25lU2l6ZSA9IG5ldyBTaXplKHpvbmUuaGVpZ2h0LCB6b25lLndpZHRoKTtcblxuICAgICAgaWYgKHpvbmUuem9uZVR5cGUgPT09IERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0KSB7XG4gICAgICAgIGNvbnN0IHNoZWV0SW5mbyA9IG5ldyBTaGVldEluZm9JbXBsKHpvbmUubmFtZSwgQ29udHJhY3QuU2hlZXRUeXBlLldvcmtzaGVldCwgem9uZVNpemUpO1xuICAgICAgICBjb25zdCB2aXpJZDogVmlzdWFsSWQgPSB7XG4gICAgICAgICAgd29ya3NoZWV0OiB6b25lLm5hbWUsXG4gICAgICAgICAgZGFzaGJvYXJkOiB0aGlzLl9pbmZvLm5hbWUsXG4gICAgICAgICAgc3Rvcnlib2FyZDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5Ym9hcmQsXG4gICAgICAgICAgZmxpcGJvYXJkWm9uZUlEOiB0aGlzLl9zaGVldFBhdGguZmxpcGJvYXJkWm9uZUlELFxuICAgICAgICAgIHN0b3J5UG9pbnRJRDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5UG9pbnRJRFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldEltcGwgPSBuZXcgV29ya3NoZWV0SW1wbChzaGVldEluZm8sIHZpeklkLCBkYXNoYm9hcmQpO1xuICAgICAgICB3b3Jrc2hlZXQgPSBuZXcgV29ya3NoZWV0KHdvcmtzaGVldEltcGwpO1xuICAgICAgICB0aGlzLl93b3Jrc2hlZXRzLnB1c2god29ya3NoZWV0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgem9uZVBvaW50ID0gbmV3IFBvaW50KHpvbmUueCwgem9uZS55KTtcblxuICAgICAgY29uc3QgZGFzaGJvYXJkT2JqZWN0ID0gbmV3IERhc2hib2FyZE9iamVjdChcbiAgICAgICAgZGFzaGJvYXJkLFxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGFzaGJvYXJkT2JqZWN0VHlwZS5jb252ZXJ0KHpvbmUuem9uZVR5cGUpLFxuICAgICAgICB6b25lUG9pbnQsXG4gICAgICAgIHpvbmVTaXplLFxuICAgICAgICB3b3Jrc2hlZXRcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChkYXNoYm9hcmRPYmplY3QpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGRhc2hib2FyZCBvYmplY3RzIC0gdGhlIHpvbmVzIGluIGEgZGFzaGJvYXJkLlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpcyBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkT2JqZWN0IGltcGxlbWVudHMgQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2Rhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkLFxuICAgIHByaXZhdGUgX3R5cGU6IENvbnRyYWN0LkRhc2hib2FyZE9iamVjdFR5cGUsXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IENvbnRyYWN0LlBvaW50LFxuICAgIHByaXZhdGUgX3NpemU6IENvbnRyYWN0LlNpemUsXG4gICAgcHJpdmF0ZSBfd29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQgfCB1bmRlZmluZWRcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IENvbnRyYWN0LlBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldCgpOiBDb250cmFjdC5Xb3Jrc2hlZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZE9iamVjdC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgUG9pbnQgaW1wbGVtZW50cyBDb250cmFjdC5Qb2ludCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF94OiBudW1iZXIsIHByaXZhdGUgX3k6IG51bWJlcikgeyB9XG5cbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUG9pbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IGNsYXNzIFNpemUgaW1wbGVtZW50cyBDb250cmFjdC5TaXplIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hlaWdodDogbnVtYmVyLCBwcml2YXRlIF93aWR0aDogbnVtYmVyKSB7IH1cblxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaXplLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNoZWV0IH0gZnJvbSAnLi9TaGVldCc7XG5pbXBvcnQgeyBXb3Jrc2hlZXRJbXBsIH0gZnJvbSAnLi9JbXBsL1dvcmtzaGVldEltcGwnO1xuXG5leHBvcnQgY2xhc3MgV29ya3NoZWV0IGV4dGVuZHMgU2hlZXQgaW1wbGVtZW50cyBDb250cmFjdC5Xb3Jrc2hlZXQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfd29ya3NoZWV0SW1wbDogV29ya3NoZWV0SW1wbCkge1xuICAgIHN1cGVyKF93b3Jrc2hlZXRJbXBsKTtcblxuICAgIC8vIENhbGwgdG8gaW5pdGlhbGl6ZSBldmVudHMgYW5kIHRoZW4gY2FsbCBkb3duIHRvIHRoZSBldmVudCBsaXN0ZW5lciBtYW5hZ2VyIHRvIGhhbmRsZSB0aGluZ3NcbiAgICB0aGlzLl93b3Jrc2hlZXRJbXBsLmluaXRpYWxpemVFdmVudHModGhpcykuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3RXZlbnRUeXBlKGUpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyZW50RGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwucGFyZW50RGFzaGJvYXJkO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RmlsdGVyQXN5bmMoXG4gICAgZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlczogQXJyYXk8c3RyaW5nPiwgdXBkYXRlVHlwZTogQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSwgb3B0aW9uczogQ29udHJhY3QuRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuYXBwbHlGaWx0ZXJBc3luYyhmaWVsZE5hbWUsIHZhbHVlcywgdXBkYXRlVHlwZSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5SYW5nZUZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmFwcGx5UmFuZ2VGaWx0ZXJBc3luYyhmaWVsZE5hbWUsIGZpbHRlck9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmNsZWFyRmlsdGVyQXN5bmMoZmllbGROYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhU291cmNlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXREYXRhU291cmNlc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRmlsdGVyPj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldEZpbHRlcnNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFNlbGVjdGVkTWFya3NBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldEhpZ2hsaWdodGVkTWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldEhpZ2hsaWdodGVkTWFya3NBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0U3VtbWFyeURhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRTdW1tYXJ5RGF0YUFzeW5jKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0VW5kZXJseWluZ0RhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlEQXN5bmMobWFya3NJbmZvOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sIHVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5zZWxlY3RNYXJrc0J5SWRBc3luYyhtYXJrc0luZm8sIHVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9ucywgc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5zZWxlY3RNYXJrc0J5SWRBc3luYyhzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvV29ya3NoZWV0LnRzIiwiaW1wb3J0IHsgU2hlZXRUeXBlLCBTaXplIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTaGVldFBhdGggfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXRJbmZvSW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfc2hlZXRUeXBlOiBTaGVldFR5cGUsXG4gICAgcHJpdmF0ZSBfc2hlZXRTaXplOiBTaXplXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0U2l6ZSgpOiBTaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hlZXROYW1lOiB0aGlzLm5hbWUsXG4gICAgICBpc0Rhc2hib2FyZDogdGhpcy5zaGVldFR5cGUgPT09IFNoZWV0VHlwZS5EYXNoYm9hcmRcbiAgICAgIC8vIFRPRE8gLSBTdG9yaWVzXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEluZm9JbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQge1xuICBEYXRhU2NoZW1hLFxuICBEYXRhU291cmNlIGFzIERhdGFTb3VyY2VJbmZvLFxuICBGaWx0ZXJFdmVudCwgTm90aWZpY2F0aW9uSWQsXG4gIFZpc3VhbElkLFxuICBXb3Jrc2hlZXREYXRhU291cmNlSW5mb1xufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vRGF0YVNvdXJjZSc7XG5pbXBvcnQgeyBXb3Jrc2hlZXQgfSBmcm9tICcuLi9Xb3Jrc2hlZXQnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4vRGF0YVNvdXJjZUltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9TaGVldEltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbmZvSW1wbCB9IGZyb20gJy4vU2hlZXRJbmZvSW1wbCc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsIH0gZnJvbSAnLi9TaW5nbGVFdmVudE1hbmFnZXJJbXBsJztcblxuaW1wb3J0IHsgRmlsdGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudCc7XG5pbXBvcnQgeyBNYXJrc1NlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50JztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4uL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UsIEdldERhdGFUeXBlIH0gZnJvbSAnLi4vU2VydmljZXMvR2V0RGF0YVNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1NlbGVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuY29uc3QgdmlzdWFsSWRzQXJlRXF1YWwgPSBmdW5jdGlvbiAoYTogVmlzdWFsSWQsIGI6IFZpc3VhbElkKTogYm9vbGVhbiB7XG4gIHJldHVybiBhICYmIGIgJiZcbiAgICBhLndvcmtzaGVldCA9PT0gYi53b3Jrc2hlZXQgJiZcbiAgICBhLmRhc2hib2FyZCA9PT0gYi5kYXNoYm9hcmQgJiZcbiAgICBhLnN0b3J5Ym9hcmQgPT09IGIuc3Rvcnlib2FyZCAmJlxuICAgIGEuc3RvcnlQb2ludElEID09PSBiLnN0b3J5UG9pbnRJRCAmJlxuICAgIGEuZmxpcGJvYXJkWm9uZUlEID09PSBiLmZsaXBib2FyZFpvbmVJRDtcbn07XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXRJbXBsIGV4dGVuZHMgU2hlZXRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNoZWV0SW5mb0ltcGw6IFNoZWV0SW5mb0ltcGwsXG4gICAgcHJpdmF0ZSBfdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIHByaXZhdGUgX3BhcmVudERhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKSB7XG4gICAgc3VwZXIoc2hlZXRJbmZvSW1wbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudERhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnREYXNoYm9hcmQ7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCBnb2VzIHRocm91Z2ggYW5kIHJlZ2lzdGVycyBlYWNoIGV2ZW50IHR5cGUgdGhpcyBpbXBsIGtub3dzIGFib3V0XG4gICAqIHdpdGggdGhlIE5vdGlmaWNhdGlvblNlcnZpY2UuIEl0IHJldHVybnMgYW4gYXJyYXkgb2YgU2luZ2xlRXZlbnRNYW5hZ2VyIG9iamVjdHMgd2hpY2hcbiAgICogY2FuIHRoZW4gYmUgcGFzc2VkIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIHRvIGhhbmRsZSB1c2VyIHJlZ2lzdHJhdGlvbiAvIHVucmVnaXN0cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1dvcmtzaGVldH0gd29ya3NoZWV0IFRoZSB3b3Jrc2hlZXQgb2JqZWN0IHdoaWNoIHdpbGwgYmUgaW5jbHVkZWQgd2l0aCB0aGUgZXZlbnQgbm90aWZpY2F0aW9uc1xuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUV2ZW50cyh3b3Jrc2hlZXQ6IFdvcmtzaGVldCk6IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPigpO1xuICAgIGxldCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIHRoaXMgc2VydmljZSByZWdpc3RlcmVkLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIGV2ZW50IG1hbmFnZXJzIHdlJ2xsIG5lZWQgKG9uZSBmb3IgZWFjaCBldmVudCB0eXBlKVxuICAgIGNvbnN0IG1hcmtzRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxNYXJrc1NlbGVjdGVkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuTWFya1NlbGVjdGlvbkNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLlNlbGVjdGVkTWFya3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIGNvbnN0IHZpc3VhbElkID0gbW9kZWwgYXMgVmlzdWFsSWQ7XG4gICAgICByZXR1cm4gdmlzdWFsSWRzQXJlRXF1YWwodmlzdWFsSWQsIHRoaXMudmlzdWFsSWQpO1xuICAgIH0sICh2aXo6IFZpc3VhbElkKSA9PiB7XG4gICAgICBtYXJrc0V2ZW50LnRyaWdnZXJFdmVudCgoKSA9PiBuZXcgTWFya3NTZWxlY3RlZEV2ZW50KHdvcmtzaGVldCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdGVyRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxGaWx0ZXJDaGFuZ2VkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuRmlsdGVyQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuRmlsdGVyQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJFdmVudFJlc3BvbnNlID0gbW9kZWwgYXMgRmlsdGVyRXZlbnQ7XG4gICAgICByZXR1cm4gdGhpcy52aXN1YWxJZC53b3Jrc2hlZXQgPT09IGZpbHRlckV2ZW50UmVzcG9uc2UudmlzdWFsSWQud29ya3NoZWV0O1xuICAgIH0sIChldmVudDogRmlsdGVyRXZlbnQpID0+IHtcbiAgICAgIGZpbHRlckV2ZW50LnRyaWdnZXJFdmVudCgoKSA9PiBuZXcgRmlsdGVyQ2hhbmdlZEV2ZW50KHdvcmtzaGVldCwgZXZlbnQuZmllbGROYW1lKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2gobWFya3NFdmVudCk7XG4gICAgcmVzdWx0cy5wdXNoKGZpbHRlckV2ZW50KTtcblxuICAgIC8vIFRPRE8gLSBvdGhlciBldmVudCB0eXBlc1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZpc3VhbElkKCk6IFZpc3VhbElkIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzdWFsSWQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICBmaWVsZE5hbWU6IHN0cmluZywgdmFsdWVzOiBBcnJheTxzdHJpbmc+LCB1cGRhdGVUeXBlOiBDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlLCBvcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGU+KHVwZGF0ZVR5cGUsIENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmFwcGx5RmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lLCB2YWx1ZXMsIHVwZGF0ZVR5cGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5UmFuZ2VGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuUmFuZ2VGaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGZpZWxkTmFtZSwgJ2ZpZWxkTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoZmlsdGVyT3B0aW9ucywgJ2ZpbHRlck9wdGlvbnMnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UmFuZ2VQYXJhbVR5cGUoZmlsdGVyT3B0aW9ucy5taW4sIGZpbHRlck9wdGlvbnMubWF4KTtcblxuICAgIGlmIChmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24pIHtcbiAgICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyTnVsbE9wdGlvbj4oZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uLCBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXBwbHlSYW5nZUZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWVsZE5hbWUsICdmaWVsZE5hbWUnKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5jbGVhckZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0RGF0YVNvdXJjZXNBc3luYyh0aGlzLnZpc3VhbElkKS50aGVuPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PihyZXN1bHQgPT4ge1xuICAgICAgY29uc3QgZGF0YVNjaGVtYTogRGF0YVNjaGVtYSA9IHJlc3VsdCBhcyBEYXRhU2NoZW1hO1xuICAgICAgY29uc3Qgd29ya3NoZWV0RGF0YVNvdXJjZUluZm86IFdvcmtzaGVldERhdGFTb3VyY2VJbmZvID0gZGF0YVNjaGVtYS53b3Jrc2hlZXREYXRhU2NoZW1hTWFwW3RoaXMubmFtZV07XG5cbiAgICAgIGxldCBkYXRhU291cmNlczogQXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4gPSBbXTtcblxuICAgICAgLy8gRmlyc3QsIGFkZCB0aGUgcHJpbWFyeSBkYXRhc291cmNlLiAgQnkgY29udmVudGlvbiwgaXQgY29tZXMgZmlyc3QgaW4gdGhlIHJldHVybmVkIGFycmF5LlxuICAgICAgbGV0IHByaW1hcnlJZDogc3RyaW5nID0gd29ya3NoZWV0RGF0YVNvdXJjZUluZm8ucHJpbWFyeURhdGFTb3VyY2U7XG4gICAgICBkYXRhU291cmNlcy5wdXNoKHRoaXMuY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTY2hlbWEuZGF0YVNvdXJjZXNbcHJpbWFyeUlkXSkpO1xuXG4gICAgICAvLyBUaGVuLCBsb29wIHRocm91Z2ggYW55IHNlY29uZGFyeSBkYXRhIHNvdXJjZXMgYW5kIGFkZCB0aGVtLlxuICAgICAgZm9yIChsZXQgc2Vjb25kYXJ5SWQgb2Ygd29ya3NoZWV0RGF0YVNvdXJjZUluZm8ucmVmZXJlbmNlZERhdGFTb3VyY2VMaXN0KSB7XG4gICAgICAgIGlmIChzZWNvbmRhcnlJZCAhPT0gcHJpbWFyeUlkKSB7XG4gICAgICAgICAgZGF0YVNvdXJjZXMucHVzaCh0aGlzLmNyZWF0ZURhdGFTb3VyY2VGcm9tSW5mbyhkYXRhU2NoZW1hLmRhdGFTb3VyY2VzW3NlY29uZGFyeUlkXSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhU291cmNlcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldEZpbHRlcnNBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRTZWxlY3RlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIGdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0U3VtbWFyeURhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgICB0aGlzLnZpc3VhbElkLCBHZXREYXRhVHlwZS5TdW1tYXJ5LCAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcywgISFvcHRpb25zLmlnbm9yZVNlbGVjdGlvbiwgdHJ1ZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBzZXJ2aWNlLmdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgICB0aGlzLnZpc3VhbElkLFxuICAgICAgR2V0RGF0YVR5cGUuVW5kZXJseWluZyxcbiAgICAgICEhb3B0aW9ucy5pZ25vcmVBbGlhc2VzLFxuICAgICAgISFvcHRpb25zLmlnbm9yZVNlbGVjdGlvbixcbiAgICAgICEhb3B0aW9ucy5pbmNsdWRlQWxsQ29sdW1ucyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2VsZWN0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLlNlbGVjdGlvbik7XG4gICAgcmV0dXJuIHNlcnZpY2UuY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWE+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNlbGVjdGlvbnMsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGU+KHNlbGVjdGlvblVwZGF0ZVR5cGUsIENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNlbGVjdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5TZWxlY3Rpb24pO1xuICAgIHJldHVybiBzZXJ2aWNlLnNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHRoaXMudmlzdWFsSWQsIHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZWxlY3Rpb25zLCAnZmllbGROYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlPihzZWxlY3Rpb25VcGRhdGVUeXBlLCBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZWxlY3Rpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uKTtcbiAgICByZXR1cm4gc2VydmljZS5zZWxlY3RNYXJrc0J5SWRBc3luYyh0aGlzLnZpc3VhbElkLCBzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTb3VyY2VJbmZvOiBEYXRhU291cmNlSW5mbyk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VJbXBsID0gbmV3IERhdGFTb3VyY2VJbXBsKGRhdGFTb3VyY2VJbmZvKTtcbiAgICBjb25zdCBkYXRhU291cmNlID0gbmV3IERhdGFTb3VyY2UoZGF0YVNvdXJjZUltcGwpO1xuICAgIGRhdGFTb3VyY2VJbXBsLmluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXRhU291cmNlKTtcbiAgICByZXR1cm4gZGF0YVNvdXJjZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9Xb3Jrc2hlZXRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIGNvbm5lY3Rpb24gc3VtbWFyeS5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXMganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25TdW1tYXJ5IGltcGxlbWVudHMgQ29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfY29ubmVjdGlvbkluZm86IENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnkpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VydmVyVVJJKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnNlcnZlclVSSTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby50eXBlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVGFibGVJbmZvIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIHRhYmxlIHN1bW1hcnkuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZVN1bW1hcnkgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZVN1bW1hcnkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFibGVJbmZvOiBUYWJsZUluZm8pIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBjb25uZWN0aW9uSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmNvbm5lY3Rpb25JZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VzdG9tU1FMKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5jdXN0b21TUUw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlU3VtbWFyeS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgVGFibGVhdVdvcmtzaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1V29ya3NoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVdvcmtzaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuRmlsdGVyQ2hhbmdlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHdvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0LCBwcml2YXRlIF9maWVsZE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuRmlsdGVyQ2hhbmdlZCwgd29ya3NoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkZpbHRlcj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQuZ2V0RmlsdGVyc0FzeW5jKCkudGhlbjxDb250cmFjdC5GaWx0ZXI+KGZpbHRlcnMgPT4ge1xuICAgICAgLy8gVE9ETzogRmlsdGVyaW5nIG9mIHRoZSBmaWx0ZXJzIHNob3VsZCBldmVudHVhbGx5IGJlIGRvbmUgcGxhdGZvcm0gc2lkZS5cbiAgICAgIGNvbnN0IGV2ZW50ZWRGaWx0ZXIgPSBmaWx0ZXJzLmZpbmQoKGZpbHRlcikgPT4gKGZpbHRlci5maWVsZE5hbWUgPT09IHRoaXMuX2ZpZWxkTmFtZSkpO1xuXG4gICAgICBpZiAoIWV2ZW50ZWRGaWx0ZXIpIHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkbid0IGhpdCB0aGlzIHVubGVzcyB0aGUgZmlsdGVyIHdhcyByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldFxuICAgICAgICAvLyBhZnRlciB0aGUgZXZlbnQgd2FzIHJhaXNlZC5cbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLk1pc3NpbmdGaWx0ZXIsIGBjYW5ub3QgZmluZCBmaWx0ZXI6ICR7dGhpcy5fZmllbGROYW1lfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnRlZEZpbHRlcjtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVXb3Jrc2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBNYXJrc1NlbGVjdGVkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5NYXJrc1NlbGVjdGVkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3Iod29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQpIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLk1hcmtTZWxlY3Rpb25DaGFuZ2VkLCB3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy53b3Jrc2hlZXQuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHtcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgQ3Jvc3NGcmFtZU1lc3NlbmdlcixcbiAgTUVTU0FHSU5HX1ZFUlNJT04gYXMgQXBpTWVzc2FnaW5nVmVyc2lvbixcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgfSBmcm9tICcuL0Nyb3NzRnJhbWVEaXNwYXRjaGVyJztcblxuLy8gQ2hlY2tzIHRvIHNlZSBpZiB3ZSBhcmUgcnVubmluZyBpbiBhbiBpZnJhbWUgY3VycmVudGx5OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzI2MDc2Lzg4MjExNTNcbmZ1bmN0aW9uIGluSWZyYW1lKHRoaXNXaW5kb3c6IFdpbmRvdyk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIHJldHVybiB0aGlzV2luZG93LnNlbGYgIT09IHRoaXNXaW5kb3cucGFyZW50O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBib290c3RyYXAgdGhlIGV4dGVuc2lvbiB3aXRoIGEgY3Jvc3MtZnJhbWUgcGFyZW50IHdoZXJlIFRhYmxlYXUgaXMgcnVubmluZ1xuICpcbiAqIEBwYXJhbSB0aGlzV2luZG93IFRoZSB3aW5kb3cgd2hpY2ggd2UgYXJlIHJ1bm5pbmcgaW4gKGluamVjdGVkIGZvciB1bml0IHRlc3RpbmcgcHVycG9zZXMpXG4gKiBAcGFyYW0gaW50ZXJuYWxDb250cmFjdFZlcnNpb24gVGhlIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCB3ZSBhcmUgdXNpbmdcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB3aGljaCBpcyBkb2luZyB0aGUgYWN0dWFsIGJvb3RzdHJhcHBpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcChcbiAgdGhpc1dpbmRvdzogV2luZG93LCBpbnRlcm5hbENvbnRyYWN0VmVyc2lvbjogQ29udHJhY3QuVmVyc2lvbk51bWJlcilcbiAgOiBQcm9taXNlPENvbnRyYWN0LkludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2U8Q29udHJhY3QuSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgbGV0IHBhcmVudDogV2luZG93O1xuXG4gICAgLy8gTm9ybWFsbHksIHdlIGFyZSBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUuICBUaGUgZXhjZXB0aW9uIHRvIHRoaXMgaXNcbiAgICAvLyB3aGVuIHdlIGFyZSBydW5uaW5nIGFzIGFuIGV4dGVuc2lvbiBpbnNpZGUgYSBkaWFsb2cgYXMgcGFydCBvZiB0aGUgVUlOYW1lc3BhY2VcbiAgICAvLyBmdW5jdGlvbmFsaXR5LiAgSW4gdGhhdCBjYXNlLCB3ZSB3YW50IHRoZSBvcGVuZXIgb2YgdGhpcyB3aW5kb3cgcmF0aGVyIHRoYW4gdGhlIHBhcmVudC5cbiAgICBpZiAoIWluSWZyYW1lKHRoaXNXaW5kb3cpKSB7XG4gICAgICBwYXJlbnQgPSB0aGlzV2luZG93Lm9wZW5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gdGhpc1dpbmRvdy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJlamVjdCgnVGhpcyBleHRlbnNpb24gaXMgbm90IHJ1bm5pbmcgaW5zaWRlIGFuIGlmcmFtZSwgZGVza3RvcCwgb3IgcG9wdXAgd2luZG93LiBJbml0aWFsaXphdGlvbiBmYWlsZWQuJyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBtZXNzZW5nZXIgd2hpY2ggd2lsbCBkbyBoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhpcyB3aW5kb3cgYW5kIG91ciBwYXJlbnRcbiAgICAvLyBTaW5jZSB3ZSBkb24ndCBrbm93IHdoZXJlIHdlIGFyZSBydW5uaW5nIHlldCwgd2UgaGF2ZSB0byBtYWtlIHRoaXMgaW5pdGlhbCBvcmlnaW4gJyonLiBPbmNlXG4gICAgLy8gd2UgaGF2ZSBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQgb3VyIGV4dGVuc2lvbiwgd2Ugd2lsbCBsaW1pdCB3aGVyZSB3ZSBzZW5kIG1lc3NhZ2VzXG4gICAgY29uc3QgbWVzc2VuZ2VyID0gbmV3IENyb3NzRnJhbWVNZXNzZW5nZXIodGhpc1dpbmRvdywgcGFyZW50LCAnKicpO1xuXG4gICAgLy8gUHJlcGFyZSB0byBzZW5kIGFuIGluaXRpYWxpemF0aW9uIG1lc3NhZ2UgdG8gdGhlIHBhcmVudCBmcmFtZVxuICAgIGNvbnN0IGluaXRpYWxpemF0aW9uTWVzc2FnZSA9IG1lc3Nlbmdlci5wcmVwYXJlSW5pdGlhbGl6YXRpb25NZXNzYWdlKGludGVybmFsQ29udHJhY3RWZXJzaW9uLCBBcGlNZXNzYWdpbmdWZXJzaW9uKTtcblxuICAgIC8vIFdoZW4gd2UgcmVjZWl2ZSBhIHJlc3BvbnNlIGJhY2sgZnJvbSB0aGUgcGFyZW50LCB3ZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIGd1aWRzIG1hdGNoIGFuZCB0aGVuIHdlIGtub3dcbiAgICAvLyB0aGF0IHRoZSBwYXJlbnQgaXMgYXdhcmUgb2YgdXMgYW5kIHdlIGNhbiBzdGFydCBjb21tdW5pY2F0aW5nXG4gICAgbWVzc2VuZ2VyLnNldENvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKGZ1bmN0aW9uIChtc2c6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UpOiB2b2lkIHtcblxuICAgICAgLy8gVmVyaWZ5IHdlIGFyZSBnZXR0aW5nIGEgcmVzcG9uc2UgZnJvbSBvdXIgaW5pdGlhbGl6ZSBtZXNzYWdlXG4gICAgICBpZiAobXNnLmNvbW1hbmRHdWlkID09PSBpbml0aWFsaXphdGlvbk1lc3NhZ2UubWVzc2FnZUd1aWQpIHtcblxuICAgICAgICAvLyBGb3Igc2VydmVyLCB0aGUgdmVyc2lvbmluZyBvZiB0aGUgZmFjdG9yeSBpcyBnb25uYSBoYXBwZW4gb24gdGhlIG90aGVyIHNpZGUgb2Ygb3VyIGZyYW1lLCBzbyBqdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb25lIHdoaWNoIGRvZXNuJ3QgaGF2ZSBhbnkgdmVyc2lvbiBrbm93bGVkZ2VcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hlckZhY3RvcnkgPSAoKSA9PiBuZXcgQ3Jvc3NGcmFtZURpc3BhdGNoZXIobWVzc2VuZ2VyKTtcbiAgICAgICAgcmVzb2x2ZShkaXNwYXRjaGVyRmFjdG9yeSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBOb3cgdGhhdCBvdXIgaGFuZGxlcnMgYXJlIHJlYWR5LCBzdGFydCBsaXN0ZW5pbmcgYW5kIHNlbmQgb3VyIGluaXRpYWxpemF0aW9uIG1lc3NhZ2VcbiAgICBtZXNzZW5nZXIuc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICBpbml0aWFsaXphdGlvbk1lc3NhZ2Uuc2VuZCgpO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsImltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeGVjdXRlUmVzcG9uc2UsXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlcixcbiAgTW9kZWwsXG4gIE5vdGlmaWNhdGlvbkhhbmRsZXIsXG4gIFZlcmJJZCxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIE1lc3NlbmdlciwgTm90aWZpY2F0aW9uTWVzc2FnZSB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIGludGVyZmFjZSB3aGljaCBmdW5jdGlvbnMgYnkgcGFzc2luZyBtZXNzYWdlc1xuICogYWNyb3NzIGEgZnJhbWUgYm91bmRhcnkuIFRoaXMgaXMgdXN1YWxseSBiZXR3ZWVuIHRoZSBjb2RlIHdoZXJlIG91ciBqYXZzY3JpcHQgbGlicmFyeSBoYXMgYmVlbiBpbmNsdWRlZFxuICogYnkgYSAzcmQgcGFydHkgZGV2IGFuZCBhbm90aGVyIGZyYW1lIHdoZXJlIFRhYmxlYXUgc2VydmVyIGhhcyBjb250ZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgaW1wbGVtZW50cyBJbnRlcm5hbEFwaURpc3BhdGNoZXIge1xuXG4gIC8vIENvbGxlY3Rpb24gb2YgcGVuZGluZyBwcm9taXNlcyB3aGljaCBhcmUgd2FpdGluZyB0byBiZSByZXNvbHZlZC4gV2hlbiB3ZSByZWNlaXZlIGEgcmVzcG9uc2UgYmFjayBmcm9tIHRoZSBvdGhlciBmcmFtZSxcbiAgLy8gdGhlc2UgcHJvbWlzZXMgY2FuIGJlIGVpdGhlciByZXNvbHZlZCBvciByZWplY3RlZFxuICBwcml2YXRlIF9wZW5kaW5nUHJvbWlzZXM6XG4gICAgeyBbbWVzc2FnZUd1aWQ6IHN0cmluZ106IHsgcmVzb2x2ZTogKHJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpID0+IHZvaWQsIHJlamVjdDogKGVycm9yOiBNb2RlbCkgPT4gdm9pZCB9IH0gPSB7fTtcblxuICAvLyBUaGUgY29sbGVjdGlvbiBvZiBub3RpZmljYXRpb24gaGFuZGxlcnMgd2hpY2ggaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uSGFuZGxlcnM6IEFycmF5PE5vdGlmaWNhdGlvbkhhbmRsZXI+ID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgd2hpY2ggd2lsbCB1c2UgdGhlIGdpdmVuIG1lc3NlbmdlciB0byBjb21tdW5pY2F0ZVxuICAgKiBAcGFyYW0gX21lc3NlbmdlciBhbiBpbnN0YW50aWF0ZWQgYW5kIGxpc3RlbmluZyBtZXNzZW5nZXIgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2VuZ2VyOiBNZXNzZW5nZXIpIHtcbiAgICBpZiAoIXRoaXMuX21lc3Nlbmdlcikge1xuICAgICAgdGhyb3cgJ01pc3NpbmcgbWVzc2VuZ2VyIG9iamVjdCc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIG91ciBtZXNzYWdlIGhhbmRsZXJzLiBXZSBvbmx5IGNhcmUgYWJvdXQgaW5jb21pbmcgbm90aWZpY2F0aW9ucyBhbmQgY29tbWFuZCByZXNwb25zZXNcbiAgICB0aGlzLl9tZXNzZW5nZXIuc2V0Q29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIodGhpcy5vbkNvbW1hbmRSZXNwb25zZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9tZXNzZW5nZXIuc2V0Tm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIodGhpcy5vbk5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8vLy8vLyBTdGFydCBJbnRlcm5hbEFwaURpc3BhdGNoZXIgaW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgZXhlY3V0ZSh2ZXJiOiBWZXJiSWQsIHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcbiAgICAvLyBUbyBleGVjdXRlIGEgdmVyYiwgd2UgZmlyc3QgcHJlcGFyZSBhIGNvbW1hbmQgbWVzc2FnZSBhbmQgdGhlbiBkZWZpbmUgYSBwcm9taXNlLlxuICAgIGNvbnN0IHByZXBhcmVkTWVzc2FnZSA9IHRoaXMuX21lc3Nlbmdlci5wcmVwYXJlQ29tbWFuZE1lc3NhZ2UodmVyYiwgcGFyYW1ldGVycyk7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvLyBTYXZlIG9mZiB0aGUgcGVuZGluZyBwcm9taXNlIGJ5IHRoZSBtZXNzYWdlR3VpZCB3ZSBhcmUgYWJvdXQgdG8gc2VuZC4gV2hlbiBhIHJlc3BvbnNlIGlzXG4gICAgICAvLyByZWNlaXZlZCwgd2UnbGwgYmUgYWJsZSB0byByZXNvbHZlIHRoaXMgcHJvbWlzZSB3aXRoIHRoZSByZXN1bHRcbiAgICAgIHRoaXMuX3BlbmRpbmdQcm9taXNlc1twcmVwYXJlZE1lc3NhZ2UubWVzc2FnZUd1aWRdID0geyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9O1xuICAgIH0pO1xuXG4gICAgLy8gQWN0dWFsbHkgc2VuZCB0aGUgbWVzc2FnZSBhbmQgcmV0dXJuIHRoZSBwcm9taXNlXG4gICAgcHJlcGFyZWRNZXNzYWdlLnNlbmQoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzID0gdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XG4gIH1cblxuICAvLy8vLy8gRW5kIEludGVybmFsQXBpRGlzcGF0Y2hlciBpbXBsZW1lbnRhdGlvblxuXG4gIHByaXZhdGUgb25Db21tYW5kUmVzcG9uc2UocmVzcG9uc2U6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UpOiB2b2lkIHtcbiAgICAvLyBXZSBnb3QgYSBjb21tYW5kIHJlc3BvbnNlLCBsb29rIHRocm91Z2ggdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmVcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcGVuZGluZ1Byb21pc2VzKS5pbmRleE9mKHJlc3BvbnNlLmNvbW1hbmRHdWlkKSA8IDApIHtcbiAgICAgIHJldHVybjsgLy8gV2UgZG9uJ3QgaGF2ZSBhbnkgcmVmZXJlbmNlIHRvIHRoaXMgY29tbWFuZCwganVzdCByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwZW5kaW5nUHJvbWlzZSA9IHRoaXMuX3BlbmRpbmdQcm9taXNlc1tyZXNwb25zZS5jb21tYW5kR3VpZF07XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGVycm9yIGRlZmluZWQsIHJlamVjdCB0aGUgcHJvbWlzZVxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgcGVuZGluZ1Byb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGRhdGEgZGVmaW5lZCwgcmVzb2x2ZSB0aGUgcHJvbWlzZVxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICBwZW5kaW5nUHJvbWlzZS5yZXNvbHZlKHsgcmVzdWx0OiByZXNwb25zZS5kYXRhIH0pO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIG91ciBwZW5kaW5nIHByb21pc2VzIG9iamVjdFxuICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUHJvbWlzZXNbcmVzcG9uc2UuY29tbWFuZEd1aWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25NZXNzYWdlOiBOb3RpZmljYXRpb25NZXNzYWdlKTogdm9pZCB7XG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIG5vdGlmaWNhdGlvbiBoYW5kbGVyIHdlIGhhdmUgcmVnaXN0ZXJlZCBhbmQgbGV0IHRoZW0ga25vdyBhIG5vdGlmaWNhdGlvbiBjYW1lIGluXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBoYW5kbGVyKHsgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbk1lc3NhZ2Uubm90aWZpY2F0aW9uSWQsIGRhdGE6IG5vdGlmaWNhdGlvbk1lc3NhZ2UuZGF0YSB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoaXMuIFdyYXAgaW4gdHJ5L2NhdGNoIHNvIGlmIG9uZSBoYW5kbGVyIGVycm9ycywgdGhlIG90aGVyIHN0aWxsIGdldCB0aGUgbWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lRGlzcGF0Y2hlci50cyIsImltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvRmlsdGVyU2VydmljZUltcGwnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvUGFyYW1ldGVyc1NlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL1NlbGVjdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSB9IGZyb20gJy4vU2VydmljZVJlZ2lzdHJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IERhdGFTb3VyY2VTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEdldERhdGFTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEZpbHRlclNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgTm90aWZpY2F0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBQYXJhbWV0ZXJzU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZWxlY3Rpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5LFxuICBEYXRhU2NoZW1hLFxuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgUGFyYW1ldGVySWQsXG4gIFRhYmxlSW5mbyxcbiAgVGFibGVJbmZvcyxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vRmllbGQnO1xuaW1wb3J0IHsgRmllbGRJbXBsIH0gZnJvbSAnLi4vLi4vSW1wbC9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vRGF0YVNvdXJjZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4uLy4uL0ltcGwvRGF0YVNvdXJjZUltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgRGF0YVNvdXJjZVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQXN5bmMoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQsXG4gICAgICBbUGFyYW1ldGVySWQuRGVsdGFUaW1lTXNdOiAwLFxuICAgICAgW1BhcmFtZXRlcklkLlNob3VsZFJlZnJlc2hEU106IHRydWVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuUmVmcmVzaERhdGFTb3VyY2UsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxUYWJsZUluZm8+PiB7XG4gICAgY29uc3Qgam9pblBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkIH07XG5cbiAgICAvLyBHZXQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YWJsZXMgdXNlZCBieSB0aGlzIGNvbm5lY3Rpb25cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRBY3RpdmVUYWJsZXMsIGpvaW5QYXJhbWV0ZXJzKS50aGVuPEFycmF5PFRhYmxlSW5mbz4+KGpvaW5SZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCB0YWJsZUluZm9zID0gam9pblJlc3BvbnNlLnJlc3VsdCBhcyBUYWJsZUluZm9zO1xuXG4gICAgICAvLyBnZXRBY3RpdmVUYWJsZXMgaXMgdW5zdXBwb3J0ZWQgZm9yIGN1YmVzIGFuZCBHQS4gV2UgZG8gbm90IGhhdmUgYSBjb25uZWN0aW9uIHR5cGUgcHJvcGVydHlcbiAgICAgIC8vIGF2YWlsYWJsZSBmcm9tIHRoZSBwbGF0Zm9ybSAoaW50ZW50aW9uYWxseSwgdG8gcmVkdWNlIGNvZGUgY2h1cm4gYXMgbmV3IGNvbm5lY3Rpb25zIGFyZSBhZGRlZCkuXG4gICAgICAvLyBJbnN0ZWFkLGp1c3QgY2hlY2sgaWYgYW55IHRhYmxlcyBhcmUgcmV0dXJuZWQuIFRoaXMgYXJyYXkgd2lsbCBiZSBlbXB0eSBmb3IgYW55IG5vbi10YWJsZSBiYXNlZCBkYXRhc291cmNlLlxuICAgICAgaWYgKHRhYmxlSW5mb3MudGFibGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuVW5zdXBwb3J0ZWRNZXRob2RGb3JEYXRhU291cmNlVHlwZSxcbiAgICAgICAgICBgZ2V0QWN0aXZlVGFibGVzIGlzIG5vdCBzdXBwb3J0ZWQgZm9yOiAke2RhdGFTb3VyY2VJZH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhYmxlSW5mb3MudGFibGVzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxEYXRhU2NoZW1hPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0RGF0YVNvdXJjZXMsIHBhcmFtZXRlcnMpLnRoZW48RGF0YVNjaGVtYT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGF0YVNjaGVtYSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBEYXRhU2NoZW1hO1xuICAgICAgcmV0dXJuIGRhdGFTY2hlbWE7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTxDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5W10+IHtcbiAgICBjb25zdCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkIH07XG5cbiAgICAvLyBHZXQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YWJsZXMgdXNlZCBieSB0aGlzIGNvbm5lY3Rpb25cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMsIHBhcmFtcykudGhlbjxDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5W10+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uU3VtbWFyaWVzID0gcmVzcG9uc2UucmVzdWx0IGFzIENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXTtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvblN1bW1hcmllcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZEFzeW5jKGZpZWxkSWQ6IHN0cmluZyk6IFByb21pc2U8Q29udHJhY3QuRmllbGQ+IHtcbiAgICBsZXQgZmllbGRJZENvbXBvbmVudHMgPSB0aGlzLnBhcnNlRmllbGRJZChmaWVsZElkKTtcbiAgICBsZXQgZGF0YVNvdXJjZUlkID0gZmllbGRJZENvbXBvbmVudHNbMV07XG4gICAgbGV0IGZpZWxkTmFtZSA9IGZpZWxkSWRDb21wb25lbnRzWzJdO1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0RGF0YVNvdXJjZTtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF0gPSBkYXRhU291cmNlSWQ7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuRmllbGQ+KHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBkYXRhU291cmNlID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuRGF0YVNvdXJjZTtcbiAgICAgIGxldCBmaWVsZCA9IGRhdGFTb3VyY2UuZmllbGRzLmZpbmQoKGYpID0+IHtcbiAgICAgICAgcmV0dXJuIGYubmFtZSA9PT0gZmllbGROYW1lO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RmllbGQoZmllbGQhLCB0aGlzLmNvbnZlcnREYXRhU291cmNlKGRhdGFTb3VyY2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEZpZWxkKGZpZWxkOiBJbnRlcm5hbENvbnRyYWN0LkZpZWxkLCBkYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKTogQ29udHJhY3QuRmllbGQge1xuICAgIHJldHVybiBuZXcgRmllbGQobmV3IEZpZWxkSW1wbChmaWVsZCwgZGF0YVNvdXJjZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RGF0YVNvdXJjZShkYXRhU291cmNlOiBJbnRlcm5hbENvbnRyYWN0LkRhdGFTb3VyY2UpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gbmV3IERhdGFTb3VyY2UobmV3IERhdGFTb3VyY2VJbXBsKGRhdGFTb3VyY2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VGaWVsZElkKGZpZWxkSWQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIC8vIHdlIGNhbiBleHBlY3QgZXhlYyB0byByZXR1cm4gYSBtYXRjaCB0byB0aGUgZW50aXJlIGZpZWxkIGlkIGF0IGVsZW1lbnQgMCwgdGhlIGRhdGFzb3VyY2UgaWQgYXQgZWxlbWVudCAxXG4gICAgLy8gYW5kIHRoZSBmaWVsZCBuYW1lIGF0IGVsZW1lbnQgMi4gRmllbGQgaWQgZm9ybWF0IGlzIFtkYXRhU291Y3JlSWRdLltmaWVsZE5hbWVdXG4gICAgcmV0dXJuIC9eXFxbKC4rKVxcXVxcLlxcWyguKylcXF0kLy5leGVjKGZpZWxkSWQpITtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEZpbHRlclR5cGUsXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEV4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyBhcyBFeHRlcm5hbEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyBhcyBJbnRlcm5hbEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcblxuaW1wb3J0IHtcbiAgQ2F0ZWdvcmljYWxEb21haW4sXG4gIENhdGVnb3JpY2FsRmlsdGVyLFxuICBSYW5nZURvbWFpbixcbiAgUmFuZ2VGaWx0ZXIsXG4gIFJlbGF0aXZlRGF0ZUZpbHRlclxufSBmcm9tICcuLi8uLi9Nb2RlbHMvRmlsdGVyTW9kZWxzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vRmlsdGVyU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBEYXRhVmFsdWUgfSBmcm9tICcuLi8uLi9Nb2RlbHMvR2V0RGF0YU1vZGVscyc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4uLy4uL1V0aWxzL1BhcmFtJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlclNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgRmlsdGVyU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLkZpbHRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlckFzeW5jKFxuICAgIHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICB2YWx1ZXM6IEFycmF5PHN0cmluZz4sXG4gICAgdXBkYXRlVHlwZTogQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSxcbiAgICBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkFwcGx5Q2F0ZWdvcmljYWxGaWx0ZXI7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclZhbHVlc10gPSB2YWx1ZXM7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJVcGRhdGVUeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJVcGRhdGVUeXBlLmNvbnZlcnQodXBkYXRlVHlwZSk7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Jc0V4Y2x1ZGVNb2RlXSA9XG4gICAgICAoZmlsdGVyT3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IGZpbHRlck9wdGlvbnMuaXNFeGNsdWRlTW9kZSA9PT0gdW5kZWZpbmVkKSA/IGZhbHNlIDogZmlsdGVyT3B0aW9ucy5pc0V4Y2x1ZGVNb2RlO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLCBmaWVsZE5hbWU6IHN0cmluZywgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuUmFuZ2VGaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkFwcGx5UmFuZ2VGaWx0ZXI7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcblxuICAgIGlmIChmaWx0ZXJPcHRpb25zLm1pbikge1xuICAgICAgbGV0IG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWluIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBtaW4gPSBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZmlsdGVyT3B0aW9ucy5taW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluID0gZmlsdGVyT3B0aW9ucy5taW47XG4gICAgICB9XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTWluXSA9IG1pbjtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5tYXgpIHtcbiAgICAgIGxldCBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGlmIChmaWx0ZXJPcHRpb25zLm1heCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgbWF4ID0gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKGZpbHRlck9wdGlvbnMubWF4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heCA9IGZpbHRlck9wdGlvbnMubWF4O1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU1heF0gPSBtYXg7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbikge1xuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU51bGxPcHRpb25dID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLm51bGxPcHRpb25zLmNvbnZlcnQoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKTtcbiAgICB9XG5cbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQsIGZpZWxkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkNsZWFyRmlsdGVyO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZE5hbWVdID0gZmllbGROYW1lO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3Bvc25lID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRmlsdGVyPj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0RmlsdGVycztcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxBcnJheTxDb250cmFjdC5GaWx0ZXI+PihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZmlsdGVycyA9IHJlc3BvbnNlLnJlc3VsdCBhcyBBcnJheTxJbnRlcm5hbENvbnRyYWN0LkZpbHRlcj47XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RG9tYWluRmlsdGVycyhmaWx0ZXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXRlZ29yaWNhbERvbWFpbkFzeW5jKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkdldENhdGVnb3JpY2FsRG9tYWluO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0ge1xuICAgICAgd29ya3NoZWV0OiB3b3Jrc2hlZXROYW1lXG4gICAgfTtcblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGRJZF0gPSBmaWVsZElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRG9tYWluVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyRG9tYWluVHlwZS5jb252ZXJ0KGRvbWFpblR5cGUpO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRvbWFpbiA9IHJlc3BvbnNlLnJlc3VsdCBhcyBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluO1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydENhdGVnb3JpY2FsRG9tYWluKGRvbWFpbiwgZG9tYWluVHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmFuZ2VEb21haW5Bc3luYyh3b3Jrc2hlZXROYW1lOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuUmFuZ2VEb21haW4+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkdldFJhbmdlRG9tYWluO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0ge1xuICAgICAgd29ya3NoZWV0OiB3b3Jrc2hlZXROYW1lXG4gICAgfTtcblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGRJZF0gPSBmaWVsZElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRG9tYWluVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyRG9tYWluVHlwZS5jb252ZXJ0KGRvbWFpblR5cGUpO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5SYW5nZURvbWFpbj4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRvbWFpbiA9IHJlc3BvbnNlLnJlc3VsdCBhcyBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRG9tYWluO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UmFuZ2VEb21haW4oZG9tYWluLCBkb21haW5UeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEhlbHBlciBNZXRob2RzXG4gIHByaXZhdGUgY29udmVydERvbWFpbkZpbHRlcnMoZG9tYWluRmlsdGVyczogQXJyYXk8SW50ZXJuYWxDb250cmFjdC5GaWx0ZXI+KTogQXJyYXk8Q29udHJhY3QuRmlsdGVyPiB7XG4gICAgbGV0IGZpbHRlcnM6IEFycmF5PENvbnRyYWN0LkZpbHRlcj4gPSBbXTtcbiAgICBkb21haW5GaWx0ZXJzLmZvckVhY2goZG9tYWluRmlsdGVyID0+IHtcbiAgICAgIHN3aXRjaCAoZG9tYWluRmlsdGVyLmZpbHRlclR5cGUpIHtcbiAgICAgICAgY2FzZSBGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRDYXRlZ29yaWNhbEZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENhdGVnb3JpY2FsIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRmlsdGVyVHlwZS5SYW5nZToge1xuICAgICAgICAgIGxldCBmaWx0ZXIgPSBkb21haW5GaWx0ZXIgYXMgSW50ZXJuYWxDb250cmFjdC5SYW5nZUZpbHRlcjtcbiAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2godGhpcy5jb252ZXJ0UmFuZ2VGaWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBSYW5nZSBGaWx0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEZpbHRlclR5cGUuUmVsYXRpdmVEYXRlOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlcjtcbiAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2godGhpcy5jb252ZXJ0UmVsYXRpdmVEYXRlRmlsdGVyKGZpbHRlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUmVsYXRpdmUgRGF0ZSBGaWx0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydENhdGVnb3JpY2FsRmlsdGVyKGRvbWFpbkZpbHRlcjogSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbEZpbHRlcik6IENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyIHtcbiAgICBsZXQgYXBwbGllZFZhbHVlczogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiA9IGRvbWFpbkZpbHRlci52YWx1ZXMubWFwKGR2ID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGR2LnZhbHVlLCBkdi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IENhdGVnb3JpY2FsRmlsdGVyKFxuICAgICAgZG9tYWluRmlsdGVyLnZpc3VhbElkLndvcmtzaGVldCxcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZENhcHRpb24sXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGROYW1lLFxuICAgICAgQ29udHJhY3QuRmlsdGVyVHlwZS5DYXRlZ29yaWNhbCxcbiAgICAgIGFwcGxpZWRWYWx1ZXMsXG4gICAgICBkb21haW5GaWx0ZXIuaXNFeGNsdWRlKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJhbmdlRmlsdGVyKGRvbWFpbkZpbHRlcjogSW50ZXJuYWxDb250cmFjdC5SYW5nZUZpbHRlcik6IENvbnRyYWN0LlJhbmdlRmlsdGVyIHtcbiAgICBsZXQgbWluVmFsdWU6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluRmlsdGVyLm1pbi52YWx1ZSwgZG9tYWluRmlsdGVyLm1pbi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgbGV0IG1heFZhbHVlOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbkZpbHRlci5tYXgudmFsdWUsIGRvbWFpbkZpbHRlci5tYXguZm9ybWF0dGVkVmFsdWUpO1xuICAgIHJldHVybiBuZXcgUmFuZ2VGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLlJhbmdlLFxuICAgICAgbWluVmFsdWUsXG4gICAgICBtYXhWYWx1ZSxcbiAgICAgIGRvbWFpbkZpbHRlci5pbmNsdWRlTnVsbFZhbHVlc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSZWxhdGl2ZURhdGVGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlcik6IENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlciB7XG4gICAgbGV0IGFuY2hvckRhdGVWYWx1ZTogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW5GaWx0ZXIuYW5jaG9yRGF0ZS52YWx1ZSwgZG9tYWluRmlsdGVyLmFuY2hvckRhdGUuZm9ybWF0dGVkVmFsdWUpO1xuICAgIHJldHVybiBuZXcgUmVsYXRpdmVEYXRlRmlsdGVyKFxuICAgICAgZG9tYWluRmlsdGVyLnZpc3VhbElkLndvcmtzaGVldCxcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZENhcHRpb24sXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGROYW1lLFxuICAgICAgQ29udHJhY3QuRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGUsXG4gICAgICBhbmNob3JEYXRlVmFsdWUsXG4gICAgICBJbnRlcm5hbEVudW1Db252ZXJ0ZXIuZGF0ZVN0ZXBQZXJpb2QuY29udmVydChkb21haW5GaWx0ZXIucGVyaW9kVHlwZSksXG4gICAgICBJbnRlcm5hbEVudW1Db252ZXJ0ZXIuZGF0ZVJhbmdlVHlwZS5jb252ZXJ0KGRvbWFpbkZpbHRlci5yYW5nZVR5cGUpLFxuICAgICAgZG9tYWluRmlsdGVyLnJhbmdlTlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRDYXRlZ29yaWNhbERvbWFpbihcbiAgICBkb21haW46IEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4sXG4gICAgZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluIHtcbiAgICBsZXQgdmFsdWVzOiBBcnJheTxEYXRhVmFsdWU+ID0gZG9tYWluLnZhbHVlcy5tYXAoKGRvbWFpbkR2KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWYWx1ZShkb21haW5Edi52YWx1ZSwgZG9tYWluRHYuZm9ybWF0dGVkVmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgQ2F0ZWdvcmljYWxEb21haW4odmFsdWVzLCBkb21haW5UeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJhbmdlRG9tYWluKGRvbWFpbjogSW50ZXJuYWxDb250cmFjdC5SYW5nZURvbWFpbiwgZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IENvbnRyYWN0LlJhbmdlRG9tYWluIHtcbiAgICBsZXQgbWluOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbi5taW4udmFsdWUsIGRvbWFpbi5taW4uZm9ybWF0dGVkVmFsdWUpO1xuICAgIGxldCBtYXg6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluLm1heC52YWx1ZSwgZG9tYWluLm1heC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSYW5nZURvbWFpbihcbiAgICAgIG1pbixcbiAgICAgIG1heCxcbiAgICAgIGRvbWFpblR5cGVcbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0ZpbHRlclNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHtcbiAgRmlsdGVyRG9tYWluVHlwZSBhcyBFeHRlcm5hbERvbWFpblR5cGUsXG4gIEZpbHRlck51bGxPcHRpb24gYXMgRXh0ZXJuYWxOdWxsT3B0aW9uLFxuICBGaWx0ZXJVcGRhdGVUeXBlIGFzIEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZVxufSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIEZpbHRlckRvbWFpblR5cGUgYXMgSW50ZXJuYWxEb21haW5UeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uIGFzIEludGVybmFsTnVsbE9wdGlvbixcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGVcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRW51bUNvbnZlcnRlciB9IGZyb20gJy4uL1V0aWxzL0VudW1Db252ZXJ0ZXInO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp0eXBlZGVmIC0gRGlzYWJsZSB0aGlzIHRvIG1ha2UgZGVjbGFyaW5nIHRoZXNlIGNsYXNzZXMgYSBiaXQgZWFzaWVyICovXG4vKipcbiAqIE1hcHMgZW51bXMgdXNlZCBieSB0aGUgZXh0ZXJuYWwtYXBpLWNvbnRyYWN0IHRvIHRoZSBlbnVtcyB1c2VkXG4gKiBpbiB0aGUgaW50ZXJuYWwtYXBpLWNvbnRyYWN0LCB3aGljaCBkZXZlbG9wZXJzIGNvZGUgYWdhaW5zdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyB7XG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyRG9tYWluVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEV4dGVybmFsRG9tYWluVHlwZSwgSW50ZXJuYWxEb21haW5UeXBlPih7XG4gICAgW0V4dGVybmFsRG9tYWluVHlwZS5SZWxldmFudF06IEludGVybmFsRG9tYWluVHlwZS5SZWxldmFudCxcbiAgICBbRXh0ZXJuYWxEb21haW5UeXBlLkRhdGFiYXNlXTogSW50ZXJuYWxEb21haW5UeXBlLkRhdGFiYXNlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgbnVsbE9wdGlvbnMgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbE51bGxPcHRpb24sIEludGVybmFsTnVsbE9wdGlvbj4oe1xuICAgIFtFeHRlcm5hbE51bGxPcHRpb24uQWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLkFsbFZhbHVlcyxcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXNdOiBJbnRlcm5hbE51bGxPcHRpb24uTm9uTnVsbFZhbHVlcyxcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXNdOiBJbnRlcm5hbE51bGxPcHRpb24uTnVsbFZhbHVlc1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclVwZGF0ZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsIEludGVybmFsRmlsdGVyVXBkYXRlVHlwZT4oe1xuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZCxcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbF06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGwsXG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmVdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlLFxuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZV06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXG4gIH0pO1xufVxuLyogdHNsaW50OmVuYWJsZTp0eXBlZGVmICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9GaWx0ZXJTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0RhdGFTb3VyY2VTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LkZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgX3dvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgX2ZpZWxkTmFtZTogc3RyaW5nLFxuICAgIHByb3RlY3RlZCBfZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcm90ZWN0ZWQgX2ZpZWxkSWQ6IHN0cmluZykge1xuICB9XG5cbiAgcHVibGljIGdldCB3b3Jrc2hlZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmlsdGVyVHlwZSgpOiBDb250cmFjdC5GaWx0ZXJUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZEFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuRmllbGQ+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0RmllbGRBc3luYyh0aGlzLl9maWVsZElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmljYWxGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIgaW1wbGVtZW50cyBDb250cmFjdC5DYXRlZ29yaWNhbEZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJpdmF0ZSBfYXBwbGllZFZhbHVlczogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPixcbiAgICBwcml2YXRlIF9pc0V4Y2x1ZGVNb2RlOiBib29sZWFuKSB7XG4gICAgc3VwZXIod29ya3NoZWV0TmFtZSwgZmllbGROYW1lLCBmaWx0ZXJUeXBlLCBmaWVsZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXBwbGllZFZhbHVlcygpOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+IHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGllZFZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNFeGNsdWRlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdWRlTW9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREb21haW5Bc3luYyhkb21haW5UeXBlPzogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4+IHtcbiAgICBpZiAoIWRvbWFpblR5cGUpIHtcbiAgICAgIGRvbWFpblR5cGUgPSBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlLlJlbGV2YW50O1xuICAgIH1cblxuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyRG9tYWluVHlwZT4oZG9tYWluVHlwZSwgQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0Q2F0ZWdvcmljYWxEb21haW5Bc3luYyh0aGlzLl93b3Jrc2hlZXROYW1lLCB0aGlzLl9maWVsZElkLCBkb21haW5UeXBlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmFuZ2VGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIgaW1wbGVtZW50cyBDb250cmFjdC5SYW5nZUZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJpdmF0ZSBfbWluOiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfbWF4OiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfaW5jbHVkZU51bGxWYWx1ZXM6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih3b3Jrc2hlZXROYW1lLCBmaWVsZE5hbWUsIGZpbHRlclR5cGUsIGZpZWxkSWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBtaW5WYWx1ZSgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1heFZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW5jbHVkZU51bGxWYWx1ZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVOdWxsVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldERvbWFpbkFzeW5jKGRvbWFpblR5cGU/OiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5SYW5nZURvbWFpbj4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICBpZiAoIWRvbWFpblR5cGUpIHtcbiAgICAgIGRvbWFpblR5cGUgPSBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlLlJlbGV2YW50O1xuICAgIH1cblxuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyRG9tYWluVHlwZT4oZG9tYWluVHlwZSwgQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk7XG5cbiAgICByZXR1cm4gc2VydmljZS5nZXRSYW5nZURvbWFpbkFzeW5jKHRoaXMuX3dvcmtzaGVldE5hbWUsIHRoaXMuX2ZpZWxkSWQsIGRvbWFpblR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWxhdGl2ZURhdGVGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIgaW1wbGVtZW50cyBDb250cmFjdC5SZWxhdGl2ZURhdGVGaWx0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBmaWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByaXZhdGUgX2FuY2hvckRhdGU6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9wZXJpb2RUeXBlOiBDb250cmFjdC5QZXJpb2RUeXBlLFxuICAgIHByaXZhdGUgX3JhbmdlVHlwZTogQ29udHJhY3QuRGF0ZVJhbmdlVHlwZSxcbiAgICBwcml2YXRlIF9yYW5nZU46IG51bWJlcikge1xuICAgIHN1cGVyKHdvcmtzaGVldE5hbWUsIGZpZWxkTmFtZSwgZmlsdGVyVHlwZSwgZmllbGRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFuY2hvckRhdGUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fYW5jaG9yRGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGVyaW9kVHlwZSgpOiBDb250cmFjdC5QZXJpb2RUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyaW9kVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFuZ2VUeXBlKCk6IENvbnRyYWN0LkRhdGVSYW5nZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9yYW5nZVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJhbmdlTigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yYW5nZU47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhdGVnb3JpY2FsRG9tYWluIGltcGxlbWVudHMgQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+LFxuICAgIHByaXZhdGUgX2RvbWFpblR5cGU6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWVzKCk6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpblR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJhbmdlRG9tYWluIGltcGxlbWVudHMgQ29udHJhY3QuUmFuZ2VEb21haW4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbWluOiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfbWF4OiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSkge1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5UeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBtaW4oKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXgoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvRmlsdGVyTW9kZWxzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQge1xuICBEYXRhVGFibGUgYXMgRGF0YVRhYmxlSW50ZXJuYWxDb250cmFjdCxcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEhpZ2hsaWdodGVkTWFya3NUYWJsZSxcbiAgUGFyYW1ldGVySWQsXG4gIFNlbGVjdGVkTWFya3NUYWJsZSxcbiAgVW5kZXJseWluZ0RhdGFUYWJsZSxcbiAgVmVyYklkLFxuICBWaXN1YWxJZCxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBDb2x1bW4sIERhdGFUYWJsZSwgRGF0YVZhbHVlLCBNYXJrSW5mbyB9IGZyb20gJy4uLy4uL01vZGVscy9HZXREYXRhTW9kZWxzJztcbmltcG9ydCB7IEdldERhdGFTZXJ2aWNlLCBHZXREYXRhVHlwZSB9IGZyb20gJy4uL0dldERhdGFTZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmV4cG9ydCBjbGFzcyBHZXREYXRhU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBHZXREYXRhU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLkdldERhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICB2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgZ2V0VHlwZTogR2V0RGF0YVR5cGUsXG4gICAgaWdub3JlQWxpYXNlczogYm9vbGVhbixcbiAgICBpZ25vcmVTZWxlY3Rpb246IGJvb2xlYW4sXG4gICAgaW5jbHVkZUFsbENvbHVtbnM6IGJvb2xlYW4sXG4gICAgbWF4Um93czogbnVtYmVyKTogUHJvbWlzZTxEYXRhVGFibGU+IHtcbiAgICAvLyBDcmVhdGUgYWxsIG9mIG91ciBwYXJhbWV0ZXJzXG4gICAgY29uc3QgdmVyYiA9IGdldFR5cGUgPT09IEdldERhdGFUeXBlLlN1bW1hcnkgPyBWZXJiSWQuR2V0RGF0YVN1bW1hcnlEYXRhIDogVmVyYklkLkdldFVuZGVybHlpbmdEYXRhO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdID0gaWdub3JlQWxpYXNlcztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZVNlbGVjdGlvbl0gPSBpZ25vcmVTZWxlY3Rpb247XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5JbmNsdWRlQWxsQ29sdW1uc10gPSBpbmNsdWRlQWxsQ29sdW1ucztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLk1heFJvd3NdID0gbWF4Um93cztcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxEYXRhVGFibGU+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGEuZGF0YSwgcmVzcG9uc2VEYXRhLmlzU3VtbWFyeSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0U2VsZWN0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBTZWxlY3RlZE1hcmtzVGFibGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEuZGF0YS5tYXAodGFibGUgPT4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHRhYmxlLCB0cnVlKSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0SGlnaGxpZ2h0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBIaWdobGlnaHRlZE1hcmtzVGFibGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEuZGF0YS5tYXAodGFibGUgPT4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHRhYmxlLCB0cnVlKSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICBkYXRhU291cmNlSWQ6IHN0cmluZyxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcixcbiAgICBjb2x1bW5zVG9JbmNsdWRlOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxEYXRhVGFibGU+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQsXG4gICAgICBbUGFyYW1ldGVySWQuSWdub3JlQWxpYXNlc106IGlnbm9yZUFsaWFzZXMsXG4gICAgICBbUGFyYW1ldGVySWQuTWF4Um93c106IG1heFJvd3MsXG4gICAgICBbUGFyYW1ldGVySWQuQ29sdW1uc1RvSW5jbHVkZV06IGNvbHVtbnNUb0luY2x1ZGUsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldERhdGFTb3VyY2VEYXRhLCBwYXJhbWV0ZXJzKS50aGVuPERhdGFUYWJsZT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UucmVzdWx0IGFzIFVuZGVybHlpbmdEYXRhVGFibGU7XG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHJlc3BvbnNlRGF0YS5kYXRhLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGE6IERhdGFUYWJsZUludGVybmFsQ29udHJhY3QsIGlzU3VtbWFyeTogYm9vbGVhbik6IERhdGFUYWJsZSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHJlc3BvbnNlRGF0YS5oZWFkZXJzLm1hcChoID0+IG5ldyBDb2x1bW4oaC5maWVsZENhcHRpb24sXG4gICAgICBoLmRhdGFUeXBlLFxuICAgICAgaC5pc1JlZmVyZW5jZWQsXG4gICAgICBoLmluZGV4KSk7XG4gICAgLy8gVE9ETyBUaGlzIHNob3VsZCBiZSBjb250cm9sbGVkIGJ5IGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBhcGkgd2lsbCByZXNwb25kIG1hcmtzIGluZm8gb3Igbm90XG4gICAgbGV0IG1hcmtzO1xuICAgIGlmIChyZXNwb25zZURhdGEubWFya3MpIHtcbiAgICAgIG1hcmtzID0gcmVzcG9uc2VEYXRhLm1hcmtzLm1hcChoID0+IG5ldyBNYXJrSW5mbyhoLnR5cGUsXG4gICAgICAgIGguY29sb3IsXG4gICAgICAgIGgudHVwbGVJZCkpO1xuICAgIH1cbiAgICBjb25zdCB0YWJsZSA9IHJlc3BvbnNlRGF0YS5kYXRhVGFibGUubWFwKHJvdyA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcChjZWxsID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoY2VsbC52YWx1ZSwgY2VsbC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChtYXJrcykge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVGFibGUodGFibGUsIGhlYWRlcnMsIHRhYmxlLmxlbmd0aCwgaXNTdW1tYXJ5LCBtYXJrcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0YVRhYmxlKHRhYmxlLCBoZWFkZXJzLCB0YWJsZS5sZW5ndGgsIGlzU3VtbWFyeSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLCBNb2RlbCwgTm90aWZpY2F0aW9uLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UsIFVucmVnaXN0ZXJGbiB9IGZyb20gJy4uL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuY2xhc3MgUmVnaXN0cmF0aW9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpbHRlckZuOiAobm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKSA9PiBib29sZWFuLFxuICAgIHByaXZhdGUgX2NhbGxiYWNrRm46IChub3RpZmljYXRpb25Nb2RlbDogTW9kZWwpID0+IHZvaWQpIHtcbiAgICAvLyBOb3RoaW5nIEhlcmVcbiAgfVxuXG4gIHB1YmxpYyBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Nb2RlbDogTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyRm4obm90aWZpY2F0aW9uTW9kZWwpKSB7XG4gICAgICB0aGlzLl9jYWxsYmFja0ZuKG5vdGlmaWNhdGlvbk1vZGVsKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2VJbXBsIGltcGxlbWVudHMgTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2hhbmRsZXJzOiB7IFtub3RpZmljYXRpb25JZDogc3RyaW5nXTogQXJyYXk8UmVnaXN0cmF0aW9uPiB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikge1xuICAgIHRoaXMuX2hhbmRsZXJzID0ge307XG4gICAgdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcih0aGlzLm9uTm90aWZpY2F0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihpZDogTm90aWZpY2F0aW9uSWQsIGZpbHRlckZuOiAobW9kZWw6IE1vZGVsKSA9PiBib29sZWFuLCBoYW5kbGVyOiAobW9kZWw6IE1vZGVsKSA9PiB2b2lkKTogVW5yZWdpc3RlckZuIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzW2lkXSB8fCBuZXcgQXJyYXk8UmVnaXN0cmF0aW9uPigpO1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb24oZmlsdGVyRm4sIGhhbmRsZXIpO1xuICAgIGhhbmRsZXJzLnB1c2gocmVnaXN0cmF0aW9uKTtcbiAgICB0aGlzLl9oYW5kbGVyc1tpZF0gPSBoYW5kbGVycztcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVSZWdpc3RyYXRpb24oaWQsIHJlZ2lzdHJhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGhhc0hhbmRsZXJzRm9yTm90aWZpY2F0aW9uVHlwZShpZDogTm90aWZpY2F0aW9uSWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMuaGFzT3duUHJvcGVydHkoaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUobm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbklkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdvIHRocm91Z2ggYW5kIGNoZWNrIGZvciBhbGwgdGhlIGhhbmRsZXJzIG9mIHRoaXMgcGFydGljdWxhciBub3RpZmljYXRpb25cbiAgICB0aGlzLl9oYW5kbGVyc1tub3RpZmljYXRpb24ubm90aWZpY2F0aW9uSWRdLmZvckVhY2goaCA9PiBoLm9uTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbi5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVJlZ2lzdHJhdGlvbihpZDogTm90aWZpY2F0aW9uSWQsIHJlZ2lzdHJhdGlvbjogUmVnaXN0cmF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc0hhbmRsZXJzRm9yTm90aWZpY2F0aW9uVHlwZShpZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVyc1tpZF0gPSB0aGlzLl9oYW5kbGVyc1tpZF0uZmlsdGVyKHJlZyA9PiByZWcgIT09IHJlZ2lzdHJhdGlvbik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIE1vZGVsLFxuICBQYXJhbWV0ZXJJZCxcbiAgUGFyYW1ldGVySW5mbyxcbiAgU2hlZXRQYXRoLFxuICBWZXJiSWQsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgUGFyYW1ldGVySW1wbCB9IGZyb20gJy4uLy4uL0ltcGwvUGFyYW1ldGVySW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXIgfSBmcm9tICcuLi8uLi9QYXJhbWV0ZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyc1NlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgUGFyYW1ldGVyc1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlcnNGb3JTaGVldEFzeW5jKHNoZWV0UGF0aDogU2hlZXRQYXRoLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPEFycmF5PFBhcmFtZXRlcj4+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlNoZWV0UGF0aF06IHNoZWV0UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRQYXJhbWV0ZXJzRm9yU2hlZXQsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gVE9ETyAtIENoZWNrIGZvciBlcnJvclxuXG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgQXJyYXk8UGFyYW1ldGVySW5mbz47XG4gICAgICByZXR1cm4gcmVzdWx0Lm1hcChwYXJhbWV0ZXJJbmZvID0+IHtcbiAgICAgICAgY29uc3QgaW1wbCA9IG5ldyBQYXJhbWV0ZXJJbXBsKHBhcmFtZXRlckluZm8pO1xuICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlcihpbXBsLCBzaGVldCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYXJhbWV0ZXJWYWx1ZUFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxQYXJhbWV0ZXJJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5QYXJhbWV0ZXJGaWVsZE5hbWVdOiBmaWVsZE5hbWUsXG4gICAgICBbUGFyYW1ldGVySWQuUGFyYW1ldGVyVmFsdWVdOiBuZXdWYWx1ZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DaGFuZ2VQYXJhbWV0ZXJWYWx1ZSwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgUGFyYW1ldGVySW5mbztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckJ5TmFtZUFzeW5jKG5hbWU6IHN0cmluZywgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5maW5kUGFyYW1ldGVyQXN5bmMoc2hlZXQsIG5hbWUsIHVuZGVmaW5lZCk7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckJ5R2xvYmFsRmllbGROYW1lQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFBhcmFtZXRlckFzeW5jKHNoZWV0LCB1bmRlZmluZWQsIGZpZWxkTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJhbWV0ZXJBc3luYyhcbiAgICBzaGVldDogQ29udHJhY3QuU2hlZXQsXG4gICAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUGFyYW1ldGVyQ2FwdGlvbl0gPSBuYW1lO1xuICAgIH0gZWxzZSBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUGFyYW1ldGVyRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsICduYW1lIG9yIGZpZWxkTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvIGZpbmQgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuRmluZFBhcmFtZXRlciwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZU9mUGFyYW1ldGVySW5mbyA9IChvYmplY3Q6IE1vZGVsKTogb2JqZWN0IGlzIFBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgICByZXR1cm4gJ2ZpZWxkTmFtZScgaW4gb2JqZWN0O1xuICAgICAgfTtcblxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0byBzZWUgaWYgd2UgZ290IGEgdmFsaWQgcmVzcG9uc2UgYmFjayBhZ2FpblxuICAgICAgaWYgKGluc3RhbmNlT2ZQYXJhbWV0ZXJJbmZvKHJlc3BvbnNlLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIFBhcmFtZXRlckluZm87XG4gICAgICAgIGNvbnN0IGltcGwgPSBuZXcgUGFyYW1ldGVySW1wbChyZXN1bHQpO1xuICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlcihpbXBsLCBzaGVldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQsIFBhcmFtZXRlckluZm8gfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFBhcmFtZXRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQnO1xuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4uL1V0aWxzL1BhcmFtJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckltcGwge1xuICBwcml2YXRlIF9hbGxvd2FibGVWYWx1ZXM6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uO1xuICBwcml2YXRlIF9nbG9iYWxGaWVsZE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbykge1xuICAgIHRoaXMuc2V0UGFyYW1ldGVySW5mbyhwYXJhbWV0ZXJJbmZvKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRWYWx1ZSgpOiBEYXRhVmFsdWUge1xuICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKHRoaXMuX3BhcmFtZXRlckluZm8uY3VycmVudFZhbHVlLnZhbHVlLCB0aGlzLl9wYXJhbWV0ZXJJbmZvLmN1cnJlbnRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmRhdGFUeXBlLmNvbnZlcnQodGhpcy5fcGFyYW1ldGVySW5mby5kYXRhVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbEZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxsb3dhYmxlVmFsdWVzKCk6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVZhbHVlQXN5bmMobmV3VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBEYXRlKTogUHJvbWlzZTxEYXRhVmFsdWU+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKG5ld1ZhbHVlLCAnbmV3VmFsdWUnKTtcblxuICAgIGxldCBjb2VyY2VkVmFsdWUgPSBQYXJhbS5zZXJpYWxpemVQYXJhbXRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHBhcmFtZXRlcnNTZXJ2aWNlLmNoYW5nZVBhcmFtZXRlclZhbHVlQXN5bmModGhpcy5fZ2xvYmFsRmllbGROYW1lLCBjb2VyY2VkVmFsdWUpLnRoZW4ocGFyYW1ldGVySW5mbyA9PiB7XG4gICAgICB0aGlzLnNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbyk7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCBnb2VzIHRocm91Z2ggYW5kIHJlZ2lzdGVycyBlYWNoIGV2ZW50IHR5cGUgdGhpcyBpbXBsIGtub3dzIGFib3V0XG4gICAqIHdpdGggdGhlIE5vdGlmaWNhdGlvblNlcnZpY2UuIEl0IHJldHVybnMgYW4gYXJyYXkgb2YgU2luZ2xlRXZlbnRNYW5hZ2VyIG9iamVjdHMgd2hpY2hcbiAgICogY2FuIHRoZW4gYmUgcGFzc2VkIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIHRvIGhhbmRsZSB1c2VyIHJlZ2lzdHJhdGlvbiAvIHVucmVnaXN0cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gc2hlZXQgVGhlIHNoZWV0IG9iamVjdCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkIHdpdGggdGhlIGV2ZW50IG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybnMge0FycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj59IENvbGxlY3Rpb24gb2YgZXZlbnQgbWFuYWdlcnMgdG8gcGFzcyB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlclxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFsbCBvZiB0aGUgZXZlbnQgbWFuYWdlcnMgd2UnbGwgbmVlZCAob25lIGZvciBlYWNoIGV2ZW50IHR5cGUpXG4gICAgY29uc3QgcGFyYW1ldGVyRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuUGFyYW1ldGVyQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuUGFyYW1ldGVyQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBtb2RlbCBhcyBzdHJpbmc7XG4gICAgICByZXR1cm4gZmllbGROYW1lID09PSB0aGlzLl9nbG9iYWxGaWVsZE5hbWU7XG4gICAgfSwgKGZpZWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBwYXJhbWV0ZXJFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFBhcmFtZXRlckNoYW5nZWRFdmVudChmaWVsZE5hbWUsIHNoZWV0KSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2gocGFyYW1ldGVyRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIHNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbyk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtZXRlckluZm8gPSBwYXJhbWV0ZXJJbmZvO1xuICAgIHRoaXMuX2dsb2JhbEZpZWxkTmFtZSA9IHBhcmFtZXRlckluZm8uZmllbGROYW1lO1xuXG4gICAgY29uc3QgdHlwZSA9IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5hbGxvd2FibGVWYWx1ZXMuY29udmVydChwYXJhbWV0ZXJJbmZvLmFsbG93YWJsZVZhbHVlc1R5cGUpO1xuICAgIGxldCBsaXN0VmFsdWVzOiBBcnJheTxEYXRhVmFsdWU+IHwgdW5kZWZpbmVkO1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWx1ZTogRGF0YVZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIGxldCBzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGxldCBkYXRlU3RlcFBlcmlvZDogQ29udHJhY3QuUGVyaW9kVHlwZSB8IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlID09PSBDb250cmFjdC5QYXJhbWV0ZXJWYWx1ZVR5cGUuTGlzdCkge1xuICAgICAgY29uc3QgdmFsdWVzID0gcGFyYW1ldGVySW5mby5hbGxvd2FibGVWYWx1ZXMgfHwgW107XG4gICAgICBsaXN0VmFsdWVzID0gdmFsdWVzLm1hcCh2YWwgPT4gbmV3IERhdGFWYWx1ZSh2YWwudmFsdWUsIHZhbC5mb3JtYXR0ZWRWYWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29udHJhY3QuUGFyYW1ldGVyVmFsdWVUeXBlLlJhbmdlKSB7XG4gICAgICBtaW5WYWx1ZSA9IHBhcmFtZXRlckluZm8ubWluVmFsdWUgJiYgbmV3IERhdGFWYWx1ZShwYXJhbWV0ZXJJbmZvLm1pblZhbHVlLnZhbHVlLCBwYXJhbWV0ZXJJbmZvLm1pblZhbHVlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIG1heFZhbHVlID0gcGFyYW1ldGVySW5mby5tYXhWYWx1ZSAmJiBuZXcgRGF0YVZhbHVlKHBhcmFtZXRlckluZm8ubWF4VmFsdWUudmFsdWUsIHBhcmFtZXRlckluZm8ubWF4VmFsdWUuZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgc3RlcFNpemUgPSBwYXJhbWV0ZXJJbmZvLnN0ZXBTaXplO1xuICAgICAgZGF0ZVN0ZXBQZXJpb2QgPSBwYXJhbWV0ZXJJbmZvLmRhdGVTdGVwUGVyaW9kICYmXG4gICAgICAgIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXRlU3RlcFBlcmlvZC5jb252ZXJ0KHBhcmFtZXRlckluZm8uZGF0ZVN0ZXBQZXJpb2QpO1xuICAgIH1cblxuICAgIHRoaXMuX2FsbG93YWJsZVZhbHVlcyA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBhbGxvd2FibGVWYWx1ZXM6IGxpc3RWYWx1ZXMsXG4gICAgICBtaW5WYWx1ZTogbWluVmFsdWUsXG4gICAgICBtYXhWYWx1ZTogbWF4VmFsdWUsXG4gICAgICBzdGVwU2l6ZTogc3RlcFNpemUsXG4gICAgICBkYXRlU3RlcFBlcmlvZDogZGF0ZVN0ZXBQZXJpb2RcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1BhcmFtZXRlckltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBUYWJsZWF1U2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVNoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVNoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2xvYmFsRmllbGROYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuUGFyYW1ldGVyQ2hhbmdlZCwgc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlckFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyPiB7XG4gICAgLy8gQ2FsbCBkb3duIHRvIG91ciBzZXJ2aWNlIHRvIGdldCB0aGUgcGFyYW1ldGVyIGJhY2sgdmlhIGl0cyBmaWVsZCBuYW1lXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZmluZFBhcmFtZXRlckJ5R2xvYmFsRmllbGROYW1lQXN5bmModGhpcy5fZ2xvYmFsRmllbGROYW1lLCB0aGlzLnNoZWV0KS50aGVuKHBhcmFtZXRlciA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLk1pc3NpbmdQYXJhbWV0ZXIsIGBDYW5ub3QgZmluZCBwYXJhbWV0ZXI6ICR7dGhpcy5fZ2xvYmFsRmllbGROYW1lfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvUGFyYW1ldGVyQ2hhbmdlZEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJJbXBsIH0gZnJvbSAnLi9JbXBsL1BhcmFtZXRlckltcGwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBQYXJhbWV0ZXIgY29udHJhY3QuIENhbGxzIGRvd24gdG8gdGhlIGltcGxcbiAqIGNsYXNzIGZvciBhbG1vc3QgYWxsIG9mIHRoZSB3b3JrIGl0IGRvZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXIgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LlBhcmFtZXRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtZXRlckltcGw6IFBhcmFtZXRlckltcGwsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIG91ciBldmVudCBoYW5kbGluZyBmb3IgdGhpcyBjbGFzc1xuICAgIHRoaXMucGFyYW1ldGVySW1wbC5pbml0aWFsaXplRXZlbnRzKHNoZWV0KS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50VmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbXBsLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGUoKTogQ29udHJhY3QuRGF0YVR5cGUge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuZGF0YVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbG93YWJsZVZhbHVlcygpOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5hbGxvd2FibGVWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZSk6IFByb21pc2U8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5jaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUGFyYW1ldGVyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBQYXJhbWV0ZXJJZCxcbiAgUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUgYXMgU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIERpbWVuc2lvblNlbGVjdGlvbk1vZGVsLFxuICBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCxcbiAgUmFuZ2VTZWxlY3Rpb25Nb2RlbCxcbiAgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyLFxuICBUdXBsZVNlbGVjdGlvbk1vZGVsLFxuICBWYWx1ZVNlbGVjdGlvbk1vZGVsXG59IGZyb20gJy4uLy4uL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZWxlY3Rpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNlbGVjdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5TZWxlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNsZWFyIGFsbCB0aGUgc2VsZWN0ZWQgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB2aXN1YWxJZFxuICAgKi9cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkNsZWFyU2VsZWN0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47IC8vIEV4cGVjdGluZyBhbiBlbXB0eSBtb2RlbCBhbmQgaGVuY2UgdGhlIHZvaWQgcmVzcG9uc2UuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAgICpcbiAgICogQHBhcmFtIHZpc3VhbElkXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYVxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHNlbGVjdGlvbkNyaXRlcmlhcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnU2VsZWN0aW9uIGNyaXRlcmlhIG1pc3NpbmcgZm9yIHNlbGVjdGluZyBtYXJrcyBieSB2YWx1ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvblR5cGU6IHN0cmluZyA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICAgIGxldCBzZWxlY3Rpb25Dcml0ZXJpYVR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25Dcml0ZXJpYShzZWxlY3Rpb25Dcml0ZXJpYXNbMF0pO1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gdGhpcy5wYXJzZVNlbGVjdGlvbk1hcmtzKHNlbGVjdGlvbkNyaXRlcmlhcywgc2VsZWN0aW9uQ3JpdGVyaWFUeXBlKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uVXBkYXRlVHlwZV06IHNlbGVjdGlvblR5cGVcbiAgICB9O1xuXG4gICAgc3dpdGNoIChzZWxlY3Rpb25Dcml0ZXJpYVR5cGUpIHtcbiAgICAgIGNhc2UgU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5IaWVyVmFsU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmhpZXJNb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5RdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnF1YW50TW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZToge1xuICAgICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRpbVZhbFNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5kaW1Nb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuU2VsZWN0QnlWYWx1ZSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBFeHBlY3RpbmcgYW4gZW1wdHkgbW9kZWwgYW5kIGhlbmNlIHRoZSB2b2lkIHJlc3BvbnNlLlxuICAgICAgcmV0dXJuO1xuICAgICAgLy8gVE9ETyBJbnZlc3RpZ2F0ZSB0aGUgZXJyb3IgcmVzcG9uc2Ugd2l0aCBtdWx0aXBsZSBvdXRwdXQgcGFyYW1zIGFuZCB0aHJvdyBlcnJvciBhY2NvcmRpbmdseS5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAqXG4gKiBAcGFyYW0gdmlzdWFsSWRcbiAqIEBwYXJhbSBNYXJrSW5mb1xuICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAqL1xuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIG1hcmtzOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChtYXJrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnTWFya3MgaW5mbyBtaXNzaW5nIGZvciBzZWxlY3RpbmcgbWFya3MgYnkgSWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlOiBzdHJpbmcgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uVXBkYXRlVHlwZShzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IHRoaXMucGFyc2VTZWxlY3Rpb25JZHMobWFya3MpO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25VcGRhdGVUeXBlXTogc2VsZWN0aW9uVHlwZSxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25dOiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5zZWxlY3Rpb25cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNlbGVjdEJ5VmFsdWUsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRXhwZWN0aW5nIGFuIGVtcHR5IG1vZGVsIGFuZCBoZW5jZSB0aGUgdm9pZCByZXNwb25zZS5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgdGhlIGVycm9yIHJlc3BvbnNlIHdpdGggbXVsdGlwbGUgb3V0cHV0IHBhcmFtcyBhbmQgdGhyb3cgZXJyb3IgYWNjb3JkaW5nbHkuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgTWFya3NJbmZvXG4gICAqIEBwYXJhbSBtYXJrc1xuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZVNlbGVjdGlvbklkcyhtYXJrczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+KTogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyIHtcbiAgICBsZXQgaWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgbGV0IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIgPSBuZXcgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHR1cGxlSWQ6IE51bWJlciB8IHVuZGVmaW5lZCA9IG1hcmtzW2ldLnR1cGxlSWQ7XG4gICAgICBpZiAodHVwbGVJZCAhPT0gdW5kZWZpbmVkICYmIHR1cGxlSWQgIT09IG51bGwpIHsgLy8gSWYgdHVwbGUgaWQgaXMgcHJvdmlkZWQgdXNlIHRoYXQgaW5zdGVhZCBvZiBwYWlyXG4gICAgICAgIGlkcy5wdXNoKHR1cGxlSWQudG9TdHJpbmcoKSk7IC8vIGNvbGxlY3QgdGhlIHR1cGxlIGlkc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICd0dXBsZUlkIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkcy5sZW5ndGggIT09IDApIHsgLy8gdHVwbGUgaWRzIGJhc2VkIHNlbGVjdGlvblxuICAgICAgbGV0IHR1cGxlU2VsZWN0aW9uTW9kZWw6IFR1cGxlU2VsZWN0aW9uTW9kZWwgPSBuZXcgVHVwbGVTZWxlY3Rpb25Nb2RlbCgpO1xuICAgICAgdHVwbGVTZWxlY3Rpb25Nb2RlbC5zZWxlY3Rpb25UeXBlID0gJ3R1cGxlcyc7XG4gICAgICB0dXBsZVNlbGVjdGlvbk1vZGVsLm9iamVjdElkcyA9IGlkcztcbiAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnNlbGVjdGlvbiA9IHR1cGxlU2VsZWN0aW9uTW9kZWw7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjtcbiAgfVxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgdmFsdWVzLlxuICAgKlxuICAgKiBTdXBwb3J0cyAzIHR5cGVzIGZvciBzZWxlY3Rpb246XG4gICAqIDEpIGhpZXJhcmNoaWNhbCB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICogMikgcmFuZ2UgdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqIDMpIERpbWVuc2lvbiB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIG1hcmtzXG4gICAqIEBwYXJhbSBoaWVyTW9kZWxBcnJcbiAgICogQHBhcmFtIGRpbU1vZGVsQXJyXG4gICAqIEBwYXJhbSBxdWFudE1vZGVsQXJyXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25cbiAgICovXG4gIHByaXZhdGUgcGFyc2VTZWxlY3Rpb25NYXJrcyhzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUpOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gbmV3IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcigpO1xuICAgIGxldCBtaXhlZFNlbGVjdGlvbnNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25Dcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0ID0gc2VsZWN0aW9uQ3JpdGVyaWFzW2ldO1xuICAgICAgaWYgKHN0LmZpZWxkTmFtZSAmJiAoc3QudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGNhdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnKFxcW1tBLVphLXowLTldK10pLionLCAnZycpO1xuICAgICAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBzdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuICAgICAgICBpZiAoY2F0UmVnZXgudGVzdChzdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGUpIHtcbiAgICAgICAgICAgIGxldCBoaWVyTW9kZWw6IEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsID0gdGhpcy5hZGRUb1BhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCBzdC52YWx1ZSkgYXMgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWw7XG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5oaWVyTW9kZWxBcnIucHVzaChoaWVyTW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgJiYgKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1heCAhPT0gdW5kZWZpbmVkKSB7IC8vIFJhbmdlIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuUmFuZ2VUeXBlKSB7XG4gICAgICAgICAgICBsZXQgcXVhbnRNb2RlbDogUmFuZ2VTZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9SYW5nZVBhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCByYW5nZU9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5xdWFudE1vZGVsQXJyLnB1c2gocXVhbnRNb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgLy8gRGltZW5zaW9uIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZSkge1xuICAgICAgICAgICAgbGV0IGRpbU1vZGVsOiBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9QYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgc3QudmFsdWUpIGFzIERpbWVuc2lvblNlbGVjdGlvbk1vZGVsO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIuZGltTW9kZWxBcnIucHVzaChkaW1Nb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaXhlZFNlbGVjdGlvbnNFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZWxlY3Rpb24gQ3JpdGVyaWEgcGFyc2luZyBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uTW9kZWxDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdGlvbkNyaXRlcmlhcyBWYWxpZGF0ZSBhbmQgZGV0ZXJtaW5lIHRoZSBzZWxlY3Rpb24gY3JpdGVyaWFzIHR5cGUuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlU2VsZWN0aW9uQ3JpdGVyaWEoc2VsZWN0aW9uQ3JpdGVyaWE6IENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhKTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlIHtcbiAgICBsZXQgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlO1xuICAgIC8vIERldGVybWluZSB0aGUgdHlwZSBvZiBzZWxlY3Rpb24sIHRoaXMgY29tbWFuZCBpcyBieSBsb29raW5nIGF0IHRoZSBmaXJzdCBzZWxlY3Rpb25cbiAgICBsZXQgY3JpdDogQ29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWEgPSBzZWxlY3Rpb25Dcml0ZXJpYTtcblxuICAgIGxldCBjYXRSZWdleCA9IG5ldyBSZWdFeHAoJyhcXFtbQS1aYS16MC05XStdKS4qJywgJ2cnKTtcbiAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBjcml0LnZhbHVlIGFzIENvbnRyYWN0LlJhbmdlVmFsdWU7XG5cbiAgICBpZiAoY3JpdC5maWVsZE5hbWUgJiYgKGNyaXQudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjcml0LnZhbHVlICE9PSBudWxsKSkge1xuICAgICAgaWYgKGNhdFJlZ2V4LnRlc3QoY3JpdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlO1xuICAgICAgfSBlbHNlIGlmICgocmFuZ2VPcHRpb24gYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZSkubWluICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1heCAhPT0gdW5kZWZpbmVkKSB7IC8vIFJhbmdlIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICBzZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLlJhbmdlVHlwZTtcbiAgICAgIH0gZWxzZSB7IC8vIERpbWVyc2lvbiB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5EaW1lbnNpb25UeXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1NlbGVjdGlvbiBDcml0ZXJpYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25UeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0cmFuc2Zvcm0gdGhlIGtleSB2YWx1ZSBwYWlyIGludG8gdmFsdWUgYmFzZWQgcHJlcyBtb2RlbCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVNlbGVjdGlvbk1vZGVsXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGFkZFRvUGFyYW1zTGlzdChmaWVsZE5hbWU6IHN0cmluZywgdmFsdWU6IG9iamVjdCk6IFZhbHVlU2VsZWN0aW9uTW9kZWwge1xuICAgIGxldCB2YWx1ZVNlbGVjdGlvbk1vZGVsOiBWYWx1ZVNlbGVjdGlvbk1vZGVsID0gbmV3IFZhbHVlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICBsZXQgbWFya1ZhbHVlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGxldCB2YWx1ZUFycjogQXJyYXk8c3RyaW5nPiA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXJrVmFsdWVzLnB1c2godmFsdWVBcnJbaV0udG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtWYWx1ZXMucHVzaCh2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnF1YWxpZmllZEZpZWxkQ2FwdGlvbiA9IGZpZWxkTmFtZTtcbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnNlbGVjdFZhbHVlcyA9IG1hcmtWYWx1ZXM7XG4gICAgcmV0dXJuIHZhbHVlU2VsZWN0aW9uTW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHRyYW5zZm9ybSB0aGUga2V5IHZhbHVlIHBhaXIgaW50byByYW5nZSBiYXNlZCBzZWxlY3Rpb24gcHJlcyBtb2RlbC5cbiAgICpcbiAgICogVE9ETzogTmVlZCB0byBoYW5kbGUgdGhlIHBhcnNpbmcgb2YgZGF0ZSB0eXBlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlU2VsZWN0aW9uTW9kZWxcbiAgICogQHBhcmFtIGZpZWxkTmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHByaXZhdGUgYWRkVG9SYW5nZVBhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBDb250cmFjdC5SYW5nZVZhbHVlKTogUmFuZ2VTZWxlY3Rpb25Nb2RlbCB7XG4gICAgbGV0IHJhbmdlU2VsZWN0aW9uTW9kZWw6IFJhbmdlU2VsZWN0aW9uTW9kZWwgPSBuZXcgUmFuZ2VTZWxlY3Rpb25Nb2RlbCgpO1xuICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwucXVhbGlmaWVkRmllbGRDYXB0aW9uID0gZmllbGROYW1lO1xuICAgIGlmICh2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5tYXggIT09IG51bGwpIHtcbiAgICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwubWF4VmFsdWUgPSB2YWx1ZS5tYXgudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLm1pbiAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLm1pbiAhPT0gbnVsbCkge1xuICAgICAgcmFuZ2VTZWxlY3Rpb25Nb2RlbC5taW5WYWx1ZSA9IHZhbHVlLm1pbi50b1N0cmluZygpO1xuICAgIH1cbiAgICByYW5nZVNlbGVjdGlvbk1vZGVsLmluY2x1ZGVkID0gdGhpcy52YWxpZGF0ZU51bGxPcHRpb25UeXBlKHZhbHVlLm51bGxPcHRpb24pO1xuICAgIHJldHVybiByYW5nZVNlbGVjdGlvbk1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgc2VsZWN0aW9uIHVwZGF0ZSB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlbGVjdGlvblVwZGF0ZVR5cGUoc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IHN0cmluZyB7XG4gICAgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuUmVwbGFjZSkge1xuICAgICAgcmV0dXJuIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbC5SZXBsYWNlO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uVXBkYXRlVHlwZSA9PT0gQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZS5BZGQpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuQWRkO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uVXBkYXRlVHlwZSA9PT0gQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZS5SZW1vdmUpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuUmVtb3ZlO1xuICAgIH1cbiAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLlJlcGxhY2U7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHZhbGlkYXRlIHRoZSBpbmNsdWRlIHR5cGUgZm9yIHJhbmdlIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIG51bGxPcHRpb25cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVOdWxsT3B0aW9uVHlwZShudWxsT3B0aW9uOiBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICBpZiAobnVsbE9wdGlvbikge1xuICAgICAgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uTnVsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZU51bGw7XG4gICAgICB9IGVsc2UgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uTm9uTnVsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZU5vbk51bGw7XG4gICAgICB9IGVsc2UgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uQWxsVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcy5JbmNsdWRlQWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcy5JbmNsdWRlQWxsO1xuICB9XG5cbn1cblxuLyoqXG4gKiBFbnVtIGZvciB0aGUgZGlmZmVyZW50IHNlbGVjdGlvbiBjcml0ZXJpYSB0eXBlcy5cbiAqL1xuZW51bSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUge1xuICBIaWVyYXJjaGljYWxUeXBlID0gMSxcbiAgUmFuZ2VUeXBlID0gMixcbiAgRGltZW5zaW9uVHlwZSA9IDMsXG4gIFR1cGxlc1R5cGUgPSA0LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbC50cyIsIi8qKlxuICogU2VsZWN0aW9uIE1vZGVsLlxuICovXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgcXVhbGlmaWVkRmllbGRDYXB0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVmFsdWUgYmFzZWQgc2VsZWN0aW9uIG1vZGVsLiBNZWFudCBmb3IgaGllcmFyY2hpY2FsLCByYW5nZSBhbmQgY2F0ZWdvcmljYWwgc2VsZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHVlU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBTZWxlY3Rpb25Nb2RlbCB7XG4gIHB1YmxpYyBzZWxlY3RWYWx1ZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbn1cblxuLyoqXG4gKiBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFZhbHVlU2VsZWN0aW9uTW9kZWwge1xufVxuXG4vKipcbiAqIFJhbmdlIGJhc2VkIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgUmFuZ2VTZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIG1pblZhbHVlOiBzdHJpbmc7XG4gIHB1YmxpYyBtYXhWYWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgaW5jbHVkZWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEaW1lbnNpb24gdmFsdWUgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFZhbHVlU2VsZWN0aW9uTW9kZWwge1xufVxuLyoqXG4gKiBUdXBsZSBiYXNlZCBzZWxlY3Rpb24gbW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFR1cGxlU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgb2JqZWN0SWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG59XG5cbi8qKlxuICogQ29udGFpbmVyIGNsYXNzIHRvIHBvcHVsYXRlIGFsbCB0aGUgc2VsZWN0aW9uIG1vZGVscyB3aGVuIHBhcnNpbmcgaW5wdXRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciB7XG4gIHB1YmxpYyBoaWVyTW9kZWxBcnI6IEFycmF5PEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsPiA9IFtdO1xuICBwdWJsaWMgZGltTW9kZWxBcnI6IEFycmF5PERpbWVuc2lvblNlbGVjdGlvbk1vZGVsPiA9IFtdO1xuICBwdWJsaWMgcXVhbnRNb2RlbEFycjogQXJyYXk8UmFuZ2VTZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIHNlbGVjdGlvbjogVHVwbGVTZWxlY3Rpb25Nb2RlbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIERhc2hib2FyZENvbnRlbnQgbmFtZXNwYWNlLlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBEYXNoYm9hcmRDb250ZW50IGlzXG4gKiBjdXJyZW50bHkganVzdCBhIChzaW5nbGUpIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRlbnQgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmRDb250ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbkVudmlyb25tZW50IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyBhcyBFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBlbnZpcm9ubWVudCBuYW1lc3BhY2UuXG4gKiBFbnZpcm9ubWVudCBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpc1xuICoganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IGltcGxlbWVudHMgQ29udHJhY3QuRW52aXJvbm1lbnQge1xuICBwcml2YXRlIF9hcGlWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRleHQ6IENvbnRyYWN0LkV4dGVuc2lvbkNvbnRleHQ7XG4gIHByaXZhdGUgX2xhbmd1YWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlOiBDb250cmFjdC5FeHRlbnNpb25Nb2RlO1xuICBwcml2YXRlIF9vcGVyYXRpbmdTeXN0ZW06IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFibGVhdVZlcnNpb246IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXh0ZW5zaW9uRW52aXJvbm1lbnQ6IEV4dGVuc2lvbkVudmlyb25tZW50KSB7XG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IGV4dGVuc2lvbkVudmlyb25tZW50LmFwaVZlcnNpb247XG4gICAgdGhpcy5fY29udGV4dCA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Db250ZXh0LmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uQ29udGV4dCk7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25MYW5ndWFnZTtcbiAgICB0aGlzLl9sb2NhbGUgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25Mb2NhbGU7XG4gICAgdGhpcy5fbW9kZSA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Nb2RlLmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTW9kZSk7XG4gICAgdGhpcy5fb3BlcmF0aW5nU3lzdGVtID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQub3BlcmF0aW5nU3lzdGVtO1xuICAgIHRoaXMuX3RhYmxlYXVWZXJzaW9uID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQudGFibGVhdVZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwaVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpVmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDb250cmFjdC5FeHRlbnNpb25Db250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vZGUoKTogQ29udHJhY3QuRXh0ZW5zaW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9wZXJhdGluZ1N5c3RlbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpbmdTeXN0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRhYmxlYXVWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlYXVWZXJzaW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FbnZpcm9ubWVudC50cyIsImltcG9ydCB7IFNldHRpbmdzIGFzIFNldHRpbmdzQ29udHJhY3QgfSBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IFNldHRpbmdzSW1wbCB9IGZyb20gJy4uL0ltcGwvU2V0dGluZ3NJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiB9IGZyb20gJy4uL1NlcnZpY2VzL1NldHRpbmdzU2VydmljZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIHNldHRpbmdzIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBTZXR0aW5nc0NvbnRyYWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NldHRpbmdzSW1wbDogU2V0dGluZ3NJbXBsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgb3VyIGV2ZW50IGhhbmRsaW5nIGZvciB0aGlzIGNsYXNzXG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmluaXRpYWxpemVFdmVudHMoKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmVyYXNlKGtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbCgpOiBTZXR0aW5nc0NvbGxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuZ2V0QWxsKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTW9kaWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5pc01vZGlmaWVkO1xuICB9XG5cbiAgcHVibGljIHNhdmVBc3luYygpOiBQcm9taXNlPFNldHRpbmdzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuc2F2ZUFzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLnNldChrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFVJSW1wbCB9IGZyb20gJy4uL0ltcGwvVUlJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgVUkgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgVUkgaW1wbGVtZW50cyBDb250cmFjdC5VSSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsOiBVSUltcGwpIHsgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5faW1wbC5kaXNwbGF5RGlhbG9nQXN5bmModXJsLCBwYXlsb2FkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZyhwYXlsb2FkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faW1wbC5jbG9zZURpYWxvZyhwYXlsb2FkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJpbXBvcnQgeyBJbnRlcm5hbEFwaURpc3BhdGNoZXIgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZUltcGwgfSBmcm9tICcuL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBVSVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9JbXBsL1VJU2VydmljZUltcGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEluaXRpYWxpemF0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZXR0aW5nc1NlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgVUlTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMudHMiLCJpbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEluaXRpYWxpemF0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5Jbml0aWFsaXphdGlvblNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURhc2hib2FyZEV4dGVuc2lvbnNBc3luYyhpc0V4dGVuc2lvbkRpYWxvZzogYm9vbGVhbiwgY29udGV4dE1lbnVJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxFeHRlbnNpb25Cb290c3RyYXBJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25Db250ZXh0TWVudUlkc106IGNvbnRleHRNZW51SWRzLFxuICAgICAgW1BhcmFtZXRlcklkLklzRXh0ZW5zaW9uRGlhbG9nXTogaXNFeHRlbnNpb25EaWFsb2dcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuSW5pdGlhbGl6ZUV4dGVuc2lvbiwgcGFyYW1zKS50aGVuPEV4dGVuc2lvbkJvb3RzdHJhcEluZm8+KHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFRPRE8gLSBWYWxpZGF0ZSByZXR1cm4gdmFsdWVcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEV4dGVuc2lvbkJvb3RzdHJhcEluZm87XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb2xsZWN0aW9uLCBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9TZXR0aW5nc1NlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNldHRpbmdzU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgc2F2ZVNldHRpbmdzQXN5bmMoc2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbik6IFByb21pc2U8U2V0dGluZ3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5TZXR0aW5nc1ZhbHVlc106IHNldHRpbmdzIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TYXZlRXh0ZW5zaW9uU2V0dGluZ3MsIHBhcmFtZXRlcnMpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPih2YWx1ZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5yZXN1bHQgYXMgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvO1xuXG4gICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnNldHRpbmdzVmFsdWVzKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnVW5leHBlY3RlZCBlcnJvciBzYXZpbmdzIHNldHRpbmdzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKHJlc3VsdC5zZXR0aW5nc1ZhbHVlcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJpbXBvcnQgeyBEaWFsb2dPcHRpb25zLCBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSwgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vVUlTZXJ2aWNlJztcblxuY29uc3QgREVGQVVMVF9ESUFMT0dfSEVJR0hUOiBudW1iZXIgPSA0MDA7IC8vIGluIHBpeGVsc1xuY29uc3QgREVGQVVMVF9ESUFMT0dfV0lEVEg6IG51bWJlciA9IDYwMDsgLy8gaW4gcGl4ZWxzXG5cbmV4cG9ydCBjbGFzcyBVSVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgVUlTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ6IHN0cmluZywgb3B0aW9ucz86IERpYWxvZ09wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nVXJsXTogdXJsLFxuICAgICAgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1BheWxvYWRdOiBwYXlsb2FkXG4gICAgfTtcblxuICAgIGNvbnN0IGg6IG51bWJlciA9ICgob3B0aW9ucykgJiYgKG9wdGlvbnMuaGVpZ2h0KSkgPyBvcHRpb25zLmhlaWdodCA6IERFRkFVTFRfRElBTE9HX0hFSUdIVDtcbiAgICBjb25zdCB3OiBudW1iZXIgPSAoKG9wdGlvbnMpICYmIChvcHRpb25zLndpZHRoKSkgPyBvcHRpb25zLndpZHRoIDogREVGQVVMVF9ESUFMT0dfV0lEVEg7XG5cbiAgICAvLyBPbiB0aGUgcGxhdGZvcm0gc2lkZSwgd2UgZG8gc29tZXRoaW5nIHJlYXNvbmFibGUgcmVnYXJkZXNzIG9mIHdoZXRoZXIgdGhlIHBhc3NlZFxuICAgIC8vIGhlaWdodCBhbmQgd2lkdGggYXJlIHRvbyBsYXJnZSBvciB0b28gc21hbGwuICBCdXQgdGhpcyBsaWtlbHkgaW5kaWNhdGVzIGEgZGV2ZWxvcGVyIGVycm9yLFxuICAgIC8vIHNvIHdlIHRocm93IGFuIGVycm9yIGhlcmUgdG8gaGVscCB3aXRoIGRlYnVnZ2luZy5cbiAgICBpZiAoaCA8PSAwIHx8IHcgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsICdTaXplIHBhcmFtZXRlcnMgZm9yIGRpc3BsYXlEaWFsb2dBc3luYyBtdXN0IGJlIHBvc2l0aXZlJyk7XG4gICAgfVxuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dIXSA9IGg7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dXXSA9IHc7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5EaXNwbGF5RGlhbG9nLCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRpYWxvZ1Jlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBFeHRlbnNpb25EaWFsb2dSZXN1bHQ7XG4gICAgICBzd2l0Y2ggKGRpYWxvZ1Jlc3VsdCkge1xuICAgICAgICBjYXNlIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdC5EaWFsb2dBbHJlYWR5T3BlbjpcbiAgICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuRGlhbG9nQWxyZWFkeU9wZW4sICdUaGVyZSBhbHJlYWR5IGV4aXN0cyBhbiBvcGVuIGRpYWxvZyBmb3IgdGhpcyBleHRlbnNpb24uJyk7XG4gICAgICAgIGNhc2UgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LkludmFsaWREb21haW46XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWREb21haW5EaWFsb2csXG4gICAgICAgICAgICAnVGhlIHVybCBvZiBhbiBleHRlbnNpb24gZGlhbG9nIG11c3QgbWF0Y2ggdGhlIGRvbWFpbiBvZiB0aGUgcGFyZW50IGV4dGVuc2lvbi4nKTtcbiAgICAgICAgZGVmYXVsdDogLy8gU3VjY2VzcyBjYXNlXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKHBheWxvYWQ/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSAocGF5bG9hZCkgPyB7IFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dQYXlsb2FkXTogcGF5bG9hZCB9IDoge307XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DbG9zZURpYWxvZywgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1VJU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvblNldHRpbmdzSW5mbywgTm90aWZpY2F0aW9uSWQsIFNldHRpbmdzRXZlbnQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIEVycm9ySGVscGVycyxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBTaW5nbGVFdmVudE1hbmFnZXIsXG4gIFNpbmdsZUV2ZW50TWFuYWdlckltcGwsXG4gIFRhYmxlYXVFcnJvcixcbiAgVGFibGVhdUV2ZW50XG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlJztcblxuY2xhc3MgU2V0dGluZ3NDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5TZXR0aW5nc0NoYW5nZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZXdTZXR0aW5nczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuU2V0dGluZ3NDaGFuZ2VkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3U2V0dGluZ3MoKTogU2V0dGluZ3NDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fbmV3U2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW1wbCB7XG4gIHByaXZhdGUgc3RhdGljIEFTWU5DX1NBVkVfSU5fUFJPR1JFU1M6IHN0cmluZyA9ICdBc3luYyBTYXZlIGlzIGluIHByb2dyZXNzLCB1cGRhdGluZyBzZXR0aW5ncyBpcyBub3QgYWxsb3dlZC4nO1xuICBwcml2YXRlIF9pc01vZGlmaWVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jdXJyZW50U2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbjtcblxuICAvLyBTaW5jZSBwcm9taXNlcyBjYW4ndCBiZSBpbnRyb3NwZWN0ZWQgZm9yIHN0YXRlLCBrZWVwIGEgdmFyaWFibGUgdGhhdFxuICAvLyBpbmRpY2F0ZXMgYSBzYXZlIGlzIGluIHByb2dyZXNzLCBzbyB0aGF0IHNldC9lcmFzZSBjYW4ndCBiZSBjYWxsZWQgZHVyaW5nIGEgc2F2ZS5cbiAgcHJpdmF0ZSBfc2F2ZUluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pIHtcbiAgICB0aGlzLmluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm8pO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihrZXksICdrZXknKTtcblxuICAgIC8vIE9ubHkgbWFrZSBhIG1vZGlmaWNhdGlvbiBpZiB3ZSBoYXZlIHRoZSBrZXkgYWxyZWFkeVxuICAgIGlmICh0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSkge1xuICAgICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XTtcbiAgICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoa2V5LCAna2V5Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFNldHRpbmdzW2tleV07XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgLy8gUmV0dXJucyBhIG11dGFibGUgY29weSBvZiB0aGUgc2V0dGluZ3NcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNb2RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb2RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlQXN5bmMoKTogUHJvbWlzZTxTZXR0aW5nc0NvbGxlY3Rpb24+IHtcbiAgICB0aGlzLnZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTtcblxuICAgIC8vIEp1c3QgcmVzb2x2ZSBpbW1lZGlhdGVseSBpZiBzZXR0aW5ncyBhcmUgdW5jaGFuZ2VkXG4gICAgaWYgKCF0aGlzLl9pc01vZGlmaWVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlPFNldHRpbmdzQ29sbGVjdGlvbj4odGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICAvLyBVc2UgdGhlIHNldHRpbmdzIHNlcnZpY2UgdG8gc2F2ZSBzZXR0aW5ncyB0byB0d2JcbiAgICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZXR0aW5nc1NlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNldHRpbmdzU2VydmljZS5zYXZlU2V0dGluZ3NBc3luYyh0aGlzLl9jdXJyZW50U2V0dGluZ3MpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPihuZXdTZXR0aW5ncyA9PiB7XG4gICAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNNb2RpZmllZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IG5ld1NldHRpbmdzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jdXJyZW50U2V0dGluZ3MsIG5ld1NldHRpbmdzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdTZXR0aW5ncztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5U3RyaW5nUGFyYW1ldGVyKGtleSwgJ2tleScpOyAvLyBLZXkgc2hvdWxkbid0IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHZhbHVlLCAndmFsdWUnKTsgLy8gRW1wdHkgc3RyaW5nIHZhbHVlIGlzIGFsbG93ZWQuXG4gICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFsbCBldmVudHMgcmVsZXZhbnQgdG8gc2V0dGluZ3Mgb2JqZWN0LiAgVGhpcyBpcyBvbmx5IGEgc2V0dGluZ3NVcGRhdGUgZXZlbnQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoKTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5nc0NoYW5nZWRFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPFNldHRpbmdzQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlNldHRpbmdzQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2V0dGluZ3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIChldmVudDogU2V0dGluZ3NFdmVudCkgPT4ge1xuICAgICAgdGhpcy5fY3VycmVudFNldHRpbmdzID0gZXZlbnQubmV3U2V0dGluZ3M7XG4gICAgICBzZXR0aW5nc0NoYW5nZWRFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFNldHRpbmdzQ2hhbmdlZEV2ZW50KGV2ZW50Lm5ld1NldHRpbmdzKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2goc2V0dGluZ3NDaGFuZ2VkRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2V0dGluZ3NJbmZvLCAnc2V0dGluZ3NJbmZvJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZXR0aW5nc0luZm8uc2V0dGluZ3NWYWx1ZXMsICdzZXR0aW5nc0luZm8uU2V0dGluZ3NWYWx1ZXMnKTtcblxuICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IHNldHRpbmdzSW5mby5zZXR0aW5nc1ZhbHVlcztcblxuICAgIC8vIFJlc2V0IHRoZSBpc01vZGlmaWVkIGZsYWdcbiAgICB0aGlzLl9pc01vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoZWxwZXIgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgYW55IGxvY2FsIHVwZGF0ZSB0byB0aGlzLmN1cnJlbnRTZXR0aW5ncy5cbiAgICogQ2hlY2tzIGlmIGEgY3VycmVudCBzYXZlIGNhbGwgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MgYW5kIHRocm93cyBhbiBlcnJvciBpZiBzby5cbiAgICovXG4gIHByaXZhdGUgdmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2F2ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5TZXR0aW5nU2F2ZUluUHJvZ3Jlc3MsIFNldHRpbmdzSW1wbC5BU1lOQ19TQVZFX0lOX1BST0dSRVNTKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGlhbG9nVXBkYXRlRXZlbnQsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeSxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBUYWJsZWF1RXJyb3Jcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvVUlTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFVJSW1wbCB7XG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB1aVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxVSVNlcnZpY2U+KEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuVUlTZXJ2aWNlKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdWlTZXJ2aWNlLmRpc3BsYXlEaWFsb2dBc3luYyh1cmwsIHBheWxvYWQgfHwgJycsIG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB1bnJlZ2lzdGVyRm4gPSBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5FeHRlbnNpb25EaWFsb2dVcGRhdGUsIChtb2RlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBMZXQgdGhyb3VnaCBhbnkgZGlhbG9nIHVwZGF0ZSBldmVudFxuICAgICAgICB9LCAoZXZlbnQ6IERpYWxvZ1VwZGF0ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzQ2xvc2VFdmVudCkge1xuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5jbG9zZVBheWxvYWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkRpYWxvZ0Nsb3NlZEJ5VXNlciwgJ0V4dGVuc2lvbiBkaWFsb2cgY2xvc2VkIGJ5IHVzZXIuJykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVucmVnaXN0ZXJGbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2cocGF5bG9hZD86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVpU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFVJU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZSk7XG5cbiAgICB1aVNlcnZpY2UuY2xvc2VEaWFsb2cocGF5bG9hZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1VJSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgQ2FsbGJhY2tNYXAsIEV4dGVuc2lvbnNJbXBsIH0gZnJvbSAnLi4vSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIEV4dGVuc2lvbnMgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9ucyBpbXBsZW1lbnRzIENvbnRyYWN0LkV4dGVuc2lvbnMge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBleHRlbnNpb25JbXBsOiBFeHRlbnNpb25zSW1wbCkge1xuICAgIHRoaXMuZXh0ZW5zaW9uSW1wbCA9IGV4dGVuc2lvbkltcGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZENvbnRlbnQoKTogQ29udHJhY3QuRGFzaGJvYXJkQ29udGVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5kYXNoYm9hcmRDb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBDb250cmFjdC5FbnZpcm9ubWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5lbnZpcm9ubWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2V0dGluZ3MoKTogQ29udHJhY3QuU2V0dGluZ3Mge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuc2V0dGluZ3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVpKCk6IENvbnRyYWN0LlVJIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLnVpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVBc3luYyhjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmMoZmFsc2UsIGNvbnRleHRNZW51Q2FsbGJhY2tzKS50aGVuPHZvaWQ+KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURpYWxvZ0FzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmModHJ1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMudHMiXSwic291cmNlUm9vdCI6IiJ9