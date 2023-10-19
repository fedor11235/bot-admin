// import axios from "axios";

// const instance = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "http://slonrobot.ru/api"
//       : "http://localhost:3001/",
// });

// export default instance;


const baseURL = process.env.NODE_ENV === "production"
  ? "https://slonrobot.ru/test/api/"
  : "http://localhost:3002/test/"

// Создаём предложение
export function createRecommendation(payload: any) {
  const formData = new FormData()
  for(const index in payload) {
    formData.append(index, payload[index]);
  }
  const url = baseURL + 'recommendations/create'
  const request = new XMLHttpRequest();
  request.open("POST", url, false);
  request.send(formData);
}

// Получаем предложение
export function getRecommendation() {
  return new Promise((resolve, reject) => {
    const url = baseURL + 'recommendations/get'
    const request = new XMLHttpRequest();
    request.onload = () => {
      resolve(JSON.parse(request.response))
    }
    request.open("GET", url, false);
    request.send();
  });
}

// Получаем опты
export function getOpts() {
  return new Promise((resolve, reject) => {
    const url = baseURL + 'opt/all'
    const request = new XMLHttpRequest();
    request.onload = () => {
      resolve(JSON.parse(request.response))
    }
    request.open("GET", url, false);
    request.send();
  });
}

// Добавить в каталог
export function addChannelInCatalog(payload: any) {
  const formData = new FormData()
  for(const index in payload) {
    formData.append(index, payload[index]);
  }
  const url = baseURL + 'chanel/add-channel'
  const request = new XMLHttpRequest();
  request.open("POST", url, false);
  request.send(formData);
}

// Получаем войденные в подборки
export function getRecommendationInto(channel: any) {
  return new Promise((resolve, reject) => {
    const url = baseURL + `recommendations/into-channel?channel=${channel}`
    const request = new XMLHttpRequest();
    request.onload = () => {
      resolve(JSON.parse(request.response))
    }
    request.open("GET", url, false);
    request.send();
  });
}

// Удаляем поборки
export function deleteRecommendation(payload: any) {
  const formData = new FormData()
  for(const index in payload) {
    formData.append(index, payload[index]);
  }
  const url = baseURL + `recommendations/delete`
  const request = new XMLHttpRequest();
  request.open("Delete", url, false);
  request.send(formData);
}