<template>
  <div id="q-app-home" style="min-height: 100vh;">
    <div class="q-pa-md">
      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
        <q-btn flat label="Админка"></q-btn>
        <q-space></q-space>

        <q-tabs v-model="menu" shrink>
          <q-tab name="recommendation-create" label="Создать Предложение"></q-tab>
          <q-tab name="recommendation-now" label="Текущие Предложения"></q-tab>
          <!-- <q-tab name="opt-now" label="Текущие Опты"></q-tab> -->
          <q-tab name="channel-create" label="Добавить канал в каталог"></q-tab>
          <!-- <q-tab name="info" label="Информация"></q-tab> -->
        </q-tabs>
      </q-toolbar>
    </div>
    <RecommendationCreated v-if="menu === 'recommendation-create'" />
    <RecommendationNow v-else-if="menu === 'recommendation-now'" />
    <!-- <OptNow v-else-if="menu === 'opt-now'" /> -->
    <ChannelCreated v-else-if="menu === 'channel-create'" />
    <q-btn :onClick="onExit" unelevated class="exit" color="red" label="Выйти"></q-btn>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref } from "vue"
import { useRouter } from "vue-router";
import OptNow from "@/components/OptNow.vue";
import RecommendationCreated from "@/components/RecommendationCreated.vue";
import RecommendationNow from "@/components/RecommendationNow.vue";
import ChannelCreated from "@/components/ChannelCreated.vue";
import OptInfo from "@/components/OptInfo.vue";

const router = useRouter()

const menu = ref("recommendation-create")

async function onExit() {
  window.localStorage.setItem("enter", "");
  await router.push({ name: "login" });
}

</script>
<style scoped>
.q-app-home {
  height: 100vh;
}
.exit {
  position: fixed;
  bottom: 32px;
  right: 32px;
}
</style>
