import React from 'react';
import styles from './Form.module.scss';
import PropTypes from 'prop-types';


class InputText extends React.Component {
  state = { value: '' };

  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className={`${styles['input-wrap']} ${this.props.classNames['input-wrap']}`}>
        <input className={`${styles['input-text']} ${this.props.classNames['input-text']}`} type="text" onChange={this.changeHandler} placeholder={this.props.placeHolder} value={this.state.value} />
      </div>
    );
  }
}

InputText.defaultProps = {
  classNames: { 'input-wrap': [], 'input-text': [], 'checkbox-mark': [] },
};

InputText.propTypes = {
  classNames: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  placeHolder: PropTypes.string.isRequired,
};

export default InputText;
