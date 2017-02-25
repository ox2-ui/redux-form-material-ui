import React, { PropTypes } from 'react';
import { default as MaterialToggle } from 'material-ui/Toggle';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    marginTop: '10px',
    borderBottom: '1px solid rgb(224, 224, 224)',
  },
  thumbSwitched: {
    backgroundColor: 'hsla(145, 63%, 42%, 1)',
  },
  trackSwitched: {
    backgroundColor: 'hsla(145, 63%, 42%, .3)',
  },
  label: {
    fontSize: '13.5px',
    color: 'hsla(0, 0%, 35%, 1)',
  },
};

/**
 * Toggle Component
 */
const Toggle = ({ input, label }) => (
  <div style={styles.wrapper}>
    <MaterialToggle
      label={label}
      labelStyle={styles.label}
      thumbSwitchedStyle={styles.thumbSwitched}
      trackSwitchedStyle={styles.trackSwitched}
      toggled={input.value ? true : false} // eslint-disable-line no-unneeded-ternary
      onToggle={input.onChange} // eslint-disable-line react/jsx-handler-names
    />
  </div>
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
