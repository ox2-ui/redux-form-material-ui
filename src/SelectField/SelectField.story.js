import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SelectField from './SelectField';
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

storiesOf('SelectField', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <SelectField input={input} label={'My label'} meta={meta}>
      <MenuItem primaryText="" style={{ WebkitAppearance: 'initial'}} value={''} />
      <MenuItem primaryText="Red" style={{ WebkitAppearance: 'initial'}} value={'#ff0000'} />
      <MenuItem primaryText="Green" style={{ WebkitAppearance: 'initial'}} value={'#00ff00'} />
      <MenuItem primaryText="Blue" style={{ WebkitAppearance: 'initial'}} value={'#0000ff'} />
    </SelectField>
  ))
  .add('with error', () => (
    <SelectField input={input} label={'My label'} meta={metaError}>
      <MenuItem primaryText="" style={{ WebkitAppearance: 'initial'}} value={''} />
      <MenuItem primaryText="Red" style={{ WebkitAppearance: 'initial'}} value={'#ff0000'} />
      <MenuItem primaryText="Green" style={{ WebkitAppearance: 'initial'}} value={'#00ff00'} />
      <MenuItem primaryText="Blue" style={{ WebkitAppearance: 'initial'}} value={'#0000ff'} />
    </SelectField>
  ));
