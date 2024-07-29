<template>
  <div onclick ontouchmove id="quiz_widget">
    <Transition name="chat">
      <div v-if="open" class="widget_container" :style="`--bg: ${isBg ? 'white' : '#13161c'}`">
        <Transition name="slide">
          <div v-if="isChat" class="chat_start">
            <Transition name="fade">
              <div v-if="showChat" class="chat_start">
                <div class="top_actions">
                  <button @click="reset()" class="top_actions_reset">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3.50788 6.726C5.27288 3.89 8.41888 2 12.0029 2C17.5209 2 21.9999 6.48 21.9999 11.997C21.9999 17.516 17.5209 21.996 12.0029 21.996C6.75788 21.996 2.44988 17.948 2.03688 12.808C2.01288 12.506 2.22588 11.997 2.78588 11.997C3.17688 11.997 3.50088 12.297 3.53288 12.687C3.88388 17.056 7.54488 20.496 12.0029 20.496C16.6929 20.496 20.4999 16.688 20.4999 11.997C20.4999 7.308 16.6929 3.5 12.0029 3.5C8.96588 3.5 6.29888 5.097 4.79688 7.495L6.78788 7.5C7.20188 7.5 7.53788 7.836 7.53788 8.25C7.53788 8.664 7.20188 9 6.78788 9H2.75488C2.34088 9 2.00488 8.664 2.00488 8.25V4.201C2.00488 3.787 2.34088 3.451 2.75488 3.451C3.16888 3.451 3.50488 3.786 3.50488 4.201L3.50788 6.726Z"
                        fill="currentColor" />
                    </svg>
                    Начать тест заново
                  </button>
                  <button @click="toggleOpen()" class="top_actions_close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
                <div ref="msg_chat" class="message_container" :style="`--bot_mar: ${curBotMargin};`">
                  <div v-for="(state, ind) in history" class="msg_list">
                    <div v-if="data.states[state.id].author" class="message_author">
                      {{ data.states[state.id].author }}
                    </div>
                    <div class="messages_block">
                      <div v-if="state.isTyping" class="msg_typing">
                        <div class="typing">
                          <div class="typing_dot"></div>
                          <div class="typing_dot"></div>
                          <div class="typing_dot"></div>
                        </div>
                      </div>
                      <div v-else v-for="(msg, ind) in data.states[state.id].messages" :key="msg"
                        :style="`--delay: ${500 * ind}ms;`" :class="`${msg.noAnimations ? 'noAnimation' : ''}`"
                        @animationend="msg.noAnimations = true" class="msg message">
                        <div v-if="data.states[state.id].step" class="msg_step">{{ data.states[state.id].step }}</div>
                        <p v-html="msg.text"></p>
                        <div v-if="msg.btn" class="msg_btns">
                          <a v-for="btn in msg.btn" :href="btn.url" :target="btn.target" class="msg_btn">
                            {{ btn.label }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                              fill="none">
                              <path d="M7.5 17L17.5 7" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M7.5 7H17.5V17" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div v-if="state.answer" class="message_answer">
                      <label>Ваш ответ</label>
                      <div v-html="state.answer" class="msg" :class="`${state.anim ? 'noAnimation' : ''}`"
                        @animationend="state.anim = true"></div>
                      <button @click="editAnswer(ind)">
                        Изменить вариант ответа
                      </button>
                    </div>
                  </div>
                  <div v-if="isTyping" class="msg_typing">
                    <div class="typing">
                      <div class="typing_dot"></div>
                      <div class="typing_dot"></div>
                      <div class="typing_dot"></div>
                    </div>
                  </div>
                </div>
                <Transition name="answer_btn">
                  <div v-if="answer.show" class="message_actions"
                    :class="`${answer.noAnimations ? 'noAnimation' : ''} ${answer.show ? 'show' : ''} ${answer.on ? '' : 'no_anwser'}`"
                    @animationend="answer.noAnimations = true" ref="message_actions">
                    <!-- <label>Выберите ответ:</label> -->
                    <div class="btn_container">
                      <form v-if="answer.type == 'input'" @submit.prevent="
                        saveAnswer(answer.on[Object.keys(answer.on)[0]].target, answer.input)
                        " class="input_form">
                        <input type="text" :placeholder="value.label" v-for="value in answer.on" v-model="answer.input"
                          :key="value.label" :class="`${answer.input.length > 0 ? '' : 'hide'}`" />
                        <button class="btn_send" type="submit">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                            fill="none">
                            <path
                              d="M16.7071 8.70711C17.0976 8.31659 17.0976 7.68343 16.7071 7.2929L10.3431 0.928937C9.95263 0.538413 9.31946 0.538412 8.92894 0.928936C8.53841 1.31946 8.53841 1.95263 8.92893 2.34315L14.5858 8.00001L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31945 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM-4.80825e-07 9L16 9.00001L16 7.00001L4.80825e-07 7L-4.80825e-07 9Z"
                              fill="white" />
                          </svg>
                        </button>
                      </form>
                      <button v-else @click="saveAnswer(value.target, value.label)" v-for="value in answer.on"
                        :key="value.label">
                        {{ value.label }}
                      </button>
                    </div>
                  </div>
                </Transition>
              </div>
              <div v-else class="chat_start">
                <svg class="logo" width="39" height="22" viewBox="0 0 39 22" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="13.9314" y="0.880371" width="25.0672" height="9.5769" fill="#FF0508" />
                  <rect x="0.324951" y="9.7229" width="38.6751" height="11.787" fill="#FF0508" />
                </svg>
              </div>
            </Transition>
          </div>
        </Transition>
        <Transition name="fade">
          <div v-if="!isChat" class="stories" @mousedown="togglePause()" @mouseup="togglePause()"
            @touchstart="togglePause()" @touchend="togglePause()">
            <div class="control">
              <div class="left" @click="prevStories()"></div>
              <div class="right" @click="nextStories()"></div>
            </div>
            <div class="st_lines">
              <div v-for="(storie, ind) in stories" :key="storie.id" class="line">
                <div :class="`st_line_${storie.id} ${storie.id == currentStory.id ? 'active' : ''
                  } ${storie.watched ? 'watched' : ''} ${isPause ? 'paused' : ''
                  }`" class="progress" @animationend="nextStories()"></div>
              </div>
            </div>
            <transition-group name="list">
              <div v-for="storie in stories" :key="storie.id" :style="`--textColor: ${storie.textColor}; --page: ${storie.id * 100
                }%; --id: ${storie.position};`" class="stories_element" v-show="!storie.watched">
                <div class="st_container">
                  <h4 v-if="storie.title" class="stories_element_title">
                    {{ storie.title }}
                  </h4>
                  <p v-if="storie.desc" class="stories_element_title_desc">
                    {{ storie.desc }}
                  </p>
                </div>
                <img class="bg" loading="lazy" :src="storie.media" :alt="storie.desc" @contextmenu.prevent="" />
              </div>
            </transition-group>
            <div class="start_btn">
              <button @click="isChat = true" class="btn">Пройти тест</button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
    <button @click="toggleOpen()" class="button_container">
      <div class="stories_circle">
        <div class="icon_line"></div>
        <div v-for="storie in stories" :key="storie.id" :class="`${storie.watched ? 'watched' : ''}`" class="st_circle">
        </div>
      </div>
      <span v-if="!open" class="widget_icon">
        <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="13.9314" y="0.880371" width="25.0672" height="9.5769" fill="#FF0508" />
          <rect x="0.324951" y="9.7229" width="38.6751" height="11.787" fill="#FF0508" />
        </svg>
      </span>
      <span v-else class="widget_icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#FF0508" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6 6L18 18" stroke="#FF0508" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </button>
  </div>
</template>
