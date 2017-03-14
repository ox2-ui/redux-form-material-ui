import React, { PropTypes } from 'react';
import { default as MaterialSelectField } from 'material-ui/SelectField';

/**
 * SelectFieldMenu Component
 */
const SelectFieldMenu = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <MaterialSelectField
    children={children}
    errorText={touched && error}
    floatingLabelText={label}
    onChange={(event, index, value) => input.onChange(value)}
    style={{fontSize: '18px', width: '100%'}}
    {...custom}
    {...input}
  />
);

SelectFieldMenu.propTypes = {
  /**
   * The content of the select field.
   */
  children: PropTypes.node,
  /**
   * [redux-form] The props under the input key are what connects your input component to Redux and are meant to be destructured into your <input/> component.
   */
  input: PropTypes.any,
  /**
   * Input label text
   */
  label: PropTypes.string,
  /**
   * [redux-form] The props under the meta key are metadata about the state of this field that redux-form is tracking for you.
   */
  meta: PropTypes.any,
};

export default SelectFieldMenu;
