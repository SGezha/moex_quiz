<template>
  <div id="quiz_widget">
    <Transition name="chat">
      <div v-if="open" class="widget__container">
        <div class="top__actions">
          <button @click="reset()" class="top__actions_reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.50788 6.726C5.27288 3.89 8.41888 2 12.0029 2C17.5209 2 21.9999 6.48 21.9999 11.997C21.9999 17.516 17.5209 21.996 12.0029 21.996C6.75788 21.996 2.44988 17.948 2.03688 12.808C2.01288 12.506 2.22588 11.997 2.78588 11.997C3.17688 11.997 3.50088 12.297 3.53288 12.687C3.88388 17.056 7.54488 20.496 12.0029 20.496C16.6929 20.496 20.4999 16.688 20.4999 11.997C20.4999 7.308 16.6929 3.5 12.0029 3.5C8.96588 3.5 6.29888 5.097 4.79688 7.495L6.78788 7.5C7.20188 7.5 7.53788 7.836 7.53788 8.25C7.53788 8.664 7.20188 9 6.78788 9H2.75488C2.34088 9 2.00488 8.664 2.00488 8.25V4.201C2.00488 3.787 2.34088 3.451 2.75488 3.451C3.16888 3.451 3.50488 3.786 3.50488 4.201L3.50788 6.726Z"
                fill="currentColor"
              />
            </svg>
            Начать тест заново
          </button>
          <button @click="toggleOpen()" class="top__actions_close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div ref="msg_chat" class="message__container">
          <div v-for="state, ind in history" class="msg_list">
            <div class="message__author">
              {{ data.states[state.id].author }}
            </div>
            <div class="messages__block">
              <div
                v-for="msg in data.states[state.id].messages"
                :key="msg"
                v-html="msg.text"
                class="msg"
              ></div>
            </div>
            <div v-if="state.answer" class="message_answer">
              <label>Вы ответили:</label>
              <div
                v-html="state.answer"
                class="msg"
              ></div>
              <button @click="editAnswer(ind)">Изменить вариант ответа</button>
            </div>
            <div v-else class="message_actions">
              <label>Выберите ответ:</label>
              <div class="btn_container">
                <button
                  @click="saveAnswer(value.target, value.label)"
                  v-for="value in data.states[state.id].on"
                  :key="value.label"
                >
                  {{ value.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <button @click="toggleOpen()" class="button__container">
      <Transition name="fade">
        <span v-if="!open" class="widget__icon">
          <svg
            width="39"
            height="22"
            viewBox="0 0 39 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="13.9314"
              y="0.880371"
              width="25.0672"
              height="9.5769"
              fill="#FF0508"
            />
            <rect
              x="0.324951"
              y="9.7229"
              width="38.6751"
              height="11.787"
              fill="#FF0508"
            />
          </svg>
        </span>
        <span v-else class="widget__icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#FF0508"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#FF0508"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </Transition>
    </button>
  </div>
</template>
