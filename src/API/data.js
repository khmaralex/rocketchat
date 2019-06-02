import accountImage1 from './images/pic-account-1.svg';
import accountImgage2 from './images/pic-account-2.svg';
import accountImage3 from './images/pic-account-3.svg';
import operationImage from './images/operation.png';

import sticker1 from './images/stickers/1.png';
import sticker2 from './images/stickers/2.png';
import sticker3 from './images/stickers/3.png';
import sticker4 from './images/stickers/4.png';
import sticker5 from './images/stickers/5.png';
import sticker6 from './images/stickers/6.png';
import sticker7 from './images/stickers/7.png';
import sticker8 from './images/stickers/8.png';
import sticker9 from './images/stickers/9.png';

const data = {
  "accounts": [
    {
      "image": accountImage1,
      "balance": 69650,
      "currency": "₽",
      "interestRate": 8,
      "id": 57891231,
      "creationDate": "23 января 13:55",
      "operations": [
        {
          "id": 1,
          "name": "Пополнение с карты",
          "image": operationImage,
          "date": "23 июня 13:55",
          "value": 123
        },
        {
          "id": 2,
          "name": "Макдоналдс",
          "image": operationImage,
          "date": "23 июля 13:55",
          "value": -300
        },
        {
          "id": 3,
          "name": "Пополнение карты",
          "image": operationImage,
          "date": "23 августа 13:55",
          "value": 1500
        },
        {
          "id": 4,
          "name": "Снятие с карты",
          "image": operationImage,
          "date": "23 сентября 13:55",
          "value": -140
        },
        {
          "id": 5,
          "name": "Выплата процентов",
          "image": operationImage,
          "date": "23 ноября 13:55",
          "value": 426
        },
        {
          "id": 6,
          "name": "Пополнение с карты",
          "image": operationImage,
          "date": "21 декабря 13:55",
          "value": 5000
        }
      ]
    },
    {
      "image": accountImgage2,
      "balance": 21500,
      "currency": "$",
      "interestRate": 8,
      "id": 2241256,
      "creationDate": "23 января 13:55",
      "operations": [
        {
          "id": 7,
          "name": "Пополнение с карты",
          "image": operationImage,
          "date": "23 мая 13:55",
          "value": 100
        },
        {
          "id": 8,
          "name": "Снятие с карты",
          "image": operationImage,
          "date": "23 мая 13:55",
          "value": -200
        },
        {
          "id": 9,
          "name": "Пополнение карты",
          "image": operationImage,
          "date": "23 июня 13:55",
          "value": 470
        },
        {
          "id": 10,
          "name": "Снятие с карты",
          "image": operationImage,
          "date": "23 августа 13:55",
          "value": -300,
          "currency": "$"
        },
        {
          "id": 11,
          "name": "Выплата процентов",
          "image": operationImage,
          "date": "23 сентября 13:55",
          "value": 120
        },
        {
          "id": 12,
          "name": "Пополнение с карты",
          "image": operationImage,
          "date": "16 ноября 13:55",
          "value": 2150
        }
      ]
    },
    {
      "image": accountImage3,
      "balance": 69650,
      "currency": "₽",
      "interestRate": 8,
      "id": 5333856411,
      "creationDate": "23 января 13:55",
      "operations": [
        {
          "id": 13,
          "name": "Пополнение с карты",
          "image": operationImage,
          "date": "23 января 13:55",
          "value": 210
        },
        {
          "id": 14,
          "name": "Макдоналдс",
          "image": operationImage,
          "date": "23 января 13:55",
          "value": -495
        },
        {
          "id": 15,
          "name": "Пополнение карты",
          "image": operationImage,
          "date": "23 января 13:55",
          "value": 110
        },
        {
          "id": 16,
          "name": "Снятие с карты",
          "image": operationImage,
          "date": "23 января 13:55",
          "value": -620
        },
        {
          "id": 17,
          "name": "Выплата процентов",
          "image": operationImage,
          "date": "23 января 13:55",
          "value": 170
        },
        {
          "id": 18,
          "name": "Бухло",
          "image": operationImage,
          "date": "1 июня 03:55",
          "value": -15650
        }
      ]
    }
  ],
  "deposits": [
    {
      "id": 0,
      "name": "Тусовочный",
      "cashback": 10,
      "period": "1 год"
    },
    {
      "id": 1,
      "name": "Суперский",
      "cashback": 60,
      "period": "10 лет"
    },
    {
      "id": 2,
      "name": "Студенческий",
      "cashback": 6,
      "period": "6 лет"
    }
  ],
  "stickers": [
    {
      "id": 1,
      "image": sticker1,
    },
    {
      "id": 2,
      "image": sticker2,
    },
    {
      "id": 3,
      "image": sticker3,
    },
    {
      "id": 4,
      "image": sticker4,
    },
    {
      "id": 5,
      "image": sticker5,
    },
    {
      "id": 6,
      "image": sticker6,
    },
    {
      "id": 7,
      "image": sticker7,
    },
    {
      "id": 8,
      "image": sticker8,
    },
    {
      "id": 9,
      "image": sticker9,
    }
  ]
}

export default data;