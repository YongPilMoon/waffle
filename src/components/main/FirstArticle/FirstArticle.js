import React, { Component } from 'react';
import { s3Url } from 'constant';
import { Link } from 'react-router-dom';
import Twemoji from 'react-twemoji';
import styles from './FirstArticle.module.scss';

class FirstArticle extends Component {
  render() {
    return (
      <article className={styles['first-article']}>
        <div className={styles['intro']}>
          <span className={styles['intro-text']}>Daliy log with Emoji</span>
          <Twemoji options={{ className: styles['twemoji'], folder: 'svg', ext: '.svg' }}>👻</Twemoji>
        </div>
        <Link to="/editor" className={styles['create-waffle-btn']}>
          <img className={styles['create-waffle-btn__icon']} src={`${s3Url}/image/mainpage/plus-icon.svg`} alt="create new waffle button" />
          <span className={styles['create-waffle-btn__text']}>Create new Waffle</span>
        </Link>
      </article>
    );
  }
}

export default FirstArticle;
