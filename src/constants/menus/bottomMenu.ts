import { BottomMenuItem } from './types';

export const bottomMenue: BottomMenuItem[] = [
  {
    name: 'Home',
    path: '/',
    title: 'Все записи',
    icon: 'mdi-apps',
    color: 'indigo-5',
  },
  {
    name: 'Notes',
    path: '/notes',
    title: 'Заметки',
    icon: 'mdi-text',
    color: 'pink-5',
  },
  {
    name: 'Logins',
    path: '/logins',
    title: 'Аккаунты',
    icon: 'mdi-web',
    color: 'light-blue-9',
  },
  // {
  //   name: 'Cards',
  //   path: '/cards',
  //   title: 'Банковские карты',
  //   icon: 'mdi-credit-card-multiple-outline',
  //   color: 'orange-4',
  // },
  {
    name: 'Favourite',
    path: '/favourite',
    title: 'Избранное',
    icon: 'mdi-star',
    color: 'yellow',
  },
];

export default bottomMenue;
