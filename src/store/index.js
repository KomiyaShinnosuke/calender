import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      {
        day: '2020-8-11',
        todos: [
          { content: 'English' },
          { content: 'Mathematics' }
        ]
      },
      {
        day: '2020-8-12',
        todos: [
          { content: 'English' },
          { content: 'Mathematics' }
        ]
      }
    ],
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day : 'a' // 何かしら文字列を入れないと空白が赤くなってしまうので、一時的に適当な文字列を入れた
  },
  mutations: {
    setLastMonth(state, payload) {
      if (state.month === 1) {
        state.year -= 1
        state.month = 13
      }
      state.month -= 1
    },
    setNextMonth(state, payload) {
      if (state.month === 12) {
        state.year += 1
        state.month = 0
      }
      state.month += 1
    },
    addSchedule(state, payload) {
      const list = state.lists.map(obj => obj.day)
      const index = list.indexOf(payload.day)
      if (index === -1) {
        state.lists.push({ day: payload.day, todos:[] })
        state.lists[list.length].todos.push({ context: payload.context })
      } else {
        state.lists[index].todos.push({ context: payload.context })
      }
    }
  },
  actions: {
    setLastMonth(context, payload) {
      context.commit('setLastMonth', payload)
    },
    setNextMonth(context, payload) {
      context.commit('setNextMonth', payload)
    },
    dateClick(context, payload) {
      context.commit('dateClick', payload)
    },
    addSchedule(context, payload) {
      context.commit('addSchedule', payload)
    }
  },
  getters: {
    today: state => {
      return state.year + '-' + state.month + '-' + new Date().getDate()
    }
  }
})
