import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

interface MusicMenu {
  label: string;
  name: string;
}

export function useMusicMenu() {
  const menus: MusicMenu[] = [
    {
      label: "精选",
      name: "picked",
    },
    {
      label: "有声电台",
      name: "sound_station",
    },
    {
      label: "排行",
      name: "toplist",
    },
    {
      label: "歌手",
      name: "artist",
    },
    {
      label: "分类歌单",
      name: "category",
    },
    {
      label: "数字专辑",
      name: "zj",
    },
  ];
  const route = useRoute();
  const router = useRouter();

  const currentMenu = ref(route.name);

  const onTabClick = ({ props }: { props: MusicMenu }) => {
    router.push({ name: props.name, replace: true });
  };

  watch(
    () => route.name,
    (v) => (currentMenu.value = v)
  );

  return {
    menus,
    currentMenu,
    onTabClick,
  };
}
