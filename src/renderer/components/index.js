import WzButton from './packages/button'
import WzCalendar from './packages/calendar'
import WzCalendarCarousel from './packages/calendar/calendar-carousel'
import WzDatePicker from './packages/date-picker'
import WzDivider from './packages/divider'
import WzDropdown from './packages/dropdown'
import WzInput from './packages/input'
import WzSegment from './packages/segment'
import WzSelect from './packages/select'
import WzSwitch from './packages/switch'

import WzContextMenu from './packages/context-menu'
import WzNotification from './packages/notification'
import WzMessage from './packages/message'
import WzModal from './packages/modal'

import { use } from './locale/index'

const components = {
  WzButton,
  WzCalendar,
  WzCalendarCarousel,
  WzDatePicker,
  WzDropdown,
  WzDivider,
  WzInput,
  WzSegment,
  WzSelect,
  WzSwitch
}

const install = function(Vue, options) {
  use(options && options.lang)

  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })

  Vue.prototype.$noti = WzNotification
  Vue.prototype.$message = WzMessage
  Vue.prototype.$confirm = WzModal.confirm
  Vue.prototype.$dialog = WzModal.dialog
  Vue.prototype.$contextMenu = WzContextMenu
}

export default {
  install,
  WzButton,
  WzCalendar,
  WzCalendarCarousel,
  WzDatePicker,
  WzDropdown,
  WzDivider,
  WzInput,
  WzSegment,
  WzSelect,
  WzSwitch
}
