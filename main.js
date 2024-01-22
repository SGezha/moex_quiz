// import { styles } from './assets.js'
import { data } from './quiz.js'
import { createApp } from './vue.js'
import widget from './widget.vue?raw'
import styles from './style.css?raw'

class MessageWidget {
  constructor(position = 'bottom-right') {
    this.position = this.getPosition(position)
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
          for(let i = 0; i <= ind; i++) {
            if(i == ind) {
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
        }
      },
      watch: {
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
