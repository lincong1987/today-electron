<template>
  <transition name="fade">
    <div class="config-view">
      <split-frame :border="false">
        <div slot="left-panel"></div>
        <div class="content-wrapper"
             slot="right-panel">
          <div class="content">
            <h1 class="title">Welcome!</h1>
            <p class="desc">
              Before you start, please tell us something about yourself.
            </p>
            <p class="input-container">
              <input-box v-model="username"
                         placeholder="Username"
                         :embedded="true" />
            </p>
            <button-base type="primary"
                         text="Start"
                         :hasValue="true"
                         :value="username"
                         @click="handleButtonClick" />
          </div>
        </div>
      </split-frame>
    </div>
  </transition>

</template>

<script>
import { mapActions } from 'vuex'

import ButtonBase from '../components/wzel/components/button'
import SplitFrame from '../components/split-frame'
import InputBox from '../components/wzel/components/input'

export default {
  name: 'config-view',
  props: {},
  data() {
    return {
      username: ''
    }
  },
  methods: {
    _goToMain() {
      this.$router.push({
        path: '/main'
      })
    },
    handleButtonClick() {
      this.initializeApplication({
        initFlag: true,
        username: this.username
      })
      this._goMainRoute()
    },
    _goMainRoute() {
      this.$router.push({
        path: '/main/today'
      })
    },
    ...mapActions(['initializeApplication'])
  },
  components: {
    ButtonBase,
    SplitFrame,
    InputBox
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/mixins.styl';
@import '../style/variables.styl';

.config-view {
  transition-fade();

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    .content {
      padding: 0 10px;

      .title {
        margin-bottom: 8px;
        font-size: 36px;
        line-height: 36px;
      }

      .desc {
        margin-bottom: 8px;
        width: 460px;
        font-size: 16px;
        line-height: 18px;
        color: $text-color-dark-grey;
      }

      .input-container {
        width: 350px;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
