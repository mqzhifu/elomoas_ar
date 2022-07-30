import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingView from "../views/setting"
import VideoView from "@/views/video";
import FileVie from "@/views/file";
const routes = [
  {
    path: "/",
    name: "home",
    // component: HomeView,
  },
  {
    path: "/blank",
    name: "blank",
    // component: HomeView,
  },
  {
    path: "/screen",
    name: "screen",
    // component: HomeView,
  },
  {
    path: "/file",
    name: "file",
    component: FileVie,
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
  },
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
