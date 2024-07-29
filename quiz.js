export const data = {
  id: 'quiz_290724',
  initial: 'idle',
  states: {
    idle: {
      author: 'MOEX',
      messages: [
        {
          text: `Здравствуйте!\n Выход на публичный рынок является важным решением для каждой компании.`
        },
        {
          text: `Что вас интересует: акции или облигации?`
        }
      ],
      on: {
        'to A_1': {
          target: 'A_1',
          label: 'Акции',
          type: 'btn'
        },
        'to O_1': {
          target: 'O_1',
          label: 'Облигации',
          type: 'btn'
        }
      }
    },
    A_1: {
      author: '',
      step: 'Вопрос 1 из 4:',
      messages: [
        {
          text: `Какая выручка у вашей компании за последний календарный год?`
        }
      ],
      on: {
        'to A_2_1': {
          target: 'bad final O',
          label: 'Менее 1 млрд ₽',
          type: 'btn'
        },
        'to A_2_2': {
          target: 'A_2',
          label: 'От 1 млрд до 10 млрд ₽',
          type: 'btn'
        },
        'to A_2_3': {
          target: 'A_2',
          label: 'Более 10 млрд ₽',
          type: 'btn'
        }
      }
    },
    O_1: {
      author: '',
      step: 'Вопрос 1 из 3:',
      messages: [
        {
          text: `Какая выручка у вашей компании за последний календарный год?`
        }
      ],
      on: {
        'to bad final O': {
          target: 'bad final O',
          label: 'Менее 120 млн ₽',
          type: 'btn'
        },
        'to O_2_1': {
          target: 'O_2',
          label: 'От 120 млн ₽ до 1 млрд ₽',
          type: 'btn'
        },
        'to O_2_2': {
          target: 'O_2',
          label: 'Более 1 млрд ₽',
          type: 'btn'
        }
      }
    },
    A_2: {
      author: '',
      step: 'Вопрос 2 из 4:',
      messages: [
        {
          text: `Какой объем финансирования вы ожидаете привлечь?`
        }
      ],
      on: {
        'to A_3_1': {
          target: 'bad final O',
          label: 'Менее 500 млн ₽',
          type: 'btn'
        },
        'to A_3_2': {
          target: 'A_3',
          label: 'От 500 млн до 5 млрд ₽',
          type: 'btn'
        },
        'to A_3_3': {
          target: 'A_3',
          label: 'Более 5 млрд ₽',
          type: 'btn'
        }
      }
    },
    O_2: {
      author: '',
      step: 'Вопрос 2 из 3:',
      messages: [
        {
          text: `Сколько существует ваш бизнес?`
        }
      ],
      on: {
        'to bad final O': {
          target: 'bad final O',
          label: 'Менее 3 лет',
          type: 'btn'
        },
        'to O_3': {
          target: 'O_3',
          label: 'Более 3 лет',
          type: 'btn'
        }
      }
    },
    'bad final O': {
      author: '',
      messages: [
        {
          text: `Вашей компании есть, куда расти.\n Инструменты публичного финансирования пока не подходят вашей компании.`,
        },
        {
          text: `Изучите материалы, которые помогут узнать, как привлечь финансирование через биржу`,
          btn: [
            {
              label: 'IPO-гид',
              type: 'btn',
              url: '',
              target: ''
            },
            {
              label: 'ESG-гид',
              type: 'btn',
              url: '',
              target: ''
            },
            {
              label: 'Bond-гид',
              type: 'btn',
              url: '',
              target: ''
            }
          ]
        }
      ],
      on: {
        'to idle': {
          target: 'idle',
          label: 'Да, продолжаем',
          type: 'btn'
        },
        'to end': {
          target: 'idle',
          label: 'Нет',
          type: 'btn'
        }
      }
    },
    A_3: {
      author: '',
      step: 'Вопрос 3 из 4:',
      messages: [
        {
          text: `Сколько существует ваш бизнес?`
        }
      ],
      on: {
        'to A_4_1': {
          target: 'A_4',
          label: 'Менее 1 года',
          type: 'btn'
        },
        'to A_4_2': {
          target: 'A_4',
          label: 'От 1 до 3 лет',
          type: 'btn'
        },
        'to A_4_3': {
          target: 'A_4',
          label: 'Более 3 лет',
          type: 'btn'
        }
      }
    },
    O_3: {
      author: '',
      step: 'Вопрос 3 из 3:',
      messages: [
        {
          text: `Является ли размер ваших чистых активов положительным?`
        }
      ],
      on: {
        'to bad final O': {
          target: 'bad final O',
          label: 'Да',
          type: 'btn'
        },
        'final O': {
          target: 'good final O',
          label: 'Нет',
          type: 'btn'
        }
      }
    },
    A_4: {
      author: '',
      step: 'Вопрос 4 из 4:',
      messages: [
        {
          text: `Общались ли вы с банками-организаторами?`
        }
      ],
      on: {
        'final A': {
          target: 'good final A_YES',
          label: 'Да, общались',
          type: 'btn'
        },
        'final A_2': {
          target: 'good final A_NO',
          label: 'Нет, не общались',
          type: 'btn'
        }
      }
    },
    'good final A_YES': {
      author: '',
      messages: [
        {
          text: `Ваша компания готова к IPO. Оставьте ваши данные, чтобы начать процесс выпуска акций вашей компании на Московской бирже`,
          btn: [
            {
              label: 'Связаться',
              type: 'btn',
              url: '',
              target: ''
            }
          ]
        }
      ],
    },
    'good final A_NO': {
      author: '',
      messages: [
        {
          text: `Похоже, ваша компания готова к IPO. Осталось выбрать банк-организатор. Ознакомьтесь со списком всех возможных банков-организаторов IPO`,
          btn: [
            {
              label: 'Открыть список банков',
              type: 'btn',
              url: 'https://www.moex.com/s3338',
              target: '_blank'
            }
          ]
        },
        {
          text: `Чтобы оставить данные для оформления заявки на IPO, пожалуйста, свяжитесь c нами.`,
          btn: [
            {
              label: 'Связаться',
              type: 'btn',
              url: '',
              target: ''
            }
          ]
        }
      ],
    },
    'good final O': {
      author: '',
      messages: [
        {
          text: `Ваша компания готова к IPO.\n Оставьте ваши данные, чтобы начать процесс выпуска акций вашей компании на Московской бирже`,
        },
        {
          text: `Чтобы оставить данные для оформления заявки на IPO, пожалуйста, свяжитесь c нами.`,
          btn: [
            {
              label: 'Связаться',
              type: 'btn',
              url: '',
              target: ''
            }
          ]
        }
      ],
    }
  }
}
