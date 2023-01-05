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
            keepAlive: true,
          },
        },
        {
          path: "music",
          name: "music",
          component: () => import("../view/music/Music.vue"),
          redirect: { name: "picked" },
          meta: {
            menu: "music",
          },
          children: [
            {
              path: "picked",
              name: "picked",
              component: () => import("../view/music/picked/Picked.vue"),
              meta: {
                menu: "music",
                keepAlive: true,
              },
            },
            {
              path: "toplist",
              name: "toplist",
              component: () => import("../view/music/toplist/TopList.vue"),
              meta: {
                menu: "music",
                keepAlive: true,
              },
            },
            {
              path: "artist",
              name: "artist",
              component: () => import("../view/music/artist/Artist.vue"),
              meta: {
                menu: "music",
                title: "歌手",
                keepAlive: true,
              },
            },
            {
              path: "category",
              name: "category",
              component: () => import("../view/music/category/Category.vue"),
              meta: {
                menu: "music",
                title: "分类歌单",
                keepAlive: true,
              },
            },
          ],
        },
        {
          path: "video",
          name: "video",
          component: () => import("../view/video/Video.vue"),
          meta: {
            menu: "video",
            title: "视频",
            keepAlive: true,
          },
        },
        {
          path: "dj",
          name: "dj",
          component: () => import("../view/dj/Dj.vue"),
          meta: {
            menu: "dj",
            title: "电台",
            keepAlive: true,
          },
        },
        {
          path: 'love',
          name: 'love',
          component: () => import("../view/love/Love.vue"),
          meta: {
            menu: 'love',
            title: '我喜欢',
            keepAlive: true
          }
        },
        {
          path: "playlist",
          name: "playlist",
          component: () => import("../view/playlist/PlayList.vue"),
        },
        {
          path: "album",
          name: "album",
          component: () => import("../view/album/Album.vue"),
        },
      ],
    },
  ],
});

export default router;
