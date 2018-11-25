import React, { Component } from 'react';

import Category from './Category';
import Search from './Search';
import ToolBox from './ToolBox';
import SelectContainer from 'containers/editor/SelectorContainer';
import styles from './EmojiBox.module.scss';

class EmojiBox extends Component {
  state = {
    currentCategory: 'People',
    search: '',
  };

  handleEmojiCatClick = (category) => {
    this.setState({ currentCategory: category });
  };

  handleInputChange = (val) => {
    this.setState({ search: val });
  };

  render() {
    return (
      <div className={styles['emoji-box']}>
        <ToolBox />
        <Search handleInputChange={this.handleInputChange} search={this.state.search} />
        <Category
          currentCategory={this.state.currentCategory}
          handleEmojiCatClick={this.handleEmojiCatClick}
        />
        <SelectContainer currentCategory={this.state.currentCategory} search={this.state.search} />
      </div>
    );
  }
}

export default EmojiBox;
