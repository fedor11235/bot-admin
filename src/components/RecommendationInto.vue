<template>
  <transition name="move-top">
    <div v-if="isPopupCheck" @click="isPopupCheck = false" class="popup-check">
      <img class="img-check" :src="checkImg" alt="check" />
    </div>
  </transition>
  <q-btn :onClick="handlerReturn" unelevated color="blue" label="<- Вернуться в список предложений"></q-btn>
  <div class="q-pa-md">
    <q-table
      flat bordered
      title="Пользователи записавшиемся в опт"
      dense
      :rows="recommendationsInto"
      :columns="(columns as any)"
      row-key="name"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerOpenCheck(props)" label="Открыть чек"></q-btn>
        </q-td>          
      </template>
    </q-table>
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
const checkImg = ref()
const isPopupCheck = ref(false)

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
  { name: 'actions', align: 'left', label: 'Действия', field: 'path_check' }
  // { name: 'username_recommendation', align: 'left', label: 'Юзернейм рекомендации', field: 'username_recommendation', sortable: true },
]

function handlerOpenCheck(row: any) {
  checkImg.value = row.value
  isPopupCheck.value = true
}

function handlerReturn() {
  emit('return')
}

onMounted(async() => {
  recommendationsInto.value = await getRecommendationInto(props.username)
})
</script>

<style scoped>
.popup-check {
  display: flex;
  position: fixed;
  padding: 60px;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .35);
  -webkit-backdrop-filter: blur(17.5px);
  backdrop-filter: blur(17.5px);
  z-index: 1;
  align-items: center;
  justify-content: center;
}

.img-check {
  height: 100%;
}

.move-top-enter-active,
.move-top-leave-active {
  transition: translate .6s ease;
  translate: 0 0;
}
.move-top-enter-from,
.move-top-leave-to {
  translate: 0 -70vw;
}
</style>

