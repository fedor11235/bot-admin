<template>
  <q-btn :onClick="handlerReturn" unelevated class="exit" color="blue" label="<- Вернуться в список предложений"></q-btn>
  <div class="q-pa-md">
    <q-table
      flat bordered
      title="Пользователи записавшиемся в опт"
      dense
      :rows="recommendationsInto"
      :columns="(columns as any)"
      row-key="name"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getRecommendationInto } from "@/api"

const emit = defineEmits(["return"]);

const props = defineProps<{
  username: string;
}>();

const recommendationsInto = ref()

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Id предложения',
    align: 'left',
    field: (row: any) => row.id,
    sortable: true
  },
  { name: 'chanel', align: 'left', label: 'Юзернейм канала войденного в опт', field: 'chanel', sortable: true },
  { name: 'creatives', align: 'left', label: 'Креативы', field: 'creatives', sortable: true },
  { name: 'booking_date', align: 'left', label: 'Забронированные даты', field: 'booking_date' },
  // { name: 'username_recommendation', align: 'left', label: 'Юзернейм рекомендации', field: 'username_recommendation', sortable: true },
]

function handlerReturn() {
  emit('return')
}

onMounted(async() => {
  recommendationsInto.value = await getRecommendationInto(props.username)
  console.log(recommendationsInto.value)
})
</script>

