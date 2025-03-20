import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discussrementuijian from '@/views/modules/discussrementuijian/list'
    import discussjifenshangcheng from '@/views/modules/discussjifenshangcheng/list'
    import dianzishangcheng from '@/views/modules/dianzishangcheng/list'
    import discussdianzishangcheng from '@/views/modules/discussdianzishangcheng/list'
    import storeup from '@/views/modules/storeup/list'
    import yonghu from '@/views/modules/yonghu/list'
    import jifenshangcheng from '@/views/modules/jifenshangcheng/list'
    import chat from '@/views/modules/chat/list'
    import xiaoshoutongji from '@/views/modules/xiaoshoutongji/list'
    import orders from '@/views/modules/orders/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import config from '@/views/modules/config/list'
    import rementuijian from '@/views/modules/rementuijian/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discussrementuijian',
        name: '热门推荐评论',
        component: discussrementuijian
      }
      ,{
	path: '/discussjifenshangcheng',
        name: '积分商城评论',
        component: discussjifenshangcheng
      }
      ,{
	path: '/dianzishangcheng',
        name: '电子商城',
        component: dianzishangcheng
      }
      ,{
	path: '/discussdianzishangcheng',
        name: '电子商城评论',
        component: discussdianzishangcheng
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/jifenshangcheng',
        name: '积分商城',
        component: jifenshangcheng
      }
      ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
      ,{
	path: '/xiaoshoutongji',
        name: '销售统计',
        component: xiaoshoutongji
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/rementuijian',
        name: '热门推荐',
        component: rementuijian
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
