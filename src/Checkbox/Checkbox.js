import React, { PropTypes } from 'react';
import { default as MaterialCheckbox } from '@ox2/material-ui/Checkbox';

/**
 * Checkbox Component
 */
const Checkbox = ({ input, label, disabled }) => (
  <MaterialCheckbox
    checked={input.value ? true : false} // eslint-disable-line no-unneeded-ternary
    disabled={disabled}
    label={label}
    onCheck={input.onChange} // eslint-disable-line react/jsx-handler-names
  />
);

Checkbox.propTypes = {
  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,
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
