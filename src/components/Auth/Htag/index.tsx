import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './styles.module.scss';
import cn from 'classnames';

export enum Type {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

interface HtagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: Type;
}

const Htag = ({ tag, children, className, ...props }:HtagProps ): JSX.Element => {
  switch (tag) {
    case Type.H1:
      return (
        <h1 className={cn(styles.heading, className)} {...props}>
          {children}
        </h1>
      );
    case Type.H2:
      return (
        <h2 className={cn(styles.heading, className)} {...props}>
          {children}
        </h2>
      );
    case Type.H3:
      return (
        <h3 className={cn(styles.heading, className)} {...props}>
          {children}
        </h3>
      );
    default:
      const errHtag: never = tag;
      return <></>;
  }
};

export default Htag;
