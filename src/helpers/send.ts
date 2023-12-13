import env from "@/env"

// const chatId = env.ADMIN_ID
const botToken = env.BOT_TOKEN

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