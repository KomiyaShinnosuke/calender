<template>
  <td
    class='days'
    @click='dateClick(daynum)'
    :class="{ today: isToday(daynum), active: isActive(daynum) }"
  >
    <span v-if='isToday(daynum)'>today</span>
    <span v-else>{{ daynum }}</span>
  </td>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import CalendarElement from './CalendarElement'

export default {
  components: {
    CalendarElement
  },
  props: {
    daynum: {
      requried: true
    }
  },
  methods: {
    ...mapActions([
      'dateClick'
    ]),
    isToday: function(day) {
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      var date = year + "-" + Number(month.toFixed(2)) + "-" + day
        if(this.today == date){
          return true
        }
        return false
    },
    // 単なるdayでの区別しかしていないので、本当はやめたい
    // ただ、googleカレンダーはクリックしたdayしか見ないので、
    // クリックされたのを赤くする仕様は現状残しておいて、
    // 予定を入れられるようになったら消してもいいかなと思ってる
    isActive: function(day) {
      if(this.day == day){
        return true
      }
      return false
    }
  },
  computed: {
    ...mapState([
      'year',
      'month',
      'day'
    ]),
    ...mapGetters([
      'today'
    ])
  }
}
</script>

<style scoped>
.cal-main {
  font-size: 14px;
  line-height: 20px;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
}

.days {
  padding: 8px;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid #ddd;
}
.today {
  background-color: #fcf8e3;
}
.active {
  background-color: #ffc9d7;
}

</style>
