import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RadioGroup from './RadioGroup';
import Theme from '@ox2/theme-wrapper/Theme/Theme';
import { RadioButton } from 'material-ui/RadioButton';

const input = {
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

storiesOf('RadioGroup', module)
  .addDecorator((getStory) => (
    <Theme>
      <div style={{width: '320px', padding: '20px'}}>
        { getStory() }
      </div>
    </Theme>
  ))
  .add('default', () => (
    <RadioGroup input={input} name={'myRadio'}>
      <RadioButton label="male" value="male" />
      <RadioButton label="female" value="female" />
    </RadioGroup>
  ));
