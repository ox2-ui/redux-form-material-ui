import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Checkbox from './Checkbox';
import Theme from '@ox2/theme-wrapper/Theme/Theme';

const input = {
  value: true,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

const input2 = {
  value: false,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

storiesOf('Checkbox', module)
  .addDecorator((getStory) => (
    <Theme>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </Theme>
  ))
  .add('on', () => (
    <Checkbox
      input={input}
      label={'My label'}
    />
  ))
  .add('on - disabled', () => (
    <Checkbox
      disabled={true}
      input={input}
      label={'My label'}
    />
  ))
  .add('off', () => (
    <Checkbox
      input={input2}
      label={'My label'}
    />
  ));
