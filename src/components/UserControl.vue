<template>
  <div class="q-pa-md user-control">
    <q-table
      flat bordered
      title="Предложения"
      dense
      :rows="users"
      :columns="(columns as any)"
      row-key="name"
    >
      <template v-slot:body-cell-actions="props">
        <q-td class="actions" :props="props">
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerAllowSuggestions(props.row.id, props.row.allow_suggestions)" :label="props.row.allow_suggestions? 'Запретить подборки': 'Разрешить подборки'"></q-btn>
        </q-td>       
      </template>
    </q-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { getUserAll, changeSuggestions } from '@/api'

const columns = [
  {
    name: 'id',
    required: true,
    label: 'Id опта',
    align: 'left',
    field: (row: any) => row.id,
    sortable: true
  },
  { name: 'username', align: 'left', label: 'Юзернейм', field: 'username', sortable: true },
  { name: 'tariffPlan', align: 'left', label: 'Подписка', field: 'tariffPlan', sortable: true },
  { name: 'allow_suggestions', align: 'left', label: 'Разрешение на подборку', field: 'allow_suggestions', sortable: true },
  { name: 'actions', align: 'left', label: 'Действия', field: 'id' }
]

const users = ref([])

async function handlerAllowSuggestions(id: string, allowSuggestions: boolean) {
  const allowSuggestionsLocal = allowSuggestions? 'disabled': 'enabled'
  await changeSuggestions(id, allowSuggestionsLocal)
  users.value = await getUserAll() as any
}

onMounted(async() => {
  users.value = await getUserAll() as any
})
</script>

<style scoped>
.actions {
  display: flex;
  column-gap: 8px;
}
</style>
