import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RadioGroup from './RadioGroup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton } from 'material-ui/RadioButton';

const input = {
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

storiesOf('RadioGroup', module)
  .addDecorator((getStory) => (
    <MuiThemeProvider>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <RadioGroup input={input} name={'myRadio'}>
      <RadioButton value="male" label="male" />
      <RadioButton value="female" label="female" />
    </RadioGroup>
  ));
