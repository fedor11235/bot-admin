// тестовый бот
// const botToken = '6127498929:AAEYlTDQQ2XsmFfRNtqIc8kpZUNLTzSrLB8'
// бот прода
const botToken = '6569483795:AAGXGV2Awd_fVhgy_20sjDpdfGJMaf6Ex6w'

export async function sendMessage(chatId: string, text: string) {
  const data = {
    chat_id: chatId,
    text,
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