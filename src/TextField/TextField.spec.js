/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';
import { assert } from 'chai';

describe('TextField', () => {
  it('should render a <TextField> element', () => {
    const wrapper = shallow(
      <TextField />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
