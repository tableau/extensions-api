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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
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
__export(__webpack_require__(109));


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
__webpack_require__(110);
__export(__webpack_require__(113));
__export(__webpack_require__(114));
__export(__webpack_require__(115));
__export(__webpack_require__(116));
__export(__webpack_require__(117));
__export(__webpack_require__(118));
// These are the exports from the messaging stuff
__export(__webpack_require__(121));
__export(__webpack_require__(39));
// Export a hardcoded version of the internal contract. This should match what's in package.json.
// Normally, we'd use some sort of webpack replacement to inject this into code, but that doesn't
// work with the module-dev-scripts and this isn't too much work.
// If you forget to keep this in sync with package.json, a test will fail so we should be ok.
exports.INTERNAL_CONTRACT_VERSION = {
    major: 1,
    minor: 4,
    fix: 2
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Export everything which had been previously in the api-shared module
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Dashboard_1 = __webpack_require__(124);
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(40);
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(4);
exports.TableauError = TableauError_1.TableauError;
var VersionNumber_1 = __webpack_require__(125);
exports.VersionNumber = VersionNumber_1.VersionNumber;
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(58);
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(41);
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(126);
exports.DashboardImpl = DashboardImpl_1.DashboardImpl;
var ServiceImplBase_1 = __webpack_require__(15);
exports.ServiceImplBase = ServiceImplBase_1.ServiceImplBase;
var ErrorHelpers_1 = __webpack_require__(8);
exports.ErrorHelpers = ErrorHelpers_1.ErrorHelpers;
__export(__webpack_require__(137));
__export(__webpack_require__(139));
__export(__webpack_require__(7));


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
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var Param_1 = __webpack_require__(42);
var TableauError_1 = __webpack_require__(4);
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
var hide = __webpack_require__(12);
var redefine = __webpack_require__(17);
var ctx = __webpack_require__(19);
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

var dP = __webpack_require__(21);
var createDesc = __webpack_require__(45);
module.exports = __webpack_require__(18) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var EnumConverter_1 = __webpack_require__(57);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var TableauError_1 = __webpack_require__(4);
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
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(12);
var has = __webpack_require__(22);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(27)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
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
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(70);
var toPrimitive = __webpack_require__(71);
var dP = Object.defineProperty;

exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16);
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
var $keys = __webpack_require__(77);
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
var cof = __webpack_require__(16);
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

var def = __webpack_require__(21).f;
var has = __webpack_require__(22);
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
var aFunction = __webpack_require__(23);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
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
var redefine = __webpack_require__(17);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(74);
var setToStringTag = __webpack_require__(36);
var getPrototypeOf = __webpack_require__(80);
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
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(23);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(90);
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
  if (__webpack_require__(16)(process) == 'process') {
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

__webpack_require__(104);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 55 */
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
var EventListenerManager_1 = __webpack_require__(40);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(62);
var ConnectionSummary_1 = __webpack_require__(133);
var Field_1 = __webpack_require__(63);
var TableSummary_1 = __webpack_require__(134);
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
/* 62 */
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
/* 63 */
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
var TableauSheetEvent_1 = __webpack_require__(65);
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
var TableauEvent_1 = __webpack_require__(58);
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
/* 66 */
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(68);
__webpack_require__(98);
__webpack_require__(54);
// Due to the way we configured webpack, we should be exporting things which will be under
// a global variable called "tableau". Export everything we want to be visible under tableau
// from this file.
var ExtensionsImpl_1 = __webpack_require__(108);
var Extensions_1 = __webpack_require__(162);
var ApiShared_1 = __webpack_require__(5);
ApiShared_1.VersionNumber.SetVersionNumber( true ? "1.0.0" : '0.0.0');
var extensionImpl = new ExtensionsImpl_1.ExtensionsImpl();
exports.extensions = new Extensions_1.Extensions(extensionImpl);
// Export Enums
// These show up under the tableau object. I.e. tableau.ExtensionContext.Server
var ExtensionsApiExternalContract_1 = __webpack_require__(13);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(72);
__webpack_require__(81);
__webpack_require__(84);
__webpack_require__(96);
__webpack_require__(97);
module.exports = __webpack_require__(6).Promise;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(24);
var test = {};
test[__webpack_require__(2)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(17)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(18) && !__webpack_require__(27)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(73)(true);

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
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(75);
var descriptor = __webpack_require__(45);
var setToStringTag = __webpack_require__(36);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(76);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(21);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(32);
var arrayIndexOf = __webpack_require__(78)(false);
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(32);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(79);
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(22);
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(82);
var getKeys = __webpack_require__(31);
var redefine = __webpack_require__(17);
var global = __webpack_require__(3);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(20);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(49);
var step = __webpack_require__(83);
var Iterators = __webpack_require__(20);
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
/* 83 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var global = __webpack_require__(3);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(24);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(23);
var anInstance = __webpack_require__(85);
var forOf = __webpack_require__(86);
var speciesConstructor = __webpack_require__(50);
var task = __webpack_require__(51).set;
var microtask = __webpack_require__(91)();
var newPromiseCapabilityModule = __webpack_require__(38);
var perform = __webpack_require__(52);
var userAgent = __webpack_require__(92);
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
  Internal.prototype = __webpack_require__(93)($Promise.prototype, {
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
__webpack_require__(94)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(95)(function (iter) {
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
/* 85 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(87);
var isArrayIter = __webpack_require__(88);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(34);
var getIterFn = __webpack_require__(89);
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
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(24);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(20);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 90 */
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(51).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(16)(process) == 'process';

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(17);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var dP = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(18);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 95 */
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
/* 96 */
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
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(6).Array.find;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(11);
var $find = __webpack_require__(100)(5);
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(19);
var IObject = __webpack_require__(33);
var toObject = __webpack_require__(37);
var toLength = __webpack_require__(34);
var asc = __webpack_require__(101);
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(102);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(103);
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(16);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(105) });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(106);
var pIE = __webpack_require__(107);
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
/* 106 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionsApiExternalContract_1 = __webpack_require__(13);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(5);
var ApiShared_2 = __webpack_require__(5);
var DashboardContent_1 = __webpack_require__(152);
var Environment_1 = __webpack_require__(153);
var Settings_1 = __webpack_require__(154);
var UI_1 = __webpack_require__(155);
var RegisterAllExtensionsServices_1 = __webpack_require__(156);
var SettingsImpl_1 = __webpack_require__(160);
var UIImpl_1 = __webpack_require__(161);
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
/* 109 */
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(6).Number.isInteger;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(11);

$export($export.S, 'Number', { isInteger: __webpack_require__(112) });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(10);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 113 */
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
/* 114 */
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
/* 115 */
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
/* 116 */
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
/* 117 */
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(119);
var IdentityVersionConverter_1 = __webpack_require__(120);
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
/* 119 */
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
/* 120 */
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(55);
var CrossFramePreparedMessage_1 = __webpack_require__(122);
var MessageTypes_1 = __webpack_require__(39);
var MessageTypeChecks_1 = __webpack_require__(123);
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
/* 122 */
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(55);
var MessageTypes_1 = __webpack_require__(39);
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
/* 124 */
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
var Sheet_1 = __webpack_require__(56);
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
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
/* 126 */
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
var DashboardObject_1 = __webpack_require__(127);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var Point_1 = __webpack_require__(128);
var Size_1 = __webpack_require__(129);
var Worksheet_1 = __webpack_require__(130);
var SheetImpl_1 = __webpack_require__(59);
var SheetInfoImpl_1 = __webpack_require__(131);
var WorksheetImpl_1 = __webpack_require__(132);
var ErrorHelpers_1 = __webpack_require__(8);
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
/* 127 */
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
/* 128 */
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
/* 129 */
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
/* 130 */
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
var Sheet_1 = __webpack_require__(56);
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
/* 131 */
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
/* 132 */
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
var DataSource_1 = __webpack_require__(60);
var DataSourceImpl_1 = __webpack_require__(61);
var SheetImpl_1 = __webpack_require__(59);
var SingleEventManagerImpl_1 = __webpack_require__(41);
var FilterChangedEvent_1 = __webpack_require__(135);
var MarksSelectedEvent_1 = __webpack_require__(136);
var GetDataService_1 = __webpack_require__(66);
var ServiceRegistry_1 = __webpack_require__(7);
var ErrorHelpers_1 = __webpack_require__(8);
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
        if (filterOptions.nullOption) {
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(filterOptions.nullOption, Contract.FilterNullOption);
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
/* 133 */
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
/* 134 */
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
/* 135 */
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
var TableauError_1 = __webpack_require__(4);
var TableauWorksheetEvent_1 = __webpack_require__(64);
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
/* 136 */
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
var TableauWorksheetEvent_1 = __webpack_require__(64);
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var CrossFrameDispatcher_1 = __webpack_require__(138);
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
/* 138 */
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataSourceServiceImpl_1 = __webpack_require__(140);
var FilterServiceImpl_1 = __webpack_require__(141);
var GetDataServiceImpl_1 = __webpack_require__(144);
var NotificationServiceImpl_1 = __webpack_require__(145);
var ParametersServiceImpl_1 = __webpack_require__(146);
var SelectionServiceImpl_1 = __webpack_require__(150);
var ServiceRegistry_1 = __webpack_require__(7);
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
/* 140 */
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
var ServiceImplBase_1 = __webpack_require__(15);
var TableauError_1 = __webpack_require__(4);
var Field_1 = __webpack_require__(63);
var FieldImpl_1 = __webpack_require__(62);
var DataSource_1 = __webpack_require__(60);
var DataSourceImpl_1 = __webpack_require__(61);
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
/* 141 */
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
var ExternalToInternalEnumMappings_1 = __webpack_require__(142);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var FilterModels_1 = __webpack_require__(143);
var ServiceImplBase_1 = __webpack_require__(15);
var GetDataModels_1 = __webpack_require__(43);
var Param_1 = __webpack_require__(42);
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
        // if special option is specified, min and max are not needed
        if (filterOptions.nullOption) {
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeNullOption] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.nullOptions.convert(filterOptions.nullOption);
        }
        else {
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var EnumConverter_1 = __webpack_require__(57);
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
        _b[SharedApiExternalContract_1.FilterNullOption.NullValues] = api_internal_contract_js_1.FilterNullOption.NullValues,
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
/* 143 */
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
/* 144 */
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
var ServiceImplBase_1 = __webpack_require__(15);
var GetDataModels_1 = __webpack_require__(43);
var GetDataService_1 = __webpack_require__(66);
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
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = this.getLimitedMaxRows(maxRows),
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
/* 145 */
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
/* 146 */
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
var ServiceImplBase_1 = __webpack_require__(15);
var ParameterImpl_1 = __webpack_require__(147);
var Parameter_1 = __webpack_require__(149);
var TableauError_1 = __webpack_require__(4);
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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var ParameterChangedEvent_1 = __webpack_require__(148);
var GetDataModels_1 = __webpack_require__(43);
var ServiceRegistry_1 = __webpack_require__(7);
var SingleEventManagerImpl_1 = __webpack_require__(41);
var ErrorHelpers_1 = __webpack_require__(8);
var Param_1 = __webpack_require__(42);
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
/* 148 */
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
var ServiceRegistry_1 = __webpack_require__(7);
var TableauError_1 = __webpack_require__(4);
var TableauSheetEvent_1 = __webpack_require__(65);
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
/* 149 */
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
var EventListenerManager_1 = __webpack_require__(40);
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
/* 150 */
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
var SelectionModels_1 = __webpack_require__(151);
var ServiceImplBase_1 = __webpack_require__(15);
var TableauError_1 = __webpack_require__(4);
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
/* 151 */
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
/* 152 */
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
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
/* 154 */
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
var ApiShared_1 = __webpack_require__(5);
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
/* 155 */
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
var InitializationServiceImpl_1 = __webpack_require__(157);
var SettingsServiceImpl_1 = __webpack_require__(158);
var UIServiceImpl_1 = __webpack_require__(159);
function registerAllExtensionsServices(dispatcher) {
    ApiShared_1.ApiServiceRegistry.instance.registerService(new InitializationServiceImpl_1.InitializationServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new SettingsServiceImpl_1.SettingsServiceImpl(dispatcher));
    ApiShared_1.ApiServiceRegistry.instance.registerService(new UIServiceImpl_1.UIServiceImpl(dispatcher));
}
exports.registerAllExtensionsServices = registerAllExtensionsServices;


/***/ }),
/* 157 */
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
var ApiShared_1 = __webpack_require__(5);
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
/* 158 */
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
var ExtensionsApiExternalContract_1 = __webpack_require__(13);
var ApiShared_1 = __webpack_require__(5);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_2 = __webpack_require__(5);
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
/* 159 */
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
var ExtensionsApiExternalContract_1 = __webpack_require__(13);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(5);
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
/* 160 */
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
var Contract = __webpack_require__(13);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(5);
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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(13);
var api_internal_contract_js_1 = __webpack_require__(1);
var ApiShared_1 = __webpack_require__(5);
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
/* 162 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmU0NzUyNGJjMTQ1NjQ3OTRmM2IiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9BcGlTaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZXJ2aWNlSW1wbEJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VUeXBlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudExpc3RlbmVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NpbmdsZUV2ZW50TWFuYWdlckltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvUGFyYW0udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL0dldERhdGFNb2RlbHMudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZ3VpZC9ndWlkLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NoZWV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0VudW1Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXRhU291cmNlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGF0YVNvdXJjZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9GaWVsZEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVXb3Jrc2hlZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvR2V0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9hcnJheS9maW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvRXh0ZXJuYWxDb250cmFjdC9FbnVtcy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vbnVtYmVyL2lzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvRW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1BhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9WZXJicy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvVmVyc2lvbkNvbnZlcnRlckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1N0YWNraW5nVmVyc2lvbkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9NZXNzYWdlVHlwZUNoZWNrcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVmVyc2lvbk51bWJlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0Rhc2hib2FyZEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkT2JqZWN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BvaW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NpemUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvV29ya3NoZWV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2hlZXRJbmZvSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1dvcmtzaGVldEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ29ubmVjdGlvblN1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVGFibGVTdW1tYXJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9GaWx0ZXJDaGFuZ2VkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL01hcmtzU2VsZWN0ZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVCb290c3RyYXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRGF0YVNvdXJjZVNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRmlsdGVyU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvRmlsdGVyTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9QYXJhbWV0ZXJzU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9QYXJhbWV0ZXJJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUGFyYW1ldGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VsZWN0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL1NlbGVjdGlvbk1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL1NldHRpbmdzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL1VJLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvVUlTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9TZXR0aW5nc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvVUlJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBLDZGQUE2Rjs7Ozs7QUFJN0YsbUNBQXlDOzs7Ozs7Ozs7QUNKekM7Ozs7R0FJRzs7Ozs7QUFFSCw4Q0FBOEM7QUFDOUMsd0JBQWtDO0FBQ2xDLHlCQUFzQztBQUV0QyxtQ0FBaUM7QUFDakMsbUNBQWtEO0FBRWxELG1DQUF5QztBQUN6QyxtQ0FBc0M7QUFDdEMsbUNBQWlDO0FBRWpDLG1DQUFxRDtBQUdyRCxpREFBaUQ7QUFFakQsbUNBQWdEO0FBR2hELGtDQUFtRDtBQUluRCxpR0FBaUc7QUFDakcsaUdBQWlHO0FBQ2pHLGlFQUFpRTtBQUNqRSw2RkFBNkY7QUFDaEYsaUNBQXlCLEdBQUc7SUFDdkMsS0FBSyxFQUFFLENBQUM7SUFDUixLQUFLLEVBQUUsQ0FBQztJQUNSLEdBQUcsRUFBRSxDQUFDO0NBQ1AsQ0FBQztBQUVGLCtEQUErRDtBQUMvRCx5RkFBeUY7QUFDNUUseUJBQWlCLEdBQUc7SUFDL0IsS0FBSyxFQUFFLENBQUM7SUFDUixLQUFLLEVBQUUsQ0FBQztJQUNSLEdBQUcsRUFBRSxDQUFDO0NBQ1AsQ0FBQzs7Ozs7OztBQzdDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHpDOzs7OztHQUtHO0FBQ0g7SUFBa0MsZ0NBQUs7SUFDckMsc0JBQTJCLFVBQStCLEVBQUUsT0FBZTtRQUEzRSxZQUNFLGtCQUFTLFVBQVUsVUFBSyxPQUFTLENBQUMsU0FPbkM7UUFSMEIsZ0JBQVUsR0FBVixVQUFVLENBQXFCO1FBR3hELDZCQUE2QjtRQUM3QiwrSUFBK0k7UUFDL0ksaUdBQWlHO1FBQ2pHLGlGQUFpRjtRQUNqRixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQ3RELENBQUM7SUFFRCxzQkFBVyxtQ0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLENBZGlDLEtBQUssR0FjdEM7QUFkWSxvQ0FBWTs7Ozs7Ozs7O0FDUnpCLHVFQUF1RTs7Ozs7QUFFdkUsMkNBQWtEO0FBQXpDLHlDQUFTO0FBQ2xCLHFEQUF3RTtBQUEvRCwwRUFBb0I7QUFFN0IsNENBQXdEO0FBQS9DLGtEQUFZO0FBQ3JCLCtDQUEwRDtBQUFqRCxxREFBYTtBQUV0QiwrREFBeUc7QUFBaEcsd0dBQThCO0FBQ3ZDLDZDQUErRDtBQUF0RCxrREFBWTtBQUNyQix1REFBaUY7QUFBeEUsZ0ZBQXNCO0FBQy9CLCtDQUErRDtBQUF0RCxxREFBYTtBQUN0QixnREFBNEU7QUFBbkUsMkRBQWU7QUFDeEIsNENBQThEO0FBQXJELGtEQUFZO0FBRXJCLG1DQUEyRDtBQUczRCxtQ0FBK0Q7QUFDL0QsaUNBQXFEOzs7Ozs7O0FDbkJyRCw2QkFBNkI7QUFDN0IsdUNBQXVDOzs7Ozs7Ozs7O0FDRHZDLHlEQUE2RDtBQUU3RCw0Q0FBK0M7QUFtRC9DO0lBR0U7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sNkNBQWUsR0FBdEIsVUFBdUIsT0FBbUI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFFTSx3Q0FBVSxHQUFqQixVQUF3QyxXQUFtQjtRQUN6RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLElBQUksMkJBQVksQ0FBQyxzQ0FBVSxDQUFDLGFBQWEsRUFBRSw2QkFBMkIsV0FBYSxDQUFDLENBQUM7UUFDN0YsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBTSxDQUFDO0lBQzFDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUM7QUFFRDs7O0dBR0c7QUFDSDtJQXlCRSw0Q0FBNEM7SUFDNUM7SUFBd0IsQ0FBQztJQXRCekIsc0JBQWtCLDhCQUFRO1FBSDFCOztXQUVHO2FBQ0g7WUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLElBQUksMkJBQVksQ0FBQyxzQ0FBVSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1lBQzlFLENBQUM7WUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQ7Ozs7T0FJRztJQUNXLDhCQUFXLEdBQXpCLFVBQTBCLGVBQWlDO1FBQ3pELE1BQU0sQ0FBQywyQkFBMkIsR0FBRyxlQUFlLENBQUM7SUFDdkQsQ0FBQztJQUlILHlCQUFDO0FBQUQsQ0FBQztBQTNCWSxnREFBa0I7Ozs7Ozs7Ozs7QUM3RS9CLHlEQUE2RDtBQUU3RCxzQ0FBZ0M7QUFFaEMsNENBQStDO0FBRS9DOzs7OztHQUtHO0FBQ0g7SUFBQTtJQXNHQSxDQUFDO0lBckdDOzs7O09BSUc7SUFDVyw4QkFBaUIsR0FBL0IsVUFBZ0MsT0FBZTtRQUM3QyxNQUFNLENBQUMsSUFBSSwyQkFBWSxDQUFDLHNDQUFVLENBQUMsYUFBYSxFQUFLLE9BQU8sOEJBQTJCLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2QkFBNkI7SUFDZixnQ0FBbUIsR0FBakMsVUFBa0MsYUFBa0IsRUFBRSxZQUFvQjtRQUN4RSxFQUFFLENBQUMsQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLGFBQWEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFELE1BQU0sSUFBSSwyQkFBWSxDQUFDLHNDQUFVLENBQUMsYUFBYSxFQUFLLGFBQWEsK0JBQTBCLFlBQWMsQ0FBQyxDQUFDO1FBQzdHLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2QkFBNkI7SUFDZiw0QkFBZSxHQUE3QixVQUE4QixhQUFrQixFQUFFLFlBQW9CO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxJQUFJLElBQUksYUFBYSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsTUFBTSxJQUFJLDJCQUFZLENBQUMsc0NBQVUsQ0FBQyxnQkFBZ0IsRUFBSyxhQUFhLHdDQUFtQyxZQUFjLENBQUMsQ0FBQztRQUN6SCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsNkJBQTZCO0lBQ2Ysa0NBQXFCLEdBQW5DLFVBQW9DLGFBQXFCLEVBQUUsWUFBb0I7UUFDN0UsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLElBQUksSUFBSSxhQUFhLEtBQUssU0FBUyxJQUFJLGFBQWEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLE1BQU0sSUFBSSwyQkFBWSxDQUFDLHNDQUFVLENBQUMsZ0JBQWdCLEVBQUssYUFBYSx3Q0FBbUMsWUFBYyxDQUFDLENBQUM7UUFDekgsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCw2QkFBNkI7SUFDZiw0QkFBZSxHQUE3QixVQUF3QyxTQUFtQixFQUFFLFFBQWE7UUFDeEUsSUFBSSxPQUFPLEdBQVksS0FBSyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNwQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLElBQUksMkJBQVksQ0FBQyxzQ0FBVSxDQUFDLGdCQUFnQixFQUFLLFNBQVMsb0NBQStCLFFBQVUsQ0FBQyxDQUFDO1FBQzdHLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsNkJBQTZCO0lBQ2YsaUNBQW9CLEdBQWxDLFVBQW1DLEdBQVEsRUFBRSxHQUFRO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksMkJBQVksQ0FBQyxzQ0FBVSxDQUFDLGdCQUFnQixFQUNoRCx5RUFBeUUsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsTUFBTSxJQUFJLDJCQUFZLENBQUMsc0NBQVUsQ0FBQyxnQkFBZ0IsRUFDaEQscUZBQXFGLENBQUMsQ0FBQztRQUMzRixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELE1BQU0sSUFBSSwyQkFBWSxDQUFDLHNDQUFVLENBQUMsZ0JBQWdCLEVBQ2hELHFGQUFxRixDQUFDLENBQUM7UUFDM0YsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLDJCQUFZLENBQUMsc0NBQVUsQ0FBQyxnQkFBZ0IsRUFDaEQsb0ZBQW9GLENBQUMsQ0FBQztRQUMxRixDQUFDO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQXRHWSxvQ0FBWTs7Ozs7OztBQ1p6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRix1QkFBdUI7QUFDekcsaUVBQWlFO0FBQ2pFLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCOzs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUEEsdUZBQXVGOzs7OztBQUV2Rix5Q0FBeUM7QUFDekMsaUNBQTRDOzs7Ozs7Ozs7O0FDSDVDLHlEQWV5QztBQUV6Qyx3REFlMkM7QUFFM0MsOENBQXVEO0FBRXZELHdGQUF3RjtBQUN4Rjs7O0dBR0c7QUFDSDtJQUFBO0lBOElBLENBQUM7SUE3SWUsK0NBQWdCLEdBQUcsSUFBSSw2QkFBYTtRQUNoRCxHQUFDLDJDQUF5QixDQUFDLE9BQU8sSUFBRyw0Q0FBeUIsQ0FBQyxPQUFPO1FBQ3RFLEdBQUMsMkNBQXlCLENBQUMsTUFBTSxJQUFHLDRDQUF5QixDQUFDLE1BQU07WUFDcEUsQ0FBQztJQUVXLDRDQUFhLEdBQUcsSUFBSSw2QkFBYTtRQUM3QyxHQUFDLHdDQUFzQixDQUFDLFNBQVMsSUFBRyx5Q0FBc0IsQ0FBQyxTQUFTO1FBQ3BFLEdBQUMsd0NBQXNCLENBQUMsT0FBTyxJQUFHLHlDQUFzQixDQUFDLE9BQU87WUFDaEUsQ0FBQztJQUVXLHlDQUFVLEdBQUcsSUFBSSw2QkFBYTtRQUMxQyxHQUFDLHFDQUFrQixDQUFDLFVBQVUsSUFBRyxzQ0FBa0IsQ0FBQyxVQUFVO1FBQzlELEdBQUMscUNBQWtCLENBQUMsUUFBUSxJQUFHLHNDQUFrQixDQUFDLFFBQVE7WUFDMUQsQ0FBQztJQUVXLG1EQUFvQixHQUFHLElBQUksNkJBQWE7UUFDcEQsR0FBQywrQ0FBNEIsQ0FBQyxJQUFJLElBQUcsZ0RBQTRCLENBQUMsSUFBSTtRQUN0RSxHQUFDLCtDQUE0QixDQUFDLEdBQUcsSUFBRyxnREFBNEIsQ0FBQyxHQUFHO1FBQ3BFLEdBQUMsK0NBQTRCLENBQUMsS0FBSyxJQUFHLGdEQUE0QixDQUFDLEtBQUs7UUFDeEUsR0FBQywrQ0FBNEIsQ0FBQyxNQUFNLElBQUcsZ0RBQTRCLENBQUMsTUFBTTtRQUMxRSxHQUFDLCtDQUE0QixDQUFDLEdBQUcsSUFBRyxnREFBNEIsQ0FBQyxHQUFHO1FBQ3BFLEdBQUMsK0NBQTRCLENBQUMsR0FBRyxJQUFHLGdEQUE0QixDQUFDLEdBQUc7UUFDcEUsR0FBQywrQ0FBNEIsQ0FBQyxJQUFJLElBQUcsZ0RBQTRCLENBQUMsSUFBSTtRQUN0RSxHQUFDLCtDQUE0QixDQUFDLEtBQUssSUFBRyxnREFBNEIsQ0FBQyxLQUFLO1FBQ3hFLEdBQUMsK0NBQTRCLENBQUMsUUFBUSxJQUFHLGdEQUE0QixDQUFDLFFBQVE7UUFDOUUsR0FBQywrQ0FBNEIsQ0FBQyxHQUFHLElBQUcsZ0RBQTRCLENBQUMsR0FBRztRQUNwRSxHQUFDLCtDQUE0QixDQUFDLEdBQUcsSUFBRyxnREFBNEIsQ0FBQyxHQUFHO1FBQ3BFLEdBQUMsK0NBQTRCLENBQUMsTUFBTSxJQUFHLGdEQUE0QixDQUFDLE1BQU07UUFDMUUsR0FBQywrQ0FBNEIsQ0FBQyxHQUFHLElBQUcsZ0RBQTRCLENBQUMsR0FBRztRQUNwRSxHQUFDLCtDQUE0QixDQUFDLE1BQU0sSUFBRyxnREFBNEIsQ0FBQyxNQUFNO1FBQzFFLEdBQUMsK0NBQTRCLENBQUMsU0FBUyxJQUFHLGdEQUE0QixDQUFDLFNBQVM7UUFDaEYsR0FBQywrQ0FBNEIsQ0FBQyxJQUFJLElBQUcsZ0RBQTRCLENBQUMsSUFBSTtRQUN0RSxHQUFDLCtDQUE0QixDQUFDLEdBQUcsSUFBRyxnREFBNEIsQ0FBQyxHQUFHO1FBQ3BFLEdBQUMsK0NBQTRCLENBQUMsTUFBTSxJQUFHLGdEQUE0QixDQUFDLE1BQU07UUFDMUUsR0FBQywrQ0FBNEIsQ0FBQyxNQUFNLElBQUcsZ0RBQTRCLENBQUMsTUFBTTtRQUMxRSxHQUFDLCtDQUE0QixDQUFDLE1BQU0sSUFBRyxnREFBNEIsQ0FBQyxNQUFNO1FBQzFFLEdBQUMsK0NBQTRCLENBQUMsUUFBUSxJQUFHLGdEQUE0QixDQUFDLFFBQVE7UUFDOUUsR0FBQywrQ0FBNEIsQ0FBQyxLQUFLLElBQUcsZ0RBQTRCLENBQUMsS0FBSztRQUN4RSxHQUFDLCtDQUE0QixDQUFDLE1BQU0sSUFBRyxnREFBNEIsQ0FBQyxNQUFNO1FBQzFFLEdBQUMsK0NBQTRCLENBQUMsR0FBRyxJQUFHLGdEQUE0QixDQUFDLEdBQUc7UUFDcEUsR0FBQywrQ0FBNEIsQ0FBQyxRQUFRLElBQUcsZ0RBQTRCLENBQUMsUUFBUTtRQUM5RSxHQUFDLCtDQUE0QixDQUFDLFNBQVMsSUFBRyxnREFBNEIsQ0FBQyxTQUFTO1FBQ2hGLEdBQUMsK0NBQTRCLENBQUMsV0FBVyxJQUFHLGdEQUE0QixDQUFDLFdBQVc7UUFDcEYsR0FBQywrQ0FBNEIsQ0FBQyxVQUFVLElBQUcsZ0RBQTRCLENBQUMsVUFBVTtRQUNsRixHQUFDLCtDQUE0QixDQUFDLFFBQVEsSUFBRyxnREFBNEIsQ0FBQyxRQUFRO1FBQzlFLEdBQUMsK0NBQTRCLENBQUMsV0FBVyxJQUFHLGdEQUE0QixDQUFDLFdBQVc7UUFDcEYsR0FBQywrQ0FBNEIsQ0FBQyxTQUFTLElBQUcsZ0RBQTRCLENBQUMsU0FBUztRQUNoRixHQUFDLCtDQUE0QixDQUFDLFNBQVMsSUFBRyxnREFBNEIsQ0FBQyxTQUFTO1FBQ2hGLEdBQUMsK0NBQTRCLENBQUMsSUFBSSxJQUFHLGdEQUE0QixDQUFDLElBQUk7UUFDdEUsR0FBQywrQ0FBNEIsQ0FBQyxHQUFHLElBQUcsZ0RBQTRCLENBQUMsR0FBRztRQUNwRSxHQUFDLCtDQUE0QixDQUFDLElBQUksSUFBRyxnREFBNEIsQ0FBQyxJQUFJO1FBQ3RFLEdBQUMsK0NBQTRCLENBQUMsSUFBSSxJQUFHLGdEQUE0QixDQUFDLElBQUk7UUFDdEUsR0FBQywrQ0FBNEIsQ0FBQyxPQUFPLElBQUcsZ0RBQTRCLENBQUMsT0FBTztRQUM1RSxHQUFDLCtDQUE0QixDQUFDLElBQUksSUFBRyxnREFBNEIsQ0FBQyxJQUFJO1lBQ3RFLENBQUM7SUFFVyw0Q0FBYSxHQUFHLElBQUksNkJBQWE7UUFDN0MsR0FBQyx3Q0FBcUIsQ0FBQyxTQUFTLElBQUcseUNBQXFCLENBQUMsU0FBUztRQUNsRSxHQUFDLHdDQUFxQixDQUFDLE9BQU8sSUFBRyx5Q0FBcUIsQ0FBQyxPQUFPO1FBQzlELEdBQUMsd0NBQXFCLENBQUMsT0FBTyxJQUFHLHlDQUFxQixDQUFDLE9BQU87WUFDOUQsQ0FBQztJQUVXLHdDQUFTLEdBQUcsSUFBSSw2QkFBYTtRQUN6QyxHQUFDLG9DQUFpQixDQUFDLFNBQVMsSUFBRyxxQ0FBaUIsQ0FBQyxTQUFTO1FBQzFELEdBQUMsb0NBQWlCLENBQUMsS0FBSyxJQUFHLHFDQUFpQixDQUFDLEtBQUs7UUFDbEQsR0FBQyxvQ0FBaUIsQ0FBQyxTQUFTLElBQUcscUNBQWlCLENBQUMsU0FBUztZQUMxRCxDQUFDO0lBRVcsa0RBQW1CLEdBQUcsSUFBSSw2QkFBYTtRQUNuRCxHQUFDLDhDQUEyQixDQUFDLFNBQVMsSUFBRywrQ0FBMkIsQ0FBQyxTQUFTO1FBQzlFLEdBQUMsOENBQTJCLENBQUMsS0FBSyxJQUFHLCtDQUEyQixDQUFDLEtBQUs7UUFDdEUsR0FBQyw4Q0FBMkIsQ0FBQyxLQUFLLElBQUcsK0NBQTJCLENBQUMsS0FBSztRQUN0RSxHQUFDLDhDQUEyQixDQUFDLE1BQU0sSUFBRywrQ0FBMkIsQ0FBQyxNQUFNO1FBQ3hFLEdBQUMsOENBQTJCLENBQUMsVUFBVSxJQUFHLCtDQUEyQixDQUFDLFVBQVU7UUFDaEYsR0FBQyw4Q0FBMkIsQ0FBQyxnQkFBZ0IsSUFBRywrQ0FBMkIsQ0FBQyxnQkFBZ0I7UUFDNUYsR0FBQyw4Q0FBMkIsQ0FBQyxXQUFXLElBQUcsK0NBQTJCLENBQUMsV0FBVztRQUNsRixHQUFDLDhDQUEyQixDQUFDLElBQUksSUFBRywrQ0FBMkIsQ0FBQyxJQUFJO1FBQ3BFLEdBQUMsOENBQTJCLENBQUMsS0FBSyxJQUFHLCtDQUEyQixDQUFDLEtBQUs7UUFDdEUsR0FBQyw4Q0FBMkIsQ0FBQyxPQUFPLElBQUcsK0NBQTJCLENBQUMsT0FBTztRQUMxRSxHQUFDLDhDQUEyQixDQUFDLFNBQVMsSUFBRywrQ0FBMkIsQ0FBQyxTQUFTO1lBQzlFLENBQUM7SUFFVyx1Q0FBUSxHQUFHLElBQUksNkJBQWE7UUFDeEMsR0FBQyxtQ0FBZ0IsQ0FBQyxJQUFJLElBQUcsb0NBQWdCLENBQUMsSUFBSTtRQUM5QyxHQUFDLG1DQUFnQixDQUFDLElBQUksSUFBRyxvQ0FBZ0IsQ0FBQyxJQUFJO1FBQzlDLEdBQUMsbUNBQWdCLENBQUMsUUFBUSxJQUFHLG9DQUFnQixDQUFDLFFBQVE7UUFDdEQsR0FBQyxtQ0FBZ0IsQ0FBQyxLQUFLLElBQUcsb0NBQWdCLENBQUMsS0FBSztRQUNoRCxHQUFDLG1DQUFnQixDQUFDLEdBQUcsSUFBRyxvQ0FBZ0IsQ0FBQyxHQUFHO1FBQzVDLEdBQUMsbUNBQWdCLENBQUMsTUFBTSxJQUFHLG9DQUFnQixDQUFDLE1BQU07WUFDbEQsQ0FBQztJQUVXLCtDQUFnQixHQUFHLElBQUksNkJBQWE7UUFDaEQsR0FBQywyQ0FBd0IsQ0FBQyxHQUFHLElBQUcsNENBQXdCLENBQUMsR0FBRztRQUM1RCxHQUFDLDJDQUF3QixDQUFDLEdBQUcsSUFBRyw0Q0FBd0IsQ0FBQyxHQUFHO1FBQzVELEdBQUMsMkNBQXdCLENBQUMsTUFBTSxJQUFHLDRDQUF3QixDQUFDLE1BQU07UUFDbEUsR0FBQywyQ0FBd0IsQ0FBQyxPQUFPLElBQUcsNENBQXdCLENBQUMsT0FBTztZQUNwRSxDQUFDO0lBRVcsOENBQWUsR0FBRyxJQUFJLDZCQUFhO1FBQy9DLEdBQUMsZ0RBQTZCLENBQUMsR0FBRyxJQUFHLDhDQUEwQixDQUFDLEdBQUc7UUFDbkUsR0FBQyxnREFBNkIsQ0FBQyxJQUFJLElBQUcsOENBQTBCLENBQUMsSUFBSTtRQUNyRSxHQUFDLGdEQUE2QixDQUFDLEtBQUssSUFBRyw4Q0FBMEIsQ0FBQyxLQUFLO1lBQ3ZFLENBQUM7SUFFVyw2Q0FBYyxHQUFHLElBQUksNkJBQWE7UUFDOUMsR0FBQyx5Q0FBc0IsQ0FBQyxLQUFLLElBQUcsc0NBQWtCLENBQUMsS0FBSztRQUN4RCxHQUFDLHlDQUFzQixDQUFDLFFBQVEsSUFBRyxzQ0FBa0IsQ0FBQyxRQUFRO1FBQzlELEdBQUMseUNBQXNCLENBQUMsTUFBTSxJQUFHLHNDQUFrQixDQUFDLE1BQU07UUFDMUQsR0FBQyx5Q0FBc0IsQ0FBQyxLQUFLLElBQUcsc0NBQWtCLENBQUMsS0FBSztRQUN4RCxHQUFDLHlDQUFzQixDQUFDLElBQUksSUFBRyxzQ0FBa0IsQ0FBQyxJQUFJO1FBQ3RELEdBQUMseUNBQXNCLENBQUMsS0FBSyxJQUFHLHNDQUFrQixDQUFDLEtBQUs7UUFDeEQsR0FBQyx5Q0FBc0IsQ0FBQyxPQUFPLElBQUcsc0NBQWtCLENBQUMsT0FBTztRQUM1RCxHQUFDLHlDQUFzQixDQUFDLE9BQU8sSUFBRyxzQ0FBa0IsQ0FBQyxPQUFPO1lBQzVELENBQUM7SUFFVyw0Q0FBYSxHQUFHLElBQUksNkJBQWE7UUFDN0MsR0FBQyx3Q0FBcUIsQ0FBQyxPQUFPLElBQUcseUNBQXFCLENBQUMsT0FBTztRQUM5RCxHQUFDLHdDQUFxQixDQUFDLElBQUksSUFBRyx5Q0FBcUIsQ0FBQyxJQUFJO1FBQ3hELEdBQUMsd0NBQXFCLENBQUMsS0FBSyxJQUFHLHlDQUFxQixDQUFDLEtBQUs7UUFDMUQsR0FBQyx3Q0FBcUIsQ0FBQyxJQUFJLElBQUcseUNBQXFCLENBQUMsSUFBSTtRQUN4RCxHQUFDLHdDQUFxQixDQUFDLEtBQUssSUFBRyx5Q0FBcUIsQ0FBQyxLQUFLO1FBQzFELEdBQUMsd0NBQXFCLENBQUMsTUFBTSxJQUFHLHlDQUFxQixDQUFDLE1BQU07WUFDNUQsQ0FBQztJQUVXLHdDQUFTLEdBQUcsSUFBSSw2QkFBYTtRQUN6QyxHQUFDLHFDQUFrQixDQUFDLG9CQUFvQixJQUFHLHNDQUFrQixDQUFDLGFBQWE7UUFDM0UsR0FBQyxxQ0FBa0IsQ0FBQyxjQUFjLElBQUcsc0NBQWtCLENBQUMsYUFBYTtRQUNyRSxHQUFDLHFDQUFrQixDQUFDLG9CQUFvQixJQUFHLHNDQUFrQixDQUFDLGFBQWE7UUFDM0UsR0FBQyxxQ0FBa0IsQ0FBQyxpQkFBaUIsSUFBRyxzQ0FBa0IsQ0FBQyxhQUFhO1FBQ3hFLEdBQUMscUNBQWtCLENBQUMsaUJBQWlCLElBQUcsc0NBQWtCLENBQUMsYUFBYTtRQUN4RSxHQUFDLHFDQUFrQixDQUFDLHdCQUF3QixJQUFHLHNDQUFrQixDQUFDLGFBQWE7UUFDL0UsR0FBQyxxQ0FBa0IsQ0FBQyxlQUFlLElBQUcsc0NBQWtCLENBQUMsYUFBYTtRQUN0RSxHQUFDLHFDQUFrQixDQUFDLHNCQUFzQixJQUFHLHNDQUFrQixDQUFDLGlCQUFpQjtZQUNqRixDQUFDO0lBRVcseUNBQVUsR0FBRyxJQUFJLDZCQUFhO1FBQzFDLEdBQUMscUNBQWtCLENBQUMsV0FBVyxJQUFHLHNDQUFrQixDQUFDLFdBQVc7UUFDaEUsR0FBQyxxQ0FBa0IsQ0FBQyxLQUFLLElBQUcsc0NBQWtCLENBQUMsS0FBSztRQUNwRCxHQUFDLHFDQUFrQixDQUFDLFlBQVksSUFBRyxzQ0FBa0IsQ0FBQyxZQUFZO1FBQ2xFLEdBQUMscUNBQWtCLENBQUMsWUFBWSxJQUFHLHNDQUFrQixDQUFDLFlBQVk7WUFDbEUsQ0FBQztJQUNMLHFDQUFDO0NBQUE7QUE5SVksd0VBQThCOztBQStJM0MsMkJBQTJCOzs7Ozs7Ozs7O0FDOUszQiwrREFBbUc7QUFDbkcsNENBQWtEO0FBRWxEOzs7O0dBSUc7QUFDSDtJQUNFLHlCQUEyQixXQUFrQztRQUFsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7SUFBSSxDQUFDO0lBRXhELGlDQUFPLEdBQWpCLFVBQWtCLElBQVksRUFBRSxNQUF5QjtRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDeEQsd0VBQXdFO1lBQ3hFLDhEQUE4RDtZQUM5RCxJQUFNLGFBQWEsR0FBRyxLQUE2QixDQUFDO1lBQ3BELElBQU0saUJBQWlCLEdBQWUsK0RBQThCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEgsTUFBTSxJQUFJLDJCQUFZLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQztBQWJZLDBDQUFlOzs7Ozs7O0FDbEI1QixpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7Ozs7Ozs7QUM5QkQ7QUFDQTtBQUNBLGlDQUFpQyxRQUFRLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMxRSxDQUFDOzs7Ozs7O0FDSEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCLEVBQUU7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0UsaUNBQWlDO0FBQ3JHOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmQTs7R0FFRztBQUNILElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQix3Q0FBeUI7SUFDekIsNENBQTZCO0lBQzdCLGtDQUFtQjtJQUNuQixtREFBb0M7QUFDdEMsQ0FBQyxFQUxXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBS3RCOzs7Ozs7Ozs7O0FDVkQsc0NBQXlEO0FBR3pELDRDQUE4QztBQUU5Qzs7O0dBR0c7QUFDSDtJQUdFO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sK0NBQWdCLEdBQXZCLFVBQXdCLFNBQW9DLEVBQzFELE9BQXVDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxJQUFJLDJCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSwrQ0FBNkMsU0FBVyxDQUFDLENBQUM7UUFDN0gsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLGtEQUFtQixHQUExQixVQUEyQixTQUFvQyxFQUFFLE9BQXVDO1FBQ3RHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxJQUFJLDJCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxrREFBZ0QsU0FBVyxDQUFDLENBQUM7UUFDaEksQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVTLDhDQUFlLEdBQXpCLFVBQTBCLFlBQWdDO1FBQ3hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsWUFBWSxDQUFDO0lBQ3JFLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUM7QUEzQlksb0RBQW9COzs7Ozs7Ozs7O0FDTGpDOzs7O0dBSUc7QUFDSDtJQUlFLGdDQUFtQixTQUFvQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQVcsNkNBQVM7YUFBcEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVNLGlEQUFnQixHQUF2QixVQUF3QixPQUF1QztRQUEvRCxpQkFHQztRQUZDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxjQUFNLFlBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sb0RBQW1CLEdBQTFCLFVBQTJCLE9BQXVDO1FBQ2hFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsS0FBSyxPQUFPLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0lBRU0sNkNBQVksR0FBbkIsVUFBb0IsY0FBZ0M7UUFDbEQsR0FBRyxDQUFDLENBQWtCLFVBQWMsRUFBZCxTQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjO1lBQS9CLElBQU0sT0FBTztZQUNoQixJQUFJLENBQUM7Z0JBQ0gsSUFBTSxVQUFVLEdBQUcsY0FBYyxFQUFFLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxpR0FBaUc7Z0JBQ2pHLFFBQVEsQ0FBQztZQUNYLENBQUM7U0FDRjtJQUNILENBQUM7SUFDSCw2QkFBQztBQUFELENBQUM7QUFuQ1ksd0RBQXNCOzs7Ozs7Ozs7O0FDVG5DLHlEQUE2RDtBQUU3RCw0Q0FBK0M7QUFFL0M7SUFBQTtJQWlFQSxDQUFDO0lBaEVDOzs7T0FHRztJQUNXLDhCQUF3QixHQUF0QyxVQUF1QyxJQUFVO1FBQy9DLElBQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QyxJQUFNLEVBQUUsR0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBTSxFQUFFLEdBQVcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLElBQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUksSUFBSSxTQUFJLEtBQUssU0FBSSxHQUFHLFNBQUksRUFBRSxTQUFJLEVBQUUsU0FBSSxHQUFLLENBQUM7SUFDdEQsQ0FBQztJQUVhLGlDQUEyQixHQUF6QyxVQUEwQyxJQUFhO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFYSxnQ0FBMEIsR0FBeEMsVUFBeUMsR0FBVztRQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBMkI7SUFDYixrQkFBWSxHQUExQixVQUEyQixLQUFVO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxNQUFNLENBQUM7SUFDaEUsQ0FBQztJQUNELDBCQUEwQjtJQUUxQjs7T0FFRztJQUNILDJCQUEyQjtJQUNiLGdCQUFVLEdBQXhCLFVBQXlCLEtBQVU7UUFDakMsTUFBTSxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUNELDBCQUEwQjtJQUUxQixxQ0FBcUM7SUFDdkIsa0JBQVksR0FBMUIsVUFBMkIsS0FBVTtRQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsSUFBSSxLQUFLLFlBQVksTUFBTSxDQUFDO0lBQ2hFLENBQUM7SUFFRCxxQ0FBcUM7SUFDdkIsZ0JBQVUsR0FBeEIsVUFBeUIsS0FBVTtRQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsSUFBSSxLQUFLLFlBQVksT0FBTyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxxQ0FBcUM7SUFDdkIsNEJBQXNCLEdBQXBDLFVBQXFDLEtBQVU7UUFDN0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxLQUFlLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsS0FBYSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLEtBQWdCLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksMkJBQVksQ0FBQyxzQ0FBVSxDQUFDLGFBQWEsRUFBRSxtQ0FBaUMsS0FBTyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQztBQWpFWSxzQkFBSzs7Ozs7Ozs7OztBQ0ZsQjtJQUdFLG1CQUNVLEtBQXVDLEVBQ3ZDLFFBQWdDLEVBQ2hDLGNBQXNCLEVBQ3RCLHVCQUFnQyxFQUNoQyxjQUF1QixFQUN2QixVQUE0QjtRQUw1QixVQUFLLEdBQUwsS0FBSyxDQUFrQztRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUN0Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQVM7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQVM7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDcEMscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7SUFDL0UsQ0FBQztJQUVELHNCQUFXLDJCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDhCQUFPO2FBQWxCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxnQ0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsb0NBQWE7YUFBeEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZDQUFzQjthQUFqQztZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxvQ0FBYTthQUF4QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDO0FBekNZLDhCQUFTO0FBMkN0QjtJQUNFLGtCQUNVLEtBQXdCLEVBQ3hCLE1BQWMsRUFDZCxRQUFpQjtRQUZqQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUN2QixDQUFDO0lBRUwsc0JBQVcsMEJBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMkJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFPO2FBQWxCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQWxCWSw0QkFBUTtBQW9CckI7SUFDRSxnQkFDVSxVQUFrQixFQUNsQixTQUE0QixFQUFFLG9DQUFvQztRQUNsRSxhQUFzQixFQUN0QixNQUFjO1FBSGQsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUU3QixzQkFBVyw2QkFBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNEJBQVE7YUFBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGdDQUFZO2FBQXZCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBQUM7QUF0Qlksd0JBQU07QUF3Qm5CO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUNVLE1BQVcsRUFDWCxlQUF1QjtRQUR2QixXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQ1gsb0JBQWUsR0FBZixlQUFlLENBQVE7SUFBSSxDQUFDO0lBRXRDLHNCQUFXLDRCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxxQ0FBYzthQUF6QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUgsZ0JBQUM7QUFBRCxDQUFDO0FBZFksOEJBQVM7Ozs7Ozs7QUN6RnRCO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQSxxRUFBcUU7QUFDckUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUNYRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsYUFBYTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxvQ0FBb0M7QUFDN0UsNkNBQTZDLG9DQUFvQztBQUNqRixLQUFLLDRCQUE0QixvQ0FBb0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBLGtDQUFrQywyQkFBMkI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBLDZGQUF3RjtBQUN4RjtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkZBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNILFlBQVk7QUFDWjtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBOzs7Ozs7O0FDREE7QUFDQSx3Q0FBd0MsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEdBQUc7O0FBRTNGO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDs7QUFFckQ7O0FBRUE7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REQscURBQThEO0FBSTlEO0lBQTJCLHlCQUFvQjtJQUM3QyxlQUEyQixVQUFxQjtRQUFoRCxZQUNFLGlCQUFPLFNBQ1I7UUFGMEIsZ0JBQVUsR0FBVixVQUFVLENBQVc7O0lBRWhELENBQUM7SUFFRCxzQkFBVyx1QkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNEJBQVM7YUFBcEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1QkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRU0sa0NBQWtCLEdBQXpCLFVBQTBCLGFBQXFCO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sa0NBQWtCLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLENBeEIwQiwyQ0FBb0IsR0F3QjlDO0FBeEJZLHNCQUFLOzs7Ozs7Ozs7O0FDTmxCLHlEQUE2RDtBQUU3RCw0Q0FBK0M7QUFFL0M7Ozs7Ozs7OztHQVNHO0FBQ0g7SUFDRSx1QkFDVSxTQUFtRCxFQUNuRCxXQUE4QjtRQUQ5QixjQUFTLEdBQVQsU0FBUyxDQUEwQztRQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFBSSxDQUFDO0lBRXRDLCtCQUFPLEdBQWQsVUFBZSxPQUFvQixFQUFFLGNBQXdCO1FBQzNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFpQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO1FBRUQsTUFBTSxJQUFJLDJCQUFZLENBQUMsc0NBQVUsQ0FBQyxhQUFhLEVBQUUsaUNBQStCLE9BQVMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7QUFoQlksc0NBQWE7Ozs7Ozs7Ozs7QUNaMUI7SUFHRSxzQkFBbUIsSUFBK0I7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELHNCQUFXLDhCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUNILG1CQUFDO0FBQUQsQ0FBQztBQVZZLG9DQUFZOzs7Ozs7Ozs7O0FDSXpCLCtDQUErRTtBQUMvRSw0Q0FBcUQ7QUFFckQ7SUFDRSxtQkFBMkIsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFDeEQsQ0FBQztJQUVELHNCQUFXLDJCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxnQ0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGdDQUFTO2FBQXBCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMkJBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVNLHNDQUFrQixHQUF6QixVQUEwQixhQUFxQixFQUFFLEtBQXFCO1FBQ3BFLDJCQUFZLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM3RCwyQkFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0MsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsdUNBQTRDLENBQUM7UUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLHNDQUFrQixHQUF6QixVQUEwQixLQUFxQjtRQUM3QywyQkFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0MsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsdUNBQTRDLENBQUM7UUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUM7QUFsQ1ksOEJBQVM7Ozs7Ozs7Ozs7QUNMdEI7SUFDRSxvQkFBMkIsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUksQ0FBQztJQUUvRCxzQkFBVyw0QkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQUU7YUFBYjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDhCQUFNO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcseUNBQWlCO2FBQTVCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpQ0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVNLGlDQUFZLEdBQW5CO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLHlDQUFvQixHQUEzQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVNLGdEQUEyQixHQUFsQztRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVNLDJDQUFzQixHQUE3QixVQUE4QixPQUFrRDtRQUU5RSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBdkNZLGdDQUFVOzs7Ozs7Ozs7O0FDRHZCLDBDQUF3QztBQUV4QyxtREFBeUQ7QUFDekQsc0NBQWlDO0FBQ2pDLDhDQUErQztBQUkvQywrQ0FBK0U7QUFDL0UsNENBQXFEO0FBRXJEO0lBR0Usd0JBQTJCLGVBQTRDO1FBQXZFLGlCQUtDO1FBTDBCLG9CQUFlLEdBQWYsZUFBZSxDQUE2QjtRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFVO1lBQ2xELElBQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFXLGdDQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw4QkFBRTthQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkNBQWlCO2FBQTVCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxrQ0FBTTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcscUNBQVM7YUFBcEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFTSxxQ0FBWSxHQUFuQjtRQUNFLElBQU0saUJBQWlCLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsK0NBQy9CLENBQUM7UUFFbEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxvREFBMkIsR0FBbEM7UUFDRSxJQUFNLGlCQUFpQixHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLCtDQUMvQixDQUFDO1FBRWxDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBK0IsbUJBQVM7WUFDeEgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQU8sSUFBSSxXQUFJLHFDQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sNkNBQW9CLEdBQTNCO1FBQ0UsSUFBTSxpQkFBaUIsR0FBRyxvQ0FBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSwrQ0FDL0IsQ0FBQztRQUVsQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQStCLG9CQUFVO1lBQ2xILE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLG1CQUFTLElBQUksV0FBSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sK0NBQXNCLEdBQTdCLFVBQThCLE9BQWtEO1FBRzlFLElBQU0sY0FBYyxHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLGtDQUFzQyxDQUFDO1FBQ3BHLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRXhCLE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQzFDLElBQUksQ0FBQyxFQUFFLEVBQ1AsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQ3ZCLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFRLHdCQUF3QjtRQUNwRCxPQUFPLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLHVEQUE4QixHQUFyQyxVQUFzQyxVQUErQjtRQUNuRSwyQkFBWSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBVTtZQUN2RCxJQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7QUE1RVksd0NBQWM7Ozs7Ozs7Ozs7QUNYM0IsK0RBQWdHO0FBRWhHO0lBQ0UsbUJBQTJCLFVBQWtDLEVBQ25ELGlCQUFzQztRQURyQixlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUNuRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO0lBQUksQ0FBQztJQUVyRCxzQkFBVywyQkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcseUJBQUU7YUFBYjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGtDQUFXO2FBQXRCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsa0NBQVc7YUFBdEI7WUFDRSxNQUFNLENBQUMsK0RBQThCLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEcsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpQ0FBVTthQUFyQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLCtEQUE4QixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLCtCQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsa0NBQVc7YUFBdEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3Q0FBaUI7YUFBNUI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNDQUFlO2FBQTFCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDO0FBM0NZLDhCQUFTOzs7Ozs7Ozs7O0FDRHRCLDRDQUFvRDtBQUVwRDtJQUNFLGVBQTJCLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7SUFBSSxDQUFDO0lBRXJELHNCQUFXLHVCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxxQkFBRTthQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQVc7YUFBdEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw4QkFBVzthQUF0QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFVO2FBQXJCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUJBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQVc7YUFBdEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxvQ0FBaUI7YUFBNUI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFVO2FBQXJCO1lBQ0UsTUFBTSwyQkFBWSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxrQ0FBZTthQUExQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUNILFlBQUM7QUFBRCxDQUFDO0FBOUNZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0psQixrREFBd0Q7QUFFeEQ7SUFBMkMseUNBQWlCO0lBSzFELCtCQUFtQixJQUErQixFQUFZLFVBQThCO1FBQTVGLFlBQ0Usa0JBQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyxTQUN4QjtRQUY2RCxnQkFBVSxHQUFWLFVBQVUsQ0FBb0I7O0lBRTVGLENBQUM7SUFORCxzQkFBVyw0Q0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBS0gsNEJBQUM7QUFBRCxDQUFDLENBUjBDLHFDQUFpQixHQVEzRDtBQVJZLHNEQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEMsNkNBQThDO0FBRTlDO0lBQXVDLHFDQUFZO0lBT2pELDJCQUFtQixJQUErQixFQUFFLEtBQXFCO1FBQXpFLFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBR1o7UUFEQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFDdEIsQ0FBQztJQVJELHNCQUFXLG9DQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFPSCx3QkFBQztBQUFELENBQUMsQ0Fac0MsMkJBQVksR0FZbEQ7QUFaWSw4Q0FBaUI7Ozs7Ozs7Ozs7QUNDOUI7O0dBRUc7QUFDSCxJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsa0NBQW1CO0lBQ25CLHdDQUF5QjtBQUMzQixDQUFDLEVBSFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFHdEI7Ozs7Ozs7OztBQ1hEOzs7O0dBSUc7O0FBRUgsOENBQThDO0FBQzlDLHdCQUE0QjtBQUM1Qix3QkFBK0I7QUFDL0Isd0JBQWtDO0FBRWxDLDBGQUEwRjtBQUMxRiw0RkFBNEY7QUFDNUYsa0JBQWtCO0FBRWxCLGdEQUFxRTtBQUNyRSw0Q0FBbUU7QUFDbkUseUNBQTRDO0FBRzVDLHlCQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBbUQsQ0FBQyxDQUFDLENBQUMsT0FBNEIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFN0gsSUFBTSxhQUFhLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFDOUIsa0JBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFeEQsZUFBZTtBQUNmLCtFQUErRTtBQUMvRSw4REF5QnlDO0FBeEJ2QywyRUFBZ0I7QUFDaEIscUVBQWE7QUFDYixpRkFBbUI7QUFDbkIsK0RBQVU7QUFDVixpRkFBbUI7QUFDbkIsMkRBQVE7QUFDUixxRUFBYTtBQUNiLG1FQUFZO0FBQ1osK0RBQVU7QUFDVixtRkFBb0I7QUFDcEIscUVBQWE7QUFDYiwyRUFBZ0I7QUFDaEIsK0RBQVU7QUFDViwyRUFBZ0I7QUFDaEIsMkVBQWdCO0FBQ2hCLDJEQUFRO0FBQ1IsK0VBQWtCO0FBQ2xCLCtEQUFVO0FBQ1YsK0VBQWtCO0FBQ2xCLGlGQUFtQjtBQUNuQiw2REFBUztBQUNULHFFQUFhO0FBQ2IsMkVBQWdCO0FBQ2hCLCtFQUFrQjs7Ozs7OztBQ25EcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztBQ1RBO0FBQ0EscUVBQXNFLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUN2RyxDQUFDOzs7Ozs7O0FDRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQ0FBQzs7Ozs7OztBQ2hCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEZBQWtGLGFBQWEsRUFBRTs7QUFFakc7QUFDQSxxREFBcUQsNEJBQTRCO0FBQ2pGO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWSxlQUFlO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9ELHdCQUF3QjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pDQTtBQUNBLFVBQVU7QUFDVjs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLGtDQUFrQztBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLHVDQUF1QztBQUN0RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQix5QkFBeUIsS0FBSztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELG9CQUFvQjtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUM3UkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlCQUFpQixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsZ0JBQWdCO0FBQ25GO0FBQ0E7QUFDQSxHQUFHLDRDQUE0QyxnQ0FBZ0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7QUNwRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DLEdBQUc7QUFDSDs7Ozs7OztBQ1pBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxFQUFFO0FBQzVDLENBQUMsWUFBWTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUyxxQkFBcUI7QUFDM0QsaUNBQWlDLGFBQWE7QUFDOUM7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsVUFBVSxFQUFFO0FBQzFFLEtBQUs7QUFDTDtBQUNBLDhEQUE4RCxTQUFTLEVBQUU7QUFDekUsS0FBSztBQUNMO0FBQ0EsQ0FBQyxFQUFFOzs7Ozs7OztBQ25CSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7Ozs7OztBQ1hIO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixtQ0FBbUM7QUFDbkMsU0FBUyxpQ0FBaUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBLDBDQUEwQyxtQ0FBc0M7Ozs7Ozs7O0FDSGhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVLEVBQUU7QUFDaEQsbUJBQW1CLHNDQUFzQztBQUN6RCxDQUFDLHFDQUFxQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7OztBQ2pDRDs7Ozs7OztBQ0FBLGNBQWM7Ozs7Ozs7Ozs7QUNBZCw4REFBaUU7QUFFakUsd0RBUzJDO0FBRTNDLHlDQVF5QjtBQUV6Qix5Q0FBK0M7QUFFL0Msa0RBQWtFO0FBQ2xFLDZDQUF3RDtBQUN4RCwwQ0FBa0Q7QUFDbEQsb0NBQXNDO0FBR3RDLCtEQUEwRjtBQUMxRiw4Q0FBOEM7QUFDOUMsd0NBQWtDO0FBSWxDO0lBQUE7SUF1R0EsQ0FBQztJQS9GUSx3Q0FBZSxHQUF0QixVQUF1QixpQkFBMEIsRUFBRSxvQkFBa0M7UUFBckYsaUJBd0JDO1FBdkJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDaEUsdUdBQXVHO2dCQUN2RyxFQUFFLENBQUMsQ0FBQyxzREFBMkIsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakUsdUNBQXVDO29CQUN2QyxJQUFNLHdCQUF3QixHQUFHLHNEQUEyQixDQUFDLDJCQUEyQixFQUFFLENBQUM7b0JBRTNGLHdCQUF3QixDQUFDLElBQUksQ0FBQyxVQUFDLGdCQUFnQjt3QkFDN0MsWUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDO29CQUFwRixDQUFvRixDQUFDO3lCQUNwRixJQUFJLENBQUMsVUFBQyxXQUFXO3dCQUNoQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sZ0dBQWdHO29CQUNoRyxJQUFNLDhCQUE0QixHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7b0JBQzFFLGlDQUFxQixDQUFDLE1BQU0sRUFBRSxvREFBeUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQXFDO3dCQUNsRyxNQUFNLENBQUMsOEJBQTRCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDLENBQUM7b0JBQ3hGLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVcsSUFBTyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUVPLDZDQUFvQixHQUE1QixVQUNFLGlCQUErQyxFQUMvQyxpQkFBMEIsRUFDMUIsb0JBQWtDO1FBSHBDLGlCQW9DQztRQS9CQyxJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxvREFBeUIsQ0FBQyxDQUFDO1FBRWhFLG9GQUFvRjtRQUNwRixxQ0FBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0Qyw2REFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUxQywrREFBK0Q7UUFDL0QsSUFBTSxxQkFBcUIsR0FBRyw4QkFBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxxREFDckIsQ0FBQztRQUVoRCxJQUFNLGVBQWUsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxrQ0FBa0MsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQVMsZ0JBQU07WUFDckgsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSx3QkFBWSxDQUFDLDBDQUFVLENBQUMsYUFBYSxFQUFFLHlDQUF5QyxDQUFDLENBQUM7WUFDOUYsQ0FBQztZQUVELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUNuRixNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxPQUFFLENBQUMsSUFBSSxlQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRS9CLHNGQUFzRjtZQUN0RixxRUFBcUU7WUFDckUsS0FBSSxDQUFDLDhCQUE4QixDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFFMUQsK0dBQStHO1lBQy9HLDRHQUE0RztZQUM1Ryx5REFBeUQ7WUFDekQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtREFBMEIsR0FBbEMsVUFBbUMsSUFBNEIsRUFBRSxTQUFvQjtRQUNuRixJQUFNLGFBQWEsR0FBRyxJQUFJLHlCQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELElBQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sMkNBQWtCLEdBQTFCLFVBQTJCLFlBQW1DO1FBQzVELElBQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsSUFBSSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyx1REFBOEIsR0FBdEMsVUFBdUMsb0JBQWtDO1FBQ3ZFLElBQU0sbUJBQW1CLEdBQXdCLDhCQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLDJDQUFnRCxDQUFDO1FBRXhJLG1FQUFtRTtRQUNuRSxtREFBbUQ7UUFDbkQsbUJBQW1CLENBQUMsZUFBZSxDQUFDLHlDQUFjLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUFLO1lBQ3pFLDZFQUE2RTtZQUM3RSxrQ0FBa0M7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsRUFBRSxVQUFDLEtBQXVCO1lBQ3pCLDREQUE0RDtZQUM1RCxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxJQUFJLHdCQUFZLENBQUMsMENBQVUsQ0FBQyxhQUFhLEVBQUUscURBQW1ELEtBQUssQ0FBQyxFQUFJLENBQUMsQ0FBQztnQkFDbEgsQ0FBQztnQkFFRCxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDO0FBdkdZLHdDQUFjOzs7Ozs7Ozs7QUNyQzNCLDJEQUEyRDtBQUMzRCw4Q0FBOEM7O0FBRTlDOztHQUVHO0FBQ0gsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQzFCLHVDQUFtQjtJQUNuQixxQ0FBaUI7QUFDbkIsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsd0NBQXVCO0lBQ3ZCLG9DQUFtQjtBQUNyQixDQUFDLEVBSFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFHeEI7QUFFRCxJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDN0IsMENBQW1CO0lBQ25CLDRDQUFxQjtJQUNyQiwrQ0FBd0I7QUFDMUIsQ0FBQyxFQUpXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBSTlCO0FBRUQsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLG1DQUFxQjtJQUNyQix1Q0FBeUI7QUFDM0IsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLG1CQVlYO0FBWkQsV0FBWSxtQkFBbUI7SUFDN0Isc0NBQWU7SUFDZiw4Q0FBdUI7SUFDdkIsbURBQTRCO0lBQzVCLDZEQUFzQztJQUN0QyxpREFBMEI7SUFDMUIsd0NBQWlCO0lBQ2pCLHNDQUFlO0lBQ2Ysb0NBQWE7SUFDYixzQ0FBZTtJQUNmLDJDQUFvQjtJQUNwQiw4Q0FBdUI7QUFDekIsQ0FBQyxFQVpXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBWTlCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLFFBUVg7QUFSRCxXQUFZLFFBQVE7SUFDbEIsNkJBQWlCO0lBQ2pCLHVCQUFXO0lBQ1gsMkJBQWU7SUFDZix5QkFBYTtJQUNiLHlCQUFhO0lBQ2Isa0NBQXNCO0lBQ3RCLCtCQUFtQjtBQUNyQixDQUFDLEVBUlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFRbkI7QUFFRDs7R0FFRztBQUNILElBQVksYUFPWDtBQVBELFdBQVksYUFBYTtJQUN2Qiw4QkFBYTtJQUNiLGlDQUFnQjtJQUNoQiw4QkFBYTtJQUNiLGlDQUFnQjtJQUNoQixvQ0FBbUI7SUFDbkIsbUNBQWtCO0FBQ3BCLENBQUMsRUFQVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU94QjtBQUVELElBQVksWUFlWDtBQWZELFdBQVksWUFBWTtJQUN0QixpQ0FBaUI7SUFDakIsMkJBQVc7SUFDWCw2QkFBYTtJQUNiLGlDQUFpQjtJQUNqQix3Q0FBd0I7SUFDeEIsZ0RBQWdDO0lBQ2hDLCtCQUFlO0lBQ2YsNkJBQWE7SUFDYiwrQkFBZTtJQUNmLGlDQUFpQjtJQUNqQixtQ0FBbUI7SUFDbkIsK0JBQWU7SUFDZiw2QkFBYTtJQUNiLCtCQUFlO0FBQ2pCLENBQUMsRUFmVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWV2QjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxVQWlEWDtBQWpERCxXQUFZLFVBQVU7SUFDcEI7O09BRUc7SUFDSCx1REFBeUM7SUFDekM7O09BRUc7SUFDSCx1REFBeUM7SUFDekM7O09BRUc7SUFDSCwwREFBNEM7SUFDNUM7O09BRUc7SUFDSCw4Q0FBZ0M7SUFDaEM7O09BRUc7SUFDSCwyREFBNkM7SUFDN0M7O09BRUc7SUFDSCxvREFBc0M7SUFDdEM7O09BRUc7SUFDSCw4Q0FBZ0M7SUFDaEM7O09BRUc7SUFDSCxvREFBc0M7SUFDdEM7O09BRUc7SUFDSCwwQ0FBNEI7SUFDNUI7O09BRUc7SUFDSCxnRUFBa0Q7SUFDbEQ7O09BRUc7SUFDSCw2REFBK0M7SUFDL0M7O09BRUc7SUFDSCw0RkFBOEU7QUFDaEYsQ0FBQyxFQWpEVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQWlEckI7QUFFRDs7R0FFRztBQUNILElBQVksb0JBd0NYO0FBeENELFdBQVksb0JBQW9CO0lBQzlCLG1DQUFXO0lBQ1gsbUNBQVc7SUFDWCxtQ0FBVztJQUNYLG1DQUFXO0lBQ1gsdUNBQWU7SUFDZix5Q0FBaUI7SUFDakIsbUNBQVc7SUFDWCxxQ0FBYTtJQUNiLHVDQUFlO0lBQ2YseUNBQWlCO0lBQ2pCLHlDQUFpQjtJQUNqQixxQ0FBYTtJQUNiLHFDQUFhO0lBQ2IscUNBQWE7SUFDYixtQ0FBVztJQUNYLHVDQUFlO0lBQ2YsbUNBQVc7SUFDWCxxQ0FBYTtJQUNiLHlDQUFpQjtJQUNqQix5Q0FBaUI7SUFDakIscUNBQWE7SUFDYiwyQ0FBbUI7SUFDbkIsZ0RBQXdCO0lBQ3hCLG1DQUFXO0lBQ1gsbUNBQVc7SUFDWCxnREFBd0I7SUFDeEIsOENBQXNCO0lBQ3RCLGtEQUEwQjtJQUMxQixnREFBd0I7SUFDeEIsOENBQXNCO0lBQ3RCLGdEQUF3QjtJQUN4QixvREFBNEI7SUFDNUIsb0RBQTRCO0lBQzVCLHlDQUFpQjtJQUNqQix5Q0FBaUI7SUFDakIsNkNBQXFCO0lBQ3JCLDZDQUFxQjtJQUNyQix3Q0FBZ0I7SUFDaEIscUNBQWE7QUFDZixDQUFDLEVBeENXLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBd0MvQjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLHdDQUF1QjtJQUN2QixvQ0FBbUI7SUFDbkIsb0NBQW1CO0FBQ3JCLENBQUMsRUFKVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUl4QjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ3BCLHlDQUEyQjtJQUMzQiw2QkFBZTtJQUNmLDJDQUE2QjtJQUM3Qiw0Q0FBOEI7QUFDaEMsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLGdCQUtYO0FBTEQsV0FBWSxnQkFBZ0I7SUFDMUIsK0JBQVc7SUFDWCwrQkFBVztJQUNYLHVDQUFtQjtJQUNuQixxQ0FBaUI7QUFDbkIsQ0FBQyxFQUxXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBSzNCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLGdCQVVYO0FBVkQsV0FBWSxnQkFBZ0I7SUFDMUI7OztPQUdHO0lBQ0gseUNBQXFCO0lBQ3JCOztPQUVHO0lBQ0gseUNBQXFCO0FBQ3ZCLENBQUMsRUFWVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQVUzQjtBQUVEOzs7R0FHRztBQUNILElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQiw4Q0FBMEI7SUFDMUIscURBQWlDO0lBQ2pDLDRDQUF3QjtBQUMxQixDQUFDLEVBSlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFJM0I7QUFFRDs7R0FFRztBQUNILElBQVksUUFZWDtBQVpELFdBQVksUUFBUTtJQUNsQix1QkFBVztJQUNYLHlCQUFhO0lBQ2IseUJBQWE7SUFDYiw2QkFBaUI7SUFDakIsNkJBQWlCO0lBQ2pCLDJCQUFlO0lBQ2YseUJBQWE7SUFDYix1QkFBVztJQUNYLHVCQUFXO0lBQ1gsa0NBQXNCO0lBQ3RCLCtCQUFtQjtBQUNyQixDQUFDLEVBWlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFZbkI7QUFFRDs7O0dBR0c7QUFDSCxJQUFZLGtCQUlYO0FBSkQsV0FBWSxrQkFBa0I7SUFDNUIsaUNBQVc7SUFDWCxtQ0FBYTtJQUNiLHFDQUFlO0FBQ2pCLENBQUMsRUFKVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUk3QjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ3BCLDZCQUFlO0lBQ2YsbUNBQXFCO0lBQ3JCLCtCQUFpQjtJQUNqQiw2QkFBZTtJQUNmLDJCQUFhO0lBQ2IsNkJBQWU7SUFDZixpQ0FBbUI7SUFDbkIsaUNBQW1CO0FBQ3JCLENBQUMsRUFUVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVNyQjtBQUVELElBQVksa0JBYVg7QUFiRCxXQUFZLGtCQUFrQjtJQUM1QixvREFBOEI7SUFDOUIsK0NBQXlCO0lBQ3pCLDhEQUF3QztJQUN4Qyx5REFBbUM7SUFDbkMsbUNBQWE7SUFDYiwrQ0FBeUI7SUFDekIsc0RBQWdDO0lBQ2hDLDRDQUFzQjtJQUN0QixpRUFBMkM7SUFDM0Msa0VBQTRDO0lBQzVDLDhDQUF3QjtJQUN4Qiw2Q0FBdUI7QUFDekIsQ0FBQyxFQWJXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBYTdCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDN0IsaURBQTBCO0lBQzFCLHlDQUFrQjtJQUNsQiwrQ0FBd0I7QUFDMUIsQ0FBQyxFQUpXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBSTlCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDbkIsb0NBQXVCO0lBQ3ZCLDRCQUFlO0lBQ2Ysb0NBQXVCO0FBQ3pCLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUVELElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QiwwQ0FBeUI7SUFDekIsMENBQXlCO0FBQzNCLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxnQkFZWDtBQVpELFdBQVksZ0JBQWdCO0lBQzFCLCtDQUErQztJQUMvQyxvREFBZ0M7SUFFaEMsd0RBQXdEO0lBQ3hELG1FQUErQztJQUUvQyw2Q0FBNkM7SUFDN0MsMERBQXNDO0lBRXRDLHFEQUFxRDtJQUNyRCx3REFBb0M7QUFDdEMsQ0FBQyxFQVpXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBWTNCO0FBRUQsSUFBWSxrQkFLWDtBQUxELFdBQVksa0JBQWtCO0lBQzVCLHVDQUFpQjtJQUNqQixpREFBMkI7SUFDM0IsaURBQTJCO0lBQzNCLCtDQUF5QjtBQUMzQixDQUFDLEVBTFcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFLN0I7Ozs7Ozs7QUN2VkQ7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7O0FBRUEsOEJBQThCLHNDQUFzQzs7Ozs7OztBQ0hwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNMQSxJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDMUIsdUNBQW1CO0lBQ25CLHFDQUFpQjtJQUNqQix1Q0FBbUI7QUFDckIsQ0FBQyxFQUpXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBSTNCO0FBRUQsSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLHdDQUF1QjtJQUN2QixvQ0FBbUI7SUFDbkIsb0NBQW1CO0FBQ3JCLENBQUMsRUFKVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUl4QjtBQUVELElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtQ0FBcUI7SUFDckIsdUNBQXlCO0FBQzNCLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQUVELElBQVksbUJBWVg7QUFaRCxXQUFZLG1CQUFtQjtJQUM3QixzQ0FBZTtJQUNmLDhDQUF1QjtJQUN2QixtREFBNEI7SUFDNUIsNkRBQXNDO0lBQ3RDLGlEQUEwQjtJQUMxQix3Q0FBaUI7SUFDakIsc0NBQWU7SUFDZixvQ0FBYTtJQUNiLHNDQUFlO0lBQ2YsMkNBQW9CO0lBQ3BCLDhDQUF1QjtBQUN6QixDQUFDLEVBWlcsbUJBQW1CLEdBQW5CLDJCQUFtQixLQUFuQiwyQkFBbUIsUUFZOUI7QUFFRCxJQUFZLFFBUVg7QUFSRCxXQUFZLFFBQVE7SUFDbEIsNkJBQWlCO0lBQ2pCLHVCQUFXO0lBQ1gsMkJBQWU7SUFDZix5QkFBYTtJQUNiLHlCQUFhO0lBQ2Isa0NBQXNCO0lBQ3RCLCtCQUFtQjtBQUNyQixDQUFDLEVBUlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFRbkI7QUFFRCxJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDekIsb0NBQWlCO0lBQ2pCLG9DQUFpQjtJQUNqQixnQ0FBYTtJQUNiLHNDQUFtQjtBQUNyQixDQUFDLEVBTFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFLMUI7QUFFRCxJQUFZLFVBU1g7QUFURCxXQUFZLFVBQVU7SUFDcEIsMkRBQTZDO0lBQzdDLCtDQUFpQztJQUNqQywyREFBNkM7SUFDN0MscURBQXVDO0lBQ3ZDLHFEQUF1QztJQUN2QyxtRUFBcUQ7SUFDckQsK0RBQWlEO0lBQ2pELGlEQUFtQztBQUNyQyxDQUFDLEVBVFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFTckI7QUFFRCxJQUFZLG9CQXdDWDtBQXhDRCxXQUFZLG9CQUFvQjtJQUM5QixtQ0FBVztJQUNYLG1DQUFXO0lBQ1gsbUNBQVc7SUFDWCxtQ0FBVztJQUNYLHVDQUFlO0lBQ2YseUNBQWlCO0lBQ2pCLG1DQUFXO0lBQ1gscUNBQWE7SUFDYix1Q0FBZTtJQUNmLHlDQUFpQjtJQUNqQix5Q0FBaUI7SUFDakIscUNBQWE7SUFDYixxQ0FBYTtJQUNiLHFDQUFhO0lBQ2IsbUNBQVc7SUFDWCx1Q0FBZTtJQUNmLG1DQUFXO0lBQ1gscUNBQWE7SUFDYix5Q0FBaUI7SUFDakIseUNBQWlCO0lBQ2pCLHFDQUFhO0lBQ2IsMkNBQW1CO0lBQ25CLGdEQUF3QjtJQUN4QixtQ0FBVztJQUNYLG1DQUFXO0lBQ1gsZ0RBQXdCO0lBQ3hCLDhDQUFzQjtJQUN0QixrREFBMEI7SUFDMUIsZ0RBQXdCO0lBQ3hCLDhDQUFzQjtJQUN0QixnREFBd0I7SUFDeEIsb0RBQTRCO0lBQzVCLG9EQUE0QjtJQUM1Qix5Q0FBaUI7SUFDakIseUNBQWlCO0lBQ2pCLDZDQUFxQjtJQUNyQiw2Q0FBcUI7SUFDckIsd0NBQWdCO0lBQ2hCLHFDQUFhO0FBQ2YsQ0FBQyxFQXhDVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQXdDL0I7QUFFRCxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsd0NBQXVCO0lBQ3ZCLG9DQUFtQjtJQUNuQixvQ0FBbUI7QUFDckIsQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLGdCQUtYO0FBTEQsV0FBWSxnQkFBZ0I7SUFDMUIsK0JBQVc7SUFDWCwrQkFBVztJQUNYLHVDQUFtQjtJQUNuQixxQ0FBaUI7QUFDbkIsQ0FBQyxFQUxXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBSzNCO0FBRUQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLG9DQUF1QjtJQUN2Qiw0QkFBZTtJQUNmLG9DQUF1QjtBQUN6QixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFFRCxJQUFZLHFCQUlYO0FBSkQsV0FBWSxxQkFBcUI7SUFDL0Isb0NBQVc7SUFDWCxzQ0FBYTtJQUNiLHdDQUFlO0FBQ2pCLENBQUMsRUFKVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUloQztBQUVELElBQVksY0FTWDtBQVRELFdBQVksY0FBYztJQUN4QixpQ0FBZTtJQUNmLHVDQUFxQjtJQUNyQixtQ0FBaUI7SUFDakIsaUNBQWU7SUFDZiwrQkFBYTtJQUNiLGlDQUFlO0lBQ2YscUNBQW1CO0lBQ25CLHFDQUFtQjtBQUNyQixDQUFDLEVBVFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFTekI7QUFFRDs7R0FFRztBQUNILElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQiw2Q0FBeUI7SUFDekIsbURBQStCO0lBQy9CLDJDQUF1QjtBQUN6QixDQUFDLEVBSlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFJM0I7QUFFRDs7R0FFRztBQUNILElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMxQix5Q0FBcUI7SUFDckIseUNBQXFCO0FBQ3ZCLENBQUMsRUFIVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUczQjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxtQkFJWDtBQUpELFdBQVksbUJBQW1CO0lBQzdCLGlEQUEwQjtJQUMxQix5Q0FBa0I7SUFDbEIsK0NBQXdCO0FBQzFCLENBQUMsRUFKVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQUk5QjtBQUVEOztHQUVHO0FBQ0gsSUFBWSwwQkFJWDtBQUpELFdBQVksMEJBQTBCO0lBQ3BDLDBEQUE0QjtJQUM1QixpRUFBbUM7SUFDbkMsd0RBQTBCO0FBQzVCLENBQUMsRUFKVywwQkFBMEIsR0FBMUIsa0NBQTBCLEtBQTFCLGtDQUEwQixRQUlyQztBQUVEOztHQUVHO0FBQ0gsSUFBWSxRQVlYO0FBWkQsV0FBWSxRQUFRO0lBQ2hCLHVCQUFXO0lBQ1gseUJBQWE7SUFDYix5QkFBYTtJQUNiLDZCQUFpQjtJQUNqQiw2QkFBaUI7SUFDakIsMkJBQWU7SUFDZix5QkFBYTtJQUNiLHVCQUFXO0lBQ1gsdUJBQVc7SUFDWCxrQ0FBc0I7SUFDdEIsK0JBQW1CO0FBQ3ZCLENBQUMsRUFaVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQVluQjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ3BCLHlDQUEyQjtJQUMzQiw2QkFBZTtJQUNmLDJDQUE2QjtJQUM3QiwyQ0FBNkI7QUFDL0IsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLGFBeUJYO0FBekJELFdBQVksYUFBYTtJQUN2Qjs7T0FFRztJQUNILDhCQUFhO0lBQ2I7O09BRUc7SUFDSCxnQ0FBZTtJQUNmOztPQUVHO0lBQ0gsOEJBQWE7SUFDYjs7T0FFRztJQUNILGdDQUFlO0lBQ2Y7O09BRUc7SUFDSCxvQ0FBbUI7SUFDbkI7O09BRUc7SUFDSCxrQ0FBaUI7QUFDbkIsQ0FBQyxFQXpCVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQXlCeEI7QUFFRDs7R0FFRztBQUNILElBQVkscUJBSVg7QUFKRCxXQUFZLHFCQUFxQjtJQUMvQixrRUFBeUM7SUFDekMseURBQWdDO0lBQ2hDLDRDQUFtQjtBQUNyQixDQUFDLEVBSlcscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFJaEM7Ozs7Ozs7Ozs7QUM1TUQsSUFBaUIsMkJBQTJCLENBWTNDO0FBWkQsV0FBaUIsMkJBQTJCO0lBQzFDO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztJQUMzQyxDQUFDO0lBRmUsdURBQTJCLDhCQUUxQztJQUVEO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFGZSwwREFBOEIsaUNBRTdDO0lBRUQscUNBQTRDLFVBQWlEO1FBQzNGLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxVQUFVLENBQUM7SUFDakQsQ0FBQztJQUZlLHVEQUEyQiw4QkFFMUM7QUFDSCxDQUFDLEVBWmdCLDJCQUEyQixHQUEzQixtQ0FBMkIsS0FBM0IsbUNBQTJCLFFBWTNDOzs7Ozs7Ozs7O0FDL0NELElBQVksY0FRWDtBQVJELFdBQVksY0FBYztJQUN4QixpRUFBK0M7SUFDL0Msd0RBQXNDO0lBQ3RDLGtEQUFnQztJQUNoQyxtRUFBaUQ7SUFDakQsc0RBQW9DO0lBQ3BDLHlEQUF1QztJQUN2Qyw2RUFBMkQ7QUFDN0QsQ0FBQyxFQVJXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBUXpCOzs7Ozs7Ozs7O0FDUkQsSUFBWSxXQW1FWDtBQW5FRCxXQUFZLFdBQVc7SUFDckIscURBQXNDO0lBQ3RDLGtFQUFtRDtJQUNuRCxnRUFBaUQ7SUFDakQscUNBQXNCO0lBQ3RCLHVDQUF3QjtJQUN4QiwrQ0FBZ0M7SUFDaEMsbURBQW9DO0lBQ3BDLHdEQUF5QztJQUN6QyxtQ0FBb0I7SUFDcEIsNERBQTZDO0lBQzdDLDJFQUE0RDtJQUM1RCw2REFBOEM7SUFDOUMsaURBQWtDO0lBQ2xDLDZDQUE4QjtJQUM5QixtREFBb0M7SUFFcEMsZ0JBQWdCO0lBQ2hCLHVDQUF3QjtJQUN4Qiw2Q0FBOEI7SUFDOUIsc0RBQXVDO0lBQ3ZDLDJDQUE0QjtJQUM1QixrREFBbUM7SUFDbkMsa0RBQW1DO0lBQ25DLGlFQUFrRDtJQUNsRCxxREFBc0M7SUFDdEMsbUNBQW9CO0lBQ3BCLHlDQUEwQjtJQUMxQix1REFBd0M7SUFDeEMsd0RBQXlDO0lBQ3pDLDhCQUFlO0lBRWYsK0NBQWdDO0lBQ2hDLDBDQUEyQjtJQUUzQiwrQ0FBZ0M7SUFDaEMsaURBQWtDO0lBQ2xDLHFEQUFzQztJQUN0QywwREFBMkM7SUFDM0MsaURBQWtDO0lBQ2xDLHNDQUF1QjtJQUN2QiwwREFBMkM7SUFDM0MsMEVBQTJEO0lBQzNELDJFQUE0RDtJQUM1RCxzRUFBdUQ7SUFFdkQsc0RBQXVDO0lBQ3ZDLHlDQUEwQjtJQUMxQiw4Q0FBK0I7SUFDL0IsNENBQTZCO0lBQzdCLG9EQUFxQztJQUNyQyx5Q0FBMEI7SUFDMUIsa0RBQW1DO0lBQ25DLHNEQUF1QztJQUN2QyxtREFBb0M7SUFDcEMsa0ZBQW1FO0lBRW5FLDBEQUEyQztJQUMzQyxrRUFBbUQ7SUFDbkQsd0RBQXlDO0lBQ3pDLDJEQUE0QztJQUM1QywwREFBMkM7SUFDM0MsZ0VBQWlEO0lBRWpELHFFQUFzRDtJQUV0RCxvRUFBcUQ7QUFDdkQsQ0FBQyxFQW5FVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQW1FdEI7Ozs7Ozs7Ozs7QUNuRUQsNkZBQTZGO0FBQzdGLElBQVksTUE2Qlg7QUE3QkQsV0FBWSxNQUFNO0lBQ2hCLHVEQUE2QztJQUM3QywyQ0FBaUM7SUFDakMsc0NBQTRCO0lBQzVCLHNEQUE0QztJQUM1QyxpREFBdUM7SUFDdkMsbURBQXlDO0lBQ3pDLG1EQUF5QztJQUN6QywyREFBaUQ7SUFDakQsaURBQXVDO0lBQ3ZDLHVEQUE2QztJQUM3Qyw0REFBa0Q7SUFDbEQsMENBQWdDO0lBQ2hDLHlEQUErQztJQUMvQyxxREFBMkM7SUFDM0MsMkNBQWlDO0lBQ2pDLDZDQUFtQztJQUNuQyxtREFBeUM7SUFDekMsb0NBQTBCO0lBQzFCLHlEQUErQztJQUMvQyw2Q0FBbUM7SUFDbkMscURBQTJDO0lBQzNDLG9GQUEwRTtJQUMxRSwwQ0FBZ0M7SUFDaEMsc0NBQTRCO0lBQzVCLHFEQUEyQztJQUMzQyxnQ0FBc0I7SUFDdEIsMENBQWdDO0lBQ2hDLCtDQUFxQztBQUN2QyxDQUFDLEVBN0JXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQTZCakI7Ozs7Ozs7Ozs7QUM1QkQsMERBQXNFO0FBQ3RFLDBEQUFzRTtBQUV0RSw0RkFBNEY7QUFDNUYsb0VBQW9FO0FBQ3BFLElBQU0sZUFBZSxHQUFrRTtJQUNyRixDQUFDLEVBQUUsRUFBRTtDQUNOLENBQUM7QUFFRixJQUFNLGlCQUFpQixHQUFzRTtJQUMzRixDQUFDLEVBQUUsRUFBRTtDQUNOLENBQUM7QUFFRixJQUFNLHNCQUFzQixHQUFxRTtJQUMvRixDQUFDLEVBQUUsRUFBRTtDQUNOLENBQUM7QUFFRjs7Ozs7OztHQU9HO0FBQ0gsZ0NBQXVDLG9CQUE0QixFQUFFLG9CQUE0QjtJQUUvRixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7UUFDekMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZDLG9CQUFvQixHQUFHLENBQUM7UUFDeEIsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQixNQUFNLElBQUksS0FBSyxDQUFDLG1FQUNPLG9CQUFvQiw4QkFBeUIsb0JBQXNCLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0dBQ08sb0JBQW9CLDhCQUF5QixvQkFBc0IsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsS0FBSyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDbEQsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxJQUFJLG1EQUF3QixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELG1HQUFtRztJQUNuRyxJQUFJLHFCQUFxQixHQUEyQyxFQUFFLENBQUM7SUFDdkUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDakUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDekIscUJBQXFCLENBQUMsSUFBSSxPQUExQixxQkFBcUIsRUFBUyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDcEQsQ0FBQztJQUNILENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBSSx1QkFBdUIsR0FBK0MsRUFBRSxDQUFDO0lBQzdFLElBQUksNEJBQTRCLEdBQThDLEVBQUUsQ0FBQztJQUNqRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBb0IsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzQix1QkFBdUIsQ0FBQyxJQUFJLE9BQTVCLHVCQUF1QixFQUFTLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3hELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLDRCQUE0QixDQUFDLElBQUksT0FBakMsNEJBQTRCLEVBQVMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxtREFBd0IsQ0FDakMsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztBQUM5SCxDQUFDO0FBNUNELHdEQTRDQzs7Ozs7Ozs7OztBQ25FRCx3QkFBd0I7QUFFeEI7Ozs7Ozs7R0FPRztBQUNIO0lBQ0U7Ozs7Ozs7O09BUUc7SUFDSCxrQ0FDVSxxQkFBNkIsRUFDN0IscUJBQTZCLEVBQzdCLDJCQUFtRSxFQUNuRSw2QkFBeUUsRUFDekUsa0NBQTZFO1FBSjdFLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBUTtRQUM3QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQVE7UUFDN0IsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUF3QztRQUNuRSxrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQTRDO1FBQ3pFLHVDQUFrQyxHQUFsQyxrQ0FBa0MsQ0FBMkM7UUFFckYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBMkMsSUFBSSxDQUFDLHFCQUFxQixhQUFRLElBQUksQ0FBQyxxQkFBdUIsQ0FBQyxDQUFDO1FBQzdILENBQUM7SUFDSCxDQUFDO0lBRU0scURBQWtCLEdBQXpCLFVBQTBCLElBQVMsRUFBRSxVQUFlO1FBQ2xELHFGQUFxRjtRQUNyRixJQUFJLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ3RELEdBQUcsQ0FBQyxDQUE2QixVQUFnQyxFQUFoQyxTQUFJLENBQUMsMkJBQTJCLEVBQWhDLGNBQWdDLEVBQWhDLElBQWdDO1lBQTVELElBQU0sa0JBQWtCO1lBQzNCLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuRTtRQUVELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVNLHlEQUFzQixHQUE3QixVQUE4QixlQUFnQztRQUM1RCxrRUFBa0U7UUFDbEUsSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUErQixVQUFrQyxFQUFsQyxTQUFJLENBQUMsNkJBQTZCLEVBQWxDLGNBQWtDLEVBQWxDLElBQWtDO1lBQWhFLElBQU0sb0JBQW9CO1lBQzdCLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQztRQUVELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVNLHdEQUFxQixHQUE1QixVQUE2QixZQUEwQjtRQUNyRCxzRUFBc0U7UUFDdEUsSUFBSSxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxDQUErQixVQUF1QyxFQUF2QyxTQUFJLENBQUMsa0NBQWtDLEVBQXZDLGNBQXVDLEVBQXZDLElBQXVDO1lBQXJFLElBQU0sb0JBQW9CO1lBQzdCLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQztRQUVELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQztBQW5EWSw0REFBd0I7Ozs7Ozs7Ozs7QUNYckMsd0JBQXdCO0FBRXhCOzs7RUFHRTtBQUNGO0lBQUE7SUFlQSxDQUFDO0lBZFEscURBQWtCLEdBQXpCLFVBQTBCLElBQVMsRUFBRSxVQUFlO1FBQ2xELE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxJQUFjO1lBQ3BCLFVBQVUsRUFBRSxVQUErQjtTQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVNLHlEQUFzQixHQUE3QixVQUE4QixlQUFnQztRQUM1RCxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx3REFBcUIsR0FBNUIsVUFBNkIsWUFBMEI7UUFDckQsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDO0FBZlksNERBQXdCOzs7Ozs7Ozs7O0FDVHJDLG1DQUE2QjtBQUU3QiwyREFBd0U7QUFDeEUsNkNBT2tDO0FBR2xDLG1EQU02QjtBQUc3Qjs7Ozs7R0FLRztBQUNIO0lBT0U7Ozs7Ozs7OztPQVNHO0lBQ0gsNkJBQTJCLFVBQWtCLEVBQVUsV0FBb0IsRUFBVSxpQkFBMEI7UUFBcEYsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFTO1FBQzdHLG1DQUFtQztJQUNyQyxDQUFDO0lBRUQsb0NBQW9DO0lBRTdCLDRDQUFjLEdBQXJCO1FBQUEsaUJBT0M7UUFOQyx3RUFBd0U7UUFDeEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQU0sY0FBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsY0FBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFNLFlBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGNBQVksRUFBRSxJQUFJLENBQUMsRUFBbEUsQ0FBa0UsQ0FBQztRQUNyRyxDQUFDO0lBQ0gsQ0FBQztJQUVNLDJDQUFhLEdBQXBCO1FBQ0UsOENBQThDO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVNLHlEQUEyQixHQUFsQyxVQUFtQyxPQUEwRDtRQUMzRixJQUFJLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDO0lBQzFDLENBQUM7SUFFTSw4REFBZ0MsR0FBdkMsVUFBd0MsT0FBK0Q7UUFDckcsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE9BQU8sQ0FBQztJQUMvQyxDQUFDO0lBRU0sc0RBQXdCLEdBQS9CLFVBQWdDLE9BQXVEO1FBQ3JGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUM7SUFDdkMsQ0FBQztJQUVNLDJEQUE2QixHQUFwQyxVQUFxQyxPQUE0RDtRQUMvRixJQUFJLENBQUMsMEJBQTBCLEdBQUcsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFRCxzQ0FBc0M7SUFFL0IsMERBQTRCLEdBQW5DLFVBQW9DLFVBQXlCLEVBQUUsaUJBQWdDO1FBQzdGLElBQU0sT0FBTyxHQUFzQjtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNuQixPQUFPLEVBQUUsMEJBQVcsQ0FBQyxVQUFVO1lBQy9CLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxVQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLG1EQUFxQixHQUE1QixVQUE2QixNQUFjLEVBQUUsVUFBNkI7UUFDeEUsSUFBTSxPQUFPLEdBQW1CO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ25CLE9BQU8sRUFBRSwwQkFBVyxDQUFDLE9BQU87WUFDNUIsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLDJEQUE2QixHQUFwQyxVQUFxQyxXQUFtQixFQUFFLElBQXVCLEVBQUUsS0FBd0I7UUFDekcsSUFBTSxPQUFPLEdBQTJCO1lBQ3RDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ25CLE9BQU8sRUFBRSwwQkFBVyxDQUFDLGVBQWU7WUFDcEMsV0FBVyxFQUFFLFdBQVc7WUFDeEIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sd0RBQTBCLEdBQWpDLFVBQWtDLGNBQThCLEVBQUUsSUFBVztRQUMzRSxJQUFNLE9BQU8sR0FBd0I7WUFDbkMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDbkIsT0FBTyxFQUFFLDBCQUFXLENBQUMsWUFBWTtZQUNqQyxjQUFjLEVBQUUsY0FBYztZQUM5QixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyw0Q0FBYyxHQUF0QixVQUF1QixHQUFZO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSx3REFBd0QsQ0FBQztRQUNqRSxDQUFDO1FBRUQsSUFBTSxlQUFlLEdBQUcsSUFBSSxxREFBeUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyRyxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLCtDQUFpQixHQUF6QixVQUEwQixLQUFtQjtRQUUzQyxnRkFBZ0Y7UUFDaEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxxRkFBcUY7UUFDckYsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLDZCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxzR0FBc0c7UUFDdEcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSywwQkFBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLGlDQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO29CQUM5RCxNQUFNLENBQUM7Z0JBQ1QsQ0FBQztnQkFFRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsS0FBSyxDQUFDO1lBQ1IsQ0FBQztZQUNELEtBQUssMEJBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyw0Q0FBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7b0JBQzlFLE1BQU0sQ0FBQztnQkFDVCxDQUFDO2dCQUVELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxRCxLQUFLLENBQUM7WUFDUixDQUFDO1lBQ0QsS0FBSywwQkFBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDO2dCQUNULENBQUM7Z0JBRUQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xELEtBQUssQ0FBQztZQUNSLENBQUM7WUFDRCxLQUFLLDBCQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMseUNBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxNQUFNLENBQUM7Z0JBQ1QsQ0FBQztnQkFFRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkQsS0FBSyxDQUFDO1lBQ1IsQ0FBQztZQUNELFFBQVE7UUFFVixDQUFDO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQztBQW5MWSxrREFBbUI7Ozs7Ozs7Ozs7QUN6QmhDOzs7R0FHRztBQUNIO0lBQ0U7Ozs7O09BS0c7SUFDSCxtQ0FBMkIsUUFBaUIsRUFBVSxPQUFlLEVBQVUsT0FBZTtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFFOUYsQ0FBQztJQUVELHNCQUFXLGtEQUFXO2FBQXRCLGNBQW1DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRTNELHdDQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQztBQWpCWSw4REFBeUI7Ozs7Ozs7Ozs7QUNQdEMsbUNBQTZCO0FBRzdCLDZDQU9rQztBQUVsQywyQkFBMkI7QUFDM0IsbUJBQTBCLElBQW1CO0lBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBTSxPQUFPLEdBQUcsSUFBZSxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQU0sWUFBWSxHQUNoQixDQUFDLDBCQUFXLENBQUMsT0FBTyxFQUFFLDBCQUFXLENBQUMsZUFBZSxFQUFFLDBCQUFXLENBQUMsVUFBVSxFQUFFLDBCQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFdkcsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBMUJELDhCQTBCQztBQUVELG1CQUEwQixhQUFrQztJQUMxRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFNLENBQUMsR0FBRyxhQUE4QixDQUFDO0lBRXpDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUYsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQWhCRCw4QkFnQkM7QUFFRCx1QkFBOEIsT0FBZ0M7SUFDNUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBTSxXQUFXLEdBQUcsT0FBNEIsQ0FBQztJQUNqRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxLQUFLLDBCQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFuQkQsc0NBbUJDO0FBRUQsa0NBQXlDLE9BQXFDO0lBQzVFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQU0sU0FBUyxHQUFHLE9BQWlDLENBQUM7SUFDcEQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sS0FBSywwQkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFuQkQsNERBbUJDO0FBRUQsMEJBQWlDLE9BQTZCO0lBQzVELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQU0sY0FBYyxHQUFHLE9BQXlCLENBQUM7SUFDakQsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sS0FBSywwQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLElBQUksT0FBTyxjQUFjLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEYsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksT0FBTyxjQUFjLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQW5CRCw0Q0FtQkM7QUFFRCwrQkFBc0MsT0FBa0M7SUFDdEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBTSxtQkFBbUIsR0FBRyxPQUE4QixDQUFDO0lBQzNELEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sS0FBSywwQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsSUFBSSxPQUFPLG1CQUFtQixDQUFDLGNBQWMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFuQkQsc0RBbUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJRCxzQ0FBZ0M7QUFFaEM7SUFBK0IsNkJBQUs7SUFDbEMsbUJBQTJCLGNBQTZCO1FBQXhELFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBRXRCO1FBSDBCLG9CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRXRELGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDdEQsQ0FBQztJQUVELHNCQUFXLGlDQUFVO2FBQXJCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQU87YUFBbEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDSCxnQkFBQztBQUFELENBQUMsQ0FiOEIsYUFBSyxHQWFuQztBQWJZLDhCQUFTOzs7Ozs7Ozs7O0FDTHRCLHlEQUEwRDtBQUcxRCw0Q0FBOEM7QUFFOUM7O0dBRUc7QUFDSDtJQW1CRSw4REFBOEQ7SUFDOUQsdUJBQW9CLGFBQXFCO1FBQ3ZDLElBQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxlQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLElBQUksMkJBQVksQ0FBQyxzQ0FBVSxDQUFDLGFBQWEsRUFBRSw2QkFBMkIsYUFBZSxDQUFDLENBQUM7UUFDL0YsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUF0QkQsc0JBQWtCLHlCQUFRO1FBSDFCOztXQUVHO2FBQ0g7WUFDRSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVhLDhCQUFnQixHQUE5QixVQUErQixTQUFpQjtRQUM5QyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFrQkQsc0JBQVcseUNBQWM7YUFBekI7WUFDRSxNQUFNLENBQUksSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFJLENBQUMsS0FBSyxTQUFJLElBQUksQ0FBQyxHQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFDSCxvQkFBQztBQUFELENBQUM7QUFsQ1ksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjFCLHNDQUE0RDtBQUM1RCx3REFBcUg7QUFFckgsaURBQXFEO0FBQ3JELCtEQUFnRztBQUNoRyx1Q0FBaUM7QUFDakMsc0NBQStCO0FBQy9CLDJDQUF5QztBQUV6QywwQ0FBd0M7QUFDeEMsK0NBQWdEO0FBQ2hELCtDQUFnRDtBQUVoRCw0Q0FBcUQ7QUFFckQ7SUFBbUMsaUNBQVM7SUFJMUMsdUJBQTJCLEtBQTZCLEVBQVUsVUFBcUI7UUFBdkYsWUFDRSxrQkFBTSxJQUFJLDZCQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FDekc7UUFGMEIsV0FBSyxHQUFMLEtBQUssQ0FBd0I7UUFBVSxnQkFBVSxHQUFWLFVBQVUsQ0FBVzs7SUFFdkYsQ0FBQztJQUVELHNCQUFXLHFDQUFVO2FBQXJCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxrQ0FBTzthQUFsQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRU0sc0RBQThCLEdBQXJDLFVBQXNDLFNBQTZCO1FBQ2pFLDJCQUFZLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUE0QixDQUFDO1FBRXRELDhEQUE4RDtRQUM5RCxHQUFHLENBQUMsQ0FBZSxVQUFnQixFQUFoQixTQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBaEIsY0FBZ0IsRUFBaEIsSUFBZ0I7WUFBOUIsSUFBTSxJQUFJO1lBQ2IsSUFBSSxTQUFTLEdBQTBCLFNBQVMsQ0FBQztZQUVqRCxJQUFNLFFBQVEsR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLDhDQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQU0sU0FBUyxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RixJQUFNLEtBQUssR0FBYTtvQkFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNwQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO29CQUMxQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO29CQUN0QyxlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlO29CQUNoRCxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO2lCQUMzQyxDQUFDO2dCQUVGLElBQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUMsSUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUN6QyxTQUFTLEVBQ1QsK0RBQThCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDekUsU0FBUyxFQUNULFFBQVEsRUFDUixTQUFTLENBQ1YsQ0FBQztZQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxDQXhEa0MscUJBQVMsR0F3RDNDO0FBeERZLHNDQUFhOzs7Ozs7Ozs7O0FDYjFCOzs7R0FHRztBQUNIO0lBQ0UseUJBQ1UsVUFBOEIsRUFDOUIsS0FBbUMsRUFDbkMsU0FBeUIsRUFDekIsS0FBb0IsRUFDcEIsVUFBMEM7UUFKMUMsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBOEI7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFnQztJQUNoRCxDQUFDO0lBRUwsc0JBQVcsc0NBQVM7YUFBcEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGlDQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHFDQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpQ0FBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQ0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0gsc0JBQUM7QUFBRCxDQUFDO0FBNUJZLDBDQUFlOzs7Ozs7Ozs7O0FDSjVCO0lBQ0UsZUFBMkIsRUFBVSxFQUFVLEVBQVU7UUFBOUIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVE7SUFBSSxDQUFDO0lBRTlELHNCQUFXLG9CQUFDO2FBQVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG9CQUFDO2FBQVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUNILFlBQUM7QUFBRCxDQUFDO0FBVlksc0JBQUs7Ozs7Ozs7Ozs7QUNBbEI7SUFDRSxjQUEyQixPQUFlLEVBQVUsTUFBYztRQUF2QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFdkUsc0JBQVcsd0JBQU07YUFBakI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQVZZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQixzQ0FBZ0M7QUFHaEM7SUFBK0IsNkJBQUs7SUFDbEMsbUJBQTJCLGNBQTZCO1FBQXhELFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBSXRCO1FBTDBCLG9CQUFjLEdBQWQsY0FBYyxDQUFlO1FBR3RELDhGQUE4RjtRQUM5RixLQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksWUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDOztJQUNuRixDQUFDO0lBRUQsc0JBQVcsc0NBQWU7YUFBMUI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBZ0IsR0FBdkIsVUFDRSxTQUFpQixFQUFFLE1BQXFCLEVBQUUsVUFBcUMsRUFBRSxPQUErQjtRQUNoSCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU0seUNBQXFCLEdBQTVCLFVBQTZCLFNBQWlCLEVBQUUsYUFBMEM7UUFDeEYsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTSxvQ0FBZ0IsR0FBdkIsVUFBd0IsU0FBaUI7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHVDQUFtQixHQUExQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVNLG1DQUFlLEdBQXRCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLHlDQUFxQixHQUE1QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVNLDRDQUF3QixHQUEvQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVNLHVDQUFtQixHQUExQixVQUEyQixPQUF1QztRQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sMENBQXNCLEdBQTdCLFVBQThCLE9BQTBDO1FBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSwyQ0FBdUIsR0FBOUI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFTSx3Q0FBb0IsR0FBM0IsVUFBNEIsU0FBbUMsRUFBRSxVQUF3QztRQUN2RyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLDJDQUF1QixHQUE5QixVQUErQixVQUE2QyxFQUMxRSxtQkFBaUQ7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVNLHdDQUFvQixHQUEzQixVQUE0QixVQUFvQyxFQUM5RCxtQkFBaUQ7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQWxFOEIsYUFBSyxHQWtFbkM7QUFsRVksOEJBQVM7Ozs7Ozs7Ozs7QUNMdEIseURBQWtFO0FBR2xFO0lBQ0UsdUJBQ1UsS0FBYSxFQUNiLFVBQXFCLEVBQ3JCLFVBQWdCO1FBRmhCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQU07SUFDdEIsQ0FBQztJQUVMLHNCQUFXLCtCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG9DQUFTO2FBQXBCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxvQ0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsb0NBQVM7YUFBcEI7WUFDRSxNQUFNLENBQUM7Z0JBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNwQixXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxxQ0FBUyxDQUFDLFNBQVM7Z0JBQ25ELGlCQUFpQjthQUNsQixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFDSCxvQkFBQztBQUFELENBQUM7QUExQlksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDFCLHNDQUE0RDtBQUM1RCx3REFNMkM7QUFFM0MsMkNBQTJDO0FBRzNDLCtDQUFrRDtBQUNsRCwwQ0FBd0M7QUFFeEMsdURBQWtFO0FBRWxFLG9EQUFrRTtBQUNsRSxvREFBa0U7QUFLbEUsK0NBQXlFO0FBR3pFLCtDQUErRTtBQUMvRSw0Q0FBcUQ7QUFFckQsSUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQVcsRUFBRSxDQUFXO0lBQzFELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLFNBQVM7UUFDM0IsQ0FBQyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsU0FBUztRQUMzQixDQUFDLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxVQUFVO1FBQzdCLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLFlBQVk7UUFDakMsQ0FBQyxDQUFDLGVBQWUsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDO0FBQzVDLENBQUMsQ0FBQztBQUVGO0lBQW1DLGlDQUFTO0lBQzFDLHVCQUFtQixhQUE0QixFQUNyQyxTQUFtQixFQUNuQixnQkFBb0M7UUFGOUMsWUFHRSxrQkFBTSxhQUFhLENBQUMsU0FDckI7UUFIUyxlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7O0lBRTlDLENBQUM7SUFFRCxzQkFBVywwQ0FBZTthQUExQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksd0NBQWdCLEdBQXZCLFVBQXdCLFNBQW9CO1FBQTVDLGlCQWtDQztRQWpDQyxJQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBc0IsQ0FBQztRQUNoRCxJQUFJLG1CQUF3QyxDQUFDO1FBRTdDLElBQUksQ0FBQztZQUNILG1CQUFtQixHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLDJDQUFnRCxDQUFDO1FBQy9HLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsd0RBQXdEO1lBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELDRFQUE0RTtRQUM1RSxJQUFNLFVBQVUsR0FBRyxJQUFJLCtDQUFzQixDQUFxQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsSCxtQkFBbUIsQ0FBQyxlQUFlLENBQUMseUNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLEtBQUs7WUFDN0UsSUFBTSxRQUFRLEdBQUcsS0FBaUIsQ0FBQztZQUNuQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxDQUFDLEVBQUUsVUFBQyxHQUFhO1lBQ2YsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFNLFdBQUksdUNBQWtCLENBQUMsU0FBUyxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQU0sV0FBVyxHQUFHLElBQUksK0NBQXNCLENBQXFCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMseUNBQWMsQ0FBQyxhQUFhLEVBQUUsVUFBQyxLQUFLO1lBQ3RFLElBQU0sbUJBQW1CLEdBQUcsS0FBb0IsQ0FBQztZQUNqRCxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEtBQUssbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM1RSxDQUFDLEVBQUUsVUFBQyxLQUFrQjtZQUNwQixXQUFXLENBQUMsWUFBWSxDQUFDLGNBQU0sV0FBSSx1Q0FBa0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7UUFDckYsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUIsMkJBQTJCO1FBRTNCLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHNCQUFXLG1DQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFTSx3Q0FBZ0IsR0FBdkIsVUFDRSxTQUFpQixFQUFFLE1BQXFCLEVBQUUsVUFBcUMsRUFBRSxPQUErQjtRQUNoSCwyQkFBWSxDQUFDLGVBQWUsQ0FBNEIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRS9GLElBQU0sT0FBTyxHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLCtCQUFvQyxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU0sNkNBQXFCLEdBQTVCLFVBQTZCLFNBQWlCLEVBQUUsYUFBMEM7UUFDeEYsMkJBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELDJCQUFZLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUU3RCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QiwyQkFBWSxDQUFDLGVBQWUsQ0FBNEIsYUFBYSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTiwyQkFBWSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFFRCxJQUFNLE9BQU8sR0FBRyxvQ0FBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSwrQkFBb0MsQ0FBQztRQUMzRixNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkIsVUFBd0IsU0FBaUI7UUFDdkMsMkJBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXJELElBQU0sT0FBTyxHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLCtCQUFvQyxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sMkNBQW1CLEdBQTFCO1FBQUEsaUJBc0JDO1FBckJDLElBQU0sT0FBTyxHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLCtDQUFtRCxDQUFDO1FBRTFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBNkIsZ0JBQU07WUFDdkYsSUFBTSxVQUFVLEdBQWUsTUFBb0IsQ0FBQztZQUNwRCxJQUFNLHVCQUF1QixHQUE0QixVQUFVLENBQUMsc0JBQXNCLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRHLElBQUksV0FBVyxHQUErQixFQUFFLENBQUM7WUFFakQsMkZBQTJGO1lBQzNGLElBQUksU0FBUyxHQUFXLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO1lBQ2xFLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5GLDhEQUE4RDtZQUM5RCxHQUFHLENBQUMsQ0FBb0IsVUFBZ0QsRUFBaEQsNEJBQXVCLENBQUMsd0JBQXdCLEVBQWhELGNBQWdELEVBQWhELElBQWdEO2dCQUFuRSxJQUFJLFdBQVc7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUM5QixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkYsQ0FBQzthQUNGO1lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNFLElBQU0sT0FBTyxHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLCtCQUFvQyxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sNkNBQXFCLEdBQTVCO1FBQ0UsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsa0NBQXNDLENBQUM7UUFDN0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLGdEQUF3QixHQUEvQjtRQUNFLElBQU0sT0FBTyxHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLGtDQUFzQyxDQUFDO1FBQzdGLE1BQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsT0FBdUM7UUFDaEUsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsa0NBQXNDLENBQUM7UUFDN0YsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFFeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FDbkMsSUFBSSxDQUFDLFFBQVEsRUFBRSw0QkFBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVNLDhDQUFzQixHQUE3QixVQUE4QixPQUEwQztRQUN0RSxJQUFNLE9BQU8sR0FBRyxvQ0FBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxrQ0FBc0MsQ0FBQztRQUM3RixPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUNuQyxJQUFJLENBQUMsUUFBUSxFQUNiLDRCQUFXLENBQUMsVUFBVSxFQUN0QixDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDdkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQ3pCLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQzNCLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLCtDQUF1QixHQUE5QjtRQUNFLElBQU0sT0FBTyxHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLHFDQUEwQyxDQUFDO1FBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSwrQ0FBdUIsR0FBOUIsVUFBK0IsVUFBNkMsRUFDMUUsbUJBQWlEO1FBQ2pELDJCQUFZLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCwyQkFBWSxDQUFDLGVBQWUsQ0FBK0IsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFOUcsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUscUNBQTBDLENBQUM7UUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0IsVUFBNEIsVUFBb0MsRUFDOUQsbUJBQWlEO1FBQ2pELDJCQUFZLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCwyQkFBWSxDQUFDLGVBQWUsQ0FBK0IsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFOUcsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUscUNBQTBDLENBQUM7UUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTyxnREFBd0IsR0FBaEMsVUFBaUMsY0FBOEI7UUFDN0QsSUFBTSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELElBQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRCxjQUFjLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLENBaExrQyxxQkFBUyxHQWdMM0M7QUFoTFksc0NBQWE7Ozs7Ozs7Ozs7QUNuQzFCOzs7R0FHRztBQUNIO0lBQ0UsMkJBQTJCLGVBQTZDO1FBQTdDLG9CQUFlLEdBQWYsZUFBZSxDQUE4QjtJQUFJLENBQUM7SUFFN0Usc0JBQVcsbUNBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGlDQUFFO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3Q0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG1DQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFDSCx3QkFBQztBQUFELENBQUM7QUFsQlksOENBQWlCOzs7Ozs7Ozs7O0FDSjlCOzs7R0FHRztBQUNIO0lBQ0Usc0JBQTJCLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7SUFBSSxDQUFDO0lBRXJELHNCQUFXLDhCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0QkFBRTthQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0NBQVk7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxtQ0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNILG1CQUFDO0FBQUQsQ0FBQztBQWxCWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQekIsc0NBQTREO0FBRTVELDRDQUErQztBQUMvQyxzREFBZ0U7QUFFaEU7SUFBd0Msc0NBQXFCO0lBQzNELDRCQUFtQixTQUE2QixFQUFVLFVBQWtCO1FBQTVFLFlBQ0Usa0JBQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsU0FDMUQ7UUFGeUQsZ0JBQVUsR0FBVixVQUFVLENBQVE7O0lBRTVFLENBQUM7SUFFRCxzQkFBVyx5Q0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRU0sMkNBQWMsR0FBckI7UUFBQSxpQkFhQztRQVpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBa0IsaUJBQU87WUFDcEUsMEVBQTBFO1lBQzFFLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLElBQUssUUFBQyxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO1lBRXZGLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDbkIseUVBQXlFO2dCQUN6RSw4QkFBOEI7Z0JBQzlCLE1BQU0sSUFBSSwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHlCQUF1QixLQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7WUFDdEcsQ0FBQztZQUVELE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLENBdkJ1Qyw2Q0FBcUIsR0F1QjVEO0FBdkJZLGdEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNML0Isc0NBQTREO0FBRTVELHNEQUFnRTtBQUVoRTtJQUF3QyxzQ0FBcUI7SUFDM0QsNEJBQW1CLFNBQTZCO2VBQzlDLGtCQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUVNLDBDQUFhLEdBQXBCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLENBUnVDLDZDQUFxQixHQVE1RDtBQVJZLGdEQUFrQjs7Ozs7Ozs7OztBQ0gvQix3REFJMkM7QUFFM0Msc0RBQThEO0FBRTlELHFHQUFxRztBQUNyRyxrQkFBa0IsVUFBa0I7SUFDbEMsSUFBSSxDQUFDO1FBQ0gsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxDQUFDO0lBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0FBQ0gsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILCtCQUNFLFVBQWtCLEVBQUUsdUJBQStDO0lBR25FLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBd0MsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUV4RSxJQUFJLE1BQWMsQ0FBQztRQUVuQix1RUFBdUU7UUFDdkUsaUZBQWlGO1FBQ2pGLDBGQUEwRjtRQUMxRixFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1FBQzdHLENBQUM7UUFFRCx5RkFBeUY7UUFDekYsOEZBQThGO1FBQzlGLHVGQUF1RjtRQUN2RixJQUFNLFNBQVMsR0FBRyxJQUFJLDhDQUFtQixDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbkUsZ0VBQWdFO1FBQ2hFLElBQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDLDRCQUE0QixDQUFDLHVCQUF1QixFQUFFLDRDQUFtQixDQUFDLENBQUM7UUFFbkgsMEdBQTBHO1FBQzFHLGdFQUFnRTtRQUNoRSxTQUFTLENBQUMsZ0NBQWdDLENBQUMsVUFBVSxHQUEyQjtZQUU5RSwrREFBK0Q7WUFDL0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsS0FBSyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUUxRCwrR0FBK0c7Z0JBQy9HLCtDQUErQztnQkFDL0MsSUFBTSxpQkFBaUIsR0FBRyxjQUFNLFdBQUksMkNBQW9CLENBQUMsU0FBUyxDQUFDLEVBQW5DLENBQW1DLENBQUM7Z0JBQ3BFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzdCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILHVGQUF1RjtRQUN2RixTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBL0NELHNEQStDQzs7Ozs7Ozs7OztBQzlERDs7OztHQUlHO0FBQ0g7SUFVRTs7O09BR0c7SUFDSCw4QkFBMkIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQVpoRCx5SEFBeUg7UUFDekgsb0RBQW9EO1FBQzVDLHFCQUFnQixHQUN3RixFQUFFLENBQUM7UUFFbkgsMEZBQTBGO1FBQ2xGLDBCQUFxQixHQUErQixFQUFFLENBQUM7UUFPN0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLDBCQUEwQixDQUFDO1FBQ25DLENBQUM7UUFFRCwrRkFBK0Y7UUFDL0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxpREFBaUQ7SUFFMUMsc0NBQU8sR0FBZCxVQUFlLElBQVksRUFBRSxVQUE2QjtRQUExRCxpQkFhQztRQVpDLG1GQUFtRjtRQUNuRixJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNoRixJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBa0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUUzRCwyRkFBMkY7WUFDM0Ysa0VBQWtFO1lBQ2xFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUM1RixDQUFDLENBQUMsQ0FBQztRQUVILG1EQUFtRDtRQUNuRCxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sMERBQTJCLEdBQWxDLFVBQW1DLE9BQTRCO1FBQzdELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDREQUE2QixHQUFwQyxVQUFxQyxPQUE0QjtRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxLQUFLLE9BQU8sRUFBYixDQUFhLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsK0NBQStDO0lBRXZDLGdEQUFpQixHQUF6QixVQUEwQixRQUFnQztRQUN4RCwyRUFBMkU7UUFDM0UsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLENBQUMsMkRBQTJEO1FBQ3JFLENBQUM7UUFFRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5FLGtEQUFrRDtRQUNsRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsK0NBQStDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVELHVDQUF1QztRQUN2QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLDZDQUFjLEdBQXRCLFVBQXVCLG1CQUF3QztRQUM3RCxtR0FBbUc7UUFDbkcsR0FBRyxDQUFDLENBQWtCLFVBQTBCLEVBQTFCLFNBQUksQ0FBQyxxQkFBcUIsRUFBMUIsY0FBMEIsRUFBMUIsSUFBMEI7WUFBM0MsSUFBTSxPQUFPO1lBQ2hCLElBQUksQ0FBQztnQkFDSCxPQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2xHLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLDJGQUEyRjtZQUM3RixDQUFDO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDO0FBbkZZLG9EQUFvQjs7Ozs7Ozs7OztBQ2JqQyx1REFBcUU7QUFDckUsbURBQTZEO0FBQzdELG9EQUErRDtBQUMvRCx5REFBeUU7QUFDekUsdURBQXFFO0FBQ3JFLHNEQUFtRTtBQUNuRSwrQ0FBdUQ7QUFFdkQsbUNBQTBDLFVBQWlDO0lBQ3pFLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSw2Q0FBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25GLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSx1Q0FBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxxQ0FBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9FLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxpREFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSw2Q0FBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25GLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSwyQ0FBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFQRCw4REFPQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkQseURBQWdFO0FBRWhFLHdEQVMyQztBQUUzQyxnREFBb0Q7QUFLcEQsNENBQWtEO0FBS2xELHNDQUFvQztBQUNwQywwQ0FBaUQ7QUFFakQsMkNBQThDO0FBQzlDLCtDQUEyRDtBQUUzRDtJQUEyQyx5Q0FBZTtJQUExRDs7SUFvRkEsQ0FBQztJQW5GQyxzQkFBVyw4Q0FBVzthQUF0QjtZQUNFLE1BQU0sK0NBQWdDO1FBQ3hDLENBQUM7OztPQUFBO0lBRU0sNENBQVksR0FBbkIsVUFBb0IsWUFBb0I7UUFDdEMsSUFBTSxVQUFVO1lBQ2QsR0FBQyxzQ0FBVyxDQUFDLFlBQVksSUFBRyxZQUFZO1lBQ3hDLEdBQUMsc0NBQVcsQ0FBQyxXQUFXLElBQUcsQ0FBQztZQUM1QixHQUFDLHNDQUFXLENBQUMsZUFBZSxJQUFHLElBQUk7ZUFDcEMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFNLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFPLGtCQUFRO1lBQzNFLE1BQU0sQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFTSxvREFBb0IsR0FBM0IsVUFBNEIsWUFBb0I7UUFDOUMsSUFBTSxjQUFjLGFBQXdCLEdBQUMsc0NBQVcsQ0FBQyxZQUFZLElBQUcsWUFBWSxLQUFFLENBQUM7UUFFdkYsNERBQTREO1FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFNLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBbUIsc0JBQVk7WUFDN0YsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLE1BQW9CLENBQUM7WUFFckQsNkZBQTZGO1lBQzdGLGtHQUFrRztZQUNsRyw4R0FBOEc7WUFDOUcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxJQUFJLDJCQUFZLENBQUMsc0NBQVUsQ0FBQyxrQ0FBa0MsRUFDbEUsMkNBQXlDLFlBQWMsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBRU0sbURBQW1CLEdBQTFCLFVBQTJCLFFBQWtCO1FBQzNDLElBQU0sVUFBVSxhQUF3QixHQUFDLHNDQUFXLENBQUMsUUFBUSxJQUFHLFFBQVEsS0FBRSxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFNLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBYSxrQkFBUTtZQUM5RSxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBb0IsQ0FBQztZQUNqRCxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFTSwyREFBMkIsR0FBbEMsVUFBbUMsWUFBb0I7UUFDckQsSUFBTSxNQUFNLGFBQXdCLEdBQUMsc0NBQVcsQ0FBQyxZQUFZLElBQUcsWUFBWSxLQUFFLENBQUM7UUFFL0UsNERBQTREO1FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFNLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFpQyxrQkFBUTtZQUNqSCxJQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxNQUF3QyxDQUFDO1lBQy9FLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBRU0sNkNBQWEsR0FBcEIsVUFBcUIsT0FBZTtRQUFwQyxpQkFlQztRQWRDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxJQUFJLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFNLElBQUksR0FBRyxpQ0FBTSxDQUFDLGFBQWEsQ0FBQztRQUNsQyxJQUFJLFVBQVUsR0FBc0IsRUFBRSxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFpQixrQkFBUTtZQUNqRSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBcUMsQ0FBQztZQUNoRSxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQU0sRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw0Q0FBWSxHQUFwQixVQUFxQixLQUE2QixFQUFFLFVBQStCO1FBQ2pGLE1BQU0sQ0FBQyxJQUFJLGFBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLGlEQUFpQixHQUF6QixVQUEwQixVQUF1QztRQUMvRCxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLElBQUksK0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyw0Q0FBWSxHQUFwQixVQUFxQixPQUFlO1FBQ2xDLDJHQUEyRztRQUMzRyxpRkFBaUY7UUFDakYsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLENBcEYwQyxpQ0FBZSxHQW9GekQ7QUFwRlksc0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCbEMsc0NBQStEO0FBRy9ELHdEQU0yQztBQUUzQyxnRUFBNEg7QUFDNUgsK0RBQTRIO0FBRTVILDhDQU1tQztBQUVuQyxnREFBb0Q7QUFLcEQsOENBQXVEO0FBQ3ZELHNDQUEwQztBQUUxQztJQUF1QyxxQ0FBZTtJQUF0RDs7SUEyTkEsQ0FBQztJQTFOQyxzQkFBVywwQ0FBVzthQUF0QjtZQUNFLE1BQU0sK0JBQXFCO1FBQzdCLENBQUM7OztPQUFBO0lBRU0sNENBQWdCLEdBQXZCLFVBQ0UsUUFBa0IsRUFDbEIsU0FBaUIsRUFDakIsTUFBcUIsRUFDckIsVUFBcUMsRUFDckMsYUFBcUM7UUFDckMsSUFBTSxJQUFJLEdBQUcsaUNBQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUMzQyxJQUFNLFVBQVUsR0FBc0IsRUFBRSxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUM1QyxVQUFVLENBQUMsc0NBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDOUMsVUFBVSxDQUFDLHNDQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzlDLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsK0RBQXFCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RHLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLGFBQWEsQ0FBQztZQUNuQyxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLGFBQWEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBRW5ILE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQVMsa0JBQVE7WUFDekQsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxpREFBcUIsR0FBNUIsVUFBNkIsUUFBa0IsRUFBRSxTQUFpQixFQUFFLGFBQTBDO1FBQzVHLElBQU0sSUFBSSxHQUFHLGlDQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDckMsSUFBTSxVQUFVLEdBQXNCLEVBQUUsQ0FBQztRQUV6Qyw2REFBNkQ7UUFDN0QsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsVUFBVSxDQUFDLHNDQUFXLENBQUMscUJBQXFCLENBQUMsR0FBRywrREFBcUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0SCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxHQUFHLFNBQWlCLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsR0FBRyxHQUFHLGFBQUssQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLHNDQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQy9DLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxHQUFHLFNBQWlCLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsR0FBRyxHQUFHLGFBQUssQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLHNDQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQy9DLENBQUM7UUFDSCxDQUFDO1FBRUQsVUFBVSxDQUFDLHNDQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQzlDLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUU1QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFTLGtCQUFRO1lBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQWdCLEdBQXZCLFVBQXdCLFFBQWtCLEVBQUUsU0FBaUI7UUFDM0QsSUFBTSxJQUFJLEdBQUcsaUNBQU0sQ0FBQyxXQUFXLENBQUM7UUFDaEMsSUFBSSxVQUFVLEdBQXNCLEVBQUUsQ0FBQztRQUN2QyxVQUFVLENBQUMsc0NBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDNUMsVUFBVSxDQUFDLHNDQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQVMsa0JBQVE7WUFDekQsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixRQUFrQjtRQUF6QyxpQkFRQztRQVBDLElBQU0sSUFBSSxHQUFHLGlDQUFNLENBQUMsVUFBVSxDQUFDO1FBQy9CLElBQUksVUFBVSxHQUFzQixFQUFFLENBQUM7UUFDdkMsVUFBVSxDQUFDLHNDQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQXlCLGtCQUFRO1lBQ3pFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUF3QyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0scURBQXlCLEdBQWhDLFVBQ0UsYUFBcUIsRUFDckIsT0FBZSxFQUNmLFVBQXFDO1FBSHZDLGlCQWdCQztRQVpDLElBQU0sSUFBSSxHQUFHLGlDQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekMsSUFBSSxVQUFVLEdBQXNCLEVBQUUsQ0FBQztRQUN2QyxVQUFVLENBQUMsc0NBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRztZQUNqQyxTQUFTLEVBQUUsYUFBYTtTQUN6QixDQUFDO1FBRUYsVUFBVSxDQUFDLHNDQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzFDLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLCtEQUFxQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUE2QixrQkFBUTtZQUM3RSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBNEMsQ0FBQztZQUNuRSxNQUFNLENBQUMsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwrQ0FBbUIsR0FBMUIsVUFBMkIsYUFBcUIsRUFBRSxPQUFlLEVBQUUsVUFBcUM7UUFBeEcsaUJBY0M7UUFiQyxJQUFNLElBQUksR0FBRyxpQ0FBTSxDQUFDLGNBQWMsQ0FBQztRQUNuQyxJQUFJLFVBQVUsR0FBc0IsRUFBRSxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQ2pDLFNBQVMsRUFBRSxhQUFhO1NBQ3pCLENBQUM7UUFFRixVQUFVLENBQUMsc0NBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDMUMsVUFBVSxDQUFDLHNDQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsK0RBQXFCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQXVCLGtCQUFRO1lBQ3ZFLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFzQyxDQUFDO1lBRTdELE1BQU0sQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQjtJQUNULGdEQUFvQixHQUE1QixVQUE2QixhQUE2QztRQUExRSxpQkF3Q0M7UUF2Q0MsSUFBSSxPQUFPLEdBQTJCLEVBQUUsQ0FBQztRQUN6QyxhQUFhLENBQUMsT0FBTyxDQUFDLHNCQUFZO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLHFDQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzVCLElBQUksTUFBTSxHQUFHLFlBQWtELENBQUM7b0JBQ2hFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDdEQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7b0JBQ2hELENBQUM7b0JBQ0QsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBRUQsS0FBSyxxQ0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN0QixJQUFJLE1BQU0sR0FBRyxZQUE0QyxDQUFDO29CQUMxRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUMxQyxDQUFDO29CQUNELEtBQUssQ0FBQztnQkFDUixDQUFDO2dCQUVELEtBQUsscUNBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxNQUFNLEdBQUcsWUFBbUQsQ0FBQztvQkFDakUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztvQkFDbEQsQ0FBQztvQkFDRCxLQUFLLENBQUM7Z0JBQ1IsQ0FBQztnQkFFRCxTQUFTLENBQUM7b0JBQ1IsS0FBSyxDQUFDO2dCQUNSLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxvREFBd0IsR0FBaEMsVUFBaUMsWUFBZ0Q7UUFDL0UsSUFBSSxhQUFhLEdBQThCLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQUU7WUFDdkUsTUFBTSxDQUFDLElBQUkseUJBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLGdDQUFpQixDQUMxQixZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFDL0IsWUFBWSxDQUFDLFlBQVksRUFDekIsWUFBWSxDQUFDLFNBQVMsRUFDdEIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQy9CLGFBQWEsRUFDYixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLDhDQUFrQixHQUExQixVQUEyQixZQUEwQztRQUNuRSxJQUFJLFFBQVEsR0FBYyxJQUFJLHlCQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRyxJQUFJLFFBQVEsR0FBYyxJQUFJLHlCQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRyxNQUFNLENBQUMsSUFBSSwwQkFBVyxDQUNwQixZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFDL0IsWUFBWSxDQUFDLFlBQVksRUFDekIsWUFBWSxDQUFDLFNBQVMsRUFDdEIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQ3pCLFFBQVEsRUFDUixRQUFRLEVBQ1IsWUFBWSxDQUFDLGlCQUFpQixDQUMvQixDQUFDO0lBQ0osQ0FBQztJQUVPLHFEQUF5QixHQUFqQyxVQUFrQyxZQUFpRDtRQUNqRixJQUFJLGVBQWUsR0FBYyxJQUFJLHlCQUFTLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0SCxNQUFNLENBQUMsSUFBSSxpQ0FBa0IsQ0FDM0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQy9CLFlBQVksQ0FBQyxZQUFZLEVBQ3pCLFlBQVksQ0FBQyxTQUFTLEVBQ3RCLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUNoQyxlQUFlLEVBQ2YsK0RBQXFCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQ3JFLCtEQUFxQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUNuRSxZQUFZLENBQUMsTUFBTSxDQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVPLG9EQUF3QixHQUFoQyxVQUNFLE1BQTBDLEVBQzFDLFVBQXFDO1FBQ3JDLElBQUksTUFBTSxHQUFxQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQVE7WUFDeEQsTUFBTSxDQUFDLElBQUkseUJBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLGdDQUFpQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU8sOENBQWtCLEdBQTFCLFVBQTJCLE1BQW9DLEVBQUUsVUFBcUM7UUFDcEcsSUFBSSxHQUFHLEdBQWMsSUFBSSx5QkFBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEYsSUFBSSxHQUFHLEdBQWMsSUFBSSx5QkFBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEYsTUFBTSxDQUFDLElBQUksMEJBQVcsQ0FDcEIsR0FBRyxFQUNILEdBQUcsRUFDSCxVQUFVLENBQ1gsQ0FBQztJQUNKLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQ0EzTnNDLGlDQUFlLEdBMk5yRDtBQTNOWSw4Q0FBaUI7Ozs7Ozs7Ozs7QUM5QjlCLHlEQUl5QztBQUN6Qyx3REFJMkM7QUFFM0MsOENBQXVEO0FBRXZELHdGQUF3RjtBQUN4Rjs7O0dBR0c7QUFDSDtJQUFBO0lBa0JBLENBQUM7SUFqQmUsK0NBQWdCLEdBQUcsSUFBSSw2QkFBYTtRQUNoRCxHQUFDLDRDQUFrQixDQUFDLFFBQVEsSUFBRywyQ0FBa0IsQ0FBQyxRQUFRO1FBQzFELEdBQUMsNENBQWtCLENBQUMsUUFBUSxJQUFHLDJDQUFrQixDQUFDLFFBQVE7WUFDMUQsQ0FBQztJQUVXLDBDQUFXLEdBQUcsSUFBSSw2QkFBYTtRQUMzQyxHQUFDLDRDQUFrQixDQUFDLFNBQVMsSUFBRywyQ0FBa0IsQ0FBQyxTQUFTO1FBQzVELEdBQUMsNENBQWtCLENBQUMsYUFBYSxJQUFHLDJDQUFrQixDQUFDLGFBQWE7UUFDcEUsR0FBQyw0Q0FBa0IsQ0FBQyxVQUFVLElBQUcsMkNBQWtCLENBQUMsVUFBVTtZQUM5RCxDQUFDO0lBRVcsK0NBQWdCLEdBQUcsSUFBSSw2QkFBYTtRQUNoRCxHQUFDLDRDQUF3QixDQUFDLEdBQUcsSUFBRywyQ0FBd0IsQ0FBQyxHQUFHO1FBQzVELEdBQUMsNENBQXdCLENBQUMsR0FBRyxJQUFHLDJDQUF3QixDQUFDLEdBQUc7UUFDNUQsR0FBQyw0Q0FBd0IsQ0FBQyxNQUFNLElBQUcsMkNBQXdCLENBQUMsTUFBTTtRQUNsRSxHQUFDLDRDQUF3QixDQUFDLE9BQU8sSUFBRywyQ0FBd0IsQ0FBQyxPQUFPO1lBQ3BFLENBQUM7SUFDTCxxQ0FBQztDQUFBO0FBbEJZLHdFQUE4Qjs7QUFtQjNDLDJCQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzNCLHNDQUE0RDtBQUc1RCwrQ0FBK0U7QUFDL0UsNENBQXFEO0FBR3JEO0lBQ0UsZ0JBQ1ksY0FBc0IsRUFDdEIsVUFBa0IsRUFDbEIsV0FBZ0MsRUFDaEMsUUFBZ0I7UUFIaEIsbUJBQWMsR0FBZCxjQUFjLENBQVE7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUM1QixDQUFDO0lBRUQsc0JBQVcsaUNBQWE7YUFBeEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFTO2FBQXBCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBTzthQUFsQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQVU7YUFBckI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVNLDhCQUFhLEdBQXBCO1FBQ0UsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsK0NBQW1ELENBQUM7UUFDMUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQztBQTVCWSx3QkFBTTtBQThCbkI7SUFBdUMscUNBQU07SUFDM0MsMkJBQ0UsYUFBcUIsRUFDckIsU0FBaUIsRUFDakIsT0FBZSxFQUNmLFVBQStCLEVBQ3ZCLGNBQXlDLEVBQ3pDLGNBQXVCO1FBTmpDLFlBT0Usa0JBQU0sYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQ3JEO1FBSFMsb0JBQWMsR0FBZCxjQUFjLENBQTJCO1FBQ3pDLG9CQUFjLEdBQWQsY0FBYyxDQUFTOztJQUVqQyxDQUFDO0lBRUQsc0JBQVcsNENBQWE7YUFBeEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDRDQUFhO2FBQXhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFTSwwQ0FBYyxHQUFyQixVQUFzQixVQUFzQztRQUMxRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDbEQsQ0FBQztRQUVELDJCQUFZLENBQUMsZUFBZSxDQUE0QixVQUFVLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFL0YsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsK0JBQW9DLENBQUM7UUFDM0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxDQTdCc0MsTUFBTSxHQTZCNUM7QUE3QlksOENBQWlCO0FBK0I5QjtJQUFpQywrQkFBTTtJQUNyQyxxQkFDRSxhQUFxQixFQUNyQixTQUFpQixFQUNqQixPQUFlLEVBQ2YsVUFBK0IsRUFDdkIsSUFBd0IsRUFDeEIsSUFBd0IsRUFDeEIsa0JBQTJCO1FBUHJDLFlBUUUsa0JBQU0sYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQ3JEO1FBSlMsVUFBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsVUFBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFTOztJQUVyQyxDQUFDO0lBRUQsc0JBQVcsaUNBQVE7YUFBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGlDQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywwQ0FBaUI7YUFBNUI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRU0sb0NBQWMsR0FBckIsVUFBc0IsVUFBc0M7UUFDMUQsSUFBTSxPQUFPLEdBQUcsb0NBQWtCLENBQUMsUUFBUSxDQUFDLFVBQVUsK0JBQW9DLENBQUM7UUFDM0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ2xELENBQUM7UUFFRCwyQkFBWSxDQUFDLGVBQWUsQ0FBNEIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRS9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQ0FsQ2dDLE1BQU0sR0FrQ3RDO0FBbENZLGtDQUFXO0FBb0N4QjtJQUF3QyxzQ0FBTTtJQUM1Qyw0QkFDRSxhQUFxQixFQUNyQixTQUFpQixFQUNqQixPQUFlLEVBQ2YsVUFBK0IsRUFDdkIsV0FBK0IsRUFDL0IsV0FBZ0MsRUFDaEMsVUFBa0MsRUFDbEMsT0FBZTtRQVJ6QixZQVNFLGtCQUFNLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUNyRDtRQUxTLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixpQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDaEMsZ0JBQVUsR0FBVixVQUFVLENBQXdCO1FBQ2xDLGFBQU8sR0FBUCxPQUFPLENBQVE7O0lBRXpCLENBQUM7SUFFRCxzQkFBVywwQ0FBVTthQUFyQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMENBQVU7YUFBckI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlDQUFTO2FBQXBCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQ0FBTTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0gseUJBQUM7QUFBRCxDQUFDLENBNUJ1QyxNQUFNLEdBNEI3QztBQTVCWSxnREFBa0I7QUE4Qi9CO0lBQ0UsMkJBQ1UsT0FBa0MsRUFDbEMsV0FBc0M7UUFEdEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQTJCO0lBQ2hELENBQUM7SUFFRCxzQkFBVyxxQ0FBTTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsbUNBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0gsd0JBQUM7QUFBRCxDQUFDO0FBYlksOENBQWlCO0FBZTlCO0lBQ0UscUJBQ1UsSUFBd0IsRUFDeEIsSUFBd0IsRUFDeEIsV0FBc0M7UUFGdEMsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQTJCO0lBQ2hELENBQUM7SUFFRCxzQkFBVyw2QkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0QkFBRzthQUFkO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0QkFBRzthQUFkO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFDSCxrQkFBQztBQUFELENBQUM7QUFsQlksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEp4Qix3REFTMkM7QUFFM0MsZ0RBQW9EO0FBRXBELDhDQUFvRjtBQUNwRiwrQ0FBZ0U7QUFHaEU7SUFBd0Msc0NBQWU7SUFBdkQ7O0lBMkdBLENBQUM7SUExR0Msc0JBQVcsMkNBQVc7YUFBdEI7WUFDRSxNQUFNLGtDQUFzQjtRQUM5QixDQUFDOzs7T0FBQTtJQUVNLDJDQUFjLEdBQXJCO1FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyw4Q0FBaUIsR0FBekIsVUFBMEIsYUFBcUI7UUFDN0MsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDOUYsQ0FBQztJQUVNLG1EQUFzQixHQUE3QixVQUNFLFFBQWtCLEVBQ2xCLE9BQW9CLEVBQ3BCLGFBQXNCLEVBQ3RCLGVBQXdCLEVBQ3hCLGlCQUEwQixFQUMxQixPQUFlO1FBTmpCLGlCQXFCQztRQWRDLCtCQUErQjtRQUMvQixJQUFNLElBQUksR0FBRyxPQUFPLEtBQUssNEJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlDQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGlDQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDcEcsSUFBTSxjQUFjLEdBQUcsSUFBSSxLQUFLLGlDQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3JHLElBQU0sVUFBVSxHQUFzQixFQUFFLENBQUM7UUFDekMsVUFBVSxDQUFDLHNDQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUN0RCxVQUFVLENBQUMsc0NBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxlQUFlLENBQUM7UUFDMUQsVUFBVSxDQUFDLHNDQUFXLENBQUMsaUJBQWlCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztRQUM5RCxVQUFVLENBQUMsc0NBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxjQUFjLENBQUM7UUFFakQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBWSxrQkFBUTtZQUM1RCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBNkIsQ0FBQztZQUM1RCxNQUFNLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGtEQUFxQixHQUE1QixVQUE2QixRQUFrQjtRQUEvQyxpQkFRQztRQVBDLElBQU0sVUFBVSxhQUF3QixHQUFDLHNDQUFXLENBQUMsUUFBUSxJQUFHLFFBQVEsS0FBRSxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUEyQixrQkFBUTtZQUM5RixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBNEIsQ0FBQztZQUMzRCxNQUFNLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFyQyxDQUFxQyxDQUFDO2FBQzVFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBRU0scURBQXdCLEdBQS9CLFVBQWdDLFFBQWtCO1FBQWxELGlCQVFDO1FBUEMsSUFBTSxVQUFVLGFBQXdCLEdBQUMsc0NBQVcsQ0FBQyxRQUFRLElBQUcsUUFBUSxLQUFFLENBQUM7UUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQU0sQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQTJCLGtCQUFRO1lBQ2pHLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUErQixDQUFDO1lBQzlELE1BQU0sQ0FBQztnQkFDTCxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQXJDLENBQXFDLENBQUM7YUFDNUUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFTSxtREFBc0IsR0FBN0IsVUFDRSxZQUFvQixFQUNwQixhQUFzQixFQUN0QixPQUFlLEVBQ2YsZ0JBQStCO1FBSmpDLGlCQWdCQztRQVhDLElBQU0sVUFBVTtZQUNkLEdBQUMsc0NBQVcsQ0FBQyxZQUFZLElBQUcsWUFBWTtZQUN4QyxHQUFDLHNDQUFXLENBQUMsYUFBYSxJQUFHLGFBQWE7WUFDMUMsR0FBQyxzQ0FBVyxDQUFDLE9BQU8sSUFBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1lBQ3RELEdBQUMsc0NBQVcsQ0FBQyxnQkFBZ0IsSUFBRyxnQkFBZ0I7ZUFDakQsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFNLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFZLGtCQUFRO1lBQ2hGLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUE2QixDQUFDO1lBQzVELE1BQU0sQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBRVMsZ0RBQW1CLEdBQTdCLFVBQThCLFlBQXVDLEVBQUUsU0FBa0I7UUFDdkYsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFdBQUksc0JBQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUNyRSxDQUFDLENBQUMsUUFBUSxFQUNWLENBQUMsQ0FBQyxZQUFZLEVBQ2QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUhvQyxDQUdwQyxDQUFDLENBQUM7UUFFWixzR0FBc0c7UUFDdEcsSUFBSSxLQUFLLENBQUM7UUFDVixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFdBQUksd0JBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUNyRCxDQUFDLENBQUMsS0FBSyxFQUNQLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFGd0IsQ0FFeEIsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFFRCxpR0FBaUc7UUFDakcsMERBQTBEO1FBQzFELElBQU0sc0JBQXNCLEdBQUcsU0FBUyxLQUFLLEtBQUssSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xILEVBQUUsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUMzQixZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQUc7WUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSTtnQkFDakIsTUFBTSxDQUFDLElBQUkseUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxJQUFJLHlCQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUkseUJBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxDQTNHdUMsaUNBQWUsR0EyR3REO0FBM0dZLGdEQUFrQjs7Ozs7Ozs7OztBQ2IvQjtJQUNFLHNCQUNVLFNBQWdELEVBQ2hELFdBQStDO1FBRC9DLGNBQVMsR0FBVCxTQUFTLENBQXVDO1FBQ2hELGdCQUFXLEdBQVgsV0FBVyxDQUFvQztRQUN2RCxlQUFlO0lBQ2pCLENBQUM7SUFFTSxxQ0FBYyxHQUFyQixVQUFzQixpQkFBd0I7UUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7QUFFRDtJQUdFLGlDQUEyQixVQUFpQztRQUFqQyxlQUFVLEdBQVYsVUFBVSxDQUF1QjtRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHNCQUFXLGdEQUFXO2FBQXRCO1lBQ0UsTUFBTSwyQ0FBMkI7UUFDbkMsQ0FBQzs7O09BQUE7SUFFTSxpREFBZSxHQUF0QixVQUF1QixFQUFrQixFQUFFLFFBQW1DLEVBQUUsT0FBK0I7UUFBL0csaUJBTUM7UUFMQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFnQixDQUFDO1FBQ2pFLElBQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxjQUFNLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQXpDLENBQXlDLENBQUM7SUFDekQsQ0FBQztJQUVPLGdFQUE4QixHQUF0QyxVQUF1QyxFQUFrQjtRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGdEQUFjLEdBQXRCLFVBQXVCLFlBQTBCO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEUsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVPLG9EQUFrQixHQUExQixVQUEyQixFQUFrQixFQUFFLFlBQTBCO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFHLElBQUksVUFBRyxLQUFLLFlBQVksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUM7QUF4Q1ksMERBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CcEMsc0NBQStEO0FBRS9ELHdEQU8yQztBQUUzQyxnREFBb0Q7QUFFcEQsK0NBQXlEO0FBQ3pELDJDQUE0QztBQUk1Qyw0Q0FBa0Q7QUFFbEQ7SUFBMkMseUNBQWU7SUFBMUQ7O0lBcUVBLENBQUM7SUFwRUMsc0JBQVcsOENBQVc7YUFBdEI7WUFDRSxNQUFNLHVDQUF5QjtRQUNqQyxDQUFDOzs7T0FBQTtJQUVNLDBEQUEwQixHQUFqQyxVQUFrQyxTQUFvQixFQUFFLEtBQXFCO1FBQzNFLElBQU0sVUFBVTtZQUNkLEdBQUMsc0NBQVcsQ0FBQyxTQUFTLElBQUcsU0FBUztlQUNuQyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQU0sQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQVE7WUFDekUseUJBQXlCO1lBRXpCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUE4QixDQUFDO1lBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUFhO2dCQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLDZCQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxJQUFJLHFCQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUVNLHlEQUF5QixHQUFoQyxVQUFpQyxTQUFpQixFQUFFLFFBQWdCO1FBQ2xFLElBQU0sVUFBVTtZQUNkLEdBQUMsc0NBQVcsQ0FBQyxrQkFBa0IsSUFBRyxTQUFTO1lBQzNDLEdBQUMsc0NBQVcsQ0FBQyxjQUFjLElBQUcsUUFBUTtlQUN2QyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQU0sQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQVE7WUFDeEUsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQXVCLENBQUM7WUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBRU0sd0RBQXdCLEdBQS9CLFVBQWdDLElBQVksRUFBRSxLQUFxQjtRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLG1FQUFtQyxHQUExQyxVQUEyQyxTQUFpQixFQUFFLEtBQXFCO1FBQ2pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sa0RBQWtCLEdBQTFCLFVBQ0UsS0FBcUIsRUFDckIsSUFBd0IsRUFDeEIsU0FBNkI7UUFDN0IsSUFBTSxVQUFVLEdBQXNCLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QixVQUFVLENBQUMsc0NBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsRCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sSUFBSSwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsc0RBQXNELENBQUMsQ0FBQztRQUN2SCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFRO1lBQ2pFLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxNQUFhO2dCQUM1QyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztZQUMvQixDQUFDLENBQUM7WUFFRixnRUFBZ0U7WUFDaEUsRUFBRSxDQUFDLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQXVCLENBQUM7Z0JBQ2hELElBQU0sSUFBSSxHQUFHLElBQUksNkJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLElBQUkscUJBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxDQXJFMEMsaUNBQWUsR0FxRXpEO0FBckVZLHNEQUFxQjs7Ozs7Ozs7OztBQ3BCbEMsc0NBQTREO0FBQzVELHdEQUFrRjtBQUVsRiwrREFBZ0c7QUFDaEcsdURBQXdFO0FBQ3hFLDhDQUFvRDtBQUdwRCwrQ0FBK0U7QUFFL0UsdURBQWtFO0FBRWxFLDRDQUFxRDtBQUNyRCxzQ0FBdUM7QUFFdkM7SUFLRSx1QkFBbUIsYUFBNEI7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQkFBVywrQkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUNBQVk7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSx5QkFBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLG1DQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLCtEQUE4QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFFO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMENBQWU7YUFBMUI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRU0sd0NBQWdCLEdBQXZCLFVBQXdCLFFBQTBDO1FBQWxFLGlCQVNDO1FBUkMsMkJBQVksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRW5ELElBQUksWUFBWSxHQUFHLGFBQUssQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxJQUFNLGlCQUFpQixHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLHVDQUE0QyxDQUFDO1FBQzdHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUFhO1lBQ3hHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksd0NBQWdCLEdBQXZCLFVBQXdCLEtBQXFCO1FBQTdDLGlCQXlCQztRQXhCQywyQkFBWSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVqRCxJQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBc0IsQ0FBQztRQUNoRCxJQUFJLG1CQUF3QyxDQUFDO1FBRTdDLElBQUksQ0FBQztZQUNILG1CQUFtQixHQUFHLG9DQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLDJDQUFnRCxDQUFDO1FBQy9HLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsd0RBQXdEO1lBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELDRFQUE0RTtRQUM1RSxJQUFNLGNBQWMsR0FBRyxJQUFJLCtDQUFzQixDQUF3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNySCxtQkFBbUIsQ0FBQyxlQUFlLENBQUMseUNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQUs7WUFDekUsSUFBTSxTQUFTLEdBQUcsS0FBZSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzdDLENBQUMsRUFBRSxVQUFDLFNBQWlCO1lBQ25CLGNBQWMsQ0FBQyxZQUFZLENBQUMsY0FBTSxXQUFJLDZDQUFxQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU3QixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyx3Q0FBZ0IsR0FBeEIsVUFBeUIsYUFBNEI7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFFaEQsSUFBTSxJQUFJLEdBQUcsK0RBQThCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2RyxJQUFJLFVBQXdDLENBQUM7UUFDN0MsSUFBSSxRQUErQixDQUFDO1FBQ3BDLElBQUksUUFBK0IsQ0FBQztRQUNwQyxJQUFJLFFBQTRCLENBQUM7UUFDakMsSUFBSSxjQUErQyxDQUFDO1FBRXBELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztZQUNuRCxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQUksV0FBSSx5QkFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7UUFDL0UsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEQsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSx5QkFBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEgsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSx5QkFBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEgsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDbEMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxjQUFjO2dCQUMzQywrREFBOEIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RixDQUFDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCLElBQUksRUFBRSxJQUFJO1lBQ1YsZUFBZSxFQUFFLFVBQVU7WUFDM0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsY0FBYyxFQUFFLGNBQWM7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7QUExR1ksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjFCLHNDQUE0RDtBQUc1RCwrQ0FBK0U7QUFFL0UsNENBQStDO0FBQy9DLGtEQUF3RDtBQUV4RDtJQUEyQyx5Q0FBaUI7SUFDMUQsK0JBQTJCLGdCQUF3QixFQUFFLEtBQXFCO1FBQTFFLFlBQ0Usa0JBQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxTQUN6RDtRQUYwQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7O0lBRW5ELENBQUM7SUFFTSxpREFBaUIsR0FBeEI7UUFBQSxpQkFVQztRQVRDLHdFQUF3RTtRQUN4RSxJQUFNLE9BQU8sR0FBRyxvQ0FBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSx1Q0FBNEMsQ0FBQztRQUNuRyxNQUFNLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFTO1lBQ2xHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLElBQUksMkJBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLDRCQUEwQixLQUFJLENBQUMsZ0JBQWtCLENBQUMsQ0FBQztZQUNsSCxDQUFDO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQ0FoQjBDLHFDQUFpQixHQWdCM0Q7QUFoQlksc0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05sQyxxREFBOEQ7QUFHOUQ7OztHQUdHO0FBQ0g7SUFBK0IsNkJBQW9CO0lBQ2pELG1CQUEyQixhQUE0QixFQUFFLEtBQXFCO1FBQTlFLFlBQ0UsaUJBQU8sU0FJUjtRQUwwQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUdyRCwrQ0FBK0M7UUFDL0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFlBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQzs7SUFDbkYsQ0FBQztJQUVELHNCQUFXLDJCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxtQ0FBWTthQUF2QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLCtCQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0NBQWU7YUFBMUI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5QkFBRTthQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRU0sb0NBQWdCLEdBQXZCLFVBQXdCLFFBQTBDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0EvQjhCLDJDQUFvQixHQStCbEQ7QUEvQlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHRCLHNDQUErRDtBQUUvRCx3REFPMkM7QUFFM0MsaURBT3NDO0FBRXRDLGdEQUFvRDtBQUtwRCw0Q0FBa0Q7QUFFbEQ7SUFBMEMsd0NBQWU7SUFBekQ7O0lBMlJBLENBQUM7SUExUkMsc0JBQVcsNkNBQVc7YUFBdEI7WUFDRSxNQUFNLHFDQUF3QjtRQUNoQyxDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7SUFDSSxzREFBdUIsR0FBOUIsVUFBK0IsUUFBa0I7UUFDL0MsSUFBTSxVQUFVLGFBQXdCLEdBQUMsc0NBQVcsQ0FBQyxRQUFRLElBQUcsUUFBUSxLQUFFLENBQUM7UUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQU0sQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQU8sa0JBQVE7WUFDNUUsTUFBTSxDQUFDLENBQUMsd0RBQXdEO1FBQ2xFLENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxzREFBdUIsR0FBOUIsVUFBK0IsUUFBa0IsRUFDL0Msa0JBQXFELEVBQ3JELG1CQUFpRDtRQUNqRCxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLElBQUksMkJBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLHlEQUF5RCxDQUFDLENBQUM7UUFDMUgsQ0FBQztRQUVELElBQU0sYUFBYSxHQUFXLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BGLElBQUkscUJBQXFCLEdBQTBCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLElBQUksdUJBQXVCLEdBQTZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBRTVILElBQU0sVUFBVTtZQUNkLEdBQUMsc0NBQVcsQ0FBQyxRQUFRLElBQUcsUUFBUTtZQUNoQyxHQUFDLHNDQUFXLENBQUMsbUJBQW1CLElBQUcsYUFBYTtlQUNqRCxDQUFDO1FBRUYsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEtBQUsscUJBQXFCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDNUMsVUFBVSxDQUFDLHNDQUFXLENBQUMsc0JBQXNCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxZQUFZLENBQUM7Z0JBQ3RGLEtBQUssQ0FBQztZQUNSLENBQUM7WUFDRCxLQUFLLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQyxVQUFVLENBQUMsc0NBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLGFBQWEsQ0FBQztnQkFDMUYsS0FBSyxDQUFDO1lBQ1IsQ0FBQztZQUNELEtBQUsscUJBQXFCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pDLFVBQVUsQ0FBQyxzQ0FBVyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxDQUFDO2dCQUNwRixLQUFLLENBQUM7WUFDUixDQUFDO1lBQ0Q7Z0JBQ0UsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBTyxrQkFBUTtZQUN2RSx3REFBd0Q7WUFDeEQsTUFBTSxDQUFDO1lBQ1AsK0ZBQStGO1FBQ2pHLENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFFRDs7Ozs7O0tBTUM7SUFDTSxtREFBb0IsR0FBM0IsVUFBNEIsUUFBa0IsRUFDNUMsS0FBK0IsRUFDL0IsbUJBQWlEO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLElBQUksMkJBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLDhDQUE4QyxDQUFDLENBQUM7UUFDL0csQ0FBQztRQUVELElBQU0sYUFBYSxHQUFXLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BGLElBQUksdUJBQXVCLEdBQTZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RixJQUFNLFVBQVU7WUFDZCxHQUFDLHNDQUFXLENBQUMsUUFBUSxJQUFHLFFBQVE7WUFDaEMsR0FBQyxzQ0FBVyxDQUFDLG1CQUFtQixJQUFHLGFBQWE7WUFDaEQsR0FBQyxzQ0FBVyxDQUFDLFNBQVMsSUFBRyx1QkFBdUIsQ0FBQyxTQUFTO2VBQzNELENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBTSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQU8sa0JBQVE7WUFDdkUsd0RBQXdEO1lBQ3hELE1BQU0sQ0FBQztZQUNQLCtGQUErRjtRQUNqRyxDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZ0RBQWlCLEdBQXpCLFVBQTBCLEtBQStCO1FBQ3ZELElBQUksR0FBRyxHQUFrQixFQUFFLENBQUM7UUFDNUIsSUFBSSx1QkFBdUIsR0FBNkIsSUFBSSwwQ0FBd0IsRUFBRSxDQUFDO1FBQ3ZGLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RDLElBQUksT0FBTyxHQUF1QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7WUFDeEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sSUFBSSwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHVCQUF1QixDQUFDLENBQUM7WUFDckYsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxtQkFBbUIsR0FBd0IsSUFBSSxxQ0FBbUIsRUFBRSxDQUFDO1lBQ3pFLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7WUFDN0MsbUJBQW1CLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNwQyx1QkFBdUIsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDMUQsQ0FBQztRQUNELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNLLGtEQUFtQixHQUEzQixVQUE0QixrQkFBcUQsRUFDL0UsYUFBb0M7UUFDcEMsSUFBSSx1QkFBdUIsR0FBNkIsSUFBSSwwQ0FBd0IsRUFBRSxDQUFDO1FBQ3ZGLElBQUksb0JBQW9CLEdBQVksS0FBSyxDQUFDO1FBRTFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkQsSUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxXQUFXLEdBQXdCLEVBQUUsQ0FBQyxLQUE0QixDQUFDO2dCQUN2RSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7d0JBQzdELElBQUksU0FBUyxHQUErQixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBK0IsQ0FBQzt3QkFDdkgsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixvQkFBb0IsR0FBRyxJQUFJLENBQUM7d0JBQzVCLEtBQUssQ0FBQztvQkFDUixDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLFdBQW1DLENBQUMsR0FBRyxLQUFLLFNBQVM7dUJBQzNELFdBQW1DLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzVELEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN0RCxJQUFJLFVBQVUsR0FBd0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBQzNGLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3pELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sb0JBQW9CLEdBQUcsSUFBSSxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBQ1IsQ0FBQztnQkFDSCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLFFBQVEsR0FBNEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQTRCLENBQUM7d0JBQ2hILHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sb0JBQW9CLEdBQUcsSUFBSSxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBQ1IsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxJQUFJLDJCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztRQUNoRyxDQUFDO1FBQ0QsTUFBTSxDQUFDLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSyx3REFBeUIsR0FBakMsVUFBa0MsaUJBQTZDO1FBQzdFLElBQUksYUFBb0MsQ0FBQztRQUN6QyxxRkFBcUY7UUFDckYsSUFBSSxJQUFJLEdBQStCLGlCQUFpQixDQUFDO1FBRXpELElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksV0FBVyxHQUF3QixJQUFJLENBQUMsS0FBNEIsQ0FBQztRQUV6RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7WUFDekQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRSxXQUFtQyxDQUFDLEdBQUcsS0FBSyxTQUFTO21CQUMzRCxXQUFtQyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxhQUFhLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDO1lBQ2xELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixhQUFhLEdBQUcscUJBQXFCLENBQUMsYUFBYSxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksMkJBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ2hHLENBQUM7UUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyw4Q0FBZSxHQUF2QixVQUF3QixTQUFpQixFQUFFLEtBQWE7UUFDdEQsSUFBSSxtQkFBbUIsR0FBd0IsSUFBSSxxQ0FBbUIsRUFBRSxDQUFDO1FBQ3pFLElBQUksVUFBVSxHQUFrQixFQUFFLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxRQUFRLEdBQWtCLEtBQUssQ0FBQztZQUNwQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMxQyxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1FBQ3RELG1CQUFtQixDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7UUFDOUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLG1EQUFvQixHQUE1QixVQUE2QixTQUFpQixFQUFFLEtBQTBCO1FBQ3hFLElBQUksbUJBQW1CLEdBQXdCLElBQUkscUNBQW1CLEVBQUUsQ0FBQztRQUN6RSxtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7UUFDdEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xELG1CQUFtQixDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEQsbUJBQW1CLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEQsQ0FBQztRQUNELG1CQUFtQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDBEQUEyQixHQUFuQyxVQUFvQyxtQkFBaUQ7UUFDbkYsRUFBRSxDQUFDLENBQUMsbUJBQW1CLEtBQUssUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLDhDQUEyQixDQUFDLE9BQU8sQ0FBQztRQUM3QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixLQUFLLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sQ0FBQyw4Q0FBMkIsQ0FBQyxHQUFHLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsS0FBSyxRQUFRLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2RSxNQUFNLENBQUMsOENBQTJCLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7UUFDRCxNQUFNLENBQUMsOENBQTJCLENBQUMsT0FBTyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0sscURBQXNCLEdBQTlCLFVBQStCLFVBQWlEO1FBQzlFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZixFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sQ0FBQyxxREFBMEIsQ0FBQyxXQUFXLENBQUM7WUFDaEQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLE1BQU0sQ0FBQyxxREFBMEIsQ0FBQyxjQUFjLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sQ0FBQyxxREFBMEIsQ0FBQyxVQUFVLENBQUM7WUFDL0MsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMscURBQTBCLENBQUMsVUFBVSxDQUFDO0lBQy9DLENBQUM7SUFFSCwyQkFBQztBQUFELENBQUMsQ0EzUnlDLGlDQUFlLEdBMlJ4RDtBQTNSWSxvREFBb0I7QUE2UmpDOztHQUVHO0FBQ0gsSUFBSyxxQkFLSjtBQUxELFdBQUsscUJBQXFCO0lBQ3hCLHlGQUFvQjtJQUNwQiwyRUFBYTtJQUNiLG1GQUFpQjtJQUNqQiw2RUFBYztBQUNoQixDQUFDLEVBTEkscUJBQXFCLEtBQXJCLHFCQUFxQixRQUt6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVUQ7O0dBRUc7QUFDSDtJQUFBO0lBRUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQztBQUZZLHdDQUFjO0FBSTNCOztHQUVHO0FBQ0g7SUFBeUMsdUNBQWM7SUFBdkQ7UUFBQSxxRUFFQztRQURRLGtCQUFZLEdBQWtCLEVBQUUsQ0FBQzs7SUFDMUMsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxDQUZ3QyxjQUFjLEdBRXREO0FBRlksa0RBQW1CO0FBSWhDOztHQUVHO0FBQ0g7SUFBZ0QsOENBQW1CO0lBQW5FOztJQUNBLENBQUM7SUFBRCxpQ0FBQztBQUFELENBQUMsQ0FEK0MsbUJBQW1CLEdBQ2xFO0FBRFksZ0VBQTBCO0FBR3ZDOztHQUVHO0FBQ0g7SUFBeUMsdUNBQWM7SUFBdkQ7O0lBSUEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxDQUp3QyxjQUFjLEdBSXREO0FBSlksa0RBQW1CO0FBTWhDOztHQUVHO0FBQ0g7SUFBNkMsMkNBQW1CO0lBQWhFOztJQUNBLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQ0FENEMsbUJBQW1CLEdBQy9EO0FBRFksMERBQXVCO0FBRXBDOztHQUVHO0FBQ0g7SUFBQTtRQUVTLGNBQVMsR0FBa0IsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUM7QUFIWSxrREFBbUI7QUFLaEM7O0dBRUc7QUFDSDtJQUFBO1FBQ1MsaUJBQVksR0FBc0MsRUFBRSxDQUFDO1FBQ3JELGdCQUFXLEdBQW1DLEVBQUUsQ0FBQztRQUNqRCxrQkFBYSxHQUErQixFQUFFLENBQUM7SUFFeEQsQ0FBQztJQUFELCtCQUFDO0FBQUQsQ0FBQztBQUxZLDREQUF3Qjs7Ozs7Ozs7OztBQzNDckM7Ozs7R0FJRztBQUNIO0lBQ0UsMEJBQTJCLFVBQThCO1FBQTlCLGVBQVUsR0FBVixVQUFVLENBQW9CO0lBQUksQ0FBQztJQUU5RCxzQkFBVyx1Q0FBUzthQUFwQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0gsdUJBQUM7QUFBRCxDQUFDO0FBTlksNENBQWdCOzs7Ozs7Ozs7O0FDSjdCLHlDQUFpRjtBQUVqRjs7OztHQUlHO0FBQ0g7SUFTRSxxQkFBbUIsb0JBQTBDO1FBQzNELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsMENBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsMENBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxlQUFlLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7SUFDN0QsQ0FBQztJQUVELHNCQUFXLG1DQUFVO2FBQXJCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxnQ0FBTzthQUFsQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsaUNBQVE7YUFBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLCtCQUFNO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw2QkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3Q0FBZTthQUExQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBYzthQUF6QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0gsa0JBQUM7QUFBRCxDQUFDO0FBOUNZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R4Qix5Q0FBdUQ7QUFLdkQ7O0dBRUc7QUFDSDtJQUE4Qiw0QkFBb0I7SUFDaEQsa0JBQTJCLGFBQTJCO1FBQXRELFlBQ0UsaUJBQU8sU0FJUjtRQUwwQixtQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUdwRCwrQ0FBK0M7UUFDL0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksWUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDOztJQUM5RSxDQUFDO0lBRU0sd0JBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLHNCQUFHLEdBQVYsVUFBVyxHQUFXO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0seUJBQU0sR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQkFBVyxnQ0FBVTthQUFyQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVNLDRCQUFTLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLHNCQUFHLEdBQVYsVUFBVyxHQUFXLEVBQUUsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLENBL0I2QixnQ0FBb0IsR0ErQmpEO0FBL0JZLDRCQUFROzs7Ozs7Ozs7O0FDTHJCOztHQUVHO0FBQ0g7SUFDRSxZQUEyQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFJLENBQUM7SUFFdEMsK0JBQWtCLEdBQXpCLFVBQTBCLEdBQVcsRUFBRSxPQUFnQixFQUFFLE9BQWdDO1FBQ3ZGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLHdCQUFXLEdBQWxCLFVBQW1CLE9BQWdCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCxTQUFDO0FBQUQsQ0FBQztBQVZZLGdCQUFFOzs7Ozs7Ozs7O0FDTmYseUNBQXFEO0FBRXJELDJEQUE2RTtBQUM3RSxxREFBaUU7QUFDakUsK0NBQXFEO0FBRXJELHVDQUE4QyxVQUFpQztJQUM3RSw4QkFBa0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUkscURBQXlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2Riw4QkFBa0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUkseUNBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNqRiw4QkFBa0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksNkJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFKRCxzRUFJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRCx5Q0FBcUQ7QUFFckQsd0RBSzJDO0FBSzNDO0lBQStDLDZDQUFlO0lBQTlEOztJQWtCQSxDQUFDO0lBakJDLHNCQUFXLGtEQUFXO2FBQXRCO1lBQ0UsTUFBTSxxREFBOEM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFTSxzRUFBa0MsR0FBekMsVUFBMEMsaUJBQTBCLEVBQUUsY0FBd0I7UUFDNUYsSUFBTSxNQUFNO1lBQ1YsR0FBQyxzQ0FBVyxDQUFDLHVCQUF1QixJQUFHLGNBQWM7WUFDckQsR0FBQyxzQ0FBVyxDQUFDLGlCQUFpQixJQUFHLGlCQUFpQjtlQUNuRCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQU0sQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQXlCLGtCQUFRO1lBQzNGLCtCQUErQjtZQUUvQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBZ0MsQ0FBQztZQUN6RCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQ0FsQjhDLDJCQUFlLEdBa0I3RDtBQWxCWSw4REFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnRDLDhEQUFvRTtBQUNwRSx5Q0FBcUQ7QUFFckQsd0RBSzJDO0FBRTNDLHlDQUFrRDtBQUtsRDtJQUF5Qyx1Q0FBZTtJQUF4RDs7SUFrQkEsQ0FBQztJQWpCQyxzQkFBVyw0Q0FBVzthQUF0QjtZQUNFLE1BQU0seUNBQXdDO1FBQ2hELENBQUM7OztPQUFBO0lBRU0sK0NBQWlCLEdBQXhCLFVBQXlCLFFBQTRCO1FBQ25ELElBQU0sVUFBVSxhQUF3QixHQUFDLHNDQUFXLENBQUMsY0FBYyxJQUFHLFFBQVEsS0FBRSxDQUFDO1FBRWpGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFNLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFxQixlQUFLO1lBQzFGLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUErQixDQUFDO1lBRXJELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sSUFBSSx3QkFBWSxDQUFDLDBDQUFVLENBQUMsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7WUFDekYsQ0FBQztZQUVELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLENBbEJ3QywyQkFBZSxHQWtCdkQ7QUFsQlksa0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZoQyw4REFBbUY7QUFFbkYsd0RBSzJDO0FBRTNDLHlDQUFtRTtBQUtuRSxJQUFNLHFCQUFxQixHQUFXLEdBQUcsQ0FBQyxDQUFDLFlBQVk7QUFDdkQsSUFBTSxvQkFBb0IsR0FBVyxHQUFHLENBQUMsQ0FBQyxZQUFZO0FBRXREO0lBQW1DLGlDQUFlO0lBQWxEOztJQTZDQSxDQUFDO0lBNUNDLHNCQUFXLHNDQUFXO2FBQXRCO1lBQ0UsTUFBTSw2QkFBa0M7UUFDMUMsQ0FBQzs7O09BQUE7SUFFTSwwQ0FBa0IsR0FBekIsVUFBMEIsR0FBVyxFQUFFLE9BQWUsRUFBRSxPQUF1QjtRQUM3RSxJQUFJLFVBQVU7WUFDWixHQUFDLHNDQUFXLENBQUMsa0JBQWtCLElBQUcsR0FBRztZQUNyQyxHQUFDLHNDQUFXLENBQUMsc0JBQXNCLElBQUcsT0FBTztlQUM5QyxDQUFDO1FBRUYsSUFBTSxDQUFDLEdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO1FBQzNGLElBQU0sQ0FBQyxHQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztRQUV4RixtRkFBbUY7UUFDbkYsNkZBQTZGO1FBQzdGLG9EQUFvRDtRQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sSUFBSSx3QkFBWSxDQUFDLDBDQUFVLENBQUMsZ0JBQWdCLEVBQUUseURBQXlELENBQUMsQ0FBQztRQUNqSCxDQUFDO1FBRUQsVUFBVSxDQUFDLHNDQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsVUFBVSxDQUFDLHNDQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFRO1lBQ2pFLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUErQixDQUFDO1lBQzlELE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUssZ0RBQXFCLENBQUMsaUJBQWlCO29CQUMxQyxNQUFNLElBQUksd0JBQVksQ0FBQywwQ0FBVSxDQUFDLGlCQUFpQixFQUFFLHlEQUF5RCxDQUFDLENBQUM7Z0JBQ2xILEtBQUssZ0RBQXFCLENBQUMsYUFBYTtvQkFDdEMsTUFBTSxJQUFJLHdCQUFZLENBQUMsMENBQVUsQ0FBQyxtQkFBbUIsRUFDbkQsK0VBQStFLENBQUMsQ0FBQztnQkFDckYsUUFBUyxlQUFlO29CQUN0QixNQUFNLENBQUM7WUFDWCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUVNLG1DQUFXLEdBQWxCLFVBQW1CLE9BQWdCO1FBQ2pDLElBQUksVUFBVSxHQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBRyxHQUFDLHNDQUFXLENBQUMsc0JBQXNCLElBQUcsT0FBTyxNQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFdkcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQU0sQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFRO1lBQy9ELE1BQU0sQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQ0E3Q2tDLDJCQUFlLEdBNkNqRDtBQTdDWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjFCLHVDQUFnRTtBQUVoRSx3REFBeUc7QUFFekcseUNBU3lCO0FBS3pCO0lBQW1DLHdDQUFZO0lBQzdDLDhCQUEyQixZQUF1QztRQUFsRSxZQUNFLGtCQUFNLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsU0FDakQ7UUFGMEIsa0JBQVksR0FBWixZQUFZLENBQTJCOztJQUVsRSxDQUFDO0lBRUQsc0JBQVcsNkNBQVc7YUFBdEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNILDJCQUFDO0FBQUQsQ0FBQyxDQVJrQyx3QkFBWSxHQVE5QztBQUVEO0lBU0Usc0JBQW1CLFlBQW1DO1FBSnRELHVFQUF1RTtRQUN2RSxvRkFBb0Y7UUFDNUUsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFHdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsR0FBVztRQUN0Qix3QkFBWSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFekMsc0RBQXNEO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7WUFFakMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFTSwwQkFBRyxHQUFWLFVBQVcsR0FBVztRQUNwQix3QkFBWSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNFLHlDQUF5QztRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHNCQUFXLG9DQUFVO2FBQXJCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFTSxnQ0FBUyxHQUFoQjtRQUFBLGlCQXdCQztRQXZCQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUVqQyxxREFBcUQ7UUFDckQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBcUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRTVCLG1EQUFtRDtRQUNuRCxJQUFNLGVBQWUsR0FBRyw4QkFBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSx5Q0FDckIsQ0FBQztRQUUxQyxNQUFNLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBcUIscUJBQVc7WUFDbEcsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7WUFDdEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDBCQUFHLEdBQVYsVUFBVyxHQUFXLEVBQUUsS0FBYTtRQUNuQyx3QkFBWSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztRQUNwRix3QkFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7UUFDL0UsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFFakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHVDQUFnQixHQUF2QjtRQUFBLGlCQXNCQztRQXJCQyxJQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBc0IsQ0FBQztRQUNoRCxJQUFJLG1CQUF3QyxDQUFDO1FBRTdDLElBQUksQ0FBQztZQUNILG1CQUFtQixHQUFHLDhCQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLDJDQUFnRCxDQUFDO1FBQy9HLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsd0RBQXdEO1lBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELElBQU0sb0JBQW9CLEdBQUcsSUFBSSxrQ0FBc0IsQ0FBdUIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pILG1CQUFtQixDQUFDLGVBQWUsQ0FBQyx5Q0FBYyxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQUs7WUFDeEUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsRUFBRSxVQUFDLEtBQW9CO1lBQ3RCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQzFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxjQUFNLFdBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU8seUNBQWtCLEdBQTFCLFVBQTJCLFlBQW1DO1FBQzVELHdCQUFZLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzRCx3QkFBWSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFFcEQsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxnREFBeUIsR0FBakM7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksd0JBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pHLENBQUM7SUFDSCxDQUFDO0lBekhjLG1DQUFzQixHQUFXLDhEQUE4RCxDQUFDO0lBMEhqSCxtQkFBQztDQUFBO0FBM0hZLG9DQUFZOzs7Ozs7Ozs7O0FDNUJ6Qix1Q0FBZ0U7QUFFaEUsd0RBQXNGO0FBQ3RGLHlDQUt5QjtBQUt6QjtJQUFBO0lBOEJBLENBQUM7SUE3QlEsbUNBQWtCLEdBQXpCLFVBQTBCLEdBQVcsRUFBRSxPQUFnQixFQUFFLE9BQWdDO1FBQ3ZGLElBQU0sU0FBUyxHQUFHLDhCQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLDZCQUE2QyxDQUFDO1FBQ3RHLElBQU0sbUJBQW1CLEdBQXdCLDhCQUFrQixDQUFDLFFBQVEsQ0FBQyxVQUFVLDJDQUFnRCxDQUFDO1FBRXhJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzdELElBQU0sWUFBWSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyx5Q0FBYyxDQUFDLHFCQUFxQixFQUFFLFVBQUMsS0FBSztvQkFDbkcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLHNDQUFzQztnQkFDckQsQ0FBQyxFQUFFLFVBQUMsS0FBd0I7b0JBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM5QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxJQUFJLHdCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZHLENBQUM7b0JBRUQsWUFBWSxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw0QkFBVyxHQUFsQixVQUFtQixPQUFnQjtRQUNqQyxJQUFNLFNBQVMsR0FBRyw4QkFBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSw2QkFDckIsQ0FBQztRQUVwQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQztBQTlCWSx3QkFBTTs7Ozs7Ozs7OztBQ1RuQjs7R0FFRztBQUNIO0lBQ0Usb0JBQTJCLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0JBQVcsd0NBQWdCO2FBQTNCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxtQ0FBVzthQUF0QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGdDQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQUU7YUFBYjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLG9CQUFrQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUMsSUFBSSxFQUFRLENBQUM7SUFDdEYsQ0FBQztJQUVNLDBDQUFxQixHQUE1QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBNUJZLGdDQUFVIiwiZmlsZSI6InRhYmxlYXUuZXh0ZW5zaW9ucy4xLjAuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0LWV4dGVuc2lvbnMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZlNDc1MjRiYzE0NTY0Nzk0ZjNiIiwiLy8gVGhpcyBmaWxlIHJlLWV4cG9ydHMgZXZlcnl0aGluZyB3aGljaCBpcyBwYXJ0IG9mIHRoZSBzaGFyZWQgZW1iZWRkaW5nIGFwaSBwdWJsaWMgaW50ZXJmYWNlXG5cbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9EYXRhU291cmNlSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRGF0YVRhYmxlSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRW51bXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0V2ZW50SW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRmlsdGVySW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2VsZWN0aW9uSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvUGFyYW1ldGVySW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2VsZWN0aW9uSW50ZXJmYWNlcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvU2hlZXRJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9UYWJsZWF1RXJyb3InO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwiLyoqXG4gKiBUaGlzIGlzIHlvdXIgbWFpbi4gVGhpcyBpcyB3aGVyZSB5b3UgcmUtZXhwb3J0IGV2ZXJ5dGhpbmcgeW91IHdhbnQgdG8gYmUgcHVibGljbHkgYXZhaWxhYmxlLlxuICpcbiAqIFRoZSBidWlsZCBlbmZvcmNlcyB0aGF0IHRoZSBmaWxlIGhhcyB0aGUgc2FtZSBuYW1lIGFzIHRoZSBnbG9iYWwgdmFyaWFibGUgdGhhdCBpcyBleHBvcnRlZC5cbiAqL1xuXG4vLyBUaGUgZm9sbG93aW5nIHBvbHlmaWxscyBhcmUgbmVlZGVkIGZvciBJRTExXG5pbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbic7XG5pbXBvcnQgJ2NvcmUtanMvZm4vbnVtYmVyL2lzLWludGVnZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L0VudW1zJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L01vZGVscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9QYXJhbWV0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvVmVyYnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvVmVyc2lvbk51bWJlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb25pbmcvVmVyc2lvbkNvbnZlcnRlckZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcblxuLy8gVGhlc2UgYXJlIHRoZSBleHBvcnRzIGZyb20gdGhlIG1lc3NhZ2luZyBzdHVmZlxuXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlRGlzcGF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZUxpc3RlbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3Nlbmdlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcblxuLy8gRXhwb3J0IGEgaGFyZGNvZGVkIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0LiBUaGlzIHNob3VsZCBtYXRjaCB3aGF0J3MgaW4gcGFja2FnZS5qc29uLlxuLy8gTm9ybWFsbHksIHdlJ2QgdXNlIHNvbWUgc29ydCBvZiB3ZWJwYWNrIHJlcGxhY2VtZW50IHRvIGluamVjdCB0aGlzIGludG8gY29kZSwgYnV0IHRoYXQgZG9lc24ndFxuLy8gd29yayB3aXRoIHRoZSBtb2R1bGUtZGV2LXNjcmlwdHMgYW5kIHRoaXMgaXNuJ3QgdG9vIG11Y2ggd29yay5cbi8vIElmIHlvdSBmb3JnZXQgdG8ga2VlcCB0aGlzIGluIHN5bmMgd2l0aCBwYWNrYWdlLmpzb24sIGEgdGVzdCB3aWxsIGZhaWwgc28gd2Ugc2hvdWxkIGJlIG9rLlxuZXhwb3J0IGNvbnN0IElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04gPSB7XG4gIG1ham9yOiAxLFxuICBtaW5vcjogNCxcbiAgZml4OiAyXG59O1xuXG4vLyBFeHBvcnQgdGhlIHZlcnNpb24gbnVtYmVyIG9mIG1lc3NhZ2luZyBmb3IgY29uc3VtZXJzIHRvIHVzZS5cbi8vIEJlIHZlcnkgY2FyZWZ1bCBtYWtpbmcgYW55IHVwZGF0ZXMgdG8gdGhpcyBjb250cmFjdCB3aGljaCBicmVhayB2ZXJzaW9uIGNvbXBhdGliaWxpdHkuXG5leHBvcnQgY29uc3QgTUVTU0FHSU5HX1ZFUlNJT04gPSB7XG4gIG1ham9yOiAxLFxuICBtaW5vcjogMCxcbiAgZml4OiAwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9Kc0FwaUludGVybmFsQ29udHJhY3QudHMiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEN1c3RvbSBlcnJvciBjbGFzcyB0aGF0IGV4dGVuZHMgdGhlIGRlZmF1bHQgSmF2YVNjcmlwdCBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGFsbG93cyB1cyB0byBwcm92aWRlIGEgZmllbGQgd2l0aCBhIHNwZWNpZmljIGVycm9yIGNvZGVcbiAqIHNvIHRoYXQgZGV2ZWxvcGVycyBjYW4gbW9yZSBlYXNpbHkgcHJvZ3JhbW1hdGljYWxseSByZXNwb25kXG4gKiB0byBlcnJvciBzY2VuYXJpb3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZWF1RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lcnJvckNvZGU6IENvbnRyYWN0LkVycm9yQ29kZXMsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKGAke19lcnJvckNvZGV9OiAke21lc3NhZ2V9YCk7XG5cbiAgICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXG4gICAgLy8gRXJyb3IgaW5oZXJpdGFuY2UgZG9lcyBub3Qgd29yayBwcm9wZXJ0bHkgd2hlbiBjb21waWxpbmcgdG8gRVM1LCB0aGlzIGlzIGEgd29ya2Fyb3VuZCB0byBmb3JjZVxuICAgIC8vIHRoZSBwcm90byBjaGFpbiB0byBiZSBidWlsdCBjb3JyZWN0bHkuICBTZWUgdGhlIGdpdGh1YiBsaW5rIGFib3ZlIGZvciBkZXRhaWxzLlxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBUYWJsZWF1RXJyb3IucHJvdG90eXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3JDb2RlKCk6IENvbnRyYWN0LkVycm9yQ29kZXMge1xuICAgIHJldHVybiB0aGlzLl9lcnJvckNvZGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlYXVFcnJvci50cyIsIi8vIEV4cG9ydCBldmVyeXRoaW5nIHdoaWNoIGhhZCBiZWVuIHByZXZpb3VzbHkgaW4gdGhlIGFwaS1zaGFyZWQgbW9kdWxlXG5cbmV4cG9ydCB7IERhc2hib2FyZCB9IGZyb20gJy4vQXBpU2hhcmVkL0Rhc2hib2FyZCc7XG5leHBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyJztcbmV4cG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4vQXBpU2hhcmVkL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5leHBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3InO1xuZXhwb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4vQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXInO1xuXG5leHBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmV4cG9ydCB7IFRhYmxlYXVFdmVudCB9IGZyb20gJy4vQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQnO1xuZXhwb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5leHBvcnQgeyBEYXNoYm9hcmRJbXBsIH0gZnJvbSAnLi9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsJztcbmV4cG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlJztcbmV4cG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4vQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcCc7XG5leHBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvTm90aWZpY2F0aW9uU2VydmljZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvQXBpU2hhcmVkLnRzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBhbiBhcGkgc2VydmljZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwaVNlcnZpY2Uge1xuICAvKipcbiAgICogR2V0cyB0aGUgbmFtZSBmb3IgdGhpcyBzZXJ2aWNlLlxuICAgKi9cbiAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIHNlcnZpY2UgbmFtZSB3aGljaCB3aWxsIGJlIHJlZ2lzdGVyZWQgaW4gdGhlIGFwaS1zaGFyZWQgcHJvamVjdFxuICovXG5leHBvcnQgY29uc3QgZW51bSBTZXJ2aWNlTmFtZXMge1xuICBEYXRhU291cmNlU2VydmljZSA9ICdkYXRhLXNvdXJjZS1zZXJ2aWNlJyxcbiAgR2V0RGF0YSA9ICdnZXQtZGF0YS1zZXJ2aWNlJyxcbiAgRmlsdGVyID0gJ2ZpbHRlci1zZXJ2aWNlJyxcbiAgTm90aWZpY2F0aW9uID0gJ25vdGlmaWNhdGlvbi1zZXJ2aWNlJyxcbiAgUGFyYW1ldGVycyA9ICdwYXJhbWV0ZXJzLXNlcnZpY2UnLFxuICBTZWxlY3Rpb24gPSAnc2VsZWN0aW9uLXNlcnZpY2UnXG59XG5cbi8qKlxuICogRG8gc29tZSBnbG9iYWJsIGRlY2xhcmF0aW9ucyBzbyB3ZSBjYW4gY3JlYXRlIGEgc2luZ2xldG9uIG9uIHRoZSB3aW5kb3cgb2JqZWN0XG4gKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IF9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeTogU2VydmljZVJlZ2lzdHJ5IHwgdW5kZWZpbmVkOyB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZVJlZ2lzdHJ5IHtcbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIG5ldyBzZXJ2aWNlIGludG8gdGhlIHNlcnZpY2UgcmVnaXN0cnkuIEFueSBleGlzdGluZyBvbmUgd2lsbFxuICAgKiBiZSBvdmVyd3JpdHRlbi4gdGhlIHNlcnZpY2UgaXMgcmVnaXN0ZXJlZCB1bmRlciBzZXJ2aWNlLnNlcnZpY2VOYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7QXBpU2VydmljZX0gc2VydmljZSBUaGUgc2Vydml2ZSB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXJTZXJ2aWNlKHNlcnZpY2U6IEFwaVNlcnZpY2UpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGdpdmVuIHNlcnZpY2UgZnJvbSB0aGUgcmVnaXN0cnkuIElmIHRoZXJlIGlzIG5vdCBhXG4gICAqIHNlcnZpY2UgcmVnaXN0ZXJlZCB1bmRlciB0aGF0IG5hbWUsIHRocm93cyBhbmQgZXJyb3JcbiAgICpcbiAgICogQHRlbXBsYXRlIFQgVGhlIHR5cGUgb2YgdGhlIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VOYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlLlxuICAgKiBAcmV0dXJucyB7VH0gVGhlIHJlcXVlc3RlZCBzZXJ2aWNlXG4gICAqL1xuICBnZXRTZXJ2aWNlPFQgZXh0ZW5kcyBBcGlTZXJ2aWNlPihzZXJ2aWNlTmFtZTogc3RyaW5nKTogVDtcbn1cblxuY2xhc3MgU2VydmljZVJlZ2lzdHJ5SW1wbCBpbXBsZW1lbnRzIFNlcnZpY2VSZWdpc3RyeSB7XG4gIHByaXZhdGUgX3NlcnZpY2VzOiB7IFtzZXJ2aWNlTmFtZTogc3RyaW5nXTogQXBpU2VydmljZTsgfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc2VydmljZXMgPSB7fTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlclNlcnZpY2Uoc2VydmljZTogQXBpU2VydmljZSk6IHZvaWQge1xuICAgIHRoaXMuX3NlcnZpY2VzW3NlcnZpY2Uuc2VydmljZU5hbWVdID0gc2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZXJ2aWNlPFQgZXh0ZW5kcyBBcGlTZXJ2aWNlPihzZXJ2aWNlTmFtZTogc3RyaW5nKTogVCB7XG4gICAgaWYgKCF0aGlzLl9zZXJ2aWNlcy5oYXNPd25Qcm9wZXJ0eShzZXJ2aWNlTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgU2VydmljZSBub3QgcmVnaXN0ZXJlZDogJHtzZXJ2aWNlTmFtZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VydmljZXNbc2VydmljZU5hbWVdIGFzIFQ7XG4gIH1cbn1cblxuLyoqXG4gKiBzdGF0aWMgY2xhc3MgdXNlZCBmb3IgZ2V0dGluZyBhY2Nlc3MgdG8gdGhlIHNpbmdsZSBpbnN0YW5jZVxuICogb2YgdGhlIEFwaVNlcnZpY2VSZWdpc3RyeVxuICovXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZVJlZ2lzdHJ5IHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgU2VydmljZVJlZ2lzdHJ5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTZXJ2aWNlUmVnaXN0cnkge1xuICAgIGlmICghd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeSkge1xuICAgICAgQXBpU2VydmljZVJlZ2lzdHJ5LnNldEluc3RhbmNlKG5ldyBTZXJ2aWNlUmVnaXN0cnlJbXBsKCkpO1xuICAgIH1cblxuICAgIGlmICghd2luZG93Ll9fdGFibGVhdUFwaVNlcnZpY2VSZWdpc3RyeSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZXJ2aWNlIHJlZ2lzdHJ5IGZhaWxlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gb3ZlcnJpZGUgdGhlIHJlZ2lzdHJ5IGluc3RhbmNlLiBDYW4gYmUgdXNlZCBieSB1bml0IHRlc3RzXG4gICAqXG4gICAqIEBwYXJhbSB7U2VydmljZVJlZ2lzdHJ5fSBzZXJ2aWNlUmVnaXN0cnkgVGhlIG5ldyByZWdpc3RyeVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZXRJbnN0YW5jZShzZXJ2aWNlUmVnaXN0cnk/OiBTZXJ2aWNlUmVnaXN0cnkpOiB2b2lkIHtcbiAgICB3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5ID0gc2VydmljZVJlZ2lzdHJ5O1xuICB9XG5cbiAgLy8gUHJpdmF0ZSB0byBhdm9pZCBhbnlvbmUgY29uc3RydWN0aW5nIHRoaXNcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5LnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4vUGFyYW0nO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb25zdHJ1Y3QgY29tbW9uIGVycm9ycyB0aHJvdWdob3V0IHRoZSBleHRlcm5hbFxuICogcHJvamVjdHMgKGFwaS1zaGFyZWQsIGV4dGVuc2lvbnMtYXBpLCBldGMuKS4gIEl0IGhhcyBzb21lIGR1cGxpY2F0aW9uIHdpdGhcbiAqIHRoZSBFcnJvckhlbHBlcnMgY2xhc3MgaW4gYXBpLWNvcmUsIGJ1dCBpcyBzZXBhcmF0ZSBkdWUgdG8gdGhlIG5lZWQgdG8gdGhyb3dcbiAqIGFuIGV4dGVybmFsIFRhYmxlYXVFcnJvciB2cy4gYW4gSW50ZXJuYWxUYWJsZWF1RXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckhlbHBlcnMge1xuICAvKipcbiAgICogVGhyb3dzIHdpdGggY29kZSBJbnRlcm5hbEVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gYXBpTmFtZSBuYW1lIG9mIGFwaSB0aGF0IHdhcyBjYWxsZWQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwaU5vdEltcGxlbWVudGVkKGFwaU5hbWU6IHN0cmluZyk6IFRhYmxlYXVFcnJvciB7XG4gICAgcmV0dXJuIG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgJHthcGlOYW1lfSBBUEkgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gaW50ZXJuYWwgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeUludGVybmFsVmFsdWUoYXJndW1lbnRWYWx1ZTogYW55LCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeVBhcmFtZXRlcihhcmd1bWVudFZhbHVlOiBhbnksIGFyZ3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZ3VtZW50VmFsdWUgPT09IG51bGwgfHwgYXJndW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgYCR7YXJndW1lbnRWYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgcGFyYW10ZXI6ICR7YXJndW1lbnROYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gSW52YWxpZFBhcmFtZXRlciBlcnJvciBpZiBhcmd1bWVudCBpcyBlbXB0eSBzdHJpbmcsIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYXJndW1lbnRWYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGFyZ3VtZW50TmFtZSBuYW1lIG9mIGFyZ3VtZW50IHRvIHZlcmlmeVxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlTdHJpbmdQYXJhbWV0ZXIoYXJndW1lbnRWYWx1ZTogc3RyaW5nLCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBhcmd1bWVudFZhbHVlID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yIHBhcmFtdGVyOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgcGFzc2VkIHZhbHVlIGlzIGEgdmFsaWQgdmFsdWUgZm9yIHRoYXQgZW51bS5cbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgdGhlIGVudW0gdmFsdWUgaXMgbm90IHZhbGlkLlxuICAgKlxuICAgKiBTdHJpbmcgZW51bXMgYXJlIHtzdHJpbmcgOiBzdHJpbmd9IGRpY3Rpb25hcmllcyB3aGljaCBhcmUgbm90IHJldmVyc2UgbWFwcGFibGVcbiAgICogVGhpcyBpcyBhbiB1Z2x5IHdvcmthcm91bmRcbiAgICpcbiAgICogQHBhcmFtIGVudW1WYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGVudW1UeXBlIGVudW0gdG8gdmVyaWZ5IGFnYWluc3RcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5RW51bVZhbHVlPEVudW1UeXBlPihlbnVtVmFsdWU6IEVudW1UeXBlLCBlbnVtVHlwZTogYW55KSB7XG4gICAgbGV0IGlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZm9yRWFjaCgoZW51bUtleSkgPT4ge1xuICAgICAgaWYgKGVudW1UeXBlW2VudW1LZXldID09PSBlbnVtVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2VudW1WYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgZW51bTogJHtlbnVtVHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIHBhcmFtcyBtaW4gYW5kIG1heCBmb3IgYXBwbHlpbmcgcmFuZ2UgZmlsdGVyLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICpcbiAgICogQHBhcmFtIG1pbiByYW5nZSBtaW5cbiAgICogQHBhcmFtIG1heCByYW5nZSBtYXhcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5UmFuZ2VQYXJhbVR5cGUobWluOiBhbnksIG1heDogYW55KTogdm9pZCB7XG4gICAgaWYgKCFtaW4gJiYgIW1heCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIGF0IGxlYXN0IG9uZSBvZiBtaW4gb3IgbWF4IGlzIHJlcXVpcmVkLicpO1xuICAgIH1cblxuICAgIGlmIChtaW4gJiYgIVBhcmFtLmlzVHlwZU51bWJlcihtaW4pICYmICFQYXJhbS5pc1R5cGVEYXRlKG1pbikpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBvbmx5IERhdGUgYW5kIG51bWJlciBhcmUgYWxsb3dlZCBmb3IgcGFyYW1ldGVyIG1pbi4nKTtcbiAgICB9XG5cbiAgICBpZiAobWF4ICYmICFQYXJhbS5pc1R5cGVOdW1iZXIobWF4KSAmJiAhUGFyYW0uaXNUeXBlRGF0ZShtYXgpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgb25seSBEYXRlIGFuZCBudW1iZXIgYXJlIGFsbG93ZWQgZm9yIHBhcmFtZXRlciBtYXguJyk7XG4gICAgfVxuXG4gICAgaWYgKG1pbiAmJiBtYXggJiYgdHlwZW9mIChtaW4pICE9PSB0eXBlb2YgKG1heCkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IHNob3VsZCBiZSBvZiB0aGUgc2FtZSB0eXBlLicpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRXJyb3JIZWxwZXJzLnRzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoaXMgZmlsZSByZS1leHBvcnRzIGV2ZXJ5dGhpbmcgd2hpY2ggaXMgcGFydCBvZiB0aGUgZXh0ZW5zaW9ucyBhcGkgcHVibGljIGludGVyZmFjZVxuXG4vLyBFeHBvcnQgZXZlcnl0aGluZyBmcm9tIHRoZSBzaGFyZWQgZmlsZVxuZXhwb3J0ICogZnJvbSAnLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLy8gRXhwb3J0IHRoZSBuYW1lc3BhY2VzIHdoaWNoIGFyZSBzcGVjaWZpYyB0byBleHRlbnNpb25zXG5leHBvcnQgeyBFeHRlbnNpb25zIH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRXh0ZW5zaW9ucyc7XG5leHBvcnQgeyBEYXNoYm9hcmRDb250ZW50IH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudCc7XG5leHBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL0Vudmlyb25tZW50JztcbmV4cG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvU2V0dGluZ3MnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVUknO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwiaW1wb3J0IHtcbiAgQ29sdW1uVHlwZSBhcyBFeHRlcm5hbENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUgYXMgRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLFxuICBEYXRhVHlwZSBhcyBFeHRlcm5hbERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlIGFzIEV4dGVybmFsRGF0ZVJhbmdlVHlwZSxcbiAgRXJyb3JDb2RlcyBhcyBFeHRlcm5hbEVycm9yQ29kZXMsXG4gIEV4dGVuc2lvbkNvbnRleHQgYXMgRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSBhcyBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlLFxuICBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSBhcyBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlIGFzIEV4dGVybmFsRmllbGRSb2xlVHlwZSxcbiAgRmlsdGVyVHlwZSBhcyBFeHRlcm5hbEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLFxuICBQYXJhbWV0ZXJWYWx1ZVR5cGUgYXMgRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUsXG4gIFBlcmlvZFR5cGUgYXMgRXh0ZXJuYWxEYXRlUGVyaW9kLFxuICBTaGVldFR5cGUgYXMgRXh0ZXJuYWxTaGVldFR5cGUsXG59IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBDb2x1bW5UeXBlIGFzIEludGVybmFsQ29sdW1uVHlwZSxcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSBhcyBJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlIGFzIEludGVybmFsRGF0YVR5cGUsXG4gIERhdGVSYW5nZVR5cGUgYXMgSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLFxuICBEYXRlU3RlcFBlcmlvZCBhcyBJbnRlcm5hbERhdGVTdGVwUGVyaW9kLFxuICBEb21haW5SZXN0cmljdGlvblR5cGUgYXMgSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUsXG4gIEVycm9yQ29kZXMgYXMgSW50ZXJuYWxFcnJvckNvZGVzLFxuICBFeHRlbnNpb25Db250ZXh0IGFzIEludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQsXG4gIEV4dGVuc2lvbk1vZGUgYXMgSW50ZXJuYWxFeHRlbnNpb25zTW9kZSxcbiAgRmllbGRBZ2dyZWdhdGlvblR5cGUgYXMgSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZSxcbiAgRmllbGRSb2xlVHlwZSBhcyBJbnRlcm5hbEZpZWxkUm9sZVR5cGUsXG4gIEZpbHRlclR5cGUgYXMgSW50ZXJuYWxGaWx0ZXJUeXBlLFxuICBGaWx0ZXJVcGRhdGVUeXBlIGFzIEludGVybmFsRmlsdGVyVXBkYXRlVHlwZSxcbiAgU2hlZXRUeXBlIGFzIEludGVybmFsU2hlZXRUeXBlLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vVXRpbHMvRW51bUNvbnZlcnRlcic7XG5cbi8qIHRzbGludDpkaXNhYmxlOnR5cGVkZWYgLSBEaXNhYmxlIHRoaXMgdG8gbWFrZSBkZWNsYXJpbmcgdGhlc2UgY2xhc3NlcyBhIGJpdCBlYXNpZXIgKi9cbi8qKlxuICogTWFwcyBlbnVtcyB1c2VkIGJ5IHRoZSBpbnRlcm5hbC1hcGktY29udHJhY3QgdG8gdGhlIGVudW1zIHVzZWRcbiAqIGluIHRoZSBleHRlcm5hbC1hcGktY29udHJhY3QsIHdoaWNoIGRldmVsb3BlcnMgY29kZSBhZ2FpbnN0LlxuICovXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIHtcbiAgcHVibGljIHN0YXRpYyBleHRlbnNpb25Db250ZXh0ID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dCwgRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dD4oe1xuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LkRlc2t0b3BdOiBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LkRlc2t0b3AsXG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuU2VydmVyXTogRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5TZXJ2ZXJcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBleHRlbnNpb25Nb2RlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxFeHRlbnNpb25zTW9kZSwgRXh0ZXJuYWxFeHRlbnNpb25zTW9kZT4oe1xuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLkF1dGhvcmluZ106IEV4dGVybmFsRXh0ZW5zaW9uc01vZGUuQXV0aG9yaW5nLFxuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLlZpZXdpbmddOiBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlLlZpZXdpbmdcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBjb2x1bW5UeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxDb2x1bW5UeXBlLCBFeHRlcm5hbENvbHVtblR5cGU+KHtcbiAgICBbSW50ZXJuYWxDb2x1bW5UeXBlLkNvbnRpbnVvdXNdOiBFeHRlcm5hbENvbHVtblR5cGUuQ29udGludW91cyxcbiAgICBbSW50ZXJuYWxDb2x1bW5UeXBlLkRpc2NyZXRlXTogRXh0ZXJuYWxDb2x1bW5UeXBlLkRpc2NyZXRlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmllbGRBZ2dyZWdhdGlvblR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLCBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlPih7XG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXR0cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXR0cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdmddOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF2ZyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnRkXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudGQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRGF5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5EYXksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRW5kXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5FbmQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSG91cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSG91cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Jbk91dF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSW5PdXQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuS3VydG9zaXNdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkt1cnRvc2lzLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1heF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWF4LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1keV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWR5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1lZGlhbl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWVkaWFuLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWluLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbnV0ZV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWludXRlLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1vbnRoWWVhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTW9udGhZZWFyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk5vbmVdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk5vbmUsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXRyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdHIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQxXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDEsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQzXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDMsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2Vjb25kXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TZWNvbmQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2tld25lc3NdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNrZXduZXNzLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldnBdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2cCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdW1dOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN1bSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0RheV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNEYXksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNIb3VyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0hvdXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNaW51dGVdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTWludXRlLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTW9udGhdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTW9udGgsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNRdHJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jUXRyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jU2Vjb25kXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1NlY29uZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1dlZWtdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jV2VlayxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1llYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jWWVhcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Vc2VyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Vc2VyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcnBdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcnAsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2Vla106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2VlayxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrZGF5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrZGF5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlllYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlllYXIsXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmllbGRSb2xlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmllbGRSb2xlVHlwZSwgRXh0ZXJuYWxGaWVsZFJvbGVUeXBlPih7XG4gICAgW0ludGVybmFsRmllbGRSb2xlVHlwZS5EaW1lbnNpb25dOiBFeHRlcm5hbEZpZWxkUm9sZVR5cGUuRGltZW5zaW9uLFxuICAgIFtJbnRlcm5hbEZpZWxkUm9sZVR5cGUuTWVhc3VyZV06IEV4dGVybmFsRmllbGRSb2xlVHlwZS5NZWFzdXJlLFxuICAgIFtJbnRlcm5hbEZpZWxkUm9sZVR5cGUuVW5rbm93bl06IEV4dGVybmFsRmllbGRSb2xlVHlwZS5Vbmtub3duLFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIHNoZWV0VHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsU2hlZXRUeXBlLCBFeHRlcm5hbFNoZWV0VHlwZT4oe1xuICAgIFtJbnRlcm5hbFNoZWV0VHlwZS5EYXNoYm9hcmRdOiBFeHRlcm5hbFNoZWV0VHlwZS5EYXNoYm9hcmQsXG4gICAgW0ludGVybmFsU2hlZXRUeXBlLlN0b3J5XTogRXh0ZXJuYWxTaGVldFR5cGUuU3RvcnksXG4gICAgW0ludGVybmFsU2hlZXRUeXBlLldvcmtzaGVldF06IEV4dGVybmFsU2hlZXRUeXBlLldvcmtzaGVldFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhc2hib2FyZE9iamVjdFR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUsIEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZT4oe1xuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuRXh0ZW5zaW9uXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkV4dGVuc2lvbixcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkJsYW5rXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkJsYW5rLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuSW1hZ2VdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuSW1hZ2UsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5MZWdlbmRdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuTGVnZW5kLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFnZUZpbHRlcl06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYWdlRmlsdGVyLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFyYW1ldGVyQ29udHJvbF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYXJhbWV0ZXJDb250cm9sLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUXVpY2tGaWx0ZXJdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUXVpY2tGaWx0ZXIsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UZXh0XTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRleHQsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UaXRsZV06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UaXRsZSxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldlYlBhZ2VdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV2ViUGFnZSxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldvcmtzaGVldF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5Xb3Jrc2hlZXRcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXRhVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGF0YVR5cGUsIEV4dGVybmFsRGF0YVR5cGU+KHtcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5Cb29sXTogRXh0ZXJuYWxEYXRhVHlwZS5Cb29sLFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkRhdGVdOiBFeHRlcm5hbERhdGFUeXBlLkRhdGUsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuRGF0ZVRpbWVdOiBFeHRlcm5hbERhdGFUeXBlLkRhdGVUaW1lLFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkZsb2F0XTogRXh0ZXJuYWxEYXRhVHlwZS5GbG9hdCxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5JbnRdOiBFeHRlcm5hbERhdGFUeXBlLkludCxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5TdHJpbmddOiBFeHRlcm5hbERhdGFUeXBlLlN0cmluZ1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclVwZGF0ZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsIEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZCxcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbF06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGwsXG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmVdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlLFxuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZV06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgYWxsb3dhYmxlVmFsdWVzID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUsIEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlPih7XG4gICAgW0ludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLkFsbF06IEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLkFsbCxcbiAgICBbSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUuTGlzdF06IEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLkxpc3QsXG4gICAgW0ludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLlJhbmdlXTogRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUuUmFuZ2VcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXRlU3RlcFBlcmlvZCA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGF0ZVN0ZXBQZXJpb2QsIEV4dGVybmFsRGF0ZVBlcmlvZD4oe1xuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLlllYXJzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLlllYXJzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLlF1YXJ0ZXJzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLlF1YXJ0ZXJzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLk1vbnRoc106IEV4dGVybmFsRGF0ZVBlcmlvZC5Nb250aHMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuV2Vla3NdOiBFeHRlcm5hbERhdGVQZXJpb2QuV2Vla3MsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuRGF5c106IEV4dGVybmFsRGF0ZVBlcmlvZC5EYXlzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLkhvdXJzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLkhvdXJzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLk1pbnV0ZXNdOiBFeHRlcm5hbERhdGVQZXJpb2QuTWludXRlcyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5TZWNvbmRzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLlNlY29uZHNcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXRlUmFuZ2VUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXRlUmFuZ2VUeXBlLCBFeHRlcm5hbERhdGVSYW5nZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLkN1cnJlbnRdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuQ3VycmVudCxcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3RdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdCxcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3ROXTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3ROLFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dF06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0LFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dE5dOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dE4sXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5Ub0RhdGVdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuVG9EYXRlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZXJyb3JDb2RlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxFcnJvckNvZGVzLCBFeHRlcm5hbEVycm9yQ29kZXM+KHtcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLklOSVRJQUxJWkFUSU9OX0VSUk9SXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5JTlRFUk5BTF9FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuTUlTU0lOR19FTlVNX01BUFBJTkddOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLk1JU1NJTkdfUEFSQU1FVEVSXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5QRVJNSVNTSU9OX0RFTklFRF06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuUFJFU19NT0RFTF9QQVJTSU5HX0VSUk9SXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5VTktOT1dOX1ZFUkJfSURdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlZFUlNJT05fTk9UX0NPTkZJR1VSRURdOiBFeHRlcm5hbEVycm9yQ29kZXMuQVBJTm90SW5pdGlhbGl6ZWRcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWx0ZXJUeXBlLCBFeHRlcm5hbEZpbHRlclR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsXTogRXh0ZXJuYWxGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsLFxuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuUmFuZ2VdOiBFeHRlcm5hbEZpbHRlclR5cGUuUmFuZ2UsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGVdOiBFeHRlcm5hbEZpbHRlclR5cGUuUmVsYXRpdmVEYXRlLFxuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuSGllcmFyY2hpY2FsXTogRXh0ZXJuYWxGaWx0ZXJUeXBlLkhpZXJhcmNoaWNhbFxuICB9KTtcbn1cbi8qIHRzbGludDplbmFibGU6dHlwZWRlZiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4ZWN1dGVSZXNwb25zZSxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxuICBJbnRlcm5hbFRhYmxlYXVFcnJvcixcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uLy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBFYWNoIFNlcnZjZUltcGwgc2hvdWxkIGV4dGVuZCB0aGlzIGJhc2UgY2xhc3MgZm9yIHRoZSBzYWtlIG9mXG4gKiBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuICBUaGlzIGJhc2UgaGFuZGxlcyB0aGUgY29udmVyc2lvblxuICogZnJvbSBpbnRlcm5hbCBlcnJvcnMgdG8gZXh0ZXJuYWwgZXJyb3JzIHRoYXQgd2UgdGhyb3cgdG8gZGV2ZWxvcGVyc1xuICovXG5leHBvcnQgY2xhc3MgU2VydmljZUltcGxCYXNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikgeyB9XG5cbiAgcHJvdGVjdGVkIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaGVyLmV4ZWN1dGUodmVyYiwgcGFyYW1zKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIEFueSBpbnRlcm5hbCBlcnJvciB0aGF0IGNvbWVzIGZyb20gdGhlIGRpc3BhdGNoZXIgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICAgICAgLy8gdG8gYW4gZXh0ZXJuYWwgZXJyb3IgdXNpbmcgdGhlIGVudW0gbWFwcGVyIGZvciBlcnJvciBjb2Rlcy5cbiAgICAgIGNvbnN0IGludGVybmFsRXJyb3IgPSBlcnJvciBhcyBJbnRlcm5hbFRhYmxlYXVFcnJvcjtcbiAgICAgIGNvbnN0IGV4dGVybmFsRXJyb3JDb2RlOiBFcnJvckNvZGVzID0gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmVycm9yQ29kZS5jb252ZXJ0KGludGVybmFsRXJyb3IuZXJyb3JDb2RlKTtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoZXh0ZXJuYWxFcnJvckNvZGUsIGludGVybmFsRXJyb3IubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlLnRzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmVyc2lvbk51bWJlciwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgTW9kZWwsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBFbnVtIGRlZmluaW5nIHRoZSA0IGRpZmZlcmVudCB0eXBlcyBvZiBtZXNzYWdlcyB3ZSBoYXZlIGRlZmluZWRcbiAqL1xuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBJbml0aWFsaXplID0gJ2luaXRpYWxpemUnLFxuICBOb3RpZmljYXRpb24gPSAnbm90aWZpY2F0aW9uJyxcbiAgQ29tbWFuZCA9ICdjb21tYW5kJyxcbiAgQ29tbWFuZFJlc3BvbnNlID0gJ2NvbW1hbmQtcmVzcG9uc2UnXG59XG5cbi8qKlxuICogVGhlIE1lc3NhZ2UgaW50ZXJmYWNlIGlzIHRoZSBiYXNlIGludGVyZmFjZSBmb3IgYWxsIHRoZSBvdGhlclxuICogbWVzc2FnZSB0eXBlIGludGVyZmFjZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZCBmb3IgdGhpcyBtZXNzYWdlXG4gICAqL1xuICBtc2dHdWlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoaXMgbWVzc2FnZVxuICAgKi9cbiAgbXNnVHlwZTogTWVzc2FnZVR5cGU7XG59XG5cbi8qKlxuICogVGhlIGluaXRpYWxpemUgbWVzc2FnZSBpcyB0aGUgZmlyc3QgbWVzc2FnZSB3aGljaCB3aWxsIGJlIHNlbnRcbiAqIGZyb20gdGhlIGphdmFzY3JpcHQgdG8gc2V0IHVwIGNvbW11bmljYXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdGlhbGl6ZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBhcGkgd2hpY2ggdGhlIHNlbmRlciB3YW50cyB0byB1c2VcbiAgICovXG4gIGFwaVZlcnNpb246IFZlcnNpb25OdW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoaXMgbWVzc2FnaW5nIGNvbnRyYWN0IHRvIGJlIHVzZWQuIEZvciBub3csIHRoZXJlXG4gICAqIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHZlcnNpb24gYnV0IHNlbmRpbmcgdGhpcyBhbG9uZyBzaG91bGQgaGVscFxuICAgKiBpZiB3ZSBuZWVkIHRvIGFkZCBhIG5ldyB2ZXJzaW9uIGluIGEgZnV0dXJlIHJlbGVhc2VcbiAgICovXG4gIGNyb3NzRnJhbWVWZXJzaW9uOiBWZXJzaW9uTnVtYmVyO1xufVxuXG4vKipcbiAqIFRoaXMgbWVzc2FnZSBpcyBzZW50IHdoZW4gYSBub3RpZmljYXRpb24gb2NjdXJzIGZyb20gdGhlIHByZXNsYXllclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBmb3IgdGhpcyB0eXBlIG9mIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgbm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0YSB3aGljaCBjYW1lIGFsb25nIHdpdGggdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgZGF0YTogTW9kZWw7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBjYWxsaW5nIGFuIGludGVybmFsIGNvbnRyYWN0IGNvbW1hbmRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBjb21tYW5kIHdoaWNoIHNob3VsZCBiZSBleGVjdXRlZFxuICAgKi9cbiAgdmVyYklkOiBWZXJiSWQ7XG5cbiAgLyoqXG4gICAqIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgY29tbWFuZFxuICAgKi9cbiAgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7XG59XG5cbi8qKlxuICogVGhpcyBtZXNzYWdlIGlzIHNlbnQgaW4gcmVzcG9uc2UgdG8gYSBDb21tYW5kTWVzc2FnZSB3aXRoIHRoZVxuICogcmVzdWx0IG9mIHRoYXQgY29tbWFuZHMgaW52b2NhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRSZXNwb25zZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIEd1aWQgb2YgdGhlIENvbW1hbmRNZXNzYWdlIHdoaWNoIHRoaXMgaXMgaW4gcmVzcG9uc2UgdG9cbiAgICovXG4gIGNvbW1hbmRHdWlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRoZXJlIHdhcyBhbiBlcnJvciByZXR1cm5lZCBmcm9tIHRoZSBjb21tYW5kLCB0aGlzIHdpbGwgYmUgZGVmaW5lZFxuICAgKiBhbmQgY29udGFpbiB0aGUgZXJyb3JcbiAgICovXG4gIGVycm9yPzogTW9kZWw7XG5cbiAgLyoqXG4gICAqIElmIHRoZSBjb21tYW5kIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseSwgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIGNvbW1hbmQgcmVzdWx0XG4gICAqL1xuICBkYXRhPzogTW9kZWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBDbGFzcyBkZXNpZ25lZCB0byByZWdpc3RlciBhbmQgdW5yZWdpc3RlciBoYW5kbGVycyBmcm9tIGEgdXNlci4gT25seSB0aG9zZSBldmVudHNcbiAqIHdoaWNoIGFyZSBhZGRlZCB2aWEgQWRkTmV3RXZlbnRUeXBlIHdpbGwgYmUgc3VwcG9ydGVkIGJ5IHRoaXMgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIGltcGxlbWVudHMgQ29udHJhY3QuRXZlbnRMaXN0ZW5lck1hbmFnZXIge1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyTWFuYWdlcnM6IHsgW3RhYmxlYXVFdmVudFR5cGU6IHN0cmluZ106IFNpbmdsZUV2ZW50TWFuYWdlcjsgfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzID0ge307XG4gIH1cblxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUsXG4gICAgaGFuZGxlcjogQ29udHJhY3QuVGFibGVhdUV2ZW50SGFuZGxlckZuKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VW5yZWdpc3RlckZuIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vycy5oYXNPd25Qcm9wZXJ0eShldmVudFR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuVW5zdXBwb3J0ZWRFdmVudE5hbWUsIGBDYW5ub3QgYWRkIGV2ZW50LCB1bnN1cHBvcnRlZCBldmVudCB0eXBlOiAke2V2ZW50VHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50VHlwZV0uYWRkRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSwgaGFuZGxlcjogQ29udHJhY3QuVGFibGVhdUV2ZW50SGFuZGxlckZuKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnMuaGFzT3duUHJvcGVydHkoZXZlbnRUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLlVuc3VwcG9ydGVkRXZlbnROYW1lLCBgQ2Fubm90IHJlbW92ZSBldmVudCwgdW5zdXBwb3J0ZWQgZXZlbnQgdHlwZTogJHtldmVudFR5cGV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vyc1tldmVudFR5cGVdLnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkTmV3RXZlbnRUeXBlKGV2ZW50TWFuYWdlcjogU2luZ2xlRXZlbnRNYW5hZ2VyKTogdm9pZCB7XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50TWFuYWdlci5ldmVudFR5cGVdID0gZXZlbnRNYW5hZ2VyO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudExpc3RlbmVyTWFuYWdlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyB0aGUgU2luZ2xlRXZlbnRNYW5hZ2VyIGludGVyZmFjZSBmb3IgYSBzaW5nbGUgdHlwZSBvZiBUYWJsZWF1IGV2ZW50XG4gKlxuICogQHRlbXBsYXRlIFRFdmVudFR5cGUgVGhlIFRhYmxlYXUgZXZlbnQgdHlwZSB0aGlzIGNsYXNzIHNwZWNpYWxpemVzXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPFRFdmVudFR5cGUgZXh0ZW5kcyBDb250cmFjdC5UYWJsZWF1RXZlbnQ+IGltcGxlbWVudHMgU2luZ2xlRXZlbnRNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfZXZlbnRUeXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlO1xuICBwcml2YXRlIF9oYW5kbGVyczogQXJyYXk8KGV2ZW50T2JqOiBURXZlbnRUeXBlKSA9PiB2b2lkPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXZlbnRUeXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlKSB7XG4gICAgdGhpcy5fZXZlbnRUeXBlID0gZXZlbnRUeXBlO1xuICAgIHRoaXMuX2hhbmRsZXJzID0gW107XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV2ZW50VHlwZSgpOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRUeXBlO1xuICB9XG5cbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoaGFuZGxlcjogKGV2ZW50T2JqOiBURXZlbnRUeXBlKSA9PiB2b2lkKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VW5yZWdpc3RlckZuIHtcbiAgICB0aGlzLl9oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyOiAoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQpOiBib29sZWFuIHtcbiAgICBjb25zdCBiZWZvcmVDb3VudCA9IHRoaXMuX2hhbmRsZXJzLmxlbmd0aDtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzLmZpbHRlcihoID0+IGggIT09IGhhbmRsZXIpO1xuICAgIHJldHVybiBiZWZvcmVDb3VudCA+IHRoaXMuX2hhbmRsZXJzLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyB0cmlnZ2VyRXZlbnQoZXZlbnRHZW5lcmF0b3I6ICgpID0+IFRFdmVudFR5cGUpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5faGFuZGxlcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TW9kZWwgPSBldmVudEdlbmVyYXRvcigpO1xuICAgICAgICBoYW5kbGVyKGV2ZW50TW9kZWwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBTaW5jZSB0aGlzIGhhbmRsZXIgY291bGQgYmUgb3V0c2lkZSBvdXIgY29udHJvbCwganVzdCBjYXRjaCBhbnl0aGluZyBpdCB0aHJvd3MgYW5kIGNvbnRpbnVlIG9uXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaW5nbGVFdmVudE1hbmFnZXJJbXBsLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUGFyYW0ge1xuICAvKipcbiAgICogc2VyaWFsaXplcyB0aGUgZGF0ZSBpbnRvIHRoZSBmb3JtYXQgdGhhdCB0aGUgc2VydmVyIGV4cGVjdHMuXG4gICAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIHNlcmlhbGl6ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgeWVhcjogbnVtYmVyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSBkYXRlLmdldFVUQ01vbnRoKCkgKyAxO1xuICAgIGNvbnN0IGRheTogbnVtYmVyID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgY29uc3QgaGg6IG51bWJlciA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBjb25zdCBtbTogbnVtYmVyID0gZGF0ZS5nZXRVVENNaW51dGVzKCk7XG4gICAgY29uc3Qgc2VjOiBudW1iZXIgPSBkYXRlLmdldFVUQ1NlY29uZHMoKTtcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9ICR7aGh9OiR7bW19OiR7c2VjfWA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZUJvb2xlYW5Gb3JQbGF0Zm9ybShib29sOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYm9vbCA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZU51bWJlckZvclBsYXRmb3JtKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgaW5wdXQgaXMgYSBudW1iZXJcbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZU51bWJlcihpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoaW5wdXQpID09PSAnbnVtYmVyJyB8fCBpbnB1dCBpbnN0YW5jZW9mIE51bWJlcjtcbiAgfVxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgaW5wdXQgaXMgYSBEYXRlXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVEYXRlKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBEYXRlO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZVN0cmluZyhpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoaW5wdXQpID09PSAnc3RyaW5nJyB8fCBpbnB1dCBpbnN0YW5jZW9mIFN0cmluZztcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVCb29sKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdib29sZWFuJyB8fCBpbnB1dCBpbnN0YW5jZW9mIEJvb2xlYW47XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplUGFyYW10ZXJWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoUGFyYW0uaXNUeXBlTnVtYmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFBhcmFtLnNlcmlhbGl6ZU51bWJlckZvclBsYXRmb3JtKHZhbHVlIGFzIG51bWJlcik7XG4gICAgfSBlbHNlIGlmIChQYXJhbS5pc1R5cGVEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFBhcmFtLnNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybSh2YWx1ZSBhcyBEYXRlKTtcbiAgICB9IGVsc2UgaWYgKFBhcmFtLmlzVHlwZUJvb2wodmFsdWUpKSB7XG4gICAgICByZXR1cm4gUGFyYW0uc2VyaWFsaXplQm9vbGVhbkZvclBsYXRmb3JtKHZhbHVlIGFzIGJvb2xlYW4pO1xuICAgIH0gZWxzZSBpZiAoUGFyYW0uaXNUeXBlU3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYFVuZXhwZWN0ZWQgaW52YWxpZCB2YWx1ZSBmb3I6ICR7dmFsdWV9YCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9QYXJhbS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlIGltcGxlbWVudHMgQ29udHJhY3QuRGF0YVRhYmxlIHtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kYXRhOiBBcnJheTxBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+PixcbiAgICBwcml2YXRlIF9jb2x1bW5zOiBBcnJheTxDb250cmFjdC5Db2x1bW4+LFxuICAgIHByaXZhdGUgX3RvdGFsUm93Q291bnQ6IG51bWJlcixcbiAgICBwcml2YXRlIF9pc1RvdGFsUm93Q291bnRMaW1pdGVkOiBib29sZWFuLFxuICAgIHByaXZhdGUgX2lzU3VtbWFyeURhdGE6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfbWFya3NJbmZvPzogQXJyYXk8TWFya0luZm8+KSB7XG4gICAgLy8gVE9ETzogZ2V0IHJpZCBvZiB0aGlzIGluIHJlZGVzaWduLlxuICAgIHRoaXMuX25hbWUgPSBfaXNTdW1tYXJ5RGF0YSA/ICdTdW1tYXJ5IERhdGEgVGFibGUnIDogJ1VuZGVybHlpbmcgRGF0YSBUYWJsZSc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBBcnJheTxBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKTogQXJyYXk8Q29udHJhY3QuQ29sdW1uPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hcmtzSW5mbygpOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXJrc0luZm87XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRvdGFsUm93Q291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxSb3dDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNUb3RhbFJvd0NvdW50TGltaXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNUb3RhbFJvd0NvdW50TGltaXRlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNTdW1tYXJ5RGF0YSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTdW1tYXJ5RGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFya0luZm8gaW1wbGVtZW50cyBDb250cmFjdC5NYXJrSW5mbyB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90eXBlOiBDb250cmFjdC5NYXJrVHlwZSxcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nLFxuICAgIHByaXZhdGUgX3R1cGxlSWQ/OiBOdW1iZXJcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuTWFya1R5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHVwbGVJZCgpOiBOdW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90dXBsZUlkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW4gaW1wbGVtZW50cyBDb250cmFjdC5Db2x1bW4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZmllbGROYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfZGF0YVR5cGU6IENvbnRyYWN0LkRhdGFUeXBlLCAvLyBUT0RPOiB0aGlzIHNob3VkbCBiZSBhbiBlbnVtIHR5cGVcbiAgICBwcml2YXRlIF9pc1JlZmVyZW5jZWQ6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlcikgeyB9XG5cbiAgcHVibGljIGdldCBmaWVsZE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhVHlwZSgpOiBDb250cmFjdC5EYXRhVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1JlZmVyZW5jZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVmZXJlbmNlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFWYWx1ZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueSxcbiAgICBwcml2YXRlIF9mb3JtYXR0ZWRWYWx1ZTogc3RyaW5nKSB7IH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXR0ZWRWYWx1ZTtcbiAgfVxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL0dldERhdGFNb2RlbHMudHMiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gKCkge1xuICB2YXIgdmFsaWRhdG9yID0gbmV3IFJlZ0V4cChcIl5bYS16MC05XXs4fS1bYS16MC05XXs0fS1bYS16MC05XXs0fS1bYS16MC05XXs0fS1bYS16MC05XXsxMn0kXCIsIFwiaVwiKTtcblxuICBmdW5jdGlvbiBnZW4oY291bnQpIHtcbiAgICB2YXIgb3V0ID0gXCJcIjtcbiAgICBmb3IgKHZhciBpPTA7IGk8Y291bnQ7IGkrKykge1xuICAgICAgb3V0ICs9ICgoKDErTWF0aC5yYW5kb20oKSkqMHgxMDAwMCl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEd1aWQoZ3VpZCkge1xuICAgIGlmICghZ3VpZCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXJndW1lbnQ7IGB2YWx1ZWAgaGFzIG5vIHZhbHVlLlwiKTtcbiAgICAgIFxuICAgIHRoaXMudmFsdWUgPSBHdWlkLkVNUFRZO1xuICAgIFxuICAgIGlmIChndWlkICYmIGd1aWQgaW5zdGFuY2VvZiBHdWlkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZ3VpZC50b1N0cmluZygpO1xuXG4gICAgfSBlbHNlIGlmIChndWlkICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChndWlkKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIiAmJiBHdWlkLmlzR3VpZChndWlkKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGd1aWQ7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIC8vIENvbXBhcmluZyBzdHJpbmcgYHZhbHVlYCBhZ2FpbnN0IHByb3ZpZGVkIGBndWlkYCB3aWxsIGF1dG8tY2FsbFxuICAgICAgLy8gdG9TdHJpbmcgb24gYGd1aWRgIGZvciBjb21wYXJpc29uXG4gICAgICByZXR1cm4gR3VpZC5pc0d1aWQob3RoZXIpICYmIHRoaXMudmFsdWUgPT0gb3RoZXI7XG4gICAgfTtcblxuICAgIHRoaXMuaXNFbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IEd1aWQuRU1QVFk7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIFxuICAgIHRoaXMudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIEd1aWQuRU1QVFkgPSBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiO1xuXG4gIEd1aWQuaXNHdWlkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlIGluc3RhbmNlb2YgR3VpZCB8fCB2YWxpZGF0b3IudGVzdCh2YWx1ZS50b1N0cmluZygpKSk7XG4gIH07XG5cbiAgR3VpZC5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEd1aWQoW2dlbigyKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigxKSwgZ2VuKDMpXS5qb2luKFwiLVwiKSk7XG4gIH07XG5cbiAgR3VpZC5yYXcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW2dlbigyKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigxKSwgZ2VuKDMpXS5qb2luKFwiLVwiKTtcbiAgfTtcblxuICBpZih0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBHdWlkO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuR3VpZCA9IEd1aWQ7XG4gIH1cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvZ3VpZC9ndWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRXZlbnRMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0V2ZW50TGlzdGVuZXJNYW5hZ2VyJztcblxuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9JbXBsL1NoZWV0SW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldCBleHRlbmRzIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIGltcGxlbWVudHMgQ29udHJhY3QuU2hlZXQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hlZXRJbXBsOiBTaGVldEltcGwpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogQ29udHJhY3QuU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLnNoZWV0VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBDb250cmFjdC5TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLnNpemU7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckFzeW5jKHBhcmFtZXRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5maW5kUGFyYW1ldGVyQXN5bmMocGFyYW1ldGVyTmFtZSwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyYW1ldGVyc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuUGFyYW1ldGVyPj4ge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuZ2V0UGFyYW1ldGVyc0FzeW5jKHRoaXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaGVldC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnZlcnRzIGZyb20gYSBzb3VyY2UgZW51bSB2YWx1ZSB0byBkZXN0aW5hdGlvbiBlbnVtXG4gKiB2YWx1ZSBnaXZlbiBhIG1hcHBpbmcgZnJvbSBzb3VyY2UgdG8gZGVzdGluYXRpb24gd2hlbiBjb25zdHJ1Y3RlZC5cbiAqXG4gKiBOb3RlOiBUaGlzIGV4YWN0IHNhbWUgY2xhc3MgaXMgZGVmaW5lZCBpbiBhcGktY29yZS4gIEdpdmVuIGl0cyBzbWFsbFxuICogbmF0dXJlLCBpdCBpcyBub3Qgd29ydGggaGF2aW5nIGluIGEgc2VwYXJhdGUgcHJvamVjdCB0byBzaGFyZSB0aGlzIGJldHdlZW5cbiAqIGFwaS1jb3JlIGFuZCBhcGktc2hhcmVkLiAgSWYgbW9yZSB1dGlsaXR5IGZ1bmN0aW9uYWxpdHkgaXMgYWRkZWQgdGhhdCBpcyB1c2VkIGJ5IGFwaS1jb3JlXG4gKiBhbmQgYXBpLXNoYXJlZCBidXQgaGFzIG5vIG90aGVyIGRlcGVuZGVjaWVzLCBhIHV0aWx0aXR5IHByb2plY3QgbWlnaHQgYmUgbWVyaXRlZCxcbiAqIGFuZCB0aGlzIGNsYXNzIGNvdWxkIGJlIG1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgRW51bUNvbnZlcnRlcjxUU291cmNlVHlwZSBleHRlbmRzIHN0cmluZywgVERlc3RpbmF0aW9uVHlwZT4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbWFwcGluZ3M6IHsgW2VudW1WYWw6IHN0cmluZ106IFREZXN0aW5hdGlvblR5cGU7IH0sXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFZhbD86IFREZXN0aW5hdGlvblR5cGUpIHsgfVxuXG4gIHB1YmxpYyBjb252ZXJ0KGVudW1WYWw6IFRTb3VyY2VUeXBlLCB0aHJvd0lmTWlzc2luZz86IGJvb2xlYW4pOiBURGVzdGluYXRpb25UeXBlIHtcbiAgICBpZiAodGhpcy5fbWFwcGluZ3MuaGFzT3duUHJvcGVydHkoZW51bVZhbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXBwaW5nc1tlbnVtVmFsIGFzIHN0cmluZ107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlZmF1bHRWYWwgIT09IHVuZGVmaW5lZCAmJiAhdGhyb3dJZk1pc3NpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgRW51bSBNYXBwaW5nIG5vdCBmb3VuZCBmb3I6ICR7ZW51bVZhbH1gKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvRW51bUNvbnZlcnRlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdUV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuVGFibGVhdUV2ZW50IHtcbiAgcHJpdmF0ZSBfdHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdUV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTaGVldFBhdGggfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTaGVldEluZm9JbXBsIH0gZnJvbSAnLi9TaGVldEluZm9JbXBsJztcblxuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NoZWV0SW5mb0ltcGw6IFNoZWV0SW5mb0ltcGwpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0VHlwZSgpOiBDb250cmFjdC5TaGVldFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLnNoZWV0VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRQYXRoKCk6IFNoZWV0UGF0aCB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRQYXRoO1xuICB9XG5cbiAgcHVibGljIGdldCBzaXplKCk6IENvbnRyYWN0LlNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEluZm9JbXBsLnNoZWV0U2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUGFyYW1ldGVyQXN5bmMocGFyYW1ldGVyTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIocGFyYW1ldGVyTmFtZSwgJ3BhcmFtZXRlck5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNoZWV0LCAnc2hlZXQnKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlLmZpbmRQYXJhbWV0ZXJCeU5hbWVBc3luYyhwYXJhbWV0ZXJOYW1lLCBzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGFyYW1ldGVyc0FzeW5jKHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuUGFyYW1ldGVyPj4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0UGFyYW1ldGVyc0ZvclNoZWV0QXN5bmModGhpcy5zaGVldFBhdGgsIHNoZWV0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL0ltcGwvRGF0YVNvdXJjZUltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNvdXJjZUltcGw6IERhdGFTb3VyY2VJbXBsKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkcygpOiBBcnJheTxDb250cmFjdC5GaWVsZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5maWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV4dHJhY3RVcGRhdGVUaW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmV4dHJhY3RVcGRhdGVUaW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4dHJhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmlzRXh0cmFjdDtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLnJlZnJlc2hBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRBY3RpdmVUYWJsZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM/OiBDb250cmFjdC5EYXRhU291cmNlVW5kZXJseWluZ0RhdGFPcHRpb25zKTpcbiAgICBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5nZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXRhU291cmNlLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4vRmllbGRJbXBsJztcblxuaW1wb3J0IHsgQ29ubmVjdGlvblN1bW1hcnkgfSBmcm9tICcuLi9Db25uZWN0aW9uU3VtbWFyeSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL0ZpZWxkJztcbmltcG9ydCB7IFRhYmxlU3VtbWFyeSB9IGZyb20gJy4uL1RhYmxlU3VtbWFyeSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZUltcGwge1xuICBwcml2YXRlIF9maWVsZHM6IEFycmF5PEZpZWxkPjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNvdXJjZUluZm86IEludGVybmFsQ29udHJhY3QuRGF0YVNvdXJjZSkge1xuICAgIHRoaXMuX2ZpZWxkcyA9IF9kYXRhU291cmNlSW5mby5maWVsZHMubWFwKGZpZWxkTW9kZWwgPT4ge1xuICAgICAgY29uc3QgZmllbGRJbXBsID0gbmV3IEZpZWxkSW1wbChmaWVsZE1vZGVsLCB0aGlzKTtcbiAgICAgIHJldHVybiBuZXcgRmllbGQoZmllbGRJbXBsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXh0cmFjdFVwZGF0ZVRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uZXh0cmFjdFVwZGF0ZVRpbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkcygpOiBBcnJheTxDb250cmFjdC5GaWVsZD4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXh0cmFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUluZm8uaXNFeHRyYWN0O1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhU291cmNlU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVNlcnZpY2UucmVmcmVzaEFzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeVtdPiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oXG4gICAgICBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VTZXJ2aWNlLmdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCkudGhlbjxDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeVtdPihzdW1tYXJpZXMgPT4ge1xuICAgICAgcmV0dXJuIHN1bW1hcmllcy5tYXAoc3VtbWFyeSA9PiBuZXcgQ29ubmVjdGlvblN1bW1hcnkoc3VtbWFyeSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuVGFibGVTdW1tYXJ5Pj4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBkYXRhU291cmNlU2VydmljZS5nZXRBY3RpdmVUYWJsZXNBc3luYyh0aGlzLl9kYXRhU291cmNlSW5mby5pZCkudGhlbjxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+Pih0YWJsZUluZm9zID0+IHtcbiAgICAgIHJldHVybiB0YWJsZUluZm9zLm1hcCh0YWJsZUluZm8gPT4gbmV3IFRhYmxlU3VtbWFyeSh0YWJsZUluZm8pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM/OiBDb250cmFjdC5EYXRhU291cmNlVW5kZXJseWluZ0RhdGFPcHRpb25zKTpcbiAgICBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuXG4gICAgY29uc3QgZ2V0RGF0YVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIGdldERhdGFTZXJ2aWNlLmdldERhdGFTb3VyY2VEYXRhQXN5bmMoXG4gICAgICB0aGlzLmlkLFxuICAgICAgISFvcHRpb25zLmlnbm9yZUFsaWFzZXMsXG4gICAgICBvcHRpb25zLm1heFJvd3MgfHwgMCwgICAgICAgLy8gMCBhbmQgW10gYXJlIGRlZmF1bHRzXG4gICAgICBvcHRpb25zLmNvbHVtbnNUb0luY2x1ZGUgfHwgW10pO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoZGF0YVNvdXJjZSwgJ2RhdGFTb3VyY2UnKTtcblxuICAgIHRoaXMuX2ZpZWxkcyA9IHRoaXMuX2RhdGFTb3VyY2VJbmZvLmZpZWxkcy5tYXAoZmllbGRNb2RlbCA9PiB7XG4gICAgICBjb25zdCBmaWVsZEltcGwgPSBuZXcgRmllbGRJbXBsKGZpZWxkTW9kZWwsIGRhdGFTb3VyY2UpO1xuICAgICAgcmV0dXJuIG5ldyBGaWVsZChmaWVsZEltcGwpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0RhdGFTb3VyY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuXG5leHBvcnQgY2xhc3MgRmllbGRJbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpZWxkSW5mbzogSW50ZXJuYWxDb250cmFjdC5GaWVsZCxcbiAgICBwcml2YXRlIF9wYXJlbnREYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvbigpOiBDb250cmFjdC5GaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5maWVsZEFnZ3JlZ2F0aW9uVHlwZS5jb252ZXJ0KHRoaXMuX2ZpZWxkSW5mby5hZ2dyZWdhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFTb3VyY2UoKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERhdGFTb3VyY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGUoKTogQ29udHJhY3QuRmllbGRSb2xlVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5maWVsZFJvbGVUeXBlLmNvbnZlcnQodGhpcy5fZmllbGRJbmZvLnJvbGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzSGlkZGVuO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0dlbmVyYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzR2VuZXJhdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbGN1bGF0ZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzQ2FsY3VsYXRlZEZpZWxkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbWJpbmVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW5mby5pc0NvbWJpbmVkRmllbGQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRmllbGRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEZpZWxkSW1wbCB9IGZyb20gJy4vSW1wbC9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIENvbnRyYWN0LkZpZWxkIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpZWxkSW1wbDogRmllbGRJbXBsKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvbigpOiBDb250cmFjdC5GaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5hZ2dyZWdhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmRhdGFTb3VyY2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvbGUoKTogQ29udHJhY3QuRmllbGRSb2xlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5yb2xlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzSGlkZGVuO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0dlbmVyYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzR2VuZXJhdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NhbGN1bGF0ZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzQ2FsY3VsYXRlZEZpZWxkO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5UeXBlKCk6IENvbnRyYWN0LkNvbHVtblR5cGUge1xuICAgIHRocm93IEVycm9ySGVscGVycy5hcGlOb3RJbXBsZW1lbnRlZCgnRmllbGQuY29sdW1uVHlwZScpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbWJpbmVkRmllbGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSW1wbC5pc0NvbWJpbmVkRmllbGQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ZpZWxkLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVTaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1U2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgZXh0ZW5kcyBUYWJsZWF1U2hlZXRFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlYXVXb3Jrc2hlZXRFdmVudCB7XG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0KCk6IENvbnRyYWN0LldvcmtzaGVldCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBwcm90ZWN0ZWQgX3dvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0KSB7XG4gICAgc3VwZXIodHlwZSwgX3dvcmtzaGVldCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1V29ya3NoZWV0RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVhdVNoZWV0RXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1U2hlZXRFdmVudCB7XG4gIHByaXZhdGUgX3NoZWV0OiBDb250cmFjdC5TaGVldDtcblxuICBwdWJsaWMgZ2V0IHNoZWV0KCk6IENvbnRyYWN0LlNoZWV0IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXQ7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IodHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSwgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLl9zaGVldCA9IHNoZWV0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFZpc3VhbElkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vU2VydmljZVJlZ2lzdHJ5JztcblxuLyoqXG4gKiBEZWZpbmVzIHdoaWNoIHR5cGUgb2YgZ2V0RGF0YSBjYWxsIHRvIG1ha2UuXG4gKi9cbmV4cG9ydCBlbnVtIEdldERhdGFUeXBlIHtcbiAgU3VtbWFyeSA9ICdzdW1tYXJ5JyxcbiAgVW5kZXJseWluZyA9ICd1bmRlcmx5aW5nJ1xufVxuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGltcGxlbWVudGluZyB0aGUgbG9naWMgZm9yIHZhcmlvdXMgZ2V0RGF0YSBjYWxsc1xuICpcbiAqIEBpbnRlcmZhY2UgR2V0RGF0YVNlcnZpY2VcbiAqIEBleHRlbmRzIHtBcGlTZXJ2aWNlfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdldERhdGFTZXJ2aWNlIGV4dGVuZHMgQXBpU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxpbWl0IG9mIHJvd3MgZm9yIGdldFVuZGVybHlpbmdEYXRhQXN5bmNcbiAgICovXG4gIGdldE1heFJvd0xpbWl0KCk6IG51bWJlcjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgdW5kZXJseWluZyBkYXRhIGZvciBhIHBhcnRpY3VsYXIgdmlzdWFsXG4gICAqXG4gICAqIEBwYXJhbSB7VmlzdWFsSWR9IHZpc3VhbElkICBUaGUgdmlzdWFsIHRvIGdldCBkYXRhIGZvclxuICAgKiBAcGFyYW0ge0dldERhdGFUeXBlfSBnZXRUeXBlICBUaGUgdHlwZSBvZiBnZXREYXRhIGNhbGwgdG8gbWFrZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZUFsaWFzZXMgIFdoZXRoZXIgb3Igbm90IGFsaWFzZXMgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBpZ25vcmVTZWxlY3Rpb24gIFdoZXRoZXIgb3Igbm90IHNlbGVjdGlvbiBzaG91bGQgYmUgaWdub3JlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluY2x1ZGVBbGxDb2x1bW5zICBTaG91bGQgYWxsIGNvbHVtbnMgYmUgaW5jbHVkZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFJvd3MgIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gcmV0dXJuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT59ICBEYXRhIHRhYmxlIHdpdGggdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqL1xuICBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKFxuICAgIHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBnZXRUeXBlOiBHZXREYXRhVHlwZSxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIGlnbm9yZVNlbGVjdGlvbjogYm9vbGVhbixcbiAgICBpbmNsdWRlQWxsQ29sdW1uczogYm9vbGVhbixcbiAgICBtYXhSb3dzOiBudW1iZXIpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBtYXJrcyBmb3IgYSBnaXZlbiB2aXN1YWxcbiAgICpcbiAgKiBAcGFyYW0ge1Zpc3VhbElkfSB2aXN1YWxJZCAgVGhlIHZpc3VhbCB0byBnZXQgZGF0YSBmb3JcbiAgKiBAcmV0dXJucyB7UHJvbWlzZTxBY3RpdmVNYXJrcz59ICBDb2xsZWN0aW9uIG9mIGRhdGEgdGFibGVzIHdpdGggdGhlIGFjdGl2ZSBtYXJrc1xuICAqL1xuICBnZXRTZWxlY3RlZE1hcmtzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgbWFya3MgZm9yIGEgZ2l2ZW4gdmlzdWFsXG4gICAqXG4gICogQHBhcmFtIHtWaXN1YWxJZH0gdmlzdWFsSWQgIFRoZSB2aXN1YWwgdG8gZ2V0IGRhdGEgZm9yXG4gICogQHJldHVybnMge1Byb21pc2U8QWN0aXZlTWFya3M+fSAgQ29sbGVjdGlvbiBvZiBkYXRhIHRhYmxlcyB3aXRoIHRoZSBhY3RpdmUgbWFya3NcbiAgKi9cbiAgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPjtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFzb3VyY2VJZCAgVGhlIGlkIG9mIHRoZSBkYXRhc291cmNlIHRvIGdldCBkYXRhIGZvclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZUFsaWFzZXMgIFdoZXRoZXIgYWxpYXMgdmFsdWVzIHNob3VsZCBiZSBpZ25vcmVkIGluIHRoZSByZXR1cm5lZCBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhSb3dzIFRoZSBtYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIHJldHJpZXZlXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gY29sdW1uc1RvSW5jbHVkZSAgQ29sbGVjdGlvbiBvZiBjb2x1bW4gY2FwdGlvbnMgd2hpY2ggc2hvdWxkIGJlIHJldHVybmVkLiBFbXB0eSBtZWFucyBhbGwgY29sdW1uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+fSAgRGF0YSB0YWJsZSB3aXRoIHRoZSByZXF1ZXN0ZWQgZGF0YVxuICAgKi9cbiAgZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICBkYXRhc291cmNlSWQ6IHN0cmluZyxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcixcbiAgICBjb2x1bW5zVG9JbmNsdWRlOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvR2V0RGF0YVNlcnZpY2UudHMiLCIvKipcbiAqIFRoaXMgaXMgeW91ciBtYWluLiBUaGlzIGlzIHdoZXJlIHlvdSByZS1leHBvcnQgZXZlcnl0aGluZyB5b3Ugd2FudCB0byBiZSBwdWJsaWNseSBhdmFpbGFibGUuXG4gKlxuICogVGhlIGJ1aWxkIGVuZm9yY2VzIHRoYXQgdGhlIGZpbGUgaGFzIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGdsb2JhbCB2YXJpYWJsZSB0aGF0IGlzIGV4cG9ydGVkLlxuICovXG5cbi8vIFRoZSBmb2xsb3dpbmcgcG9seWZpbGxzIGFyZSBuZWVkZWQgZm9yIElFMTFcbmltcG9ydCAnY29yZS1qcy9mbi9wcm9taXNlJztcbmltcG9ydCAnY29yZS1qcy9mbi9hcnJheS9maW5kJztcbmltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJztcblxuLy8gRHVlIHRvIHRoZSB3YXkgd2UgY29uZmlndXJlZCB3ZWJwYWNrLCB3ZSBzaG91bGQgYmUgZXhwb3J0aW5nIHRoaW5ncyB3aGljaCB3aWxsIGJlIHVuZGVyXG4vLyBhIGdsb2JhbCB2YXJpYWJsZSBjYWxsZWQgXCJ0YWJsZWF1XCIuIEV4cG9ydCBldmVyeXRoaW5nIHdlIHdhbnQgdG8gYmUgdmlzaWJsZSB1bmRlciB0YWJsZWF1XG4vLyBmcm9tIHRoaXMgZmlsZS5cblxuaW1wb3J0IHsgRXh0ZW5zaW9uc0ltcGwgfSBmcm9tICcuL0V4dGVuc2lvbnNBcGkvSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5pbXBvcnQgeyBFeHRlbnNpb25zIH0gZnJvbSAnLi9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi9BcGlTaGFyZWQnO1xuXG5kZWNsYXJlIHZhciBFWFRFTlNJT05fQVBJX1ZFUlNJT05fTlVNQkVSOiBzdHJpbmc7XG5WZXJzaW9uTnVtYmVyLlNldFZlcnNpb25OdW1iZXIodHlwZW9mIEVYVEVOU0lPTl9BUElfVkVSU0lPTl9OVU1CRVIgIT09ICd1bmRlZmluZWQnID8gRVhURU5TSU9OX0FQSV9WRVJTSU9OX05VTUJFUiA6ICcwLjAuMCcpO1xuXG5jb25zdCBleHRlbnNpb25JbXBsID0gbmV3IEV4dGVuc2lvbnNJbXBsKCk7XG5leHBvcnQgY29uc3QgZXh0ZW5zaW9ucyA9IG5ldyBFeHRlbnNpb25zKGV4dGVuc2lvbkltcGwpO1xuXG4vLyBFeHBvcnQgRW51bXNcbi8vIFRoZXNlIHNob3cgdXAgdW5kZXIgdGhlIHRhYmxlYXUgb2JqZWN0LiBJLmUuIHRhYmxlYXUuRXh0ZW5zaW9uQ29udGV4dC5TZXJ2ZXJcbmV4cG9ydCB7XG4gIEV4dGVuc2lvbkNvbnRleHQsXG4gIEV4dGVuc2lvbk1vZGUsXG4gIEFuYWx5dGljc09iamVjdFR5cGUsXG4gIENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlLFxuICBFbmNvZGluZ1R5cGUsXG4gIEVycm9yQ29kZXMsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJEb21haW5UeXBlLFxuICBGaWx0ZXJUeXBlLFxuICBGaWx0ZXJVcGRhdGVUeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uLFxuICBNYXJrVHlwZSxcbiAgUGFyYW1ldGVyVmFsdWVUeXBlLFxuICBQZXJpb2RUeXBlLFxuICBRdWlja1RhYmxlQ2FsY1R5cGUsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUsXG4gIFNoZWV0VHlwZSxcbiAgU29ydERpcmVjdGlvbixcbiAgVGFibGVhdUV2ZW50VHlwZSxcbiAgVHJlbmRMaW5lTW9kZWxUeXBlXG59IGZyb20gJy4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9FeHRlbnNpb25zQXBpLnRzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5maW5kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vYXJyYXkvZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIENvbnRleHRNZW51RXZlbnQsXG4gIEV4dGVuc2lvbkRhc2hib2FyZEluZm8sXG4gIEV4dGVuc2lvblNldHRpbmdzSW5mbyxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyLFxuICBOb3RpZmljYXRpb25JZCxcbiAgU2hlZXRQYXRoLFxuICBJTlRFUk5BTF9DT05UUkFDVF9WRVJTSU9OLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIERhc2hib2FyZCxcbiAgRGFzaGJvYXJkSW1wbCxcbiAgZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwLFxuICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICByZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLFxuICBTZXJ2aWNlTmFtZXNcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGVudCB9IGZyb20gJy4uL05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4uL05hbWVzcGFjZXMvRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuLi9OYW1lc3BhY2VzL1NldHRpbmdzJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi4vTmFtZXNwYWNlcy9VSSc7XG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyc7XG5pbXBvcnQgeyBTZXR0aW5nc0ltcGwgfSBmcm9tICcuL1NldHRpbmdzSW1wbCc7XG5pbXBvcnQgeyBVSUltcGwgfSBmcm9tICcuL1VJSW1wbCc7XG5cbmV4cG9ydCB0eXBlIENhbGxiYWNrTWFwID0geyBba2V5OiBzdHJpbmddOiAoKSA9PiB7fSB9O1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc0ltcGwge1xuICBwcml2YXRlIF9pbml0aWFsaXphdGlvblByb21pc2U6IFByb21pc2U8c3RyaW5nPjtcblxuICBwdWJsaWMgZGFzaGJvYXJkQ29udGVudDogRGFzaGJvYXJkQ29udGVudDtcbiAgcHVibGljIGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcbiAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgcHVibGljIHVpOiBVSTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZUFzeW5jKGlzRXh0ZW5zaW9uRGlhbG9nOiBib29sZWFuLCBjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6YXRpb25Qcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIEZpcnN0IHRoaW5nIHdlIHdhbnQgdG8gZG8gaXMgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGlzIGEgZGVza3RvcCBkaXNwYXRjaGVyIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgdXNcbiAgICAgICAgaWYgKEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5oYXNEZXNrdG9wQXBpRGlzcGF0Y2hlclByb21pc2UoKSkge1xuICAgICAgICAgIC8vIFJ1bm5pbmcgaW4gZGVza3RvcCwgdXNlIHRoaXMgcHJvbWlzZVxuICAgICAgICAgIGNvbnN0IGRlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZSA9IEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5nZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoKTtcblxuICAgICAgICAgIGRlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZS50aGVuKChkaXBhdGNoZXJGYWN0b3J5KSA9PlxuICAgICAgICAgICAgdGhpcy5vbkRpc3BhdGNoZXJSZWNlaXZlZChkaXBhdGNoZXJGYWN0b3J5LCBpc0V4dGVuc2lvbkRpYWxvZywgY29udGV4dE1lbnVDYWxsYmFja3MpKVxuICAgICAgICAgICAgLnRoZW4oKG9wZW5QYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUob3BlblBheWxvYWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV2UgbXVzdCBiZSBydW5uaW5nIGluIHNlcnZlciwgc28gd2Ugc2hvdWxkIHRyeSB0byBraWNrIG9mIHRoZSBzZXJ2ZXIgZGlzcGF0Y2hlciBib290c3RyYXBwaW5nXG4gICAgICAgICAgY29uc3Qgb25EaXNwYXRjaGVyUmVjZWl2ZWRDYWxsYmFjayA9IHRoaXMub25EaXNwYXRjaGVyUmVjZWl2ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgICBkb0Nyb3NzRnJhbWVCb290c3RyYXAod2luZG93LCBJTlRFUk5BTF9DT05UUkFDVF9WRVJTSU9OKS50aGVuKChmYWN0b3J5OiBJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb25EaXNwYXRjaGVyUmVjZWl2ZWRDYWxsYmFjayhmYWN0b3J5LCBpc0V4dGVuc2lvbkRpYWxvZywgY29udGV4dE1lbnVDYWxsYmFja3MpO1xuICAgICAgICAgIH0pLnRoZW4oKG9wZW5QYXlsb2FkKSA9PiB7IHJlc29sdmUob3BlblBheWxvYWQpOyB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25EaXNwYXRjaGVyUmVjZWl2ZWQoXG4gICAgZGlzcGF0Y2hlckZhY3Rvcnk6IEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnksXG4gICAgaXNFeHRlbnNpb25EaWFsb2c6IGJvb2xlYW4sXG4gICAgY29udGV4dE1lbnVGdW5jdGlvbnM/OiBDYWxsYmFja01hcCk6IFByb21pc2U8c3RyaW5nPiB7XG5cbiAgICBjb25zdCBkaXNwYXRjaGVyID0gZGlzcGF0Y2hlckZhY3RvcnkoSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTik7XG5cbiAgICAvLyBDYWxsIHRvIHJlZ2lzdGVyIGFsbCB0aGUgc2VydmljZXMgd2hpY2ggd2lsbCB1c2UgdGhlIG5ld2x5IGluaXRpYWxpemVkIGRpc3BhdGNoZXJcbiAgICByZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzKGRpc3BhdGNoZXIpO1xuICAgIHJlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzKGRpc3BhdGNoZXIpO1xuXG4gICAgLy8gR2V0IHRoZSBpbml0aWFsaXphdGlvbiBzZXJ2aWNlIGFuZCBpbml0aWFsaXplIHRoaXMgZXh0ZW5zaW9uXG4gICAgY29uc3QgaW5pdGlhbGl6YXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8SW5pdGlhbGl6YXRpb25TZXJ2aWNlPihcbiAgICAgIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuSW5pdGlhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrTWFwS2V5cyA9IChjb250ZXh0TWVudUZ1bmN0aW9ucykgPyBPYmplY3Qua2V5cyhjb250ZXh0TWVudUZ1bmN0aW9ucykgOiBbXTtcbiAgICByZXR1cm4gaW5pdGlhbGl6YXRpb25TZXJ2aWNlLmluaXRpYWxpemVEYXNoYm9hcmRFeHRlbnNpb25zQXN5bmMoaXNFeHRlbnNpb25EaWFsb2csIGNhbGxiYWNrTWFwS2V5cykudGhlbjxzdHJpbmc+KHJlc3VsdCA9PiB7XG4gICAgICBpZiAoIXJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdVbmV4cGVjdGVkIGVycm9yIGR1cmluZyBpbml0aWFsaXphdGlvbi4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXNoYm9hcmRDb250ZW50ID0gdGhpcy5pbml0aWFsaXplRGFzaGJvYXJkQ29udGVudChyZXN1bHQuZXh0ZW5zaW9uRGFzaGJvYXJkSW5mbyxcbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbkluc3RhbmNlLmxvY2F0b3IuZGFzaGJvYXJkUGF0aCk7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHJlc3VsdC5leHRlbnNpb25FbnZpcm9ubWVudCk7XG4gICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5pbml0aWFsaXplU2V0dGluZ3MocmVzdWx0LmV4dGVuc2lvblNldHRpbmdzSW5mbyk7XG4gICAgICB0aGlzLnVpID0gbmV3IFVJKG5ldyBVSUltcGwoKSk7XG5cbiAgICAgIC8vIEFmdGVyIGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQsIHNldHVwIGxpc3RlbmVycyBmb3IgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0XG4gICAgICAvLyBhcmUgbWVhbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW5ldmVyIGEgY29udGV4dCBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRleHRNZW51Q2FsbGJhY2tzKGNvbnRleHRNZW51RnVuY3Rpb25zKTtcblxuICAgICAgLy8gSW4gdGhlIG5vcm1hbCBpbml0aWFsaXphdGlvbiBjYXNlLCB0aGlzIHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nLiAgV2hlbiByZXR1cm5pbmcgZnJvbSBpbml0aWFsaXplQXN5bmMgdG8gdGhlXG4gICAgICAvLyBkZXZlbG9wZXIsIHdlIGp1c3QgaW5nb3JlIHRoYXQgc3RyaW5nLiAgSW4gdGhlIGNhc2Ugb2YgaW5pdGlhbGl6aW5nIGZyb20gYW4gZXh0ZW5zaW9uIGRpYWxvZywgdGhpcyBzdHJpbmdcbiAgICAgIC8vIGlzIGFuIG9wdGlvbmFsIHBheWxvYWQgc2VudCBmcm9tIHRoZSBwYXJlbnQgZXh0ZW5zaW9uLlxuICAgICAgcmV0dXJuIHJlc3VsdC5leHRlbnNpb25EaWFsb2dQYXlsb2FkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRGFzaGJvYXJkQ29udGVudChpbmZvOiBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLCBzaGVldFBhdGg6IFNoZWV0UGF0aCk6IERhc2hib2FyZENvbnRlbnQge1xuICAgIGNvbnN0IGRhc2hib2FyZEltcGwgPSBuZXcgRGFzaGJvYXJkSW1wbChpbmZvLCBzaGVldFBhdGgpO1xuICAgIGNvbnN0IGRhc2hib2FyZCA9IG5ldyBEYXNoYm9hcmQoZGFzaGJvYXJkSW1wbCk7XG4gICAgcmV0dXJuIG5ldyBEYXNoYm9hcmRDb250ZW50KGRhc2hib2FyZCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IFNldHRpbmdzIHtcbiAgICBjb25zdCBzZXR0aW5nc0ltcGwgPSBuZXcgU2V0dGluZ3NJbXBsKHNldHRpbmdzSW5mbyk7XG4gICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhzZXR0aW5nc0ltcGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplQ29udGV4dE1lbnVDYWxsYmFja3MoY29udGV4dE1lbnVGdW5jdGlvbnM/OiBDYWxsYmFja01hcCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcblxuICAgIC8vIFVucmVnaXN0ZXIgZnVuY3Rpb24gbm90IHVzZWQgc2luY2UgdGhlc2Ugbm90aWZpY2F0aW9ucyBzaG91bGQgYmVcbiAgICAvLyBvYnNlcnZlZCBmb3IgdGhlIGZ1bGwgbGlmZXRpbWUgb2YgdGhlIGV4dGVuc2lvbi5cbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5Db250ZXh0TWVudUNsaWNrLCAobW9kZWwpID0+IHtcbiAgICAgIC8vIExldCB0aHJvdWdoIGFueSBjb250ZXh0IG1lbnUgZXZlbnQsIHRoZXNlIGFyZSBhbHJlYWR5IGZpbHRlcmVkIG9uIGFwaS1jb3JlXG4gICAgICAvLyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uIGxvY2F0b3IuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAoZXZlbnQ6IENvbnRleHRNZW51RXZlbnQpID0+IHtcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIGZ1bmN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnRleHQgbWVudSBJRFxuICAgICAgaWYgKGNvbnRleHRNZW51RnVuY3Rpb25zKSB7XG4gICAgICAgIGlmICghY29udGV4dE1lbnVGdW5jdGlvbnNbZXZlbnQuaWRdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBSZWNlaXZlZCB1bmV4cGVjdGVkIGNvbnRleHQgbWVudSBJZCBmcm9tIGV2ZW50OiAke2V2ZW50LmlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dE1lbnVGdW5jdGlvbnNbZXZlbnQuaWRdKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwiLy8gQWxsIGVudW0gdmFsdWVzIG1hZGUgYXZhaWxhYmxlIHRvIEV4dGVuc2lvbnMgZGV2ZWxvcGVycy5cbi8vIEVudW1zIHNob3VsZCBiZSBrZXB0IGluIGFscGhhYmV0aWNhbCBvcmRlci5cblxuLyoqXG4gKiBUaGUgY29udGV4dCBpbiB3aGljaCB0aGUgRXh0ZW5zaW9ucyBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5zaW9uQ29udGV4dCB7XG4gIERlc2t0b3AgPSAnZGVza3RvcCcsXG4gIFNlcnZlciA9ICdzZXJ2ZXInXG59XG5cbi8qKlxuICogVGhlIG1vZGUgaW4gd2hpY2ggdGhlIEV4dGVuc2lvbnMgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gKi9cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbk1vZGUge1xuICBBdXRob3JpbmcgPSAnYXV0aG9yaW5nJyxcbiAgVmlld2luZyA9ICd2aWV3aW5nJ1xufVxuXG5leHBvcnQgZW51bSBBbmFseXRpY3NPYmplY3RUeXBlIHtcbiAgQ2x1c3RlciA9ICdjbHVzdGVyJyxcbiAgRm9yZWNhc3QgPSAnZm9yZWNhc3QnLFxuICBUcmVuZExpbmUgPSAndHJlbmQtbGluZSdcbn1cblxuZXhwb3J0IGVudW0gQ29sdW1uVHlwZSB7XG4gIERpc2NyZXRlID0gJ2Rpc2NyZXRlJyxcbiAgQ29udGludW91cyA9ICdjb250aW51b3VzJ1xufVxuXG4vKipcbiAqIFdoYXQgdGhlIG9iamVjdCByZXByZXNlbnRzIGluIGEgZGFzaGJvYXJkLlxuICovXG5leHBvcnQgZW51bSBEYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgQmxhbmsgPSAnYmxhbmsnLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0JyxcbiAgUXVpY2tGaWx0ZXIgPSAncXVpY2stZmlsdGVyJyxcbiAgUGFyYW1ldGVyQ29udHJvbCA9ICdwYXJhbWV0ZXItY29udHJvbCcsXG4gIFBhZ2VGaWx0ZXIgPSAncGFnZS1maWx0ZXInLFxuICBMZWdlbmQgPSAnbGVnZW5kJyxcbiAgVGl0bGUgPSAndGl0bGUnLFxuICBUZXh0ID0gJ3RleHQnLFxuICBJbWFnZSA9ICdpbWFnZScsXG4gIFdlYlBhZ2UgPSAnd2ViLXBhZ2UnLFxuICBFeHRlbnNpb24gPSAnZXh0ZW5zaW9uJ1xufVxuXG4vKipcbiAqIFRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgZGF0YSBhIHZhbHVlIGNhbiBoYXZlXG4gKi9cbmV4cG9ydCBlbnVtIERhdGFUeXBlIHtcbiAgU3RyaW5nID0gJ3N0cmluZycsXG4gIEludCA9ICdpbnQnLFxuICBGbG9hdCA9ICdmbG9hdCcsXG4gIEJvb2wgPSAnYm9vbCcsXG4gIERhdGUgPSAnZGF0ZScsXG4gIERhdGVUaW1lID0gJ2RhdGUtdGltZScsXG4gIFNwYXRpYWwgPSAnc3BhdGlhbCdcbn1cblxuLyoqXG4gKiBWYWxpZCBkYXRlIHJhbmdlcyBmb3IgYSByZWxhdGl2ZSBkYXRlIGZpbHRlci5cbiAqL1xuZXhwb3J0IGVudW0gRGF0ZVJhbmdlVHlwZSB7XG4gIExhc3QgPSAnbGFzdCcsXG4gIExhc3ROID0gJ2xhc3QtbicsXG4gIE5leHQgPSAnbmV4dCcsXG4gIE5leHROID0gJ25leHQtbicsXG4gIEN1cnJlbnQgPSAnY3VycmVudCcsXG4gIFRvRGF0ZSA9ICd0by1kYXRlJ1xufVxuXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICBDb2x1bW4gPSAnY29sdW1uJyxcbiAgUm93ID0gJ3JvdycsXG4gIFBhZ2UgPSAncGFnZScsXG4gIEZpbHRlciA9ICdmaWx0ZXInLFxuICBNYXJrc1R5cGUgPSAnbWFya3MtdHlwZScsXG4gIE1lYXN1cmVWYWx1ZXMgPSAnbWVhc3VyZS12YWx1ZXMnLFxuICBDb2xvciA9ICdjb2xvcicsXG4gIFNpemUgPSAnc2l6ZScsXG4gIExhYmVsID0gJ2xhYmVsJyxcbiAgRGV0YWlsID0gJ2RldGFpbCcsXG4gIFRvb2x0aXAgPSAndG9vbHRpcCcsXG4gIFNoYXBlID0gJ3NoYXBlJyxcbiAgUGF0aCA9ICdwYXRoJyxcbiAgQW5nbGUgPSAnYW5nbGUnXG59XG5cbi8qKlxuICogQWxsIGVycm9yIGNvZGVzIHVzZWQgYnkgdGhlIEV4dGVuc2lvbnMgQVBJLlxuICovXG5leHBvcnQgZW51bSBFcnJvckNvZGVzIHtcbiAgLyoqXG4gICAqIFRocm93biB3aGVuIGNhbGxlciBhdHRlbXB0cyB0byBleGVjdXRlIGNvbW1hbmQgYmVmb3JlIGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAqL1xuICBBUElOb3RJbml0aWFsaXplZCA9ICdhcGktbm90LWluaXRpYWxpemVkJyxcbiAgLyoqXG4gICAqIE9ubHkgb25lIGRpYWxvZyBjYW4gYmUgb3BlbmVkIGF0IHRpbWUgd2l0aCB0aGUgVUkgbmFtZXNwYWNlIGZ1bmN0aW9uYWxpdHkuXG4gICAqL1xuICBEaWFsb2dBbHJlYWR5T3BlbiA9ICdkaWFsb2ctYWxyZWFkeS1vcGVuJyxcbiAgLyoqXG4gICAqIFRoZSBvcGVuIGRpYWxvZyB3YXMgY2xvc2VkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgRGlhbG9nQ2xvc2VkQnlVc2VyID0gJ2RpYWxvZy1jbG9zZWQtYnktdXNlcicsXG4gIC8qKlxuICAgKiBBbiBlcnJvciBvY2N1cnJlZCB3aXRoaW4gdGhlIFRhYmxlYXUgRXh0ZW5zaW9ucyBBUEkuIENvbnRhY3QgVGFibGVhdSBTdXBwb3J0LlxuICAgKi9cbiAgSW50ZXJuYWxFcnJvciA9ICdpbnRlcm5hbC1lcnJvcicsXG4gIC8qKlxuICAgKiBBIGRpYWxvZyBtdXN0IHN0YXJ0IG9uIHRoZSBzYW1lIGRvbWFpbiBhcyB0aGUgcGFyZW50IGV4dGVuaW9uLlxuICAgKi9cbiAgSW52YWxpZERvbWFpbkRpYWxvZyA9ICdpbnZhbGlkLWRpYWxvZy1kb21haW4nLFxuICAvKipcbiAgICogQSBwYXJhbWV0ZXIgaXMgbm90IHRoZSBjb3JyZWN0IGRhdGEgdHlwZSBvciBmb3JtYXQuIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkIGluIHRoZSBFcnJvci5tZXNzYWdlIGZpZWxkLlxuICAgKi9cbiAgSW52YWxpZFBhcmFtZXRlciA9ICdpbnZhbGlkLXBhcmFtZXRlcicsXG4gIC8qKlxuICAgKiBDYW4gb2NjdXIgaWYgdGhlIGV4dGVuc2lvbiBpbnRlcmFjdHMgd2l0aCBhIGZpbHRlciB0aGF0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0LlxuICAgKi9cbiAgTWlzc2luZ0ZpbHRlciA9ICdtaXNzaW5nLWZpbHRlcicsXG4gIC8qKlxuICAgKiBDYW4gb2NjdXIgaWYgdGhlIGV4dGVuc2lvbiBpbnRlcmFjdHMgd2l0aCBhIHBhcmFtZXRlciB0aGF0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0LlxuICAgKi9cbiAgTWlzc2luZ1BhcmFtZXRlciA9ICdtaXNzaW5nLXBhcmFtZXRlcicsXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG4gIFNlcnZlckVycm9yID0gJ3NlcnZlci1lcnJvcicsXG4gIC8qKlxuICAgKiBEZXZlbG9wZXIgY2Fubm90IHNhdmUgc2V0dGluZ3Mgd2hpbGUgYW5vdGhlciBzYXZlIGlzIHN0aWxsIGluIHByb2dyZXNzLlxuICAgKi9cbiAgU2V0dGluZ1NhdmVJblByb2dyZXNzID0gJ3NldHRpbmctc2F2ZS1pbi1wcm9ncmVzcycsXG4gIC8qKlxuICAgKiBBbiB1bmtub3duIGV2ZW50IG5hbWUgd2FzIHNwZWNpZmllZCBpbiB0aGUgY2FsbCB0byBWaXouYWRkRXZlbnRMaXN0ZW5lcm9yIFZpei5yZW1vdmVFdmVudExpc3RlbmVyLlxuICAgKi9cbiAgVW5zdXBwb3J0ZWRFdmVudE5hbWUgPSAndW5zdXBwb3J0ZWQtZXZlbnQtbmFtZScsXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB3YXMgdXNlZCBmb3IgYSB0eXBlIG9mIGRhdGFzb3VyY2UgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhhdCBtZXRob2QgKHNlZSBnZXRBY3RpdmVUYWJsZXNBc3luYyBmb3IgYW4gZXhhbXBsZSlcbiAgICovXG4gIFVuc3VwcG9ydGVkTWV0aG9kRm9yRGF0YVNvdXJjZVR5cGUgPSAndW5zdXBwb3J0ZWQtbWV0aG9kLWZvci1kYXRhLXNvdXJjZS10eXBlJ1xufVxuXG4vKipcbiAqICBUeXBlIG9mIGFnZ3JlZ2F0aW9uIG9uIGEgZmllbGQuXG4gKi9cbmV4cG9ydCBlbnVtIEZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgU3VtID0gJ3N1bScsXG4gIEF2ZyA9ICdhdmcnLFxuICBNaW4gPSAnbWluJyxcbiAgTWF4ID0gJ21heCcsXG4gIFN0ZGV2ID0gJ3N0ZGV2JyxcbiAgU3RkZXZwID0gJ3N0ZGV2cCcsXG4gIFZhciA9ICd2YXInLFxuICBWYXJwID0gJ3ZhcnAnLFxuICBDb3VudCA9ICdjb3VudCcsXG4gIENvdW50ZCA9ICdjb3VudGQnLFxuICBNZWRpYW4gPSAnbWVkaWFuJyxcbiAgQXR0ciA9ICdhdHRyJyxcbiAgTm9uZSA9ICdub25lJyxcbiAgWWVhciA9ICd5ZWFyJyxcbiAgUXRyID0gJ3F0cicsXG4gIE1vbnRoID0gJ21vbnRoJyxcbiAgRGF5ID0gJ2RheScsXG4gIEhvdXIgPSAnaG91cicsXG4gIE1pbnV0ZSA9ICdtaW51dGUnLFxuICBTZWNvbmQgPSAnc2Vjb25kJyxcbiAgV2VlayA9ICd3ZWVrJyxcbiAgV2Vla2RheSA9ICd3ZWVrZGF5JyxcbiAgTW9udGhZZWFyID0gJ21vbnRoLXllYXInLFxuICBNZHkgPSAnbWR5JyxcbiAgRW5kID0gJ2VuZCcsXG4gIFRydW5jWWVhciA9ICd0cnVuYy15ZWFyJyxcbiAgVHJ1bmNRdHIgPSAndHJ1bmMtcXRyJyxcbiAgVHJ1bmNNb250aCA9ICd0cnVuYy1tb250aCcsXG4gIFRydW5jV2VlayA9ICd0cnVuYy13ZWVrJyxcbiAgVHJ1bmNEYXkgPSAndHJ1bmMtZGF5JyxcbiAgVHJ1bmNIb3VyID0gJ3RydW5jLWhvdXInLFxuICBUcnVuY01pbnV0ZSA9ICd0cnVuYy1taW51dGUnLFxuICBUcnVuY1NlY29uZCA9ICd0cnVuYy1zZWNvbmQnLFxuICBRdWFydDEgPSAncXVhcnQxJyxcbiAgUXVhcnQzID0gJ3F1YXJ0MycsXG4gIFNrZXduZXNzID0gJ3NrZXduZXNzJyxcbiAgS3VydG9zaXMgPSAna3VydG9zaXMnLFxuICBJbk91dCA9ICdpbi1vdXQnLFxuICBVc2VyID0gJ3VzZXInXG59XG5cbi8qKlxuICogUm9sZSBvZiBhIGZpZWxkLlxuICovXG5leHBvcnQgZW51bSBGaWVsZFJvbGVUeXBlIHtcbiAgRGltZW5zaW9uID0gJ2RpbWVuc2lvbicsXG4gIE1lYXN1cmUgPSAnbWVhc3VyZScsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuLyoqXG4gKiBBbiBlbnVtZXJhdGlvbiBvZiB0aGUgdmFsaWQgdHlwZXMgb2YgZmlsdGVycyB0aGF0IGNhbiBiZSBhcHBsaWVkLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJUeXBlIHtcbiAgQ2F0ZWdvcmljYWwgPSAnY2F0ZWdvcmljYWwnLFxuICBSYW5nZSA9ICdyYW5nZScsXG4gIEhpZXJhcmNoaWNhbCA9ICdoaWVyYXJjaGljYWwnLFxuICBSZWxhdGl2ZURhdGUgPSAncmVsYXRpdmUtZGF0ZSdcbn1cblxuLyoqXG4gKiBUaGUgZGlmZmVyZW50IHVwZGF0ZSB0eXBlcyBmb3IgYXBwbHlpbmcgZmlsdGVyXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclVwZGF0ZVR5cGUge1xuICBBZGQgPSAnYWRkJyxcbiAgQWxsID0gJ2FsbCcsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG4gIFJlbW92ZSA9ICdyZW1vdmUnXG59XG5cbi8qKlxuICogVGhlIGRvbWFpbiB0eXBlIGZvciBhIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJEb21haW5UeXBlIHtcbiAgLyoqXG4gICAqIFRoZSBkb21haW4gdmFsdWVzIHRoYXQgYXJlIHJlbGV2YW50IHRvIHRoZSBzcGVjaWZpZWQgZmlsdGVyXG4gICAqIGkuZS4gdGhlIGRvbWFpbiBpcyByZXN0cmljdGVkIGJ5IGEgcHJldmlvdXMgZmlsdGVyXG4gICAqL1xuICBSZWxldmFudCA9ICdyZWxldmFudCcsXG4gIC8qKlxuICAgKiBsaXN0IG9mIGFsbCBwb3NzaWJsZSBkb21haW4gdmFsdWVzIGZyb20gZGF0YWJhc2VcbiAgICovXG4gIERhdGFiYXNlID0gJ2RhdGFiYXNlJ1xufVxuXG4vKipcbiAqIFRoZSBvcHRpb24gZm9yIHNwZWNpZnlpbmcgd2hpY2ggdmFsdWVzIHRvIGluY2x1ZGUgZm9yIGZpbHRlcmluZ1xuICogSW5kaWNhdGVzIHdoYXQgdG8gZG8gd2l0aCBudWxsIHZhbHVlcyBmb3IgYSBnaXZlbiBmaWx0ZXIgb3IgbWFyayBzZWxlY3Rpb24gY2FsbC5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyTnVsbE9wdGlvbiB7XG4gIE51bGxWYWx1ZXMgPSAnbnVsbC12YWx1ZXMnLFxuICBOb25OdWxsVmFsdWVzID0gJ25vbi1udWxsLXZhbHVlcycsXG4gIEFsbFZhbHVlcyA9ICdhbGwtdmFsdWVzJ1xufVxuXG4vKipcbiAqIFR5cGUgb2YgbWFyayBmb3IgYSBnaXZlbiBtYXJrcyBjYXJkIGluIGEgdml6LlxuICovXG5leHBvcnQgZW51bSBNYXJrVHlwZSB7XG4gIEJhciA9ICdiYXInLFxuICBMaW5lID0gJ2xpbmUnLFxuICBBcmVhID0gJ2FyZWEnLFxuICBTcXVhcmUgPSAnc3F1YXJlJyxcbiAgQ2lyY2xlID0gJ2NpcmNsZScsXG4gIFNoYXBlID0gJ3NoYXBlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgTWFwID0gJ21hcCcsXG4gIFBpZSA9ICdwaWUnLFxuICBHYW50dEJhciA9ICdnYW50dC1iYXInLFxuICBQb2x5Z29uID0gJ3BvbHlnb24nXG59XG5cbi8qKlxuICogQW4gZW51bWVyYXRpb24gZGVzY3JpYmluZyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGFsbG93YWJsZSB2YWx1ZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIHJlc3RyaWN0aW5nIHRoZSBkb21haW4gb2YgYSBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGVudW0gUGFyYW1ldGVyVmFsdWVUeXBlIHtcbiAgQWxsID0gJ2FsbCcsXG4gIExpc3QgPSAnbGlzdCcsXG4gIFJhbmdlID0gJ3JhbmdlJ1xufVxuXG4vKipcbiAqIERhdGUgcGVyaW9kIHVzZWQgaW4gZmlsdGVycyBhbmQgaW4gcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGVudW0gUGVyaW9kVHlwZSB7XG4gIFllYXJzID0gJ3llYXJzJyxcbiAgUXVhcnRlcnMgPSAncXVhcnRlcnMnLFxuICBNb250aHMgPSAnbW9udGhzJyxcbiAgV2Vla3MgPSAnd2Vla3MnLFxuICBEYXlzID0gJ2RheXMnLFxuICBIb3VycyA9ICdob3VycycsXG4gIE1pbnV0ZXMgPSAnbWludXRlcycsXG4gIFNlY29uZHMgPSAnc2Vjb25kcydcbn1cblxuZXhwb3J0IGVudW0gUXVpY2tUYWJsZUNhbGNUeXBlIHtcbiAgUnVubmluZ1RvdGFsID0gJ3J1bm5pbmctdG90YWwnLFxuICBEaWZmZXJlbmNlID0gJ2RpZmZlcmVuY2UnLFxuICBQZXJjZW50RGlmZmVyZW5jZSA9ICdwZXJjZW50LWRpZmZlcmVuY2UnLFxuICBQZXJjZW50T2ZUb3RhbCA9ICdwZXJjZW50LW9mLXRvdGFsJyxcbiAgUmFuayA9ICdyYW5rJyxcbiAgUGVyY2VudGlsZSA9ICdwZXJjZW50aWxlJyxcbiAgTW92aW5nQXZlcmFnZSA9ICdtb3ZpbmctYXZlcmFnZScsXG4gIFlURFRvdGFsID0gJ3l0ZC10b3RhbCcsXG4gIENvbXBvdW5kR3Jvd3RoUmF0ZSA9ICdjb21wb3VuZC1ncm93dGgtcmF0ZScsXG4gIFllYXJPdmVyWWVhckdyb3d0aCA9ICd5ZWFyLW92ZXIteWVhci1ncm93dGgnLFxuICBZVERHcm93dGggPSAneXRkLWdyb3d0aCcsXG4gIFVuZGVmaW5lZCA9ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogRW51bSBmb3Igc3BlY2lmeWluZyB0aGUgc2VsZWN0aW9uIHR5cGUgZm9yIHNlbGVjdCBtYXJrcyBhcGkuXG4gKi9cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblVwZGF0ZVR5cGUge1xuICBSZXBsYWNlID0gJ3NlbGVjdC1yZXBsYWNlJyxcbiAgQWRkID0gJ3NlbGVjdC1hZGQnLFxuICBSZW1vdmUgPSAnc2VsZWN0LXJlbW92ZSdcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBzaGVldCBhIFNoZWV0IG9iamVjdCByZXByZXNlbnRzXG4gKi9cbmV4cG9ydCBlbnVtIFNoZWV0VHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBTdG9yeSA9ICdzdG9yeScsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnXG59XG5cbmV4cG9ydCBlbnVtIFNvcnREaXJlY3Rpb24ge1xuICBJbmNyZWFzaW5nID0gJ2luY3JlYXNpbmcnLFxuICBEZWNyZWFzaW5nID0gJ2RlY3JlYXNpbmcnXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNlcnRhaW4gdHlwZSBvZiBldmVudCB3aGljaCBjYW4gYmUgbGlzdGVuZWQgZm9yXG4gKi9cbmV4cG9ydCBlbnVtIFRhYmxlYXVFdmVudFR5cGUge1xuICAvKiogUmFpc2VkIHdoZW4gYW55IGZpbHRlciBoYXMgY2hhbmdlZCBzdGF0ZS4qL1xuICBGaWx0ZXJDaGFuZ2VkID0gJ2ZpbHRlci1jaGFuZ2VkJyxcblxuICAvKiogVGhlIHNlbGVjdGVkIG1hcmtzIG9uIGEgdmlzdWFsaXphdGlvbiBoYXMgY2hhbmdlZCAqL1xuICBNYXJrU2VsZWN0aW9uQ2hhbmdlZCA9ICdtYXJrLXNlbGVjdGlvbi1jaGFuZ2VkJyxcblxuICAvKiogQSBwYXJhbWV0ZXIgaGFzIGhhZCBpdHMgdmFsdWUgbW9kaWZpZWQgKi9cbiAgUGFyYW1ldGVyQ2hhbmdlZCA9ICdwYXJhbWV0ZXItY2hhbmdlZCcsXG5cbiAgLyoqIFNldHRpbmdzIGhhdmUgYmVlbiBjaGFuZ2VkIGZvciB0aGlzIGV4dGVuc2lvbi4gKi9cbiAgU2V0dGluZ3NDaGFuZ2VkID0gJ3NldHRpbmdzLWNoYW5nZWQnXG59XG5cbmV4cG9ydCBlbnVtIFRyZW5kTGluZU1vZGVsVHlwZSB7XG4gIExpbmVhciA9ICdsaW5lYXInLFxuICBMb2dhcml0aG1pYyA9ICdsb2dhcml0aG1pYycsXG4gIEV4cG9uZW50aWFsID0gJ2V4cG9uZW50aWFsJyxcbiAgUG9seW5vbWlhbCA9ICdwb2x5bm9taWFsJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9FeHRlcm5hbENvbnRyYWN0L0VudW1zLnRzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXInKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk51bWJlci5pc0ludGVnZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9udW1iZXIvaXMtaW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7IGlzSW50ZWdlcjogcmVxdWlyZSgnLi9faXMtaW50ZWdlcicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KSB7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZW51bSBFeHRlbnNpb25Db250ZXh0IHtcbiAgRGVza3RvcCA9ICdkZXNrdG9wJyxcbiAgU2VydmVyID0gJ3NlcnZlcicsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGVudW0gRXh0ZW5zaW9uTW9kZSB7XG4gIEF1dGhvcmluZyA9ICdhdXRob3JpbmcnLFxuICBWaWV3aW5nID0gJ3ZpZXdpbmcnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICBEaXNjcmV0ZSA9ICdkaXNjcmV0ZScsXG4gIENvbnRpbnVvdXMgPSAnY29udGludW91cydcbn1cblxuZXhwb3J0IGVudW0gRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gIEJsYW5rID0gJ2JsYW5rJyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCcsXG4gIFF1aWNrRmlsdGVyID0gJ3F1aWNrLWZpbHRlcicsXG4gIFBhcmFtZXRlckNvbnRyb2wgPSAncGFyYW1ldGVyLWNvbnRyb2wnLFxuICBQYWdlRmlsdGVyID0gJ3BhZ2UtZmlsdGVyJyxcbiAgTGVnZW5kID0gJ2xlZ2VuZCcsXG4gIFRpdGxlID0gJ3RpdGxlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgSW1hZ2UgPSAnaW1hZ2UnLFxuICBXZWJQYWdlID0gJ3dlYi1wYWdlJyxcbiAgRXh0ZW5zaW9uID0gJ2V4dGVuc2lvbidcbn1cblxuZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgSW50ID0gJ2ludCcsXG4gIEZsb2F0ID0gJ2Zsb2F0JyxcbiAgQm9vbCA9ICdib29sJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgRGF0ZVRpbWUgPSAnZGF0ZS10aW1lJyxcbiAgU3BhdGlhbCA9ICdzcGF0aWFsJ1xufVxuXG5leHBvcnQgZW51bSBFbmNvZGVkRGF0YVR5cGUge1xuICBOdW1iZXIgPSAnbnVtYmVyJyxcbiAgU3RyaW5nID0gJ3N0cmluZycsXG4gIERhdGUgPSAnZGF0ZScsXG4gIEJvb2xlYW4gPSAnYm9vbGVhbidcbn1cblxuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIElOSVRJQUxJWkFUSU9OX0VSUk9SID0gJ2luaXRpYWxpemF0aW9uLWVycm9yJyxcbiAgSU5URVJOQUxfRVJST1IgPSAnaW50ZXJuYWwtZXJyb3InLFxuICBNSVNTSU5HX0VOVU1fTUFQUElORyA9ICdtaXNzaW5nLWVudW0tbWFwcGluZycsXG4gIE1JU1NJTkdfUEFSQU1FVEVSID0gJ21pc3NpbmctcGFyYW1ldGVyJyxcbiAgUEVSTUlTU0lPTl9ERU5JRUQgPSAncGVybWlzc2lvbi1kZW5pZWQnLFxuICBQUkVTX01PREVMX1BBUlNJTkdfRVJST1IgPSAncHJlcy1tb2RlbC1wYXJzaW5nLWVycm9yJyxcbiAgVkVSU0lPTl9OT1RfQ09ORklHVVJFRCA9ICd2ZXJzaW9uLW5vdC1jb25maWd1cmVkJyxcbiAgVU5LTk9XTl9WRVJCX0lEID0gJ3Vua25vd24tdmVyYi1pZCdcbn1cblxuZXhwb3J0IGVudW0gRmllbGRBZ2dyZWdhdGlvblR5cGUge1xuICBTdW0gPSAnc3VtJyxcbiAgQXZnID0gJ2F2ZycsXG4gIE1pbiA9ICdtaW4nLFxuICBNYXggPSAnbWF4JyxcbiAgU3RkZXYgPSAnc3RkZXYnLFxuICBTdGRldnAgPSAnc3RkZXZwJyxcbiAgVmFyID0gJ3ZhcicsXG4gIFZhcnAgPSAndmFycCcsXG4gIENvdW50ID0gJ2NvdW50JyxcbiAgQ291bnRkID0gJ2NvdW50ZCcsXG4gIE1lZGlhbiA9ICdtZWRpYW4nLFxuICBBdHRyID0gJ2F0dHInLFxuICBOb25lID0gJ25vbmUnLFxuICBZZWFyID0gJ3llYXInLFxuICBRdHIgPSAncXRyJyxcbiAgTW9udGggPSAnbW9udGgnLFxuICBEYXkgPSAnZGF5JyxcbiAgSG91ciA9ICdob3VyJyxcbiAgTWludXRlID0gJ21pbnV0ZScsXG4gIFNlY29uZCA9ICdzZWNvbmQnLFxuICBXZWVrID0gJ3dlZWsnLFxuICBXZWVrZGF5ID0gJ3dlZWtkYXknLFxuICBNb250aFllYXIgPSAnbW9udGgteWVhcicsXG4gIE1keSA9ICdtZHknLFxuICBFbmQgPSAnZW5kJyxcbiAgVHJ1bmNZZWFyID0gJ3RydW5jLXllYXInLFxuICBUcnVuY1F0ciA9ICd0cnVuYy1xdHInLFxuICBUcnVuY01vbnRoID0gJ3RydW5jLW1vbnRoJyxcbiAgVHJ1bmNXZWVrID0gJ3RydW5jLXdlZWsnLFxuICBUcnVuY0RheSA9ICd0cnVuYy1kYXknLFxuICBUcnVuY0hvdXIgPSAndHJ1bmMtaG91cicsXG4gIFRydW5jTWludXRlID0gJ3RydW5jLW1pbnV0ZScsXG4gIFRydW5jU2Vjb25kID0gJ3RydW5jLXNlY29uZCcsXG4gIFF1YXJ0MSA9ICdxdWFydDEnLFxuICBRdWFydDMgPSAncXVhcnQzJyxcbiAgU2tld25lc3MgPSAnc2tld25lc3MnLFxuICBLdXJ0b3NpcyA9ICdrdXJ0b3NpcycsXG4gIEluT3V0ID0gJ2luLW91dCcsXG4gIFVzZXIgPSAndXNlcidcbn1cblxuZXhwb3J0IGVudW0gRmllbGRSb2xlVHlwZSB7XG4gIERpbWVuc2lvbiA9ICdkaW1lbnNpb24nLFxuICBNZWFzdXJlID0gJ21lYXN1cmUnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbi8qKlxuICogIFRoZSBkaWZmZXJlbnQgdXBkYXRlIHR5cGVzIGZvciBhcHBseWluZyBmaWx0ZXIuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclVwZGF0ZVR5cGUge1xuICBBZGQgPSAnYWRkJyxcbiAgQWxsID0gJ2FsbCcsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG4gIFJlbW92ZSA9ICdyZW1vdmUnXG59XG5cbmV4cG9ydCBlbnVtIFNoZWV0VHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBTdG9yeSA9ICdzdG9yeScsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnXG59XG5cbmV4cG9ydCBlbnVtIERvbWFpblJlc3RyaWN0aW9uVHlwZSB7XG4gIEFsbCA9ICdhbGwnLFxuICBMaXN0ID0gJ2xpc3QnLFxuICBSYW5nZSA9ICdyYW5nZSdcbn1cblxuZXhwb3J0IGVudW0gRGF0ZVN0ZXBQZXJpb2Qge1xuICBZZWFycyA9ICd5ZWFycycsXG4gIFF1YXJ0ZXJzID0gJ3F1YXJ0ZXJzJyxcbiAgTW9udGhzID0gJ21vbnRocycsXG4gIFdlZWtzID0gJ3dlZWtzJyxcbiAgRGF5cyA9ICdkYXlzJyxcbiAgSG91cnMgPSAnaG91cnMnLFxuICBNaW51dGVzID0gJ21pbnV0ZXMnLFxuICBTZWNvbmRzID0gJ3NlY29uZHMnXG59XG5cbi8qKlxuICogVGhlIG9wdGlvbiBmb3Igc3BlY2lmeWluZyB3aGljaCB2YWx1ZXMgdG8gaW5jbHVkZSBmb3IgZmlsdGVyaW5nLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJOdWxsT3B0aW9uIHtcbiAgTnVsbFZhbHVlcyA9ICdudWxsdmFsdWVzJyxcbiAgTm9uTnVsbFZhbHVlcyA9ICdub25udWxsdmFsdWVzJyxcbiAgQWxsVmFsdWVzID0gJ2FsbHZhbHVlcydcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBmaWx0ZXIgZG9tYWluXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlckRvbWFpblR5cGUge1xuICBSZWxldmFudCA9ICdyZWxldmFudCcsXG4gIERhdGFiYXNlID0gJ2RhdGFiYXNlJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHNlbGVjdGlvbiB0eXBlIGZvciBzZWxlY3QgbWFya3MgYXBpLlxuICovXG5leHBvcnQgZW51bSBTZWxlY3Rpb25VcGRhdGVUeXBlIHtcbiAgUmVwbGFjZSA9ICdzZWxlY3QtcmVwbGFjZScsXG4gIEFkZCA9ICdzZWxlY3QtYWRkJyxcbiAgUmVtb3ZlID0gJ3NlbGVjdC1yZW1vdmUnXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgaW5jbHVkZWQgdmFsdWVzIHR5cGUgZm9yIHJhbmdlIHNlbGVjdGlvbi5cbiAqL1xuZXhwb3J0IGVudW0gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMge1xuICBJbmNsdWRlTnVsbCA9ICdpbmNsdWRlLW51bGwnLFxuICBJbmNsdWRlTm9uTnVsbCA9ICdpbmNsdWRlLW5vbi1udWxsJyxcbiAgSW5jbHVkZUFsbCA9ICdpbmNsdWRlLWFsbCdcbn1cblxuLyoqXG4gKiBUeXBlIG9mIG1hcmsgZm9yIGEgZ2l2ZW4gbWFya3MgY2FyZCBpbiBhIHZpei5cbiAqL1xuZXhwb3J0IGVudW0gTWFya1R5cGUge1xuICAgIEJhciA9ICdiYXInLFxuICAgIExpbmUgPSAnbGluZScsXG4gICAgQXJlYSA9ICdhcmVhJyxcbiAgICBTcXVhcmUgPSAnc3F1YXJlJyxcbiAgICBDaXJjbGUgPSAnY2lyY2xlJyxcbiAgICBTaGFwZSA9ICdzaGFwZScsXG4gICAgVGV4dCA9ICd0ZXh0JyxcbiAgICBNYXAgPSAnbWFwJyxcbiAgICBQaWUgPSAncGllJyxcbiAgICBHYW50dEJhciA9ICdnYW50dC1iYXInLFxuICAgIFBvbHlnb24gPSAncG9seWdvbicsXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgdHlwZSBvZiBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVHlwZSB7XG4gIENhdGVnb3JpY2FsID0gJ2NhdGVnb3JpY2FsJyxcbiAgUmFuZ2UgPSAncmFuZ2UnLFxuICBSZWxhdGl2ZURhdGUgPSAncmVsYXRpdmVEYXRlJyxcbiAgSGllcmFyY2hpY2FsID0gJ2hpZXJhcmNoaWNhbCdcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSBEYXRlUmFuZ2VUeXBlIG9mIGEgcmVsYXRpdmUgZGF0ZSBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRGF0ZVJhbmdlVHlwZSB7XG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGxhc3QgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBMYXN0ID0gJ2xhc3QnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBsYXN0IE4gZGF5cywgd2Vla3MsIG1vbnRocywgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBMYXN0TiA9ICdsYXN0TicsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIG5leHQgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBOZXh0ID0gJ25leHQnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBuZXh0IE4gZGF5cywgd2Vla3MsIG1vbnRocywgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBOZXh0TiA9ICduZXh0TicsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGN1cnJlbnQgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBDdXJyZW50ID0gJ2N1cnJlbnQnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIGV2ZXJ5dGhpbmcgdXAgdG8gYW5kIGluY2x1ZGluZyB0aGUgY3VycmVudCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIFRvRGF0ZSA9ICd0b0RhdGUnXG59XG5cbi8qKlxuICogVXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGxhdW5jaGluZyBvZiBhbiBleHRlbnNpb24gZGlhbG9nIHN1Y2NlZWRlZCBvciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCB7XG4gIERpYWxvZ0FscmVhZHlPcGVuID0gJ2RpYWxvZy1hbHJlYWR5LW9wZW4nLFxuICBJbnZhbGlkRG9tYWluID0gJ2ludmFsaWQtZG9tYWluJyxcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9FbnVtcy50cyIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vY29udHJhY3QvTW9kZWxzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vY29udHJhY3QvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBWZXJiSWQgfSBmcm9tICcuLi9jb250cmFjdC9WZXJicyc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi9WZXJzaW9uTnVtYmVyJztcblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uSGFuZGxlciA9IChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBFeGVjdXRlUGFyYW1ldGVycyB7XG4gIFtrZXk6IHN0cmluZ106IE1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVSZXNwb25zZSB7XG4gIHJlc3VsdDogTW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uIHtcbiAgbm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkO1xuICBkYXRhOiBNb2RlbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbEFwaURpc3BhdGNoZXIge1xuICBleGVjdXRlKHZlcmI6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT47XG4gIHJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZDtcbiAgdW5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQ7XG59XG5cbi8vIFRoaXMgZmFjdG9yeSBmdW5jdGlvbiB3aWxsIGdldCBjYWxsZWQgZnJvbSB0aGUgZXh0ZXJuYWwgc2lkZSBvZiB0aGluZ3MgdG8gaW5zdGFudGlhdGUgYSBwcm9wZXJseVxuLy8gdmVyc2lvbmVkIEFQSSBkaXNwYXRjaGVyIHdoaWNoIHRoaXMgcGFydGljdWxhciB2ZXJzaW9uIG9mIGV4dGVybmFsIGtub3dzIGhvdyB0byB1c2VcbmV4cG9ydCB0eXBlIEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnkgPVxuICAoaW50ZXJuYWxDb250cmFjdFZlcnNpb246IFZlcnNpb25OdW1iZXIpID0+IEludGVybmFsQXBpRGlzcGF0Y2hlcjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXI6IFByb21pc2U8SW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT47IH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIge1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGVza3RvcERpc3BhdGNoZXJQcm9taXNlKCk6IFByb21pc2U8SW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4ge1xuICAgIHJldHVybiB3aW5kb3cuX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaGFzRGVza3RvcEFwaURpc3BhdGNoZXJQcm9taXNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIUludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5nZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoZGlzcGF0Y2hlcjogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5Pik6IHZvaWQge1xuICAgIHdpbmRvdy5fX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlci50cyIsImV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvbklkIHtcbiAgU2VsZWN0ZWRNYXJrc0NoYW5nZWQgPSAnc2VsZWN0ZWQtbWFya3MtY2hhbmdlZCcsXG4gIFBhcmFtZXRlckNoYW5nZWQgPSAncGFyYW1ldGVyLWNoYW5nZWQnLFxuICBGaWx0ZXJDaGFuZ2VkID0gJ2ZpbHRlci1jaGFuZ2VkJyxcbiAgRXh0ZW5zaW9uRGlhbG9nVXBkYXRlID0gJ2V4dGVuc2lvbi1kaWFsb2ctdXBkYXRlJyxcbiAgU2V0dGluZ3NDaGFuZ2VkID0gJ3NldHRpbmdzLWNoYW5nZWQnLFxuICBDb250ZXh0TWVudUNsaWNrID0gJ2NvbnRleHQtbWVudS1jbGljaycsXG4gIFRlc3RDb252ZXJzaW9uTm90aWZpY2F0aW9uID0gJ3Rlc3QtY29udmVyc2lvbi1ub3RpZmljYXRpb24nXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMudHMiLCJleHBvcnQgZW51bSBQYXJhbWV0ZXJJZCB7XG4gIEV4dGVuc2lvbkxvY2F0b3IgPSAnZXh0ZW5zaW9uLWxvY2F0b3InLFxuICBFeHRlbnNpb25Cb290c3RyYXBJbmZvID0gJ2V4dGVuc2lvbi1ib290c3RyYXAtaW5mbycsXG4gIEV4dGVuc2lvblNldHRpbmdzSW5mbyA9ICdleHRlbnNpb24tc2V0dGluZ3MtaW5mbycsXG4gIFZpc3VhbElkID0gJ3Zpc3VhbC1pZCcsXG4gIFNoZWV0UGF0aCA9ICdzaGVldC1wYXRoJyxcbiAgSWdub3JlQWxpYXNlcyA9ICdpZ25vcmUtYWxpYXNlcycsXG4gIElnbm9yZVNlbGVjdGlvbiA9ICdpZ25vcmUtc2VsZWN0aW9uJyxcbiAgSW5jbHVkZUFsbENvbHVtbnMgPSAnaW5jbHVkZS1hbGwtY29sdW1ucycsXG4gIE1heFJvd3MgPSAnbWF4LXJvd3MnLFxuICBVbmRlcmx5aW5nRGF0YVRhYmxlID0gJ3VuZGVybHlpbmctZGF0YS10YWJsZScsXG4gIFVuZGVybHlpbmdTdW1tYXJ5RGF0YVRhYmxlID0gJ3VuZGVybHlpbmctc3VtbWFyeS1kYXRhLXRhYmxlJyxcbiAgRGF0YVNvdXJjZURhdGFUYWJsZSA9ICdkYXRhLXNvdXJjZS1kYXRhLXRhYmxlJyxcbiAgU2V0dGluZ3NWYWx1ZXMgPSAnc2V0dGluZ3MtdmFsdWVzJyxcbiAgU2VsZWN0ZWREYXRhID0gJ3NlbGVjdGVkLWRhdGEnLFxuICBIaWdobGlnaHRlZERhdGEgPSAnaGlnaGxpZ2h0ZWQtZGF0YScsXG5cbiAgLy8gRmlsdGVyIFBhcmFtc1xuICBGaWVsZE5hbWUgPSAnZmllbGQtbmFtZScsXG4gIEZpbHRlclZhbHVlcyA9ICdmaWx0ZXItdmFsdWVzJyxcbiAgRmlsdGVyVXBkYXRlVHlwZSA9ICdmaWx0ZXItdXBkYXRlLXR5cGUnLFxuICBJc0V4Y2x1ZGVNb2RlID0gJ2lzLWV4Y2x1ZGUnLFxuICBGaWx0ZXJSYW5nZU1pbiA9ICdmaWx0ZXItcmFuZ2UtbWluJyxcbiAgRmlsdGVyUmFuZ2VNYXggPSAnZmlsdGVyLXJhbmdlLW1heCcsXG4gIEZpbHRlclJhbmdlTnVsbE9wdGlvbiA9ICdmaWx0ZXItcmFuZ2UtbnVsbC1vcHRpb24nLFxuICBXb3Jrc2hlZXRGaWx0ZXJzID0gJ3dvcmtzaGVldC1maWx0ZXJzJyxcbiAgRmllbGRJZCA9ICdmaWVsZC1pZCcsXG4gIERvbWFpblR5cGUgPSAnZG9tYWluLXR5cGUnLFxuICBDYXRlZ29yaWNhbERvbWFpbiA9ICdjYXRlZ29yaWNhbC1kb21haW4nLFxuICBRdWFudGl0YXRpdmVEb21haW4gPSAncXVhbnRpdGF0aXZlLWRtYWluJyxcbiAgRmllbGQgPSAnZmllbGQnLFxuXG4gIFdvcmtzaGVldE5hbWUgPSAnd29ya3NoZWV0LW5hbWUnLFxuICBEYXNoYm9hcmROYW1lID0gJ2Rhc2hib2FyZCcsXG5cbiAgUGFyYW1ldGVySW5mbyA9ICdwYXJhbWV0ZXItaW5mbycsXG4gIFBhcmFtZXRlckluZm9zID0gJ3BhcmFtZXRlci1pbmZvcycsXG4gIFBhcmFtZXRlckNhcHRpb24gPSAncGFyZW1ldGVyLWNhcHRpb24nLFxuICBQYXJhbWV0ZXJGaWVsZE5hbWUgPSAncGFyYW1ldGVyLWZpZWxkLW5hbWUnLFxuICBQYXJhbWV0ZXJWYWx1ZSA9ICdwYXJhbWV0ZXItdmFsdWUnLFxuICBTZWxlY3Rpb24gPSAnc2VsZWN0aW9uJyxcbiAgU2VsZWN0aW9uVXBkYXRlVHlwZSA9ICdzZWxlY3Rpb25VcGRhdGVUeXBlJyxcbiAgSGllclZhbFNlbGVjdGlvbk1vZGVscyA9ICdoaWVyYXJjaGljYWxWYWx1ZVNlbGVjdGlvbk1vZGVscycsXG4gIFF1YW50UmFuZ2VTZWxlY3Rpb25Nb2RlbHMgPSAncXVhbnRhdGl2ZVJhbmdlU2VsZWN0aW9uTW9kZWxzJyxcbiAgRGltVmFsU2VsZWN0aW9uTW9kZWxzID0gJ2RpbWVuc2lvblZhbHVlU2VsZWN0aW9uTW9kZWxzJyxcblxuICBBY3RpdmVUYWJsZXNJbmZvID0gJ2FjdGl2ZS10YWJsZXMtaW5mbycsXG4gIERhdGFTb3VyY2UgPSAnZGF0YS1zb3VyY2UnLFxuICBEYXRhU291cmNlSWQgPSAnZGF0YS1zb3VyY2UtaWQnLFxuICBEZWx0YVRpbWVNcyA9ICdkZWx0YS10aW1lLW1zJyxcbiAgU2hvdWxkUmVmcmVzaERTID0gJ3Nob3VsZC1yZWZyZXNoLWRzJyxcbiAgRGF0YVNjaGVtYSA9ICdkYXRhLXNjaGVtYScsXG4gIERhdGFTb3VyY2VOYW1lID0gJ2RhdGEtc291cmNlLW5hbWUnLFxuICBDb2x1bW5zVG9JbmNsdWRlID0gJ2NvbHVtbnMtdG8taW5jbHVkZScsXG4gIEpvaW5EZXNjcmlwdGlvbiA9ICdqb2luLWRlc2NyaXB0aW9uJyxcbiAgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyaWVzID0gJ2Nvbm5lY3Rpb24tZGVzY3JpcHRpb24tc3VtbWFyaWVzJyxcblxuICBFeHRlbnNpb25EaWFsb2dVcmwgPSAnZXh0ZW5zaW9uLWRpYWxvZy11cmwnLFxuICBFeHRlbnNpb25EaWFsb2dQYXlsb2FkID0gJ2V4dGVuc2lvbi1kaWFsb2ctcGF5bG9hZCcsXG4gIElzRXh0ZW5zaW9uRGlhbG9nID0gJ2lzLWV4dGVuc2lvbi1kaWFsb2cnLFxuICBFeHRlbnNpb25EaWFsb2dIID0gJ2V4dGVuc2lvbi1kaWFsb2ctaGVpZ2h0JyxcbiAgRXh0ZW5zaW9uRGlhbG9nVyA9ICdleHRlbnNpb24tZGlhbG9nLXdpZHRoJyxcbiAgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0ID0gJ2V4dGVuc2lvbi1kaWFsb2ctcmVzdWx0JyxcblxuICBFeHRlbnNpb25Db250ZXh0TWVudUlkcyA9ICdleHRlbnNpb24tY29udGV4dC1tZW51LWlkcycsXG5cbiAgVGVzdENvbnZlcnNpb25QYXJhbWV0ZXIgPSAndGVzdC1jb252ZXJzaW9uLXBhcmFtZXRlcidcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvUGFyYW1ldGVycy50cyIsIi8vIERlY2xhcmUgdGhpcyBrZXkgdHlwZSBhbmQgZXhwb3J0IHRoZSBOb3RpZmljYXRpb25JZCB0byBtYWtlIHRoaXMgYmVoYXZlIGxpa2UgYSBzdHJpbmcgZW51bVxuZXhwb3J0IGVudW0gVmVyYklkIHtcbiAgQXBwbHlDYXRlZ29yaWNhbEZpbHRlciA9ICdjYXRlZ29yaWNhbC1maWx0ZXInLFxuICBBcHBseVJhbmdlRmlsdGVyID0gJ3JhbmdlLWZpbHRlcicsXG4gIENsZWFyRmlsdGVyID0gJ2NsZWFyLWZpbHRlcicsXG4gIEluaXRpYWxpemVFeHRlbnNpb24gPSAnaW5pdGlhbGl6ZS1leHRlbnNpb24nLFxuICBHZXREYXRhU3VtbWFyeURhdGEgPSAnZ2V0LXN1bW1hcnktZGF0YScsXG4gIEdldFVuZGVybHlpbmdEYXRhID0gJ2dldC11bmRlcmx5aW5nLWRhdGEnLFxuICBHZXREYXRhU291cmNlRGF0YSA9ICdnZXQtZGF0YXNvdXJjZS1kYXRhJyxcbiAgU2F2ZUV4dGVuc2lvblNldHRpbmdzID0gJ3NhdmUtZXh0ZW5zaW9uLXNldHRpbmdzJyxcbiAgR2V0U2VsZWN0ZWRNYXJrcyA9ICdnZXQtc2VsZWN0ZWQtbWFya3MnLFxuICBHZXRIaWdobGlnaHRlZE1hcmtzID0gJ2dldC1oaWdobGlnaHRlZC1tYXJrcycsXG4gIEdldFBhcmFtZXRlcnNGb3JTaGVldCA9ICdnZXQtcGFyYW1ldGVycy1mb3Itc2hlZXQnLFxuICBGaW5kUGFyYW1ldGVyID0gJ2ZpbmQtcGFyYW1ldGVyJyxcbiAgQ2hhbmdlUGFyYW1ldGVyVmFsdWUgPSAnY2hhbmdlLXBhcmFtZXRlci12YWx1ZScsXG4gIENsZWFyU2VsZWN0ZWRNYXJrcyA9ICdjbGVhci1zZWxlY3RlZC1tYXJrcycsXG4gIFNlbGVjdEJ5VmFsdWUgPSAnc2VsZWN0LWJ5LXZhbHVlJyxcbiAgR2V0RGF0YVNvdXJjZXMgPSAnZ2V0LWRhdGEtc291cmNlcycsXG4gIFJlZnJlc2hEYXRhU291cmNlID0gJ3JlZnJlc2gtZGF0YS1zb3VyY2UnLFxuICBHZXRGaWx0ZXJzID0gJ2dldC1maWx0ZXJzJyxcbiAgR2V0Q2F0ZWdvcmljYWxEb21haW4gPSAnZ2V0LWNhdGVnb3JpY2FsLWRvbWFpbicsXG4gIEdldFJhbmdlRG9tYWluID0gJ2dldC1yYW5nZS1kb21haW4nLFxuICBHZXRKb2luRGVzY3JpcHRpb24gPSAnZ2V0LWpvaW4tZGVzY3JpcHRpb24nLFxuICBHZXRDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMgPSAnZ2V0LWNvbm5lY3Rpb24tZGVzY3JpcHRpb24tc3VtbWFyaWVzJyxcbiAgRGlzcGxheURpYWxvZyA9ICdkaXNwbGF5LWRpYWxvZycsXG4gIENsb3NlRGlhbG9nID0gJ2Nsb3NlLWRpYWxvZycsXG4gIFRlc3RDb252ZXJzaW9uVmVyYiA9ICd0ZXN0LWNvbnZlcnNpb24tdmVyYicsXG4gIEdldEZpZWxkID0gJ2dldC1maWVsZCcsXG4gIEdldERhdGFTb3VyY2UgPSAnZ2V0LWRhdGFzb3VyY2UnLFxuICBHZXRBY3RpdmVUYWJsZXMgPSAnZ2V0LWFjdGl2ZS10YWJsZXMnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1ZlcmJzLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9ucyBmcm9tICcuL1ZlcnNpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXInO1xuXG4vLyBBIG1hcHBpbmcgZnJvbSB0aGUgc291cmNlIHZlcnNpb24gb2YgYSBtb2RlbCAtPiB0aGUgbmV4dCB2ZXJzaW9uIG9mIHRoZSBtb2RlbC4gRWFjaCBtYWpvclxuLy8gdmVyc2lvbiBidW1wIGNhbiBoYXZlIGFuIGFycmF5IG9mIGNvbnZlcnNpb25zIHRvIHBlcmZvcm0gaW4gb3JkZXJcbmNvbnN0IGV4ZWN1dGVVcGdyYWRlczogeyBbdmVyc2lvbjogbnVtYmVyXTogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4gfSA9IHtcbiAgMDogW11cbn07XG5cbmNvbnN0IGV4ZWN1dGVEb3duZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4gfSA9IHtcbiAgMDogW11cbn07XG5cbmNvbnN0IG5vdGlmaWNhdGlvbkRvd25ncmFkZXM6IHsgW3ZlcnNpb246IG51bWJlcl06IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+IH0gPSB7XG4gIDA6IFtdXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgd2hpY2ggaGFzIHRoZSBhYmlsaXR5IHRvIHVwZ3JhZGUgYW5kIGRvd25ncmFkZSB0aGUgY29udHJhY3QgYmV0d2VlbiB0aGUgdHdvIHZlcnNpb25zXG4gKiB3aGljaCBhcmUgc3BlY2lmaWVkLiBJZiBleHRlcm5hbE1ham9yVmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gcGxhdGZvcm1NYWpvclZlcnNpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGJlY2F1c2VcbiAqIHdlIHdvbid0IGtub3cgaG93IHRvIGRvIHRob3NlIGNvbnZlcnNpb25zLlxuICpcbiAqIEBwYXJhbSBleHRlcm5hbE1ham9yVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBleHRlcm5hbCBtb2R1bGUgaXMgdXNpbmdcbiAqIEBwYXJhbSBwbGF0Zm9ybU1ham9yVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBwbGF0Zm9ybSBpcyB1c2luZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlVmVyc2lvbkNvbnZlcnRlcihleHRlcm5hbE1ham9yVmVyc2lvbjogbnVtYmVyLCBwbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyKTogSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuXG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihleHRlcm5hbE1ham9yVmVyc2lvbikgfHxcbiAgICAhTnVtYmVyLmlzSW50ZWdlcihwbGF0Zm9ybU1ham9yVmVyc2lvbikgfHxcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbiA8IDAgfHxcbiAgICBwbGF0Zm9ybU1ham9yVmVyc2lvbiA8IDApIHtcblxuICAgIHRocm93IG5ldyBFcnJvcihgVmVyc2lvbnMgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyczpcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbj0ke2V4dGVybmFsTWFqb3JWZXJzaW9ufSBwbGF0Zm9ybU1ham9yVmVyc2lvbj0ke3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICB9XG5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uID4gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4dGVybmFsIHZlcnNpb24gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gcGxhdGZvcm0gdmVyc2lvbi5cbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbj0ke2V4dGVybmFsTWFqb3JWZXJzaW9ufSBwbGF0Zm9ybU1ham9yVmVyc2lvbj0ke3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICB9XG5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uID09PSBwbGF0Zm9ybU1ham9yVmVyc2lvbikge1xuICAgIC8vIElmIHdlIGFyZSB1c2luZyB0aGUgZXhhY3Qgc2FtZSB2ZXJzaW9ucywganVzdCB1c2UgdGhlIGlkZW50aXR5IGNvbnZlcnRlclxuICAgIHJldHVybiBuZXcgSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyKCk7XG4gIH1cblxuICAvLyBXYWxrIHRoZSBzcGFuIGJldHdlZW4gdGhlIHZlcnNpb25zIHdlIGhhdmUgaGVyZSBhbmQgY29sbGVjdCB0aGUgdXBncmFkZSBhbmQgZG93bmdyYWRlcyBuZWNlc3NhcnlcbiAgbGV0IG5lZWRlZEV4ZWN1dGVVcGdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IGV4dGVybmFsTWFqb3JWZXJzaW9uOyBpIDwgcGxhdGZvcm1NYWpvclZlcnNpb247IGkrKykge1xuICAgIGlmIChpIGluIGV4ZWN1dGVVcGdyYWRlcykge1xuICAgICAgbmVlZGVkRXhlY3V0ZVVwZ3JhZGVzLnB1c2goLi4uZXhlY3V0ZVVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBXYWxrIHRoZSBzcGFuIGJldHdlZW4gdGhlbSBiYWNrd2FyZHMgdG8gZ2V0IHRoZSBuZWNlc3NhcnkgZG93bmdyYWRlc1xuICBsZXQgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiA9IFtdO1xuICBsZXQgbmVlZGVkTm90aWZpY2F0aW9uRG93bmdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IHBsYXRmb3JtTWFqb3JWZXJzaW9uIC0gMTsgaSA+PSBleHRlcm5hbE1ham9yVmVyc2lvbjsgaS0tKSB7XG4gICAgaWYgKGkgaW4gZXhlY3V0ZURvd25ncmFkZXMpIHtcbiAgICAgIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLnB1c2goLi4uZXhlY3V0ZURvd25ncmFkZXNbaV0pO1xuICAgIH1cblxuICAgIGlmIChpIGluIG5vdGlmaWNhdGlvbkRvd25ncmFkZXMpIHtcbiAgICAgIG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXMucHVzaCguLi5ub3RpZmljYXRpb25Eb3duZ3JhZGVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlcihcbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbiwgcGxhdGZvcm1NYWpvclZlcnNpb24sIG5lZWRlZEV4ZWN1dGVVcGdyYWRlcywgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXMsIG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXMpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5LnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgTm90aWZpY2F0aW9uLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9ucyBmcm9tICcuL1ZlcnNpb25UcmFuc2xhdGlvbnMnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBjb252ZXJ0ZXIgaXMgZGVzaWduZWQgdG8gYWxsb3cgdGhlIHBsYXRmb3JtIGFuZCBleHRlcm5hbCBtb2R1bGVzXG4gKiB0byBzZWVtbGVzc2x5IGNvbW11bmljYXRlIG92ZXIgdHdvIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiB0aGUgaW50ZXJuYWwgQVBJLiBUaGUgb25seVxuICogbW9kZSBpdCBzdXBwb3J0cyBpcyBleHRlcm5hbCdzIHZlcnNpb24gPD0gcGxhdGZvcm0ncyB2ZXJzaW9uLiBXaGVuIGV4ZWN1dGluZ1xuICogY29tbWFuZHMsIGl0IGlzIHVzZWQgdG8gdXBncmFkZSB0aGUgZXh0ZXJuYWwgcmVwcmVzZW50YXRpb24gdG8gd2hhdCBwbGF0Zm9ybSBrbm93cyBvbiB0aGUgd2F5IGluXG4gKiBhbmQgZG93bmdyYWRlIHRoZSByZXByZXNlbnRhdGlvbnMgb24gdGhlIHdheSBvdXQuIFNpbWlsYXJseSBmb3Igbm90aWZpY2F0aW9ucywgaXQgY2FuXG4gKiBkb3duZ3JhZGUgdGhvc2Ugb24gdGhlIHdheSBmcm9tIHBsYXRmb3JtIHRvIGV4dGVybmFsLlxuICovXG5leHBvcnQgY2xhc3MgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIGltcGxlbWVudHMgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyXG4gICAqXG4gICAqIEBwYXJhbSBfZXh0ZXJuYWxNYWpvclZlcnNpb24gVGhlIG1ham9yIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IGFwaS1leHRlcm5hbC1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3BsYXRmb3JtTWFqb3JWZXJzaW9uIFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCB0aGUgYXBpLXBsYXRmb3JtLWpzIGlzIHVzaW5nXG4gICAqIEBwYXJhbSBfdXBncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIHRoZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSB3aGVuIHVwZ3JhZGluZyBjbWQgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBhZnRlciBhIGNtZFxuICAgKiBAcGFyYW0gX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgZG93bmdyYWRlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIG9uIGEgbm90aWZpY2F0aW9uXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlcixcbiAgICBwcml2YXRlIF9wbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyLFxuICAgIHByaXZhdGUgX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPixcbiAgICBwcml2YXRlIF9kb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4sXG4gICAgcHJpdmF0ZSBfZG93bmdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPikge1xuXG4gICAgaWYgKHRoaXMuX2V4dGVybmFsTWFqb3JWZXJzaW9uID4gdGhpcy5fcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNvbnZlcnQgYmV0d2VlbiBleHRlcm5hbCB2ZXJzaW9uICR7dGhpcy5fZXh0ZXJuYWxNYWpvclZlcnNpb259IGFuZCAke3RoaXMuX3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIC8vIFBlcmZvcm0gdGhlIHVwZ3JhZGUgb2YgdGhlIHZlcmIgYW5kIHBhcmFtZXRlcnMgdG8gdGhlIGxldmVsIHRoYXQgcGxhdGZvcm0gaXMgdXNpbmdcbiAgICBsZXQgdXBncmFkZWQgPSB7IHZlcmI6IHZlcmIsIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMgfTtcbiAgICBmb3IgKGNvbnN0IHVwZ3JhZGVUcmFuc2xhdGlvbiBvZiB0aGlzLl91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucykge1xuICAgICAgdXBncmFkZWQgPSB1cGdyYWRlVHJhbnNsYXRpb24odXBncmFkZWQudmVyYiwgdXBncmFkZWQucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZ3JhZGVkO1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIC8vIERvd25ncmFkZSB0aGUgcmVzcG9uc2UgdG8gd2hhdCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIGV4cGVjdGluZ1xuICAgIGxldCBkb3duZ3JhZGVkID0gZXhlY3V0ZVJlc3BvbnNlO1xuICAgIGZvciAoY29uc3QgZG93bmdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb3duZ3JhZGVkO1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IE5vdGlmaWNhdGlvbiB7XG4gICAgLy8gRG93bmdyYWRlIHRoZSBub3RpZmljYXRpb24gdG8gd2hhdCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIGV4cGVjdGluZ1xuICAgIGxldCBkb3duZ3JhZGVkID0gbm90aWZpY2F0aW9uO1xuICAgIGZvciAoY29uc3QgZG93bmdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fZG93bmdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zKSB7XG4gICAgICBkb3duZ3JhZGVkID0gZG93bmdyYWRlVHJhbnNsYXRpb24oZG93bmdyYWRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvd25ncmFkZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlLCBOb3RpZmljYXRpb24sIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMgfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqXG4gKiBUaGlzIHZlcnNpb24gY29udmVydGVyIGRvZXNuJ3QgYWN0dWFsbHkgZG8gYW55dGhpbmcgYnV0IGlzIHVzZWZ1bCBmb3IgdGVzdGluZyBvciB3aGVuIHdlIGhhdmVcbiAqIGEgbWF0Y2hpbmcgcGxhdGZvcm0gYW5kIGludGVybmFsIHZlcnNpb24gbnVtYmVyXG4qL1xuZXhwb3J0IGNsYXNzIElkZW50aXR5VmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgcHVibGljIHVwZ3JhZGVFeGVjdXRlQ2FsbCh2ZXJiOiBhbnksIHBhcmFtZXRlcnM6IGFueSk6IHsgdmVyYjogVmVyYklkOyBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVyczsgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcmI6IHZlcmIgYXMgVmVyYklkLFxuICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyBhcyBFeGVjdXRlUGFyYW1ldGVyc1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlRXhlY3V0ZVJldHVybihleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSk6IEV4ZWN1dGVSZXNwb25zZSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiBub3RpZmljYXRpb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIudHMiLCJpbXBvcnQgKiBhcyBndWlkIGZyb20gJ2d1aWQnO1xuXG5pbXBvcnQgeyBDcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIENvbW1hbmRNZXNzYWdlLFxuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBJbml0aWFsaXplTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE5vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL2ludGVyZmFjZS9NZXNzZW5nZXInO1xuaW1wb3J0IHsgUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIGlzQ29tbWFuZE1lc3NhZ2UsXG4gIGlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgaXNJbml0TWVzc2FnZSxcbiAgaXNNZXNzYWdlLFxuICBpc05vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vTWVzc2FnZVR5cGVDaGVja3MnO1xuaW1wb3J0IHsgVmVyc2lvbk51bWJlciwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgTW9kZWwsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBUaGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBpcyB0aGUgcHJpbWFyeSBleHBvcnQgZnJvbSB0aGUgYXBpLW1lc3NhZ2luZyBtb2R1bGUuIEFuIGluc3RhbmNlIG9mXG4gKiB0aGlzIGNsYXNzIGNhbiBiZSBpbnN0YW50aWF0ZWQgb24gYm90aCBzaWRlcyBvZiBhIGZyYW1lIGJvdW5kYXJ5IHRvIGZhY2lsaXRhdGUgY29tbXVuaWNhdGlvblxuICogaW4gYm90aCBkaXJlY3Rpb25zIGJldHdlZW4gdGhlIGZyYW1lcy4gVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGJvdGggdGhlIGRpc3BhdGNoZXIgYW5kIHRoZSBsaXN0ZW5lclxuICogcG9ydGlvbnMsIGJ1dCBkb2Vzbid0IHJlcXVpcmUgY2FsbGVycyB0byBjYXJlIGFib3V0IGJvdGguXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGltcGxlbWVudHMgTWVzc2VuZ2VyIHtcbiAgcHJpdmF0ZSB1bnJlZ2lzdGVyRnVuY3Rpb246IHVuZGVmaW5lZCB8ICgoKSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBpbml0aWFsaXplTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBJbml0aWFsaXplTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIGNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIGNvbW1hbmRNZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IENvbW1hbmRNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG4gIHByaXZhdGUgbm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBOb3RpZmljYXRpb25NZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZU1lc3Nlbmdlci4gSWYgeW91IHdvdWxkIGxpa2UgdG8gdXNlIHRoZSBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGFzIGEgTWVzc2FnZUxpc3RlbmVyLFxuICAgKiBiZSBzdXJlIHRvIGNhbGwgU3RhcnRMaXN0ZW5pbmcgYW5kIHJlZ2lzdGVyIG1lc3NhZ2UgaGFuZGxlcnMuXG4gICAqIEBwYXJhbSB0aGlzV2luZG93IFRoZSB3aW5kb3cgb2JqZWN0IHdoaWNoIHRoZSBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGxpdmVzLiBBbiBvbk1lc3NhZ2UgbGlzdGVuZXIgd2lsbCBiZSBhZGRlZCBoZXJlLlxuICAgKiBAcGFyYW0gW290aGVyV2luZG93XSBPcHRpb25hbCBvdGhlcldpbmRvdyB3aGljaCBtZXNzYWdlcyB3aWxsIGJlIHBvc3RlZCB0by5cbiAgICogICAgICAgICAgICAgICAgICAgICAgSWYgZGVmaW5lZCwgaW5jb21pbmcgbWVzc2FnZXMgbXVzdCBvcmlnaW5hdGUgZnJvbSBvdGhlcldpbmRvdyB0byBiZSBwYXNzZWQgb25cbiAgICogQHBhcmFtIFtvdGhlcldpbmRvd09yaWdpbl0gVGhlIHRhcmdldCBvcmlnaW4gd2hpY2ggb3RoZXJXaW5kb3cgbXVzdCBoYXZlIGluIG9yZGVyIHRvIHJlY2VpdmUgZGlzcGF0Y2hlZCBtZXNzYWdlcy5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB2YWx1ZSB3aWxsIGJlIHNlbnQgYXMgdGhlIHRhcmdldE9yaWdpbiBvZiBhIHBvc3RNZXNzYWdlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Bvc3RNZXNzYWdlKVxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhpc1dpbmRvdzogV2luZG93LCBwcml2YXRlIG90aGVyV2luZG93PzogV2luZG93LCBwcml2YXRlIG90aGVyV2luZG93T3JpZ2luPzogc3RyaW5nKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNhbGwgU3RhcnRMaXN0ZW5pbmdcbiAgfVxuXG4gIC8vLy8vIE1lc3NhZ2VMaXN0ZW5lciBJbXBsZW1lbnRhdGlvblxuXG4gIHB1YmxpYyBzdGFydExpc3RlbmluZygpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGFyZSBsaXN0ZW5pbmcsIGlmIG5vdCwgaG9vayB1cCBhIG1lc3NhZ2UgbGlzdGVuZXJcbiAgICBpZiAoIXRoaXMudW5yZWdpc3RlckZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBib3VuZEhhbmRsZXIgPSB0aGlzLm9uTWVzc2FnZVJlY2VpdmVkLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnRoaXNXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGJvdW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbiA9ICgpID0+IHRoaXMudGhpc1dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgYm91bmRIYW5kbGVyLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RvcExpc3RlbmluZygpOiB2b2lkIHtcbiAgICAvLyBTdG9wIGxpc3RlbmluZyBpZiB3ZSBoYXZlIHN0YXJ0ZWQgbGlzdGVuaW5nXG4gICAgaWYgKHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbigpO1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEluaXRpYWxpemVNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogSW5pdGlhbGl6ZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsaXplTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldENvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldENvbW1hbmRNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogQ29tbWFuZE1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgcHVibGljIHNldE5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBOb3RpZmljYXRpb25NZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgLy8vLy8gTWVzc2FnZURpc3BhdGNoZXIgSW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgcHJlcGFyZUluaXRpYWxpemF0aW9uTWVzc2FnZShhcGlWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLCBjcm9zc0ZyYW1lVmVyc2lvbjogVmVyc2lvbk51bWJlcik6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSxcbiAgICAgIGNyb3NzRnJhbWVWZXJzaW9uOiBjcm9zc0ZyYW1lVmVyc2lvbixcbiAgICAgIGFwaVZlcnNpb246IGFwaVZlcnNpb25cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUNvbW1hbmRNZXNzYWdlKHZlcmJJZDogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogQ29tbWFuZE1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuQ29tbWFuZCxcbiAgICAgIHZlcmJJZDogdmVyYklkLFxuICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyc1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShjb21tYW5kR3VpZDogc3RyaW5nLCBkYXRhOiBNb2RlbCB8IHVuZGVmaW5lZCwgZXJyb3I6IE1vZGVsIHwgdW5kZWZpbmVkKTogUHJlcGFyZWRNZXNzYWdlIHtcbiAgICBjb25zdCBtZXNzYWdlOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSxcbiAgICAgIGNvbW1hbmRHdWlkOiBjb21tYW5kR3VpZCxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZU5vdGlmaWNhdGlvbk1lc3NhZ2Uobm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkLCBkYXRhOiBNb2RlbCk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogTm90aWZpY2F0aW9uTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24sXG4gICAgICBub3RpZmljYXRpb25JZDogbm90aWZpY2F0aW9uSWQsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmVzIGEgcGVuZGluZyBtZXNzYWdlIGZvciBzZW5kaW5nIGFuZCByZXR1cm5zIHRoZSBwcmVwYXJlZCBtZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gYmUgc2VudCB0byB0aGlzLm90aGVyV2luZG93XG4gICAqIEByZXR1cm5zIFRoZSBwcmVwYXJlZCBtZXNzYWdlXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVNZXNzYWdlKG1zZzogTWVzc2FnZSk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgaWYgKCF0aGlzLm90aGVyV2luZG93IHx8ICF0aGlzLm90aGVyV2luZG93T3JpZ2luKSB7XG4gICAgICB0aHJvdyAnT3RoZXIgd2luZG93IG5vdCBpbml0aWFsaXplZCwgY2Fubm90IGRpc3BhdGNoIG1lc3NhZ2VzJztcbiAgICB9XG5cbiAgICBjb25zdCBwcmVwYXJlZE1lc3NhZ2UgPSBuZXcgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZShtc2csIHRoaXMub3RoZXJXaW5kb3csIHRoaXMub3RoZXJXaW5kb3dPcmlnaW4pO1xuICAgIHJldHVybiBwcmVwYXJlZE1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkLiBEb2VzIHNvbWUgdmFsaWRhdGlvbiBvZiB0aGUgbWVzc2FnZSwgYW5kIHRoZW5cbiAgICogY2FsbHMgYW4gYXBwcm9wcmlhdGUgbWVzc2FnZSBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBUaGUgaW5jb21pbmcgTWVzc2FnZUV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50OiBNZXNzYWdlRXZlbnQpOiB2b2lkIHtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gb3RoZXJXaW5kb3cgZGVmaW5lZCwgbWFrZSBzdXJlIHRoZSBtZXNzYWdlIGlzIGNvbWluZyBmcm9tIHRoZXJlXG4gICAgaWYgKHRoaXMub3RoZXJXaW5kb3cgJiYgZXZlbnQuc291cmNlICE9PSB0aGlzLm90aGVyV2luZG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gc29tZSB2YWxpZGF0aW9uIG9uIGV2ZW50LmRhdGEgdG8gbWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSByZWNlaXZlZCBhIHJlYWwgbWVzc2FnZVxuICAgIGlmICghZXZlbnQuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIGRlY2xhcmVkIG1lc3NhZ2UgdHlwZSwgdmFsaWRhdGUgdGhlIG1lc3NhZ2UsIGFuZCBjYWxsIGFuIGFwcHJvcHJpYXRlIGhhbmRlciBpZiBvbmUgZXhpc3RzXG4gICAgc3dpdGNoIChtZXNzYWdlLm1zZ1R5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZToge1xuICAgICAgICBpZiAoIWlzSW5pdE1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgZXZlbnQuc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZToge1xuICAgICAgICBpZiAoIWlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShtZXNzYWdlKSB8fCAhdGhpcy5jb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgZXZlbnQuc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbW1hbmQ6IHtcbiAgICAgICAgaWYgKCFpc0NvbW1hbmRNZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWFuZE1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb246IHtcbiAgICAgICAgaWYgKCFpc05vdGlmaWNhdGlvbk1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMubm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIEp1c3QgaWdub3JlIHRoaXMgc2luY2Ugd2UgZG9uJ3Qga25vdyBob3cgdG8gaGFuZGxlIHRoZSBtZXNzYWdlIHR5cGVcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXIudHMiLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzJztcbmltcG9ydCB7IFByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL1ByZXBhcmVkTWVzc2FnZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFByZXBhcmVkTWVzc2FnZSBpbnRlcmZhY2UgdXNlZCB0byBwb3N0IG1lc3NhZ2VzIGJldHdlZW5cbiAqIHR3byBmcmFtZXMgdXNpbmcgd2luZG93LnBvc3RNZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlIGltcGxlbWVudHMgUHJlcGFyZWRNZXNzYWdlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS5cbiAgICogQHBhcmFtIF9tZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHNlbnRcbiAgICogQHBhcmFtIF90YXJnZXQgVGhlIHRhcmdldCB3aW5kb3cgd2hlcmUgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBzZW50XG4gICAqIEBwYXJhbSBfb3JpZ2luIFRoZSB0YXJnZXRPcmlnaW4gd2hlcmUgdGhpcyBtZXNzYWdlIGNhbiBiZSByZWNlaXZlZFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2U6IE1lc3NhZ2UsIHByaXZhdGUgX3RhcmdldDogV2luZG93LCBwcml2YXRlIF9vcmlnaW46IHN0cmluZykge1xuXG4gIH1cblxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VHdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9tZXNzYWdlLm1zZ0d1aWQ7IH1cblxuICBwdWJsaWMgc2VuZCgpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIHRoaXMuX3RhcmdldC5wb3N0TWVzc2FnZSh0aGlzLl9tZXNzYWdlLCB0aGlzLl9vcmlnaW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlLnRzIiwiaW1wb3J0ICogYXMgZ3VpZCBmcm9tICdndWlkJztcblxuaW1wb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uL2ludGVyZmFjZS9WZXJzaW9uTnVtYmVyJztcbmltcG9ydCB7XG4gIENvbW1hbmRNZXNzYWdlLFxuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBJbml0aWFsaXplTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE5vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlIG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZShkYXRhOiBNZXNzYWdlIHwgYW55KTogZGF0YSBpcyBNZXNzYWdlIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRhdGEgYXMgTWVzc2FnZTtcbiAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLm1zZ0d1aWQgfHwgIW1lc3NhZ2UubXNnVHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghZ3VpZC5pc0d1aWQobWVzc2FnZS5tc2dHdWlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWVzc2FnZS5tc2dUeXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VUeXBlczogQXJyYXk8c3RyaW5nPiA9XG4gICAgW01lc3NhZ2VUeXBlLkNvbW1hbmQsIE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSwgTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSwgTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uXTtcblxuICBpZiAobWVzc2FnZVR5cGVzLmluZGV4T2YobWVzc2FnZS5tc2dUeXBlKSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmVyc2lvbih2ZXJzaW9uTnVtYmVyOiBWZXJzaW9uTnVtYmVyIHwgYW55KTogdmVyc2lvbk51bWJlciBpcyBWZXJzaW9uTnVtYmVyIHtcbiAgaWYgKCF2ZXJzaW9uTnVtYmVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgdiA9IHZlcnNpb25OdW1iZXIgYXMgVmVyc2lvbk51bWJlcjtcblxuICBpZiAodHlwZW9mIHYgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2LmZpeCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHYubWlub3IgIT09ICdudW1iZXInIHx8IHR5cGVvZiB2Lm1ham9yICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbml0TWVzc2FnZShtZXNzYWdlOiBJbml0aWFsaXplTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgSW5pdGlhbGl6ZU1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGluaXRNZXNzYWdlID0gbWVzc2FnZSBhcyBJbml0aWFsaXplTWVzc2FnZTtcbiAgaWYgKGluaXRNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkluaXRpYWxpemUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWluaXRNZXNzYWdlLmFwaVZlcnNpb24gfHwgIWlzVmVyc2lvbihpbml0TWVzc2FnZS5hcGlWZXJzaW9uKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghaW5pdE1lc3NhZ2UuY3Jvc3NGcmFtZVZlcnNpb24gfHwgIWlzVmVyc2lvbihpbml0TWVzc2FnZS5jcm9zc0ZyYW1lVmVyc2lvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShtZXNzYWdlOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjck1lc3NhZ2UgPSBtZXNzYWdlIGFzIENvbW1hbmRSZXNwb25zZU1lc3NhZ2U7XG4gIGlmIChjck1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuQ29tbWFuZFJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFndWlkLmlzR3VpZChjck1lc3NhZ2UuY29tbWFuZEd1aWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFjck1lc3NhZ2UuZGF0YSAmJiAhY3JNZXNzYWdlLmVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRNZXNzYWdlKG1lc3NhZ2U6IENvbW1hbmRNZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBDb21tYW5kTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY29tbWFuZE1lc3NhZ2UgPSBtZXNzYWdlIGFzIENvbW1hbmRNZXNzYWdlO1xuICBpZiAoY29tbWFuZE1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuQ29tbWFuZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghY29tbWFuZE1lc3NhZ2UucGFyYW1ldGVycyB8fCB0eXBlb2YgY29tbWFuZE1lc3NhZ2UucGFyYW1ldGVycyAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNvbW1hbmRNZXNzYWdlLnZlcmJJZCB8fCB0eXBlb2YgY29tbWFuZE1lc3NhZ2UudmVyYklkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RpZmljYXRpb25NZXNzYWdlKG1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIE5vdGlmaWNhdGlvbk1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBtZXNzYWdlIGFzIE5vdGlmaWNhdGlvbk1lc3NhZ2U7XG4gIGlmIChub3RpZmljYXRpb25NZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbm90aWZpY2F0aW9uTWVzc2FnZS5kYXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbklkIHx8IHR5cGVvZiBub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbklkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvTWVzc2FnZVR5cGVDaGVja3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGFzaGJvYXJkSW1wbCB9IGZyb20gJy4vSW1wbC9EYXNoYm9hcmRJbXBsJztcbmltcG9ydCB7IFNoZWV0IH0gZnJvbSAnLi9TaGVldCc7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBTaGVldCBpbXBsZW1lbnRzIENvbnRyYWN0LkRhc2hib2FyZCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXNoYm9hcmRJbXBsOiBEYXNoYm9hcmRJbXBsKSB7XG4gICAgc3VwZXIoX2Rhc2hib2FyZEltcGwpO1xuICAgIF9kYXNoYm9hcmRJbXBsLmluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0cygpOiBBcnJheTxDb250cmFjdC5Xb3Jrc2hlZXQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkSW1wbC53b3Jrc2hlZXRzO1xuICB9XG5cbiAgcHVibGljIGdldCBvYmplY3RzKCk6IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmRJbXBsLm9iamVjdHM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgYXMgVmVyc2lvbk51bWJlckNvbnRyYWN0IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgZXh0ZW5zaW9ucyBsaWJyYXJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBWZXJzaW9uTnVtYmVyIGltcGxlbWVudHMgVmVyc2lvbk51bWJlckNvbnRyYWN0IHtcbiAgLy8gVXNpbmcgc29tZSB3ZWJwYWNrIHRyaWNrcywgd2UgY2FuIGluamVjdCB0aGlzIHZlcnNpb24gaW50byBvdXIgY29kZSAoa2luZGEgbGlrZSBjKysgcHJlcHJvY2Vzc29yIHN0dWZmKVxuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFZlcnNpb25OdW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgdmVyc2lvbiBudW1iZXIuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBWZXJzaW9uTnVtYmVyIHtcbiAgICByZXR1cm4gVmVyc2lvbk51bWJlci5faW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFNldFZlcnNpb25OdW1iZXIobnVtU3RyaW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBWZXJzaW9uTnVtYmVyLl9pbnN0YW5jZSA9IG5ldyBWZXJzaW9uTnVtYmVyKG51bVN0cmluZyk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgbWFqb3I6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IG1pbm9yOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBmaXg6IG51bWJlcjtcblxuICAvLyBwcml2YXRlIGNvbnN0cnVjdG9yIHNvIGV2ZXJ5b25lIHVzZXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHZlcnNpb25TdHJpbmc6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcnRzID0gdmVyc2lvblN0cmluZy5zcGxpdCgnLicpLm1hcChwID0+IHBhcnNlSW50KHAsIDEwKSk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBJbnZhbGlkIHZlcnNpb24gbnVtYmVyOiAke3ZlcnNpb25TdHJpbmd9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYWpvciA9IHBhcnRzWzBdO1xuICAgIHRoaXMubWlub3IgPSBwYXJ0c1sxXTtcbiAgICB0aGlzLmZpeCA9IHBhcnRzWzJdO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLm1ham9yfS4ke3RoaXMubWlub3J9LiR7dGhpcy5maXh9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVmVyc2lvbk51bWJlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgRGFzaGJvYXJkT2JqZWN0VHlwZSwgRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbywgU2hlZXRQYXRoLCBWaXN1YWxJZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IERhc2hib2FyZE9iamVjdCB9IGZyb20gJy4uL0Rhc2hib2FyZE9iamVjdCc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vUG9pbnQnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4uL1NpemUnO1xuaW1wb3J0IHsgV29ya3NoZWV0IH0gZnJvbSAnLi4vV29ya3NoZWV0JztcblxuaW1wb3J0IHsgU2hlZXRJbXBsIH0gZnJvbSAnLi9TaGVldEltcGwnO1xuaW1wb3J0IHsgU2hlZXRJbmZvSW1wbCB9IGZyb20gJy4vU2hlZXRJbmZvSW1wbCc7XG5pbXBvcnQgeyBXb3Jrc2hlZXRJbXBsIH0gZnJvbSAnLi9Xb3Jrc2hlZXRJbXBsJztcblxuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZEltcGwgZXh0ZW5kcyBTaGVldEltcGwge1xuICBwcml2YXRlIF93b3Jrc2hlZXRzOiBBcnJheTxDb250cmFjdC5Xb3Jrc2hlZXQ+O1xuICBwcml2YXRlIF9vYmplY3RzOiBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmZvOiBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLCBwcml2YXRlIF9zaGVldFBhdGg6IFNoZWV0UGF0aCkge1xuICAgIHN1cGVyKG5ldyBTaGVldEluZm9JbXBsKF9pbmZvLm5hbWUsIENvbnRyYWN0LlNoZWV0VHlwZS5EYXNoYm9hcmQsIG5ldyBTaXplKF9pbmZvLnNpemUuaCwgX2luZm8uc2l6ZS53KSkpO1xuICB9XG5cbiAgcHVibGljIGdldCB3b3Jrc2hlZXRzKCk6IEFycmF5PENvbnRyYWN0LldvcmtzaGVldD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRzO1xuICB9XG5cbiAgcHVibGljIGdldCBvYmplY3RzKCk6IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXNoYm9hcmQ6IENvbnRyYWN0LkRhc2hib2FyZCk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlJbnRlcm5hbFZhbHVlKGRhc2hib2FyZCwgJ2Rhc2hib2FyZCcpO1xuXG4gICAgdGhpcy5fd29ya3NoZWV0cyA9IG5ldyBBcnJheTxXb3Jrc2hlZXQ+KCk7XG4gICAgdGhpcy5fb2JqZWN0cyA9IG5ldyBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+KCk7XG5cbiAgICAvLyBQcm9jZXNzIGFsbCB0aGUgem9uZXMgd2hpY2ggYXJlIGNvbnRhaW5lZCBpbiB0aGlzIGRhc2hib2FyZFxuICAgIGZvciAoY29uc3Qgem9uZSBvZiB0aGlzLl9pbmZvLnpvbmVzKSB7XG4gICAgICBsZXQgd29ya3NoZWV0OiBXb3Jrc2hlZXQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGNvbnN0IHpvbmVTaXplID0gbmV3IFNpemUoem9uZS5oZWlnaHQsIHpvbmUud2lkdGgpO1xuXG4gICAgICBpZiAoem9uZS56b25lVHlwZSA9PT0gRGFzaGJvYXJkT2JqZWN0VHlwZS5Xb3Jrc2hlZXQpIHtcbiAgICAgICAgY29uc3Qgc2hlZXRJbmZvID0gbmV3IFNoZWV0SW5mb0ltcGwoem9uZS5uYW1lLCBDb250cmFjdC5TaGVldFR5cGUuV29ya3NoZWV0LCB6b25lU2l6ZSk7XG4gICAgICAgIGNvbnN0IHZpeklkOiBWaXN1YWxJZCA9IHtcbiAgICAgICAgICB3b3Jrc2hlZXQ6IHpvbmUubmFtZSxcbiAgICAgICAgICBkYXNoYm9hcmQ6IHRoaXMuX2luZm8ubmFtZSxcbiAgICAgICAgICBzdG9yeWJvYXJkOiB0aGlzLl9zaGVldFBhdGguc3Rvcnlib2FyZCxcbiAgICAgICAgICBmbGlwYm9hcmRab25lSUQ6IHRoaXMuX3NoZWV0UGF0aC5mbGlwYm9hcmRab25lSUQsXG4gICAgICAgICAgc3RvcnlQb2ludElEOiB0aGlzLl9zaGVldFBhdGguc3RvcnlQb2ludElEXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgd29ya3NoZWV0SW1wbCA9IG5ldyBXb3Jrc2hlZXRJbXBsKHNoZWV0SW5mbywgdml6SWQsIGRhc2hib2FyZCk7XG4gICAgICAgIHdvcmtzaGVldCA9IG5ldyBXb3Jrc2hlZXQod29ya3NoZWV0SW1wbCk7XG4gICAgICAgIHRoaXMuX3dvcmtzaGVldHMucHVzaCh3b3Jrc2hlZXQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB6b25lUG9pbnQgPSBuZXcgUG9pbnQoem9uZS54LCB6b25lLnkpO1xuXG4gICAgICBjb25zdCBkYXNoYm9hcmRPYmplY3QgPSBuZXcgRGFzaGJvYXJkT2JqZWN0KFxuICAgICAgICBkYXNoYm9hcmQsXG4gICAgICAgIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXNoYm9hcmRPYmplY3RUeXBlLmNvbnZlcnQoem9uZS56b25lVHlwZSksXG4gICAgICAgIHpvbmVQb2ludCxcbiAgICAgICAgem9uZVNpemUsXG4gICAgICAgIHdvcmtzaGVldFxuICAgICAgKTtcblxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKGRhc2hib2FyZE9iamVjdCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0Rhc2hib2FyZEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZGFzaGJvYXJkIG9iamVjdHMgLSB0aGUgem9uZXMgaW4gYSBkYXNoYm9hcmQuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRPYmplY3QgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmRPYmplY3Qge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQsXG4gICAgcHJpdmF0ZSBfdHlwZTogQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgICBwcml2YXRlIF9wb3NpdGlvbjogQ29udHJhY3QuUG9pbnQsXG4gICAgcHJpdmF0ZSBfc2l6ZTogQ29udHJhY3QuU2l6ZSxcbiAgICBwcml2YXRlIF93b3Jrc2hlZXQ6IENvbnRyYWN0LldvcmtzaGVldCB8IHVuZGVmaW5lZFxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5EYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcG9zaXRpb24oKTogQ29udHJhY3QuUG9pbnQge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2l6ZSgpOiBDb250cmFjdC5TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0KCk6IENvbnRyYWN0LldvcmtzaGVldCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkT2JqZWN0LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBQb2ludCBpbXBsZW1lbnRzIENvbnRyYWN0LlBvaW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3g6IG51bWJlciwgcHJpdmF0ZSBfeTogbnVtYmVyKSB7IH1cblxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Qb2ludC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgU2l6ZSBpbXBsZW1lbnRzIENvbnRyYWN0LlNpemUge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIsIHByaXZhdGUgX3dpZHRoOiBudW1iZXIpIHsgfVxuXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NpemUudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2hlZXQgfSBmcm9tICcuL1NoZWV0JztcbmltcG9ydCB7IFdvcmtzaGVldEltcGwgfSBmcm9tICcuL0ltcGwvV29ya3NoZWV0SW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXQgZXh0ZW5kcyBTaGVldCBpbXBsZW1lbnRzIENvbnRyYWN0LldvcmtzaGVldCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3Jrc2hlZXRJbXBsOiBXb3Jrc2hlZXRJbXBsKSB7XG4gICAgc3VwZXIoX3dvcmtzaGVldEltcGwpO1xuXG4gICAgLy8gQ2FsbCB0byBpbml0aWFsaXplIGV2ZW50cyBhbmQgdGhlbiBjYWxsIGRvd24gdG8gdGhlIGV2ZW50IGxpc3RlbmVyIG1hbmFnZXIgdG8gaGFuZGxlIHRoaW5nc1xuICAgIHRoaXMuX3dvcmtzaGVldEltcGwuaW5pdGlhbGl6ZUV2ZW50cyh0aGlzKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnREYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5wYXJlbnREYXNoYm9hcmQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICBmaWVsZE5hbWU6IHN0cmluZywgdmFsdWVzOiBBcnJheTxzdHJpbmc+LCB1cGRhdGVUeXBlOiBDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlLCBvcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5hcHBseUZpbHRlckFzeW5jKGZpZWxkTmFtZSwgdmFsdWVzLCB1cGRhdGVUeXBlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5EYXRhU291cmNlPj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldERhdGFTb3VyY2VzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0RmlsdGVyc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRTdW1tYXJ5RGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SURBc3luYyhtYXJrc0luZm86IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPiwgdXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlJZEFzeW5jKG1hcmtzSW5mbywgdXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWE+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5zZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SWRBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Xb3Jrc2hlZXQudHMiLCJpbXBvcnQgeyBTaGVldFR5cGUsIFNpemUgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNoZWV0UGF0aCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldEluZm9JbXBsIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9zaGVldFR5cGU6IFNoZWV0VHlwZSxcbiAgICBwcml2YXRlIF9zaGVldFNpemU6IFNpemVcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRTaXplKCk6IFNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldFNpemU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0VHlwZSgpOiBTaGVldFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0UGF0aCgpOiBTaGVldFBhdGgge1xuICAgIHJldHVybiB7XG4gICAgICBzaGVldE5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGlzRGFzaGJvYXJkOiB0aGlzLnNoZWV0VHlwZSA9PT0gU2hlZXRUeXBlLkRhc2hib2FyZFxuICAgICAgLy8gVE9ETyAtIFN0b3JpZXNcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW5mb0ltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIERhdGFTY2hlbWEsXG4gIERhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZUluZm8sXG4gIEZpbHRlckV2ZW50LCBOb3RpZmljYXRpb25JZCxcbiAgVmlzdWFsSWQsXG4gIFdvcmtzaGVldERhdGFTb3VyY2VJbmZvXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi9EYXRhU291cmNlJztcbmltcG9ydCB7IFdvcmtzaGVldCB9IGZyb20gJy4uL1dvcmtzaGVldCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi9EYXRhU291cmNlSW1wbCc7XG5pbXBvcnQgeyBTaGVldEltcGwgfSBmcm9tICcuL1NoZWV0SW1wbCc7XG5pbXBvcnQgeyBTaGVldEluZm9JbXBsIH0gZnJvbSAnLi9TaGVldEluZm9JbXBsJztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvRmlsdGVyQ2hhbmdlZEV2ZW50JztcbmltcG9ydCB7IE1hcmtzU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQnO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRmlsdGVyU2VydmljZSc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSwgR2V0RGF0YVR5cGUgfSBmcm9tICcuLi9TZXJ2aWNlcy9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvTm90aWZpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2VsZWN0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5jb25zdCB2aXN1YWxJZHNBcmVFcXVhbCA9IGZ1bmN0aW9uIChhOiBWaXN1YWxJZCwgYjogVmlzdWFsSWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGEgJiYgYiAmJlxuICAgIGEud29ya3NoZWV0ID09PSBiLndvcmtzaGVldCAmJlxuICAgIGEuZGFzaGJvYXJkID09PSBiLmRhc2hib2FyZCAmJlxuICAgIGEuc3Rvcnlib2FyZCA9PT0gYi5zdG9yeWJvYXJkICYmXG4gICAgYS5zdG9yeVBvaW50SUQgPT09IGIuc3RvcnlQb2ludElEICYmXG4gICAgYS5mbGlwYm9hcmRab25lSUQgPT09IGIuZmxpcGJvYXJkWm9uZUlEO1xufTtcblxuZXhwb3J0IGNsYXNzIFdvcmtzaGVldEltcGwgZXh0ZW5kcyBTaGVldEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2hlZXRJbmZvSW1wbDogU2hlZXRJbmZvSW1wbCxcbiAgICBwcml2YXRlIF92aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgcHJpdmF0ZSBfcGFyZW50RGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQpIHtcbiAgICBzdXBlcihzaGVldEluZm9JbXBsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyZW50RGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERhc2hib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHdoaWNoIGdvZXMgdGhyb3VnaCBhbmQgcmVnaXN0ZXJzIGVhY2ggZXZlbnQgdHlwZSB0aGlzIGltcGwga25vd3MgYWJvdXRcbiAgICogd2l0aCB0aGUgTm90aWZpY2F0aW9uU2VydmljZS4gSXQgcmV0dXJucyBhbiBhcnJheSBvZiBTaW5nbGVFdmVudE1hbmFnZXIgb2JqZWN0cyB3aGljaFxuICAgKiBjYW4gdGhlbiBiZSBwYXNzZWQgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXIgdG8gaGFuZGxlIHVzZXIgcmVnaXN0cmF0aW9uIC8gdW5yZWdpc3RyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7V29ya3NoZWV0fSB3b3Jrc2hlZXQgVGhlIHdvcmtzaGVldCBvYmplY3Qgd2hpY2ggd2lsbCBiZSBpbmNsdWRlZCB3aXRoIHRoZSBldmVudCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+fSBDb2xsZWN0aW9uIG9mIGV2ZW50IG1hbmFnZXJzIHRvIHBhc3MgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplRXZlbnRzKHdvcmtzaGVldDogV29ya3NoZWV0KTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFsbCBvZiB0aGUgZXZlbnQgbWFuYWdlcnMgd2UnbGwgbmVlZCAob25lIGZvciBlYWNoIGV2ZW50IHR5cGUpXG4gICAgY29uc3QgbWFya3NFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPE1hcmtzU2VsZWN0ZWRFdmVudD4oQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5NYXJrU2VsZWN0aW9uQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2VsZWN0ZWRNYXJrc0NoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgdmlzdWFsSWQgPSBtb2RlbCBhcyBWaXN1YWxJZDtcbiAgICAgIHJldHVybiB2aXN1YWxJZHNBcmVFcXVhbCh2aXN1YWxJZCwgdGhpcy52aXN1YWxJZCk7XG4gICAgfSwgKHZpejogVmlzdWFsSWQpID0+IHtcbiAgICAgIG1hcmtzRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBNYXJrc1NlbGVjdGVkRXZlbnQod29ya3NoZWV0KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWx0ZXJFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPEZpbHRlckNoYW5nZWRFdmVudD4oQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5GaWx0ZXJDaGFuZ2VkKTtcbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5GaWx0ZXJDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlckV2ZW50UmVzcG9uc2UgPSBtb2RlbCBhcyBGaWx0ZXJFdmVudDtcbiAgICAgIHJldHVybiB0aGlzLnZpc3VhbElkLndvcmtzaGVldCA9PT0gZmlsdGVyRXZlbnRSZXNwb25zZS52aXN1YWxJZC53b3Jrc2hlZXQ7XG4gICAgfSwgKGV2ZW50OiBGaWx0ZXJFdmVudCkgPT4ge1xuICAgICAgZmlsdGVyRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBGaWx0ZXJDaGFuZ2VkRXZlbnQod29ya3NoZWV0LCBldmVudC5maWVsZE5hbWUpKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdHMucHVzaChtYXJrc0V2ZW50KTtcbiAgICByZXN1bHRzLnB1c2goZmlsdGVyRXZlbnQpO1xuXG4gICAgLy8gVE9ETyAtIG90aGVyIGV2ZW50IHR5cGVzXG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmlzdWFsSWQoKTogVmlzdWFsSWQge1xuICAgIHJldHVybiB0aGlzLl92aXN1YWxJZDtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlckFzeW5jKFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZXM6IEFycmF5PHN0cmluZz4sIHVwZGF0ZVR5cGU6IENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUsIG9wdGlvbnM6IENvbnRyYWN0LkZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZT4odXBkYXRlVHlwZSwgQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXBwbHlGaWx0ZXJBc3luYyh0aGlzLnZpc3VhbElkLCBmaWVsZE5hbWUsIHZhbHVlcywgdXBkYXRlVHlwZSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5SYW5nZUZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoZmllbGROYW1lLCAnZmllbGROYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWx0ZXJPcHRpb25zLCAnZmlsdGVyT3B0aW9ucycpO1xuXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbikge1xuICAgICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uPihmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24sIENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBFcnJvckhlbHBlcnMudmVyaWZ5UmFuZ2VQYXJhbVR5cGUoZmlsdGVyT3B0aW9ucy5taW4sIGZpbHRlck9wdGlvbnMubWF4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXBwbHlSYW5nZUZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWVsZE5hbWUsICdmaWVsZE5hbWUnKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5jbGVhckZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0RGF0YVNvdXJjZXNBc3luYyh0aGlzLnZpc3VhbElkKS50aGVuPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PihyZXN1bHQgPT4ge1xuICAgICAgY29uc3QgZGF0YVNjaGVtYTogRGF0YVNjaGVtYSA9IHJlc3VsdCBhcyBEYXRhU2NoZW1hO1xuICAgICAgY29uc3Qgd29ya3NoZWV0RGF0YVNvdXJjZUluZm86IFdvcmtzaGVldERhdGFTb3VyY2VJbmZvID0gZGF0YVNjaGVtYS53b3Jrc2hlZXREYXRhU2NoZW1hTWFwW3RoaXMubmFtZV07XG5cbiAgICAgIGxldCBkYXRhU291cmNlczogQXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4gPSBbXTtcblxuICAgICAgLy8gRmlyc3QsIGFkZCB0aGUgcHJpbWFyeSBkYXRhc291cmNlLiAgQnkgY29udmVudGlvbiwgaXQgY29tZXMgZmlyc3QgaW4gdGhlIHJldHVybmVkIGFycmF5LlxuICAgICAgbGV0IHByaW1hcnlJZDogc3RyaW5nID0gd29ya3NoZWV0RGF0YVNvdXJjZUluZm8ucHJpbWFyeURhdGFTb3VyY2U7XG4gICAgICBkYXRhU291cmNlcy5wdXNoKHRoaXMuY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTY2hlbWEuZGF0YVNvdXJjZXNbcHJpbWFyeUlkXSkpO1xuXG4gICAgICAvLyBUaGVuLCBsb29wIHRocm91Z2ggYW55IHNlY29uZGFyeSBkYXRhIHNvdXJjZXMgYW5kIGFkZCB0aGVtLlxuICAgICAgZm9yIChsZXQgc2Vjb25kYXJ5SWQgb2Ygd29ya3NoZWV0RGF0YVNvdXJjZUluZm8ucmVmZXJlbmNlZERhdGFTb3VyY2VMaXN0KSB7XG4gICAgICAgIGlmIChzZWNvbmRhcnlJZCAhPT0gcHJpbWFyeUlkKSB7XG4gICAgICAgICAgZGF0YVNvdXJjZXMucHVzaCh0aGlzLmNyZWF0ZURhdGFTb3VyY2VGcm9tSW5mbyhkYXRhU2NoZW1hLmRhdGFTb3VyY2VzW3NlY29uZGFyeUlkXSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhU291cmNlcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldEZpbHRlcnNBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRTZWxlY3RlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIGdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0U3VtbWFyeURhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgICB0aGlzLnZpc3VhbElkLCBHZXREYXRhVHlwZS5TdW1tYXJ5LCAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcywgISFvcHRpb25zLmlnbm9yZVNlbGVjdGlvbiwgdHJ1ZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBzZXJ2aWNlLmdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgICB0aGlzLnZpc3VhbElkLFxuICAgICAgR2V0RGF0YVR5cGUuVW5kZXJseWluZyxcbiAgICAgICEhb3B0aW9ucy5pZ25vcmVBbGlhc2VzLFxuICAgICAgISFvcHRpb25zLmlnbm9yZVNlbGVjdGlvbixcbiAgICAgICEhb3B0aW9ucy5pbmNsdWRlQWxsQ29sdW1ucyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2VsZWN0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLlNlbGVjdGlvbik7XG4gICAgcmV0dXJuIHNlcnZpY2UuY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWE+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNlbGVjdGlvbnMsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGU+KHNlbGVjdGlvblVwZGF0ZVR5cGUsIENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNlbGVjdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5TZWxlY3Rpb24pO1xuICAgIHJldHVybiBzZXJ2aWNlLnNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHRoaXMudmlzdWFsSWQsIHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZWxlY3Rpb25zLCAnZmllbGROYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlPihzZWxlY3Rpb25VcGRhdGVUeXBlLCBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZWxlY3Rpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uKTtcbiAgICByZXR1cm4gc2VydmljZS5zZWxlY3RNYXJrc0J5SWRBc3luYyh0aGlzLnZpc3VhbElkLCBzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTb3VyY2VJbmZvOiBEYXRhU291cmNlSW5mbyk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VJbXBsID0gbmV3IERhdGFTb3VyY2VJbXBsKGRhdGFTb3VyY2VJbmZvKTtcbiAgICBjb25zdCBkYXRhU291cmNlID0gbmV3IERhdGFTb3VyY2UoZGF0YVNvdXJjZUltcGwpO1xuICAgIGRhdGFTb3VyY2VJbXBsLmluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXRhU291cmNlKTtcbiAgICByZXR1cm4gZGF0YVNvdXJjZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9Xb3Jrc2hlZXRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIGNvbm5lY3Rpb24gc3VtbWFyeS5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXMganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25TdW1tYXJ5IGltcGxlbWVudHMgQ29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfY29ubmVjdGlvbkluZm86IENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnkpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VydmVyVVJJKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnNlcnZlclVSSTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby50eXBlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVGFibGVJbmZvIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIHRhYmxlIHN1bW1hcnkuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZVN1bW1hcnkgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZVN1bW1hcnkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFibGVJbmZvOiBUYWJsZUluZm8pIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBjb25uZWN0aW9uSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmNvbm5lY3Rpb25JZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VzdG9tU1FMKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5jdXN0b21TUUw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlU3VtbWFyeS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgVGFibGVhdVdvcmtzaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1V29ya3NoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVdvcmtzaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuRmlsdGVyQ2hhbmdlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHdvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0LCBwcml2YXRlIF9maWVsZE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuRmlsdGVyQ2hhbmdlZCwgd29ya3NoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkZpbHRlcj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQuZ2V0RmlsdGVyc0FzeW5jKCkudGhlbjxDb250cmFjdC5GaWx0ZXI+KGZpbHRlcnMgPT4ge1xuICAgICAgLy8gVE9ETzogRmlsdGVyaW5nIG9mIHRoZSBmaWx0ZXJzIHNob3VsZCBldmVudHVhbGx5IGJlIGRvbmUgcGxhdGZvcm0gc2lkZS5cbiAgICAgIGNvbnN0IGV2ZW50ZWRGaWx0ZXIgPSBmaWx0ZXJzLmZpbmQoKGZpbHRlcikgPT4gKGZpbHRlci5maWVsZE5hbWUgPT09IHRoaXMuX2ZpZWxkTmFtZSkpO1xuXG4gICAgICBpZiAoIWV2ZW50ZWRGaWx0ZXIpIHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkbid0IGhpdCB0aGlzIHVubGVzcyB0aGUgZmlsdGVyIHdhcyByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldFxuICAgICAgICAvLyBhZnRlciB0aGUgZXZlbnQgd2FzIHJhaXNlZC5cbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLk1pc3NpbmdGaWx0ZXIsIGBjYW5ub3QgZmluZCBmaWx0ZXI6ICR7dGhpcy5fZmllbGROYW1lfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnRlZEZpbHRlcjtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVXb3Jrc2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBNYXJrc1NlbGVjdGVkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5NYXJrc1NlbGVjdGVkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3Iod29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQpIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLk1hcmtTZWxlY3Rpb25DaGFuZ2VkLCB3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy53b3Jrc2hlZXQuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHtcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgQ3Jvc3NGcmFtZU1lc3NlbmdlcixcbiAgTUVTU0FHSU5HX1ZFUlNJT04gYXMgQXBpTWVzc2FnaW5nVmVyc2lvbixcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgfSBmcm9tICcuL0Nyb3NzRnJhbWVEaXNwYXRjaGVyJztcblxuLy8gQ2hlY2tzIHRvIHNlZSBpZiB3ZSBhcmUgcnVubmluZyBpbiBhbiBpZnJhbWUgY3VycmVudGx5OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzI2MDc2Lzg4MjExNTNcbmZ1bmN0aW9uIGluSWZyYW1lKHRoaXNXaW5kb3c6IFdpbmRvdyk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIHJldHVybiB0aGlzV2luZG93LnNlbGYgIT09IHRoaXNXaW5kb3cucGFyZW50O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBib290c3RyYXAgdGhlIGV4dGVuc2lvbiB3aXRoIGEgY3Jvc3MtZnJhbWUgcGFyZW50IHdoZXJlIFRhYmxlYXUgaXMgcnVubmluZ1xuICpcbiAqIEBwYXJhbSB0aGlzV2luZG93IFRoZSB3aW5kb3cgd2hpY2ggd2UgYXJlIHJ1bm5pbmcgaW4gKGluamVjdGVkIGZvciB1bml0IHRlc3RpbmcgcHVycG9zZXMpXG4gKiBAcGFyYW0gaW50ZXJuYWxDb250cmFjdFZlcnNpb24gVGhlIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCB3ZSBhcmUgdXNpbmdcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB3aGljaCBpcyBkb2luZyB0aGUgYWN0dWFsIGJvb3RzdHJhcHBpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcChcbiAgdGhpc1dpbmRvdzogV2luZG93LCBpbnRlcm5hbENvbnRyYWN0VmVyc2lvbjogQ29udHJhY3QuVmVyc2lvbk51bWJlcilcbiAgOiBQcm9taXNlPENvbnRyYWN0LkludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2U8Q29udHJhY3QuSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgbGV0IHBhcmVudDogV2luZG93O1xuXG4gICAgLy8gTm9ybWFsbHksIHdlIGFyZSBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUuICBUaGUgZXhjZXB0aW9uIHRvIHRoaXMgaXNcbiAgICAvLyB3aGVuIHdlIGFyZSBydW5uaW5nIGFzIGFuIGV4dGVuc2lvbiBpbnNpZGUgYSBkaWFsb2cgYXMgcGFydCBvZiB0aGUgVUlOYW1lc3BhY2VcbiAgICAvLyBmdW5jdGlvbmFsaXR5LiAgSW4gdGhhdCBjYXNlLCB3ZSB3YW50IHRoZSBvcGVuZXIgb2YgdGhpcyB3aW5kb3cgcmF0aGVyIHRoYW4gdGhlIHBhcmVudC5cbiAgICBpZiAoIWluSWZyYW1lKHRoaXNXaW5kb3cpKSB7XG4gICAgICBwYXJlbnQgPSB0aGlzV2luZG93Lm9wZW5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gdGhpc1dpbmRvdy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJlamVjdCgnVGhpcyBleHRlbnNpb24gaXMgbm90IHJ1bm5pbmcgaW5zaWRlIGFuIGlmcmFtZSwgZGVza3RvcCwgb3IgcG9wdXAgd2luZG93LiBJbml0aWFsaXphdGlvbiBmYWlsZWQuJyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBtZXNzZW5nZXIgd2hpY2ggd2lsbCBkbyBoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhpcyB3aW5kb3cgYW5kIG91ciBwYXJlbnRcbiAgICAvLyBTaW5jZSB3ZSBkb24ndCBrbm93IHdoZXJlIHdlIGFyZSBydW5uaW5nIHlldCwgd2UgaGF2ZSB0byBtYWtlIHRoaXMgaW5pdGlhbCBvcmlnaW4gJyonLiBPbmNlXG4gICAgLy8gd2UgaGF2ZSBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQgb3VyIGV4dGVuc2lvbiwgd2Ugd2lsbCBsaW1pdCB3aGVyZSB3ZSBzZW5kIG1lc3NhZ2VzXG4gICAgY29uc3QgbWVzc2VuZ2VyID0gbmV3IENyb3NzRnJhbWVNZXNzZW5nZXIodGhpc1dpbmRvdywgcGFyZW50LCAnKicpO1xuXG4gICAgLy8gUHJlcGFyZSB0byBzZW5kIGFuIGluaXRpYWxpemF0aW9uIG1lc3NhZ2UgdG8gdGhlIHBhcmVudCBmcmFtZVxuICAgIGNvbnN0IGluaXRpYWxpemF0aW9uTWVzc2FnZSA9IG1lc3Nlbmdlci5wcmVwYXJlSW5pdGlhbGl6YXRpb25NZXNzYWdlKGludGVybmFsQ29udHJhY3RWZXJzaW9uLCBBcGlNZXNzYWdpbmdWZXJzaW9uKTtcblxuICAgIC8vIFdoZW4gd2UgcmVjZWl2ZSBhIHJlc3BvbnNlIGJhY2sgZnJvbSB0aGUgcGFyZW50LCB3ZSBjaGVjayB0byBtYWtlIHN1cmUgdGhlIGd1aWRzIG1hdGNoIGFuZCB0aGVuIHdlIGtub3dcbiAgICAvLyB0aGF0IHRoZSBwYXJlbnQgaXMgYXdhcmUgb2YgdXMgYW5kIHdlIGNhbiBzdGFydCBjb21tdW5pY2F0aW5nXG4gICAgbWVzc2VuZ2VyLnNldENvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKGZ1bmN0aW9uIChtc2c6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UpOiB2b2lkIHtcblxuICAgICAgLy8gVmVyaWZ5IHdlIGFyZSBnZXR0aW5nIGEgcmVzcG9uc2UgZnJvbSBvdXIgaW5pdGlhbGl6ZSBtZXNzYWdlXG4gICAgICBpZiAobXNnLmNvbW1hbmRHdWlkID09PSBpbml0aWFsaXphdGlvbk1lc3NhZ2UubWVzc2FnZUd1aWQpIHtcblxuICAgICAgICAvLyBGb3Igc2VydmVyLCB0aGUgdmVyc2lvbmluZyBvZiB0aGUgZmFjdG9yeSBpcyBnb25uYSBoYXBwZW4gb24gdGhlIG90aGVyIHNpZGUgb2Ygb3VyIGZyYW1lLCBzbyBqdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb25lIHdoaWNoIGRvZXNuJ3QgaGF2ZSBhbnkgdmVyc2lvbiBrbm93bGVkZ2VcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hlckZhY3RvcnkgPSAoKSA9PiBuZXcgQ3Jvc3NGcmFtZURpc3BhdGNoZXIobWVzc2VuZ2VyKTtcbiAgICAgICAgcmVzb2x2ZShkaXNwYXRjaGVyRmFjdG9yeSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBOb3cgdGhhdCBvdXIgaGFuZGxlcnMgYXJlIHJlYWR5LCBzdGFydCBsaXN0ZW5pbmcgYW5kIHNlbmQgb3VyIGluaXRpYWxpemF0aW9uIG1lc3NhZ2VcbiAgICBtZXNzZW5nZXIuc3RhcnRMaXN0ZW5pbmcoKTtcbiAgICBpbml0aWFsaXphdGlvbk1lc3NhZ2Uuc2VuZCgpO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsImltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeGVjdXRlUmVzcG9uc2UsXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlcixcbiAgTW9kZWwsXG4gIE5vdGlmaWNhdGlvbkhhbmRsZXIsXG4gIFZlcmJJZCxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIE1lc3NlbmdlciwgTm90aWZpY2F0aW9uTWVzc2FnZSB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbi8qKlxuICogVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIGludGVyZmFjZSB3aGljaCBmdW5jdGlvbnMgYnkgcGFzc2luZyBtZXNzYWdlc1xuICogYWNyb3NzIGEgZnJhbWUgYm91bmRhcnkuIFRoaXMgaXMgdXN1YWxseSBiZXR3ZWVuIHRoZSBjb2RlIHdoZXJlIG91ciBqYXZzY3JpcHQgbGlicmFyeSBoYXMgYmVlbiBpbmNsdWRlZFxuICogYnkgYSAzcmQgcGFydHkgZGV2IGFuZCBhbm90aGVyIGZyYW1lIHdoZXJlIFRhYmxlYXUgc2VydmVyIGhhcyBjb250ZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgaW1wbGVtZW50cyBJbnRlcm5hbEFwaURpc3BhdGNoZXIge1xuXG4gIC8vIENvbGxlY3Rpb24gb2YgcGVuZGluZyBwcm9taXNlcyB3aGljaCBhcmUgd2FpdGluZyB0byBiZSByZXNvbHZlZC4gV2hlbiB3ZSByZWNlaXZlIGEgcmVzcG9uc2UgYmFjayBmcm9tIHRoZSBvdGhlciBmcmFtZSxcbiAgLy8gdGhlc2UgcHJvbWlzZXMgY2FuIGJlIGVpdGhlciByZXNvbHZlZCBvciByZWplY3RlZFxuICBwcml2YXRlIF9wZW5kaW5nUHJvbWlzZXM6XG4gICAgeyBbbWVzc2FnZUd1aWQ6IHN0cmluZ106IHsgcmVzb2x2ZTogKHJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpID0+IHZvaWQsIHJlamVjdDogKGVycm9yOiBNb2RlbCkgPT4gdm9pZCB9IH0gPSB7fTtcblxuICAvLyBUaGUgY29sbGVjdGlvbiBvZiBub3RpZmljYXRpb24gaGFuZGxlcnMgd2hpY2ggaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uSGFuZGxlcnM6IEFycmF5PE5vdGlmaWNhdGlvbkhhbmRsZXI+ID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZURpc3BhdGNoZXIgd2hpY2ggd2lsbCB1c2UgdGhlIGdpdmVuIG1lc3NlbmdlciB0byBjb21tdW5pY2F0ZVxuICAgKiBAcGFyYW0gX21lc3NlbmdlciBhbiBpbnN0YW50aWF0ZWQgYW5kIGxpc3RlbmluZyBtZXNzZW5nZXIgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2VuZ2VyOiBNZXNzZW5nZXIpIHtcbiAgICBpZiAoIXRoaXMuX21lc3Nlbmdlcikge1xuICAgICAgdGhyb3cgJ01pc3NpbmcgbWVzc2VuZ2VyIG9iamVjdCc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIG91ciBtZXNzYWdlIGhhbmRsZXJzLiBXZSBvbmx5IGNhcmUgYWJvdXQgaW5jb21pbmcgbm90aWZpY2F0aW9ucyBhbmQgY29tbWFuZCByZXNwb25zZXNcbiAgICB0aGlzLl9tZXNzZW5nZXIuc2V0Q29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIodGhpcy5vbkNvbW1hbmRSZXNwb25zZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9tZXNzZW5nZXIuc2V0Tm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIodGhpcy5vbk5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8vLy8vLyBTdGFydCBJbnRlcm5hbEFwaURpc3BhdGNoZXIgaW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgZXhlY3V0ZSh2ZXJiOiBWZXJiSWQsIHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcbiAgICAvLyBUbyBleGVjdXRlIGEgdmVyYiwgd2UgZmlyc3QgcHJlcGFyZSBhIGNvbW1hbmQgbWVzc2FnZSBhbmQgdGhlbiBkZWZpbmUgYSBwcm9taXNlLlxuICAgIGNvbnN0IHByZXBhcmVkTWVzc2FnZSA9IHRoaXMuX21lc3Nlbmdlci5wcmVwYXJlQ29tbWFuZE1lc3NhZ2UodmVyYiwgcGFyYW1ldGVycyk7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAvLyBTYXZlIG9mZiB0aGUgcGVuZGluZyBwcm9taXNlIGJ5IHRoZSBtZXNzYWdlR3VpZCB3ZSBhcmUgYWJvdXQgdG8gc2VuZC4gV2hlbiBhIHJlc3BvbnNlIGlzXG4gICAgICAvLyByZWNlaXZlZCwgd2UnbGwgYmUgYWJsZSB0byByZXNvbHZlIHRoaXMgcHJvbWlzZSB3aXRoIHRoZSByZXN1bHRcbiAgICAgIHRoaXMuX3BlbmRpbmdQcm9taXNlc1twcmVwYXJlZE1lc3NhZ2UubWVzc2FnZUd1aWRdID0geyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9O1xuICAgIH0pO1xuXG4gICAgLy8gQWN0dWFsbHkgc2VuZCB0aGUgbWVzc2FnZSBhbmQgcmV0dXJuIHRoZSBwcm9taXNlXG4gICAgcHJlcGFyZWRNZXNzYWdlLnNlbmQoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzID0gdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XG4gIH1cblxuICAvLy8vLy8gRW5kIEludGVybmFsQXBpRGlzcGF0Y2hlciBpbXBsZW1lbnRhdGlvblxuXG4gIHByaXZhdGUgb25Db21tYW5kUmVzcG9uc2UocmVzcG9uc2U6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UpOiB2b2lkIHtcbiAgICAvLyBXZSBnb3QgYSBjb21tYW5kIHJlc3BvbnNlLCBsb29rIHRocm91Z2ggdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmVcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcGVuZGluZ1Byb21pc2VzKS5pbmRleE9mKHJlc3BvbnNlLmNvbW1hbmRHdWlkKSA8IDApIHtcbiAgICAgIHJldHVybjsgLy8gV2UgZG9uJ3QgaGF2ZSBhbnkgcmVmZXJlbmNlIHRvIHRoaXMgY29tbWFuZCwganVzdCByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwZW5kaW5nUHJvbWlzZSA9IHRoaXMuX3BlbmRpbmdQcm9taXNlc1tyZXNwb25zZS5jb21tYW5kR3VpZF07XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGVycm9yIGRlZmluZWQsIHJlamVjdCB0aGUgcHJvbWlzZVxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgcGVuZGluZ1Byb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGRhdGEgZGVmaW5lZCwgcmVzb2x2ZSB0aGUgcHJvbWlzZVxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICBwZW5kaW5nUHJvbWlzZS5yZXNvbHZlKHsgcmVzdWx0OiByZXNwb25zZS5kYXRhIH0pO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIG91ciBwZW5kaW5nIHByb21pc2VzIG9iamVjdFxuICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUHJvbWlzZXNbcmVzcG9uc2UuY29tbWFuZEd1aWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25NZXNzYWdlOiBOb3RpZmljYXRpb25NZXNzYWdlKTogdm9pZCB7XG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIG5vdGlmaWNhdGlvbiBoYW5kbGVyIHdlIGhhdmUgcmVnaXN0ZXJlZCBhbmQgbGV0IHRoZW0ga25vdyBhIG5vdGlmaWNhdGlvbiBjYW1lIGluXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBoYW5kbGVyKHsgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbk1lc3NhZ2Uubm90aWZpY2F0aW9uSWQsIGRhdGE6IG5vdGlmaWNhdGlvbk1lc3NhZ2UuZGF0YSB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoaXMuIFdyYXAgaW4gdHJ5L2NhdGNoIHNvIGlmIG9uZSBoYW5kbGVyIGVycm9ycywgdGhlIG90aGVyIHN0aWxsIGdldCB0aGUgbWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lRGlzcGF0Y2hlci50cyIsImltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwnO1xuaW1wb3J0IHsgRmlsdGVyU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvRmlsdGVyU2VydmljZUltcGwnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvUGFyYW1ldGVyc1NlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL1NlbGVjdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSB9IGZyb20gJy4vU2VydmljZVJlZ2lzdHJ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IERhdGFTb3VyY2VTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEdldERhdGFTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEZpbHRlclNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgTm90aWZpY2F0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBQYXJhbWV0ZXJzU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZWxlY3Rpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5LFxuICBEYXRhU2NoZW1hLFxuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgUGFyYW1ldGVySWQsXG4gIFRhYmxlSW5mbyxcbiAgVGFibGVJbmZvcyxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vRGF0YVNvdXJjZVNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vRmllbGQnO1xuaW1wb3J0IHsgRmllbGRJbXBsIH0gZnJvbSAnLi4vLi4vSW1wbC9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vRGF0YVNvdXJjZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4uLy4uL0ltcGwvRGF0YVNvdXJjZUltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgRGF0YVNvdXJjZVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQXN5bmMoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQsXG4gICAgICBbUGFyYW1ldGVySWQuRGVsdGFUaW1lTXNdOiAwLFxuICAgICAgW1BhcmFtZXRlcklkLlNob3VsZFJlZnJlc2hEU106IHRydWVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuUmVmcmVzaERhdGFTb3VyY2UsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVRhYmxlc0FzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxUYWJsZUluZm8+PiB7XG4gICAgY29uc3Qgam9pblBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkIH07XG5cbiAgICAvLyBHZXQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YWJsZXMgdXNlZCBieSB0aGlzIGNvbm5lY3Rpb25cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRBY3RpdmVUYWJsZXMsIGpvaW5QYXJhbWV0ZXJzKS50aGVuPEFycmF5PFRhYmxlSW5mbz4+KGpvaW5SZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCB0YWJsZUluZm9zID0gam9pblJlc3BvbnNlLnJlc3VsdCBhcyBUYWJsZUluZm9zO1xuXG4gICAgICAvLyBnZXRBY3RpdmVUYWJsZXMgaXMgdW5zdXBwb3J0ZWQgZm9yIGN1YmVzIGFuZCBHQS4gV2UgZG8gbm90IGhhdmUgYSBjb25uZWN0aW9uIHR5cGUgcHJvcGVydHlcbiAgICAgIC8vIGF2YWlsYWJsZSBmcm9tIHRoZSBwbGF0Zm9ybSAoaW50ZW50aW9uYWxseSwgdG8gcmVkdWNlIGNvZGUgY2h1cm4gYXMgbmV3IGNvbm5lY3Rpb25zIGFyZSBhZGRlZCkuXG4gICAgICAvLyBJbnN0ZWFkLGp1c3QgY2hlY2sgaWYgYW55IHRhYmxlcyBhcmUgcmV0dXJuZWQuIFRoaXMgYXJyYXkgd2lsbCBiZSBlbXB0eSBmb3IgYW55IG5vbi10YWJsZSBiYXNlZCBkYXRhc291cmNlLlxuICAgICAgaWYgKHRhYmxlSW5mb3MudGFibGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuVW5zdXBwb3J0ZWRNZXRob2RGb3JEYXRhU291cmNlVHlwZSxcbiAgICAgICAgICBgZ2V0QWN0aXZlVGFibGVzIGlzIG5vdCBzdXBwb3J0ZWQgZm9yOiAke2RhdGFTb3VyY2VJZH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhYmxlSW5mb3MudGFibGVzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxEYXRhU2NoZW1hPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0RGF0YVNvdXJjZXMsIHBhcmFtZXRlcnMpLnRoZW48RGF0YVNjaGVtYT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGF0YVNjaGVtYSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBEYXRhU2NoZW1hO1xuICAgICAgcmV0dXJuIGRhdGFTY2hlbWE7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTxDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5W10+IHtcbiAgICBjb25zdCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkIH07XG5cbiAgICAvLyBHZXQgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YWJsZXMgdXNlZCBieSB0aGlzIGNvbm5lY3Rpb25cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMsIHBhcmFtcykudGhlbjxDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5W10+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uU3VtbWFyaWVzID0gcmVzcG9uc2UucmVzdWx0IGFzIENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXTtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvblN1bW1hcmllcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZEFzeW5jKGZpZWxkSWQ6IHN0cmluZyk6IFByb21pc2U8Q29udHJhY3QuRmllbGQ+IHtcbiAgICBsZXQgZmllbGRJZENvbXBvbmVudHMgPSB0aGlzLnBhcnNlRmllbGRJZChmaWVsZElkKTtcbiAgICBsZXQgZGF0YVNvdXJjZUlkID0gZmllbGRJZENvbXBvbmVudHNbMV07XG4gICAgbGV0IGZpZWxkTmFtZSA9IGZpZWxkSWRDb21wb25lbnRzWzJdO1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0RGF0YVNvdXJjZTtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF0gPSBkYXRhU291cmNlSWQ7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuRmllbGQ+KHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBkYXRhU291cmNlID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuRGF0YVNvdXJjZTtcbiAgICAgIGxldCBmaWVsZCA9IGRhdGFTb3VyY2UuZmllbGRzLmZpbmQoKGYpID0+IHtcbiAgICAgICAgcmV0dXJuIGYubmFtZSA9PT0gZmllbGROYW1lO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RmllbGQoZmllbGQhLCB0aGlzLmNvbnZlcnREYXRhU291cmNlKGRhdGFTb3VyY2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEZpZWxkKGZpZWxkOiBJbnRlcm5hbENvbnRyYWN0LkZpZWxkLCBkYXRhU291cmNlOiBDb250cmFjdC5EYXRhU291cmNlKTogQ29udHJhY3QuRmllbGQge1xuICAgIHJldHVybiBuZXcgRmllbGQobmV3IEZpZWxkSW1wbChmaWVsZCwgZGF0YVNvdXJjZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RGF0YVNvdXJjZShkYXRhU291cmNlOiBJbnRlcm5hbENvbnRyYWN0LkRhdGFTb3VyY2UpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gbmV3IERhdGFTb3VyY2UobmV3IERhdGFTb3VyY2VJbXBsKGRhdGFTb3VyY2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VGaWVsZElkKGZpZWxkSWQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIC8vIHdlIGNhbiBleHBlY3QgZXhlYyB0byByZXR1cm4gYSBtYXRjaCB0byB0aGUgZW50aXJlIGZpZWxkIGlkIGF0IGVsZW1lbnQgMCwgdGhlIGRhdGFzb3VyY2UgaWQgYXQgZWxlbWVudCAxXG4gICAgLy8gYW5kIHRoZSBmaWVsZCBuYW1lIGF0IGVsZW1lbnQgMi4gRmllbGQgaWQgZm9ybWF0IGlzIFtkYXRhU291Y3JlSWRdLltmaWVsZE5hbWVdXG4gICAgcmV0dXJuIC9eXFxbKC4rKVxcXVxcLlxcWyguKylcXF0kLy5leGVjKGZpZWxkSWQpITtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEZpbHRlclR5cGUsXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEV4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyBhcyBFeHRlcm5hbEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9FbnVtTWFwcGluZ3MvRXh0ZXJuYWxUb0ludGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyBhcyBJbnRlcm5hbEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcblxuaW1wb3J0IHtcbiAgQ2F0ZWdvcmljYWxEb21haW4sXG4gIENhdGVnb3JpY2FsRmlsdGVyLFxuICBSYW5nZURvbWFpbixcbiAgUmFuZ2VGaWx0ZXIsXG4gIFJlbGF0aXZlRGF0ZUZpbHRlclxufSBmcm9tICcuLi8uLi9Nb2RlbHMvRmlsdGVyTW9kZWxzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vRmlsdGVyU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBEYXRhVmFsdWUgfSBmcm9tICcuLi8uLi9Nb2RlbHMvR2V0RGF0YU1vZGVscyc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4uLy4uL1V0aWxzL1BhcmFtJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlclNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgRmlsdGVyU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLkZpbHRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlckFzeW5jKFxuICAgIHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICB2YWx1ZXM6IEFycmF5PHN0cmluZz4sXG4gICAgdXBkYXRlVHlwZTogQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSxcbiAgICBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkFwcGx5Q2F0ZWdvcmljYWxGaWx0ZXI7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclZhbHVlc10gPSB2YWx1ZXM7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJVcGRhdGVUeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJVcGRhdGVUeXBlLmNvbnZlcnQodXBkYXRlVHlwZSk7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Jc0V4Y2x1ZGVNb2RlXSA9XG4gICAgICAoZmlsdGVyT3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IGZpbHRlck9wdGlvbnMuaXNFeGNsdWRlTW9kZSA9PT0gdW5kZWZpbmVkKSA/IGZhbHNlIDogZmlsdGVyT3B0aW9ucy5pc0V4Y2x1ZGVNb2RlO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLCBmaWVsZE5hbWU6IHN0cmluZywgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuUmFuZ2VGaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkFwcGx5UmFuZ2VGaWx0ZXI7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcblxuICAgIC8vIGlmIHNwZWNpYWwgb3B0aW9uIGlzIHNwZWNpZmllZCwgbWluIGFuZCBtYXggYXJlIG5vdCBuZWVkZWRcbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTnVsbE9wdGlvbl0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIubnVsbE9wdGlvbnMuY29udmVydChmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlsdGVyT3B0aW9ucy5taW4pIHtcbiAgICAgICAgbGV0IG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgICBpZiAoZmlsdGVyT3B0aW9ucy5taW4gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgbWluID0gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKGZpbHRlck9wdGlvbnMubWluKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtaW4gPSBmaWx0ZXJPcHRpb25zLm1pbjtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTWluXSA9IG1pbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWF4KSB7XG4gICAgICAgIGxldCBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWF4IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIG1heCA9IFBhcmFtLnNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybShmaWx0ZXJPcHRpb25zLm1heCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF4ID0gZmlsdGVyT3B0aW9ucy5tYXg7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU1heF0gPSBtYXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZE5hbWVdID0gZmllbGROYW1lO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48c3RyaW5nPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gZmllbGROYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLCBmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5DbGVhckZpbHRlcjtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48c3RyaW5nPihyZXNwb3NuZSA9PiB7XG4gICAgICByZXR1cm4gZmllbGROYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+IHtcbiAgICBjb25zdCB2ZXJiID0gVmVyYklkLkdldEZpbHRlcnM7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48QXJyYXk8Q29udHJhY3QuRmlsdGVyPj4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IGZpbHRlcnMgPSByZXNwb25zZS5yZXN1bHQgYXMgQXJyYXk8SW50ZXJuYWxDb250cmFjdC5GaWx0ZXI+O1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydERvbWFpbkZpbHRlcnMoZmlsdGVycyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2F0ZWdvcmljYWxEb21haW5Bc3luYyhcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGRvbWFpblR5cGU6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBQcm9taXNlPENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5HZXRDYXRlZ29yaWNhbERvbWFpbjtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHtcbiAgICAgIHdvcmtzaGVldDogd29ya3NoZWV0TmFtZVxuICAgIH07XG5cbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkSWRdID0gZmllbGRJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRvbWFpblR5cGVdID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLmZpbHRlckRvbWFpblR5cGUuY29udmVydChkb21haW5UeXBlKTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4+KHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBkb21haW4gPSByZXNwb25zZS5yZXN1bHQgYXMgSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbjtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRDYXRlZ29yaWNhbERvbWFpbihkb21haW4sIGRvbWFpblR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFJhbmdlRG9tYWluQXN5bmMod29ya3NoZWV0TmFtZTogc3RyaW5nLCBmaWVsZElkOiBzdHJpbmcsIGRvbWFpblR5cGU6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBQcm9taXNlPENvbnRyYWN0LlJhbmdlRG9tYWluPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5HZXRSYW5nZURvbWFpbjtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHtcbiAgICAgIHdvcmtzaGVldDogd29ya3NoZWV0TmFtZVxuICAgIH07XG5cbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkSWRdID0gZmllbGRJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRvbWFpblR5cGVdID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLmZpbHRlckRvbWFpblR5cGUuY29udmVydChkb21haW5UeXBlKTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuUmFuZ2VEb21haW4+KHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBkb21haW4gPSByZXNwb25zZS5yZXN1bHQgYXMgSW50ZXJuYWxDb250cmFjdC5SYW5nZURvbWFpbjtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFJhbmdlRG9tYWluKGRvbWFpbiwgZG9tYWluVHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBIZWxwZXIgTWV0aG9kc1xuICBwcml2YXRlIGNvbnZlcnREb21haW5GaWx0ZXJzKGRvbWFpbkZpbHRlcnM6IEFycmF5PEludGVybmFsQ29udHJhY3QuRmlsdGVyPik6IEFycmF5PENvbnRyYWN0LkZpbHRlcj4ge1xuICAgIGxldCBmaWx0ZXJzOiBBcnJheTxDb250cmFjdC5GaWx0ZXI+ID0gW107XG4gICAgZG9tYWluRmlsdGVycy5mb3JFYWNoKGRvbWFpbkZpbHRlciA9PiB7XG4gICAgICBzd2l0Y2ggKGRvbWFpbkZpbHRlci5maWx0ZXJUeXBlKSB7XG4gICAgICAgIGNhc2UgRmlsdGVyVHlwZS5DYXRlZ29yaWNhbDoge1xuICAgICAgICAgIGxldCBmaWx0ZXIgPSBkb21haW5GaWx0ZXIgYXMgSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbEZpbHRlcjtcbiAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2godGhpcy5jb252ZXJ0Q2F0ZWdvcmljYWxGaWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDYXRlZ29yaWNhbCBGaWx0ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEZpbHRlclR5cGUuUmFuZ2U6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuUmFuZ2VGaWx0ZXI7XG4gICAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHRoaXMuY29udmVydFJhbmdlRmlsdGVyKGZpbHRlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUmFuZ2UgRmlsdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBGaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZToge1xuICAgICAgICAgIGxldCBmaWx0ZXIgPSBkb21haW5GaWx0ZXIgYXMgSW50ZXJuYWxDb250cmFjdC5SZWxhdGl2ZURhdGVGaWx0ZXI7XG4gICAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHRoaXMuY29udmVydFJlbGF0aXZlRGF0ZUZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFJlbGF0aXZlIERhdGUgRmlsdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcnM7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRDYXRlZ29yaWNhbEZpbHRlcihkb21haW5GaWx0ZXI6IEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXIpOiBDb250cmFjdC5DYXRlZ29yaWNhbEZpbHRlciB7XG4gICAgbGV0IGFwcGxpZWRWYWx1ZXM6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4gPSBkb21haW5GaWx0ZXIudmFsdWVzLm1hcChkdiA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWYWx1ZShkdi52YWx1ZSwgZHYuZm9ybWF0dGVkVmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBDYXRlZ29yaWNhbEZpbHRlcihcbiAgICAgIGRvbWFpbkZpbHRlci52aXN1YWxJZC53b3Jrc2hlZXQsXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGRDYXB0aW9uLFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkTmFtZSxcbiAgICAgIENvbnRyYWN0LkZpbHRlclR5cGUuQ2F0ZWdvcmljYWwsXG4gICAgICBhcHBsaWVkVmFsdWVzLFxuICAgICAgZG9tYWluRmlsdGVyLmlzRXhjbHVkZSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSYW5nZUZpbHRlcihkb21haW5GaWx0ZXI6IEludGVybmFsQ29udHJhY3QuUmFuZ2VGaWx0ZXIpOiBDb250cmFjdC5SYW5nZUZpbHRlciB7XG4gICAgbGV0IG1pblZhbHVlOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbkZpbHRlci5taW4udmFsdWUsIGRvbWFpbkZpbHRlci5taW4uZm9ybWF0dGVkVmFsdWUpO1xuICAgIGxldCBtYXhWYWx1ZTogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW5GaWx0ZXIubWF4LnZhbHVlLCBkb21haW5GaWx0ZXIubWF4LmZvcm1hdHRlZFZhbHVlKTtcbiAgICByZXR1cm4gbmV3IFJhbmdlRmlsdGVyKFxuICAgICAgZG9tYWluRmlsdGVyLnZpc3VhbElkLndvcmtzaGVldCxcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZENhcHRpb24sXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGROYW1lLFxuICAgICAgQ29udHJhY3QuRmlsdGVyVHlwZS5SYW5nZSxcbiAgICAgIG1pblZhbHVlLFxuICAgICAgbWF4VmFsdWUsXG4gICAgICBkb21haW5GaWx0ZXIuaW5jbHVkZU51bGxWYWx1ZXNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmVsYXRpdmVEYXRlRmlsdGVyKGRvbWFpbkZpbHRlcjogSW50ZXJuYWxDb250cmFjdC5SZWxhdGl2ZURhdGVGaWx0ZXIpOiBDb250cmFjdC5SZWxhdGl2ZURhdGVGaWx0ZXIge1xuICAgIGxldCBhbmNob3JEYXRlVmFsdWU6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluRmlsdGVyLmFuY2hvckRhdGUudmFsdWUsIGRvbWFpbkZpbHRlci5hbmNob3JEYXRlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICByZXR1cm4gbmV3IFJlbGF0aXZlRGF0ZUZpbHRlcihcbiAgICAgIGRvbWFpbkZpbHRlci52aXN1YWxJZC53b3Jrc2hlZXQsXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGRDYXB0aW9uLFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkTmFtZSxcbiAgICAgIENvbnRyYWN0LkZpbHRlclR5cGUuUmVsYXRpdmVEYXRlLFxuICAgICAgYW5jaG9yRGF0ZVZhbHVlLFxuICAgICAgSW50ZXJuYWxFbnVtQ29udmVydGVyLmRhdGVTdGVwUGVyaW9kLmNvbnZlcnQoZG9tYWluRmlsdGVyLnBlcmlvZFR5cGUpLFxuICAgICAgSW50ZXJuYWxFbnVtQ29udmVydGVyLmRhdGVSYW5nZVR5cGUuY29udmVydChkb21haW5GaWx0ZXIucmFuZ2VUeXBlKSxcbiAgICAgIGRvbWFpbkZpbHRlci5yYW5nZU5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0Q2F0ZWdvcmljYWxEb21haW4oXG4gICAgZG9tYWluOiBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluLFxuICAgIGRvbWFpblR5cGU6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbiB7XG4gICAgbGV0IHZhbHVlczogQXJyYXk8RGF0YVZhbHVlPiA9IGRvbWFpbi52YWx1ZXMubWFwKChkb21haW5EdikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoZG9tYWluRHYudmFsdWUsIGRvbWFpbkR2LmZvcm1hdHRlZFZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IENhdGVnb3JpY2FsRG9tYWluKHZhbHVlcywgZG9tYWluVHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRSYW5nZURvbWFpbihkb21haW46IEludGVybmFsQ29udHJhY3QuUmFuZ2VEb21haW4sIGRvbWFpblR5cGU6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBDb250cmFjdC5SYW5nZURvbWFpbiB7XG4gICAgbGV0IG1pbjogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW4ubWluLnZhbHVlLCBkb21haW4ubWluLmZvcm1hdHRlZFZhbHVlKTtcbiAgICBsZXQgbWF4OiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbi5tYXgudmFsdWUsIGRvbWFpbi5tYXguZm9ybWF0dGVkVmFsdWUpO1xuICAgIHJldHVybiBuZXcgUmFuZ2VEb21haW4oXG4gICAgICBtaW4sXG4gICAgICBtYXgsXG4gICAgICBkb21haW5UeXBlXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7XG4gIEZpbHRlckRvbWFpblR5cGUgYXMgRXh0ZXJuYWxEb21haW5UeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uIGFzIEV4dGVybmFsTnVsbE9wdGlvbixcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGVcbn0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQge1xuICBGaWx0ZXJEb21haW5UeXBlIGFzIEludGVybmFsRG9tYWluVHlwZSxcbiAgRmlsdGVyTnVsbE9wdGlvbiBhcyBJbnRlcm5hbE51bGxPcHRpb24sXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi9VdGlscy9FbnVtQ29udmVydGVyJztcblxuLyogdHNsaW50OmRpc2FibGU6dHlwZWRlZiAtIERpc2FibGUgdGhpcyB0byBtYWtlIGRlY2xhcmluZyB0aGVzZSBjbGFzc2VzIGEgYml0IGVhc2llciAqL1xuLyoqXG4gKiBNYXBzIGVudW1zIHVzZWQgYnkgdGhlIGV4dGVybmFsLWFwaS1jb250cmFjdCB0byB0aGUgZW51bXMgdXNlZFxuICogaW4gdGhlIGludGVybmFsLWFwaS1jb250cmFjdCwgd2hpY2ggZGV2ZWxvcGVycyBjb2RlIGFnYWluc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3Mge1xuICBwdWJsaWMgc3RhdGljIGZpbHRlckRvbWFpblR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbERvbWFpblR5cGUsIEludGVybmFsRG9tYWluVHlwZT4oe1xuICAgIFtFeHRlcm5hbERvbWFpblR5cGUuUmVsZXZhbnRdOiBJbnRlcm5hbERvbWFpblR5cGUuUmVsZXZhbnQsXG4gICAgW0V4dGVybmFsRG9tYWluVHlwZS5EYXRhYmFzZV06IEludGVybmFsRG9tYWluVHlwZS5EYXRhYmFzZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIG51bGxPcHRpb25zID0gbmV3IEVudW1Db252ZXJ0ZXI8RXh0ZXJuYWxOdWxsT3B0aW9uLCBJbnRlcm5hbE51bGxPcHRpb24+KHtcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLkFsbFZhbHVlc106IEludGVybmFsTnVsbE9wdGlvbi5BbGxWYWx1ZXMsXG4gICAgW0V4dGVybmFsTnVsbE9wdGlvbi5Ob25OdWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXMsXG4gICAgW0V4dGVybmFsTnVsbE9wdGlvbi5OdWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLk51bGxWYWx1ZXNcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJVcGRhdGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8RXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLCBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGU+KHtcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZF06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGQsXG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGxdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsLFxuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZSxcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZVxuICB9KTtcbn1cbi8qIHRzbGludDplbmFibGU6dHlwZWRlZiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncy50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRmlsdGVyU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9EYXRhU291cmNlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIgaW1wbGVtZW50cyBDb250cmFjdC5GaWx0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF93b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIF9maWVsZE5hbWU6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgX2ZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJvdGVjdGVkIF9maWVsZElkOiBzdHJpbmcpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkSWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZpbHRlclR5cGUoKTogQ29udHJhY3QuRmlsdGVyVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkZpZWxkPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldEZpZWxkQXN5bmModGhpcy5fZmllbGRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhdGVnb3JpY2FsRmlsdGVyIGV4dGVuZHMgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBmaWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByaXZhdGUgX2FwcGxpZWRWYWx1ZXM6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4sXG4gICAgcHJpdmF0ZSBfaXNFeGNsdWRlTW9kZTogYm9vbGVhbikge1xuICAgIHN1cGVyKHdvcmtzaGVldE5hbWUsIGZpZWxkTmFtZSwgZmlsdGVyVHlwZSwgZmllbGRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwcGxpZWRWYWx1ZXMoKTogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpZWRWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXhjbHVkZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRXhjbHVkZU1vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0RG9tYWluQXN5bmMoZG9tYWluVHlwZT86IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBQcm9taXNlPENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluPiB7XG4gICAgaWYgKCFkb21haW5UeXBlKSB7XG4gICAgICBkb21haW5UeXBlID0gQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZS5SZWxldmFudDtcbiAgICB9XG5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGU+KGRvbWFpblR5cGUsIENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldENhdGVnb3JpY2FsRG9tYWluQXN5bmModGhpcy5fd29ya3NoZWV0TmFtZSwgdGhpcy5fZmllbGRJZCwgZG9tYWluVHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJhbmdlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuUmFuZ2VGaWx0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBmaWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByaXZhdGUgX21pbjogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX21heDogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX2luY2x1ZGVOdWxsVmFsdWVzOiBib29sZWFuKSB7XG4gICAgc3VwZXIod29ya3NoZWV0TmFtZSwgZmllbGROYW1lLCBmaWx0ZXJUeXBlLCBmaWVsZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluVmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXhWYWx1ZSgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGluY2x1ZGVOdWxsVmFsdWVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlTnVsbFZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXREb21haW5Bc3luYyhkb21haW5UeXBlPzogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSk6IFByb21pc2U8Q29udHJhY3QuUmFuZ2VEb21haW4+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgaWYgKCFkb21haW5UeXBlKSB7XG4gICAgICBkb21haW5UeXBlID0gQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZS5SZWxldmFudDtcbiAgICB9XG5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGU+KGRvbWFpblR5cGUsIENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0UmFuZ2VEb21haW5Bc3luYyh0aGlzLl93b3Jrc2hlZXROYW1lLCB0aGlzLl9maWVsZElkLCBkb21haW5UeXBlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVsYXRpdmVEYXRlRmlsdGVyIGV4dGVuZHMgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9hbmNob3JEYXRlOiBDb250cmFjdC5EYXRhVmFsdWUsXG4gICAgcHJpdmF0ZSBfcGVyaW9kVHlwZTogQ29udHJhY3QuUGVyaW9kVHlwZSxcbiAgICBwcml2YXRlIF9yYW5nZVR5cGU6IENvbnRyYWN0LkRhdGVSYW5nZVR5cGUsXG4gICAgcHJpdmF0ZSBfcmFuZ2VOOiBudW1iZXIpIHtcbiAgICBzdXBlcih3b3Jrc2hlZXROYW1lLCBmaWVsZE5hbWUsIGZpbHRlclR5cGUsIGZpZWxkSWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBhbmNob3JEYXRlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuY2hvckRhdGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBlcmlvZFR5cGUoKTogQ29udHJhY3QuUGVyaW9kVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmlvZFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJhbmdlVHlwZSgpOiBDb250cmFjdC5EYXRlUmFuZ2VUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2VUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCByYW5nZU4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2VOO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWNhbERvbWFpbiBpbXBsZW1lbnRzIENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZhbHVlczogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPixcbiAgICBwcml2YXRlIF9kb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlcygpOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5UeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZURvbWFpbiBpbXBsZW1lbnRzIENvbnRyYWN0LlJhbmdlRG9tYWluIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21pbjogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX21heDogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX2RvbWFpblR5cGU6IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4KCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL0ZpbHRlck1vZGVscy50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHtcbiAgRGF0YVRhYmxlIGFzIERhdGFUYWJsZUludGVybmFsQ29udHJhY3QsXG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBIaWdobGlnaHRlZE1hcmtzVGFibGUsXG4gIFBhcmFtZXRlcklkLFxuICBTZWxlY3RlZE1hcmtzVGFibGUsXG4gIFVuZGVybHlpbmdEYXRhVGFibGUsXG4gIFZlcmJJZCxcbiAgVmlzdWFsSWQsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgQ29sdW1uLCBEYXRhVGFibGUsIERhdGFWYWx1ZSwgTWFya0luZm8gfSBmcm9tICcuLi8uLi9Nb2RlbHMvR2V0RGF0YU1vZGVscyc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSwgR2V0RGF0YVR5cGUgfSBmcm9tICcuLi9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5leHBvcnQgY2xhc3MgR2V0RGF0YVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgR2V0RGF0YVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5HZXREYXRhO1xuICB9XG5cbiAgcHVibGljIGdldE1heFJvd0xpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDEwMDAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW1pdGVkTWF4Um93cyhyZXF1ZXN0ZWRSb3dzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHJvd0NvdW50TGltaXQgPSB0aGlzLmdldE1heFJvd0xpbWl0KCkgKyAxO1xuICAgIHJldHVybiAocmVxdWVzdGVkUm93cyA+IDAgJiYgcmVxdWVzdGVkUm93cyA8IHJvd0NvdW50TGltaXQpID8gcmVxdWVzdGVkUm93cyA6IHJvd0NvdW50TGltaXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICB2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgZ2V0VHlwZTogR2V0RGF0YVR5cGUsXG4gICAgaWdub3JlQWxpYXNlczogYm9vbGVhbixcbiAgICBpZ25vcmVTZWxlY3Rpb246IGJvb2xlYW4sXG4gICAgaW5jbHVkZUFsbENvbHVtbnM6IGJvb2xlYW4sXG4gICAgbWF4Um93czogbnVtYmVyKTogUHJvbWlzZTxEYXRhVGFibGU+IHtcbiAgICAvLyBDcmVhdGUgYWxsIG9mIG91ciBwYXJhbWV0ZXJzXG4gICAgY29uc3QgdmVyYiA9IGdldFR5cGUgPT09IEdldERhdGFUeXBlLlN1bW1hcnkgPyBWZXJiSWQuR2V0RGF0YVN1bW1hcnlEYXRhIDogVmVyYklkLkdldFVuZGVybHlpbmdEYXRhO1xuICAgIGNvbnN0IHJlcXVlc3RNYXhSb3dzID0gdmVyYiA9PT0gVmVyYklkLkdldFVuZGVybHlpbmdEYXRhID8gdGhpcy5nZXRMaW1pdGVkTWF4Um93cyhtYXhSb3dzKSA6IG1heFJvd3M7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSWdub3JlQWxpYXNlc10gPSBpZ25vcmVBbGlhc2VzO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSWdub3JlU2VsZWN0aW9uXSA9IGlnbm9yZVNlbGVjdGlvbjtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkluY2x1ZGVBbGxDb2x1bW5zXSA9IGluY2x1ZGVBbGxDb2x1bW5zO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuTWF4Um93c10gPSByZXF1ZXN0TWF4Um93cztcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxEYXRhVGFibGU+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGEuZGF0YSwgcmVzcG9uc2VEYXRhLmlzU3VtbWFyeSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0U2VsZWN0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBTZWxlY3RlZE1hcmtzVGFibGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEuZGF0YS5tYXAodGFibGUgPT4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHRhYmxlLCB0cnVlKSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkIH07XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0SGlnaGxpZ2h0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBIaWdobGlnaHRlZE1hcmtzVGFibGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEuZGF0YS5tYXAodGFibGUgPT4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHRhYmxlLCB0cnVlKSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICBkYXRhU291cmNlSWQ6IHN0cmluZyxcbiAgICBpZ25vcmVBbGlhc2VzOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcixcbiAgICBjb2x1bW5zVG9JbmNsdWRlOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxEYXRhVGFibGU+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQsXG4gICAgICBbUGFyYW1ldGVySWQuSWdub3JlQWxpYXNlc106IGlnbm9yZUFsaWFzZXMsXG4gICAgICBbUGFyYW1ldGVySWQuTWF4Um93c106IHRoaXMuZ2V0TGltaXRlZE1heFJvd3MobWF4Um93cyksXG4gICAgICBbUGFyYW1ldGVySWQuQ29sdW1uc1RvSW5jbHVkZV06IGNvbHVtbnNUb0luY2x1ZGUsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldERhdGFTb3VyY2VEYXRhLCBwYXJhbWV0ZXJzKS50aGVuPERhdGFUYWJsZT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UucmVzdWx0IGFzIFVuZGVybHlpbmdEYXRhVGFibGU7XG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUmVzdWx0c1RhYmxlKHJlc3BvbnNlRGF0YS5kYXRhLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGE6IERhdGFUYWJsZUludGVybmFsQ29udHJhY3QsIGlzU3VtbWFyeTogYm9vbGVhbik6IERhdGFUYWJsZSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHJlc3BvbnNlRGF0YS5oZWFkZXJzLm1hcChoID0+IG5ldyBDb2x1bW4oaC5maWVsZENhcHRpb24sXG4gICAgICBoLmRhdGFUeXBlLFxuICAgICAgaC5pc1JlZmVyZW5jZWQsXG4gICAgICBoLmluZGV4KSk7XG5cbiAgICAvLyBUT0RPIFRoaXMgc2hvdWxkIGJlIGNvbnRyb2xsZWQgYnkgYSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGFwaSB3aWxsIHJlc3BvbmQgbWFya3MgaW5mbyBvciBub3RcbiAgICBsZXQgbWFya3M7XG4gICAgaWYgKHJlc3BvbnNlRGF0YS5tYXJrcykge1xuICAgICAgbWFya3MgPSByZXNwb25zZURhdGEubWFya3MubWFwKGggPT4gbmV3IE1hcmtJbmZvKGgudHlwZSxcbiAgICAgICAgaC5jb2xvcixcbiAgICAgICAgaC50dXBsZUlkKSk7XG4gICAgfVxuXG4gICAgLy8gTGltaXQrMSBpcyBvdXIgc2VudGluYWwgdGhhdCB1bmRlcmx5aW5nIGRhdGEgY29udGFpbnMgbW9yZSByb3dzIHRoYW4gdXNlciBpcyBhbGxvd2VkIHRvIGZldGNoLlxuICAgIC8vIFJlbW92ZSB0aGUgbGFzdCBlbGVtZW50IHNvIHdlIGFsd2F5cyByZXR1cm4gTWF4Um93TGltaXRcbiAgICBjb25zdCBpc1RvdGFsUm93Q291bnRMaW1pdGVkID0gaXNTdW1tYXJ5ID09PSBmYWxzZSAmJiByZXNwb25zZURhdGEuZGF0YVRhYmxlLmxlbmd0aCA9PT0gdGhpcy5nZXRNYXhSb3dMaW1pdCgpICsgMTtcbiAgICBpZiAoaXNUb3RhbFJvd0NvdW50TGltaXRlZCkge1xuICAgICAgcmVzcG9uc2VEYXRhLmRhdGFUYWJsZS5sZW5ndGggLT0gMTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZSA9IHJlc3BvbnNlRGF0YS5kYXRhVGFibGUubWFwKHJvdyA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcChjZWxsID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoY2VsbC52YWx1ZSwgY2VsbC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChtYXJrcykge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVGFibGUodGFibGUsIGhlYWRlcnMsIHRhYmxlLmxlbmd0aCwgaXNUb3RhbFJvd0NvdW50TGltaXRlZCwgaXNTdW1tYXJ5LCBtYXJrcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0YVRhYmxlKHRhYmxlLCBoZWFkZXJzLCB0YWJsZS5sZW5ndGgsIGlzVG90YWxSb3dDb3VudExpbWl0ZWQsIGlzU3VtbWFyeSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLCBNb2RlbCwgTm90aWZpY2F0aW9uLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UsIFVucmVnaXN0ZXJGbiB9IGZyb20gJy4uL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuY2xhc3MgUmVnaXN0cmF0aW9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpbHRlckZuOiAobm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKSA9PiBib29sZWFuLFxuICAgIHByaXZhdGUgX2NhbGxiYWNrRm46IChub3RpZmljYXRpb25Nb2RlbDogTW9kZWwpID0+IHZvaWQpIHtcbiAgICAvLyBOb3RoaW5nIEhlcmVcbiAgfVxuXG4gIHB1YmxpYyBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Nb2RlbDogTW9kZWwpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyRm4obm90aWZpY2F0aW9uTW9kZWwpKSB7XG4gICAgICB0aGlzLl9jYWxsYmFja0ZuKG5vdGlmaWNhdGlvbk1vZGVsKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2VJbXBsIGltcGxlbWVudHMgTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2hhbmRsZXJzOiB7IFtub3RpZmljYXRpb25JZDogc3RyaW5nXTogQXJyYXk8UmVnaXN0cmF0aW9uPiB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikge1xuICAgIHRoaXMuX2hhbmRsZXJzID0ge307XG4gICAgdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcih0aGlzLm9uTm90aWZpY2F0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihpZDogTm90aWZpY2F0aW9uSWQsIGZpbHRlckZuOiAobW9kZWw6IE1vZGVsKSA9PiBib29sZWFuLCBoYW5kbGVyOiAobW9kZWw6IE1vZGVsKSA9PiB2b2lkKTogVW5yZWdpc3RlckZuIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzW2lkXSB8fCBuZXcgQXJyYXk8UmVnaXN0cmF0aW9uPigpO1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb24oZmlsdGVyRm4sIGhhbmRsZXIpO1xuICAgIGhhbmRsZXJzLnB1c2gocmVnaXN0cmF0aW9uKTtcbiAgICB0aGlzLl9oYW5kbGVyc1tpZF0gPSBoYW5kbGVycztcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVSZWdpc3RyYXRpb24oaWQsIHJlZ2lzdHJhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGhhc0hhbmRsZXJzRm9yTm90aWZpY2F0aW9uVHlwZShpZDogTm90aWZpY2F0aW9uSWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMuaGFzT3duUHJvcGVydHkoaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUobm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbklkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdvIHRocm91Z2ggYW5kIGNoZWNrIGZvciBhbGwgdGhlIGhhbmRsZXJzIG9mIHRoaXMgcGFydGljdWxhciBub3RpZmljYXRpb25cbiAgICB0aGlzLl9oYW5kbGVyc1tub3RpZmljYXRpb24ubm90aWZpY2F0aW9uSWRdLmZvckVhY2goaCA9PiBoLm9uTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbi5kYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVJlZ2lzdHJhdGlvbihpZDogTm90aWZpY2F0aW9uSWQsIHJlZ2lzdHJhdGlvbjogUmVnaXN0cmF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc0hhbmRsZXJzRm9yTm90aWZpY2F0aW9uVHlwZShpZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVyc1tpZF0gPSB0aGlzLl9oYW5kbGVyc1tpZF0uZmlsdGVyKHJlZyA9PiByZWcgIT09IHJlZ2lzdHJhdGlvbik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIE1vZGVsLFxuICBQYXJhbWV0ZXJJZCxcbiAgUGFyYW1ldGVySW5mbyxcbiAgU2hlZXRQYXRoLFxuICBWZXJiSWQsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgUGFyYW1ldGVySW1wbCB9IGZyb20gJy4uLy4uL0ltcGwvUGFyYW1ldGVySW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXIgfSBmcm9tICcuLi8uLi9QYXJhbWV0ZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyc1NlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgUGFyYW1ldGVyc1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlcnNGb3JTaGVldEFzeW5jKHNoZWV0UGF0aDogU2hlZXRQYXRoLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPEFycmF5PFBhcmFtZXRlcj4+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlNoZWV0UGF0aF06IHNoZWV0UGF0aFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXRQYXJhbWV0ZXJzRm9yU2hlZXQsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gVE9ETyAtIENoZWNrIGZvciBlcnJvclxuXG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgQXJyYXk8UGFyYW1ldGVySW5mbz47XG4gICAgICByZXR1cm4gcmVzdWx0Lm1hcChwYXJhbWV0ZXJJbmZvID0+IHtcbiAgICAgICAgY29uc3QgaW1wbCA9IG5ldyBQYXJhbWV0ZXJJbXBsKHBhcmFtZXRlckluZm8pO1xuICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlcihpbXBsLCBzaGVldCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYXJhbWV0ZXJWYWx1ZUFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxQYXJhbWV0ZXJJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5QYXJhbWV0ZXJGaWVsZE5hbWVdOiBmaWVsZE5hbWUsXG4gICAgICBbUGFyYW1ldGVySWQuUGFyYW1ldGVyVmFsdWVdOiBuZXdWYWx1ZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DaGFuZ2VQYXJhbWV0ZXJWYWx1ZSwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgUGFyYW1ldGVySW5mbztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckJ5TmFtZUFzeW5jKG5hbWU6IHN0cmluZywgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5maW5kUGFyYW1ldGVyQXN5bmMoc2hlZXQsIG5hbWUsIHVuZGVmaW5lZCk7XG4gIH1cblxuICBwdWJsaWMgZmluZFBhcmFtZXRlckJ5R2xvYmFsRmllbGROYW1lQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFBhcmFtZXRlckFzeW5jKHNoZWV0LCB1bmRlZmluZWQsIGZpZWxkTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJhbWV0ZXJBc3luYyhcbiAgICBzaGVldDogQ29udHJhY3QuU2hlZXQsXG4gICAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogUHJvbWlzZTxQYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUGFyYW1ldGVyQ2FwdGlvbl0gPSBuYW1lO1xuICAgIH0gZWxzZSBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUGFyYW1ldGVyRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsICduYW1lIG9yIGZpZWxkTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvIGZpbmQgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuRmluZFBhcmFtZXRlciwgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZU9mUGFyYW1ldGVySW5mbyA9IChvYmplY3Q6IE1vZGVsKTogb2JqZWN0IGlzIFBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgICByZXR1cm4gJ2ZpZWxkTmFtZScgaW4gb2JqZWN0O1xuICAgICAgfTtcblxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayB0byBzZWUgaWYgd2UgZ290IGEgdmFsaWQgcmVzcG9uc2UgYmFjayBhZ2FpblxuICAgICAgaWYgKGluc3RhbmNlT2ZQYXJhbWV0ZXJJbmZvKHJlc3BvbnNlLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIFBhcmFtZXRlckluZm87XG4gICAgICAgIGNvbnN0IGltcGwgPSBuZXcgUGFyYW1ldGVySW1wbChyZXN1bHQpO1xuICAgICAgICByZXR1cm4gbmV3IFBhcmFtZXRlcihpbXBsLCBzaGVldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1BhcmFtZXRlcnNTZXJ2aWNlSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWQsIFBhcmFtZXRlckluZm8gfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmltcG9ydCB7IFBhcmFtZXRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQnO1xuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL05vdGlmaWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4uL1V0aWxzL1BhcmFtJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckltcGwge1xuICBwcml2YXRlIF9hbGxvd2FibGVWYWx1ZXM6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uO1xuICBwcml2YXRlIF9nbG9iYWxGaWVsZE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbykge1xuICAgIHRoaXMuc2V0UGFyYW1ldGVySW5mbyhwYXJhbWV0ZXJJbmZvKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRWYWx1ZSgpOiBEYXRhVmFsdWUge1xuICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKHRoaXMuX3BhcmFtZXRlckluZm8uY3VycmVudFZhbHVlLnZhbHVlLCB0aGlzLl9wYXJhbWV0ZXJJbmZvLmN1cnJlbnRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmRhdGFUeXBlLmNvbnZlcnQodGhpcy5fcGFyYW1ldGVySW5mby5kYXRhVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbEZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxsb3dhYmxlVmFsdWVzKCk6IENvbnRyYWN0LlBhcmFtZXRlckRvbWFpblJlc3RyaWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVZhbHVlQXN5bmMobmV3VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBEYXRlKTogUHJvbWlzZTxEYXRhVmFsdWU+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKG5ld1ZhbHVlLCAnbmV3VmFsdWUnKTtcblxuICAgIGxldCBjb2VyY2VkVmFsdWUgPSBQYXJhbS5zZXJpYWxpemVQYXJhbXRlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHBhcmFtZXRlcnNTZXJ2aWNlLmNoYW5nZVBhcmFtZXRlclZhbHVlQXN5bmModGhpcy5fZ2xvYmFsRmllbGROYW1lLCBjb2VyY2VkVmFsdWUpLnRoZW4ocGFyYW1ldGVySW5mbyA9PiB7XG4gICAgICB0aGlzLnNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbyk7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCBnb2VzIHRocm91Z2ggYW5kIHJlZ2lzdGVycyBlYWNoIGV2ZW50IHR5cGUgdGhpcyBpbXBsIGtub3dzIGFib3V0XG4gICAqIHdpdGggdGhlIE5vdGlmaWNhdGlvblNlcnZpY2UuIEl0IHJldHVybnMgYW4gYXJyYXkgb2YgU2luZ2xlRXZlbnRNYW5hZ2VyIG9iamVjdHMgd2hpY2hcbiAgICogY2FuIHRoZW4gYmUgcGFzc2VkIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIHRvIGhhbmRsZSB1c2VyIHJlZ2lzdHJhdGlvbiAvIHVucmVnaXN0cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gc2hlZXQgVGhlIHNoZWV0IG9iamVjdCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkIHdpdGggdGhlIGV2ZW50IG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybnMge0FycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj59IENvbGxlY3Rpb24gb2YgZXZlbnQgbWFuYWdlcnMgdG8gcGFzcyB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlclxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFsbCBvZiB0aGUgZXZlbnQgbWFuYWdlcnMgd2UnbGwgbmVlZCAob25lIGZvciBlYWNoIGV2ZW50IHR5cGUpXG4gICAgY29uc3QgcGFyYW1ldGVyRXZlbnQgPSBuZXcgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuUGFyYW1ldGVyQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuUGFyYW1ldGVyQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBtb2RlbCBhcyBzdHJpbmc7XG4gICAgICByZXR1cm4gZmllbGROYW1lID09PSB0aGlzLl9nbG9iYWxGaWVsZE5hbWU7XG4gICAgfSwgKGZpZWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBwYXJhbWV0ZXJFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFBhcmFtZXRlckNoYW5nZWRFdmVudChmaWVsZE5hbWUsIHNoZWV0KSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2gocGFyYW1ldGVyRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIHNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbzogUGFyYW1ldGVySW5mbyk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtZXRlckluZm8gPSBwYXJhbWV0ZXJJbmZvO1xuICAgIHRoaXMuX2dsb2JhbEZpZWxkTmFtZSA9IHBhcmFtZXRlckluZm8uZmllbGROYW1lO1xuXG4gICAgY29uc3QgdHlwZSA9IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5hbGxvd2FibGVWYWx1ZXMuY29udmVydChwYXJhbWV0ZXJJbmZvLmFsbG93YWJsZVZhbHVlc1R5cGUpO1xuICAgIGxldCBsaXN0VmFsdWVzOiBBcnJheTxEYXRhVmFsdWU+IHwgdW5kZWZpbmVkO1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIGxldCBtYXhWYWx1ZTogRGF0YVZhbHVlIHwgdW5kZWZpbmVkO1xuICAgIGxldCBzdGVwU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGxldCBkYXRlU3RlcFBlcmlvZDogQ29udHJhY3QuUGVyaW9kVHlwZSB8IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlID09PSBDb250cmFjdC5QYXJhbWV0ZXJWYWx1ZVR5cGUuTGlzdCkge1xuICAgICAgY29uc3QgdmFsdWVzID0gcGFyYW1ldGVySW5mby5hbGxvd2FibGVWYWx1ZXMgfHwgW107XG4gICAgICBsaXN0VmFsdWVzID0gdmFsdWVzLm1hcCh2YWwgPT4gbmV3IERhdGFWYWx1ZSh2YWwudmFsdWUsIHZhbC5mb3JtYXR0ZWRWYWx1ZSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQ29udHJhY3QuUGFyYW1ldGVyVmFsdWVUeXBlLlJhbmdlKSB7XG4gICAgICBtaW5WYWx1ZSA9IHBhcmFtZXRlckluZm8ubWluVmFsdWUgJiYgbmV3IERhdGFWYWx1ZShwYXJhbWV0ZXJJbmZvLm1pblZhbHVlLnZhbHVlLCBwYXJhbWV0ZXJJbmZvLm1pblZhbHVlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIG1heFZhbHVlID0gcGFyYW1ldGVySW5mby5tYXhWYWx1ZSAmJiBuZXcgRGF0YVZhbHVlKHBhcmFtZXRlckluZm8ubWF4VmFsdWUudmFsdWUsIHBhcmFtZXRlckluZm8ubWF4VmFsdWUuZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgc3RlcFNpemUgPSBwYXJhbWV0ZXJJbmZvLnN0ZXBTaXplO1xuICAgICAgZGF0ZVN0ZXBQZXJpb2QgPSBwYXJhbWV0ZXJJbmZvLmRhdGVTdGVwUGVyaW9kICYmXG4gICAgICAgIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXRlU3RlcFBlcmlvZC5jb252ZXJ0KHBhcmFtZXRlckluZm8uZGF0ZVN0ZXBQZXJpb2QpO1xuICAgIH1cblxuICAgIHRoaXMuX2FsbG93YWJsZVZhbHVlcyA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBhbGxvd2FibGVWYWx1ZXM6IGxpc3RWYWx1ZXMsXG4gICAgICBtaW5WYWx1ZTogbWluVmFsdWUsXG4gICAgICBtYXhWYWx1ZTogbWF4VmFsdWUsXG4gICAgICBzdGVwU2l6ZTogc3RlcFNpemUsXG4gICAgICBkYXRlU3RlcFBlcmlvZDogZGF0ZVN0ZXBQZXJpb2RcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1BhcmFtZXRlckltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgUGFyYW1ldGVyc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9QYXJhbWV0ZXJzU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBUYWJsZWF1U2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVNoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVNoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2xvYmFsRmllbGROYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuUGFyYW1ldGVyQ2hhbmdlZCwgc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlckFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyPiB7XG4gICAgLy8gQ2FsbCBkb3duIHRvIG91ciBzZXJ2aWNlIHRvIGdldCB0aGUgcGFyYW1ldGVyIGJhY2sgdmlhIGl0cyBmaWVsZCBuYW1lXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZmluZFBhcmFtZXRlckJ5R2xvYmFsRmllbGROYW1lQXN5bmModGhpcy5fZ2xvYmFsRmllbGROYW1lLCB0aGlzLnNoZWV0KS50aGVuKHBhcmFtZXRlciA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLk1pc3NpbmdQYXJhbWV0ZXIsIGBDYW5ub3QgZmluZCBwYXJhbWV0ZXI6ICR7dGhpcy5fZ2xvYmFsRmllbGROYW1lfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvUGFyYW1ldGVyQ2hhbmdlZEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJJbXBsIH0gZnJvbSAnLi9JbXBsL1BhcmFtZXRlckltcGwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBQYXJhbWV0ZXIgY29udHJhY3QuIENhbGxzIGRvd24gdG8gdGhlIGltcGxcbiAqIGNsYXNzIGZvciBhbG1vc3QgYWxsIG9mIHRoZSB3b3JrIGl0IGRvZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXIgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LlBhcmFtZXRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtZXRlckltcGw6IFBhcmFtZXRlckltcGwsIHNoZWV0OiBDb250cmFjdC5TaGVldCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIG91ciBldmVudCBoYW5kbGluZyBmb3IgdGhpcyBjbGFzc1xuICAgIHRoaXMucGFyYW1ldGVySW1wbC5pbml0aWFsaXplRXZlbnRzKHNoZWV0KS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50VmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbXBsLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGUoKTogQ29udHJhY3QuRGF0YVR5cGUge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuZGF0YVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbG93YWJsZVZhbHVlcygpOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5hbGxvd2FibGVWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZSk6IFByb21pc2U8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5jaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUGFyYW1ldGVyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBQYXJhbWV0ZXJJZCxcbiAgUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUgYXMgU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIERpbWVuc2lvblNlbGVjdGlvbk1vZGVsLFxuICBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCxcbiAgUmFuZ2VTZWxlY3Rpb25Nb2RlbCxcbiAgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyLFxuICBUdXBsZVNlbGVjdGlvbk1vZGVsLFxuICBWYWx1ZVNlbGVjdGlvbk1vZGVsXG59IGZyb20gJy4uLy4uL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZWxlY3Rpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNlbGVjdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5TZWxlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNsZWFyIGFsbCB0aGUgc2VsZWN0ZWQgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB2aXN1YWxJZFxuICAgKi9cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkNsZWFyU2VsZWN0ZWRNYXJrcywgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47IC8vIEV4cGVjdGluZyBhbiBlbXB0eSBtb2RlbCBhbmQgaGVuY2UgdGhlIHZvaWQgcmVzcG9uc2UuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAgICpcbiAgICogQHBhcmFtIHZpc3VhbElkXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYVxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHNlbGVjdGlvbkNyaXRlcmlhcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnU2VsZWN0aW9uIGNyaXRlcmlhIG1pc3NpbmcgZm9yIHNlbGVjdGluZyBtYXJrcyBieSB2YWx1ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvblR5cGU6IHN0cmluZyA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICAgIGxldCBzZWxlY3Rpb25Dcml0ZXJpYVR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSA9IHRoaXMudmFsaWRhdGVTZWxlY3Rpb25Dcml0ZXJpYShzZWxlY3Rpb25Dcml0ZXJpYXNbMF0pO1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gdGhpcy5wYXJzZVNlbGVjdGlvbk1hcmtzKHNlbGVjdGlvbkNyaXRlcmlhcywgc2VsZWN0aW9uQ3JpdGVyaWFUeXBlKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uVXBkYXRlVHlwZV06IHNlbGVjdGlvblR5cGVcbiAgICB9O1xuXG4gICAgc3dpdGNoIChzZWxlY3Rpb25Dcml0ZXJpYVR5cGUpIHtcbiAgICAgIGNhc2UgU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5IaWVyVmFsU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmhpZXJNb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5RdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzXSA9IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnF1YW50TW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZToge1xuICAgICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkRpbVZhbFNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5kaW1Nb2RlbEFycjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuU2VsZWN0QnlWYWx1ZSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBFeHBlY3RpbmcgYW4gZW1wdHkgbW9kZWwgYW5kIGhlbmNlIHRoZSB2b2lkIHJlc3BvbnNlLlxuICAgICAgcmV0dXJuO1xuICAgICAgLy8gVE9ETyBJbnZlc3RpZ2F0ZSB0aGUgZXJyb3IgcmVzcG9uc2Ugd2l0aCBtdWx0aXBsZSBvdXRwdXQgcGFyYW1zIGFuZCB0aHJvdyBlcnJvciBhY2NvcmRpbmdseS5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICogTWV0aG9kIHRvIHNlbGVjdCBtYXJrcyBmb3IgdGhlIGdpdmVuIHdvcmtzaGVldC5cbiAqXG4gKiBAcGFyYW0gdmlzdWFsSWRcbiAqIEBwYXJhbSBNYXJrSW5mb1xuICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAqL1xuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIG1hcmtzOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChtYXJrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnTWFya3MgaW5mbyBtaXNzaW5nIGZvciBzZWxlY3RpbmcgbWFya3MgYnkgSWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlOiBzdHJpbmcgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uVXBkYXRlVHlwZShzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IHRoaXMucGFyc2VTZWxlY3Rpb25JZHMobWFya3MpO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25VcGRhdGVUeXBlXTogc2VsZWN0aW9uVHlwZSxcbiAgICAgIFtQYXJhbWV0ZXJJZC5TZWxlY3Rpb25dOiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5zZWxlY3Rpb25cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNlbGVjdEJ5VmFsdWUsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRXhwZWN0aW5nIGFuIGVtcHR5IG1vZGVsIGFuZCBoZW5jZSB0aGUgdm9pZCByZXNwb25zZS5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgdGhlIGVycm9yIHJlc3BvbnNlIHdpdGggbXVsdGlwbGUgb3V0cHV0IHBhcmFtcyBhbmQgdGhyb3cgZXJyb3IgYWNjb3JkaW5nbHkuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgTWFya3NJbmZvXG4gICAqIEBwYXJhbSBtYXJrc1xuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZVNlbGVjdGlvbklkcyhtYXJrczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+KTogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyIHtcbiAgICBsZXQgaWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgbGV0IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIgPSBuZXcgU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHR1cGxlSWQ6IE51bWJlciB8IHVuZGVmaW5lZCA9IG1hcmtzW2ldLnR1cGxlSWQ7XG4gICAgICBpZiAodHVwbGVJZCAhPT0gdW5kZWZpbmVkICYmIHR1cGxlSWQgIT09IG51bGwpIHsgLy8gSWYgdHVwbGUgaWQgaXMgcHJvdmlkZWQgdXNlIHRoYXQgaW5zdGVhZCBvZiBwYWlyXG4gICAgICAgIGlkcy5wdXNoKHR1cGxlSWQudG9TdHJpbmcoKSk7IC8vIGNvbGxlY3QgdGhlIHR1cGxlIGlkc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICd0dXBsZUlkIHBhcnNpbmcgZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkcy5sZW5ndGggIT09IDApIHsgLy8gdHVwbGUgaWRzIGJhc2VkIHNlbGVjdGlvblxuICAgICAgbGV0IHR1cGxlU2VsZWN0aW9uTW9kZWw6IFR1cGxlU2VsZWN0aW9uTW9kZWwgPSBuZXcgVHVwbGVTZWxlY3Rpb25Nb2RlbCgpO1xuICAgICAgdHVwbGVTZWxlY3Rpb25Nb2RlbC5zZWxlY3Rpb25UeXBlID0gJ3R1cGxlcyc7XG4gICAgICB0dXBsZVNlbGVjdGlvbk1vZGVsLm9iamVjdElkcyA9IGlkcztcbiAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLnNlbGVjdGlvbiA9IHR1cGxlU2VsZWN0aW9uTW9kZWw7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjtcbiAgfVxuICAvKipcbiAgICogTWV0aG9kIHRvIHByZXBhcmUgdGhlIHByZXMgbW9kZWxzIGZvciBzZWxlY3Rpb24gYnkgdmFsdWVzLlxuICAgKlxuICAgKiBTdXBwb3J0cyAzIHR5cGVzIGZvciBzZWxlY3Rpb246XG4gICAqIDEpIGhpZXJhcmNoaWNhbCB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICogMikgcmFuZ2UgdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqIDMpIERpbWVuc2lvbiB2YWx1ZSBiYXNlZCBzZWxlY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIG1hcmtzXG4gICAqIEBwYXJhbSBoaWVyTW9kZWxBcnJcbiAgICogQHBhcmFtIGRpbU1vZGVsQXJyXG4gICAqIEBwYXJhbSBxdWFudE1vZGVsQXJyXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25cbiAgICovXG4gIHByaXZhdGUgcGFyc2VTZWxlY3Rpb25NYXJrcyhzZWxlY3Rpb25Dcml0ZXJpYXM6IEFycmF5PENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhPixcbiAgICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUpOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gbmV3IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcigpO1xuICAgIGxldCBtaXhlZFNlbGVjdGlvbnNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25Dcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0ID0gc2VsZWN0aW9uQ3JpdGVyaWFzW2ldO1xuICAgICAgaWYgKHN0LmZpZWxkTmFtZSAmJiAoc3QudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGNhdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnKFxcW1tBLVphLXowLTldK10pLionLCAnZycpO1xuICAgICAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBzdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuICAgICAgICBpZiAoY2F0UmVnZXgudGVzdChzdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkhpZXJhcmNoaWNhbFR5cGUpIHtcbiAgICAgICAgICAgIGxldCBoaWVyTW9kZWw6IEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsID0gdGhpcy5hZGRUb1BhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCBzdC52YWx1ZSkgYXMgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWw7XG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5oaWVyTW9kZWxBcnIucHVzaChoaWVyTW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgJiYgKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1heCAhPT0gdW5kZWZpbmVkKSB7IC8vIFJhbmdlIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuUmFuZ2VUeXBlKSB7XG4gICAgICAgICAgICBsZXQgcXVhbnRNb2RlbDogUmFuZ2VTZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9SYW5nZVBhcmFtc0xpc3Qoc3QuZmllbGROYW1lLCByYW5nZU9wdGlvbik7XG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5xdWFudE1vZGVsQXJyLnB1c2gocXVhbnRNb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgLy8gRGltZW5zaW9uIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICAgIGlmIChzZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZSkge1xuICAgICAgICAgICAgbGV0IGRpbU1vZGVsOiBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9QYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgc3QudmFsdWUpIGFzIERpbWVuc2lvblNlbGVjdGlvbk1vZGVsO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIuZGltTW9kZWxBcnIucHVzaChkaW1Nb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1peGVkU2VsZWN0aW9uc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaXhlZFNlbGVjdGlvbnNFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZWxlY3Rpb24gQ3JpdGVyaWEgcGFyc2luZyBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uTW9kZWxDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdGlvbkNyaXRlcmlhcyBWYWxpZGF0ZSBhbmQgZGV0ZXJtaW5lIHRoZSBzZWxlY3Rpb24gY3JpdGVyaWFzIHR5cGUuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlU2VsZWN0aW9uQ3JpdGVyaWEoc2VsZWN0aW9uQ3JpdGVyaWE6IENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhKTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlIHtcbiAgICBsZXQgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlO1xuICAgIC8vIERldGVybWluZSB0aGUgdHlwZSBvZiBzZWxlY3Rpb24sIHRoaXMgY29tbWFuZCBpcyBieSBsb29raW5nIGF0IHRoZSBmaXJzdCBzZWxlY3Rpb25cbiAgICBsZXQgY3JpdDogQ29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWEgPSBzZWxlY3Rpb25Dcml0ZXJpYTtcblxuICAgIGxldCBjYXRSZWdleCA9IG5ldyBSZWdFeHAoJyhcXFtbQS1aYS16MC05XStdKS4qJywgJ2cnKTtcbiAgICBsZXQgcmFuZ2VPcHRpb246IENvbnRyYWN0LlJhbmdlVmFsdWUgPSBjcml0LnZhbHVlIGFzIENvbnRyYWN0LlJhbmdlVmFsdWU7XG5cbiAgICBpZiAoY3JpdC5maWVsZE5hbWUgJiYgKGNyaXQudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjcml0LnZhbHVlICE9PSBudWxsKSkge1xuICAgICAgaWYgKGNhdFJlZ2V4LnRlc3QoY3JpdC5maWVsZE5hbWUpKSB7IC8vIEhpZXJhcmNoaWNhbCB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlO1xuICAgICAgfSBlbHNlIGlmICgocmFuZ2VPcHRpb24gYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZSkubWluICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1heCAhPT0gdW5kZWZpbmVkKSB7IC8vIFJhbmdlIHZhbHVlIHNlbGVjdGlvblxuICAgICAgICBzZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLlJhbmdlVHlwZTtcbiAgICAgIH0gZWxzZSB7IC8vIERpbWVyc2lvbiB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5EaW1lbnNpb25UeXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1NlbGVjdGlvbiBDcml0ZXJpYSBwYXJzaW5nIGVycm9yJyk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rpb25UeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0cmFuc2Zvcm0gdGhlIGtleSB2YWx1ZSBwYWlyIGludG8gdmFsdWUgYmFzZWQgcHJlcyBtb2RlbCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVNlbGVjdGlvbk1vZGVsXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGFkZFRvUGFyYW1zTGlzdChmaWVsZE5hbWU6IHN0cmluZywgdmFsdWU6IG9iamVjdCk6IFZhbHVlU2VsZWN0aW9uTW9kZWwge1xuICAgIGxldCB2YWx1ZVNlbGVjdGlvbk1vZGVsOiBWYWx1ZVNlbGVjdGlvbk1vZGVsID0gbmV3IFZhbHVlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICBsZXQgbWFya1ZhbHVlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGxldCB2YWx1ZUFycjogQXJyYXk8c3RyaW5nPiA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXJrVmFsdWVzLnB1c2godmFsdWVBcnJbaV0udG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtWYWx1ZXMucHVzaCh2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnF1YWxpZmllZEZpZWxkQ2FwdGlvbiA9IGZpZWxkTmFtZTtcbiAgICB2YWx1ZVNlbGVjdGlvbk1vZGVsLnNlbGVjdFZhbHVlcyA9IG1hcmtWYWx1ZXM7XG4gICAgcmV0dXJuIHZhbHVlU2VsZWN0aW9uTW9kZWw7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHRyYW5zZm9ybSB0aGUga2V5IHZhbHVlIHBhaXIgaW50byByYW5nZSBiYXNlZCBzZWxlY3Rpb24gcHJlcyBtb2RlbC5cbiAgICpcbiAgICogVE9ETzogTmVlZCB0byBoYW5kbGUgdGhlIHBhcnNpbmcgb2YgZGF0ZSB0eXBlIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlU2VsZWN0aW9uTW9kZWxcbiAgICogQHBhcmFtIGZpZWxkTmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHByaXZhdGUgYWRkVG9SYW5nZVBhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBDb250cmFjdC5SYW5nZVZhbHVlKTogUmFuZ2VTZWxlY3Rpb25Nb2RlbCB7XG4gICAgbGV0IHJhbmdlU2VsZWN0aW9uTW9kZWw6IFJhbmdlU2VsZWN0aW9uTW9kZWwgPSBuZXcgUmFuZ2VTZWxlY3Rpb25Nb2RlbCgpO1xuICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwucXVhbGlmaWVkRmllbGRDYXB0aW9uID0gZmllbGROYW1lO1xuICAgIGlmICh2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5tYXggIT09IG51bGwpIHtcbiAgICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwubWF4VmFsdWUgPSB2YWx1ZS5tYXgudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLm1pbiAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLm1pbiAhPT0gbnVsbCkge1xuICAgICAgcmFuZ2VTZWxlY3Rpb25Nb2RlbC5taW5WYWx1ZSA9IHZhbHVlLm1pbi50b1N0cmluZygpO1xuICAgIH1cbiAgICByYW5nZVNlbGVjdGlvbk1vZGVsLmluY2x1ZGVkID0gdGhpcy52YWxpZGF0ZU51bGxPcHRpb25UeXBlKHZhbHVlLm51bGxPcHRpb24pO1xuICAgIHJldHVybiByYW5nZVNlbGVjdGlvbk1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgc2VsZWN0aW9uIHVwZGF0ZSB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gc2VsZWN0aW9uVXBkYXRlVHlwZVxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlbGVjdGlvblVwZGF0ZVR5cGUoc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IHN0cmluZyB7XG4gICAgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuUmVwbGFjZSkge1xuICAgICAgcmV0dXJuIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbC5SZXBsYWNlO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uVXBkYXRlVHlwZSA9PT0gQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZS5BZGQpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuQWRkO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uVXBkYXRlVHlwZSA9PT0gQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZS5SZW1vdmUpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuUmVtb3ZlO1xuICAgIH1cbiAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLlJlcGxhY2U7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHZhbGlkYXRlIHRoZSBpbmNsdWRlIHR5cGUgZm9yIHJhbmdlIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIG51bGxPcHRpb25cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVOdWxsT3B0aW9uVHlwZShudWxsT3B0aW9uOiBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICBpZiAobnVsbE9wdGlvbikge1xuICAgICAgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uTnVsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZU51bGw7XG4gICAgICB9IGVsc2UgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uTm9uTnVsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZU5vbk51bGw7XG4gICAgICB9IGVsc2UgaWYgKG51bGxPcHRpb24gPT09IENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24uQWxsVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcy5JbmNsdWRlQWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcy5JbmNsdWRlQWxsO1xuICB9XG5cbn1cblxuLyoqXG4gKiBFbnVtIGZvciB0aGUgZGlmZmVyZW50IHNlbGVjdGlvbiBjcml0ZXJpYSB0eXBlcy5cbiAqL1xuZW51bSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUge1xuICBIaWVyYXJjaGljYWxUeXBlID0gMSxcbiAgUmFuZ2VUeXBlID0gMixcbiAgRGltZW5zaW9uVHlwZSA9IDMsXG4gIFR1cGxlc1R5cGUgPSA0LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZWxlY3Rpb25TZXJ2aWNlSW1wbC50cyIsIi8qKlxuICogU2VsZWN0aW9uIE1vZGVsLlxuICovXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgcXVhbGlmaWVkRmllbGRDYXB0aW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVmFsdWUgYmFzZWQgc2VsZWN0aW9uIG1vZGVsLiBNZWFudCBmb3IgaGllcmFyY2hpY2FsLCByYW5nZSBhbmQgY2F0ZWdvcmljYWwgc2VsZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHVlU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBTZWxlY3Rpb25Nb2RlbCB7XG4gIHB1YmxpYyBzZWxlY3RWYWx1ZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbn1cblxuLyoqXG4gKiBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFZhbHVlU2VsZWN0aW9uTW9kZWwge1xufVxuXG4vKipcbiAqIFJhbmdlIGJhc2VkIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgUmFuZ2VTZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIG1pblZhbHVlOiBzdHJpbmc7XG4gIHB1YmxpYyBtYXhWYWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgaW5jbHVkZWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEaW1lbnNpb24gdmFsdWUgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCBleHRlbmRzIFZhbHVlU2VsZWN0aW9uTW9kZWwge1xufVxuLyoqXG4gKiBUdXBsZSBiYXNlZCBzZWxlY3Rpb24gbW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFR1cGxlU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgb2JqZWN0SWRzOiBBcnJheTxzdHJpbmc+ID0gW107XG59XG5cbi8qKlxuICogQ29udGFpbmVyIGNsYXNzIHRvIHBvcHVsYXRlIGFsbCB0aGUgc2VsZWN0aW9uIG1vZGVscyB3aGVuIHBhcnNpbmcgaW5wdXRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciB7XG4gIHB1YmxpYyBoaWVyTW9kZWxBcnI6IEFycmF5PEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsPiA9IFtdO1xuICBwdWJsaWMgZGltTW9kZWxBcnI6IEFycmF5PERpbWVuc2lvblNlbGVjdGlvbk1vZGVsPiA9IFtdO1xuICBwdWJsaWMgcXVhbnRNb2RlbEFycjogQXJyYXk8UmFuZ2VTZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIHNlbGVjdGlvbjogVHVwbGVTZWxlY3Rpb25Nb2RlbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIERhc2hib2FyZENvbnRlbnQgbmFtZXNwYWNlLlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBEYXNoYm9hcmRDb250ZW50IGlzXG4gKiBjdXJyZW50bHkganVzdCBhIChzaW5nbGUpIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRlbnQgaW1wbGVtZW50cyBDb250cmFjdC5EYXNoYm9hcmRDb250ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbkVudmlyb25tZW50IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyBhcyBFbnVtTWFwcGluZ3MgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBlbnZpcm9ubWVudCBuYW1lc3BhY2UuXG4gKiBFbnZpcm9ubWVudCBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpc1xuICoganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IGltcGxlbWVudHMgQ29udHJhY3QuRW52aXJvbm1lbnQge1xuICBwcml2YXRlIF9hcGlWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbnRleHQ6IENvbnRyYWN0LkV4dGVuc2lvbkNvbnRleHQ7XG4gIHByaXZhdGUgX2xhbmd1YWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nO1xuICBwcml2YXRlIF9tb2RlOiBDb250cmFjdC5FeHRlbnNpb25Nb2RlO1xuICBwcml2YXRlIF9vcGVyYXRpbmdTeXN0ZW06IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFibGVhdVZlcnNpb246IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXh0ZW5zaW9uRW52aXJvbm1lbnQ6IEV4dGVuc2lvbkVudmlyb25tZW50KSB7XG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IGV4dGVuc2lvbkVudmlyb25tZW50LmFwaVZlcnNpb247XG4gICAgdGhpcy5fY29udGV4dCA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Db250ZXh0LmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uQ29udGV4dCk7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25MYW5ndWFnZTtcbiAgICB0aGlzLl9sb2NhbGUgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25Mb2NhbGU7XG4gICAgdGhpcy5fbW9kZSA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Nb2RlLmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTW9kZSk7XG4gICAgdGhpcy5fb3BlcmF0aW5nU3lzdGVtID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQub3BlcmF0aW5nU3lzdGVtO1xuICAgIHRoaXMuX3RhYmxlYXVWZXJzaW9uID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQudGFibGVhdVZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwaVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpVmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpOiBDb250cmFjdC5FeHRlbnNpb25Db250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvY2FsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1vZGUoKTogQ29udHJhY3QuRXh0ZW5zaW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9wZXJhdGluZ1N5c3RlbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpbmdTeXN0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRhYmxlYXVWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlYXVWZXJzaW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FbnZpcm9ubWVudC50cyIsImltcG9ydCB7IFNldHRpbmdzIGFzIFNldHRpbmdzQ29udHJhY3QgfSBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IFNldHRpbmdzSW1wbCB9IGZyb20gJy4uL0ltcGwvU2V0dGluZ3NJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiB9IGZyb20gJy4uL1NlcnZpY2VzL1NldHRpbmdzU2VydmljZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIHNldHRpbmdzIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBTZXR0aW5nc0NvbnRyYWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NldHRpbmdzSW1wbDogU2V0dGluZ3NJbXBsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgb3VyIGV2ZW50IGhhbmRsaW5nIGZvciB0aGlzIGNsYXNzXG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmluaXRpYWxpemVFdmVudHMoKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmVyYXNlKGtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbCgpOiBTZXR0aW5nc0NvbGxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuZ2V0QWxsKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTW9kaWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5pc01vZGlmaWVkO1xuICB9XG5cbiAgcHVibGljIHNhdmVBc3luYygpOiBQcm9taXNlPFNldHRpbmdzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuc2F2ZUFzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLnNldChrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFVJSW1wbCB9IGZyb20gJy4uL0ltcGwvVUlJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgVUkgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgVUkgaW1wbGVtZW50cyBDb250cmFjdC5VSSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsOiBVSUltcGwpIHsgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5faW1wbC5kaXNwbGF5RGlhbG9nQXN5bmModXJsLCBwYXlsb2FkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZyhwYXlsb2FkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faW1wbC5jbG9zZURpYWxvZyhwYXlsb2FkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJpbXBvcnQgeyBJbnRlcm5hbEFwaURpc3BhdGNoZXIgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZUltcGwgfSBmcm9tICcuL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBVSVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9JbXBsL1VJU2VydmljZUltcGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEluaXRpYWxpemF0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBTZXR0aW5nc1NlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgVUlTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMudHMiLCJpbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEluaXRpYWxpemF0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5Jbml0aWFsaXphdGlvblNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURhc2hib2FyZEV4dGVuc2lvbnNBc3luYyhpc0V4dGVuc2lvbkRpYWxvZzogYm9vbGVhbiwgY29udGV4dE1lbnVJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxFeHRlbnNpb25Cb290c3RyYXBJbmZvPiB7XG4gICAgY29uc3QgcGFyYW1zOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25Db250ZXh0TWVudUlkc106IGNvbnRleHRNZW51SWRzLFxuICAgICAgW1BhcmFtZXRlcklkLklzRXh0ZW5zaW9uRGlhbG9nXTogaXNFeHRlbnNpb25EaWFsb2dcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuSW5pdGlhbGl6ZUV4dGVuc2lvbiwgcGFyYW1zKS50aGVuPEV4dGVuc2lvbkJvb3RzdHJhcEluZm8+KHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFRPRE8gLSBWYWxpZGF0ZSByZXR1cm4gdmFsdWVcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEV4dGVuc2lvbkJvb3RzdHJhcEluZm87XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb2xsZWN0aW9uLCBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9TZXR0aW5nc1NlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFNldHRpbmdzU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgc2F2ZVNldHRpbmdzQXN5bmMoc2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbik6IFByb21pc2U8U2V0dGluZ3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5TZXR0aW5nc1ZhbHVlc106IHNldHRpbmdzIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TYXZlRXh0ZW5zaW9uU2V0dGluZ3MsIHBhcmFtZXRlcnMpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPih2YWx1ZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5yZXN1bHQgYXMgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvO1xuXG4gICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnNldHRpbmdzVmFsdWVzKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnVW5leHBlY3RlZCBlcnJvciBzYXZpbmdzIHNldHRpbmdzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKHJlc3VsdC5zZXR0aW5nc1ZhbHVlcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJpbXBvcnQgeyBEaWFsb2dPcHRpb25zLCBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSwgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vVUlTZXJ2aWNlJztcblxuY29uc3QgREVGQVVMVF9ESUFMT0dfSEVJR0hUOiBudW1iZXIgPSA0MDA7IC8vIGluIHBpeGVsc1xuY29uc3QgREVGQVVMVF9ESUFMT0dfV0lEVEg6IG51bWJlciA9IDYwMDsgLy8gaW4gcGl4ZWxzXG5cbmV4cG9ydCBjbGFzcyBVSVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgVUlTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ6IHN0cmluZywgb3B0aW9ucz86IERpYWxvZ09wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nVXJsXTogdXJsLFxuICAgICAgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1BheWxvYWRdOiBwYXlsb2FkXG4gICAgfTtcblxuICAgIGNvbnN0IGg6IG51bWJlciA9ICgob3B0aW9ucykgJiYgKG9wdGlvbnMuaGVpZ2h0KSkgPyBvcHRpb25zLmhlaWdodCA6IERFRkFVTFRfRElBTE9HX0hFSUdIVDtcbiAgICBjb25zdCB3OiBudW1iZXIgPSAoKG9wdGlvbnMpICYmIChvcHRpb25zLndpZHRoKSkgPyBvcHRpb25zLndpZHRoIDogREVGQVVMVF9ESUFMT0dfV0lEVEg7XG5cbiAgICAvLyBPbiB0aGUgcGxhdGZvcm0gc2lkZSwgd2UgZG8gc29tZXRoaW5nIHJlYXNvbmFibGUgcmVnYXJkZXNzIG9mIHdoZXRoZXIgdGhlIHBhc3NlZFxuICAgIC8vIGhlaWdodCBhbmQgd2lkdGggYXJlIHRvbyBsYXJnZSBvciB0b28gc21hbGwuICBCdXQgdGhpcyBsaWtlbHkgaW5kaWNhdGVzIGEgZGV2ZWxvcGVyIGVycm9yLFxuICAgIC8vIHNvIHdlIHRocm93IGFuIGVycm9yIGhlcmUgdG8gaGVscCB3aXRoIGRlYnVnZ2luZy5cbiAgICBpZiAoaCA8PSAwIHx8IHcgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsICdTaXplIHBhcmFtZXRlcnMgZm9yIGRpc3BsYXlEaWFsb2dBc3luYyBtdXN0IGJlIHBvc2l0aXZlJyk7XG4gICAgfVxuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dIXSA9IGg7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dXXSA9IHc7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5EaXNwbGF5RGlhbG9nLCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRpYWxvZ1Jlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBFeHRlbnNpb25EaWFsb2dSZXN1bHQ7XG4gICAgICBzd2l0Y2ggKGRpYWxvZ1Jlc3VsdCkge1xuICAgICAgICBjYXNlIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdC5EaWFsb2dBbHJlYWR5T3BlbjpcbiAgICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuRGlhbG9nQWxyZWFkeU9wZW4sICdUaGVyZSBhbHJlYWR5IGV4aXN0cyBhbiBvcGVuIGRpYWxvZyBmb3IgdGhpcyBleHRlbnNpb24uJyk7XG4gICAgICAgIGNhc2UgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LkludmFsaWREb21haW46XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWREb21haW5EaWFsb2csXG4gICAgICAgICAgICAnVGhlIHVybCBvZiBhbiBleHRlbnNpb24gZGlhbG9nIG11c3QgbWF0Y2ggdGhlIGRvbWFpbiBvZiB0aGUgcGFyZW50IGV4dGVuc2lvbi4nKTtcbiAgICAgICAgZGVmYXVsdDogLy8gU3VjY2VzcyBjYXNlXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKHBheWxvYWQ/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSAocGF5bG9hZCkgPyB7IFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dQYXlsb2FkXTogcGF5bG9hZCB9IDoge307XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DbG9zZURpYWxvZywgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1VJU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvblNldHRpbmdzSW5mbywgTm90aWZpY2F0aW9uSWQsIFNldHRpbmdzRXZlbnQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIEVycm9ySGVscGVycyxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBTaW5nbGVFdmVudE1hbmFnZXIsXG4gIFNpbmdsZUV2ZW50TWFuYWdlckltcGwsXG4gIFRhYmxlYXVFcnJvcixcbiAgVGFibGVhdUV2ZW50XG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlJztcblxuY2xhc3MgU2V0dGluZ3NDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5TZXR0aW5nc0NoYW5nZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZXdTZXR0aW5nczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuU2V0dGluZ3NDaGFuZ2VkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3U2V0dGluZ3MoKTogU2V0dGluZ3NDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fbmV3U2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW1wbCB7XG4gIHByaXZhdGUgc3RhdGljIEFTWU5DX1NBVkVfSU5fUFJPR1JFU1M6IHN0cmluZyA9ICdBc3luYyBTYXZlIGlzIGluIHByb2dyZXNzLCB1cGRhdGluZyBzZXR0aW5ncyBpcyBub3QgYWxsb3dlZC4nO1xuICBwcml2YXRlIF9pc01vZGlmaWVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jdXJyZW50U2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbjtcblxuICAvLyBTaW5jZSBwcm9taXNlcyBjYW4ndCBiZSBpbnRyb3NwZWN0ZWQgZm9yIHN0YXRlLCBrZWVwIGEgdmFyaWFibGUgdGhhdFxuICAvLyBpbmRpY2F0ZXMgYSBzYXZlIGlzIGluIHByb2dyZXNzLCBzbyB0aGF0IHNldC9lcmFzZSBjYW4ndCBiZSBjYWxsZWQgZHVyaW5nIGEgc2F2ZS5cbiAgcHJpdmF0ZSBfc2F2ZUluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pIHtcbiAgICB0aGlzLmluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm8pO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihrZXksICdrZXknKTtcblxuICAgIC8vIE9ubHkgbWFrZSBhIG1vZGlmaWNhdGlvbiBpZiB3ZSBoYXZlIHRoZSBrZXkgYWxyZWFkeVxuICAgIGlmICh0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSkge1xuICAgICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XTtcbiAgICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoa2V5LCAna2V5Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFNldHRpbmdzW2tleV07XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgLy8gUmV0dXJucyBhIG11dGFibGUgY29weSBvZiB0aGUgc2V0dGluZ3NcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNb2RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb2RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlQXN5bmMoKTogUHJvbWlzZTxTZXR0aW5nc0NvbGxlY3Rpb24+IHtcbiAgICB0aGlzLnZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTtcblxuICAgIC8vIEp1c3QgcmVzb2x2ZSBpbW1lZGlhdGVseSBpZiBzZXR0aW5ncyBhcmUgdW5jaGFuZ2VkXG4gICAgaWYgKCF0aGlzLl9pc01vZGlmaWVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlPFNldHRpbmdzQ29sbGVjdGlvbj4odGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICAvLyBVc2UgdGhlIHNldHRpbmdzIHNlcnZpY2UgdG8gc2F2ZSBzZXR0aW5ncyB0byB0d2JcbiAgICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZXR0aW5nc1NlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNldHRpbmdzU2VydmljZS5zYXZlU2V0dGluZ3NBc3luYyh0aGlzLl9jdXJyZW50U2V0dGluZ3MpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPihuZXdTZXR0aW5ncyA9PiB7XG4gICAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNNb2RpZmllZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IG5ld1NldHRpbmdzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jdXJyZW50U2V0dGluZ3MsIG5ld1NldHRpbmdzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdTZXR0aW5ncztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5U3RyaW5nUGFyYW1ldGVyKGtleSwgJ2tleScpOyAvLyBLZXkgc2hvdWxkbid0IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHZhbHVlLCAndmFsdWUnKTsgLy8gRW1wdHkgc3RyaW5nIHZhbHVlIGlzIGFsbG93ZWQuXG4gICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFsbCBldmVudHMgcmVsZXZhbnQgdG8gc2V0dGluZ3Mgb2JqZWN0LiAgVGhpcyBpcyBvbmx5IGEgc2V0dGluZ3NVcGRhdGUgZXZlbnQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoKTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5nc0NoYW5nZWRFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPFNldHRpbmdzQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlNldHRpbmdzQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2V0dGluZ3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIChldmVudDogU2V0dGluZ3NFdmVudCkgPT4ge1xuICAgICAgdGhpcy5fY3VycmVudFNldHRpbmdzID0gZXZlbnQubmV3U2V0dGluZ3M7XG4gICAgICBzZXR0aW5nc0NoYW5nZWRFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFNldHRpbmdzQ2hhbmdlZEV2ZW50KGV2ZW50Lm5ld1NldHRpbmdzKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2goc2V0dGluZ3NDaGFuZ2VkRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2V0dGluZ3NJbmZvLCAnc2V0dGluZ3NJbmZvJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZXR0aW5nc0luZm8uc2V0dGluZ3NWYWx1ZXMsICdzZXR0aW5nc0luZm8uU2V0dGluZ3NWYWx1ZXMnKTtcblxuICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IHNldHRpbmdzSW5mby5zZXR0aW5nc1ZhbHVlcztcblxuICAgIC8vIFJlc2V0IHRoZSBpc01vZGlmaWVkIGZsYWdcbiAgICB0aGlzLl9pc01vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoZWxwZXIgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgYW55IGxvY2FsIHVwZGF0ZSB0byB0aGlzLmN1cnJlbnRTZXR0aW5ncy5cbiAgICogQ2hlY2tzIGlmIGEgY3VycmVudCBzYXZlIGNhbGwgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MgYW5kIHRocm93cyBhbiBlcnJvciBpZiBzby5cbiAgICovXG4gIHByaXZhdGUgdmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2F2ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5TZXR0aW5nU2F2ZUluUHJvZ3Jlc3MsIFNldHRpbmdzSW1wbC5BU1lOQ19TQVZFX0lOX1BST0dSRVNTKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGlhbG9nVXBkYXRlRXZlbnQsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeSxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBUYWJsZWF1RXJyb3Jcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvVUlTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFVJSW1wbCB7XG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB1aVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxVSVNlcnZpY2U+KEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuVUlTZXJ2aWNlKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdWlTZXJ2aWNlLmRpc3BsYXlEaWFsb2dBc3luYyh1cmwsIHBheWxvYWQgfHwgJycsIG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB1bnJlZ2lzdGVyRm4gPSBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5FeHRlbnNpb25EaWFsb2dVcGRhdGUsIChtb2RlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBMZXQgdGhyb3VnaCBhbnkgZGlhbG9nIHVwZGF0ZSBldmVudFxuICAgICAgICB9LCAoZXZlbnQ6IERpYWxvZ1VwZGF0ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzQ2xvc2VFdmVudCkge1xuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5jbG9zZVBheWxvYWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkRpYWxvZ0Nsb3NlZEJ5VXNlciwgJ0V4dGVuc2lvbiBkaWFsb2cgY2xvc2VkIGJ5IHVzZXIuJykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVucmVnaXN0ZXJGbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2cocGF5bG9hZD86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVpU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFVJU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZSk7XG5cbiAgICB1aVNlcnZpY2UuY2xvc2VEaWFsb2cocGF5bG9hZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1VJSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgQ2FsbGJhY2tNYXAsIEV4dGVuc2lvbnNJbXBsIH0gZnJvbSAnLi4vSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIEV4dGVuc2lvbnMgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9ucyBpbXBsZW1lbnRzIENvbnRyYWN0LkV4dGVuc2lvbnMge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBleHRlbnNpb25JbXBsOiBFeHRlbnNpb25zSW1wbCkge1xuICAgIHRoaXMuZXh0ZW5zaW9uSW1wbCA9IGV4dGVuc2lvbkltcGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZENvbnRlbnQoKTogQ29udHJhY3QuRGFzaGJvYXJkQ29udGVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5kYXNoYm9hcmRDb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBDb250cmFjdC5FbnZpcm9ubWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5lbnZpcm9ubWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2V0dGluZ3MoKTogQ29udHJhY3QuU2V0dGluZ3Mge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuc2V0dGluZ3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVpKCk6IENvbnRyYWN0LlVJIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLnVpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVBc3luYyhjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmMoZmFsc2UsIGNvbnRleHRNZW51Q2FsbGJhY2tzKS50aGVuPHZvaWQ+KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURpYWxvZ0FzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmModHJ1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMudHMiXSwic291cmNlUm9vdCI6IiJ9