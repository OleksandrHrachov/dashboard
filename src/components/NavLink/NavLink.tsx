import React, {FC} from 'react';
import './NavLink.scss';

interface IProps {
  link: string;
  children: React.ReactNode;
  active: boolean;
}

export const NavLink: FC<IProps> = ({link, children, active = false}) => {
  return (
    <a className={`nav-link ${active ? 'nav-link--active': ''}`} href={link}>{children}</a>
  )
}
