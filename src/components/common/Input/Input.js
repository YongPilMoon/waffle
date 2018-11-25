import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

class Input extends React.Component {
  render() {
    const {
      placeHolder, handleChange, type, value, id, name, autoComplete,
    } = this.props;
    return (
      <div className={`${styles['input-wrap']}`}>
        <input
          className={`${styles['input-text']}`}
          id={id}
          name={name}
          type={type}
          onChange={handleChange}
          placeholder={placeHolder}
          value={value}
          autoComplete={autoComplete}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  value: '',
  autoComplete: '',
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  autoComplete: PropTypes.string,
};

export default Input;
