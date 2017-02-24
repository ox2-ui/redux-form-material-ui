import React, { PropTypes } from 'react';
import { default as MaterialTextField } from 'material-ui/TextField';

const styles = {
  error: {
    color: 'hsla(6, 63%, 46%, 1)',
  },
  underline: {
    borderColor: 'hsla(214, 70%, 53%, 1)',
  },
  label: {
    color: 'hsla(0, 0%, 35%, 1)',
  },
  labelFocus: {
    color: 'hsla(214, 70%, 53%, 1)',
  },
  hint: {
    color: 'hsla(0, 0%, 67%, 1)',
    fontFamily: 'Roboto Condensed',
  },
  input: {
    fontFamily: 'Roboto Condensed',
  },
};

/**
 * TextField Component
 */
const TextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <MaterialTextField
    floatingLabelText={label}
    floatingLabelFixed={true}
    underlineFocusStyle={styles.underline}
    floatingLabelStyle={styles.label}
    floatingLabelFocusStyle={touched && error ? styles.error : styles.labelFocus}
    errorStyle={styles.error}
    inputStyle={styles.input}
    hintStyle={styles.hint}
    errorText={touched && error}
    style={{fontSize: '18px', width: '100%'}}
    {...input}
    {...custom}
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
