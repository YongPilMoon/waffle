import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditorHeader from 'components/editor/EditorHeader';
import * as editorActions from 'store/reducers/editor';

class EditorHeaderContainer extends Component {
  render() {
    return (
      <EditorHeader gridSize={this.props.gridSize} setGridSize={this.props.setGridSize} />
    );
  }
}

EditorHeaderContainer.propTypes = {
  gridSize: PropTypes.number.isRequired,
  setGridSize: PropTypes.func.isRequired,
};

export default connect(state => ({
  gridSize: state.editor.get('gridSize'),
}), dispatch => ({
  setGridSize: size => dispatch(editorActions.setGridSize(size)),
}))(EditorHeaderContainer);

