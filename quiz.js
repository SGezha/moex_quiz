export const data = {
  id: 'quiz_290124',
  initial: 'idle',
  states: {
    idle: {
      author: 'MOEX',
      messages: [
        {
          text: `Добрый день!\n Выход на публичный рынок является важным решением для каждой компании.`
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
      author: 'MOEX',
      messages: [
        {
          text: `Какая выручка у вашей компании за последний календарный год?`
        }
      ],
      on: {
        'to A_2_1': {
          target: 'A_2',
          label: 'меньше 1 млрд',
          type: 'btn'
        },
        'to A_2_2': {
          target: 'A_2',
          label: 'от 1 млрд до 10 млрд',
          type: 'btn'
        },
        'to A_2_3': {
          target: 'A_2',
          label: 'больше 10 млрд',
          type: 'btn'
        }
      }
    },
    O_1: {
      author: 'MOEX',
      messages: [
        {
          text: `Какая выручка у вашей компании за последний календарный год?`
        }
      ],
      on: {
        'to bad final O': {
          target: 'bad final O',
          label: 'меньше 120 млн',
          type: 'btn'
        },
        'to O_2_1': {
          target: 'O_2',
          label: 'от 120 млн до 1 млрд',
          type: 'btn'
        },
        'to O_2_2': {
          target: 'O_2',
          label: 'больше 1 млрд.',
          type: 'btn'
        }
      }
    },
    A_2: {
      author: 'MOEX',
      messages: [
        {
          text: `Какой объем финансирования вы ожидаете привлечь?`
        }
      ],
      on: {
        'to A_3_1': {
          target: 'A_3',
          label: 'меньше 500 млн',
          type: 'btn'
        },
        'to A_3_2': {
          target: 'A_3',
          label: 'от 500 млн до 5 млрд',
          type: 'btn'
        },
        'to A_3_3': {
          target: 'A_3',
          label: 'больше 5 млрд.',
          type: 'btn'
        }
      }
    },
    O_2: {
      author: 'MOEX',
      messages: [
        {
          text: `Сколько существует ваш бизнес*? Напишите количество лет (Например, 3)`
        }
      ],
      on: {
        'to bad final O': {
          target: 'bad final O',
          label: 'меньше 3 лет',
          type: 'btn'
        },
        'to O_3': {
          target: 'O_3',
          label: 'больше 3 лет',
          type: 'btn'
        }
      }
    },
    'bad final O': {
      author: 'MOEX',
      messages: [
        {
          text: `Вашей компании есть, куда расти. Инструменты публичного финансирования пока не подходят вашей компании.`,
          btn: [
            {
              label: 'Cсылка на IPO и Bond гид',
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
      author: 'MOEX',
      messages: [
        {
          text: `Сколько существует ваш бизнес*?`
        }
      ],
      on: {
        'to A_4_1': {
          target: 'A_4',
          label: 'меньше 1 года',
          type: 'btn'
        },
        'to A_4_2': {
          target: 'A_4',
          label: 'больше 1 года, но меньше 3 лет',
          type: 'btn'
        },
        'to A_4_3': {
          target: 'A_4',
          label: 'больше 3 лет',
          type: 'btn'
        }
      }
    },
    O_3: {
      author: 'MOEX',
      messages: [
        {
          text: `Является ли размер ваших чистых активов положительным? Напишите да или нет?`
        }
      ],
      on: {
        'to bad final O': {
          target: 'bad final O',
          label: 'Да',
          type: 'btn'
        },
        'final O': {
          target: 'good final',
          label: 'Нет',
          type: 'btn'
        }
      }
    },
    A_4: {
      author: 'MOEX',
      messages: [
        {
          text: `Общались ли в с банками-организаторами?`
        }
      ],
      on: {
        'final A': {
          target: 'good final',
          label: 'Да',
          type: 'btn'
        },
        'final A_2': {
          target: 'good final',
          label: 'Нет',
          type: 'btn'
        }
      }
    },
    'good final': {
      author: 'MOEX',
      messages: [
        {
          if: 'больше 3 лет ',
          text: `Запрашиваем данные для направления документов Deal Review`
        },
        {
          text: 'Название вашей компании?'
        }
      ],
      on: {
        'form_comp': {
          target: 'good final',
          label: 'Введите название компании',
          type: 'input'
        }
      }
    }
  }
}
