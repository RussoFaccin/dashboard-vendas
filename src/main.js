import Vue from 'vue';
import VueRouter from 'vue-router';
// Main component
import App from './App.vue';
// Pages
import FaturamentoPage from './pages/Faturamento.page.vue';
import LoginPage from './pages/Login.page.vue';
import './registerServiceWorker'

Vue.config.productionTip = false

// Routes
Vue.use(VueRouter);

const routes = [
  {path: '', component: isLogged() ? FaturamentoPage : LoginPage},
  {path: '/login', component: LoginPage},
  {path: '/faturamento', component: FaturamentoPage}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('.appRoot')

/*
================================================================================
Utils Functions
================================================================================
*/

function isLogged() {
  const isLogged = localStorage.getItem('credentials') ? true : false;
  return isLogged;
}