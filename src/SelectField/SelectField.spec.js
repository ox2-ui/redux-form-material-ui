/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import SelectField from './SelectField';
import { assert } from 'chai';

describe('SelectField', () => {
  it('should render a <SelectField> element', () => {
    const wrapper = shallow(
      <SelectField />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
