import { generateUUID } from '../uuid'
import { clearHours } from '../datetime'

export default class DailySummary {
  constructor({ date, cItems, uItems }) {
    this._id = generateUUID()
    this.date = clearHours(date)
    this.completedItems = cItems
    this.uncompletedItems = uItems
  }
}
