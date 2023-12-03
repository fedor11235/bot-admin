<template>
  <div @click.self="emit('close')" class="popup-edit">
    <q-form
      q-pa-md
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md form"
      >
      <q-input
        filled
        v-model="recomendationLocal.title"
        label="Заголовок канала"
        hint="Пожалуйста хоть что-то введите"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.username"
        label="Юзернейм канала"
        hint="Пожалуйста хоть что-то введите"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.link"
        label="Ссылка на канал"
        hint="Пожалуйста хоть что-то введите"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.price_standart"
        hint="Пожалуйста хоть что-то введите"
        label="Стандартная цена"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.price_now"
        hint="Пожалуйста хоть что-то введите"
        label="Текущая цена"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.format"
        hint="Пожалуйста хоть что-то введите"
        label="Формат размещения"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.number_posts"
        hint="Пожалуйста введите целое число"
        label="Необходимо постов"
        lazy-rules
      ></q-input>
      <!-- :rules="[ val => val && val.length > 0 && Number.isInteger(Number(val))|| 'Пожалуйста введите целой блй число']" -->

      <q-input
        filled
        v-model="recomendationLocal.coverage"
        hint="Пожалуйста введите целое число"
        label="Охват"
        lazy-rules
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.subscribers"
        hint="Пожалуйста введите целое число"
        label="Число подписот"
        lazy-rules
      ></q-input>

      <!-- <DatePick v-model="recomendationLocal.allowed_dates" /> -->

      <q-input
        filled
        v-model="recomendationLocal.requisites"
        hint="Пожалуйста хоть что-то введите"
        label="Реквизиты"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.deadline"
        hint="Пожалуйста хоть что-то введите"
        label="Дедлайн оплат"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>

      <q-input
        filled
        v-model="recomendationLocal.info"
        hint="Пожалуйста хоть что-то введите"
        label="Дополнительная информация"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
      ></q-input>
      <div>
        <q-btn label="Сохранить изменения" type="submit" color="primary"></q-btn>
        <q-btn label="Отмена" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
// import DatePick from'@/components/controlls/DatePick.vue'
import { editRecommendation } from '@/api'

const emit = defineEmits<{
  (e: "close"): void;
  (e: "edit"): void;
}>();

const props = defineProps<{
  recomendation: any;
}>();

const recomendationLocal = toRef(props.recomendation)

function onReset() {
  emit('close')
}

function onSubmit() {
  // recomendationLocal.value.data_list = recomendationLocal.value.allowed_dates
  editRecommendation(recomendationLocal.value)
  emit('close')
}
</script>

<style scoped>
.popup-edit {
  /* display: flex; */
  position: fixed;
  padding: 60px;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, .35);
  -webkit-backdrop-filter: blur(17.5px);
  backdrop-filter: blur(17.5px);
  z-index: 1;
  /* align-items: center;
  justify-content: center; */
  overflow-y: scroll;
}

.img-check {
  height: 100%;
}
</style>

