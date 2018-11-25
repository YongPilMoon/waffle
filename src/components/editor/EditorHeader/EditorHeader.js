import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './EditorHeader.module.scss';
import { s3Url } from 'constant';
import PropTypes from 'prop-types';

class EditorHeader extends Component {
  state = {
    dropDown: false,
  };

  handleOnClick = () => {
    this.setState({ dropDown: !this.state.dropDown });
  };

  renderGridSize = () => (
    <div className={styles['grid-size-wrapper']}>
      {_.range(10).map(index =>
        <span
          onClick={() => this.props.setGridSize(index + 1)}
          className={styles['grid-size']}
        >{index + 1}
        </span>)}
    </div>);

  render() {
    return (
      <div className={styles['emoji-header']}>
        <div className={styles['emoji-header-left-side']}>
          <Link to="my-page" className={styles['back-btn']}>
            <img src={`${s3Url}/image/editor/icon-back.svg`} alt="back button icon" />
            <span className={styles['back-btn-txt']}>Back</span>
          </Link>
          <div className={styles['grid-select-wrapper']}>
            <img src={`${s3Url}/image/editor/icon-grid.svg`} alt="grid icon" />
            <span className={styles['grid-select-txt']}>Grid</span>
            <button
              onClick={this.handleOnClick}
              className={styles['grid-select']}
            >{this.props.gridSize} &times; {this.props.gridSize}
            </button>
            {this.state.dropDown && this.renderGridSize()}
          </div>
        </div>
        <button className={styles['done-btn']}>Done</button>
      </div>
    );
  }
}

EditorHeader.propTypes = {
  gridSize: PropTypes.number.isRequired,
  setGridSize: PropTypes.func.isRequired,
};

export default EditorHeader;
