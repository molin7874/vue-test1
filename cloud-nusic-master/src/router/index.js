import Vue from 'vue'
import Router from 'vue-router'
import mheader from '@/m-header/m-header'
import user from '@/user/user'
import rank from '@/rank/rank'
import toplist from '@/toplist/toplist'
import singer from '@/singer/singer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'm-header',
      component: mheader
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/toplist',
      name: 'toplist',
      component: toplist
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    }
  ]
})
