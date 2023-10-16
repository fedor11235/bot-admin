<template>
  <q-btn v-if="mode === 'recommendation-all'" @click="handlerDelete" label="Удалить выбранные предложения" :disable="selected.length === 0 ? true : false" color="green"></q-btn>
  <div class="q-pa-md">
    <q-table
      v-if="mode === 'recommendation-all'"
      flat bordered
      title="Предложения"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      
      :rows="recommendations"
      :columns="(columns as any)"
      row-key="id"
    >
      <template v-slot:body="props">
        <q-tr :props="props" @click="handlerIntoRecommendation(props.row.username)">
          <q-checkbox v-model="props.selected"></q-checkbox>
          <q-td v-for="(value, index) in props.row" :key="index" :props="props">
            {{ value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <RecommendationInto @return="mode = 'recommendation-all'" :username="usernameInto" v-else-if="mode === 'recommendation-into'" />
    <div class="q-mt-md">
      Выбранные Id предложений: {{ selectedId }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { getRecommendation, deleteRecommendation } from "@/api"
import RecommendationInto from '@/components/RecommendationInto.vue'

const recommendations = ref([])
const mode = ref('recommendation-all')
const usernameInto = ref('')
const selected = ref([])
const selectedId = computed(() => {
  return selected.value.map((e: any) => e.id)
})

const columns = [
  {
    name: 'id',
    required: true,
    label: 'Id предложения',
    align: 'left',
    field: (row: any) => row.id,
    sortable: true
  },
  { name: 'username', align: 'left', label: 'Юзернейм', field: 'username', sortable: true },
  { name: 'title', align: 'left', label: 'Название канала', field: 'title', sortable: true },
  { name: 'price_standart', align: 'left', label: 'Стандартная цена', field: 'price_standart', sortable: true },
  { name: 'price_now', align: 'left', label: 'Текущая цена', field: 'price_now' },
  { name: 'format', align: 'left', label: 'Формат', field: 'format' },
  { name: 'number_posts', align: 'left', label: 'Число постов', field: 'number_posts' },
  { name: 'coverage', align: 'left', label: 'Охват', field: 'coverage', sortable: true },
  { name: 'subscribers', align: 'left', label: 'Число подписчиков', field: 'subscribers', sortable: true },
  { name: 'data_list', align: 'left', label: 'Даты брони', field: 'data_list', sortable: true},
  { name: 'requisites', align: 'left', label: 'Ревизиты', field: 'requisites', sortable: true },
  { name: 'deadline', align: 'left', label: 'Дедлайн формирования поста', field: 'deadline', sortable: true },
  { name: 'info', align: 'left', label: 'Информация', field: 'info', sortable: true },
]

function getSelectedString () {
  return selected.value.length === 0 ? '' : `${selected.value.length} выбранных преддожений`
}

function handlerDelete () {
  alert('Удалено!!!!!')
  deleteRecommendation(selectedId.value)
  recommendations.value = recommendations.value.filter((elem) => !selectedId.value.includes((elem as any).id))
}

async function handlerIntoRecommendation(username: any) {
  usernameInto.value = username
  mode.value = 'recommendation-into'
}
onMounted(async() => {
  recommendations.value = (await getRecommendation() as any)
})
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
