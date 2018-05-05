<template>
  <div class="calendar-view">
    <div class="calendar-layout-wrapper">
      <wz-calendar-carousel :month="month"
                       :year="year"
                            @month-change="handleMonthChange"></wz-calendar-carousel>
    </div>
    <div class="calendar-wrapper">
      <wz-calendar :month="month"
                :year="year"></wz-calendar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CalendarView',
    data () {
      return {
        month: (new Date()).getMonth(),
        year: (new Date()).getFullYear()
      }
    },
    methods: {
      handleMonthChange (diff) {
        if (this.month === 11 && diff === 1) {
          this.year += 1
          this.month = 0
        } else if (this.month === 0 && diff === -1) {
          this.year -= 1
          this.month = 11
        } else {
          this.month += diff
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../styles/mixins.styl';
  @import '../styles/variables.styl';

  .calendar-view {
    display: flex;
    flex-direction: column;
    height: 100%;

    .calendar-layout-wrapper {
      flex: 0 0 140px;
      height: 140px;
    }

    .calendar-wrapper {
      flex: 1;
      padding: 10px;
    }
  }
</style>
