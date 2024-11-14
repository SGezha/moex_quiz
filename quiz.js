export const data = {
  id: 'quiz_301024',
  initial: 'idle',
  states: {
    idle: {
      author: 'Moex',
      messages: [
        {
          text: `Здравствуйте!\n Выход на публичный рынок открывает дополнительные возможности развития бизнеса и является важным решением для каждой компании.`
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
      step: 'Вопрос 1 из 3:',
      messages: [
        {
          text: `Какой объем финансирования вы хотели бы привлечь?`
        }
      ],
      on: {
        'to A_2_1': {
          target: 'bad final A_1',
          label: 'Меньше 300 млн. руб.',
          type: 'btn'
        },
        'to A_2_2': {
          target: 'A_2',
          label: 'Больше 300 млн. руб.',
          type: 'btn'
        }
      }
    },
    'bad final A_1': {
      author: '',
      messages: [
        {
          text: `Рекомендуемый объем сделки для проведения IPO составляет не менее 300 млн. руб.`,
        },
        {
          text: `Возможный альтернативный вариант по привлечению финансирования – выпуск и размещение облигаций.`,
        },
        {
          text: `Хотите узнать больше про выход на публичный долговой рынок?`,
        }
      ],
      on: {
        'to O_1': {
          target: 'O_1',
          label: 'Да',
          type: 'btn'
        },
        'to info': {
          target: 'info',
          label: 'Нет',
          type: 'btn'
        }
      }
    },
    O_1: {
      author: '',
      step: 'Вопрос 1 из 3:',
      messages: [
        {
          text: `Какой объем финансирования вы хотели бы привлечь?`
        }
      ],
      on: {
        'to bad final O_1': {
          target: 'bad final O_1',
          label: 'Меньше 50 млн. руб.',
          type: 'btn'
        },
        'to O_2': {
          target: 'O_2',
          label: 'Больше 50 млн. руб.',
          type: 'btn'
        }
      }
    },
    'bad final O_1': {
      author: '',
      messages: [
        {
          text: `Рекомендуемый объем сделки по выходу на рынок облигаций составляет не менее 50 млн. руб.`,
        },
        {
          text: `Возможный альтернативный вариант по привлечению финансирования – выпуск и продажа ЦФА на денежные требования либо коммерческие облигации.`,
          btn: [
            {
              label: 'Узнать о ЦФА',
              type: 'btn',
              url: 'https://www.moex.com/ru/digital-assets',
              target: '_blank'
            },
            {
              label: 'Узнать про коммерческие облигации',
              type: 'btn',
              url: 'https://www.nsd.ru/services/depozitariy/uslugi-dlya-emitentov/kommercheskie-obligatsii',
              target: '_blank'
            }
          ]
        }
      ],
    },
    A_2: {
      author: '',
      step: 'Вопрос 2 из 3:',
      messages: [
        {
          text: `Какая выручка у вашей компании (группы компаний) за последний календарный год?`
        }
      ],
      on: {
        'to A_3_1': {
          target: 'bad final A_2',
          label: 'Меньше 1 млрд. руб.',
          type: 'btn'
        },
        'to A_3_2': {
          target: 'A_3',
          label: 'Больше 1 млрд. руб.',
          type: 'btn'
        },
      }
    },
    'bad final A_2': {
      author: '',
      messages: [
        {
          text: `Рыночная практика последних лет показывает, что сделки IPO проходят успешно для компаний с выручкой более 1 млрд. руб.`,
        },
        {
          text: `Возможный альтернативный вариант по привлечению финансирования – выпуск и размещение облигаций.`,
        },
        {
          text: `Хотите узнать больше про выход на публичный долговой рынок? `,
        }
      ],
      on: {
        'to O_1': {
          target: 'O_2',
          label: 'Да',
          type: 'btn'
        },
        'to info': {
          target: 'info',
          label: 'Нет',
          type: 'btn'
        }
      }
    },
    O_2: {
      author: '',
      step: 'Вопрос 2 из 3:',
      messages: [
        {
          text: `Какая выручка у вашей компании за последний календарный год?`
        }
      ],
      on: {
        'to bad final O': {
          target: 'bad final O_2',
          label: 'Меньше 120 млн. руб.',
          type: 'btn'
        },
        'to O_3': {
          target: 'O_3',
          label: 'Больше 120 млн. руб.',
          type: 'btn'
        }
      }
    },
    'bad final O_2': {
      author: '',
      messages: [
        {
          text: `Рыночная практика последних лет показывает, что на рынке облигаций успешно проходят сделки для компаний с выручкой более 120 млн. руб.`,
        },
        {
          text: `Если компания входит в группу компаний, рекомендуем рассмотреть в качестве эмитента компанию с выручкой свыше 120 млн. руб.`,
        },
        {
          text: `Возможный альтернативный вариант по привлечению финансирования – выпуск и продажа ЦФА на денежные требования либо коммерческие облигации.`,
          btn: [
            {
              label: 'Узнать о ЦФА',
              type: 'btn',
              url: 'https://www.moex.com/ru/digital-assets',
              target: '_blank'
            },
            {
              label: 'Узнать про коммерческие облигации',
              type: 'btn',
              url: 'https://www.nsd.ru/services/depozitariy/uslugi-dlya-emitentov/kommercheskie-obligatsii',
              target: '_blank'
            }
          ]
        }
      ],
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
              label: 'Гид по облигациям',
              type: 'btn',
              url: 'https://bondguide.moex.com/',
              target: '_blank'
            },
            {
              label: 'IPO-гид',
              type: 'btn',
              url: 'https://fs.moex.com/f/19351/mosbirzha-ipo-guide2023-rus-book.pdf',
              target: '_blank'
            },
            {
              label: 'ESG-гид',
              type: 'btn',
              url: 'https://fs.moex.com/f/16010/mosbirzha-esg-rus-book-1012.pdf',
              target: '_blank'
            }
          ]
        }
      ],
    },
    O_3: {
      author: '',
      step: 'Вопрос 3 из 3:',
      messages: [
        {
          text: `Сколько существует ваш бизнес?`
        }
      ],
      on: {
        'to bad final O': {
          target: 'bad final O_3',
          label: 'Меньше 3 лет',
          type: 'btn'
        },
        'final O': {
          target: 'good final O',
          label: 'Больше 3 лет',
          type: 'btn'
        }
      }
    },
    'bad final O_3': {
      author: '',
      messages: [
        {
          text: `Рыночная практика последних лет показывает, что на рынке облигаций успешно проходят сделки для компаний со сроком бизнеса более 3 лет.`,
        },
        {
          text: `Если компания входит в группу компаний, рекомендуем рассмотреть в качестве эмитента компанию с выручкой свыше 120 млн. руб. и сроком бизнеса более 3 лет.`,
        },
        {
          text: `Возможный альтернативный вариант по привлечению финансирования – выпуск и продажа ЦФА на денежные требования либо коммерческие облигации.`,
          btn: [
            {
              label: 'Узнать о ЦФА',
              type: 'btn',
              url: 'https://www.moex.com/ru/digital-assets',
              target: '_blank'
            },
            {
              label: 'Узнать про коммерческие облигации',
              type: 'btn',
              url: 'https://www.nsd.ru/services/depozitariy/uslugi-dlya-emitentov/kommercheskie-obligatsii',
              target: '_blank'
            },
            {
              label: 'Гид по облигациям',
              type: 'btn',
              url: 'https://bondguide.moex.com/',
              target: '_blank'
            },
          ]
        }
      ],
    },
    'info': {
      author: '',
      messages: [
        {
          text: `Ознакомьтесь, пожалуйста, с информационными и обучающими материалами:`,
          btn: [
            {
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/msn/issuers',
              target: '_blank'
            },
            {
              label: 'IPO-гид',
              type: 'btn',
              url: 'https://fs.moex.com/f/19351/mosbirzha-ipo-guide2023-rus-book.pdf',
              target: '_blank'
            },
          ]
        }
      ],
    },
    'more': {
      author: '',
      messages: [
        {
          text: `Компания может быть рассмотрена как  потенциальный кандидат при дополнительных условиях к выпуску облигаций:\n- выпуск только для квалифицированных инвесторов или \n- наличие в структуре выпуска поручителя , СЧА которого  покрывают размер выпуска эмитента и проценты по нему.`,
        },
        {
          text: `Свяжитесь, пожалуйста, с нами для уточнения деталей. В запросе укажите название и ИНН вашей компании, а также телефон представителя:`,
          btn: [
            {
              label: 'Связаться',
              type: 'btn',
              url: '/ru/lead-connection',
              target: '_blank'
            },
            {
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/msn/issuers',
              target: '_blank'
            },
            {
              label: 'Гид по облигациям',
              type: 'btn',
              url: 'https://bondguide.moex.com/',
              target: '_blank'
            },
            {
              label: 'IPO-гид',
              type: 'btn',
              url: 'https://fs.moex.com/f/19351/mosbirzha-ipo-guide2023-rus-book.pdf',
              target: '_blank'
            },
            {
              label: 'ESG-гид',
              type: 'btn',
              url: 'https://fs.moex.com/f/16010/mosbirzha-esg-rus-book-1012.pdf',
              target: '_blank'
            },
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
              target: '_blank'
            }
          ]
        }
      ],
    },
    A_3: {
      author: '',
      step: 'Вопрос 3 из 3:',
      messages: [
        {
          text: `Сколько существует ваш бизнес?`
        }
      ],
      on: {
        'final A': {
          target: 'good final A_NO',
          label: 'Меньше 3 лет',
          type: 'btn'
        },
        'final A_2': {
          target: 'good final A_YES',
          label: 'Больше 3 лет',
          type: 'btn'
        }
      }
    },
    'good final A_YES': {
      author: '',
      messages: [
        {
          text: `Ваша компания является потенциальным кандидатом для проведения IPO.\n Свяжитесь, пожалуйста, с нами для уточнения деталей. В запросе укажите название и ИНН вашей компании, а также телефон представителя:`,
          btn: [
            {
              label: 'Оставить заявку',
              type: 'btn',
              url: 'mailto:issuersconsulting@moex.com',
              target: '_blank'
            },
            {
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/msn/issuers',
              target: '_blank'
            },
            {
              label: 'IPO-гид',
              type: 'btn',
              url: 'https://fs.moex.com/f/19351/mosbirzha-ipo-guide2023-rus-book.pdf',
              target: '_blank'
            },
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
              target: '_blank'
            }
          ]
        }
      ],
    },
    'good final A_NO': {
      author: '',
      messages: [
        {
          text: `Рыночная практика последних лет показывает, что сделки IPO проходят успешно для компаний со сроком бизнеса более 3 лет.`
        },
        {
          text: `Возможный альтернативный вариант по привлечению финансирования – выпуск и продажа ЦФА на денежные требования или коммерческие облигации.`,
          btn: [
            {
              label: 'Узнать о ЦФА',
              type: 'btn',
              url: 'https://www.moex.com/ru/digital-assets',
              target: '_blank'
            },
            {
              label: 'Узнать про коммерческие облигации',
              type: 'btn',
              url: 'https://www.nsd.ru/services/depozitariy/uslugi-dlya-emitentov/kommercheskie-obligatsii',
              target: '_blank'
            },
            {
              label: 'IPO-гид',
              type: 'btn',
              url: 'https://fs.moex.com/f/19351/mosbirzha-ipo-guide2023-rus-book.pdf',
              target: '_blank'
            },
            {
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/msn/issuers',
              target: '_blank'
            },
          ]
        }
      ],
    },
    'good final O': {
      author: '',
      messages: [
        {
          text: `Ваша компания является потенциальным кандидатом для выхода на публичный долговой рынок.`,
        },
        {
          text: `Свяжитесь, пожалуйста, с нами для уточнения деталей. В запросе укажите название и ИНН вашей компании, а также телефон представителя:`,
          btn: [
            {
              label: 'Оставить заявку',
              type: 'btn',
              url: 'mailto:Primarybonds@moex.com',
              target: '_blank'
            },
            {
              label: 'Эмитентам облигаций',
              type: 'btn',
              url: 'https://www.moex.com/fsn/ru-listing-issuer-how-to-become-issuer',
              target: '_blank'
            },
            {
              label: 'Гид по облигациям',
              type: 'btn',
              url: 'https://bondguide.moex.com/',
              target: '_blank'
            },
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
              target: '_blank'
            }
          ]
        }
      ],
    }
  }
}
