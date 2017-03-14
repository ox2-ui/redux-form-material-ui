/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TextField from './TextField';
import Theme from '@ox2/theme-wrapper/Theme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Material UI
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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

it('renders correctly', () => {
  const wrapper = mount(
    <Theme>
      <TextField
        id={'myId'}
        input={input}
        label={'My label'}
        meta={meta}
      />
    </Theme>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders with error', () => {
  const wrapper = mount(
    <Theme>
      <TextField
        id={'myId'}
        input={input}
        label={'My label'}
        meta={metaError}
      />
    </Theme>
  );

  expect(wrapper).toMatchSnapshot();
});
