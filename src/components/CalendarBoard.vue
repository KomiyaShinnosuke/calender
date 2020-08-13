<template>
  <div>
    <div class='cal-header'>
      <span class='header-arrow' v-on:click='setLastMonth'>←</span>
      <span class='selected-month'>{{ year }}/{{ month }}</span>
      <span class='header-arrow' v-on:click='setNextMonth'>→</span>
    </div>
    <table class='cal-main'>
      <thead>
        <th class='weekdays' v-for='(weekday, index) in weekdays' :key='index'>
          {{ weekday }}
        </th>
      </thead>
      <tbody>
        <tr v-for='(week, index) in calData' :key='index'>
          <td
            class='days'
            v-for='(daynum, index) in week'
            :key='index'
            @click='dateClick(daynum)'
            :class="{ today: isToday(daynum), active: day === daynum }"
          >
            <span v-if='isToday(daynum)'>today</span>
            <span v-else>{{ daynum }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState([
      'weekdays',
      'year',
      'month'
    ]),
    ...mapGetters([
      'today',
      'day'
    ]),
    calData: function () {
      console.log(this.year + "-" + this.month + "のデータ作成")
      let calData = []
      let firstWeekDay = new Date(this.year, this.month-1, 1).getDay()
      let lastDay = new Date(this.year, this.month, 0).getDate()
      let dayNum = 1
      while(dayNum <= lastDay) {
        let weekData = []
        for (var i = 0; i <= 6; i++) {
          if (calData.length === 0 && i < firstWeekDay) {
            weekData[i] = ''
          } else if (lastDay < dayNum) {
            weekData[i] = ''
          } else {
            weekData[i] = dayNum
            dayNum++
          }
        }
        calData.push(weekData)
      }
      return calData
    }
  },
  methods: {
    setLastMonth() {
      if (this.month === 1) {
        this.year -= 1
        this.month = 13
      }
      this.month -= 1
    },
    setNextMonth() {
      if (this.month === 12) {
        this.year += 1
        this.month = 0
      }
      this.month += 1
    },
    dateClick(daynum) {
      this.day = daynum
    },
    isToday: function(day) {
      var date = this.year + "-" + Number(this.month.toFixed(2)) + "-" + day
        if(this.today == date){
            return true
        }
        return false
    }
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
.weekdays {
  padding: 0;
  text-align: center;
  vertical-align: middle;
  font-weight: normal;
  color: #999;
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

.cal-header {
  font-size: 24px;
  padding: 0;
  text-align: center;
  margin-bottom: 10px; 
  background-color: darkorange;
  border-bottom: 1px solid #ddd;
  display:flex;
  justify-content: space-between;
}
.cal-header span{
  padding:15px 20px;
  color: white;
  display: inline-block;
}
</style>
