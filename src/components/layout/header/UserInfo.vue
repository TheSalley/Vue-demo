<script setup lang="ts">
import { Lock, Phone } from "@icon-park/vue-next";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../../../store/user";

const router = useRouter();
let phone = ref("");
let password = ref("");

const { login } = useUserStore();
const { showLogin } = storeToRefs(useUserStore());

const loginSubmit = () => {
  login(phone.value, password.value);
};
</script>

<template>
  <div class="flex items-center cursor-pointer hover-text">
    <el-avatar size="small" round class="bg-gray-200"></el-avatar>
    <span class="text-xs ml-1.5"></span>
    <span class="text-xs ml-1.5" @click="showLogin=true">点击登录</span>
  </div>
  <el-dialog v-model="showLogin" title="登录" width="330px" append-to-body>
    <div>
      <el-input
        size="large"
        placeholder="手机号码"
        :prefix-icon="Phone"
        v-model="phone"
      />
      <el-input
        size="large"
        class="mt-5"
        placeholder="登录密码"
        :prefix-icon="Lock"
        v-model="password"
      />
      <button class="button w-full mt-5 py-5" @click="loginSubmit">登录</button>
    </div>
  </el-dialog>
</template>
