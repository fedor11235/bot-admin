<template>
  <q-form
    q-pa-md
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md form"
    >

    <q-input
      filled
      v-model="category"
      label="Категория канала"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="username"
      label="Юзернейм канала"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="title"
      label="Название канала"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="link"
      label="Ссылочка на канал"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="participantsCount"
      label="Количество подписчиков"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="coverage"
      label="Охват"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="advertisingprice"
      label="Цена рекламы"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="recommendations"
      label="Число рекомендаций"
      hint="Пожалуйста хоть что-то введите"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
    ></q-input>

    <q-input
      filled
      v-model="communication"
      label="Контакты для связи"
      hint="Пожалуйста хоть что-то введите"
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
import { ref } from "vue";
import { addChannelInCatalog } from "@/api"

const category = ref("")
const username = ref("")
const title = ref("")
const link = ref("")
const participantsCount = ref("")

const coverage = ref("")
const advertisingprice = ref("")
const recommendations = ref("")
const communication = ref("")

async function onSubmit() {
  addChannelInCatalog({
    category: category.value,
    username: username.value,
    title: title.value,
    link: link.value,
    participants_count: participantsCount.value,
    coverage: coverage.value,
    advertising_price: advertisingprice.value,
    recommendations: recommendations.value,
    communication: communication.value,
  })
  onReset()
  alert("ВЫ добавли новый канал в каталог!!!")
}

function onReset() {
  category.value = ""
  username.value = ""
  title.value = ""
  link.value = ""
  participantsCount.value = ""
  coverage.value = ""
  advertisingprice.value = ""
  recommendations.value = ""
  communication.value = ""
}
</script>

