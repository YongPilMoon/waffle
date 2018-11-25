import React from 'react';
import { CheckBox, InputText, Button } from '../common/Form/index';
import styles from './Entry.module.scss';

const inputCustomize = { 'input-wrap': [], 'input-text': ['entry-input'] };
const checkboxCustomize = { 'checkbox-label': ['sign-checkbox-label'], 'checkbox-input': [], 'checkbox-mark': [] };
const SignForm = () => (
  <form className={styles['entry-form']}>
    <fieldset>
      <legend>Sign up</legend>
      <InputText placeHolder="✉️ email" classNames={inputCustomize} />
      <InputText placeHolder="😀 username" classNames={inputCustomize} />
      <InputText placeHolder="🔒 password" classNames={inputCustomize} />
    </fieldset>
    <div className={styles['desc']}>
      <CheckBox classNames={checkboxCustomize} />
      <p>
          I understand and agree to Waffle’s <br />
        <a className={styles['highlight']}>Terms of Service</a> and <a className={styles['highlight']}>Privacy Policy</a>.
      </p>
    </div>
    <Button text="sign up" />
    <span />
  </form>
);

export default SignForm;
