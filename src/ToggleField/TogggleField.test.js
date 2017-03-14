/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ToggleField from './ToggleField';
import Theme from '@ox2/theme-wrapper/Theme';

const input = {
  value: true,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

const input2 = {
  value: false,
  onChange: () => console.log('🍇', 'onChange'), // eslint-disable-line no-console
};

it('renders on correctly', () => {
  const wrapper = mount(
    <Theme>
      <ToggleField
        input={input}
        label={'My label'}
      />
    </Theme>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders off correctly', () => {
  const wrapper = mount(
    <Theme>
      <ToggleField
        input={input2}
        label={'My label'}
      />
    </Theme>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders disabled correctly', () => {
  const wrapper = mount(
    <Theme>
      <ToggleField
        disabled={true}
        input={input2}
        label={'My label'}
      />
    </Theme>
  );

  expect(wrapper).toMatchSnapshot();
});
