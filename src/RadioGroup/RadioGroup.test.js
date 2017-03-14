/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import RadioGroup from './RadioGroup';
import Theme from '@ox2/theme-wrapper/Theme';
import { RadioButton } from 'material-ui/RadioButton';

const input = {
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

it('renders correctly', () => {
  const wrapper = mount(
    <Theme>
      <RadioGroup input={input} name={'myRadio'}>
        <RadioButton label="male" value="male" />
        <RadioButton label="female" value="female" />
      </RadioGroup>
    </Theme>
  );

  expect(wrapper).toMatchSnapshot();
});

