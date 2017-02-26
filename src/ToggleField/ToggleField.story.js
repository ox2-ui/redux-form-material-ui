import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ToggleField from './ToggleField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const input = {
  value: true,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

const input2 = {
  value: false,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

storiesOf('ToggleField', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('enabled', () => (
    <ToggleField label={'My label'} input={input} />
  ))
  .add('disabled', () => (
    <ToggleField label={'My label'} input={input2} />
  ));
