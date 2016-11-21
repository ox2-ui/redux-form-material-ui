import React, { PropTypes } from 'react';
import { default as MaterialToggle } from 'material-ui/Toggle';


/**
 * Toggle Component
 */
const Toggle = ({ input, label }) => (
  <MaterialToggle
    label={label}
    toggled={input.value ? true : false} // eslint-disable-line no-unneeded-ternary
    onToggle={input.onChange} // eslint-disable-line react/jsx-handler-names
  />
);

Toggle.propTypes = {
  /**
   * [redux-form] The props under the input key are what connects your input component to Redux and are meant to be destructured into your <input/> component.
   */
  input: PropTypes.any,
  /**
   * Input label text
   */
  label: PropTypes.string,
};

export default Toggle;
