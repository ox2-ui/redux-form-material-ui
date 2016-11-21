/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import TimePicker from './TimePicker';
import { assert } from 'chai';

describe('TimePicker', () => {
  it('should render a <TimePicker> element', () => {
    const wrapper = shallow(
      <TimePicker />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
