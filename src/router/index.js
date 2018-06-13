import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import DetailPage from '../pages/detail.vue'
import CountPage from '../pages/detailpage/count.vue'
import ForecastPage from '../pages/detailpage/forecast.vue'
import AnalysisPage from '../pages/detailpage/analysis.vue'
import PublishPage from '../pages/detailpage/publish.vue'
import OrderListPage from '../pages/orderList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect:'/detail/count',
      children:[
        {
          path: 'count',
          component: CountPage
        },
        {
          path: 'forecast',
          component: ForecastPage
        },
        {
          path: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'publish',
          component: PublishPage
        }
      ]
    }
  ]
})
