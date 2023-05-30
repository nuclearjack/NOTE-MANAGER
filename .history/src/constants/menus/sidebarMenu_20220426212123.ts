import { SidebarMenuItem } from './types';

export const sidebarMenu: SidebarMenuItem[][] = [
  [
    {
      title: 'Все записи',
      icon: 'mdi-apps',
      link: '/',
    },
    {
      title: 'Избранное',
      icon: 'mdi-star',
      link: '/favourite',
    },
  ],
  [
    {
      title: 'Аккаунты',
      icon: 'mdi-key',
      link: '/logins',
    },
    {
      title: 'Банковские карты',
      icon: 'mdi-credit-card-multiple-outline',
      link: '/cards',
    },
    {
      title: 'Заметки',
      icon: 'mdi-note-outline',
      link: '/notes',
    },
    {
      title: 'Корзина',
      icon: 'mdi-delete',
      link: '/trash',
    },
  ],
  // [
  //   {
  //     title: 'Генератор пароля',
  //     icon: 'mdi-key',
  //     link: '/generator',
  //   },
  // ],
];

export default sidebarMenu;
