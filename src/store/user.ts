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
    if(res.code == 200) {
      token.value = res.token
      cookie.value = res.cookie
      document.cookie = res.cookie
      profile.value = res.profile
      localStorage.setItem("USER-TOKEN", token.value)
      localStorage.setItem("USER-COOKIE", cookie.value)
      showLogin.value = false
    }
    
  }

  return {
    showLogin,
    isLogin,
    login,
    profile
  }
});
