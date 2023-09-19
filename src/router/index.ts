/* eslint-disable */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StartView from '../views/StartView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: StartView,
    name: "start",
    meta: {
      start: true,
    },
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      login: true,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const enter = window.localStorage.getItem("enter");

  if (to.meta?.auth) {
    if (enter === "enabled") {
      next();
    } else {
      next({ name: "login" });
    }
  } else if (to.meta?.login) {
    if (enter !== "enabled") {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
