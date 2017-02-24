import React, { PropTypes } from 'react';
import { default as MaterialTimePicker } from 'material-ui/TimePicker';

/**
 * TimePicker Component
 */
const TimePicker = ({input, label, ...custom }) => (
  <MaterialTimePicker
    floatingLabelText={label}
    onChange={(event, value) => input.onChange(value)}
    textFieldStyle={{fontSize: '18px', width: '100%'}}
    {...custom}
  />
);

TimePicker.propTypes = {
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

export default TimePicker;
