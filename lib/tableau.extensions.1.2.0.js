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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
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
__export(__webpack_require__(115));


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
__webpack_require__(116);
__export(__webpack_require__(119));
__export(__webpack_require__(120));
__export(__webpack_require__(121));
__export(__webpack_require__(122));
__export(__webpack_require__(58));
__export(__webpack_require__(59));
__export(__webpack_require__(126));
__export(__webpack_require__(60));
// These are the exports from the messaging stuff
__export(__webpack_require__(129));
__export(__webpack_require__(40));
// Export a hardcoded version of the internal contract. This should match what's in package.json.
// Normally, we'd use some sort of webpack replacement to inject this into code, but that doesn't
// work with the module-dev-scripts and this isn't too much work.
// If you forget to keep this in sync with package.json, a test will fail so we should be ok.
exports.INTERNAL_CONTRACT_VERSION = {
    major: 1,
    minor: 10,
    fix: 1
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
var Dashboard_1 = __webpack_require__(114);
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(39);
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(4);
exports.TableauError = TableauError_1.TableauError;
var VersionNumber_1 = __webpack_require__(57);
exports.VersionNumber = VersionNumber_1.VersionNumber;
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(62);
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(42);
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(132);
exports.DashboardImpl = DashboardImpl_1.DashboardImpl;
var ServiceImplBase_1 = __webpack_require__(12);
exports.ServiceImplBase = ServiceImplBase_1.ServiceImplBase;
var ErrorHelpers_1 = __webpack_require__(8);
exports.ErrorHelpers = ErrorHelpers_1.ErrorHelpers;
__export(__webpack_require__(143));
__export(__webpack_require__(145));
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
var IE8_DOM_DEFINE = __webpack_require__(75);
var toPrimitive = __webpack_require__(76);
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
var $keys = __webpack_require__(82);
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
var $iterCreate = __webpack_require__(79);
var setToStringTag = __webpack_require__(36);
var getPrototypeOf = __webpack_require__(85);
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
var invoke = __webpack_require__(95);
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

__webpack_require__(109);
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
    // build numbers have this form: M.m.f-pre.N
    function VersionNumber(versionString, isAlpha) {
        var partStr = versionString.split('-');
        this.build = this.getBuildNumber(partStr[1]);
        versionString = partStr[0];
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(123);
var IdentityVersionConverter_1 = __webpack_require__(124);
var VersionTranslations_1 = __webpack_require__(125);
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
exports.GetMaximumMinorIndex = GetMaximumMinorIndex;


/***/ }),
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(66);
var ConnectionSummary_1 = __webpack_require__(139);
var Field_1 = __webpack_require__(67);
var TableSummary_1 = __webpack_require__(140);
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
/* 66 */
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
/* 67 */
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
var TableauSheetEvent_1 = __webpack_require__(69);
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
/* 69 */
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
var TableauEvent_1 = __webpack_require__(62);
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
/* 70 */
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(73);
__webpack_require__(103);
__webpack_require__(55);
// Due to the way we configured webpack, we should be exporting things which will be under
// a global variable called "tableau". Export everything we want to be visible under tableau
// from this file.
var ExtensionsImpl_1 = __webpack_require__(113);
var Extensions_1 = __webpack_require__(169);
var ApiShared_1 = __webpack_require__(5);
var isAlpha = typeof EXTENSION_VERSION_IS_ALPHA !== 'undefined' ? EXTENSION_VERSION_IS_ALPHA : false;
ApiShared_1.VersionNumber.SetVersionNumber( true ? "1.2.0-pre.10" : '0.0.0', isAlpha);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
__webpack_require__(77);
__webpack_require__(86);
__webpack_require__(89);
__webpack_require__(101);
__webpack_require__(102);
module.exports = __webpack_require__(6).Promise;


/***/ }),
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(18) && !__webpack_require__(27)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(78)(true);

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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(80);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(81);
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
/* 81 */
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(32);
var arrayIndexOf = __webpack_require__(83)(false);
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(32);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(84);
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(87);
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(50);
var step = __webpack_require__(88);
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
/* 88 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var global = __webpack_require__(3);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(24);
var $export = __webpack_require__(11);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(23);
var anInstance = __webpack_require__(90);
var forOf = __webpack_require__(91);
var speciesConstructor = __webpack_require__(51);
var task = __webpack_require__(52).set;
var microtask = __webpack_require__(96)();
var newPromiseCapabilityModule = __webpack_require__(38);
var perform = __webpack_require__(53);
var userAgent = __webpack_require__(97);
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
  Internal.prototype = __webpack_require__(98)($Promise.prototype, {
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
__webpack_require__(99)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(100)(function (iter) {
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
/* 90 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(92);
var isArrayIter = __webpack_require__(93);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(34);
var getIterFn = __webpack_require__(94);
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
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 94 */
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
/* 95 */
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
/* 96 */
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(17);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 99 */
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
/* 100 */
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
/* 101 */
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
/* 102 */
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(6).Array.find;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(11);
var $find = __webpack_require__(105)(5);
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
/* 105 */
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
var asc = __webpack_require__(106);
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(107);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(108);
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(16);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(110) });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(111);
var pIE = __webpack_require__(112);
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
/* 111 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
var DashboardContent_1 = __webpack_require__(158);
var Environment_1 = __webpack_require__(159);
var ExtensionsApiExternalContract_1 = __webpack_require__(15);
var RegisterAllExtensionsServices_1 = __webpack_require__(160);
var Settings_1 = __webpack_require__(164);
var SettingsImpl_1 = __webpack_require__(165);
var ApiShared_2 = __webpack_require__(5);
var UI_1 = __webpack_require__(166);
var UIImpl_1 = __webpack_require__(167);
var VersionNumber_1 = __webpack_require__(57);
var VersionedExternalApiDispatcher_1 = __webpack_require__(168);
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
                throw new ApiShared_2.TableauError(ExtensionsApiExternalContract_1.ErrorCodes.InternalError, 'Unexpected error during initialization.');
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
/* 114 */
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
/* 115 */
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
module.exports = __webpack_require__(6).Number.isInteger;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(11);

$export($export.S, 'Number', { isInteger: __webpack_require__(118) });


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(10);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 119 */
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
/* 120 */
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
/* 121 */
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
/* 122 */
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
/* 123 */
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
/* 124 */
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
/* 125 */
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VersionConverterFactory_1 = __webpack_require__(59);
var ExternalIdentityVersionConverter_1 = __webpack_require__(60);
var ExternalStackingVersionConverter_1 = __webpack_require__(127);
var ExternalVersionTranslations_1 = __webpack_require__(128);
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
/* 127 */
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
/* 128 */
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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(61);
var CrossFramePreparedMessage_1 = __webpack_require__(130);
var MessageTypes_1 = __webpack_require__(40);
var MessageTypeChecks_1 = __webpack_require__(131);
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
/* 130 */
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
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(61);
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
/* 132 */
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
var DashboardObject_1 = __webpack_require__(133);
var api_internal_contract_js_1 = __webpack_require__(1);
var ErrorHelpers_1 = __webpack_require__(8);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var Point_1 = __webpack_require__(134);
var SheetImpl_1 = __webpack_require__(63);
var SheetInfoImpl_1 = __webpack_require__(135);
var Size_1 = __webpack_require__(136);
var Worksheet_1 = __webpack_require__(137);
var WorksheetImpl_1 = __webpack_require__(138);
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
/* 133 */
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
/* 134 */
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
/* 135 */
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
/* 136 */
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
var api_internal_contract_js_1 = __webpack_require__(1);
var DataSource_1 = __webpack_require__(64);
var DataSourceImpl_1 = __webpack_require__(65);
var SheetImpl_1 = __webpack_require__(63);
var SingleEventManagerImpl_1 = __webpack_require__(42);
var FilterChangedEvent_1 = __webpack_require__(141);
var MarksSelectedEvent_1 = __webpack_require__(142);
var GetDataService_1 = __webpack_require__(70);
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
/* 139 */
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
/* 140 */
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
/* 141 */
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
var TableauWorksheetEvent_1 = __webpack_require__(68);
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
var Contract = __webpack_require__(0);
var TableauWorksheetEvent_1 = __webpack_require__(68);
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(1);
var CrossFrameDispatcher_1 = __webpack_require__(144);
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
/* 144 */
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(7);
var DataSourceServiceImpl_1 = __webpack_require__(146);
var FilterServiceImpl_1 = __webpack_require__(147);
var GetDataServiceImpl_1 = __webpack_require__(149);
var NotificationServiceImpl_1 = __webpack_require__(150);
var ParametersServiceImpl_1 = __webpack_require__(151);
var SelectionServiceImpl_1 = __webpack_require__(155);
var ZoneServiceImpl_1 = __webpack_require__(157);
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
var SharedApiExternalContract_1 = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var TableauError_1 = __webpack_require__(4);
var Field_1 = __webpack_require__(67);
var FieldImpl_1 = __webpack_require__(66);
var DataSource_1 = __webpack_require__(64);
var DataSourceImpl_1 = __webpack_require__(65);
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
var ExternalToInternalEnumMappings_1 = __webpack_require__(71);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var FilterModels_1 = __webpack_require__(148);
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
/* 148 */
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
var api_internal_contract_js_1 = __webpack_require__(1);
var ServiceImplBase_1 = __webpack_require__(12);
var GetDataModels_1 = __webpack_require__(44);
var GetDataService_1 = __webpack_require__(70);
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
/* 150 */
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
var ServiceImplBase_1 = __webpack_require__(12);
var ParameterImpl_1 = __webpack_require__(152);
var Parameter_1 = __webpack_require__(154);
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var InternalToExternalEnumMappings_1 = __webpack_require__(14);
var ParameterChangedEvent_1 = __webpack_require__(153);
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
var Contract = __webpack_require__(0);
var ServiceRegistry_1 = __webpack_require__(7);
var TableauError_1 = __webpack_require__(4);
var TableauSheetEvent_1 = __webpack_require__(69);
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
var Contract = __webpack_require__(0);
var api_internal_contract_js_1 = __webpack_require__(1);
var SelectionModels_1 = __webpack_require__(156);
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
/* 156 */
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
var ErrorHelpers_1 = __webpack_require__(8);
var ExternalToInternalEnumMappings_1 = __webpack_require__(71);
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
/* 158 */
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
/* 159 */
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
        this._apiVersion = ApiShared_1.VersionNumber.Instance && ApiShared_1.VersionNumber.Instance.formattedValue; // maj.min.fix (no build)
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiShared_1 = __webpack_require__(5);
var InitializationServiceImpl_1 = __webpack_require__(161);
var SettingsServiceImpl_1 = __webpack_require__(162);
var UIServiceImpl_1 = __webpack_require__(163);
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
/* 164 */
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
/* 165 */
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
/* 166 */
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
/* 167 */
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
/* 168 */
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
/* 169 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzQ2YzVjMzY4Y2YxMzdlNWU4MDMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvSnNBcGlJbnRlcm5hbENvbnRyYWN0LnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9BcGlTaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlcnZpY2VJbXBsQmFzZS50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRMaXN0ZW5lck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VUeXBlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FbnVtQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9QYXJhbS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvR2V0RGF0YU1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2hlZXQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVmVyc2lvbk51bWJlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1ZlcmJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvZXh0ZXJuYWwvRXh0ZXJuYWxJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ndWlkL2d1aWQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXRhU291cmNlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGF0YVNvdXJjZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9GaWVsZEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVXb3Jrc2hlZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvVGFibGVhdVNoZWV0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvR2V0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL2FycmF5L2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvRXh0ZW5zaW9uc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvRXh0ZXJuYWxDb250cmFjdC9FbnVtcy50cyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vbnVtYmVyL2lzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvRW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvY29udHJhY3QvTm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1BhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL1N0YWNraW5nVmVyc2lvbkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uVHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9leHRlcm5hbC9FeHRlcm5hbFZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9leHRlcm5hbC9FeHRlcm5hbFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvZXh0ZXJuYWwvRXh0ZXJuYWxWZXJzaW9uVHJhbnNsYXRpb25zLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9NZXNzYWdlVHlwZUNoZWNrcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL0Rhc2hib2FyZEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRGFzaGJvYXJkT2JqZWN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BvaW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvU2hlZXRJbmZvSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TaXplLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1dvcmtzaGVldC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1dvcmtzaGVldEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ29ubmVjdGlvblN1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVGFibGVTdW1tYXJ5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9GaWx0ZXJDaGFuZ2VkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL01hcmtzU2VsZWN0ZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVCb290c3RyYXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9SZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRGF0YVNvdXJjZVNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRmlsdGVyU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvTW9kZWxzL0ZpbHRlck1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL05vdGlmaWNhdGlvblNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvUGFyYW1ldGVyc1NlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvUGFyYW1ldGVySW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvUGFyYW1ldGVyQ2hhbmdlZEV2ZW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BhcmFtZXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL1NlbGVjdGlvblNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9TZWxlY3Rpb25Nb2RlbHMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9ab25lU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvUmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9TZXR0aW5nc1NlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9TZXJ2aWNlcy9JbXBsL1VJU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL05hbWVzcGFjZXMvU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvU2V0dGluZ3NJbXBsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL1VJLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL1VJSW1wbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL1ZlcnNpb25lZEV4dGVybmFsQXBpRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FeHRlbnNpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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bEQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQztBQTVCWSxnQ0FBVSIsImZpbGUiOiJ0YWJsZWF1LmV4dGVuc2lvbnMuMS4yLjAtcHJlLjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QtZXh0ZW5zaW9ucy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzQ2YzVjMzY4Y2YxMzdlNWU4MDMiLCIvLyBUaGlzIGZpbGUgcmUtZXhwb3J0cyBldmVyeXRoaW5nIHdoaWNoIGlzIHBhcnQgb2YgdGhlIHNoYXJlZCBlbWJlZGRpbmcgYXBpIHB1YmxpYyBpbnRlcmZhY2VcblxuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L0RhdGFTb3VyY2VJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9EYXRhVGFibGVJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9FbnVtcyc7XG5leHBvcnQgKiBmcm9tICcuL0V4dGVybmFsQ29udHJhY3QvRXZlbnRJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9GaWx0ZXJJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TZWxlY3Rpb25JbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9QYXJhbWV0ZXJJbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TZWxlY3Rpb25JbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9TaGVldEludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L1RhYmxlYXVFcnJvcic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QudHMiLCIvKipcbiAqIFRoaXMgaXMgeW91ciBtYWluLiBUaGlzIGlzIHdoZXJlIHlvdSByZS1leHBvcnQgZXZlcnl0aGluZyB5b3Ugd2FudCB0byBiZSBwdWJsaWNseSBhdmFpbGFibGUuXG4gKlxuICogVGhlIGJ1aWxkIGVuZm9yY2VzIHRoYXQgdGhlIGZpbGUgaGFzIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGdsb2JhbCB2YXJpYWJsZSB0aGF0IGlzIGV4cG9ydGVkLlxuICovXG5cbi8vIFRoZSBmb2xsb3dpbmcgcG9seWZpbGxzIGFyZSBuZWVkZWQgZm9yIElFMTFcbmltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJztcbmltcG9ydCAnY29yZS1qcy9mbi9udW1iZXIvaXMtaW50ZWdlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvRW51bXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvSW50ZXJuYWxBcGlEaXNwYXRjaGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvTW9kZWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29udHJhY3QvTm90aWZpY2F0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRyYWN0L1BhcmFtZXRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cmFjdC9WZXJicyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZS9Jbml0aWFsaXphdGlvbk9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvVmVyc2lvbk51bWJlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb25pbmcvVmVyc2lvbkNvbnZlcnRlckZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsVmVyc2lvbkNvbnZlcnRlckZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uaW5nL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbmluZy9leHRlcm5hbC9FeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb25pbmcvZXh0ZXJuYWwvRXh0ZXJuYWxJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXInO1xuXG4vLyBUaGVzZSBhcmUgdGhlIGV4cG9ydHMgZnJvbSB0aGUgbWVzc2FnaW5nIHN0dWZmXG5cbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VEaXNwYXRjaGVyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9NZXNzYWdlTGlzdGVuZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdpbmcvaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2VuZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnaW5nL2ludGVyZmFjZS9QcmVwYXJlZE1lc3NhZ2UnO1xuXG4vLyBFeHBvcnQgYSBoYXJkY29kZWQgdmVyc2lvbiBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3QuIFRoaXMgc2hvdWxkIG1hdGNoIHdoYXQncyBpbiBwYWNrYWdlLmpzb24uXG4vLyBOb3JtYWxseSwgd2UnZCB1c2Ugc29tZSBzb3J0IG9mIHdlYnBhY2sgcmVwbGFjZW1lbnQgdG8gaW5qZWN0IHRoaXMgaW50byBjb2RlLCBidXQgdGhhdCBkb2Vzbid0XG4vLyB3b3JrIHdpdGggdGhlIG1vZHVsZS1kZXYtc2NyaXB0cyBhbmQgdGhpcyBpc24ndCB0b28gbXVjaCB3b3JrLlxuLy8gSWYgeW91IGZvcmdldCB0byBrZWVwIHRoaXMgaW4gc3luYyB3aXRoIHBhY2thZ2UuanNvbiwgYSB0ZXN0IHdpbGwgZmFpbCBzbyB3ZSBzaG91bGQgYmUgb2suXG5leHBvcnQgY29uc3QgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTiA9IHtcbiAgbWFqb3I6IDEsXG4gIG1pbm9yOiAxMCxcbiAgZml4OiAxXG59O1xuXG4vLyBFeHBvcnQgdGhlIHZlcnNpb24gbnVtYmVyIG9mIG1lc3NhZ2luZyBmb3IgY29uc3VtZXJzIHRvIHVzZS5cbi8vIEJlIHZlcnkgY2FyZWZ1bCBtYWtpbmcgYW55IHVwZGF0ZXMgdG8gdGhpcyBjb250cmFjdCB3aGljaCBicmVhayB2ZXJzaW9uIGNvbXBhdGliaWxpdHkuXG5leHBvcnQgY29uc3QgTUVTU0FHSU5HX1ZFUlNJT04gPSB7XG4gIG1ham9yOiAxLFxuICBtaW5vcjogMCxcbiAgZml4OiAwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9Kc0FwaUludGVybmFsQ29udHJhY3QudHMiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEN1c3RvbSBlcnJvciBjbGFzcyB0aGF0IGV4dGVuZHMgdGhlIGRlZmF1bHQgSmF2YVNjcmlwdCBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGFsbG93cyB1cyB0byBwcm92aWRlIGEgZmllbGQgd2l0aCBhIHNwZWNpZmljIGVycm9yIGNvZGVcbiAqIHNvIHRoYXQgZGV2ZWxvcGVycyBjYW4gbW9yZSBlYXNpbHkgcHJvZ3JhbW1hdGljYWxseSByZXNwb25kXG4gKiB0byBlcnJvciBzY2VuYXJpb3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZWF1RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lcnJvckNvZGU6IENvbnRyYWN0LkVycm9yQ29kZXMsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKGAke19lcnJvckNvZGV9OiAke21lc3NhZ2V9YCk7XG5cbiAgICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXG4gICAgLy8gRXJyb3IgaW5oZXJpdGFuY2UgZG9lcyBub3Qgd29yayBwcm9wZXJ0bHkgd2hlbiBjb21waWxpbmcgdG8gRVM1LCB0aGlzIGlzIGEgd29ya2Fyb3VuZCB0byBmb3JjZVxuICAgIC8vIHRoZSBwcm90byBjaGFpbiB0byBiZSBidWlsdCBjb3JyZWN0bHkuICBTZWUgdGhlIGdpdGh1YiBsaW5rIGFib3ZlIGZvciBkZXRhaWxzLlxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBUYWJsZWF1RXJyb3IucHJvdG90eXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3JDb2RlKCk6IENvbnRyYWN0LkVycm9yQ29kZXMge1xuICAgIHJldHVybiB0aGlzLl9lcnJvckNvZGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1RhYmxlYXVFcnJvci50cyIsIi8vIEV4cG9ydCBldmVyeXRoaW5nIHdoaWNoIGhhZCBiZWVuIHByZXZpb3VzbHkgaW4gdGhlIGFwaS1zaGFyZWQgbW9kdWxlXG5cbmV4cG9ydCB7IERhc2hib2FyZCB9IGZyb20gJy4vQXBpU2hhcmVkL0Rhc2hib2FyZCc7XG5leHBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vQXBpU2hhcmVkL0V2ZW50TGlzdGVuZXJNYW5hZ2VyJztcbmV4cG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4vQXBpU2hhcmVkL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5leHBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuL0FwaVNoYXJlZC9UYWJsZWF1RXJyb3InO1xuZXhwb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4vQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXInO1xuXG5leHBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgfSBmcm9tICcuL0FwaVNoYXJlZC9FbnVtTWFwcGluZ3MvSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzJztcbmV4cG9ydCB7IFRhYmxlYXVFdmVudCB9IGZyb20gJy4vQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQnO1xuZXhwb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vQXBpU2hhcmVkL0ltcGwvU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5leHBvcnQgeyBEYXNoYm9hcmRJbXBsIH0gZnJvbSAnLi9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsJztcbmV4cG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VydmljZUltcGxCYXNlJztcbmV4cG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4vQXBpU2hhcmVkL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL0Nyb3NzRnJhbWUvQ3Jvc3NGcmFtZUJvb3RzdHJhcCc7XG5leHBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvTm90aWZpY2F0aW9uU2VydmljZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9BcGlTaGFyZWQvU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvQXBpU2hhcmVkLnRzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBhbiBhcGkgc2VydmljZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwaVNlcnZpY2Uge1xuICAvKipcbiAgICogR2V0cyB0aGUgbmFtZSBmb3IgdGhpcyBzZXJ2aWNlLlxuICAgKi9cbiAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIHNlcnZpY2UgbmFtZSB3aGljaCB3aWxsIGJlIHJlZ2lzdGVyZWQgaW4gdGhlIGFwaS1zaGFyZWQgcHJvamVjdFxuICovXG5leHBvcnQgY29uc3QgZW51bSBTZXJ2aWNlTmFtZXMge1xuICBEYXRhU291cmNlU2VydmljZSA9ICdkYXRhLXNvdXJjZS1zZXJ2aWNlJyxcbiAgR2V0RGF0YSA9ICdnZXQtZGF0YS1zZXJ2aWNlJyxcbiAgRmlsdGVyID0gJ2ZpbHRlci1zZXJ2aWNlJyxcbiAgTm90aWZpY2F0aW9uID0gJ25vdGlmaWNhdGlvbi1zZXJ2aWNlJyxcbiAgUGFyYW1ldGVycyA9ICdwYXJhbWV0ZXJzLXNlcnZpY2UnLFxuICBTZWxlY3Rpb24gPSAnc2VsZWN0aW9uLXNlcnZpY2UnLFxuICBab25lID0gJ3pvbmUtc2VydmljZSdcbn1cblxuLyoqXG4gKiBEbyBzb21lIGdsb2JhYmwgZGVjbGFyYXRpb25zIHNvIHdlIGNhbiBjcmVhdGUgYSBzaW5nbGV0b24gb24gdGhlIHdpbmRvdyBvYmplY3RcbiAqL1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5OiBTZXJ2aWNlUmVnaXN0cnkgfCB1bmRlZmluZWQ7IH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlUmVnaXN0cnkge1xuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgbmV3IHNlcnZpY2UgaW50byB0aGUgc2VydmljZSByZWdpc3RyeS4gQW55IGV4aXN0aW5nIG9uZSB3aWxsXG4gICAqIGJlIG92ZXJ3cml0dGVuLiB0aGUgc2VydmljZSBpcyByZWdpc3RlcmVkIHVuZGVyIHNlcnZpY2Uuc2VydmljZU5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtBcGlTZXJ2aWNlfSBzZXJ2aWNlIFRoZSBzZXJ2aXZlIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlclNlcnZpY2Uoc2VydmljZTogQXBpU2VydmljZSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZ2l2ZW4gc2VydmljZSBmcm9tIHRoZSByZWdpc3RyeS4gSWYgdGhlcmUgaXMgbm90IGFcbiAgICogc2VydmljZSByZWdpc3RlcmVkIHVuZGVyIHRoYXQgbmFtZSwgdGhyb3dzIGFuZCBlcnJvclxuICAgKlxuICAgKiBAdGVtcGxhdGUgVCBUaGUgdHlwZSBvZiB0aGUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UuXG4gICAqIEByZXR1cm5zIHtUfSBUaGUgcmVxdWVzdGVkIHNlcnZpY2VcbiAgICovXG4gIGdldFNlcnZpY2U8VCBleHRlbmRzIEFwaVNlcnZpY2U+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUO1xufVxuXG5jbGFzcyBTZXJ2aWNlUmVnaXN0cnlJbXBsIGltcGxlbWVudHMgU2VydmljZVJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSBfc2VydmljZXM6IHsgW3NlcnZpY2VOYW1lOiBzdHJpbmddOiBBcGlTZXJ2aWNlOyB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlcyA9IHt9O1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyU2VydmljZShzZXJ2aWNlOiBBcGlTZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5fc2VydmljZXNbc2VydmljZS5zZXJ2aWNlTmFtZV0gPSBzZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIGdldFNlcnZpY2U8VCBleHRlbmRzIEFwaVNlcnZpY2U+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUIHtcbiAgICBpZiAoIXRoaXMuX3NlcnZpY2VzLmhhc093blByb3BlcnR5KHNlcnZpY2VOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBTZXJ2aWNlIG5vdCByZWdpc3RlcmVkOiAke3NlcnZpY2VOYW1lfWApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlc1tzZXJ2aWNlTmFtZV0gYXMgVDtcbiAgfVxufVxuXG4vKipcbiAqIHN0YXRpYyBjbGFzcyB1c2VkIGZvciBnZXR0aW5nIGFjY2VzcyB0byB0aGUgc2luZ2xlIGluc3RhbmNlXG4gKiBvZiB0aGUgQXBpU2VydmljZVJlZ2lzdHJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlUmVnaXN0cnkge1xuICAvKipcbiAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBTZXJ2aWNlUmVnaXN0cnlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFNlcnZpY2VSZWdpc3RyeSB7XG4gICAgaWYgKCF3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgICBBcGlTZXJ2aWNlUmVnaXN0cnkuc2V0SW5zdGFuY2UobmV3IFNlcnZpY2VSZWdpc3RyeUltcGwoKSk7XG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cuX190YWJsZWF1QXBpU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1NlcnZpY2UgcmVnaXN0cnkgZmFpbGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBvdmVycmlkZSB0aGUgcmVnaXN0cnkgaW5zdGFuY2UuIENhbiBiZSB1c2VkIGJ5IHVuaXQgdGVzdHNcbiAgICpcbiAgICogQHBhcmFtIHtTZXJ2aWNlUmVnaXN0cnl9IHNlcnZpY2VSZWdpc3RyeSBUaGUgbmV3IHJlZ2lzdHJ5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKHNlcnZpY2VSZWdpc3RyeT86IFNlcnZpY2VSZWdpc3RyeSk6IHZvaWQge1xuICAgIHdpbmRvdy5fX3RhYmxlYXVBcGlTZXJ2aWNlUmVnaXN0cnkgPSBzZXJ2aWNlUmVnaXN0cnk7XG4gIH1cblxuICAvLyBQcml2YXRlIHRvIGF2b2lkIGFueW9uZSBjb25zdHJ1Y3RpbmcgdGhpc1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnkudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFBhcmFtIH0gZnJvbSAnLi9QYXJhbSc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBEYXNoYm9hcmRPYmplY3QgfSBmcm9tICcuLi9EYXNoYm9hcmRPYmplY3QnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb25zdHJ1Y3QgY29tbW9uIGVycm9ycyB0aHJvdWdob3V0IHRoZSBleHRlcm5hbFxuICogcHJvamVjdHMgKGFwaS1zaGFyZWQsIGV4dGVuc2lvbnMtYXBpLCBldGMuKS4gIEl0IGhhcyBzb21lIGR1cGxpY2F0aW9uIHdpdGhcbiAqIHRoZSBFcnJvckhlbHBlcnMgY2xhc3MgaW4gYXBpLWNvcmUsIGJ1dCBpcyBzZXBhcmF0ZSBkdWUgdG8gdGhlIG5lZWQgdG8gdGhyb3dcbiAqIGFuIGV4dGVybmFsIFRhYmxlYXVFcnJvciB2cy4gYW4gSW50ZXJuYWxUYWJsZWF1RXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBFcnJvckhlbHBlcnMge1xuICAvKipcbiAgICogVGhyb3dzIHdpdGggY29kZSBJbnRlcm5hbEVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gYXBpTmFtZSBuYW1lIG9mIGFwaSB0aGF0IHdhcyBjYWxsZWQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwaU5vdEltcGxlbWVudGVkKGFwaU5hbWU6IHN0cmluZyk6IFRhYmxlYXVFcnJvciB7XG4gICAgcmV0dXJuIG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgJHthcGlOYW1lfSBBUEkgbm90IHlldCBpbXBsZW1lbnRlZC5gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gaW50ZXJuYWwgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeUludGVybmFsVmFsdWUoYXJndW1lbnRWYWx1ZTogYW55LCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmd1bWVudFZhbHVlIHZhbHVlIHRvIHZlcmlmeVxuICAgKiBAcGFyYW0gYXJndW1lbnROYW1lIG5hbWUgb2YgYXJndW1lbnQgdG8gdmVyaWZ5XG4gICAqL1xuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBwdWJsaWMgc3RhdGljIHZlcmlmeVBhcmFtZXRlcihhcmd1bWVudFZhbHVlOiBhbnksIGFyZ3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGFyZ3VtZW50VmFsdWUgPT09IG51bGwgfHwgYXJndW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgYCR7YXJndW1lbnRWYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgcGFyYW10ZXI6ICR7YXJndW1lbnROYW1lfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gSW52YWxpZFBhcmFtZXRlciBlcnJvciBpZiBhcmd1bWVudCBpcyBlbXB0eSBzdHJpbmcsIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYXJndW1lbnRWYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGFyZ3VtZW50TmFtZSBuYW1lIG9mIGFyZ3VtZW50IHRvIHZlcmlmeVxuICAgKi9cbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlTdHJpbmdQYXJhbWV0ZXIoYXJndW1lbnRWYWx1ZTogc3RyaW5nLCBhcmd1bWVudE5hbWU6IHN0cmluZykge1xuICAgIGlmIChhcmd1bWVudFZhbHVlID09PSBudWxsIHx8IGFyZ3VtZW50VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBhcmd1bWVudFZhbHVlID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2FyZ3VtZW50VmFsdWV9IGlzIGludmFsaWQgdmFsdWUgZm9yIHBhcmFtdGVyOiAke2FyZ3VtZW50TmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgcGFzc2VkIHZhbHVlIGlzIGEgdmFsaWQgdmFsdWUgZm9yIHRoYXQgZW51bS5cbiAgICogVGhyb3dzIGFuIEludmFsaWRQYXJhbWV0ZXIgZXJyb3IgaWYgdGhlIGVudW0gdmFsdWUgaXMgbm90IHZhbGlkLlxuICAgKlxuICAgKiBTdHJpbmcgZW51bXMgYXJlIHtzdHJpbmcgOiBzdHJpbmd9IGRpY3Rpb25hcmllcyB3aGljaCBhcmUgbm90IHJldmVyc2UgbWFwcGFibGVcbiAgICogVGhpcyBpcyBhbiB1Z2x5IHdvcmthcm91bmRcbiAgICpcbiAgICogQHBhcmFtIGVudW1WYWx1ZSB2YWx1ZSB0byB2ZXJpZnlcbiAgICogQHBhcmFtIGVudW1UeXBlIGVudW0gdG8gdmVyaWZ5IGFnYWluc3RcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5RW51bVZhbHVlPEVudW1UeXBlPihlbnVtVmFsdWU6IEVudW1UeXBlLCBlbnVtVHlwZTogYW55KSB7XG4gICAgbGV0IGlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhlbnVtVHlwZSkuZm9yRWFjaCgoZW51bUtleSkgPT4ge1xuICAgICAgaWYgKGVudW1UeXBlW2VudW1LZXldID09PSBlbnVtVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsIGAke2VudW1WYWx1ZX0gaXMgaW52YWxpZCB2YWx1ZSBmb3IgZW51bTogJHtlbnVtVHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIHBhcmFtcyBtaW4gYW5kIG1heCBmb3IgYXBwbHlpbmcgcmFuZ2UgZmlsdGVyLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgcmFuZ2UgaXMgaW52YWxpZC5cbiAgICpcbiAgICogQHBhcmFtIG1pbiByYW5nZSBtaW5cbiAgICogQHBhcmFtIG1heCByYW5nZSBtYXhcbiAgICovXG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZ5UmFuZ2VQYXJhbVR5cGUobWluOiBhbnksIG1heDogYW55KTogdm9pZCB7XG4gICAgaWYgKCFtaW4gJiYgIW1heCkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludmFsaWRQYXJhbWV0ZXIsXG4gICAgICAgICdVbmV4cGVjdGVkIGludmFsaWQgcGFyYW0gdmFsdWUsIGF0IGxlYXN0IG9uZSBvZiBtaW4gb3IgbWF4IGlzIHJlcXVpcmVkLicpO1xuICAgIH1cblxuICAgIGlmIChtaW4gJiYgIVBhcmFtLmlzVHlwZU51bWJlcihtaW4pICYmICFQYXJhbS5pc1R5cGVEYXRlKG1pbikpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBvbmx5IERhdGUgYW5kIG51bWJlciBhcmUgYWxsb3dlZCBmb3IgcGFyYW1ldGVyIG1pbi4nKTtcbiAgICB9XG5cbiAgICBpZiAobWF4ICYmICFQYXJhbS5pc1R5cGVOdW1iZXIobWF4KSAmJiAhUGFyYW0uaXNUeXBlRGF0ZShtYXgpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgJ1VuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgb25seSBEYXRlIGFuZCBudW1iZXIgYXJlIGFsbG93ZWQgZm9yIHBhcmFtZXRlciBtYXguJyk7XG4gICAgfVxuXG4gICAgaWYgKG1pbiAmJiBtYXggJiYgdHlwZW9mIChtaW4pICE9PSB0eXBlb2YgKG1heCkpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLFxuICAgICAgICAnVW5leHBlY3RlZCBpbnZhbGlkIHBhcmFtIHZhbHVlLCBwYXJhbWV0ZXJzIG1pbiBhbmQgbWF4IHNob3VsZCBiZSBvZiB0aGUgc2FtZSB0eXBlLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IHRoZSB6b25lSWQgaXMgcHJlc2VudCBpbiB0aGUgY3VycmVudCBkYXNoYm9hcmQgYW5kIGlzIEZsb2F0aW5nLlxuICAgKiBUaHJvd3Mgd2l0aCBlcnJvciBjb2RlIEludmFsaWRQYXJhbWV0ZXIgaWYgZWl0aGVyIGNvbmRpdGlvbiBpcyBmYWxzZS5cbiAgICpcbiAgICogQHBhcmFtIGRhc2hib2FyZE9iamVjdHMgQW4gYXJyYXkgb2YgYWxsIERhc2hib2FyZE9iamVjdHMgaW4gdGhlIGN1cnJlbnQgZGFzaGJvYXJkXG4gICAqIEBwYXJhbSB6b25lSUQgWm9uZUlkIHRvIGJlIHZhbGlkYXRlZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB2ZXJpZnlab25lSXNWYWxpZChkYXNoYm9hcmRPYmplY3RzOiBBcnJheTxEYXNoYm9hcmRPYmplY3Q+LCB6b25lSUQ6IG51bWJlcik6IHZvaWQge1xuXG4gICAgbGV0IGlzVmFsaWQgPSBkYXNoYm9hcmRPYmplY3RzLnNvbWUoKGRhc2hib2FyZE9iamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIGRhc2hib2FyZE9iamVjdC5pZCA9PT0gem9uZUlEICYmIGRhc2hib2FyZE9iamVjdC5pc0Zsb2F0aW5nO1xuICAgIH0pO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlcixcbiAgICAgICAgYFVuZXhwZWN0ZWQgaW52YWxpZCBwYXJhbSB2YWx1ZSwgWm9uZSBJZDogJHt6b25lSUR9IGlzIGVpdGhlciBub3QgcHJlc2VudCBvciBpcyBhIGZpeGVkIHpvbmUuYCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FcnJvckhlbHBlcnMudHMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXhlY3V0ZVJlc3BvbnNlLFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXIsXG4gIEludGVybmFsVGFibGVhdUVycm9yLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgU2hvdWxkVGhyb3cgfSBmcm9tICcuLi8uLi9VdGlscy9FbnVtQ29udmVydGVyJztcblxuLyoqXG4gKiBFYWNoIFNlcnZjZUltcGwgc2hvdWxkIGV4dGVuZCB0aGlzIGJhc2UgY2xhc3MgZm9yIHRoZSBzYWtlIG9mXG4gKiBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuICBUaGlzIGJhc2UgaGFuZGxlcyB0aGUgY29udmVyc2lvblxuICogZnJvbSBpbnRlcm5hbCBlcnJvcnMgdG8gZXh0ZXJuYWwgZXJyb3JzIHRoYXQgd2UgdGhyb3cgdG8gZGV2ZWxvcGVyc1xuICovXG5leHBvcnQgY2xhc3MgU2VydmljZUltcGxCYXNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcikgeyB9XG5cbiAgcHJvdGVjdGVkIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbXM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGF0Y2hlci5leGVjdXRlKHZlcmIsIHBhcmFtcykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyBBbnkgaW50ZXJuYWwgZXJyb3IgdGhhdCBjb21lcyBmcm9tIHRoZSBkaXNwYXRjaGVyIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgICAgIC8vIHRvIGFuIGV4dGVybmFsIGVycm9yIHVzaW5nIHRoZSBlbnVtIG1hcHBlciBmb3IgZXJyb3IgY29kZXMuXG4gICAgICBjb25zdCBpbnRlcm5hbEVycm9yID0gZXJyb3IgYXMgSW50ZXJuYWxUYWJsZWF1RXJyb3I7XG4gICAgICBjb25zdCBleHRlcm5hbEVycm9yQ29kZTogRXJyb3JDb2RlcyA9IEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5lcnJvckNvZGUuY29udmVydChpbnRlcm5hbEVycm9yLmVycm9yQ29kZSwgU2hvdWxkVGhyb3cuTm8pO1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihleHRlcm5hbEVycm9yQ29kZSwgaW50ZXJuYWxFcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9TZXJ2aWNlSW1wbEJhc2UudHMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuICBDb2x1bW5UeXBlIGFzIEV4dGVybmFsQ29sdW1uVHlwZSxcbiAgRGFzaGJvYXJkT2JqZWN0VHlwZSBhcyBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlIGFzIEV4dGVybmFsRGF0YVR5cGUsXG4gIERhdGVSYW5nZVR5cGUgYXMgRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLFxuICBFcnJvckNvZGVzIGFzIEV4dGVybmFsRXJyb3JDb2RlcyxcbiAgRXh0ZW5zaW9uQ29udGV4dCBhcyBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LFxuICBFeHRlbnNpb25Nb2RlIGFzIEV4dGVybmFsRXh0ZW5zaW9uc01vZGUsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlIGFzIEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsXG4gIEZpZWxkUm9sZVR5cGUgYXMgRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJUeXBlIGFzIEV4dGVybmFsRmlsdGVyVHlwZSxcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFBhcmFtZXRlclZhbHVlVHlwZSBhcyBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZSxcbiAgUGVyaW9kVHlwZSBhcyBFeHRlcm5hbERhdGVQZXJpb2QsXG4gIFNoZWV0VHlwZSBhcyBFeHRlcm5hbFNoZWV0VHlwZSxcbn0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIENvbHVtblR5cGUgYXMgSW50ZXJuYWxDb2x1bW5UeXBlLFxuICBEYXNoYm9hcmRPYmplY3RUeXBlIGFzIEludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZSxcbiAgRGF0YVR5cGUgYXMgSW50ZXJuYWxEYXRhVHlwZSxcbiAgRGF0ZVJhbmdlVHlwZSBhcyBJbnRlcm5hbERhdGVSYW5nZVR5cGUsXG4gIERhdGVTdGVwUGVyaW9kIGFzIEludGVybmFsRGF0ZVN0ZXBQZXJpb2QsXG4gIERvbWFpblJlc3RyaWN0aW9uVHlwZSBhcyBJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZSxcbiAgRXJyb3JDb2RlcyBhcyBJbnRlcm5hbEVycm9yQ29kZXMsXG4gIEV4dGVuc2lvbkNvbnRleHQgYXMgSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dCxcbiAgRXh0ZW5zaW9uTW9kZSBhcyBJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLFxuICBGaWVsZEFnZ3JlZ2F0aW9uVHlwZSBhcyBJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlIGFzIEludGVybmFsRmllbGRSb2xlVHlwZSxcbiAgRmlsdGVyVHlwZSBhcyBJbnRlcm5hbEZpbHRlclR5cGUsXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLFxuICBTaGVldFR5cGUgYXMgSW50ZXJuYWxTaGVldFR5cGUsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi9VdGlscy9FbnVtQ29udmVydGVyJztcblxuLyogdHNsaW50OmRpc2FibGU6dHlwZWRlZiAtIERpc2FibGUgdGhpcyB0byBtYWtlIGRlY2xhcmluZyB0aGVzZSBjbGFzc2VzIGEgYml0IGVhc2llciAqL1xuLyoqXG4gKiBNYXBzIGVudW1zIHVzZWQgYnkgdGhlIGludGVybmFsLWFwaS1jb250cmFjdCB0byB0aGUgZW51bXMgdXNlZFxuICogaW4gdGhlIGV4dGVybmFsLWFwaS1jb250cmFjdCwgd2hpY2ggZGV2ZWxvcGVycyBjb2RlIGFnYWluc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3Mge1xuICBwdWJsaWMgc3RhdGljIGV4dGVuc2lvbkNvbnRleHQgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LCBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0Pih7XG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuRGVza3RvcF06IEV4dGVybmFsRXh0ZW5zaW9uc0NvbnRleHQuRGVza3RvcCxcbiAgICBbSW50ZXJuYWxFeHRlbnNpb25zQ29udGV4dC5TZXJ2ZXJdOiBFeHRlcm5hbEV4dGVuc2lvbnNDb250ZXh0LlNlcnZlclxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGV4dGVuc2lvbk1vZGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEV4dGVuc2lvbnNNb2RlLCBFeHRlcm5hbEV4dGVuc2lvbnNNb2RlPih7XG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc01vZGUuQXV0aG9yaW5nXTogRXh0ZXJuYWxFeHRlbnNpb25zTW9kZS5BdXRob3JpbmcsXG4gICAgW0ludGVybmFsRXh0ZW5zaW9uc01vZGUuVmlld2luZ106IEV4dGVybmFsRXh0ZW5zaW9uc01vZGUuVmlld2luZ1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGNvbHVtblR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbENvbHVtblR5cGUsIEV4dGVybmFsQ29sdW1uVHlwZT4oe1xuICAgIFtJbnRlcm5hbENvbHVtblR5cGUuQ29udGludW91c106IEV4dGVybmFsQ29sdW1uVHlwZS5Db250aW51b3VzLFxuICAgIFtJbnRlcm5hbENvbHVtblR5cGUuRGlzY3JldGVdOiBFeHRlcm5hbENvbHVtblR5cGUuRGlzY3JldGVcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWVsZEFnZ3JlZ2F0aW9uVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUsIEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdHRyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5BdHRyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkF2Z106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuQXZnLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Db3VudGRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkNvdW50ZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5EYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkRheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5FbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkVuZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ib3VyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ib3VyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLkluT3V0XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Jbk91dCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5LdXJ0b3Npc106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuS3VydG9zaXMsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWF4XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NYXgsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWR5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZHksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWVkaWFuXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NZWRpYW4sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWluXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW4sXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTWludXRlXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5NaW51dGUsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTW9udGhZZWFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Nb250aFllYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTm9uZV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuTm9uZSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdHJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF0cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDFdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5RdWFydDNdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlF1YXJ0MyxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5TZWNvbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlNlY29uZCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5Ta2V3bmVzc106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU2tld25lc3MsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2LFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN0ZGV2cF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3RkZXZwLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlN1bV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuU3VtLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jRGF5XTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0RheSxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY0hvdXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jSG91cixcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY01pbnV0ZV06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNaW51dGUsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNb250aF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNNb250aCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5UcnVuY1F0cl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNRdHIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNTZWNvbmRdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jU2Vjb25kLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jV2Vla106IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNXZWVrLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlRydW5jWWVhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVHJ1bmNZZWFyLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlVzZXJdOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLlVzZXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFyXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5WYXIsXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFycF06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuVmFycCxcbiAgICBbSW50ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrXTogRXh0ZXJuYWxGaWVsZEFnZ3JlZ2F0aW9uVHlwZS5XZWVrLFxuICAgIFtJbnRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtkYXldOiBFeHRlcm5hbEZpZWxkQWdncmVnYXRpb25UeXBlLldlZWtkYXksXG4gICAgW0ludGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuWWVhcl06IEV4dGVybmFsRmllbGRBZ2dyZWdhdGlvblR5cGUuWWVhcixcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWVsZFJvbGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWVsZFJvbGVUeXBlLCBFeHRlcm5hbEZpZWxkUm9sZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWVsZFJvbGVUeXBlLkRpbWVuc2lvbl06IEV4dGVybmFsRmllbGRSb2xlVHlwZS5EaW1lbnNpb24sXG4gICAgW0ludGVybmFsRmllbGRSb2xlVHlwZS5NZWFzdXJlXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLk1lYXN1cmUsXG4gICAgW0ludGVybmFsRmllbGRSb2xlVHlwZS5Vbmtub3duXTogRXh0ZXJuYWxGaWVsZFJvbGVUeXBlLlVua25vd24sXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgc2hlZXRUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxTaGVldFR5cGUsIEV4dGVybmFsU2hlZXRUeXBlPih7XG4gICAgW0ludGVybmFsU2hlZXRUeXBlLkRhc2hib2FyZF06IEV4dGVybmFsU2hlZXRUeXBlLkRhc2hib2FyZCxcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuU3RvcnldOiBFeHRlcm5hbFNoZWV0VHlwZS5TdG9yeSxcbiAgICBbSW50ZXJuYWxTaGVldFR5cGUuV29ya3NoZWV0XTogRXh0ZXJuYWxTaGVldFR5cGUuV29ya3NoZWV0XG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZGFzaGJvYXJkT2JqZWN0VHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZSwgRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlPih7XG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5FeHRlbnNpb25dOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuRXh0ZW5zaW9uLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuQmxhbmtdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuQmxhbmssXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5JbWFnZV06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5JbWFnZSxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLkxlZ2VuZF06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5MZWdlbmQsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYWdlRmlsdGVyXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhZ2VGaWx0ZXIsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5QYXJhbWV0ZXJDb250cm9sXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlBhcmFtZXRlckNvbnRyb2wsXG4gICAgW0ludGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5RdWlja0ZpbHRlcl06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5RdWlja0ZpbHRlcixcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRleHRdOiBFeHRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuVGV4dCxcbiAgICBbSW50ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRpdGxlXTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLlRpdGxlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV2ViUGFnZV06IEV4dGVybmFsRGFzaGJvYXJkT2JqZWN0VHlwZS5XZWJQYWdlLFxuICAgIFtJbnRlcm5hbERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0XTogRXh0ZXJuYWxEYXNoYm9hcmRPYmplY3RUeXBlLldvcmtzaGVldFxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGFUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXRhVHlwZSwgRXh0ZXJuYWxEYXRhVHlwZT4oe1xuICAgIFtJbnRlcm5hbERhdGFUeXBlLkJvb2xdOiBFeHRlcm5hbERhdGFUeXBlLkJvb2wsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuRGF0ZV06IEV4dGVybmFsRGF0YVR5cGUuRGF0ZSxcbiAgICBbSW50ZXJuYWxEYXRhVHlwZS5EYXRlVGltZV06IEV4dGVybmFsRGF0YVR5cGUuRGF0ZVRpbWUsXG4gICAgW0ludGVybmFsRGF0YVR5cGUuRmxvYXRdOiBFeHRlcm5hbERhdGFUeXBlLkZsb2F0LFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLkludF06IEV4dGVybmFsRGF0YVR5cGUuSW50LFxuICAgIFtJbnRlcm5hbERhdGFUeXBlLlN0cmluZ106IEV4dGVybmFsRGF0YVR5cGUuU3RyaW5nXG4gIH0pO1xuXG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyVXBkYXRlVHlwZSA9IG5ldyBFbnVtQ29udmVydGVyPEludGVybmFsRmlsdGVyVXBkYXRlVHlwZSwgRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlPih7XG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGRdOiBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWRkLFxuICAgIFtJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFsbCxcbiAgICBbSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZV06IEV4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZW1vdmUsXG4gICAgW0ludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5SZXBsYWNlXTogRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBhbGxvd2FibGVWYWx1ZXMgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZSwgRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGU+KHtcbiAgICBbSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUuQWxsXTogRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUuQWxsLFxuICAgIFtJbnRlcm5hbERvbWFpblJlc3RyaWN0aW9uVHlwZS5MaXN0XTogRXh0ZXJuYWxQYXJhbWV0ZXJWYWx1ZVR5cGUuTGlzdCxcbiAgICBbSW50ZXJuYWxEb21haW5SZXN0cmljdGlvblR5cGUuUmFuZ2VdOiBFeHRlcm5hbFBhcmFtZXRlclZhbHVlVHlwZS5SYW5nZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGVTdGVwUGVyaW9kID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxEYXRlU3RlcFBlcmlvZCwgRXh0ZXJuYWxEYXRlUGVyaW9kPih7XG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuWWVhcnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuWWVhcnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuUXVhcnRlcnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuUXVhcnRlcnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuTW9udGhzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLk1vbnRocyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5XZWVrc106IEV4dGVybmFsRGF0ZVBlcmlvZC5XZWVrcyxcbiAgICBbSW50ZXJuYWxEYXRlU3RlcFBlcmlvZC5EYXlzXTogRXh0ZXJuYWxEYXRlUGVyaW9kLkRheXMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuSG91cnNdOiBFeHRlcm5hbERhdGVQZXJpb2QuSG91cnMsXG4gICAgW0ludGVybmFsRGF0ZVN0ZXBQZXJpb2QuTWludXRlc106IEV4dGVybmFsRGF0ZVBlcmlvZC5NaW51dGVzLFxuICAgIFtJbnRlcm5hbERhdGVTdGVwUGVyaW9kLlNlY29uZHNdOiBFeHRlcm5hbERhdGVQZXJpb2QuU2Vjb25kc1xuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIGRhdGVSYW5nZVR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbERhdGVSYW5nZVR5cGUsIEV4dGVybmFsRGF0ZVJhbmdlVHlwZT4oe1xuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuQ3VycmVudF06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5DdXJyZW50LFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdF06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5MYXN0LFxuICAgIFtJbnRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdE5dOiBFeHRlcm5hbERhdGVSYW5nZVR5cGUuTGFzdE4sXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0XTogRXh0ZXJuYWxEYXRlUmFuZ2VUeXBlLk5leHQsXG4gICAgW0ludGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0Tl06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5OZXh0TixcbiAgICBbSW50ZXJuYWxEYXRlUmFuZ2VUeXBlLlRvRGF0ZV06IEV4dGVybmFsRGF0ZVJhbmdlVHlwZS5Ub0RhdGVcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBlcnJvckNvZGUgPSBuZXcgRW51bUNvbnZlcnRlcjxJbnRlcm5hbEVycm9yQ29kZXMsIEV4dGVybmFsRXJyb3JDb2Rlcz4oe1xuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuSU5JVElBTElaQVRJT05fRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLklOVEVSTkFMX0VSUk9SXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5NSVNTSU5HX0VOVU1fTUFQUElOR106IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuTUlTU0lOR19QQVJBTUVURVJdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlBFUk1JU1NJT05fREVOSUVEXTogRXh0ZXJuYWxFcnJvckNvZGVzLkludGVybmFsRXJyb3IsXG4gICAgW0ludGVybmFsRXJyb3JDb2Rlcy5QUkVTX01PREVMX1BBUlNJTkdfRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcixcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlVOS05PV05fVkVSQl9JRF06IEV4dGVybmFsRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLFxuICAgIFtJbnRlcm5hbEVycm9yQ29kZXMuVkVSU0lPTl9OT1RfQ09ORklHVVJFRF06IEV4dGVybmFsRXJyb3JDb2Rlcy5BUElOb3RJbml0aWFsaXplZCxcbiAgICBbSW50ZXJuYWxFcnJvckNvZGVzLlZJU0lCSUxJVFlfRVJST1JdOiBFeHRlcm5hbEVycm9yQ29kZXMuVmlzaWJpbGl0eUVycm9yLFxuICB9LCBFeHRlcm5hbEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvcik7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8SW50ZXJuYWxGaWx0ZXJUeXBlLCBFeHRlcm5hbEZpbHRlclR5cGU+KHtcbiAgICBbSW50ZXJuYWxGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsXTogRXh0ZXJuYWxGaWx0ZXJUeXBlLkNhdGVnb3JpY2FsLFxuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuUmFuZ2VdOiBFeHRlcm5hbEZpbHRlclR5cGUuUmFuZ2UsXG4gICAgW0ludGVybmFsRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGVdOiBFeHRlcm5hbEZpbHRlclR5cGUuUmVsYXRpdmVEYXRlLFxuICAgIFtJbnRlcm5hbEZpbHRlclR5cGUuSGllcmFyY2hpY2FsXTogRXh0ZXJuYWxGaWx0ZXJUeXBlLkhpZXJhcmNoaWNhbFxuICB9KTtcbn1cbi8qIHRzbGludDplbmFibGU6dHlwZWRlZiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy50cyIsIi8vIFRoaXMgZmlsZSByZS1leHBvcnRzIGV2ZXJ5dGhpbmcgd2hpY2ggaXMgcGFydCBvZiB0aGUgZXh0ZW5zaW9ucyBhcGkgcHVibGljIGludGVyZmFjZVxuXG4vLyBFeHBvcnQgZXZlcnl0aGluZyBmcm9tIHRoZSBzaGFyZWQgZmlsZVxuZXhwb3J0ICogZnJvbSAnLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuLy8gRXhwb3J0IHRoZSBuYW1lc3BhY2VzIHdoaWNoIGFyZSBzcGVjaWZpYyB0byBleHRlbnNpb25zXG5leHBvcnQgeyBFeHRlbnNpb25zIH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRXh0ZW5zaW9ucyc7XG5leHBvcnQgeyBEYXNoYm9hcmRDb250ZW50IH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvRGFzaGJvYXJkQ29udGVudCc7XG5leHBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vRXh0ZXJuYWxDb250cmFjdC9OYW1lc3BhY2VzL0Vudmlyb25tZW50JztcbmV4cG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvU2V0dGluZ3MnO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVUknO1xuZXhwb3J0ICogZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0L05hbWVzcGFjZXMvVGFibGVhdSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0LnRzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4vVGFibGVhdUVycm9yJztcblxuLyoqXG4gKiBDbGFzcyBkZXNpZ25lZCB0byByZWdpc3RlciBhbmQgdW5yZWdpc3RlciBoYW5kbGVycyBmcm9tIGEgdXNlci4gT25seSB0aG9zZSBldmVudHNcbiAqIHdoaWNoIGFyZSBhZGRlZCB2aWEgQWRkTmV3RXZlbnRUeXBlIHdpbGwgYmUgc3VwcG9ydGVkIGJ5IHRoaXMgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXJNYW5hZ2VyIGltcGxlbWVudHMgQ29udHJhY3QuRXZlbnRMaXN0ZW5lck1hbmFnZXIge1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyTWFuYWdlcnM6IHsgW3RhYmxlYXVFdmVudFR5cGU6IHN0cmluZ106IFNpbmdsZUV2ZW50TWFuYWdlcjsgfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzID0ge307XG4gIH1cblxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUsXG4gICAgaGFuZGxlcjogQ29udHJhY3QuVGFibGVhdUV2ZW50SGFuZGxlckZuKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VW5yZWdpc3RlckZuIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vycy5oYXNPd25Qcm9wZXJ0eShldmVudFR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuVW5zdXBwb3J0ZWRFdmVudE5hbWUsIGBDYW5ub3QgYWRkIGV2ZW50LCB1bnN1cHBvcnRlZCBldmVudCB0eXBlOiAke2V2ZW50VHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50VHlwZV0uYWRkRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSwgaGFuZGxlcjogQ29udHJhY3QuVGFibGVhdUV2ZW50SGFuZGxlckZuKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVyTWFuYWdlcnMuaGFzT3duUHJvcGVydHkoZXZlbnRUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLlVuc3VwcG9ydGVkRXZlbnROYW1lLCBgQ2Fubm90IHJlbW92ZSBldmVudCwgdW5zdXBwb3J0ZWQgZXZlbnQgdHlwZTogJHtldmVudFR5cGV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50TGlzdGVuZXJNYW5hZ2Vyc1tldmVudFR5cGVdLnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkTmV3RXZlbnRUeXBlKGV2ZW50TWFuYWdlcjogU2luZ2xlRXZlbnRNYW5hZ2VyKTogdm9pZCB7XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lck1hbmFnZXJzW2V2ZW50TWFuYWdlci5ldmVudFR5cGVdID0gZXZlbnRNYW5hZ2VyO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudExpc3RlbmVyTWFuYWdlci50cyIsImltcG9ydCB7IFZlcnNpb25OdW1iZXIsIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMsIE1vZGVsLCBOb3RpZmljYXRpb25JZCB9IGZyb20gJy4uLy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvSW5pdGlhbGl6YXRpb25PcHRpb25zJztcblxuLyoqXG4gKiBFbnVtIGRlZmluaW5nIHRoZSA0IGRpZmZlcmVudCB0eXBlcyBvZiBtZXNzYWdlcyB3ZSBoYXZlIGRlZmluZWRcbiAqL1xuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBJbml0aWFsaXplID0gJ2luaXRpYWxpemUnLFxuICBOb3RpZmljYXRpb24gPSAnbm90aWZpY2F0aW9uJyxcbiAgQ29tbWFuZCA9ICdjb21tYW5kJyxcbiAgQ29tbWFuZFJlc3BvbnNlID0gJ2NvbW1hbmQtcmVzcG9uc2UnXG59XG5cbi8qKlxuICogVGhlIE1lc3NhZ2UgaW50ZXJmYWNlIGlzIHRoZSBiYXNlIGludGVyZmFjZSBmb3IgYWxsIHRoZSBvdGhlclxuICogbWVzc2FnZSB0eXBlIGludGVyZmFjZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZCBmb3IgdGhpcyBtZXNzYWdlXG4gICAqL1xuICBtc2dHdWlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoaXMgbWVzc2FnZVxuICAgKi9cbiAgbXNnVHlwZTogTWVzc2FnZVR5cGU7XG59XG5cbi8qKlxuICogVGhlIGluaXRpYWxpemUgbWVzc2FnZSBpcyB0aGUgZmlyc3QgbWVzc2FnZSB3aGljaCB3aWxsIGJlIHNlbnRcbiAqIGZyb20gdGhlIGphdmFzY3JpcHQgdG8gc2V0IHVwIGNvbW11bmljYXRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdGlhbGl6ZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBhcGkgd2hpY2ggdGhlIHNlbmRlciB3YW50cyB0byB1c2VcbiAgICovXG4gIGFwaVZlcnNpb246IFZlcnNpb25OdW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJzaW9uIG9mIHRoaXMgbWVzc2FnaW5nIGNvbnRyYWN0IHRvIGJlIHVzZWQuIEZvciBub3csIHRoZXJlXG4gICAqIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHZlcnNpb24gYnV0IHNlbmRpbmcgdGhpcyBhbG9uZyBzaG91bGQgaGVscFxuICAgKiBpZiB3ZSBuZWVkIHRvIGFkZCBhIG5ldyB2ZXJzaW9uIGluIGEgZnV0dXJlIHJlbGVhc2VcbiAgICovXG4gIGNyb3NzRnJhbWVWZXJzaW9uOiBWZXJzaW9uTnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkIGF0IHRoZSB0aW1lIG9mIGluaXRpYWxpemF0aW9uXG4gICAqL1xuICBvcHRpb25zPzogSW5pdGlhbGl6YXRpb25PcHRpb25zO1xufVxuXG4vKipcbiAqIFRoaXMgbWVzc2FnZSBpcyBzZW50IHdoZW4gYSBub3RpZmljYXRpb24gb2NjdXJzIGZyb20gdGhlIHByZXNsYXllclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBmb3IgdGhpcyB0eXBlIG9mIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgbm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0YSB3aGljaCBjYW1lIGFsb25nIHdpdGggdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgZGF0YTogTW9kZWw7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBjYWxsaW5nIGFuIGludGVybmFsIGNvbnRyYWN0IGNvbW1hbmRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kTWVzc2FnZSBleHRlbmRzIE1lc3NhZ2Uge1xuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBjb21tYW5kIHdoaWNoIHNob3VsZCBiZSBleGVjdXRlZFxuICAgKi9cbiAgdmVyYklkOiBWZXJiSWQ7XG5cbiAgLyoqXG4gICAqIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgY29tbWFuZFxuICAgKi9cbiAgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7XG59XG5cbi8qKlxuICogVGhpcyBtZXNzYWdlIGlzIHNlbnQgaW4gcmVzcG9uc2UgdG8gYSBDb21tYW5kTWVzc2FnZSB3aXRoIHRoZVxuICogcmVzdWx0IG9mIHRoYXQgY29tbWFuZHMgaW52b2NhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRSZXNwb25zZU1lc3NhZ2UgZXh0ZW5kcyBNZXNzYWdlIHtcbiAgLyoqXG4gICAqIEd1aWQgb2YgdGhlIENvbW1hbmRNZXNzYWdlIHdoaWNoIHRoaXMgaXMgaW4gcmVzcG9uc2UgdG9cbiAgICovXG4gIGNvbW1hbmRHdWlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIHRoZXJlIHdhcyBhbiBlcnJvciByZXR1cm5lZCBmcm9tIHRoZSBjb21tYW5kLCB0aGlzIHdpbGwgYmUgZGVmaW5lZFxuICAgKiBhbmQgY29udGFpbiB0aGUgZXJyb3JcbiAgICovXG4gIGVycm9yPzogTW9kZWw7XG5cbiAgLyoqXG4gICAqIElmIHRoZSBjb21tYW5kIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseSwgdGhpcyB3aWxsIGNvbnRhaW4gdGhlIGNvbW1hbmQgcmVzdWx0XG4gICAqL1xuICBkYXRhPzogTW9kZWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzLnRzIiwiaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY29udmVydHMgZnJvbSBhIHNvdXJjZSBlbnVtIHZhbHVlIHRvIGRlc3RpbmF0aW9uIGVudW1cbiAqIHZhbHVlIGdpdmVuIGEgbWFwcGluZyBmcm9tIHNvdXJjZSB0byBkZXN0aW5hdGlvbiB3aGVuIGNvbnN0cnVjdGVkLlxuICpcbiAqIE5vdGU6IFRoaXMgZXhhY3Qgc2FtZSBjbGFzcyBpcyBkZWZpbmVkIGluIGFwaS1jb3JlLiAgR2l2ZW4gaXRzIHNtYWxsXG4gKiBuYXR1cmUsIGl0IGlzIG5vdCB3b3J0aCBoYXZpbmcgaW4gYSBzZXBhcmF0ZSBwcm9qZWN0IHRvIHNoYXJlIHRoaXMgYmV0d2VlblxuICogYXBpLWNvcmUgYW5kIGFwaS1zaGFyZWQuICBJZiBtb3JlIHV0aWxpdHkgZnVuY3Rpb25hbGl0eSBpcyBhZGRlZCB0aGF0IGlzIHVzZWQgYnkgYXBpLWNvcmVcbiAqIGFuZCBhcGktc2hhcmVkIGJ1dCBoYXMgbm8gb3RoZXIgZGVwZW5kZWNpZXMsIGEgdXRpbHRpdHkgcHJvamVjdCBtaWdodCBiZSBtZXJpdGVkLFxuICogYW5kIHRoaXMgY2xhc3MgY291bGQgYmUgbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnVtQ29udmVydGVyPFRTb3VyY2VUeXBlIGV4dGVuZHMgc3RyaW5nLCBURGVzdGluYXRpb25UeXBlPiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tYXBwaW5nczogeyBbZW51bVZhbDogc3RyaW5nXTogVERlc3RpbmF0aW9uVHlwZTsgfSxcbiAgICBwcml2YXRlIF9kZWZhdWx0VmFsPzogVERlc3RpbmF0aW9uVHlwZSkgeyB9XG5cbiAgcHVibGljIGNvbnZlcnQoZW51bVZhbDogVFNvdXJjZVR5cGUsIHRocm93SWZNaXNzaW5nOiBTaG91bGRUaHJvdyA9IFNob3VsZFRocm93Llllcyk6IFREZXN0aW5hdGlvblR5cGUge1xuICAgIGlmICh0aGlzLl9tYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShlbnVtVmFsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcHBpbmdzW2VudW1WYWwgYXMgc3RyaW5nXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGVmYXVsdFZhbCAhPT0gdW5kZWZpbmVkICYmIHRocm93SWZNaXNzaW5nICE9PSBTaG91bGRUaHJvdy5ZZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgRW51bSBNYXBwaW5nIG5vdCBmb3VuZCBmb3I6ICR7ZW51bVZhbH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBTaG91bGRUaHJvdyB7XG4gIFllcyA9ICd5ZXMnLFxuICBObyA9ICdubycsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9VdGlscy9FbnVtQ29udmVydGVyLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlciB9IGZyb20gJy4uL1NpbmdsZUV2ZW50TWFuYWdlcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIHRoZSBTaW5nbGVFdmVudE1hbmFnZXIgaW50ZXJmYWNlIGZvciBhIHNpbmdsZSB0eXBlIG9mIFRhYmxlYXUgZXZlbnRcbiAqXG4gKiBAdGVtcGxhdGUgVEV2ZW50VHlwZSBUaGUgVGFibGVhdSBldmVudCB0eXBlIHRoaXMgY2xhc3Mgc3BlY2lhbGl6ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbmdsZUV2ZW50TWFuYWdlckltcGw8VEV2ZW50VHlwZSBleHRlbmRzIENvbnRyYWN0LlRhYmxlYXVFdmVudD4gaW1wbGVtZW50cyBTaW5nbGVFdmVudE1hbmFnZXIge1xuICBwcml2YXRlIF9ldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGU7XG4gIHByaXZhdGUgX2hhbmRsZXJzOiBBcnJheTwoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQ+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihldmVudFR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUpIHtcbiAgICB0aGlzLl9ldmVudFR5cGUgPSBldmVudFR5cGU7XG4gICAgdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXZlbnRUeXBlKCk6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9ldmVudFR5cGU7XG4gIH1cblxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihoYW5kbGVyOiAoZXZlbnRPYmo6IFRFdmVudFR5cGUpID0+IHZvaWQpOiBDb250cmFjdC5UYWJsZWF1RXZlbnRVbnJlZ2lzdGVyRm4ge1xuICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXI6IChldmVudE9iajogVEV2ZW50VHlwZSkgPT4gdm9pZCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGJlZm9yZUNvdW50ID0gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xuICAgIHRoaXMuX2hhbmRsZXJzID0gdGhpcy5faGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XG4gICAgcmV0dXJuIGJlZm9yZUNvdW50ID4gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJFdmVudChldmVudEdlbmVyYXRvcjogKCkgPT4gVEV2ZW50VHlwZSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLl9oYW5kbGVycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXZlbnRNb2RlbCA9IGV2ZW50R2VuZXJhdG9yKCk7XG4gICAgICAgIGhhbmRsZXIoZXZlbnRNb2RlbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFNpbmNlIHRoaXMgaGFuZGxlciBjb3VsZCBiZSBvdXRzaWRlIG91ciBjb250cm9sLCBqdXN0IGNhdGNoIGFueXRoaW5nIGl0IHRocm93cyBhbmQgY29udGludWUgb25cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NpbmdsZUV2ZW50TWFuYWdlckltcGwudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBQYXJhbSB7XG4gIC8qKlxuICAgKiBzZXJpYWxpemVzIHRoZSBkYXRlIGludG8gdGhlIGZvcm1hdCB0aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cy5cbiAgICogQHBhcmFtIGRhdGUgdGhlIGRhdGUgdG8gc2VyaWFsaXplXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZURhdGVGb3JQbGF0Zm9ybShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGg6IG51bWJlciA9IGRhdGUuZ2V0VVRDTW9udGgoKSArIDE7XG4gICAgY29uc3QgZGF5OiBudW1iZXIgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICBjb25zdCBoaDogbnVtYmVyID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGNvbnN0IG1tOiBudW1iZXIgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgICBjb25zdCBzZWM6IG51bWJlciA9IGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gJHtoaH06JHttbX06JHtzZWN9YDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplQm9vbGVhbkZvclBsYXRmb3JtKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBib29sID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplTnVtYmVyRm9yUGxhdGZvcm0obnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBpbnB1dCBpcyBhIG51bWJlclxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlTnVtYmVyKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdudW1iZXInIHx8IGlucHV0IGluc3RhbmNlb2YgTnVtYmVyO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBpbnB1dCBpcyBhIERhdGVcbiAgICovXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZURhdGUoaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIERhdGU7XG4gIH1cbiAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUeXBlU3RyaW5nKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChpbnB1dCkgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVHlwZUJvb2woaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgKGlucHV0KSA9PT0gJ2Jvb2xlYW4nIHx8IGlucHV0IGluc3RhbmNlb2YgQm9vbGVhbjtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVQYXJhbXRlclZhbHVlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChQYXJhbS5pc1R5cGVOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gUGFyYW0uc2VyaWFsaXplTnVtYmVyRm9yUGxhdGZvcm0odmFsdWUgYXMgbnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKFBhcmFtLmlzVHlwZURhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKHZhbHVlIGFzIERhdGUpO1xuICAgIH0gZWxzZSBpZiAoUGFyYW0uaXNUeXBlQm9vbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBQYXJhbS5zZXJpYWxpemVCb29sZWFuRm9yUGxhdGZvcm0odmFsdWUgYXMgYm9vbGVhbik7XG4gICAgfSBlbHNlIGlmIChQYXJhbS5pc1R5cGVTdHJpbmcodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgVW5leHBlY3RlZCBpbnZhbGlkIHZhbHVlIGZvcjogJHt2YWx1ZX1gKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1V0aWxzL1BhcmFtLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGUgaW1wbGVtZW50cyBDb250cmFjdC5EYXRhVGFibGUge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RhdGE6IEFycmF5PEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4+LFxuICAgIHByaXZhdGUgX2NvbHVtbnM6IEFycmF5PENvbnRyYWN0LkNvbHVtbj4sXG4gICAgcHJpdmF0ZSBfdG90YWxSb3dDb3VudDogbnVtYmVyLFxuICAgIHByaXZhdGUgX2lzVG90YWxSb3dDb3VudExpbWl0ZWQ6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfaXNTdW1tYXJ5RGF0YTogYm9vbGVhbixcbiAgICBwcml2YXRlIF9tYXJrc0luZm8/OiBBcnJheTxNYXJrSW5mbz4pIHtcbiAgICAvLyBUT0RPOiBnZXQgcmlkIG9mIHRoaXMgaW4gcmVkZXNpZ24uXG4gICAgdGhpcy5fbmFtZSA9IF9pc1N1bW1hcnlEYXRhID8gJ1N1bW1hcnkgRGF0YSBUYWJsZScgOiAnVW5kZXJseWluZyBEYXRhIFRhYmxlJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhKCk6IEFycmF5PEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sdW1ucygpOiBBcnJheTxDb250cmFjdC5Db2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFya3NJbmZvKCk6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtzSW5mbztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG90YWxSb3dDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJvd0NvdW50O1xuICB9XG5cbiAgcHVibGljIGdldCBpc1RvdGFsUm93Q291bnRMaW1pdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1RvdGFsUm93Q291bnRMaW1pdGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1N1bW1hcnlEYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1N1bW1hcnlEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXJrSW5mbyBpbXBsZW1lbnRzIENvbnRyYWN0Lk1hcmtJbmZvIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3R5cGU6IENvbnRyYWN0Lk1hcmtUeXBlLFxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfdHVwbGVJZD86IE51bWJlclxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5NYXJrVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgcHVibGljIGdldCB0dXBsZUlkKCk6IE51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R1cGxlSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbHVtbiBpbXBsZW1lbnRzIENvbnRyYWN0LkNvbHVtbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWVsZE5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIF9kYXRhVHlwZTogQ29udHJhY3QuRGF0YVR5cGUsIC8vIFRPRE86IHRoaXMgc2hvdWRsIGJlIGFuIGVudW0gdHlwZVxuICAgIHByaXZhdGUgX2lzUmVmZXJlbmNlZDogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pbmRleDogbnVtYmVyKSB7IH1cblxuICBwdWJsaWMgZ2V0IGZpZWxkTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUmVmZXJlbmNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWZlcmVuY2VkO1xuICB9XG5cbiAgcHVibGljIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YVZhbHVlIGltcGxlbWVudHMgQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92YWx1ZTogYW55LFxuICAgIHByaXZhdGUgX2Zvcm1hdHRlZFZhbHVlOiBzdHJpbmcpIHsgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1hdHRlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdHRlZFZhbHVlO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvR2V0RGF0YU1vZGVscy50cyIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vRXZlbnRMaXN0ZW5lck1hbmFnZXInO1xuXG5pbXBvcnQgeyBTaGVldEltcGwgfSBmcm9tICcuL0ltcGwvU2hlZXRJbXBsJztcblxuZXhwb3J0IGNsYXNzIFNoZWV0IGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5TaGVldCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaGVldEltcGw6IFNoZWV0SW1wbCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0VHlwZSgpOiBDb250cmFjdC5TaGVldFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaXplKCk6IENvbnRyYWN0LlNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaGVldEltcGwuc2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUGFyYW1ldGVyQXN5bmMocGFyYW1ldGVyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxDb250cmFjdC5QYXJhbWV0ZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbXBsLmZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lLCB0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5QYXJhbWV0ZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW1wbC5nZXRQYXJhbWV0ZXJzQXN5bmModGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NoZWV0LnRzIiwiaW1wb3J0IHsgVmVyc2lvbk51bWJlciBhcyBWZXJzaW9uTnVtYmVyQ29udHJhY3QgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgRXJyb3JDb2RlcyB9IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi9UYWJsZWF1RXJyb3InO1xuXG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBleHRlbnNpb25zIGxpYnJhcnlcbiAqL1xuZXhwb3J0IGNsYXNzIFZlcnNpb25OdW1iZXIgaW1wbGVtZW50cyBWZXJzaW9uTnVtYmVyQ29udHJhY3Qge1xuICAvLyBVc2luZyBzb21lIHdlYnBhY2sgdHJpY2tzLCB3ZSBjYW4gaW5qZWN0IHRoaXMgdmVyc2lvbiBpbnRvIG91ciBjb2RlIChraW5kYSBsaWtlIGMrKyBwcmVwcm9jZXNzb3Igc3R1ZmYpXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVmVyc2lvbk51bWJlcjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSB2ZXJzaW9uIG51bWJlci5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6IFZlcnNpb25OdW1iZXIge1xuICAgIHJldHVybiBWZXJzaW9uTnVtYmVyLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgU2V0VmVyc2lvbk51bWJlcihudW1TdHJpbmc6IHN0cmluZywgaXNBbHBoYTogYm9vbGVhbik6IHZvaWQge1xuICAgIFZlcnNpb25OdW1iZXIuX2luc3RhbmNlID0gbmV3IFZlcnNpb25OdW1iZXIobnVtU3RyaW5nLCBpc0FscGhhKTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBtYWpvcjogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgbWlub3I6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IGZpeDogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgYnVpbGQ6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IGlzQWxwaGE6IGJvb2xlYW47XG5cbiAgLy8gcHJpdmF0ZSBjb25zdHJ1Y3RvciBzbyBldmVyeW9uZSB1c2VzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgLy8gYnVpbGQgbnVtYmVycyBoYXZlIHRoaXMgZm9ybTogTS5tLmYtcHJlLk5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih2ZXJzaW9uU3RyaW5nOiBzdHJpbmcsIGlzQWxwaGE6IGJvb2xlYW4pIHtcbiAgICBsZXQgcGFydFN0ciA9IHZlcnNpb25TdHJpbmcuc3BsaXQoJy0nKTtcbiAgICB0aGlzLmJ1aWxkID0gdGhpcy5nZXRCdWlsZE51bWJlcihwYXJ0U3RyWzFdKTtcbiAgICB2ZXJzaW9uU3RyaW5nID0gcGFydFN0clswXTtcblxuICAgIGNvbnN0IHBhcnRzID0gdmVyc2lvblN0cmluZy5zcGxpdCgnLicpLm1hcChwID0+IHBhcnNlSW50KHAsIDEwKSk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBJbnZhbGlkIHZlcnNpb24gbnVtYmVyOiAke3ZlcnNpb25TdHJpbmd9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYWpvciA9IHBhcnRzWzBdO1xuICAgIHRoaXMubWlub3IgPSBwYXJ0c1sxXTtcbiAgICB0aGlzLmZpeCA9IHBhcnRzWzJdO1xuICAgIHRoaXMuaXNBbHBoYSA9IGlzQWxwaGE7XG4gIH1cblxuICBwcml2YXRlIGdldEJ1aWxkTnVtYmVyKHByZVJlbGVhc2VTdHJpbmc6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3Qgbm9CdWlsZE51bWJlcjogbnVtYmVyID0gLTE7XG4gICAgaWYgKCFwcmVSZWxlYXNlU3RyaW5nKSB7XG4gICAgICByZXR1cm4gbm9CdWlsZE51bWJlcjtcbiAgICB9XG5cbiAgICAvLyBUaGUgcHJlUmVsZWFzZSBzdHJpbmcgaGFzIHRoaXMgZm9ybTogcHJlLk4sIGJ1dCB3ZSBkb24ndCBkZXBlbmQgb24gdGhlIGFjdHVhbCBzdHJpbmcgYmVpbmcgJ3ByZSdcbiAgICBsZXQgcGFydFN0ciA9IHByZVJlbGVhc2VTdHJpbmcuc3BsaXQoJy4nKTtcbiAgICByZXR1cm4gcGFydFN0clsxXSA/IHBhcnNlSW50KHBhcnRTdHJbMV0sIDEwKSA6IG5vQnVpbGROdW1iZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1hdHRlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMubWFqb3J9LiR7dGhpcy5taW5vcn0uJHt0aGlzLmZpeH1gO1xuICB9XG5cbiAgcHVibGljIGdldCBmdWxsRm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5tYWpvcn0uJHt0aGlzLm1pbm9yfS4ke3RoaXMuZml4fS1wcmUuJHt0aGlzLmJ1aWxkfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXIudHMiLCIvLyBEZWNsYXJlIHRoaXMga2V5IHR5cGUgYW5kIGV4cG9ydCB0aGUgTm90aWZpY2F0aW9uSWQgdG8gbWFrZSB0aGlzIGJlaGF2ZSBsaWtlIGEgc3RyaW5nIGVudW1cbmV4cG9ydCBlbnVtIFZlcmJJZCB7XG4gIEFwcGx5Q2F0ZWdvcmljYWxGaWx0ZXIgPSAnY2F0ZWdvcmljYWwtZmlsdGVyJyxcbiAgQXBwbHlSYW5nZUZpbHRlciA9ICdyYW5nZS1maWx0ZXInLFxuICBDbGVhckZpbHRlciA9ICdjbGVhci1maWx0ZXInLFxuICBJbml0aWFsaXplRXh0ZW5zaW9uID0gJ2luaXRpYWxpemUtZXh0ZW5zaW9uJyxcbiAgR2V0RGF0YVN1bW1hcnlEYXRhID0gJ2dldC1zdW1tYXJ5LWRhdGEnLFxuICBHZXRVbmRlcmx5aW5nRGF0YSA9ICdnZXQtdW5kZXJseWluZy1kYXRhJyxcbiAgR2V0RGF0YVNvdXJjZURhdGEgPSAnZ2V0LWRhdGFzb3VyY2UtZGF0YScsXG4gIFNhdmVFeHRlbnNpb25TZXR0aW5ncyA9ICdzYXZlLWV4dGVuc2lvbi1zZXR0aW5ncycsXG4gIEdldFNlbGVjdGVkTWFya3MgPSAnZ2V0LXNlbGVjdGVkLW1hcmtzJyxcbiAgR2V0SGlnaGxpZ2h0ZWRNYXJrcyA9ICdnZXQtaGlnaGxpZ2h0ZWQtbWFya3MnLFxuICBHZXRQYXJhbWV0ZXJzRm9yU2hlZXQgPSAnZ2V0LXBhcmFtZXRlcnMtZm9yLXNoZWV0JyxcbiAgRmluZFBhcmFtZXRlciA9ICdmaW5kLXBhcmFtZXRlcicsXG4gIENoYW5nZVBhcmFtZXRlclZhbHVlID0gJ2NoYW5nZS1wYXJhbWV0ZXItdmFsdWUnLFxuICBDbGVhclNlbGVjdGVkTWFya3MgPSAnY2xlYXItc2VsZWN0ZWQtbWFya3MnLFxuICBTZWxlY3RCeVZhbHVlID0gJ3NlbGVjdC1ieS12YWx1ZScsXG4gIEdldERhdGFTb3VyY2VzID0gJ2dldC1kYXRhLXNvdXJjZXMnLFxuICBSZWZyZXNoRGF0YVNvdXJjZSA9ICdyZWZyZXNoLWRhdGEtc291cmNlJyxcbiAgR2V0RmlsdGVycyA9ICdnZXQtZmlsdGVycycsXG4gIEdldEZpZWxkQW5kRGF0YVNvdXJjZSA9ICdnZXQtZmllbGQtYW5kLWRhdGFzb3VyY2UnLFxuICBHZXRDYXRlZ29yaWNhbERvbWFpbiA9ICdnZXQtY2F0ZWdvcmljYWwtZG9tYWluJyxcbiAgR2V0UmFuZ2VEb21haW4gPSAnZ2V0LXJhbmdlLWRvbWFpbicsXG4gIEdldEpvaW5EZXNjcmlwdGlvbiA9ICdnZXQtam9pbi1kZXNjcmlwdGlvbicsXG4gIEdldENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcyA9ICdnZXQtY29ubmVjdGlvbi1kZXNjcmlwdGlvbi1zdW1tYXJpZXMnLFxuICBEaXNwbGF5RGlhbG9nID0gJ2Rpc3BsYXktZGlhbG9nJyxcbiAgQ2xvc2VEaWFsb2cgPSAnY2xvc2UtZGlhbG9nJyxcbiAgVGVzdENvbnZlcnNpb25WZXJiID0gJ3Rlc3QtY29udmVyc2lvbi12ZXJiJyxcbiAgR2V0RmllbGQgPSAnZ2V0LWZpZWxkJyxcbiAgR2V0RGF0YVNvdXJjZSA9ICdnZXQtZGF0YXNvdXJjZScsXG4gIEdldEFjdGl2ZVRhYmxlcyA9ICdnZXQtYWN0aXZlLXRhYmxlcycsXG4gIFNldFpvbmVWaXNpYmlsaXR5ID0gJ3NldC16b25lLXZpc2liaWxpdHknLFxuICBCbG9ja0V4dGVuc2lvbiA9ICdibG9jay1leHRlbnNpb24nXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2NvbnRyYWN0L1ZlcmJzLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9ucyBmcm9tICcuL1ZlcnNpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgRG93bmdyYWRlVjJXb3Jrc2hlZXROYW1lcyB9IGZyb20gJy4vVmVyc2lvblRyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLyoqXG4gKiBAcmV0dXJucyB0cnVlIGlmIGxocyA8IHJocyAoaWdub3JpbmcgZml4IG51bWJlcilcbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFZlcnNpb25MZXNzVGhhbihsaHM6IFZlcnNpb25OdW1iZXIsIHJoczogVmVyc2lvbk51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAobGhzLm1ham9yID4gcmhzLm1ham9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChsaHMubWFqb3IgPCByaHMubWFqb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gKGxocy5taW5vciA8IHJocy5taW5vcik7XG59XG5cbi8qKlxuICogQHJldHVybnMgdHJ1ZSBpZiBsaHMgPT0gcmhzIChpZ25vcmluZyBmaXggbnVtYmVyKVxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICovXG5leHBvcnQgZnVuY3Rpb24gVmVyc2lvbkVxdWFsVG8obGhzOiBWZXJzaW9uTnVtYmVyLCByaHM6IFZlcnNpb25OdW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChsaHMubWFqb3IgPT09IHJocy5tYWpvcikgJiYgKGxocy5taW5vciA9PT0gcmhzLm1pbm9yKTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBUaGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQsIGFuZCB3aWxsIG5vdCBiZSBjYWxsZWQgZnJvbSBhcGktcGxhdGZvcm0gaW4gMjAxOS4yKy5cbiAqXG4gKiBDcmVhdGVzIGEgbmV3IEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHdoaWNoIGhhcyB0aGUgYWJpbGl0eSB0byB1cGdyYWRlIGFuZCBkb3duZ3JhZGUgdGhlIGNvbnRyYWN0IGJldHdlZW4gdGhlIHR3byB2ZXJzaW9uc1xuICogd2hpY2ggYXJlIHNwZWNpZmllZC4gSWYgZXh0ZXJuYWxNYWpvclZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBiZWNhdXNlXG4gKiB3ZSB3b24ndCBrbm93IGhvdyB0byBkbyB0aG9zZSBjb252ZXJzaW9ucy5cbiAqXG4gKiBAc2VlIENyZWF0ZUNvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyXG4gKlxuICogQHBhcmFtIGV4dGVybmFsTWFqb3JWZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBhcGkgd2hpY2ggdGhlIGV4dGVybmFsIG1vZHVsZSBpcyB1c2luZ1xuICogQHBhcmFtIHBsYXRmb3JtTWFqb3JWZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBhcGkgd2hpY2ggdGhlIHBsYXRmb3JtIGlzIHVzaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVWZXJzaW9uQ29udmVydGVyKGV4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIsIHBsYXRmb3JtTWFqb3JWZXJzaW9uOiBudW1iZXIpOiBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG5cbiAgLy8gQSBtYXBwaW5nIGZyb20gdGhlIHNvdXJjZSB2ZXJzaW9uIG9mIGEgbW9kZWwgLT4gdGhlIG5leHQgdmVyc2lvbiBvZiB0aGUgbW9kZWwuIEVhY2ggbWFqb3JcbiAgLy8gdmVyc2lvbiBidW1wIGNhbiBoYXZlIGFuIGFycmF5IG9mIGNvbnZlcnNpb25zIHRvIHBlcmZvcm0gaW4gb3JkZXJcbiAgY29uc3QgZXhlY3V0ZVVwZ3JhZGVzOiB7IFt2ZXJzaW9uOiBudW1iZXJdOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPiB9ID0ge1xuICAgIDA6IFtdXG4gIH07XG5cbiAgY29uc3QgZXhlY3V0ZURvd25ncmFkZXM6IHsgW3ZlcnNpb246IG51bWJlcl06IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPiB9ID0ge1xuICAgIDA6IFtdLFxuICAgIDE6IFtEb3duZ3JhZGVWMldvcmtzaGVldE5hbWVzXVxuICB9O1xuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkRvd25ncmFkZXM6IHsgW3ZlcnNpb246IG51bWJlcl06IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+IH0gPSB7XG4gICAgMDogW11cbiAgfTtcblxuICBpZiAoIU51bWJlci5pc0ludGVnZXIoZXh0ZXJuYWxNYWpvclZlcnNpb24pIHx8XG4gICAgIU51bWJlci5pc0ludGVnZXIocGxhdGZvcm1NYWpvclZlcnNpb24pIHx8XG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb24gPCAwIHx8XG4gICAgcGxhdGZvcm1NYWpvclZlcnNpb24gPCAwKSB7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFZlcnNpb25zIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlcnM6XG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA+IHBsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHRlcm5hbCB2ZXJzaW9uIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHBsYXRmb3JtIHZlcnNpb24uXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA9PT0gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgdGhlIGV4YWN0IHNhbWUgdmVyc2lvbnMsIGp1c3QgdXNlIHRoZSBpZGVudGl0eSBjb252ZXJ0ZXJcbiAgICByZXR1cm4gbmV3IElkZW50aXR5VmVyc2lvbkNvbnZlcnRlcigpO1xuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZSB2ZXJzaW9ucyB3ZSBoYXZlIGhlcmUgYW5kIGNvbGxlY3QgdGhlIHVwZ3JhZGUgYW5kIGRvd25ncmFkZXMgbmVjZXNzYXJ5XG4gIGxldCBuZWVkZWRFeGVjdXRlVXBncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5VcGdyYWRlRXhlY3V0ZUNhbGw+ID0gW107XG4gIGZvciAobGV0IGkgPSBleHRlcm5hbE1ham9yVmVyc2lvbjsgaSA8IHBsYXRmb3JtTWFqb3JWZXJzaW9uOyBpKyspIHtcbiAgICBpZiAoaSBpbiBleGVjdXRlVXBncmFkZXMpIHtcbiAgICAgIG5lZWRlZEV4ZWN1dGVVcGdyYWRlcy5wdXNoKC4uLmV4ZWN1dGVVcGdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV2FsayB0aGUgc3BhbiBiZXR3ZWVuIHRoZW0gYmFja3dhcmRzIHRvIGdldCB0aGUgbmVjZXNzYXJ5IGRvd25ncmFkZXNcbiAgbGV0IG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4gPSBbXTtcbiAgbGV0IG5lZWRlZE5vdGlmaWNhdGlvbkRvd25ncmFkZXM6IEFycmF5PFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+ID0gW107XG4gIGZvciAobGV0IGkgPSBwbGF0Zm9ybU1ham9yVmVyc2lvbiAtIDE7IGkgPj0gZXh0ZXJuYWxNYWpvclZlcnNpb247IGktLSkge1xuICAgIGlmIChpIGluIGV4ZWN1dGVEb3duZ3JhZGVzKSB7XG4gICAgICBuZWVkZWRFeGVjdXRlRG93bmdyYWRlcy5wdXNoKC4uLmV4ZWN1dGVEb3duZ3JhZGVzW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoaSBpbiBub3RpZmljYXRpb25Eb3duZ3JhZGVzKSB7XG4gICAgICBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzLnB1c2goLi4ubm90aWZpY2F0aW9uRG93bmdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIoXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb24sIHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBuZWVkZWRFeGVjdXRlVXBncmFkZXMsIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLCBuZWVkZWROb3RpZmljYXRpb25Eb3duZ3JhZGVzKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VD4geyBbbWFqb3I6IG51bWJlcl06IHsgW21pbm9yOiBudW1iZXJdOiBBcnJheTxUPiB9OyB9XG5cbi8vIEEgbWFwcGluZyBmcm9tIGFuIG9sZGVyIGNsaWVudCB2ZXJzaW9uIG9mIGludGVybmFsLWNvbnRyYWN0IHRvIHRoZSBjdXJyZW50IHBsYXRmb3JtIHZlcnNpb24gb2YgdGhpcyBjb250cmFjdC5cbi8vIEVhY2ggdmVyc2lvbiBidW1wIGNhbiBoYXZlIGFuIGFycmF5IG9mIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIGluIG9yZGVyLiBOb3RpY2UgdGhhdCB0aGlzIGlzXG4vLyBkaWZmZXJlbnQgdGhhbiB0aGUgbWFqb3IgdXBncmFkZXMvZG93bmdyYWRlcyBhYm92ZSBiZWNhdXNlIGl0IGhhbmRsZXMgYm90aCBtYWpvciBhbmQgbWlub3IgdmVyc2lvbiBjaGFuZ2VzLlxuLy8gQWxzbyBwbGVhc2Ugbm90ZTogZG93bmdyYWRlRXhlY3V0ZUNhbGwgaXMgaGFuZGxlZCBvbiB0aGUgY2xpZW50L2V4dGVybmFsIHNpZGUgcmF0aGVyIHRoYW4gcGxhdGZvcm0gc2lkZS5cbi8vIFdoZW4gdXBkYXRpbmcgdGhlIG1ham9yIG9yIG1pbm9yIHZlcnNpb24gb2Ygb3VyIGludGVybmFsLWNvbnRyYWN0LCB5b3Ugd2lsbCBuZWVkIHRvIHVwZGF0ZSB0aGVzZSBkYXRhIHN0cnVjdHVyZXMuXG4vLyAqIElmIHRoZXJlIGFyZSB0cmFuc2xhdGlvbnMgdG8gYWRkLCBhZGQgdGhlbSB0byB0aGUgdmVyc2lvbiB0byBcInVwZ3JhZGUgZnJvbVwiIG9yIFwiZG93bmdyYWRlIHRvXCIuXG5leHBvcnQgY29uc3QgRXhlY3V0ZU1pbm9yVXBncmFkZXM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPiA9IHtcbiAgMToge1xuICAgIDk6IFtdLCAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHdlIHB1dCB1cGdyYWRlcyBmcm9tIDEuOSB0byAxLjEwIGluIHRoZSBbMV1bOV0gYnVja2V0XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBFeGVjdXRlTWlub3JEb3duZ3JhZGVzOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVSZXR1cm4+ID0ge1xuICAxOiB7XG4gICAgOTogW10sXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25NaW5vckRvd25ncmFkZXM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPiA9IHtcbiAgMToge1xuICAgIDk6IFtdLFxuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgd2hpY2ggaGFzIHRoZSBhYmlsaXR5IHRvIHVwZ3JhZGUgYW5kIGRvd25ncmFkZSB0aGUgY29udHJhY3QgYmV0d2VlbiB0aGUgdHdvIHZlcnNpb25zXG4gKiB3aGljaCBhcmUgc3BlY2lmaWVkLiBJZiBleHRlcm5hbE1ham9yVmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gcGxhdGZvcm1NYWpvclZlcnNpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGJlY2F1c2VcbiAqIHdlIHdvbid0IGtub3cgaG93IHRvIGRvIHRob3NlIGNvbnZlcnNpb25zLiBBcyBjb21wYXJlZCB0byBDcmVhdGVWZXJzaW9uQ29udmVydGVyLCB0aGlzIGNvbnZlcnRlciBjYW4gYWxzbyBoYW5kbGVcbiAqIG1pbm9yIHVwZGF0ZXMsIHdpdGggdXBncmFkZS9kb3duZ3JhZGUgZm9yIGJvdGggbWFqb3IgYW5kIG1pbm9yIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIGV4dGVybmFsVmVyc2lvbiBWZXJzaW9uTnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBhcGkgd2hpY2ggdGhlIGV4dGVybmFsIG1vZHVsZSBpcyB1c2luZ1xuICogQHBhcmFtIHBsYXRmb3JtVmVyc2lvbiBWZXJzaW9uTnVtYmVyIG9mIHRoZSBpbnRlcm5hbCBhcGkgd2hpY2ggdGhlIHBsYXRmb3JtIGlzIHVzaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlcihcbiAgZXh0ZXJuYWxWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICBwbGF0Zm9ybVZlcnNpb246IFZlcnNpb25OdW1iZXIpOiBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG5cbiAgcmV0dXJuIENyZWF0ZUNvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyV2l0aFRyYW5zbGF0b3JzKFxuICAgIGV4dGVybmFsVmVyc2lvbixcbiAgICBwbGF0Zm9ybVZlcnNpb24sXG4gICAgRXhlY3V0ZU1pbm9yVXBncmFkZXMsXG4gICAgRXhlY3V0ZU1pbm9yRG93bmdyYWRlcyxcbiAgICBOb3RpZmljYXRpb25NaW5vckRvd25ncmFkZXMpO1xufVxuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIENyZWF0ZUNvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyLiBUaGlzIGZ1bmN0aW9uIHRha2VzIHRoZSB1cGdyYWRlLCBkb3duZ3JhZGUsIGFuZFxuICogbm90aWZpY2F0aW9uIGFycmF5cyBzbyB0aGF0IGFsbCB0aGUgbG9naWMgY2FuIGJlIHRlc3RlZC5cbiAqXG4gKiBAcGFyYW0gZXh0ZXJuYWxWZXJzaW9uIFZlcnNpb25OdW1iZXIgb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIHVzaW5nXG4gKiBAcGFyYW0gcGxhdGZvcm1WZXJzaW9uIFZlcnNpb25OdW1iZXIgb2YgdGhlIGludGVybmFsIGFwaSB3aGljaCB0aGUgcGxhdGZvcm0gaXMgdXNpbmdcbiAqIEBwYXJhbSB1cGdyYWRlcyBNYWpvck1pbm9yVHJhbnNsYXRvcnMgZm9yIHVwZ3JhZGVzXG4gKiBAcGFyYW0gZG93bmdyYWRlcyBNYWpvck1pbm9yVHJhbnNsYXRvcnMgZm9yIGRvd25ncmFkZXNcbiAqIEBwYXJhbSBub3RpZmljYXRpb25Eb3duZ3JhZGVzIE1ham9yTWlub3JUcmFuc2xhdG9ycyBmb3Igbm90aWZpY2F0aW9uIGRvd25ncmFkZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyV2l0aFRyYW5zbGF0b3JzKFxuICBleHRlcm5hbFZlcnNpb246IFZlcnNpb25OdW1iZXIsXG4gIHBsYXRmb3JtVmVyc2lvbjogVmVyc2lvbk51bWJlcixcbiAgdXBncmFkZXM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPixcbiAgZG93bmdyYWRlczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVFeGVjdXRlUmV0dXJuPixcbiAgbm90aWZpY2F0aW9uRG93bmdyYWRlczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9ucy5Eb3duZ3JhZGVOb3RpZmljYXRpb24+KTogSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuXG4gIGNvbnN0IGV4dGVybmFsTWFqb3JWZXJzaW9uOiBudW1iZXIgPSBleHRlcm5hbFZlcnNpb24ubWFqb3I7XG4gIGNvbnN0IGV4dGVybmFsTWlub3JWZXJzaW9uOiBudW1iZXIgPSBleHRlcm5hbFZlcnNpb24ubWlub3I7XG4gIGNvbnN0IHBsYXRmb3JtTWFqb3JWZXJzaW9uOiBudW1iZXIgPSBwbGF0Zm9ybVZlcnNpb24ubWFqb3I7XG5cbiAgaWYgKGV4dGVybmFsTWFqb3JWZXJzaW9uID4gcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4dGVybmFsIHZlcnNpb24gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gcGxhdGZvcm0gdmVyc2lvbi5cbiAgICBleHRlcm5hbE1ham9yVmVyc2lvbj0ke2V4dGVybmFsTWFqb3JWZXJzaW9ufSBwbGF0Zm9ybU1ham9yVmVyc2lvbj0ke3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICB9XG5cbiAgLy8gSWYgd2UgYXJlIHVzaW5nIHRoZSBleGFjdCBzYW1lIHZlcnNpb25zIChtYWpvci5taW5vciksIGp1c3QgdXNlIHRoZSBpZGVudGl0eSBjb252ZXJ0ZXJcbiAgaWYgKFZlcnNpb25FcXVhbFRvKGV4dGVybmFsVmVyc2lvbiwgcGxhdGZvcm1WZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyKCk7XG4gIH1cblxuICAvLyBXYWxrIHRoZSBzcGFuIGJldHdlZW4gdGhlIHZlcnNpb25zIHdlIGhhdmUgaGVyZSBhbmQgY29sbGVjdCB0aGUgdXBncmFkZSBhbmQgZG93bmdyYWRlcyBuZWNlc3NhcnlcbiAgbGV0IG5lZWRlZEV4ZWN1dGVVcGdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlQ2FsbD4gPVxuICAgIEdldE5lZWRlZFRyYW5zbGF0aW9ucyhleHRlcm5hbE1ham9yVmVyc2lvbiwgcGxhdGZvcm1NYWpvclZlcnNpb24sIGV4dGVybmFsTWlub3JWZXJzaW9uLCB1cGdyYWRlcyk7XG5cbiAgbGV0IG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4gPVxuICAgIEdldE5lZWRlZFRyYW5zbGF0aW9ucyhleHRlcm5hbE1ham9yVmVyc2lvbiwgcGxhdGZvcm1NYWpvclZlcnNpb24sIGV4dGVybmFsTWlub3JWZXJzaW9uLCBkb3duZ3JhZGVzKTtcblxuICBsZXQgbmVlZGVkTm90aWZpY2F0aW9uRG93bmdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZU5vdGlmaWNhdGlvbj4gPVxuICAgIEdldE5lZWRlZFRyYW5zbGF0aW9ucyhleHRlcm5hbE1ham9yVmVyc2lvbiwgcGxhdGZvcm1NYWpvclZlcnNpb24sIGV4dGVybmFsTWlub3JWZXJzaW9uLCBub3RpZmljYXRpb25Eb3duZ3JhZGVzKTtcblxuICAvLyBXZSB3YW50IHRvIGFwcGx5IHRoZSBkb3duZ3JhZGVzIGluIHJldmVyc2Ugb3JkZXIgaW4gY2FzZSBvZiBkZXBlbmRlbmNpZXMgYmV0d2VlbiB0aGVtXG4gIG5lZWRlZEV4ZWN1dGVEb3duZ3JhZGVzLnJldmVyc2UoKTtcbiAgbmVlZGVkTm90aWZpY2F0aW9uRG93bmdyYWRlcy5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlci5mcm9tRGF0YShcbiAgICBleHRlcm5hbFZlcnNpb24sIHBsYXRmb3JtVmVyc2lvbiwgbmVlZGVkRXhlY3V0ZVVwZ3JhZGVzLCBuZWVkZWRFeGVjdXRlRG93bmdyYWRlcywgbmVlZGVkTm90aWZpY2F0aW9uRG93bmdyYWRlcyk7XG59XG5cbmZ1bmN0aW9uIEdldE5lZWRlZFRyYW5zbGF0aW9uczxUPihcbiAgZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlcixcbiAgcGxhdGZvcm1NYWpvclZlcnNpb246IG51bWJlcixcbiAgZXh0ZXJuYWxNaW5vclZlcnNpb246IG51bWJlcixcbiAgbWFqb3JNaW5vclRyYW5zbGF0b3JzOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VD4pOiBBcnJheTxUPiB7XG5cbiAgbGV0IG5lZWRlZFRyYW5zbGF0aW9uczogQXJyYXk8VD4gPSBbXTtcblxuICBmb3IgKGxldCBtYWpvciA9IGV4dGVybmFsTWFqb3JWZXJzaW9uOyBtYWpvciA8PSBwbGF0Zm9ybU1ham9yVmVyc2lvbjsgbWFqb3IrKykge1xuICAgIGlmIChtYWpvciBpbiBtYWpvck1pbm9yVHJhbnNsYXRvcnMpIHtcbiAgICAgIGxldCBzdGFydCA9IChtYWpvciA9PT0gZXh0ZXJuYWxNYWpvclZlcnNpb24pID8gZXh0ZXJuYWxNaW5vclZlcnNpb24gOiAwO1xuICAgICAgbGV0IG1heGltdW1NaW5vclZlcnNpb24gPSBHZXRNYXhpbXVtTWlub3JJbmRleChPYmplY3Qua2V5cyhtYWpvck1pbm9yVHJhbnNsYXRvcnNbbWFqb3JdKSk7XG4gICAgICBmb3IgKGxldCBtaW5vciA9IHN0YXJ0OyBtaW5vciA8PSBtYXhpbXVtTWlub3JWZXJzaW9uOyBtaW5vcisrKSB7XG4gICAgICAgIGlmIChtaW5vciBpbiBtYWpvck1pbm9yVHJhbnNsYXRvcnNbbWFqb3JdKSB7XG4gICAgICAgICAgbmVlZGVkVHJhbnNsYXRpb25zLnB1c2goLi4ubWFqb3JNaW5vclRyYW5zbGF0b3JzW21ham9yXVttaW5vcl0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5lZWRlZFRyYW5zbGF0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdldE1heGltdW1NaW5vckluZGV4KG1pbm9yVmVyc2lvbnM6IEFycmF5PHN0cmluZz4pOiBudW1iZXIge1xuICByZXR1cm4gbWlub3JWZXJzaW9ucy5tYXAoKGEpID0+IE51bWJlcihhKSkucmVkdWNlKChhLCBiKSA9PiBhID4gYiA/IGEgOiBiKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9WZXJzaW9uQ29udmVydGVyRmFjdG9yeS50cyIsImltcG9ydCB7IEV4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9FeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBFeGVjdXRlUGFyYW1ldGVycywgRXhlY3V0ZVJlc3BvbnNlLCBOb3RpZmljYXRpb24sIFZlcmJJZCB9IGZyb20gJy4uLy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuXG4vKipcbiAqIFRoaXMgdmVyc2lvbiBjb252ZXJ0ZXIgZG9lc24ndCBhY3R1YWxseSBkbyBhbnl0aGluZyBidXQgaXMgdXNlZnVsIGZvciB0ZXN0aW5nIG9yIHdoZW4gd2UgaGF2ZVxuICogYSBtYXRjaGluZyBwbGF0Zm9ybSBhbmQgZXh0ZXJuYWwgdmVyc2lvbiBudW1iZXJcbiovXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgaW1wbGVtZW50cyBFeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG4gIHB1YmxpYyBkb3duZ3JhZGVFeGVjdXRlQ2FsbCh2ZXJiOiBhbnksIHBhcmFtZXRlcnM6IGFueSk6IHsgdmVyYjogVmVyYklkOyBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVyczsgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcmI6IHZlcmIgYXMgVmVyYklkLFxuICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyBhcyBFeGVjdXRlUGFyYW1ldGVyc1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIHJldHVybiBleGVjdXRlUmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IE5vdGlmaWNhdGlvbiB7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyLnRzIiwiKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZhbGlkYXRvciA9IG5ldyBSZWdFeHAoXCJeW2EtejAtOV17OH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17MTJ9JFwiLCBcImlcIik7XG5cbiAgZnVuY3Rpb24gZ2VuKGNvdW50KSB7XG4gICAgdmFyIG91dCA9IFwiXCI7XG4gICAgZm9yICh2YXIgaT0wOyBpPGNvdW50OyBpKyspIHtcbiAgICAgIG91dCArPSAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBHdWlkKGd1aWQpIHtcbiAgICBpZiAoIWd1aWQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50OyBgdmFsdWVgIGhhcyBubyB2YWx1ZS5cIik7XG4gICAgICBcbiAgICB0aGlzLnZhbHVlID0gR3VpZC5FTVBUWTtcbiAgICBcbiAgICBpZiAoZ3VpZCAmJiBndWlkIGluc3RhbmNlb2YgR3VpZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IGd1aWQudG9TdHJpbmcoKTtcblxuICAgIH0gZWxzZSBpZiAoZ3VpZCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ3VpZCkgPT09IFwiW29iamVjdCBTdHJpbmddXCIgJiYgR3VpZC5pc0d1aWQoZ3VpZCkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBndWlkO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAvLyBDb21wYXJpbmcgc3RyaW5nIGB2YWx1ZWAgYWdhaW5zdCBwcm92aWRlZCBgZ3VpZGAgd2lsbCBhdXRvLWNhbGxcbiAgICAgIC8vIHRvU3RyaW5nIG9uIGBndWlkYCBmb3IgY29tcGFyaXNvblxuICAgICAgcmV0dXJuIEd1aWQuaXNHdWlkKG90aGVyKSAmJiB0aGlzLnZhbHVlID09IG90aGVyO1xuICAgIH07XG5cbiAgICB0aGlzLmlzRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBHdWlkLkVNUFRZO1xuICAgIH07XG4gICAgXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICBHdWlkLkVNUFRZID0gXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIjtcblxuICBHdWlkLmlzR3VpZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZSBpbnN0YW5jZW9mIEd1aWQgfHwgdmFsaWRhdG9yLnRlc3QodmFsdWUudG9TdHJpbmcoKSkpO1xuICB9O1xuXG4gIEd1aWQuY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBHdWlkKFtnZW4oMiksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigzKV0uam9pbihcIi1cIikpO1xuICB9O1xuXG4gIEd1aWQucmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFtnZW4oMiksIGdlbigxKSwgZ2VuKDEpLCBnZW4oMSksIGdlbigzKV0uam9pbihcIi1cIik7XG4gIH07XG5cbiAgaWYodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gR3VpZDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lkd1aWQgPSBHdWlkO1xuICB9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2d1aWQvZ3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5UYWJsZWF1RXZlbnQge1xuICBwcml2YXRlIF90eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1RXZlbnQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IFNoZWV0UGF0aCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL1BhcmFtZXRlcnNTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBTaGVldEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hlZXRJbmZvSW1wbDogU2hlZXRJbmZvSW1wbCkge1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hlZXRUeXBlKCk6IENvbnRyYWN0LlNoZWV0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRJbmZvSW1wbC5zaGVldFBhdGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoZWV0SW5mb0ltcGwuc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJBc3luYyhwYXJhbWV0ZXJOYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8Q29udHJhY3QuUGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihwYXJhbWV0ZXJOYW1lLCAncGFyYW1ldGVyTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2hlZXQsICdzaGVldCcpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFBhcmFtZXRlcnNTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycyk7XG4gICAgcmV0dXJuIHNlcnZpY2UuZmluZFBhcmFtZXRlckJ5TmFtZUFzeW5jKHBhcmFtZXRlck5hbWUsIHNoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzQXN5bmMoc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5QYXJhbWV0ZXI+PiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzaGVldCwgJ3NoZWV0Jyk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8UGFyYW1ldGVyc1NlcnZpY2U+KFNlcnZpY2VOYW1lcy5QYXJhbWV0ZXJzKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRQYXJhbWV0ZXJzRm9yU2hlZXRBc3luYyh0aGlzLnNoZWV0UGF0aCwgc2hlZXQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1NoZWV0SW1wbC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4vSW1wbC9EYXRhU291cmNlSW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlIGltcGxlbWVudHMgQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU291cmNlSW1wbDogRGF0YVNvdXJjZUltcGwpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW1wbC5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRzKCk6IEFycmF5PENvbnRyYWN0LkZpZWxkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmZpZWxkcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXh0cmFjdFVwZGF0ZVRpbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuZXh0cmFjdFVwZGF0ZVRpbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRXh0cmFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwuaXNFeHRyYWN0O1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUltcGwucmVmcmVzaEFzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVGFibGVzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldEFjdGl2ZVRhYmxlc0FzeW5jKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuQ29ubmVjdGlvblN1bW1hcnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucz86IENvbnRyYWN0LkRhdGFTb3VyY2VVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOlxuICAgIFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbXBsLmdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0RhdGFTb3VyY2UudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRmllbGRJbXBsIH0gZnJvbSAnLi9GaWVsZEltcGwnO1xuXG5pbXBvcnQgeyBDb25uZWN0aW9uU3VtbWFyeSB9IGZyb20gJy4uL0Nvbm5lY3Rpb25TdW1tYXJ5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vRmllbGQnO1xuaW1wb3J0IHsgVGFibGVTdW1tYXJ5IH0gZnJvbSAnLi4vVGFibGVTdW1tYXJ5JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0dldERhdGFTZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlSW1wbCB7XG4gIHByaXZhdGUgX2ZpZWxkczogQXJyYXk8RmllbGQ+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU291cmNlSW5mbzogSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlKSB7XG4gICAgdGhpcy5fZmllbGRzID0gX2RhdGFTb3VyY2VJbmZvLmZpZWxkcy5tYXAoZmllbGRNb2RlbCA9PiB7XG4gICAgICBjb25zdCBmaWVsZEltcGwgPSBuZXcgRmllbGRJbXBsKGZpZWxkTW9kZWwsIHRoaXMpO1xuICAgICAgcmV0dXJuIG5ldyBGaWVsZChmaWVsZEltcGwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBleHRyYWN0VXBkYXRlVGltZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5leHRyYWN0VXBkYXRlVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRzKCk6IEFycmF5PENvbnRyYWN0LkZpZWxkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNFeHRyYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlSW5mby5pc0V4dHJhY3Q7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaEFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcblxuICAgIHJldHVybiBkYXRhU291cmNlU2VydmljZS5yZWZyZXNoQXN5bmModGhpcy5fZGF0YVNvdXJjZUluZm8uaWQpO1xuICB9XG5cbiAgcHVibGljIGdldENvbm5lY3Rpb25TdW1tYXJpZXNBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5W10+IHtcbiAgICBjb25zdCBkYXRhU291cmNlU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPERhdGFTb3VyY2VTZXJ2aWNlPihcbiAgICAgIFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVNlcnZpY2UuZ2V0Q29ubmVjdGlvblN1bW1hcmllc0FzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKS50aGVuPENvbnRyYWN0LkNvbm5lY3Rpb25TdW1tYXJ5W10+KHN1bW1hcmllcyA9PiB7XG4gICAgICByZXR1cm4gc3VtbWFyaWVzLm1hcChzdW1tYXJ5ID0+IG5ldyBDb25uZWN0aW9uU3VtbWFyeShzdW1tYXJ5KSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVGFibGVzQXN5bmMoKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5UYWJsZVN1bW1hcnk+PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZVNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oXG4gICAgICBTZXJ2aWNlTmFtZXMuRGF0YVNvdXJjZVNlcnZpY2UpO1xuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VTZXJ2aWNlLmdldEFjdGl2ZVRhYmxlc0FzeW5jKHRoaXMuX2RhdGFTb3VyY2VJbmZvLmlkKS50aGVuPEFycmF5PENvbnRyYWN0LlRhYmxlU3VtbWFyeT4+KHRhYmxlSW5mb3MgPT4ge1xuICAgICAgcmV0dXJuIHRhYmxlSW5mb3MubWFwKHRhYmxlSW5mbyA9PiBuZXcgVGFibGVTdW1tYXJ5KHRhYmxlSW5mbykpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMob3B0aW9ucz86IENvbnRyYWN0LkRhdGFTb3VyY2VVbmRlcmx5aW5nRGF0YU9wdGlvbnMpOlxuICAgIFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG5cbiAgICBjb25zdCBnZXREYXRhU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICByZXR1cm4gZ2V0RGF0YVNlcnZpY2UuZ2V0RGF0YVNvdXJjZURhdGFBc3luYyhcbiAgICAgIHRoaXMuaWQsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlQWxpYXNlcyxcbiAgICAgIG9wdGlvbnMubWF4Um93cyB8fCAwLCAgICAgICAvLyAwIGFuZCBbXSBhcmUgZGVmYXVsdHNcbiAgICAgIG9wdGlvbnMuY29sdW1uc1RvSW5jbHVkZSB8fCBbXSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhdGFTb3VyY2U6IENvbnRyYWN0LkRhdGFTb3VyY2UpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5SW50ZXJuYWxWYWx1ZShkYXRhU291cmNlLCAnZGF0YVNvdXJjZScpO1xuXG4gICAgdGhpcy5fZmllbGRzID0gdGhpcy5fZGF0YVNvdXJjZUluZm8uZmllbGRzLm1hcChmaWVsZE1vZGVsID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkSW1wbCA9IG5ldyBGaWVsZEltcGwoZmllbGRNb2RlbCwgZGF0YVNvdXJjZSk7XG4gICAgICByZXR1cm4gbmV3IEZpZWxkKGZpZWxkSW1wbCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0ltcGwvRGF0YVNvdXJjZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZEltcGwge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZmllbGRJbmZvOiBJbnRlcm5hbENvbnRyYWN0LkZpZWxkLFxuICAgIHByaXZhdGUgX3BhcmVudERhdGFTb3VyY2U6IENvbnRyYWN0LkRhdGFTb3VyY2UpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8ubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uZGVzY3JpcHRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFnZ3JlZ2F0aW9uKCk6IENvbnRyYWN0LkZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmZpZWxkQWdncmVnYXRpb25UeXBlLmNvbnZlcnQodGhpcy5fZmllbGRJbmZvLmFnZ3JlZ2F0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBDb250cmFjdC5EYXRhU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50RGF0YVNvdXJjZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm9sZSgpOiBDb250cmFjdC5GaWVsZFJvbGVUeXBlIHtcbiAgICByZXR1cm4gSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzLmZpZWxkUm9sZVR5cGUuY29udmVydCh0aGlzLl9maWVsZEluZm8ucm9sZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaXNIaWRkZW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzR2VuZXJhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaXNHZW5lcmF0ZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ2FsY3VsYXRlZEZpZWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEluZm8uaXNDYWxjdWxhdGVkRmllbGQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tYmluZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbmZvLmlzQ29tYmluZWRGaWVsZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9GaWVsZEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRmllbGRJbXBsIH0gZnJvbSAnLi9JbXBsL0ZpZWxkSW1wbCc7XG5cbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4vVXRpbHMvRXJyb3JIZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEZpZWxkIGltcGxlbWVudHMgQ29udHJhY3QuRmllbGQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfZmllbGRJbXBsOiBGaWVsZEltcGwpIHsgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuZGVzY3JpcHRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFnZ3JlZ2F0aW9uKCk6IENvbnRyYWN0LkZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmFnZ3JlZ2F0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhU291cmNlKCk6IENvbnRyYWN0LkRhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuZGF0YVNvdXJjZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm9sZSgpOiBDb250cmFjdC5GaWVsZFJvbGVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLnJvbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNIaWRkZW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzR2VuZXJhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNHZW5lcmF0ZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ2FsY3VsYXRlZEZpZWxkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maWVsZEltcGwuaXNDYWxjdWxhdGVkRmllbGQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbHVtblR5cGUoKTogQ29udHJhY3QuQ29sdW1uVHlwZSB7XG4gICAgdGhyb3cgRXJyb3JIZWxwZXJzLmFwaU5vdEltcGxlbWVudGVkKCdGaWVsZC5jb2x1bW5UeXBlJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tYmluZWRGaWVsZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGRJbXBsLmlzQ29tYmluZWRGaWVsZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRmllbGQudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgVGFibGVhdVNoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVTaGVldEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFRhYmxlYXVXb3Jrc2hlZXRFdmVudCBleHRlbmRzIFRhYmxlYXVTaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuVGFibGVhdVdvcmtzaGVldEV2ZW50IHtcbiAgcHVibGljIGdldCB3b3Jrc2hlZXQoKTogQ29udHJhY3QuV29ya3NoZWV0IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0O1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU6IENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUsIHByb3RlY3RlZCBfd29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQpIHtcbiAgICBzdXBlcih0eXBlLCBfd29ya3NoZWV0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1RhYmxlYXVXb3Jrc2hlZXRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZWF1U2hlZXRFdmVudCBleHRlbmRzIFRhYmxlYXVFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlYXVTaGVldEV2ZW50IHtcbiAgcHJpdmF0ZSBfc2hlZXQ6IENvbnRyYWN0LlNoZWV0O1xuXG4gIHB1YmxpYyBnZXQgc2hlZXQoKTogQ29udHJhY3QuU2hlZXQge1xuICAgIHJldHVybiB0aGlzLl9zaGVldDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0eXBlOiBDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMuX3NoZWV0ID0gc2hlZXQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0V2ZW50cy9UYWJsZWF1U2hlZXRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgVmlzdWFsSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG4vKipcbiAqIERlZmluZXMgd2hpY2ggdHlwZSBvZiBnZXREYXRhIGNhbGwgdG8gbWFrZS5cbiAqL1xuZXhwb3J0IGVudW0gR2V0RGF0YVR5cGUge1xuICBTdW1tYXJ5ID0gJ3N1bW1hcnknLFxuICBVbmRlcmx5aW5nID0gJ3VuZGVybHlpbmcnXG59XG5cbi8qKlxuICogU2VydmljZSBmb3IgaW1wbGVtZW50aW5nIHRoZSBsb2dpYyBmb3IgdmFyaW91cyBnZXREYXRhIGNhbGxzXG4gKlxuICogQGludGVyZmFjZSBHZXREYXRhU2VydmljZVxuICogQGV4dGVuZHMge0FwaVNlcnZpY2V9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0RGF0YVNlcnZpY2UgZXh0ZW5kcyBBcGlTZXJ2aWNlIHtcblxuICAvKipcbiAgICogR2V0cyB0aGUgbGltaXQgb2Ygcm93cyBmb3IgZ2V0VW5kZXJseWluZ0RhdGFBc3luY1xuICAgKi9cbiAgZ2V0TWF4Um93TGltaXQoKTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRhdGEgZm9yIGEgcGFydGljdWxhciB2aXN1YWxcbiAgICpcbiAgICogQHBhcmFtIHtWaXN1YWxJZH0gdmlzdWFsSWQgIFRoZSB2aXN1YWwgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7R2V0RGF0YVR5cGV9IGdldFR5cGUgIFRoZSB0eXBlIG9mIGdldERhdGEgY2FsbCB0byBtYWtlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBvciBub3QgYWxpYXNlcyBzaG91bGQgYmUgaWdub3JlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZVNlbGVjdGlvbiAgV2hldGhlciBvciBub3Qgc2VsZWN0aW9uIHNob3VsZCBiZSBpZ25vcmVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUFsbENvbHVtbnMgIFNob3VsZCBhbGwgY29sdW1ucyBiZSBpbmNsdWRlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Um93cyAgTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byByZXR1cm5cbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPn0gIERhdGEgdGFibGUgd2l0aCB0aGUgcmVxdWVzdGVkIGRhdGFcbiAgICovXG4gIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG1hcmtzIGZvciBhIGdpdmVuIHZpc3VhbFxuICAgKlxuICAqIEBwYXJhbSB7VmlzdWFsSWR9IHZpc3VhbElkICBUaGUgdmlzdWFsIHRvIGdldCBkYXRhIGZvclxuICAqIEByZXR1cm5zIHtQcm9taXNlPEFjdGl2ZU1hcmtzPn0gIENvbGxlY3Rpb24gb2YgZGF0YSB0YWJsZXMgd2l0aCB0aGUgYWN0aXZlIG1hcmtzXG4gICovXG4gIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXJrcyBmb3IgYSBnaXZlbiB2aXN1YWxcbiAgICpcbiAgKiBAcGFyYW0ge1Zpc3VhbElkfSB2aXN1YWxJZCAgVGhlIHZpc3VhbCB0byBnZXQgZGF0YSBmb3JcbiAgKiBAcmV0dXJucyB7UHJvbWlzZTxBY3RpdmVNYXJrcz59ICBDb2xsZWN0aW9uIG9mIGRhdGEgdGFibGVzIHdpdGggdGhlIGFjdGl2ZSBtYXJrc1xuICAqL1xuICBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNvdXJjZUlkICBUaGUgaWQgb2YgdGhlIGRhdGFzb3VyY2UgdG8gZ2V0IGRhdGEgZm9yXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JlQWxpYXNlcyAgV2hldGhlciBhbGlhcyB2YWx1ZXMgc2hvdWxkIGJlIGlnbm9yZWQgaW4gdGhlIHJldHVybmVkIGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFJvd3MgVGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gcmV0cmlldmVcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBjb2x1bW5zVG9JbmNsdWRlICBDb2xsZWN0aW9uIG9mIGNvbHVtbiBjYXB0aW9ucyB3aGljaCBzaG91bGQgYmUgcmV0dXJuZWQuIEVtcHR5IG1lYW5zIGFsbCBjb2x1bW5zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT59ICBEYXRhIHRhYmxlIHdpdGggdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqL1xuICBnZXREYXRhU291cmNlRGF0YUFzeW5jKFxuICAgIGRhdGFzb3VyY2VJZDogc3RyaW5nLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgbWF4Um93czogbnVtYmVyLFxuICAgIGNvbHVtbnNUb0luY2x1ZGU6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9HZXREYXRhU2VydmljZS50cyIsImltcG9ydCB7IEVudW1Db252ZXJ0ZXIgfSBmcm9tICcuLi9VdGlscy9FbnVtQ29udmVydGVyJztcbmltcG9ydCB7XG4gIEZpbHRlckRvbWFpblR5cGUgYXMgRXh0ZXJuYWxEb21haW5UeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uIGFzIEV4dGVybmFsTnVsbE9wdGlvbixcbiAgRmlsdGVyVXBkYXRlVHlwZSBhcyBFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUsXG4gIFpvbmVWaXNpYmlsaXR5VHlwZSBhcyBab25lVmlzaWJpbGl0eVR5cGVcbn0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQge1xuICBGaWx0ZXJEb21haW5UeXBlIGFzIEludGVybmFsRG9tYWluVHlwZSxcbiAgRmlsdGVyTnVsbE9wdGlvbiBhcyBJbnRlcm5hbE51bGxPcHRpb24sXG4gIEZpbHRlclVwZGF0ZVR5cGUgYXMgSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cblxuLyogdHNsaW50OmRpc2FibGU6dHlwZWRlZiAtIERpc2FibGUgdGhpcyB0byBtYWtlIGRlY2xhcmluZyB0aGVzZSBjbGFzc2VzIGEgYml0IGVhc2llciAqL1xuLyoqXG4gKiBNYXBzIGVudW1zIHVzZWQgYnkgdGhlIGV4dGVybmFsLWFwaS1jb250cmFjdCB0byB0aGUgZW51bXMgdXNlZFxuICogaW4gdGhlIGludGVybmFsLWFwaS1jb250cmFjdCwgd2hpY2ggZGV2ZWxvcGVycyBjb2RlIGFnYWluc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3Mge1xuICBwdWJsaWMgc3RhdGljIGZpbHRlckRvbWFpblR5cGUgPSBuZXcgRW51bUNvbnZlcnRlcjxFeHRlcm5hbERvbWFpblR5cGUsIEludGVybmFsRG9tYWluVHlwZT4oe1xuICAgIFtFeHRlcm5hbERvbWFpblR5cGUuUmVsZXZhbnRdOiBJbnRlcm5hbERvbWFpblR5cGUuUmVsZXZhbnQsXG4gICAgW0V4dGVybmFsRG9tYWluVHlwZS5EYXRhYmFzZV06IEludGVybmFsRG9tYWluVHlwZS5EYXRhYmFzZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIG51bGxPcHRpb25zID0gbmV3IEVudW1Db252ZXJ0ZXI8RXh0ZXJuYWxOdWxsT3B0aW9uLCBJbnRlcm5hbE51bGxPcHRpb24+KHtcbiAgICBbRXh0ZXJuYWxOdWxsT3B0aW9uLkFsbFZhbHVlc106IEludGVybmFsTnVsbE9wdGlvbi5BbGxWYWx1ZXMsXG4gICAgW0V4dGVybmFsTnVsbE9wdGlvbi5Ob25OdWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXMsXG4gICAgW0V4dGVybmFsTnVsbE9wdGlvbi5OdWxsVmFsdWVzXTogSW50ZXJuYWxOdWxsT3B0aW9uLk51bGxWYWx1ZXNcbiAgfSk7XG5cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXJVcGRhdGVUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8RXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLCBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGU+KHtcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLkFkZF06IEludGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BZGQsXG4gICAgW0V4dGVybmFsRmlsdGVyVXBkYXRlVHlwZS5BbGxdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuQWxsLFxuICAgIFtFeHRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVtb3ZlXTogSW50ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlbW92ZSxcbiAgICBbRXh0ZXJuYWxGaWx0ZXJVcGRhdGVUeXBlLlJlcGxhY2VdOiBJbnRlcm5hbEZpbHRlclVwZGF0ZVR5cGUuUmVwbGFjZVxuICB9KTtcblxuICBwdWJsaWMgc3RhdGljIHNldFZpc2liaWxpdHlUeXBlID0gbmV3IEVudW1Db252ZXJ0ZXI8Wm9uZVZpc2liaWxpdHlUeXBlLCBCb29sZWFuPih7XG4gICAgW1pvbmVWaXNpYmlsaXR5VHlwZS5TaG93XTogdHJ1ZSxcbiAgICBbWm9uZVZpc2liaWxpdHlUeXBlLkhpZGVdOiBmYWxzZVxuICB9KTtcbn1cbi8qIHRzbGludDplbmFibGU6dHlwZWRlZiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncy50cyIsIi8qKlxuICogVGhpcyBpcyB5b3VyIG1haW4uIFRoaXMgaXMgd2hlcmUgeW91IHJlLWV4cG9ydCBldmVyeXRoaW5nIHlvdSB3YW50IHRvIGJlIHB1YmxpY2x5IGF2YWlsYWJsZS5cbiAqXG4gKiBUaGUgYnVpbGQgZW5mb3JjZXMgdGhhdCB0aGUgZmlsZSBoYXMgdGhlIHNhbWUgbmFtZSBhcyB0aGUgZ2xvYmFsIHZhcmlhYmxlIHRoYXQgaXMgZXhwb3J0ZWQuXG4gKi9cblxuLy8gVGhlIGZvbGxvd2luZyBwb2x5ZmlsbHMgYXJlIG5lZWRlZCBmb3IgSUUxMVxuaW1wb3J0ICdjb3JlLWpzL2ZuL3Byb21pc2UnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL2FycmF5L2ZpbmQnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nO1xuXG4vLyBEdWUgdG8gdGhlIHdheSB3ZSBjb25maWd1cmVkIHdlYnBhY2ssIHdlIHNob3VsZCBiZSBleHBvcnRpbmcgdGhpbmdzIHdoaWNoIHdpbGwgYmUgdW5kZXJcbi8vIGEgZ2xvYmFsIHZhcmlhYmxlIGNhbGxlZCBcInRhYmxlYXVcIi4gRXhwb3J0IGV2ZXJ5dGhpbmcgd2Ugd2FudCB0byBiZSB2aXNpYmxlIHVuZGVyIHRhYmxlYXVcbi8vIGZyb20gdGhpcyBmaWxlLlxuXG5pbXBvcnQgeyBFeHRlbnNpb25zSW1wbCB9IGZyb20gJy4vRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsJztcbmltcG9ydCB7IEV4dGVuc2lvbnMgfSBmcm9tICcuL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FeHRlbnNpb25zJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuL0FwaVNoYXJlZCc7XG5cbmRlY2xhcmUgdmFyIEVYVEVOU0lPTl9WRVJTSU9OX0lTX0FMUEhBOiBib29sZWFuO1xuY29uc3QgaXNBbHBoYTogYm9vbGVhbiA9IHR5cGVvZiBFWFRFTlNJT05fVkVSU0lPTl9JU19BTFBIQSAhPT0gJ3VuZGVmaW5lZCcgPyBFWFRFTlNJT05fVkVSU0lPTl9JU19BTFBIQSA6IGZhbHNlO1xuXG5kZWNsYXJlIHZhciBFWFRFTlNJT05fQVBJX1ZFUlNJT05fTlVNQkVSOiBzdHJpbmc7XG5WZXJzaW9uTnVtYmVyLlNldFZlcnNpb25OdW1iZXIodHlwZW9mIEVYVEVOU0lPTl9BUElfVkVSU0lPTl9OVU1CRVIgIT09ICd1bmRlZmluZWQnID8gRVhURU5TSU9OX0FQSV9WRVJTSU9OX05VTUJFUiA6ICcwLjAuMCcsIGlzQWxwaGEpO1xuXG5jb25zdCBleHRlbnNpb25JbXBsID0gbmV3IEV4dGVuc2lvbnNJbXBsKCk7XG5leHBvcnQgY29uc3QgZXh0ZW5zaW9ucyA9IG5ldyBFeHRlbnNpb25zKGV4dGVuc2lvbkltcGwpO1xuXG4vLyBFeHBvcnQgRW51bXNcbi8vIFRoZXNlIHNob3cgdXAgdW5kZXIgdGhlIHRhYmxlYXUgb2JqZWN0LiBJLmUuIHRhYmxlYXUuRXh0ZW5zaW9uQ29udGV4dC5TZXJ2ZXJcbmV4cG9ydCB7XG4gIEV4dGVuc2lvbkNvbnRleHQsXG4gIEV4dGVuc2lvbk1vZGUsXG4gIEFuYWx5dGljc09iamVjdFR5cGUsXG4gIENvbHVtblR5cGUsXG4gIERhc2hib2FyZE9iamVjdFR5cGUsXG4gIERhdGFUeXBlLFxuICBEYXRlUmFuZ2VUeXBlLFxuICBFbmNvZGluZ1R5cGUsXG4gIEVycm9yQ29kZXMsXG4gIEZpZWxkQWdncmVnYXRpb25UeXBlLFxuICBGaWVsZFJvbGVUeXBlLFxuICBGaWx0ZXJEb21haW5UeXBlLFxuICBGaWx0ZXJUeXBlLFxuICBGaWx0ZXJVcGRhdGVUeXBlLFxuICBGaWx0ZXJOdWxsT3B0aW9uLFxuICBNYXJrVHlwZSxcbiAgUGFyYW1ldGVyVmFsdWVUeXBlLFxuICBQZXJpb2RUeXBlLFxuICBRdWlja1RhYmxlQ2FsY1R5cGUsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUsXG4gIFNoZWV0VHlwZSxcbiAgU29ydERpcmVjdGlvbixcbiAgVGFibGVhdUV2ZW50VHlwZSxcbiAgVHJlbmRMaW5lTW9kZWxUeXBlLFxuICBab25lVmlzaWJpbGl0eVR5cGVcbn0gZnJvbSAnLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkudHMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191c2VyLWFnZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZpbmQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9hcnJheS9maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXNjID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IElPYmplY3QoTyk7XG4gICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWwsIHJlcztcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHJlc3VsdFtpbmRleF0gPSByZXM7ICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1xuICBBcGlTZXJ2aWNlUmVnaXN0cnksXG4gIERhc2hib2FyZCxcbiAgRGFzaGJvYXJkSW1wbCxcbiAgZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwLFxuICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICByZWdpc3RlckFsbFNoYXJlZFNlcnZpY2VzLFxuICBTZXJ2aWNlTmFtZXNcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcbmltcG9ydCB7IERhc2hib2FyZENvbnRlbnQgfSBmcm9tICcuLi9OYW1lc3BhY2VzL0Rhc2hib2FyZENvbnRlbnQnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi9OYW1lc3BhY2VzL0Vudmlyb25tZW50JztcbmltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBJbml0aWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Jbml0aWFsaXphdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMsIHJlZ2lzdGVySW5pdGlhbGl6YXRpb25FeHRlbnNpb25zU2VydmljZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9SZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uL05hbWVzcGFjZXMvU2V0dGluZ3MnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbXBsIH0gZnJvbSAnLi9TZXR0aW5nc0ltcGwnO1xuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi4vTmFtZXNwYWNlcy9VSSc7XG5pbXBvcnQgeyBVSUltcGwgfSBmcm9tICcuL1VJSW1wbCc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkL1ZlcnNpb25OdW1iZXInO1xuaW1wb3J0IHsgVmVyc2lvbmVkRXh0ZXJuYWxBcGlEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vVmVyc2lvbmVkRXh0ZXJuYWxBcGlEaXNwYXRjaGVyJztcblxuaW1wb3J0IHtcbiAgQ29udGV4dE1lbnVFdmVudCxcbiAgRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbyxcbiAgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvLFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXJGYWN0b3J5LFxuICBJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIsXG4gIE5vdGlmaWNhdGlvbklkLFxuICBTaGVldFBhdGgsXG4gIElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04sXG4gIEluaXRpYWxpemF0aW9uT3B0aW9ucyxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5cbmV4cG9ydCB0eXBlIENhbGxiYWNrTWFwID0geyBba2V5OiBzdHJpbmddOiAoKSA9PiB7fSB9O1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc0ltcGwge1xuICBwcml2YXRlIF9pbml0aWFsaXphdGlvblByb21pc2U6IFByb21pc2U8c3RyaW5nPjtcblxuICBwdWJsaWMgZGFzaGJvYXJkQ29udGVudDogRGFzaGJvYXJkQ29udGVudDtcbiAgcHVibGljIGVudmlyb25tZW50OiBFbnZpcm9ubWVudDtcbiAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgcHVibGljIHVpOiBVSTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZUFzeW5jKGlzRXh0ZW5zaW9uRGlhbG9nOiBib29sZWFuLCBjb250ZXh0TWVudUNhbGxiYWNrcz86IENhbGxiYWNrTWFwKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6YXRpb25Qcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluaXRPcHRpb25zOiBJbml0aWFsaXphdGlvbk9wdGlvbnMgPSB7IGlzQWxwaGE6IFZlcnNpb25OdW1iZXIuSW5zdGFuY2UuaXNBbHBoYSB9O1xuICAgICAgICAvLyBGaXJzdCB0aGluZyB3ZSB3YW50IHRvIGRvIGlzIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBpcyBhIGRlc2t0b3AgZGlzcGF0Y2hlciBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHVzXG4gICAgICAgIGlmIChJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIuaGFzRGVza3RvcEFwaURpc3BhdGNoZXJQcm9taXNlKGluaXRPcHRpb25zKSkge1xuICAgICAgICAgIC8vIFJ1bm5pbmcgaW4gZGVza3RvcCwgdXNlIHRoaXMgcHJvbWlzZVxuICAgICAgICAgIGNvbnN0IGRlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZSA9IEludGVybmFsQXBpRGlzcGF0Y2hlckhvbGRlci5nZXREZXNrdG9wRGlzcGF0Y2hlclByb21pc2UoaW5pdE9wdGlvbnMpO1xuXG4gICAgICAgICAgZGVza3RvcERpc3BhdGNoZXJQcm9taXNlIS50aGVuKChkaXNwYXRjaGVyRmFjdG9yeSkgPT5cbiAgICAgICAgICAgIHRoaXMub25EaXNwYXRjaGVyUmVjZWl2ZWQoZGlzcGF0Y2hlckZhY3RvcnksIGlzRXh0ZW5zaW9uRGlhbG9nLCBjb250ZXh0TWVudUNhbGxiYWNrcykpXG4gICAgICAgICAgICAudGhlbigob3BlblBheWxvYWQpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShvcGVuUGF5bG9hZCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdlIG11c3QgYmUgcnVubmluZyBpbiBzZXJ2ZXIsIHNvIHdlIHNob3VsZCB0cnkgdG8ga2ljayBvZiB0aGUgc2VydmVyIGRpc3BhdGNoZXIgYm9vdHN0cmFwcGluZ1xuICAgICAgICAgIGNvbnN0IG9uRGlzcGF0Y2hlclJlY2VpdmVkQ2FsbGJhY2sgPSB0aGlzLm9uRGlzcGF0Y2hlclJlY2VpdmVkLmJpbmQodGhpcyk7XG4gICAgICAgICAgZG9Dcm9zc0ZyYW1lQm9vdHN0cmFwKHdpbmRvdywgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTiwgaW5pdE9wdGlvbnMpLnRoZW4oKGZhY3Rvcnk6IEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvbkRpc3BhdGNoZXJSZWNlaXZlZENhbGxiYWNrKGZhY3RvcnksIGlzRXh0ZW5zaW9uRGlhbG9nLCBjb250ZXh0TWVudUNhbGxiYWNrcyk7XG4gICAgICAgICAgfSkudGhlbigob3BlblBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUob3BlblBheWxvYWQpO1xuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemF0aW9uUHJvbWlzZTtcbiAgfVxuXG4gIHByaXZhdGUgb25EaXNwYXRjaGVyUmVjZWl2ZWQoXG4gICAgZGlzcGF0Y2hlckZhY3Rvcnk6IEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3RvcnksXG4gICAgaXNFeHRlbnNpb25EaWFsb2c6IGJvb2xlYW4sXG4gICAgY29udGV4dE1lbnVGdW5jdGlvbnM/OiBDYWxsYmFja01hcCk6IFByb21pc2U8c3RyaW5nPiB7XG5cbiAgICBsZXQgZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyID0gZGlzcGF0Y2hlckZhY3RvcnkoSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTik7XG5cbiAgICAvLyBDYWxsIHRvIHJlZ2lzdGVyIGFsbCB0aGUgc2VydmljZXMgd2hpY2ggd2lsbCB1c2UgdGhlIG5ld2x5IGluaXRpYWxpemVkIGRpc3BhdGNoZXJcbiAgICByZWdpc3RlckluaXRpYWxpemF0aW9uRXh0ZW5zaW9uc1NlcnZpY2VzKGRpc3BhdGNoZXIpO1xuXG4gICAgLy8gR2V0IHRoZSBpbml0aWFsaXphdGlvbiBzZXJ2aWNlIGFuZCBpbml0aWFsaXplIHRoaXMgZXh0ZW5zaW9uXG4gICAgY29uc3QgaW5pdGlhbGl6YXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8SW5pdGlhbGl6YXRpb25TZXJ2aWNlPihcbiAgICAgIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuSW5pdGlhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrTWFwS2V5cyA9IChjb250ZXh0TWVudUZ1bmN0aW9ucykgPyBPYmplY3Qua2V5cyhjb250ZXh0TWVudUZ1bmN0aW9ucykgOiBbXTtcbiAgICByZXR1cm4gaW5pdGlhbGl6YXRpb25TZXJ2aWNlLmluaXRpYWxpemVEYXNoYm9hcmRFeHRlbnNpb25zQXN5bmMoaXNFeHRlbnNpb25EaWFsb2csIGNhbGxiYWNrTWFwS2V5cykudGhlbjxzdHJpbmc+KHJlc3VsdCA9PiB7XG4gICAgICBpZiAoIXJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdVbmV4cGVjdGVkIGVycm9yIGR1cmluZyBpbml0aWFsaXphdGlvbi4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UgcmVjZWl2ZSBhbiBpbnZhbGlkIHBsYWZvcm0gdmVyc2lvbiwgdGhpcyBtZWFucyB0aGF0IHBsYXRmb3JtIGlzIHJ1bm5uaW5nIDEuNCBvciAyLjEgYW5kXG4gICAgICAvLyBkb2Vzbid0IHBhc3MgdGhlIHBsYXRmb3JtIHZlcnNpb24gdG8gZXh0ZXJuYWwuIEluIHRoaXMgY2FzZSB3ZSBhc3N1bWUgdGhlIHBsYXRmb3JtIHZlcnNpb24gdG8gYmUgMS45XG4gICAgICBsZXQgcGxhdGZvcm1WZXJzaW9uID0gcmVzdWx0LmV4dGVuc2lvbkVudmlyb25tZW50LnBsYXRmb3JtVmVyc2lvblxuICAgICAgICA/IHJlc3VsdC5leHRlbnNpb25FbnZpcm9ubWVudC5wbGF0Zm9ybVZlcnNpb25cbiAgICAgICAgOiB7IG1ham9yOiAxLCBtaW5vcjogOSwgZml4OiAwIH07XG5cbiAgICAgIC8vIFdyYXAgb3VyIGV4aXN0aW5nIGRpc3BhdGNoZXIgaW4gYSBkaXNwYXRjaGVyIHRoYXQgY2FuIGRvd25ncmFkZS91cGdyYWRlIGZvciBhbiBvbGRlciBwbGF0Zm9ybS5cbiAgICAgIGlmIChWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXIubmVlZHNWZXJzaW9uQ29udmVydGVyKHBsYXRmb3JtVmVyc2lvbikpIHtcbiAgICAgICAgZGlzcGF0Y2hlciA9IG5ldyBWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXIoZGlzcGF0Y2hlciwgcGxhdGZvcm1WZXJzaW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVnaXN0cmF0aW9uIG9mIHNlcnZpY2VzIG11c3QgaGFwcGVuIGJlZm9yZSBpbml0aWFsaXppbmcgY29udGVudCBhbmQgZW52aXJvbm1lbnRcbiAgICAgIHJlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMoZGlzcGF0Y2hlcik7XG4gICAgICByZWdpc3RlckFsbEV4dGVuc2lvbnNTZXJ2aWNlcyhkaXNwYXRjaGVyKTtcblxuICAgICAgdGhpcy5kYXNoYm9hcmRDb250ZW50ID0gdGhpcy5pbml0aWFsaXplRGFzaGJvYXJkQ29udGVudChcbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbkRhc2hib2FyZEluZm8sXG4gICAgICAgIHJlc3VsdC5leHRlbnNpb25JbnN0YW5jZS5sb2NhdG9yLmRhc2hib2FyZFBhdGgpO1xuXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHJlc3VsdC5leHRlbnNpb25FbnZpcm9ubWVudCk7XG4gICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5pbml0aWFsaXplU2V0dGluZ3MocmVzdWx0LmV4dGVuc2lvblNldHRpbmdzSW5mbyk7XG4gICAgICB0aGlzLnVpID0gbmV3IFVJKG5ldyBVSUltcGwoKSk7XG5cbiAgICAgIC8vIEFmdGVyIGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQsIHNldHVwIGxpc3RlbmVycyBmb3IgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0XG4gICAgICAvLyBhcmUgbWVhbnQgdG8gYmUgdHJpZ2dlcmVkIHdoZW5ldmVyIGEgY29udGV4dCBtZW51IGl0ZW0gaXMgY2xpY2tlZC5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRleHRNZW51Q2FsbGJhY2tzKGNvbnRleHRNZW51RnVuY3Rpb25zKTtcblxuICAgICAgLy8gSW4gdGhlIG5vcm1hbCBpbml0aWFsaXphdGlvbiBjYXNlLCB0aGlzIHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nLiAgV2hlbiByZXR1cm5pbmcgZnJvbSBpbml0aWFsaXplQXN5bmMgdG8gdGhlXG4gICAgICAvLyBkZXZlbG9wZXIsIHdlIGp1c3QgaW5nb3JlIHRoYXQgc3RyaW5nLiAgSW4gdGhlIGNhc2Ugb2YgaW5pdGlhbGl6aW5nIGZyb20gYW4gZXh0ZW5zaW9uIGRpYWxvZywgdGhpcyBzdHJpbmdcbiAgICAgIC8vIGlzIGFuIG9wdGlvbmFsIHBheWxvYWQgc2VudCBmcm9tIHRoZSBwYXJlbnQgZXh0ZW5zaW9uLlxuICAgICAgcmV0dXJuIHJlc3VsdC5leHRlbnNpb25EaWFsb2dQYXlsb2FkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRGFzaGJvYXJkQ29udGVudChpbmZvOiBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLCBzaGVldFBhdGg6IFNoZWV0UGF0aCk6IERhc2hib2FyZENvbnRlbnQge1xuICAgIGNvbnN0IGRhc2hib2FyZEltcGwgPSBuZXcgRGFzaGJvYXJkSW1wbChpbmZvLCBzaGVldFBhdGgpO1xuICAgIGNvbnN0IGRhc2hib2FyZCA9IG5ldyBEYXNoYm9hcmQoZGFzaGJvYXJkSW1wbCk7XG4gICAgcmV0dXJuIG5ldyBEYXNoYm9hcmRDb250ZW50KGRhc2hib2FyZCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTZXR0aW5ncyhzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbyk6IFNldHRpbmdzIHtcbiAgICBjb25zdCBzZXR0aW5nc0ltcGwgPSBuZXcgU2V0dGluZ3NJbXBsKHNldHRpbmdzSW5mbyk7XG4gICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhzZXR0aW5nc0ltcGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplQ29udGV4dE1lbnVDYWxsYmFja3MoY29udGV4dE1lbnVGdW5jdGlvbnM/OiBDYWxsYmFja01hcCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcblxuICAgIC8vIFVucmVnaXN0ZXIgZnVuY3Rpb24gbm90IHVzZWQgc2luY2UgdGhlc2Ugbm90aWZpY2F0aW9ucyBzaG91bGQgYmVcbiAgICAvLyBvYnNlcnZlZCBmb3IgdGhlIGZ1bGwgbGlmZXRpbWUgb2YgdGhlIGV4dGVuc2lvbi5cbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5Db250ZXh0TWVudUNsaWNrLCAobW9kZWwpID0+IHtcbiAgICAgIC8vIExldCB0aHJvdWdoIGFueSBjb250ZXh0IG1lbnUgZXZlbnQsIHRoZXNlIGFyZSBhbHJlYWR5IGZpbHRlcmVkIG9uIGFwaS1jb3JlXG4gICAgICAvLyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uIGxvY2F0b3IuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAoZXZlbnQ6IENvbnRleHRNZW51RXZlbnQpID0+IHtcbiAgICAgIC8vIEV4ZWN1dGUgdGhlIGZ1bmN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnRleHQgbWVudSBJRFxuICAgICAgaWYgKGNvbnRleHRNZW51RnVuY3Rpb25zKSB7XG4gICAgICAgIGlmICghY29udGV4dE1lbnVGdW5jdGlvbnNbZXZlbnQuaWRdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkludGVybmFsRXJyb3IsIGBSZWNlaXZlZCB1bmV4cGVjdGVkIGNvbnRleHQgbWVudSBJZCBmcm9tIGV2ZW50OiAke2V2ZW50LmlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dE1lbnVGdW5jdGlvbnNbZXZlbnQuaWRdKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9JbXBsL0V4dGVuc2lvbnNJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRJbXBsIH0gZnJvbSAnLi9JbXBsL0Rhc2hib2FyZEltcGwnO1xuaW1wb3J0IHsgU2hlZXQgfSBmcm9tICcuL1NoZWV0JztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIFNoZWV0IGltcGxlbWVudHMgQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Rhc2hib2FyZEltcGw6IERhc2hib2FyZEltcGwpIHtcbiAgICBzdXBlcihfZGFzaGJvYXJkSW1wbCk7XG4gICAgX2Rhc2hib2FyZEltcGwuaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGdldCB3b3Jrc2hlZXRzKCk6IEFycmF5PENvbnRyYWN0LldvcmtzaGVldD4ge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmRJbXBsLndvcmtzaGVldHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9iamVjdHMoKTogQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZEltcGwub2JqZWN0cztcbiAgfVxuXG4gIHB1YmxpYyBzZXRab25lVmlzaWJpbGl0eUFzeW5jKHpvbmVWaXNpYmlsaXR5TWFwOiBNYXA8bnVtYmVyLCBDb250cmFjdC5ab25lVmlzaWJpbGl0eVR5cGU+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hib2FyZEltcGwuc2V0Wm9uZVZpc2liaWxpdHlBc3luYyh6b25lVmlzaWJpbGl0eU1hcCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Rhc2hib2FyZC50cyIsIi8vIEFsbCBlbnVtIHZhbHVlcyBtYWRlIGF2YWlsYWJsZSB0byBFeHRlbnNpb25zIGRldmVsb3BlcnMuXG4vLyBFbnVtcyBzaG91bGQgYmUga2VwdCBpbiBhbHBoYWJldGljYWwgb3JkZXIuXG5cbi8qKlxuICogVGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIEV4dGVuc2lvbnMgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gKi9cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbkNvbnRleHQge1xuICBEZXNrdG9wID0gJ2Rlc2t0b3AnLFxuICBTZXJ2ZXIgPSAnc2VydmVyJ1xufVxuXG4vKipcbiAqIFRoZSBtb2RlIGluIHdoaWNoIHRoZSBFeHRlbnNpb25zIGlzIGN1cnJlbnRseSBydW5uaW5nLlxuICovXG5leHBvcnQgZW51bSBFeHRlbnNpb25Nb2RlIHtcbiAgQXV0aG9yaW5nID0gJ2F1dGhvcmluZycsXG4gIFZpZXdpbmcgPSAndmlld2luZydcbn1cblxuZXhwb3J0IGVudW0gQW5hbHl0aWNzT2JqZWN0VHlwZSB7XG4gIENsdXN0ZXIgPSAnY2x1c3RlcicsXG4gIEZvcmVjYXN0ID0gJ2ZvcmVjYXN0JyxcbiAgVHJlbmRMaW5lID0gJ3RyZW5kLWxpbmUnXG59XG5cbmV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICBEaXNjcmV0ZSA9ICdkaXNjcmV0ZScsXG4gIENvbnRpbnVvdXMgPSAnY29udGludW91cydcbn1cblxuLyoqXG4gKiBXaGF0IHRoZSBvYmplY3QgcmVwcmVzZW50cyBpbiBhIGRhc2hib2FyZC5cbiAqL1xuZXhwb3J0IGVudW0gRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gIEJsYW5rID0gJ2JsYW5rJyxcbiAgV29ya3NoZWV0ID0gJ3dvcmtzaGVldCcsXG4gIFF1aWNrRmlsdGVyID0gJ3F1aWNrLWZpbHRlcicsXG4gIFBhcmFtZXRlckNvbnRyb2wgPSAncGFyYW1ldGVyLWNvbnRyb2wnLFxuICBQYWdlRmlsdGVyID0gJ3BhZ2UtZmlsdGVyJyxcbiAgTGVnZW5kID0gJ2xlZ2VuZCcsXG4gIFRpdGxlID0gJ3RpdGxlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgSW1hZ2UgPSAnaW1hZ2UnLFxuICBXZWJQYWdlID0gJ3dlYi1wYWdlJyxcbiAgRXh0ZW5zaW9uID0gJ2V4dGVuc2lvbidcbn1cblxuLyoqXG4gKiBUaGUgZGlmZmVyZW50IHR5cGVzIG9mIGRhdGEgYSB2YWx1ZSBjYW4gaGF2ZVxuICovXG5leHBvcnQgZW51bSBEYXRhVHlwZSB7XG4gIFN0cmluZyA9ICdzdHJpbmcnLFxuICBJbnQgPSAnaW50JyxcbiAgRmxvYXQgPSAnZmxvYXQnLFxuICBCb29sID0gJ2Jvb2wnLFxuICBEYXRlID0gJ2RhdGUnLFxuICBEYXRlVGltZSA9ICdkYXRlLXRpbWUnLFxuICBTcGF0aWFsID0gJ3NwYXRpYWwnXG59XG5cbi8qKlxuICogVmFsaWQgZGF0ZSByYW5nZXMgZm9yIGEgcmVsYXRpdmUgZGF0ZSBmaWx0ZXIuXG4gKi9cbmV4cG9ydCBlbnVtIERhdGVSYW5nZVR5cGUge1xuICBMYXN0ID0gJ2xhc3QnLFxuICBMYXN0TiA9ICdsYXN0LW4nLFxuICBOZXh0ID0gJ25leHQnLFxuICBOZXh0TiA9ICduZXh0LW4nLFxuICBDdXJyZW50ID0gJ2N1cnJlbnQnLFxuICBUb0RhdGUgPSAndG8tZGF0ZSdcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgQ29sdW1uID0gJ2NvbHVtbicsXG4gIFJvdyA9ICdyb3cnLFxuICBQYWdlID0gJ3BhZ2UnLFxuICBGaWx0ZXIgPSAnZmlsdGVyJyxcbiAgTWFya3NUeXBlID0gJ21hcmtzLXR5cGUnLFxuICBNZWFzdXJlVmFsdWVzID0gJ21lYXN1cmUtdmFsdWVzJyxcbiAgQ29sb3IgPSAnY29sb3InLFxuICBTaXplID0gJ3NpemUnLFxuICBMYWJlbCA9ICdsYWJlbCcsXG4gIERldGFpbCA9ICdkZXRhaWwnLFxuICBUb29sdGlwID0gJ3Rvb2x0aXAnLFxuICBTaGFwZSA9ICdzaGFwZScsXG4gIFBhdGggPSAncGF0aCcsXG4gIEFuZ2xlID0gJ2FuZ2xlJ1xufVxuXG4vKipcbiAqIEFsbCBlcnJvciBjb2RlcyB1c2VkIGJ5IHRoZSBFeHRlbnNpb25zIEFQSS5cbiAqL1xuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XG4gIC8qKlxuICAgKiBUaHJvd24gd2hlbiBjYWxsZXIgYXR0ZW1wdHMgdG8gZXhlY3V0ZSBjb21tYW5kIGJlZm9yZSBpbml0aWFsaXphdGlvbiBoYXMgY29tcGxldGVkLlxuICAgKi9cbiAgQVBJTm90SW5pdGlhbGl6ZWQgPSAnYXBpLW5vdC1pbml0aWFsaXplZCcsXG4gIC8qKlxuICAgKiBUaHJvd24gd2hlbiBjYWxsZXIgYXR0ZW1wdHMgdG8gZXhlY3V0ZSBjb21tYW5kIHdoaWxlIGV4dGVuc2lvbiBpcyBub3QgdmlzaWJsZS5cbiAgICovXG4gIFZpc2liaWxpdHlFcnJvciA9ICd2aXNpYmlsaXR5LWVycm9yJyxcbiAgLyoqXG4gICAqIE9ubHkgb25lIGRpYWxvZyBjYW4gYmUgb3BlbmVkIGF0IHRpbWUgd2l0aCB0aGUgVUkgbmFtZXNwYWNlIGZ1bmN0aW9uYWxpdHkuXG4gICAqL1xuICBEaWFsb2dBbHJlYWR5T3BlbiA9ICdkaWFsb2ctYWxyZWFkeS1vcGVuJyxcbiAgLyoqXG4gICAqIFRoZSBvcGVuIGRpYWxvZyB3YXMgY2xvc2VkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgRGlhbG9nQ2xvc2VkQnlVc2VyID0gJ2RpYWxvZy1jbG9zZWQtYnktdXNlcicsXG4gIC8qKlxuICAgKiBBbiBlcnJvciBvY2N1cnJlZCB3aXRoaW4gdGhlIFRhYmxlYXUgRXh0ZW5zaW9ucyBBUEkuIENvbnRhY3QgVGFibGVhdSBTdXBwb3J0LlxuICAgKi9cbiAgSW50ZXJuYWxFcnJvciA9ICdpbnRlcm5hbC1lcnJvcicsXG4gIC8qKlxuICAgKiBBIGRpYWxvZyBtdXN0IHN0YXJ0IG9uIHRoZSBzYW1lIGRvbWFpbiBhcyB0aGUgcGFyZW50IGV4dGVuaW9uLlxuICAgKi9cbiAgSW52YWxpZERvbWFpbkRpYWxvZyA9ICdpbnZhbGlkLWRpYWxvZy1kb21haW4nLFxuICAvKipcbiAgICogQSBwYXJhbWV0ZXIgaXMgbm90IHRoZSBjb3JyZWN0IGRhdGEgdHlwZSBvciBmb3JtYXQuIFRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkIGluIHRoZSBFcnJvci5tZXNzYWdlIGZpZWxkLlxuICAgKi9cbiAgSW52YWxpZFBhcmFtZXRlciA9ICdpbnZhbGlkLXBhcmFtZXRlcicsXG4gIC8qKlxuICAgKiBDYW4gb2NjdXIgaWYgdGhlIGV4dGVuc2lvbiBpbnRlcmFjdHMgd2l0aCBhIGZpbHRlciB0aGF0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0LlxuICAgKi9cbiAgTWlzc2luZ0ZpbHRlciA9ICdtaXNzaW5nLWZpbHRlcicsXG4gIC8qKlxuICAgKiBDYW4gb2NjdXIgaWYgdGhlIGV4dGVuc2lvbiBpbnRlcmFjdHMgd2l0aCBhIHBhcmFtZXRlciB0aGF0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0LlxuICAgKi9cbiAgTWlzc2luZ1BhcmFtZXRlciA9ICdtaXNzaW5nLXBhcmFtZXRlcicsXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcbiAgICovXG4gIFNlcnZlckVycm9yID0gJ3NlcnZlci1lcnJvcicsXG4gIC8qKlxuICAgKiBEZXZlbG9wZXIgY2Fubm90IHNhdmUgc2V0dGluZ3Mgd2hpbGUgYW5vdGhlciBzYXZlIGlzIHN0aWxsIGluIHByb2dyZXNzLlxuICAgKi9cbiAgU2V0dGluZ1NhdmVJblByb2dyZXNzID0gJ3NldHRpbmctc2F2ZS1pbi1wcm9ncmVzcycsXG4gIC8qKlxuICAgKiBBbiB1bmtub3duIGV2ZW50IG5hbWUgd2FzIHNwZWNpZmllZCBpbiB0aGUgY2FsbCB0byBWaXouYWRkRXZlbnRMaXN0ZW5lcm9yIFZpei5yZW1vdmVFdmVudExpc3RlbmVyLlxuICAgKi9cbiAgVW5zdXBwb3J0ZWRFdmVudE5hbWUgPSAndW5zdXBwb3J0ZWQtZXZlbnQtbmFtZScsXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB3YXMgdXNlZCBmb3IgYSB0eXBlIG9mIGRhdGFzb3VyY2UgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhhdCBtZXRob2QgKHNlZSBnZXRBY3RpdmVUYWJsZXNBc3luYyBmb3IgYW4gZXhhbXBsZSlcbiAgICovXG4gIFVuc3VwcG9ydGVkTWV0aG9kRm9yRGF0YVNvdXJjZVR5cGUgPSAndW5zdXBwb3J0ZWQtbWV0aG9kLWZvci1kYXRhLXNvdXJjZS10eXBlJ1xufVxuXG4vKipcbiAqICBUeXBlIG9mIGFnZ3JlZ2F0aW9uIG9uIGEgZmllbGQuXG4gKi9cbmV4cG9ydCBlbnVtIEZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgU3VtID0gJ3N1bScsXG4gIEF2ZyA9ICdhdmcnLFxuICBNaW4gPSAnbWluJyxcbiAgTWF4ID0gJ21heCcsXG4gIFN0ZGV2ID0gJ3N0ZGV2JyxcbiAgU3RkZXZwID0gJ3N0ZGV2cCcsXG4gIFZhciA9ICd2YXInLFxuICBWYXJwID0gJ3ZhcnAnLFxuICBDb3VudCA9ICdjb3VudCcsXG4gIENvdW50ZCA9ICdjb3VudGQnLFxuICBNZWRpYW4gPSAnbWVkaWFuJyxcbiAgQXR0ciA9ICdhdHRyJyxcbiAgTm9uZSA9ICdub25lJyxcbiAgWWVhciA9ICd5ZWFyJyxcbiAgUXRyID0gJ3F0cicsXG4gIE1vbnRoID0gJ21vbnRoJyxcbiAgRGF5ID0gJ2RheScsXG4gIEhvdXIgPSAnaG91cicsXG4gIE1pbnV0ZSA9ICdtaW51dGUnLFxuICBTZWNvbmQgPSAnc2Vjb25kJyxcbiAgV2VlayA9ICd3ZWVrJyxcbiAgV2Vla2RheSA9ICd3ZWVrZGF5JyxcbiAgTW9udGhZZWFyID0gJ21vbnRoLXllYXInLFxuICBNZHkgPSAnbWR5JyxcbiAgRW5kID0gJ2VuZCcsXG4gIFRydW5jWWVhciA9ICd0cnVuYy15ZWFyJyxcbiAgVHJ1bmNRdHIgPSAndHJ1bmMtcXRyJyxcbiAgVHJ1bmNNb250aCA9ICd0cnVuYy1tb250aCcsXG4gIFRydW5jV2VlayA9ICd0cnVuYy13ZWVrJyxcbiAgVHJ1bmNEYXkgPSAndHJ1bmMtZGF5JyxcbiAgVHJ1bmNIb3VyID0gJ3RydW5jLWhvdXInLFxuICBUcnVuY01pbnV0ZSA9ICd0cnVuYy1taW51dGUnLFxuICBUcnVuY1NlY29uZCA9ICd0cnVuYy1zZWNvbmQnLFxuICBRdWFydDEgPSAncXVhcnQxJyxcbiAgUXVhcnQzID0gJ3F1YXJ0MycsXG4gIFNrZXduZXNzID0gJ3NrZXduZXNzJyxcbiAgS3VydG9zaXMgPSAna3VydG9zaXMnLFxuICBJbk91dCA9ICdpbi1vdXQnLFxuICBVc2VyID0gJ3VzZXInXG59XG5cbi8qKlxuICogUm9sZSBvZiBhIGZpZWxkLlxuICovXG5leHBvcnQgZW51bSBGaWVsZFJvbGVUeXBlIHtcbiAgRGltZW5zaW9uID0gJ2RpbWVuc2lvbicsXG4gIE1lYXN1cmUgPSAnbWVhc3VyZScsXG4gIFVua25vd24gPSAndW5rbm93bidcbn1cblxuLyoqXG4gKiBBbiBlbnVtZXJhdGlvbiBvZiB0aGUgdmFsaWQgdHlwZXMgb2YgZmlsdGVycyB0aGF0IGNhbiBiZSBhcHBsaWVkLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJUeXBlIHtcbiAgQ2F0ZWdvcmljYWwgPSAnY2F0ZWdvcmljYWwnLFxuICBSYW5nZSA9ICdyYW5nZScsXG4gIEhpZXJhcmNoaWNhbCA9ICdoaWVyYXJjaGljYWwnLFxuICBSZWxhdGl2ZURhdGUgPSAncmVsYXRpdmUtZGF0ZSdcbn1cblxuLyoqXG4gKiBUaGUgZGlmZmVyZW50IHVwZGF0ZSB0eXBlcyBmb3IgYXBwbHlpbmcgZmlsdGVyXG4gKi9cbmV4cG9ydCBlbnVtIEZpbHRlclVwZGF0ZVR5cGUge1xuICBBZGQgPSAnYWRkJyxcbiAgQWxsID0gJ2FsbCcsXG4gIFJlcGxhY2UgPSAncmVwbGFjZScsXG4gIFJlbW92ZSA9ICdyZW1vdmUnXG59XG5cbi8qKlxuICogVGhlIGRvbWFpbiB0eXBlIGZvciBhIGZpbHRlclxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJEb21haW5UeXBlIHtcbiAgLyoqXG4gICAqIFRoZSBkb21haW4gdmFsdWVzIHRoYXQgYXJlIHJlbGV2YW50IHRvIHRoZSBzcGVjaWZpZWQgZmlsdGVyXG4gICAqIGkuZS4gdGhlIGRvbWFpbiBpcyByZXN0cmljdGVkIGJ5IGEgcHJldmlvdXMgZmlsdGVyXG4gICAqL1xuICBSZWxldmFudCA9ICdyZWxldmFudCcsXG4gIC8qKlxuICAgKiBsaXN0IG9mIGFsbCBwb3NzaWJsZSBkb21haW4gdmFsdWVzIGZyb20gZGF0YWJhc2VcbiAgICovXG4gIERhdGFiYXNlID0gJ2RhdGFiYXNlJ1xufVxuXG4vKipcbiAqIFRoZSBvcHRpb24gZm9yIHNwZWNpZnlpbmcgd2hpY2ggdmFsdWVzIHRvIGluY2x1ZGUgZm9yIGZpbHRlcmluZ1xuICogSW5kaWNhdGVzIHdoYXQgdG8gZG8gd2l0aCBudWxsIHZhbHVlcyBmb3IgYSBnaXZlbiBmaWx0ZXIgb3IgbWFyayBzZWxlY3Rpb24gY2FsbC5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyTnVsbE9wdGlvbiB7XG4gIE51bGxWYWx1ZXMgPSAnbnVsbC12YWx1ZXMnLFxuICBOb25OdWxsVmFsdWVzID0gJ25vbi1udWxsLXZhbHVlcycsXG4gIEFsbFZhbHVlcyA9ICdhbGwtdmFsdWVzJ1xufVxuXG4vKipcbiAqIFR5cGUgb2YgbWFyayBmb3IgYSBnaXZlbiBtYXJrcyBjYXJkIGluIGEgdml6LlxuICovXG5leHBvcnQgZW51bSBNYXJrVHlwZSB7XG4gIEJhciA9ICdiYXInLFxuICBMaW5lID0gJ2xpbmUnLFxuICBBcmVhID0gJ2FyZWEnLFxuICBTcXVhcmUgPSAnc3F1YXJlJyxcbiAgQ2lyY2xlID0gJ2NpcmNsZScsXG4gIFNoYXBlID0gJ3NoYXBlJyxcbiAgVGV4dCA9ICd0ZXh0JyxcbiAgTWFwID0gJ21hcCcsXG4gIFBpZSA9ICdwaWUnLFxuICBHYW50dEJhciA9ICdnYW50dC1iYXInLFxuICBQb2x5Z29uID0gJ3BvbHlnb24nXG59XG5cbi8qKlxuICogQW4gZW51bWVyYXRpb24gZGVzY3JpYmluZyB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGFsbG93YWJsZSB2YWx1ZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIHJlc3RyaWN0aW5nIHRoZSBkb21haW4gb2YgYSBwYXJhbWV0ZXJcbiAqL1xuZXhwb3J0IGVudW0gUGFyYW1ldGVyVmFsdWVUeXBlIHtcbiAgQWxsID0gJ2FsbCcsXG4gIExpc3QgPSAnbGlzdCcsXG4gIFJhbmdlID0gJ3JhbmdlJ1xufVxuXG4vKipcbiAqIERhdGUgcGVyaW9kIHVzZWQgaW4gZmlsdGVycyBhbmQgaW4gcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IGVudW0gUGVyaW9kVHlwZSB7XG4gIFllYXJzID0gJ3llYXJzJyxcbiAgUXVhcnRlcnMgPSAncXVhcnRlcnMnLFxuICBNb250aHMgPSAnbW9udGhzJyxcbiAgV2Vla3MgPSAnd2Vla3MnLFxuICBEYXlzID0gJ2RheXMnLFxuICBIb3VycyA9ICdob3VycycsXG4gIE1pbnV0ZXMgPSAnbWludXRlcycsXG4gIFNlY29uZHMgPSAnc2Vjb25kcydcbn1cblxuZXhwb3J0IGVudW0gUXVpY2tUYWJsZUNhbGNUeXBlIHtcbiAgUnVubmluZ1RvdGFsID0gJ3J1bm5pbmctdG90YWwnLFxuICBEaWZmZXJlbmNlID0gJ2RpZmZlcmVuY2UnLFxuICBQZXJjZW50RGlmZmVyZW5jZSA9ICdwZXJjZW50LWRpZmZlcmVuY2UnLFxuICBQZXJjZW50T2ZUb3RhbCA9ICdwZXJjZW50LW9mLXRvdGFsJyxcbiAgUmFuayA9ICdyYW5rJyxcbiAgUGVyY2VudGlsZSA9ICdwZXJjZW50aWxlJyxcbiAgTW92aW5nQXZlcmFnZSA9ICdtb3ZpbmctYXZlcmFnZScsXG4gIFlURFRvdGFsID0gJ3l0ZC10b3RhbCcsXG4gIENvbXBvdW5kR3Jvd3RoUmF0ZSA9ICdjb21wb3VuZC1ncm93dGgtcmF0ZScsXG4gIFllYXJPdmVyWWVhckdyb3d0aCA9ICd5ZWFyLW92ZXIteWVhci1ncm93dGgnLFxuICBZVERHcm93dGggPSAneXRkLWdyb3d0aCcsXG4gIFVuZGVmaW5lZCA9ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogRW51bSBmb3Igc3BlY2lmeWluZyB0aGUgc2VsZWN0aW9uIHR5cGUgZm9yIHNlbGVjdCBtYXJrcyBhcGkuXG4gKi9cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblVwZGF0ZVR5cGUge1xuICBSZXBsYWNlID0gJ3NlbGVjdC1yZXBsYWNlJyxcbiAgQWRkID0gJ3NlbGVjdC1hZGQnLFxuICBSZW1vdmUgPSAnc2VsZWN0LXJlbW92ZSdcbn1cblxuLyoqXG4gKiBUaGUgdHlwZSBvZiBzaGVldCBhIFNoZWV0IG9iamVjdCByZXByZXNlbnRzXG4gKi9cbmV4cG9ydCBlbnVtIFNoZWV0VHlwZSB7XG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBTdG9yeSA9ICdzdG9yeScsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnXG59XG5cbmV4cG9ydCBlbnVtIFNvcnREaXJlY3Rpb24ge1xuICBJbmNyZWFzaW5nID0gJ2luY3JlYXNpbmcnLFxuICBEZWNyZWFzaW5nID0gJ2RlY3JlYXNpbmcnXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNlcnRhaW4gdHlwZSBvZiBldmVudCB3aGljaCBjYW4gYmUgbGlzdGVuZWQgZm9yXG4gKi9cbmV4cG9ydCBlbnVtIFRhYmxlYXVFdmVudFR5cGUge1xuICAvKiogUmFpc2VkIHdoZW4gYW55IGZpbHRlciBoYXMgY2hhbmdlZCBzdGF0ZS4qL1xuICBGaWx0ZXJDaGFuZ2VkID0gJ2ZpbHRlci1jaGFuZ2VkJyxcblxuICAvKiogVGhlIHNlbGVjdGVkIG1hcmtzIG9uIGEgdmlzdWFsaXphdGlvbiBoYXMgY2hhbmdlZCAqL1xuICBNYXJrU2VsZWN0aW9uQ2hhbmdlZCA9ICdtYXJrLXNlbGVjdGlvbi1jaGFuZ2VkJyxcblxuICAvKiogQSBwYXJhbWV0ZXIgaGFzIGhhZCBpdHMgdmFsdWUgbW9kaWZpZWQgKi9cbiAgUGFyYW1ldGVyQ2hhbmdlZCA9ICdwYXJhbWV0ZXItY2hhbmdlZCcsXG5cbiAgLyoqIFNldHRpbmdzIGhhdmUgYmVlbiBjaGFuZ2VkIGZvciB0aGlzIGV4dGVuc2lvbi4gKi9cbiAgU2V0dGluZ3NDaGFuZ2VkID0gJ3NldHRpbmdzLWNoYW5nZWQnXG59XG5cbmV4cG9ydCBlbnVtIFRyZW5kTGluZU1vZGVsVHlwZSB7XG4gIExpbmVhciA9ICdsaW5lYXInLFxuICBMb2dhcml0aG1pYyA9ICdsb2dhcml0aG1pYycsXG4gIEV4cG9uZW50aWFsID0gJ2V4cG9uZW50aWFsJyxcbiAgUG9seW5vbWlhbCA9ICdwb2x5bm9taWFsJ1xufVxuXG4vKipcbiAqIEVudW0gdGhhdCByZXByZXNlbnRzIHRoZSB2aXNpYmlsaXR5IHN0YXRlIG9mIGEgem9uZVxuICogQHNpbmNlIDEuMS4wXG4gKi9cbmV4cG9ydCBlbnVtIFpvbmVWaXNpYmlsaXR5VHlwZSB7XG4gIC8qKiBVc2VkIGZvciB0dXJuaW5nIG9uIHRoZSB2aXNpYml0eSBvZiBhIHpvbmUgaW4gdGhlIGRhc2hib2FyZC4qL1xuICBTaG93ID0gJ3Nob3cnLFxuXG4gIC8qKiBVc2VkIGZvciB0dXJuaW5nIG9mZiB0aGUgdmlzaWJpdHkgb2YgYSB6b25lIGluIHRoZSBkYXNoYm9hcmQuKi9cbiAgSGlkZSA9ICdoaWRlJyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvRXh0ZXJuYWxDb250cmFjdC9FbnVtcy50cyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5OdW1iZXIuaXNJbnRlZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vbnVtYmVyL2lzLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywgeyBpc0ludGVnZXI6IHJlcXVpcmUoJy4vX2lzLWludGVnZXInKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCkge1xuICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGVudW0gRXh0ZW5zaW9uQ29udGV4dCB7XG4gIERlc2t0b3AgPSAnZGVza3RvcCcsXG4gIFNlcnZlciA9ICdzZXJ2ZXInLFxuICBVbmtub3duID0gJ3Vua25vd24nXG59XG5cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbk1vZGUge1xuICBBdXRob3JpbmcgPSAnYXV0aG9yaW5nJyxcbiAgVmlld2luZyA9ICd2aWV3aW5nJyxcbiAgVW5rbm93biA9ICd1bmtub3duJ1xufVxuXG5leHBvcnQgZW51bSBDb2x1bW5UeXBlIHtcbiAgRGlzY3JldGUgPSAnZGlzY3JldGUnLFxuICBDb250aW51b3VzID0gJ2NvbnRpbnVvdXMnXG59XG5cbmV4cG9ydCBlbnVtIERhc2hib2FyZE9iamVjdFR5cGUge1xuICBCbGFuayA9ICdibGFuaycsXG4gIFdvcmtzaGVldCA9ICd3b3Jrc2hlZXQnLFxuICBRdWlja0ZpbHRlciA9ICdxdWljay1maWx0ZXInLFxuICBQYXJhbWV0ZXJDb250cm9sID0gJ3BhcmFtZXRlci1jb250cm9sJyxcbiAgUGFnZUZpbHRlciA9ICdwYWdlLWZpbHRlcicsXG4gIExlZ2VuZCA9ICdsZWdlbmQnLFxuICBUaXRsZSA9ICd0aXRsZScsXG4gIFRleHQgPSAndGV4dCcsXG4gIEltYWdlID0gJ2ltYWdlJyxcbiAgV2ViUGFnZSA9ICd3ZWItcGFnZScsXG4gIEV4dGVuc2lvbiA9ICdleHRlbnNpb24nXG59XG5cbmV4cG9ydCBlbnVtIERhdGFUeXBlIHtcbiAgU3RyaW5nID0gJ3N0cmluZycsXG4gIEludCA9ICdpbnQnLFxuICBGbG9hdCA9ICdmbG9hdCcsXG4gIEJvb2wgPSAnYm9vbCcsXG4gIERhdGUgPSAnZGF0ZScsXG4gIERhdGVUaW1lID0gJ2RhdGUtdGltZScsXG4gIFNwYXRpYWwgPSAnc3BhdGlhbCdcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RlZERhdGFUeXBlIHtcbiAgTnVtYmVyID0gJ251bWJlcicsXG4gIFN0cmluZyA9ICdzdHJpbmcnLFxuICBEYXRlID0gJ2RhdGUnLFxuICBCb29sZWFuID0gJ2Jvb2xlYW4nXG59XG5cbmV4cG9ydCBlbnVtIEVycm9yQ29kZXMge1xuICBJTklUSUFMSVpBVElPTl9FUlJPUiA9ICdpbml0aWFsaXphdGlvbi1lcnJvcicsXG4gIElOVEVSTkFMX0VSUk9SID0gJ2ludGVybmFsLWVycm9yJyxcbiAgTUlTU0lOR19FTlVNX01BUFBJTkcgPSAnbWlzc2luZy1lbnVtLW1hcHBpbmcnLFxuICBNSVNTSU5HX1BBUkFNRVRFUiA9ICdtaXNzaW5nLXBhcmFtZXRlcicsXG4gIFBFUk1JU1NJT05fREVOSUVEID0gJ3Blcm1pc3Npb24tZGVuaWVkJyxcbiAgUFJFU19NT0RFTF9QQVJTSU5HX0VSUk9SID0gJ3ByZXMtbW9kZWwtcGFyc2luZy1lcnJvcicsXG4gIFZFUlNJT05fTk9UX0NPTkZJR1VSRUQgPSAndmVyc2lvbi1ub3QtY29uZmlndXJlZCcsXG4gIFZJU0lCSUxJVFlfRVJST1IgPSAndmlzaWJpbGl0eS1lcnJvcicsXG4gIFVOS05PV05fVkVSQl9JRCA9ICd1bmtub3duLXZlcmItaWQnXG59XG5cbmV4cG9ydCBlbnVtIEZpZWxkQWdncmVnYXRpb25UeXBlIHtcbiAgU3VtID0gJ3N1bScsXG4gIEF2ZyA9ICdhdmcnLFxuICBNaW4gPSAnbWluJyxcbiAgTWF4ID0gJ21heCcsXG4gIFN0ZGV2ID0gJ3N0ZGV2JyxcbiAgU3RkZXZwID0gJ3N0ZGV2cCcsXG4gIFZhciA9ICd2YXInLFxuICBWYXJwID0gJ3ZhcnAnLFxuICBDb3VudCA9ICdjb3VudCcsXG4gIENvdW50ZCA9ICdjb3VudGQnLFxuICBNZWRpYW4gPSAnbWVkaWFuJyxcbiAgQXR0ciA9ICdhdHRyJyxcbiAgTm9uZSA9ICdub25lJyxcbiAgWWVhciA9ICd5ZWFyJyxcbiAgUXRyID0gJ3F0cicsXG4gIE1vbnRoID0gJ21vbnRoJyxcbiAgRGF5ID0gJ2RheScsXG4gIEhvdXIgPSAnaG91cicsXG4gIE1pbnV0ZSA9ICdtaW51dGUnLFxuICBTZWNvbmQgPSAnc2Vjb25kJyxcbiAgV2VlayA9ICd3ZWVrJyxcbiAgV2Vla2RheSA9ICd3ZWVrZGF5JyxcbiAgTW9udGhZZWFyID0gJ21vbnRoLXllYXInLFxuICBNZHkgPSAnbWR5JyxcbiAgRW5kID0gJ2VuZCcsXG4gIFRydW5jWWVhciA9ICd0cnVuYy15ZWFyJyxcbiAgVHJ1bmNRdHIgPSAndHJ1bmMtcXRyJyxcbiAgVHJ1bmNNb250aCA9ICd0cnVuYy1tb250aCcsXG4gIFRydW5jV2VlayA9ICd0cnVuYy13ZWVrJyxcbiAgVHJ1bmNEYXkgPSAndHJ1bmMtZGF5JyxcbiAgVHJ1bmNIb3VyID0gJ3RydW5jLWhvdXInLFxuICBUcnVuY01pbnV0ZSA9ICd0cnVuYy1taW51dGUnLFxuICBUcnVuY1NlY29uZCA9ICd0cnVuYy1zZWNvbmQnLFxuICBRdWFydDEgPSAncXVhcnQxJyxcbiAgUXVhcnQzID0gJ3F1YXJ0MycsXG4gIFNrZXduZXNzID0gJ3NrZXduZXNzJyxcbiAgS3VydG9zaXMgPSAna3VydG9zaXMnLFxuICBJbk91dCA9ICdpbi1vdXQnLFxuICBVc2VyID0gJ3VzZXInXG59XG5cbmV4cG9ydCBlbnVtIEZpZWxkUm9sZVR5cGUge1xuICBEaW1lbnNpb24gPSAnZGltZW5zaW9uJyxcbiAgTWVhc3VyZSA9ICdtZWFzdXJlJyxcbiAgVW5rbm93biA9ICd1bmtub3duJ1xufVxuXG4vKipcbiAqICBUaGUgZGlmZmVyZW50IHVwZGF0ZSB0eXBlcyBmb3IgYXBwbHlpbmcgZmlsdGVyLlxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJVcGRhdGVUeXBlIHtcbiAgQWRkID0gJ2FkZCcsXG4gIEFsbCA9ICdhbGwnLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxuICBSZW1vdmUgPSAncmVtb3ZlJ1xufVxuXG5leHBvcnQgZW51bSBTaGVldFR5cGUge1xuICBEYXNoYm9hcmQgPSAnZGFzaGJvYXJkJyxcbiAgU3RvcnkgPSAnc3RvcnknLFxuICBXb3Jrc2hlZXQgPSAnd29ya3NoZWV0J1xufVxuXG5leHBvcnQgZW51bSBEb21haW5SZXN0cmljdGlvblR5cGUge1xuICBBbGwgPSAnYWxsJyxcbiAgTGlzdCA9ICdsaXN0JyxcbiAgUmFuZ2UgPSAncmFuZ2UnXG59XG5cbmV4cG9ydCBlbnVtIERhdGVTdGVwUGVyaW9kIHtcbiAgWWVhcnMgPSAneWVhcnMnLFxuICBRdWFydGVycyA9ICdxdWFydGVycycsXG4gIE1vbnRocyA9ICdtb250aHMnLFxuICBXZWVrcyA9ICd3ZWVrcycsXG4gIERheXMgPSAnZGF5cycsXG4gIEhvdXJzID0gJ2hvdXJzJyxcbiAgTWludXRlcyA9ICdtaW51dGVzJyxcbiAgU2Vjb25kcyA9ICdzZWNvbmRzJ1xufVxuXG4vKipcbiAqIFRoZSBvcHRpb24gZm9yIHNwZWNpZnlpbmcgd2hpY2ggdmFsdWVzIHRvIGluY2x1ZGUgZm9yIGZpbHRlcmluZy5cbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyTnVsbE9wdGlvbiB7XG4gIE51bGxWYWx1ZXMgPSAnbnVsbHZhbHVlcycsXG4gIE5vbk51bGxWYWx1ZXMgPSAnbm9ubnVsbHZhbHVlcycsXG4gIEFsbFZhbHVlcyA9ICdhbGx2YWx1ZXMnXG59XG5cbi8qKlxuICogVGhlIHR5cGUgb2YgZmlsdGVyIGRvbWFpblxuICovXG5leHBvcnQgZW51bSBGaWx0ZXJEb21haW5UeXBlIHtcbiAgUmVsZXZhbnQgPSAncmVsZXZhbnQnLFxuICBEYXRhYmFzZSA9ICdkYXRhYmFzZSdcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSBzZWxlY3Rpb24gdHlwZSBmb3Igc2VsZWN0IG1hcmtzIGFwaS5cbiAqL1xuZXhwb3J0IGVudW0gU2VsZWN0aW9uVXBkYXRlVHlwZSB7XG4gIFJlcGxhY2UgPSAnc2VsZWN0LXJlcGxhY2UnLFxuICBBZGQgPSAnc2VsZWN0LWFkZCcsXG4gIFJlbW92ZSA9ICdzZWxlY3QtcmVtb3ZlJ1xufVxuXG4vKipcbiAqIEludGVybmFsIGVudW0gZm9yIHNwZWNpZnlpbmcgdGhlIGluY2x1ZGVkIHZhbHVlcyB0eXBlIGZvciByYW5nZSBzZWxlY3Rpb24uXG4gKi9cbmV4cG9ydCBlbnVtIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzIHtcbiAgSW5jbHVkZU51bGwgPSAnaW5jbHVkZS1udWxsJyxcbiAgSW5jbHVkZU5vbk51bGwgPSAnaW5jbHVkZS1ub24tbnVsbCcsXG4gIEluY2x1ZGVBbGwgPSAnaW5jbHVkZS1hbGwnXG59XG5cbi8qKlxuICogVHlwZSBvZiBtYXJrIGZvciBhIGdpdmVuIG1hcmtzIGNhcmQgaW4gYSB2aXouXG4gKi9cbmV4cG9ydCBlbnVtIE1hcmtUeXBlIHtcbiAgQmFyID0gJ2JhcicsXG4gIExpbmUgPSAnbGluZScsXG4gIEFyZWEgPSAnYXJlYScsXG4gIFNxdWFyZSA9ICdzcXVhcmUnLFxuICBDaXJjbGUgPSAnY2lyY2xlJyxcbiAgU2hhcGUgPSAnc2hhcGUnLFxuICBUZXh0ID0gJ3RleHQnLFxuICBNYXAgPSAnbWFwJyxcbiAgUGllID0gJ3BpZScsXG4gIEdhbnR0QmFyID0gJ2dhbnR0LWJhcicsXG4gIFBvbHlnb24gPSAncG9seWdvbicsXG59XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3Igc3BlY2lmeWluZyB0aGUgdHlwZSBvZiBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRmlsdGVyVHlwZSB7XG4gIENhdGVnb3JpY2FsID0gJ2NhdGVnb3JpY2FsJyxcbiAgUmFuZ2UgPSAncmFuZ2UnLFxuICBSZWxhdGl2ZURhdGUgPSAncmVsYXRpdmVEYXRlJyxcbiAgSGllcmFyY2hpY2FsID0gJ2hpZXJhcmNoaWNhbCdcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBlbnVtIGZvciBzcGVjaWZ5aW5nIHRoZSBEYXRlUmFuZ2VUeXBlIG9mIGEgcmVsYXRpdmUgZGF0ZSBmaWx0ZXJcbiAqL1xuZXhwb3J0IGVudW0gRGF0ZVJhbmdlVHlwZSB7XG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGxhc3QgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBMYXN0ID0gJ2xhc3QnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBsYXN0IE4gZGF5cywgd2Vla3MsIG1vbnRocywgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBMYXN0TiA9ICdsYXN0TicsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIG5leHQgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBOZXh0ID0gJ25leHQnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIHRoZSBuZXh0IE4gZGF5cywgd2Vla3MsIG1vbnRocywgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBOZXh0TiA9ICduZXh0TicsXG4gIC8qKlxuICAgKiBSZWZlcnMgdG8gdGhlIGN1cnJlbnQgZGF5LCB3ZWVrLCBtb250aCwgZXRjLiBvZiB0aGUgZGF0ZSBwZXJpb2QuXG4gICAqL1xuICBDdXJyZW50ID0gJ2N1cnJlbnQnLFxuICAvKipcbiAgICogUmVmZXJzIHRvIGV2ZXJ5dGhpbmcgdXAgdG8gYW5kIGluY2x1ZGluZyB0aGUgY3VycmVudCBkYXksIHdlZWssIG1vbnRoLCBldGMuIG9mIHRoZSBkYXRlIHBlcmlvZC5cbiAgICovXG4gIFRvRGF0ZSA9ICd0b0RhdGUnXG59XG5cbi8qKlxuICogVXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGxhdW5jaGluZyBvZiBhbiBleHRlbnNpb24gZGlhbG9nIHN1Y2NlZWRlZCBvciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBlbnVtIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCB7XG4gIERpYWxvZ0FscmVhZHlPcGVuID0gJ2RpYWxvZy1hbHJlYWR5LW9wZW4nLFxuICBJbnZhbGlkRG9tYWluID0gJ2ludmFsaWQtZG9tYWluJyxcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9FbnVtcy50cyIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vY29udHJhY3QvTW9kZWxzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbklkIH0gZnJvbSAnLi4vY29udHJhY3QvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBWZXJiSWQgfSBmcm9tICcuLi9jb250cmFjdC9WZXJicyc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi9WZXJzaW9uTnVtYmVyJztcbmltcG9ydCB7IEluaXRpYWxpemF0aW9uT3B0aW9ucyB9IGZyb20gJy4vSW5pdGlhbGl6YXRpb25PcHRpb25zJztcbmltcG9ydCB7IElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04gfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25IYW5kbGVyID0gKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVQYXJhbWV0ZXJzIHtcbiAgW2tleTogc3RyaW5nXTogTW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZVJlc3BvbnNlIHtcbiAgcmVzdWx0OiBNb2RlbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb24ge1xuICBub3RpZmljYXRpb25JZDogTm90aWZpY2F0aW9uSWQ7XG4gIGRhdGE6IE1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVybmFsQXBpRGlzcGF0Y2hlciB7XG4gIGV4ZWN1dGUodmVyYjogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPjtcbiAgcmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpOiB2b2lkO1xuICB1bnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZDtcbn1cblxuLy8gVGhpcyBmYWN0b3J5IGZ1bmN0aW9uIHdpbGwgZ2V0IGNhbGxlZCBmcm9tIHRoZSBleHRlcm5hbCBzaWRlIG9mIHRoaW5ncyB0byBpbnN0YW50aWF0ZSBhIHByb3Blcmx5XG4vLyB2ZXJzaW9uZWQgQVBJIGRpc3BhdGNoZXIgd2hpY2ggdGhpcyBwYXJ0aWN1bGFyIHZlcnNpb24gb2YgZXh0ZXJuYWwga25vd3MgaG93IHRvIHVzZVxuZXhwb3J0IHR5cGUgSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeSA9IChpbnRlcm5hbENvbnRyYWN0VmVyc2lvbjogVmVyc2lvbk51bWJlcikgPT4gSW50ZXJuYWxBcGlEaXNwYXRjaGVyO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fdGFibGVhdURlc2t0b3BEaXNwYXRjaGVyOiBQcm9taXNlPEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+O1xuICAgIF9fcGxhdGZvcm1Jc09mZmljaWFsUmVsZWFzZTogYm9vbGVhbjtcbiAgICBfX3dhcm5pbmdJc3N1ZWQ6IGJvb2xlYW47XG4gIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIge1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGVza3RvcERpc3BhdGNoZXJQcm9taXNlKG9wdGlvbnM/OiBJbml0aWFsaXphdGlvbk9wdGlvbnMpOiBQcm9taXNlPEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zLmlzQWxwaGEgPT09ICd1bmRlZmluZWQnKSAmJiAhd2luZG93Ll9fd2FybmluZ0lzc3VlZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybignVGhpcyBpcyBhbiBhbHBoYSB2ZXJzaW9uIG9mIHRoZSBFeHRlbnNpb25zIEFQSS4gUGxlYXNlIHVwZ3JhZGUgdG8gYW4gb2ZmaWNpYWwgcmVsZWFzZS4nKTtcbiAgICAgIHdpbmRvdy5fX3dhcm5pbmdJc3N1ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmlzQWxwaGEhICYmIHdpbmRvdy5fX3BsYXRmb3JtSXNPZmZpY2lhbFJlbGVhc2UpIHtcbiAgICAgIHdpbmRvdy5fX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlci50aGVuKChkaXNwYXRjaGVyRmFjdG9yeSkgPT4ge1xuICAgICAgICBjb25zdCBkaXNwYXRjaGVyID0gZGlzcGF0Y2hlckZhY3RvcnkoSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTik7XG4gICAgICAgIGRpc3BhdGNoZXIuZXhlY3V0ZShWZXJiSWQuQmxvY2tFeHRlbnNpb24sIHt9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5fX3RhYmxlYXVEZXNrdG9wRGlzcGF0Y2hlcjtcbiAgfVxuXG4gIC8vIEJlY2F1c2Ugd2UgdXNlIHRoZSBhYnNlbmNlIG9mIG9wdGlvbnMgIHRvIGlkZW50aWZ5IHZlcnNpb25zIDw9IDEuMC4wIHdlIG11c3QgcGFzcyB0aGVtIGhlcmUgYXMgd2VsbFxuICBleHBvcnQgZnVuY3Rpb24gaGFzRGVza3RvcEFwaURpc3BhdGNoZXJQcm9taXNlKG9wdGlvbnM/OiBJbml0aWFsaXphdGlvbk9wdGlvbnMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFJbnRlcm5hbEFwaURpc3BhdGNoZXJIb2xkZXIuZ2V0RGVza3RvcERpc3BhdGNoZXJQcm9taXNlKG9wdGlvbnMpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldERlc2t0b3BEaXNwYXRjaGVyUHJvbWlzZShkaXNwYXRjaGVyOiBQcm9taXNlPEludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+LCBvcHRpb25zPzogSW5pdGlhbGl6YXRpb25PcHRpb25zKTogdm9pZCB7XG4gICAgd2luZG93Ll9fdGFibGVhdURlc2t0b3BEaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgd2luZG93Ll9fcGxhdGZvcm1Jc09mZmljaWFsUmVsZWFzZSA9IG9wdGlvbnMucGxhdGZvcm1Jc09mZmljaWFsUmVsZWFzZSE7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL2ludGVyZmFjZS9JbnRlcm5hbEFwaURpc3BhdGNoZXIudHMiLCJleHBvcnQgZW51bSBOb3RpZmljYXRpb25JZCB7XG4gIFNlbGVjdGVkTWFya3NDaGFuZ2VkID0gJ3NlbGVjdGVkLW1hcmtzLWNoYW5nZWQnLFxuICBQYXJhbWV0ZXJDaGFuZ2VkID0gJ3BhcmFtZXRlci1jaGFuZ2VkJyxcbiAgRmlsdGVyQ2hhbmdlZCA9ICdmaWx0ZXItY2hhbmdlZCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1VwZGF0ZSA9ICdleHRlbnNpb24tZGlhbG9nLXVwZGF0ZScsXG4gIFNldHRpbmdzQ2hhbmdlZCA9ICdzZXR0aW5ncy1jaGFuZ2VkJyxcbiAgQ29udGV4dE1lbnVDbGljayA9ICdjb250ZXh0LW1lbnUtY2xpY2snLFxuICBUZXN0Q29udmVyc2lvbk5vdGlmaWNhdGlvbiA9ICd0ZXN0LWNvbnZlcnNpb24tbm90aWZpY2F0aW9uJ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9Ob3RpZmljYXRpb25zLnRzIiwiZXhwb3J0IGVudW0gUGFyYW1ldGVySWQge1xuICBFeHRlbnNpb25Mb2NhdG9yID0gJ2V4dGVuc2lvbi1sb2NhdG9yJyxcbiAgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyA9ICdleHRlbnNpb24tYm9vdHN0cmFwLWluZm8nLFxuICBFeHRlbnNpb25TZXR0aW5nc0luZm8gPSAnZXh0ZW5zaW9uLXNldHRpbmdzLWluZm8nLFxuICBWaXN1YWxJZCA9ICd2aXN1YWwtaWQnLFxuICBTaGVldFBhdGggPSAnc2hlZXQtcGF0aCcsXG4gIElnbm9yZUFsaWFzZXMgPSAnaWdub3JlLWFsaWFzZXMnLFxuICBJZ25vcmVTZWxlY3Rpb24gPSAnaWdub3JlLXNlbGVjdGlvbicsXG4gIEluY2x1ZGVBbGxDb2x1bW5zID0gJ2luY2x1ZGUtYWxsLWNvbHVtbnMnLFxuICBNYXhSb3dzID0gJ21heC1yb3dzJyxcbiAgVW5kZXJseWluZ0RhdGFUYWJsZSA9ICd1bmRlcmx5aW5nLWRhdGEtdGFibGUnLFxuICBVbmRlcmx5aW5nU3VtbWFyeURhdGFUYWJsZSA9ICd1bmRlcmx5aW5nLXN1bW1hcnktZGF0YS10YWJsZScsXG4gIERhdGFTb3VyY2VEYXRhVGFibGUgPSAnZGF0YS1zb3VyY2UtZGF0YS10YWJsZScsXG4gIFNldHRpbmdzVmFsdWVzID0gJ3NldHRpbmdzLXZhbHVlcycsXG4gIFNlbGVjdGVkRGF0YSA9ICdzZWxlY3RlZC1kYXRhJyxcbiAgSGlnaGxpZ2h0ZWREYXRhID0gJ2hpZ2hsaWdodGVkLWRhdGEnLFxuXG4gIC8vIEZpbHRlciBQYXJhbXNcbiAgRmllbGROYW1lID0gJ2ZpZWxkLW5hbWUnLFxuICBGaWx0ZXJWYWx1ZXMgPSAnZmlsdGVyLXZhbHVlcycsXG4gIEZpbHRlclVwZGF0ZVR5cGUgPSAnZmlsdGVyLXVwZGF0ZS10eXBlJyxcbiAgSXNFeGNsdWRlTW9kZSA9ICdpcy1leGNsdWRlJyxcbiAgRmlsdGVyUmFuZ2VNaW4gPSAnZmlsdGVyLXJhbmdlLW1pbicsXG4gIEZpbHRlclJhbmdlTWF4ID0gJ2ZpbHRlci1yYW5nZS1tYXgnLFxuICBGaWx0ZXJSYW5nZU51bGxPcHRpb24gPSAnZmlsdGVyLXJhbmdlLW51bGwtb3B0aW9uJyxcbiAgV29ya3NoZWV0RmlsdGVycyA9ICd3b3Jrc2hlZXQtZmlsdGVycycsXG4gIEZpZWxkSWQgPSAnZmllbGQtaWQnLFxuICBEb21haW5UeXBlID0gJ2RvbWFpbi10eXBlJyxcbiAgQ2F0ZWdvcmljYWxEb21haW4gPSAnY2F0ZWdvcmljYWwtZG9tYWluJyxcbiAgUXVhbnRpdGF0aXZlRG9tYWluID0gJ3F1YW50aXRhdGl2ZS1kbWFpbicsXG4gIEZpZWxkID0gJ2ZpZWxkJyxcblxuICBXb3Jrc2hlZXROYW1lID0gJ3dvcmtzaGVldC1uYW1lJyxcbiAgRGFzaGJvYXJkTmFtZSA9ICdkYXNoYm9hcmQnLFxuXG4gIFBhcmFtZXRlckluZm8gPSAncGFyYW1ldGVyLWluZm8nLFxuICBQYXJhbWV0ZXJJbmZvcyA9ICdwYXJhbWV0ZXItaW5mb3MnLFxuICBQYXJhbWV0ZXJDYXB0aW9uID0gJ3BhcmVtZXRlci1jYXB0aW9uJyxcbiAgUGFyYW1ldGVyRmllbGROYW1lID0gJ3BhcmFtZXRlci1maWVsZC1uYW1lJyxcbiAgUGFyYW1ldGVyVmFsdWUgPSAncGFyYW1ldGVyLXZhbHVlJyxcbiAgU2VsZWN0aW9uID0gJ3NlbGVjdGlvbicsXG4gIFNlbGVjdGlvblVwZGF0ZVR5cGUgPSAnc2VsZWN0aW9uVXBkYXRlVHlwZScsXG4gIEhpZXJWYWxTZWxlY3Rpb25Nb2RlbHMgPSAnaGllcmFyY2hpY2FsVmFsdWVTZWxlY3Rpb25Nb2RlbHMnLFxuICBRdWFudFJhbmdlU2VsZWN0aW9uTW9kZWxzID0gJ3F1YW50YXRpdmVSYW5nZVNlbGVjdGlvbk1vZGVscycsXG4gIERpbVZhbFNlbGVjdGlvbk1vZGVscyA9ICdkaW1lbnNpb25WYWx1ZVNlbGVjdGlvbk1vZGVscycsXG5cbiAgQWN0aXZlVGFibGVzSW5mbyA9ICdhY3RpdmUtdGFibGVzLWluZm8nLFxuICBEYXRhU291cmNlID0gJ2RhdGEtc291cmNlJyxcbiAgRGF0YVNvdXJjZUlkID0gJ2RhdGEtc291cmNlLWlkJyxcbiAgRGVsdGFUaW1lTXMgPSAnZGVsdGEtdGltZS1tcycsXG4gIFNob3VsZFJlZnJlc2hEUyA9ICdzaG91bGQtcmVmcmVzaC1kcycsXG4gIERhdGFTY2hlbWEgPSAnZGF0YS1zY2hlbWEnLFxuICBEYXRhU291cmNlTmFtZSA9ICdkYXRhLXNvdXJjZS1uYW1lJyxcbiAgQ29sdW1uc1RvSW5jbHVkZSA9ICdjb2x1bW5zLXRvLWluY2x1ZGUnLFxuICBKb2luRGVzY3JpcHRpb24gPSAnam9pbi1kZXNjcmlwdGlvbicsXG4gIENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcyA9ICdjb25uZWN0aW9uLWRlc2NyaXB0aW9uLXN1bW1hcmllcycsXG5cbiAgRXh0ZW5zaW9uRGlhbG9nVXJsID0gJ2V4dGVuc2lvbi1kaWFsb2ctdXJsJyxcbiAgRXh0ZW5zaW9uRGlhbG9nUGF5bG9hZCA9ICdleHRlbnNpb24tZGlhbG9nLXBheWxvYWQnLFxuICBJc0V4dGVuc2lvbkRpYWxvZyA9ICdpcy1leHRlbnNpb24tZGlhbG9nJyxcbiAgRXh0ZW5zaW9uRGlhbG9nSCA9ICdleHRlbnNpb24tZGlhbG9nLWhlaWdodCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1cgPSAnZXh0ZW5zaW9uLWRpYWxvZy13aWR0aCcsXG4gIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCA9ICdleHRlbnNpb24tZGlhbG9nLXJlc3VsdCcsXG5cbiAgRXh0ZW5zaW9uQ29udGV4dE1lbnVJZHMgPSAnZXh0ZW5zaW9uLWNvbnRleHQtbWVudS1pZHMnLFxuXG4gIFRlc3RDb252ZXJzaW9uUGFyYW1ldGVyID0gJ3Rlc3QtY29udmVyc2lvbi1wYXJhbWV0ZXInLFxuXG4gIERhc2hib2FyZCA9ICdkYXNoYm9hcmQnLFxuICBab25lSWRzVmlzaWJpbGl0eU1hcCA9ICd6b25lLWlkcy12aXNpYmlsaXR5LW1hcCdcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9jb250cmFjdC9QYXJhbWV0ZXJzLnRzIiwiaW1wb3J0IHsgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0ludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgTm90aWZpY2F0aW9uLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzLCBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9ucyBmcm9tICcuL1ZlcnNpb25UcmFuc2xhdGlvbnMnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBjb252ZXJ0ZXIgaXMgZGVzaWduZWQgdG8gYWxsb3cgdGhlIHBsYXRmb3JtIGFuZCBleHRlcm5hbCBtb2R1bGVzXG4gKiB0byBzZWVtbGVzc2x5IGNvbW11bmljYXRlIG92ZXIgdHdvIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiB0aGUgaW50ZXJuYWwgQVBJLiBUaGUgb25seVxuICogbW9kZSBpdCBzdXBwb3J0cyBpcyBleHRlcm5hbCdzIHZlcnNpb24gPD0gcGxhdGZvcm0ncyB2ZXJzaW9uLiBXaGVuIGV4ZWN1dGluZ1xuICogY29tbWFuZHMsIGl0IGlzIHVzZWQgdG8gdXBncmFkZSB0aGUgZXh0ZXJuYWwgcmVwcmVzZW50YXRpb24gdG8gd2hhdCBwbGF0Zm9ybSBrbm93cyBvbiB0aGUgd2F5IGluXG4gKiBhbmQgZG93bmdyYWRlIHRoZSByZXByZXNlbnRhdGlvbnMgb24gdGhlIHdheSBvdXQuIFNpbWlsYXJseSBmb3Igbm90aWZpY2F0aW9ucywgaXQgY2FuXG4gKiBkb3duZ3JhZGUgdGhvc2Ugb24gdGhlIHdheSBmcm9tIHBsYXRmb3JtIHRvIGV4dGVybmFsLlxuICovXG5leHBvcnQgY2xhc3MgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIGltcGxlbWVudHMgSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIge1xuICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlclxuICAgICpcbiAgICAqIEBwYXJhbSBfZXh0ZXJuYWxWZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCBhcGktZXh0ZXJuYWwtanMgaXMgdXNpbmdcbiAgICAqIEBwYXJhbSBfcGxhdGZvcm1WZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCB0aGUgYXBpLXBsYXRmb3JtLWpzIGlzIHVzaW5nXG4gICAgKiBAcGFyYW0gX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zIE9yZGVyZWQgbGlzdCBvZiB0aGUgdHJhbnNsYXRpb25zIHRvIHBlcmZvcm0gd2hlbiB1cGdyYWRpbmcgY21kIHBhcmFtZXRlcnNcbiAgICAqIEBwYXJhbSBfZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgZG93bmdyYWRlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIGFmdGVyIGEgY21kXG4gICAgKiBAcGFyYW0gX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgZG93bmdyYWRlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIG9uIGEgbm90aWZpY2F0aW9uXG4gICAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tRGF0YShcbiAgICBleHRlcm5hbFZlcnNpb246IFZlcnNpb25OdW1iZXIsXG4gICAgcGxhdGZvcm1WZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICAgIHVwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPixcbiAgICBkb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4sXG4gICAgZG93bmdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPlxuICApOiBTdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIge1xuICAgIHJldHVybiBuZXcgdGhpcyhcbiAgICAgIGV4dGVybmFsVmVyc2lvbi5tYWpvcixcbiAgICAgIHBsYXRmb3JtVmVyc2lvbi5tYWpvcixcbiAgICAgIHVwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zLFxuICAgICAgZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucyxcbiAgICAgIGRvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyXG4gICAqXG4gICAqIEBwYXJhbSBfZXh0ZXJuYWxNYWpvclZlcnNpb24gVGhlIG1ham9yIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IGFwaS1leHRlcm5hbC1qcyBpcyB1c2luZ1xuICAgKiBAcGFyYW0gX3BsYXRmb3JtTWFqb3JWZXJzaW9uIFRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCB0aGUgYXBpLXBsYXRmb3JtLWpzIGlzIHVzaW5nXG4gICAqIEBwYXJhbSBfdXBncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIHRoZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSB3aGVuIHVwZ3JhZGluZyBjbWQgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gX2Rvd25ncmFkZUV4ZWN1dGVUcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIGRvd25ncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBhZnRlciBhIGNtZFxuICAgKiBAcGFyYW0gX2Rvd25ncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgZG93bmdyYWRlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIG9uIGEgbm90aWZpY2F0aW9uXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZXh0ZXJuYWxNYWpvclZlcnNpb246IG51bWJlcixcbiAgICBwcml2YXRlIF9wbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyLFxuICAgIHByaXZhdGUgX3VwZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZUV4ZWN1dGVDYWxsPixcbiAgICBwcml2YXRlIF9kb3duZ3JhZGVFeGVjdXRlVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlRXhlY3V0ZVJldHVybj4sXG4gICAgcHJpdmF0ZSBfZG93bmdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuRG93bmdyYWRlTm90aWZpY2F0aW9uPikge1xuXG4gICAgaWYgKHRoaXMuX2V4dGVybmFsTWFqb3JWZXJzaW9uID4gdGhpcy5fcGxhdGZvcm1NYWpvclZlcnNpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNvbnZlcnQgYmV0d2VlbiBleHRlcm5hbCB2ZXJzaW9uICR7dGhpcy5fZXh0ZXJuYWxNYWpvclZlcnNpb259IGFuZCAke3RoaXMuX3BsYXRmb3JtTWFqb3JWZXJzaW9ufWApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGdyYWRlRXhlY3V0ZUNhbGwodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpOiB7IHZlcmI6IFZlcmJJZDsgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnM7IH0ge1xuICAgIC8vIFBlcmZvcm0gdGhlIHVwZ3JhZGUgb2YgdGhlIHZlcmIgYW5kIHBhcmFtZXRlcnMgdG8gdGhlIGxldmVsIHRoYXQgcGxhdGZvcm0gaXMgdXNpbmdcbiAgICBsZXQgdXBncmFkZWQgPSB7IHZlcmI6IHZlcmIsIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMgfTtcbiAgICBmb3IgKGNvbnN0IHVwZ3JhZGVUcmFuc2xhdGlvbiBvZiB0aGlzLl91cGdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucykge1xuICAgICAgdXBncmFkZWQgPSB1cGdyYWRlVHJhbnNsYXRpb24odXBncmFkZWQudmVyYiwgdXBncmFkZWQucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZ3JhZGVkO1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIC8vIERvd25ncmFkZSB0aGUgcmVzcG9uc2UgdG8gd2hhdCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIGV4cGVjdGluZ1xuICAgIGxldCBkb3duZ3JhZGVkID0gZXhlY3V0ZVJlc3BvbnNlO1xuICAgIGZvciAoY29uc3QgZG93bmdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fZG93bmdyYWRlRXhlY3V0ZVRyYW5zbGF0aW9ucykge1xuICAgICAgZG93bmdyYWRlZCA9IGRvd25ncmFkZVRyYW5zbGF0aW9uKGRvd25ncmFkZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkb3duZ3JhZGVkO1xuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IE5vdGlmaWNhdGlvbiB7XG4gICAgLy8gRG93bmdyYWRlIHRoZSBub3RpZmljYXRpb24gdG8gd2hhdCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIGV4cGVjdGluZ1xuICAgIGxldCBkb3duZ3JhZGVkID0gbm90aWZpY2F0aW9uO1xuICAgIGZvciAoY29uc3QgZG93bmdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fZG93bmdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zKSB7XG4gICAgICBkb3duZ3JhZGVkID0gZG93bmdyYWRlVHJhbnNsYXRpb24oZG93bmdyYWRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvd25ncmFkZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9TdGFja2luZ1ZlcnNpb25Db252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBJbnRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB9IGZyb20gJy4vSW50ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXInO1xuaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlLCBOb3RpZmljYXRpb24sIFZlcmJJZCwgRXhlY3V0ZVBhcmFtZXRlcnMgfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcblxuLyoqXG4gKiBUaGlzIHZlcnNpb24gY29udmVydGVyIGRvZXNuJ3QgYWN0dWFsbHkgZG8gYW55dGhpbmcgYnV0IGlzIHVzZWZ1bCBmb3IgdGVzdGluZyBvciB3aGVuIHdlIGhhdmVcbiAqIGEgbWF0Y2hpbmcgcGxhdGZvcm0gYW5kIGludGVybmFsIHZlcnNpb24gbnVtYmVyXG4qL1xuZXhwb3J0IGNsYXNzIElkZW50aXR5VmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEludGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcbiAgcHVibGljIHVwZ3JhZGVFeGVjdXRlQ2FsbCh2ZXJiOiBhbnksIHBhcmFtZXRlcnM6IGFueSk6IHsgdmVyYjogVmVyYklkOyBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVyczsgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcmI6IHZlcmIgYXMgVmVyYklkLFxuICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyBhcyBFeGVjdXRlUGFyYW1ldGVyc1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZG93bmdyYWRlRXhlY3V0ZVJldHVybihleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSk6IEV4ZWN1dGVSZXNwb25zZSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBkb3duZ3JhZGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAgIHJldHVybiBub3RpZmljYXRpb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9JZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIudHMiLCJpbXBvcnQgeyBFeGVjdXRlUmVzcG9uc2UsIE5vdGlmaWNhdGlvbiwgVmVyYklkLCBFeGVjdXRlUGFyYW1ldGVycywgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbyB9IGZyb20gJy4uL0pzQXBpSW50ZXJuYWxDb250cmFjdCc7XG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuXG4vKiogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB3ZSByZWNlaXZlIG9sZCB2ZXJzIGFuZCBwYXJhbWV0ZXJzIGZyb20gdGhlIGV4dGVybmFsIGJlZm9yZSB3ZSBzZW5kIGl0IHRvIHBsYXRmb3JtICovXG5leHBvcnQgdHlwZSBVcGdyYWRlRXhlY3V0ZUNhbGwgPVxuICAodmVyYjogYW55LCBwYXJhbWV0ZXJzOiBhbnkpID0+IHsgdmVyYjogVmVyYklkOyBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyB9O1xuXG4vKiogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB3ZSByZWNlaXZlZCBhIHJlc3BvbnNlIGJhY2sgZnJvbSBwbGF0Zm9ybSBhbmQgd2UgbmVlZCB0byBkb3duZ3JhZGUgaXQgdG8gZXh0ZXJuYWwncyB2ZXJzaW9uICovXG5leHBvcnQgdHlwZSBEb3duZ3JhZGVFeGVjdXRlUmV0dXJuID1cbiAgKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKSA9PiBFeGVjdXRlUmVzcG9uc2U7XG5cbi8qKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHdlIHJlY2VpdmUgYSBub3RpZmljYXRpb24gZnJvbSBwbGF0Zm9ybSBhbmQgd2UgbmVlZCB0byBkb3duZ3JhZGUgaXQgdG8gZXh0ZXJuYWwncyB2ZXJzaW9uICovXG5leHBvcnQgdHlwZSBEb3duZ3JhZGVOb3RpZmljYXRpb24gPVxuICAobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pID0+IE5vdGlmaWNhdGlvbjtcblxuXG4vLyBUaGlzIGlzIHdoZXJlIHdlIHdpbGwgc3RhcnQgdG8gZGVmaW5lIHNvbWUgb2YgdGhlc2UgdHJhbnNsYXRpb25zLlxuLy8gV2hlbiBtb2RpZnlpbmcgZXhpc3RpbmcgbW9kZWxzLCBhZGQgdGhlIHJlcXVpc2l0ZSBjb252ZXJzaW9uIGZ1bmN0aW9ucyBoZXJlLCB0aGVuIHVzZSB0aGVtXG4vLyBpbiB0aGUgVmVyc2lvbkNvbnZlcnRlckZhY3RvcnkgaW1wbGVtZW50YXRpb24uIEltcG9ydCBvbGQgdmVyc2lvbnMgYXMgeW91IHdvdWxkIGFueSBvdGhlciBtb2R1bGVcblxuLy8gMCA8LT4gVHJhbnNsYXRpb25zXG4vLyBVbmNvbW1lbnQgdGhpcyBsaW5lIHRvIGltcG9ydCBmcm9tIHRoZSBWMCBkZWZpbml0aW9uIG9mIHRoZSBBUElcbi8vIGltcG9ydCAqIGFzIFYwIGZyb20gJ0B0YWJsZWF1LWFwaS1pbnRlcm5hbC1jb250cmFjdC1qc192MCc7XG5cbi8vIDEgPC0+IDIgVHJhbnNsYXRpb25zXG4vLyBVbmNvbW1lbnQgdGhpcyBsaW5lIHRvIGltcG9ydCBmcm9tIHRoZSBWMSBkZWZpbml0aW9uIG9mIHRoZSBBUElcbi8vIGltcG9ydCAqIGFzIFYxIGZyb20gJ0B0YWJsZWF1LWFwaS1pbnRlcm5hbC1jb250cmFjdC1qc192MSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBEb3duZ3JhZGVWMldvcmtzaGVldE5hbWVzKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKTogRXhlY3V0ZVJlc3BvbnNlIHtcblxuICAvLyBGaXggdGhlIGRhc2hib2FyZCBmcmllbmRseSBuYW1lIGlzc3VlLiBUaGUgc3RydWN0dXJlcyBhcmUgY29tcGF0aWJsZSxcbiAgLy8gc28gd2Ugc3RpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCByZXBseSwgYnV0IHdlIGNvcHkgdGhlIFNoZWV0SW5mby5uYW1lXG4gIC8vIGludG8gdGhlIERhc2hib2FyZFpvbmUubmFtZSwgd2hlcmUgdjEgd2FudHMgdG8gZmluZCBpdC5cblxuICBsZXQgYm9vdHN0cmFwSW5mbyA9IGV4ZWN1dGVSZXNwb25zZS5yZXN1bHQgYXMgRXh0ZW5zaW9uQm9vdHN0cmFwSW5mbztcbiAgaWYgKGJvb3RzdHJhcEluZm8uZXh0ZW5zaW9uRGFzaGJvYXJkSW5mbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYm9vdHN0cmFwSW5mby5leHRlbnNpb25EYXNoYm9hcmRJbmZvLnpvbmVzLmZvckVhY2goem9uZSA9PiB7XG4gICAgICBpZiAoem9uZS5zaGVldEluZm8pIHtcbiAgICAgICAgem9uZS5uYW1lID0gem9uZS5zaGVldEluZm8ubmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBleGVjdXRlUmVzcG9uc2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL3ZlcnNpb25pbmcvVmVyc2lvblRyYW5zbGF0aW9ucy50cyIsImltcG9ydCB7IE1ham9yTWlub3JUcmFuc2xhdG9ycywgR2V0TWF4aW11bU1pbm9ySW5kZXgsIFZlcnNpb25FcXVhbFRvIH0gZnJvbSAnLi4vVmVyc2lvbkNvbnZlcnRlckZhY3RvcnknO1xuaW1wb3J0IHsgRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9uc0V4dGVybmFsIGZyb20gJy4vRXh0ZXJuYWxWZXJzaW9uVHJhbnNsYXRpb25zJztcbmltcG9ydCB7IFZlcnNpb25OdW1iZXIgfSBmcm9tICcuLi8uLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgRXh0ZXJuYWxJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0V4dGVybmFsSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4dGVybmFsU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyIH0gZnJvbSAnLi9FeHRlcm5hbFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlcic7XG5pbXBvcnQgeyBVcGdyYWRlRGF0YVRhYmxlVHlwZXMgfSBmcm9tICcuL0V4dGVybmFsVmVyc2lvblRyYW5zbGF0aW9ucyc7XG5cblxuLy8gQSBtYXBwaW5nIGZyb20gdGhlIGN1cnJlbnQgY2xpZW50IHZlcnNpb24gb2YgaW50ZXJuYWwtY29udHJhY3QgdG8gYW4gb2xkZXIgcGxhdGZvcm0gdmVyc2lvbiBvZiB0aGUgY29udHJhY3QuXG4vLyBFYWNoIHZlcnNpb24gYnVtcCBjYW4gaGF2ZSBhbiBhcnJheSBvZiB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBpbiBvcmRlci5cbi8vIFRoZXNlIHRyYW5zbGF0aW9ucyBoYW5kbGUgZG93bmdyYWRlRXhlY3V0ZUNhbGwgYW5kIHVwZ3JhZGVFeGVjdXRlUmV0dXJuIGFuZCBhcmUgbWVhbnQgdG8gYmUgY2FsbGVkIG9uIHRoZVxuLy8gY2xpZW50L2V4dGVybmFsIHNpZGUuXG4vLyBXaGVuIHVwZGF0aW5nIHRoZSBtYWpvciBvciBtaW5vciB2ZXJzaW9uIG9mIG91ciBpbnRlcm5hbC1jb250cmFjdCwgeW91IHdpbGwgbmVlZCB0byB1cGRhdGUgdGhlc2UgZGF0YSBzdHJ1Y3R1cmVzLlxuLy8gKiBJZiB0aGVyZSBhcmUgdHJhbnNsYXRpb25zIHRvIGFkZCwgYWRkIHRoZW0gdG8gdGhlIHZlcnNpb24gdG8gJ3VwZ3JhZGUgZnJvbScgb3IgJ2Rvd25ncmFkZSB0bycuXG5leHBvcnQgY29uc3QgRXhlY3V0ZU1pbm9yRG93bmdyYWRlQ2FsbEV4dGVybmFsOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zRXh0ZXJuYWwuRG93bmdyYWRlRXhlY3V0ZUNhbGw+ID0ge1xuICAxOiB7XG4gICAgOTogW10gICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBwdXQgZG93bmdyYWRlcyBmcm9tIDEuMTAgdG8gMS45IGluIHRoZSBbMV1bOV0gYnVja2V0XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBFeGVjdXRlTWlub3JVcGdyYWRlUmV0dXJuRXh0ZXJuYWw6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnNFeHRlcm5hbC5VcGdyYWRlRXhlY3V0ZVJldHVybj4gPSB7XG4gIDE6IHtcbiAgICA5OiBbVXBncmFkZURhdGFUYWJsZVR5cGVzXSAgLy8gTm90ZSB0aGF0IHdlIHB1dCB1cGdyYWRlcyBmcm9tIDEuOSB0byAxLjEwIGluIHRoZSBbMV1bOV0gYnVja2V0XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBFeGVjdXRlTWlub3JVcGdyYWRlTm90aWZpY2F0aW9uOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zRXh0ZXJuYWwuVXBncmFkZU5vdGlmaWNhdGlvbj4gPSB7XG4gIDE6IHtcbiAgICA5OiBbXSAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHdlIHB1dCB1cGdyYWRlcyBmcm9tIDEuOSB0byAxLjEwIGluIHRoZSBbMV1bOV0gYnVja2V0XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBFeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB3aGljaCBoYXMgdGhlIGFiaWxpdHkgdG8gdXBncmFkZSBhbmQgZG93bmdyYWRlXG4gKiB0aGUgY29udHJhY3QgYmV0d2VlbiB0aGUgdHdvIHZlcnNpb25zIHdoaWNoIGFyZSBzcGVjaWZpZWQuIElmIGV4dGVybmFsTWFqb3JWZXJzaW9uIGlzIGxlc3MgdGhhblxuICogcGxhdGZvcm1NYWpvclZlcnNpb24sIGFuIEV4dGVybmFsSWRlbnRpdHlWZXJzaW9uQ29udmVydGVyIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBIYW5kbGVzIHVwZ3JhZGUvZG93bmdyYWRlIGZvciBib3RoIG1ham9yIGFuZCBtaW5vciB1cGRhdGVzLlxuICpcbiAqIEBwYXJhbSBleHRlcm5hbFZlcnNpb24gVmVyc2lvbk51bWJlciBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBleHRlcm5hbCBtb2R1bGUgaXMgdXNpbmdcbiAqIEBwYXJhbSBwbGF0Zm9ybVZlcnNpb24gVmVyc2lvbk51bWJlciBvZiB0aGUgaW50ZXJuYWwgYXBpIHdoaWNoIHRoZSBwbGF0Zm9ybSBpcyB1c2luZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlRXh0ZXJuYWxDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlcihcbiAgZXh0ZXJuYWxWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICBwbGF0Zm9ybVZlcnNpb246IFZlcnNpb25OdW1iZXIpOiBFeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlciB7XG5cbiAgcmV0dXJuIENyZWF0ZUV4dGVybmFsQ29tcGF0aWJsZVZlcnNpb25Db252ZXJ0ZXJXaXRoVHJhbnNsYXRvcnMoXG4gICAgZXh0ZXJuYWxWZXJzaW9uLFxuICAgIHBsYXRmb3JtVmVyc2lvbixcbiAgICBFeGVjdXRlTWlub3JEb3duZ3JhZGVDYWxsRXh0ZXJuYWwsXG4gICAgRXhlY3V0ZU1pbm9yVXBncmFkZVJldHVybkV4dGVybmFsLFxuICAgIEV4ZWN1dGVNaW5vclVwZ3JhZGVOb3RpZmljYXRpb25cbiAgKTtcbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBDcmVhdGVFeHRlcm5hbENvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyV2l0aFRyYW5zbGF0b3JzLlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgdXBncmFkZSwgZG93bmdyYWRlIGFycmF5cyBzbyB0aGF0IGFsbCB0aGUgbG9naWMgY2FuIGJlIHRlc3RlZC5cbiAqXG4gKiBAcGFyYW0gZXh0ZXJuYWxWZXJzaW9uIFZlcnNpb25OdW1iZXIgb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IHdoaWNoIHRoZSBleHRlcm5hbCBtb2R1bGUgaXMgdXNpbmdcbiAqIEBwYXJhbSBwbGF0Zm9ybVZlcnNpb24gVmVyc2lvbk51bWJlciBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3Qgd2hpY2ggdGhlIHBsYXRmb3JtIGlzIHVzaW5nXG4gKiBAcGFyYW0gdXBncmFkZXMgTWFqb3JNaW5vclRyYW5zbGF0b3JzIGZvciByZXNwb25zZSB1cGdyYWRlc1xuICogQHBhcmFtIGRvd25ncmFkZXMgTWFqb3JNaW5vclRyYW5zbGF0b3JzIGZvciBleGVjdXRlIGNhbGwgZG93bmdyYWRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlRXh0ZXJuYWxDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlcldpdGhUcmFuc2xhdG9ycyhcbiAgZXh0ZXJuYWxWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICBwbGF0Zm9ybVZlcnNpb246IFZlcnNpb25OdW1iZXIsXG4gIGRvd25ncmFkZXM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUcmFuc2xhdGlvbnNFeHRlcm5hbC5Eb3duZ3JhZGVFeGVjdXRlQ2FsbD4sXG4gIHVwZ3JhZGVzOiBNYWpvck1pbm9yVHJhbnNsYXRvcnM8VHJhbnNsYXRpb25zRXh0ZXJuYWwuVXBncmFkZUV4ZWN1dGVSZXR1cm4+LFxuICB1cGdyYWRlTm90aWZpY2F0aW9uczogTWFqb3JNaW5vclRyYW5zbGF0b3JzPFRyYW5zbGF0aW9uc0V4dGVybmFsLlVwZ3JhZGVOb3RpZmljYXRpb24+KVxuICA6IEV4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICBjb25zdCBleHRlcm5hbE1ham9yVmVyc2lvbjogbnVtYmVyID0gZXh0ZXJuYWxWZXJzaW9uLm1ham9yO1xuICBjb25zdCBwbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyID0gcGxhdGZvcm1WZXJzaW9uLm1ham9yO1xuICBjb25zdCBwbGF0Zm9ybU1pbm9yVmVyc2lvbjogbnVtYmVyID0gcGxhdGZvcm1WZXJzaW9uLm1pbm9yO1xuXG4gIC8vIFRoaXMgY2hlY2sgaXMgcHJlc2VudCBpbiBWZXJzaW9uQ29udmVydGVyRmFjdG9yeS4gV2UgdGhyb3cgdGhlIHNhbWUgZXJyb3IgaGVyZSBhcyB3ZWxsLlxuICAvLyBIZW5jZSB3ZSBvbmx5IG5lZWQgdG8gY2hlY2sgdGhlIG1pbm9yIHZlcnNpb25zIGZvciB0cmFuc2xhdGlvbnMuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA+IHBsYXRmb3JtTWFqb3JWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHRlcm5hbCB2ZXJzaW9uIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHBsYXRmb3JtIHZlcnNpb24uXG4gICAgZXh0ZXJuYWxNYWpvclZlcnNpb249JHtleHRlcm5hbE1ham9yVmVyc2lvbn0gcGxhdGZvcm1NYWpvclZlcnNpb249JHtwbGF0Zm9ybU1ham9yVmVyc2lvbn1gKTtcbiAgfVxuXG4gIGlmIChleHRlcm5hbE1ham9yVmVyc2lvbiA8IHBsYXRmb3JtTWFqb3JWZXJzaW9uIHx8IFZlcnNpb25FcXVhbFRvKGV4dGVybmFsVmVyc2lvbiwgcGxhdGZvcm1WZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgRXh0ZXJuYWxJZGVudGl0eVZlcnNpb25Db252ZXJ0ZXIoKTtcbiAgfVxuXG4gIC8vIFdhbGsgdGhlIHNwYW4gYmV0d2VlbiB0aGUgdmVyc2lvbnMgd2UgaGF2ZSBoZXJlIGFuZCBjb2xsZWN0IHRoZSB1cGdyYWRlIGFuZCBkb3duZ3JhZGVzIG5lY2Vzc2FyeVxuICBsZXQgbmVlZGVkRXhlY3V0ZUNhbGxEb3duZ3JhZGU6IEFycmF5PFRyYW5zbGF0aW9uc0V4dGVybmFsLkRvd25ncmFkZUV4ZWN1dGVDYWxsPiA9XG4gICAgR2V0TmVlZGVkRXh0ZXJuYWxUcmFuc2xhdGlvbnMocGxhdGZvcm1NYWpvclZlcnNpb24sIHBsYXRmb3JtTWlub3JWZXJzaW9uLCBkb3duZ3JhZGVzKTtcblxuICBsZXQgbmVlZGVkRXhlY3V0ZVJldHVyblVwZ3JhZGVzOiBBcnJheTxUcmFuc2xhdGlvbnNFeHRlcm5hbC5VcGdyYWRlRXhlY3V0ZVJldHVybj4gPVxuICAgIEdldE5lZWRlZEV4dGVybmFsVHJhbnNsYXRpb25zKHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBwbGF0Zm9ybU1pbm9yVmVyc2lvbiwgdXBncmFkZXMpO1xuXG4gIGxldCBuZWVkZWROb3RpZmljYXRpb25VcGdyYWRlczogQXJyYXk8VHJhbnNsYXRpb25zRXh0ZXJuYWwuVXBncmFkZU5vdGlmaWNhdGlvbj4gPVxuICAgIEdldE5lZWRlZEV4dGVybmFsVHJhbnNsYXRpb25zKHBsYXRmb3JtTWFqb3JWZXJzaW9uLCBwbGF0Zm9ybU1pbm9yVmVyc2lvbiwgdXBncmFkZU5vdGlmaWNhdGlvbnMpO1xuXG4gIC8vIFJldmVyc2UgdGhlIGRvd25ncmFkZSBjYWxscywgc28gdGhhdCB3ZSBzdGFydCB0aGUgZG93bmdyYWRlIGZyb20gdGhlIGV4dGVybmFsIHZlcnNpb24gdG8gdGhlIHBsYXRmb3JtIHZlcnNpb25cbiAgbmVlZGVkRXhlY3V0ZUNhbGxEb3duZ3JhZGUucmV2ZXJzZSgpO1xuICByZXR1cm4gbmV3IEV4dGVybmFsU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyKFxuICAgIGV4dGVybmFsVmVyc2lvbiwgcGxhdGZvcm1WZXJzaW9uLCBuZWVkZWRFeGVjdXRlQ2FsbERvd25ncmFkZSwgbmVlZGVkRXhlY3V0ZVJldHVyblVwZ3JhZGVzLCBuZWVkZWROb3RpZmljYXRpb25VcGdyYWRlcyk7XG59XG5cbmZ1bmN0aW9uIEdldE5lZWRlZEV4dGVybmFsVHJhbnNsYXRpb25zPFQ+KFxuICBwbGF0Zm9ybU1ham9yVmVyc2lvbjogbnVtYmVyLFxuICBwbGF0Zm9ybU1pbm9yVmVyc2lvbjogbnVtYmVyLFxuICBtYWpvck1pbm9yVHJhbnNsYXRvcnM6IE1ham9yTWlub3JUcmFuc2xhdG9yczxUPik6IEFycmF5PFQ+IHtcblxuICBsZXQgbmVlZGVkVHJhbnNsYXRpb25zOiBBcnJheTxUPiA9IFtdO1xuXG4gIGlmIChwbGF0Zm9ybU1ham9yVmVyc2lvbiBpbiBtYWpvck1pbm9yVHJhbnNsYXRvcnMpIHtcbiAgICBsZXQgc3RhcnQgPSBwbGF0Zm9ybU1pbm9yVmVyc2lvbjtcbiAgICBsZXQgbWF4aW11bU1pbm9yVmVyc2lvbiA9IEdldE1heGltdW1NaW5vckluZGV4KE9iamVjdC5rZXlzKG1ham9yTWlub3JUcmFuc2xhdG9yc1twbGF0Zm9ybU1ham9yVmVyc2lvbl0pKTtcbiAgICBmb3IgKGxldCBtaW5vciA9IHN0YXJ0OyBtaW5vciA8PSBtYXhpbXVtTWlub3JWZXJzaW9uOyBtaW5vcisrKSB7XG4gICAgICBpZiAobWlub3IgaW4gbWFqb3JNaW5vclRyYW5zbGF0b3JzW3BsYXRmb3JtTWFqb3JWZXJzaW9uXSkge1xuICAgICAgICBuZWVkZWRUcmFuc2xhdGlvbnMucHVzaCguLi5tYWpvck1pbm9yVHJhbnNsYXRvcnNbcGxhdGZvcm1NYWpvclZlcnNpb25dW21pbm9yXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5lZWRlZFRyYW5zbGF0aW9ucztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9leHRlcm5hbC9FeHRlcm5hbFZlcnNpb25Db252ZXJ0ZXJGYWN0b3J5LnRzIiwiaW1wb3J0IHsgRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIgfSBmcm9tICcuL0V4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyJztcbmltcG9ydCB7IEV4ZWN1dGVSZXNwb25zZSwgRXhlY3V0ZVBhcmFtZXRlcnMsIE5vdGlmaWNhdGlvbiwgVmVyYklkLCBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIFRyYW5zbGF0aW9ucyBmcm9tICcuL0V4dGVybmFsVmVyc2lvblRyYW5zbGF0aW9ucyc7XG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuLyoqXG4gKiBUaGUgdmVyc2lvbiBjb252ZXJ0ZXIgaXMgZGVzaWduZWQgdG8gYWxsb3cgdGhlIHBsYXRmb3JtIGFuZCBleHRlcm5hbCBtb2R1bGVzXG4gKiB0byBzZWVtbGVzc2x5IGNvbW11bmljYXRlIG92ZXIgdHdvIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiB0aGUgaW50ZXJuYWwgQVBJLiBUaGlzIGNvbnZlcnRlclxuICogc3VwcG9ydHMgZXh0ZXJuYWwncyB2ZXJzaW9uKG1pbm9yKSA+PSBwbGF0Zm9ybSdzIHZlcnNpb24obWlub3IpLiBXaGVuIGV4ZWN1dGluZ1xuICogY29tbWFuZHMsIGl0IGlzIHVzZWQgdG8gZG93bmdyYWRlIHRoZSBleHRlcm5hbCByZXByZXNlbnRhdGlvbiB0byB3aGF0IHBsYXRmb3JtIGtub3dzIG9uIHRoZSB3YXkgaW5cbiAqIGFuZCB1cGdyYWRlIHRoZSByZXByZXNlbnRhdGlvbnMgb24gdGhlIHdheSBvdXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlciBpbXBsZW1lbnRzIEV4dGVybmFsQ29udHJhY3RWZXJzaW9uQ29udmVydGVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgU3RhY2tpbmdWZXJzaW9uQ29udmVydGVyXG4gICAqXG4gICAqIEBwYXJhbSBfZXh0ZXJuYWxWZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBpbnRlcm5hbCBjb250cmFjdCBhcGktZXh0ZXJuYWwtanMgaXMgdXNpbmdcbiAgICogQHBhcmFtIF9wbGF0Zm9ybVZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IHRoZSBhcGktcGxhdGZvcm0tanMgaXMgdXNpbmdcbiAgICogQHBhcmFtIF9kb3duZ3JhZGVFeGVjdXRlQ2FsbFRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgdGhlIHRyYW5zbGF0aW9ucyB0byBwZXJmb3JtIHdoZW4gZG93bmdyYWRpbmcgY21kIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIF91cGdyYWRlRXhlY3V0ZVJldHVyblRyYW5zbGF0aW9ucyBPcmRlcmVkIGxpc3Qgb2YgdXBncmFkZSB0cmFuc2xhdGlvbnMgdG8gcGVyZm9ybSBhZnRlciBhIGNtZCBpcyBleGVjdXRlZFxuICAgKiBAcGFyYW0gX3VwZ3JhZGVOb3RpZmljYXRpb25UcmFuc2xhdGlvbnMgT3JkZXJlZCBsaXN0IG9mIHVwZ3JhZGUgbm90ZmljYXRpb25zIHRvIHBlcmZvcm0gb24gZXZlbnRzXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZXh0ZXJuYWxWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLFxuICAgIHByaXZhdGUgX3BsYXRmb3JtVmVyc2lvbjogVmVyc2lvbk51bWJlcixcbiAgICBwcml2YXRlIF9kb3duZ3JhZGVFeGVjdXRlQ2FsbFRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLkRvd25ncmFkZUV4ZWN1dGVDYWxsPixcbiAgICBwcml2YXRlIF91cGdyYWRlRXhlY3V0ZVJldHVyblRyYW5zbGF0aW9uczogQXJyYXk8VHJhbnNsYXRpb25zLlVwZ3JhZGVFeGVjdXRlUmV0dXJuPixcbiAgICBwcml2YXRlIF91cGdyYWRlTm90aWZpY2F0aW9uVHJhbnNsYXRpb25zOiBBcnJheTxUcmFuc2xhdGlvbnMuVXBncmFkZU5vdGlmaWNhdGlvbj4pIHtcblxuXG4gICAgaWYgKHRoaXMuX2V4dGVybmFsVmVyc2lvbi5tYWpvciA+IHRoaXMuX3BsYXRmb3JtVmVyc2lvbi5tYWpvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29udmVydCBiZXR3ZWVuIGV4dGVybmFsIHZlcnNpb24gJHt0aGlzLl9leHRlcm5hbFZlcnNpb24ubWFqb3J9XG4gICAgICBhbmQgJHt0aGlzLl9wbGF0Zm9ybVZlcnNpb24ubWFqb3J9YCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRvd25ncmFkZUV4ZWN1dGVDYWxsKHZlcmI6IGFueSwgcGFyYW1ldGVyczogYW55KTogeyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzOyB9IHtcbiAgICAvLyBQZXJmb3JtIHRoZSBkb3duZ3JhZGUgb2YgdGhlIHZlcmIgYW5kIHBhcmFtZXRlcnMgdG8gdGhlIGxldmVsIHRoYXQgcGxhdGZvcm0gaXMgdXNpbmdcbiAgICBsZXQgZG93bmdyYWRlZCA9IHsgdmVyYjogdmVyYiwgcGFyYW1ldGVyczogcGFyYW1ldGVycyB9O1xuICAgIGZvciAoY29uc3QgZG93bmdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fZG93bmdyYWRlRXhlY3V0ZUNhbGxUcmFuc2xhdGlvbnMpIHtcbiAgICAgIGRvd25ncmFkZWQgPSBkb3duZ3JhZGVUcmFuc2xhdGlvbihkb3duZ3JhZGVkLnZlcmIsIGRvd25ncmFkZWQucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvd25ncmFkZWQ7XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZUV4ZWN1dGVSZXR1cm4oZXhlY3V0ZVJlc3BvbnNlOiBFeGVjdXRlUmVzcG9uc2UpOiBFeGVjdXRlUmVzcG9uc2Uge1xuICAgIC8vIFBlcmZvcm0gdGhlIHVwZ3JhZGUgb2YgdGhlIHJlc3BvbnNlIHRvIHdoYXQgdGhlIGV4dGVybmFsIG1vZHVsZSBpcyBleHBlY3RpbmdcbiAgICBsZXQgdXBncmFkZWQgPSBleGVjdXRlUmVzcG9uc2U7XG4gICAgZm9yIChjb25zdCB1cGdyYWRlVHJhbnNsYXRpb24gb2YgdGhpcy5fdXBncmFkZUV4ZWN1dGVSZXR1cm5UcmFuc2xhdGlvbnMpIHtcbiAgICAgIHVwZ3JhZGVkID0gdXBncmFkZVRyYW5zbGF0aW9uKHVwZ3JhZGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBncmFkZWQ7XG4gIH1cblxuICBwdWJsaWMgdXBncmFkZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IE5vdGlmaWNhdGlvbiB7XG4gICAgLy8gUGVyZm9ybSB0aGUgdXBncmFkZSBvZiBub3RpZmljYXRpb24gdG8gd2hhdCB0aGUgZXh0ZXJuYWwgbW9kdWxlIGlzIGV4cGVjdGluZ1xuICAgIGxldCB1cGdyYWRlZCA9IG5vdGlmaWNhdGlvbjtcbiAgICBmb3IgKGNvbnN0IHVwZ3JhZGVOb3RpZmljYXRpb24gb2YgdGhpcy5fdXBncmFkZU5vdGlmaWNhdGlvblRyYW5zbGF0aW9ucykge1xuICAgICAgdXBncmFkZWQgPSB1cGdyYWRlTm90aWZpY2F0aW9uKHVwZ3JhZGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBncmFkZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvdmVyc2lvbmluZy9leHRlcm5hbC9FeHRlcm5hbFN0YWNraW5nVmVyc2lvbkNvbnZlcnRlci50cyIsImltcG9ydCB7XG4gIERhdGFUYWJsZSxcbiAgRGF0YVR5cGUsXG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBFeGVjdXRlUmVzcG9uc2UsXG4gIE5vdGlmaWNhdGlvbixcbiAgU2VsZWN0ZWRNYXJrc1RhYmxlLFxuICBVbmRlcmx5aW5nRGF0YVRhYmxlLFxuICBWZXJiSWRcbn0gZnJvbSAnLi4vLi4vSnNBcGlJbnRlcm5hbENvbnRyYWN0JztcblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5cbi8qKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHdlIHJlY2VpdmUgbmV3ZXIgdmVyc2lvbiBhbmQgcGFyYW1ldGVycyBmcm9tIHRoZSBleHRlcm5hbCBiZWZvcmUgd2Ugc2VuZCBpdCB0byBwbGF0Zm9ybSAqL1xuZXhwb3J0IHR5cGUgRG93bmdyYWRlRXhlY3V0ZUNhbGwgPVxuICAodmVyYjogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycykgPT4geyB2ZXJiOiBWZXJiSWQ7IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzIH07XG5cbi8qKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHdlIHJlY2VpdmUgYSByZXNwb25zZSBiYWNrIGZyb20gcGxhdGZvcm0gYW5kIHdlIG5lZWQgdG8gdXBncmFkZSBpdCB0byBleHRlcm5hbCdzIHZlcnNpb24gKi9cbmV4cG9ydCB0eXBlIFVwZ3JhZGVFeGVjdXRlUmV0dXJuID1cbiAgKGV4ZWN1dGVSZXNwb25zZTogRXhlY3V0ZVJlc3BvbnNlKSA9PiBFeGVjdXRlUmVzcG9uc2U7XG5cbi8qKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHdlIHJlY2VpdmUgYSBub3RpZmljYXRpb24gZnJvbSBwbGF0Zm9ybSBhbmQgd2UgbmVlZCB0byB1cGdyYWRlIGl0IHRvIGV4dGVybmFsJ3MgdmVyc2lvbiAqL1xuZXhwb3J0IHR5cGUgVXBncmFkZU5vdGlmaWNhdGlvbiA9XG4gIChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbikgPT4gTm90aWZpY2F0aW9uO1xuXG4vLyAxLjIgLT4gMS4wIFRyYW5zbGF0aW9uc1xuLy8gVW5jb21tZW50IHRoaXMgbGluZSB0byBpbXBvcnQgZnJvbSB0aGUgVjEgZGVmaW5pdGlvbiBvZiB0aGUgQVBJXG4vLyBpbXBvcnQgKiBhcyBWMSBmcm9tICdAdGFibGVhdS1hcGktaW50ZXJuYWwtY29udHJhY3QtanNfdjEnO1xuXG4vKipcbiAqIFByaW9yIHRvIDIwMTkuMiAoaW50ZXJuYWwtY29udHJhY3QgdjEuOSksIERhdGFWYWx1ZS52YWx1ZSB3ZXJlIGFsbCBzdHJpbmdzLlxuICogR28gdGhyb3VnaCBhbGwgRGF0YVZhbHVlIG9iamVjdHMuIElmIHdlIGhhdmUgYSBzdHJpbmcsIGJ1dCB0aGUgdHlwZSBzaG91bGQgbm90IGJlIGEgc3RyaW5nLFxuICogY29udmVydCBpdCB0byB0aGUgY29ycmVjdCB0eXBlLiBUaGUgdHlwZSBvZiBEYXRhVmFsdWUudmFsdWUgaXMgJ2FueScgaW4gdGhlIGNvbnRyYWN0LCBzb1xuICogdGhpcyBjaGFuZ2UgZG9lc24ndCBuZWVkIGFueSB1cGRhdGVzIHRvIGNsYXNzZXMgb3IgdHlwZXMuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIFVwZ3JhZGVEYXRhVGFibGVUeXBlcyhleGVjdXRlUmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSk6IEV4ZWN1dGVSZXNwb25zZSB7XG4gIGlmICghZXhlY3V0ZVJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbiAgfVxuXG4gIGxldCBvbGRVbmRlcmx5aW5nRGF0YVRhYmxlID0gZXhlY3V0ZVJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICBpZiAob2xkVW5kZXJseWluZ0RhdGFUYWJsZS5kYXRhICE9PSB1bmRlZmluZWQgJiYgb2xkVW5kZXJseWluZ0RhdGFUYWJsZS5pc1N1bW1hcnkgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnZlcnREYXRhVmFsdWVzKG9sZFVuZGVybHlpbmdEYXRhVGFibGUuZGF0YSk7XG4gICAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbiAgfVxuXG4gIGxldCBvbGRTZWxlY3RlZE1hcmtzVGFibGUgPSBleGVjdXRlUmVzcG9uc2UucmVzdWx0IGFzIFNlbGVjdGVkTWFya3NUYWJsZTtcbiAgaWYgKG9sZFNlbGVjdGVkTWFya3NUYWJsZS5kYXRhICE9PSB1bmRlZmluZWQgJiYgQXJyYXkuaXNBcnJheShvbGRTZWxlY3RlZE1hcmtzVGFibGUuZGF0YSkpIHtcbiAgICBvbGRTZWxlY3RlZE1hcmtzVGFibGUuZGF0YS5mb3JFYWNoKG1hcmtzVGFibGUgPT4ge1xuICAgICAgY29udmVydERhdGFWYWx1ZXMobWFya3NUYWJsZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV4ZWN1dGVSZXNwb25zZTtcbiAgfVxuXG4gIHJldHVybiBleGVjdXRlUmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRhVmFsdWVzKHRhYmxlOiBEYXRhVGFibGUpOiB2b2lkIHtcbiAgLy8gZGF0YVRhYmxlIGlzIGEgdHdvLWRpbWVuc2lvbmFsIGFycmF5IG9mIGRhdGEuIEZpcnN0IGluZGV4IGlzIHRoZSByb3csIHNlY29uZCBpcyB0aGUgY29sdW1uLlxuICBpZiAodGFibGUgPT09IHVuZGVmaW5lZCB8fCB0YWJsZS5kYXRhVGFibGUgPT09IHVuZGVmaW5lZCB8fCAhQXJyYXkuaXNBcnJheSh0YWJsZS5kYXRhVGFibGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFibGUuZGF0YVRhYmxlLmZvckVhY2gocm93ID0+IHtcbiAgICByb3cuZm9yRWFjaCgoZGF0YVZhbHVlLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZGF0YVZhbHVlLnZhbHVlO1xuICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGFWYWx1ZS52YWx1ZSA9IGNvbnZlcnRUb1R5cGUodmFsdWUsIHRhYmxlLmhlYWRlcnNbY29sdW1uSW5kZXhdLmRhdGFUeXBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1R5cGUodmFsdWVBc1N0cmluZzogc3RyaW5nLCB0eXBlOiBEYXRhVHlwZSk6IGFueSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRGF0YVR5cGUuQm9vbDpcbiAgICAgIHJldHVybiBpc1NwZWNpYWwodmFsdWVBc1N0cmluZykgPyB2YWx1ZUFzU3RyaW5nIDogdmFsdWVBc1N0cmluZy50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG5cbiAgICBjYXNlIERhdGFUeXBlLkludDpcbiAgICBjYXNlIERhdGFUeXBlLkZsb2F0OlxuICAgICAgcmV0dXJuIGlzU3BlY2lhbCh2YWx1ZUFzU3RyaW5nKSA/IHZhbHVlQXNTdHJpbmcgOiBOdW1iZXIodmFsdWVBc1N0cmluZyk7XG5cbiAgICBjYXNlIERhdGFUeXBlLkRhdGU6XG4gICAgY2FzZSBEYXRhVHlwZS5EYXRlVGltZTpcbiAgICAvLyBEaXNjcmV0ZSBkYXRlcyBhcmUgdHlwZSBEYXRhVHlwZS5JbnQsIGFuZCBoYW5kbGVkIGFib3ZlLlxuICAgIC8vIENvbnRpbnVvdXMgZGF0ZXMgYXJlIGp1c3Qgc3RyaW5ncyBpbiB0aGlzIGZvcm1hdDogXCJZWVlZLU1NLUREIFtISDpNTTpTU11cIlxuICAgIC8vIGZhbGx0aHJvdWdoLi4uXG4gICAgY2FzZSBEYXRhVHlwZS5TcGF0aWFsOlxuICAgIGNhc2UgRGF0YVR5cGUuU3RyaW5nOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdmFsdWVBc1N0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWVBc1N0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIFNwZWNpYWwgdmFsdWVzIGNvbWUgdG8gdXMgYXMgJyVudWxsJScsICclYWxsJScsICcld2lsZGNhcmQlJywgJyVtaXNzaW5nJScuLi5cbiAgLy8gKFNlZSBEYXRhVmFsdWVGb3JtYXR0ZXIuY3BwKVxuXG4gIGlmICh2YWx1ZUFzU3RyaW5nLmxlbmd0aCA+IDAgJiYgdmFsdWVBc1N0cmluZ1swXSA9PT0gJyUnICYmIHZhbHVlQXNTdHJpbmdbdmFsdWVBc1N0cmluZy5sZW5ndGggLSAxXSA9PT0gJyUnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy92ZXJzaW9uaW5nL2V4dGVybmFsL0V4dGVybmFsVmVyc2lvblRyYW5zbGF0aW9ucy50cyIsImltcG9ydCAqIGFzIGd1aWQgZnJvbSAnZ3VpZCc7XG5cbmltcG9ydCB7IENyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UgfSBmcm9tICcuL0Nyb3NzRnJhbWVQcmVwYXJlZE1lc3NhZ2UnO1xuaW1wb3J0IHtcbiAgQ29tbWFuZE1lc3NhZ2UsXG4gIENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsXG4gIEluaXRpYWxpemVNZXNzYWdlLFxuICBNZXNzYWdlLFxuICBNZXNzYWdlVHlwZSxcbiAgTm90aWZpY2F0aW9uTWVzc2FnZSxcbn0gZnJvbSAnLi9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzJztcbmltcG9ydCB7IE1lc3NlbmdlciB9IGZyb20gJy4vaW50ZXJmYWNlL01lc3Nlbmdlcic7XG5pbXBvcnQgeyBQcmVwYXJlZE1lc3NhZ2UgfSBmcm9tICcuL2ludGVyZmFjZS9QcmVwYXJlZE1lc3NhZ2UnO1xuaW1wb3J0IHtcbiAgaXNDb21tYW5kTWVzc2FnZSxcbiAgaXNDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBpc0luaXRNZXNzYWdlLFxuICBpc01lc3NhZ2UsXG4gIGlzTm90aWZpY2F0aW9uTWVzc2FnZSxcbn0gZnJvbSAnLi9NZXNzYWdlVHlwZUNoZWNrcyc7XG5pbXBvcnQgeyBWZXJzaW9uTnVtYmVyLCBWZXJiSWQsIEV4ZWN1dGVQYXJhbWV0ZXJzLCBNb2RlbCwgTm90aWZpY2F0aW9uSWQgfSBmcm9tICcuLi9Kc0FwaUludGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25PcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlL0luaXRpYWxpemF0aW9uT3B0aW9ucyc7XG5cbi8qKlxuICogVGhlIENyb3NzRnJhbWVNZXNzZW5nZXIgaXMgdGhlIHByaW1hcnkgZXhwb3J0IGZyb20gdGhlIGFwaS1tZXNzYWdpbmcgbW9kdWxlLiBBbiBpbnN0YW5jZSBvZlxuICogdGhpcyBjbGFzcyBjYW4gYmUgaW5zdGFudGlhdGVkIG9uIGJvdGggc2lkZXMgb2YgYSBmcmFtZSBib3VuZGFyeSB0byBmYWNpbGl0YXRlIGNvbW11bmljYXRpb25cbiAqIGluIGJvdGggZGlyZWN0aW9ucyBiZXR3ZWVuIHRoZSBmcmFtZXMuIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBib3RoIHRoZSBkaXNwYXRjaGVyIGFuZCB0aGUgbGlzdGVuZXJcbiAqIHBvcnRpb25zLCBidXQgZG9lc24ndCByZXF1aXJlIGNhbGxlcnMgdG8gY2FyZSBhYm91dCBib3RoLlxuICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NGcmFtZU1lc3NlbmdlciBpbXBsZW1lbnRzIE1lc3NlbmdlciB7XG4gIHByaXZhdGUgdW5yZWdpc3RlckZ1bmN0aW9uOiB1bmRlZmluZWQgfCAoKCkgPT4gdm9pZCk7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogSW5pdGlhbGl6ZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBjb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcjogdW5kZWZpbmVkIHwgKChtc2c6IENvbW1hbmRSZXNwb25zZU1lc3NhZ2UsIHNvdXJjZTogV2luZG93KSA9PiB2b2lkKTtcbiAgcHJpdmF0ZSBjb21tYW5kTWVzc2FnZUhhbmRsZXI6IHVuZGVmaW5lZCB8ICgobXNnOiBDb21tYW5kTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuICBwcml2YXRlIG5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyOiB1bmRlZmluZWQgfCAoKG1zZzogTm90aWZpY2F0aW9uTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENyb3NzRnJhbWVNZXNzZW5nZXIuIElmIHlvdSB3b3VsZCBsaWtlIHRvIHVzZSB0aGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBhcyBhIE1lc3NhZ2VMaXN0ZW5lcixcbiAgICogYmUgc3VyZSB0byBjYWxsIFN0YXJ0TGlzdGVuaW5nIGFuZCByZWdpc3RlciBtZXNzYWdlIGhhbmRsZXJzLlxuICAgKiBAcGFyYW0gdGhpc1dpbmRvdyBUaGUgd2luZG93IG9iamVjdCB3aGljaCB0aGUgQ3Jvc3NGcmFtZU1lc3NlbmdlciBsaXZlcy4gQW4gb25NZXNzYWdlIGxpc3RlbmVyIHdpbGwgYmUgYWRkZWQgaGVyZS5cbiAgICogQHBhcmFtIFtvdGhlcldpbmRvd10gT3B0aW9uYWwgb3RoZXJXaW5kb3cgd2hpY2ggbWVzc2FnZXMgd2lsbCBiZSBwb3N0ZWQgdG8uXG4gICAqICAgICAgICAgICAgICAgICAgICAgIElmIGRlZmluZWQsIGluY29taW5nIG1lc3NhZ2VzIG11c3Qgb3JpZ2luYXRlIGZyb20gb3RoZXJXaW5kb3cgdG8gYmUgcGFzc2VkIG9uXG4gICAqIEBwYXJhbSBbb3RoZXJXaW5kb3dPcmlnaW5dIFRoZSB0YXJnZXQgb3JpZ2luIHdoaWNoIG90aGVyV2luZG93IG11c3QgaGF2ZSBpbiBvcmRlciB0byByZWNlaXZlIGRpc3BhdGNoZWQgbWVzc2FnZXMuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgdmFsdWUgd2lsbCBiZSBzZW50IGFzIHRoZSB0YXJnZXRPcmlnaW4gb2YgYSBwb3N0TWVzc2FnZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9wb3N0TWVzc2FnZSlcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoaXNXaW5kb3c6IFdpbmRvdywgcHJpdmF0ZSBvdGhlcldpbmRvdz86IFdpbmRvdywgcHJpdmF0ZSBvdGhlcldpbmRvd09yaWdpbj86IHN0cmluZykge1xuICAgIC8vIE1ha2Ugc3VyZSB0byBjYWxsIFN0YXJ0TGlzdGVuaW5nXG4gIH1cblxuICAvLy8vLyBNZXNzYWdlTGlzdGVuZXIgSW1wbGVtZW50YXRpb25cblxuICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBhcmUgbGlzdGVuaW5nLCBpZiBub3QsIGhvb2sgdXAgYSBtZXNzYWdlIGxpc3RlbmVyXG4gICAgaWYgKCF0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbikge1xuICAgICAgY29uc3QgYm91bmRIYW5kbGVyID0gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50aGlzV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBib3VuZEhhbmRsZXIsIHRydWUpO1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24gPSAoKSA9PiB0aGlzLnRoaXNXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGJvdW5kSGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0b3BMaXN0ZW5pbmcoKTogdm9pZCB7XG4gICAgLy8gU3RvcCBsaXN0ZW5pbmcgaWYgd2UgaGF2ZSBzdGFydGVkIGxpc3RlbmluZ1xuICAgIGlmICh0aGlzLnVucmVnaXN0ZXJGdW5jdGlvbikge1xuICAgICAgdGhpcy51bnJlZ2lzdGVyRnVuY3Rpb24oKTtcbiAgICAgIHRoaXMudW5yZWdpc3RlckZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRJbml0aWFsaXplTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IEluaXRpYWxpemVNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbW1hbmRSZXNwb25zZU1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb21tYW5kTWVzc2FnZUhhbmRsZXIoaGFuZGxlcj86IChtc2c6IENvbW1hbmRNZXNzYWdlLCBzb3VyY2U6IFdpbmRvdykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZE1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXROb3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcihoYW5kbGVyPzogKG1zZzogTm90aWZpY2F0aW9uTWVzc2FnZSwgc291cmNlOiBXaW5kb3cpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIC8vLy8vIE1lc3NhZ2VEaXNwYXRjaGVyIEltcGxlbWVudGF0aW9uXG5cbiAgLyoqXG4gICAqIEBwYXJhbSBhcGlWZXJzaW9uIGFwaS1pbnRlcm5hbC1jb250cmFjdC1qcyB2ZXJzaW9uIChleHBvcnRlZCBpbiBKc0FwaUludGVybmFsQ29ubnRyYWN0KVxuICAgKiBAcGFyYW0gY3Jvc3NGcmFtZVZlcnNpb24gY3Jvc3NmcmFtZSBtZXNzYWdpbmcgdmVyc2lvbiAoZXhwb3J0ZWQgaW4gSnNBcGlJbnRlcm5hbENvbm50cmFjdClcbiAgICogQHBhcmFtIG9wdGlvbnMgYWRkaXRpb25hbCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZCBhdCBpbml0aWFsaXphdGlvbiAoaW5mb3JtYXRpb24gYWJvdXQgdGhlIHZlcnNpb24gb2ZcbiAgICogICAgICAgICAgICAgICAgZXh0ZXJuYWwgYmVpbmcgdXNlZCBmb3IgZXhhbXBsZSlcbiAgICovXG4gIHB1YmxpYyBwcmVwYXJlSW5pdGlhbGl6YXRpb25NZXNzYWdlKFxuICAgIGFwaVZlcnNpb246IFZlcnNpb25OdW1iZXIsIGNyb3NzRnJhbWVWZXJzaW9uOiBWZXJzaW9uTnVtYmVyLCBvcHRpb25zPzogSW5pdGlhbGl6YXRpb25PcHRpb25zKTogUHJlcGFyZWRNZXNzYWdlIHtcbiAgICBjb25zdCBtZXNzYWdlOiBJbml0aWFsaXplTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Jbml0aWFsaXplLFxuICAgICAgY3Jvc3NGcmFtZVZlcnNpb246IGNyb3NzRnJhbWVWZXJzaW9uLFxuICAgICAgYXBpVmVyc2lvbjogYXBpVmVyc2lvbixcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZUNvbW1hbmRNZXNzYWdlKHZlcmJJZDogVmVyYklkLCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogQ29tbWFuZE1lc3NhZ2UgPSB7XG4gICAgICBtc2dHdWlkOiBndWlkLnJhdygpLFxuICAgICAgbXNnVHlwZTogTWVzc2FnZVR5cGUuQ29tbWFuZCxcbiAgICAgIHZlcmJJZDogdmVyYklkLFxuICAgICAgcGFyYW1ldGVyczogcGFyYW1ldGVyc1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcmVwYXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShjb21tYW5kR3VpZDogc3RyaW5nLCBkYXRhOiBNb2RlbCB8IHVuZGVmaW5lZCwgZXJyb3I6IE1vZGVsIHwgdW5kZWZpbmVkKTogUHJlcGFyZWRNZXNzYWdlIHtcbiAgICBjb25zdCBtZXNzYWdlOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlID0ge1xuICAgICAgbXNnR3VpZDogZ3VpZC5yYXcoKSxcbiAgICAgIG1zZ1R5cGU6IE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSxcbiAgICAgIGNvbW1hbmRHdWlkOiBjb21tYW5kR3VpZCxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJlcGFyZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZU5vdGlmaWNhdGlvbk1lc3NhZ2Uobm90aWZpY2F0aW9uSWQ6IE5vdGlmaWNhdGlvbklkLCBkYXRhOiBNb2RlbCk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgY29uc3QgbWVzc2FnZTogTm90aWZpY2F0aW9uTWVzc2FnZSA9IHtcbiAgICAgIG1zZ0d1aWQ6IGd1aWQucmF3KCksXG4gICAgICBtc2dUeXBlOiBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb24sXG4gICAgICBub3RpZmljYXRpb25JZDogbm90aWZpY2F0aW9uSWQsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByZXBhcmVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmVzIGEgcGVuZGluZyBtZXNzYWdlIGZvciBzZW5kaW5nIGFuZCByZXR1cm5zIHRoZSBwcmVwYXJlZCBtZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gYmUgc2VudCB0byB0aGlzLm90aGVyV2luZG93XG4gICAqIEByZXR1cm5zIFRoZSBwcmVwYXJlZCBtZXNzYWdlXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVNZXNzYWdlKG1zZzogTWVzc2FnZSk6IFByZXBhcmVkTWVzc2FnZSB7XG4gICAgaWYgKCF0aGlzLm90aGVyV2luZG93IHx8ICF0aGlzLm90aGVyV2luZG93T3JpZ2luKSB7XG4gICAgICB0aHJvdyAnT3RoZXIgd2luZG93IG5vdCBpbml0aWFsaXplZCwgY2Fubm90IGRpc3BhdGNoIG1lc3NhZ2VzJztcbiAgICB9XG5cbiAgICBjb25zdCBwcmVwYXJlZE1lc3NhZ2UgPSBuZXcgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZShtc2csIHRoaXMub3RoZXJXaW5kb3csIHRoaXMub3RoZXJXaW5kb3dPcmlnaW4pO1xuICAgIHJldHVybiBwcmVwYXJlZE1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkLiBEb2VzIHNvbWUgdmFsaWRhdGlvbiBvZiB0aGUgbWVzc2FnZSwgYW5kIHRoZW5cbiAgICogY2FsbHMgYW4gYXBwcm9wcmlhdGUgbWVzc2FnZSBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBUaGUgaW5jb21pbmcgTWVzc2FnZUV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50OiBNZXNzYWdlRXZlbnQpOiB2b2lkIHtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gb3RoZXJXaW5kb3cgZGVmaW5lZCwgbWFrZSBzdXJlIHRoZSBtZXNzYWdlIGlzIGNvbWluZyBmcm9tIHRoZXJlXG4gICAgaWYgKHRoaXMub3RoZXJXaW5kb3cgJiYgZXZlbnQuc291cmNlICE9PSB0aGlzLm90aGVyV2luZG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gc29tZSB2YWxpZGF0aW9uIG9uIGV2ZW50LmRhdGEgdG8gbWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSByZWNlaXZlZCBhIHJlYWwgbWVzc2FnZVxuICAgIGlmICghZXZlbnQuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xuICAgIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIGRlY2xhcmVkIG1lc3NhZ2UgdHlwZSwgdmFsaWRhdGUgdGhlIG1lc3NhZ2UsIGFuZCBjYWxsIGFuIGFwcHJvcHJpYXRlIGhhbmRlciBpZiBvbmUgZXhpc3RzXG4gICAgc3dpdGNoIChtZXNzYWdlLm1zZ1R5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZToge1xuICAgICAgICBpZiAoIWlzSW5pdE1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgZXZlbnQuc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZToge1xuICAgICAgICBpZiAoIWlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShtZXNzYWdlKSB8fCAhdGhpcy5jb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWFuZFJlc3BvbnNlTWVzc2FnZUhhbmRsZXIobWVzc2FnZSwgZXZlbnQuc291cmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkNvbW1hbmQ6IHtcbiAgICAgICAgaWYgKCFpc0NvbW1hbmRNZXNzYWdlKG1lc3NhZ2UpIHx8ICF0aGlzLmNvbW1hbmRNZXNzYWdlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tbWFuZE1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Ob3RpZmljYXRpb246IHtcbiAgICAgICAgaWYgKCFpc05vdGlmaWNhdGlvbk1lc3NhZ2UobWVzc2FnZSkgfHwgIXRoaXMubm90aWZpY2F0aW9uTWVzc2FnZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UsIGV2ZW50LnNvdXJjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIEp1c3QgaWdub3JlIHRoaXMgc2luY2Ugd2UgZG9uJ3Qga25vdyBob3cgdG8gaGFuZGxlIHRoZSBtZXNzYWdlIHR5cGVcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvbWVzc2FnaW5nL0Nyb3NzRnJhbWVNZXNzZW5nZXIudHMiLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9pbnRlcmZhY2UvTWVzc2FnZVR5cGVzJztcbmltcG9ydCB7IFByZXBhcmVkTWVzc2FnZSB9IGZyb20gJy4vaW50ZXJmYWNlL1ByZXBhcmVkTWVzc2FnZSc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFByZXBhcmVkTWVzc2FnZSBpbnRlcmZhY2UgdXNlZCB0byBwb3N0IG1lc3NhZ2VzIGJldHdlZW5cbiAqIHR3byBmcmFtZXMgdXNpbmcgd2luZG93LnBvc3RNZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlIGltcGxlbWVudHMgUHJlcGFyZWRNZXNzYWdlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ3Jvc3NGcmFtZVByZXBhcmVkTWVzc2FnZS5cbiAgICogQHBhcmFtIF9tZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHNlbnRcbiAgICogQHBhcmFtIF90YXJnZXQgVGhlIHRhcmdldCB3aW5kb3cgd2hlcmUgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBzZW50XG4gICAqIEBwYXJhbSBfb3JpZ2luIFRoZSB0YXJnZXRPcmlnaW4gd2hlcmUgdGhpcyBtZXNzYWdlIGNhbiBiZSByZWNlaXZlZFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2U6IE1lc3NhZ2UsIHByaXZhdGUgX3RhcmdldDogV2luZG93LCBwcml2YXRlIF9vcmlnaW46IHN0cmluZykge1xuXG4gIH1cblxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VHdWlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9tZXNzYWdlLm1zZ0d1aWQ7IH1cblxuICBwdWJsaWMgc2VuZCgpOiBQcmVwYXJlZE1lc3NhZ2Uge1xuICAgIHRoaXMuX3RhcmdldC5wb3N0TWVzc2FnZSh0aGlzLl9tZXNzYWdlLCB0aGlzLl9vcmlnaW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL21lc3NhZ2luZy9Dcm9zc0ZyYW1lUHJlcGFyZWRNZXNzYWdlLnRzIiwiaW1wb3J0ICogYXMgZ3VpZCBmcm9tICdndWlkJztcblxuaW1wb3J0IHsgVmVyc2lvbk51bWJlciB9IGZyb20gJy4uL2ludGVyZmFjZS9WZXJzaW9uTnVtYmVyJztcbmltcG9ydCB7XG4gIENvbW1hbmRNZXNzYWdlLFxuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBJbml0aWFsaXplTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE5vdGlmaWNhdGlvbk1lc3NhZ2UsXG59IGZyb20gJy4vaW50ZXJmYWNlL01lc3NhZ2VUeXBlcyc7XG5cbi8qIHRzbGludDpkaXNhYmxlIG5vLWFueSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZShkYXRhOiBNZXNzYWdlIHwgYW55KTogZGF0YSBpcyBNZXNzYWdlIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRhdGEgYXMgTWVzc2FnZTtcbiAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLm1zZ0d1aWQgfHwgIW1lc3NhZ2UubXNnVHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghZ3VpZC5pc0d1aWQobWVzc2FnZS5tc2dHdWlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWVzc2FnZS5tc2dUeXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VUeXBlczogQXJyYXk8c3RyaW5nPiA9XG4gICAgW01lc3NhZ2VUeXBlLkNvbW1hbmQsIE1lc3NhZ2VUeXBlLkNvbW1hbmRSZXNwb25zZSwgTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZSwgTWVzc2FnZVR5cGUuTm90aWZpY2F0aW9uXTtcblxuICBpZiAobWVzc2FnZVR5cGVzLmluZGV4T2YobWVzc2FnZS5tc2dUeXBlKSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmVyc2lvbih2ZXJzaW9uTnVtYmVyOiBWZXJzaW9uTnVtYmVyIHwgYW55KTogdmVyc2lvbk51bWJlciBpcyBWZXJzaW9uTnVtYmVyIHtcbiAgaWYgKCF2ZXJzaW9uTnVtYmVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgdiA9IHZlcnNpb25OdW1iZXIgYXMgVmVyc2lvbk51bWJlcjtcblxuICBpZiAodHlwZW9mIHYgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2LmZpeCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHYubWlub3IgIT09ICdudW1iZXInIHx8IHR5cGVvZiB2Lm1ham9yICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbml0TWVzc2FnZShtZXNzYWdlOiBJbml0aWFsaXplTWVzc2FnZSB8IGFueSk6IG1lc3NhZ2UgaXMgSW5pdGlhbGl6ZU1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGluaXRNZXNzYWdlID0gbWVzc2FnZSBhcyBJbml0aWFsaXplTWVzc2FnZTtcbiAgaWYgKGluaXRNZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLkluaXRpYWxpemUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWluaXRNZXNzYWdlLmFwaVZlcnNpb24gfHwgIWlzVmVyc2lvbihpbml0TWVzc2FnZS5hcGlWZXJzaW9uKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghaW5pdE1lc3NhZ2UuY3Jvc3NGcmFtZVZlcnNpb24gfHwgIWlzVmVyc2lvbihpbml0TWVzc2FnZS5jcm9zc0ZyYW1lVmVyc2lvbikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tbWFuZFJlc3BvbnNlTWVzc2FnZShtZXNzYWdlOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBDb21tYW5kUmVzcG9uc2VNZXNzYWdlIHtcbiAgaWYgKCFpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjck1lc3NhZ2UgPSBtZXNzYWdlIGFzIENvbW1hbmRSZXNwb25zZU1lc3NhZ2U7XG4gIGlmIChjck1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuQ29tbWFuZFJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFndWlkLmlzR3VpZChjck1lc3NhZ2UuY29tbWFuZEd1aWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFjck1lc3NhZ2UuZGF0YSAmJiAhY3JNZXNzYWdlLmVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1hbmRNZXNzYWdlKG1lc3NhZ2U6IENvbW1hbmRNZXNzYWdlIHwgYW55KTogbWVzc2FnZSBpcyBDb21tYW5kTWVzc2FnZSB7XG4gIGlmICghaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY29tbWFuZE1lc3NhZ2UgPSBtZXNzYWdlIGFzIENvbW1hbmRNZXNzYWdlO1xuICBpZiAoY29tbWFuZE1lc3NhZ2UubXNnVHlwZSAhPT0gTWVzc2FnZVR5cGUuQ29tbWFuZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghY29tbWFuZE1lc3NhZ2UucGFyYW1ldGVycyB8fCB0eXBlb2YgY29tbWFuZE1lc3NhZ2UucGFyYW1ldGVycyAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIWNvbW1hbmRNZXNzYWdlLnZlcmJJZCB8fCB0eXBlb2YgY29tbWFuZE1lc3NhZ2UudmVyYklkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RpZmljYXRpb25NZXNzYWdlKG1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UgfCBhbnkpOiBtZXNzYWdlIGlzIE5vdGlmaWNhdGlvbk1lc3NhZ2Uge1xuICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBtZXNzYWdlIGFzIE5vdGlmaWNhdGlvbk1lc3NhZ2U7XG4gIGlmIChub3RpZmljYXRpb25NZXNzYWdlLm1zZ1R5cGUgIT09IE1lc3NhZ2VUeXBlLk5vdGlmaWNhdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbm90aWZpY2F0aW9uTWVzc2FnZS5kYXRhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbklkIHx8IHR5cGVvZiBub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbklkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9tZXNzYWdpbmcvTWVzc2FnZVR5cGVDaGVja3MudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IERhc2hib2FyZE9iamVjdCB9IGZyb20gJy4uL0Rhc2hib2FyZE9iamVjdCc7XG5pbXBvcnQge1xuICBEYXNoYm9hcmRPYmplY3RUeXBlLFxuICBFeHRlbnNpb25EYXNoYm9hcmRJbmZvLFxuICBTaGVldFBhdGgsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL1BvaW50JztcbmltcG9ydCB7IFNoZWV0SW1wbCB9IGZyb20gJy4vU2hlZXRJbXBsJztcbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuaW1wb3J0IHsgWm9uZVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9ab25lU2VydmljZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnLi4vU2l6ZSc7XG5pbXBvcnQgeyBXb3Jrc2hlZXQgfSBmcm9tICcuLi9Xb3Jrc2hlZXQnO1xuaW1wb3J0IHsgV29ya3NoZWV0SW1wbCB9IGZyb20gJy4vV29ya3NoZWV0SW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRJbXBsIGV4dGVuZHMgU2hlZXRJbXBsIHtcbiAgcHJpdmF0ZSBfd29ya3NoZWV0czogQXJyYXk8Q29udHJhY3QuV29ya3NoZWV0PjtcbiAgcHJpdmF0ZSBfb2JqZWN0czogQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5mbzogRXh0ZW5zaW9uRGFzaGJvYXJkSW5mbywgcHJpdmF0ZSBfc2hlZXRQYXRoOiBTaGVldFBhdGgpIHtcbiAgICBzdXBlcihuZXcgU2hlZXRJbmZvSW1wbChfaW5mby5uYW1lLCBDb250cmFjdC5TaGVldFR5cGUuRGFzaGJvYXJkLCBuZXcgU2l6ZShfaW5mby5zaXplLmgsIF9pbmZvLnNpemUudykpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd29ya3NoZWV0cygpOiBBcnJheTxDb250cmFjdC5Xb3Jrc2hlZXQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2JqZWN0cygpOiBBcnJheTxDb250cmFjdC5EYXNoYm9hcmRPYmplY3Q+IHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplV2l0aFB1YmxpY0ludGVyZmFjZXMoZGFzaGJvYXJkOiBDb250cmFjdC5EYXNoYm9hcmQpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5SW50ZXJuYWxWYWx1ZShkYXNoYm9hcmQsICdkYXNoYm9hcmQnKTtcblxuICAgIHRoaXMuX3dvcmtzaGVldHMgPSBuZXcgQXJyYXk8V29ya3NoZWV0PigpO1xuICAgIHRoaXMuX29iamVjdHMgPSBuZXcgQXJyYXk8Q29udHJhY3QuRGFzaGJvYXJkT2JqZWN0PigpO1xuXG4gICAgLy8gUHJvY2VzcyBhbGwgdGhlIHpvbmVzIHdoaWNoIGFyZSBjb250YWluZWQgaW4gdGhpcyBkYXNoYm9hcmRcbiAgICBmb3IgKGNvbnN0IHpvbmUgb2YgdGhpcy5faW5mby56b25lcykge1xuICAgICAgbGV0IHdvcmtzaGVldDogV29ya3NoZWV0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICBjb25zdCB6b25lU2l6ZSA9IG5ldyBTaXplKHpvbmUuaGVpZ2h0LCB6b25lLndpZHRoKTtcblxuICAgICAgaWYgKHpvbmUuem9uZVR5cGUgPT09IERhc2hib2FyZE9iamVjdFR5cGUuV29ya3NoZWV0KSB7XG4gICAgICAgIC8vIHpvbmUuc2hlZXRJbmZvIHdhcyBub3QgaW5pdGlhbGl6ZWQgcHJpb3IgdG8gaW50ZXJuYWwtY29udHJhY3QgMS42LjBcbiAgICAgICAgbGV0IHdvcmtzaGVldE5hbWUgPSB6b25lLnNoZWV0SW5mbyA/IHpvbmUuc2hlZXRJbmZvLm5hbWUgOiB6b25lLm5hbWU7XG4gICAgICAgIGNvbnN0IHNoZWV0SW5mbyA9IG5ldyBTaGVldEluZm9JbXBsKHdvcmtzaGVldE5hbWUsIENvbnRyYWN0LlNoZWV0VHlwZS5Xb3Jrc2hlZXQsIHpvbmVTaXplKTtcbiAgICAgICAgY29uc3Qgdml6SWQ6IFZpc3VhbElkID0ge1xuICAgICAgICAgIHdvcmtzaGVldDogd29ya3NoZWV0TmFtZSxcbiAgICAgICAgICBkYXNoYm9hcmQ6IHRoaXMuX2luZm8ubmFtZSxcbiAgICAgICAgICBzdG9yeWJvYXJkOiB0aGlzLl9zaGVldFBhdGguc3Rvcnlib2FyZCxcbiAgICAgICAgICBmbGlwYm9hcmRab25lSUQ6IHRoaXMuX3NoZWV0UGF0aC5mbGlwYm9hcmRab25lSUQsXG4gICAgICAgICAgc3RvcnlQb2ludElEOiB0aGlzLl9zaGVldFBhdGguc3RvcnlQb2ludElEXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgd29ya3NoZWV0SW1wbCA9IG5ldyBXb3Jrc2hlZXRJbXBsKHNoZWV0SW5mbywgdml6SWQsIGRhc2hib2FyZCk7XG4gICAgICAgIHdvcmtzaGVldCA9IG5ldyBXb3Jrc2hlZXQod29ya3NoZWV0SW1wbCk7XG4gICAgICAgIHRoaXMuX3dvcmtzaGVldHMucHVzaCh3b3Jrc2hlZXQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB6b25lUG9pbnQgPSBuZXcgUG9pbnQoem9uZS54LCB6b25lLnkpO1xuXG4gICAgICBjb25zdCBkYXNoYm9hcmRPYmplY3QgPSBuZXcgRGFzaGJvYXJkT2JqZWN0KFxuICAgICAgICBkYXNoYm9hcmQsXG4gICAgICAgIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXNoYm9hcmRPYmplY3RUeXBlLmNvbnZlcnQoem9uZS56b25lVHlwZSksXG4gICAgICAgIHpvbmVQb2ludCxcbiAgICAgICAgem9uZVNpemUsXG4gICAgICAgIHdvcmtzaGVldCxcbiAgICAgICAgem9uZS5uYW1lLFxuICAgICAgICB6b25lLmlzRmxvYXRpbmcgfHwgZmFsc2UsICAgLy8gYmVmb3JlIDEuNi4wIHdlIGRpZG4ndCBoYXZlIGlzRmxvYXRpbmcsIHNvIHdlIGFzc3VtZSBmYWxzZVxuICAgICAgICB6b25lLmlzVmlzaWJsZSB8fCB0cnVlLCAgICAgIC8vIGJlZm9yZSAxLjYuMCB3ZSBkaWRuJ3QgaGF2ZSBpc1Zpc2libGUsIHNvIHdlIGFzc3VtZSB0cnVlXG4gICAgICAgIHpvbmUuem9uZUlkXG4gICAgICApO1xuXG4gICAgICB0aGlzLl9vYmplY3RzLnB1c2goZGFzaGJvYXJkT2JqZWN0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0Wm9uZVZpc2liaWxpdHlBc3luYyh6b25lVmlzaWJpbGl0eU1hcDogTWFwPG51bWJlciwgQ29udHJhY3QuWm9uZVZpc2liaWxpdHlUeXBlPik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHpvbmVTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Wm9uZVNlcnZpY2U+KFxuICAgICAgU2VydmljZU5hbWVzLlpvbmUpO1xuXG4gICAgcmV0dXJuIHpvbmVTZXJ2aWNlLnNldFZpc2liaWxpdHlBc3luYygvKkRhc2hib2FyZCBOYW1lKi8gdGhpcy5uYW1lLCB0aGlzLm9iamVjdHMsIHpvbmVWaXNpYmlsaXR5TWFwKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9EYXNoYm9hcmRJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGRhc2hib2FyZCBvYmplY3RzIC0gdGhlIHpvbmVzIGluIGEgZGFzaGJvYXJkLlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpcyBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkT2JqZWN0IGltcGxlbWVudHMgQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2Rhc2hib2FyZDogQ29udHJhY3QuRGFzaGJvYXJkLFxuICAgIHByaXZhdGUgX3R5cGU6IENvbnRyYWN0LkRhc2hib2FyZE9iamVjdFR5cGUsXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IENvbnRyYWN0LlBvaW50LFxuICAgIHByaXZhdGUgX3NpemU6IENvbnRyYWN0LlNpemUsXG4gICAgcHJpdmF0ZSBfd29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQgfCB1bmRlZmluZWQsXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2lzRmxvYXRpbmc6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBfaXNWaXNpYmxlOiBib29sZWFuLFxuICAgIHByaXZhdGUgX2lkOiBudW1iZXJcbiAgKSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9kYXNoYm9hcmQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRGFzaGJvYXJkT2JqZWN0VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IENvbnRyYWN0LlBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpemUoKTogQ29udHJhY3QuU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldCgpOiBDb250cmFjdC5Xb3Jrc2hlZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNGbG9hdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNGbG9hdGluZztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1Zpc2libGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9EYXNoYm9hcmRPYmplY3QudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuZXhwb3J0IGNsYXNzIFBvaW50IGltcGxlbWVudHMgQ29udHJhY3QuUG9pbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfeDogbnVtYmVyLCBwcml2YXRlIF95OiBudW1iZXIpIHsgfVxuXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BvaW50LnRzIiwiaW1wb3J0IHsgU2hlZXRUeXBlLCBTaXplIH0gZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTaGVldFBhdGggfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5leHBvcnQgY2xhc3MgU2hlZXRJbmZvSW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfc2hlZXRUeXBlOiBTaGVldFR5cGUsXG4gICAgcHJpdmF0ZSBfc2hlZXRTaXplOiBTaXplXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNoZWV0U2l6ZSgpOiBTaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRTaXplO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFR5cGUoKTogU2hlZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hlZXRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaGVldFBhdGgoKTogU2hlZXRQYXRoIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hlZXROYW1lOiB0aGlzLm5hbWUsXG4gICAgICBpc0Rhc2hib2FyZDogdGhpcy5zaGVldFR5cGUgPT09IFNoZWV0VHlwZS5EYXNoYm9hcmRcbiAgICAgIC8vIFRPRE8gLSBTdG9yaWVzXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9TaGVldEluZm9JbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBTaXplIGltcGxlbWVudHMgQ29udHJhY3QuU2l6ZSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9oZWlnaHQ6IG51bWJlciwgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcikgeyB9XG5cbiAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2l6ZS50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBTaGVldCB9IGZyb20gJy4vU2hlZXQnO1xuaW1wb3J0IHsgV29ya3NoZWV0SW1wbCB9IGZyb20gJy4vSW1wbC9Xb3Jrc2hlZXRJbXBsJztcblxuZXhwb3J0IGNsYXNzIFdvcmtzaGVldCBleHRlbmRzIFNoZWV0IGltcGxlbWVudHMgQ29udHJhY3QuV29ya3NoZWV0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dvcmtzaGVldEltcGw6IFdvcmtzaGVldEltcGwpIHtcbiAgICBzdXBlcihfd29ya3NoZWV0SW1wbCk7XG5cbiAgICAvLyBDYWxsIHRvIGluaXRpYWxpemUgZXZlbnRzIGFuZCB0aGVuIGNhbGwgZG93biB0byB0aGUgZXZlbnQgbGlzdGVuZXIgbWFuYWdlciB0byBoYW5kbGUgdGhpbmdzXG4gICAgdGhpcy5fd29ya3NoZWV0SW1wbC5pbml0aWFsaXplRXZlbnRzKHRoaXMpLmZvckVhY2goZSA9PiB0aGlzLmFkZE5ld0V2ZW50VHlwZShlKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudERhc2hib2FyZCgpOiBDb250cmFjdC5EYXNoYm9hcmQge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnBhcmVudERhc2hib2FyZDtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlckFzeW5jKFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZXM6IEFycmF5PHN0cmluZz4sIHVwZGF0ZVR5cGU6IENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUsIG9wdGlvbnM6IENvbnRyYWN0LkZpbHRlck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLmFwcGx5RmlsdGVyQXN5bmMoZmllbGROYW1lLCB2YWx1ZXMsIHVwZGF0ZVR5cGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5UmFuZ2VGaWx0ZXJBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuUmFuZ2VGaWx0ZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5hcHBseVJhbmdlRmlsdGVyQXN5bmMoZmllbGROYW1lLCBmaWx0ZXJPcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5jbGVhckZpbHRlckFzeW5jKGZpZWxkTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkRhdGFTb3VyY2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0RGF0YVNvdXJjZXNBc3luYygpO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRGaWx0ZXJzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5nZXRIaWdobGlnaHRlZE1hcmtzQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdW1tYXJ5RGF0YUFzeW5jKG9wdGlvbnM6IENvbnRyYWN0LkdldFN1bW1hcnlEYXRhT3B0aW9ucyk6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM6IENvbnRyYWN0LkdldFVuZGVybHlpbmdEYXRhT3B0aW9ucyk6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0SW1wbC5jbGVhclNlbGVjdGVkTWFya3NBc3luYygpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJREFzeW5jKG1hcmtzSW5mbzogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LCB1cGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuc2VsZWN0TWFya3NCeUlkQXN5bmMobWFya3NJbmZvLCB1cGRhdGVUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc2hlZXRJbXBsLnNlbGVjdE1hcmtzQnlWYWx1ZUFzeW5jKHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHNlbGVjdGlvbnM6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPixcbiAgICBzZWxlY3Rpb25VcGRhdGVUeXBlOiBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldEltcGwuc2VsZWN0TWFya3NCeUlkQXN5bmMoc2VsZWN0aW9ucywgc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1dvcmtzaGVldC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuaW1wb3J0IHtcbiAgRGF0YVNjaGVtYSxcbiAgRGF0YVNvdXJjZSBhcyBEYXRhU291cmNlSW5mbyxcbiAgRmlsdGVyRXZlbnQsIE5vdGlmaWNhdGlvbklkLFxuICBWaXN1YWxJZCxcbiAgV29ya3NoZWV0RGF0YVNvdXJjZUluZm9cbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uL0RhdGFTb3VyY2UnO1xuaW1wb3J0IHsgV29ya3NoZWV0IH0gZnJvbSAnLi4vV29ya3NoZWV0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL0RhdGFTb3VyY2VJbXBsJztcbmltcG9ydCB7IFNoZWV0SW1wbCB9IGZyb20gJy4vU2hlZXRJbXBsJztcbmltcG9ydCB7IFNoZWV0SW5mb0ltcGwgfSBmcm9tICcuL1NoZWV0SW5mb0ltcGwnO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCB9IGZyb20gJy4vU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCc7XG5cbmltcG9ydCB7IEZpbHRlckNoYW5nZWRFdmVudCB9IGZyb20gJy4uL0V2ZW50cy9GaWx0ZXJDaGFuZ2VkRXZlbnQnO1xuaW1wb3J0IHsgTWFya3NTZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL01hcmtzU2VsZWN0ZWRFdmVudCc7XG5pbXBvcnQgeyBTaW5nbGVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9TaW5nbGVFdmVudE1hbmFnZXInO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0RhdGFTb3VyY2VTZXJ2aWNlJztcbmltcG9ydCB7IEZpbHRlclNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9GaWx0ZXJTZXJ2aWNlJztcbmltcG9ydCB7IEdldERhdGFTZXJ2aWNlLCBHZXREYXRhVHlwZSB9IGZyb20gJy4uL1NlcnZpY2VzL0dldERhdGFTZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZWxlY3Rpb25TZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VSZWdpc3RyeSwgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvU2VydmljZVJlZ2lzdHJ5JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5cbmNvbnN0IHZpc3VhbElkc0FyZUVxdWFsID0gZnVuY3Rpb24gKGE6IFZpc3VhbElkLCBiOiBWaXN1YWxJZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gYSAmJiBiICYmXG4gICAgYS53b3Jrc2hlZXQgPT09IGIud29ya3NoZWV0ICYmXG4gICAgYS5kYXNoYm9hcmQgPT09IGIuZGFzaGJvYXJkICYmXG4gICAgYS5zdG9yeWJvYXJkID09PSBiLnN0b3J5Ym9hcmQgJiZcbiAgICBhLnN0b3J5UG9pbnRJRCA9PT0gYi5zdG9yeVBvaW50SUQgJiZcbiAgICBhLmZsaXBib2FyZFpvbmVJRCA9PT0gYi5mbGlwYm9hcmRab25lSUQ7XG59O1xuXG5leHBvcnQgY2xhc3MgV29ya3NoZWV0SW1wbCBleHRlbmRzIFNoZWV0SW1wbCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaGVldEluZm9JbXBsOiBTaGVldEluZm9JbXBsLFxuICAgIHByaXZhdGUgX3Zpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBwcml2YXRlIF9wYXJlbnREYXNoYm9hcmQ6IENvbnRyYWN0LkRhc2hib2FyZCkge1xuICAgIHN1cGVyKHNoZWV0SW5mb0ltcGwpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnREYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50RGFzaGJvYXJkO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2hpY2ggZ29lcyB0aHJvdWdoIGFuZCByZWdpc3RlcnMgZWFjaCBldmVudCB0eXBlIHRoaXMgaW1wbCBrbm93cyBhYm91dFxuICAgKiB3aXRoIHRoZSBOb3RpZmljYXRpb25TZXJ2aWNlLiBJdCByZXR1cm5zIGFuIGFycmF5IG9mIFNpbmdsZUV2ZW50TWFuYWdlciBvYmplY3RzIHdoaWNoXG4gICAqIGNhbiB0aGVuIGJlIHBhc3NlZCB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlciB0byBoYW5kbGUgdXNlciByZWdpc3RyYXRpb24gLyB1bnJlZ2lzdHJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtXb3Jrc2hlZXR9IHdvcmtzaGVldCBUaGUgd29ya3NoZWV0IG9iamVjdCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkIHdpdGggdGhlIGV2ZW50IG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybnMge0FycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj59IENvbGxlY3Rpb24gb2YgZXZlbnQgbWFuYWdlcnMgdG8gcGFzcyB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlclxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVFdmVudHMod29ya3NoZWV0OiBXb3Jrc2hlZXQpOiBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+IHtcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4oKTtcbiAgICBsZXQgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZTtcblxuICAgIHRyeSB7XG4gICAgICBub3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSB0aGlzIHNlcnZpY2UgcmVnaXN0ZXJlZCwganVzdCByZXR1cm5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYWxsIG9mIHRoZSBldmVudCBtYW5hZ2VycyB3ZSdsbCBuZWVkIChvbmUgZm9yIGVhY2ggZXZlbnQgdHlwZSlcbiAgICBjb25zdCBtYXJrc0V2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8TWFya3NTZWxlY3RlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLk1hcmtTZWxlY3Rpb25DaGFuZ2VkKTtcbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5TZWxlY3RlZE1hcmtzQ2hhbmdlZCwgKG1vZGVsKSA9PiB7XG4gICAgICBjb25zdCB2aXN1YWxJZCA9IG1vZGVsIGFzIFZpc3VhbElkO1xuICAgICAgcmV0dXJuIHZpc3VhbElkc0FyZUVxdWFsKHZpc3VhbElkLCB0aGlzLnZpc3VhbElkKTtcbiAgICB9LCAodml6OiBWaXN1YWxJZCkgPT4ge1xuICAgICAgbWFya3NFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IE1hcmtzU2VsZWN0ZWRFdmVudCh3b3Jrc2hlZXQpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbHRlckV2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8RmlsdGVyQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLkZpbHRlckNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLkZpbHRlckNoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyRXZlbnRSZXNwb25zZSA9IG1vZGVsIGFzIEZpbHRlckV2ZW50O1xuICAgICAgcmV0dXJuIHRoaXMudmlzdWFsSWQud29ya3NoZWV0ID09PSBmaWx0ZXJFdmVudFJlc3BvbnNlLnZpc3VhbElkLndvcmtzaGVldDtcbiAgICB9LCAoZXZlbnQ6IEZpbHRlckV2ZW50KSA9PiB7XG4gICAgICBmaWx0ZXJFdmVudC50cmlnZ2VyRXZlbnQoKCkgPT4gbmV3IEZpbHRlckNoYW5nZWRFdmVudCh3b3Jrc2hlZXQsIGV2ZW50LmZpZWxkTmFtZSkpO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0cy5wdXNoKG1hcmtzRXZlbnQpO1xuICAgIHJlc3VsdHMucHVzaChmaWx0ZXJFdmVudCk7XG5cbiAgICAvLyBUT0RPIC0gb3RoZXIgZXZlbnQgdHlwZXNcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIGdldCB2aXN1YWxJZCgpOiBWaXN1YWxJZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc3VhbElkO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RmlsdGVyQXN5bmMoXG4gICAgZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlczogQXJyYXk8c3RyaW5nPiwgdXBkYXRlVHlwZTogQ29udHJhY3QuRmlsdGVyVXBkYXRlVHlwZSwgb3B0aW9uczogQ29udHJhY3QuRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlPih1cGRhdGVUeXBlLCBDb250cmFjdC5GaWx0ZXJVcGRhdGVUeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5hcHBseUZpbHRlckFzeW5jKHRoaXMudmlzdWFsSWQsIGZpZWxkTmFtZSwgdmFsdWVzLCB1cGRhdGVUeXBlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseVJhbmdlRmlsdGVyQXN5bmMoZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihmaWVsZE5hbWUsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGZpbHRlck9wdGlvbnMsICdmaWx0ZXJPcHRpb25zJyk7XG5cbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKSB7XG4gICAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LkZpbHRlck51bGxPcHRpb24+KGZpbHRlck9wdGlvbnMubnVsbE9wdGlvbiwgQ29udHJhY3QuRmlsdGVyTnVsbE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIEVycm9ySGVscGVycy52ZXJpZnlSYW5nZVBhcmFtVHlwZShmaWx0ZXJPcHRpb25zLm1pbiwgZmlsdGVyT3B0aW9ucy5tYXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5hcHBseVJhbmdlRmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lLCBmaWx0ZXJPcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKGZpZWxkTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGZpZWxkTmFtZSwgJ2ZpZWxkTmFtZScpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIHJldHVybiBzZXJ2aWNlLmNsZWFyRmlsdGVyQXN5bmModGhpcy52aXN1YWxJZCwgZmllbGROYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhU291cmNlc0FzeW5jKCk6IFByb21pc2U8QXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RGF0YVNvdXJjZVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5EYXRhU291cmNlU2VydmljZSk7XG5cbiAgICByZXR1cm4gc2VydmljZS5nZXREYXRhU291cmNlc0FzeW5jKHRoaXMudmlzdWFsSWQpLnRoZW48QXJyYXk8Q29udHJhY3QuRGF0YVNvdXJjZT4+KHJlc3VsdCA9PiB7XG4gICAgICBjb25zdCBkYXRhU2NoZW1hOiBEYXRhU2NoZW1hID0gcmVzdWx0IGFzIERhdGFTY2hlbWE7XG4gICAgICBjb25zdCB3b3Jrc2hlZXREYXRhU291cmNlSW5mbzogV29ya3NoZWV0RGF0YVNvdXJjZUluZm8gPSBkYXRhU2NoZW1hLndvcmtzaGVldERhdGFTY2hlbWFNYXBbdGhpcy5uYW1lXTtcblxuICAgICAgbGV0IGRhdGFTb3VyY2VzOiBBcnJheTxDb250cmFjdC5EYXRhU291cmNlPiA9IFtdO1xuXG4gICAgICAvLyBGaXJzdCwgYWRkIHRoZSBwcmltYXJ5IGRhdGFzb3VyY2UuICBCeSBjb252ZW50aW9uLCBpdCBjb21lcyBmaXJzdCBpbiB0aGUgcmV0dXJuZWQgYXJyYXkuXG4gICAgICBsZXQgcHJpbWFyeUlkOiBzdHJpbmcgPSB3b3Jrc2hlZXREYXRhU291cmNlSW5mby5wcmltYXJ5RGF0YVNvdXJjZTtcbiAgICAgIGRhdGFTb3VyY2VzLnB1c2godGhpcy5jcmVhdGVEYXRhU291cmNlRnJvbUluZm8oZGF0YVNjaGVtYS5kYXRhU291cmNlc1twcmltYXJ5SWRdKSk7XG5cbiAgICAgIC8vIFRoZW4sIGxvb3AgdGhyb3VnaCBhbnkgc2Vjb25kYXJ5IGRhdGEgc291cmNlcyBhbmQgYWRkIHRoZW0uXG4gICAgICBmb3IgKGxldCBzZWNvbmRhcnlJZCBvZiB3b3Jrc2hlZXREYXRhU291cmNlSW5mby5yZWZlcmVuY2VkRGF0YVNvdXJjZUxpc3QpIHtcbiAgICAgICAgaWYgKHNlY29uZGFyeUlkICE9PSBwcmltYXJ5SWQpIHtcbiAgICAgICAgICBkYXRhU291cmNlcy5wdXNoKHRoaXMuY3JlYXRlRGF0YVNvdXJjZUZyb21JbmZvKGRhdGFTY2hlbWEuZGF0YVNvdXJjZXNbc2Vjb25kYXJ5SWRdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFTb3VyY2VzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlcnNBc3luYygpOiBQcm9taXNlPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8RmlsdGVyU2VydmljZT4oU2VydmljZU5hbWVzLkZpbHRlcik7XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0RmlsdGVyc0FzeW5jKHRoaXMudmlzdWFsSWQpO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIHJldHVybiBzZXJ2aWNlLmdldFNlbGVjdGVkTWFya3NBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRIaWdobGlnaHRlZE1hcmtzQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5NYXJrc0NvbGxlY3Rpb24+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8R2V0RGF0YVNlcnZpY2U+KFNlcnZpY2VOYW1lcy5HZXREYXRhKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRIaWdobGlnaHRlZE1hcmtzQXN5bmModGhpcy52aXN1YWxJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VtbWFyeURhdGFBc3luYyhvcHRpb25zOiBDb250cmFjdC5HZXRTdW1tYXJ5RGF0YU9wdGlvbnMpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFUYWJsZT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxHZXREYXRhU2VydmljZT4oU2VydmljZU5hbWVzLkdldERhdGEpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICAgIHRoaXMudmlzdWFsSWQsIEdldERhdGFUeXBlLlN1bW1hcnksICEhb3B0aW9ucy5pZ25vcmVBbGlhc2VzLCAhIW9wdGlvbnMuaWdub3JlU2VsZWN0aW9uLCB0cnVlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRVbmRlcmx5aW5nRGF0YUFzeW5jKG9wdGlvbnM6IENvbnRyYWN0LkdldFVuZGVybHlpbmdEYXRhT3B0aW9ucyk6IFByb21pc2U8Q29udHJhY3QuRGF0YVRhYmxlPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEdldERhdGFTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuR2V0RGF0YSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0VW5kZXJseWluZ0RhdGFBc3luYyhcbiAgICAgIHRoaXMudmlzdWFsSWQsXG4gICAgICBHZXREYXRhVHlwZS5VbmRlcmx5aW5nLFxuICAgICAgISFvcHRpb25zLmlnbm9yZUFsaWFzZXMsXG4gICAgICAhIW9wdGlvbnMuaWdub3JlU2VsZWN0aW9uLFxuICAgICAgISFvcHRpb25zLmluY2x1ZGVBbGxDb2x1bW5zLFxuICAgICAgb3B0aW9ucy5tYXhSb3dzIHx8IDApO1xuICB9XG5cbiAgcHVibGljIGNsZWFyU2VsZWN0ZWRNYXJrc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxTZWxlY3Rpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uKTtcbiAgICByZXR1cm4gc2VydmljZS5jbGVhclNlbGVjdGVkTWFya3NBc3luYyh0aGlzLnZpc3VhbElkKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5VmFsdWVBc3luYyhzZWxlY3Rpb25zOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIoc2VsZWN0aW9ucywgJ2ZpZWxkTmFtZScpO1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlFbnVtVmFsdWU8Q29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZT4oc2VsZWN0aW9uVXBkYXRlVHlwZSwgQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8U2VsZWN0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLlNlbGVjdGlvbik7XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2VsZWN0TWFya3NCeVZhbHVlQXN5bmModGhpcy52aXN1YWxJZCwgc2VsZWN0aW9ucywgc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0TWFya3NCeUlkQXN5bmMoc2VsZWN0aW9uczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNlbGVjdGlvbnMsICdmaWVsZE5hbWUnKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGU+KHNlbGVjdGlvblVwZGF0ZVR5cGUsIENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNlbGVjdGlvblNlcnZpY2U+KFNlcnZpY2VOYW1lcy5TZWxlY3Rpb24pO1xuICAgIHJldHVybiBzZXJ2aWNlLnNlbGVjdE1hcmtzQnlJZEFzeW5jKHRoaXMudmlzdWFsSWQsIHNlbGVjdGlvbnMsIHNlbGVjdGlvblVwZGF0ZVR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEYXRhU291cmNlRnJvbUluZm8oZGF0YVNvdXJjZUluZm86IERhdGFTb3VyY2VJbmZvKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgY29uc3QgZGF0YVNvdXJjZUltcGwgPSBuZXcgRGF0YVNvdXJjZUltcGwoZGF0YVNvdXJjZUluZm8pO1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBuZXcgRGF0YVNvdXJjZShkYXRhU291cmNlSW1wbCk7XG4gICAgZGF0YVNvdXJjZUltcGwuaW5pdGlhbGl6ZVdpdGhQdWJsaWNJbnRlcmZhY2VzKGRhdGFTb3VyY2UpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9JbXBsL1dvcmtzaGVldEltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnkgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIGEgY29ubmVjdGlvbiBzdW1tYXJ5LlxuICogVGhpcyBkb2VzIG5vdCBmb2xsb3cgdGhlIEltcGwgcGF0dGVybiBhcyBpdCBpcyBqdXN0IGEgcHJvcGVydHkgYmFnLlxuICovXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvblN1bW1hcnkgaW1wbGVtZW50cyBDb250cmFjdC5Db25uZWN0aW9uU3VtbWFyeSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb25uZWN0aW9uSW5mbzogQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeSkgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLmlkO1xuICB9XG5cbiAgcHVibGljIGdldCBzZXJ2ZXJVUkkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbkluZm8uc2VydmVyVVJJO1xuICB9XG5cbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25JbmZvLnR5cGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL0Nvbm5lY3Rpb25TdW1tYXJ5LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBUYWJsZUluZm8gfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIGEgdGFibGUgc3VtbWFyeS5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXMganVzdCBhIHByb3BlcnR5IGJhZy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlU3VtbWFyeSBpbXBsZW1lbnRzIENvbnRyYWN0LlRhYmxlU3VtbWFyeSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJsZUluZm86IFRhYmxlSW5mbykgeyB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlSW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8uaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90YWJsZUluZm8uY29ubmVjdGlvbklkO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXN0b21TUUwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVJbmZvLmN1c3RvbVNRTDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvVGFibGVTdW1tYXJ5LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uL1RhYmxlYXVFcnJvcic7XG5pbXBvcnQgeyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVXb3Jrc2hlZXRFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBUYWJsZWF1V29ya3NoZWV0RXZlbnQgaW1wbGVtZW50cyBDb250cmFjdC5GaWx0ZXJDaGFuZ2VkRXZlbnQge1xuICBwdWJsaWMgY29uc3RydWN0b3Iod29ya3NoZWV0OiBDb250cmFjdC5Xb3Jrc2hlZXQsIHByaXZhdGUgX2ZpZWxkTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5GaWx0ZXJDaGFuZ2VkLCB3b3Jrc2hlZXQpO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWVsZE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmllbGROYW1lO1xuICB9XG5cbiAgcHVibGljIGdldEZpbHRlckFzeW5jKCk6IFByb21pc2U8Q29udHJhY3QuRmlsdGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzaGVldC5nZXRGaWx0ZXJzQXN5bmMoKS50aGVuPENvbnRyYWN0LkZpbHRlcj4oZmlsdGVycyA9PiB7XG4gICAgICAvLyBUT0RPOiBGaWx0ZXJpbmcgb2YgdGhlIGZpbHRlcnMgc2hvdWxkIGV2ZW50dWFsbHkgYmUgZG9uZSBwbGF0Zm9ybSBzaWRlLlxuICAgICAgY29uc3QgZXZlbnRlZEZpbHRlciA9IGZpbHRlcnMuZmluZCgoZmlsdGVyKSA9PiAoZmlsdGVyLmZpZWxkTmFtZSA9PT0gdGhpcy5fZmllbGROYW1lKSk7XG5cbiAgICAgIGlmICghZXZlbnRlZEZpbHRlcikge1xuICAgICAgICAvLyBXZSBzaG91bGRuJ3QgaGl0IHRoaXMgdW5sZXNzIHRoZSBmaWx0ZXIgd2FzIHJlbW92ZWQgZnJvbSB0aGUgd29ya3NoZWV0XG4gICAgICAgIC8vIGFmdGVyIHRoZSBldmVudCB3YXMgcmFpc2VkLlxuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuTWlzc2luZ0ZpbHRlciwgYGNhbm5vdCBmaW5kIGZpbHRlcjogJHt0aGlzLl9maWVsZE5hbWV9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudGVkRmlsdGVyO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9FdmVudHMvRmlsdGVyQ2hhbmdlZEV2ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFRhYmxlYXVXb3Jrc2hlZXRFdmVudCB9IGZyb20gJy4vVGFibGVhdVdvcmtzaGVldEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIE1hcmtzU2VsZWN0ZWRFdmVudCBleHRlbmRzIFRhYmxlYXVXb3Jrc2hlZXRFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0Lk1hcmtzU2VsZWN0ZWRFdmVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih3b3Jrc2hlZXQ6IENvbnRyYWN0LldvcmtzaGVldCkge1xuICAgIHN1cGVyKENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuTWFya1NlbGVjdGlvbkNoYW5nZWQsIHdvcmtzaGVldCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFya3NBc3luYygpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLndvcmtzaGVldC5nZXRTZWxlY3RlZE1hcmtzQXN5bmMoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL01hcmtzU2VsZWN0ZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQge1xuICBDb21tYW5kUmVzcG9uc2VNZXNzYWdlLFxuICBDcm9zc0ZyYW1lTWVzc2VuZ2VyLFxuICBNRVNTQUdJTkdfVkVSU0lPTiBhcyBBcGlNZXNzYWdpbmdWZXJzaW9uLFxuICBJbml0aWFsaXphdGlvbk9wdGlvbnMsXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IENyb3NzRnJhbWVEaXNwYXRjaGVyIH0gZnJvbSAnLi9Dcm9zc0ZyYW1lRGlzcGF0Y2hlcic7XG5cbi8vIENoZWNrcyB0byBzZWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gYW4gaWZyYW1lIGN1cnJlbnRseTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMyNjA3Ni84ODIxMTUzXG5mdW5jdGlvbiBpbklmcmFtZSh0aGlzV2luZG93OiBXaW5kb3cpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdGhpc1dpbmRvdy5zZWxmICE9PSB0aGlzV2luZG93LnBhcmVudDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gYm9vdHN0cmFwIHRoZSBleHRlbnNpb24gd2l0aCBhIGNyb3NzLWZyYW1lIHBhcmVudCB3aGVyZSBUYWJsZWF1IGlzIHJ1bm5pbmdcbiAqXG4gKiBAcGFyYW0gdGhpc1dpbmRvdyBUaGUgd2luZG93IHdoaWNoIHdlIGFyZSBydW5uaW5nIGluIChpbmplY3RlZCBmb3IgdW5pdCB0ZXN0aW5nIHB1cnBvc2VzKVxuICogQHBhcmFtIGludGVybmFsQ29udHJhY3RWZXJzaW9uIFRoZSB2ZXJzaW9uIG51bWJlciBvZiB0aGUgaW50ZXJuYWwgY29udHJhY3Qgd2UgYXJlIHVzaW5nXG4gKiBAcmV0dXJucyBBIHByb21pc2Ugd2hpY2ggaXMgZG9pbmcgdGhlIGFjdHVhbCBib290c3RyYXBwaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb0Nyb3NzRnJhbWVCb290c3RyYXAoXG4gIHRoaXNXaW5kb3c6IFdpbmRvdywgaW50ZXJuYWxDb250cmFjdFZlcnNpb246IENvbnRyYWN0LlZlcnNpb25OdW1iZXIsIG9wdGlvbnM6IEluaXRpYWxpemF0aW9uT3B0aW9ucylcbiAgOiBQcm9taXNlPENvbnRyYWN0LkludGVybmFsQXBpRGlzcGF0Y2hlckZhY3Rvcnk+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2U8Q29udHJhY3QuSW50ZXJuYWxBcGlEaXNwYXRjaGVyRmFjdG9yeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgbGV0IHBhcmVudDogV2luZG93O1xuXG4gICAgLy8gTm9ybWFsbHksIHdlIGFyZSBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUuICBUaGUgZXhjZXB0aW9uIHRvIHRoaXMgaXNcbiAgICAvLyB3aGVuIHdlIGFyZSBydW5uaW5nIGFzIGFuIGV4dGVuc2lvbiBpbnNpZGUgYSBkaWFsb2cgYXMgcGFydCBvZiB0aGUgVUlOYW1lc3BhY2VcbiAgICAvLyBmdW5jdGlvbmFsaXR5LiAgSW4gdGhhdCBjYXNlLCB3ZSB3YW50IHRoZSBvcGVuZXIgb2YgdGhpcyB3aW5kb3cgcmF0aGVyIHRoYW4gdGhlIHBhcmVudC5cbiAgICBpZiAoIWluSWZyYW1lKHRoaXNXaW5kb3cpKSB7XG4gICAgICBwYXJlbnQgPSB0aGlzV2luZG93Lm9wZW5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gdGhpc1dpbmRvdy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJlamVjdCgnVGhpcyBleHRlbnNpb24gaXMgbm90IHJ1bm5pbmcgaW5zaWRlIGFuIGlmcmFtZSwgZGVza3RvcCwgb3IgcG9wdXAgd2luZG93LiBJbml0aWFsaXphdGlvbiBmYWlsZWQuJyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBtZXNzZW5nZXIgd2hpY2ggd2lsbCBkbyBoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhpcyB3aW5kb3cgYW5kIG91ciBwYXJlbnRcbiAgICAvLyBTaW5jZSB3ZSBkb24ndCBrbm93IHdoZXJlIHdlIGFyZSBydW5uaW5nIHlldCwgd2UgaGF2ZSB0byBtYWtlIHRoaXMgaW5pdGlhbCBvcmlnaW4gJyonLiBPbmNlXG4gICAgLy8gd2UgaGF2ZSBzdWNjZXNzZnVsbHkgaW5pdGlhbGl6ZWQgb3VyIGV4dGVuc2lvbiwgd2Ugd2lsbCBsaW1pdCB3aGVyZSB3ZSBzZW5kIG1lc3NhZ2VzXG4gICAgY29uc3QgbWVzc2VuZ2VyID0gbmV3IENyb3NzRnJhbWVNZXNzZW5nZXIodGhpc1dpbmRvdywgcGFyZW50LCAnKicpO1xuXG4gICAgLy8gUHJlcGFyZSB0byBzZW5kIGFuIGluaXRpYWxpemF0aW9uIG1lc3NhZ2UgdG8gdGhlIHBhcmVudCBmcmFtZVxuICAgIGNvbnN0IGluaXRpYWxpemF0aW9uTWVzc2FnZSA9XG4gICAgICBtZXNzZW5nZXIucHJlcGFyZUluaXRpYWxpemF0aW9uTWVzc2FnZShpbnRlcm5hbENvbnRyYWN0VmVyc2lvbiwgQXBpTWVzc2FnaW5nVmVyc2lvbiwgb3B0aW9ucyk7XG5cbiAgICAvLyBXaGVuIHdlIHJlY2VpdmUgYSByZXNwb25zZSBiYWNrIGZyb20gdGhlIHBhcmVudCwgd2UgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBndWlkcyBtYXRjaCBhbmQgdGhlbiB3ZSBrbm93XG4gICAgLy8gdGhhdCB0aGUgcGFyZW50IGlzIGF3YXJlIG9mIHVzIGFuZCB3ZSBjYW4gc3RhcnQgY29tbXVuaWNhdGluZ1xuICAgIG1lc3Nlbmdlci5zZXRDb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcihmdW5jdGlvbiAobXNnOiBDb21tYW5kUmVzcG9uc2VNZXNzYWdlKTogdm9pZCB7XG5cbiAgICAgIC8vIFZlcmlmeSB3ZSBhcmUgZ2V0dGluZyBhIHJlc3BvbnNlIGZyb20gb3VyIGluaXRpYWxpemUgbWVzc2FnZVxuICAgICAgaWYgKG1zZy5jb21tYW5kR3VpZCA9PT0gaW5pdGlhbGl6YXRpb25NZXNzYWdlLm1lc3NhZ2VHdWlkKSB7XG5cbiAgICAgICAgLy8gVGhlIHZlcnNpb25pbmcgb2YgdGhlIGRpc3BhdGNoZXIgaGFwcGVucyBvbiB0aGUgb3RoZXIgc2lkZSBvZiBvdXIgZnJhbWUsIGFuZFxuICAgICAgICAvLyBpbiBhIHdyYXBwZXIgb24gdGhpcyBzaWRlLiBUaGlzIG9uZSBkb2Vzbid0IGhhdmUgYW55IHZlcnNpb24ga25vd2xlZGdlLlxuICAgICAgICBjb25zdCBkaXNwYXRjaGVyRmFjdG9yeSA9ICgpID0+IG5ldyBDcm9zc0ZyYW1lRGlzcGF0Y2hlcihtZXNzZW5nZXIpO1xuICAgICAgICByZXNvbHZlKGRpc3BhdGNoZXJGYWN0b3J5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE5vdyB0aGF0IG91ciBoYW5kbGVycyBhcmUgcmVhZHksIHN0YXJ0IGxpc3RlbmluZyBhbmQgc2VuZCBvdXIgaW5pdGlhbGl6YXRpb24gbWVzc2FnZVxuICAgIG1lc3Nlbmdlci5zdGFydExpc3RlbmluZygpO1xuICAgIGluaXRpYWxpemF0aW9uTWVzc2FnZS5zZW5kKCk7XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvQ3Jvc3NGcmFtZS9Dcm9zc0ZyYW1lQm9vdHN0cmFwLnRzIiwiaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4ZWN1dGVSZXNwb25zZSxcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxuICBNb2RlbCxcbiAgTm90aWZpY2F0aW9uSGFuZGxlcixcbiAgVmVyYklkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSwgTWVzc2VuZ2VyLCBOb3RpZmljYXRpb25NZXNzYWdlIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuLyoqXG4gKiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBJbnRlcm5hbEFwaURpc3BhdGNoZXIgaW50ZXJmYWNlIHdoaWNoIGZ1bmN0aW9ucyBieSBwYXNzaW5nIG1lc3NhZ2VzXG4gKiBhY3Jvc3MgYSBmcmFtZSBib3VuZGFyeS4gVGhpcyBpcyB1c3VhbGx5IGJldHdlZW4gdGhlIGNvZGUgd2hlcmUgb3VyIGphdnNjcmlwdCBsaWJyYXJ5IGhhcyBiZWVuIGluY2x1ZGVkXG4gKiBieSBhIDNyZCBwYXJ0eSBkZXYgYW5kIGFub3RoZXIgZnJhbWUgd2hlcmUgVGFibGVhdSBzZXJ2ZXIgaGFzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDcm9zc0ZyYW1lRGlzcGF0Y2hlciBpbXBsZW1lbnRzIEludGVybmFsQXBpRGlzcGF0Y2hlciB7XG5cbiAgLy8gQ29sbGVjdGlvbiBvZiBwZW5kaW5nIHByb21pc2VzIHdoaWNoIGFyZSB3YWl0aW5nIHRvIGJlIHJlc29sdmVkLiBXaGVuIHdlIHJlY2VpdmUgYSByZXNwb25zZSBiYWNrIGZyb20gdGhlIG90aGVyIGZyYW1lLFxuICAvLyB0aGVzZSBwcm9taXNlcyBjYW4gYmUgZWl0aGVyIHJlc29sdmVkIG9yIHJlamVjdGVkXG4gIHByaXZhdGUgX3BlbmRpbmdQcm9taXNlczpcbiAgICB7IFttZXNzYWdlR3VpZDogc3RyaW5nXTogeyByZXNvbHZlOiAocmVzcG9uc2U6IEV4ZWN1dGVSZXNwb25zZSkgPT4gdm9pZCwgcmVqZWN0OiAoZXJyb3I6IE1vZGVsKSA9PiB2b2lkIH0gfSA9IHt9O1xuXG4gIC8vIFRoZSBjb2xsZWN0aW9uIG9mIG5vdGlmaWNhdGlvbiBoYW5kbGVycyB3aGljaCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB3aXRoIHRoaXMgZGlzcGF0Y2hlclxuICBwcml2YXRlIF9ub3RpZmljYXRpb25IYW5kbGVyczogQXJyYXk8Tm90aWZpY2F0aW9uSGFuZGxlcj4gPSBbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDcm9zc0ZyYW1lRGlzcGF0Y2hlciB3aGljaCB3aWxsIHVzZSB0aGUgZ2l2ZW4gbWVzc2VuZ2VyIHRvIGNvbW11bmljYXRlXG4gICAqIEBwYXJhbSBfbWVzc2VuZ2VyIGFuIGluc3RhbnRpYXRlZCBhbmQgbGlzdGVuaW5nIG1lc3NlbmdlciBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzZW5nZXI6IE1lc3Nlbmdlcikge1xuICAgIGlmICghdGhpcy5fbWVzc2VuZ2VyKSB7XG4gICAgICB0aHJvdyAnTWlzc2luZyBtZXNzZW5nZXIgb2JqZWN0JztcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgb3VyIG1lc3NhZ2UgaGFuZGxlcnMuIFdlIG9ubHkgY2FyZSBhYm91dCBpbmNvbWluZyBub3RpZmljYXRpb25zIGFuZCBjb21tYW5kIHJlc3BvbnNlc1xuICAgIHRoaXMuX21lc3Nlbmdlci5zZXRDb21tYW5kUmVzcG9uc2VNZXNzYWdlSGFuZGxlcih0aGlzLm9uQ29tbWFuZFJlc3BvbnNlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX21lc3Nlbmdlci5zZXROb3RpZmljYXRpb25NZXNzYWdlSGFuZGxlcih0aGlzLm9uTm90aWZpY2F0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLy8vLy8vIFN0YXJ0IEludGVybmFsQXBpRGlzcGF0Y2hlciBpbXBsZW1lbnRhdGlvblxuXG4gIHB1YmxpYyBleGVjdXRlKHZlcmI6IFZlcmJJZCwgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMpOiBQcm9taXNlPEV4ZWN1dGVSZXNwb25zZT4ge1xuICAgIC8vIFRvIGV4ZWN1dGUgYSB2ZXJiLCB3ZSBmaXJzdCBwcmVwYXJlIGEgY29tbWFuZCBtZXNzYWdlIGFuZCB0aGVuIGRlZmluZSBhIHByb21pc2UuXG4gICAgY29uc3QgcHJlcGFyZWRNZXNzYWdlID0gdGhpcy5fbWVzc2VuZ2VyLnByZXBhcmVDb21tYW5kTWVzc2FnZSh2ZXJiLCBwYXJhbWV0ZXJzKTtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8RXhlY3V0ZVJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIC8vIFNhdmUgb2ZmIHRoZSBwZW5kaW5nIHByb21pc2UgYnkgdGhlIG1lc3NhZ2VHdWlkIHdlIGFyZSBhYm91dCB0byBzZW5kLiBXaGVuIGEgcmVzcG9uc2UgaXNcbiAgICAgIC8vIHJlY2VpdmVkLCB3ZSdsbCBiZSBhYmxlIHRvIHJlc29sdmUgdGhpcyBwcm9taXNlIHdpdGggdGhlIHJlc3VsdFxuICAgICAgdGhpcy5fcGVuZGluZ1Byb21pc2VzW3ByZXBhcmVkTWVzc2FnZS5tZXNzYWdlR3VpZF0gPSB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH07XG4gICAgfSk7XG5cbiAgICAvLyBBY3R1YWxseSBzZW5kIHRoZSBtZXNzYWdlIGFuZCByZXR1cm4gdGhlIHByb21pc2VcbiAgICBwcmVwYXJlZE1lc3NhZ2Uuc2VuZCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyB1bnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMgPSB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycy5maWx0ZXIoaCA9PiBoICE9PSBoYW5kbGVyKTtcbiAgfVxuXG4gIC8vLy8vLyBFbmQgSW50ZXJuYWxBcGlEaXNwYXRjaGVyIGltcGxlbWVudGF0aW9uXG5cbiAgcHJpdmF0ZSBvbkNvbW1hbmRSZXNwb25zZShyZXNwb25zZTogQ29tbWFuZFJlc3BvbnNlTWVzc2FnZSk6IHZvaWQge1xuICAgIC8vIFdlIGdvdCBhIGNvbW1hbmQgcmVzcG9uc2UsIGxvb2sgdGhyb3VnaCB0aGUgcGVuZGluZyBwcm9taXNlcyBhbmQgcmVzb2x2ZVxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wZW5kaW5nUHJvbWlzZXMpLmluZGV4T2YocmVzcG9uc2UuY29tbWFuZEd1aWQpIDwgMCkge1xuICAgICAgcmV0dXJuOyAvLyBXZSBkb24ndCBoYXZlIGFueSByZWZlcmVuY2UgdG8gdGhpcyBjb21tYW5kLCBqdXN0IHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBlbmRpbmdQcm9taXNlID0gdGhpcy5fcGVuZGluZ1Byb21pc2VzW3Jlc3BvbnNlLmNvbW1hbmRHdWlkXTtcblxuICAgIC8vIElmIHdlIGhhdmUgYW4gZXJyb3IgZGVmaW5lZCwgcmVqZWN0IHRoZSBwcm9taXNlXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICBwZW5kaW5nUHJvbWlzZS5yZWplY3QocmVzcG9uc2UuZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgZGF0YSBkZWZpbmVkLCByZXNvbHZlIHRoZSBwcm9taXNlXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHBlbmRpbmdQcm9taXNlLnJlc29sdmUoeyByZXN1bHQ6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgb3VyIHBlbmRpbmcgcHJvbWlzZXMgb2JqZWN0XG4gICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdQcm9taXNlc1tyZXNwb25zZS5jb21tYW5kR3VpZF07XG4gIH1cblxuICBwcml2YXRlIG9uTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk1lc3NhZ2U6IE5vdGlmaWNhdGlvbk1lc3NhZ2UpOiB2b2lkIHtcbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggbm90aWZpY2F0aW9uIGhhbmRsZXIgd2UgaGF2ZSByZWdpc3RlcmVkIGFuZCBsZXQgdGhlbSBrbm93IGEgbm90aWZpY2F0aW9uIGNhbWUgaW5cbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGhhbmRsZXIoeyBub3RpZmljYXRpb25JZDogbm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25JZCwgZGF0YTogbm90aWZpY2F0aW9uTWVzc2FnZS5kYXRhIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJZ25vcmUgdGhpcy4gV3JhcCBpbiB0cnkvY2F0Y2ggc28gaWYgb25lIGhhbmRsZXIgZXJyb3JzLCB0aGUgb3RoZXIgc3RpbGwgZ2V0IHRoZSBtZXNzYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Dcm9zc0ZyYW1lL0Nyb3NzRnJhbWVEaXNwYXRjaGVyLnRzIiwiaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5IH0gZnJvbSAnLi9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL0RhdGFTb3VyY2VTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9GaWx0ZXJTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBHZXREYXRhU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvR2V0RGF0YVNlcnZpY2VJbXBsJztcbmltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9Ob3RpZmljYXRpb25TZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJzU2VydmljZUltcGwgfSBmcm9tICcuL2ltcGwvUGFyYW1ldGVyc1NlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2VJbXBsIH0gZnJvbSAnLi9pbXBsL1NlbGVjdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFpvbmVTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaW1wbC9ab25lU2VydmljZUltcGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBbGxTaGFyZWRTZXJ2aWNlcyhkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpOiB2b2lkIHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgRGF0YVNvdXJjZVNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgR2V0RGF0YVNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgRmlsdGVyU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFBhcmFtZXRlcnNTZXJ2aWNlSW1wbChkaXNwYXRjaGVyKSk7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFNlbGVjdGlvblNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLnJlZ2lzdGVyU2VydmljZShuZXcgWm9uZVNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL1JlZ2lzdGVyQWxsU2hhcmVkU2VydmljZXMudHMiLCJpbXBvcnQgeyBFcnJvckNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnksXG4gIERhdGFTY2hlbWEsXG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBQYXJhbWV0ZXJJZCxcbiAgVGFibGVJbmZvLFxuICBUYWJsZUluZm9zLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9EYXRhU291cmNlU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5pbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCAqIGFzIEludGVybmFsQ29udHJhY3QgZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9GaWVsZCc7XG5pbXBvcnQgeyBGaWVsZEltcGwgfSBmcm9tICcuLi8uLi9JbXBsL0ZpZWxkSW1wbCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9EYXRhU291cmNlJztcbmltcG9ydCB7IERhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi4vLi4vSW1wbC9EYXRhU291cmNlSW1wbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBEYXRhU291cmNlU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIHJlZnJlc2hBc3luYyhkYXRhU291cmNlSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLkRhdGFTb3VyY2VJZF06IGRhdGFTb3VyY2VJZCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5EZWx0YVRpbWVNc106IDAsXG4gICAgICBbUGFyYW1ldGVySWQuU2hvdWxkUmVmcmVzaERTXTogdHJ1ZVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5SZWZyZXNoRGF0YVNvdXJjZSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVGFibGVzQXN5bmMoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFRhYmxlSW5mbz4+IHtcbiAgICBjb25zdCBqb2luUGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQgfTtcblxuICAgIC8vIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhYmxlcyB1c2VkIGJ5IHRoaXMgY29ubmVjdGlvblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldEFjdGl2ZVRhYmxlcywgam9pblBhcmFtZXRlcnMpLnRoZW48QXJyYXk8VGFibGVJbmZvPj4oam9pblJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHRhYmxlSW5mb3MgPSBqb2luUmVzcG9uc2UucmVzdWx0IGFzIFRhYmxlSW5mb3M7XG5cbiAgICAgIC8vIGdldEFjdGl2ZVRhYmxlcyBpcyB1bnN1cHBvcnRlZCBmb3IgY3ViZXMgYW5kIEdBLiBXZSBkbyBub3QgaGF2ZSBhIGNvbm5lY3Rpb24gdHlwZSBwcm9wZXJ0eVxuICAgICAgLy8gYXZhaWxhYmxlIGZyb20gdGhlIHBsYXRmb3JtIChpbnRlbnRpb25hbGx5LCB0byByZWR1Y2UgY29kZSBjaHVybiBhcyBuZXcgY29ubmVjdGlvbnMgYXJlIGFkZGVkKS5cbiAgICAgIC8vIEluc3RlYWQsanVzdCBjaGVjayBpZiBhbnkgdGFibGVzIGFyZSByZXR1cm5lZC4gVGhpcyBhcnJheSB3aWxsIGJlIGVtcHR5IGZvciBhbnkgbm9uLXRhYmxlIGJhc2VkIGRhdGFzb3VyY2UuXG4gICAgICBpZiAodGFibGVJbmZvcy50YWJsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5VbnN1cHBvcnRlZE1ldGhvZEZvckRhdGFTb3VyY2VUeXBlLFxuICAgICAgICAgIGBnZXRBY3RpdmVUYWJsZXMgaXMgbm90IHN1cHBvcnRlZCBmb3I6ICR7ZGF0YVNvdXJjZUlkfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFibGVJbmZvcy50YWJsZXM7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YVNvdXJjZXNBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPERhdGFTY2hlbWE+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXREYXRhU291cmNlcywgcGFyYW1ldGVycykudGhlbjxEYXRhU2NoZW1hPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkYXRhU2NoZW1hID0gcmVzcG9uc2UucmVzdWx0IGFzIERhdGFTY2hlbWE7XG4gICAgICByZXR1cm4gZGF0YVNjaGVtYTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25uZWN0aW9uU3VtbWFyaWVzQXN5bmMoZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBQcm9taXNlPENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXT4ge1xuICAgIGNvbnN0IHBhcmFtczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQgfTtcblxuICAgIC8vIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHRhYmxlcyB1c2VkIGJ5IHRoaXMgY29ubmVjdGlvblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcmllcywgcGFyYW1zKS50aGVuPENvbm5lY3Rpb25EZXNjcmlwdGlvblN1bW1hcnlbXT4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25TdW1tYXJpZXMgPSByZXNwb25zZS5yZXN1bHQgYXMgQ29ubmVjdGlvbkRlc2NyaXB0aW9uU3VtbWFyeVtdO1xuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uU3VtbWFyaWVzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEZpZWxkQXN5bmMoZmllbGRJZDogc3RyaW5nKTogUHJvbWlzZTxDb250cmFjdC5GaWVsZD4ge1xuICAgIGNvbnN0IGZpZWxkSWRDb21wb25lbnRzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5wYXJzZUZpZWxkSWQoZmllbGRJZCk7XG4gICAgY29uc3QgZGF0YVNvdXJjZUlkOiBzdHJpbmcgPSBmaWVsZElkQ29tcG9uZW50c1sxXTtcbiAgICBjb25zdCBmaWVsZE5hbWU6IHN0cmluZyA9IGZpZWxkSWRDb21wb25lbnRzWzJdO1xuXG4gICAgY29uc3QgdmVyYjogVmVyYklkID0gVmVyYklkLkdldERhdGFTb3VyY2U7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7IFtQYXJhbWV0ZXJJZC5EYXRhU291cmNlSWRdOiBkYXRhU291cmNlSWQgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxDb250cmFjdC5GaWVsZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZTogSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuRGF0YVNvdXJjZTtcbiAgICAgIGNvbnN0IGZpZWxkOiBJbnRlcm5hbENvbnRyYWN0LkZpZWxkIHwgdW5kZWZpbmVkID0gZGF0YVNvdXJjZS5maWVsZHMuZmluZCgoZikgPT4ge1xuICAgICAgICByZXR1cm4gZi5uYW1lID09PSBmaWVsZE5hbWU7XG4gICAgICB9KTtcbiAgICAgIGlmIChmaWVsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCBgVW5hYmxlIHRvIGZpbmQgZmllbGQgd2l0aCBpZCAnJHtmaWVsZElkfSdgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRGaWVsZChmaWVsZCwgdGhpcy5jb252ZXJ0RGF0YVNvdXJjZShkYXRhU291cmNlKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRGaWVsZChmaWVsZDogSW50ZXJuYWxDb250cmFjdC5GaWVsZCwgZGF0YVNvdXJjZTogQ29udHJhY3QuRGF0YVNvdXJjZSk6IENvbnRyYWN0LkZpZWxkIHtcbiAgICByZXR1cm4gbmV3IEZpZWxkKG5ldyBGaWVsZEltcGwoZmllbGQsIGRhdGFTb3VyY2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydERhdGFTb3VyY2UoZGF0YVNvdXJjZTogSW50ZXJuYWxDb250cmFjdC5EYXRhU291cmNlKTogQ29udHJhY3QuRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhU291cmNlKG5ldyBEYXRhU291cmNlSW1wbChkYXRhU291cmNlKSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlRmllbGRJZChmaWVsZElkOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAvLyB3ZSBjYW4gZXhwZWN0IGV4ZWMgdG8gcmV0dXJuIGEgbWF0Y2ggdG8gdGhlIGVudGlyZSBmaWVsZCBpZCBhdCBlbGVtZW50IDAsIHRoZSBkYXRhc291cmNlIGlkIGF0IGVsZW1lbnQgMVxuICAgIC8vIGFuZCB0aGUgZmllbGQgbmFtZSBhdCBlbGVtZW50IDIuIEZpZWxkIGlkIGZvcm1hdCBpcyBbZGF0YVNvdWNyZUlkXS5bZmllbGROYW1lXVxuICAgIHJldHVybiAvXlxcWyguKylcXF1cXC5cXFsoLispXFxdJC8uZXhlYyhmaWVsZElkKSE7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRGF0YVNvdXJjZVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgKiBhcyBJbnRlcm5hbENvbnRyYWN0IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBGaWx0ZXJUeXBlLFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRXh0ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgYXMgSW50ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5cbmltcG9ydCB7XG4gIENhdGVnb3JpY2FsRG9tYWluLFxuICBDYXRlZ29yaWNhbEZpbHRlcixcbiAgUmFuZ2VEb21haW4sXG4gIFJhbmdlRmlsdGVyLFxuICBSZWxhdGl2ZURhdGVGaWx0ZXJcbn0gZnJvbSAnLi4vLi4vTW9kZWxzL0ZpbHRlck1vZGVscyc7XG5cbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcblxuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgRGF0YVZhbHVlIH0gZnJvbSAnLi4vLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuLi8uLi9VdGlscy9QYXJhbSc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEZpbHRlclNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5GaWx0ZXI7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlGaWx0ZXJBc3luYyhcbiAgICB2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgdmFsdWVzOiBBcnJheTxzdHJpbmc+LFxuICAgIHVwZGF0ZVR5cGU6IENvbnRyYWN0LkZpbHRlclVwZGF0ZVR5cGUsXG4gICAgZmlsdGVyT3B0aW9uczogQ29udHJhY3QuRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5BcHBseUNhdGVnb3JpY2FsRmlsdGVyO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJWYWx1ZXNdID0gdmFsdWVzO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmlsdGVyVXBkYXRlVHlwZV0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIuZmlsdGVyVXBkYXRlVHlwZS5jb252ZXJ0KHVwZGF0ZVR5cGUpO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSXNFeGNsdWRlTW9kZV0gPVxuICAgICAgKGZpbHRlck9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBmaWx0ZXJPcHRpb25zLmlzRXhjbHVkZU1vZGUgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IGZpbHRlck9wdGlvbnMuaXNFeGNsdWRlTW9kZTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUodmVyYiwgcGFyYW1ldGVycykudGhlbjxzdHJpbmc+KHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlSYW5nZUZpbHRlckFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCwgZmllbGROYW1lOiBzdHJpbmcsIGZpbHRlck9wdGlvbnM6IENvbnRyYWN0LlJhbmdlRmlsdGVyT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5BcHBseVJhbmdlRmlsdGVyO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG5cblxuICAgIGlmIChmaWx0ZXJPcHRpb25zLm1pbikge1xuICAgICAgbGV0IG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgaWYgKGZpbHRlck9wdGlvbnMubWluIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBtaW4gPSBQYXJhbS5zZXJpYWxpemVEYXRlRm9yUGxhdGZvcm0oZmlsdGVyT3B0aW9ucy5taW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluID0gZmlsdGVyT3B0aW9ucy5taW47XG4gICAgICB9XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTWluXSA9IG1pbjtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5tYXgpIHtcbiAgICAgIGxldCBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGlmIChmaWx0ZXJPcHRpb25zLm1heCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgbWF4ID0gUGFyYW0uc2VyaWFsaXplRGF0ZUZvclBsYXRmb3JtKGZpbHRlck9wdGlvbnMubWF4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heCA9IGZpbHRlck9wdGlvbnMubWF4O1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWx0ZXJSYW5nZU1heF0gPSBtYXg7XG4gICAgfVxuXG4gICAgLy8gVGhlIG51bGwgb3B0aW9uIGlzIHVzZWQgd2l0aCBtaW4rbWF4IGZvciAnaW5jbHVkZS1yYW5nZScgb3IgJ2luY2x1ZGUtcmFuZ2Utb3ItbnVsbCdcbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5udWxsT3B0aW9uKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpbHRlclJhbmdlTnVsbE9wdGlvbl0gPSBFeHRlcm5hbEVudW1Db252ZXJ0ZXIubnVsbE9wdGlvbnMuY29udmVydChmaWx0ZXJPcHRpb25zLm51bGxPcHRpb24pO1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRmllbGROYW1lXSA9IGZpZWxkTmFtZTtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlZpc3VhbElkXSA9IHZpc3VhbElkO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlckFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCwgZmllbGROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuQ2xlYXJGaWx0ZXI7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLkZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPHN0cmluZz4ocmVzcG9zbmUgPT4ge1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJzQXN5bmModmlzdWFsSWQ6IFZpc3VhbElkKTogUHJvbWlzZTxBcnJheTxDb250cmFjdC5GaWx0ZXI+PiB7XG4gICAgY29uc3QgdmVyYiA9IFZlcmJJZC5HZXRGaWx0ZXJzO1xuICAgIGxldCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHt9O1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuVmlzdWFsSWRdID0gdmlzdWFsSWQ7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPEFycmF5PENvbnRyYWN0LkZpbHRlcj4+KHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCBmaWx0ZXJzID0gcmVzcG9uc2UucmVzdWx0IGFzIEFycmF5PEludGVybmFsQ29udHJhY3QuRmlsdGVyPjtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnREb21haW5GaWx0ZXJzKGZpbHRlcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENhdGVnb3JpY2FsRG9tYWluQXN5bmMoXG4gICAgd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIGZpZWxkSWQ6IHN0cmluZyxcbiAgICBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0Q2F0ZWdvcmljYWxEb21haW47XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB7XG4gICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWVcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZElkXSA9IGZpZWxkSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Eb21haW5UeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJEb21haW5UeXBlLmNvbnZlcnQoZG9tYWluVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LkNhdGVnb3JpY2FsRG9tYWluPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9tYWluID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW47XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0Q2F0ZWdvcmljYWxEb21haW4oZG9tYWluLCBkb21haW5UeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSYW5nZURvbWFpbkFzeW5jKHdvcmtzaGVldE5hbWU6IHN0cmluZywgZmllbGRJZDogc3RyaW5nLCBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5SYW5nZURvbWFpbj4ge1xuICAgIGNvbnN0IHZlcmIgPSBWZXJiSWQuR2V0UmFuZ2VEb21haW47XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB7XG4gICAgICB3b3Jrc2hlZXQ6IHdvcmtzaGVldE5hbWVcbiAgICB9O1xuXG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5GaWVsZElkXSA9IGZpZWxkSWQ7XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5Eb21haW5UeXBlXSA9IEV4dGVybmFsRW51bUNvbnZlcnRlci5maWx0ZXJEb21haW5UeXBlLmNvbnZlcnQoZG9tYWluVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh2ZXJiLCBwYXJhbWV0ZXJzKS50aGVuPENvbnRyYWN0LlJhbmdlRG9tYWluPihyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgZG9tYWluID0gcmVzcG9uc2UucmVzdWx0IGFzIEludGVybmFsQ29udHJhY3QuUmFuZ2VEb21haW47XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRSYW5nZURvbWFpbihkb21haW4sIGRvbWFpblR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gSGVscGVyIE1ldGhvZHNcbiAgcHJpdmF0ZSBjb252ZXJ0RG9tYWluRmlsdGVycyhkb21haW5GaWx0ZXJzOiBBcnJheTxJbnRlcm5hbENvbnRyYWN0LkZpbHRlcj4pOiBBcnJheTxDb250cmFjdC5GaWx0ZXI+IHtcbiAgICBsZXQgZmlsdGVyczogQXJyYXk8Q29udHJhY3QuRmlsdGVyPiA9IFtdO1xuICAgIGRvbWFpbkZpbHRlcnMuZm9yRWFjaChkb21haW5GaWx0ZXIgPT4ge1xuICAgICAgc3dpdGNoIChkb21haW5GaWx0ZXIuZmlsdGVyVHlwZSkge1xuICAgICAgICBjYXNlIEZpbHRlclR5cGUuQ2F0ZWdvcmljYWw6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXI7XG4gICAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHRoaXMuY29udmVydENhdGVnb3JpY2FsRmlsdGVyKGZpbHRlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ2F0ZWdvcmljYWwgRmlsdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBGaWx0ZXJUeXBlLlJhbmdlOiB7XG4gICAgICAgICAgbGV0IGZpbHRlciA9IGRvbWFpbkZpbHRlciBhcyBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRSYW5nZUZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFJhbmdlIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRmlsdGVyVHlwZS5SZWxhdGl2ZURhdGU6IHtcbiAgICAgICAgICBsZXQgZmlsdGVyID0gZG9tYWluRmlsdGVyIGFzIEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyO1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzLmNvbnZlcnRSZWxhdGl2ZURhdGVGaWx0ZXIoZmlsdGVyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBSZWxhdGl2ZSBEYXRlIEZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0Q2F0ZWdvcmljYWxGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyKTogQ29udHJhY3QuQ2F0ZWdvcmljYWxGaWx0ZXIge1xuICAgIGxldCBhcHBsaWVkVmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+ID0gZG9tYWluRmlsdGVyLnZhbHVlcy5tYXAoZHYgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmFsdWUoZHYudmFsdWUsIGR2LmZvcm1hdHRlZFZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ2F0ZWdvcmljYWxGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLkNhdGVnb3JpY2FsLFxuICAgICAgYXBwbGllZFZhbHVlcyxcbiAgICAgIGRvbWFpbkZpbHRlci5pc0V4Y2x1ZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VGaWx0ZXIoZG9tYWluRmlsdGVyOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRmlsdGVyKTogQ29udHJhY3QuUmFuZ2VGaWx0ZXIge1xuICAgIGxldCBtaW5WYWx1ZTogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW5GaWx0ZXIubWluLnZhbHVlLCBkb21haW5GaWx0ZXIubWluLmZvcm1hdHRlZFZhbHVlKTtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluRmlsdGVyLm1heC52YWx1ZSwgZG9tYWluRmlsdGVyLm1heC5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUZpbHRlcihcbiAgICAgIGRvbWFpbkZpbHRlci52aXN1YWxJZC53b3Jrc2hlZXQsXG4gICAgICBkb21haW5GaWx0ZXIuZmllbGRDYXB0aW9uLFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkTmFtZSxcbiAgICAgIENvbnRyYWN0LkZpbHRlclR5cGUuUmFuZ2UsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIG1heFZhbHVlLFxuICAgICAgZG9tYWluRmlsdGVyLmluY2x1ZGVOdWxsVmFsdWVzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFJlbGF0aXZlRGF0ZUZpbHRlcihkb21haW5GaWx0ZXI6IEludGVybmFsQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyKTogQ29udHJhY3QuUmVsYXRpdmVEYXRlRmlsdGVyIHtcbiAgICBsZXQgYW5jaG9yRGF0ZVZhbHVlOiBEYXRhVmFsdWUgPSBuZXcgRGF0YVZhbHVlKGRvbWFpbkZpbHRlci5hbmNob3JEYXRlLnZhbHVlLCBkb21haW5GaWx0ZXIuYW5jaG9yRGF0ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBSZWxhdGl2ZURhdGVGaWx0ZXIoXG4gICAgICBkb21haW5GaWx0ZXIudmlzdWFsSWQud29ya3NoZWV0LFxuICAgICAgZG9tYWluRmlsdGVyLmZpZWxkQ2FwdGlvbixcbiAgICAgIGRvbWFpbkZpbHRlci5maWVsZE5hbWUsXG4gICAgICBDb250cmFjdC5GaWx0ZXJUeXBlLlJlbGF0aXZlRGF0ZSxcbiAgICAgIGFuY2hvckRhdGVWYWx1ZSxcbiAgICAgIEludGVybmFsRW51bUNvbnZlcnRlci5kYXRlU3RlcFBlcmlvZC5jb252ZXJ0KGRvbWFpbkZpbHRlci5wZXJpb2RUeXBlKSxcbiAgICAgIEludGVybmFsRW51bUNvbnZlcnRlci5kYXRlUmFuZ2VUeXBlLmNvbnZlcnQoZG9tYWluRmlsdGVyLnJhbmdlVHlwZSksXG4gICAgICBkb21haW5GaWx0ZXIucmFuZ2VOXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydENhdGVnb3JpY2FsRG9tYWluKFxuICAgIGRvbWFpbjogSW50ZXJuYWxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbixcbiAgICBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogQ29udHJhY3QuQ2F0ZWdvcmljYWxEb21haW4ge1xuICAgIGxldCB2YWx1ZXM6IEFycmF5PERhdGFWYWx1ZT4gPSBkb21haW4udmFsdWVzLm1hcCgoZG9tYWluRHYpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGRvbWFpbkR2LnZhbHVlLCBkb21haW5Edi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBDYXRlZ29yaWNhbERvbWFpbih2YWx1ZXMsIGRvbWFpblR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0UmFuZ2VEb21haW4oZG9tYWluOiBJbnRlcm5hbENvbnRyYWN0LlJhbmdlRG9tYWluLCBkb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogQ29udHJhY3QuUmFuZ2VEb21haW4ge1xuICAgIGxldCBtaW46IERhdGFWYWx1ZSA9IG5ldyBEYXRhVmFsdWUoZG9tYWluLm1pbi52YWx1ZSwgZG9tYWluLm1pbi5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgbGV0IG1heDogRGF0YVZhbHVlID0gbmV3IERhdGFWYWx1ZShkb21haW4ubWF4LnZhbHVlLCBkb21haW4ubWF4LmZvcm1hdHRlZFZhbHVlKTtcbiAgICByZXR1cm4gbmV3IFJhbmdlRG9tYWluKFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgZG9tYWluVHlwZVxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvRmlsdGVyU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gJy4uL1NlcnZpY2VzL0ZpbHRlclNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgRXJyb3JIZWxwZXJzIH0gZnJvbSAnLi4vVXRpbHMvRXJyb3JIZWxwZXJzJztcbmltcG9ydCB7IERhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvRGF0YVNvdXJjZVNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGltcGxlbWVudHMgQ29udHJhY3QuRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfd29ya3NoZWV0TmFtZTogc3RyaW5nLFxuICAgIHByb3RlY3RlZCBfZmllbGROYW1lOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIF9maWx0ZXJUeXBlOiBDb250cmFjdC5GaWx0ZXJUeXBlLFxuICAgIHByb3RlY3RlZCBfZmllbGRJZDogc3RyaW5nKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmtzaGVldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NoZWV0TmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmllbGRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWVsZElkO1xuICB9XG5cbiAgcHVibGljIGdldCBmaWx0ZXJUeXBlKCk6IENvbnRyYWN0LkZpbHRlclR5cGUge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldEZpZWxkQXN5bmMoKTogUHJvbWlzZTxDb250cmFjdC5GaWVsZD4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxEYXRhU291cmNlU2VydmljZT4oU2VydmljZU5hbWVzLkRhdGFTb3VyY2VTZXJ2aWNlKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRGaWVsZEFzeW5jKHRoaXMuX2ZpZWxkSWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWNhbEZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LkNhdGVnb3JpY2FsRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9hcHBsaWVkVmFsdWVzOiBBcnJheTxDb250cmFjdC5EYXRhVmFsdWU+LFxuICAgIHByaXZhdGUgX2lzRXhjbHVkZU1vZGU6IGJvb2xlYW4pIHtcbiAgICBzdXBlcih3b3Jrc2hlZXROYW1lLCBmaWVsZE5hbWUsIGZpbHRlclR5cGUsIGZpZWxkSWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBhcHBsaWVkVmFsdWVzKCk6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWVkVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0V4Y2x1ZGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0V4Y2x1ZGVNb2RlO1xuICB9XG5cbiAgcHVibGljIGdldERvbWFpbkFzeW5jKGRvbWFpblR5cGU/OiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTogUHJvbWlzZTxDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbj4ge1xuICAgIGlmICghZG9tYWluVHlwZSkge1xuICAgICAgZG9tYWluVHlwZSA9IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUuUmVsZXZhbnQ7XG4gICAgfVxuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlPihkb21haW5UeXBlLCBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTtcblxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxGaWx0ZXJTZXJ2aWNlPihTZXJ2aWNlTmFtZXMuRmlsdGVyKTtcbiAgICByZXR1cm4gc2VydmljZS5nZXRDYXRlZ29yaWNhbERvbWFpbkFzeW5jKHRoaXMuX3dvcmtzaGVldE5hbWUsIHRoaXMuX2ZpZWxkSWQsIGRvbWFpblR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZUZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LlJhbmdlRmlsdGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtzaGVldE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBmaWVsZElkOiBzdHJpbmcsXG4gICAgZmlsdGVyVHlwZTogQ29udHJhY3QuRmlsdGVyVHlwZSxcbiAgICBwcml2YXRlIF9taW46IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9tYXg6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9pbmNsdWRlTnVsbFZhbHVlczogYm9vbGVhbikge1xuICAgIHN1cGVyKHdvcmtzaGVldE5hbWUsIGZpZWxkTmFtZSwgZmlsdGVyVHlwZSwgZmllbGRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pblZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4VmFsdWUoKTogQ29udHJhY3QuRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgcHVibGljIGdldCBpbmNsdWRlTnVsbFZhbHVlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU51bGxWYWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RG9tYWluQXN5bmMoZG9tYWluVHlwZT86IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUpOiBQcm9taXNlPENvbnRyYWN0LlJhbmdlRG9tYWluPiB7XG4gICAgY29uc3Qgc2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPEZpbHRlclNlcnZpY2U+KFNlcnZpY2VOYW1lcy5GaWx0ZXIpO1xuICAgIGlmICghZG9tYWluVHlwZSkge1xuICAgICAgZG9tYWluVHlwZSA9IENvbnRyYWN0LkZpbHRlckRvbWFpblR5cGUuUmVsZXZhbnQ7XG4gICAgfVxuXG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeUVudW1WYWx1ZTxDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlPihkb21haW5UeXBlLCBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKTtcblxuICAgIHJldHVybiBzZXJ2aWNlLmdldFJhbmdlRG9tYWluQXN5bmModGhpcy5fd29ya3NoZWV0TmFtZSwgdGhpcy5fZmllbGRJZCwgZG9tYWluVHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbGF0aXZlRGF0ZUZpbHRlciBleHRlbmRzIEZpbHRlciBpbXBsZW1lbnRzIENvbnRyYWN0LlJlbGF0aXZlRGF0ZUZpbHRlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICB3b3Jrc2hlZXROYW1lOiBzdHJpbmcsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZmllbGRJZDogc3RyaW5nLFxuICAgIGZpbHRlclR5cGU6IENvbnRyYWN0LkZpbHRlclR5cGUsXG4gICAgcHJpdmF0ZSBfYW5jaG9yRGF0ZTogQ29udHJhY3QuRGF0YVZhbHVlLFxuICAgIHByaXZhdGUgX3BlcmlvZFR5cGU6IENvbnRyYWN0LlBlcmlvZFR5cGUsXG4gICAgcHJpdmF0ZSBfcmFuZ2VUeXBlOiBDb250cmFjdC5EYXRlUmFuZ2VUeXBlLFxuICAgIHByaXZhdGUgX3JhbmdlTjogbnVtYmVyKSB7XG4gICAgc3VwZXIod29ya3NoZWV0TmFtZSwgZmllbGROYW1lLCBmaWx0ZXJUeXBlLCBmaWVsZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYW5jaG9yRGF0ZSgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9hbmNob3JEYXRlO1xuICB9XG5cbiAgcHVibGljIGdldCBwZXJpb2RUeXBlKCk6IENvbnRyYWN0LlBlcmlvZFR5cGUge1xuICAgIHJldHVybiB0aGlzLl9wZXJpb2RUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCByYW5nZVR5cGUoKTogQ29udHJhY3QuRGF0ZVJhbmdlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFuZ2VOKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlTjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmljYWxEb21haW4gaW1wbGVtZW50cyBDb250cmFjdC5DYXRlZ29yaWNhbERvbWFpbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92YWx1ZXM6IEFycmF5PENvbnRyYWN0LkRhdGFWYWx1ZT4sXG4gICAgcHJpdmF0ZSBfZG9tYWluVHlwZTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSkge1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZXMoKTogQXJyYXk8Q29udHJhY3QuRGF0YVZhbHVlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmFuZ2VEb21haW4gaW1wbGVtZW50cyBDb250cmFjdC5SYW5nZURvbWFpbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9taW46IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9tYXg6IENvbnRyYWN0LkRhdGFWYWx1ZSxcbiAgICBwcml2YXRlIF9kb21haW5UeXBlOiBDb250cmFjdC5GaWx0ZXJEb21haW5UeXBlKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGUoKTogQ29udHJhY3QuRmlsdGVyRG9tYWluVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpblR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbigpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1heCgpOiBDb250cmFjdC5EYXRhVmFsdWUge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL01vZGVscy9GaWx0ZXJNb2RlbHMudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7XG4gIERhdGFUYWJsZSBhcyBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LFxuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlLFxuICBQYXJhbWV0ZXJJZCxcbiAgU2VsZWN0ZWRNYXJrc1RhYmxlLFxuICBVbmRlcmx5aW5nRGF0YVRhYmxlLFxuICBWZXJiSWQsXG4gIFZpc3VhbElkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IENvbHVtbiwgRGF0YVRhYmxlLCBEYXRhVmFsdWUsIE1hcmtJbmZvIH0gZnJvbSAnLi4vLi4vTW9kZWxzL0dldERhdGFNb2RlbHMnO1xuaW1wb3J0IHsgR2V0RGF0YVNlcnZpY2UsIEdldERhdGFUeXBlIH0gZnJvbSAnLi4vR2V0RGF0YVNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuZXhwb3J0IGNsYXNzIEdldERhdGFTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIEdldERhdGFTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuR2V0RGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhSb3dMaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiAxMDAwMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGltaXRlZE1heFJvd3MocmVxdWVzdGVkUm93czogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCByb3dDb3VudExpbWl0ID0gdGhpcy5nZXRNYXhSb3dMaW1pdCgpICsgMTtcbiAgICByZXR1cm4gKHJlcXVlc3RlZFJvd3MgPiAwICYmIHJlcXVlc3RlZFJvd3MgPCByb3dDb3VudExpbWl0KSA/IHJlcXVlc3RlZFJvd3MgOiByb3dDb3VudExpbWl0O1xuICB9XG5cbiAgcHVibGljIGdldFVuZGVybHlpbmdEYXRhQXN5bmMoXG4gICAgdmlzdWFsSWQ6IFZpc3VhbElkLFxuICAgIGdldFR5cGU6IEdldERhdGFUeXBlLFxuICAgIGlnbm9yZUFsaWFzZXM6IGJvb2xlYW4sXG4gICAgaWdub3JlU2VsZWN0aW9uOiBib29sZWFuLFxuICAgIGluY2x1ZGVBbGxDb2x1bW5zOiBib29sZWFuLFxuICAgIG1heFJvd3M6IG51bWJlcik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgLy8gQ3JlYXRlIGFsbCBvZiBvdXIgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHZlcmIgPSBnZXRUeXBlID09PSBHZXREYXRhVHlwZS5TdW1tYXJ5ID8gVmVyYklkLkdldERhdGFTdW1tYXJ5RGF0YSA6IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YTtcbiAgICBjb25zdCByZXF1ZXN0TWF4Um93cyA9IHZlcmIgPT09IFZlcmJJZC5HZXRVbmRlcmx5aW5nRGF0YSA/IHRoaXMuZ2V0TGltaXRlZE1heFJvd3MobWF4Um93cykgOiBtYXhSb3dzO1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge307XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5WaXN1YWxJZF0gPSB2aXN1YWxJZDtcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdID0gaWdub3JlQWxpYXNlcztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLklnbm9yZVNlbGVjdGlvbl0gPSBpZ25vcmVTZWxlY3Rpb247XG4gICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5JbmNsdWRlQWxsQ29sdW1uc10gPSBpbmNsdWRlQWxsQ29sdW1ucztcbiAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLk1heFJvd3NdID0gcmVxdWVzdE1heFJvd3M7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKHZlcmIsIHBhcmFtZXRlcnMpLnRoZW48RGF0YVRhYmxlPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgVW5kZXJseWluZ0RhdGFUYWJsZTtcbiAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhLmRhdGEsIHJlc3BvbnNlRGF0YS5pc1N1bW1hcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldFNlbGVjdGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgU2VsZWN0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEhpZ2hsaWdodGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPENvbnRyYWN0Lk1hcmtzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuVmlzdWFsSWRdOiB2aXN1YWxJZCB9O1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkdldEhpZ2hsaWdodGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48Q29udHJhY3QuTWFya3NDb2xsZWN0aW9uPihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5yZXN1bHQgYXMgSGlnaGxpZ2h0ZWRNYXJrc1RhYmxlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLmRhdGEubWFwKHRhYmxlID0+IHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZSh0YWJsZSwgdHJ1ZSkpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERhdGFTb3VyY2VEYXRhQXN5bmMoXG4gICAgZGF0YVNvdXJjZUlkOiBzdHJpbmcsXG4gICAgaWdub3JlQWxpYXNlczogYm9vbGVhbixcbiAgICBtYXhSb3dzOiBudW1iZXIsXG4gICAgY29sdW1uc1RvSW5jbHVkZTogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8RGF0YVRhYmxlPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRGF0YVNvdXJjZUlkXTogZGF0YVNvdXJjZUlkLFxuICAgICAgW1BhcmFtZXRlcklkLklnbm9yZUFsaWFzZXNdOiBpZ25vcmVBbGlhc2VzLFxuICAgICAgW1BhcmFtZXRlcklkLk1heFJvd3NdOiB0aGlzLmdldExpbWl0ZWRNYXhSb3dzKG1heFJvd3MpLFxuICAgICAgW1BhcmFtZXRlcklkLkNvbHVtbnNUb0luY2x1ZGVdOiBjb2x1bW5zVG9JbmNsdWRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5HZXREYXRhU291cmNlRGF0YSwgcGFyYW1ldGVycykudGhlbjxEYXRhVGFibGU+KHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdCBhcyBVbmRlcmx5aW5nRGF0YVRhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdHNUYWJsZShyZXNwb25zZURhdGEuZGF0YSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3NSZXN1bHRzVGFibGUocmVzcG9uc2VEYXRhOiBEYXRhVGFibGVJbnRlcm5hbENvbnRyYWN0LCBpc1N1bW1hcnk6IGJvb2xlYW4pOiBEYXRhVGFibGUge1xuICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZURhdGEuaGVhZGVycy5tYXAoaCA9PiBuZXcgQ29sdW1uKGguZmllbGRDYXB0aW9uLFxuICAgICAgaC5kYXRhVHlwZSxcbiAgICAgIGguaXNSZWZlcmVuY2VkLFxuICAgICAgaC5pbmRleCkpO1xuXG4gICAgLy8gVE9ETyBUaGlzIHNob3VsZCBiZSBjb250cm9sbGVkIGJ5IGEgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBhcGkgd2lsbCByZXNwb25kIG1hcmtzIGluZm8gb3Igbm90XG4gICAgbGV0IG1hcmtzO1xuICAgIGlmIChyZXNwb25zZURhdGEubWFya3MpIHtcbiAgICAgIG1hcmtzID0gcmVzcG9uc2VEYXRhLm1hcmtzLm1hcChoID0+IG5ldyBNYXJrSW5mbyhoLnR5cGUsXG4gICAgICAgIGguY29sb3IsXG4gICAgICAgIGgudHVwbGVJZCkpO1xuICAgIH1cblxuICAgIC8vIExpbWl0KzEgaXMgb3VyIHNlbnRpbmFsIHRoYXQgdW5kZXJseWluZyBkYXRhIGNvbnRhaW5zIG1vcmUgcm93cyB0aGFuIHVzZXIgaXMgYWxsb3dlZCB0byBmZXRjaC5cbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBzbyB3ZSBhbHdheXMgcmV0dXJuIE1heFJvd0xpbWl0XG4gICAgY29uc3QgaXNUb3RhbFJvd0NvdW50TGltaXRlZCA9IGlzU3VtbWFyeSA9PT0gZmFsc2UgJiYgcmVzcG9uc2VEYXRhLmRhdGFUYWJsZS5sZW5ndGggPT09IHRoaXMuZ2V0TWF4Um93TGltaXQoKSArIDE7XG4gICAgaWYgKGlzVG90YWxSb3dDb3VudExpbWl0ZWQpIHtcbiAgICAgIHJlc3BvbnNlRGF0YS5kYXRhVGFibGUubGVuZ3RoIC09IDE7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGUgPSByZXNwb25zZURhdGEuZGF0YVRhYmxlLm1hcChyb3cgPT4ge1xuICAgICAgcmV0dXJuIHJvdy5tYXAoY2VsbCA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0YVZhbHVlKGNlbGwudmFsdWUsIGNlbGwuZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAobWFya3MpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVRhYmxlKHRhYmxlLCBoZWFkZXJzLCB0YWJsZS5sZW5ndGgsIGlzVG90YWxSb3dDb3VudExpbWl0ZWQsIGlzU3VtbWFyeSwgbWFya3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGFUYWJsZSh0YWJsZSwgaGVhZGVycywgdGFibGUubGVuZ3RoLCBpc1RvdGFsUm93Q291bnRMaW1pdGVkLCBpc1N1bW1hcnkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL0dldERhdGFTZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IEludGVybmFsQXBpRGlzcGF0Y2hlciwgTW9kZWwsIE5vdGlmaWNhdGlvbiwgTm90aWZpY2F0aW9uSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlLCBVbnJlZ2lzdGVyRm4gfSBmcm9tICcuLi9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5cbmNsYXNzIFJlZ2lzdHJhdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWx0ZXJGbjogKG5vdGlmaWNhdGlvbk1vZGVsOiBNb2RlbCkgPT4gYm9vbGVhbixcbiAgICBwcml2YXRlIF9jYWxsYmFja0ZuOiAobm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKSA9PiB2b2lkKSB7XG4gICAgLy8gTm90aGluZyBIZXJlXG4gIH1cblxuICBwdWJsaWMgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uTW9kZWw6IE1vZGVsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckZuKG5vdGlmaWNhdGlvbk1vZGVsKSkge1xuICAgICAgdGhpcy5fY2FsbGJhY2tGbihub3RpZmljYXRpb25Nb2RlbCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9oYW5kbGVyczogeyBbbm90aWZpY2F0aW9uSWQ6IHN0cmluZ106IEFycmF5PFJlZ2lzdHJhdGlvbj4gfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNwYXRjaGVyOiBJbnRlcm5hbEFwaURpc3BhdGNoZXIpIHtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHt9O1xuICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3Rlck5vdGlmaWNhdGlvbkhhbmRsZXIodGhpcy5vbk5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoaWQ6IE5vdGlmaWNhdGlvbklkLCBmaWx0ZXJGbjogKG1vZGVsOiBNb2RlbCkgPT4gYm9vbGVhbiwgaGFuZGxlcjogKG1vZGVsOiBNb2RlbCkgPT4gdm9pZCk6IFVucmVnaXN0ZXJGbiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tpZF0gfHwgbmV3IEFycmF5PFJlZ2lzdHJhdGlvbj4oKTtcbiAgICBjb25zdCByZWdpc3RyYXRpb24gPSBuZXcgUmVnaXN0cmF0aW9uKGZpbHRlckZuLCBoYW5kbGVyKTtcbiAgICBoYW5kbGVycy5wdXNoKHJlZ2lzdHJhdGlvbik7XG4gICAgdGhpcy5faGFuZGxlcnNbaWRdID0gaGFuZGxlcnM7XG4gICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlUmVnaXN0cmF0aW9uKGlkLCByZWdpc3RyYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUoaWQ6IE5vdGlmaWNhdGlvbklkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLmhhc093blByb3BlcnR5KGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ob3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzSGFuZGxlcnNGb3JOb3RpZmljYXRpb25UeXBlKG5vdGlmaWNhdGlvbi5ub3RpZmljYXRpb25JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHbyB0aHJvdWdoIGFuZCBjaGVjayBmb3IgYWxsIHRoZSBoYW5kbGVycyBvZiB0aGlzIHBhcnRpY3VsYXIgbm90aWZpY2F0aW9uXG4gICAgdGhpcy5faGFuZGxlcnNbbm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbklkXS5mb3JFYWNoKGggPT4gaC5vbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVSZWdpc3RyYXRpb24oaWQ6IE5vdGlmaWNhdGlvbklkLCByZWdpc3RyYXRpb246IFJlZ2lzdHJhdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNIYW5kbGVyc0Zvck5vdGlmaWNhdGlvblR5cGUoaWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlcnNbaWRdID0gdGhpcy5faGFuZGxlcnNbaWRdLmZpbHRlcihyZWcgPT4gcmVnICE9PSByZWdpc3RyYXRpb24pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9TZXJ2aWNlcy9pbXBsL05vdGlmaWNhdGlvblNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7XG4gIEV4ZWN1dGVQYXJhbWV0ZXJzLFxuICBNb2RlbCxcbiAgUGFyYW1ldGVySWQsXG4gIFBhcmFtZXRlckluZm8sXG4gIFNoZWV0UGF0aCxcbiAgVmVyYklkLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuL1NlcnZpY2VJbXBsQmFzZSc7XG5cbmltcG9ydCB7IFBhcmFtZXRlckltcGwgfSBmcm9tICcuLi8uLi9JbXBsL1BhcmFtZXRlckltcGwnO1xuaW1wb3J0IHsgUGFyYW1ldGVyIH0gZnJvbSAnLi4vLi4vUGFyYW1ldGVyJztcbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZVJlZ2lzdHJ5JztcblxuaW1wb3J0IHsgVGFibGVhdUVycm9yIH0gZnJvbSAnLi4vLi4vVGFibGVhdUVycm9yJztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcnNTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFBhcmFtZXRlcnNTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuUGFyYW1ldGVycztcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJzRm9yU2hlZXRBc3luYyhzaGVldFBhdGg6IFNoZWV0UGF0aCwgc2hlZXQ6IENvbnRyYWN0LlNoZWV0KTogUHJvbWlzZTxBcnJheTxQYXJhbWV0ZXI+PiB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5TaGVldFBhdGhdOiBzaGVldFBhdGhcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuR2V0UGFyYW1ldGVyc0ZvclNoZWV0LCBwYXJhbWV0ZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFRPRE8gLSBDaGVjayBmb3IgZXJyb3JcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIEFycmF5PFBhcmFtZXRlckluZm8+O1xuICAgICAgcmV0dXJuIHJlc3VsdC5tYXAocGFyYW1ldGVySW5mbyA9PiB7XG4gICAgICAgIGNvbnN0IGltcGwgPSBuZXcgUGFyYW1ldGVySW1wbChwYXJhbWV0ZXJJbmZvKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhbWV0ZXIoaW1wbCwgc2hlZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlUGFyYW1ldGVyVmFsdWVBc3luYyhmaWVsZE5hbWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZyk6IFByb21pc2U8UGFyYW1ldGVySW5mbz4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuUGFyYW1ldGVyRmllbGROYW1lXTogZmllbGROYW1lLFxuICAgICAgW1BhcmFtZXRlcklkLlBhcmFtZXRlclZhbHVlXTogbmV3VmFsdWVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuQ2hhbmdlUGFyYW1ldGVyVmFsdWUsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0IGFzIFBhcmFtZXRlckluZm87XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJCeU5hbWVBc3luYyhuYW1lOiBzdHJpbmcsIHNoZWV0OiBDb250cmFjdC5TaGVldCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFBhcmFtZXRlckFzeW5jKHNoZWV0LCBuYW1lLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgcHVibGljIGZpbmRQYXJhbWV0ZXJCeUdsb2JhbEZpZWxkTmFtZUFzeW5jKGZpZWxkTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpOiBQcm9taXNlPFBhcmFtZXRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRQYXJhbWV0ZXJBc3luYyhzaGVldCwgdW5kZWZpbmVkLCBmaWVsZE5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGFyYW1ldGVyQXN5bmMoXG4gICAgc2hlZXQ6IENvbnRyYWN0LlNoZWV0LFxuICAgIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IFByb21pc2U8UGFyYW1ldGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgcGFyYW1ldGVyczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7fTtcbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlBhcmFtZXRlckNhcHRpb25dID0gbmFtZTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlBhcmFtZXRlckZpZWxkTmFtZV0gPSBmaWVsZE5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnbmFtZSBvciBmaWVsZE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0byBmaW5kIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkZpbmRQYXJhbWV0ZXIsIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2VPZlBhcmFtZXRlckluZm8gPSAob2JqZWN0OiBNb2RlbCk6IG9iamVjdCBpcyBQYXJhbWV0ZXJJbmZvID0+IHtcbiAgICAgICAgcmV0dXJuICdmaWVsZE5hbWUnIGluIG9iamVjdDtcbiAgICAgIH07XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdG8gc2VlIGlmIHdlIGdvdCBhIHZhbGlkIHJlc3BvbnNlIGJhY2sgYWdhaW5cbiAgICAgIGlmIChpbnN0YW5jZU9mUGFyYW1ldGVySW5mbyhyZXNwb25zZS5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBQYXJhbWV0ZXJJbmZvO1xuICAgICAgICBjb25zdCBpbXBsID0gbmV3IFBhcmFtZXRlckltcGwocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhbWV0ZXIoaW1wbCwgc2hlZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvU2VydmljZXMvaW1wbC9QYXJhbWV0ZXJzU2VydmljZUltcGwudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9TaGFyZWRBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbklkLCBQYXJhbWV0ZXJJbmZvIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgSW50ZXJuYWxUb0V4dGVybmFsRW51bU1hcHBpbmdzIH0gZnJvbSAnLi4vRW51bU1hcHBpbmdzL0ludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9FdmVudHMvUGFyYW1ldGVyQ2hhbmdlZEV2ZW50JztcbmltcG9ydCB7IERhdGFWYWx1ZSB9IGZyb20gJy4uL01vZGVscy9HZXREYXRhTW9kZWxzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9Ob3RpZmljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuaW1wb3J0IHsgU2luZ2xlRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vU2luZ2xlRXZlbnRNYW5hZ2VyJztcbmltcG9ydCB7IFNpbmdsZUV2ZW50TWFuYWdlckltcGwgfSBmcm9tICcuL1NpbmdsZUV2ZW50TWFuYWdlckltcGwnO1xuXG5pbXBvcnQgeyBFcnJvckhlbHBlcnMgfSBmcm9tICcuLi9VdGlscy9FcnJvckhlbHBlcnMnO1xuaW1wb3J0IHsgUGFyYW0gfSBmcm9tICcuLi9VdGlscy9QYXJhbSc7XG5cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJJbXBsIHtcbiAgcHJpdmF0ZSBfYWxsb3dhYmxlVmFsdWVzOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbjtcbiAgcHJpdmF0ZSBfZ2xvYmFsRmllbGROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm87XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm8pIHtcbiAgICB0aGlzLnNldFBhcmFtZXRlckluZm8ocGFyYW1ldGVySW5mbyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVySW5mby5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50VmFsdWUoKTogRGF0YVZhbHVlIHtcbiAgICByZXR1cm4gbmV3IERhdGFWYWx1ZSh0aGlzLl9wYXJhbWV0ZXJJbmZvLmN1cnJlbnRWYWx1ZS52YWx1ZSwgdGhpcy5fcGFyYW1ldGVySW5mby5jdXJyZW50VmFsdWUuZm9ybWF0dGVkVmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXRhVHlwZSgpOiBDb250cmFjdC5EYXRhVHlwZSB7XG4gICAgcmV0dXJuIEludGVybmFsVG9FeHRlcm5hbEVudW1NYXBwaW5ncy5kYXRhVHlwZS5jb252ZXJ0KHRoaXMuX3BhcmFtZXRlckluZm8uZGF0YVR5cGUpO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxGaWVsZE5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbG93YWJsZVZhbHVlcygpOiBDb250cmFjdC5QYXJhbWV0ZXJEb21haW5SZXN0cmljdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93YWJsZVZhbHVlcztcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VWYWx1ZUFzeW5jKG5ld1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZSk6IFByb21pc2U8RGF0YVZhbHVlPiB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihuZXdWYWx1ZSwgJ25ld1ZhbHVlJyk7XG5cbiAgICBsZXQgY29lcmNlZFZhbHVlID0gUGFyYW0uc2VyaWFsaXplUGFyYW10ZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgY29uc3QgcGFyYW1ldGVyc1NlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBwYXJhbWV0ZXJzU2VydmljZS5jaGFuZ2VQYXJhbWV0ZXJWYWx1ZUFzeW5jKHRoaXMuX2dsb2JhbEZpZWxkTmFtZSwgY29lcmNlZFZhbHVlKS50aGVuKHBhcmFtZXRlckluZm8gPT4ge1xuICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJJbmZvKHBhcmFtZXRlckluZm8pO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2hpY2ggZ29lcyB0aHJvdWdoIGFuZCByZWdpc3RlcnMgZWFjaCBldmVudCB0eXBlIHRoaXMgaW1wbCBrbm93cyBhYm91dFxuICAgKiB3aXRoIHRoZSBOb3RpZmljYXRpb25TZXJ2aWNlLiBJdCByZXR1cm5zIGFuIGFycmF5IG9mIFNpbmdsZUV2ZW50TWFuYWdlciBvYmplY3RzIHdoaWNoXG4gICAqIGNhbiB0aGVuIGJlIHBhc3NlZCB0byBhbiBFdmVudExpc3RlbmVyTWFuYWdlciB0byBoYW5kbGUgdXNlciByZWdpc3RyYXRpb24gLyB1bnJlZ2lzdHJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHNoZWV0IFRoZSBzaGVldCBvYmplY3Qgd2hpY2ggd2lsbCBiZSBpbmNsdWRlZCB3aXRoIHRoZSBldmVudCBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+fSBDb2xsZWN0aW9uIG9mIGV2ZW50IG1hbmFnZXJzIHRvIHBhc3MgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplRXZlbnRzKHNoZWV0OiBDb250cmFjdC5TaGVldCk6IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4ge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlJbnRlcm5hbFZhbHVlKHNoZWV0LCAnc2hlZXQnKTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgQXJyYXk8U2luZ2xlRXZlbnRNYW5hZ2VyPigpO1xuICAgIGxldCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIG5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIHRoaXMgc2VydmljZSByZWdpc3RlcmVkLCBqdXN0IHJldHVyblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbGwgb2YgdGhlIGV2ZW50IG1hbmFnZXJzIHdlJ2xsIG5lZWQgKG9uZSBmb3IgZWFjaCBldmVudCB0eXBlKVxuICAgIGNvbnN0IHBhcmFtZXRlckV2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8UGFyYW1ldGVyQ2hhbmdlZEV2ZW50PihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlBhcmFtZXRlckNoYW5nZWQpO1xuICAgIG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLlBhcmFtZXRlckNoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgY29uc3QgZmllbGROYW1lID0gbW9kZWwgYXMgc3RyaW5nO1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZSA9PT0gdGhpcy5fZ2xvYmFsRmllbGROYW1lO1xuICAgIH0sIChmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcGFyYW1ldGVyRXZlbnQudHJpZ2dlckV2ZW50KCgpID0+IG5ldyBQYXJhbWV0ZXJDaGFuZ2VkRXZlbnQoZmllbGROYW1lLCBzaGVldCkpO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0cy5wdXNoKHBhcmFtZXRlckV2ZW50KTtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYXJhbWV0ZXJJbmZvKHBhcmFtZXRlckluZm86IFBhcmFtZXRlckluZm8pOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJJbmZvID0gcGFyYW1ldGVySW5mbztcbiAgICB0aGlzLl9nbG9iYWxGaWVsZE5hbWUgPSBwYXJhbWV0ZXJJbmZvLmZpZWxkTmFtZTtcblxuICAgIGNvbnN0IHR5cGUgPSBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuYWxsb3dhYmxlVmFsdWVzLmNvbnZlcnQocGFyYW1ldGVySW5mby5hbGxvd2FibGVWYWx1ZXNUeXBlKTtcbiAgICBsZXQgbGlzdFZhbHVlczogQXJyYXk8RGF0YVZhbHVlPiB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWluVmFsdWU6IERhdGFWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBsZXQgbWF4VmFsdWU6IERhdGFWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgICBsZXQgc3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBsZXQgZGF0ZVN0ZXBQZXJpb2Q6IENvbnRyYWN0LlBlcmlvZFR5cGUgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZSA9PT0gQ29udHJhY3QuUGFyYW1ldGVyVmFsdWVUeXBlLkxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHBhcmFtZXRlckluZm8uYWxsb3dhYmxlVmFsdWVzIHx8IFtdO1xuICAgICAgbGlzdFZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+IG5ldyBEYXRhVmFsdWUodmFsLnZhbHVlLCB2YWwuZm9ybWF0dGVkVmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IENvbnRyYWN0LlBhcmFtZXRlclZhbHVlVHlwZS5SYW5nZSkge1xuICAgICAgbWluVmFsdWUgPSBwYXJhbWV0ZXJJbmZvLm1pblZhbHVlICYmIG5ldyBEYXRhVmFsdWUocGFyYW1ldGVySW5mby5taW5WYWx1ZS52YWx1ZSwgcGFyYW1ldGVySW5mby5taW5WYWx1ZS5mb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICBtYXhWYWx1ZSA9IHBhcmFtZXRlckluZm8ubWF4VmFsdWUgJiYgbmV3IERhdGFWYWx1ZShwYXJhbWV0ZXJJbmZvLm1heFZhbHVlLnZhbHVlLCBwYXJhbWV0ZXJJbmZvLm1heFZhbHVlLmZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIHN0ZXBTaXplID0gcGFyYW1ldGVySW5mby5zdGVwU2l6ZTtcbiAgICAgIGRhdGVTdGVwUGVyaW9kID0gcGFyYW1ldGVySW5mby5kYXRlU3RlcFBlcmlvZCAmJlxuICAgICAgICBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MuZGF0ZVN0ZXBQZXJpb2QuY29udmVydChwYXJhbWV0ZXJJbmZvLmRhdGVTdGVwUGVyaW9kKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hbGxvd2FibGVWYWx1ZXMgPSB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgYWxsb3dhYmxlVmFsdWVzOiBsaXN0VmFsdWVzLFxuICAgICAgbWluVmFsdWU6IG1pblZhbHVlLFxuICAgICAgbWF4VmFsdWU6IG1heFZhbHVlLFxuICAgICAgc3RlcFNpemU6IHN0ZXBTaXplLFxuICAgICAgZGF0ZVN0ZXBQZXJpb2Q6IGRhdGVTdGVwUGVyaW9kXG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvSW1wbC9QYXJhbWV0ZXJJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vU2hhcmVkQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IFBhcmFtZXRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vU2VydmljZXMvUGFyYW1ldGVyc1NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5LCBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi9UYWJsZWF1RXJyb3InO1xuaW1wb3J0IHsgVGFibGVhdVNoZWV0RXZlbnQgfSBmcm9tICcuL1RhYmxlYXVTaGVldEV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckNoYW5nZWRFdmVudCBleHRlbmRzIFRhYmxlYXVTaGVldEV2ZW50IGltcGxlbWVudHMgQ29udHJhY3QuUGFyYW1ldGVyQ2hhbmdlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dsb2JhbEZpZWxkTmFtZTogc3RyaW5nLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcihDb250cmFjdC5UYWJsZWF1RXZlbnRUeXBlLlBhcmFtZXRlckNoYW5nZWQsIHNoZWV0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJhbWV0ZXJBc3luYygpOiBQcm9taXNlPENvbnRyYWN0LlBhcmFtZXRlcj4ge1xuICAgIC8vIENhbGwgZG93biB0byBvdXIgc2VydmljZSB0byBnZXQgdGhlIHBhcmFtZXRlciBiYWNrIHZpYSBpdHMgZmllbGQgbmFtZVxuICAgIGNvbnN0IHNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxQYXJhbWV0ZXJzU2VydmljZT4oU2VydmljZU5hbWVzLlBhcmFtZXRlcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlLmZpbmRQYXJhbWV0ZXJCeUdsb2JhbEZpZWxkTmFtZUFzeW5jKHRoaXMuX2dsb2JhbEZpZWxkTmFtZSwgdGhpcy5zaGVldCkudGhlbihwYXJhbWV0ZXIgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5NaXNzaW5nUGFyYW1ldGVyLCBgQ2Fubm90IGZpbmQgcGFyYW1ldGVyOiAke3RoaXMuX2dsb2JhbEZpZWxkTmFtZX1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9BcGlTaGFyZWQvRXZlbnRzL1BhcmFtZXRlckNoYW5nZWRFdmVudC50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vRXZlbnRMaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVySW1wbCB9IGZyb20gJy4vSW1wbC9QYXJhbWV0ZXJJbXBsJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgUGFyYW1ldGVyIGNvbnRyYWN0LiBDYWxscyBkb3duIHRvIHRoZSBpbXBsXG4gKiBjbGFzcyBmb3IgYWxtb3N0IGFsbCBvZiB0aGUgd29yayBpdCBkb2VzLlxuICovXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyIGV4dGVuZHMgRXZlbnRMaXN0ZW5lck1hbmFnZXIgaW1wbGVtZW50cyBDb250cmFjdC5QYXJhbWV0ZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbWV0ZXJJbXBsOiBQYXJhbWV0ZXJJbXBsLCBzaGVldDogQ29udHJhY3QuU2hlZXQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBvdXIgZXZlbnQgaGFuZGxpbmcgZm9yIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhcmFtZXRlckltcGwuaW5pdGlhbGl6ZUV2ZW50cyhzaGVldCkuZm9yRWFjaChlID0+IHRoaXMuYWRkTmV3RXZlbnRUeXBlKGUpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudFZhbHVlKCk6IENvbnRyYWN0LkRhdGFWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW1wbC5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGFUeXBlKCk6IENvbnRyYWN0LkRhdGFUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbXBsLmRhdGFUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGxvd2FibGVWYWx1ZXMoKTogQ29udHJhY3QuUGFyYW1ldGVyRG9tYWluUmVzdHJpY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuYWxsb3dhYmxlVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuaWQ7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlVmFsdWVBc3luYyhuZXdWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IERhdGUpOiBQcm9taXNlPENvbnRyYWN0LkRhdGFWYWx1ZT4ge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckltcGwuY2hhbmdlVmFsdWVBc3luYyhuZXdWYWx1ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1BhcmFtZXRlci50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgUGFyYW1ldGVySWQsXG4gIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLFxuICBTZWxlY3Rpb25VcGRhdGVUeXBlIGFzIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbCxcbiAgVmVyYklkLFxuICBWaXN1YWxJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQge1xuICBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbCxcbiAgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWwsXG4gIFJhbmdlU2VsZWN0aW9uTW9kZWwsXG4gIFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcixcbiAgVHVwbGVTZWxlY3Rpb25Nb2RlbCxcbiAgVmFsdWVTZWxlY3Rpb25Nb2RlbFxufSBmcm9tICcuLi8uLi9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzJztcblxuaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi9TZXJ2aWNlSW1wbEJhc2UnO1xuXG5pbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vU2VsZWN0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9TZXJ2aWNlUmVnaXN0cnknO1xuXG5pbXBvcnQgeyBUYWJsZWF1RXJyb3IgfSBmcm9tICcuLi8uLi9UYWJsZWF1RXJyb3InO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBTZWxlY3Rpb25TZXJ2aWNlIHtcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBTZXJ2aWNlTmFtZXMuU2VsZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjbGVhciBhbGwgdGhlIHNlbGVjdGVkIG1hcmtzIGZvciB0aGUgZ2l2ZW4gd29ya3NoZWV0LlxuICAgKlxuICAgKiBAcGFyYW0gdmlzdWFsSWRcbiAgICovXG4gIHB1YmxpYyBjbGVhclNlbGVjdGVkTWFya3NBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHsgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5DbGVhclNlbGVjdGVkTWFya3MsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuOyAvLyBFeHBlY3RpbmcgYW4gZW1wdHkgbW9kZWwgYW5kIGhlbmNlIHRoZSB2b2lkIHJlc3BvbnNlLlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzZWxlY3QgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB2aXN1YWxJZFxuICAgKiBAcGFyYW0gc2VsZWN0aW9uQ3JpdGVyaWFcbiAgICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RNYXJrc0J5VmFsdWVBc3luYyh2aXN1YWxJZDogVmlzdWFsSWQsXG4gICAgc2VsZWN0aW9uQ3JpdGVyaWFzOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVXBkYXRlVHlwZTogQ29udHJhY3QuU2VsZWN0aW9uVXBkYXRlVHlwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChzZWxlY3Rpb25Dcml0ZXJpYXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgJ1NlbGVjdGlvbiBjcml0ZXJpYSBtaXNzaW5nIGZvciBzZWxlY3RpbmcgbWFya3MgYnkgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25UeXBlOiBzdHJpbmcgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uVXBkYXRlVHlwZShzZWxlY3Rpb25VcGRhdGVUeXBlKTtcbiAgICBsZXQgc2VsZWN0aW9uQ3JpdGVyaWFUeXBlOiBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUgPSB0aGlzLnZhbGlkYXRlU2VsZWN0aW9uQ3JpdGVyaWEoc2VsZWN0aW9uQ3JpdGVyaWFzWzBdKTtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IHRoaXMucGFyc2VTZWxlY3Rpb25NYXJrcyhzZWxlY3Rpb25Dcml0ZXJpYXMsIHNlbGVjdGlvbkNyaXRlcmlhVHlwZSk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzOiBFeGVjdXRlUGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5WaXN1YWxJZF06IHZpc3VhbElkLFxuICAgICAgW1BhcmFtZXRlcklkLlNlbGVjdGlvblVwZGF0ZVR5cGVdOiBzZWxlY3Rpb25UeXBlXG4gICAgfTtcblxuICAgIHN3aXRjaCAoc2VsZWN0aW9uQ3JpdGVyaWFUeXBlKSB7XG4gICAgICBjYXNlIFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlOiB7XG4gICAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuSGllclZhbFNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5oaWVyTW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuUmFuZ2VUeXBlOiB7XG4gICAgICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuUXVhbnRSYW5nZVNlbGVjdGlvbk1vZGVsc10gPSBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5xdWFudE1vZGVsQXJyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkRpbWVuc2lvblR5cGU6IHtcbiAgICAgICAgcGFyYW1ldGVyc1tQYXJhbWV0ZXJJZC5EaW1WYWxTZWxlY3Rpb25Nb2RlbHNdID0gc2VsZWN0aW9uTW9kZWxDb250YWluZXIuZGltTW9kZWxBcnI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLlNlbGVjdEJ5VmFsdWUsIHBhcmFtZXRlcnMpLnRoZW48dm9pZD4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRXhwZWN0aW5nIGFuIGVtcHR5IG1vZGVsIGFuZCBoZW5jZSB0aGUgdm9pZCByZXNwb25zZS5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIFRPRE8gSW52ZXN0aWdhdGUgdGhlIGVycm9yIHJlc3BvbnNlIHdpdGggbXVsdGlwbGUgb3V0cHV0IHBhcmFtcyBhbmQgdGhyb3cgZXJyb3IgYWNjb3JkaW5nbHkuXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAqIE1ldGhvZCB0byBzZWxlY3QgbWFya3MgZm9yIHRoZSBnaXZlbiB3b3Jrc2hlZXQuXG4gKlxuICogQHBhcmFtIHZpc3VhbElkXG4gKiBAcGFyYW0gTWFya0luZm9cbiAqIEBwYXJhbSBzZWxlY3Rpb25VcGRhdGVUeXBlXG4gKi9cbiAgcHVibGljIHNlbGVjdE1hcmtzQnlJZEFzeW5jKHZpc3VhbElkOiBWaXN1YWxJZCxcbiAgICBtYXJrczogQXJyYXk8Q29udHJhY3QuTWFya0luZm8+LFxuICAgIHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAobWFya3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuSW52YWxpZFBhcmFtZXRlciwgJ01hcmtzIGluZm8gbWlzc2luZyBmb3Igc2VsZWN0aW5nIG1hcmtzIGJ5IElkJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uVHlwZTogc3RyaW5nID0gdGhpcy52YWxpZGF0ZVNlbGVjdGlvblVwZGF0ZVR5cGUoc2VsZWN0aW9uVXBkYXRlVHlwZSk7XG4gICAgbGV0IHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyOiBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIgPSB0aGlzLnBhcnNlU2VsZWN0aW9uSWRzKG1hcmtzKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLlZpc3VhbElkXTogdmlzdWFsSWQsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uVXBkYXRlVHlwZV06IHNlbGVjdGlvblR5cGUsXG4gICAgICBbUGFyYW1ldGVySWQuU2VsZWN0aW9uXTogc2VsZWN0aW9uTW9kZWxDb250YWluZXIuc2VsZWN0aW9uXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TZWxlY3RCeVZhbHVlLCBwYXJhbWV0ZXJzKS50aGVuPHZvaWQ+KHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEV4cGVjdGluZyBhbiBlbXB0eSBtb2RlbCBhbmQgaGVuY2UgdGhlIHZvaWQgcmVzcG9uc2UuXG4gICAgICByZXR1cm47XG4gICAgICAvLyBUT0RPIEludmVzdGlnYXRlIHRoZSBlcnJvciByZXNwb25zZSB3aXRoIG11bHRpcGxlIG91dHB1dCBwYXJhbXMgYW5kIHRocm93IGVycm9yIGFjY29yZGluZ2x5LlxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmVwYXJlIHRoZSBwcmVzIG1vZGVscyBmb3Igc2VsZWN0aW9uIGJ5IE1hcmtzSW5mb1xuICAgKiBAcGFyYW0gbWFya3NcbiAgICovXG4gIHByaXZhdGUgcGFyc2VTZWxlY3Rpb25JZHMobWFya3M6IEFycmF5PENvbnRyYWN0Lk1hcmtJbmZvPik6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciB7XG4gICAgbGV0IGlkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGxldCBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lcjogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyID0gbmV3IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0dXBsZUlkOiBOdW1iZXIgfCB1bmRlZmluZWQgPSBtYXJrc1tpXS50dXBsZUlkO1xuICAgICAgaWYgKHR1cGxlSWQgIT09IHVuZGVmaW5lZCAmJiB0dXBsZUlkICE9PSBudWxsKSB7IC8vIElmIHR1cGxlIGlkIGlzIHByb3ZpZGVkIHVzZSB0aGF0IGluc3RlYWQgb2YgcGFpclxuICAgICAgICBpZHMucHVzaCh0dXBsZUlkLnRvU3RyaW5nKCkpOyAvLyBjb2xsZWN0IHRoZSB0dXBsZSBpZHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAndHVwbGVJZCBwYXJzaW5nIGVycm9yJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpZHMubGVuZ3RoICE9PSAwKSB7IC8vIHR1cGxlIGlkcyBiYXNlZCBzZWxlY3Rpb25cbiAgICAgIGxldCB0dXBsZVNlbGVjdGlvbk1vZGVsOiBUdXBsZVNlbGVjdGlvbk1vZGVsID0gbmV3IFR1cGxlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICAgIHR1cGxlU2VsZWN0aW9uTW9kZWwuc2VsZWN0aW9uVHlwZSA9ICd0dXBsZXMnO1xuICAgICAgdHVwbGVTZWxlY3Rpb25Nb2RlbC5vYmplY3RJZHMgPSBpZHM7XG4gICAgICBzZWxlY3Rpb25Nb2RlbENvbnRhaW5lci5zZWxlY3Rpb24gPSB0dXBsZVNlbGVjdGlvbk1vZGVsO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uTW9kZWxDb250YWluZXI7XG4gIH1cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcmVwYXJlIHRoZSBwcmVzIG1vZGVscyBmb3Igc2VsZWN0aW9uIGJ5IHZhbHVlcy5cbiAgICpcbiAgICogU3VwcG9ydHMgMyB0eXBlcyBmb3Igc2VsZWN0aW9uOlxuICAgKiAxKSBoaWVyYXJjaGljYWwgdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqIDIpIHJhbmdlIHZhbHVlIGJhc2VkIHNlbGVjdGlvblxuICAgKiAzKSBEaW1lbnNpb24gdmFsdWUgYmFzZWQgc2VsZWN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBtYXJrc1xuICAgKiBAcGFyYW0gaGllck1vZGVsQXJyXG4gICAqIEBwYXJhbSBkaW1Nb2RlbEFyclxuICAgKiBAcGFyYW0gcXVhbnRNb2RlbEFyclxuICAgKiBAcGFyYW0gc2VsZWN0aW9uXG4gICAqL1xuICBwcml2YXRlIHBhcnNlU2VsZWN0aW9uTWFya3Moc2VsZWN0aW9uQ3JpdGVyaWFzOiBBcnJheTxDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYT4sXG4gICAgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uQ3JpdGVyaWFUeXBlKTogU2VsZWN0aW9uTW9kZWxzQ29udGFpbmVyIHtcbiAgICBsZXQgc2VsZWN0aW9uTW9kZWxDb250YWluZXI6IFNlbGVjdGlvbk1vZGVsc0NvbnRhaW5lciA9IG5ldyBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIoKTtcbiAgICBsZXQgbWl4ZWRTZWxlY3Rpb25zRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uQ3JpdGVyaWFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdCA9IHNlbGVjdGlvbkNyaXRlcmlhc1tpXTtcbiAgICAgIGlmIChzdC5maWVsZE5hbWUgJiYgKHN0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgc3QudmFsdWUgIT09IG51bGwpKSB7XG4gICAgICAgIGxldCBjYXRSZWdleCA9IG5ldyBSZWdFeHAoJyhcXFtbQS1aYS16MC05XStdKS4qJywgJ2cnKTtcbiAgICAgICAgbGV0IHJhbmdlT3B0aW9uOiBDb250cmFjdC5SYW5nZVZhbHVlID0gc3QudmFsdWUgYXMgQ29udHJhY3QuUmFuZ2VWYWx1ZTtcbiAgICAgICAgaWYgKGNhdFJlZ2V4LnRlc3Qoc3QuZmllbGROYW1lKSkgeyAvLyBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgICAgaWYgKHNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5IaWVyYXJjaGljYWxUeXBlKSB7XG4gICAgICAgICAgICBsZXQgaGllck1vZGVsOiBIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbCA9IHRoaXMuYWRkVG9QYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgc3QudmFsdWUpIGFzIEhpZXJhcmNoaWNhbFNlbGVjdGlvbk1vZGVsO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIuaGllck1vZGVsQXJyLnB1c2goaGllck1vZGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWl4ZWRTZWxlY3Rpb25zRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5taW4gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICYmIChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5tYXggIT09IHVuZGVmaW5lZCkgeyAvLyBSYW5nZSB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLlJhbmdlVHlwZSkge1xuICAgICAgICAgICAgbGV0IHF1YW50TW9kZWw6IFJhbmdlU2VsZWN0aW9uTW9kZWwgPSB0aGlzLmFkZFRvUmFuZ2VQYXJhbXNMaXN0KHN0LmZpZWxkTmFtZSwgcmFuZ2VPcHRpb24pO1xuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWxDb250YWluZXIucXVhbnRNb2RlbEFyci5wdXNoKHF1YW50TW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIERpbWVuc2lvbiB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlLkRpbWVuc2lvblR5cGUpIHtcbiAgICAgICAgICAgIGxldCBkaW1Nb2RlbDogRGltZW5zaW9uU2VsZWN0aW9uTW9kZWwgPSB0aGlzLmFkZFRvUGFyYW1zTGlzdChzdC5maWVsZE5hbWUsIHN0LnZhbHVlKSBhcyBEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbDtcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyLmRpbU1vZGVsQXJyLnB1c2goZGltTW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXhlZFNlbGVjdGlvbnNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWl4ZWRTZWxlY3Rpb25zRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoQ29udHJhY3QuRXJyb3JDb2Rlcy5JbnRlcm5hbEVycm9yLCAnU2VsZWN0aW9uIENyaXRlcmlhIHBhcnNpbmcgZXJyb3InKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGlvbk1vZGVsQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Dcml0ZXJpYXMgVmFsaWRhdGUgYW5kIGRldGVybWluZSB0aGUgc2VsZWN0aW9uIGNyaXRlcmlhcyB0eXBlLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlbGVjdGlvbkNyaXRlcmlhKHNlbGVjdGlvbkNyaXRlcmlhOiBDb250cmFjdC5TZWxlY3Rpb25Dcml0ZXJpYSk6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZSB7XG4gICAgbGV0IHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvbkNyaXRlcmlhVHlwZTtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHR5cGUgb2Ygc2VsZWN0aW9uLCB0aGlzIGNvbW1hbmQgaXMgYnkgbG9va2luZyBhdCB0aGUgZmlyc3Qgc2VsZWN0aW9uXG4gICAgbGV0IGNyaXQ6IENvbnRyYWN0LlNlbGVjdGlvbkNyaXRlcmlhID0gc2VsZWN0aW9uQ3JpdGVyaWE7XG5cbiAgICBsZXQgY2F0UmVnZXggPSBuZXcgUmVnRXhwKCcoXFxbW0EtWmEtejAtOV0rXSkuKicsICdnJyk7XG4gICAgbGV0IHJhbmdlT3B0aW9uOiBDb250cmFjdC5SYW5nZVZhbHVlID0gY3JpdC52YWx1ZSBhcyBDb250cmFjdC5SYW5nZVZhbHVlO1xuXG4gICAgaWYgKGNyaXQuZmllbGROYW1lICYmIChjcml0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgY3JpdC52YWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgIGlmIChjYXRSZWdleC50ZXN0KGNyaXQuZmllbGROYW1lKSkgeyAvLyBIaWVyYXJjaGljYWwgdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuSGllcmFyY2hpY2FsVHlwZTtcbiAgICAgIH0gZWxzZSBpZiAoKHJhbmdlT3B0aW9uIGFzIENvbnRyYWN0LlJhbmdlVmFsdWUpLm1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIChyYW5nZU9wdGlvbiBhcyBDb250cmFjdC5SYW5nZVZhbHVlKS5tYXggIT09IHVuZGVmaW5lZCkgeyAvLyBSYW5nZSB2YWx1ZSBzZWxlY3Rpb25cbiAgICAgICAgc2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvbkNyaXRlcmlhVHlwZS5SYW5nZVR5cGU7XG4gICAgICB9IGVsc2UgeyAvLyBEaW1lcnNpb24gdmFsdWUgc2VsZWN0aW9uXG4gICAgICAgIHNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25Dcml0ZXJpYVR5cGUuRGltZW5zaW9uVHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLkludGVybmFsRXJyb3IsICdTZWxlY3Rpb24gQ3JpdGVyaWEgcGFyc2luZyBlcnJvcicpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0aW9uVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdHJhbnNmb3JtIHRoZSBrZXkgdmFsdWUgcGFpciBpbnRvIHZhbHVlIGJhc2VkIHByZXMgbW9kZWwgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVTZWxlY3Rpb25Nb2RlbFxuICAgKiBAcGFyYW0gZmllbGROYW1lXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBhZGRUb1BhcmFtc0xpc3QoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBvYmplY3QpOiBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbiAgICBsZXQgdmFsdWVTZWxlY3Rpb25Nb2RlbDogVmFsdWVTZWxlY3Rpb25Nb2RlbCA9IG5ldyBWYWx1ZVNlbGVjdGlvbk1vZGVsKCk7XG4gICAgbGV0IG1hcmtWYWx1ZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBsZXQgdmFsdWVBcnI6IEFycmF5PHN0cmluZz4gPSB2YWx1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFya1ZhbHVlcy5wdXNoKHZhbHVlQXJyW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrVmFsdWVzLnB1c2godmFsdWUudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgdmFsdWVTZWxlY3Rpb25Nb2RlbC5xdWFsaWZpZWRGaWVsZENhcHRpb24gPSBmaWVsZE5hbWU7XG4gICAgdmFsdWVTZWxlY3Rpb25Nb2RlbC5zZWxlY3RWYWx1ZXMgPSBtYXJrVmFsdWVzO1xuICAgIHJldHVybiB2YWx1ZVNlbGVjdGlvbk1vZGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB0cmFuc2Zvcm0gdGhlIGtleSB2YWx1ZSBwYWlyIGludG8gcmFuZ2UgYmFzZWQgc2VsZWN0aW9uIHByZXMgbW9kZWwuXG4gICAqXG4gICAqIFRPRE86IE5lZWQgdG8gaGFuZGxlIHRoZSBwYXJzaW5nIG9mIGRhdGUgdHlwZSB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVNlbGVjdGlvbk1vZGVsXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGFkZFRvUmFuZ2VQYXJhbXNMaXN0KGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZTogQ29udHJhY3QuUmFuZ2VWYWx1ZSk6IFJhbmdlU2VsZWN0aW9uTW9kZWwge1xuICAgIGxldCByYW5nZVNlbGVjdGlvbk1vZGVsOiBSYW5nZVNlbGVjdGlvbk1vZGVsID0gbmV3IFJhbmdlU2VsZWN0aW9uTW9kZWwoKTtcbiAgICByYW5nZVNlbGVjdGlvbk1vZGVsLnF1YWxpZmllZEZpZWxkQ2FwdGlvbiA9IGZpZWxkTmFtZTtcbiAgICBpZiAodmFsdWUubWF4ICE9PSB1bmRlZmluZWQgJiYgdmFsdWUubWF4ICE9PSBudWxsKSB7XG4gICAgICByYW5nZVNlbGVjdGlvbk1vZGVsLm1heFZhbHVlID0gdmFsdWUubWF4LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5taW4gIT09IG51bGwpIHtcbiAgICAgIHJhbmdlU2VsZWN0aW9uTW9kZWwubWluVmFsdWUgPSB2YWx1ZS5taW4udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmFuZ2VTZWxlY3Rpb25Nb2RlbC5pbmNsdWRlZCA9IHRoaXMudmFsaWRhdGVOdWxsT3B0aW9uVHlwZSh2YWx1ZS5udWxsT3B0aW9uKTtcbiAgICByZXR1cm4gcmFuZ2VTZWxlY3Rpb25Nb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdmFsaWRhdGUgdGhlIHNlbGVjdGlvbiB1cGRhdGUgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdGlvblVwZGF0ZVR5cGVcbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVTZWxlY3Rpb25VcGRhdGVUeXBlKHNlbGVjdGlvblVwZGF0ZVR5cGU6IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUpOiBzdHJpbmcge1xuICAgIGlmIChzZWxlY3Rpb25VcGRhdGVUeXBlID09PSBDb250cmFjdC5TZWxlY3Rpb25VcGRhdGVUeXBlLlJlcGxhY2UpIHtcbiAgICAgIHJldHVybiBTZWxlY3Rpb25VcGRhdGVUeXBlSW50ZXJuYWwuUmVwbGFjZTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuQWRkKSB7XG4gICAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLkFkZDtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblVwZGF0ZVR5cGUgPT09IENvbnRyYWN0LlNlbGVjdGlvblVwZGF0ZVR5cGUuUmVtb3ZlKSB7XG4gICAgICByZXR1cm4gU2VsZWN0aW9uVXBkYXRlVHlwZUludGVybmFsLlJlbW92ZTtcbiAgICB9XG4gICAgcmV0dXJuIFNlbGVjdGlvblVwZGF0ZVR5cGVJbnRlcm5hbC5SZXBsYWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgaW5jbHVkZSB0eXBlIGZvciByYW5nZSBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBudWxsT3B0aW9uXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlTnVsbE9wdGlvblR5cGUobnVsbE9wdGlvbjogQ29udHJhY3QuRmlsdGVyTnVsbE9wdGlvbiB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gICAgaWYgKG51bGxPcHRpb24pIHtcbiAgICAgIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLk51bGxWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLkluY2x1ZGVOdWxsO1xuICAgICAgfSBlbHNlIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLk5vbk51bGxWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFF1YW50aXRhdGl2ZUluY2x1ZGVkVmFsdWVzLkluY2x1ZGVOb25OdWxsO1xuICAgICAgfSBlbHNlIGlmIChudWxsT3B0aW9uID09PSBDb250cmFjdC5GaWx0ZXJOdWxsT3B0aW9uLkFsbFZhbHVlcykge1xuICAgICAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZUFsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUXVhbnRpdGF0aXZlSW5jbHVkZWRWYWx1ZXMuSW5jbHVkZUFsbDtcbiAgfVxuXG59XG5cbi8qKlxuICogRW51bSBmb3IgdGhlIGRpZmZlcmVudCBzZWxlY3Rpb24gY3JpdGVyaWEgdHlwZXMuXG4gKi9cbmVudW0gU2VsZWN0aW9uQ3JpdGVyaWFUeXBlIHtcbiAgSGllcmFyY2hpY2FsVHlwZSA9IDEsXG4gIFJhbmdlVHlwZSA9IDIsXG4gIERpbWVuc2lvblR5cGUgPSAzLFxuICBUdXBsZXNUeXBlID0gNCxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvU2VsZWN0aW9uU2VydmljZUltcGwudHMiLCIvKipcbiAqIFNlbGVjdGlvbiBNb2RlbC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIHF1YWxpZmllZEZpZWxkQ2FwdGlvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIFZhbHVlIGJhc2VkIHNlbGVjdGlvbiBtb2RlbC4gTWVhbnQgZm9yIGhpZXJhcmNoaWNhbCwgcmFuZ2UgYW5kIGNhdGVnb3JpY2FsIHNlbGVjdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIGV4dGVuZHMgU2VsZWN0aW9uTW9kZWwge1xuICBwdWJsaWMgc2VsZWN0VmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG59XG5cbi8qKlxuICogSGllcmFyY2hpY2FsIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgSGllcmFyY2hpY2FsU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbn1cblxuLyoqXG4gKiBSYW5nZSBiYXNlZCB2YWx1ZSBzZWxlY3Rpb24gbW9kZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFJhbmdlU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBTZWxlY3Rpb25Nb2RlbCB7XG4gIHB1YmxpYyBtaW5WYWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgbWF4VmFsdWU6IHN0cmluZztcbiAgcHVibGljIGluY2x1ZGVkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGltZW5zaW9uIHZhbHVlIHNlbGVjdGlvbiBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBWYWx1ZVNlbGVjdGlvbk1vZGVsIHtcbn1cbi8qKlxuICogVHVwbGUgYmFzZWQgc2VsZWN0aW9uIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBUdXBsZVNlbGVjdGlvbk1vZGVsIHtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IHN0cmluZztcbiAgcHVibGljIG9iamVjdElkczogQXJyYXk8c3RyaW5nPiA9IFtdO1xufVxuXG4vKipcbiAqIENvbnRhaW5lciBjbGFzcyB0byBwb3B1bGF0ZSBhbGwgdGhlIHNlbGVjdGlvbiBtb2RlbHMgd2hlbiBwYXJzaW5nIGlucHV0XG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlbHNDb250YWluZXIge1xuICBwdWJsaWMgaGllck1vZGVsQXJyOiBBcnJheTxIaWVyYXJjaGljYWxTZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIGRpbU1vZGVsQXJyOiBBcnJheTxEaW1lbnNpb25TZWxlY3Rpb25Nb2RlbD4gPSBbXTtcbiAgcHVibGljIHF1YW50TW9kZWxBcnI6IEFycmF5PFJhbmdlU2VsZWN0aW9uTW9kZWw+ID0gW107XG4gIHB1YmxpYyBzZWxlY3Rpb246IFR1cGxlU2VsZWN0aW9uTW9kZWw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0FwaVNoYXJlZC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWxzLnRzIiwiaW1wb3J0IHsgRGFzaGJvYXJkT2JqZWN0IH0gZnJvbSAnLi4vLi4vRGFzaGJvYXJkT2JqZWN0JztcbmltcG9ydCB7IEVycm9ySGVscGVycyB9IGZyb20gJy4uLy4uL1V0aWxzL0Vycm9ySGVscGVycyc7XG5pbXBvcnQgeyBFeHRlcm5hbFRvSW50ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRXh0ZXJuYWxFbnVtQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vRW51bU1hcHBpbmdzL0V4dGVybmFsVG9JbnRlcm5hbEVudW1NYXBwaW5ncyc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJJZCwgVmVyYklkIH0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcbmltcG9ydCB7IFNlcnZpY2VJbXBsQmFzZSB9IGZyb20gJy4vU2VydmljZUltcGxCYXNlJztcbmltcG9ydCB7IFNlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VSZWdpc3RyeSc7XG5pbXBvcnQgeyBab25lU2VydmljZSB9IGZyb20gJy4uL1pvbmVTZXJ2aWNlJztcbmltcG9ydCB7IFpvbmVWaXNpYmlsaXR5VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NoYXJlZEFwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgWm9uZVNlcnZpY2VJbXBsIGV4dGVuZHMgU2VydmljZUltcGxCYXNlIGltcGxlbWVudHMgWm9uZVNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNlcnZpY2VOYW1lcy5ab25lO1xuICB9XG5cbiAgcHVibGljIHNldFZpc2liaWxpdHlBc3luYyhcbiAgICBkYXNoYm9hcmQ6IFN0cmluZyxcbiAgICBkYXNoYm9hcmRPYmplY3RzOiBBcnJheTxEYXNoYm9hcmRPYmplY3Q+LFxuICAgIHpvbmVWaXNpYmlsaXR5TWFwOiBNYXA8bnVtYmVyLCBab25lVmlzaWJpbGl0eVR5cGU+KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICBPYmplY3Qua2V5cyh6b25lVmlzaWJpbGl0eU1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBFcnJvckhlbHBlcnMudmVyaWZ5RW51bVZhbHVlPFpvbmVWaXNpYmlsaXR5VHlwZT4oem9uZVZpc2liaWxpdHlNYXBba2V5XSwgWm9uZVZpc2liaWxpdHlUeXBlKTtcbiAgICAgIEVycm9ySGVscGVycy52ZXJpZnlab25lSXNWYWxpZChkYXNoYm9hcmRPYmplY3RzLCBOdW1iZXIucGFyc2VJbnQoa2V5LCAxMCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIFtQYXJhbWV0ZXJJZC5EYXNoYm9hcmRdOiBkYXNoYm9hcmQsXG4gICAgICBbUGFyYW1ldGVySWQuWm9uZUlkc1Zpc2liaWxpdHlNYXBdOiB7fVxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyh6b25lVmlzaWJpbGl0eU1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBwYXJhbWV0ZXJzW1BhcmFtZXRlcklkLlpvbmVJZHNWaXNpYmlsaXR5TWFwXVtrZXldID0gRXh0ZXJuYWxFbnVtQ29udmVydGVyLnNldFZpc2liaWxpdHlUeXBlLmNvbnZlcnQoem9uZVZpc2liaWxpdHlNYXBba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFZlcmJJZC5TZXRab25lVmlzaWJpbGl0eSwgcGFyYW1ldGVycykudGhlbjx2b2lkPihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi8uLi9zcmMvQXBpU2hhcmVkL1NlcnZpY2VzL2ltcGwvWm9uZVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBEYXNoYm9hcmRDb250ZW50IG5hbWVzcGFjZS5cbiAqIFRoaXMgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgRGFzaGJvYXJkQ29udGVudCBpc1xuICogY3VycmVudGx5IGp1c3QgYSAoc2luZ2xlKSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb250ZW50IGltcGxlbWVudHMgQ29udHJhY3QuRGFzaGJvYXJkQ29udGVudCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXNoYm9hcmQ6IENvbnRyYWN0LkRhc2hib2FyZCkgeyB9XG5cbiAgcHVibGljIGdldCBkYXNoYm9hcmQoKTogQ29udHJhY3QuRGFzaGJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGJvYXJkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9EYXNoYm9hcmRDb250ZW50LnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25FbnZpcm9ubWVudCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5pbXBvcnQgeyBJbnRlcm5hbFRvRXh0ZXJuYWxFbnVtTWFwcGluZ3MgYXMgRW51bU1hcHBpbmdzLCBWZXJzaW9uTnVtYmVyIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgZW52aXJvbm1lbnQgbmFtZXNwYWNlLlxuICogRW52aXJvbm1lbnQgZG9lcyBub3QgZm9sbG93IHRoZSBJbXBsIHBhdHRlcm4gYXMgaXQgaXNcbiAqIGp1c3QgYSBwcm9wZXJ0eSBiYWcuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCBpbXBsZW1lbnRzIENvbnRyYWN0LkVudmlyb25tZW50IHtcbiAgcHJpdmF0ZSBfYXBpVmVyc2lvbjogc3RyaW5nO1xuICBwcml2YXRlIF9jb250ZXh0OiBDb250cmFjdC5FeHRlbnNpb25Db250ZXh0O1xuICBwcml2YXRlIF9sYW5ndWFnZTogc3RyaW5nO1xuICBwcml2YXRlIF9sb2NhbGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbW9kZTogQ29udHJhY3QuRXh0ZW5zaW9uTW9kZTtcbiAgcHJpdmF0ZSBfb3BlcmF0aW5nU3lzdGVtOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RhYmxlYXVWZXJzaW9uOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGV4dGVuc2lvbkVudmlyb25tZW50OiBFeHRlbnNpb25FbnZpcm9ubWVudCkge1xuICAgIHRoaXMuX2FwaVZlcnNpb24gPSBWZXJzaW9uTnVtYmVyLkluc3RhbmNlICYmIFZlcnNpb25OdW1iZXIuSW5zdGFuY2UuZm9ybWF0dGVkVmFsdWU7IC8vIG1hai5taW4uZml4IChubyBidWlsZClcbiAgICB0aGlzLl9jb250ZXh0ID0gRW51bU1hcHBpbmdzLmV4dGVuc2lvbkNvbnRleHQuY29udmVydChleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25Db250ZXh0KTtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IGV4dGVuc2lvbkVudmlyb25tZW50LmV4dGVuc2lvbkxhbmd1YWdlO1xuICAgIHRoaXMuX2xvY2FsZSA9IGV4dGVuc2lvbkVudmlyb25tZW50LmV4dGVuc2lvbkxvY2FsZTtcbiAgICB0aGlzLl9tb2RlID0gRW51bU1hcHBpbmdzLmV4dGVuc2lvbk1vZGUuY29udmVydChleHRlbnNpb25FbnZpcm9ubWVudC5leHRlbnNpb25Nb2RlKTtcbiAgICB0aGlzLl9vcGVyYXRpbmdTeXN0ZW0gPSBleHRlbnNpb25FbnZpcm9ubWVudC5vcGVyYXRpbmdTeXN0ZW07XG4gICAgdGhpcy5fdGFibGVhdVZlcnNpb24gPSBleHRlbnNpb25FbnZpcm9ubWVudC50YWJsZWF1VmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXBpVmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hcGlWZXJzaW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBjb250ZXh0KCk6IENvbnRyYWN0LkV4dGVuc2lvbkNvbnRleHQge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICB9XG5cbiAgcHVibGljIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbW9kZSgpOiBDb250cmFjdC5FeHRlbnNpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb3BlcmF0aW5nU3lzdGVtKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGluZ1N5c3RlbTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGFibGVhdVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVhdVZlcnNpb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL0Vudmlyb25tZW50LnRzIiwiaW1wb3J0IHtcbiAgSW50ZXJuYWxBcGlEaXNwYXRjaGVyLFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbCB9IGZyb20gJy4vSW1wbC9Jbml0aWFsaXphdGlvblNlcnZpY2VJbXBsJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZUltcGwgfSBmcm9tICcuL0ltcGwvU2V0dGluZ3NTZXJ2aWNlSW1wbCc7XG5pbXBvcnQgeyBVSVNlcnZpY2VJbXBsIH0gZnJvbSAnLi9JbXBsL1VJU2VydmljZUltcGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBbGxFeHRlbnNpb25zU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IFNldHRpbmdzU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xuICBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UucmVnaXN0ZXJTZXJ2aWNlKG5ldyBVSVNlcnZpY2VJbXBsKGRpc3BhdGNoZXIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVySW5pdGlhbGl6YXRpb25FeHRlbnNpb25zU2VydmljZXMoZGlzcGF0Y2hlcjogSW50ZXJuYWxBcGlEaXNwYXRjaGVyKTogdm9pZCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5yZWdpc3RlclNlcnZpY2UobmV3IEluaXRpYWxpemF0aW9uU2VydmljZUltcGwoZGlzcGF0Y2hlcikpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL1JlZ2lzdGVyQWxsRXh0ZW5zaW9uc1NlcnZpY2VzLnRzIiwiaW1wb3J0IHsgU2VydmljZUltcGxCYXNlIH0gZnJvbSAnLi4vLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4dGVuc2lvbkJvb3RzdHJhcEluZm8sXG4gIFBhcmFtZXRlcklkLFxuICBWZXJiSWRcbn0gZnJvbSAnQHRhYmxlYXUvYXBpLWludGVybmFsLWNvbnRyYWN0LWpzJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgSW5pdGlhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vSW5pdGlhbGl6YXRpb25TZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemF0aW9uU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBJbml0aWFsaXphdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuSW5pdGlhbGl6YXRpb25TZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVEYXNoYm9hcmRFeHRlbnNpb25zQXN5bmMoaXNFeHRlbnNpb25EaWFsb2c6IGJvb2xlYW4sIGNvbnRleHRNZW51SWRzOiBzdHJpbmdbXSk6IFByb21pc2U8RXh0ZW5zaW9uQm9vdHN0cmFwSW5mbz4ge1xuICAgIGNvbnN0IHBhcmFtczogRXhlY3V0ZVBhcmFtZXRlcnMgPSB7XG4gICAgICBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uQ29udGV4dE1lbnVJZHNdOiBjb250ZXh0TWVudUlkcyxcbiAgICAgIFtQYXJhbWV0ZXJJZC5Jc0V4dGVuc2lvbkRpYWxvZ106IGlzRXh0ZW5zaW9uRGlhbG9nXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoVmVyYklkLkluaXRpYWxpemVFeHRlbnNpb24sIHBhcmFtcykudGhlbjxFeHRlbnNpb25Cb290c3RyYXBJbmZvPihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBUT0RPIC0gVmFsaWRhdGUgcmV0dXJuIHZhbHVlXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCBhcyBFeHRlbnNpb25Cb290c3RyYXBJbmZvO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL1NlcnZpY2VzL0ltcGwvSW5pdGlhbGl6YXRpb25TZXJ2aWNlSW1wbC50cyIsImltcG9ydCB7IEVycm9yQ29kZXMgfSBmcm9tICcuLi8uLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UgfSBmcm9tICcuLi8uLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQge1xuICBFeGVjdXRlUGFyYW1ldGVycyxcbiAgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvLFxuICBQYXJhbWV0ZXJJZCxcbiAgVmVyYklkXG59IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7IFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFNldHRpbmdzQ29sbGVjdGlvbiwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vU2V0dGluZ3NTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZUltcGwgZXh0ZW5kcyBTZXJ2aWNlSW1wbEJhc2UgaW1wbGVtZW50cyBTZXR0aW5nc1NlcnZpY2Uge1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuU2V0dGluZ3NTZXJ2aWNlO1xuICB9XG5cbiAgcHVibGljIHNhdmVTZXR0aW5nc0FzeW5jKHNldHRpbmdzOiBTZXR0aW5nc0NvbGxlY3Rpb24pOiBQcm9taXNlPFNldHRpbmdzQ29sbGVjdGlvbj4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0geyBbUGFyYW1ldGVySWQuU2V0dGluZ3NWYWx1ZXNdOiBzZXR0aW5ncyB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuU2F2ZUV4dGVuc2lvblNldHRpbmdzLCBwYXJhbWV0ZXJzKS50aGVuPFNldHRpbmdzQ29sbGVjdGlvbj4odmFsdWUgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUucmVzdWx0IGFzIEV4dGVuc2lvblNldHRpbmdzSW5mbztcblxuICAgICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5zZXR0aW5nc1ZhbHVlcykge1xuICAgICAgICB0aHJvdyBuZXcgVGFibGVhdUVycm9yKEVycm9yQ29kZXMuSW50ZXJuYWxFcnJvciwgJ1VuZXhwZWN0ZWQgZXJyb3Igc2F2aW5ncyBzZXR0aW5ncy4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChyZXN1bHQuc2V0dGluZ3NWYWx1ZXMpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9TZXR0aW5nc1NlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgRGlhbG9nT3B0aW9ucywgRXJyb3JDb2RlcyB9IGZyb20gJy4uLy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHtcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdCxcbiAgUGFyYW1ldGVySWQsXG4gIFZlcmJJZFxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG5pbXBvcnQgeyBTZXJ2aWNlSW1wbEJhc2UsIFRhYmxlYXVFcnJvciB9IGZyb20gJy4uLy4uLy4uL0FwaVNoYXJlZCc7XG5cbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMgfSBmcm9tICcuLi9FeHRlbnNpb25zU2VydmljZU5hbWVzJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4uL1VJU2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfRElBTE9HX0hFSUdIVDogbnVtYmVyID0gNDAwOyAvLyBpbiBwaXhlbHNcbmNvbnN0IERFRkFVTFRfRElBTE9HX1dJRFRIOiBudW1iZXIgPSA2MDA7IC8vIGluIHBpeGVsc1xuXG5leHBvcnQgY2xhc3MgVUlTZXJ2aWNlSW1wbCBleHRlbmRzIFNlcnZpY2VJbXBsQmFzZSBpbXBsZW1lbnRzIFVJU2VydmljZSB7XG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5VSVNlcnZpY2U7XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheURpYWxvZ0FzeW5jKHVybDogc3RyaW5nLCBwYXlsb2FkOiBzdHJpbmcsIG9wdGlvbnM/OiBEaWFsb2dPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0ge1xuICAgICAgW1BhcmFtZXRlcklkLkV4dGVuc2lvbkRpYWxvZ1VybF06IHVybCxcbiAgICAgIFtQYXJhbWV0ZXJJZC5FeHRlbnNpb25EaWFsb2dQYXlsb2FkXTogcGF5bG9hZFxuICAgIH07XG5cbiAgICBjb25zdCBoOiBudW1iZXIgPSAoKG9wdGlvbnMpICYmIChvcHRpb25zLmhlaWdodCkpID8gb3B0aW9ucy5oZWlnaHQgOiBERUZBVUxUX0RJQUxPR19IRUlHSFQ7XG4gICAgY29uc3QgdzogbnVtYmVyID0gKChvcHRpb25zKSAmJiAob3B0aW9ucy53aWR0aCkpID8gb3B0aW9ucy53aWR0aCA6IERFRkFVTFRfRElBTE9HX1dJRFRIO1xuXG4gICAgLy8gT24gdGhlIHBsYXRmb3JtIHNpZGUsIHdlIGRvIHNvbWV0aGluZyByZWFzb25hYmxlIHJlZ2FyZGVzcyBvZiB3aGV0aGVyIHRoZSBwYXNzZWRcbiAgICAvLyBoZWlnaHQgYW5kIHdpZHRoIGFyZSB0b28gbGFyZ2Ugb3IgdG9vIHNtYWxsLiAgQnV0IHRoaXMgbGlrZWx5IGluZGljYXRlcyBhIGRldmVsb3BlciBlcnJvcixcbiAgICAvLyBzbyB3ZSB0aHJvdyBhbiBlcnJvciBoZXJlIHRvIGhlbHAgd2l0aCBkZWJ1Z2dpbmcuXG4gICAgaWYgKGggPD0gMCB8fCB3IDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkUGFyYW1ldGVyLCAnU2l6ZSBwYXJhbWV0ZXJzIGZvciBkaXNwbGF5RGlhbG9nQXN5bmMgbXVzdCBiZSBwb3NpdGl2ZScpO1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nSF0gPSBoO1xuICAgIHBhcmFtZXRlcnNbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nV10gPSB3O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuRGlzcGxheURpYWxvZywgcGFyYW1ldGVycykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBkaWFsb2dSZXN1bHQgPSByZXNwb25zZS5yZXN1bHQgYXMgRXh0ZW5zaW9uRGlhbG9nUmVzdWx0O1xuICAgICAgc3dpdGNoIChkaWFsb2dSZXN1bHQpIHtcbiAgICAgICAgY2FzZSBFeHRlbnNpb25EaWFsb2dSZXN1bHQuRGlhbG9nQWxyZWFkeU9wZW46XG4gICAgICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihFcnJvckNvZGVzLkRpYWxvZ0FscmVhZHlPcGVuLCAnVGhlcmUgYWxyZWFkeSBleGlzdHMgYW4gb3BlbiBkaWFsb2cgZm9yIHRoaXMgZXh0ZW5zaW9uLicpO1xuICAgICAgICBjYXNlIEV4dGVuc2lvbkRpYWxvZ1Jlc3VsdC5JbnZhbGlkRG9tYWluOlxuICAgICAgICAgIHRocm93IG5ldyBUYWJsZWF1RXJyb3IoRXJyb3JDb2Rlcy5JbnZhbGlkRG9tYWluRGlhbG9nLFxuICAgICAgICAgICAgJ1RoZSB1cmwgb2YgYW4gZXh0ZW5zaW9uIGRpYWxvZyBtdXN0IG1hdGNoIHRoZSBkb21haW4gb2YgdGhlIHBhcmVudCBleHRlbnNpb24uJyk7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFN1Y2Nlc3MgY2FzZVxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZyhwYXlsb2FkPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzID0gKHBheWxvYWQpID8geyBbUGFyYW1ldGVySWQuRXh0ZW5zaW9uRGlhbG9nUGF5bG9hZF06IHBheWxvYWQgfSA6IHt9O1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShWZXJiSWQuQ2xvc2VEaWFsb2csIHBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvU2VydmljZXMvSW1wbC9VSVNlcnZpY2VJbXBsLnRzIiwiaW1wb3J0IHsgU2V0dGluZ3MgYXMgU2V0dGluZ3NDb250cmFjdCB9IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgU2V0dGluZ3NJbXBsIH0gZnJvbSAnLi4vSW1wbC9TZXR0aW5nc0ltcGwnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb2xsZWN0aW9uIH0gZnJvbSAnLi4vU2VydmljZXMvU2V0dGluZ3NTZXJ2aWNlJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXh0ZXJuYWwgc2V0dGluZ3MgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBFdmVudExpc3RlbmVyTWFuYWdlciBpbXBsZW1lbnRzIFNldHRpbmdzQ29udHJhY3Qge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfc2V0dGluZ3NJbXBsOiBTZXR0aW5nc0ltcGwpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBvdXIgZXZlbnQgaGFuZGxpbmcgZm9yIHRoaXMgY2xhc3NcbiAgICB0aGlzLl9zZXR0aW5nc0ltcGwuaW5pdGlhbGl6ZUV2ZW50cygpLmZvckVhY2goZSA9PiB0aGlzLmFkZE5ld0V2ZW50VHlwZShlKSk7XG4gIH1cblxuICBwdWJsaWMgZXJhc2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXR0aW5nc0ltcGwuZXJhc2Uoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nc0ltcGwuZ2V0KGtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsKCk6IFNldHRpbmdzQ29sbGVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5nZXRBbGwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNNb2RpZmllZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3NJbXBsLmlzTW9kaWZpZWQ7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUFzeW5jKCk6IFByb21pc2U8U2V0dGluZ3NDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzSW1wbC5zYXZlQXN5bmMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXR0aW5nc0ltcGwuc2V0KGtleSwgdmFsdWUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9TZXR0aW5ncy50cyIsImltcG9ydCAqIGFzIENvbnRyYWN0IGZyb20gJy4uLy4uL0V4dGVuc2lvbnNBcGlFeHRlcm5hbENvbnRyYWN0JztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uU2V0dGluZ3NJbmZvLCBOb3RpZmljYXRpb25JZCwgU2V0dGluZ3NFdmVudCB9IGZyb20gJ0B0YWJsZWF1L2FwaS1pbnRlcm5hbC1jb250cmFjdC1qcyc7XG5cbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VSZWdpc3RyeSxcbiAgRXJyb3JIZWxwZXJzLFxuICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICBTZXJ2aWNlTmFtZXMsXG4gIFNpbmdsZUV2ZW50TWFuYWdlcixcbiAgU2luZ2xlRXZlbnRNYW5hZ2VySW1wbCxcbiAgVGFibGVhdUVycm9yLFxuICBUYWJsZWF1RXZlbnRcbn0gZnJvbSAnLi4vLi4vQXBpU2hhcmVkJztcblxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyB9IGZyb20gJy4uL1NlcnZpY2VzL0V4dGVuc2lvbnNTZXJ2aWNlTmFtZXMnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb2xsZWN0aW9uLCBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9TZXR0aW5nc1NlcnZpY2UnO1xuXG5jbGFzcyBTZXR0aW5nc0NoYW5nZWRFdmVudCBleHRlbmRzIFRhYmxlYXVFdmVudCBpbXBsZW1lbnRzIENvbnRyYWN0LlNldHRpbmdzQ2hhbmdlZEV2ZW50IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX25ld1NldHRpbmdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoQ29udHJhY3QuVGFibGVhdUV2ZW50VHlwZS5TZXR0aW5nc0NoYW5nZWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBuZXdTZXR0aW5ncygpOiBTZXR0aW5nc0NvbGxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9uZXdTZXR0aW5ncztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NJbXBsIHtcbiAgcHJpdmF0ZSBzdGF0aWMgQVNZTkNfU0FWRV9JTl9QUk9HUkVTUzogc3RyaW5nID0gJ0FzeW5jIFNhdmUgaXMgaW4gcHJvZ3Jlc3MsIHVwZGF0aW5nIHNldHRpbmdzIGlzIG5vdCBhbGxvd2VkLic7XG4gIHByaXZhdGUgX2lzTW9kaWZpZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2N1cnJlbnRTZXR0aW5nczogU2V0dGluZ3NDb2xsZWN0aW9uO1xuXG4gIC8vIFNpbmNlIHByb21pc2VzIGNhbid0IGJlIGludHJvc3BlY3RlZCBmb3Igc3RhdGUsIGtlZXAgYSB2YXJpYWJsZSB0aGF0XG4gIC8vIGluZGljYXRlcyBhIHNhdmUgaXMgaW4gcHJvZ3Jlc3MsIHNvIHRoYXQgc2V0L2VyYXNlIGNhbid0IGJlIGNhbGxlZCBkdXJpbmcgYSBzYXZlLlxuICBwcml2YXRlIF9zYXZlSW5Qcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzZXR0aW5nc0luZm86IEV4dGVuc2lvblNldHRpbmdzSW5mbykge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVNldHRpbmdzKHNldHRpbmdzSW5mbyk7XG4gIH1cblxuICBwdWJsaWMgZXJhc2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKGtleSwgJ2tleScpO1xuXG4gICAgLy8gT25seSBtYWtlIGEgbW9kaWZpY2F0aW9uIGlmIHdlIGhhdmUgdGhlIGtleSBhbHJlYWR5XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRTZXR0aW5nc1trZXldKSB7XG4gICAgICB0aGlzLnZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTtcblxuICAgICAgZGVsZXRlIHRoaXMuX2N1cnJlbnRTZXR0aW5nc1trZXldO1xuICAgICAgdGhpcy5faXNNb2RpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihrZXksICdrZXknKTtcblxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50U2V0dGluZ3Nba2V5XTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGwoKTogU2V0dGluZ3NDb2xsZWN0aW9uIHtcbiAgICAvLyBSZXR1cm5zIGEgbXV0YWJsZSBjb3B5IG9mIHRoZSBzZXR0aW5nc1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jdXJyZW50U2V0dGluZ3MpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc01vZGlmaWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc01vZGlmaWVkO1xuICB9XG5cbiAgcHVibGljIHNhdmVBc3luYygpOiBQcm9taXNlPFNldHRpbmdzQ29sbGVjdGlvbj4ge1xuICAgIHRoaXMudmVyaWZ5U2V0dGluZ3NBcmVVbmxvY2tlZCgpO1xuXG4gICAgLy8gSnVzdCByZXNvbHZlIGltbWVkaWF0ZWx5IGlmIHNldHRpbmdzIGFyZSB1bmNoYW5nZWRcbiAgICBpZiAoIXRoaXMuX2lzTW9kaWZpZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmU8U2V0dGluZ3NDb2xsZWN0aW9uPih0aGlzLl9jdXJyZW50U2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHRoaXMuX3NhdmVJblByb2dyZXNzID0gdHJ1ZTtcblxuICAgIC8vIFVzZSB0aGUgc2V0dGluZ3Mgc2VydmljZSB0byBzYXZlIHNldHRpbmdzIHRvIHR3YlxuICAgIGNvbnN0IHNldHRpbmdzU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFNldHRpbmdzU2VydmljZT4oXG4gICAgICBFeHRlbnNpb25zU2VydmljZU5hbWVzLlNldHRpbmdzU2VydmljZSk7XG5cbiAgICByZXR1cm4gc2V0dGluZ3NTZXJ2aWNlLnNhdmVTZXR0aW5nc0FzeW5jKHRoaXMuX2N1cnJlbnRTZXR0aW5ncykudGhlbjxTZXR0aW5nc0NvbGxlY3Rpb24+KG5ld1NldHRpbmdzID0+IHtcbiAgICAgIHRoaXMuX3NhdmVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc01vZGlmaWVkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5fY3VycmVudFNldHRpbmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFNldHRpbmdzID0gbmV3U2V0dGluZ3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2N1cnJlbnRTZXR0aW5ncywgbmV3U2V0dGluZ3MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1NldHRpbmdzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIEVycm9ySGVscGVycy52ZXJpZnlTdHJpbmdQYXJhbWV0ZXIoa2V5LCAna2V5Jyk7IC8vIEtleSBzaG91bGRuJ3QgYmUgYW4gZW1wdHkgc3RyaW5nLlxuICAgIEVycm9ySGVscGVycy52ZXJpZnlQYXJhbWV0ZXIodmFsdWUsICd2YWx1ZScpOyAvLyBFbXB0eSBzdHJpbmcgdmFsdWUgaXMgYWxsb3dlZC5cbiAgICB0aGlzLnZlcmlmeVNldHRpbmdzQXJlVW5sb2NrZWQoKTtcblxuICAgIHRoaXMuX2N1cnJlbnRTZXR0aW5nc1trZXldID0gdmFsdWU7XG4gICAgdGhpcy5faXNNb2RpZmllZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYWxsIGV2ZW50cyByZWxldmFudCB0byBzZXR0aW5ncyBvYmplY3QuICBUaGlzIGlzIG9ubHkgYSBzZXR0aW5nc1VwZGF0ZSBldmVudCBjdXJyZW50bHkuXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+fSBDb2xsZWN0aW9uIG9mIGV2ZW50IG1hbmFnZXJzIHRvIHBhc3MgdG8gYW4gRXZlbnRMaXN0ZW5lck1hbmFnZXIuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUV2ZW50cygpOiBBcnJheTxTaW5nbGVFdmVudE1hbmFnZXI+IHtcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IEFycmF5PFNpbmdsZUV2ZW50TWFuYWdlcj4oKTtcbiAgICBsZXQgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZTtcblxuICAgIHRyeSB7XG4gICAgICBub3RpZmljYXRpb25TZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8Tm90aWZpY2F0aW9uU2VydmljZT4oU2VydmljZU5hbWVzLk5vdGlmaWNhdGlvbik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSB0aGlzIHNlcnZpY2UgcmVnaXN0ZXJlZCwganVzdCByZXR1cm5cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIGNvbnN0IHNldHRpbmdzQ2hhbmdlZEV2ZW50ID0gbmV3IFNpbmdsZUV2ZW50TWFuYWdlckltcGw8U2V0dGluZ3NDaGFuZ2VkRXZlbnQ+KENvbnRyYWN0LlRhYmxlYXVFdmVudFR5cGUuU2V0dGluZ3NDaGFuZ2VkKTtcbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihOb3RpZmljYXRpb25JZC5TZXR0aW5nc0NoYW5nZWQsIChtb2RlbCkgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgKGV2ZW50OiBTZXR0aW5nc0V2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9jdXJyZW50U2V0dGluZ3MgPSBldmVudC5uZXdTZXR0aW5ncztcbiAgICAgIHNldHRpbmdzQ2hhbmdlZEV2ZW50LnRyaWdnZXJFdmVudCgoKSA9PiBuZXcgU2V0dGluZ3NDaGFuZ2VkRXZlbnQoZXZlbnQubmV3U2V0dGluZ3MpKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdHMucHVzaChzZXR0aW5nc0NoYW5nZWRFdmVudCk7XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVNldHRpbmdzKHNldHRpbmdzSW5mbzogRXh0ZW5zaW9uU2V0dGluZ3NJbmZvKTogdm9pZCB7XG4gICAgRXJyb3JIZWxwZXJzLnZlcmlmeVBhcmFtZXRlcihzZXR0aW5nc0luZm8sICdzZXR0aW5nc0luZm8nKTtcbiAgICBFcnJvckhlbHBlcnMudmVyaWZ5UGFyYW1ldGVyKHNldHRpbmdzSW5mby5zZXR0aW5nc1ZhbHVlcywgJ3NldHRpbmdzSW5mby5TZXR0aW5nc1ZhbHVlcycpO1xuXG4gICAgdGhpcy5fY3VycmVudFNldHRpbmdzID0gc2V0dGluZ3NJbmZvLnNldHRpbmdzVmFsdWVzO1xuXG4gICAgLy8gUmVzZXQgdGhlIGlzTW9kaWZpZWQgZmxhZ1xuICAgIHRoaXMuX2lzTW9kaWZpZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGhlbHBlciBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBhbnkgbG9jYWwgdXBkYXRlIHRvIHRoaXMuY3VycmVudFNldHRpbmdzLlxuICAgKiBDaGVja3MgaWYgYSBjdXJyZW50IHNhdmUgY2FsbCBpcyBzdGlsbCBpbiBwcm9ncmVzcyBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIHNvLlxuICAgKi9cbiAgcHJpdmF0ZSB2ZXJpZnlTZXR0aW5nc0FyZVVubG9ja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zYXZlSW5Qcm9ncmVzcykge1xuICAgICAgdGhyb3cgbmV3IFRhYmxlYXVFcnJvcihDb250cmFjdC5FcnJvckNvZGVzLlNldHRpbmdTYXZlSW5Qcm9ncmVzcywgU2V0dGluZ3NJbXBsLkFTWU5DX1NBVkVfSU5fUFJPR1JFU1MpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvU2V0dGluZ3NJbXBsLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBVSUltcGwgfSBmcm9tICcuLi9JbXBsL1VJSW1wbCc7XG5cbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGV4dGVybmFsIFVJIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFVJIGltcGxlbWVudHMgQ29udHJhY3QuVUkge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfaW1wbDogVUlJbXBsKSB7IH1cblxuICBwdWJsaWMgZGlzcGxheURpYWxvZ0FzeW5jKHVybDogc3RyaW5nLCBwYXlsb2FkPzogc3RyaW5nLCBvcHRpb25zPzogQ29udHJhY3QuRGlhbG9nT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ltcGwuZGlzcGxheURpYWxvZ0FzeW5jKHVybCwgcGF5bG9hZCwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2cocGF5bG9hZD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2ltcGwuY2xvc2VEaWFsb2cocGF5bG9hZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9zcmMvRXh0ZW5zaW9uc0FwaS9OYW1lc3BhY2VzL1VJLnRzIiwiaW1wb3J0ICogYXMgQ29udHJhY3QgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uc0FwaUV4dGVybmFsQ29udHJhY3QnO1xuXG5pbXBvcnQgeyBEaWFsb2dVcGRhdGVFdmVudCwgTm90aWZpY2F0aW9uSWQgfSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuaW1wb3J0IHtcbiAgQXBpU2VydmljZVJlZ2lzdHJ5LFxuICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICBTZXJ2aWNlTmFtZXMsXG4gIFRhYmxlYXVFcnJvclxufSBmcm9tICcuLi8uLi9BcGlTaGFyZWQnO1xuXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZU5hbWVzIH0gZnJvbSAnLi4vU2VydmljZXMvRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcyc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuLi9TZXJ2aWNlcy9VSVNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgVUlJbXBsIHtcbiAgcHVibGljIGRpc3BsYXlEaWFsb2dBc3luYyh1cmw6IHN0cmluZywgcGF5bG9hZD86IHN0cmluZywgb3B0aW9ucz86IENvbnRyYWN0LkRpYWxvZ09wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHVpU2VydmljZSA9IEFwaVNlcnZpY2VSZWdpc3RyeS5pbnN0YW5jZS5nZXRTZXJ2aWNlPFVJU2VydmljZT4oRXh0ZW5zaW9uc1NlcnZpY2VOYW1lcy5VSVNlcnZpY2UpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UgPSBBcGlTZXJ2aWNlUmVnaXN0cnkuaW5zdGFuY2UuZ2V0U2VydmljZTxOb3RpZmljYXRpb25TZXJ2aWNlPihTZXJ2aWNlTmFtZXMuTm90aWZpY2F0aW9uKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB1aVNlcnZpY2UuZGlzcGxheURpYWxvZ0FzeW5jKHVybCwgcGF5bG9hZCB8fCAnJywgb3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVucmVnaXN0ZXJGbiA9IG5vdGlmaWNhdGlvblNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKE5vdGlmaWNhdGlvbklkLkV4dGVuc2lvbkRpYWxvZ1VwZGF0ZSwgKG1vZGVsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7IC8vIExldCB0aHJvdWdoIGFueSBkaWFsb2cgdXBkYXRlIGV2ZW50XG4gICAgICAgIH0sIChldmVudDogRGlhbG9nVXBkYXRlRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQuaXNDbG9zZUV2ZW50KSB7XG4gICAgICAgICAgICByZXNvbHZlKGV2ZW50LmNsb3NlUGF5bG9hZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgVGFibGVhdUVycm9yKENvbnRyYWN0LkVycm9yQ29kZXMuRGlhbG9nQ2xvc2VkQnlVc2VyLCAnRXh0ZW5zaW9uIGRpYWxvZyBjbG9zZWQgYnkgdXNlci4nKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdW5yZWdpc3RlckZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZyhwYXlsb2FkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdWlTZXJ2aWNlID0gQXBpU2VydmljZVJlZ2lzdHJ5Lmluc3RhbmNlLmdldFNlcnZpY2U8VUlTZXJ2aWNlPihcbiAgICAgIEV4dGVuc2lvbnNTZXJ2aWNlTmFtZXMuVUlTZXJ2aWNlKTtcblxuICAgIHVpU2VydmljZS5jbG9zZURpYWxvZyhwYXlsb2FkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3NyYy9FeHRlbnNpb25zQXBpL0ltcGwvVUlJbXBsLnRzIiwiaW1wb3J0IHtcbiAgQ3JlYXRlRXh0ZXJuYWxDb21wYXRpYmxlVmVyc2lvbkNvbnZlcnRlcixcbiAgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTixcbiAgRXhlY3V0ZVBhcmFtZXRlcnMsXG4gIEV4ZWN1dGVSZXNwb25zZSxcbiAgRXh0ZXJuYWxDb250cmFjdFZlcnNpb25Db252ZXJ0ZXIsXG4gIEludGVybmFsQXBpRGlzcGF0Y2hlcixcbiAgTm90aWZpY2F0aW9uLFxuICBOb3RpZmljYXRpb25IYW5kbGVyLFxuICBWZXJiSWQsXG4gIFZlcnNpb25MZXNzVGhhbixcbiAgVmVyc2lvbk51bWJlclxufSBmcm9tICdAdGFibGVhdS9hcGktaW50ZXJuYWwtY29udHJhY3QtanMnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBJbnRlcm5hbEFwaURpc3BhdGNoZXIgd2hpY2ggc3VwcG9ydHMgdXBncmFkaW5nIGFuZCBkb3duZ3JhZGluZyB0aGUgaW5wdXRcbiAqIGludGVybmFsIGNvbnRyYWN0IHRvIHRoZSB2ZXJzaW9uIHRoYXQgdGhpcyBtb2R1bGUgaXMgYnVpbHQgYWdhaW5zdFxuICpcbiAqIEBjbGFzcyBWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXJcbiAqIEBpbXBsZW1lbnRzIHtJbnRlcm5hbEFwaURpc3BhdGNoZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXIgaW1wbGVtZW50cyBJbnRlcm5hbEFwaURpc3BhdGNoZXIge1xuICBwcml2YXRlIF92ZXJzaW9uQ29udmVydGVyOiBFeHRlcm5hbENvbnRyYWN0VmVyc2lvbkNvbnZlcnRlcjtcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uSGFuZGxlcnM6IEFycmF5PE5vdGlmaWNhdGlvbkhhbmRsZXI+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXJcbiAgICogV2UgaGF2ZSBtdWx0aXBsZSB2ZXJzaW9uIGNvbnZlcnRpbmcgZGlzcGF0Y2hlcnMgdGhhdCB3b3JrIHRvZ2V0aGVyLlxuICAgKiBJZiBuZWVkZWQsIHRoZSBWZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXIgd3JhcHMgZWl0aGVyIHRoZSBJbnRlcm5hbEFwaURpc3BhdGNoZXIgKGRlc2t0b3ApXG4gICAqIG9yIHRoZSBDcm9zc0ZyYW1lRGlzcGF0Y2hlciAoc2VydmVyKS5cbiAgICogVGhlIEludGVybmFsL0Nyb3NzRnJhbWUgZGlzcGF0Y2hlcnMgaGFuZGxlIGFuIHVwZGF0ZWQgcGxhdGZvcm0gd2l0aCBhbiBvbGRlciBleHRlcm5hbCBsaWJyYXJ5LlxuICAgKiAoVGhlIENyb3NzRnJhbWVEaXNwYXRjaGVyIHNlbmRzIG1lc3NhZ2VzIGFjcm9zcyB0aGUgZnJhbWUsIGFuZCBpdCBpcyBoYW5kbGVkIGJ5IHRoZSBQcmVzTGF5ZXJIYW5kbGVyLilcbiAgICogTWVhbndoaWxlLCB0aGUgVmVyc2lvbmVkRXh0ZXJuYWxBcGlEaXNwYXRjaGVyIGhhbmRsZXMgYW4gdXBkYXRlZCBleHRlcm5hbCBsaWJyYXJ5IHdpdGggYW4gb2xkZXIgcGxhdGZvcm0uXG5cbiAgICogQHBhcmFtIF9hcGlEZWxlZ2F0ZURpc3BhdGNoZXIgVGhlIGRlbGVnYXRlIHRoYXQgZG9lcyB0aGUgYWN0dWFsIHdvcmsuXG4gICAqIEBwYXJhbSBwbGF0Zm9ybVZlcnNpb25OdW1iZXIgVGhlIHZlcnNpb24gb2YgdGhlIGludGVybmFsIGNvbnRyYWN0IHdoaWNoIHRoZSBwbGF0Zm9ybSBtb2R1bGUgaXMgdXNpbmcuXG4gICAqIFRoaXMgbnVtYmVyIHdpbGwgYmUgdXNlZCB0byBmaWd1cmUgb3V0IGhvdyB0byBkb3duZ3JhZGUgaW5jb21pbmcgY29tbWFuZHMgYW5kIHVwZ3JhZGUgdGhlIHJlc3VsdHNcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hcGlEZWxlZ2F0ZURpc3BhdGNoZXI6IEludGVybmFsQXBpRGlzcGF0Y2hlcixcbiAgICBwbGF0Zm9ybVZlcnNpb25OdW1iZXI6IFZlcnNpb25OdW1iZXIpIHtcblxuICAgIHRoaXMuX3ZlcnNpb25Db252ZXJ0ZXIgPSBDcmVhdGVFeHRlcm5hbENvbXBhdGlibGVWZXJzaW9uQ29udmVydGVyKElOVEVSTkFMX0NPTlRSQUNUX1ZFUlNJT04sIHBsYXRmb3JtVmVyc2lvbk51bWJlcik7XG5cbiAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycyA9IFtdO1xuICAgIF9hcGlEZWxlZ2F0ZURpc3BhdGNoZXIucmVnaXN0ZXJOb3RpZmljYXRpb25IYW5kbGVyKChub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbkhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB1cGdyYWRlZE5vdGlmaWNhdGlvbiA9IHRoaXMuX3ZlcnNpb25Db252ZXJ0ZXIudXBncmFkZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgaGFuZGxlcih1cGdyYWRlZE5vdGlmaWNhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbmVlZHNWZXJzaW9uQ29udmVydGVyKHBsYXRmb3JtVmVyc2lvbjogVmVyc2lvbk51bWJlcik6IGJvb2xlYW4ge1xuICAgIC8vIElmIG91ciBwbGF0Zm9ybSBpcyBsZXNzIHRoYW4gZXh0ZXJuYWwgbGlicmFyeSB2ZXJzaW9uLCB0aGVuIHdlIG5lZWQgYSBjb252ZXJ0ZXJcbiAgICByZXR1cm4gVmVyc2lvbkxlc3NUaGFuKHBsYXRmb3JtVmVyc2lvbiwgSU5URVJOQUxfQ09OVFJBQ1RfVkVSU0lPTik7XG4gIH1cblxuICBwdWJsaWMgZXhlY3V0ZSh2ZXJiOiBWZXJiSWQsIHBhcmFtZXRlcnM6IEV4ZWN1dGVQYXJhbWV0ZXJzKTogUHJvbWlzZTxFeGVjdXRlUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkb3duZ3JhZGVQYXJhbWV0ZXJzID0gdGhpcy5fdmVyc2lvbkNvbnZlcnRlci5kb3duZ3JhZGVFeGVjdXRlQ2FsbCh2ZXJiLCBwYXJhbWV0ZXJzKTtcbiAgICByZXR1cm4gdGhpcy5fYXBpRGVsZWdhdGVEaXNwYXRjaGVyLmV4ZWN1dGUoZG93bmdyYWRlUGFyYW1ldGVycy52ZXJiLCBkb3duZ3JhZGVQYXJhbWV0ZXJzLnBhcmFtZXRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgdXBncmFkZVJlc3BvbnNlID0gdGhpcy5fdmVyc2lvbkNvbnZlcnRlci51cGdyYWRlRXhlY3V0ZVJldHVybihyZXNwb25zZSk7XG4gICAgICByZXR1cm4gdXBncmFkZVJlc3BvbnNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyB1bnJlZ2lzdGVyTm90aWZpY2F0aW9uSGFuZGxlcihoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcnMgPSB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVycy5maWx0ZXIoaCA9PiBoICE9PSBoYW5kbGVyKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9WZXJzaW9uZWRFeHRlcm5hbEFwaURpc3BhdGNoZXIudHMiLCJpbXBvcnQgKiBhcyBDb250cmFjdCBmcm9tICcuLi8uLi9FeHRlbnNpb25zQXBpRXh0ZXJuYWxDb250cmFjdCc7XG5cbmltcG9ydCB7IENhbGxiYWNrTWFwLCBFeHRlbnNpb25zSW1wbCB9IGZyb20gJy4uL0ltcGwvRXh0ZW5zaW9uc0ltcGwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBleHRlcm5hbCBFeHRlbnNpb25zIG5hbWVzcGFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbnMgaW1wbGVtZW50cyBDb250cmFjdC5FeHRlbnNpb25zIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZXh0ZW5zaW9uSW1wbDogRXh0ZW5zaW9uc0ltcGwpIHtcbiAgICB0aGlzLmV4dGVuc2lvbkltcGwgPSBleHRlbnNpb25JbXBsO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXNoYm9hcmRDb250ZW50KCk6IENvbnRyYWN0LkRhc2hib2FyZENvbnRlbnQge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuZGFzaGJvYXJkQ29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnQoKTogQ29udHJhY3QuRW52aXJvbm1lbnQge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuZW52aXJvbm1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNldHRpbmdzKCk6IENvbnRyYWN0LlNldHRpbmdzIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25JbXBsLnNldHRpbmdzO1xuICB9XG5cbiAgcHVibGljIGdldCB1aSgpOiBDb250cmFjdC5VSSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uSW1wbC51aTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplQXN5bmMoY29udGV4dE1lbnVDYWxsYmFja3M/OiBDYWxsYmFja01hcCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuaW5pdGlhbGl6ZUFzeW5jKGZhbHNlLCBjb250ZXh0TWVudUNhbGxiYWNrcykudGhlbjx2b2lkPigpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVEaWFsb2dBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbkltcGwuaW5pdGlhbGl6ZUFzeW5jKHRydWUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vc3JjL0V4dGVuc2lvbnNBcGkvTmFtZXNwYWNlcy9FeHRlbnNpb25zLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==