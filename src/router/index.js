/*
路由器对象模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopGoods/ShopRatings'
import ShopInfo from '../pages/Shop/ShopGoods/ShopInfo'

Vue.use(VueRouter) // 申明使用插件

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {path: '/login', component: Login},
    {path: '/', redirect: '/msite'},
    {
      path: '/shop',
      component: Shop,
      children: [
        {path: '/shop/goods', component: ShopGoods},
        {path: '/shop/ratings', component: ShopRatings},
        {path: '/shop/info', component: ShopInfo},
        {path: '', redirect: '/shop/goods'},
      ]
    }

  ]
})
