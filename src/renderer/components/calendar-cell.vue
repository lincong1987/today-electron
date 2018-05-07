<template>
  <div class="summary-calendar-cell">
    <ul class="bars">
      <li class="complete bar"
          v-for="(_, index) in completedCount"
          :key="index">
      </li>
      <li class="umcomplete bar"
          v-for="(_, index) in uncompletedCount"
          :key="index">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { clearHours } from '../utils/datetime'

export default {
  name: 'wz-calendar-cell',
  props: {
    cell: {
      type: Object
    }
  },
  computed: {
    completedCount() {
      const datetime = clearHours(this.cell.date)
      const summary = this.summaries.find(item => {
        if (item.date === datetime) return true
        return false
      })
      if (summary) {
        return summary.completedItems.length
      }
      return 0
    },
    uncompletedCount() {
      const datetime = clearHours(this.cell.date)
      const summary = this.summaries.find(item => {
        if (item.date === datetime) return true
        return false
      })
      if (summary) {
        return summary.uncompletedItems.length
      }
      return 0
    },
    ...mapGetters(['summaries'])
  }
}
</script>

<style lang="stylus" scoped>
.summary-calendar-cell
  .bars
    display flex
    flex-wrap wrap
    position absolute
    left 12px
    bottom 12px
    right 12px

    .bar
      margin 4px 2px 0 0
      width 14px
      height 6px
      border-radius 3px

    .complete
      background $primary-color

    .umcomplete
      background $red-color
</style>
