import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DatePicker from './DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const input = {
  value: true,
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

storiesOf('DatePicker', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <DatePicker input={input} label={'My label'} />
  ));
