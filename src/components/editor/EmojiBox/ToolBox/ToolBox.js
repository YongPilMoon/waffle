import React from 'react';
import styles from './ToolBox.module.scss';
import { s3Url } from 'constant';

const ToolBox = () => (
  <div className={styles['tool-box']}>
    <div className={styles['icon-wrapper']}>
      <img src={`${s3Url}/image/editor/icon-cut.svg`} alt="cut icon" />
    </div>
    <div className={styles['icon-wrapper']}>
      <img src={`${s3Url}/image/editor/icon-copy.svg`} alt="copy icon" />
    </div>
    <div className={styles['icon-wrapper']}>
      <img src={`${s3Url}/image/editor/icon-paste.svg`} alt="paste icon" />
    </div>
    <div className={styles['icon-wrapper']}>
      <img src={`${s3Url}/image/editor/icon-delete.svg`} alt="delete icon" />
    </div>
  </div>
);

export default ToolBox;
