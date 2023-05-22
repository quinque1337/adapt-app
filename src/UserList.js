const axios = require('axios');
axios.get('https://blazer321.ru/api/user_registered/isamirivers') // Возвращение обещаний используя get-запрос
.then((response) => { // Получение данных и их обработка
let screen = 3;})
.catch((error) => { // Если запрос не будет выполнен, то ошибка выводится в терминал
let screen = 2;});