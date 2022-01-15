import Vue from 'vue'
import Router from 'vue-router'
 
import HelloWorld from '../components/HelloWorld'
import PageNotFound from '../components/PageNotFound'

Vue.use(Router)

export default[
    {
        path:"/",   // path 设置为 “/” ，默认显示该页面
        component:HelloWorld,
        name:"Home"
    }, 
    {
        path: '*',
        name: '404 Not Found',
        component: PageNotFound
    }
]
