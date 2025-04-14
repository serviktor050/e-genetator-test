import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface ISingleNewsProps {
    date: string;
    img: string;
    title: string;
    content: string;
}

const SingleNews: React.FC<ISingleNewsProps> = ({
  date, img, title, content,
}) => {
  return (
    <>
      <div className={cx('single-news')}>
        <img src={img} alt={title} className={cx('single-news__img')} />
        <div className={cx('single-news__title')}>
          {title}
          <span className={cx('single-news__date')}>
            {date}
          </span>
        </div>
        <div className={cx('single-news__content')}>{content}</div>
      </div>
      <div className={cx('border')} />
    </>

  );
};

export default SingleNews;
