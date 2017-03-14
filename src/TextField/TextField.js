import React, { PropTypes } from 'react';
import { default as MaterialTextField } from '@ox2/material-ui/TextField';

/**
 * TextField Component
 */
const TextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <MaterialTextField
    errorText={touched && error}
    floatingLabelText={label}
    {...custom}
    {...input}
  />
);

TextField.propTypes = {
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

export default TextField;
