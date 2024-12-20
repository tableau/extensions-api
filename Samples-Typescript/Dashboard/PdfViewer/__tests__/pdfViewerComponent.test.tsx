import { DialogOptions, ErrorCodes, ExtensionContext, ExtensionMode, Parameter, SettingsChangedEvent, TableauEventHandlerFn } from '@tableau/extensions-api-types';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import '../../../../lib/tableau.extensions.1.latest.js';
import { PdfViewerComponent } from '../pdfViewerComponent';
import * as Messages from '../Messages';

function createMockTableau(extensionMode: ExtensionMode, extensionContext: ExtensionContext = tableau.ExtensionContext.Server) {
  Object.defineProperty(window, 'tableau', {
    value: {
      DataType: {
        Bool: tableau.DataType.Bool,
        Int: tableau.DataType.Int,
        String: tableau.DataType.String,
        Float: tableau.DataType.Float
      },
      DialogStyle: {
        Modal: tableau.DialogStyle.Modal,
      },
      ErrorCodes : {
        DialogClosedByUser: tableau.ErrorCodes.DialogClosedByUser,
      },
      ExtensionMode: {
        Authoring: tableau.ExtensionMode.Authoring,
        Viewing: tableau.ExtensionMode.Viewing,
      },
      ExtensionContext: {
        Desktop: tableau.ExtensionContext.Desktop,
        Server: tableau.ExtensionContext.Server,
      },
      TableauEventType: {
        SettingsChanged: tableau.TableauEventType.SettingsChanged,
        ParameterChanged: tableau.TableauEventType.ParameterChanged,
      },
      extensions: {
        environment: {
          mode: extensionMode,
          context: extensionContext,
        },
        initializeAsync: jest.fn(),
        settings: {
          addEventListener: jest.fn(),
          get: jest.fn(),
          set: jest.fn(),
          saveAsync: jest.fn(),
          getAll: jest.fn().mockResolvedValue({})
        },
        ui: {
          displayDialogAsync: jest.fn(),
          closeDialog: jest.fn(),
        },
        dashboardContent: {
          dashboard: {
            getParametersAsync: jest.fn().mockResolvedValue([]),
          }
        }
      },
    }
  });
}

class TestError extends Error {
  public constructor(private _errorCode: ErrorCodes) {
    super(`${_errorCode}`);
  }

  public get errorCode(): ErrorCodes {
    return this._errorCode;
  }
}

const urlSettingKey = 'urlInSettings';
const validUrl = 'http://localhost/path/to/pdf';
const validUrlToMissingPDF = 'http://localhost/pdf/is/missing';
const validUrlTestCases = [
  [validUrl],
  ['http://localhost/test.pdf'],
  ['http://localhost/test.pdf?query=param'],
  ['https://localhost/test.pdf'],
  ['https://localhost/test.pdf?query=param'],
];
const invalidUrlTestCases = [
  ['data:'],
  ['javascript:'],
  ['missingProtocol'],
];

const testParameterFloat: Parameter = {
  name: 'Test Parameter Float',
  currentValue: { value: '1.0', nativeValue: '', formattedValue: '$1' },
  dataType: tableau.DataType.Float,
  id: 'test_parameter_float',
  allowableValues: undefined,
  changeValueAsync: jest.fn(),
  addEventListener: jest.fn().mockReturnValue(() => {}),
  removeEventListener: jest.fn()
}

const testParameterString: Parameter = {
  ...testParameterFloat,
  name: 'Test Parameter String',
  currentValue: { value: 'hello', nativeValue: '', formattedValue: 'string' },
  dataType: tableau.DataType.String,
  id: 'test_parameter_string',
}

const testParameterBool: Parameter = {
  ...testParameterFloat,
  name: 'Test Parameter Bool',
  currentValue: { value: 'True', nativeValue: '', formattedValue: 'yes' },
  dataType: tableau.DataType.Bool,
  id: 'test_parameter_bool',
}

const testParameterInt: Parameter = {
  ...testParameterFloat,
  name: 'Test Parameter Int',
  currentValue: { value: '4', nativeValue: '', formattedValue: '4.0000e0.0000' },
  dataType: tableau.DataType.Int,
  id: 'test_parameter_int',
}


describe('PdfViewerComponent in authoring', () => {
  beforeEach(() => {
    createMockTableau(tableau.ExtensionMode.Authoring);
  });

  describe('PdfViewerComponent.Initialize', () => {
    let pdfViewerElement: HTMLElement | undefined;
  
    beforeEach(() => {
      pdfViewerElement = document.createElement('div');
      pdfViewerElement.id = 'pdfViewer';
      document.body.append(pdfViewerElement);
    });
  
    afterEach(() => {
      if (pdfViewerElement) {
        pdfViewerElement.remove();
        pdfViewerElement = undefined;
      }
    });
  
    it('should initialize and add a component when created using initialize' , async () => {
      await PdfViewerComponent.initialize();
      expect(tableau.extensions.initializeAsync).toHaveBeenCalled();
      expect(screen.getByText(Messages.unconfiguredExtensionMessage)).toBeInTheDocument();
    });
  
    it('should call displayDialogAsync when configure is called' , async () => {
      await PdfViewerComponent.initialize();
      expect(tableau.extensions.initializeAsync).toHaveBeenCalled();
      const initializeAsyncMock = tableau.extensions.initializeAsync as
        jest.MockedFunction<typeof tableau.extensions.initializeAsync>;
      initializeAsyncMock.mock.calls[0][0].configure();
      const expectedDialogOptions: DialogOptions = { height: 120, width: 440, dialogStyle: tableau.DialogStyle.Modal };
      expect(tableau.extensions.ui.displayDialogAsync).toHaveBeenCalledWith(
        'pdfviewerdialog.html',
        undefined,
        expectedDialogOptions);
    });
  
    it('displays config dialog upon initialization in authoring mode', async () => {
      const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
      settingsSpy.mockImplementation((key) => {
        return key === urlSettingKey ? undefined : '';
      });
      await PdfViewerComponent.initialize();
      expect(tableau.extensions.ui.displayDialogAsync).toHaveBeenCalledTimes(1);
    })

    it('correctly handles TableauError with error code DialogClosedByUser', async () => {
      jest.spyOn(tableau.extensions.settings, 'get').mockReturnValue(undefined);

      const displayDialogSpy = jest.spyOn(tableau.extensions.ui, 'displayDialogAsync').mockRejectedValue(
        new TestError(tableau.ErrorCodes.DialogClosedByUser)
      );
      const setSettingSpy = jest.spyOn(tableau.extensions.settings, 'set');
  
      await PdfViewerComponent.initialize();
  
      expect(displayDialogSpy).toHaveBeenCalledTimes(1);
      expect(setSettingSpy).toHaveBeenCalledTimes(1);
    });
      
    it('does not display config dialog when already initialized', async () => {
      const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
      settingsSpy.mockImplementation((key) => {
        return key === urlSettingKey ? validUrl: '';
      });
      jest.spyOn(tableau.extensions.settings, 'getAll').mockReturnValue({
        [urlSettingKey]: validUrl
      });    
  
      await PdfViewerComponent.initialize();
      expect(tableau.extensions.ui.displayDialogAsync).not.toHaveBeenCalled();
    });
  
    it('should handle DialogClosedByUser from displayDialogAsync' , async () => {
      await PdfViewerComponent.initialize();
      expect(tableau.extensions.initializeAsync).toHaveBeenCalled();
      const displayDialogAsyncMock = tableau.extensions.ui.displayDialogAsync as
        jest.MockedFunction<typeof tableau.extensions.ui.displayDialogAsync>;
      displayDialogAsyncMock.mockReturnValue(Promise.reject(new TestError(tableau.ErrorCodes.DialogClosedByUser)));
      const initializeAsyncMock = tableau.extensions.initializeAsync as
        jest.MockedFunction<typeof tableau.extensions.initializeAsync>;
      const configurePromise = initializeAsyncMock.mock.calls[0][0].configure();
      const result = await configurePromise;
      expect(result).toBeUndefined();
    });
  
    it('should handle general error from displayDialogAsync' , async () => {
      jest.spyOn(console, 'error').mockImplementation(jest.fn());
      await PdfViewerComponent.initialize();
      expect(tableau.extensions.initializeAsync).toHaveBeenCalled();
      const displayDialogAsyncMock = tableau.extensions.ui.displayDialogAsync as
        jest.MockedFunction<typeof tableau.extensions.ui.displayDialogAsync>;
      displayDialogAsyncMock.mockReturnValue(Promise.reject(new Error('general error')));
      const initializeAsyncMock = tableau.extensions.initializeAsync as
        jest.MockedFunction<typeof tableau.extensions.initializeAsync>;
      const configurePromise = initializeAsyncMock.mock.calls[0][0].configure();
      const result = await configurePromise;
      expect(result).toBeUndefined();
    });
  });

  describe('Handle URL with parameter', () => {
    it('correctly renders resolved URL with parameter values for type String', async () => {
      jest.spyOn(tableau.extensions.settings, 'get')
        .mockReturnValue(`http://localhost/<Parameters.${testParameterString.name}>/test.pdf`);
      const getDashboardParametersSpy = jest.spyOn(tableau.extensions.dashboardContent.dashboard, 'getParametersAsync')
        .mockResolvedValue([testParameterString]);
    
      render(<PdfViewerComponent/>);
      await waitFor(() => {
        expect(getDashboardParametersSpy).toHaveBeenCalledTimes(1);
      });

      const objectElement = await screen.findByTestId('pdf-object-id');
      expect(objectElement).toHaveAttribute('data', `http://localhost/${testParameterString.currentValue.value}/test.pdf`);
    });

    it('correctly renders resolved URL with parameter values for type Bool', async () => {
      jest.spyOn(tableau.extensions.settings, 'get')
        .mockReturnValue(`http://localhost/<Parameters.${testParameterBool.name}>/test.pdf`);
      const getDashboardParametersSpy = jest.spyOn(tableau.extensions.dashboardContent.dashboard, 'getParametersAsync')
        .mockResolvedValue([testParameterBool]);
    
      render(<PdfViewerComponent/>);
      await waitFor(() => {
        expect(getDashboardParametersSpy).toHaveBeenCalledTimes(1);
      });

      const objectElement = await screen.findByTestId('pdf-object-id');
      expect(objectElement).toHaveAttribute('data', `http://localhost/${testParameterBool.currentValue.value}/test.pdf`);
    });

    it('correctly renders resolved URL with parameter values for type Float', async () => {
      jest.spyOn(tableau.extensions.settings, 'get')
        .mockReturnValue(`http://localhost/<Parameters.${testParameterFloat.name}>/test.pdf`);
      const getDashboardParametersSpy = jest.spyOn(tableau.extensions.dashboardContent.dashboard, 'getParametersAsync')
        .mockResolvedValue([testParameterFloat]);
    
      render(<PdfViewerComponent/>);
      await waitFor(() => {
        expect(getDashboardParametersSpy).toHaveBeenCalledTimes(1);
      });

      const objectElement = await screen.findByTestId('pdf-object-id');
      expect(objectElement).toHaveAttribute('data', `http://localhost/${testParameterFloat.currentValue.formattedValue}/test.pdf`);
    });

    it('replaces parameter placeholders in URL with parameter values', async () => {
      const settingsChangedEvent: SettingsChangedEvent = {
        newSettings: { urlInSettings: `http://localhost/<Parameters.${testParameterString.name}>/test.pdf` },
        type: tableau.TableauEventType.SettingsChanged,
      };

      const getDashboardParametersSpy = jest.spyOn(tableau.extensions.dashboardContent.dashboard, 'getParametersAsync')
        .mockResolvedValue([testParameterString]);      
      
      let eventHandler: TableauEventHandlerFn;
      jest.spyOn(tableau.extensions.settings, 'addEventListener')
        .mockImplementation((_, handler) => {
          eventHandler = handler;
        return () => true;
      });

      render(<PdfViewerComponent/>);
      await waitFor(() => {
        expect(getDashboardParametersSpy).toHaveBeenCalledTimes(1);
      });

      await eventHandler(settingsChangedEvent);
      const objectElement = await screen.findByTestId('pdf-object-id');
      expect(objectElement).toHaveAttribute('data', `http://localhost/${testParameterString.currentValue.value}/test.pdf`);
    });

    it('updates URL when parameter value changes', async () => {
      jest.spyOn(tableau.extensions.settings, 'get')
        .mockReturnValue(`http://localhost/<Parameters.${testParameterString.name}>/test.pdf`);
      const getDashboardParametersSpy = jest.spyOn(tableau.extensions.dashboardContent.dashboard, 'getParametersAsync')
        .mockResolvedValue([testParameterString]);
      
      let parameterChangedHandler = jest.fn();
      testParameterString.addEventListener = jest.fn().mockImplementation((_, handler) => {
        parameterChangedHandler = handler;
        return () => true;
      });
      render(<PdfViewerComponent/>);
      await waitFor(() => {
        expect(getDashboardParametersSpy).toHaveBeenCalledTimes(1);
      });
      
      const newParameter = { ...testParameterString, currentValue: { value: 'new value!', nativeValue: '', formattedValue: 'string' }};
      getDashboardParametersSpy.mockResolvedValue([newParameter]);

      await parameterChangedHandler();
      const objectElement = await screen.findByTestId('pdf-object-id');
      expect(objectElement).toHaveAttribute('data', `http://localhost/${newParameter.currentValue.value}/test.pdf`);
      expect(getDashboardParametersSpy).toHaveBeenCalledTimes(2);
    });
  })

  it('when unconfigured renders text with correct style on Desktop', () => {
    createMockTableau(tableau.ExtensionMode.Authoring, tableau.ExtensionContext.Desktop);
    render(<PdfViewerComponent/>);
    const textElement = screen.getByText(Messages.unconfiguredExtensionMessage);
    expect(textElement).toBeInTheDocument();
    expect(textElement.getAttribute('style')).toContain('font-weight: lighter');
    expect(textElement.getAttribute('style')).toContain('font-style: italic');
  });

  it('when unconfigured renders text with correct style on Web', () => {
    render(<PdfViewerComponent/>);
    const textElement = screen.getByText(Messages.unconfiguredExtensionMessage);
    expect(textElement).toBeInTheDocument();
    expect(textElement.getAttribute('style')).toContain('font-weight: normal');
    expect(textElement.getAttribute('style')).toContain('font-style: normal');
  });

  it('when pdf is missing at URL renders error message with correct styling on Desktop', async () => {
    createMockTableau(tableau.ExtensionMode.Authoring, tableau.ExtensionContext.Desktop);
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    const expectedUrl = validUrlToMissingPDF;
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? expectedUrl: '';
    });
    render(<PdfViewerComponent/>);
    const objectElement = await screen.findByTestId('pdf-object-id');
    expect(objectElement).toBeInTheDocument();
    expect(objectElement).toHaveAttribute('data', expectedUrl);
    expect(objectElement).toHaveTextContent(Messages.urlForPdfFailedToRender);
    const textElement = screen.getByText(Messages.urlForPdfFailedToRender);
    expect(textElement).toBeInTheDocument();
    expect(textElement.getAttribute('style')).toContain('font-weight: lighter');
    expect(textElement.getAttribute('style')).toContain('font-style: italic');
  });

  it('when pdf is missing at URL renders error message with correct styling on Web', async () => {
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    const expectedUrl = validUrlToMissingPDF;
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? expectedUrl: '';
    });
    render(<PdfViewerComponent/>);
    const objectElement = await screen.findByTestId('pdf-object-id');
    expect(objectElement).toBeInTheDocument();
    expect(objectElement).toHaveAttribute('data', expectedUrl);
    expect(objectElement).toHaveTextContent(Messages.urlForPdfFailedToRender);
    const textElement = screen.getByText(Messages.urlForPdfFailedToRender);
    expect(textElement).toBeInTheDocument();
    expect(textElement.getAttribute('style')).toContain('font-weight: normal');
    expect(textElement.getAttribute('style')).toContain('font-style: normal');
  });

  it('when URL updates renders the new URL', async () => {
    const addEventListenerSpy = jest.spyOn(tableau.extensions.settings, 'addEventListener');
    let eventHandler: TableauEventHandlerFn;
    addEventListenerSpy.mockImplementation((_, handler) => {
      eventHandler = handler;
      return () => true;
    });

    render(<PdfViewerComponent/>);
    expect(screen.getByText(Messages.unconfiguredExtensionMessage)).toBeInTheDocument();

    const expectedUrl = validUrl;
    const settingsChangedEvent: SettingsChangedEvent = {
      newSettings: {
        urlInSettings: expectedUrl
      },
      type: tableau.TableauEventType.SettingsChanged
    };

    await eventHandler(settingsChangedEvent);
    expect(screen.queryByText(Messages.unconfiguredExtensionMessage)).not.toBeInTheDocument();
    const objectElement = await screen.findByTestId('pdf-object-id');
    expect(objectElement).toHaveAttribute('data', expectedUrl);
  });

  it('when component unmounts the settings listener is unregistered', () => {
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'addEventListener');
    let unregisterCalled = false;
    settingsSpy.mockImplementation(() => {
      return () => {
        unregisterCalled = true;
        return true;
      };
    });

    const renderResult = render(<PdfViewerComponent/>);
    renderResult.unmount();
    expect(unregisterCalled).toBe(true);
  });

  it('when component unmounts the parameter listeners are unregistered', async () => {
    jest.spyOn(tableau.extensions.dashboardContent.dashboard, 'getParametersAsync')
      .mockResolvedValue([testParameterString]);

    const parameterSpy = jest.spyOn(testParameterString, 'addEventListener');
    let unregisterCalled = false;
    parameterSpy.mockReturnValue(() => {
      unregisterCalled = true;
      return true;
    });
      
    const renderResult = render(<PdfViewerComponent/>);
    renderResult.unmount();
    waitFor(() => {
      expect(unregisterCalled).toBe(true);
    });
  });

  test.each(invalidUrlTestCases)('when invalid URL %s is used renders error message with Web styling', async (urlToUse) => {
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? urlToUse: '';
    });
    render(<PdfViewerComponent/>);
    const textElement = await screen.findByText(Messages.urlIsNotValidErrorMessage);
    expect(textElement).toBeInTheDocument();
    expect(textElement.getAttribute('style')).toContain('font-weight: normal');
    expect(textElement.getAttribute('style')).toContain('font-style: normal');
  });

  test.each(invalidUrlTestCases)('when invalid URL %s is used renders error message with Desktop styling', async (urlToUse) => {
    createMockTableau(tableau.ExtensionMode.Authoring, tableau.ExtensionContext.Desktop);
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? urlToUse: '';
    });
    render(<PdfViewerComponent/>);
    const textElement = await screen.findByText(Messages.urlIsNotValidErrorMessage);
    expect(textElement).toBeInTheDocument();
    expect(textElement.getAttribute('style')).toContain('font-weight: lighter');
    expect(textElement.getAttribute('style')).toContain('font-style: italic');
  });

  test.each(validUrlTestCases)('when valid URL %s is used renders the URL as a PDF', async (expectedUrl) => {
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? expectedUrl: '';
    });
    render(<PdfViewerComponent/>);
    const objectElement =  await screen.findByTestId('pdf-object-id');
    expect(objectElement).toBeInTheDocument();
    expect(objectElement).toHaveAttribute('data', expectedUrl);
    expect(objectElement).toHaveAttribute('type', 'application/pdf');
  });
});

describe('PdfViewerComponent in viewing', () => {
  beforeEach(() => {
    createMockTableau(tableau.ExtensionMode.Viewing);
  });

  describe('PdfViewerComponent.Initialize', () => {
    let pdfViewerElement: HTMLElement | undefined;
  
    beforeEach(() => {
      pdfViewerElement = document.createElement('div');
      pdfViewerElement.id = 'pdfViewer';
      document.body.append(pdfViewerElement);
    });
  
    afterEach(() => {
      if (pdfViewerElement) {
        pdfViewerElement.remove();
        pdfViewerElement = undefined;
      }
    });

    it('should not display config dialog even at intialization', async () => {
      const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
      settingsSpy.mockImplementation((key) => {
        return key === urlSettingKey ? undefined : '';
      });
      
      await PdfViewerComponent.initialize();
      expect(tableau.extensions.ui.displayDialogAsync).not.toHaveBeenCalled();
    });
  });

  it('when unconfigured renders empty', () => {
    const {container} = render(<PdfViewerComponent/>);
    expect(container).toBeEmptyDOMElement();
  });

  it('when pdf is missing at URL does not render an error', async () => {
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    const expectedUrl = validUrlToMissingPDF;
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? expectedUrl: '';
    });
    render(<PdfViewerComponent/>);
    const objectElement =  await screen.findByTestId('pdf-object-id');
    expect(objectElement).toBeInTheDocument();
    expect(objectElement).toHaveAttribute('data', expectedUrl);
    expect(objectElement).not.toHaveTextContent(Messages.urlForPdfFailedToRender);
    expect(objectElement.childElementCount).toBe(0);
  });

  test.each(invalidUrlTestCases)('when invalid URL %s is used renders empty', (urlToUse) => {
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? urlToUse: '';
    });
    const {container} = render(<PdfViewerComponent/>);
    expect(container).toBeEmptyDOMElement();
  });

  test.each(validUrlTestCases)('when valid URL %s is used renders the URL as a PDF', async (expectedUrl) => {
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? expectedUrl: '';
    });
    render(<PdfViewerComponent/>);
    const objectElement = await screen.findByTestId('pdf-object-id');
    expect(objectElement).toBeInTheDocument();
    expect(objectElement).toHaveAttribute('data', expectedUrl);
    expect(objectElement).toHaveAttribute('type', 'application/pdf');
  });
});
