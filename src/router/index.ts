import { createRouter, createWebHashHistory } from "vue-router";
import { Pages } from "./pages";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: Pages.Home,
      component: () => import("../view/Root.vue"),
      redirect: {
        name: Pages.Discover,
      },
      children: [
        {
          path: "discover",
          name: "discover",
          component: () => import("../view/discover/Discover.vue"),
          meta: {
            menu: "discover",
            keepAlive: true
          }
        },
      ],
    },
  ],
});

export default router;
