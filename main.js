import { styles } from './assets.js'
import { data } from './quiz.js'
import { createApp } from './vue.js'

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
      [vertical]: '30px',
      [horizontal]: '30px'
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
    this.widgetContainer.innerHTML = `
        <div id="quiz_widget">
          <Transition name="fade">
            <div v-if="open" class="widget__container">
              <div class="message__container">
                <div v-html="data[currentId].text" class="message_title"></div>
                <div class="message_actions">
                  <button @click="changeSlide(btn.to)" v-for="btn in data[currentId].actions" :key="btn.title">
                    {{ btn.title }}
                  </button>
                </div>
              </div>
            </div>
          </Transition>
          <button @click="toggleOpen()" class="button__container">
            <Transition name="fade">
              <span v-if="!open" class="widget__icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark" width="32" height="32" stroke-width="2" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
                    <path d="M12 19l0 .01"></path>
                </svg>
              </span>
              <span v-else class="widget__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
              </span>
            </Transition>
          </button>
        </div>
    `
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
          currentId: 0,
          data: data
        }
      },
      methods: {
        toggleOpen() {
          this.open = !this.open
        },
        changeSlide(id) {
          this.currentId = id
        }
      }
    }).mount('#quiz_widget')
  }
}

function initializeWidget() {
  return new MessageWidget()
}

initializeWidget()
