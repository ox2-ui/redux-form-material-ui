/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from './RadioGroup';
import { assert } from 'chai';

describe('RadioGroup', () => {
  it('should render a <RadioGroup> element', () => {
    const wrapper = shallow(
      <RadioGroup />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
