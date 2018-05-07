import Vue from 'vue'
import I18N from 'vue-i18n'

import { getLocale } from '../shared/cache'
import locales from '../shared/locales'

Vue.use(I18N)

const locale = getLocale()
// use(locale === 'zh' ? 'zh-CN' : locale)

export default new I18N({
  locale,
  messages: locales
})
