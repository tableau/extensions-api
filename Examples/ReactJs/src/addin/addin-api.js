(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tableau"] = factory();
	else
		root["tableau"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * This is your main. This is where you re-export everything you want to be publicly available.
	 *
	 * The build enforces that the file has the same name as the global variable that is exported.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	// Due to the way we configured webpack, we should be exporting things which will be under
	// a global variable called "tableau". Export everything we want ot be visible under tableau
	// from this file.
	var AddIn_1 = __webpack_require__(1);
	var AddInImpl_1 = __webpack_require__(2);
	var addInImpl = new AddInImpl_1.AddInImpl();
	exports.addIn = new AddIn_1.AddIn(addInImpl);
	// TODO - export enums we want to make available under tableau


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Implementation of the external AddIn namespace.
	 */
	var AddIn = (function () {
	    function AddIn(addInImpl) {
	        this.addInImpl = addInImpl;
	    }
	    Object.defineProperty(AddIn.prototype, "dashboardContent", {
	        get: function () {
	            return this.addInImpl.dashboardContent;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AddIn.prototype, "environment", {
	        get: function () {
	            return this.addInImpl.environment;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AddIn.prototype.initializeAsync = function () {
	        return this.addInImpl.initializeAsync();
	    };
	    return AddIn;
	}());
	exports.AddIn = AddIn;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_internal_contract_1 = __webpack_require__(3);
	var api_shared_1 = __webpack_require__(9);
	var Dashboard_1 = __webpack_require__(22);
	var DashboardImpl_1 = __webpack_require__(25);
	var DashboardContent_1 = __webpack_require__(31);
	var Environment_1 = __webpack_require__(32);
	var AddInServiceNames_1 = __webpack_require__(33);
	var RegisterAllAddInServices_1 = __webpack_require__(34);
	var AddInImpl = (function () {
	    function AddInImpl() {
	    }
	    AddInImpl.prototype.initializeAsync = function () {
	        var _this = this;
	        if (!this.initializationPromise) {
	            this.initializationPromise = new Promise(function (resolve, reject) {
	                // First thing we want to do is check to see if there is a desktop dispatcher already registered for us
	                if (api_internal_contract_1.InternalApiDispatcherHolder.HasDesktopApiDispatcherPromise()) {
	                    // Running in desktop, use this promise
	                    var desktopDispatcherPromise = api_internal_contract_1.InternalApiDispatcherHolder.GetDesktopDispatcherPromise();
	                    desktopDispatcherPromise.then(_this.OnDispatcherReceived.bind(_this)).then(function () { resolve(); });
	                }
	                else {
	                    reject('Not running in desktop. Server support coming soon!');
	                }
	            });
	        }
	        return this.initializationPromise;
	    };
	    AddInImpl.prototype.OnDispatcherReceived = function (dispatcher) {
	        var _this = this;
	        dispatcher.SetVersionNumber({ Major: 0, Minor: 0, Fix: 0 }); // TODO
	        // Call to register all the services which will use the newly initialized dispatcher
	        api_shared_1.RegisterAllSharedServices(dispatcher);
	        RegisterAllAddInServices_1.RegisterAllAddInServices(dispatcher);
	        // Get the initialization service and initialize this add-in
	        var initializationService = api_shared_1.ApiServiceRegistry.Instance.GetService(AddInServiceNames_1.AddInServiceNames.InitializationService);
	        return initializationService.InitializeDashboardAddIn().then(function (result) {
	            if (!result.AddInInstance.Locator.DashboardPath) {
	                throw new Error('DashboardPath is undefined');
	            }
	            _this.dashboardContent = _this.InitializeDashboardContent(result.AddinDashboardInfo, result.AddInInstance.Locator.DashboardPath);
	            _this.environment = new Environment_1.Environment(result.AddInEnvironment);
	        });
	    };
	    AddInImpl.prototype.InitializeDashboardContent = function (info, sheetPath) {
	        var dashboardImpl = new DashboardImpl_1.DashboardImpl(info, sheetPath);
	        var dashboard = new Dashboard_1.Dashboard(dashboardImpl);
	        return new DashboardContent_1.DashboardContent(dashboard);
	    };
	    return AddInImpl;
	}());
	exports.AddInImpl = AddInImpl;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AddInContext;
	(function (AddInContext) {
	    AddInContext["DESKTOP"] = "desktop";
	    AddInContext["SERVER"] = "server";
	    AddInContext["UNKNOWN"] = "unknown";
	})(AddInContext = exports.AddInContext || (exports.AddInContext = {}));
	var AddInMode;
	(function (AddInMode) {
	    AddInMode["AUTHORING"] = "authoring";
	    AddInMode["VIEWING"] = "viewing";
	    AddInMode["UNKNOWN"] = "unknown";
	})(AddInMode = exports.AddInMode || (exports.AddInMode = {}));
	var DashboardObjectType;
	(function (DashboardObjectType) {
	    DashboardObjectType["BLANK"] = "blank";
	    DashboardObjectType["WORKSHEET"] = "worksheet";
	    DashboardObjectType["QUICK_FILTER"] = "quickfilter";
	    DashboardObjectType["PARAMETER_CONTROL"] = "parametercontrol";
	    DashboardObjectType["PAGE_FILTER"] = "pagefilter";
	    DashboardObjectType["LEGEND"] = "legend";
	    DashboardObjectType["TITLE"] = "title";
	    DashboardObjectType["TEXT"] = "text";
	    DashboardObjectType["IMAGE"] = "image";
	    DashboardObjectType["WEB_PAGE"] = "webpage";
	    DashboardObjectType["ADD_IN"] = "addin";
	})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
	var SheetType;
	(function (SheetType) {
	    SheetType["DASHBOARD"] = "dashboard";
	    SheetType["STORY"] = "story";
	    SheetType["WORKSHEET"] = "worksheet";
	    SheetType["ADDIN"] = "addin";
	})(SheetType = exports.SheetType || (exports.SheetType = {}));
	var DataType;
	(function (DataType) {
	    DataType["STRING"] = "string";
	    DataType["INT"] = "int";
	    DataType["FLOAT"] = "float";
	    DataType["BOOL"] = "bool";
	    DataType["DATE"] = "date";
	    DataType["DATE_TIME"] = "datetime";
	    DataType["SPATIAL"] = "spatial";
	})(DataType = exports.DataType || (exports.DataType = {}));
	var EncodedDataType;
	(function (EncodedDataType) {
	    EncodedDataType["NUMBER"] = "number";
	    EncodedDataType["STRING"] = "string";
	    EncodedDataType["DATE"] = "date";
	    EncodedDataType["BOOLEAN"] = "boolean";
	})(EncodedDataType = exports.EncodedDataType || (exports.EncodedDataType = {}));


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var InternalApiDispatcherHolder;
	(function (InternalApiDispatcherHolder) {
	    function GetDesktopDispatcherPromise() {
	        return window.__tableauDesktopDispatcher;
	    }
	    InternalApiDispatcherHolder.GetDesktopDispatcherPromise = GetDesktopDispatcherPromise;
	    function HasDesktopApiDispatcherPromise() {
	        return !!InternalApiDispatcherHolder.GetDesktopDispatcherPromise();
	    }
	    InternalApiDispatcherHolder.HasDesktopApiDispatcherPromise = HasDesktopApiDispatcherPromise;
	    function SetDesktopDispatcherPromise(dispatcher) {
	        window.__tableauDesktopDispatcher = dispatcher;
	    }
	    InternalApiDispatcherHolder.SetDesktopDispatcherPromise = SetDesktopDispatcherPromise;
	})(InternalApiDispatcherHolder = exports.InternalApiDispatcherHolder || (exports.InternalApiDispatcherHolder = {}));


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var NotificationId = {
	    SelectedMarksChanged: 'selected-marks-changed',
	};
	exports.NotificationId = NotificationId;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ParameterId = {
	    AddInLocator: 'add-in-locator',
	    AddInBootstrapInfo: 'add-in-bootstrap-info',
	    VisualId: 'visual-id',
	    SheetPath: 'sheet-path',
	    IgnoreAliases: 'ignore-aliases',
	    IgnoreSelection: 'ignore-selection',
	    IncludeAllColumns: 'include-all-columns',
	    MaxRows: 'max-rows',
	    UnderlyingDataTable: 'underlying-data-table',
	    UnderlyingSummaryDataTable: 'underlying-summary-data-table',
	    SettingsValues: 'settings-values'
	};
	exports.ParameterId = ParameterId;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var VerbId = {
	    InitializeAddIn: 'initialize-add-in',
	    GetDataSummaryData: 'get-summary-data',
	    GetUnderlyingData: 'get-underlying-data',
	    SaveAddInSettings: 'save-add-in-settings'
	};
	exports.VerbId = VerbId;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(14));
	__export(__webpack_require__(19));


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var DataTable = (function () {
	    function DataTable(data, columns, totalRowCount, isSummaryData) {
	        this.data = data;
	        this.columns = columns;
	        this.totalRowCount = totalRowCount;
	        this.isSummaryData = isSummaryData;
	        // TODO: get rid of this in redesign.
	        this.name = isSummaryData ? 'Summary Data Table' : 'Underlying Data Table';
	    }
	    Object.defineProperty(DataTable.prototype, "Name", {
	        get: function () {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTable.prototype, "Data", {
	        get: function () {
	            return this.data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTable.prototype, "Columns", {
	        get: function () {
	            return this.columns;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTable.prototype, "TotalRowCount", {
	        get: function () {
	            return this.totalRowCount;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTable.prototype, "IsSummaryData", {
	        get: function () {
	            return this.isSummaryData;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return DataTable;
	}());
	exports.DataTable = DataTable;
	var Column = (function () {
	    function Column(fieldName, dataType, isReferenced, index) {
	        this.fieldName = fieldName;
	        this.dataType = dataType;
	        this.isReferenced = isReferenced;
	        this.index = index;
	    }
	    Object.defineProperty(Column.prototype, "FieldName", {
	        get: function () {
	            return this.fieldName;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Column.prototype, "DataType", {
	        get: function () {
	            return this.dataType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Column.prototype, "IsReferenced", {
	        get: function () {
	            return this.isReferenced;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Column.prototype, "Index", {
	        get: function () {
	            return this.index;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Column;
	}());
	exports.Column = Column;
	var DataValue = (function () {
	    function DataValue(value, formattedValue) {
	        this.value = value;
	        this.formattedValue = formattedValue;
	    }
	    Object.defineProperty(DataValue.prototype, "Value", {
	        get: function () {
	            return this.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataValue.prototype, "FormattedValue", {
	        get: function () {
	            return this.formattedValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return DataValue;
	}());
	exports.DataValue = DataValue;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var TableauExceptions = (function () {
	    function TableauExceptions() {
	    }
	    return TableauExceptions;
	}());
	exports.TableauExceptions = TableauExceptions;


/***/ },
/* 12 */
/***/ function(module, exports) {

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


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ServiceRegistry_1 = __webpack_require__(14);
	var GetDataServiceImpl_1 = __webpack_require__(15);
	function RegisterAllSharedServices(dispatcher) {
	    ServiceRegistry_1.ApiServiceRegistry.Instance.RegisterService(new GetDataServiceImpl_1.GetDataServiceImpl(dispatcher));
	    // TODO - more shared services
	}
	exports.RegisterAllSharedServices = RegisterAllSharedServices;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Collection of service name which will be registered in the api-shared project
	 */
	exports.ServiceNames = {
	    GetData: 'get-data-service'
	};
	var ServiceRegistryImpl = (function () {
	    function ServiceRegistryImpl() {
	        this.services = {};
	    }
	    ServiceRegistryImpl.prototype.RegisterService = function (service) {
	        this.services[service.serviceName] = service;
	    };
	    ServiceRegistryImpl.prototype.GetService = function (serviceName) {
	        if (!this.services.hasOwnProperty(serviceName)) {
	            throw new Error("No Service " + serviceName + " is registered");
	        }
	        return this.services[serviceName];
	    };
	    return ServiceRegistryImpl;
	}());
	/**
	 * static class used for getting access to the single instance
	 * of the ApiServiceRegistry
	 */
	var ApiServiceRegistry = (function () {
	    // Private to avoid anyone constructing this
	    function ApiServiceRegistry() {
	    }
	    Object.defineProperty(ApiServiceRegistry, "Instance", {
	        /**
	         * Gets the singleton instance of the ServiceRegistry
	         */
	        get: function () {
	            if (!window.__tableauApiServiceRegistry) {
	                ApiServiceRegistry.SetInstance(new ServiceRegistryImpl());
	            }
	            if (!window.__tableauApiServiceRegistry) {
	                throw new Error('Assigning service registry failed');
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
	    ApiServiceRegistry.SetInstance = function (serviceRegistry) {
	        window.__tableauApiServiceRegistry = serviceRegistry;
	    };
	    return ApiServiceRegistry;
	}());
	exports.ApiServiceRegistry = ApiServiceRegistry;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var GetDataService_1 = __webpack_require__(12);
	var ServiceRegistry_1 = __webpack_require__(14);
	var GetDataModels_1 = __webpack_require__(10);
	var api_external_contract_1 = __webpack_require__(16);
	var api_internal_contract_1 = __webpack_require__(18);
	var GetDataServiceImpl = (function () {
	    function GetDataServiceImpl(dispatcher) {
	        this.dispatcher = dispatcher;
	    }
	    Object.defineProperty(GetDataServiceImpl.prototype, "serviceName", {
	        get: function () {
	            return ServiceRegistry_1.ServiceNames.GetData;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    GetDataServiceImpl.prototype.GetUnderlyingDataAsync = function (visualid, getType, ignoreAliases, ignoreSelection, includeAllColumns, maxRows) {
	        var _this = this;
	        // Create all of our parameters
	        var verb = getType === GetDataService_1.GetDataType.Summary ? api_internal_contract_1.VerbId.GetDataSummaryData : api_internal_contract_1.VerbId.GetUnderlyingData;
	        var parameters = {};
	        parameters[api_internal_contract_1.ParameterId.VisualId] = visualid;
	        parameters[api_internal_contract_1.ParameterId.IgnoreAliases] = ignoreAliases;
	        parameters[api_internal_contract_1.ParameterId.IgnoreSelection] = ignoreSelection;
	        parameters[api_internal_contract_1.ParameterId.IncludeAllColumns] = includeAllColumns;
	        parameters[api_internal_contract_1.ParameterId.MaxRows] = maxRows;
	        return this.dispatcher.Execute(verb, parameters).then(function (response) {
	            var responseData = response.result;
	            return _this.ProcessResultsTable(responseData);
	        });
	    };
	    GetDataServiceImpl.prototype.ProcessResultsTable = function (responseData) {
	        var headers = responseData.Data.Headers.map(function (h) { return new GetDataModels_1.Column(h.FieldName, api_external_contract_1.DataType.STRING /*h.DataType*/, h.IsReferenced, h.Index); });
	        var table = responseData.Data.DataTable.map(function (row) {
	            return row.map(function (cell) {
	                return new GetDataModels_1.DataValue(cell.Value, cell.FormattedValue);
	            });
	        });
	        return new GetDataModels_1.DataTable(table, headers, table.length, responseData.IsSummary);
	    };
	    return GetDataServiceImpl;
	}());
	exports.GetDataServiceImpl = GetDataServiceImpl;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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
	__export(__webpack_require__(17));


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AddInContext;
	(function (AddInContext) {
	    AddInContext["DESKTOP"] = "desktop";
	    AddInContext["SERVER"] = "server";
	    AddInContext["UNKNOWN"] = "unknown";
	})(AddInContext = exports.AddInContext || (exports.AddInContext = {}));
	var AddInMode;
	(function (AddInMode) {
	    AddInMode["AUTHORING"] = "authoring";
	    AddInMode["VIEWING"] = "viewing";
	    AddInMode["UNKNOWN"] = "unknown";
	})(AddInMode = exports.AddInMode || (exports.AddInMode = {}));
	var SheetType;
	(function (SheetType) {
	    SheetType["DASHBOARD"] = "dashboard";
	    SheetType["STORY"] = "story";
	    SheetType["WORKSHEET"] = "worksheet";
	    SheetType["ADDIN"] = "addin";
	})(SheetType = exports.SheetType || (exports.SheetType = {}));
	var DashboardObjectType;
	(function (DashboardObjectType) {
	    DashboardObjectType["BLANK"] = "blank";
	    DashboardObjectType["WORKSHEET"] = "worksheet";
	    DashboardObjectType["QUICK_FILTER"] = "quickfilter";
	    DashboardObjectType["PARAMETER_CONTROL"] = "parametercontrol";
	    DashboardObjectType["PAGE_FILTER"] = "pagefilter";
	    DashboardObjectType["LEGEND"] = "legend";
	    DashboardObjectType["TITLE"] = "title";
	    DashboardObjectType["TEXT"] = "text";
	    DashboardObjectType["IMAGE"] = "image";
	    DashboardObjectType["WEB_PAGE"] = "webpage";
	    DashboardObjectType["ADD_IN"] = "addin";
	})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
	/**
	 * Represents a certain type of event which can be listened for
	 */
	var TableauEventType;
	(function (TableauEventType) {
	    /** The selected marks on a visualization has changed */
	    TableauEventType["MARK_SELECTION_CHANGED"] = "markselectionchanged";
	})(TableauEventType = exports.TableauEventType || (exports.TableauEventType = {}));
	/**
	 * The different types of data a value can have
	 */
	var DataType;
	(function (DataType) {
	    DataType["STRING"] = "string";
	    DataType["INT"] = "int";
	    DataType["FLOAT"] = "float";
	    DataType["BOOL"] = "bool";
	    DataType["DATE"] = "date";
	    DataType["DATE_TIME"] = "datetime";
	})(DataType = exports.DataType || (exports.DataType = {}));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

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
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_external_contract_1 = __webpack_require__(16);
	var api_internal_contract_1 = __webpack_require__(18);
	var api_utils_1 = __webpack_require__(20);
	/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
	/**
	 * Maps enums used by the internal-api-contract to the enums used
	 * in the external-api-contract, which developers code against.
	 */
	var InternalToExternalEnumMappings = (function () {
	    function InternalToExternalEnumMappings() {
	    }
	    InternalToExternalEnumMappings.AddInContext = new api_utils_1.EnumConverter((_a = {},
	        _a[api_internal_contract_1.AddInContext.DESKTOP] = api_external_contract_1.AddInContext.DESKTOP,
	        _a[api_internal_contract_1.AddInContext.SERVER] = api_external_contract_1.AddInContext.SERVER,
	        _a[api_internal_contract_1.AddInContext.UNKNOWN] = api_external_contract_1.AddInContext.UNKNOWN,
	        _a));
	    InternalToExternalEnumMappings.AddInMode = new api_utils_1.EnumConverter((_b = {},
	        _b[api_internal_contract_1.AddInMode.AUTHORING] = api_external_contract_1.AddInMode.AUTHORING,
	        _b[api_internal_contract_1.AddInMode.VIEWING] = api_external_contract_1.AddInMode.VIEWING,
	        _b[api_internal_contract_1.AddInMode.UNKNOWN] = api_external_contract_1.AddInMode.UNKNOWN,
	        _b));
	    InternalToExternalEnumMappings.SheetType = new api_utils_1.EnumConverter((_c = {},
	        _c[api_internal_contract_1.SheetType.DASHBOARD] = api_external_contract_1.SheetType.DASHBOARD,
	        _c[api_internal_contract_1.SheetType.STORY] = api_external_contract_1.SheetType.STORY,
	        _c[api_internal_contract_1.SheetType.WORKSHEET] = api_external_contract_1.SheetType.WORKSHEET,
	        _c));
	    InternalToExternalEnumMappings.DashboardObjectType = new api_utils_1.EnumConverter((_d = {},
	        _d[api_internal_contract_1.DashboardObjectType.BLANK] = api_external_contract_1.DashboardObjectType.BLANK,
	        _d[api_internal_contract_1.DashboardObjectType.IMAGE] = api_external_contract_1.DashboardObjectType.IMAGE,
	        _d[api_internal_contract_1.DashboardObjectType.LEGEND] = api_external_contract_1.DashboardObjectType.LEGEND,
	        _d[api_internal_contract_1.DashboardObjectType.PAGE_FILTER] = api_external_contract_1.DashboardObjectType.PAGE_FILTER,
	        _d[api_internal_contract_1.DashboardObjectType.PARAMETER_CONTROL] = api_external_contract_1.DashboardObjectType.PARAMETER_CONTROL,
	        _d[api_internal_contract_1.DashboardObjectType.QUICK_FILTER] = api_external_contract_1.DashboardObjectType.QUICK_FILTER,
	        _d[api_internal_contract_1.DashboardObjectType.TEXT] = api_external_contract_1.DashboardObjectType.TEXT,
	        _d[api_internal_contract_1.DashboardObjectType.TITLE] = api_external_contract_1.DashboardObjectType.TITLE,
	        _d[api_internal_contract_1.DashboardObjectType.WEB_PAGE] = api_external_contract_1.DashboardObjectType.WEB_PAGE,
	        _d[api_internal_contract_1.DashboardObjectType.WORKSHEET] = api_external_contract_1.DashboardObjectType.WORKSHEET,
	        _d));
	    InternalToExternalEnumMappings.DataType = new api_utils_1.EnumConverter((_e = {},
	        _e[api_internal_contract_1.DataType.BOOL] = api_external_contract_1.DataType.BOOL,
	        _e[api_internal_contract_1.DataType.DATE] = api_external_contract_1.DataType.DATE,
	        _e[api_internal_contract_1.DataType.DATE_TIME] = api_external_contract_1.DataType.DATE_TIME,
	        _e[api_internal_contract_1.DataType.FLOAT] = api_external_contract_1.DataType.FLOAT,
	        _e[api_internal_contract_1.DataType.INT] = api_external_contract_1.DataType.INT,
	        _e[api_internal_contract_1.DataType.STRING] = api_external_contract_1.DataType.STRING,
	        _e));
	    return InternalToExternalEnumMappings;
	}());
	exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings;
	var _a, _b, _c, _d, _e;
	/* tslint:enable:typedef */


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * This is your main. This is where you re-export everything you want to be publicly available.
	 *
	 * The build enforces that the file has the same name as the global variable that is exported.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	var EnumConverter_1 = __webpack_require__(21);
	exports.EnumConverter = EnumConverter_1.EnumConverter;


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * This class converts from a source enum value to destination enum
	 * value given a mapping from source to destination when constructed.
	 */
	var EnumConverter = (function () {
	    function EnumConverter(mappings, defaultVal) {
	        this.defaultVal = undefined;
	        this.mappings = mappings;
	        this.defaultVal = defaultVal;
	    }
	    EnumConverter.prototype.Convert = function (enumVal, throwIfMissing) {
	        if (this.mappings.hasOwnProperty(enumVal)) {
	            return this.mappings[enumVal];
	        }
	        if (this.defaultVal !== undefined && !throwIfMissing) {
	            return this.defaultVal;
	        }
	        throw new Error('Mapping not found for ' + enumVal);
	    };
	    return EnumConverter;
	}());
	exports.EnumConverter = EnumConverter;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

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
	var Sheet_1 = __webpack_require__(23);
	var Dashboard = (function (_super) {
	    __extends(Dashboard, _super);
	    function Dashboard(dashboardImpl) {
	        var _this = _super.call(this, dashboardImpl) || this;
	        _this.dashboardImpl = dashboardImpl;
	        return _this;
	    }
	    Object.defineProperty(Dashboard.prototype, "Worksheets", {
	        get: function () {
	            return this.dashboardImpl.Worksheets;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Dashboard;
	}(Sheet_1.Sheet));
	exports.Dashboard = Dashboard;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

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
	var EventListenerManager_1 = __webpack_require__(24);
	var Sheet = (function (_super) {
	    __extends(Sheet, _super);
	    function Sheet(sheetImpl) {
	        var _this = _super.call(this) || this;
	        _this.sheetImpl = sheetImpl;
	        return _this;
	    }
	    Object.defineProperty(Sheet.prototype, "Name", {
	        get: function () {
	            return this.sheetImpl.Name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Sheet.prototype, "SheetType", {
	        get: function () {
	            return this.sheetImpl.SheetType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Sheet;
	}(EventListenerManager_1.EventListenerManager));
	exports.Sheet = Sheet;


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var EventListenerManager = (function () {
	    function EventListenerManager() {
	        // TODO
	    }
	    EventListenerManager.prototype.addEventListener = function (eventType, handler) {
	        throw new Error('EventListenerManager not yet implemented');
	    };
	    EventListenerManager.prototype.removeEventListener = function (eventType, handler) {
	        throw new Error('EventListenerManager not yet implemented');
	    };
	    return EventListenerManager;
	}());
	exports.EventListenerManager = EventListenerManager;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

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
	var api_external_contract_1 = __webpack_require__(26);
	var api_internal_contract_1 = __webpack_require__(3);
	var Worksheet_1 = __webpack_require__(27);
	var AddInSheetInfoImpl_1 = __webpack_require__(28);
	var SheetImpl_1 = __webpack_require__(29);
	var WorksheetImpl_1 = __webpack_require__(30);
	var DashboardImpl = (function (_super) {
	    __extends(DashboardImpl, _super);
	    function DashboardImpl(info, sheetPath) {
	        var _this = _super.call(this, new AddInSheetInfoImpl_1.AddInSheetInfoImpl(info.Name, api_external_contract_1.SheetType.DASHBOARD)) || this;
	        _this.worksheets = new Array();
	        // Process all the zones which are contained in this dashboard
	        for (var _i = 0, _a = info.Zones; _i < _a.length; _i++) {
	            var zone = _a[_i];
	            if (zone.ZoneType === api_internal_contract_1.DashboardObjectType.WORKSHEET) {
	                var sheetInfo = new AddInSheetInfoImpl_1.AddInSheetInfoImpl(zone.Name, api_external_contract_1.SheetType.WORKSHEET);
	                var vizId = {
	                    Worksheet: zone.Name,
	                    Dashboard: info.Name,
	                    Storyboard: sheetPath.Storyboard,
	                    FlipboardZoneID: sheetPath.FlipboardZoneID,
	                    StoryPointID: sheetPath.StoryPointID
	                };
	                var worksheetImpl = new WorksheetImpl_1.WorksheetImpl(sheetInfo, vizId);
	                _this.worksheets.push(new Worksheet_1.Worksheet(worksheetImpl));
	            }
	        }
	        return _this;
	    }
	    Object.defineProperty(DashboardImpl.prototype, "Worksheets", {
	        get: function () { return this.worksheets; },
	        enumerable: true,
	        configurable: true
	    });
	    return DashboardImpl;
	}(SheetImpl_1.SheetImpl));
	exports.DashboardImpl = DashboardImpl;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

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
	__export(__webpack_require__(17));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

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
	var Sheet_1 = __webpack_require__(23);
	var Worksheet = (function (_super) {
	    __extends(Worksheet, _super);
	    function Worksheet(worksheetImpl) {
	        var _this = _super.call(this, worksheetImpl) || this;
	        _this.worksheetImpl = worksheetImpl;
	        return _this;
	    }
	    Worksheet.prototype.GetSelectedMarksAsync = function () {
	        return this.worksheetImpl.GetSelectedMarksAsync();
	    };
	    Worksheet.prototype.GetSummaryDataAsync = function (ignoreAliases, ignoreSelection, includeAllColumns) {
	        return this.worksheetImpl.GetSummaryDataAsync(ignoreAliases, ignoreSelection, includeAllColumns);
	    };
	    Worksheet.prototype.GetUnderlyingDataAsync = function (ignoreAliases, ignoreSelection, includeAllColumns, maxRows) {
	        return this.worksheetImpl.GetUnderlyingDataAsync(ignoreAliases, ignoreSelection, includeAllColumns, maxRows);
	    };
	    return Worksheet;
	}(Sheet_1.Sheet));
	exports.Worksheet = Worksheet;


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AddInSheetInfoImpl = (function () {
	    // TODO: ZoneId
	    // TODO: SheetSize
	    function AddInSheetInfoImpl(name, sheetType) {
	        this.name = name;
	        this.sheetType = sheetType;
	    }
	    Object.defineProperty(AddInSheetInfoImpl.prototype, "Name", {
	        get: function () {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AddInSheetInfoImpl.prototype, "SheetType", {
	        get: function () {
	            return this.sheetType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return AddInSheetInfoImpl;
	}());
	exports.AddInSheetInfoImpl = AddInSheetInfoImpl;


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var SheetImpl = (function () {
	    function SheetImpl(sheetInfoImpl) {
	        this.name = sheetInfoImpl.Name;
	        this.sheetType = sheetInfoImpl.SheetType;
	    }
	    Object.defineProperty(SheetImpl.prototype, "Name", {
	        get: function () {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SheetImpl.prototype, "SheetType", {
	        get: function () {
	            return this.sheetType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SheetImpl;
	}());
	exports.SheetImpl = SheetImpl;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

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
	var api_shared_1 = __webpack_require__(9);
	var SheetImpl_1 = __webpack_require__(29);
	var WorksheetImpl = (function (_super) {
	    __extends(WorksheetImpl, _super);
	    function WorksheetImpl(sheetInfoImpl, visualId) {
	        var _this = _super.call(this, sheetInfoImpl) || this;
	        _this.visualId = visualId;
	        return _this;
	    }
	    Object.defineProperty(WorksheetImpl.prototype, "VisualId", {
	        get: function () {
	            return this.visualId;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    WorksheetImpl.prototype.GetSelectedMarksAsync = function () {
	        throw new Error('GetSelectedMarksAsync not yet implemented');
	    };
	    WorksheetImpl.prototype.GetSummaryDataAsync = function (ignoreAliases, ignoreSelection, includeAllColumns) {
	        var service = api_shared_1.ApiServiceRegistry.Instance.GetService(api_shared_1.ServiceNames.GetData);
	        return service.GetUnderlyingDataAsync(this.VisualId, api_shared_1.GetDataType.Summary, !!ignoreAliases, !!ignoreSelection, !!includeAllColumns, 0);
	    };
	    WorksheetImpl.prototype.GetUnderlyingDataAsync = function (ignoreAliases, ignoreSelection, includeAllColumns, maxRows) {
	        var service = api_shared_1.ApiServiceRegistry.Instance.GetService(api_shared_1.ServiceNames.GetData);
	        return service.GetUnderlyingDataAsync(this.VisualId, api_shared_1.GetDataType.Underlying, !!ignoreAliases, !!ignoreSelection, !!includeAllColumns, maxRows || 0);
	    };
	    return WorksheetImpl;
	}(SheetImpl_1.SheetImpl));
	exports.WorksheetImpl = WorksheetImpl;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Implementation of the external DashboardContent namespace.
	 * This does not follow the Impl pattern as DashboardContent is
	 * currently just a (single) property bag.
	 */
	var DashboardContent = (function () {
	    function DashboardContent(dashboard) {
	        this.dashboard = dashboard;
	    }
	    Object.defineProperty(DashboardContent.prototype, "Dashboard", {
	        get: function () {
	            return this.dashboard;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return DashboardContent;
	}());
	exports.DashboardContent = DashboardContent;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_shared_1 = __webpack_require__(9);
	/**
	 * Implementation of the external environment namespace.
	 * Environment does not follow the Impl pattern as it is
	 * just a property bag.
	 */
	var Environment = (function () {
	    function Environment(addInEnvironment) {
	        this.apiVersion = addInEnvironment.APIVersion;
	        this.context = api_shared_1.InternalToExternalEnumMappings.AddInContext.Convert(addInEnvironment.AddInContext);
	        this.language = addInEnvironment.AddInLanguage;
	        this.locale = addInEnvironment.AddInLocale;
	        this.mode = api_shared_1.InternalToExternalEnumMappings.AddInMode.Convert(addInEnvironment.AddInMode);
	        this.operatingSystem = addInEnvironment.OperatingSystem;
	        this.tableauVersion = addInEnvironment.TableauVersion;
	    }
	    Object.defineProperty(Environment.prototype, "ApiVersion", {
	        get: function () {
	            return this.apiVersion;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Environment.prototype, "Context", {
	        get: function () {
	            return this.context;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Environment.prototype, "Language", {
	        get: function () {
	            return this.language;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Environment.prototype, "Locale", {
	        get: function () {
	            return this.locale;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Environment.prototype, "Mode", {
	        get: function () {
	            return this.mode;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Environment.prototype, "OperatingSystem", {
	        get: function () {
	            return this.operatingSystem;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Environment.prototype, "TableauVersion", {
	        get: function () {
	            return this.tableauVersion;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Environment;
	}());
	exports.Environment = Environment;


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AddInServiceNames = {
	    InitializationService: 'InitializationService'
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var InitializationServiceImpl_1 = __webpack_require__(35);
	var api_shared_1 = __webpack_require__(9);
	function RegisterAllAddInServices(dispatcher) {
	    api_shared_1.ApiServiceRegistry.Instance.RegisterService(new InitializationServiceImpl_1.InitializationServiceImpl(dispatcher));
	}
	exports.RegisterAllAddInServices = RegisterAllAddInServices;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AddInServiceNames_1 = __webpack_require__(33);
	var api_internal_contract_1 = __webpack_require__(3);
	var InitializationServiceImpl = (function () {
	    function InitializationServiceImpl(dispatcher) {
	        this.dispatcher = dispatcher;
	    }
	    Object.defineProperty(InitializationServiceImpl.prototype, "serviceName", {
	        get: function () {
	            return AddInServiceNames_1.AddInServiceNames.InitializationService;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    InitializationServiceImpl.prototype.InitializeDashboardAddIn = function () {
	        // We don't need any parameters for this call because they are added in for us by the dispatcher
	        return this.dispatcher.Execute(api_internal_contract_1.VerbId.InitializeAddIn, {}).then(function (response) {
	            // TODO - Validate return value
	            var result = response.result;
	            return result;
	        });
	    };
	    return InitializationServiceImpl;
	}());
	exports.InitializationServiceImpl = InitializationServiceImpl;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=addin-api.js.map