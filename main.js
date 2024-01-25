// import { styles } from './assets.js'
import { data } from './quiz.js'
import { createApp } from './vue.js'
import widget from './widget.vue?raw'
import styles from './style.css?raw'

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
          stories: [
            {
              id: 0,
              title:
                'Выход на публичный рынок является важным решением для каждой компании',
              desc: 'Размещение акций проходит через IPO, а для облигаций существует своя процедура',
              textColor: 'white',
              media: './test_bg.jpg',
              prog: 0,
              time: 3000,
              watched: false
            },
            {
              id: 1,
              title:
                'Пройдите тест, чтобы узнать какой способ выхода на публичный рынок подходит вашей компании',
              textColor: 'white',
              media: './test_bg.jpg',
              prog: 0,
              time: 3000,
              watched: false
            }
          ],
          currentStory: {
            id: 0,
            prog: 0,
            active: 0
          },
          data: data,
          history: [
            {
              id: 'idle',
              answer: null
            }
          ]
        }
      },
      methods: {
        toggleOpen() {
          this.open = !this.open
        },
        saveAnswer(id, answer) {
          this.history[this.history.length - 1].answer = answer
          this.nextQuest(id, answer)
        },
        editAnswer(ind) {
          let newHistory = []
          for (let i = 0; i <= ind; i++) {
            if (i == ind) {
              this.history[i].answer = null
            }
            newHistory.push(this.history[i])
          }
          this.history = newHistory
        },
        nextQuest(id, answer) {
          this.history.push({
            id,
            answer: null
          })
        },
        reset() {
          this.history = [
            {
              id: 'idle',
              answer: null
            }
          ]
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
            this.startAnim(document.querySelector(`.st_line_0`), this.stories[this.currentStory.id].time)
          }, 100)
        },
        startAnim(el, time) {
          const zero = performance.now()
          const animate = (id) => {
            const value = (performance.now() - zero) / time
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
        open: {
          handler: function (value) {
            if (value) {
              setTimeout(() => {
                this.startAnim(
                  document.querySelector(`.st_line_${this.currentStory.id}`),
                  this.stories[this.currentStory.id].time
                )
              }, 100)
            }
          }
        },
        history: {
          handler: function () {
            setTimeout(() => {
              this.$refs.msg_chat.scrollTo({
                top: this.$refs.msg_chat.scrollHeight,
                behavior: 'smooth'
              })
            })
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
