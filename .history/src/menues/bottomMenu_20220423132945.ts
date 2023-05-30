import { BottomMenuItem } from './types';

export const bottomMenue: BottomMenuItem[] = [
  {
    name: 'Home',
    path: '/',
    title: 'Все элементы',
    icon: 'mdi-apps',
    color: 'indigo-5',
  },
  {
    name: 'Logins',
    path: '/logins',
    title: 'Логины',
    icon: 'mdi-key',
    color: 'lime-7',
  },
  {
    name: 'Cards',
    path: '/cards',
    title: 'Банковские карты',
    icon: 'mdi-credit-card-multiple-outline',
    color: 'orange-4',
  },
  {
    name: 'Notes',
    path: '/notes',
    title: 'Заметки',
    icon: 'mdi-note-outline',
    color: 'pink-5',
  },
];

export default bottomMenue;
