import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { NAVIGATION_ITEMS } from '../../config/constants';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Navigation: React.FC = () => {
  return (
    <div className={cx('navigation')}>
      {NAVIGATION_ITEMS.map(({
        id, href, icon, title, count,
      }) => (
        <NavLink
          className={({ isActive }) => (
            isActive
              ? cx('item__active')
              : cx('item')
          )}
          to={href}
          key={id}
        >
          <img src={icon} alt={title} />
          <div className={cx('item__text')}>{title}</div>
          {count && (
            <div className={cx('item__count')}>{count}</div>
          )}
        </NavLink>
      ))}
    </div>
  );
};
export default Navigation;
