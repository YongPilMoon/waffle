import React from 'react';
import { LoginForm, SignForm } from './index';
import styles from './Entry.module.scss';

const components = { LoginForm, SignForm };
class Entry extends React.Component {
  state = { formType: 'LoginForm' };

  routeComponent = () => {
    const Component = components[this.state.formType];
    return <Component />;
  };

  handleRouting = (val) => {
    this.setState({ formType: val });
  };
  render() {
    return (
      <article>
        <h1 className={styles['entry-title']}>
          <a onClick={() => { this.handleRouting('SignForm'); }} alt="sign up" className={this.state.formType === 'SignForm' ? styles['clicked'] : styles['unClicked']}>Sign Up</a>
          <span className={styles['unClicked']}>&nbsp;or&nbsp;</span>
          <a onClick={() => { this.handleRouting('LoginForm'); }} alt="log in" className={this.state.formType === 'LoginForm' ? styles['clicked'] : styles['unClicked']}>Log In</a>
        </h1>
        {this.routeComponent()}
      </article>
    );
  }
}

export default Entry;
