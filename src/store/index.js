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
    // addCard(state, payload) {
    //   let i = Math.floor(Math.random () * 4)
    //   let j = Math.floor(Math.random () * 13)
    //   let sub = JSON.parse(JSON.stringify(state.cards[i]))
    //   const pic = sub.splice(j, 1)[0].substr(2, 1)
    //   let num = state.cards[i].splice(j, 1)
    //   if (pic !== '0' && pic !== '1' && pic !== '2' && pic !== '3') {
    //     state.myCards.push({ style: num[0], num: Number(num[0].substr(1, 1)) })
    //   } else {
    //     state.myCards.push({ style: num[0], num: 10 })
    //   }
    // }
    // quitCard(state, payload) {
    //   state.cards = [
    //     ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13'],
    //     ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13'],
    //     ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13'],
    //     ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13']
    //   ]
    //   state.myCards = []
    // }
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
    }
  },
  getters: {
    today: state => {
      return state.year + '-' + state.month + '-' + new Date().getDate()
    }
  }
})
