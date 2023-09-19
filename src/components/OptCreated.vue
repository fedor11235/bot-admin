<template>
  <q-form
    q-pa-md
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md form"
    >
    <q-input
      filled
      v-model="name"
      label="Название канала"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="priceStandart"
      hint="Пожалуйста хоть что-то введите"
      label="Стандартная цена"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="priceNow"
      hint="Пожалуйста хоть что-то введите"
      label="Текущая цена"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="format"
      hint="Пожалуйста хоть что-то введите"
      label="Формат размещения"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="numberPosts"
      hint="Пожалуйста хоть что-то введите"
      label="Необходимо постов"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="dataList"
      hint="Пожалуйста хоть что-то введите"
      label="Список дат"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="requisites"
      hint="Пожалуйста хоть что-то введите"
      label="Реквизиты"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="deadline"
      hint="Пожалуйста хоть что-то введите"
      label="Дедлайн оплат"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="info"
      hint="Пожалуйста хоть что-то введите"
      label="Дополнительная информация"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>
    <div>
      <q-btn label="Создать!!" type="submit" color="primary"></q-btn>
      <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
    </div>
  </q-form>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref } from "vue";

const name = ref("")
const priceStandart = ref("")
const priceNow = ref("")
const format = ref("")
const numberPosts = ref("")
const dataList = ref("")
const requisites = ref("")
const deadline = ref("")
const info = ref("")

async function onSubmit() {
  console.log("Создаём!")
}

function onReset() {
  name.value = ""
  priceStandart.value = ""
  priceNow.value = ""
  format.value = ""
  numberPosts.value = ""
  dataList.value = ""
  requisites.value = ""
  deadline.value = ""
  info.value = ""
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
