import { mapGetters } from 'vuex'

// This mixin extracts preference information from vuex and then exposes it to Vue components.
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
