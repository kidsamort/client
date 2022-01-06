import React, { ReactNode, FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  stroke?: boolean;
}

export const Button = ({ children, className, stroke, ...props }: ButtonProps): JSX.Element => {
  return (
    <>
      <button
        className={cn(styles.button, className, { [styles.stroke]: stroke === true })}
        {...props}>
        {children}
      </button>
    </>
  );
};
