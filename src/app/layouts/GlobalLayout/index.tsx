import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import Sidebar from '../../../shared/ui/Sidebar';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const GlobalLayout: React.FC = () => {
  return (
    <main className={cx('global-layout')}>
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default GlobalLayout;
