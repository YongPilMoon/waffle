import React from 'react';
import styles from './Selector.module.scss';
import _ from 'lodash';
import PropTypes from 'prop-types';
import emojiList from 'emojiList';

const emojiGroup = _.groupBy(emojiList, 'category');

const searchEmoji = (search) => {
  const tagedEmojis = emojiList.filter(emoji =>
    _.some(emoji.tags.map(tag => _.includes(tag, search))));

  const aliasesEmojis = emojiList.filter(emoji =>
    _.some(emoji.aliases.map(aliase => _.includes(aliase, search))));

  const searchedEmojis = _.uniq(_.concat(tagedEmojis, aliasesEmojis));
  return searchedEmojis.map(emojiInfo => <span className={styles['emoji']}>{emojiInfo.emoji}</span>);
};

const Selector = ({
  currentCategory, search, selectedGrid, addEmoji,
}) => (
  <div className={styles['emoji-wrapper']}>
    {search ? searchEmoji(search) :
      emojiGroup[currentCategory].map(emojiInfo =>
        <button onClick={() => addEmoji(emojiInfo.emoji)} disabled={selectedGrid === -1} className={styles['emoji']}>
          {emojiInfo.emoji}
        </button>)}
  </div>);

Selector.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  selectedGrid: PropTypes.bool.isRequired,
  addEmoji: PropTypes.func.isRequired,
};

export default Selector;
