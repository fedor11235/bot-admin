<template>
  <div class="btns">
    <q-btn
      @click="handlerSelectedDate(date)"
      class="btn" v-for="date in morningTime"
      :key="`${date}`" :label="`${date}`"
      :color="colorBtn(date)"
    />
    <q-btn
      @click="handlerSelectedDate(date)"
      class="btn" v-for="date in dayTime"
      :key="`${date}`" :label="`${date}`"
      :color="colorBtn(date)"
    />
    <q-btn
      @click="handlerSelectedDate(date)"
      class="btn" v-for="date in eveningTime"
      :key="`${date}`" :label="`${date}`"
      :color="colorBtn(date)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, toRef } from "vue";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();


const morningTime = [
  '8.10',
  '9.10',
  '10.10',
  '11.10',
  '12.10'
]

const dayTime = [
  '13.10',
  '14.10',
  '15.10',
  '16.10',
  '17.10'
]

const eveningTime = [
  '18.10',
  '19.10',
  '20.10',
  '21.10',
  '22.10'
]

const offsetDate = ref(0)

const selectedDate = toRef(props.modelValue)

function colorBtn(date: string) {
  if (selectedDate.value) {
    let selectedDateArray = selectedDate.value.split('_')
    if(!selectedDateArray) {
      selectedDateArray = [selectedDate.value]
    }
    const chek = selectedDateArray.includes(date)
    if(chek) {
      return 'green'
    } else {
      return 'primary'
    }
  } else {
    return 'primary'
  }
}

function handlerSelectedDate(date: string) {
  if (selectedDate.value) {
    let selectedDateArray = selectedDate.value.split('_')
    if(!selectedDateArray) {
      selectedDateArray = [selectedDate.value]
    }
    const chek = selectedDateArray.includes(date)
    if(chek) {
      selectedDateArray = selectedDateArray.filter((name) => name !== date);
      selectedDate.value = selectedDateArray.join('_')
    } else {
      selectedDate.value += '_' + date
    }
  } else {
    selectedDate.value += date
  }
  emit("update:modelValue", selectedDate.value);
}

</script>

<style scoped>
.btns {
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
