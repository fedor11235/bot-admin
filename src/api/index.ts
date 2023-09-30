// import axios from "axios";

// const instance = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "http://slonrobot.ru/api"
//       : "http://localhost:3001/",
// });

// export default instance;


const baseURL = process.env.NODE_ENV === "production"
  ? "http://slonrobot.ru/api/"
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
