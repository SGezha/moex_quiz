<template>
  <div id="quiz_widget">
    <Transition name="chat">
      <div v-if="open" class="widget__container">
        <div class="message__container">
          <div v-for="state in history" class="msg_list">
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
            <div class="message_actions">
              <button
                @click="nextQuest(value.target)"
                v-for="value in data.states[state.id].on"
                :key="value.label"
              >
                {{ value.label }}
              </button>
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
