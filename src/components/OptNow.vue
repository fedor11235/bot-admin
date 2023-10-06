<template>
  <div class="q-pa-md">
    <!-- <q-btn-group spread>
      <q-btn color="primary" label="График" icon="timeline"></q-btn>
      <q-btn color="primary" label="Чеки" icon="visibility"></q-btn>
      <q-btn color="primary" label="Посты" icon="format_size"></q-btn>
    </q-btn-group> -->
    <q-table
      flat bordered
      title="Предложения"
      dense
      :rows="opts"
      :columns="(columns as any)"
      row-key="name"
    />
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import { getOpts } from "@/api"

const opts = ref()

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Id опта',
    align: 'left',
    field: (row: any) => row.id,
    sortable: true
  },
  { name: 'chanel', align: 'left', label: 'Юзернейм канала', field: 'chanel', sortable: true },
  { name: 'title', align: 'left', label: 'Название канала', field: 'title', sortable: true },
  { name: 'category', align: 'left', label: 'Категория', field: 'category' },
  { name: 'retail_price', align: 'left', label: 'Розничная цена', field: 'retail_price' },
  { name: 'wholesale_cost', align: 'left', label: 'Оптовая цена', field: 'wholesale_cost' },
  { name: 'min_places', align: 'left', label: 'Минимальное число мест', field: 'min_places', sortable: true },
  { name: 'max_places', align: 'left', label: 'Максимальное число мест', field: 'max_places', sortable: true },
  { name: 'booking_date', align: 'left', label: 'Даты брони', field: 'booking_date', sortable: true},
  { name: 'deadline_date', align: 'left', label: 'Дедлайн формирование опта', field: 'deadline_date', sortable: true },
  { name: 'requisites', align: 'left', label: 'Реквизиты', field: 'requisites', sortable: true },
]

onMounted(async() => {
  opts.value = await getOpts()
  console.log(opts.value)
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
