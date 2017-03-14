import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextField from './TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const input = {
  value: 'My value',
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

storiesOf('TextField', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <TextField
      input={input}
      label={'My label'}
      meta={meta}
    />
  ))
  .add('with error', () => (
    <TextField
      input={input}
      label={'My label'}
      meta={metaError}
    />
  ));
