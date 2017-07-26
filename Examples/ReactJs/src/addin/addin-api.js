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
	    Object.defineProperty(AddIn.prototype, "settings", {
	        get: function () {
	            return this.addInImpl.settings;
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
	var Dashboard_1 = __webpack_require__(30);
	var DashboardImpl_1 = __webpack_require__(32);
	var SettingsImpl_1 = __webpack_require__(38);
	var DashboardContent_1 = __webpack_require__(41);
	var Environment_1 = __webpack_require__(42);
	var Settings_1 = __webpack_require__(43);
	var AddInServiceNames_1 = __webpack_require__(40);
	var RegisterAllAddInServices_1 = __webpack_require__(44);
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
	        return initializationService.InitializeDashboardAddInAsync().then(function (result) {
	            if (!result.AddInInstance.Locator.DashboardPath) {
	                throw new Error('DashboardPath is undefined');
	            }
	            _this.dashboardContent = _this.InitializeDashboardContent(result.AddinDashboardInfo, result.AddInInstance.Locator.DashboardPath);
	            _this.environment = new Environment_1.Environment(result.AddInEnvironment);
	            _this.settings = _this.InitializeSettings(result.AddInSettingsInfo);
	        });
	    };
	    AddInImpl.prototype.InitializeDashboardContent = function (info, sheetPath) {
	        var dashboardImpl = new DashboardImpl_1.DashboardImpl(info, sheetPath);
	        var dashboard = new Dashboard_1.Dashboard(dashboardImpl);
	        return new DashboardContent_1.DashboardContent(dashboard);
	    };
	    AddInImpl.prototype.InitializeSettings = function (settingsInfo) {
	        var settingsImpl = new SettingsImpl_1.SettingsImpl(settingsInfo);
	        return new Settings_1.Settings(settingsImpl);
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
	var NotificationId;
	(function (NotificationId) {
	    NotificationId["SelectedMarksChanged"] = "selected-marks-changed";
	})(NotificationId = exports.NotificationId || (exports.NotificationId = {}));


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ParameterId;
	(function (ParameterId) {
	    ParameterId["AddInLocator"] = "add-in-locator";
	    ParameterId["AddInBootstrapInfo"] = "add-in-bootstrap-info";
	    ParameterId["AddInSettingsInfo"] = "add-in-settings-info";
	    ParameterId["VisualId"] = "visual-id";
	    ParameterId["SheetPath"] = "sheet-path";
	    ParameterId["IgnoreAliases"] = "ignore-aliases";
	    ParameterId["IgnoreSelection"] = "ignore-selection";
	    ParameterId["IncludeAllColumns"] = "include-all-columns";
	    ParameterId["MaxRows"] = "max-rows";
	    ParameterId["UnderlyingDataTable"] = "underlying-data-table";
	    ParameterId["UnderlyingSummaryDataTable"] = "underlying-summary-data-table";
	    ParameterId["SettingsValues"] = "settings-values";
	    ParameterId["SelectedData"] = "selected-data";
	    ParameterId["HighlightedData"] = "highlighted-data";
	})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var VerbId;
	(function (VerbId) {
	    VerbId["InitializeAddIn"] = "initialize-add-in";
	    VerbId["GetDataSummaryData"] = "get-summary-data";
	    VerbId["GetUnderlyingData"] = "get-underlying-data";
	    VerbId["SaveAddInSettings"] = "save-add-in-settings";
	    VerbId["GetSelectedMarks"] = "get-selected-marks";
	    VerbId["GetHighlightedMarks"] = "get-highlighted-marks";
	})(VerbId = exports.VerbId || (exports.VerbId = {}));


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
	__export(__webpack_require__(18));
	__export(__webpack_require__(17));
	__export(__webpack_require__(16));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(26));


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Class designed to register and unregister handlers from a user. Only those events
	 * which are added via AddNewEventType will be supported by this instance
	 */
	var EventListenerManager = (function () {
	    function EventListenerManager() {
	        this.eventListenerManagers = {};
	    }
	    EventListenerManager.prototype.AddEventListener = function (eventType, handler) {
	        if (!this.eventListenerManagers.hasOwnProperty(eventType)) {
	            throw new Error("Unsupported event type : " + eventType);
	        }
	        return this.eventListenerManagers[eventType].AddEventListener(handler);
	    };
	    EventListenerManager.prototype.RemoveEventListener = function (eventType, handler) {
	        if (!this.eventListenerManagers.hasOwnProperty(eventType)) {
	            throw new Error("Unsupported event type : " + eventType);
	        }
	        return this.eventListenerManagers[eventType].RemoveEventListener(handler);
	    };
	    EventListenerManager.prototype.AddNewEventType = function (eventManager) {
	        this.eventListenerManagers[eventManager.EventType] = eventManager;
	    };
	    return EventListenerManager;
	}());
	exports.EventListenerManager = EventListenerManager;


/***/ },
/* 11 */
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
	    function Column(fieldName, dataType, // TODO: this shoudl be an enum type
	        isReferenced, index) {
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
	    /* tslint:disable:no-any */
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
/* 12 */
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
/* 13 */
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
	var api_external_contract_1 = __webpack_require__(14);
	var TableauWorksheetEvent_1 = __webpack_require__(16);
	var MarksSelectedEvent = (function (_super) {
	    __extends(MarksSelectedEvent, _super);
	    function MarksSelectedEvent(worksheet) {
	        return _super.call(this, api_external_contract_1.TableauEventType.MARK_SELECTION_CHANGED, worksheet) || this;
	    }
	    MarksSelectedEvent.prototype.GetMarksAsync = function () {
	        return this.Worksheet.GetSelectedMarksAsync();
	    };
	    return MarksSelectedEvent;
	}(TableauWorksheetEvent_1.TableauWorksheetEvent));
	exports.MarksSelectedEvent = MarksSelectedEvent;


/***/ },
/* 14 */
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
	__export(__webpack_require__(15));


/***/ },
/* 15 */
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
/* 16 */
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
	var TableauSheetEvent_1 = __webpack_require__(17);
	var TableauWorksheetEvent = (function (_super) {
	    __extends(TableauWorksheetEvent, _super);
	    function TableauWorksheetEvent(type, worksheet) {
	        var _this = _super.call(this, type, worksheet) || this;
	        _this.worksheet = worksheet;
	        return _this;
	    }
	    Object.defineProperty(TableauWorksheetEvent.prototype, "Worksheet", {
	        get: function () {
	            return this.worksheet;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return TableauWorksheetEvent;
	}(TableauSheetEvent_1.TableauSheetEvent));
	exports.TableauWorksheetEvent = TableauWorksheetEvent;


/***/ },
/* 17 */
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
	var TableauEvent_1 = __webpack_require__(18);
	var TableauSheetEvent = (function (_super) {
	    __extends(TableauSheetEvent, _super);
	    function TableauSheetEvent(type, sheet) {
	        var _this = _super.call(this, type) || this;
	        _this.sheet = sheet;
	        return _this;
	    }
	    Object.defineProperty(TableauSheetEvent.prototype, "Sheet", {
	        get: function () {
	            return this.sheet;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return TableauSheetEvent;
	}(TableauEvent_1.TableauEvent));
	exports.TableauSheetEvent = TableauSheetEvent;


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var TableauEvent = (function () {
	    function TableauEvent(type) {
	        this.type = type;
	    }
	    Object.defineProperty(TableauEvent.prototype, "Type", {
	        get: function () {
	            return this.type;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return TableauEvent;
	}());
	exports.TableauEvent = TableauEvent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * This class implements the SingleEventManager interface for a single type of Tableau event
	 *
	 * @template TEventType The Tableau event type this class specializes
	 */
	var SingleEventManagerImpl = (function () {
	    function SingleEventManagerImpl(eventType) {
	        this.eventType = eventType;
	        this.handlers = [];
	    }
	    Object.defineProperty(SingleEventManagerImpl.prototype, "EventType", {
	        get: function () {
	            return this.eventType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SingleEventManagerImpl.prototype.AddEventListener = function (handler) {
	        var _this = this;
	        this.handlers.push(handler);
	        return function () { return _this.RemoveEventListener(handler); };
	    };
	    SingleEventManagerImpl.prototype.RemoveEventListener = function (handler) {
	        var beforeCount = this.handlers.length;
	        this.handlers = this.handlers.filter(function (h) { return h !== handler; });
	        return beforeCount > this.handlers.length;
	    };
	    SingleEventManagerImpl.prototype.TriggerEvent = function (eventGenerator) {
	        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
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


/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ServiceRegistry_1 = __webpack_require__(22);
	var GetDataServiceImpl_1 = __webpack_require__(23);
	var NotificationServiceImpl_1 = __webpack_require__(25);
	function RegisterAllSharedServices(dispatcher) {
	    ServiceRegistry_1.ApiServiceRegistry.Instance.RegisterService(new GetDataServiceImpl_1.GetDataServiceImpl(dispatcher));
	    ServiceRegistry_1.ApiServiceRegistry.Instance.RegisterService(new NotificationServiceImpl_1.NotificationServiceImpl(dispatcher));
	    // TODO - more shared services
	}
	exports.RegisterAllSharedServices = RegisterAllSharedServices;


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Collection of service name which will be registered in the api-shared project
	 */
	exports.ServiceNames = {
	    GetData: 'get-data-service',
	    Notification: 'notification-service'
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var GetDataService_1 = __webpack_require__(20);
	var ServiceRegistry_1 = __webpack_require__(22);
	var GetDataModels_1 = __webpack_require__(11);
	var api_external_contract_1 = __webpack_require__(14);
	var api_internal_contract_1 = __webpack_require__(24);
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
	    GetDataServiceImpl.prototype.GetUnderlyingDataAsync = function (visualId, getType, ignoreAliases, ignoreSelection, includeAllColumns, maxRows) {
	        var _this = this;
	        // Create all of our parameters
	        var verb = getType === GetDataService_1.GetDataType.Summary ? api_internal_contract_1.VerbId.GetDataSummaryData : api_internal_contract_1.VerbId.GetUnderlyingData;
	        var parameters = {};
	        parameters[api_internal_contract_1.ParameterId.VisualId] = visualId;
	        parameters[api_internal_contract_1.ParameterId.IgnoreAliases] = ignoreAliases;
	        parameters[api_internal_contract_1.ParameterId.IgnoreSelection] = ignoreSelection;
	        parameters[api_internal_contract_1.ParameterId.IncludeAllColumns] = includeAllColumns;
	        parameters[api_internal_contract_1.ParameterId.MaxRows] = maxRows;
	        return this.dispatcher.Execute(verb, parameters).then(function (response) {
	            var responseData = response.result;
	            return _this.ProcessResultsTable(responseData.Data, responseData.IsSummary);
	        });
	    };
	    GetDataServiceImpl.prototype.ProcessResultsTable = function (responseData, isSummary) {
	        var headers = responseData.Headers.map(function (h) { return new GetDataModels_1.Column(h.FieldName, api_external_contract_1.DataType.STRING /*h.DataType*/, h.IsReferenced, h.Index); });
	        var table = responseData.DataTable.map(function (row) {
	            return row.map(function (cell) {
	                return new GetDataModels_1.DataValue(cell.Value, cell.FormattedValue);
	            });
	        });
	        return new GetDataModels_1.DataTable(table, headers, table.length, isSummary);
	    };
	    GetDataServiceImpl.prototype.GetSelectedMarksAsync = function (visualId) {
	        var _this = this;
	        var parameters = (_a = {}, _a[api_internal_contract_1.ParameterId.VisualId] = visualId, _a);
	        return this.dispatcher.Execute(api_internal_contract_1.VerbId.GetSelectedMarks, parameters).then(function (response) {
	            var responseData = response.result;
	            return {
	                Data: responseData.Data.map(function (table) { return _this.ProcessResultsTable(table, true); })
	            };
	        });
	        var _a;
	    };
	    GetDataServiceImpl.prototype.GetHighlightedMarksAsync = function (visualId) {
	        var _this = this;
	        var parameters = (_a = {}, _a[api_internal_contract_1.ParameterId.VisualId] = visualId, _a);
	        return this.dispatcher.Execute(api_internal_contract_1.VerbId.GetHighlightedMarks, parameters).then(function (response) {
	            var responseData = response.result;
	            return {
	                Data: responseData.Data.map(function (table) { return _this.ProcessResultsTable(table, true); })
	            };
	        });
	        var _a;
	    };
	    return GetDataServiceImpl;
	}());
	exports.GetDataServiceImpl = GetDataServiceImpl;


/***/ },
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ServiceRegistry_1 = __webpack_require__(22);
	var Registration = (function () {
	    function Registration(filterFn, callbackFn) {
	        this.filterFn = filterFn;
	        this.callbackFn = callbackFn;
	        // Nothing Here
	    }
	    Registration.prototype.OnNotification = function (notificationModel) {
	        if (this.filterFn(notificationModel)) {
	            this.callbackFn(notificationModel);
	        }
	    };
	    return Registration;
	}());
	var NotificationServiceImpl = (function () {
	    function NotificationServiceImpl(dispatcher) {
	        this.dispatcher = dispatcher;
	        this.handlers = {};
	        this.dispatcher.RegisterNotificationHandler(this.OnNotification.bind(this));
	    }
	    Object.defineProperty(NotificationServiceImpl.prototype, "serviceName", {
	        get: function () {
	            return ServiceRegistry_1.ServiceNames.Notification;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NotificationServiceImpl.prototype.HasHandlersForNotificationType = function (id) {
	        return this.handlers.hasOwnProperty(id);
	    };
	    NotificationServiceImpl.prototype.OnNotification = function (notification) {
	        if (!this.HasHandlersForNotificationType(notification.notificationId)) {
	            return;
	        }
	        // Go through and check for all the handlers of this particular notification
	        this.handlers[notification.notificationId].forEach(function (h) { return h.OnNotification(notification.data); });
	    };
	    NotificationServiceImpl.prototype.RemoveRegistration = function (id, registration) {
	        if (!this.HasHandlersForNotificationType(id)) {
	            return;
	        }
	        this.handlers[id] = this.handlers[id].filter(function (reg) { return reg !== registration; });
	    };
	    NotificationServiceImpl.prototype.RegisterHandler = function (id, filterFn, handler) {
	        var _this = this;
	        var handlers = this.handlers[id] || new Array();
	        var registration = new Registration(filterFn, handler);
	        handlers.push(registration);
	        this.handlers[id] = handlers;
	        return function () { return _this.RemoveRegistration(id, registration); };
	    };
	    return NotificationServiceImpl;
	}());
	exports.NotificationServiceImpl = NotificationServiceImpl;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_external_contract_1 = __webpack_require__(14);
	var api_internal_contract_1 = __webpack_require__(24);
	var api_utils_1 = __webpack_require__(27);
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * This is your main. This is where you re-export everything you want to be publicly available.
	 *
	 * The build enforces that the file has the same name as the global variable that is exported.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	var EnumConverter_1 = __webpack_require__(28);
	exports.EnumConverter = EnumConverter_1.EnumConverter;
	var Param_1 = __webpack_require__(29);
	exports.Param = Param_1.Param;


/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Param = (function () {
	    function Param() {
	    }
	    /**
	     * Verifies that an incoming parameter is 'truthy' and throws
	     * an error if it's not. This will throw an error if the value
	     * is null, undefined, NaN, the empty string, 0, or false.
	     *
	     * @param argumentValue value to verify
	     * @param argumentName name of argument to verify
	     */
	    Param.VerifyValue = function (argumentValue, argumentName) {
	        if (!argumentValue) {
	            throw new Error('Value is invalid for argument: ' + argumentName);
	        }
	    };
	    /**
	     * Verifies that a string is valid.  Throws an error if the string is
	     * null, undefined, or NaN.
	     *
	     * @param argumentValue value to verify
	     * @param argumentName name of argument to verify
	     */
	    Param.VerifyString = function (argumentValue, argumentName) {
	        if (argumentValue === null || argumentValue === undefined) {
	            throw new Error('String value is invalid for argument: ' + argumentName);
	        }
	    };
	    return Param;
	}());
	exports.Param = Param;


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
	var Sheet_1 = __webpack_require__(31);
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
/* 31 */
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
	}(api_shared_1.EventListenerManager));
	exports.Sheet = Sheet;


/***/ },
/* 32 */
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
	var api_external_contract_1 = __webpack_require__(33);
	var api_internal_contract_1 = __webpack_require__(3);
	var Worksheet_1 = __webpack_require__(34);
	var AddInSheetInfoImpl_1 = __webpack_require__(35);
	var SheetImpl_1 = __webpack_require__(36);
	var WorksheetImpl_1 = __webpack_require__(37);
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
/* 33 */
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
	__export(__webpack_require__(15));


/***/ },
/* 34 */
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
	var Sheet_1 = __webpack_require__(31);
	var Worksheet = (function (_super) {
	    __extends(Worksheet, _super);
	    function Worksheet(worksheetImpl) {
	        var _this = _super.call(this, worksheetImpl) || this;
	        _this.worksheetImpl = worksheetImpl;
	        // Call to initialize events and then call down to the event listener manager to handle things
	        _this.worksheetImpl.InitializeEvents(_this).forEach(function (e) { return _this.AddNewEventType(e); });
	        return _this;
	    }
	    Worksheet.prototype.GetSelectedMarksAsync = function () {
	        return this.worksheetImpl.GetSelectedMarksAsync();
	    };
	    Worksheet.prototype.GetHighlightedMarksAsync = function () {
	        return this.worksheetImpl.GetHighlightedMarksAsync();
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
	var api_external_contract_1 = __webpack_require__(33);
	var api_internal_contract_1 = __webpack_require__(3);
	var api_shared_1 = __webpack_require__(9);
	var SheetImpl_1 = __webpack_require__(36);
	var VisualIdsAreEqual = function (a, b) {
	    return a && b &&
	        a.Worksheet === b.Worksheet &&
	        a.Dashboard === b.Dashboard &&
	        a.Storyboard === b.Storyboard &&
	        a.StoryPointID === b.StoryPointID &&
	        a.FlipboardZoneID === b.FlipboardZoneID;
	};
	var WorksheetImpl = (function (_super) {
	    __extends(WorksheetImpl, _super);
	    function WorksheetImpl(sheetInfoImpl, visualId) {
	        var _this = _super.call(this, sheetInfoImpl) || this;
	        _this.visualId = visualId;
	        return _this;
	    }
	    /**
	     * Helper method which goes through and registers each event type this impl knows about
	     * with the NotificationService. It returns an array of SingleEventManager objects which
	     * can then be passed to an EventListenerManager to handle user registration / unregistration.
	     *
	     * @param {Worksheet} worksheet The worksheet object which will be included with the event notifications
	     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
	     */
	    WorksheetImpl.prototype.InitializeEvents = function (worksheet) {
	        var _this = this;
	        var results = new Array();
	        var notificationService;
	        try {
	            notificationService = api_shared_1.ApiServiceRegistry.Instance.GetService(api_shared_1.ServiceNames.Notification);
	        }
	        catch (e) {
	            // If we don't have this service registered, just return
	            return results;
	        }
	        // Initialize all of the event managers we'll need (one for each event type)
	        var marksEvent = new api_shared_1.SingleEventManagerImpl(api_external_contract_1.TableauEventType.MARK_SELECTION_CHANGED);
	        notificationService.RegisterHandler(api_internal_contract_1.NotificationId.SelectedMarksChanged, function (model) {
	            var visualId = model;
	            return VisualIdsAreEqual(visualId, _this.VisualId);
	        }, function (viz) {
	            marksEvent.TriggerEvent(function () { return new api_shared_1.MarksSelectedEvent(worksheet); });
	        });
	        results.push(marksEvent);
	        // TODO - other event types
	        return results;
	    };
	    Object.defineProperty(WorksheetImpl.prototype, "VisualId", {
	        get: function () {
	            return this.visualId;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    WorksheetImpl.prototype.GetSelectedMarksAsync = function () {
	        var service = api_shared_1.ApiServiceRegistry.Instance.GetService(api_shared_1.ServiceNames.GetData);
	        return service.GetSelectedMarksAsync(this.VisualId);
	    };
	    WorksheetImpl.prototype.GetHighlightedMarksAsync = function () {
	        var service = api_shared_1.ApiServiceRegistry.Instance.GetService(api_shared_1.ServiceNames.GetData);
	        return service.GetHighlightedMarksAsync(this.VisualId);
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_shared_1 = __webpack_require__(9);
	var api_utils_1 = __webpack_require__(39);
	var AddInServiceNames_1 = __webpack_require__(40);
	var SettingsImpl = (function () {
	    function SettingsImpl(settingsInfo) {
	        // Since promises can't be introspected for state, keep a variable that
	        // indicates a save is in progress, so that set/erase can't be called during a save.
	        this.saveInProgress = false;
	        this.initializeSettings(settingsInfo);
	    }
	    SettingsImpl.prototype.erase = function (key) {
	        api_utils_1.Param.VerifyValue(key, 'key');
	        // Only make a modification if we have the key already
	        if (this.currentSettings[key]) {
	            this.VerifySettingsAreUnlocked();
	            delete this.currentSettings[key];
	            this.isModified = true;
	        }
	    };
	    SettingsImpl.prototype.get = function (key) {
	        api_utils_1.Param.VerifyValue(key, 'key');
	        return this.currentSettings[key];
	    };
	    SettingsImpl.prototype.getAll = function () {
	        // Returns a mutable copy of the settings
	        return Object.assign({}, this.currentSettings);
	    };
	    Object.defineProperty(SettingsImpl.prototype, "IsModified", {
	        get: function () {
	            return this.isModified;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SettingsImpl.prototype.saveAsync = function () {
	        var _this = this;
	        this.VerifySettingsAreUnlocked();
	        // Just resolve immediately if settings are unchanged
	        if (!this.isModified) {
	            return Promise.resolve(this.currentSettings);
	        }
	        this.saveInProgress = true;
	        // Use the settings service to save settings to twb
	        var settingsService = api_shared_1.ApiServiceRegistry.Instance.GetService(AddInServiceNames_1.AddInServiceNames.SettingsService);
	        return settingsService.SaveSettingsAsync(this.currentSettings).then(function (newSettings) {
	            _this.saveInProgress = false;
	            _this.isModified = false;
	            Object.assign(_this.currentSettings, newSettings);
	            return newSettings;
	        });
	    };
	    SettingsImpl.prototype.set = function (key, value) {
	        api_utils_1.Param.VerifyValue(key, 'key'); // Key shouldn't be an empty string.
	        api_utils_1.Param.VerifyString(value, 'value'); // Empty string value is allowed.
	        this.VerifySettingsAreUnlocked();
	        this.currentSettings[key] = value;
	        this.isModified = true;
	    };
	    SettingsImpl.prototype.initializeSettings = function (settingsInfo) {
	        api_utils_1.Param.VerifyValue(settingsInfo, 'settingsInfo');
	        api_utils_1.Param.VerifyValue(settingsInfo.SettingsValues, 'settingsInfo.SettingsValues');
	        this.currentSettings = settingsInfo.SettingsValues;
	        // Reset the isModified flag
	        this.isModified = false;
	    };
	    /**
	     * This helper should be called before any local update to this.currentSettings.
	     * Checks if a current save call is still in progress and throws an error if so.
	     */
	    SettingsImpl.prototype.VerifySettingsAreUnlocked = function () {
	        if (this.saveInProgress) {
	            throw new Error('Async Save is in progress, updating settings is not allowed.');
	        }
	    };
	    return SettingsImpl;
	}());
	exports.SettingsImpl = SettingsImpl;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * This is your main. This is where you re-export everything you want to be publicly available.
	 *
	 * The build enforces that the file has the same name as the global variable that is exported.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	var EnumConverter_1 = __webpack_require__(28);
	exports.EnumConverter = EnumConverter_1.EnumConverter;
	var Param_1 = __webpack_require__(29);
	exports.Param = Param_1.Param;


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AddInServiceNames = {
	    InitializationService: 'InitializationService',
	    SettingsService: 'SettingsService'
	};


/***/ },
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Implementation of the external settings namespace.
	 */
	var Settings = (function () {
	    function Settings(settingsImpl) {
	        this.settingsImpl = settingsImpl;
	    }
	    Settings.prototype.erase = function (key) {
	        this.settingsImpl.erase(key);
	    };
	    Settings.prototype.get = function (key) {
	        return this.settingsImpl.get(key);
	    };
	    Settings.prototype.getAll = function () {
	        return this.settingsImpl.getAll();
	    };
	    Object.defineProperty(Settings.prototype, "IsModified", {
	        get: function () {
	            return this.settingsImpl.IsModified;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Settings.prototype.saveAsync = function () {
	        return this.settingsImpl.saveAsync();
	    };
	    Settings.prototype.set = function (key, value) {
	        this.settingsImpl.set(key, value);
	    };
	    return Settings;
	}());
	exports.Settings = Settings;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_shared_1 = __webpack_require__(9);
	var InitializationServiceImpl_1 = __webpack_require__(45);
	var SettingsServiceImpl_1 = __webpack_require__(46);
	function RegisterAllAddInServices(dispatcher) {
	    api_shared_1.ApiServiceRegistry.Instance.RegisterService(new InitializationServiceImpl_1.InitializationServiceImpl(dispatcher));
	    api_shared_1.ApiServiceRegistry.Instance.RegisterService(new SettingsServiceImpl_1.SettingsServiceImpl(dispatcher));
	}
	exports.RegisterAllAddInServices = RegisterAllAddInServices;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AddInServiceNames_1 = __webpack_require__(40);
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
	    InitializationServiceImpl.prototype.InitializeDashboardAddInAsync = function () {
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


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_internal_contract_1 = __webpack_require__(3);
	var AddInServiceNames_1 = __webpack_require__(40);
	var SettingsServiceImpl = (function () {
	    function SettingsServiceImpl(dispatcher) {
	        this.dispatcher = dispatcher;
	    }
	    Object.defineProperty(SettingsServiceImpl.prototype, "serviceName", {
	        get: function () {
	            return AddInServiceNames_1.AddInServiceNames.SettingsService;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SettingsServiceImpl.prototype.SaveSettingsAsync = function (settings) {
	        var parameters = {};
	        parameters[api_internal_contract_1.ParameterId.SettingsValues] = settings;
	        return this.dispatcher.Execute(api_internal_contract_1.VerbId.SaveAddInSettings, parameters).then(function (value) {
	            var result = value.result;
	            if (!result || !result.SettingsValues) {
	                throw new Error('Internal error saving settings.');
	            }
	            return (result.SettingsValues);
	        });
	    };
	    return SettingsServiceImpl;
	}());
	exports.SettingsServiceImpl = SettingsServiceImpl;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=addin-api.js.map