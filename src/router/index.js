import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'home', // 設定頁面一進來就顯示的頁面，即重定向到goods元件，這裡寫的內容是對應組將的component的值
    component: () => import('../views/FrontView.vue'),
    children: [
      // 首頁
      {
        path: 'home',
        component: () => import('../views/HomeView.vue')
      },
      // 資料變更
      {
        path: 'DataView',
        component: () => import('../views/DataView.vue')
      }
      // // 產品頁面
      // {
      //   path: 'products',
      //   component: () => import('../views/ProductsView.vue')
      // },
      // // 單一產品頁
      // {
      //   // Node.js
      //   path: 'product/:id',
      //   component: () => import('../views/ProductView.vue')
      // },
      // // 購物車頁面
      // {
      //   path: 'cart',
      //   component: () => import('../views/CartView.vue')
      // },
      // // 結帳清單
      // {
      //   path: 'table',
      //   component: () => import('../views/TableView.vue')
      // }
    ]
  }
  // ,
  // {
  //   path: '/admin',
  //   component: () => import('../views/DashboardView.vue'),
  //   children: [
  //     {
  //       path: 'products',
  //       component: () => import('../views/AdminProducts.vue')
  //     },
  //     {
  //       path: 'coupon',
  //       component: () => import('../views/AdminCoupon.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
