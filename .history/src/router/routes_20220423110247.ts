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
          title: 'Все элементы',
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
          title: 'Логины',
          icon: 'mdi-login-variant',
          color: 'lime-6',
        },
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
        path: '/notes',
        component: () => import('pages/Favourite.vue'),
        meta: {
          menu: true,
          title: 'Избранное',
          icon: 'mdi-star',
          color: 'yellow',
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
