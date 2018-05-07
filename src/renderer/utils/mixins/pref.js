import { mapGetters } from 'vuex'

export const extractPreferencesMixin = {
  computed: {
    avatarUrl() {
      return this.avatarCode || 'static/images/default.jpeg'
    },
    ...mapGetters([
      'avatarCode',
      'username',
      'startUsingDatetime',
      'playSound',
      'openAni',
      'initFlag'
    ])
  }
}
