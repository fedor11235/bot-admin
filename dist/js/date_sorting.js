// тут принимаем данные с БД

// booking_date = ...
// username =
data = []; // результирующий массив

// дальше обработка
dates = booking_date.split("_").map((x) => {return x.split("/")[1]}) // тут работаем с букинг дэйт стандартно
for (const date of dates) {  // дальше бежим по датам
  element = [date, username]
  data.push(element)  // добавлем в массив эти даты и юзернейм
}
data.sort((a, b) => {
  aDay = a[0].split(".")[0];
  bDay = b[0].split(".")[0];
  return aDay - bDay;
}).sort((a, b) => {
  aMonth = a[0].split(".")[1];
  bMonth = b[0].split(".")[1];
  return aMonth - bMonth;
})

// алгоритм выше нужно обернуть в цикл по данным с бд
