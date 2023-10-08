<template>
  <div class="btns" v-for="date in dateList" :key="date">
    <q-btn
      @click="handlerSelectedDate(`${mapPeriod[period as mapPeriodIndexType]}/${date}`)"
      class="btn" v-for="period in timePeriod"
      :key="`${date}-${period}`" :label="`${date} (${period})`"
      :color="colorBtn(`${mapPeriod[period as mapPeriodIndexType]}/${date}`)"
    />
  </div>
  <div  class="btns">
    <q-btn @click="offsetDate -= 10" class="btn" color="primary" label="Предыдущие даты" />
    <q-btn @click="offsetDate += 10" class="btn" color="primary" label="Следуйщие даты" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

type mapPeriodIndexType = 'утро' | 'день' | 'вечер'

const timePeriod = ['утро', 'день', 'вечер']
const mapPeriod = {
  'утро': 'morning',
  'день': 'day',
  'вечер': 'evening'
}
const offsetDate = ref(0)
const selectedDate = ref('')

const dateList = computed(() => {
  const temp = []
  for (let index = 0; index < 10; index += 1) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1 + index + offsetDate.value);
    temp.push(currentDate.getDate() + '.' + (currentDate.getMonth() + 1))
  }
  return temp
})

// const colorBtn = computed(() => {
//   selectedDate.value
// })

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
  display: flex;
  column-gap: 6px;
}
.btn {
  width: 100%;
}
</style>
