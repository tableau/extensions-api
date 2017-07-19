(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Main"] = factory();
	else
		root["Main"] = factory();
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var FrelardDesktopBootstrap_1 = __webpack_require__(1);
	// This Main function will be executed when this module is loaded. Attempt to do our
	// bootstrapping with qt and log any errors we encounter
	FrelardDesktopBootstrap_1.DoBootstrap().catch(function (e) {
	    console.error('Desktop bootstrapping failed: ' + e);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AddInApiPresLayerImpl_1 = __webpack_require__(2);
	var api_core_1 = __webpack_require__(3);
	var api_internal_contract_1 = __webpack_require__(23);
	var DesktopApiDispatcher_1 = __webpack_require__(24);
	var QtWebChannelImpl_1 = __webpack_require__(25);
	/**
	 * Wrapper for all the bootstrapping logic. This code attempts to initialize the qt pres-layer
	 * as well as the desktop dispatcher. It then assigns it to the global desktop dispatcher to
	 * be picked up by the add-in external Api
	 */
	function DoBootstrap() {
	    // First we need to initialize the webchannel pres-layer
	    var dispatcherPromise = QtWebChannelImpl_1.InitializeWebChannelPresLayer().then(function (preslayer) {
	        var presLayerApi = new AddInApiPresLayerImpl_1.AddInApiPresLayerImpl(preslayer);
	        if (!presLayerApi.AddInInstanceInfo.addInLocatorPresModel) {
	            throw new Error('AddInInstanceInfo undefined');
	        }
	        // Initialize the apiEventHandler and the desktopDispatcher with it
	        var apiEventHandler = new api_core_1.ApiEventHandler(presLayerApi, presLayerApi.AddInInstanceInfo.addInLocatorPresModel);
	        var desktopDispatcher = new DesktopApiDispatcher_1.DesktopApiDispatcher(apiEventHandler);
	        return desktopDispatcher;
	    });
	    // Assign the desktop dispatcher for the other project to find it
	    api_internal_contract_1.InternalApiDispatcherHolder.SetDesktopDispatcherPromise(dispatcherPromise);
	    return dispatcherPromise;
	}
	exports.DoBootstrap = DoBootstrap;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Implemenation of the PresentationLayer contract with a bit of extra information
	 * added to work with add-ins. Most work is delegated down to the interopObject which
	 * communicates directly with the c++ layer via QWebChannel
	 *
	 * @class AddInApiPresLayerImpl
	 * @implements {contract.PresentationLayer}
	 */
	var AddInApiPresLayerImpl = (function () {
	    function AddInApiPresLayerImpl(interopObject) {
	        this.interopObject = interopObject;
	    }
	    Object.defineProperty(AddInApiPresLayerImpl.prototype, "AddInInstanceInfo", {
	        /**
	         * Gets the instance info for this particular add-in from the c++ code
	         *
	         * @readonly
	         * @type {AddInInstancePresModel}
	         * @memberof AddInApiPresLayerImpl
	         */
	        get: function () {
	            return this.interopObject.addInInstanceInfo;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Invokes a command using the pres-layer interop
	     *
	     * @template T - The expected return type
	     * @param {string} commandNamespace
	     * @param {string} commandName
	     * @param {object} params
	     * @returns {Promise<T>}
	     * @memberof AddInApiPresLayerImpl
	     */
	    AddInApiPresLayerImpl.prototype.invokeCommand = function (commandNamespace, commandName, params) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            try {
	                commandNamespace = commandNamespace || 'tabdoc';
	                _this.interopObject.ExecuteCommand(commandNamespace, commandName, params, function (response) {
	                    if (!response.Success) {
	                        var msg = 'ExecuteCommand failed, with result:' + JSON.stringify(response.Result);
	                        reject(new Error(msg));
	                    }
	                    else {
	                        resolve(response.Result);
	                    }
	                });
	            }
	            catch (err) {
	                reject(err);
	            }
	        });
	    };
	    /**
	     * Registers a notification handler with the pres layer and passes back a function
	     * which can be called to remove the registration.
	     *
	     * @param {string} eventId
	     * @param {contract.NotificationHandler} handler
	     * @returns {() => void}
	     * @memberof AddInApiPresLayerImpl
	     */
	    AddInApiPresLayerImpl.prototype.registerNotificationHandler = function (eventId, handler) {
	        var _this = this;
	        if (this.interopObject && this.interopObject.OnNotification) {
	            this.interopObject.OnNotification.connect(function (notification) {
	                handler(notification);
	            });
	        }
	        return function () {
	            _this.interopObject.OnNotification.disconnect(handler);
	        };
	    };
	    return AddInApiPresLayerImpl;
	}());
	exports.AddInApiPresLayerImpl = AddInApiPresLayerImpl;


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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_internal_contract_1 = __webpack_require__(5);
	var CommandMappingRegistryFactory_1 = __webpack_require__(11);
	var ParameterMappingRegistryFactory_1 = __webpack_require__(16);
	var Params_1 = __webpack_require__(12);
	/**
	 * Main class for the api-core project. This class is responsible for executing comamnd and marshalling notifcations
	 * between the internal Api and the pres-layer Api. After construction, SetVersionNumber must be called in order to
	 * use this class
	 *
	 * @export
	 * @class ApiEventHandler
	 */
	var ApiEventHandler = (function () {
	    /**
	     * Creates an instance of ApiEventHandler.
	     * @param {PresentationLayer} presLayer - An implementation of the pres-layer Api to use
	     * @param {AddInLocatorPresModel} addInLocatorPresModel - locator for the add-in which is being referenced
	     * @memberof ApiEventHandler
	     */
	    function ApiEventHandler(presLayer, addInLocatorPresModel) {
	        this.presLayer = presLayer;
	        this.presLayerAddInLocator = addInLocatorPresModel;
	    }
	    /**
	     * Helper method to check that things are initialized as expected. Throws if initialization not complete
	     *
	     * @private
	     * @memberof ApiEventHandler
	     */
	    ApiEventHandler.prototype.AssertInitialized = function () {
	        if (!this.versionNumber) {
	            throw new Error('VersionNumber not yet configured. Cannot take any actions');
	        }
	    };
	    /**
	     * Sets the internal Api version number which the external library is expecting to use. This must be called before
	     * anything else in order to properly set up the translation layers.
	     *
	     * @param {VersionNumber} versionNumber
	     * @memberof ApiEventHandler
	     */
	    ApiEventHandler.prototype.SetVersionNumber = function (versionNumber) {
	        this.versionNumber = versionNumber;
	        // Initialize all our registries
	        this.commandRegistry = CommandMappingRegistryFactory_1.CommandMappingRegistryFactory.CreateCommandMappingRegistry(versionNumber);
	        this.apiToPresLayerRegistry = ParameterMappingRegistryFactory_1.ParameterMappingRegistryFactory.CreateApiToPresLayerParamRegistry(versionNumber);
	        this.presLayerToApiRegistry = ParameterMappingRegistryFactory_1.ParameterMappingRegistryFactory.CreatePresLayerToApiParamRegistry(versionNumber);
	        // Convert our addInLocator to the Api version
	        this.apiAddInLocator = this.presLayerToApiRegistry
	            .Get(Params_1.ParameterId.AddInLocator, api_internal_contract_1.ParameterId.AddInLocator)(this.presLayerAddInLocator);
	    };
	    /**
	     * Sets an event handler function to be notified when Api events come in. Only a single registration is supported.
	     *
	     * @param {NotificationHandler} eventHandler
	     * @memberof ApiEventHandler
	     */
	    ApiEventHandler.prototype.SetEventHandler = function (eventHandler) {
	        this.eventHandler = eventHandler;
	        // TODO - Register for pres layer events
	    };
	    /**
	     * Executes the requested Api command by converting the parameters, running the command against the pres-layer,
	     * then processing the result back into a format the Api can understand
	     *
	     * @param {VerbId} verb
	     * @param {ExecuteParameters} parameters
	     * @returns {Promise<ExecuteResponse>}
	     * @memberof ApiEventHandler
	     */
	    ApiEventHandler.prototype.Execute = function (verb, parameters) {
	        var _this = this;
	        this.AssertInitialized();
	        var command = this.commandRegistry.GetCommand(verb);
	        parameters = parameters || {};
	        // Augment the command with the locator if it's needed
	        if (command.NeedsAddInLocator) {
	            parameters[api_internal_contract_1.ParameterId.AddInLocator] = this.apiAddInLocator;
	        }
	        var commandsParams = command.CreateParams(parameters, this.apiToPresLayerRegistry);
	        return this.presLayer.invokeCommand('tabdoc', command.CommandId, commandsParams)
	            .then(function (commandResult) {
	            var convertedResult = command.ProcessResult(commandResult, _this.presLayerToApiRegistry);
	            return {
	                result: convertedResult
	            };
	        });
	    };
	    return ApiEventHandler;
	}());
	exports.ApiEventHandler = ApiEventHandler;


/***/ },
/* 5 */
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
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));


/***/ },
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var NotificationId = {
	    SelectedMarksChanged: 'selected-marks-changed',
	};
	exports.NotificationId = NotificationId;


/***/ },
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Params_1 = __webpack_require__(12);
	var CommandIds_1 = __webpack_require__(13);
	var api_internal_contract_1 = __webpack_require__(5);
	var CommandRegistration_1 = __webpack_require__(14);
	var CommandMappingRegistry_1 = __webpack_require__(15);
	var CommandMappingRegistryFactory = (function () {
	    function CommandMappingRegistryFactory() {
	    }
	    /**
	     * Creates and populates a new CommandMappingRegistry for the specific version number requested
	     *
	     * @static
	     * @param {VersionNumber} versionNumber
	     * @returns {CommandMappingRegistry}
	     * @memberof CommandMappingRegistryFactory
	     */
	    CommandMappingRegistryFactory.CreateCommandMappingRegistry = function (versionNumber) {
	        var result = new CommandMappingRegistry_1.CommandMappingRegistry();
	        result.AddCommand(new CommandRegistration_1.CommandRegistration(api_internal_contract_1.VerbId.InitializeAddIn, CommandIds_1.DocCommands.InitializeAddInInstance, [new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.AddInLocator, Params_1.ParameterId.AddInLocator)], new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.AddInBootstrapInfo, Params_1.ParameterId.AddInBootstrapInfo)));
	        result.AddCommand(new CommandRegistration_1.CommandRegistration(api_internal_contract_1.VerbId.GetUnderlyingData, CommandIds_1.DocCommands.GetUnderlyingData, [new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.IgnoreAliases, Params_1.ParameterId.IgnoreAliases),
	            new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.IgnoreSelection, Params_1.ParameterId.IgnoreSelection),
	            new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.IncludeAllColumns, Params_1.ParameterId.IncludeAllColumns),
	            new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.MaxRows, Params_1.ParameterId.MaxRows),
	            new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.VisualId, Params_1.ParameterId.VisualIDPM)], new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.UnderlyingDataTable, Params_1.ParameterId.UnderlyingDataTable)));
	        result.AddCommand(new CommandRegistration_1.CommandRegistration(api_internal_contract_1.VerbId.GetDataSummaryData, CommandIds_1.DocCommands.GetSummaryData, [new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.IgnoreAliases, Params_1.ParameterId.IgnoreAliases),
	            new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.IgnoreSelection, Params_1.ParameterId.IgnoreSelection),
	            new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.VisualId, Params_1.ParameterId.VisualIDPM)], new CommandRegistration_1.CommandParameter(api_internal_contract_1.ParameterId.UnderlyingSummaryDataTable, Params_1.ParameterId.UnderlyingDataTable)));
	        return result;
	    };
	    return CommandMappingRegistryFactory;
	}());
	exports.CommandMappingRegistryFactory = CommandMappingRegistryFactory;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	// -----------------------------------------------------------------------------
	//
	// This file is the copyrighted property of Tableau Software and is protected
	// by registered patents and other applicable U.S. and international laws and
	// regulations.
	//
	// Unlicensed use of the contents of this file is prohibited. Please refer to
	// the NOTICES.txt file for further details.
	//
	// -----------------------------------------------------------------------------
	// WARNING: Computer generated file.  Do not hand modify.
	// DEPENDS ON: ['..\\git\\api-core\\node_modules\\@tableau\\preslayer-codegen-typescript\\templates\\params-ts.template', u'modules\\web\\api-core\\src\\preslayer\\all-params.data']
	Object.defineProperty(exports, "__esModule", { value: true });
	var ParameterId;
	(function (ParameterId) {
	    // DPI_IntegerRLE, having type int[]
	    ParameterId["IntegerRLE"] = "intRle";
	    // DPI_UnsignedIntegerRLE, having type uint[]
	    ParameterId["UnsignedIntegerRLE"] = "uintRle";
	    // DPI_FloatRLE, having type float[]
	    ParameterId["FloatRLE"] = "floatRle";
	    // DPI_ParameterID, having type string
	    ParameterId["ParameterID"] = "paramType";
	    // DPI_AllowCustomDatabase, having type bool
	    ParameterId["AllowCustomDatabase"] = "allowCustomDatabase";
	    // DPI_AllowCustomSchema, having type bool
	    ParameterId["AllowCustomSchema"] = "allowCustomSchema";
	    // DPI_AllowCustomSQL, having type bool
	    ParameterId["AllowCustomSQL"] = "allowCustomSql";
	    // DPI_AllowCustomSQLWithoutSchema, having type bool
	    ParameterId["AllowCustomSQLWithoutSchema"] = "allowCustomSqlWithoutSchema";
	    // DPI_AllowPreviewData, having type bool
	    ParameterId["AllowPreviewData"] = "allowPreviewData";
	    // DPI_AllowStoredProc, having type bool
	    ParameterId["AllowStoredProc"] = "allowStoredProcedure";
	    // DPI_AllowUnion, having type bool
	    ParameterId["AllowUnion"] = "allowUnion";
	    // DPI_AreVariablesVisible, having type bool
	    ParameterId["AreVariablesVisible"] = "areVariablesVisible";
	    // DPI_AttrLegacyConnection, having type bool
	    ParameterId["AttrLegacyConnection"] = "widgetAttrLegacy";
	    // DPI_AttrReadUncommitted, having type bool
	    ParameterId["AttrReadUncommitted"] = "widgetAttrReadUncommittedData";
	    // DPI_AttrRequireSSL, having type bool
	    ParameterId["AttrRequireSSL"] = "widgetAttrRequireSsl";
	    // DPI_AttrRequireEncryption, having type bool
	    ParameterId["AttrRequireEncryption"] = "widgetAttrRequireEncryption";
	    // DPI_Bool, having type bool
	    ParameterId["Bool"] = "bool";
	    // DPI_CanPartition, having type bool
	    ParameterId["CanPartition"] = "canPartition";
	    // DPI_CanRecommendDataSources, having type bool
	    ParameterId["CanRecommendDataSources"] = "canRecommendDatasources";
	    // DPI_CanRecommendTables, having type bool
	    ParameterId["CanRecommendTables"] = "canRecommendTables";
	    // DPI_CheckPermissions, having type bool
	    ParameterId["CheckPermissions"] = "checkPermissions";
	    // DPI_DatabaseNameOptional, having type bool
	    ParameterId["DatabaseNameOptional"] = "databaseNameOptional";
	    // DPI_DatabaseWHOptional, having type bool
	    ParameterId["DatabaseWHOptional"] = "databaseWarehouseOptional";
	    // DPI_DoValidation, having type bool
	    ParameterId["DoValidation"] = "doValidation";
	    // DPI_DoneLoadingAllSheets, having type bool
	    ParameterId["DoneLoadingAllSheets"] = "googleSheetDoneLoading";
	    // DPI_GABasicItemsEnabled, having type bool
	    ParameterId["GABasicItemsEnabled"] = "gaBasicItemsEnabled";
	    // DPI_GADimensionMeasuresEnabled, having type bool
	    ParameterId["GADimensionMeasuresEnabled"] = "gaDimensionsMeasuresEnabled";
	    // DPI_GAFiltersEnabled, having type bool
	    ParameterId["GAFiltersEnabled"] = "gaFiltersEnabled";
	    // DPI_HasDatabase, having type bool
	    ParameterId["HasDatabase"] = "hasDatabase";
	    // DPI_HasDataLoss, having type bool
	    ParameterId["HasDataLoss"] = "hasDataLoss";
	    // DPI_HasFastMetadata, having type bool
	    ParameterId["HasFastMetadata"] = "hasFastMetadata";
	    // DPI_HasNewlyDiscoveredSchema, having type bool
	    ParameterId["HasNewlyDiscoveredSchema"] = "hasNewlyDiscoveredSchema";
	    // DPI_HasPermissions, having type bool
	    ParameterId["HasPermissions"] = "hasPermissions";
	    // DPI_HasSchema, having type bool
	    ParameterId["HasSchema"] = "hasSchema";
	    // DPI_HasSchemaCount, having type bool
	    ParameterId["HasSchemaCount"] = "hasSchemaCount";
	    // DPI_HasTables, having type bool
	    ParameterId["HasTables"] = "hasTables";
	    // DPI_HasUncommittedChanges, having type bool
	    ParameterId["HasUncommittedChanges"] = "hasUncommittedChanges";
	    // DPI_HasWarehouse, having type bool
	    ParameterId["HasWarehouse"] = "hasWarehouse";
	    // DPI_HasWarning, having type bool
	    ParameterId["HasWarning"] = "hasWarning";
	    // DPI_IsCalculated, having type bool
	    ParameterId["IsCalculated"] = "isCalculated";
	    // DPI_IsConnectedToDataSource, having type bool
	    ParameterId["IsConnectedToDataSource"] = "isConnectedDatasource";
	    // DPI_IsDisabledDataConnection, having type bool
	    ParameterId["IsDisabledDataConnection"] = "isDisabledDataConnection";
	    // DPI_IsEditable, having type bool
	    ParameterId["IsEditable"] = "isEditable";
	    // DPI_IsEnabled, having type bool
	    ParameterId["IsEnabled"] = "isEnabled";
	    // DPI_IsFinishedConnecting, having type bool
	    ParameterId["IsFinishedConnecting"] = "isFinishedConnecting";
	    // DPI_IsHidden, having type bool
	    ParameterId["IsHidden"] = "isHidden";
	    // DPI_IsMultiTable, having type bool
	    ParameterId["IsMultiTable"] = "isMultiTable";
	    // DPI_IsNewCustomSQL, having type bool
	    ParameterId["IsNewCustomSQL"] = "isNewCustomSql";
	    // DPI_IsNewDataSource, having type bool
	    ParameterId["IsNewDataSource"] = "isNewDataSrc";
	    // DPI_IsPublishedFederated, having type bool
	    ParameterId["IsPublishedFederated"] = "isPublishedFederated";
	    // DPI_IsSampled, having type bool
	    ParameterId["IsSampled"] = "isSampled";
	    // DPI_IsSchemaMemberNewlyDiscovered, having type bool
	    ParameterId["IsSchemaMemberNewlyDiscovered"] = "isSchemaMemberNewlyDiscovered";
	    // DPI_IsSlowFast, having type bool
	    ParameterId["IsSlowFast"] = "isSlowfast";
	    // DPI_IsSupported, having type bool
	    ParameterId["IsSupported"] = "isSupported";
	    // DPI_IsTableSelectionVisible, having type bool
	    ParameterId["IsTableSelectionVisible"] = "isTableSelectionVisible";
	    // DPI_IsTableauServerDatasource, having type bool
	    ParameterId["IsTableauServerDatasource"] = "isTableauServerDatasource";
	    // DPI_IsTableauServerDatasourceConnectable, having type bool
	    ParameterId["IsTableauServerDatasourceConnectable"] = "isTableauServerDatasourceConnectable";
	    // DPI_IsTableauServerDatasourceDownloadable, having type bool
	    ParameterId["IsTableauServerDatasourceDownloadable"] = "isTableauServerDatasourceDownloadable";
	    // DPI_IsVisible, having type bool
	    ParameterId["IsVisible"] = "isVisible";
	    // DPI_NeedFlatten, having type bool
	    ParameterId["NeedFlatten"] = "needFlatten";
	    // DPI_SSLRequiresCertificate, having type bool
	    ParameterId["SSLRequiresCertificate"] = "sslRequiresCertificate";
	    // DPI_SchemaOptional, having type bool
	    ParameterId["SchemaOptional"] = "schemaOptional";
	    // DPI_ServiceNameOptional, having type bool
	    ParameterId["ServiceNameOptional"] = "serviceNameOptional";
	    // DPI_ShouldWarnForCrossSchemaJoins, having type bool
	    ParameterId["ShouldWarnForCrossSchemaJoins"] = "shouldWarnCrossSchemaJoins";
	    // DPI_ShowBrowseButton, having type bool
	    ParameterId["ShowBrowseButton"] = "showBrowseButton";
	    // DPI_ShowConnectionPrompt, having type bool
	    ParameterId["ShowConnectionPrompt"] = "showConnectionPrompt";
	    // DPI_ShowDBBrowseButton, having type bool
	    ParameterId["ShowDBBrowseButton"] = "showDbBrowseButton";
	    // DPI_ShowDBNamePrompt, having type bool
	    ParameterId["ShowDBNamePrompt"] = "showDbPrompt";
	    // DPI_ShowDBWHNamePrompt, having type bool
	    ParameterId["ShowDBWHNamePrompt"] = "showDbwhPrompt";
	    // DPI_ShowImportSSLCertLabel, having type bool
	    ParameterId["ShowImportSSLCertLabel"] = "showImportSslcertLabel";
	    // DPI_ShowPortPrompt, having type bool
	    ParameterId["ShowPortPrompt"] = "showPortPrompt";
	    // DPI_ShowSSLCheckbox, having type bool
	    ParameterId["ShowSSLCheckbox"] = "showSslCheckbox";
	    // DPI_ShowEncryptionCheckbox, having type bool
	    ParameterId["ShowEncryptionCheckbox"] = "showEncryptionCheckbox";
	    // DPI_ShowServerNamePrompt, having type bool
	    ParameterId["ShowServerNamePrompt"] = "showServerPrompt";
	    // DPI_ShowServiceNamePrompt, having type bool
	    ParameterId["ShowServiceNamePrompt"] = "showServicePrompt";
	    // DPI_ShowUncommittedDataCheckbox, having type bool
	    ParameterId["ShowUncommittedDataCheckbox"] = "showUncommittedDataCheckbox";
	    // DPI_SupportsGenericAuth, having type bool
	    ParameterId["SupportsGenericAuth"] = "supportsGenericAuth";
	    // DPI_TableauServerFetchAscending, having type bool
	    ParameterId["TableauServerFetchAscending"] = "tableauServerFetchAscending";
	    // DPI_UsesRadioButton, having type bool
	    ParameterId["UsesRadioButton"] = "usesRadioButton";
	    // DPI_BigQueryLegacySQLCheckStatus, having type bool
	    ParameterId["BigQueryLegacySQLCheckStatus"] = "datasourceBigqueryLegacySqlCheckStatus";
	    // DPI_HasBigQueryLegacySQLCheck, having type bool
	    ParameterId["HasBigQueryLegacySQLCheck"] = "datasourceBigqueryLegacySqlCheck";
	    // DPI_AutoFetchLimit, having type int
	    ParameterId["AutoFetchLimit"] = "autoFetchLimit";
	    // DPI_ConnectionType, having type int
	    ParameterId["ConnectionType"] = "connectionType";
	    // DPI_IconId, having type int
	    ParameterId["IconId"] = "iconId";
	    // DPI_SelectedCatalogIndex, having type int
	    ParameterId["SelectedCatalogIndex"] = "selectedCatalogIndex";
	    // DPI_SelectedCubeIndex, having type int
	    ParameterId["SelectedCubeIndex"] = "selectedCubeIndex";
	    // DPI_SelectedGAAccountIndex, having type int
	    ParameterId["SelectedGAAccountIndex"] = "selectedGaAccountIndex";
	    // DPI_SelectedGAMeasureSetIndex, having type int
	    ParameterId["SelectedGAMeasureSetIndex"] = "selectedGaMeasureSetIndex";
	    // DPI_SelectedGAPropertyIndex, having type int
	    ParameterId["SelectedGAPropertyIndex"] = "selectedGaPropertyIndex";
	    // DPI_SelectedGASegmentIndex, having type int
	    ParameterId["SelectedGASegmentIndex"] = "selectedGaSegmentIndex";
	    // DPI_SelectedGAViewIndex, having type int
	    ParameterId["SelectedGAViewIndex"] = "selectedGaViewIndex";
	    // DPI_SelectedGoogleSheetIndex, having type int
	    ParameterId["SelectedGoogleSheetIndex"] = "selectedGoogleSheetIndex";
	    // DPI_SelectedOptionIndex, having type int
	    ParameterId["SelectedOptionIndex"] = "selectedOptionIndex";
	    // DPI_SlowMetadataCount, having type int
	    ParameterId["SlowMetadataCount"] = "slowMetadataCount";
	    // DPI_TableauServerFetchSortBy, having type int
	    ParameterId["TableauServerFetchSortBy"] = "tableauServerFetchSort";
	    // DPI_ActualParameterOrdinal, having type uint
	    ParameterId["ActualParameterOrdinal"] = "actualParameterOrdinal";
	    // DPI_ActualParameterType, having type uint
	    ParameterId["ActualParameterType"] = "actualParameterType";
	    // DPI_CharSetID, having type uint
	    ParameterId["CharSetID"] = "charsetId";
	    // DPI_DataSourceOrdinal, having type uint
	    ParameterId["DataSourceOrdinal"] = "datasourceOrdinal";
	    // DPI_FilterCount, having type uint
	    ParameterId["FilterCount"] = "filterCount";
	    // DPI_VariablesCount, having type uint
	    ParameterId["VariablesCount"] = "variablesCount";
	    // DPI_ActualParameterDisplayName, having type string
	    ParameterId["ActualParameterDisplayName"] = "actualParameterDisplayName";
	    // DPI_ActualParameterName, having type string
	    ParameterId["ActualParameterName"] = "actualParameterName";
	    // DPI_ActualParameterValue, having type string
	    ParameterId["ActualParameterValue"] = "actualParameterValue";
	    // DPI_AttrAPIVersion, having type string
	    ParameterId["AttrAPIVersion"] = "attrApiVersion";
	    // DPI_AttrAuthType, having type string
	    ParameterId["AttrAuthType"] = "widgetAttrAuthtype";
	    // DPI_AttrConnectionData, having type string
	    ParameterId["AttrConnectionData"] = "attrConnectionData";
	    // DPI_AttrConnectionName, having type string
	    ParameterId["AttrConnectionName"] = "attrConnectionName";
	    // DPI_AttrConnectionType, having type string
	    ParameterId["AttrConnectionType"] = "widgetAttrConnectiontype";
	    // DPI_AttrConnectionURL, having type string
	    ParameterId["AttrConnectionURL"] = "attrConnectionUrl";
	    // DPI_AttrCubeSpecificationId, having type string
	    ParameterId["AttrCubeSpecificationId"] = "widgetAttrCubeSpecificationId";
	    // DPI_AttrCubeSpecificationValue, having type string
	    ParameterId["AttrCubeSpecificationValue"] = "widgetAttrCubeSpecificationValue";
	    // DPI_AttrDSN, having type string
	    ParameterId["AttrDSN"] = "widgetAttrDsn";
	    // DPI_AttrDatabase, having type string
	    ParameterId["AttrDatabase"] = "widgetAttrDb";
	    // DPI_AttrDatabaseWarehouse, having type string
	    ParameterId["AttrDatabaseWarehouse"] = "widgetAttrDbwh";
	    // DPI_AttrDriver, having type string
	    ParameterId["AttrDriver"] = "widgetAttrDriver";
	    // DPI_AttrFilename, having type string
	    ParameterId["AttrFilename"] = "widgetAttrFilename";
	    // DPI_AttrHTTPPath, having type string
	    ParameterId["AttrHTTPPath"] = "widgetAttrHttpPath";
	    // DPI_AttrIncrementalRefreshKey, having type string
	    ParameterId["AttrIncrementalRefreshKey"] = "attrIncrementalRefreshKey";
	    // DPI_AttrKerberosHost, having type string
	    ParameterId["AttrKerberosHost"] = "widgetAttrKerberosHost";
	    // DPI_AttrKerberosRealm, having type string
	    ParameterId["AttrKerberosRealm"] = "widgetAttrKerberosRealm";
	    // DPI_AttrKerberosService, having type string
	    ParameterId["AttrKerberosService"] = "widgetAttrKerberosService";
	    // DPI_AttrLastRecordToken, having type string
	    ParameterId["AttrLastRecordToken"] = "attrLastRecordToken";
	    // DPI_AttrMDWPath, having type string
	    ParameterId["AttrMDWPath"] = "widgetAttrMdwPath";
	    // DPI_AttrMDWUsername, having type string
	    ParameterId["AttrMDWUsername"] = "widgetAttrMdwUsername";
	    // DPI_AttrODBCPrompt, having type string
	    ParameterId["AttrODBCPrompt"] = "widgetAttrOdbcPrompt";
	    // DPI_AttrODBCStringExtras, having type string
	    ParameterId["AttrODBCStringExtras"] = "widgetAttrOdbcStringExtras";
	    // DPI_AttrPort, having type string
	    ParameterId["AttrPort"] = "widgetAttrPort";
	    // DPI_AttrSAPClient, having type string
	    ParameterId["AttrSAPClient"] = "widgetAttrSapClient";
	    // DPI_AttrSAPLanguage, having type string
	    ParameterId["AttrSAPLanguage"] = "widgetAttrSapLanguage";
	    // DPI_AttrEdition, having type string
	    ParameterId["AttrEdition"] = "widgetAttrSslEdition";
	    // DPI_AttrSSODomain, having type string
	    ParameterId["AttrSSODomain"] = "widgetAttrSsoDomain";
	    // DPI_AttrSSLCert, having type string
	    ParameterId["AttrSSLCert"] = "widgetAttrSslCert";
	    // DPI_AttrScriptVersion, having type string
	    ParameterId["AttrScriptVersion"] = "attrScriptVersion";
	    // DPI_AttrServer, having type string
	    ParameterId["AttrServer"] = "widgetAttrServer";
	    // DPI_AttrService, having type string
	    ParameterId["AttrService"] = "widgetAttrService";
	    // DPI_AttrUsername, having type string
	    ParameterId["AttrUsername"] = "widgetAttrUser";
	    // DPI_AuthenticationPrompt, having type string
	    ParameterId["AuthenticationPrompt"] = "authenticationPrompt";
	    // DPI_Caption, having type string
	    ParameterId["Caption"] = "caption";
	    // DPI_CatalogListPrompt, having type string
	    ParameterId["CatalogListPrompt"] = "catalogListPrompt";
	    // DPI_CatalogName, having type string
	    ParameterId["CatalogName"] = "catalogName";
	    // DPI_CatalogSearchTerm, having type string
	    ParameterId["CatalogSearchTerm"] = "catalogSearchTerm";
	    // DPI_Category, having type string
	    ParameterId["Category"] = "itemCategory";
	    // DPI_ClassName, having type string
	    ParameterId["ClassName"] = "classNameForCleaning";
	    // DPI_CloudFileClassName, having type string
	    ParameterId["CloudFileClassName"] = "cloudFileClassName";
	    // DPI_CloudFileStorageProvider, having type string
	    ParameterId["CloudFileStorageProvider"] = "cloudFileStorageProvider";
	    // DPI_ConfigName, having type string
	    ParameterId["ConfigName"] = "connectionConfigName";
	    // DPI_ConnectionCaption, having type string
	    ParameterId["ConnectionCaption"] = "connectionCaption";
	    // DPI_ConnectionDescriptionLabel, having type string
	    ParameterId["ConnectionDescriptionLabel"] = "connectionDescriptionLabel";
	    // DPI_ConnectionClass, having type string
	    ParameterId["ConnectionClass"] = "connectionClassName";
	    // DPI_ConnectionName, having type string
	    ParameterId["ConnectionName"] = "connectionName";
	    // DPI_ConnectionOptionName, having type string
	    ParameterId["ConnectionOptionName"] = "connectionOptionName";
	    // DPI_ConnectionSpecificationTitle, having type string
	    ParameterId["ConnectionSpecificationTitle"] = "connectionSpecificationTitle";
	    // DPI_ConnectionTypeLabel, having type string
	    ParameterId["ConnectionTypeLabel"] = "connectionTypeLabel";
	    // DPI_CubeDescription, having type string
	    ParameterId["CubeDescription"] = "cubeDescription";
	    // DPI_CubeLastUpdated, having type string
	    ParameterId["CubeLastUpdated"] = "cubeLastUpdated";
	    // DPI_CubeListPrompt, having type string
	    ParameterId["CubeListPrompt"] = "cubeListPrompt";
	    // DPI_CubeName, having type string
	    ParameterId["CubeName"] = "cubeName";
	    // DPI_CubeSearchTerm, having type string
	    ParameterId["CubeSearchTerm"] = "cubeSearchTerm";
	    // DPI_CurrentText, having type string
	    ParameterId["CurrentText"] = "currentText";
	    // DPI_CustomSplitStringSeparator, having type string
	    ParameterId["CustomSplitStringSeparator"] = "customSplitStringSeparator";
	    // DPI_DatasourceId, having type string
	    ParameterId["DatasourceId"] = "datasourceId";
	    // DPI_DBNamePrompt, having type string
	    ParameterId["DBNamePrompt"] = "dbNamePrompt";
	    // DPI_DBWHNamePrompt, having type string
	    ParameterId["DBWHNamePrompt"] = "dbWarehouseNamePrompt";
	    // DPI_DSClass, having type string
	    ParameterId["DSClass"] = "dsClass";
	    // DPI_DatabaseName, having type string
	    ParameterId["DatabaseName"] = "datasourceDatabaseName";
	    // DPI_DatabaseNote, having type string
	    ParameterId["DatabaseNote"] = "databaseNote";
	    // DPI_DragLabel, having type string
	    ParameterId["DragLabel"] = "dragLabel";
	    // DPI_EffectiveDateRange, having type string
	    ParameterId["EffectiveDateRange"] = "effectiveDateRange";
	    // DPI_GoogleSheetCreatedTime, having type string
	    ParameterId["GoogleSheetCreatedTime"] = "googleSheetCreatedTime";
	    // DPI_GoogleSheetId, having type string
	    ParameterId["GoogleSheetId"] = "googleSheetId";
	    // DPI_GoogleSheetLastModifiedTime, having type string
	    ParameterId["GoogleSheetLastModifiedTime"] = "googleSheetLastModifiedTime";
	    // DPI_GoogleSheetLastModifyingUser, having type string
	    ParameterId["GoogleSheetLastModifyingUser"] = "googleSheetLastModifyingUser";
	    // DPI_GoogleSheetLastViewedByUserTime, having type string
	    ParameterId["GoogleSheetLastViewedByUserTime"] = "googleSheetLastViewedByUserTime";
	    // DPI_GoogleSheetMimeType, having type string
	    ParameterId["GoogleSheetMimeType"] = "googleSheetMimeType";
	    // DPI_GoogleSheetName, having type string
	    ParameterId["GoogleSheetName"] = "googleSheetName";
	    // DPI_GoogleSheetOwner, having type string
	    ParameterId["GoogleSheetOwner"] = "googleSheetOwner";
	    // DPI_GoogleSheetThumbnailLink, having type string
	    ParameterId["GoogleSheetThumbnailLink"] = "googleSheetThumbnailLink";
	    // DPI_GoogleSheetThumbnailId, having type string
	    ParameterId["GoogleSheetThumbnailId"] = "googleSheetThumbnailId";
	    // DPI_GoogleSheetThumbnailLocalPath, having type string
	    ParameterId["GoogleSheetThumbnailLocalPath"] = "googleSheetThumbnailLocalPath";
	    // DPI_GoogleSheetWebViewLink, having type string
	    ParameterId["GoogleSheetWebViewLink"] = "googleSheetWebViewLink";
	    // DPI_GoogleSheetsListErrorMessage, having type string
	    ParameterId["GoogleSheetsListErrorMessage"] = "googleSheetsListErrorMessage";
	    // DPI_InitialSQL, having type string
	    ParameterId["InitialSQL"] = "initialSql";
	    // DPI_ISODate, having type string
	    ParameterId["ISODate"] = "isoDate";
	    // DPI_ISOEndDate, having type string
	    ParameterId["ISOEndDate"] = "isoEndDate";
	    // DPI_ISOStartDate, having type string
	    ParameterId["ISOStartDate"] = "isoStartDate";
	    // DPI_IsolationLevel, having type string
	    ParameterId["IsolationLevel"] = "datasourceIsolationLevel";
	    // DPI_ItemDescription, having type string
	    ParameterId["ItemDescription"] = "itemDescription";
	    // DPI_ItemId, having type string
	    ParameterId["ItemId"] = "itemId";
	    // DPI_KerberosHost, having type string
	    ParameterId["KerberosHost"] = "datasourceKerberosHost";
	    // DPI_KerberosRealm, having type string
	    ParameterId["KerberosRealm"] = "datasourceKerberosRealm";
	    // DPI_KerberosService, having type string
	    ParameterId["KerberosService"] = "datasourceKerberosService";
	    // DPI_Name, having type string
	    ParameterId["Name"] = "name";
	    // DPI_OptionId, having type string
	    ParameterId["OptionId"] = "optionId";
	    // DPI_PartitioningButtonLabel, having type string
	    ParameterId["PartitioningButtonLabel"] = "partitioningButtonLabel";
	    // DPI_PartitioningButtonTooltip, having type string
	    ParameterId["PartitioningButtonTooltip"] = "partitioningButtonTooltip";
	    // DPI_PartitioningText, having type string
	    ParameterId["PartitioningText"] = "queryPartitioningText";
	    // DPI_PdfStartPage, having type string
	    ParameterId["PdfStartPage"] = "pdfStartPage";
	    // DPI_PdfEndPage, having type string
	    ParameterId["PdfEndPage"] = "pdfEndPage";
	    // DPI_PortPrompt, having type string
	    ParameterId["PortPrompt"] = "portPrompt";
	    // DPI_PromptText, having type string
	    ParameterId["PromptText"] = "promptText";
	    // DPI_QueryBanding, having type string
	    ParameterId["QueryBanding"] = "queryBanding";
	    // DPI_QueryText, having type string
	    ParameterId["QueryText"] = "queryText";
	    // DPI_RecommendationUUID, having type string
	    ParameterId["RecommendationUUID"] = "recommendationUuid";
	    // DPI_SQLQuery, having type string
	    ParameterId["SQLQuery"] = "sqlQuery";
	    // DPI_SchemaComboFallbackText, having type string
	    ParameterId["SchemaComboFallbackText"] = "schemaComboFallbackText";
	    // DPI_SchemaLabel, having type string
	    ParameterId["SchemaLabel"] = "schemaLabel";
	    // DPI_SchemaMemberGlobalName, having type string
	    ParameterId["SchemaMemberGlobalName"] = "schemaMemberGlobalName";
	    // DPI_SchemaName, having type string
	    ParameterId["SchemaName"] = "datasourceSchemaName";
	    // DPI_ScriptText, having type string
	    ParameterId["ScriptText"] = "scriptText";
	    // DPI_SecondaryWhiteList, having type string
	    ParameterId["SecondaryWhiteList"] = "secondaryWhiteList";
	    // DPI_Server, having type string
	    ParameterId["Server"] = "datasourceServer";
	    // DPI_ServerNamePrompt, having type string
	    ParameterId["ServerNamePrompt"] = "serverNamePrompt";
	    // DPI_Service, having type string
	    ParameterId["Service"] = "datasourceService";
	    // DPI_ServiceNamePrompt, having type string
	    ParameterId["ServiceNamePrompt"] = "servicePrompt";
	    // DPI_SheetFormatting, having type string
	    ParameterId["SheetFormatting"] = "sheetFormatting";
	    // DPI_SlowMetadataSearchTerm, having type string
	    ParameterId["SlowMetadataSearchTerm"] = "slowMetadataSearchTerm";
	    // DPI_StandardConnectionName, having type string
	    ParameterId["StandardConnectionName"] = "datasourceStandardConnectionName";
	    // DPI_StandardConnectionPlaceholderText, having type string
	    ParameterId["StandardConnectionPlaceholderText"] = "standardConnectionPlaceholderText";
	    // DPI_StoredProcedureParameterTitle, having type string
	    ParameterId["StoredProcedureParameterTitle"] = "storedProcedureParameterTitle";
	    // DPI_TableAlias, having type string
	    ParameterId["TableAlias"] = "tableAlias";
	    // DPI_RightTableAlias, having type string
	    ParameterId["RightTableAlias"] = "rightTableAlias";
	    // DPI_TableCaption, having type string
	    ParameterId["TableCaption"] = "tableCaption";
	    // DPI_TableCollectionName, having type string
	    ParameterId["TableCollectionName"] = "tableCollectionName";
	    // DPI_TablePlaceholderText, having type string
	    ParameterId["TablePlaceholderText"] = "tablePlaceholderText";
	    // DPI_TableRanking, having type string
	    ParameterId["TableRanking"] = "tableRanking";
	    // DPI_TableSortKey, having type string
	    ParameterId["TableSortKey"] = "tableSortkey";
	    // DPI_TableTooltip, having type string
	    ParameterId["TableTooltip"] = "tableTooltip";
	    // DPI_TableToReplace, having type string
	    ParameterId["TableToReplace"] = "tableToReplace";
	    // DPI_TableWarningMessage, having type string
	    ParameterId["TableWarningMessage"] = "tableWarningMessage";
	    // DPI_TableauServerDatasourceDescription, having type string
	    ParameterId["TableauServerDatasourceDescription"] = "tableauServerDatasourceDescription";
	    // DPI_TableauServerDatasourceLastExtract, having type string
	    ParameterId["TableauServerDatasourceLastExtract"] = "tableauServerDatasourceLastExtract";
	    // DPI_TableauServerDatasourceModified, having type string
	    ParameterId["TableauServerDatasourceModified"] = "tableauServerDatasourceModified";
	    // DPI_TableauServerDatasourceOwner, having type string
	    ParameterId["TableauServerDatasourceOwner"] = "tableauServerDatasourceOwner";
	    // DPI_TableauServerDatasourcePath, having type string
	    ParameterId["TableauServerDatasourcePath"] = "tableauServerDatasourcePath";
	    // DPI_TableauServerFetchSearchQuery, having type string
	    ParameterId["TableauServerFetchSearchQuery"] = "tableauServerFetchSearchQuery";
	    // DPI_TableauServerName, having type string
	    ParameterId["TableauServerName"] = "tableauServerName";
	    // DPI_TableauServerProjectName, having type string
	    ParameterId["TableauServerProjectName"] = "tableauServerProjectName";
	    // DPI_TableauServerUsername, having type string
	    ParameterId["TableauServerUsername"] = "tableauServerUsername";
	    // DPI_TransportType, having type string
	    ParameterId["TransportType"] = "transportType";
	    // DPI_WarehouseName, having type string
	    ParameterId["WarehouseName"] = "datasourceWarehouseName";
	    // DPI_WorkgroupWorkbookName, having type string
	    ParameterId["WorkgroupWorkbookName"] = "workgroupWorkbookName";
	    // DPI_AnalyticsItemTooltip, having type string
	    ParameterId["AnalyticsItemTooltip"] = "analyticsItemTooltip";
	    // DPI_Description, having type string
	    ParameterId["Description"] = "description";
	    // DPI_DSClassCaption, having type string
	    ParameterId["DSClassCaption"] = "dsClassCaption";
	    // DPI_Formula, having type string
	    ParameterId["Formula"] = "formula";
	    // DPI_MessageText, having type string
	    ParameterId["MessageText"] = "messageText";
	    // DPI_Datasource, having type string
	    ParameterId["Datasource"] = "datasource";
	    // DPI_DatasourceSource, having type string
	    ParameterId["DatasourceSource"] = "datasourceSource";
	    // DPI_DatasourceTarget, having type string
	    ParameterId["DatasourceTarget"] = "datasourceTarget";
	    // DPI_FirstDatasource, having type string
	    ParameterId["FirstDatasource"] = "firstDatasource";
	    // DPI_NewDatasource, having type string
	    ParameterId["NewDatasource"] = "newDatasource";
	    // DPI_ParametersDatasource, having type string
	    ParameterId["ParametersDatasource"] = "parametersDatasource";
	    // DPI_PrimaryDatasource, having type string
	    ParameterId["PrimaryDatasource"] = "primaryDatasource";
	    // DPI_ConnectionDatabases, having type string[]
	    ParameterId["ConnectionDatabases"] = "connectionDatabases";
	    // DPI_ConnectionSchemas, having type string[]
	    ParameterId["ConnectionSchemas"] = "connectionSchemas";
	    // DPI_ConnectionWarehouses, having type string[]
	    ParameterId["ConnectionWarehouses"] = "connectionWarehouses";
	    // DPI_PossibleChoices, having type string[]
	    ParameterId["PossibleChoices"] = "possibleChoices";
	    // DPI_StandardConnections, having type string[]
	    ParameterId["StandardConnections"] = "standardConnections";
	    // DPI_Strings, having type string[]
	    ParameterId["Strings"] = "strings";
	    // DPI_TableauServerProjectNames, having type string[]
	    ParameterId["TableauServerProjectNames"] = "tableauServerProjectNames";
	    // DPI_TableCaptions, having type string[]
	    ParameterId["TableCaptions"] = "tableCaptions";
	    // DPI_DataValues, having type object[]
	    ParameterId["DataValues"] = "dataValues";
	    // DPI_QueryBandErrors, having type object[]
	    ParameterId["QueryBandErrors"] = "queryBandErrors";
	    // DPI_QueryBandParameters, having type object[]
	    ParameterId["QueryBandParameters"] = "queryBandParameters";
	    // DPI_InitialSQLParameters, having type object[]
	    ParameterId["InitialSQLParameters"] = "initialSqlParameters";
	    // DPI_ConnectionAttributes, having type Dictionary(of string)
	    ParameterId["ConnectionAttributes"] = "connectionAttrs";
	    // DPI_ConnectionProps, having type Dictionary(of string)
	    ParameterId["ConnectionProps"] = "connectionProps";
	    // DPI_DisplayNameMap, having type Dictionary(of string)
	    ParameterId["DisplayNameMap"] = "displayNameMap";
	    // DPI_LookupTable, having type Dictionary(of string)
	    ParameterId["LookupTable"] = "lookupTable";
	    // DPI_OAuthAttrs, having type Dictionary(of string)
	    ParameterId["OAuthAttrs"] = "oauthAttrs";
	    // DPI_StringMap, having type Dictionary(of string)
	    ParameterId["StringMap"] = "stringMap";
	    // DPI_TableRankingMap, having type Dictionary(of string)
	    ParameterId["TableRankingMap"] = "tableRankingMap";
	    // DPI_WDCAttributes, having type Dictionary(of string)
	    ParameterId["WDCAttributes"] = "wdcAttrs";
	    // DPI_ConnectorAttributes, having type Dictionary(of string)
	    ParameterId["ConnectorAttributes"] = "connectorAttrs";
	    // DPI_TableRelevanceParams, having type Dictionary(of string)
	    ParameterId["TableRelevanceParams"] = "tableRelevanceParams";
	    // DPI_ActualParameterParameter, having type string
	    ParameterId["ActualParameterParameter"] = "actualParameterParameter";
	    // DPI_DataColumnName, having type string
	    ParameterId["DataColumnName"] = "dataColumnName";
	    // DPI_LHSDataColumnName, having type string
	    ParameterId["LHSDataColumnName"] = "lhsDataColumnName";
	    // DPI_RHSDataColumnName, having type string
	    ParameterId["RHSDataColumnName"] = "rhsDataColumnName";
	    // DPI_FullCubeName, having type string
	    ParameterId["FullCubeName"] = "fullCubeName";
	    // DPI_FullVariableName, having type string
	    ParameterId["FullVariableName"] = "fullVariableName";
	    // DPI_SemanticRole, having type string
	    ParameterId["SemanticRole"] = "semanticRole";
	    // DPI_StoredProcedureName, having type string
	    ParameterId["StoredProcedureName"] = "storedProcName";
	    // DPI_TableName, having type string
	    ParameterId["TableName"] = "tableName";
	    // DPI_AddedTableNames, having type string[]
	    ParameterId["AddedTableNames"] = "addedTableNames";
	    // DPI_CoalesceGroupFields, having type string[]
	    ParameterId["CoalesceGroupFields"] = "coalesceGroupFields";
	    // DPI_FieldNames, having type string[]
	    ParameterId["FieldNames"] = "fieldNames";
	    // DPI_JoinFieldAliases, having type string[]
	    ParameterId["JoinFieldAliases"] = "joinField_aliases";
	    // DPI_JoinInfoFields, having type string[]
	    ParameterId["JoinInfoFields"] = "joinInfoFields";
	    // DPI_PivotGroupFields, having type string[]
	    ParameterId["PivotGroupFields"] = "pivotGroupFields";
	    // DPI_RemovedTableNames, having type string[]
	    ParameterId["RemovedTableNames"] = "removedTableNames";
	    // DPI_StoredProcedures, having type string[]
	    ParameterId["StoredProcedures"] = "storedProcedures";
	    // DPI_TableNames, having type string[]
	    ParameterId["TableNames"] = "tableNames";
	    // DPI_ColumnName, having type string
	    ParameterId["ColumnName"] = "columnName";
	    // DPI_FieldName, having type string
	    ParameterId["FieldName"] = "fn";
	    // DPI_GoogleSheetThumbnailImage, having type string
	    ParameterId["GoogleSheetThumbnailImage"] = "googleSheetThumbnailImage";
	    // DPI_AttrMDWPassword, having type string
	    ParameterId["AttrMDWPassword"] = "widgetAttrMdwPassword";
	    // DPI_AttrPassword, having type string
	    ParameterId["AttrPassword"] = "widgetAttrPassword";
	    // DPI_DatasourcePassword, having type string
	    ParameterId["DatasourcePassword"] = "datasourcePassword";
	    // DPI_FederatedKeychain, having type string
	    ParameterId["FederatedKeychain"] = "federatedKeychain";
	    // DPI_DataParameterID, having type string
	    ParameterId["DataParameterID"] = "dataParamType";
	    // DPI_ConnectServerWidgetType, having type ConnectServerWidgetType
	    ParameterId["ConnectServerWidgetType"] = "connectServerWidgetType";
	    // DPI_AuthenticationMode, having type Mode
	    ParameterId["AuthenticationMode"] = "authMode";
	    // DPI_ReconnectAuthMode, having type ReconnectMode
	    ParameterId["ReconnectAuthMode"] = "reconnectAuthMode";
	    // DPI_CurrentAuthOption, having type AuthOption
	    ParameterId["CurrentAuthOption"] = "currAuthOption";
	    // DPI_AuthOptionList, having type AuthOption[]
	    ParameterId["AuthOptionList"] = "authOptions";
	    // DPI_ConnectionSpecificationType, having type ConnectionSpecificationType
	    ParameterId["ConnectionSpecificationType"] = "connectionSpecificationType";
	    // DPI_DataType, having type DataType
	    ParameterId["DataType"] = "dataType";
	    // DPI_LHSDataType, having type DataType
	    ParameterId["LHSDataType"] = "lhsDataType";
	    // DPI_RHSDataType, having type DataType
	    ParameterId["RHSDataType"] = "rhsDataType";
	    // DPI_DefaultFieldRole, having type FieldRole
	    ParameterId["DefaultFieldRole"] = "defaultFieldRole";
	    // DPI_FieldRole, having type FieldRole
	    ParameterId["FieldRole"] = "fieldRole";
	    // DPI_DefaultFieldType, having type FieldType
	    ParameterId["DefaultFieldType"] = "defaultFieldType";
	    // DPI_FieldType, having type FieldType
	    ParameterId["FieldType"] = "fieldType";
	    // DPI_FieldTypeList, having type FieldType[]
	    ParameterId["FieldTypeList"] = "fieldTypeList";
	    // DPI_FieldTypeListDetail, having type FieldType[]
	    ParameterId["FieldTypeListDetail"] = "fieldTypeListDetail";
	    // DPI_AggType, having type AggType
	    ParameterId["AggType"] = "aggregation";
	    // DPI_DefaultAggType, having type AggType
	    ParameterId["DefaultAggType"] = "defaultAggregation";
	    // DPI_ForecastAgg, having type AggType
	    ParameterId["ForecastAgg"] = "forecastSummarizeTo";
	    // DPI_ForecastAutoAgg, having type AggType
	    ParameterId["ForecastAutoAgg"] = "forecastAutoSummarizeTo";
	    // DPI_ForecastAutoRangeUnits, having type AggType
	    ParameterId["ForecastAutoRangeUnits"] = "forecastAutoRangeUnits";
	    // DPI_ForecastEndOfRangeUnits, having type AggType
	    ParameterId["ForecastEndOfRangeUnits"] = "forecastEndOfRangeUnits";
	    // DPI_ForecastNextRangeUnits, having type AggType
	    ParameterId["ForecastNextRangeUnits"] = "forecastNextRangeUnits";
	    // DPI_SourceAgg, having type AggType
	    ParameterId["SourceAgg"] = "sourceAggregation";
	    // DPI_TargetAgg, having type AggType
	    ParameterId["TargetAgg"] = "targetAggregation";
	    // DPI_AggregateByAggTypes, having type AggType[]
	    ParameterId["AggregateByAggTypes"] = "aggregateByAggTypes";
	    // DPI_AggregationValues, having type AggType[]
	    ParameterId["AggregationValues"] = "aggregationValues";
	    // DPI_SortAggValues, having type AggType[]
	    ParameterId["SortAggValues"] = "sortAggValues";
	    // DPI_ColumnClass, having type ColumnClass
	    ParameterId["ColumnClass"] = "columnClass";
	    // DPI_ConnectionWidgetType, having type ConnectionWidgetType
	    ParameterId["ConnectionWidgetType"] = "connectionWidgetType";
	    // DPI_TablePillIcon, having type TablePillIcon
	    ParameterId["TablePillIcon"] = "tablePillIconType";
	    // DPI_EnumeratedEntityType, having type EntityType
	    ParameterId["EnumeratedEntityType"] = "enumeratedEntityType";
	    // DPI_PickEntitySearchType, having type PickEntitySearchType
	    ParameterId["PickEntitySearchType"] = "entitySearchType";
	    // DPI_ExpressionOp, having type Op
	    ParameterId["ExpressionOp"] = "expressionOp";
	    // DPI_ExpressionOperatorCaption, having type ExpressionOperatorCaptionPresModel
	    ParameterId["ExpressionOperatorCaption"] = "expressionOperatorCaption";
	    // DPI_RelationalExperessionOps, having type ExpressionOperatorCaptionPresModel[]
	    ParameterId["RelationalExperessionOps"] = "relationalExpressionOps";
	    // DPI_HierarchyExpressionOps, having type ExpressionOperatorCaptionPresModel[]
	    ParameterId["HierarchyExpressionOps"] = "hierarchyExpressionOps";
	    // DPI_DefaultSortDirection, having type SortDirection
	    ParameterId["DefaultSortDirection"] = "defSortOrder";
	    // DPI_SortDirection, having type SortDirection
	    ParameterId["SortDirection"] = "sortOrder";
	    // DPI_SortDirectionValues, having type SortDirection[]
	    ParameterId["SortDirectionValues"] = "sortDirectionValues";
	    // DPI_CubeMetadataCategory, having type CubeMetadataCategory
	    ParameterId["CubeMetadataCategory"] = "cubeMetadataCategory";
	    // DPI_CubeMetadataCategories, having type CubeMetadataCategory[]
	    ParameterId["CubeMetadataCategories"] = "cubeMetadataCategories";
	    // DPI_GoogleBasicInfoType, having type GoogleBasicInfoType
	    ParameterId["GoogleBasicInfoType"] = "googleBasicInfoType";
	    // DPI_GoogleAnalyticsDateRangeOptionType, having type DateRange
	    ParameterId["GoogleAnalyticsDateRangeOptionType"] = "googleAnalyticsDateRangeOptionType";
	    // DPI_TableCalcType, having type TableCalcType
	    ParameterId["TableCalcType"] = "tableCalcType";
	    // DPI_TableCalcTypeValues, having type TableCalcType[]
	    ParameterId["TableCalcTypeValues"] = "tableCalcTypeValues";
	    // DPI_RelativeAddress, having type RelativeAddress
	    ParameterId["RelativeAddress"] = "relativeAddress";
	    // DPI_RelativeValues, having type RelativeAddress[]
	    ParameterId["RelativeValues"] = "relativeValues";
	    // DPI_OrderingType, having type OrderingType
	    ParameterId["OrderingType"] = "orderingType";
	    // DPI_OrderingTypeValues, having type OrderingType[]
	    ParameterId["OrderingTypeValues"] = "orderingTypeValues";
	    // DPI_CategoricalBinItemType, having type CategoricalBinItemType
	    ParameterId["CategoricalBinItemType"] = "categoricalBinItemType";
	    // DPI_AuthenticationInfos, having type AuthenticationSettingsPresModel
	    ParameterId["AuthenticationInfos"] = "authInfo";
	    // DPI_ConnectionWidgetParams, having type ConnectionParamsPresModel
	    ParameterId["ConnectionWidgetParams"] = "widgetConnectionParams";
	    // DPI_ConnectionSettings, having type ConnectionSettingsPresModel
	    ParameterId["ConnectionSettings"] = "connectionSettings";
	    // DPI_ReconnectAuthenticationSettings, having type AuthenticationSettingsPresModel
	    ParameterId["ReconnectAuthenticationSettings"] = "reconnectAuthSettings";
	    // DPI_CubeConnectionSpecificationOption, having type CubeConnectionSpecificationOptionPresModel
	    ParameterId["CubeConnectionSpecificationOption"] = "cubeConnectionSpecificationOption";
	    // DPI_CubeConnectionSpecificationOptions, having type CubeConnectionSpecificationOptionPresModel[]
	    ParameterId["CubeConnectionSpecificationOptions"] = "cubeConnectionSpecificationOptions";
	    // DPI_CubeConnectionSpecification, having type CubeConnectionSpecificationPresModel
	    ParameterId["CubeConnectionSpecification"] = "cubeConnectionSpecification";
	    // DPI_ConnectionSettingsOption, having type ConnectionSettingsOptionPresModel
	    ParameterId["ConnectionSettingsOption"] = "connectionSettingsOption";
	    // DPI_ConnectionSettingsOptions, having type ConnectionSettingsOptionPresModel[]
	    ParameterId["ConnectionSettingsOptions"] = "connectionSettingsOptions";
	    // DPI_StringCollation, having type StringCollationPresModel
	    ParameterId["StringCollation"] = "stringCollation";
	    // DPI_DatabaseEnumeration, having type DatabaseEnumerationPresModel
	    ParameterId["DatabaseEnumeration"] = "databaseEnumeration";
	    // DPI_SchemaEnumeration, having type SchemaEnumerationPresModel
	    ParameterId["SchemaEnumeration"] = "schemaEnumeration";
	    // DPI_StandardConnectionEnumeration, having type StandardConnectionEnumerationPresModel
	    ParameterId["StandardConnectionEnumeration"] = "standardConnectionEnumeration";
	    // DPI_StoredProcedureEnumeration, having type StoredProcedureEnumerationPresModel
	    ParameterId["StoredProcedureEnumeration"] = "storedProcedureEnumeration";
	    // DPI_TableEnumeration, having type TableEnumerationPresModel
	    ParameterId["TableEnumeration"] = "tableEnumeration";
	    // DPI_WarehouseEnumeration, having type WarehouseEnumerationPresModel
	    ParameterId["WarehouseEnumeration"] = "warehouseEnumeration";
	    // DPI_SlowMetadataSchemaList, having type SlowMetadataSchemaListPresModel
	    ParameterId["SlowMetadataSchemaList"] = "slowMetadataSchemaList";
	    // DPI_SlowMetadataTableList, having type SlowMetadataTableListPresModel
	    ParameterId["SlowMetadataTableList"] = "slowMetadataTableList";
	    // DPI_CubeCatalog, having type CubeCatalogPresModel
	    ParameterId["CubeCatalog"] = "cubeCatalog";
	    // DPI_CubeCatalogs, having type CubeCatalogPresModel[]
	    ParameterId["CubeCatalogs"] = "cubeCatalogs";
	    // DPI_CubeCatalogEnumeration, having type CubeCatalogEnumerationPresModel
	    ParameterId["CubeCatalogEnumeration"] = "cubeCatalogEnumeration";
	    // DPI_Cube, having type CubePresModel
	    ParameterId["Cube"] = "cube";
	    // DPI_Cubes, having type CubePresModel[]
	    ParameterId["Cubes"] = "cubes";
	    // DPI_CubeEnumeration, having type CubeEnumerationPresModel
	    ParameterId["CubeEnumeration"] = "cubeEnumeration";
	    // DPI_GoogleAnalyticsBasicItem, having type GoogleAnalyticsBasicItemPresModel
	    ParameterId["GoogleAnalyticsBasicItem"] = "googleAnalyticsBasicItem";
	    // DPI_GAMeasureSets, having type GoogleAnalyticsBasicItemPresModel[]
	    ParameterId["GAMeasureSets"] = "gaMeasureSets";
	    // DPI_GoogleAnalyticsViews, having type GoogleAnalyticsBasicItemPresModel[]
	    ParameterId["GoogleAnalyticsViews"] = "googleAnalyticsViews";
	    // DPI_GoogleAnalyticsProperties, having type GoogleAnalyticsBasicItemPresModel[]
	    ParameterId["GoogleAnalyticsProperties"] = "googleAnalyticsProperties";
	    // DPI_GoogleBasicInfoItems, having type GoogleAnalyticsBasicItemPresModel[]
	    ParameterId["GoogleBasicInfoItems"] = "googleAnalyticsAccounts";
	    // DPI_GoogleAnalyticsComplexItem, having type GoogleAnalyticsComplexItemPresModel
	    ParameterId["GoogleAnalyticsComplexItem"] = "googleAnalyticsComplexItem";
	    // DPI_GoogleAnalyticsPossibleDimensions, having type GoogleAnalyticsComplexItemPresModel[]
	    ParameterId["GoogleAnalyticsPossibleDimensions"] = "googleAnalyticsPossibleDimensions";
	    // DPI_GoogleAnalyticsPossibleMeasures, having type GoogleAnalyticsComplexItemPresModel[]
	    ParameterId["GoogleAnalyticsPossibleMeasures"] = "googleAnalyticsPossibleMeasures";
	    // DPI_GoogleAnalyticsPossibleSegments, having type GoogleAnalyticsComplexItemPresModel[]
	    ParameterId["GoogleAnalyticsPossibleSegments"] = "googleAnalyticsPossibleSegments";
	    // DPI_GoogleAnalyticsSelectedDimensions, having type GoogleAnalyticsComplexItemPresModel[]
	    ParameterId["GoogleAnalyticsSelectedDimensions"] = "googleAnalyticsSelectedDimensions";
	    // DPI_GoogleAnalyticsSelectedMeasures, having type GoogleAnalyticsComplexItemPresModel[]
	    ParameterId["GoogleAnalyticsSelectedMeasures"] = "googleAnalyticsSelectedMeasures";
	    // DPI_GoogleAnalyticsDateRangeOption, having type GoogleAnalyticsDateRangeOptionPresModel
	    ParameterId["GoogleAnalyticsDateRangeOption"] = "googleAnalyticsDateRangeOption";
	    // DPI_GoogleAnalyticsDateRangeOptions, having type GoogleAnalyticsDateRangeOptionPresModel[]
	    ParameterId["GoogleAnalyticsDateRangeOptions"] = "googleAnalyticsDateRangeOptions";
	    // DPI_GoogleAnalyticsEndDate, having type GoogleAnalyticsDatePresModel
	    ParameterId["GoogleAnalyticsEndDate"] = "googleAnalyticsEndDate";
	    // DPI_GoogleAnalyticsStartDate, having type GoogleAnalyticsDatePresModel
	    ParameterId["GoogleAnalyticsStartDate"] = "googleAnalyticsStartDate";
	    // DPI_GoogleAnalyticsDateRange, having type GoogleAnalyticsDateRangePresModel
	    ParameterId["GoogleAnalyticsDateRange"] = "googleAnalyticsDateRange";
	    // DPI_GoogleAnalyticsQueryPartitioning, having type GoogleAnalyticsQueryPartitioningPresModel
	    ParameterId["GoogleAnalyticsQueryPartitioning"] = "googleAnalyticsQueryPartitioning";
	    // DPI_GAConnectionDescription, having type GoogleAnalyticsConnectionDescriptionPresModel
	    ParameterId["GAConnectionDescription"] = "gaConnectionDescription";
	    // DPI_GoogleSheetItem, having type GoogleSheetItemPresModel
	    ParameterId["GoogleSheetItem"] = "googleSheetItem";
	    // DPI_GoogleSheetItems, having type GoogleSheetItemPresModel[]
	    ParameterId["GoogleSheetItems"] = "googleSheetItems";
	    // DPI_GoogleSheetsListPresModel, having type GoogleSheetsListPresModel
	    ParameterId["GoogleSheetsListPresModel"] = "googleSheetsList";
	    // DPI_GoogleSheetPanePresModel, having type GoogleSheetPanePresModel
	    ParameterId["GoogleSheetPanePresModel"] = "googleSheetPane";
	    // DPI_TableauServerConnectionDescription, having type TableauServerConnectionDescriptionPresModel
	    ParameterId["TableauServerConnectionDescription"] = "tableauServerConnectionDescription";
	    // DPI_InitialSQLPresModel, having type InitialSQLPresModel
	    ParameterId["InitialSQLPresModel"] = "initialSqlPresModel";
	    // DPI_QueryBandingPresModel, having type QueryBandingPresModel
	    ParameterId["QueryBandingPresModel"] = "queryBandingPresModel";
	    // DPI_SlowMetadata, having type SlowMetadataPresModel
	    ParameterId["SlowMetadata"] = "slowMetadata";
	    // DPI_SlowMetadataSchemaSearchPresModel, having type SlowMetadataSearchPresModel
	    ParameterId["SlowMetadataSchemaSearchPresModel"] = "slowMetadataSchemaSearch";
	    // DPI_SlowMetadataTableSearchPresModel, having type SlowMetadataSearchPresModel
	    ParameterId["SlowMetadataTableSearchPresModel"] = "slowMetadataTableSearch";
	    // DPI_TableauServerProjectsPresModel, having type TableauServerProjectsPresModel
	    ParameterId["TableauServerProjectsPresModel"] = "tableauServerProjectsPresmodel";
	    // DPI_TableauServerDataSourcePresModel, having type TableauServerDataSourcePresModel
	    ParameterId["TableauServerDataSourcePresModel"] = "tableauServerDataSourcePresmodel";
	    // DPI_TableauServerDataSourcePresModels, having type TableauServerDataSourcePresModel[]
	    ParameterId["TableauServerDataSourcePresModels"] = "tableauServerDataSourcePresmodels";
	    // DPI_TableauServerDataSourcesPresModel, having type TableauServerDataSourcesPresModel
	    ParameterId["TableauServerDataSourcesPresModel"] = "tableauServerDataSourcesPresmodel";
	    // DPI_TableauServerDataPresModel, having type TableauServerDataPresModel
	    ParameterId["TableauServerDataPresModel"] = "tableauServerDataPresmodel";
	    // DPI_StoredProcedureParameterPresModel, having type StoredProcedureParameterPresModel
	    ParameterId["StoredProcedureParameterPresModel"] = "storedProcedureParameter";
	    // DPI_StoredProcedureParametersPresModel, having type StoredProcedureParameterPresModel[]
	    ParameterId["StoredProcedureParametersPresModel"] = "storedProcedureParameters";
	    // DPI_CustomSQLInfo, having type CustomSQLInfoPresModel
	    ParameterId["CustomSQLInfo"] = "customSqlInfo";
	    // DPI_ConnectionTableInfo, having type ConnectionTableInfoPresModel
	    ParameterId["ConnectionTableInfo"] = "connectionTableInfo";
	    // DPI_TableInfos, having type ConnectionTableInfoPresModel[]
	    ParameterId["TableInfos"] = "tableInfos";
	    // DPI_ConnectionDescription, having type ConnectionDescriptionPresModel
	    ParameterId["ConnectionDescription"] = "connectionDescription";
	    // DPI_DataSourceParserValidationMode, having type DataSourceParserValidationMode
	    ParameterId["DataSourceParserValidationMode"] = "dataSourceParserValidationMode";
	    // DPI_OAuthCredentialTypeInfo, having type OAuthCredentialTypeInfoPresModel
	    ParameterId["OAuthCredentialTypeInfo"] = "oauthCredentialTypeInfo";
	    // DPI_OAuthCredentialTypeInfos, having type OAuthCredentialTypeInfoPresModel[]
	    ParameterId["OAuthCredentialTypeInfos"] = "oauthCredentialTypeInfos";
	    // DPI_OAuthSettings, having type OAuthSettingsPresModel
	    ParameterId["OAuthSettings"] = "oauthSettings";
	    // DPI_CredentialTypePropertiesFlag, having type CredentialTypePropertiesFlag
	    ParameterId["CredentialTypePropertiesFlag"] = "credentialTypePropertiesFlag";
	    // DPI_CredentialTypePropertiesFlags, having type CredentialTypePropertiesFlag[]
	    ParameterId["CredentialTypePropertiesFlags"] = "credentialTypePropertiesFlags";
	    // DPI_ConnectionTypeEnum, having type ConnectionTypeEnum
	    ParameterId["ConnectionTypeEnum"] = "connectionTypeEnum";
	    // DPI_ConnectorType, having type ConnectorType
	    ParameterId["ConnectorType"] = "connectorType";
	    // DPI_PdfPagePicker, having type PdfPagePickerPresModel
	    ParameterId["PdfPagePicker"] = "pdfPagePicker";
	    // DPI_ActivateNew, having type bool
	    ParameterId["ActivateNew"] = "activateNew";
	    // DPI_AddActions, having type bool
	    ParameterId["AddActions"] = "addActions";
	    // DPI_AddAsFloating, having type bool
	    ParameterId["AddAsFloating"] = "addAsFloating";
	    // DPI_AddColorDictionary, having type bool
	    ParameterId["AddColorDictionary"] = "addColorDictionary";
	    // DPI_AddDroplines, having type bool
	    ParameterId["AddDroplines"] = "addDroplines";
	    // DPI_AddHeaders, having type bool
	    ParameterId["AddHeaders"] = "addHeaders";
	    // DPI_AddHighlighting, having type bool
	    ParameterId["AddHighlighting"] = "addHighlighting";
	    // DPI_AddImageDictionary, having type bool
	    ParameterId["AddImageDictionary"] = "addImageDictionary";
	    // DPI_AddMarkLabels, having type bool
	    ParameterId["AddMarkLabels"] = "addMarkLabels";
	    // DPI_AddPages, having type bool
	    ParameterId["AddPages"] = "addPages";
	    // DPI_AddSelection, having type bool
	    ParameterId["AddSelection"] = "addSelection";
	    // DPI_AddToFolder, having type bool
	    ParameterId["AddToFolder"] = "addToFolder";
	    // DPI_AddVizData, having type bool
	    ParameterId["AddVizData"] = "addVizData";
	    // DPI_AlertConditionMet, having type bool
	    ParameterId["AlertConditionMet"] = "alertConditionMet";
	    // DPI_AllFields, having type bool
	    ParameterId["AllFields"] = "allFields";
	    // DPI_AllOnEmpty, having type bool
	    ParameterId["AllOnEmpty"] = "allOnEmpty";
	    // DPI_AllPages, having type bool
	    ParameterId["AllPages"] = "includeAllPages";
	    // DPI_AllowPreviewSizeChange, having type bool
	    ParameterId["AllowPreviewSizeChange"] = "allowPreviewSizeChange";
	    // DPI_AllSelectedIsEffectivelyRangeTypeAll, having type bool
	    ParameterId["AllSelectedIsEffectivelyRangeTypeAll"] = "allSelectedIsEffectivelyRangeTypeAll";
	    // DPI_AllStoryPoints, having type bool
	    ParameterId["AllStoryPoints"] = "allStorypoints";
	    // DPI_AllowAllRange, having type bool
	    ParameterId["AllowAllRange"] = "allowAllRange";
	    // DPI_AllowCreatingNewParameters, having type bool
	    ParameterId["AllowCreatingNewParameters"] = "allowCreatingNewParameters";
	    // DPI_AllowDuplicateFieldDropOnFilterShelf, having type bool
	    ParameterId["AllowDuplicateFieldDropOnFilterShelf"] = "allowDuplicateFieldDropOnFilterShelf";
	    // DPI_AllowFilterPreset, having type bool
	    ParameterId["AllowFilterPreset"] = "allowFilterPreset";
	    // DPI_AllowHoverActions, having type bool
	    ParameterId["AllowHoverActions"] = "allowHoverActions";
	    // DPI_AllowHyphenation, having type bool
	    ParameterId["AllowHyphenation"] = "allowHyphenation";
	    // DPI_AllowJoinOnCalc, having type bool
	    ParameterId["AllowJoinOnCalc"] = "allowJoinOnCalc";
	    // DPI_AllowManualRange, having type bool
	    ParameterId["AllowManualRange"] = "allowManualRange";
	    // DPI_AllowMapping, having type bool
	    ParameterId["AllowMapping"] = "allowMapping";
	    // DPI_AllowMultiSelect, having type bool
	    ParameterId["AllowMultiSelect"] = "allowMultiSelect";
	    // DPI_AllowNull, having type bool
	    ParameterId["AllowNull"] = "allowNull";
	    // DPI_AllowPanZoom, having type bool
	    ParameterId["AllowPanZoom"] = "allowPanZoom";
	    // DPI_AllowPatternBased, having type bool
	    ParameterId["AllowPatternBased"] = "allowPatternBasedUnion";
	    // DPI_AllowPromptText, having type bool
	    ParameterId["AllowPromptText"] = "allowPromptText";
	    // DPI_AllowSaveDataSource, having type bool
	    ParameterId["AllowSaveDataSource"] = "allowSaveDataSource";
	    // DPI_AllowWholeDate, having type bool
	    ParameterId["AllowWholeDate"] = "allowWholeDate";
	    // DPI_AllowWork, having type bool
	    ParameterId["AllowWork"] = "allowWork";
	    // DPI_AllowWrap, having type bool
	    ParameterId["AllowWrap"] = "allowWrap";
	    // DPI_AppIs32Bit, having type bool
	    ParameterId["AppIs32Bit"] = "appIs32Bit";
	    // DPI_AppIs64Bit, having type bool
	    ParameterId["AppIs64Bit"] = "appIs64Bit";
	    // DPI_AppIsBeta, having type bool
	    ParameterId["AppIsBeta"] = "appIsBeta";
	    // DPI_AppIsOEM, having type bool
	    ParameterId["AppIsOEM"] = "appIsOem";
	    // DPI_AppendTde, having type bool
	    ParameterId["AppendTde"] = "appendTde";
	    // DPI_ApplyColors, having type bool
	    ParameterId["ApplyColors"] = "applyColors";
	    // DPI_ApplyNewSelection, having type bool
	    ParameterId["ApplyNewSelection"] = "applyNewSelection";
	    // DPI_AreConfidenceBandsValid, having type bool
	    ParameterId["AreConfidenceBandsValid"] = "areConfidenceBandsValid";
	    // DPI_AreDataSourceFiltersVisible, having type bool
	    ParameterId["AreDataSourceFiltersVisible"] = "areDataSourceFiltersVisible";
	    // DPI_AreExtractFiltersEnabled, having type bool
	    ParameterId["AreExtractFiltersEnabled"] = "areExtractFiltersEnabled";
	    // DPI_AreTotalsUsed, having type bool
	    ParameterId["AreTotalsUsed"] = "areTotalsUsed";
	    // DPI_AtTheLevelFieldIsInvalid, having type bool
	    ParameterId["AtTheLevelFieldIsInvalid"] = "atTheLevelFieldIsInvalid";
	    // DPI_AutoURL, having type bool
	    ParameterId["AutoURL"] = "autoUrl";
	    // DPI_AutoUpdate, having type bool
	    ParameterId["AutoUpdate"] = "autoUpdate";
	    // DPI_BackingSheetIsDashboard, having type bool
	    ParameterId["BackingSheetIsDashboard"] = "isBackingSheetDashboard";
	    // DPI_BeginDataSourcePresModelUpdate, having type bool
	    ParameterId["BeginDataSourcePresModelUpdate"] = "beginDataSourcePresModelUpdate";
	    // DPI_AggregateDrillUp, having type bool
	    ParameterId["AggregateDrillUp"] = "boolAggregateDrillUp";
	    // DPI_BoxplotMarkExclusion, having type bool
	    ParameterId["BoxplotMarkExclusion"] = "boxplotMarkExclusion";
	    // DPI_BreakPageOnPane, having type bool
	    ParameterId["BreakPageOnPane"] = "breakPageOnPane";
	    // DPI_BrushLegends, having type bool
	    ParameterId["BrushLegends"] = "brushLegends";
	    // DPI_CachePresModels, having type bool
	    ParameterId["CachePresModels"] = "cachePresModels";
	    // DPI_CanAddConnections, having type bool
	    ParameterId["CanAddConnections"] = "canAddConnections";
	    // DPI_SortPillCanBeDragged, having type bool
	    ParameterId["SortPillCanBeDragged"] = "sortPillCanBeDragged";
	    // DPI_CanAddTable, having type bool
	    ParameterId["CanAddTable"] = "canAddTable";
	    // DPI_CanAnalyzeData, having type bool
	    ParameterId["CanAnalyzeData"] = "canAnalyzeData";
	    // DPI_CanChangeDataType, having type bool
	    ParameterId["CanChangeDataType"] = "canChangeDataType";
	    // DPI_CanChangeSemanticRole, having type bool
	    ParameterId["CanChangeSemanticRole"] = "canChangeSemanticRole";
	    // DPI_CanDerive, having type bool
	    ParameterId["CanDerive"] = "canDerive";
	    // DPI_CanEdit, having type bool
	    ParameterId["CanEdit"] = "canEdit";
	    // DPI_CanEditLegendColor, having type bool
	    ParameterId["CanEditLegendColor"] = "canEditLegendColor";
	    // DPI_CanEnableFilterStateButton, having type bool
	    ParameterId["CanEnableFilterStateButton"] = "canEnableFilterStateButton";
	    // DPI_CanFloat, having type bool
	    ParameterId["CanFloat"] = "canFloat";
	    // DPI_CanHaveTitle, having type bool
	    ParameterId["CanHaveTitle"] = "canHaveTitle";
	    // DPI_CanIgnoreUpdate, having type bool
	    ParameterId["CanIgnoreUpdate"] = "canIgnoreUpdate";
	    // DPI_CanNavigateBack, having type bool
	    ParameterId["CanNavigateBack"] = "canNavigateBack";
	    // DPI_CanNavigateForward, having type bool
	    ParameterId["CanNavigateForward"] = "canNavigateForward";
	    // DPI_CanScrollX, having type bool
	    ParameterId["CanScrollX"] = "canScrollX";
	    // DPI_CanScrollY, having type bool
	    ParameterId["CanScrollY"] = "canScrollY";
	    // DPI_CanSetDomain, having type bool
	    ParameterId["CanSetDomain"] = "canSetDomain";
	    // DPI_CanSetMapUnit, having type bool
	    ParameterId["CanSetMapUnit"] = "canSetMapUnit";
	    // DPI_CanShowApplyButton, having type bool
	    ParameterId["CanShowApplyButton"] = "canShowApplyButton";
	    // DPI_CanShowFilterStateButton, having type bool
	    ParameterId["CanShowFilterStateButton"] = "canShowFilterStateButton";
	    // DPI_CanShowMoreFewerButton, having type bool
	    ParameterId["CanShowMoreFewerButton"] = "canShowMoreFewerButton";
	    // DPI_CanShowSyncClientOptions, having type bool
	    ParameterId["CanShowSyncClientOptions"] = "canShowSyncClientOptions";
	    // DPI_CanSort, having type bool
	    ParameterId["CanSort"] = "canSort";
	    // DPI_CanSortOrdinally, having type bool
	    ParameterId["CanSortOrdinally"] = "canSortOrdinal";
	    // DPI_CanToggleAutomaticDrill, having type bool
	    ParameterId["CanToggleAutomaticDrill"] = "canToggleAutomaticDrill";
	    // DPI_CanToggleGeographicSearch, having type bool
	    ParameterId["CanToggleGeographicSearch"] = "canToggleGeographicSearch";
	    // DPI_CanToggleMapScale, having type bool
	    ParameterId["CanToggleMapScale"] = "canToggleMapScale";
	    // DPI_CanUseFullColorRange, having type bool
	    ParameterId["CanUseFullColorRange"] = "canUseFullColorRange";
	    // DPI_CenterHorizontally, having type bool
	    ParameterId["CenterHorizontally"] = "centerHorizontally";
	    // DPI_CenterVertically, having type bool
	    ParameterId["CenterVertically"] = "centerVertically";
	    // DPI_ChangeAllFields, having type bool
	    ParameterId["ChangeAllFields"] = "changeAllFields";
	    // DPI_Changed, having type bool
	    ParameterId["Changed"] = "changed";
	    // DPI_ClearBrushing, having type bool
	    ParameterId["ClearBrushing"] = "clearBrushing";
	    // DPI_ClearSort, having type bool
	    ParameterId["ClearSort"] = "clearSort";
	    // DPI_ClearView, having type bool
	    ParameterId["ClearView"] = "clearView";
	    // DPI_Collapsed, having type bool
	    ParameterId["Collapsed"] = "collapsed";
	    // DPI_ConsolidateInCommit, having type bool
	    ParameterId["ConsolidateInCommit"] = "consolidateInCommit";
	    // DPI_ClusterEnableScaledCheckbox, having type bool
	    ParameterId["ClusterEnableScaledCheckbox"] = "clusterEnableScaledCheckbox";
	    // DPI_CommitPillFinished, having type bool
	    ParameterId["CommitPillFinished"] = "commitPillFinished";
	    // DPI_CompressArrays, having type bool
	    ParameterId["CompressArrays"] = "compressArrays";
	    // DPI_ComputeCompoundedRate, having type bool
	    ParameterId["ComputeCompoundedRate"] = "computeCompoundedRate";
	    // DPI_ConfidenceIntervalAllowed, having type bool
	    ParameterId["ConfidenceIntervalAllowed"] = "confidenceIntervalAllowed";
	    // DPI_ConfigIsDesktopStandard, having type bool
	    ParameterId["ConfigIsDesktopStandard"] = "configIsDesktopStandard";
	    // DPI_ConfigIsInteractor, having type bool
	    ParameterId["ConfigIsInteractor"] = "configIsInteractor";
	    // DPI_ConfigIsPublic, having type bool
	    ParameterId["ConfigIsPublic"] = "configIsPublic";
	    // DPI_ConfigIsReader, having type bool
	    ParameterId["ConfigIsReader"] = "configIsReader";
	    // DPI_ContainsQuant, having type bool
	    ParameterId["ContainsQuant"] = "containsQuant";
	    // DPI_ContainsValidDatasources, having type bool
	    ParameterId["ContainsValidDatasources"] = "containsValidDatasources";
	    // DPI_ControllerMissing, having type bool
	    ParameterId["ControllerMissing"] = "controllerMissing";
	    // DPI_CreateExtractForPublish, having type bool
	    ParameterId["CreateExtractForPublish"] = "createExtractForPublish";
	    // DPI_CrossTab, having type bool
	    ParameterId["CrossTab"] = "crossTab";
	    // DPI_CullLabels, having type bool
	    ParameterId["CullLabels"] = "cullLabels";
	    // DPI_CurrentCustViewIdFlag, having type bool
	    ParameterId["CurrentCustViewIdFlag"] = "isCurrentCustViewIdValid";
	    // DPI_DataGridSortOrder, having type bool
	    ParameterId["DataGridSortOrder"] = "datagridSortOrder";
	    // DPI_DeleteExtract, having type bool
	    ParameterId["DeleteExtract"] = "deleteExtract";
	    // DPI_DeleteOnlySpecifiedSelection, having type bool
	    ParameterId["DeleteOnlySpecifiedSelection"] = "deleteOnlySpecifiedSelection";
	    // DPI_DeleteOrphans, having type bool
	    ParameterId["DeleteOrphans"] = "deleteOrphans";
	    // DPI_DisabledDataConnectionClassNames, having type bool
	    ParameterId["DisabledDataConnectionClassNames"] = "disabledDataConnectionClassNames";
	    // DPI_DisablePresModelHandler, having type bool
	    ParameterId["DisablePresModelHandler"] = "disablePresModelHandler";
	    // DPI_DisplayDate, having type bool
	    ParameterId["DisplayDate"] = "displayDate";
	    // DPI_DisplayTime, having type bool
	    ParameterId["DisplayTime"] = "displayTime";
	    // DPI_DoDropUIAction, having type bool
	    ParameterId["DoDropUIAction"] = "doDropUiAction";
	    // DPI_DoMerge, having type bool
	    ParameterId["DoMerge"] = "doMerge";
	    // DPI_DoPreDropUIAction, having type bool
	    ParameterId["DoPreDropUIAction"] = "doPreDropUiAction";
	    // DPI_DoQuery, having type bool
	    ParameterId["DoQuery"] = "doQuery";
	    // DPI_DragHorz, having type bool
	    ParameterId["DragHorz"] = "dragHorz";
	    // DPI_DrillDown, having type bool
	    ParameterId["DrillDown"] = "drillDown";
	    // DPI_DropToXAxis, having type bool
	    ParameterId["DropToXAxis"] = "dropToXAxis";
	    // DPI_DropToYAxis, having type bool
	    ParameterId["DropToYAxis"] = "dropToYAxis";
	    // DPI_DropUnnamedFields, having type bool
	    ParameterId["DropUnnamedFields"] = "dropUnnamedFields";
	    // DPI_EditExisting, having type bool
	    ParameterId["EditExisting"] = "editExisting";
	    // DPI_EditingConnection, having type bool
	    ParameterId["EditingConnection"] = "editingConnection";
	    // DPI_EmbedCredentials, having type bool
	    ParameterId["EmbedCredentials"] = "embedCredentials";
	    // DPI_EmbedOAuthCredential, having type bool
	    ParameterId["EmbedOAuthCredential"] = "embedOauthCredentials";
	    // DPI_EmptyHighlightFogAll, having type bool
	    ParameterId["EmptyHighlightFogAll"] = "emptyHighlightFogAll";
	    // DPI_EnableAlphabeticSort, having type bool
	    ParameterId["EnableAlphabeticSort"] = "enableAlphabeticSort";
	    // DPI_EnableAutomaticDrill, having type bool
	    ParameterId["EnableAutomaticDrill"] = "enableAutomaticDrill";
	    // DPI_EnableConfidenceBands, having type bool
	    ParameterId["EnableConfidenceBands"] = "enableConfidenceBands";
	    // DPI_EnableDataOrderSort, having type bool
	    ParameterId["EnableDataOrderSort"] = "enableDataOrderSort";
	    // DPI_EnableFieldSort, having type bool
	    ParameterId["EnableFieldSort"] = "enableFieldSort";
	    // DPI_EnableInstantAnalytics, having type bool
	    ParameterId["EnableInstantAnalytics"] = "enableInstantAnalytics";
	    // DPI_EnableLines, having type bool
	    ParameterId["EnableLines"] = "enableLines";
	    // DPI_EnableManualSort, having type bool
	    ParameterId["EnableManualSort"] = "enableManualSort";
	    // DPI_EnableMarks, having type bool
	    ParameterId["EnableMarks"] = "enableMarks";
	    // DPI_EnableMultipleSelection, having type bool
	    ParameterId["EnableMultipleSelection"] = "enableMultipleSelection";
	    // DPI_EnablePrefetching, having type bool
	    ParameterId["EnablePrefetching"] = "enablePrefetching";
	    // DPI_EnableTableCalcDensification, having type bool
	    ParameterId["EnableTableCalcDensification"] = "enableTableCalcDensification";
	    // DPI_EndDataSourcePresModelUpdate, having type bool
	    ParameterId["EndDataSourcePresModelUpdate"] = "endDataSourcePresModelUpdate";
	    // DPI_EstimateNulls, having type bool
	    ParameterId["EstimateNulls"] = "estimateNulls";
	    // DPI_Exclude, having type bool
	    ParameterId["Exclude"] = "exclude";
	    // DPI_ExcludeColor, having type bool
	    ParameterId["ExcludeColor"] = "excludeColor";
	    // DPI_ExcludeCubeDenorm, having type bool
	    ParameterId["ExcludeCubeDenorm"] = "excludeCubeDenorm";
	    // DPI_ExcludeInterceptEnabled, having type bool
	    ParameterId["ExcludeInterceptEnabled"] = "excludeInterceptEnabled";
	    // DPI_ExcludeLocalFunctions, having type bool
	    ParameterId["ExcludeLocalFunctions"] = "excludeLocalFunctions";
	    // DPI_ExportDashboardImageFromSheet, having type bool
	    ParameterId["ExportDashboardImageFromSheet"] = "exportImageSheetAsDashboard";
	    // DPI_ExtSvcConfigIsAuthEnabled, having type bool
	    ParameterId["ExtSvcConfigIsAuthEnabled"] = "extSvcConfigIsAuthEnabled";
	    // DPI_ExtractFullRefresh, having type bool
	    ParameterId["ExtractFullRefresh"] = "extractFullRefresh";
	    // DPI_ExtractNeedsRefresh, having type bool
	    ParameterId["ExtractNeedsRefresh"] = "extractNeedsRefresh";
	    // DPI_ExtractPending, having type bool
	    ParameterId["ExtractPending"] = "extractPending";
	    // DPI_ExtractSelected, having type bool
	    ParameterId["ExtractSelected"] = "extractSelected";
	    // DPI_FederatableOnly, having type bool
	    ParameterId["FederatableOnly"] = "federatableOnly";
	    // DPI_FieldSortOrder, having type bool
	    ParameterId["FieldSortOrder"] = "fieldSortOrder";
	    // DPI_FieldSupportsContains, having type bool
	    ParameterId["FieldSupportsContains"] = "fieldSupportsContains";
	    // DPI_FieldSupportsEndsWith, having type bool
	    ParameterId["FieldSupportsEndsWith"] = "fieldSupportsEndsWith";
	    // DPI_FieldSupportsStartsWith, having type bool
	    ParameterId["FieldSupportsStartsWith"] = "fieldSupportsStartsWith";
	    // DPI_FillAbove, having type bool
	    ParameterId["FillAbove"] = "fillAbove";
	    // DPI_FillBelow, having type bool
	    ParameterId["FillBelow"] = "fillBelow";
	    // DPI_FillWithZeroes, having type bool
	    ParameterId["FillWithZeroes"] = "fillZeroes";
	    // DPI_FilterIsNamed, having type bool
	    ParameterId["FilterIsNamed"] = "filterIsNamed";
	    // DPI_Focus, having type bool
	    ParameterId["Focus"] = "focus";
	    // DPI_ForInternalUse, having type bool
	    ParameterId["ForInternalUse"] = "internalUse";
	    // DPI_ForceBrowserRendering, having type bool
	    ParameterId["ForceBrowserRendering"] = "forceBrowserRendering";
	    // DPI_ForceCache, having type bool
	    ParameterId["ForceCache"] = "forceCache";
	    // DPI_ForceColorFromApp, having type bool
	    ParameterId["ForceColorFromApp"] = "forceColorFromApp";
	    // DPI_ForceConnectionAttempt, having type bool
	    ParameterId["ForceConnectionAttempt"] = "forceConnectionAttempt";
	    // DPI_ForceConsolidateInCommit, having type bool
	    ParameterId["ForceConsolidateInCommit"] = "forceConsolidateInCommit";
	    // DPI_ForceExtractRefresh, having type bool
	    ParameterId["ForceExtractRefresh"] = "extractForceRefresh";
	    // DPI_ForceInterceptZero, having type bool
	    ParameterId["ForceInterceptZero"] = "forceInterceptZero";
	    // DPI_ForceOldConnectExperience, having type bool
	    ParameterId["ForceOldConnectExperience"] = "forceOldConnectExperience";
	    // DPI_ForceToggleHighlightStateOn, having type bool
	    ParameterId["ForceToggleHighlightStateOn"] = "forceHighlightOn";
	    // DPI_ForceWholeDate, having type bool
	    ParameterId["ForceWholeDate"] = "forceWholeDate";
	    // DPI_ForecastSelected, having type bool
	    ParameterId["ForecastSelected"] = "forecastSelected";
	    // DPI_ForecastUseAutoAgg, having type bool
	    ParameterId["ForecastUseAutoAgg"] = "forecastUseAutoSummarize";
	    // DPI_ForJoin, having type bool
	    ParameterId["ForJoin"] = "forJoin";
	    // DPI_FormatDataValueLocally, having type bool
	    ParameterId["FormatDataValueLocally"] = "formatDataValueLocally";
	    // DPI_FormatIfColumn, having type bool
	    ParameterId["FormatIfColumn"] = "formatIfColumn";
	    // DPI_FormatIfParameter, having type bool
	    ParameterId["FormatIfParameter"] = "formatIfParameter";
	    // DPI_GeographicSearchIsDataLoaded, having type bool
	    ParameterId["GeographicSearchIsDataLoaded"] = "geographicSearchDataLoaded";
	    // DPI_GeographicSearchLoadDataAsync, having type bool
	    ParameterId["GeographicSearchLoadDataAsync"] = "geographicSearchLoadDataAsync";
	    // DPI_GroupByAll, having type bool
	    ParameterId["GroupByAll"] = "groupByAll";
	    // DPI_HasAlias, having type bool
	    ParameterId["HasAlias"] = "hasAlias";
	    // DPI_HasAllMember, having type bool
	    ParameterId["HasAllMember"] = "hasAllMember";
	    // DPI_HasApply, having type bool
	    ParameterId["HasApply"] = "hasApply";
	    // DPI_HasBackgroundImage, having type bool
	    ParameterId["HasBackgroundImage"] = "hasBackgroundImage";
	    // DPI_HasBeenDismissed, having type bool
	    ParameterId["HasBeenDismissed"] = "hasBeenDismissed";
	    // DPI_HasCaption, having type bool
	    ParameterId["HasCaption"] = "hasCaption";
	    // DPI_HasCondition, having type bool
	    ParameterId["HasCondition"] = "hasCondition";
	    // DPI_HasConnectPermissions, having type bool
	    ParameterId["HasConnectPermissions"] = "hasConnectPermissions";
	    // DPI_HasDashboard, having type bool
	    ParameterId["HasDashboard"] = "hasDashboard";
	    // DPI_HasDownloadPermissions, having type bool
	    ParameterId["HasDownloadPermissions"] = "hasDownloadPermissions";
	    // DPI_HasDrill, having type bool
	    ParameterId["HasDrill"] = "hasDrill";
	    // DPI_HasFill, having type bool
	    ParameterId["HasFill"] = "hasFill";
	    // DPI_HasLabels, having type bool
	    ParameterId["HasLabels"] = "hasLabels";
	    // DPI_HasLimit, having type bool
	    ParameterId["HasLimit"] = "hasLimit";
	    // DPI_HasLine, having type bool
	    ParameterId["HasLine"] = "hasLine";
	    // DPI_HasModifiedAxes, having type bool
	    ParameterId["HasModifiedAxes"] = "hasModifiedAxes";
	    // DPI_HasNonRootCalculations, having type bool
	    ParameterId["HasNonRootCalculations"] = "hasNonRootCalculations";
	    // DPI_HasPattern, having type bool
	    ParameterId["HasPattern"] = "hasPattern";
	    // DPI_HasPublishGuidanceResults, having type bool
	    ParameterId["HasPublishGuidanceResults"] = "hasPublishGuidanceResults";
	    // DPI_HasSelection, having type bool
	    ParameterId["HasSelection"] = "hasSelection";
	    // DPI_HasServerCredentials, having type bool
	    ParameterId["HasServerCredentials"] = "hasServerCredentials";
	    // DPI_HasSpace, having type bool
	    ParameterId["HasSpace"] = "hasSpace";
	    // DPI_HasStoredProcedure, having type bool
	    ParameterId["HasStoredProcedure"] = "hasStoredProcedure";
	    // DPI_HasStringCalculatedMeasures, having type bool
	    ParameterId["HasStringCalculatedMeasures"] = "hasStringCalculatedMeasures";
	    // DPI_HasTableCalcData, having type bool
	    ParameterId["HasTableCalcData"] = "hasTableCalcData";
	    // DPI_HasTitle, having type bool
	    ParameterId["HasTitle"] = "hasTitle";
	    // DPI_HasUsableSchema, having type bool
	    ParameterId["HasUsableSchema"] = "hasUsableSchema";
	    // DPI_HasUserSpecificContent, having type bool
	    ParameterId["HasUserSpecificContent"] = "hasUserSpecificContent";
	    // DPI_HasUnjoinedTable, having type bool
	    ParameterId["HasUnjoinedTable"] = "hasUnjoinedTable";
	    // DPI_HasVarArgs, having type bool
	    ParameterId["HasVarArgs"] = "hasVarArgs";
	    // DPI_HasVisitedWDCPage, having type bool
	    ParameterId["HasVisitedWDCPage"] = "hasVisitedWdcPage";
	    // DPI_IgnoreAliases, having type bool
	    ParameterId["IgnoreAliases"] = "ignoreAliases";
	    // DPI_IgnoreDomain, having type bool
	    ParameterId["IgnoreDomain"] = "ignoreDomain";
	    // DPI_IgnoreSelection, having type bool
	    ParameterId["IgnoreSelection"] = "ignoreSelection";
	    // DPI_IncludeAllColumns, having type bool
	    ParameterId["IncludeAllColumns"] = "includeAllColumns";
	    // DPI_IncludeContext, having type bool
	    ParameterId["IncludeContext"] = "includeContext";
	    // DPI_IncludeDashboardPresModels, having type bool
	    ParameterId["IncludeDashboardPresModels"] = "includeDashboardPresModels";
	    // DPI_IncludeItemSet, having type bool
	    ParameterId["IncludeItemSet"] = "includeItemSet";
	    // DPI_IncludeLocalFiles, having type bool
	    ParameterId["IncludeLocalFiles"] = "includeLocalFiles";
	    // DPI_IncludeOtherSelected, having type bool
	    ParameterId["IncludeOtherSelected"] = "includeOtherSelected";
	    // DPI_IncludeNulls, having type bool
	    ParameterId["IncludeNulls"] = "includeNulls";
	    // DPI_IncludeParent, having type bool
	    ParameterId["IncludeParent"] = "includeParent";
	    // DPI_IncludeSelections, having type bool
	    ParameterId["IncludeSelections"] = "includeSelections";
	    // DPI_IncludeSiblings, having type bool
	    ParameterId["IncludeSiblings"] = "includeSiblings";
	    // DPI_IncludeStories, having type bool
	    ParameterId["IncludeStories"] = "includeStories";
	    // DPI_IncludeSubfolders, having type bool
	    ParameterId["IncludeSubfolders"] = "includeSubfolders";
	    // DPI_IncludeVolatileProps, having type bool
	    ParameterId["IncludeVolatileProps"] = "includeVolatileProps";
	    // DPI_IncludesTag, having type bool
	    ParameterId["IncludesTag"] = "includesTag";
	    // DPI_InsertAfter, having type bool
	    ParameterId["InsertAfter"] = "insertAfter";
	    // DPI_InsertAtEnd, having type bool
	    ParameterId["InsertAtEnd"] = "insertAtEnd";
	    // DPI_InstantAnalyticsAllowed, having type bool
	    ParameterId["InstantAnalyticsAllowed"] = "instantAnalyticsAllowed";
	    // DPI_IntegerCoordinates, having type bool
	    ParameterId["IntegerCoordinates"] = "intCoords";
	    // DPI_InvalidatedLayout, having type bool
	    ParameterId["InvalidatedLayout"] = "invalidatedLayout";
	    // DPI_IsActive, having type bool
	    ParameterId["IsActive"] = "isActive";
	    // DPI_IsAddToFilter, having type bool
	    ParameterId["IsAddToFilter"] = "isAddToFilterButtonChecked";
	    // DPI_IsAllButtonVisible, having type bool
	    ParameterId["IsAllButtonVisible"] = "isAllButtonVisible";
	    // DPI_IsAllowedInCalcs, having type bool
	    ParameterId["IsAllowedInCalcs"] = "isAllowedInCalcs";
	    // DPI_IsAppMapSource, having type bool
	    ParameterId["IsAppMapSource"] = "isAppMapSource";
	    // DPI_IsArchive, having type bool
	    ParameterId["IsArchive"] = "isArchive";
	    // DPI_IsAuthoringMode, having type bool
	    ParameterId["IsAuthoringMode"] = "isAuthoringMode";
	    // DPI_IsAuto, having type bool
	    ParameterId["IsAuto"] = "isAuto";
	    // DPI_IsAutoClear, having type bool
	    ParameterId["IsAutoClear"] = "isAutoClear";
	    // DPI_IsAutoColumn, having type bool
	    ParameterId["IsAutoColumn"] = "isAutoColumn";
	    // DPI_IsAutoHidden, having type bool
	    ParameterId["IsAutoHidden"] = "isAutoHidden";
	    // DPI_IsAutoSelect, having type bool
	    ParameterId["IsAutoSelect"] = "isAutoSelect";
	    // DPI_IsBold, having type bool
	    ParameterId["IsBold"] = "isBold";
	    // DPI_IsBorderVisible, having type bool
	    ParameterId["IsBorderVisible"] = "isBorderVisible";
	    // DPI_IsBoxplot, having type bool
	    ParameterId["IsBoxplot"] = "isBoxplot";
	    // DPI_IsCapable, having type bool
	    ParameterId["IsCapable"] = "isCapable";
	    // DPI_IsCaptured, having type bool
	    ParameterId["IsCaptured"] = "isCaptured";
	    // DPI_IsCentered, having type bool
	    ParameterId["IsCentered"] = "isCentered";
	    // DPI_IsChecked, having type bool
	    ParameterId["IsChecked"] = "isChecked";
	    // DPI_IsColorDiverging, having type bool
	    ParameterId["IsColorDiverging"] = "isColorDiverging";
	    // DPI_IsColorStepped, having type bool
	    ParameterId["IsColorStepped"] = "isColorStepped";
	    // DPI_IsCombinedField, having type bool
	    ParameterId["IsCombinedField"] = "isCombinedField";
	    // DPI_IsConnected, having type bool
	    ParameterId["IsConnected"] = "isConnected";
	    // DPI_IsContextMenuAllowed, having type bool
	    ParameterId["IsContextMenuAllowed"] = "isContextMenuAllowed";
	    // DPI_IsContinuous, having type bool
	    ParameterId["IsContinuous"] = "isContinuous";
	    // DPI_IsCopy, having type bool
	    ParameterId["IsCopy"] = "isCopy";
	    // DPI_IsCustomPalette, having type bool
	    ParameterId["IsCustomPalette"] = "isCustomPalette";
	    // DPI_IsCustomSQL, having type bool
	    ParameterId["IsCustomSQL"] = "isCustomSql";
	    // DPI_IsCustomValueEnabled, having type bool
	    ParameterId["IsCustomValueEnabled"] = "isCustomValueEnabled";
	    // DPI_IsDataAlertConditionMet, having type bool
	    ParameterId["IsDataAlertConditionMet"] = "isDataAlertConditionMet";
	    // DPI_IsDataAlertDialogVisible, having type bool
	    ParameterId["IsDataAlertDialogVisible"] = "isDataAlertDialogVisible";
	    // DPI_IsDataBin, having type bool
	    ParameterId["IsDataBin"] = "isDataBin";
	    // DPI_IsDataGridVisible, having type bool
	    ParameterId["IsDataGridVisible"] = "isDataGridVisible";
	    // DPI_IsDatabase, having type bool
	    ParameterId["IsDatabase"] = "isDatabase";
	    // DPI_IsDatabaseFilterInclusive, having type bool
	    ParameterId["IsDatabaseFilterInclusive"] = "isDbFilterInclusive";
	    // DPI_IsWebDataTabViewSupported, having type bool
	    ParameterId["IsWebDataTabViewSupported"] = "isWebDataTabViewSupported";
	    // DPI_IsPublishedDatasourceReplacement, having type bool
	    ParameterId["IsPublishedDatasourceReplacement"] = "isPublishedDatasourceReplacement";
	    // DPI_IsDeadDrop, having type bool
	    ParameterId["IsDeadDrop"] = "isDeadDrop";
	    // DPI_IsDefault, having type bool
	    ParameterId["IsDefault"] = "isDefault";
	    // DPI_IsDeleteCalcConfirm, having type bool
	    ParameterId["IsDeleteCalcConfirm"] = "isDeleteCalcConfirmed";
	    // DPI_IsDimension, having type bool
	    ParameterId["IsDimension"] = "isDimension";
	    // DPI_IsDropdownEnabled, having type bool
	    ParameterId["IsDropdownEnabled"] = "isDropdownEnabled";
	    // DPI_IsEditing, having type bool
	    ParameterId["IsEditing"] = "isEditing";
	    // DPI_IsEmbedded, having type bool
	    ParameterId["IsEmbedded"] = "isEmbedded";
	    // DPI_IsEmpty, having type bool
	    ParameterId["IsEmpty"] = "isEmpty";
	    // DPI_IsAddInEnabled, having type bool
	    ParameterId["IsAddInEnabled"] = "isAddInEnabled";
	    // DPI_AddInJSDebuggingEnabled, having type bool
	    ParameterId["AddInJSDebuggingEnabled"] = "addInJsDebugginEnabled";
	    // DPI_AddInPauseBeforeLoading, having type bool
	    ParameterId["AddInPauseBeforeLoading"] = "addInPauseBeforeLoading";
	    // DPI_IsEndPtMoveable, having type bool
	    ParameterId["IsEndPtMoveable"] = "isEndpointMovable";
	    // DPI_IsExclude, having type bool
	    ParameterId["IsExclude"] = "isExcludeButtonChecked";
	    // DPI_IsExistingConnection, having type bool
	    ParameterId["IsExistingConnection"] = "isExistingConnection";
	    // DPI_IsExistingObject, having type bool
	    ParameterId["IsExistingObject"] = "isExistingObject";
	    // DPI_IsExtract, having type bool
	    ParameterId["IsExtract"] = "isExtract";
	    // DPI_IsExtractOnlyConnection, having type bool
	    ParameterId["IsExtractOnlyConnection"] = "isExtractOnlyConnection";
	    // DPI_IsExtractSelectionVisible, having type bool
	    ParameterId["IsExtractSelectionVisible"] = "isExtractSelectionVisible";
	    // DPI_IsFederatable, having type bool
	    ParameterId["IsFederatable"] = "isFederatable";
	    // DPI_IsField, having type bool
	    ParameterId["IsField"] = "isField";
	    // DPI_IsFieldParameter, having type bool
	    ParameterId["IsFieldParameter"] = "isFieldParameter";
	    // DPI_IsFilterActionField, having type bool
	    ParameterId["IsFilterActionField"] = "isFilterActionField";
	    // DPI_IsFirstClassConnector, having type bool
	    ParameterId["IsFirstClassConnector"] = "isFirstClassConnector";
	    // DPI_IsFloating, having type bool
	    ParameterId["IsFloating"] = "isFloating";
	    // DPI_IsFolded, having type bool
	    ParameterId["IsFolded"] = "isFolded";
	    // DPI_IsForInput, having type bool
	    ParameterId["IsForInput"] = "isForInput";
	    // DPI_IsForecastEnabled, having type bool
	    ParameterId["IsForecastEnabled"] = "isForecastEnabled";
	    // DPI_IsForceDirty, having type bool
	    ParameterId["IsForceDirty"] = "isForceDirty";
	    // DPI_IsFullScan, having type bool
	    ParameterId["IsFullScan"] = "isFullScan";
	    // DPI_IsFullStyling, having type bool
	    ParameterId["IsFullStyling"] = "isFullStyling";
	    // DPI_IsGenerated, having type bool
	    ParameterId["IsGenerated"] = "isGenerated";
	    // DPI_IsGlobalNames, having type bool
	    ParameterId["IsGlobalNames"] = "isGlobalNames";
	    // DPI_IsGrayed, having type bool
	    ParameterId["IsGrayed"] = "isGrayed";
	    // DPI_IsGrayscale, having type bool
	    ParameterId["IsGrayscale"] = "isGrayscale";
	    // DPI_IsGroup, having type bool
	    ParameterId["IsGroup"] = "isGroup";
	    // DPI_IsHierarchy, having type bool
	    ParameterId["IsHierarchy"] = "isHierarchy";
	    // DPI_IsHierarchySingleSelect, having type bool
	    ParameterId["IsHierarchySingleSelect"] = "isHierarchySingleSelect";
	    // DPI_IsHighlightAllowed, having type bool
	    ParameterId["IsHighlightAllowed"] = "isHighlightAllowed";
	    // DPI_IsHighlightEnabled, having type bool
	    ParameterId["IsHighlightEnabled"] = "isHighlightEnabled";
	    // DPI_IsHighlightField, having type bool
	    ParameterId["IsHighlightField"] = "isHighlightField";
	    // DPI_IsHorizontal, having type bool
	    ParameterId["IsHorizontal"] = "isHorizontal";
	    // DPI_IsImageEnabled, having type bool
	    ParameterId["IsImageEnabled"] = "isImageEnabled";
	    // DPI_IsInDefault, having type bool
	    ParameterId["IsInDefault"] = "isInDefault";
	    // DPI_IsInPrimaryDataSource, having type bool
	    ParameterId["IsInPrimaryDataSource"] = "isInPrimaryDataSource";
	    // DPI_IsInner, having type bool
	    ParameterId["IsInner"] = "isInner";
	    // DPI_IsInstance, having type bool
	    ParameterId["IsInstance"] = "isInstance";
	    // DPI_IsInvalid, having type bool
	    ParameterId["IsInvalid"] = "isInvalid";
	    // DPI_IsInvalidCalcOnDG, having type bool
	    ParameterId["IsInvalidCalcOnDG"] = "isInvalidDgCalc";
	    // DPI_IsItalics, having type bool
	    ParameterId["IsItalics"] = "isItalics";
	    // DPI_IsJoinAreaVisible, having type bool
	    ParameterId["IsJoinAreaVisible"] = "isJoinAreaVisible";
	    // DPI_IsLabels, having type bool
	    ParameterId["IsLabels"] = "isLabels";
	    // DPI_IsLayered, having type bool
	    ParameterId["IsLayered"] = "isLayered";
	    // DPI_IsLeft, having type bool
	    ParameterId["IsLeft"] = "isLeft";
	    // DPI_IsLegacy, having type bool
	    ParameterId["IsLegacy"] = "isLegacy";
	    // DPI_IsLevel, having type bool
	    ParameterId["IsLevel"] = "isLevel";
	    // DPI_IsLevelOrLevelIdentity, having type bool
	    ParameterId["IsLevelOrLevelIdentity"] = "isLevelOrLevelIdentity";
	    // DPI_IsLicensed, having type bool
	    ParameterId["IsLicensed"] = "isLicensed";
	    // DPI_IsLink, having type bool
	    ParameterId["IsLink"] = "isLink";
	    // DPI_IsMap, having type bool
	    ParameterId["IsMap"] = "isMap";
	    // DPI_IsMeasure, having type bool
	    ParameterId["IsMeasure"] = "isMeasure";
	    // DPI_IsMerge, having type bool
	    ParameterId["IsMerge"] = "isMerge";
	    // DPI_IsMessageSourceRemote, having type bool
	    ParameterId["IsMessageSourceRemote"] = "isMessageSourceRemote";
	    // DPI_IsMissingFromExtract, having type bool
	    ParameterId["IsMissingFromExtract"] = "isMissingFromExtract";
	    // DPI_IsMobile, having type bool
	    ParameterId["IsMobile"] = "isMobile";
	    // DPI_IsModified, having type bool
	    ParameterId["IsModified"] = "isModified";
	    // DPI_IsNew, having type bool
	    ParameterId["IsNew"] = "isNew";
	    // DPI_IsNewCloudFileDataSource, having type bool
	    ParameterId["IsNewCloudFileDataSource"] = "isNewCloudFileDataSource";
	    // DPI_IsNone, having type bool
	    ParameterId["IsNone"] = "isNone";
	    // DPI_IsOfflineMode, having type bool
	    ParameterId["IsOfflineMode"] = "isOfflineMode";
	    // DPI_IsPreAqlBin, having type bool
	    ParameterId["IsPreAqlBin"] = "isPreAqlBin";
	    // DPI_IsOMeasuresAndRelational, having type bool
	    ParameterId["IsOMeasuresAndRelational"] = "isOmeasuresAndRelational";
	    // DPI_IsOpaque, having type bool
	    ParameterId["IsOpaque"] = "isOpaque";
	    // DPI_IsOrphaned, having type bool
	    ParameterId["IsOrphaned"] = "isOrphaned";
	    // DPI_IsOverlay, having type bool
	    ParameterId["IsOverlay"] = "isOverlay";
	    // DPI_IsOverride, having type bool
	    ParameterId["IsOverride"] = "isOverride";
	    // DPI_IsPageLoading, having type bool
	    ParameterId["IsPageLoading"] = "isPageLoading";
	    // DPI_IsParameterSelected, having type bool
	    ParameterId["IsParameterSelected"] = "isParameterSelected";
	    // DPI_IsParameterSelectedOnFrom, having type bool
	    ParameterId["IsParameterSelectedOnFrom"] = "isParameterSelectedOnFrom";
	    // DPI_IsParameterSelectedOnTo, having type bool
	    ParameterId["IsParameterSelectedOnTo"] = "isParameterSelectedOnTo";
	    // DPI_IsPatternBased, having type bool
	    ParameterId["IsPatternBased"] = "isPatternBased";
	    // DPI_IsPinned, having type bool
	    ParameterId["IsPinned"] = "isPinned";
	    // DPI_IsPresentationMode, having type bool
	    ParameterId["IsPresentationMode"] = "isPresentationModeDoc";
	    // DPI_IsPublishAllowed, having type bool
	    ParameterId["IsPublishAllowed"] = "isPublishAllowed";
	    // DPI_IsMustDowngradeToPublish, having type bool
	    ParameterId["IsMustDowngradeToPublish"] = "isDowngradeToPublishRequired";
	    // DPI_IsPublished, having type bool
	    ParameterId["IsPublished"] = "isPublished";
	    // DPI_IsQuickTableCalc, having type bool
	    ParameterId["IsQuickTableCalc"] = "isQuickTableCalc";
	    // DPI_IsRadioOn, having type bool
	    ParameterId["IsRadioOn"] = "isRadioOn";
	    // DPI_IsReconnect, having type bool
	    ParameterId["IsReconnect"] = "isReconnect";
	    // DPI_IsRecursive, having type bool
	    ParameterId["IsRecursive"] = "isRecursive";
	    // DPI_IsReferenced, having type bool
	    ParameterId["IsReferenced"] = "isReferenced";
	    // DPI_IsRemovalAllowed, having type bool
	    ParameterId["IsRemovalAllowed"] = "isRowRemovalAllowed";
	    // DPI_IsRenderCapable, having type bool
	    ParameterId["IsRenderCapable"] = "isRenderCapable";
	    // DPI_IsRequired, having type bool
	    ParameterId["IsRequired"] = "isRequired";
	    // DPI_IsReversed, having type bool
	    ParameterId["IsReversed"] = "isReversed";
	    // DPI_IsRightDrag, having type bool
	    ParameterId["IsRightDrag"] = "isRightDrag";
	    // DPI_IsRowLabels, having type bool
	    ParameterId["IsRowLabels"] = "isRowLabels";
	    // DPI_IsPercentage, having type bool
	    ParameterId["IsPercentage"] = "isPercentage";
	    // DPI_IsSalesforceInConnection, having type bool
	    ParameterId["IsSalesforceInConnection"] = "isSalesforceInConnection";
	    // DPI_IsScaled, having type bool
	    ParameterId["IsScaled"] = "isScaled";
	    // DPI_IsSelected, having type bool
	    ParameterId["IsSelected"] = "isSelected";
	    // DPI_IsSelectedItem, having type bool
	    ParameterId["IsSelectedItem"] = "isSelectedItem";
	    // DPI_IsSelectionDisabled, having type bool
	    ParameterId["IsSelectionDisabled"] = "isSelectionDisabled";
	    // DPI_IsShiftDrag, having type bool
	    ParameterId["IsShiftDrag"] = "isShiftDrag";
	    // DPI_IsSingleLabel, having type bool
	    ParameterId["IsSingleLabel"] = "isSingleLabel";
	    // DPI_IsSingleSelect, having type bool
	    ParameterId["IsSingleSelect"] = "isSingleSelect";
	    // DPI_IsSingleSelectMode, having type bool
	    ParameterId["IsSingleSelectMode"] = "isSingleSelectMode";
	    // DPI_IsSingleSelection, having type bool
	    ParameterId["IsSingleSelection"] = "isSingleSelection";
	    // DPI_IsSorted, having type bool
	    ParameterId["IsSorted"] = "isSorted";
	    // DPI_IsSortPill, having type bool
	    ParameterId["IsSortPill"] = "isSortPill";
	    // DPI_IsSpecial, having type bool
	    ParameterId["IsSpecial"] = "isSpecial";
	    // DPI_IsSplashScreen, having type bool
	    ParameterId["IsSplashScreen"] = "isSplashScreen";
	    // DPI_IsStoryEmpty, having type bool
	    ParameterId["IsStoryEmpty"] = "isStoryEmpty";
	    // DPI_IsStrikeThrough, having type bool
	    ParameterId["IsStrikeThrough"] = "isStrikeThrough";
	    // DPI_IsTableCalc, having type bool
	    ParameterId["IsTableCalc"] = "isTableCalc";
	    // DPI_IsTableCleaningSubtable, having type bool
	    ParameterId["IsTableCleaningSubtable"] = "isTableCleaningSubtable";
	    // DPI_IsTableFilterInclusive, having type bool
	    ParameterId["IsTableFilterInclusive"] = "isTableFilterInclusive";
	    // DPI_IsTableRanked, having type bool
	    ParameterId["IsTableRanked"] = "isTableRanked";
	    // DPI_IsTemporary, having type bool
	    ParameterId["IsTemporary"] = "isTemporary";
	    // DPI_IsTitleVisible, having type bool
	    ParameterId["IsTitleVisible"] = "isTitleVisible";
	    // DPI_IsTopLevel, having type bool
	    ParameterId["IsTopLevel"] = "isTopLevel";
	    // DPI_IsTwoValued, having type bool
	    ParameterId["IsTwoValued"] = "isTwoValued";
	    // DPI_IsTypeInFinished, having type bool
	    ParameterId["IsTypeInFinished"] = "isTypeinFinished";
	    // DPI_IsTypeInPill, having type bool
	    ParameterId["IsTypeInPill"] = "isTypeInPill";
	    // DPI_IsURLActionField, having type bool
	    ParameterId["IsURLActionField"] = "isUrlActionField";
	    // DPI_IsUnderlined, having type bool
	    ParameterId["IsUnderlined"] = "isUnderlined";
	    // DPI_IsUnion, having type bool
	    ParameterId["IsUnion"] = "isUnion";
	    // DPI_IsUnionReplacement, having type bool
	    ParameterId["IsUnionReplacement"] = "isUnionReplacement";
	    // DPI_IsUnnamedCalc, having type bool
	    ParameterId["IsUnnamedCalc"] = "isUnnamed";
	    // DPI_IsUserEditable, having type bool
	    ParameterId["IsUserEditable"] = "isUserEditable";
	    // DPI_IsUserPrompted, having type bool
	    ParameterId["IsUserPrompted"] = "isUserPrompted";
	    // DPI_IsUserResponded, having type bool
	    ParameterId["IsUserResponded"] = "isUserResponded";
	    // DPI_IsValid, having type bool
	    ParameterId["IsValid"] = "isValid";
	    // DPI_IsValidWDCPage, having type bool
	    ParameterId["IsValidWDCPage"] = "isValidWdcPage";
	    // DPI_IsVaryingAttributeDimension, having type bool
	    ParameterId["IsVaryingAttributeDimension"] = "isVaryingAttributeDimension";
	    // DPI_IsVertical, having type bool
	    ParameterId["IsVertical"] = "isVertical";
	    // DPI_IsViewModified, having type bool
	    ParameterId["IsViewModified"] = "isViewModified";
	    // DPI_IsVisuallyCategorical, having type bool
	    ParameterId["IsVisuallyCategorical"] = "isVisuallyCat";
	    // DPI_IsVizInTooltip, having type bool
	    ParameterId["IsVizInTooltip"] = "isVizInTooltip";
	    // DPI_IsWeb, having type bool
	    ParameterId["IsWeb"] = "isWeb";
	    // DPI_IsWhite, having type bool
	    ParameterId["IsWhite"] = "isWhite";
	    // DPI_IsWorldNew, having type bool
	    ParameterId["IsWorldNew"] = "isWorldNew";
	    // DPI_IsXAxis, having type bool
	    ParameterId["IsXAxis"] = "isXAxis";
	    // DPI_KeepAspectRatio, having type bool
	    ParameterId["KeepAspectRatio"] = "keepAspectRatio";
	    // DPI_LabelLineEndFirst, having type bool
	    ParameterId["LabelLineEndFirst"] = "labelLineEndFirst";
	    // DPI_LabelLineEndLast, having type bool
	    ParameterId["LabelLineEndLast"] = "labelLineEndLast";
	    // DPI_LabelMarkMax, having type bool
	    ParameterId["LabelMarkMax"] = "labelMarkMax";
	    // DPI_LabelMarkMin, having type bool
	    ParameterId["LabelMarkMin"] = "labelMarkMin";
	    // DPI_LockAspectRatio, having type bool
	    ParameterId["LockAspectRatio"] = "lockAspectRatio";
	    // DPI_LoopPlayback, having type bool
	    ParameterId["LoopPlayback"] = "loopPlayback";
	    // DPI_LossyImages, having type bool
	    ParameterId["LossyImages"] = "lossyImages";
	    // DPI_MakeGlobal, having type bool
	    ParameterId["MakeGlobal"] = "isMakeGlobal";
	    // DPI_ManualSortOnly, having type bool
	    ParameterId["ManualSortOnly"] = "manualSortOnly";
	    // DPI_MapBoxDefaultStyleSelected, having type bool
	    ParameterId["MapBoxDefaultStyleSelected"] = "mapboxDefaultStyleSelected";
	    // DPI_MapBoxURLParseSuccessful, having type bool
	    ParameterId["MapBoxURLParseSuccessful"] = "mapboxUrlParseSuccessful";
	    // DPI_MapClientRequestsMapTiles, having type bool
	    ParameterId["MapClientRequestsMapTiles"] = "clientRequestsMapTiles";
	    // DPI_MapHasValidLayer, having type bool
	    ParameterId["MapHasValidLayer"] = "mapHasValidLayer";
	    // DPI_MapShowAttribution, having type bool
	    ParameterId["MapShowAttribution"] = "showAttribution";
	    // DPI_MarkLabelsVisibilityChanged, having type bool
	    ParameterId["MarkLabelsVisibilityChanged"] = "markLabelsVisibilityChanged";
	    // DPI_MembersLoaded, having type bool
	    ParameterId["MembersLoaded"] = "membersLoaded";
	    // DPI_MinimizeNames, having type bool
	    ParameterId["MinimizeNames"] = "useMinNames";
	    // DPI_MoveRefereceLineUp, having type bool
	    ParameterId["MoveRefereceLineUp"] = "moveReferenceLineUp";
	    // DPI_MultiDataSources, having type bool
	    ParameterId["MultiDataSources"] = "multiDataSources";
	    // DPI_NavArrowsVisible, having type bool
	    ParameterId["NavArrowsVisible"] = "navArrowsVisible";
	    // DPI_OEMHasSplashScreen, having type bool
	    ParameterId["OEMHasSplashScreen"] = "oemHasSplashScreen";
	    // DPI_OneWayBrushing, having type bool
	    ParameterId["OneWayBrushing"] = "oneWayBrushing";
	    // DPI_OnlyAggregations, having type bool
	    ParameterId["OnlyAggregations"] = "onlyAggregations";
	    // DPI_OverrideAllowed, having type bool
	    ParameterId["OverrideAllowed"] = "overrideAllowed";
	    // DPI_OverrideStackDumper, having type bool
	    ParameterId["OverrideStackDumper"] = "overrideStackDumper";
	    // DPI_PageAutoColorLines, having type bool
	    ParameterId["PageAutoColorLines"] = "autoColorLines";
	    // DPI_PageAutoColorMarks, having type bool
	    ParameterId["PageAutoColorMarks"] = "autoColorMarks";
	    // DPI_PageHistoryFade, having type bool
	    ParameterId["PageHistoryFade"] = "historyFade";
	    // DPI_PercentageBands, having type bool
	    ParameterId["PercentageBands"] = "percentageBands";
	    // DPI_PublishWithRemoteQueryAgent, having type bool
	    ParameterId["PublishWithRemoteQueryAgent"] = "publishWithRemoteQueryAgent";
	    // DPI_PreviousSheet, having type bool
	    ParameterId["PreviousSheet"] = "previousSheet";
	    // DPI_PromptDeleteSheetsWithVizInTooltip, having type bool
	    ParameterId["PromptDeleteSheetsWithVizInTooltip"] = "promptDeleteSheetsWithVizInTooltip";
	    // DPI_QuantilesAllowed, having type bool
	    ParameterId["QuantilesAllowed"] = "quantilesAllowed";
	    // DPI_RadialDistanceHitTest, having type bool
	    ParameterId["RadialDistanceHitTest"] = "radialDistanceHitTest";
	    // DPI_RefLineSelected, having type bool
	    ParameterId["RefLineSelected"] = "refLineSelected";
	    // DPI_RemovedSheets, having type bool
	    ParameterId["RemovedSheets"] = "removedSheets";
	    // DPI_RenderImagesAsUrls, having type bool
	    ParameterId["RenderImagesAsUrls"] = "imagesAsUrls";
	    // DPI_RenderOnTop, having type bool
	    ParameterId["RenderOnTop"] = "renderOnTop";
	    // DPI_RepeatHeadersLegends, having type bool
	    ParameterId["RepeatHeadersLegends"] = "repeatHeadersLegends";
	    // DPI_ReplaceActiveConfig, having type bool
	    ParameterId["ReplaceActiveConfig"] = "replaceActiveConfig";
	    // DPI_ReplaceDatasourceAfterPublish, having type bool
	    ParameterId["ReplaceDatasourceAfterPublish"] = "replaceDatasourceAfterPublish";
	    // DPI_ReplaceDatasourceFailed, having type bool
	    ParameterId["ReplaceDatasourceFailed"] = "replaceDatasourceFailed";
	    // DPI_ReplaceTde, having type bool
	    ParameterId["ReplaceTde"] = "replaceTde";
	    // DPI_RequireSelection, having type bool
	    ParameterId["RequireSelection"] = "requireSelection";
	    // DPI_RequiresDBVariables, having type bool
	    ParameterId["RequiresDBVariables"] = "requiresDbVariables";
	    // DPI_RequiresFieldList, having type bool
	    ParameterId["RequiresFieldList"] = "requiresFieldList";
	    // DPI_RestartEveryFieldIsInvalid, having type bool
	    ParameterId["RestartEveryFieldIsInvalid"] = "restartEveryFieldIsInvalid";
	    // DPI_RightJustify, having type bool
	    ParameterId["RightJustify"] = "rightJustify";
	    // DPI_SaveEnabled, having type bool
	    ParameterId["SaveEnabled"] = "saveEnabled";
	    // DPI_SavePasswordAllowed, having type bool
	    ParameterId["SavePasswordAllowed"] = "savePasswordAllowed";
	    // DPI_ScopeIsolation, having type bool
	    ParameterId["ScopeIsolation"] = "scopeIsolation";
	    // DPI_SelectionRequired, having type bool
	    ParameterId["SelectionRequired"] = "selectionRequired";
	    // DPI_SendNotifications, having type bool
	    ParameterId["SendNotifications"] = "sendNotifications";
	    // DPI_SetActive, having type bool
	    ParameterId["SetActive"] = "setActive";
	    // DPI_SetDefaultSort, having type bool
	    ParameterId["SetDefaultSort"] = "setDefault";
	    // DPI_SheetIsDashboard, having type bool
	    ParameterId["SheetIsDashboard"] = "isDashboard";
	    // DPI_SheetIsStoryboard, having type bool
	    ParameterId["SheetIsStoryboard"] = "isStory";
	    // DPI_ShouldAlwaysDisplayAlias, having type bool
	    ParameterId["ShouldAlwaysDisplayAlias"] = "shouldAlwaysDisplayAlias";
	    // DPI_ShouldAutoCapture, having type bool
	    ParameterId["ShouldAutoCapture"] = "shouldAutoCapture";
	    // DPI_ShouldAutoRevert, having type bool
	    ParameterId["ShouldAutoRevert"] = "shouldAutoRevert";
	    // DPI_ShouldChangeUIMode, having type bool
	    ParameterId["ShouldChangeUIMode"] = "shouldChangeUiMode";
	    // DPI_ShouldDisplay, having type bool
	    ParameterId["ShouldDisplay"] = "shouldDisplay";
	    // DPI_ShouldDrill, having type bool
	    ParameterId["ShouldDrill"] = "shouldDrill";
	    // DPI_ShouldForceConnectionAttempt, having type bool
	    ParameterId["ShouldForceConnectionAttempt"] = "shouldForceConnectionAttempt";
	    // DPI_ShouldRefreshDS, having type bool
	    ParameterId["ShouldRefreshDS"] = "shouldRefreshDs";
	    // DPI_ShouldScaleMarksInAxisUnits, having type bool
	    ParameterId["ShouldScaleMarksInAxisUnits"] = "shouldScaleMarksInAxisUnits";
	    // DPI_ShouldSeedCredentials, having type bool
	    ParameterId["ShouldSeedCredentials"] = "shouldSeedCredentials";
	    // DPI_ShouldShowDistance, having type bool
	    ParameterId["ShouldShowDistance"] = "shouldShowDistance";
	    // DPI_ShouldShowMapScale, having type bool
	    ParameterId["ShouldShowMapScale"] = "shouldShowMapScale";
	    // DPI_ShouldURLEscape, having type bool
	    ParameterId["ShouldURLEscape"] = "shouldUrlEscape";
	    // DPI_ShouldUpdateDomainInfo, having type bool
	    ParameterId["ShouldUpdateDomainInfo"] = "shouldUpdateDomInfo";
	    // DPI_ShowAddToFilter, having type bool
	    ParameterId["ShowAddToFilter"] = "showAddToFilterButton";
	    // DPI_ShowAliases, having type bool
	    ParameterId["ShowAliases"] = "showAliases";
	    // DPI_ShowAllPages, having type bool
	    ParameterId["ShowAllPages"] = "showAllPages";
	    // DPI_ShowApply, having type bool
	    ParameterId["ShowApply"] = "showApplyButton";
	    // DPI_ShowApplyAndCancelButtons, having type bool
	    ParameterId["ShowApplyAndCancelButtons"] = "showApplyAndCancelButtons";
	    // DPI_ShowAuthenticationOptions, having type bool
	    ParameterId["ShowAuthenticationOptions"] = "showAuthenticationOptions";
	    // DPI_ShowAuthenticationSetting, having type bool
	    ParameterId["ShowAuthenticationSetting"] = "showAuthenticationSetting";
	    // DPI_ShowAuto, having type bool
	    ParameterId["ShowAuto"] = "showAuto";
	    // DPI_ShowBold, having type bool
	    ParameterId["ShowBold"] = "showBoldOption";
	    // DPI_ShowButtons, having type bool
	    ParameterId["ShowButtons"] = "showButtons";
	    // DPI_ShowCaption, having type bool
	    ParameterId["ShowCaption"] = "showCaption";
	    // DPI_ShowColorLegend, having type bool
	    ParameterId["ShowColorLegend"] = "showColorLegend";
	    // DPI_ShowDataGridInlineRename, having type bool
	    ParameterId["ShowDataGridInlineRename"] = "showDataGridInlineRename";
	    // DPI_ShowDetailMessages, having type bool
	    ParameterId["ShowDetailMessages"] = "showDetailMessages";
	    // DPI_ShowDate, having type bool
	    ParameterId["ShowDate"] = "showDate";
	    // DPI_ShowDragLabel, having type bool
	    ParameterId["ShowDragLabel"] = "showDragLabel";
	    // DPI_ShowDropMeasures, having type bool
	    ParameterId["ShowDropMeasures"] = "showDropMeasures";
	    // DPI_ShowEmbedAll, having type bool
	    ParameterId["ShowEmbedAll"] = "showEmbedAll";
	    // DPI_ShowEntireImage, having type bool
	    ParameterId["ShowEntireImage"] = "showEntireImage";
	    // DPI_ShowExclude, having type bool
	    ParameterId["ShowExclude"] = "showExcludeButton";
	    // DPI_ShowFloatingZoomToolbar, having type bool
	    ParameterId["ShowFloatingZoomToolbar"] = "showFloatingZoomToolbar";
	    // DPI_ShowFormatter, having type bool
	    ParameterId["ShowFormatter"] = "showFormatter";
	    // DPI_ShowFullSchedules, having type bool
	    ParameterId["ShowFullSchedules"] = "showFullSchedules";
	    // DPI_ShowGeographicSearch, having type bool
	    ParameterId["ShowGeographicSearch"] = "showGeographicSearch";
	    // DPI_ShowHiddenFields, having type bool
	    ParameterId["ShowHiddenFields"] = "showHiddenFields";
	    // DPI_ShowHistoryControls, having type bool
	    ParameterId["ShowHistoryControls"] = "showHistoryControls";
	    // DPI_ShowIncludeLocalFiles, having type bool
	    ParameterId["ShowIncludeLocalFiles"] = "showIncludeLocalFiles";
	    // DPI_ShowIncludeOtherOption, having type bool
	    ParameterId["ShowIncludeOtherOption"] = "showIncludeOtherOption";
	    // DPI_ShowIncludeSelections, having type bool
	    ParameterId["ShowIncludeSelections"] = "showIncludeSelections";
	    // DPI_ShowIncrSchedules, having type bool
	    ParameterId["ShowIncrSchedules"] = "showIncrSchedules";
	    // DPI_ShowInnerMostLevel, having type bool
	    ParameterId["ShowInnerMostLevel"] = "showInnermostLevel";
	    // DPI_ShowItalics, having type bool
	    ParameterId["ShowItalics"] = "showItalicsOption";
	    // DPI_ShowLegend, having type bool
	    ParameterId["ShowLegend"] = "showLegend";
	    // DPI_ShowLockedPermissionsIcon, having type bool
	    ParameterId["ShowLockedPermissionsIcon"] = "showLockedPermissionsIcon";
	    // DPI_ShowManageDatasources, having type bool
	    ParameterId["ShowManageDatasources"] = "showManageDatasources";
	    // DPI_ShowMapLegend, having type bool
	    ParameterId["ShowMapLegend"] = "showMapLegend";
	    // DPI_ShowMapScale, having type bool
	    ParameterId["ShowMapScale"] = "showMapScale";
	    // DPI_ShowMappedFilterCols, having type bool
	    ParameterId["ShowMappedFilterCols"] = "showMappedFilterColumns";
	    // DPI_ShowName, having type bool
	    ParameterId["ShowName"] = "showName";
	    // DPI_ShowNone, having type bool
	    ParameterId["ShowNone"] = "showNone";
	    // DPI_ShowPagePlayback, having type bool
	    ParameterId["ShowPagePlayback"] = "showPagePlayback";
	    // DPI_ShowPageReadout, having type bool
	    ParameterId["ShowPageReadout"] = "showPageReadout";
	    // DPI_ShowPageSlider, having type bool
	    ParameterId["ShowPageSlider"] = "showPageSlider";
	    // DPI_ShowParent, having type bool
	    ParameterId["ShowParent"] = "showParent";
	    // DPI_ShowPercentages, having type bool
	    ParameterId["ShowPercentages"] = "showPercentages";
	    // DPI_ShowPredictionIntervals, having type bool
	    ParameterId["ShowPredictionIntervals"] = "showPredictionIntervals";
	    // DPI_ShowPublishedDatasources, having type bool
	    ParameterId["ShowPublishedDatasources"] = "showPublishedDatasources";
	    // DPI_ShowRelDatePicker, having type bool
	    ParameterId["ShowRelDatePicker"] = "showRelDatePicker";
	    // DPI_ShowReplaceDatasource, having type bool
	    ParameterId["ShowReplaceDatasource"] = "showReplaceDatasource";
	    // DPI_ShowSeparator, having type bool
	    ParameterId["ShowSeparator"] = "showSeparator";
	    // DPI_ShowShapeLegend, having type bool
	    ParameterId["ShowShapeLegend"] = "showShapeLegend";
	    // DPI_ShowSizeLegend, having type bool
	    ParameterId["ShowSizeLegend"] = "showSizeLegend";
	    // DPI_ShowShelf, having type bool
	    ParameterId["ShowShelf"] = "showShelf";
	    // DPI_ShowStructure, having type bool
	    ParameterId["ShowStructure"] = "showStructure";
	    // DPI_ShowSyncClientOptions, having type bool
	    ParameterId["ShowSyncClientOptions"] = "showSyncClientOptions";
	    // DPI_ShowTabsAllowed, having type bool
	    ParameterId["ShowTabsAllowed"] = "showTabsAllowed";
	    // DPI_ShowTime, having type bool
	    ParameterId["ShowTime"] = "showTime";
	    // DPI_ShowTitle, having type bool
	    ParameterId["ShowTitle"] = "showTitle";
	    // DPI_ShowTransSlider, having type bool
	    ParameterId["ShowTransSlider"] = "showTransparencySlider";
	    // DPI_ShowUnderline, having type bool
	    ParameterId["ShowUnderline"] = "showUnderlineOption";
	    // DPI_ShowUserThumbnailOptions, having type bool
	    ParameterId["ShowUserThumbnailOptions"] = "showUserThumbnailOptions";
	    // DPI_ShowView, having type bool
	    ParameterId["ShowView"] = "showView";
	    // DPI_ShowViews, having type bool
	    ParameterId["ShowViews"] = "showViews";
	    // DPI_ShowingPageLoadError, having type bool
	    ParameterId["ShowingPageLoadError"] = "showingPageLoadError";
	    // DPI_SupressAliases, having type bool
	    ParameterId["SupressAliases"] = "suspressAliases";
	    // DPI_SupressThousandsSeparator, having type bool
	    ParameterId["SupressThousandsSeparator"] = "supressThousandsSeparator";
	    // DPI_SingleSelectOnly, having type bool
	    ParameterId["SingleSelectOnly"] = "singleSelectOnly";
	    // DPI_SkipIfActive, having type bool
	    ParameterId["SkipIfActive"] = "skipIfActive";
	    // DPI_SkipRefresh, having type bool
	    ParameterId["SkipRefresh"] = "skipRefresh";
	    // DPI_SkipValidation, having type bool
	    ParameterId["SkipValidation"] = "skipValidation";
	    // DPI_Skipped, having type bool
	    ParameterId["Skipped"] = "skipped";
	    // DPI_SortFieldIsInvalid, having type bool
	    ParameterId["SortFieldIsInvalid"] = "sortFieldIsInvalid";
	    // DPI_SortModeIsAuto, having type bool
	    ParameterId["SortModeIsAuto"] = "sortModeIsAuto";
	    // DPI_SplitOnEdgeSnap, having type bool
	    ParameterId["SplitOnEdgeSnap"] = "splitOnEdgeSnap";
	    // DPI_StandardDeviationAllowed, having type bool
	    ParameterId["StandardDeviationAllowed"] = "standardDeviationAllowed";
	    // DPI_State, having type bool
	    ParameterId["State"] = "state";
	    // DPI_StoredProcDisabled, having type bool
	    ParameterId["StoredProcDisabled"] = "storedProcDisabled";
	    // DPI_StoredProcsDropable, having type bool
	    ParameterId["StoredProcsDropable"] = "storedProcsDropable";
	    // DPI_StoryIsEmpty, having type bool
	    ParameterId["StoryIsEmpty"] = "storyIsEmpty";
	    // DPI_StoryPointIsEmpty, having type bool
	    ParameterId["StoryPointIsEmpty"] = "storyPointIsEmpty";
	    // DPI_SuccessfulSave, having type bool
	    ParameterId["SuccessfulSave"] = "successfulSave";
	    // DPI_SupportXAxis, having type bool
	    ParameterId["SupportXAxis"] = "supportXAxis";
	    // DPI_SupportYAxis, having type bool
	    ParameterId["SupportYAxis"] = "supportYAxis";
	    // DPI_SupportsCenterAlignment, having type bool
	    ParameterId["SupportsCenterAlignment"] = "supportsCenterAlignment";
	    // DPI_SupportsDBFilters, having type bool
	    ParameterId["SupportsDBFilters"] = "supportsDatabaseFilters";
	    // DPI_SupportsMultipleValues, having type bool
	    ParameterId["SupportsMultipleValues"] = "supportsMultipleValues";
	    // DPI_SupportsRightAlignment, having type bool
	    ParameterId["SupportsRightAlignment"] = "supportsRightAlignment";
	    // DPI_SupportsTableFilters, having type bool
	    ParameterId["SupportsTableFilters"] = "supportsTableFilters";
	    // DPI_Symmetric, having type bool
	    ParameterId["Symmetric"] = "symmetric";
	    // DPI_SyncAutomaticDrill, having type bool
	    ParameterId["SyncAutomaticDrill"] = "syncAutomaticDrill";
	    // DPI_TabsAllowed, having type bool
	    ParameterId["TabsAllowed"] = "tabsAllowed";
	    // DPI_TextDropdownState, having type bool
	    ParameterId["TextDropdownState"] = "toggleState";
	    // DPI_TitleInline, having type bool
	    ParameterId["TitleInline"] = "titleInline";
	    // DPI_ToggleHighlightStateChanged, having type bool
	    ParameterId["ToggleHighlightStateChanged"] = "toggleHighlight";
	    // DPI_Transformed80Format, having type bool
	    ParameterId["Transformed80Format"] = "oldFormat";
	    // DPI_TrendLineSelected, having type bool
	    ParameterId["TrendLineSelected"] = "trendLineSelected";
	    // DPI_TruncDate, having type bool
	    ParameterId["TruncDate"] = "truncDate";
	    // DPI_TupleSelected, having type bool
	    ParameterId["TupleSelected"] = "tupleSelected";
	    // DPI_UIAutomationDidPageLoad, having type bool
	    ParameterId["UIAutomationDidPageLoad"] = "uiAutomationDidPageLoad";
	    // DPI_UIAutomationIsChecked, having type bool
	    ParameterId["UIAutomationIsChecked"] = "uiAutomationIsChecked";
	    // DPI_UIAutomationIsEnabled, having type bool
	    ParameterId["UIAutomationIsEnabled"] = "uiAutomationIsEnabled";
	    // DPI_UIAutomationIsEventProcessed, having type bool
	    ParameterId["UIAutomationIsEventProcessed"] = "uiAutomationIsEventProcessed";
	    // DPI_UIAutomationIsFocused, having type bool
	    ParameterId["UIAutomationIsFocused"] = "uiAutomationIsFocused";
	    // DPI_UIAutomationIsFound, having type bool
	    ParameterId["UIAutomationIsFound"] = "uiAutomationIsFound";
	    // DPI_UIAutomationIsReadonly, having type bool
	    ParameterId["UIAutomationIsReadonly"] = "uiAutomationIsReadonly";
	    // DPI_UIAutomationIsSelected, having type bool
	    ParameterId["UIAutomationIsSelected"] = "uiAutomationIsSelected";
	    // DPI_UpdateAllPanes, having type bool
	    ParameterId["UpdateAllPanes"] = "updateAllPanes";
	    // DPI_UpdateDSCaptionOnly, having type bool
	    ParameterId["UpdateDSCaptionOnly"] = "updateDsCaptionOnly";
	    // DPI_UpdateModelFromParams, having type bool
	    ParameterId["UpdateModelFromParams"] = "updateModelFromParams";
	    // DPI_UpdateShelves, having type bool
	    ParameterId["UpdateShelves"] = "updateShelves";
	    // DPI_UpdatesUseContext, having type bool
	    ParameterId["UpdatesUseContext"] = "updatesUseContext";
	    // DPI_UpgradeDocumentVersion, having type bool
	    ParameterId["UpgradeDocumentVersion"] = "upgradeDocumentVersion";
	    // DPI_UseAliases, having type bool
	    ParameterId["UseAliases"] = "useAliases";
	    // DPI_UseBlankForNull, having type bool
	    ParameterId["UseBlankForNull"] = "useBlankForNull";
	    // DPI_UseCalculationEditor, having type bool
	    ParameterId["UseCalculationEditor"] = "useCalculationEditor";
	    // DPI_UseCenterValue, having type bool
	    ParameterId["UseCenterValue"] = "useCenterValue";
	    // DPI_UseColor, having type bool
	    ParameterId["UseColor"] = "useColor";
	    // DPI_UseCustomMarkSize, having type bool
	    ParameterId["UseCustomMarkSize"] = "useCustomMarkSize";
	    // DPI_UseDarkIcons, having type bool
	    ParameterId["UseDarkIcons"] = "useDarkIcons";
	    // DPI_UseDataStoreMinfiedNames, having type bool
	    ParameterId["UseDataStoreMinfiedNames"] = "useDatastoreMinNames";
	    // DPI_UseInitialDomainType, having type bool
	    ParameterId["UseInitialDomainType"] = "useInitialDomainType";
	    // DPI_UseEndValue, having type bool
	    ParameterId["UseEndValue"] = "useEndValue";
	    // DPI_UseForOverlayHitTest, having type bool
	    ParameterId["UseForOverlayHitTest"] = "useForOverlayHitTest";
	    // DPI_UseFullColorRange, having type bool
	    ParameterId["UseFullColorRange"] = "useFullColorRange";
	    // DPI_UseFullDomain, having type bool
	    ParameterId["UseFullDomain"] = "useFullDomain";
	    // DPI_UseInlineImages, having type bool
	    ParameterId["UseInlineImages"] = "useInlineImages";
	    // DPI_UseMeasures, having type bool
	    ParameterId["UseMeasures"] = "useMeasures";
	    // DPI_UseNewQuickFilters, having type bool
	    ParameterId["UseNewQuickFilters"] = "useNewQuickFilters";
	    // DPI_UseNotificationReturn, having type bool
	    ParameterId["UseNotificationReturn"] = "useNotificationReturn";
	    // DPI_UseParameters, having type bool
	    ParameterId["UseParameters"] = "useParameters";
	    // DPI_UseSelector, having type bool
	    ParameterId["UseSelector"] = "useSelector";
	    // DPI_UseSignificantDigits, having type bool
	    ParameterId["UseSignificantDigits"] = "useSignificantDigits";
	    // DPI_UseSpecialStrings, having type bool
	    ParameterId["UseSpecialStrings"] = "useSpecialStrings";
	    // DPI_UseStartValue, having type bool
	    ParameterId["UseStartValue"] = "useStartValue";
	    // DPI_UseTabletAsDefaultPreview, having type bool
	    ParameterId["UseTabletAsDefaultPreview"] = "useTabletAsDefaultPreview";
	    // DPI_UseTargetPt, having type bool
	    ParameterId["UseTargetPt"] = "useTargetPoint";
	    // DPI_UseUSLocale, having type bool
	    ParameterId["UseUSLocale"] = "useUsLocale";
	    // DPI_UseYAxis, having type bool
	    ParameterId["UseYAxis"] = "useYAxis";
	    // DPI_Valid, having type bool
	    ParameterId["Valid"] = "valid";
	    // DPI_VizDataV82, having type bool
	    ParameterId["VizDataV82"] = "vizData82";
	    // DPI_WMSConnectionSuccessful, having type bool
	    ParameterId["WMSConnectionSuccessful"] = "wmsConnectionSuccessful";
	    // DPI_WMSShouldUseTiles, having type bool
	    ParameterId["WMSShouldUseTiles"] = "wmsShouldUseTiles";
	    // DPI_WantDomain, having type bool
	    ParameterId["WantDomain"] = "wantDomain";
	    // DPI_WorkbookModified, having type bool
	    ParameterId["WorkbookModified"] = "workbookModified";
	    // DPI_ZoomIn, having type bool
	    ParameterId["ZoomIn"] = "zoomIn";
	    // DPI_ShowMarkLabels, having type bool
	    ParameterId["ShowMarkLabels"] = "showMarkLabels";
	    // DPI_HasDuplicates, having type bool
	    ParameterId["HasDuplicates"] = "hasDuplicates";
	    // DPI_HasUserDefinedIncrement, having type bool
	    ParameterId["HasUserDefinedIncrement"] = "hasUserDefinedIncrement";
	    // DPI_HasUserDefinedMax, having type bool
	    ParameterId["HasUserDefinedMax"] = "hasUserDefinedMax";
	    // DPI_HasUserDefinedMin, having type bool
	    ParameterId["HasUserDefinedMin"] = "hasUserDefinedMin";
	    // DPI_IsDuplicate, having type bool
	    ParameterId["IsDuplicate"] = "isDuplicate";
	    // DPI_IsEditingValue, having type bool
	    ParameterId["IsEditingValue"] = "isEditingValue";
	    // DPI_ShouldRestrictDataType, having type bool
	    ParameterId["ShouldRestrictDataType"] = "restrictDataType";
	    // DPI_EnableIncludeZero, having type bool
	    ParameterId["EnableIncludeZero"] = "enableIncludeZero";
	    // DPI_EnableSyncDualAxes, having type bool
	    ParameterId["EnableSyncDualAxes"] = "enableSynchronizeDualAxes";
	    // DPI_IsTemporal, having type bool
	    ParameterId["IsTemporal"] = "isTemporal";
	    // DPI_ShouldIncludeZero, having type bool
	    ParameterId["ShouldIncludeZero"] = "shouldIncludeZero";
	    // DPI_ShouldReverseAxis, having type bool
	    ParameterId["ShouldReverseAxis"] = "shouldReverseAxis";
	    // DPI_UseAutomaticAxisSubtitle, having type bool
	    ParameterId["UseAutomaticAxisSubtitle"] = "useAutomaticSubtitle";
	    // DPI_UseAutomaticAxisTitle, having type bool
	    ParameterId["UseAutomaticAxisTitle"] = "useAutomaticTitle";
	    // DPI_AllSelected, having type bool
	    ParameterId["AllSelected"] = "allSelected";
	    // DPI_AutoCommit, having type bool
	    ParameterId["AutoCommit"] = "autoCommit";
	    // DPI_CacheOnly, having type bool
	    ParameterId["CacheOnly"] = "cacheOnly";
	    // DPI_IncludeData, having type bool
	    ParameterId["IncludeData"] = "includeData";
	    // DPI_IsPatternExclusive, having type bool
	    ParameterId["IsPatternExclusive"] = "isPatternExclusive";
	    // DPI_IsSearchable, having type bool
	    ParameterId["IsSearchable"] = "isSearchable";
	    // DPI_IsSelectionExclusive, having type bool
	    ParameterId["IsSelectionExclusive"] = "isSelectionExclusive";
	    // DPI_ResetNewFilter, having type bool
	    ParameterId["ResetNewFilter"] = "resetNewFilter";
	    // DPI_UseAllWhenManualEmpty, having type bool
	    ParameterId["UseAllWhenManualEmpty"] = "useAllWhenManualEmpty";
	    // DPI_UseAllWhenPatternEmpty, having type bool
	    ParameterId["UseAllWhenPatternEmpty"] = "useAllWhenPatternEmpty";
	    // DPI_GroupByDrillDown, having type bool
	    ParameterId["GroupByDrillDown"] = "groupByDrillDown";
	    // DPI_GroupByTable, having type bool
	    ParameterId["GroupByTable"] = "groupByTable";
	    // DPI_IncludeGroups, having type bool
	    ParameterId["IncludeGroups"] = "includeGroups";
	    // DPI_IncludePendingState, having type bool
	    ParameterId["IncludePendingState"] = "includePendingState";
	    // DPI_IncludeFieldMenus, having type bool
	    ParameterId["IncludeFieldMenus"] = "includeFieldMenus";
	    // DPI_IncludeFormattedValues, having type bool
	    ParameterId["IncludeFormattedValues"] = "includeFormattedValues";
	    // DPI_IncludeColumnInstances, having type bool
	    ParameterId["IncludeColumnInstances"] = "includeColumnInstances";
	    // DPI_IncludeAdHocCalcs, having type bool
	    ParameterId["IncludeAdHocCalcs"] = "includeAdhocCalcs";
	    // DPI_IncludeHiddenInvalidFields, having type bool
	    ParameterId["IncludeHiddenInvalidFields"] = "includeHiddenInvalidFields";
	    // DPI_IncludeNonExtractedColumns, having type bool
	    ParameterId["IncludeNonExtractedColumns"] = "includeNonExtractedColumns";
	    // DPI_SetDataPreviewCustomFieldOrder, having type bool
	    ParameterId["SetDataPreviewCustomFieldOrder"] = "setDataPreviewCustomFieldOrder";
	    // DPI_CustomSplitAllowSplitFromRight, having type bool
	    ParameterId["CustomSplitAllowSplitFromRight"] = "customSplitAllowSplitFromRight";
	    // DPI_IsChanged, having type bool
	    ParameterId["IsChanged"] = "isChanged";
	    // DPI_ShowFontColorPicker, having type bool
	    ParameterId["ShowFontColorPicker"] = "showFontColorPicker";
	    // DPI_ShowFontFamilyPicker, having type bool
	    ParameterId["ShowFontFamilyPicker"] = "showFontFamilyPicker";
	    // DPI_ShowFontSizePicker, having type bool
	    ParameterId["ShowFontSizePicker"] = "showFontSizePicker";
	    // DPI_ShowFontStyleButtons, having type bool
	    ParameterId["ShowFontStyleButtons"] = "showFontStyleButtons";
	    // DPI_ShowLineForAll, having type bool
	    ParameterId["ShowLineForAll"] = "showLineForAll";
	    // DPI_ShowLineForColumn, having type bool
	    ParameterId["ShowLineForColumn"] = "showLineForColumn";
	    // DPI_ShowLineForRow, having type bool
	    ParameterId["ShowLineForRow"] = "showLineForRow";
	    // DPI_ShowLinePatternPicker, having type bool
	    ParameterId["ShowLinePatternPicker"] = "showLinePatternPicker";
	    // DPI_ShowLineTransparency, having type bool
	    ParameterId["ShowLineTransparency"] = "showLineTransparency";
	    // DPI_ShowLineWidthPicker, having type bool
	    ParameterId["ShowLineWidthPicker"] = "showLineWidthPicker";
	    // DPI_CanBeAuto, having type bool
	    ParameterId["CanBeAuto"] = "canBeAuto";
	    // DPI_CanBeNone, having type bool
	    ParameterId["CanBeNone"] = "canBeNone";
	    // DPI_CanMatchMarkColor, having type bool
	    ParameterId["CanMatchMarkColor"] = "canMatchMarkColor";
	    // DPI_HasOpacity, having type bool
	    ParameterId["HasOpacity"] = "hasOpacity";
	    // DPI_IncludeAllHidden, having type bool
	    ParameterId["IncludeAllHidden"] = "includeAllHidden";
	    // DPI_IncludeCurrent, having type bool
	    ParameterId["IncludeCurrent"] = "includeCurrent";
	    // DPI_IsIncluded, having type bool
	    ParameterId["IsIncluded"] = "isIncluded";
	    // DPI_IsRelative, having type bool
	    ParameterId["IsRelative"] = "isRelative";
	    // DPI_IsSecondaryAllowed, having type bool
	    ParameterId["IsSecondaryAllowed"] = "isSecondaryAllowed";
	    // DPI_NullIfIncomplete, having type bool
	    ParameterId["NullIfIncomplete"] = "nullIfIncomplete";
	    // DPI_IsCalcAssistanceEnabled, having type bool
	    ParameterId["IsCalcAssistanceEnabled"] = "isCalcAssistanceEnabled";
	    // DPI_UseSecondaryCalc, having type bool
	    ParameterId["UseSecondaryCalc"] = "useSecondaryCalc";
	    // DPI_CanLoad, having type bool
	    ParameterId["CanLoad"] = "canLoad";
	    // DPI_DescriptionOnly, having type bool
	    ParameterId["DescriptionOnly"] = "descriptionOnly";
	    // DPI_AreAliasesSupported, having type bool
	    ParameterId["AreAliasesSupported"] = "areAliasesSupported";
	    // DPI_AreRefColumnsSupported, having type bool
	    ParameterId["AreRefColumnsSupported"] = "areRefColumnsSupported";
	    // DPI_IsAggregated, having type bool
	    ParameterId["IsAggregated"] = "isAggregated";
	    // DPI_IsExportSupported, having type bool
	    ParameterId["IsExportSupported"] = "isExportSupported";
	    // DPI_IsMeasureNames, having type bool
	    ParameterId["IsMeasureNames"] = "isMeasureNames";
	    // DPI_IsSummarySupported, having type bool
	    ParameterId["IsSummarySupported"] = "isSummarySupported";
	    // DPI_IsTopNSupported, having type bool
	    ParameterId["IsTopNSupported"] = "isTopNSupported";
	    // DPI_IsUnderlyingSupported, having type bool
	    ParameterId["IsUnderlyingSupported"] = "isUnderlyingSupported";
	    // DPI_OnlyExportSummary, having type bool
	    ParameterId["OnlyExportSummary"] = "onlyExportSummary";
	    // DPI_ShowAllFields, having type bool
	    ParameterId["ShowAllFields"] = "showAllFields";
	    // DPI_UseTablePtrs, having type bool
	    ParameterId["UseTablePtrs"] = "useTablePtrs";
	    // DPI_OnlyFetchSummary, having type bool
	    ParameterId["OnlyFetchSummary"] = "onlyFetchSummary";
	    // DPI_IsDeviceLayoutCustomized, having type bool
	    ParameterId["IsDeviceLayoutCustomized"] = "isDeviceLayoutCustomized";
	    // DPI_IsDeviceSizeCustomized, having type bool
	    ParameterId["IsDeviceSizeCustomized"] = "isDeviceSizeCustomized";
	    // DPI_IsDeviceSupportedByMobileApp, having type bool
	    ParameterId["IsDeviceSupportedByMobileApp"] = "isDeviceSupportedByMobileApp";
	    // DPI_IsPortrait, having type bool
	    ParameterId["IsPortrait"] = "isPortrait";
	    // DPI_IsPortraitByDefault, having type bool
	    ParameterId["IsPortraitByDefault"] = "isPortraitByDefault";
	    // DPI_IsUserCustomFormat, having type bool
	    ParameterId["IsUserCustomFormat"] = "isUserCustomFormat";
	    // DPI_ShouldDisplayRebuildExtractMessage, having type bool
	    ParameterId["ShouldDisplayRebuildExtractMessage"] = "shouldDisplayRebuildExtractMessage";
	    // DPI_SupportsCustomStartOfWeek, having type bool
	    ParameterId["SupportsCustomStartOfWeek"] = "supportsCustomStartOfWeek";
	    // DPI_NeedsConnectPrompt, having type bool
	    ParameterId["NeedsConnectPrompt"] = "needsConnectPrompt";
	    // DPI_NeedsCloseDataSourceErrorPrompt, having type bool
	    ParameterId["NeedsCloseDataSourceErrorPrompt"] = "needsCloseDsErrorPrompt";
	    // DPI_ClearCurrentSelection, having type bool
	    ParameterId["ClearCurrentSelection"] = "clearCurrentSelection";
	    // DPI_HasContains, having type bool
	    ParameterId["HasContains"] = "hasContains";
	    // DPI_HasEndsWith, having type bool
	    ParameterId["HasEndsWith"] = "hasEndsWith";
	    // DPI_HasReplaceSelection, having type bool
	    ParameterId["HasReplaceSelection"] = "hasReplaceSelection";
	    // DPI_HasStartsWith, having type bool
	    ParameterId["HasStartsWith"] = "hasStartsWith";
	    // DPI_IsLeafSelectionOnly, having type bool
	    ParameterId["IsLeafSelectionOnly"] = "isLeafSelectionOnly";
	    // DPI_ReplaceSelection, having type bool
	    ParameterId["ReplaceSelection"] = "replaceSelection";
	    // DPI_IsColorPaletteCustomized, having type bool
	    ParameterId["IsColorPaletteCustomized"] = "isColorPaletteCustomized";
	    // DPI_ReversePaletteOrder, having type bool
	    ParameterId["ReversePaletteOrder"] = "reversePaletteOrder";
	    // DPI_TriedToConnect, having type bool
	    ParameterId["TriedToConnect"] = "triedToConnect";
	    // DPI_ScaleMarksInAxisUnits, having type bool
	    ParameterId["ScaleMarksInAxisUnits"] = "scaleMarksInAxisUnits";
	    // DPI_ShowMarkSizingOptions, having type bool
	    ParameterId["ShowMarkSizingOptions"] = "showMarkSizingOptions";
	    // DPI_UseSizeFieldCaption, having type bool
	    ParameterId["UseSizeFieldCaption"] = "useSizeFieldCaption";
	    // DPI_IsLicensedAndRegistered, having type bool
	    ParameterId["IsLicensedAndRegistered"] = "isLicensedAndRegistered";
	    // DPI_SetNewDatasourceActive, having type bool
	    ParameterId["SetNewDatasourceActive"] = "setNewDatasourceActive";
	    // DPI_AllowCustomLabel, having type bool
	    ParameterId["AllowCustomLabel"] = "allowCustomLabel";
	    // DPI_IsMostRecentModeValid, having type bool
	    ParameterId["IsMostRecentModeValid"] = "isMostRecentModeValid";
	    // DPI_MustShowLabels, having type bool
	    ParameterId["MustShowLabels"] = "mustShowLabels";
	    // DPI_ShowRunningOrderLabels, having type bool
	    ParameterId["ShowRunningOrderLabels"] = "showRunningOrderLabels";
	    // DPI_IsDroppedFile, having type bool
	    ParameterId["IsDroppedFile"] = "isDroppedFile";
	    // DPI_IsInitialized, having type bool
	    ParameterId["IsInitialized"] = "isInitialized";
	    // DPI_IncludeDashboard, having type bool
	    ParameterId["IncludeDashboard"] = "includeDashboard";
	    // DPI_ChildrenCanResize, having type bool
	    ParameterId["ChildrenCanResize"] = "childrenCanResize";
	    // DPI_BoolMap, having type Dictionary(of bool)
	    ParameterId["BoolMap"] = "boolMap";
	    // DPI_CheckedMenuItems, having type bool[]
	    ParameterId["CheckedMenuItems"] = "checkedMenuItems";
	    // DPI_IncludedSheetValues, having type bool[]
	    ParameterId["IncludedSheetValues"] = "includedSheetValues";
	    // DPI_SortOrderVector, having type bool[]
	    ParameterId["SortOrderVector"] = "sortOrderVector";
	    // DPI_ActionName, having type string
	    ParameterId["ActionName"] = "actionName";
	    // DPI_ActionSourceText, having type string
	    ParameterId["ActionSourceText"] = "actionSourceText";
	    // DPI_ActionTypeAsString, having type string
	    ParameterId["ActionTypeAsString"] = "actionTypeAsString";
	    // DPI_ActiveTab, having type string
	    ParameterId["ActiveTab"] = "active_tab";
	    // DPI_AddInId, having type string
	    ParameterId["AddInId"] = "addInId";
	    // DPI_AddInstanceId, having type string
	    ParameterId["AddInstanceId"] = "addInInstanceId";
	    // DPI_AddInName, having type string
	    ParameterId["AddInName"] = "addInName";
	    // DPI_AddInLocale, having type string
	    ParameterId["AddInLocale"] = "addInLocale";
	    // DPI_AddInLanguage, having type string
	    ParameterId["AddInLanguage"] = "addInLanguage";
	    // DPI_APIVersion, having type string
	    ParameterId["APIVersion"] = "apiVersion";
	    // DPI_Alias, having type string
	    ParameterId["Alias"] = "alias";
	    // DPI_AnchorDate, having type string
	    ParameterId["AnchorDate"] = "anchorDate";
	    // DPI_AnnotationRes, having type string
	    ParameterId["AnnotationRes"] = "annotationRes";
	    // DPI_ReadId, having type string
	    ParameterId["ReadId"] = "readId";
	    // DPI_AnnotationText, having type string
	    ParameterId["AnnotationText"] = "annotationText";
	    // DPI_ArchiveDirectory, having type string
	    ParameterId["ArchiveDirectory"] = "archiveDirectory";
	    // DPI_ArchiveFullPath, having type string
	    ParameterId["ArchiveFullPath"] = "archiveFullPath";
	    // DPI_AtTheLevelInvalidFieldCaption, having type string
	    ParameterId["AtTheLevelInvalidFieldCaption"] = "atTheLevelInvalidFieldCaption";
	    // DPI_AutoCompleteSubstring, having type string
	    ParameterId["AutoCompleteSubstring"] = "acSubstring";
	    // DPI_AutosaveFileId, having type string
	    ParameterId["AutosaveFileId"] = "autosaveFileId";
	    // DPI_AutosaveTimerInterval, having type string
	    ParameterId["AutosaveTimerInterval"] = "autosaveTimerInterval";
	    // DPI_BaseColumnCaption, having type string
	    ParameterId["BaseColumnCaption"] = "baseColumnCaption";
	    // DPI_ClearButtonText, having type string
	    ParameterId["ClearButtonText"] = "clearButtonText";
	    // DPI_ColorPaletteId, having type string
	    ParameterId["ColorPaletteId"] = "colorPaletteId";
	    // DPI_ColorPaletteName, having type string
	    ParameterId["ColorPaletteName"] = "colorPaletteName";
	    // DPI_ColorSwatch, having type string
	    ParameterId["ColorSwatch"] = "colorSwatch";
	    // DPI_CommandName, having type string
	    ParameterId["CommandName"] = "commandName";
	    // DPI_ConfidenceLevelValue, having type string
	    ParameterId["ConfidenceLevelValue"] = "confidenceLevelValue";
	    // DPI_CountDistinctStr, having type string
	    ParameterId["CountDistinctStr"] = "countDistinctStr";
	    // DPI_CSSMargin, having type string
	    ParameterId["CSSMargin"] = "cssMargin";
	    // DPI_CSSWhitespace, having type string
	    ParameterId["CSSWhitespace"] = "cssWhitespace";
	    // DPI_DBPassword, having type string
	    ParameterId["DBPassword"] = "dbPassword";
	    // DPI_DBUsername, having type string
	    ParameterId["DBUsername"] = "dbUsername";
	    // DPI_DataAlertConditionText, having type string
	    ParameterId["DataAlertConditionText"] = "dataAlertConditionText";
	    // DPI_DataAlertMeasureText, having type string
	    ParameterId["DataAlertMeasureText"] = "dataAlertMeasureText";
	    // DPI_DataAlertSpecSerializedText, having type string
	    ParameterId["DataAlertSpecSerializedText"] = "dataAlertSpecSerializedText";
	    // DPI_DataAlertDefaultSubject, having type string
	    ParameterId["DataAlertDefaultSubject"] = "dataAlertDefaultSubject";
	    // DPI_DataAlertThresholdText, having type string
	    ParameterId["DataAlertThresholdText"] = "dataAlertThresholdText";
	    // DPI_DataGridSortColumnName, having type string
	    ParameterId["DataGridSortColumnName"] = "datagridSortColumnName";
	    // DPI_DataServerConnectionError, having type string
	    ParameterId["DataServerConnectionError"] = "dataServerConnectionError";
	    // DPI_DatabaseFilter, having type string
	    ParameterId["DatabaseFilter"] = "databaseFilter";
	    // DPI_DatabaseFilterPrompt, having type string
	    ParameterId["DatabaseFilterPrompt"] = "databaseFilterPrompt";
	    // DPI_DatasourceRanking, having type string
	    ParameterId["DatasourceRanking"] = "datasourceRanking";
	    // DPI_DatasourceUrl, having type string
	    ParameterId["DatasourceUrl"] = "datasourceUrl";
	    // DPI_DatasourceUsername, having type string
	    ParameterId["DatasourceUsername"] = "datasourceUsername";
	    // DPI_DateFormat, having type string
	    ParameterId["DateFormat"] = "dateFormat";
	    // DPI_DatePart, having type string
	    ParameterId["DatePart"] = "datePart";
	    // DPI_DatePartAbbrev, having type string
	    ParameterId["DatePartAbbrev"] = "datePartAbbrev";
	    // DPI_DefaultHierarchyName, having type string
	    ParameterId["DefaultHierarchyName"] = "defaultHierarchyName";
	    // DPI_Delimiter, having type string
	    ParameterId["Delimiter"] = "delimiter";
	    // DPI_DeviceName, having type string
	    ParameterId["DeviceName"] = "deviceName";
	    // DPI_DeviceType, having type string
	    ParameterId["DeviceType"] = "deviceType";
	    // DPI_DisplayPath, having type string
	    ParameterId["DisplayPath"] = "displayPath";
	    // DPI_DistributionValueString, having type string
	    ParameterId["DistributionValueString"] = "distributionValueString";
	    // DPI_DrillPathName, having type string
	    ParameterId["DrillPathName"] = "drillPathName";
	    // DPI_EmbeddedTitle, having type string
	    ParameterId["EmbeddedTitle"] = "embeddedTitle";
	    // DPI_EnterValueText, having type string
	    ParameterId["EnterValueText"] = "enterValueText";
	    // DPI_EscapeString, having type string
	    ParameterId["EscapeString"] = "escapeString";
	    // DPI_ExtSvcConfigHost, having type string
	    ParameterId["ExtSvcConfigHost"] = "extSvcConfigHost";
	    // DPI_ExtSvcConfigPassword, having type string
	    ParameterId["ExtSvcConfigPassword"] = "extSvcConfigPassword";
	    // DPI_ExtSvcConfigPort, having type string
	    ParameterId["ExtSvcConfigPort"] = "extSvcConfigPort";
	    // DPI_ExtSvcConfigConnectTimeout, having type string
	    ParameterId["ExtSvcConfigConnectTimeout"] = "extSvcConnectTimeout";
	    // DPI_ExtSvcConfigPrevHost, having type string
	    ParameterId["ExtSvcConfigPrevHost"] = "extSvcConfigPrevHost";
	    // DPI_ExtSvcConfigUsername, having type string
	    ParameterId["ExtSvcConfigUsername"] = "extSvcConfigUsername";
	    // DPI_ExtractUpdateTime, having type string
	    ParameterId["ExtractUpdateTime"] = "extractUpdateTime";
	    // DPI_FieldFolderName, having type string
	    ParameterId["FieldFolderName"] = "fieldFolderName";
	    // DPI_FieldNameString, having type string
	    ParameterId["FieldNameString"] = "fieldName";
	    // DPI_FilterSearchDomain, having type string
	    ParameterId["FilterSearchDomain"] = "filterSearchDomain";
	    // DPI_FilterSpec, having type string
	    ParameterId["FilterSpec"] = "filterSpec";
	    // DPI_FirstValue, having type string
	    ParameterId["FirstValue"] = "firstValue";
	    // DPI_FolderName, having type string
	    ParameterId["FolderName"] = "folderName";
	    // DPI_FontName, having type string
	    ParameterId["FontName"] = "fontName";
	    // DPI_FormatString, having type string
	    ParameterId["FormatString"] = "formatString";
	    // DPI_FormattedIncrementValue, having type string
	    ParameterId["FormattedIncrementValue"] = "formattedIncrement";
	    // DPI_FormattedMaxValue, having type string
	    ParameterId["FormattedMaxValue"] = "formattedMax";
	    // DPI_FormattedMinValue, having type string
	    ParameterId["FormattedMinValue"] = "formattedMin";
	    // DPI_FormattedValue, having type string
	    ParameterId["FormattedValue"] = "formattedValue";
	    // DPI_PairedFormattedValue, having type string
	    ParameterId["PairedFormattedValue"] = "pairedFormattedValue";
	    // DPI_FrameAttributes, having type string
	    ParameterId["FrameAttributes"] = "frameAttr";
	    // DPI_GUID, having type string
	    ParameterId["GUID"] = "guid";
	    // DPI_GeographicSearchCandidateDisplayName, having type string
	    ParameterId["GeographicSearchCandidateDisplayName"] = "geographicSearchCandidateDisplayName";
	    // DPI_GeographicSearchCandidateParentName, having type string
	    ParameterId["GeographicSearchCandidateParentName"] = "geographicSearchCandidateParentName";
	    // DPI_GeographicSearchCandidateType, having type string
	    ParameterId["GeographicSearchCandidateType"] = "geographicSearchCandidateType";
	    // DPI_GeographicSearchLocale, having type string
	    ParameterId["GeographicSearchLocale"] = "geographicSearchLocale";
	    // DPI_GeographicSearchQueryString, having type string
	    ParameterId["GeographicSearchQueryString"] = "geographicSearchSearchString";
	    // DPI_GeographicSearchUILocale, having type string
	    ParameterId["GeographicSearchUILocale"] = "geographicSearchUilocale";
	    // DPI_IconRes, having type string
	    ParameterId["IconRes"] = "iconRes";
	    // DPI_ImageHash, having type string
	    ParameterId["ImageHash"] = "imageHash";
	    // DPI_ImageName, having type string
	    ParameterId["ImageName"] = "imageName";
	    // DPI_ImageRes, having type string
	    ParameterId["ImageRes"] = "imageRes";
	    // DPI_IncludesSiblingsPrompt, having type string
	    ParameterId["IncludesSiblingsPrompt"] = "includesSiblingsPrompt";
	    // DPI_IncludesSubfoldersPrompt, having type string
	    ParameterId["IncludesSubfoldersPrompt"] = "includesSubfoldersPrompt";
	    // DPI_IncrementalScheduleIDs, having type string
	    ParameterId["IncrementalScheduleIDs"] = "incrementalScheduleIds";
	    // DPI_InvariantKeyword, having type string
	    ParameterId["InvariantKeyword"] = "invariantKeyword";
	    // DPI_JoinOperator, having type string
	    ParameterId["JoinOperator"] = "joinOperator";
	    // DPI_JoinExpression, having type string
	    ParameterId["JoinExpression"] = "joinExpression";
	    // DPI_Label, having type string
	    ParameterId["Label"] = "label";
	    // DPI_PairedLabel, having type string
	    ParameterId["PairedLabel"] = "pairedLabel";
	    // DPI_LayoutID, having type string
	    ParameterId["LayoutID"] = "layoutId";
	    // DPI_LeftJoinExpression, having type string
	    ParameterId["LeftJoinExpression"] = "leftJoinExpression";
	    // DPI_LimitCountExpression, having type string
	    ParameterId["LimitCountExpression"] = "limitCountExpression";
	    // DPI_LinkTarget, having type string
	    ParameterId["LinkTarget"] = "linkTarget";
	    // DPI_Locale, having type string
	    ParameterId["Locale"] = "locale";
	    // DPI_LocalizedKeyword, having type string
	    ParameterId["LocalizedKeyword"] = "localizedKeyword";
	    // DPI_MapBoxGLStyleId, having type string
	    ParameterId["MapBoxGLStyleId"] = "mapboxGlStyleId";
	    // DPI_MapBoxStyleUrl, having type string
	    ParameterId["MapBoxStyleUrl"] = "mapboxStyleUrl";
	    // DPI_MapBoxUsername, having type string
	    ParameterId["MapBoxUsername"] = "mapboxUsername";
	    // DPI_MapScaleReadoutString, having type string
	    ParameterId["MapScaleReadoutString"] = "mapScaleReadoutString";
	    // DPI_MapScaleTooltipString, having type string
	    ParameterId["MapScaleTooltipString"] = "mapScaleTooltipString";
	    // DPI_MapSourceName, having type string
	    ParameterId["MapSourceName"] = "mapSourceName";
	    // DPI_MaxLabel, having type string
	    ParameterId["MaxLabel"] = "maxLabel";
	    // DPI_MinLabel, having type string
	    ParameterId["MinLabel"] = "minLabel";
	    // DPI_ModelDescriptionParagraph, having type string
	    ParameterId["ModelDescriptionParagraph"] = "modelDescriptionParagraph";
	    // DPI_NameTemplate, having type string
	    ParameterId["NameTemplate"] = "nameTemplate";
	    // DPI_NewDrillPath, having type string
	    ParameterId["NewDrillPath"] = "newDrillPath";
	    // DPI_NewFieldFolderName, having type string
	    ParameterId["NewFieldFolderName"] = "newFieldFolderName";
	    // DPI_NewTableAlias, having type string
	    ParameterId["NewTableAlias"] = "newTableAlias";
	    // DPI_NonFormattedValue, having type string
	    ParameterId["NonFormattedValue"] = "unformattedValue";
	    // DPI_OAuthUserName, having type string
	    ParameterId["OAuthUserName"] = "oauthUsername";
	    // DPI_ObjectName, having type string
	    ParameterId["ObjectName"] = "objectName";
	    // DPI_ObjectOverrideMessage, having type string
	    ParameterId["ObjectOverrideMessage"] = "objectOverrideMessage";
	    // DPI_OldTableAlias, having type string
	    ParameterId["OldTableAlias"] = "oldTableAlias";
	    // DPI_OperatingSystem, having type string
	    ParameterId["OperatingSystem"] = "operatingSystem";
	    // DPI_OriginalFilePath, having type string
	    ParameterId["OriginalFilePath"] = "originalFilePath";
	    // DPI_OriginalFileVersion, having type string
	    ParameterId["OriginalFileVersion"] = "originalFileVersion";
	    // DPI_PaneDescriptorKey, having type string
	    ParameterId["PaneDescriptorKey"] = "paneDescrKey";
	    // DPI_ParentName, having type string
	    ParameterId["ParentName"] = "parentName";
	    // DPI_ParentTable, having type string
	    ParameterId["ParentTable"] = "parentTable";
	    // DPI_PatternFilterString, having type string
	    ParameterId["PatternFilterString"] = "patternFilterString";
	    // DPI_PendingCalcName, having type string
	    ParameterId["PendingCalcName"] = "pendingCalcName";
	    // DPI_PercentilesString, having type string
	    ParameterId["PercentilesString"] = "percentilesString";
	    // DPI_ProjectName, having type string
	    ParameterId["ProjectName"] = "projectName";
	    // DPI_PropertyName, having type string
	    ParameterId["PropertyName"] = "propertyName";
	    // DPI_QuickFilterTitleCaption, having type string
	    ParameterId["QuickFilterTitleCaption"] = "quickFilterTitleCaption";
	    // DPI_RangeDiffStr, having type string
	    ParameterId["RangeDiffStr"] = "diffValue";
	    // DPI_RangeMaxStr, having type string
	    ParameterId["RangeMaxStr"] = "maxValue";
	    // DPI_RangeMinStr, having type string
	    ParameterId["RangeMinStr"] = "minValue";
	    // DPI_RecoveredFilePath, having type string
	    ParameterId["RecoveredFilePath"] = "recoveredFilePath";
	    // DPI_ReferenceLineSpecificationId, having type string
	    ParameterId["ReferenceLineSpecificationId"] = "referenceLineId";
	    // DPI_ReplaceFieldPrompt, having type string
	    ParameterId["ReplaceFieldPrompt"] = "replaceFieldPrompt";
	    // DPI_RightJoinExpression, having type string
	    ParameterId["RightJoinExpression"] = "rightJoinExpression";
	    // DPI_RootPath, having type string
	    ParameterId["RootPath"] = "rootPath";
	    // DPI_RuntimeFinalDatastore, having type string
	    ParameterId["RuntimeFinalDatastore"] = "runtimeFinalDatastore";
	    // DPI_RuntimeInitialDatastore, having type string
	    ParameterId["RuntimeInitialDatastore"] = "runtimeInitialDatastore";
	    // DPI_RuntimeVTL, having type string
	    ParameterId["RuntimeVTL"] = "runtimeVtl";
	    // DPI_SampleDataString, having type string
	    ParameterId["SampleDataString"] = "sampleData";
	    // DPI_ScheduleIDs, having type string
	    ParameterId["ScheduleIDs"] = "scheduleIds";
	    // DPI_SchemaFieldIconResource, having type string
	    ParameterId["SchemaFieldIconResource"] = "fieldIconRes";
	    // DPI_ScreenName, having type string
	    ParameterId["ScreenName"] = "screenName";
	    // DPI_ScriptCommand, having type string
	    ParameterId["ScriptCommand"] = "command";
	    // DPI_SecondValue, having type string
	    ParameterId["SecondValue"] = "secondValue";
	    // DPI_SelectedValue, having type string
	    ParameterId["SelectedValue"] = "selectedValue";
	    // DPI_ShapeName, having type string
	    ParameterId["ShapeName"] = "shapeName";
	    // DPI_SheetId, having type string
	    ParameterId["SheetId"] = "sheetId";
	    // DPI_ShowDataTable, having type string
	    ParameterId["ShowDataTable"] = "showDataTable";
	    // DPI_SimpleCommand, having type string
	    ParameterId["SimpleCommand"] = "simpleCommand";
	    // DPI_SortModeCaption, having type string
	    ParameterId["SortModeCaption"] = "sortModeCaption";
	    // DPI_SourceName, having type string
	    ParameterId["SourceName"] = "sourceName";
	    // DPI_SpecialValueText, having type string
	    ParameterId["SpecialValueText"] = "specialValueText";
	    // DPI_StaticImage, having type string
	    ParameterId["StaticImage"] = "staticImage";
	    // DPI_StoryPointBase, having type string
	    ParameterId["StoryPointBase"] = "storyPointBase";
	    // DPI_StoryPointCaption, having type string
	    ParameterId["StoryPointCaption"] = "storyPointCaption";
	    // DPI_Storyboard, having type string
	    ParameterId["Storyboard"] = "storyboard";
	    // DPI_StyledLabel, having type string
	    ParameterId["StyledLabel"] = "styledLabel";
	    // DPI_SummaryCaption, having type string
	    ParameterId["SummaryCaption"] = "summaryCaption";
	    // DPI_SummaryField, having type string
	    ParameterId["SummaryField"] = "summaryField";
	    // DPI_TableauVersion, having type string
	    ParameterId["TableauVersion"] = "tableauVersion";
	    // DPI_TableFilter, having type string
	    ParameterId["TableFilter"] = "tableFilter";
	    // DPI_TableFilterPrompt, having type string
	    ParameterId["TableFilterPrompt"] = "tableFilterPrompt";
	    // DPI_TagsLabel, having type string
	    ParameterId["TagsLabel"] = "tagsLabel";
	    // DPI_Target, having type string
	    ParameterId["Target"] = "target";
	    // DPI_ThumbnailGroup, having type string
	    ParameterId["ThumbnailGroup"] = "thumbnailGroup";
	    // DPI_ThumbnailUser, having type string
	    ParameterId["ThumbnailUser"] = "thumbnailUser";
	    // DPI_TimeFormat, having type string
	    ParameterId["TimeFormat"] = "timeFormat";
	    // DPI_TrendLineErrorString, having type string
	    ParameterId["TrendLineErrorString"] = "trendLineErrorString";
	    // DPI_TrendLineModelFormula, having type string
	    ParameterId["TrendLineModelFormula"] = "trendLineModelFormula";
	    // DPI_URLString, having type string
	    ParameterId["URLString"] = "urlString";
	    // DPI_URLTest, having type string
	    ParameterId["URLTest"] = "urlTest";
	    // DPI_ValidationMessage, having type string
	    ParameterId["ValidationMessage"] = "validationMessage";
	    // DPI_ValueStr, having type string
	    ParameterId["ValueStr"] = "valueString";
	    // DPI_VerifiedNonFormattedValue, having type string
	    ParameterId["VerifiedNonFormattedValue"] = "verifiedUnformattedValue";
	    // DPI_WorkbookFullPath, having type string
	    ParameterId["WorkbookFullPath"] = "workbookFullPath";
	    // DPI_WindowTitle, having type string
	    ParameterId["WindowTitle"] = "windowTitle";
	    // DPI_ZoneName, having type string
	    ParameterId["ZoneName"] = "zoneName";
	    // DPI_ZoneParam, having type string
	    ParameterId["ZoneParam"] = "zoneParam";
	    // DPI_DataAlertErrorText, having type string
	    ParameterId["DataAlertErrorText"] = "dataAlertErrorText";
	    // DPI_ExtractTempDirectory, having type string
	    ParameterId["ExtractTempDirectory"] = "extractTempDir";
	    // DPI_DSSubClass, having type string
	    ParameterId["DSSubClass"] = "dsSubClass";
	    // DPI_DbgCommandLine, having type string
	    ParameterId["DbgCommandLine"] = "debugCommandLine";
	    // DPI_DbgLogPath, having type string
	    ParameterId["DbgLogPath"] = "debugLogPath";
	    // DPI_DbgOSVersion, having type string
	    ParameterId["DbgOSVersion"] = "debugOsVersion";
	    // DPI_DbgUserName, having type string
	    ParameterId["DbgUserName"] = "debugUsername";
	    // DPI_ErrorMsg, having type string
	    ParameterId["ErrorMsg"] = "errorMessage";
	    // DPI_ErrorStr, having type string
	    ParameterId["ErrorStr"] = "errorString";
	    // DPI_EventMessage, having type string
	    ParameterId["EventMessage"] = "eventMessage";
	    // DPI_EventTimestamp, having type string
	    ParameterId["EventTimestamp"] = "eventTimestamp";
	    // DPI_ExtractDeltaPath, having type string
	    ParameterId["ExtractDeltaPath"] = "extractDeltaPath";
	    // DPI_ExtractPath, having type string
	    ParameterId["ExtractPath"] = "extractPath";
	    // DPI_ExtractSuggestedPath, having type string
	    ParameterId["ExtractSuggestedPath"] = "suggestedExtractPath";
	    // DPI_ExtractTaskSummary, having type string
	    ParameterId["ExtractTaskSummary"] = "extractTaskSummary";
	    // DPI_FactorsString, having type string
	    ParameterId["FactorsString"] = "factorsStr";
	    // DPI_FormattedFamilyName, having type string
	    ParameterId["FormattedFamilyName"] = "formattedFamilyName";
	    // DPI_FunctionSignature, having type string
	    ParameterId["FunctionSignature"] = "funcSig";
	    // DPI_FunctionTooltip, having type string
	    ParameterId["FunctionTooltip"] = "funcTooltip";
	    // DPI_HelpContents, having type string
	    ParameterId["HelpContents"] = "helpContents";
	    // DPI_MapAttributionText, having type string
	    ParameterId["MapAttributionText"] = "mapAttributionText";
	    // DPI_MapAttributionTextSize, having type string
	    ParameterId["MapAttributionTextSize"] = "mapAttributionTextSize";
	    // DPI_MapAttributionUrl, having type string
	    ParameterId["MapAttributionUrl"] = "mapAttributionUrl";
	    // DPI_MapBoxErrorMessage, having type string
	    ParameterId["MapBoxErrorMessage"] = "mapboxErrorMessage";
	    // DPI_MapBoxOldStyleName, having type string
	    ParameterId["MapBoxOldStyleName"] = "mapboxOldStyleName";
	    // DPI_MapBoxSelectedStyle, having type string
	    ParameterId["MapBoxSelectedStyle"] = "mapboxSelectedStyle";
	    // DPI_MapBoxStyleName, having type string
	    ParameterId["MapBoxStyleName"] = "mapboxStyleName";
	    // DPI_MapLayerRequest, having type string
	    ParameterId["MapLayerRequest"] = "mapLayerRequest";
	    // DPI_MapServerKey, having type string
	    ParameterId["MapServerKey"] = "mapServerKey";
	    // DPI_MapTileServer, having type string
	    ParameterId["MapTileServer"] = "mapTileServer";
	    // DPI_MapTileUrl, having type string
	    ParameterId["MapTileUrl"] = "mapTileUrl";
	    // DPI_PercentagesString, having type string
	    ParameterId["PercentagesString"] = "percentagesStr";
	    // DPI_PublishErrorMessage, having type string
	    ParameterId["PublishErrorMessage"] = "publishErrorMessage";
	    // DPI_TdePath, having type string
	    ParameterId["TdePath"] = "tdePath";
	    // DPI_UIAutomationComponentName, having type string
	    ParameterId["UIAutomationComponentName"] = "uiAutomationComponentName";
	    // DPI_UIAutomationEndTime, having type string
	    ParameterId["UIAutomationEndTime"] = "uiAutomationEndTime";
	    // DPI_UIAutomationName, having type string
	    ParameterId["UIAutomationName"] = "uiAutomationName";
	    // DPI_UIAutomationStartTime, having type string
	    ParameterId["UIAutomationStartTime"] = "uiAutomationStartTime";
	    // DPI_UIAutomationValue, having type string
	    ParameterId["UIAutomationValue"] = "uiAutomationValue";
	    // DPI_WMSConnectionName, having type string
	    ParameterId["WMSConnectionName"] = "wmsConnectionName";
	    // DPI_WMSOldConnectionName, having type string
	    ParameterId["WMSOldConnectionName"] = "wmsOldConnectionName";
	    // DPI_WMSServerUrl, having type string
	    ParameterId["WMSServerUrl"] = "wmsServerUrl";
	    // DPI_AboutBuildVersion, having type string
	    ParameterId["AboutBuildVersion"] = "aboutBuildVersion";
	    // DPI_ActionFields, having type string
	    ParameterId["ActionFields"] = "actionFields";
	    // DPI_AddVariableLabel, having type string
	    ParameterId["AddVariableLabel"] = "addVariableLabel";
	    // DPI_AddVariableTooltip, having type string
	    ParameterId["AddVariableTooltip"] = "addVariableTooltip";
	    // DPI_AllowedDataSourcesByName, having type string
	    ParameterId["AllowedDataSourcesByName"] = "allowedDataSourcesByName";
	    // DPI_AppAboutVersion, having type string
	    ParameterId["AppAboutVersion"] = "appAboutVersion";
	    // DPI_AppBuildBranchName, having type string
	    ParameterId["AppBuildBranchName"] = "appBuildBranchName";
	    // DPI_AppBuildVersion, having type string
	    ParameterId["AppBuildVersion"] = "appBuildVersion";
	    // DPI_AppExternalVersion, having type string
	    ParameterId["AppExternalVersion"] = "appExternalVersion";
	    // DPI_AppName, having type string
	    ParameterId["AppName"] = "appName";
	    // DPI_AppProductVersion, having type string
	    ParameterId["AppProductVersion"] = "appProductVersion";
	    // DPI_OriginalVersion, having type string
	    ParameterId["OriginalVersion"] = "originalVersion";
	    // DPI_AtTheLevelSpecialCaption, having type string
	    ParameterId["AtTheLevelSpecialCaption"] = "atTheLevelSpecialCaption";
	    // DPI_AutoCompleteCalc, having type string
	    ParameterId["AutoCompleteCalc"] = "acCalc";
	    // DPI_CSVPath, having type string
	    ParameterId["CSVPath"] = "csvPath";
	    // DPI_CommandNamespace, having type string
	    ParameterId["CommandNamespace"] = "commandNamespace";
	    // DPI_Condition, having type string
	    ParameterId["Condition"] = "condition";
	    // DPI_ConditionSummary, having type string
	    ParameterId["ConditionSummary"] = "conditionSummary";
	    // DPI_ConfirmationMsg, having type string
	    ParameterId["ConfirmationMsg"] = "confirmationMsg";
	    // DPI_DashboardTypeText, having type string
	    ParameterId["DashboardTypeText"] = "dashboardType";
	    // DPI_DataserverPublicAddress, having type string
	    ParameterId["DataserverPublicAddress"] = "dataserverPublicAddress";
	    // DPI_DatasourceFileName, having type string
	    ParameterId["DatasourceFileName"] = "datasourceFileName";
	    // DPI_DecimalMark, having type string
	    ParameterId["DecimalMark"] = "decimalMark";
	    // DPI_DeleteVariableTooltip, having type string
	    ParameterId["DeleteVariableTooltip"] = "deleteVariableTooltip";
	    // DPI_DialogTitle, having type string
	    ParameterId["DialogTitle"] = "dialogTitle";
	    // DPI_DisplayValue, having type string
	    ParameterId["DisplayValue"] = "displayValue";
	    // DPI_TooltipValue, having type string
	    ParameterId["TooltipValue"] = "tooltipValue";
	    // DPI_DstPath, having type string
	    ParameterId["DstPath"] = "dstPath";
	    // DPI_EditWidgetHeader, having type string
	    ParameterId["EditWidgetHeader"] = "editWidgetHeader";
	    // DPI_EditWidgetInstruction, having type string
	    ParameterId["EditWidgetInstruction"] = "editWidgetInstruction";
	    // DPI_EndSelectionCaption, having type string
	    ParameterId["EndSelectionCaption"] = "endSelectionCaption";
	    // DPI_FilterSearchQuery, having type string
	    ParameterId["FilterSearchQuery"] = "filterSearchQuery";
	    // DPI_FromLabel, having type string
	    ParameterId["FromLabel"] = "fromLabel";
	    // DPI_FunctionHelp, having type string
	    ParameterId["FunctionHelp"] = "functionHelp";
	    // DPI_Instructions, having type string
	    ParameterId["Instructions"] = "instructions";
	    // DPI_LargeUnitDisplay, having type string
	    ParameterId["LargeUnitDisplay"] = "largeUnitDisplay";
	    // DPI_Limit, having type string
	    ParameterId["Limit"] = "limit";
	    // DPI_ListViewNameLabel, having type string
	    ParameterId["ListViewNameLabel"] = "listViewNameLabel";
	    // DPI_ListViewValueLabel, having type string
	    ParameterId["ListViewValueLabel"] = "listViewValueLabel";
	    // DPI_MapScaleReadoutUnit, having type string
	    ParameterId["MapScaleReadoutUnit"] = "mapScaleReadoutUnit";
	    // DPI_MeasureDimension, having type string
	    ParameterId["MeasureDimension"] = "measuresDimension";
	    // DPI_MimeType, having type string
	    ParameterId["MimeType"] = "mimeType";
	    // DPI_MinimizedName, having type string
	    ParameterId["MinimizedName"] = "minName";
	    // DPI_NotificationMsg, having type string
	    ParameterId["NotificationMsg"] = "notificationMsg";
	    // DPI_OperationName, having type string
	    ParameterId["OperationName"] = "operationName";
	    // DPI_PageTitle, having type string
	    ParameterId["PageTitle"] = "pageTitle";
	    // DPI_PatternSummary, having type string
	    ParameterId["PatternSummary"] = "patternSummary";
	    // DPI_ReferenceLineId, having type string
	    ParameterId["ReferenceLineId"] = "refLineId";
	    // DPI_ReferenceLinePairedId, having type string
	    ParameterId["ReferenceLinePairedId"] = "refLinePairedId";
	    // DPI_ReplaceText, having type string
	    ParameterId["ReplaceText"] = "replaceText";
	    // DPI_RequiredVariableMessage, having type string
	    ParameterId["RequiredVariableMessage"] = "requiredVariableMessage";
	    // DPI_RestartEverySpecialCaption, having type string
	    ParameterId["RestartEverySpecialCaption"] = "restartEverySpecialCaption";
	    // DPI_Root, having type string
	    ParameterId["Root"] = "root";
	    // DPI_SelectionSummary, having type string
	    ParameterId["SelectionSummary"] = "selectionSummary";
	    // DPI_SessionAttributeKey, having type string
	    ParameterId["SessionAttributeKey"] = "sessionAttributeKey";
	    // DPI_SessionAttributeValue, having type string
	    ParameterId["SessionAttributeValue"] = "sessionAttributeValue";
	    // DPI_SheetAttributeKey, having type string
	    ParameterId["SheetAttributeKey"] = "baseSheetAttributeKey";
	    // DPI_SheetAttributeValue, having type string
	    ParameterId["SheetAttributeValue"] = "baseSheetAttributeValue";
	    // DPI_SmallUnitDisplay, having type string
	    ParameterId["SmallUnitDisplay"] = "smallUnitDisplay";
	    // DPI_SourceCaption, having type string
	    ParameterId["SourceCaption"] = "sourceCaption";
	    // DPI_SrcPath, having type string
	    ParameterId["SrcPath"] = "srcPath";
	    // DPI_StartSelectionCaption, having type string
	    ParameterId["StartSelectionCaption"] = "startSelectionCaption";
	    // DPI_Subtitle, having type string
	    ParameterId["Subtitle"] = "subtitle";
	    // DPI_TableauServerSiteName, having type string
	    ParameterId["TableauServerSiteName"] = "tableauServerSiteName";
	    // DPI_TargetCaption, having type string
	    ParameterId["TargetCaption"] = "targetCaption";
	    // DPI_ThumbnailPath, having type string
	    ParameterId["ThumbnailPath"] = "thumbnailPath";
	    // DPI_ToLabel, having type string
	    ParameterId["ToLabel"] = "toLabel";
	    // DPI_URLAddress, having type string
	    ParameterId["URLAddress"] = "urlAddress";
	    // DPI_ValuesTableHeader, having type string
	    ParameterId["ValuesTableHeader"] = "valuesTableHeader";
	    // DPI_ValuesTableHeader2, having type string
	    ParameterId["ValuesTableHeader2"] = "valuesTableHeader2";
	    // DPI_VariableDescription, having type string
	    ParameterId["VariableDescription"] = "variableDescription";
	    // DPI_VariableDisplayName, having type string
	    ParameterId["VariableDisplayName"] = "variableDisplayName";
	    // DPI_VariableGUID, having type string
	    ParameterId["VariableGUID"] = "variableGuid";
	    // DPI_VerboseName, having type string
	    ParameterId["VerboseName"] = "verboseName";
	    // DPI_ViewId, having type string
	    ParameterId["ViewId"] = "viewId";
	    // DPI_Warning1, having type string
	    ParameterId["Warning1"] = "warning1";
	    // DPI_Warning2, having type string
	    ParameterId["Warning2"] = "warning2";
	    // DPI_RefreshToken, having type string
	    ParameterId["RefreshToken"] = "refresh_token";
	    // DPI_TokenType, having type string
	    ParameterId["TokenType"] = "token_type";
	    // DPI_XSRFToken, having type string
	    ParameterId["XSRFToken"] = "xsrf_token";
	    // DPI_AxisSubtitle, having type string
	    ParameterId["AxisSubtitle"] = "axisSubtitle";
	    // DPI_AxisTitle, having type string
	    ParameterId["AxisTitle"] = "axisTitle";
	    // DPI_TickMarkOriginDataValue, having type string
	    ParameterId["TickMarkOriginDataValue"] = "tickMarkOriginDataValue";
	    // DPI_TickMarkSpacingDataValue, having type string
	    ParameterId["TickMarkSpacingDataValue"] = "tickMarkSpacingDataValue";
	    // DPI_ExtractActionLocalized, having type string
	    ParameterId["ExtractActionLocalized"] = "extractActionLocalized";
	    // DPI_ExtractSource, having type string
	    ParameterId["ExtractSource"] = "extractSource";
	    // DPI_FileContents, having type string
	    ParameterId["FileContents"] = "fileContents";
	    // DPI_SaveImagePath, having type string
	    ParameterId["SaveImagePath"] = "saveImagePath";
	    // DPI_WidgetUID, having type string
	    ParameterId["WidgetUID"] = "widgetUniqueId";
	    // DPI_DatePropertiesDisplayText, having type string
	    ParameterId["DatePropertiesDisplayText"] = "datePropertiesDisplayText";
	    // DPI_DatePropertiesHelperText, having type string
	    ParameterId["DatePropertiesHelperText"] = "datePropertiesHelperText";
	    // DPI_EventName, having type string
	    ParameterId["EventName"] = "eventName";
	    // DPI_ExceptionType, having type string
	    ParameterId["ExceptionType"] = "exceptionType";
	    // DPI_SearchPlaceholder, having type string
	    ParameterId["SearchPlaceholder"] = "searchPlaceholder";
	    // DPI_TargetVersion, having type string
	    ParameterId["TargetVersion"] = "targetVersion";
	    // DPI_DataValueDisplayString, having type string
	    ParameterId["DataValueDisplayString"] = "dataValueDisplayString";
	    // DPI_DomainString, having type string
	    ParameterId["DomainString"] = "domainString";
	    // DPI_RawDataValueString, having type string
	    ParameterId["RawDataValueString"] = "rawDataValueString";
	    // DPI_RichTextDialogTitle, having type string
	    ParameterId["RichTextDialogTitle"] = "richTextDialogTitle";
	    // DPI_RichTextContent, having type string
	    ParameterId["RichTextContent"] = "richTextContent";
	    // DPI_MarkSizeAsString, having type string
	    ParameterId["MarkSizeAsString"] = "markSizeAsString";
	    // DPI_UnitsLabel, having type string
	    ParameterId["UnitsLabel"] = "unitsLabel";
	    // DPI_EmailAddress, having type string
	    ParameterId["EmailAddress"] = "emailAddress";
	    // DPI_FirstName, having type string
	    ParameterId["FirstName"] = "firstName";
	    // DPI_LastName, having type string
	    ParameterId["LastName"] = "lastName";
	    // DPI_SummaryCardAvg, having type string
	    ParameterId["SummaryCardAvg"] = "summaryCardAvg";
	    // DPI_SummaryCardCaption, having type string
	    ParameterId["SummaryCardCaption"] = "summaryCardCaption";
	    // DPI_SummaryCardCount, having type string
	    ParameterId["SummaryCardCount"] = "summaryCardCount";
	    // DPI_SummaryCardKurtosis, having type string
	    ParameterId["SummaryCardKurtosis"] = "summaryCardKurtosis";
	    // DPI_SummaryCardMax, having type string
	    ParameterId["SummaryCardMax"] = "summaryCardMax";
	    // DPI_SummaryCardMedian, having type string
	    ParameterId["SummaryCardMedian"] = "summaryCardMedian";
	    // DPI_SummaryCardMin, having type string
	    ParameterId["SummaryCardMin"] = "summaryCardMin";
	    // DPI_SummaryCardQuart1, having type string
	    ParameterId["SummaryCardQuart1"] = "summaryCardQuart1";
	    // DPI_SummaryCardQuart3, having type string
	    ParameterId["SummaryCardQuart3"] = "summaryCardQuart3";
	    // DPI_SummaryCardSkewness, having type string
	    ParameterId["SummaryCardSkewness"] = "summaryCardSkewness";
	    // DPI_SummaryCardStdev, having type string
	    ParameterId["SummaryCardStdev"] = "summaryCardStdev";
	    // DPI_SummaryCardSum, having type string
	    ParameterId["SummaryCardSum"] = "summaryCardSum";
	    // DPI_ValueClassAttr, having type string
	    ParameterId["ValueClassAttr"] = "valueClassAttr";
	    // DPI_AuthenticationSummary, having type string
	    ParameterId["AuthenticationSummary"] = "authenticationSummary";
	    // DPI_BtnCancelText, having type string
	    ParameterId["BtnCancelText"] = "btnCancelText";
	    // DPI_BtnOkText, having type string
	    ParameterId["BtnOkText"] = "btnOkText";
	    // DPI_ButtonText, having type string
	    ParameterId["ButtonText"] = "buttonText";
	    // DPI_CalculationCaption, having type string
	    ParameterId["CalculationCaption"] = "calculationCaption";
	    // DPI_CalculationDependencies, having type string
	    ParameterId["CalculationDependencies"] = "calculationDependencies";
	    // DPI_CalculationFormula, having type string
	    ParameterId["CalculationFormula"] = "calculationFormula";
	    // DPI_CheckPublishMessage, having type string
	    ParameterId["CheckPublishMessage"] = "checkPublishSummary";
	    // DPI_ClusterModelText, having type string
	    ParameterId["ClusterModelText"] = "clusterModelText";
	    // DPI_ClusterSummaryScaledText, having type string
	    ParameterId["ClusterSummaryScaledText"] = "clusterSummaryScaledText";
	    // DPI_ClusterSummaryText, having type string
	    ParameterId["ClusterSummaryText"] = "clusterSummaryText";
	    // DPI_ColumnCaption, having type string
	    ParameterId["ColumnCaption"] = "columnCaption";
	    // DPI_DatasourceCaption, having type string
	    ParameterId["DatasourceCaption"] = "datasourceCaption";
	    // DPI_DefaultCaption, having type string
	    ParameterId["DefaultCaption"] = "defaultCaption";
	    // DPI_DisplayString, having type string
	    ParameterId["DisplayString"] = "displayText";
	    // DPI_DragDescription, having type string
	    ParameterId["DragDescription"] = "dragDescription";
	    // DPI_ExceptionMessage, having type string
	    ParameterId["ExceptionMessage"] = "exceptionMessage";
	    // DPI_Explanation, having type string
	    ParameterId["Explanation"] = "explanation";
	    // DPI_FieldCaption, having type string
	    ParameterId["FieldCaption"] = "fieldCaption";
	    // DPI_FieldSummary, having type string
	    ParameterId["FieldSummary"] = "fieldSummary";
	    // DPI_FieldSummaryLabel, having type string
	    ParameterId["FieldSummaryLabel"] = "fieldSummaryLabel";
	    // DPI_FilterDescription, having type string
	    ParameterId["FilterDescription"] = "filterDescription";
	    // DPI_FilterName, having type string
	    ParameterId["FilterName"] = "filterName";
	    // DPI_ForecastDiagnoseText, having type string
	    ParameterId["ForecastDiagnoseText"] = "forecastDiagnoseText";
	    // DPI_ForecastModelText, having type string
	    ParameterId["ForecastModelText"] = "forecastModelText";
	    // DPI_ForecastSummaryPctText, having type string
	    ParameterId["ForecastSummaryPctText"] = "forecastSummaryPctText";
	    // DPI_ForecastSummaryText, having type string
	    ParameterId["ForecastSummaryText"] = "forecastSummaryText";
	    // DPI_HasActiveExtractText, having type string
	    ParameterId["HasActiveExtractText"] = "hasActiveExtractText";
	    // DPI_HtmlColor, having type string
	    ParameterId["HtmlColor"] = "htmlColor";
	    // DPI_IncludeLocalFilesCheckedWarning, having type string
	    ParameterId["IncludeLocalFilesCheckedWarning"] = "includeLocalFilesCheckedWarning";
	    // DPI_IncludeLocalFilesWarning, having type string
	    ParameterId["IncludeLocalFilesWarning"] = "includeLocalFilesWarning";
	    // DPI_InvalidFieldCaption, having type string
	    ParameterId["InvalidFieldCaption"] = "invalidFieldCaption";
	    // DPI_LimitSummary, having type string
	    ParameterId["LimitSummary"] = "limitSummary";
	    // DPI_LoadedExistingObjectWarning, having type string
	    ParameterId["LoadedExistingObjectWarning"] = "loadedExistingObjectWarning";
	    // DPI_ManageDatasourcesSummary, having type string
	    ParameterId["ManageDatasourcesSummary"] = "manageDatasourcesSummary";
	    // DPI_ModalDialog, having type string
	    ParameterId["ModalDialog"] = "modalDialog";
	    // DPI_NewDatasourceCaption, having type string
	    ParameterId["NewDatasourceCaption"] = "newDatasourceCaption";
	    // DPI_PermissionsButtonLabel, having type string
	    ParameterId["PermissionsButtonLabel"] = "permissionsButtonLabel";
	    // DPI_PermissionsEditorRoleId, having type string
	    ParameterId["PermissionsEditorRoleId"] = "permissionsEditorRoleId";
	    // DPI_PermissionsLabel, having type string
	    ParameterId["PermissionsLabel"] = "permissionsLabel";
	    // DPI_PerspectiveCaption, having type string
	    ParameterId["PerspectiveCaption"] = "perspectiveCaption";
	    // DPI_PublishButtonLabel, having type string
	    ParameterId["PublishButtonLabel"] = "publishButtonLabel";
	    // DPI_PublishChoiceLabel, having type string
	    ParameterId["PublishChoiceLabel"] = "publishChoiceLabel";
	    // DPI_PublishObjectViewsSummary, having type string
	    ParameterId["PublishObjectViewsSummary"] = "publishObjectViewsSummary";
	    // DPI_QualifiedFieldCaption, having type string
	    ParameterId["QualifiedFieldCaption"] = "qualifiedFieldCaption";
	    // DPI_RelationshipTooltipText, having type string
	    ParameterId["RelationshipTooltipText"] = "relationshipTooltipText";
	    // DPI_ResetObjectAttributesWarning, having type string
	    ParameterId["ResetObjectAttributesWarning"] = "resetObjectAttributesWarning";
	    // DPI_RowCountCaption, having type string
	    ParameterId["RowCountCaption"] = "rowCountCaption";
	    // DPI_ServerCaption, having type string
	    ParameterId["ServerCaption"] = "serverCaption";
	    // DPI_SizeModeName, having type string
	    ParameterId["SizeModeName"] = "sizeModeName";
	    // DPI_SummaryText, having type string
	    ParameterId["SummaryText"] = "summaryText";
	    // DPI_SyncClientUseExtractLabel, having type string
	    ParameterId["SyncClientUseExtractLabel"] = "syncClientUseExtractLabel";
	    // DPI_Text, having type string
	    ParameterId["Text"] = "text";
	    // DPI_TextDropdownControlLabel, having type string
	    ParameterId["TextDropdownControlLabel"] = "controlLabel";
	    // DPI_ThumbnailUserName, having type string
	    ParameterId["ThumbnailUserName"] = "thumbnailUserName";
	    // DPI_TitleString, having type string
	    ParameterId["TitleString"] = "titleString";
	    // DPI_TooltipText, having type string
	    ParameterId["TooltipText"] = "tooltipText";
	    // DPI_UpdatedCalcCaption, having type string
	    ParameterId["UpdatedCalcCaption"] = "updatedCalculationCaption";
	    // DPI_UpdatedCalcFormula, having type string
	    ParameterId["UpdatedCalcFormula"] = "updatedCalculationFormula";
	    // DPI_UserCaption, having type string
	    ParameterId["UserCaption"] = "userCaption";
	    // DPI_WarningTooltipText, having type string
	    ParameterId["WarningTooltipText"] = "warningTooltipText";
	    // DPI_DatasourceFile, having type string
	    ParameterId["DatasourceFile"] = "datasourceFile";
	    // DPI_File, having type string
	    ParameterId["File"] = "file";
	    // DPI_FileNameBase, having type string
	    ParameterId["FileNameBase"] = "filenameBase";
	    // DPI_NewFile, having type string
	    ParameterId["NewFile"] = "newFile";
	    // DPI_OriginalFile, having type string
	    ParameterId["OriginalFile"] = "originalFile";
	    // DPI_OutputFile, having type string
	    ParameterId["OutputFile"] = "outputFile";
	    // DPI_SampleFileName, having type string
	    ParameterId["SampleFileName"] = "sampleFilename";
	    // DPI_WorkbookFile, having type string
	    ParameterId["WorkbookFile"] = "workbookFile";
	    // DPI_ImageKey, having type string
	    ParameterId["ImageKey"] = "imageKey";
	    // DPI_OverlayImageKey, having type string
	    ParameterId["OverlayImageKey"] = "overlayImageKey";
	    // DPI_TempFileKey, having type string
	    ParameterId["TempFileKey"] = "tempfileKey";
	    // DPI_CapturedSheet, having type string
	    ParameterId["CapturedSheet"] = "capturedSheet";
	    // DPI_CurrentSheet, having type string
	    ParameterId["CurrentSheet"] = "currentSheet";
	    // DPI_Dashboard, having type string
	    ParameterId["Dashboard"] = "dashboard";
	    // DPI_EnsureSheet, having type string
	    ParameterId["EnsureSheet"] = "ensureSheetName";
	    // DPI_NewSheet, having type string
	    ParameterId["NewSheet"] = "newSheet";
	    // DPI_Sheet, having type string
	    ParameterId["Sheet"] = "sheet";
	    // DPI_SheetName, having type string
	    ParameterId["SheetName"] = "sheetName";
	    // DPI_SourceDashboard, having type string
	    ParameterId["SourceDashboard"] = "sourceDashboard";
	    // DPI_SourceSheet, having type string
	    ParameterId["SourceSheet"] = "sourceSheet";
	    // DPI_TargetSheet, having type string
	    ParameterId["TargetSheet"] = "targetSheet";
	    // DPI_WorkbookName, having type string
	    ParameterId["WorkbookName"] = "workbookName";
	    // DPI_Worksheet, having type string
	    ParameterId["Worksheet"] = "worksheet";
	    // DPI_BaseViewThumbLink, having type string
	    ParameterId["BaseViewThumbLink"] = "baseViewThumbLink";
	    // DPI_BlogLink, having type string
	    ParameterId["BlogLink"] = "blogLink";
	    // DPI_CacheUrl, having type string
	    ParameterId["CacheUrl"] = "cacheUrl";
	    // DPI_DownloadLink, having type string
	    ParameterId["DownloadLink"] = "downloadLink";
	    // DPI_RepositoryUrl, having type string
	    ParameterId["RepositoryUrl"] = "repositoryUrl";
	    // DPI_ShareLink, having type string
	    ParameterId["ShareLink"] = "shareLink";
	    // DPI_URL, having type string
	    ParameterId["URL"] = "url";
	    // DPI_ClusterModelHtml, having type string
	    ParameterId["ClusterModelHtml"] = "clusterModelHtml";
	    // DPI_ClusterSummaryHtml, having type string
	    ParameterId["ClusterSummaryHtml"] = "clusterSummaryHtml";
	    // DPI_ClusterSummaryScaledHtml, having type string
	    ParameterId["ClusterSummaryScaledHtml"] = "clusterSummaryScaledHtml";
	    // DPI_FieldDescription, having type string
	    ParameterId["FieldDescription"] = "fieldDescription";
	    // DPI_ForecastDiagnoseHtml, having type string
	    ParameterId["ForecastDiagnoseHtml"] = "forecastDiagnoseHtml";
	    // DPI_ForecastModelHtml, having type string
	    ParameterId["ForecastModelHtml"] = "forecastModelHtml";
	    // DPI_ForecastSummaryHtml, having type string
	    ParameterId["ForecastSummaryHtml"] = "forecastSummaryHtml";
	    // DPI_ForecastSummaryPctHtml, having type string
	    ParameterId["ForecastSummaryPctHtml"] = "forecastSummaryPctHtml";
	    // DPI_Html, having type string
	    ParameterId["Html"] = "html";
	    // DPI_HtmlSelection, having type string
	    ParameterId["HtmlSelection"] = "htmlSelection";
	    // DPI_HtmlTooltip, having type string
	    ParameterId["HtmlTooltip"] = "htmlTooltip";
	    // DPI_TitleHtml, having type string
	    ParameterId["TitleHtml"] = "titleHtml";
	    // DPI_CacheUrlInfoJson, having type string
	    ParameterId["CacheUrlInfoJson"] = "cacheUrlInfoJson";
	    // DPI_FilterSearchJson, having type string
	    ParameterId["FilterSearchJson"] = "filterSearchJson";
	    // DPI_FilterSearchWithIndexJson, having type string
	    ParameterId["FilterSearchWithIndexJson"] = "filterSearchWithIndexJson";
	    // DPI_FilterShowChildrenJson, having type string
	    ParameterId["FilterShowChildrenJson"] = "filterShowChildrenJson";
	    // DPI_FiltersJson, having type string
	    ParameterId["FiltersJson"] = "filtersJson";
	    // DPI_FrameJson, having type string
	    ParameterId["FrameJson"] = "frameJson";
	    // DPI_GeometryJson, having type string
	    ParameterId["GeometryJson"] = "geometryJson";
	    // DPI_GetFilterItemsJson, having type string
	    ParameterId["GetFilterItemsJson"] = "getFilterItemsJson";
	    // DPI_KeepOnlyResponseJson, having type string
	    ParameterId["KeepOnlyResponseJson"] = "keepOnlyResponseJson";
	    // DPI_MenuCommandsJson, having type string
	    ParameterId["MenuCommandsJson"] = "menuCommandsJson";
	    // DPI_ModifiedSheetsJson, having type string
	    ParameterId["ModifiedSheetsJson"] = "modifiedSheetsJson";
	    // DPI_ParameterCtrlJson, having type string
	    ParameterId["ParameterCtrlJson"] = "parameterCtrlJson";
	    // DPI_ViewJson, having type string
	    ParameterId["ViewJson"] = "viewJson";
	    // DPI_CustomizedViewXML, having type string
	    ParameterId["CustomizedViewXML"] = "customizedViewXml";
	    // DPI_DatasourceDeltaXML, having type string
	    ParameterId["DatasourceDeltaXML"] = "datasourceDeltaXml";
	    // DPI_DatasourceXML, having type string
	    ParameterId["DatasourceXML"] = "datasourceXml";
	    // DPI_KeychainXML, having type string
	    ParameterId["KeychainXML"] = "keychainXml";
	    // DPI_PermissionsModelXML, having type string
	    ParameterId["PermissionsModelXML"] = "permissionsModelXml";
	    // DPI_SharedViewsXML, having type string
	    ParameterId["SharedViewsXML"] = "sharedViewsXml";
	    // DPI_TargetURL, having type string
	    ParameterId["TargetURL"] = "targetUrl";
	    // DPI_Anchor, having type string
	    ParameterId["Anchor"] = "anchor";
	    // DPI_CenterValue, having type string
	    ParameterId["CenterValue"] = "centerValue";
	    // DPI_ComputedBinSize, having type string
	    ParameterId["ComputedBinSize"] = "computedBinSize";
	    // DPI_ConstantValue, having type string
	    ParameterId["ConstantValue"] = "constantValue";
	    // DPI_PairedConstantValue, having type string
	    ParameterId["PairedConstantValue"] = "pairedConstantValue";
	    // DPI_CountDistinct, having type string
	    ParameterId["CountDistinct"] = "countDistinct";
	    // DPI_DataMax, having type string
	    ParameterId["DataMax"] = "dataMax";
	    // DPI_DataMin, having type string
	    ParameterId["DataMin"] = "dataMin";
	    // DPI_EndValue, having type string
	    ParameterId["EndValue"] = "endValue";
	    // DPI_RangeMax, having type string
	    ParameterId["RangeMax"] = "rangeMax";
	    // DPI_RangeMin, having type string
	    ParameterId["RangeMin"] = "rangeMin";
	    // DPI_RangeStepSize, having type string
	    ParameterId["RangeStepSize"] = "rangeStepSize";
	    // DPI_StartValue, having type string
	    ParameterId["StartValue"] = "startValue";
	    // DPI_TargetValue, having type string
	    ParameterId["TargetValue"] = "targetValue";
	    // DPI_ValueInc, having type string
	    ParameterId["ValueInc"] = "valueInc";
	    // DPI_ValueMax, having type string
	    ParameterId["ValueMax"] = "valueMax";
	    // DPI_ValueMin, having type string
	    ParameterId["ValueMin"] = "valueMin";
	    // DPI_QuantilesValue, having type string
	    ParameterId["QuantilesValue"] = "quantilesValue";
	    // DPI_UserInputBinSize, having type string
	    ParameterId["UserInputBinSize"] = "userBinSize";
	    // DPI_AddedDataSources, having type string[]
	    ParameterId["AddedDataSources"] = "addedDataSourceNames";
	    // DPI_AddressingCaptions, having type string[]
	    ParameterId["AddressingCaptions"] = "addressingCaptions";
	    // DPI_AggregationCaptions, having type string[]
	    ParameterId["AggregationCaptions"] = "aggregationCaptions";
	    // DPI_AtTheLevelCaptions, having type string[]
	    ParameterId["AtTheLevelCaptions"] = "atTheLevelCaptions";
	    // DPI_AuthenticationSettingLabels, having type string[]
	    ParameterId["AuthenticationSettingLabels"] = "authenticationSettingLabels";
	    // DPI_AutosaveFileIdsVector, having type string[]
	    ParameterId["AutosaveFileIdsVector"] = "autosaveFileIdsVector";
	    // DPI_ChangedTuples, having type string[]
	    ParameterId["ChangedTuples"] = "changedTuples";
	    // DPI_CharsetsAvailable, having type string[]
	    ParameterId["CharsetsAvailable"] = "charsetsAvailable";
	    // DPI_CharsetDisplayNames, having type string[]
	    ParameterId["CharsetDisplayNames"] = "charsetDisplayNames";
	    // DPI_ColorFactors, having type string[]
	    ParameterId["ColorFactors"] = "colorFactors";
	    // DPI_ColumnFullNames, having type string[]
	    ParameterId["ColumnFullNames"] = "columnFullNames";
	    // DPI_ConnectionNames, having type string[]
	    ParameterId["ConnectionNames"] = "connectionNames";
	    // DPI_ConnectionCaptions, having type string[]
	    ParameterId["ConnectionCaptions"] = "connectionCaptions";
	    // DPI_ConnectionBigQueryLegacySQLCheckBox, having type string[]
	    ParameterId["ConnectionBigQueryLegacySQLCheckBox"] = "connectionBigqueryLegacySqlCheckbox";
	    // DPI_CustomFieldOrder, having type string[]
	    ParameterId["CustomFieldOrder"] = "customFieldOrder";
	    // DPI_DataSourceClasses, having type string[]
	    ParameterId["DataSourceClasses"] = "dataSourceClasses";
	    // DPI_DataSourceNames, having type string[]
	    ParameterId["DataSourceNames"] = "dataSourceNames";
	    // DPI_DataSourceNames2, having type string[]
	    ParameterId["DataSourceNames2"] = "dataSourceNames2";
	    // DPI_DateFormats, having type string[]
	    ParameterId["DateFormats"] = "dateFormats";
	    // DPI_DayNames, having type string[]
	    ParameterId["DayNames"] = "dayNames";
	    // DPI_DrillPathVector, having type string[]
	    ParameterId["DrillPathVector"] = "drillpathVector";
	    // DPI_ExceptionMessageParams, having type string[]
	    ParameterId["ExceptionMessageParams"] = "exceptionMessageParams";
	    // DPI_ExcludedSheets, having type string[]
	    ParameterId["ExcludedSheets"] = "excludeSheets";
	    // DPI_FieldDisplayNames, having type string[]
	    ParameterId["FieldDisplayNames"] = "fieldDisplayNames";
	    // DPI_FieldFolderVector, having type string[]
	    ParameterId["FieldFolderVector"] = "fieldFolderVector";
	    // DPI_FileIds, having type string[]
	    ParameterId["FileIds"] = "fileIds";
	    // DPI_FilePaths, having type string[]
	    ParameterId["FilePaths"] = "filePaths";
	    // DPI_FileNames, having type string[]
	    ParameterId["FileNames"] = "fileNames";
	    // DPI_FilterAdd, having type string[]
	    ParameterId["FilterAdd"] = "filterAdd";
	    // DPI_FilterAliases, having type string[]
	    ParameterId["FilterAliases"] = "filterValues";
	    // DPI_FilterRemove, having type string[]
	    ParameterId["FilterRemove"] = "filterRemove";
	    // DPI_FixedCaptions, having type string[]
	    ParameterId["FixedCaptions"] = "fixedCaptions";
	    // DPI_FontFamilies, having type string[]
	    ParameterId["FontFamilies"] = "fontFamilies";
	    // DPI_FormatStrings, having type string[]
	    ParameterId["FormatStrings"] = "formatStrings";
	    // DPI_FormattedValues, having type string[]
	    ParameterId["FormattedValues"] = "formattedValues";
	    // DPI_FoundTuples, having type string[]
	    ParameterId["FoundTuples"] = "foundTuples";
	    // DPI_FullSchedulesLabels, having type string[]
	    ParameterId["FullSchedulesLabels"] = "fullSchedulesLabels";
	    // DPI_ImageResourceList, having type string[]
	    ParameterId["ImageResourceList"] = "imageResources";
	    // DPI_IncludeList, having type string[]
	    ParameterId["IncludeList"] = "includeList";
	    // DPI_IncrSchedulesLabels, having type string[]
	    ParameterId["IncrSchedulesLabels"] = "incrSchedulesLabels";
	    // DPI_InvalidDates, having type string[]
	    ParameterId["InvalidDates"] = "invalidDates";
	    // DPI_InvalidValues, having type string[]
	    ParameterId["InvalidValues"] = "invalidValues";
	    // DPI_ItemValues, having type string[]
	    ParameterId["ItemValues"] = "itemValues";
	    // DPI_JoinEditableProps, having type string[]
	    ParameterId["JoinEditableProps"] = "joinEditableProps";
	    // DPI_JoinFieldCaptions, having type string[]
	    ParameterId["JoinFieldCaptions"] = "joinFieldCaptions";
	    // DPI_LocaleOptions, having type string[]
	    ParameterId["LocaleOptions"] = "localeOptions";
	    // DPI_LocaleDisplayNames, having type string[]
	    ParameterId["LocaleDisplayNames"] = "localeDisplayNames";
	    // DPI_MapBoxStyleMaps, having type string[]
	    ParameterId["MapBoxStyleMaps"] = "mapboxStyleMaps";
	    // DPI_MapConnectionErrorDetails, having type string[]
	    ParameterId["MapConnectionErrorDetails"] = "mapConnectionErrorDetails";
	    // DPI_SheetNames, having type string[]
	    ParameterId["SheetNames"] = "sheetNames";
	    // DPI_MapSourceNames, having type string[]
	    ParameterId["MapSourceNames"] = "mapSourceNames";
	    // DPI_MarkGeometries, having type string[]
	    ParameterId["MarkGeometries"] = "markGeometries";
	    // DPI_MenuItems, having type string[]
	    ParameterId["MenuItems"] = "menuItems";
	    // DPI_Modes, having type string[]
	    ParameterId["Modes"] = "modes";
	    // DPI_MonthNames, having type string[]
	    ParameterId["MonthNames"] = "monthNames";
	    // DPI_NumberFormats, having type string[]
	    ParameterId["NumberFormats"] = "numberFormats";
	    // DPI_ObjectTextIDs, having type string[]
	    ParameterId["ObjectTextIDs"] = "objectTextIds";
	    // DPI_OldExtracts, having type string[]
	    ParameterId["OldExtracts"] = "oldExtracts";
	    // DPI_OrderingTypeCaptions, having type string[]
	    ParameterId["OrderingTypeCaptions"] = "orderingTypeCaptions";
	    // DPI_PageNames, having type string[]
	    ParameterId["PageNames"] = "pageNames";
	    // DPI_PaneDescriptorKeys, having type string[]
	    ParameterId["PaneDescriptorKeys"] = "paneDescriptorKeys";
	    // DPI_ParamCaptions, having type string[]
	    ParameterId["ParamCaptions"] = "paramCaptions";
	    // DPI_PrecannedDataValues, having type string[]
	    ParameterId["PrecannedDataValues"] = "precannedDataValues";
	    // DPI_PublishChoiceLabels, having type string[]
	    ParameterId["PublishChoiceLabels"] = "publishChoiceLabels";
	    // DPI_RankTypeCaptions, having type string[]
	    ParameterId["RankTypeCaptions"] = "rankTypeCaptions";
	    // DPI_RecentTags, having type string[]
	    ParameterId["RecentTags"] = "recentTags";
	    // DPI_RelativeCaptions, having type string[]
	    ParameterId["RelativeCaptions"] = "relativeCaptions";
	    // DPI_RemovedDataSources, having type string[]
	    ParameterId["RemovedDataSources"] = "removedDataSourceNames";
	    // DPI_RepresentativeTuple, having type string[]
	    ParameterId["RepresentativeTuple"] = "representativeTuple";
	    // DPI_RestartEveryCaptions, having type string[]
	    ParameterId["RestartEveryCaptions"] = "restartEveryCaptions";
	    // DPI_SchemaMemberGlobalNames, having type string[]
	    ParameterId["SchemaMemberGlobalNames"] = "schemaMemberGlobalNames";
	    // DPI_SelectValuesList, having type string[]
	    ParameterId["SelectValuesList"] = "selectValues";
	    // DPI_SelectionValueList, having type string[]
	    ParameterId["SelectionValueList"] = "selectionValueList";
	    // DPI_SortAggCaptions, having type string[]
	    ParameterId["SortAggCaptions"] = "sortAggCaptions";
	    // DPI_SortDirectionCaptions, having type string[]
	    ParameterId["SortDirectionCaptions"] = "sortDirectionCaptions";
	    // DPI_SortFieldCaptions, having type string[]
	    ParameterId["SortFieldCaptions"] = "sortFieldCaptions";
	    // DPI_SortFieldNameVector, having type string[]
	    ParameterId["SortFieldNameVector"] = "sortFieldnameVector";
	    // DPI_SupportedJoinOperators, having type string[]
	    ParameterId["SupportedJoinOperators"] = "supportedJoinOperators";
	    // DPI_TableCalcTypeCaptions, having type string[]
	    ParameterId["TableCalcTypeCaptions"] = "tableCalcTypeCaptions";
	    // DPI_Tags, having type string[]
	    ParameterId["Tags"] = "tags";
	    // DPI_TermVec, having type string[]
	    ParameterId["TermVec"] = "termVector";
	    // DPI_UIAutomationList, having type string[]
	    ParameterId["UIAutomationList"] = "uiAutomationList";
	    // DPI_ReferenceLineValidCustomLabelTags, having type string[]
	    ParameterId["ReferenceLineValidCustomLabelTags"] = "validReferenceLineCustomLabelTags";
	    // DPI_LocalizedKeywords, having type string[]
	    ParameterId["LocalizedKeywords"] = "localizedKeywords";
	    // DPI_AvailableCalendars, having type string[]
	    ParameterId["AvailableCalendars"] = "availableCalendars";
	    // DPI_SheetsToBeDeletedOrHidden, having type string[]
	    ParameterId["SheetsToBeDeletedOrHidden"] = "sheetsToBeDeletedOrHidden";
	    // DPI_AddSheets, having type string[]
	    ParameterId["AddSheets"] = "addSheets";
	    // DPI_NamesOfSubsheets, having type string[]
	    ParameterId["NamesOfSubsheets"] = "namesOfSubsheets";
	    // DPI_RemoveSheets, having type string[]
	    ParameterId["RemoveSheets"] = "removeSheets";
	    // DPI_ScrollOffsetSheets, having type string[]
	    ParameterId["ScrollOffsetSheets"] = "scrollOffsetSheets";
	    // DPI_Sheets, having type string[]
	    ParameterId["Sheets"] = "sheets";
	    // DPI_SourceWorksheets, having type string[]
	    ParameterId["SourceWorksheets"] = "sourceWorksheets";
	    // DPI_TargetExcludes, having type string[]
	    ParameterId["TargetExcludes"] = "targetExclude";
	    // DPI_TargetWorksheets, having type string[]
	    ParameterId["TargetWorksheets"] = "targetWorksheets";
	    // DPI_TileURLs, having type string[]
	    ParameterId["TileURLs"] = "tileUrls";
	    // DPI_Details, having type string[]
	    ParameterId["Details"] = "details";
	    // DPI_FieldCaptions, having type string[]
	    ParameterId["FieldCaptions"] = "fieldCaptions";
	    // DPI_HighlightCaptions, having type string[]
	    ParameterId["HighlightCaptions"] = "highlightCaptions";
	    // DPI_LevelCaptions, having type string[]
	    ParameterId["LevelCaptions"] = "levelCaptions";
	    // DPI_LevelLeafValues, having type string[]
	    ParameterId["LevelLeafValues"] = "levelLeafValues";
	    // DPI_SubstitutionVariables, having type string[]
	    ParameterId["SubstitutionVariables"] = "substitutionVariables";
	    // DPI_SubstitutionVariableValues, having type string[]
	    ParameterId["SubstitutionVariableValues"] = "substitutionVariableValues";
	    // DPI_HtmlTooltips, having type string[]
	    ParameterId["HtmlTooltips"] = "htmlTooltips";
	    // DPI_InvalidFields, having type string[]
	    ParameterId["InvalidFields"] = "invalidFields";
	    // DPI_NamesOfColumns, having type string[]
	    ParameterId["NamesOfColumns"] = "namesOfColumns";
	    // DPI_NamesOfFields, having type string[]
	    ParameterId["NamesOfFields"] = "namesOfFields";
	    // DPI_ReferencedDatasources, having type string[]
	    ParameterId["ReferencedDatasources"] = "referencedDataSourceList";
	    // DPI_CSSAttrs, having type Dictionary(of string)
	    ParameterId["CSSAttrs"] = "cssAttrs";
	    // DPI_DataSourceMap, having type Dictionary(of string)
	    ParameterId["DataSourceMap"] = "dataSourceMap";
	    // DPI_EventParameters, having type Dictionary(of string)
	    ParameterId["EventParameters"] = "eventParameters";
	    // DPI_ExceptionAttrs, having type Dictionary(of string)
	    ParameterId["ExceptionAttrs"] = "exceptionAttrs";
	    // DPI_InvalidSheetMessage, having type Dictionary(of string)
	    ParameterId["InvalidSheetMessage"] = "invalidSheetMessages";
	    // DPI_MapBoxDefaultStyle, having type Dictionary(of string)
	    ParameterId["MapBoxDefaultStyle"] = "mapboxDefaultStyles";
	    // DPI_PaneFormattings, having type Dictionary(of string)
	    ParameterId["PaneFormattings"] = "paneFormattings";
	    // DPI_SourceNameWithCaption, having type Dictionary(of string)
	    ParameterId["SourceNameWithCaption"] = "sourceNameWithCaption";
	    // DPI_ConnectionColorMap, having type Dictionary(of string)
	    ParameterId["ConnectionColorMap"] = "connectionColorMap";
	    // DPI_TargetNameWithCaption, having type Dictionary(of string)
	    ParameterId["TargetNameWithCaption"] = "targetNameWithCaption";
	    // DPI_ViewIds, having type Dictionary(of string)
	    ParameterId["ViewIds"] = "viewIds";
	    // DPI_AddInSettings, having type Dictionary(of string)
	    ParameterId["AddInSettings"] = "addInSettings";
	    // DPI_DatasourceIcons, having type Dictionary(of string)
	    ParameterId["DatasourceIcons"] = "datasourceIcons";
	    // DPI_FormattedText, having type string
	    ParameterId["FormattedText"] = "formattedText";
	    // DPI_IconTooltip, having type string
	    ParameterId["IconTooltip"] = "iconTooltip";
	    // DPI_Title, having type string
	    ParameterId["Title"] = "title";
	    // DPI_Tooltip, having type string
	    ParameterId["Tooltip"] = "tooltip";
	    // DPI_ZoneText, having type string
	    ParameterId["ZoneText"] = "zoneText";
	    // DPI_AlignmentFlags, having type int
	    ParameterId["AlignmentFlags"] = "alignmentFlags";
	    // DPI_AlphaLevel, having type int
	    ParameterId["AlphaLevel"] = "alphaLevel";
	    // DPI_AnovaDF, having type int
	    ParameterId["AnovaDF"] = "anovaDf";
	    // DPI_AtTheLevelIndex, having type int
	    ParameterId["AtTheLevelIndex"] = "atTheLevelIndex";
	    // DPI_AutomaticDrillIdxInVector, having type int
	    ParameterId["AutomaticDrillIdxInVector"] = "automaticDrillIdxVector";
	    // DPI_AutoSize, having type int
	    ParameterId["AutoSize"] = "automaticSize";
	    // DPI_BaseCoord, having type int
	    ParameterId["BaseCoord"] = "baseCoord";
	    // DPI_CalcEditorCursorPosPostDrop, having type int
	    ParameterId["CalcEditorCursorPosPostDrop"] = "calcEditorCursorPosPostDrop";
	    // DPI_CalcEditorDropPos, having type int
	    ParameterId["CalcEditorDropPos"] = "calcEditorDropPos";
	    // DPI_CalcEditorTextSelectionEndPos, having type int
	    ParameterId["CalcEditorTextSelectionEndPos"] = "calcEditorTextSelectionEndPos";
	    // DPI_CalcEditorTextSelectionStartPos, having type int
	    ParameterId["CalcEditorTextSelectionStartPos"] = "calcEditorTextSelectionStartPos";
	    // DPI_CategoricalBinId, having type int
	    ParameterId["CategoricalBinId"] = "categoricalBinId";
	    // DPI_CategoricalFindControllerId, having type int
	    ParameterId["CategoricalFindControllerId"] = "categoricalFindControllerId";
	    // DPI_ClauseToModifyIndex, having type int
	    ParameterId["ClauseToModifyIndex"] = "clauseToModifyIndex";
	    // DPI_ClientRenderPixelLimit, having type int
	    ParameterId["ClientRenderPixelLimit"] = "clientRenderPixelLimit";
	    // DPI_ColCount, having type int
	    ParameterId["ColCount"] = "colCount";
	    // DPI_ColWidth, having type int
	    ParameterId["ColWidth"] = "colWidth";
	    // DPI_ColumnLevels, having type int
	    ParameterId["ColumnLevels"] = "columnLevels";
	    // DPI_ColumnNumber, having type int
	    ParameterId["ColumnNumber"] = "columnNumber";
	    // DPI_ColumnWidth, having type int
	    ParameterId["ColumnWidth"] = "columnWidth";
	    // DPI_ContentHeight, having type int
	    ParameterId["ContentHeight"] = "contentH";
	    // DPI_ContentWidth, having type int
	    ParameterId["ContentWidth"] = "contentW";
	    // DPI_ContentX, having type int
	    ParameterId["ContentX"] = "contentX";
	    // DPI_ContentY, having type int
	    ParameterId["ContentY"] = "contentY";
	    // DPI_CurDateAgg, having type int
	    ParameterId["CurDateAgg"] = "curDateAgg";
	    // DPI_CurrentCustViewId, having type int
	    ParameterId["CurrentCustViewId"] = "currentCustomViewId";
	    // DPI_CustomSplitCharacterCountSeparator, having type int
	    ParameterId["CustomSplitCharacterCountSeparator"] = "customSplitCharacterCountSeparator";
	    // DPI_CustomSplitDesiredSplitCount, having type int
	    ParameterId["CustomSplitDesiredSplitCount"] = "customSplitDesiredSplitCount";
	    // DPI_DataIndex, having type int
	    ParameterId["DataIndex"] = "dataIndex";
	    // DPI_DecimalPlaces, having type int
	    ParameterId["DecimalPlaces"] = "decimalPlaces";
	    // DPI_DeltaTime, having type int
	    ParameterId["DeltaTime"] = "deltaTime";
	    // DPI_DestPix, having type int
	    ParameterId["DestPix"] = "destPix";
	    // DPI_DeviceIndex, having type int
	    ParameterId["DeviceIndex"] = "deviceIndex";
	    // DPI_Duration, having type int
	    ParameterId["Duration"] = "duration";
	    // DPI_EndPtX, having type int
	    ParameterId["EndPtX"] = "endX";
	    // DPI_EndPtY, having type int
	    ParameterId["EndPtY"] = "endY";
	    // DPI_ErrorLen, having type int
	    ParameterId["ErrorLen"] = "lengthOfCalcOfError";
	    // DPI_ErrorPos, having type int
	    ParameterId["ErrorPos"] = "startPositionForError";
	    // DPI_ExceptionErrorMessageId, having type int
	    ParameterId["ExceptionErrorMessageId"] = "exceptionErrorMessageId";
	    // DPI_ExtentsH, having type int
	    ParameterId["ExtentsH"] = "extentsHeight";
	    // DPI_ExtentsW, having type int
	    ParameterId["ExtentsW"] = "extentsWidth";
	    // DPI_ExtentsX, having type int
	    ParameterId["ExtentsX"] = "extentsX";
	    // DPI_ExtentsY, having type int
	    ParameterId["ExtentsY"] = "extentsY";
	    // DPI_FieldIndex, having type int
	    ParameterId["FieldIndex"] = "fieldIndex";
	    // DPI_FieldNameId, having type int
	    ParameterId["FieldNameId"] = "fieldNameId";
	    // DPI_FirstDayOfWeek, having type int
	    ParameterId["FirstDayOfWeek"] = "firstDayOfWeek";
	    // DPI_FirstValueIndex, having type int
	    ParameterId["FirstValueIndex"] = "firstValueIndex";
	    // DPI_FixedSizePresetIndex, having type int
	    ParameterId["FixedSizePresetIndex"] = "fixedSizePresetIndex";
	    // DPI_FocusItemIndex, having type int
	    ParameterId["FocusItemIndex"] = "focusItemIndex";
	    // DPI_FontSize, having type int
	    ParameterId["FontSize"] = "fontSize";
	    // DPI_ForecastIntRangeEnd, having type int
	    ParameterId["ForecastIntRangeEnd"] = "forecastIntRangeEnd";
	    // DPI_ForecastIntRangeStart, having type int
	    ParameterId["ForecastIntRangeStart"] = "forecastIntRangeStart";
	    // DPI_FunctionHelpIndex, having type int
	    ParameterId["FunctionHelpIndex"] = "functionHelpIndex";
	    // DPI_GeographicSearchMaxResults, having type int
	    ParameterId["GeographicSearchMaxResults"] = "geographicSearchMaxResults";
	    // DPI_Height, having type int
	    ParameterId["Height"] = "h";
	    // DPI_HierarchyLevel, having type int
	    ParameterId["HierarchyLevel"] = "hierarchyLevel";
	    // DPI_HierarchyLevelLoaded, having type int
	    ParameterId["HierarchyLevelLoaded"] = "hierarchyLevelLoaded";
	    // DPI_HierarchyLevelMinimum, having type int
	    ParameterId["HierarchyLevelMinimum"] = "hierarchyLevelMinimum";
	    // DPI_HierarchyLoadLimit, having type int
	    ParameterId["HierarchyLoadLimit"] = "hierarchyLoadLimit";
	    // DPI_HierarchySelectControllerId, having type int
	    ParameterId["HierarchySelectControllerId"] = "hierarchySelectControllerId";
	    // DPI_HorzTextCell, having type int
	    ParameterId["HorzTextCell"] = "horzTextCell";
	    // DPI_ImageIndex, having type int
	    ParameterId["ImageIndex"] = "imageIndex";
	    // DPI_ImageSizeLimit, having type int
	    ParameterId["ImageSizeLimit"] = "imageSizeLimit";
	    // DPI_TransparentLineMarksLimit, having type int
	    ParameterId["TransparentLineMarksLimit"] = "transparentLineMarksLimit";
	    // DPI_Indent, having type int
	    ParameterId["Indent"] = "indent";
	    // DPI_Index, having type int
	    ParameterId["Index"] = "idx";
	    // DPI_IndexFrom, having type int
	    ParameterId["IndexFrom"] = "indexFrom";
	    // DPI_IndexOffset, having type int
	    ParameterId["IndexOffset"] = "indexOffset";
	    // DPI_IndexTo, having type int
	    ParameterId["IndexTo"] = "indexTo";
	    // DPI_InlineConnectionRenameRow, having type int
	    ParameterId["InlineConnectionRenameRow"] = "inlineConnectionRenameRow";
	    // DPI_InsertPos, having type int
	    ParameterId["InsertPos"] = "insertPos";
	    // DPI_IsHasDataSupported, having type int
	    ParameterId["IsHasDataSupported"] = "isHasDataSupported";
	    // DPI_LeftMargin, having type int
	    ParameterId["LeftMargin"] = "leftMargin";
	    // DPI_LeftRightBorderWidth, having type int
	    ParameterId["LeftRightBorderWidth"] = "leftRightBorderWidth";
	    // DPI_LowerBound, having type int
	    ParameterId["LowerBound"] = "lowerBound";
	    // DPI_MapRequestPixels, having type int
	    ParameterId["MapRequestPixels"] = "mapRequestPixels";
	    // DPI_MapScaleFontSizePixels, having type int
	    ParameterId["MapScaleFontSizePixels"] = "mapScaleFontSizePixels";
	    // DPI_MapScaleReadoutNumber, having type int
	    ParameterId["MapScaleReadoutNumber"] = "mapScaleReadoutNumber";
	    // DPI_MapScaleWidth, having type int
	    ParameterId["MapScaleWidth"] = "mapScaleWidth";
	    // DPI_MapTileSize, having type int
	    ParameterId["MapTileSize"] = "mapTileSize";
	    // DPI_Margin, having type int
	    ParameterId["Margin"] = "margin";
	    // DPI_MarginBottom, having type int
	    ParameterId["MarginBottom"] = "marginBottom";
	    // DPI_MarginLeft, having type int
	    ParameterId["MarginLeft"] = "marginLeft";
	    // DPI_MarginRight, having type int
	    ParameterId["MarginRight"] = "marginRight";
	    // DPI_MarginTop, having type int
	    ParameterId["MarginTop"] = "marginTop";
	    // DPI_MaxCell, having type int
	    ParameterId["MaxCell"] = "maxCell";
	    // DPI_MaxItemSpan, having type int
	    ParameterId["MaxItemSpan"] = "maxItemSpan";
	    // DPI_MaxPolynomialDegree, having type int
	    ParameterId["MaxPolynomialDegree"] = "maxDegree";
	    // DPI_MaxPosition, having type int
	    ParameterId["MaxPosition"] = "maxPosition";
	    // DPI_MaxSize, having type int
	    ParameterId["MaxSize"] = "maxSize";
	    // DPI_MinCell, having type int
	    ParameterId["MinCell"] = "minCell";
	    // DPI_MinPolynomialDegree, having type int
	    ParameterId["MinPolynomialDegree"] = "minDegree";
	    // DPI_MinPosition, having type int
	    ParameterId["MinPosition"] = "minPosition";
	    // DPI_MinSize, having type int
	    ParameterId["MinSize"] = "minSize";
	    // DPI_ModelDF, having type int
	    ParameterId["ModelDF"] = "modelDf";
	    // DPI_NewIndex, having type int
	    ParameterId["NewIndex"] = "newIndex";
	    // DPI_NumDataSourcesUsingServer, having type int
	    ParameterId["NumDataSourcesUsingServer"] = "numDataSourcesUsingServer";
	    // DPI_NumFilteredObs, having type int
	    ParameterId["NumFilteredObs"] = "filteredObservations";
	    // DPI_NumModeledObs, having type int
	    ParameterId["NumModeledObs"] = "modeledObservations";
	    // DPI_NumNotClustered, having type int
	    ParameterId["NumNotClustered"] = "numNotClustered";
	    // DPI_NumNumericFields, having type int
	    ParameterId["NumNumericFields"] = "numNumericFields";
	    // DPI_NumOutliers, having type int
	    ParameterId["NumOutliers"] = "numOutliers";
	    // DPI_NumRows, having type int
	    ParameterId["NumRows"] = "numRows";
	    // DPI_NumSelected, having type int
	    ParameterId["NumSelected"] = "numSelected";
	    // DPI_OffsetX, having type int
	    ParameterId["OffsetX"] = "offsetX";
	    // DPI_OffsetY, having type int
	    ParameterId["OffsetY"] = "offsetY";
	    // DPI_Padding, having type int
	    ParameterId["Padding"] = "padding";
	    // DPI_PaddingBottom, having type int
	    ParameterId["PaddingBottom"] = "paddingBottom";
	    // DPI_PaddingLeft, having type int
	    ParameterId["PaddingLeft"] = "paddingLeft";
	    // DPI_PaddingRight, having type int
	    ParameterId["PaddingRight"] = "paddingRight";
	    // DPI_PaddingTop, having type int
	    ParameterId["PaddingTop"] = "paddingTop";
	    // DPI_PageLoadPercentage, having type int
	    ParameterId["PageLoadPercentage"] = "pageLoadPercentage";
	    // DPI_PaletteIndex, having type int
	    ParameterId["PaletteIndex"] = "paletteIndex";
	    // DPI_PaneSpecificationId, having type int
	    ParameterId["PaneSpecificationId"] = "paneSpec";
	    // DPI_ParameterCtrlIncrementsPerTick, having type int
	    ParameterId["ParameterCtrlIncrementsPerTick"] = "parameterControlIncrementMultiplier";
	    // DPI_PolynomialDegree, having type int
	    ParameterId["PolynomialDegree"] = "degree";
	    // DPI_Port, having type int
	    ParameterId["Port"] = "datasourcePort";
	    // DPI_Position, having type int
	    ParameterId["Position"] = "position";
	    // DPI_PublishResultStringId, having type int
	    ParameterId["PublishResultStringId"] = "publishResultStringId";
	    // DPI_Radius, having type int
	    ParameterId["Radius"] = "radius";
	    // DPI_ReadoutOffset, having type int
	    ParameterId["ReadoutOffset"] = "readoutOffset";
	    // DPI_ReferenceIndex, having type int
	    ParameterId["ReferenceIndex"] = "referenceIndex";
	    // DPI_RegionHeight, having type int
	    ParameterId["RegionHeight"] = "regionHeight";
	    // DPI_RegionWidth, having type int
	    ParameterId["RegionWidth"] = "regionWidth";
	    // DPI_RemovedDatasourceCount, having type int
	    ParameterId["RemovedDatasourceCount"] = "removedDatasourceCount";
	    // DPI_RemovedSheetCount, having type int
	    ParameterId["RemovedSheetCount"] = "removedSheetCount";
	    // DPI_ResidualDF, having type int
	    ParameterId["ResidualDF"] = "residualDf";
	    // DPI_ResizeColumn, having type int
	    ParameterId["ResizeColumn"] = "resizeColumn";
	    // DPI_RestartEveryIndex, having type int
	    ParameterId["RestartEveryIndex"] = "restartEveryIndex";
	    // DPI_RightMargin, having type int
	    ParameterId["RightMargin"] = "rightMargin";
	    // DPI_RowCount, having type int
	    ParameterId["RowCount"] = "rowCount";
	    // DPI_RowHeight, having type int
	    ParameterId["RowHeight"] = "rowHeight";
	    // DPI_RowInnerLevels, having type int
	    ParameterId["RowInnerLevels"] = "rowInnerLevels";
	    // DPI_RowLevels, having type int
	    ParameterId["RowLevels"] = "rowLevels";
	    // DPI_RowNumber, having type int
	    ParameterId["RowNumber"] = "rowNumber";
	    // DPI_RowWidth, having type int
	    ParameterId["RowWidth"] = "rowWidth";
	    // DPI_SecondValueIndex, having type int
	    ParameterId["SecondValueIndex"] = "secondValueIndex";
	    // DPI_SecondsAgo, having type int
	    ParameterId["SecondsAgo"] = "secondsAgo";
	    // DPI_SelectionEnd, having type int
	    ParameterId["SelectionEnd"] = "selectionEnd";
	    // DPI_SelectionStart, having type int
	    ParameterId["SelectionStart"] = "selectionStart";
	    // DPI_ShapePaletteID, having type int
	    ParameterId["ShapePaletteID"] = "shapePaletteId";
	    // DPI_SheetIndex, having type int
	    ParameterId["SheetIndex"] = "sheetIndex";
	    // DPI_ShelfPositionIndex, having type int
	    ParameterId["ShelfPositionIndex"] = "shelfPosIndex";
	    // DPI_Size, having type int
	    ParameterId["Size"] = "size";
	    // DPI_SizeDifference, having type int
	    ParameterId["SizeDifference"] = "sizeDelta";
	    // DPI_SnapDistance, having type int
	    ParameterId["SnapDistance"] = "snapDistance";
	    // DPI_SnapLocation, having type int
	    ParameterId["SnapLocation"] = "snapLocation";
	    // DPI_SolveOrder, having type int
	    ParameterId["SolveOrder"] = "solveOrder";
	    // DPI_SpaceBetweenPoints, having type int
	    ParameterId["SpaceBetweenPoints"] = "spaceBetweenPoints";
	    // DPI_StepSize, having type int
	    ParameterId["StepSize"] = "stepSize";
	    // DPI_Steps, having type int
	    ParameterId["Steps"] = "steps";
	    // DPI_StoryPointIndex, having type int
	    ParameterId["StoryPointIndex"] = "currentStorypointIndex";
	    // DPI_StyleLen, having type int
	    ParameterId["StyleLen"] = "tokenLengthForStyle";
	    // DPI_StylePos, having type int
	    ParameterId["StylePos"] = "tokenPositionForStyle";
	    // DPI_SwatchAreaWidth, having type int
	    ParameterId["SwatchAreaWidth"] = "swatchWidth";
	    // DPI_TargetBinId, having type int
	    ParameterId["TargetBinId"] = "targetBinId";
	    // DPI_TargetPtX, having type int
	    ParameterId["TargetPtX"] = "targetX";
	    // DPI_TargetPtY, having type int
	    ParameterId["TargetPtY"] = "targetY";
	    // DPI_TileFactor, having type int
	    ParameterId["TileFactor"] = "tileFactor";
	    // DPI_TitleHeight, having type int
	    ParameterId["TitleHeight"] = "titleHeight";
	    // DPI_TitleWidth, having type int
	    ParameterId["TitleWidth"] = "titleWidth";
	    // DPI_TopBottomBorderWidth, having type int
	    ParameterId["TopBottomBorderWidth"] = "topBottomBorderWidth";
	    // DPI_UIAutomationLineSize, having type int
	    ParameterId["UIAutomationLineSize"] = "uiAutomationLineSize";
	    // DPI_UIAutomationPageSize, having type int
	    ParameterId["UIAutomationPageSize"] = "uiAutomationPageSize";
	    // DPI_UID, having type int
	    ParameterId["UID"] = "uid";
	    // DPI_UpperBound, having type int
	    ParameterId["UpperBound"] = "upperBound";
	    // DPI_VertTextCell, having type int
	    ParameterId["VertTextCell"] = "vertTextCell";
	    // DPI_Width, having type int
	    ParameterId["Width"] = "w";
	    // DPI_X, having type int
	    ParameterId["X"] = "x";
	    // DPI_Y, having type int
	    ParameterId["Y"] = "y";
	    // DPI_ZOrder, having type int
	    ParameterId["ZOrder"] = "zOrder";
	    // DPI_ZoneIconIndex, having type int
	    ParameterId["ZoneIconIndex"] = "zoneIconIndex";
	    // DPI_AliasIndices, having type int[]
	    ParameterId["AliasIndices"] = "aliasIndices";
	    // DPI_AnovaDFVec, having type int[]
	    ParameterId["AnovaDFVec"] = "anovaDfVector";
	    // DPI_ColumnIndices, having type int[]
	    ParameterId["ColumnIndices"] = "columnIndices";
	    // DPI_DrillFieldIndices, having type int[]
	    ParameterId["DrillFieldIndices"] = "drillFieldIndices";
	    // DPI_FilterMaxIndices, having type int[]
	    ParameterId["FilterMaxIndices"] = "filterMaxIndices";
	    // DPI_FilterMinIndices, having type int[]
	    ParameterId["FilterMinIndices"] = "filterMinIndices";
	    // DPI_FilterValuesIndices, having type int[]
	    ParameterId["FilterValuesIndices"] = "filterValueIndices";
	    // DPI_FormatStringIndices, having type int[]
	    ParameterId["FormatStringIndices"] = "formatstrIndices";
	    // DPI_FormattedValIndices, having type int[]
	    ParameterId["FormattedValIndices"] = "formatValIdxs";
	    // DPI_PaletteIndices, having type int[]
	    ParameterId["PaletteIndices"] = "palettesIndices";
	    // DPI_PaneIndices, having type int[]
	    ParameterId["PaneIndices"] = "paneIndices";
	    // DPI_Points, having type int[]
	    ParameterId["Points"] = "points";
	    // DPI_QuickFilterSettings, having type int[]
	    ParameterId["QuickFilterSettings"] = "quickFilterSettings";
	    // DPI_SelectedIndices, having type int[]
	    ParameterId["SelectedIndices"] = "selectedIndices";
	    // DPI_ShelfPositionIndices, having type int[]
	    ParameterId["ShelfPositionIndices"] = "shelfPosIndices";
	    // DPI_TileBox, having type int[]
	    ParameterId["TileBox"] = "tileBox";
	    // DPI_TrailOverride, having type int[]
	    ParameterId["TrailOverride"] = "trailOverride";
	    // DPI_UIDs, having type int[]
	    ParameterId["UIDs"] = "uids";
	    // DPI_ValueIndices, having type int[]
	    ParameterId["ValueIndices"] = "valueIndices";
	    // DPI_XCellOffsets, having type int[]
	    ParameterId["XCellOffsets"] = "xCellOffsets";
	    // DPI_XPixelOffsets, having type int[]
	    ParameterId["XPixelOffsets"] = "xPixelOffsets";
	    // DPI_YCellOffsets, having type int[]
	    ParameterId["YCellOffsets"] = "yCellOffsets";
	    // DPI_YPixelOffsets, having type int[]
	    ParameterId["YPixelOffsets"] = "yPixelOffsets";
	    // DPI_IntMap, having type Dictionary(of int)
	    ParameterId["IntMap"] = "intMap";
	    // DPI_SelectedAuthSettingIndices, having type Dictionary(of int)
	    ParameterId["SelectedAuthSettingIndices"] = "selectedAuthSettingIndices";
	    // DPI_ActiveStoryPointID, having type uint
	    ParameterId["ActiveStoryPointID"] = "activeStoryPointId";
	    // DPI_ActiveZoneID, having type uint
	    ParameterId["ActiveZoneID"] = "activeZoneId";
	    // DPI_ActualSize, having type uint
	    ParameterId["ActualSize"] = "actualSize";
	    // DPI_AddInDebugPort, having type uint
	    ParameterId["AddInDebugPort"] = "addInDebugPort";
	    // DPI_AggregationIndex, having type uint
	    ParameterId["AggregationIndex"] = "aggregationIndex";
	    // DPI_AnnotationID, having type uint
	    ParameterId["AnnotationID"] = "annotationId";
	    // DPI_AssignedAliasCount, having type uint
	    ParameterId["AssignedAliasCount"] = "assignedAliasCount";
	    // DPI_CapabilityId, having type uint
	    ParameterId["CapabilityId"] = "capabilityId";
	    // DPI_CaretIndex, having type uint
	    ParameterId["CaretIndex"] = "caretIndex";
	    // DPI_CellID, having type uint
	    ParameterId["CellID"] = "cellId";
	    // DPI_ColumnIndex, having type uint
	    ParameterId["ColumnIndex"] = "columnIndex";
	    // DPI_CommandID, having type uint
	    ParameterId["CommandID"] = "id";
	    // DPI_CommandIndex, having type uint
	    ParameterId["CommandIndex"] = "index";
	    // DPI_ControllerId, having type uint
	    ParameterId["ControllerId"] = "controllerId";
	    // DPI_Count, having type uint
	    ParameterId["Count"] = "count";
	    // DPI_URowCount, having type uint
	    ParameterId["URowCount"] = "uRowCount";
	    // DPI_UColumnCount, having type uint
	    ParameterId["UColumnCount"] = "uColumnCount";
	    // DPI_CurrentPage, having type uint
	    ParameterId["CurrentPage"] = "currentPage";
	    // DPI_DatePeriodsCount, having type uint
	    ParameterId["DatePeriodsCount"] = "datePeriodsCount";
	    // DPI_Decimals, having type uint
	    ParameterId["Decimals"] = "decimals";
	    // DPI_DefaultHeight, having type uint
	    ParameterId["DefaultHeight"] = "defaultHeight";
	    // DPI_DefaultItem, having type uint
	    ParameterId["DefaultItem"] = "defaultItem";
	    // DPI_DefaultWidth, having type uint
	    ParameterId["DefaultWidth"] = "defaultWidth";
	    // DPI_Depth, having type uint
	    ParameterId["Depth"] = "depth";
	    // DPI_DetailID, having type uint
	    ParameterId["DetailID"] = "detailId";
	    // DPI_DrillLevel, having type uint
	    ParameterId["DrillLevel"] = "drillLevel";
	    // DPI_DuplicateIndex, having type uint
	    ParameterId["DuplicateIndex"] = "duplicateIndex";
	    // DPI_EndIndex, having type uint
	    ParameterId["EndIndex"] = "endIndex";
	    // DPI_FieldIconIdx, having type uint
	    ParameterId["FieldIconIdx"] = "fieldIconIdx";
	    // DPI_FilterLevel, having type uint
	    ParameterId["FilterLevel"] = "filterLevel";
	    // DPI_FilterTileSize, having type uint
	    ParameterId["FilterTileSize"] = "filterTileSize";
	    // DPI_FiscalYearStart, having type uint
	    ParameterId["FiscalYearStart"] = "fiscalYearStart";
	    // DPI_FitPagesAcross, having type uint
	    ParameterId["FitPagesAcross"] = "pageFitHorizontal";
	    // DPI_FitPagesDown, having type uint
	    ParameterId["FitPagesDown"] = "pageFitVertical";
	    // DPI_FixedIndex, having type uint
	    ParameterId["FixedIndex"] = "fixedIndex";
	    // DPI_FlipboardZoneID, having type uint
	    ParameterId["FlipboardZoneID"] = "flipboardZoneId";
	    // DPI_ForecastAutoRangeSize, having type uint
	    ParameterId["ForecastAutoRangeSize"] = "forecastAutoRangeSize";
	    // DPI_ForecastEndOfRange, having type uint
	    ParameterId["ForecastEndOfRange"] = "forecastEndOfRange";
	    // DPI_ForecastIgnoreLast, having type uint
	    ParameterId["ForecastIgnoreLast"] = "forecastIgnoreLast";
	    // DPI_ForecastNextRangeSize, having type uint
	    ParameterId["ForecastNextRangeSize"] = "forecastNextRangeSize";
	    // DPI_GroupFlags, having type uint
	    ParameterId["GroupFlags"] = "groupFlag";
	    // DPI_HierarchyLevels, having type uint
	    ParameterId["HierarchyLevels"] = "hierarchyLevels";
	    // DPI_HierarchyMemberId, having type uint
	    ParameterId["HierarchyMemberId"] = "hierarchyMemberId";
	    // DPI_HitTestFlags, having type uint
	    ParameterId["HitTestFlags"] = "hitTestFlags";
	    // DPI_ImageHeight, having type uint
	    ParameterId["ImageHeight"] = "imageHeight";
	    // DPI_ImageWidth, having type uint
	    ParameterId["ImageWidth"] = "imageWidth";
	    // DPI_ItemIndex, having type uint
	    ParameterId["ItemIndex"] = "itemIndex";
	    // DPI_ItemIndex1, having type uint
	    ParameterId["ItemIndex1"] = "itemIndex1";
	    // DPI_LineHeight, having type uint
	    ParameterId["LineHeight"] = "lineHeight";
	    // DPI_MapIntermediateLevels, having type uint
	    ParameterId["MapIntermediateLevels"] = "mapIntermediateLevels";
	    // DPI_MapWorldRepeats, having type uint
	    ParameterId["MapWorldRepeats"] = "mapWorldRepeats";
	    // DPI_MaxAlpha, having type uint
	    ParameterId["MaxAlpha"] = "maxAlpha";
	    // DPI_MaxHeight, having type uint
	    ParameterId["MaxHeight"] = "maxHeight";
	    // DPI_MaxNumberWebListItems, having type uint
	    ParameterId["MaxNumberWebListItems"] = "maxNumberWebListItems";
	    // DPI_MaxPrevOrNextValues, having type uint
	    ParameterId["MaxPrevOrNextValues"] = "maxPrevOrNextValues";
	    // DPI_MaxRows, having type uint
	    ParameterId["MaxRows"] = "maxRows";
	    // DPI_MaxTransparency, having type uint
	    ParameterId["MaxTransparency"] = "colorMaxTransparencyValue";
	    // DPI_MaxWidth, having type uint
	    ParameterId["MaxWidth"] = "maxWidth";
	    // DPI_MinColumns, having type uint
	    ParameterId["MinColumns"] = "minColumns";
	    // DPI_MinHeight, having type uint
	    ParameterId["MinHeight"] = "minHeight";
	    // DPI_MinPrevOrNextValues, having type uint
	    ParameterId["MinPrevOrNextValues"] = "minPrevOrNextValues";
	    // DPI_MinTransparency, having type uint
	    ParameterId["MinTransparency"] = "colorMinTransparencyValue";
	    // DPI_MinWidth, having type uint
	    ParameterId["MinWidth"] = "minWidth";
	    // DPI_NestedCalcsIndex, having type uint
	    ParameterId["NestedCalcsIndex"] = "nestedCalcsIndex";
	    // DPI_NextValues, having type uint
	    ParameterId["NextValues"] = "nextValues";
	    // DPI_NodeLevel, having type uint
	    ParameterId["NodeLevel"] = "nodeLevel";
	    // DPI_NumHighlighted, having type uint
	    ParameterId["NumHighlighted"] = "numHighlighted";
	    // DPI_NumberOfNextValues, having type uint
	    ParameterId["NumberOfNextValues"] = "numberOfNextValues";
	    // DPI_NumberOfPrevValues, having type uint
	    ParameterId["NumberOfPrevValues"] = "numberOfPrevValues";
	    // DPI_ObjectID, having type uint
	    ParameterId["ObjectID"] = "objectId";
	    // DPI_OrderingTypeIndex, having type uint
	    ParameterId["OrderingTypeIndex"] = "orderingTypeIndex";
	    // DPI_PageCount, having type uint
	    ParameterId["PageCount"] = "pageCount";
	    // DPI_PageFadeEnd, having type uint
	    ParameterId["PageFadeEnd"] = "fadeEnd";
	    // DPI_PageFadeStart, having type uint
	    ParameterId["PageFadeStart"] = "fadeStart";
	    // DPI_PageIndex, having type uint
	    ParameterId["PageIndex"] = "pageIndex";
	    // DPI_PageNumber, having type uint
	    ParameterId["PageNumber"] = "pageNumber";
	    // DPI_PageScalePercent, having type uint
	    ParameterId["PageScalePercent"] = "pageScalePercent";
	    // DPI_PageTrailLength, having type uint
	    ParameterId["PageTrailLength"] = "historyLength";
	    // DPI_PaletteFlagsVal, having type uint
	    ParameterId["PaletteFlagsVal"] = "paletteFlagsVal";
	    // DPI_PaneIndex, having type uint
	    ParameterId["PaneIndex"] = "paneIndex";
	    // DPI_ParamCtrlDisplayFlags, having type uint
	    ParameterId["ParamCtrlDisplayFlags"] = "paramDisplayFlags";
	    // DPI_ParentZoneID, having type uint
	    ParameterId["ParentZoneID"] = "parentZoneId";
	    // DPI_PercentileParam, having type uint
	    ParameterId["PercentileParam"] = "percentileParam";
	    // DPI_PrevValues, having type uint
	    ParameterId["PrevValues"] = "prevValues";
	    // DPI_QRGBColor, having type uint
	    ParameterId["QRGBColor"] = "qrgbColor";
	    // DPI_RangeN, having type uint
	    ParameterId["RangeN"] = "rangeN";
	    // DPI_RankTypeIndex, having type uint
	    ParameterId["RankTypeIndex"] = "rankTypeIndex";
	    // DPI_RenderComplexity, having type uint
	    ParameterId["RenderComplexity"] = "renderComplexityLimit";
	    // DPI_RowIndex, having type uint
	    ParameterId["RowIndex"] = "rowIndex";
	    // DPI_SelectedAuthSettingIndex, having type uint
	    ParameterId["SelectedAuthSettingIndex"] = "selectedAuthSettingIndex";
	    // DPI_SelectedFullScheduleIndex, having type uint
	    ParameterId["SelectedFullScheduleIndex"] = "selectedFullScheduleIndex";
	    // DPI_SelectedIncrScheduleIndex, having type uint
	    ParameterId["SelectedIncrScheduleIndex"] = "selectedIncrScheduleIndex";
	    // DPI_SelectedPublishChoiceIndex, having type uint
	    ParameterId["SelectedPublishChoiceIndex"] = "selectedPublishChoiceIndex";
	    // DPI_SelectedMemberCount, having type uint
	    ParameterId["SelectedMemberCount"] = "selectedMemberCount";
	    // DPI_ShapeID, having type uint
	    ParameterId["ShapeID"] = "shapeId";
	    // DPI_SheetUseCount, having type uint
	    ParameterId["SheetUseCount"] = "useCount";
	    // DPI_ShelfItemID, having type uint
	    ParameterId["ShelfItemID"] = "shelfItemId";
	    // DPI_SigFigs, having type uint
	    ParameterId["SigFigs"] = "sigFigs";
	    // DPI_SortAggIndex, having type uint
	    ParameterId["SortAggIndex"] = "sortAggIndvValues";
	    // DPI_SortColumnIndex, having type uint
	    ParameterId["SortColumnIndex"] = "sortColumnIndex";
	    // DPI_SortDirectionIndex, having type uint
	    ParameterId["SortDirectionIndex"] = "sortDirectionIndex";
	    // DPI_SortFieldIndex, having type uint
	    ParameterId["SortFieldIndex"] = "sortFieldIndex";
	    // DPI_StartIndex, having type uint
	    ParameterId["StartIndex"] = "startIndex";
	    // DPI_StartOfWeek, having type uint
	    ParameterId["StartOfWeek"] = "startOfWeek";
	    // DPI_StoryPointID, having type uint
	    ParameterId["StoryPointID"] = "storyPointId";
	    // DPI_TableCalcTypeIndex, having type uint
	    ParameterId["TableCalcTypeIndex"] = "tableCalcTypeIndex";
	    // DPI_TableCalcTypesUsed, having type uint
	    ParameterId["TableCalcTypesUsed"] = "tableCalcTypesUsed";
	    // DPI_TemplateIndex, having type uint
	    ParameterId["TemplateIndex"] = "templateIndex";
	    // DPI_TileCount, having type uint
	    ParameterId["TileCount"] = "tileCount";
	    // DPI_TimeoutSeconds, having type uint
	    ParameterId["TimeoutSeconds"] = "timeoutSeconds";
	    // DPI_TopN, having type uint
	    ParameterId["TopN"] = "topN";
	    // DPI_TotalNumberOfItemsInSet, having type uint
	    ParameterId["TotalNumberOfItemsInSet"] = "totalNumberOfItemsInSet";
	    // DPI_TotalMemberCount, having type uint
	    ParameterId["TotalMemberCount"] = "totalMemberCount";
	    // DPI_Transparency, having type uint
	    ParameterId["Transparency"] = "colorTransparencyValue";
	    // DPI_TupleID, having type uint
	    ParameterId["TupleID"] = "tupleId";
	    // DPI_UIndex, having type uint
	    ParameterId["UIndex"] = "uindex";
	    // DPI_UndoPosition, having type uint
	    ParameterId["UndoPosition"] = "undoPosition";
	    // DPI_UnsignedWidth, having type uint
	    ParameterId["UnsignedWidth"] = "uw";
	    // DPI_UnsignedWidthBottom, having type uint
	    ParameterId["UnsignedWidthBottom"] = "uwb";
	    // DPI_UnsignedWidthLeft, having type uint
	    ParameterId["UnsignedWidthLeft"] = "uwl";
	    // DPI_UnsignedWidthRight, having type uint
	    ParameterId["UnsignedWidthRight"] = "uwr";
	    // DPI_UnsignedWidthTop, having type uint
	    ParameterId["UnsignedWidthTop"] = "uwt";
	    // DPI_ValueIndex, having type uint
	    ParameterId["ValueIndex"] = "valueIndex";
	    // DPI_ValueInt, having type uint
	    ParameterId["ValueInt"] = "valueInt";
	    // DPI_WorldOffset, having type uint
	    ParameterId["WorldOffset"] = "worldOffset";
	    // DPI_XDuplicateIndex, having type uint
	    ParameterId["XDuplicateIndex"] = "xDuplicateIndex";
	    // DPI_XIndex, having type uint
	    ParameterId["XIndex"] = "xIndex";
	    // DPI_YDuplicateIndex, having type uint
	    ParameterId["YDuplicateIndex"] = "yDuplicateIndex";
	    // DPI_YIndex, having type uint
	    ParameterId["YIndex"] = "yIndex";
	    // DPI_ZoneID, having type uint
	    ParameterId["ZoneID"] = "zoneId";
	    // DPI_ZoneZOrder, having type uint
	    ParameterId["ZoneZOrder"] = "zoneZOrder";
	    // DPI_ComponentID, having type uint
	    ParameterId["ComponentID"] = "componentId";
	    // DPI_NonThreadPoolUseCount, having type uint
	    ParameterId["NonThreadPoolUseCount"] = "nonThreadPoolUseCount";
	    // DPI_AddressingIndices, having type uint[]
	    ParameterId["AddressingIndices"] = "addressingIndices";
	    // DPI_AddressingInvalidIndices, having type uint[]
	    ParameterId["AddressingInvalidIndices"] = "addressingInvalidIndices";
	    // DPI_ChildZoneIds, having type uint[]
	    ParameterId["ChildZoneIds"] = "childZoneIds";
	    // DPI_ColorList, having type uint[]
	    ParameterId["ColorList"] = "colorList";
	    // DPI_DuplicateIndices, having type uint[]
	    ParameterId["DuplicateIndices"] = "duplicateIndices";
	    // DPI_FilterAddIndices, having type uint[]
	    ParameterId["FilterAddIndices"] = "filterAddIndices";
	    // DPI_FilterIndices, having type uint[]
	    ParameterId["FilterIndices"] = "filterIndices";
	    // DPI_FilterLevelAdd, having type uint[]
	    ParameterId["FilterLevelAdd"] = "filterLevelAdd";
	    // DPI_FilterLevelRemove, having type uint[]
	    ParameterId["FilterLevelRemove"] = "filterLevelRemove";
	    // DPI_FilterLevels, having type uint[]
	    ParameterId["FilterLevels"] = "filterLevels";
	    // DPI_FilterRemoveIndices, having type uint[]
	    ParameterId["FilterRemoveIndices"] = "filterRemoveIndices";
	    // DPI_FixedValues, having type uint[]
	    ParameterId["FixedValues"] = "fixedValues";
	    // DPI_HierarchyMemberIdList, having type uint[]
	    ParameterId["HierarchyMemberIdList"] = "hierarchyMemberIdList";
	    // DPI_InvalidIndices, having type uint[]
	    ParameterId["InvalidIndices"] = "invalidIndices";
	    // DPI_ItemIndices, having type uint[]
	    ParameterId["ItemIndices"] = "itemIndices";
	    // DPI_LineTupleIDs, having type uint[]
	    ParameterId["LineTupleIDs"] = "lineTupleIds";
	    // DPI_ObjectIDs, having type uint[]
	    ParameterId["ObjectIDs"] = "objectIds";
	    // DPI_PageIndices, having type uint[]
	    ParameterId["PageIndices"] = "pageIndices";
	    // DPI_QRGB, having type uint[]
	    ParameterId["QRGB"] = "qrgbList";
	    // DPI_QRGBColors, having type uint[]
	    ParameterId["QRGBColors"] = "qrgbColors";
	    // DPI_RefLineID, having type uint[]
	    ParameterId["RefLineID"] = "reflineId";
	    // DPI_ShapeIDs, having type uint[]
	    ParameterId["ShapeIDs"] = "shapeIds";
	    // DPI_ShelfSelection, having type uint[]
	    ParameterId["ShelfSelection"] = "shelfSelection";
	    // DPI_StoryPointIDs, having type uint[]
	    ParameterId["StoryPointIDs"] = "storyPointIds";
	    // DPI_TupleIDs, having type uint[]
	    ParameterId["TupleIDs"] = "tupleIds";
	    // DPI_Widths, having type uint[]
	    ParameterId["Widths"] = "widths";
	    // DPI_UintMap, having type Dictionary(of uint32_t)
	    ParameterId["UintMap"] = "uintMap";
	    // DPI_Alpha, having type float
	    ParameterId["Alpha"] = "alpha";
	    // DPI_Angle, having type float
	    ParameterId["Angle"] = "angle";
	    // DPI_AutomaticDrillValueInVector, having type float
	    ParameterId["AutomaticDrillValueInVector"] = "automaticDrillValueInVector";
	    // DPI_DevicePixelRatio, having type float
	    ParameterId["DevicePixelRatio"] = "devicePixelRatio";
	    // DPI_Distance, having type float
	    ParameterId["Distance"] = "distance";
	    // DPI_FloatX, having type float
	    ParameterId["FloatX"] = "floatX";
	    // DPI_FloatY, having type float
	    ParameterId["FloatY"] = "floatY";
	    // DPI_FogDesaturation, having type float
	    ParameterId["FogDesaturation"] = "fogDesaturation";
	    // DPI_MarkScale, having type float
	    ParameterId["MarkScale"] = "markScale";
	    // DPI_MarkSizeInPixelUnits, having type float
	    ParameterId["MarkSizeInPixelUnits"] = "markSizeInPixelUnits";
	    // DPI_PointSize, having type float
	    ParameterId["PointSize"] = "pointSize";
	    // DPI_StrokeWidth, having type float
	    ParameterId["StrokeWidth"] = "strokeWidth";
	    // DPI_TextRegionOrientation, having type float
	    ParameterId["TextRegionOrientation"] = "orientation";
	    // DPI_TransformAngle, having type float
	    ParameterId["TransformAngle"] = "transformAngle";
	    // DPI_ZoomLevel, having type float
	    ParameterId["ZoomLevel"] = "zoomLevel";
	    // DPI_OldZoomLevel, having type float
	    ParameterId["OldZoomLevel"] = "oldZoomLevel";
	    // DPI_NewZoomLevel, having type float
	    ParameterId["NewZoomLevel"] = "newZoomLevel";
	    // DPI_AspectRatio, having type float
	    ParameterId["AspectRatio"] = "aspectRatio";
	    // DPI_BottomPrintMargin, having type float
	    ParameterId["BottomPrintMargin"] = "bottomPrintMargin";
	    // DPI_EarthRadius, having type float
	    ParameterId["EarthRadius"] = "earthRadius";
	    // DPI_FloatHeight, having type float
	    ParameterId["FloatHeight"] = "floatHeight";
	    // DPI_FloatLeft, having type float
	    ParameterId["FloatLeft"] = "floatLeft";
	    // DPI_FloatRadius, having type float
	    ParameterId["FloatRadius"] = "floatRadius";
	    // DPI_FloatTop, having type float
	    ParameterId["FloatTop"] = "floatTop";
	    // DPI_FloatWidth, having type float
	    ParameterId["FloatWidth"] = "floatWidth";
	    // DPI_LeftPrintMargin, having type float
	    ParameterId["LeftPrintMargin"] = "leftPrintMargin";
	    // DPI_MapCenterLatitude, having type float
	    ParameterId["MapCenterLatitude"] = "mapCenterLatitude";
	    // DPI_MapCenterLongitude, having type float
	    ParameterId["MapCenterLongitude"] = "mapCenterLongitude";
	    // DPI_MapDisplayScale, having type float
	    ParameterId["MapDisplayScale"] = "mapDisplayScale";
	    // DPI_MapMaxStretch, having type float
	    ParameterId["MapMaxStretch"] = "mapMaxStretch";
	    // DPI_MapMaxZoom, having type float
	    ParameterId["MapMaxZoom"] = "mapMaxZoom";
	    // DPI_MapMinShrink, having type float
	    ParameterId["MapMinShrink"] = "mapMinShrink";
	    // DPI_MapMinZoom, having type float
	    ParameterId["MapMinZoom"] = "mapMinZoom";
	    // DPI_MapRequestZoom, having type float
	    ParameterId["MapRequestZoom"] = "mapRequestZoom";
	    // DPI_MapWashout, having type float
	    ParameterId["MapWashout"] = "mapWashout";
	    // DPI_MaxLatitude, having type float
	    ParameterId["MaxLatitude"] = "maxLatitude";
	    // DPI_MaxLongitude, having type float
	    ParameterId["MaxLongitude"] = "maxLongitude";
	    // DPI_MinLatitude, having type float
	    ParameterId["MinLatitude"] = "minLatitude";
	    // DPI_MinLongitude, having type float
	    ParameterId["MinLongitude"] = "minLongitude";
	    // DPI_RightPrintMargin, having type float
	    ParameterId["RightPrintMargin"] = "rightPrintMargin";
	    // DPI_TopPrintMargin, having type float
	    ParameterId["TopPrintMargin"] = "topPrintMargin";
	    // DPI_UIAutomationMaximum, having type float
	    ParameterId["UIAutomationMaximum"] = "uiAutomationMaximum";
	    // DPI_UIAutomationMinimum, having type float
	    ParameterId["UIAutomationMinimum"] = "uiAutomationMinimum";
	    // DPI_UIAutomationOffset, having type float
	    ParameterId["UIAutomationOffset"] = "uiAutomationOffset";
	    // DPI_UnitDivisor, having type float
	    ParameterId["UnitDivisor"] = "unitDivisor";
	    // DPI_UnitTransition, having type float
	    ParameterId["UnitTransition"] = "unitTransition";
	    // DPI_AutomaticDrillIdx, having type float[]
	    ParameterId["AutomaticDrillIdx"] = "automaticDrillIdx";
	    // DPI_DestinationBox, having type float[]
	    ParameterId["DestinationBox"] = "destBox";
	    // DPI_LowerEnd, having type float[]
	    ParameterId["LowerEnd"] = "lowerEnd";
	    // DPI_OppositeAxis, having type float[]
	    ParameterId["OppositeAxis"] = "oppositeAxis";
	    // DPI_PointsF, having type float[]
	    ParameterId["PointsF"] = "pointsF";
	    // DPI_SourceBox, having type float[]
	    ParameterId["SourceBox"] = "sourceBox";
	    // DPI_TransformOffset, having type float[]
	    ParameterId["TransformOffset"] = "transformOffset";
	    // DPI_TransformScale, having type float[]
	    ParameterId["TransformScale"] = "transformScale";
	    // DPI_UpperEnd, having type float[]
	    ParameterId["UpperEnd"] = "upperEnd";
	    // DPI_FloatMap, having type Dictionary(of float)
	    ParameterId["FloatMap"] = "floatMap";
	    // DPI_BGSS, having type double
	    ParameterId["BGSS"] = "betweenGroupSumOfSquares";
	    // DPI_ConfidenceLevel, having type double
	    ParameterId["ConfidenceLevel"] = "confidenceLevel";
	    // DPI_ConfidencePercentage, having type double
	    ParameterId["ConfidencePercentage"] = "confidencePercentage";
	    // DPI_DoubleLeft, having type double
	    ParameterId["DoubleLeft"] = "doubleLeft";
	    // DPI_DoubleTop, having type double
	    ParameterId["DoubleTop"] = "doubleTop";
	    // DPI_DoubleValue, having type double
	    ParameterId["DoubleValue"] = "doubleValue";
	    // DPI_DoubleX, having type double
	    ParameterId["DoubleX"] = "doubleX";
	    // DPI_DoubleY, having type double
	    ParameterId["DoubleY"] = "doubleY";
	    // DPI_FStatistic, having type double
	    ParameterId["FStatistic"] = "fStatistic";
	    // DPI_FilterRangeMax, having type double
	    ParameterId["FilterRangeMax"] = "filterRangeMax";
	    // DPI_FilterRangeMin, having type double
	    ParameterId["FilterRangeMin"] = "filterRangeMin";
	    // DPI_GeographicSearchCandidateScore, having type double
	    ParameterId["GeographicSearchCandidateScore"] = "geographicSearchCandidateScore";
	    // DPI_HeightD, having type double
	    ParameterId["HeightD"] = "height";
	    // DPI_InflectionFraction, having type double
	    ParameterId["InflectionFraction"] = "inflectionFraction";
	    // DPI_InflectionValue, having type double
	    ParameterId["InflectionValue"] = "inflectionValue";
	    // DPI_MSE, having type double
	    ParameterId["MSE"] = "meanSquaredError";
	    // DPI_MSM, having type double
	    ParameterId["MSM"] = "meanSquaredModel";
	    // DPI_MapScaleMarginOfError, having type double
	    ParameterId["MapScaleMarginOfError"] = "mapScaleMarginOfError";
	    // DPI_MarkSize, having type double
	    ParameterId["MarkSize"] = "markSize";
	    // DPI_MaxMarkSize, having type double
	    ParameterId["MaxMarkSize"] = "maxMarkSize";
	    // DPI_MinMarkSize, having type double
	    ParameterId["MinMarkSize"] = "minMarkSize";
	    // DPI_NotchPosition, having type double
	    ParameterId["NotchPosition"] = "notchPosition";
	    // DPI_NotchValue, having type double
	    ParameterId["NotchValue"] = "notchValue";
	    // DPI_PValue, having type double
	    ParameterId["PValue"] = "pValue";
	    // DPI_PercentDimensions, having type double
	    ParameterId["PercentDimensions"] = "percentDimensions";
	    // DPI_PercentGroups, having type double
	    ParameterId["PercentGroups"] = "percentGroups";
	    // DPI_PercentMeasures, having type double
	    ParameterId["PercentMeasures"] = "percentMeasures";
	    // DPI_RSquared, having type double
	    ParameterId["RSquared"] = "rSquared";
	    // DPI_SSE, having type double
	    ParameterId["SSE"] = "sumSquaredError";
	    // DPI_SSM, having type double
	    ParameterId["SSM"] = "sumSquaredModel";
	    // DPI_StandardError, having type double
	    ParameterId["StandardError"] = "standardError";
	    // DPI_TSS, having type double
	    ParameterId["TSS"] = "totalSumOfSquares";
	    // DPI_WGSS, having type double
	    ParameterId["WGSS"] = "withinGroupSumOfSquares";
	    // DPI_WidthD, having type double
	    ParameterId["WidthD"] = "width";
	    // DPI_ZoomFactor, having type double
	    ParameterId["ZoomFactor"] = "zoomFactor";
	    // DPI_CoefficientPValueVec, having type double[]
	    ParameterId["CoefficientPValueVec"] = "coefficientPValueVector";
	    // DPI_CoefficientStdErrVec, having type double[]
	    ParameterId["CoefficientStdErrVec"] = "coefficientStdErrorVector";
	    // DPI_CoefficientTValueVec, having type double[]
	    ParameterId["CoefficientTValueVec"] = "coefficientTValueVector";
	    // DPI_CoefficientVec, having type double[]
	    ParameterId["CoefficientVec"] = "coefficientVector";
	    // DPI_FStatisticVec, having type double[]
	    ParameterId["FStatisticVec"] = "trendLineFStatisticVector";
	    // DPI_Factors, having type double[]
	    ParameterId["Factors"] = "factors";
	    // DPI_MSEVec, having type double[]
	    ParameterId["MSEVec"] = "meanSquaredErrorVector";
	    // DPI_Means, having type double[]
	    ParameterId["Means"] = "means";
	    // DPI_PValueVec, having type double[]
	    ParameterId["PValueVec"] = "pValueVector";
	    // DPI_Percentages, having type double[]
	    ParameterId["Percentages"] = "percentages";
	    // DPI_Percentiles, having type double[]
	    ParameterId["Percentiles"] = "percentiles";
	    // DPI_SSEVec, having type double[]
	    ParameterId["SSEVec"] = "sumSquaredErrorVector";
	    // DPI_StDevs, having type double[]
	    ParameterId["StDevs"] = "stdev";
	    // DPI_UnscaledMeans, having type double[]
	    ParameterId["UnscaledMeans"] = "unscaledMeans";
	    // DPI_DeltaTimeMs, having type long
	    ParameterId["DeltaTimeMs"] = "deltaTimeMs";
	    // DPI_ExtractHistoryRowCount, having type long
	    ParameterId["ExtractHistoryRowCount"] = "extractRowCount";
	    // DPI_ExtractHistoryRowsRemoved, having type long
	    ParameterId["ExtractHistoryRowsRemoved"] = "extractRowsRemoved";
	    // DPI_ExtractsSize, having type long
	    ParameterId["ExtractsSize"] = "extractsSize";
	    // DPI_OldExtractSize, having type long
	    ParameterId["OldExtractSize"] = "oldExtractSize";
	    // DPI_RowsInserted, having type long
	    ParameterId["RowsInserted"] = "rowsInserted";
	    // DPI_SampleSize, having type long
	    ParameterId["SampleSize"] = "sampleSize";
	    // DPI_SampleSpace, having type long
	    ParameterId["SampleSpace"] = "sampleSpace";
	    // DPI_ThreadPoolUseCount, having type long
	    ParameterId["ThreadPoolUseCount"] = "threadPoolUseCount";
	    // DPI_ActionId, having type string
	    ParameterId["ActionId"] = "actionId";
	    // DPI_AxisColumn, having type string
	    ParameterId["AxisColumn"] = "axisColumn";
	    // DPI_BaseColumnName, having type string
	    ParameterId["BaseColumnName"] = "baseColumnName";
	    // DPI_PairedFieldName, having type string
	    ParameterId["PairedFieldName"] = "pairedFn";
	    // DPI_FieldNameAllowEmpty, having type string
	    ParameterId["FieldNameAllowEmpty"] = "fieldNameAllowEmpty";
	    // DPI_FieldNameDisAgg, having type string
	    ParameterId["FieldNameDisAgg"] = "fnDisagg";
	    // DPI_FieldNameLocal, having type string
	    ParameterId["FieldNameLocal"] = "fieldNameLocal";
	    // DPI_FieldNamePrev, having type string
	    ParameterId["FieldNamePrev"] = "fnPrev";
	    // DPI_FieldNameSource, having type string
	    ParameterId["FieldNameSource"] = "fnSource";
	    // DPI_FieldNameTarget, having type string
	    ParameterId["FieldNameTarget"] = "fnTarget";
	    // DPI_FieldNameX, having type string
	    ParameterId["FieldNameX"] = "fnX";
	    // DPI_FieldNameY, having type string
	    ParameterId["FieldNameY"] = "fnY";
	    // DPI_FieldToSort, having type string
	    ParameterId["FieldToSort"] = "fieldToSort";
	    // DPI_GlobalFieldName, having type string
	    ParameterId["GlobalFieldName"] = "globalFieldName";
	    // DPI_HierarchyName, having type string
	    ParameterId["HierarchyName"] = "hierarchyName";
	    // DPI_InvalidAggFieldName, having type string
	    ParameterId["InvalidAggFieldName"] = "invalidAggFieldName";
	    // DPI_InvalidFieldName, having type string
	    ParameterId["InvalidFieldName"] = "invalidFieldName";
	    // DPI_LimitParameterName, having type string
	    ParameterId["LimitParameterName"] = "limitParameterName";
	    // DPI_LocalBaseColumnName, having type string
	    ParameterId["LocalBaseColumnName"] = "localBaseColumnName";
	    // DPI_MeasureName, having type string
	    ParameterId["MeasureName"] = "measureName";
	    // DPI_NestedCalcField, having type string
	    ParameterId["NestedCalcField"] = "nestedCalcFn";
	    // DPI_ParameterName, having type string
	    ParameterId["ParameterName"] = "parameterName";
	    // DPI_ReferenceParam, having type string
	    ParameterId["ReferenceParam"] = "referenceParam";
	    // DPI_ReplacementFieldName, having type string
	    ParameterId["ReplacementFieldName"] = "replacementFieldName";
	    // DPI_RHSTableAlias, having type string
	    ParameterId["RHSTableAlias"] = "rhsTableAlias";
	    // DPI_SortMeasureName, having type string
	    ParameterId["SortMeasureName"] = "sortMeasureName";
	    // DPI_UniqueName, having type string
	    ParameterId["UniqueName"] = "uniqueName";
	    // DPI_ValueColumn, having type string
	    ParameterId["ValueColumn"] = "valueColumn";
	    // DPI_PairedValueColumn, having type string
	    ParameterId["PairedValueColumn"] = "pairedValueColumn";
	    // DPI_ActionIds, having type string[]
	    ParameterId["ActionIds"] = "actionIds";
	    // DPI_AddressingValues, having type string[]
	    ParameterId["AddressingValues"] = "addressingValues";
	    // DPI_AllColumns, having type string[]
	    ParameterId["AllColumns"] = "allColumns";
	    // DPI_AtTheLevelValues, having type string[]
	    ParameterId["AtTheLevelValues"] = "atTheLevelValues";
	    // DPI_AutomaticDrillFieldName, having type string[]
	    ParameterId["AutomaticDrillFieldName"] = "automaticDrillFieldName";
	    // DPI_BlendingFieldCandidates, having type string[]
	    ParameterId["BlendingFieldCandidates"] = "blendingFieldCandidates";
	    // DPI_Columns, having type string[]
	    ParameterId["Columns"] = "columns";
	    // DPI_CurrentBlendingFields, having type string[]
	    ParameterId["CurrentBlendingFields"] = "currentBlendingFields";
	    // DPI_DimensionsToSort, having type string[]
	    ParameterId["DimensionsToSort"] = "dimensionsToSort";
	    // DPI_DrillFieldVector, having type string[]
	    ParameterId["DrillFieldVector"] = "drillFieldVector";
	    // DPI_EncodingFieldVector, having type string[]
	    ParameterId["EncodingFieldVector"] = "encodingFieldVector";
	    // DPI_FieldVector, having type string[]
	    ParameterId["FieldVector"] = "fieldVector";
	    // DPI_FilterFields, having type string[]
	    ParameterId["FilterFields"] = "filterFields";
	    // DPI_LODFieldVector, having type string[]
	    ParameterId["LODFieldVector"] = "lodFieldVector";
	    // DPI_LegendColumns, having type string[]
	    ParameterId["LegendColumns"] = "legendColumns";
	    // DPI_LegendNames, having type string[]
	    ParameterId["LegendNames"] = "legendNames";
	    // DPI_NodeColumns, having type string[]
	    ParameterId["NodeColumns"] = "nodeColumns";
	    // DPI_PageFields, having type string[]
	    ParameterId["PageFields"] = "pageFields";
	    // DPI_ParamValues, having type string[]
	    ParameterId["ParamValues"] = "paramValues";
	    // DPI_RefLineFields, having type string[]
	    ParameterId["RefLineFields"] = "reflineFields";
	    // DPI_ReferencedColumns, having type string[]
	    ParameterId["ReferencedColumns"] = "referencedColumns";
	    // DPI_RelatedFieldNames, having type string[]
	    ParameterId["RelatedFieldNames"] = "relatedFieldNames";
	    // DPI_RemoveActionResults, having type string[]
	    ParameterId["RemoveActionResults"] = "removeActionResults";
	    // DPI_ResponseVector, having type string[]
	    ParameterId["ResponseVector"] = "responseVector";
	    // DPI_RestartEveryValues, having type string[]
	    ParameterId["RestartEveryValues"] = "restartEveryValues";
	    // DPI_ResultFields, having type string[]
	    ParameterId["ResultFields"] = "resultFields";
	    // DPI_SortFieldValues, having type string[]
	    ParameterId["SortFieldValues"] = "sortFieldValues";
	    // DPI_XFields, having type string[]
	    ParameterId["XFields"] = "xFields";
	    // DPI_YFields, having type string[]
	    ParameterId["YFields"] = "yFields";
	    // DPI_ConnectionFullName, having type string
	    ParameterId["ConnectionFullName"] = "connectionFullName";
	    // DPI_ConnectionFullNames, having type string[]
	    ParameterId["ConnectionFullNames"] = "connectionFullNames";
	    // DPI_BoundDataValue, having type object
	    ParameterId["BoundDataValue"] = "boundDataValue";
	    // DPI_DataValue, having type object
	    ParameterId["DataValue"] = "dataValue";
	    // DPI_DataValueIncrement, having type object
	    ParameterId["DataValueIncrement"] = "dataValueIncrement";
	    // DPI_DataValueLowerX, having type object
	    ParameterId["DataValueLowerX"] = "dataValueLowerX";
	    // DPI_DataValueLowerY, having type object
	    ParameterId["DataValueLowerY"] = "dataValueLowerY";
	    // DPI_DataValueUpperX, having type object
	    ParameterId["DataValueUpperX"] = "dataValueUpperX";
	    // DPI_DataValueUpperY, having type object
	    ParameterId["DataValueUpperY"] = "dataValueUpperY";
	    // DPI_DefaultDataValue, having type object
	    ParameterId["DefaultDataValue"] = "defaultDataValue";
	    // DPI_MaxDataValue, having type object
	    ParameterId["MaxDataValue"] = "maxDataValue";
	    // DPI_MinDataValue, having type object
	    ParameterId["MinDataValue"] = "minDataValue";
	    // DPI_ValidatedDataValue, having type object
	    ParameterId["ValidatedDataValue"] = "validatedDataValue";
	    // DPI_BinSize, having type object
	    ParameterId["BinSize"] = "binSize";
	    // DPI_LimitCount, having type object
	    ParameterId["LimitCount"] = "limitCount";
	    // DPI_DataValueList, having type object[]
	    ParameterId["DataValueList"] = "dataValueList";
	    // DPI_FieldCaptionPair, having type FieldCaptionPairPresModel
	    ParameterId["FieldCaptionPair"] = "fieldCaptionPair";
	    // DPI_FieldCaptionPairs, having type FieldCaptionPairPresModel[]
	    ParameterId["FieldCaptionPairs"] = "fieldCaptionPairs";
	    // DPI_ParameterCaptionPairs, having type FieldCaptionPairPresModel[]
	    ParameterId["ParameterCaptionPairs"] = "parameterCaptionPairs";
	    // DPI_VaryingAttributeDimensions, having type FieldCaptionPairPresModel[]
	    ParameterId["VaryingAttributeDimensions"] = "varyingAttributeDimensions";
	    // DPI_FieldCaptionPairState, having type FieldCaptionPairStatePresModel
	    ParameterId["FieldCaptionPairState"] = "fieldCaptionPairState";
	    // DPI_FieldCaptionPairStates, having type FieldCaptionPairStatePresModel[]
	    ParameterId["FieldCaptionPairStates"] = "fieldCaptionPairStates";
	    // DPI_DatasourceCaptionPair, having type DatasourceCaptionPairPresModel
	    ParameterId["DatasourceCaptionPair"] = "datasourceCaptionPair";
	    // DPI_DatasourceCaptionPairs, having type DatasourceCaptionPairPresModel[]
	    ParameterId["DatasourceCaptionPairs"] = "datasourceCaptionPairs";
	    // DPI_SheetNameInfoPair, having type SheetNameInfoPairPresModel
	    ParameterId["SheetNameInfoPair"] = "sheetNameInfoPair";
	    // DPI_SheetNameInfoPairs, having type SheetNameInfoPairPresModel[]
	    ParameterId["SheetNameInfoPairs"] = "sheetNameInfoPairs";
	    // DPI_BGActiveColor, having type string
	    ParameterId["BGActiveColor"] = "bgActiveColor";
	    // DPI_BGColor, having type string
	    ParameterId["BGColor"] = "bgColor";
	    // DPI_BGRestColor, having type string
	    ParameterId["BGRestColor"] = "bgRestColor";
	    // DPI_BorderColor, having type string
	    ParameterId["BorderColor"] = "borderColor";
	    // DPI_BorderColorBottom, having type string
	    ParameterId["BorderColorBottom"] = "borderColorBottom";
	    // DPI_BorderColorLeft, having type string
	    ParameterId["BorderColorLeft"] = "borderColorLeft";
	    // DPI_BorderColorRight, having type string
	    ParameterId["BorderColorRight"] = "borderColorRight";
	    // DPI_BorderColorTop, having type string
	    ParameterId["BorderColorTop"] = "borderColorTop";
	    // DPI_Color, having type string
	    ParameterId["Color"] = "color";
	    // DPI_Color1, having type string
	    ParameterId["Color1"] = "color1";
	    // DPI_Color2, having type string
	    ParameterId["Color2"] = "color2";
	    // DPI_DefaultColor, having type string
	    ParameterId["DefaultColor"] = "defaultColor";
	    // DPI_DistanceFontColor, having type string
	    ParameterId["DistanceFontColor"] = "distanceFontColor";
	    // DPI_FillColor, having type string
	    ParameterId["FillColor"] = "fillColor";
	    // DPI_FogColor, having type string
	    ParameterId["FogColor"] = "fogColor";
	    // DPI_HeaderColor, having type string
	    ParameterId["HeaderColor"] = "headerColor";
	    // DPI_HighlightBGColor, having type string
	    ParameterId["HighlightBGColor"] = "highlightBgColor";
	    // DPI_HighlightTextColor, having type string
	    ParameterId["HighlightTextColor"] = "highlightTextColor";
	    // DPI_HoverColor, having type string
	    ParameterId["HoverColor"] = "hoverColor";
	    // DPI_MapAttributionFill, having type string
	    ParameterId["MapAttributionFill"] = "mapAttributionFill";
	    // DPI_MapAttributionTextColor, having type string
	    ParameterId["MapAttributionTextColor"] = "mapAttributionTextColor";
	    // DPI_MapPaneBackgroundFill, having type string
	    ParameterId["MapPaneBackgroundFill"] = "mapPaneBackgroundFill";
	    // DPI_MapScaleBorderColor, having type string
	    ParameterId["MapScaleBorderColor"] = "mapScaleBorderColor";
	    // DPI_MapScaleColor, having type string
	    ParameterId["MapScaleColor"] = "mapScaleColor";
	    // DPI_MapWaitTileFill, having type string
	    ParameterId["MapWaitTileFill"] = "mapWaitTileFill";
	    // DPI_MarkColor, having type string
	    ParameterId["MarkColor"] = "markColor";
	    // DPI_NavArrowDisabledColor, having type string
	    ParameterId["NavArrowDisabledColor"] = "navArrowDisabledColor";
	    // DPI_NavArrowHoverColor, having type string
	    ParameterId["NavArrowHoverColor"] = "navArrowHoverColor";
	    // DPI_NavArrowIdleColor, having type string
	    ParameterId["NavArrowIdleColor"] = "navArrowIdleColor";
	    // DPI_NavArrowPressedColor, having type string
	    ParameterId["NavArrowPressedColor"] = "navArrowPressedColor";
	    // DPI_PaneColor, having type string
	    ParameterId["PaneColor"] = "paneColor";
	    // DPI_PressColor, having type string
	    ParameterId["PressColor"] = "pressColor";
	    // DPI_ResizeBorderColor, having type string
	    ParameterId["ResizeBorderColor"] = "resizeBorderColor";
	    // DPI_SelectBGColor, having type string
	    ParameterId["SelectBGColor"] = "selectBgColor";
	    // DPI_SelectionTextColor, having type string
	    ParameterId["SelectionTextColor"] = "selectionTextColor";
	    // DPI_SwatchBackgroundColor, having type string
	    ParameterId["SwatchBackgroundColor"] = "swatchBgColor";
	    // DPI_SwatchBorderColor, having type string
	    ParameterId["SwatchBorderColor"] = "swatchBorderColor";
	    // DPI_TabColor, having type string
	    ParameterId["TabColor"] = "tabColor";
	    // DPI_Colors, having type string[]
	    ParameterId["Colors"] = "colors";
	    // DPI_RampColorSamples, having type string[]
	    ParameterId["RampColorSamples"] = "rampColorSamples";
	    // DPI_Pixmap, having type string
	    ParameterId["Pixmap"] = "pixmap";
	    // DPI_Image, having type string
	    ParameterId["Image"] = "image";
	    // DPI_OverlayImage, having type string
	    ParameterId["OverlayImage"] = "overlayImage";
	    // DPI_IconImage, having type string
	    ParameterId["IconImage"] = "iconImage";
	    // DPI_ImageList, having type string[]
	    ParameterId["ImageList"] = "imageList";
	    // DPI_ImageMap, having type Dictionary(of string)
	    ParameterId["ImageMap"] = "imageMap";
	    // DPI_UUID, having type object
	    ParameterId["UUID"] = "uuid";
	    // DPI_Nanoseconds, having type object
	    ParameterId["Nanoseconds"] = "nanoseconds";
	    // DPI_Microseconds, having type object
	    ParameterId["Microseconds"] = "microseconds";
	    // DPI_Milliseconds, having type object
	    ParameterId["Milliseconds"] = "milliseconds";
	    // DPI_TimeoutS, having type object
	    ParameterId["TimeoutS"] = "timeoutS";
	    // DPI_Minutes, having type object
	    ParameterId["Minutes"] = "minutes";
	    // DPI_Hours, having type object
	    ParameterId["Hours"] = "hours";
	    // DPI_CardType, having type CardType
	    ParameterId["CardType"] = "cardType";
	    // DPI_DocParameterID, having type string
	    ParameterId["DocParameterID"] = "type";
	    // DPI_ArgumentParam, having type string
	    ParameterId["ArgumentParam"] = "argumentParam";
	    // DPI_ArgumentParams, having type string[]
	    ParameterId["ArgumentParams"] = "argumentParams";
	    // DPI_ActionType, having type ActionType
	    ParameterId["ActionType"] = "actionType";
	    // DPI_AnnotateEnum, having type AnnotateEnum
	    ParameterId["AnnotateEnum"] = "annotateEnum";
	    // DPI_JoinType, having type SQLJoinType
	    ParameterId["JoinType"] = "joinType";
	    // DPI_SupportedJoinTypes, having type SQLJoinType[]
	    ParameterId["SupportedJoinTypes"] = "supportedJoinTypes";
	    // DPI_Rounding, having type Rounding
	    ParameterId["Rounding"] = "roundingEnum";
	    // DPI_BodyType, having type BodyType
	    ParameterId["BodyType"] = "bodyType";
	    // DPI_LineEnd, having type LineEnd
	    ParameterId["LineEnd"] = "lineEndEnum";
	    // DPI_LineEndSize, having type LineEndSize
	    ParameterId["LineEndSize"] = "lineEndSizeEnum";
	    // DPI_BrushSpecialFields, having type BrushSpecialFields
	    ParameterId["BrushSpecialFields"] = "specialFields";
	    // DPI_CellSizeChange, having type CellSizeChange
	    ParameterId["CellSizeChange"] = "cellSizeChange";
	    // DPI_CellType, having type CellType
	    ParameterId["CellType"] = "cellType";
	    // DPI_ConnectionAttemptResult, having type ConnectionAttemptResult
	    ParameterId["ConnectionAttemptResult"] = "connectionAttemptResult";
	    // DPI_ConnectionErrorType, having type ConnectionErrorType
	    ParameterId["ConnectionErrorType"] = "connectionErrorType";
	    // DPI_DataServerConnectionResult, having type DataServerConnectionResult
	    ParameterId["DataServerConnectionResult"] = "dsConnectionResult";
	    // DPI_DropWhen, having type DropWhen
	    ParameterId["DropWhen"] = "dropWhen";
	    // DPI_DropType, having type DropFieldResult
	    ParameterId["DropType"] = "dropType";
	    // DPI_EncodingType, having type EncodingType
	    ParameterId["EncodingType"] = "encodingType";
	    // DPI_DropdownEncodingType, having type EncodingType
	    ParameterId["DropdownEncodingType"] = "dropdownEncodingType";
	    // DPI_EncodingTypes, having type EncodingType[]
	    ParameterId["EncodingTypes"] = "encodingTypes";
	    // DPI_FieldOrderType, having type FieldOrderType
	    ParameterId["FieldOrderType"] = "fieldOrderType";
	    // DPI_FilterIconType, having type FilterIconType
	    ParameterId["FilterIconType"] = "filterIconType";
	    // DPI_FilterIconTypes, having type FilterIconType[]
	    ParameterId["FilterIconTypes"] = "filterIconTypes";
	    // DPI_FloatingToolbarVis, having type FloatingToolbarVisibility
	    ParameterId["FloatingToolbarVis"] = "toolbarVisibility";
	    // DPI_FolderRole, having type FolderRole
	    ParameterId["FolderRole"] = "folderRole";
	    // DPI_LegendType, having type Enum
	    ParameterId["LegendType"] = "legendType";
	    // DPI_ForecastModelType, having type ForecastModelType
	    ParameterId["ForecastModelType"] = "forecastModelType";
	    // DPI_ForecastTrendType, having type ForecastComponentType
	    ParameterId["ForecastTrendType"] = "forecastTrendType";
	    // DPI_ForecastSeasonType, having type ForecastComponentType
	    ParameterId["ForecastSeasonType"] = "forecastSeasonType";
	    // DPI_ForecastRangeType, having type ForecastRangeType
	    ParameterId["ForecastRangeType"] = "forecastRangeType";
	    // DPI_ForecastStatus, having type ForecastStatus
	    ParameterId["ForecastStatus"] = "forecastStatus";
	    // DPI_SheetForecastStatus, having type ForecastStatus
	    ParameterId["SheetForecastStatus"] = "sheetForecastStatus";
	    // DPI_PDForecastStatusList, having type ForecastStatus[]
	    ParameterId["PDForecastStatusList"] = "paneDescriptorForecastStatusList";
	    // DPI_ForecastColumnType, having type ForecastColumnType
	    ParameterId["ForecastColumnType"] = "forecastColumnType";
	    // DPI_DataScaling, having type DataScaling
	    ParameterId["DataScaling"] = "dataScaling";
	    // DPI_GetFilterItemsJsonResponse, having type GetJsonResponseEnum
	    ParameterId["GetFilterItemsJsonResponse"] = "getFilterItemsJsonResponse";
	    // DPI_FilterSearchJsonResponse, having type GetJsonResponseEnum
	    ParameterId["FilterSearchJsonResponse"] = "filterSearchJsonResponse";
	    // DPI_FilterSearchWithIndexJsonResponse, having type GetJsonResponseEnum
	    ParameterId["FilterSearchWithIndexJsonResponse"] = "filterSearchWithIndexJsonResponse";
	    // DPI_FilterShowChildrenJsonResponse, having type GetJsonResponseEnum
	    ParameterId["FilterShowChildrenJsonResponse"] = "filterShowChildrenJsonResponse";
	    // DPI_HAlignment, having type LabelHAlignment
	    ParameterId["HAlignment"] = "horizontalLabelAlignment";
	    // DPI_JoinValidationError, having type JoinValidationError
	    ParameterId["JoinValidationError"] = "joinValidationError";
	    // DPI_NameConflictResolution, having type NameConflictResolution
	    ParameterId["NameConflictResolution"] = "nameConflictResolution";
	    // DPI_LabelDir, having type TextOrient
	    ParameterId["LabelDir"] = "labelDirection";
	    // DPI_LabelAlign, having type TextAlign
	    ParameterId["LabelAlign"] = "labelAlignment";
	    // DPI_LabelWrap, having type TextWrapMode
	    ParameterId["LabelWrap"] = "labelWrap";
	    // DPI_WrapMode, having type TextWrapMode
	    ParameterId["WrapMode"] = "wrapMode";
	    // DPI_MarkEnum, having type MarkEnum
	    ParameterId["MarkEnum"] = "markEnum";
	    // DPI_PercentMode, having type PercentMode
	    ParameterId["PercentMode"] = "percentageMode";
	    // DPI_ReferenceOptionsSet, having type ReferenceOptionsSet
	    ParameterId["ReferenceOptionsSet"] = "referenceOptionsSet";
	    // DPI_ReferenceOptionsSets, having type ReferenceOptionsSet[]
	    ParameterId["ReferenceOptionsSets"] = "referenceOptionsSets";
	    // DPI_RankType, having type RankType
	    ParameterId["RankType"] = "rankType";
	    // DPI_RankTypeValues, having type RankType[]
	    ParameterId["RankTypeValues"] = "rankTypeValues";
	    // DPI_SpecialValuesMode, having type SpecialValuesMode
	    ParameterId["SpecialValuesMode"] = "specialValuesMode";
	    // DPI_VAlignment, having type LabelVAlignment
	    ParameterId["VAlignment"] = "verticalLabelAlignment";
	    // DPI_ColorMode, having type ColorMode
	    ParameterId["ColorMode"] = "colorMode";
	    // DPI_MarkLabelsMode, having type MarkLabelsMode
	    ParameterId["MarkLabelsMode"] = "markLabelsMode";
	    // DPI_MarkLabelsScope, having type MarkLabelsScope
	    ParameterId["MarkLabelsScope"] = "markLabelsScope";
	    // DPI_MarkLabelsVisibility, having type MarkLabelsVisibility
	    ParameterId["MarkLabelsVisibility"] = "markLabelsVisibility";
	    // DPI_PrimitiveType, having type PrimitiveType
	    ParameterId["PrimitiveType"] = "primitiveType";
	    // DPI_ActualPrimitiveType, having type PrimitiveType
	    ParameterId["ActualPrimitiveType"] = "actualPrimitiveType";
	    // DPI_PrimitiveTypes, having type PrimitiveType[]
	    ParameterId["PrimitiveTypes"] = "primitiveTypes";
	    // DPI_ShapeType, having type ShapeType
	    ParameterId["ShapeType"] = "shapeType";
	    // DPI_SortType, having type SortType
	    ParameterId["SortType"] = "sortBy";
	    // DPI_SortEnd, having type SortEnd
	    ParameterId["SortEnd"] = "sortEnd";
	    // DPI_StackingMode, having type StackingMode
	    ParameterId["StackingMode"] = "stackingMode";
	    // DPI_StyleTheme, having type StyleTheme
	    ParameterId["StyleTheme"] = "styleTheme";
	    // DPI_TrendLineFitType, having type TrendLineFitType
	    ParameterId["TrendLineFitType"] = "fitType";
	    // DPI_UpdateScope, having type UpdateScope
	    ParameterId["UpdateScope"] = "updateScope";
	    // DPI_ParameterCtrlDisplayMode, having type DisplayMode
	    ParameterId["ParameterCtrlDisplayMode"] = "paramDisplayMode";
	    // DPI_ParameterCtrlDisplayFlag, having type ParameterCtrlDisplayFlag
	    ParameterId["ParameterCtrlDisplayFlag"] = "paramDisplayFlag";
	    // DPI_Included, having type QuantitativeIncludedValues
	    ParameterId["Included"] = "included";
	    // DPI_CommandsType, having type CommandsType
	    ParameterId["CommandsType"] = "commandsType";
	    // DPI_ParameterDomainType, having type DomainType
	    ParameterId["ParameterDomainType"] = "parameterDomainType";
	    // DPI_FilterDomainType, having type DomainType
	    ParameterId["FilterDomainType"] = "filterDomainType";
	    // DPI_FilterDomains, having type DomainType[]
	    ParameterId["FilterDomains"] = "filterDomains";
	    // DPI_DatePeriodType, having type DatePeriodType
	    ParameterId["DatePeriodType"] = "datePeriodType";
	    // DPI_FilterPatternType, having type PatternType
	    ParameterId["FilterPatternType"] = "filterPatternType";
	    // DPI_FilterConditionType, having type ConditionType
	    ParameterId["FilterConditionType"] = "filterConditionType";
	    // DPI_FiltersPresetType, having type PresetType
	    ParameterId["FiltersPresetType"] = "filtersPresetType";
	    // DPI_FiltersRangeType, having type RangeType
	    ParameterId["FiltersRangeType"] = "filtersRangeType";
	    // DPI_DateRangeType, having type RelativeDateRangeType
	    ParameterId["DateRangeType"] = "dateRangeType";
	    // DPI_PageFlag, having type PageNavFlags
	    ParameterId["PageFlag"] = "pageFlag";
	    // DPI_MarksToTrail, having type MarksToTrail
	    ParameterId["MarksToTrail"] = "marksToTrail";
	    // DPI_TrailType, having type TrailType
	    ParameterId["TrailType"] = "trailType";
	    // DPI_ChangePageDirection, having type ChangePageType
	    ParameterId["ChangePageDirection"] = "changeTo";
	    // DPI_AnimationControl, having type PageAnimationControl
	    ParameterId["AnimationControl"] = "animationControl";
	    // DPI_LinePattern, having type LinePattern
	    ParameterId["LinePattern"] = "linePattern";
	    // DPI_LineCap, having type LineCap
	    ParameterId["LineCap"] = "lineCap";
	    // DPI_LineJoin, having type LineJoin
	    ParameterId["LineJoin"] = "lineJoin";
	    // DPI_LineAlignment, having type LineAlignment
	    ParameterId["LineAlignment"] = "lineAlignment";
	    // DPI_FillMode, having type FillMode
	    ParameterId["FillMode"] = "fillMode";
	    // DPI_CursorShape, having type CursorShape
	    ParameterId["CursorShape"] = "cursorShape";
	    // DPI_ShowMeCommandType, having type ShowMeCommandType
	    ParameterId["ShowMeCommandType"] = "showMeCommandType";
	    // DPI_ShelfIconType, having type ShelfIconType
	    ParameterId["ShelfIconType"] = "shelfIconType";
	    // DPI_ShelfIconTypes, having type ShelfIconType[]
	    ParameterId["ShelfIconTypes"] = "shelfIconTypes";
	    // DPI_ItemDrawStyle, having type ItemDrawStyle
	    ParameterId["ItemDrawStyle"] = "itemDrawStyle";
	    // DPI_ScaleMode, having type ScaleMode
	    ParameterId["ScaleMode"] = "pageScaleMode";
	    // DPI_PageOrientationOption, having type PageOrientation
	    ParameterId["PageOrientationOption"] = "pageOrientationOption";
	    // DPI_PageSizeOption, having type PageSizeOption
	    ParameterId["PageSizeOption"] = "pageSizeOption";
	    // DPI_SortRegionType, having type SortRegionType
	    ParameterId["SortRegionType"] = "sortRegion";
	    // DPI_LegendItemLayout, having type LegendItemLayout
	    ParameterId["LegendItemLayout"] = "legendLayout";
	    // DPI_LegendItemOrder, having type LegendItemOrder
	    ParameterId["LegendItemOrder"] = "legendOrder";
	    // DPI_VizImageRegion, having type VizImageRegion
	    ParameterId["VizImageRegion"] = "r";
	    // DPI_LegacyMenuName, having type LegacyMenuName
	    ParameterId["LegacyMenuName"] = "legacyMenuName";
	    // DPI_LegacyMenuState, having type LegacyMenuState
	    ParameterId["LegacyMenuState"] = "legacyMenuState";
	    // DPI_LegacyMenuStateList, having type LegacyMenuState[]
	    ParameterId["LegacyMenuStateList"] = "legacyMenuStates";
	    // DPI_DimensionType, having type DimensionType
	    ParameterId["DimensionType"] = "dimensionType";
	    // DPI_LayoutType, having type LayoutType
	    ParameterId["LayoutType"] = "layoutType";
	    // DPI_ShelfType, having type ShelfType
	    ParameterId["ShelfType"] = "shelfType";
	    // DPI_LastSelectionShelf, having type ShelfType
	    ParameterId["LastSelectionShelf"] = "lastShelf";
	    // DPI_SchemaViewerDataSourceType, having type SchemaViewerDataSourceType
	    ParameterId["SchemaViewerDataSourceType"] = "schemaDatasourceType";
	    // DPI_SchemaItemType, having type SchemaItemType
	    ParameterId["SchemaItemType"] = "schemaItemType";
	    // DPI_HSMSelectionMode, having type SelectionMode
	    ParameterId["HSMSelectionMode"] = "hsmSelectionMode";
	    // DPI_HSMDefaultMemberType, having type DefaultMemberType
	    ParameterId["HSMDefaultMemberType"] = "hsmDefaultMemberType";
	    // DPI_HSMNotificationType, having type NotificationType
	    ParameterId["HSMNotificationType"] = "hsmNotificationType";
	    // DPI_HSMSelectionRequestType, having type SelectionRequestType
	    ParameterId["HSMSelectionRequestType"] = "hsmSelectionRequestType";
	    // DPI_HSMMemberSelectRequestType, having type MemberSelectRequestType
	    ParameterId["HSMMemberSelectRequestType"] = "hsmMemberSelectRequestType";
	    // DPI_PivotStrategy, having type FieldPivotStrategy
	    ParameterId["PivotStrategy"] = "pivotStrategy";
	    // DPI_AliasType, having type AliasType
	    ParameterId["AliasType"] = "aliasType";
	    // DPI_DSODimensionSortOrder, having type DataSourceOrder
	    ParameterId["DSODimensionSortOrder"] = "dsoDimensionSortOrder";
	    // DPI_DSOMeasureSortOrder, having type DataSourceOrder
	    ParameterId["DSOMeasureSortOrder"] = "dsoMeasureSortOrder";
	    // DPI_DSOSortOrder, having type DataSourceOrder
	    ParameterId["DSOSortOrder"] = "dsoSortOrder";
	    // DPI_VTAggType, having type VTAggType
	    ParameterId["VTAggType"] = "vtAggregation";
	    // DPI_FieldTypeIconSet, having type FieldTypeIconSet
	    ParameterId["FieldTypeIconSet"] = "fieldIconSet";
	    // DPI_VisualPart, having type VisualPart
	    ParameterId["VisualPart"] = "visualPart";
	    // DPI_DefaultMapToolEnum, having type MapToolSelection
	    ParameterId["DefaultMapToolEnum"] = "defaultMapToolEnum";
	    // DPI_DefaultMapUnitEnum, having type MapUnitSelectionEnum
	    ParameterId["DefaultMapUnitEnum"] = "defaultMapUnitEnum";
	    // DPI_SceneModelDetail, having type Detail
	    ParameterId["SceneModelDetail"] = "sceneModelDetailEnum";
	    // DPI_SceneModelHitType, having type HitType
	    ParameterId["SceneModelHitType"] = "sceneModelHitType";
	    // DPI_HitTestStyle, having type HitTestStyle
	    ParameterId["HitTestStyle"] = "hitTestStyle";
	    // DPI_MarkState, having type MarkState
	    ParameterId["MarkState"] = "markState";
	    // DPI_SheetType, having type SheetType
	    ParameterId["SheetType"] = "sheetType";
	    // DPI_DragSource, having type DragDropType
	    ParameterId["DragSource"] = "dragSource";
	    // DPI_DropTarget, having type DragDropType
	    ParameterId["DropTarget"] = "dropTarget";
	    // DPI_ShelfDropAction, having type ShelfDropAction
	    ParameterId["ShelfDropAction"] = "shelfDropAction";
	    // DPI_ShelfDropContext, having type ShelfDropContext
	    ParameterId["ShelfDropContext"] = "shelfDropContext";
	    // DPI_FilterSelectionTracking, having type SelectionTracking
	    ParameterId["FilterSelectionTracking"] = "filterSelectionTracking";
	    // DPI_FilterUpdateType, having type FilterUpdateType
	    ParameterId["FilterUpdateType"] = "filterUpdateType";
	    // DPI_FilterUpdateQualifierType, having type FilterUpdateQualifierType
	    ParameterId["FilterUpdateQualifierType"] = "filterUpdateQualifierType";
	    // DPI_ParameterError, having type ParameterError
	    ParameterId["ParameterError"] = "parameterError";
	    // DPI_SelectionType, having type SelectionType
	    ParameterId["SelectionType"] = "selectionType";
	    // DPI_SelectionUpdateType, having type SelectionUpdateType
	    ParameterId["SelectionUpdateType"] = "selectionUpdateType";
	    // DPI_SelectOptions, having type SelectOptions
	    ParameterId["SelectOptions"] = "selectOptions";
	    // DPI_AxisOrientation, having type Orientation
	    ParameterId["AxisOrientation"] = "axisOrientation";
	    // DPI_DecimalMode, having type DecimalMode
	    ParameterId["DecimalMode"] = "decimalMode";
	    // DPI_ActivationMethod, having type ActivationMethod
	    ParameterId["ActivationMethod"] = "activation";
	    // DPI_SourceType, having type SourceType
	    ParameterId["SourceType"] = "sourceType";
	    // DPI_OnClear, having type OnClear
	    ParameterId["OnClear"] = "onClear";
	    // DPI_MergeOrSplit, having type MergeOrSplit
	    ParameterId["MergeOrSplit"] = "mergeOrSplit";
	    // DPI_FilterMode, having type FilterMode
	    ParameterId["FilterMode"] = "filterMode";
	    // DPI_ZoneType, having type ZoneType
	    ParameterId["ZoneType"] = "zoneType";
	    // DPI_ZoneLayoutType, having type ZoneLayoutType
	    ParameterId["ZoneLayoutType"] = "zoneLayoutType";
	    // DPI_QuickTableCalcType, having type QuickTableCalcCommandType
	    ParameterId["QuickTableCalcType"] = "quickTableCalcType";
	    // DPI_TableCalcCommandType, having type TableCalcCommandType
	    ParameterId["TableCalcCommandType"] = "tableCalcCommandType";
	    // DPI_TableCalcAddressType, having type TableCalcAddressCommandType
	    ParameterId["TableCalcAddressType"] = "tableCalcAddressType";
	    // DPI_MarkLayoutPrimitive, having type Primitive
	    ParameterId["MarkLayoutPrimitive"] = "markLayoutPrimitive";
	    // DPI_MarkLayoutVizType, having type VizType
	    ParameterId["MarkLayoutVizType"] = "markLayoutVizType";
	    // DPI_MarkAlignment, having type MarkAlignment
	    ParameterId["MarkAlignment"] = "markAlignment";
	    // DPI_ModifyZoneZOrderType, having type ModifyZoneZOrderCommandType
	    ParameterId["ModifyZoneZOrderType"] = "modifyZoneZOrderType";
	    // DPI_TextRegionHAlign, having type TextRegionHAlign
	    ParameterId["TextRegionHAlign"] = "halign";
	    // DPI_TextRegionVAlign, having type TextRegionVAlign
	    ParameterId["TextRegionVAlign"] = "valign";
	    // DPI_PathElement, having type PathElement
	    ParameterId["PathElement"] = "pathElement";
	    // DPI_PathElements, having type PathElement[]
	    ParameterId["PathElements"] = "pathElements";
	    // DPI_RenderMode, having type RenderMode
	    ParameterId["RenderMode"] = "renderMode";
	    // DPI_FontStyle, having type TableauFontStyle
	    ParameterId["FontStyle"] = "fontStyle";
	    // DPI_FontWeight, having type FontWeight
	    ParameterId["FontWeight"] = "fontWeight";
	    // DPI_TextDecoration, having type TextDecoration
	    ParameterId["TextDecoration"] = "textDecoration";
	    // DPI_BorderStyle, having type BorderStyle
	    ParameterId["BorderStyle"] = "borderStyle";
	    // DPI_BorderStyleTop, having type BorderStyle
	    ParameterId["BorderStyleTop"] = "borderStyleTop";
	    // DPI_BorderStyleRight, having type BorderStyle
	    ParameterId["BorderStyleRight"] = "borderStyleRight";
	    // DPI_BorderStyleBottom, having type BorderStyle
	    ParameterId["BorderStyleBottom"] = "borderStyleBottom";
	    // DPI_BorderStyleLeft, having type BorderStyle
	    ParameterId["BorderStyleLeft"] = "borderStyleLeft";
	    // DPI_FloatingToolbarVisibility, having type FloatingToolbarVisibility
	    ParameterId["FloatingToolbarVisibility"] = "floatingToolbarVisibility";
	    // DPI_GeoSearchVisibility, having type GeoSearchVisibility
	    ParameterId["GeoSearchVisibility"] = "geographicSearchVisibility";
	    // DPI_MapScaleVisibility, having type MapScaleVisibility
	    ParameterId["MapScaleVisibility"] = "mapScaleVisibility";
	    // DPI_VizNavigationSetting, having type VizNavigationSetting
	    ParameterId["VizNavigationSetting"] = "vizNavigationSetting";
	    // DPI_AutoDrillVisibility, having type AutoDrillVisibility
	    ParameterId["AutoDrillVisibility"] = "autoDrillVisibility";
	    // DPI_ClientUIMetricType, having type ClientUIMetricType
	    ParameterId["ClientUIMetricType"] = "clientUiMetricType";
	    // DPI_SheetScrollDirection, having type SheetScrollDirection
	    ParameterId["SheetScrollDirection"] = "sheetScrollDirection";
	    // DPI_SizeMode, having type SizeMode
	    ParameterId["SizeMode"] = "sizeMode";
	    // DPI_PerspectiveAggregate, having type PerspectiveAggregate
	    ParameterId["PerspectiveAggregate"] = "perspectiveAggregation";
	    // DPI_StyleAttribute, having type StyleAttribute
	    ParameterId["StyleAttribute"] = "styleAttribute";
	    // DPI_StyleAttributes, having type StyleAttribute[]
	    ParameterId["StyleAttributes"] = "styleAttributes";
	    // DPI_StyleElement, having type StyleElement
	    ParameterId["StyleElement"] = "styleElement";
	    // DPI_StyleDataClass, having type StyleDataClass
	    ParameterId["StyleDataClass"] = "styleClass";
	    // DPI_StyleFieldScope, having type StyleFieldScope
	    ParameterId["StyleFieldScope"] = "styleScope";
	    // DPI_FormatControlType, having type FormatControlType
	    ParameterId["FormatControlType"] = "formatType";
	    // DPI_LineInterpolationMode, having type LineInterpolationMode
	    ParameterId["LineInterpolationMode"] = "lineInterpolationMode";
	    // DPI_LineMarkerPosition, having type LineMarkerPosition
	    ParameterId["LineMarkerPosition"] = "lineMarkerPosition";
	    // DPI_MarkersMode, having type MarkMarkersMode
	    ParameterId["MarkersMode"] = "markersMode";
	    // DPI_AppConfigEnum, having type AppConfigEnum
	    ParameterId["AppConfigEnum"] = "appConfigEnum";
	    // DPI_ColorPaletteType, having type ColorPaletteType
	    ParameterId["ColorPaletteType"] = "colorPaletteType";
	    // DPI_ExtractType, having type ExtractType
	    ParameterId["ExtractType"] = "extractType";
	    // DPI_ActivityDisposition, having type ActivityDisposition
	    ParameterId["ActivityDisposition"] = "activityDisposition";
	    // DPI_ActivityResult, having type ActivityResult
	    ParameterId["ActivityResult"] = "activityResult";
	    // DPI_TooltipMode, having type TooltipMode
	    ParameterId["TooltipMode"] = "tooltipMode";
	    // DPI_RuntimeOutput, having type RuntimeOutput
	    ParameterId["RuntimeOutput"] = "runtimeOutput";
	    // DPI_AnalyticsObjectType, having type AnalyticsObjectType
	    ParameterId["AnalyticsObjectType"] = "analyticsObjectType";
	    // DPI_UIAutomationStatus, having type UIAutomationCommandStatus
	    ParameterId["UIAutomationStatus"] = "uiAutomationStatus";
	    // DPI_TableViewDataType, having type TableViewDataType
	    ParameterId["TableViewDataType"] = "tableViewerDataType";
	    // DPI_UnitsFormat, having type UnitsFormatEnum
	    ParameterId["UnitsFormat"] = "unitsFormat";
	    // DPI_FilterLimitType, having type LimitType
	    ParameterId["FilterLimitType"] = "filterLimitType";
	    // DPI_DistributionSelectedType, having type DistributionType
	    ParameterId["DistributionSelectedType"] = "distributionSelectedType";
	    // DPI_DistributionType, having type DistributionType
	    ParameterId["DistributionType"] = "distributionType";
	    // DPI_TranslatedDistributionType, having type TranslatedDistributionTypePresModel
	    ParameterId["TranslatedDistributionType"] = "translatedDistributionType";
	    // DPI_TranslatedDistributionTypes, having type TranslatedDistributionTypePresModel[]
	    ParameterId["TranslatedDistributionTypes"] = "translatedDistributionTypes";
	    // DPI_RefLineFormulaGroup, having type FormulaGroup
	    ParameterId["RefLineFormulaGroup"] = "reflineFormulaGroup";
	    // DPI_ReferenceLineScopeType, having type ScopeType
	    ParameterId["ReferenceLineScopeType"] = "referenceLineScopeType";
	    // DPI_StDevType, having type StDevType
	    ParameterId["StDevType"] = "stdevType";
	    // DPI_ShowBounds, having type ShowBounds
	    ParameterId["ShowBounds"] = "showBounds";
	    // DPI_BoxplotWhiskerType, having type BoxplotWhiskerType
	    ParameterId["BoxplotWhiskerType"] = "boxplotWhiskerType";
	    // DPI_ReferenceLineLabelType, having type LabelType
	    ParameterId["ReferenceLineLabelType"] = "referenceLineLabelType";
	    // DPI_PairedReferenceLineLabelType, having type LabelType
	    ParameterId["PairedReferenceLineLabelType"] = "pairedReferenceLineLabelType";
	    // DPI_ConfidenceIntervalSelectedState, having type ConfidenceIntervalState
	    ParameterId["ConfidenceIntervalSelectedState"] = "confidenceIntervalSelectedState";
	    // DPI_ConfidenceIntervalState, having type ConfidenceIntervalState
	    ParameterId["ConfidenceIntervalState"] = "confidenceIntervalState";
	    // DPI_TranslatedLabelType, having type TranslatedLabelTypePresModel
	    ParameterId["TranslatedLabelType"] = "translatedLabelType";
	    // DPI_ReferenceLineValidLabelTypes, having type TranslatedLabelTypePresModel[]
	    ParameterId["ReferenceLineValidLabelTypes"] = "validReferenceLineLabelTypes";
	    // DPI_ReferenceLineFormulaType, having type FormulaType
	    ParameterId["ReferenceLineFormulaType"] = "referenceLineFormulaType";
	    // DPI_PairedReferenceLineFormulaType, having type FormulaType
	    ParameterId["PairedReferenceLineFormulaType"] = "pairedReferenceLineFormulaType";
	    // DPI_TranslatedFormulaType, having type TranslatedFormulaTypePresModel
	    ParameterId["TranslatedFormulaType"] = "translatedFormulaType";
	    // DPI_ReferenceLineValidFormulaTypes, having type TranslatedFormulaTypePresModel[]
	    ParameterId["ReferenceLineValidFormulaTypes"] = "validReferenceLineFormulaTypes";
	    // DPI_ReferenceLineValidPairedFormulaTypes, having type TranslatedFormulaTypePresModel[]
	    ParameterId["ReferenceLineValidPairedFormulaTypes"] = "validReferenceLinePairedFormulaTypes";
	    // DPI_TranslatedConfidenceIntervalState, having type TranslatedConfidenceIntervalStatePresModel
	    ParameterId["TranslatedConfidenceIntervalState"] = "translatedConfidenceIntervalState";
	    // DPI_TranslatedConfidenceIntervalStates, having type TranslatedConfidenceIntervalStatePresModel[]
	    ParameterId["TranslatedConfidenceIntervalStates"] = "translatedConfidenceIntervalStates";
	    // DPI_TranslatedStDevType, having type TranslatedStDevTypePresModel
	    ParameterId["TranslatedStDevType"] = "translatedStdevType";
	    // DPI_TranslatedStDevTypes, having type TranslatedStDevTypePresModel[]
	    ParameterId["TranslatedStDevTypes"] = "translatedStdevTypes";
	    // DPI_ReferenceLineLODCalcType, having type LODCalcType
	    ParameterId["ReferenceLineLODCalcType"] = "referenceLineLodCalcType";
	    // DPI_ValueDomainType, having type ValueDomainType
	    ParameterId["ValueDomainType"] = "valueDomainType";
	    // DPI_ValueDomainTypes, having type ValueDomainType[]
	    ParameterId["ValueDomainTypes"] = "valueDomainTypes";
	    // DPI_OperationType, having type OperationType
	    ParameterId["OperationType"] = "operationType";
	    // DPI_OperationTypes, having type OperationType[]
	    ParameterId["OperationTypes"] = "operationTypes";
	    // DPI_ConnectionTypeCategory, having type ConnectionTypeCategory
	    ParameterId["ConnectionTypeCategory"] = "connectionTypeCategory";
	    // DPI_ConnectionTypeGroup, having type ConnectionTypeGroup
	    ParameterId["ConnectionTypeGroup"] = "connectionTypeGroup";
	    // DPI_CommandRedirectType, having type CommandRedirectType
	    ParameterId["CommandRedirectType"] = "commandRedirectType";
	    // DPI_CustomSplitMode, having type SplitMode
	    ParameterId["CustomSplitMode"] = "customSplitMode";
	    // DPI_CustomSplitSeparatorType, having type SeparatorType
	    ParameterId["CustomSplitSeparatorType"] = "customSplitSeparatorType";
	    // DPI_LevelSelectionState, having type LevelSelectionState
	    ParameterId["LevelSelectionState"] = "levelSelectionState";
	    // DPI_LevelSelectionStates, having type LevelSelectionState[]
	    ParameterId["LevelSelectionStates"] = "levelSelectionStates";
	    // DPI_SourceDestIcon, having type SourceDestIcon
	    ParameterId["SourceDestIcon"] = "sourceDestIcon";
	    // DPI_LegendLayout, having type LegendLayout
	    ParameterId["LegendLayout"] = "pageLegendLayout";
	    // DPI_ImagesEditResultCode, having type ImagesEditResultCode
	    ParameterId["ImagesEditResultCode"] = "imagesEditResultCode";
	    // DPI_CalculationContext, having type CalculationContext
	    ParameterId["CalculationContext"] = "calculationContext";
	    // DPI_WorkgroupPublishErrorType, having type WorkgroupPublishErrorType
	    ParameterId["WorkgroupPublishErrorType"] = "workgroupPublishErrorType";
	    // DPI_IsParameter, having type TriBool
	    ParameterId["IsParameter"] = "isParameter";
	    // DPI_AddressingState, having type WidgetState
	    ParameterId["AddressingState"] = "addressingState";
	    // DPI_AllPagesState, having type WidgetState
	    ParameterId["AllPagesState"] = "allPagesState";
	    // DPI_AtTheLevelState, having type WidgetState
	    ParameterId["AtTheLevelState"] = "atTheLevelState";
	    // DPI_ComputeCompoundedRateState, having type WidgetState
	    ParameterId["ComputeCompoundedRateState"] = "computeCompoundedRateState";
	    // DPI_CustomNullIfIncompleteState, having type WidgetState
	    ParameterId["CustomNullIfIncompleteState"] = "customNullIfIncompleteState";
	    // DPI_NestedCalcsState, having type WidgetState
	    ParameterId["NestedCalcsState"] = "nestedCalcsState";
	    // DPI_RankTypeState, having type WidgetState
	    ParameterId["RankTypeState"] = "rankTypeState";
	    // DPI_ReferenceOptionsState, having type WidgetState
	    ParameterId["ReferenceOptionsState"] = "referenceOptionsState";
	    // DPI_RestartEveryState, having type WidgetState
	    ParameterId["RestartEveryState"] = "restartEveryState";
	    // DPI_SortAggState, having type WidgetState
	    ParameterId["SortAggState"] = "sortAggState";
	    // DPI_SortState, having type WidgetState
	    ParameterId["SortState"] = "sortState";
	    // DPI_TableCalcTypeState, having type WidgetState
	    ParameterId["TableCalcTypeState"] = "tableCalcTypeState";
	    // DPI_TableCalcAssistanceWidgetState, having type WidgetState
	    ParameterId["TableCalcAssistanceWidgetState"] = "tableCalcAssistanceWidgetState";
	    // DPI_CalcNestingLevel, having type CalcNestingLevel
	    ParameterId["CalcNestingLevel"] = "calcNestingLevel";
	    // DPI_DataProviderType, having type DataProviderType
	    ParameterId["DataProviderType"] = "dataProviderType";
	    // DPI_HeuristicCommandReinterpretation, having type HeuristicCommandReinterpretation
	    ParameterId["HeuristicCommandReinterpretation"] = "heuristicCommandReinterpretation";
	    // DPI_ExtractRefreshStatus, having type ExtractRefreshStatus
	    ParameterId["ExtractRefreshStatus"] = "extractRefreshStatus";
	    // DPI_RichTextEditorWidgetKey, having type RichTextEditorWidgetKey
	    ParameterId["RichTextEditorWidgetKey"] = "richTextEditorWidgetKey";
	    // DPI_RichTextWidgetKeys, having type RichTextEditorWidgetKey[]
	    ParameterId["RichTextWidgetKeys"] = "richTextWidgetKeys";
	    // DPI_TypeOfFormatItem, having type TypeOfFormatItem
	    ParameterId["TypeOfFormatItem"] = "typeOfFormatItem";
	    // DPI_TypeOfFormatContainer, having type TypeOfFormatContainer
	    ParameterId["TypeOfFormatContainer"] = "typeOfFormatContainer";
	    // DPI_TypeOfFormatControl, having type TypeOfFormatControl
	    ParameterId["TypeOfFormatControl"] = "typeOfFormatControl";
	    // DPI_FormatWidgetKey, having type FormatWidgetKey
	    ParameterId["FormatWidgetKey"] = "formatWidgetKey";
	    // DPI_ColorSwatchType, having type ColorSwatchType
	    ParameterId["ColorSwatchType"] = "formatColorSwatchType";
	    // DPI_PickerType, having type PickerType
	    ParameterId["PickerType"] = "pickerType";
	    // DPI_ExtractHistoryRefreshType, having type RefreshType
	    ParameterId["ExtractHistoryRefreshType"] = "extractHistoryRefreshTypeEnum";
	    // DPI_AxisFoldState, having type AxisFoldState
	    ParameterId["AxisFoldState"] = "axisFoldState";
	    // DPI_TickMarkSpacingUnits, having type TickSpacingUnits
	    ParameterId["TickMarkSpacingUnits"] = "tickSpacingUnits";
	    // DPI_TickMarkState, having type TickMarkState
	    ParameterId["TickMarkState"] = "tickMarkState";
	    // DPI_AxisRangeType, having type AxisRangeType
	    ParameterId["AxisRangeType"] = "axisRangeType";
	    // DPI_ScaleType, having type ScaleType
	    ParameterId["ScaleType"] = "scaleType";
	    // DPI_DashboardDeviceLayout, having type DashboardDeviceLayout
	    ParameterId["DashboardDeviceLayout"] = "dashboardDeviceLayout";
	    // DPI_ActivateDeviceLayout, having type DashboardDeviceLayout
	    ParameterId["ActivateDeviceLayout"] = "activateDeviceLayout";
	    // DPI_DashboardDeviceLayouts, having type DashboardDeviceLayout[]
	    ParameterId["DashboardDeviceLayouts"] = "dashboardDeviceLayouts";
	    // DPI_DeviceSource, having type DeviceSource
	    ParameterId["DeviceSource"] = "deviceSource";
	    // DPI_DashboardSizingDimension, having type DashboardSizingDimension
	    ParameterId["DashboardSizingDimension"] = "dashboardSizingDimension";
	    // DPI_DashboardSizingMode, having type DashboardSizingMode
	    ParameterId["DashboardSizingMode"] = "dashboardSizingMode";
	    // DPI_FlipboardNavType, having type FlipboardNavType
	    ParameterId["FlipboardNavType"] = "flipboardNavType";
	    // DPI_FieldPickerDialogUseCase, having type FieldPickerDialogUseCase
	    ParameterId["FieldPickerDialogUseCase"] = "fieldPickerDialogUseCase";
	    // DPI_StartOfWeekEnum, having type SOWValue
	    ParameterId["StartOfWeekEnum"] = "startOfWeekEnum";
	    // DPI_StartOfFiscalYear, having type FYSValues
	    ParameterId["StartOfFiscalYear"] = "startOfFiscalYear";
	    // DPI_TotalsInclusionValue, having type TotalsInclusion
	    ParameterId["TotalsInclusionValue"] = "totalsInclusionValue";
	    // DPI_FormatCode, having type FormatCode
	    ParameterId["FormatCode"] = "formatCode";
	    // DPI_FindType, having type FindType
	    ParameterId["FindType"] = "findType";
	    // DPI_PerspectiveType, having type PerspectiveType
	    ParameterId["PerspectiveType"] = "perspectiveType";
	    // DPI_GeometryType, having type GeometryType
	    ParameterId["GeometryType"] = "geometryType";
	    // DPI_PaneLabelComposition, having type PaneLabelComposition
	    ParameterId["PaneLabelComposition"] = "paneLabelComposition";
	    // DPI_WarningType, having type WarningType
	    ParameterId["WarningType"] = "warningType";
	    // DPI_UIMode, having type WorkbookUIMode
	    ParameterId["UIMode"] = "uiMode";
	    // DPI_MenuItemId, having type TopLevelMenuItem
	    ParameterId["MenuItemId"] = "menuItemId";
	    // DPI_CommandReturn, having type object
	    ParameterId["CommandReturn"] = "commandReturn";
	    // DPI_LegacyPresModel, having type object
	    ParameterId["LegacyPresModel"] = "legacyPresModel";
	    // DPI_PresentationModel, having type object
	    ParameterId["PresentationModel"] = "presModelHolder";
	    // DPI_Event, having type object
	    ParameterId["Event"] = "eventContainer";
	    // DPI_LineStyle, having type Array
	    ParameterId["LineStyle"] = "lineStyle";
	    // DPI_StrokeStyle, having type Array
	    ParameterId["StrokeStyle"] = "strokeStyle";
	    // DPI_Schema, having type Array
	    ParameterId["Schema"] = "schema";
	    // DPI_StartTuple, having type Array
	    ParameterId["StartTuple"] = "startTuple";
	    // DPI_EndTuple, having type Array
	    ParameterId["EndTuple"] = "endTuple";
	    // DPI_Tuple, having type Array
	    ParameterId["Tuple"] = "tuple";
	    // DPI_Tuples, having type Array[]
	    ParameterId["Tuples"] = "tuples";
	    // DPI_CustomDomainTuples, having type Array[]
	    ParameterId["CustomDomainTuples"] = "customDomainTuples";
	    // DPI_UpdatedTuples, having type Array[]
	    ParameterId["UpdatedTuples"] = "updatedTuples";
	    // DPI_Table, having type Array
	    ParameterId["Table"] = "table";
	    // DPI_AliasedValue, having type Array
	    ParameterId["AliasedValue"] = "valueAlias";
	    // DPI_FirstAliasedValue, having type Array
	    ParameterId["FirstAliasedValue"] = "firstAlisedValue";
	    // DPI_MaximumRange, having type Array
	    ParameterId["MaximumRange"] = "maximumRangeValue";
	    // DPI_MinimumRange, having type Array
	    ParameterId["MinimumRange"] = "minimumRangeValue";
	    // DPI_SecondAliasedValue, having type Array
	    ParameterId["SecondAliasedValue"] = "secondAlisedValue";
	    // DPI_AliasedSelectionList, having type Array[]
	    ParameterId["AliasedSelectionList"] = "aliasedSelectionList";
	    // DPI_AliasedValues, having type Array[]
	    ParameterId["AliasedValues"] = "valuesAliases";
	    // DPI_VerboseAliasedRangeMax, having type Array
	    ParameterId["VerboseAliasedRangeMax"] = "verboseAliasedRangeMax";
	    // DPI_VerboseAliasedValue, having type Array
	    ParameterId["VerboseAliasedValue"] = "verboseAliasedValue";
	    // DPI_MultiBucket, having type MultiBucket
	    ParameterId["MultiBucket"] = "xValues";
	    // DPI_PageName, having type PageName
	    ParameterId["PageName"] = "pageName";
	    // DPI_Selector, having type object
	    ParameterId["Selector"] = "selector";
	    // DPI_PaneId, having type object
	    ParameterId["PaneId"] = "paneId";
	    // DPI_PaneIds, having type PaneId[]
	    ParameterId["PaneIds"] = "paneIds";
	    // DPI_ImageRegionInfo, having type object
	    ParameterId["ImageRegionInfo"] = "vizRegionRect";
	    // DPI_ImageRegionInfoList, having type object[]
	    ParameterId["ImageRegionInfoList"] = "vizRegionRectList";
	    // DPI_VisualID, having type VisualID
	    ParameterId["VisualID"] = "visualId";
	    // DPI_VisualIDPM, having type VisualIDPresModel
	    ParameterId["VisualIDPM"] = "visualIdPresModel";
	    // DPI_InvalidSheets, having type VisualIDPresModel[]
	    ParameterId["InvalidSheets"] = "invalidSheets";
	    // DPI_VisualIDPMs, having type VisualIDPresModel[]
	    ParameterId["VisualIDPMs"] = "visualIds";
	    // DPI_SheetPathPM, having type SheetPathPresModel
	    ParameterId["SheetPathPM"] = "sheetPath";
	    // DPI_CapturedSheetPM, having type SheetPathPresModel
	    ParameterId["CapturedSheetPM"] = "capturedSheetPm";
	    // DPI_CurrentSheetPM, having type SheetPathPresModel
	    ParameterId["CurrentSheetPM"] = "currentSheetPm";
	    // DPI_DashboardPM, having type SheetPathPresModel
	    ParameterId["DashboardPM"] = "dashboardPm";
	    // DPI_NewSheetPM, having type SheetPathPresModel
	    ParameterId["NewSheetPM"] = "newSheetPm";
	    // DPI_SheetNamePM, having type SheetPathPresModel
	    ParameterId["SheetNamePM"] = "sheetNamePm";
	    // DPI_SheetPM, having type SheetPathPresModel
	    ParameterId["SheetPM"] = "sheetPm";
	    // DPI_SourceDashboardPM, having type SheetPathPresModel
	    ParameterId["SourceDashboardPM"] = "sourceDashboardPm";
	    // DPI_SourceSheetPM, having type SheetPathPresModel
	    ParameterId["SourceSheetPM"] = "sourceSheetPm";
	    // DPI_TargetSheetPM, having type SheetPathPresModel
	    ParameterId["TargetSheetPM"] = "targetSheetPm";
	    // DPI_WorksheetPM, having type SheetPathPresModel
	    ParameterId["WorksheetPM"] = "worksheetPm";
	    // DPI_ModifiedSheets, having type SheetPathPresModel[]
	    ParameterId["ModifiedSheets"] = "modifiedSheets";
	    // DPI_DataColumn, having type DataColumnPresModel
	    ParameterId["DataColumn"] = "dataColumn";
	    // DPI_DataColumns, having type DataColumnPresModel[]
	    ParameterId["DataColumns"] = "dataColumns";
	    // DPI_Addresses, having type DataColumnPresModel[]
	    ParameterId["Addresses"] = "addresses";
	    // DPI_EncodingColumns, having type Dictionary(of DataColumnPresModel)
	    ParameterId["EncodingColumns"] = "encodingColumns";
	    // DPI_TextRunColumns, having type Dictionary(of DataColumnPresModel)
	    ParameterId["TextRunColumns"] = "textRunColumns";
	    // DPI_TextStyleColumns, having type Dictionary(of DataColumnPresModel)
	    ParameterId["TextStyleColumns"] = "textStyleColumns";
	    // DPI_NamedDataColumn, having type NamedDataColumnPresModel
	    ParameterId["NamedDataColumn"] = "namedDataColumn";
	    // DPI_NamedDataColumns, having type NamedDataColumnPresModel[]
	    ParameterId["NamedDataColumns"] = "namedDataColumns";
	    // DPI_DataTable, having type DataTablePresModel
	    ParameterId["DataTable"] = "dataTable";
	    // DPI_ActionSpecification, having type None
	    ParameterId["ActionSpecification"] = "actionSpec";
	    // DPI_Column, having type Column
	    ParameterId["Column"] = "columnContext";
	    // DPI_SetFunction, having type SetFunction
	    ParameterId["SetFunction"] = "setFunction";
	    // DPI_SetFunctions, having type SetFunctions
	    ParameterId["SetFunctions"] = "setFunctions";
	    // DPI_VisualProfileShowMe, having type VisualProfileShowMe
	    ParameterId["VisualProfileShowMe"] = "vpsm";
	    // DPI_DataSourcePtr, having type DataSource
	    ParameterId["DataSourcePtr"] = "datasourcePtr";
	    // DPI_WorkgroupConnection, having type WorkgroupConnection
	    ParameterId["WorkgroupConnection"] = "workgroupConnection";
	    // DPI_Authenticator, having type AuthenticatorRawPtr
	    ParameterId["Authenticator"] = "authenticator";
	    // DPI_UpgradeAttr, having type UpgradeAttr
	    ParameterId["UpgradeAttr"] = "upgradeAttr";
	    // DPI_ExtractAttr, having type ExtractAttr
	    ParameterId["ExtractAttr"] = "extractAttr";
	    // DPI_RefreshAttr, having type RefreshAttr
	    ParameterId["RefreshAttr"] = "refreshAttr";
	    // DPI_ContextSpecification, having type ContextSpecification
	    ParameterId["ContextSpecification"] = "contextSpecification";
	    // DPI_SchemaViewerSelector, having type SchemaViewerSelectorPtr
	    ParameterId["SchemaViewerSelector"] = "schemaViewerSelector";
	    // DPI_Buckets, having type Buckets
	    ParameterId["Buckets"] = "buckets";
	    // DPI_LegendItems, having type MultiBuckets
	    ParameterId["LegendItems"] = "legendItems";
	    // DPI_LegendItem, having type MultiBucket
	    ParameterId["LegendItem"] = "legendItem";
	    // DPI_SourceItem, having type MultiBucket
	    ParameterId["SourceItem"] = "sourceItem";
	    // DPI_DestItem, having type MultiBucket
	    ParameterId["DestItem"] = "destItem";
	    // DPI_IQuickSortState, having type IQuickSortState
	    ParameterId["IQuickSortState"] = "quickSortState";
	    // DPI_AppBuildDate, having type DateTime
	    ParameterId["AppBuildDate"] = "appBuildDate";
	    // DPI_ForecastDateRangeEnd, having type DateTime
	    ParameterId["ForecastDateRangeEnd"] = "forecastDateRangeEnd";
	    // DPI_ForecastDateRangeStart, having type DateTime
	    ParameterId["ForecastDateRangeStart"] = "forecastDateRangeStart";
	    // DPI_LastModified, having type DateTime
	    ParameterId["LastModified"] = "lastModified";
	    // DPI_SearchDomainPtr, having type MultiDomain
	    ParameterId["SearchDomainPtr"] = "searchDomainPtr";
	    // DPI_ResultsDomainPtr, having type MultiDomain
	    ParameterId["ResultsDomainPtr"] = "resultsDomainPtr";
	    // DPI_Actions, having type object
	    ParameterId["Actions"] = "actions";
	    // DPI_SRCommands, having type object
	    ParameterId["SRCommands"] = "selectionRelaxationCommands";
	    // DPI_Commands, having type object
	    ParameterId["Commands"] = "commands";
	    // DPI_DataTypeCommands, having type object
	    ParameterId["DataTypeCommands"] = "datatypeCommands";
	    // DPI_MultiSelectCommands, having type object
	    ParameterId["MultiSelectCommands"] = "multiselectCommands";
	    // DPI_NonVizCommands, having type object
	    ParameterId["NonVizCommands"] = "nonVizCommands";
	    // DPI_QuickFilterCommands, having type object
	    ParameterId["QuickFilterCommands"] = "quickFilterCommands";
	    // DPI_ShowMeCommands, having type object
	    ParameterId["ShowMeCommands"] = "showMeCommands";
	    // DPI_SortIndicatorMenu, having type object
	    ParameterId["SortIndicatorMenu"] = "sortIndicatorMenu";
	    // DPI_StandardCommands, having type object
	    ParameterId["StandardCommands"] = "standardCommands";
	    // DPI_VizCommands, having type object
	    ParameterId["VizCommands"] = "vizCommands";
	    // DPI_ZoneChromeCommands, having type object
	    ParameterId["ZoneChromeCommands"] = "zoneChromeCommands";
	    // DPI_CommandItem, having type CommandsItem
	    ParameterId["CommandItem"] = "commandItem";
	    // DPI_CommandItems, having type CommandsItem[]
	    ParameterId["CommandItems"] = "commandItems";
	    // DPI_Command, having type SimpleCommandsPresModel
	    ParameterId["Command"] = "simpleCommandModel";
	    // DPI_AddCommand, having type SimpleCommandsPresModel
	    ParameterId["AddCommand"] = "addSimpleCommandModel";
	    // DPI_RemoveCommand, having type SimpleCommandsPresModel
	    ParameterId["RemoveCommand"] = "removeSimpleCommandModel";
	    // DPI_AcceptCommand, having type SimpleCommandsPresModel
	    ParameterId["AcceptCommand"] = "acceptSimpleCommandModel";
	    // DPI_DeclineCommand, having type SimpleCommandsPresModel
	    ParameterId["DeclineCommand"] = "declineSimpleCommandModel";
	    // DPI_DropCommand, having type SimpleCommandsPresModel
	    ParameterId["DropCommand"] = "dropCommandModel";
	    // DPI_EditCaptionCommand, having type SimpleCommandsPresModel
	    ParameterId["EditCaptionCommand"] = "editCaptionCommandModel";
	    // DPI_FontCommand, having type SimpleCommandsPresModel
	    ParameterId["FontCommand"] = "fontCommandModel";
	    // DPI_LineStyleCommand, having type SimpleCommandsPresModel
	    ParameterId["LineStyleCommand"] = "lineStyleCommandModel";
	    // DPI_FormatCommand, having type SimpleCommandsPresModel
	    ParameterId["FormatCommand"] = "formatCommandModel";
	    // DPI_DestructorCommand, having type SimpleCommandsPresModel
	    ParameterId["DestructorCommand"] = "destructorCommand";
	    // DPI_ClearFormatCommand, having type SimpleCommandsPresModel
	    ParameterId["ClearFormatCommand"] = "clearFormatCommandModel";
	    // DPI_RichTextCommand, having type SimpleCommandsPresModel
	    ParameterId["RichTextCommand"] = "richTextCommandModel";
	    // DPI_SortIndicatorCommand, having type SimpleCommandsPresModel
	    ParameterId["SortIndicatorCommand"] = "sortIndicatorCommand";
	    // DPI_ResizeRowCommand, having type SimpleCommandsPresModel
	    ParameterId["ResizeRowCommand"] = "resizeRowCommandModel";
	    // DPI_ResizeColCommand, having type SimpleCommandsPresModel
	    ParameterId["ResizeColCommand"] = "resizeColCommandModel";
	    // DPI_CommandList, having type SimpleCommandsPresModel[]
	    ParameterId["CommandList"] = "commandList";
	    // DPI_ParameterCtrl, having type ParameterCtrlPresModel
	    ParameterId["ParameterCtrl"] = "parameterControl";
	    // DPI_ParameterCtrls, having type ParameterCtrlPresModel[]
	    ParameterId["ParameterCtrls"] = "parameterControls";
	    // DPI_PageModel, having type PagePresModel
	    ParameterId["PageModel"] = "pageModel";
	    // DPI_PageTrailOptions, having type PageTrailOptionsPresModel
	    ParameterId["PageTrailOptions"] = "pageTrailOptions";
	    // DPI_Field, having type FieldPresModel
	    ParameterId["Field"] = "field";
	    // DPI_FieldList, having type FieldPresModel[]
	    ParameterId["FieldList"] = "fieldList";
	    // DPI_FieldColumn, having type FieldColumnPresModel
	    ParameterId["FieldColumn"] = "column";
	    // DPI_FieldColumnList, having type FieldColumnPresModel[]
	    ParameterId["FieldColumnList"] = "columnList";
	    // DPI_Parameter, having type ParameterPresModel
	    ParameterId["Parameter"] = "parameter";
	    // DPI_Dimension, having type DimensionPresModel
	    ParameterId["Dimension"] = "dimension";
	    // DPI_AttributeDimensionList, having type DimensionPresModel[]
	    ParameterId["AttributeDimensionList"] = "attributeDimensionList";
	    // DPI_RelationalTable, having type RelationalTablePresModel
	    ParameterId["RelationalTable"] = "relationalTable";
	    // DPI_DrillPath, having type DrillPathPresModel
	    ParameterId["DrillPath"] = "drillPath";
	    // DPI_FieldFolder, having type FieldFolderPresModel
	    ParameterId["FieldFolder"] = "fieldFolder";
	    // DPI_Group, having type GroupPresModel
	    ParameterId["Group"] = "group";
	    // DPI_Hierarchy, having type HierarchyPresModel
	    ParameterId["Hierarchy"] = "hierarchy";
	    // DPI_HierarchyList, having type HierarchyPresModel[]
	    ParameterId["HierarchyList"] = "hierarchyList";
	    // DPI_HierarchyMemberSelectedState, having type HierarchySelect_MemberSelectedStatePresModel
	    ParameterId["HierarchyMemberSelectedState"] = "hierarchyMemberSelectedState";
	    // DPI_HierarchySelectionChanges, having type HierarchySelect_MemberSelectedStatePresModel[]
	    ParameterId["HierarchySelectionChanges"] = "hierarchySelectionChanges";
	    // DPI_DisplayFolder, having type DisplayFolderPresModel
	    ParameterId["DisplayFolder"] = "displayFolder";
	    // DPI_DisplayFolderList, having type DisplayFolderPresModel[]
	    ParameterId["DisplayFolderList"] = "displayFolderList";
	    // DPI_DataSourceLayout, having type DataSourceLayoutPresModel
	    ParameterId["DataSourceLayout"] = "dataSourceLayout";
	    // DPI_DataSource, having type DataSourcePresModel
	    ParameterId["DataSource"] = "dataSource";
	    // DPI_DataSources, having type Dictionary(of DataSourcePresModel)
	    ParameterId["DataSources"] = "dataSources";
	    // DPI_DataSchema, having type DataSchemaPresModel
	    ParameterId["DataSchema"] = "dataSchema";
	    // DPI_SheetListItem, having type SheetListItemPresModel
	    ParameterId["SheetListItem"] = "sheetListItem";
	    // DPI_SheetListItems, having type SheetListItemPresModel[]
	    ParameterId["SheetListItems"] = "sheetListItems";
	    // DPI_SheetList, having type SheetListPresModel
	    ParameterId["SheetList"] = "sheetList";
	    // DPI_SizeModeOption, having type SizeModeOptionPresModel
	    ParameterId["SizeModeOption"] = "sizeModeOption";
	    // DPI_SizeModeOptions, having type SizeModeOptionPresModel[]
	    ParameterId["SizeModeOptions"] = "sizeModeOptions";
	    // DPI_DashboardSizeControl, having type DashboardSizeControlPresModel
	    ParameterId["DashboardSizeControl"] = "dashboardSizeControl";
	    // DPI_DeviceLayoutInfoItem, having type DeviceLayoutInfoItemPresModel
	    ParameterId["DeviceLayoutInfoItem"] = "deviceLayoutInfoItem";
	    // DPI_DeviceLayoutInfoItems, having type DeviceLayoutInfoItemPresModel[]
	    ParameterId["DeviceLayoutInfoItems"] = "deviceLayoutInfoItems";
	    // DPI_DeviceLayoutInfoList, having type DeviceLayoutInfoListPresModel
	    ParameterId["DeviceLayoutInfoList"] = "deviceLayoutInfoList";
	    // DPI_SpecializedDeviceLayoutItem, having type SpecializedDeviceLayoutItemPresModel
	    ParameterId["SpecializedDeviceLayoutItem"] = "specializedDeviceLayoutItem";
	    // DPI_SpecializedDeviceLayoutItems, having type SpecializedDeviceLayoutItemPresModel[]
	    ParameterId["SpecializedDeviceLayoutItems"] = "specializedDeviceLayoutItems";
	    // DPI_SpecializedDeviceLayoutList, having type SpecializedDeviceLayoutListPresModel
	    ParameterId["SpecializedDeviceLayoutList"] = "specializedDeviceLayoutList";
	    // DPI_SizeItem, having type SizeItemPresModel
	    ParameterId["SizeItem"] = "sizeItem";
	    // DPI_SizeItems, having type SizeItemPresModel[]
	    ParameterId["SizeItems"] = "sizeItems";
	    // DPI_DeviceSizesList, having type SizeItemListPresModel
	    ParameterId["DeviceSizesList"] = "deviceSizesList";
	    // DPI_PresetSizesList, having type SizeItemListPresModel
	    ParameterId["PresetSizesList"] = "presetSizesList";
	    // DPI_SizeItemList, having type SizeItemListPresModel
	    ParameterId["SizeItemList"] = "sizeItemList";
	    // DPI_SubstitutionKeyword, having type SubstitutionKeywordPresModel
	    ParameterId["SubstitutionKeyword"] = "substitutionKeyword";
	    // DPI_SubstitutionKeywords, having type SubstitutionKeywordPresModel[]
	    ParameterId["SubstitutionKeywords"] = "substitutionKeywords";
	    // DPI_SubstitutionKeywordSubList, having type SubstitutionKeywordSubListPresModel
	    ParameterId["SubstitutionKeywordSubList"] = "substitutionKeywordsSublist";
	    // DPI_SubstitutionKeywordSubLists, having type SubstitutionKeywordSubListPresModel[]
	    ParameterId["SubstitutionKeywordSubLists"] = "substitutionKeywordSublists";
	    // DPI_SubstitutionKeywordList, having type SubstitutionKeywordListPresModel
	    ParameterId["SubstitutionKeywordList"] = "substitutionKeywordsList";
	    // DPI_DeviceZoneListItem, having type DeviceZoneListItemPresModel
	    ParameterId["DeviceZoneListItem"] = "deviceZoneListItem";
	    // DPI_DeviceZoneListItems, having type DeviceZoneListItemPresModel[]
	    ParameterId["DeviceZoneListItems"] = "deviceZoneListItems";
	    // DPI_DeviceZoneList, having type DeviceZoneListPresModel
	    ParameterId["DeviceZoneList"] = "deviceZoneList";
	    // DPI_DashboardZoneHierarchy, having type DashboardZoneHierarchyPresModel
	    ParameterId["DashboardZoneHierarchy"] = "dashboardZoneHierarchy";
	    // DPI_DeviceZoneVisibilityListItem, having type DeviceZoneVisibilityListItemPresModel
	    ParameterId["DeviceZoneVisibilityListItem"] = "deviceZoneVisibilityListItem";
	    // DPI_DeviceZoneVisibilityListItems, having type DeviceZoneVisibilityListItemPresModel[]
	    ParameterId["DeviceZoneVisibilityListItems"] = "deviceZoneVisibilityListItems";
	    // DPI_DeviceZoneVisibilityList, having type DeviceZoneVisibilityListPresModel
	    ParameterId["DeviceZoneVisibilityList"] = "deviceZoneVisibilityList";
	    // DPI_WorksheetDataSchema, having type WorksheetDataSchemaPresModel
	    ParameterId["WorksheetDataSchema"] = "worksheetDataSchema";
	    // DPI_WorksheetDataSchemaMap, having type Dictionary(of WorksheetDataSchemaPresModel)
	    ParameterId["WorksheetDataSchemaMap"] = "worksheetDataSchemaMap";
	    // DPI_Shelf, having type ShelfPresModel
	    ParameterId["Shelf"] = "shelf";
	    // DPI_ShelfDetail, having type ShelfPresModel
	    ParameterId["ShelfDetail"] = "shelfDetail";
	    // DPI_ShelfList, having type ShelfPresModel[]
	    ParameterId["ShelfList"] = "shelfList";
	    // DPI_ShelfItem, having type ShelfItemPresModel
	    ParameterId["ShelfItem"] = "shelfItem";
	    // DPI_ShelfItems, having type ShelfItemPresModel[]
	    ParameterId["ShelfItems"] = "shelfItems";
	    // DPI_Shelves, having type ShelvesPresModel
	    ParameterId["Shelves"] = "shelves";
	    // DPI_FieldEncoding, having type FieldEncodingPresModel
	    ParameterId["FieldEncoding"] = "fieldEncoding";
	    // DPI_FieldEncodings, having type FieldEncodingPresModel[]
	    ParameterId["FieldEncodings"] = "fieldEncodings";
	    // DPI_UberTip, having type UberTipPresModel
	    ParameterId["UberTip"] = "uberTip";
	    // DPI_AnalyticsObjectDragInfo, having type AnalyticsObjectDragInfoPresModel
	    ParameterId["AnalyticsObjectDragInfo"] = "analyticsObjectDragInfo";
	    // DPI_TrendLine, having type TrendLinePresModel
	    ParameterId["TrendLine"] = "trendLine";
	    // DPI_TrendLineDialog, having type TrendLineDialogPresModel
	    ParameterId["TrendLineDialog"] = "trendLineDialog";
	    // DPI_TrendLineDescribePresModel, having type TrendLineDescribePresModel
	    ParameterId["TrendLineDescribePresModel"] = "trendLineDescribePresModel";
	    // DPI_TrendLineAOVModelPresModel, having type TrendLineAOVModelPresModel
	    ParameterId["TrendLineAOVModelPresModel"] = "trendLineAovModelPresModel";
	    // DPI_TrendLineAOVModelsPresModel, having type TrendLineAOVModelPresModel[]
	    ParameterId["TrendLineAOVModelsPresModel"] = "trendModelDescriptionVector";
	    // DPI_TrendLineLineCoefficientPresModel, having type TrendLineLineCoefficientPresModel
	    ParameterId["TrendLineLineCoefficientPresModel"] = "trendLineLineCoefficient";
	    // DPI_TrendLineLineCoefficientsPresModel, having type TrendLineLineCoefficientPresModel[]
	    ParameterId["TrendLineLineCoefficientsPresModel"] = "trendLineLineCoefficientsPresModel";
	    // DPI_TrendLineLinesPresModel, having type TrendLineLinesPresModel
	    ParameterId["TrendLineLinesPresModel"] = "trendLineLinesPresModel";
	    // DPI_TrendLineAOVPresModel, having type TrendLineAOVPresModel
	    ParameterId["TrendLineAOVPresModel"] = "trendLineAnovaPresModel";
	    // DPI_ReferenceLine, having type ReferenceLinePresModel
	    ParameterId["ReferenceLine"] = "referenceLine";
	    // DPI_ReferenceLines, having type ReferenceLinePresModel[]
	    ParameterId["ReferenceLines"] = "referenceLines";
	    // DPI_PercentileEditDataValue, having type EditDataValuePresModel
	    ParameterId["PercentileEditDataValue"] = "percentileEditDataValue";
	    // DPI_LimitEditDataValue, having type EditDataValuePresModel
	    ParameterId["LimitEditDataValue"] = "limitEditDataValue";
	    // DPI_ConfidenceLevelCombo, having type EditValueWidgetPresModel
	    ParameterId["ConfidenceLevelCombo"] = "confidenceLevelCombo";
	    // DPI_DistributionQuantilesCombo, having type EditValueWidgetPresModel
	    ParameterId["DistributionQuantilesCombo"] = "distributionQuantilesLevelCombo";
	    // DPI_PercentilesCombo, having type EditValueWidgetPresModel
	    ParameterId["PercentilesCombo"] = "distributionPercentilesLevelCombo";
	    // DPI_NumericBinSizeCombo, having type EditValueWidgetPresModel
	    ParameterId["NumericBinSizeCombo"] = "numericBinSizeCombo";
	    // DPI_FieldPickerField, having type FieldPickerFieldPresModel
	    ParameterId["FieldPickerField"] = "fieldPickerField";
	    // DPI_FieldPickerFields, having type FieldPickerFieldPresModel[]
	    ParameterId["FieldPickerFields"] = "fieldPickerFields";
	    // DPI_FieldPickerCombo, having type FieldPickerComboPresModel
	    ParameterId["FieldPickerCombo"] = "fieldPickerCombo";
	    // DPI_PairedFieldPickerCombo, having type FieldPickerComboPresModel
	    ParameterId["PairedFieldPickerCombo"] = "pairedFieldPickerCombo";
	    // DPI_ReferenceLineEditorPresModel, having type ReferenceLineEditorPresModel
	    ParameterId["ReferenceLineEditorPresModel"] = "referenceLineEditor";
	    // DPI_CloseDataSourceErrorDialogPresModel, having type CloseDataSourceErrorDialogPresModel
	    ParameterId["CloseDataSourceErrorDialogPresModel"] = "closeDsErrorDialog";
	    // DPI_EditReferenceLine, having type EditReferenceLinePresModel
	    ParameterId["EditReferenceLine"] = "editReferenceLine";
	    // DPI_EditReferenceBand, having type EditReferenceBandPresModel
	    ParameterId["EditReferenceBand"] = "editReferenceBand";
	    // DPI_EditDistribution, having type EditDistributionPresModel
	    ParameterId["EditDistribution"] = "editDistribution";
	    // DPI_DistributionPercentages, having type DistributionPercentagesPresModel
	    ParameterId["DistributionPercentages"] = "distributionPercentages";
	    // DPI_DistributionPercentiles, having type DistributionPercentilesPresModel
	    ParameterId["DistributionPercentiles"] = "distributionPercentiles";
	    // DPI_DistributionQuantiles, having type DistributionQuantilesPresModel
	    ParameterId["DistributionQuantiles"] = "distributionQuantiles";
	    // DPI_DistributionStandardDeviation, having type DistributionStandardDeviationPresModel
	    ParameterId["DistributionStandardDeviation"] = "distributionStddev";
	    // DPI_SortIndicators, having type SortIndicatorsPresModel
	    ParameterId["SortIndicators"] = "sortIndicators";
	    // DPI_SortIndicatorRegion, having type SortIndicatorRegionPresModel
	    ParameterId["SortIndicatorRegion"] = "sortIndicatorRegion";
	    // DPI_SortIndicatorRegions, having type SortIndicatorRegionPresModel[]
	    ParameterId["SortIndicatorRegions"] = "sortIndicatorRegions";
	    // DPI_SortIndicatorItem, having type SortIndicatorItemPresModel
	    ParameterId["SortIndicatorItem"] = "sortIndicatorItem";
	    // DPI_SortIndicatorItems, having type SortIndicatorItemPresModel[]
	    ParameterId["SortIndicatorItems"] = "sortIndicatorItems";
	    // DPI_BuilderConfig, having type BuilderConfigPresModel
	    ParameterId["BuilderConfig"] = "builderConfig";
	    // DPI_SheetLayoutInfo, having type SheetLayoutInfoPresModel
	    ParameterId["SheetLayoutInfo"] = "sheetLayoutInfo";
	    // DPI_AreaRect, having type RectanglePresModel
	    ParameterId["AreaRect"] = "areaRect";
	    // DPI_Border, having type RectanglePresModel
	    ParameterId["Border"] = "borderRect";
	    // DPI_BoundsRect, having type RectanglePresModel
	    ParameterId["BoundsRect"] = "boundsRect";
	    // DPI_ButtonRect, having type RectanglePresModel
	    ParameterId["ButtonRect"] = "buttonRect";
	    // DPI_DragRect, having type RectanglePresModel
	    ParameterId["DragRect"] = "dragRect";
	    // DPI_FocusRect, having type RectanglePresModel
	    ParameterId["FocusRect"] = "focusRect";
	    // DPI_ImageTileRect, having type RectanglePresModel
	    ParameterId["ImageTileRect"] = "tileRect";
	    // DPI_ItemRect, having type RectanglePresModel
	    ParameterId["ItemRect"] = "itemRect";
	    // DPI_LabelRect, having type RectanglePresModel
	    ParameterId["LabelRect"] = "labelRect";
	    // DPI_MarkRect, having type RectanglePresModel
	    ParameterId["MarkRect"] = "markRect";
	    // DPI_MarkTooltipRect, having type RectanglePresModel
	    ParameterId["MarkTooltipRect"] = "markTooltipRect";
	    // DPI_OutRegionRect, having type RectanglePresModel
	    ParameterId["OutRegionRect"] = "outRegionRect";
	    // DPI_PaneRect, having type RectanglePresModel
	    ParameterId["PaneRect"] = "paneRect";
	    // DPI_PixelExtents, having type RectanglePresModel
	    ParameterId["PixelExtents"] = "pixelExtents";
	    // DPI_RectMaxLabel, having type RectanglePresModel
	    ParameterId["RectMaxLabel"] = "rectMaxLabel";
	    // DPI_RectMinLabel, having type RectanglePresModel
	    ParameterId["RectMinLabel"] = "rectMinLabel";
	    // DPI_RectRamp, having type RectanglePresModel
	    ParameterId["RectRamp"] = "rectRamp";
	    // DPI_RectTitle, having type RectanglePresModel
	    ParameterId["RectTitle"] = "rectTitle";
	    // DPI_RegionRect, having type RectanglePresModel
	    ParameterId["RegionRect"] = "regionRect";
	    // DPI_SelectionRect, having type RectanglePresModel
	    ParameterId["SelectionRect"] = "selectionRect";
	    // DPI_UnusedRect, having type RectanglePresModel
	    ParameterId["UnusedRect"] = "unusedRect";
	    // DPI_ZoneEdgeRect, having type RectanglePresModel
	    ParameterId["ZoneEdgeRect"] = "zoneEdge";
	    // DPI_ZoneEdgeRectPix, having type RectanglePresModel
	    ParameterId["ZoneEdgeRectPix"] = "zoneEdgePix";
	    // DPI_ZoneEdgeRectPp, having type RectanglePresModel
	    ParameterId["ZoneEdgeRectPp"] = "zoneEdgePp";
	    // DPI_UIAutomationLinkRect, having type RectanglePresModel
	    ParameterId["UIAutomationLinkRect"] = "linkRect";
	    // DPI_Borders, having type RectanglePresModel[]
	    ParameterId["Borders"] = "borderRects";
	    // DPI_UIAutomationLinkRects, having type RectanglePresModel[]
	    ParameterId["UIAutomationLinkRects"] = "linkRects";
	    // DPI_DomainExtents, having type DoubleRectanglePresModel
	    ParameterId["DomainExtents"] = "domainExtents";
	    // DPI_MapDomainExtents, having type DoubleRectanglePresModel
	    ParameterId["MapDomainExtents"] = "mapDomainExtents";
	    // DPI_MapLatLongRect, having type MapRectPresModel
	    ParameterId["MapLatLongRect"] = "mapLatLongRect";
	    // DPI_Center, having type PointPresModel
	    ParameterId["Center"] = "center";
	    // DPI_CenterMarkLineBegin, having type PointPresModel
	    ParameterId["CenterMarkLineBegin"] = "centerMarkLineBegin";
	    // DPI_CenterMarkLineEnd, having type PointPresModel
	    ParameterId["CenterMarkLineEnd"] = "centerMarkLineEnd";
	    // DPI_DropLocation, having type PointPresModel
	    ParameterId["DropLocation"] = "dropLocation";
	    // DPI_EndPt, having type PointPresModel
	    ParameterId["EndPt"] = "endPoint";
	    // DPI_GrabLocation, having type PointPresModel
	    ParameterId["GrabLocation"] = "grabLocation";
	    // DPI_GridOrigin, having type PointPresModel
	    ParameterId["GridOrigin"] = "gridOrigin";
	    // DPI_LassoSelectionPoint, having type PointPresModel
	    ParameterId["LassoSelectionPoint"] = "lassoSelectionPoint";
	    // DPI_MenuLocation, having type PointPresModel
	    ParameterId["MenuLocation"] = "menuLocation";
	    // DPI_MoveOffset, having type PointPresModel
	    ParameterId["MoveOffset"] = "moveOffset";
	    // DPI_OverlayAnchor, having type PointPresModel
	    ParameterId["OverlayAnchor"] = "overlayAnchor";
	    // DPI_PanAmount, having type PointPresModel
	    ParameterId["PanAmount"] = "panAmount";
	    // DPI_PanLocation, having type PointPresModel
	    ParameterId["PanLocation"] = "panLocation";
	    // DPI_PaneResolverLocation, having type PointPresModel
	    ParameterId["PaneResolverLocation"] = "paneResolverLocation";
	    // DPI_PixelExtentsOffset, having type PointPresModel
	    ParameterId["PixelExtentsOffset"] = "extentsOffset";
	    // DPI_Point1, having type PointPresModel
	    ParameterId["Point1"] = "pt1";
	    // DPI_Point2, having type PointPresModel
	    ParameterId["Point2"] = "pt2";
	    // DPI_Point3, having type PointPresModel
	    ParameterId["Point3"] = "pt3";
	    // DPI_RegionPoint, having type PointPresModel
	    ParameterId["RegionPoint"] = "regionPoint";
	    // DPI_ScrollOffset, having type PointPresModel
	    ParameterId["ScrollOffset"] = "scrollOffset";
	    // DPI_SelectAtPoint, having type PointPresModel
	    ParameterId["SelectAtPoint"] = "selectAtPoint";
	    // DPI_SelectOffset, having type PointPresModel
	    ParameterId["SelectOffset"] = "selectOffset";
	    // DPI_TargetPt, having type PointPresModel
	    ParameterId["TargetPt"] = "targetPoint";
	    // DPI_TextOrigin, having type PointPresModel
	    ParameterId["TextOrigin"] = "textOrigin";
	    // DPI_TooltipAnchorPoint, having type PointPresModel
	    ParameterId["TooltipAnchorPoint"] = "tooltipAnchorPoint";
	    // DPI_TooltipOffset, having type PointPresModel
	    ParameterId["TooltipOffset"] = "tooltipOffset";
	    // DPI_VizLocation, having type PointPresModel
	    ParameterId["VizLocation"] = "vizLocation";
	    // DPI_ZoomAnchorPoint, having type PointPresModel
	    ParameterId["ZoomAnchorPoint"] = "zoomAnchorPoint";
	    // DPI_OverlayAnchors, having type PointPresModel[]
	    ParameterId["OverlayAnchors"] = "overlayAnchors";
	    // DPI_LassoSelection, having type PointPresModel[]
	    ParameterId["LassoSelection"] = "lassoSelection";
	    // DPI_ScrollOffsetPoints, having type PointPresModel[]
	    ParameterId["ScrollOffsetPoints"] = "scrollOffsetPoints";
	    // DPI_RadialSelection, having type CirclePresModel
	    ParameterId["RadialSelection"] = "radialSelection";
	    // DPI_DomainOrigin, having type FloatPointPresModel
	    ParameterId["DomainOrigin"] = "domainOrigin";
	    // DPI_FloatCenter, having type FloatPointPresModel
	    ParameterId["FloatCenter"] = "floatCenter";
	    // DPI_FloatPoint, having type FloatPointPresModel
	    ParameterId["FloatPoint"] = "floatPoint";
	    // DPI_ClientAvailableSpace, having type SizePresModel
	    ParameterId["ClientAvailableSpace"] = "clientAvailableSpace";
	    // DPI_DashboardPortSize, having type SizePresModel
	    ParameterId["DashboardPortSize"] = "dashboardPort";
	    // DPI_LegendSize, having type SizePresModel
	    ParameterId["LegendSize"] = "legendSize";
	    // DPI_StoryPortSize, having type SizePresModel
	    ParameterId["StoryPortSize"] = "storyPort";
	    // DPI_SwatchAreaSize, having type SizePresModel
	    ParameterId["SwatchAreaSize"] = "areaSize";
	    // DPI_SwatchImageSize, having type SizePresModel
	    ParameterId["SwatchImageSize"] = "imageSize";
	    // DPI_ViewportSize, having type SizePresModel
	    ParameterId["ViewportSize"] = "viewportSize";
	    // DPI_WorksheetPortSize, having type SizePresModel
	    ParameterId["WorksheetPortSize"] = "worksheetPort";
	    // DPI_ResizeEntity, having type ResizeEntityPresModel
	    ParameterId["ResizeEntity"] = "resizeEntity";
	    // DPI_RowResizers, having type ResizeEntityPresModel[]
	    ParameterId["RowResizers"] = "rowResizers";
	    // DPI_ColResizers, having type ResizeEntityPresModel[]
	    ParameterId["ColResizers"] = "colResizers";
	    // DPI_ResizeInfoPresModel, having type ResizeInfoPresModel
	    ParameterId["ResizeInfoPresModel"] = "resizeInfo";
	    // DPI_ServerSheet, having type ServerSheetPresModel
	    ParameterId["ServerSheet"] = "serverSheet";
	    // DPI_ServerSheets, having type ServerSheetPresModel[]
	    ParameterId["ServerSheets"] = "serverSheets";
	    // DPI_SheetInfo, having type SheetInfoPresModel
	    ParameterId["SheetInfo"] = "sheetInfo";
	    // DPI_SheetsInfo, having type SheetInfoPresModel[]
	    ParameterId["SheetsInfo"] = "sheetsInfo";
	    // DPI_ServerWorkbook, having type ServerWorkbookPresModel
	    ParameterId["ServerWorkbook"] = "serverWorkbook";
	    // DPI_PDFExportOptionsPresModel, having type PDFExportOptionsPresModel
	    ParameterId["PDFExportOptionsPresModel"] = "pdfExport";
	    // DPI_ExportFileResultPresModel, having type ExportFileResultPresModel
	    ParameterId["ExportFileResultPresModel"] = "pdfResult";
	    // DPI_PDFSheet, having type PDFSheetPresModel
	    ParameterId["PDFSheet"] = "pdfSheet";
	    // DPI_SheetOptions, having type PDFSheetPresModel[]
	    ParameterId["SheetOptions"] = "sheetOptions";
	    // DPI_ExportLayoutOptions, having type ExportLayoutOptionsPresModel
	    ParameterId["ExportLayoutOptions"] = "exportLayoutOptions";
	    // DPI_DataAlertConditionOperationType, having type DataAlertConditionOperationType
	    ParameterId["DataAlertConditionOperationType"] = "dataAlertConditionOp";
	    // DPI_DataAlertDialogPresModel, having type DataAlertDialogPresModel
	    ParameterId["DataAlertDialogPresModel"] = "dataAlertDialogPresModel";
	    // DPI_DataAlertMeasure, having type DataAlertMeasurePresModel
	    ParameterId["DataAlertMeasure"] = "dataAlertMeasure";
	    // DPI_DataAlertMeasures, having type DataAlertMeasurePresModel[]
	    ParameterId["DataAlertMeasures"] = "dataAlertMeasures";
	    // DPI_DataAlertConstantCondition, having type DataAlertConstantConditionPresModel
	    ParameterId["DataAlertConstantCondition"] = "dataAlertConstantCondition";
	    // DPI_DataAlertDialogMode, having type DataAlertDialogMode
	    ParameterId["DataAlertDialogMode"] = "dataAlertDialogMode";
	    // DPI_LightweightMapOptions, having type LightweightMapOptionsPresModel
	    ParameterId["LightweightMapOptions"] = "lightweightMapOptions";
	    // DPI_DataHighlighter, having type DataHighlighterPresModel
	    ParameterId["DataHighlighter"] = "dataHighlighter";
	    // DPI_DataHighlighterItemSet, having type DataHighlighterItemSetPresModel
	    ParameterId["DataHighlighterItemSet"] = "dataHighlighterItemSet";
	    // DPI_DataHighlighterItem, having type DataHighlighterItemPresModel
	    ParameterId["DataHighlighterItem"] = "dataHighlighterItem";
	    // DPI_DataHighlighterItems, having type DataHighlighterItemPresModel[]
	    ParameterId["DataHighlighterItems"] = "dataHighlighterItems";
	    // DPI_CategoricalLegendLayout, having type CategoricalLegendLayoutPresModel
	    ParameterId["CategoricalLegendLayout"] = "catLegendLayout";
	    // DPI_CategoricalLegend, having type CategoricalLegendPresModel
	    ParameterId["CategoricalLegend"] = "categoricalLegend";
	    // DPI_CategoricalLegends, having type CategoricalLegendPresModel[]
	    ParameterId["CategoricalLegends"] = "categoricalLegends";
	    // DPI_CategoricalColorLegend, having type CategoricalColorLegendPresModel
	    ParameterId["CategoricalColorLegend"] = "colorLegend";
	    // DPI_ColorLegendItem, having type CategoricalColorLegendItemPresModel
	    ParameterId["ColorLegendItem"] = "colorLegendItem";
	    // DPI_ColorLegendItems, having type CategoricalColorLegendItemPresModel[]
	    ParameterId["ColorLegendItems"] = "colorLegendItems";
	    // DPI_CategoricalShapeLegend, having type CategoricalShapeLegendPresModel
	    ParameterId["CategoricalShapeLegend"] = "categoricalShapeLegend";
	    // DPI_ShapeLegendItem, having type CategoricalShapeLegendItemPresModel
	    ParameterId["ShapeLegendItem"] = "shapeLegendItem";
	    // DPI_ShapeLegendItems, having type CategoricalShapeLegendItemPresModel[]
	    ParameterId["ShapeLegendItems"] = "shapeLegendItems";
	    // DPI_CategoricalHighlightLegend, having type CategoricalHighlightLegendPresModel
	    ParameterId["CategoricalHighlightLegend"] = "categoricalHighlightLegend";
	    // DPI_HighlightLegendItem, having type CategoricalLegendItemPresModel
	    ParameterId["HighlightLegendItem"] = "highlightLegendItem";
	    // DPI_HighlightLegendItems, having type CategoricalLegendItemPresModel[]
	    ParameterId["HighlightLegendItems"] = "highlightLegendItems";
	    // DPI_CategoricalSizeLegend, having type CategoricalSizeLegendPresModel
	    ParameterId["CategoricalSizeLegend"] = "categoricalSizeLegend";
	    // DPI_SizeLegendItem, having type CategoricalSizeLegendItemPresModel
	    ParameterId["SizeLegendItem"] = "sizeLegendItem";
	    // DPI_SizeLegendItems, having type CategoricalSizeLegendItemPresModel[]
	    ParameterId["SizeLegendItems"] = "sizeLegendItems";
	    // DPI_CategoricalMapLegend, having type CategoricalMapLegendPresModel
	    ParameterId["CategoricalMapLegend"] = "categoricalMapLegend";
	    // DPI_QuantitativeColorLegend, having type QuantitativeColorLegendPresModel
	    ParameterId["QuantitativeColorLegend"] = "quantitativeColorLegend";
	    // DPI_QuantitativeColorLegends, having type QuantitativeColorLegendPresModel[]
	    ParameterId["QuantitativeColorLegends"] = "quantitativeColorLegends";
	    // DPI_QuantitativeLegendLayout, having type QuantitativeLegendLayoutPresModel
	    ParameterId["QuantitativeLegendLayout"] = "quantitativeLegendLayout";
	    // DPI_ServerRenderedLegend, having type ServerRenderedLegendPresModel
	    ParameterId["ServerRenderedLegend"] = "serverRenderedLegend";
	    // DPI_CategoricalFilter, having type CategoricalFilterPresModel
	    ParameterId["CategoricalFilter"] = "categoricalFilter";
	    // DPI_CategoricalFilterRelational, having type CategoricalFilterRelationalPresModel
	    ParameterId["CategoricalFilterRelational"] = "categoricalFilterRelational";
	    // DPI_CategoricalFilterMemberDomainPage, having type CategoricalFilterMemberDomainPagePresModel
	    ParameterId["CategoricalFilterMemberDomainPage"] = "categoricalFilterMemberDomainPage";
	    // DPI_CategoricalFilterCacheInfo, having type CategoricalFilterCacheInfoPresModel
	    ParameterId["CategoricalFilterCacheInfo"] = "categoricalFilterCacheInfo";
	    // DPI_CategoricalFilterPatternDisplay, having type CategoricalFilterPatternDisplayPresModel
	    ParameterId["CategoricalFilterPatternDisplay"] = "categoricalFilterPatternDisplay";
	    // DPI_CategoricalFilterPatternUpdate, having type CategoricalFilterPatternUpdatePresModel
	    ParameterId["CategoricalFilterPatternUpdate"] = "categoricalFilterPatternUpdate";
	    // DPI_CategoricalFilterConditionDisplay, having type CategoricalFilterConditionDisplayPresModel
	    ParameterId["CategoricalFilterConditionDisplay"] = "categoricalFilterConditionDisplay";
	    // DPI_CategoricalFilterConditionUpdate, having type CategoricalFilterConditionUpdatePresModel
	    ParameterId["CategoricalFilterConditionUpdate"] = "categoricalFilterConditionUpdate";
	    // DPI_CategoricalFilterLimitDisplay, having type CategoricalFilterLimitDisplayPresModel
	    ParameterId["CategoricalFilterLimitDisplay"] = "categoricalFilterLimitDisplay";
	    // DPI_CategoricalFilterLimitUpdate, having type CategoricalFilterLimitUpdatePresModel
	    ParameterId["CategoricalFilterLimitUpdate"] = "categoricalFilterLimitUpdate";
	    // DPI_CategoricalFilterNew, having type CategoricalFilter_NewPresModel
	    ParameterId["CategoricalFilterNew"] = "categoricalFilterNew";
	    // DPI_CategoricalFilterHierarchy, having type CategoricalFilterHierarchyPresModel
	    ParameterId["CategoricalFilterHierarchy"] = "categoricalFilterHirerarchy";
	    // DPI_CategoricalFilterUpdate, having type CategoricalFilterUpdatePresModel
	    ParameterId["CategoricalFilterUpdate"] = "categoricalFilterUpdate";
	    // DPI_CategoricalFilterRelationalState, having type CategoricalFilterRelationalStatePresModel
	    ParameterId["CategoricalFilterRelationalState"] = "categoricalRelationalState";
	    // DPI_CategoricalFilterRelationalUpdatedState, having type CategoricalFilterRelationalStatePresModel
	    ParameterId["CategoricalFilterRelationalUpdatedState"] = "categoricalRelationalUpdatedState";
	    // DPI_CategoricalFilterRelationalDomainInfo, having type CategoricalFilterRelationalDomainInfoPresModel
	    ParameterId["CategoricalFilterRelationalDomainInfo"] = "categoricalFilterRelationalDomainInfo";
	    // DPI_CategoricalFilterRelationalDisplay, having type CategoricalFilterRelationalDisplayPresModel
	    ParameterId["CategoricalFilterRelationalDisplay"] = "categoricalFilterRelationalDisplay";
	    // DPI_FormulaValidation, having type FormulaValidationPresModel
	    ParameterId["FormulaValidation"] = "formulaValidation";
	    // DPI_DomainMember, having type DomainMemberPresModel
	    ParameterId["DomainMember"] = "domainMember";
	    // DPI_DomainMembers, having type DomainMemberPresModel[]
	    ParameterId["DomainMembers"] = "domainMembers";
	    // DPI_QuickFilterDisplay, having type QuickFilterDisplayPresModel
	    ParameterId["QuickFilterDisplay"] = "quickFilterDisplay";
	    // DPI_QuickFilter, having type QuickFilterPresModel
	    ParameterId["QuickFilter"] = "quickFilter";
	    // DPI_QuantitativeQuickFilter, having type QuantitativeQuickFilterPresModel
	    ParameterId["QuantitativeQuickFilter"] = "quantitativeQuickFilter";
	    // DPI_RelativeDateQuickFilter, having type RelativeDateQuickFilterPresModel
	    ParameterId["RelativeDateQuickFilter"] = "relativeDateQuickFilter";
	    // DPI_CategoricalQuickFilter, having type CategoricalQuickFilterPresModel
	    ParameterId["CategoricalQuickFilter"] = "categoricalQuickFilter";
	    // DPI_HierarchicalQuickFilter, having type HierarchicalQuickFilterPresModel
	    ParameterId["HierarchicalQuickFilter"] = "hierarchicalQuickFilter";
	    // DPI_DomainTable, having type DomainTablePresModel
	    ParameterId["DomainTable"] = "domainTable";
	    // DPI_DomainTables, having type DomainTablePresModel[]
	    ParameterId["DomainTables"] = "domainTables";
	    // DPI_DomainTuples, having type Tuples
	    ParameterId["DomainTuples"] = "domainTuples";
	    // DPI_SearchTuples, having type Tuples
	    ParameterId["SearchTuples"] = "searchTuples";
	    // DPI_SelectedTuples, having type TupleHash
	    ParameterId["SelectedTuples"] = "selectedTuples";
	    // DPI_PendingTuples, having type TupleHash
	    ParameterId["PendingTuples"] = "pendingTuples";
	    // DPI_Domain, having type MultiDomain
	    ParameterId["Domain"] = "domain";
	    // DPI_DateOption, having type DateBinDialogOptionPresModel
	    ParameterId["DateOption"] = "dateOption";
	    // DPI_DateOptions, having type DateBinDialogOptionPresModel[]
	    ParameterId["DateOptions"] = "dateOptions";
	    // DPI_FilterRangeAdd, having type FilterRangePresModel
	    ParameterId["FilterRangeAdd"] = "filterRangeAdd";
	    // DPI_FilterRangeRemove, having type FilterRangePresModel
	    ParameterId["FilterRangeRemove"] = "filterRangeRemove";
	    // DPI_FilterOptions, having type FilterOptionsPresModel
	    ParameterId["FilterOptions"] = "filterOptions";
	    // DPI_Layer, having type LayerPresModel
	    ParameterId["Layer"] = "layer";
	    // DPI_Layers, having type LayerPresModel[]
	    ParameterId["Layers"] = "layers";
	    // DPI_MarksCardPresModel, having type MarksCardPresModel
	    ParameterId["MarksCardPresModel"] = "marksCardPresModel";
	    // DPI_UIItem, having type UIItemPresModel
	    ParameterId["UIItem"] = "uiItem";
	    // DPI_EncodingUIItem, having type EncodingUIItemPresModel
	    ParameterId["EncodingUIItem"] = "encodingUiItem";
	    // DPI_EncodingUIItems, having type EncodingUIItemPresModel[]
	    ParameterId["EncodingUIItems"] = "encodingUiItems";
	    // DPI_PrimTypeUIItem, having type PrimitiveTypeUIItemPresModel
	    ParameterId["PrimTypeUIItem"] = "primitiveTypeUiItem";
	    // DPI_PrimTypeUIItems, having type PrimitiveTypeUIItemPresModel[]
	    ParameterId["PrimTypeUIItems"] = "primitiveTypeUiItems";
	    // DPI_PrimitiveTypeUIItemOptions, having type PrimitiveTypeUIItemOptionsPresModel
	    ParameterId["PrimitiveTypeUIItemOptions"] = "primitiveTypeUiItemOptions";
	    // DPI_LineUIItemOptions, having type LineUIItemOptionsPresModel
	    ParameterId["LineUIItemOptions"] = "lineUiItemOptions";
	    // DPI_LineInterpolationModeUIItem, having type LineInterpolationModeUIItemPresModel
	    ParameterId["LineInterpolationModeUIItem"] = "lineInterpolationModeUiItem";
	    // DPI_LineInterpolationModeUIItemSet, having type LineInterpolationModeUIItemPresModel[]
	    ParameterId["LineInterpolationModeUIItemSet"] = "lineInterpolationModeUiItemSet";
	    // DPI_LineMarkerPositionUIItem, having type LineMarkerPositionUIItemPresModel
	    ParameterId["LineMarkerPositionUIItem"] = "lineMarkerPositionUiItem";
	    // DPI_LineMarkerPositionUIItemSet, having type LineMarkerPositionUIItemPresModel[]
	    ParameterId["LineMarkerPositionUIItemSet"] = "lineMarkerPositionUiItemSet";
	    // DPI_MarksCardDropdownItem, having type MarksCardDropdownItemPresModel
	    ParameterId["MarksCardDropdownItem"] = "marksCardDropdownItem";
	    // DPI_TooltipDropdownItem, having type TooltipDropdownItemPresModel
	    ParameterId["TooltipDropdownItem"] = "tooltipDropdownItem";
	    // DPI_TextDropdownItem, having type TextDropdownItemPresModel
	    ParameterId["TextDropdownItem"] = "textDropdownItem";
	    // DPI_ColorDropdownItem, having type ColorDropdownItemPresModel
	    ParameterId["ColorDropdownItem"] = "colorDropdownItem";
	    // DPI_SizeSliderPresModel, having type SizeSliderPresModel
	    ParameterId["SizeSliderPresModel"] = "sizeSliderPresModel";
	    // DPI_InflectionPoint, having type InflectionPointPresModel
	    ParameterId["InflectionPoint"] = "inflectionPoint";
	    // DPI_InflectionPoints, having type InflectionPointPresModel[]
	    ParameterId["InflectionPoints"] = "inflectionPoints";
	    // DPI_Notch, having type NotchPresModel
	    ParameterId["Notch"] = "notch";
	    // DPI_Notches, having type NotchPresModel[]
	    ParameterId["Notches"] = "notches";
	    // DPI_MarkSizeOptionsPresModel, having type MarkSizeOptionsPresModel
	    ParameterId["MarkSizeOptionsPresModel"] = "markSizeOptionsPresModel";
	    // DPI_ModifyMarksInSet, having type AddOrRemoveMarks
	    ParameterId["ModifyMarksInSet"] = "addOrRemoveMarks";
	    // DPI_MarkLabelsSpecification, having type MarkLabelsSpecificationPresModel
	    ParameterId["MarkLabelsSpecification"] = "markLabelsSpecification";
	    // DPI_ColorPalette, having type ColorPalettePresModel
	    ParameterId["ColorPalette"] = "colorPalette";
	    // DPI_SelectedColorPalette, having type ColorPalettePresModel
	    ParameterId["SelectedColorPalette"] = "selectedColorPalette";
	    // DPI_ColorPalettes, having type ColorPalettePresModel[]
	    ParameterId["ColorPalettes"] = "colorPalettes";
	    // DPI_ColorPaletteGroup, having type ColorPaletteGroupPresModel
	    ParameterId["ColorPaletteGroup"] = "colorPaletteGroup";
	    // DPI_CatColorPaletteGroups, having type ColorPaletteGroupPresModel[]
	    ParameterId["CatColorPaletteGroups"] = "catColorPaletteGroups";
	    // DPI_QColorPaletteGroups, having type ColorPaletteGroupPresModel[]
	    ParameterId["QColorPaletteGroups"] = "qColorPaletteGroups";
	    // DPI_ColorPaletteCollection, having type ColorPaletteCollectionPresModel
	    ParameterId["ColorPaletteCollection"] = "colorPaletteCollection";
	    // DPI_QuantitativeColor, having type QuantitativeColorPresModel
	    ParameterId["QuantitativeColor"] = "quantitativeColor";
	    // DPI_CategoricalColor, having type CategoricalColorPresModel
	    ParameterId["CategoricalColor"] = "categoricalColor";
	    // DPI_ItemColorPair, having type ItemColorPairPresModel
	    ParameterId["ItemColorPair"] = "itemColorPair";
	    // DPI_ItemColorPairs, having type ItemColorPairPresModel[]
	    ParameterId["ItemColorPairs"] = "itemColorPairs";
	    // DPI_VQLCommandResponse, having type VQLCommandResponsePresModel
	    ParameterId["VQLCommandResponse"] = "vqlCmdResponse";
	    // DPI_LayoutStatus, having type LayoutStatusPresModel
	    ParameterId["LayoutStatus"] = "layoutStatus";
	    // DPI_VizState, having type VizStatePresModel
	    ParameterId["VizState"] = "vizState";
	    // DPI_VizStateList, having type VizStatePresModel[]
	    ParameterId["VizStateList"] = "vizStateList";
	    // DPI_CommandResult, having type CommandResultPresModel
	    ParameterId["CommandResult"] = "cmdResult";
	    // DPI_CommandResultList, having type CommandResultPresModel[]
	    ParameterId["CommandResultList"] = "cmdResultList";
	    // DPI_URLAction, having type URLActionPresModel
	    ParameterId["URLAction"] = "urlAction";
	    // DPI_URLActionList, having type URLActionPresModel[]
	    ParameterId["URLActionList"] = "urlActionList";
	    // DPI_LegacyMenu, having type LegacyMenuPresModel
	    ParameterId["LegacyMenu"] = "legacyMenu";
	    // DPI_LegacyMenus, having type LegacyMenuPresModel[]
	    ParameterId["LegacyMenus"] = "legacyMenus";
	    // DPI_ConnectionAttemptInfo, having type ConnectionAttemptInfoPresModel
	    ParameterId["ConnectionAttemptInfo"] = "connectionAttemptInfo";
	    // DPI_DataSourceConnectionAttemptInfo, having type DataSourceConnectionAttemptInfoPresModel
	    ParameterId["DataSourceConnectionAttemptInfo"] = "dataSourceConnectionAttemptInfo";
	    // DPI_DataSourceConnectionAttemptInfos, having type DataSourceConnectionAttemptInfoPresModel[]
	    ParameterId["DataSourceConnectionAttemptInfos"] = "dataSourceConnectionAttemptInfos";
	    // DPI_CommandValidationPresModel, having type CommandValidationPresModel
	    ParameterId["CommandValidationPresModel"] = "commandValidationPresModel";
	    // DPI_WarningMessage, having type WarningMessagePresModel
	    ParameterId["WarningMessage"] = "warningMessagePresModel";
	    // DPI_ApplicationPresModel, having type ApplicationPresModel
	    ParameterId["ApplicationPresModel"] = "applicationPresModel";
	    // DPI_ToolbarPresModel, having type ToolbarPresModel
	    ParameterId["ToolbarPresModel"] = "toolbarPresModel";
	    // DPI_WorkbookPresModel, having type WorkbookPresModel
	    ParameterId["WorkbookPresModel"] = "workbookPresModel";
	    // DPI_ServerFonts, having type ServerFontsPresModel
	    ParameterId["ServerFonts"] = "serverFonts";
	    // DPI_PublishDataSourceMetadataPresModel, having type PublishDataSourceMetadataPresModel
	    ParameterId["PublishDataSourceMetadataPresModel"] = "publishDataSourceMetadataPresModel";
	    // DPI_DashboardPresModel, having type DashboardPresModel
	    ParameterId["DashboardPresModel"] = "dashboardPresModel";
	    // DPI_DashboardSizePresModel, having type DashboardSizePresModel
	    ParameterId["DashboardSizePresModel"] = "dashboardSizePresModel";
	    // DPI_DashboardSizeWithValidationPresModel, having type DashboardSizeWithValidationPresModel
	    ParameterId["DashboardSizeWithValidationPresModel"] = "dashboardSizeWithValidationPresModel";
	    // DPI_DashboardInfoPresModel, having type DashboardInfoPresModel
	    ParameterId["DashboardInfoPresModel"] = "dashboardInfoPresModel";
	    // DPI_VisualPresModel, having type VisualPresModel
	    ParameterId["VisualPresModel"] = "visual";
	    // DPI_VisualPresModels, having type VisualPresModel[]
	    ParameterId["VisualPresModels"] = "visuals";
	    // DPI_DropLinesPresModel, having type DropLinesPresModel
	    ParameterId["DropLinesPresModel"] = "dropLinesPresModel";
	    // DPI_DropFieldPresModel, having type DropFieldPresModel
	    ParameterId["DropFieldPresModel"] = "dropFieldPresModel";
	    // DPI_DropFieldResultPresModel, having type DropFieldResultPresModel
	    ParameterId["DropFieldResultPresModel"] = "dropFieldResultPresModel";
	    // DPI_CurrentAxisRange, having type DataValueRangePresModel
	    ParameterId["CurrentAxisRange"] = "currentAxisRange";
	    // DPI_DefaultAxisRange, having type DataValueRangePresModel
	    ParameterId["DefaultAxisRange"] = "defaultAxisRange";
	    // DPI_NewAxisRange, having type DataValueRangePresModel
	    ParameterId["NewAxisRange"] = "newAxisRange";
	    // DPI_AxisOptions, having type AxisOptionsPresModel
	    ParameterId["AxisOptions"] = "axis";
	    // DPI_AxisMajorTicks, having type TickMarkInfoPresModel
	    ParameterId["AxisMajorTicks"] = "axisMajorTicks";
	    // DPI_AxisMinorTicks, having type TickMarkInfoPresModel
	    ParameterId["AxisMinorTicks"] = "axisMinorTicks";
	    // DPI_EditAxisDialog, having type EditAxisDialogPresModel
	    ParameterId["EditAxisDialog"] = "editAxisDialog";
	    // DPI_MarkLabels, having type ScenePresModel
	    ParameterId["MarkLabels"] = "markLabels";
	    // DPI_Scene, having type ScenePresModel
	    ParameterId["Scene"] = "scene";
	    // DPI_MapServer, having type MapServerPresModel
	    ParameterId["MapServer"] = "mapServer";
	    // DPI_VisualList, having type VisualListPresModel
	    ParameterId["VisualList"] = "visualList";
	    // DPI_DrawFirst, having type VisualListPresModel[]
	    ParameterId["DrawFirst"] = "drawFirst";
	    // DPI_DrawLast, having type VisualListPresModel[]
	    ParameterId["DrawLast"] = "drawLast";
	    // DPI_DrawPane, having type VisualListPresModel[]
	    ParameterId["DrawPane"] = "drawPane";
	    // DPI_UserPaneInfo, having type UserPaneInfoPresModel
	    ParameterId["UserPaneInfo"] = "userPaneInfo";
	    // DPI_AnalyticsPane, having type AnalyticsPanePresModel
	    ParameterId["AnalyticsPane"] = "analyticsPane";
	    // DPI_AnalyticsObjectItem, having type AnalyticsObjectItemPresModel
	    ParameterId["AnalyticsObjectItem"] = "analyticsObjectItem";
	    // DPI_AnalyticsObjectItems, having type AnalyticsObjectItemPresModel[]
	    ParameterId["AnalyticsObjectItems"] = "analyticsObjectItems";
	    // DPI_AnalyticsObjectGroup, having type AnalyticsObjectGroupPresModel
	    ParameterId["AnalyticsObjectGroup"] = "analyticsObjectGroup";
	    // DPI_AnalyticsObjectGroups, having type AnalyticsObjectGroupPresModel[]
	    ParameterId["AnalyticsObjectGroups"] = "analyticsObjectGroups";
	    // DPI_DropZoneItem, having type DropZoneItemPresModel
	    ParameterId["DropZoneItem"] = "dropZoneItem";
	    // DPI_DropZoneItems, having type DropZoneItemPresModel[]
	    ParameterId["DropZoneItems"] = "dropZoneItems";
	    // DPI_DropTargetInfo, having type DropTargetInfoPresModel
	    ParameterId["DropTargetInfo"] = "dropTargetInfo";
	    // DPI_Pane, having type PanePresModel
	    ParameterId["Pane"] = "pane";
	    // DPI_Panes, having type PanePresModel[]
	    ParameterId["Panes"] = "panes";
	    // DPI_RadialSelectionDistanceInfo, having type RadialSelectionDistanceInfoPresModel
	    ParameterId["RadialSelectionDistanceInfo"] = "radialSelectionDistanceInfo";
	    // DPI_MapScaleInfo, having type MapScaleInfoPresModel
	    ParameterId["MapScaleInfo"] = "mapScaleInfo";
	    // DPI_RenderNode, having type RenderNodePresModel
	    ParameterId["RenderNode"] = "renderNode";
	    // DPI_RenderNodes, having type RenderNodePresModel[]
	    ParameterId["RenderNodes"] = "renderNodes";
	    // DPI_PredictionBand, having type PredictionBandPresModel
	    ParameterId["PredictionBand"] = "predictionBand";
	    // DPI_PredictionWhisker, having type PredictionWhiskerPresModel
	    ParameterId["PredictionWhisker"] = "predictionWhisker";
	    // DPI_DrawGroup, having type DrawPointsPresModel
	    ParameterId["DrawGroup"] = "drawGroup";
	    // DPI_ClipReset, having type DrawItemPresModel
	    ParameterId["ClipReset"] = "clipReset";
	    // DPI_DrawItem, having type DrawItemPresModel
	    ParameterId["DrawItem"] = "drawItem";
	    // DPI_TransformPop, having type DrawItemPresModel
	    ParameterId["TransformPop"] = "transformPop";
	    // DPI_TransformPush, having type DrawItemPresModel
	    ParameterId["TransformPush"] = "transformPush";
	    // DPI_DrawItems, having type DrawItemPresModel[]
	    ParameterId["DrawItems"] = "drawItems";
	    // DPI_ClipRect, having type DrawPointsPresModel
	    ParameterId["ClipRect"] = "clipRect";
	    // DPI_DrawEllipse, having type DrawPointsPresModel
	    ParameterId["DrawEllipse"] = "drawEllipse";
	    // DPI_DrawFillEllipse, having type DrawPointsPresModel
	    ParameterId["DrawFillEllipse"] = "drawFillEllipse";
	    // DPI_DrawFillPolygon, having type DrawPointsPresModel
	    ParameterId["DrawFillPolygon"] = "drawFillPolygon";
	    // DPI_DrawFillRect, having type DrawPointsPresModel
	    ParameterId["DrawFillRect"] = "drawFillRect";
	    // DPI_DrawPolygon, having type DrawPointsPresModel
	    ParameterId["DrawPolygon"] = "drawPolygon";
	    // DPI_DrawPolyline, having type DrawPointsPresModel
	    ParameterId["DrawPolyline"] = "drawPolyline";
	    // DPI_DrawRect, having type DrawPointsPresModel
	    ParameterId["DrawRect"] = "drawRect";
	    // DPI_DrawFillPath, having type DrawPathPresModel
	    ParameterId["DrawFillPath"] = "drawFillPath";
	    // DPI_DrawPath, having type DrawPathPresModel
	    ParameterId["DrawPath"] = "drawPath";
	    // DPI_DrawText, having type DrawTextPresModel
	    ParameterId["DrawText"] = "drawText";
	    // DPI_DrawImage, having type DrawImagePresModel
	    ParameterId["DrawImage"] = "drawImage";
	    // DPI_ImageTileInfo, having type ImageTileInfoPresModel
	    ParameterId["ImageTileInfo"] = "tileInfo";
	    // DPI_ImageTileInfos, having type ImageTileInfoPresModel[]
	    ParameterId["ImageTileInfos"] = "tileInfos";
	    // DPI_DrawImageTiles, having type DrawImageTilesPresModel
	    ParameterId["DrawImageTiles"] = "drawImageTiles";
	    // DPI_DrawPen, having type DrawPenPresModel
	    ParameterId["DrawPen"] = "drawPen";
	    // DPI_DrawSolidBrush, having type DrawSolidBrushPresModel
	    ParameterId["DrawSolidBrush"] = "drawSolidBrush";
	    // DPI_DrawTextProperties, having type DrawTextPropertiesPresModel
	    ParameterId["DrawTextProperties"] = "drawTextProps";
	    // DPI_DrawGradientBrush, having type DrawGradientBrushPresModel
	    ParameterId["DrawGradientBrush"] = "drawGradientBrush";
	    // DPI_DrawTransform, having type DrawTransformPresModel
	    ParameterId["DrawTransform"] = "transform";
	    // DPI_DrawAntialias, having type DrawAntialiasPresModel
	    ParameterId["DrawAntialias"] = "drawAntialias";
	    // DPI_ImageDictionary, having type ImageDictionaryPresModel
	    ParameterId["ImageDictionary"] = "imageDictionary";
	    // DPI_ColorDictionary, having type ColorDictionaryPresModel
	    ParameterId["ColorDictionary"] = "colorDictionary";
	    // DPI_MarkShape, having type MarkShapePresModel
	    ParameterId["MarkShape"] = "markShape";
	    // DPI_MarkShapeList, having type MarkShapePresModel[]
	    ParameterId["MarkShapeList"] = "markShapeList";
	    // DPI_PaneDescriptor, having type PaneDescriptorPresModel
	    ParameterId["PaneDescriptor"] = "paneDescriptor";
	    // DPI_PDMarks, having type PDMarksPresModel
	    ParameterId["PDMarks"] = "pdMarks";
	    // DPI_PDMarksMap, having type Dictionary(of PDMarksPresModel)
	    ParameterId["PDMarksMap"] = "pdMarksMap";
	    // DPI_LabelTextTable, having type LabelTextTable
	    ParameterId["LabelTextTable"] = "labelTextTable";
	    // DPI_TextTableHelper, having type TextTableHelper
	    ParameterId["TextTableHelper"] = "textTableHelper";
	    // DPI_GeometryTable, having type GeometryTable
	    ParameterId["GeometryTable"] = "geometryTable";
	    // DPI_PaneMarks, having type PaneMarksPresModel
	    ParameterId["PaneMarks"] = "paneMarks";
	    // DPI_PaneMarksList, having type PaneMarksPresModel[]
	    ParameterId["PaneMarksList"] = "paneMarksList";
	    // DPI_BrushingSelection, having type SelectionPresModel
	    ParameterId["BrushingSelection"] = "brushing";
	    // DPI_Selection, having type SelectionPresModel
	    ParameterId["Selection"] = "selection";
	    // DPI_BrushingSelectionList, having type SelectionPresModel[]
	    ParameterId["BrushingSelectionList"] = "brushingSelectionList";
	    // DPI_SelectionList, having type SelectionPresModel[]
	    ParameterId["SelectionList"] = "selectionList";
	    // DPI_ShelfSelectionModel, having type ShelfSelectionPresModel
	    ParameterId["ShelfSelectionModel"] = "shelfSelectionModel";
	    // DPI_ShelfSelectionModels, having type ShelfSelectionPresModel[]
	    ParameterId["ShelfSelectionModels"] = "shelfSelectionModels";
	    // DPI_ShelfSelectionsModel, having type ShelfSelectionsPresModel
	    ParameterId["ShelfSelectionsModel"] = "shelfSelectionsModel";
	    // DPI_DimValSelectionModel, having type DimensionValueSelectionPresModel
	    ParameterId["DimValSelectionModel"] = "dimensionValueSelectionModel";
	    // DPI_DimValSelectionModels, having type DimensionValueSelectionPresModel[]
	    ParameterId["DimValSelectionModels"] = "dimensionValueSelectionModels";
	    // DPI_HierValSelectionModel, having type HierarchicalValueSelectionPresModel
	    ParameterId["HierValSelectionModel"] = "hierarchicalValueSelectionModel";
	    // DPI_HierValSelectionModels, having type HierarchicalValueSelectionPresModel[]
	    ParameterId["HierValSelectionModels"] = "hierarchicalValueSelectionModels";
	    // DPI_QuantRangeSelectionModel, having type QuantativeRangeSelectionPresModel
	    ParameterId["QuantRangeSelectionModel"] = "quantativeRangeSelectionModel";
	    // DPI_QuantRangeSelectionModels, having type QuantativeRangeSelectionPresModel[]
	    ParameterId["QuantRangeSelectionModels"] = "quantativeRangeSelectionModels";
	    // DPI_QuantValueSelectionModel, having type QuantativeValueSelectionPresModel
	    ParameterId["QuantValueSelectionModel"] = "quantativeValueSelectionModel";
	    // DPI_QuantValueSelectionModels, having type QuantativeValueSelectionPresModel[]
	    ParameterId["QuantValueSelectionModels"] = "quantativeValueSelectionModels";
	    // DPI_LegendSelectionInfo, having type LegendSelectionInfoPresModel
	    ParameterId["LegendSelectionInfo"] = "legendSelectionInfo";
	    // DPI_NodeReference, having type NodeReferencePresModel
	    ParameterId["NodeReference"] = "nodeReference";
	    // DPI_PageReference, having type PageReferencePresModel
	    ParameterId["PageReference"] = "pageReference";
	    // DPI_OrientedNodeReference, having type OrientedNodeReferencePresModel
	    ParameterId["OrientedNodeReference"] = "orientedNodeReference";
	    // DPI_OrientedNodeReferences, having type OrientedNodeReferencePresModel[]
	    ParameterId["OrientedNodeReferences"] = "orientedNodeReferences";
	    // DPI_SelectionData, having type SelectionDataPresModel
	    ParameterId["SelectionData"] = "selectionData";
	    // DPI_HighlightedData, having type HighlightedDataPresModel
	    ParameterId["HighlightedData"] = "highlightedData";
	    // DPI_Node, having type NodePresModel
	    ParameterId["Node"] = "node";
	    // DPI_Nodes, having type NodePresModel[]
	    ParameterId["Nodes"] = "nodes";
	    // DPI_SelectedNodes, having type NodePresModel[]
	    ParameterId["SelectedNodes"] = "selectedNodes";
	    // DPI_UserAction, having type ActionPresModel
	    ParameterId["UserAction"] = "userAction";
	    // DPI_UserActions, having type ActionPresModel[]
	    ParameterId["UserActions"] = "userActions";
	    // DPI_LinkSpec, having type LinkSpecPresModel
	    ParameterId["LinkSpec"] = "linkSpec";
	    // DPI_ActionSpecificationModel, having type ActionSpecificationPresModel
	    ParameterId["ActionSpecificationModel"] = "actionSpecification";
	    // DPI_LinkSpecification, having type LinkSpecificationPresModel
	    ParameterId["LinkSpecification"] = "linkSpecification";
	    // DPI_ScriptDescription, having type ScriptDescriptionPresModel
	    ParameterId["ScriptDescription"] = "scriptDescription";
	    // DPI_ActionSource, having type ActionSourcePresModel
	    ParameterId["ActionSource"] = "actionSource";
	    // DPI_FieldExprItem, having type FieldExprItemPresModel
	    ParameterId["FieldExprItem"] = "fieldExpressionItem";
	    // DPI_FieldExprVector, having type FieldExprItemPresModel[]
	    ParameterId["FieldExprVector"] = "fieldExpressionVector";
	    // DPI_ActionComboItem, having type ActionComboItemPresModel
	    ParameterId["ActionComboItem"] = "actionComboItem";
	    // DPI_ActionComboVector, having type ActionComboItemPresModel[]
	    ParameterId["ActionComboVector"] = "actionComboVector";
	    // DPI_ActionSourceCombo, having type ActionSourceComboPresModel
	    ParameterId["ActionSourceCombo"] = "actionSourceCombo";
	    // DPI_ActionDestCombo, having type ActionComboPresModel
	    ParameterId["ActionDestCombo"] = "actionDestCombo";
	    // DPI_ActionFieldList, having type ActionFieldListPresModel
	    ParameterId["ActionFieldList"] = "actionFieldList";
	    // DPI_EditBrushAction, having type EditBrushActionPresModel
	    ParameterId["EditBrushAction"] = "editBrushAction";
	    // DPI_UpdateActionSource, having type UpdateActionSourcePresModel
	    ParameterId["UpdateActionSource"] = "updateActionSource";
	    // DPI_UpdateBrushAction, having type UpdateBrushActionPresModel
	    ParameterId["UpdateBrushAction"] = "updateBrushAction";
	    // DPI_ActionWarnings, having type ActionWarningsPresModel
	    ParameterId["ActionWarnings"] = "actionWarnings";
	    // DPI_EditHyperlinkAction, having type EditHyperlinkActionPresModel
	    ParameterId["EditHyperlinkAction"] = "editHyperlinkAction";
	    // DPI_UpdateHyperlinkAction, having type UpdateHyperlinkActionPresModel
	    ParameterId["UpdateHyperlinkAction"] = "updateHyperlinkAction";
	    // DPI_EditSheetLinkAction, having type EditSheetLinkActionPresModel
	    ParameterId["EditSheetLinkAction"] = "editSheetlinkAction";
	    // DPI_UpdateSheetLinkAction, having type UpdateSheetLinkActionPresModel
	    ParameterId["UpdateSheetLinkAction"] = "updateSheetlinkAction";
	    // DPI_ActionItem, having type ActionItemPresModel
	    ParameterId["ActionItem"] = "actionItem";
	    // DPI_ActionItemList, having type ActionItemPresModel[]
	    ParameterId["ActionItemList"] = "actionItemList";
	    // DPI_DataSegment, having type DataSegmentPresModel
	    ParameterId["DataSegment"] = "dataSegment";
	    // DPI_DataSegments, having type Dictionary(of DataSegmentPresModel)
	    ParameterId["DataSegments"] = "dataSegments";
	    // DPI_DataDictionary, having type DataDictionaryPresModel
	    ParameterId["DataDictionary"] = "dataDictionary";
	    // DPI_VizData, having type VizDataPresModel
	    ParameterId["VizData"] = "vizData";
	    // DPI_VizColumn, having type VizColumnPresModel
	    ParameterId["VizColumn"] = "vizColumn";
	    // DPI_VizColumns, having type VizColumnPresModel[]
	    ParameterId["VizColumns"] = "vizColumns";
	    // DPI_VizDataColumn, having type VizDataColumnPresModel
	    ParameterId["VizDataColumn"] = "vizDataColumn";
	    // DPI_VizDataColumns, having type VizDataColumnPresModel[]
	    ParameterId["VizDataColumns"] = "vizDataColumns";
	    // DPI_VizPaneColumn, having type VizPaneColumnPresModel
	    ParameterId["VizPaneColumn"] = "vizPaneColumn";
	    // DPI_VizPaneColumns, having type VizPaneColumnPresModel[]
	    ParameterId["VizPaneColumns"] = "vizPaneColumns";
	    // DPI_PaneColumns, having type PaneColumnsPresModel
	    ParameterId["PaneColumns"] = "paneColumns";
	    // DPI_PaneColumnsList, having type PaneColumnsPresModel[]
	    ParameterId["PaneColumnsList"] = "paneColumnsList";
	    // DPI_PaneColumnsData, having type PaneColumnsDataPresModel
	    ParameterId["PaneColumnsData"] = "paneColumnsData";
	    // DPI_FilterContext, having type FilterContextPresModel
	    ParameterId["FilterContext"] = "filterContext";
	    // DPI_UberTipPaneData, having type UberTipPaneDataPresModel
	    ParameterId["UberTipPaneData"] = "ubertipPaneData";
	    // DPI_UberTipPaneDatas, having type UberTipPaneDataPresModel[]
	    ParameterId["UberTipPaneDatas"] = "ubertipPaneDatas";
	    // DPI_UberTipData, having type UberTipDataPresModel
	    ParameterId["UberTipData"] = "ubertipData";
	    // DPI_RefLineTip, having type RefLineTipPresModel
	    ParameterId["RefLineTip"] = "refLineTip";
	    // DPI_RefLineTips, having type RefLineTipPresModel[]
	    ParameterId["RefLineTips"] = "refLineTips";
	    // DPI_NumericBin, having type NumericBinPresModel
	    ParameterId["NumericBin"] = "numericBin";
	    // DPI_NumericBinDialog, having type NumericBinDialogPresModel
	    ParameterId["NumericBinDialog"] = "numericBinDialog";
	    // DPI_DomainRange, having type DomainRangePresModel
	    ParameterId["DomainRange"] = "domainRange";
	    // DPI_BinSizeInfo, having type BinSizeInfoPresModel
	    ParameterId["BinSizeInfo"] = "binSizeInfo";
	    // DPI_DragSourcePosition, having type ShelfDropPositionPresModel
	    ParameterId["DragSourcePosition"] = "shelfDragSourcePosition";
	    // DPI_DropTargetPosition, having type ShelfDropPositionPresModel
	    ParameterId["DropTargetPosition"] = "shelfDropTargetPosition";
	    // DPI_ShelfDropPosition, having type ShelfDropPositionPresModel
	    ParameterId["ShelfDropPosition"] = "shelfDropPosition";
	    // DPI_ShelfDropPositions, having type ShelfDropPositionPresModel[]
	    ParameterId["ShelfDropPositions"] = "shelfDropPositions";
	    // DPI_ShelfDropModel, having type ShelfDropPresModel
	    ParameterId["ShelfDropModel"] = "shelfDropModel";
	    // DPI_ShelfDropModels, having type ShelfDropPresModel[]
	    ParameterId["ShelfDropModels"] = "shelfDropModels";
	    // DPI_Drag, having type DragPresModel
	    ParameterId["Drag"] = "drag";
	    // DPI_SceneElement, having type SceneElementPresModel
	    ParameterId["SceneElement"] = "sceneElement";
	    // DPI_SceneElements, having type SceneElementPresModel[]
	    ParameterId["SceneElements"] = "sceneElements";
	    // DPI_QuickFilterType, having type QuickFilterType
	    ParameterId["QuickFilterType"] = "quickFilterType";
	    // DPI_CatMode, having type QuickFilterCategoricalMode
	    ParameterId["CatMode"] = "categoricalMode";
	    // DPI_CatCtrl, having type QuickFilterCategoricalCtrl
	    ParameterId["CatCtrl"] = "categoricalControl";
	    // DPI_QuantMode, having type QuickFilterQuantitativeMode
	    ParameterId["QuantMode"] = "quantitativeMode";
	    // DPI_QuantCtrl, having type QuickFilterQuantitativeCtrl
	    ParameterId["QuantCtrl"] = "quantitativeControl";
	    // DPI_ZoneCommon, having type ZoneCommonPresModel
	    ParameterId["ZoneCommon"] = "zoneCommon";
	    // DPI_ZoneCommonListItems, having type ZoneCommonPresModel[]
	    ParameterId["ZoneCommonListItems"] = "zoneCommonListItems";
	    // DPI_Zone, having type ZonePresModel
	    ParameterId["Zone"] = "zone";
	    // DPI_Zones, having type Dictionary(of ZonePresModel)
	    ParameterId["Zones"] = "zones";
	    // DPI_ImageZone, having type ImageZonePresModel
	    ParameterId["ImageZone"] = "imageZone";
	    // DPI_WebZone, having type WebZonePresModel
	    ParameterId["WebZone"] = "webZone";
	    // DPI_ZoneEdgeMoveType, having type ZoneEdgeMove
	    ParameterId["ZoneEdgeMoveType"] = "zoneEdgeMoveType";
	    // DPI_ZoneSide, having type SideType
	    ParameterId["ZoneSide"] = "zoneSide";
	    // DPI_SnapPoint, having type SnapPointPresModel
	    ParameterId["SnapPoint"] = "snapPoint";
	    // DPI_SnapPoints, having type SnapPointPresModel[]
	    ParameterId["SnapPoints"] = "snapPoints";
	    // DPI_TargetPreviewPair, having type DragDropTargetPreviewPairPresModel
	    ParameterId["TargetPreviewPair"] = "targetPreviewPair";
	    // DPI_TargetPreviewPairs, having type DragDropTargetPreviewPairPresModel[]
	    ParameterId["TargetPreviewPairs"] = "targetPreviewPairs";
	    // DPI_ContainerGuide, having type DragDropContainerGuidePresModel
	    ParameterId["ContainerGuide"] = "containerGuide";
	    // DPI_ContainerGuides, having type DragDropContainerGuidePresModel[]
	    ParameterId["ContainerGuides"] = "containerGuides";
	    // DPI_ZoneBorder, having type DragDropZoneBorderPresModel
	    ParameterId["ZoneBorder"] = "zoneBorder";
	    // DPI_ZoneBorders, having type DragDropZoneBorderPresModel[]
	    ParameterId["ZoneBorders"] = "zoneBorders";
	    // DPI_DashboardDragDrop, having type DashboardDragDropPresModel
	    ParameterId["DashboardDragDrop"] = "zoneDragDrop";
	    // DPI_DragZoneResize, having type DragZoneResizePresModel
	    ParameterId["DragZoneResize"] = "zoneResize";
	    // DPI_DashboardText, having type TextRegionPresModel
	    ParameterId["DashboardText"] = "dashboardText";
	    // DPI_DashboardTitle, having type TextRegionPresModel
	    ParameterId["DashboardTitle"] = "dashboardTitle";
	    // DPI_QuickFilterTitle, having type TextRegionPresModel
	    ParameterId["QuickFilterTitle"] = "quickFilterTitle";
	    // DPI_VisualCaption, having type TextRegionPresModel
	    ParameterId["VisualCaption"] = "visualCaption";
	    // DPI_VisualTitle, having type TextRegionPresModel
	    ParameterId["VisualTitle"] = "visualTitle";
	    // DPI_ZoneTitleRegion, having type TextRegionPresModel
	    ParameterId["ZoneTitleRegion"] = "zoneTitle";
	    // DPI_ForecastOptions, having type ForecastPresModel
	    ParameterId["ForecastOptions"] = "forecastOptions";
	    // DPI_ForecastDescription, having type ForecastDescribePresModel
	    ParameterId["ForecastDescription"] = "forecastDescription";
	    // DPI_ForecastDiagnose, having type ForecastDiagnosePresModel
	    ParameterId["ForecastDiagnose"] = "forecastDiagnose";
	    // DPI_WorkgroupPublishObject, having type WorkgroupPublishObjectPresModel
	    ParameterId["WorkgroupPublishObject"] = "publishDataSource";
	    // DPI_PublishPermissionsSummary, having type PublishPermissionsSummaryPresModel
	    ParameterId["PublishPermissionsSummary"] = "publishPermissionsSummary";
	    // DPI_CheckNameResults, having type CheckNameResultsPresModel
	    ParameterId["CheckNameResults"] = "checkNameResults";
	    // DPI_ValidatePublishViewsResult, having type ValidatePublishViewsResultPresModel
	    ParameterId["ValidatePublishViewsResult"] = "validatePublishViewsResult";
	    // DPI_PublishAuthenticationSettings, having type PublishAuthenticationSettingsPresModel
	    ParameterId["PublishAuthenticationSettings"] = "publishAuthenticationSettings";
	    // DPI_ManageDatasources, having type ManageDatasourcesPresModel
	    ParameterId["ManageDatasources"] = "manageDatasources";
	    // DPI_CredentialsAuthSettings, having type CredentialsAuthSettingsPresModel
	    ParameterId["CredentialsAuthSettings"] = "credentialsAuthSettings";
	    // DPI_ConnectionCredentialsAuthSettings, having type ConnectionCredentialsAuthSettingsPresModel
	    ParameterId["ConnectionCredentialsAuthSettings"] = "connectionCredentialsAuthSettings";
	    // DPI_ConnectionCredentialsAuthSettingsList, having type ConnectionCredentialsAuthSettingsPresModel[]
	    ParameterId["ConnectionCredentialsAuthSettingsList"] = "connectionCredentialsAuthSettingsList";
	    // DPI_PublishDatasourceFromWorkbookInfo, having type PublishDatasourceFromWorkbookInfoPresModel
	    ParameterId["PublishDatasourceFromWorkbookInfo"] = "publishDatasourceFromWorkbookInfo";
	    // DPI_PublishDatasourcesFromWorkbookInfo, having type PublishDatasourceFromWorkbookInfoPresModel[]
	    ParameterId["PublishDatasourcesFromWorkbookInfo"] = "publishDatasourcesFromWorkbookInfo";
	    // DPI_PublishSheet, having type PublishSheetPresModel
	    ParameterId["PublishSheet"] = "publishSheet";
	    // DPI_PublishSheets, having type PublishSheetPresModel[]
	    ParameterId["PublishSheets"] = "publishSheets";
	    // DPI_PublishObjectViews, having type PublishObjectViewsPresModel
	    ParameterId["PublishObjectViews"] = "publishObjectViews";
	    // DPI_PublishObjectPublishSheetResults, having type PublishObjectPublishSheetResultsPresModel
	    ParameterId["PublishObjectPublishSheetResults"] = "publishObjectPublishSheetResults";
	    // DPI_RefreshExtractSchedulingSettings, having type RefreshExtractSchedulingSettingsPresModel
	    ParameterId["RefreshExtractSchedulingSettings"] = "refreshExtractSchedulingSettings";
	    // DPI_SetRefreshExtractScheduleResult, having type SetRefreshExtractScheduleResultPresModel
	    ParameterId["SetRefreshExtractScheduleResult"] = "setRefreshExtractScheduleResult";
	    // DPI_CheckPublishObjectNameWarningsResults, having type CheckPublishObjectNameWarningsResultsPresModel
	    ParameterId["CheckPublishObjectNameWarningsResults"] = "checkPublishObjectNameWarningsResults";
	    // DPI_PublishDatasourceOnWorkbookPublishResults, having type PublishDatasourceOnWorkbookPublishResultsPresModel
	    ParameterId["PublishDatasourceOnWorkbookPublishResults"] = "publishDatasourceOnWorkbookPublishResult";
	    // DPI_PublishDataSourceResult, having type PublishDataSourceResultPresModel
	    ParameterId["PublishDataSourceResult"] = "publishDataSourceResult";
	    // DPI_PublishWarningMessage, having type PublishWarningMessagePresModel
	    ParameterId["PublishWarningMessage"] = "publishWarningMessage";
	    // DPI_MustDowngradeToPublishWarningMessagePresModel, having type PublishWarningMessagePresModel
	    ParameterId["MustDowngradeToPublishWarningMessagePresModel"] = "mustDowngradeToPublishWarningMessagePresModel";
	    // DPI_PublishSelectedAttributes, having type PublishSelectedAttributesPresModel
	    ParameterId["PublishSelectedAttributes"] = "publishSelectedAttributes";
	    // DPI_AutosaveFile, having type AutosaveFilePresModel
	    ParameterId["AutosaveFile"] = "autosaveFile";
	    // DPI_AutosaveFiles, having type AutosaveFilePresModel[]
	    ParameterId["AutosaveFiles"] = "autosaveFiles";
	    // DPI_FunctionGroup, having type FunctionGroup
	    ParameterId["FunctionGroup"] = "funcGrp";
	    // DPI_FunctionGroups, having type FunctionGroup[]
	    ParameterId["FunctionGroups"] = "funcGrps";
	    // DPI_FunctionArgType, having type FunctionArgType
	    ParameterId["FunctionArgType"] = "funcArgType";
	    // DPI_FunctionArgTypes, having type FunctionArgType[]
	    ParameterId["FunctionArgTypes"] = "funcArgTypes";
	    // DPI_CalculationStyle, having type CalcStyle
	    ParameterId["CalculationStyle"] = "calculationStyle";
	    // DPI_Calculation, having type CalculationPresModel
	    ParameterId["Calculation"] = "calculation";
	    // DPI_TypeInPill, having type CalculationPresModel
	    ParameterId["TypeInPill"] = "typeInPill";
	    // DPI_CalcErrorInfo, having type CalcErrorInfoPresModel
	    ParameterId["CalcErrorInfo"] = "errorInfo";
	    // DPI_CalcErrorInfos, having type CalcErrorInfoPresModel[]
	    ParameterId["CalcErrorInfos"] = "errorInfoList";
	    // DPI_CalcualtionValidation, having type CalculationValidationPresModel
	    ParameterId["CalcualtionValidation"] = "calculationValidation";
	    // DPI_ExpressionFunction, having type ExpressionFunctionPresModel
	    ParameterId["ExpressionFunction"] = "expressionFunc";
	    // DPI_ExpressionFunctions, having type ExpressionFunctionPresModel[]
	    ParameterId["ExpressionFunctions"] = "expressionFuncList";
	    // DPI_ExpressionFunctionsPM, having type ExpressionFunctionsPresModel
	    ParameterId["ExpressionFunctionsPM"] = "expressionFuncPm";
	    // DPI_StyleToken, having type StyleTokenPresModel
	    ParameterId["StyleToken"] = "styleToken";
	    // DPI_StyleTokens, having type StyleTokenPresModel[]
	    ParameterId["StyleTokens"] = "styleTokenList";
	    // DPI_CalcEditorTextSelection, having type CalcEditorTextSelectionPresModel
	    ParameterId["CalcEditorTextSelection"] = "calcEditorTextSelection";
	    // DPI_AutoCompleteItemType, having type AutoCompleteItemType
	    ParameterId["AutoCompleteItemType"] = "autocompleteType";
	    // DPI_AutoCompleteItem, having type AutoCompleteItemPresModel
	    ParameterId["AutoCompleteItem"] = "autocompleteItem";
	    // DPI_AutoCompleteItems, having type AutoCompleteItemPresModel[]
	    ParameterId["AutoCompleteItems"] = "autocompleteItemList";
	    // DPI_CalculationAutoCompleteContextMenu, having type CalculationAutoCompleteContextMenuPresModel
	    ParameterId["CalculationAutoCompleteContextMenu"] = "calculationAutocompleteContextMenu";
	    // DPI_CalcApplyResult, having type CalcApplyResult
	    ParameterId["CalcApplyResult"] = "calculationApplyResult";
	    // DPI_RampBorderStyledBox, having type StyledBoxPresModel
	    ParameterId["RampBorderStyledBox"] = "rampBorderStyledBox";
	    // DPI_StyledBox, having type StyledBoxPresModel
	    ParameterId["StyledBox"] = "styledBox";
	    // DPI_GlobalStyledBox, having type StyledBoxPresModel
	    ParameterId["GlobalStyledBox"] = "globalStyledBox";
	    // DPI_StyleContext, having type StyleContextPresModel
	    ParameterId["StyleContext"] = "styleContext";
	    // DPI_CurrentTextStyle, having type TextStylePresModel
	    ParameterId["CurrentTextStyle"] = "currentTextStyle";
	    // DPI_LabelTextStyle, having type TextStylePresModel
	    ParameterId["LabelTextStyle"] = "labelTextStyle";
	    // DPI_OriginalTextStyle, having type TextStylePresModel
	    ParameterId["OriginalTextStyle"] = "originalTextStyle";
	    // DPI_SelectedTextStyleModel, having type TextStylePresModel
	    ParameterId["SelectedTextStyleModel"] = "selectedTextStyleModel";
	    // DPI_SwatchTextStyleModel, having type TextStylePresModel
	    ParameterId["SwatchTextStyleModel"] = "swatchTextStyle";
	    // DPI_TextStyleModel, having type TextStylePresModel
	    ParameterId["TextStyleModel"] = "textStyle";
	    // DPI_TitleStyleModel, having type TextStylePresModel
	    ParameterId["TitleStyleModel"] = "titleStyleModel";
	    // DPI_PropertyBag, having type PropertyBagPresModel
	    ParameterId["PropertyBag"] = "propBagWrapper";
	    // DPI_PresModelMap, having type Dictionary(of PropertyBagPresModel)
	    ParameterId["PresModelMap"] = "presModelMap";
	    // DPI_PresentationLayerNotifications, having type PresModelMapPresModel
	    ParameterId["PresentationLayerNotifications"] = "presentationLayerNotifications";
	    // DPI_SecondaryInfo, having type PresModelMapPresModel
	    ParameterId["SecondaryInfo"] = "secondaryInfo";
	    // DPI_ClientDashboardUIMetric, having type ClientDashboardUIMetricPresModel
	    ParameterId["ClientDashboardUIMetric"] = "clientDashboardUiMetric";
	    // DPI_ClientDashboardUIMetrics, having type ClientDashboardUIMetricPresModel[]
	    ParameterId["ClientDashboardUIMetrics"] = "clientDashboardUiMetrics";
	    // DPI_ClientDashboardUIMetricContainer, having type ClientDashboardUIMetricContainerPresModel
	    ParameterId["ClientDashboardUIMetricContainer"] = "clientDashboardUiMetricContainer";
	    // DPI_ExtSvcConfig, having type ExtSvcConfigPresModel
	    ParameterId["ExtSvcConfig"] = "extSvcConfig";
	    // DPI_StoryboardSheetItem, having type StoryboardSheetItemPresModel
	    ParameterId["StoryboardSheetItem"] = "storyboardSheetItem";
	    // DPI_StoryboardSheetItems, having type StoryboardSheetItemPresModel[]
	    ParameterId["StoryboardSheetItems"] = "storyboardSheetItems";
	    // DPI_StoryboardSheetList, having type StoryboardSheetListPresModel
	    ParameterId["StoryboardSheetList"] = "storyboardSheetList";
	    // DPI_FitToStoryBoardOptionItem, having type FitToStoryBoardOptionItemPresModel
	    ParameterId["FitToStoryBoardOptionItem"] = "fitToStoryboardOptionItem";
	    // DPI_FitToStoryBoardOptionItems, having type FitToStoryBoardOptionItemPresModel[]
	    ParameterId["FitToStoryBoardOptionItems"] = "fitToStoryboardOptionItems";
	    // DPI_FitToStoryBoardOptionList, having type FitToStoryBoardOptionListPresModel
	    ParameterId["FitToStoryBoardOptionList"] = "fitToStoryboardOptionList";
	    // DPI_StoryPointNavItem, having type StoryPointNavItemPresModel
	    ParameterId["StoryPointNavItem"] = "storypointNavItem";
	    // DPI_StoryPointNavItems, having type StoryPointNavItemPresModel[]
	    ParameterId["StoryPointNavItems"] = "storypointNavItems";
	    // DPI_FlipboardNav, having type FlipboardNavPresModel
	    ParameterId["FlipboardNav"] = "flipboardNav";
	    // DPI_ScrollBarStyle, having type ScrollBarStylePresModel
	    ParameterId["ScrollBarStyle"] = "scrollBarStyle";
	    // DPI_DashboardZoneLayoutPane, having type DashboardZoneLayoutPanePresModel
	    ParameterId["DashboardZoneLayoutPane"] = "dashboardZoneLayoutPane";
	    // DPI_SelectedStoryPointStyle, having type StoryPointCaptionStylePresModel
	    ParameterId["SelectedStoryPointStyle"] = "selectedStoryPointStyle";
	    // DPI_UnselectedStoryPointStyle, having type StoryPointCaptionStylePresModel
	    ParameterId["UnselectedStoryPointStyle"] = "unselectedStoryPointStyle";
	    // DPI_FlipboardNavStyle, having type FlipboardNavStylePresModel
	    ParameterId["FlipboardNavStyle"] = "flipboardNavStyle";
	    // DPI_StoryPoint, having type StoryPointPresModel
	    ParameterId["StoryPoint"] = "storyPoint";
	    // DPI_StoryPoints, having type Dictionary(of StoryPointPresModel)
	    ParameterId["StoryPoints"] = "storyPoints";
	    // DPI_Flipboard, having type FlipboardPresModel
	    ParameterId["Flipboard"] = "flipboard";
	    // DPI_StoryPair, having type StoryPairPresModel
	    ParameterId["StoryPair"] = "storyPair";
	    // DPI_StoryPairs, having type StoryPairPresModel[]
	    ParameterId["StoryPairs"] = "storyPairs";
	    // DPI_StoryboardPM, having type StoryboardPresModel
	    ParameterId["StoryboardPM"] = "storyboardPm";
	    // DPI_HiDpiIconDictionary, having type ImageCollectionPresModel
	    ParameterId["HiDpiIconDictionary"] = "hiDpiIconDictionary";
	    // DPI_IconDictionary, having type ImageCollectionPresModel
	    ParameterId["IconDictionary"] = "iconDictionary";
	    // DPI_IconResourceDictionary, having type ImageResourceCollectionPresModel
	    ParameterId["IconResourceDictionary"] = "iconResDictionary";
	    // DPI_DataPreviewWindowMessage, having type DataPreviewWindowMessagePresModel
	    ParameterId["DataPreviewWindowMessage"] = "dataPreviewWindowMessage";
	    // DPI_DataSourceData, having type DataSourceDataPresModel
	    ParameterId["DataSourceData"] = "dataSrcData";
	    // DPI_DataSourceSort, having type DataSourceSortPresModel
	    ParameterId["DataSourceSort"] = "dataSrcSort";
	    // DPI_ColumnInfo, having type DSColumnInfoPresModel
	    ParameterId["ColumnInfo"] = "columnInfo";
	    // DPI_ColumnInfos, having type DSColumnInfoPresModel[]
	    ParameterId["ColumnInfos"] = "columnInfos";
	    // DPI_DataFormatter, having type DVFormatter
	    ParameterId["DataFormatter"] = "dataFormatter";
	    // DPI_JoinDescription, having type JoinDescriptionPresModel
	    ParameterId["JoinDescription"] = "joinDescription";
	    // DPI_JoinDescriptions, having type Dictionary(of JoinDescriptionPresModel)
	    ParameterId["JoinDescriptions"] = "joinDescriptions";
	    // DPI_FileTableInfo, having type FileTableInfoPresModel
	    ParameterId["FileTableInfo"] = "fileTableInfo";
	    // DPI_FieldMapping, having type FieldMappingPresModel
	    ParameterId["FieldMapping"] = "fieldMapping";
	    // DPI_FieldMappingData, having type FieldMappingDataPresModel
	    ParameterId["FieldMappingData"] = "fieldMappingData";
	    // DPI_FieldMappingDataVector, having type FieldMappingDataPresModel[]
	    ParameterId["FieldMappingDataVector"] = "fieldMappingDataVector";
	    // DPI_FrameFinder, having type FrameFinderPresModel
	    ParameterId["FrameFinder"] = "frameFinder";
	    // DPI_SheetLinkFieldMapping, having type SheetLinkFieldMappingPresModel
	    ParameterId["SheetLinkFieldMapping"] = "sheetLinkFieldMapping";
	    // DPI_UnionInfo, having type UnionInfoPresModel
	    ParameterId["UnionInfo"] = "unionInfo";
	    // DPI_UnionTableInfo, having type UnionTableInfoPresMode
	    ParameterId["UnionTableInfo"] = "unionTableInfo";
	    // DPI_UnionTableInfos, having type UnionTableInfoPresModel[]
	    ParameterId["UnionTableInfos"] = "unionTableInfos";
	    // DPI_ConnectionPBUnionInfo, having type PBUnionInfoPresModel
	    ParameterId["ConnectionPBUnionInfo"] = "connectionPbunionInfo";
	    // DPI_ConnectionPBUnionInfos, having type PBUnionInfoPresModel[]
	    ParameterId["ConnectionPBUnionInfos"] = "connectionPbunionInfos";
	    // DPI_JoinClause, having type JoinClausePresModel
	    ParameterId["JoinClause"] = "joinClause";
	    // DPI_JoinClauses, having type JoinClausePresModel[]
	    ParameterId["JoinClauses"] = "joinClauses";
	    // DPI_JoinValidationResult, having type JoinValidationResultPresModel
	    ParameterId["JoinValidationResult"] = "joinValidationResult";
	    // DPI_JoinTableInfo, having type JoinTableInfoPresModel
	    ParameterId["JoinTableInfo"] = "joinTableInfo";
	    // DPI_ParameterInfo, having type JoinTableInfoPresModel
	    ParameterId["ParameterInfo"] = "parameterInfo";
	    // DPI_JoinTableInfos, having type JoinTableInfoPresModel[]
	    ParameterId["JoinTableInfos"] = "joinTableInfos";
	    // DPI_JoinOnCalcInfo, having type JoinOnCalcInfoPresModel
	    ParameterId["JoinOnCalcInfo"] = "joinOnCalcInfo";
	    // DPI_ConnectionSummary, having type ConnectionSummaryPresModel
	    ParameterId["ConnectionSummary"] = "connectionSummary";
	    // DPI_ConnectionSummaries, having type ConnectionSummaryPresModel[]
	    ParameterId["ConnectionSummaries"] = "connectionSummaries";
	    // DPI_TopLevelConnectionDescription, having type TopLevelConnectionDescriptionPresModel
	    ParameterId["TopLevelConnectionDescription"] = "topLevelConnectionDescription";
	    // DPI_DataConnectionTableViewMessages, having type DataConnectionTableViewMessagesPresModel
	    ParameterId["DataConnectionTableViewMessages"] = "dataConnectionTableViewMessages";
	    // DPI_TextTransformScript, having type TextTransformScriptPresModel
	    ParameterId["TextTransformScript"] = "textTransformScript";
	    // DPI_CalendarDateOptions, having type CalendarDateOptionsPresModel
	    ParameterId["CalendarDateOptions"] = "calendarDateOptions";
	    // DPI_GoToWorksheetTooltipPresModel, having type GoToWorksheetTooltipPresModel
	    ParameterId["GoToWorksheetTooltipPresModel"] = "goToWorksheetTooltipPresModel";
	    // DPI_TableCleaningPresModel, having type TableCleaningPresModel
	    ParameterId["TableCleaningPresModel"] = "tableCleaningPresModel";
	    // DPI_PivotPresModel, having type PivotPresModel
	    ParameterId["PivotPresModel"] = "pivotPresModel";
	    // DPI_PivotTreeItemPresModel, having type PivotTreeItemPresModel
	    ParameterId["PivotTreeItemPresModel"] = "pivotTreeItemPresModel";
	    // DPI_PivotTreeItems, having type PivotTreeItemPresModel[]
	    ParameterId["PivotTreeItems"] = "pivotTreeItemsPresModel";
	    // DPI_PivotDisplay, having type PivotDisplayPresModel
	    ParameterId["PivotDisplay"] = "pivotDisplay";
	    // DPI_PivotTag, having type NameColumnsPairPresModel
	    ParameterId["PivotTag"] = "pivotTag";
	    // DPI_PivotGroups, having type NameColumnsPairPresModel[]
	    ParameterId["PivotGroups"] = "pivotGroups";
	    // DPI_DataSourceDropdown, having type DataSourceDropdownPresModel
	    ParameterId["DataSourceDropdown"] = "dataSourceDropdown";
	    // DPI_ConnectionDropdown, having type ConnectionDropdownPresModel
	    ParameterId["ConnectionDropdown"] = "connectionDropdown";
	    // DPI_ActivityEvent, having type ActivityEventPresModel
	    ParameterId["ActivityEvent"] = "activityEvent";
	    // DPI_UIAutomation, having type UIAutomationPresModel
	    ParameterId["UIAutomation"] = "uiAutomation";
	    // DPI_UIAutomationIndex, having type UIAutomationIndexPresModel
	    ParameterId["UIAutomationIndex"] = "uiAutomationIndex";
	    // DPI_UIAutomationIndexList, having type UIAutomationIndexPresModel[]
	    ParameterId["UIAutomationIndexList"] = "uiAutomationIndexList";
	    // DPI_UIAutomationComponentInfo, having type UIAutomationComponentInfoPresModel
	    ParameterId["UIAutomationComponentInfo"] = "uiAutomationComponentInfo";
	    // DPI_UIAutomationComponentInfoList, having type UIAutomationComponentInfoPresModel[]
	    ParameterId["UIAutomationComponentInfoList"] = "uiAutomationComponentInfoList";
	    // DPI_Geometry, having type GeometryPresModel
	    ParameterId["Geometry"] = "geometry";
	    // DPI_MultiPoint, having type MultiPointPresModel
	    ParameterId["MultiPoint"] = "multiPoint";
	    // DPI_MultiLine, having type MultiLinePresModel
	    ParameterId["MultiLine"] = "multiLine";
	    // DPI_MultiPolygon, having type MultiPolygonPresModel
	    ParameterId["MultiPolygon"] = "multiPolygon";
	    // DPI_Polygon, having type PolygonPresModel
	    ParameterId["Polygon"] = "polygon";
	    // DPI_PolygonList, having type PolygonPresModel[]
	    ParameterId["PolygonList"] = "polygonList";
	    // DPI_Line, having type LinePresModel
	    ParameterId["Line"] = "line";
	    // DPI_LineList, having type LinePresModel[]
	    ParameterId["LineList"] = "lineList";
	    // DPI_TabbedAuthentication, having type TabbedAuthenticationPresModel
	    ParameterId["TabbedAuthentication"] = "tabbedAuthentication";
	    // DPI_TabbedAuthenticationTabInfo, having type TabbedAuthenticationTabInfoPresModel
	    ParameterId["TabbedAuthenticationTabInfo"] = "tabbedAuthenticationTabInfo";
	    // DPI_TabbedAuthenticationTabInfos, having type TabbedAuthenticationTabInfoPresModel[]
	    ParameterId["TabbedAuthenticationTabInfos"] = "tabbedAuthenticationTabInfos";
	    // DPI_GeographicSearchCandidate, having type GeographicSearchCandidatePresModel
	    ParameterId["GeographicSearchCandidate"] = "geographicSearchCandidate";
	    // DPI_GeographicSearchCandidateList, having type GeographicSearchCandidatePresModel[]
	    ParameterId["GeographicSearchCandidateList"] = "geographicSearchCandidateList";
	    // DPI_GeographicSearchResults, having type GeographicSearchPresModel
	    ParameterId["GeographicSearchResults"] = "geographicSearchResults";
	    // DPI_ParamInfo, having type ParameterInfoPresModel
	    ParameterId["ParamInfo"] = "paramInfo";
	    // DPI_ParamInfos, having type ParameterInfoPresModel[]
	    ParameterId["ParamInfos"] = "paramInfos";
	    // DPI_ParamNamespaceInfo, having type ParameterNamespaceInfoInfoPresModel
	    ParameterId["ParamNamespaceInfo"] = "paramNamespaceInfo";
	    // DPI_ParamNamespaceInfos, having type ParameterNamespaceInfoPresModel[]
	    ParameterId["ParamNamespaceInfos"] = "paramNamespaceInfos";
	    // DPI_ParamRegistryInfo, having type ParameterRegistryInfoPresModel
	    ParameterId["ParamRegistryInfo"] = "paramRegistryInfo";
	    // DPI_DataSourceProperties, having type DataSourcePropertiesPresModel
	    ParameterId["DataSourceProperties"] = "connectionProperties";
	    // DPI_ConnectionTypePresModel, having type ConnectionTypePresModel
	    ParameterId["ConnectionTypePresModel"] = "connectionTypePresModel";
	    // DPI_ConnectionTypes, having type ConnectionTypePresModel[]
	    ParameterId["ConnectionTypes"] = "connectionTypes";
	    // DPI_ConnectionTypeGroupPresModel, having type ConnectionTypeGroupPresModel
	    ParameterId["ConnectionTypeGroupPresModel"] = "connectionTypeGroupPresModel";
	    // DPI_SavedDataSourcePresModel, having type SavedDataSourcePresModel
	    ParameterId["SavedDataSourcePresModel"] = "savedDatasourcePresModel";
	    // DPI_SavedDataSources, having type SavedDataSourcePresModel[]
	    ParameterId["SavedDataSources"] = "savedDatasources";
	    // DPI_SavedDataSourcesPresModel, having type SavedDataSourcesPresModel
	    ParameterId["SavedDataSourcesPresModel"] = "savedDatasourcesPresModel";
	    // DPI_OpenPaneItemPresModel, having type OpenPaneItemPresModel
	    ParameterId["OpenPaneItemPresModel"] = "openPaneItemPresModel";
	    // DPI_OpenPaneItems, having type OpenPaneItemPresModel[]
	    ParameterId["OpenPaneItems"] = "openPaneItems";
	    // DPI_OpenPaneItemsPresModel, having type OpenPaneItemsPresModel
	    ParameterId["OpenPaneItemsPresModel"] = "openPaneItemsPresModel";
	    // DPI_VariableValue, having type VariableValuePresModel
	    ParameterId["VariableValue"] = "variableValue";
	    // DPI_VariableValues, having type VariableValuePresModel[]
	    ParameterId["VariableValues"] = "variableValues";
	    // DPI_ServerVariableValue, having type ServerVariableValuePresModel
	    ParameterId["ServerVariableValue"] = "serverVariableValue";
	    // DPI_EditableVariableValue, having type EditableVariableValuePresModel
	    ParameterId["EditableVariableValue"] = "editableVariableValue";
	    // DPI_ServerVariableMetadata, having type ServerVariableMetadataPresModel
	    ParameterId["ServerVariableMetadata"] = "serverVariableMetadata";
	    // DPI_PromptVariable, having type PromptVariablePresModel
	    ParameterId["PromptVariable"] = "promptVariable";
	    // DPI_PromptVariables, having type PromptVariablePresModel[]
	    ParameterId["PromptVariables"] = "promptVariables";
	    // DPI_VariablePromptDialog, having type VariablePromptDialogPresModel
	    ParameterId["VariablePromptDialog"] = "variablePromptDialog";
	    // DPI_VariableValueOperation, having type VariableValueOperationPresModel
	    ParameterId["VariableValueOperation"] = "variableValueOperation";
	    // DPI_VariableValueOperations, having type VariableValueOperationPresModel[]
	    ParameterId["VariableValueOperations"] = "variableValueOperations";
	    // DPI_TableOptionsPresModel, having type TableOptionsPresModel
	    ParameterId["TableOptionsPresModel"] = "tableOptionsPresModel";
	    // DPI_ClientInfoPresModel, having type ClientInfoPresModel
	    ParameterId["ClientInfoPresModel"] = "clientInfoPresModel";
	    // DPI_TableauFileInfoPresModel, having type TableauFileInfoPresModel
	    ParameterId["TableauFileInfoPresModel"] = "tableauFileInfoPresModel";
	    // DPI_DebuggingInfoPresModel, having type DebuggingInfoPresModel
	    ParameterId["DebuggingInfoPresModel"] = "debuggingInfoPresModel";
	    // DPI_RunningThreadInfoPresModel, having type RunningThreadInfoPresModel
	    ParameterId["RunningThreadInfoPresModel"] = "runningThreadInfoPresModel";
	    // DPI_AboutDialogInfoPresModel, having type AboutDialogInfoPresModel
	    ParameterId["AboutDialogInfoPresModel"] = "aboutDialogInfoPresModel";
	    // DPI_HybridUIShowcasePresModel, having type HybridUIShowcasePresModel
	    ParameterId["HybridUIShowcasePresModel"] = "hybridUiShowcasePresModel";
	    // DPI_DefaultTextFormat, having type DefaultTextFormatPresModel
	    ParameterId["DefaultTextFormat"] = "defaultTextFormat";
	    // DPI_MapBoxServerInfoPresModel, having type MapBoxServerInfoPresModel
	    ParameterId["MapBoxServerInfoPresModel"] = "mapboxServerInfoPresModel";
	    // DPI_WMSServerInfoPresModel, having type WMSServerInfoPresModel
	    ParameterId["WMSServerInfoPresModel"] = "wmsServerInfoPresModel";
	    // DPI_MapSourceConflictPresModel, having type MapSourceConflictPresModel
	    ParameterId["MapSourceConflictPresModel"] = "mapSourceConflictPresModel";
	    // DPI_EnumeratedSetDialogPresModel, having type EnumeratedSetDialogPresModel
	    ParameterId["EnumeratedSetDialogPresModel"] = "enumeratedSetDialogPresModel";
	    // DPI_EditAliasesDialog, having type EditAliasesDialogPresModel
	    ParameterId["EditAliasesDialog"] = "editAliasesDialogPresModel";
	    // DPI_AliasesPresModel, having type AliasesPresModel
	    ParameterId["AliasesPresModel"] = "aliasesPresModel";
	    // DPI_ClearAliasesPresModel, having type AliasesPresModel
	    ParameterId["ClearAliasesPresModel"] = "clearAliasesPresModel";
	    // DPI_NewAliasesPresModel, having type NewAliasesPresModel
	    ParameterId["NewAliasesPresModel"] = "newAliasesPresModel";
	    // DPI_AliasPresModel, having type AliasPresModel
	    ParameterId["AliasPresModel"] = "aliasPresModel";
	    // DPI_AliasItem, having type AliasItemPresModel
	    ParameterId["AliasItem"] = "aliasItem";
	    // DPI_DuplicateAliasItem, having type AliasItemPresModel
	    ParameterId["DuplicateAliasItem"] = "duplicateAliasItem";
	    // DPI_AliasList, having type AliasItemPresModel[]
	    ParameterId["AliasList"] = "aliasList";
	    // DPI_AliasResultItem, having type AliasResultItemPresModel
	    ParameterId["AliasResultItem"] = "aliasResultItem";
	    // DPI_AliasResultList, having type AliasResultItemPresModel[]
	    ParameterId["AliasResultList"] = "aliasResultList";
	    // DPI_AliasResults, having type AliasResultsPresModel
	    ParameterId["AliasResults"] = "aliasResults";
	    // DPI_EditSetDialogPresModel, having type EditSetDialogPresModel
	    ParameterId["EditSetDialogPresModel"] = "editSetDialogPresModel";
	    // DPI_ConfirmationPresModel, having type ConfirmationPresModel
	    ParameterId["ConfirmationPresModel"] = "confirmationPresModel";
	    // DPI_NotificationPresModel, having type NotificationPresModel
	    ParameterId["NotificationPresModel"] = "notificationPresModel";
	    // DPI_RetargetDataSourceDialogPresModel, having type RetargetDataSourceDialogPresModel
	    ParameterId["RetargetDataSourceDialogPresModel"] = "retargetDatasourceDialogPresModel";
	    // DPI_SharedFilterPresModel, having type SharedFilterPresModel
	    ParameterId["SharedFilterPresModel"] = "sharedFilterPresModel";
	    // DPI_SharedFilterWorksheetInfo, having type SharedFilterWorksheetInfoPresModel
	    ParameterId["SharedFilterWorksheetInfo"] = "sharedFilterWorksheetInfo";
	    // DPI_SharedFilterWorksheetInfoList, having type SharedFilterWorksheetInfoPresModel[]
	    ParameterId["SharedFilterWorksheetInfoList"] = "sharedFilterWorksheetInfoList";
	    // DPI_FieldPickerTreePresModel, having type FieldPickerTreePresModel
	    ParameterId["FieldPickerTreePresModel"] = "fieldPickerTreePresModel";
	    // DPI_FieldPickerTreePresModelSource, having type FieldPickerTreePresModel
	    ParameterId["FieldPickerTreePresModelSource"] = "fieldPickerTreePresModelSource";
	    // DPI_FieldPickerTreePresModelTarget, having type FieldPickerTreePresModel
	    ParameterId["FieldPickerTreePresModelTarget"] = "fieldPickerTreePresModelTarget";
	    // DPI_ErrorInfo, having type ErrorInfoPresModel
	    ParameterId["ErrorInfo"] = "errorInfoPresModel";
	    // DPI_CustomSplitPresModel, having type CustomSplitPresModel
	    ParameterId["CustomSplitPresModel"] = "customSplitPresModel";
	    // DPI_PageSetup, having type PageSetupPresModel
	    ParameterId["PageSetup"] = "pageSetup";
	    // DPI_ServerConnectStatus, having type ServerConnectionStatus
	    ParameterId["ServerConnectStatus"] = "serverConnectionStatus";
	    // DPI_GetFilterItemsResponse, having type GetFilterItemsResponsePresModel
	    ParameterId["GetFilterItemsResponse"] = "getFilterItemsResponse";
	    // DPI_FilterSearchResponse, having type FilterSearchResponsePresModel
	    ParameterId["FilterSearchResponse"] = "filterSearchResponse";
	    // DPI_FilterSearchWithIndexResponse, having type FilterSearchWithIndexResponsePresModel
	    ParameterId["FilterSearchWithIndexResponse"] = "filterSearchWithIndexResponse";
	    // DPI_FilterShowChildrenResponse, having type FilterShowChildrenResponsePresModel
	    ParameterId["FilterShowChildrenResponse"] = "filterShowChildrenResponse";
	    // DPI_EditDataServerConnection, having type EditDataServerConnectionPresModel
	    ParameterId["EditDataServerConnection"] = "editDataServerConnection";
	    // DPI_ImagesEdit, having type ImagesEditPresModel
	    ParameterId["ImagesEdit"] = "imagesEdit";
	    // DPI_BackgroundImage, having type BackgroundImagePresModel
	    ParameterId["BackgroundImage"] = "backgroundImage";
	    // DPI_BackgroundImages, having type BackgroundImagePresModel[]
	    ParameterId["BackgroundImages"] = "backgroundImages";
	    // DPI_Predicate, having type PredicatePresModel
	    ParameterId["Predicate"] = "predicate";
	    // DPI_Predicates, having type PredicatePresModel[]
	    ParameterId["Predicates"] = "predicates";
	    // DPI_ImagesEditResult, having type ImagesEditResultPresModel
	    ParameterId["ImagesEditResult"] = "imagesEditResult";
	    // DPI_SortDialogPresModel, having type SortDialogPresModel
	    ParameterId["SortDialogPresModel"] = "sortDialogPresModel";
	    // DPI_CompoundTableCalc, having type CompoundTableCalculationPresModel
	    ParameterId["CompoundTableCalc"] = "compoundTableCalculationPresModel";
	    // DPI_TableCalc, having type TableCalculationPresModel
	    ParameterId["TableCalc"] = "tableCalculationPresModel";
	    // DPI_TableCalcs, having type TableCalculationPresModel[]
	    ParameterId["TableCalcs"] = "tableCalculationPresModels";
	    // DPI_TableCalcIdentifier, having type TableCalcIdentifierPresModel
	    ParameterId["TableCalcIdentifier"] = "tableCalcIdentifier";
	    // DPI_NestedTableCalcInfo, having type NestedTableCalcInfoPresModel
	    ParameterId["NestedTableCalcInfo"] = "nestedTableCalcInfo";
	    // DPI_NestedTableCalcInfos, having type NestedTableCalcInfoPresModel[]
	    ParameterId["NestedTableCalcInfos"] = "nestedTableCalcInfos";
	    // DPI_Ordering, having type TableCalcOrderingPresModel
	    ParameterId["Ordering"] = "tableCalcOrderingPresModel";
	    // DPI_Cumulative, having type CumulativeTableCalcPresModel
	    ParameterId["Cumulative"] = "cumulativeTableCalcPresModel";
	    // DPI_ReferenceOptions, having type TableCalcReferenceOptionsPresModel
	    ParameterId["ReferenceOptions"] = "tableCalcReferenceOptionsPresModel";
	    // DPI_Difference, having type DifferenceTableCalcPresModel
	    ParameterId["Difference"] = "differenceTableCalcPresModel";
	    // DPI_Window, having type WindowTableCalcPresModel
	    ParameterId["Window"] = "windowTableCalcPresModel";
	    // DPI_PercentTotal, having type PercentTotalTableCalcPresModel
	    ParameterId["PercentTotal"] = "percentTotalTableCalcPresModel";
	    // DPI_Rank, having type RankTableCalcPresModel
	    ParameterId["Rank"] = "rankTableCalcPresModel";
	    // DPI_Custom, having type CustomTableCalcPresModel
	    ParameterId["Custom"] = "customTableCalcPresModel";
	    // DPI_WebDataUrl, having type WebDataUrlPresModel
	    ParameterId["WebDataUrl"] = "webDataUrl";
	    // DPI_VisitedWebDataConnectors, having type WebDataUrlPresModel[]
	    ParameterId["VisitedWebDataConnectors"] = "visitedWebDataConnectors";
	    // DPI_WebDataSessionUrls, having type WebDataUrlPresModel[]
	    ParameterId["WebDataSessionUrls"] = "webDataSessionUrls";
	    // DPI_WebDataUrls, having type WebDataUrlPresModel[]
	    ParameterId["WebDataUrls"] = "webDataUrls";
	    // DPI_FieldPicker, having type FieldPickerPresModel
	    ParameterId["FieldPicker"] = "fieldPicker";
	    // DPI_DescribeField, having type DescribeFieldPresModel
	    ParameterId["DescribeField"] = "describeField";
	    // DPI_ShowDataPresModel, having type ShowDataPresModel
	    ParameterId["ShowDataPresModel"] = "showDataPresModel";
	    // DPI_DataTablePresModel, having type ShowDataTablePresModel
	    ParameterId["DataTablePresModel"] = "dataTablePresModel";
	    // DPI_DataTablePresModels, having type ShowDataTablePresModel[]
	    ParameterId["DataTablePresModels"] = "dataTablePresModels";
	    // DPI_SummaryTablePresModels, having type ShowDataTablePresModel[]
	    ParameterId["SummaryTablePresModels"] = "summaryTablePresModels";
	    // DPI_RefreshAllExtractsPresModel, having type RefreshAllExtractsPresModel
	    ParameterId["RefreshAllExtractsPresModel"] = "refeshAllExtractsPresModel";
	    // DPI_RefreshExtractDataSourcePresModel, having type RefreshExtractDataSourcePresModel
	    ParameterId["RefreshExtractDataSourcePresModel"] = "refreshExtractDatasourcePresModel";
	    // DPI_RefreshExtractDataSourceList, having type RefreshExtractDataSourcePresModel[]
	    ParameterId["RefreshExtractDataSourceList"] = "refreshExtractDatasourceList";
	    // DPI_ExtractHistoryPresModel, having type ExtractHistoryPresModel
	    ParameterId["ExtractHistoryPresModel"] = "extractHistoryPresModel";
	    // DPI_ExtractHistoryItemPresModel, having type ExtractHistoryItemPresModel
	    ParameterId["ExtractHistoryItemPresModel"] = "extractHistoryItem";
	    // DPI_ExtractHistoryList, having type ExtractHistoryItemPresModel[]
	    ParameterId["ExtractHistoryList"] = "extractHistoryList";
	    // DPI_DataProviderPresModel, having type DataProviderPresModel
	    ParameterId["DataProviderPresModel"] = "dataProviderPresModel";
	    // DPI_FormatItem, having type FormatItemPresModel
	    ParameterId["FormatItem"] = "formatItem";
	    // DPI_FormatItemList, having type FormatItemPresModel[]
	    ParameterId["FormatItemList"] = "formatItemList";
	    // DPI_FormatContainer, having type FormatContainerPresModel
	    ParameterId["FormatContainer"] = "formatContainer";
	    // DPI_FormatPane, having type FormatPanePresModel
	    ParameterId["FormatPane"] = "formatPane";
	    // DPI_FormatSection, having type FormatSectionPresModel
	    ParameterId["FormatSection"] = "formatSection";
	    // DPI_CollapsibleSection, having type CollapsibleSectionPresModel
	    ParameterId["CollapsibleSection"] = "collapsibleSection";
	    // DPI_CompositeContainer, having type CompositeContainerPresModel
	    ParameterId["CompositeContainer"] = "compositeContainer";
	    // DPI_UnitContainer, having type UnitContainerPresModel
	    ParameterId["UnitContainer"] = "unitContainer";
	    // DPI_TabGroup, having type TabGroupPresModel
	    ParameterId["TabGroup"] = "tabGroup";
	    // DPI_Tab, having type TabPresModel
	    ParameterId["Tab"] = "tab";
	    // DPI_FormatControl, having type FormatControlPresModel
	    ParameterId["FormatControl"] = "formatControl";
	    // DPI_TextControl, having type TextControlPresModel
	    ParameterId["TextControl"] = "textControl";
	    // DPI_NumericControl, having type NumericControlPresModel
	    ParameterId["NumericControl"] = "numericControl";
	    // DPI_ColorControl, having type ColorControlPresModel
	    ParameterId["ColorControl"] = "colorControl";
	    // DPI_ToggleControl, having type ToggleControlPresModel
	    ParameterId["ToggleControl"] = "toggleControl";
	    // DPI_SelectorControl, having type SelectorControlPresModel
	    ParameterId["SelectorControl"] = "enumStringStyle";
	    // DPI_StatsAnalyticSpec, having type StatsAnalyticSpecPresModel
	    ParameterId["StatsAnalyticSpec"] = "statsAnalyticSpec";
	    // DPI_ClusterSpec, having type ClusterSpecPresModel
	    ParameterId["ClusterSpec"] = "clusteringSpec";
	    // DPI_ClusterResults, having type ClusterResultsPresModel
	    ParameterId["ClusterResults"] = "clusterResults";
	    // DPI_ClusterUnit, having type ClusterUnitPresModel
	    ParameterId["ClusterUnit"] = "cluster";
	    // DPI_ClusterUnits, having type ClusterUnitPresModel[]
	    ParameterId["ClusterUnits"] = "clusterUnitPresModels";
	    // DPI_ClusterFieldANOVA, having type ClusterFieldANOVAPresModel
	    ParameterId["ClusterFieldANOVA"] = "clusterFieldAnova";
	    // DPI_ClusterFieldANOVATable, having type ClusterFieldANOVAPresModel[]
	    ParameterId["ClusterFieldANOVATable"] = "clusterFieldAnovaTablePresModel";
	    // DPI_ClusterEdit, having type ClusterEditPresModel
	    ParameterId["ClusterEdit"] = "clusterEditPresModel";
	    // DPI_ClusterDescription, having type ClusterDescribePresModel
	    ParameterId["ClusterDescription"] = "clusterDescription";
	    // DPI_OutlierResults, having type OutlierResultsPresModel
	    ParameterId["OutlierResults"] = "outlierResults";
	    // DPI_ConnectToDataServerSourceResult, having type ConnectToDataServerSourceResultPresModel
	    ParameterId["ConnectToDataServerSourceResult"] = "connectToDataServerSourceResult";
	    // DPI_DataServerConnectionReturnStatus, having type ConnectToDataServerSourceResultPresModel
	    ParameterId["DataServerConnectionReturnStatus"] = "dataServerConnectionReturnStatus";
	    // DPI_WebQuantitativeColorDialog, having type WebQuantitativeColorDialogPresModel
	    ParameterId["WebQuantitativeColorDialog"] = "quantitativeColorDialog";
	    // DPI_WebCategoricalColorDialog, having type WebCategoricalColorDialogPresModel
	    ParameterId["WebCategoricalColorDialog"] = "categoricalColorDialog";
	    // DPI_WebSaveDatasourceDialog, having type WebSaveDatasourceDialogPresModel
	    ParameterId["WebSaveDatasourceDialog"] = "saveDatasourceDialog";
	    // DPI_BorderStyleSpec, having type StyleSpecPresModel
	    ParameterId["BorderStyleSpec"] = "borderStyleSpec";
	    // DPI_HaloStyleSpec, having type StyleSpecPresModel
	    ParameterId["HaloStyleSpec"] = "haloStyleSpec";
	    // DPI_MarksColorUberEffects, having type MarksColorUberEffectsPresModel
	    ParameterId["MarksColorUberEffects"] = "marksColorUberEffects";
	    // DPI_CategoricalColorEncoding, having type CategoricalColorEncodingPresModel
	    ParameterId["CategoricalColorEncoding"] = "categoricalColorEncoding";
	    // DPI_CategoricalShapeEncoding, having type CategoricalShapeEncodingPresModel
	    ParameterId["CategoricalShapeEncoding"] = "categoricalShapeEncoding";
	    // DPI_ShapePalettePresModel, having type ShapePalettePresModel
	    ParameterId["ShapePalettePresModel"] = "shapePalettePresModel";
	    // DPI_ShapePalettePresModels, having type ShapePalettePresModel[]
	    ParameterId["ShapePalettePresModels"] = "shapePalettePresModels";
	    // DPI_DataSourceDateProperties, having type DataSourceDatePropertiesPresModel
	    ParameterId["DataSourceDateProperties"] = "datasourceDateProperties";
	    // DPI_DatePropertiesDateFormat, having type DatePropertiesDateFormatPresModel
	    ParameterId["DatePropertiesDateFormat"] = "datePropertiesDateFormat";
	    // DPI_DatePropertiesDateFormats, having type DatePropertiesDateFormatPresModel[]
	    ParameterId["DatePropertiesDateFormats"] = "datePropertiesDateFormats";
	    // DPI_HierarchySelect, having type HierarchySelectModel
	    ParameterId["HierarchySelect"] = "hierarchySelect";
	    // DPI_HierarchySelectMember, having type HierarchySelectMemberPresModel
	    ParameterId["HierarchySelectMember"] = "hierarchySelectMember";
	    // DPI_HierarchySelectMemberList, having type HierarchySelectMemberPresModel[]
	    ParameterId["HierarchySelectMemberList"] = "hierarchySelectMemberList";
	    // DPI_HierarchySetDefaultMember, having type HierarchySetDefaultMemberPresModel
	    ParameterId["HierarchySetDefaultMember"] = "hierarchySetDefaultMember";
	    // DPI_SemiStructSchema, having type SemiStructSchemaPresModel
	    ParameterId["SemiStructSchema"] = "semiStructSchema";
	    // DPI_SemiStructSchemaMember, having type SemiStructSchemaMemberPresModel
	    ParameterId["SemiStructSchemaMember"] = "semiStructSchemaMember";
	    // DPI_SemiStructSchemaMemberList, having type SemiStructSchemaMemberPresModel[]
	    ParameterId["SemiStructSchemaMemberList"] = "semiStructSchemaMemberList";
	    // DPI_ParameterEditInfo, having type ParameterEditInfoPresModel
	    ParameterId["ParameterEditInfo"] = "parameterEditInfo";
	    // DPI_ProductParameterInfo, having type ProductParameterInfoPresModel
	    ParameterId["ProductParameterInfo"] = "productParameterInfo";
	    // DPI_CaptionedDatasourceField, having type CaptionedDatasourceInfoPresModel
	    ParameterId["CaptionedDatasourceField"] = "captionedDatasourceField";
	    // DPI_CaptionedDatasourceFields, having type CaptionedDatasourceInfoPresModel[]
	    ParameterId["CaptionedDatasourceFields"] = "captionedDatasourceFields";
	    // DPI_EditedParameterRangeDomain, having type ParameterRangeDomainPresModel
	    ParameterId["EditedParameterRangeDomain"] = "editedParameterRangeDomain";
	    // DPI_ParameterRangeDomain, having type ParameterRangeDomainPresModel
	    ParameterId["ParameterRangeDomain"] = "parameterRangeDomain";
	    // DPI_ParameterListDomain, having type ParameterListDomainPresModel
	    ParameterId["ParameterListDomain"] = "parameterListDomain";
	    // DPI_ParameterListDomainMember, having type ParameterListDomainMemberPresModel
	    ParameterId["ParameterListDomainMember"] = "parameterListDomainMember";
	    // DPI_ParameterListDomainMembers, having type ParameterListDomainMemberPresModel[]
	    ParameterId["ParameterListDomainMembers"] = "parameterListDomainMembers";
	    // DPI_IndexedDomainMember, having type IndexedDomainMemberPresModel
	    ParameterId["IndexedDomainMember"] = "indexedDomainMember";
	    // DPI_IndexedDomainMembers, having type IndexedDomainMemberPresModel[]
	    ParameterId["IndexedDomainMembers"] = "indexedDomainMembers";
	    // DPI_NewIndexedDomainMembers, having type IndexedDomainMemberPresModel[]
	    ParameterId["NewIndexedDomainMembers"] = "newIndexedDomainMembers";
	    // DPI_ParameterListDomainDiff, having type parameter-list-domain-diff
	    ParameterId["ParameterListDomainDiff"] = "parameterListDomainDiff";
	    // DPI_IndexRange, having type IndexRangePresModel
	    ParameterId["IndexRange"] = "indexRange";
	    // DPI_IndexRanges, having type IndexRangePresModel[]
	    ParameterId["IndexRanges"] = "indexRanges";
	    // DPI_CategoricalFind, having type CategoricalFindPresModel
	    ParameterId["CategoricalFind"] = "categoricalFind";
	    // DPI_CaptionedDataValue, having type CaptionedDataValuePresModel
	    ParameterId["CaptionedDataValue"] = "captionedDataValue";
	    // DPI_SelectedValueCaption, having type CaptionedDataValuePresModel
	    ParameterId["SelectedValueCaption"] = "selectedValueCaption";
	    // DPI_DataValueCaptionList, having type CaptionedDataValuePresModel[]
	    ParameterId["DataValueCaptionList"] = "dataValueCatpionList";
	    // DPI_RangeDataValue, having type RangeDataValuePresModel
	    ParameterId["RangeDataValue"] = "rangeDataValue";
	    // DPI_ParameterRangeDataValue, having type RangeDataValuePresModel
	    ParameterId["ParameterRangeDataValue"] = "parameterRangeDataValue";
	    // DPI_DataValueRangeCaptions, having type DataValueRangeCaptionsPresModel
	    ParameterId["DataValueRangeCaptions"] = "dataValueRangeCaptions";
	    // DPI_IndependentDimension, having type IndependentDimensionPresModel
	    ParameterId["IndependentDimension"] = "independentDimension";
	    // DPI_IndependentDimensions, having type IndependentDimensionPresModel[]
	    ParameterId["IndependentDimensions"] = "independentDimensions";
	    // DPI_AttributePerspective, having type PerspectivePresModel
	    ParameterId["AttributePerspective"] = "attributePerspective";
	    // DPI_CubePerspective, having type PerspectivePresModel
	    ParameterId["CubePerspective"] = "cubePerspective";
	    // DPI_AttributePerspectives, having type PerspectivePresModel[]
	    ParameterId["AttributePerspectives"] = "attributePerspectives";
	    // DPI_CalculatedMembersForEditingPresModel, having type EditCalculatedMembersPresModel
	    ParameterId["CalculatedMembersForEditingPresModel"] = "calculatedMembersForEditingPresmodel";
	    // DPI_CalculatedMember, having type CalculatedMemberPresModel
	    ParameterId["CalculatedMember"] = "calculatedMember";
	    // DPI_NewCalculatedMember, having type CalculatedMemberPresModel
	    ParameterId["NewCalculatedMember"] = "newCalculatedMember";
	    // DPI_UpdatedCalculatedMember, having type CalculatedMemberPresModel
	    ParameterId["UpdatedCalculatedMember"] = "updatedCalculatedMember";
	    // DPI_CalculatedMembersList, having type CalculatedMemberPresModel[]
	    ParameterId["CalculatedMembersList"] = "calculatedMembersList";
	    // DPI_CalculatedMemberHierarchyItem, having type CalculatedMemberHierarchyItemPresModel
	    ParameterId["CalculatedMemberHierarchyItem"] = "calculatedMemberHierarchyItem";
	    // DPI_CalculatedMemberHierarchyList, having type CalculatedMemberHierarchyItemPresModel[]
	    ParameterId["CalculatedMemberHierarchyList"] = "calculatedMemberHierarchyList";
	    // DPI_SummaryCardPresModel, having type SummaryCardPresModel
	    ParameterId["SummaryCardPresModel"] = "summaryCard";
	    // DPI_MeasureSummary, having type MeasureSummaryPresModel
	    ParameterId["MeasureSummary"] = "measureSummary";
	    // DPI_MeasureSummaryList, having type MeasureSummaryPresModel[]
	    ParameterId["MeasureSummaryList"] = "measureSummaryList";
	    // DPI_AnnotationPresModel, having type AnnotationPresModel
	    ParameterId["AnnotationPresModel"] = "annotation";
	    // DPI_AnnotationList, having type AnnotationPresModel[]
	    ParameterId["AnnotationList"] = "annotationList";
	    // DPI_AnnotationShapeStyle, having type AnnotationShapeStylePresModel
	    ParameterId["AnnotationShapeStyle"] = "annotationShapeStyle";
	    // DPI_Telemetry, having type TelemetryPresModel
	    ParameterId["Telemetry"] = "telemetry";
	    // DPI_DataSourceTelemetry, having type DataSourceTelemetryPresModel
	    ParameterId["DataSourceTelemetry"] = "dataSourceTelemetry";
	    // DPI_DataSourceTelemetryList, having type DataSourceTelemetryPresModel[]
	    ParameterId["DataSourceTelemetryList"] = "dataSourceTelemetryList";
	    // DPI_VisualSpecificationTelemetry, having type VisualSpecificationTelemetryPresModel
	    ParameterId["VisualSpecificationTelemetry"] = "visualSpecificationTelemetry";
	    // DPI_VisualSpecificationTelemetryList, having type VisualSpecificationTelemetryPresModel[]
	    ParameterId["VisualSpecificationTelemetryList"] = "visualSpecificationTelemetryList";
	    // DPI_UnderlyingDataTable, having type UnderlyingDataTablePresModel
	    ParameterId["UnderlyingDataTable"] = "underlyingDataTable";
	    // DPI_UnderlyingDataTables, having type UnderlyingDataTablePresModel[]
	    ParameterId["UnderlyingDataTables"] = "underlyingDataTables";
	    // DPI_UnderlyingDataTableColumn, having type UnderlyingDataTableColumnPresModel
	    ParameterId["UnderlyingDataTableColumn"] = "underlyingDataTableColumn";
	    // DPI_UnderlyingDataTableColumns, having type UnderlyingDataTableColumnPresModel[]
	    ParameterId["UnderlyingDataTableColumns"] = "underlyingDataTableColumns";
	    // DPI_PageCacheID, having type PageCacheIDPresModel
	    ParameterId["PageCacheID"] = "pageCacheId";
	    // DPI_RelationalPageCacheID, having type PageCacheIDPresModel
	    ParameterId["RelationalPageCacheID"] = "relationalPageCacheId";
	    // DPI_SearchResultsCacheID, having type PageCacheIDPresModel
	    ParameterId["SearchResultsCacheID"] = "searchResultsCacheId";
	    // DPI_PageInfo, having type PageInfoPresModel
	    ParameterId["PageInfo"] = "pageInfo";
	    // DPI_RowColPair, having type RowColPairPresModel
	    ParameterId["RowColPair"] = "rowColPair";
	    // DPI_TopLeftRowCol, having type RowColPairPresModel
	    ParameterId["TopLeftRowCol"] = "topLeftRowCol";
	    // DPI_BotRightRowCol, having type RowColPairPresModel
	    ParameterId["BotRightRowCol"] = "botRightRowCol";
	    // DPI_RowColPairs, having type RowColPairPresModel[]
	    ParameterId["RowColPairs"] = "rowColPairs";
	    // DPI_TableViewCacheInfo, having type TableViewCachePresModel
	    ParameterId["TableViewCacheInfo"] = "tableViewCacheInfo";
	    // DPI_TableViewInfo, having type tableViewInfoPresModel
	    ParameterId["TableViewInfo"] = "tableViewInfo";
	    // DPI_TableViewColumnInfo, having type TableViewColumnInfoPresModel
	    ParameterId["TableViewColumnInfo"] = "tableViewColumnInfo";
	    // DPI_TableViewColumns, having type TableViewColumnInfoPresModel[]
	    ParameterId["TableViewColumns"] = "tableViewColumns";
	    // DPI_TableViewPageItem, having type TableViewPageItemPresModel
	    ParameterId["TableViewPageItem"] = "tableViewPageItem";
	    // DPI_TableViewPageColumns, having type TableViewPageItemPresModel[]
	    ParameterId["TableViewPageColumns"] = "tableViewPageColumns";
	    // DPI_TableViewPageRow, having type TableViewPageRowPresModel
	    ParameterId["TableViewPageRow"] = "tableViewPageRow";
	    // DPI_TableViewPageRows, having type TableViewPageRowPresModel[]
	    ParameterId["TableViewPageRows"] = "tableViewPageRows";
	    // DPI_TableViewPage, having type TableViewPagePresModel
	    ParameterId["TableViewPage"] = "tableViewPage";
	    // DPI_CategoricalValuePicker, having type CategoricalValuePickerPresModel
	    ParameterId["CategoricalValuePicker"] = "categoricalValuePicker";
	    // DPI_AnnotationShapeBorderStyle, having type LineStylePresModel
	    ParameterId["AnnotationShapeBorderStyle"] = "annotationShapeBorderStyle";
	    // DPI_AnotationShapeStrokeStyle, having type LineStylePresModel
	    ParameterId["AnotationShapeStrokeStyle"] = "annotationShapeStrokeStyle";
	    // DPI_CategoricalBinEditorPresModel, having type CategoricalBinEditorPresModel
	    ParameterId["CategoricalBinEditorPresModel"] = "categoricalBinEditor";
	    // DPI_CategoricalBinItem, having type CategoricalBinItemPresModel
	    ParameterId["CategoricalBinItem"] = "categoricalBinItemPresModel";
	    // DPI_CategoricalBinItems, having type CategoricalBinItemPresModel[]
	    ParameterId["CategoricalBinItems"] = "categoricalBinItemPresModels";
	    // DPI_MeasurePickerFieldInfo, having type MeasurePickerFieldInfoPresModel
	    ParameterId["MeasurePickerFieldInfo"] = "measurePickerFieldInfo";
	    // DPI_MeasurePickerFields, having type MeasurePickerFieldInfoPresModel[]
	    ParameterId["MeasurePickerFields"] = "measurePickerFields";
	    // DPI_MeasureAggregationInfo, having type MeasureAggregationInfoPresModel
	    ParameterId["MeasureAggregationInfo"] = "measureAggregationInfo";
	    // DPI_MeasureAggregations, having type MeasureAggregationInfoPresModel[]
	    ParameterId["MeasureAggregations"] = "measureAggregations";
	    // DPI_TuplePair, having type TuplePairPresModel
	    ParameterId["TuplePair"] = "tuplePair";
	    // DPI_DimensionBound, having type DimensionBoundPresModel
	    ParameterId["DimensionBound"] = "dimensionBound";
	    // DPI_PerspectiveBounds, having type DimensionBoundPresModel[]
	    ParameterId["PerspectiveBounds"] = "perspectiveBounds";
	    // DPI_FilterPerspectiveInfoPresModel, having type FilterPerspectiveInfoPresModel
	    ParameterId["FilterPerspectiveInfoPresModel"] = "filterPerspectiveInfo";
	    // DPI_TableRelevance, having type TableRelevancePresModel
	    ParameterId["TableRelevance"] = "tableRelevance";
	    // DPI_AddInRegistrationPresModel, having type AddInRegistrationPresModel
	    ParameterId["AddInRegistrationPresModel"] = "addInRegistrationPresModel";
	    // DPI_AddInRegistrationPresModelList, having type AddInRegistrationPresModel[]
	    ParameterId["AddInRegistrationPresModelList"] = "addInRegistrationPresModelList";
	    // DPI_AddInDashboardAuthoringWidget, having type AddInDashboardWidgetPresModel
	    ParameterId["AddInDashboardAuthoringWidget"] = "addInDashboardAuthoringWidgetPresModel";
	    // DPI_AddInInstance, having type AddInInstancePresModel
	    ParameterId["AddInInstance"] = "addInInstancePresModel";
	    // DPI_AddInLocator, having type AddInLocatorPresModel
	    ParameterId["AddInLocator"] = "addInLocatorPresModel";
	    // DPI_AddInContext, having type AddInContext
	    ParameterId["AddInContext"] = "addInContext";
	    // DPI_AddInMode, having type AddInMode
	    ParameterId["AddInMode"] = "addInMode";
	    // DPI_AddInEnvironment, having type AddInEnvironmentPresModel
	    ParameterId["AddInEnvironment"] = "addInEnvironmentPresModel";
	    // DPI_AddInDashboardInfo, having type AddInDashboardInfoPresModel
	    ParameterId["AddInDashboardInfo"] = "addInDashboardInfoPresModel";
	    // DPI_AddInSettingsInfo, having type AddInSettingsInfoPresModel
	    ParameterId["AddInSettingsInfo"] = "addInSettingsInfo";
	    // DPI_AddInBootstrapInfo, having type AddInBootstrapInfoPresModel
	    ParameterId["AddInBootstrapInfo"] = "addInBootstrapInfo";
	    // DPI_AddInDebugSettings, having type AddInDebugSettingsPresModel
	    ParameterId["AddInDebugSettings"] = "addInDebugSettings";
	    // DPI_RichText, having type RichTextPresModel
	    ParameterId["RichText"] = "richText";
	    // DPI_RichTextKeywordSubList, having type RichTextKeywordSubListPresModel
	    ParameterId["RichTextKeywordSubList"] = "richTextKeywordsSublist";
	    // DPI_RichTextKeywordSubLists, having type RichTextKeywordSubListPresModel[]
	    ParameterId["RichTextKeywordSubLists"] = "richTextKeywordSublists";
	    // DPI_RichTextKeywordList, having type RichTextKeywordListPresModel
	    ParameterId["RichTextKeywordList"] = "richTextKeywordsList";
	    // DPI_RichTextBlockStyle, having type RichTextBlockStylePresModel
	    ParameterId["RichTextBlockStyle"] = "richTextBlockStyle";
	    // DPI_RichTextContentStyle, having type RichTextContentStylePresModel
	    ParameterId["RichTextContentStyle"] = "richTextContentStyle";
	})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable */
	// -----------------------------------------------------------------------------
	//
	// This file is the copyrighted property of Tableau Software and is protected
	// by registered patents and other applicable U.S. and international laws and
	// regulations.
	//
	// Unlicensed use of the contents of this file is prohibited. Please refer to
	// the NOTICES.txt file for further details.
	//
	// -----------------------------------------------------------------------------
	// WARNING: Computer generated file.  Do not hand modify.
	// DEPENDS ON: ['..\\git\\api-core\\node_modules\\@tableau\\preslayer-codegen-typescript\\templates\\commands-enum-ts.template', u'modules\\web\\api-core\\src\\preslayer\\all-cmd-wrappers.data']
	Object.defineProperty(exports, "__esModule", { value: true });
	var DocCommands;
	(function (DocCommands) {
	    // Saves the settings for the specified add-in id
	    DocCommands["SaveAddInSettings"] = "save-add-in-settings";
	    // Gets the pres model for an add-in instance.
	    DocCommands["GetAddInInstancePresModel"] = "get-add-in-instance-pres-model";
	    // Gets the pres model for the dashboard authoring widget for add-ins.
	    DocCommands["GetAddInDashboardAuthoringWidgetPresModel"] = "get-add-in-dashboard-authoring-widget-pres-model";
	    // Gets the necessary information for an add-in to initialize itself.
	    DocCommands["InitializeAddInInstance"] = "initialize-add-in-instance";
	    // Enables or disable javascript debugging of an add-in.
	    DocCommands["SetAddInJsDebuggingEnabled"] = "set-add-in-js-debugging-enabled";
	    // Whether or not we should pause before loading. If missing, toggle the value
	    DocCommands["SetPauseBeforeLoadingAddIn"] = "set-pause-before-loading-add-in";
	    // Reloads the Add-In widget and web page.
	    DocCommands["ReloadAddIn"] = "reload-add-in";
	    // Retrieves the context menu for a dashboard add-in.
	    DocCommands["GetAddInZoneContextMenu"] = "get-add-in-zone-context-menu";
	    // Gets the pres model which indicates what the debug settings for add-ins is.
	    DocCommands["GetAddInDebugSettingsPresModel"] = "get-add-in-debug-settings-pres-model";
	    // Gets the summary data for a worksheet
	    DocCommands["GetSummaryData"] = "get-summary-data";
	    // Gets the underlying data for a worksheet
	    DocCommands["GetUnderlyingData"] = "get-underlying-data";
	    // Gets the axis options .
	    DocCommands["GetAxisOptions"] = "get-axis-options";
	    // Reset the axis options .
	    DocCommands["ResetAxisOptions"] = "reset-axis-options";
	    // Show axis edit dialog
	    DocCommands["ShowEditAxisDialog"] = "show-edit-axis-dialog";
	    // Sets the axis direction
	    DocCommands["SetAxisReversed"] = "set-axis-reversed";
	    // Sets the axis scale type
	    DocCommands["SetAxisScaleType"] = "set-axis-scale-type";
	    // Sets the main title of a quantitative axis
	    DocCommands["SetAxisTitle"] = "set-axis-title";
	    // Sets the subtitle of a quantitative axis
	    DocCommands["SetAxisSubtitle"] = "set-axis-subtitle";
	    // Sets whether we should use the automatic subtitle for a quantitative axis
	    DocCommands["SetAxisUseAutomaticSubtitle"] = "set-axis-use-automatic-subtitle";
	    // Sets the axis range type of a quantitative axis
	    DocCommands["SetAxisRangeType"] = "set-axis-range-type";
	    // Sets whether or not to force-include zero on a quantitative axis
	    DocCommands["SetAxisIncludeZero"] = "set-axis-include-zero";
	    // Sets new min/max range endings for axis
	    DocCommands["SetAxisRange"] = "set-axis-range";
	    // Synchronize dual axes on a folded quantitative axis
	    DocCommands["SetAxisFoldState"] = "set-axis-fold-state";
	})(DocCommands = exports.DocCommands || (exports.DocCommands = {}));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_internal_contract_1 = __webpack_require__(5);
	/**
	 * Represents an input or output paramter for a command.
	 *
	 * @export
	 * @class CommandParameter
	 */
	var CommandParameter = (function () {
	    /**
	     * Creates an instance of CommandParameter.
	     * @param {ApiParameterId} apiId
	     * @param {PresLayerParameterId} presLayerId
	     * @param {boolean} [isOptional]
	     * @memberof CommandParameter
	     */
	    function CommandParameter(apiId, presLayerId, isOptional) {
	        this.presLayerId = presLayerId;
	        this.apiId = apiId;
	        this.isOptional = isOptional;
	    }
	    Object.defineProperty(CommandParameter.prototype, "ApiId", {
	        /**
	         * The Id of the Api Parameter
	         *
	         * @readonly
	         * @type {ApiParameterId}
	         * @memberof CommandParameter
	         */
	        get: function () {
	            return this.apiId;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandParameter.prototype, "PresLayerId", {
	        /**
	         * The Id of the Pres Layer Parameter
	         *
	         * @readonly
	         * @type {PresLayerParameterId}
	         * @memberof CommandParameter
	         */
	        get: function () {
	            return this.presLayerId;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandParameter.prototype, "IsOptional", {
	        /**
	         * Whether or not this is an optional parameter
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberof CommandParameter
	         */
	        get: function () {
	            return !!this.isOptional;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return CommandParameter;
	}());
	exports.CommandParameter = CommandParameter;
	/**
	 * Represents a the complete mapping of an ApiCommand to its corresponding pres-layer command
	 * and the conversion of the output value as well
	 *
	 * @export
	 * @class CommandRegistration
	 */
	var CommandRegistration = (function () {
	    function CommandRegistration(apiVerbId, commandId, inputParameters, outputParameter) {
	        this.apiVerbId = apiVerbId;
	        this.commandId = commandId;
	        this.inputParameters = inputParameters;
	        this.outputParameter = outputParameter;
	    }
	    Object.defineProperty(CommandRegistration.prototype, "ApiVerbId", {
	        get: function () {
	            return this.apiVerbId;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandRegistration.prototype, "CommandId", {
	        get: function () {
	            return this.commandId;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandRegistration.prototype, "Inputs", {
	        get: function () {
	            return this.inputParameters || new Array();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandRegistration.prototype, "Output", {
	        get: function () {
	            return this.outputParameter;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommandRegistration.prototype, "NeedsAddInLocator", {
	        /**
	         * Whether or not this command requires an add-in locator to be injected into it
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberof CommandRegistration
	         */
	        get: function () {
	            for (var _i = 0, _a = this.Inputs; _i < _a.length; _i++) {
	                var input = _a[_i];
	                if (input.ApiId === api_internal_contract_1.ParameterId.AddInLocator) {
	                    return true;
	                }
	            }
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Creates a dictionary of pres-layer parameters from the input dictionary
	     * of api parameters.
	     *
	     * @param {ExecuteParameters} parameters - The parameters to convert
	     * @param {ApiToPresLayerMappingRegistry} apiToPresLayer - mapping to determine the conversion
	     * @returns {{ [paramId: string]: object; }} - parameters to send to the pres-layer
	     * @memberof CommandRegistration
	     */
	    CommandRegistration.prototype.CreateParams = function (parameters, apiToPresLayer) {
	        var result = {};
	        for (var _i = 0, _a = this.Inputs; _i < _a.length; _i++) {
	            var inputParam = _a[_i];
	            // First make sure the parameter is there or that it's optional
	            if (!parameters.hasOwnProperty(inputParam.ApiId)) {
	                if (inputParam.IsOptional) {
	                    continue;
	                }
	                else {
	                    throw new Error('Missing parameter for command: ' + inputParam.ApiId);
	                }
	            }
	            // Find the conversion function for this parameter
	            var conversionFn = apiToPresLayer.Get(inputParam.ApiId, inputParam.PresLayerId);
	            // Convert the pres model and insert it into our results object
	            result[inputParam.PresLayerId] = conversionFn(parameters[inputParam.ApiId]);
	        }
	        return result;
	    };
	    /**
	     * Processes the result received back after executing a pres-layer command
	     *
	     * @param {{ [docParamId: string]: object; }} resultParameters
	     * @param {PresLayerToApiMappingRegistry} presLayerToApi
	     * @returns {Model}
	     * @memberof CommandRegistration
	     */
	    CommandRegistration.prototype.ProcessResult = function (resultParameters, presLayerToApi) {
	        if (!resultParameters.hasOwnProperty(this.Output.PresLayerId)) {
	            throw new Error('Missing exptected result parameter: ' + this.Output.PresLayerId);
	        }
	        var conversionFn = presLayerToApi.Get(this.Output.PresLayerId, this.Output.ApiId);
	        return conversionFn(resultParameters[this.Output.PresLayerId]);
	    };
	    return CommandRegistration;
	}());
	exports.CommandRegistration = CommandRegistration;


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Registry which contains mappings from an Api VerbId to a pres-layer command.
	 * This includes the parameters and return values of the command as well
	 *
	 * @export
	 * @class CommandMappingRegistry
	 */
	var CommandMappingRegistry = (function () {
	    /**
	     * Creates an instance of CommandMappingRegistry.
	     * @memberof CommandMappingRegistry
	     */
	    function CommandMappingRegistry() {
	        this.commands = {};
	    }
	    /**
	     * Adds a new command to the registry
	     *
	     * @param {CommandRegistration} command
	     * @memberof CommandMappingRegistry
	     */
	    CommandMappingRegistry.prototype.AddCommand = function (command) {
	        this.commands[command.ApiVerbId] = command;
	    };
	    /**
	     * Whether or not this registry contains a definition for this ApiVerbId
	     *
	     * @param {ApiVerbId} apiVerbId
	     * @returns {boolean}
	     * @memberof CommandMappingRegistry
	     */
	    CommandMappingRegistry.prototype.HasCommand = function (apiVerbId) {
	        if (!this.commands.hasOwnProperty(apiVerbId)) {
	            return false;
	        }
	        if (!this.commands[apiVerbId]) {
	            return false;
	        }
	        return true;
	    };
	    /**
	     * Gets the command registration for this command id or throws if it doesn't exist
	     *
	     * @param {ApiVerbId} apiVerbId
	     * @returns {CommandRegistration}
	     * @memberof CommandMappingRegistry
	     */
	    CommandMappingRegistry.prototype.GetCommand = function (apiVerbId) {
	        if (!this.HasCommand(apiVerbId)) {
	            throw new Error('Unknown ApiVerb: ' + apiVerbId);
	        }
	        return this.commands[apiVerbId];
	    };
	    return CommandMappingRegistry;
	}());
	exports.CommandMappingRegistry = CommandMappingRegistry;


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
	var Params_1 = __webpack_require__(12);
	var api_internal_contract_1 = __webpack_require__(5);
	var MappingRegistry_1 = __webpack_require__(17);
	var PresLayerToApiConverter_1 = __webpack_require__(18);
	var ApiToPresLayerConverter_1 = __webpack_require__(21);
	var UnderlyingDataConverter_1 = __webpack_require__(22);
	/*tslint:disable-next-line */
	var id = function (inParam) { return inParam; };
	/**
	 * Factory class for creating parameters mappings based on the VersionNumber of the Api
	 *
	 * @export
	 * @class ParameterMappingRegistryFactory
	 */
	var ParameterMappingRegistryFactory = (function () {
	    function ParameterMappingRegistryFactory() {
	    }
	    ParameterMappingRegistryFactory.CreatePresLayerToApiParamRegistry = function (versionNumber) {
	        var result = new PresLayerToApiMappingRegistry();
	        // TODO - check the version number and construct appropriate conversions
	        result.AddRegistration(Params_1.ParameterId.AddInLocator, api_internal_contract_1.ParameterId.AddInLocator, PresLayerToApiConverter_1.PresLayerToApiConverter.ConvertAddInLocator);
	        result.AddRegistration(Params_1.ParameterId.AddInBootstrapInfo, api_internal_contract_1.ParameterId.AddInBootstrapInfo, PresLayerToApiConverter_1.PresLayerToApiConverter.ConvertAddInBootstrapInfo);
	        result.AddRegistration(Params_1.ParameterId.UnderlyingDataTable, api_internal_contract_1.ParameterId.UnderlyingDataTable, UnderlyingDataConverter_1.UnderlyingDataConverter.BuildUnderlyingDataTable.bind(undefined, false));
	        result.AddRegistration(Params_1.ParameterId.UnderlyingDataTable, api_internal_contract_1.ParameterId.UnderlyingSummaryDataTable, UnderlyingDataConverter_1.UnderlyingDataConverter.BuildUnderlyingDataTable.bind(undefined, true));
	        return result;
	    };
	    ParameterMappingRegistryFactory.CreateApiToPresLayerParamRegistry = function (versionNumber) {
	        var result = new ApiToPresLayerMappingRegistry();
	        // TODO - check the version number and construct appropriate conversions
	        result.AddRegistration(api_internal_contract_1.ParameterId.AddInLocator, Params_1.ParameterId.AddInLocator, ApiToPresLayerConverter_1.ApiToPresLayerConverter.ConvertAddInLocator);
	        result.AddRegistration(api_internal_contract_1.ParameterId.IgnoreAliases, Params_1.ParameterId.IgnoreAliases, id);
	        result.AddRegistration(api_internal_contract_1.ParameterId.IgnoreSelection, Params_1.ParameterId.IgnoreSelection, id);
	        result.AddRegistration(api_internal_contract_1.ParameterId.IncludeAllColumns, Params_1.ParameterId.IncludeAllColumns, id);
	        result.AddRegistration(api_internal_contract_1.ParameterId.MaxRows, Params_1.ParameterId.MaxRows, id);
	        result.AddRegistration(api_internal_contract_1.ParameterId.VisualId, Params_1.ParameterId.VisualIDPM, ApiToPresLayerConverter_1.ApiToPresLayerConverter.ConvertVisualId);
	        return result;
	    };
	    return ParameterMappingRegistryFactory;
	}());
	exports.ParameterMappingRegistryFactory = ParameterMappingRegistryFactory;
	var ApiToPresLayerMappingRegistry = (function (_super) {
	    __extends(ApiToPresLayerMappingRegistry, _super);
	    function ApiToPresLayerMappingRegistry() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return ApiToPresLayerMappingRegistry;
	}(MappingRegistry_1.MappingRegistry));
	exports.ApiToPresLayerMappingRegistry = ApiToPresLayerMappingRegistry;
	var PresLayerToApiMappingRegistry = (function (_super) {
	    __extends(PresLayerToApiMappingRegistry, _super);
	    function PresLayerToApiMappingRegistry() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return PresLayerToApiMappingRegistry;
	}(MappingRegistry_1.MappingRegistry));
	exports.PresLayerToApiMappingRegistry = PresLayerToApiMappingRegistry;


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Simple registry class which creates a mapping based on two keys.
	 *
	 * @export
	 * @class MappingRegistry
	 * @template TInputEnumType
	 * @template TOutputEnumType
	 * @template TMappingStorageType
	 */
	var MappingRegistry = (function () {
	    function MappingRegistry() {
	        this.registry = {};
	    }
	    /**
	     * Combines the two keys into a unique string
	     *
	     * @private
	     * @param {TInputEnumType} inputType
	     * @param {TOutputEnumType} outputType
	     * @returns {string}
	     * @memberof MappingRegistry
	     */
	    MappingRegistry.prototype.MakeKey = function (inputType, outputType) {
	        var keyObj = { input: inputType, output: outputType };
	        return JSON.stringify(keyObj);
	    };
	    MappingRegistry.prototype.Has = function (inputType, outputType) {
	        var key = this.MakeKey(inputType, outputType);
	        if (!this.registry.hasOwnProperty(key)) {
	            return false;
	        }
	        if (!this.registry[key]) {
	            return false;
	        }
	        return true;
	    };
	    MappingRegistry.prototype.Get = function (inputType, outputType) {
	        if (!this.Has(inputType, outputType)) {
	            throw new Error('Missing requested mapping');
	        }
	        var key = this.MakeKey(inputType, outputType);
	        return this.registry[key];
	    };
	    MappingRegistry.prototype.AddRegistration = function (inputType, outputType, storageItem) {
	        var key = this.MakeKey(inputType, outputType);
	        // Add this item
	        this.registry[key] = storageItem;
	    };
	    return MappingRegistry;
	}());
	exports.MappingRegistry = MappingRegistry;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var EnumMappings_1 = __webpack_require__(19);
	/**
	 * Class containing helper methods for converting from PresLayerPresModels to their ApiPresModels equivalents
	 *
	 * @export
	 * @class PresLayerToApiConverter
	 */
	var PresLayerToApiConverter = (function () {
	    function PresLayerToApiConverter() {
	    }
	    PresLayerToApiConverter.ConvertSheetPath = function (plSheetPath) {
	        var result = {
	            SheetName: plSheetPath.sheetName,
	            IsDashboard: plSheetPath.isDashboard,
	            Storyboard: plSheetPath.storyboard,
	            FlipboardZoneID: plSheetPath.flipboardZoneId,
	            StoryPointID: plSheetPath.storyPointId,
	        };
	        return result;
	    };
	    PresLayerToApiConverter.ConvertAddInLocator = function (plAddInLocator) {
	        var dashboardPath = undefined;
	        if (plAddInLocator.sheetPath) {
	            dashboardPath = PresLayerToApiConverter.ConvertSheetPath(plAddInLocator.sheetPath);
	        }
	        var result = {
	            InstanceId: plAddInLocator.addInInstanceId,
	            DashboardPath: dashboardPath
	        };
	        return result;
	    };
	    PresLayerToApiConverter.ConvertDashboardInZones = function (plDashboard) {
	        var result = new Array();
	        for (var _i = 0, _a = Object.keys(plDashboard.zones); _i < _a.length; _i++) {
	            var zoneKey = _a[_i];
	            var zone = plDashboard.zones[zoneKey];
	            var apiZone = {
	                Name: zone.zoneCommon.name,
	                ZoneId: zone.zoneId,
	                ZoneType: EnumMappings_1.PresLayerToApiEnumMappings.ZoneType.Convert(zone.zoneCommon.zoneType),
	                Height: zone.zoneCommon.h,
	                Width: zone.zoneCommon.w,
	                X: zone.zoneCommon.x,
	                Y: zone.zoneCommon.y
	            };
	            result.push(apiZone);
	        }
	        return result;
	    };
	    PresLayerToApiConverter.ConvertDashboardInfo = function (plDashboardInfo) {
	        var result = {
	            Zones: PresLayerToApiConverter.ConvertDashboardInZones(plDashboardInfo.dashboardPresModel),
	            Name: plDashboardInfo.dashboardPresModel.sheetPath.sheetName,
	            AddInZoneId: plDashboardInfo.zoneId
	        };
	        return result;
	    };
	    PresLayerToApiConverter.ConvertAddInInstance = function (plAddInInstance) {
	        var result = {
	            Url: plAddInInstance.addInRegistrationPresModel.url,
	            Locator: PresLayerToApiConverter.ConvertAddInLocator(plAddInInstance.addInLocatorPresModel)
	        };
	        return result;
	    };
	    PresLayerToApiConverter.ConvertAddInEnivrionment = function (plAddInEnvironment) {
	        var result = {
	            AddInContext: EnumMappings_1.PresLayerToApiEnumMappings.AddInContext.Convert(plAddInEnvironment.addInContext),
	            AddInMode: EnumMappings_1.PresLayerToApiEnumMappings.AddInMode.Convert(plAddInEnvironment.addInMode),
	            AddInLocale: plAddInEnvironment.addInLocale,
	            AddInLanguage: plAddInEnvironment.addInLanguage,
	            TableauVersion: plAddInEnvironment.tableauVersion,
	            OperatingSystem: plAddInEnvironment.operatingSystem,
	            APIVersion: plAddInEnvironment.apiVersion
	        };
	        return result;
	    };
	    PresLayerToApiConverter.ConvertAddInSettings = function (plAddInSettings) {
	        var result = {
	            SettingsValues: plAddInSettings.addInSettings
	        };
	        return result;
	    };
	    PresLayerToApiConverter.ConvertAddInBootstrapInfo = function (plBootstrapInfo) {
	        var result = {
	            AddinDashboardInfo: PresLayerToApiConverter.ConvertDashboardInfo(plBootstrapInfo.addInDashboardInfoPresModel),
	            AddInEnvironment: PresLayerToApiConverter.ConvertAddInEnivrionment(plBootstrapInfo.addInEnvironmentPresModel),
	            AddInInstance: PresLayerToApiConverter.ConvertAddInInstance(plBootstrapInfo.addInInstancePresModel),
	            AddInSettingsInfo: PresLayerToApiConverter.ConvertAddInSettings(plBootstrapInfo.addInSettingsInfo)
	        };
	        return result;
	    };
	    return PresLayerToApiConverter;
	}());
	exports.PresLayerToApiConverter = PresLayerToApiConverter;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Enums = __webpack_require__(20);
	var api_internal_contract_1 = __webpack_require__(5);
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
	/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
	var PresLayerToApiEnumMappings = (function () {
	    function PresLayerToApiEnumMappings() {
	    }
	    PresLayerToApiEnumMappings.ZoneType = new EnumConverter((_a = {},
	        _a[Enums.ZoneType.ZT_Invalid] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a[Enums.ZoneType.ZT_Viz] = api_internal_contract_1.DashboardObjectType.WORKSHEET,
	        _a[Enums.ZoneType.ZT_ColorLegend] = api_internal_contract_1.DashboardObjectType.LEGEND,
	        _a[Enums.ZoneType.ZT_ShapeLegend] = api_internal_contract_1.DashboardObjectType.LEGEND,
	        _a[Enums.ZoneType.ZT_SizeLegend] = api_internal_contract_1.DashboardObjectType.LEGEND,
	        _a[Enums.ZoneType.ZT_MapLegend] = api_internal_contract_1.DashboardObjectType.LEGEND,
	        _a[Enums.ZoneType.ZT_QuickFilter] = api_internal_contract_1.DashboardObjectType.QUICK_FILTER,
	        _a[Enums.ZoneType.ZT_Highlighter] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a[Enums.ZoneType.ZT_CurrPage] = api_internal_contract_1.DashboardObjectType.PAGE_FILTER,
	        _a[Enums.ZoneType.ZT_Empty] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a[Enums.ZoneType.ZT_Title] = api_internal_contract_1.DashboardObjectType.TITLE,
	        _a[Enums.ZoneType.ZT_Text] = api_internal_contract_1.DashboardObjectType.TEXT,
	        _a[Enums.ZoneType.ZT_Bitmap] = api_internal_contract_1.DashboardObjectType.IMAGE,
	        _a[Enums.ZoneType.ZT_Web] = api_internal_contract_1.DashboardObjectType.WEB_PAGE,
	        _a[Enums.ZoneType.ZT_AddIn] = api_internal_contract_1.DashboardObjectType.ADD_IN,
	        _a[Enums.ZoneType.ZT_ParamCtrl] = api_internal_contract_1.DashboardObjectType.PARAMETER_CONTROL,
	        _a[Enums.ZoneType.ZT_FlipboardNav] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a[Enums.ZoneType.ZT_Flipboard] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a[Enums.ZoneType.ZT_LayoutBasic] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a[Enums.ZoneType.ZT_LayoutFlow] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a[Enums.ZoneType.ZT_LayoutFreeForm] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a[Enums.ZoneType.ZT_End] = api_internal_contract_1.DashboardObjectType.BLANK,
	        _a), api_internal_contract_1.DashboardObjectType.BLANK);
	    PresLayerToApiEnumMappings.AddInContext = new EnumConverter((_b = {},
	        _b[Enums.AddInContext.Unknown] = api_internal_contract_1.AddInContext.UNKNOWN,
	        _b[Enums.AddInContext.Desktop] = api_internal_contract_1.AddInContext.DESKTOP,
	        _b[Enums.AddInContext.Server] = api_internal_contract_1.AddInContext.SERVER,
	        _b));
	    PresLayerToApiEnumMappings.AddInMode = new EnumConverter((_c = {},
	        _c[Enums.AddInMode.Unknown] = api_internal_contract_1.AddInMode.UNKNOWN,
	        _c[Enums.AddInMode.Authoring] = api_internal_contract_1.AddInMode.AUTHORING,
	        _c[Enums.AddInMode.Viewing] = api_internal_contract_1.AddInMode.VIEWING,
	        _c));
	    PresLayerToApiEnumMappings.DataType = new EnumConverter((_d = {},
	        _d[Enums.DataType.DT_BOOLEAN] = api_internal_contract_1.DataType.BOOL,
	        _d[Enums.DataType.DT_DATE] = api_internal_contract_1.DataType.DATE,
	        _d[Enums.DataType.DT_DATETIME] = api_internal_contract_1.DataType.DATE_TIME,
	        _d[Enums.DataType.DT_INTEGER] = api_internal_contract_1.DataType.INT,
	        _d[Enums.DataType.DT_REAL] = api_internal_contract_1.DataType.FLOAT,
	        _d[Enums.DataType.DT_STRING] = api_internal_contract_1.DataType.STRING,
	        _d[Enums.DataType.DT_SPATIAL] = api_internal_contract_1.DataType.SPATIAL,
	        _d));
	    return PresLayerToApiEnumMappings;
	}());
	exports.PresLayerToApiEnumMappings = PresLayerToApiEnumMappings;
	var _a, _b, _c, _d;
	/* tslint:enable:typedef */


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable */
	// -----------------------------------------------------------------------------
	//
	// This file is the copyrighted property of Tableau Software and is protected
	// by registered patents and other applicable U.S. and international laws and
	// regulations.
	//
	// Unlicensed use of the contents of this file is prohibited. Please refer to
	// the NOTICES.txt file for further details.
	//
	// -----------------------------------------------------------------------------
	// WARNING: Computer generated file.  Do not hand modify.
	// DEPENDS ON: ['..\\git\\api-core\\node_modules\\@tableau\\preslayer-codegen-typescript\\templates\\enum-ts.template', u'modules\\web\\api-core\\src\\preslayer\\all-enums.data']
	Object.defineProperty(exports, "__esModule", { value: true });
	// type of aggregation
	var AggType;
	(function (AggType) {
	    // 
	    AggType["AGG_SUM"] = "sum";
	    // 
	    AggType["AGG_AVG"] = "average";
	    // 
	    AggType["AGG_MIN"] = "min";
	    // 
	    AggType["AGG_MAX"] = "max";
	    // 
	    AggType["AGG_STDEV"] = "std-dev";
	    // 
	    AggType["AGG_STDEVP"] = "std-dev-p";
	    // 
	    AggType["AGG_VAR"] = "var";
	    // 
	    AggType["AGG_VARP"] = "var-p";
	    // 
	    AggType["AGG_COUNT"] = "count";
	    // 
	    AggType["AGG_COUNTD"] = "count-d";
	    // 
	    AggType["AGG_MEDIAN"] = "median";
	    // 
	    AggType["AGG_ATTR"] = "attr";
	    // 
	    AggType["AGG_NONE"] = "none";
	    // 
	    AggType["AGG_PERCENTILE"] = "percentile";
	    // 
	    AggType["AGG_YEAR"] = "year";
	    // 
	    AggType["AGG_QTR"] = "qtr";
	    // 
	    AggType["AGG_MONTH"] = "month";
	    // 
	    AggType["AGG_DAY"] = "day";
	    // 
	    AggType["AGG_HOUR"] = "hour";
	    // 
	    AggType["AGG_MINUTE"] = "minute";
	    // 
	    AggType["AGG_SECOND"] = "second";
	    // 
	    AggType["AGG_WEEK"] = "week";
	    // 
	    AggType["AGG_WEEKDAY"] = "weekday";
	    // 
	    AggType["AGG_MONTHYEAR"] = "month-year";
	    // 
	    AggType["AGG_MDY"] = "mdy";
	    // 
	    AggType["AGG_END"] = "end";
	    // 
	    AggType["TRUNC_YEAR"] = "trunc-year";
	    // 
	    AggType["TRUNC_QTR"] = "trunc-qtr";
	    // 
	    AggType["TRUNC_MONTH"] = "trunc-month";
	    // 
	    AggType["TRUNC_WEEK"] = "trunc-week";
	    // 
	    AggType["TRUNC_DAY"] = "trunc-day";
	    // 
	    AggType["TRUNC_HOUR"] = "trunc-hour";
	    // 
	    AggType["TRUNC_MINUTE"] = "trunc-minute";
	    // 
	    AggType["TRUNC_SECOND"] = "trunc-second";
	    // 
	    AggType["AGG_QUART1"] = "quart1";
	    // 
	    AggType["AGG_QUART3"] = "quart3";
	    // 
	    AggType["AGG_SKEWNESS"] = "skewness";
	    // 
	    AggType["AGG_KURTOSIS"] = "kurtosis";
	    // 
	    AggType["AGG_INOUT"] = "in-out";
	    // 
	    AggType["AGG_SUM_XSQR"] = "sum-xsqr";
	    // 
	    AggType["AGG_USER"] = "user";
	    // 
	    AggType["AGG_COLLECT"] = "collect";
	    // 
	    AggType["AGG_COVAR"] = "covar";
	    // 
	    AggType["AGG_COVARP"] = "covarp";
	    // 
	    AggType["AGG_CORR"] = "corr";
	})(AggType = exports.AggType || (exports.AggType = {}));
	// 
	var DataScaling;
	(function (DataScaling) {
	    // 
	    DataScaling["SCALING_NONE"] = "none";
	    // 
	    DataScaling["SCALING_STANDARDIZED"] = "standardized";
	    // 
	    DataScaling["SCALING_NORMALIZED"] = "normalized";
	})(DataScaling = exports.DataScaling || (exports.DataScaling = {}));
	// Should the parser be dumb or not
	var ParserMode;
	(function (ParserMode) {
	    // With Validation
	    ParserMode["ParserWithValidation"] = "parser-validation";
	    // Without Validation
	    ParserMode["ParserWithoutValidation"] = "parser-without";
	})(ParserMode = exports.ParserMode || (exports.ParserMode = {}));
	// 
	var ForecastModelType;
	(function (ForecastModelType) {
	    // 
	    ForecastModelType["ForecastModelTypeAutoSeason"] = "auto-season";
	    // 
	    ForecastModelType["ForecastModelTypeAuto"] = "auto";
	    // 
	    ForecastModelType["ForecastModelTypeCustom"] = "custom";
	})(ForecastModelType = exports.ForecastModelType || (exports.ForecastModelType = {}));
	// 
	var ForecastRangeType;
	(function (ForecastRangeType) {
	    // 
	    ForecastRangeType["ForecastRangeTypeAuto"] = "auto";
	    // 
	    ForecastRangeType["ForecastRangeTypeNext"] = "next";
	    // 
	    ForecastRangeType["ForecastRangeTypeEndOf"] = "end-of";
	})(ForecastRangeType = exports.ForecastRangeType || (exports.ForecastRangeType = {}));
	// 
	var ForecastStatus;
	(function (ForecastStatus) {
	    // 
	    ForecastStatus["FS_VALID"] = "fs-valid";
	    // 
	    ForecastStatus["FS_INVALID_DATETIME"] = "fs-invalid-datetime";
	    // 
	    ForecastStatus["FS_INVALID_RESPONSE"] = "fs-invalid-response";
	    // 
	    ForecastStatus["FS_NEED_MORE_DATA"] = "fs-need-more-data";
	    // 
	    ForecastStatus["FS_TIME_SERIES_TOO_SHORT"] = "fs-time-series-too-short";
	    // 
	    ForecastStatus["FS_TIME_SERIES_IRREGULAR"] = "fs-time-series-irregular";
	    // 
	    ForecastStatus["FS_NULL_DATETIME"] = "fs-null-datetime";
	    // 
	    ForecastStatus["FS_NULL_RESPONSE"] = "fs-null-response";
	    // 
	    ForecastStatus["FS_METADATA_INVALID"] = "fs-metadata-invalid";
	    // 
	    ForecastStatus["FS_NO_RESPONSE"] = "fs-no-response";
	    // 
	    ForecastStatus["FS_EXCESS_DATA"] = "fs-excess-data";
	    // 
	    ForecastStatus["FS_EXCESS_PARTITIONS"] = "fs-excess-partitions";
	    // 
	    ForecastStatus["FS_DIMENSION_INVALID"] = "fs-dimension-invalid";
	    // 
	    ForecastStatus["FS_TABLECALC_INVALID"] = "fs-tablecalc-invalid";
	    // 
	    ForecastStatus["FS_TIME_SERIES_TOO_IRREGULAR"] = "fs-time-series-too-irregular";
	    // 
	    ForecastStatus["FS_AGGREGATE_FILTER"] = "fs-aggregate-filter";
	    // 
	    ForecastStatus["FS_DISAGGREGATE_RESPONSE"] = "fs-disaggregate-response";
	    // 
	    ForecastStatus["FS_PERCENTAGE_INVALID"] = "fs-percentage-invalid";
	    // 
	    ForecastStatus["FS_TOTAL_INVALID"] = "fs-total-invalid";
	    // 
	    ForecastStatus["FS_EXCESS_DATETIME"] = "fs-excess-datetime";
	    // 
	    ForecastStatus["FS_DATE_AGG_INCOMPATIBLE"] = "fs-date-agg-incompatible";
	    // 
	    ForecastStatus["FS_TIME_SERIES_NOT_POSITIVE"] = "fs-time-series-not-positive";
	    // 
	    ForecastStatus["FS_REQUESTED_MODEL_INVALID"] = "fs-requested-model-invalid";
	    // 
	    ForecastStatus["FS_TOO_SHORT_FOR_SEASON"] = "fs-too-short-for-season";
	    // 
	    ForecastStatus["FS_REQUESTED_MODEL_UNSTABLE"] = "fs-requested-model-unstable";
	    // 
	    ForecastStatus["FS_UNDEFINED"] = "fs-undefined";
	})(ForecastStatus = exports.ForecastStatus || (exports.ForecastStatus = {}));
	// 
	var StyleAttribute;
	(function (StyleAttribute) {
	    // 
	    StyleAttribute["saAlternateText"] = "saAlternateText";
	    // 
	    StyleAttribute["saAltMarkColor"] = "saAltMarkColor";
	    // 
	    StyleAttribute["saAspect"] = "saAspect";
	    // 
	    StyleAttribute["saAutoSubtitle"] = "saAutoSubtitle";
	    // 
	    StyleAttribute["saBackgroundColor"] = "saBackgroundColor";
	    // 
	    StyleAttribute["saBackgroundTransparency"] = "saBackgroundTransparency";
	    // 
	    StyleAttribute["saBandSize"] = "saBandSize";
	    // 
	    StyleAttribute["saBandColor"] = "saBandColor";
	    // 
	    StyleAttribute["saBandLevel"] = "saBandLevel";
	    // 
	    StyleAttribute["saBodyType"] = "saBodyType";
	    // 
	    StyleAttribute["saBorderColor"] = "saBorderColor";
	    // 
	    StyleAttribute["saBorderColorTop"] = "saBorderColorTop";
	    // 
	    StyleAttribute["saBorderColorRight"] = "saBorderColorRight";
	    // 
	    StyleAttribute["saBorderColorBottom"] = "saBorderColorBottom";
	    // 
	    StyleAttribute["saBorderColorLeft"] = "saBorderColorLeft";
	    // 
	    StyleAttribute["saBorderStyle"] = "saBorderStyle";
	    // 
	    StyleAttribute["saBorderStyleTop"] = "saBorderStyleTop";
	    // 
	    StyleAttribute["saBorderStyleRight"] = "saBorderStyleRight";
	    // 
	    StyleAttribute["saBorderStyleBottom"] = "saBorderStyleBottom";
	    // 
	    StyleAttribute["saBorderStyleLeft"] = "saBorderStyleLeft";
	    // 
	    StyleAttribute["saBorderWidth"] = "saBorderWidth";
	    // 
	    StyleAttribute["saBorderWidthTop"] = "saBorderWidthTop";
	    // 
	    StyleAttribute["saBorderWidthRight"] = "saBorderWidthRight";
	    // 
	    StyleAttribute["saBorderWidthBottom"] = "saBorderWidthBottom";
	    // 
	    StyleAttribute["saBorderWidthLeft"] = "saBorderWidthLeft";
	    // 
	    StyleAttribute["saBoxplotStyle"] = "saBoxplotStyle";
	    // 
	    StyleAttribute["saBreakOnSpecial"] = "saBreakOnSpecial";
	    // 
	    StyleAttribute["saCell"] = "saCell";
	    // 
	    StyleAttribute["saCellW"] = "saCellW";
	    // 
	    StyleAttribute["saCellH"] = "saCellH";
	    // 
	    StyleAttribute["saCellQ"] = "saCellQ";
	    // 
	    StyleAttribute["saCellQMark"] = "saCellQMark";
	    // 
	    StyleAttribute["saColor"] = "saColor";
	    // 
	    StyleAttribute["saColorMode"] = "saColorMode";
	    // 
	    StyleAttribute["saColLevels"] = "saColLevels";
	    // 
	    StyleAttribute["saColVertLevels"] = "saColVertLevels";
	    // 
	    StyleAttribute["saColHorizHeight"] = "saColHorizHeight";
	    // 
	    StyleAttribute["saColVertHeight"] = "saColVertHeight";
	    // Deprecated
	    StyleAttribute["saColHeight"] = "saColHeight";
	    // 
	    StyleAttribute["saColWidth"] = "saColWidth";
	    // 
	    StyleAttribute["saContent"] = "saContent";
	    // 
	    StyleAttribute["saDisplayFieldLabels"] = "saDisplayFieldLabels";
	    // 
	    StyleAttribute["saDisplayHeader"] = "saDisplayHeader";
	    // 
	    StyleAttribute["saDisplayAlternateText"] = "saDisplayAlternateText";
	    // 
	    StyleAttribute["saDivLevel"] = "saDivLevel";
	    // 
	    StyleAttribute["saEnabled"] = "saEnabled";
	    // 
	    StyleAttribute["saFillAboveColor"] = "saFillAboveColor";
	    // 
	    StyleAttribute["saFillBelowColor"] = "saFillBelowColor";
	    // 
	    StyleAttribute["saFillColor"] = "saFillColor";
	    // 
	    StyleAttribute["saFogBGColor"] = "saFogBGColor";
	    // 
	    StyleAttribute["saFogDesaturationWithoutSelection"] = "saFogDesaturationWithoutSelection";
	    // 
	    StyleAttribute["saFogDesaturationWithSelection"] = "saFogDesaturationWithSelection";
	    // 
	    StyleAttribute["saFont"] = "saFont";
	    // 
	    StyleAttribute["saFontFamily"] = "saFontFamily";
	    // 
	    StyleAttribute["saFontSize"] = "saFontSize";
	    // 
	    StyleAttribute["saFontStyle"] = "saFontStyle";
	    // 
	    StyleAttribute["saFontWeight"] = "saFontWeight";
	    // 
	    StyleAttribute["saGeographicAreaType"] = "saGeographicAreaType";
	    // 
	    StyleAttribute["saHAlign"] = "saHAlign";
	    // 
	    StyleAttribute["saHaloColor"] = "saHaloColor";
	    // 
	    StyleAttribute["saHaloColorSelected"] = "saHaloColorSelected";
	    // 
	    StyleAttribute["saHasFill"] = "saHasFill";
	    // 
	    StyleAttribute["saHasHalo"] = "saHasHalo";
	    // Deprecated
	    StyleAttribute["saHasLabel"] = "saHasLabel";
	    // 
	    StyleAttribute["saHasStroke"] = "saHasStroke";
	    // 
	    StyleAttribute["saHeight"] = "saHeight";
	    // 
	    StyleAttribute["saHeightHeader"] = "saHeightHeader";
	    // 
	    StyleAttribute["saHighlightLegend"] = "saHighlightLegend";
	    // 
	    StyleAttribute["saHnaxis"] = "saHnaxis";
	    // 
	    StyleAttribute["saHnlabel"] = "saHnlabel";
	    // 
	    StyleAttribute["saInTooltip"] = "saInTooltip";
	    // 
	    StyleAttribute["saLineEnd"] = "saLineEnd";
	    // 
	    StyleAttribute["saLineEndSize"] = "saLineEndSize";
	    // 
	    StyleAttribute["saLineInterpolation"] = "saLineInterpolation";
	    // 
	    StyleAttribute["saLineMarkerPosition"] = "saLineMarkerPosition";
	    // 
	    StyleAttribute["saLinePattern"] = "saLinePattern";
	    // 
	    StyleAttribute["saLinePatternOnly"] = "saLinePatternOnly";
	    // 
	    StyleAttribute["saLineVisibility"] = "saLineVisibility";
	    // 
	    StyleAttribute["saMap"] = "saMap";
	    // 
	    StyleAttribute["saMapStyle"] = "saMapStyle";
	    // 
	    StyleAttribute["saMargin"] = "saMargin";
	    // 
	    StyleAttribute["saMarginTop"] = "saMarginTop";
	    // 
	    StyleAttribute["saMarginRight"] = "saMarginRight";
	    // 
	    StyleAttribute["saMarginBottom"] = "saMarginBottom";
	    // 
	    StyleAttribute["saMarginLeft"] = "saMarginLeft";
	    // 
	    StyleAttribute["saMarkColor"] = "saMarkColor";
	    // 
	    StyleAttribute["saMarkTransparency"] = "saMarkTransparency";
	    // 
	    StyleAttribute["saMarkLabelsShow"] = "saMarkLabelsShow";
	    // 
	    StyleAttribute["saRunningOrderLabelsShow"] = "saRunningOrderLabelsShow";
	    // 
	    StyleAttribute["saMarkLabelsMode"] = "saMarkLabelsMode";
	    // 
	    StyleAttribute["saMarkLabelsCull"] = "saMarkLabelsCull";
	    // 
	    StyleAttribute["saMarkLabelsLineEndFirst"] = "saMarkLabelsLineEndFirst";
	    // 
	    StyleAttribute["saMarkLabelsLineEndLast"] = "saMarkLabelsLineEndLast";
	    // 
	    StyleAttribute["saMarkLabelsRangeMin"] = "saMarkLabelsRangeMin";
	    // 
	    StyleAttribute["saMarkLabelsRangeMax"] = "saMarkLabelsRangeMax";
	    // 
	    StyleAttribute["saMarkLabelsRangeScope"] = "saMarkLabelsRangeScope";
	    // 
	    StyleAttribute["saMarkLabelsRangeField"] = "saMarkLabelsRangeField";
	    // 
	    StyleAttribute["saMarkMarkersMode"] = "saMarkMarkersMode";
	    // 
	    StyleAttribute["saMaxHeight"] = "saMaxHeight";
	    // 
	    StyleAttribute["saMaxFontSize"] = "saMaxFontSize";
	    // 
	    StyleAttribute["saMaxStrokeWidth"] = "saMaxStrokeWidth";
	    // 
	    StyleAttribute["saMaxWidth"] = "saMaxWidth";
	    // 
	    StyleAttribute["saMidStrokeWidth"] = "saMidStrokeWidth";
	    // 
	    StyleAttribute["saMinHeight"] = "saMinHeight";
	    // 
	    StyleAttribute["saMinFontSize"] = "saMinFontSize";
	    // 
	    StyleAttribute["saMinLength"] = "saMinLength";
	    // 
	    StyleAttribute["saMinMapSize"] = "saMinMapSize";
	    // 
	    StyleAttribute["saMinSize"] = "saMinSize";
	    // 
	    StyleAttribute["saMinStrokeWidth"] = "saMinStrokeWidth";
	    // 
	    StyleAttribute["saMinWidth"] = "saMinWidth";
	    // 
	    StyleAttribute["saNonhighlightColor"] = "saNonhighlightColor";
	    // 
	    StyleAttribute["saOmitOnSpecial"] = "saOmitOnSpecial";
	    // 
	    StyleAttribute["saOpacity"] = "saOpacity";
	    // 
	    StyleAttribute["saOrientation"] = "saOrientation";
	    // 
	    StyleAttribute["saPadding"] = "saPadding";
	    // 
	    StyleAttribute["saPaddingTop"] = "saPaddingTop";
	    // 
	    StyleAttribute["saPaddingRight"] = "saPaddingRight";
	    // 
	    StyleAttribute["saPaddingBottom"] = "saPaddingBottom";
	    // 
	    StyleAttribute["saPaddingLeft"] = "saPaddingLeft";
	    // 
	    StyleAttribute["saPalette"] = "saPalette";
	    // 
	    StyleAttribute["saRenderFoldReversed"] = "saRenderFoldReversed";
	    // 
	    StyleAttribute["saReversePalette"] = "saReversePalette";
	    // 
	    StyleAttribute["saRounding"] = "saRounding";
	    // 
	    StyleAttribute["saRowHorizLevels"] = "saRowHorizLevels";
	    // 
	    StyleAttribute["saRowHorizWidth"] = "saRowHorizWidth";
	    // 
	    StyleAttribute["saRowLevels"] = "saRowLevels";
	    // 
	    StyleAttribute["saRowVertWidth"] = "saRowVertWidth";
	    // 
	    StyleAttribute["saSeparator"] = "saSeparator";
	    // 
	    StyleAttribute["saShape"] = "saShape";
	    // Deprecated
	    StyleAttribute["saShowLabels"] = "saShowLabels";
	    // 
	    StyleAttribute["saSize"] = "saSize";
	    // 
	    StyleAttribute["saSizeBar"] = "saSizeBar";
	    // 
	    StyleAttribute["saSmartAutoAlignment"] = "saSmartAutoAlignment";
	    // 
	    StyleAttribute["saSpace"] = "saSpace";
	    // 
	    StyleAttribute["saStrokeColor"] = "saStrokeColor";
	    // 
	    StyleAttribute["saStrokeSize"] = "saStrokeSize";
	    // 
	    StyleAttribute["saSubtitle"] = "saSubtitle";
	    // 
	    StyleAttribute["saTextAlign"] = "saTextAlign";
	    // 
	    StyleAttribute["saTextAlignDefault"] = "saTextAlignDefault";
	    // 
	    StyleAttribute["saTextDecoration"] = "saTextDecoration";
	    // 
	    StyleAttribute["saTextIndent"] = "saTextIndent";
	    // 
	    StyleAttribute["saTextOrientation"] = "saTextOrientation";
	    // 
	    StyleAttribute["saTextFormat"] = "saTextFormat";
	    // 
	    StyleAttribute["saTickColor"] = "saTickColor";
	    // 
	    StyleAttribute["saTickLength"] = "saTickLength";
	    // Deprecated
	    StyleAttribute["saTickSpacing"] = "saTickSpacing";
	    // 
	    StyleAttribute["saTitle"] = "saTitle";
	    // 
	    StyleAttribute["saTotalLabel"] = "saTotalLabel";
	    // 
	    StyleAttribute["saVAlign"] = "saVAlign";
	    // 
	    StyleAttribute["saVerticalAlign"] = "saVerticalAlign";
	    // 
	    StyleAttribute["saVerticalAlignDefault"] = "saVerticalAlignDefault";
	    // 
	    StyleAttribute["saVnaxis"] = "saVnaxis";
	    // 
	    StyleAttribute["saVnlabel"] = "saVnlabel";
	    // 
	    StyleAttribute["saWarnOnSpecial"] = "saWarnOnSpecial";
	    // 
	    StyleAttribute["saWashout"] = "saWashout";
	    // 
	    StyleAttribute["saWhiskerEnd"] = "saWhiskerEnd";
	    // 
	    StyleAttribute["saWhiskerStrokeColor"] = "saWhiskerStrokeColor";
	    // 
	    StyleAttribute["saWhiskerStrokeSize"] = "saWhiskerStrokeSize";
	    // 
	    StyleAttribute["saWidth"] = "saWidth";
	    // 
	    StyleAttribute["saWidthHeader"] = "saWidthHeader";
	    // 
	    StyleAttribute["saWrap"] = "saWrap";
	    // 
	    StyleAttribute["saZoom"] = "saZoom";
	    // Special attributes used for matching
	    StyleAttribute["saNone"] = "saNone";
	    // Special attributes used for matching
	    StyleAttribute["saAny"] = "saAny";
	})(StyleAttribute = exports.StyleAttribute || (exports.StyleAttribute = {}));
	// lowest bit of enum value denotes two-tone styles; newly added styles should follow this pattern.
	var BoxplotStyle;
	(function (BoxplotStyle) {
	    // mask for checking if a style is two-tone
	    BoxplotStyle["BoxplotStyleTwoTone"] = "two-tone";
	    // 
	    BoxplotStyle["BoxplotStyleModern"] = "modern";
	    // 
	    BoxplotStyle["BoxplotStyleGlass"] = "glass";
	    // 
	    BoxplotStyle["BoxplotStyleClassic"] = "classic";
	    // 
	    BoxplotStyle["BoxplotStyleClassicTwoTone"] = "classic-two-tone";
	})(BoxplotStyle = exports.BoxplotStyle || (exports.BoxplotStyle = {}));
	// used for boxplots and prediction band whiskers
	var WhiskerEnd;
	(function (WhiskerEnd) {
	    // 
	    WhiskerEnd["WhiskerEndNone"] = "none";
	    // 
	    WhiskerEnd["WhiskerEndSmall"] = "small";
	    // 
	    WhiskerEnd["WhiskerEndLarge"] = "large";
	})(WhiskerEnd = exports.WhiskerEnd || (exports.WhiskerEnd = {}));
	// 
	var StyleElement;
	(function (StyleElement) {
	    // 
	    StyleElement["elementAxis"] = "elementAxis";
	    // 
	    StyleElement["elementCell"] = "elementCell";
	    // 
	    StyleElement["elementDatalabel"] = "elementDatalabel";
	    // 
	    StyleElement["elementDropspot"] = "elementDropspot";
	    // 
	    StyleElement["elementHeader"] = "elementHeader";
	    // 
	    StyleElement["elementFieldLabel"] = "elementFieldLabel";
	    // 
	    StyleElement["elementFieldLabelDecoration"] = "elementFieldLabelDecoration";
	    // 
	    StyleElement["elementFieldLabelSpanner"] = "elementFieldLabelSpanner";
	    // 
	    StyleElement["elementLabel"] = "elementLabel";
	    // 
	    StyleElement["elementMark"] = "elementMark";
	    // 
	    StyleElement["elementPane"] = "elementPane";
	    // 
	    StyleElement["elementTable"] = "elementTable";
	    // 
	    StyleElement["elementWorksheet"] = "elementWorksheet";
	    // 
	    StyleElement["elementBasesheet"] = "elementBasesheet";
	    // 
	    StyleElement["elementDashboard"] = "elementDashboard";
	    // 
	    StyleElement["elementStoryboard"] = "elementStoryboard";
	    // 
	    StyleElement["elementCaption"] = "elementCaption";
	    // 
	    StyleElement["elementDropline"] = "elementDropline";
	    // 
	    StyleElement["elementRefline"] = "elementRefline";
	    // 
	    StyleElement["elementRefBand"] = "elementRefBand";
	    // 
	    StyleElement["elementRefBoxplot"] = "elementRefBoxplot";
	    // 
	    StyleElement["elementGridline"] = "elementGridline";
	    // 
	    StyleElement["elementZeroline"] = "elementZeroline";
	    // 
	    StyleElement["elementTrendline"] = "elementTrendline";
	    // 
	    StyleElement["elementTableDiv"] = "elementTableDiv";
	    // 
	    StyleElement["elementHeaderDiv"] = "elementHeaderDiv";
	    // 
	    StyleElement["elementMappedImage"] = "elementMappedImage";
	    // 
	    StyleElement["elementAction"] = "elementAction";
	    // 
	    StyleElement["elementTitle"] = "elementTitle";
	    // 
	    StyleElement["elementLegend"] = "elementLegend";
	    // 
	    StyleElement["elementLegendTitle"] = "elementLegendTitle";
	    // 
	    StyleElement["elementLegendTitleText"] = "elementLegendTitleText";
	    // 
	    StyleElement["elementAxisTitle"] = "elementAxisTitle";
	    // 
	    StyleElement["elementAnnotation"] = "elementAnnotation";
	    // 
	    StyleElement["elementDashTitle"] = "elementDashTitle";
	    // 
	    StyleElement["elementDashSubtitle"] = "elementDashSubtitle";
	    // 
	    StyleElement["elementDashText"] = "elementDashText";
	    // 
	    StyleElement["elementDashZone"] = "elementDashZone";
	    // 
	    StyleElement["elementDashContainer"] = "elementDashContainer";
	    // 
	    StyleElement["elementScrollbar"] = "elementScrollbar";
	    // Static on/off map layers
	    StyleElement["elementMapLayer"] = "elementMapLayer";
	    // Contains washout
	    StyleElement["elementMap"] = "elementMap";
	    // Initially for UrbanMapping/Claritas data
	    StyleElement["elementMapDataLayer"] = "elementMapDataLayer";
	    // 
	    StyleElement["elementQuickFilter"] = "elementQuickFilter";
	    // 
	    StyleElement["elementQuickFilterTitle"] = "elementQuickFilterTitle";
	    // 
	    StyleElement["elementParameterCtrl"] = "elementParameterCtrl";
	    // 
	    StyleElement["elementParameterCtrlTitle"] = "elementParameterCtrlTitle";
	    // 
	    StyleElement["elementPageCardTitle"] = "elementPageCardTitle";
	    // 
	    StyleElement["elementStoryDescription"] = "elementStoryDescription";
	    // 
	    StyleElement["elementStoryPointCaption"] = "elementStoryPointCaption";
	    // 
	    StyleElement["elementStoryTitle"] = "elementStoryTitle";
	    // 
	    StyleElement["elementTooltip"] = "elementTooltip";
	    // 
	    StyleElement["elementAll"] = "elementAll";
	    // 
	    StyleElement["elementPageCardBody"] = "elementPageCardBody";
	    // 
	    StyleElement["elementDataHighlighter"] = "elementDataHighlighter";
	    // 
	    StyleElement["elementDataHighlighterTitle"] = "elementDataHighlighterTitle";
	    // Special elements used for matching and organization
	    StyleElement["elementNone"] = "elementNone";
	    // Special elements used for matching and organization
	    StyleElement["elementAny"] = "elementAny";
	    // Special elements used for matching and organization
	    StyleElement["elementRoot"] = "elementRoot";
	})(StyleElement = exports.StyleElement || (exports.StyleElement = {}));
	// Do not mess with these values. They are sometimes used as array indexes/bounds
	var StyleDataClass;
	(function (StyleDataClass) {
	    // 
	    StyleDataClass["dcNormal"] = "dcNormal";
	    // 
	    StyleDataClass["dcTotal"] = "dcTotal";
	    // 
	    StyleDataClass["dcSubtotal"] = "dcSubtotal";
	    // 
	    StyleDataClass["dcCOUNT"] = "dcCOUNT";
	})(StyleDataClass = exports.StyleDataClass || (exports.StyleDataClass = {}));
	// 
	var StyleFieldScope;
	(function (StyleFieldScope) {
	    // 
	    StyleFieldScope["fsNone"] = "fsNone";
	    // 
	    StyleFieldScope["fsRows"] = "fsRows";
	    // 
	    StyleFieldScope["fsCols"] = "fsCols";
	})(StyleFieldScope = exports.StyleFieldScope || (exports.StyleFieldScope = {}));
	// 
	var StyleSwatch;
	(function (StyleSwatch) {
	    // 
	    StyleSwatch["ssUnspecified"] = "ssUnspecified";
	    // 
	    StyleSwatch["ssLight"] = "ssLight";
	    // 
	    StyleSwatch["ssDark"] = "ssDark";
	})(StyleSwatch = exports.StyleSwatch || (exports.StyleSwatch = {}));
	// 
	var TableauFontStyle;
	(function (TableauFontStyle) {
	    // 
	    TableauFontStyle["NormalStyle"] = "font-style-normal";
	    // 
	    TableauFontStyle["Italic"] = "font-style-italic";
	})(TableauFontStyle = exports.TableauFontStyle || (exports.TableauFontStyle = {}));
	// Unsupported for Betsy
	var TextDecoration;
	(function (TextDecoration) {
	    // 
	    TextDecoration["NoDecoration"] = "text-decoration-none";
	    // 
	    TextDecoration["Underline"] = "text-decoration-underline";
	    // not yet supported
	    TextDecoration["Overline"] = "text-decoration-overline";
	    // 
	    TextDecoration["Strikethrough"] = "text-decoration-strikethrough";
	})(TextDecoration = exports.TextDecoration || (exports.TextDecoration = {}));
	// 
	var FontWeight;
	(function (FontWeight) {
	    // 
	    FontWeight["NormalWeight"] = "font-weight-normal";
	    // 
	    FontWeight["Bold"] = "font-weight-bold";
	})(FontWeight = exports.FontWeight || (exports.FontWeight = {}));
	// 
	var TextOrient;
	(function (TextOrient) {
	    // 
	    TextOrient["TO_Auto"] = "text-orient-auto";
	    // 
	    TextOrient["TO_Horz"] = "text-orient-horizontal";
	    // 
	    TextOrient["TO_VertUp"] = "text-orient-vertical-up";
	    // 
	    TextOrient["TO_VertDown"] = "text-orient-vertical-down";
	})(TextOrient = exports.TextOrient || (exports.TextOrient = {}));
	// 
	var TextAlign;
	(function (TextAlign) {
	    // 
	    TextAlign["TA_Start"] = "text-align-start";
	    // 
	    TextAlign["TA_Center"] = "text-align-center";
	    // 
	    TextAlign["TA_End"] = "text-align-end";
	})(TextAlign = exports.TextAlign || (exports.TextAlign = {}));
	// 
	var TextWrapMode;
	(function (TextWrapMode) {
	    // 
	    TextWrapMode["TextWrapOff"] = "text-wrap-off";
	    // 
	    TextWrapMode["TextWrapTruncate"] = "text-wrap-truncate";
	    // 
	    TextWrapMode["TextWrapOn"] = "text-wrap-on";
	    // 
	    TextWrapMode["TextWrapAuto"] = "text-wrap-auto";
	})(TextWrapMode = exports.TextWrapMode || (exports.TextWrapMode = {}));
	// 
	var TextWholeLineMode;
	(function (TextWholeLineMode) {
	    // 
	    TextWholeLineMode["TextWholeLineOff"] = "text-whole-line-off";
	    // 
	    TextWholeLineMode["TextWholeLineOn"] = "text-whole-line-on";
	    // 
	    TextWholeLineMode["TextWholeLineAuto"] = "text-whole-line-auto";
	})(TextWholeLineMode = exports.TextWholeLineMode || (exports.TextWholeLineMode = {}));
	// 
	var TextBreakMode;
	(function (TextBreakMode) {
	    // 
	    TextBreakMode["TextBreakWhitespaceOnly"] = "text-break-ws-only";
	    // 
	    TextBreakMode["TextBreakAuto"] = "text-break-auto";
	})(TextBreakMode = exports.TextBreakMode || (exports.TextBreakMode = {}));
	// Anyone editing this also needs to update the hardcoded workbook serializers - see the file formats team
	var DataType;
	(function (DataType) {
	    // 
	    DataType["DT_INTEGER"] = "integer";
	    // 
	    DataType["DT_REAL"] = "real";
	    // 
	    DataType["DT_STRING"] = "cstring";
	    // 
	    DataType["DT_DATETIME"] = "datetime";
	    // 
	    DataType["DT_BOOLEAN"] = "boolean";
	    // 
	    DataType["DT_DATE"] = "date";
	    // 
	    DataType["DT_TUPLE"] = "tuple";
	    // 
	    DataType["DT_SPATIAL"] = "spatial";
	    // 
	    DataType["DT_UNKNOWN"] = "unknown";
	    // 
	    DataType["DT_BINARY"] = "binary";
	})(DataType = exports.DataType || (exports.DataType = {}));
	// 
	var SortDirection;
	(function (SortDirection) {
	    // ascending
	    SortDirection["ST_ASC"] = "asc";
	    // descending
	    SortDirection["ST_DESC"] = "desc";
	})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
	// 
	var SortType;
	(function (SortType) {
	    // Use the defined ordering
	    SortType["ST_NATURAL"] = "data-source-order";
	    // Alphabetic/numeric ordering of data
	    SortType["ST_ALPHABETIC"] = "alpha";
	    // Specify a secondary field
	    SortType["ST_COMPUTED"] = "field";
	    // Manually defined ordering
	    SortType["ST_MANUAL"] = "manual";
	})(SortType = exports.SortType || (exports.SortType = {}));
	// 
	var SortEnd;
	(function (SortEnd) {
	    // 
	    SortEnd["ST_TOP"] = "top";
	    // 
	    SortEnd["ST_BOTTOM"] = "bottom";
	})(SortEnd = exports.SortEnd || (exports.SortEnd = {}));
	// 
	var ForecastColumnType;
	(function (ForecastColumnType) {
	    // 
	    ForecastColumnType["FORECAST_NONE"] = "none";
	    // 
	    ForecastColumnType["FORECAST_VALUE"] = "value";
	    // 
	    ForecastColumnType["FORECAST_INDICATOR"] = "indicator";
	    // 
	    ForecastColumnType["FORECAST_PRECISION"] = "precision";
	    // 
	    ForecastColumnType["FORECAST_QUALITY"] = "quality";
	    // 
	    ForecastColumnType["FORECAST_FIT_TREND"] = "fit_trend";
	    // 
	    ForecastColumnType["FORECAST_PRECISION_PERCENT"] = "precision_percent";
	    // 
	    ForecastColumnType["FORECAST_PREDICTION_INTERVAL_UPPER"] = "prediction_upper";
	    // 
	    ForecastColumnType["FORECAST_PREDICTION_INTERVAL_LOWER"] = "prediction_lower";
	})(ForecastColumnType = exports.ForecastColumnType || (exports.ForecastColumnType = {}));
	// 
	var MarkMarkersMode;
	(function (MarkMarkersMode) {
	    // 
	    MarkMarkersMode["MMM_Auto"] = "mmm-auto";
	    // 
	    MarkMarkersMode["MMM_All"] = "mmm_all";
	    // 
	    MarkMarkersMode["MMM_None"] = "mmm_none";
	    // 
	    MarkMarkersMode["MMM_Default"] = "mmm_default";
	})(MarkMarkersMode = exports.MarkMarkersMode || (exports.MarkMarkersMode = {}));
	// 
	var PercentMode;
	(function (PercentMode) {
	    // 
	    PercentMode["PERCENT_CELL_IN_PANE"] = "cell-in-pane";
	    // 
	    PercentMode["PERCENT_ROW_IN_PANE"] = "row-in-pane";
	    // 
	    PercentMode["PERCENT_COLUMN_IN_PANE"] = "column-in-pane";
	    // 
	    PercentMode["PERCENT_PANE"] = "pane";
	    // 
	    PercentMode["PERCENT_ROW"] = "row";
	    // 
	    PercentMode["PERCENT_COLUMN"] = "column";
	    // 
	    PercentMode["PERCENT_TABLE"] = "table";
	})(PercentMode = exports.PercentMode || (exports.PercentMode = {}));
	// 
	var SpecialValuesMode;
	(function (SpecialValuesMode) {
	    // 
	    SpecialValuesMode["SPECIAL_VALUES_HIDE_AND_WARN"] = "hide-and-warn";
	    // 
	    SpecialValuesMode["SPECIAL_VALUES_HIDE"] = "hide";
	    // 
	    SpecialValuesMode["SPECIAL_VALUES_HIDE_BREAK_LINES"] = "hide-break-lines";
	    // 
	    SpecialValuesMode["SPECIAL_VALUES_SHOW"] = "show";
	})(SpecialValuesMode = exports.SpecialValuesMode || (exports.SpecialValuesMode = {}));
	// 
	var LayoutType;
	(function (LayoutType) {
	    // 
	    LayoutType["LAYOUT_CARTESIAN"] = "cartesian";
	    // 
	    LayoutType["LAYOUT_DEFAULT"] = "default";
	})(LayoutType = exports.LayoutType || (exports.LayoutType = {}));
	// 
	var ShelfType;
	(function (ShelfType) {
	    // 
	    ShelfType["ST_NONE"] = "none-shelf";
	    // 
	    ShelfType["ST_COLUMNS_SHELF"] = "columns-shelf";
	    // 
	    ShelfType["ST_ROWS_SHELF"] = "rows-shelf";
	    // 
	    ShelfType["ST_PAGES_SHELF"] = "pages-shelf";
	    // 
	    ShelfType["ST_FILTER_SHELF"] = "filter-shelf";
	    // 
	    ShelfType["ST_IMAGE_SHELF"] = "image-shelf";
	    // 
	    ShelfType["ST_MEASURES_SHELF"] = "measures-shelf";
	    // 
	    ShelfType["ST_SHOWME_SHELF"] = "show-me-shelf";
	    // 
	    ShelfType["ST_ENCODING_SHELF"] = "encoding-shelf";
	    // 
	    ShelfType["ST_CLUSTER_SHELF"] = "cluster-shelf";
	    // 
	    ShelfType["ST_GEOMETRY_SHELF"] = "geometry-shelf";
	    // 
	    ShelfType["ST_END"] = "end-shelf";
	    // 
	    ShelfType["ST_FINAL"] = "final-shelf";
	})(ShelfType = exports.ShelfType || (exports.ShelfType = {}));
	// 
	var RestrictType;
	(function (RestrictType) {
	    // 
	    RestrictType["RT_INTERSECT"] = "rt-intersection";
	    // 
	    RestrictType["RT_UNION"] = "rt-union";
	})(RestrictType = exports.RestrictType || (exports.RestrictType = {}));
	// 
	var TooltipMode;
	(function (TooltipMode) {
	    // 
	    TooltipMode["TM_NONE"] = "none";
	    // 
	    TooltipMode["TM_STICKY"] = "sticky";
	    // 
	    TooltipMode["TM_SMOOTH"] = "smooth";
	})(TooltipMode = exports.TooltipMode || (exports.TooltipMode = {}));
	// 
	var ColumnGroups;
	(function (ColumnGroups) {
	    // 0x01
	    ColumnGroups["COLS_IN_OUTPUT"] = "cols-in-output";
	    // 0x02
	    ColumnGroups["COLS_IN_FILTER_SHELF"] = "cols-in-filter-shelf";
	    // 0x04
	    ColumnGroups["COLS_REF_BY_FILTERS"] = "cols-ref-by-filters";
	    // 0x08
	    ColumnGroups["COLS_REF_BY_OMEASURES"] = "cols-ref-by-omeasures";
	    // 0x10
	    ColumnGroups["COLS_REF_BY_JOIN_LOD"] = "cols-ref-by-join-lod";
	    // 0x20
	    ColumnGroups["COLS_HIDDEN"] = "cols-hidden";
	    // 0x40
	    ColumnGroups["COLS_REF_BY_SORTS"] = "cols-ref-by-sorts";
	    // 
	    ColumnGroups["COLS_REF_BY_FILTERS_OR_SORTS"] = "cols-ref-by-filters-or-sorts";
	    // 
	    ColumnGroups["COLS_ON_SHELVES"] = "cols-on-shelves";
	    // 
	    ColumnGroups["COLS_ALL"] = "cols-all";
	})(ColumnGroups = exports.ColumnGroups || (exports.ColumnGroups = {}));
	// 
	var ButtonsOption;
	(function (ButtonsOption) {
	    // 
	    ButtonsOption["BO_HIDE"] = "buttons-hide";
	})(ButtonsOption = exports.ButtonsOption || (exports.ButtonsOption = {}));
	// 
	var SelectionRelaxationOption;
	(function (SelectionRelaxationOption) {
	    // 
	    SelectionRelaxationOption["SRO_ALLOW"] = "selection-relaxation-allow";
	    // 
	    SelectionRelaxationOption["SRO_DISALLOW"] = "selection-relaxation-disallow";
	})(SelectionRelaxationOption = exports.SelectionRelaxationOption || (exports.SelectionRelaxationOption = {}));
	// 
	var EncodingType;
	(function (EncodingType) {
	    // a text encoding
	    EncodingType["ET_TEXT"] = "text-encoding";
	    // a color encoding
	    EncodingType["ET_COLOR"] = "color-encoding";
	    // a size encoding
	    EncodingType["ET_SIZE"] = "size-encoding";
	    // a shape encoding
	    EncodingType["ET_SHAPE"] = "shape-encoding";
	    // an image encoding
	    EncodingType["ET_IMAGE"] = "image-encoding";
	    // a sort (path) encoding (currently only for line or polygon charts)
	    EncodingType["ET_SORT"] = "sort-encoding";
	    // a wedge size (angle) encoding (currently only for pie charts)
	    EncodingType["ET_WEDGESIZE"] = "wedge-size-encoding";
	    // a geometry encoding
	    EncodingType["ET_GEOMETRY"] = "geometry-encoding";
	    // a level of detail encoding
	    EncodingType["ET_LOD"] = "level-of-detail-encoding";
	    // encoding used for the data highlighter/legend mechanism
	    EncodingType["ET_HIGHLIGHT"] = "highlight-encoding";
	    // a tooltip encoding
	    EncodingType["ET_TOOLTIP"] = "tooltip-encoding";
	    // a temporary label placed above marks for the table calc dialog
	    EncodingType["ET_RUNNINGORDER"] = "runningorder-encoding";
	    // the number of encodings, this is invalid input for an encoding presentation model
	    EncodingType["NUM_ENCODINGS"] = "num-encodings";
	    // an invalid encoding
	    EncodingType["ET_INVALID"] = "invalid-encoding";
	})(EncodingType = exports.EncodingType || (exports.EncodingType = {}));
	// Enumeration of valid horizontal alignments.
	var LabelHAlignment;
	(function (LabelHAlignment) {
	    // 
	    LabelHAlignment["LHA_Left"] = "h-align-left";
	    // 
	    LabelHAlignment["LHA_Center"] = "h-align-center";
	    // 
	    LabelHAlignment["LHA_Right"] = "h-align-right";
	    // 
	    LabelHAlignment["LHA_Automatic"] = "h-align-auto";
	})(LabelHAlignment = exports.LabelHAlignment || (exports.LabelHAlignment = {}));
	// Enumeration of valid vertical alignments.
	var LabelVAlignment;
	(function (LabelVAlignment) {
	    // 
	    LabelVAlignment["LVA_Bottom"] = "v-align-bottom";
	    // 
	    LabelVAlignment["LVA_Center"] = "v-align-center";
	    // 
	    LabelVAlignment["LVA_Top"] = "v-align-top";
	    // 
	    LabelVAlignment["LVA_Automatic"] = "v-align-auto";
	})(LabelVAlignment = exports.LabelVAlignment || (exports.LabelVAlignment = {}));
	// Enumeration of valid label positions.
	var LabelPosition;
	(function (LabelPosition) {
	    // Position each text run relative to the center of the original bbox.  Use the original bbox as the height and width of the text mark.  Used for non-stacked OO text marks.
	    LabelPosition["CenterInOriginalBbox"] = "label-position-center-in-original-box";
	    // Position each text run relative to the bottom left corner of the measured bbox. Use the measured bbox as the width and height of the label. Used for labels
	    LabelPosition["OriginAtLowerLeft"] = "label-position-origin-at-lower-left";
	    // Position each text run relative to the center of the measured bbox. Use the measured bbox as the width and height of the text mark. Used for most text marks.
	    LabelPosition["OriginAtCenter"] = "label-position-origin-at-center";
	})(LabelPosition = exports.LabelPosition || (exports.LabelPosition = {}));
	// Enumeration of ways to use color.  Values can be or'ed together to make a mask for allowed options
	var ColorMode;
	(function (ColorMode) {
	    // Color user specified
	    ColorMode["CLRM_User"] = "clrm-user";
	    // Color selected automatically
	    ColorMode["CLRM_Auto"] = "clrm-auto";
	    // Color matches mark color
	    ColorMode["CLRM_Match"] = "clrm-match";
	    // No color (transparent or not drawn)
	    ColorMode["CLRM_None"] = "clrm-none";
	})(ColorMode = exports.ColorMode || (exports.ColorMode = {}));
	// 
	var MarkLabelsMode;
	(function (MarkLabelsMode) {
	    // 
	    MarkLabelsMode["MLM_All"] = "mlm-all";
	    // 
	    MarkLabelsMode["MLM_Selection"] = "mlm-selection";
	    // 
	    MarkLabelsMode["MLM_Highlight"] = "mlm-highlight";
	    // 
	    MarkLabelsMode["MLM_LineEnds"] = "mlm-line-ends";
	    // min/max setting
	    MarkLabelsMode["MLM_Range"] = "mlm-range";
	    // most recent (only relevant when date field is in play)
	    MarkLabelsMode["MLM_MostRecent"] = "mlm-most-recent";
	    // ...this is " virtual " (runtime only, not saved, not shown as a user setting
	    MarkLabelsMode["MLM_MultipleValues"] = "mlm-multiple-values";
	    // 
	    MarkLabelsMode["MLM_Default"] = "mlm-default";
	})(MarkLabelsMode = exports.MarkLabelsMode || (exports.MarkLabelsMode = {}));
	// 
	var MarkLabelsScope;
	(function (MarkLabelsScope) {
	    // 
	    MarkLabelsScope["MLS_Table"] = "mls-table";
	    // 
	    MarkLabelsScope["MLS_Pane"] = "mls-pane";
	    // 
	    MarkLabelsScope["MLS_Cell"] = "mls-cell";
	    // 
	    MarkLabelsScope["MLS_MultiMark"] = "mls-multimark";
	    // ...this is " virtual " (runtime only, not saved, not shown as a user setting)
	    MarkLabelsScope["MLS_MultipleValues"] = "mls-multiple-values";
	    // 
	    MarkLabelsScope["MLS_Default"] = "mls-default";
	})(MarkLabelsScope = exports.MarkLabelsScope || (exports.MarkLabelsScope = {}));
	// 
	var MarkLabelsVisibility;
	(function (MarkLabelsVisibility) {
	    // 
	    MarkLabelsVisibility["MLV_Hidden"] = "mlv-hidden";
	    // 
	    MarkLabelsVisibility["MLV_Visible"] = "mlv-visible";
	    // 
	    MarkLabelsVisibility["MLV_UseCurrent"] = "mlv-use-current";
	})(MarkLabelsVisibility = exports.MarkLabelsVisibility || (exports.MarkLabelsVisibility = {}));
	// 
	var StackingMode;
	(function (StackingMode) {
	    // 
	    StackingMode["StackingOff"] = "off";
	    // 
	    StackingMode["StackingOn"] = "on";
	    // 
	    StackingMode["StackingAuto"] = "auto";
	})(StackingMode = exports.StackingMode || (exports.StackingMode = {}));
	// 
	var MarkAlignment;
	(function (MarkAlignment) {
	    // 
	    MarkAlignment["MarkAlignmentLeft"] = "mark-alignment-left";
	    // 
	    MarkAlignment["MarkAlignmentRight"] = "mark-alignment-right";
	    // 
	    MarkAlignment["MarkAlignmentCenter"] = "mark-alignment-center";
	})(MarkAlignment = exports.MarkAlignment || (exports.MarkAlignment = {}));
	// 
	var PaneLabelComposition;
	(function (PaneLabelComposition) {
	    // 
	    PaneLabelComposition["PLC_None"] = "pane-label-composition-none";
	    // 
	    PaneLabelComposition["PLC_Mixed"] = "pane-label-composition-mixed";
	    // 
	    PaneLabelComposition["PLC_All"] = "pane-label-composition-all";
	})(PaneLabelComposition = exports.PaneLabelComposition || (exports.PaneLabelComposition = {}));
	// The user-specified mark type on the Marks Card
	var PrimitiveType;
	(function (PrimitiveType) {
	    // 
	    PrimitiveType["PT_AUTOMATIC"] = "automatic";
	    // 
	    PrimitiveType["PT_TEXT"] = "text";
	    // 
	    PrimitiveType["PT_IMAGE"] = "image";
	    // 
	    PrimitiveType["PT_SHAPE"] = "shape";
	    // 
	    PrimitiveType["PT_RECTANGLE"] = "rectangle";
	    // 
	    PrimitiveType["PT_BAR"] = "bar";
	    // 
	    PrimitiveType["PT_GANTT"] = "gantt";
	    // 
	    PrimitiveType["PT_SQUARE"] = "square";
	    // 
	    PrimitiveType["PT_CIRCLE"] = "circle";
	    // 
	    PrimitiveType["PT_POLYLINE"] = "polyline";
	    // line chart
	    PrimitiveType["PT_LINE"] = "line";
	    // 
	    PrimitiveType["PT_POLYGON"] = "polygon";
	    // area chart
	    PrimitiveType["PT_AREA"] = "area";
	    // 
	    PrimitiveType["PT_PIE"] = "pie";
	    // 
	    PrimitiveType["PT_MULTIPOLYGON"] = "multipolygon";
	    // Not an actual primitive type. This is just used to flag the UI that multiple types are in play.
	    PrimitiveType["PT_MULTIPLE"] = "multiple";
	    // used for looping over all values
	    PrimitiveType["NUM_PRIMITIVES"] = "count";
	    // used to flag an unset or invalid state
	    PrimitiveType["PT_INVALID"] = "invalid";
	})(PrimitiveType = exports.PrimitiveType || (exports.PrimitiveType = {}));
	// Defines the way a given primitive behaves on a viz - for instance, a PT_CIRCLE is treated as a point, while a PT_POLYGON would be treated as an area.
	var MarkType;
	(function (MarkType) {
	    // 
	    MarkType["MT_POINT"] = "point";
	    // 
	    MarkType["MT_LINE"] = "line";
	    // 
	    MarkType["MT_AREA"] = "area";
	    // 
	    MarkType["MT_INVALID"] = "invalid";
	})(MarkType = exports.MarkType || (exports.MarkType = {}));
	// PaneAxis is used to describe which axis of a pane is the independent axis.
	var PaneAxis;
	(function (PaneAxis) {
	    // The independent axis is inferred from other properties of the pane.
	    PaneAxis["AXIS_AUTO"] = "auto";
	    // 
	    PaneAxis["AXIS_X"] = "x";
	    // 
	    PaneAxis["AXIS_Y"] = "y";
	})(PaneAxis = exports.PaneAxis || (exports.PaneAxis = {}));
	// 
	var Rounding;
	(function (Rounding) {
	    // 
	    Rounding["Rounding_None"] = "none";
	    // 
	    Rounding["Rounding_Small"] = "small";
	    // 
	    Rounding["Rounding_Medium"] = "medium";
	    // 
	    Rounding["Rounding_Large"] = "large";
	})(Rounding = exports.Rounding || (exports.Rounding = {}));
	// 
	var LineEnd;
	(function (LineEnd) {
	    // 
	    LineEnd["LineEnd_None"] = "none";
	    // 
	    LineEnd["LineEnd_Arrow"] = "arrow";
	    // 
	    LineEnd["LineEnd_OpenArrow"] = "open-arrow";
	    // 
	    LineEnd["LineEnd_Dot"] = "dot";
	})(LineEnd = exports.LineEnd || (exports.LineEnd = {}));
	// 
	var LineEndSize;
	(function (LineEndSize) {
	    // 
	    LineEndSize["LineEndSize_Smallest"] = "smallest";
	    // 
	    LineEndSize["LineEndSize_Smaller"] = "smaller";
	    // 
	    LineEndSize["LineEndSize_Small"] = "small";
	    // 
	    LineEndSize["LineEndSize_Medium"] = "medium";
	    // 
	    LineEndSize["LineEndSize_Large"] = "large";
	    // 
	    LineEndSize["LineEndSize_Larger"] = "larger";
	    // 
	    LineEndSize["LineEndSize_Largest"] = "largest";
	})(LineEndSize = exports.LineEndSize || (exports.LineEndSize = {}));
	// 
	var BodyType;
	(function (BodyType) {
	    // 
	    BodyType["BodyType_None"] = "none";
	    // 
	    BodyType["BodyType_Box"] = "box";
	    // 
	    BodyType["BodyType_Edge"] = "edge";
	})(BodyType = exports.BodyType || (exports.BodyType = {}));
	// 
	var StyleTheme;
	(function (StyleTheme) {
	    // 
	    StyleTheme["themeClassic"] = "classic";
	    // 
	    StyleTheme["themeModern"] = "modern";
	    // 
	    StyleTheme["themeClean"] = "clean";
	    // 
	    StyleTheme["themeSmooth"] = "smooth";
	    // 
	    StyleTheme["themeCustom"] = "custom";
	})(StyleTheme = exports.StyleTheme || (exports.StyleTheme = {}));
	// 
	var AxisFoldState;
	(function (AxisFoldState) {
	    // 
	    AxisFoldState["afNone"] = "none";
	    // 
	    AxisFoldState["afFolded"] = "folded";
	    // 
	    AxisFoldState["afSynchronized"] = "synchronized";
	})(AxisFoldState = exports.AxisFoldState || (exports.AxisFoldState = {}));
	// 
	var LinePattern;
	(function (LinePattern) {
	    // 
	    LinePattern["LinePatternNone"] = "none";
	    // 
	    LinePattern["LinePatternSolid"] = "solid";
	    // 
	    LinePattern["LinePatternDashed"] = "dashed";
	    // 
	    LinePattern["LinePatternDotted"] = "dotted";
	})(LinePattern = exports.LinePattern || (exports.LinePattern = {}));
	// 
	var LineVisibility;
	(function (LineVisibility) {
	    // 
	    LineVisibility["LineVisibilityAuto"] = "automatic";
	    // 
	    LineVisibility["LineVisibilityOn"] = "on";
	    // 
	    LineVisibility["LineVisibilityOff"] = "off";
	})(LineVisibility = exports.LineVisibility || (exports.LineVisibility = {}));
	// 
	var StylesLinePattern;
	(function (StylesLinePattern) {
	    // 
	    StylesLinePattern["StylesLinePatternSolid"] = "solid";
	    // 
	    StylesLinePattern["StylesLinePatternDashed"] = "dashed";
	    // 
	    StylesLinePattern["StylesLinePatternDotted"] = "dotted";
	})(StylesLinePattern = exports.StylesLinePattern || (exports.StylesLinePattern = {}));
	// 
	var LineCap;
	(function (LineCap) {
	    // 
	    LineCap["LineCapFlat"] = "flat";
	    // 
	    LineCap["LineCapSquare"] = "square";
	    // 
	    LineCap["LineCapRound"] = "round";
	    // 
	    LineCap["LineCapTriangle"] = "triangle";
	})(LineCap = exports.LineCap || (exports.LineCap = {}));
	// 
	var LineJoin;
	(function (LineJoin) {
	    // 
	    LineJoin["BevelJoin"] = "bevel";
	    // 
	    LineJoin["MiterJoin"] = "miter";
	    // 
	    LineJoin["RoundJoin"] = "round";
	})(LineJoin = exports.LineJoin || (exports.LineJoin = {}));
	// 
	var LineAlignment;
	(function (LineAlignment) {
	    // 
	    LineAlignment["AlignmentCenter"] = "center";
	    // 
	    LineAlignment["AlignmentInset"] = "inset";
	})(LineAlignment = exports.LineAlignment || (exports.LineAlignment = {}));
	// 
	var FillMode;
	(function (FillMode) {
	    // 
	    FillMode["FillEvenOdd"] = "even-odd";
	    // 
	    FillMode["FillWinding"] = "winding";
	})(FillMode = exports.FillMode || (exports.FillMode = {}));
	// 
	var BorderStyle;
	(function (BorderStyle) {
	    // none
	    BorderStyle["BorderStyleNone"] = "bs-none";
	    // hidden
	    BorderStyle["BorderStyleHidden"] = "bs-hidden";
	    // dotted
	    BorderStyle["BorderStyleDotted"] = "bs-dotted";
	    // dashed
	    BorderStyle["BorderStyleDashed"] = "bs-dashed";
	    // solid
	    BorderStyle["BorderStyleSolid"] = "bs-solid";
	    // double
	    BorderStyle["BorderStyleDouble"] = "bs-double";
	    // groove
	    BorderStyle["BorderStyleGroove"] = "bs-groove";
	    // ridge
	    BorderStyle["BorderStyleRidge"] = "bs-ridge";
	    // inset
	    BorderStyle["BorderStyleInset"] = "bs-inset";
	    // outset
	    BorderStyle["BorderStyleOutset"] = "bs-outset";
	    // invalid
	    BorderStyle["BorderStyleInvalid"] = "bs-invalid";
	})(BorderStyle = exports.BorderStyle || (exports.BorderStyle = {}));
	// 
	var ColorPaletteType;
	(function (ColorPaletteType) {
	    // 
	    ColorPaletteType["ColorPaletteRegular"] = "color-palette-regular";
	    // 
	    ColorPaletteType["ColorPaletteOrderedDiverging"] = "palette-ordered-diverging";
	    // 
	    ColorPaletteType["ColorPaletteOrderedLinear"] = "palette-ordered-linear";
	})(ColorPaletteType = exports.ColorPaletteType || (exports.ColorPaletteType = {}));
	// 
	var PaletteFlags;
	(function (PaletteFlags) {
	    // 
	    PaletteFlags["PaletteFlagNone"] = "palette-flag-none";
	    // 
	    PaletteFlags["PaletteFlagCustom"] = "palette-flag-custom";
	    // 
	    PaletteFlags["PaletteFlagNotQuantitative"] = "palette-flag-not-quantitative";
	    // 
	    PaletteFlags["PaletteFlagNotCategorical"] = "palette-flag-not-categorical";
	    // 
	    PaletteFlags["PaletteFlagNotReferenceBand"] = "palette-flag-not-reference-band";
	    // 
	    PaletteFlags["PaletteFlagNotBoxplot"] = "palette-flag-not-boxplot";
	    // 
	    PaletteFlags["PaletteFlagNotFilledMapLight"] = "palette-flag-not-filled-map-light";
	    // 
	    PaletteFlags["PaletteFlagNotFilledMapDark"] = "palette-flag-not-filled-map-dark";
	    // 
	    PaletteFlags["PaletteFlagLegacy"] = "palette-flag-legacy";
	})(PaletteFlags = exports.PaletteFlags || (exports.PaletteFlags = {}));
	// 
	var DefaultPaletteType;
	(function (DefaultPaletteType) {
	    // 
	    DefaultPaletteType["SmallNominal"] = "palette-default-small-nominal";
	    // 
	    DefaultPaletteType["LargeNominal"] = "palette-default-large-nominal";
	    // 
	    DefaultPaletteType["Ordinal"] = "palette-default-ordinal";
	    // 
	    DefaultPaletteType["QuantitativePositive"] = "palette-default-quant-pos";
	    // 
	    DefaultPaletteType["QuantitativeNegative"] = "palette-default-quant-neg";
	    // 
	    DefaultPaletteType["QuantitativeDiverging"] = "palette-default-quant-div";
	    // 
	    DefaultPaletteType["QuantitativePositiveLight"] = "palette-default-quant-pos-light";
	    // 
	    DefaultPaletteType["QuantitativeNegativeLight"] = "palette-default-quant-neg-light";
	    // 
	    DefaultPaletteType["QuantitativeDivergingLight"] = "palette-default-quant-div-light";
	    // 
	    DefaultPaletteType["QuantitativePositiveArea"] = "palette-default-quant-pos-area";
	    // 
	    DefaultPaletteType["QuantitativeNegativeArea"] = "palette-default-quant-neg-area";
	    // 
	    DefaultPaletteType["QuantitativeDivergingArea"] = "palette-default-quant-div-area";
	})(DefaultPaletteType = exports.DefaultPaletteType || (exports.DefaultPaletteType = {}));
	// 
	var ShowBounds;
	(function (ShowBounds) {
	    // 
	    ShowBounds["Both"] = "show-both";
	    // 
	    ShowBounds["Upper"] = "show-upper";
	    // 
	    ShowBounds["Lower"] = "show-lower";
	})(ShowBounds = exports.ShowBounds || (exports.ShowBounds = {}));
	// Sample vs. population standard deviation
	var StDevType;
	(function (StDevType) {
	    // 
	    StDevType["Sample"] = "stdev-sample";
	    // 
	    StDevType["Population"] = "stdev-population";
	})(StDevType = exports.StDevType || (exports.StDevType = {}));
	// 
	var ReferenceLineFormulaGroup;
	(function (ReferenceLineFormulaGroup) {
	    // 
	    ReferenceLineFormulaGroup["None"] = "none";
	    // 
	    ReferenceLineFormulaGroup["Line"] = "line";
	    // 
	    ReferenceLineFormulaGroup["Band"] = "band";
	    // 
	    ReferenceLineFormulaGroup["Distribution"] = "distribution";
	    // 
	    ReferenceLineFormulaGroup["Boxplot"] = "boxplot";
	})(ReferenceLineFormulaGroup = exports.ReferenceLineFormulaGroup || (exports.ReferenceLineFormulaGroup = {}));
	// 
	var ReferenceLineScopeType;
	(function (ReferenceLineScopeType) {
	    // 
	    ReferenceLineScopeType["PerCell"] = "per-cell";
	    // 
	    ReferenceLineScopeType["PerPane"] = "per-pane";
	    // 
	    ReferenceLineScopeType["PerTable"] = "per-table";
	})(ReferenceLineScopeType = exports.ReferenceLineScopeType || (exports.ReferenceLineScopeType = {}));
	// how should the line be labeled
	var ReferenceLineLabelType;
	(function (ReferenceLineLabelType) {
	    // no label
	    ReferenceLineLabelType["None"] = "none";
	    // an automatically generated label
	    ReferenceLineLabelType["Automatic"] = "automatic";
	    // 
	    ReferenceLineLabelType["Value"] = "value";
	    // 
	    ReferenceLineLabelType["Computation"] = "computation";
	    // a user defined label
	    ReferenceLineLabelType["Custom"] = "custom";
	})(ReferenceLineLabelType = exports.ReferenceLineLabelType || (exports.ReferenceLineLabelType = {}));
	// how should the line be computed
	var ReferenceLineFormulaType;
	(function (ReferenceLineFormulaType) {
	    // a user specified constant value
	    ReferenceLineFormulaType["Constant"] = "constant";
	    // 
	    ReferenceLineFormulaType["Total"] = "total";
	    // total of all values at the given scope <- is this correct? looks like comment from FormulaTotal
	    ReferenceLineFormulaType["Sum"] = "sum";
	    // minimum value in the scope
	    ReferenceLineFormulaType["Min"] = "min";
	    // maximum value in the scope
	    ReferenceLineFormulaType["Max"] = "max";
	    // average value in the scope
	    ReferenceLineFormulaType["Average"] = "average";
	    // median value in the scope
	    ReferenceLineFormulaType["Median"] = "median";
	    // the n quantiles values in the scope
	    ReferenceLineFormulaType["Quantiles"] = "quantiles";
	    // a given percentile in the scope
	    ReferenceLineFormulaType["Percentile"] = "percentile";
	    // mean +- standard deviation
	    ReferenceLineFormulaType["StandardDeviation"] = "standard-deviation";
	    // a given confidence interval around the mean
	    ReferenceLineFormulaType["ConfidenceInterval"] = "confidence-interval";
	    // 
	    ReferenceLineFormulaType["MedianConfidenceInterval"] = "median-confidence-interval";
	})(ReferenceLineFormulaType = exports.ReferenceLineFormulaType || (exports.ReferenceLineFormulaType = {}));
	// Line or confidence interval or both
	var ReferenceLineConfidenceIntervalState;
	(function (ReferenceLineConfidenceIntervalState) {
	    // display line only
	    ReferenceLineConfidenceIntervalState["LineOnly"] = "line-only";
	    // display the line and a confidence interval
	    ReferenceLineConfidenceIntervalState["LineAndConfidenceInterval"] = "line-and-interval";
	    // display confidence interval only
	    ReferenceLineConfidenceIntervalState["ConfidenceIntervalOnly"] = "interval-only";
	})(ReferenceLineConfidenceIntervalState = exports.ReferenceLineConfidenceIntervalState || (exports.ReferenceLineConfidenceIntervalState = {}));
	// type of distribution. i.e. Percentage, Percentile, Quantile, and Standard Deviation
	var ReferenceLineDistributionType;
	(function (ReferenceLineDistributionType) {
	    // distribution type percentage
	    ReferenceLineDistributionType["Percentages"] = "percentages";
	    // distribution type percentile
	    ReferenceLineDistributionType["Percentiles"] = "percentiles";
	    // distribution type quantile
	    ReferenceLineDistributionType["Quantiles"] = "quantiles";
	    // distribution type standard deviation
	    ReferenceLineDistributionType["StandardDeviation"] = "standard-deviation";
	})(ReferenceLineDistributionType = exports.ReferenceLineDistributionType || (exports.ReferenceLineDistributionType = {}));
	// the kind of LOD calc to use for a given reference line
	var ReferenceLineLODCalcType;
	(function (ReferenceLineLODCalcType) {
	    // Create a formula using a FIXED-like level-of-detail calculation, to which sheet filters apply, that will go onto a specific sheet
	    ReferenceLineLODCalcType["MeasureFormula"] = "measure-formula";
	    // Create a boolean formula that can be used as a filter
	    ReferenceLineLODCalcType["BooleanFilter"] = "boolean-filter";
	})(ReferenceLineLODCalcType = exports.ReferenceLineLODCalcType || (exports.ReferenceLineLODCalcType = {}));
	// 
	var BoxplotWhiskerType;
	(function (BoxplotWhiskerType) {
	    // 
	    BoxplotWhiskerType["Standard"] = "standard";
	    // 
	    BoxplotWhiskerType["Minmax"] = "minmax";
	})(BoxplotWhiskerType = exports.BoxplotWhiskerType || (exports.BoxplotWhiskerType = {}));
	// categories of connection types displayed by the connection UI
	var ConnectionTypeCategory;
	(function (ConnectionTypeCategory) {
	    // standard database
	    ConnectionTypeCategory["CTC_Database"] = "database";
	    // 'More Items ...' meta item
	    ConnectionTypeCategory["CTC_More"] = "more";
	    // Other file types
	    ConnectionTypeCategory["CTC_Other"] = "other";
	    // invalid connection category
	    ConnectionTypeCategory["CTC_Invalid"] = "invalid";
	})(ConnectionTypeCategory = exports.ConnectionTypeCategory || (exports.ConnectionTypeCategory = {}));
	// a logical grouping of connection types displayed by the connection UI
	var ConnectionTypeGroup;
	(function (ConnectionTypeGroup) {
	    // in a file
	    ConnectionTypeGroup["CTG_File"] = "file";
	    // on a server
	    ConnectionTypeGroup["CTG_Server"] = "server";
	    // on a recent server
	    ConnectionTypeGroup["CTG_MruServer"] = "mru-server";
	    // invalid group
	    ConnectionTypeGroup["CTG_Invalid"] = "invalid";
	})(ConnectionTypeGroup = exports.ConnectionTypeGroup || (exports.ConnectionTypeGroup = {}));
	// The type of metadata a column contains
	var CubeMetadataCategory;
	(function (CubeMetadataCategory) {
	    // cube's name
	    CubeMetadataCategory["CMC_Name"] = "name";
	    // cube's description
	    CubeMetadataCategory["CMC_Description"] = "description";
	    // cube's last updated timestamp
	    CubeMetadataCategory["CMC_LastUpdated"] = "last-updated";
	    // invalid
	    CubeMetadataCategory["CMC_Invalid"] = "invalid";
	})(CubeMetadataCategory = exports.CubeMetadataCategory || (exports.CubeMetadataCategory = {}));
	// The type of widget to display to the user when they are specifying connection info
	var ConnectionWidgetType;
	(function (ConnectionWidgetType) {
	    // show the join area
	    ConnectionWidgetType["CWT_JoinArea"] = "join-area";
	    // show the cube selection ui
	    ConnectionWidgetType["CWT_CubeSelection"] = "cube-selection";
	    // show the google analytics ui
	    ConnectionWidgetType["CWT_GoogleAnalytics"] = "google-analytics";
	    // show the tableau server ui
	    ConnectionWidgetType["CWT_TableauServer"] = "tableau-server";
	    // do not show any connection widget
	    ConnectionWidgetType["CWT_NoWidget"] = "no-widget";
	    // invalid
	    ConnectionWidgetType["CWT_Invalid"] = "invalid";
	})(ConnectionWidgetType = exports.ConnectionWidgetType || (exports.ConnectionWidgetType = {}));
	// The type of google analytics basic info
	var GoogleBasicInfoType;
	(function (GoogleBasicInfoType) {
	    // google analytics account
	    GoogleBasicInfoType["GA_Account"] = "ga-account";
	    // google analytics property
	    GoogleBasicInfoType["GA_Property"] = "ga-property";
	    // google analytics view
	    GoogleBasicInfoType["GA_View"] = "ga-view";
	    // invalid
	    GoogleBasicInfoType["GA_Invalid"] = "invalid";
	})(GoogleBasicInfoType = exports.GoogleBasicInfoType || (exports.GoogleBasicInfoType = {}));
	// The way in which a piece of connection information is specified
	var ConnectionSpecificationType;
	(function (ConnectionSpecificationType) {
	    // Uses a combo box
	    ConnectionSpecificationType["CST_ComboBox"] = "combo-box";
	    // Uses a line edit
	    ConnectionSpecificationType["CST_LineEdit"] = "line-edit";
	    // Uses a line edit with a browse button next to it
	    ConnectionSpecificationType["CST_LineEditBrowse"] = "line-edit-browse";
	    // invalid
	    ConnectionSpecificationType["CST_Invalid"] = "invalid";
	})(ConnectionSpecificationType = exports.ConnectionSpecificationType || (exports.ConnectionSpecificationType = {}));
	// GA Date Range
	var DateRange;
	(function (DateRange) {
	    // 
	    DateRange["DateRangeFirst"] = "date-range-first";
	    // 
	    DateRange["DateRangeLast30Days"] = "date-range-last30";
	    // 
	    DateRange["DateRangeToday"] = "date-range-today";
	    // 
	    DateRange["DateRangeYesterday"] = "date-range-yesterday";
	    // 
	    DateRange["DateRangeLastWeek"] = "date-range-last-week";
	    // 
	    DateRange["DateRangeLastMonth"] = "date-range-last-month";
	    // 
	    DateRange["DateRangeLastYear"] = "date-range-last-year";
	    // 
	    DateRange["DateRangeThisWeekToYesterday"] = "date-range-this-week-to-yesterday";
	    // 
	    DateRange["DateRangeThisMonthToYesterday"] = "date-range-this-month-to-yesterday";
	    // 
	    DateRange["DateRangeThisYearToYesterday"] = "date-range-this-year-to-yesterday";
	    // 
	    DateRange["DateRangeLastWeekToYesterday"] = "date-range-last-week-to-yesterday";
	    // 
	    DateRange["DateRangeLastMonthToYesterday"] = "date-range-last-month-to-yesterday";
	    // 
	    DateRange["DateRangeLastYearToYesterday"] = "date-range-last-year-to-yesterday";
	    // 
	    DateRange["DateRangeFixedRange"] = "date-range-fixed-range";
	    // 
	    DateRange["DateRangeFixedStart"] = "date-range-fixed-start";
	    // 
	    DateRange["DateRangeCount"] = "date-range-count";
	})(DateRange = exports.DateRange || (exports.DateRange = {}));
	// Specifies the type of widget to show in ConnectServerWidget
	var ConnectServerWidgetType;
	(function (ConnectServerWidgetType) {
	    // invalid
	    ConnectServerWidgetType["CSWT_Invalid"] = "invalid";
	    // microsoft access
	    ConnectServerWidgetType["CSWT_Access"] = "access";
	    // generic odbc
	    ConnectServerWidgetType["CSWT_ODBC"] = "odbc";
	    // cubes
	    ConnectServerWidgetType["CSWT_Cube"] = "cube";
	    // relational data sources
	    ConnectServerWidgetType["CSWT_Relational"] = "relational";
	    // drill data source
	    ConnectServerWidgetType["CSWT_Drill"] = "drill";
	})(ConnectServerWidgetType = exports.ConnectServerWidgetType || (exports.ConnectServerWidgetType = {}));
	// 
	var AuthenticationEnumsMode;
	(function (AuthenticationEnumsMode) {
	    // no authentication widget
	    AuthenticationEnumsMode["AuthModeNone"] = "auth-mode-none";
	    // username and password
	    AuthenticationEnumsMode["AuthModeBasic"] = "auth-mode-basic";
	    // username and password can be blank
	    AuthenticationEnumsMode["AuthModeBasicNoValidateFields"] = "auth-mode-basic-no-validate-fields";
	    // only username
	    AuthenticationEnumsMode["AuthModeBasicUserNameOnly"] = "auth-mode-basic-username-only";
	    // aws access key and secret ID
	    AuthenticationEnumsMode["AuthModeBasicAWS"] = "auth-mode-basic-aws";
	    // username, password, and a list of AuthOptions with radio buttons
	    AuthenticationEnumsMode["AuthModeRadio"] = "auth-mode-radio";
	    // Like AuthModeRadio, but enable username/password even for integrated auth
	    AuthenticationEnumsMode["AuthModeRadioUnindented"] = "auth-mode-radio-unindented";
	    // username, password, and a list of AuthOptions with a combobox
	    AuthenticationEnumsMode["AuthModeComboBox"] = "auth-mode-combobox";
	    // Like AuthModeCombobox, but with option not requiring username/password
	    AuthenticationEnumsMode["AuthModeComboBoxIntegrated"] = "auth-mode-combobox-integrated";
	    // driver, authentication, username, realm, etc
	    AuthenticationEnumsMode["AuthModeHive"] = "auth-mode-hive";
	    // none, azure marketplace account, explicit
	    AuthenticationEnumsMode["AuthModeOData"] = "auth-mode-odata";
	    // edition, authentication, sso domain, etc
	    AuthenticationEnumsMode["AuthModeSharePoint"] = "auth-mode-sharepoint";
	    // username, password, client, & language
	    AuthenticationEnumsMode["AuthModeSAPBW"] = "auth-mode-sapbw";
	    // Ability to switch between two different auth modes each in their own modal dialogs (basic and oauth)
	    AuthenticationEnumsMode["AuthModeSwitchModal"] = "auth-mode-switch-modal";
	})(AuthenticationEnumsMode = exports.AuthenticationEnumsMode || (exports.AuthenticationEnumsMode = {}));
	// 
	var AuthenticationEnumsReconnectMode;
	(function (AuthenticationEnumsReconnectMode) {
	    // Auth not needed for reconnect
	    AuthenticationEnumsReconnectMode["ReconnectModeNone"] = "reconnect-mode-none";
	    // Username and password
	    AuthenticationEnumsReconnectMode["ReconnectModeBasic"] = "reconnect-mode-basic";
	    // Access file
	    AuthenticationEnumsReconnectMode["ReconnectModeAccess"] = "reconnect-mode-access";
	    // Microsoft Azure Data Market (OData)
	    AuthenticationEnumsReconnectMode["ReconnectModeDataMarket"] = "reconnect-mode-data-market";
	    // Google OAuth
	    AuthenticationEnumsReconnectMode["ReconnectModeGoogleOAuth"] = "reconnect-mode-google-oauth";
	    // SalesforceOAuth, with the option of username/password auth
	    AuthenticationEnumsReconnectMode["ReconnectModeSalesforceOAuth"] = "reconnect-mode-salesforce-oauth";
	    // Web data connector
	    AuthenticationEnumsReconnectMode["ReconnectModeWebData"] = "reconnect-mode-web-data";
	})(AuthenticationEnumsReconnectMode = exports.AuthenticationEnumsReconnectMode || (exports.AuthenticationEnumsReconnectMode = {}));
	// 
	var AuthenticationEnumsAuthOption;
	(function (AuthenticationEnumsAuthOption) {
	    // FIRST
	    AuthenticationEnumsAuthOption["AuthExplicit"] = "auth-option-explicit";
	    // 
	    AuthenticationEnumsAuthOption["AuthExplicitUnindented"] = "auth-option-explicit-unindented";
	    // 
	    AuthenticationEnumsAuthOption["AuthUseWindows"] = "auth-option-use-windows";
	    // 
	    AuthenticationEnumsAuthOption["AuthUseWindowsPreferred"] = "auth-option-windows-preferred";
	    // 
	    AuthenticationEnumsAuthOption["AuthTeradata"] = "auth-option-teradata";
	    // 
	    AuthenticationEnumsAuthOption["AuthLDAP"] = "auth-option-ldap";
	    // 
	    AuthenticationEnumsAuthOption["AuthVirtualNode"] = "auth-option-virtual-node";
	    // 
	    AuthenticationEnumsAuthOption["AuthODataAccount"] = "auth-option-odata";
	    // 
	    AuthenticationEnumsAuthOption["AuthNone"] = "auth-option-none";
	    // 
	    AuthenticationEnumsAuthOption["AuthKerberos"] = "auth-option-kerberos";
	    // Introduced for Kerberos with fallback, recognizing that the db may or may not be on Windows
	    AuthenticationEnumsAuthOption["AuthIntegrated"] = "auth-option-integrated";
	    // 
	    AuthenticationEnumsAuthOption["AuthUsername"] = "auth-option-username";
	    // 
	    AuthenticationEnumsAuthOption["AuthUsernameAndPassword"] = "auth-option-username-and-password";
	    // 
	    AuthenticationEnumsAuthOption["AuthSSL"] = "auth-option-ssl";
	    // 
	    AuthenticationEnumsAuthOption["AuthHDIEmulator"] = "auth-hdi-emulator";
	    // 
	    AuthenticationEnumsAuthOption["AuthHDIService"] = "auth-hdi-service";
	    // 
	    AuthenticationEnumsAuthOption["AuthHTTP"] = "auth-http";
	    // 
	    AuthenticationEnumsAuthOption["AuthHTTPS"] = "auth-https";
	    // 
	    AuthenticationEnumsAuthOption["AuthAccessNoSecurity"] = "auth-option-access-no";
	    // 
	    AuthenticationEnumsAuthOption["AuthAccessYesSecurity"] = "auth-option-access-yes";
	    // 
	    AuthenticationEnumsAuthOption["AuthOAuth"] = "auth-oauth";
	    // 
	    AuthenticationEnumsAuthOption["AuthForms"] = "auth-forms";
	    // 
	    AuthenticationEnumsAuthOption["AuthThirdPartySSO"] = "auth-third-party-SSO";
	    // LAST
	    AuthenticationEnumsAuthOption["AuthInvalid"] = "auth-option-invalid";
	})(AuthenticationEnumsAuthOption = exports.AuthenticationEnumsAuthOption || (exports.AuthenticationEnumsAuthOption = {}));
	// data source validation modes
	var DataSourceParserValidationMode;
	(function (DataSourceParserValidationMode) {
	    // 
	    DataSourceParserValidationMode["WorkbookLoadValidation"] = "workbook-load-validation";
	    // 
	    DataSourceParserValidationMode["AutoValidation"] = "auto-validation";
	    // 
	    DataSourceParserValidationMode["ForceValidation"] = "force-validation";
	    // 
	    DataSourceParserValidationMode["PreventValidation"] = "prevent-validation";
	    // 
	    DataSourceParserValidationMode["PreventValidationAndThrow"] = "prevent-validation-and-throw";
	})(DataSourceParserValidationMode = exports.DataSourceParserValidationMode || (exports.DataSourceParserValidationMode = {}));
	// Enum for DataGrid/MetadataGrid fields reordering
	var FieldOrderType;
	(function (FieldOrderType) {
	    // 
	    FieldOrderType["DATASOURCE_ORDER"] = "datasource-order";
	    // 
	    FieldOrderType["ALPHA_PER_TABLE"] = "alpha-per-table";
	    // 
	    FieldOrderType["ALPHABETICAL_ORDER"] = "alphabetical-order";
	    // 
	    FieldOrderType["CUSTOM_ORDER"] = "custom-order";
	})(FieldOrderType = exports.FieldOrderType || (exports.FieldOrderType = {}));
	// 
	var LineInterpolationMode;
	(function (LineInterpolationMode) {
	    // 
	    LineInterpolationMode["LIM_Linear"] = "lim-linear";
	    // 
	    LineInterpolationMode["LIM_Step"] = "lim-step";
	    // 
	    LineInterpolationMode["LIM_Jump"] = "lim-jump";
	})(LineInterpolationMode = exports.LineInterpolationMode || (exports.LineInterpolationMode = {}));
	// 
	var LineMarkerPosition;
	(function (LineMarkerPosition) {
	    // 
	    LineMarkerPosition["LMP_Left"] = "lmp-left";
	    // 
	    LineMarkerPosition["LMP_Center"] = "lmp-center";
	    // 
	    LineMarkerPosition["LMP_Right"] = "lmp-right";
	})(LineMarkerPosition = exports.LineMarkerPosition || (exports.LineMarkerPosition = {}));
	// Enumeration for the type of join connecting two tables
	var SQLJoinType;
	(function (SQLJoinType) {
	    // 
	    SQLJoinType["SQL_InnerJoin"] = "sql-inner-join";
	    // 
	    SQLJoinType["SQL_LeftJoin"] = "sql-left-join";
	    // 
	    SQLJoinType["SQL_RightJoin"] = "sql-right-join";
	    // 
	    SQLJoinType["SQL_FullJoin"] = "sql-full-join";
	    // 
	    SQLJoinType["SQL_CrossJoin"] = "sql-cross-join";
	})(SQLJoinType = exports.SQLJoinType || (exports.SQLJoinType = {}));
	// 
	var FolderRole;
	(function (FolderRole) {
	    // 
	    FolderRole["FOLDER_DIMENSIONS"] = "dimensions";
	    // 
	    FolderRole["FOLDER_MEASURES"] = "measure";
	    // 
	    FolderRole["FOLDER_GROUPS"] = "groups";
	    // 
	    FolderRole["FOLDER_PARAMETERS"] = "parameters";
	})(FolderRole = exports.FolderRole || (exports.FolderRole = {}));
	// 
	var FieldTypeIconSet;
	(function (FieldTypeIconSet) {
	    // 
	    FieldTypeIconSet["FT_SET_ALL"] = "all";
	    // 
	    FieldTypeIconSet["FT_SET_CUBE_MEASURES"] = "cube-measures";
	    // 
	    FieldTypeIconSet["FT_SET_CUBE_DIMENSIONS"] = "cube-dimensions";
	})(FieldTypeIconSet = exports.FieldTypeIconSet || (exports.FieldTypeIconSet = {}));
	// 
	var FieldPivotStrategy;
	(function (FieldPivotStrategy) {
	    // 
	    FieldPivotStrategy["PIVOT_ON_KEY"] = "pivot-on-key";
	    // 
	    FieldPivotStrategy["PIVOT_ON_ALIAS"] = "pivot-on-alias";
	})(FieldPivotStrategy = exports.FieldPivotStrategy || (exports.FieldPivotStrategy = {}));
	// 
	var AliasType;
	(function (AliasType) {
	    // 
	    AliasType["ALIAS_NOTSET"] = "alias-not-set";
	    // 
	    AliasType["ALIAS_BEGIN"] = "alias-begin";
	    // 
	    AliasType["ALIAS_KEY"] = "alias-key";
	    // 
	    AliasType["ALIAS_KEY_NAME"] = "alias-key-name";
	    // 
	    AliasType["ALIAS_KEY_MEDNAME"] = "alias-key-medname";
	    // 
	    AliasType["ALIAS_KEY_LONGNAME"] = "alias-key-longname";
	    // 
	    AliasType["ALIAS_NAME"] = "alias-name";
	    // 
	    AliasType["ALIAS_NAME_KEY"] = "alias-name-key";
	    // 
	    AliasType["ALIAS_MEDNAME"] = "alias-medname";
	    // 
	    AliasType["ALIAS_MEDNAME_KEY"] = "alias-medname-key";
	    // 
	    AliasType["ALIAS_LONGNAME"] = "alias-longname";
	    // 
	    AliasType["ALIAS_LONGNAME_KEY"] = "alias-longname-key";
	    // 
	    AliasType["ALIAS_END"] = "alias-end";
	})(AliasType = exports.AliasType || (exports.AliasType = {}));
	// 
	var AliasTypes;
	(function (AliasTypes) {
	    // 
	    AliasTypes["MASK_ALIAS_KEY"] = "mask-alias-key";
	    // 
	    AliasTypes["MASK_ALIAS_NAME"] = "mask-alias-name";
	    // 
	    AliasTypes["MASK_ALIAS_MEDNAME"] = "mask-alias-medname";
	    // 
	    AliasTypes["MASK_ALIAS_LONGNAME"] = "mask-alias-longname";
	})(AliasTypes = exports.AliasTypes || (exports.AliasTypes = {}));
	// 
	var FieldRole;
	(function (FieldRole) {
	    // 
	    FieldRole["ROLE_DIMENSION"] = "dimension";
	    // 
	    FieldRole["ROLE_MEASURE"] = "measure";
	    // 
	    FieldRole["ROLE_UNKNOWN"] = "unknown";
	})(FieldRole = exports.FieldRole || (exports.FieldRole = {}));
	// 
	var FieldType;
	(function (FieldType) {
	    // 
	    FieldType["TYPE_QUANTITATIVE"] = "quantitative";
	    // 
	    FieldType["TYPE_ORDINAL"] = "ordinal";
	    // 
	    FieldType["TYPE_NOMINAL"] = "nominal";
	    // 
	    FieldType["TYPE_UNKNOWN"] = "unknown";
	})(FieldType = exports.FieldType || (exports.FieldType = {}));
	// 
	var DataSourceOrder;
	(function (DataSourceOrder) {
	    // 
	    DataSourceOrder["DSO_ALPHABETIC"] = "dso-alphabetic";
	    // 
	    DataSourceOrder["DSO_ORDINAL"] = "dso-ordinal";
	})(DataSourceOrder = exports.DataSourceOrder || (exports.DataSourceOrder = {}));
	// Where the column comes from
	var ColumnClass;
	(function (ColumnClass) {
	    // A metadata column (O or Q Measures)
	    ColumnClass["COL_METADATA"] = "col-metadata";
	    // A physical column on the database
	    ColumnClass["COL_DATABASE"] = "col-database";
	    // A numberic bin (a special kind of calculated column)
	    ColumnClass["COL_NUMERICBIN"] = "col-numericbin";
	    // A Categorical bin (group)
	    ColumnClass["COL_CATEGORICALBIN"] = "col-categoricalbin";
	    // A column instance
	    ColumnClass["COL_INSTANCE"] = "col-instance";
	    // A (raw) mdx calculated column
	    ColumnClass["COL_MDXCALC"] = "col-mdxcalc";
	    // A user-defined calculated column, Tableau expression syntax
	    ColumnClass["COL_USERCALC"] = "col-usercalc";
	    // A column that would have been COL_DATABASE, but the underlying database column does not exist
	    ColumnClass["COL_DANGLING"] = "col-dangling";
	    // A column that contains local supplied data (e.g. Latitude)
	    ColumnClass["COL_LOCALDATA"] = "col-localdata";
	    // A column that contains a visual model attribute (e.g. PaneIndex, Color, ...)
	    ColumnClass["COL_VISUALDATA"] = "col-visualdata";
	    // A column that's a Group (a " Set " in UI terminology)
	    ColumnClass["COL_GROUP"] = "col-group";
	})(ColumnClass = exports.ColumnClass || (exports.ColumnClass = {}));
	// 
	var VTAggType;
	(function (VTAggType) {
	    // 
	    VTAggType["VTAGG_SUM"] = "sum";
	    // 
	    VTAggType["VTAGG_AVG"] = "avg";
	    // 
	    VTAggType["VTAGG_MIN"] = "min";
	    // 
	    VTAggType["VTAGG_MAX"] = "max";
	    // 
	    VTAggType["VTAGG_SERVER"] = "server";
	    // 
	    VTAggType["VTAGG_NONE"] = "none";
	    // 
	    VTAggType["VTAGG_DEFAULT"] = "default";
	})(VTAggType = exports.VTAggType || (exports.VTAggType = {}));
	// 
	var EntityType;
	(function (EntityType) {
	    // 
	    EntityType["NoEnumerationEntity"] = "no-enumeration-entity";
	    // 
	    EntityType["DatabaseEntity"] = "database-entity";
	    // 
	    EntityType["SchemaEntity"] = "schema-entity";
	    // 
	    EntityType["TableEntity"] = "table-entity";
	})(EntityType = exports.EntityType || (exports.EntityType = {}));
	// 
	var PickEntitySearchType;
	(function (PickEntitySearchType) {
	    // 
	    PickEntitySearchType["PickEntitySearchType_StartsWith"] = "starts-with";
	    // 
	    PickEntitySearchType["PickEntitySearchType_Contains"] = "contains";
	    // 
	    PickEntitySearchType["PickEntitySearchType_ExactMatch"] = "exact-match";
	    // 
	    PickEntitySearchType["PickEntitySearchType_DEFAULT"] = "default";
	})(PickEntitySearchType = exports.PickEntitySearchType || (exports.PickEntitySearchType = {}));
	// Parsing methods and structures.
	var ExpressionOp;
	(function (ExpressionOp) {
	    // 
	    ExpressionOp["LogicalOr"] = "op-logical-or";
	    // 
	    ExpressionOp["LogicalAnd"] = "op-logical-and";
	    // 
	    ExpressionOp["LogicalNot"] = "op-logical-not";
	    // 
	    ExpressionOp["BitwiseXOr"] = "op-bitwise-xor";
	    // 
	    ExpressionOp["BitwiseOr"] = "op-bitwise-or";
	    // 
	    ExpressionOp["Equals"] = "op-equals";
	    // 
	    ExpressionOp["Greater"] = "op-greater";
	    // 
	    ExpressionOp["Less"] = "op-less";
	    // 
	    ExpressionOp["GEqual"] = "op-gequal";
	    // 
	    ExpressionOp["LEqual"] = "op-lequal";
	    // 
	    ExpressionOp["NEqual"] = "op-nequal";
	    // 
	    ExpressionOp["Plus"] = "op-plus";
	    // 
	    ExpressionOp["Minus"] = "op-minus";
	    // 
	    ExpressionOp["BitwiseAnd"] = "op-bitwise-and";
	    // 
	    ExpressionOp["Multiply"] = "op-multiply";
	    // 
	    ExpressionOp["Divide"] = "op-divide";
	    // 
	    ExpressionOp["Modulo"] = "op-modulo";
	    // 
	    ExpressionOp["Power"] = "op-power";
	    // 
	    ExpressionOp["Positive"] = "op-positive";
	    // 
	    ExpressionOp["Negative"] = "op-negative";
	    // 
	    ExpressionOp["BitwiseNot"] = "op-bitwise-not";
	    // 
	    ExpressionOp["Column"] = "op-column";
	    // 
	    ExpressionOp["String"] = "op-string";
	    // 
	    ExpressionOp["Number"] = "op-number";
	    // 
	    ExpressionOp["Date"] = "op-date";
	    // 
	    ExpressionOp["Boolean"] = "op-boolean";
	    // 
	    ExpressionOp["Funcall"] = "op-funcall";
	    // 
	    ExpressionOp["LParen"] = "op-lparen";
	    // 
	    ExpressionOp["RParen"] = "op-rparen";
	    // 
	    ExpressionOp["Comma"] = "op-comma";
	    // 
	    ExpressionOp["Ident"] = "op-ident";
	    // 
	    ExpressionOp["Null"] = "op-null";
	    // 
	    ExpressionOp["If"] = "op-if";
	    // 
	    ExpressionOp["Elseif"] = "op-elseif";
	    // 
	    ExpressionOp["Case"] = "op-case";
	    // 
	    ExpressionOp["When"] = "op-when";
	    // 
	    ExpressionOp["Then"] = "op-then";
	    // 
	    ExpressionOp["Else"] = "op-else";
	    // 
	    ExpressionOp["EndExpr"] = "op-endexpr";
	    // 
	    ExpressionOp["Whitespace"] = "op-whitespace";
	    // 
	    ExpressionOp["Comment"] = "op-comment";
	    // 
	    ExpressionOp["LBrace"] = "op-lbrace";
	    // 
	    ExpressionOp["RBrace"] = "op-rbrace";
	    // 
	    ExpressionOp["Colon"] = "op-colon";
	    // 
	    ExpressionOp["Bar"] = "op-bar";
	    // 
	    ExpressionOp["Txtype"] = "op-txtype";
	    // 
	    ExpressionOp["End"] = "op-end";
	    // 
	    ExpressionOp["RBrackets"] = "op-rbrackets";
	    // used to represent invalid tokens
	    ExpressionOp["Invalid"] = "op-invalid";
	})(ExpressionOp = exports.ExpressionOp || (exports.ExpressionOp = {}));
	// tri-state bool
	var TriBool;
	(function (TriBool) {
	    // 
	    TriBool["TB_Invalid"] = "tribool-invalid";
	    // 
	    TriBool["TB_False"] = "tribool-false";
	    // 
	    TriBool["TB_True"] = "tribool-true";
	})(TriBool = exports.TriBool || (exports.TriBool = {}));
	// table calc reference options set
	var ReferenceOptionsSet;
	(function (ReferenceOptionsSet) {
	    // 
	    ReferenceOptionsSet["ROS_Relative"] = "reference-options-set-relative";
	    // 
	    ReferenceOptionsSet["ROS_Fixed"] = "reference-options-set-fixed";
	    // 
	    ReferenceOptionsSet["ROS_Parameter"] = "reference-options-set-parameter";
	    // 
	    ReferenceOptionsSet["ROS_None"] = "reference-options-set-none";
	})(ReferenceOptionsSet = exports.ReferenceOptionsSet || (exports.ReferenceOptionsSet = {}));
	// widget state
	var WidgetState;
	(function (WidgetState) {
	    // 
	    WidgetState["Hidden"] = "widget-state-hidden";
	    // 
	    WidgetState["Disabled"] = "widget-state-disabled";
	    // 
	    WidgetState["Enabled"] = "widget-state-enabled";
	})(WidgetState = exports.WidgetState || (exports.WidgetState = {}));
	// rank type
	var RankType;
	(function (RankType) {
	    // 
	    RankType["Competition"] = "rank-type-competition";
	    // 
	    RankType["ModifiedCompetition"] = "rank-type-modified-competition";
	    // 
	    RankType["Dense"] = "rank-type-dense";
	    // 
	    RankType["Unique"] = "rank-type-unique";
	})(RankType = exports.RankType || (exports.RankType = {}));
	// 
	var TableCalcCommandType;
	(function (TableCalcCommandType) {
	    // 
	    TableCalcCommandType["TableCalcCommandClear"] = "clear";
	})(TableCalcCommandType = exports.TableCalcCommandType || (exports.TableCalcCommandType = {}));
	// 
	var CalcNestingLevel;
	(function (CalcNestingLevel) {
	    // 
	    CalcNestingLevel["Primary"] = "primary";
	    // used only for type != TC_CUSTOM
	    CalcNestingLevel["Secondary"] = "secondary";
	    // used only for type == TC_CUSTOM
	    CalcNestingLevel["Nested"] = "nested";
	})(CalcNestingLevel = exports.CalcNestingLevel || (exports.CalcNestingLevel = {}));
	// 
	var DecimalMode;
	(function (DecimalMode) {
	    // 
	    DecimalMode["DecimalModeAutomatic"] = "automatic";
	    // 
	    DecimalMode["DecimalModeManual"] = "manual";
	})(DecimalMode = exports.DecimalMode || (exports.DecimalMode = {}));
	// 
	var TableCalcOrderingType;
	(function (TableCalcOrderingType) {
	    // Advanced...
	    TableCalcOrderingType["OTField"] = "field";
	    // Table (Across)
	    TableCalcOrderingType["OTRows"] = "rows";
	    // Table (Down)
	    TableCalcOrderingType["OTColumns"] = "columns";
	    // Table (Across then Down)
	    TableCalcOrderingType["OTTable"] = "table";
	    // Table (Down then Across)
	    TableCalcOrderingType["OTTableColumnPrecedence"] = "table-column-precedence";
	    // Pane Across
	    TableCalcOrderingType["OTRowInPane"] = "row-in-pane";
	    // Pane (Down)
	    TableCalcOrderingType["OTColumnInPane"] = "column-in-pane";
	    // Pane (Across then Down)
	    TableCalcOrderingType["OTPane"] = "pane";
	    // Pane (Down then Across)
	    TableCalcOrderingType["OTPaneColumnPrecedence"] = "pane-column-precedence";
	    // Cell
	    TableCalcOrderingType["OTCellInPane"] = "cell-in-pane";
	})(TableCalcOrderingType = exports.TableCalcOrderingType || (exports.TableCalcOrderingType = {}));
	// 
	var TableCalcSortMode;
	(function (TableCalcSortMode) {
	    // 
	    TableCalcSortMode["SM_Automatic"] = "sort-mode-automatic";
	    // 
	    TableCalcSortMode["SM_Custom"] = "sort-mode-custom";
	})(TableCalcSortMode = exports.TableCalcSortMode || (exports.TableCalcSortMode = {}));
	// 
	var TableCalcTableCalcType;
	(function (TableCalcTableCalcType) {
	    // none (used to initialize variables)
	    TableCalcTableCalcType["TC_NONE"] = "none";
	    // Running Total
	    TableCalcTableCalcType["TC_CUMULATIVE"] = "cumulative";
	    // Moving Calculation
	    TableCalcTableCalcType["TC_WINDOW"] = "window";
	    // Difference From
	    TableCalcTableCalcType["TC_DIFF"] = "diff";
	    // Percent Difference From
	    TableCalcTableCalcType["TC_PCTDIFF"] = "pct-diff";
	    // Percent From
	    TableCalcTableCalcType["TC_PCTVALUE"] = "pct-value";
	    // Percent Of Total
	    TableCalcTableCalcType["TC_PCTTOTAL"] = "pct-total";
	    // Rank
	    TableCalcTableCalcType["TC_RANK"] = "rank";
	    // Percentile
	    TableCalcTableCalcType["TC_PCTRANK"] = "pct-rank";
	    // Custom
	    TableCalcTableCalcType["TC_CUSTOM"] = "custom";
	})(TableCalcTableCalcType = exports.TableCalcTableCalcType || (exports.TableCalcTableCalcType = {}));
	// 
	var QuickTableCalcCommandType;
	(function (QuickTableCalcCommandType) {
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandRunTotal"] = "run-total";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandDifference"] = "difference";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandPctDiff"] = "pct-diff";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandPctTotal"] = "pct-total";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandRank"] = "rank";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandPctRank"] = "pct-rank";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandMovingAvg"] = "moving-avg";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandYtd"] = "ytd";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandCgr"] = "cgr";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandYOverY"] = "y-over-y";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandYtdGrowth"] = "ytd-growth";
	    // 
	    QuickTableCalcCommandType["QuickTableCalcCommandCustom"] = "custom";
	})(QuickTableCalcCommandType = exports.QuickTableCalcCommandType || (exports.QuickTableCalcCommandType = {}));
	// 
	var TableCalcAddressCommandType;
	(function (TableCalcAddressCommandType) {
	    // 
	    TableCalcAddressCommandType["TableCalcAddressCommandRel"] = "rel";
	    // 
	    TableCalcAddressCommandType["TableCalcAddressCommandAbs"] = "abs";
	    // 
	    TableCalcAddressCommandType["TableCalcAddressCommandParam"] = "param";
	    // 
	    TableCalcAddressCommandType["TableCalcAddressCommandMore"] = "more";
	})(TableCalcAddressCommandType = exports.TableCalcAddressCommandType || (exports.TableCalcAddressCommandType = {}));
	// relative addressing
	var TableCalcRelativeAddress;
	(function (TableCalcRelativeAddress) {
	    // 
	    TableCalcRelativeAddress["RelAddrFirst"] = "relative-address-first";
	    // 
	    TableCalcRelativeAddress["RelAddrPrevious"] = "relative-address-previous";
	    // 
	    TableCalcRelativeAddress["RelAddrNext"] = "relative-address-next";
	    // 
	    TableCalcRelativeAddress["RelAddrLast"] = "relative-address-last";
	})(TableCalcRelativeAddress = exports.TableCalcRelativeAddress || (exports.TableCalcRelativeAddress = {}));
	// 
	var CategoricalBinItemType;
	(function (CategoricalBinItemType) {
	    // 
	    CategoricalBinItemType["Unbinned"] = "unbinned";
	    // 
	    CategoricalBinItemType["BinMember"] = "categorical-bin-member";
	    // 
	    CategoricalBinItemType["Bin"] = "categorical-bin";
	})(CategoricalBinItemType = exports.CategoricalBinItemType || (exports.CategoricalBinItemType = {}));
	// The class properties
	var CredentialTypePropertiesFlag;
	(function (CredentialTypePropertiesFlag) {
	    // 
	    CredentialTypePropertiesFlag["None"] = "none";
	    // 
	    CredentialTypePropertiesFlag["GenericAuthClass"] = "generic-auth-class";
	    // 
	    CredentialTypePropertiesFlag["ProviderClass"] = "provider-class";
	    // 
	    CredentialTypePropertiesFlag["DataConnectionClass"] = "data-connection-class";
	})(CredentialTypePropertiesFlag = exports.CredentialTypePropertiesFlag || (exports.CredentialTypePropertiesFlag = {}));
	// The connector type
	var ConnectorType;
	(function (ConnectorType) {
	    // 
	    ConnectorType["Invalid"] = "invalid";
	    // 
	    ConnectorType["WebDataConnector"] = "web-data-connector";
	    // 
	    ConnectorType["CloudFileConnector"] = "cloud-file-connector";
	    // 
	    ConnectorType["LegacyConnector"] = "legacy-connector";
	})(ConnectorType = exports.ConnectorType || (exports.ConnectorType = {}));
	// 
	var TablePillIcon;
	(function (TablePillIcon) {
	    // 
	    TablePillIcon["ListItem"] = "list-item";
	    // 
	    TablePillIcon["Sheet"] = "sheet";
	    // 
	    TablePillIcon["FoundTable"] = "found-table";
	    // 
	    TablePillIcon["NamedRange"] = "named-range";
	    // 
	    TablePillIcon["StoredProcedure"] = "stored-procedure";
	})(TablePillIcon = exports.TablePillIcon || (exports.TablePillIcon = {}));
	// 
	var JoinValidationError;
	(function (JoinValidationError) {
	    // 
	    JoinValidationError["JVE_NoError"] = "no-error";
	    // 
	    JoinValidationError["JVE_EmptyClause"] = "empty-clause";
	    // 
	    JoinValidationError["JVE_TypeMismatch"] = "type-mismatch";
	    // 
	    JoinValidationError["JVE_InvalidField"] = "invalid-field";
	    // 
	    JoinValidationError["JVE_BadClause"] = "bad-clause";
	    // 
	    JoinValidationError["JVE_BadInputRelation"] = "bad-input-relation";
	    // 
	    JoinValidationError["JVE_RepeatedFieldReferences"] = "repeated-field-references";
	    // 
	    JoinValidationError["JVE_UnsupportedJoinType"] = "unsupported-join-type";
	    // 
	    JoinValidationError["JVE_InvalidCalculation"] = "invalid-calculation";
	    // 
	    JoinValidationError["JVE_Unknown"] = "unknown";
	})(JoinValidationError = exports.JoinValidationError || (exports.JoinValidationError = {}));
	// 
	var ConnectionTypeEnum;
	(function (ConnectionTypeEnum) {
	    // -d-s is used to force the enum generator to generate DS with capital letters in .cs just like the .cpp
	    ConnectionTypeEnum["InvalidDS"] = "invalid-d-s";
	    // 
	    ConnectionTypeEnum["FileDS"] = "file-d-s";
	    // 
	    ConnectionTypeEnum["ServerDS"] = "server-d-s";
	    // 
	    ConnectionTypeEnum["InternetDS"] = "internet-d-s";
	    // 
	    ConnectionTypeEnum["TableauServerDS"] = "tableau-server-d-s";
	})(ConnectionTypeEnum = exports.ConnectionTypeEnum || (exports.ConnectionTypeEnum = {}));
	// Enumeration of units tick spacing can take
	var TickSpacingUnits;
	(function (TickSpacingUnits) {
	    // 
	    TickSpacingUnits["TickSpacingUnits__NoUnits"] = "no-units";
	    // 
	    TickSpacingUnits["TickSpacingUnits__Years"] = "years";
	    // 
	    TickSpacingUnits["TickSpacingUnits__Quarters"] = "quarters";
	    // 
	    TickSpacingUnits["TickSpacingUnits__Months"] = "months";
	    // 
	    TickSpacingUnits["TickSpacingUnits__Weeks"] = "weeks";
	    // 
	    TickSpacingUnits["TickSpacingUnits__Days"] = "days";
	    // 
	    TickSpacingUnits["TickSpacingUnits__Hours"] = "hours";
	    // 
	    TickSpacingUnits["TickSpacingUnits__Minutes"] = "minutes";
	    // 
	    TickSpacingUnits["TickSpacingUnits__Seconds"] = "seconds";
	})(TickSpacingUnits = exports.TickSpacingUnits || (exports.TickSpacingUnits = {}));
	// Enumeration of whether totals are included in or excluded from the color encoding
	var TotalsInclusion;
	(function (TotalsInclusion) {
	    // Totals included in color encoding
	    TotalsInclusion["IncludeTotals"] = "include-totals";
	    // Totals excluded from color encoding
	    TotalsInclusion["ExcludeTotals"] = "exclude-totals";
	})(TotalsInclusion = exports.TotalsInclusion || (exports.TotalsInclusion = {}));
	// How tick marks are being calculated
	var AxisOptionsTickMarkState;
	(function (AxisOptionsTickMarkState) {
	    // 
	    AxisOptionsTickMarkState["TicksNone"] = "ticks-None";
	    // 
	    AxisOptionsTickMarkState["TicksAutomatic"] = "ticks-automatic";
	    // 
	    AxisOptionsTickMarkState["TicksManual"] = "ticks-manual";
	})(AxisOptionsTickMarkState = exports.AxisOptionsTickMarkState || (exports.AxisOptionsTickMarkState = {}));
	// Setting for type of axis range
	var AxisRangeType;
	(function (AxisRangeType) {
	    // 
	    AxisRangeType["AxisRangeType__AutomaticRange"] = "automatic-range";
	    // 
	    AxisRangeType["AxisRangeType__UniformRange"] = "uniform-range";
	    // 
	    AxisRangeType["AxisRangeType__IndependentRange"] = "independent-range";
	    // 
	    AxisRangeType["AxisRangeType__FixedRange"] = "fixed-range";
	    // 
	    AxisRangeType["AxisRangeType__FixedMin"] = "fixed-min";
	    // 
	    AxisRangeType["AxisRangeType__FixedMax"] = "fixed-max";
	    // 
	    AxisRangeType["AxisRangeType__FixedMinIndependentMax"] = "fixed-min-independent-max";
	    // 
	    AxisRangeType["AxisRangeType__FixedMaxIndependentMin"] = "fixed-max-independent-min";
	    // 
	    AxisRangeType["AxisRangeType__FixedMinUniformMax"] = "fixed-min-uniform-max";
	    // 
	    AxisRangeType["AxisRangeType__FixedMaxUniformMin"] = "fixed-max-uniform-min";
	})(AxisRangeType = exports.AxisRangeType || (exports.AxisRangeType = {}));
	// represents type of widget on the toolbar of rich text editor
	var RichTextEditorWidgetKey;
	(function (RichTextEditorWidgetKey) {
	    // 
	    RichTextEditorWidgetKey["None"] = "none";
	    // 
	    RichTextEditorWidgetKey["FontSize"] = "fontsize";
	    // 
	    RichTextEditorWidgetKey["FontName"] = "fontname";
	    // 
	    RichTextEditorWidgetKey["FontColor"] = "color";
	    // 
	    RichTextEditorWidgetKey["Bold"] = "bold";
	    // 
	    RichTextEditorWidgetKey["Italic"] = "italic";
	    // 
	    RichTextEditorWidgetKey["Underline"] = "underline";
	    // 
	    RichTextEditorWidgetKey["AlignLeft"] = "justifyleft";
	    // 
	    RichTextEditorWidgetKey["AlignCenter"] = "justifycenter";
	    // 
	    RichTextEditorWidgetKey["AlignRight"] = "justifyright";
	    // 
	    RichTextEditorWidgetKey["ClearFormatting"] = "clearformatting";
	    // 
	    RichTextEditorWidgetKey["TableauKeywords"] = "tableaukeywords";
	})(RichTextEditorWidgetKey = exports.RichTextEditorWidgetKey || (exports.RichTextEditorWidgetKey = {}));
	// 
	var CellSizeChange;
	(function (CellSizeChange) {
	    // 
	    CellSizeChange["CSC_Taller"] = "taller";
	    // 
	    CellSizeChange["CSC_Shorter"] = "shorter";
	    // 
	    CellSizeChange["CSC_Wider"] = "wider";
	    // 
	    CellSizeChange["CSC_Narrower"] = "narrower";
	    // 
	    CellSizeChange["CSC_Bigger"] = "bigger";
	    // 
	    CellSizeChange["CSC_Smaller"] = "smaller";
	})(CellSizeChange = exports.CellSizeChange || (exports.CellSizeChange = {}));
	// 
	var CellTypeEnum;
	(function (CellTypeEnum) {
	    // 
	    CellTypeEnum["CLT_Square"] = "square";
	    // 
	    CellTypeEnum["CLT_Text"] = "text";
	})(CellTypeEnum = exports.CellTypeEnum || (exports.CellTypeEnum = {}));
	// represents type of formatting pres model
	var TypeOfFormatItem;
	(function (TypeOfFormatItem) {
	    // 
	    TypeOfFormatItem["FT_FormatItem"] = "formatItem";
	    // 
	    TypeOfFormatItem["FT_FormatContainer"] = "formatContainer";
	    // 
	    TypeOfFormatItem["FT_FormatControl"] = "formatControl";
	})(TypeOfFormatItem = exports.TypeOfFormatItem || (exports.TypeOfFormatItem = {}));
	// represents type of formatting container
	var TypeOfFormatContainer;
	(function (TypeOfFormatContainer) {
	    // 
	    TypeOfFormatContainer["FT_FormatPane"] = "formatPane";
	    // 
	    TypeOfFormatContainer["FT_FormatSection"] = "formatSection";
	    // 
	    TypeOfFormatContainer["FT_CollapsibleSection"] = "collapsibleSection";
	    // 
	    TypeOfFormatContainer["FT_CompositeContainer"] = "compositeContainer";
	    // 
	    TypeOfFormatContainer["FT_UnitContainer"] = "unitContainer";
	    // 
	    TypeOfFormatContainer["FT_Tab"] = "tab";
	    // 
	    TypeOfFormatContainer["FT_TabGroup"] = "tabGroup";
	})(TypeOfFormatContainer = exports.TypeOfFormatContainer || (exports.TypeOfFormatContainer = {}));
	// represents type of formatting control
	var TypeOfFormatControl;
	(function (TypeOfFormatControl) {
	    // 
	    TypeOfFormatControl["FT_None"] = "none";
	    // 
	    TypeOfFormatControl["FT_NumericControl"] = "numeric-control";
	    // 
	    TypeOfFormatControl["FT_TextControl"] = "text-control";
	    // 
	    TypeOfFormatControl["FT_ColorControl"] = "color-control";
	    // 
	    TypeOfFormatControl["FT_SelectorControl"] = "selector-control";
	    // 
	    TypeOfFormatControl["FT_ToggleControl"] = "toggle-control";
	})(TypeOfFormatControl = exports.TypeOfFormatControl || (exports.TypeOfFormatControl = {}));
	// represents type of formatting widget
	var FormatWidgetKey;
	(function (FormatWidgetKey) {
	    // 
	    FormatWidgetKey["FWK_None"] = "none";
	    // 
	    FormatWidgetKey["FWK_FontFamily"] = "fontFamily";
	    // 
	    FormatWidgetKey["FWK_FontSize"] = "fontSize";
	    // 
	    FormatWidgetKey["FWK_ColorSwatch"] = "colorSwatch";
	    // 
	    FormatWidgetKey["FWK_Bold"] = "bold";
	    // 
	    FormatWidgetKey["FWK_Italics"] = "italics";
	    // 
	    FormatWidgetKey["FWK_Underline"] = "underline";
	    // 
	    FormatWidgetKey["FWK_LineVisibility"] = "lineVisibility";
	    // 
	    FormatWidgetKey["FWK_LinePattern"] = "linePattern";
	    // 
	    FormatWidgetKey["FWK_LineSize"] = "lineSize";
	    // 
	    FormatWidgetKey["FWK_NumberType"] = "numericType";
	    // 
	    FormatWidgetKey["FWK_DecimalPlaces"] = "decimalPlaces";
	    // 
	    FormatWidgetKey["FWK_ThousandsSeparator"] = "thousandsSeparator";
	    // 
	    FormatWidgetKey["FWK_NumericUnits"] = "numericUnits";
	})(FormatWidgetKey = exports.FormatWidgetKey || (exports.FormatWidgetKey = {}));
	// represents identifier for each node in format pane
	var FormatNodeIdentifier;
	(function (FormatNodeIdentifier) {
	    // 
	    FormatNodeIdentifier["Format_None_Key"] = "none";
	    // 
	    FormatNodeIdentifier["Format_Workbook_Key"] = "workbook";
	    // 
	    FormatNodeIdentifier["Format_Font_Key"] = "font";
	    // 
	    FormatNodeIdentifier["Format_Color_Key"] = "color";
	    // 
	    FormatNodeIdentifier["Format_Lines_Key"] = "lines";
	    // 
	    FormatNodeIdentifier["Format_FontAll_Key"] = "font-all";
	    // 
	    FormatNodeIdentifier["Format_FontAllControls_Key"] = "font-all-controls";
	    // 
	    FormatNodeIdentifier["Format_FontMore_Key"] = "font-more";
	    // 
	    FormatNodeIdentifier["Format_FontWorksheetTitles_Key"] = "worksheet-titles";
	    // 
	    FormatNodeIdentifier["Format_FontToolTip_Key"] = "font-tooltip";
	    // 
	    FormatNodeIdentifier["Format_FontWorksheet_Key"] = "font-worksheet";
	    // 
	    FormatNodeIdentifier["Format_FontDashTitles_Key"] = "dash-titles";
	    // 
	    FormatNodeIdentifier["Format_FontStoryTitles_Key"] = "story-titles";
	    // 
	    FormatNodeIdentifier["Format_FontTitlesControls_Key"] = "titles-controls";
	    // 
	    FormatNodeIdentifier["Format_FontTooltipControls_Key"] = "tooltip-controls";
	    // 
	    FormatNodeIdentifier["Format_FontWorksheetControls_Key"] = "worksheet-controls";
	    // 
	    FormatNodeIdentifier["Format_LineMore_Key"] = "line-more";
	    // 
	    FormatNodeIdentifier["Format_LineGrid_Key"] = "line-grid";
	    // 
	    FormatNodeIdentifier["Format_LineGridTabs_Key"] = "line-grid-tabs";
	    // 
	    FormatNodeIdentifier["Format_LineZero_Key"] = "line-zero";
	    // 
	    FormatNodeIdentifier["Format_LineZeroTabs_Key"] = "line-zero-tabs";
	    // 
	    FormatNodeIdentifier["Format_LineAxisTick_Key"] = "line-axis-tick";
	    // 
	    FormatNodeIdentifier["Format_LineAxisTickTabs_Key"] = "line-axis-tick-tabs";
	    // 
	    FormatNodeIdentifier["Format_LineAxisRuler_Key"] = "line-axis-ruler";
	    // 
	    FormatNodeIdentifier["Format_LineAxisRulerTabs_Key"] = "line-axis-ruler-tabs";
	    // 
	    FormatNodeIdentifier["Format_LineHeaderDivider_Key"] = "line-header-divider";
	    // 
	    FormatNodeIdentifier["Format_LineHeaderDividerTabs_Key"] = "line-header-divider-tabs";
	    // 
	    FormatNodeIdentifier["Format_LinePaneDivider_Key"] = "line-paneDivider";
	    // 
	    FormatNodeIdentifier["Format_LinePaneDividerTabs_Key"] = "line-paneDivider-tabs";
	    // 
	    FormatNodeIdentifier["Format_LineGridAll_Key"] = "line-grid-all";
	    // 
	    FormatNodeIdentifier["Format_LineGridRow_Key"] = "line-grid-row";
	    // 
	    FormatNodeIdentifier["Format_LineGridColumn_Key"] = "line-grid-column";
	    // 
	    FormatNodeIdentifier["Format_LineZeroAll_Key"] = "line-zero-all";
	    // 
	    FormatNodeIdentifier["Format_LineZeroRow_Key"] = "line-zero-row";
	    // 
	    FormatNodeIdentifier["Format_LineZeroColumn_Key"] = "line-zero-column";
	    // 
	    FormatNodeIdentifier["Format_LineAxisTickAll_Key"] = "line-axis-tick-all";
	    // 
	    FormatNodeIdentifier["Format_LineAxisTickRow_Key"] = "line-axis-tick-row";
	    // 
	    FormatNodeIdentifier["Format_LineAxisTickColumn_Key"] = "line-axis-tick-column";
	    // 
	    FormatNodeIdentifier["Format_LineAxisRulerAll_Key"] = "line-axis-ruler-all";
	    // 
	    FormatNodeIdentifier["Format_LineAxisRulerRow_Key"] = "line-axis-ruler-row";
	    // 
	    FormatNodeIdentifier["Format_LineAxisRulerColumn_Key"] = "line-axis-ruler-column";
	    // 
	    FormatNodeIdentifier["Format_LineReference_Key"] = "line-reference";
	    // 
	    FormatNodeIdentifier["Format_LineDrop_Key"] = "line-drop";
	    // 
	    FormatNodeIdentifier["Format_LineTrend_Key"] = "line-trend";
	    // 
	    FormatNodeIdentifier["Format_LineVisibility_Key"] = "line-visibility";
	    // 
	    FormatNodeIdentifier["Format_LinePattern_Key"] = "line-pattern";
	    // 
	    FormatNodeIdentifier["Format_LineWidth_Key"] = "line-width";
	    // 
	    FormatNodeIdentifier["Format_LineColor_Key"] = "line-color";
	    // 
	    FormatNodeIdentifier["Format_TickColor_Key"] = "tick-color";
	    // 
	    FormatNodeIdentifier["Format_BorderPattern_Key"] = "border-pattern";
	    // 
	    FormatNodeIdentifier["Format_BorderColor_Key"] = "border-color";
	    // 
	    FormatNodeIdentifier["Format_DividerColor_Key"] = "divider-color";
	    // 
	    FormatNodeIdentifier["Format_FontFamily_Key"] = "font-family-key";
	    // 
	    FormatNodeIdentifier["Format_FontSize_Key"] = "font-size-key";
	    // 
	    FormatNodeIdentifier["Format_Bold_Key"] = "bold-key";
	    // 
	    FormatNodeIdentifier["Format_Italics_Key"] = "italics-key";
	    // 
	    FormatNodeIdentifier["Format_Underline_Key"] = "underline-key";
	    // 
	    FormatNodeIdentifier["Format_FontColor_Key"] = "font-color-key";
	    // 
	    FormatNodeIdentifier["Format_Number_Container_Key"] = "number-container";
	    // 
	    FormatNodeIdentifier["Format_Number_Type_Key"] = "number-container-type";
	    // 
	    FormatNodeIdentifier["Format_Number_Units_Key"] = "number-container-units";
	    // 
	    FormatNodeIdentifier["Format_Number_Decimal_Key"] = "number-container-decimal";
	    // 
	    FormatNodeIdentifier["Format_Number_Thousands_Separator_Key"] = "number-container-thousands-separator";
	    // 
	    FormatNodeIdentifier["Format_FontPickerMinimal_Key"] = "font-picker-minimal";
	    // 
	    FormatNodeIdentifier["Format_FontPickerDefault_Key"] = "font-picker-default";
	    // 
	    FormatNodeIdentifier["Format_LinePickerDefault_Key"] = "line-picker-default";
	    // 
	    FormatNodeIdentifier["Format_LinePickerNoVis_Key"] = "line-picker-no-visibility";
	    // 
	    FormatNodeIdentifier["Format_LineAxisTickPicker_Key"] = "line-axis-tick-picker";
	})(FormatNodeIdentifier = exports.FormatNodeIdentifier || (exports.FormatNodeIdentifier = {}));
	// Format prepended to format strings to specify type
	var FormatCode;
	(function (FormatCode) {
	    // 
	    FormatCode["AutoFormat"] = "auto-format";
	    // 
	    FormatCode["SystemLongDate"] = "system-long-date";
	    // 
	    FormatCode["SystemShortDate"] = "system-short-date";
	    // 
	    FormatCode["SystemNumber"] = "system-number";
	    // 
	    FormatCode["SystemCurrency"] = "system-currency";
	    // 
	    FormatCode["SystemTime"] = "system-time";
	    // 
	    FormatCode["Custom"] = "custom";
	    // 
	    FormatCode["CustomICU"] = "custom-icu";
	    // 
	    FormatCode["CustomNumber"] = "custom-number";
	    // 
	    FormatCode["CustomCurrency"] = "custom-currency";
	    // 
	    FormatCode["CustomScientific"] = "custom-scientific";
	    // 
	    FormatCode["CustomPercentage"] = "custom-percentage";
	})(FormatCode = exports.FormatCode || (exports.FormatCode = {}));
	// Units specified in a format string
	var UnitsFormatEnum;
	(function (UnitsFormatEnum) {
	    // 
	    UnitsFormatEnum["UnitsFmtNone"] = "units-none";
	    // 
	    UnitsFormatEnum["UnitsFmtThousands"] = "units-thousands";
	    // 
	    UnitsFormatEnum["UnitsFmtMillions"] = "units-millions";
	    // 
	    UnitsFormatEnum["UnitsFmtBillionsEnglish"] = "units-billions-english";
	    // 
	    UnitsFormatEnum["UnitsFmtBillionsStandard"] = "units-billions-standard";
	})(UnitsFormatEnum = exports.UnitsFormatEnum || (exports.UnitsFormatEnum = {}));
	// represents the color swatch that will be used in the ColorControlPresModel
	var ColorSwatchType;
	(function (ColorSwatchType) {
	    // 
	    ColorSwatchType["CST_Dark"] = "dark-swatch";
	    // 
	    ColorSwatchType["CST_Light"] = "light-swatch";
	})(ColorSwatchType = exports.ColorSwatchType || (exports.ColorSwatchType = {}));
	// represents the type of a style picker, affecting the preview rendering and, possibly, the layout
	var PickerType;
	(function (PickerType) {
	    // 
	    PickerType["PT_None"] = "none";
	    // 
	    PickerType["PT_Font"] = "font";
	    // 
	    PickerType["PT_Line"] = "line";
	    // 
	    PickerType["PT_Number"] = "number";
	})(PickerType = exports.PickerType || (exports.PickerType = {}));
	// 
	var UpdateScope;
	(function (UpdateScope) {
	    // 
	    UpdateScope["US_Worksheet"] = "worksheet";
	    // 
	    UpdateScope["US_Dashboard"] = "dashboard";
	    // 
	    UpdateScope["US_QuickFilters"] = "quick-filters";
	    // 
	    UpdateScope["US_Story"] = "story";
	})(UpdateScope = exports.UpdateScope || (exports.UpdateScope = {}));
	// 
	var ParameterCtrlTypesDisplayMode;
	(function (ParameterCtrlTypesDisplayMode) {
	    // 
	    ParameterCtrlTypesDisplayMode["MODE_TYPE_IN"] = "type_in";
	    // 
	    ParameterCtrlTypesDisplayMode["MODE_COMPACT_LIST"] = "compact";
	    // 
	    ParameterCtrlTypesDisplayMode["MODE_LIST"] = "list";
	    // 
	    ParameterCtrlTypesDisplayMode["MODE_SLIDER"] = "slider";
	    // 
	    ParameterCtrlTypesDisplayMode["MODE_DATETIME"] = "datetime";
	})(ParameterCtrlTypesDisplayMode = exports.ParameterCtrlTypesDisplayMode || (exports.ParameterCtrlTypesDisplayMode = {}));
	// flags for display options
	var ParameterCtrlTypesDisplayFlag;
	(function (ParameterCtrlTypesDisplayFlag) {
	    // 
	    ParameterCtrlTypesDisplayFlag["DISPLAY_CUSTOM_TITLE"] = "custom_title";
	    // 
	    ParameterCtrlTypesDisplayFlag["DISPLAY_HIDE_SLIDER_SLIDER"] = "hide_slider_slider";
	    // 
	    ParameterCtrlTypesDisplayFlag["DISPLAY_HIDE_SLIDER_READOUT"] = "hide_slider_readout";
	    // 
	    ParameterCtrlTypesDisplayFlag["DISPLAY_HIDE_SLIDER_BUTTONS"] = "hide_slider_buttons";
	})(ParameterCtrlTypesDisplayFlag = exports.ParameterCtrlTypesDisplayFlag || (exports.ParameterCtrlTypesDisplayFlag = {}));
	// The follow supports 1024 custom palettes, each with 4m shapes. Encoding is palette &lt;&lt; PaletteShift | shape.
	var ShapeEncodeConstants;
	(function (ShapeEncodeConstants) {
	    // Shift value for palette
	    ShapeEncodeConstants["EncodePaletteShift"] = "paletteShift";
	    // Mask for getting palette from encoded value. (Then shift down)
	    ShapeEncodeConstants["EncodePaletteMask"] = "paletteMask";
	    // Mask for getting shape from encoded value
	    ShapeEncodeConstants["EncodeShapeMask"] = "shapeMask";
	})(ShapeEncodeConstants = exports.ShapeEncodeConstants || (exports.ShapeEncodeConstants = {}));
	// 
	var ShapeType;
	(function (ShapeType) {
	    // 
	    ShapeType["ShapeCircle"] = "circle";
	    // 
	    ShapeType["ShapeSquare"] = "square";
	    // 
	    ShapeType["ShapePlus"] = "plus";
	    // 
	    ShapeType["ShapeTimes"] = "times";
	    // 
	    ShapeType["ShapeAsterisk"] = "asterisk";
	    // 
	    ShapeType["ShapeDiamond"] = "diamond";
	    // 
	    ShapeType["ShapeTriangle"] = "triangle";
	    // 
	    ShapeType["ShapeDownTriangle"] = "down-triangle";
	    // 
	    ShapeType["ShapeLeftTriangle"] = "left-triangle";
	    // 
	    ShapeType["ShapeRightTriangle"] = "right-triangle";
	    // 
	    ShapeType["MaxAllShapes"] = "invalid";
	})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));
	// 
	var ShapePalette;
	(function (ShapePalette) {
	    // built-in palette
	    ShapePalette["ShapePaletteFilled"] = "filled";
	    // custom palettes
	    ShapePalette["ShapePaletteCustom1"] = "custom1";
	    // 
	    ShapePalette["ShapePaletteCustom2"] = "custom2";
	    // 
	    ShapePalette["ShapePaletteCustom3"] = "custom3";
	    // 
	    ShapePalette["ShapePaletteCustom4"] = "custom4";
	    // 
	    ShapePalette["ShapePaletteCustom5"] = "custom5";
	    // 
	    ShapePalette["ShapePaletteCustom6"] = "custom6";
	    // 
	    ShapePalette["ShapePaletteCustom7"] = "custom7";
	    // 
	    ShapePalette["ShapePaletteCustom8"] = "custom8";
	    // 
	    ShapePalette["ShapePaletteCustom9"] = "custom9";
	    // 
	    ShapePalette["ShapePaletteCustom10"] = "custom10";
	    // 
	    ShapePalette["ShapePaletteCustom11"] = "custom11";
	    // and so on...
	    ShapePalette["ShapePaletteCustom12"] = "custom12";
	    // 
	    ShapePalette["ShapePaletteHidden"] = "hidden";
	})(ShapePalette = exports.ShapePalette || (exports.ShapePalette = {}));
	// ShapeType and palette mapped into a single value. This enum depends on ShapeType and the implementation of ShapeManager::IntEncode.
	var ShapeID;
	(function (ShapeID) {
	    // 
	    ShapeID["ShapeIDCircle"] = "shapeIDCircle";
	    // 
	    ShapeID["ShapeIDSquare"] = "shapeIDSquare";
	    // 
	    ShapeID["ShapeIDPlus"] = "shapeIDPlus";
	    // 
	    ShapeID["ShapeIDTimes"] = "shapeIDTimes";
	    // 
	    ShapeID["ShapeIDAsterisk"] = "shapeIDAsterisk";
	    // 
	    ShapeID["ShapeIDDiamond"] = "shapeIDDiamond";
	    // 
	    ShapeID["ShapeIDTriangle"] = "shapeIDTriangle";
	    // 
	    ShapeID["ShapeIDDownTriangle"] = "shapeIDDownTriangle";
	    // 
	    ShapeID["ShapeIDLeftTriangle"] = "shapeIDLeftTriangle";
	    // 
	    ShapeID["ShapeIDRightTriangle"] = "shapeIDRightTriangle";
	    // 
	    ShapeID["ShapeIDFilledCircle"] = "shapeIDFilledCircle";
	    // 
	    ShapeID["ShapeIDFilledSquare"] = "shapeIDFilledSquare";
	    // 
	    ShapeID["ShapeIDFilledPlus"] = "shapeIDFilledPlus";
	    // 
	    ShapeID["ShapeIDFilledTimes"] = "shapeIDFilledTimes";
	    // 
	    ShapeID["ShapeIDFilledStar"] = "shapeIDFilledStar";
	    // 
	    ShapeID["ShapeIDFilledDiamond"] = "shapeIDFilledDiamond";
	    // 
	    ShapeID["ShapeIDFilledTriangle"] = "shapeIDFilledTriangle";
	    // 
	    ShapeID["ShapeIDFilledDownTriangle"] = "shapeIDFilledDownTriangle";
	    // 
	    ShapeID["ShapeIDFilledLeftTriangle"] = "shapeIDFilledLeftTriangle";
	    // 
	    ShapeID["ShapeIDFilledRightTriangle"] = "shapeIDFilledRightTriangle";
	    // 0+(ShapePaletteHidden<<EncodePaletteShift)
	    ShapeID["ShapeIDUnscaledFilledCircle"] = "shapeIDUnscaledFilledCircle";
	})(ShapeID = exports.ShapeID || (exports.ShapeID = {}));
	// 
	var LegendTypeEnum;
	(function (LegendTypeEnum) {
	    // 
	    LegendTypeEnum["Color"] = "color";
	    // 
	    LegendTypeEnum["Shape"] = "shape";
	    // 
	    LegendTypeEnum["Size"] = "size";
	    // 
	    LegendTypeEnum["HighlightLegend"] = "highlight";
	    // 
	    LegendTypeEnum["Map"] = "map";
	})(LegendTypeEnum = exports.LegendTypeEnum || (exports.LegendTypeEnum = {}));
	// 
	var BrushSpecialFields;
	(function (BrushSpecialFields) {
	    // 
	    BrushSpecialFields["BSF_Invalid"] = "invalid";
	    // 
	    BrushSpecialFields["BSF_AllFields"] = "all";
	    // 
	    BrushSpecialFields["BSF_DatesAndTimes"] = "date-time";
	    // 
	    BrushSpecialFields["BSF_Trails"] = "trails";
	    // 
	    BrushSpecialFields["BSF_EntireTable"] = "table";
	})(BrushSpecialFields = exports.BrushSpecialFields || (exports.BrushSpecialFields = {}));
	// what kind of curve will be fit to the data given response variable Y and a single quantitative factor X
	var TrendLineFitType;
	(function (TrendLineFitType) {
	    // equation = Y ~ X + 1
	    TrendLineFitType["TrendLineFitType__LinearFit"] = "linear";
	    // equation = Y ~ X^2 + X + 1
	    TrendLineFitType["TrendLineFitType__PolynomialFit"] = "polynomial";
	    // equation = Y ~ log(X)
	    TrendLineFitType["TrendLineFitType__LogFit"] = "log";
	    // equation = Y ~ exp(X)
	    TrendLineFitType["TrendLineFitType__ExpFit"] = "exp";
	    // equation = Y ~ X^b
	    TrendLineFitType["TrendLineFitType__PowerFit"] = "power";
	})(TrendLineFitType = exports.TrendLineFitType || (exports.TrendLineFitType = {}));
	// type for components of a command presentation model
	var CommandsEnumItemType;
	(function (CommandsEnumItemType) {
	    // item with text and an associated command
	    CommandsEnumItemType["Item"] = "item";
	    // dynamic range of items generated by an associated command
	    CommandsEnumItemType["ItemRange"] = "range";
	    // list of subcommands
	    CommandsEnumItemType["SubCommandsItem"] = "subcommands";
	    // logical separation between groups of commands
	    CommandsEnumItemType["SeparatorItem"] = "separator";
	})(CommandsEnumItemType = exports.CommandsEnumItemType || (exports.CommandsEnumItemType = {}));
	// 
	var ParameterTypesDomainType;
	(function (ParameterTypesDomainType) {
	    // 
	    ParameterTypesDomainType["Domain_Any"] = "any";
	    // 
	    ParameterTypesDomainType["Domain_List"] = "list";
	    // 
	    ParameterTypesDomainType["Domain_Range"] = "range";
	})(ParameterTypesDomainType = exports.ParameterTypesDomainType || (exports.ParameterTypesDomainType = {}));
	// Filter context domains
	var FiltersDomainType;
	(function (FiltersDomainType) {
	    // 
	    FiltersDomainType["Relevant"] = "relevant";
	    // 
	    FiltersDomainType["Context"] = "context";
	    // 
	    FiltersDomainType["Database"] = "all";
	})(FiltersDomainType = exports.FiltersDomainType || (exports.FiltersDomainType = {}));
	// Selection (relational only) - Range type
	var FiltersRangeType;
	(function (FiltersRangeType) {
	    // 
	    FiltersRangeType["All"] = "all";
	    // 
	    FiltersRangeType["Selected"] = "selected";
	    // 
	    FiltersRangeType["Manual"] = "manual";
	})(FiltersRangeType = exports.FiltersRangeType || (exports.FiltersRangeType = {}));
	// Pattern based filtering
	var FiltersPatternType;
	(function (FiltersPatternType) {
	    // starts with the specified pattern text
	    FiltersPatternType["StartsWith"] = "starts-with";
	    // ends with the specified pattern text
	    FiltersPatternType["EndsWith"] = "ends-with";
	    // contains the specified pattern text
	    FiltersPatternType["Contains"] = "contains";
	    // exactly matches the specified pattern text
	    FiltersPatternType["ExactMatch"] = "exact-match";
	})(FiltersPatternType = exports.FiltersPatternType || (exports.FiltersPatternType = {}));
	// 
	var FiltersFilterBy;
	(function (FiltersFilterBy) {
	    // no filter
	    FiltersFilterBy["None"] = "none";
	    // filter by a particular field
	    FiltersFilterBy["Field"] = "field";
	    // filter by a user defined expression
	    FiltersFilterBy["Expression"] = "expression";
	})(FiltersFilterBy = exports.FiltersFilterBy || (exports.FiltersFilterBy = {}));
	// 
	var FiltersLimitType;
	(function (FiltersLimitType) {
	    // 
	    FiltersLimitType["None"] = "none";
	    // 
	    FiltersLimitType["ByField"] = "by-field";
	    // 
	    FiltersLimitType["Formula"] = "formula";
	})(FiltersLimitType = exports.FiltersLimitType || (exports.FiltersLimitType = {}));
	// 
	var FiltersConditionType;
	(function (FiltersConditionType) {
	    // 
	    FiltersConditionType["None"] = "none";
	    // 
	    FiltersConditionType["ByField"] = "by-field";
	    // 
	    FiltersConditionType["Formula"] = "formula";
	})(FiltersConditionType = exports.FiltersConditionType || (exports.FiltersConditionType = {}));
	// 
	var FiltersTopType;
	(function (FiltersTopType) {
	    // no top
	    FiltersTopType["None"] = "none";
	    // top by a particular field
	    FiltersTopType["Field"] = "field";
	    // top by a user defined expression
	    FiltersTopType["Expression"] = "expression";
	})(FiltersTopType = exports.FiltersTopType || (exports.FiltersTopType = {}));
	// Higher level intepretation of a relative date filter's range
	var FiltersRelativeDateRangeType;
	(function (FiltersRelativeDateRangeType) {
	    // 
	    FiltersRelativeDateRangeType["RangeCurrent"] = "curr";
	    // 
	    FiltersRelativeDateRangeType["RangeCurrentToDate"] = "todate";
	    // 
	    FiltersRelativeDateRangeType["RangeLast1"] = "last";
	    // 
	    FiltersRelativeDateRangeType["RangeNext1"] = "next";
	    // 
	    FiltersRelativeDateRangeType["RangeLastN"] = "lastn";
	    // 
	    FiltersRelativeDateRangeType["RangeNextN"] = "nextn";
	    // 
	    FiltersRelativeDateRangeType["RangeOther1"] = "other";
	    // 
	    FiltersRelativeDateRangeType["RangeOtherN"] = "othern";
	    // 
	    FiltersRelativeDateRangeType["RangeInvalid"] = "invalid";
	})(FiltersRelativeDateRangeType = exports.FiltersRelativeDateRangeType || (exports.FiltersRelativeDateRangeType = {}));
	// 
	var FiltersFilterMode;
	(function (FiltersFilterMode) {
	    // 
	    FiltersFilterMode["Local"] = "local";
	    // 
	    FiltersFilterMode["Global"] = "global";
	    // 
	    FiltersFilterMode["Shared"] = "shared";
	    // 
	    FiltersFilterMode["MappedGlobal"] = "mapped-global";
	})(FiltersFilterMode = exports.FiltersFilterMode || (exports.FiltersFilterMode = {}));
	// How uncommitted selection state is being tracked
	var FiltersSelectionTracking;
	(function (FiltersSelectionTracking) {
	    // Passed members have been updated: each included members' selection state should be flipped from its initial state.
	    FiltersSelectionTracking["DifferencesFromBase"] = "differences";
	    // Passed members should be unconditionally selected
	    FiltersSelectionTracking["SelectedValues"] = "selected";
	    // Don't save any selection state. This saves memory at the cost of not being recoverable if the controller is gone.
	    FiltersSelectionTracking["None"] = "dont-track-selection-state";
	})(FiltersSelectionTracking = exports.FiltersSelectionTracking || (exports.FiltersSelectionTracking = {}));
	// filter update options
	var FilterUpdateType;
	(function (FilterUpdateType) {
	    // select all values in filter
	    FilterUpdateType["ALL"] = "filter-all";
	    // add items to existing filter
	    FilterUpdateType["ADD"] = "filter-add";
	    // remove items from existing filter
	    FilterUpdateType["REMOVE"] = "filter-remove";
	    // replace existing filter with given options
	    FilterUpdateType["REPLACE"] = "filter-replace";
	    // mixture of add + removal
	    FilterUpdateType["DELTA"] = "filter-delta";
	    // clear the filter
	    FilterUpdateType["CLEAR"] = "filter-clear";
	    // each value in the filter, but individually selected
	    FilterUpdateType["EACH"] = "filter-each";
	})(FilterUpdateType = exports.FilterUpdateType || (exports.FilterUpdateType = {}));
	// additional context needed to perform a filter update correctly
	var FilterUpdateQualifierType;
	(function (FilterUpdateQualifierType) {
	    // the filter's domain is a manually typed in or selected subset of the full domain
	    FilterUpdateQualifierType["CUSTOM_DOMAIN"] = "filter-update-custom-domain";
	    // no qualifications to the filter-update are specified
	    FilterUpdateQualifierType["NO_QUALIFICATIONS"] = "filter-update-no-qual";
	})(FilterUpdateQualifierType = exports.FilterUpdateQualifierType || (exports.FilterUpdateQualifierType = {}));
	// 
	var FiltersPresetType;
	(function (FiltersPresetType) {
	    // keep the selection chosen by the user
	    FiltersPresetType["None"] = "none";
	    // update to the latest values in the database
	    FiltersPresetType["LastValues"] = "last-values";
	    // 
	    FiltersPresetType["CurrentValues"] = "current-values";
	})(FiltersPresetType = exports.FiltersPresetType || (exports.FiltersPresetType = {}));
	// Note: an empty range (both endpoints NULL) is defined to mean 'all non-NULL values', by symmetry with what a single-ended range means, so an empty range and InRange really means NonNull, and an empty range and nRangeOrNull really means All
	var FiltersQuantitativeIncludedValues;
	(function (FiltersQuantitativeIncludedValues) {
	    // the identity filter (everything is included)
	    FiltersQuantitativeIncludedValues["All"] = "include-all";
	    // all values which are non-nullptr
	    FiltersQuantitativeIncludedValues["NonNull"] = "include-non-null";
	    // all values which are nullptr
	    FiltersQuantitativeIncludedValues["Null"] = "include-null";
	    // only values within the range and which are non null
	    FiltersQuantitativeIncludedValues["InRange"] = "include-range";
	    // values within the range or which are nullptr
	    FiltersQuantitativeIncludedValues["InRangeOrNull"] = "include-range-or-null";
	    // all values are filtered out. User cannot create this type of filter directly; is only created when two filters intersect and their includedValues conflict so they will include nothing (e.g., NonNull with Null)
	    FiltersQuantitativeIncludedValues["None"] = "include-none";
	})(FiltersQuantitativeIncludedValues = exports.FiltersQuantitativeIncludedValues || (exports.FiltersQuantitativeIncludedValues = {}));
	// 
	var DatePeriodType;
	(function (DatePeriodType) {
	    // 
	    DatePeriodType["PeriodYear"] = "year";
	    // 
	    DatePeriodType["PeriodQuarter"] = "quarter";
	    // 
	    DatePeriodType["PeriodMonth"] = "month";
	    // 
	    DatePeriodType["PeriodWeek"] = "week";
	    // 
	    DatePeriodType["PeriodDay"] = "day";
	    // 
	    DatePeriodType["PeriodHour"] = "hour";
	    // 
	    DatePeriodType["PeriodMinute"] = "minute";
	    // 
	    DatePeriodType["PeriodSecond"] = "second";
	})(DatePeriodType = exports.DatePeriodType || (exports.DatePeriodType = {}));
	// Fiscal Year Starting Month
	var FYSValues;
	(function (FYSValues) {
	    // 
	    FYSValues["FYSValues__FYS_JANUARY"] = "fys-january";
	    // 
	    FYSValues["FYSValues__FYS_FEBRUARY"] = "fys-february";
	    // 
	    FYSValues["FYSValues__FYS_MARCH"] = "fys-march";
	    // 
	    FYSValues["FYSValues__FYS_APRIL"] = "fys-april";
	    // 
	    FYSValues["FYSValues__FYS_MAY"] = "fys-may";
	    // 
	    FYSValues["FYSValues__FYS_JUNE"] = "fys-june";
	    // 
	    FYSValues["FYSValues__FYS_JULY"] = "fys-july";
	    // 
	    FYSValues["FYSValues__FYS_AUGUST"] = "fys-august";
	    // 
	    FYSValues["FYSValues__FYS_SEPTEMBER"] = "fys-september";
	    // 
	    FYSValues["FYSValues__FYS_OCTOBER"] = "fys-october";
	    // 
	    FYSValues["FYSValues__FYS_NOVEMBER"] = "fys-november";
	    // 
	    FYSValues["FYSValues__FYS_DECEMBER"] = "fys-december";
	})(FYSValues = exports.FYSValues || (exports.FYSValues = {}));
	// 
	var PageNavFlagsFlags;
	(function (PageNavFlagsFlags) {
	    // 
	    PageNavFlagsFlags["None"] = "none";
	    // 
	    PageNavFlagsFlags["LoopedPlayback"] = "looped-playback";
	    // 
	    PageNavFlagsFlags["ShowDropdown"] = "show-dropdown";
	    // 
	    PageNavFlagsFlags["ShowSlider"] = "show-slider";
	    // 
	    PageNavFlagsFlags["ShowPlayCtrls"] = "show-play-controls";
	    // 
	    PageNavFlagsFlags["ShowTrailCtrls"] = "show-trail-controls";
	    // 
	    PageNavFlagsFlags["Synchronized"] = "synchronized";
	})(PageNavFlagsFlags = exports.PageNavFlagsFlags || (exports.PageNavFlagsFlags = {}));
	// 
	var PageTrailEnumsMarksToTrail;
	(function (PageTrailEnumsMarksToTrail) {
	    // 
	    PageTrailEnumsMarksToTrail["Manual"] = "manual";
	    // 
	    PageTrailEnumsMarksToTrail["All"] = "all";
	    // 
	    PageTrailEnumsMarksToTrail["Selected"] = "selected";
	    // 
	    PageTrailEnumsMarksToTrail["Highlighted"] = "highlighted";
	})(PageTrailEnumsMarksToTrail = exports.PageTrailEnumsMarksToTrail || (exports.PageTrailEnumsMarksToTrail = {}));
	// 
	var PageTrailEnumsTrailType;
	(function (PageTrailEnumsTrailType) {
	    // 
	    PageTrailEnumsTrailType["Marks"] = "marks";
	    // 
	    PageTrailEnumsTrailType["Trails"] = "trails";
	    // 
	    PageTrailEnumsTrailType["Both"] = "both";
	})(PageTrailEnumsTrailType = exports.PageTrailEnumsTrailType || (exports.PageTrailEnumsTrailType = {}));
	// 
	var PageTrailEnumsTrailEffect;
	(function (PageTrailEnumsTrailEffect) {
	    // 
	    PageTrailEnumsTrailEffect["None"] = "none";
	    // 
	    PageTrailEnumsTrailEffect["Transparency"] = "transparency";
	})(PageTrailEnumsTrailEffect = exports.PageTrailEnumsTrailEffect || (exports.PageTrailEnumsTrailEffect = {}));
	// 
	var PageTrailEnumsTrailFlags;
	(function (PageTrailEnumsTrailFlags) {
	    // 
	    PageTrailEnumsTrailFlags["NoFlags"] = "no-flags";
	    // 
	    PageTrailEnumsTrailFlags["DrawIfHighlighted"] = "draw-if-highlighted";
	    // 
	    PageTrailEnumsTrailFlags["DrawIfSelected"] = "draw-if-selected";
	    // 
	    PageTrailEnumsTrailFlags["DrawAlways"] = "draw-always";
	    // 
	    PageTrailEnumsTrailFlags["LinesEnabled"] = "lines-enabled";
	})(PageTrailEnumsTrailFlags = exports.PageTrailEnumsTrailFlags || (exports.PageTrailEnumsTrailFlags = {}));
	// simple page change commands
	var ChangePageChangeType;
	(function (ChangePageChangeType) {
	    // 
	    ChangePageChangeType["ToFirst"] = "first";
	    // 
	    ChangePageChangeType["ToNext"] = "next";
	    // 
	    ChangePageChangeType["ToPrev"] = "previous";
	    // 
	    ChangePageChangeType["ToLast"] = "last";
	})(ChangePageChangeType = exports.ChangePageChangeType || (exports.ChangePageChangeType = {}));
	// Stop, start in a direction, or set speed of page animation
	var ChangePagePageAnimationControl;
	(function (ChangePagePageAnimationControl) {
	    // 
	    ChangePagePageAnimationControl["Stop"] = "stop";
	    // 
	    ChangePagePageAnimationControl["Forward"] = "forward";
	    // 
	    ChangePagePageAnimationControl["Backward"] = "backward";
	    // 
	    ChangePagePageAnimationControl["SlowSpeed"] = "slow-speed";
	    // 
	    ChangePagePageAnimationControl["NormalSpeed"] = "normal-speed";
	    // 
	    ChangePagePageAnimationControl["FastSpeed"] = "fast-speed";
	    // 
	    ChangePagePageAnimationControl["ToggleForward"] = "toggle-forward";
	    // 
	    ChangePagePageAnimationControl["ToggleBackward"] = "toggle-backward";
	})(ChangePagePageAnimationControl = exports.ChangePagePageAnimationControl || (exports.ChangePagePageAnimationControl = {}));
	// 
	var LegendItemLayout;
	(function (LegendItemLayout) {
	    // 
	    LegendItemLayout["LegendItemLayoutVert"] = "vertical";
	    // 
	    LegendItemLayout["LegendItemLayoutHorz"] = "horizontal";
	    // 
	    LegendItemLayout["LegendItemLayoutGrid"] = "grid";
	    // 
	    LegendItemLayout["LegendItemLayoutAuto"] = "auto";
	})(LegendItemLayout = exports.LegendItemLayout || (exports.LegendItemLayout = {}));
	// 
	var LegendItemOrder;
	(function (LegendItemOrder) {
	    // 
	    LegendItemOrder["LegendItemOrderNormal"] = "normal";
	    // 
	    LegendItemOrder["LegendItemOrderReversed"] = "reversed";
	    // 
	    LegendItemOrder["LegendItemOrderAuto"] = "auto";
	})(LegendItemOrder = exports.LegendItemOrder || (exports.LegendItemOrder = {}));
	// 
	var SizeMode;
	(function (SizeMode) {
	    // 
	    SizeMode["SizeModeAuto"] = "size-mode-auto";
	    // 
	    SizeMode["SizeModeFixed"] = "size-mode-fixed";
	    // 
	    SizeMode["SizeModeMin"] = "size-mode-min";
	    // 
	    SizeMode["SizeModeMax"] = "size-mode-max";
	    // 
	    SizeMode["SizeModeRange"] = "size-mode-range";
	    // 
	    SizeMode["SizeModeFitWidth"] = "size-mode-fit-width";
	    // 
	    SizeMode["SizeModeFitHeight"] = "size-mode-height";
	    // 
	    SizeMode["SizeModeScrollHeight"] = "size-mode-scroll-height";
	})(SizeMode = exports.SizeMode || (exports.SizeMode = {}));
	// 
	var ShowMeCommandType;
	(function (ShowMeCommandType) {
	    // 
	    ShowMeCommandType["SHOWME_TEXT"] = "text";
	    // 
	    ShowMeCommandType["SHOWME_HEAT"] = "heat";
	    // 
	    ShowMeCommandType["SHOWME_SPOTTABLE"] = "spot-table";
	    // 
	    ShowMeCommandType["SHOWME_BARHORIZ"] = "bar-horiz";
	    // 
	    ShowMeCommandType["SHOWME_BARSTACK"] = "bar-stack";
	    // 
	    ShowMeCommandType["SHOWME_BARSIDE"] = "bar-side";
	    // 
	    ShowMeCommandType["SHOWME_BARMEASURE"] = "bar-measure";
	    // 
	    ShowMeCommandType["SHOWME_OLINE"] = "o-line";
	    // 
	    ShowMeCommandType["SHOWME_QILINE"] = "qi-line";
	    // 
	    ShowMeCommandType["SHOWME_OAREA"] = "o-area";
	    // 
	    ShowMeCommandType["SHOWME_QIAREA"] = "qi-area";
	    // 
	    ShowMeCommandType["SHOWME_CIRCLE"] = "circle";
	    // 
	    ShowMeCommandType["SHOWME_CIRCLESIDE"] = "circle-side";
	    // 
	    ShowMeCommandType["SHOWME_GANTT"] = "gantt";
	    // 
	    ShowMeCommandType["SHOWME_SCATTER"] = "scatter";
	    // 
	    ShowMeCommandType["SHOWME_SCATTERMATRIX"] = "scatter-matrix";
	    // 
	    ShowMeCommandType["SHOWME_HISTOGRAM"] = "histogram";
	    // 
	    ShowMeCommandType["SHOWME_MAPS"] = "maps";
	    // 
	    ShowMeCommandType["SHOWME_FILLEDMAPS"] = "filled-maps";
	    // 
	    ShowMeCommandType["SHOWME_PIES"] = "pies";
	    // 
	    ShowMeCommandType["SHOWME_DUALBARLINE"] = "dual-bar-line";
	    // 
	    ShowMeCommandType["SHOWME_DUALLINE"] = "dual-line";
	    // 
	    ShowMeCommandType["SHOWME_BULLET"] = "bullet";
	    // 
	    ShowMeCommandType["SHOWME_TREEMAP"] = "treemap";
	    // 
	    ShowMeCommandType["SHOWME_BUBBLE"] = "bubble";
	    // 
	    ShowMeCommandType["SHOWME_BOXPLOT"] = "box-plot";
	})(ShowMeCommandType = exports.ShowMeCommandType || (exports.ShowMeCommandType = {}));
	// icon to display for an item on a shelf
	var ShelfIconType;
	(function (ShelfIconType) {
	    // not set
	    ShelfIconType["SIT_None"] = "none";
	    // incompatible field
	    ShelfIconType["SIT_IncompatibleField"] = "incompatible-field";
	    // remote
	    ShelfIconType["SIT_Remote"] = "remote";
	    // group
	    ShelfIconType["SIT_Group"] = "group";
	    // table calc
	    ShelfIconType["SIT_TableCalc"] = "table-calc";
	    // item comes from a secondary datasource
	    ShelfIconType["SIT_SecondaryDatasource"] = "secondary-datasource";
	    // table calc from a secondary datasource
	    ShelfIconType["SIT_TableCalcSecondary"] = "table-calc-secondary";
	    // forecast
	    ShelfIconType["SIT_Forecast"] = "forecast";
	    // ascending sort
	    ShelfIconType["SIT_SortAsc"] = "sort-asc";
	    // descending sort
	    ShelfIconType["SIT_SortDesc"] = "sort-desc";
	    // alphabetic ascending sort
	    ShelfIconType["SIT_SortAlphabeticAsc"] = "sort-alphabetic-asc";
	    // alphabetic descending sort
	    ShelfIconType["SIT_SortAlphabeticDesc"] = "sort-alphabetic-desc";
	})(ShelfIconType = exports.ShelfIconType || (exports.ShelfIconType = {}));
	// icon to display for an item on the filters shelf
	var FilterIconType;
	(function (FilterIconType) {
	    // a global filter icon
	    FilterIconType["FIT_Global"] = "global-filter";
	    // a shared filter icon
	    FilterIconType["FIT_Shared"] = "shared-filter";
	    // a mapped shared source filter icon
	    FilterIconType["FIT_MappedSharedSource"] = "mapped-shared-source-filter";
	    // a mapped shared target filter icon
	    FilterIconType["FIT_MappedSharedTarget"] = "mapped-shared-target-filter";
	    // a slicing filter icon
	    FilterIconType["FIT_Slice"] = "slice-filter";
	    // a local filter icon
	    FilterIconType["FIT_Local"] = "local-filter";
	    // a mapped global source filter icon
	    FilterIconType["FIT_MappedGlobalSource"] = "mapped-global-source-filter";
	    // a mapped global target filter icon
	    FilterIconType["FIT_MappedGlobalTarget"] = "mapped-global-target-filter";
	    // not a filter
	    FilterIconType["FIT_None"] = "no-filter";
	})(FilterIconType = exports.FilterIconType || (exports.FilterIconType = {}));
	// used to indicate if a field is part of a dual axis
	var ItemDrawStyle;
	(function (ItemDrawStyle) {
	    // not part of a dual axis
	    ItemDrawStyle["ITEM_DRAWSTYLE_NORMAL"] = "normal";
	    // first item on dual axis
	    ItemDrawStyle["ITEM_DRAWSTYLE_OPENED"] = "opened";
	    // second item on dual axis
	    ItemDrawStyle["ITEM_DRAWSTYLE_CLOSED"] = "closed";
	})(ItemDrawStyle = exports.ItemDrawStyle || (exports.ItemDrawStyle = {}));
	// indicates the size of page for a sheet
	var PageSizeOption;
	(function (PageSizeOption) {
	    // 
	    PageSizeOption["PAGESIZE_LETTER"] = "letter";
	    // 
	    PageSizeOption["PAGESIZE_LEGAL"] = "legal";
	    // 
	    PageSizeOption["PAGESIZE_NOTE"] = "note";
	    // 
	    PageSizeOption["PAGESIZE_FOLIO"] = "folio";
	    // 
	    PageSizeOption["PAGESIZE_TABLOID"] = "tabloid";
	    // 
	    PageSizeOption["PAGESIZE_LEDGER"] = "ledger";
	    // 
	    PageSizeOption["PAGESIZE_STATEMENT"] = "statement";
	    // 
	    PageSizeOption["PAGESIZE_EXECUTIVE"] = "executive";
	    // 
	    PageSizeOption["PAGESIZE_A3"] = "a3";
	    // 
	    PageSizeOption["PAGESIZE_A4"] = "a4";
	    // 
	    PageSizeOption["PAGESIZE_A5"] = "a5";
	    // 
	    PageSizeOption["PAGESIZE_B4"] = "b4";
	    // 
	    PageSizeOption["PAGESIZE_B5"] = "b5";
	    // 
	    PageSizeOption["PAGESIZE_QUARTO"] = "quarto";
	    // 
	    PageSizeOption["PAGESIZE_UNSPECIFIED"] = "unspecified";
	})(PageSizeOption = exports.PageSizeOption || (exports.PageSizeOption = {}));
	// Indicates the layout of page for a sheet
	var PageOrientation;
	(function (PageOrientation) {
	    // 
	    PageOrientation["OrientationPrinter"] = "printer";
	    // 
	    PageOrientation["OrientationPortrait"] = "portrait";
	    // 
	    PageOrientation["OrientationLandscape"] = "landscape";
	})(PageOrientation = exports.PageOrientation || (exports.PageOrientation = {}));
	// Indicates the manner of scaling of page for a sheet
	var ScaleMode;
	(function (ScaleMode) {
	    // 
	    ScaleMode["ScaleAuto"] = "auto";
	    // 
	    ScaleMode["ScalePercentage"] = "percent";
	    // 
	    ScaleMode["ScaleFitPages"] = "fit-pages";
	})(ScaleMode = exports.ScaleMode || (exports.ScaleMode = {}));
	// Indicates the default/selectable scaling of page for a sheet
	var PageScalingOption;
	(function (PageScalingOption) {
	    // 
	    PageScalingOption["ScalePctAuto"] = "auto";
	    // 
	    PageScalingOption["ScalePct400"] = "pct400";
	    // 
	    PageScalingOption["ScalePct200"] = "pct200";
	    // 
	    PageScalingOption["ScalePct100"] = "pct100";
	    // 
	    PageScalingOption["ScalePct90"] = "pct90";
	    // 
	    PageScalingOption["ScalePct80"] = "pct80";
	    // 
	    PageScalingOption["ScalePct75"] = "pct75";
	    // 
	    PageScalingOption["ScalePct60"] = "pct60";
	    // 
	    PageScalingOption["ScalePct50"] = "pct50";
	    // 
	    PageScalingOption["ScalePct25"] = "pct25";
	})(PageScalingOption = exports.PageScalingOption || (exports.PageScalingOption = {}));
	// 
	var SheetRange;
	(function (SheetRange) {
	    // 
	    SheetRange["SheetRangeAll"] = "all";
	    // 
	    SheetRange["SheetRangeActive"] = "active";
	    // 
	    SheetRange["SheetRangeSelected"] = "selected";
	})(SheetRange = exports.SheetRange || (exports.SheetRange = {}));
	// sheet type
	var SheetType;
	(function (SheetType) {
	    // 
	    SheetType["TYPE_WORKSHEET"] = "worksheet";
	    // 
	    SheetType["TYPE_DASHBOARD"] = "dashboard";
	    // 
	    SheetType["TYPE_STORY"] = "story";
	})(SheetType = exports.SheetType || (exports.SheetType = {}));
	// a dashboard image metric's type
	var ClientUIMetricType;
	(function (ClientUIMetricType) {
	    // 
	    ClientUIMetricType["UIMT_ScrollbarMetric"] = "scrollbar-metric";
	    // 
	    ClientUIMetricType["UIMT_QFilterFixedMetric"] = "q-filter-fixed-metric";
	    // 
	    ClientUIMetricType["UIMT_QFilterSliderMetric"] = "q-filter-slider-metric";
	    // 
	    ClientUIMetricType["UIMT_QFilterReadoutMetric"] = "q-filter-readout-metric";
	    // 
	    ClientUIMetricType["UIMT_CFilterFixedMetric"] = "c-filter-fixed-metric";
	    // minimum check/radiolist item size
	    ClientUIMetricType["UIMT_CFilterItemMetric"] = "c-filter-item-metric";
	    // 
	    ClientUIMetricType["UIMT_HFilterFixedMetric"] = "h-filter-fixed-metric";
	    // minimum hierarchical item size
	    ClientUIMetricType["UIMT_HFilterItemMetric"] = "h-filter-item-metric";
	    // 
	    ClientUIMetricType["UIMT_CmSliderFilterMetric"] = "cm-slider-filter-metric";
	    // 
	    ClientUIMetricType["UIMT_CmDropdownFilterMetric"] = "cm-dropdown-filter-metric";
	    // 
	    ClientUIMetricType["UIMT_CmPatternFilterMetric"] = "cm-pattern-filter-metric";
	    // 
	    ClientUIMetricType["UIMT_RDateFilterMetric"] = "r-date-filter-metric";
	    // 
	    ClientUIMetricType["UIMT_RDatePFilterMetric"] = "r-date-p-filter-metric";
	    // 
	    ClientUIMetricType["UIMT_ParamTypeInMetric"] = "param-type-in-metric";
	    // 
	    ClientUIMetricType["UIMT_ParamCompactListMetric"] = "param-compact-list-metric";
	    // 
	    ClientUIMetricType["UIMT_ParamListMetric"] = "param-list-metric";
	    // 
	    ClientUIMetricType["UIMT_ParamSliderMetric"] = "param-slider-metric";
	    // 
	    ClientUIMetricType["UIMT_ParamDateTimeMetric"] = "param-date-time-metric";
	    // 
	    ClientUIMetricType["UIMT_CFilterApplyMetric"] = "c-filter-apply-metric";
	    // 
	    ClientUIMetricType["UIMT_CmTypeInSearchMetric"] = "cm-type-in-search-metric";
	    // minimum custom list item size
	    ClientUIMetricType["UIMT_CFilterCustomItemMetric"] = "c-filter-custom-item-metric";
	})(ClientUIMetricType = exports.ClientUIMetricType || (exports.ClientUIMetricType = {}));
	// a region of a viz where sort indicators may appear
	var SortRegionType;
	(function (SortRegionType) {
	    // 
	    SortRegionType["SRT_LABELS_X"] = "xheader";
	    // 
	    SortRegionType["SRT_LABELS_Y"] = "yheader";
	    // 
	    SortRegionType["SRT_LABELS_FIELD"] = "uleft";
	    // 
	    SortRegionType["SRT_AXIS_LEFT"] = "leftaxis";
	    // 
	    SortRegionType["SRT_AXIS_BOTTOM"] = "bottomaxis";
	    // 
	    SortRegionType["SRT_AXIS_RIGHT"] = "rightaxis";
	    // 
	    SortRegionType["SRT_AXIS_TOP"] = "topaxis";
	})(SortRegionType = exports.SortRegionType || (exports.SortRegionType = {}));
	// 
	var QtCursorShape;
	(function (QtCursorShape) {
	    // 
	    QtCursorShape["ArrowCursor"] = "arrow";
	    // 
	    QtCursorShape["UpArrowCursor"] = "up-arrow";
	    // 
	    QtCursorShape["CrossCursor"] = "cross";
	    // 
	    QtCursorShape["WaitCursor"] = "wait";
	    // 
	    QtCursorShape["IBeamCursor"] = "ibeam";
	    // 
	    QtCursorShape["SizeVerCursor"] = "size-ver";
	    // 
	    QtCursorShape["SizeHorCursor"] = "size-hor";
	    // 
	    QtCursorShape["SizeBDiagCursor"] = "size-bdiag";
	    // 
	    QtCursorShape["SizeFDiagCursor"] = "size-fdiag";
	    // 
	    QtCursorShape["SizeAllCursor"] = "size-all";
	    // 
	    QtCursorShape["BlankCursor"] = "blank";
	    // 
	    QtCursorShape["SplitVCursor"] = "split-v";
	    // 
	    QtCursorShape["SplitHCursor"] = "split-h";
	    // 
	    QtCursorShape["PointingHandCursor"] = "pointing-hand";
	    // 
	    QtCursorShape["ForbiddenCursor"] = "forbidden";
	    // 
	    QtCursorShape["WhatsThisCursor"] = "whats-this";
	    // 
	    QtCursorShape["BusyCursor"] = "busy";
	    // 
	    QtCursorShape["OpenHandCursor"] = "open-hand";
	    // 
	    QtCursorShape["ClosedHandCursor"] = "closed-hand";
	    // 
	    QtCursorShape["DragCopyCursor"] = "drag-copy";
	    // 
	    QtCursorShape["DragMoveCursor"] = "drag-move";
	    // 
	    QtCursorShape["DragLinkCursor"] = "drag-link";
	})(QtCursorShape = exports.QtCursorShape || (exports.QtCursorShape = {}));
	// specifies various components of a viz that are rendered as images
	var VizImageRegion;
	(function (VizImageRegion) {
	    // the main viz area
	    VizImageRegion["VIZ_REGION_TABLE"] = "viz";
	    // y axis items
	    VizImageRegion["VIZ_REGION_ROWHEADERS"] = "yheader";
	    // 
	    VizImageRegion["VIZ_REGION_LEFTAXIS"] = "leftaxis";
	    // 
	    VizImageRegion["VIZ_REGION_RIGHTAXIS"] = "rightaxis";
	    // x axis items
	    VizImageRegion["VIZ_REGION_COLUMNHEADERS"] = "xheader";
	    // 
	    VizImageRegion["VIZ_REGION_BOTTOMAXIS"] = "bottomaxis";
	    // 
	    VizImageRegion["VIZ_REGION_TOPAXIS"] = "topaxis";
	    // spacing areas
	    VizImageRegion["VIZ_REGION_UPPERLEFT"] = "uleft";
	    // 
	    VizImageRegion["VIZ_REGION_UPPERRIGHT"] = "uright";
	    // 
	    VizImageRegion["VIZ_REGION_LOWERLEFT"] = "lleft";
	    // 
	    VizImageRegion["VIZ_REGION_LOWERRIGHT"] = "lright";
	    // labelling areas
	    VizImageRegion["VIZ_REGION_TITLE"] = "title";
	    // 
	    VizImageRegion["VIZ_REGION_CAPTION"] = "caption";
	    // legend areas
	    VizImageRegion["VIZ_REGION_COLORLEGEND"] = "color";
	    // 
	    VizImageRegion["VIZ_REGION_SHAPELEGEND"] = "shape";
	    // 
	    VizImageRegion["VIZ_REGION_SIZELEGEND"] = "size";
	    // 
	    VizImageRegion["VIZ_REGION_HIGHLIGHTLEGEND"] = "highlight-legend";
	    // 
	    VizImageRegion["VIZ_REGION_MAPLEGEND"] = "map";
	    // legend titles
	    VizImageRegion["VIZ_REGION_COLORLEGENDTITLE"] = "color-title";
	    // 
	    VizImageRegion["VIZ_REGION_SHAPELEGENDTITLE"] = "shape-title";
	    // 
	    VizImageRegion["VIZ_REGION_SIZELEGENDTITLE"] = "size-title";
	    // 
	    VizImageRegion["VIZ_REGION_HIGHLIGHTLEGENDTITLE"] = "highlight-legend-title";
	    // 
	    VizImageRegion["VIZ_REGION_MAPLEGENDTITLE"] = "map-title";
	    // legend bodies
	    VizImageRegion["VIZ_REGION_COLORLEGENDBODY"] = "color-body";
	    // 
	    VizImageRegion["VIZ_REGION_SHAPELEGENDBODY"] = "shape-body";
	    // 
	    VizImageRegion["VIZ_REGION_SIZELEGENDBODY"] = "size-body";
	    // 
	    VizImageRegion["VIZ_REGION_HIGHLIGHTLEGENDBODY"] = "highlight-legend-body";
	    // 
	    VizImageRegion["VIZ_REGION_MAPLEGENDBODY"] = "map-body";
	    // These are region names (ranges of other enums)
	    VizImageRegion["VIZ_REGION_END"] = "end";
	})(VizImageRegion = exports.VizImageRegion || (exports.VizImageRegion = {}));
	// names of legacy menu items
	var LegacyMenuName;
	(function (LegacyMenuName) {
	    // view underlying data
	    LegacyMenuName["LM_NAME_VIEWDATA"] = "viewdata";
	    // export image
	    LegacyMenuName["LM_NAME_EXPORTIMAGE"] = "exportimage";
	    // export data
	    LegacyMenuName["LM_NAME_EXPORTDATA"] = "exportdata";
	    // export as crosstab
	    LegacyMenuName["LM_NAME_EXPORTCROSSTAB"] = "exportcrosstab";
	    // print to pdf
	    LegacyMenuName["LM_NAME_PRINT"] = "print";
	})(LegacyMenuName = exports.LegacyMenuName || (exports.LegacyMenuName = {}));
	// states of legacy menu items
	var LegacyMenuState;
	(function (LegacyMenuState) {
	    // visible state
	    LegacyMenuState["LM_STATE_VISIBLE"] = "visible";
	    // checked state
	    LegacyMenuState["LM_STATE_CHECKED"] = "checked";
	    // grayed state
	    LegacyMenuState["LM_STATE_GRAYED"] = "grayed";
	    // radio state
	    LegacyMenuState["LM_STATE_RADIO"] = "radio";
	})(LegacyMenuState = exports.LegacyMenuState || (exports.LegacyMenuState = {}));
	// 
	var MemberUniquenessType;
	(function (MemberUniquenessType) {
	    // 
	    MemberUniquenessType["UniqueWithinCube"] = "cube-unique";
	    // 
	    MemberUniquenessType["UniqueWithinHierarchy"] = "hierarchy-unique";
	    // 
	    MemberUniquenessType["UniqueWithinLevel"] = "level-unique";
	    // 
	    MemberUniquenessType["UniqueWithinParent"] = "parent-unique";
	})(MemberUniquenessType = exports.MemberUniquenessType || (exports.MemberUniquenessType = {}));
	// 
	var DimensionType;
	(function (DimensionType) {
	    // just a regular dimension, no special semantics
	    DimensionType["RegularDimension"] = "regular-dimension";
	    // the measures dimension, which we don't model as such
	    DimensionType["MeasureDimension"] = "measure-dimension";
	    // a time dimension
	    DimensionType["TimeDimension"] = "time-dimension";
	})(DimensionType = exports.DimensionType || (exports.DimensionType = {}));
	// 
	var SchemaViewerDataSourceType;
	(function (SchemaViewerDataSourceType) {
	    // 
	    SchemaViewerDataSourceType["SVT_DS_NORMAL"] = "datasource";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_NORMAL_PRIMARY"] = "datasource-primary";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_NORMAL_SECONDARY"] = "datasource-secondary";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_EXTRACT"] = "extract";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_EXTRACT_PRIMARY"] = "extract-primary";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_EXTRACT_SECONDARY"] = "extract-secondary";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_CUBE"] = "cube";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_CUBE_PRIMARY"] = "cube-primary";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_CUBE_SECONDARY"] = "cube-secondary";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_SERVER"] = "server";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_SERVER_PRIMARY"] = "server-primary";
	    // 
	    SchemaViewerDataSourceType["SVT_DS_SERVER_SECONDARY"] = "server-secondary";
	})(SchemaViewerDataSourceType = exports.SchemaViewerDataSourceType || (exports.SchemaViewerDataSourceType = {}));
	// 
	var SchemaItemType;
	(function (SchemaItemType) {
	    // 
	    SchemaItemType["IT_DIMENSION"] = "dimension";
	    // 
	    SchemaItemType["IT_HIERARCHY"] = "hierarchy";
	    // 
	    SchemaItemType["IT_LEVEL"] = "level";
	    // 
	    SchemaItemType["IT_CATEGORICAL"] = "categorical";
	    // 
	    SchemaItemType["IT_MEASURE"] = "measure";
	    // 
	    SchemaItemType["IT_VALUE"] = "value";
	    // 
	    SchemaItemType["IT_GROUP"] = "group";
	    // 
	    SchemaItemType["IT_FOLDER"] = "folder";
	    // 
	    SchemaItemType["IT_TABLE"] = "table";
	    // 
	    SchemaItemType["IT_DRILLPATH"] = "drillpath";
	    // 
	    SchemaItemType["IT_PARAMETER"] = "parameter";
	    // 
	    SchemaItemType["IT_HEADER"] = "header";
	})(SchemaItemType = exports.SchemaItemType || (exports.SchemaItemType = {}));
	// 
	var SchemaViewerFieldAllType;
	(function (SchemaViewerFieldAllType) {
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_BLANK"] = "blank";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_RELATIONAL"] = "relational";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_CUBE"] = "cube";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_DATETIME"] = "datetime";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_DATE"] = "date";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_TIME"] = "time";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_TEXT"] = "text";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_NUMBER"] = "number";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_CURRENCY"] = "currency";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_BOOL"] = "bool";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_HIERARCHY"] = "hierarchy";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_LEVEL"] = "level";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_ATTRIBUTE"] = "attribute";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_FOLDER_CLOSED"] = "folder-closed";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_FOLDER_OPEN"] = "folder-open";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_GROUP"] = "grp";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_GROUP"] = "invalid-grp";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_SVR_GRP"] = "svr-grp";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_SVR_GRP"] = "invalid-svr-grp";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_NUMERIC_BIN_O"] = "numeric-bin-o";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_NUMERIC_BIN_Q"] = "numeric-bin-q";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_NUMERIC_BIN"] = "invalid-numeric-bin";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_DRILLPATH"] = "drillpath";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_VALID_SYSGRP"] = "valid-sysgrp";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_SYSGRP"] = "invalid-sysgrp";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_CAT_BIN"] = "cat-bin";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_CAT_BIN_GEOGAPHIC_O"] = "cat-bin-geogaphic-o";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_CAT_BIN_GEOGAPHIC_Q"] = "cat-bin-geogaphic-q";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_CAT_BIN"] = "invalid-cat-bin";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_CAT_BIN_GEOGAPHIC_O"] = "invalid-cat-bin-geogaphic-o";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_CAT_BIN_GEOGAPHIC_Q"] = "invalid-cat-bin-geogaphic-q";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_GEOGRAPHIC"] = "geographic";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_GEOGRAPHIC_O"] = "invalid-geographic-o";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_GEOGRAPHIC_Q"] = "invalid-geographic-q";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_IDENT_SET"] = "ident-set";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_INVALID_IDENT_SET"] = "invalid-ident-set";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_TABLE"] = "table";
	    // 
	    SchemaViewerFieldAllType["SchemaViewerFieldAllType__SVT_ALL_NONE"] = "none";
	})(SchemaViewerFieldAllType = exports.SchemaViewerFieldAllType || (exports.SchemaViewerFieldAllType = {}));
	// 
	var SchemaViewerFieldCubeMeasureType;
	(function (SchemaViewerFieldCubeMeasureType) {
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_BLANK"] = "cube-m-blank";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_FOLDER_CLOSED"] = "cube-m-folder-closed";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_FOLDER_OPEN"] = "cube-m-folder-open";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_DATETIME"] = "cube-m-datetime";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_DATE"] = "cube-m-date";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_TIME"] = "cube-m-time";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_TEXT"] = "cube-m-text";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_NUMBER"] = "cube-m-number";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_CURRENCY"] = "cube-m-currency";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_BOOLEAN"] = "cube-m-boolean";
	    // 
	    SchemaViewerFieldCubeMeasureType["SchemaViewerFieldCubeMeasureType__SVT_CUBE_M_GEOGRAPHIC"] = "cube-m-geographic";
	})(SchemaViewerFieldCubeMeasureType = exports.SchemaViewerFieldCubeMeasureType || (exports.SchemaViewerFieldCubeMeasureType = {}));
	// 
	var SchemaViewerFieldCubeDimensionType;
	(function (SchemaViewerFieldCubeDimensionType) {
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_BLANK"] = "cube-d-blank";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_HIERARCHY"] = "cube-d-hierarchy";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_LEVEL"] = "cube-d-level";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_HIER_CALC"] = "cube-d-hier-calc";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_LVL_CALC"] = "cube-d-lvl-calc";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_HIER_GEO"] = "cube-d-hier-geo";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_HIER_GEO_CUSTOM"] = "cube-d-hier-geo-custom";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_FOLDER_CLOSED"] = "cube-d-folder-closed";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_FOLDER_OPEN"] = "cube-d-folder-open";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_ATTRIBUTE"] = "cube-d-attribute";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_TEXT"] = "cube-d-text";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_DATETIME"] = "cube-d-datetime";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_DATETIME_INVALID"] = "cube-d-datetime-invalid";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_DATE"] = "cube-d-date";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_DATE_INVALID"] = "cube-d-date-invalid";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_GEOGRAPHIC"] = "cube-d-geographic";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_GEOGRAPHIC_INVALID"] = "cube-d-geographic-invalid";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_GEOGRAPHIC_CUSTOM"] = "cube-d-geographic-custom";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_GEOGRAPHIC_CUSTOM_INVALID"] = "cube-d-geographic-custom-invalid";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_VARYING"] = "cube-d-varying";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_UDA"] = "cube-d-uda";
	    // 
	    SchemaViewerFieldCubeDimensionType["SchemaViewerFieldCubeDimensionType__SVT_CUBE_D_NUMBER"] = "cube-d-number";
	})(SchemaViewerFieldCubeDimensionType = exports.SchemaViewerFieldCubeDimensionType || (exports.SchemaViewerFieldCubeDimensionType = {}));
	// Indicates the selection mode: Single | Multiple.
	var HSMSelectionMode;
	(function (HSMSelectionMode) {
	    // 
	    HSMSelectionMode["Single"] = "selection-mode-single";
	    // 
	    HSMSelectionMode["Multiple"] = "selection-mode-multiple";
	})(HSMSelectionMode = exports.HSMSelectionMode || (exports.HSMSelectionMode = {}));
	// Indicates what default member to use for a hierarchical field.
	var HSMDefaultMemberType;
	(function (HSMDefaultMemberType) {
	    // 
	    HSMDefaultMemberType["UseDefaultMember"] = "use-default-member";
	    // 
	    HSMDefaultMemberType["UseAllMember"] = "use-all-member";
	    // 
	    HSMDefaultMemberType["UseSelectedMember"] = "use-selected-member";
	})(HSMDefaultMemberType = exports.HSMDefaultMemberType || (exports.HSMDefaultMemberType = {}));
	// Hierarchical select model presentation layer notification.
	var HSMNotificationType;
	(function (HSMNotificationType) {
	    // 
	    HSMNotificationType["Updated"] = "hsm-notification-updated";
	    // 
	    HSMNotificationType["MissingMembers"] = "hsm-notification-missing-members";
	})(HSMNotificationType = exports.HSMNotificationType || (exports.HSMNotificationType = {}));
	// Type of hierarchy command selection to be performed.
	var HSMSelectionRequestType;
	(function (HSMSelectionRequestType) {
	    // 
	    HSMSelectionRequestType["SelectMode"] = "hsm-selection-request-select-mode";
	    // 
	    HSMSelectionRequestType["MemberDescendantsState"] = "hsm-selection-request-descendants-state";
	    // 
	    HSMSelectionRequestType["SelectedMemberTuple"] = "hsm-selection-request-selected-member-tuple";
	    // 
	    HSMSelectionRequestType["SelectedMemberCaption"] = "hsm-selection-request-selected-member-caption";
	})(HSMSelectionRequestType = exports.HSMSelectionRequestType || (exports.HSMSelectionRequestType = {}));
	// Type of hierarchy member selection to be performed.
	var HSMMemberSelectRequestType;
	(function (HSMMemberSelectRequestType) {
	    // 
	    HSMMemberSelectRequestType["SelectMember"] = "hsm-member-request-select-member";
	    // 
	    HSMMemberSelectRequestType["SelectSubtree"] = "hsm-member-request-select-subtree";
	    // 
	    HSMMemberSelectRequestType["SelectLevel"] = "hsm-member-request-select-level";
	    // 
	    HSMMemberSelectRequestType["MemberSelect"] = "hsm-member-request-member-select";
	    // 
	    HSMMemberSelectRequestType["MemberLevel"] = "hsm-member-request-member-level";
	})(HSMMemberSelectRequestType = exports.HSMMemberSelectRequestType || (exports.HSMMemberSelectRequestType = {}));
	// Hierarchy level selection state.
	var HSMLevelSelectionState;
	(function (HSMLevelSelectionState) {
	    // 
	    HSMLevelSelectionState["AllSelected"] = "hsm-all-selected";
	    // 
	    HSMLevelSelectionState["NoneSelected"] = "hsm-none-selected";
	    // 
	    HSMLevelSelectionState["SomeSelected"] = "hsm-some-selected";
	    // Used when a query is made of levels that don't exist in the given subtree. We need to distinguish that from none selected which implies that members exist but are not selected.
	    HSMLevelSelectionState["UnknownSelected"] = "hsm-unknown-selected";
	})(HSMLevelSelectionState = exports.HSMLevelSelectionState || (exports.HSMLevelSelectionState = {}));
	// 
	var HSMMemberLoadState;
	(function (HSMMemberLoadState) {
	    // 
	    HSMMemberLoadState["AllLoaded"] = "hsm-all-loaded";
	    // 
	    HSMMemberLoadState["NoneLoaded"] = "hsm-none-loaded";
	    // 
	    HSMMemberLoadState["SomeLoaded"] = "hsm-some-loaded";
	})(HSMMemberLoadState = exports.HSMMemberLoadState || (exports.HSMMemberLoadState = {}));
	// Return value from ConnectionStateController connect methods
	var ConnectionAttemptResult;
	(function (ConnectionAttemptResult) {
	    // All data sources requested are connected.
	    ConnectionAttemptResult["CAR_Connected"] = "connected";
	    // Not all data sources are connected.
	    ConnectionAttemptResult["CAR_NotConnected"] = "not-connected";
	    // The user interrupted the connection flow to edit a connection.
	    ConnectionAttemptResult["CAR_UserEditConnection"] = "user-edit-connection";
	    // The connection is not supported on the current platform.
	    ConnectionAttemptResult["CAR_ConnectionNotSupported"] = "connection-not-supported";
	})(ConnectionAttemptResult = exports.ConnectionAttemptResult || (exports.ConnectionAttemptResult = {}));
	// Return value from ConnectToDataServerSourceCommand::Do
	var DataServerConnectionResult;
	(function (DataServerConnectionResult) {
	    // The data source has been successfully added.
	    DataServerConnectionResult["DSCR_Success"] = "success";
	    // Error that was handled. There's no more to do (ex. cancel, or an exception that the command just printed to the error dialog).
	    DataServerConnectionResult["DSCR_Failure"] = "failure";
	    // Try again after making a new workbook.
	    DataServerConnectionResult["DSCR_RequiresWorkbookDoc"] = "requires-workbook";
	    // Try again after logging back on to Tableau server.
	    DataServerConnectionResult["DSCR_RequiresAuthentication"] = "requires-authentication";
	    // Try again after getting database credentials from the user. Pass them in through the DPI_DatasourceUsername and the DPI_DatasourcePassword parameters.
	    DataServerConnectionResult["DSCR_RequiresDBCredentials"] = "requires-db-credentials";
	    // Try again after associating an OAuth key from the user keychain with the data source.
	    DataServerConnectionResult["DSCR_RequiresOAuthKeyAssociation"] = "requires-oauth-key-association";
	    // The OAuth credentials used to connect to the datasource are not valid.
	    DataServerConnectionResult["DSCR_RequiresValidOAuthKey"] = "requires-valid-oauth-key";
	    // Multiple leaf connections within a federated data source contain errors (e.g., multiple leafs might need credentials).
	    DataServerConnectionResult["DSCR_FederatedError"] = "federated-error";
	})(DataServerConnectionResult = exports.DataServerConnectionResult || (exports.DataServerConnectionResult = {}));
	// Type of error encountered while attempting to connect.
	var ConnectionErrorType;
	(function (ConnectionErrorType) {
	    // Authentication credentials are needed in order to connect.
	    ConnectionErrorType["CET_NeedsAuthentication"] = "needs-authentication";
	    // The data source is provided by Data Server, but no Data Server connection is present.
	    ConnectionErrorType["CET_DataServerDisconnected"] = "data-server-disconnected";
	    // An exception occurred while connecting.  This could be caused by a bad password, or wrong path/url.
	    ConnectionErrorType["CET_ExceptionWhileConnecting"] = "exception-while-connecting";
	    // An exception occurred while trying to connect the data source as a whole.
	    ConnectionErrorType["CET_ExceptionWhileConnectingDataSource"] = "exception-while-connecting-data-source";
	    // The connection is not supported.
	    ConnectionErrorType["CET_ConnectionNotSupported"] = "connection-not-supported";
	    // An unexpected exception occurred.
	    ConnectionErrorType["CET_UnexpectedException"] = "unexpected-exception";
	})(ConnectionErrorType = exports.ConnectionErrorType || (exports.ConnectionErrorType = {}));
	// identifies the piece of the visual
	var VisualPart;
	(function (VisualPart) {
	    // default bucket if type isn't specified
	    VisualPart["VP_Misc"] = "misc";
	    // 
	    VisualPart["VP_Annotations"] = "annotations";
	    // 
	    VisualPart["VP_AxisRules"] = "axis-rules";
	    // 
	    VisualPart["VP_TopAxis"] = "top-axis";
	    // 
	    VisualPart["VP_BottomAxis"] = "bottom-axis";
	    // 
	    VisualPart["VP_LeftAxis"] = "left-axis";
	    // 
	    VisualPart["VP_RightAxis"] = "right-axis";
	    // 
	    VisualPart["VP_Background"] = "background";
	    // 
	    VisualPart["VP_Borders"] = "borders";
	    // 
	    VisualPart["VP_Caption"] = "caption";
	    // 
	    VisualPart["VP_CellBorders"] = "cell-borders";
	    // 
	    VisualPart["VP_Decoration"] = "decoration";
	    // 
	    VisualPart["VP_DropLines"] = "drop-lines";
	    // 
	    VisualPart["VP_XLabels"] = "x-labels";
	    // 
	    VisualPart["VP_YLabels"] = "y-labels";
	    // 
	    VisualPart["VP_Legends"] = "legends";
	    // 
	    VisualPart["VP_Marks"] = "marks";
	    // 
	    VisualPart["VP_MarkLabels"] = "mark-labels";
	    // 
	    VisualPart["VP_MarkTrails"] = "mark-trails";
	    // 
	    VisualPart["VP_ReferenceBands"] = "ref-bands";
	    // 
	    VisualPart["VP_ReferenceLines"] = "ref-lines";
	    // 
	    VisualPart["VP_PaneBorders"] = "pane-borders";
	    // 
	    VisualPart["VP_ScrollBars"] = "scroll-bars";
	    // 
	    VisualPart["VP_Title"] = "title";
	    // 
	    VisualPart["VP_TrendLines"] = "trend-lines";
	    // 
	    VisualPart["VP_UpperMapLayers"] = "upper-map-layers";
	})(VisualPart = exports.VisualPart || (exports.VisualPart = {}));
	// Details of the part within an ElementId
	var SceneModelTypesDetail;
	(function (SceneModelTypesDetail) {
	    // 
	    SceneModelTypesDetail["NoDetail"] = "no-detail";
	    // 
	    SceneModelTypesDetail["MarkDetail"] = "mark-detail";
	    // 
	    SceneModelTypesDetail["LabelDetail"] = "label-detail";
	    // 
	    SceneModelTypesDetail["LabelHandleDetail"] = "label-handle-detail";
	    // 
	    SceneModelTypesDetail["TopLeftHandleDetail"] = "top-left-handle-detail";
	    // 
	    SceneModelTypesDetail["TopMidHandleDetail"] = "top-mid-handle-detail";
	    // 
	    SceneModelTypesDetail["TopRightHandleDetail"] = "top-right-handle-detail";
	    // 
	    SceneModelTypesDetail["RightMidHandleDetail"] = "right-mid-handle-detail";
	    // 
	    SceneModelTypesDetail["BottomRightHandleDetail"] = "bottom-right-handle-detail";
	    // 
	    SceneModelTypesDetail["BottomMidHandleDetail"] = "bottom-mid-handle-detail";
	    // 
	    SceneModelTypesDetail["BottomLeftHandleDetail"] = "bottom-left-handle-detail";
	    // 
	    SceneModelTypesDetail["LeftMidHandleDetail"] = "left-mid-handle-detail";
	    // 
	    SceneModelTypesDetail["LineDetail"] = "line-detail";
	    // 
	    SceneModelTypesDetail["ArrowHandleDetail"] = "arrow-handle-detail";
	    // 
	    SceneModelTypesDetail["TextCenterHandleDetail"] = "text-center-handle-detail";
	    // 
	    SceneModelTypesDetail["TextBoxHandleDetail"] = "text-box-handle-detail";
	    // 
	    SceneModelTypesDetail["MarkArrowHandleDetail"] = "mark-arrow-handle-detail";
	    // 
	    SceneModelTypesDetail["MarkMovableHandleDetail"] = "mark-movable-handle-detail";
	    // 
	    SceneModelTypesDetail["MarkAnchorDetail"] = "mark-anchor-detail";
	})(SceneModelTypesDetail = exports.SceneModelTypesDetail || (exports.SceneModelTypesDetail = {}));
	// 
	var SceneModelTypesHitType;
	(function (SceneModelTypesHitType) {
	    // 
	    SceneModelTypesHitType["NoHit"] = "no-hit";
	    // 
	    SceneModelTypesHitType["AreaHit"] = "area-hit";
	    // 
	    SceneModelTypesHitType["NearHit"] = "near-hit";
	    // 
	    SceneModelTypesHitType["ExactHit"] = "exact-hit";
	})(SceneModelTypesHitType = exports.SceneModelTypesHitType || (exports.SceneModelTypesHitType = {}));
	// 
	var SceneModelTypesHitTestStyle;
	(function (SceneModelTypesHitTestStyle) {
	    // 
	    SceneModelTypesHitTestStyle["BoundsTest"] = "bounds-test";
	    // 
	    SceneModelTypesHitTestStyle["ExactTest"] = "exact-test";
	    // 
	    SceneModelTypesHitTestStyle["RadialDistanceTest"] = "radial-distance-test";
	    // 
	    SceneModelTypesHitTestStyle["LabelTest"] = "label-test";
	})(SceneModelTypesHitTestStyle = exports.SceneModelTypesHitTestStyle || (exports.SceneModelTypesHitTestStyle = {}));
	// 
	var SceneModelTypesHitTestFlags;
	(function (SceneModelTypesHitTestFlags) {
	    // 
	    SceneModelTypesHitTestFlags["HitTestAll"] = "hit-test-all";
	    // 
	    SceneModelTypesHitTestFlags["HitTestIgnoreLabels"] = "hit-test-ignore-labels";
	    // 
	    SceneModelTypesHitTestFlags["HitTestIgnoreAnnotations"] = "hit-test-ignore-annotations";
	    // 
	    SceneModelTypesHitTestFlags["HitTestForOverlay"] = "hit-test-for-overlay";
	})(SceneModelTypesHitTestFlags = exports.SceneModelTypesHitTestFlags || (exports.SceneModelTypesHitTestFlags = {}));
	// 
	var AnnotateEnum;
	(function (AnnotateEnum) {
	    // 
	    AnnotateEnum["AE_Mark"] = "mark";
	    // 
	    AnnotateEnum["AE_Point"] = "point";
	    // 
	    AnnotateEnum["AE_Area"] = "area";
	})(AnnotateEnum = exports.AnnotateEnum || (exports.AnnotateEnum = {}));
	// 
	var MarkEnum;
	(function (MarkEnum) {
	    // 
	    MarkEnum["ME_Auto"] = "auto";
	    // 
	    MarkEnum["ME_On"] = "on";
	    // 
	    MarkEnum["ME_Off"] = "off";
	    // 
	    MarkEnum["ME_Clear"] = "clear";
	})(MarkEnum = exports.MarkEnum || (exports.MarkEnum = {}));
	// 
	var ZoomLevel;
	(function (ZoomLevel) {
	    // 
	    ZoomLevel["ZOOM_ENTIRE_VIEW"] = "zoom-entire-view";
	    // 
	    ZoomLevel["ZOOM_FIT_WIDTH"] = "zoom-fit-width";
	    // 
	    ZoomLevel["ZOOM_FIT_HEIGHT"] = "zoom-fit-height";
	})(ZoomLevel = exports.ZoomLevel || (exports.ZoomLevel = {}));
	// 
	var ActionType;
	(function (ActionType) {
	    // 
	    ActionType["AT_Unknown"] = "unknown";
	    // 
	    ActionType["AT_Brush"] = "brush";
	    // 
	    ActionType["AT_Filter"] = "filter";
	    // 
	    ActionType["AT_URL"] = "url";
	})(ActionType = exports.ActionType || (exports.ActionType = {}));
	// 
	var ShelfDropAction;
	(function (ShelfDropAction) {
	    // 
	    ShelfDropAction["SdaReplace"] = "replace";
	    // 
	    ShelfDropAction["SdaCombine"] = "combine";
	    // 
	    ShelfDropAction["SdaInsert"] = "insert";
	    // 
	    ShelfDropAction["SdaSwap"] = "swap";
	    // 
	    ShelfDropAction["SdaReplaceAll"] = "replace-all";
	})(ShelfDropAction = exports.ShelfDropAction || (exports.ShelfDropAction = {}));
	// 
	var ShelfDropContext;
	(function (ShelfDropContext) {
	    // 
	    ShelfDropContext["ShelfDropContext_None"] = "none";
	    // 
	    ShelfDropContext["ShelfDropContext_Categorical"] = "categorical";
	    // 
	    ShelfDropContext["ShelfDropContext_Quantitative"] = "quantitative";
	})(ShelfDropContext = exports.ShelfDropContext || (exports.ShelfDropContext = {}));
	// Drag/Drop source and target
	var DragDropType;
	(function (DragDropType) {
	    // drag from or drop onto viz
	    DragDropType["DragDrop_Viz"] = "drag-drop-viz";
	    // drag from or drop onto shelf
	    DragDropType["DragDrop_Shelf"] = "drag-drop-shelf";
	    // drag from or drop onto schema
	    DragDropType["DragDrop_Schema"] = "drag-drop-schema";
	    // drag from or drop onto nowhere
	    DragDropType["DragDrop_None"] = "drag-drop-none";
	    // drag from or drop onto calculation editor
	    DragDropType["DragDrop_CalculationEditor"] = "drag-drop-calculation-editor";
	    // drag from pivot window
	    DragDropType["DragDrop_Pivot"] = "drag-drop-pivot";
	})(DragDropType = exports.DragDropType || (exports.DragDropType = {}));
	// Dialog type related to redirect action required by UI
	var CommandRedirectType;
	(function (CommandRedirectType) {
	    // add new data connection dialog
	    CommandRedirectType["CommandRedirect_AddDataConnection"] = "command-redirect-add-data-connection";
	    // confirmation dialog
	    CommandRedirectType["CommandRedirect_Confirmation"] = "command-redirect-confirmation";
	    // shows the format workbook pane
	    CommandRedirectType["CommandRedirect_FormatWorkbook"] = "command-redirect-format-workbook";
	    // notification dialog
	    CommandRedirectType["CommandRedirect_Notification"] = "command-redirect-notification";
	    // show number formatting dialog
	    CommandRedirectType["CommandRedirect_NumberFormat"] = "command-redirect-number-format";
	    // full-featured editor
	    CommandRedirectType["CommandRedirect_Edit"] = "command-redirect-edit";
	    // quick editor
	    CommandRedirectType["CommandRedirect_QuickEdit"] = "command-redirect-quick-edit";
	    // inline rename field
	    CommandRedirectType["CommandRedirect_RenameField"] = "command-redirect-rename-field";
	    // rename sheet dialog
	    CommandRedirectType["CommandRedirect_RenameSheet"] = "command-redirect-rename-sheet";
	    // edit web zone url
	    CommandRedirectType["CommandRedirect_EditWebZoneUrl"] = "command-redirect-edit-web-zone-url";
	    // edit formatting
	    CommandRedirectType["CommandRedirect_EditFormatting"] = "command-redirect-edit-formatting";
	    // categorical bin edit dialog
	    CommandRedirectType["CommandRedirect_CategoricalBinEdit"] = "command-redirect-categorical-bin-edit";
	    // numeric bin edit dialog
	    CommandRedirectType["CommandRedirect_NumericBinEdit"] = "command-redirect-numeric-bin-edit";
	    // rich text dialog
	    CommandRedirectType["CommandRedirect_RichText"] = "command-redirect-rich-text";
	    // delete sheet dialog
	    CommandRedirectType["CommandRedirect_DeleteSheet"] = "command-redirect-delete-sheet";
	    // No redirect required
	    CommandRedirectType["CommandRedirect_None"] = "command-redirect-none";
	})(CommandRedirectType = exports.CommandRedirectType || (exports.CommandRedirectType = {}));
	// Directives for heuristically interpreting user intent of command
	var HeuristicCommandReinterpretation;
	(function (HeuristicCommandReinterpretation) {
	    // Directs Tableau to not reinterpret specifics of the command
	    HeuristicCommandReinterpretation["DoNotReinterpretCommand"] = "do-not-reinterpret-command";
	    // Directs Tableau to guess that when the user selected all items in a filter, the intent was actually to select ALL
	    HeuristicCommandReinterpretation["CategoricalFilter_InferAllWhenEverythingSelected"] = "categorical-filter-infer-all-when-everything-selected";
	})(HeuristicCommandReinterpretation = exports.HeuristicCommandReinterpretation || (exports.HeuristicCommandReinterpretation = {}));
	// filter types
	var FilterType;
	(function (FilterType) {
	    // Quantitative
	    FilterType["FLTR_Quantitative"] = "Quantitative";
	    // Categorical
	    FilterType["FLTR_Categorical"] = "Categorical";
	    // Hierarchical
	    FilterType["FLTR_Hierarchical"] = "Hierarchical";
	    // Relative Date
	    FilterType["FLTR_RelativeDate"] = "RelativeDate";
	    // RelativeDatePick
	    FilterType["FLTR_RelativeDatePick"] = "RelativeDatePick";
	    // NotSpecified
	    FilterType["FLTR_Default"] = "FilterDefault";
	})(FilterType = exports.FilterType || (exports.FilterType = {}));
	// Parameter errors
	var ParameterError;
	(function (ParameterError) {
	    // field aggregation is invalid
	    ParameterError["InvalidAggFields"] = "invalid-agg-fields";
	    // field is invalid
	    ParameterError["InvalidFields"] = "invalid-fields";
	    // filter values are invalid
	    ParameterError["InvalidFilterValues"] = "invalid-filter-values";
	    // date value is invalid
	    ParameterError["InvalidDates"] = "invalid-dates";
	})(ParameterError = exports.ParameterError || (exports.ParameterError = {}));
	// 
	var SelectionType;
	(function (SelectionType) {
	    // 
	    SelectionType["ST_Tuples"] = "tuples";
	    // 
	    SelectionType["ST_Nodes"] = "nodes";
	    // 
	    SelectionType["ST_TrendLines"] = "trend-lines";
	    // 
	    SelectionType["ST_LegendItems"] = "legend-items";
	    // 
	    SelectionType["ST_RefLines"] = "ref-lines";
	    // 
	    SelectionType["ST_Annotations"] = "annotations";
	    // 
	    SelectionType["ST_OrientedNodes"] = "oriented-nodes";
	    // 
	    SelectionType["ST_ShelfFields"] = "shelf-fields";
	})(SelectionType = exports.SelectionType || (exports.SelectionType = {}));
	// 
	var SelectionUpdateType;
	(function (SelectionUpdateType) {
	    // 
	    SelectionUpdateType["SU_ADD"] = "select-add";
	    // 
	    SelectionUpdateType["SU_REMOVE"] = "select-remove";
	    // 
	    SelectionUpdateType["SU_REPLACE"] = "select-replace";
	})(SelectionUpdateType = exports.SelectionUpdateType || (exports.SelectionUpdateType = {}));
	// 
	var SelectOptions;
	(function (SelectOptions) {
	    // No key down
	    SelectOptions["SelectOptionsSimple"] = "select-options-simple";
	    // Ctrl key down
	    SelectOptions["SelectOptionsToggle"] = "select-options-toggle";
	    // Shift key down
	    SelectOptions["SelectOptionsRange"] = "select-options-range";
	    // Usually triggered by right click
	    SelectOptions["SelectOptionsMouseMenu"] = "select-options-menu";
	})(SelectOptions = exports.SelectOptions || (exports.SelectOptions = {}));
	// 
	var Orientation;
	(function (Orientation) {
	    // 
	    Orientation["Vertical"] = "o-vert";
	    // 
	    Orientation["Horizontal"] = "o-horiz";
	    // 
	    Orientation["OAutomatic"] = "o-auto";
	})(Orientation = exports.Orientation || (exports.Orientation = {}));
	// 
	var ScaleType;
	(function (ScaleType) {
	    // 
	    ScaleType["Log"] = "log";
	    // 
	    ScaleType["Linear"] = "linear";
	})(ScaleType = exports.ScaleType || (exports.ScaleType = {}));
	// type of object action applies to
	var SourceType;
	(function (SourceType) {
	    // all sheets in the workbook
	    SourceType["ST_All"] = "all";
	    // all sheets referencing a given datasource
	    SourceType["ST_Datasource"] = "datasource";
	    // worksheet or dashboard
	    SourceType["ST_Sheet"] = "sheet";
	})(SourceType = exports.SourceType || (exports.SourceType = {}));
	// how an action gets activated
	var ActivationMethod;
	(function (ActivationMethod) {
	    // e.g. by picking an option from a context menu
	    ActivationMethod["AM_Explicit"] = "explicitly";
	    // auto activated when marks are selected
	    ActivationMethod["AM_OnSelect"] = "on-select";
	    // auto activated when the user moves the mouse over a mark
	    ActivationMethod["AM_OnHover"] = "on-hover";
	})(ActivationMethod = exports.ActivationMethod || (exports.ActivationMethod = {}));
	// whether an action should be run when selection is cleared
	var OnClear;
	(function (OnClear) {
	    // do nothing, e.g. leave filter in place
	    OnClear["OC_Nothing"] = "nothing";
	    // show all values
	    OnClear["OC_ShowAll"] = "show-all";
	    // exclude everything
	    OnClear["OC_ExcludeAll"] = "exclude-all";
	})(OnClear = exports.OnClear || (exports.OnClear = {}));
	// 
	var MergeOrSplit;
	(function (MergeOrSplit) {
	    // 
	    MergeOrSplit["MOS_MERGE"] = "merge";
	    // 
	    MergeOrSplit["MOS_SPLIT"] = "split";
	})(MergeOrSplit = exports.MergeOrSplit || (exports.MergeOrSplit = {}));
	// 
	var MarkLayoutPrimitive;
	(function (MarkLayoutPrimitive) {
	    // 
	    MarkLayoutPrimitive["ShapePrimitive"] = "shape";
	    // 
	    MarkLayoutPrimitive["LinePrimitive"] = "line";
	    // 
	    MarkLayoutPrimitive["BarPrimitive"] = "bar";
	    // 
	    MarkLayoutPrimitive["PolarBarPrimitive"] = "polar-bar";
	    // 
	    MarkLayoutPrimitive["TextPrimitive"] = "text";
	    // 
	    MarkLayoutPrimitive["LabelPrimitive"] = "label";
	    // 
	    MarkLayoutPrimitive["PiePrimitive"] = "pie";
	    // 
	    MarkLayoutPrimitive["AreaPrimitive"] = "area";
	    // 
	    MarkLayoutPrimitive["PolygonPrimitive"] = "polygon";
	    // 
	    MarkLayoutPrimitive["MultipolygonPrimitive"] = "multipolygon";
	    // 
	    MarkLayoutPrimitive["SquarePrimitive"] = "square";
	})(MarkLayoutPrimitive = exports.MarkLayoutPrimitive || (exports.MarkLayoutPrimitive = {}));
	// Does the PaneType/PrimitiveType/LayoutType triplet result in very specific layout rules?
	var MarkLayoutVizType;
	(function (MarkLayoutVizType) {
	    // No special rules
	    MarkLayoutVizType["Standard"] = "standard";
	    // Generic OO Stacked rules
	    MarkLayoutVizType["OOStacked"] = "oo-stacked";
	    // OO Gantt Stacked rules
	    MarkLayoutVizType["GanttStacked"] = "gantt-stacked";
	    // Treemap
	    MarkLayoutVizType["Treemap"] = "treemap";
	    // Bubble Chart -- OO Packed circles or shapes
	    MarkLayoutVizType["Bubble"] = "bubble";
	    // Wordle
	    MarkLayoutVizType["Wordle"] = "wordle";
	    // Highlight Table
	    MarkLayoutVizType["Highlight"] = "highlight";
	})(MarkLayoutVizType = exports.MarkLayoutVizType || (exports.MarkLayoutVizType = {}));
	// 
	var MarkLayoutHandleSpecials;
	(function (MarkLayoutHandleSpecials) {
	    // 
	    MarkLayoutHandleSpecials["CategoricalAxis"] = "categorical-axis";
	    // 
	    MarkLayoutHandleSpecials["ShowSpecials"] = "show-specials";
	    // 
	    MarkLayoutHandleSpecials["OmitSpecials"] = "omit-specials";
	    // 
	    MarkLayoutHandleSpecials["BreakOnSpecials"] = "break-on-specials";
	})(MarkLayoutHandleSpecials = exports.MarkLayoutHandleSpecials || (exports.MarkLayoutHandleSpecials = {}));
	// 
	var MarkLayoutMarkFlag;
	(function (MarkLayoutMarkFlag) {
	    // mark does not connect to the next mark
	    MarkLayoutMarkFlag["End"] = "end";
	    // last mark in a multi-primitive
	    MarkLayoutMarkFlag["EndPrimitive"] = "endprimitive";
	    // last mark has an edge connector to first mark
	    MarkLayoutMarkFlag["ClosedPrimitive"] = "closedprimitive";
	    // visual marker should be displayed
	    MarkLayoutMarkFlag["Marked"] = "marked";
	    // visual marker should be displayed if labelled
	    MarkLayoutMarkFlag["MarkedIfLabel"] = "markediflabel";
	    // display debug information
	    MarkLayoutMarkFlag["Debug"] = "debug";
	    // user flags can begin here
	    MarkLayoutMarkFlag["User"] = "user";
	})(MarkLayoutMarkFlag = exports.MarkLayoutMarkFlag || (exports.MarkLayoutMarkFlag = {}));
	// 
	var MarkLayoutPaneFlag;
	(function (MarkLayoutPaneFlag) {
	    // Allows scene to be panned in the X direction
	    MarkLayoutPaneFlag["EnablePanX"] = "enable-pan-x";
	    // Allows scene to be panned in the Y direction
	    MarkLayoutPaneFlag["EnablePanY"] = "enable-pan-y";
	    // Allows the positions of marks to be scaled in the X direction as the view is zoomed
	    MarkLayoutPaneFlag["EnableZoomX"] = "enable-zoom-x";
	    // Allows the positions of marks to be scaled in the Y direction as the view is zoomed
	    MarkLayoutPaneFlag["EnableZoomY"] = "enable-zoom-y";
	    // Allows the size of marks to be scaled in the X direction as the view is zoomed; requires width in domain coordinates
	    MarkLayoutPaneFlag["EnableScaleX"] = "enable-scale-x";
	    // Allows the size of marks to be scaled in the Y direction as the view is zoomed; requires height in domain coordinates
	    MarkLayoutPaneFlag["EnableScaleY"] = "enable-scale-y";
	    // Clip to cell borders in the x direction
	    MarkLayoutPaneFlag["ClipToCellX"] = "clip-to-cell-x";
	    // Clip to cell borders in the y direction
	    MarkLayoutPaneFlag["ClipToCellY"] = "clip-to-cell-y";
	    // Use cell clipping for selection
	    MarkLayoutPaneFlag["ClipToCellForSelection"] = "clip-to-cell-for-selection";
	    // The x-axis is on top of pane
	    MarkLayoutPaneFlag["XAxisOnTop"] = "x-axis-on-top";
	    // The y-axis is on the right of pane
	    MarkLayoutPaneFlag["YAxisOnRight"] = "y-axis-on-right";
	    // The pane has cells in the x axis
	    MarkLayoutPaneFlag["HasCellsX"] = "has-cells-x";
	    // The pane has cells in the y axis
	    MarkLayoutPaneFlag["HasCellsY"] = "has-cells-y";
	})(MarkLayoutPaneFlag = exports.MarkLayoutPaneFlag || (exports.MarkLayoutPaneFlag = {}));
	// 
	var MarkLayoutDropLineFlag;
	(function (MarkLayoutDropLineFlag) {
	    // Show drop lines on selected mark
	    MarkLayoutDropLineFlag["DropLineShowSelected"] = "dropline-show-selected";
	    // Show drop lines on all marks
	    MarkLayoutDropLineFlag["DropLineShowAll"] = "dropline-show-all";
	    // Drop line to x-axis
	    MarkLayoutDropLineFlag["DropLineX"] = "dropline-x";
	    // Drop line to y-axis
	    MarkLayoutDropLineFlag["DropLineY"] = "dropline-y";
	    // Show labels on drop lines
	    MarkLayoutDropLineFlag["DropLineLabels"] = "dropline-labels";
	})(MarkLayoutDropLineFlag = exports.MarkLayoutDropLineFlag || (exports.MarkLayoutDropLineFlag = {}));
	// Identifies the offset for a particular table in the array of tables in PDMarksPresModel
	var MarkLayoutDataTableID;
	(function (MarkLayoutDataTableID) {
	    // The table that contains the mark information
	    MarkLayoutDataTableID["MarkTable"] = "mark-table";
	    // The table that contains text runs for text marks and labels
	    MarkLayoutDataTableID["TextRunTable"] = "text-run-table";
	    // The table that contains text styles for each text run.
	    MarkLayoutDataTableID["TextStyleTable"] = "text-style-table";
	})(MarkLayoutDataTableID = exports.MarkLayoutDataTableID || (exports.MarkLayoutDataTableID = {}));
	// Which labeling algorithm should be used?  Closely related to MarkLayout::VizType
	var LabelLayoutType;
	(function (LabelLayoutType) {
	    // No labels
	    LabelLayoutType["LABEL_LAYOUT_NONE"] = "unlabeled";
	    // Treemap - labels inside the rectangles
	    LabelLayoutType["LABEL_LAYOUT_TREEMAP"] = "treemap-labels";
	    // Bubble Chart - labels inside the shapes
	    LabelLayoutType["LABEL_LAYOUT_BUBBLECHART"] = "bubble-labels";
	    // Scatterplot - dynamic best-fit labels
	    LabelLayoutType["LABEL_LAYOUT_SCATTERPLOT"] = "scatterplot-labels";
	    // Standard labeling
	    LabelLayoutType["LABEL_LAYOUT_STANDARD"] = "standard-labels";
	    // Highlight table
	    LabelLayoutType["LABEL_LAYOUT_HIGHLIGHT_TABLE"] = "highlight-table-labels";
	})(LabelLayoutType = exports.LabelLayoutType || (exports.LabelLayoutType = {}));
	// MarkLayer represents the layers of a mark given the various states
	var MarkLayer;
	(function (MarkLayer) {
	    // 
	    MarkLayer["NormalUnder"] = "normalUnder";
	    // 
	    MarkLayer["NormalOn"] = "normalOn";
	    // 
	    MarkLayer["SelectedUnder"] = "selectedUnder";
	    // 
	    MarkLayer["SelectedOn"] = "selectedOn";
	    // 
	    MarkLayer["HighlightedUnder"] = "highlightedUnder";
	    // 
	    MarkLayer["HighlightedOn"] = "highlightedOn";
	    // 
	    MarkLayer["EdgeUnder"] = "edgeUnder";
	    // 
	    MarkLayer["EdgeOn"] = "edgeOn";
	    // 
	    MarkLayer["Border"] = "border";
	    // 
	    MarkLayer["SelectedUnder1"] = "selectedUnder1";
	    // 
	    MarkLayer["SelectedOn1"] = "selectedOn1";
	    // 
	    MarkLayer["UnSelectedCustomShape"] = "unSelectedCustomShape";
	    // 
	    MarkLayer["NormalAlphaMask"] = "normalAlphaMask";
	    // 
	    MarkLayer["HaloAlphaMask"] = "haloAlphaMask";
	    // 
	    MarkLayer["HighlightedUnder1"] = "highlightedUnder1";
	    // 
	    MarkLayer["HighlightedOn1"] = "highlightedOn1";
	    // 
	    MarkLayer["SelectedEdgeUnder"] = "selectedEdgeUnder";
	    // 
	    MarkLayer["BlobUnder"] = "blobUnder";
	    // 
	    MarkLayer["BlobOn"] = "blobOn";
	    // 
	    MarkLayer["HoverOverlay"] = "hoverOverlay";
	    // 
	    MarkLayer["PressedOverlay"] = "pressedOverlay";
	})(MarkLayer = exports.MarkLayer || (exports.MarkLayer = {}));
	// ColorOverrideMode represents the different ways in which mark colors may be modified.
	var ColorOverrideMode;
	(function (ColorOverrideMode) {
	    // 
	    ColorOverrideMode["ColorOverrideNone"] = "colorOverrideNone";
	    // 
	    ColorOverrideMode["ColorOverrideFog"] = "colorOverrideFog";
	    // 
	    ColorOverrideMode["ColorOverrideOpaque"] = "colorOverrideOpaque";
	    // 
	    ColorOverrideMode["ColorOverrideReplaceAlpha"] = "colorOverrideReplaceAlpha";
	    // 
	    ColorOverrideMode["ColorOverrideCount"] = "colorOverrideCount";
	})(ColorOverrideMode = exports.ColorOverrideMode || (exports.ColorOverrideMode = {}));
	// ColorTransformMode represents the different ways in which mark colors may be modified.
	var ColorTransformMode;
	(function (ColorTransformMode) {
	    // 
	    ColorTransformMode["ColorTransformNone"] = "colorTransformNone";
	    // 
	    ColorTransformMode["ColorTransformFog"] = "colorTransformFog";
	    // 
	    ColorTransformMode["ColorTransformOpaque"] = "colorTransformOpaque";
	    // 
	    ColorTransformMode["ColorTransformOverrideColor"] = "colorTransformOverrideColor";
	    // 
	    ColorTransformMode["ColorTransformOverrideAlpha"] = "colorTransformOverrideAlpha";
	})(ColorTransformMode = exports.ColorTransformMode || (exports.ColorTransformMode = {}));
	// MarkState represents valid states for a mark.
	var MarkState;
	(function (MarkState) {
	    // 
	    MarkState["MarkStateNormal"] = "markStateNormal";
	    // 
	    MarkState["MarkStateHighlighted"] = "markStateHighlighted";
	    // 
	    MarkState["MarkStateSelected"] = "markStateSelected";
	    // 
	    MarkState["MarkStateInvisible"] = "markStateInvisible";
	})(MarkState = exports.MarkState || (exports.MarkState = {}));
	// LineState represents valid states for a line multi-mark.
	var LineState;
	(function (LineState) {
	    // 
	    LineState["LineStateNormal"] = "lineStateNormal";
	    // 
	    LineState["LineStateHighlighted"] = "lineStateHighlighted";
	    // 
	    LineState["LineStateSelected"] = "lineStateSelected";
	})(LineState = exports.LineState || (exports.LineState = {}));
	// RenderPass represents each pass over the scene elements as each layer is rendered.
	var RenderPass;
	(function (RenderPass) {
	    // 
	    RenderPass["NormalUnderPass"] = "normalUnderPass";
	    // 
	    RenderPass["NormalOnPass"] = "normalOnPass";
	    // 
	    RenderPass["HighlightedUnderPass"] = "highlightedUnderPass";
	    // 
	    RenderPass["HighlightedOnPass"] = "highlightedOnPass";
	    // 
	    RenderPass["SelectedUnderPass"] = "selectedUnderPass";
	    // 
	    RenderPass["SelectedOnPass"] = "selectedOnPass";
	    // 
	    RenderPass["RenderPassCount"] = "renderPassCount";
	})(RenderPass = exports.RenderPass || (exports.RenderPass = {}));
	// The role associated with a scene element. This allows the draw ordering to be more efficient.
	var ElementRole;
	(function (ElementRole) {
	    // 
	    ElementRole["ModelContainerRole"] = "modelContainerRole";
	    // 
	    ElementRole["BackgroundRole"] = "backgroundRole";
	    // 
	    ElementRole["UnderMarkRole"] = "underMarkRole";
	    // 
	    ElementRole["MarkRole"] = "markRole";
	    // 
	    ElementRole["UnderLabelRole"] = "underLabelRole";
	    // 
	    ElementRole["LabelRole"] = "labelRole";
	    // 
	    ElementRole["ForegroundRole"] = "foregroundRole";
	})(ElementRole = exports.ElementRole || (exports.ElementRole = {}));
	// 
	var PathElement;
	(function (PathElement) {
	    // 
	    PathElement["PathMoveTo"] = "moveto";
	    // 
	    PathElement["PathLineTo"] = "lineto";
	    // 
	    PathElement["PathCurveTo"] = "curveto";
	})(PathElement = exports.PathElement || (exports.PathElement = {}));
	// The serialization is still duplicated in JsonUtils::ZoneUtils::ZoneNames and types.js
	var ZoneType;
	(function (ZoneType) {
	    // 
	    ZoneType["ZT_Invalid"] = "invalid";
	    // section: name = worksheet name
	    ZoneType["ZT_Viz"] = "viz";
	    // 
	    ZoneType["ZT_ColorLegend"] = "color";
	    // 
	    ZoneType["ZT_ShapeLegend"] = "shape";
	    // 
	    ZoneType["ZT_SizeLegend"] = "size";
	    // 
	    ZoneType["ZT_MapLegend"] = "map";
	    // param = field name
	    ZoneType["ZT_QuickFilter"] = "filter";
	    // param = field name
	    ZoneType["ZT_Highlighter"] = "highlighter";
	    // 
	    ZoneType["ZT_CurrPage"] = "current-page";
	    // section: name unused
	    ZoneType["ZT_Empty"] = "empty";
	    // param = title
	    ZoneType["ZT_Title"] = "title";
	    // param = text
	    ZoneType["ZT_Text"] = "text";
	    // param = file name
	    ZoneType["ZT_Bitmap"] = "bitmap";
	    // param = URL
	    ZoneType["ZT_Web"] = "web";
	    // param = add-in id
	    ZoneType["ZT_AddIn"] = "add-in";
	    // param = field name
	    ZoneType["ZT_ParamCtrl"] = "paramctrl";
	    // 
	    ZoneType["ZT_FlipboardNav"] = "flipboard-nav";
	    // 
	    ZoneType["ZT_Flipboard"] = "flipboard";
	    // section: layout
	    ZoneType["ZT_LayoutBasic"] = "layout-basic";
	    // 
	    ZoneType["ZT_LayoutFlow"] = "layout-flow";
	    // 
	    ZoneType["ZT_LayoutFreeForm"] = "layout-free-form";
	    // used only for enum iteration
	    ZoneType["ZT_End"] = "end";
	})(ZoneType = exports.ZoneType || (exports.ZoneType = {}));
	// 
	var ContentType;
	(function (ContentType) {
	    // section: name = worksheet name
	    ContentType["CT_Viz"] = "viz";
	    // 
	    ContentType["CT_ColorLegend"] = "color";
	    // 
	    ContentType["CT_ShapeLegend"] = "shape";
	    // 
	    ContentType["CT_SizeLegend"] = "size";
	    // 
	    ContentType["CT_MapLegend"] = "map";
	    // param = field name
	    ContentType["CT_QuickFilter"] = "filter";
	    // param = field name
	    ContentType["CT_Highlighter"] = "highlighter";
	    // 
	    ContentType["CT_CurrPage"] = "current-page";
	    // param = field name
	    ContentType["CT_ParamCtrl"] = "paramctrl";
	    // param = title
	    ContentType["CT_Title"] = "title";
	    // param = text
	    ContentType["CT_Text"] = "text";
	    // param = file name
	    ContentType["CT_Bitmap"] = "bitmap";
	    // param = URL
	    ContentType["CT_Web"] = "web";
	    // param = add-in id
	    ContentType["CT_AddIn"] = "add-in";
	    // 
	    ContentType["CT_FlipboardNav"] = "flipboard-nav";
	    // 
	    ContentType["CT_Flipboard"] = "flipboard";
	    // Denotes that this zone has no content and therefore has a meaningful layout type
	    ContentType["CT_None"] = "content-none";
	})(ContentType = exports.ContentType || (exports.ContentType = {}));
	// 
	var ZoneLayoutType;
	(function (ZoneLayoutType) {
	    // section: layout
	    ZoneLayoutType["ZLT_Basic"] = "basic";
	    // 
	    ZoneLayoutType["ZLT_FreeForm"] = "free-form";
	    // 
	    ZoneLayoutType["ZLT_Flow"] = "flow";
	    // 
	    ZoneLayoutType["ZLT_DistributeEvenly"] = "distribute-evenly";
	    // 
	    ZoneLayoutType["ZLT_Trivial"] = "trivial";
	})(ZoneLayoutType = exports.ZoneLayoutType || (exports.ZoneLayoutType = {}));
	// Rectanlges in the box model
	var BoxType;
	(function (BoxType) {
	    // bounding rectangle in the box model
	    BoxType["BT_Bounding"] = "bounding";
	    // border rectangle in the box model excluding margins
	    BoxType["BT_Border"] = "border";
	    // content reactnage in the box model excluding margins plus borders and paddings
	    BoxType["BT_Content"] = "content";
	})(BoxType = exports.BoxType || (exports.BoxType = {}));
	// Represents the type of command to be performed on the z-order of a zone
	var ModifyZoneZOrderCommandType;
	(function (ModifyZoneZOrderCommandType) {
	    // 
	    ModifyZoneZOrderCommandType["ModifyZoneZOrderCommandFront"] = "front";
	    // 
	    ModifyZoneZOrderCommandType["ModifyZoneZOrderCommandBack"] = "back";
	    // 
	    ModifyZoneZOrderCommandType["ModifyZoneZOrderCommandRelativePos"] = "rel-pos";
	})(ModifyZoneZOrderCommandType = exports.ModifyZoneZOrderCommandType || (exports.ModifyZoneZOrderCommandType = {}));
	// Enumeration of valid horizontal alignments for text regions.
	var TextRegionHAlign;
	(function (TextRegionHAlign) {
	    // 
	    TextRegionHAlign["THA_Left"] = "h-align-left";
	    // 
	    TextRegionHAlign["THA_Center"] = "h-align-center";
	    // 
	    TextRegionHAlign["THA_Right"] = "h-align-right";
	    // 
	    TextRegionHAlign["THA_Automatic"] = "h-align-auto";
	})(TextRegionHAlign = exports.TextRegionHAlign || (exports.TextRegionHAlign = {}));
	// Enumeration of valid vertical alignments for text regions.
	var TextRegionVAlign;
	(function (TextRegionVAlign) {
	    // 
	    TextRegionVAlign["TVA_Bottom"] = "v-align-bottom";
	    // 
	    TextRegionVAlign["TVA_Center"] = "v-align-center";
	    // 
	    TextRegionVAlign["TVA_Top"] = "v-align-top";
	    // 
	    TextRegionVAlign["TVA_Automatic"] = "v-align-auto";
	})(TextRegionVAlign = exports.TextRegionVAlign || (exports.TextRegionVAlign = {}));
	// 
	var AutoCompleteItemType;
	(function (AutoCompleteItemType) {
	    // 
	    AutoCompleteItemType["ACIT_Invalid"] = "invalid";
	    // 
	    AutoCompleteItemType["ACIT_Field"] = "field";
	    // 
	    AutoCompleteItemType["ACIT_Function"] = "func";
	    // 
	    AutoCompleteItemType["ACIT_Separator"] = "separator";
	    // 
	    AutoCompleteItemType["ACIT_Header"] = "header";
	})(AutoCompleteItemType = exports.AutoCompleteItemType || (exports.AutoCompleteItemType = {}));
	// 
	var CalculationContext;
	(function (CalculationContext) {
	    // 
	    CalculationContext["CC_CalculationDialog"] = "calculation-dialog";
	    // 
	    CalculationContext["CC_TypeInPill"] = "type-in-pill";
	    // 
	    CalculationContext["CC_FilterTop"] = "filter-top";
	    // 
	    CalculationContext["CC_FilterCondition"] = "filter-condition";
	    // 
	    CalculationContext["CC_JoinCalcDialog"] = "join-calc-dialog";
	})(CalculationContext = exports.CalculationContext || (exports.CalculationContext = {}));
	// 
	var ForecastComponentType;
	(function (ForecastComponentType) {
	    // 
	    ForecastComponentType["ForecastComponentType__ETS_NONE"] = "ets-none";
	    // 
	    ForecastComponentType["ForecastComponentType__ETS_ADDITIVE"] = "ets-additive";
	    // 
	    ForecastComponentType["ForecastComponentType__ETS_MULTIPLICATIVE"] = "ets-multiplicative";
	})(ForecastComponentType = exports.ForecastComponentType || (exports.ForecastComponentType = {}));
	// 
	var PredictionIntervalAxis;
	(function (PredictionIntervalAxis) {
	    // 
	    PredictionIntervalAxis["PI_AXIS_NONE"] = "none";
	    // 
	    PredictionIntervalAxis["PI_AXIS_X"] = "axis-x";
	    // 
	    PredictionIntervalAxis["PI_AXIS_Y"] = "axis-y";
	})(PredictionIntervalAxis = exports.PredictionIntervalAxis || (exports.PredictionIntervalAxis = {}));
	// Indicates the type of quick filter
	var QuickFilterType;
	(function (QuickFilterType) {
	    // 
	    QuickFilterType["QFT_Unknown"] = "unknown";
	    // 
	    QuickFilterType["QFT_Quantitative"] = "quantitative";
	    // 
	    QuickFilterType["QFT_RelativeDate"] = "relative-date";
	    // 
	    QuickFilterType["QFT_Hierarchy"] = "hierarchy";
	    // 
	    QuickFilterType["QFT_Categorical"] = "categorical";
	})(QuickFilterType = exports.QuickFilterType || (exports.QuickFilterType = {}));
	// Indicates a categorical UI control
	var QuickFilterCategoricalCtrl;
	(function (QuickFilterCategoricalCtrl) {
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_Readout"] = "readout";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_Slider"] = "slider";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_StepBtns"] = "step-buttons";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_AllBtn"] = "all-buttons";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_FilterState"] = "filterstate-button";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_Search"] = "search";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_Domain"] = "domain";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_MoreFewerButton"] = "morefewer-button";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_Exclude"] = "exclude";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_Mode"] = "mode";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_Levels"] = "levels";
	    // 
	    QuickFilterCategoricalCtrl["QuickFilterCategoricalCtrl__QFCC_ApplyButton"] = "apply-button";
	})(QuickFilterCategoricalCtrl = exports.QuickFilterCategoricalCtrl || (exports.QuickFilterCategoricalCtrl = {}));
	// Indicates a categorical mode
	var QuickFilterCategoricalMode;
	(function (QuickFilterCategoricalMode) {
	    // 
	    QuickFilterCategoricalMode["QuickFilterCategoricalMode__QFCM_CheckList"] = "check-list";
	    // 
	    QuickFilterCategoricalMode["QuickFilterCategoricalMode__QFCM_RadioList"] = "radio-list";
	    // 
	    QuickFilterCategoricalMode["QuickFilterCategoricalMode__QFCM_Dropdown"] = "dropdown";
	    // 
	    QuickFilterCategoricalMode["QuickFilterCategoricalMode__QFCM_Slider"] = "slider";
	    // 
	    QuickFilterCategoricalMode["QuickFilterCategoricalMode__QFCM_Pattern"] = "pattern";
	    // 
	    QuickFilterCategoricalMode["QuickFilterCategoricalMode__QFCM_TypeInList"] = "type-in-list";
	    // 
	    QuickFilterCategoricalMode["QuickFilterCategoricalMode__QFCM_CheckDropdown"] = "check-dropdown";
	})(QuickFilterCategoricalMode = exports.QuickFilterCategoricalMode || (exports.QuickFilterCategoricalMode = {}));
	// Indicates a quantitative UI control
	var QuickFilterQuantitativeCtrl;
	(function (QuickFilterQuantitativeCtrl) {
	    // 
	    QuickFilterQuantitativeCtrl["QuickFilterQuantitativeCtrl__QFQC_Readouts"] = "readouts";
	    // 
	    QuickFilterQuantitativeCtrl["QuickFilterQuantitativeCtrl__QFQC_Slider"] = "slider";
	    // 
	    QuickFilterQuantitativeCtrl["QuickFilterQuantitativeCtrl__QFQC_NullCtrls"] = "null-controls";
	    // 
	    QuickFilterQuantitativeCtrl["QuickFilterQuantitativeCtrl__QFQC_ReldatePicker"] = "rel-date-picker";
	    // 
	    QuickFilterQuantitativeCtrl["QuickFilterQuantitativeCtrl__QFQC_Domain"] = "domain";
	    // 
	    QuickFilterQuantitativeCtrl["QuickFilterQuantitativeCtrl__QFQC_MoreFewerButton"] = "morefewer-button";
	    // 
	    QuickFilterQuantitativeCtrl["QuickFilterQuantitativeCtrl__QFQC_FilterState"] = "filterstate-button";
	})(QuickFilterQuantitativeCtrl = exports.QuickFilterQuantitativeCtrl || (exports.QuickFilterQuantitativeCtrl = {}));
	// Indicates a quantitative mode
	var QuickFilterQuantitativeMode;
	(function (QuickFilterQuantitativeMode) {
	    // 
	    QuickFilterQuantitativeMode["QuickFilterQuantitativeMode__QFQM_MinMax"] = "min-max";
	    // 
	    QuickFilterQuantitativeMode["QuickFilterQuantitativeMode__QFQM_MinOnly"] = "min-only";
	    // 
	    QuickFilterQuantitativeMode["QuickFilterQuantitativeMode__QFQM_MaxOnly"] = "max-only";
	    // 
	    QuickFilterQuantitativeMode["QuickFilterQuantitativeMode__QFQM_RelDate"] = "rel-date";
	    // 
	    QuickFilterQuantitativeMode["QuickFilterQuantitativeMode__QFQM_RelPick"] = "rel-pick";
	})(QuickFilterQuantitativeMode = exports.QuickFilterQuantitativeMode || (exports.QuickFilterQuantitativeMode = {}));
	// Where is rendering happening - client or server
	var RenderMode;
	(function (RenderMode) {
	    // 
	    RenderMode["RenderModeServer"] = "render-mode-server";
	    // 
	    RenderMode["RenderModeClient"] = "render-mode-client";
	})(RenderMode = exports.RenderMode || (exports.RenderMode = {}));
	// 
	var AddOrRemoveMarks;
	(function (AddOrRemoveMarks) {
	    // 
	    AddOrRemoveMarks["AORM_ADD"] = "add";
	    // 
	    AddOrRemoveMarks["AORM_REMOVE"] = "remove";
	})(AddOrRemoveMarks = exports.AddOrRemoveMarks || (exports.AddOrRemoveMarks = {}));
	// 
	var VisualDocEnumsGeoSearchVisibility;
	(function (VisualDocEnumsGeoSearchVisibility) {
	    // 
	    VisualDocEnumsGeoSearchVisibility["GSV_On"] = "on";
	    // 
	    VisualDocEnumsGeoSearchVisibility["GSV_Off"] = "off";
	})(VisualDocEnumsGeoSearchVisibility = exports.VisualDocEnumsGeoSearchVisibility || (exports.VisualDocEnumsGeoSearchVisibility = {}));
	// 
	var VisualDocEnumsMapScaleVisibility;
	(function (VisualDocEnumsMapScaleVisibility) {
	    // 
	    VisualDocEnumsMapScaleVisibility["MSV_On"] = "on";
	    // 
	    VisualDocEnumsMapScaleVisibility["MSV_Off"] = "off";
	})(VisualDocEnumsMapScaleVisibility = exports.VisualDocEnumsMapScaleVisibility || (exports.VisualDocEnumsMapScaleVisibility = {}));
	// 
	var VisualDocEnumsAutoDrillVisibility;
	(function (VisualDocEnumsAutoDrillVisibility) {
	    // 
	    VisualDocEnumsAutoDrillVisibility["ADV_On"] = "on";
	    // 
	    VisualDocEnumsAutoDrillVisibility["ADV_Off"] = "off";
	})(VisualDocEnumsAutoDrillVisibility = exports.VisualDocEnumsAutoDrillVisibility || (exports.VisualDocEnumsAutoDrillVisibility = {}));
	// 
	var VisualDocEnumsMapToolSelection;
	(function (VisualDocEnumsMapToolSelection) {
	    // 
	    VisualDocEnumsMapToolSelection["MT_Pan_Map"] = "pan-map";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Rectangular_Selection"] = "rectangular-selection";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Radial_Selection"] = "radial-selection";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Zoom_In"] = "zoom-in";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Zoom_Out"] = "zoom-out";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Single_Selection"] = "single-selection";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Lasso_Selection"] = "lasso-selection";
	    // 
	    VisualDocEnumsMapToolSelection["MT_All_Selection_Tools"] = "all-selection-tools";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Area_Zoom"] = "area-zoom";
	    // 
	    VisualDocEnumsMapToolSelection["MT_No_Tools"] = "no-tools";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Advanced_Selection_Tools"] = "advanced-selection-tools";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Map_Tools"] = "map-tools";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Non_Map_Tools"] = "non-map-tools";
	    // 
	    VisualDocEnumsMapToolSelection["MT_Tool_Mask"] = "tool-mask";
	})(VisualDocEnumsMapToolSelection = exports.VisualDocEnumsMapToolSelection || (exports.VisualDocEnumsMapToolSelection = {}));
	// 
	var VisualDocEnumsFloatingToolbarVisibility;
	(function (VisualDocEnumsFloatingToolbarVisibility) {
	    // 
	    VisualDocEnumsFloatingToolbarVisibility["FTV_Auto"] = "auto";
	    // 
	    VisualDocEnumsFloatingToolbarVisibility["FTV_Show"] = "show";
	    // 
	    VisualDocEnumsFloatingToolbarVisibility["FTV_Hide"] = "hide";
	})(VisualDocEnumsFloatingToolbarVisibility = exports.VisualDocEnumsFloatingToolbarVisibility || (exports.VisualDocEnumsFloatingToolbarVisibility = {}));
	// 
	var VisualDocEnumsVizNavigationSetting;
	(function (VisualDocEnumsVizNavigationSetting) {
	    // 
	    VisualDocEnumsVizNavigationSetting["NAV_Auto"] = "auto";
	    // 
	    VisualDocEnumsVizNavigationSetting["NAV_Fixed"] = "fixed";
	})(VisualDocEnumsVizNavigationSetting = exports.VisualDocEnumsVizNavigationSetting || (exports.VisualDocEnumsVizNavigationSetting = {}));
	// 
	var VisualDocEnumsZoomType;
	(function (VisualDocEnumsZoomType) {
	    // 
	    VisualDocEnumsZoomType["Percent"] = "percent";
	    // 
	    VisualDocEnumsZoomType["EntireView"] = "entire-view";
	    // 
	    VisualDocEnumsZoomType["FitWidth"] = "fit-width";
	    // 
	    VisualDocEnumsZoomType["FitHeight"] = "fit-height";
	})(VisualDocEnumsZoomType = exports.VisualDocEnumsZoomType || (exports.VisualDocEnumsZoomType = {}));
	// 
	var SheetScrollDirection;
	(function (SheetScrollDirection) {
	    // scroll-first
	    SheetScrollDirection["SheetScrollFirst"] = "scroll-first";
	    // scroll-prev
	    SheetScrollDirection["SheetScrollPrev"] = "scroll-prev";
	    // scroll-next
	    SheetScrollDirection["SheetScrollNext"] = "scroll-next";
	    // scroll-last
	    SheetScrollDirection["SheetScrollLast"] = "scroll-last";
	})(SheetScrollDirection = exports.SheetScrollDirection || (exports.SheetScrollDirection = {}));
	// aggregation type for perspectives
	var PerspectiveUtilsAggregateType;
	(function (PerspectiveUtilsAggregateType) {
	    // 
	    PerspectiveUtilsAggregateType["REALITY"] = "reality";
	    // 
	    PerspectiveUtilsAggregateType["FIRST"] = "first-time-in-cube";
	    // 
	    PerspectiveUtilsAggregateType["LAST"] = "latest-time-in-cube";
	    // 
	    PerspectiveUtilsAggregateType["CUSTOM_FOR_CUBE"] = "custom-for-cube";
	    // 
	    PerspectiveUtilsAggregateType["CUSTOM_PER_ATTRIBUTE"] = "custom-per-attribute";
	})(PerspectiveUtilsAggregateType = exports.PerspectiveUtilsAggregateType || (exports.PerspectiveUtilsAggregateType = {}));
	// 
	var ZoneEdgeMove;
	(function (ZoneEdgeMove) {
	    // 
	    ZoneEdgeMove["EdgeDrag"] = "edge-drag";
	    // 
	    ZoneEdgeMove["EdgeSnapAlign"] = "edge-snap-align";
	    // 
	    ZoneEdgeMove["EdgeSnapPosition"] = "edge-snap-position";
	})(ZoneEdgeMove = exports.ZoneEdgeMove || (exports.ZoneEdgeMove = {}));
	// 
	var FormatControlType;
	(function (FormatControlType) {
	    // 
	    FormatControlType["FCT_NONE"] = "fct-none";
	    // 
	    FormatControlType["FCT_Color"] = "fct-color";
	    // 
	    FormatControlType["FCT_Font"] = "fct-font";
	    // 
	    FormatControlType["FCT_Border"] = "fct-border";
	    // 
	    FormatControlType["FCT_Stroke"] = "fct-stroke";
	    // 
	    FormatControlType["FCT_Number"] = "fct-number";
	    // 
	    FormatControlType["FCT_Layout"] = "fct-layout";
	    // 
	    FormatControlType["FCT_Text"] = "fct-text";
	    // 
	    FormatControlType["FCT_OptColor"] = "fct-optcolor";
	    // 
	    FormatControlType["FCT_BandColor"] = "fct-bandcolor";
	    // 
	    FormatControlType["FCT_BandSize"] = "fct-bandsize";
	    // 
	    FormatControlType["FCT_BandLevel"] = "fct-bandlevel";
	    // 
	    FormatControlType["FCT_DivLevel"] = "fct-divlevel";
	    // 
	    FormatControlType["FCT_SpecValsText"] = "fct-specvalstext";
	    // 
	    FormatControlType["FCT_SpecValsGraph"] = "fct-specvalsgraph";
	    // 
	    FormatControlType["FCT_HAlign"] = "fct-halign";
	    // 
	    FormatControlType["FCT_Orient"] = "fct-orient";
	    // 
	    FormatControlType["FCT_Rounding"] = "fct-rounding";
	    // 
	    FormatControlType["FCT_LineEnd"] = "fct-lineend";
	    // 
	    FormatControlType["FCT_LineEndSize"] = "fct-lineendsize";
	    // 
	    FormatControlType["FCT_BodyType"] = "fct-bodytype";
	    // 
	    FormatControlType["FCT_AlphaLevel"] = "fct-alphalevel";
	    // 
	    FormatControlType["FCT_LineInterpolation"] = "fct-line-interpolation";
	    // 
	    FormatControlType["FCT_LineMarkerPosition"] = "fct-line-marker-position";
	    // 
	    FormatControlType["FCT_MarkBorder"] = "fct-markborder";
	    // 
	    FormatControlType["FCT_MarkHalo"] = "fct-markhalo";
	    // 
	    FormatControlType["FCT_MarkMarkers"] = "fct-markmarkers";
	    // 
	    FormatControlType["FCT_RefLinePalette"] = "fct-reflinepalette";
	    // 
	    FormatControlType["FCT_Reverse"] = "fct-reverse";
	    // 
	    FormatControlType["FCT_Whiskers"] = "fct-whiskers";
	    // 
	    FormatControlType["FCT_BoxplotPalette"] = "fct-boxplotpalette";
	    // 
	    FormatControlType["FCT_SolidStroke"] = "fct-solidstroke";
	    // 
	    FormatControlType["FCT_BoxplotStyle"] = "fct-boxplotstyle";
	    // 
	    FormatControlType["FCT_BoxplotCompoundFill"] = "fct-boxplotcompoundfill";
	})(FormatControlType = exports.FormatControlType || (exports.FormatControlType = {}));
	// 
	var FormatControlFlag;
	(function (FormatControlFlag) {
	    // 
	    FormatControlFlag["FCF_VisualStylesheet"] = "fcf_visualstylesheet";
	    // 
	    FormatControlFlag["FCF_PaneStylesheet"] = "fcf_panestylesheet";
	    // 
	    FormatControlFlag["FCF_FixedScope"] = "fcf_fixedscope";
	    // 
	    FormatControlFlag["FCF_AllowTransparency"] = "fcf_allowtransparency";
	})(FormatControlFlag = exports.FormatControlFlag || (exports.FormatControlFlag = {}));
	// 
	var AppConfigEnum;
	(function (AppConfigEnum) {
	    // default directory where Tableau finds data sources, logs, shapes, etc.
	    AppConfigEnum["ACS_RepositoryDir"] = "repository-dir";
	    // application directory
	    AppConfigEnum["ACS_ApplicationDir"] = "application-dir";
	    // sample workbooks directory
	    AppConfigEnum["ACS_SamplesDir"] = "samples-dir";
	})(AppConfigEnum = exports.AppConfigEnum || (exports.AppConfigEnum = {}));
	// 
	var DeltaType;
	(function (DeltaType) {
	    // 
	    DeltaType["DELTA_NONE"] = "none";
	    // 
	    DeltaType["DELTA_ADDED"] = "added";
	    // 
	    DeltaType["DELTA_EDITED"] = "edited";
	    // 
	    DeltaType["DELTA_REMOVED"] = "removed";
	})(DeltaType = exports.DeltaType || (exports.DeltaType = {}));
	// 
	var ExtractType;
	(function (ExtractType) {
	    // 
	    ExtractType["ExtractType_All"] = "extract-type-all";
	    // 
	    ExtractType["ExtractType_Some"] = "extract-type-some";
	    // 
	    ExtractType["ExtractType_None"] = "extract-type-none";
	})(ExtractType = exports.ExtractType || (exports.ExtractType = {}));
	// 
	var ExtractRefreshStatus;
	(function (ExtractRefreshStatus) {
	    // 
	    ExtractRefreshStatus["ExtractRefresh_None"] = "extract-refresh-none";
	    // 
	    ExtractRefreshStatus["ExtractRefresh_Pending"] = "extract-refresh-pending";
	    // 
	    ExtractRefreshStatus["ExtractRefresh_InProgress"] = "extract-refresh-inprogress";
	    // 
	    ExtractRefreshStatus["ExtractRefresh_Done"] = "extract-refresh-done";
	    // 
	    ExtractRefreshStatus["ExtractRefresh_Error"] = "extract-refresh-error";
	    // 
	    ExtractRefreshStatus["ExtractRefresh_Canceled"] = "extract-refresh-canceled";
	})(ExtractRefreshStatus = exports.ExtractRefreshStatus || (exports.ExtractRefreshStatus = {}));
	// 
	var MapUnitSelectionEnum;
	(function (MapUnitSelectionEnum) {
	    // 
	    MapUnitSelectionEnum["MUS_Automatic"] = "automatic";
	    // 
	    MapUnitSelectionEnum["MUS_Metric"] = "metric";
	    // 
	    MapUnitSelectionEnum["MUS_US"] = "us";
	})(MapUnitSelectionEnum = exports.MapUnitSelectionEnum || (exports.MapUnitSelectionEnum = {}));
	// 
	var DataConnectionHistoryRefreshType;
	(function (DataConnectionHistoryRefreshType) {
	    // 
	    DataConnectionHistoryRefreshType["RT_FULL"] = "full";
	    // 
	    DataConnectionHistoryRefreshType["RT_INCREMENT"] = "increment";
	    // 
	    DataConnectionHistoryRefreshType["RT_APPEND_FROM_DATA_SOURCE"] = "append-from-data-source";
	    // 
	    DataConnectionHistoryRefreshType["RT_APPEND_FROM_FILE"] = "append-from-file";
	})(DataConnectionHistoryRefreshType = exports.DataConnectionHistoryRefreshType || (exports.DataConnectionHistoryRefreshType = {}));
	// 
	var CalcStyle;
	(function (CalcStyle) {
	    // 
	    CalcStyle["SCE_STYLE_DEFAULT"] = "style_default";
	    // 
	    CalcStyle["SCE_STYLE_PRIMARY_FIELD"] = "style_prim_field";
	    // 
	    CalcStyle["SCE_STYLE_SECONDARY_FIELD"] = "style_sec_field";
	    // 
	    CalcStyle["SCE_STYLE_LOCAL_FUNCTION"] = "style_local_func";
	    // 
	    CalcStyle["SCE_STYLE_REMOTE_FUNCTION"] = "style_remote_func";
	    // 
	    CalcStyle["SCE_STYLE_PARAMETER"] = "style_param";
	    // 
	    CalcStyle["SCE_STYLE_COMMENT"] = "style_comment";
	    // 
	    CalcStyle["SCE_STYLE_INVALID_FIELD"] = "style_invalid_field";
	    // 
	    CalcStyle["SCE_STYLE_TABLE_EXPR"] = "style_table_expr";
	    // 
	    CalcStyle["SCE_STYLE_STRING"] = "style_string";
	    // 
	    CalcStyle["SCE_STYLE_DISABLED"] = "style_disabled";
	    // 
	    CalcStyle["SCE_STYLE_DRAG_OVER_FIELD"] = "style_drag_over_field";
	    // 
	    CalcStyle["SCE_STYLE_DRAG_OVER_SEL"] = "style_drag_over_sel";
	    // 
	    CalcStyle["SCE_STYLE_SELECTION"] = "style_selection";
	})(CalcStyle = exports.CalcStyle || (exports.CalcStyle = {}));
	// 
	var FunctionGroup;
	(function (FunctionGroup) {
	    // 
	    FunctionGroup["FG_NUMERIC"] = "num";
	    // 
	    FunctionGroup["FG_STRING"] = "str";
	    // 
	    FunctionGroup["FG_DATE"] = "date";
	    // 
	    FunctionGroup["FG_CAST"] = "cast";
	    // 
	    FunctionGroup["FG_LOGICAL"] = "logic";
	    // 
	    FunctionGroup["FG_AGGREGATE"] = "agg";
	    // 
	    FunctionGroup["FG_OPERATOR"] = "oper";
	    // 
	    FunctionGroup["FG_SYSTEM"] = "sys";
	    // 
	    FunctionGroup["FG_PASSTHRU"] = "pass";
	    // 
	    FunctionGroup["FG_SPECIAL"] = "spec";
	    // 
	    FunctionGroup["FG_USER"] = "user";
	    // 
	    FunctionGroup["FG_TABLECALC"] = "table";
	})(FunctionGroup = exports.FunctionGroup || (exports.FunctionGroup = {}));
	// 
	var FunctionArgType;
	(function (FunctionArgType) {
	    // 
	    FunctionArgType["FAT_NONE"] = "none";
	    // 
	    FunctionArgType["FAT_BOOL"] = "boolean";
	    // 
	    FunctionArgType["FAT_REAL"] = "real";
	    // 
	    FunctionArgType["FAT_INT"] = "integer";
	    // 
	    FunctionArgType["FAT_STR"] = "str";
	    // 
	    FunctionArgType["FAT_DATETIME"] = "datetime";
	    // 
	    FunctionArgType["FAT_DATE"] = "date";
	    // 
	    FunctionArgType["FAT_LOCALSTR"] = "locstr";
	    // 
	    FunctionArgType["FAT_NULL"] = "nil";
	    // 
	    FunctionArgType["FAT_ERROR"] = "err";
	    // 
	    FunctionArgType["FAT_ANY"] = "any";
	    // 
	    FunctionArgType["FAT_BIN"] = "bin";
	    // 
	    FunctionArgType["FAT_TUPLE"] = "tup";
	    // 
	    FunctionArgType["FAT_LOCALREAL"] = "locreal";
	    // 
	    FunctionArgType["FAT_LOCALINT"] = "locint";
	    // 
	    FunctionArgType["FAT_SPATIAL"] = "spatial";
	})(FunctionArgType = exports.FunctionArgType || (exports.FunctionArgType = {}));
	// logical position of activity such as Began or Ended
	var ActivityDisposition;
	(function (ActivityDisposition) {
	    // no activity
	    ActivityDisposition["NoDisposition"] = "no-disposition";
	    // activity has began
	    ActivityDisposition["Began"] = "began";
	    // activity has ended
	    ActivityDisposition["Ended"] = "ended";
	    // activity has occurred but neither began nor ended is known
	    ActivityDisposition["Occurred"] = "occurred";
	    // indefinite activity is executing
	    ActivityDisposition["Active"] = "active";
	    // indefinite activity has yielded (e.g., idle, waiting, sleeping, quiesce)
	    ActivityDisposition["Idle"] = "idle";
	})(ActivityDisposition = exports.ActivityDisposition || (exports.ActivityDisposition = {}));
	// result of activity such as Success and Failure
	var ActivityResult;
	(function (ActivityResult) {
	    // activity has no result
	    ActivityResult["NoResult"] = "no-result";
	    // activity ended with success
	    ActivityResult["Succeeded"] = "succeeded";
	    // activity ended with failure
	    ActivityResult["Failed"] = "failure";
	    // activity ended with thrown exception
	    ActivityResult["ThrewException"] = "threw-exception";
	    // activity ended due to a timeout
	    ActivityResult["TimedOut"] = "timed-out";
	    // activity was canceled
	    ActivityResult["Canceled"] = "canceled";
	    // activity has unknown result
	    ActivityResult["UnknownResult"] = "unknown-result";
	})(ActivityResult = exports.ActivityResult || (exports.ActivityResult = {}));
	// type of analytics object
	var AnalyticsObjectType;
	(function (AnalyticsObjectType) {
	    // 
	    AnalyticsObjectType["ConstantReferenceLine"] = "constant-reference-line";
	    // 
	    AnalyticsObjectType["AverageReferenceLine"] = "average-reference-line";
	    // 
	    AnalyticsObjectType["CustomReferenceLine"] = "custom-reference-line";
	    // 
	    AnalyticsObjectType["CustomReferenceBand"] = "custom-reference-band";
	    // 
	    AnalyticsObjectType["AverageAndNinetyFive"] = "average-and-ninety-five";
	    // 
	    AnalyticsObjectType["MedianAndNinetyFive"] = "median-and-ninety-five";
	    // 
	    AnalyticsObjectType["CustomDistributionBand"] = "custom-distribution-band";
	    // 
	    AnalyticsObjectType["Boxplot"] = "boxplot";
	    // 
	    AnalyticsObjectType["CustomBoxplot"] = "custom-boxplot";
	    // 
	    AnalyticsObjectType["Totals"] = "totals";
	    // 
	    AnalyticsObjectType["TrendLineObject"] = "trend-line-object";
	    // 
	    AnalyticsObjectType["Forecast"] = "forecast";
	    // 
	    AnalyticsObjectType["Cluster"] = "cluster";
	    // 
	    AnalyticsObjectType["Outlier"] = "outlier";
	    // 
	    AnalyticsObjectType["MedianAndQuartiles"] = "median-and-quartiles";
	    // 
	    AnalyticsObjectType["Unknown"] = "unknown";
	})(AnalyticsObjectType = exports.AnalyticsObjectType || (exports.AnalyticsObjectType = {}));
	// target where an analytics object may be dropped
	var AnalyticsObjectDropTarget;
	(function (AnalyticsObjectDropTarget) {
	    // 
	    AnalyticsObjectDropTarget["TargetCell"] = "target-cell";
	    // 
	    AnalyticsObjectDropTarget["TargetPane"] = "target-pane";
	    // 
	    AnalyticsObjectDropTarget["TargetTable"] = "target-table";
	    // 
	    AnalyticsObjectDropTarget["TargetLinear"] = "target-linear";
	    // 
	    AnalyticsObjectDropTarget["TargetLog"] = "target-log";
	    // 
	    AnalyticsObjectDropTarget["TargetExponential"] = "target-exponential";
	    // 
	    AnalyticsObjectDropTarget["TargetPolynomial"] = "target-polynomial";
	    // 
	    AnalyticsObjectDropTarget["TargetPower"] = "target-power";
	    // 
	    AnalyticsObjectDropTarget["TargetForecast"] = "target-forecast";
	    // 
	    AnalyticsObjectDropTarget["TargetCluster"] = "target-cluster";
	    // 
	    AnalyticsObjectDropTarget["TargetOutlier"] = "target-outlier";
	    // 
	    AnalyticsObjectDropTarget["TargetSubtotals"] = "target-subtotals";
	    // 
	    AnalyticsObjectDropTarget["TargetColumnTotals"] = "target-column-totals";
	    // 
	    AnalyticsObjectDropTarget["TargetRowTotals"] = "target-row-totals";
	})(AnalyticsObjectDropTarget = exports.AnalyticsObjectDropTarget || (exports.AnalyticsObjectDropTarget = {}));
	// 
	var CalcApplyResult;
	(function (CalcApplyResult) {
	    // caption for new calculation is invalid
	    CalcApplyResult["INVALID_CAPTION"] = "invalid-caption-for-new-calc";
	    // formula is invalid
	    CalcApplyResult["INVALID_FORMULA"] = "invalid-formula";
	    // successfully applied
	    CalcApplyResult["SUCCEED"] = "succeed";
	})(CalcApplyResult = exports.CalcApplyResult || (exports.CalcApplyResult = {}));
	// 
	var UIAutomationCommandStatus;
	(function (UIAutomationCommandStatus) {
	    // 
	    UIAutomationCommandStatus["UIAutomationCommandStatus_Success"] = "success";
	    // 
	    UIAutomationCommandStatus["UIAutomationCommandStatus_UnsupportedControlTypeError"] = "unsupported-control-type-error";
	    // 
	    UIAutomationCommandStatus["UIAutomationCommandStatus_UnsupportedActionError"] = "unsupported-action-error";
	    // 
	    UIAutomationCommandStatus["UIAutomationCommandStatus_ComponentNotFoundError"] = "component-not-found-error";
	    // 
	    UIAutomationCommandStatus["UIAutomationCommandStatus_UnknownError"] = "unknown-error";
	    // 
	    UIAutomationCommandStatus["UIAutomationCommandStatus_SaveError"] = "save-error";
	    // 
	    UIAutomationCommandStatus["UIAutomationCommandStatus_BadInputError"] = "bad-input-error";
	})(UIAutomationCommandStatus = exports.UIAutomationCommandStatus || (exports.UIAutomationCommandStatus = {}));
	// 
	var DropWhen;
	(function (DropWhen) {
	    // 
	    DropWhen["DropWhenNever"] = "never";
	    // 
	    DropWhen["DropWhenAlways"] = "always";
	    // 
	    DropWhen["DropWhenSelected"] = "when-selected";
	})(DropWhen = exports.DropWhen || (exports.DropWhen = {}));
	// 
	var ValueDomainType;
	(function (ValueDomainType) {
	    // invalid domain
	    ValueDomainType["DOMAIN_INVALID"] = "domain-invalid";
	    // user can type in any value they please" 1
	    ValueDomainType["DOMAIN_FREE_ENTRY"] = "domain-free-entry";
	    // user must select a value from the list
	    ValueDomainType["DOMAIN_LIST"] = "domain-list";
	    // user can freely enter values as long as they are above min value
	    ValueDomainType["DOMAIN_MIN"] = "domain-min";
	    // user can freely enter values as long as they are below max value
	    ValueDomainType["DOMAIN_MAX"] = "domain-max";
	})(ValueDomainType = exports.ValueDomainType || (exports.ValueDomainType = {}));
	// 
	var OperationType;
	(function (OperationType) {
	    // 
	    OperationType["Equals"] = "equals";
	    // 
	    OperationType["NotEquals"] = "not-equals";
	    // 
	    OperationType["LessThan"] = "less-than";
	    // 
	    OperationType["LessThanEqual"] = "less-than-equal";
	    // 
	    OperationType["GreaterThan"] = "greater-than";
	    // 
	    OperationType["GreaterThanEqual"] = "greater-than-equal";
	    // 
	    OperationType["RangeInclusive"] = "range-inclusive";
	})(OperationType = exports.OperationType || (exports.OperationType = {}));
	// 
	var DropFieldResult;
	(function (DropFieldResult) {
	    // 
	    DropFieldResult["DropFieldNo"] = "no";
	    // 
	    DropFieldResult["DropFieldYes"] = "yes";
	    // 
	    DropFieldResult["DropFieldLock"] = "lock";
	    // 
	    DropFieldResult["DropFieldFilter"] = "filter";
	    // 
	    DropFieldResult["DropFieldDisaggregate"] = "disaggregate";
	})(DropFieldResult = exports.DropFieldResult || (exports.DropFieldResult = {}));
	// resolution type for a name conflict
	var NameConflictResolution;
	(function (NameConflictResolution) {
	    // 
	    NameConflictResolution["NRC_UseOld"] = "use-old";
	    // 
	    NameConflictResolution["NRC_UseNew"] = "use-new";
	    // 
	    NameConflictResolution["NRC_RenameNew"] = "rename-new";
	})(NameConflictResolution = exports.NameConflictResolution || (exports.NameConflictResolution = {}));
	// use either a string separator or a set number of characters
	var SeparatorType;
	(function (SeparatorType) {
	    // 
	    SeparatorType["SeparatorType__StringSeparator"] = "string-separator";
	    // 
	    SeparatorType["SeparatorType__CharacterCountSeparator"] = "character-count-separator";
	})(SeparatorType = exports.SeparatorType || (exports.SeparatorType = {}));
	// split globally or only on the first occurrence or only on the last occurrence
	var SplitMode;
	(function (SplitMode) {
	    // 
	    SplitMode["SplitMode__CS_ALL"] = "split-all";
	    // 
	    SplitMode["SplitMode__CS_FIRST"] = "split-first";
	    // 
	    SplitMode["SplitMode__CS_LAST"] = "split-last";
	})(SplitMode = exports.SplitMode || (exports.SplitMode = {}));
	// 
	var NodeSelectionType;
	(function (NodeSelectionType) {
	    // 
	    NodeSelectionType["NodeSelection_None"] = "none";
	    // 
	    NodeSelectionType["NodeSelection_SingleRow"] = "single-row";
	    // 
	    NodeSelectionType["NodeSelection_MultiRow"] = "multi-row";
	    // 
	    NodeSelectionType["NodeSelection_SingleColumn"] = "single-column";
	    // 
	    NodeSelectionType["NodeSelection_MultiColumn"] = "multi-column";
	    // 
	    NodeSelectionType["NodeSelection_Mixed"] = "mixed";
	})(NodeSelectionType = exports.NodeSelectionType || (exports.NodeSelectionType = {}));
	// icons for Action{Source/Dest}Combo
	var SourceDestIcon;
	(function (SourceDestIcon) {
	    // 
	    SourceDestIcon["SDI_DataSource"] = "data-source";
	    // 
	    SourceDestIcon["SDI_Worksheet"] = "worksheet";
	    // 
	    SourceDestIcon["SDI_Dashboard"] = "dashboard";
	    // 
	    SourceDestIcon["SDI_All"] = "all";
	})(SourceDestIcon = exports.SourceDestIcon || (exports.SourceDestIcon = {}));
	// position and orientation of legends on a sheet
	var LegendLayout;
	(function (LegendLayout) {
	    // 
	    LegendLayout["LL_RightVertical"] = "right-vertical";
	    // 
	    LegendLayout["LL_RightHorizontal"] = "right-horizontal";
	    // 
	    LegendLayout["LL_BottomVertical"] = "bottom-vertical";
	    // 
	    LegendLayout["LL_BottomHorizontal"] = "bottom-horizontal";
	})(LegendLayout = exports.LegendLayout || (exports.LegendLayout = {}));
	// 
	var GetJsonResponseEnum;
	(function (GetJsonResponseEnum) {
	    // the json reponse exists and is valid
	    GetJsonResponseEnum["JSON_OK"] = "ok";
	    // the sheet specified is not valid
	    GetJsonResponseEnum["JSON_NO_SHEET"] = "no-sheet";
	    // the field id is invalid for this filter
	    GetJsonResponseEnum["JSON_INVALID_FIELD"] = "invalid-field";
	})(GetJsonResponseEnum = exports.GetJsonResponseEnum || (exports.GetJsonResponseEnum = {}));
	// client metric descriptions
	var ClientMetric;
	(function (ClientMetric) {
	    // Unknown Metric
	    ClientMetric["CM_Unknown"] = "UNKNWN";
	    // Bootstrap Request
	    ClientMetric["CM_BootstrapRequest"] = "BTSTRP";
	    // Process Primary Payload
	    ClientMetric["CM_ProcessPrimaryPayload"] = "PROPRI";
	    // Process Secondary Payload
	    ClientMetric["CM_ProcessSecondaryPayload"] = "PROSEC";
	    // Initialize Models
	    ClientMetric["CM_InitializeModels"] = "MDLINI";
	    // Handle Model Events
	    ClientMetric["CM_HandleModelEvents"] = "MDLEVT";
	    // Execute Local Command
	    ClientMetric["CM_ExecuteLocalCommand"] = "EXELOC";
	    // Execute Remote Command
	    ClientMetric["CM_ExecuteRemoteCommand"] = "EXEREM";
	    // Process Local Command Response
	    ClientMetric["CM_ProcessLocalResponse"] = "PROLOC";
	    // Process Remote Command Response
	    ClientMetric["CM_ProcessRemoteResponse"] = "PROREM";
	    // Render Panetable
	    ClientMetric["CM_RenderPanetable"] = "RNDRPT";
	    // Render Region
	    ClientMetric["CM_RenderRegion"] = "RNDRRG";
	    // Runtime model presmodel conversion
	    ClientMetric["CM_RuntimeConversion"] = "RTCONV";
	    // Client Loaded
	    ClientMetric["CM_ClientLoaded"] = "CLNTLD";
	    // Application Startup
	    ClientMetric["CM_ApplicationStartup"] = "APPSTR";
	    // Application Interactive
	    ClientMetric["CM_ApplicationInteractive"] = "APPINT";
	    // All Zones Loaded
	    ClientMetric["CM_AllZonesLoaded"] = "ALLZNS";
	    // Toolbar Layout
	    ClientMetric["CM_ToolbarLayout"] = "TBRLAY";
	    // Toolbar HandleNewToolbar
	    ClientMetric["CM_ToolbarHandleNewToolbar"] = "TBRHNT";
	    // Toolbar AddToolbar
	    ClientMetric["CM_ToolbarAddToolbar"] = "TBRADD";
	    // Toolbar HandleResize
	    ClientMetric["CM_ToolbarHandleResize"] = "TBRHRE";
	    // JavaScript Module loaded asynchronously
	    ClientMetric["CM_ModuleLoaded"] = "MDLOAD";
	})(ClientMetric = exports.ClientMetric || (exports.ClientMetric = {}));
	// result code for images edit operation
	var ImagesEditResultCode;
	(function (ImagesEditResultCode) {
	    // 
	    ImagesEditResultCode["IER_Success"] = "success";
	    // 
	    ImagesEditResultCode["IER_EmptyCaption"] = "empty-caption";
	    // 
	    ImagesEditResultCode["IER_DuplicateCaption"] = "duplicate-caption";
	    // 
	    ImagesEditResultCode["IER_FailedValidation"] = "failed-validation";
	    // 
	    ImagesEditResultCode["IER_InvalidURL"] = "invalid-url";
	    // 
	    ImagesEditResultCode["IER_EmptyXRange"] = "empty-x-range";
	    // 
	    ImagesEditResultCode["IER_EmptyYRange"] = "empty-y-range";
	    // 
	    ImagesEditResultCode["IER_NoImagePreview"] = "no-image-preview";
	    // 
	    ImagesEditResultCode["IER_RenderException"] = "render-exception";
	    // 
	    ImagesEditResultCode["IER_TableauException"] = "tableau-exception";
	})(ImagesEditResultCode = exports.ImagesEditResultCode || (exports.ImagesEditResultCode = {}));
	// the source of the underlying data used by the data provider
	var DataProviderType;
	(function (DataProviderType) {
	    // 
	    DataProviderType["DP_Datasource"] = "datasource";
	    // 
	    DataProviderType["DP_Selection"] = "selection";
	    // 
	    DataProviderType["DP_Editor"] = "editor";
	    // 
	    DataProviderType["DP_Table"] = "table";
	    // 
	    DataProviderType["DP_SQLQuery"] = "sql-query";
	})(DataProviderType = exports.DataProviderType || (exports.DataProviderType = {}));
	// 
	var DashboardDeviceLayout;
	(function (DashboardDeviceLayout) {
	    // 
	    DashboardDeviceLayout["DashboardDeviceLayout_Default"] = "default";
	    // 
	    DashboardDeviceLayout["DashboardDeviceLayout_Desktop"] = "desktop";
	    // 
	    DashboardDeviceLayout["DashboardDeviceLayout_Tablet"] = "tablet";
	    // 
	    DashboardDeviceLayout["DashboardDeviceLayout_Phone"] = "phone";
	})(DashboardDeviceLayout = exports.DashboardDeviceLayout || (exports.DashboardDeviceLayout = {}));
	// who is calling the device detection logic
	var DeviceSource;
	(function (DeviceSource) {
	    // Nothing special about the caller to the detection logic. This means it is the web browser.
	    DeviceSource["DeviceSource_Unknown"] = "unknown";
	    // the snapshot service for the mobile app
	    DeviceSource["DeviceSource_SnapshotService"] = "snapshot-srv";
	    // the :device url parameter
	    DeviceSource["DeviceSource_UrlParam"] = "url-param";
	})(DeviceSource = exports.DeviceSource || (exports.DeviceSource = {}));
	// 
	var DashboardSizingDimension;
	(function (DashboardSizingDimension) {
	    // 
	    DashboardSizingDimension["NoDimension"] = "no";
	    // 
	    DashboardSizingDimension["MinWidthDimension"] = "minwidth";
	    // 
	    DashboardSizingDimension["MinHeightDimension"] = "minheight";
	    // 
	    DashboardSizingDimension["MaxWidthDimension"] = "maxwidth";
	    // 
	    DashboardSizingDimension["MaxHeightDimension"] = "maxheight";
	    // 
	    DashboardSizingDimension["FixedWidthDimension"] = "fixedwidth";
	    // 
	    DashboardSizingDimension["FixedHeightDimension"] = "fixedheight";
	    // 
	    DashboardSizingDimension["ScrollableHeightDimension"] = "scrollableheight";
	    // 
	    DashboardSizingDimension["MinDimensions"] = "mins";
	    // 
	    DashboardSizingDimension["MaxDimensions"] = "maxs";
	})(DashboardSizingDimension = exports.DashboardSizingDimension || (exports.DashboardSizingDimension = {}));
	// 
	var FlipboardNavType;
	(function (FlipboardNavType) {
	    // 
	    FlipboardNavType["Caption"] = "caption";
	    // 
	    FlipboardNavType["Number"] = "number";
	    // 
	    FlipboardNavType["Dot"] = "dot";
	})(FlipboardNavType = exports.FlipboardNavType || (exports.FlipboardNavType = {}));
	// 
	var DashboardSizingMode;
	(function (DashboardSizingMode) {
	    // 
	    DashboardSizingMode["UnspecifiedSizing"] = "unspecified";
	    // 
	    DashboardSizingMode["AutomaticSizing"] = "automatic";
	    // 
	    DashboardSizingMode["FixedSizing"] = "fixed";
	    // 
	    DashboardSizingMode["RangeSizing"] = "range";
	    // 
	    DashboardSizingMode["VScrollSizing"] = "vscroll";
	})(DashboardSizingMode = exports.DashboardSizingMode || (exports.DashboardSizingMode = {}));
	// 
	var FieldPickerDialogUseCase;
	(function (FieldPickerDialogUseCase) {
	    // 
	    FieldPickerDialogUseCase["FieldPickerDialogUseCase_ReplaceField"] = "replace-field-use-case";
	    // 
	    FieldPickerDialogUseCase["FieldPickerDialogUseCase_CreateIdentitySet"] = "create-identity-set";
	    // 
	    FieldPickerDialogUseCase["FieldPickerDialogUseCase_EditDatasrouceAliases"] = "edit-datasource-aliases-use-case";
	    // 
	    FieldPickerDialogUseCase["FieldPickerDialogUseCase_EditFilters"] = "edit-filters-use-case";
	    // 
	    FieldPickerDialogUseCase["FieldPickerDialogUseCase_ExtractFilter"] = "incremental-extract-use-case";
	})(FieldPickerDialogUseCase = exports.FieldPickerDialogUseCase || (exports.FieldPickerDialogUseCase = {}));
	// 
	var SideType;
	(function (SideType) {
	    // 
	    SideType["ST_Top"] = "top";
	    // 
	    SideType["ST_Right"] = "right";
	    // 
	    SideType["ST_Bottom"] = "bottom";
	    // 
	    SideType["ST_Left"] = "left";
	})(SideType = exports.SideType || (exports.SideType = {}));
	// 
	var WorkgroupPublishErrorType;
	(function (WorkgroupPublishErrorType) {
	    // 
	    WorkgroupPublishErrorType["EA_None"] = "ea-none";
	    // 
	    WorkgroupPublishErrorType["EA_Warning"] = "ea-warning";
	    // 
	    WorkgroupPublishErrorType["EA_Prompt"] = "ea-prompt";
	    // 
	    WorkgroupPublishErrorType["EA_Info"] = "ea-info";
	    // 
	    WorkgroupPublishErrorType["EA_Server"] = "ea-server";
	})(WorkgroupPublishErrorType = exports.WorkgroupPublishErrorType || (exports.WorkgroupPublishErrorType = {}));
	// Indicates whether the user has signed in or is signed into a server
	var ServerConnectionStatus;
	(function (ServerConnectionStatus) {
	    // The user has never signed in
	    ServerConnectionStatus["NeverSignedIn"] = "server-connection-status-never-signed-in";
	    // The user has signed in at least once
	    ServerConnectionStatus["HasSignedIn"] = "server-connection_status-has-signed-in";
	    // Auto sign in will be attempted
	    ServerConnectionStatus["WillAutoSignIn"] = "server-connection_status-will-auto-sign-in";
	    // The user is signed in
	    ServerConnectionStatus["SignedIn"] = "server-connection_status-signed-in";
	})(ServerConnectionStatus = exports.ServerConnectionStatus || (exports.ServerConnectionStatus = {}));
	// Start of Week (Starting Day)
	var SOWValue;
	(function (SOWValue) {
	    // 
	    SOWValue["SOWValue__SOW_SYSTEMDEFAULT"] = "sow-system-default";
	    // 
	    SOWValue["SOWValue__SOW_7DAYPERIOD"] = "sow-7-day-period";
	    // 
	    SOWValue["SOWValue__SOW_SUNDAY"] = "sow-sunday";
	    // 
	    SOWValue["SOWValue__SOW_MONDAY"] = "sow-monday";
	    // 
	    SOWValue["SOWValue__SOW_TUESDAY"] = "sow-tuesday";
	    // 
	    SOWValue["SOWValue__SOW_WEDNESDAY"] = "sow-wednesday";
	    // 
	    SOWValue["SOWValue__SOW_THURSDAY"] = "sow-thursday";
	    // 
	    SOWValue["SOWValue__SOW_FRIDAY"] = "sow-friday";
	    // 
	    SOWValue["SOWValue__SOW_SATURDAY"] = "sow-saturday";
	    // 
	    SOWValue["SOWValue__SOW_ISO8601WEEK"] = "sow-iso8601-week";
	})(SOWValue = exports.SOWValue || (exports.SOWValue = {}));
	// Type of Find to perform
	var FindType;
	(function (FindType) {
	    // Starts With
	    FindType["FindType_Starts"] = "findtype-starts";
	    // Ends With
	    FindType["FindType_Ends"] = "findtype-ends";
	    // Contains
	    FindType["FindType_Contains"] = "findtype-contains";
	    // Exact
	    FindType["FindType_Exact"] = "findtype-exact";
	})(FindType = exports.FindType || (exports.FindType = {}));
	// PerspectiveType of a given PerspectivePresModel
	var PerspectiveEnumPerspectiveType;
	(function (PerspectiveEnumPerspectiveType) {
	    // Reality
	    PerspectiveEnumPerspectiveType["PerspectiveType_Reality"] = "perspectivetype-reality";
	    // First
	    PerspectiveEnumPerspectiveType["PerspectiveType_First"] = "perspectivetype-first";
	    // Last
	    PerspectiveEnumPerspectiveType["PerspectiveType_Last"] = "perspectivetype-last";
	    // Custom
	    PerspectiveEnumPerspectiveType["PerspectiveType_Custom"] = "perspectivetype-custom";
	})(PerspectiveEnumPerspectiveType = exports.PerspectiveEnumPerspectiveType || (exports.PerspectiveEnumPerspectiveType = {}));
	// List of options for what to write out from get-runtime-info
	var RuntimeInfoRuntimeOutput;
	(function (RuntimeInfoRuntimeOutput) {
	    // output the VTL from the producers
	    RuntimeInfoRuntimeOutput["RawVTL"] = "raw-vtl";
	    // output the data store from the producers
	    RuntimeInfoRuntimeOutput["RawStore"] = "raw-store";
	    // output the graph and compiled VTL
	    RuntimeInfoRuntimeOutput["PayloadVTL"] = "payload-vtl";
	    // output the final data store after transforms are run
	    RuntimeInfoRuntimeOutput["FinalStore"] = "final-store";
	    // output the VTL and data store from the producers
	    RuntimeInfoRuntimeOutput["Input"] = "input";
	    // output the final VTL and data store after compilation and running
	    RuntimeInfoRuntimeOutput["Output"] = "output";
	})(RuntimeInfoRuntimeOutput = exports.RuntimeInfoRuntimeOutput || (exports.RuntimeInfoRuntimeOutput = {}));
	// 
	var GeometryType;
	(function (GeometryType) {
	    // 
	    GeometryType["Empty"] = "empty";
	    // 
	    GeometryType["MultiPolygon"] = "multiPolygon";
	    // 
	    GeometryType["MultiPoint"] = "multiPoint";
	    // 
	    GeometryType["MultiLineString"] = "multiLineString";
	})(GeometryType = exports.GeometryType || (exports.GeometryType = {}));
	// 
	var MarkSizingSetting;
	(function (MarkSizingSetting) {
	    // 
	    MarkSizingSetting["MarksScalingAutomatic"] = "marks-scaling-automatic";
	    // 
	    MarkSizingSetting["MarksScalingOn"] = "marks-scaling-on";
	    // 
	    MarkSizingSetting["MarksScalingOff"] = "marks-scaling-off";
	})(MarkSizingSetting = exports.MarkSizingSetting || (exports.MarkSizingSetting = {}));
	// Enumeration for card type on worksheets.
	var CardType;
	(function (CardType) {
	    // CardManager treats zero specially, so we can't start at zero.
	    CardType["Columns"] = "cardtype-columns";
	    // 
	    CardType["Rows"] = "cardtype-rows";
	    // 
	    CardType["Pages"] = "cardtype-pages";
	    // 
	    CardType["CurrentPage"] = "cardtype-currentPage";
	    // 
	    CardType["Filters"] = "cardtype-filters";
	    // 
	    CardType["Marks"] = "cardtype-marks";
	    // 
	    CardType["Measures"] = "cardtype-measures";
	    // 
	    CardType["ColorLegend"] = "cardtype-colorLegend";
	    // 
	    CardType["ShapeLegend"] = "cardtype-shapeLegend";
	    // 
	    CardType["SizeLegend"] = "cardtype-sizeLegend";
	    // 
	    CardType["MapLegend"] = "cardtype-mapLegend";
	    // 
	    CardType["Title"] = "cardtype-title";
	    // 
	    CardType["Caption"] = "cardtype-caption";
	    // 
	    CardType["Summary"] = "cardtype-summary";
	    // 
	    CardType["Parameter"] = "cardtype-parameter";
	    // 
	    CardType["QuickFilter"] = "cardtype-quickFilter";
	    // 
	    CardType["Highlighter"] = "cardtype-highlighter";
	})(CardType = exports.CardType || (exports.CardType = {}));
	// Indicates the type of table data to be displayed.
	var TableViewDataType;
	(function (TableViewDataType) {
	    // Table view with each column is specified by FieldName. DPI_Columns is required.
	    TableViewDataType["TableViewFieldData"] = "table-view-field-data";
	    // Table view where the columns are defined by a group. DPI_FieldName is required.
	    TableViewDataType["TableViewGroupData"] = "table-view-group-data";
	})(TableViewDataType = exports.TableViewDataType || (exports.TableViewDataType = {}));
	// 
	var WarningType;
	(function (WarningType) {
	    // 
	    WarningType["LINK_ERROR"] = "linkerror";
	    // 
	    WarningType["OVERLAP_TEXT"] = "WarnOverlappingText";
	    // 
	    WarningType["INVALID_WORKSHEET"] = "WarnInvalidWorksheet";
	    // 
	    WarningType["OPEN_BOOK"] = "openbook";
	    // 
	    WarningType["OPEN_DATASOURCE"] = "opendatasource";
	    // 
	    WarningType["OPEN_SHEET"] = "opensheet";
	    // 
	    WarningType["LOCALDATA_AMBIGUITY"] = "LocalDataAmbiguity";
	    // 
	    WarningType["LOCALDATA_MISMATCH"] = "LocalDataMismatch";
	    // 
	    WarningType["MISSING_LOCAL_TILE"] = "MissingLocalTiles";
	    // 
	    WarningType["MAP_TILE_DOWNLOAD"] = "MapTileDownloadError";
	    // 
	    WarningType["MAP_TILE_INTERMITTENT"] = "MapTileIntermittent";
	    // 
	    WarningType["MAP_TILE_REGION"] = "MapTileRegion";
	    // 
	    WarningType["MAP_SERVER_FORBIDDEN"] = "MapServerForbidden";
	    // 
	    WarningType["DM_CANNOT_SCORE"] = "DMCannotScore";
	    // 
	    WarningType["DM_SCORING_NOT_REC"] = "DMScoringNotRecommended";
	    // 
	    WarningType["LOCAL_DATA_LIBRARY_MISSING"] = "LocalDataLibraryMissing";
	    // 
	    WarningType["DM_MISSING_MODEL"] = "DMMissingModel";
	    // 
	    WarningType["DI_NO_LINK"] = "DINoLink";
	    // 
	    WarningType["LOCALDATA_NO_GEOMETRY"] = "LocalDataNoGeometry";
	    // 
	    WarningType["LOCALDATA_NO_GEOMETRY_UPGRADE"] = "LocalDataNoGeometryUpgrade";
	    // 
	    WarningType["DI_NO_RELATIONSHIPS"] = "DINoRelationships";
	})(WarningType = exports.WarningType || (exports.WarningType = {}));
	// 
	var WorkbookUIMode;
	(function (WorkbookUIMode) {
	    // 
	    WorkbookUIMode["DataTab"] = "data-tab";
	    // 
	    WorkbookUIMode["Document"] = "document";
	    // 
	    WorkbookUIMode["SheetSorter"] = "sheet-sorter";
	})(WorkbookUIMode = exports.WorkbookUIMode || (exports.WorkbookUIMode = {}));
	// 
	var TopLevelMenuItem;
	(function (TopLevelMenuItem) {
	    // 
	    TopLevelMenuItem["File"] = "file";
	    // 
	    TopLevelMenuItem["Data"] = "data";
	    // 
	    TopLevelMenuItem["Worksheet"] = "worksheet";
	    // 
	    TopLevelMenuItem["Dashboard"] = "dashboard";
	    // 
	    TopLevelMenuItem["Analysis"] = "analysis";
	    // 
	    TopLevelMenuItem["Format"] = "format";
	    // 
	    TopLevelMenuItem["Map"] = "map";
	    // 
	    TopLevelMenuItem["Help"] = "help";
	})(TopLevelMenuItem = exports.TopLevelMenuItem || (exports.TopLevelMenuItem = {}));
	// Enumeration for different types of AddIns (Project Frelard)
	var AddInType;
	(function (AddInType) {
	    // 
	    AddInType["Invalid"] = "invalid";
	    // 
	    AddInType["Dashboard"] = "dashboard";
	})(AddInType = exports.AddInType || (exports.AddInType = {}));
	// Enumeration of different contexts an add-in can run in
	var AddInContext;
	(function (AddInContext) {
	    // 
	    AddInContext["Unknown"] = "unknown";
	    // 
	    AddInContext["Desktop"] = "desktop";
	    // 
	    AddInContext["Server"] = "server";
	})(AddInContext = exports.AddInContext || (exports.AddInContext = {}));
	// Enumeration of different modes an add-in can run in
	var AddInMode;
	(function (AddInMode) {
	    // 
	    AddInMode["Unknown"] = "unknown";
	    // 
	    AddInMode["Authoring"] = "authoring";
	    // 
	    AddInMode["Viewing"] = "viewing";
	})(AddInMode = exports.AddInMode || (exports.AddInMode = {}));
	// Enumeration for data alert types.
	var DataAlertType;
	(function (DataAlertType) {
	    // 
	    DataAlertType["DataPresent"] = "data-present";
	    // 
	    DataAlertType["ConstComparison"] = "const-comparison";
	})(DataAlertType = exports.DataAlertType || (exports.DataAlertType = {}));
	// Enumeration for valid operations in data alert conditions
	var DataAlertConditionOperationType;
	(function (DataAlertConditionOperationType) {
	    // 
	    DataAlertConditionOperationType["GreaterThan"] = "greater-than";
	    // 
	    DataAlertConditionOperationType["GreaterThanEqual"] = "greater-than-equal";
	    // 
	    DataAlertConditionOperationType["Equals"] = "equals";
	    // 
	    DataAlertConditionOperationType["LessThan"] = "less-than";
	    // 
	    DataAlertConditionOperationType["LessThanEqual"] = "less-than-equal";
	})(DataAlertConditionOperationType = exports.DataAlertConditionOperationType || (exports.DataAlertConditionOperationType = {}));
	// Enumeration for modes the data alert dialog could be in
	var DataAlertDialogMode;
	(function (DataAlertDialogMode) {
	    // 
	    DataAlertDialogMode["Create"] = "create";
	    // 
	    DataAlertDialogMode["Edit"] = "edit";
	})(DataAlertDialogMode = exports.DataAlertDialogMode || (exports.DataAlertDialogMode = {}));


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Class containing helper methods for converting from ApiPresModels to their PresLayer equivalents
	 *
	 * @export
	 * @class ApiToPresLayerConverter
	 */
	var ApiToPresLayerConverter = (function () {
	    function ApiToPresLayerConverter() {
	    }
	    ApiToPresLayerConverter.ConvertSheetPath = function (apiSheetPath) {
	        if (!apiSheetPath) {
	            throw new Error('sheetPath not defined');
	        }
	        var result = {
	            sheetName: apiSheetPath.SheetName,
	            isDashboard: apiSheetPath.IsDashboard,
	            storyboard: apiSheetPath.Storyboard || '',
	            flipboardZoneId: apiSheetPath.FlipboardZoneID || 0,
	            storyPointId: apiSheetPath.StoryPointID || 0,
	        };
	        return result;
	    };
	    ApiToPresLayerConverter.ConvertAddInLocator = function (apiAddInLocator) {
	        var result = {
	            addInInstanceId: apiAddInLocator.InstanceId,
	            sheetPath: ApiToPresLayerConverter.ConvertSheetPath(apiAddInLocator.DashboardPath)
	        };
	        return result;
	    };
	    ApiToPresLayerConverter.ConvertVisualId = function (apiVisualid) {
	        var result = {
	            worksheet: apiVisualid.Worksheet,
	            dashboard: apiVisualid.Dashboard,
	            storyboard: apiVisualid.Storyboard,
	            storyPointId: apiVisualid.StoryPointID,
	            flipboardZoneId: apiVisualid.FlipboardZoneID
	        };
	        return result;
	    };
	    return ApiToPresLayerConverter;
	}());
	exports.ApiToPresLayerConverter = ApiToPresLayerConverter;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Enums = __webpack_require__(20);
	var EnumMappings_1 = __webpack_require__(19);
	/**
	 * Contains static helper methods for converting from an underlying data pres model into the api representation.
	 * Most of the code is a direct port from ApiUnderlyingDataHandler.cs
	 * https://opengrok/source/xref/teams_near/workgroup/vqlweb/scriptsharp/src/UI/Api/ApiUnderlyingDataHandler.cs
	 */
	var UnderlyingDataConverter = (function () {
	    function UnderlyingDataConverter() {
	    }
	    UnderlyingDataConverter.BuildColumnModel = function (column, index) {
	        return {
	            DataType: EnumMappings_1.PresLayerToApiEnumMappings.DataType.Convert(column.dataType),
	            FieldName: column.fn,
	            FieldCaption: column.fieldCaption,
	            IsReferenced: !!column.isReferenced,
	            Index: index
	        };
	    };
	    UnderlyingDataConverter.BuildTable = function (dataDictionary, columns) {
	        if (columns.length === 0) {
	            return new Array();
	        }
	        var rowCount = columns[0].formatValIdxs.length;
	        var columnCount = columns.length;
	        var result = new Array(rowCount);
	        // Initialize all of our rows
	        for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
	            result[rowIndex] = new Array(columnCount);
	        }
	        // Go through column-by-column and convert the values
	        for (var columnIndex = 0; columnIndex < columnCount; columnIndex++) {
	            var column = columns[columnIndex];
	            for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
	                var formattedValue = UnderlyingDataConverter.LookupValueFromDictionary(dataDictionary, Enums.DataType.DT_STRING, column.formatValIdxs[rowIndex]);
	                if (formattedValue === null) {
	                    throw new Error('formattedValue was null');
	                }
	                var value = {
	                    Value: UnderlyingDataConverter.LookupValueFromDictionary(dataDictionary, column.dataType, column.valueIndices[rowIndex]),
	                    FormattedValue: formattedValue,
	                    AliasedValue: formattedValue
	                };
	                result[rowIndex][columnIndex] = value;
	            }
	        }
	        return result;
	    };
	    UnderlyingDataConverter.LookupValueFromDictionary = function (dataDictionary, dt, index) {
	        if (index < 0) {
	            // per cl 280396 / bugzid 81197 negative data value index means that it is special
	            dt = Enums.DataType.DT_STRING;
	            index = -index - 1;
	        }
	        var result = null;
	        var rawValue = UnderlyingDataConverter.GetRawValue(dataDictionary, dt, index);
	        if (rawValue !== null) {
	            result = rawValue.toString();
	        }
	        return result;
	    };
	    /* tslint:disable-next-line:no-any */
	    UnderlyingDataConverter.GetRawValue = function (dataDictionary, dt, index) {
	        if (!dataDictionary.dataSegments) {
	            return null;
	        }
	        for (var _i = 0, _a = Object.keys(dataDictionary.dataSegments); _i < _a.length; _i++) {
	            var key = _a[_i];
	            var dataSegment = dataDictionary.dataSegments[key];
	            for (var _b = 0, _c = dataSegment.dataColumns; _b < _c.length; _b++) {
	                var dataColumn = _c[_b];
	                if (!dataColumn || dataColumn.dataType !== dt) {
	                    continue;
	                }
	                if (index < dataColumn.dataValues.length) {
	                    return dataColumn.dataValues[index];
	                }
	                index -= dataColumn.dataValues.length;
	                break;
	            }
	        }
	        return null;
	    };
	    UnderlyingDataConverter.BuildDataTable = function (dataDictionary, columns) {
	        var result = {
	            DataTable: UnderlyingDataConverter.BuildTable(dataDictionary, columns),
	            Headers: columns.map(function (c, i) { return UnderlyingDataConverter.BuildColumnModel(c, i); })
	        };
	        return result;
	    };
	    UnderlyingDataConverter.BuildUnderlyingDataTable = function (isSummary, underlyingDataTable) {
	        var result = {
	            Data: UnderlyingDataConverter.BuildDataTable(underlyingDataTable.dataDictionary, underlyingDataTable.underlyingDataTableColumns),
	            IsSummary: isSummary
	        };
	        return result;
	    };
	    return UnderlyingDataConverter;
	}());
	exports.UnderlyingDataConverter = UnderlyingDataConverter;


/***/ },
/* 23 */
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
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Implementation of the InternalApiDispatcher for desktop. Since this will run in the same
	 * frame as the ApiEventHandler, this class mostly just marshalls down to that implementation
	 *
	 * @export
	 * @class DesktopApiDispatcher
	 * @implements {InternalApiDispatcher}
	 */
	var DesktopApiDispatcher = (function () {
	    function DesktopApiDispatcher(apiEventHandler) {
	        this.apiEventHandler = apiEventHandler;
	    }
	    DesktopApiDispatcher.prototype.SetVersionNumber = function (versionNumber) {
	        this.apiEventHandler.SetVersionNumber(versionNumber);
	    };
	    DesktopApiDispatcher.prototype.Execute = function (verb, parameters) {
	        // Just pass this right through to the ApiEventHandler
	        return this.apiEventHandler.Execute(verb, parameters);
	    };
	    DesktopApiDispatcher.prototype.RegisterNotificationHandler = function (handler) {
	        throw new Error('Method not implemented.');
	    };
	    DesktopApiDispatcher.prototype.UnregisterNotificationHandler = function (handler) {
	        throw new Error('Method not implemented.');
	    };
	    return DesktopApiDispatcher;
	}());
	exports.DesktopApiDispatcher = DesktopApiDispatcher;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var qwebchannel_1 = __webpack_require__(26);
	__webpack_require__(27);
	/**
	 * Initializes the QWebChannel contract and returns the pres layer interop object
	 *
	 * @returns {Promise<AddInApiPresLayerInteropObject>}
	 */
	function InitializeWebChannelPresLayer() {
	    return new Promise(function (resolve, reject) {
	        try {
	            // tslint:disable-next-line
	            new qwebchannel_1.QWebChannel(qt.webChannelTransport, function (channel) {
	                // tslint:disable-next-line
	                var addInPresLayer = channel.objects['addInPresLayer'];
	                resolve(addInPresLayer);
	            });
	        }
	        catch (e) {
	            reject(e);
	        }
	    });
	}
	exports.InitializeWebChannelPresLayer = InitializeWebChannelPresLayer;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/****************************************************************************
	**
	** Copyright (C) 2015 The Qt Company Ltd.
	** Copyright (C) 2014 Klarälvdalens Datakonsult AB, a KDAB Group company, info@kdab.com, author Milian Wolff <milian.wolff@kdab.com>
	** Contact: http://www.qt.io/licensing/
	**
	** This file is part of the QtWebChannel module of the Qt Toolkit.
	**
	** $QT_BEGIN_LICENSE:LGPL21$
	** Commercial License Usage
	** Licensees holding valid commercial Qt licenses may use this file in
	** accordance with the commercial license agreement provided with the
	** Software or, alternatively, in accordance with the terms contained in
	** a written agreement between you and The Qt Company. For licensing terms
	** and conditions see http://www.qt.io/terms-conditions. For further
	** information use the contact form at http://www.qt.io/contact-us.
	**
	** GNU Lesser General Public License Usage
	** Alternatively, this file may be used under the terms of the GNU Lesser
	** General Public License version 2.1 or version 3 as published by the Free
	** Software Foundation and appearing in the file LICENSE.LGPLv21 and
	** LICENSE.LGPLv3 included in the packaging of this file. Please review the
	** following information to ensure the GNU Lesser General Public License
	** requirements will be met: https://www.gnu.org/licenses/lgpl.html and
	** http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html.
	**
	** As a special exception, The Qt Company gives you certain additional
	** rights. These rights are described in The Qt Company LGPL Exception
	** version 1.1, included in the file LGPL_EXCEPTION.txt in this package.
	**
	** $QT_END_LICENSE$
	**
	****************************************************************************/
	
	"use strict";
	
	var QWebChannelMessageTypes = {
	    signal: 1,
	    propertyUpdate: 2,
	    init: 3,
	    idle: 4,
	    debug: 5,
	    invokeMethod: 6,
	    connectToSignal: 7,
	    disconnectFromSignal: 8,
	    setProperty: 9,
	    response: 10,
	};
	
	var QWebChannel = function(transport, initCallback)
	{
	    if (typeof transport !== "object" || typeof transport.send !== "function") {
	        console.error("The QWebChannel expects a transport object with a send function and onmessage callback property." +
	                      " Given is: transport: " + typeof(transport) + ", transport.send: " + typeof(transport.send));
	        return;
	    }
	
	    var channel = this;
	    this.transport = transport;
	
	    this.send = function(data)
	    {
	        if (typeof(data) !== "string") {
	            data = JSON.stringify(data);
	        }
	        channel.transport.send(data);
	    }
	
	    this.transport.onmessage = function(message)
	    {
	        var data = message.data;
	        if (typeof data === "string") {
	            data = JSON.parse(data);
	        }
	        switch (data.type) {
	            case QWebChannelMessageTypes.signal:
	                channel.handleSignal(data);
	                break;
	            case QWebChannelMessageTypes.response:
	                channel.handleResponse(data);
	                break;
	            case QWebChannelMessageTypes.propertyUpdate:
	                channel.handlePropertyUpdate(data);
	                break;
	            default:
	                console.error("invalid message received:", message.data);
	                break;
	        }
	    }
	
	    this.execCallbacks = {};
	    this.execId = 0;
	    this.exec = function(data, callback)
	    {
	        if (!callback) {
	            // if no callback is given, send directly
	            channel.send(data);
	            return;
	        }
	        if (channel.execId === Number.MAX_VALUE) {
	            // wrap
	            channel.execId = Number.MIN_VALUE;
	        }
	        if (data.hasOwnProperty("id")) {
	            console.error("Cannot exec message with property id: " + JSON.stringify(data));
	            return;
	        }
	        data.id = channel.execId++;
	        channel.execCallbacks[data.id] = callback;
	        channel.send(data);
	    };
	
	    this.objects = {};
	
	    this.handleSignal = function(message)
	    {
	        var object = channel.objects[message.object];
	        if (object) {
	            object.signalEmitted(message.signal, message.args);
	        } else {
	            console.warn("Unhandled signal: " + message.object + "::" + message.signal);
	        }
	    }
	
	    this.handleResponse = function(message)
	    {
	        if (!message.hasOwnProperty("id")) {
	            console.error("Invalid response message received: ", JSON.stringify(message));
	            return;
	        }
	        channel.execCallbacks[message.id](message.data);
	        delete channel.execCallbacks[message.id];
	    }
	
	    this.handlePropertyUpdate = function(message)
	    {
	        for (var i in message.data) {
	            var data = message.data[i];
	            var object = channel.objects[data.object];
	            if (object) {
	                object.propertyUpdate(data.signals, data.properties);
	            } else {
	                console.warn("Unhandled property update: " + data.object + "::" + data.signal);
	            }
	        }
	        channel.exec({type: QWebChannelMessageTypes.idle});
	    }
	
	    this.debug = function(message)
	    {
	        channel.send({type: QWebChannelMessageTypes.debug, data: message});
	    };
	
	    channel.exec({type: QWebChannelMessageTypes.init}, function(data) {
	        for (var objectName in data) {
	            var object = new QObject(objectName, data[objectName], channel);
	        }
	        // now unwrap properties, which might reference other registered objects
	        for (var objectName in channel.objects) {
	            channel.objects[objectName].unwrapProperties();
	        }
	        if (initCallback) {
	            initCallback(channel);
	        }
	        channel.exec({type: QWebChannelMessageTypes.idle});
	    });
	};
	
	function QObject(name, data, webChannel)
	{
	    this.__id__ = name;
	    webChannel.objects[name] = this;
	
	    // List of callbacks that get invoked upon signal emission
	    this.__objectSignals__ = {};
	
	    // Cache of all properties, updated when a notify signal is emitted
	    this.__propertyCache__ = {};
	
	    var object = this;
	
	    // ----------------------------------------------------------------------
	
	    this.unwrapQObject = function(response)
	    {
	        if (response instanceof Array) {
	            // support list of objects
	            var ret = new Array(response.length);
	            for (var i = 0; i < response.length; ++i) {
	                ret[i] = object.unwrapQObject(response[i]);
	            }
	            return ret;
	        }
	        if (!response
	            || !response["__QObject*__"]
	            || response["id"] === undefined) {
	            return response;
	        }
	
	        var objectId = response.id;
	        if (webChannel.objects[objectId])
	            return webChannel.objects[objectId];
	
	        if (!response.data) {
	            console.error("Cannot unwrap unknown QObject " + objectId + " without data.");
	            return;
	        }
	
	        var qObject = new QObject( objectId, response.data, webChannel );
	        qObject.destroyed.connect(function() {
	            if (webChannel.objects[objectId] === qObject) {
	                delete webChannel.objects[objectId];
	                // reset the now deleted QObject to an empty {} object
	                // just assigning {} though would not have the desired effect, but the
	                // below also ensures all external references will see the empty map
	                // NOTE: this detour is necessary to workaround QTBUG-40021
	                var propertyNames = [];
	                for (var propertyName in qObject) {
	                    propertyNames.push(propertyName);
	                }
	                for (var idx in propertyNames) {
	                    delete qObject[propertyNames[idx]];
	                }
	            }
	        });
	        // here we are already initialized, and thus must directly unwrap the properties
	        qObject.unwrapProperties();
	        return qObject;
	    }
	
	    this.unwrapProperties = function()
	    {
	        for (var propertyIdx in object.__propertyCache__) {
	            object.__propertyCache__[propertyIdx] = object.unwrapQObject(object.__propertyCache__[propertyIdx]);
	        }
	    }
	
	    function addSignal(signalData, isPropertyNotifySignal)
	    {
	        var signalName = signalData[0];
	        var signalIndex = signalData[1];
	        object[signalName] = {
	            connect: function(callback) {
	                if (typeof(callback) !== "function") {
	                    console.error("Bad callback given to connect to signal " + signalName);
	                    return;
	                }
	
	                object.__objectSignals__[signalIndex] = object.__objectSignals__[signalIndex] || [];
	                object.__objectSignals__[signalIndex].push(callback);
	
	                if (!isPropertyNotifySignal && signalName !== "destroyed") {
	                    // only required for "pure" signals, handled separately for properties in propertyUpdate
	                    // also note that we always get notified about the destroyed signal
	                    webChannel.exec({
	                        type: QWebChannelMessageTypes.connectToSignal,
	                        object: object.__id__,
	                        signal: signalIndex
	                    });
	                }
	            },
	            disconnect: function(callback) {
	                if (typeof(callback) !== "function") {
	                    console.error("Bad callback given to disconnect from signal " + signalName);
	                    return;
	                }
	                object.__objectSignals__[signalIndex] = object.__objectSignals__[signalIndex] || [];
	                var idx = object.__objectSignals__[signalIndex].indexOf(callback);
	                if (idx === -1) {
	                    console.error("Cannot find connection of signal " + signalName + " to " + callback.name);
	                    return;
	                }
	                object.__objectSignals__[signalIndex].splice(idx, 1);
	                if (!isPropertyNotifySignal && object.__objectSignals__[signalIndex].length === 0) {
	                    // only required for "pure" signals, handled separately for properties in propertyUpdate
	                    webChannel.exec({
	                        type: QWebChannelMessageTypes.disconnectFromSignal,
	                        object: object.__id__,
	                        signal: signalIndex
	                    });
	                }
	            }
	        };
	    }
	
	    /**
	     * Invokes all callbacks for the given signalname. Also works for property notify callbacks.
	     */
	    function invokeSignalCallbacks(signalName, signalArgs)
	    {
	        var connections = object.__objectSignals__[signalName];
	        if (connections) {
	            connections.forEach(function(callback) {
	                callback.apply(callback, signalArgs);
	            });
	        }
	    }
	
	    this.propertyUpdate = function(signals, propertyMap)
	    {
	        // update property cache
	        for (var propertyIndex in propertyMap) {
	            var propertyValue = propertyMap[propertyIndex];
	            object.__propertyCache__[propertyIndex] = propertyValue;
	        }
	
	        for (var signalName in signals) {
	            // Invoke all callbacks, as signalEmitted() does not. This ensures the
	            // property cache is updated before the callbacks are invoked.
	            invokeSignalCallbacks(signalName, signals[signalName]);
	        }
	    }
	
	    this.signalEmitted = function(signalName, signalArgs)
	    {
	        invokeSignalCallbacks(signalName, signalArgs);
	    }
	
	    function addMethod(methodData)
	    {
	        var methodName = methodData[0];
	        var methodIdx = methodData[1];
	        object[methodName] = function() {
	            var args = [];
	            var callback;
	            for (var i = 0; i < arguments.length; ++i) {
	                if (typeof arguments[i] === "function")
	                    callback = arguments[i];
	                else
	                    args.push(arguments[i]);
	            }
	
	            webChannel.exec({
	                "type": QWebChannelMessageTypes.invokeMethod,
	                "object": object.__id__,
	                "method": methodIdx,
	                "args": args
	            }, function(response) {
	                if (response !== undefined) {
	                    var result = object.unwrapQObject(response);
	                    if (callback) {
	                        (callback)(result);
	                    }
	                }
	            });
	        };
	    }
	
	    function bindGetterSetter(propertyInfo)
	    {
	        var propertyIndex = propertyInfo[0];
	        var propertyName = propertyInfo[1];
	        var notifySignalData = propertyInfo[2];
	        // initialize property cache with current value
	        // NOTE: if this is an object, it is not directly unwrapped as it might
	        // reference other QObject that we do not know yet
	        object.__propertyCache__[propertyIndex] = propertyInfo[3];
	
	        if (notifySignalData) {
	            if (notifySignalData[0] === 1) {
	                // signal name is optimized away, reconstruct the actual name
	                notifySignalData[0] = propertyName + "Changed";
	            }
	            addSignal(notifySignalData, true);
	        }
	
	        Object.defineProperty(object, propertyName, {
	            get: function () {
	                var propertyValue = object.__propertyCache__[propertyIndex];
	                if (propertyValue === undefined) {
	                    // This shouldn't happen
	                    console.warn("Undefined value in property cache for property \"" + propertyName + "\" in object " + object.__id__);
	                }
	
	                return propertyValue;
	            },
	            set: function(value) {
	                if (value === undefined) {
	                    console.warn("Property setter for " + propertyName + " called with undefined value!");
	                    return;
	                }
	                object.__propertyCache__[propertyIndex] = value;
	                webChannel.exec({
	                    "type": QWebChannelMessageTypes.setProperty,
	                    "object": object.__id__,
	                    "property": propertyIndex,
	                    "value": value
	                });
	            }
	        });
	
	    }
	
	    // ----------------------------------------------------------------------
	
	    data.methods.forEach(addMethod);
	
	    data.properties.forEach(bindGetterSetter);
	
	    data.signals.forEach(function(signal) { addSignal(signal, false); });
	
	    for (var name in data.enums) {
	        object[name] = data.enums[name];
	    }
	}
	
	//required for use with nodejs
	if (true) {
	    module.exports = {
	        QWebChannel: QWebChannel
	    };
	}


/***/ },
/* 27 */
/***/ function(module, exports) {



/***/ }
/******/ ])
});
;
//# sourceMappingURL=frelard-desktop-bootstrap.js.map