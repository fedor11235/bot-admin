<template>
  <div @click.self="emit('close')" class="popup-edit">
    <q-form
      q-pa-md
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md form"
    >

      <DatePick v-model="recomendationLocal.booking_date" />

      <div>
        <q-btn label="Сохранить изменения" type="submit" color="primary"></q-btn>
        <q-btn label="Отмена" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import DatePick from'@/components/controlls/DatePick.vue'
import { editDateUserRecommendationInto } from '@/api'

const emit = defineEmits<{
  (e: "close"): void;
  (e: "edit"): void;
}>();

const props = defineProps<{
  recomendationInto: any;
}>();

const recomendationLocal = toRef(props.recomendationInto)

console.log(recomendationLocal.value)

function onReset() {
  emit('close')
}

function onSubmit() {
  editDateUserRecommendationInto({
    id: props.recomendationInto.id,
    booking_date: recomendationLocal.value.booking_date
  })
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

