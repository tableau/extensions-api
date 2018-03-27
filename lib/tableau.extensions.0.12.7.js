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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
__export(__webpack_require__(24));


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
__export(__webpack_require__(25));
__export(__webpack_require__(26));
__export(__webpack_require__(27));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
// These are the exports from the messaging stuff
__export(__webpack_require__(33));
__export(__webpack_require__(9));
// Export a hardcoded version of the internal contract. This should match what's in package.json.
// Normally, we'd use some sort of webpack replacement to inject this into code, but that doesn't
// work with the module-dev-scripts and this isn't too much work.
// If you forget to keep this in sync with package.json, a test will fail so we should be ok.
exports.INTERNAL_CONTRACT_VERSION = {
    major: 1,
    minor: 0,
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
var Dashboard_1 = __webpack_require__(36);
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(10);
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(2);
exports.TableauError = TableauError_1.TableauError;
var VersionNumber_1 = __webpack_require__(37);
exports.VersionNumber = VersionNumber_1.VersionNumber;
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(17);
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(11);
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(38);
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
var TableauSheetEvent_1 = __webpack_require__(20);
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
var ExtensionsImpl_1 = __webpack_require__(23);
var Extensions_1 = __webpack_require__(78);
var ApiShared_1 = __webpack_require__(3);
ApiShared_1.VersionNumber.SetVersionNumber( true ? "0.12.7" : '0.0.0');
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
    ParameterId["DataSourceId"] = "data-source-id";
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
/* 29 */
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
})(VerbId = exports.VerbId || (exports.VerbId = {}));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(31);
var IdentityVersionConverter_1 = __webpack_require__(32);
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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(14);
var CrossFramePreparedMessage_1 = __webpack_require__(34);
var MessageTypes_1 = __webpack_require__(9);
var MessageTypeChecks_1 = __webpack_require__(35);
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
var DashboardObject_1 = __webpack_require__(39);
var InternalToExternalEnumMappings_1 = __webpack_require__(7);
var Point_1 = __webpack_require__(40);
var Size_1 = __webpack_require__(41);
var Worksheet_1 = __webpack_require__(42);
var SheetImpl_1 = __webpack_require__(18);
var SheetInfoImpl_1 = __webpack_require__(43);
var WorksheetImpl_1 = __webpack_require__(44);
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 43 */
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
/* 44 */
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
var DataSource_1 = __webpack_require__(45);
var DataSourceImpl_1 = __webpack_require__(46);
var SheetImpl_1 = __webpack_require__(18);
var SingleEventManagerImpl_1 = __webpack_require__(11);
var FilterChangedEvent_1 = __webpack_require__(51);
var MarksSelectedEvent_1 = __webpack_require__(52);
var GetDataService_1 = __webpack_require__(21);
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(47);
var ConnectionSummary_1 = __webpack_require__(48);
var Field_1 = __webpack_require__(49);
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
var TableauWorksheetEvent_1 = __webpack_require__(19);
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
var TableauWorksheetEvent_1 = __webpack_require__(19);
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
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.RefreshDataSource, parameters).then(function (response) {
            return;
        });
        var _a;
    };
    DataSourceServiceImpl.prototype.getActiveTablesAsync = function (dataSourceId) {
        var joinParameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetJoinDescription, joinParameters).then(function (joinResponse) {
            var joinDescription = joinResponse.result;
            // getActiveTables is unsupported for cubes and GA. We do not have a connection type property
            // available from the platform (intentionally, to reduce code churn as new connections are added).
            // Instead,just check if any tables are returned. This array will be empty for any non-table based datasource.
            if (joinDescription.tables.length === 0) {
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.UnsupportedMethodForDataSourceType, "getActiveTables is not supported for: " + dataSourceId);
            }
            return joinDescription.tables;
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
        throw new Error('Method not implemented');
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
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(8);
var GetDataModels_1 = __webpack_require__(13);
var GetDataService_1 = __webpack_require__(21);
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
        var headers = responseData.headers.map(function (h) { return new GetDataModels_1.Column(h.fieldCaption, Contract.DataType.String /*h.DataType*/, h.isReferenced, h.index); });
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
var TableauSheetEvent_1 = __webpack_require__(20);
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
            Object.assign(_this._currentSettings, newSettings);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzViMWQxZDFjM2Q2ZDg5OTdmYTgiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlYXVFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL0FwaVNoYXJlZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRXJyb3JIZWxwZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9QYXJhbS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvR2V0RGF0YU1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2d1aWQvZ3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaGVldC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FbnVtQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVXb3Jrc2hlZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvR2V0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvRXh0ZXJuYWxDb250cmFjdC9FbnVtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L0VudW1zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9QYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvVmVyYnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL0lkZW50aXR5VmVyc2lvbkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvTWVzc2FnZVR5cGVDaGVja3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaXplLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1dvcmtzaGVldC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW5mb0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9Xb3Jrc2hlZXRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0RhdGFTb3VyY2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXRhU291cmNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0ZpZWxkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9GaWVsZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZVN1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9GaWx0ZXJNb2RlbHMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9HZXREYXRhU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1BhcmFtZXRlckltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1BhcmFtZXRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9QYXJhbWV0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL1JlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL0luaXRpYWxpemF0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9VSVNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9VSUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRXh0ZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3REEsNkZBQTZGOzs7OztBQUk3RixrQ0FBeUM7Ozs7Ozs7OztBQ0p6Qzs7OztHQUlH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Q0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGdDQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQUU7YUFBYjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLG9CQUFrQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUMsSUFBSSxFQUFRLENBQUM7SUFDdEYsQ0FBQztJQUVNLDBDQUFxQixHQUE1QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBNUJZLGdDQUFVIiwiZmlsZSI6InRhYmxlYXUuZXh0ZW5zaW9ucy4wLjEyLjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC1leHRlbnNpb25zL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNWIxZDFkMWMzZDZkODk5N2ZhOCIsIi8vIFRoaXMgZmlsZSByZS1leHBvcnRzIGV2ZXJ5dGhpbmcgd2hpY2ggaXMgcGFydCBvZiB0aGUgc2hhcmVkIGVtYmVkZGluZyBhcGkgcHVibGljIGludGVyZmFjZVxuXG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRGF0YVNvdXJjZUludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0RhdGFUYWJsZUludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0VudW1zJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9FdmVudEludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0ZpbHRlckludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L1NlbGVjdGlvbkludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L1BhcmFtZXRlckludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L1NlbGVjdGlvbkludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L1NoZWV0SW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvVGFibGVhdUVycm9yJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdC50cyIsIi8qKlxuICogVGhpcyBpcyB5b3VyIG1haW4uIFRoaXMgaXMgd2hlcmUgeW91IHJlLWV4cG9ydCBldmVyeXRoaW5nIHlvdSB3YW50IHRvIGJlIHB1YmxpY2x5IGF2YWlsYWJsZS5cbiAqXG4gKiBUaGUgYnVpbGQgZW5mb3JjZXMgdGhhdCB0aGUgZmlsZSBoYXMgdGhlIHNhbWUgbmFtZSBhcyB0aGUgZ2xvYmFsIHZhcmlhYmxlIHRoYXQgaXMgZXhwb3J0ZWQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9FbnVtcyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZS9JbnRlcm5hbEFwaURpc3BhdGNoZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9Nb2RlbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9Ob3RpZmljYXRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvUGFyYW1ldGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L1ZlcmJzJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL1ZlcnNpb25OdW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL1ZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbmluZy9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5cbi8vIFRoZXNlIGFyZSB0aGUgZXhwb3J0cyBmcm9tIHRoZSBtZXNzYWdpbmcgc3R1ZmZcblxuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvQ3Jvc3NGcmFtZU1lc3Nlbmdlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZURpc3BhdGNoZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VMaXN0ZW5lcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzZW5nZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL1ByZXBhcmVkTWVzc2FnZSc7XG5cbi8vIEV4cG9ydCBhIGhhcmRjb2RlZCB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdC4gVGhpcyBzaG91bGQgbWF0Y2ggd2hhdCdzIGluIHBhY2thZ2UuanNvbi5cbi8vIE5vcm1hbGx5LCB3ZSdkIHVzZSBzb21lIHNvcnQgb2Ygd2VicGFjayByZXBsYWNlbWVudCB0byBpbmplY3QgdGhpcyBpbnRvIGNvZGUsIGJ1dCB0aGF0IGRvZXNuJ3Rcbi8vIHdvcmsgd2l0aCB0aGUgbW9kdWxlLWRldi1zY3JpcHRzIGFuZCB0aGlzIGlzbid0IHRvbyBtdWNoIHdvcmsuXG4vLyBJZiB5b3UgZm9yZ2V0IHRvIGtlZXAgdGhpcyBpbiBzeW5jIHdpdGggcGFja2FnZS5qc29uLCBhIHRlc3Qgd2lsbCBmYWlsIHNvIHdlIHNob3VsZCBiZSBvay5cbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9DT05UUkFDVF9WRVJTSU9OID0ge1xuICBtYWpvcjogMSxcbiAgbWlub3I6IDAsXG4gIGZpeDogMFxufTtcblxuLy8gRXhwb3J0IHRoZSB2ZXJzaW9uIG51bWJlciBvZiBtZXNzYWdpbmcgZm9yIGNvbnN1bWVycyB0byB1c2UuXG4vLyBCZSB2ZXJ5IGNhcmVmdWwgbWFraW5nIGFueSB1cGRhdGVzIHRvIHRoaXMgY29udHJhY3Qgd2hpY2ggYnJlYWsgdmVyc2lvbiBjb21wYXRpYmlsaXR5LlxuZXhwb3J0IGNvbnN0IE1FU1NBR0lOR19WRVJTSU9OID0ge1xuICBtYWpvcjogMSxcbiAgbWlub3I6IDAsXG4gIGZpeDogMFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogQ3VzdG9tIGVycm9yIGNsYXNzIHRoYXQgZXh0ZW5kcyB0aGUgZGVmYXVsdCBKYXZhU2NyaXB0IEVycm9yIG9iamVjdC5cbiAqIFRoaXMgYWxsb3dzIHVzIHRvIHByb3ZpZGUgYSBmaWVsZCB3aXRoIGEgc3BlY2lmaWMgZXJyb3IgY29kZVxuICogc28gdGhhdCBkZXZlbG9wZXJzIGNhbiBtb3JlIGVhc2lseSBwcm9ncmFtbWF0aWNhbGx5IHJlc3BvbmRcbiAqIHRvIGVycm9yIHNjZW5hcmlvcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlYXVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Vycm9yQ29kZTogQ29udHJhY3QuRXJyb3JDb2RlcywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYCR7X2Vycm9yQ29kZX06ICR7bWVzc2FnZX1gKTtcblxuICAgIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0LXdpa2kvYmxvYi9tYXN0ZXIvQnJlYWtpbmctQ2hhbmdlcy5tZCNleHRlbmRpbmctYnVpbHQtaW5zLWxpa2UtZXJyb3ItYXJyYXktYW5kLW1hcC1tYXktbm8tbG9uZ2VyLXdvcmtcbiAgICAvLyBFcnJvciBpbmhlcml0YW5jZSBkb2VzIG5vdCB3b3JrIHByb3BlcnRseSB3aGVuIGNvbXBpbGluZyB0byBFUzUsIHRoaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGZvcmNlXG4gICAgLy8gdGhlIHByb3RvIGNoYWluIHRvIGJlIGJ1aWx0IGNvcnJlY3RseS4gIFNlZSB0aGUgZ2l0aHViIGxpbmsgYWJvdmUgZm9yIGRldGFpbHMuXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFRhYmxlYXVFcnJvci5wcm90b3R5cGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBlcnJvckNvZGUoKTogQ29udHJhY3QuRXJyb3JDb2RlcyB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yQ29kZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVGFibGVhdUVycm9yLnRzIiwiLy8gRXhwb3J0IGV2ZXJ5dGhpbmcgd2hpY2ggaGFkIGJlZW4gcHJldmlvdXNseSBpbiB0aGUgYXBpLXNoYXJlZCBtb2R1bGVcblxuZXhwb3J0IHsgRGFzaGJvYXJkIH0gZnJvbSAnLi9BcGlTaGFyZWQvRGFzaGJvYXJkJztcbmV4cG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi9BcGlTaGFyZWQvRXZlbnRMaXN0ZW5lck1hbmFnZXInO1xuZXhwb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi9BcGlTaGFyZWQvU2luZ2xlRXZlbnRNYW5hZ2VyJztcbmV4cG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4vQXBpU2hhcmVkL1RhYmxlYXVFcnJvcic7XG5leHBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi9BcGlTaGFyZWQvVmVyc2lvbk51bWJlcic7XG5cbmV4cG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4vQXBpU2hhcmVkL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuZXhwb3J0IHsgVGFibGVhdUV2ZW50IH0gZnJvbSAnLi9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVFdmVudCc7XG5leHBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsIH0gZnJvbSAnLi9BcGlTaGFyZWQvSW1wbC9TaW5nbGVFdmVudE1hbmFnZXJJbXBsJztcbmV4cG9ydCB7IERhc2hib2FyZEltcGwgfSBmcm9tICcuL0FwaVNoYXJlZC9JbXBsL0Rhc2hib2FyZEltcGwnO1xuZXhwb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZXJ2aWNlSW1wbEJhc2UnO1xuZXhwb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi9BcGlTaGFyZWQvVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0ICogZnJvbSAnLi9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lQm9vdHN0cmFwJztcbmV4cG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL0FwaVNoYXJlZC9TZXJ2aWNlcy9Ob3RpZmljYXRpb25TZXJ2aWNlJztcblxuZXhwb3J0ICogZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvUmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0FwaVNoYXJlZC9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9BcGlTaGFyZWQudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogQmFzZSBpbnRlcmZhY2UgZm9yIGFuIGFwaSBzZXJ2aWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBpU2VydmljZSB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBuYW1lIGZvciB0aGlzIHNlcnZpY2UuXG4gICAqL1xuICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIENvbGxlY3Rpb24gb2Ygc2VydmljZSBuYW1lIHdoaWNoIHdpbGwgYmUgcmVnaXN0ZXJlZCBpbiB0aGUgYXBpLXNoYXJlZCBwcm9qZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIFNlcnZpY2VOYW1lcyB7XG4gIERhdGFTb3VyY2VTZXJ2aWNlID0gJ2RhdGEtc291cmNlLXNlcnZpY2UnLFxuICBHZXREYXRhID0gJ2dldC1kYXRhLXNlcnZpY2UnLFxuICBGaWx0ZXIgPSAnZmlsdGVyLXNlcnZpY2UnLFxuICBOb3RpZmljYXRpb24gPSAnbm90aWZpY2F0aW9uLXNlcnZpY2UnLFxuICBQYXJhbWV0ZXJzID0gJ3BhcmFtZXRlcnMtc2VydmljZScsXG4gIFNlbGVjdGlvbiA9ICdzZWxlY3Rpb24tc2VydmljZSdcbn1cblxuLyoqXG4gKiBEbyBzb21lIGdsb2JhYmwgZGVjbGFyYXRpb25zIHNvIHdlIGNhbiBjcmVhdGUgYSBzaW5nbGV0b24gb24gdGhlIHdpbmRvdyBvYmplY3RcbiAqL1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5OiBTZXJ2aWNlUmVnaXN0cnkgfCB1bmRlZmluZWQ7IH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlUmVnaXN0cnkge1xuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgbmV3IHNlcnZpY2UgaW50byB0aGUgc2VydmljZSByZWdpc3RyeS4gQW55IGV4aXN0aW5nIG9uZSB3aWxsXG4gICAqIGJlIG92ZXJ3cml0dGVuLiB0aGUgc2VydmljZSBpcyByZWdpc3RlcmVkIHVuZGVyIHNlcnZpY2Uuc2VydmljZU5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtBcGlTZXJ2aWNlfSBzZXJ2aWNlIFRoZSBzZXJ2aXZlIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlclNlcnZpY2Uoc2VydmljZTogQXBpU2VydmljZSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZ2l2ZW4gc2VydmljZSBmcm9tIHRoZSByZWdpc3RyeS4gSWYgdGhlcmUgaXMgbm90IGFcbiAgICogc2VydmljZSByZWdpc3RlcmVkIHVuZGVyIHRoYXQgbmFtZSwgdGhyb3dzIGFuZCBlcnJvclxuICAgKlxuICAgKiBAdGVtcGxhdGUgVCBUaGUgdHlwZSBvZiB0aGUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UuXG4gICAqIEByZXR1cm5zIHtUfSBUaGUgcmVxdWVzdGVkIHNlcnZpY2VcbiAgICovXG4gIGdldFNlcnZpY2U8VCBleHRlbmRzIEFwaVNlcnZpY2U+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUO1xufVxuXG5jbGFzcyBTZXJ2aWNlUmVnaXN0cnlJbXBsIGltcGxlbWVudHMgU2VydmljZVJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSBfc2VydmljZXM6IHsgW3NlcnZpY2VOYW1lOiBzdHJpbmddOiBBcGlTZXJ2aWNlOyB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlcyA9IHt9O1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyU2VydmljZShzZXJ2aWNlOiBBcGlTZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5fc2VydmljZXNbc2VydmljZS5zZXJ2aWNlTmFtZV0gPSBzZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIGdldFNlcnZpY2U8VCBleHRlbmRzIEFwaVNlcnZpY2U+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMuX3NlcnZpY2VzLmhhc093blByb3BlcnR5KHNlcnZpY2VOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBTZXJ2aWNlIG5vdCByZWdpc3RlcmVkOiAke3NlcnZpY2VOYW1lfWApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlc1tzZXJ2aWNlTmFtZV0gYXMgVDtcbiAgfVxufVxuXG4vKipcbiAqIHN0YXRpYyBjbGFzcyB1c2VkIGZvciBnZXR0aW5nIGFjY2VzcyB0byB0aGUgc2luZ2xlIGluc3RhbmNlXG4gKiBvZiB0aGUgQXBpU2VydmljZVJlZ2lzdHJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlUmVnaXN0cnkge1xuICAvKipcbiAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBTZXJ2aWNlUmVnaXN0cnlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFNlcnZpY2VSZWdpc3RyeSB7XG4gICAgaWYgKCF3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgICBBcGlTZXJ2aWNlUmVnaXN0cnkuc2V0SW5zdGFuY2UobmV3IFNlcnZpY2VSZWdpc3RyeUltcGwoKSk7XG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1NlcnZpY2UgcmVnaXN0cnkgZmFpbGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBvdmVycmlkZSB0aGUgcmVnaXN0cnkgaW5zdGFuY2UuIENhbiBiZSB1c2VkIGJ5IHVuaXQgdGVzdHNcbiAgICpcbiAgICogQHBhcmFtIHtTZXJ2aWNlUmVnaXN0cnl9IHNlcnZpY2VSZWdpc3RyeSBUaGUgbmV3IHJlZ2lzdHJ5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKHNlcnZpY2VSZWdpc3RyeT86IFNlcnZpY2VSZWdpc3RyeSk6IHZvaWQge1xuICAgIHdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkgPSBzZXJ2aWNlUmVnaXN0cnk7XG4gIH1cblxuICAvLyBQcml2YXRlIHRvIGF2b2lkIGFueW9uZSBjb25zdHJ1Y3RpbmcgdGhpc1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnkudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFBhcmFtIH0gZnJvbSAnLi9QYXJhbSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIGNvbnN0cnVjdCBjb21tb24gZXJyb3JzIHRocm91Z2hvdXQgdGhlIGV4dGVybmFsXG4gKiBwcm9qZWN0cyAoYXBpLXNoYXJlZCwgZXh0ZW5zaW9ucy1hcGksIGV0Yy4pLiAgSXQgaGFzIHNvbWUgZHVwbGljYXRpb24gd2l0aFxuICogdGhlIEVycm9ySGVscGVycyBjbGFzcyBpbiBhcGktY29yZSwgYnV0IGlzIHNlcGFyYXRlIGR1ZSB0byB0aGUgbmVlZCB0byB0aHJvd1xuICogYW4gZXh0ZXJuYWwgVGFibGVhdUVycm9yIHZzLiBhbiBJbnRlcm5hbFRhYmxlYXVFcnJvci5cbiAqL1xuZXhwb3J0IGNsYXNzIEVycm9ySGVscGVycyB7XG4gIC8qKlxuICAgKiBUaHJvd3Mgd2l0aCBjb2RlIEludGVybmFsRXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSBhcGlOYW1lIG5hbWUgb2YgYXBpIHRoYXQgd2FzIGNhbGxlZC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXBpTm90SW1wbGVtZW50ZWQoYXBpTmFtZTogc3RyaW5nKTogVGFibGVhdUVycm9yIHtcbiAgICByZXR1cm4gbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGAke2FwaU5hbWV9IEFQSSBub3QgeWV0IGltcGxlbWVudGVkLmApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhbiBpbnRlcm5hbCBlcnJvciBpZiBhcmd1bWVudCBpcyBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3VtZW50VmFsdWUgdmFsdWUgdG8gdmVyaWZ5XG4gICAqIEBwYXJhbSBhcmd1bWVudE5hbWUgbmFtZSBvZiBhcmd1bWVudCB0byB2ZXJpZnlcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5SW50ZXJuYWxWYWx1ZShhcmd1bWVudFZhbHVlOiBhbnksIGFyZ3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZ3VtZW50VmFsdWUgPT09IG51bGwgfHwgYXJndW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYCR7YXJndW1lbnRWYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3I6ICR7YXJndW1lbnROYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gSW52YWxpZFBhcmFtZXRlciBlcnJvciBpZiBhcmd1bWVudCBpcyBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3VtZW50VmFsdWUgdmFsdWUgdG8gdmVyaWZ5XG4gICAqIEBwYXJhbSBhcmd1bWVudE5hbWUgbmFtZSBvZiBhcmd1bWVudCB0byB2ZXJpZnlcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5UGFyYW1ldGVyKGFyZ3VtZW50VmFsdWU6IGFueSwgYXJndW1lbnROYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoYXJndW1lbnRWYWx1ZSA9PT0gbnVsbCB8fCBhcmd1bWVudFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCBgJHthcmd1bWVudFZhbHVlfSBpcyBpbnZhbGlkIHZhbHVlIGZvciBwYXJhbXRlcjogJHthcmd1bWVudE5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhbiBJbnZhbGlkUGFyYW1ldGVyIGVycm9yIGlmIGFyZ3VtZW50IGlzIGVtcHR5IHN0cmluZywgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeVN0cmluZ1BhcmFtZXRlcihhcmd1bWVudFZhbHVlOiBzdHJpbmcsIGFyZ3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZ3VtZW50VmFsdWUgPT09IG51bGwgfHwgYXJndW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGFyZ3VtZW50VmFsdWUgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgYCR7YXJndW1lbnRWYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgcGFyYW10ZXI6ICR7YXJndW1lbnROYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBwYXNzZWQgdmFsdWUgaXMgYSB2YWxpZCB2YWx1ZSBmb3IgdGhhdCBlbnVtLlxuICAgKiBUaHJvd3MgYW4gSW52YWxpZFBhcmFtZXRlciBlcnJvciBpZiB0aGUgZW51bSB2YWx1ZSBpcyBub3QgdmFsaWQuXG4gICAqXG4gICAqIFN0cmluZyBlbnVtcyBhcmUge3N0cmluZyA6IHN0cmluZ30gZGljdGlvbmFyaWVzIHdoaWNoIGFyZSBub3QgcmV2ZXJzZSBtYXBwYWJsZVxuICAgKiBUaGlzIGlzIGFuIHVnbHkgd29ya2Fyb3VuZFxuICAgKlxuICAgKiBAcGFyYW0gZW51bVZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gZW51bVR5cGUgZW51bSB0byB2ZXJpZnkgYWdhaW5zdFxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlFbnVtVmFsdWU8RW51bVR5cGU+KGVudW1WYWx1ZTogRW51bVR5cGUsIGVudW1UeXBlOiBhbnkpIHtcbiAgICBsZXQgaXNWYWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGVudW1UeXBlKS5mb3JFYWNoKChlbnVtS2V5KSA9PiB7XG4gICAgICBpZiAoZW51bVR5cGVbZW51bUtleV0gPT09IGVudW1WYWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgYCR7ZW51bVZhbHVlfSBpcyBpbnZhbGlkIHZhbHVlIGZvciBlbnVtOiAke2VudW1UeXBlfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgcGFyYW1zIG1pbiBhbmQgbWF4IGZvciBhcHBseWluZyByYW5nZSBmaWx0ZXIuXG4gICAqIFRocm93cyB3aXRoIGVycm9yIGNvZGUgSW52YWxpZFBhcmFtZXRlciBpZiByYW5nZSBpcyBpbnZhbGlkLlxuICAgKlxuICAgKiBAcGFyYW0gbWluIHJhbmdlIG1pblxuICAgKiBAcGFyYW0gbWF4IHJhbmdlIG1heFxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlSYW5nZVBhcmFtVHlwZShtaW46IGFueSwgbWF4OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIW1pbiAmJiAhbWF4KSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgYXQgbGVhc3Qgb25lIG9mIG1pbiBvciBtYXggaXMgcmVxdWlyZWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKG1pbiAmJiAhUGFyYW0uaXNUeXBlTnVtYmVyKG1pbikgJiYgIVBhcmFtLmlzVHlwZURhdGUobWluKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIG9ubHkgRGF0ZSBhbmQgbnVtYmVyIGFyZSBhbGxvd2VkIGZvciBwYXJhbWV0ZXIgbWluLicpO1xuICAgIH1cblxuICAgIGlmIChtYXggJiYgIVBhcmFtLmlzVHlwZU51bWJlcihtYXgpICYmICFQYXJhbS5pc1R5cGVEYXRlKG1heCkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBvbmx5IERhdGUgYW5kIG51bWJlciBhcmUgYWxsb3dlZCBmb3IgcGFyYW1ldGVyIG1heC4nKTtcbiAgICB9XG5cbiAgICBpZiAobWluICYmIG1heCAmJiB0eXBlb2YgKG1pbikgIT09IHR5cGVvZiAobWF4KSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIHBhcmFtZXRlcnMgbWluIGFuZCBtYXggc2hvdWxkIGJlIG9mIHRoZSBzYW1lIHR5cGUuJyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FcnJvckhlbHBlcnMudHMiLCIvLyBUaGlzIGZpbGUgcmUtZXhwb3J0cyBldmVyeXRoaW5nIHdoaWNoIGlzIHBhcnQgb2YgdGhlIGV4dGVuc2lvbnMgYXBpIHB1YmxpYyBpbnRlcmZhY2VcblxuLy8gRXhwb3J0IGV2ZXJ5dGhpbmcgZnJvbSB0aGUgc2hhcmVkIGZpbGVcbmV4cG9ydCAqIGZyb20gJy4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8vIEV4cG9ydCB0aGUgbmFtZXNwYWNlcyB3aGljaCBhcmUgc3BlY2lmaWMgdG8gZXh0ZW5zaW9uc1xuZXhwb3J0IHsgRXh0ZW5zaW9ucyB9IGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL0V4dGVuc2lvbnMnO1xuZXhwb3J0IHsgRGFzaGJvYXJkQ29udGVudCB9IGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQnO1xuZXhwb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9FbnZpcm9ubWVudCc7XG5leHBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1NldHRpbmdzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1VJJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL1RhYmxlYXUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdC50cyIsImltcG9ydCB7XG4gIENvbHVtblR5cGUgYXMgRXh0ZXJuYWxDb2x1bW5UeXBlLFxuICBEYXNoYm9hcmRPYmplY3RUeXBlIGFzIEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRGF0YVR5cGUgYXMgRXh0ZXJuYWxEYXRhVHlwZSxcbiAgRGF0ZVJhbmdlVHlwZSBhcyBFeHRlcm5hbERhdGVSYW5nZVR5cGUsXG4gIEVycm9yQ29kZXMgYXMgRXh0ZXJuYWxFcnJvckNvZGVzLFxuICBFeHRlbnNpb25Db250ZXh0IGFzIEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQsXG4gIEV4dGVuc2lvbk1vZGUgYXMgRXh0ZXJuYWxFeHRlbnNpb25zTW9kZSxcbiAgRmllbGRBZ2dyZWdhdGlvblR5cGUgYXMgRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZSxcbiAgRmllbGRSb2xlVHlwZSBhcyBFeHRlcm5hbEZpZWxkUm9sZVR5cGUsXG4gIEZpbHRlclR5cGUgYXMgRXh0ZXJuYWxGaWx0ZXJUeXBlLFxuICBGaWx0ZXJVcGRhdGVUeXBlIGFzIEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZSxcbiAgUGFyYW1ldGVyVmFsdWVUeXBlIGFzIEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLFxuICBQZXJpb2RUeXBlIGFzIEV4dGVybmFsRGF0ZVBlcmlvZCxcbiAgU2hlZXRUeXBlIGFzIEV4dGVybmFsU2hlZXRUeXBlLFxufSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgQ29sdW1uVHlwZSBhcyBJbnRlcm5hbENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUgYXMgSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLFxuICBEYXRhVHlwZSBhcyBJbnRlcm5hbERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlIGFzIEludGVybmFsRGF0ZVJhbmdlVHlwZSxcbiAgRGF0ZVN0ZXBQZXJpb2QgYXMgSW50ZXJuYWxEYXRlU3RlcFBlcmlvZCxcbiAgRG9tYWluUmVzdHJpY3Rpb25UeXBlIGFzIEludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLFxuICBFcnJvckNvZGVzIGFzIEludGVybmFsRXJyb3JDb2RlcyxcbiAgRXh0ZW5zaW9uQ29udGV4dCBhcyBJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LFxuICBFeHRlbnNpb25Nb2RlIGFzIEludGVybmFsRXh0ZW5zaW9uc01vZGUsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlIGFzIEludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUgYXMgSW50ZXJuYWxGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJUeXBlIGFzIEludGVybmFsRmlsdGVyVHlwZSxcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFNoZWV0VHlwZSBhcyBJbnRlcm5hbFNoZWV0VHlwZSxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRW51bUNvbnZlcnRlciB9IGZyb20gJy4uL1V0aWxzL0VudW1Db252ZXJ0ZXInO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp0eXBlZGVmIC0gRGlzYWJsZSB0aGlzIHRvIG1ha2UgZGVjbGFyaW5nIHRoZXNlIGNsYXNzZXMgYSBiaXQgZWFzaWVyICovXG4vKipcbiAqIE1hcHMgZW51bXMgdXNlZCBieSB0aGUgaW50ZXJuYWwtYXBpLWNvbnRyYWN0IHRvIHRoZSBlbnVtcyB1c2VkXG4gKiBpbiB0aGUgZXh0ZXJuYWwtYXBpLWNvbnRyYWN0LCB3aGljaCBkZXZlbG9wZXJzIGNvZGUgYWdhaW5zdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB7XG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5zaW9uQ29udGV4dCA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQsIEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQ+KHtcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5EZXNrdG9wXTogRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5EZXNrdG9wLFxuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LlNlcnZlcl06IEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuU2VydmVyXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5zaW9uTW9kZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXh0ZW5zaW9uc01vZGUsIEV4dGVybmFsRXh0ZW5zaW9uc01vZGU+KHtcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zTW9kZS5BdXRob3JpbmddOiBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlLkF1dGhvcmluZyxcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zTW9kZS5WaWV3aW5nXTogRXh0ZXJuYWxFeHRlbnNpb25zTW9kZS5WaWV3aW5nXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgY29sdW1uVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsQ29sdW1uVHlwZSwgRXh0ZXJuYWxDb2x1bW5UeXBlPih7XG4gICAgW0ludGVybmFsQ29sdW1uVHlwZS5Db250aW51b3VzXTogRXh0ZXJuYWxDb2x1bW5UeXBlLkNvbnRpbnVvdXMsXG4gICAgW0ludGVybmFsQ29sdW1uVHlwZS5EaXNjcmV0ZV06IEV4dGVybmFsQ29sdW1uVHlwZS5EaXNjcmV0ZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpZWxkQWdncmVnYXRpb25UeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZSwgRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF0dHJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF0dHIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXZnXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdmcsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50ZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnRkLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkRheV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRGF5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkVuZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRW5kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkhvdXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkhvdXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSW5PdXRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkluT3V0LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkt1cnRvc2lzXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5LdXJ0b3NpcyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NYXhdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1heCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZHldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1keSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZWRpYW5dOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1lZGlhbixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW5dOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW51dGVdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbnV0ZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Nb250aFllYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1vbnRoWWVhcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ob25lXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ob25lLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF0cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXRyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQxLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0M106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQzLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNlY29uZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2Vjb25kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNrZXduZXNzXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ta2V3bmVzcyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXYsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZwXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldnAsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3VtXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdW0sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNEYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jRGF5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jSG91cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNIb3VyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTWludXRlXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01pbnV0ZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01vbnRoXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01vbnRoLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jUXRyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1F0cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1NlY29uZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNTZWNvbmQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNXZWVrXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1dlZWssXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1llYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVXNlcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVXNlcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJwXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJwLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWssXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2Vla2RheV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2Vla2RheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5ZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5ZZWFyLFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpZWxkUm9sZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpZWxkUm9sZVR5cGUsIEV4dGVybmFsRmllbGRSb2xlVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpZWxkUm9sZVR5cGUuRGltZW5zaW9uXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLkRpbWVuc2lvbixcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLk1lYXN1cmVdOiBFeHRlcm5hbEZpZWxkUm9sZVR5cGUuTWVhc3VyZSxcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLlVua25vd25dOiBFeHRlcm5hbEZpZWxkUm9sZVR5cGUuVW5rbm93bixcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBzaGVldFR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbFNoZWV0VHlwZSwgRXh0ZXJuYWxTaGVldFR5cGU+KHtcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuRGFzaGJvYXJkXTogRXh0ZXJuYWxTaGVldFR5cGUuRGFzaGJvYXJkLFxuICAgIFtJbnRlcm5hbFNoZWV0VHlwZS5TdG9yeV06IEV4dGVybmFsU2hlZXRUeXBlLlN0b3J5LFxuICAgIFtJbnRlcm5hbFNoZWV0VHlwZS5Xb3Jrc2hlZXRdOiBFeHRlcm5hbFNoZWV0VHlwZS5Xb3Jrc2hlZXRcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXNoYm9hcmRPYmplY3RUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLCBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGU+KHtcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkV4dGVuc2lvbl06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5FeHRlbnNpb24sXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5CbGFua106IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5CbGFuayxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkltYWdlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkltYWdlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuTGVnZW5kXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkxlZ2VuZCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhZ2VGaWx0ZXJdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFnZUZpbHRlcixcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhcmFtZXRlckNvbnRyb2xdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFyYW1ldGVyQ29udHJvbCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlF1aWNrRmlsdGVyXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlF1aWNrRmlsdGVyLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGV4dF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UZXh0LFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGl0bGVdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGl0bGUsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5XZWJQYWdlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldlYlBhZ2UsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5Xb3Jrc2hlZXRdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0XG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0YVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGFUeXBlLCBFeHRlcm5hbERhdGFUeXBlPih7XG4gICAgW0ludGVybmFsRGF0YVR5cGUuQm9vbF06IEV4dGVybmFsRGF0YVR5cGUuQm9vbCxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5EYXRlXTogRXh0ZXJuYWxEYXRhVHlwZS5EYXRlLFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkRhdGVUaW1lXTogRXh0ZXJuYWxEYXRhVHlwZS5EYXRlVGltZSxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5GbG9hdF06IEV4dGVybmFsRGF0YVR5cGUuRmxvYXQsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuSW50XTogRXh0ZXJuYWxEYXRhVHlwZS5JbnQsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuU3RyaW5nXTogRXh0ZXJuYWxEYXRhVHlwZS5TdHJpbmdcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJVcGRhdGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLCBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZF06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGQsXG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGxdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsLFxuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZSxcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGFsbG93YWJsZVZhbHVlcyA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLCBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZT4oe1xuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5BbGxdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5BbGwsXG4gICAgW0ludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLkxpc3RdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5MaXN0LFxuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5SYW5nZV06IEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLlJhbmdlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0ZVN0ZXBQZXJpb2QgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGVTdGVwUGVyaW9kLCBFeHRlcm5hbERhdGVQZXJpb2Q+KHtcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5ZZWFyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5ZZWFycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5RdWFydGVyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5RdWFydGVycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5Nb250aHNdOiBFeHRlcm5hbERhdGVQZXJpb2QuTW9udGhzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLldlZWtzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLldlZWtzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLkRheXNdOiBFeHRlcm5hbERhdGVQZXJpb2QuRGF5cyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5Ib3Vyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5Ib3VycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5NaW51dGVzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLk1pbnV0ZXMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuU2Vjb25kc106IEV4dGVybmFsRGF0ZVBlcmlvZC5TZWNvbmRzXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0ZVJhbmdlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGF0ZVJhbmdlVHlwZSwgRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlPih7XG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5DdXJyZW50XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLkN1cnJlbnQsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3QsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0Tl06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0TixcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHRdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dCxcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHROXTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHROLFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuVG9EYXRlXTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLlRvRGF0ZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGVycm9yQ29kZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXJyb3JDb2RlcywgRXh0ZXJuYWxFcnJvckNvZGVzPih7XG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5JTklUSUFMSVpBVElPTl9FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuSU5URVJOQUxfRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLk1JU1NJTkdfRU5VTV9NQVBQSU5HXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5NSVNTSU5HX1BBUkFNRVRFUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuUEVSTUlTU0lPTl9ERU5JRURdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlBSRVNfTU9ERUxfUEFSU0lOR19FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuVU5LTk9XTl9WRVJCX0lEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5WRVJTSU9OX05PVF9DT05GSUdVUkVEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkFQSU5vdEluaXRpYWxpemVkXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmlsdGVyVHlwZSwgRXh0ZXJuYWxGaWx0ZXJUeXBlPih7XG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5DYXRlZ29yaWNhbF06IEV4dGVybmFsRmlsdGVyVHlwZS5DYXRlZ29yaWNhbCxcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLlJhbmdlXTogRXh0ZXJuYWxGaWx0ZXJUeXBlLlJhbmdlLFxuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuUmVsYXRpdmVEYXRlXTogRXh0ZXJuYWxGaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZSxcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLkhpZXJhcmNoaWNhbF06IEV4dGVybmFsRmlsdGVyVHlwZS5IaWVyYXJjaGljYWxcbiAgfSk7XG59XG4vKiB0c2xpbnQ6ZW5hYmxlOnR5cGVkZWYgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeGVjdXRlUmVzcG9uc2UsXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlcixcbiAgSW50ZXJuYWxUYWJsZWF1RXJyb3IsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi8uLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogRWFjaCBTZXJ2Y2VJbXBsIHNob3VsZCBleHRlbmQgdGhpcyBiYXNlIGNsYXNzIGZvciB0aGUgc2FrZSBvZlxuICogcHJvcGVyIGVycm9yIGhhbmRsaW5nLiAgVGhpcyBiYXNlIGhhbmRsZXMgdGhlIGNvbnZlcnNpb25cbiAqIGZyb20gaW50ZXJuYWwgZXJyb3JzIHRvIGV4dGVybmFsIGVycm9ycyB0aGF0IHdlIHRocm93IHRvIGRldmVsb3BlcnNcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZpY2VJbXBsQmFzZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpIHsgfVxuXG4gIHByb3RlY3RlZCBleGVjdXRlKHZlcmI6IFZlcmJJZCwgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPiB7XG5cbiAgICByZXR1cm4gdGhpcy5fZGlzcGF0Y2hlci5leGVjdXRlKHZlcmIsIHBhcmFtcykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyBBbnkgaW50ZXJuYWwgZXJyb3IgdGhhdCBjb21lcyBmcm9tIHRoZSBkaXNwYXRjaGVyIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgICAgIC8vIHRvIGFuIGV4dGVybmFsIGVycm9yIHVzaW5nIHRoZSBlbnVtIG1hcHBlciBmb3IgZXJyb3IgY29kZXMuXG4gICAgICBjb25zdCBpbnRlcm5hbEVycm9yID0gZXJyb3IgYXMgSW50ZXJuYWxUYWJsZWF1RXJyb3I7XG4gICAgICBjb25zdCBleHRlcm5hbEVycm9yQ29kZTogRXJyb3JDb2RlcyA9IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5lcnJvckNvZGUuY29udmVydChpbnRlcm5hbEVycm9yLmVycm9yQ29kZSk7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKGV4dGVybmFsRXJyb3JDb2RlLCBpbnRlcm5hbEVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZS50cyIsImltcG9ydCB7IFZlcnNpb25OdW1iZXIsIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMsIE1vZGVsLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJy4uLy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogRW51bSBkZWZpbmluZyB0aGUgNCBkaWZmZXJlbnQgdHlwZXMgb2YgbWVzc2FnZXMgd2UgaGF2ZSBkZWZpbmVkXG4gKi9cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgSW5pdGlhbGl6ZSA9ICdpbml0aWFsaXplJyxcbiAgTm90aWZpY2F0aW9uID0gJ25vdGlmaWNhdGlvbicsXG4gIENvbW1hbmQgPSAnY29tbWFuZCcsXG4gIENvbW1hbmRSZXNwb25zZSA9ICdjb21tYW5kLXJlc3BvbnNlJ1xufVxuXG4vKipcbiAqIFRoZSBNZXNzYWdlIGludGVyZmFjZSBpcyB0aGUgYmFzZSBpbnRlcmZhY2UgZm9yIGFsbCB0aGUgb3RoZXJcbiAqIG1lc3NhZ2UgdHlwZSBpbnRlcmZhY2VzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAvKipcbiAgICogQSB1bmlxdWUgaWQgZm9yIHRoaXMgbWVzc2FnZVxuICAgKi9cbiAgbXNnR3VpZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGlzIG1lc3NhZ2VcbiAgICovXG4gIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlO1xufVxuXG4vKipcbiAqIFRoZSBpbml0aWFsaXplIG1lc3NhZ2UgaXMgdGhlIGZpcnN0IG1lc3NhZ2Ugd2hpY2ggd2lsbCBiZSBzZW50XG4gKiBmcm9tIHRoZSBqYXZhc2NyaXB0IHRvIHNldCB1cCBjb21tdW5pY2F0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEluaXRpYWxpemVNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgYXBpIHdoaWNoIHRoZSBzZW5kZXIgd2FudHMgdG8gdXNlXG4gICAqL1xuICBhcGlWZXJzaW9uOiBWZXJzaW9uTnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGlzIG1lc3NhZ2luZyBjb250cmFjdCB0byBiZSB1c2VkLiBGb3Igbm93LCB0aGVyZVxuICAgKiBzaG91bGQgb25seSBiZSBhIHNpbmdsZSB2ZXJzaW9uIGJ1dCBzZW5kaW5nIHRoaXMgYWxvbmcgc2hvdWxkIGhlbHBcbiAgICogaWYgd2UgbmVlZCB0byBhZGQgYSBuZXcgdmVyc2lvbiBpbiBhIGZ1dHVyZSByZWxlYXNlXG4gICAqL1xuICBjcm9zc0ZyYW1lVmVyc2lvbjogVmVyc2lvbk51bWJlcjtcbn1cblxuLyoqXG4gKiBUaGlzIG1lc3NhZ2UgaXMgc2VudCB3aGVuIGEgbm90aWZpY2F0aW9uIG9jY3VycyBmcm9tIHRoZSBwcmVzbGF5ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25NZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgaWQgZm9yIHRoaXMgdHlwZSBvZiBub3RpZmljYXRpb25cbiAgICovXG4gIG5vdGlmaWNhdGlvbklkOiBOb3RpZmljYXRpb25JZDtcblxuICAvKipcbiAgICogVGhlIGRhdGEgd2hpY2ggY2FtZSBhbG9uZyB3aXRoIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIGRhdGE6IE1vZGVsO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgY2FsbGluZyBhbiBpbnRlcm5hbCBjb250cmFjdCBjb21tYW5kXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZE1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgY29tbWFuZCB3aGljaCBzaG91bGQgYmUgZXhlY3V0ZWRcbiAgICovXG4gIHZlcmJJZDogVmVyYklkO1xuXG4gIC8qKlxuICAgKiBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGFyYW1ldGVycyBmb3IgdGhlIGNvbW1hbmRcbiAgICovXG4gIHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzO1xufVxuXG4vKipcbiAqIFRoaXMgbWVzc2FnZSBpcyBzZW50IGluIHJlc3BvbnNlIHRvIGEgQ29tbWFuZE1lc3NhZ2Ugd2l0aCB0aGVcbiAqIHJlc3VsdCBvZiB0aGF0IGNvbW1hbmRzIGludm9jYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kUmVzcG9uc2VNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBHdWlkIG9mIHRoZSBDb21tYW5kTWVzc2FnZSB3aGljaCB0aGlzIGlzIGluIHJlc3BvbnNlIHRvXG4gICAqL1xuICBjb21tYW5kR3VpZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiB0aGVyZSB3YXMgYW4gZXJyb3IgcmV0dXJuZWQgZnJvbSB0aGUgY29tbWFuZCwgdGhpcyB3aWxsIGJlIGRlZmluZWRcbiAgICogYW5kIGNvbnRhaW4gdGhlIGVycm9yXG4gICAqL1xuICBlcnJvcj86IE1vZGVsO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgY29tbWFuZCBleGVjdXRlZCBzdWNjZXNzZnVsbHksIHRoaXMgd2lsbCBjb250YWluIHRoZSBjb21tYW5kIHJlc3VsdFxuICAgKi9cbiAgZGF0YT86IE1vZGVsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VUeXBlcy50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogQ2xhc3MgZGVzaWduZWQgdG8gcmVnaXN0ZXIgYW5kIHVucmVnaXN0ZXIgaGFuZGxlcnMgZnJvbSBhIHVzZXIuIE9ubHkgdGhvc2UgZXZlbnRzXG4gKiB3aGljaCBhcmUgYWRkZWQgdmlhIEFkZE5ld0V2ZW50VHlwZSB3aWxsIGJlIHN1cHBvcnRlZCBieSB0aGlzIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LkV2ZW50TGlzdGVuZXJNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lck1hbmFnZXJzOiB7IFt0YWJsZWF1RXZlbnRUeXBlOiBzdHJpbmddOiBTaW5nbGVFdmVudE1hbmFnZXI7IH07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2VycyA9IHt9O1xuICB9XG5cbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLFxuICAgIGhhbmRsZXI6IENvbnRyYWN0LlRhYmxlYXVFdmVudEhhbmRsZXJGbik6IENvbnRyYWN0LlRhYmxlYXVFdmVudFVucmVnaXN0ZXJGbiB7XG4gICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnMuaGFzT3duUHJvcGVydHkoZXZlbnRUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLlVuc3VwcG9ydGVkRXZlbnROYW1lLCBgQ2Fubm90IGFkZCBldmVudCwgdW5zdXBwb3J0ZWQgZXZlbnQgdHlwZTogJHtldmVudFR5cGV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vyc1tldmVudFR5cGVdLmFkZEV2ZW50TGlzdGVuZXIoaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUsIGhhbmRsZXI6IENvbnRyYWN0LlRhYmxlYXVFdmVudEhhbmRsZXJGbik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzLmhhc093blByb3BlcnR5KGV2ZW50VHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5VbnN1cHBvcnRlZEV2ZW50TmFtZSwgYENhbm5vdCByZW1vdmUgZXZlbnQsIHVuc3VwcG9ydGVkIGV2ZW50IHR5cGU6ICR7ZXZlbnRUeXBlfWApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnNbZXZlbnRUeXBlXS5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZE5ld0V2ZW50VHlwZShldmVudE1hbmFnZXI6IFNpbmdsZUV2ZW50TWFuYWdlcik6IHZvaWQge1xuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vyc1tldmVudE1hbmFnZXIuZXZlbnRUeXBlXSA9IGV2ZW50TWFuYWdlcjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRMaXN0ZW5lck1hbmFnZXIudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgdGhlIFNpbmdsZUV2ZW50TWFuYWdlciBpbnRlcmZhY2UgZm9yIGEgc2luZ2xlIHR5cGUgb2YgVGFibGVhdSBldmVudFxuICpcbiAqIEB0ZW1wbGF0ZSBURXZlbnRUeXBlIFRoZSBUYWJsZWF1IGV2ZW50IHR5cGUgdGhpcyBjbGFzcyBzcGVjaWFsaXplc1xuICovXG5leHBvcnQgY2xhc3MgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxURXZlbnRUeXBlIGV4dGVuZHMgQ29udHJhY3QuVGFibGVhdUV2ZW50PiBpbXBsZW1lbnRzIFNpbmdsZUV2ZW50TWFuYWdlciB7XG4gIHByaXZhdGUgX2V2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZTtcbiAgcHJpdmF0ZSBfaGFuZGxlcnM6IEFycmF5PChldmVudE9iajogVEV2ZW50VHlwZSkgPT4gdm9pZD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGV2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSkge1xuICAgIHRoaXMuX2V2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICB0aGlzLl9oYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdldCBldmVudFR5cGUoKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGhhbmRsZXI6IChldmVudE9iajogVEV2ZW50VHlwZSkgPT4gdm9pZCk6IENvbnRyYWN0LlRhYmxlYXVFdmVudFVucmVnaXN0ZXJGbiB7XG4gICAgdGhpcy5faGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcjogKGV2ZW50T2JqOiBURXZlbnRUeXBlKSA9PiB2b2lkKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYmVmb3JlQ291bnQgPSB0aGlzLl9oYW5kbGVycy5sZW5ndGg7XG4gICAgdGhpcy5faGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVycy5maWx0ZXIoaCA9PiBoICE9PSBoYW5kbGVyKTtcbiAgICByZXR1cm4gYmVmb3JlQ291bnQgPiB0aGlzLl9oYW5kbGVycy5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgdHJpZ2dlckV2ZW50KGV2ZW50R2VuZXJhdG9yOiAoKSA9PiBURXZlbnRUeXBlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuX2hhbmRsZXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBldmVudE1vZGVsID0gZXZlbnRHZW5lcmF0b3IoKTtcbiAgICAgICAgaGFuZGxlcihldmVudE1vZGVsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gU2luY2UgdGhpcyBoYW5kbGVyIGNvdWxkIGJlIG91dHNpZGUgb3VyIGNvbnRyb2wsIGp1c3QgY2F0Y2ggYW55dGhpbmcgaXQgdGhyb3dzIGFuZCBjb250aW51ZSBvblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtIHtcbiAgLyoqXG4gICAqIHNlcmlhbGl6ZXMgdGhlIGRhdGUgaW50byB0aGUgZm9ybWF0IHRoYXQgdGhlIHNlcnZlciBleHBlY3RzLlxuICAgKiBAcGFyYW0gZGF0ZSB0aGUgZGF0ZSB0byBzZXJpYWxpemVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHllYXI6IG51bWJlciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aDogbnVtYmVyID0gZGF0ZS5nZXRVVENNb250aCgpICsgMTtcbiAgICBjb25zdCBkYXk6IG51bWJlciA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IGhoOiBudW1iZXIgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgY29uc3QgbW06IG51bWJlciA9IGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICAgIGNvbnN0IHNlYzogbnVtYmVyID0gZGF0ZS5nZXRVVENTZWNvbmRzKCk7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAke2hofToke21tfToke3NlY31gO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVCb29sZWFuRm9yUGxhdGZvcm0oYm9vbDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGJvb2wgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVOdW1iZXJGb3JQbGF0Zm9ybShudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIGlucHV0IGlzIGEgbnVtYmVyXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVOdW1iZXIoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgKGlucHV0KSA9PT0gJ251bWJlcicgfHwgaW5wdXQgaW5zdGFuY2VvZiBOdW1iZXI7XG4gIH1cbiAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIGlucHV0IGlzIGEgRGF0ZVxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlRGF0ZShpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRGF0ZTtcbiAgfVxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVTdHJpbmcoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgKGlucHV0KSA9PT0gJ3N0cmluZycgfHwgaW5wdXQgaW5zdGFuY2VvZiBTdHJpbmc7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlQm9vbChpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoaW5wdXQpID09PSAnYm9vbGVhbicgfHwgaW5wdXQgaW5zdGFuY2VvZiBCb29sZWFuO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZVBhcmFtdGVyVmFsdWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKFBhcmFtLmlzVHlwZU51bWJlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVOdW1iZXJGb3JQbGF0Zm9ybSh2YWx1ZSBhcyBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAoUGFyYW0uaXNUeXBlRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0odmFsdWUgYXMgRGF0ZSk7XG4gICAgfSBlbHNlIGlmIChQYXJhbS5pc1R5cGVCb29sKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFBhcmFtLnNlcmlhbGl6ZUJvb2xlYW5Gb3JQbGF0Zm9ybSh2YWx1ZSBhcyBib29sZWFuKTtcbiAgICB9IGVsc2UgaWYgKFBhcmFtLmlzVHlwZVN0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBVbmV4cGVjdGVkIGludmFsaWQgdmFsdWUgZm9yOiAke3ZhbHVlfWApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvUGFyYW0udHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFUYWJsZSB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8QXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPj4sXG4gICAgcHJpdmF0ZSBfY29sdW1uczogQXJyYXk8Q29udHJhY3QuQ29sdW1uPixcbiAgICBwcml2YXRlIF90b3RhbFJvd0NvdW50OiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfaXNTdW1tYXJ5RGF0YTogYm9vbGVhbixcbiAgICBwcml2YXRlIF9tYXJrc0luZm8/OiBBcnJheTxNYXJrSW5mbz4pIHtcbiAgICAvLyBUT0RPOiBnZXQgcmlkIG9mIHRoaXMgaW4gcmVkZXNpZ24uXG4gICAgdGhpcy5fbmFtZSA9IF9pc1N1bW1hcnlEYXRhID8gJ1N1bW1hcnkgRGF0YSBUYWJsZScgOiAnVW5kZXJseWluZyBEYXRhIFRhYmxlJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhKCk6IEFycmF5PEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sdW1ucygpOiBBcnJheTxDb250cmFjdC5Db2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFya3NJbmZvKCk6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtzSW5mbztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG90YWxSb3dDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJvd0NvdW50O1xuICB9XG5cbiAgcHVibGljIGdldCBpc1N1bW1hcnlEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1N1bW1hcnlEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXJrSW5mbyBpbXBsZW1lbnRzIENvbnRyYWN0Lk1hcmtJbmZvIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3R5cGU6IENvbnRyYWN0Lk1hcmtUeXBlLFxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfdHVwbGVJZD86IE51bWJlclxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5NYXJrVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgcHVibGljIGdldCB0dXBsZUlkKCk6IE51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R1cGxlSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbHVtbiBpbXBsZW1lbnRzIENvbnRyYWN0LkNvbHVtbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWVsZE5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9kYXRhVHlwZTogQ29udHJhY3QuRGF0YVR5cGUsIC8vIFRPRE86IHRoaXMgc2hvdWRsIGJlIGFuIGVudW0gdHlwZVxuICAgIHByaXZhdGUgX2lzUmVmZXJlbmNlZDogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pbmRleDogbnVtYmVyKSB7IH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVmZXJlbmNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWZlcmVuY2VkO1xuICB9XG5cbiAgcHVibGljIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YVZhbHVlIGltcGxlbWVudHMgQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92YWx1ZTogYW55LFxuICAgIHByaXZhdGUgX2Zvcm1hdHRlZFZhbHVlOiBzdHJpbmcpIHsgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1hdHRlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdHRlZFZhbHVlO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvR2V0RGF0YU1vZGVscy50cyIsIihmdW5jdGlvbiAoKSB7XG4gIHZhciB2YWxpZGF0b3IgPSBuZXcgUmVnRXhwKFwiXlthLXowLTldezh9LVthLXowLTldezR9LVthLXowLTldezR9LVthLXowLTldezR9LVthLXowLTldezEyfSRcIiwgXCJpXCIpO1xuXG4gIGZ1bmN0aW9uIGdlbihjb3VudCkge1xuICAgIHZhciBvdXQgPSBcIlwiO1xuICAgIGZvciAodmFyIGk9MDsgaTxjb3VudDsgaSsrKSB7XG4gICAgICBvdXQgKz0gKCgoMStNYXRoLnJhbmRvbSgpKSoweDEwMDAwKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgZnVuY3Rpb24gR3VpZChndWlkKSB7XG4gICAgaWYgKCFndWlkKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhcmd1bWVudDsgYHZhbHVlYCBoYXMgbm8gdmFsdWUuXCIpO1xuICAgICAgXG4gICAgdGhpcy52YWx1ZSA9IEd1aWQuRU1QVFk7XG4gICAgXG4gICAgaWYgKGd1aWQgJiYgZ3VpZCBpbnN0YW5jZW9mIEd1aWQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBndWlkLnRvU3RyaW5nKCk7XG5cbiAgICB9IGVsc2UgaWYgKGd1aWQgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGd1aWQpID09PSBcIltvYmplY3QgU3RyaW5nXVwiICYmIEd1aWQuaXNHdWlkKGd1aWQpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZ3VpZDtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgLy8gQ29tcGFyaW5nIHN0cmluZyBgdmFsdWVgIGFnYWluc3QgcHJvdmlkZWQgYGd1aWRgIHdpbGwgYXV0by1jYWxsXG4gICAgICAvLyB0b1N0cmluZyBvbiBgZ3VpZGAgZm9yIGNvbXBhcmlzb25cbiAgICAgIHJldHVybiBHdWlkLmlzR3VpZChvdGhlcikgJiYgdGhpcy52YWx1ZSA9PSBvdGhlcjtcbiAgICB9O1xuXG4gICAgdGhpcy5pc0VtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gR3VpZC5FTVBUWTtcbiAgICB9O1xuICAgIFxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgdGhpcy50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgR3VpZC5FTVBUWSA9IFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCI7XG5cbiAgR3VpZC5pc0d1aWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUgaW5zdGFuY2VvZiBHdWlkIHx8IHZhbGlkYXRvci50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgfTtcblxuICBHdWlkLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgR3VpZChbZ2VuKDIpLCBnZW4oMSksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMyldLmpvaW4oXCItXCIpKTtcbiAgfTtcblxuICBHdWlkLnJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBbZ2VuKDIpLCBnZW4oMSksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMyldLmpvaW4oXCItXCIpO1xuICB9O1xuXG4gIGlmKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEd1aWQ7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5HdWlkID0gR3VpZDtcbiAgfVxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9ndWlkL2d1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vRXZlbnRMaXN0ZW5lck1hbmFnZXInO1xuXG5pbXBvcnQgeyBTaGVldEltcGwgfSBmcm9tICcuL0ltcGwvU2hlZXRJbXBsJztcblxuZXhwb3J0IGNsYXNzIFNoZWV0IGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5TaGVldCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaGVldEltcGw6IFNoZWV0SW1wbCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0VHlwZSgpOiBDb250cmFjdC5TaGVldFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaXplKCk6IENvbnRyYWN0LlNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuc2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUGFyYW1ldGVyQXN5bmMocGFyYW1ldGVyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxDb250cmFjdC5QYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLmZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lLCB0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5QYXJhbWV0ZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5nZXRQYXJhbWV0ZXJzQXN5bmModGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NoZWV0LnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY29udmVydHMgZnJvbSBhIHNvdXJjZSBlbnVtIHZhbHVlIHRvIGRlc3RpbmF0aW9uIGVudW1cbiAqIHZhbHVlIGdpdmVuIGEgbWFwcGluZyBmcm9tIHNvdXJjZSB0byBkZXN0aW5hdGlvbiB3aGVuIGNvbnN0cnVjdGVkLlxuICpcbiAqIE5vdGU6IFRoaXMgZXhhY3Qgc2FtZSBjbGFzcyBpcyBkZWZpbmVkIGluIGFwaS1jb3JlLiAgR2l2ZW4gaXRzIHNtYWxsXG4gKiBuYXR1cmUsIGl0IGlzIG5vdCB3b3J0aCBoYXZpbmcgaW4gYSBzZXBhcmF0ZSBwcm9qZWN0IHRvIHNoYXJlIHRoaXMgYmV0d2VlblxuICogYXBpLWNvcmUgYW5kIGFwaS1zaGFyZWQuICBJZiBtb3JlIHV0aWxpdHkgZnVuY3Rpb25hbGl0eSBpcyBhZGRlZCB0aGF0IGlzIHVzZWQgYnkgYXBpLWNvcmVcbiAqIGFuZCBhcGktc2hhcmVkIGJ1dCBoYXMgbm8gb3RoZXIgZGVwZW5kZWNpZXMsIGEgdXRpbHRpdHkgcHJvamVjdCBtaWdodCBiZSBtZXJpdGVkLFxuICogYW5kIHRoaXMgY2xhc3MgY291bGQgYmUgbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnVtQ29udmVydGVyPFRTb3VyY2VUeXBlIGV4dGVuZHMgc3RyaW5nLCBURGVzdGluYXRpb25UeXBlPiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tYXBwaW5nczogeyBbZW51bVZhbDogc3RyaW5nXTogVERlc3RpbmF0aW9uVHlwZTsgfSxcbiAgICBwcml2YXRlIF9kZWZhdWx0VmFsPzogVERlc3RpbmF0aW9uVHlwZSkgeyB9XG5cbiAgcHVibGljIGNvbnZlcnQoZW51bVZhbDogVFNvdXJjZVR5cGUsIHRocm93SWZNaXNzaW5nPzogYm9vbGVhbik6IFREZXN0aW5hdGlvblR5cGUge1xuICAgIGlmICh0aGlzLl9tYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShlbnVtVmFsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcHBpbmdzW2VudW1WYWwgYXMgc3RyaW5nXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGVmYXVsdFZhbCAhPT0gdW5kZWZpbmVkICYmICF0aHJvd0lmTWlzc2luZykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWYWw7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBFbnVtIE1hcHBpbmcgbm90IGZvdW5kIGZvcjogJHtlbnVtVmFsfWApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FbnVtQ29udmVydGVyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1RXZlbnQge1xuICBwcml2YXRlIF90eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNoZWV0UGF0aCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1BhcmFtZXRlcnNTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hlZXRJbmZvSW1wbDogU2hlZXRJbmZvSW1wbCkge1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRUeXBlKCk6IENvbnRyYWN0LlNoZWV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbmZvSW1wbC5zaGVldFBhdGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihwYXJhbWV0ZXJOYW1lLCAncGFyYW1ldGVyTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZmluZFBhcmFtZXRlckJ5TmFtZUFzeW5jKHBhcmFtZXRlck5hbWUsIHNoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzQXN5bmMoc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5QYXJhbWV0ZXI+PiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzaGVldCwgJ3NoZWV0Jyk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8UGFyYW1ldGVyc1NlcnZpY2U+KFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRQYXJhbWV0ZXJzRm9yU2hlZXRBc3luYyh0aGlzLnNoZWV0UGF0aCwgc2hlZXQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1U2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVNoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdVdvcmtzaGVldEV2ZW50IGV4dGVuZHMgVGFibGVhdVNoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1V29ya3NoZWV0RXZlbnQge1xuICBwdWJsaWMgZ2V0IHdvcmtzaGVldCgpOiBDb250cmFjdC5Xb3Jrc2hlZXQge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQ7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSwgcHJvdGVjdGVkIF93b3Jrc2hlZXQ6IENvbnRyYWN0LldvcmtzaGVldCkge1xuICAgIHN1cGVyKHR5cGUsIF93b3Jrc2hlZXQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVdvcmtzaGVldEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFdmVudCB9IGZyb20gJy4vVGFibGVhdUV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFRhYmxlYXVTaGVldEV2ZW50IGV4dGVuZHMgVGFibGVhdUV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuVGFibGVhdVNoZWV0RXZlbnQge1xuICBwcml2YXRlIF9zaGVldDogQ29udHJhY3QuU2hlZXQ7XG5cbiAgcHVibGljIGdldCBzaGVldCgpOiBDb250cmFjdC5TaGVldCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0O1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5fc2hlZXQgPSBzaGVldDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVTaGVldEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBWaXN1YWxJZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL1NlcnZpY2VSZWdpc3RyeSc7XG5cbi8qKlxuICogRGVmaW5lcyB3aGljaCB0eXBlIG9mIGdldERhdGEgY2FsbCB0byBtYWtlLlxuICovXG5leHBvcnQgZW51bSBHZXREYXRhVHlwZSB7XG4gIFN1bW1hcnkgPSAnc3VtbWFyeScsXG4gIFVuZGVybHlpbmcgPSAndW5kZXJseWluZydcbn1cblxuLyoqXG4gKiBTZXJ2aWNlIGZvciBpbXBsZW1lbnRpbmcgdGhlIGxvZ2ljIGZvciB2YXJpb3VzIGdldERhdGEgY2FsbHNcbiAqXG4gKiBAaW50ZXJmYWNlIEdldERhdGFTZXJ2aWNlXG4gKiBAZXh0ZW5kcyB7QXBpU2VydmljZX1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHZXREYXRhU2VydmljZSBleHRlbmRzIEFwaVNlcnZpY2Uge1xuICAvKipcbiAgICogR2V0cyB0aGUgdW5kZXJseWluZyBkYXRhIGZvciBhIHBhcnRpY3VsYXIgdmlzdWFsXG4gICAqXG4gICAqIEBwYXJhbSB7VmlzdWFsSWR9IHZpc3VhbElkICBUaGUgdmlzdWFsIHRvIGdldCBkYXRhIGZvclxuICAgKiBAcGFyYW0ge0dldERhdGFUeXBlfSBnZXRUeXBlICBUaGUgdHlwZSBvZiBnZXREYXRhIGNhbGwgdG8gbWFrZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZUFsaWFzZXMgIFdoZXRoZXIgb3Igbm90IGFsaWFzZXMgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBpZ25vcmVTZWxlY3Rpb24gIFdoZXRoZXIgb3Igbm90IHNlbGVjdGlvbiBzaG91bGQgYmUgaWdub3JlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVBbGxDb2x1bW5zICBTaG91bGQgYWxsIGNvbHVtbnMgYmUgaW5jbHVkZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFJvd3MgIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gcmV0dXJuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT59ICBEYXRhIHRhYmxlIHdpdGggdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqL1xuICBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKFxuICAgIHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBnZXRUeXBlOiBHZXREYXRhVHlwZSxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIGlnbm9yZVNlbGVjdGlvbjogYm9vbGVhbixcbiAgICBpbmNsdWRlQWxsQ29sdW1uczogYm9vbGVhbixcbiAgICBtYXhSb3dzOiBudW1iZXIpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBtYXJrcyBmb3IgYSBnaXZlbiB2aXN1YWxcbiAgICpcbiAgKiBAcGFyYW0ge1Zpc3VhbElkfSB2aXN1YWxJZCAgVGhlIHZpc3VhbCB0byBnZXQgZGF0YSBmb3JcbiAgKiBAcmV0dXJucyB7UHJvbWlzZTxBY3RpdmVNYXJrcz59ICBDb2xsZWN0aW9uIG9mIGRhdGEgdGFibGVzIHdpdGggdGhlIGFjdGl2ZSBtYXJrc1xuICAqL1xuICBnZXRTZWxlY3RlZE1hcmtzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgbWFya3MgZm9yIGEgZ2l2ZW4gdmlzdWFsXG4gICAqXG4gICogQHBhcmFtIHtWaXN1YWxJZH0gdmlzdWFsSWQgIFRoZSB2aXN1YWwgdG8gZ2V0IGRhdGEgZm9yXG4gICogQHJldHVybnMge1Byb21pc2U8QWN0aXZlTWFya3M+fSAgQ29sbGVjdGlvbiBvZiBkYXRhIHRhYmxlcyB3aXRoIHRoZSBhY3RpdmUgbWFya3NcbiAgKi9cbiAgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPjtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFzb3VyY2VJZCAgVGhlIGlkIG9mIHRoZSBkYXRhc291cmNlIHRvIGdldCBkYXRhIGZvclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZUFsaWFzZXMgIFdoZXRoZXIgYWxpYXMgdmFsdWVzIHNob3VsZCBiZSBpZ25vcmVkIGluIHRoZSByZXR1cm5lZCBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhSb3dzIFRoZSBtYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIHJldHJpZXZlXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gY29sdW1uc1RvSW5jbHVkZSAgQ29sbGVjdGlvbiBvZiBjb2x1bW4gY2FwdGlvbnMgd2hpY2ggc2hvdWxkIGJlIHJldHVybmVkLiBFbXB0eSBtZWFucyBhbGwgY29sdW1uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+fSAgRGF0YSB0YWJsZSB3aXRoIHRoZSByZXF1ZXN0ZWQgZGF0YVxuICAgKi9cbiAgZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICBkYXRhc291cmNlSWQ6IHN0cmluZyxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcixcbiAgICBjb2x1bW5zVG9JbmNsdWRlOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvR2V0RGF0YVNlcnZpY2UudHMiLCIvKipcbiAqIFRoaXMgaXMgeW91ciBtYWluLiBUaGlzIGlzIHdoZXJlIHlvdSByZS1leHBvcnQgZXZlcnl0aGluZyB5b3Ugd2FudCB0byBiZSBwdWJsaWNseSBhdmFpbGFibGUuXG4gKlxuICogVGhlIGJ1aWxkIGVuZm9yY2VzIHRoYXQgdGhlIGZpbGUgaGFzIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGdsb2JhbCB2YXJpYWJsZSB0aGF0IGlzIGV4cG9ydGVkLlxuICovXG5cbi8vIER1ZSB0byB0aGUgd2F5IHdlIGNvbmZpZ3VyZWQgd2VicGFjaywgd2Ugc2hvdWxkIGJlIGV4cG9ydGluZyB0aGluZ3Mgd2hpY2ggd2lsbCBiZSB1bmRlclxuLy8gYSBnbG9iYWwgdmFyaWFibGUgY2FsbGVkIFwidGFibGVhdVwiLiBFeHBvcnQgZXZlcnl0aGluZyB3ZSB3YW50IHRvIGJlIHZpc2libGUgdW5kZXIgdGFibGVhdVxuLy8gZnJvbSB0aGlzIGZpbGUuXG5cbmltcG9ydCB7IEV4dGVuc2lvbnNJbXBsIH0gZnJvbSAnLi9FeHRlbnNpb25zQXBpL0ltcGwvRXh0ZW5zaW9uc0ltcGwnO1xuaW1wb3J0IHsgRXh0ZW5zaW9ucyB9IGZyb20gJy4vRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMnO1xuXG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi9BcGlTaGFyZWQnO1xuXG5kZWNsYXJlIHZhciBFWFRFTlNJT05fQVBJX1ZFUlNJT05fTlVNQkVSOiBzdHJpbmc7XG5WZXJzaW9uTnVtYmVyLlNldFZlcnNpb25OdW1iZXIodHlwZW9mIEVYVEVOU0lPTl9BUElfVkVSU0lPTl9OVU1CRVIgIT09ICd1bmRlZmluZWQnID8gRVhURU5TSU9OX0FQSV9WRVJTSU9OX05VTUJFUiA6ICcwLjAuMCcpO1xuXG5jb25zdCBleHRlbnNpb25JbXBsID0gbmV3IEV4dGVuc2lvbnNJbXBsKCk7XG5leHBvcnQgY29uc3QgZXh0ZW5zaW9ucyA9IG5ldyBFeHRlbnNpb25zKGV4dGVuc2lvbkltcGwpO1xuXG4vLyBFeHBvcnQgRW51bXNcbi8vIFRoZXNlIHNob3cgdXAgdW5kZXIgdGhlIHRhYmxlYXUgb2JqZWN0LiBJLmUuIHRhYmxlYXUuRXh0ZW5zaW9uQ29udGV4dC5TZXJ2ZXJcbmV4cG9ydCB7XG4gIEV4dGVuc2lvbkNvbnRleHQsXG4gIEV4dGVuc2lvbk1vZGUsXG4gIEFuYWx5dGljc09iamVjdFR5cGUsXG4gIENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlLFxuICBFbmNvZGluZ1R5cGUsXG4gIEVycm9yQ29kZXMsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJEb21haW5UeXBlLFxuICBGaWx0ZXJUeXBlLFxuICBGaWx0ZXJVcGRhdGVUeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uLFxuICBNYXJrVHlwZSxcbiAgUGFyYW1ldGVyVmFsdWVUeXBlLFxuICBQZXJpb2RUeXBlLFxuICBRdWlja1RhYmxlQ2FsY1R5cGUsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUsXG4gIFNoZWV0VHlwZSxcbiAgU29ydERpcmVjdGlvbixcbiAgVGFibGVhdUV2ZW50VHlwZSxcbiAgVHJlbmRMaW5lTW9kZWxUeXBlXG59IGZyb20gJy4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9FeHRlbnNpb25zQXBpLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgQ29udGV4dE1lbnVFdmVudCxcbiAgRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbyxcbiAgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvLFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5LFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIsXG4gIE5vdGlmaWNhdGlvbklkLFxuICBTaGVldFBhdGgsXG4gIElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04sXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeSxcbiAgRGFzaGJvYXJkLFxuICBEYXNoYm9hcmRJbXBsLFxuICBkb0Nyb3NzRnJhbWVCb290c3RyYXAsXG4gIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMsXG4gIFNlcnZpY2VOYW1lc1xufSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250ZW50IH0gZnJvbSAnLi4vTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50JztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vTmFtZXNwYWNlcy9FbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL05hbWVzcGFjZXMvU2V0dGluZ3MnO1xuaW1wb3J0IHsgVUkgfSBmcm9tICcuLi9OYW1lc3BhY2VzL1VJJztcbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IEluaXRpYWxpemF0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0luaXRpYWxpemF0aW9uU2VydmljZSc7XG5pbXBvcnQgeyByZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyB9IGZyb20gJy4uL1NlcnZpY2VzL1JlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzJztcbmltcG9ydCB7IFNldHRpbmdzSW1wbCB9IGZyb20gJy4vU2V0dGluZ3NJbXBsJztcbmltcG9ydCB7IFVJSW1wbCB9IGZyb20gJy4vVUlJbXBsJztcblxuZXhwb3J0IHR5cGUgQ2FsbGJhY2tNYXAgPSB7IFtrZXk6IHN0cmluZ106ICgpID0+IHt9IH07XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb25zSW1wbCB7XG4gIHByaXZhdGUgX2luaXRpYWxpemF0aW9uUHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+O1xuXG4gIHB1YmxpYyBkYXNoYm9hcmRDb250ZW50OiBEYXNoYm9hcmRDb250ZW50O1xuICBwdWJsaWMgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xuICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzO1xuICBwdWJsaWMgdWk6IFVJO1xuXG4gIHB1YmxpYyBpbml0aWFsaXplQXN5bmMoaXNFeHRlbnNpb25EaWFsb2c6IGJvb2xlYW4sIGNvbnRleHRNZW51Q2FsbGJhY2tzPzogQ2FsbGJhY2tNYXApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6YXRpb25Qcm9taXNlKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXphdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gRmlyc3QgdGhpbmcgd2Ugd2FudCB0byBkbyBpcyBjaGVjayB0byBzZWUgaWYgdGhlcmUgaXMgYSBkZXNrdG9wIGRpc3BhdGNoZXIgYWxyZWFkeSByZWdpc3RlcmVkIGZvciB1c1xuICAgICAgICBpZiAoSW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyLmhhc0Rlc2t0b3BBcGlEaXNwYXRjaGVyUHJvbWlzZSgpKSB7XG4gICAgICAgICAgLy8gUnVubmluZyBpbiBkZXNrdG9wLCB1c2UgdGhpcyBwcm9taXNlXG4gICAgICAgICAgY29uc3QgZGVza3RvcERpc3BhdGNoZXJQcm9taXNlID0gSW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyLmdldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZSgpO1xuXG4gICAgICAgICAgZGVza3RvcERpc3BhdGNoZXJQcm9taXNlLnRoZW4oKGRpcGF0Y2hlckZhY3RvcnkpID0+XG4gICAgICAgICAgICB0aGlzLm9uRGlzcGF0Y2hlclJlY2VpdmVkKGRpcGF0Y2hlckZhY3RvcnksIGlzRXh0ZW5zaW9uRGlhbG9nLCBjb250ZXh0TWVudUNhbGxiYWNrcykpXG4gICAgICAgICAgICAudGhlbigob3BlblBheWxvYWQpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShvcGVuUGF5bG9hZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXZSBtdXN0IGJlIHJ1bm5pbmcgaW4gc2VydmVyLCBzbyB3ZSBzaG91bGQgdHJ5IHRvIGtpY2sgb2YgdGhlIHNlcnZlciBkaXNwYXRjaGVyIGJvb3RzdHJhcHBpbmdcbiAgICAgICAgICBjb25zdCBvbkRpc3BhdGNoZXJSZWNlaXZlZENhbGxiYWNrID0gdGhpcy5vbkRpc3BhdGNoZXJSZWNlaXZlZC5iaW5kKHRoaXMpO1xuICAgICAgICAgIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcCh3aW5kb3csIElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04pLnRoZW4oKGZhY3Rvcnk6IEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvbkRpc3BhdGNoZXJSZWNlaXZlZENhbGxiYWNrKGZhY3RvcnksIGlzRXh0ZW5zaW9uRGlhbG9nLCBjb250ZXh0TWVudUNhbGxiYWNrcyk7XG4gICAgICAgICAgfSkudGhlbigob3BlblBheWxvYWQpID0+IHsgcmVzb2x2ZShvcGVuUGF5bG9hZCk7IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6YXRpb25Qcm9taXNlO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRpc3BhdGNoZXJSZWNlaXZlZChcbiAgICBkaXNwYXRjaGVyRmFjdG9yeTogSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSxcbiAgICBpc0V4dGVuc2lvbkRpYWxvZzogYm9vbGVhbixcbiAgICBjb250ZXh0TWVudUZ1bmN0aW9ucz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICAgIGNvbnN0IGRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyRmFjdG9yeShJTlRFUk5BTF9DT05UUkFDVF9WRVJTSU9OKTtcblxuICAgIC8vIENhbGwgdG8gcmVnaXN0ZXIgYWxsIHRoZSBzZXJ2aWNlcyB3aGljaCB3aWxsIHVzZSB0aGUgbmV3bHkgaW5pdGlhbGl6ZWQgZGlzcGF0Y2hlclxuICAgIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMoZGlzcGF0Y2hlcik7XG4gICAgcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMoZGlzcGF0Y2hlcik7XG5cbiAgICAvLyBHZXQgdGhlIGluaXRpYWxpemF0aW9uIHNlcnZpY2UgYW5kIGluaXRpYWxpemUgdGhpcyBleHRlbnNpb25cbiAgICBjb25zdCBpbml0aWFsaXphdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxJbml0aWFsaXphdGlvblNlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5Jbml0aWFsaXphdGlvblNlcnZpY2UpO1xuXG4gICAgY29uc3QgY2FsbGJhY2tNYXBLZXlzID0gKGNvbnRleHRNZW51RnVuY3Rpb25zKSA/IE9iamVjdC5rZXlzKGNvbnRleHRNZW51RnVuY3Rpb25zKSA6IFtdO1xuICAgIHJldHVybiBpbml0aWFsaXphdGlvblNlcnZpY2UuaW5pdGlhbGl6ZURhc2hib2FyZEV4dGVuc2lvbnNBc3luYyhpc0V4dGVuc2lvbkRpYWxvZywgY2FsbGJhY2tNYXBLZXlzKS50aGVuPHN0cmluZz4ocmVzdWx0ID0+IHtcbiAgICAgIGlmICghcmVzdWx0LmV4dGVuc2lvbkluc3RhbmNlLmxvY2F0b3IuZGFzaGJvYXJkUGF0aCkge1xuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1VuZXhwZWN0ZWQgZXJyb3IgZHVyaW5nIGluaXRpYWxpemF0aW9uLicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhc2hib2FyZENvbnRlbnQgPSB0aGlzLmluaXRpYWxpemVEYXNoYm9hcmRDb250ZW50KHJlc3VsdC5leHRlbnNpb25EYXNoYm9hcmRJbmZvLFxuICAgICAgICByZXN1bHQuZXh0ZW5zaW9uSW5zdGFuY2UubG9jYXRvci5kYXNoYm9hcmRQYXRoKTtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQocmVzdWx0LmV4dGVuc2lvbkVudmlyb25tZW50KTtcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLmluaXRpYWxpemVTZXR0aW5ncyhyZXN1bHQuZXh0ZW5zaW9uU2V0dGluZ3NJbmZvKTtcbiAgICAgIHRoaXMudWkgPSBuZXcgVUkobmV3IFVJSW1wbCgpKTtcblxuICAgICAgLy8gQWZ0ZXIgaW5pdGlhbGl6YXRpb24gaGFzIGNvbXBsZXRlZCwgc2V0dXAgbGlzdGVuZXJzIGZvciB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zIHRoYXRcbiAgICAgIC8vIGFyZSBtZWFudCB0byBiZSB0cmlnZ2VyZWQgd2hlbmV2ZXIgYSBjb250ZXh0IG1lbnUgaXRlbSBpcyBjbGlja2VkLlxuICAgICAgdGhpcy5pbml0aWFsaXplQ29udGV4dE1lbnVDYWxsYmFja3MoY29udGV4dE1lbnVGdW5jdGlvbnMpO1xuXG4gICAgICAvLyBJbiB0aGUgbm9ybWFsIGluaXRpYWxpemF0aW9uIGNhc2UsIHRoaXMgd2lsbCBiZSBhbiBlbXB0eSBzdHJpbmcuICBXaGVuIHJldHVybmluZyBmcm9tIGluaXRpYWxpemVBc3luYyB0byB0aGVcbiAgICAgIC8vIGRldmVsb3Blciwgd2UganVzdCBpbmdvcmUgdGhhdCBzdHJpbmcuICBJbiB0aGUgY2FzZSBvZiBpbml0aWFsaXppbmcgZnJvbSBhbiBleHRlbnNpb24gZGlhbG9nLCB0aGlzIHN0cmluZ1xuICAgICAgLy8gaXMgYW4gb3B0aW9uYWwgcGF5bG9hZCBzZW50IGZyb20gdGhlIHBhcmVudCBleHRlbnNpb24uXG4gICAgICByZXR1cm4gcmVzdWx0LmV4dGVuc2lvbkRpYWxvZ1BheWxvYWQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVEYXNoYm9hcmRDb250ZW50KGluZm86IEV4dGVuc2lvbkRhc2hib2FyZEluZm8sIHNoZWV0UGF0aDogU2hlZXRQYXRoKTogRGFzaGJvYXJkQ29udGVudCB7XG4gICAgY29uc3QgZGFzaGJvYXJkSW1wbCA9IG5ldyBEYXNoYm9hcmRJbXBsKGluZm8sIHNoZWV0UGF0aCk7XG4gICAgY29uc3QgZGFzaGJvYXJkID0gbmV3IERhc2hib2FyZChkYXNoYm9hcmRJbXBsKTtcbiAgICByZXR1cm4gbmV3IERhc2hib2FyZENvbnRlbnQoZGFzaGJvYXJkKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVNldHRpbmdzKHNldHRpbmdzSW5mbzogRXh0ZW5zaW9uU2V0dGluZ3NJbmZvKTogU2V0dGluZ3Mge1xuICAgIGNvbnN0IHNldHRpbmdzSW1wbCA9IG5ldyBTZXR0aW5nc0ltcGwoc2V0dGluZ3NJbmZvKTtcbiAgICByZXR1cm4gbmV3IFNldHRpbmdzKHNldHRpbmdzSW1wbCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVDb250ZXh0TWVudUNhbGxiYWNrcyhjb250ZXh0TWVudUZ1bmN0aW9ucz86IENhbGxiYWNrTWFwKTogdm9pZCB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuXG4gICAgLy8gVW5yZWdpc3RlciBmdW5jdGlvbiBub3QgdXNlZCBzaW5jZSB0aGVzZSBub3RpZmljYXRpb25zIHNob3VsZCBiZVxuICAgIC8vIG9ic2VydmVkIGZvciB0aGUgZnVsbCBsaWZldGltZSBvZiB0aGUgZXh0ZW5zaW9uLlxuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLkNvbnRleHRNZW51Q2xpY2ssIChtb2RlbCkgPT4ge1xuICAgICAgLy8gTGV0IHRocm91Z2ggYW55IGNvbnRleHQgbWVudSBldmVudCwgdGhlc2UgYXJlIGFscmVhZHkgZmlsdGVyZWQgb24gYXBpLWNvcmVcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSBleHRlbnNpb24gbG9jYXRvci5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIChldmVudDogQ29udGV4dE1lbnVFdmVudCkgPT4ge1xuICAgICAgLy8gRXhlY3V0ZSB0aGUgZnVuY3Rpb24gYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29udGV4dCBtZW51IElEXG4gICAgICBpZiAoY29udGV4dE1lbnVGdW5jdGlvbnMpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0TWVudUZ1bmN0aW9uc1tldmVudC5pZF0pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYFJlY2VpdmVkIHVuZXhwZWN0ZWQgY29udGV4dCBtZW51IElkIGZyb20gZXZlbnQ6ICR7ZXZlbnQuaWR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0TWVudUZ1bmN0aW9uc1tldmVudC5pZF0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvRXh0ZW5zaW9uc0ltcGwudHMiLCIvLyBBbGwgZW51bSB2YWx1ZXMgbWFkZSBhdmFpbGFibGUgdG8gRXh0ZW5zaW9ucyBkZXZlbG9wZXJzLlxuLy8gRW51bXMgc2hvdWxkIGJlIGtlcHQgaW4gYWxwaGFiZXRpY2FsIG9yZGVyLlxuXG4vKipcbiAqIFRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSBFeHRlbnNpb25zIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICovXG5leHBvcnQgZW51bSBFeHRlbnNpb25Db250ZXh0IHtcbiAgRGVza3RvcCA9ICdkZXNrdG9wJyxcbiAgU2VydmVyID0gJ3NlcnZlcidcbn1cblxuLyoqXG4gKiBUaGUgbW9kZSBpbiB3aGljaCB0aGUgRXh0ZW5zaW9ucyBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5zaW9uTW9kZSB7XG4gIEF1dGhvcmluZyA9ICdhdXRob3JpbmcnLFxuICBWaWV3aW5nID0gJ3ZpZXdpbmcnXG59XG5cbmV4cG9ydCBlbnVtIEFuYWx5dGljc09iamVjdFR5cGUge1xuICBDbHVzdGVyID0gJ2NsdXN0ZXInLFxuICBGb3JlY2FzdCA9ICdmb3JlY2FzdCcsXG4gIFRyZW5kTGluZSA9ICd0cmVuZC1saW5lJ1xufVxuXG5leHBvcnQgZW51bSBDb2x1bW5UeXBlIHtcbiAgRGlzY3JldGUgPSAnZGlzY3JldGUnLFxuICBDb250aW51b3VzID0gJ2NvbnRpbnVvdXMnXG59XG5cbi8qKlxuICogV2hhdCB0aGUgb2JqZWN0IHJlcHJlc2VudHMgaW4gYSBkYXNoYm9hcmQuXG4gKi9cbmV4cG9ydCBlbnVtIERhc2hib2FyZE9iamVjdFR5cGUge1xuICBCbGFuayA9ICdibGFuaycsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnLFxuICBRdWlja0ZpbHRlciA9ICdxdWljay1maWx0ZXInLFxuICBQYXJhbWV0ZXJDb250cm9sID0gJ3BhcmFtZXRlci1jb250cm9sJyxcbiAgUGFnZUZpbHRlciA9ICdwYWdlLWZpbHRlcicsXG4gIExlZ2VuZCA9ICdsZWdlbmQnLFxuICBUaXRsZSA9ICd0aXRsZScsXG4gIFRleHQgPSAndGV4dCcsXG4gIEltYWdlID0gJ2ltYWdlJyxcbiAgV2ViUGFnZSA9ICd3ZWItcGFnZScsXG4gIEV4dGVuc2lvbiA9ICdleHRlbnNpb24nXG59XG5cbi8qKlxuICogVGhlIGRpZmZlcmVudCB0eXBlcyBvZiBkYXRhIGEgdmFsdWUgY2FuIGhhdmVcbiAqL1xuZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgSW50ID0gJ2ludCcsXG4gIEZsb2F0ID0gJ2Zsb2F0JyxcbiAgQm9vbCA9ICdib29sJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgRGF0ZVRpbWUgPSAnZGF0ZS10aW1lJyxcbiAgU3BhdGlhbCA9ICdzcGF0aWFsJ1xufVxuXG4vKipcbiAqIFZhbGlkIGRhdGUgcmFuZ2VzIGZvciBhIHJlbGF0aXZlIGRhdGUgZmlsdGVyLlxuICovXG5leHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgTGFzdCA9ICdsYXN0JyxcbiAgTGFzdE4gPSAnbGFzdC1uJyxcbiAgTmV4dCA9ICduZXh0JyxcbiAgTmV4dE4gPSAnbmV4dC1uJyxcbiAgQ3VycmVudCA9ICdjdXJyZW50JyxcbiAgVG9EYXRlID0gJ3RvLWRhdGUnXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XG4gIENvbHVtbiA9ICdjb2x1bW4nLFxuICBSb3cgPSAncm93JyxcbiAgUGFnZSA9ICdwYWdlJyxcbiAgRmlsdGVyID0gJ2ZpbHRlcicsXG4gIE1hcmtzVHlwZSA9ICdtYXJrcy10eXBlJyxcbiAgTWVhc3VyZVZhbHVlcyA9ICdtZWFzdXJlLXZhbHVlcycsXG4gIENvbG9yID0gJ2NvbG9yJyxcbiAgU2l6ZSA9ICdzaXplJyxcbiAgTGFiZWwgPSAnbGFiZWwnLFxuICBEZXRhaWwgPSAnZGV0YWlsJyxcbiAgVG9vbHRpcCA9ICd0b29sdGlwJyxcbiAgU2hhcGUgPSAnc2hhcGUnLFxuICBQYXRoID0gJ3BhdGgnLFxuICBBbmdsZSA9ICdhbmdsZSdcbn1cblxuLyoqXG4gKiBBbGwgZXJyb3IgY29kZXMgdXNlZCBieSB0aGUgRXh0ZW5zaW9ucyBBUEkuXG4gKi9cbmV4cG9ydCBlbnVtIEVycm9yQ29kZXMge1xuICAvKipcbiAgICogVGhyb3duIHdoZW4gY2FsbGVyIGF0dGVtcHRzIHRvIGV4ZWN1dGUgY29tbWFuZCBiZWZvcmUgaW5pdGlhbGl6YXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICovXG4gIEFQSU5vdEluaXRpYWxpemVkID0gJ2FwaS1ub3QtaW5pdGlhbGl6ZWQnLFxuICAvKipcbiAgICogT25seSBvbmUgZGlhbG9nIGNhbiBiZSBvcGVuZWQgYXQgdGltZSB3aXRoIHRoZSBVSSBuYW1lc3BhY2UgZnVuY3Rpb25hbGl0eS5cbiAgICovXG4gIERpYWxvZ0FscmVhZHlPcGVuID0gJ2RpYWxvZy1hbHJlYWR5LW9wZW4nLFxuICAvKipcbiAgICogVGhlIG9wZW4gZGlhbG9nIHdhcyBjbG9zZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICBEaWFsb2dDbG9zZWRCeVVzZXIgPSAnZGlhbG9nLWNsb3NlZC1ieS11c2VyJyxcbiAgLyoqXG4gICAqIEFuIGVycm9yIG9jY3VycmVkIHdpdGhpbiB0aGUgVGFibGVhdSBFeHRlbnNpb25zIEFQSS4gQ29udGFjdCBUYWJsZWF1IFN1cHBvcnQuXG4gICAqL1xuICBJbnRlcm5hbEVycm9yID0gJ2ludGVybmFsLWVycm9yJyxcbiAgLyoqXG4gICAqIEEgZGlhbG9nIG11c3Qgc3RhcnQgb24gdGhlIHNhbWUgZG9tYWluIGFzIHRoZSBwYXJlbnQgZXh0ZW5pb24uXG4gICAqL1xuICBJbnZhbGlkRG9tYWluRGlhbG9nID0gJ2ludmFsaWQtZGlhbG9nLWRvbWFpbicsXG4gIC8qKlxuICAgKiBBIHBhcmFtZXRlciBpcyBub3QgdGhlIGNvcnJlY3QgZGF0YSB0eXBlIG9yIGZvcm1hdC4gVGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlciBpcyBzcGVjaWZpZWQgaW4gdGhlIEVycm9yLm1lc3NhZ2UgZmllbGQuXG4gICAqL1xuICBJbnZhbGlkUGFyYW1ldGVyID0gJ2ludmFsaWQtcGFyYW1ldGVyJyxcbiAgLyoqXG4gICAqIENhbiBvY2N1ciBpZiB0aGUgZXh0ZW5zaW9uIGludGVyYWN0cyB3aXRoIGEgZmlsdGVyIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSB3b3Jrc2hlZXQuXG4gICAqL1xuICBNaXNzaW5nRmlsdGVyID0gJ21pc3NpbmctZmlsdGVyJyxcbiAgLyoqXG4gICAqIENhbiBvY2N1ciBpZiB0aGUgZXh0ZW5zaW9uIGludGVyYWN0cyB3aXRoIGEgcGFyYW1ldGVyIHRoYXQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSB3b3Jrc2hlZXQuXG4gICAqL1xuICBNaXNzaW5nUGFyYW1ldGVyID0gJ21pc3NpbmctcGFyYW1ldGVyJyxcbiAgLyoqXG4gICAqIEludGVybmFsIFNlcnZlciBFcnJvclxuICAgKi9cbiAgU2VydmVyRXJyb3IgPSAnc2VydmVyLWVycm9yJyxcbiAgLyoqXG4gICAqIERldmVsb3BlciBjYW5ub3Qgc2F2ZSBzZXR0aW5ncyB3aGlsZSBhbm90aGVyIHNhdmUgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBTZXR0aW5nU2F2ZUluUHJvZ3Jlc3MgPSAnc2V0dGluZy1zYXZlLWluLXByb2dyZXNzJyxcbiAgLyoqXG4gICAqIEFuIHVua25vd24gZXZlbnQgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZSBjYWxsIHRvIFZpei5hZGRFdmVudExpc3RlbmVyb3IgVml6LnJlbW92ZUV2ZW50TGlzdGVuZXIuXG4gICAqL1xuICBVbnN1cHBvcnRlZEV2ZW50TmFtZSA9ICd1bnN1cHBvcnRlZC1ldmVudC1uYW1lJyxcbiAgLyoqXG4gICAqIEEgbWV0aG9kIHdhcyB1c2VkIGZvciBhIHR5cGUgb2YgZGF0YXNvdXJjZSB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCB0aGF0IG1ldGhvZCAoc2VlIGdldEFjdGl2ZVRhYmxlc0FzeW5jIGZvciBhbiBleGFtcGxlKVxuICAgKi9cbiAgVW5zdXBwb3J0ZWRNZXRob2RGb3JEYXRhU291cmNlVHlwZSA9ICd1bnN1cHBvcnRlZC1tZXRob2QtZm9yLWRhdGEtc291cmNlLXR5cGUnXG59XG5cbi8qKlxuICogIFR5cGUgb2YgYWdncmVnYXRpb24gb24gYSBmaWVsZC5cbiAqL1xuZXhwb3J0IGVudW0gRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICBTdW0gPSAnc3VtJyxcbiAgQXZnID0gJ2F2ZycsXG4gIE1pbiA9ICdtaW4nLFxuICBNYXggPSAnbWF4JyxcbiAgU3RkZXYgPSAnc3RkZXYnLFxuICBTdGRldnAgPSAnc3RkZXZwJyxcbiAgVmFyID0gJ3ZhcicsXG4gIFZhcnAgPSAndmFycCcsXG4gIENvdW50ID0gJ2NvdW50JyxcbiAgQ291bnRkID0gJ2NvdW50ZCcsXG4gIE1lZGlhbiA9ICdtZWRpYW4nLFxuICBBdHRyID0gJ2F0dHInLFxuICBOb25lID0gJ25vbmUnLFxuICBZZWFyID0gJ3llYXInLFxuICBRdHIgPSAncXRyJyxcbiAgTW9udGggPSAnbW9udGgnLFxuICBEYXkgPSAnZGF5JyxcbiAgSG91ciA9ICdob3VyJyxcbiAgTWludXRlID0gJ21pbnV0ZScsXG4gIFNlY29uZCA9ICdzZWNvbmQnLFxuICBXZWVrID0gJ3dlZWsnLFxuICBXZWVrZGF5ID0gJ3dlZWtkYXknLFxuICBNb250aFllYXIgPSAnbW9udGgteWVhcicsXG4gIE1keSA9ICdtZHknLFxuICBFbmQgPSAnZW5kJyxcbiAgVHJ1bmNZZWFyID0gJ3RydW5jLXllYXInLFxuICBUcnVuY1F0ciA9ICd0cnVuYy1xdHInLFxuICBUcnVuY01vbnRoID0gJ3RydW5jLW1vbnRoJyxcbiAgVHJ1bmNXZWVrID0gJ3RydW5jLXdlZWsnLFxuICBUcnVuY0RheSA9ICd0cnVuYy1kYXknLFxuICBUcnVuY0hvdXIgPSAndHJ1bmMtaG91cicsXG4gIFRydW5jTWludXRlID0gJ3RydW5jLW1pbnV0ZScsXG4gIFRydW5jU2Vjb25kID0gJ3RydW5jLXNlY29uZCcsXG4gIFF1YXJ0MSA9ICdxdWFydDEnLFxuICBRdWFydDMgPSAncXVhcnQzJyxcbiAgU2tld25lc3MgPSAnc2tld25lc3MnLFxuICBLdXJ0b3NpcyA9ICdrdXJ0b3NpcycsXG4gIEluT3V0ID0gJ2luLW91dCcsXG4gIFVzZXIgPSAndXNlcidcbn1cblxuLyoqXG4gKiBSb2xlIG9mIGEgZmllbGQuXG4gKi9cbmV4cG9ydCBlbnVtIEZpZWxkUm9sZVR5cGUge1xuICBEaW1lbnNpb24gPSAnZGltZW5zaW9uJyxcbiAgTWVhc3VyZSA9ICdtZWFzdXJlJyxcbiAgVW5rbm93biA9ICd1bmtub3duJ1xufVxuXG4vKipcbiAqIEFuIGVudW1lcmF0aW9uIG9mIHRoZSB2YWxpZCB0eXBlcyBvZiBmaWx0ZXJzIHRoYXQgY2FuIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclR5cGUge1xuICBDYXRlZ29yaWNhbCA9ICdjYXRlZ29yaWNhbCcsXG4gIFJhbmdlID0gJ3JhbmdlJyxcbiAgSGllcmFyY2hpY2FsID0gJ2hpZXJhcmNoaWNhbCcsXG4gIFJlbGF0aXZlRGF0ZSA9ICdyZWxhdGl2ZS1kYXRlJ1xufVxuXG4vKipcbiAqIFRoZSBkaWZmZXJlbnQgdXBkYXRlIHR5cGVzIGZvciBhcHBseWluZyBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVXBkYXRlVHlwZSB7XG4gIEFkZCA9ICdhZGQnLFxuICBBbGwgPSAnYWxsJyxcbiAgUmVwbGFjZSA9ICdyZXBsYWNlJyxcbiAgUmVtb3ZlID0gJ3JlbW92ZSdcbn1cblxuLyoqXG4gKiBUaGUgZG9tYWluIHR5cGUgZm9yIGEgZmlsdGVyXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlckRvbWFpblR5cGUge1xuICAvKipcbiAgICogVGhlIGRvbWFpbiB2YWx1ZXMgdGhhdCBhcmUgcmVsZXZhbnQgdG8gdGhlIHNwZWNpZmllZCBmaWx0ZXJcbiAgICogaS5lLiB0aGUgZG9tYWluIGlzIHJlc3RyaWN0ZWQgYnkgYSBwcmV2aW91cyBmaWx0ZXJcbiAgICovXG4gIFJlbGV2YW50ID0gJ3JlbGV2YW50JyxcbiAgLyoqXG4gICAqIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIGRvbWFpbiB2YWx1ZXMgZnJvbSBkYXRhYmFzZVxuICAgKi9cbiAgRGF0YWJhc2UgPSAnZGF0YWJhc2UnXG59XG5cbi8qKlxuICogVGhlIG9wdGlvbiBmb3Igc3BlY2lmeWluZyB3aGljaCB2YWx1ZXMgdG8gaW5jbHVkZSBmb3IgZmlsdGVyaW5nXG4gKiBJbmRpY2F0ZXMgd2hhdCB0byBkbyB3aXRoIG51bGwgdmFsdWVzIGZvciBhIGdpdmVuIGZpbHRlciBvciBtYXJrIHNlbGVjdGlvbiBjYWxsLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJOdWxsT3B0aW9uIHtcbiAgTnVsbFZhbHVlcyA9ICdudWxsLXZhbHVlcycsXG4gIE5vbk51bGxWYWx1ZXMgPSAnbm9uLW51bGwtdmFsdWVzJyxcbiAgQWxsVmFsdWVzID0gJ2FsbC12YWx1ZXMnXG59XG5cbi8qKlxuICogVHlwZSBvZiBtYXJrIGZvciBhIGdpdmVuIG1hcmtzIGNhcmQgaW4gYSB2aXouXG4gKi9cbmV4cG9ydCBlbnVtIE1hcmtUeXBlIHtcbiAgQmFyID0gJ2JhcicsXG4gIExpbmUgPSAnbGluZScsXG4gIEFyZWEgPSAnYXJlYScsXG4gIFNxdWFyZSA9ICdzcXVhcmUnLFxuICBDaXJjbGUgPSAnY2lyY2xlJyxcbiAgU2hhcGUgPSAnc2hhcGUnLFxuICBUZXh0ID0gJ3RleHQnLFxuICBNYXAgPSAnbWFwJyxcbiAgUGllID0gJ3BpZScsXG4gIEdhbnR0QmFyID0gJ2dhbnR0LWJhcicsXG4gIFBvbHlnb24gPSAncG9seWdvbidcbn1cblxuLyoqXG4gKiBBbiBlbnVtZXJhdGlvbiBkZXNjcmliaW5nIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgYWxsb3dhYmxlIHZhbHVlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgcmVzdHJpY3RpbmcgdGhlIGRvbWFpbiBvZiBhIHBhcmFtZXRlclxuICovXG5leHBvcnQgZW51bSBQYXJhbWV0ZXJWYWx1ZVR5cGUge1xuICBBbGwgPSAnYWxsJyxcbiAgTGlzdCA9ICdsaXN0JyxcbiAgUmFuZ2UgPSAncmFuZ2UnXG59XG5cbi8qKlxuICogRGF0ZSBwZXJpb2QgdXNlZCBpbiBmaWx0ZXJzIGFuZCBpbiBwYXJhbWV0ZXJzLlxuICovXG5leHBvcnQgZW51bSBQZXJpb2RUeXBlIHtcbiAgWWVhcnMgPSAneWVhcnMnLFxuICBRdWFydGVycyA9ICdxdWFydGVycycsXG4gIE1vbnRocyA9ICdtb250aHMnLFxuICBXZWVrcyA9ICd3ZWVrcycsXG4gIERheXMgPSAnZGF5cycsXG4gIEhvdXJzID0gJ2hvdXJzJyxcbiAgTWludXRlcyA9ICdtaW51dGVzJyxcbiAgU2Vjb25kcyA9ICdzZWNvbmRzJ1xufVxuXG5leHBvcnQgZW51bSBRdWlja1RhYmxlQ2FsY1R5cGUge1xuICBSdW5uaW5nVG90YWwgPSAncnVubmluZy10b3RhbCcsXG4gIERpZmZlcmVuY2UgPSAnZGlmZmVyZW5jZScsXG4gIFBlcmNlbnREaWZmZXJlbmNlID0gJ3BlcmNlbnQtZGlmZmVyZW5jZScsXG4gIFBlcmNlbnRPZlRvdGFsID0gJ3BlcmNlbnQtb2YtdG90YWwnLFxuICBSYW5rID0gJ3JhbmsnLFxuICBQZXJjZW50aWxlID0gJ3BlcmNlbnRpbGUnLFxuICBNb3ZpbmdBdmVyYWdlID0gJ21vdmluZy1hdmVyYWdlJyxcbiAgWVREVG90YWwgPSAneXRkLXRvdGFsJyxcbiAgQ29tcG91bmRHcm93dGhSYXRlID0gJ2NvbXBvdW5kLWdyb3d0aC1yYXRlJyxcbiAgWWVhck92ZXJZZWFyR3Jvd3RoID0gJ3llYXItb3Zlci15ZWFyLWdyb3d0aCcsXG4gIFlUREdyb3d0aCA9ICd5dGQtZ3Jvd3RoJyxcbiAgVW5kZWZpbmVkID0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBFbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSBzZWxlY3Rpb24gdHlwZSBmb3Igc2VsZWN0IG1hcmtzIGFwaS5cbiAqL1xuZXhwb3J0IGVudW0gU2VsZWN0aW9uVXBkYXRlVHlwZSB7XG4gIFJlcGxhY2UgPSAnc2VsZWN0LXJlcGxhY2UnLFxuICBBZGQgPSAnc2VsZWN0LWFkZCcsXG4gIFJlbW92ZSA9ICdzZWxlY3QtcmVtb3ZlJ1xufVxuXG4vKipcbiAqIFRoZSB0eXBlIG9mIHNoZWV0IGEgU2hlZXQgb2JqZWN0IHJlcHJlc2VudHNcbiAqL1xuZXhwb3J0IGVudW0gU2hlZXRUeXBlIHtcbiAgRGFzaGJvYXJkID0gJ2Rhc2hib2FyZCcsXG4gIFN0b3J5ID0gJ3N0b3J5JyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCdcbn1cblxuZXhwb3J0IGVudW0gU29ydERpcmVjdGlvbiB7XG4gIEluY3JlYXNpbmcgPSAnaW5jcmVhc2luZycsXG4gIERlY3JlYXNpbmcgPSAnZGVjcmVhc2luZydcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY2VydGFpbiB0eXBlIG9mIGV2ZW50IHdoaWNoIGNhbiBiZSBsaXN0ZW5lZCBmb3JcbiAqL1xuZXhwb3J0IGVudW0gVGFibGVhdUV2ZW50VHlwZSB7XG4gIC8qKiBSYWlzZWQgd2hlbiBhbnkgZmlsdGVyIGhhcyBjaGFuZ2VkIHN0YXRlLiovXG4gIEZpbHRlckNoYW5nZWQgPSAnZmlsdGVyLWNoYW5nZWQnLFxuXG4gIC8qKiBUaGUgc2VsZWN0ZWQgbWFya3Mgb24gYSB2aXN1YWxpemF0aW9uIGhhcyBjaGFuZ2VkICovXG4gIE1hcmtTZWxlY3Rpb25DaGFuZ2VkID0gJ21hcmstc2VsZWN0aW9uLWNoYW5nZWQnLFxuXG4gIC8qKiBBIHBhcmFtZXRlciBoYXMgaGFkIGl0cyB2YWx1ZSBtb2RpZmllZCAqL1xuICBQYXJhbWV0ZXJDaGFuZ2VkID0gJ3BhcmFtZXRlci1jaGFuZ2VkJyxcblxuICAvKiogU2V0dGluZ3MgaGF2ZSBiZWVuIGNoYW5nZWQgZm9yIHRoaXMgZXh0ZW5zaW9uLiAqL1xuICBTZXR0aW5nc0NoYW5nZWQgPSAnc2V0dGluZ3MtY2hhbmdlZCdcbn1cblxuZXhwb3J0IGVudW0gVHJlbmRMaW5lTW9kZWxUeXBlIHtcbiAgTGluZWFyID0gJ2xpbmVhcicsXG4gIExvZ2FyaXRobWljID0gJ2xvZ2FyaXRobWljJyxcbiAgRXhwb25lbnRpYWwgPSAnZXhwb25lbnRpYWwnLFxuICBQb2x5bm9taWFsID0gJ3BvbHlub21pYWwnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0V4dGVybmFsQ29udHJhY3QvRW51bXMudHMiLCJleHBvcnQgZW51bSBFeHRlbnNpb25Db250ZXh0IHtcbiAgRGVza3RvcCA9ICdkZXNrdG9wJyxcbiAgU2VydmVyID0gJ3NlcnZlcicsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGVudW0gRXh0ZW5zaW9uTW9kZSB7XG4gIEF1dGhvcmluZyA9ICdhdXRob3JpbmcnLFxuICBWaWV3aW5nID0gJ3ZpZXdpbmcnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICBEaXNjcmV0ZSA9ICdkaXNjcmV0ZScsXG4gIENvbnRpbnVvdXMgPSAnY29udGludW91cydcbn1cblxuZXhwb3J0IGVudW0gRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gIEJsYW5rID0gJ2JsYW5rJyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCcsXG4gIFF1aWNrRmlsdGVyID0gJ3F1aWNrLWZpbHRlcicsXG4gIFBhcmFtZXRlckNvbnRyb2wgPSAncGFyYW1ldGVyLWNvbnRyb2wnLFxuICBQYWdlRmlsdGVyID0gJ3BhZ2UtZmlsdGVyJyxcbiAgTGVnZW5kID0gJ2xlZ2VuZCcsXG4gIFRpdGxlID0gJ3RpdGxlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgSW1hZ2UgPSAnaW1hZ2UnLFxuICBXZWJQYWdlID0gJ3dlYi1wYWdlJyxcbiAgRXh0ZW5zaW9uID0gJ2V4dGVuc2lvbidcbn1cblxuZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgSW50ID0gJ2ludCcsXG4gIEZsb2F0ID0gJ2Zsb2F0JyxcbiAgQm9vbCA9ICdib29sJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgRGF0ZVRpbWUgPSAnZGF0ZS10aW1lJyxcbiAgU3BhdGlhbCA9ICdzcGF0aWFsJ1xufVxuXG5leHBvcnQgZW51bSBFbmNvZGVkRGF0YVR5cGUge1xuICBOdW1iZXIgPSAnbnVtYmVyJyxcbiAgU3RyaW5nID0gJ3N0cmluZycsXG4gIERhdGUgPSAnZGF0ZScsXG4gIEJvb2xlYW4gPSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIElOSVRJQUxJWkFUSU9OX0VSUk9SID0gJ2luaXRpYWxpemF0aW9uLWVycm9yJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnaW50ZXJuYWwtZXJyb3InLFxuICBNSVNTSU5HX0VOVU1fTUFQUElORyA9ICdtaXNzaW5nLWVudW0tbWFwcGluZycsXG4gIE1JU1NJTkdfUEFSQU1FVEVSID0gJ21pc3NpbmctcGFyYW1ldGVyJyxcbiAgUEVSTUlTU0lPTl9ERU5JRUQgPSAncGVybWlzc2lvbi1kZW5pZWQnLFxuICBQUkVTX01PREVMX1BBUlNJTkdfRVJST1IgPSAncHJlcy1tb2RlbC1wYXJzaW5nLWVycm9yJyxcbiAgVkVSU0lPTl9OT1RfQ09ORklHVVJFRCA9ICd2ZXJzaW9uLW5vdC1jb25maWd1cmVkJyxcbiAgVU5LTk9XTl9WRVJCX0lEID0gJ3Vua25vd24tdmVyYi1pZCdcbn1cblxuZXhwb3J0IGVudW0gRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICBTdW0gPSAnc3VtJyxcbiAgQXZnID0gJ2F2ZycsXG4gIE1pbiA9ICdtaW4nLFxuICBNYXggPSAnbWF4JyxcbiAgU3RkZXYgPSAnc3RkZXYnLFxuICBTdGRldnAgPSAnc3RkZXZwJyxcbiAgVmFyID0gJ3ZhcicsXG4gIFZhcnAgPSAndmFycCcsXG4gIENvdW50ID0gJ2NvdW50JyxcbiAgQ291bnRkID0gJ2NvdW50ZCcsXG4gIE1lZGlhbiA9ICdtZWRpYW4nLFxuICBBdHRyID0gJ2F0dHInLFxuICBOb25lID0gJ25vbmUnLFxuICBZZWFyID0gJ3llYXInLFxuICBRdHIgPSAncXRyJyxcbiAgTW9udGggPSAnbW9udGgnLFxuICBEYXkgPSAnZGF5JyxcbiAgSG91ciA9ICdob3VyJyxcbiAgTWludXRlID0gJ21pbnV0ZScsXG4gIFNlY29uZCA9ICdzZWNvbmQnLFxuICBXZWVrID0gJ3dlZWsnLFxuICBXZWVrZGF5ID0gJ3dlZWtkYXknLFxuICBNb250aFllYXIgPSAnbW9udGgteWVhcicsXG4gIE1keSA9ICdtZHknLFxuICBFbmQgPSAnZW5kJyxcbiAgVHJ1bmNZZWFyID0gJ3RydW5jLXllYXInLFxuICBUcnVuY1F0ciA9ICd0cnVuYy1xdHInLFxuICBUcnVuY01vbnRoID0gJ3RydW5jLW1vbnRoJyxcbiAgVHJ1bmNXZWVrID0gJ3RydW5jLXdlZWsnLFxuICBUcnVuY0RheSA9ICd0cnVuYy1kYXknLFxuICBUcnVuY0hvdXIgPSAndHJ1bmMtaG91cicsXG4gIFRydW5jTWludXRlID0gJ3RydW5jLW1pbnV0ZScsXG4gIFRydW5jU2Vjb25kID0gJ3RydW5jLXNlY29uZCcsXG4gIFF1YXJ0MSA9ICdxdWFydDEnLFxuICBRdWFydDMgPSAncXVhcnQzJyxcbiAgU2tld25lc3MgPSAnc2tld25lc3MnLFxuICBLdXJ0b3NpcyA9ICdrdXJ0b3NpcycsXG4gIEluT3V0ID0gJ2luLW91dCcsXG4gIFVzZXIgPSAndXNlcidcbn1cblxuZXhwb3J0IGVudW0gRmllbGRSb2xlVHlwZSB7XG4gIERpbWVuc2lvbiA9ICdkaW1lbnNpb24nLFxuICBNZWFzdXJlID0gJ21lYXN1cmUnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbi8qKlxuICogIFRoZSBkaWZmZXJlbnQgdXBkYXRlIHR5cGVzIGZvciBhcHBseWluZyBmaWx0ZXIuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclVwZGF0ZVR5cGUge1xuICBBZGQgPSAnYWRkJyxcbiAgQWxsID0gJ2FsbCcsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG4gIFJlbW92ZSA9ICdyZW1vdmUnXG59XG5cbmV4cG9ydCBlbnVtIFNoZWV0VHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBTdG9yeSA9ICdzdG9yeScsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnXG59XG5cbmV4cG9ydCBlbnVtIERvbWFpblJlc3RyaWN0aW9uVHlwZSB7XG4gIEFsbCA9ICdhbGwnLFxuICBMaXN0ID0gJ2xpc3QnLFxuICBSYW5nZSA9ICdyYW5nZSdcbn1cblxuZXhwb3J0IGVudW0gRGF0ZVN0ZXBQZXJpb2Qge1xuICBZZWFycyA9ICd5ZWFycycsXG4gIFF1YXJ0ZXJzID0gJ3F1YXJ0ZXJzJyxcbiAgTW9udGhzID0gJ21vbnRocycsXG4gIFdlZWtzID0gJ3dlZWtzJyxcbiAgRGF5cyA9ICdkYXlzJyxcbiAgSG91cnMgPSAnaG91cnMnLFxuICBNaW51dGVzID0gJ21pbnV0ZXMnLFxuICBTZWNvbmRzID0gJ3NlY29uZHMnXG59XG5cbi8qKlxuICogVGhlIG9wdGlvbiBmb3Igc3BlY2lmeWluZyB3aGljaCB2YWx1ZXMgdG8gaW5jbHVkZSBmb3IgZmlsdGVyaW5nLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJOdWxsT3B0aW9uIHtcbiAgTnVsbFZhbHVlcyA9ICdudWxsdmFsdWVzJyxcbiAgTm9uTnVsbFZhbHVlcyA9ICdub25udWxsdmFsdWVzJyxcbiAgQWxsVmFsdWVzID0gJ2FsbHZhbHVlcydcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBmaWx0ZXIgZG9tYWluXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlckRvbWFpblR5cGUge1xuICBSZWxldmFudCA9ICdyZWxldmFudCcsXG4gIERhdGFiYXNlID0gJ2RhdGFiYXNlJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHNlbGVjdGlvbiB0eXBlIGZvciBzZWxlY3QgbWFya3MgYXBpLlxuICovXG5leHBvcnQgZW51bSBTZWxlY3Rpb25VcGRhdGVUeXBlIHtcbiAgUmVwbGFjZSA9ICdzZWxlY3QtcmVwbGFjZScsXG4gIEFkZCA9ICdzZWxlY3QtYWRkJyxcbiAgUmVtb3ZlID0gJ3NlbGVjdC1yZW1vdmUnXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgaW5jbHVkZWQgdmFsdWVzIHR5cGUgZm9yIHJhbmdlIHNlbGVjdGlvbi5cbiAqL1xuZXhwb3J0IGVudW0gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMge1xuICBJbmNsdWRlTnVsbCA9ICdpbmNsdWRlLW51bGwnLFxuICBJbmNsdWRlTm9uTnVsbCA9ICdpbmNsdWRlLW5vbi1udWxsJyxcbiAgSW5jbHVkZUFsbCA9ICdpbmNsdWRlLWFsbCdcbn1cblxuLyoqXG4gKiBUeXBlIG9mIG1hcmsgZm9yIGEgZ2l2ZW4gbWFya3MgY2FyZCBpbiBhIHZpei5cbiAqL1xuZXhwb3J0IGVudW0gTWFya1R5cGUge1xuICAgIEJhciA9ICdiYXInLFxuICAgIExpbmUgPSAnbGluZScsXG4gICAgQXJlYSA9ICdhcmVhJyxcbiAgICBTcXVhcmUgPSAnc3F1YXJlJyxcbiAgICBDaXJjbGUgPSAnY2lyY2xlJyxcbiAgICBTaGFwZSA9ICdzaGFwZScsXG4gICAgVGV4dCA9ICd0ZXh0JyxcbiAgICBNYXAgPSAnbWFwJyxcbiAgICBQaWUgPSAncGllJyxcbiAgICBHYW50dEJhciA9ICdnYW50dC1iYXInLFxuICAgIFBvbHlnb24gPSAncG9seWdvbicsXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgdHlwZSBvZiBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVHlwZSB7XG4gIENhdGVnb3JpY2FsID0gJ2NhdGVnb3JpY2FsJyxcbiAgUmFuZ2UgPSAncmFuZ2UnLFxuICBSZWxhdGl2ZURhdGUgPSAncmVsYXRpdmVEYXRlJyxcbiAgSGllcmFyY2hpY2FsID0gJ2hpZXJhcmNoaWNhbCdcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSBEYXRlUmFuZ2VUeXBlIG9mIGEgcmVsYXRpdmUgZGF0ZSBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRGF0ZVJhbmdlVHlwZSB7XG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGxhc3QgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBMYXN0ID0gJ2xhc3QnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBsYXN0IE4gZGF5cywgd2Vla3MsIG1vbnRocywgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBMYXN0TiA9ICdsYXN0TicsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIG5leHQgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBOZXh0ID0gJ25leHQnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBuZXh0IE4gZGF5cywgd2Vla3MsIG1vbnRocywgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBOZXh0TiA9ICduZXh0TicsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGN1cnJlbnQgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBDdXJyZW50ID0gJ2N1cnJlbnQnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIGV2ZXJ5dGhpbmcgdXAgdG8gYW5kIGluY2x1ZGluZyB0aGUgY3VycmVudCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIFRvRGF0ZSA9ICd0b0RhdGUnXG59XG5cbi8qKlxuICogVXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGxhdW5jaGluZyBvZiBhbiBleHRlbnNpb24gZGlhbG9nIHN1Y2NlZWRlZCBvciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCB7XG4gIERpYWxvZ0FscmVhZHlPcGVuID0gJ2RpYWxvZy1hbHJlYWR5LW9wZW4nLFxuICBJbnZhbGlkRG9tYWluID0gJ2ludmFsaWQtZG9tYWluJyxcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9FbnVtcy50cyIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vY29udHJhY3QvTW9kZWxzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vY29udHJhY3QvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBWZXJiSWQgfSBmcm9tICcuLi9jb250cmFjdC9WZXJicyc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi9WZXJzaW9uTnVtYmVyJztcblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uSGFuZGxlciA9IChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBFeGVjdXRlUGFyYW1ldGVycyB7XG4gIFtrZXk6IHN0cmluZ106IE1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVSZXNwb25zZSB7XG4gIHJlc3VsdDogTW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uIHtcbiAgbm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkO1xuICBkYXRhOiBNb2RlbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbEFwaURpc3BhdGNoZXIge1xuICBleGVjdXRlKHZlcmI6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT47XG4gIHJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZDtcbiAgdW5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQ7XG59XG5cbi8vIFRoaXMgZmFjdG9yeSBmdW5jdGlvbiB3aWxsIGdldCBjYWxsZWQgZnJvbSB0aGUgZXh0ZXJuYWwgc2lkZSBvZiB0aGluZ3MgdG8gaW5zdGFudGlhdGUgYSBwcm9wZXJseVxuLy8gdmVyc2lvbmVkIEFQSSBkaXNwYXRjaGVyIHdoaWNoIHRoaXMgcGFydGljdWxhciB2ZXJzaW9uIG9mIGV4dGVybmFsIGtub3dzIGhvdyB0byB1c2VcbmV4cG9ydCB0eXBlIEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnkgPVxuICAoaW50ZXJuYWxDb250cmFjdFZlcnNpb246IFZlcnNpb25OdW1iZXIpID0+IEludGVybmFsQXBpRGlzcGF0Y2hlcjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXI6IFByb21pc2U8SW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT47IH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIge1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGVza3RvcERpc3BhdGNoZXJQcm9taXNlKCk6IFByb21pc2U8SW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4ge1xuICAgIHJldHVybiB3aW5kb3cuX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaGFzRGVza3RvcEFwaURpc3BhdGNoZXJQcm9taXNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIUludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5nZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoZGlzcGF0Y2hlcjogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5Pik6IHZvaWQge1xuICAgIHdpbmRvdy5fX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlci50cyIsImV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvbklkIHtcbiAgU2VsZWN0ZWRNYXJrc0NoYW5nZWQgPSAnc2VsZWN0ZWQtbWFya3MtY2hhbmdlZCcsXG4gIFBhcmFtZXRlckNoYW5nZWQgPSAncGFyYW1ldGVyLWNoYW5nZWQnLFxuICBGaWx0ZXJDaGFuZ2VkID0gJ2ZpbHRlci1jaGFuZ2VkJyxcbiAgRXh0ZW5zaW9uRGlhbG9nVXBkYXRlID0gJ2V4dGVuc2lvbi1kaWFsb2ctdXBkYXRlJyxcbiAgU2V0dGluZ3NDaGFuZ2VkID0gJ3NldHRpbmdzLWNoYW5nZWQnLFxuICBDb250ZXh0TWVudUNsaWNrID0gJ2NvbnRleHQtbWVudS1jbGljaycsXG4gIFRlc3RDb252ZXJzaW9uTm90aWZpY2F0aW9uID0gJ3Rlc3QtY29udmVyc2lvbi1ub3RpZmljYXRpb24nXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMudHMiLCJleHBvcnQgZW51bSBQYXJhbWV0ZXJJZCB7XG4gIEV4dGVuc2lvbkxvY2F0b3IgPSAnZXh0ZW5zaW9uLWxvY2F0b3InLFxuICBFeHRlbnNpb25Cb290c3RyYXBJbmZvID0gJ2V4dGVuc2lvbi1ib290c3RyYXAtaW5mbycsXG4gIEV4dGVuc2lvblNldHRpbmdzSW5mbyA9ICdleHRlbnNpb24tc2V0dGluZ3MtaW5mbycsXG4gIFZpc3VhbElkID0gJ3Zpc3VhbC1pZCcsXG4gIFNoZWV0UGF0aCA9ICdzaGVldC1wYXRoJyxcbiAgSWdub3JlQWxpYXNlcyA9ICdpZ25vcmUtYWxpYXNlcycsXG4gIElnbm9yZVNlbGVjdGlvbiA9ICdpZ25vcmUtc2VsZWN0aW9uJyxcbiAgSW5jbHVkZUFsbENvbHVtbnMgPSAnaW5jbHVkZS1hbGwtY29sdW1ucycsXG4gIE1heFJvd3MgPSAnbWF4LXJvd3MnLFxuICBVbmRlcmx5aW5nRGF0YVRhYmxlID0gJ3VuZGVybHlpbmctZGF0YS10YWJsZScsXG4gIFVuZGVybHlpbmdTdW1tYXJ5RGF0YVRhYmxlID0gJ3VuZGVybHlpbmctc3VtbWFyeS1kYXRhLXRhYmxlJyxcbiAgRGF0YVNvdXJjZURhdGFUYWJsZSA9ICdkYXRhLXNvdXJjZS1kYXRhLXRhYmxlJyxcbiAgU2V0dGluZ3NWYWx1ZXMgPSAnc2V0dGluZ3MtdmFsdWVzJyxcbiAgU2VsZWN0ZWREYXRhID0gJ3NlbGVjdGVkLWRhdGEnLFxuICBIaWdobGlnaHRlZERhdGEgPSAnaGlnaGxpZ2h0ZWQtZGF0YScsXG5cbiAgLy8gRmlsdGVyIFBhcmFtc1xuICBGaWVsZE5hbWUgPSAnZmllbGQtbmFtZScsXG4gIEZpbHRlclZhbHVlcyA9ICdmaWx0ZXItdmFsdWVzJyxcbiAgRmlsdGVyVXBkYXRlVHlwZSA9ICdmaWx0ZXItdXBkYXRlLXR5cGUnLFxuICBJc0V4Y2x1ZGVNb2RlID0gJ2lzLWV4Y2x1ZGUnLFxuICBGaWx0ZXJSYW5nZU1pbiA9ICdmaWx0ZXItcmFuZ2UtbWluJyxcbiAgRmlsdGVyUmFuZ2VNYXggPSAnZmlsdGVyLXJhbmdlLW1heCcsXG4gIEZpbHRlclJhbmdlTnVsbE9wdGlvbiA9ICdmaWx0ZXItcmFuZ2UtbnVsbC1vcHRpb24nLFxuICBXb3Jrc2hlZXRGaWx0ZXJzID0gJ3dvcmtzaGVldC1maWx0ZXJzJyxcbiAgRmllbGRJZCA9ICdmaWVsZC1pZCcsXG4gIERvbWFpblR5cGUgPSAnZG9tYWluLXR5cGUnLFxuICBDYXRlZ29yaWNhbERvbWFpbiA9ICdjYXRlZ29yaWNhbC1kb21haW4nLFxuICBRdWFudGl0YXRpdmVEb21haW4gPSAncXVhbnRpdGF0aXZlLWRtYWluJyxcblxuICBXb3Jrc2hlZXROYW1lID0gJ3dvcmtzaGVldC1uYW1lJyxcbiAgRGFzaGJvYXJkTmFtZSA9ICdkYXNoYm9hcmQnLFxuXG4gIFBhcmFtZXRlckluZm8gPSAncGFyYW1ldGVyLWluZm8nLFxuICBQYXJhbWV0ZXJJbmZvcyA9ICdwYXJhbWV0ZXItaW5mb3MnLFxuICBQYXJhbWV0ZXJDYXB0aW9uID0gJ3BhcmVtZXRlci1jYXB0aW9uJyxcbiAgUGFyYW1ldGVyRmllbGROYW1lID0gJ3BhcmFtZXRlci1maWVsZC1uYW1lJyxcbiAgUGFyYW1ldGVyVmFsdWUgPSAncGFyYW1ldGVyLXZhbHVlJyxcbiAgU2VsZWN0aW9uID0gJ3NlbGVjdGlvbicsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUgPSAnc2VsZWN0aW9uVXBkYXRlVHlwZScsXG4gIEhpZXJWYWxTZWxlY3Rpb25Nb2RlbHMgPSAnaGllcmFyY2hpY2FsVmFsdWVTZWxlY3Rpb25Nb2RlbHMnLFxuICBRdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzID0gJ3F1YW50YXRpdmVSYW5nZVNlbGVjdGlvbk1vZGVscycsXG4gIERpbVZhbFNlbGVjdGlvbk1vZGVscyA9ICdkaW1lbnNpb25WYWx1ZVNlbGVjdGlvbk1vZGVscycsXG5cbiAgRGF0YVNvdXJjZUlkID0gJ2RhdGEtc291cmNlLWlkJyxcbiAgRGF0YVNjaGVtYSA9ICdkYXRhLXNjaGVtYScsXG4gIERhdGFTb3VyY2VOYW1lID0gJ2RhdGEtc291cmNlLW5hbWUnLFxuICBDb2x1bW5zVG9JbmNsdWRlID0gJ2NvbHVtbnMtdG8taW5jbHVkZScsXG4gIEpvaW5EZXNjcmlwdGlvbiA9ICdqb2luLWRlc2NyaXB0aW9uJyxcbiAgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyaWVzID0gJ2Nvbm5lY3Rpb24tZGVzY3JpcHRpb24tc3VtbWFyaWVzJyxcblxuICBFeHRlbnNpb25EaWFsb2dVcmwgPSAnZXh0ZW5zaW9uLWRpYWxvZy11cmwnLFxuICBFeHRlbnNpb25EaWFsb2dQYXlsb2FkID0gJ2V4dGVuc2lvbi1kaWFsb2ctcGF5bG9hZCcsXG4gIElzRXh0ZW5zaW9uRGlhbG9nID0gJ2lzLWV4dGVuc2lvbi1kaWFsb2cnLFxuICBFeHRlbnNpb25EaWFsb2dIID0gJ2V4dGVuc2lvbi1kaWFsb2ctaGVpZ2h0JyxcbiAgRXh0ZW5zaW9uRGlhbG9nVyA9ICdleHRlbnNpb24tZGlhbG9nLXdpZHRoJyxcbiAgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0ID0gJ2V4dGVuc2lvbi1kaWFsb2ctcmVzdWx0JyxcblxuICBFeHRlbnNpb25Db250ZXh0TWVudUlkcyA9ICdleHRlbnNpb24tY29udGV4dC1tZW51LWlkcycsXG5cbiAgVGVzdENvbnZlcnNpb25QYXJhbWV0ZXIgPSAndGVzdC1jb252ZXJzaW9uLXBhcmFtZXRlcidcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvUGFyYW1ldGVycy50cyIsIi8vIERlY2xhcmUgdGhpcyBrZXkgdHlwZSBhbmQgZXhwb3J0IHRoZSBOb3RpZmljYXRpb25JZCB0byBtYWtlIHRoaXMgYmVoYXZlIGxpa2UgYSBzdHJpbmcgZW51bVxuZXhwb3J0IGVudW0gVmVyYklkIHtcbiAgQXBwbHlDYXRlZ29yaWNhbEZpbHRlciA9ICdjYXRlZ29yaWNhbC1maWx0ZXInLFxuICBBcHBseVJhbmdlRmlsdGVyID0gJ3JhbmdlLWZpbHRlcicsXG4gIENsZWFyRmlsdGVyID0gJ2NsZWFyLWZpbHRlcicsXG4gIEluaXRpYWxpemVFeHRlbnNpb24gPSAnaW5pdGlhbGl6ZS1leHRlbnNpb24nLFxuICBHZXREYXRhU3VtbWFyeURhdGEgPSAnZ2V0LXN1bW1hcnktZGF0YScsXG4gIEdldFVuZGVybHlpbmdEYXRhID0gJ2dldC11bmRlcmx5aW5nLWRhdGEnLFxuICBHZXREYXRhU291cmNlRGF0YSA9ICdnZXQtZGF0YXNvdXJjZS1kYXRhJyxcbiAgU2F2ZUV4dGVuc2lvblNldHRpbmdzID0gJ3NhdmUtZXh0ZW5zaW9uLXNldHRpbmdzJyxcbiAgR2V0U2VsZWN0ZWRNYXJrcyA9ICdnZXQtc2VsZWN0ZWQtbWFya3MnLFxuICBHZXRIaWdobGlnaHRlZE1hcmtzID0gJ2dldC1oaWdobGlnaHRlZC1tYXJrcycsXG4gIEdldFBhcmFtZXRlcnNGb3JTaGVldCA9ICdnZXQtcGFyYW1ldGVycy1mb3Itc2hlZXQnLFxuICBGaW5kUGFyYW1ldGVyID0gJ2ZpbmQtcGFyYW1ldGVyJyxcbiAgQ2hhbmdlUGFyYW1ldGVyVmFsdWUgPSAnY2hhbmdlLXBhcmFtZXRlci12YWx1ZScsXG4gIENsZWFyU2VsZWN0ZWRNYXJrcyA9ICdjbGVhci1zZWxlY3RlZC1tYXJrcycsXG4gIFNlbGVjdEJ5VmFsdWUgPSAnc2VsZWN0LWJ5LXZhbHVlJyxcbiAgR2V0RGF0YVNvdXJjZXMgPSAnZ2V0LWRhdGEtc291cmNlcycsXG4gIFJlZnJlc2hEYXRhU291cmNlID0gJ3JlZnJlc2gtZGF0YS1zb3VyY2UnLFxuICBHZXRGaWx0ZXJzID0gJ2dldC1maWx0ZXJzJyxcbiAgR2V0Q2F0ZWdvcmljYWxEb21haW4gPSAnZ2V0LWNhdGVnb3JpY2FsLWRvbWFpbicsXG4gIEdldFJhbmdlRG9tYWluID0gJ2dldC1yYW5nZS1kb21haW4nLFxuICBHZXRKb2luRGVzY3JpcHRpb24gPSAnZ2V0LWpvaW4tZGVzY3JpcHRpb24nLFxuICBHZXRDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMgPSAnZ2V0LWNvbm5lY3Rpb24tZGVzY3JpcHRpb24tc3VtbWFyaWVzJyxcbiAgRGlzcGxheURpYWxvZyA9ICdkaXNwbGF5LWRpYWxvZycsXG4gIENsb3NlRGlhbG9nID0gJ2Nsb3NlLWRpYWxvZycsXG4gIFRlc3RDb252ZXJzaW9uVmVyYiA9ICd0ZXN0LWNvbnZlcnNpb24tdmVyYidcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvVmVyYnMudHMiLCJpbXBvcnQgeyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0ICogYXMgVHJhbnNsYXRpb25zIGZyb20gJy4vVmVyc2lvblRyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL1N0YWNraW5nVmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0lkZW50aXR5VmVyc2lvbkNvbnZlcnRlcic7XG5cbi8vIEEgbWFwcGluZyBmcm9tIHRoZSBzb3VyY2UgdmVyc2lvbiBvZiBhIG1vZGVsIC0+IHRoZSBuZXh0IHZlcnNpb24gb2YgdGhlIG1vZGVsLiBFYWNoIG1ham9yXG4vLyB2ZXJzaW9uIGJ1bXAgY2FuIGhhdmUgYW4gYXJyYXkgb2YgY29udmVyc2lvbnMgdG8gcGVyZm9ybSBpbiBvcmRlclxuY29uc3QgZXhlY3V0ZVVwZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPiB9ID0ge1xuICAwOiBbXVxufTtcblxuY29uc3QgZXhlY3V0ZURvd25ncmFkZXM6IHsgW3ZlcnNpb246IG51bWJlcl06IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiB9ID0ge1xuICAwOiBbXVxufTtcblxuY29uc3Qgbm90aWZpY2F0aW9uRG93bmdyYWRlczogeyBbdmVyc2lvbjogbnVtYmVyXTogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4gfSA9IHtcbiAgMDogW11cbn07XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHdoaWNoIGhhcyB0aGUgYWJpbGl0eSB0byB1cGdyYWRlIGFuZCBkb3duZ3JhZGUgdGhlIGNvbnRyYWN0IGJldHdlZW4gdGhlIHR3byB2ZXJzaW9uc1xuICogd2hpY2ggYXJlIHNwZWNpZmllZC4gSWYgZXh0ZXJuYWxNYWpvclZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBiZWNhdXNlXG4gKiB3ZSB3b24ndCBrbm93IGhvdyB0byBkbyB0aG9zZSBjb252ZXJzaW9ucy5cbiAqXG4gKiBAcGFyYW0gZXh0ZXJuYWxNYWpvclZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIHVzaW5nXG4gKiBAcGFyYW0gcGxhdGZvcm1NYWpvclZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgcGxhdGZvcm0gaXMgdXNpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVZlcnNpb25Db252ZXJ0ZXIoZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlciwgcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcik6IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICBpZiAoIU51bWJlci5pc0ludGVnZXIoZXh0ZXJuYWxNYWpvclZlcnNpb24pIHx8XG4gICAgIU51bWJlci5pc0ludGVnZXIocGxhdGZvcm1NYWpvclZlcnNpb24pIHx8XG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb24gPCAwIHx8XG4gICAgcGxhdGZvcm1NYWpvclZlcnNpb24gPCAwKSB7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFZlcnNpb25zIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlcnM6XG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA+IHBsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHRlcm5hbCB2ZXJzaW9uIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHBsYXRmb3JtIHZlcnNpb24uXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA9PT0gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgdGhlIGV4YWN0IHNhbWUgdmVyc2lvbnMsIGp1c3QgdXNlIHRoZSBpZGVudGl0eSBjb252ZXJ0ZXJcbiAgICByZXR1cm4gbmV3IElkZW50aXR5VmVyc2lvbkNvbnZlcnRlcigpO1xuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZSB2ZXJzaW9ucyB3ZSBoYXZlIGhlcmUgYW5kIGNvbGxlY3QgdGhlIHVwZ3JhZGUgYW5kIGRvd25ncmFkZXMgbmVjZXNzYXJ5XG4gIGxldCBuZWVkZWRFeGVjdXRlVXBncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+ID0gW107XG4gIGZvciAobGV0IGkgPSBleHRlcm5hbE1ham9yVmVyc2lvbjsgaSA8IHBsYXRmb3JtTWFqb3JWZXJzaW9uOyBpKyspIHtcbiAgICBpZiAoaSBpbiBleGVjdXRlVXBncmFkZXMpIHtcbiAgICAgIG5lZWRlZEV4ZWN1dGVVcGdyYWRlcy5wdXNoKC4uLmV4ZWN1dGVVcGdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZW0gYmFja3dhcmRzIHRvIGdldCB0aGUgbmVjZXNzYXJ5IGRvd25ncmFkZXNcbiAgbGV0IG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4gPSBbXTtcbiAgbGV0IG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+ID0gW107XG4gIGZvciAobGV0IGkgPSBwbGF0Zm9ybU1ham9yVmVyc2lvbiAtIDE7IGkgPj0gZXh0ZXJuYWxNYWpvclZlcnNpb247IGktLSkge1xuICAgIGlmIChpIGluIGV4ZWN1dGVEb3duZ3JhZGVzKSB7XG4gICAgICBuZWVkZWRFeGVjdXRlRG93bmdyYWRlcy5wdXNoKC4uLmV4ZWN1dGVEb3duZ3JhZGVzW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoaSBpbiBub3RpZmljYXRpb25Eb3duZ3JhZGVzKSB7XG4gICAgICBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzLnB1c2goLi4ubm90aWZpY2F0aW9uRG93bmdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIoXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb24sIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBuZWVkZWRFeGVjdXRlVXBncmFkZXMsIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLCBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeS50cyIsImltcG9ydCB7IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBFeGVjdXRlUmVzcG9uc2UsIE5vdGlmaWNhdGlvbiwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycyB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBUcmFuc2xhdGlvbnMgZnJvbSAnLi9WZXJzaW9uVHJhbnNsYXRpb25zJztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhlIHZlcnNpb24gY29udmVydGVyIGlzIGRlc2lnbmVkIHRvIGFsbG93IHRoZSBwbGF0Zm9ybSBhbmQgZXh0ZXJuYWwgbW9kdWxlc1xuICogdG8gc2VlbWxlc3NseSBjb21tdW5pY2F0ZSBvdmVyIHR3byBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgdGhlIGludGVybmFsIEFQSS4gVGhlIG9ubHlcbiAqIG1vZGUgaXQgc3VwcG9ydHMgaXMgZXh0ZXJuYWwncyB2ZXJzaW9uIDw9IHBsYXRmb3JtJ3MgdmVyc2lvbi4gV2hlbiBleGVjdXRpbmdcbiAqIGNvbW1hbmRzLCBpdCBpcyB1c2VkIHRvIHVwZ3JhZGUgdGhlIGV4dGVybmFsIHJlcHJlc2VudGF0aW9uIHRvIHdoYXQgcGxhdGZvcm0ga25vd3Mgb24gdGhlIHdheSBpblxuICogYW5kIGRvd25ncmFkZSB0aGUgcmVwcmVzZW50YXRpb25zIG9uIHRoZSB3YXkgb3V0LiBTaW1pbGFybHkgZm9yIG5vdGlmaWNhdGlvbnMsIGl0IGNhblxuICogZG93bmdyYWRlIHRob3NlIG9uIHRoZSB3YXkgZnJvbSBwbGF0Zm9ybSB0byBleHRlcm5hbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlclxuICAgKlxuICAgKiBAcGFyYW0gX2V4dGVybmFsTWFqb3JWZXJzaW9uIFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCBhcGktZXh0ZXJuYWwtanMgaXMgdXNpbmdcbiAgICogQHBhcmFtIF9wbGF0Zm9ybU1ham9yVmVyc2lvbiBUaGUgbWFqb3IgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgdGhlIGFwaS1wbGF0Zm9ybS1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiB0aGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gd2hlbiB1cGdyYWRpbmcgY21kIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiBkb3duZ3JhZGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gYWZ0ZXIgYSBjbWRcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBvbiBhIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2V4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcixcbiAgICBwcml2YXRlIF91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gICAgcHJpdmF0ZSBfZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICAgIHByaXZhdGUgX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4pIHtcblxuICAgIGlmICh0aGlzLl9leHRlcm5hbE1ham9yVmVyc2lvbiA+IHRoaXMuX3BsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb252ZXJ0IGJldHdlZW4gZXh0ZXJuYWwgdmVyc2lvbiAke3RoaXMuX2V4dGVybmFsTWFqb3JWZXJzaW9ufSBhbmQgJHt0aGlzLl9wbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZUV4ZWN1dGVDYWxsKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KTogeyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzOyB9IHtcbiAgICAvLyBQZXJmb3JtIHRoZSB1cGdyYWRlIG9mIHRoZSB2ZXJiIGFuZCBwYXJhbWV0ZXJzIHRvIHRoZSBsZXZlbCB0aGF0IHBsYXRmb3JtIGlzIHVzaW5nXG4gICAgbGV0IHVwZ3JhZGVkID0geyB2ZXJiOiB2ZXJiLCBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIH07XG4gICAgZm9yIChjb25zdCB1cGdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fdXBncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIHVwZ3JhZGVkID0gdXBncmFkZVRyYW5zbGF0aW9uKHVwZ3JhZGVkLnZlcmIsIHVwZ3JhZGVkLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVFeGVjdXRlUmV0dXJuKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKTogRXhlY3V0ZVJlc3BvbnNlIHtcbiAgICAvLyBEb3duZ3JhZGUgdGhlIHJlc3BvbnNlIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IGV4ZWN1dGVSZXNwb25zZTtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIGRvd25ncmFkZWQgPSBkb3duZ3JhZGVUcmFuc2xhdGlvbihkb3duZ3JhZGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG93bmdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAgIC8vIERvd25ncmFkZSB0aGUgbm90aWZpY2F0aW9uIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IG5vdGlmaWNhdGlvbjtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb3duZ3JhZGVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgTm90aWZpY2F0aW9uLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhpcyB2ZXJzaW9uIGNvbnZlcnRlciBkb2Vzbid0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGJ1dCBpcyB1c2VmdWwgZm9yIHRlc3Rpbmcgb3Igd2hlbiB3ZSBoYXZlXG4gKiBhIG1hdGNoaW5nIHBsYXRmb3JtIGFuZCBpbnRlcm5hbCB2ZXJzaW9uIG51bWJlclxuKi9cbmV4cG9ydCBjbGFzcyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgaW1wbGVtZW50cyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJiOiB2ZXJiIGFzIFZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMgYXMgRXhlY3V0ZVBhcmFtZXRlcnNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIHJldHVybiBleGVjdXRlUmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0ICogYXMgZ3VpZCBmcm9tICdndWlkJztcblxuaW1wb3J0IHsgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSc7XG5pbXBvcnQge1xuICBDb21tYW5kTWVzc2FnZSxcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgSW5pdGlhbGl6ZU1lc3NhZ2UsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBOb3RpZmljYXRpb25NZXNzYWdlLFxufSBmcm9tICcuL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuaW1wb3J0IHsgTWVzc2VuZ2VyIH0gZnJvbSAnLi9pbnRlcmZhY2UvTWVzc2VuZ2VyJztcbmltcG9ydCB7IFByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL1ByZXBhcmVkTWVzc2FnZSc7XG5pbXBvcnQge1xuICBpc0NvbW1hbmRNZXNzYWdlLFxuICBpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UsXG4gIGlzSW5pdE1lc3NhZ2UsXG4gIGlzTWVzc2FnZSxcbiAgaXNOb3RpZmljYXRpb25NZXNzYWdlLFxufSBmcm9tICcuL01lc3NhZ2VUeXBlQ2hlY2tzJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIsIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMsIE1vZGVsLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogVGhlIENyb3NzRnJhbWVNZXNzZW5nZXIgaXMgdGhlIHByaW1hcnkgZXhwb3J0IGZyb20gdGhlIGFwaS1tZXNzYWdpbmcgbW9kdWxlLiBBbiBpbnN0YW5jZSBvZlxuICogdGhpcyBjbGFzcyBjYW4gYmUgaW5zdGFudGlhdGVkIG9uIGJvdGggc2lkZXMgb2YgYSBmcmFtZSBib3VuZGFyeSB0byBmYWNpbGl0YXRlIGNvbW11bmljYXRpb25cbiAqIGluIGJvdGggZGlyZWN0aW9ucyBiZXR3ZWVuIHRoZSBmcmFtZXMuIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBib3RoIHRoZSBkaXNwYXRjaGVyIGFuZCB0aGUgbGlzdGVuZXJcbiAqIHBvcnRpb25zLCBidXQgZG9lc24ndCByZXF1aXJlIGNhbGxlcnMgdG8gY2FyZSBhYm91dCBib3RoLlxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZU1lc3NlbmdlciBpbXBsZW1lbnRzIE1lc3NlbmdlciB7XG4gIHByaXZhdGUgdW5yZWdpc3RlckZ1bmN0aW9uOiB1bmRlZmluZWQgfCAoKCkgPT4gdm9pZCk7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogSW5pdGlhbGl6ZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBjb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBjb21tYW5kTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBDb21tYW5kTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIG5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogTm90aWZpY2F0aW9uTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVNZXNzZW5nZXIuIElmIHlvdSB3b3VsZCBsaWtlIHRvIHVzZSB0aGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBhcyBhIE1lc3NhZ2VMaXN0ZW5lcixcbiAgICogYmUgc3VyZSB0byBjYWxsIFN0YXJ0TGlzdGVuaW5nIGFuZCByZWdpc3RlciBtZXNzYWdlIGhhbmRsZXJzLlxuICAgKiBAcGFyYW0gdGhpc1dpbmRvdyBUaGUgd2luZG93IG9iamVjdCB3aGljaCB0aGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBsaXZlcy4gQW4gb25NZXNzYWdlIGxpc3RlbmVyIHdpbGwgYmUgYWRkZWQgaGVyZS5cbiAgICogQHBhcmFtIFtvdGhlcldpbmRvd10gT3B0aW9uYWwgb3RoZXJXaW5kb3cgd2hpY2ggbWVzc2FnZXMgd2lsbCBiZSBwb3N0ZWQgdG8uXG4gICAqICAgICAgICAgICAgICAgICAgICAgIElmIGRlZmluZWQsIGluY29taW5nIG1lc3NhZ2VzIG11c3Qgb3JpZ2luYXRlIGZyb20gb3RoZXJXaW5kb3cgdG8gYmUgcGFzc2VkIG9uXG4gICAqIEBwYXJhbSBbb3RoZXJXaW5kb3dPcmlnaW5dIFRoZSB0YXJnZXQgb3JpZ2luIHdoaWNoIG90aGVyV2luZG93IG11c3QgaGF2ZSBpbiBvcmRlciB0byByZWNlaXZlIGRpc3BhdGNoZWQgbWVzc2FnZXMuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgdmFsdWUgd2lsbCBiZSBzZW50IGFzIHRoZSB0YXJnZXRPcmlnaW4gb2YgYSBwb3N0TWVzc2FnZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9wb3N0TWVzc2FnZSlcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoaXNXaW5kb3c6IFdpbmRvdywgcHJpdmF0ZSBvdGhlcldpbmRvdz86IFdpbmRvdywgcHJpdmF0ZSBvdGhlcldpbmRvd09yaWdpbj86IHN0cmluZykge1xuICAgIC8vIE1ha2Ugc3VyZSB0byBjYWxsIFN0YXJ0TGlzdGVuaW5nXG4gIH1cblxuICAvLy8vLyBNZXNzYWdlTGlzdGVuZXIgSW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBhcmUgbGlzdGVuaW5nLCBpZiBub3QsIGhvb2sgdXAgYSBtZXNzYWdlIGxpc3RlbmVyXG4gICAgaWYgKCF0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbikge1xuICAgICAgY29uc3QgYm91bmRIYW5kbGVyID0gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50aGlzV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBib3VuZEhhbmRsZXIsIHRydWUpO1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24gPSAoKSA9PiB0aGlzLnRoaXNXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGJvdW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0b3BMaXN0ZW5pbmcoKTogdm9pZCB7XG4gICAgLy8gU3RvcCBsaXN0ZW5pbmcgaWYgd2UgaGF2ZSBzdGFydGVkIGxpc3RlbmluZ1xuICAgIGlmICh0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbikge1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24oKTtcbiAgICAgIHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0aWFsaXplTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IEluaXRpYWxpemVNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21tYW5kTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IENvbW1hbmRNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZE1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXROb3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogTm90aWZpY2F0aW9uTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIC8vLy8vIE1lc3NhZ2VEaXNwYXRjaGVyIEltcGxlbWVudGF0aW9uXG5cbiAgcHVibGljIHByZXBhcmVJbml0aWFsaXphdGlvbk1lc3NhZ2UoYXBpVmVyc2lvbjogVmVyc2lvbk51bWJlciwgY3Jvc3NGcmFtZVZlcnNpb246IFZlcnNpb25OdW1iZXIpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IEluaXRpYWxpemVNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkluaXRpYWxpemUsXG4gICAgICBjcm9zc0ZyYW1lVmVyc2lvbjogY3Jvc3NGcmFtZVZlcnNpb24sXG4gICAgICBhcGlWZXJzaW9uOiBhcGlWZXJzaW9uXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVDb21tYW5kTWVzc2FnZSh2ZXJiSWQ6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IENvbW1hbmRNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkNvbW1hbmQsXG4gICAgICB2ZXJiSWQ6IHZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUNvbW1hbmRSZXNwb25zZU1lc3NhZ2UoY29tbWFuZEd1aWQ6IHN0cmluZywgZGF0YTogTW9kZWwgfCB1bmRlZmluZWQsIGVycm9yOiBNb2RlbCB8IHVuZGVmaW5lZCk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsXG4gICAgICBjb21tYW5kR3VpZDogY29tbWFuZEd1aWQsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVOb3RpZmljYXRpb25NZXNzYWdlKG5vdGlmaWNhdGlvbklkOiBOb3RpZmljYXRpb25JZCwgZGF0YTogTW9kZWwpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLFxuICAgICAgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbklkLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyBhIHBlbmRpbmcgbWVzc2FnZSBmb3Igc2VuZGluZyBhbmQgcmV0dXJucyB0aGUgcHJlcGFyZWQgbWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIGJlIHNlbnQgdG8gdGhpcy5vdGhlcldpbmRvd1xuICAgKiBAcmV0dXJucyBUaGUgcHJlcGFyZWQgbWVzc2FnZVxuICAgKi9cbiAgcHJpdmF0ZSBwcmVwYXJlTWVzc2FnZShtc2c6IE1lc3NhZ2UpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGlmICghdGhpcy5vdGhlcldpbmRvdyB8fCAhdGhpcy5vdGhlcldpbmRvd09yaWdpbikge1xuICAgICAgdGhyb3cgJ090aGVyIHdpbmRvdyBub3QgaW5pdGlhbGl6ZWQsIGNhbm5vdCBkaXNwYXRjaCBtZXNzYWdlcyc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlcGFyZWRNZXNzYWdlID0gbmV3IENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UobXNnLCB0aGlzLm90aGVyV2luZG93LCB0aGlzLm90aGVyV2luZG93T3JpZ2luKTtcbiAgICByZXR1cm4gcHJlcGFyZWRNZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZC4gRG9lcyBzb21lIHZhbGlkYXRpb24gb2YgdGhlIG1lc3NhZ2UsIGFuZCB0aGVuXG4gICAqIGNhbGxzIGFuIGFwcHJvcHJpYXRlIG1lc3NhZ2UgaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGluY29taW5nIE1lc3NhZ2VFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZChldmVudDogTWVzc2FnZUV2ZW50KTogdm9pZCB7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIG90aGVyV2luZG93IGRlZmluZWQsIG1ha2Ugc3VyZSB0aGUgbWVzc2FnZSBpcyBjb21pbmcgZnJvbSB0aGVyZVxuICAgIGlmICh0aGlzLm90aGVyV2luZG93ICYmIGV2ZW50LnNvdXJjZSAhPT0gdGhpcy5vdGhlcldpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERvIHNvbWUgdmFsaWRhdGlvbiBvbiBldmVudC5kYXRhIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgcmVjZWl2ZWQgYSByZWFsIG1lc3NhZ2VcbiAgICBpZiAoIWV2ZW50LmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoZSBkZWNsYXJlZCBtZXNzYWdlIHR5cGUsIHZhbGlkYXRlIHRoZSBtZXNzYWdlLCBhbmQgY2FsbCBhbiBhcHByb3ByaWF0ZSBoYW5kZXIgaWYgb25lIGV4aXN0c1xuICAgIHN3aXRjaCAobWVzc2FnZS5tc2dUeXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkluaXRpYWxpemU6IHtcbiAgICAgICAgaWYgKCFpc0luaXRNZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLmluaXRpYWxpemVNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2U6IHtcbiAgICAgICAgaWYgKCFpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21tYW5kOiB7XG4gICAgICAgIGlmICghaXNDb21tYW5kTWVzc2FnZShtZXNzYWdlKSB8fCAhdGhpcy5jb21tYW5kTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBldmVudC5zb3VyY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uOiB7XG4gICAgICAgIGlmICghaXNOb3RpZmljYXRpb25NZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBldmVudC5zb3VyY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBKdXN0IGlnbm9yZSB0aGlzIHNpbmNlIHdlIGRvbid0IGtub3cgaG93IHRvIGhhbmRsZSB0aGUgbWVzc2FnZSB0eXBlXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyLnRzIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBQcmVwYXJlZE1lc3NhZ2UgfSBmcm9tICcuL2ludGVyZmFjZS9QcmVwYXJlZE1lc3NhZ2UnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBQcmVwYXJlZE1lc3NhZ2UgaW50ZXJmYWNlIHVzZWQgdG8gcG9zdCBtZXNzYWdlcyBiZXR3ZWVuXG4gKiB0d28gZnJhbWVzIHVzaW5nIHdpbmRvdy5wb3N0TWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSBpbXBsZW1lbnRzIFByZXBhcmVkTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UuXG4gICAqIEBwYXJhbSBfbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBzZW50XG4gICAqIEBwYXJhbSBfdGFyZ2V0IFRoZSB0YXJnZXQgd2luZG93IHdoZXJlIHRoZSBtZXNzYWdlIHdpbGwgYmUgc2VudFxuICAgKiBAcGFyYW0gX29yaWdpbiBUaGUgdGFyZ2V0T3JpZ2luIHdoZXJlIHRoaXMgbWVzc2FnZSBjYW4gYmUgcmVjZWl2ZWRcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlOiBNZXNzYWdlLCBwcml2YXRlIF90YXJnZXQ6IFdpbmRvdywgcHJpdmF0ZSBfb3JpZ2luOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgcHVibGljIGdldCBtZXNzYWdlR3VpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbWVzc2FnZS5tc2dHdWlkOyB9XG5cbiAgcHVibGljIHNlbmQoKTogUHJlcGFyZWRNZXNzYWdlIHtcbiAgICB0aGlzLl90YXJnZXQucG9zdE1lc3NhZ2UodGhpcy5fbWVzc2FnZSwgdGhpcy5fb3JpZ2luKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS50cyIsImltcG9ydCAqIGFzIGd1aWQgZnJvbSAnZ3VpZCc7XG5cbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvVmVyc2lvbk51bWJlcic7XG5pbXBvcnQge1xuICBDb21tYW5kTWVzc2FnZSxcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgSW5pdGlhbGl6ZU1lc3NhZ2UsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBOb3RpZmljYXRpb25NZXNzYWdlLFxufSBmcm9tICcuL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSBuby1hbnkgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01lc3NhZ2UoZGF0YTogTWVzc2FnZSB8IGFueSk6IGRhdGEgaXMgTWVzc2FnZSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkYXRhIGFzIE1lc3NhZ2U7XG4gIGlmICghbWVzc2FnZSB8fCAhbWVzc2FnZS5tc2dHdWlkIHx8ICFtZXNzYWdlLm1zZ1R5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWd1aWQuaXNHdWlkKG1lc3NhZ2UubXNnR3VpZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIG1lc3NhZ2UubXNnVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4gPVxuICAgIFtNZXNzYWdlVHlwZS5Db21tYW5kLCBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsIE1lc3NhZ2VUeXBlLkluaXRpYWxpemUsIE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbl07XG5cbiAgaWYgKG1lc3NhZ2VUeXBlcy5pbmRleE9mKG1lc3NhZ2UubXNnVHlwZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZlcnNpb24odmVyc2lvbk51bWJlcjogVmVyc2lvbk51bWJlciB8IGFueSk6IHZlcnNpb25OdW1iZXIgaXMgVmVyc2lvbk51bWJlciB7XG4gIGlmICghdmVyc2lvbk51bWJlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHYgPSB2ZXJzaW9uTnVtYmVyIGFzIFZlcnNpb25OdW1iZXI7XG5cbiAgaWYgKHR5cGVvZiB2ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygdi5maXggIT09ICdudW1iZXInIHx8IHR5cGVvZiB2Lm1pbm9yICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygdi5tYWpvciAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5pdE1lc3NhZ2UobWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIEluaXRpYWxpemVNZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpbml0TWVzc2FnZSA9IG1lc3NhZ2UgYXMgSW5pdGlhbGl6ZU1lc3NhZ2U7XG4gIGlmIChpbml0TWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Jbml0aWFsaXplKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpbml0TWVzc2FnZS5hcGlWZXJzaW9uIHx8ICFpc1ZlcnNpb24oaW5pdE1lc3NhZ2UuYXBpVmVyc2lvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWluaXRNZXNzYWdlLmNyb3NzRnJhbWVWZXJzaW9uIHx8ICFpc1ZlcnNpb24oaW5pdE1lc3NhZ2UuY3Jvc3NGcmFtZVZlcnNpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UobWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY3JNZXNzYWdlID0gbWVzc2FnZSBhcyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlO1xuICBpZiAoY3JNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghZ3VpZC5pc0d1aWQoY3JNZXNzYWdlLmNvbW1hbmRHdWlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghY3JNZXNzYWdlLmRhdGEgJiYgIWNyTWVzc2FnZS5lcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kTWVzc2FnZShtZXNzYWdlOiBDb21tYW5kTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgQ29tbWFuZE1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNvbW1hbmRNZXNzYWdlID0gbWVzc2FnZSBhcyBDb21tYW5kTWVzc2FnZTtcbiAgaWYgKGNvbW1hbmRNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkNvbW1hbmQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNvbW1hbmRNZXNzYWdlLnBhcmFtZXRlcnMgfHwgdHlwZW9mIGNvbW1hbmRNZXNzYWdlLnBhcmFtZXRlcnMgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFjb21tYW5kTWVzc2FnZS52ZXJiSWQgfHwgdHlwZW9mIGNvbW1hbmRNZXNzYWdlLnZlcmJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90aWZpY2F0aW9uTWVzc2FnZShtZXNzYWdlOiBOb3RpZmljYXRpb25NZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBOb3RpZmljYXRpb25NZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBub3RpZmljYXRpb25NZXNzYWdlID0gbWVzc2FnZSBhcyBOb3RpZmljYXRpb25NZXNzYWdlO1xuICBpZiAobm90aWZpY2F0aW9uTWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5vdGlmaWNhdGlvbk1lc3NhZ2UuZGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCB8fCB0eXBlb2Ygbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VUeXBlQ2hlY2tzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IERhc2hib2FyZEltcGwgfSBmcm9tICcuL0ltcGwvRGFzaGJvYXJkSW1wbCc7XG5pbXBvcnQgeyBTaGVldCB9IGZyb20gJy4vU2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgU2hlZXQgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGFzaGJvYXJkSW1wbDogRGFzaGJvYXJkSW1wbCkge1xuICAgIHN1cGVyKF9kYXNoYm9hcmRJbXBsKTtcbiAgICBfZGFzaGJvYXJkSW1wbC5pbml0aWFsaXplV2l0aFB1YmxpY0ludGVyZmFjZXModGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldHMoKTogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZEltcGwud29ya3NoZWV0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2JqZWN0cygpOiBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+IHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkSW1wbC5vYmplY3RzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmQudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIGFzIFZlcnNpb25OdW1iZXJDb250cmFjdCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGV4dGVuc2lvbnMgbGlicmFyeVxuICovXG5leHBvcnQgY2xhc3MgVmVyc2lvbk51bWJlciBpbXBsZW1lbnRzIFZlcnNpb25OdW1iZXJDb250cmFjdCB7XG4gIC8vIFVzaW5nIHNvbWUgd2VicGFjayB0cmlja3MsIHdlIGNhbiBpbmplY3QgdGhpcyB2ZXJzaW9uIGludG8gb3VyIGNvZGUgKGtpbmRhIGxpa2UgYysrIHByZXByb2Nlc3NvciBzdHVmZilcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBWZXJzaW9uTnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIHZlcnNpb24gbnVtYmVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogVmVyc2lvbk51bWJlciB7XG4gICAgcmV0dXJuIFZlcnNpb25OdW1iZXIuX2luc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBTZXRWZXJzaW9uTnVtYmVyKG51bVN0cmluZzogc3RyaW5nKTogdm9pZCB7XG4gICAgVmVyc2lvbk51bWJlci5faW5zdGFuY2UgPSBuZXcgVmVyc2lvbk51bWJlcihudW1TdHJpbmcpO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IG1ham9yOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBtaW5vcjogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgZml4OiBudW1iZXI7XG5cbiAgLy8gcHJpdmF0ZSBjb25zdHJ1Y3RvciBzbyBldmVyeW9uZSB1c2VzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih2ZXJzaW9uU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHZlcnNpb25TdHJpbmcuc3BsaXQoJy4nKS5tYXAocCA9PiBwYXJzZUludChwLCAxMCkpO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgSW52YWxpZCB2ZXJzaW9uIG51bWJlcjogJHt2ZXJzaW9uU3RyaW5nfWApO1xuICAgIH1cblxuICAgIHRoaXMubWFqb3IgPSBwYXJ0c1swXTtcbiAgICB0aGlzLm1pbm9yID0gcGFydHNbMV07XG4gICAgdGhpcy5maXggPSBwYXJ0c1syXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5tYWpvcn0uJHt0aGlzLm1pbm9yfS4ke3RoaXMuZml4fWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXIudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IERhc2hib2FyZE9iamVjdFR5cGUsIEV4dGVuc2lvbkRhc2hib2FyZEluZm8sIFNoZWV0UGF0aCwgVmlzdWFsSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRPYmplY3QgfSBmcm9tICcuLi9EYXNoYm9hcmRPYmplY3QnO1xuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL1BvaW50JztcbmltcG9ydCB7IFNpemUgfSBmcm9tICcuLi9TaXplJztcbmltcG9ydCB7IFdvcmtzaGVldCB9IGZyb20gJy4uL1dvcmtzaGVldCc7XG5cbmltcG9ydCB7IFNoZWV0SW1wbCB9IGZyb20gJy4vU2hlZXRJbXBsJztcbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuaW1wb3J0IHsgV29ya3NoZWV0SW1wbCB9IGZyb20gJy4vV29ya3NoZWV0SW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRJbXBsIGV4dGVuZHMgU2hlZXRJbXBsIHtcbiAgcHJpdmF0ZSBfd29ya3NoZWV0czogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PjtcbiAgcHJpdmF0ZSBfb2JqZWN0czogQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5mbzogRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbywgcHJpdmF0ZSBfc2hlZXRQYXRoOiBTaGVldFBhdGgpIHtcbiAgICBzdXBlcihuZXcgU2hlZXRJbmZvSW1wbChfaW5mby5uYW1lLCBDb250cmFjdC5TaGVldFR5cGUuRGFzaGJvYXJkLCBuZXcgU2l6ZShfaW5mby5zaXplLmgsIF9pbmZvLnNpemUudykpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0cygpOiBBcnJheTxDb250cmFjdC5Xb3Jrc2hlZXQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2JqZWN0cygpOiBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+IHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplV2l0aFB1YmxpY0ludGVyZmFjZXMoZGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5SW50ZXJuYWxWYWx1ZShkYXNoYm9hcmQsICdkYXNoYm9hcmQnKTtcblxuICAgIHRoaXMuX3dvcmtzaGVldHMgPSBuZXcgQXJyYXk8V29ya3NoZWV0PigpO1xuICAgIHRoaXMuX29iamVjdHMgPSBuZXcgQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PigpO1xuXG4gICAgLy8gUHJvY2VzcyBhbGwgdGhlIHpvbmVzIHdoaWNoIGFyZSBjb250YWluZWQgaW4gdGhpcyBkYXNoYm9hcmRcbiAgICBmb3IgKGNvbnN0IHpvbmUgb2YgdGhpcy5faW5mby56b25lcykge1xuICAgICAgbGV0IHdvcmtzaGVldDogV29ya3NoZWV0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICBjb25zdCB6b25lU2l6ZSA9IG5ldyBTaXplKHpvbmUuaGVpZ2h0LCB6b25lLndpZHRoKTtcblxuICAgICAgaWYgKHpvbmUuem9uZVR5cGUgPT09IERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0KSB7XG4gICAgICAgIGNvbnN0IHNoZWV0SW5mbyA9IG5ldyBTaGVldEluZm9JbXBsKHpvbmUubmFtZSwgQ29udHJhY3QuU2hlZXRUeXBlLldvcmtzaGVldCwgem9uZVNpemUpO1xuICAgICAgICBjb25zdCB2aXpJZDogVmlzdWFsSWQgPSB7XG4gICAgICAgICAgd29ya3NoZWV0OiB6b25lLm5hbWUsXG4gICAgICAgICAgZGFzaGJvYXJkOiB0aGlzLl9pbmZvLm5hbWUsXG4gICAgICAgICAgc3Rvcnlib2FyZDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5Ym9hcmQsXG4gICAgICAgICAgZmxpcGJvYXJkWm9uZUlEOiB0aGlzLl9zaGVldFBhdGguZmxpcGJvYXJkWm9uZUlELFxuICAgICAgICAgIHN0b3J5UG9pbnRJRDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5UG9pbnRJRFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldEltcGwgPSBuZXcgV29ya3NoZWV0SW1wbChzaGVldEluZm8sIHZpeklkLCBkYXNoYm9hcmQpO1xuICAgICAgICB3b3Jrc2hlZXQgPSBuZXcgV29ya3NoZWV0KHdvcmtzaGVldEltcGwpO1xuICAgICAgICB0aGlzLl93b3Jrc2hlZXRzLnB1c2god29ya3NoZWV0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgem9uZVBvaW50ID0gbmV3IFBvaW50KHpvbmUueCwgem9uZS55KTtcblxuICAgICAgY29uc3QgZGFzaGJvYXJkT2JqZWN0ID0gbmV3IERhc2hib2FyZE9iamVjdChcbiAgICAgICAgZGFzaGJvYXJkLFxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGFzaGJvYXJkT2JqZWN0VHlwZS5jb252ZXJ0KHpvbmUuem9uZVR5cGUpLFxuICAgICAgICB6b25lUG9pbnQsXG4gICAgICAgIHpvbmVTaXplLFxuICAgICAgICB3b3Jrc2hlZXRcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChkYXNoYm9hcmRPYmplY3QpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGRhc2hib2FyZCBvYmplY3RzIC0gdGhlIHpvbmVzIGluIGEgZGFzaGJvYXJkLlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpcyBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkT2JqZWN0IGltcGxlbWVudHMgQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2Rhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkLFxuICAgIHByaXZhdGUgX3R5cGU6IENvbnRyYWN0LkRhc2hib2FyZE9iamVjdFR5cGUsXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IENvbnRyYWN0LlBvaW50LFxuICAgIHByaXZhdGUgX3NpemU6IENvbnRyYWN0LlNpemUsXG4gICAgcHJpdmF0ZSBfd29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQgfCB1bmRlZmluZWRcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IENvbnRyYWN0LlBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldCgpOiBDb250cmFjdC5Xb3Jrc2hlZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZE9iamVjdC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgUG9pbnQgaW1wbGVtZW50cyBDb250cmFjdC5Qb2ludCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF94OiBudW1iZXIsIHByaXZhdGUgX3k6IG51bWJlcikgeyB9XG5cbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUG9pbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IGNsYXNzIFNpemUgaW1wbGVtZW50cyBDb250cmFjdC5TaXplIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hlaWdodDogbnVtYmVyLCBwcml2YXRlIF93aWR0aDogbnVtYmVyKSB7IH1cblxuICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaXplLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNoZWV0IH0gZnJvbSAnLi9TaGVldCc7XG5pbXBvcnQgeyBXb3Jrc2hlZXRJbXBsIH0gZnJvbSAnLi9JbXBsL1dvcmtzaGVldEltcGwnO1xuXG5leHBvcnQgY2xhc3MgV29ya3NoZWV0IGV4dGVuZHMgU2hlZXQgaW1wbGVtZW50cyBDb250cmFjdC5Xb3Jrc2hlZXQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfd29ya3NoZWV0SW1wbDogV29ya3NoZWV0SW1wbCkge1xuICAgIHN1cGVyKF93b3Jrc2hlZXRJbXBsKTtcblxuICAgIC8vIENhbGwgdG8gaW5pdGlhbGl6ZSBldmVudHMgYW5kIHRoZW4gY2FsbCBkb3duIHRvIHRoZSBldmVudCBsaXN0ZW5lciBtYW5hZ2VyIHRvIGhhbmRsZSB0aGluZ3NcbiAgICB0aGlzLl93b3Jrc2hlZXRJbXBsLmluaXRpYWxpemVFdmVudHModGhpcykuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3RXZlbnRUeXBlKGUpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyZW50RGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwucGFyZW50RGFzaGJvYXJkO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RmlsdGVyQXN5bmMoXG4gICAgZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlczogQXJyYXk8c3RyaW5nPiwgdXBkYXRlVHlwZTogQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSwgb3B0aW9uczogQ29udHJhY3QuRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuYXBwbHlGaWx0ZXJBc3luYyhmaWVsZE5hbWUsIHZhbHVlcywgdXBkYXRlVHlwZSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5SYW5nZUZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmFwcGx5UmFuZ2VGaWx0ZXJBc3luYyhmaWVsZE5hbWUsIGZpbHRlck9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmNsZWFyRmlsdGVyQXN5bmMoZmllbGROYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhU291cmNlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXREYXRhU291cmNlc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRmlsdGVyPj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldEZpbHRlcnNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFNlbGVjdGVkTWFya3NBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldEhpZ2hsaWdodGVkTWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldEhpZ2hsaWdodGVkTWFya3NBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0U3VtbWFyeURhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRTdW1tYXJ5RGF0YUFzeW5jKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0VW5kZXJseWluZ0RhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlEQXN5bmMobWFya3NJbmZvOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sIHVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5zZWxlY3RNYXJrc0J5SWRBc3luYyhtYXJrc0luZm8sIHVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9ucywgc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5zZWxlY3RNYXJrc0J5SWRBc3luYyhzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvV29ya3NoZWV0LnRzIiwiaW1wb3J0IHsgU2hlZXRUeXBlLCBTaXplIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTaGVldFBhdGggfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXRJbmZvSW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfc2hlZXRUeXBlOiBTaGVldFR5cGUsXG4gICAgcHJpdmF0ZSBfc2hlZXRTaXplOiBTaXplXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0U2l6ZSgpOiBTaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hlZXROYW1lOiB0aGlzLm5hbWUsXG4gICAgICBpc0Rhc2hib2FyZDogdGhpcy5zaGVldFR5cGUgPT09IFNoZWV0VHlwZS5EYXNoYm9hcmRcbiAgICAgIC8vIFRPRE8gLSBTdG9yaWVzXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEluZm9JbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQge1xuICBEYXRhU2NoZW1hLFxuICBEYXRhU291cmNlIGFzIERhdGFTb3VyY2VJbmZvLFxuICBGaWx0ZXJFdmVudCwgTm90aWZpY2F0aW9uSWQsXG4gIFZpc3VhbElkLFxuICBXb3Jrc2hlZXREYXRhU291cmNlSW5mb1xufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vRGF0YVNvdXJjZSc7XG5pbXBvcnQgeyBXb3Jrc2hlZXQgfSBmcm9tICcuLi9Xb3Jrc2hlZXQnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4vRGF0YVNvdXJjZUltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9TaGVldEltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbmZvSW1wbCB9IGZyb20gJy4vU2hlZXRJbmZvSW1wbCc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsIH0gZnJvbSAnLi9TaW5nbGVFdmVudE1hbmFnZXJJbXBsJztcblxuaW1wb3J0IHsgRmlsdGVyQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudCc7XG5pbXBvcnQgeyBNYXJrc1NlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50JztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4uL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UsIEdldERhdGFUeXBlIH0gZnJvbSAnLi4vU2VydmljZXMvR2V0RGF0YVNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1NlbGVjdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuY29uc3QgdmlzdWFsSWRzQXJlRXF1YWwgPSBmdW5jdGlvbiAoYTogVmlzdWFsSWQsIGI6IFZpc3VhbElkKTogYm9vbGVhbiB7XG4gIHJldHVybiBhICYmIGIgJiZcbiAgICBhLndvcmtzaGVldCA9PT0gYi53b3Jrc2hlZXQgJiZcbiAgICBhLmRhc2hib2FyZCA9PT0gYi5kYXNoYm9hcmQgJiZcbiAgICBhLnN0b3J5Ym9hcmQgPT09IGIuc3Rvcnlib2FyZCAmJlxuICAgIGEuc3RvcnlQb2ludElEID09PSBiLnN0b3J5UG9pbnRJRCAmJlxuICAgIGEuZmxpcGJvYXJkWm9uZUlEID09PSBiLmZsaXBib2FyZFpvbmVJRDtcbn07XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXRJbXBsIGV4dGVuZHMgU2hlZXRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNoZWV0SW5mb0ltcGw6IFNoZWV0SW5mb0ltcGwsXG4gICAgcHJpdmF0ZSBfdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIHByaXZhdGUgX3BhcmVudERhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKSB7XG4gICAgc3VwZXIoc2hlZXRJbmZvSW1wbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudERhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnREYXNoYm9hcmQ7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCBnb2VzIHRocm91Z2ggYW5kIHJlZ2lzdGVycyBlYWNoIGV2ZW50IHR5cGUgdGhpcyBpbXBsIGtub3dzIGFib3V0XG4gICAqIHdpdGggdGhlIE5vdGlmaWNhdGlvblNlcnZpY2UuIEl0IHJldHVybnMgYW4gYXJyYXkgb2YgU2luZ2xlRXZlbnRNYW5hZ2VyIG9iamVjdHMgd2hpY2hcbiAgICogY2FuIHRoZW4gYmUgcGFzc2VkIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIHRvIGhhbmRsZSB1c2VyIHJlZ2lzdHJhdGlvbiAvIHVucmVnaXN0cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1dvcmtzaGVldH0gd29ya3NoZWV0IFRoZSB3b3Jrc2hlZXQgb2JqZWN0IHdoaWNoIHdpbGwgYmUgaW5jbHVkZWQgd2l0aCB0aGUgZXZlbnQgbm90aWZpY2F0aW9uc1xuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUV2ZW50cyh3b3Jrc2hlZXQ6IFdvcmtzaGVldCk6IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPigpO1xuICAgIGxldCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIHRoaXMgc2VydmljZSByZWdpc3RlcmVkLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIGV2ZW50IG1hbmFnZXJzIHdlJ2xsIG5lZWQgKG9uZSBmb3IgZWFjaCBldmVudCB0eXBlKVxuICAgIGNvbnN0IG1hcmtzRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxNYXJrc1NlbGVjdGVkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuTWFya1NlbGVjdGlvbkNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLlNlbGVjdGVkTWFya3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIGNvbnN0IHZpc3VhbElkID0gbW9kZWwgYXMgVmlzdWFsSWQ7XG4gICAgICByZXR1cm4gdmlzdWFsSWRzQXJlRXF1YWwodmlzdWFsSWQsIHRoaXMudmlzdWFsSWQpO1xuICAgIH0sICh2aXo6IFZpc3VhbElkKSA9PiB7XG4gICAgICBtYXJrc0V2ZW50LnRyaWdnZXJFdmVudCgoKSA9PiBuZXcgTWFya3NTZWxlY3RlZEV2ZW50KHdvcmtzaGVldCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdGVyRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxGaWx0ZXJDaGFuZ2VkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuRmlsdGVyQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuRmlsdGVyQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJFdmVudFJlc3BvbnNlID0gbW9kZWwgYXMgRmlsdGVyRXZlbnQ7XG4gICAgICByZXR1cm4gdGhpcy52aXN1YWxJZC53b3Jrc2hlZXQgPT09IGZpbHRlckV2ZW50UmVzcG9uc2UudmlzdWFsSWQud29ya3NoZWV0O1xuICAgIH0sIChldmVudDogRmlsdGVyRXZlbnQpID0+IHtcbiAgICAgIGZpbHRlckV2ZW50LnRyaWdnZXJFdmVudCgoKSA9PiBuZXcgRmlsdGVyQ2hhbmdlZEV2ZW50KHdvcmtzaGVldCwgZXZlbnQuZmllbGROYW1lKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2gobWFya3NFdmVudCk7XG4gICAgcmVzdWx0cy5wdXNoKGZpbHRlckV2ZW50KTtcblxuICAgIC8vIFRPRE8gLSBvdGhlciBldmVudCB0eXBlc1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZpc3VhbElkKCk6IFZpc3VhbElkIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzdWFsSWQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICBmaWVsZE5hbWU6IHN0cmluZywgdmFsdWVzOiBBcnJheTxzdHJpbmc+LCB1cGRhdGVUeXBlOiBDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlLCBvcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGU+KHVwZGF0ZVR5cGUsIENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmFwcGx5RmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lLCB2YWx1ZXMsIHVwZGF0ZVR5cGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5UmFuZ2VGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuUmFuZ2VGaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGZpZWxkTmFtZSwgJ2ZpZWxkTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoZmlsdGVyT3B0aW9ucywgJ2ZpbHRlck9wdGlvbnMnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UmFuZ2VQYXJhbVR5cGUoZmlsdGVyT3B0aW9ucy5taW4sIGZpbHRlck9wdGlvbnMubWF4KTtcblxuICAgIGlmIChmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24pIHtcbiAgICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyTnVsbE9wdGlvbj4oZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uLCBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXBwbHlSYW5nZUZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWVsZE5hbWUsICdmaWVsZE5hbWUnKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5jbGVhckZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0RGF0YVNvdXJjZXNBc3luYyh0aGlzLnZpc3VhbElkKS50aGVuPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PihyZXN1bHQgPT4ge1xuICAgICAgY29uc3QgZGF0YVNjaGVtYTogRGF0YVNjaGVtYSA9IHJlc3VsdCBhcyBEYXRhU2NoZW1hO1xuICAgICAgY29uc3Qgd29ya3NoZWV0RGF0YVNvdXJjZUluZm86IFdvcmtzaGVldERhdGFTb3VyY2VJbmZvID0gZGF0YVNjaGVtYS53b3Jrc2hlZXREYXRhU2NoZW1hTWFwW3RoaXMubmFtZV07XG5cbiAgICAgIGxldCBkYXRhU291cmNlczogQXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4gPSBbXTtcblxuICAgICAgLy8gRmlyc3QsIGFkZCB0aGUgcHJpbWFyeSBkYXRhc291cmNlLiAgQnkgY29udmVudGlvbiwgaXQgY29tZXMgZmlyc3QgaW4gdGhlIHJldHVybmVkIGFycmF5LlxuICAgICAgbGV0IHByaW1hcnlJZDogc3RyaW5nID0gd29ya3NoZWV0RGF0YVNvdXJjZUluZm8ucHJpbWFyeURhdGFTb3VyY2U7XG4gICAgICBkYXRhU291cmNlcy5wdXNoKHRoaXMuY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTY2hlbWEuZGF0YVNvdXJjZXNbcHJpbWFyeUlkXSkpO1xuXG4gICAgICAvLyBUaGVuLCBsb29wIHRocm91Z2ggYW55IHNlY29uZGFyeSBkYXRhIHNvdXJjZXMgYW5kIGFkZCB0aGVtLlxuICAgICAgZm9yIChsZXQgc2Vjb25kYXJ5SWQgb2Ygd29ya3NoZWV0RGF0YVNvdXJjZUluZm8ucmVmZXJlbmNlZERhdGFTb3VyY2VMaXN0KSB7XG4gICAgICAgIGlmIChzZWNvbmRhcnlJZCAhPT0gcHJpbWFyeUlkKSB7XG4gICAgICAgICAgZGF0YVNvdXJjZXMucHVzaCh0aGlzLmNyZWF0ZURhdGFTb3VyY2VGcm9tSW5mbyhkYXRhU2NoZW1hLmRhdGFTb3VyY2VzW3NlY29uZGFyeUlkXSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhU291cmNlcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldEZpbHRlcnNBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRTZWxlY3RlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIGdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0U3VtbWFyeURhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgICB0aGlzLnZpc3VhbElkLCBHZXREYXRhVHlwZS5TdW1tYXJ5LCAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcywgISFvcHRpb25zLmlnbm9yZVNlbGVjdGlvbiwgdHJ1ZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBzZXJ2aWNlLmdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgICB0aGlzLnZpc3VhbElkLFxuICAgICAgR2V0RGF0YVR5cGUuVW5kZXJseWluZyxcbiAgICAgICEhb3B0aW9ucy5pZ25vcmVBbGlhc2VzLFxuICAgICAgISFvcHRpb25zLmlnbm9yZVNlbGVjdGlvbixcbiAgICAgICEhb3B0aW9ucy5pbmNsdWRlQWxsQ29sdW1ucyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2VsZWN0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLlNlbGVjdGlvbik7XG4gICAgcmV0dXJuIHNlcnZpY2UuY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWE+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNlbGVjdGlvbnMsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGU+KHNlbGVjdGlvblVwZGF0ZVR5cGUsIENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNlbGVjdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5TZWxlY3Rpb24pO1xuICAgIHJldHVybiBzZXJ2aWNlLnNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHRoaXMudmlzdWFsSWQsIHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZWxlY3Rpb25zLCAnZmllbGROYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlPihzZWxlY3Rpb25VcGRhdGVUeXBlLCBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZWxlY3Rpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uKTtcbiAgICByZXR1cm4gc2VydmljZS5zZWxlY3RNYXJrc0J5SWRBc3luYyh0aGlzLnZpc3VhbElkLCBzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTb3VyY2VJbmZvOiBEYXRhU291cmNlSW5mbyk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VJbXBsID0gbmV3IERhdGFTb3VyY2VJbXBsKGRhdGFTb3VyY2VJbmZvKTtcbiAgICBjb25zdCBkYXRhU291cmNlID0gbmV3IERhdGFTb3VyY2UoZGF0YVNvdXJjZUltcGwpO1xuICAgIGRhdGFTb3VyY2VJbXBsLmluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXRhU291cmNlKTtcbiAgICByZXR1cm4gZGF0YVNvdXJjZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9Xb3Jrc2hlZXRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi9JbXBsL0RhdGFTb3VyY2VJbXBsJztcblxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTb3VyY2VJbXBsOiBEYXRhU291cmNlSW1wbCkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZHMoKTogQXJyYXk8Q29udHJhY3QuRmllbGQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuZmllbGRzO1xuICB9XG5cbiAgcHVibGljIGdldCBleHRyYWN0VXBkYXRlVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5leHRyYWN0VXBkYXRlVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNFeHRyYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5pc0V4dHJhY3Q7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaEFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5yZWZyZXNoQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVUYWJsZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LlRhYmxlU3VtbWFyeT4+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuZ2V0QWN0aXZlVGFibGVzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeT4+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zPzogQ29udHJhY3QuRGF0YVNvdXJjZVVuZGVybHlpbmdEYXRhT3B0aW9ucyk6XG4gICAgUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGF0YVNvdXJjZS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0ICogYXMgSW50ZXJuYWxDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBGaWVsZEltcGwgfSBmcm9tICcuL0ZpZWxkSW1wbCc7XG5cbmltcG9ydCB7IENvbm5lY3Rpb25TdW1tYXJ5IH0gZnJvbSAnLi4vQ29ubmVjdGlvblN1bW1hcnknO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9GaWVsZCc7XG5pbXBvcnQgeyBUYWJsZVN1bW1hcnkgfSBmcm9tICcuLi9UYWJsZVN1bW1hcnknO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0RhdGFTb3VyY2VTZXJ2aWNlJztcbmltcG9ydCB7IEdldERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvR2V0RGF0YVNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VJbXBsIHtcbiAgcHJpdmF0ZSBfZmllbGRzOiBBcnJheTxGaWVsZD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTb3VyY2VJbmZvOiBJbnRlcm5hbENvbnRyYWN0LkRhdGFTb3VyY2UpIHtcbiAgICB0aGlzLl9maWVsZHMgPSBfZGF0YVNvdXJjZUluZm8uZmllbGRzLm1hcChmaWVsZE1vZGVsID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkSW1wbCA9IG5ldyBGaWVsZEltcGwoZmllbGRNb2RlbCwgdGhpcyk7XG4gICAgICByZXR1cm4gbmV3IEZpZWxkKGZpZWxkSW1wbCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV4dHJhY3RVcGRhdGVUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbmZvLmV4dHJhY3RVcGRhdGVUaW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZHMoKTogQXJyYXk8Q29udHJhY3QuRmllbGQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4dHJhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlzRXh0cmFjdDtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oXG4gICAgICBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VTZXJ2aWNlLnJlZnJlc2hBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnlbXT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBkYXRhU291cmNlU2VydmljZS5nZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmModGhpcy5fZGF0YVNvdXJjZUluZm8uaWQpLnRoZW48Q29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnlbXT4oc3VtbWFyaWVzID0+IHtcbiAgICAgIHJldHVybiBzdW1tYXJpZXMubWFwKHN1bW1hcnkgPT4gbmV3IENvbm5lY3Rpb25TdW1tYXJ5KHN1bW1hcnkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVUYWJsZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LlRhYmxlU3VtbWFyeT4+IHtcbiAgICBjb25zdCBkYXRhU291cmNlU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVNlcnZpY2UuZ2V0QWN0aXZlVGFibGVzQXN5bmModGhpcy5fZGF0YVNvdXJjZUluZm8uaWQpLnRoZW48QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4odGFibGVJbmZvcyA9PiB7XG4gICAgICByZXR1cm4gdGFibGVJbmZvcy5tYXAodGFibGVJbmZvID0+IG5ldyBUYWJsZVN1bW1hcnkodGFibGVJbmZvKSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zPzogQ29udHJhY3QuRGF0YVNvdXJjZVVuZGVybHlpbmdEYXRhT3B0aW9ucyk6XG4gICAgUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGlnbm9yZUFsaWFzZXM6IGZhbHNlLFxuICAgICAgbWF4Um93czogMTAwMDAsXG4gICAgICBjb2x1bW5zVG9JbmNsdWRlOiBbXSxcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBjb25zdCBnZXREYXRhU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgcmV0dXJuIGdldERhdGFTZXJ2aWNlLmdldERhdGFTb3VyY2VEYXRhQXN5bmMoXG4gICAgICB0aGlzLmlkLFxuICAgICAgISFvcHRpb25zLmlnbm9yZUFsaWFzZXMsXG4gICAgICBvcHRpb25zLm1heFJvd3MgfHwgZGVmYXVsdE9wdGlvbnMubWF4Um93cyxcbiAgICAgIG9wdGlvbnMuY29sdW1uc1RvSW5jbHVkZSB8fCBkZWZhdWx0T3B0aW9ucy5jb2x1bW5zVG9JbmNsdWRlKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplV2l0aFB1YmxpY0ludGVyZmFjZXMoZGF0YVNvdXJjZTogQ29udHJhY3QuRGF0YVNvdXJjZSk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlJbnRlcm5hbFZhbHVlKGRhdGFTb3VyY2UsICdkYXRhU291cmNlJyk7XG5cbiAgICB0aGlzLl9maWVsZHMgPSB0aGlzLl9kYXRhU291cmNlSW5mby5maWVsZHMubWFwKGZpZWxkTW9kZWwgPT4ge1xuICAgICAgY29uc3QgZmllbGRJbXBsID0gbmV3IEZpZWxkSW1wbChmaWVsZE1vZGVsLCBkYXRhU291cmNlKTtcbiAgICAgIHJldHVybiBuZXcgRmllbGQoZmllbGRJbXBsKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXRhU291cmNlSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0ICogYXMgSW50ZXJuYWxDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkSW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWVsZEluZm86IEludGVybmFsQ29udHJhY3QuRmllbGQsXG4gICAgcHJpdmF0ZSBfcGFyZW50RGF0YVNvdXJjZTogQ29udHJhY3QuRGF0YVNvdXJjZSkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWdncmVnYXRpb24oKTogQ29udHJhY3QuRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICAgIHJldHVybiBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZmllbGRBZ2dyZWdhdGlvblR5cGUuY29udmVydCh0aGlzLl9maWVsZEluZm8uYWdncmVnYXRpb24pO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhU291cmNlKCk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnREYXRhU291cmNlO1xuICB9XG5cbiAgcHVibGljIGdldCByb2xlKCk6IENvbnRyYWN0LkZpZWxkUm9sZVR5cGUge1xuICAgIHJldHVybiBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZmllbGRSb2xlVHlwZS5jb252ZXJ0KHRoaXMuX2ZpZWxkSW5mby5yb2xlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0hpZGRlbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNHZW5lcmF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0dlbmVyYXRlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNDYWxjdWxhdGVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0NhbGN1bGF0ZWRGaWVsZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNDb21iaW5lZEZpZWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaXNDb21iaW5lZEZpZWxkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0ZpZWxkSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeSB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgYSBjb25uZWN0aW9uIHN1bW1hcnkuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uU3VtbWFyeSBpbXBsZW1lbnRzIENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Nvbm5lY3Rpb25JbmZvOiBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5KSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkluZm8uaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNlcnZlclVSSSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5zZXJ2ZXJVUkk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkluZm8udHlwZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ29ubmVjdGlvblN1bW1hcnkudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRmllbGRJbXBsIH0gZnJvbSAnLi9JbXBsL0ZpZWxkSW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkIGltcGxlbWVudHMgQ29udHJhY3QuRmllbGQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZmllbGRJbXBsOiBGaWVsZEltcGwpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuZGVzY3JpcHRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFnZ3JlZ2F0aW9uKCk6IENvbnRyYWN0LkZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmFnZ3JlZ2F0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhU291cmNlKCk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuZGF0YVNvdXJjZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm9sZSgpOiBDb250cmFjdC5GaWVsZFJvbGVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLnJvbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNIaWRkZW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzR2VuZXJhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNHZW5lcmF0ZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ2FsY3VsYXRlZEZpZWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNDYWxjdWxhdGVkRmllbGQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtblR5cGUoKTogQ29udHJhY3QuQ29sdW1uVHlwZSB7XG4gICAgdGhyb3cgRXJyb3JIZWxwZXJzLmFwaU5vdEltcGxlbWVudGVkKCdGaWVsZC5jb2x1bW5UeXBlJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tYmluZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzQ29tYmluZWRGaWVsZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRmllbGQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFRhYmxlSW5mbyB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgYSB0YWJsZSBzdW1tYXJ5LlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpcyBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgVGFibGVTdW1tYXJ5IGltcGxlbWVudHMgQ29udHJhY3QuVGFibGVTdW1tYXJ5IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYmxlSW5mbzogVGFibGVJbmZvKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5jb25uZWN0aW9uSWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1c3RvbVNRTCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8uY3VzdG9tU1FMO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZVN1bW1hcnkudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcbmltcG9ydCB7IFRhYmxlYXVXb3Jrc2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVdvcmtzaGVldEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIEZpbHRlckNoYW5nZWRFdmVudCBleHRlbmRzIFRhYmxlYXVXb3Jrc2hlZXRFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LkZpbHRlckNoYW5nZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih3b3Jrc2hlZXQ6IENvbnRyYWN0LldvcmtzaGVldCwgcHJpdmF0ZSBfZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLkZpbHRlckNoYW5nZWQsIHdvcmtzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5GaWx0ZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0LmdldEZpbHRlcnNBc3luYygpLnRoZW48Q29udHJhY3QuRmlsdGVyPihmaWx0ZXJzID0+IHtcbiAgICAgIC8vIFRPRE86IEZpbHRlcmluZyBvZiB0aGUgZmlsdGVycyBzaG91bGQgZXZlbnR1YWxseSBiZSBkb25lIHBsYXRmb3JtIHNpZGUuXG4gICAgICBjb25zdCBldmVudGVkRmlsdGVyID0gZmlsdGVycy5maW5kKChmaWx0ZXIpID0+IChmaWx0ZXIuZmllbGROYW1lID09PSB0aGlzLl9maWVsZE5hbWUpKTtcblxuICAgICAgaWYgKCFldmVudGVkRmlsdGVyKSB7XG4gICAgICAgIC8vIFdlIHNob3VsZG4ndCBoaXQgdGhpcyB1bmxlc3MgdGhlIGZpbHRlciB3YXMgcmVtb3ZlZCBmcm9tIHRoZSB3b3Jrc2hlZXRcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGV2ZW50IHdhcyByYWlzZWQuXG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5NaXNzaW5nRmlsdGVyLCBgY2Fubm90IGZpbmQgZmlsdGVyOiAke3RoaXMuX2ZpZWxkTmFtZX1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50ZWRGaWx0ZXI7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9GaWx0ZXJDaGFuZ2VkRXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdVdvcmtzaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1V29ya3NoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgTWFya3NTZWxlY3RlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVdvcmtzaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuTWFya3NTZWxlY3RlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHdvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0KSB7XG4gICAgc3VwZXIoQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5NYXJrU2VsZWN0aW9uQ2hhbmdlZCwgd29ya3NoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMud29ya3NoZWV0LmdldFNlbGVjdGVkTWFya3NBc3luYygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7XG4gIENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsXG4gIENyb3NzRnJhbWVNZXNzZW5nZXIsXG4gIE1FU1NBR0lOR19WRVJTSU9OIGFzIEFwaU1lc3NhZ2luZ1ZlcnNpb24sXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IENyb3NzRnJhbWVEaXNwYXRjaGVyIH0gZnJvbSAnLi9Dcm9zc0ZyYW1lRGlzcGF0Y2hlcic7XG5cbi8vIENoZWNrcyB0byBzZWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gYW4gaWZyYW1lIGN1cnJlbnRseTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMyNjA3Ni84ODIxMTUzXG5mdW5jdGlvbiBpbklmcmFtZSh0aGlzV2luZG93OiBXaW5kb3cpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdGhpc1dpbmRvdy5zZWxmICE9PSB0aGlzV2luZG93LnBhcmVudDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gYm9vdHN0cmFwIHRoZSBleHRlbnNpb24gd2l0aCBhIGNyb3NzLWZyYW1lIHBhcmVudCB3aGVyZSBUYWJsZWF1IGlzIHJ1bm5pbmdcbiAqXG4gKiBAcGFyYW0gdGhpc1dpbmRvdyBUaGUgd2luZG93IHdoaWNoIHdlIGFyZSBydW5uaW5nIGluIChpbmplY3RlZCBmb3IgdW5pdCB0ZXN0aW5nIHB1cnBvc2VzKVxuICogQHBhcmFtIGludGVybmFsQ29udHJhY3RWZXJzaW9uIFRoZSB2ZXJzaW9uIG51bWJlciBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3Qgd2UgYXJlIHVzaW5nXG4gKiBAcmV0dXJucyBBIHByb21pc2Ugd2hpY2ggaXMgZG9pbmcgdGhlIGFjdHVhbCBib290c3RyYXBwaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb0Nyb3NzRnJhbWVCb290c3RyYXAoXG4gIHRoaXNXaW5kb3c6IFdpbmRvdywgaW50ZXJuYWxDb250cmFjdFZlcnNpb246IENvbnRyYWN0LlZlcnNpb25OdW1iZXIpXG4gIDogUHJvbWlzZTxDb250cmFjdC5JbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlPENvbnRyYWN0LkludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgIGxldCBwYXJlbnQ6IFdpbmRvdztcblxuICAgIC8vIE5vcm1hbGx5LCB3ZSBhcmUgcnVubmluZyBpbnNpZGUgYW4gaWZyYW1lLiAgVGhlIGV4Y2VwdGlvbiB0byB0aGlzIGlzXG4gICAgLy8gd2hlbiB3ZSBhcmUgcnVubmluZyBhcyBhbiBleHRlbnNpb24gaW5zaWRlIGEgZGlhbG9nIGFzIHBhcnQgb2YgdGhlIFVJTmFtZXNwYWNlXG4gICAgLy8gZnVuY3Rpb25hbGl0eS4gIEluIHRoYXQgY2FzZSwgd2Ugd2FudCB0aGUgb3BlbmVyIG9mIHRoaXMgd2luZG93IHJhdGhlciB0aGFuIHRoZSBwYXJlbnQuXG4gICAgaWYgKCFpbklmcmFtZSh0aGlzV2luZG93KSkge1xuICAgICAgcGFyZW50ID0gdGhpc1dpbmRvdy5vcGVuZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IHRoaXNXaW5kb3cucGFyZW50O1xuICAgIH1cblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICByZWplY3QoJ1RoaXMgZXh0ZW5zaW9uIGlzIG5vdCBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUsIGRlc2t0b3AsIG9yIHBvcHVwIHdpbmRvdy4gSW5pdGlhbGl6YXRpb24gZmFpbGVkLicpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgbWVzc2VuZ2VyIHdoaWNoIHdpbGwgZG8gaGUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoaXMgd2luZG93IGFuZCBvdXIgcGFyZW50XG4gICAgLy8gU2luY2Ugd2UgZG9uJ3Qga25vdyB3aGVyZSB3ZSBhcmUgcnVubmluZyB5ZXQsIHdlIGhhdmUgdG8gbWFrZSB0aGlzIGluaXRpYWwgb3JpZ2luICcqJy4gT25jZVxuICAgIC8vIHdlIGhhdmUgc3VjY2Vzc2Z1bGx5IGluaXRpYWxpemVkIG91ciBleHRlbnNpb24sIHdlIHdpbGwgbGltaXQgd2hlcmUgd2Ugc2VuZCBtZXNzYWdlc1xuICAgIGNvbnN0IG1lc3NlbmdlciA9IG5ldyBDcm9zc0ZyYW1lTWVzc2VuZ2VyKHRoaXNXaW5kb3csIHBhcmVudCwgJyonKTtcblxuICAgIC8vIFByZXBhcmUgdG8gc2VuZCBhbiBpbml0aWFsaXphdGlvbiBtZXNzYWdlIHRvIHRoZSBwYXJlbnQgZnJhbWVcbiAgICBjb25zdCBpbml0aWFsaXphdGlvbk1lc3NhZ2UgPSBtZXNzZW5nZXIucHJlcGFyZUluaXRpYWxpemF0aW9uTWVzc2FnZShpbnRlcm5hbENvbnRyYWN0VmVyc2lvbiwgQXBpTWVzc2FnaW5nVmVyc2lvbik7XG5cbiAgICAvLyBXaGVuIHdlIHJlY2VpdmUgYSByZXNwb25zZSBiYWNrIGZyb20gdGhlIHBhcmVudCwgd2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBndWlkcyBtYXRjaCBhbmQgdGhlbiB3ZSBrbm93XG4gICAgLy8gdGhhdCB0aGUgcGFyZW50IGlzIGF3YXJlIG9mIHVzIGFuZCB3ZSBjYW4gc3RhcnQgY29tbXVuaWNhdGluZ1xuICAgIG1lc3Nlbmdlci5zZXRDb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcihmdW5jdGlvbiAobXNnOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlKTogdm9pZCB7XG5cbiAgICAgIC8vIFZlcmlmeSB3ZSBhcmUgZ2V0dGluZyBhIHJlc3BvbnNlIGZyb20gb3VyIGluaXRpYWxpemUgbWVzc2FnZVxuICAgICAgaWYgKG1zZy5jb21tYW5kR3VpZCA9PT0gaW5pdGlhbGl6YXRpb25NZXNzYWdlLm1lc3NhZ2VHdWlkKSB7XG5cbiAgICAgICAgLy8gRm9yIHNlcnZlciwgdGhlIHZlcnNpb25pbmcgb2YgdGhlIGZhY3RvcnkgaXMgZ29ubmEgaGFwcGVuIG9uIHRoZSBvdGhlciBzaWRlIG9mIG91ciBmcmFtZSwgc28ganVzdCByZXR1cm4gdGhlXG4gICAgICAgIC8vIG9uZSB3aGljaCBkb2Vzbid0IGhhdmUgYW55IHZlcnNpb24ga25vd2xlZGdlXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoZXJGYWN0b3J5ID0gKCkgPT4gbmV3IENyb3NzRnJhbWVEaXNwYXRjaGVyKG1lc3Nlbmdlcik7XG4gICAgICAgIHJlc29sdmUoZGlzcGF0Y2hlckZhY3RvcnkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTm93IHRoYXQgb3VyIGhhbmRsZXJzIGFyZSByZWFkeSwgc3RhcnQgbGlzdGVuaW5nIGFuZCBzZW5kIG91ciBpbml0aWFsaXphdGlvbiBtZXNzYWdlXG4gICAgbWVzc2VuZ2VyLnN0YXJ0TGlzdGVuaW5nKCk7XG4gICAgaW5pdGlhbGl6YXRpb25NZXNzYWdlLnNlbmQoKTtcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVCb290c3RyYXAudHMiLCJpbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXhlY3V0ZVJlc3BvbnNlLFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXIsXG4gIE1vZGVsLFxuICBOb3RpZmljYXRpb25IYW5kbGVyLFxuICBWZXJiSWQsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLCBNZXNzZW5nZXIsIE5vdGlmaWNhdGlvbk1lc3NhZ2UgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG4vKipcbiAqIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIEludGVybmFsQXBpRGlzcGF0Y2hlciBpbnRlcmZhY2Ugd2hpY2ggZnVuY3Rpb25zIGJ5IHBhc3NpbmcgbWVzc2FnZXNcbiAqIGFjcm9zcyBhIGZyYW1lIGJvdW5kYXJ5LiBUaGlzIGlzIHVzdWFsbHkgYmV0d2VlbiB0aGUgY29kZSB3aGVyZSBvdXIgamF2c2NyaXB0IGxpYnJhcnkgaGFzIGJlZW4gaW5jbHVkZWRcbiAqIGJ5IGEgM3JkIHBhcnR5IGRldiBhbmQgYW5vdGhlciBmcmFtZSB3aGVyZSBUYWJsZWF1IHNlcnZlciBoYXMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIENyb3NzRnJhbWVEaXNwYXRjaGVyIGltcGxlbWVudHMgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIHtcblxuICAvLyBDb2xsZWN0aW9uIG9mIHBlbmRpbmcgcHJvbWlzZXMgd2hpY2ggYXJlIHdhaXRpbmcgdG8gYmUgcmVzb2x2ZWQuIFdoZW4gd2UgcmVjZWl2ZSBhIHJlc3BvbnNlIGJhY2sgZnJvbSB0aGUgb3RoZXIgZnJhbWUsXG4gIC8vIHRoZXNlIHByb21pc2VzIGNhbiBiZSBlaXRoZXIgcmVzb2x2ZWQgb3IgcmVqZWN0ZWRcbiAgcHJpdmF0ZSBfcGVuZGluZ1Byb21pc2VzOlxuICAgIHsgW21lc3NhZ2VHdWlkOiBzdHJpbmddOiB7IHJlc29sdmU6IChyZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKSA9PiB2b2lkLCByZWplY3Q6IChlcnJvcjogTW9kZWwpID0+IHZvaWQgfSB9ID0ge307XG5cbiAgLy8gVGhlIGNvbGxlY3Rpb24gb2Ygbm90aWZpY2F0aW9uIGhhbmRsZXJzIHdoaWNoIGhhdmUgYmVlbiByZWdpc3RlcmVkIHdpdGggdGhpcyBkaXNwYXRjaGVyXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkhhbmRsZXJzOiBBcnJheTxOb3RpZmljYXRpb25IYW5kbGVyPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVEaXNwYXRjaGVyIHdoaWNoIHdpbGwgdXNlIHRoZSBnaXZlbiBtZXNzZW5nZXIgdG8gY29tbXVuaWNhdGVcbiAgICogQHBhcmFtIF9tZXNzZW5nZXIgYW4gaW5zdGFudGlhdGVkIGFuZCBsaXN0ZW5pbmcgbWVzc2VuZ2VyIG9iamVjdFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NlbmdlcjogTWVzc2VuZ2VyKSB7XG4gICAgaWYgKCF0aGlzLl9tZXNzZW5nZXIpIHtcbiAgICAgIHRocm93ICdNaXNzaW5nIG1lc3NlbmdlciBvYmplY3QnO1xuICAgIH1cblxuICAgIC8vIFNldCB1cCBvdXIgbWVzc2FnZSBoYW5kbGVycy4gV2Ugb25seSBjYXJlIGFib3V0IGluY29taW5nIG5vdGlmaWNhdGlvbnMgYW5kIGNvbW1hbmQgcmVzcG9uc2VzXG4gICAgdGhpcy5fbWVzc2VuZ2VyLnNldENvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKHRoaXMub25Db21tYW5kUmVzcG9uc2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fbWVzc2VuZ2VyLnNldE5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKHRoaXMub25Ob3RpZmljYXRpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICAvLy8vLy8gU3RhcnQgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIGltcGxlbWVudGF0aW9uXG5cbiAgcHVibGljIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPiB7XG4gICAgLy8gVG8gZXhlY3V0ZSBhIHZlcmIsIHdlIGZpcnN0IHByZXBhcmUgYSBjb21tYW5kIG1lc3NhZ2UgYW5kIHRoZW4gZGVmaW5lIGEgcHJvbWlzZS5cbiAgICBjb25zdCBwcmVwYXJlZE1lc3NhZ2UgPSB0aGlzLl9tZXNzZW5nZXIucHJlcGFyZUNvbW1hbmRNZXNzYWdlKHZlcmIsIHBhcmFtZXRlcnMpO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgLy8gU2F2ZSBvZmYgdGhlIHBlbmRpbmcgcHJvbWlzZSBieSB0aGUgbWVzc2FnZUd1aWQgd2UgYXJlIGFib3V0IHRvIHNlbmQuIFdoZW4gYSByZXNwb25zZSBpc1xuICAgICAgLy8gcmVjZWl2ZWQsIHdlJ2xsIGJlIGFibGUgdG8gcmVzb2x2ZSB0aGlzIHByb21pc2Ugd2l0aCB0aGUgcmVzdWx0XG4gICAgICB0aGlzLl9wZW5kaW5nUHJvbWlzZXNbcHJlcGFyZWRNZXNzYWdlLm1lc3NhZ2VHdWlkXSA9IHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfTtcbiAgICB9KTtcblxuICAgIC8vIEFjdHVhbGx5IHNlbmQgdGhlIG1lc3NhZ2UgYW5kIHJldHVybiB0aGUgcHJvbWlzZVxuICAgIHByZXBhcmVkTWVzc2FnZS5zZW5kKCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHVucmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycyA9IHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzLmZpbHRlcihoID0+IGggIT09IGhhbmRsZXIpO1xuICB9XG5cbiAgLy8vLy8vIEVuZCBJbnRlcm5hbEFwaURpc3BhdGNoZXIgaW1wbGVtZW50YXRpb25cblxuICBwcml2YXRlIG9uQ29tbWFuZFJlc3BvbnNlKHJlc3BvbnNlOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlKTogdm9pZCB7XG4gICAgLy8gV2UgZ290IGEgY29tbWFuZCByZXNwb25zZSwgbG9vayB0aHJvdWdoIHRoZSBwZW5kaW5nIHByb21pc2VzIGFuZCByZXNvbHZlXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX3BlbmRpbmdQcm9taXNlcykuaW5kZXhPZihyZXNwb25zZS5jb21tYW5kR3VpZCkgPCAwKSB7XG4gICAgICByZXR1cm47IC8vIFdlIGRvbid0IGhhdmUgYW55IHJlZmVyZW5jZSB0byB0aGlzIGNvbW1hbmQsIGp1c3QgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGVuZGluZ1Byb21pc2UgPSB0aGlzLl9wZW5kaW5nUHJvbWlzZXNbcmVzcG9uc2UuY29tbWFuZEd1aWRdO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhbiBlcnJvciBkZWZpbmVkLCByZWplY3QgdGhlIHByb21pc2VcbiAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgIHBlbmRpbmdQcm9taXNlLnJlamVjdChyZXNwb25zZS5lcnJvcik7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBkYXRhIGRlZmluZWQsIHJlc29sdmUgdGhlIHByb21pc2VcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcGVuZGluZ1Byb21pc2UucmVzb2x2ZSh7IHJlc3VsdDogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCBvdXIgcGVuZGluZyBwcm9taXNlcyBvYmplY3RcbiAgICBkZWxldGUgdGhpcy5fcGVuZGluZ1Byb21pc2VzW3Jlc3BvbnNlLmNvbW1hbmRHdWlkXTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uTWVzc2FnZTogTm90aWZpY2F0aW9uTWVzc2FnZSk6IHZvaWQge1xuICAgIC8vIEdvIHRocm91Z2ggZWFjaCBub3RpZmljYXRpb24gaGFuZGxlciB3ZSBoYXZlIHJlZ2lzdGVyZWQgYW5kIGxldCB0aGVtIGtub3cgYSBub3RpZmljYXRpb24gY2FtZSBpblxuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaGFuZGxlcih7IG5vdGlmaWNhdGlvbklkOiBub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbklkLCBkYXRhOiBub3RpZmljYXRpb25NZXNzYWdlLmRhdGEgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGlzLiBXcmFwIGluIHRyeS9jYXRjaCBzbyBpZiBvbmUgaGFuZGxlciBlcnJvcnMsIHRoZSBvdGhlciBzdGlsbCBnZXQgdGhlIG1lc3NhZ2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZURpc3BhdGNoZXIudHMiLCJpbXBvcnQgeyBJbnRlcm5hbEFwaURpc3BhdGNoZXIgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvRGF0YVNvdXJjZVNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEZpbHRlclNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL0ZpbHRlclNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEdldERhdGFTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9HZXREYXRhU2VydmljZUltcGwnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwnO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnkgfSBmcm9tICcuL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzKGRpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcik6IHZvaWQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBEYXRhU291cmNlU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBHZXREYXRhU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBGaWx0ZXJTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IE5vdGlmaWNhdGlvblNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgUGFyYW1ldGVyc1NlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgU2VsZWN0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvUmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcy50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeSxcbiAgRGF0YVNjaGVtYSxcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEpvaW5EZXNjcmlwdGlvbixcbiAgUGFyYW1ldGVySWQsXG4gIFRhYmxlSW5mbyxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIERhdGFTb3VyY2VTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaEFzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlJlZnJlc2hEYXRhU291cmNlLCBwYXJhbWV0ZXJzKS50aGVuPHZvaWQ+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVUYWJsZXNBc3luYyhkYXRhU291cmNlSWQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8VGFibGVJbmZvPj4ge1xuICAgIGNvbnN0IGpvaW5QYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCB9O1xuXG4gICAgLy8gR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGFibGVzIHVzZWQgYnkgdGhpcyBjb25uZWN0aW9uXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0Sm9pbkRlc2NyaXB0aW9uLCBqb2luUGFyYW1ldGVycykudGhlbjxBcnJheTxUYWJsZUluZm8+Pihqb2luUmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3Qgam9pbkRlc2NyaXB0aW9uID0gam9pblJlc3BvbnNlLnJlc3VsdCBhcyBKb2luRGVzY3JpcHRpb247XG5cbiAgICAgIC8vIGdldEFjdGl2ZVRhYmxlcyBpcyB1bnN1cHBvcnRlZCBmb3IgY3ViZXMgYW5kIEdBLiBXZSBkbyBub3QgaGF2ZSBhIGNvbm5lY3Rpb24gdHlwZSBwcm9wZXJ0eVxuICAgICAgLy8gYXZhaWxhYmxlIGZyb20gdGhlIHBsYXRmb3JtIChpbnRlbnRpb25hbGx5LCB0byByZWR1Y2UgY29kZSBjaHVybiBhcyBuZXcgY29ubmVjdGlvbnMgYXJlIGFkZGVkKS5cbiAgICAgIC8vIEluc3RlYWQsanVzdCBjaGVjayBpZiBhbnkgdGFibGVzIGFyZSByZXR1cm5lZC4gVGhpcyBhcnJheSB3aWxsIGJlIGVtcHR5IGZvciBhbnkgbm9uLXRhYmxlIGJhc2VkIGRhdGFzb3VyY2UuXG4gICAgICBpZiAoam9pbkRlc2NyaXB0aW9uLnRhYmxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLlVuc3VwcG9ydGVkTWV0aG9kRm9yRGF0YVNvdXJjZVR5cGUsXG4gICAgICAgICAgYGdldEFjdGl2ZVRhYmxlcyBpcyBub3Qgc3VwcG9ydGVkIGZvcjogJHtkYXRhU291cmNlSWR9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBqb2luRGVzY3JpcHRpb24udGFibGVzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxEYXRhU2NoZW1hPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0RGF0YVNvdXJjZXMsIHBhcmFtZXRlcnMpLnRoZW48RGF0YVNjaGVtYT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGF0YVNjaGVtYSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBEYXRhU2NoZW1hO1xuICAgICAgcmV0dXJuIGRhdGFTY2hlbWE7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTxDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5W10+IHtcbiAgICBjb25zdCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkIH07XG5cbiAgICAvLyBHZXQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YWJsZXMgdXNlZCBieSB0aGlzIGNvbm5lY3Rpb25cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMsIHBhcmFtcykudGhlbjxDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5W10+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uU3VtbWFyaWVzID0gcmVzcG9uc2UucmVzdWx0IGFzIENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXTtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvblN1bW1hcmllcztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEZpbHRlclR5cGUsXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEV4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyBhcyBFeHRlcm5hbEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyBhcyBJbnRlcm5hbEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcblxuaW1wb3J0IHtcbiAgQ2F0ZWdvcmljYWxEb21haW4sXG4gIENhdGVnb3JpY2FsRmlsdGVyLFxuICBSYW5nZURvbWFpbixcbiAgUmFuZ2VGaWx0ZXIsXG4gIFJlbGF0aXZlRGF0ZUZpbHRlclxufSBmcm9tICcuLi8uLi9Nb2RlbHMvRmlsdGVyTW9kZWxzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vRmlsdGVyU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBEYXRhVmFsdWUgfSBmcm9tICcuLi8uLi9Nb2RlbHMvR2V0RGF0YU1vZGVscyc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4uLy4uL1V0aWxzL1BhcmFtJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlclNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgRmlsdGVyU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLkZpbHRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlckFzeW5jKFxuICAgIHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICB2YWx1ZXM6IEFycmF5PHN0cmluZz4sXG4gICAgdXBkYXRlVHlwZTogQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSxcbiAgICBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkFwcGx5Q2F0ZWdvcmljYWxGaWx0ZXI7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclZhbHVlc10gPSB2YWx1ZXM7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJVcGRhdGVUeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJVcGRhdGVUeXBlLmNvbnZlcnQodXBkYXRlVHlwZSk7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Jc0V4Y2x1ZGVNb2RlXSA9XG4gICAgICAoZmlsdGVyT3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IGZpbHRlck9wdGlvbnMuaXNFeGNsdWRlTW9kZSA9PT0gdW5kZWZpbmVkKSA/IGZhbHNlIDogZmlsdGVyT3B0aW9ucy5pc0V4Y2x1ZGVNb2RlO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLCBmaWVsZE5hbWU6IHN0cmluZywgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuUmFuZ2VGaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkFwcGx5UmFuZ2VGaWx0ZXI7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcblxuICAgIGlmIChmaWx0ZXJPcHRpb25zLm1pbikge1xuICAgICAgbGV0IG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWluIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBtaW4gPSBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZmlsdGVyT3B0aW9ucy5taW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluID0gZmlsdGVyT3B0aW9ucy5taW47XG4gICAgICB9XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTWluXSA9IG1pbjtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5tYXgpIHtcbiAgICAgIGxldCBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGlmIChmaWx0ZXJPcHRpb25zLm1heCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgbWF4ID0gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKGZpbHRlck9wdGlvbnMubWF4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heCA9IGZpbHRlck9wdGlvbnMubWF4O1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU1heF0gPSBtYXg7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbikge1xuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU51bGxPcHRpb25dID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLm51bGxPcHRpb25zLmNvbnZlcnQoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKTtcbiAgICB9XG5cbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQsIGZpZWxkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkNsZWFyRmlsdGVyO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZE5hbWVdID0gZmllbGROYW1lO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3Bvc25lID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRmlsdGVyPj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0RmlsdGVycztcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxBcnJheTxDb250cmFjdC5GaWx0ZXI+PihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZmlsdGVycyA9IHJlc3BvbnNlLnJlc3VsdCBhcyBBcnJheTxJbnRlcm5hbENvbnRyYWN0LkZpbHRlcj47XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RG9tYWluRmlsdGVycyhmaWx0ZXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXRlZ29yaWNhbERvbWFpbkFzeW5jKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkdldENhdGVnb3JpY2FsRG9tYWluO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0ge1xuICAgICAgd29ya3NoZWV0OiB3b3Jrc2hlZXROYW1lXG4gICAgfTtcblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGRJZF0gPSBmaWVsZElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRG9tYWluVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyRG9tYWluVHlwZS5jb252ZXJ0KGRvbWFpblR5cGUpO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRvbWFpbiA9IHJlc3BvbnNlLnJlc3VsdCBhcyBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluO1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydENhdGVnb3JpY2FsRG9tYWluKGRvbWFpbiwgZG9tYWluVHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmFuZ2VEb21haW5Bc3luYyh3b3Jrc2hlZXROYW1lOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuUmFuZ2VEb21haW4+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkdldFJhbmdlRG9tYWluO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0ge1xuICAgICAgd29ya3NoZWV0OiB3b3Jrc2hlZXROYW1lXG4gICAgfTtcblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGRJZF0gPSBmaWVsZElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRG9tYWluVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyRG9tYWluVHlwZS5jb252ZXJ0KGRvbWFpblR5cGUpO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5SYW5nZURvbWFpbj4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGRvbWFpbiA9IHJlc3BvbnNlLnJlc3VsdCBhcyBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRG9tYWluO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UmFuZ2VEb21haW4oZG9tYWluLCBkb21haW5UeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEhlbHBlciBNZXRob2RzXG4gIHByaXZhdGUgY29udmVydERvbWFpbkZpbHRlcnMoZG9tYWluRmlsdGVyczogQXJyYXk8SW50ZXJuYWxDb250cmFjdC5GaWx0ZXI+KTogQXJyYXk8Q29udHJhY3QuRmlsdGVyPiB7XG4gICAgbGV0IGZpbHRlcnM6IEFycmF5PENvbnRyYWN0LkZpbHRlcj4gPSBbXTtcbiAgICBkb21haW5GaWx0ZXJzLmZvckVhY2goZG9tYWluRmlsdGVyID0+IHtcbiAgICAgIHN3aXRjaCAoZG9tYWluRmlsdGVyLmZpbHRlclR5cGUpIHtcbiAgICAgICAgY2FzZSBGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRDYXRlZ29yaWNhbEZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENhdGVnb3JpY2FsIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRmlsdGVyVHlwZS5SYW5nZToge1xuICAgICAgICAgIGxldCBmaWx0ZXIgPSBkb21haW5GaWx0ZXIgYXMgSW50ZXJuYWxDb250cmFjdC5SYW5nZUZpbHRlcjtcbiAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2godGhpcy5jb252ZXJ0UmFuZ2VGaWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBSYW5nZSBGaWx0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEZpbHRlclR5cGUuUmVsYXRpdmVEYXRlOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlcjtcbiAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2godGhpcy5jb252ZXJ0UmVsYXRpdmVEYXRlRmlsdGVyKGZpbHRlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUmVsYXRpdmUgRGF0ZSBGaWx0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydENhdGVnb3JpY2FsRmlsdGVyKGRvbWFpbkZpbHRlcjogSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbEZpbHRlcik6IENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyIHtcbiAgICBsZXQgYXBwbGllZFZhbHVlczogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiA9IGRvbWFpbkZpbHRlci52YWx1ZXMubWFwKGR2ID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGR2LnZhbHVlLCBkdi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IENhdGVnb3JpY2FsRmlsdGVyKFxuICAgICAgZG9tYWluRmlsdGVyLnZpc3VhbElkLndvcmtzaGVldCxcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZENhcHRpb24sXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGROYW1lLFxuICAgICAgQ29udHJhY3QuRmlsdGVyVHlwZS5DYXRlZ29yaWNhbCxcbiAgICAgIGFwcGxpZWRWYWx1ZXMsXG4gICAgICBkb21haW5GaWx0ZXIuaXNFeGNsdWRlKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJhbmdlRmlsdGVyKGRvbWFpbkZpbHRlcjogSW50ZXJuYWxDb250cmFjdC5SYW5nZUZpbHRlcik6IENvbnRyYWN0LlJhbmdlRmlsdGVyIHtcbiAgICBsZXQgbWluVmFsdWU6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluRmlsdGVyLm1pbi52YWx1ZSwgZG9tYWluRmlsdGVyLm1pbi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgbGV0IG1heFZhbHVlOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbkZpbHRlci5tYXgudmFsdWUsIGRvbWFpbkZpbHRlci5tYXguZm9ybWF0dGVkVmFsdWUpO1xuICAgIHJldHVybiBuZXcgUmFuZ2VGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLlJhbmdlLFxuICAgICAgbWluVmFsdWUsXG4gICAgICBtYXhWYWx1ZSxcbiAgICAgIGRvbWFpbkZpbHRlci5pbmNsdWRlTnVsbFZhbHVlc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSZWxhdGl2ZURhdGVGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlcik6IENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlciB7XG4gICAgbGV0IGFuY2hvckRhdGVWYWx1ZTogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW5GaWx0ZXIuYW5jaG9yRGF0ZS52YWx1ZSwgZG9tYWluRmlsdGVyLmFuY2hvckRhdGUuZm9ybWF0dGVkVmFsdWUpO1xuICAgIHJldHVybiBuZXcgUmVsYXRpdmVEYXRlRmlsdGVyKFxuICAgICAgZG9tYWluRmlsdGVyLnZpc3VhbElkLndvcmtzaGVldCxcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZENhcHRpb24sXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGROYW1lLFxuICAgICAgQ29udHJhY3QuRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGUsXG4gICAgICBhbmNob3JEYXRlVmFsdWUsXG4gICAgICBJbnRlcm5hbEVudW1Db252ZXJ0ZXIuZGF0ZVN0ZXBQZXJpb2QuY29udmVydChkb21haW5GaWx0ZXIucGVyaW9kVHlwZSksXG4gICAgICBJbnRlcm5hbEVudW1Db252ZXJ0ZXIuZGF0ZVJhbmdlVHlwZS5jb252ZXJ0KGRvbWFpbkZpbHRlci5yYW5nZVR5cGUpLFxuICAgICAgZG9tYWluRmlsdGVyLnJhbmdlTlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRDYXRlZ29yaWNhbERvbWFpbihcbiAgICBkb21haW46IEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4sXG4gICAgZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluIHtcbiAgICBsZXQgdmFsdWVzOiBBcnJheTxEYXRhVmFsdWU+ID0gZG9tYWluLnZhbHVlcy5tYXAoKGRvbWFpbkR2KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWYWx1ZShkb21haW5Edi52YWx1ZSwgZG9tYWluRHYuZm9ybWF0dGVkVmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgQ2F0ZWdvcmljYWxEb21haW4odmFsdWVzLCBkb21haW5UeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJhbmdlRG9tYWluKGRvbWFpbjogSW50ZXJuYWxDb250cmFjdC5SYW5nZURvbWFpbiwgZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IENvbnRyYWN0LlJhbmdlRG9tYWluIHtcbiAgICBsZXQgbWluOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbi5taW4udmFsdWUsIGRvbWFpbi5taW4uZm9ybWF0dGVkVmFsdWUpO1xuICAgIGxldCBtYXg6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluLm1heC52YWx1ZSwgZG9tYWluLm1heC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSYW5nZURvbWFpbihcbiAgICAgIG1pbixcbiAgICAgIG1heCxcbiAgICAgIGRvbWFpblR5cGVcbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0ZpbHRlclNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHtcbiAgRmlsdGVyRG9tYWluVHlwZSBhcyBFeHRlcm5hbERvbWFpblR5cGUsXG4gIEZpbHRlck51bGxPcHRpb24gYXMgRXh0ZXJuYWxOdWxsT3B0aW9uLFxuICBGaWx0ZXJVcGRhdGVUeXBlIGFzIEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZVxufSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIEZpbHRlckRvbWFpblR5cGUgYXMgSW50ZXJuYWxEb21haW5UeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uIGFzIEludGVybmFsTnVsbE9wdGlvbixcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGVcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRW51bUNvbnZlcnRlciB9IGZyb20gJy4uL1V0aWxzL0VudW1Db252ZXJ0ZXInO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp0eXBlZGVmIC0gRGlzYWJsZSB0aGlzIHRvIG1ha2UgZGVjbGFyaW5nIHRoZXNlIGNsYXNzZXMgYSBiaXQgZWFzaWVyICovXG4vKipcbiAqIE1hcHMgZW51bXMgdXNlZCBieSB0aGUgZXh0ZXJuYWwtYXBpLWNvbnRyYWN0IHRvIHRoZSBlbnVtcyB1c2VkXG4gKiBpbiB0aGUgaW50ZXJuYWwtYXBpLWNvbnRyYWN0LCB3aGljaCBkZXZlbG9wZXJzIGNvZGUgYWdhaW5zdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyB7XG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyRG9tYWluVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEV4dGVybmFsRG9tYWluVHlwZSwgSW50ZXJuYWxEb21haW5UeXBlPih7XG4gICAgW0V4dGVybmFsRG9tYWluVHlwZS5SZWxldmFudF06IEludGVybmFsRG9tYWluVHlwZS5SZWxldmFudCxcbiAgICBbRXh0ZXJuYWxEb21haW5UeXBlLkRhdGFiYXNlXTogSW50ZXJuYWxEb21haW5UeXBlLkRhdGFiYXNlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgbnVsbE9wdGlvbnMgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbE51bGxPcHRpb24sIEludGVybmFsTnVsbE9wdGlvbj4oe1xuICAgIFtFeHRlcm5hbE51bGxPcHRpb24uQWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLkFsbFZhbHVlcyxcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXNdOiBJbnRlcm5hbE51bGxPcHRpb24uTm9uTnVsbFZhbHVlcyxcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXNdOiBJbnRlcm5hbE51bGxPcHRpb24uTnVsbFZhbHVlc1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclVwZGF0ZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsIEludGVybmFsRmlsdGVyVXBkYXRlVHlwZT4oe1xuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZCxcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbF06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGwsXG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmVdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlLFxuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZV06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXG4gIH0pO1xufVxuLyogdHNsaW50OmVuYWJsZTp0eXBlZGVmICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9GaWx0ZXJTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIgaW1wbGVtZW50cyBDb250cmFjdC5GaWx0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF93b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIF9maWVsZE5hbWU6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgX2ZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJvdGVjdGVkIF9maWVsZElkOiBzdHJpbmcpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpbHRlclR5cGUoKTogQ29udHJhY3QuRmlsdGVyVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkZpZWxkPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhdGVnb3JpY2FsRmlsdGVyIGV4dGVuZHMgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBmaWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByaXZhdGUgX2FwcGxpZWRWYWx1ZXM6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4sXG4gICAgcHJpdmF0ZSBfaXNFeGNsdWRlTW9kZTogYm9vbGVhbikge1xuICAgIHN1cGVyKHdvcmtzaGVldE5hbWUsIGZpZWxkTmFtZSwgZmlsdGVyVHlwZSwgZmllbGRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwcGxpZWRWYWx1ZXMoKTogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpZWRWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXhjbHVkZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRXhjbHVkZU1vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0RG9tYWluQXN5bmMoZG9tYWluVHlwZT86IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBQcm9taXNlPENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluPiB7XG4gICAgaWYgKCFkb21haW5UeXBlKSB7XG4gICAgICBkb21haW5UeXBlID0gQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZS5SZWxldmFudDtcbiAgICB9XG5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGU+KGRvbWFpblR5cGUsIENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldENhdGVnb3JpY2FsRG9tYWluQXN5bmModGhpcy5fd29ya3NoZWV0TmFtZSwgdGhpcy5fZmllbGRJZCwgZG9tYWluVHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJhbmdlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuUmFuZ2VGaWx0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBmaWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByaXZhdGUgX21pbjogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX21heDogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX2luY2x1ZGVOdWxsVmFsdWVzOiBib29sZWFuKSB7XG4gICAgc3VwZXIod29ya3NoZWV0TmFtZSwgZmllbGROYW1lLCBmaWx0ZXJUeXBlLCBmaWVsZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluVmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXhWYWx1ZSgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGluY2x1ZGVOdWxsVmFsdWVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlTnVsbFZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXREb21haW5Bc3luYyhkb21haW5UeXBlPzogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuUmFuZ2VEb21haW4+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgaWYgKCFkb21haW5UeXBlKSB7XG4gICAgICBkb21haW5UeXBlID0gQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZS5SZWxldmFudDtcbiAgICB9XG5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGU+KGRvbWFpblR5cGUsIENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0UmFuZ2VEb21haW5Bc3luYyh0aGlzLl93b3Jrc2hlZXROYW1lLCB0aGlzLl9maWVsZElkLCBkb21haW5UeXBlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVsYXRpdmVEYXRlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9hbmNob3JEYXRlOiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfcGVyaW9kVHlwZTogQ29udHJhY3QuUGVyaW9kVHlwZSxcbiAgICBwcml2YXRlIF9yYW5nZVR5cGU6IENvbnRyYWN0LkRhdGVSYW5nZVR5cGUsXG4gICAgcHJpdmF0ZSBfcmFuZ2VOOiBudW1iZXIpIHtcbiAgICBzdXBlcih3b3Jrc2hlZXROYW1lLCBmaWVsZE5hbWUsIGZpbHRlclR5cGUsIGZpZWxkSWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBhbmNob3JEYXRlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuY2hvckRhdGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBlcmlvZFR5cGUoKTogQ29udHJhY3QuUGVyaW9kVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmlvZFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJhbmdlVHlwZSgpOiBDb250cmFjdC5EYXRlUmFuZ2VUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2VUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCByYW5nZU4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2VOO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWNhbERvbWFpbiBpbXBsZW1lbnRzIENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZhbHVlczogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPixcbiAgICBwcml2YXRlIF9kb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlcygpOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5UeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZURvbWFpbiBpbXBsZW1lbnRzIENvbnRyYWN0LlJhbmdlRG9tYWluIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21pbjogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX21heDogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX2RvbWFpblR5cGU6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4KCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL0ZpbHRlck1vZGVscy50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHtcbiAgRGF0YVRhYmxlIGFzIERhdGFUYWJsZUludGVybmFsQ29udHJhY3QsXG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBIaWdobGlnaHRlZE1hcmtzVGFibGUsXG4gIFBhcmFtZXRlcklkLFxuICBTZWxlY3RlZE1hcmtzVGFibGUsXG4gIFVuZGVybHlpbmdEYXRhVGFibGUsXG4gIFZlcmJJZCxcbiAgVmlzdWFsSWQsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgQ29sdW1uLCBEYXRhVGFibGUsIERhdGFWYWx1ZSwgTWFya0luZm8gfSBmcm9tICcuLi8uLi9Nb2RlbHMvR2V0RGF0YU1vZGVscyc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSwgR2V0RGF0YVR5cGUgfSBmcm9tICcuLi9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgR2V0RGF0YVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgR2V0RGF0YVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5HZXREYXRhO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgLy8gQ3JlYXRlIGFsbCBvZiBvdXIgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHZlcmIgPSBnZXRUeXBlID09PSBHZXREYXRhVHlwZS5TdW1tYXJ5ID8gVmVyYklkLkdldERhdGFTdW1tYXJ5RGF0YSA6IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5JZ25vcmVBbGlhc2VzXSA9IGlnbm9yZUFsaWFzZXM7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5JZ25vcmVTZWxlY3Rpb25dID0gaWdub3JlU2VsZWN0aW9uO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSW5jbHVkZUFsbENvbHVtbnNdID0gaW5jbHVkZUFsbENvbHVtbnM7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5NYXhSb3dzXSA9IG1heFJvd3M7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48RGF0YVRhYmxlPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgVW5kZXJseWluZ0RhdGFUYWJsZTtcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhLmRhdGEsIHJlc3BvbnNlRGF0YS5pc1N1bW1hcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldFNlbGVjdGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgU2VsZWN0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEhpZ2hsaWdodGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldEhpZ2hsaWdodGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VEYXRhQXN5bmMoXG4gICAgZGF0YVNvdXJjZUlkOiBzdHJpbmcsXG4gICAgaWdub3JlQWxpYXNlczogYm9vbGVhbixcbiAgICBtYXhSb3dzOiBudW1iZXIsXG4gICAgY29sdW1uc1RvSW5jbHVkZTogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkLFxuICAgICAgW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdOiBpZ25vcmVBbGlhc2VzLFxuICAgICAgW1BhcmFtZXRlcklkLk1heFJvd3NdOiBtYXhSb3dzLFxuICAgICAgW1BhcmFtZXRlcklkLkNvbHVtbnNUb0luY2x1ZGVdOiBjb2x1bW5zVG9JbmNsdWRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXREYXRhU291cmNlRGF0YSwgcGFyYW1ldGVycykudGhlbjxEYXRhVGFibGU+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGEuZGF0YSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhOiBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LCBpc1N1bW1hcnk6IGJvb2xlYW4pOiBEYXRhVGFibGUge1xuICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZURhdGEuaGVhZGVycy5tYXAoaCA9PiBuZXcgQ29sdW1uKGguZmllbGRDYXB0aW9uLFxuICAgICAgQ29udHJhY3QuRGF0YVR5cGUuU3RyaW5nIC8qaC5EYXRhVHlwZSovLFxuICAgICAgaC5pc1JlZmVyZW5jZWQsXG4gICAgICBoLmluZGV4KSk7XG4gICAgLy8gVE9ETyBUaGlzIHNob3VsZCBiZSBjb250cm9sbGVkIGJ5IGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBhcGkgd2lsbCByZXNwb25kIG1hcmtzIGluZm8gb3Igbm90XG4gICAgbGV0IG1hcmtzO1xuICAgIGlmIChyZXNwb25zZURhdGEubWFya3MpIHtcbiAgICAgIG1hcmtzID0gcmVzcG9uc2VEYXRhLm1hcmtzLm1hcChoID0+IG5ldyBNYXJrSW5mbyhoLnR5cGUsXG4gICAgICAgIGguY29sb3IsXG4gICAgICAgIGgudHVwbGVJZCkpO1xuICAgIH1cbiAgICBjb25zdCB0YWJsZSA9IHJlc3BvbnNlRGF0YS5kYXRhVGFibGUubWFwKHJvdyA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcChjZWxsID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoY2VsbC52YWx1ZSwgY2VsbC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChtYXJrcykge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVGFibGUodGFibGUsIGhlYWRlcnMsIHRhYmxlLmxlbmd0aCwgaXNTdW1tYXJ5LCBtYXJrcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0YVRhYmxlKHRhYmxlLCBoZWFkZXJzLCB0YWJsZS5sZW5ndGgsIGlzU3VtbWFyeSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLCBNb2RlbCwgTm90aWZpY2F0aW9uLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UsIFVucmVnaXN0ZXJGbiB9IGZyb20gJy4uL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuY2xhc3MgUmVnaXN0cmF0aW9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpbHRlckZuOiAobm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKSA9PiBib29sZWFuLFxuICAgIHByaXZhdGUgX2NhbGxiYWNrRm46IChub3RpZmljYXRpb25Nb2RlbDogTW9kZWwpID0+IHZvaWQpIHtcbiAgICAvLyBOb3RoaW5nIEhlcmVcbiAgfVxuXG4gIHB1YmxpYyBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Nb2RlbDogTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyRm4obm90aWZpY2F0aW9uTW9kZWwpKSB7XG4gICAgICB0aGlzLl9jYWxsYmFja0ZuKG5vdGlmaWNhdGlvbk1vZGVsKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2VJbXBsIGltcGxlbWVudHMgTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2hhbmRsZXJzOiB7IFtub3RpZmljYXRpb25JZDogc3RyaW5nXTogQXJyYXk8UmVnaXN0cmF0aW9uPiB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikge1xuICAgIHRoaXMuX2hhbmRsZXJzID0ge307XG4gICAgdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcih0aGlzLm9uTm90aWZpY2F0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihpZDogTm90aWZpY2F0aW9uSWQsIGZpbHRlckZuOiAobW9kZWw6IE1vZGVsKSA9PiBib29sZWFuLCBoYW5kbGVyOiAobW9kZWw6IE1vZGVsKSA9PiB2b2lkKTogVW5yZWdpc3RlckZuIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzW2lkXSB8fCBuZXcgQXJyYXk8UmVnaXN0cmF0aW9uPigpO1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb24oZmlsdGVyRm4sIGhhbmRsZXIpO1xuICAgIGhhbmRsZXJzLnB1c2gocmVnaXN0cmF0aW9uKTtcbiAgICB0aGlzLl9oYW5kbGVyc1tpZF0gPSBoYW5kbGVycztcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVSZWdpc3RyYXRpb24oaWQsIHJlZ2lzdHJhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGhhc0hhbmRsZXJzRm9yTm90aWZpY2F0aW9uVHlwZShpZDogTm90aWZpY2F0aW9uSWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMuaGFzT3duUHJvcGVydHkoaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUobm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbklkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdvIHRocm91Z2ggYW5kIGNoZWNrIGZvciBhbGwgdGhlIGhhbmRsZXJzIG9mIHRoaXMgcGFydGljdWxhciBub3RpZmljYXRpb25cbiAgICB0aGlzLl9oYW5kbGVyc1tub3RpZmljYXRpb24ubm90aWZpY2F0aW9uSWRdLmZvckVhY2goaCA9PiBoLm9uTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbi5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVJlZ2lzdHJhdGlvbihpZDogTm90aWZpY2F0aW9uSWQsIHJlZ2lzdHJhdGlvbjogUmVnaXN0cmF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc0hhbmRsZXJzRm9yTm90aWZpY2F0aW9uVHlwZShpZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVyc1tpZF0gPSB0aGlzLl9oYW5kbGVyc1tpZF0uZmlsdGVyKHJlZyA9PiByZWcgIT09IHJlZ2lzdHJhdGlvbik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIE1vZGVsLFxuICBQYXJhbWV0ZXJJZCxcbiAgUGFyYW1ldGVySW5mbyxcbiAgU2hlZXRQYXRoLFxuICBWZXJiSWQsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgUGFyYW1ldGVySW1wbCB9IGZyb20gJy4uLy4uL0ltcGwvUGFyYW1ldGVySW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXIgfSBmcm9tICcuLi8uLi9QYXJhbWV0ZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyc1NlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgUGFyYW1ldGVyc1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlcnNGb3JTaGVldEFzeW5jKHNoZWV0UGF0aDogU2hlZXRQYXRoLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPEFycmF5PFBhcmFtZXRlcj4+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlNoZWV0UGF0aF06IHNoZWV0UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRQYXJhbWV0ZXJzRm9yU2hlZXQsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gVE9ETyAtIENoZWNrIGZvciBlcnJvclxuXG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgQXJyYXk8UGFyYW1ldGVySW5mbz47XG4gICAgICByZXR1cm4gcmVzdWx0Lm1hcChwYXJhbWV0ZXJJbmZvID0+IHtcbiAgICAgICAgY29uc3QgaW1wbCA9IG5ldyBQYXJhbWV0ZXJJbXBsKHBhcmFtZXRlckluZm8pO1xuICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlcihpbXBsLCBzaGVldCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYXJhbWV0ZXJWYWx1ZUFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxQYXJhbWV0ZXJJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5QYXJhbWV0ZXJGaWVsZE5hbWVdOiBmaWVsZE5hbWUsXG4gICAgICBbUGFyYW1ldGVySWQuUGFyYW1ldGVyVmFsdWVdOiBuZXdWYWx1ZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DaGFuZ2VQYXJhbWV0ZXJWYWx1ZSwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgUGFyYW1ldGVySW5mbztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckJ5TmFtZUFzeW5jKG5hbWU6IHN0cmluZywgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5maW5kUGFyYW1ldGVyQXN5bmMoc2hlZXQsIG5hbWUsIHVuZGVmaW5lZCk7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckJ5R2xvYmFsRmllbGROYW1lQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFBhcmFtZXRlckFzeW5jKHNoZWV0LCB1bmRlZmluZWQsIGZpZWxkTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJhbWV0ZXJBc3luYyhcbiAgICBzaGVldDogQ29udHJhY3QuU2hlZXQsXG4gICAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUGFyYW1ldGVyQ2FwdGlvbl0gPSBuYW1lO1xuICAgIH0gZWxzZSBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUGFyYW1ldGVyRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsICduYW1lIG9yIGZpZWxkTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvIGZpbmQgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuRmluZFBhcmFtZXRlciwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZU9mUGFyYW1ldGVySW5mbyA9IChvYmplY3Q6IE1vZGVsKTogb2JqZWN0IGlzIFBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgICByZXR1cm4gJ2ZpZWxkTmFtZScgaW4gb2JqZWN0O1xuICAgICAgfTtcblxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0byBzZWUgaWYgd2UgZ290IGEgdmFsaWQgcmVzcG9uc2UgYmFjayBhZ2FpblxuICAgICAgaWYgKGluc3RhbmNlT2ZQYXJhbWV0ZXJJbmZvKHJlc3BvbnNlLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIFBhcmFtZXRlckluZm87XG4gICAgICAgIGNvbnN0IGltcGwgPSBuZXcgUGFyYW1ldGVySW1wbChyZXN1bHQpO1xuICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlcihpbXBsLCBzaGVldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQsIFBhcmFtZXRlckluZm8gfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFBhcmFtZXRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQnO1xuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4uL1V0aWxzL1BhcmFtJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckltcGwge1xuICBwcml2YXRlIF9hbGxvd2FibGVWYWx1ZXM6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uO1xuICBwcml2YXRlIF9nbG9iYWxGaWVsZE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbykge1xuICAgIHRoaXMuc2V0UGFyYW1ldGVySW5mbyhwYXJhbWV0ZXJJbmZvKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRWYWx1ZSgpOiBEYXRhVmFsdWUge1xuICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKHRoaXMuX3BhcmFtZXRlckluZm8uY3VycmVudFZhbHVlLnZhbHVlLCB0aGlzLl9wYXJhbWV0ZXJJbmZvLmN1cnJlbnRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmRhdGFUeXBlLmNvbnZlcnQodGhpcy5fcGFyYW1ldGVySW5mby5kYXRhVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbEZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxsb3dhYmxlVmFsdWVzKCk6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVZhbHVlQXN5bmMobmV3VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBEYXRlKTogUHJvbWlzZTxEYXRhVmFsdWU+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKG5ld1ZhbHVlLCAnbmV3VmFsdWUnKTtcblxuICAgIGxldCBjb2VyY2VkVmFsdWUgPSBQYXJhbS5zZXJpYWxpemVQYXJhbXRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHBhcmFtZXRlcnNTZXJ2aWNlLmNoYW5nZVBhcmFtZXRlclZhbHVlQXN5bmModGhpcy5fZ2xvYmFsRmllbGROYW1lLCBjb2VyY2VkVmFsdWUpLnRoZW4ocGFyYW1ldGVySW5mbyA9PiB7XG4gICAgICB0aGlzLnNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbyk7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCBnb2VzIHRocm91Z2ggYW5kIHJlZ2lzdGVycyBlYWNoIGV2ZW50IHR5cGUgdGhpcyBpbXBsIGtub3dzIGFib3V0XG4gICAqIHdpdGggdGhlIE5vdGlmaWNhdGlvblNlcnZpY2UuIEl0IHJldHVybnMgYW4gYXJyYXkgb2YgU2luZ2xlRXZlbnRNYW5hZ2VyIG9iamVjdHMgd2hpY2hcbiAgICogY2FuIHRoZW4gYmUgcGFzc2VkIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIHRvIGhhbmRsZSB1c2VyIHJlZ2lzdHJhdGlvbiAvIHVucmVnaXN0cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gc2hlZXQgVGhlIHNoZWV0IG9iamVjdCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkIHdpdGggdGhlIGV2ZW50IG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybnMge0FycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj59IENvbGxlY3Rpb24gb2YgZXZlbnQgbWFuYWdlcnMgdG8gcGFzcyB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlclxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFsbCBvZiB0aGUgZXZlbnQgbWFuYWdlcnMgd2UnbGwgbmVlZCAob25lIGZvciBlYWNoIGV2ZW50IHR5cGUpXG4gICAgY29uc3QgcGFyYW1ldGVyRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuUGFyYW1ldGVyQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuUGFyYW1ldGVyQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBtb2RlbCBhcyBzdHJpbmc7XG4gICAgICByZXR1cm4gZmllbGROYW1lID09PSB0aGlzLl9nbG9iYWxGaWVsZE5hbWU7XG4gICAgfSwgKGZpZWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBwYXJhbWV0ZXJFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFBhcmFtZXRlckNoYW5nZWRFdmVudChmaWVsZE5hbWUsIHNoZWV0KSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2gocGFyYW1ldGVyRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIHNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbyk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtZXRlckluZm8gPSBwYXJhbWV0ZXJJbmZvO1xuICAgIHRoaXMuX2dsb2JhbEZpZWxkTmFtZSA9IHBhcmFtZXRlckluZm8uZmllbGROYW1lO1xuXG4gICAgY29uc3QgdHlwZSA9IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5hbGxvd2FibGVWYWx1ZXMuY29udmVydChwYXJhbWV0ZXJJbmZvLmFsbG93YWJsZVZhbHVlc1R5cGUpO1xuICAgIGxldCBsaXN0VmFsdWVzOiBBcnJheTxEYXRhVmFsdWU+IHwgdW5kZWZpbmVkO1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWx1ZTogRGF0YVZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIGxldCBzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGxldCBkYXRlU3RlcFBlcmlvZDogQ29udHJhY3QuUGVyaW9kVHlwZSB8IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlID09PSBDb250cmFjdC5QYXJhbWV0ZXJWYWx1ZVR5cGUuTGlzdCkge1xuICAgICAgY29uc3QgdmFsdWVzID0gcGFyYW1ldGVySW5mby5hbGxvd2FibGVWYWx1ZXMgfHwgW107XG4gICAgICBsaXN0VmFsdWVzID0gdmFsdWVzLm1hcCh2YWwgPT4gbmV3IERhdGFWYWx1ZSh2YWwudmFsdWUsIHZhbC5mb3JtYXR0ZWRWYWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29udHJhY3QuUGFyYW1ldGVyVmFsdWVUeXBlLlJhbmdlKSB7XG4gICAgICBtaW5WYWx1ZSA9IHBhcmFtZXRlckluZm8ubWluVmFsdWUgJiYgbmV3IERhdGFWYWx1ZShwYXJhbWV0ZXJJbmZvLm1pblZhbHVlLnZhbHVlLCBwYXJhbWV0ZXJJbmZvLm1pblZhbHVlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIG1heFZhbHVlID0gcGFyYW1ldGVySW5mby5tYXhWYWx1ZSAmJiBuZXcgRGF0YVZhbHVlKHBhcmFtZXRlckluZm8ubWF4VmFsdWUudmFsdWUsIHBhcmFtZXRlckluZm8ubWF4VmFsdWUuZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgc3RlcFNpemUgPSBwYXJhbWV0ZXJJbmZvLnN0ZXBTaXplO1xuICAgICAgZGF0ZVN0ZXBQZXJpb2QgPSBwYXJhbWV0ZXJJbmZvLmRhdGVTdGVwUGVyaW9kICYmXG4gICAgICAgIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXRlU3RlcFBlcmlvZC5jb252ZXJ0KHBhcmFtZXRlckluZm8uZGF0ZVN0ZXBQZXJpb2QpO1xuICAgIH1cblxuICAgIHRoaXMuX2FsbG93YWJsZVZhbHVlcyA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBhbGxvd2FibGVWYWx1ZXM6IGxpc3RWYWx1ZXMsXG4gICAgICBtaW5WYWx1ZTogbWluVmFsdWUsXG4gICAgICBtYXhWYWx1ZTogbWF4VmFsdWUsXG4gICAgICBzdGVwU2l6ZTogc3RlcFNpemUsXG4gICAgICBkYXRlU3RlcFBlcmlvZDogZGF0ZVN0ZXBQZXJpb2RcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1BhcmFtZXRlckltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBUYWJsZWF1U2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVNoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVNoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2xvYmFsRmllbGROYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuUGFyYW1ldGVyQ2hhbmdlZCwgc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlckFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyPiB7XG4gICAgLy8gQ2FsbCBkb3duIHRvIG91ciBzZXJ2aWNlIHRvIGdldCB0aGUgcGFyYW1ldGVyIGJhY2sgdmlhIGl0cyBmaWVsZCBuYW1lXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZmluZFBhcmFtZXRlckJ5R2xvYmFsRmllbGROYW1lQXN5bmModGhpcy5fZ2xvYmFsRmllbGROYW1lLCB0aGlzLnNoZWV0KS50aGVuKHBhcmFtZXRlciA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLk1pc3NpbmdQYXJhbWV0ZXIsIGBDYW5ub3QgZmluZCBwYXJhbWV0ZXI6ICR7dGhpcy5fZ2xvYmFsRmllbGROYW1lfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvUGFyYW1ldGVyQ2hhbmdlZEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJJbXBsIH0gZnJvbSAnLi9JbXBsL1BhcmFtZXRlckltcGwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBQYXJhbWV0ZXIgY29udHJhY3QuIENhbGxzIGRvd24gdG8gdGhlIGltcGxcbiAqIGNsYXNzIGZvciBhbG1vc3QgYWxsIG9mIHRoZSB3b3JrIGl0IGRvZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXIgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LlBhcmFtZXRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtZXRlckltcGw6IFBhcmFtZXRlckltcGwsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIG91ciBldmVudCBoYW5kbGluZyBmb3IgdGhpcyBjbGFzc1xuICAgIHRoaXMucGFyYW1ldGVySW1wbC5pbml0aWFsaXplRXZlbnRzKHNoZWV0KS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50VmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbXBsLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGUoKTogQ29udHJhY3QuRGF0YVR5cGUge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuZGF0YVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbG93YWJsZVZhbHVlcygpOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5hbGxvd2FibGVWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZSk6IFByb21pc2U8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5jaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUGFyYW1ldGVyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBQYXJhbWV0ZXJJZCxcbiAgUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUgYXMgU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIERpbWVuc2lvblNlbGVjdGlvbk1vZGVsLFxuICBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCxcbiAgUmFuZ2VTZWxlY3Rpb25Nb2RlbCxcbiAgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyLFxuICBUdXBsZVNlbGVjdGlvbk1vZGVsLFxuICBWYWx1ZVNlbGVjdGlvbk1vZGVsXG59IGZyb20gJy4uLy4uL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZWxlY3Rpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNlbGVjdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5TZWxlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNsZWFyIGFsbCB0aGUgc2VsZWN0ZWQgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB2aXN1YWxJZFxuICAgKi9cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkNsZWFyU2VsZWN0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47IC8vIEV4cGVjdGluZyBhbiBlbXB0eSBtb2RlbCBhbmQgaGVuY2UgdGhlIHZvaWQgcmVzcG9uc2UuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAgICpcbiAgICogQHBhcmFtIHZpc3VhbElkXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYVxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHNlbGVjdGlvbkNyaXRlcmlhcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnU2VsZWN0aW9uIGNyaXRlcmlhIG1pc3NpbmcgZm9yIHNlbGVjdGluZyBtYXJrcyBieSB2YWx1ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvblR5cGU6IHN0cmluZyA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICAgIGxldCBzZWxlY3Rpb25Dcml0ZXJpYVR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25Dcml0ZXJpYShzZWxlY3Rpb25Dcml0ZXJpYXNbMF0pO1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gdGhpcy5wYXJzZVNlbGVjdGlvbk1hcmtzKHNlbGVjdGlvbkNyaXRlcmlhcywgc2VsZWN0aW9uQ3JpdGVyaWFUeXBlKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uVXBkYXRlVHlwZV06IHNlbGVjdGlvblR5cGVcbiAgICB9O1xuXG4gICAgc3dpdGNoIChzZWxlY3Rpb25Dcml0ZXJpYVR5cGUpIHtcbiAgICAgIGNhc2UgU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5IaWVyVmFsU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmhpZXJNb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5RdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnF1YW50TW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZToge1xuICAgICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRpbVZhbFNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5kaW1Nb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuU2VsZWN0QnlWYWx1ZSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBFeHBlY3RpbmcgYW4gZW1wdHkgbW9kZWwgYW5kIGhlbmNlIHRoZSB2b2lkIHJlc3BvbnNlLlxuICAgICAgcmV0dXJuO1xuICAgICAgLy8gVE9ETyBJbnZlc3RpZ2F0ZSB0aGUgZXJyb3IgcmVzcG9uc2Ugd2l0aCBtdWx0aXBsZSBvdXRwdXQgcGFyYW1zIGFuZCB0aHJvdyBlcnJvciBhY2NvcmRpbmdseS5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAqXG4gKiBAcGFyYW0gdmlzdWFsSWRcbiAqIEBwYXJhbSBNYXJrSW5mb1xuICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAqL1xuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIG1hcmtzOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChtYXJrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnTWFya3MgaW5mbyBtaXNzaW5nIGZvciBzZWxlY3RpbmcgbWFya3MgYnkgSWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlOiBzdHJpbmcgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uVXBkYXRlVHlwZShzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IHRoaXMucGFyc2VTZWxlY3Rpb25JZHMobWFya3MpO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25VcGRhdGVUeXBlXTogc2VsZWN0aW9uVHlwZSxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25dOiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5zZWxlY3Rpb25cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNlbGVjdEJ5VmFsdWUsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRXhwZWN0aW5nIGFuIGVtcHR5IG1vZGVsIGFuZCBoZW5jZSB0aGUgdm9pZCByZXNwb25zZS5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgdGhlIGVycm9yIHJlc3BvbnNlIHdpdGggbXVsdGlwbGUgb3V0cHV0IHBhcmFtcyBhbmQgdGhyb3cgZXJyb3IgYWNjb3JkaW5nbHkuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgTWFya3NJbmZvXG4gICAqIEBwYXJhbSBtYXJrc1xuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZVNlbGVjdGlvbklkcyhtYXJrczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+KTogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyIHtcbiAgICBsZXQgaWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgbGV0IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIgPSBuZXcgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHR1cGxlSWQ6IE51bWJlciB8IHVuZGVmaW5lZCA9IG1hcmtzW2ldLnR1cGxlSWQ7XG4gICAgICBpZiAodHVwbGVJZCAhPT0gdW5kZWZpbmVkICYmIHR1cGxlSWQgIT09IG51bGwpIHsgLy8gSWYgdHVwbGUgaWQgaXMgcHJvdmlkZWQgdXNlIHRoYXQgaW5zdGVhZCBvZiBwYWlyXG4gICAgICAgIGlkcy5wdXNoKHR1cGxlSWQudG9TdHJpbmcoKSk7IC8vIGNvbGxlY3QgdGhlIHR1cGxlIGlkc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICd0dXBsZUlkIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkcy5sZW5ndGggIT09IDApIHsgLy8gdHVwbGUgaWRzIGJhc2VkIHNlbGVjdGlvblxuICAgICAgbGV0IHR1cGxlU2VsZWN0aW9uTW9kZWw6IFR1cGxlU2VsZWN0aW9uTW9kZWwgPSBuZXcgVHVwbGVTZWxlY3Rpb25Nb2RlbCgpO1xuICAgICAgdHVwbGVTZWxlY3Rpb25Nb2RlbC5zZWxlY3Rpb25UeXBlID0gJ3R1cGxlcyc7XG4gICAgICB0dXBsZVNlbGVjdGlvbk1vZGVsLm9iamVjdElkcyA9IGlkcztcbiAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnNlbGVjdGlvbiA9IHR1cGxlU2VsZWN0aW9uTW9kZWw7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjtcbiAgfVxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgdmFsdWVzLlxuICAgKlxuICAgKiBTdXBwb3J0cyAzIHR5cGVzIGZvciBzZWxlY3Rpb246XG4gICAqIDEpIGhpZXJhcmNoaWNhbCB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICogMikgcmFuZ2UgdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqIDMpIERpbWVuc2lvbiB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIG1hcmtzXG4gICAqIEBwYXJhbSBoaWVyTW9kZWxBcnJcbiAgICogQHBhcmFtIGRpbU1vZGVsQXJyXG4gICAqIEBwYXJhbSBxdWFudE1vZGVsQXJyXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25cbiAgICovXG4gIHByaXZhdGUgcGFyc2VTZWxlY3Rpb25NYXJrcyhzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUpOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gbmV3IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcigpO1xuICAgIGxldCBtaXhlZFNlbGVjdGlvbnNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25Dcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0ID0gc2VsZWN0aW9uQ3JpdGVyaWFzW2ldO1xuICAgICAgaWYgKHN0LmZpZWxkTmFtZSAmJiAoc3QudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGNhdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnKFxcW1tBLVphLXowLTldK10pLionLCAnZycpO1xuICAgICAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBzdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuICAgICAgICBpZiAoY2F0UmVnZXgudGVzdChzdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGUpIHtcbiAgICAgICAgICAgIGxldCBoaWVyTW9kZWw6IEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsID0gdGhpcy5hZGRUb1BhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCBzdC52YWx1ZSkgYXMgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWw7XG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5oaWVyTW9kZWxBcnIucHVzaChoaWVyTW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgJiYgKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1heCAhPT0gdW5kZWZpbmVkKSB7IC8vIFJhbmdlIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuUmFuZ2VUeXBlKSB7XG4gICAgICAgICAgICBsZXQgcXVhbnRNb2RlbDogUmFuZ2VTZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9SYW5nZVBhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCByYW5nZU9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5xdWFudE1vZGVsQXJyLnB1c2gocXVhbnRNb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgLy8gRGltZW5zaW9uIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZSkge1xuICAgICAgICAgICAgbGV0IGRpbU1vZGVsOiBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9QYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgc3QudmFsdWUpIGFzIERpbWVuc2lvblNlbGVjdGlvbk1vZGVsO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIuZGltTW9kZWxBcnIucHVzaChkaW1Nb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaXhlZFNlbGVjdGlvbnNFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZWxlY3Rpb24gQ3JpdGVyaWEgcGFyc2luZyBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uTW9kZWxDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdGlvbkNyaXRlcmlhcyBWYWxpZGF0ZSBhbmQgZGV0ZXJtaW5lIHRoZSBzZWxlY3Rpb24gY3JpdGVyaWFzIHR5cGUuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlU2VsZWN0aW9uQ3JpdGVyaWEoc2VsZWN0aW9uQ3JpdGVyaWE6IENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhKTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlIHtcbiAgICBsZXQgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlO1xuICAgIC8vIERldGVybWluZSB0aGUgdHlwZSBvZiBzZWxlY3Rpb24sIHRoaXMgY29tbWFuZCBpcyBieSBsb29raW5nIGF0IHRoZSBmaXJzdCBzZWxlY3Rpb25cbiAgICBsZXQgY3JpdDogQ29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWEgPSBzZWxlY3Rpb25Dcml0ZXJpYTtcblxuICAgIGxldCBjYXRSZWdleCA9IG5ldyBSZWdFeHAoJyhcXFtbQS1aYS16MC05XStdKS4qJywgJ2cnKTtcbiAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBjcml0LnZhbHVlIGFzIENvbnRyYWN0LlJhbmdlVmFsdWU7XG5cbiAgICBpZiAoY3JpdC5maWVsZE5hbWUgJiYgKGNyaXQudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjcml0LnZhbHVlICE9PSBudWxsKSkge1xuICAgICAgaWYgKGNhdFJlZ2V4LnRlc3QoY3JpdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlO1xuICAgICAgfSBlbHNlIGlmICgocmFuZ2VPcHRpb24gYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZSkubWluICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1heCAhPT0gdW5kZWZpbmVkKSB7IC8vIFJhbmdlIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICBzZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLlJhbmdlVHlwZTtcbiAgICAgIH0gZWxzZSB7IC8vIERpbWVyc2lvbiB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5EaW1lbnNpb25UeXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1NlbGVjdGlvbiBDcml0ZXJpYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25UeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0cmFuc2Zvcm0gdGhlIGtleSB2YWx1ZSBwYWlyIGludG8gdmFsdWUgYmFzZWQgcHJlcyBtb2RlbCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVNlbGVjdGlvbk1vZGVsXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGFkZFRvUGFyYW1zTGlzdChmaWVsZE5hbWU6IHN0cmluZywgdmFsdWU6IG9iamVjdCk6IFZhbHVlU2VsZWN0aW9uTW9kZWwge1xuICAgIGxldCB2YWx1ZVNlbGVjdGlvbk1vZGVsOiBWYWx1ZVNlbGVjdGlvbk1vZGVsID0gbmV3IFZhbHVlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICBsZXQgbWFya1ZhbHVlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGxldCB2YWx1ZUFycjogQXJyYXk8c3RyaW5nPiA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXJrVmFsdWVzLnB1c2godmFsdWVBcnJbaV0udG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtWYWx1ZXMucHVzaCh2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnF1YWxpZmllZEZpZWxkQ2FwdGlvbiA9IGZpZWxkTmFtZTtcbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnNlbGVjdFZhbHVlcyA9IG1hcmtWYWx1ZXM7XG4gICAgcmV0dXJuIHZhbHVlU2VsZWN0aW9uTW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHRyYW5zZm9ybSB0aGUga2V5IHZhbHVlIHBhaXIgaW50byByYW5nZSBiYXNlZCBzZWxlY3Rpb24gcHJlcyBtb2RlbC5cbiAgICpcbiAgICogVE9ETzogTmVlZCB0byBoYW5kbGUgdGhlIHBhcnNpbmcgb2YgZGF0ZSB0eXBlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlU2VsZWN0aW9uTW9kZWxcbiAgICogQHBhcmFtIGZpZWxkTmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHByaXZhdGUgYWRkVG9SYW5nZVBhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBDb250cmFjdC5SYW5nZVZhbHVlKTogUmFuZ2VTZWxlY3Rpb25Nb2RlbCB7XG4gICAgbGV0IHJhbmdlU2VsZWN0aW9uTW9kZWw6IFJhbmdlU2VsZWN0aW9uTW9kZWwgPSBuZXcgUmFuZ2VTZWxlY3Rpb25Nb2RlbCgpO1xuICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwucXVhbGlmaWVkRmllbGRDYXB0aW9uID0gZmllbGROYW1lO1xuICAgIGlmICh2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5tYXggIT09IG51bGwpIHtcbiAgICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwubWF4VmFsdWUgPSB2YWx1ZS5tYXgudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLm1pbiAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLm1pbiAhPT0gbnVsbCkge1xuICAgICAgcmFuZ2VTZWxlY3Rpb25Nb2RlbC5taW5WYWx1ZSA9IHZhbHVlLm1pbi50b1N0cmluZygpO1xuICAgIH1cbiAgICByYW5nZVNlbGVjdGlvbk1vZGVsLmluY2x1ZGVkID0gdGhpcy52YWxpZGF0ZU51bGxPcHRpb25UeXBlKHZhbHVlLm51bGxPcHRpb24pO1xuICAgIHJldHVybiByYW5nZVNlbGVjdGlvbk1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgc2VsZWN0aW9uIHVwZGF0ZSB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlbGVjdGlvblVwZGF0ZVR5cGUoc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IHN0cmluZyB7XG4gICAgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuUmVwbGFjZSkge1xuICAgICAgcmV0dXJuIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbC5SZXBsYWNlO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uVXBkYXRlVHlwZSA9PT0gQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZS5BZGQpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuQWRkO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uVXBkYXRlVHlwZSA9PT0gQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZS5SZW1vdmUpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuUmVtb3ZlO1xuICAgIH1cbiAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLlJlcGxhY2U7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHZhbGlkYXRlIHRoZSBpbmNsdWRlIHR5cGUgZm9yIHJhbmdlIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIG51bGxPcHRpb25cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVOdWxsT3B0aW9uVHlwZShudWxsT3B0aW9uOiBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICBpZiAobnVsbE9wdGlvbikge1xuICAgICAgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uTnVsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZU51bGw7XG4gICAgICB9IGVsc2UgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uTm9uTnVsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZU5vbk51bGw7XG4gICAgICB9IGVsc2UgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uQWxsVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcy5JbmNsdWRlQWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcy5JbmNsdWRlQWxsO1xuICB9XG5cbn1cblxuLyoqXG4gKiBFbnVtIGZvciB0aGUgZGlmZmVyZW50IHNlbGVjdGlvbiBjcml0ZXJpYSB0eXBlcy5cbiAqL1xuZW51bSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUge1xuICBIaWVyYXJjaGljYWxUeXBlID0gMSxcbiAgUmFuZ2VUeXBlID0gMixcbiAgRGltZW5zaW9uVHlwZSA9IDMsXG4gIFR1cGxlc1R5cGUgPSA0LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbC50cyIsIi8qKlxuICogU2VsZWN0aW9uIE1vZGVsLlxuICovXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgcXVhbGlmaWVkRmllbGRDYXB0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVmFsdWUgYmFzZWQgc2VsZWN0aW9uIG1vZGVsLiBNZWFudCBmb3IgaGllcmFyY2hpY2FsLCByYW5nZSBhbmQgY2F0ZWdvcmljYWwgc2VsZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHVlU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBTZWxlY3Rpb25Nb2RlbCB7XG4gIHB1YmxpYyBzZWxlY3RWYWx1ZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbn1cblxuLyoqXG4gKiBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFZhbHVlU2VsZWN0aW9uTW9kZWwge1xufVxuXG4vKipcbiAqIFJhbmdlIGJhc2VkIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgUmFuZ2VTZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIG1pblZhbHVlOiBzdHJpbmc7XG4gIHB1YmxpYyBtYXhWYWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgaW5jbHVkZWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEaW1lbnNpb24gdmFsdWUgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFZhbHVlU2VsZWN0aW9uTW9kZWwge1xufVxuLyoqXG4gKiBUdXBsZSBiYXNlZCBzZWxlY3Rpb24gbW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFR1cGxlU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgb2JqZWN0SWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG59XG5cbi8qKlxuICogQ29udGFpbmVyIGNsYXNzIHRvIHBvcHVsYXRlIGFsbCB0aGUgc2VsZWN0aW9uIG1vZGVscyB3aGVuIHBhcnNpbmcgaW5wdXRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciB7XG4gIHB1YmxpYyBoaWVyTW9kZWxBcnI6IEFycmF5PEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsPiA9IFtdO1xuICBwdWJsaWMgZGltTW9kZWxBcnI6IEFycmF5PERpbWVuc2lvblNlbGVjdGlvbk1vZGVsPiA9IFtdO1xuICBwdWJsaWMgcXVhbnRNb2RlbEFycjogQXJyYXk8UmFuZ2VTZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIHNlbGVjdGlvbjogVHVwbGVTZWxlY3Rpb25Nb2RlbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIERhc2hib2FyZENvbnRlbnQgbmFtZXNwYWNlLlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBEYXNoYm9hcmRDb250ZW50IGlzXG4gKiBjdXJyZW50bHkganVzdCBhIChzaW5nbGUpIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRlbnQgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmRDb250ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbkVudmlyb25tZW50IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyBhcyBFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBlbnZpcm9ubWVudCBuYW1lc3BhY2UuXG4gKiBFbnZpcm9ubWVudCBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpc1xuICoganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IGltcGxlbWVudHMgQ29udHJhY3QuRW52aXJvbm1lbnQge1xuICBwcml2YXRlIF9hcGlWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRleHQ6IENvbnRyYWN0LkV4dGVuc2lvbkNvbnRleHQ7XG4gIHByaXZhdGUgX2xhbmd1YWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlOiBDb250cmFjdC5FeHRlbnNpb25Nb2RlO1xuICBwcml2YXRlIF9vcGVyYXRpbmdTeXN0ZW06IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFibGVhdVZlcnNpb246IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXh0ZW5zaW9uRW52aXJvbm1lbnQ6IEV4dGVuc2lvbkVudmlyb25tZW50KSB7XG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IGV4dGVuc2lvbkVudmlyb25tZW50LmFwaVZlcnNpb247XG4gICAgdGhpcy5fY29udGV4dCA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Db250ZXh0LmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uQ29udGV4dCk7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25MYW5ndWFnZTtcbiAgICB0aGlzLl9sb2NhbGUgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25Mb2NhbGU7XG4gICAgdGhpcy5fbW9kZSA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Nb2RlLmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTW9kZSk7XG4gICAgdGhpcy5fb3BlcmF0aW5nU3lzdGVtID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQub3BlcmF0aW5nU3lzdGVtO1xuICAgIHRoaXMuX3RhYmxlYXVWZXJzaW9uID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQudGFibGVhdVZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwaVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpVmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDb250cmFjdC5FeHRlbnNpb25Db250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vZGUoKTogQ29udHJhY3QuRXh0ZW5zaW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9wZXJhdGluZ1N5c3RlbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpbmdTeXN0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRhYmxlYXVWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlYXVWZXJzaW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FbnZpcm9ubWVudC50cyIsImltcG9ydCB7IFNldHRpbmdzIGFzIFNldHRpbmdzQ29udHJhY3QgfSBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IFNldHRpbmdzSW1wbCB9IGZyb20gJy4uL0ltcGwvU2V0dGluZ3NJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiB9IGZyb20gJy4uL1NlcnZpY2VzL1NldHRpbmdzU2VydmljZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIHNldHRpbmdzIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBTZXR0aW5nc0NvbnRyYWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NldHRpbmdzSW1wbDogU2V0dGluZ3NJbXBsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgb3VyIGV2ZW50IGhhbmRsaW5nIGZvciB0aGlzIGNsYXNzXG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmluaXRpYWxpemVFdmVudHMoKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmVyYXNlKGtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbCgpOiBTZXR0aW5nc0NvbGxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuZ2V0QWxsKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTW9kaWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5pc01vZGlmaWVkO1xuICB9XG5cbiAgcHVibGljIHNhdmVBc3luYygpOiBQcm9taXNlPFNldHRpbmdzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuc2F2ZUFzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLnNldChrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFVJSW1wbCB9IGZyb20gJy4uL0ltcGwvVUlJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgVUkgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgVUkgaW1wbGVtZW50cyBDb250cmFjdC5VSSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsOiBVSUltcGwpIHsgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5faW1wbC5kaXNwbGF5RGlhbG9nQXN5bmModXJsLCBwYXlsb2FkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZyhwYXlsb2FkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faW1wbC5jbG9zZURpYWxvZyhwYXlsb2FkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJpbXBvcnQgeyBJbnRlcm5hbEFwaURpc3BhdGNoZXIgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZUltcGwgfSBmcm9tICcuL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBVSVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9JbXBsL1VJU2VydmljZUltcGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEluaXRpYWxpemF0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZXR0aW5nc1NlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgVUlTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMudHMiLCJpbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEluaXRpYWxpemF0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5Jbml0aWFsaXphdGlvblNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURhc2hib2FyZEV4dGVuc2lvbnNBc3luYyhpc0V4dGVuc2lvbkRpYWxvZzogYm9vbGVhbiwgY29udGV4dE1lbnVJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxFeHRlbnNpb25Cb290c3RyYXBJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25Db250ZXh0TWVudUlkc106IGNvbnRleHRNZW51SWRzLFxuICAgICAgW1BhcmFtZXRlcklkLklzRXh0ZW5zaW9uRGlhbG9nXTogaXNFeHRlbnNpb25EaWFsb2dcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuSW5pdGlhbGl6ZUV4dGVuc2lvbiwgcGFyYW1zKS50aGVuPEV4dGVuc2lvbkJvb3RzdHJhcEluZm8+KHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFRPRE8gLSBWYWxpZGF0ZSByZXR1cm4gdmFsdWVcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEV4dGVuc2lvbkJvb3RzdHJhcEluZm87XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb2xsZWN0aW9uLCBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9TZXR0aW5nc1NlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNldHRpbmdzU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgc2F2ZVNldHRpbmdzQXN5bmMoc2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbik6IFByb21pc2U8U2V0dGluZ3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5TZXR0aW5nc1ZhbHVlc106IHNldHRpbmdzIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TYXZlRXh0ZW5zaW9uU2V0dGluZ3MsIHBhcmFtZXRlcnMpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPih2YWx1ZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5yZXN1bHQgYXMgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvO1xuXG4gICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnNldHRpbmdzVmFsdWVzKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnVW5leHBlY3RlZCBlcnJvciBzYXZpbmdzIHNldHRpbmdzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKHJlc3VsdC5zZXR0aW5nc1ZhbHVlcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJpbXBvcnQgeyBEaWFsb2dPcHRpb25zLCBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSwgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vVUlTZXJ2aWNlJztcblxuY29uc3QgREVGQVVMVF9ESUFMT0dfSEVJR0hUOiBudW1iZXIgPSA0MDA7IC8vIGluIHBpeGVsc1xuY29uc3QgREVGQVVMVF9ESUFMT0dfV0lEVEg6IG51bWJlciA9IDYwMDsgLy8gaW4gcGl4ZWxzXG5cbmV4cG9ydCBjbGFzcyBVSVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgVUlTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ6IHN0cmluZywgb3B0aW9ucz86IERpYWxvZ09wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nVXJsXTogdXJsLFxuICAgICAgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1BheWxvYWRdOiBwYXlsb2FkXG4gICAgfTtcblxuICAgIGNvbnN0IGg6IG51bWJlciA9ICgob3B0aW9ucykgJiYgKG9wdGlvbnMuaGVpZ2h0KSkgPyBvcHRpb25zLmhlaWdodCA6IERFRkFVTFRfRElBTE9HX0hFSUdIVDtcbiAgICBjb25zdCB3OiBudW1iZXIgPSAoKG9wdGlvbnMpICYmIChvcHRpb25zLndpZHRoKSkgPyBvcHRpb25zLndpZHRoIDogREVGQVVMVF9ESUFMT0dfV0lEVEg7XG5cbiAgICAvLyBPbiB0aGUgcGxhdGZvcm0gc2lkZSwgd2UgZG8gc29tZXRoaW5nIHJlYXNvbmFibGUgcmVnYXJkZXNzIG9mIHdoZXRoZXIgdGhlIHBhc3NlZFxuICAgIC8vIGhlaWdodCBhbmQgd2lkdGggYXJlIHRvbyBsYXJnZSBvciB0b28gc21hbGwuICBCdXQgdGhpcyBsaWtlbHkgaW5kaWNhdGVzIGEgZGV2ZWxvcGVyIGVycm9yLFxuICAgIC8vIHNvIHdlIHRocm93IGFuIGVycm9yIGhlcmUgdG8gaGVscCB3aXRoIGRlYnVnZ2luZy5cbiAgICBpZiAoaCA8PSAwIHx8IHcgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsICdTaXplIHBhcmFtZXRlcnMgZm9yIGRpc3BsYXlEaWFsb2dBc3luYyBtdXN0IGJlIHBvc2l0aXZlJyk7XG4gICAgfVxuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dIXSA9IGg7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dXXSA9IHc7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5EaXNwbGF5RGlhbG9nLCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRpYWxvZ1Jlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBFeHRlbnNpb25EaWFsb2dSZXN1bHQ7XG4gICAgICBzd2l0Y2ggKGRpYWxvZ1Jlc3VsdCkge1xuICAgICAgICBjYXNlIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdC5EaWFsb2dBbHJlYWR5T3BlbjpcbiAgICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuRGlhbG9nQWxyZWFkeU9wZW4sICdUaGVyZSBhbHJlYWR5IGV4aXN0cyBhbiBvcGVuIGRpYWxvZyBmb3IgdGhpcyBleHRlbnNpb24uJyk7XG4gICAgICAgIGNhc2UgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LkludmFsaWREb21haW46XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWREb21haW5EaWFsb2csXG4gICAgICAgICAgICAnVGhlIHVybCBvZiBhbiBleHRlbnNpb24gZGlhbG9nIG11c3QgbWF0Y2ggdGhlIGRvbWFpbiBvZiB0aGUgcGFyZW50IGV4dGVuc2lvbi4nKTtcbiAgICAgICAgZGVmYXVsdDogLy8gU3VjY2VzcyBjYXNlXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKHBheWxvYWQ/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSAocGF5bG9hZCkgPyB7IFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dQYXlsb2FkXTogcGF5bG9hZCB9IDoge307XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DbG9zZURpYWxvZywgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1VJU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvblNldHRpbmdzSW5mbywgTm90aWZpY2F0aW9uSWQsIFNldHRpbmdzRXZlbnQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIEVycm9ySGVscGVycyxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBTaW5nbGVFdmVudE1hbmFnZXIsXG4gIFNpbmdsZUV2ZW50TWFuYWdlckltcGwsXG4gIFRhYmxlYXVFcnJvcixcbiAgVGFibGVhdUV2ZW50XG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlJztcblxuY2xhc3MgU2V0dGluZ3NDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5TZXR0aW5nc0NoYW5nZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZXdTZXR0aW5nczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuU2V0dGluZ3NDaGFuZ2VkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3U2V0dGluZ3MoKTogU2V0dGluZ3NDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fbmV3U2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW1wbCB7XG4gIHByaXZhdGUgc3RhdGljIEFTWU5DX1NBVkVfSU5fUFJPR1JFU1M6IHN0cmluZyA9ICdBc3luYyBTYXZlIGlzIGluIHByb2dyZXNzLCB1cGRhdGluZyBzZXR0aW5ncyBpcyBub3QgYWxsb3dlZC4nO1xuICBwcml2YXRlIF9pc01vZGlmaWVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jdXJyZW50U2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbjtcblxuICAvLyBTaW5jZSBwcm9taXNlcyBjYW4ndCBiZSBpbnRyb3NwZWN0ZWQgZm9yIHN0YXRlLCBrZWVwIGEgdmFyaWFibGUgdGhhdFxuICAvLyBpbmRpY2F0ZXMgYSBzYXZlIGlzIGluIHByb2dyZXNzLCBzbyB0aGF0IHNldC9lcmFzZSBjYW4ndCBiZSBjYWxsZWQgZHVyaW5nIGEgc2F2ZS5cbiAgcHJpdmF0ZSBfc2F2ZUluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pIHtcbiAgICB0aGlzLmluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm8pO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihrZXksICdrZXknKTtcblxuICAgIC8vIE9ubHkgbWFrZSBhIG1vZGlmaWNhdGlvbiBpZiB3ZSBoYXZlIHRoZSBrZXkgYWxyZWFkeVxuICAgIGlmICh0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSkge1xuICAgICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XTtcbiAgICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoa2V5LCAna2V5Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFNldHRpbmdzW2tleV07XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgLy8gUmV0dXJucyBhIG11dGFibGUgY29weSBvZiB0aGUgc2V0dGluZ3NcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNb2RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb2RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlQXN5bmMoKTogUHJvbWlzZTxTZXR0aW5nc0NvbGxlY3Rpb24+IHtcbiAgICB0aGlzLnZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTtcblxuICAgIC8vIEp1c3QgcmVzb2x2ZSBpbW1lZGlhdGVseSBpZiBzZXR0aW5ncyBhcmUgdW5jaGFuZ2VkXG4gICAgaWYgKCF0aGlzLl9pc01vZGlmaWVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlPFNldHRpbmdzQ29sbGVjdGlvbj4odGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICAvLyBVc2UgdGhlIHNldHRpbmdzIHNlcnZpY2UgdG8gc2F2ZSBzZXR0aW5ncyB0byB0d2JcbiAgICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZXR0aW5nc1NlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNldHRpbmdzU2VydmljZS5zYXZlU2V0dGluZ3NBc3luYyh0aGlzLl9jdXJyZW50U2V0dGluZ3MpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPihuZXdTZXR0aW5ncyA9PiB7XG4gICAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNNb2RpZmllZCA9IGZhbHNlO1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jdXJyZW50U2V0dGluZ3MsIG5ld1NldHRpbmdzKTtcbiAgICAgIHJldHVybiBuZXdTZXR0aW5ncztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5U3RyaW5nUGFyYW1ldGVyKGtleSwgJ2tleScpOyAvLyBLZXkgc2hvdWxkbid0IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHZhbHVlLCAndmFsdWUnKTsgLy8gRW1wdHkgc3RyaW5nIHZhbHVlIGlzIGFsbG93ZWQuXG4gICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFsbCBldmVudHMgcmVsZXZhbnQgdG8gc2V0dGluZ3Mgb2JqZWN0LiAgVGhpcyBpcyBvbmx5IGEgc2V0dGluZ3NVcGRhdGUgZXZlbnQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoKTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5nc0NoYW5nZWRFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPFNldHRpbmdzQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlNldHRpbmdzQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2V0dGluZ3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIChldmVudDogU2V0dGluZ3NFdmVudCkgPT4ge1xuICAgICAgdGhpcy5fY3VycmVudFNldHRpbmdzID0gZXZlbnQubmV3U2V0dGluZ3M7XG4gICAgICBzZXR0aW5nc0NoYW5nZWRFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFNldHRpbmdzQ2hhbmdlZEV2ZW50KGV2ZW50Lm5ld1NldHRpbmdzKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2goc2V0dGluZ3NDaGFuZ2VkRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2V0dGluZ3NJbmZvLCAnc2V0dGluZ3NJbmZvJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZXR0aW5nc0luZm8uc2V0dGluZ3NWYWx1ZXMsICdzZXR0aW5nc0luZm8uU2V0dGluZ3NWYWx1ZXMnKTtcblxuICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IHNldHRpbmdzSW5mby5zZXR0aW5nc1ZhbHVlcztcblxuICAgIC8vIFJlc2V0IHRoZSBpc01vZGlmaWVkIGZsYWdcbiAgICB0aGlzLl9pc01vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoZWxwZXIgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgYW55IGxvY2FsIHVwZGF0ZSB0byB0aGlzLmN1cnJlbnRTZXR0aW5ncy5cbiAgICogQ2hlY2tzIGlmIGEgY3VycmVudCBzYXZlIGNhbGwgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MgYW5kIHRocm93cyBhbiBlcnJvciBpZiBzby5cbiAgICovXG4gIHByaXZhdGUgdmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2F2ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5TZXR0aW5nU2F2ZUluUHJvZ3Jlc3MsIFNldHRpbmdzSW1wbC5BU1lOQ19TQVZFX0lOX1BST0dSRVNTKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGlhbG9nVXBkYXRlRXZlbnQsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeSxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBUYWJsZWF1RXJyb3Jcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvVUlTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFVJSW1wbCB7XG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB1aVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxVSVNlcnZpY2U+KEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuVUlTZXJ2aWNlKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdWlTZXJ2aWNlLmRpc3BsYXlEaWFsb2dBc3luYyh1cmwsIHBheWxvYWQgfHwgJycsIG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB1bnJlZ2lzdGVyRm4gPSBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5FeHRlbnNpb25EaWFsb2dVcGRhdGUsIChtb2RlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBMZXQgdGhyb3VnaCBhbnkgZGlhbG9nIHVwZGF0ZSBldmVudFxuICAgICAgICB9LCAoZXZlbnQ6IERpYWxvZ1VwZGF0ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzQ2xvc2VFdmVudCkge1xuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5jbG9zZVBheWxvYWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkRpYWxvZ0Nsb3NlZEJ5VXNlciwgJ0V4dGVuc2lvbiBkaWFsb2cgY2xvc2VkIGJ5IHVzZXIuJykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVucmVnaXN0ZXJGbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2cocGF5bG9hZD86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVpU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFVJU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZSk7XG5cbiAgICB1aVNlcnZpY2UuY2xvc2VEaWFsb2cocGF5bG9hZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1VJSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgQ2FsbGJhY2tNYXAsIEV4dGVuc2lvbnNJbXBsIH0gZnJvbSAnLi4vSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIEV4dGVuc2lvbnMgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9ucyBpbXBsZW1lbnRzIENvbnRyYWN0LkV4dGVuc2lvbnMge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBleHRlbnNpb25JbXBsOiBFeHRlbnNpb25zSW1wbCkge1xuICAgIHRoaXMuZXh0ZW5zaW9uSW1wbCA9IGV4dGVuc2lvbkltcGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZENvbnRlbnQoKTogQ29udHJhY3QuRGFzaGJvYXJkQ29udGVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5kYXNoYm9hcmRDb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBDb250cmFjdC5FbnZpcm9ubWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5lbnZpcm9ubWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2V0dGluZ3MoKTogQ29udHJhY3QuU2V0dGluZ3Mge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuc2V0dGluZ3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVpKCk6IENvbnRyYWN0LlVJIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLnVpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVBc3luYyhjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmMoZmFsc2UsIGNvbnRleHRNZW51Q2FsbGJhY2tzKS50aGVuPHZvaWQ+KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURpYWxvZ0FzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmModHJ1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMudHMiXSwic291cmNlUm9vdCI6IiJ9