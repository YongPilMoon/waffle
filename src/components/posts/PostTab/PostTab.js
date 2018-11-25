import React, { Component, Fragment } from 'react';
import moment from 'moment';
import styles from './PostTab.module.scss';
import { s3Url } from 'constant';
import PostCalendar from '../PostCalendar';
import PostList from '../PostList';


class PostTab extends Component {
  state = {
    currentDate: moment(),
    isList: true,
  };

  handlePrevClick = () => {
    this.setState({ currentDate: this.state.currentDate.subtract(1, 'months') });
  };

  handleNextClick = () => {
    this.setState({ currentDate: this.state.currentDate.add(1, 'months') });
  };

  handleListToggleClick = () => {
    this.setState({ isList: !this.state.isList });
  };

  render() {
    const { isList } = this.state;
    return (
      <Fragment>
        <div className={styles['postTab-header']}>
          <div className={styles['month-selector']}>
            <span className={styles['month']}>{moment(this.state.currentDate).format('MMMM YYYY')}</span>
            <button className={styles['month-selector__button']} onClick={this.handlePrevClick}>
              <img className={styles['ico']} src={`${s3Url}/image/mypage/prevIcon.png`} alt="previous button" />
            </button>
            <button className={styles['month-selector__button']} onClick={this.handleNextClick}>
              <img className={styles['ico']} src={`${s3Url}/image/mypage/nextIcon.png`} alt="next button" />
            </button>
          </div>
          <div className={styles['list-toggle']}>
            <button
              onClick={this.handleListToggleClick}
              className={styles['list-button', isList && 'active']}
              disabled={isList}
            >
              List
            </button>
            <button
              onClick={this.handleListToggleClick}
              className={styles['calendar-button', !isList && 'active']}
              disabled={!isList}
            >
              Calendar
            </button>
          </div>
        </div>
        { isList ? <PostList /> : <PostCalendar currentDate={this.state.currentDate} /> }
      </Fragment>
    );
  }
}

export default PostTab;
