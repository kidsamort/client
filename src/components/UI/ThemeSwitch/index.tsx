import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface ThemeSwitchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

const ThemeSwitch=({className, ...props }: ThemeSwitchProps):JSX.Element => {
  return (
    <div className={cn(styles.themeSwitch, className)} {...props}>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
  );
}

export default ThemeSwitch;
