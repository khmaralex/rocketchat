import accountImage1 from './images/pic-account-1.svg';
import accountImgage2 from './images/pic-account-2.svg';
import accountImage3 from './images/pic-account-3.svg';
import operationImage from './images/operation.png';

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
          "name": "Макдоналдс",
          "image": operationImage,
          "date": "23 мая 13:55",
          "value": -258
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
          "value": -620,
          "currency": "$"
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
          "name": "Пополнение с карты",
          "image": operationImage,
          "date": "23 января 13:55",
          "value": 340
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
  ]
}

export default data;