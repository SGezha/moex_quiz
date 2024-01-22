// export const data = {
//   0: {
//     text: `Добрый день! <br><br>Выход на публичный рынок является важным решением для каждой компании. <br><br>Что вас интересует: акции или облигации?`,
//     actions: [
//       {
//         title: 'Акции',
//         to: 'A_0'
//       },
//       {
//         title: 'Облигации',
//         to: 'О_0'
//       }
//     ]
//   },
//   A_0: {
//     text: 'Размещение акций, как правило, проходит через IPO. <br><br>Предлагаю пройти тест, чтобы оценить целесообразность такого инструмента для вас.',
//     actions: [
//       {
//         title: 'Да',
//         to: ''
//       },
//       {
//         title: 'Нет',
//         to: ''
//       }
//     ]
//   },
//   B_0: {
//     text: 'Размещение облигаций. <br><br>Предлагаю пройти тест, чтобы оценить целесообразность такого инструмента для вас.',
//     actions: [
//       {
//         title: 'Да',
//         to: ''
//       },
//       {
//         title: 'Нет',
//         to: ''
//       }
//     ]
//   }
// }

export const data = {
  id: 'quiz_210124',
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
          label: 'Акции'
        },
        'to O_1': {
          target: 'O_1',
          label: 'Облигации'
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
          label: 'меньше 1 млрд'
        },
        'to A_2_2': {
          target: 'A_2',
          label: 'от 1 млрд до 10 млрд'
        },
        'to A_2_3': {
          target: 'A_2',
          label: 'больше 10 млрд'
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
          label: 'меньше 120 млн'
        },
        'to O_2_1': {
          target: 'O_2',
          label: 'от 120 млн до 1 млрд'
        },
        'to O_2_2': {
          target: 'O_2',
          label: 'больше 1 млрд.'
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
          label: 'меньше 500 млн'
        },
        'to A_3_2': {
          target: 'A_3',
          label: 'от 500 млн до 5 млрд'
        },
        'to A_3_3': {
          target: 'A_3',
          label: 'больше 5 млрд.'
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
          label: 'меньше 3 лет'
        },
        'to O_3': {
          target: 'O_3',
          label: 'больше 3 лет'
        }
      }
    },
    'bad final O': {},
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
          label: 'меньше 1 года'
        },
        'to A_4_2': {
          target: 'A_4',
          label: 'больше 1 года, но меньше 3 лет'
        },
        'to A_4_3': {
          target: 'A_4',
          label: 'больше 3 лет'
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
          label: 'Да'
        },
        'final O': {
          target: 'good final',
          label: 'Нет'
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
          label: 'Да'
        },
        'final A_2': {
          target: 'good final',
          label: 'Нет'
        }
      }
    },
    'good final': {}
  }
}
