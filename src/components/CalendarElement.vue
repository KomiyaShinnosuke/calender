<template>
  <!-- tdに対してselfを入れないとcloseを押してもイベントバブリングで閉じても閉じない現象が発生する -->
  <!-- ただ、カレンダーの数字を押しても反応しなくなるのが直したいポイント。暫定的にspanタグにもメソッドを定義している -->
  <td
    class='days'
    @click.self='openModal(daynum)'
    :class="{ today: isToday(daynum) }"
  >
    <span v-if='isToday(daynum)' @click.self='openModal'>today</span>
    <span v-else @click.self='openModal'>{{ daynum }}</span>
    <AddScheduleDialog @close="closeModal" v-if="modal">
      <p>Please Input Your Schedule!</p>
      <div><input v-model="message"></div>
      <template slot="footer">
        <!-- ここに送信という文字列を入れなかった場合はcloseが表示される -->
        <button @click="doSend">送信</button>
      </template>
    </AddScheduleDialog>
  </td>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import AddScheduleDialog from './AddScheduleDialog'

export default {
  components: {
    AddScheduleDialog
  },
  data() {
    return {
      modal: false,
      message: ''
    }
  },
  props: {
    daynum: {
      requried: true
    }
  },
  methods: {
    isToday: function(day) {
      const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      var date = year + "-" + Number(month.toFixed(2)) + "-" + day
        if(this.today == date){
          return true
        }
        return false
    },
    openModal(day) {
      if(day === ''){
        return
      }
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        this.message = ''
        this.closeModal()
      }
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

</style>
