/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';
import { assert } from 'chai';

describe('Checkbox', () => {
  it('should render a <Checkbox> element', () => {
    const wrapper = shallow(
      <Checkbox />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
