<template>
  <div class="send-message">
    <textarea v-model="message"></textarea>
    <q-btn @click="sendMessageAllUser" label="Отправить сообщение" :disable="message? false: true" color="green"></q-btn>
  </div>
</template>

<!-- handlerDeleteInBot() -->

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getUserAll } from '@/api'

// тестовый бот
// const botToken = '6127498929:AAEYlTDQQ2XsmFfRNtqIc8kpZUNLTzSrLB8'
// бот прода
const botToken = '6569483795:AAGXGV2Awd_fVhgy_20sjDpdfGJMaf6Ex6w'
// const chatId = '6127498929'
const message = ref('')
const users = ref([])

async function sendMessageAllUser() {
  for(const user of users.value) {
    sendMessage((user as any).id)
  }
}

async function sendMessage(chatId: string) {
  const data = {
    chat_id: chatId,
    text: message.value,
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
  users.value = await getUserAll() as any
})
</script>

<style scoped>
.send-message {
  padding-top: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
}
textarea {
  max-width: 600px;
  width: 100%;
  height: 300px;
}
</style>
