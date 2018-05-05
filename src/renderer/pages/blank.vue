<template>
  <div class="blank-view">
    <div class="info">
      {{ info }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'blank-view',
  props: {
    info: {
      type: String,
      default: 'Empty'
    }
  },
  computed: {
    displayed() {
      if (this.info) return this.info
      return this.$t('blankView.empty')
    }
  }
}
</script>

<style lang="stylus" scoped>
.blank-view
  display flex
  flex 1
  width 100%
  height 100%
  flex-direction column
  justify-content center

  .info
    text-align center
    color #d8d8d8
</style>
