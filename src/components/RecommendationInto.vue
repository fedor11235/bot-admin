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
      <template v-slot:body-cell-path_check="props">
        <q-td class="actions" :props="props">
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerOpenCheck(props)" label="Открыть чек"></q-btn>
          <!-- <q-btn size="sm" rounded unelevated color="purple" @click="handlerSendPosts(props)" label="Отправить посты в админку"></q-btn> -->
        </q-td>       
      </template>
      <template v-slot:body-cell-creatives="props">
        <q-td class="actions" :props="props">
          <!-- <q-btn size="sm" rounded unelevated color="purple" @click="handlerOpenCheck(props)" label="Открыть чек"></q-btn> -->
          <q-btn size="sm" rounded unelevated color="purple" @click="handlerSendPosts(props)" label="Отправить посты в админку"></q-btn>
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

const chatId = '-1001959790816'
const botToken = '6569483795:AAGXGV2Awd_fVhgy_20sjDpdfGJMaf6Ex6w'
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
  // { name: 'creatives', align: 'left', label: 'Креативы', field: 'creatives', sortable: true },
  { name: 'booking_date', align: 'left', label: 'Забронированные даты', field: 'booking_date' },
  { name: 'path_check', align: 'left', label: 'Чек', field: 'path_check' },
  { name: 'creatives', align: 'left', label: 'Посты пользователя', field: 'creatives' }
  // { name: 'username_recommendation', align: 'left', label: 'Юзернейм рекомендации', field: 'username_recommendation', sortable: true },
]

async function handlerSendPosts (row: any) {
  const idUser = row.row.idUser
  const creativesArray = row.value.split('///')
  creativesArray.shift()
  const info = recommendationsInto.value.find((elem: any) => elem.idUser === idUser)
  await sendAdminText(`__________${info.user.username}__________`)
  for (const creative of creativesArray) {
    if(creative.includes('*')) {
      const [text, _] = creative.split('*')
      const [fileId, fileType] = _.split('%')
      if (fileType === 'photo') {
        await sendAdminPhoto(text, fileId)
      } else if (fileType === 'video') {
        await sendAdminVideo(text, fileId)
      } else if (fileType === 'animation') {
        await sendAdminAnimation(text, fileId)
      }   
    } else {
      await sendAdminText(creative)
    }
  }
  await sendAdminText(`__________${info.user.username}__________`)
}

async function sendAdminText(text: string) {
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`)
}

async function sendAdminPhoto(text: string, photoId: string) {
  await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto?chat_id=${chatId}&caption=${text}&parse_mode=HTML&photo=${photoId}`)
}

async function sendAdminVideo(text: string, videoId: string) {
  await fetch(`https://api.telegram.org/bot${botToken}/sendVideo?chat_id=${chatId}&caption=${text}&parse_mode=HTML&video=${videoId}`)
}

async function sendAdminAnimation(text: string, animationId: string) {
  await fetch(`https://api.telegram.org/bot${botToken}/sendAnimation?chat_id=${chatId}&caption=${text}&parse_mode=HTML&photo=${animationId}`)
}

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
/* .actions {
  display: flex;
  column-gap: 8px;
  margin: 8px 0;
} */
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

