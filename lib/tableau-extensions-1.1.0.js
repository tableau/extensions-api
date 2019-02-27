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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
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
__export(__webpack_require__(113));


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
__webpack_require__(55);
__webpack_require__(114);
__export(__webpack_require__(117));
__export(__webpack_require__(118));
__export(__webpack_require__(119));
__export(__webpack_require__(120));
__export(__webpack_require__(58));
__export(__webpack_require__(121));
// These are the exports from the messaging stuff
__export(__webpack_require__(125));
__export(__webpack_require__(40));
// Export a hardcoded version of the internal contract. This should match what's in package.json.
// Normally, we'd use some sort of webpack replacement to inject this into code, but that doesn't
// work with the module-dev-scripts and this isn't too much work.
// If you forget to keep this in sync with package.json, a test will fail so we should be ok.
exports.INTERNAL_CONTRACT_VERSION = {
    major: 1,
    minor: 9,
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

var store = __webpack_require__(45)('wks');
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Export everything which had been previously in the api-shared module
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Dashboard_1 = __webpack_require__(112);
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(39);
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(4);
exports.TableauError = TableauError_1.TableauError;
var VersionNumber_1 = __webpack_require__(57);
exports.VersionNumber = VersionNumber_1.VersionNumber;
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(60);
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(42);
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(128);
exports.DashboardImpl = DashboardImpl_1.DashboardImpl;
var ServiceImplBase_1 = __webpack_require__(12);
exports.ServiceImplBase = ServiceImplBase_1.ServiceImplBase;
var ErrorHelpers_1 = __webpack_require__(8);
exports.ErrorHelpers = ErrorHelpers_1.ErrorHelpers;
__export(__webpack_require__(139));
__export(__webpack_require__(141));
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
var Param_1 = __webpack_require__(43);
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
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InvalidParameter, "Unexpected invalid param value, Zone Id: " + zoneID + " is either not present or is a fixed zone.");
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

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var TableauError_1 = __webpack_require__(4);
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

var dP = __webpack_require__(21);
var createDesc = __webpack_require__(46);
module.exports = __webpack_require__(18) ? function (object, key, value) {
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
var SharedApiExternalContract_1 = __webpack_require__(0);
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
        _o[api_internal_contract_js_1.ErrorCodes.VISIBILITY_ERROR] = SharedApiExternalContract_1.ErrorCodes.VisibilityError,
        _o), SharedApiExternalContract_1.ErrorCodes.InternalError);
    InternalToExternalEnumMappings.filterType = new EnumConverter_1.EnumConverter((_p = {},
        _p[api_internal_contract_js_1.FilterType.Categorical] = SharedApiExternalContract_1.FilterType.Categorical,
        _p[api_internal_contract_js_1.FilterType.Range] = SharedApiExternalContract_1.FilterType.Range,
        _p[api_internal_contract_js_1.FilterType.RelativeDate] = SharedApiExternalContract_1.FilterType.RelativeDate,
        _p[api_internal_contract_js_1.FilterType.Hierarchical] = SharedApiExternalContract_1.FilterType.Hierarchical,
        _p));
    return InternalToExternalEnumMappings;
}());
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings;
/* tslint:enable:typedef */


/***/ }),
/* 15 */
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
var hide = __webpack_require__(13);
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
var IE8_DOM_DEFINE = __webpack_require__(73);
var toPrimitive = __webpack_require__(74);
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
var $keys = __webpack_require__(80);
var enumBugKeys = __webpack_require__(48);

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

var shared = __webpack_require__(45)('keys');
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
})(MessageType = exports.MessageType || (exports.MessageType = {}));


/***/ }),
/* 41 */
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
        if (throwIfMissing === void 0) { throwIfMissing = ShouldThrow.Yes; }
        if (this._mappings.hasOwnProperty(enumVal)) {
            return this._mappings[enumVal];
        }
        if (this._defaultVal !== undefined && throwIfMissing !== ShouldThrow.Yes) {
            return this._defaultVal;
        }
        throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Enum Mapping not found for: " + enumVal);
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(17);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(77);
var setToStringTag = __webpack_require__(36);
var getPrototypeOf = __webpack_require__(83);
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
/* 48 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(2)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(93);
var html = __webpack_require__(49);
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
/* 53 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 56 */
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
/* 57 */
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
    function VersionNumber(versionString, isAlpha) {
        var parts = versionString.split('.').map(function (p) { return parseInt(p, 10); });
        if (parts.length !== 3) {
            throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Invalid version number: " + versionString);
        }
        this.major = parts[0];
        this.minor = parts[1];
        this.fix = parts[2];
        this.isAlpha = isAlpha;
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
    VersionNumber.SetVersionNumber = function (numString, isAlpha) {
        VersionNumber._instance = new VersionNumber(numString, isAlpha);
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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(64);
var ConnectionSummary_1 = __webpack_require__(135);
var Field_1 = __webpack_require__(65);
var TableSummary_1 = __webpack_require__(136);
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
/* 64 */
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
/* 65 */
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
/* 66 */
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
var TableauSheetEvent_1 = __webpack_require__(67);
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
var TableauEvent_1 = __webpack_require__(60);
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b, _c, _d;
var EnumConverter_1 = __webpack_require__(41);
var SharedApiExternalContract_1 = __webpack_require__(0);
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
    ExternalToInternalEnumMappings.setVisibilityType = new EnumConverter_1.EnumConverter((_d = {},
        _d[SharedApiExternalContract_1.ZoneVisibilityType.Show] = true,
        _d[SharedApiExternalContract_1.ZoneVisibilityType.Hide] = false,
        _d));
    return ExternalToInternalEnumMappings;
}());
exports.ExternalToInternalEnumMappings = ExternalToInternalEnumMappings;
/* tslint:enable:typedef */


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(71);
__webpack_require__(101);
__webpack_require__(55);
// Due to the way we configured webpack, we should be exporting things which will be under
// a global variable called "tableau". Export everything we want to be visible under tableau
// from this file.
var ExtensionsImpl_1 = __webpack_require__(111);
var Extensions_1 = __webpack_require__(164);
var ApiShared_1 = __webpack_require__(5);
var isAlpha = typeof EXTENSION_VERSION_IS_ALPHA !== 'undefined' ? EXTENSION_VERSION_IS_ALPHA : false;
ApiShared_1.VersionNumber.SetVersionNumber( true ? "1.1.0-3" : '0.0.0', isAlpha);
var extensionImpl = new ExtensionsImpl_1.ExtensionsImpl();
exports.extensions = new Extensions_1.Extensions(extensionImpl);
// Export Enums
// These show up under the tableau object. I.e. tableau.ExtensionContext.Server
var ExtensionsApiExternalContract_1 = __webpack_require__(15);
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
exports.ZoneVisibilityType = ExtensionsApiExternalContract_1.ZoneVisibilityType;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
__webpack_require__(75);
__webpack_require__(84);
__webpack_require__(87);
__webpack_require__(99);
__webpack_require__(100);
module.exports = __webpack_require__(6).Promise;


/***/ }),
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(18) && !__webpack_require__(27)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(76)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(47)(String, 'String', function (iterated) {
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
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(78);
var descriptor = __webpack_require__(46);
var setToStringTag = __webpack_require__(36);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(79);
var enumBugKeys = __webpack_require__(48);
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
  __webpack_require__(49).appendChild(iframe);
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(32);
var arrayIndexOf = __webpack_require__(81)(false);
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(32);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(82);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 83 */
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(85);
var getKeys = __webpack_require__(31);
var redefine = __webpack_require__(17);
var global = __webpack_require__(3);
var hide = __webpack_require__(13);
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(50);
var step = __webpack_require__(86);
var Iterators = __webpack_require__(20);
var toIObject = __webpack_require__(32);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(47)(Array, 'Array', function (iterated, kind) {
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
/* 86 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var global = __webpack_require__(3);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(24);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(23);
var anInstance = __webpack_require__(88);
var forOf = __webpack_require__(89);
var speciesConstructor = __webpack_require__(51);
var task = __webpack_require__(52).set;
var microtask = __webpack_require__(94)();
var newPromiseCapabilityModule = __webpack_require__(38);
var perform = __webpack_require__(53);
var userAgent = __webpack_require__(95);
var promiseResolve = __webpack_require__(54);
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
  Internal.prototype = __webpack_require__(96)($Promise.prototype, {
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
__webpack_require__(97)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(98)(function (iter) {
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
/* 88 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(90);
var isArrayIter = __webpack_require__(91);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(34);
var getIterFn = __webpack_require__(92);
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
/* 90 */
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 92 */
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
/* 93 */
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(52).set;
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(17);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 97 */
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
/* 98 */
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(11);
var core = __webpack_require__(6);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(51);
var promiseResolve = __webpack_require__(54);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(38);
var perform = __webpack_require__(53);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
module.exports = __webpack_require__(6).Array.find;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(11);
var $find = __webpack_require__(103)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(50)(KEY);


/***/ }),
/* 103 */
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
var asc = __webpack_require__(104);
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(105);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(106);
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(16);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(108) });


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(109);
var pIE = __webpack_require__(110);
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
/* 109 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
var DashboardContent_1 = __webpack_require__(154);
var Environment_1 = __webpack_require__(155);
var ExtensionsApiExternalContract_1 = __webpack_require__(15);
var RegisterAllExtensionsServices_1 = __webpack_require__(156);
var Settings_1 = __webpack_require__(160);
var SettingsImpl_1 = __webpack_require__(161);
var ApiShared_2 = __webpack_require__(5);
var UI_1 = __webpack_require__(162);
var UIImpl_1 = __webpack_require__(163);
var VersionNumber_1 = __webpack_require__(57);
var api_internal_contract_js_1 = __webpack_require__(1);
var ExtensionsImpl = /** @class */ (function () {
    function ExtensionsImpl() {
    }
    ExtensionsImpl.prototype.initializeAsync = function (isExtensionDialog, contextMenuCallbacks) {
        var _this = this;
        if (!this._initializationPromise) {
            this._initializationPromise = new Promise(function (resolve, reject) {
                var initOptions = { isAlpha: VersionNumber_1.VersionNumber.Instance.isAlpha };
                // First thing we want to do is check to see if there is a desktop dispatcher already registered for us
                if (api_internal_contract_js_1.InternalApiDispatcherHolder.hasDesktopApiDispatcherPromise(initOptions)) {
                    // Running in desktop, use this promise
                    var desktopDispatcherPromise = api_internal_contract_js_1.InternalApiDispatcherHolder.getDesktopDispatcherPromise(initOptions);
                    desktopDispatcherPromise.then(function (dipatcherFactory) {
                        return _this.onDispatcherReceived(dipatcherFactory, isExtensionDialog, contextMenuCallbacks);
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
/* 112 */
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
    Dashboard.prototype.setZoneVisibilityAsync = function (zoneVisibilityMap) {
        return this._dashboardImpl.setZoneVisibilityAsync(zoneVisibilityMap);
    };
    return Dashboard;
}(Sheet_1.Sheet));
exports.Dashboard = Dashboard;


/***/ }),
/* 113 */
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
/**
 * Enum that represents the visibility state of a zone
 * @since 1.1.0
 */
var ZoneVisibilityType;
(function (ZoneVisibilityType) {
    /** Used for turning on the visibity of a zone in the dashboard.*/
    ZoneVisibilityType["Show"] = "show";
    /** Used for turning off the visibity of a zone in the dashboard.*/
    ZoneVisibilityType["Hide"] = "hide";
})(ZoneVisibilityType = exports.ZoneVisibilityType || (exports.ZoneVisibilityType = {}));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(6).Number.isInteger;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(11);

$export($export.S, 'Number', { isInteger: __webpack_require__(116) });


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(10);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 117 */
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Verbs_1 = __webpack_require__(58);
var JsApiInternalContract_1 = __webpack_require__(1);
var InternalApiDispatcherHolder;
(function (InternalApiDispatcherHolder) {
    function getDesktopDispatcherPromise(options) {
        if ((!options || typeof options.isAlpha === 'undefined') && !window.__warningIssued) {
            // tslint:disable-next-line:no-console
            console.warn('This is an alpha version of the Extensions API. Please upgrade to an official release.');
            window.__warningIssued = true;
        }
        else if (options && options.isAlpha && window.__platformIsOfficialRelease) {
            window.__tableauDesktopDispatcher.then(function (dispatcherFactory) {
                var dispatcher = dispatcherFactory(JsApiInternalContract_1.INTERNAL_CONTRACT_VERSION);
                dispatcher.execute(Verbs_1.VerbId.BlockExtension, {});
                return;
            });
        }
        return window.__tableauDesktopDispatcher;
    }
    InternalApiDispatcherHolder.getDesktopDispatcherPromise = getDesktopDispatcherPromise;
    // Because we use the absence of options  to identify versions <= 1.0.0 we must pass them here as well
    function hasDesktopApiDispatcherPromise(options) {
        return !!InternalApiDispatcherHolder.getDesktopDispatcherPromise(options);
    }
    InternalApiDispatcherHolder.hasDesktopApiDispatcherPromise = hasDesktopApiDispatcherPromise;
    function setDesktopDispatcherPromise(dispatcher, options) {
        window.__tableauDesktopDispatcher = dispatcher;
        if (options) {
            window.__platformIsOfficialRelease = options.platformIsOfficialRelease;
        }
    }
    InternalApiDispatcherHolder.setDesktopDispatcherPromise = setDesktopDispatcherPromise;
})(InternalApiDispatcherHolder = exports.InternalApiDispatcherHolder || (exports.InternalApiDispatcherHolder = {}));


/***/ }),
/* 119 */
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
/* 120 */
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(122);
var IdentityVersionConverter_1 = __webpack_require__(123);
var VersionTranslations_1 = __webpack_require__(124);
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


/***/ }),
/* 122 */
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
/* 123 */
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(59);
var CrossFramePreparedMessage_1 = __webpack_require__(126);
var MessageTypes_1 = __webpack_require__(40);
var MessageTypeChecks_1 = __webpack_require__(127);
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
/* 126 */
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(59);
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
/* 128 */
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
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var DashboardObject_1 = __webpack_require__(129);
var api_internal_contract_js_1 = __webpack_require__(1);
var ErrorHelpers_1 = __webpack_require__(8);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var Point_1 = __webpack_require__(130);
var SheetImpl_1 = __webpack_require__(61);
var SheetInfoImpl_1 = __webpack_require__(131);
var Size_1 = __webpack_require__(132);
var Worksheet_1 = __webpack_require__(133);
var WorksheetImpl_1 = __webpack_require__(134);
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
                // zone.sheetInfo was not initialized prior to internal-contract 1.6.0
                var worksheetName = zone.sheetInfo ? zone.sheetInfo.name : zone.name;
                var sheetInfo = new SheetInfoImpl_1.SheetInfoImpl(worksheetName, Contract.SheetType.Worksheet, zoneSize);
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
/* 129 */
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
/* 130 */
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
/* 133 */
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
/* 134 */
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
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var DataSource_1 = __webpack_require__(62);
var DataSourceImpl_1 = __webpack_require__(63);
var SheetImpl_1 = __webpack_require__(61);
var SingleEventManagerImpl_1 = __webpack_require__(42);
var FilterChangedEvent_1 = __webpack_require__(137);
var MarksSelectedEvent_1 = __webpack_require__(138);
var GetDataService_1 = __webpack_require__(68);
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
/* 135 */
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
/* 136 */
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
/* 137 */
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
var Contract = __webpack_require__(0);
var TableauError_1 = __webpack_require__(4);
var TableauWorksheetEvent_1 = __webpack_require__(66);
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
/* 138 */
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
var Contract = __webpack_require__(0);
var TableauWorksheetEvent_1 = __webpack_require__(66);
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var CrossFrameDispatcher_1 = __webpack_require__(140);
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
/* 140 */
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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(7);
var DataSourceServiceImpl_1 = __webpack_require__(142);
var FilterServiceImpl_1 = __webpack_require__(143);
var GetDataServiceImpl_1 = __webpack_require__(145);
var NotificationServiceImpl_1 = __webpack_require__(146);
var ParametersServiceImpl_1 = __webpack_require__(147);
var SelectionServiceImpl_1 = __webpack_require__(151);
var ZoneServiceImpl_1 = __webpack_require__(153);
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
/* 142 */
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
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var TableauError_1 = __webpack_require__(4);
var Field_1 = __webpack_require__(65);
var FieldImpl_1 = __webpack_require__(64);
var DataSource_1 = __webpack_require__(62);
var DataSourceImpl_1 = __webpack_require__(63);
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
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.UnsupportedMethodForDataSourceType, "getActiveTables is not supported for: " + dataSourceId);
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
                throw new TableauError_1.TableauError(SharedApiExternalContract_1.ErrorCodes.InternalError, "Unable to find field with id '" + fieldId + "'");
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
/* 143 */
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
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ExternalToInternalEnumMappings_1 = __webpack_require__(69);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var FilterModels_1 = __webpack_require__(144);
var ServiceImplBase_1 = __webpack_require__(12);
var GetDataModels_1 = __webpack_require__(44);
var Param_1 = __webpack_require__(43);
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
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var GetDataModels_1 = __webpack_require__(44);
var GetDataService_1 = __webpack_require__(68);
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
/* 146 */
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
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var ParameterImpl_1 = __webpack_require__(148);
var Parameter_1 = __webpack_require__(150);
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var ParameterChangedEvent_1 = __webpack_require__(149);
var GetDataModels_1 = __webpack_require__(44);
var ServiceRegistry_1 = __webpack_require__(7);
var SingleEventManagerImpl_1 = __webpack_require__(42);
var ErrorHelpers_1 = __webpack_require__(8);
var Param_1 = __webpack_require__(43);
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
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var TableauError_1 = __webpack_require__(4);
var TableauSheetEvent_1 = __webpack_require__(67);
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
/* 150 */
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
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var SelectionModels_1 = __webpack_require__(152);
var ServiceImplBase_1 = __webpack_require__(12);
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
                throw new TableauError_1.TableauError(Contract.ErrorCodes.InternalError, 'tupleId parsing error');
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
var ErrorHelpers_1 = __webpack_require__(8);
var ExternalToInternalEnumMappings_1 = __webpack_require__(69);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var SharedApiExternalContract_1 = __webpack_require__(0);
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
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(zoneVisibilityMap[key], SharedApiExternalContract_1.ZoneVisibilityType);
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
/* 154 */
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
/* 155 */
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
        this._externalScriptVersion = ApiShared_1.VersionNumber.Instance;
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
    Object.defineProperty(Environment.prototype, "externalScriptVersion", {
        get: function () {
            return this._externalScriptVersion;
        },
        enumerable: true,
        configurable: true
    });
    return Environment;
}());
exports.Environment = Environment;


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
/* 158 */
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
var ExtensionsApiExternalContract_1 = __webpack_require__(15);
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
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.SettingsValues] = settings, _a);
        return this.execute(api_internal_contract_js_1.VerbId.SaveExtensionSettings, parameters).then(function (value) {
            var result = value.result;
            if (!result || !result.settingsValues) {
                throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, 'Unexpected error savings settings.');
            }
            return (result.settingsValues);
        });
    };
    return SettingsServiceImpl;
}(ApiShared_1.ServiceImplBase));
exports.SettingsServiceImpl = SettingsServiceImpl;


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
var ExtensionsApiExternalContract_1 = __webpack_require__(15);
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
var Contract = __webpack_require__(15);
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
/* 162 */
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(15);
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
/* 164 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGFhNjdkMmE5NWEyMzUzNTg2MzUiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9BcGlTaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZS50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRMaXN0ZW5lck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VUeXBlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FbnVtQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9QYXJhbS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvR2V0RGF0YU1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2hlZXQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVmVyc2lvbk51bWJlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1ZlcmJzLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZ3VpZC9ndWlkLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGF0YVNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0RhdGFTb3VyY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRmllbGRJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ZpZWxkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1V29ya3NoZWV0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVTaGVldEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL0dldERhdGFTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0VudW1NYXBwaW5ncy9FeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9hcnJheS9maW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0V4dGVybmFsQ29udHJhY3QvRW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL251bWJlci9pcy1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L0VudW1zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlL0ludGVybmFsQXBpRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9jb250cmFjdC9QYXJhbWV0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25UcmFuc2xhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZU1lc3Nlbmdlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VUeXBlQ2hlY2tzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGFzaGJvYXJkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmRPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEluZm9JbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NpemUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvV29ya3NoZWV0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvV29ya3NoZWV0SW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZVN1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvTWFya3NTZWxlY3RlZEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9EYXRhU291cmNlU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvRmlsdGVyTW9kZWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvTm90aWZpY2F0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9QYXJhbWV0ZXJzU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9QYXJhbWV0ZXJJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9QYXJhbWV0ZXJDaGFuZ2VkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvUGFyYW1ldGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VsZWN0aW9uU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL1NlbGVjdGlvbk1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1pvbmVTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1NldHRpbmdzU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvVUlTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9TZXR0aW5nc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvVUkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvVUlJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBLDZGQUE2Rjs7Ozs7QUFJN0YsbUNBQXlDOzs7Ozs7Ozs7QUNKekM7Ozs7R0FJRzs7Ozs7QUFFSCw4Q0FBOEM7QUFDOUMsd0JBQWtDO0FBQ2xDLHlCQUFzQztBQUV0QyxtQ0FBaUM7QUFDakMsbUNBQWtEO0FBRWxELG1DQUF5QztBQUN6QyxtQ0FBc0M7QUFDdEMsa0NBQWlDO0FBR2pDLG1DQUFxRDtBQUdyRCxpREFBaUQ7QUFFakQsbUNBQWdEO0FBR2hELGtDQUFtRDtB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WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsZ0NBQVE7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQUU7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBZSxHQUF0QixVQUF1QixvQkFBa0M7UUFDdkQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLEVBQVEsQ0FBQztJQUN0RixDQUFDO0lBRU0sMENBQXFCLEdBQTVCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBNUJZLGdDQUFVIiwiZmlsZSI6InRhYmxlYXUuZXh0ZW5zaW9ucy4xLjEuMC0zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QtZXh0ZW5zaW9ucy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3MCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGFhNjdkMmE5NWEyMzUzNTg2MzUiLCIvLyBUaGlzIGZpbGUgcmUtZXhwb3J0cyBldmVyeXRoaW5nIHdoaWNoIGlzIHBhcnQgb2YgdGhlIHNoYXJlZCBlbWJlZGRpbmcgYXBpIHB1YmxpYyBpbnRlcmZhY2VcblxuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0RhdGFTb3VyY2VJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9EYXRhVGFibGVJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9FbnVtcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRXZlbnRJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9GaWx0ZXJJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TZWxlY3Rpb25JbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9QYXJhbWV0ZXJJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TZWxlY3Rpb25JbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TaGVldEludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L1RhYmxlYXVFcnJvcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QudHMiLCIvKipcbiAqIFRoaXMgaXMgeW91ciBtYWluLiBUaGlzIGlzIHdoZXJlIHlvdSByZS1leHBvcnQgZXZlcnl0aGluZyB5b3Ugd2FudCB0byBiZSBwdWJsaWNseSBhdmFpbGFibGUuXG4gKlxuICogVGhlIGJ1aWxkIGVuZm9yY2VzIHRoYXQgdGhlIGZpbGUgaGFzIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGdsb2JhbCB2YXJpYWJsZSB0aGF0IGlzIGV4cG9ydGVkLlxuICovXG5cbi8vIFRoZSBmb2xsb3dpbmcgcG9seWZpbGxzIGFyZSBuZWVkZWQgZm9yIElFMTFcbmltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJztcbmltcG9ydCAnY29yZS1qcy9mbi9udW1iZXIvaXMtaW50ZWdlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvRW51bXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvTW9kZWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvTm90aWZpY2F0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L1BhcmFtZXRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9WZXJicyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZS9Jbml0aWFsaXphdGlvbk9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvVmVyc2lvbk51bWJlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb25pbmcvVmVyc2lvbkNvbnZlcnRlckZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcblxuLy8gVGhlc2UgYXJlIHRoZSBleHBvcnRzIGZyb20gdGhlIG1lc3NhZ2luZyBzdHVmZlxuXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlRGlzcGF0Y2hlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZUxpc3RlbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3Nlbmdlcic7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcblxuLy8gRXhwb3J0IGEgaGFyZGNvZGVkIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0LiBUaGlzIHNob3VsZCBtYXRjaCB3aGF0J3MgaW4gcGFja2FnZS5qc29uLlxuLy8gTm9ybWFsbHksIHdlJ2QgdXNlIHNvbWUgc29ydCBvZiB3ZWJwYWNrIHJlcGxhY2VtZW50IHRvIGluamVjdCB0aGlzIGludG8gY29kZSwgYnV0IHRoYXQgZG9lc24ndFxuLy8gd29yayB3aXRoIHRoZSBtb2R1bGUtZGV2LXNjcmlwdHMgYW5kIHRoaXMgaXNuJ3QgdG9vIG11Y2ggd29yay5cbi8vIElmIHlvdSBmb3JnZXQgdG8ga2VlcCB0aGlzIGluIHN5bmMgd2l0aCBwYWNrYWdlLmpzb24sIGEgdGVzdCB3aWxsIGZhaWwgc28gd2Ugc2hvdWxkIGJlIG9rLlxuZXhwb3J0IGNvbnN0IElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04gPSB7XG4gIG1ham9yOiAxLFxuICBtaW5vcjogOSxcbiAgZml4OiAwXG59O1xuXG4vLyBFeHBvcnQgdGhlIHZlcnNpb24gbnVtYmVyIG9mIG1lc3NhZ2luZyBmb3IgY29uc3VtZXJzIHRvIHVzZS5cbi8vIEJlIHZlcnkgY2FyZWZ1bCBtYWtpbmcgYW55IHVwZGF0ZXMgdG8gdGhpcyBjb250cmFjdCB3aGljaCBicmVhayB2ZXJzaW9uIGNvbXBhdGliaWxpdHkuXG5leHBvcnQgY29uc3QgTUVTU0FHSU5HX1ZFUlNJT04gPSB7XG4gIG1ham9yOiAxLFxuICBtaW5vcjogMCxcbiAgZml4OiAwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9Kc0FwaUludGVybmFsQ29udHJhY3QudHMiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEN1c3RvbSBlcnJvciBjbGFzcyB0aGF0IGV4dGVuZHMgdGhlIGRlZmF1bHQgSmF2YVNjcmlwdCBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGFsbG93cyB1cyB0byBwcm92aWRlIGEgZmllbGQgd2l0aCBhIHNwZWNpZmljIGVycm9yIGNvZGVcbiAqIHNvIHRoYXQgZGV2ZWxvcGVycyBjYW4gbW9yZSBlYXNpbHkgcHJvZ3JhbW1hdGljYWxseSByZXNwb25kXG4gKiB0byBlcnJvciBzY2VuYXJpb3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZWF1RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lcnJvckNvZGU6IENvbnRyYWN0LkVycm9yQ29kZXMsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKGAke19lcnJvckNvZGV9OiAke21lc3NhZ2V9YCk7XG5cbiAgICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXG4gICAgLy8gRXJyb3IgaW5oZXJpdGFuY2UgZG9lcyBub3Qgd29yayBwcm9wZXJ0bHkgd2hlbiBjb21waWxpbmcgdG8gRVM1LCB0aGlzIGlzIGEgd29ya2Fyb3VuZCB0byBmb3JjZVxuICAgIC8vIHRoZSBwcm90byBjaGFpbiB0byBiZSBidWlsdCBjb3JyZWN0bHkuICBTZWUgdGhlIGdpdGh1YiBsaW5rIGFib3ZlIGZvciBkZXRhaWxzLlxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBUYWJsZWF1RXJyb3IucHJvdG90eXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3JDb2RlKCk6IENvbnRyYWN0LkVycm9yQ29kZXMge1xuICAgIHJldHVybiB0aGlzLl9lcnJvckNvZGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlYXVFcnJvci50cyIsIi8vIEV4cG9ydCBldmVyeXRoaW5nIHdoaWNoIGhhZCBiZWVuIHByZXZpb3VzbHkgaW4gdGhlIGFwaS1zaGFyZWQgbW9kdWxlXG5cbmV4cG9ydCB7IERhc2hib2FyZCB9IGZyb20gJy4vQXBpU2hhcmVkL0Rhc2hib2FyZCc7XG5leHBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyJztcbmV4cG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4vQXBpU2hhcmVkL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5leHBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3InO1xuZXhwb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4vQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXInO1xuXG5leHBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmV4cG9ydCB7IFRhYmxlYXVFdmVudCB9IGZyb20gJy4vQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQnO1xuZXhwb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5leHBvcnQgeyBEYXNoYm9hcmRJbXBsIH0gZnJvbSAnLi9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsJztcbmV4cG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlJztcbmV4cG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4vQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcCc7XG5leHBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvTm90aWZpY2F0aW9uU2VydmljZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvQXBpU2hhcmVkLnRzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBhbiBhcGkgc2VydmljZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwaVNlcnZpY2Uge1xuICAvKipcbiAgICogR2V0cyB0aGUgbmFtZSBmb3IgdGhpcyBzZXJ2aWNlLlxuICAgKi9cbiAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIHNlcnZpY2UgbmFtZSB3aGljaCB3aWxsIGJlIHJlZ2lzdGVyZWQgaW4gdGhlIGFwaS1zaGFyZWQgcHJvamVjdFxuICovXG5leHBvcnQgY29uc3QgZW51bSBTZXJ2aWNlTmFtZXMge1xuICBEYXRhU291cmNlU2VydmljZSA9ICdkYXRhLXNvdXJjZS1zZXJ2aWNlJyxcbiAgR2V0RGF0YSA9ICdnZXQtZGF0YS1zZXJ2aWNlJyxcbiAgRmlsdGVyID0gJ2ZpbHRlci1zZXJ2aWNlJyxcbiAgTm90aWZpY2F0aW9uID0gJ25vdGlmaWNhdGlvbi1zZXJ2aWNlJyxcbiAgUGFyYW1ldGVycyA9ICdwYXJhbWV0ZXJzLXNlcnZpY2UnLFxuICBTZWxlY3Rpb24gPSAnc2VsZWN0aW9uLXNlcnZpY2UnLFxuICBab25lID0gJ3pvbmUtc2VydmljZSdcbn1cblxuLyoqXG4gKiBEbyBzb21lIGdsb2JhYmwgZGVjbGFyYXRpb25zIHNvIHdlIGNhbiBjcmVhdGUgYSBzaW5nbGV0b24gb24gdGhlIHdpbmRvdyBvYmplY3RcbiAqL1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5OiBTZXJ2aWNlUmVnaXN0cnkgfCB1bmRlZmluZWQ7IH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlUmVnaXN0cnkge1xuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgbmV3IHNlcnZpY2UgaW50byB0aGUgc2VydmljZSByZWdpc3RyeS4gQW55IGV4aXN0aW5nIG9uZSB3aWxsXG4gICAqIGJlIG92ZXJ3cml0dGVuLiB0aGUgc2VydmljZSBpcyByZWdpc3RlcmVkIHVuZGVyIHNlcnZpY2Uuc2VydmljZU5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtBcGlTZXJ2aWNlfSBzZXJ2aWNlIFRoZSBzZXJ2aXZlIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlclNlcnZpY2Uoc2VydmljZTogQXBpU2VydmljZSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZ2l2ZW4gc2VydmljZSBmcm9tIHRoZSByZWdpc3RyeS4gSWYgdGhlcmUgaXMgbm90IGFcbiAgICogc2VydmljZSByZWdpc3RlcmVkIHVuZGVyIHRoYXQgbmFtZSwgdGhyb3dzIGFuZCBlcnJvclxuICAgKlxuICAgKiBAdGVtcGxhdGUgVCBUaGUgdHlwZSBvZiB0aGUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UuXG4gICAqIEByZXR1cm5zIHtUfSBUaGUgcmVxdWVzdGVkIHNlcnZpY2VcbiAgICovXG4gIGdldFNlcnZpY2U8VCBleHRlbmRzIEFwaVNlcnZpY2U+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUO1xufVxuXG5jbGFzcyBTZXJ2aWNlUmVnaXN0cnlJbXBsIGltcGxlbWVudHMgU2VydmljZVJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSBfc2VydmljZXM6IHsgW3NlcnZpY2VOYW1lOiBzdHJpbmddOiBBcGlTZXJ2aWNlOyB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlcyA9IHt9O1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyU2VydmljZShzZXJ2aWNlOiBBcGlTZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5fc2VydmljZXNbc2VydmljZS5zZXJ2aWNlTmFtZV0gPSBzZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIGdldFNlcnZpY2U8VCBleHRlbmRzIEFwaVNlcnZpY2U+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMuX3NlcnZpY2VzLmhhc093blByb3BlcnR5KHNlcnZpY2VOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBTZXJ2aWNlIG5vdCByZWdpc3RlcmVkOiAke3NlcnZpY2VOYW1lfWApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlc1tzZXJ2aWNlTmFtZV0gYXMgVDtcbiAgfVxufVxuXG4vKipcbiAqIHN0YXRpYyBjbGFzcyB1c2VkIGZvciBnZXR0aW5nIGFjY2VzcyB0byB0aGUgc2luZ2xlIGluc3RhbmNlXG4gKiBvZiB0aGUgQXBpU2VydmljZVJlZ2lzdHJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlUmVnaXN0cnkge1xuICAvKipcbiAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBTZXJ2aWNlUmVnaXN0cnlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFNlcnZpY2VSZWdpc3RyeSB7XG4gICAgaWYgKCF3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgICBBcGlTZXJ2aWNlUmVnaXN0cnkuc2V0SW5zdGFuY2UobmV3IFNlcnZpY2VSZWdpc3RyeUltcGwoKSk7XG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1NlcnZpY2UgcmVnaXN0cnkgZmFpbGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBvdmVycmlkZSB0aGUgcmVnaXN0cnkgaW5zdGFuY2UuIENhbiBiZSB1c2VkIGJ5IHVuaXQgdGVzdHNcbiAgICpcbiAgICogQHBhcmFtIHtTZXJ2aWNlUmVnaXN0cnl9IHNlcnZpY2VSZWdpc3RyeSBUaGUgbmV3IHJlZ2lzdHJ5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKHNlcnZpY2VSZWdpc3RyeT86IFNlcnZpY2VSZWdpc3RyeSk6IHZvaWQge1xuICAgIHdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkgPSBzZXJ2aWNlUmVnaXN0cnk7XG4gIH1cblxuICAvLyBQcml2YXRlIHRvIGF2b2lkIGFueW9uZSBjb25zdHJ1Y3RpbmcgdGhpc1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnkudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFBhcmFtIH0gZnJvbSAnLi9QYXJhbSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBEYXNoYm9hcmRPYmplY3QgfSBmcm9tICcuLi9EYXNoYm9hcmRPYmplY3QnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb25zdHJ1Y3QgY29tbW9uIGVycm9ycyB0aHJvdWdob3V0IHRoZSBleHRlcm5hbFxuICogcHJvamVjdHMgKGFwaS1zaGFyZWQsIGV4dGVuc2lvbnMtYXBpLCBldGMuKS4gIEl0IGhhcyBzb21lIGR1cGxpY2F0aW9uIHdpdGhcbiAqIHRoZSBFcnJvckhlbHBlcnMgY2xhc3MgaW4gYXBpLWNvcmUsIGJ1dCBpcyBzZXBhcmF0ZSBkdWUgdG8gdGhlIG5lZWQgdG8gdGhyb3dcbiAqIGFuIGV4dGVybmFsIFRhYmxlYXVFcnJvciB2cy4gYW4gSW50ZXJuYWxUYWJsZWF1RXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckhlbHBlcnMge1xuICAvKipcbiAgICogVGhyb3dzIHdpdGggY29kZSBJbnRlcm5hbEVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gYXBpTmFtZSBuYW1lIG9mIGFwaSB0aGF0IHdhcyBjYWxsZWQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwaU5vdEltcGxlbWVudGVkKGFwaU5hbWU6IHN0cmluZyk6IFRhYmxlYXVFcnJvciB7XG4gICAgcmV0dXJuIG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgJHthcGlOYW1lfSBBUEkgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gaW50ZXJuYWwgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeUludGVybmFsVmFsdWUoYXJndW1lbnRWYWx1ZTogYW55LCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeVBhcmFtZXRlcihhcmd1bWVudFZhbHVlOiBhbnksIGFyZ3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZ3VtZW50VmFsdWUgPT09IG51bGwgfHwgYXJndW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgYCR7YXJndW1lbnRWYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgcGFyYW10ZXI6ICR7YXJndW1lbnROYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gSW52YWxpZFBhcmFtZXRlciBlcnJvciBpZiBhcmd1bWVudCBpcyBlbXB0eSBzdHJpbmcsIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYXJndW1lbnRWYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGFyZ3VtZW50TmFtZSBuYW1lIG9mIGFyZ3VtZW50IHRvIHZlcmlmeVxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlTdHJpbmdQYXJhbWV0ZXIoYXJndW1lbnRWYWx1ZTogc3RyaW5nLCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBhcmd1bWVudFZhbHVlID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yIHBhcmFtdGVyOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgcGFzc2VkIHZhbHVlIGlzIGEgdmFsaWQgdmFsdWUgZm9yIHRoYXQgZW51bS5cbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgdGhlIGVudW0gdmFsdWUgaXMgbm90IHZhbGlkLlxuICAgKlxuICAgKiBTdHJpbmcgZW51bXMgYXJlIHtzdHJpbmcgOiBzdHJpbmd9IGRpY3Rpb25hcmllcyB3aGljaCBhcmUgbm90IHJldmVyc2UgbWFwcGFibGVcbiAgICogVGhpcyBpcyBhbiB1Z2x5IHdvcmthcm91bmRcbiAgICpcbiAgICogQHBhcmFtIGVudW1WYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGVudW1UeXBlIGVudW0gdG8gdmVyaWZ5IGFnYWluc3RcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5RW51bVZhbHVlPEVudW1UeXBlPihlbnVtVmFsdWU6IEVudW1UeXBlLCBlbnVtVHlwZTogYW55KSB7XG4gICAgbGV0IGlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZm9yRWFjaCgoZW51bUtleSkgPT4ge1xuICAgICAgaWYgKGVudW1UeXBlW2VudW1LZXldID09PSBlbnVtVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2VudW1WYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgZW51bTogJHtlbnVtVHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIHBhcmFtcyBtaW4gYW5kIG1heCBmb3IgYXBwbHlpbmcgcmFuZ2UgZmlsdGVyLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICpcbiAgICogQHBhcmFtIG1pbiByYW5nZSBtaW5cbiAgICogQHBhcmFtIG1heCByYW5nZSBtYXhcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5UmFuZ2VQYXJhbVR5cGUobWluOiBhbnksIG1heDogYW55KTogdm9pZCB7XG4gICAgaWYgKCFtaW4gJiYgIW1heCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIGF0IGxlYXN0IG9uZSBvZiBtaW4gb3IgbWF4IGlzIHJlcXVpcmVkLicpO1xuICAgIH1cblxuICAgIGlmIChtaW4gJiYgIVBhcmFtLmlzVHlwZU51bWJlcihtaW4pICYmICFQYXJhbS5pc1R5cGVEYXRlKG1pbikpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBvbmx5IERhdGUgYW5kIG51bWJlciBhcmUgYWxsb3dlZCBmb3IgcGFyYW1ldGVyIG1pbi4nKTtcbiAgICB9XG5cbiAgICBpZiAobWF4ICYmICFQYXJhbS5pc1R5cGVOdW1iZXIobWF4KSAmJiAhUGFyYW0uaXNUeXBlRGF0ZShtYXgpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgb25seSBEYXRlIGFuZCBudW1iZXIgYXJlIGFsbG93ZWQgZm9yIHBhcmFtZXRlciBtYXguJyk7XG4gICAgfVxuXG4gICAgaWYgKG1pbiAmJiBtYXggJiYgdHlwZW9mIChtaW4pICE9PSB0eXBlb2YgKG1heCkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IHNob3VsZCBiZSBvZiB0aGUgc2FtZSB0eXBlLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IHRoZSB6b25lSWQgaXMgcHJlc2VudCBpbiB0aGUgY3VycmVudCBkYXNoYm9hcmQgYW5kIGlzIEZsb2F0aW5nLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgZWl0aGVyIGNvbmRpdGlvbiBpcyBmYWxzZS5cbiAgICpcbiAgICogQHBhcmFtIGRhc2hib2FyZE9iamVjdHMgQW4gYXJyYXkgb2YgYWxsIERhc2hib2FyZE9iamVjdHMgaW4gdGhlIGN1cnJlbnQgZGFzaGJvYXJkXG4gICAqIEBwYXJhbSB6b25lSUQgWm9uZUlkIHRvIGJlIHZhbGlkYXRlZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlab25lSXNWYWxpZChkYXNoYm9hcmRPYmplY3RzOiBBcnJheTxEYXNoYm9hcmRPYmplY3Q+LCB6b25lSUQ6IG51bWJlcik6IHZvaWQge1xuXG4gICAgbGV0IGlzVmFsaWQgPSBkYXNoYm9hcmRPYmplY3RzLnNvbWUoKGRhc2hib2FyZE9iamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIGRhc2hib2FyZE9iamVjdC5pZCA9PT0gem9uZUlEICYmIGRhc2hib2FyZE9iamVjdC5pc0Zsb2F0aW5nO1xuICAgIH0pO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgYFVuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgWm9uZSBJZDogJHt6b25lSUR9IGlzIGVpdGhlciBub3QgcHJlc2VudCBvciBpcyBhIGZpeGVkIHpvbmUuYCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FcnJvckhlbHBlcnMudHMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXhlY3V0ZVJlc3BvbnNlLFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXIsXG4gIEludGVybmFsVGFibGVhdUVycm9yLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgU2hvdWxkVGhyb3cgfSBmcm9tICcuLi8uLi9VdGlscy9FbnVtQ29udmVydGVyJztcblxuLyoqXG4gKiBFYWNoIFNlcnZjZUltcGwgc2hvdWxkIGV4dGVuZCB0aGlzIGJhc2UgY2xhc3MgZm9yIHRoZSBzYWtlIG9mXG4gKiBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuICBUaGlzIGJhc2UgaGFuZGxlcyB0aGUgY29udmVyc2lvblxuICogZnJvbSBpbnRlcm5hbCBlcnJvcnMgdG8gZXh0ZXJuYWwgZXJyb3JzIHRoYXQgd2UgdGhyb3cgdG8gZGV2ZWxvcGVyc1xuICovXG5leHBvcnQgY2xhc3MgU2VydmljZUltcGxCYXNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikgeyB9XG5cbiAgcHJvdGVjdGVkIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcblxuICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaGVyLmV4ZWN1dGUodmVyYiwgcGFyYW1zKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIEFueSBpbnRlcm5hbCBlcnJvciB0aGF0IGNvbWVzIGZyb20gdGhlIGRpc3BhdGNoZXIgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICAgICAgLy8gdG8gYW4gZXh0ZXJuYWwgZXJyb3IgdXNpbmcgdGhlIGVudW0gbWFwcGVyIGZvciBlcnJvciBjb2Rlcy5cbiAgICAgIGNvbnN0IGludGVybmFsRXJyb3IgPSBlcnJvciBhcyBJbnRlcm5hbFRhYmxlYXVFcnJvcjtcbiAgICAgIGNvbnN0IGV4dGVybmFsRXJyb3JDb2RlOiBFcnJvckNvZGVzID0gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmVycm9yQ29kZS5jb252ZXJ0KGludGVybmFsRXJyb3IuZXJyb3JDb2RlLCBTaG91bGRUaHJvdy5Obyk7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKGV4dGVybmFsRXJyb3JDb2RlLCBpbnRlcm5hbEVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZS50cyIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XG4gIENvbHVtblR5cGUgYXMgRXh0ZXJuYWxDb2x1bW5UeXBlLFxuICBEYXNoYm9hcmRPYmplY3RUeXBlIGFzIEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRGF0YVR5cGUgYXMgRXh0ZXJuYWxEYXRhVHlwZSxcbiAgRGF0ZVJhbmdlVHlwZSBhcyBFeHRlcm5hbERhdGVSYW5nZVR5cGUsXG4gIEVycm9yQ29kZXMgYXMgRXh0ZXJuYWxFcnJvckNvZGVzLFxuICBFeHRlbnNpb25Db250ZXh0IGFzIEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQsXG4gIEV4dGVuc2lvbk1vZGUgYXMgRXh0ZXJuYWxFeHRlbnNpb25zTW9kZSxcbiAgRmllbGRBZ2dyZWdhdGlvblR5cGUgYXMgRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZSxcbiAgRmllbGRSb2xlVHlwZSBhcyBFeHRlcm5hbEZpZWxkUm9sZVR5cGUsXG4gIEZpbHRlclR5cGUgYXMgRXh0ZXJuYWxGaWx0ZXJUeXBlLFxuICBGaWx0ZXJVcGRhdGVUeXBlIGFzIEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZSxcbiAgUGFyYW1ldGVyVmFsdWVUeXBlIGFzIEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLFxuICBQZXJpb2RUeXBlIGFzIEV4dGVybmFsRGF0ZVBlcmlvZCxcbiAgU2hlZXRUeXBlIGFzIEV4dGVybmFsU2hlZXRUeXBlLFxufSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgQ29sdW1uVHlwZSBhcyBJbnRlcm5hbENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUgYXMgSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLFxuICBEYXRhVHlwZSBhcyBJbnRlcm5hbERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlIGFzIEludGVybmFsRGF0ZVJhbmdlVHlwZSxcbiAgRGF0ZVN0ZXBQZXJpb2QgYXMgSW50ZXJuYWxEYXRlU3RlcFBlcmlvZCxcbiAgRG9tYWluUmVzdHJpY3Rpb25UeXBlIGFzIEludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLFxuICBFcnJvckNvZGVzIGFzIEludGVybmFsRXJyb3JDb2RlcyxcbiAgRXh0ZW5zaW9uQ29udGV4dCBhcyBJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LFxuICBFeHRlbnNpb25Nb2RlIGFzIEludGVybmFsRXh0ZW5zaW9uc01vZGUsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlIGFzIEludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUgYXMgSW50ZXJuYWxGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJUeXBlIGFzIEludGVybmFsRmlsdGVyVHlwZSxcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFNoZWV0VHlwZSBhcyBJbnRlcm5hbFNoZWV0VHlwZSxcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRW51bUNvbnZlcnRlciB9IGZyb20gJy4uL1V0aWxzL0VudW1Db252ZXJ0ZXInO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTp0eXBlZGVmIC0gRGlzYWJsZSB0aGlzIHRvIG1ha2UgZGVjbGFyaW5nIHRoZXNlIGNsYXNzZXMgYSBiaXQgZWFzaWVyICovXG4vKipcbiAqIE1hcHMgZW51bXMgdXNlZCBieSB0aGUgaW50ZXJuYWwtYXBpLWNvbnRyYWN0IHRvIHRoZSBlbnVtcyB1c2VkXG4gKiBpbiB0aGUgZXh0ZXJuYWwtYXBpLWNvbnRyYWN0LCB3aGljaCBkZXZlbG9wZXJzIGNvZGUgYWdhaW5zdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB7XG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5zaW9uQ29udGV4dCA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQsIEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQ+KHtcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5EZXNrdG9wXTogRXh0ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5EZXNrdG9wLFxuICAgIFtJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LlNlcnZlcl06IEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuU2VydmVyXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5zaW9uTW9kZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXh0ZW5zaW9uc01vZGUsIEV4dGVybmFsRXh0ZW5zaW9uc01vZGU+KHtcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zTW9kZS5BdXRob3JpbmddOiBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlLkF1dGhvcmluZyxcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zTW9kZS5WaWV3aW5nXTogRXh0ZXJuYWxFeHRlbnNpb25zTW9kZS5WaWV3aW5nXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgY29sdW1uVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsQ29sdW1uVHlwZSwgRXh0ZXJuYWxDb2x1bW5UeXBlPih7XG4gICAgW0ludGVybmFsQ29sdW1uVHlwZS5Db250aW51b3VzXTogRXh0ZXJuYWxDb2x1bW5UeXBlLkNvbnRpbnVvdXMsXG4gICAgW0ludGVybmFsQ29sdW1uVHlwZS5EaXNjcmV0ZV06IEV4dGVybmFsQ29sdW1uVHlwZS5EaXNjcmV0ZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpZWxkQWdncmVnYXRpb25UeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZSwgRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF0dHJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF0dHIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXZnXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdmcsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50ZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQ291bnRkLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkRheV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRGF5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkVuZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuRW5kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkhvdXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkhvdXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuSW5PdXRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkluT3V0LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkt1cnRvc2lzXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5LdXJ0b3NpcyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NYXhdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1heCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZHldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1keSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZWRpYW5dOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1lZGlhbixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW5dOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW51dGVdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1pbnV0ZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Nb250aFllYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLk1vbnRoWWVhcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ob25lXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ob25lLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF0cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXRyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQxLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0M106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuUXVhcnQzLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNlY29uZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2Vjb25kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNrZXduZXNzXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ta2V3bmVzcyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXYsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZwXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdGRldnAsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3VtXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TdW0sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNEYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jRGF5LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jSG91cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNIb3VyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jTWludXRlXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01pbnV0ZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01vbnRoXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01vbnRoLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jUXRyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1F0cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1NlY29uZF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNTZWNvbmQsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNXZWVrXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1dlZWssXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1llYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVXNlcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVXNlcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlZhcixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJwXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXJwLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWssXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2Vla2RheV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuV2Vla2RheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5ZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5ZZWFyLFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGZpZWxkUm9sZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpZWxkUm9sZVR5cGUsIEV4dGVybmFsRmllbGRSb2xlVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpZWxkUm9sZVR5cGUuRGltZW5zaW9uXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLkRpbWVuc2lvbixcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLk1lYXN1cmVdOiBFeHRlcm5hbEZpZWxkUm9sZVR5cGUuTWVhc3VyZSxcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLlVua25vd25dOiBFeHRlcm5hbEZpZWxkUm9sZVR5cGUuVW5rbm93bixcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBzaGVldFR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbFNoZWV0VHlwZSwgRXh0ZXJuYWxTaGVldFR5cGU+KHtcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuRGFzaGJvYXJkXTogRXh0ZXJuYWxTaGVldFR5cGUuRGFzaGJvYXJkLFxuICAgIFtJbnRlcm5hbFNoZWV0VHlwZS5TdG9yeV06IEV4dGVybmFsU2hlZXRUeXBlLlN0b3J5LFxuICAgIFtJbnRlcm5hbFNoZWV0VHlwZS5Xb3Jrc2hlZXRdOiBFeHRlcm5hbFNoZWV0VHlwZS5Xb3Jrc2hlZXRcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBkYXNoYm9hcmRPYmplY3RUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLCBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGU+KHtcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkV4dGVuc2lvbl06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5FeHRlbnNpb24sXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5CbGFua106IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5CbGFuayxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkltYWdlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkltYWdlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuTGVnZW5kXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkxlZ2VuZCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhZ2VGaWx0ZXJdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFnZUZpbHRlcixcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhcmFtZXRlckNvbnRyb2xdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuUGFyYW1ldGVyQ29udHJvbCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlF1aWNrRmlsdGVyXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlF1aWNrRmlsdGVyLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGV4dF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5UZXh0LFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGl0bGVdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGl0bGUsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5XZWJQYWdlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldlYlBhZ2UsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5Xb3Jrc2hlZXRdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0XG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0YVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGFUeXBlLCBFeHRlcm5hbERhdGFUeXBlPih7XG4gICAgW0ludGVybmFsRGF0YVR5cGUuQm9vbF06IEV4dGVybmFsRGF0YVR5cGUuQm9vbCxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5EYXRlXTogRXh0ZXJuYWxEYXRhVHlwZS5EYXRlLFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkRhdGVUaW1lXTogRXh0ZXJuYWxEYXRhVHlwZS5EYXRlVGltZSxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5GbG9hdF06IEV4dGVybmFsRGF0YVR5cGUuRmxvYXQsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuSW50XTogRXh0ZXJuYWxEYXRhVHlwZS5JbnQsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuU3RyaW5nXTogRXh0ZXJuYWxEYXRhVHlwZS5TdHJpbmdcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJVcGRhdGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLCBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZF06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGQsXG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGxdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsLFxuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZSxcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGFsbG93YWJsZVZhbHVlcyA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLCBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZT4oe1xuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5BbGxdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5BbGwsXG4gICAgW0ludGVybmFsRG9tYWluUmVzdHJpY3Rpb25UeXBlLkxpc3RdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5MaXN0LFxuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5SYW5nZV06IEV4dGVybmFsUGFyYW1ldGVyVmFsdWVUeXBlLlJhbmdlXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0ZVN0ZXBQZXJpb2QgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGVTdGVwUGVyaW9kLCBFeHRlcm5hbERhdGVQZXJpb2Q+KHtcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5ZZWFyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5ZZWFycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5RdWFydGVyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5RdWFydGVycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5Nb250aHNdOiBFeHRlcm5hbERhdGVQZXJpb2QuTW9udGhzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLldlZWtzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLldlZWtzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLkRheXNdOiBFeHRlcm5hbERhdGVQZXJpb2QuRGF5cyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5Ib3Vyc106IEV4dGVybmFsRGF0ZVBlcmlvZC5Ib3VycyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5NaW51dGVzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLk1pbnV0ZXMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuU2Vjb25kc106IEV4dGVybmFsRGF0ZVBlcmlvZC5TZWNvbmRzXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGF0ZVJhbmdlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGF0ZVJhbmdlVHlwZSwgRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlPih7XG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5DdXJyZW50XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLkN1cnJlbnQsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLkxhc3QsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0Tl06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0TixcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHRdOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTmV4dCxcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHROXTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHROLFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuVG9EYXRlXTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLlRvRGF0ZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGVycm9yQ29kZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRXJyb3JDb2RlcywgRXh0ZXJuYWxFcnJvckNvZGVzPih7XG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5JTklUSUFMSVpBVElPTl9FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuSU5URVJOQUxfRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLk1JU1NJTkdfRU5VTV9NQVBQSU5HXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5NSVNTSU5HX1BBUkFNRVRFUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuUEVSTUlTU0lPTl9ERU5JRURdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlBSRVNfTU9ERUxfUEFSU0lOR19FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuVU5LTk9XTl9WRVJCX0lEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5WRVJTSU9OX05PVF9DT05GSUdVUkVEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkFQSU5vdEluaXRpYWxpemVkLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuVklTSUJJTElUWV9FUlJPUl06IEV4dGVybmFsRXJyb3JDb2Rlcy5WaXNpYmlsaXR5RXJyb3IsXG4gIH0sIEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yKTtcblxuICBwdWJsaWMgc3RhdGljIGZpbHRlclR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEZpbHRlclR5cGUsIEV4dGVybmFsRmlsdGVyVHlwZT4oe1xuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuQ2F0ZWdvcmljYWxdOiBFeHRlcm5hbEZpbHRlclR5cGUuQ2F0ZWdvcmljYWwsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5SYW5nZV06IEV4dGVybmFsRmlsdGVyVHlwZS5SYW5nZSxcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZV06IEV4dGVybmFsRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGUsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5IaWVyYXJjaGljYWxdOiBFeHRlcm5hbEZpbHRlclR5cGUuSGllcmFyY2hpY2FsXG4gIH0pO1xufVxuLyogdHNsaW50OmVuYWJsZTp0eXBlZGVmICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLnRzIiwiLy8gVGhpcyBmaWxlIHJlLWV4cG9ydHMgZXZlcnl0aGluZyB3aGljaCBpcyBwYXJ0IG9mIHRoZSBleHRlbnNpb25zIGFwaSBwdWJsaWMgaW50ZXJmYWNlXG5cbi8vIEV4cG9ydCBldmVyeXRoaW5nIGZyb20gdGhlIHNoYXJlZCBmaWxlXG5leHBvcnQgKiBmcm9tICcuL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vLyBFeHBvcnQgdGhlIG5hbWVzcGFjZXMgd2hpY2ggYXJlIHNwZWNpZmljIHRvIGV4dGVuc2lvbnNcbmV4cG9ydCB7IEV4dGVuc2lvbnMgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9FeHRlbnNpb25zJztcbmV4cG9ydCB7IERhc2hib2FyZENvbnRlbnQgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50JztcbmV4cG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRW52aXJvbm1lbnQnO1xuZXhwb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9TZXR0aW5ncyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9VSSc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvTmFtZXNwYWNlcy9UYWJsZWF1JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QudHMiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIENsYXNzIGRlc2lnbmVkIHRvIHJlZ2lzdGVyIGFuZCB1bnJlZ2lzdGVyIGhhbmRsZXJzIGZyb20gYSB1c2VyLiBPbmx5IHRob3NlIGV2ZW50c1xuICogd2hpY2ggYXJlIGFkZGVkIHZpYSBBZGROZXdFdmVudFR5cGUgd2lsbCBiZSBzdXBwb3J0ZWQgYnkgdGhpcyBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5FdmVudExpc3RlbmVyTWFuYWdlciB7XG4gIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJNYW5hZ2VyczogeyBbdGFibGVhdUV2ZW50VHlwZTogc3RyaW5nXTogU2luZ2xlRXZlbnRNYW5hZ2VyOyB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnMgPSB7fTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSxcbiAgICBoYW5kbGVyOiBDb250cmFjdC5UYWJsZWF1RXZlbnRIYW5kbGVyRm4pOiBDb250cmFjdC5UYWJsZWF1RXZlbnRVbnJlZ2lzdGVyRm4ge1xuICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzLmhhc093blByb3BlcnR5KGV2ZW50VHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5VbnN1cHBvcnRlZEV2ZW50TmFtZSwgYENhbm5vdCBhZGQgZXZlbnQsIHVuc3VwcG9ydGVkIGV2ZW50IHR5cGU6ICR7ZXZlbnRUeXBlfWApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnNbZXZlbnRUeXBlXS5hZGRFdmVudExpc3RlbmVyKGhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBoYW5kbGVyOiBDb250cmFjdC5UYWJsZWF1RXZlbnRIYW5kbGVyRm4pOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vycy5oYXNPd25Qcm9wZXJ0eShldmVudFR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuVW5zdXBwb3J0ZWRFdmVudE5hbWUsIGBDYW5ub3QgcmVtb3ZlIGV2ZW50LCB1bnN1cHBvcnRlZCBldmVudCB0eXBlOiAke2V2ZW50VHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50VHlwZV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGROZXdFdmVudFR5cGUoZXZlbnRNYW5hZ2VyOiBTaW5nbGVFdmVudE1hbmFnZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnNbZXZlbnRNYW5hZ2VyLmV2ZW50VHlwZV0gPSBldmVudE1hbmFnZXI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyLnRzIiwiaW1wb3J0IHsgVmVyc2lvbk51bWJlciwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgTW9kZWwsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IEluaXRpYWxpemF0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Jbml0aWFsaXphdGlvbk9wdGlvbnMnO1xuXG4vKipcbiAqIEVudW0gZGVmaW5pbmcgdGhlIDQgZGlmZmVyZW50IHR5cGVzIG9mIG1lc3NhZ2VzIHdlIGhhdmUgZGVmaW5lZFxuICovXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gIEluaXRpYWxpemUgPSAnaW5pdGlhbGl6ZScsXG4gIE5vdGlmaWNhdGlvbiA9ICdub3RpZmljYXRpb24nLFxuICBDb21tYW5kID0gJ2NvbW1hbmQnLFxuICBDb21tYW5kUmVzcG9uc2UgPSAnY29tbWFuZC1yZXNwb25zZSdcbn1cblxuLyoqXG4gKiBUaGUgTWVzc2FnZSBpbnRlcmZhY2UgaXMgdGhlIGJhc2UgaW50ZXJmYWNlIGZvciBhbGwgdGhlIG90aGVyXG4gKiBtZXNzYWdlIHR5cGUgaW50ZXJmYWNlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIGlkIGZvciB0aGlzIG1lc3NhZ2VcbiAgICovXG4gIG1zZ0d1aWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhpcyBtZXNzYWdlXG4gICAqL1xuICBtc2dUeXBlOiBNZXNzYWdlVHlwZTtcbn1cblxuLyoqXG4gKiBUaGUgaW5pdGlhbGl6ZSBtZXNzYWdlIGlzIHRoZSBmaXJzdCBtZXNzYWdlIHdoaWNoIHdpbGwgYmUgc2VudFxuICogZnJvbSB0aGUgamF2YXNjcmlwdCB0byBzZXQgdXAgY29tbXVuaWNhdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbml0aWFsaXplTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgdGhlIGFwaSB3aGljaCB0aGUgc2VuZGVyIHdhbnRzIHRvIHVzZVxuICAgKi9cbiAgYXBpVmVyc2lvbjogVmVyc2lvbk51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgdGhpcyBtZXNzYWdpbmcgY29udHJhY3QgdG8gYmUgdXNlZC4gRm9yIG5vdywgdGhlcmVcbiAgICogc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgdmVyc2lvbiBidXQgc2VuZGluZyB0aGlzIGFsb25nIHNob3VsZCBoZWxwXG4gICAqIGlmIHdlIG5lZWQgdG8gYWRkIGEgbmV3IHZlcnNpb24gaW4gYSBmdXR1cmUgcmVsZWFzZVxuICAgKi9cbiAgY3Jvc3NGcmFtZVZlcnNpb246IFZlcnNpb25OdW1iZXI7XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgYXQgdGhlIHRpbWUgb2YgaW5pdGlhbGl6YXRpb25cbiAgICovXG4gIG9wdGlvbnM/OiBJbml0aWFsaXphdGlvbk9wdGlvbnM7XG59XG5cbi8qKlxuICogVGhpcyBtZXNzYWdlIGlzIHNlbnQgd2hlbiBhIG5vdGlmaWNhdGlvbiBvY2N1cnMgZnJvbSB0aGUgcHJlc2xheWVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIGlkIGZvciB0aGlzIHR5cGUgb2Ygbm90aWZpY2F0aW9uXG4gICAqL1xuICBub3RpZmljYXRpb25JZDogTm90aWZpY2F0aW9uSWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRhIHdoaWNoIGNhbWUgYWxvbmcgd2l0aCB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICBkYXRhOiBNb2RlbDtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGNhbGxpbmcgYW4gaW50ZXJuYWwgY29udHJhY3QgY29tbWFuZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGNvbW1hbmQgd2hpY2ggc2hvdWxkIGJlIGV4ZWN1dGVkXG4gICAqL1xuICB2ZXJiSWQ6IFZlcmJJZDtcblxuICAvKipcbiAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcmFtZXRlcnMgZm9yIHRoZSBjb21tYW5kXG4gICAqL1xuICBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycztcbn1cblxuLyoqXG4gKiBUaGlzIG1lc3NhZ2UgaXMgc2VudCBpbiByZXNwb25zZSB0byBhIENvbW1hbmRNZXNzYWdlIHdpdGggdGhlXG4gKiByZXN1bHQgb2YgdGhhdCBjb21tYW5kcyBpbnZvY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogR3VpZCBvZiB0aGUgQ29tbWFuZE1lc3NhZ2Ugd2hpY2ggdGhpcyBpcyBpbiByZXNwb25zZSB0b1xuICAgKi9cbiAgY29tbWFuZEd1aWQ6IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdGhlcmUgd2FzIGFuIGVycm9yIHJldHVybmVkIGZyb20gdGhlIGNvbW1hbmQsIHRoaXMgd2lsbCBiZSBkZWZpbmVkXG4gICAqIGFuZCBjb250YWluIHRoZSBlcnJvclxuICAgKi9cbiAgZXJyb3I/OiBNb2RlbDtcblxuICAvKipcbiAgICogSWYgdGhlIGNvbW1hbmQgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LCB0aGlzIHdpbGwgY29udGFpbiB0aGUgY29tbWFuZCByZXN1bHRcbiAgICovXG4gIGRhdGE/OiBNb2RlbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjb252ZXJ0cyBmcm9tIGEgc291cmNlIGVudW0gdmFsdWUgdG8gZGVzdGluYXRpb24gZW51bVxuICogdmFsdWUgZ2l2ZW4gYSBtYXBwaW5nIGZyb20gc291cmNlIHRvIGRlc3RpbmF0aW9uIHdoZW4gY29uc3RydWN0ZWQuXG4gKlxuICogTm90ZTogVGhpcyBleGFjdCBzYW1lIGNsYXNzIGlzIGRlZmluZWQgaW4gYXBpLWNvcmUuICBHaXZlbiBpdHMgc21hbGxcbiAqIG5hdHVyZSwgaXQgaXMgbm90IHdvcnRoIGhhdmluZyBpbiBhIHNlcGFyYXRlIHByb2plY3QgdG8gc2hhcmUgdGhpcyBiZXR3ZWVuXG4gKiBhcGktY29yZSBhbmQgYXBpLXNoYXJlZC4gIElmIG1vcmUgdXRpbGl0eSBmdW5jdGlvbmFsaXR5IGlzIGFkZGVkIHRoYXQgaXMgdXNlZCBieSBhcGktY29yZVxuICogYW5kIGFwaS1zaGFyZWQgYnV0IGhhcyBubyBvdGhlciBkZXBlbmRlY2llcywgYSB1dGlsdGl0eSBwcm9qZWN0IG1pZ2h0IGJlIG1lcml0ZWQsXG4gKiBhbmQgdGhpcyBjbGFzcyBjb3VsZCBiZSBtb3ZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudW1Db252ZXJ0ZXI8VFNvdXJjZVR5cGUgZXh0ZW5kcyBzdHJpbmcsIFREZXN0aW5hdGlvblR5cGU+IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21hcHBpbmdzOiB7IFtlbnVtVmFsOiBzdHJpbmddOiBURGVzdGluYXRpb25UeXBlOyB9LFxuICAgIHByaXZhdGUgX2RlZmF1bHRWYWw/OiBURGVzdGluYXRpb25UeXBlKSB7IH1cblxuICBwdWJsaWMgY29udmVydChlbnVtVmFsOiBUU291cmNlVHlwZSwgdGhyb3dJZk1pc3Npbmc6IFNob3VsZFRocm93ID0gU2hvdWxkVGhyb3cuWWVzKTogVERlc3RpbmF0aW9uVHlwZSB7XG4gICAgaWYgKHRoaXMuX21hcHBpbmdzLmhhc093blByb3BlcnR5KGVudW1WYWwpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwcGluZ3NbZW51bVZhbCBhcyBzdHJpbmddO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZWZhdWx0VmFsICE9PSB1bmRlZmluZWQgJiYgdGhyb3dJZk1pc3NpbmcgIT09IFNob3VsZFRocm93Llllcykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWYWw7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBFbnVtIE1hcHBpbmcgbm90IGZvdW5kIGZvcjogJHtlbnVtVmFsfWApO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFNob3VsZFRocm93IHtcbiAgWWVzID0gJ3llcycsXG4gIE5vID0gJ25vJyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0VudW1Db252ZXJ0ZXIudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgdGhlIFNpbmdsZUV2ZW50TWFuYWdlciBpbnRlcmZhY2UgZm9yIGEgc2luZ2xlIHR5cGUgb2YgVGFibGVhdSBldmVudFxuICpcbiAqIEB0ZW1wbGF0ZSBURXZlbnRUeXBlIFRoZSBUYWJsZWF1IGV2ZW50IHR5cGUgdGhpcyBjbGFzcyBzcGVjaWFsaXplc1xuICovXG5leHBvcnQgY2xhc3MgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbDxURXZlbnRUeXBlIGV4dGVuZHMgQ29udHJhY3QuVGFibGVhdUV2ZW50PiBpbXBsZW1lbnRzIFNpbmdsZUV2ZW50TWFuYWdlciB7XG4gIHByaXZhdGUgX2V2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZTtcbiAgcHJpdmF0ZSBfaGFuZGxlcnM6IEFycmF5PChldmVudE9iajogVEV2ZW50VHlwZSkgPT4gdm9pZD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGV2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSkge1xuICAgIHRoaXMuX2V2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICB0aGlzLl9oYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdldCBldmVudFR5cGUoKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGhhbmRsZXI6IChldmVudE9iajogVEV2ZW50VHlwZSkgPT4gdm9pZCk6IENvbnRyYWN0LlRhYmxlYXVFdmVudFVucmVnaXN0ZXJGbiB7XG4gICAgdGhpcy5faGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXIpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcjogKGV2ZW50T2JqOiBURXZlbnRUeXBlKSA9PiB2b2lkKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYmVmb3JlQ291bnQgPSB0aGlzLl9oYW5kbGVycy5sZW5ndGg7XG4gICAgdGhpcy5faGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVycy5maWx0ZXIoaCA9PiBoICE9PSBoYW5kbGVyKTtcbiAgICByZXR1cm4gYmVmb3JlQ291bnQgPiB0aGlzLl9oYW5kbGVycy5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgdHJpZ2dlckV2ZW50KGV2ZW50R2VuZXJhdG9yOiAoKSA9PiBURXZlbnRUeXBlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuX2hhbmRsZXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBldmVudE1vZGVsID0gZXZlbnRHZW5lcmF0b3IoKTtcbiAgICAgICAgaGFuZGxlcihldmVudE1vZGVsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gU2luY2UgdGhpcyBoYW5kbGVyIGNvdWxkIGJlIG91dHNpZGUgb3VyIGNvbnRyb2wsIGp1c3QgY2F0Y2ggYW55dGhpbmcgaXQgdGhyb3dzIGFuZCBjb250aW51ZSBvblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vVGFibGVhdUVycm9yJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtIHtcbiAgLyoqXG4gICAqIHNlcmlhbGl6ZXMgdGhlIGRhdGUgaW50byB0aGUgZm9ybWF0IHRoYXQgdGhlIHNlcnZlciBleHBlY3RzLlxuICAgKiBAcGFyYW0gZGF0ZSB0aGUgZGF0ZSB0byBzZXJpYWxpemVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHllYXI6IG51bWJlciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aDogbnVtYmVyID0gZGF0ZS5nZXRVVENNb250aCgpICsgMTtcbiAgICBjb25zdCBkYXk6IG51bWJlciA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIGNvbnN0IGhoOiBudW1iZXIgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgY29uc3QgbW06IG51bWJlciA9IGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICAgIGNvbnN0IHNlYzogbnVtYmVyID0gZGF0ZS5nZXRVVENTZWNvbmRzKCk7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAke2hofToke21tfToke3NlY31gO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVCb29sZWFuRm9yUGxhdGZvcm0oYm9vbDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGJvb2wgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVOdW1iZXJGb3JQbGF0Zm9ybShudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIGlucHV0IGlzIGEgbnVtYmVyXG4gICAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVOdW1iZXIoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgKGlucHV0KSA9PT0gJ251bWJlcicgfHwgaW5wdXQgaW5zdGFuY2VvZiBOdW1iZXI7XG4gIH1cbiAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIGlucHV0IGlzIGEgRGF0ZVxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlRGF0ZShpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRGF0ZTtcbiAgfVxuICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1R5cGVTdHJpbmcoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgKGlucHV0KSA9PT0gJ3N0cmluZycgfHwgaW5wdXQgaW5zdGFuY2VvZiBTdHJpbmc7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlQm9vbChpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoaW5wdXQpID09PSAnYm9vbGVhbicgfHwgaW5wdXQgaW5zdGFuY2VvZiBCb29sZWFuO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZVBhcmFtdGVyVmFsdWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKFBhcmFtLmlzVHlwZU51bWJlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVOdW1iZXJGb3JQbGF0Zm9ybSh2YWx1ZSBhcyBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAoUGFyYW0uaXNUeXBlRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0odmFsdWUgYXMgRGF0ZSk7XG4gICAgfSBlbHNlIGlmIChQYXJhbS5pc1R5cGVCb29sKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFBhcmFtLnNlcmlhbGl6ZUJvb2xlYW5Gb3JQbGF0Zm9ybSh2YWx1ZSBhcyBib29sZWFuKTtcbiAgICB9IGVsc2UgaWYgKFBhcmFtLmlzVHlwZVN0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBVbmV4cGVjdGVkIGludmFsaWQgdmFsdWUgZm9yOiAke3ZhbHVlfWApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVXRpbHMvUGFyYW0udHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZSBpbXBsZW1lbnRzIENvbnRyYWN0LkRhdGFUYWJsZSB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8QXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPj4sXG4gICAgcHJpdmF0ZSBfY29sdW1uczogQXJyYXk8Q29udHJhY3QuQ29sdW1uPixcbiAgICBwcml2YXRlIF90b3RhbFJvd0NvdW50OiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfaXNUb3RhbFJvd0NvdW50TGltaXRlZDogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pc1N1bW1hcnlEYXRhOiBib29sZWFuLFxuICAgIHByaXZhdGUgX21hcmtzSW5mbz86IEFycmF5PE1hcmtJbmZvPikge1xuICAgIC8vIFRPRE86IGdldCByaWQgb2YgdGhpcyBpbiByZWRlc2lnbi5cbiAgICB0aGlzLl9uYW1lID0gX2lzU3VtbWFyeURhdGEgPyAnU3VtbWFyeSBEYXRhIFRhYmxlJyA6ICdVbmRlcmx5aW5nIERhdGEgVGFibGUnO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKTogQXJyYXk8QXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPj4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2x1bW5zKCk6IEFycmF5PENvbnRyYWN0LkNvbHVtbj4ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXJrc0luZm8oKTogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWFya3NJbmZvO1xuICB9XG5cbiAgcHVibGljIGdldCB0b3RhbFJvd0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUm93Q291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzVG90YWxSb3dDb3VudExpbWl0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVG90YWxSb3dDb3VudExpbWl0ZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU3VtbWFyeURhdGEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3VtbWFyeURhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtJbmZvIGltcGxlbWVudHMgQ29udHJhY3QuTWFya0luZm8ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdHlwZTogQ29udHJhY3QuTWFya1R5cGUsXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyxcbiAgICBwcml2YXRlIF90dXBsZUlkPzogTnVtYmVyXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0Lk1hcmtUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR1cGxlSWQoKTogTnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHVwbGVJZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uIGltcGxlbWVudHMgQ29udHJhY3QuQ29sdW1uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpZWxkTmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2RhdGFUeXBlOiBDb250cmFjdC5EYXRhVHlwZSwgLy8gVE9ETzogdGhpcyBzaG91ZGwgYmUgYW4gZW51bSB0eXBlXG4gICAgcHJpdmF0ZSBfaXNSZWZlcmVuY2VkOiBib29sZWFuLFxuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXIpIHsgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVR5cGUoKTogQ29udHJhY3QuRGF0YVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9kYXRhVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNSZWZlcmVuY2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1JlZmVyZW5jZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhVmFsdWUgaW1wbGVtZW50cyBDb250cmFjdC5EYXRhVmFsdWUge1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnksXG4gICAgcHJpdmF0ZSBfZm9ybWF0dGVkVmFsdWU6IHN0cmluZykgeyB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0dGVkVmFsdWU7XG4gIH1cbiAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9HZXREYXRhTW9kZWxzLnRzIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi9FdmVudExpc3RlbmVyTWFuYWdlcic7XG5cbmltcG9ydCB7IFNoZWV0SW1wbCB9IGZyb20gJy4vSW1wbC9TaGVldEltcGwnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXQgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyYWN0LlNoZWV0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NoZWV0SW1wbDogU2hlZXRJbXBsKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRUeXBlKCk6IENvbnRyYWN0LlNoZWV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5zaGVldFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5zaXplO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuZmluZFBhcmFtZXRlckFzeW5jKHBhcmFtZXRlck5hbWUsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmFtZXRlcnNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LlBhcmFtZXRlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLmdldFBhcmFtZXRlcnNBc3luYyh0aGlzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2hlZXQudHMiLCJpbXBvcnQgeyBWZXJzaW9uTnVtYmVyIGFzIFZlcnNpb25OdW1iZXJDb250cmFjdCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuL1RhYmxlYXVFcnJvcic7XG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGV4dGVuc2lvbnMgbGlicmFyeVxuICovXG5leHBvcnQgY2xhc3MgVmVyc2lvbk51bWJlciBpbXBsZW1lbnRzIFZlcnNpb25OdW1iZXJDb250cmFjdCB7XG4gIC8vIFVzaW5nIHNvbWUgd2VicGFjayB0cmlja3MsIHdlIGNhbiBpbmplY3QgdGhpcyB2ZXJzaW9uIGludG8gb3VyIGNvZGUgKGtpbmRhIGxpa2UgYysrIHByZXByb2Nlc3NvciBzdHVmZilcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBWZXJzaW9uTnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIHZlcnNpb24gbnVtYmVyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogVmVyc2lvbk51bWJlciB7XG4gICAgcmV0dXJuIFZlcnNpb25OdW1iZXIuX2luc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBTZXRWZXJzaW9uTnVtYmVyKG51bVN0cmluZzogc3RyaW5nLCBpc0FscGhhOiBib29sZWFuKTogdm9pZCB7XG4gICAgVmVyc2lvbk51bWJlci5faW5zdGFuY2UgPSBuZXcgVmVyc2lvbk51bWJlcihudW1TdHJpbmcsIGlzQWxwaGEpO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IG1ham9yOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBtaW5vcjogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgZml4OiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBpc0FscGhhOiBib29sZWFuO1xuXG4gIC8vIHByaXZhdGUgY29uc3RydWN0b3Igc28gZXZlcnlvbmUgdXNlcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlXG4gIHByaXZhdGUgY29uc3RydWN0b3IodmVyc2lvblN0cmluZzogc3RyaW5nLCBpc0FscGhhOiBib29sZWFuKSB7XG4gICAgY29uc3QgcGFydHMgPSB2ZXJzaW9uU3RyaW5nLnNwbGl0KCcuJykubWFwKHAgPT4gcGFyc2VJbnQocCwgMTApKTtcbiAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgYEludmFsaWQgdmVyc2lvbiBudW1iZXI6ICR7dmVyc2lvblN0cmluZ31gKTtcbiAgICB9XG5cbiAgICB0aGlzLm1ham9yID0gcGFydHNbMF07XG4gICAgdGhpcy5taW5vciA9IHBhcnRzWzFdO1xuICAgIHRoaXMuZml4ID0gcGFydHNbMl07XG4gICAgdGhpcy5pc0FscGhhID0gaXNBbHBoYTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5tYWpvcn0uJHt0aGlzLm1pbm9yfS4ke3RoaXMuZml4fWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXIudHMiLCIvLyBEZWNsYXJlIHRoaXMga2V5IHR5cGUgYW5kIGV4cG9ydCB0aGUgTm90aWZpY2F0aW9uSWQgdG8gbWFrZSB0aGlzIGJlaGF2ZSBsaWtlIGEgc3RyaW5nIGVudW1cbmV4cG9ydCBlbnVtIFZlcmJJZCB7XG4gIEFwcGx5Q2F0ZWdvcmljYWxGaWx0ZXIgPSAnY2F0ZWdvcmljYWwtZmlsdGVyJyxcbiAgQXBwbHlSYW5nZUZpbHRlciA9ICdyYW5nZS1maWx0ZXInLFxuICBDbGVhckZpbHRlciA9ICdjbGVhci1maWx0ZXInLFxuICBJbml0aWFsaXplRXh0ZW5zaW9uID0gJ2luaXRpYWxpemUtZXh0ZW5zaW9uJyxcbiAgR2V0RGF0YVN1bW1hcnlEYXRhID0gJ2dldC1zdW1tYXJ5LWRhdGEnLFxuICBHZXRVbmRlcmx5aW5nRGF0YSA9ICdnZXQtdW5kZXJseWluZy1kYXRhJyxcbiAgR2V0RGF0YVNvdXJjZURhdGEgPSAnZ2V0LWRhdGFzb3VyY2UtZGF0YScsXG4gIFNhdmVFeHRlbnNpb25TZXR0aW5ncyA9ICdzYXZlLWV4dGVuc2lvbi1zZXR0aW5ncycsXG4gIEdldFNlbGVjdGVkTWFya3MgPSAnZ2V0LXNlbGVjdGVkLW1hcmtzJyxcbiAgR2V0SGlnaGxpZ2h0ZWRNYXJrcyA9ICdnZXQtaGlnaGxpZ2h0ZWQtbWFya3MnLFxuICBHZXRQYXJhbWV0ZXJzRm9yU2hlZXQgPSAnZ2V0LXBhcmFtZXRlcnMtZm9yLXNoZWV0JyxcbiAgRmluZFBhcmFtZXRlciA9ICdmaW5kLXBhcmFtZXRlcicsXG4gIENoYW5nZVBhcmFtZXRlclZhbHVlID0gJ2NoYW5nZS1wYXJhbWV0ZXItdmFsdWUnLFxuICBDbGVhclNlbGVjdGVkTWFya3MgPSAnY2xlYXItc2VsZWN0ZWQtbWFya3MnLFxuICBTZWxlY3RCeVZhbHVlID0gJ3NlbGVjdC1ieS12YWx1ZScsXG4gIEdldERhdGFTb3VyY2VzID0gJ2dldC1kYXRhLXNvdXJjZXMnLFxuICBSZWZyZXNoRGF0YVNvdXJjZSA9ICdyZWZyZXNoLWRhdGEtc291cmNlJyxcbiAgR2V0RmlsdGVycyA9ICdnZXQtZmlsdGVycycsXG4gIEdldEZpZWxkQW5kRGF0YVNvdXJjZSA9ICdnZXQtZmllbGQtYW5kLWRhdGFzb3VyY2UnLFxuICBHZXRDYXRlZ29yaWNhbERvbWFpbiA9ICdnZXQtY2F0ZWdvcmljYWwtZG9tYWluJyxcbiAgR2V0UmFuZ2VEb21haW4gPSAnZ2V0LXJhbmdlLWRvbWFpbicsXG4gIEdldEpvaW5EZXNjcmlwdGlvbiA9ICdnZXQtam9pbi1kZXNjcmlwdGlvbicsXG4gIEdldENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcyA9ICdnZXQtY29ubmVjdGlvbi1kZXNjcmlwdGlvbi1zdW1tYXJpZXMnLFxuICBEaXNwbGF5RGlhbG9nID0gJ2Rpc3BsYXktZGlhbG9nJyxcbiAgQ2xvc2VEaWFsb2cgPSAnY2xvc2UtZGlhbG9nJyxcbiAgVGVzdENvbnZlcnNpb25WZXJiID0gJ3Rlc3QtY29udmVyc2lvbi12ZXJiJyxcbiAgR2V0RmllbGQgPSAnZ2V0LWZpZWxkJyxcbiAgR2V0RGF0YVNvdXJjZSA9ICdnZXQtZGF0YXNvdXJjZScsXG4gIEdldEFjdGl2ZVRhYmxlcyA9ICdnZXQtYWN0aXZlLXRhYmxlcycsXG4gIFNldFpvbmVWaXNpYmlsaXR5ID0gJ3NldC16b25lLXZpc2liaWxpdHknLFxuICBCbG9ja0V4dGVuc2lvbiA9ICdibG9jay1leHRlbnNpb24nXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1ZlcmJzLnRzIiwiKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZhbGlkYXRvciA9IG5ldyBSZWdFeHAoXCJeW2EtejAtOV17OH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17MTJ9JFwiLCBcImlcIik7XG5cbiAgZnVuY3Rpb24gZ2VuKGNvdW50KSB7XG4gICAgdmFyIG91dCA9IFwiXCI7XG4gICAgZm9yICh2YXIgaT0wOyBpPGNvdW50OyBpKyspIHtcbiAgICAgIG91dCArPSAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBHdWlkKGd1aWQpIHtcbiAgICBpZiAoIWd1aWQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50OyBgdmFsdWVgIGhhcyBubyB2YWx1ZS5cIik7XG4gICAgICBcbiAgICB0aGlzLnZhbHVlID0gR3VpZC5FTVBUWTtcbiAgICBcbiAgICBpZiAoZ3VpZCAmJiBndWlkIGluc3RhbmNlb2YgR3VpZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IGd1aWQudG9TdHJpbmcoKTtcblxuICAgIH0gZWxzZSBpZiAoZ3VpZCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ3VpZCkgPT09IFwiW29iamVjdCBTdHJpbmddXCIgJiYgR3VpZC5pc0d1aWQoZ3VpZCkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBndWlkO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAvLyBDb21wYXJpbmcgc3RyaW5nIGB2YWx1ZWAgYWdhaW5zdCBwcm92aWRlZCBgZ3VpZGAgd2lsbCBhdXRvLWNhbGxcbiAgICAgIC8vIHRvU3RyaW5nIG9uIGBndWlkYCBmb3IgY29tcGFyaXNvblxuICAgICAgcmV0dXJuIEd1aWQuaXNHdWlkKG90aGVyKSAmJiB0aGlzLnZhbHVlID09IG90aGVyO1xuICAgIH07XG5cbiAgICB0aGlzLmlzRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBHdWlkLkVNUFRZO1xuICAgIH07XG4gICAgXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBHdWlkLkVNUFRZID0gXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIjtcblxuICBHdWlkLmlzR3VpZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZSBpbnN0YW5jZW9mIEd1aWQgfHwgdmFsaWRhdG9yLnRlc3QodmFsdWUudG9TdHJpbmcoKSkpO1xuICB9O1xuXG4gIEd1aWQuY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBHdWlkKFtnZW4oMiksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigzKV0uam9pbihcIi1cIikpO1xuICB9O1xuXG4gIEd1aWQucmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFtnZW4oMiksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigzKV0uam9pbihcIi1cIik7XG4gIH07XG5cbiAgaWYodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gR3VpZDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lkd1aWQgPSBHdWlkO1xuICB9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2d1aWQvZ3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1RXZlbnQge1xuICBwcml2YXRlIF90eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNoZWV0UGF0aCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1BhcmFtZXRlcnNTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hlZXRJbmZvSW1wbDogU2hlZXRJbmZvSW1wbCkge1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRUeXBlKCk6IENvbnRyYWN0LlNoZWV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbmZvSW1wbC5zaGVldFBhdGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihwYXJhbWV0ZXJOYW1lLCAncGFyYW1ldGVyTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZmluZFBhcmFtZXRlckJ5TmFtZUFzeW5jKHBhcmFtZXRlck5hbWUsIHNoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzQXN5bmMoc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5QYXJhbWV0ZXI+PiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzaGVldCwgJ3NoZWV0Jyk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8UGFyYW1ldGVyc1NlcnZpY2U+KFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRQYXJhbWV0ZXJzRm9yU2hlZXRBc3luYyh0aGlzLnNoZWV0UGF0aCwgc2hlZXQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4vSW1wbC9EYXRhU291cmNlSW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlIGltcGxlbWVudHMgQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU291cmNlSW1wbDogRGF0YVNvdXJjZUltcGwpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRzKCk6IEFycmF5PENvbnRyYWN0LkZpZWxkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmZpZWxkcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXh0cmFjdFVwZGF0ZVRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuZXh0cmFjdFVwZGF0ZVRpbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXh0cmFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuaXNFeHRyYWN0O1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwucmVmcmVzaEFzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVGFibGVzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldEFjdGl2ZVRhYmxlc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucz86IENvbnRyYWN0LkRhdGFTb3VyY2VVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOlxuICAgIFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0RhdGFTb3VyY2UudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRmllbGRJbXBsIH0gZnJvbSAnLi9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uU3VtbWFyeSB9IGZyb20gJy4uL0Nvbm5lY3Rpb25TdW1tYXJ5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vRmllbGQnO1xuaW1wb3J0IHsgVGFibGVTdW1tYXJ5IH0gZnJvbSAnLi4vVGFibGVTdW1tYXJ5JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0dldERhdGFTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlSW1wbCB7XG4gIHByaXZhdGUgX2ZpZWxkczogQXJyYXk8RmllbGQ+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU291cmNlSW5mbzogSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlKSB7XG4gICAgdGhpcy5fZmllbGRzID0gX2RhdGFTb3VyY2VJbmZvLmZpZWxkcy5tYXAoZmllbGRNb2RlbCA9PiB7XG4gICAgICBjb25zdCBmaWVsZEltcGwgPSBuZXcgRmllbGRJbXBsKGZpZWxkTW9kZWwsIHRoaXMpO1xuICAgICAgcmV0dXJuIG5ldyBGaWVsZChmaWVsZEltcGwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBleHRyYWN0VXBkYXRlVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5leHRyYWN0VXBkYXRlVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRzKCk6IEFycmF5PENvbnRyYWN0LkZpZWxkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNFeHRyYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5pc0V4dHJhY3Q7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaEFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBkYXRhU291cmNlU2VydmljZS5yZWZyZXNoQXN5bmModGhpcy5fZGF0YVNvdXJjZUluZm8uaWQpO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5W10+IHtcbiAgICBjb25zdCBkYXRhU291cmNlU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVNlcnZpY2UuZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKS50aGVuPENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5W10+KHN1bW1hcmllcyA9PiB7XG4gICAgICByZXR1cm4gc3VtbWFyaWVzLm1hcChzdW1tYXJ5ID0+IG5ldyBDb25uZWN0aW9uU3VtbWFyeShzdW1tYXJ5KSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVGFibGVzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oXG4gICAgICBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VTZXJ2aWNlLmdldEFjdGl2ZVRhYmxlc0FzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKS50aGVuPEFycmF5PENvbnRyYWN0LlRhYmxlU3VtbWFyeT4+KHRhYmxlSW5mb3MgPT4ge1xuICAgICAgcmV0dXJuIHRhYmxlSW5mb3MubWFwKHRhYmxlSW5mbyA9PiBuZXcgVGFibGVTdW1tYXJ5KHRhYmxlSW5mbykpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucz86IENvbnRyYWN0LkRhdGFTb3VyY2VVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOlxuICAgIFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG5cbiAgICBjb25zdCBnZXREYXRhU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICByZXR1cm4gZ2V0RGF0YVNlcnZpY2UuZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICAgIHRoaXMuaWQsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCAwLCAgICAgICAvLyAwIGFuZCBbXSBhcmUgZGVmYXVsdHNcbiAgICAgIG9wdGlvbnMuY29sdW1uc1RvSW5jbHVkZSB8fCBbXSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhdGFTb3VyY2U6IENvbnRyYWN0LkRhdGFTb3VyY2UpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5SW50ZXJuYWxWYWx1ZShkYXRhU291cmNlLCAnZGF0YVNvdXJjZScpO1xuXG4gICAgdGhpcy5fZmllbGRzID0gdGhpcy5fZGF0YVNvdXJjZUluZm8uZmllbGRzLm1hcChmaWVsZE1vZGVsID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkSW1wbCA9IG5ldyBGaWVsZEltcGwoZmllbGRNb2RlbCwgZGF0YVNvdXJjZSk7XG4gICAgICByZXR1cm4gbmV3IEZpZWxkKGZpZWxkSW1wbCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGF0YVNvdXJjZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZmllbGRJbmZvOiBJbnRlcm5hbENvbnRyYWN0LkZpZWxkLFxuICAgIHByaXZhdGUgX3BhcmVudERhdGFTb3VyY2U6IENvbnRyYWN0LkRhdGFTb3VyY2UpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uZGVzY3JpcHRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFnZ3JlZ2F0aW9uKCk6IENvbnRyYWN0LkZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmZpZWxkQWdncmVnYXRpb25UeXBlLmNvbnZlcnQodGhpcy5fZmllbGRJbmZvLmFnZ3JlZ2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50RGF0YVNvdXJjZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm9sZSgpOiBDb250cmFjdC5GaWVsZFJvbGVUeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmZpZWxkUm9sZVR5cGUuY29udmVydCh0aGlzLl9maWVsZEluZm8ucm9sZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaXNIaWRkZW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzR2VuZXJhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaXNHZW5lcmF0ZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ2FsY3VsYXRlZEZpZWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaXNDYWxjdWxhdGVkRmllbGQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tYmluZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzQ29tYmluZWRGaWVsZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9GaWVsZEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRmllbGRJbXBsIH0gZnJvbSAnLi9JbXBsL0ZpZWxkSW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkIGltcGxlbWVudHMgQ29udHJhY3QuRmllbGQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZmllbGRJbXBsOiBGaWVsZEltcGwpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuZGVzY3JpcHRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFnZ3JlZ2F0aW9uKCk6IENvbnRyYWN0LkZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmFnZ3JlZ2F0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhU291cmNlKCk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuZGF0YVNvdXJjZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm9sZSgpOiBDb250cmFjdC5GaWVsZFJvbGVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLnJvbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNIaWRkZW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzR2VuZXJhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNHZW5lcmF0ZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ2FsY3VsYXRlZEZpZWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNDYWxjdWxhdGVkRmllbGQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtblR5cGUoKTogQ29udHJhY3QuQ29sdW1uVHlwZSB7XG4gICAgdGhyb3cgRXJyb3JIZWxwZXJzLmFwaU5vdEltcGxlbWVudGVkKCdGaWVsZC5jb2x1bW5UeXBlJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tYmluZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzQ29tYmluZWRGaWVsZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRmllbGQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdVNoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVTaGVldEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFRhYmxlYXVXb3Jrc2hlZXRFdmVudCBleHRlbmRzIFRhYmxlYXVTaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuVGFibGVhdVdvcmtzaGVldEV2ZW50IHtcbiAgcHVibGljIGdldCB3b3Jrc2hlZXQoKTogQ29udHJhY3QuV29ya3NoZWV0IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0O1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUsIHByb3RlY3RlZCBfd29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQpIHtcbiAgICBzdXBlcih0eXBlLCBfd29ya3NoZWV0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVXb3Jrc2hlZXRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1U2hlZXRFdmVudCBleHRlbmRzIFRhYmxlYXVFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlYXVTaGVldEV2ZW50IHtcbiAgcHJpdmF0ZSBfc2hlZXQ6IENvbnRyYWN0LlNoZWV0O1xuXG4gIHB1YmxpYyBnZXQgc2hlZXQoKTogQ29udHJhY3QuU2hlZXQge1xuICAgIHJldHVybiB0aGlzLl9zaGVldDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMuX3NoZWV0ID0gc2hlZXQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1U2hlZXRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVmlzdWFsSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG4vKipcbiAqIERlZmluZXMgd2hpY2ggdHlwZSBvZiBnZXREYXRhIGNhbGwgdG8gbWFrZS5cbiAqL1xuZXhwb3J0IGVudW0gR2V0RGF0YVR5cGUge1xuICBTdW1tYXJ5ID0gJ3N1bW1hcnknLFxuICBVbmRlcmx5aW5nID0gJ3VuZGVybHlpbmcnXG59XG5cbi8qKlxuICogU2VydmljZSBmb3IgaW1wbGVtZW50aW5nIHRoZSBsb2dpYyBmb3IgdmFyaW91cyBnZXREYXRhIGNhbGxzXG4gKlxuICogQGludGVyZmFjZSBHZXREYXRhU2VydmljZVxuICogQGV4dGVuZHMge0FwaVNlcnZpY2V9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0RGF0YVNlcnZpY2UgZXh0ZW5kcyBBcGlTZXJ2aWNlIHtcblxuICAvKipcbiAgICogR2V0cyB0aGUgbGltaXQgb2Ygcm93cyBmb3IgZ2V0VW5kZXJseWluZ0RhdGFBc3luY1xuICAgKi9cbiAgZ2V0TWF4Um93TGltaXQoKTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRhdGEgZm9yIGEgcGFydGljdWxhciB2aXN1YWxcbiAgICpcbiAgICogQHBhcmFtIHtWaXN1YWxJZH0gdmlzdWFsSWQgIFRoZSB2aXN1YWwgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7R2V0RGF0YVR5cGV9IGdldFR5cGUgIFRoZSB0eXBlIG9mIGdldERhdGEgY2FsbCB0byBtYWtlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBvciBub3QgYWxpYXNlcyBzaG91bGQgYmUgaWdub3JlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZVNlbGVjdGlvbiAgV2hldGhlciBvciBub3Qgc2VsZWN0aW9uIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUFsbENvbHVtbnMgIFNob3VsZCBhbGwgY29sdW1ucyBiZSBpbmNsdWRlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Um93cyAgTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byByZXR1cm5cbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPn0gIERhdGEgdGFibGUgd2l0aCB0aGUgcmVxdWVzdGVkIGRhdGFcbiAgICovXG4gIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG1hcmtzIGZvciBhIGdpdmVuIHZpc3VhbFxuICAgKlxuICAqIEBwYXJhbSB7VmlzdWFsSWR9IHZpc3VhbElkICBUaGUgdmlzdWFsIHRvIGdldCBkYXRhIGZvclxuICAqIEByZXR1cm5zIHtQcm9taXNlPEFjdGl2ZU1hcmtzPn0gIENvbGxlY3Rpb24gb2YgZGF0YSB0YWJsZXMgd2l0aCB0aGUgYWN0aXZlIG1hcmtzXG4gICovXG4gIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXJrcyBmb3IgYSBnaXZlbiB2aXN1YWxcbiAgICpcbiAgKiBAcGFyYW0ge1Zpc3VhbElkfSB2aXN1YWxJZCAgVGhlIHZpc3VhbCB0byBnZXQgZGF0YSBmb3JcbiAgKiBAcmV0dXJucyB7UHJvbWlzZTxBY3RpdmVNYXJrcz59ICBDb2xsZWN0aW9uIG9mIGRhdGEgdGFibGVzIHdpdGggdGhlIGFjdGl2ZSBtYXJrc1xuICAqL1xuICBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNvdXJjZUlkICBUaGUgaWQgb2YgdGhlIGRhdGFzb3VyY2UgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBhbGlhcyB2YWx1ZXMgc2hvdWxkIGJlIGlnbm9yZWQgaW4gdGhlIHJldHVybmVkIGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFJvd3MgVGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBjb2x1bW5zVG9JbmNsdWRlICBDb2xsZWN0aW9uIG9mIGNvbHVtbiBjYXB0aW9ucyB3aGljaCBzaG91bGQgYmUgcmV0dXJuZWQuIEVtcHR5IG1lYW5zIGFsbCBjb2x1bW5zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT59ICBEYXRhIHRhYmxlIHdpdGggdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqL1xuICBnZXREYXRhU291cmNlRGF0YUFzeW5jKFxuICAgIGRhdGFzb3VyY2VJZDogc3RyaW5nLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgbWF4Um93czogbnVtYmVyLFxuICAgIGNvbHVtbnNUb0luY2x1ZGU6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9HZXREYXRhU2VydmljZS50cyIsImltcG9ydCB7IEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi9VdGlscy9FbnVtQ29udmVydGVyJztcbmltcG9ydCB7XG4gIEZpbHRlckRvbWFpblR5cGUgYXMgRXh0ZXJuYWxEb21haW5UeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uIGFzIEV4dGVybmFsTnVsbE9wdGlvbixcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFpvbmVWaXNpYmlsaXR5VHlwZSBhcyBab25lVmlzaWJpbGl0eVR5cGVcbn0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQge1xuICBGaWx0ZXJEb21haW5UeXBlIGFzIEludGVybmFsRG9tYWluVHlwZSxcbiAgRmlsdGVyTnVsbE9wdGlvbiBhcyBJbnRlcm5hbE51bGxPcHRpb24sXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cblxuLyogdHNsaW50OmRpc2FibGU6dHlwZWRlZiAtIERpc2FibGUgdGhpcyB0byBtYWtlIGRlY2xhcmluZyB0aGVzZSBjbGFzc2VzIGEgYml0IGVhc2llciAqL1xuLyoqXG4gKiBNYXBzIGVudW1zIHVzZWQgYnkgdGhlIGV4dGVybmFsLWFwaS1jb250cmFjdCB0byB0aGUgZW51bXMgdXNlZFxuICogaW4gdGhlIGludGVybmFsLWFwaS1jb250cmFjdCwgd2hpY2ggZGV2ZWxvcGVycyBjb2RlIGFnYWluc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3Mge1xuICBwdWJsaWMgc3RhdGljIGZpbHRlckRvbWFpblR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbERvbWFpblR5cGUsIEludGVybmFsRG9tYWluVHlwZT4oe1xuICAgIFtFeHRlcm5hbERvbWFpblR5cGUuUmVsZXZhbnRdOiBJbnRlcm5hbERvbWFpblR5cGUuUmVsZXZhbnQsXG4gICAgW0V4dGVybmFsRG9tYWluVHlwZS5EYXRhYmFzZV06IEludGVybmFsRG9tYWluVHlwZS5EYXRhYmFzZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIG51bGxPcHRpb25zID0gbmV3IEVudW1Db252ZXJ0ZXI8RXh0ZXJuYWxOdWxsT3B0aW9uLCBJbnRlcm5hbE51bGxPcHRpb24+KHtcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLkFsbFZhbHVlc106IEludGVybmFsTnVsbE9wdGlvbi5BbGxWYWx1ZXMsXG4gICAgW0V4dGVybmFsTnVsbE9wdGlvbi5Ob25OdWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXMsXG4gICAgW0V4dGVybmFsTnVsbE9wdGlvbi5OdWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLk51bGxWYWx1ZXNcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJVcGRhdGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8RXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLCBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGU+KHtcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZF06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGQsXG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGxdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsLFxuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZSxcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIHNldFZpc2liaWxpdHlUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8Wm9uZVZpc2liaWxpdHlUeXBlLCBCb29sZWFuPih7XG4gICAgW1pvbmVWaXNpYmlsaXR5VHlwZS5TaG93XTogdHJ1ZSxcbiAgICBbWm9uZVZpc2liaWxpdHlUeXBlLkhpZGVdOiBmYWxzZVxuICB9KTtcbn1cbi8qIHRzbGludDplbmFibGU6dHlwZWRlZiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncy50cyIsIi8qKlxuICogVGhpcyBpcyB5b3VyIG1haW4uIFRoaXMgaXMgd2hlcmUgeW91IHJlLWV4cG9ydCBldmVyeXRoaW5nIHlvdSB3YW50IHRvIGJlIHB1YmxpY2x5IGF2YWlsYWJsZS5cbiAqXG4gKiBUaGUgYnVpbGQgZW5mb3JjZXMgdGhhdCB0aGUgZmlsZSBoYXMgdGhlIHNhbWUgbmFtZSBhcyB0aGUgZ2xvYmFsIHZhcmlhYmxlIHRoYXQgaXMgZXhwb3J0ZWQuXG4gKi9cblxuLy8gVGhlIGZvbGxvd2luZyBwb2x5ZmlsbHMgYXJlIG5lZWRlZCBmb3IgSUUxMVxuaW1wb3J0ICdjb3JlLWpzL2ZuL3Byb21pc2UnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL2FycmF5L2ZpbmQnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nO1xuXG4vLyBEdWUgdG8gdGhlIHdheSB3ZSBjb25maWd1cmVkIHdlYnBhY2ssIHdlIHNob3VsZCBiZSBleHBvcnRpbmcgdGhpbmdzIHdoaWNoIHdpbGwgYmUgdW5kZXJcbi8vIGEgZ2xvYmFsIHZhcmlhYmxlIGNhbGxlZCBcInRhYmxlYXVcIi4gRXhwb3J0IGV2ZXJ5dGhpbmcgd2Ugd2FudCB0byBiZSB2aXNpYmxlIHVuZGVyIHRhYmxlYXVcbi8vIGZyb20gdGhpcyBmaWxlLlxuXG5pbXBvcnQgeyBFeHRlbnNpb25zSW1wbCB9IGZyb20gJy4vRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsJztcbmltcG9ydCB7IEV4dGVuc2lvbnMgfSBmcm9tICcuL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FeHRlbnNpb25zJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL0FwaVNoYXJlZCc7XG5cbmRlY2xhcmUgdmFyIEVYVEVOU0lPTl9WRVJTSU9OX0lTX0FMUEhBOiBib29sZWFuO1xuY29uc3QgaXNBbHBoYTogYm9vbGVhbiA9IHR5cGVvZiBFWFRFTlNJT05fVkVSU0lPTl9JU19BTFBIQSAhPT0gJ3VuZGVmaW5lZCcgPyBFWFRFTlNJT05fVkVSU0lPTl9JU19BTFBIQSA6IGZhbHNlO1xuXG5kZWNsYXJlIHZhciBFWFRFTlNJT05fQVBJX1ZFUlNJT05fTlVNQkVSOiBzdHJpbmc7XG5WZXJzaW9uTnVtYmVyLlNldFZlcnNpb25OdW1iZXIodHlwZW9mIEVYVEVOU0lPTl9BUElfVkVSU0lPTl9OVU1CRVIgIT09ICd1bmRlZmluZWQnID8gRVhURU5TSU9OX0FQSV9WRVJTSU9OX05VTUJFUiA6ICcwLjAuMCcsIGlzQWxwaGEpO1xuXG5jb25zdCBleHRlbnNpb25JbXBsID0gbmV3IEV4dGVuc2lvbnNJbXBsKCk7XG5leHBvcnQgY29uc3QgZXh0ZW5zaW9ucyA9IG5ldyBFeHRlbnNpb25zKGV4dGVuc2lvbkltcGwpO1xuXG4vLyBFeHBvcnQgRW51bXNcbi8vIFRoZXNlIHNob3cgdXAgdW5kZXIgdGhlIHRhYmxlYXUgb2JqZWN0LiBJLmUuIHRhYmxlYXUuRXh0ZW5zaW9uQ29udGV4dC5TZXJ2ZXJcbmV4cG9ydCB7XG4gIEV4dGVuc2lvbkNvbnRleHQsXG4gIEV4dGVuc2lvbk1vZGUsXG4gIEFuYWx5dGljc09iamVjdFR5cGUsXG4gIENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlLFxuICBFbmNvZGluZ1R5cGUsXG4gIEVycm9yQ29kZXMsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJEb21haW5UeXBlLFxuICBGaWx0ZXJUeXBlLFxuICBGaWx0ZXJVcGRhdGVUeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uLFxuICBNYXJrVHlwZSxcbiAgUGFyYW1ldGVyVmFsdWVUeXBlLFxuICBQZXJpb2RUeXBlLFxuICBRdWlja1RhYmxlQ2FsY1R5cGUsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUsXG4gIFNoZWV0VHlwZSxcbiAgU29ydERpcmVjdGlvbixcbiAgVGFibGVhdUV2ZW50VHlwZSxcbiAgVHJlbmRMaW5lTW9kZWxUeXBlLFxuICBab25lVmlzaWJpbGl0eVR5cGVcbn0gZnJvbSAnLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkudHMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191c2VyLWFnZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5maW5kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vYXJyYXkvZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSk7XG52YXIgS0VZID0gJ2ZpbmQnO1xudmFyIGZvcmNlZCA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5LFxuICBEYXNoYm9hcmQsXG4gIERhc2hib2FyZEltcGwsXG4gIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcCxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgcmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyxcbiAgU2VydmljZU5hbWVzXG4gIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcbmltcG9ydCB7IERhc2hib2FyZENvbnRlbnQgfSBmcm9tICcuLi9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi9OYW1lc3BhY2VzL0Vudmlyb25tZW50JztcbmltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL05hbWVzcGFjZXMvU2V0dGluZ3MnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbXBsIH0gZnJvbSAnLi9TZXR0aW5nc0ltcGwnO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi4vTmFtZXNwYWNlcy9VSSc7XG5pbXBvcnQgeyBVSUltcGwgfSBmcm9tICcuL1VJSW1wbCc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXInO1xuXG5pbXBvcnQge1xuICBDb250ZXh0TWVudUV2ZW50LFxuICBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8sXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnksXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlcixcbiAgTm90aWZpY2F0aW9uSWQsXG4gIFNoZWV0UGF0aCxcbiAgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTixcbiAgSW5pdGlhbGl6YXRpb25PcHRpb25zLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5cbmV4cG9ydCB0eXBlIENhbGxiYWNrTWFwID0geyBba2V5OiBzdHJpbmddOiAoKSA9PiB7fSB9O1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc0ltcGwge1xuICBwcml2YXRlIF9pbml0aWFsaXphdGlvblByb21pc2U6IFByb21pc2U8c3RyaW5nPjtcblxuICBwdWJsaWMgZGFzaGJvYXJkQ29udGVudDogRGFzaGJvYXJkQ29udGVudDtcbiAgcHVibGljIGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcbiAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgcHVibGljIHVpOiBVSTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZUFzeW5jKGlzRXh0ZW5zaW9uRGlhbG9nOiBib29sZWFuLCBjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6YXRpb25Qcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluaXRPcHRpb25zOiBJbml0aWFsaXphdGlvbk9wdGlvbnMgPSB7IGlzQWxwaGE6IFZlcnNpb25OdW1iZXIuSW5zdGFuY2UuaXNBbHBoYSB9O1xuICAgICAgICAvLyBGaXJzdCB0aGluZyB3ZSB3YW50IHRvIGRvIGlzIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBpcyBhIGRlc2t0b3AgZGlzcGF0Y2hlciBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHVzXG4gICAgICAgIGlmIChJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIuaGFzRGVza3RvcEFwaURpc3BhdGNoZXJQcm9taXNlKGluaXRPcHRpb25zKSkge1xuICAgICAgICAgIC8vIFJ1bm5pbmcgaW4gZGVza3RvcCwgdXNlIHRoaXMgcHJvbWlzZVxuICAgICAgICAgIGNvbnN0IGRlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZSA9IEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5nZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoaW5pdE9wdGlvbnMpO1xuXG4gICAgICAgICAgZGVza3RvcERpc3BhdGNoZXJQcm9taXNlIS50aGVuKChkaXBhdGNoZXJGYWN0b3J5KSA9PlxuICAgICAgICAgICAgdGhpcy5vbkRpc3BhdGNoZXJSZWNlaXZlZChkaXBhdGNoZXJGYWN0b3J5LCBpc0V4dGVuc2lvbkRpYWxvZywgY29udGV4dE1lbnVDYWxsYmFja3MpKVxuICAgICAgICAgICAgLnRoZW4oKG9wZW5QYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUob3BlblBheWxvYWQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXZSBtdXN0IGJlIHJ1bm5pbmcgaW4gc2VydmVyLCBzbyB3ZSBzaG91bGQgdHJ5IHRvIGtpY2sgb2YgdGhlIHNlcnZlciBkaXNwYXRjaGVyIGJvb3RzdHJhcHBpbmdcbiAgICAgICAgICBjb25zdCBvbkRpc3BhdGNoZXJSZWNlaXZlZENhbGxiYWNrID0gdGhpcy5vbkRpc3BhdGNoZXJSZWNlaXZlZC5iaW5kKHRoaXMpO1xuICAgICAgICAgIGRvQ3Jvc3NGcmFtZUJvb3RzdHJhcCh3aW5kb3csIElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04sIGluaXRPcHRpb25zKS50aGVuKChmYWN0b3J5OiBJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb25EaXNwYXRjaGVyUmVjZWl2ZWRDYWxsYmFjayhmYWN0b3J5LCBpc0V4dGVuc2lvbkRpYWxvZywgY29udGV4dE1lbnVDYWxsYmFja3MpO1xuICAgICAgICAgIH0pLnRoZW4oKG9wZW5QYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKG9wZW5QYXlsb2FkKTtcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXphdGlvblByb21pc2U7XG4gIH1cblxuICBwcml2YXRlIG9uRGlzcGF0Y2hlclJlY2VpdmVkKFxuICAgIGRpc3BhdGNoZXJGYWN0b3J5OiBJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5LFxuICAgIGlzRXh0ZW5zaW9uRGlhbG9nOiBib29sZWFuLFxuICAgIGNvbnRleHRNZW51RnVuY3Rpb25zPzogQ2FsbGJhY2tNYXApOiBQcm9taXNlPHN0cmluZz4ge1xuXG4gICAgY29uc3QgZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXJGYWN0b3J5KElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04pO1xuXG4gICAgLy8gQ2FsbCB0byByZWdpc3RlciBhbGwgdGhlIHNlcnZpY2VzIHdoaWNoIHdpbGwgdXNlIHRoZSBuZXdseSBpbml0aWFsaXplZCBkaXNwYXRjaGVyXG4gICAgcmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyhkaXNwYXRjaGVyKTtcbiAgICByZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyhkaXNwYXRjaGVyKTtcblxuICAgIC8vIEdldCB0aGUgaW5pdGlhbGl6YXRpb24gc2VydmljZSBhbmQgaW5pdGlhbGl6ZSB0aGlzIGV4dGVuc2lvblxuICAgIGNvbnN0IGluaXRpYWxpemF0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEluaXRpYWxpemF0aW9uU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLkluaXRpYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICBjb25zdCBjYWxsYmFja01hcEtleXMgPSAoY29udGV4dE1lbnVGdW5jdGlvbnMpID8gT2JqZWN0LmtleXMoY29udGV4dE1lbnVGdW5jdGlvbnMpIDogW107XG4gICAgcmV0dXJuIGluaXRpYWxpemF0aW9uU2VydmljZS5pbml0aWFsaXplRGFzaGJvYXJkRXh0ZW5zaW9uc0FzeW5jKGlzRXh0ZW5zaW9uRGlhbG9nLCBjYWxsYmFja01hcEtleXMpLnRoZW48c3RyaW5nPihyZXN1bHQgPT4ge1xuICAgICAgaWYgKCFyZXN1bHQuZXh0ZW5zaW9uSW5zdGFuY2UubG9jYXRvci5kYXNoYm9hcmRQYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnVW5leHBlY3RlZCBlcnJvciBkdXJpbmcgaW5pdGlhbGl6YXRpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFzaGJvYXJkQ29udGVudCA9IHRoaXMuaW5pdGlhbGl6ZURhc2hib2FyZENvbnRlbnQocmVzdWx0LmV4dGVuc2lvbkRhc2hib2FyZEluZm8sXG4gICAgICAgIHJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpO1xuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudChyZXN1bHQuZXh0ZW5zaW9uRW52aXJvbm1lbnQpO1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuaW5pdGlhbGl6ZVNldHRpbmdzKHJlc3VsdC5leHRlbnNpb25TZXR0aW5nc0luZm8pO1xuICAgICAgdGhpcy51aSA9IG5ldyBVSShuZXcgVUlJbXBsKCkpO1xuXG4gICAgICAvLyBBZnRlciBpbml0aWFsaXphdGlvbiBoYXMgY29tcGxldGVkLCBzZXR1cCBsaXN0ZW5lcnMgZm9yIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdGhhdFxuICAgICAgLy8gYXJlIG1lYW50IHRvIGJlIHRyaWdnZXJlZCB3aGVuZXZlciBhIGNvbnRleHQgbWVudSBpdGVtIGlzIGNsaWNrZWQuXG4gICAgICB0aGlzLmluaXRpYWxpemVDb250ZXh0TWVudUNhbGxiYWNrcyhjb250ZXh0TWVudUZ1bmN0aW9ucyk7XG5cbiAgICAgIC8vIEluIHRoZSBub3JtYWwgaW5pdGlhbGl6YXRpb24gY2FzZSwgdGhpcyB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZy4gIFdoZW4gcmV0dXJuaW5nIGZyb20gaW5pdGlhbGl6ZUFzeW5jIHRvIHRoZVxuICAgICAgLy8gZGV2ZWxvcGVyLCB3ZSBqdXN0IGluZ29yZSB0aGF0IHN0cmluZy4gIEluIHRoZSBjYXNlIG9mIGluaXRpYWxpemluZyBmcm9tIGFuIGV4dGVuc2lvbiBkaWFsb2csIHRoaXMgc3RyaW5nXG4gICAgICAvLyBpcyBhbiBvcHRpb25hbCBwYXlsb2FkIHNlbnQgZnJvbSB0aGUgcGFyZW50IGV4dGVuc2lvbi5cbiAgICAgIHJldHVybiByZXN1bHQuZXh0ZW5zaW9uRGlhbG9nUGF5bG9hZDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZURhc2hib2FyZENvbnRlbnQoaW5mbzogRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbywgc2hlZXRQYXRoOiBTaGVldFBhdGgpOiBEYXNoYm9hcmRDb250ZW50IHtcbiAgICBjb25zdCBkYXNoYm9hcmRJbXBsID0gbmV3IERhc2hib2FyZEltcGwoaW5mbywgc2hlZXRQYXRoKTtcbiAgICBjb25zdCBkYXNoYm9hcmQgPSBuZXcgRGFzaGJvYXJkKGRhc2hib2FyZEltcGwpO1xuICAgIHJldHVybiBuZXcgRGFzaGJvYXJkQ29udGVudChkYXNoYm9hcmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplU2V0dGluZ3Moc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pOiBTZXR0aW5ncyB7XG4gICAgY29uc3Qgc2V0dGluZ3NJbXBsID0gbmV3IFNldHRpbmdzSW1wbChzZXR0aW5nc0luZm8pO1xuICAgIHJldHVybiBuZXcgU2V0dGluZ3Moc2V0dGluZ3NJbXBsKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUNvbnRleHRNZW51Q2FsbGJhY2tzKGNvbnRleHRNZW51RnVuY3Rpb25zPzogQ2FsbGJhY2tNYXApOiB2b2lkIHtcbiAgICBjb25zdCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG5cbiAgICAvLyBVbnJlZ2lzdGVyIGZ1bmN0aW9uIG5vdCB1c2VkIHNpbmNlIHRoZXNlIG5vdGlmaWNhdGlvbnMgc2hvdWxkIGJlXG4gICAgLy8gb2JzZXJ2ZWQgZm9yIHRoZSBmdWxsIGxpZmV0aW1lIG9mIHRoZSBleHRlbnNpb24uXG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuQ29udGV4dE1lbnVDbGljaywgKG1vZGVsKSA9PiB7XG4gICAgICAvLyBMZXQgdGhyb3VnaCBhbnkgY29udGV4dCBtZW51IGV2ZW50LCB0aGVzZSBhcmUgYWxyZWFkeSBmaWx0ZXJlZCBvbiBhcGktY29yZVxuICAgICAgLy8gYmFzZWQgb24gdGhlIGV4dGVuc2lvbiBsb2NhdG9yLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgKGV2ZW50OiBDb250ZXh0TWVudUV2ZW50KSA9PiB7XG4gICAgICAvLyBFeGVjdXRlIHRoZSBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb250ZXh0IG1lbnUgSURcbiAgICAgIGlmIChjb250ZXh0TWVudUZ1bmN0aW9ucykge1xuICAgICAgICBpZiAoIWNvbnRleHRNZW51RnVuY3Rpb25zW2V2ZW50LmlkXSkge1xuICAgICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgUmVjZWl2ZWQgdW5leHBlY3RlZCBjb250ZXh0IG1lbnUgSWQgZnJvbSBldmVudDogJHtldmVudC5pZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHRNZW51RnVuY3Rpb25zW2V2ZW50LmlkXSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvSW1wbC9FeHRlbnNpb25zSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgRGFzaGJvYXJkSW1wbCB9IGZyb20gJy4vSW1wbC9EYXNoYm9hcmRJbXBsJztcbmltcG9ydCB7IFNoZWV0IH0gZnJvbSAnLi9TaGVldCc7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBTaGVldCBpbXBsZW1lbnRzIENvbnRyYWN0LkRhc2hib2FyZCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXNoYm9hcmRJbXBsOiBEYXNoYm9hcmRJbXBsKSB7XG4gICAgc3VwZXIoX2Rhc2hib2FyZEltcGwpO1xuICAgIF9kYXNoYm9hcmRJbXBsLmluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0cygpOiBBcnJheTxDb250cmFjdC5Xb3Jrc2hlZXQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkSW1wbC53b3Jrc2hlZXRzO1xuICB9XG5cbiAgcHVibGljIGdldCBvYmplY3RzKCk6IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmRJbXBsLm9iamVjdHM7XG4gIH1cblxuICBwdWJsaWMgc2V0Wm9uZVZpc2liaWxpdHlBc3luYyh6b25lVmlzaWJpbGl0eU1hcDogTWFwPG51bWJlciwgQ29udHJhY3QuWm9uZVZpc2liaWxpdHlUeXBlPik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmRJbXBsLnNldFpvbmVWaXNpYmlsaXR5QXN5bmMoem9uZVZpc2liaWxpdHlNYXApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmQudHMiLCIvLyBBbGwgZW51bSB2YWx1ZXMgbWFkZSBhdmFpbGFibGUgdG8gRXh0ZW5zaW9ucyBkZXZlbG9wZXJzLlxuLy8gRW51bXMgc2hvdWxkIGJlIGtlcHQgaW4gYWxwaGFiZXRpY2FsIG9yZGVyLlxuXG4vKipcbiAqIFRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSBFeHRlbnNpb25zIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICovXG5leHBvcnQgZW51bSBFeHRlbnNpb25Db250ZXh0IHtcbiAgRGVza3RvcCA9ICdkZXNrdG9wJyxcbiAgU2VydmVyID0gJ3NlcnZlcidcbn1cblxuLyoqXG4gKiBUaGUgbW9kZSBpbiB3aGljaCB0aGUgRXh0ZW5zaW9ucyBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5zaW9uTW9kZSB7XG4gIEF1dGhvcmluZyA9ICdhdXRob3JpbmcnLFxuICBWaWV3aW5nID0gJ3ZpZXdpbmcnXG59XG5cbmV4cG9ydCBlbnVtIEFuYWx5dGljc09iamVjdFR5cGUge1xuICBDbHVzdGVyID0gJ2NsdXN0ZXInLFxuICBGb3JlY2FzdCA9ICdmb3JlY2FzdCcsXG4gIFRyZW5kTGluZSA9ICd0cmVuZC1saW5lJ1xufVxuXG5leHBvcnQgZW51bSBDb2x1bW5UeXBlIHtcbiAgRGlzY3JldGUgPSAnZGlzY3JldGUnLFxuICBDb250aW51b3VzID0gJ2NvbnRpbnVvdXMnXG59XG5cbi8qKlxuICogV2hhdCB0aGUgb2JqZWN0IHJlcHJlc2VudHMgaW4gYSBkYXNoYm9hcmQuXG4gKi9cbmV4cG9ydCBlbnVtIERhc2hib2FyZE9iamVjdFR5cGUge1xuICBCbGFuayA9ICdibGFuaycsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnLFxuICBRdWlja0ZpbHRlciA9ICdxdWljay1maWx0ZXInLFxuICBQYXJhbWV0ZXJDb250cm9sID0gJ3BhcmFtZXRlci1jb250cm9sJyxcbiAgUGFnZUZpbHRlciA9ICdwYWdlLWZpbHRlcicsXG4gIExlZ2VuZCA9ICdsZWdlbmQnLFxuICBUaXRsZSA9ICd0aXRsZScsXG4gIFRleHQgPSAndGV4dCcsXG4gIEltYWdlID0gJ2ltYWdlJyxcbiAgV2ViUGFnZSA9ICd3ZWItcGFnZScsXG4gIEV4dGVuc2lvbiA9ICdleHRlbnNpb24nXG59XG5cbi8qKlxuICogVGhlIGRpZmZlcmVudCB0eXBlcyBvZiBkYXRhIGEgdmFsdWUgY2FuIGhhdmVcbiAqL1xuZXhwb3J0IGVudW0gRGF0YVR5cGUge1xuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgSW50ID0gJ2ludCcsXG4gIEZsb2F0ID0gJ2Zsb2F0JyxcbiAgQm9vbCA9ICdib29sJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgRGF0ZVRpbWUgPSAnZGF0ZS10aW1lJyxcbiAgU3BhdGlhbCA9ICdzcGF0aWFsJ1xufVxuXG4vKipcbiAqIFZhbGlkIGRhdGUgcmFuZ2VzIGZvciBhIHJlbGF0aXZlIGRhdGUgZmlsdGVyLlxuICovXG5leHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgTGFzdCA9ICdsYXN0JyxcbiAgTGFzdE4gPSAnbGFzdC1uJyxcbiAgTmV4dCA9ICduZXh0JyxcbiAgTmV4dE4gPSAnbmV4dC1uJyxcbiAgQ3VycmVudCA9ICdjdXJyZW50JyxcbiAgVG9EYXRlID0gJ3RvLWRhdGUnXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XG4gIENvbHVtbiA9ICdjb2x1bW4nLFxuICBSb3cgPSAncm93JyxcbiAgUGFnZSA9ICdwYWdlJyxcbiAgRmlsdGVyID0gJ2ZpbHRlcicsXG4gIE1hcmtzVHlwZSA9ICdtYXJrcy10eXBlJyxcbiAgTWVhc3VyZVZhbHVlcyA9ICdtZWFzdXJlLXZhbHVlcycsXG4gIENvbG9yID0gJ2NvbG9yJyxcbiAgU2l6ZSA9ICdzaXplJyxcbiAgTGFiZWwgPSAnbGFiZWwnLFxuICBEZXRhaWwgPSAnZGV0YWlsJyxcbiAgVG9vbHRpcCA9ICd0b29sdGlwJyxcbiAgU2hhcGUgPSAnc2hhcGUnLFxuICBQYXRoID0gJ3BhdGgnLFxuICBBbmdsZSA9ICdhbmdsZSdcbn1cblxuLyoqXG4gKiBBbGwgZXJyb3IgY29kZXMgdXNlZCBieSB0aGUgRXh0ZW5zaW9ucyBBUEkuXG4gKi9cbmV4cG9ydCBlbnVtIEVycm9yQ29kZXMge1xuICAvKipcbiAgICogVGhyb3duIHdoZW4gY2FsbGVyIGF0dGVtcHRzIHRvIGV4ZWN1dGUgY29tbWFuZCBiZWZvcmUgaW5pdGlhbGl6YXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICovXG4gIEFQSU5vdEluaXRpYWxpemVkID0gJ2FwaS1ub3QtaW5pdGlhbGl6ZWQnLFxuICAvKipcbiAgICogVGhyb3duIHdoZW4gY2FsbGVyIGF0dGVtcHRzIHRvIGV4ZWN1dGUgY29tbWFuZCB3aGlsZSBleHRlbnNpb24gaXMgbm90IHZpc2libGUuXG4gICAqL1xuICBWaXNpYmlsaXR5RXJyb3IgPSAndmlzaWJpbGl0eS1lcnJvcicsXG4gIC8qKlxuICAgKiBPbmx5IG9uZSBkaWFsb2cgY2FuIGJlIG9wZW5lZCBhdCB0aW1lIHdpdGggdGhlIFVJIG5hbWVzcGFjZSBmdW5jdGlvbmFsaXR5LlxuICAgKi9cbiAgRGlhbG9nQWxyZWFkeU9wZW4gPSAnZGlhbG9nLWFscmVhZHktb3BlbicsXG4gIC8qKlxuICAgKiBUaGUgb3BlbiBkaWFsb2cgd2FzIGNsb3NlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIERpYWxvZ0Nsb3NlZEJ5VXNlciA9ICdkaWFsb2ctY2xvc2VkLWJ5LXVzZXInLFxuICAvKipcbiAgICogQW4gZXJyb3Igb2NjdXJyZWQgd2l0aGluIHRoZSBUYWJsZWF1IEV4dGVuc2lvbnMgQVBJLiBDb250YWN0IFRhYmxlYXUgU3VwcG9ydC5cbiAgICovXG4gIEludGVybmFsRXJyb3IgPSAnaW50ZXJuYWwtZXJyb3InLFxuICAvKipcbiAgICogQSBkaWFsb2cgbXVzdCBzdGFydCBvbiB0aGUgc2FtZSBkb21haW4gYXMgdGhlIHBhcmVudCBleHRlbmlvbi5cbiAgICovXG4gIEludmFsaWREb21haW5EaWFsb2cgPSAnaW52YWxpZC1kaWFsb2ctZG9tYWluJyxcbiAgLyoqXG4gICAqIEEgcGFyYW1ldGVyIGlzIG5vdCB0aGUgY29ycmVjdCBkYXRhIHR5cGUgb3IgZm9ybWF0LiBUaGUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCBpbiB0aGUgRXJyb3IubWVzc2FnZSBmaWVsZC5cbiAgICovXG4gIEludmFsaWRQYXJhbWV0ZXIgPSAnaW52YWxpZC1wYXJhbWV0ZXInLFxuICAvKipcbiAgICogQ2FuIG9jY3VyIGlmIHRoZSBleHRlbnNpb24gaW50ZXJhY3RzIHdpdGggYSBmaWx0ZXIgdGhhdCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldC5cbiAgICovXG4gIE1pc3NpbmdGaWx0ZXIgPSAnbWlzc2luZy1maWx0ZXInLFxuICAvKipcbiAgICogQ2FuIG9jY3VyIGlmIHRoZSBleHRlbnNpb24gaW50ZXJhY3RzIHdpdGggYSBwYXJhbWV0ZXIgdGhhdCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldC5cbiAgICovXG4gIE1pc3NpbmdQYXJhbWV0ZXIgPSAnbWlzc2luZy1wYXJhbWV0ZXInLFxuICAvKipcbiAgICogSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAqL1xuICBTZXJ2ZXJFcnJvciA9ICdzZXJ2ZXItZXJyb3InLFxuICAvKipcbiAgICogRGV2ZWxvcGVyIGNhbm5vdCBzYXZlIHNldHRpbmdzIHdoaWxlIGFub3RoZXIgc2F2ZSBpcyBzdGlsbCBpbiBwcm9ncmVzcy5cbiAgICovXG4gIFNldHRpbmdTYXZlSW5Qcm9ncmVzcyA9ICdzZXR0aW5nLXNhdmUtaW4tcHJvZ3Jlc3MnLFxuICAvKipcbiAgICogQW4gdW5rbm93biBldmVudCBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlIGNhbGwgdG8gVml6LmFkZEV2ZW50TGlzdGVuZXJvciBWaXoucmVtb3ZlRXZlbnRMaXN0ZW5lci5cbiAgICovXG4gIFVuc3VwcG9ydGVkRXZlbnROYW1lID0gJ3Vuc3VwcG9ydGVkLWV2ZW50LW5hbWUnLFxuICAvKipcbiAgICogQSBtZXRob2Qgd2FzIHVzZWQgZm9yIGEgdHlwZSBvZiBkYXRhc291cmNlIHRoYXQgZG9lc24ndCBzdXBwb3J0IHRoYXQgbWV0aG9kIChzZWUgZ2V0QWN0aXZlVGFibGVzQXN5bmMgZm9yIGFuIGV4YW1wbGUpXG4gICAqL1xuICBVbnN1cHBvcnRlZE1ldGhvZEZvckRhdGFTb3VyY2VUeXBlID0gJ3Vuc3VwcG9ydGVkLW1ldGhvZC1mb3ItZGF0YS1zb3VyY2UtdHlwZSdcbn1cblxuLyoqXG4gKiAgVHlwZSBvZiBhZ2dyZWdhdGlvbiBvbiBhIGZpZWxkLlxuICovXG5leHBvcnQgZW51bSBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gIFN1bSA9ICdzdW0nLFxuICBBdmcgPSAnYXZnJyxcbiAgTWluID0gJ21pbicsXG4gIE1heCA9ICdtYXgnLFxuICBTdGRldiA9ICdzdGRldicsXG4gIFN0ZGV2cCA9ICdzdGRldnAnLFxuICBWYXIgPSAndmFyJyxcbiAgVmFycCA9ICd2YXJwJyxcbiAgQ291bnQgPSAnY291bnQnLFxuICBDb3VudGQgPSAnY291bnRkJyxcbiAgTWVkaWFuID0gJ21lZGlhbicsXG4gIEF0dHIgPSAnYXR0cicsXG4gIE5vbmUgPSAnbm9uZScsXG4gIFllYXIgPSAneWVhcicsXG4gIFF0ciA9ICdxdHInLFxuICBNb250aCA9ICdtb250aCcsXG4gIERheSA9ICdkYXknLFxuICBIb3VyID0gJ2hvdXInLFxuICBNaW51dGUgPSAnbWludXRlJyxcbiAgU2Vjb25kID0gJ3NlY29uZCcsXG4gIFdlZWsgPSAnd2VlaycsXG4gIFdlZWtkYXkgPSAnd2Vla2RheScsXG4gIE1vbnRoWWVhciA9ICdtb250aC15ZWFyJyxcbiAgTWR5ID0gJ21keScsXG4gIEVuZCA9ICdlbmQnLFxuICBUcnVuY1llYXIgPSAndHJ1bmMteWVhcicsXG4gIFRydW5jUXRyID0gJ3RydW5jLXF0cicsXG4gIFRydW5jTW9udGggPSAndHJ1bmMtbW9udGgnLFxuICBUcnVuY1dlZWsgPSAndHJ1bmMtd2VlaycsXG4gIFRydW5jRGF5ID0gJ3RydW5jLWRheScsXG4gIFRydW5jSG91ciA9ICd0cnVuYy1ob3VyJyxcbiAgVHJ1bmNNaW51dGUgPSAndHJ1bmMtbWludXRlJyxcbiAgVHJ1bmNTZWNvbmQgPSAndHJ1bmMtc2Vjb25kJyxcbiAgUXVhcnQxID0gJ3F1YXJ0MScsXG4gIFF1YXJ0MyA9ICdxdWFydDMnLFxuICBTa2V3bmVzcyA9ICdza2V3bmVzcycsXG4gIEt1cnRvc2lzID0gJ2t1cnRvc2lzJyxcbiAgSW5PdXQgPSAnaW4tb3V0JyxcbiAgVXNlciA9ICd1c2VyJ1xufVxuXG4vKipcbiAqIFJvbGUgb2YgYSBmaWVsZC5cbiAqL1xuZXhwb3J0IGVudW0gRmllbGRSb2xlVHlwZSB7XG4gIERpbWVuc2lvbiA9ICdkaW1lbnNpb24nLFxuICBNZWFzdXJlID0gJ21lYXN1cmUnLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbi8qKlxuICogQW4gZW51bWVyYXRpb24gb2YgdGhlIHZhbGlkIHR5cGVzIG9mIGZpbHRlcnMgdGhhdCBjYW4gYmUgYXBwbGllZC5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVHlwZSB7XG4gIENhdGVnb3JpY2FsID0gJ2NhdGVnb3JpY2FsJyxcbiAgUmFuZ2UgPSAncmFuZ2UnLFxuICBIaWVyYXJjaGljYWwgPSAnaGllcmFyY2hpY2FsJyxcbiAgUmVsYXRpdmVEYXRlID0gJ3JlbGF0aXZlLWRhdGUnXG59XG5cbi8qKlxuICogVGhlIGRpZmZlcmVudCB1cGRhdGUgdHlwZXMgZm9yIGFwcGx5aW5nIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJVcGRhdGVUeXBlIHtcbiAgQWRkID0gJ2FkZCcsXG4gIEFsbCA9ICdhbGwnLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxuICBSZW1vdmUgPSAncmVtb3ZlJ1xufVxuXG4vKipcbiAqIFRoZSBkb21haW4gdHlwZSBmb3IgYSBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyRG9tYWluVHlwZSB7XG4gIC8qKlxuICAgKiBUaGUgZG9tYWluIHZhbHVlcyB0aGF0IGFyZSByZWxldmFudCB0byB0aGUgc3BlY2lmaWVkIGZpbHRlclxuICAgKiBpLmUuIHRoZSBkb21haW4gaXMgcmVzdHJpY3RlZCBieSBhIHByZXZpb3VzIGZpbHRlclxuICAgKi9cbiAgUmVsZXZhbnQgPSAncmVsZXZhbnQnLFxuICAvKipcbiAgICogbGlzdCBvZiBhbGwgcG9zc2libGUgZG9tYWluIHZhbHVlcyBmcm9tIGRhdGFiYXNlXG4gICAqL1xuICBEYXRhYmFzZSA9ICdkYXRhYmFzZSdcbn1cblxuLyoqXG4gKiBUaGUgb3B0aW9uIGZvciBzcGVjaWZ5aW5nIHdoaWNoIHZhbHVlcyB0byBpbmNsdWRlIGZvciBmaWx0ZXJpbmdcbiAqIEluZGljYXRlcyB3aGF0IHRvIGRvIHdpdGggbnVsbCB2YWx1ZXMgZm9yIGEgZ2l2ZW4gZmlsdGVyIG9yIG1hcmsgc2VsZWN0aW9uIGNhbGwuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlck51bGxPcHRpb24ge1xuICBOdWxsVmFsdWVzID0gJ251bGwtdmFsdWVzJyxcbiAgTm9uTnVsbFZhbHVlcyA9ICdub24tbnVsbC12YWx1ZXMnLFxuICBBbGxWYWx1ZXMgPSAnYWxsLXZhbHVlcydcbn1cblxuLyoqXG4gKiBUeXBlIG9mIG1hcmsgZm9yIGEgZ2l2ZW4gbWFya3MgY2FyZCBpbiBhIHZpei5cbiAqL1xuZXhwb3J0IGVudW0gTWFya1R5cGUge1xuICBCYXIgPSAnYmFyJyxcbiAgTGluZSA9ICdsaW5lJyxcbiAgQXJlYSA9ICdhcmVhJyxcbiAgU3F1YXJlID0gJ3NxdWFyZScsXG4gIENpcmNsZSA9ICdjaXJjbGUnLFxuICBTaGFwZSA9ICdzaGFwZScsXG4gIFRleHQgPSAndGV4dCcsXG4gIE1hcCA9ICdtYXAnLFxuICBQaWUgPSAncGllJyxcbiAgR2FudHRCYXIgPSAnZ2FudHQtYmFyJyxcbiAgUG9seWdvbiA9ICdwb2x5Z29uJ1xufVxuXG4vKipcbiAqIEFuIGVudW1lcmF0aW9uIGRlc2NyaWJpbmcgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBhbGxvd2FibGUgdmFsdWVzLlxuICogVGhpcyBpcyB1c2VkIGZvciByZXN0cmljdGluZyB0aGUgZG9tYWluIG9mIGEgcGFyYW1ldGVyXG4gKi9cbmV4cG9ydCBlbnVtIFBhcmFtZXRlclZhbHVlVHlwZSB7XG4gIEFsbCA9ICdhbGwnLFxuICBMaXN0ID0gJ2xpc3QnLFxuICBSYW5nZSA9ICdyYW5nZSdcbn1cblxuLyoqXG4gKiBEYXRlIHBlcmlvZCB1c2VkIGluIGZpbHRlcnMgYW5kIGluIHBhcmFtZXRlcnMuXG4gKi9cbmV4cG9ydCBlbnVtIFBlcmlvZFR5cGUge1xuICBZZWFycyA9ICd5ZWFycycsXG4gIFF1YXJ0ZXJzID0gJ3F1YXJ0ZXJzJyxcbiAgTW9udGhzID0gJ21vbnRocycsXG4gIFdlZWtzID0gJ3dlZWtzJyxcbiAgRGF5cyA9ICdkYXlzJyxcbiAgSG91cnMgPSAnaG91cnMnLFxuICBNaW51dGVzID0gJ21pbnV0ZXMnLFxuICBTZWNvbmRzID0gJ3NlY29uZHMnXG59XG5cbmV4cG9ydCBlbnVtIFF1aWNrVGFibGVDYWxjVHlwZSB7XG4gIFJ1bm5pbmdUb3RhbCA9ICdydW5uaW5nLXRvdGFsJyxcbiAgRGlmZmVyZW5jZSA9ICdkaWZmZXJlbmNlJyxcbiAgUGVyY2VudERpZmZlcmVuY2UgPSAncGVyY2VudC1kaWZmZXJlbmNlJyxcbiAgUGVyY2VudE9mVG90YWwgPSAncGVyY2VudC1vZi10b3RhbCcsXG4gIFJhbmsgPSAncmFuaycsXG4gIFBlcmNlbnRpbGUgPSAncGVyY2VudGlsZScsXG4gIE1vdmluZ0F2ZXJhZ2UgPSAnbW92aW5nLWF2ZXJhZ2UnLFxuICBZVERUb3RhbCA9ICd5dGQtdG90YWwnLFxuICBDb21wb3VuZEdyb3d0aFJhdGUgPSAnY29tcG91bmQtZ3Jvd3RoLXJhdGUnLFxuICBZZWFyT3ZlclllYXJHcm93dGggPSAneWVhci1vdmVyLXllYXItZ3Jvd3RoJyxcbiAgWVRER3Jvd3RoID0gJ3l0ZC1ncm93dGgnLFxuICBVbmRlZmluZWQgPSAndW5kZWZpbmVkJ1xufVxuXG4vKipcbiAqIEVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHNlbGVjdGlvbiB0eXBlIGZvciBzZWxlY3QgbWFya3MgYXBpLlxuICovXG5leHBvcnQgZW51bSBTZWxlY3Rpb25VcGRhdGVUeXBlIHtcbiAgUmVwbGFjZSA9ICdzZWxlY3QtcmVwbGFjZScsXG4gIEFkZCA9ICdzZWxlY3QtYWRkJyxcbiAgUmVtb3ZlID0gJ3NlbGVjdC1yZW1vdmUnXG59XG5cbi8qKlxuICogVGhlIHR5cGUgb2Ygc2hlZXQgYSBTaGVldCBvYmplY3QgcmVwcmVzZW50c1xuICovXG5leHBvcnQgZW51bSBTaGVldFR5cGUge1xuICBEYXNoYm9hcmQgPSAnZGFzaGJvYXJkJyxcbiAgU3RvcnkgPSAnc3RvcnknLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0J1xufVxuXG5leHBvcnQgZW51bSBTb3J0RGlyZWN0aW9uIHtcbiAgSW5jcmVhc2luZyA9ICdpbmNyZWFzaW5nJyxcbiAgRGVjcmVhc2luZyA9ICdkZWNyZWFzaW5nJ1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjZXJ0YWluIHR5cGUgb2YgZXZlbnQgd2hpY2ggY2FuIGJlIGxpc3RlbmVkIGZvclxuICovXG5leHBvcnQgZW51bSBUYWJsZWF1RXZlbnRUeXBlIHtcbiAgLyoqIFJhaXNlZCB3aGVuIGFueSBmaWx0ZXIgaGFzIGNoYW5nZWQgc3RhdGUuKi9cbiAgRmlsdGVyQ2hhbmdlZCA9ICdmaWx0ZXItY2hhbmdlZCcsXG5cbiAgLyoqIFRoZSBzZWxlY3RlZCBtYXJrcyBvbiBhIHZpc3VhbGl6YXRpb24gaGFzIGNoYW5nZWQgKi9cbiAgTWFya1NlbGVjdGlvbkNoYW5nZWQgPSAnbWFyay1zZWxlY3Rpb24tY2hhbmdlZCcsXG5cbiAgLyoqIEEgcGFyYW1ldGVyIGhhcyBoYWQgaXRzIHZhbHVlIG1vZGlmaWVkICovXG4gIFBhcmFtZXRlckNoYW5nZWQgPSAncGFyYW1ldGVyLWNoYW5nZWQnLFxuXG4gIC8qKiBTZXR0aW5ncyBoYXZlIGJlZW4gY2hhbmdlZCBmb3IgdGhpcyBleHRlbnNpb24uICovXG4gIFNldHRpbmdzQ2hhbmdlZCA9ICdzZXR0aW5ncy1jaGFuZ2VkJ1xufVxuXG5leHBvcnQgZW51bSBUcmVuZExpbmVNb2RlbFR5cGUge1xuICBMaW5lYXIgPSAnbGluZWFyJyxcbiAgTG9nYXJpdGhtaWMgPSAnbG9nYXJpdGhtaWMnLFxuICBFeHBvbmVudGlhbCA9ICdleHBvbmVudGlhbCcsXG4gIFBvbHlub21pYWwgPSAncG9seW5vbWlhbCdcbn1cblxuLyoqXG4gKiBFbnVtIHRoYXQgcmVwcmVzZW50cyB0aGUgdmlzaWJpbGl0eSBzdGF0ZSBvZiBhIHpvbmVcbiAqIEBzaW5jZSAxLjEuMFxuICovXG5leHBvcnQgZW51bSBab25lVmlzaWJpbGl0eVR5cGUge1xuICAvKiogVXNlZCBmb3IgdHVybmluZyBvbiB0aGUgdmlzaWJpdHkgb2YgYSB6b25lIGluIHRoZSBkYXNoYm9hcmQuKi9cbiAgU2hvdyA9ICdzaG93JyxcblxuICAvKiogVXNlZCBmb3IgdHVybmluZyBvZmYgdGhlIHZpc2liaXR5IG9mIGEgem9uZSBpbiB0aGUgZGFzaGJvYXJkLiovXG4gIEhpZGUgPSAnaGlkZScsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0V4dGVybmFsQ29udHJhY3QvRW51bXMudHMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuTnVtYmVyLmlzSW50ZWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL251bWJlci9pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHsgaXNJbnRlZ2VyOiByZXF1aXJlKCcuL19pcy1pbnRlZ2VyJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0ludGVnZXIoaXQpIHtcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtaW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBlbnVtIEV4dGVuc2lvbkNvbnRleHQge1xuICBEZXNrdG9wID0gJ2Rlc2t0b3AnLFxuICBTZXJ2ZXIgPSAnc2VydmVyJyxcbiAgVW5rbm93biA9ICd1bmtub3duJ1xufVxuXG5leHBvcnQgZW51bSBFeHRlbnNpb25Nb2RlIHtcbiAgQXV0aG9yaW5nID0gJ2F1dGhvcmluZycsXG4gIFZpZXdpbmcgPSAndmlld2luZycsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuZXhwb3J0IGVudW0gQ29sdW1uVHlwZSB7XG4gIERpc2NyZXRlID0gJ2Rpc2NyZXRlJyxcbiAgQ29udGludW91cyA9ICdjb250aW51b3VzJ1xufVxuXG5leHBvcnQgZW51bSBEYXNoYm9hcmRPYmplY3RUeXBlIHtcbiAgQmxhbmsgPSAnYmxhbmsnLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0JyxcbiAgUXVpY2tGaWx0ZXIgPSAncXVpY2stZmlsdGVyJyxcbiAgUGFyYW1ldGVyQ29udHJvbCA9ICdwYXJhbWV0ZXItY29udHJvbCcsXG4gIFBhZ2VGaWx0ZXIgPSAncGFnZS1maWx0ZXInLFxuICBMZWdlbmQgPSAnbGVnZW5kJyxcbiAgVGl0bGUgPSAndGl0bGUnLFxuICBUZXh0ID0gJ3RleHQnLFxuICBJbWFnZSA9ICdpbWFnZScsXG4gIFdlYlBhZ2UgPSAnd2ViLXBhZ2UnLFxuICBFeHRlbnNpb24gPSAnZXh0ZW5zaW9uJ1xufVxuXG5leHBvcnQgZW51bSBEYXRhVHlwZSB7XG4gIFN0cmluZyA9ICdzdHJpbmcnLFxuICBJbnQgPSAnaW50JyxcbiAgRmxvYXQgPSAnZmxvYXQnLFxuICBCb29sID0gJ2Jvb2wnLFxuICBEYXRlID0gJ2RhdGUnLFxuICBEYXRlVGltZSA9ICdkYXRlLXRpbWUnLFxuICBTcGF0aWFsID0gJ3NwYXRpYWwnXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kZWREYXRhVHlwZSB7XG4gIE51bWJlciA9ICdudW1iZXInLFxuICBTdHJpbmcgPSAnc3RyaW5nJyxcbiAgRGF0ZSA9ICdkYXRlJyxcbiAgQm9vbGVhbiA9ICdib29sZWFuJ1xufVxuXG5leHBvcnQgZW51bSBFcnJvckNvZGVzIHtcbiAgSU5JVElBTElaQVRJT05fRVJST1IgPSAnaW5pdGlhbGl6YXRpb24tZXJyb3InLFxuICBJTlRFUk5BTF9FUlJPUiA9ICdpbnRlcm5hbC1lcnJvcicsXG4gIE1JU1NJTkdfRU5VTV9NQVBQSU5HID0gJ21pc3NpbmctZW51bS1tYXBwaW5nJyxcbiAgTUlTU0lOR19QQVJBTUVURVIgPSAnbWlzc2luZy1wYXJhbWV0ZXInLFxuICBQRVJNSVNTSU9OX0RFTklFRCA9ICdwZXJtaXNzaW9uLWRlbmllZCcsXG4gIFBSRVNfTU9ERUxfUEFSU0lOR19FUlJPUiA9ICdwcmVzLW1vZGVsLXBhcnNpbmctZXJyb3InLFxuICBWRVJTSU9OX05PVF9DT05GSUdVUkVEID0gJ3ZlcnNpb24tbm90LWNvbmZpZ3VyZWQnLFxuICBWSVNJQklMSVRZX0VSUk9SID0gJ3Zpc2liaWxpdHktZXJyb3InLFxuICBVTktOT1dOX1ZFUkJfSUQgPSAndW5rbm93bi12ZXJiLWlkJ1xufVxuXG5leHBvcnQgZW51bSBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSB7XG4gIFN1bSA9ICdzdW0nLFxuICBBdmcgPSAnYXZnJyxcbiAgTWluID0gJ21pbicsXG4gIE1heCA9ICdtYXgnLFxuICBTdGRldiA9ICdzdGRldicsXG4gIFN0ZGV2cCA9ICdzdGRldnAnLFxuICBWYXIgPSAndmFyJyxcbiAgVmFycCA9ICd2YXJwJyxcbiAgQ291bnQgPSAnY291bnQnLFxuICBDb3VudGQgPSAnY291bnRkJyxcbiAgTWVkaWFuID0gJ21lZGlhbicsXG4gIEF0dHIgPSAnYXR0cicsXG4gIE5vbmUgPSAnbm9uZScsXG4gIFllYXIgPSAneWVhcicsXG4gIFF0ciA9ICdxdHInLFxuICBNb250aCA9ICdtb250aCcsXG4gIERheSA9ICdkYXknLFxuICBIb3VyID0gJ2hvdXInLFxuICBNaW51dGUgPSAnbWludXRlJyxcbiAgU2Vjb25kID0gJ3NlY29uZCcsXG4gIFdlZWsgPSAnd2VlaycsXG4gIFdlZWtkYXkgPSAnd2Vla2RheScsXG4gIE1vbnRoWWVhciA9ICdtb250aC15ZWFyJyxcbiAgTWR5ID0gJ21keScsXG4gIEVuZCA9ICdlbmQnLFxuICBUcnVuY1llYXIgPSAndHJ1bmMteWVhcicsXG4gIFRydW5jUXRyID0gJ3RydW5jLXF0cicsXG4gIFRydW5jTW9udGggPSAndHJ1bmMtbW9udGgnLFxuICBUcnVuY1dlZWsgPSAndHJ1bmMtd2VlaycsXG4gIFRydW5jRGF5ID0gJ3RydW5jLWRheScsXG4gIFRydW5jSG91ciA9ICd0cnVuYy1ob3VyJyxcbiAgVHJ1bmNNaW51dGUgPSAndHJ1bmMtbWludXRlJyxcbiAgVHJ1bmNTZWNvbmQgPSAndHJ1bmMtc2Vjb25kJyxcbiAgUXVhcnQxID0gJ3F1YXJ0MScsXG4gIFF1YXJ0MyA9ICdxdWFydDMnLFxuICBTa2V3bmVzcyA9ICdza2V3bmVzcycsXG4gIEt1cnRvc2lzID0gJ2t1cnRvc2lzJyxcbiAgSW5PdXQgPSAnaW4tb3V0JyxcbiAgVXNlciA9ICd1c2VyJ1xufVxuXG5leHBvcnQgZW51bSBGaWVsZFJvbGVUeXBlIHtcbiAgRGltZW5zaW9uID0gJ2RpbWVuc2lvbicsXG4gIE1lYXN1cmUgPSAnbWVhc3VyZScsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuLyoqXG4gKiAgVGhlIGRpZmZlcmVudCB1cGRhdGUgdHlwZXMgZm9yIGFwcGx5aW5nIGZpbHRlci5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVXBkYXRlVHlwZSB7XG4gIEFkZCA9ICdhZGQnLFxuICBBbGwgPSAnYWxsJyxcbiAgUmVwbGFjZSA9ICdyZXBsYWNlJyxcbiAgUmVtb3ZlID0gJ3JlbW92ZSdcbn1cblxuZXhwb3J0IGVudW0gU2hlZXRUeXBlIHtcbiAgRGFzaGJvYXJkID0gJ2Rhc2hib2FyZCcsXG4gIFN0b3J5ID0gJ3N0b3J5JyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCdcbn1cblxuZXhwb3J0IGVudW0gRG9tYWluUmVzdHJpY3Rpb25UeXBlIHtcbiAgQWxsID0gJ2FsbCcsXG4gIExpc3QgPSAnbGlzdCcsXG4gIFJhbmdlID0gJ3JhbmdlJ1xufVxuXG5leHBvcnQgZW51bSBEYXRlU3RlcFBlcmlvZCB7XG4gIFllYXJzID0gJ3llYXJzJyxcbiAgUXVhcnRlcnMgPSAncXVhcnRlcnMnLFxuICBNb250aHMgPSAnbW9udGhzJyxcbiAgV2Vla3MgPSAnd2Vla3MnLFxuICBEYXlzID0gJ2RheXMnLFxuICBIb3VycyA9ICdob3VycycsXG4gIE1pbnV0ZXMgPSAnbWludXRlcycsXG4gIFNlY29uZHMgPSAnc2Vjb25kcydcbn1cblxuLyoqXG4gKiBUaGUgb3B0aW9uIGZvciBzcGVjaWZ5aW5nIHdoaWNoIHZhbHVlcyB0byBpbmNsdWRlIGZvciBmaWx0ZXJpbmcuXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlck51bGxPcHRpb24ge1xuICBOdWxsVmFsdWVzID0gJ251bGx2YWx1ZXMnLFxuICBOb25OdWxsVmFsdWVzID0gJ25vbm51bGx2YWx1ZXMnLFxuICBBbGxWYWx1ZXMgPSAnYWxsdmFsdWVzJ1xufVxuXG4vKipcbiAqIFRoZSB0eXBlIG9mIGZpbHRlciBkb21haW5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyRG9tYWluVHlwZSB7XG4gIFJlbGV2YW50ID0gJ3JlbGV2YW50JyxcbiAgRGF0YWJhc2UgPSAnZGF0YWJhc2UnXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgc2VsZWN0aW9uIHR5cGUgZm9yIHNlbGVjdCBtYXJrcyBhcGkuXG4gKi9cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblVwZGF0ZVR5cGUge1xuICBSZXBsYWNlID0gJ3NlbGVjdC1yZXBsYWNlJyxcbiAgQWRkID0gJ3NlbGVjdC1hZGQnLFxuICBSZW1vdmUgPSAnc2VsZWN0LXJlbW92ZSdcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSBpbmNsdWRlZCB2YWx1ZXMgdHlwZSBmb3IgcmFuZ2Ugc2VsZWN0aW9uLlxuICovXG5leHBvcnQgZW51bSBRdWFudGl0YXRpdmVJbmNsdWRlZFZhbHVlcyB7XG4gIEluY2x1ZGVOdWxsID0gJ2luY2x1ZGUtbnVsbCcsXG4gIEluY2x1ZGVOb25OdWxsID0gJ2luY2x1ZGUtbm9uLW51bGwnLFxuICBJbmNsdWRlQWxsID0gJ2luY2x1ZGUtYWxsJ1xufVxuXG4vKipcbiAqIFR5cGUgb2YgbWFyayBmb3IgYSBnaXZlbiBtYXJrcyBjYXJkIGluIGEgdml6LlxuICovXG5leHBvcnQgZW51bSBNYXJrVHlwZSB7XG4gIEJhciA9ICdiYXInLFxuICBMaW5lID0gJ2xpbmUnLFxuICBBcmVhID0gJ2FyZWEnLFxuICBTcXVhcmUgPSAnc3F1YXJlJyxcbiAgQ2lyY2xlID0gJ2NpcmNsZScsXG4gIFNoYXBlID0gJ3NoYXBlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgTWFwID0gJ21hcCcsXG4gIFBpZSA9ICdwaWUnLFxuICBHYW50dEJhciA9ICdnYW50dC1iYXInLFxuICBQb2x5Z29uID0gJ3BvbHlnb24nLFxufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIHR5cGUgb2YgZmlsdGVyXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclR5cGUge1xuICBDYXRlZ29yaWNhbCA9ICdjYXRlZ29yaWNhbCcsXG4gIFJhbmdlID0gJ3JhbmdlJyxcbiAgUmVsYXRpdmVEYXRlID0gJ3JlbGF0aXZlRGF0ZScsXG4gIEhpZXJhcmNoaWNhbCA9ICdoaWVyYXJjaGljYWwnXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgRGF0ZVJhbmdlVHlwZSBvZiBhIHJlbGF0aXZlIGRhdGUgZmlsdGVyXG4gKi9cbmV4cG9ydCBlbnVtIERhdGVSYW5nZVR5cGUge1xuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBsYXN0IGRheSwgd2VlaywgbW9udGgsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgTGFzdCA9ICdsYXN0JyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbGFzdCBOIGRheXMsIHdlZWtzLCBtb250aHMsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgTGFzdE4gPSAnbGFzdE4nLFxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBuZXh0IGRheSwgd2VlaywgbW9udGgsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgTmV4dCA9ICduZXh0JyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byB0aGUgbmV4dCBOIGRheXMsIHdlZWtzLCBtb250aHMsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgTmV4dE4gPSAnbmV4dE4nLFxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBjdXJyZW50IGRheSwgd2VlaywgbW9udGgsIGV0Yy4gb2YgdGhlIGRhdGUgcGVyaW9kLlxuICAgKi9cbiAgQ3VycmVudCA9ICdjdXJyZW50JyxcbiAgLyoqXG4gICAqIFJlZmVycyB0byBldmVyeXRoaW5nIHVwIHRvIGFuZCBpbmNsdWRpbmcgdGhlIGN1cnJlbnQgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBUb0RhdGUgPSAndG9EYXRlJ1xufVxuXG4vKipcbiAqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBsYXVuY2hpbmcgb2YgYW4gZXh0ZW5zaW9uIGRpYWxvZyBzdWNjZWVkZWQgb3IgZmFpbGVkLlxuICovXG5leHBvcnQgZW51bSBFeHRlbnNpb25EaWFsb2dSZXN1bHQge1xuICBEaWFsb2dBbHJlYWR5T3BlbiA9ICdkaWFsb2ctYWxyZWFkeS1vcGVuJyxcbiAgSW52YWxpZERvbWFpbiA9ICdpbnZhbGlkLWRvbWFpbicsXG4gIFN1Y2Nlc3MgPSAnc3VjY2Vzcydcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvRW51bXMudHMiLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL2NvbnRyYWN0L01vZGVscyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JZCB9IGZyb20gJy4uL2NvbnRyYWN0L05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHsgVmVyYklkIH0gZnJvbSAnLi4vY29udHJhY3QvVmVyYnMnO1xuaW1wb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4vVmVyc2lvbk51bWJlcic7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvbk9wdGlvbnMgfSBmcm9tICcuL0luaXRpYWxpemF0aW9uT3B0aW9ucyc7XG5pbXBvcnQgeyBJTlRFUk5BTF9DT05UUkFDVF9WRVJTSU9OIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uSGFuZGxlciA9IChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBFeGVjdXRlUGFyYW1ldGVycyB7XG4gIFtrZXk6IHN0cmluZ106IE1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVSZXNwb25zZSB7XG4gIHJlc3VsdDogTW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uIHtcbiAgbm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkO1xuICBkYXRhOiBNb2RlbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbEFwaURpc3BhdGNoZXIge1xuICBleGVjdXRlKHZlcmI6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT47XG4gIHJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZDtcbiAgdW5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIoaGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlcik6IHZvaWQ7XG59XG5cbi8vIFRoaXMgZmFjdG9yeSBmdW5jdGlvbiB3aWxsIGdldCBjYWxsZWQgZnJvbSB0aGUgZXh0ZXJuYWwgc2lkZSBvZiB0aGluZ3MgdG8gaW5zdGFudGlhdGUgYSBwcm9wZXJseVxuLy8gdmVyc2lvbmVkIEFQSSBkaXNwYXRjaGVyIHdoaWNoIHRoaXMgcGFydGljdWxhciB2ZXJzaW9uIG9mIGV4dGVybmFsIGtub3dzIGhvdyB0byB1c2VcbmV4cG9ydCB0eXBlIEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnkgPSAoaW50ZXJuYWxDb250cmFjdFZlcnNpb246IFZlcnNpb25OdW1iZXIpID0+IEludGVybmFsQXBpRGlzcGF0Y2hlcjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlcjogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PjtcbiAgICBfX3BsYXRmb3JtSXNPZmZpY2lhbFJlbGVhc2U6IGJvb2xlYW47XG4gICAgX193YXJuaW5nSXNzdWVkOiBib29sZWFuO1xuICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgSW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyIHtcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZShvcHRpb25zPzogSW5pdGlhbGl6YXRpb25PcHRpb25zKTogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucy5pc0FscGhhID09PSAndW5kZWZpbmVkJykgJiYgIXdpbmRvdy5fX3dhcm5pbmdJc3N1ZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oJ1RoaXMgaXMgYW4gYWxwaGEgdmVyc2lvbiBvZiB0aGUgRXh0ZW5zaW9ucyBBUEkuIFBsZWFzZSB1cGdyYWRlIHRvIGFuIG9mZmljaWFsIHJlbGVhc2UuJyk7XG4gICAgICB3aW5kb3cuX193YXJuaW5nSXNzdWVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pc0FscGhhISAmJiB3aW5kb3cuX19wbGF0Zm9ybUlzT2ZmaWNpYWxSZWxlYXNlKSB7XG4gICAgICB3aW5kb3cuX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXIudGhlbigoZGlzcGF0Y2hlckZhY3RvcnkpID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXJGYWN0b3J5KElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04pO1xuICAgICAgICBkaXNwYXRjaGVyLmV4ZWN1dGUoVmVyYklkLkJsb2NrRXh0ZW5zaW9uLCB7fSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cuX190YWJsZWF1RGVza3RvcERpc3BhdGNoZXI7XG4gIH1cblxuICAvLyBCZWNhdXNlIHdlIHVzZSB0aGUgYWJzZW5jZSBvZiBvcHRpb25zICB0byBpZGVudGlmeSB2ZXJzaW9ucyA8PSAxLjAuMCB3ZSBtdXN0IHBhc3MgdGhlbSBoZXJlIGFzIHdlbGxcbiAgZXhwb3J0IGZ1bmN0aW9uIGhhc0Rlc2t0b3BBcGlEaXNwYXRjaGVyUHJvbWlzZShvcHRpb25zPzogSW5pdGlhbGl6YXRpb25PcHRpb25zKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhSW50ZXJuYWxBcGlEaXNwYXRjaGVySG9sZGVyLmdldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZShvcHRpb25zKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoZGlzcGF0Y2hlcjogUHJvbWlzZTxJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5Piwgb3B0aW9ucz86IEluaXRpYWxpemF0aW9uT3B0aW9ucyk6IHZvaWQge1xuICAgIHdpbmRvdy5fX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHdpbmRvdy5fX3BsYXRmb3JtSXNPZmZpY2lhbFJlbGVhc2UgPSBvcHRpb25zLnBsYXRmb3JtSXNPZmZpY2lhbFJlbGVhc2UhO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyLnRzIiwiZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uSWQge1xuICBTZWxlY3RlZE1hcmtzQ2hhbmdlZCA9ICdzZWxlY3RlZC1tYXJrcy1jaGFuZ2VkJyxcbiAgUGFyYW1ldGVyQ2hhbmdlZCA9ICdwYXJhbWV0ZXItY2hhbmdlZCcsXG4gIEZpbHRlckNoYW5nZWQgPSAnZmlsdGVyLWNoYW5nZWQnLFxuICBFeHRlbnNpb25EaWFsb2dVcGRhdGUgPSAnZXh0ZW5zaW9uLWRpYWxvZy11cGRhdGUnLFxuICBTZXR0aW5nc0NoYW5nZWQgPSAnc2V0dGluZ3MtY2hhbmdlZCcsXG4gIENvbnRleHRNZW51Q2xpY2sgPSAnY29udGV4dC1tZW51LWNsaWNrJyxcbiAgVGVzdENvbnZlcnNpb25Ob3RpZmljYXRpb24gPSAndGVzdC1jb252ZXJzaW9uLW5vdGlmaWNhdGlvbidcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvTm90aWZpY2F0aW9ucy50cyIsImV4cG9ydCBlbnVtIFBhcmFtZXRlcklkIHtcbiAgRXh0ZW5zaW9uTG9jYXRvciA9ICdleHRlbnNpb24tbG9jYXRvcicsXG4gIEV4dGVuc2lvbkJvb3RzdHJhcEluZm8gPSAnZXh0ZW5zaW9uLWJvb3RzdHJhcC1pbmZvJyxcbiAgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvID0gJ2V4dGVuc2lvbi1zZXR0aW5ncy1pbmZvJyxcbiAgVmlzdWFsSWQgPSAndmlzdWFsLWlkJyxcbiAgU2hlZXRQYXRoID0gJ3NoZWV0LXBhdGgnLFxuICBJZ25vcmVBbGlhc2VzID0gJ2lnbm9yZS1hbGlhc2VzJyxcbiAgSWdub3JlU2VsZWN0aW9uID0gJ2lnbm9yZS1zZWxlY3Rpb24nLFxuICBJbmNsdWRlQWxsQ29sdW1ucyA9ICdpbmNsdWRlLWFsbC1jb2x1bW5zJyxcbiAgTWF4Um93cyA9ICdtYXgtcm93cycsXG4gIFVuZGVybHlpbmdEYXRhVGFibGUgPSAndW5kZXJseWluZy1kYXRhLXRhYmxlJyxcbiAgVW5kZXJseWluZ1N1bW1hcnlEYXRhVGFibGUgPSAndW5kZXJseWluZy1zdW1tYXJ5LWRhdGEtdGFibGUnLFxuICBEYXRhU291cmNlRGF0YVRhYmxlID0gJ2RhdGEtc291cmNlLWRhdGEtdGFibGUnLFxuICBTZXR0aW5nc1ZhbHVlcyA9ICdzZXR0aW5ncy12YWx1ZXMnLFxuICBTZWxlY3RlZERhdGEgPSAnc2VsZWN0ZWQtZGF0YScsXG4gIEhpZ2hsaWdodGVkRGF0YSA9ICdoaWdobGlnaHRlZC1kYXRhJyxcblxuICAvLyBGaWx0ZXIgUGFyYW1zXG4gIEZpZWxkTmFtZSA9ICdmaWVsZC1uYW1lJyxcbiAgRmlsdGVyVmFsdWVzID0gJ2ZpbHRlci12YWx1ZXMnLFxuICBGaWx0ZXJVcGRhdGVUeXBlID0gJ2ZpbHRlci11cGRhdGUtdHlwZScsXG4gIElzRXhjbHVkZU1vZGUgPSAnaXMtZXhjbHVkZScsXG4gIEZpbHRlclJhbmdlTWluID0gJ2ZpbHRlci1yYW5nZS1taW4nLFxuICBGaWx0ZXJSYW5nZU1heCA9ICdmaWx0ZXItcmFuZ2UtbWF4JyxcbiAgRmlsdGVyUmFuZ2VOdWxsT3B0aW9uID0gJ2ZpbHRlci1yYW5nZS1udWxsLW9wdGlvbicsXG4gIFdvcmtzaGVldEZpbHRlcnMgPSAnd29ya3NoZWV0LWZpbHRlcnMnLFxuICBGaWVsZElkID0gJ2ZpZWxkLWlkJyxcbiAgRG9tYWluVHlwZSA9ICdkb21haW4tdHlwZScsXG4gIENhdGVnb3JpY2FsRG9tYWluID0gJ2NhdGVnb3JpY2FsLWRvbWFpbicsXG4gIFF1YW50aXRhdGl2ZURvbWFpbiA9ICdxdWFudGl0YXRpdmUtZG1haW4nLFxuICBGaWVsZCA9ICdmaWVsZCcsXG5cbiAgV29ya3NoZWV0TmFtZSA9ICd3b3Jrc2hlZXQtbmFtZScsXG4gIERhc2hib2FyZE5hbWUgPSAnZGFzaGJvYXJkJyxcblxuICBQYXJhbWV0ZXJJbmZvID0gJ3BhcmFtZXRlci1pbmZvJyxcbiAgUGFyYW1ldGVySW5mb3MgPSAncGFyYW1ldGVyLWluZm9zJyxcbiAgUGFyYW1ldGVyQ2FwdGlvbiA9ICdwYXJlbWV0ZXItY2FwdGlvbicsXG4gIFBhcmFtZXRlckZpZWxkTmFtZSA9ICdwYXJhbWV0ZXItZmllbGQtbmFtZScsXG4gIFBhcmFtZXRlclZhbHVlID0gJ3BhcmFtZXRlci12YWx1ZScsXG4gIFNlbGVjdGlvbiA9ICdzZWxlY3Rpb24nLFxuICBTZWxlY3Rpb25VcGRhdGVUeXBlID0gJ3NlbGVjdGlvblVwZGF0ZVR5cGUnLFxuICBIaWVyVmFsU2VsZWN0aW9uTW9kZWxzID0gJ2hpZXJhcmNoaWNhbFZhbHVlU2VsZWN0aW9uTW9kZWxzJyxcbiAgUXVhbnRSYW5nZVNlbGVjdGlvbk1vZGVscyA9ICdxdWFudGF0aXZlUmFuZ2VTZWxlY3Rpb25Nb2RlbHMnLFxuICBEaW1WYWxTZWxlY3Rpb25Nb2RlbHMgPSAnZGltZW5zaW9uVmFsdWVTZWxlY3Rpb25Nb2RlbHMnLFxuXG4gIEFjdGl2ZVRhYmxlc0luZm8gPSAnYWN0aXZlLXRhYmxlcy1pbmZvJyxcbiAgRGF0YVNvdXJjZSA9ICdkYXRhLXNvdXJjZScsXG4gIERhdGFTb3VyY2VJZCA9ICdkYXRhLXNvdXJjZS1pZCcsXG4gIERlbHRhVGltZU1zID0gJ2RlbHRhLXRpbWUtbXMnLFxuICBTaG91bGRSZWZyZXNoRFMgPSAnc2hvdWxkLXJlZnJlc2gtZHMnLFxuICBEYXRhU2NoZW1hID0gJ2RhdGEtc2NoZW1hJyxcbiAgRGF0YVNvdXJjZU5hbWUgPSAnZGF0YS1zb3VyY2UtbmFtZScsXG4gIENvbHVtbnNUb0luY2x1ZGUgPSAnY29sdW1ucy10by1pbmNsdWRlJyxcbiAgSm9pbkRlc2NyaXB0aW9uID0gJ2pvaW4tZGVzY3JpcHRpb24nLFxuICBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJpZXMgPSAnY29ubmVjdGlvbi1kZXNjcmlwdGlvbi1zdW1tYXJpZXMnLFxuXG4gIEV4dGVuc2lvbkRpYWxvZ1VybCA9ICdleHRlbnNpb24tZGlhbG9nLXVybCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1BheWxvYWQgPSAnZXh0ZW5zaW9uLWRpYWxvZy1wYXlsb2FkJyxcbiAgSXNFeHRlbnNpb25EaWFsb2cgPSAnaXMtZXh0ZW5zaW9uLWRpYWxvZycsXG4gIEV4dGVuc2lvbkRpYWxvZ0ggPSAnZXh0ZW5zaW9uLWRpYWxvZy1oZWlnaHQnLFxuICBFeHRlbnNpb25EaWFsb2dXID0gJ2V4dGVuc2lvbi1kaWFsb2ctd2lkdGgnLFxuICBFeHRlbnNpb25EaWFsb2dSZXN1bHQgPSAnZXh0ZW5zaW9uLWRpYWxvZy1yZXN1bHQnLFxuXG4gIEV4dGVuc2lvbkNvbnRleHRNZW51SWRzID0gJ2V4dGVuc2lvbi1jb250ZXh0LW1lbnUtaWRzJyxcblxuICBUZXN0Q29udmVyc2lvblBhcmFtZXRlciA9ICd0ZXN0LWNvbnZlcnNpb24tcGFyYW1ldGVyJyxcblxuICBEYXNoYm9hcmQgPSAnZGFzaGJvYXJkJyxcbiAgWm9uZUlkc1Zpc2liaWxpdHlNYXAgPSAnem9uZS1pZHMtdmlzaWJpbGl0eS1tYXAnXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvY29udHJhY3QvUGFyYW1ldGVycy50cyIsImltcG9ydCB7IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgKiBhcyBUcmFuc2xhdGlvbnMgZnJvbSAnLi9WZXJzaW9uVHJhbnNsYXRpb25zJztcbmltcG9ydCB7IFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IElkZW50aXR5VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IERvd25ncmFkZVYyV29ya3NoZWV0TmFtZXMgfSBmcm9tICcuL1ZlcnNpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogQHJldHVybnMgdHJ1ZSBpZiBsaHMgPCByaHMgKGlnbm9yaW5nIGZpeCBudW1iZXIpXG4gKiBAcGFyYW0gbGhzXG4gKiBAcGFyYW0gcmhzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBWZXJzaW9uTGVzc1RoYW4obGhzOiBWZXJzaW9uTnVtYmVyLCByaHM6IFZlcnNpb25OdW1iZXIpOiBib29sZWFuIHtcbiAgaWYgKGxocy5tYWpvciA+IHJocy5tYWpvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobGhzLm1ham9yIDwgcmhzLm1ham9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIChsaHMubWlub3IgPCByaHMubWlub3IpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHRydWUgaWYgbGhzID09IHJocyAoaWdub3JpbmcgZml4IG51bWJlcilcbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFZlcnNpb25FcXVhbFRvKGxoczogVmVyc2lvbk51bWJlciwgcmhzOiBWZXJzaW9uTnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAobGhzLm1ham9yID09PSByaHMubWFqb3IpICYmIChsaHMubWlub3IgPT09IHJocy5taW5vcik7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVGhpcyBmdW5jdGlvbiBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbCBub3QgYmUgY2FsbGVkIGZyb20gYXBpLXBsYXRmb3JtIGluIDIwMTkuMisuXG4gKlxuICogQ3JlYXRlcyBhIG5ldyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB3aGljaCBoYXMgdGhlIGFiaWxpdHkgdG8gdXBncmFkZSBhbmQgZG93bmdyYWRlIHRoZSBjb250cmFjdCBiZXR3ZWVuIHRoZSB0d28gdmVyc2lvbnNcbiAqIHdoaWNoIGFyZSBzcGVjaWZpZWQuIElmIGV4dGVybmFsTWFqb3JWZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBwbGF0Zm9ybU1ham9yVmVyc2lvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gYmVjYXVzZVxuICogd2Ugd29uJ3Qga25vdyBob3cgdG8gZG8gdGhvc2UgY29udmVyc2lvbnMuXG4gKlxuICogQHNlZSBDcmVhdGVDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlclxuICpcbiAqIEBwYXJhbSBleHRlcm5hbE1ham9yVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBleHRlcm5hbCBtb2R1bGUgaXMgdXNpbmdcbiAqIEBwYXJhbSBwbGF0Zm9ybU1ham9yVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBwbGF0Zm9ybSBpcyB1c2luZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlVmVyc2lvbkNvbnZlcnRlcihleHRlcm5hbE1ham9yVmVyc2lvbjogbnVtYmVyLCBwbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyKTogSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuXG4gIC8vIEEgbWFwcGluZyBmcm9tIHRoZSBzb3VyY2UgdmVyc2lvbiBvZiBhIG1vZGVsIC0+IHRoZSBuZXh0IHZlcnNpb24gb2YgdGhlIG1vZGVsLiBFYWNoIG1ham9yXG4gIC8vIHZlcnNpb24gYnVtcCBjYW4gaGF2ZSBhbiBhcnJheSBvZiBjb252ZXJzaW9ucyB0byBwZXJmb3JtIGluIG9yZGVyXG4gIGNvbnN0IGV4ZWN1dGVVcGdyYWRlczogeyBbdmVyc2lvbjogbnVtYmVyXTogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4gfSA9IHtcbiAgICAwOiBbXVxuICB9O1xuXG4gIGNvbnN0IGV4ZWN1dGVEb3duZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4gfSA9IHtcbiAgICAwOiBbXSxcbiAgICAxOiBbRG93bmdyYWRlVjJXb3Jrc2hlZXROYW1lc11cbiAgfTtcblxuICBjb25zdCBub3RpZmljYXRpb25Eb3duZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPiB9ID0ge1xuICAgIDA6IFtdXG4gIH07XG5cbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGV4dGVybmFsTWFqb3JWZXJzaW9uKSB8fFxuICAgICFOdW1iZXIuaXNJbnRlZ2VyKHBsYXRmb3JtTWFqb3JWZXJzaW9uKSB8fFxuICAgIGV4dGVybmFsTWFqb3JWZXJzaW9uIDwgMCB8fFxuICAgIHBsYXRmb3JtTWFqb3JWZXJzaW9uIDwgMCkge1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBWZXJzaW9ucyBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXJzOlxuICAgIGV4dGVybmFsTWFqb3JWZXJzaW9uPSR7ZXh0ZXJuYWxNYWpvclZlcnNpb259IHBsYXRmb3JtTWFqb3JWZXJzaW9uPSR7cGxhdGZvcm1NYWpvclZlcnNpb259YCk7XG4gIH1cblxuICBpZiAoZXh0ZXJuYWxNYWpvclZlcnNpb24gPiBwbGF0Zm9ybU1ham9yVmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXh0ZXJuYWwgdmVyc2lvbiBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBwbGF0Zm9ybSB2ZXJzaW9uLlxuICAgIGV4dGVybmFsTWFqb3JWZXJzaW9uPSR7ZXh0ZXJuYWxNYWpvclZlcnNpb259IHBsYXRmb3JtTWFqb3JWZXJzaW9uPSR7cGxhdGZvcm1NYWpvclZlcnNpb259YCk7XG4gIH1cblxuICBpZiAoZXh0ZXJuYWxNYWpvclZlcnNpb24gPT09IHBsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgLy8gSWYgd2UgYXJlIHVzaW5nIHRoZSBleGFjdCBzYW1lIHZlcnNpb25zLCBqdXN0IHVzZSB0aGUgaWRlbnRpdHkgY29udmVydGVyXG4gICAgcmV0dXJuIG5ldyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIoKTtcbiAgfVxuXG4gIC8vIFdhbGsgdGhlIHNwYW4gYmV0d2VlbiB0aGUgdmVyc2lvbnMgd2UgaGF2ZSBoZXJlIGFuZCBjb2xsZWN0IHRoZSB1cGdyYWRlIGFuZCBkb3duZ3JhZGVzIG5lY2Vzc2FyeVxuICBsZXQgbmVlZGVkRXhlY3V0ZVVwZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPiA9IFtdO1xuICBmb3IgKGxldCBpID0gZXh0ZXJuYWxNYWpvclZlcnNpb247IGkgPCBwbGF0Zm9ybU1ham9yVmVyc2lvbjsgaSsrKSB7XG4gICAgaWYgKGkgaW4gZXhlY3V0ZVVwZ3JhZGVzKSB7XG4gICAgICBuZWVkZWRFeGVjdXRlVXBncmFkZXMucHVzaCguLi5leGVjdXRlVXBncmFkZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdhbGsgdGhlIHNwYW4gYmV0d2VlbiB0aGVtIGJhY2t3YXJkcyB0byBnZXQgdGhlIG5lY2Vzc2FyeSBkb3duZ3JhZGVzXG4gIGxldCBuZWVkZWRFeGVjdXRlRG93bmdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+ID0gW107XG4gIGxldCBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPiA9IFtdO1xuICBmb3IgKGxldCBpID0gcGxhdGZvcm1NYWpvclZlcnNpb24gLSAxOyBpID49IGV4dGVybmFsTWFqb3JWZXJzaW9uOyBpLS0pIHtcbiAgICBpZiAoaSBpbiBleGVjdXRlRG93bmdyYWRlcykge1xuICAgICAgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXMucHVzaCguLi5leGVjdXRlRG93bmdyYWRlc1tpXSk7XG4gICAgfVxuXG4gICAgaWYgKGkgaW4gbm90aWZpY2F0aW9uRG93bmdyYWRlcykge1xuICAgICAgbmVlZGVkTm90aWZpY2F0aW9uRG93bmdyYWRlcy5wdXNoKC4uLm5vdGlmaWNhdGlvbkRvd25ncmFkZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyKFxuICAgIGV4dGVybmFsTWFqb3JWZXJzaW9uLCBwbGF0Zm9ybU1ham9yVmVyc2lvbiwgbmVlZGVkRXhlY3V0ZVVwZ3JhZGVzLCBuZWVkZWRFeGVjdXRlRG93bmdyYWRlcywgbmVlZGVkTm90aWZpY2F0aW9uRG93bmdyYWRlcyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFqb3JNaW5vclRyYW5zbGF0b3JzPFQ+IHsgW21ham9yOiBudW1iZXJdOiB7IFttaW5vcjogbnVtYmVyXTogQXJyYXk8VD4gfTsgfVxuXG4vLyBBIG1hcHBpbmcgZnJvbSBhbiBvbGRlciBjbGllbnQgdmVyc2lvbiBvZiBpbnRlcm5hbC1jb250cmFjdCB0byB0aGUgY3VycmVudCBwbGF0Zm9ybSB2ZXJzaW9uIG9mIHRoaXMgY29udHJhY3QuXG4vLyBFYWNoIHZlcnNpb24gYnVtcCBjYW4gaGF2ZSBhbiBhcnJheSBvZiB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBpbiBvcmRlci4gTm90aWNlIHRoYXQgdGhpcyBpc1xuLy8gZGlmZmVyZW50IHRoYW4gdGhlIG1ham9yIHVwZ3JhZGVzL2Rvd25ncmFkZXMgYWJvdmUgYmVjYXVzZSBpdCBoYW5kbGVzIGJvdGggbWFqb3IgYW5kIG1pbm9yIHZlcnNpb24gY2hhbmdlcy5cbi8vIEFsc28gcGxlYXNlIG5vdGU6IGRvd25ncmFkZUV4ZWN1dGVDYWxsIGlzIGhhbmRsZWQgb24gdGhlIGNsaWVudC9leHRlcm5hbCBzaWRlIHJhdGhlciB0aGFuIHBsYXRmb3JtIHNpZGUuXG4vLyBXaGVuIHVwZGF0aW5nIHRoZSBtYWpvciBvciBtaW5vciB2ZXJzaW9uIG9mIG91ciBpbnRlcm5hbC1jb250cmFjdCwgeW91IHdpbGwgbmVlZCB0byB1cGRhdGUgdGhlc2UgZGF0YSBzdHJ1Y3R1cmVzLlxuLy8gKiBJZiB0aGVyZSBhcmUgdHJhbnNsYXRpb25zIHRvIGFkZCwgYWRkIHRoZW0gdG8gdGhlIHZlcnNpb24gdG8gXCJ1cGdyYWRlIGZyb21cIiBvciBcImRvd25ncmFkZSB0b1wiLlxuZXhwb3J0IGNvbnN0IEV4ZWN1dGVNaW5vclVwZ3JhZGVzOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4gPSB7XG4gIDE6IHtcbiAgICA5OiBbXSwgICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBwdXQgdXBncmFkZXMgZnJvbSAxLjkgdG8gMS4xMCBpbiB0aGUgWzFdWzldIGJ1Y2tldFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgRXhlY3V0ZU1pbm9yRG93bmdyYWRlczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiA9IHtcbiAgMToge1xuICAgIDk6IFtdLFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uTWlub3JEb3duZ3JhZGVzOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4gPSB7XG4gIDE6IHtcbiAgICA5OiBbXSxcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHdoaWNoIGhhcyB0aGUgYWJpbGl0eSB0byB1cGdyYWRlIGFuZCBkb3duZ3JhZGUgdGhlIGNvbnRyYWN0IGJldHdlZW4gdGhlIHR3byB2ZXJzaW9uc1xuICogd2hpY2ggYXJlIHNwZWNpZmllZC4gSWYgZXh0ZXJuYWxNYWpvclZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBiZWNhdXNlXG4gKiB3ZSB3b24ndCBrbm93IGhvdyB0byBkbyB0aG9zZSBjb252ZXJzaW9ucy4gQXMgY29tcGFyZWQgdG8gQ3JlYXRlVmVyc2lvbkNvbnZlcnRlciwgdGhpcyBjb252ZXJ0ZXIgY2FuIGFsc28gaGFuZGxlXG4gKiBtaW5vciB1cGRhdGVzLCB3aXRoIHVwZ3JhZGUvZG93bmdyYWRlIGZvciBib3RoIG1ham9yIGFuZCBtaW5vciB1cGRhdGVzLlxuICpcbiAqIEBwYXJhbSBleHRlcm5hbFZlcnNpb24gVmVyc2lvbk51bWJlciBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBleHRlcm5hbCBtb2R1bGUgaXMgdXNpbmdcbiAqIEBwYXJhbSBwbGF0Zm9ybVZlcnNpb24gVmVyc2lvbk51bWJlciBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBwbGF0Zm9ybSBpcyB1c2luZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ29tcGF0aWJsZVZlcnNpb25Db252ZXJ0ZXIoXG4gIGV4dGVybmFsVmVyc2lvbjogVmVyc2lvbk51bWJlcixcbiAgcGxhdGZvcm1WZXJzaW9uOiBWZXJzaW9uTnVtYmVyKTogSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuXG4gIHJldHVybiBDcmVhdGVDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlcldpdGhUcmFuc2xhdG9ycyhcbiAgICBleHRlcm5hbFZlcnNpb24sXG4gICAgcGxhdGZvcm1WZXJzaW9uLFxuICAgIEV4ZWN1dGVNaW5vclVwZ3JhZGVzLFxuICAgIEV4ZWN1dGVNaW5vckRvd25ncmFkZXMsXG4gICAgTm90aWZpY2F0aW9uTWlub3JEb3duZ3JhZGVzKTtcbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBDcmVhdGVDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlci4gVGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgdXBncmFkZSwgZG93bmdyYWRlLCBhbmRcbiAqIG5vdGlmaWNhdGlvbiBhcnJheXMgc28gdGhhdCBhbGwgdGhlIGxvZ2ljIGNhbiBiZSB0ZXN0ZWQuXG4gKlxuICogQHBhcmFtIGV4dGVybmFsVmVyc2lvbiBWZXJzaW9uTnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBhcGkgd2hpY2ggdGhlIGV4dGVybmFsIG1vZHVsZSBpcyB1c2luZ1xuICogQHBhcmFtIHBsYXRmb3JtVmVyc2lvbiBWZXJzaW9uTnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBhcGkgd2hpY2ggdGhlIHBsYXRmb3JtIGlzIHVzaW5nXG4gKiBAcGFyYW0gdXBncmFkZXMgTWFqb3JNaW5vclRyYW5zbGF0b3JzIGZvciB1cGdyYWRlc1xuICogQHBhcmFtIGRvd25ncmFkZXMgTWFqb3JNaW5vclRyYW5zbGF0b3JzIGZvciBkb3duZ3JhZGVzXG4gKiBAcGFyYW0gbm90aWZpY2F0aW9uRG93bmdyYWRlcyBNYWpvck1pbm9yVHJhbnNsYXRvcnMgZm9yIG5vdGlmaWNhdGlvbiBkb3duZ3JhZGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlcldpdGhUcmFuc2xhdG9ycyhcbiAgZXh0ZXJuYWxWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICBwbGF0Zm9ybVZlcnNpb246IFZlcnNpb25OdW1iZXIsXG4gIHVwZ3JhZGVzOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gIGRvd25ncmFkZXM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4sXG4gIG5vdGlmaWNhdGlvbkRvd25ncmFkZXM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPik6IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICBjb25zdCBleHRlcm5hbE1ham9yVmVyc2lvbjogbnVtYmVyID0gZXh0ZXJuYWxWZXJzaW9uLm1ham9yO1xuICBjb25zdCBleHRlcm5hbE1pbm9yVmVyc2lvbjogbnVtYmVyID0gZXh0ZXJuYWxWZXJzaW9uLm1pbm9yO1xuICBjb25zdCBwbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyID0gcGxhdGZvcm1WZXJzaW9uLm1ham9yO1xuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA+IHBsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHRlcm5hbCB2ZXJzaW9uIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHBsYXRmb3JtIHZlcnNpb24uXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIC8vIElmIHdlIGFyZSB1c2luZyB0aGUgZXhhY3Qgc2FtZSB2ZXJzaW9ucyAobWFqb3IubWlub3IpLCBqdXN0IHVzZSB0aGUgaWRlbnRpdHkgY29udmVydGVyXG4gIGlmIChWZXJzaW9uRXF1YWxUbyhleHRlcm5hbFZlcnNpb24sIHBsYXRmb3JtVmVyc2lvbikpIHtcbiAgICByZXR1cm4gbmV3IElkZW50aXR5VmVyc2lvbkNvbnZlcnRlcigpO1xuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZSB2ZXJzaW9ucyB3ZSBoYXZlIGhlcmUgYW5kIGNvbGxlY3QgdGhlIHVwZ3JhZGUgYW5kIGRvd25ncmFkZXMgbmVjZXNzYXJ5XG4gIGxldCBuZWVkZWRFeGVjdXRlVXBncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+ID1cbiAgICBHZXROZWVkZWRUcmFuc2xhdGlvbnMoZXh0ZXJuYWxNYWpvclZlcnNpb24sIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBleHRlcm5hbE1pbm9yVmVyc2lvbiwgdXBncmFkZXMpO1xuXG4gIGxldCBuZWVkZWRFeGVjdXRlRG93bmdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+ID1cbiAgICBHZXROZWVkZWRUcmFuc2xhdGlvbnMoZXh0ZXJuYWxNYWpvclZlcnNpb24sIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBleHRlcm5hbE1pbm9yVmVyc2lvbiwgZG93bmdyYWRlcyk7XG5cbiAgbGV0IG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+ID1cbiAgICBHZXROZWVkZWRUcmFuc2xhdGlvbnMoZXh0ZXJuYWxNYWpvclZlcnNpb24sIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBleHRlcm5hbE1pbm9yVmVyc2lvbiwgbm90aWZpY2F0aW9uRG93bmdyYWRlcyk7XG5cbiAgLy8gV2Ugd2FudCB0byBhcHBseSB0aGUgZG93bmdyYWRlcyBpbiByZXZlcnNlIG9yZGVyIGluIGNhc2Ugb2YgZGVwZW5kZW5jaWVzIGJldHdlZW4gdGhlbVxuICBuZWVkZWRFeGVjdXRlRG93bmdyYWRlcy5yZXZlcnNlKCk7XG4gIG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXMucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIuZnJvbURhdGEoXG4gICAgZXh0ZXJuYWxWZXJzaW9uLCBwbGF0Zm9ybVZlcnNpb24sIG5lZWRlZEV4ZWN1dGVVcGdyYWRlcywgbmVlZGVkRXhlY3V0ZURvd25ncmFkZXMsIG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXMpO1xufVxuXG5mdW5jdGlvbiBHZXROZWVkZWRUcmFuc2xhdGlvbnM8VD4oXG4gIGV4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIsXG4gIHBsYXRmb3JtTWFqb3JWZXJzaW9uOiBudW1iZXIsXG4gIGV4dGVybmFsTWlub3JWZXJzaW9uOiBudW1iZXIsXG4gIG1ham9yTWlub3JUcmFuc2xhdG9yczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFQ+KTogQXJyYXk8VD4ge1xuXG4gIGxldCBuZWVkZWRUcmFuc2xhdGlvbnM6IEFycmF5PFQ+ID0gW107XG5cbiAgZm9yIChsZXQgbWFqb3IgPSBleHRlcm5hbE1ham9yVmVyc2lvbjsgbWFqb3IgPD0gcGxhdGZvcm1NYWpvclZlcnNpb247IG1ham9yKyspIHtcbiAgICBpZiAobWFqb3IgaW4gbWFqb3JNaW5vclRyYW5zbGF0b3JzKSB7XG4gICAgICBsZXQgc3RhcnQgPSAobWFqb3IgPT09IGV4dGVybmFsTWFqb3JWZXJzaW9uKSA/IGV4dGVybmFsTWlub3JWZXJzaW9uIDogMDtcbiAgICAgIGxldCBtYXhpbXVtTWlub3JWZXJzaW9uID0gR2V0TWF4aW11bU1pbm9ySW5kZXgoT2JqZWN0LmtleXMobWFqb3JNaW5vclRyYW5zbGF0b3JzW21ham9yXSkpO1xuICAgICAgZm9yIChsZXQgbWlub3IgPSBzdGFydDsgbWlub3IgPD0gbWF4aW11bU1pbm9yVmVyc2lvbjsgbWlub3IrKykge1xuICAgICAgICBpZiAobWlub3IgaW4gbWFqb3JNaW5vclRyYW5zbGF0b3JzW21ham9yXSkge1xuICAgICAgICAgIG5lZWRlZFRyYW5zbGF0aW9ucy5wdXNoKC4uLm1ham9yTWlub3JUcmFuc2xhdG9yc1ttYWpvcl1bbWlub3JdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZWVkZWRUcmFuc2xhdGlvbnM7XG59XG5cbmZ1bmN0aW9uIEdldE1heGltdW1NaW5vckluZGV4KG1pbm9yVmVyc2lvbnM6IEFycmF5PHN0cmluZz4pOiBudW1iZXIge1xuICByZXR1cm4gbWlub3JWZXJzaW9ucy5tYXAoKGEpID0+IE51bWJlcihhKSkucmVkdWNlKChhLCBiKSA9PiBhID4gYiA/IGEgOiBiKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeS50cyIsImltcG9ydCB7IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBFeGVjdXRlUmVzcG9uc2UsIE5vdGlmaWNhdGlvbiwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBUcmFuc2xhdGlvbnMgZnJvbSAnLi9WZXJzaW9uVHJhbnNsYXRpb25zJztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhlIHZlcnNpb24gY29udmVydGVyIGlzIGRlc2lnbmVkIHRvIGFsbG93IHRoZSBwbGF0Zm9ybSBhbmQgZXh0ZXJuYWwgbW9kdWxlc1xuICogdG8gc2VlbWxlc3NseSBjb21tdW5pY2F0ZSBvdmVyIHR3byBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgdGhlIGludGVybmFsIEFQSS4gVGhlIG9ubHlcbiAqIG1vZGUgaXQgc3VwcG9ydHMgaXMgZXh0ZXJuYWwncyB2ZXJzaW9uIDw9IHBsYXRmb3JtJ3MgdmVyc2lvbi4gV2hlbiBleGVjdXRpbmdcbiAqIGNvbW1hbmRzLCBpdCBpcyB1c2VkIHRvIHVwZ3JhZGUgdGhlIGV4dGVybmFsIHJlcHJlc2VudGF0aW9uIHRvIHdoYXQgcGxhdGZvcm0ga25vd3Mgb24gdGhlIHdheSBpblxuICogYW5kIGRvd25ncmFkZSB0aGUgcmVwcmVzZW50YXRpb25zIG9uIHRoZSB3YXkgb3V0LiBTaW1pbGFybHkgZm9yIG5vdGlmaWNhdGlvbnMsIGl0IGNhblxuICogZG93bmdyYWRlIHRob3NlIG9uIHRoZSB3YXkgZnJvbSBwbGF0Zm9ybSB0byBleHRlcm5hbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXJcbiAgICAqXG4gICAgKiBAcGFyYW0gX2V4dGVybmFsVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgYXBpLWV4dGVybmFsLWpzIGlzIHVzaW5nXG4gICAgKiBAcGFyYW0gX3BsYXRmb3JtVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgdGhlIGFwaS1wbGF0Zm9ybS1qcyBpcyB1c2luZ1xuICAgICogQHBhcmFtIF91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgdGhlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIHdoZW4gdXBncmFkaW5nIGNtZCBwYXJhbWV0ZXJzXG4gICAgKiBAcGFyYW0gX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBhZnRlciBhIGNtZFxuICAgICogQHBhcmFtIF9kb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBvbiBhIG5vdGlmaWNhdGlvblxuICAgICovXG4gIHB1YmxpYyBzdGF0aWMgZnJvbURhdGEoXG4gICAgZXh0ZXJuYWxWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICAgIHBsYXRmb3JtVmVyc2lvbjogVmVyc2lvbk51bWJlcixcbiAgICB1cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gICAgZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICAgIGRvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj5cbiAgKTogU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIHtcbiAgICByZXR1cm4gbmV3IHRoaXMoXG4gICAgICBleHRlcm5hbFZlcnNpb24ubWFqb3IsXG4gICAgICBwbGF0Zm9ybVZlcnNpb24ubWFqb3IsXG4gICAgICB1cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucyxcbiAgICAgIGRvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMsXG4gICAgICBkb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlclxuICAgKlxuICAgKiBAcGFyYW0gX2V4dGVybmFsTWFqb3JWZXJzaW9uIFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCBhcGktZXh0ZXJuYWwtanMgaXMgdXNpbmdcbiAgICogQHBhcmFtIF9wbGF0Zm9ybU1ham9yVmVyc2lvbiBUaGUgbWFqb3IgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QgdGhlIGFwaS1wbGF0Zm9ybS1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiB0aGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gd2hlbiB1cGdyYWRpbmcgY21kIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiBkb3duZ3JhZGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gYWZ0ZXIgYSBjbWRcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBvbiBhIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2V4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcixcbiAgICBwcml2YXRlIF91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gICAgcHJpdmF0ZSBfZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICAgIHByaXZhdGUgX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4pIHtcblxuICAgIGlmICh0aGlzLl9leHRlcm5hbE1ham9yVmVyc2lvbiA+IHRoaXMuX3BsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb252ZXJ0IGJldHdlZW4gZXh0ZXJuYWwgdmVyc2lvbiAke3RoaXMuX2V4dGVybmFsTWFqb3JWZXJzaW9ufSBhbmQgJHt0aGlzLl9wbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZUV4ZWN1dGVDYWxsKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KTogeyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzOyB9IHtcbiAgICAvLyBQZXJmb3JtIHRoZSB1cGdyYWRlIG9mIHRoZSB2ZXJiIGFuZCBwYXJhbWV0ZXJzIHRvIHRoZSBsZXZlbCB0aGF0IHBsYXRmb3JtIGlzIHVzaW5nXG4gICAgbGV0IHVwZ3JhZGVkID0geyB2ZXJiOiB2ZXJiLCBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzIH07XG4gICAgZm9yIChjb25zdCB1cGdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fdXBncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIHVwZ3JhZGVkID0gdXBncmFkZVRyYW5zbGF0aW9uKHVwZ3JhZGVkLnZlcmIsIHVwZ3JhZGVkLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVFeGVjdXRlUmV0dXJuKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKTogRXhlY3V0ZVJlc3BvbnNlIHtcbiAgICAvLyBEb3duZ3JhZGUgdGhlIHJlc3BvbnNlIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IGV4ZWN1dGVSZXNwb25zZTtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMpIHtcbiAgICAgIGRvd25ncmFkZWQgPSBkb3duZ3JhZGVUcmFuc2xhdGlvbihkb3duZ3JhZGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG93bmdyYWRlZDtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAgIC8vIERvd25ncmFkZSB0aGUgbm90aWZpY2F0aW9uIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IG5vdGlmaWNhdGlvbjtcbiAgICBmb3IgKGNvbnN0IGRvd25ncmFkZVRyYW5zbGF0aW9uIG9mIHRoaXMuX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb3duZ3JhZGVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgTm90aWZpY2F0aW9uLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKlxuICogVGhpcyB2ZXJzaW9uIGNvbnZlcnRlciBkb2Vzbid0IGFjdHVhbGx5IGRvIGFueXRoaW5nIGJ1dCBpcyB1c2VmdWwgZm9yIHRlc3Rpbmcgb3Igd2hlbiB3ZSBoYXZlXG4gKiBhIG1hdGNoaW5nIHBsYXRmb3JtIGFuZCBpbnRlcm5hbCB2ZXJzaW9uIG51bWJlclxuKi9cbmV4cG9ydCBjbGFzcyBJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgaW1wbGVtZW50cyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJiOiB2ZXJiIGFzIFZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMgYXMgRXhlY3V0ZVBhcmFtZXRlcnNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIHJldHVybiBleGVjdXRlUmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogTm90aWZpY2F0aW9uIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwiaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlLCBOb3RpZmljYXRpb24sIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMsIEV4dGVuc2lvbkJvb3RzdHJhcEluZm8gfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gd2UgcmVjZWl2ZSBvbGQgdmVycyBhbmQgcGFyYW1ldGVycyBmcm9tIHRoZSBleHRlcm5hbCBiZWZvcmUgd2Ugc2VuZCBpdCB0byBwbGF0Zm9ybSAqL1xuZXhwb3J0IHR5cGUgVXBncmFkZUV4ZWN1dGVDYWxsID1cbiAgKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KSA9PiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgfTtcblxuLyoqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gd2UgcmVjZWl2ZWQgYSByZXNwb25zZSBiYWNrIGZyb20gcGxhdGZvcm0gYW5kIHdlIG5lZWQgdG8gZG93bmdyYWRlIGl0IHRvIGV4dGVybmFsJ3MgdmVyc2lvbiAqL1xuZXhwb3J0IHR5cGUgRG93bmdyYWRlRXhlY3V0ZVJldHVybiA9XG4gIChleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSkgPT4gRXhlY3V0ZVJlc3BvbnNlO1xuXG4vKiogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB3ZSByZWNlaXZlIGEgbm90aWZpY2F0aW9uIGZyb20gcGxhdGZvcm0gYW5kIHdlIG5lZWQgdG8gZG93bmdyYWRlIGl0IHRvIGV4dGVybmFsJ3MgdmVyc2lvbiAqL1xuZXhwb3J0IHR5cGUgRG93bmdyYWRlTm90aWZpY2F0aW9uID1cbiAgKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiBOb3RpZmljYXRpb247XG5cblxuLy8gVGhpcyBpcyB3aGVyZSB3ZSB3aWxsIHN0YXJ0IHRvIGRlZmluZSBzb21lIG9mIHRoZXNlIHRyYW5zbGF0aW9ucy5cbi8vIFdoZW4gbW9kaWZ5aW5nIGV4aXN0aW5nIG1vZGVscywgYWRkIHRoZSByZXF1aXNpdGUgY29udmVyc2lvbiBmdW5jdGlvbnMgaGVyZSwgdGhlbiB1c2UgdGhlbVxuLy8gaW4gdGhlIFZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5IGltcGxlbWVudGF0aW9uLiBJbXBvcnQgb2xkIHZlcnNpb25zIGFzIHlvdSB3b3VsZCBhbnkgb3RoZXIgbW9kdWxlXG5cbi8vIDAgPC0+IFRyYW5zbGF0aW9uc1xuLy8gVW5jb21tZW50IHRoaXMgbGluZSB0byBpbXBvcnQgZnJvbSB0aGUgVjAgZGVmaW5pdGlvbiBvZiB0aGUgQVBJXG4vLyBpbXBvcnQgKiBhcyBWMCBmcm9tICdAdGFibGVhdS1hcGktaW50ZXJuYWwtY29udHJhY3QtanNfdjAnO1xuXG4vLyAxIDwtPiAyIFRyYW5zbGF0aW9uc1xuLy8gVW5jb21tZW50IHRoaXMgbGluZSB0byBpbXBvcnQgZnJvbSB0aGUgVjEgZGVmaW5pdGlvbiBvZiB0aGUgQVBJXG4vLyBpbXBvcnQgKiBhcyBWMSBmcm9tICdAdGFibGVhdS1hcGktaW50ZXJuYWwtY29udHJhY3QtanNfdjEnO1xuXG5leHBvcnQgZnVuY3Rpb24gRG93bmdyYWRlVjJXb3Jrc2hlZXROYW1lcyhleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSk6IEV4ZWN1dGVSZXNwb25zZSB7XG5cbiAgLy8gRml4IHRoZSBkYXNoYm9hcmQgZnJpZW5kbHkgbmFtZSBpc3N1ZS4gVGhlIHN0cnVjdHVyZXMgYXJlIGNvbXBhdGlibGUsXG4gIC8vIHNvIHdlIHN0aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgcmVwbHksIGJ1dCB3ZSBjb3B5IHRoZSBTaGVldEluZm8ubmFtZVxuICAvLyBpbnRvIHRoZSBEYXNoYm9hcmRab25lLm5hbWUsIHdoZXJlIHYxIHdhbnRzIHRvIGZpbmQgaXQuXG5cbiAgbGV0IGJvb3RzdHJhcEluZm8gPSBleGVjdXRlUmVzcG9uc2UucmVzdWx0IGFzIEV4dGVuc2lvbkJvb3RzdHJhcEluZm87XG4gIGlmIChib290c3RyYXBJbmZvLmV4dGVuc2lvbkRhc2hib2FyZEluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgIGJvb3RzdHJhcEluZm8uZXh0ZW5zaW9uRGFzaGJvYXJkSW5mby56b25lcy5mb3JFYWNoKHpvbmUgPT4ge1xuICAgICAgaWYgKHpvbmUuc2hlZXRJbmZvKSB7XG4gICAgICAgIHpvbmUubmFtZSA9IHpvbmUuc2hlZXRJbmZvLm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXhlY3V0ZVJlc3BvbnNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1ZlcnNpb25UcmFuc2xhdGlvbnMudHMiLCJpbXBvcnQgKiBhcyBndWlkIGZyb20gJ2d1aWQnO1xuXG5pbXBvcnQgeyBDcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIENvbW1hbmRNZXNzYWdlLFxuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBJbml0aWFsaXplTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE5vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBNZXNzZW5nZXIgfSBmcm9tICcuL2ludGVyZmFjZS9NZXNzZW5nZXInO1xuaW1wb3J0IHsgUHJlcGFyZWRNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvUHJlcGFyZWRNZXNzYWdlJztcbmltcG9ydCB7XG4gIGlzQ29tbWFuZE1lc3NhZ2UsXG4gIGlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgaXNJbml0TWVzc2FnZSxcbiAgaXNNZXNzYWdlLFxuICBpc05vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vTWVzc2FnZVR5cGVDaGVja3MnO1xuaW1wb3J0IHsgVmVyc2lvbk51bWJlciwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgTW9kZWwsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IEluaXRpYWxpemF0aW9uT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZS9Jbml0aWFsaXphdGlvbk9wdGlvbnMnO1xuXG4vKipcbiAqIFRoZSBDcm9zc0ZyYW1lTWVzc2VuZ2VyIGlzIHRoZSBwcmltYXJ5IGV4cG9ydCBmcm9tIHRoZSBhcGktbWVzc2FnaW5nIG1vZHVsZS4gQW4gaW5zdGFuY2Ugb2ZcbiAqIHRoaXMgY2xhc3MgY2FuIGJlIGluc3RhbnRpYXRlZCBvbiBib3RoIHNpZGVzIG9mIGEgZnJhbWUgYm91bmRhcnkgdG8gZmFjaWxpdGF0ZSBjb21tdW5pY2F0aW9uXG4gKiBpbiBib3RoIGRpcmVjdGlvbnMgYmV0d2VlbiB0aGUgZnJhbWVzLiBUaGlzIGNsYXNzIGltcGxlbWVudHMgYm90aCB0aGUgZGlzcGF0Y2hlciBhbmQgdGhlIGxpc3RlbmVyXG4gKiBwb3J0aW9ucywgYnV0IGRvZXNuJ3QgcmVxdWlyZSBjYWxsZXJzIHRvIGNhcmUgYWJvdXQgYm90aC5cbiAqL1xuZXhwb3J0IGNsYXNzIENyb3NzRnJhbWVNZXNzZW5nZXIgaW1wbGVtZW50cyBNZXNzZW5nZXIge1xuICBwcml2YXRlIHVucmVnaXN0ZXJGdW5jdGlvbjogdW5kZWZpbmVkIHwgKCgpID0+IHZvaWQpO1xuICBwcml2YXRlIGluaXRpYWxpemVNZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IEluaXRpYWxpemVNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG4gIHByaXZhdGUgY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk7XG4gIHByaXZhdGUgY29tbWFuZE1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogQ29tbWFuZE1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBub3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IE5vdGlmaWNhdGlvbk1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDcm9zc0ZyYW1lTWVzc2VuZ2VyLiBJZiB5b3Ugd291bGQgbGlrZSB0byB1c2UgdGhlIENyb3NzRnJhbWVNZXNzZW5nZXIgYXMgYSBNZXNzYWdlTGlzdGVuZXIsXG4gICAqIGJlIHN1cmUgdG8gY2FsbCBTdGFydExpc3RlbmluZyBhbmQgcmVnaXN0ZXIgbWVzc2FnZSBoYW5kbGVycy5cbiAgICogQHBhcmFtIHRoaXNXaW5kb3cgVGhlIHdpbmRvdyBvYmplY3Qgd2hpY2ggdGhlIENyb3NzRnJhbWVNZXNzZW5nZXIgbGl2ZXMuIEFuIG9uTWVzc2FnZSBsaXN0ZW5lciB3aWxsIGJlIGFkZGVkIGhlcmUuXG4gICAqIEBwYXJhbSBbb3RoZXJXaW5kb3ddIE9wdGlvbmFsIG90aGVyV2luZG93IHdoaWNoIG1lc3NhZ2VzIHdpbGwgYmUgcG9zdGVkIHRvLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICBJZiBkZWZpbmVkLCBpbmNvbWluZyBtZXNzYWdlcyBtdXN0IG9yaWdpbmF0ZSBmcm9tIG90aGVyV2luZG93IHRvIGJlIHBhc3NlZCBvblxuICAgKiBAcGFyYW0gW290aGVyV2luZG93T3JpZ2luXSBUaGUgdGFyZ2V0IG9yaWdpbiB3aGljaCBvdGhlcldpbmRvdyBtdXN0IGhhdmUgaW4gb3JkZXIgdG8gcmVjZWl2ZSBkaXNwYXRjaGVkIG1lc3NhZ2VzLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHZhbHVlIHdpbGwgYmUgc2VudCBhcyB0aGUgdGFyZ2V0T3JpZ2luIG9mIGEgcG9zdE1lc3NhZ2VcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvcG9zdE1lc3NhZ2UpXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB0aGlzV2luZG93OiBXaW5kb3csIHByaXZhdGUgb3RoZXJXaW5kb3c/OiBXaW5kb3csIHByaXZhdGUgb3RoZXJXaW5kb3dPcmlnaW4/OiBzdHJpbmcpIHtcbiAgICAvLyBNYWtlIHN1cmUgdG8gY2FsbCBTdGFydExpc3RlbmluZ1xuICB9XG5cbiAgLy8vLy8gTWVzc2FnZUxpc3RlbmVyIEltcGxlbWVudGF0aW9uXG5cbiAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKCk6IHZvaWQge1xuICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgYXJlIGxpc3RlbmluZywgaWYgbm90LCBob29rIHVwIGEgbWVzc2FnZSBsaXN0ZW5lclxuICAgIGlmICghdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGJvdW5kSGFuZGxlciA9IHRoaXMub25NZXNzYWdlUmVjZWl2ZWQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMudGhpc1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgYm91bmRIYW5kbGVyLCB0cnVlKTtcbiAgICAgIHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uID0gKCkgPT4gdGhpcy50aGlzV2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBib3VuZEhhbmRsZXIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdG9wTGlzdGVuaW5nKCk6IHZvaWQge1xuICAgIC8vIFN0b3AgbGlzdGVuaW5nIGlmIHdlIGhhdmUgc3RhcnRlZCBsaXN0ZW5pbmdcbiAgICBpZiAodGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uKCk7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0SW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBJbml0aWFsaXplTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxpemVNZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29tbWFuZE1lc3NhZ2VIYW5kbGVyKGhhbmRsZXI/OiAobXNnOiBDb21tYW5kTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBwdWJsaWMgc2V0Tm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IE5vdGlmaWNhdGlvbk1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25NZXNzYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICAvLy8vLyBNZXNzYWdlRGlzcGF0Y2hlciBJbXBsZW1lbnRhdGlvblxuXG4gIC8qKlxuICAgKiBAcGFyYW0gYXBpVmVyc2lvbiBhcGktaW50ZXJuYWwtY29udHJhY3QtanMgdmVyc2lvbiAoZXhwb3J0ZWQgaW4gSnNBcGlJbnRlcm5hbENvbm50cmFjdClcbiAgICogQHBhcmFtIGNyb3NzRnJhbWVWZXJzaW9uIGNyb3NzZnJhbWUgbWVzc2FnaW5nIHZlcnNpb24gKGV4cG9ydGVkIGluIEpzQXBpSW50ZXJuYWxDb25udHJhY3QpXG4gICAqIEBwYXJhbSBvcHRpb25zIGFkZGl0aW9uYWwgb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgYXQgaW5pdGlhbGl6YXRpb24gKGluZm9ybWF0aW9uIGFib3V0IHRoZSB2ZXJzaW9uIG9mXG4gICAqICAgICAgICAgICAgICAgIGV4dGVybmFsIGJlaW5nIHVzZWQgZm9yIGV4YW1wbGUpXG4gICAqL1xuICBwdWJsaWMgcHJlcGFyZUluaXRpYWxpemF0aW9uTWVzc2FnZShcbiAgICBhcGlWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLCBjcm9zc0ZyYW1lVmVyc2lvbjogVmVyc2lvbk51bWJlciwgb3B0aW9ucz86IEluaXRpYWxpemF0aW9uT3B0aW9ucyk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSxcbiAgICAgIGNyb3NzRnJhbWVWZXJzaW9uOiBjcm9zc0ZyYW1lVmVyc2lvbixcbiAgICAgIGFwaVZlcnNpb246IGFwaVZlcnNpb24sXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVDb21tYW5kTWVzc2FnZSh2ZXJiSWQ6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IENvbW1hbmRNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkNvbW1hbmQsXG4gICAgICB2ZXJiSWQ6IHZlcmJJZCxcbiAgICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUNvbW1hbmRSZXNwb25zZU1lc3NhZ2UoY29tbWFuZEd1aWQ6IHN0cmluZywgZGF0YTogTW9kZWwgfCB1bmRlZmluZWQsIGVycm9yOiBNb2RlbCB8IHVuZGVmaW5lZCk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsXG4gICAgICBjb21tYW5kR3VpZDogY29tbWFuZEd1aWQsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmVOb3RpZmljYXRpb25NZXNzYWdlKG5vdGlmaWNhdGlvbklkOiBOb3RpZmljYXRpb25JZCwgZGF0YTogTW9kZWwpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGNvbnN0IG1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uLFxuICAgICAgbm90aWZpY2F0aW9uSWQ6IG5vdGlmaWNhdGlvbklkLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlcyBhIHBlbmRpbmcgbWVzc2FnZSBmb3Igc2VuZGluZyBhbmQgcmV0dXJucyB0aGUgcHJlcGFyZWQgbWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIGJlIHNlbnQgdG8gdGhpcy5vdGhlcldpbmRvd1xuICAgKiBAcmV0dXJucyBUaGUgcHJlcGFyZWQgbWVzc2FnZVxuICAgKi9cbiAgcHJpdmF0ZSBwcmVwYXJlTWVzc2FnZShtc2c6IE1lc3NhZ2UpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIGlmICghdGhpcy5vdGhlcldpbmRvdyB8fCAhdGhpcy5vdGhlcldpbmRvd09yaWdpbikge1xuICAgICAgdGhyb3cgJ090aGVyIHdpbmRvdyBub3QgaW5pdGlhbGl6ZWQsIGNhbm5vdCBkaXNwYXRjaCBtZXNzYWdlcyc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlcGFyZWRNZXNzYWdlID0gbmV3IENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UobXNnLCB0aGlzLm90aGVyV2luZG93LCB0aGlzLm90aGVyV2luZG93T3JpZ2luKTtcbiAgICByZXR1cm4gcHJlcGFyZWRNZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZC4gRG9lcyBzb21lIHZhbGlkYXRpb24gb2YgdGhlIG1lc3NhZ2UsIGFuZCB0aGVuXG4gICAqIGNhbGxzIGFuIGFwcHJvcHJpYXRlIG1lc3NhZ2UgaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGluY29taW5nIE1lc3NhZ2VFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZChldmVudDogTWVzc2FnZUV2ZW50KTogdm9pZCB7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGFuIG90aGVyV2luZG93IGRlZmluZWQsIG1ha2Ugc3VyZSB0aGUgbWVzc2FnZSBpcyBjb21pbmcgZnJvbSB0aGVyZVxuICAgIGlmICh0aGlzLm90aGVyV2luZG93ICYmIGV2ZW50LnNvdXJjZSAhPT0gdGhpcy5vdGhlcldpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERvIHNvbWUgdmFsaWRhdGlvbiBvbiBldmVudC5kYXRhIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgcmVjZWl2ZWQgYSByZWFsIG1lc3NhZ2VcbiAgICBpZiAoIWV2ZW50LmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YTtcbiAgICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoZSBkZWNsYXJlZCBtZXNzYWdlIHR5cGUsIHZhbGlkYXRlIHRoZSBtZXNzYWdlLCBhbmQgY2FsbCBhbiBhcHByb3ByaWF0ZSBoYW5kZXIgaWYgb25lIGV4aXN0c1xuICAgIHN3aXRjaCAobWVzc2FnZS5tc2dUeXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkluaXRpYWxpemU6IHtcbiAgICAgICAgaWYgKCFpc0luaXRNZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLmluaXRpYWxpemVNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2U6IHtcbiAgICAgICAgaWYgKCFpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db21tYW5kOiB7XG4gICAgICAgIGlmICghaXNDb21tYW5kTWVzc2FnZShtZXNzYWdlKSB8fCAhdGhpcy5jb21tYW5kTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBldmVudC5zb3VyY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uOiB7XG4gICAgICAgIGlmICghaXNOb3RpZmljYXRpb25NZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBldmVudC5zb3VyY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBKdXN0IGlnbm9yZSB0aGlzIHNpbmNlIHdlIGRvbid0IGtub3cgaG93IHRvIGhhbmRsZSB0aGUgbWVzc2FnZSB0eXBlXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lTWVzc2VuZ2VyLnRzIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5pbXBvcnQgeyBQcmVwYXJlZE1lc3NhZ2UgfSBmcm9tICcuL2ludGVyZmFjZS9QcmVwYXJlZE1lc3NhZ2UnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBQcmVwYXJlZE1lc3NhZ2UgaW50ZXJmYWNlIHVzZWQgdG8gcG9zdCBtZXNzYWdlcyBiZXR3ZWVuXG4gKiB0d28gZnJhbWVzIHVzaW5nIHdpbmRvdy5wb3N0TWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZSBpbXBsZW1lbnRzIFByZXBhcmVkTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UuXG4gICAqIEBwYXJhbSBfbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBzZW50XG4gICAqIEBwYXJhbSBfdGFyZ2V0IFRoZSB0YXJnZXQgd2luZG93IHdoZXJlIHRoZSBtZXNzYWdlIHdpbGwgYmUgc2VudFxuICAgKiBAcGFyYW0gX29yaWdpbiBUaGUgdGFyZ2V0T3JpZ2luIHdoZXJlIHRoaXMgbWVzc2FnZSBjYW4gYmUgcmVjZWl2ZWRcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlOiBNZXNzYWdlLCBwcml2YXRlIF90YXJnZXQ6IFdpbmRvdywgcHJpdmF0ZSBfb3JpZ2luOiBzdHJpbmcpIHtcblxuICB9XG5cbiAgcHVibGljIGdldCBtZXNzYWdlR3VpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbWVzc2FnZS5tc2dHdWlkOyB9XG5cbiAgcHVibGljIHNlbmQoKTogUHJlcGFyZWRNZXNzYWdlIHtcbiAgICB0aGlzLl90YXJnZXQucG9zdE1lc3NhZ2UodGhpcy5fbWVzc2FnZSwgdGhpcy5fb3JpZ2luKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS50cyIsImltcG9ydCAqIGFzIGd1aWQgZnJvbSAnZ3VpZCc7XG5cbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvVmVyc2lvbk51bWJlcic7XG5pbXBvcnQge1xuICBDb21tYW5kTWVzc2FnZSxcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgSW5pdGlhbGl6ZU1lc3NhZ2UsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VUeXBlLFxuICBOb3RpZmljYXRpb25NZXNzYWdlLFxufSBmcm9tICcuL2ludGVyZmFjZS9NZXNzYWdlVHlwZXMnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSBuby1hbnkgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01lc3NhZ2UoZGF0YTogTWVzc2FnZSB8IGFueSk6IGRhdGEgaXMgTWVzc2FnZSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkYXRhIGFzIE1lc3NhZ2U7XG4gIGlmICghbWVzc2FnZSB8fCAhbWVzc2FnZS5tc2dHdWlkIHx8ICFtZXNzYWdlLm1zZ1R5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWd1aWQuaXNHdWlkKG1lc3NhZ2UubXNnR3VpZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIG1lc3NhZ2UubXNnVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4gPVxuICAgIFtNZXNzYWdlVHlwZS5Db21tYW5kLCBNZXNzYWdlVHlwZS5Db21tYW5kUmVzcG9uc2UsIE1lc3NhZ2VUeXBlLkluaXRpYWxpemUsIE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbl07XG5cbiAgaWYgKG1lc3NhZ2VUeXBlcy5pbmRleE9mKG1lc3NhZ2UubXNnVHlwZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZlcnNpb24odmVyc2lvbk51bWJlcjogVmVyc2lvbk51bWJlciB8IGFueSk6IHZlcnNpb25OdW1iZXIgaXMgVmVyc2lvbk51bWJlciB7XG4gIGlmICghdmVyc2lvbk51bWJlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHYgPSB2ZXJzaW9uTnVtYmVyIGFzIFZlcnNpb25OdW1iZXI7XG5cbiAgaWYgKHR5cGVvZiB2ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygdi5maXggIT09ICdudW1iZXInIHx8IHR5cGVvZiB2Lm1pbm9yICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygdi5tYWpvciAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5pdE1lc3NhZ2UobWVzc2FnZTogSW5pdGlhbGl6ZU1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIEluaXRpYWxpemVNZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpbml0TWVzc2FnZSA9IG1lc3NhZ2UgYXMgSW5pdGlhbGl6ZU1lc3NhZ2U7XG4gIGlmIChpbml0TWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Jbml0aWFsaXplKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpbml0TWVzc2FnZS5hcGlWZXJzaW9uIHx8ICFpc1ZlcnNpb24oaW5pdE1lc3NhZ2UuYXBpVmVyc2lvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWluaXRNZXNzYWdlLmNyb3NzRnJhbWVWZXJzaW9uIHx8ICFpc1ZlcnNpb24oaW5pdE1lc3NhZ2UuY3Jvc3NGcmFtZVZlcnNpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRSZXNwb25zZU1lc3NhZ2UobWVzc2FnZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY3JNZXNzYWdlID0gbWVzc2FnZSBhcyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlO1xuICBpZiAoY3JNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghZ3VpZC5pc0d1aWQoY3JNZXNzYWdlLmNvbW1hbmRHdWlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghY3JNZXNzYWdlLmRhdGEgJiYgIWNyTWVzc2FnZS5lcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21tYW5kTWVzc2FnZShtZXNzYWdlOiBDb21tYW5kTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgQ29tbWFuZE1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNvbW1hbmRNZXNzYWdlID0gbWVzc2FnZSBhcyBDb21tYW5kTWVzc2FnZTtcbiAgaWYgKGNvbW1hbmRNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkNvbW1hbmQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNvbW1hbmRNZXNzYWdlLnBhcmFtZXRlcnMgfHwgdHlwZW9mIGNvbW1hbmRNZXNzYWdlLnBhcmFtZXRlcnMgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFjb21tYW5kTWVzc2FnZS52ZXJiSWQgfHwgdHlwZW9mIGNvbW1hbmRNZXNzYWdlLnZlcmJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90aWZpY2F0aW9uTWVzc2FnZShtZXNzYWdlOiBOb3RpZmljYXRpb25NZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBOb3RpZmljYXRpb25NZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBub3RpZmljYXRpb25NZXNzYWdlID0gbWVzc2FnZSBhcyBOb3RpZmljYXRpb25NZXNzYWdlO1xuICBpZiAobm90aWZpY2F0aW9uTWVzc2FnZS5tc2dUeXBlICE9PSBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5vdGlmaWNhdGlvbk1lc3NhZ2UuZGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCB8fCB0eXBlb2Ygbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VUeXBlQ2hlY2tzLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRPYmplY3QgfSBmcm9tICcuLi9EYXNoYm9hcmRPYmplY3QnO1xuaW1wb3J0IHtcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbyxcbiAgU2hlZXRQYXRoLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcbmltcG9ydCB7IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyB9IGZyb20gJy4uL0VudW1NYXBwaW5ncy9JbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9Qb2ludCc7XG5pbXBvcnQgeyBTaGVldEltcGwgfSBmcm9tICcuL1NoZWV0SW1wbCc7XG5pbXBvcnQgeyBTaGVldEluZm9JbXBsIH0gZnJvbSAnLi9TaGVldEluZm9JbXBsJztcbmltcG9ydCB7IFpvbmVTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvWm9uZVNlcnZpY2UnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4uL1NpemUnO1xuaW1wb3J0IHsgV29ya3NoZWV0IH0gZnJvbSAnLi4vV29ya3NoZWV0JztcbmltcG9ydCB7IFdvcmtzaGVldEltcGwgfSBmcm9tICcuL1dvcmtzaGVldEltcGwnO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkSW1wbCBleHRlbmRzIFNoZWV0SW1wbCB7XG4gIHByaXZhdGUgX3dvcmtzaGVldHM6IEFycmF5PENvbnRyYWN0LldvcmtzaGVldD47XG4gIHByaXZhdGUgX29iamVjdHM6IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luZm86IEV4dGVuc2lvbkRhc2hib2FyZEluZm8sIHByaXZhdGUgX3NoZWV0UGF0aDogU2hlZXRQYXRoKSB7XG4gICAgc3VwZXIobmV3IFNoZWV0SW5mb0ltcGwoX2luZm8ubmFtZSwgQ29udHJhY3QuU2hlZXRUeXBlLkRhc2hib2FyZCwgbmV3IFNpemUoX2luZm8uc2l6ZS5oLCBfaW5mby5zaXplLncpKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldHMoKTogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9iamVjdHMoKTogQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUludGVybmFsVmFsdWUoZGFzaGJvYXJkLCAnZGFzaGJvYXJkJyk7XG5cbiAgICB0aGlzLl93b3Jrc2hlZXRzID0gbmV3IEFycmF5PFdvcmtzaGVldD4oKTtcbiAgICB0aGlzLl9vYmplY3RzID0gbmV3IEFycmF5PENvbnRyYWN0LkRhc2hib2FyZE9iamVjdD4oKTtcblxuICAgIC8vIFByb2Nlc3MgYWxsIHRoZSB6b25lcyB3aGljaCBhcmUgY29udGFpbmVkIGluIHRoaXMgZGFzaGJvYXJkXG4gICAgZm9yIChjb25zdCB6b25lIG9mIHRoaXMuX2luZm8uem9uZXMpIHtcbiAgICAgIGxldCB3b3Jrc2hlZXQ6IFdvcmtzaGVldCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgICAgY29uc3Qgem9uZVNpemUgPSBuZXcgU2l6ZSh6b25lLmhlaWdodCwgem9uZS53aWR0aCk7XG5cbiAgICAgIGlmICh6b25lLnpvbmVUeXBlID09PSBEYXNoYm9hcmRPYmplY3RUeXBlLldvcmtzaGVldCkge1xuICAgICAgICAvLyB6b25lLnNoZWV0SW5mbyB3YXMgbm90IGluaXRpYWxpemVkIHByaW9yIHRvIGludGVybmFsLWNvbnRyYWN0IDEuNi4wXG4gICAgICAgIGxldCB3b3Jrc2hlZXROYW1lID0gem9uZS5zaGVldEluZm8gPyB6b25lLnNoZWV0SW5mby5uYW1lIDogem9uZS5uYW1lO1xuICAgICAgICBjb25zdCBzaGVldEluZm8gPSBuZXcgU2hlZXRJbmZvSW1wbCh3b3Jrc2hlZXROYW1lLCBDb250cmFjdC5TaGVldFR5cGUuV29ya3NoZWV0LCB6b25lU2l6ZSk7XG4gICAgICAgIGNvbnN0IHZpeklkOiBWaXN1YWxJZCA9IHtcbiAgICAgICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWUsXG4gICAgICAgICAgZGFzaGJvYXJkOiB0aGlzLl9pbmZvLm5hbWUsXG4gICAgICAgICAgc3Rvcnlib2FyZDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5Ym9hcmQsXG4gICAgICAgICAgZmxpcGJvYXJkWm9uZUlEOiB0aGlzLl9zaGVldFBhdGguZmxpcGJvYXJkWm9uZUlELFxuICAgICAgICAgIHN0b3J5UG9pbnRJRDogdGhpcy5fc2hlZXRQYXRoLnN0b3J5UG9pbnRJRFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldEltcGwgPSBuZXcgV29ya3NoZWV0SW1wbChzaGVldEluZm8sIHZpeklkLCBkYXNoYm9hcmQpO1xuICAgICAgICB3b3Jrc2hlZXQgPSBuZXcgV29ya3NoZWV0KHdvcmtzaGVldEltcGwpO1xuICAgICAgICB0aGlzLl93b3Jrc2hlZXRzLnB1c2god29ya3NoZWV0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgem9uZVBvaW50ID0gbmV3IFBvaW50KHpvbmUueCwgem9uZS55KTtcblxuICAgICAgY29uc3QgZGFzaGJvYXJkT2JqZWN0ID0gbmV3IERhc2hib2FyZE9iamVjdChcbiAgICAgICAgZGFzaGJvYXJkLFxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGFzaGJvYXJkT2JqZWN0VHlwZS5jb252ZXJ0KHpvbmUuem9uZVR5cGUpLFxuICAgICAgICB6b25lUG9pbnQsXG4gICAgICAgIHpvbmVTaXplLFxuICAgICAgICB3b3Jrc2hlZXQsXG4gICAgICAgIHpvbmUubmFtZSxcbiAgICAgICAgem9uZS5pc0Zsb2F0aW5nIHx8IGZhbHNlLCAgIC8vIGJlZm9yZSAxLjYuMCB3ZSBkaWRuJ3QgaGF2ZSBpc0Zsb2F0aW5nLCBzbyB3ZSBhc3N1bWUgZmFsc2VcbiAgICAgICAgem9uZS5pc1Zpc2libGUgfHwgdHJ1ZSwgICAgICAvLyBiZWZvcmUgMS42LjAgd2UgZGlkbid0IGhhdmUgaXNWaXNpYmxlLCBzbyB3ZSBhc3N1bWUgdHJ1ZVxuICAgICAgICB6b25lLnpvbmVJZFxuICAgICAgKTtcblxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKGRhc2hib2FyZE9iamVjdCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFpvbmVWaXNpYmlsaXR5QXN5bmMoem9uZVZpc2liaWxpdHlNYXA6IE1hcDxudW1iZXIsIENvbnRyYWN0LlpvbmVWaXNpYmlsaXR5VHlwZT4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB6b25lU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFpvbmVTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5ab25lKTtcblxuICAgIHJldHVybiB6b25lU2VydmljZS5zZXRWaXNpYmlsaXR5QXN5bmMoLypEYXNoYm9hcmQgTmFtZSovIHRoaXMubmFtZSwgdGhpcy5vYmplY3RzLCB6b25lVmlzaWJpbGl0eU1hcCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGFzaGJvYXJkSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBkYXNoYm9hcmQgb2JqZWN0cyAtIHRoZSB6b25lcyBpbiBhIGRhc2hib2FyZC5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXMganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIERhc2hib2FyZE9iamVjdCBpbXBsZW1lbnRzIENvbnRyYWN0LkRhc2hib2FyZE9iamVjdCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kYXNoYm9hcmQ6IENvbnRyYWN0LkRhc2hib2FyZCxcbiAgICBwcml2YXRlIF90eXBlOiBDb250cmFjdC5EYXNoYm9hcmRPYmplY3RUeXBlLFxuICAgIHByaXZhdGUgX3Bvc2l0aW9uOiBDb250cmFjdC5Qb2ludCxcbiAgICBwcml2YXRlIF9zaXplOiBDb250cmFjdC5TaXplLFxuICAgIHByaXZhdGUgX3dvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0IHwgdW5kZWZpbmVkLFxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9pc0Zsb2F0aW5nOiBib29sZWFuLFxuICAgIHByaXZhdGUgX2lzVmlzaWJsZTogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pZDogbnVtYmVyXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCBkYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IENvbnRyYWN0LkRhc2hib2FyZE9iamVjdFR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBwb3NpdGlvbigpOiBDb250cmFjdC5Qb2ludCB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBzaXplKCk6IENvbnRyYWN0LlNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgcHVibGljIGdldCB3b3Jrc2hlZXQoKTogQ29udHJhY3QuV29ya3NoZWV0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0O1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRmxvYXRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRmxvYXRpbmc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNWaXNpYmxlO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkT2JqZWN0LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBQb2ludCBpbXBsZW1lbnRzIENvbnRyYWN0LlBvaW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3g6IG51bWJlciwgcHJpdmF0ZSBfeTogbnVtYmVyKSB7IH1cblxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Qb2ludC50cyIsImltcG9ydCB7IFNoZWV0VHlwZSwgU2l6ZSB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgU2hlZXRQYXRoIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuZXhwb3J0IGNsYXNzIFNoZWV0SW5mb0ltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX3NoZWV0VHlwZTogU2hlZXRUeXBlLFxuICAgIHByaXZhdGUgX3NoZWV0U2l6ZTogU2l6ZVxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFNpemUoKTogU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0U2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRUeXBlKCk6IFNoZWV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0VHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRQYXRoKCk6IFNoZWV0UGF0aCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoZWV0TmFtZTogdGhpcy5uYW1lLFxuICAgICAgaXNEYXNoYm9hcmQ6IHRoaXMuc2hlZXRUeXBlID09PSBTaGVldFR5cGUuRGFzaGJvYXJkXG4gICAgICAvLyBUT0RPIC0gU3Rvcmllc1xuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2hlZXRJbmZvSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgU2l6ZSBpbXBsZW1lbnRzIENvbnRyYWN0LlNpemUge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIsIHByaXZhdGUgX3dpZHRoOiBudW1iZXIpIHsgfVxuXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NpemUudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgU2hlZXQgfSBmcm9tICcuL1NoZWV0JztcbmltcG9ydCB7IFdvcmtzaGVldEltcGwgfSBmcm9tICcuL0ltcGwvV29ya3NoZWV0SW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hlZXQgZXh0ZW5kcyBTaGVldCBpbXBsZW1lbnRzIENvbnRyYWN0LldvcmtzaGVldCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF93b3Jrc2hlZXRJbXBsOiBXb3Jrc2hlZXRJbXBsKSB7XG4gICAgc3VwZXIoX3dvcmtzaGVldEltcGwpO1xuXG4gICAgLy8gQ2FsbCB0byBpbml0aWFsaXplIGV2ZW50cyBhbmQgdGhlbiBjYWxsIGRvd24gdG8gdGhlIGV2ZW50IGxpc3RlbmVyIG1hbmFnZXIgdG8gaGFuZGxlIHRoaW5nc1xuICAgIHRoaXMuX3dvcmtzaGVldEltcGwuaW5pdGlhbGl6ZUV2ZW50cyh0aGlzKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnREYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5wYXJlbnREYXNoYm9hcmQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICBmaWVsZE5hbWU6IHN0cmluZywgdmFsdWVzOiBBcnJheTxzdHJpbmc+LCB1cGRhdGVUeXBlOiBDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlLCBvcHRpb25zOiBDb250cmFjdC5GaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5hcHBseUZpbHRlckFzeW5jKGZpZWxkTmFtZSwgdmFsdWVzLCB1cGRhdGVUeXBlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5EYXRhU291cmNlPj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldERhdGFTb3VyY2VzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0RmlsdGVyc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRTdW1tYXJ5RGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SURBc3luYyhtYXJrc0luZm86IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPiwgdXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlJZEFzeW5jKG1hcmtzSW5mbywgdXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWE+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5zZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5SWRBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5NYXJrSW5mbz4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Xb3Jrc2hlZXQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIERhdGFTY2hlbWEsXG4gIERhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZUluZm8sXG4gIEZpbHRlckV2ZW50LCBOb3RpZmljYXRpb25JZCxcbiAgVmlzdWFsSWQsXG4gIFdvcmtzaGVldERhdGFTb3VyY2VJbmZvXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi9EYXRhU291cmNlJztcbmltcG9ydCB7IFdvcmtzaGVldCB9IGZyb20gJy4uL1dvcmtzaGVldCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi9EYXRhU291cmNlSW1wbCc7XG5pbXBvcnQgeyBTaGVldEltcGwgfSBmcm9tICcuL1NoZWV0SW1wbCc7XG5pbXBvcnQgeyBTaGVldEluZm9JbXBsIH0gZnJvbSAnLi9TaGVldEluZm9JbXBsJztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvRmlsdGVyQ2hhbmdlZEV2ZW50JztcbmltcG9ydCB7IE1hcmtzU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQnO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRmlsdGVyU2VydmljZSc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSwgR2V0RGF0YVR5cGUgfSBmcm9tICcuLi9TZXJ2aWNlcy9HZXREYXRhU2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvTm90aWZpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2VsZWN0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnksIFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuXG5jb25zdCB2aXN1YWxJZHNBcmVFcXVhbCA9IGZ1bmN0aW9uIChhOiBWaXN1YWxJZCwgYjogVmlzdWFsSWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGEgJiYgYiAmJlxuICAgIGEud29ya3NoZWV0ID09PSBiLndvcmtzaGVldCAmJlxuICAgIGEuZGFzaGJvYXJkID09PSBiLmRhc2hib2FyZCAmJlxuICAgIGEuc3Rvcnlib2FyZCA9PT0gYi5zdG9yeWJvYXJkICYmXG4gICAgYS5zdG9yeVBvaW50SUQgPT09IGIuc3RvcnlQb2ludElEICYmXG4gICAgYS5mbGlwYm9hcmRab25lSUQgPT09IGIuZmxpcGJvYXJkWm9uZUlEO1xufTtcblxuZXhwb3J0IGNsYXNzIFdvcmtzaGVldEltcGwgZXh0ZW5kcyBTaGVldEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2hlZXRJbmZvSW1wbDogU2hlZXRJbmZvSW1wbCxcbiAgICBwcml2YXRlIF92aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgcHJpdmF0ZSBfcGFyZW50RGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQpIHtcbiAgICBzdXBlcihzaGVldEluZm9JbXBsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyZW50RGFzaGJvYXJkKCk6IENvbnRyYWN0LkRhc2hib2FyZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERhc2hib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHdoaWNoIGdvZXMgdGhyb3VnaCBhbmQgcmVnaXN0ZXJzIGVhY2ggZXZlbnQgdHlwZSB0aGlzIGltcGwga25vd3MgYWJvdXRcbiAgICogd2l0aCB0aGUgTm90aWZpY2F0aW9uU2VydmljZS4gSXQgcmV0dXJucyBhbiBhcnJheSBvZiBTaW5nbGVFdmVudE1hbmFnZXIgb2JqZWN0cyB3aGljaFxuICAgKiBjYW4gdGhlbiBiZSBwYXNzZWQgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXIgdG8gaGFuZGxlIHVzZXIgcmVnaXN0cmF0aW9uIC8gdW5yZWdpc3RyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7V29ya3NoZWV0fSB3b3Jrc2hlZXQgVGhlIHdvcmtzaGVldCBvYmplY3Qgd2hpY2ggd2lsbCBiZSBpbmNsdWRlZCB3aXRoIHRoZSBldmVudCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+fSBDb2xsZWN0aW9uIG9mIGV2ZW50IG1hbmFnZXJzIHRvIHBhc3MgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplRXZlbnRzKHdvcmtzaGVldDogV29ya3NoZWV0KTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFsbCBvZiB0aGUgZXZlbnQgbWFuYWdlcnMgd2UnbGwgbmVlZCAob25lIGZvciBlYWNoIGV2ZW50IHR5cGUpXG4gICAgY29uc3QgbWFya3NFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPE1hcmtzU2VsZWN0ZWRFdmVudD4oQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5NYXJrU2VsZWN0aW9uQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2VsZWN0ZWRNYXJrc0NoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgdmlzdWFsSWQgPSBtb2RlbCBhcyBWaXN1YWxJZDtcbiAgICAgIHJldHVybiB2aXN1YWxJZHNBcmVFcXVhbCh2aXN1YWxJZCwgdGhpcy52aXN1YWxJZCk7XG4gICAgfSwgKHZpejogVmlzdWFsSWQpID0+IHtcbiAgICAgIG1hcmtzRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBNYXJrc1NlbGVjdGVkRXZlbnQod29ya3NoZWV0KSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWx0ZXJFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPEZpbHRlckNoYW5nZWRFdmVudD4oQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5GaWx0ZXJDaGFuZ2VkKTtcbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5GaWx0ZXJDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlckV2ZW50UmVzcG9uc2UgPSBtb2RlbCBhcyBGaWx0ZXJFdmVudDtcbiAgICAgIHJldHVybiB0aGlzLnZpc3VhbElkLndvcmtzaGVldCA9PT0gZmlsdGVyRXZlbnRSZXNwb25zZS52aXN1YWxJZC53b3Jrc2hlZXQ7XG4gICAgfSwgKGV2ZW50OiBGaWx0ZXJFdmVudCkgPT4ge1xuICAgICAgZmlsdGVyRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBGaWx0ZXJDaGFuZ2VkRXZlbnQod29ya3NoZWV0LCBldmVudC5maWVsZE5hbWUpKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdHMucHVzaChtYXJrc0V2ZW50KTtcbiAgICByZXN1bHRzLnB1c2goZmlsdGVyRXZlbnQpO1xuXG4gICAgLy8gVE9ETyAtIG90aGVyIGV2ZW50IHR5cGVzXG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmlzdWFsSWQoKTogVmlzdWFsSWQge1xuICAgIHJldHVybiB0aGlzLl92aXN1YWxJZDtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlckFzeW5jKFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZXM6IEFycmF5PHN0cmluZz4sIHVwZGF0ZVR5cGU6IENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUsIG9wdGlvbnM6IENvbnRyYWN0LkZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZT4odXBkYXRlVHlwZSwgQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXBwbHlGaWx0ZXJBc3luYyh0aGlzLnZpc3VhbElkLCBmaWVsZE5hbWUsIHZhbHVlcywgdXBkYXRlVHlwZSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlSYW5nZUZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBmaWx0ZXJPcHRpb25zOiBDb250cmFjdC5SYW5nZUZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoZmllbGROYW1lLCAnZmllbGROYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWx0ZXJPcHRpb25zLCAnZmlsdGVyT3B0aW9ucycpO1xuXG4gICAgaWYgKGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbikge1xuICAgICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uPihmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24sIENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBFcnJvckhlbHBlcnMudmVyaWZ5UmFuZ2VQYXJhbVR5cGUoZmlsdGVyT3B0aW9ucy5taW4sIGZpbHRlck9wdGlvbnMubWF4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXBwbHlSYW5nZUZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWVsZE5hbWUsICdmaWVsZE5hbWUnKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5jbGVhckZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0RGF0YVNvdXJjZXNBc3luYyh0aGlzLnZpc3VhbElkKS50aGVuPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PihyZXN1bHQgPT4ge1xuICAgICAgY29uc3QgZGF0YVNjaGVtYTogRGF0YVNjaGVtYSA9IHJlc3VsdCBhcyBEYXRhU2NoZW1hO1xuICAgICAgY29uc3Qgd29ya3NoZWV0RGF0YVNvdXJjZUluZm86IFdvcmtzaGVldERhdGFTb3VyY2VJbmZvID0gZGF0YVNjaGVtYS53b3Jrc2hlZXREYXRhU2NoZW1hTWFwW3RoaXMubmFtZV07XG5cbiAgICAgIGxldCBkYXRhU291cmNlczogQXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4gPSBbXTtcblxuICAgICAgLy8gRmlyc3QsIGFkZCB0aGUgcHJpbWFyeSBkYXRhc291cmNlLiAgQnkgY29udmVudGlvbiwgaXQgY29tZXMgZmlyc3QgaW4gdGhlIHJldHVybmVkIGFycmF5LlxuICAgICAgbGV0IHByaW1hcnlJZDogc3RyaW5nID0gd29ya3NoZWV0RGF0YVNvdXJjZUluZm8ucHJpbWFyeURhdGFTb3VyY2U7XG4gICAgICBkYXRhU291cmNlcy5wdXNoKHRoaXMuY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTY2hlbWEuZGF0YVNvdXJjZXNbcHJpbWFyeUlkXSkpO1xuXG4gICAgICAvLyBUaGVuLCBsb29wIHRocm91Z2ggYW55IHNlY29uZGFyeSBkYXRhIHNvdXJjZXMgYW5kIGFkZCB0aGVtLlxuICAgICAgZm9yIChsZXQgc2Vjb25kYXJ5SWQgb2Ygd29ya3NoZWV0RGF0YVNvdXJjZUluZm8ucmVmZXJlbmNlZERhdGFTb3VyY2VMaXN0KSB7XG4gICAgICAgIGlmIChzZWNvbmRhcnlJZCAhPT0gcHJpbWFyeUlkKSB7XG4gICAgICAgICAgZGF0YVNvdXJjZXMucHVzaCh0aGlzLmNyZWF0ZURhdGFTb3VyY2VGcm9tSW5mbyhkYXRhU2NoZW1hLmRhdGFTb3VyY2VzW3NlY29uZGFyeUlkXSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhU291cmNlcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldEZpbHRlcnNBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRTZWxlY3RlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0SGlnaGxpZ2h0ZWRNYXJrc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIGdldFN1bW1hcnlEYXRhQXN5bmMob3B0aW9uczogQ29udHJhY3QuR2V0U3VtbWFyeURhdGFPcHRpb25zKTogUHJvbWlzZTxDb250cmFjdC5EYXRhVGFibGU+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgICB0aGlzLnZpc3VhbElkLCBHZXREYXRhVHlwZS5TdW1tYXJ5LCAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcywgISFvcHRpb25zLmlnbm9yZVNlbGVjdGlvbiwgdHJ1ZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBzZXJ2aWNlLmdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgICB0aGlzLnZpc3VhbElkLFxuICAgICAgR2V0RGF0YVR5cGUuVW5kZXJseWluZyxcbiAgICAgICEhb3B0aW9ucy5pZ25vcmVBbGlhc2VzLFxuICAgICAgISFvcHRpb25zLmlnbm9yZVNlbGVjdGlvbixcbiAgICAgICEhb3B0aW9ucy5pbmNsdWRlQWxsQ29sdW1ucyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2VsZWN0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLlNlbGVjdGlvbik7XG4gICAgcmV0dXJuIHNlcnZpY2UuY2xlYXJTZWxlY3RlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeVZhbHVlQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuU2VsZWN0aW9uQ3JpdGVyaWE+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNlbGVjdGlvbnMsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGU+KHNlbGVjdGlvblVwZGF0ZVR5cGUsIENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNlbGVjdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5TZWxlY3Rpb24pO1xuICAgIHJldHVybiBzZXJ2aWNlLnNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHRoaXMudmlzdWFsSWQsIHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZWxlY3Rpb25zLCAnZmllbGROYW1lJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlPihzZWxlY3Rpb25VcGRhdGVUeXBlLCBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZWxlY3Rpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uKTtcbiAgICByZXR1cm4gc2VydmljZS5zZWxlY3RNYXJrc0J5SWRBc3luYyh0aGlzLnZpc3VhbElkLCBzZWxlY3Rpb25zLCBzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTb3VyY2VJbmZvOiBEYXRhU291cmNlSW5mbyk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VJbXBsID0gbmV3IERhdGFTb3VyY2VJbXBsKGRhdGFTb3VyY2VJbmZvKTtcbiAgICBjb25zdCBkYXRhU291cmNlID0gbmV3IERhdGFTb3VyY2UoZGF0YVNvdXJjZUltcGwpO1xuICAgIGRhdGFTb3VyY2VJbXBsLmluaXRpYWxpemVXaXRoUHVibGljSW50ZXJmYWNlcyhkYXRhU291cmNlKTtcbiAgICByZXR1cm4gZGF0YVNvdXJjZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9Xb3Jrc2hlZXRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBDb25uZWN0aW9uRGVzY3JpcHRpb25TdW1tYXJ5IH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIGNvbm5lY3Rpb24gc3VtbWFyeS5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXMganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25TdW1tYXJ5IGltcGxlbWVudHMgQ29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfY29ubmVjdGlvbkluZm86IENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnkpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VydmVyVVJJKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnNlcnZlclVSSTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uSW5mby50eXBlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Db25uZWN0aW9uU3VtbWFyeS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVGFibGVJbmZvIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIHRhYmxlIHN1bW1hcnkuXG4gKiBUaGlzIGRvZXMgbm90IGZvbGxvdyB0aGUgSW1wbCBwYXR0ZXJuIGFzIGl0IGlzIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZVN1bW1hcnkgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZVN1bW1hcnkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFibGVJbmZvOiBUYWJsZUluZm8pIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBjb25uZWN0aW9uSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmNvbm5lY3Rpb25JZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VzdG9tU1FMKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5jdXN0b21TUUw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlU3VtbWFyeS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgVGFibGVhdVdvcmtzaGVldEV2ZW50IH0gZnJvbSAnLi9UYWJsZWF1V29ya3NoZWV0RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2hhbmdlZEV2ZW50IGV4dGVuZHMgVGFibGVhdVdvcmtzaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuRmlsdGVyQ2hhbmdlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHdvcmtzaGVldDogQ29udHJhY3QuV29ya3NoZWV0LCBwcml2YXRlIF9maWVsZE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuRmlsdGVyQ2hhbmdlZCwgd29ya3NoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkZpbHRlcj4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQuZ2V0RmlsdGVyc0FzeW5jKCkudGhlbjxDb250cmFjdC5GaWx0ZXI+KGZpbHRlcnMgPT4ge1xuICAgICAgLy8gVE9ETzogRmlsdGVyaW5nIG9mIHRoZSBmaWx0ZXJzIHNob3VsZCBldmVudHVhbGx5IGJlIGRvbmUgcGxhdGZvcm0gc2lkZS5cbiAgICAgIGNvbnN0IGV2ZW50ZWRGaWx0ZXIgPSBmaWx0ZXJzLmZpbmQoKGZpbHRlcikgPT4gKGZpbHRlci5maWVsZE5hbWUgPT09IHRoaXMuX2ZpZWxkTmFtZSkpO1xuXG4gICAgICBpZiAoIWV2ZW50ZWRGaWx0ZXIpIHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkbid0IGhpdCB0aGlzIHVubGVzcyB0aGUgZmlsdGVyIHdhcyByZW1vdmVkIGZyb20gdGhlIHdvcmtzaGVldFxuICAgICAgICAvLyBhZnRlciB0aGUgZXZlbnQgd2FzIHJhaXNlZC5cbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLk1pc3NpbmdGaWx0ZXIsIGBjYW5ub3QgZmluZCBmaWx0ZXI6ICR7dGhpcy5fZmllbGROYW1lfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnRlZEZpbHRlcjtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL0ZpbHRlckNoYW5nZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVXb3Jrc2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBNYXJrc1NlbGVjdGVkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5NYXJrc1NlbGVjdGVkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3Iod29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQpIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLk1hcmtTZWxlY3Rpb25DaGFuZ2VkLCB3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy53b3Jrc2hlZXQuZ2V0U2VsZWN0ZWRNYXJrc0FzeW5jKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9NYXJrc1NlbGVjdGVkRXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHtcbiAgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSxcbiAgQ3Jvc3NGcmFtZU1lc3NlbmdlcixcbiAgTUVTU0FHSU5HX1ZFUlNJT04gYXMgQXBpTWVzc2FnaW5nVmVyc2lvbixcbiAgSW5pdGlhbGl6YXRpb25PcHRpb25zLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBDcm9zc0ZyYW1lRGlzcGF0Y2hlciB9IGZyb20gJy4vQ3Jvc3NGcmFtZURpc3BhdGNoZXInO1xuXG4vLyBDaGVja3MgdG8gc2VlIGlmIHdlIGFyZSBydW5uaW5nIGluIGFuIGlmcmFtZSBjdXJyZW50bHk6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMjYwNzYvODgyMTE1M1xuZnVuY3Rpb24gaW5JZnJhbWUodGhpc1dpbmRvdzogV2luZG93KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHRoaXNXaW5kb3cuc2VsZiAhPT0gdGhpc1dpbmRvdy5wYXJlbnQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGJvb3RzdHJhcCB0aGUgZXh0ZW5zaW9uIHdpdGggYSBjcm9zcy1mcmFtZSBwYXJlbnQgd2hlcmUgVGFibGVhdSBpcyBydW5uaW5nXG4gKlxuICogQHBhcmFtIHRoaXNXaW5kb3cgVGhlIHdpbmRvdyB3aGljaCB3ZSBhcmUgcnVubmluZyBpbiAoaW5qZWN0ZWQgZm9yIHVuaXQgdGVzdGluZyBwdXJwb3NlcylcbiAqIEBwYXJhbSBpbnRlcm5hbENvbnRyYWN0VmVyc2lvbiBUaGUgdmVyc2lvbiBudW1iZXIgb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IHdlIGFyZSB1c2luZ1xuICogQHJldHVybnMgQSBwcm9taXNlIHdoaWNoIGlzIGRvaW5nIHRoZSBhY3R1YWwgYm9vdHN0cmFwcGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwKFxuICB0aGlzV2luZG93OiBXaW5kb3csIGludGVybmFsQ29udHJhY3RWZXJzaW9uOiBDb250cmFjdC5WZXJzaW9uTnVtYmVyLCBvcHRpb25zOiBJbml0aWFsaXphdGlvbk9wdGlvbnMpXG4gIDogUHJvbWlzZTxDb250cmFjdC5JbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlPENvbnRyYWN0LkludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgIGxldCBwYXJlbnQ6IFdpbmRvdztcblxuICAgIC8vIE5vcm1hbGx5LCB3ZSBhcmUgcnVubmluZyBpbnNpZGUgYW4gaWZyYW1lLiAgVGhlIGV4Y2VwdGlvbiB0byB0aGlzIGlzXG4gICAgLy8gd2hlbiB3ZSBhcmUgcnVubmluZyBhcyBhbiBleHRlbnNpb24gaW5zaWRlIGEgZGlhbG9nIGFzIHBhcnQgb2YgdGhlIFVJTmFtZXNwYWNlXG4gICAgLy8gZnVuY3Rpb25hbGl0eS4gIEluIHRoYXQgY2FzZSwgd2Ugd2FudCB0aGUgb3BlbmVyIG9mIHRoaXMgd2luZG93IHJhdGhlciB0aGFuIHRoZSBwYXJlbnQuXG4gICAgaWYgKCFpbklmcmFtZSh0aGlzV2luZG93KSkge1xuICAgICAgcGFyZW50ID0gdGhpc1dpbmRvdy5vcGVuZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IHRoaXNXaW5kb3cucGFyZW50O1xuICAgIH1cblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICByZWplY3QoJ1RoaXMgZXh0ZW5zaW9uIGlzIG5vdCBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUsIGRlc2t0b3AsIG9yIHBvcHVwIHdpbmRvdy4gSW5pdGlhbGl6YXRpb24gZmFpbGVkLicpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgbWVzc2VuZ2VyIHdoaWNoIHdpbGwgZG8gaGUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoaXMgd2luZG93IGFuZCBvdXIgcGFyZW50XG4gICAgLy8gU2luY2Ugd2UgZG9uJ3Qga25vdyB3aGVyZSB3ZSBhcmUgcnVubmluZyB5ZXQsIHdlIGhhdmUgdG8gbWFrZSB0aGlzIGluaXRpYWwgb3JpZ2luICcqJy4gT25jZVxuICAgIC8vIHdlIGhhdmUgc3VjY2Vzc2Z1bGx5IGluaXRpYWxpemVkIG91ciBleHRlbnNpb24sIHdlIHdpbGwgbGltaXQgd2hlcmUgd2Ugc2VuZCBtZXNzYWdlc1xuICAgIGNvbnN0IG1lc3NlbmdlciA9IG5ldyBDcm9zc0ZyYW1lTWVzc2VuZ2VyKHRoaXNXaW5kb3csIHBhcmVudCwgJyonKTtcblxuICAgIC8vIFByZXBhcmUgdG8gc2VuZCBhbiBpbml0aWFsaXphdGlvbiBtZXNzYWdlIHRvIHRoZSBwYXJlbnQgZnJhbWVcbiAgICBjb25zdCBpbml0aWFsaXphdGlvbk1lc3NhZ2UgPVxuICAgICAgbWVzc2VuZ2VyLnByZXBhcmVJbml0aWFsaXphdGlvbk1lc3NhZ2UoaW50ZXJuYWxDb250cmFjdFZlcnNpb24sIEFwaU1lc3NhZ2luZ1ZlcnNpb24sIG9wdGlvbnMpO1xuXG4gICAgLy8gV2hlbiB3ZSByZWNlaXZlIGEgcmVzcG9uc2UgYmFjayBmcm9tIHRoZSBwYXJlbnQsIHdlIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgZ3VpZHMgbWF0Y2ggYW5kIHRoZW4gd2Uga25vd1xuICAgIC8vIHRoYXQgdGhlIHBhcmVudCBpcyBhd2FyZSBvZiB1cyBhbmQgd2UgY2FuIHN0YXJ0IGNvbW11bmljYXRpbmdcbiAgICBtZXNzZW5nZXIuc2V0Q29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIoZnVuY3Rpb24gKG1zZzogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSk6IHZvaWQge1xuXG4gICAgICAvLyBWZXJpZnkgd2UgYXJlIGdldHRpbmcgYSByZXNwb25zZSBmcm9tIG91ciBpbml0aWFsaXplIG1lc3NhZ2VcbiAgICAgIGlmIChtc2cuY29tbWFuZEd1aWQgPT09IGluaXRpYWxpemF0aW9uTWVzc2FnZS5tZXNzYWdlR3VpZCkge1xuXG4gICAgICAgIC8vIEZvciBzZXJ2ZXIsIHRoZSB2ZXJzaW9uaW5nIG9mIHRoZSBmYWN0b3J5IGlzIGdvbm5hIGhhcHBlbiBvbiB0aGUgb3RoZXIgc2lkZSBvZiBvdXIgZnJhbWUsIHNvIGp1c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvbmUgd2hpY2ggZG9lc24ndCBoYXZlIGFueSB2ZXJzaW9uIGtub3dsZWRnZVxuICAgICAgICBjb25zdCBkaXNwYXRjaGVyRmFjdG9yeSA9ICgpID0+IG5ldyBDcm9zc0ZyYW1lRGlzcGF0Y2hlcihtZXNzZW5nZXIpO1xuICAgICAgICByZXNvbHZlKGRpc3BhdGNoZXJGYWN0b3J5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE5vdyB0aGF0IG91ciBoYW5kbGVycyBhcmUgcmVhZHksIHN0YXJ0IGxpc3RlbmluZyBhbmQgc2VuZCBvdXIgaW5pdGlhbGl6YXRpb24gbWVzc2FnZVxuICAgIG1lc3Nlbmdlci5zdGFydExpc3RlbmluZygpO1xuICAgIGluaXRpYWxpemF0aW9uTWVzc2FnZS5zZW5kKCk7XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lQm9vdHN0cmFwLnRzIiwiaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4ZWN1dGVSZXNwb25zZSxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxuICBNb2RlbCxcbiAgTm90aWZpY2F0aW9uSGFuZGxlcixcbiAgVmVyYklkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSwgTWVzc2VuZ2VyLCBOb3RpZmljYXRpb25NZXNzYWdlIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBJbnRlcm5hbEFwaURpc3BhdGNoZXIgaW50ZXJmYWNlIHdoaWNoIGZ1bmN0aW9ucyBieSBwYXNzaW5nIG1lc3NhZ2VzXG4gKiBhY3Jvc3MgYSBmcmFtZSBib3VuZGFyeS4gVGhpcyBpcyB1c3VhbGx5IGJldHdlZW4gdGhlIGNvZGUgd2hlcmUgb3VyIGphdnNjcmlwdCBsaWJyYXJ5IGhhcyBiZWVuIGluY2x1ZGVkXG4gKiBieSBhIDNyZCBwYXJ0eSBkZXYgYW5kIGFub3RoZXIgZnJhbWUgd2hlcmUgVGFibGVhdSBzZXJ2ZXIgaGFzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lRGlzcGF0Y2hlciBpbXBsZW1lbnRzIEludGVybmFsQXBpRGlzcGF0Y2hlciB7XG5cbiAgLy8gQ29sbGVjdGlvbiBvZiBwZW5kaW5nIHByb21pc2VzIHdoaWNoIGFyZSB3YWl0aW5nIHRvIGJlIHJlc29sdmVkLiBXaGVuIHdlIHJlY2VpdmUgYSByZXNwb25zZSBiYWNrIGZyb20gdGhlIG90aGVyIGZyYW1lLFxuICAvLyB0aGVzZSBwcm9taXNlcyBjYW4gYmUgZWl0aGVyIHJlc29sdmVkIG9yIHJlamVjdGVkXG4gIHByaXZhdGUgX3BlbmRpbmdQcm9taXNlczpcbiAgICB7IFttZXNzYWdlR3VpZDogc3RyaW5nXTogeyByZXNvbHZlOiAocmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSkgPT4gdm9pZCwgcmVqZWN0OiAoZXJyb3I6IE1vZGVsKSA9PiB2b2lkIH0gfSA9IHt9O1xuXG4gIC8vIFRoZSBjb2xsZWN0aW9uIG9mIG5vdGlmaWNhdGlvbiBoYW5kbGVycyB3aGljaCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB3aXRoIHRoaXMgZGlzcGF0Y2hlclxuICBwcml2YXRlIF9ub3RpZmljYXRpb25IYW5kbGVyczogQXJyYXk8Tm90aWZpY2F0aW9uSGFuZGxlcj4gPSBbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDcm9zc0ZyYW1lRGlzcGF0Y2hlciB3aGljaCB3aWxsIHVzZSB0aGUgZ2l2ZW4gbWVzc2VuZ2VyIHRvIGNvbW11bmljYXRlXG4gICAqIEBwYXJhbSBfbWVzc2VuZ2VyIGFuIGluc3RhbnRpYXRlZCBhbmQgbGlzdGVuaW5nIG1lc3NlbmdlciBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzZW5nZXI6IE1lc3Nlbmdlcikge1xuICAgIGlmICghdGhpcy5fbWVzc2VuZ2VyKSB7XG4gICAgICB0aHJvdyAnTWlzc2luZyBtZXNzZW5nZXIgb2JqZWN0JztcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgb3VyIG1lc3NhZ2UgaGFuZGxlcnMuIFdlIG9ubHkgY2FyZSBhYm91dCBpbmNvbWluZyBub3RpZmljYXRpb25zIGFuZCBjb21tYW5kIHJlc3BvbnNlc1xuICAgIHRoaXMuX21lc3Nlbmdlci5zZXRDb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcih0aGlzLm9uQ29tbWFuZFJlc3BvbnNlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX21lc3Nlbmdlci5zZXROb3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcih0aGlzLm9uTm90aWZpY2F0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLy8vLy8vIFN0YXJ0IEludGVybmFsQXBpRGlzcGF0Y2hlciBpbXBsZW1lbnRhdGlvblxuXG4gIHB1YmxpYyBleGVjdXRlKHZlcmI6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT4ge1xuICAgIC8vIFRvIGV4ZWN1dGUgYSB2ZXJiLCB3ZSBmaXJzdCBwcmVwYXJlIGEgY29tbWFuZCBtZXNzYWdlIGFuZCB0aGVuIGRlZmluZSBhIHByb21pc2UuXG4gICAgY29uc3QgcHJlcGFyZWRNZXNzYWdlID0gdGhpcy5fbWVzc2VuZ2VyLnByZXBhcmVDb21tYW5kTWVzc2FnZSh2ZXJiLCBwYXJhbWV0ZXJzKTtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIC8vIFNhdmUgb2ZmIHRoZSBwZW5kaW5nIHByb21pc2UgYnkgdGhlIG1lc3NhZ2VHdWlkIHdlIGFyZSBhYm91dCB0byBzZW5kLiBXaGVuIGEgcmVzcG9uc2UgaXNcbiAgICAgIC8vIHJlY2VpdmVkLCB3ZSdsbCBiZSBhYmxlIHRvIHJlc29sdmUgdGhpcyBwcm9taXNlIHdpdGggdGhlIHJlc3VsdFxuICAgICAgdGhpcy5fcGVuZGluZ1Byb21pc2VzW3ByZXBhcmVkTWVzc2FnZS5tZXNzYWdlR3VpZF0gPSB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH07XG4gICAgfSk7XG5cbiAgICAvLyBBY3R1YWxseSBzZW5kIHRoZSBtZXNzYWdlIGFuZCByZXR1cm4gdGhlIHByb21pc2VcbiAgICBwcmVwYXJlZE1lc3NhZ2Uuc2VuZCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyB1bnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMgPSB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycy5maWx0ZXIoaCA9PiBoICE9PSBoYW5kbGVyKTtcbiAgfVxuXG4gIC8vLy8vLyBFbmQgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIGltcGxlbWVudGF0aW9uXG5cbiAgcHJpdmF0ZSBvbkNvbW1hbmRSZXNwb25zZShyZXNwb25zZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSk6IHZvaWQge1xuICAgIC8vIFdlIGdvdCBhIGNvbW1hbmQgcmVzcG9uc2UsIGxvb2sgdGhyb3VnaCB0aGUgcGVuZGluZyBwcm9taXNlcyBhbmQgcmVzb2x2ZVxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wZW5kaW5nUHJvbWlzZXMpLmluZGV4T2YocmVzcG9uc2UuY29tbWFuZEd1aWQpIDwgMCkge1xuICAgICAgcmV0dXJuOyAvLyBXZSBkb24ndCBoYXZlIGFueSByZWZlcmVuY2UgdG8gdGhpcyBjb21tYW5kLCBqdXN0IHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBlbmRpbmdQcm9taXNlID0gdGhpcy5fcGVuZGluZ1Byb21pc2VzW3Jlc3BvbnNlLmNvbW1hbmRHdWlkXTtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gZXJyb3IgZGVmaW5lZCwgcmVqZWN0IHRoZSBwcm9taXNlXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICBwZW5kaW5nUHJvbWlzZS5yZWplY3QocmVzcG9uc2UuZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgZGF0YSBkZWZpbmVkLCByZXNvbHZlIHRoZSBwcm9taXNlXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHBlbmRpbmdQcm9taXNlLnJlc29sdmUoeyByZXN1bHQ6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgb3VyIHBlbmRpbmcgcHJvbWlzZXMgb2JqZWN0XG4gICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdQcm9taXNlc1tyZXNwb25zZS5jb21tYW5kR3VpZF07XG4gIH1cblxuICBwcml2YXRlIG9uTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UpOiB2b2lkIHtcbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggbm90aWZpY2F0aW9uIGhhbmRsZXIgd2UgaGF2ZSByZWdpc3RlcmVkIGFuZCBsZXQgdGhlbSBrbm93IGEgbm90aWZpY2F0aW9uIGNhbWUgaW5cbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGhhbmRsZXIoeyBub3RpZmljYXRpb25JZDogbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCwgZGF0YTogbm90aWZpY2F0aW9uTWVzc2FnZS5kYXRhIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJZ25vcmUgdGhpcy4gV3JhcCBpbiB0cnkvY2F0Y2ggc28gaWYgb25lIGhhbmRsZXIgZXJyb3JzLCB0aGUgb3RoZXIgc3RpbGwgZ2V0IHRoZSBtZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVEaXNwYXRjaGVyLnRzIiwiaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5IH0gZnJvbSAnLi9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL0RhdGFTb3VyY2VTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvUGFyYW1ldGVyc1NlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL1NlbGVjdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFpvbmVTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9ab25lU2VydmljZUltcGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyhkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpOiB2b2lkIHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgRGF0YVNvdXJjZVNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgR2V0RGF0YVNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgRmlsdGVyU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFBhcmFtZXRlcnNTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFNlbGVjdGlvblNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgWm9uZVNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnksXG4gIERhdGFTY2hlbWEsXG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBQYXJhbWV0ZXJJZCxcbiAgVGFibGVJbmZvLFxuICBUYWJsZUluZm9zLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9GaWVsZCc7XG5pbXBvcnQgeyBGaWVsZEltcGwgfSBmcm9tICcuLi8uLi9JbXBsL0ZpZWxkSW1wbCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9EYXRhU291cmNlJztcbmltcG9ydCB7IERhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi4vLi4vSW1wbC9EYXRhU291cmNlSW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBEYXRhU291cmNlU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYyhkYXRhU291cmNlSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5EZWx0YVRpbWVNc106IDAsXG4gICAgICBbUGFyYW1ldGVySWQuU2hvdWxkUmVmcmVzaERTXTogdHJ1ZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5SZWZyZXNoRGF0YVNvdXJjZSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVGFibGVzQXN5bmMoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFRhYmxlSW5mbz4+IHtcbiAgICBjb25zdCBqb2luUGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQgfTtcblxuICAgIC8vIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhYmxlcyB1c2VkIGJ5IHRoaXMgY29ubmVjdGlvblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldEFjdGl2ZVRhYmxlcywgam9pblBhcmFtZXRlcnMpLnRoZW48QXJyYXk8VGFibGVJbmZvPj4oam9pblJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHRhYmxlSW5mb3MgPSBqb2luUmVzcG9uc2UucmVzdWx0IGFzIFRhYmxlSW5mb3M7XG5cbiAgICAgIC8vIGdldEFjdGl2ZVRhYmxlcyBpcyB1bnN1cHBvcnRlZCBmb3IgY3ViZXMgYW5kIEdBLiBXZSBkbyBub3QgaGF2ZSBhIGNvbm5lY3Rpb24gdHlwZSBwcm9wZXJ0eVxuICAgICAgLy8gYXZhaWxhYmxlIGZyb20gdGhlIHBsYXRmb3JtIChpbnRlbnRpb25hbGx5LCB0byByZWR1Y2UgY29kZSBjaHVybiBhcyBuZXcgY29ubmVjdGlvbnMgYXJlIGFkZGVkKS5cbiAgICAgIC8vIEluc3RlYWQsanVzdCBjaGVjayBpZiBhbnkgdGFibGVzIGFyZSByZXR1cm5lZC4gVGhpcyBhcnJheSB3aWxsIGJlIGVtcHR5IGZvciBhbnkgbm9uLXRhYmxlIGJhc2VkIGRhdGFzb3VyY2UuXG4gICAgICBpZiAodGFibGVJbmZvcy50YWJsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5VbnN1cHBvcnRlZE1ldGhvZEZvckRhdGFTb3VyY2VUeXBlLFxuICAgICAgICAgIGBnZXRBY3RpdmVUYWJsZXMgaXMgbm90IHN1cHBvcnRlZCBmb3I6ICR7ZGF0YVNvdXJjZUlkfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFibGVJbmZvcy50YWJsZXM7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPERhdGFTY2hlbWE+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXREYXRhU291cmNlcywgcGFyYW1ldGVycykudGhlbjxEYXRhU2NoZW1hPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkYXRhU2NoZW1hID0gcmVzcG9uc2UucmVzdWx0IGFzIERhdGFTY2hlbWE7XG4gICAgICByZXR1cm4gZGF0YVNjaGVtYTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBQcm9taXNlPENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXT4ge1xuICAgIGNvbnN0IHBhcmFtczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQgfTtcblxuICAgIC8vIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhYmxlcyB1c2VkIGJ5IHRoaXMgY29ubmVjdGlvblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcywgcGFyYW1zKS50aGVuPENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25TdW1tYXJpZXMgPSByZXNwb25zZS5yZXN1bHQgYXMgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeVtdO1xuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uU3VtbWFyaWVzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEZpZWxkQXN5bmMoZmllbGRJZDogc3RyaW5nKTogUHJvbWlzZTxDb250cmFjdC5GaWVsZD4ge1xuICAgIGNvbnN0IGZpZWxkSWRDb21wb25lbnRzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5wYXJzZUZpZWxkSWQoZmllbGRJZCk7XG4gICAgY29uc3QgZGF0YVNvdXJjZUlkOiBzdHJpbmcgPSBmaWVsZElkQ29tcG9uZW50c1sxXTtcbiAgICBjb25zdCBmaWVsZE5hbWU6IHN0cmluZyA9IGZpZWxkSWRDb21wb25lbnRzWzJdO1xuXG4gICAgY29uc3QgdmVyYjogVmVyYklkID0gVmVyYklkLkdldERhdGFTb3VyY2U7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5GaWVsZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZTogSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuRGF0YVNvdXJjZTtcbiAgICAgIGNvbnN0IGZpZWxkOiBJbnRlcm5hbENvbnRyYWN0LkZpZWxkIHwgdW5kZWZpbmVkID0gZGF0YVNvdXJjZS5maWVsZHMuZmluZCgoZikgPT4ge1xuICAgICAgICByZXR1cm4gZi5uYW1lID09PSBmaWVsZE5hbWU7XG4gICAgICB9KTtcbiAgICAgIGlmIChmaWVsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgVW5hYmxlIHRvIGZpbmQgZmllbGQgd2l0aCBpZCAnJHtmaWVsZElkfSdgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRGaWVsZChmaWVsZCwgdGhpcy5jb252ZXJ0RGF0YVNvdXJjZShkYXRhU291cmNlKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRGaWVsZChmaWVsZDogSW50ZXJuYWxDb250cmFjdC5GaWVsZCwgZGF0YVNvdXJjZTogQ29udHJhY3QuRGF0YVNvdXJjZSk6IENvbnRyYWN0LkZpZWxkIHtcbiAgICByZXR1cm4gbmV3IEZpZWxkKG5ldyBGaWVsZEltcGwoZmllbGQsIGRhdGFTb3VyY2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydERhdGFTb3VyY2UoZGF0YVNvdXJjZTogSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhU291cmNlKG5ldyBEYXRhU291cmNlSW1wbChkYXRhU291cmNlKSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlRmllbGRJZChmaWVsZElkOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAvLyB3ZSBjYW4gZXhwZWN0IGV4ZWMgdG8gcmV0dXJuIGEgbWF0Y2ggdG8gdGhlIGVudGlyZSBmaWVsZCBpZCBhdCBlbGVtZW50IDAsIHRoZSBkYXRhc291cmNlIGlkIGF0IGVsZW1lbnQgMVxuICAgIC8vIGFuZCB0aGUgZmllbGQgbmFtZSBhdCBlbGVtZW50IDIuIEZpZWxkIGlkIGZvcm1hdCBpcyBbZGF0YVNvdWNyZUlkXS5bZmllbGROYW1lXVxuICAgIHJldHVybiAvXlxcWyguKylcXF1cXC5cXFsoLispXFxdJC8uZXhlYyhmaWVsZElkKSE7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRGF0YVNvdXJjZVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBGaWx0ZXJUeXBlLFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRXh0ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgYXMgSW50ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5cbmltcG9ydCB7XG4gIENhdGVnb3JpY2FsRG9tYWluLFxuICBDYXRlZ29yaWNhbEZpbHRlcixcbiAgUmFuZ2VEb21haW4sXG4gIFJhbmdlRmlsdGVyLFxuICBSZWxhdGl2ZURhdGVGaWx0ZXJcbn0gZnJvbSAnLi4vLi4vTW9kZWxzL0ZpbHRlck1vZGVscyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuLi8uLi9VdGlscy9QYXJhbSc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEZpbHRlclNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5GaWx0ZXI7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICB2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgdmFsdWVzOiBBcnJheTxzdHJpbmc+LFxuICAgIHVwZGF0ZVR5cGU6IENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUsXG4gICAgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5BcHBseUNhdGVnb3JpY2FsRmlsdGVyO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJWYWx1ZXNdID0gdmFsdWVzO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmlsdGVyVXBkYXRlVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyVXBkYXRlVHlwZS5jb252ZXJ0KHVwZGF0ZVR5cGUpO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSXNFeGNsdWRlTW9kZV0gPVxuICAgICAgKGZpbHRlck9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBmaWx0ZXJPcHRpb25zLmlzRXhjbHVkZU1vZGUgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IGZpbHRlck9wdGlvbnMuaXNFeGNsdWRlTW9kZTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlSYW5nZUZpbHRlckFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCwgZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5BcHBseVJhbmdlRmlsdGVyO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG5cblxuICAgIGlmIChmaWx0ZXJPcHRpb25zLm1pbikge1xuICAgICAgbGV0IG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWluIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBtaW4gPSBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZmlsdGVyT3B0aW9ucy5taW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluID0gZmlsdGVyT3B0aW9ucy5taW47XG4gICAgICB9XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTWluXSA9IG1pbjtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5tYXgpIHtcbiAgICAgIGxldCBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGlmIChmaWx0ZXJPcHRpb25zLm1heCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgbWF4ID0gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKGZpbHRlck9wdGlvbnMubWF4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heCA9IGZpbHRlck9wdGlvbnMubWF4O1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU1heF0gPSBtYXg7XG4gICAgfVxuXG4gICAgLy8gVGhlIG51bGwgb3B0aW9uIGlzIHVzZWQgd2l0aCBtaW4rbWF4IGZvciAnaW5jbHVkZS1yYW5nZScgb3IgJ2luY2x1ZGUtcmFuZ2Utb3ItbnVsbCdcbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTnVsbE9wdGlvbl0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIubnVsbE9wdGlvbnMuY29udmVydChmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24pO1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCwgZmllbGROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuQ2xlYXJGaWx0ZXI7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9zbmUgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5HZXRGaWx0ZXJzO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+KHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBmaWx0ZXJzID0gcmVzcG9uc2UucmVzdWx0IGFzIEFycmF5PEludGVybmFsQ29udHJhY3QuRmlsdGVyPjtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnREb21haW5GaWx0ZXJzKGZpbHRlcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENhdGVnb3JpY2FsRG9tYWluQXN5bmMoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0Q2F0ZWdvcmljYWxEb21haW47XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB7XG4gICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWVcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZElkXSA9IGZpZWxkSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Eb21haW5UeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJEb21haW5UeXBlLmNvbnZlcnQoZG9tYWluVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9tYWluID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW47XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0Q2F0ZWdvcmljYWxEb21haW4oZG9tYWluLCBkb21haW5UeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSYW5nZURvbWFpbkFzeW5jKHdvcmtzaGVldE5hbWU6IHN0cmluZywgZmllbGRJZDogc3RyaW5nLCBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5SYW5nZURvbWFpbj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0UmFuZ2VEb21haW47XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB7XG4gICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWVcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZElkXSA9IGZpZWxkSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Eb21haW5UeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJEb21haW5UeXBlLmNvbnZlcnQoZG9tYWluVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LlJhbmdlRG9tYWluPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9tYWluID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuUmFuZ2VEb21haW47XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRSYW5nZURvbWFpbihkb21haW4sIGRvbWFpblR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gSGVscGVyIE1ldGhvZHNcbiAgcHJpdmF0ZSBjb252ZXJ0RG9tYWluRmlsdGVycyhkb21haW5GaWx0ZXJzOiBBcnJheTxJbnRlcm5hbENvbnRyYWN0LkZpbHRlcj4pOiBBcnJheTxDb250cmFjdC5GaWx0ZXI+IHtcbiAgICBsZXQgZmlsdGVyczogQXJyYXk8Q29udHJhY3QuRmlsdGVyPiA9IFtdO1xuICAgIGRvbWFpbkZpbHRlcnMuZm9yRWFjaChkb21haW5GaWx0ZXIgPT4ge1xuICAgICAgc3dpdGNoIChkb21haW5GaWx0ZXIuZmlsdGVyVHlwZSkge1xuICAgICAgICBjYXNlIEZpbHRlclR5cGUuQ2F0ZWdvcmljYWw6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXI7XG4gICAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHRoaXMuY29udmVydENhdGVnb3JpY2FsRmlsdGVyKGZpbHRlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2F0ZWdvcmljYWwgRmlsdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBGaWx0ZXJUeXBlLlJhbmdlOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRSYW5nZUZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFJhbmdlIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGU6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRSZWxhdGl2ZURhdGVGaWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBSZWxhdGl2ZSBEYXRlIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0Q2F0ZWdvcmljYWxGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyKTogQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXIge1xuICAgIGxldCBhcHBsaWVkVmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+ID0gZG9tYWluRmlsdGVyLnZhbHVlcy5tYXAoZHYgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoZHYudmFsdWUsIGR2LmZvcm1hdHRlZFZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2F0ZWdvcmljYWxGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLkNhdGVnb3JpY2FsLFxuICAgICAgYXBwbGllZFZhbHVlcyxcbiAgICAgIGRvbWFpbkZpbHRlci5pc0V4Y2x1ZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyKTogQ29udHJhY3QuUmFuZ2VGaWx0ZXIge1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW5GaWx0ZXIubWluLnZhbHVlLCBkb21haW5GaWx0ZXIubWluLmZvcm1hdHRlZFZhbHVlKTtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluRmlsdGVyLm1heC52YWx1ZSwgZG9tYWluRmlsdGVyLm1heC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUZpbHRlcihcbiAgICAgIGRvbWFpbkZpbHRlci52aXN1YWxJZC53b3Jrc2hlZXQsXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGRDYXB0aW9uLFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkTmFtZSxcbiAgICAgIENvbnRyYWN0LkZpbHRlclR5cGUuUmFuZ2UsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIG1heFZhbHVlLFxuICAgICAgZG9tYWluRmlsdGVyLmluY2x1ZGVOdWxsVmFsdWVzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJlbGF0aXZlRGF0ZUZpbHRlcihkb21haW5GaWx0ZXI6IEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyKTogQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyIHtcbiAgICBsZXQgYW5jaG9yRGF0ZVZhbHVlOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbkZpbHRlci5hbmNob3JEYXRlLnZhbHVlLCBkb21haW5GaWx0ZXIuYW5jaG9yRGF0ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSZWxhdGl2ZURhdGVGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZSxcbiAgICAgIGFuY2hvckRhdGVWYWx1ZSxcbiAgICAgIEludGVybmFsRW51bUNvbnZlcnRlci5kYXRlU3RlcFBlcmlvZC5jb252ZXJ0KGRvbWFpbkZpbHRlci5wZXJpb2RUeXBlKSxcbiAgICAgIEludGVybmFsRW51bUNvbnZlcnRlci5kYXRlUmFuZ2VUeXBlLmNvbnZlcnQoZG9tYWluRmlsdGVyLnJhbmdlVHlwZSksXG4gICAgICBkb21haW5GaWx0ZXIucmFuZ2VOXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydENhdGVnb3JpY2FsRG9tYWluKFxuICAgIGRvbWFpbjogSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbixcbiAgICBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4ge1xuICAgIGxldCB2YWx1ZXM6IEFycmF5PERhdGFWYWx1ZT4gPSBkb21haW4udmFsdWVzLm1hcCgoZG9tYWluRHYpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGRvbWFpbkR2LnZhbHVlLCBkb21haW5Edi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBDYXRlZ29yaWNhbERvbWFpbih2YWx1ZXMsIGRvbWFpblR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VEb21haW4oZG9tYWluOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRG9tYWluLCBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogQ29udHJhY3QuUmFuZ2VEb21haW4ge1xuICAgIGxldCBtaW46IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluLm1pbi52YWx1ZSwgZG9tYWluLm1pbi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgbGV0IG1heDogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW4ubWF4LnZhbHVlLCBkb21haW4ubWF4LmZvcm1hdHRlZFZhbHVlKTtcbiAgICByZXR1cm4gbmV3IFJhbmdlRG9tYWluKFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgZG9tYWluVHlwZVxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRmlsdGVyU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIHByb3RlY3RlZCBfZmllbGROYW1lOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIF9maWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByb3RlY3RlZCBfZmllbGRJZDogc3RyaW5nKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0TmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZElkO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWx0ZXJUeXBlKCk6IENvbnRyYWN0LkZpbHRlclR5cGUge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldEZpZWxkQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5GaWVsZD4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRGaWVsZEFzeW5jKHRoaXMuX2ZpZWxkSWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWNhbEZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9hcHBsaWVkVmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+LFxuICAgIHByaXZhdGUgX2lzRXhjbHVkZU1vZGU6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih3b3Jrc2hlZXROYW1lLCBmaWVsZE5hbWUsIGZpbHRlclR5cGUsIGZpZWxkSWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBhcHBsaWVkVmFsdWVzKCk6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWVkVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4Y2x1ZGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0V4Y2x1ZGVNb2RlO1xuICB9XG5cbiAgcHVibGljIGdldERvbWFpbkFzeW5jKGRvbWFpblR5cGU/OiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ge1xuICAgIGlmICghZG9tYWluVHlwZSkge1xuICAgICAgZG9tYWluVHlwZSA9IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUuUmVsZXZhbnQ7XG4gICAgfVxuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlPihkb21haW5UeXBlLCBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRDYXRlZ29yaWNhbERvbWFpbkFzeW5jKHRoaXMuX3dvcmtzaGVldE5hbWUsIHRoaXMuX2ZpZWxkSWQsIGRvbWFpblR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZUZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LlJhbmdlRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9taW46IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9tYXg6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9pbmNsdWRlTnVsbFZhbHVlczogYm9vbGVhbikge1xuICAgIHN1cGVyKHdvcmtzaGVldE5hbWUsIGZpZWxkTmFtZSwgZmlsdGVyVHlwZSwgZmllbGRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pblZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4VmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgcHVibGljIGdldCBpbmNsdWRlTnVsbFZhbHVlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU51bGxWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RG9tYWluQXN5bmMoZG9tYWluVHlwZT86IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBQcm9taXNlPENvbnRyYWN0LlJhbmdlRG9tYWluPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIGlmICghZG9tYWluVHlwZSkge1xuICAgICAgZG9tYWluVHlwZSA9IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUuUmVsZXZhbnQ7XG4gICAgfVxuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlPihkb21haW5UeXBlLCBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldFJhbmdlRG9tYWluQXN5bmModGhpcy5fd29ya3NoZWV0TmFtZSwgdGhpcy5fZmllbGRJZCwgZG9tYWluVHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbGF0aXZlRGF0ZUZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJpdmF0ZSBfYW5jaG9yRGF0ZTogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX3BlcmlvZFR5cGU6IENvbnRyYWN0LlBlcmlvZFR5cGUsXG4gICAgcHJpdmF0ZSBfcmFuZ2VUeXBlOiBDb250cmFjdC5EYXRlUmFuZ2VUeXBlLFxuICAgIHByaXZhdGUgX3JhbmdlTjogbnVtYmVyKSB7XG4gICAgc3VwZXIod29ya3NoZWV0TmFtZSwgZmllbGROYW1lLCBmaWx0ZXJUeXBlLCBmaWVsZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYW5jaG9yRGF0ZSgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9hbmNob3JEYXRlO1xuICB9XG5cbiAgcHVibGljIGdldCBwZXJpb2RUeXBlKCk6IENvbnRyYWN0LlBlcmlvZFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9wZXJpb2RUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCByYW5nZVR5cGUoKTogQ29udHJhY3QuRGF0ZVJhbmdlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFuZ2VOKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlTjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmljYWxEb21haW4gaW1wbGVtZW50cyBDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92YWx1ZXM6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4sXG4gICAgcHJpdmF0ZSBfZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSkge1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZXMoKTogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmFuZ2VEb21haW4gaW1wbGVtZW50cyBDb250cmFjdC5SYW5nZURvbWFpbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9taW46IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9tYXg6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9kb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpblR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbigpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1heCgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9GaWx0ZXJNb2RlbHMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIERhdGFUYWJsZSBhcyBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LFxuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlLFxuICBQYXJhbWV0ZXJJZCxcbiAgU2VsZWN0ZWRNYXJrc1RhYmxlLFxuICBVbmRlcmx5aW5nRGF0YVRhYmxlLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IENvbHVtbiwgRGF0YVRhYmxlLCBEYXRhVmFsdWUsIE1hcmtJbmZvIH0gZnJvbSAnLi4vLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UsIEdldERhdGFUeXBlIH0gZnJvbSAnLi4vR2V0RGF0YVNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuZXhwb3J0IGNsYXNzIEdldERhdGFTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEdldERhdGFTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuR2V0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhSb3dMaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiAxMDAwMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGltaXRlZE1heFJvd3MocmVxdWVzdGVkUm93czogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCByb3dDb3VudExpbWl0ID0gdGhpcy5nZXRNYXhSb3dMaW1pdCgpICsgMTtcbiAgICByZXR1cm4gKHJlcXVlc3RlZFJvd3MgPiAwICYmIHJlcXVlc3RlZFJvd3MgPCByb3dDb3VudExpbWl0KSA/IHJlcXVlc3RlZFJvd3MgOiByb3dDb3VudExpbWl0O1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgLy8gQ3JlYXRlIGFsbCBvZiBvdXIgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHZlcmIgPSBnZXRUeXBlID09PSBHZXREYXRhVHlwZS5TdW1tYXJ5ID8gVmVyYklkLkdldERhdGFTdW1tYXJ5RGF0YSA6IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YTtcbiAgICBjb25zdCByZXF1ZXN0TWF4Um93cyA9IHZlcmIgPT09IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YSA/IHRoaXMuZ2V0TGltaXRlZE1heFJvd3MobWF4Um93cykgOiBtYXhSb3dzO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdID0gaWdub3JlQWxpYXNlcztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZVNlbGVjdGlvbl0gPSBpZ25vcmVTZWxlY3Rpb247XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5JbmNsdWRlQWxsQ29sdW1uc10gPSBpbmNsdWRlQWxsQ29sdW1ucztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLk1heFJvd3NdID0gcmVxdWVzdE1heFJvd3M7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48RGF0YVRhYmxlPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgVW5kZXJseWluZ0RhdGFUYWJsZTtcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhLmRhdGEsIHJlc3BvbnNlRGF0YS5pc1N1bW1hcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldFNlbGVjdGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgU2VsZWN0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEhpZ2hsaWdodGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldEhpZ2hsaWdodGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VEYXRhQXN5bmMoXG4gICAgZGF0YVNvdXJjZUlkOiBzdHJpbmcsXG4gICAgaWdub3JlQWxpYXNlczogYm9vbGVhbixcbiAgICBtYXhSb3dzOiBudW1iZXIsXG4gICAgY29sdW1uc1RvSW5jbHVkZTogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkLFxuICAgICAgW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdOiBpZ25vcmVBbGlhc2VzLFxuICAgICAgW1BhcmFtZXRlcklkLk1heFJvd3NdOiB0aGlzLmdldExpbWl0ZWRNYXhSb3dzKG1heFJvd3MpLFxuICAgICAgW1BhcmFtZXRlcklkLkNvbHVtbnNUb0luY2x1ZGVdOiBjb2x1bW5zVG9JbmNsdWRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXREYXRhU291cmNlRGF0YSwgcGFyYW1ldGVycykudGhlbjxEYXRhVGFibGU+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGEuZGF0YSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhOiBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LCBpc1N1bW1hcnk6IGJvb2xlYW4pOiBEYXRhVGFibGUge1xuICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZURhdGEuaGVhZGVycy5tYXAoaCA9PiBuZXcgQ29sdW1uKGguZmllbGRDYXB0aW9uLFxuICAgICAgaC5kYXRhVHlwZSxcbiAgICAgIGguaXNSZWZlcmVuY2VkLFxuICAgICAgaC5pbmRleCkpO1xuXG4gICAgLy8gVE9ETyBUaGlzIHNob3VsZCBiZSBjb250cm9sbGVkIGJ5IGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBhcGkgd2lsbCByZXNwb25kIG1hcmtzIGluZm8gb3Igbm90XG4gICAgbGV0IG1hcmtzO1xuICAgIGlmIChyZXNwb25zZURhdGEubWFya3MpIHtcbiAgICAgIG1hcmtzID0gcmVzcG9uc2VEYXRhLm1hcmtzLm1hcChoID0+IG5ldyBNYXJrSW5mbyhoLnR5cGUsXG4gICAgICAgIGguY29sb3IsXG4gICAgICAgIGgudHVwbGVJZCkpO1xuICAgIH1cblxuICAgIC8vIExpbWl0KzEgaXMgb3VyIHNlbnRpbmFsIHRoYXQgdW5kZXJseWluZyBkYXRhIGNvbnRhaW5zIG1vcmUgcm93cyB0aGFuIHVzZXIgaXMgYWxsb3dlZCB0byBmZXRjaC5cbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBzbyB3ZSBhbHdheXMgcmV0dXJuIE1heFJvd0xpbWl0XG4gICAgY29uc3QgaXNUb3RhbFJvd0NvdW50TGltaXRlZCA9IGlzU3VtbWFyeSA9PT0gZmFsc2UgJiYgcmVzcG9uc2VEYXRhLmRhdGFUYWJsZS5sZW5ndGggPT09IHRoaXMuZ2V0TWF4Um93TGltaXQoKSArIDE7XG4gICAgaWYgKGlzVG90YWxSb3dDb3VudExpbWl0ZWQpIHtcbiAgICAgIHJlc3BvbnNlRGF0YS5kYXRhVGFibGUubGVuZ3RoIC09IDE7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGUgPSByZXNwb25zZURhdGEuZGF0YVRhYmxlLm1hcChyb3cgPT4ge1xuICAgICAgcmV0dXJuIHJvdy5tYXAoY2VsbCA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGNlbGwudmFsdWUsIGNlbGwuZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAobWFya3MpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVRhYmxlKHRhYmxlLCBoZWFkZXJzLCB0YWJsZS5sZW5ndGgsIGlzVG90YWxSb3dDb3VudExpbWl0ZWQsIGlzU3VtbWFyeSwgbWFya3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGFUYWJsZSh0YWJsZSwgaGVhZGVycywgdGFibGUubGVuZ3RoLCBpc1RvdGFsUm93Q291bnRMaW1pdGVkLCBpc1N1bW1hcnkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciwgTW9kZWwsIE5vdGlmaWNhdGlvbiwgTm90aWZpY2F0aW9uSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlLCBVbnJlZ2lzdGVyRm4gfSBmcm9tICcuLi9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmNsYXNzIFJlZ2lzdHJhdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWx0ZXJGbjogKG5vdGlmaWNhdGlvbk1vZGVsOiBNb2RlbCkgPT4gYm9vbGVhbixcbiAgICBwcml2YXRlIF9jYWxsYmFja0ZuOiAobm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKSA9PiB2b2lkKSB7XG4gICAgLy8gTm90aGluZyBIZXJlXG4gIH1cblxuICBwdWJsaWMgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckZuKG5vdGlmaWNhdGlvbk1vZGVsKSkge1xuICAgICAgdGhpcy5fY2FsbGJhY2tGbihub3RpZmljYXRpb25Nb2RlbCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9oYW5kbGVyczogeyBbbm90aWZpY2F0aW9uSWQ6IHN0cmluZ106IEFycmF5PFJlZ2lzdHJhdGlvbj4gfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpIHtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHt9O1xuICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIodGhpcy5vbk5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoaWQ6IE5vdGlmaWNhdGlvbklkLCBmaWx0ZXJGbjogKG1vZGVsOiBNb2RlbCkgPT4gYm9vbGVhbiwgaGFuZGxlcjogKG1vZGVsOiBNb2RlbCkgPT4gdm9pZCk6IFVucmVnaXN0ZXJGbiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tpZF0gfHwgbmV3IEFycmF5PFJlZ2lzdHJhdGlvbj4oKTtcbiAgICBjb25zdCByZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uKGZpbHRlckZuLCBoYW5kbGVyKTtcbiAgICBoYW5kbGVycy5wdXNoKHJlZ2lzdHJhdGlvbik7XG4gICAgdGhpcy5faGFuZGxlcnNbaWRdID0gaGFuZGxlcnM7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlUmVnaXN0cmF0aW9uKGlkLCByZWdpc3RyYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUoaWQ6IE5vdGlmaWNhdGlvbklkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLmhhc093blByb3BlcnR5KGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzSGFuZGxlcnNGb3JOb3RpZmljYXRpb25UeXBlKG5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb25JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHbyB0aHJvdWdoIGFuZCBjaGVjayBmb3IgYWxsIHRoZSBoYW5kbGVycyBvZiB0aGlzIHBhcnRpY3VsYXIgbm90aWZpY2F0aW9uXG4gICAgdGhpcy5faGFuZGxlcnNbbm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbklkXS5mb3JFYWNoKGggPT4gaC5vbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVSZWdpc3RyYXRpb24oaWQ6IE5vdGlmaWNhdGlvbklkLCByZWdpc3RyYXRpb246IFJlZ2lzdHJhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUoaWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlcnNbaWRdID0gdGhpcy5faGFuZGxlcnNbaWRdLmZpbHRlcihyZWcgPT4gcmVnICE9PSByZWdpc3RyYXRpb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL05vdGlmaWNhdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBNb2RlbCxcbiAgUGFyYW1ldGVySWQsXG4gIFBhcmFtZXRlckluZm8sXG4gIFNoZWV0UGF0aCxcbiAgVmVyYklkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IFBhcmFtZXRlckltcGwgfSBmcm9tICcuLi8uLi9JbXBsL1BhcmFtZXRlckltcGwnO1xuaW1wb3J0IHsgUGFyYW1ldGVyIH0gZnJvbSAnLi4vLi4vUGFyYW1ldGVyJztcbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcnNTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFBhcmFtZXRlcnNTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycztcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzRm9yU2hlZXRBc3luYyhzaGVldFBhdGg6IFNoZWV0UGF0aCwgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxBcnJheTxQYXJhbWV0ZXI+PiB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5TaGVldFBhdGhdOiBzaGVldFBhdGhcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0UGFyYW1ldGVyc0ZvclNoZWV0LCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFRPRE8gLSBDaGVjayBmb3IgZXJyb3JcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEFycmF5PFBhcmFtZXRlckluZm8+O1xuICAgICAgcmV0dXJuIHJlc3VsdC5tYXAocGFyYW1ldGVySW5mbyA9PiB7XG4gICAgICAgIGNvbnN0IGltcGwgPSBuZXcgUGFyYW1ldGVySW1wbChwYXJhbWV0ZXJJbmZvKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhbWV0ZXIoaW1wbCwgc2hlZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlUGFyYW1ldGVyVmFsdWVBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZyk6IFByb21pc2U8UGFyYW1ldGVySW5mbz4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuUGFyYW1ldGVyRmllbGROYW1lXTogZmllbGROYW1lLFxuICAgICAgW1BhcmFtZXRlcklkLlBhcmFtZXRlclZhbHVlXTogbmV3VmFsdWVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuQ2hhbmdlUGFyYW1ldGVyVmFsdWUsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIFBhcmFtZXRlckluZm87XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJCeU5hbWVBc3luYyhuYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFBhcmFtZXRlckFzeW5jKHNoZWV0LCBuYW1lLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJCeUdsb2JhbEZpZWxkTmFtZUFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPFBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRQYXJhbWV0ZXJBc3luYyhzaGVldCwgdW5kZWZpbmVkLCBmaWVsZE5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGFyYW1ldGVyQXN5bmMoXG4gICAgc2hlZXQ6IENvbnRyYWN0LlNoZWV0LFxuICAgIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlBhcmFtZXRlckNhcHRpb25dID0gbmFtZTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlBhcmFtZXRlckZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnbmFtZSBvciBmaWVsZE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0byBmaW5kIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkZpbmRQYXJhbWV0ZXIsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2VPZlBhcmFtZXRlckluZm8gPSAob2JqZWN0OiBNb2RlbCk6IG9iamVjdCBpcyBQYXJhbWV0ZXJJbmZvID0+IHtcbiAgICAgICAgcmV0dXJuICdmaWVsZE5hbWUnIGluIG9iamVjdDtcbiAgICAgIH07XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdG8gc2VlIGlmIHdlIGdvdCBhIHZhbGlkIHJlc3BvbnNlIGJhY2sgYWdhaW5cbiAgICAgIGlmIChpbnN0YW5jZU9mUGFyYW1ldGVySW5mbyhyZXNwb25zZS5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBQYXJhbWV0ZXJJbmZvO1xuICAgICAgICBjb25zdCBpbXBsID0gbmV3IFBhcmFtZXRlckltcGwocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhbWV0ZXIoaW1wbCwgc2hlZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9QYXJhbWV0ZXJzU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbklkLCBQYXJhbWV0ZXJJbmZvIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvUGFyYW1ldGVyQ2hhbmdlZEV2ZW50JztcbmltcG9ydCB7IERhdGFWYWx1ZSB9IGZyb20gJy4uL01vZGVscy9HZXREYXRhTW9kZWxzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuXG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuLi9VdGlscy9QYXJhbSc7XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJJbXBsIHtcbiAgcHJpdmF0ZSBfYWxsb3dhYmxlVmFsdWVzOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbjtcbiAgcHJpdmF0ZSBfZ2xvYmFsRmllbGROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm87XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm8pIHtcbiAgICB0aGlzLnNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVySW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50VmFsdWUoKTogRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gbmV3IERhdGFWYWx1ZSh0aGlzLl9wYXJhbWV0ZXJJbmZvLmN1cnJlbnRWYWx1ZS52YWx1ZSwgdGhpcy5fcGFyYW1ldGVySW5mby5jdXJyZW50VmFsdWUuZm9ybWF0dGVkVmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhVHlwZSgpOiBDb250cmFjdC5EYXRhVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXRhVHlwZS5jb252ZXJ0KHRoaXMuX3BhcmFtZXRlckluZm8uZGF0YVR5cGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxGaWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbG93YWJsZVZhbHVlcygpOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93YWJsZVZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZSk6IFByb21pc2U8RGF0YVZhbHVlPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihuZXdWYWx1ZSwgJ25ld1ZhbHVlJyk7XG5cbiAgICBsZXQgY29lcmNlZFZhbHVlID0gUGFyYW0uc2VyaWFsaXplUGFyYW10ZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgY29uc3QgcGFyYW1ldGVyc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBwYXJhbWV0ZXJzU2VydmljZS5jaGFuZ2VQYXJhbWV0ZXJWYWx1ZUFzeW5jKHRoaXMuX2dsb2JhbEZpZWxkTmFtZSwgY29lcmNlZFZhbHVlKS50aGVuKHBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJJbmZvKHBhcmFtZXRlckluZm8pO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2hpY2ggZ29lcyB0aHJvdWdoIGFuZCByZWdpc3RlcnMgZWFjaCBldmVudCB0eXBlIHRoaXMgaW1wbCBrbm93cyBhYm91dFxuICAgKiB3aXRoIHRoZSBOb3RpZmljYXRpb25TZXJ2aWNlLiBJdCByZXR1cm5zIGFuIGFycmF5IG9mIFNpbmdsZUV2ZW50TWFuYWdlciBvYmplY3RzIHdoaWNoXG4gICAqIGNhbiB0aGVuIGJlIHBhc3NlZCB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlciB0byBoYW5kbGUgdXNlciByZWdpc3RyYXRpb24gLyB1bnJlZ2lzdHJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHNoZWV0IFRoZSBzaGVldCBvYmplY3Qgd2hpY2ggd2lsbCBiZSBpbmNsdWRlZCB3aXRoIHRoZSBldmVudCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+fSBDb2xsZWN0aW9uIG9mIGV2ZW50IG1hbmFnZXJzIHRvIHBhc3MgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplRXZlbnRzKHNoZWV0OiBDb250cmFjdC5TaGVldCk6IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlJbnRlcm5hbFZhbHVlKHNoZWV0LCAnc2hlZXQnKTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPigpO1xuICAgIGxldCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIHRoaXMgc2VydmljZSByZWdpc3RlcmVkLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIGV2ZW50IG1hbmFnZXJzIHdlJ2xsIG5lZWQgKG9uZSBmb3IgZWFjaCBldmVudCB0eXBlKVxuICAgIGNvbnN0IHBhcmFtZXRlckV2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8UGFyYW1ldGVyQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlBhcmFtZXRlckNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLlBhcmFtZXRlckNoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gbW9kZWwgYXMgc3RyaW5nO1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gdGhpcy5fZ2xvYmFsRmllbGROYW1lO1xuICAgIH0sIChmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcGFyYW1ldGVyRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQoZmllbGROYW1lLCBzaGVldCkpO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0cy5wdXNoKHBhcmFtZXRlckV2ZW50KTtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYXJhbWV0ZXJJbmZvKHBhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm8pOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJJbmZvID0gcGFyYW1ldGVySW5mbztcbiAgICB0aGlzLl9nbG9iYWxGaWVsZE5hbWUgPSBwYXJhbWV0ZXJJbmZvLmZpZWxkTmFtZTtcblxuICAgIGNvbnN0IHR5cGUgPSBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuYWxsb3dhYmxlVmFsdWVzLmNvbnZlcnQocGFyYW1ldGVySW5mby5hbGxvd2FibGVWYWx1ZXNUeXBlKTtcbiAgICBsZXQgbGlzdFZhbHVlczogQXJyYXk8RGF0YVZhbHVlPiB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWluVmFsdWU6IERhdGFWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBsZXQgc3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBsZXQgZGF0ZVN0ZXBQZXJpb2Q6IENvbnRyYWN0LlBlcmlvZFR5cGUgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZSA9PT0gQ29udHJhY3QuUGFyYW1ldGVyVmFsdWVUeXBlLkxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHBhcmFtZXRlckluZm8uYWxsb3dhYmxlVmFsdWVzIHx8IFtdO1xuICAgICAgbGlzdFZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+IG5ldyBEYXRhVmFsdWUodmFsLnZhbHVlLCB2YWwuZm9ybWF0dGVkVmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnRyYWN0LlBhcmFtZXRlclZhbHVlVHlwZS5SYW5nZSkge1xuICAgICAgbWluVmFsdWUgPSBwYXJhbWV0ZXJJbmZvLm1pblZhbHVlICYmIG5ldyBEYXRhVmFsdWUocGFyYW1ldGVySW5mby5taW5WYWx1ZS52YWx1ZSwgcGFyYW1ldGVySW5mby5taW5WYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICBtYXhWYWx1ZSA9IHBhcmFtZXRlckluZm8ubWF4VmFsdWUgJiYgbmV3IERhdGFWYWx1ZShwYXJhbWV0ZXJJbmZvLm1heFZhbHVlLnZhbHVlLCBwYXJhbWV0ZXJJbmZvLm1heFZhbHVlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIHN0ZXBTaXplID0gcGFyYW1ldGVySW5mby5zdGVwU2l6ZTtcbiAgICAgIGRhdGVTdGVwUGVyaW9kID0gcGFyYW1ldGVySW5mby5kYXRlU3RlcFBlcmlvZCAmJlxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGF0ZVN0ZXBQZXJpb2QuY29udmVydChwYXJhbWV0ZXJJbmZvLmRhdGVTdGVwUGVyaW9kKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hbGxvd2FibGVWYWx1ZXMgPSB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgYWxsb3dhYmxlVmFsdWVzOiBsaXN0VmFsdWVzLFxuICAgICAgbWluVmFsdWU6IG1pblZhbHVlLFxuICAgICAgbWF4VmFsdWU6IG1heFZhbHVlLFxuICAgICAgc3RlcFNpemU6IHN0ZXBTaXplLFxuICAgICAgZGF0ZVN0ZXBQZXJpb2Q6IGRhdGVTdGVwUGVyaW9kXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9QYXJhbWV0ZXJJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgVGFibGVhdVNoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVTaGVldEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckNoYW5nZWRFdmVudCBleHRlbmRzIFRhYmxlYXVTaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuUGFyYW1ldGVyQ2hhbmdlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dsb2JhbEZpZWxkTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlBhcmFtZXRlckNoYW5nZWQsIHNoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlcj4ge1xuICAgIC8vIENhbGwgZG93biB0byBvdXIgc2VydmljZSB0byBnZXQgdGhlIHBhcmFtZXRlciBiYWNrIHZpYSBpdHMgZmllbGQgbmFtZVxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlLmZpbmRQYXJhbWV0ZXJCeUdsb2JhbEZpZWxkTmFtZUFzeW5jKHRoaXMuX2dsb2JhbEZpZWxkTmFtZSwgdGhpcy5zaGVldCkudGhlbihwYXJhbWV0ZXIgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5NaXNzaW5nUGFyYW1ldGVyLCBgQ2Fubm90IGZpbmQgcGFyYW1ldGVyOiAke3RoaXMuX2dsb2JhbEZpZWxkTmFtZX1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1BhcmFtZXRlckNoYW5nZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vRXZlbnRMaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVySW1wbCB9IGZyb20gJy4vSW1wbC9QYXJhbWV0ZXJJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgUGFyYW1ldGVyIGNvbnRyYWN0LiBDYWxscyBkb3duIHRvIHRoZSBpbXBsXG4gKiBjbGFzcyBmb3IgYWxtb3N0IGFsbCBvZiB0aGUgd29yayBpdCBkb2VzLlxuICovXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5QYXJhbWV0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbWV0ZXJJbXBsOiBQYXJhbWV0ZXJJbXBsLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBvdXIgZXZlbnQgaGFuZGxpbmcgZm9yIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhcmFtZXRlckltcGwuaW5pdGlhbGl6ZUV2ZW50cyhzaGVldCkuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3RXZlbnRUeXBlKGUpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudFZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbXBsLmRhdGFUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGxvd2FibGVWYWx1ZXMoKTogQ29udHJhY3QuUGFyYW1ldGVyRG9tYWluUmVzdHJpY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlVmFsdWVBc3luYyhuZXdWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IERhdGUpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuY2hhbmdlVmFsdWVBc3luYyhuZXdWYWx1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BhcmFtZXRlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgUGFyYW1ldGVySWQsXG4gIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLFxuICBTZWxlY3Rpb25VcGRhdGVUeXBlIGFzIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbCxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCxcbiAgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWwsXG4gIFJhbmdlU2VsZWN0aW9uTW9kZWwsXG4gIFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcixcbiAgVHVwbGVTZWxlY3Rpb25Nb2RlbCxcbiAgVmFsdWVTZWxlY3Rpb25Nb2RlbFxufSBmcm9tICcuLi8uLi9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VsZWN0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBTZWxlY3Rpb25TZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjbGVhciBhbGwgdGhlIHNlbGVjdGVkIG1hcmtzIGZvciB0aGUgZ2l2ZW4gd29ya3NoZWV0LlxuICAgKlxuICAgKiBAcGFyYW0gdmlzdWFsSWRcbiAgICovXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DbGVhclNlbGVjdGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuOyAvLyBFeHBlY3RpbmcgYW4gZW1wdHkgbW9kZWwgYW5kIGhlbmNlIHRoZSB2b2lkIHJlc3BvbnNlLlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzZWxlY3QgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB2aXN1YWxJZFxuICAgKiBAcGFyYW0gc2VsZWN0aW9uQ3JpdGVyaWFcbiAgICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5VmFsdWVBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgc2VsZWN0aW9uQ3JpdGVyaWFzOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChzZWxlY3Rpb25Dcml0ZXJpYXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgJ1NlbGVjdGlvbiBjcml0ZXJpYSBtaXNzaW5nIGZvciBzZWxlY3RpbmcgbWFya3MgYnkgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlOiBzdHJpbmcgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uVXBkYXRlVHlwZShzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgICBsZXQgc2VsZWN0aW9uQ3JpdGVyaWFUeXBlOiBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uQ3JpdGVyaWEoc2VsZWN0aW9uQ3JpdGVyaWFzWzBdKTtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IHRoaXMucGFyc2VTZWxlY3Rpb25NYXJrcyhzZWxlY3Rpb25Dcml0ZXJpYXMsIHNlbGVjdGlvbkNyaXRlcmlhVHlwZSk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkLFxuICAgICAgW1BhcmFtZXRlcklkLlNlbGVjdGlvblVwZGF0ZVR5cGVdOiBzZWxlY3Rpb25UeXBlXG4gICAgfTtcblxuICAgIHN3aXRjaCAoc2VsZWN0aW9uQ3JpdGVyaWFUeXBlKSB7XG4gICAgICBjYXNlIFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlOiB7XG4gICAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSGllclZhbFNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5oaWVyTW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuUmFuZ2VUeXBlOiB7XG4gICAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUXVhbnRSYW5nZVNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5xdWFudE1vZGVsQXJyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkRpbWVuc2lvblR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5EaW1WYWxTZWxlY3Rpb25Nb2RlbHNdID0gc2VsZWN0aW9uTW9kZWxDb250YWluZXIuZGltTW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNlbGVjdEJ5VmFsdWUsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRXhwZWN0aW5nIGFuIGVtcHR5IG1vZGVsIGFuZCBoZW5jZSB0aGUgdm9pZCByZXNwb25zZS5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgdGhlIGVycm9yIHJlc3BvbnNlIHdpdGggbXVsdGlwbGUgb3V0cHV0IHBhcmFtcyBhbmQgdGhyb3cgZXJyb3IgYWNjb3JkaW5nbHkuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAqIE1ldGhvZCB0byBzZWxlY3QgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gKlxuICogQHBhcmFtIHZpc3VhbElkXG4gKiBAcGFyYW0gTWFya0luZm9cbiAqIEBwYXJhbSBzZWxlY3Rpb25VcGRhdGVUeXBlXG4gKi9cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBtYXJrczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAobWFya3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgJ01hcmtzIGluZm8gbWlzc2luZyBmb3Igc2VsZWN0aW5nIG1hcmtzIGJ5IElkJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uVHlwZTogc3RyaW5nID0gdGhpcy52YWxpZGF0ZVNlbGVjdGlvblVwZGF0ZVR5cGUoc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gICAgbGV0IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIgPSB0aGlzLnBhcnNlU2VsZWN0aW9uSWRzKG1hcmtzKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uVXBkYXRlVHlwZV06IHNlbGVjdGlvblR5cGUsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uXTogc2VsZWN0aW9uTW9kZWxDb250YWluZXIuc2VsZWN0aW9uXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TZWxlY3RCeVZhbHVlLCBwYXJhbWV0ZXJzKS50aGVuPHZvaWQ+KHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEV4cGVjdGluZyBhbiBlbXB0eSBtb2RlbCBhbmQgaGVuY2UgdGhlIHZvaWQgcmVzcG9uc2UuXG4gICAgICByZXR1cm47XG4gICAgICAvLyBUT0RPIEludmVzdGlnYXRlIHRoZSBlcnJvciByZXNwb25zZSB3aXRoIG11bHRpcGxlIG91dHB1dCBwYXJhbXMgYW5kIHRocm93IGVycm9yIGFjY29yZGluZ2x5LlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmVwYXJlIHRoZSBwcmVzIG1vZGVscyBmb3Igc2VsZWN0aW9uIGJ5IE1hcmtzSW5mb1xuICAgKiBAcGFyYW0gbWFya3NcbiAgICovXG4gIHByaXZhdGUgcGFyc2VTZWxlY3Rpb25JZHMobWFya3M6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPik6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciB7XG4gICAgbGV0IGlkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gbmV3IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0dXBsZUlkOiBOdW1iZXIgfCB1bmRlZmluZWQgPSBtYXJrc1tpXS50dXBsZUlkO1xuICAgICAgaWYgKHR1cGxlSWQgIT09IHVuZGVmaW5lZCAmJiB0dXBsZUlkICE9PSBudWxsKSB7IC8vIElmIHR1cGxlIGlkIGlzIHByb3ZpZGVkIHVzZSB0aGF0IGluc3RlYWQgb2YgcGFpclxuICAgICAgICBpZHMucHVzaCh0dXBsZUlkLnRvU3RyaW5nKCkpOyAvLyBjb2xsZWN0IHRoZSB0dXBsZSBpZHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAndHVwbGVJZCBwYXJzaW5nIGVycm9yJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpZHMubGVuZ3RoICE9PSAwKSB7IC8vIHR1cGxlIGlkcyBiYXNlZCBzZWxlY3Rpb25cbiAgICAgIGxldCB0dXBsZVNlbGVjdGlvbk1vZGVsOiBUdXBsZVNlbGVjdGlvbk1vZGVsID0gbmV3IFR1cGxlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICAgIHR1cGxlU2VsZWN0aW9uTW9kZWwuc2VsZWN0aW9uVHlwZSA9ICd0dXBsZXMnO1xuICAgICAgdHVwbGVTZWxlY3Rpb25Nb2RlbC5vYmplY3RJZHMgPSBpZHM7XG4gICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5zZWxlY3Rpb24gPSB0dXBsZVNlbGVjdGlvbk1vZGVsO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uTW9kZWxDb250YWluZXI7XG4gIH1cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmVwYXJlIHRoZSBwcmVzIG1vZGVscyBmb3Igc2VsZWN0aW9uIGJ5IHZhbHVlcy5cbiAgICpcbiAgICogU3VwcG9ydHMgMyB0eXBlcyBmb3Igc2VsZWN0aW9uOlxuICAgKiAxKSBoaWVyYXJjaGljYWwgdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqIDIpIHJhbmdlIHZhbHVlIGJhc2VkIHNlbGVjdGlvblxuICAgKiAzKSBEaW1lbnNpb24gdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBtYXJrc1xuICAgKiBAcGFyYW0gaGllck1vZGVsQXJyXG4gICAqIEBwYXJhbSBkaW1Nb2RlbEFyclxuICAgKiBAcGFyYW0gcXVhbnRNb2RlbEFyclxuICAgKiBAcGFyYW0gc2VsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIHBhcnNlU2VsZWN0aW9uTWFya3Moc2VsZWN0aW9uQ3JpdGVyaWFzOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlKTogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyIHtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IG5ldyBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIoKTtcbiAgICBsZXQgbWl4ZWRTZWxlY3Rpb25zRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uQ3JpdGVyaWFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdCA9IHNlbGVjdGlvbkNyaXRlcmlhc1tpXTtcbiAgICAgIGlmIChzdC5maWVsZE5hbWUgJiYgKHN0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgc3QudmFsdWUgIT09IG51bGwpKSB7XG4gICAgICAgIGxldCBjYXRSZWdleCA9IG5ldyBSZWdFeHAoJyhcXFtbQS1aYS16MC05XStdKS4qJywgJ2cnKTtcbiAgICAgICAgbGV0IHJhbmdlT3B0aW9uOiBDb250cmFjdC5SYW5nZVZhbHVlID0gc3QudmFsdWUgYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZTtcbiAgICAgICAgaWYgKGNhdFJlZ2V4LnRlc3Qoc3QuZmllbGROYW1lKSkgeyAvLyBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgICAgaWYgKHNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlKSB7XG4gICAgICAgICAgICBsZXQgaGllck1vZGVsOiBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9QYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgc3QudmFsdWUpIGFzIEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIuaGllck1vZGVsQXJyLnB1c2goaGllck1vZGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWl4ZWRTZWxlY3Rpb25zRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5taW4gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICYmIChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5tYXggIT09IHVuZGVmaW5lZCkgeyAvLyBSYW5nZSB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLlJhbmdlVHlwZSkge1xuICAgICAgICAgICAgbGV0IHF1YW50TW9kZWw6IFJhbmdlU2VsZWN0aW9uTW9kZWwgPSB0aGlzLmFkZFRvUmFuZ2VQYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgcmFuZ2VPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIucXVhbnRNb2RlbEFyci5wdXNoKHF1YW50TW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIERpbWVuc2lvbiB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkRpbWVuc2lvblR5cGUpIHtcbiAgICAgICAgICAgIGxldCBkaW1Nb2RlbDogRGltZW5zaW9uU2VsZWN0aW9uTW9kZWwgPSB0aGlzLmFkZFRvUGFyYW1zTGlzdChzdC5maWVsZE5hbWUsIHN0LnZhbHVlKSBhcyBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbDtcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmRpbU1vZGVsQXJyLnB1c2goZGltTW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWl4ZWRTZWxlY3Rpb25zRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnU2VsZWN0aW9uIENyaXRlcmlhIHBhcnNpbmcgZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYXMgVmFsaWRhdGUgYW5kIGRldGVybWluZSB0aGUgc2VsZWN0aW9uIGNyaXRlcmlhcyB0eXBlLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlbGVjdGlvbkNyaXRlcmlhKHNlbGVjdGlvbkNyaXRlcmlhOiBDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYSk6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSB7XG4gICAgbGV0IHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZTtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHR5cGUgb2Ygc2VsZWN0aW9uLCB0aGlzIGNvbW1hbmQgaXMgYnkgbG9va2luZyBhdCB0aGUgZmlyc3Qgc2VsZWN0aW9uXG4gICAgbGV0IGNyaXQ6IENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhID0gc2VsZWN0aW9uQ3JpdGVyaWE7XG5cbiAgICBsZXQgY2F0UmVnZXggPSBuZXcgUmVnRXhwKCcoXFxbW0EtWmEtejAtOV0rXSkuKicsICdnJyk7XG4gICAgbGV0IHJhbmdlT3B0aW9uOiBDb250cmFjdC5SYW5nZVZhbHVlID0gY3JpdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuXG4gICAgaWYgKGNyaXQuZmllbGROYW1lICYmIChjcml0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgY3JpdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgIGlmIChjYXRSZWdleC50ZXN0KGNyaXQuZmllbGROYW1lKSkgeyAvLyBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuSGllcmFyY2hpY2FsVHlwZTtcbiAgICAgIH0gZWxzZSBpZiAoKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5tYXggIT09IHVuZGVmaW5lZCkgeyAvLyBSYW5nZSB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU7XG4gICAgICB9IGVsc2UgeyAvLyBEaW1lcnNpb24gdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZWxlY3Rpb24gQ3JpdGVyaWEgcGFyc2luZyBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdHJhbnNmb3JtIHRoZSBrZXkgdmFsdWUgcGFpciBpbnRvIHZhbHVlIGJhc2VkIHByZXMgbW9kZWwgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVTZWxlY3Rpb25Nb2RlbFxuICAgKiBAcGFyYW0gZmllbGROYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBhZGRUb1BhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBvYmplY3QpOiBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbiAgICBsZXQgdmFsdWVTZWxlY3Rpb25Nb2RlbDogVmFsdWVTZWxlY3Rpb25Nb2RlbCA9IG5ldyBWYWx1ZVNlbGVjdGlvbk1vZGVsKCk7XG4gICAgbGV0IG1hcmtWYWx1ZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBsZXQgdmFsdWVBcnI6IEFycmF5PHN0cmluZz4gPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFya1ZhbHVlcy5wdXNoKHZhbHVlQXJyW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrVmFsdWVzLnB1c2godmFsdWUudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgdmFsdWVTZWxlY3Rpb25Nb2RlbC5xdWFsaWZpZWRGaWVsZENhcHRpb24gPSBmaWVsZE5hbWU7XG4gICAgdmFsdWVTZWxlY3Rpb25Nb2RlbC5zZWxlY3RWYWx1ZXMgPSBtYXJrVmFsdWVzO1xuICAgIHJldHVybiB2YWx1ZVNlbGVjdGlvbk1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0cmFuc2Zvcm0gdGhlIGtleSB2YWx1ZSBwYWlyIGludG8gcmFuZ2UgYmFzZWQgc2VsZWN0aW9uIHByZXMgbW9kZWwuXG4gICAqXG4gICAqIFRPRE86IE5lZWQgdG8gaGFuZGxlIHRoZSBwYXJzaW5nIG9mIGRhdGUgdHlwZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVNlbGVjdGlvbk1vZGVsXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGFkZFRvUmFuZ2VQYXJhbXNMaXN0KGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZTogQ29udHJhY3QuUmFuZ2VWYWx1ZSk6IFJhbmdlU2VsZWN0aW9uTW9kZWwge1xuICAgIGxldCByYW5nZVNlbGVjdGlvbk1vZGVsOiBSYW5nZVNlbGVjdGlvbk1vZGVsID0gbmV3IFJhbmdlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICByYW5nZVNlbGVjdGlvbk1vZGVsLnF1YWxpZmllZEZpZWxkQ2FwdGlvbiA9IGZpZWxkTmFtZTtcbiAgICBpZiAodmFsdWUubWF4ICE9PSB1bmRlZmluZWQgJiYgdmFsdWUubWF4ICE9PSBudWxsKSB7XG4gICAgICByYW5nZVNlbGVjdGlvbk1vZGVsLm1heFZhbHVlID0gdmFsdWUubWF4LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5taW4gIT09IG51bGwpIHtcbiAgICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwubWluVmFsdWUgPSB2YWx1ZS5taW4udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmFuZ2VTZWxlY3Rpb25Nb2RlbC5pbmNsdWRlZCA9IHRoaXMudmFsaWRhdGVOdWxsT3B0aW9uVHlwZSh2YWx1ZS5udWxsT3B0aW9uKTtcbiAgICByZXR1cm4gcmFuZ2VTZWxlY3Rpb25Nb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdmFsaWRhdGUgdGhlIHNlbGVjdGlvbiB1cGRhdGUgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBzdHJpbmcge1xuICAgIGlmIChzZWxlY3Rpb25VcGRhdGVUeXBlID09PSBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlLlJlcGxhY2UpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuUmVwbGFjZTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuQWRkKSB7XG4gICAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLkFkZDtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuUmVtb3ZlKSB7XG4gICAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLlJlbW92ZTtcbiAgICB9XG4gICAgcmV0dXJuIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbC5SZXBsYWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgaW5jbHVkZSB0eXBlIGZvciByYW5nZSBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBudWxsT3B0aW9uXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlTnVsbE9wdGlvblR5cGUobnVsbE9wdGlvbjogQ29udHJhY3QuRmlsdGVyTnVsbE9wdGlvbiB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gICAgaWYgKG51bGxPcHRpb24pIHtcbiAgICAgIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLk51bGxWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLkluY2x1ZGVOdWxsO1xuICAgICAgfSBlbHNlIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLkluY2x1ZGVOb25OdWxsO1xuICAgICAgfSBlbHNlIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLkFsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZUFsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZUFsbDtcbiAgfVxuXG59XG5cbi8qKlxuICogRW51bSBmb3IgdGhlIGRpZmZlcmVudCBzZWxlY3Rpb24gY3JpdGVyaWEgdHlwZXMuXG4gKi9cbmVudW0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlIHtcbiAgSGllcmFyY2hpY2FsVHlwZSA9IDEsXG4gIFJhbmdlVHlwZSA9IDIsXG4gIERpbWVuc2lvblR5cGUgPSAzLFxuICBUdXBsZXNUeXBlID0gNCxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VsZWN0aW9uU2VydmljZUltcGwudHMiLCIvKipcbiAqIFNlbGVjdGlvbiBNb2RlbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIHF1YWxpZmllZEZpZWxkQ2FwdGlvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIFZhbHVlIGJhc2VkIHNlbGVjdGlvbiBtb2RlbC4gTWVhbnQgZm9yIGhpZXJhcmNoaWNhbCwgcmFuZ2UgYW5kIGNhdGVnb3JpY2FsIHNlbGVjdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIGV4dGVuZHMgU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgc2VsZWN0VmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG59XG5cbi8qKlxuICogSGllcmFyY2hpY2FsIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbn1cblxuLyoqXG4gKiBSYW5nZSBiYXNlZCB2YWx1ZSBzZWxlY3Rpb24gbW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFJhbmdlU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBTZWxlY3Rpb25Nb2RlbCB7XG4gIHB1YmxpYyBtaW5WYWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgbWF4VmFsdWU6IHN0cmluZztcbiAgcHVibGljIGluY2x1ZGVkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGltZW5zaW9uIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbn1cbi8qKlxuICogVHVwbGUgYmFzZWQgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBUdXBsZVNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IHN0cmluZztcbiAgcHVibGljIG9iamVjdElkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xufVxuXG4vKipcbiAqIENvbnRhaW5lciBjbGFzcyB0byBwb3B1bGF0ZSBhbGwgdGhlIHNlbGVjdGlvbiBtb2RlbHMgd2hlbiBwYXJzaW5nIGlucHV0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICBwdWJsaWMgaGllck1vZGVsQXJyOiBBcnJheTxIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIGRpbU1vZGVsQXJyOiBBcnJheTxEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIHF1YW50TW9kZWxBcnI6IEFycmF5PFJhbmdlU2VsZWN0aW9uTW9kZWw+ID0gW107XG4gIHB1YmxpYyBzZWxlY3Rpb246IFR1cGxlU2VsZWN0aW9uTW9kZWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzLnRzIiwiaW1wb3J0IHsgRGFzaGJvYXJkT2JqZWN0IH0gZnJvbSAnLi4vLi4vRGFzaGJvYXJkT2JqZWN0JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uLy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRXh0ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJJZCwgVmVyYklkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBab25lU2VydmljZSB9IGZyb20gJy4uL1pvbmVTZXJ2aWNlJztcbmltcG9ydCB7IFpvbmVWaXNpYmlsaXR5VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgWm9uZVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgWm9uZVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5ab25lO1xuICB9XG5cbiAgcHVibGljIHNldFZpc2liaWxpdHlBc3luYyhcbiAgICBkYXNoYm9hcmQ6IFN0cmluZyxcbiAgICBkYXNoYm9hcmRPYmplY3RzOiBBcnJheTxEYXNoYm9hcmRPYmplY3Q+LFxuICAgIHpvbmVWaXNpYmlsaXR5TWFwOiBNYXA8bnVtYmVyLCBab25lVmlzaWJpbGl0eVR5cGU+KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICBPYmplY3Qua2V5cyh6b25lVmlzaWJpbGl0eU1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPFpvbmVWaXNpYmlsaXR5VHlwZT4oem9uZVZpc2liaWxpdHlNYXBba2V5XSwgWm9uZVZpc2liaWxpdHlUeXBlKTtcbiAgICAgIEVycm9ySGVscGVycy52ZXJpZnlab25lSXNWYWxpZChkYXNoYm9hcmRPYmplY3RzLCBOdW1iZXIucGFyc2VJbnQoa2V5LCAxMCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5EYXNoYm9hcmRdOiBkYXNoYm9hcmQsXG4gICAgICBbUGFyYW1ldGVySWQuWm9uZUlkc1Zpc2liaWxpdHlNYXBdOiB7fVxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyh6b25lVmlzaWJpbGl0eU1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlpvbmVJZHNWaXNpYmlsaXR5TWFwXVtrZXldID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLnNldFZpc2liaWxpdHlUeXBlLmNvbnZlcnQoem9uZVZpc2liaWxpdHlNYXBba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TZXRab25lVmlzaWJpbGl0eSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvWm9uZVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBEYXNoYm9hcmRDb250ZW50IG5hbWVzcGFjZS5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgRGFzaGJvYXJkQ29udGVudCBpc1xuICogY3VycmVudGx5IGp1c3QgYSAoc2luZ2xlKSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb250ZW50IGltcGxlbWVudHMgQ29udHJhY3QuRGFzaGJvYXJkQ29udGVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXNoYm9hcmQ6IENvbnRyYWN0LkRhc2hib2FyZCkgeyB9XG5cbiAgcHVibGljIGdldCBkYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25FbnZpcm9ubWVudCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRW51bU1hcHBpbmdzLCBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgZW52aXJvbm1lbnQgbmFtZXNwYWNlLlxuICogRW52aXJvbm1lbnQgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXNcbiAqIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCBpbXBsZW1lbnRzIENvbnRyYWN0LkVudmlyb25tZW50IHtcbiAgcHJpdmF0ZSBfYXBpVmVyc2lvbjogc3RyaW5nO1xuICBwcml2YXRlIF9jb250ZXh0OiBDb250cmFjdC5FeHRlbnNpb25Db250ZXh0O1xuICBwcml2YXRlIF9sYW5ndWFnZTogc3RyaW5nO1xuICBwcml2YXRlIF9sb2NhbGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbW9kZTogQ29udHJhY3QuRXh0ZW5zaW9uTW9kZTtcbiAgcHJpdmF0ZSBfb3BlcmF0aW5nU3lzdGVtOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RhYmxlYXVWZXJzaW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2V4dGVybmFsU2NyaXB0VmVyc2lvbjogVmVyc2lvbk51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXh0ZW5zaW9uRW52aXJvbm1lbnQ6IEV4dGVuc2lvbkVudmlyb25tZW50KSB7XG4gICAgdGhpcy5fYXBpVmVyc2lvbiA9IGV4dGVuc2lvbkVudmlyb25tZW50LmFwaVZlcnNpb247XG4gICAgdGhpcy5fY29udGV4dCA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Db250ZXh0LmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uQ29udGV4dCk7XG4gICAgdGhpcy5fbGFuZ3VhZ2UgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25MYW5ndWFnZTtcbiAgICB0aGlzLl9sb2NhbGUgPSBleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25Mb2NhbGU7XG4gICAgdGhpcy5fbW9kZSA9IEVudW1NYXBwaW5ncy5leHRlbnNpb25Nb2RlLmNvbnZlcnQoZXh0ZW5zaW9uRW52aXJvbm1lbnQuZXh0ZW5zaW9uTW9kZSk7XG4gICAgdGhpcy5fb3BlcmF0aW5nU3lzdGVtID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQub3BlcmF0aW5nU3lzdGVtO1xuICAgIHRoaXMuX3RhYmxlYXVWZXJzaW9uID0gZXh0ZW5zaW9uRW52aXJvbm1lbnQudGFibGVhdVZlcnNpb247XG4gICAgdGhpcy5fZXh0ZXJuYWxTY3JpcHRWZXJzaW9uID0gVmVyc2lvbk51bWJlci5JbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXBpVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hcGlWZXJzaW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBjb250ZXh0KCk6IENvbnRyYWN0LkV4dGVuc2lvbkNvbnRleHQge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICB9XG5cbiAgcHVibGljIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbW9kZSgpOiBDb250cmFjdC5FeHRlbnNpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3BlcmF0aW5nU3lzdGVtKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGluZ1N5c3RlbTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGFibGVhdVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVhdVZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV4dGVybmFsU2NyaXB0VmVyc2lvbigpOiBWZXJzaW9uTnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZXJuYWxTY3JpcHRWZXJzaW9uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FbnZpcm9ubWVudC50cyIsImltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUmVnaXN0cnkgfSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2VJbXBsIH0gZnJvbSAnLi9JbXBsL0luaXRpYWxpemF0aW9uU2VydmljZUltcGwnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlSW1wbCB9IGZyb20gJy4vSW1wbC9TZXR0aW5nc1NlcnZpY2VJbXBsJztcbmltcG9ydCB7IFVJU2VydmljZUltcGwgfSBmcm9tICcuL0ltcGwvVUlTZXJ2aWNlSW1wbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyhkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpOiB2b2lkIHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFNldHRpbmdzU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBVSVNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcy50cyIsImltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeHRlbnNpb25Cb290c3RyYXBJbmZvLFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IEluaXRpYWxpemF0aW9uU2VydmljZSB9IGZyb20gJy4uL0luaXRpYWxpemF0aW9uU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBJbml0aWFsaXphdGlvblNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgSW5pdGlhbGl6YXRpb25TZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFeHRlbnNpb25zU2VydmljZU5hbWVzLkluaXRpYWxpemF0aW9uU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplRGFzaGJvYXJkRXh0ZW5zaW9uc0FzeW5jKGlzRXh0ZW5zaW9uRGlhbG9nOiBib29sZWFuLCBjb250ZXh0TWVudUlkczogc3RyaW5nW10pOiBQcm9taXNlPEV4dGVuc2lvbkJvb3RzdHJhcEluZm8+IHtcbiAgICBjb25zdCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkNvbnRleHRNZW51SWRzXTogY29udGV4dE1lbnVJZHMsXG4gICAgICBbUGFyYW1ldGVySWQuSXNFeHRlbnNpb25EaWFsb2ddOiBpc0V4dGVuc2lvbkRpYWxvZ1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5Jbml0aWFsaXplRXh0ZW5zaW9uLCBwYXJhbXMpLnRoZW48RXh0ZW5zaW9uQm9vdHN0cmFwSW5mbz4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gVE9ETyAtIFZhbGlkYXRlIHJldHVybiB2YWx1ZVxuXG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL0luaXRpYWxpemF0aW9uU2VydmljZUltcGwudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4dGVuc2lvblNldHRpbmdzSW5mbyxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbGxlY3Rpb24sIFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL1NldHRpbmdzU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgU2V0dGluZ3NTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBFeHRlbnNpb25zU2VydmljZU5hbWVzLlNldHRpbmdzU2VydmljZTtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlU2V0dGluZ3NBc3luYyhzZXR0aW5nczogU2V0dGluZ3NDb2xsZWN0aW9uKTogUHJvbWlzZTxTZXR0aW5nc0NvbGxlY3Rpb24+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLlNldHRpbmdzVmFsdWVzXTogc2V0dGluZ3MgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNhdmVFeHRlbnNpb25TZXR0aW5ncywgcGFyYW1ldGVycykudGhlbjxTZXR0aW5nc0NvbGxlY3Rpb24+KHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlLnJlc3VsdCBhcyBFeHRlbnNpb25TZXR0aW5nc0luZm87XG5cbiAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuc2V0dGluZ3NWYWx1ZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdVbmV4cGVjdGVkIGVycm9yIHNhdmluZ3Mgc2V0dGluZ3MuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAocmVzdWx0LnNldHRpbmdzVmFsdWVzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IERpYWxvZ09wdGlvbnMsIEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeHRlbnNpb25EaWFsb2dSZXN1bHQsXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlLCBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuLi9VSVNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX0RJQUxPR19IRUlHSFQ6IG51bWJlciA9IDQwMDsgLy8gaW4gcGl4ZWxzXG5jb25zdCBERUZBVUxUX0RJQUxPR19XSURUSDogbnVtYmVyID0gNjAwOyAvLyBpbiBwaXhlbHNcblxuZXhwb3J0IGNsYXNzIFVJU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBVSVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuVUlTZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIGRpc3BsYXlEaWFsb2dBc3luYyh1cmw6IHN0cmluZywgcGF5bG9hZDogc3RyaW5nLCBvcHRpb25zPzogRGlhbG9nT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dVcmxdOiB1cmwsXG4gICAgICBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nUGF5bG9hZF06IHBheWxvYWRcbiAgICB9O1xuXG4gICAgY29uc3QgaDogbnVtYmVyID0gKChvcHRpb25zKSAmJiAob3B0aW9ucy5oZWlnaHQpKSA/IG9wdGlvbnMuaGVpZ2h0IDogREVGQVVMVF9ESUFMT0dfSEVJR0hUO1xuICAgIGNvbnN0IHc6IG51bWJlciA9ICgob3B0aW9ucykgJiYgKG9wdGlvbnMud2lkdGgpKSA/IG9wdGlvbnMud2lkdGggOiBERUZBVUxUX0RJQUxPR19XSURUSDtcblxuICAgIC8vIE9uIHRoZSBwbGF0Zm9ybSBzaWRlLCB3ZSBkbyBzb21ldGhpbmcgcmVhc29uYWJsZSByZWdhcmRlc3Mgb2Ygd2hldGhlciB0aGUgcGFzc2VkXG4gICAgLy8gaGVpZ2h0IGFuZCB3aWR0aCBhcmUgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4gIEJ1dCB0aGlzIGxpa2VseSBpbmRpY2F0ZXMgYSBkZXZlbG9wZXIgZXJyb3IsXG4gICAgLy8gc28gd2UgdGhyb3cgYW4gZXJyb3IgaGVyZSB0byBoZWxwIHdpdGggZGVidWdnaW5nLlxuICAgIGlmIChoIDw9IDAgfHwgdyA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgJ1NpemUgcGFyYW1ldGVycyBmb3IgZGlzcGxheURpYWxvZ0FzeW5jIG11c3QgYmUgcG9zaXRpdmUnKTtcbiAgICB9XG5cbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ0hdID0gaDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1ddID0gdztcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkRpc3BsYXlEaWFsb2csIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGlhbG9nUmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdDtcbiAgICAgIHN3aXRjaCAoZGlhbG9nUmVzdWx0KSB7XG4gICAgICAgIGNhc2UgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0LkRpYWxvZ0FscmVhZHlPcGVuOlxuICAgICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5EaWFsb2dBbHJlYWR5T3BlbiwgJ1RoZXJlIGFscmVhZHkgZXhpc3RzIGFuIG9wZW4gZGlhbG9nIGZvciB0aGlzIGV4dGVuc2lvbi4nKTtcbiAgICAgICAgY2FzZSBFeHRlbnNpb25EaWFsb2dSZXN1bHQuSW52YWxpZERvbWFpbjpcbiAgICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZERvbWFpbkRpYWxvZyxcbiAgICAgICAgICAgICdUaGUgdXJsIG9mIGFuIGV4dGVuc2lvbiBkaWFsb2cgbXVzdCBtYXRjaCB0aGUgZG9tYWluIG9mIHRoZSBwYXJlbnQgZXh0ZW5zaW9uLicpO1xuICAgICAgICBkZWZhdWx0OiAvLyBTdWNjZXNzIGNhc2VcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2cocGF5bG9hZD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IChwYXlsb2FkKSA/IHsgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1BheWxvYWRdOiBwYXlsb2FkIH0gOiB7fTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkNsb3NlRGlhbG9nLCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvVUlTZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IFNldHRpbmdzIGFzIFNldHRpbmdzQ29udHJhY3QgfSBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IFNldHRpbmdzSW1wbCB9IGZyb20gJy4uL0ltcGwvU2V0dGluZ3NJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiB9IGZyb20gJy4uL1NlcnZpY2VzL1NldHRpbmdzU2VydmljZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIHNldHRpbmdzIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBTZXR0aW5nc0NvbnRyYWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NldHRpbmdzSW1wbDogU2V0dGluZ3NJbXBsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgb3VyIGV2ZW50IGhhbmRsaW5nIGZvciB0aGlzIGNsYXNzXG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmluaXRpYWxpemVFdmVudHMoKS5mb3JFYWNoKGUgPT4gdGhpcy5hZGROZXdFdmVudFR5cGUoZSkpO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLmVyYXNlKGtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbCgpOiBTZXR0aW5nc0NvbGxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuZ2V0QWxsKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTW9kaWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5pc01vZGlmaWVkO1xuICB9XG5cbiAgcHVibGljIHNhdmVBc3luYygpOiBQcm9taXNlPFNldHRpbmdzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuc2F2ZUFzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0dGluZ3NJbXBsLnNldChrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvblNldHRpbmdzSW5mbywgTm90aWZpY2F0aW9uSWQsIFNldHRpbmdzRXZlbnQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIEVycm9ySGVscGVycyxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBTaW5nbGVFdmVudE1hbmFnZXIsXG4gIFNpbmdsZUV2ZW50TWFuYWdlckltcGwsXG4gIFRhYmxlYXVFcnJvcixcbiAgVGFibGVhdUV2ZW50XG59IGZyb20gJy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlJztcblxuY2xhc3MgU2V0dGluZ3NDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5TZXR0aW5nc0NoYW5nZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZXdTZXR0aW5nczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuU2V0dGluZ3NDaGFuZ2VkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3U2V0dGluZ3MoKTogU2V0dGluZ3NDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fbmV3U2V0dGluZ3M7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW1wbCB7XG4gIHByaXZhdGUgc3RhdGljIEFTWU5DX1NBVkVfSU5fUFJPR1JFU1M6IHN0cmluZyA9ICdBc3luYyBTYXZlIGlzIGluIHByb2dyZXNzLCB1cGRhdGluZyBzZXR0aW5ncyBpcyBub3QgYWxsb3dlZC4nO1xuICBwcml2YXRlIF9pc01vZGlmaWVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jdXJyZW50U2V0dGluZ3M6IFNldHRpbmdzQ29sbGVjdGlvbjtcblxuICAvLyBTaW5jZSBwcm9taXNlcyBjYW4ndCBiZSBpbnRyb3NwZWN0ZWQgZm9yIHN0YXRlLCBrZWVwIGEgdmFyaWFibGUgdGhhdFxuICAvLyBpbmRpY2F0ZXMgYSBzYXZlIGlzIGluIHByb2dyZXNzLCBzbyB0aGF0IHNldC9lcmFzZSBjYW4ndCBiZSBjYWxsZWQgZHVyaW5nIGEgc2F2ZS5cbiAgcHJpdmF0ZSBfc2F2ZUluUHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3NJbmZvOiBFeHRlbnNpb25TZXR0aW5nc0luZm8pIHtcbiAgICB0aGlzLmluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm8pO1xuICB9XG5cbiAgcHVibGljIGVyYXNlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihrZXksICdrZXknKTtcblxuICAgIC8vIE9ubHkgbWFrZSBhIG1vZGlmaWNhdGlvbiBpZiB3ZSBoYXZlIHRoZSBrZXkgYWxyZWFkeVxuICAgIGlmICh0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSkge1xuICAgICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XTtcbiAgICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoa2V5LCAna2V5Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFNldHRpbmdzW2tleV07XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgLy8gUmV0dXJucyBhIG11dGFibGUgY29weSBvZiB0aGUgc2V0dGluZ3NcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNb2RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb2RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlQXN5bmMoKTogUHJvbWlzZTxTZXR0aW5nc0NvbGxlY3Rpb24+IHtcbiAgICB0aGlzLnZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTtcblxuICAgIC8vIEp1c3QgcmVzb2x2ZSBpbW1lZGlhdGVseSBpZiBzZXR0aW5ncyBhcmUgdW5jaGFuZ2VkXG4gICAgaWYgKCF0aGlzLl9pc01vZGlmaWVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlPFNldHRpbmdzQ29sbGVjdGlvbj4odGhpcy5fY3VycmVudFNldHRpbmdzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICAvLyBVc2UgdGhlIHNldHRpbmdzIHNlcnZpY2UgdG8gc2F2ZSBzZXR0aW5ncyB0byB0d2JcbiAgICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZXR0aW5nc1NlcnZpY2U+KFxuICAgICAgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5TZXR0aW5nc1NlcnZpY2UpO1xuXG4gICAgcmV0dXJuIHNldHRpbmdzU2VydmljZS5zYXZlU2V0dGluZ3NBc3luYyh0aGlzLl9jdXJyZW50U2V0dGluZ3MpLnRoZW48U2V0dGluZ3NDb2xsZWN0aW9uPihuZXdTZXR0aW5ncyA9PiB7XG4gICAgICB0aGlzLl9zYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNNb2RpZmllZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IG5ld1NldHRpbmdzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jdXJyZW50U2V0dGluZ3MsIG5ld1NldHRpbmdzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdTZXR0aW5ncztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5U3RyaW5nUGFyYW1ldGVyKGtleSwgJ2tleScpOyAvLyBLZXkgc2hvdWxkbid0IGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHZhbHVlLCAndmFsdWUnKTsgLy8gRW1wdHkgc3RyaW5nIHZhbHVlIGlzIGFsbG93ZWQuXG4gICAgdGhpcy52ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk7XG5cbiAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGFsbCBldmVudHMgcmVsZXZhbnQgdG8gc2V0dGluZ3Mgb2JqZWN0LiAgVGhpcyBpcyBvbmx5IGEgc2V0dGluZ3NVcGRhdGUgZXZlbnQgY3VycmVudGx5LlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPn0gQ29sbGVjdGlvbiBvZiBldmVudCBtYW5hZ2VycyB0byBwYXNzIHRvIGFuIEV2ZW50TGlzdGVuZXJNYW5hZ2VyLlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMoKTogQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+KCk7XG4gICAgbGV0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2U7XG5cbiAgICB0cnkge1xuICAgICAgbm90aWZpY2F0aW9uU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPE5vdGlmaWNhdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5Ob3RpZmljYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgdGhpcyBzZXJ2aWNlIHJlZ2lzdGVyZWQsIGp1c3QgcmV0dXJuXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXR0aW5nc0NoYW5nZWRFdmVudCA9IG5ldyBTaW5nbGVFdmVudE1hbmFnZXJJbXBsPFNldHRpbmdzQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlNldHRpbmdzQ2hhbmdlZCk7XG4gICAgbm90aWZpY2F0aW9uU2VydmljZS5yZWdpc3RlckhhbmRsZXIoTm90aWZpY2F0aW9uSWQuU2V0dGluZ3NDaGFuZ2VkLCAobW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIChldmVudDogU2V0dGluZ3NFdmVudCkgPT4ge1xuICAgICAgdGhpcy5fY3VycmVudFNldHRpbmdzID0gZXZlbnQubmV3U2V0dGluZ3M7XG4gICAgICBzZXR0aW5nc0NoYW5nZWRFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IFNldHRpbmdzQ2hhbmdlZEV2ZW50KGV2ZW50Lm5ld1NldHRpbmdzKSk7XG4gICAgfSk7XG5cbiAgICByZXN1bHRzLnB1c2goc2V0dGluZ3NDaGFuZ2VkRXZlbnQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2V0dGluZ3NJbmZvLCAnc2V0dGluZ3NJbmZvJyk7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZXR0aW5nc0luZm8uc2V0dGluZ3NWYWx1ZXMsICdzZXR0aW5nc0luZm8uU2V0dGluZ3NWYWx1ZXMnKTtcblxuICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5ncyA9IHNldHRpbmdzSW5mby5zZXR0aW5nc1ZhbHVlcztcblxuICAgIC8vIFJlc2V0IHRoZSBpc01vZGlmaWVkIGZsYWdcbiAgICB0aGlzLl9pc01vZGlmaWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoZWxwZXIgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgYW55IGxvY2FsIHVwZGF0ZSB0byB0aGlzLmN1cnJlbnRTZXR0aW5ncy5cbiAgICogQ2hlY2tzIGlmIGEgY3VycmVudCBzYXZlIGNhbGwgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MgYW5kIHRocm93cyBhbiBlcnJvciBpZiBzby5cbiAgICovXG4gIHByaXZhdGUgdmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2F2ZUluUHJvZ3Jlc3MpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5TZXR0aW5nU2F2ZUluUHJvZ3Jlc3MsIFNldHRpbmdzSW1wbC5BU1lOQ19TQVZFX0lOX1BST0dSRVNTKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1NldHRpbmdzSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVUlJbXBsIH0gZnJvbSAnLi4vSW1wbC9VSUltcGwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBVSSBuYW1lc3BhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBVSSBpbXBsZW1lbnRzIENvbnRyYWN0LlVJIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ltcGw6IFVJSW1wbCkgeyB9XG5cbiAgcHVibGljIGRpc3BsYXlEaWFsb2dBc3luYyh1cmw6IHN0cmluZywgcGF5bG9hZD86IHN0cmluZywgb3B0aW9ucz86IENvbnRyYWN0LkRpYWxvZ09wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9pbXBsLmRpc3BsYXlEaWFsb2dBc3luYyh1cmwsIHBheWxvYWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nKHBheWxvYWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9pbXBsLmNsb3NlRGlhbG9nKHBheWxvYWQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9VSS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRGlhbG9nVXBkYXRlRXZlbnQsIE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeSxcbiAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgU2VydmljZU5hbWVzLFxuICBUYWJsZWF1RXJyb3Jcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvVUlTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFVJSW1wbCB7XG4gIHB1YmxpYyBkaXNwbGF5RGlhbG9nQXN5bmModXJsOiBzdHJpbmcsIHBheWxvYWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBDb250cmFjdC5EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB1aVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxVSVNlcnZpY2U+KEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuVUlTZXJ2aWNlKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdWlTZXJ2aWNlLmRpc3BsYXlEaWFsb2dBc3luYyh1cmwsIHBheWxvYWQgfHwgJycsIG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB1bnJlZ2lzdGVyRm4gPSBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5FeHRlbnNpb25EaWFsb2dVcGRhdGUsIChtb2RlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBMZXQgdGhyb3VnaCBhbnkgZGlhbG9nIHVwZGF0ZSBldmVudFxuICAgICAgICB9LCAoZXZlbnQ6IERpYWxvZ1VwZGF0ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzQ2xvc2VFdmVudCkge1xuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5jbG9zZVBheWxvYWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkRpYWxvZ0Nsb3NlZEJ5VXNlciwgJ0V4dGVuc2lvbiBkaWFsb2cgY2xvc2VkIGJ5IHVzZXIuJykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVucmVnaXN0ZXJGbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2cocGF5bG9hZD86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVpU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFVJU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLlVJU2VydmljZSk7XG5cbiAgICB1aVNlcnZpY2UuY2xvc2VEaWFsb2cocGF5bG9hZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1VJSW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgQ2FsbGJhY2tNYXAsIEV4dGVuc2lvbnNJbXBsIH0gZnJvbSAnLi4vSW1wbC9FeHRlbnNpb25zSW1wbCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIEV4dGVuc2lvbnMgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9ucyBpbXBsZW1lbnRzIENvbnRyYWN0LkV4dGVuc2lvbnMge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBleHRlbnNpb25JbXBsOiBFeHRlbnNpb25zSW1wbCkge1xuICAgIHRoaXMuZXh0ZW5zaW9uSW1wbCA9IGV4dGVuc2lvbkltcGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZENvbnRlbnQoKTogQ29udHJhY3QuRGFzaGJvYXJkQ29udGVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5kYXNoYm9hcmRDb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudCgpOiBDb250cmFjdC5FbnZpcm9ubWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5lbnZpcm9ubWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2V0dGluZ3MoKTogQ29udHJhY3QuU2V0dGluZ3Mge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuc2V0dGluZ3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHVpKCk6IENvbnRyYWN0LlVJIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLnVpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVBc3luYyhjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmMoZmFsc2UsIGNvbnRleHRNZW51Q2FsbGJhY2tzKS50aGVuPHZvaWQ+KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZURpYWxvZ0FzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC5pbml0aWFsaXplQXN5bmModHJ1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0V4dGVuc2lvbnMudHMiXSwic291cmNlUm9vdCI6IiJ9