import React, { PropTypes } from 'react';
import { default as MaterialCheckbox } from 'material-ui/Checkbox';

/**
 * Checkbox Component
 */
const Checkbox = ({ input, label }) => (
  <MaterialCheckbox
    label={label}
    checked={input.value ? true : false} // eslint-disable-line no-unneeded-ternary
    onCheck={input.onChange} // eslint-disable-line react/jsx-handler-names
  />
);

Checkbox.propTypes = {
  /**
   * [redux-form] The props under the input key are what connects your input component to Redux and are meant to be destructured into your <input/> component.
   */
  input: PropTypes.any,
  /**
   * Input label text
   */
  label: PropTypes.string,
};

export default Checkbox;
