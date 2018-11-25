import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Category.module.scss';
import _ from 'lodash';
import emojiList from 'emojiList';

const findEmoji = (_emojiList, unicode) => _.find(_emojiList, emoji =>
  emoji.emoji.codePointAt(0).toString(16) === unicode.toLowerCase()).emoji;

const renderEmojiCategory = (handleEmojiCatClick, currentCategory) => {
  const categories = [
    { name: 'People', unicode: '1F600' },
    { name: 'Nature', unicode: '1F435' },
    { name: 'Foods', unicode: '1F354' },
    { name: 'Activity', unicode: '26BD' },
    { name: 'Places', unicode: '1F3E2' },
    { name: 'Objects', unicode: '1F4A1' },
    { name: 'Symbols', unicode: '2764' },
    { name: 'Flags', unicode: '1F3C1' }];
  return categories.map(category =>
    <span
      key={category.name}
      className={`${styles['category-emoji']} ${currentCategory === category.name && 'active-category'}`}
      onClick={() => handleEmojiCatClick(category.name)}
    >
      {findEmoji(emojiList, category.unicode)}
    </span>);
};

const Category = ({ handleEmojiCatClick, currentCategory }) => (
  <Fragment>
    <div className={styles['category-list']}>
      {renderEmojiCategory(handleEmojiCatClick, currentCategory)}
    </div>
    <div className={styles['category-list-border']}>Smileys & People</div>
  </Fragment>
);

Category.propTypes = {
  handleEmojiCatClick: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default Category;
