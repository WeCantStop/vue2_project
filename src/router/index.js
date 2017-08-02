import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  {path: "/", component: resolve => require(['@/components/Hello'], resolve),  name: "Hello"},
  {path: "/home", component: resolve => require(['@/components/HelloFromVux'], resolve),  name: "home"}
];

export default new Router({
  routes
})
