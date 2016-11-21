import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TimePicker from './TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const input = {
  value: true,
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

storiesOf('TimePicker', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <TimePicker label={'My label'} input={input} />
  ));
