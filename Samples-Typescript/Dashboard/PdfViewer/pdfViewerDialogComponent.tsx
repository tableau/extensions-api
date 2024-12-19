import { Button, DropdownSelect, TextField } from '@tableau/tableau-ui';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Messages from './Messages';

interface IPdfViewerDialogState {
  renderEmptyToReloadDropdown: boolean;
  urlInInput: string;
}

interface IPdfViewerDialogProps {
  dashboardParameterNames: string[];
}

const urlSettingKey = 'urlInSettings';

const urlTextBoxLabelStyle: React.CSSProperties = {
  display: 'inline-flex',
  fontFamily: 'Arial',
  fontSize: '12px',
  lineHeight: '21px',
  marginBottom: '12px',
  position: 'relative',
};

const okButtonStyle: React.CSSProperties = {
  fontFamily: 'Arial',
  minWidth: '96px',
  position: 'absolute',
  right: '0px',
  textAlign: 'center'
};

export class PdfViewerDialogComponent extends React.PureComponent<IPdfViewerDialogProps, IPdfViewerDialogState> {
  private textFieldRef: React.RefObject<HTMLInputElement>;
  private dropdownRef: React.RefObject<HTMLSelectElement>;

  constructor(props) {
    super(props);
    this.textFieldRef = React.createRef();
    this.dropdownRef = React.createRef();
    const urlToUse = tableau.extensions.settings.get(urlSettingKey) ?? '';
    this.state = { renderEmptyToReloadDropdown: false, urlInInput: urlToUse };
  }

  public static async initialize(): Promise<void> {
    await tableau.extensions.initializeDialogAsync();
    const dashboardParameters = await tableau.extensions.dashboardContent.dashboard.getParametersAsync();
    const dashboardParameterNames = dashboardParameters.map((value, index) => {
      return 'Parameters.' + value.name;
    });
    ReactDOM.render(<PdfViewerDialogComponent dashboardParameterNames={dashboardParameterNames}/>,
      document.getElementById('pdfViewerDialog'));
  }

  public componentDidUpdate(
    _prevProps: Readonly<IPdfViewerDialogProps>,
    prevState: Readonly<IPdfViewerDialogState>,
    _snapshot?: any
  ): void {
    if (this.state.renderEmptyToReloadDropdown) {
      // In order to prevent <DropdownSelect> from updating to the selected dashboard parameter
      // we need to render an empty element in the DOM to reload <DropdownSelect>.
      this.setState({renderEmptyToReloadDropdown: false});
    }

    if (!this.state.renderEmptyToReloadDropdown && prevState.renderEmptyToReloadDropdown) {
      // We want focus to be back on dropdown after a selection has been made
      if (this.dropdownRef !== undefined) {
        this.dropdownRef.current?.focus();
      }
    }
  }

  public componentDidMount(): void {
    // We want initial focus to be in textField, not on the X button.
    if (this.textFieldRef !== undefined) {
      this.textFieldRef.current?.focus();
    }
  }

  public render(): JSX.Element {
    const widthForTextField = this.props.dashboardParameterNames.length === 0 ? '388px' : '265px';
    return (
      <div style={{padding: '18px'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={urlTextBoxLabelStyle}>
            <TextField
              label={Messages.urlForPdf}
              id='urlTextBox'
              name='urlTextBox'
              placeholder={Messages.urlInputText}
              ref={this.textFieldRef}
              style={{width: widthForTextField}}
              value={this.state.urlInInput}
              onChange={(e) => {this.setState({urlInInput: e.target.value }); }}/>
            {this.renderDropdown()}
          </div>
          <div style={{position: 'relative', display: 'block'}}>
            <Button
                style={okButtonStyle}
                kind={'primary'}
                onClick={this.updateUrlAndCloseDialog}>{Messages.okButton}</Button>
          </div>
        </div>
      </div>
    );
  }

  private renderDropdown(): JSX.Element {
    if (this.state.renderEmptyToReloadDropdown) {
      return <></>;
    }

    if (this.props.dashboardParameterNames.length === 0) {
      return <></>;
    }

    return (
      <div style={{marginLeft: '6px', width: '120px'}}>
        <DropdownSelect
          label={Messages.dropdownLabel}
          onChange={(e) => { this.handleSelectionChange(e.target.value); }}
          ref={this.dropdownRef}
          defaultValue={Messages.dropdownInputText}
        >
          <option disabled key={0}>{Messages.dropdownInputText}</option>
          {this.props.dashboardParameterNames.map(this.renderOptionForDashboardParameter)}
        </DropdownSelect>
      </div>
    );
  }

  private renderOptionForDashboardParameter(value: string, index: number): JSX.Element {
    return (
      <option key={index + 1} value={value}>{value}</option>
    );
  }

  private handleSelectionChange = (dashboardParameterToInsert: string) => {
    this.setState({
      renderEmptyToReloadDropdown: true,
      urlInInput: this.state.urlInInput + '<' + dashboardParameterToInsert + '>'
    });
  }

  private updateUrlAndCloseDialog = async () => {
    const newURL = this.state.urlInInput;
    tableau.extensions.settings.set(urlSettingKey, newURL);
    await tableau.extensions.settings.saveAsync();
    await tableau.extensions.ui.closeDialog(' ');
  }
}
