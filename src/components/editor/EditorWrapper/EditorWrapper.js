import React, { Component } from 'react';
import styles from './EditorWrapper.module.scss';

import EmojiBox from 'components/editor/EmojiBox';
import GridContainer from 'containers/editor/GridContainer';
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';



class EditorWrapper extends Component {
  render() {
    return (
      <div>
        <EditorHeaderContainer />
        <div className={styles['editor-content']}>
          <GridContainer />
          <EmojiBox />
        </div>
      </div>
    );
  }
}

EditorWrapper.propTypes = {};

export default EditorWrapper;
