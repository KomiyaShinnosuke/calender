<template>
  <div class="home">
    <CalendarBoard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CalendarBoard from '@/components/CalendarBoard.vue'

export default {
  name: 'Home',
  components: {
    CalendarBoard
  }
}
</script>
