<template>
  <div id="q-app-home" style="min-height: 100vh;">
    <div class="q-pa-md">
      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
        <q-btn flat label="Админка"></q-btn>
        <q-space></q-space>

        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
        <q-tabs v-model="menu" shrink>
          <q-tab name="opt-create" label="Создать опт"></q-tab>
          <q-tab name="opt-now" label="Текущие опты"></q-tab>
          <q-tab name="info" label="Информация"></q-tab>
        </q-tabs>
      </q-toolbar>
    </div>
    <OptCreated v-if="menu === 'opt-create'" />
    <OptNow v-else-if="menu === 'opt-now'" />
    <OptInfo v-else-if="menu === 'info'" />
    <q-btn :onClick="onExit" unelevated class="exit" color="red" label="Выйти"></q-btn>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref } from "vue"
import { useRouter } from "vue-router";
import OptCreated from "@/components/OptCreated.vue";
import OptNow from "@/components/OptNow.vue";
import OptInfo from "@/components/OptInfo.vue";

const router = useRouter()

const menu = ref("opt-create")

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
