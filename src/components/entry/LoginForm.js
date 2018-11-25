import React from 'react';
import { InputText, Button } from '../common/Form/index';
import styles from './Entry.module.scss';

const inputCustomize = { 'input-wrap': [], 'input-text': ['entry-input'] };
const buttonCustomize = { 'button-wrap': ['login-button'], 'button-txt': [] };

const LoginForm = () => (
  <form className={styles['entry-form']}>
    <fieldset>
      <legend>Log in</legend>
      <InputText placeHolder="✉️ email" classNames={inputCustomize} />
      <InputText placeHolder="🔒 password" classNames={inputCustomize} />
    </fieldset>
    <Button text="sign in" classNames={buttonCustomize} />
  </form>
);

export default LoginForm;
