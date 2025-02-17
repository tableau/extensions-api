import { DataType, DialogOptions, Parameter, SettingsChangedEvent, TableauEvent, TableauEventUnregisterFn } from '@tableau/extensions-api-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Messages from './Messages';

interface IPdfViewerComponentState {
  dashboardParameters: Parameter[];
  renderEmptyToReloadObjectElement: boolean;
  pdfUrl: string;
}

const urlSettingKey = 'urlInSettings';

function messageInExtensionTextStyle(useDesktopStyle: boolean): React.CSSProperties {
  return {
    display: 'block',
    fontFamily: 'Arial',
    fontSize: '12px',
    fontStyle: useDesktopStyle ? 'italic' : 'normal',
    fontWeight: useDesktopStyle ? 'lighter' : 'normal',
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  };
}

const objectElementStyle: React.CSSProperties = {
  border: '0px none',
  height: '100vh',
  left: '0px',
  top: '0px',
  width: '100%',
};

export class PdfViewerComponent extends React.PureComponent<{}, IPdfViewerComponentState> {
  private unregisterSettingsListener: TableauEventUnregisterFn;
  private dashboardParameterListeners: TableauEventUnregisterFn[] = [];

  constructor(props = {}) {
    super(props);

    this.state = {
      dashboardParameters: [],
      pdfUrl: '',
      renderEmptyToReloadObjectElement: false,
    };

    this.unregisterSettingsListener = tableau.extensions.settings.addEventListener(
      tableau.TableauEventType.SettingsChanged,
      (event) => this.onSettingsChanged(event)
    );
  }

  public static async initialize(): Promise<void> {
    await tableau.extensions.initializeAsync({
      configure: () => {
        return PdfViewerComponent.displayConfigureZone();
      },
    });

    const isInitial = !(urlSettingKey in tableau.extensions.settings.getAll());
    const isAuthoring = tableau.extensions.environment.mode === tableau.ExtensionMode.Authoring;
    if (isInitial && isAuthoring) {
      tableau.extensions.settings.set(urlSettingKey, '');
      await tableau.extensions.settings.saveAsync();
      await PdfViewerComponent.displayConfigureZone();
    }

    await ReactDOM.render(<PdfViewerComponent/>, document.getElementById('pdfViewer'));
  }

  public static async displayConfigureZone(): Promise<void> {
    const dialogOptions: DialogOptions = { height: 120, width: 440, dialogStyle: tableau.DialogStyle.Modal };
    const url = 'pdfviewerdialog.html';
    const payload = undefined;
    try {
      await tableau.extensions.ui.displayDialogAsync(url, payload, dialogOptions);
    } catch (error) {
      // One expected error condition is when the popup is closed by the user
      // (meaning the user clicks the 'X' in the top right of the dialog).
      // This can be checked for with:
      switch (error.errorCode) {
        case tableau.ErrorCodes.DialogClosedByUser:
          // Dialog was closed by user
          break;
        default:
          console.error(error.message);
      }
    }
  }

  private async refreshParameterListeners(): Promise<void> {
    // clear out the existing listeners and setup listeners for new parameters
    this.dashboardParameterListeners.forEach(unregister => unregister());
    this.dashboardParameterListeners = [];

    const dashboardParameters = await tableau.extensions.dashboardContent.dashboard.getParametersAsync();
    this.setState({ dashboardParameters });

    this.dashboardParameterListeners = dashboardParameters.map(dashboardParameter => {
      return dashboardParameter.addEventListener(
        tableau.TableauEventType.ParameterChanged,
        async () => {
          await this.refreshParameterListeners();
          const urlWithResolvedDashboardParameters = this.getUrlWithResolvedDashboardParameters(
            tableau.extensions.settings.get(urlSettingKey) ?? ''
          );
          if (this.state.pdfUrl !== urlWithResolvedDashboardParameters) {
            this.setState({pdfUrl: urlWithResolvedDashboardParameters, renderEmptyToReloadObjectElement: true});
          }
        }
      );
    });
  }

  public async componentDidMount(): Promise<void> {
    await this.refreshParameterListeners();

    const rawUrl = tableau.extensions.settings.get(urlSettingKey) ?? '';
    const urlWithResolvedDashboardParameters = this.getUrlWithResolvedDashboardParameters(rawUrl);
    this.setState({pdfUrl: urlWithResolvedDashboardParameters, renderEmptyToReloadObjectElement: true});
  }

  public componentWillUnmount(): void {
    if (this.unregisterSettingsListener) {
      this.unregisterSettingsListener();
    }
    this.dashboardParameterListeners.forEach(unregister => unregister());
  }

  public componentDidUpdate(
    _prevProps: Readonly<{}>,
    _prevState: Readonly<IPdfViewerComponentState>,
    _snapshot?: any
  ): void {
    if (this.state.renderEmptyToReloadObjectElement) {
      // In order for the <Object> to use a new URL after a previous URL failed
      // to load we need to render an empty element in the DOM to reload <Object>.
      this.setState({renderEmptyToReloadObjectElement: false});
    }
  }

  public render(): JSX.Element {
    return (
      <>
        {this.renderContent()}
      </>
    );
  }

  private renderContent(): JSX.Element {
    if (this.state.renderEmptyToReloadObjectElement) {
      return <></>;
    } else if (this.state.pdfUrl === undefined || this.state.pdfUrl.length === 0) {
      return this.renderNeedToConfigureURL();
    } else if (!this.isValidURL()) {
      return this.renderURLError();
    } else {
      return this.renderPDF();
    }
  }

  private renderNeedToConfigureURL(): JSX.Element {
    if (tableau.extensions.environment.mode === tableau.ExtensionMode.Authoring) {
      return <div style={messageInExtensionTextStyle(this.isDesktop())}>{Messages.unconfiguredExtensionMessage}</div>;
    } else {
      return <></>;
    }
  }

  private renderURLError(): JSX.Element {
    if (tableau.extensions.environment.mode === tableau.ExtensionMode.Authoring) {
      return <div style={messageInExtensionTextStyle(this.isDesktop())}>{Messages.urlIsNotValidErrorMessage}</div>;
    } else {
      return <></>;
    }
  }

  private renderPDF(): JSX.Element {
    return (
      <object data={this.state.pdfUrl} data-testid='pdf-object-id' type='application/pdf' style={objectElementStyle} >
        {this.renderContentToShowIfPDFLoadError()}
      </object>
    );
  }

  private renderContentToShowIfPDFLoadError(): JSX.Element {
    if (tableau.extensions.environment.mode === tableau.ExtensionMode.Authoring) {
      return <div style={messageInExtensionTextStyle(this.isDesktop())}>{Messages.urlForPdfFailedToRender}</div>;
    } else {
      return <></>;
    }
  }

  private isDesktop(): boolean {
    return tableau.extensions.environment.context === tableau.ExtensionContext.Desktop;
  }

  private isValidURL(): boolean {
    try {
      const parsedUrl = new URL(this.state.pdfUrl);
      const protocol = parsedUrl.protocol.toLowerCase();
      switch (protocol) {
        case 'http:':
        case 'https:':
          return true;
        default:
          return false;
      }
    } catch {
      return false;
    }
  }

  private onSettingsChanged(event: TableauEvent) {
    if (event && event.type === tableau.TableauEventType.SettingsChanged) {
      const settingsEvent = event as SettingsChangedEvent;
      const newPdfURL = settingsEvent.newSettings[urlSettingKey];
      const urlWithResolvedDashboardParameters = this.getUrlWithResolvedDashboardParameters(newPdfURL);
      if (urlWithResolvedDashboardParameters !== this.state.pdfUrl) {
        this.setState({pdfUrl: urlWithResolvedDashboardParameters, renderEmptyToReloadObjectElement: true});
      }
    }
  }

  private getUrlWithResolvedDashboardParameters(url: string): string {
    for (const parameter of this.state.dashboardParameters) {
      const dataType = parameter.dataType;
      const useValue = dataType === tableau.DataType.Bool ||
                      dataType === tableau.DataType.Int ||
                      dataType === tableau.DataType.String;
      const newValue = useValue ? parameter.currentValue.value : parameter.currentValue.formattedValue;
      url = url.replaceAll(`<Parameters.${parameter.name}>`, newValue);
    }
    return url;
  }
}
