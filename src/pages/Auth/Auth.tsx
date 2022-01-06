import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Auth.module.scss';
import { Button } from '../../components/Auth/Button';
import Htag, { Type } from '../../components/Auth/Htag';
import Input, { inputLogin } from '../../components/Auth/Input';
import Social, { socialUrlAuth } from '../../components/Auth/Social';
import stylesGlobal from '../../index.module.scss';

const Auth = () => {
  //
  const [panel, setPanel] = useState(false)
  return (
    <>
      <div className={cn(styles.Auth)}>
        <div className={cn(styles.container, {[styles.switchPanel]:panel===true})}>
          <div className={styles.signIn}>
            <form action="#" className={styles.formAuth}>
              <Htag  tag={Type.H1}>Вход</Htag>
              <div className={styles.social}>
                {socialUrlAuth.map((item) => {
                  return <Social link={item.link} icon={item.icon} key={item.icon.iconName} />;
                })}
              </div>
              <span className={styles.subTitle}>или используйте свои данные</span>
              {inputLogin.map((item) => {
                return <Input type={item.type} placeholder={item.placeholder} />;
              })}
              <Link className={styles.link} to="/auth">Забыли свой пароль?</Link>

              <Button>Войти</Button>
            </form>
          </div>
          <div className={styles.signUp}>signUp</div>
          <div className={styles.overlayLeftPanel}>
          <Htag tag={Type.H1}>Welcome!</Htag>
            <p>Чтобы оставаться на связи с нами, войдите в систему со своими данными</p>
            <Button onClick={() => { setPanel(!panel) }} className={styles.buttonStroke} stroke={true}>
              Регистрация
            </Button>
          </div>
          <div className={styles.overlayRightPanel}>
            <Htag tag={Type.H1}>Привет, друг!</Htag>
            <p>Введите свои персональные данные чтобы отправиться в путешествие с нами</p>
            <Button onClick={() => { setPanel(!panel) }} className={styles.buttonStroke} stroke={true}>
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
