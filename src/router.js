import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import SignupPage from './components/Signup/SignupPage.vue';
import LoginPage from './components/Login/LoginPage.vue';
import DashboardPage from './components/Dashboard/DashboardPage.vue';
import ChangePage from './components/Change/ChangePage.vue';
import SearchPage from './components/Search/SearchPage.vue';
import SearchResult from './components/Search/SearchResult.vue';
import RestorePasswordPage from './components/RestorePassword/RestorePasswordPage.vue';
import ChangePasswordPage from './components/Change/ChangePasswordPage.vue'

Vue.use(Router);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/signup', name: 'signup', component: SignupPage},
    { path: '/login', name: 'login', component: LoginPage},
    { path: '/dashboard', name: 'dashboard', component: DashboardPage},
    { path: '/change', name: 'change', component: ChangePage},
    { path: '/search', name: 'search', component: SearchPage},
    { path: '/search/result', name: 'searchResult', component: SearchResult},
    { path: '/restorePassword', name: 'restorePassword', component: RestorePasswordPage},
    { path: '/changePassword', name: 'changePassword', component: ChangePasswordPage}
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new Router({
    routes // short for `routes: routes`
  })

  export default router;