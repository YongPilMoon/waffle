import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostCalendar.module.scss';
import { monthCalendar } from 'helpers/monthCalendar';

const PostCalendar = ({ currentDate }) => {
  const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const calendarData = monthCalendar(currentDate.year(), currentDate.month());
  return (
    <div className={styles['calendar']}>
      {calendarData.map(week =>
        <div className={styles['week']}>
          {week.map((date, i) =>
            <div className={styles['date-wrapper']}>
              <span className={`${styles[Days[i] === 'Sun' && 'sun']} ${styles[Days[i] === 'Sat' && 'sat']}
                  ${styles['day']}`}>{Days[i]}</span>
              <span className={styles['date']}>{date} { date === 1 && currentDate.format('MMMM').toLowerCase() } </span>
              <div className={styles['thumbnail']} />
            </div>)}
        </div>)}
    </div>
  );
};

PostCalendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
};

export default PostCalendar;

