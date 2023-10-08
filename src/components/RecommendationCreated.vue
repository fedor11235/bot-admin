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
      label="Юзернейм канала"
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
      hint="Пожалуйста введите целое число"
      label="Необходимо постов"
      lazy-rules
      :rules="[ val => val && val.length > 0 && Number.isInteger(Number(val))|| 'Пожалуйста введите целой блй число']"
    ></q-input>

    <q-input
      filled
      v-model="coverage"
      hint="Пожалуйста введите целое число"
      label="Охват"
      lazy-rules
      :rules="[ val => val && val.length > 0 && Number.isInteger(Number(val))|| 'Пожалуйста введите целой блй число']"
    ></q-input>

    <q-input
      filled
      v-model="subscribers"
      hint="Пожалуйста введите целое число"
      label="Число подписот"
      lazy-rules
      :rules="[ val => val && val.length > 0 && Number.isInteger(Number(val))|| 'Пожалуйста введите целой блй число']"
    ></q-input>

    <DatePick v-model="dataList" />

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
import { ref } from "vue";
import { createRecommendation } from "@/api"
import DatePick from'@/components/DatePick.vue'

const name = ref("")
const priceStandart = ref("")
const priceNow = ref("")
const format = ref("")
const numberPosts = ref("")
const dataList = ref("")
const requisites = ref("")
const deadline = ref("")
const info = ref("")
const subscribers = ref("")
const coverage = ref("")

async function onSubmit() {
  if(!dataList.value) {
    alert('Вы не ввели даты брони')
  }
  createRecommendation({
    username: name.value,
    price_standart: priceStandart.value,
    price_now: priceNow.value,
    format: format.value,
    number_posts: Number(numberPosts.value),
    data_list: dataList.value,
    requisites: requisites.value,
    deadline: deadline.value,
    info: info.value,
    subscribers: subscribers.value,
    coverage: coverage.value,
  })
  onReset()
  alert("вы создали предложение!!!")
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

