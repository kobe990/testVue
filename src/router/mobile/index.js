import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
  mode: 'hash',
  base: '/test/',
  routes: [
    {
      meta: {
        titleKey: 'title.ddbindcard.bank.list',
      },
      name: 'directDebitBankList',
      path: '/ddbindcard/bankList',
      component: () => import(/* webpackChunkName: "bankListPageMobile" */ '~views/mobile/ddbindcard/ddbindcard'),
    },
  ],
})


export default router
