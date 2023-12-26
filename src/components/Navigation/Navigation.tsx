import {FC} from 'react';

import "./Navigation.scss";
import logo from "../../assets/icons/logo.svg";
import keyIcon from "../../assets/icons/key-square.svg";
import cubeIcon from "../../assets/icons/3d-square.svg";
import userIcon from "../../assets/icons/user.svg";
import walletIcon from "../../assets/icons/wallet.svg";
import discountIcon from "../../assets/icons/discount.svg";
import messageIcon from "../../assets/icons/message.svg";
import rightIcon from "../../assets/icons/chevron.svg";
import rightIconActive from "../../assets/icons/chevron-active.svg";
import userImg from '../../assets/icons/user-image.png';
import { NavLink } from "../NavLink";

const navigationItems = [
  { icon: keyIcon, title: "Dashboard", link: "#", subMenu: false },
  { icon: cubeIcon, title: "Product", link: "#", subMenu: true },
  { icon: userIcon, title: "Customers", link: "#", subMenu: true },
  { icon: walletIcon, title: "Income", link: "#", subMenu: true },
  { icon: discountIcon, title: "Promote", link: "#", subMenu: true },
  { icon: messageIcon, title: "Help", link: "#", subMenu: true },
];

interface IProps {
  isShow: boolean;
}

export const Navigation: FC<IProps> = ({isShow}) => {
  return (
    <aside className={`navigation ${isShow ? 'navigation--open' : ''}`}>
      
      <a href="/" className="navigation__logo">
        <img className="navigation__logo-img" src={logo} alt="logo" />
        <span className="navigation__logo-version">v.01</span>
      </a>
      <nav className="navigation__list">
        {navigationItems.map((link) => {
          return (
            <NavLink key={link.title} link={link.link} active={link.title === 'Customers'}>
              <img className="navigation__list-link-img" src={link.icon} alt="img" />
              <span className="navigation__list-link-title">{link.title}</span>
              {link.title !== "Customers" && link.subMenu ? (
                <img className="navigation__list-link-arrow" src={rightIcon} alt=">" />
              ) : (
                link.title !== "Dashboard" && (
                  <img className="navigation__list-link-arrow" src={rightIconActive} alt=">" />
                )
              )}
            </NavLink>
          );
        })}
      </nav>
      <div className="navigation__user-info">
        <div className="navigation__user-info-image-wrapper">
          <img className="navigation__user-info-image-photo" src={userImg} alt="user" />
        </div>
        <div className="navigation__user-info-descr">
          <p className="navigation__user-info-descr-name">Evano</p>
          <p className="navigation__user-info-descr-job">Project Manager</p>
        </div>
      </div>
    </aside>
  );
};
