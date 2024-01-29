// import { styles } from './assets.js'
import { data } from './quiz.js'
import { createApp } from './vue.js'
import widget from './widget.vue?raw'
import styles from './style.css?raw'

const DELAYINMS = 500

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const getRandomInt = (min, max) => {
  return Math.random() * (max - min) + min
}

class MessageWidget {
  constructor(position = 'bottom-right') {
    // this.position = this.getPosition(position)
    this.open = false
    this.initialize()
    this.injectStyles()
    this.vue()
  }

  position = ''
  widgetContainer = null

  getPosition(position) {
    const [vertical, horizontal] = position.split('-')
    return {
      [vertical]: '40px',
      [horizontal]: '100px'
    }
  }

  async initialize() {
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement('div')
    container.classList.add('quiz_all')
    container.style.position = 'fixed'
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    )
    document.body.appendChild(container)

    this.widgetContainer = document.createElement('div')
    this.createWidgetContent()
    container.appendChild(this.widgetContainer)
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = widget
      .replace('<template>', '')
      .replace('</template>', '')
  }

  injectStyles() {
    const styleTag = document.createElement('style')
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, '')

    document.head.appendChild(styleTag)
  }

  vue() {
    createApp({
      data() {
        return {
          open: false,
          isChat: false,
          isTyping: false,
          stories: [
            {
              id: 0,
              title:
                'Выход на публичный рынок является важным решением для каждой компании',
              desc: 'Размещение акций проходит через IPO, а для облигаций существует своя процедура',
              textColor: 'white',
              media: './test_bg.jpg',
              prog: 0,
              time: 5000,
              watched: false
            },
            {
              id: 1,
              title:
                'Пройдите тест, чтобы узнать какой способ выхода на публичный рынок подходит вашей компании',
              textColor: 'white',
              media: './test_bg.jpg',
              prog: 0,
              time: 5000,
              watched: false
            }
          ],
          answer: {
            show: false,
            on: []
          },
          isBg: false,
          currentStory: {
            id: 0,
            prog: 0,
            active: 0
          },
          isLock: false,
          showChat: false,
          data: data,
          isStoriesPause: false,
          history: [],
          curBotMargin: 0
        }
      },
      methods: {
        toggleOpen() {
          if(this.isLock) return
          this.open = !this.open
        },
        async saveAnswer(id, answer) {
          this.answer.show = false
          this.history[this.history.length - 1].answer = answer
          this.isTyping = true
          await timeout(1)
          this.scrollToBot('smooth')
          await timeout(getRandomInt(1000, 1500))
          this.isTyping = false
          this.nextQuest(
            id,
            answer,
            this.history[this.history.length - 1].messages
          )
        },
        editAnswer(ind) {
          let newHistory = []
          this.answer.show = false
          for (let i = 0; i <= ind; i++) {
            if (i == ind) {
              this.history[i].answer = null
            }
            newHistory.push(this.history[i])
          }
          this.history = newHistory
          this.answer.on =
            this.data.states[this.history[this.history.length - 1].id].on
          this.answer.show = true
        },
        nextQuest(id, answer, messages) {
          this.history.push({ id, answer: null, messages, isTyping: false })
          const lastId = this.history[this.history.length - 1].id
          this.answer.on = this.data.states[lastId].on
          this.answer.show = true
        },
        async reset() {
          this.isBg = false
          this.showChat = false
          this.answer.show = false
          await timeout(500)
          this.history = [
            {
              id: 'idle',
              answer: null
            }
          ]
          this.answer.on =
            this.data.states[this.history[this.history.length - 1].id].on
          await timeout(500)
          this.isBg = true
          this.showChat = true
          await timeout(1)
          this.scrollToBot()
          await timeout(1500)
          this.answer.show = true
        },
        nextStories() {
          this.stories[this.currentStory.id].watched = true
          if (this.stories[this.currentStory.id + 1]) {
            this.currentStory.id++
            this.startAnim(
              document.querySelector(`.st_line_${this.currentStory.id}`),
              this.stories[this.currentStory.id].time
            )
          } else {
            this.isChat = true
            // this.resetStories()
          }
        },
        resetStories() {
          this.currentStory.id = 0
          for (let i = 0; i < this.stories.length; i++) {
            let el = document.querySelector(`.st_line_${i}`)
            el.style = `--progress: 0%`
          }
          setTimeout(() => {
            this.startAnim(
              document.querySelector(`.st_line_0`),
              this.stories[this.currentStory.id].time
            )
          }, 100)
        },
        scrollToBot(behavior = 'instant') {
          this.$refs.msg_chat?.scrollTo({
            top: this.$refs.msg_chat.scrollHeight,
            behavior
          })
        },
        startAnim(el, time) {
          const zero = performance.now()
          const animate = (id) => {
            const value = (performance.now() - zero) / time
            if (!el) return
            if (value < 1) {
              el.style = `--progress: ${value * 100}%`
              requestAnimationFrame((t) => animate(t))
            } else {
              el.style = `--progress: 100%`
              this.nextStories()
            }
          }
          requestAnimationFrame(animate)
        }
      },
      mounted() {},
      watch: {
        isStoriesPause: {
          handler: async function (value) {}
        },
        isChat: {
          handler: async function (value) {
            if (value) {
              this.answer.show = false
              await timeout(500)
              this.history.push({
                id: 'idle',
                answer: null,
                isTyping: false
              })
              this.answer.on =
                this.data.states[this.history[this.history.length - 1].id].on
              this.isBg = true
              this.showChat = true
              this.history[this.history.length - 1].isTyping = true
              await timeout(1500)
              this.history[this.history.length - 1].isTyping = false
              this.answer.show = true
            }
          }
        },
        answer: {
          handler: async function (value) {
            if (value.show) {
              await timeout(100)
              this.curBotMargin = `${
                document.querySelector('.message_actions')?.clientHeight + 24
              }px`
              await timeout(1)
              this.scrollToBot()
            } else {
              this.curBotMargin = '24px'
            }
          },
          deep: true
        },
        open: {
          handler: async function (value) {
            if (value) {
              setTimeout(async () => {
                this.startAnim(
                  document.querySelector(`.st_line_${this.currentStory.id}`),
                  this.stories[this.currentStory.id].time
                )
              }, 100)
              await timeout(1)
              this.scrollToBot()
            }
          }
        },
        history: {
          handler: async function () {
            this.isLock = true
            await timeout(1500)
            this.isLock = false
          },
          deep: true
        }
      }
    }).mount('#quiz_widget')
  }
}

function initializeWidget() {
  return new MessageWidget()
}

initializeWidget()
