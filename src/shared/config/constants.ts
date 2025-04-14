import feed from '../../assets/svg/feed.svg';
import channels from '../../assets/svg/channels.svg';
import video from '../../assets/svg/video.svg';
import saved from '../../assets/svg/saved.svg';
import notifications from '../../assets/svg/notifications.svg';
import chats from '../../assets/svg/chats.svg';

import { INavigationItem } from './interfaces';

export const NAVIGATION_ITEMS: INavigationItem[] = [
  {
    id: 1,
    href: '/',
    icon: feed,
    title: 'Лента',
  },
  {
    id: 2,
    href: 'channels',
    icon: channels,
    title: 'Каналы',
  },
  {
    id: 3,
    href: 'video',
    icon: video,
    title: 'Видео',
  },
  {
    id: 4,
    href: 'saved',
    icon: saved,
    title: 'Сохраненое',
  },
  {
    id: 5,
    href: 'notifications',
    icon: notifications,
    title: 'Уведомления',
    count: 1,
  },
  {
    id: 6,
    href: 'chats',
    icon: chats,
    title: 'Чаты',
    count: 1,
  },
];
