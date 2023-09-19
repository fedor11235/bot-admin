<template>
  <div id="q-app">

  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { useRouter } from "vue-router";
const router = useRouter()

const enter = window.localStorage.getItem("enter");
if(enter == "enabled") {
  router.push({ name: "home" });
} else {
  router.push({ name: "login" });
}
</script>

<style>
#q-app{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
