<template>
  <div class="q-pa-md">
    <q-btn-group spread>
      <q-btn color="primary" label="График" icon="timeline"></q-btn>
      <q-btn color="primary" label="Чеки" icon="visibility"></q-btn>
      <q-btn color="primary" label="Посты" icon="format_size"></q-btn>
    </q-btn-group>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref } from "vue";

async function onSubmit() {
  console.log("Создаём!")
}

function onReset() {
  console.log("Чистим!")
}

</script>

<style scoped>
.form {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 600px;
  width: 100%;
  padding-bottom: 32px;
  padding-left: 16px;
}
</style>
