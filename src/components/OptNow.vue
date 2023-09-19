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

<style>
.form {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  min-width: 400px;
  max-width: 600px;
  padding-bottom: 32px;
}
</style>
