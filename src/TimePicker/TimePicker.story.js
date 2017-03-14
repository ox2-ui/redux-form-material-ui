import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TimePicker from './TimePicker';
import Theme from '@ox2/theme-wrapper/Theme';

const input = {
  value: true,
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

storiesOf('TimePicker', module)
  .addDecorator((getStory) => (
    <Theme>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </Theme>
  ))
  .add('default', () => (
    <TimePicker input={input} label={'My label'} />
  ));
