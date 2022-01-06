import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { faDiscord, faGooglePlus, faTelegram } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.scss';

export enum url {
  GOOGLE='/auth',
  TELEGRAM='/auth',
  DISCORD='/auth',
}

interface SocialProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  link: url;
  icon: IconProp;
}
// TODO типизировать объект
export const socialUrlAuth = [
  { icon: faGooglePlus, link: url.GOOGLE },
  { icon: faTelegram, link: url.TELEGRAM },
  { icon: faDiscord, link: url.DISCORD },
];

function Social({ icon, link }: SocialProps):JSX.Element {
  return (
      <Link to={link} className={styles.social}>
        <FontAwesomeIcon  icon={icon} size="lg"/>
      </Link>
  );
};

export default Social;
