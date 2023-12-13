<template>
  <q-btn v-if="mode === 'recommendation-all'" @click="handlerDelete" label="Удалить выбранные предложения" :disable="selected.length === 0 ? true : false" color="green"></q-btn>
  <Transition name="move-top">
    <CheckModal
      v-if="isOpen"
      @close="isOpen = false"
      @edit="handlerEditFinish"
      :recomendation="recommendation"
    />
  </Transition>
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
      <template v-slot:body-selection="props">
        <q-tr :props="props" @click="handlerIntoRecommendation(props.row.username)" class="test">
            <q-checkbox v-model="props.selected"></q-checkbox>
        </q-tr>
      </template>
      <template v-slot:body-cell-pay_all="props">
        <q-td :props="props">
          <div class="cntner">
            <div :class="['circle', {'circle-active': props.row.allBy}]"></div>
          </div>
        </q-td>       
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td class="actions" :props="props">
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerDeleteInBot(props)" label="Удалить подборку в боте"></q-btn>
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerEdit(props)" label="Редактировать подборку"></q-btn>
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerIntoRecommendation(props.row.username)" label="Открыть вхождения"></q-btn>
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerSendDateBot(props.row)" label="отправить список дат"></q-btn>
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerSendReminder(props.row)" label="отправить напомнинание пользователем о загрузках чеков и постов"></q-btn>
        </q-td>       
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
import { getRecommendation, deleteRecommendation, recommendationDeleteBot, getRecommendationInto } from "@/api"
import RecommendationInto from '@/components/RecommendationInto.vue'
import CheckModal from '@/components/modal/CheckModal.vue'
import { sendMessage } from '@/helpers/send'
import env from "@/env"

const chatId = env.ADMIN_ID
const botToken = env.BOT_TOKEN

const recommendations = ref([])
const recommendation = ref()

const mode = ref('recommendation-all')
const usernameInto = ref('')
const selected = ref([])
const isOpen = ref(false)

const selectedId = computed(() => {
  return selected.value.map((e: any) => e.id)
})

const columns = [
  { name: 'pay_all', align: 'center', label: 'Оплатили ли все', field: 'id' },
  {
    name: 'id',
    required: true,
    label: 'Id предложения',
    align: 'left',
    field: (row: any) => row.id,
    sortable: true
  },
  { name: 'username', align: 'left', label: 'Юзернейм', field: 'username', sortable: true },
  { name: 'link', align: 'left', label: 'Ссылка на канал', field: 'link', sortable: true },
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
  { name: 'actions', align: 'left', label: 'Действия', field: 'id' }
]

async function handlerEditFinish() {
  isOpen.value = false
  recommendations.value = (await getRecommendation() as any)
}

function getSelectedString () {
  return selected.value.length === 0 ? '' : `${selected.value.length} выбранных преддожений`
}

function handlerDelete () {
  deleteRecommendation(selectedId.value)
  recommendations.value = recommendations.value.filter((elem) => !selectedId.value.includes((elem as any).id))
}

function handlerDeleteInBot (prop: any) {
  recommendationDeleteBot(prop.value)
}

function handlerEdit (prop: any) {
  recommendation.value = recommendations.value.find((rec: any) => rec.id === prop.value)
  isOpen.value=true
}

async function handlerSendDateBot(row: any) {
  let text = ''
  const recomendationsInto: any = await getRecommendationInto(row.username)
  for(const rec of recomendationsInto) {
    text += `${(rec as any).booking_date} ${(rec as any).user.username}\n`
  }
  sendAdminText(text)
}

async function handlerSendReminder(row: any) {
  const recomendationsInto: any = await getRecommendationInto(row.username)
  for(const rec of recomendationsInto) {
    if(rec.creatives || !rec.check) {
      const text = `кажется вы забыли загрузить посты или чеки в подборку ${row.username}`
      sendMessage(rec.user.id, text)
    }
  }

  // const text = 'кажется вы забыли загрузить посты или чеки в подборку'
  // sendMessage(id, text)
}

async function handlerIntoRecommendation(username: any) {
  usernameInto.value = username
  mode.value = 'recommendation-into'
}

async function sendAdminText(text: string) {
  const data = {
    chat_id: chatId,
    text: text,
    parse_mode: "HTML",
  }
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}

onMounted(async() => {
  recommendations.value = (await getRecommendation() as any)
  for(const recommend of recommendations.value) {
    const recommendationsInto: any = await getRecommendationInto((recommend as any).username)
    for (const recommendationInto of recommendationsInto) {
      (recommend as any).allBy = true
      if(!recommendationInto.check_mark) {
        (recommend as any).allBy = false
      }
    }
  }
})
</script>

<style scoped>
.move-top-enter-active,
.move-top-leave-active {
  transition: translate .6s ease;
  translate: 0 0;
}
.move-top-enter-from,
.move-top-leave-to {
  translate: 0 -70vw;
}
.actions {
  display: flex;
  column-gap: 8px;
}

.test {
  border-color: 2px solid red;
}
.cntner {
  display: flex;
  align-items: center;
}
.circle {
  height: 20px;
  width: 20px;
  background-color: grey;
  border-radius: 50%;
}
.circle-active {
  background-color: green;
}
</style>
