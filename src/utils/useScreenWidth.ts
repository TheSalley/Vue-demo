import { ref, onMounted, onUnmounted } from "vue";
import { throttle } from "lodash";

let screen_width = ref<number>(0);

export let useScreenWidth = () => {
  onMounted(() => {
    window.addEventListener(
      "resize",
      throttle(() => {
        screen_width.value = document.body.clientWidth;
      }, 500)
    );
  });

  onUnmounted(() => {
    window.removeEventListener("resize", () => {
      screen_width.value = document.body.clientWidth;
    });
  });

  return {
    screen_width,
  };
};
