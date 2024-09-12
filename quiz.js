export const data = {
  id: 'quiz_290724',
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
          text: `Какая выручка у вашей компании за последний календарный год?`
        }
      ],
      on: {
        'to A_2_1': {
          target: 'bad final A_1',
          label: 'Меньше 1 млрд. ₽',
          type: 'btn'
        },
        'to A_2_2': {
          target: 'A_2',
          label: 'Больше 1 млрд. ₽',
          type: 'btn'
        }
      }
    },
    'bad final A_1': {
      author: '',
      messages: [
        {
          text: `Для проведения IPO рекомендуемый размер выручки компании должен составлять не менее 1 млрд. руб.`,
        },
        {
          text: `Если компания входит в Группу, рекомендуем рассмотреть иную компанию в качестве эмитента с выручкой свыше 1 млрд. руб.`,
        },
        {
          text: `Либо рекомендуем рассмотреть инструменты публичного долгового финансирования. Хотите узнать больше про выход на публичный долговой рынок?`,
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
          text: `Какая выручка у вашей компании за последний календарный год?`
        }
      ],
      on: {
        'to bad final O_1': {
          target: 'bad final O_1',
          label: 'Меньше 120 млн',
          type: 'btn'
        },
        'to O_2': {
          target: 'O_2',
          label: 'Больше 120 млн',
          type: 'btn'
        }
      }
    },
    'bad final O_1': {
      author: '',
      messages: [
        {
          text: `Инструменты публичного финансирования пока недоступны вашей компании, необходима выручка больше 120 млн.р.`,
        },
        {
          text: `На данном этапе можно начать подготовку к выпуску облигаций и изучать информационные  и обучающие материалы`,
        },
        {
          text: `Если компания входит в Группу, рекомендуем рассмотреть иную компанию в качестве эмитента с выручкой свыше 120 млн.руб.`,
          btn: [
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
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
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/msn/issuers',
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
          text: `Сколько существует ваш бизнес?`
        }
      ],
      on: {
        'to A_3_1': {
          target: 'bad final A_2',
          label: 'Меньше 1 года',
          type: 'btn'
        },
        'to A_3_2': {
          target: 'A_3',
          label: 'Больше 1 года',
          type: 'btn'
        },
      }
    },
    'bad final A_2': {
      author: '',
      messages: [
        {
          text: `Для проведения IPO срок бизнеса должен быть свыше 1 года.`,
        },
        {
          text: `Если компания входит в Группу, рекомендуем рассмотреть иную компанию в качестве эмитента с выручкой свыше 1 млрд. руб. и сроком бизнеса свыше 1 года.`,
        },
        {
          text: `Ознакомьтесь, пожалуйста, с информационными и обучающими материалами: `,
          btn: [
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
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
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/msn/issuers',
              target: '_blank'
            }
          ]
        }
      ],
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
          target: 'bad final O_2',
          label: 'Меньше 3 лет',
          type: 'btn'
        },
        'to O_3': {
          target: 'O_3',
          label: 'Больше 3 лет',
          type: 'btn'
        }
      }
    },
    'bad final O_2': {
      author: '',
      messages: [
        {
          text: `Инструменты публичного финансирования пока недоступны вашей компании, срок бизнеса должен быть свыше 3-х лет`,
        },
        {
          text: `На данном этапе можно начать подготовку к выпуску облигаций и изучать информационные  и обучающие материалы`,
        },
        {
          text: `Если компания входит в Группу, рекомендуем рассмотреть иную компанию в качестве эмитента с выручкой свыше 120 млн.руб. и сроком бизнеса свыше 3-х лет`,
          btn: [
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
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
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/msn/issuers',
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
          text: `Является ли размер ваших чистых активов положительным?`
        }
      ],
      on: {
        'final O': {
          target: 'good final O',
          label: 'Да',
          type: 'btn'
        },
        'to bad final O': {
          target: 'bad final O_3',
          label: 'Нет',
          type: 'btn'
        }
      }
    },
    'bad final O_3': {
      author: '',
      messages: [
        {
          text: `Инструменты публичного финансирования пока недоступны вашей компании, необходим положительный размер ЧА.`,
        },
        {
          text: `На данном этапе можно начать подготовку к выпуску облигаций и изучать информационные  и обучающие материалы`,
        },
        {
          text: `Если компания входит в Группу, рекомендуем рассмотреть иную компанию в качестве эмитента с выручкой свыше 120 млн.руб., сроком бизнеса свыше 3-х лет и положительным размером ЧА`,
        },
        {
          text: `Хотите  получить дополнительную информацию о возможных вариантах?`
        }
      ],
      on: {
        'to more': {
          target: 'more',
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
    'info': {
      author: '',
      messages: [
        {
          text: `Ознакомьтесь, пожалуйста, с информационными и обучающими материалами:`,
          btn: [
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
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
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/fsn/ru-listing-issuer-how-to-become-issuer',
              target: '_blank'
            }
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
          text: `Свяжитесь, пожалуйста, с нами для уточнения деталей:`,
          btn: [
            {
              label: 'Связаться',
              type: 'btn',
              url: '/ru/lead-connection',
              target: '_blank'
            },
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
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
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/fsn/ru-listing-issuer-how-to-become-issuer',
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
          text: `Общались ли вы с банками-организаторами?`
        }
      ],
      on: {
        'final A': {
          target: 'good final A_YES',
          label: 'Да',
          type: 'btn'
        },
        'final A_2': {
          target: 'good final A_NO',
          label: 'Нет',
          type: 'btn'
        }
      }
    },
    'good final A_YES': {
      author: '',
      messages: [
        {
          text: `Ваша компания является потенциальным кандидатом для проведения IPO. Свяжитесь, пожалуйста, с нами для уточнения деталей:`,
          btn: [
            {
              label: 'Связаться',
              type: 'btn',
              url: '/ru/lead-connection',
              target: '_blank'
            },
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
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
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/fsn/ru-listing-issuer-how-to-become-issuer',
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
          text: `Ваша компания является потенциальным кандидатом для проведения IPO. Свяжитесь, пожалуйста, с нами для уточнения деталей:`,
          btn: [
            {
              label: 'Связаться',
              type: 'btn',
              url: '/ru/lead-connection',
              target: '_blank'
            },
            {
              label: 'Открыть список банков',
              type: 'btn',
              url: 'https://www.moex.com/s3338',
              target: '_blank'
            },
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
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
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/fsn/ru-listing-issuer-how-to-become-issuer',
              target: '_blank'
            }
          ]
        }
      ],
    },
    'good final O': {
      author: '',
      messages: [
        {
          text: `Ваша компания является потенциальным кандидатом для выхода на публичный долговой рынка. `,
        },
        {
          text: `Свяжитесь, пожалуйста, с нами для уточнения деталей:`,
          btn: [
            {
              label: 'Связаться',
              type: 'btn',
              url: '/ru/lead-connection',
              target: '_blank'
            },
            {
              label: 'MOEX IR-СЕРВИСЫ',
              type: 'btn',
              url: 'https://www.moex.com/s3228',
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
              label: 'Эмитентам',
              type: 'btn',
              url: 'https://www.moex.com/fsn/ru-listing-issuer-how-to-become-issuer',
              target: '_blank'
            }
          ]
        }
      ],
    }
  }
}
