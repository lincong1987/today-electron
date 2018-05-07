<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
/**
 * Application lifecycle: initialization, tearind-down, scheduling jobs.
 */

import { ipcRenderer } from 'electron'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import nodeSchedule from 'node-schedule'

import 'font-awesome/css/font-awesome.css'

import { savePreferences } from './store/modules/preference'
import { saveTodoItems } from './store/modules/todo-item'
import { saveListItems } from './store/modules/list-item'
import { saveDailySummaries } from './store/modules/daily-summary'

import * as types from '../shared/event-types'
import { getToday } from './utils/datetime'

export default {
  name: 'today',
  created() {
    this._bindIpc()
    this._passDayJobs()
    this._bindUnloadActsions()
  },
  methods: {
    _bindIpc() {
      ipcRenderer.on(types.GO_TO_SUMMARY, () => {
        this.$router.push({
          path: '/summary'
        })
      })
      ipcRenderer.on(types.GO_TO_SETTINGS, () => {
        this.$router.push({
          path: '/settings'
        })
      })
      ipcRenderer.on(types.GO_TO_MAIN, () => {
        this.$router.push({
          path: '/main/today'
        })
      })
      ipcRenderer.on(types.NOTIFICATION, ({ title, text }) => {
        this.$noti({
          title,
          message: text,
          type: 'info'
        })
      })
    },
    _passDayJobs() {
      const rule = new nodeSchedule.RecurrenceRule()
      rule.hour = 0
      rule.minutes = 0

      nodeSchedule.scheduleJob(rule, () => {
        this.setToday(getToday())
        this.doSummary()
      })
    },
    _bindUnloadActsions() {
      window.onbeforeunload = e => {
        saveDailySummaries()
        saveTodoItems()
        saveListItems()
        savePreferences()
      }
    },
    ...mapGetters(['todoItems']),
    ...mapActions(['doSummary']),
    ...mapMutations({
      setToday: 'SET_TODAY'
    })
  }
}
</script>

<style lang="stylus">
@import './styles/index.styl'
@import './styles/mixins.styl'

#app
  no-flex-full-screen()
</style>
