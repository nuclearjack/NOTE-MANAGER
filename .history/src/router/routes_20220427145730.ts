// components: {
//   default: () => import('layouts/MainLayout.vue'),
//   sort: () => import('components/partials/dialogs/DialogPostsSort.vue'),
// },

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '/',
        components: {
          default: () => import('pages/Index.vue'),
          sort: () => import('components/partials/dialogs/DialogPostsSort.vue'),
        },
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
        components: {
          default: () => import('pages/Logins.vue'),
          sort: () => import('components/partials/dialogs/DialogPostsSort.vue'),
        },
        meta: {
          menu: true,
          title: 'Аккаунты',
          icon: 'mdi-key',
          color: 'teal-14',
        },
      },
      {
        name: 'Cards',
        path: '/cards',
        components: {
          default: () => import('pages/Cards.vue'),
          sort: () => import('components/partials/dialogs/DialogPostsSort.vue'),
        },
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
        components: {
          default: () => import('pages/Notes.vue'),
          sort: () => import('components/partials/dialogs/DialogPostsSort.vue'),
        },
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
        components: {
          default: () => import('pages/Favourite.vue'),
          sort: () => import('components/partials/dialogs/DialogPostsSort.vue'),
        },
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
        components: {
          default: () => import('pages/Trash.vue'),
          sort: () => import('components/partials/dialogs/DialogPostsSort.vue'),
        },
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
