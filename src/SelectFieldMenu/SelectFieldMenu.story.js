import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SelectFieldMenu from './SelectFieldMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';

const input = {
  value: 'my value',
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

const meta = {
  touched: false,
  error: '',
};

const metaError = {
  touched: true,
  error: 'invalid something',
};

storiesOf('SelectFieldMenu', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <SelectFieldMenu label={'My label'} input={input} meta={meta}>
      <MenuItem style={{ WebkitAppearance: 'initial'}} value={''} primaryText="" />
      <MenuItem style={{ WebkitAppearance: 'initial'}} value={'#ff0000'} primaryText="Red" />
      <MenuItem style={{ WebkitAppearance: 'initial'}} value={'#00ff00'} primaryText="Green" />
      <MenuItem style={{ WebkitAppearance: 'initial'}} value={'#0000ff'} primaryText="Blue" />
    </SelectFieldMenu>
  ))
  .add('with error', () => (
    <SelectFieldMenu label={'My label'} input={input} meta={metaError}>
      <MenuItem style={{ WebkitAppearance: 'initial'}} value={''} primaryText="" />
      <MenuItem style={{ WebkitAppearance: 'initial'}} value={'#ff0000'} primaryText="Red" />
      <MenuItem style={{ WebkitAppearance: 'initial'}} value={'#00ff00'} primaryText="Green" />
      <MenuItem style={{ WebkitAppearance: 'initial'}} value={'#0000ff'} primaryText="Blue" />
    </SelectFieldMenu>
  ));
