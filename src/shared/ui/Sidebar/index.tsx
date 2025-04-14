import React from 'react';
import classNames from 'classnames/bind';

import Navigation from '../Navigation';

import logo from '../../../assets/svg/logo.svg';
import about from '../../../assets/svg/about.svg';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Sidebar: React.FC = () => {
  return (
    <div className={cx('sidebar')}>
      <div className={cx('top')}>
        <div className={cx('logo')}>
          <img src={logo} alt="logo" />
          <div className={cx('text')}>мт.ру</div>
        </div>
        <Navigation />
      </div>
      <div className={cx('bottom')}>
        <img src={about} alt="about" />
        <div className={cx('text')}>О компании...</div>
      </div>
    </div>
  );
};

export default Sidebar;
