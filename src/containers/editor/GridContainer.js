import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from 'components/editor/Grid';
import * as editorActions from 'store/reducers/editor';

class GridContainer extends Component {
  render() {
    return (
      <Grid
        gridSize={this.props.gridSize}
        selectGrid={this.props.selectGrid}
        emojis={this.props.emojis}
      />
    );
  }
}

GridContainer.propTypes = {
  gridSize: PropTypes.number.isRequired,
  selectGrid: PropTypes.func.isRequired,
  emojis: PropTypes.shape({}).isRequired,
};

export default connect(state => ({
  gridSize: state.editor.get('gridSize'),
  emojis: state.editor.get('emojis'),
}), dispatch => ({
  selectGrid: index => dispatch(editorActions.selectGrid(index)),
}))(GridContainer);
