/* 路由器对象模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import MsgDetail from '../pages/MsgDetail'

/* 使用声明 */
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id',
              component: MsgDetail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]

})

