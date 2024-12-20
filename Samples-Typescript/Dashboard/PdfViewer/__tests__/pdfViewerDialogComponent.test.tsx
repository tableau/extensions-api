import '@testing-library/jest-dom';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import * as React from 'react';
import '../../../../lib/tableau.extensions.1.latest.js';
import { PdfViewerDialogComponent } from '../pdfViewerDialogComponent';
import * as Messages from '../Messages';
import { Parameter } from '@tableau/extensions-api-types';

function createMockTableau() {
  Object.defineProperty(window, 'tableau', {
    value: {
      extensions: {
        dashboardContent: {
          dashboard: {
            getParametersAsync: jest.fn(),
          },
        },
        initializeDialogAsync: jest.fn(),
        settings: {
          get: jest.fn(),
          saveAsync: jest.fn(),
          set: jest.fn(),
        },
        ui: {
          closeDialog: jest.fn(),
        },
      },
    }
  });
}

const urlSettingKey = 'urlInSettings';

function createDashboardParameterWithName(name: string) {
  return {
    name: name
  } as Parameter;
}


function renderPdfViewerDialogComponent(dashboardParameterNames: string[] = []): RenderResult {
  return render(<PdfViewerDialogComponent dashboardParameterNames={dashboardParameterNames}/>);
}

describe('PdfViewerDialogComponent', () => {
  beforeEach(() => {
    createMockTableau();
  });

  describe('PdfViewerDialogComponent.Initialize', () => {
    let pdfViewerDialogElement: HTMLElement | undefined;
  
    beforeEach(() => {
      pdfViewerDialogElement = document.createElement('div');
      pdfViewerDialogElement.id = 'pdfViewerDialog';
      document.body.append(pdfViewerDialogElement);
    });
  
    afterEach(() => {
      if (pdfViewerDialogElement) {
        pdfViewerDialogElement.remove();
        pdfViewerDialogElement = undefined;
      }
    });
  
    it('should initialize and add a component when created using initialize' , async () => {
      const initializeDialogAsyncSpy = jest.spyOn(tableau.extensions, 'initializeDialogAsync');
      const getDashboardParametersSpy = jest.spyOn(tableau.extensions.dashboardContent.dashboard, 'getParametersAsync');
      getDashboardParametersSpy.mockReturnValue(Promise.resolve([]));
      await PdfViewerDialogComponent.initialize();
      expect(initializeDialogAsyncSpy).toBeCalledTimes(1);
      expect(getDashboardParametersSpy).toBeCalledTimes(1);
      expect(getDashboardParametersSpy.mock.invocationCallOrder[0]).toBeGreaterThan(initializeDialogAsyncSpy.mock.invocationCallOrder[0]);
      expect(screen.getByText(Messages.urlForPdf)).toBeInTheDocument();
    });

    it('should initialize using dashboard parameter names when created using initialize' , async () => {
      const getDashboardParametersSpy = jest.spyOn(tableau.extensions.dashboardContent.dashboard, 'getParametersAsync');
      getDashboardParametersSpy.mockReturnValue(Promise.resolve([
        createDashboardParameterWithName('Base Salary'),
        createDashboardParameterWithName('Sort by'),
        createDashboardParameterWithName('Churn Rate'),
      ]));
      await PdfViewerDialogComponent.initialize();
      expect(tableau.extensions.initializeDialogAsync).toBeCalledTimes(1);
      expect(getDashboardParametersSpy).toBeCalledTimes(1);
      expect(screen.getByText(Messages.urlForPdf)).toBeInTheDocument();
      expect(screen.getAllByRole('option').length).toBe(4);
      expect(screen.getByText(Messages.dropdownInputText)).toBeInTheDocument();
      const inputTextOption = screen.getByRole('option', { name: Messages.dropdownInputText});
      expect(inputTextOption).toBeInTheDocument();
      expect(inputTextOption).toBeDisabled();
      expect(screen.getByRole('option', { name: 'Parameters.Base Salary'})).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Parameters.Sort by'})).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Parameters.Churn Rate'})).toBeInTheDocument();
    });
  });

  it('should have placeholder text to set URL', () => {
    renderPdfViewerDialogComponent();
    expect(screen.getByPlaceholderText(Messages.urlInputText)).toBeInTheDocument();
  });

  it('should render a label', () => {
    renderPdfViewerDialogComponent();
    expect(screen.getByText(Messages.urlForPdf)).toBeInTheDocument();
  });

  it('should render a button', () => {
    renderPdfViewerDialogComponent();
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe('OK');
  });

  it('button click should call closeDialog', async () => {
    const closeDialogSpy = jest.spyOn(tableau.extensions.ui, 'closeDialog');
    renderPdfViewerDialogComponent();
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    await buttonElement.click();
    expect(closeDialogSpy).toHaveBeenNthCalledWith(1, ' ')
  });

  it('should use existing URL that is found in settings', () => {
    const expectedUrl = 'http://www.urltoPDF.com';
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? expectedUrl: '';
    });
    renderPdfViewerDialogComponent();
    expect(screen.getByPlaceholderText(Messages.urlInputText)).toHaveValue(expectedUrl);
  });

  it('should update displayed URL when text input changes', () => {
    renderPdfViewerDialogComponent();
    const inputElement = screen.getByPlaceholderText(Messages.urlInputText);
    const expectedUrl = 'http://www.urltoPDF.com';
    fireEvent.change(inputElement, { target: { value: expectedUrl } });
    expect(screen.getByPlaceholderText(Messages.urlInputText)).toHaveValue(expectedUrl);
  });

  it('should not update settings when text input changes', () => {
    renderPdfViewerDialogComponent();
    const inputElement = screen.getByPlaceholderText(Messages.urlInputText);
    const expectedUrl = 'http://www.urltoPDF.com';
    fireEvent.change(inputElement, { target: { value: expectedUrl } });
    expect(tableau.extensions.settings.set).not.toHaveBeenCalled();
    expect(tableau.extensions.settings.saveAsync).not.toHaveBeenCalled();
  });

  it('should persist the updated URL when OK is clicked', () => {
    renderPdfViewerDialogComponent();
    const inputElement = screen.getByPlaceholderText(Messages.urlInputText);
    const expectedUrl = 'http://www.urltoPDF.com';
    fireEvent.change(inputElement, { target: { value: expectedUrl } });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    buttonElement.click();
    expect(tableau.extensions.settings.set).toHaveBeenCalledWith(urlSettingKey, expectedUrl);
    expect(tableau.extensions.settings.saveAsync).toHaveBeenCalledTimes(1);
  });

  it('should not call closeDialog if saveAsync has not finished', (testDone) => {
    let saveAsyncResolve;
    const saveAsyncSpy = jest.spyOn(tableau.extensions.settings, 'saveAsync').mockImplementation(() => (
      new Promise(resolve => saveAsyncResolve = resolve)
    ));

    const closeDialogSpy = jest.spyOn(tableau.extensions.ui, 'closeDialog');
    
    renderPdfViewerDialogComponent();
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    
    expect(saveAsyncSpy).toHaveBeenCalledTimes(1);
    expect(closeDialogSpy).toHaveBeenCalledTimes(0);
    saveAsyncResolve();
    setTimeout(() => {
      expect(closeDialogSpy).toHaveBeenNthCalledWith(1, ' ');
      testDone();
    }, 0);
  });

  it('should set URL after selecting a parameter' , () => {
    const dashboardParameterNames = [
      'Parameters.Base Salary',
      'Parameters.Sort by',
      'Parameters.Churn Rate',
    ];
    renderPdfViewerDialogComponent(dashboardParameterNames);
    
    expect(screen.getAllByRole('option').length).toBe(4);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Parameters.Base Salary' } });
    expect(screen.getByPlaceholderText(Messages.urlInputText)).toHaveValue('<Parameters.Base Salary>');
  });

  it('should add to end of URL after selecting a parameter' , () => {
    const initialUrl = 'http://www.urltoPDF.com';
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? initialUrl: '';
    });
    const dashboardParameterNames = [
      'Parameters.Sort by',
    ];
    const expectedUrl = initialUrl + '<Parameters.Sort by>';

    renderPdfViewerDialogComponent(dashboardParameterNames);
    
    expect(screen.getAllByRole('option').length).toBe(2);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Parameters.Sort by' } });
    
    expect(screen.getByPlaceholderText(Messages.urlInputText)).toHaveValue(expectedUrl);
  });

  it('should support adding multiple parameters' , () => {
    const initialUrl = 'http://www.urltoPDF.com';
    const settingsSpy = jest.spyOn(tableau.extensions.settings, 'get');
    settingsSpy.mockImplementation((key) => {
      return key === urlSettingKey ? initialUrl: '';
    });
    const dashboardParameterNames = [
      'Parameters.Base Salary',
      'Parameters.Sort by',
    ];
    const expectedUrl = initialUrl + '<Parameters.Sort by><Parameters.Base Salary><Parameters.Sort by>';

    renderPdfViewerDialogComponent(dashboardParameterNames);
    
    expect(screen.getAllByRole('option').length).toBe(3);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Parameters.Sort by' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Parameters.Base Salary' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Parameters.Sort by' } });
    expect(screen.getByPlaceholderText(Messages.urlInputText)).toHaveValue(expectedUrl);
  });
});
