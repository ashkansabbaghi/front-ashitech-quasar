const routes = [{
    path: '/master',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Index.vue')
    }]
  },
  {
    path: '/',
    component: () => import('layouts/MainAshitech.vue'),
    children: [{
        path: '',
        component: () => import('pages/About.vue')
      },
      {
        path: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
        meta: {
          requireLogin: true
        }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
