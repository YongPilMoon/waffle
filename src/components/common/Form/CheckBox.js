import React from 'react';
import styles from './Form.module.scss';
import PropTypes from 'prop-types';

const CheckBox = props => (
  <label className={`${styles['checkbox-label']} ${props.classNames['checkbox-label']}`} htmlFor="check">
    <input className={`${styles['checkbox-input']} ${props.classNames['checkbox-input']}`} id="check" type="checkbox" defaultChecked />
    <span className={`${styles['checkbox-mark']} ${props.classNames['checkbox-mark']}`} />
  </label>
);

CheckBox.defaultProps = {
  classNames: { 'checkbox-label': [], 'checkbox-input': [], 'checkbox-mark': [] },
};

CheckBox.propTypes = {
  classNames: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
};

export default CheckBox;
