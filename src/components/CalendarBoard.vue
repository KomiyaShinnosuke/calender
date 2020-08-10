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
          <td class='days' v-for='(day, index) in week' :key='index'>
            {{ day }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      year: 2020,
      month:3,
      day:-1,
      today: ''
    }
  },
  computed: {
    calData: function () {
      console.log(this.year + "-" + this.month + "のデータ作成")
      var calData = []
      calData[0] = [ 1, 2, 3, 4, 5, 6, 7]
      calData[1] = [ 8, 9,10,11,12,13,14]
      calData[2] = [15,16,17,18,19,20,21]
      calData[3] = [22,23,24,25,26,27,28]
      calData[4] = [29,30,31,"","","",""]
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
