import { defineStore } from "pinia";
import { ref } from "vue";
import type { UserProfile } from "../interface/user";
import { requestLogin } from "../api/index"

export const useUserStore = defineStore("user", () => {
  let token = ref<string>("");
  let cookie = ref<string>("");
  let showLogin = ref<boolean>(false);
  let profile = ref<UserProfile>({} as UserProfile);

  const isLogin = () => {
    return profile.value?.userId > 0;
  };

  const login = async (phone: string, password: string) => {
    const res = await requestLogin(phone, password)
    console.log(res);
    
  }

  return {
    showLogin,
    isLogin,
    login
  }
});
