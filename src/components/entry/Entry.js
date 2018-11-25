import React from 'react';
import { LoginForm, SignForm } from './index';
import styles from './Entry.module.scss';

const components = { LoginForm, SignForm };
class Entry extends React.Component {
  state = { formType: 'SignForm' };

  routeComponent = () => {
    const Component = components[this.state.formType];
    return <Component />;
  };

  handleRouting = (val) => {
    this.setState({ formType: val });
  };

  render() {
    const { formType } = this.state;
    return (
      <article>
        <h1 className={styles['entry-title']}>
          <button
            type="button"
            onClick={() => { this.handleRouting('SignForm'); }}
            className={formType === 'SignForm' ? styles.clicked : styles.unClicked}
          >
            Sign Up
          </button>
          <span className={styles.unClicked}>&nbsp;or&nbsp;</span>
          <button
            type="button"
            onClick={() => { this.handleRouting('LoginForm'); }}
            className={formType === 'LoginForm' ? styles.clicked : styles.unClicked}
          >
            Log In
          </button>
        </h1>
        {this.routeComponent()}
      </article>
    );
  }
}

export default Entry;
