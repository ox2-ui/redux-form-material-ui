import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Toggle from './Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const input = {
  value: true,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

storiesOf('Toggle', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('enabled', () => (
    <Toggle label={'My label'} input={input} />
  ));
