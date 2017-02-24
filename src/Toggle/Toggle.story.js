import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Toggle from './Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const input = {
  value: true,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

const input2 = {
  value: false,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

storiesOf('Toggle', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('enabled', () => (
    <Toggle label={'My label'} input={input} />
  ))
  .add('disabled', () => (
    <Toggle label={'My label'} input={input2} />
  ));
