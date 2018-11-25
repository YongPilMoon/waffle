import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './Grid.module.scss';

class Grid extends Component {
  handleOnClick = (e) => {
    // event target으로 emoji node가 잡히면 부모 node인 cell node로 target을 변경한다
    const target = e.target.className === styles['emoji'] ? e.target.parentNode : e.target;
    _.map(document.getElementsByClassName(styles['selected']), cell => cell.classList.remove(styles['selected']));
    target.classList.add(styles['selected']);
    const index = _.findIndex(document.getElementsByClassName(styles['cell']), cell => cell.classList.contains(styles['selected']));
    this.props.selectGrid(index);
  };

  renderCells = (gridSize, emojis) => {
    const gutter = 10;
    const width = `calc((100% - ${gutter}px * ${gridSize - 1}) / ${gridSize})`;
    const height = `calc((100% - ${gutter}px * ${gridSize - 1}) / ${gridSize})`;
    const cellStyle = {
      width,
      height,
      marginTop: gutter,
    };
    // emojiBox size - padding size
    // 664px - 100px = 564px
    const emojiStyle = {
      lineHeight: `calc(((564px - ${gutter}px * ${gridSize - 1}) / ${gridSize}))`, // cell size
      fontSize: `calc(((564px - ${gutter}px * ${gridSize - 1}) / ${gridSize}) * 3 / 4)`,
    };

    return _.range(gridSize ** 2).map((cell, index) =>
      <div
        onClick={e => this.handleOnClick(e)}
        className={`${styles['cell']} ${(index + 1) % gridSize !== 0 && 'cell-margin'}`}
        style={cellStyle}
      >
        <div className={styles['emoji']} style={emojiStyle}>{emojis.toJS()[index]}</div>
      </div>);
  };

  render() {
    return (
      <div className={styles['grid']} >
        {this.renderCells(this.props.gridSize, this.props.emojis)}
      </div>
    );
  }
}

Grid.propTypes = {
  gridSize: PropTypes.number.isRequired,
  selectGrid: PropTypes.func.isRequired,
  emojis: PropTypes.shape({}).isRequired,
};

export default Grid;
