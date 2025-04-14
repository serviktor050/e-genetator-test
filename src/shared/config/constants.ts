import feed from '../../assets/svg/feed.svg';
import channels from '../../assets/svg/channels.svg';
import video from '../../assets/svg/video.svg';
import saved from '../../assets/svg/saved.svg';
import notifications from '../../assets/svg/notifications.svg';
import chats from '../../assets/svg/chats.svg';

import { INavigationItem, INewsItem } from './interfaces';

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

export const NEWS: INewsItem[] = [
  {
    id: 1,
    date: '06.04.2025',
    img: 'https://cdn2.thecatapi.com/images/6qh.jpg',
    title: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
    content: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. '
        + 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, '
        + 'а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликац',
  },
  {
    id: 2,
    date: '05.03.2025',
    img: 'https://cdn2.thecatapi.com/images/cng.jpg',
    title: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
    content: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. '
        + 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, '
        + 'а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликац',
  },
  {
    id: 3,
    date: '18.01.2025',
    img: 'https://cdn2.thecatapi.com/images/c01.jpg',
    title: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
    content: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. '
        + 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, '
        + 'а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликац',
  },
];
