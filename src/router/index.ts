import { DashboardIcon } from '@radix-icons/vue';
import { createRouter, createWebHistory } from 'vue-router';

export const adminRoutes = [
  {
    path: '/dashboard',
    component: () => import('@/layout/DashboardLayout.vue'),
    name: 'dashboard',
    meta: {
      title: '仪表盘',
    },
    children: [
      {
        path: '',
        meta: {
          title: '实时活动',
          icon: DashboardIcon,
        },
        name: 'dashboard-index',
        component: () => import('@/views/DashboardView.vue'),
      },
      {
        path: 'tools',
        name: 'dashboard-tools',
        meta: {
          title: '工具',
        },
        component: () => import('@/views/DashboardToolsView.vue'),
      },
      {
        path: 'posts',
        name: 'dashboard-posts',
        meta: {
          description: '仪表盘',
          title: '报表',
        },
        component: () => import('@/views/DashboardPostsView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    ...adminRoutes,
  ],
});

router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
});

// router.afterEach((to, from) => {
//   console.log(to);
//   if (to.meta.title) {
//     document.title = to.meta.title as string;
//   }
// });

export default router;
