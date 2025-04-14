import React from 'react';
import classNames from 'classnames/bind';

import { NEWS } from '../../shared/config/constants';
import avatar from '../../assets/png/avatar.png';

import styles from './styles.module.scss';
import SingleNews from './ui/SingleNews';

const cx = classNames.bind(styles);

const FeedPage: React.FC = () => {
  return (
    <div className={cx('feed-page')}>
      <div className={cx('header')}>
        <img src={avatar} alt="avatar" className={cx('header__logo')} />
        <div className={cx('header__text')}>Лента</div>
      </div>
      <div className={cx('news')}>
        {NEWS.map(({
          id, date, img, title, content,
        }) => (
          <SingleNews key={id} date={date} img={img} title={title} content={content} />
        ))}
      </div>

    </div>
  );
};

export default FeedPage;
