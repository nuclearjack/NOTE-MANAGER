import { useSettingsStore } from 'src/stores/settings';
const settingsStore = useSettingsStore();

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('pages/Index.vue'),
        meta: {
          menu: true,
          title: 'Все записи',
          icon: 'mdi-apps',
          color: 'indigo-5',
        },
      },
      {
        name: 'Logins',
        path: '/logins',
        component: () => import('pages/Logins.vue'),
        meta: {
          menu: true,
          title: 'Аккаунты',
          icon: 'mdi-key',
          color: 'teal-14',
        },
        children: [
          {
            name: 'AddLogin',
            path: 'add',
            component: () =>
              import('components/partials/forms/FormAddLoginPost.vue'),
            beforeRouteEnter(to, from, next) {
              settingsStore.setDrawerBottom(true);
              next();
            },
            beforeRouteLeave(to, from, next) {
              settingsStore.setDrawerBottom(false);
              next();
            },
          },
        ],
      },
      {
        name: 'Cards',
        path: '/cards',
        component: () => import('pages/Cards.vue'),
        meta: {
          menu: true,
          title: 'Банковские карты',
          icon: 'mdi-credit-card-multiple-outline',
          color: 'orange-4',
        },
      },
      {
        name: 'Notes',
        path: '/notes',
        component: () => import('pages/Notes.vue'),
        meta: {
          menu: true,
          title: 'Заметки',
          icon: 'mdi-note-outline',
          color: 'pink-5',
        },
      },
      {
        name: 'Favourite',
        path: '/favourite',
        component: () => import('pages/Favourite.vue'),
        meta: {
          menu: true,
          title: 'Избранное',
          icon: 'mdi-star',
          color: 'yellow',
        },
      },
      {
        name: 'Trash',
        path: '/trash',
        component: () => import('pages/Trash.vue'),
        meta: {
          menu: true,
          title: 'Корзина',
          icon: 'mdi-delete',
          color: 'red-6',
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;