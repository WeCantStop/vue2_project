import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
  {path: "/", redirect: {name: "index"}},
  {path: "/index", component: resolve => require(['@/page/index'], resolve),  name: "index"},
  {path: "/reserve", component: resolve => require(['@/page/reserve'], resolve),  name: "reserve"}
];

export default new Router({
  routes
})
