import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

export enum inputText {
  NAME = 'Имя',
  EMAIL = 'Почта',
  PASSWORD = 'Пароль',
}
// TODO типизировать объекты
export const inputLogin = [
  { type: 'email', placeholder: inputText.EMAIL },
  { type: 'password', placeholder: inputText.PASSWORD },
];
export const inputLogout = [
  { type: 'text', placeholder: inputText.EMAIL },
  { type: 'email', placeholder: inputText.EMAIL },
  { type: 'password', placeholder: inputText.PASSWORD },
];

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

function Input({ type, placeholder }: InputProps) {
  return <input className={styles.input} type={type} placeholder={placeholder} />;
}

export default Input;
