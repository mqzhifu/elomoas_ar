import { createRouter, createWebHistory } from "vue-router";
import SettingView from "../views/setting"
import VideoView from "@/views/video";
import FileView from "@/views/file";
import Home from "@/views/Home";
import Blank from "@/views/Blank.vue";
import Screen from "@/views/Screen";

import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/login";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/blank",
    name: "blank",
    component: Blank,
  },
  {
    path: "/screen",
    name: "screen",
    component: Screen,
  },
  {
    path: "/file",
    name: "file",
    component: FileView,
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: LoginView,
  // },
  {
    path: "/setting",
    name: "setting",
    component: SettingView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
