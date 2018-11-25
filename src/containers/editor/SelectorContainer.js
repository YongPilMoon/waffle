import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selector from 'components/editor/EmojiBox/Selector';
import * as editorActions from 'store/reducers/editor';
import { connect } from 'react-redux';


class SelectorContainer extends Component {
  render() {
    return (
      <div>
        <Selector
          currentCategory={this.props.currentCategory}
          search={this.props.search}
          selectedGrid={this.props.selectedGrid}
          addEmoji={this.props.addEmoji}
        />
      </div>
    );
  }
}

SelectorContainer.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  selectedGrid: PropTypes.bool.isRequired,
  addEmoji: PropTypes.func.isRequired,
};

export default connect(state => ({
  selectedGrid: state.editor.get('selectedGrid'),
}), dispatch => ({
  addEmoji: (index, emoji) => dispatch(editorActions.addEmoji(index, emoji)),
}))(SelectorContainer);
