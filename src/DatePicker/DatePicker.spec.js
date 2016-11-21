/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import DatePicker from './DatePicker';
import { assert } from 'chai';

describe('DatePicker', () => {
  it('should render a <DatePicker> element', () => {
    const wrapper = shallow(
      <DatePicker />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
