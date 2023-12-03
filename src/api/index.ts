// import axios from "axios";

// const instance = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "http://slonrobot.ru/api"
//       : "http://localhost:3001/",
// });

// export default instance;


const baseURL = process.env.NODE_ENV === "production"
  ? "https://slonrobot.ru/api/"
  : "http://localhost:3001/"

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

// Редактируем предложение
export function editRecommendation(payload: any) {
  const formData = new FormData()
  for(const index in payload) {
    formData.append(index, payload[index]);
  }
  const url = baseURL + 'recommendations/edit'
  const request = new XMLHttpRequest();
  request.open("POST", url, false);
  request.send(formData);
}

// Получить всех пользователей
export function getUserAll() {
  return new Promise((resolve, reject) => {
    const url = baseURL + `user/all`
    const request = new XMLHttpRequest();
    request.onload = () => {
      resolve(JSON.parse(request.response))
    }
    request.open("GET", url, false);
    request.send();
  });
}

// Удаляем в боте
export function recommendationDeleteBot(id: any) {
  return new Promise((resolve, reject) => {
    const url = baseURL + `recommendations/delete-bot?id=${id}`
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

// Меняем разрешение на подписку
export function changeSuggestions(idUser: string, isSuggestion: string) {
  return new Promise((resolve, reject) => {
    const url = baseURL + `user/suggestion?idUser=${idUser}&isSuggestion=${isSuggestion}`
    const request = new XMLHttpRequest();
    request.onload = () => {
      resolve(JSON.parse(request.response))
    }
    request.open("GET", url, false);
    request.send();
  });
}


// Меняет галку оплачиваемую
export function changeCheckMark(idRecommendation: string, mark: string) {
  const url = baseURL + `recommendations/mark?idRecommendation=${idRecommendation}&mark=${mark}`
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
}

// редактирование дат пользователя войленного в опт
export function editDateUserRecommendationInto(payload: any) {
  const formData = new FormData()
  for(const index in payload) {
    formData.append(index, payload[index]);
  }
  const url = baseURL + 'recommendations/edit-date'
  const request = new XMLHttpRequest();
  request.open("POST", url, false);
  request.send(formData);
}
