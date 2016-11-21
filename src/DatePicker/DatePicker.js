import React, { PropTypes } from 'react';
import { default as MaterialDatePicker } from 'material-ui/DatePicker';

/**
 * DatePicker Component
 */
const DatePicker = ({ input, label, meta, ...custom }) => ( // eslint-disable-line no-unused-vars
  <MaterialDatePicker
    floatingLabelText={label}
    onChange={(event, value) => input.onChange(value)}
    textFieldStyle={{fontSize: '18px', width: '100%'}}
    {...custom}
  />
);

DatePicker.propTypes = {
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

export default DatePicker;
