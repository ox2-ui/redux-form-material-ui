/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import SelectFieldMenu from './SelectFieldMenu';
import { assert } from 'chai';

describe('SelectFieldMenu', () => {
  it('should render a <SelectFieldMenu> element', () => {
    const wrapper = shallow(
      <SelectFieldMenu />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
